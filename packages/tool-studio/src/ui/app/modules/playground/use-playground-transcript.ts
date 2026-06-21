import type { ToolResultContent } from "@anvia/core/completion";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { AgentRunStreamEvent, StudioTranscriptChildAgentEvent } from "../../../../types";
import { errorMessage, formatToolValue } from "../shared/format";
import {
  findMatchingToolIndex,
  findMatchingToolIndexByCall,
  nextTranscriptId,
} from "../shared/transcript";
import type { ToolApprovalUpdate, ToolQuestionUpdate, TranscriptEntry } from "../shared/types";

export function usePlaygroundTranscript(): {
  messages: TranscriptEntry[];
  setMessages: Dispatch<SetStateAction<TranscriptEntry[]>>;
  appendAgentToolEvent: (event: Extract<AgentRunStreamEvent, { type: "agent_tool_event" }>) => void;
  appendAssistantError: (message: string) => void;
  appendAssistantText: (delta: string) => void;
  appendReasoningText: (delta: string, reasoningId: string | undefined) => void;
  appendToolCall: (toolName: string, args: string, callId: string | undefined) => void;
  appendToolResult: (props: {
    toolName: string;
    callId: string | undefined;
    args: string;
    result: string;
    structuredResult?: ToolResultContent[];
  }) => void;
  assignAssistantTraceId: (traceId: string) => void;
  clearPendingAssistant: () => void;
  updateToolApproval: (approval: ToolApprovalUpdate) => void;
  updateToolQuestion: (question: ToolQuestionUpdate) => void;
} {
  const [messages, setMessages] = useState<TranscriptEntry[]>([]);

  return {
    messages,
    setMessages,
    appendAgentToolEvent: (event) => setMessages((current) => appendAgentToolEvent(current, event)),
    appendAssistantError: (message) =>
      setMessages((current) => appendAssistantError(current, message)),
    appendAssistantText: (delta) => setMessages((current) => appendAssistantText(current, delta)),
    appendReasoningText: (delta, reasoningId) =>
      setMessages((current) => appendReasoningText(current, delta, reasoningId)),
    appendToolCall: (toolName, args, callId) =>
      setMessages((current) => appendToolCall(current, toolName, args, callId)),
    appendToolResult: (props) => setMessages((current) => appendToolResult(current, props)),
    assignAssistantTraceId: (traceId) =>
      setMessages((current) => assignAssistantTraceId(current, traceId)),
    clearPendingAssistant: () => setMessages((current) => withoutPendingAssistant(current)),
    updateToolApproval: (approval) =>
      setMessages((current) => updateToolApproval(current, approval)),
    updateToolQuestion: (question) =>
      setMessages((current) => updateToolQuestion(current, question)),
  };
}

function appendAssistantText(entries: TranscriptEntry[], delta: string): TranscriptEntry[] {
  const next = [...entries];
  const last = next.at(-1);
  if (last?.kind === "message" && last.role === "assistant") {
    if (last.tone === "pending") {
      const { tone: _tone, ...readyMessage } = last;
      next[next.length - 1] = { ...readyMessage, text: delta };
    } else {
      next[next.length - 1] = { ...last, text: `${last.text}${delta}` };
    }
  } else {
    next.push({
      entryId: nextTranscriptId(),
      kind: "message",
      role: "assistant",
      text: delta,
    });
  }
  return next;
}

function appendAssistantError(entries: TranscriptEntry[], message: string): TranscriptEntry[] {
  const next = [...entries];
  const last = next.at(-1);
  const entry = {
    entryId:
      last?.kind === "message" && last.role === "assistant" && last.tone === "pending"
        ? last.entryId
        : nextTranscriptId(),
    kind: "message" as const,
    role: "assistant" as const,
    text: message,
    tone: "error" as const,
  };
  if (last?.kind === "message" && last.role === "assistant" && last.tone === "pending") {
    next[next.length - 1] = entry;
    return next;
  }
  return [...next, entry];
}

function assignAssistantTraceId(entries: TranscriptEntry[], traceId: string): TranscriptEntry[] {
  const next = [...entries];
  for (let index = next.length - 1; index >= 0; index -= 1) {
    const entry = next[index];
    if (entry?.kind === "message" && entry.role === "assistant") {
      next[index] = { ...entry, traceId };
      break;
    }
  }
  return next;
}

function updateToolApproval(
  entries: TranscriptEntry[],
  approval: ToolApprovalUpdate,
): TranscriptEntry[] {
  const next = withoutPendingAssistant(entries);
  const matchedIndex = findMatchingToolIndexByCall(next, approval.toolName, approval.callId);
  if (matchedIndex < 0) {
    next.push({
      entryId: nextTranscriptId(),
      kind: "tool",
      toolName: approval.toolName,
      ...(approval.callId === undefined ? {} : { callId: approval.callId }),
      approval: {
        id: approval.id,
        status: approval.status,
        requestedAt: approval.requestedAt,
        ...(approval.resolvedAt === undefined ? {} : { resolvedAt: approval.resolvedAt }),
        ...(approval.reason === undefined ? {} : { reason: approval.reason }),
      },
    });
    return next;
  }

  const existing = next[matchedIndex];
  if (existing !== undefined && existing.kind === "tool") {
    next[matchedIndex] = {
      ...existing,
      approval: {
        id: approval.id,
        status: approval.status,
        requestedAt: approval.requestedAt,
        ...(approval.resolvedAt === undefined ? {} : { resolvedAt: approval.resolvedAt }),
        ...(approval.reason === undefined ? {} : { reason: approval.reason }),
      },
    };
  }
  return next;
}

function updateToolQuestion(
  entries: TranscriptEntry[],
  question: ToolQuestionUpdate,
): TranscriptEntry[] {
  const next = withoutPendingAssistant(entries);
  const matchedIndex = findMatchingToolIndexByCall(next, question.toolName, question.callId);
  if (matchedIndex < 0) {
    next.push({
      entryId: nextTranscriptId(),
      kind: "tool",
      toolName: question.toolName,
      ...(question.callId === undefined ? {} : { callId: question.callId }),
      question: {
        id: question.id,
        status: question.status,
        requestedAt: question.requestedAt,
        ...(question.answeredAt === undefined ? {} : { answeredAt: question.answeredAt }),
        questions: question.questions,
        ...(question.answers === undefined ? {} : { answers: question.answers }),
      },
    });
    return next;
  }

  const existing = next[matchedIndex];
  if (existing !== undefined && existing.kind === "tool") {
    next[matchedIndex] = {
      ...existing,
      question: {
        id: question.id,
        status: question.status,
        requestedAt: question.requestedAt,
        ...(question.answeredAt === undefined ? {} : { answeredAt: question.answeredAt }),
        questions: question.questions,
        ...(question.answers === undefined ? {} : { answers: question.answers }),
      },
    };
  }
  return next;
}

function appendReasoningText(
  entries: TranscriptEntry[],
  delta: string,
  reasoningId: string | undefined,
): TranscriptEntry[] {
  const next = withoutPendingAssistant(entries);
  const last = next.at(-1);
  if (last?.kind === "reasoning" && (last.reasoningId ?? "") === (reasoningId ?? "")) {
    next[next.length - 1] = { ...last, text: `${last.text}${delta}` };
  } else {
    next.push({
      entryId: nextTranscriptId(),
      kind: "reasoning",
      ...(reasoningId === undefined ? {} : { reasoningId }),
      text: delta,
    });
  }
  return next;
}

function appendToolCall(
  entries: TranscriptEntry[],
  toolName: string,
  args: string,
  callId: string | undefined,
): TranscriptEntry[] {
  return [
    ...withoutPendingAssistant(entries),
    {
      entryId: nextTranscriptId(),
      kind: "tool",
      toolName,
      ...(callId === undefined ? {} : { callId }),
      ...(args.length === 0 ? {} : { args }),
    },
  ];
}

function appendToolResult(
  entries: TranscriptEntry[],
  props: {
    toolName: string;
    callId: string | undefined;
    args: string;
    result: string;
    structuredResult?: ToolResultContent[];
  },
): TranscriptEntry[] {
  const next = withoutPendingAssistant(entries);
  const matchedIndex = findMatchingToolIndex(next, props.toolName, props.callId);
  if (matchedIndex >= 0) {
    const existing = next[matchedIndex];
    if (existing !== undefined && existing.kind === "tool") {
      next[matchedIndex] = {
        ...existing,
        args: existing.args ?? props.args,
        result: props.result,
        ...(props.structuredResult === undefined
          ? {}
          : { structuredResult: props.structuredResult }),
      };
      return next;
    }
  }

  next.push({
    entryId: nextTranscriptId(),
    kind: "tool",
    toolName: props.toolName,
    ...(props.callId === undefined ? {} : { callId: props.callId }),
    args: props.args,
    result: props.result,
    ...(props.structuredResult === undefined ? {} : { structuredResult: props.structuredResult }),
  });
  return next;
}

function appendAgentToolEvent(
  entries: TranscriptEntry[],
  event: Extract<AgentRunStreamEvent, { type: "agent_tool_event" }>,
): TranscriptEntry[] {
  const childEvent = childAgentTranscriptEvent(event);
  if (childEvent === undefined) {
    return entries;
  }
  const next = withoutPendingAssistant(entries);
  const matchedIndex = findMatchingToolIndex(next, event.toolName, event.toolCallId);
  if (matchedIndex < 0) {
    next.push({
      entryId: nextTranscriptId(),
      kind: "tool",
      toolName: event.toolName,
      ...(event.toolCallId === undefined ? {} : { callId: event.toolCallId }),
      childEvents: [childEvent],
    });
    return next;
  }

  const existing = next[matchedIndex];
  if (existing === undefined || existing.kind !== "tool") {
    return next;
  }
  const childEvents = [...(existing.childEvents ?? [])];
  appendChildAgentTranscriptEvent(childEvents, childEvent);
  next[matchedIndex] = {
    ...existing,
    childEvents,
  };
  return next;
}

function withoutPendingAssistant(entries: TranscriptEntry[]): TranscriptEntry[] {
  for (let index = entries.length - 1; index >= 0; index -= 1) {
    const entry = entries[index];
    if (
      entry?.kind === "message" &&
      entry.role === "assistant" &&
      entry.tone === "pending" &&
      entry.text.trim().length === 0
    ) {
      return entries.filter((_, itemIndex) => itemIndex !== index);
    }
  }
  return [...entries];
}

function childAgentTranscriptEvent(
  event: Extract<AgentRunStreamEvent, { type: "agent_tool_event" }>,
): StudioTranscriptChildAgentEvent | undefined {
  const child = event.event;
  if (child.type === "text_delta") {
    return {
      kind: "message",
      agentId: event.agentId,
      ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
      text: child.delta,
    };
  }
  if (child.type === "reasoning_delta") {
    return {
      kind: "reasoning",
      agentId: event.agentId,
      ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
      ...(child.id === undefined ? {} : { reasoningId: child.id }),
      text: child.delta,
    };
  }
  if (child.type === "tool_call") {
    return {
      kind: "tool",
      agentId: event.agentId,
      ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
      toolName: child.toolCall.function.name,
      ...(child.toolCall.callId === undefined && child.toolCall.id === undefined
        ? {}
        : { callId: child.toolCall.callId ?? child.toolCall.id }),
      args: formatToolValue(child.toolCall.function.arguments),
    };
  }
  if (child.type === "tool_result") {
    return {
      kind: "tool",
      agentId: event.agentId,
      ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
      toolName: child.toolName,
      ...(child.toolCallId === undefined ? {} : { callId: child.toolCallId }),
      args: child.args,
      result: child.result,
      ...(child.structuredResult === undefined ? {} : { structuredResult: child.structuredResult }),
    };
  }
  if (child.type === "error") {
    return {
      kind: "message",
      agentId: event.agentId,
      ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
      text: `Error: ${errorMessage(child.error)}`,
    };
  }
  return undefined;
}

function appendChildAgentTranscriptEvent(
  childEvents: StudioTranscriptChildAgentEvent[],
  childEvent: StudioTranscriptChildAgentEvent,
) {
  if (childEvent.kind === "message") {
    const last = childEvents.at(-1);
    if (last?.kind === "message" && last.agentId === childEvent.agentId) {
      childEvents[childEvents.length - 1] = { ...last, text: `${last.text}${childEvent.text}` };
    } else {
      childEvents.push(childEvent);
    }
    return;
  }
  if (childEvent.kind === "reasoning") {
    const last = childEvents.at(-1);
    if (
      last?.kind === "reasoning" &&
      last.agentId === childEvent.agentId &&
      (last.reasoningId ?? "") === (childEvent.reasoningId ?? "")
    ) {
      childEvents[childEvents.length - 1] = { ...last, text: `${last.text}${childEvent.text}` };
    } else {
      childEvents.push(childEvent);
    }
    return;
  }
  const matchedIndex = findChildAgentToolEventIndex(childEvents, childEvent);
  if (matchedIndex < 0) {
    childEvents.push(childEvent);
    return;
  }
  const matched = childEvents[matchedIndex];
  if (matched?.kind === "tool") {
    childEvents[matchedIndex] = {
      ...matched,
      ...(matched.args !== undefined || childEvent.args === undefined
        ? {}
        : { args: childEvent.args }),
      ...(childEvent.result === undefined ? {} : { result: childEvent.result }),
    };
  }
}

function findChildAgentToolEventIndex(
  childEvents: StudioTranscriptChildAgentEvent[],
  event: Extract<StudioTranscriptChildAgentEvent, { kind: "tool" }>,
): number {
  for (let index = childEvents.length - 1; index >= 0; index -= 1) {
    const childEvent = childEvents[index];
    if (
      childEvent?.kind !== "tool" ||
      childEvent.agentId !== event.agentId ||
      childEvent.toolName !== event.toolName ||
      childEvent.result !== undefined
    ) {
      continue;
    }
    if (event.callId === undefined || childEvent.callId === event.callId) {
      return index;
    }
  }
  return -1;
}
