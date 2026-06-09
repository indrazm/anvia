import {
  assertCompletionRequestSupported,
  type CompletionModel,
  CompletionRequestBuilder,
  type CompletionResponse,
  type JsonObject,
  Message,
  type Message as MessageType,
  type ReasoningContentType,
  type ToolCall,
  type ToolDefinition,
  type ToolResult,
  type ToolResultContent,
  textFromAssistantContent,
  Usage,
} from "../completion/index";
import { createAsyncQueue } from "../internal/async-queue";
import type { MemoryContext } from "../memory";
import { type ActiveAgentRunObservers, startAgentRunObservers } from "../observability/group";
import type { AgentTraceInfo, AgentTraceOptions } from "../observability/types";
import { toReadableStream } from "../streaming";
import type { ToolMiddleware } from "../tool/middleware";
import type { Agent } from "./agent";
import { MaxTurnsError, PromptCancelledError } from "./errors";
import type { PromptHook } from "./hooks";
import { runControl } from "./hooks";
import { PromptRequestMemory } from "./request-memory";
import { fetchDynamicContext, fetchToolDefinitions } from "./retrieval";
import { type AgentDeltaEvent, CompletionStreamAccumulator } from "./stream-accumulator";
import {
  type AgentToolEventPayload,
  ToolCallExecutor,
  type ToolExecutionEventPayload,
  type ToolResultEventPayload,
} from "./tool-execution";
import { extractRagText, isStreamingCompletionModel } from "./utils";

export type PromptResponse = {
  output: string;
  usage: Usage;
  messages: MessageType[];
  trace?: AgentTraceInfo | undefined;
};

export type AgentChildStreamEvent<RawResponse = unknown> =
  | {
      type: "turn_start";
      turn: number;
      prompt: MessageType;
      history: MessageType[];
    }
  | {
      type: "text_delta";
      turn: number;
      delta: string;
    }
  | {
      type: "reasoning_delta";
      turn: number;
      delta: string;
      id?: string;
      contentType?: ReasoningContentType;
      signature?: string;
    }
  | {
      type: "tool_call";
      turn: number;
      toolCall: ToolCall;
    }
  | {
      type: "tool_result";
      turn: number;
      toolName: string;
      toolCallId?: string;
      internalCallId: string;
      args: string;
      result: string;
      structuredResult?: ToolResultContent[] | undefined;
    }
  | {
      type: "turn_end";
      turn: number;
      response: CompletionResponse<RawResponse>;
    }
  | {
      type: "final";
      runId: string;
      output: string;
      usage: Usage;
      messages: MessageType[];
      trace?: AgentTraceInfo | undefined;
    }
  | {
      type: "error";
      error: unknown;
    };

export type AgentStreamEvent<RawResponse = unknown> =
  | AgentChildStreamEvent<RawResponse>
  | {
      type: "agent_tool_event";
      turn: number;
      toolName: string;
      toolCallId?: string;
      internalCallId: string;
      agentId: string;
      agentName?: string;
      event: AgentChildStreamEvent<RawResponse>;
    };

export class PromptRequest<M extends CompletionModel = CompletionModel> {
  private chatHistory: MessageType[];
  private maxTurnCount: number;
  private activeHook: PromptHook | undefined;
  private concurrency = 1;
  private traceOptions: AgentTraceOptions | undefined;
  private requestToolMiddlewares: ToolMiddleware[] = [];
  private readonly memoryRecorder: PromptRequestMemory;

  private constructor(
    private readonly agent: Agent<M>,
    private readonly promptMessage: MessageType,
    initialHistory: MessageType[] = [],
    memoryContext: MemoryContext | undefined = undefined,
  ) {
    this.chatHistory = initialHistory;
    this.maxTurnCount = agent.defaultMaxTurns ?? 0;
    this.activeHook = agent.hook;
    this.memoryRecorder = new PromptRequestMemory(agent, memoryContext, initialHistory);
  }

  static fromAgent<M extends CompletionModel>(
    agent: Agent<M>,
    prompt: string | MessageType | MessageType[],
    options: { memoryContext?: MemoryContext | undefined } = {},
  ): PromptRequest<M> {
    const normalized = normalizePromptInput(prompt);
    return new PromptRequest(agent, normalized.prompt, normalized.history, options.memoryContext);
  }

  maxTurns(maxTurns: number): this {
    this.maxTurnCount = maxTurns;
    return this;
  }

  requestHook(hook: PromptHook): this {
    this.activeHook = hook;
    return this;
  }

  withToolConcurrency(concurrency: number): this {
    this.concurrency = Math.max(1, concurrency);
    return this;
  }

  withToolMiddleware(middleware: ToolMiddleware): this {
    this.requestToolMiddlewares.push(middleware);
    return this;
  }

  withToolMiddlewares(middlewares: ToolMiddleware[]): this {
    this.requestToolMiddlewares.push(...middlewares);
    return this;
  }

  withTrace(trace: AgentTraceOptions): this {
    this.traceOptions = trace;
    return this;
  }

  async send(): Promise<PromptResponse> {
    const runId = globalThis.crypto.randomUUID();
    const newMessages: MessageType[] = [this.promptMessage];
    this.chatHistory = await this.memoryRecorder.prepareRun(runId, newMessages);
    const pendingTurnMessages = this.memoryRecorder.pendingTurnMessages(newMessages);
    let usage = Usage.empty();
    let currentTurns = 0;
    let lastPrompt = this.promptMessage;
    const runObservers = await this.startRunObservers();

    try {
      while (currentTurns <= this.maxTurnCount + 1) {
        const prompt = newMessages.at(-1);
        if (prompt === undefined) {
          throw new Error("PromptRequest requires at least one message");
        }

        lastPrompt = prompt;
        currentTurns += 1;

        const historyForRequest = [...this.chatHistory, ...newMessages.slice(0, -1)];
        await this.runCompletionCallHook(prompt, historyForRequest, newMessages);

        const ragText = extractRagText(prompt);
        const dynamicContext = await fetchDynamicContext(this.agent, ragText);
        const toolDefs = await fetchToolDefinitions(this.agent, ragText);
        const request = new CompletionRequestBuilder(this.agent.model, prompt)
          .instructions(this.agent.instructions)
          .messages(historyForRequest)
          .documents([...this.agent.staticContext, ...dynamicContext])
          .tools(toolDefs)
          .temperature(this.agent.temperature)
          .maxTokens(this.agent.maxTokens)
          .additionalParams(this.agent.additionalParams)
          .toolChoice(this.agent.toolChoice)
          .outputSchema(this.agent.outputSchema)
          .build();

        const response = await this.runCompletion(request, currentTurns, runObservers);
        usage = Usage.add(usage, response.usage);
        await this.runCompletionResponseHook(prompt, response, newMessages);

        const assistantMessage = Message.assistant(response.choice, response.messageId);
        newMessages.push(assistantMessage);
        await this.memoryRecorder.commitMessages(
          runId,
          currentTurns,
          [assistantMessage],
          pendingTurnMessages,
        );
        const toolCalls = response.choice.filter(
          (item): item is ToolCall => item.type === "tool_call",
        );
        if (toolCalls.length === 0) {
          await this.memoryRecorder.commitCompletedRun(
            runId,
            currentTurns,
            newMessages,
            pendingTurnMessages,
          );
          const result: PromptResponse = {
            output: textFromAssistantContent(response.choice),
            usage,
            messages: [...newMessages],
            trace: runObservers.trace,
          };
          await runObservers.end(result);
          return result;
        }

        const toolResults = await this.executeToolCalls(
          toolCalls,
          newMessages,
          undefined,
          undefined,
          {
            turn: currentTurns,
            runObservers,
            toolDefinitions: request.tools,
          },
        );
        const toolMessage = Message.tool(toolResults);
        newMessages.push(toolMessage);
        await this.memoryRecorder.commitMessages(
          runId,
          currentTurns,
          [toolMessage],
          pendingTurnMessages,
        );
        await this.memoryRecorder.commitCompletedTurn(runId, currentTurns, pendingTurnMessages);
      }

      throw new MaxTurnsError(this.maxTurnCount, [...this.chatHistory, ...newMessages], lastPrompt);
    } catch (error) {
      await runObservers.error({ error, usage, messages: [...newMessages] });
      await this.memoryRecorder.recordError(runId, error, newMessages);
      throw error;
    }
  }

  async *stream(): AsyncIterable<AgentStreamEvent> {
    if (!this.agent.model.capabilities.streaming || !isStreamingCompletionModel(this.agent.model)) {
      throw new Error("This completion model does not support streaming");
    }

    const runId = globalThis.crypto.randomUUID();
    const newMessages: MessageType[] = [this.promptMessage];
    this.chatHistory = await this.memoryRecorder.prepareRun(runId, newMessages);
    const pendingTurnMessages = this.memoryRecorder.pendingTurnMessages(newMessages);
    let usage = Usage.empty();
    let currentTurns = 0;
    let lastPrompt = this.promptMessage;
    const runObservers = await this.startRunObservers();
    const emit = async (event: AgentStreamEvent): Promise<AgentStreamEvent> => {
      await this.recordAgentEvent(runId, event);
      return event;
    };

    try {
      while (currentTurns <= this.maxTurnCount + 1) {
        const prompt = newMessages.at(-1);
        if (prompt === undefined) {
          throw new Error("PromptRequest requires at least one message");
        }

        lastPrompt = prompt;
        currentTurns += 1;

        const historyForRequest = [...this.chatHistory, ...newMessages.slice(0, -1)];
        yield await emit({
          type: "turn_start",
          turn: currentTurns,
          prompt,
          history: historyForRequest,
        });
        await this.runCompletionCallHook(prompt, historyForRequest, newMessages);

        const ragText = extractRagText(prompt);
        const dynamicContext = await fetchDynamicContext(this.agent, ragText);
        const toolDefs = await fetchToolDefinitions(this.agent, ragText);
        const request = new CompletionRequestBuilder(this.agent.model, prompt)
          .instructions(this.agent.instructions)
          .messages(historyForRequest)
          .documents([...this.agent.staticContext, ...dynamicContext])
          .tools(toolDefs)
          .temperature(this.agent.temperature)
          .maxTokens(this.agent.maxTokens)
          .additionalParams(this.agent.additionalParams)
          .toolChoice(this.agent.toolChoice)
          .outputSchema(this.agent.outputSchema)
          .build();

        assertCompletionRequestSupported(this.agent.model, request, { streaming: true });
        const providerRequest = this.providerTraceRequest(request, { stream: true });
        const generationObservers = await runObservers.startGeneration({
          turn: currentTurns,
          request,
          ...(providerRequest === undefined ? {} : { providerRequest }),
          modelInfo: {
            provider: this.agent.model.provider,
            defaultModel: this.agent.model.defaultModel,
            capabilities: this.agent.model.capabilities,
          },
        });
        const accumulator = new CompletionStreamAccumulator();
        const generationStartedAt = Date.now();
        let firstDeltaMs: number | undefined;
        try {
          for await (const event of this.agent.model.streamCompletion(request)) {
            if (firstDeltaMs === undefined && isGenerationDeltaEvent(event.type)) {
              firstDeltaMs = Date.now() - generationStartedAt;
            }
            const mapped = accumulator.accept(event);
            if (event.type === "error") {
              throw event.error;
            }
            if (mapped !== undefined) {
              yield await emit(addTurn(currentTurns, mapped));
            }
          }
        } catch (error) {
          await generationObservers.error({ turn: currentTurns, error });
          throw error;
        }

        const response = accumulator.response();
        await generationObservers.end({
          turn: currentTurns,
          response,
          ...(firstDeltaMs === undefined ? {} : { firstDeltaMs }),
        });
        usage = Usage.add(usage, response.usage);
        await this.runCompletionResponseHook(prompt, response, newMessages);

        const assistantMessage = Message.assistant(response.choice, response.messageId);
        newMessages.push(assistantMessage);
        await this.memoryRecorder.commitMessages(
          runId,
          currentTurns,
          [assistantMessage],
          pendingTurnMessages,
        );
        const toolCalls = response.choice.filter(
          (item): item is ToolCall => item.type === "tool_call",
        );
        for (const toolCall of toolCalls) {
          yield await emit({ type: "tool_call", turn: currentTurns, toolCall });
        }
        yield await emit({ type: "turn_end", turn: currentTurns, response });

        if (toolCalls.length === 0) {
          const output = textFromAssistantContent(response.choice);
          await this.memoryRecorder.commitCompletedRun(
            runId,
            currentTurns,
            newMessages,
            pendingTurnMessages,
          );
          yield await emit({
            type: "final",
            runId,
            output,
            usage,
            messages: [...newMessages],
            trace: runObservers.trace,
          });
          await runObservers.end({ output, usage, messages: [...newMessages] });
          return;
        }

        const toolResultEvents = createAsyncQueue<ToolExecutionEventPayload>();
        const toolResultsPromise = this.executeToolCalls(
          toolCalls,
          newMessages,
          (result) => {
            toolResultEvents.enqueue(result);
          },
          (event) => {
            toolResultEvents.enqueue(event);
          },
          {
            turn: currentTurns,
            runObservers,
            toolDefinitions: request.tools,
          },
        );
        toolResultsPromise.then(
          () => toolResultEvents.close(),
          (error: unknown) => toolResultEvents.throw(error),
        );
        for await (const result of toolResultEvents) {
          yield await emit({ turn: currentTurns, ...result });
        }
        const toolResults = await toolResultsPromise;
        const toolMessage = Message.tool(toolResults);
        newMessages.push(toolMessage);
        await this.memoryRecorder.commitMessages(
          runId,
          currentTurns,
          [toolMessage],
          pendingTurnMessages,
        );
        await this.memoryRecorder.commitCompletedTurn(runId, currentTurns, pendingTurnMessages);
      }

      throw new MaxTurnsError(this.maxTurnCount, [...this.chatHistory, ...newMessages], lastPrompt);
    } catch (error) {
      await runObservers.error({ error, usage, messages: [...newMessages] });
      await this.memoryRecorder.recordError(runId, error, newMessages);
      yield await emit({ type: "error", error });
      throw error;
    }
  }

  readableStream(): ReadableStream<Uint8Array> {
    return toReadableStream(this.stream());
  }

  private async runCompletion(
    request: ReturnType<CompletionRequestBuilder["build"]>,
    turn: number,
    runObservers: ActiveAgentRunObservers,
  ): Promise<CompletionResponse> {
    assertCompletionRequestSupported(this.agent.model, request);
    const providerRequest = this.providerTraceRequest(request);
    const generationObservers = await runObservers.startGeneration({
      turn,
      request,
      ...(providerRequest === undefined ? {} : { providerRequest }),
      modelInfo: {
        provider: this.agent.model.provider,
        defaultModel: this.agent.model.defaultModel,
        capabilities: this.agent.model.capabilities,
      },
    });
    try {
      const response = await this.agent.model.completion(request);
      await generationObservers.end({ turn, response });
      return response;
    } catch (error) {
      await generationObservers.error({ turn, error });
      throw error;
    }
  }

  private providerTraceRequest(
    request: ReturnType<CompletionRequestBuilder["build"]>,
    options: { stream?: boolean | undefined } = {},
  ): JsonObject | undefined {
    try {
      return this.agent.model.traceRequest?.(request, options);
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }

  private async executeToolCalls(
    toolCalls: ToolCall[],
    newMessages: MessageType[],
    onResult?: (result: ToolResultEventPayload) => void,
    onStreamEvent?: (event: AgentToolEventPayload) => void,
    observation?: {
      turn: number;
      runObservers: ActiveAgentRunObservers;
      toolDefinitions?: ToolDefinition[];
    },
  ): Promise<ToolResult[]> {
    const executor = new ToolCallExecutor(
      this.agent,
      this.activeHook,
      this.concurrency,
      this.requestToolMiddlewares,
      (reason) => this.cancelled(newMessages, reason),
    );
    return executor.execute(toolCalls, onResult, onStreamEvent, observation);
  }

  private async startRunObservers(): Promise<ActiveAgentRunObservers> {
    const failOnObserverError =
      this.traceOptions?.failOnObserverError === true ||
      this.agent.observers.some((registration) => registration.failOnObserverError === true);
    return startAgentRunObservers(
      this.agent.observers,
      {
        agentName: this.agent.name,
        agentDescription: this.agent.description,
        instructions: this.agent.instructions,
        trace: this.traceOptions,
        prompt: this.promptMessage,
        history: this.chatHistory,
        maxTurns: this.maxTurnCount,
      },
      failOnObserverError,
    );
  }

  private async recordAgentEvent(runId: string, event: AgentStreamEvent): Promise<void> {
    const registration = this.agent.eventStore;
    if (registration === undefined) {
      return;
    }
    if (registration.options.include === "agent_tool_events" && event.type !== "agent_tool_event") {
      return;
    }

    const turn = "turn" in event ? event.turn : undefined;
    const agentId = event.type === "agent_tool_event" ? event.agentId : this.agent.id;
    const agentName = event.type === "agent_tool_event" ? event.agentName : this.agent.name;
    await registration.store.append({
      runId,
      agentId,
      ...(agentName === undefined ? {} : { agentName }),
      ...(turn === undefined ? {} : { turn }),
      ...(event.type === "agent_tool_event"
        ? {
            toolName: event.toolName,
            ...(event.toolCallId === undefined ? {} : { toolCallId: event.toolCallId }),
            internalCallId: event.internalCallId,
          }
        : {}),
      event,
    });
  }

  private async runCompletionCallHook(
    prompt: MessageType,
    history: MessageType[],
    newMessages: MessageType[],
  ): Promise<void> {
    const action = await this.activeHook?.onCompletionCall?.({
      prompt,
      history,
      run: runControl,
    });
    if (action?.type === "terminate") {
      throw this.cancelled(newMessages, action.reason);
    }
  }

  private async runCompletionResponseHook(
    prompt: MessageType,
    response:
      | Awaited<ReturnType<M["completion"]>>
      | Awaited<ReturnType<CompletionModel["completion"]>>,
    newMessages: MessageType[],
  ): Promise<void> {
    const action = await this.activeHook?.onCompletionResponse?.({
      prompt,
      response,
      run: runControl,
    });
    if (action?.type === "terminate") {
      throw this.cancelled(newMessages, action.reason);
    }
  }

  private cancelled(newMessages: MessageType[], reason: string): PromptCancelledError {
    return new PromptCancelledError([...this.chatHistory, ...newMessages], reason);
  }
}

function normalizePromptInput(prompt: string | MessageType | MessageType[]): {
  prompt: MessageType;
  history: MessageType[];
} {
  if (typeof prompt === "string") {
    return { prompt: Message.user(prompt), history: [] };
  }
  if (!Array.isArray(prompt)) {
    return { prompt, history: [] };
  }
  if (prompt.length === 0) {
    throw new TypeError("Prompt transcript must contain at least one message.");
  }
  const activePrompt = prompt.at(-1);
  if (activePrompt === undefined) {
    throw new TypeError("Prompt transcript must contain at least one message.");
  }
  return {
    prompt: activePrompt,
    history: prompt.slice(0, -1),
  };
}

function addTurn(turn: number, event: AgentDeltaEvent): AgentStreamEvent {
  if (event.type === "text_delta") {
    return { type: "text_delta", turn, delta: event.delta };
  }
  if (event.type === "reasoning_delta") {
    const mapped: AgentStreamEvent = { type: "reasoning_delta", turn, delta: event.delta };
    if (event.id !== undefined) mapped.id = event.id;
    if (event.contentType !== undefined) mapped.contentType = event.contentType;
    if (event.signature !== undefined) mapped.signature = event.signature;
    return mapped;
  }
  return { type: "tool_call", turn, toolCall: event.toolCall };
}

function isGenerationDeltaEvent(type: string): boolean {
  return (
    type === "text_delta" ||
    type === "reasoning_delta" ||
    type === "tool_call_delta" ||
    type === "tool_call"
  );
}
