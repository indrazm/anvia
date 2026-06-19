import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  createMessage,
  defaultCreateRequest,
  defaultEventToDelta,
  defaultEventToFinal,
} from "./chat-defaults";
import {
  defaultAnswerQuestion,
  defaultDecideApproval,
  defaultEventToApproval,
  defaultEventToQuestion,
  upsertById,
} from "./human-input";
import { createChatTransport } from "./transport";
import type {
  ChatMessage,
  DefaultChatRequest,
  ToolApproval,
  ToolQuestion,
  ToolQuestionAnswer,
  UseChatOptions,
  UseChatResult,
} from "./types";

export function useChat<
  TRequest = DefaultChatRequest,
  TEvent = unknown,
  TMessage extends ChatMessage = ChatMessage,
>(options: UseChatOptions<TRequest, TEvent, TMessage> = {}): UseChatResult<TEvent, TMessage> {
  const [messages, setMessages] = useState<TMessage[]>(() => [...(options.initialMessages ?? [])]);
  const [events, setEvents] = useState<TEvent[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<UseChatResult<TEvent, TMessage>["status"]>("idle");
  const [error, setError] = useState<unknown>();
  const [approvals, setApprovals] = useState<ToolApproval[]>([]);
  const [questions, setQuestions] = useState<ToolQuestion[]>([]);
  const [decidingApprovals, setDecidingApprovals] = useState<Set<string>>(() => new Set());
  const [answeringQuestions, setAnsweringQuestions] = useState<Set<string>>(() => new Set());
  const abortRef = useRef<AbortController | undefined>(undefined);
  const messagesRef = useRef(messages);
  const approvalsRef = useRef(approvals);
  const questionsRef = useRef(questions);
  const decidingApprovalsRef = useRef(decidingApprovals);
  const answeringQuestionsRef = useRef(answeringQuestions);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    approvalsRef.current = approvals;
  }, [approvals]);

  useEffect(() => {
    questionsRef.current = questions;
  }, [questions]);

  useEffect(() => {
    decidingApprovalsRef.current = decidingApprovals;
  }, [decidingApprovals]);

  useEffect(() => {
    answeringQuestionsRef.current = answeringQuestions;
  }, [answeringQuestions]);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const transport = useMemo(() => {
    if (options.transport !== undefined) {
      return options.transport;
    }
    if (options.endpoint === undefined) {
      return undefined;
    }

    return createChatTransport<TRequest, TEvent>({
      endpoint: options.endpoint,
      format: options.format ?? "jsonl",
    });
  }, [options.transport, options.endpoint, options.format]);

  const createRequest = options.createRequest ?? defaultCreateRequest<TRequest, TMessage>;
  const eventToDelta = options.eventToDelta ?? defaultEventToDelta<TEvent>;
  const eventToFinal = options.eventToFinal ?? defaultEventToFinal<TEvent>;
  const humanInputOptions = options.humanInput;
  const eventToApproval = humanInputOptions?.eventToApproval ?? defaultEventToApproval<TEvent>;
  const eventToQuestion = humanInputOptions?.eventToQuestion ?? defaultEventToQuestion<TEvent>;

  const updateApproval = useCallback((approval: ToolApproval) => {
    setApprovals((current) => {
      const next = upsertById(current, approval);
      approvalsRef.current = next;
      return next;
    });
  }, []);

  const updateQuestion = useCallback((question: ToolQuestion) => {
    setQuestions((current) => {
      const next = upsertById(current, question);
      questionsRef.current = next;
      return next;
    });
  }, []);

  const clearHumanInput = useCallback(() => {
    approvalsRef.current = [];
    questionsRef.current = [];
    decidingApprovalsRef.current = new Set();
    answeringQuestionsRef.current = new Set();
    setApprovals([]);
    setQuestions([]);
    setDecidingApprovals(new Set());
    setAnsweringQuestions(new Set());
  }, []);

  const appendAssistantText = useCallback((assistantId: string, text: string) => {
    setMessages((current) =>
      current.map((message) =>
        message.id === assistantId
          ? ({ ...message, content: `${message.content}${text}` } as TMessage)
          : message,
      ),
    );
  }, []);

  const replaceAssistantText = useCallback((assistantId: string, text: string) => {
    setMessages((current) =>
      current.map((message) =>
        message.id === assistantId ? ({ ...message, content: text } as TMessage) : message,
      ),
    );
  }, []);

  const send = useCallback(
    async (nextInput?: string) => {
      if (transport === undefined) {
        throw new Error("useChat requires either transport or endpoint");
      }

      const content = nextInput ?? input;
      if (content.trim().length === 0) {
        return;
      }

      abortRef.current?.abort();
      const abortController = new AbortController();
      abortRef.current = abortController;

      const userMessage = createMessage<TMessage>("user", content);
      const assistantMessage = createMessage<TMessage>("assistant", "");
      const requestMessages = [...messagesRef.current, userMessage];
      const request = createRequest(content, requestMessages);

      setInput("");
      setError(undefined);
      setStatus("streaming");
      setEvents([]);
      clearHumanInput();
      setMessages([...requestMessages, assistantMessage]);

      try {
        for await (const event of transport.send(request, { signal: abortController.signal })) {
          setEvents((current) => [...current, event]);
          if (humanInputOptions !== undefined) {
            const approval = eventToApproval(event);
            if (approval !== undefined) {
              updateApproval(approval);
            }
            const question = eventToQuestion(event);
            if (question !== undefined) {
              updateQuestion(question);
            }
          }
          options.onEvent?.(event);

          const delta = eventToDelta(event);
          if (delta !== undefined && delta.length > 0) {
            appendAssistantText(assistantMessage.id, delta);
          }

          const final = eventToFinal(event);
          if (final !== undefined) {
            replaceAssistantText(assistantMessage.id, final);
          }
        }

        if (!abortController.signal.aborted) {
          setStatus("idle");
        }
      } catch (caught) {
        if (isAbortError(caught)) {
          setStatus("idle");
          return;
        }

        setError(caught);
        setStatus("error");
        options.onError?.(caught);
      } finally {
        if (abortRef.current === abortController) {
          abortRef.current = undefined;
        }
      }
    },
    [
      appendAssistantText,
      createRequest,
      clearHumanInput,
      eventToDelta,
      eventToFinal,
      eventToApproval,
      eventToQuestion,
      humanInputOptions,
      input,
      options,
      replaceAssistantText,
      transport,
      updateApproval,
      updateQuestion,
    ],
  );

  const decideToolApproval = useCallback(
    async (approvalId: string, approved: boolean, reason?: string) => {
      if (humanInputOptions === undefined) {
        throw new Error("useChat humanInput is not configured");
      }
      if (decidingApprovalsRef.current.has(approvalId)) {
        return;
      }

      const nextDeciding = new Set(decidingApprovalsRef.current).add(approvalId);
      decidingApprovalsRef.current = nextDeciding;
      setDecidingApprovals(nextDeciding);
      try {
        const approval = approvalsRef.current.find((item) => item.id === approvalId);
        const input = {
          approvalId,
          approved,
          ...(reason === undefined ? {} : { reason }),
          ...(approval === undefined ? {} : { approval }),
        };
        const result =
          humanInputOptions.decideApproval === undefined
            ? await defaultDecideApproval(input, humanInputOptions)
            : await humanInputOptions.decideApproval(input);
        if (result !== undefined) {
          updateApproval(result);
        }
      } finally {
        const next = new Set(decidingApprovalsRef.current);
        next.delete(approvalId);
        decidingApprovalsRef.current = next;
        setDecidingApprovals(next);
      }
    },
    [humanInputOptions, updateApproval],
  );

  const approveTool = useCallback(
    async (approvalId: string, reason?: string) => {
      await decideToolApproval(approvalId, true, reason);
    },
    [decideToolApproval],
  );

  const rejectTool = useCallback(
    async (approvalId: string, reason?: string) => {
      await decideToolApproval(approvalId, false, reason);
    },
    [decideToolApproval],
  );

  const answerToolQuestion = useCallback(
    async (questionId: string, answers: ToolQuestionAnswer[]) => {
      if (humanInputOptions === undefined) {
        throw new Error("useChat humanInput is not configured");
      }
      if (answeringQuestionsRef.current.has(questionId)) {
        return;
      }

      const nextAnswering = new Set(answeringQuestionsRef.current).add(questionId);
      answeringQuestionsRef.current = nextAnswering;
      setAnsweringQuestions(nextAnswering);
      try {
        const question = questionsRef.current.find((item) => item.id === questionId);
        const input = {
          questionId,
          answers,
          ...(question === undefined ? {} : { question }),
        };
        const result =
          humanInputOptions.answerQuestion === undefined
            ? await defaultAnswerQuestion(input, humanInputOptions)
            : await humanInputOptions.answerQuestion(input);
        if (result !== undefined) {
          updateQuestion(result);
        }
      } finally {
        const next = new Set(answeringQuestionsRef.current);
        next.delete(questionId);
        answeringQuestionsRef.current = next;
        setAnsweringQuestions(next);
      }
    },
    [humanInputOptions, updateQuestion],
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = undefined;
    setStatus("idle");
  }, []);

  const reset = useCallback(
    (nextMessages?: TMessage[]) => {
      const resetMessages = nextMessages ?? [];
      messagesRef.current = resetMessages;
      abortRef.current?.abort();
      abortRef.current = undefined;
      setMessages(resetMessages);
      setEvents([]);
      clearHumanInput();
      setError(undefined);
      setInput("");
      setStatus("idle");
    },
    [clearHumanInput],
  );

  const text = messages
    .filter((message) => message.role === "assistant")
    .map((message) => message.content)
    .join("");

  return {
    messages,
    events,
    input,
    setInput,
    send,
    stop,
    reset,
    status,
    error,
    text,
    humanInput: {
      approvals: {
        all: approvals,
        pending: approvals.filter((approval) => approval.status === "pending"),
      },
      questions: {
        all: questions,
        pending: questions.filter((question) => question.status === "pending"),
      },
    },
    decidingApprovals,
    answeringQuestions,
    approveTool,
    rejectTool,
    answerToolQuestion,
  };
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}
