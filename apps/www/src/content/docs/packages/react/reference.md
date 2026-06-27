---
title: "React"
description: "Client transports and hooks from @anvia/react."
section: packages
sidebar:
  group: "react"
  order: 6
  label: "React"
---
Import from `@anvia/react`.

## Types

```ts
type EventStreamFormat = "jsonl" | "sse";

type TransportOptions = {
  signal?: AbortSignal;
  headers?: HeadersInit;
};

type ChatRole = "system" | "user" | "assistant" | "tool";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  metadata?: unknown;
};

type DefaultChatRequest = {
  message: string;
  history: ChatMessage[];
  stream: true;
};

type UseChatStatus = "idle" | "streaming" | "error";

type ToolApprovalStatus = "pending" | "approved" | "rejected" | "timed_out";

type ToolApproval = {
  id: string;
  runId?: string;
  agentId?: string;
  sessionId?: string;
  toolName: string;
  callId?: string;
  internalCallId?: string;
  args?: string;
  status: ToolApprovalStatus;
  requestedAt?: string;
  resolvedAt?: string;
  reason?: string;
};

type ToolQuestionStatus = "pending" | "answered";

type ToolQuestionChoice = {
  label: string;
  value: string;
};

type ToolQuestionPrompt = {
  id: string;
  question: string;
  choices: ToolQuestionChoice[];
};

type ToolQuestionAnswer = {
  questionId: string;
  answer: string;
  choice?: string;
  custom?: boolean;
};

type ToolQuestion = {
  id: string;
  runId?: string;
  agentId?: string;
  sessionId?: string;
  toolName: string;
  callId?: string;
  internalCallId?: string;
  args?: string;
  questions: ToolQuestionPrompt[];
  status: ToolQuestionStatus;
  requestedAt?: string;
  answeredAt?: string;
  answers?: ToolQuestionAnswer[];
};

type ToolApprovalDecisionInput = {
  approvalId: string;
  approved: boolean;
  reason?: string;
  approval?: ToolApproval;
};

type ToolQuestionAnswerInput = {
  questionId: string;
  answers: ToolQuestionAnswer[];
  question?: ToolQuestion;
};

type HumanInputOptions<TEvent = unknown> = {
  endpoint?: string | URL;
  fetch?: typeof fetch;
  eventToApproval?: (event: TEvent) => ToolApproval | undefined;
  eventToQuestion?: (event: TEvent) => ToolQuestion | undefined;
  decideApproval?: (decision: ToolApprovalDecisionInput) => Promise<ToolApproval | undefined>;
  answerQuestion?: (answer: ToolQuestionAnswerInput) => Promise<ToolQuestion | undefined>;
};

type HumanInputState = {
  approvals: { all: ToolApproval[]; pending: ToolApproval[] };
  questions: { all: ToolQuestion[]; pending: ToolQuestion[] };
};
```

## EventTransport

```ts
type EventTransport<TRequest, TEvent> = {
  send(request: TRequest, options?: TransportOptions): AsyncIterable<TEvent>;
};
```

Purpose: common boundary for JSONL, SSE, WebSocket, local, and custom transports.

## readJsonlStream

```ts
function readJsonlStream<TEvent>(stream: ReadableStream<Uint8Array>): AsyncIterable<TEvent>;
```

Purpose: parse newline-delimited JSON from a web stream.

## readSseStream

```ts
function readSseStream<TEvent>(stream: ReadableStream<Uint8Array>): AsyncIterable<TEvent>;
```

Purpose: parse Server-Sent Events whose `data:` payload is JSON.

## fetchEventStream

```ts
type FetchEventStreamOptions = RequestInit & {
  format?: "jsonl" | "sse";
  fetch?: typeof fetch;
};

function fetchEventStream<TEvent>(
  input: string | URL | Request,
  options?: FetchEventStreamOptions,
): AsyncIterable<TEvent>;
```

Purpose: fetch and parse a streaming response as an async iterable.

## createFetchTransport

```ts
type CreateFetchTransportOptions<TRequest, TEvent> = {
  endpoint: string | URL | ((request: TRequest) => string | URL);
  method?: string;
  format?: "jsonl" | "sse";
  headers?: HeadersInit | ((request: TRequest) => HeadersInit | Promise<HeadersInit>);
  body?: (request: TRequest) => BodyInit | null | undefined | Promise<BodyInit | null | undefined>;
  mapEvent?: (event: unknown) => TEvent;
};

function createFetchTransport<TRequest, TEvent>(
  options: CreateFetchTransportOptions<TRequest, TEvent>,
): EventTransport<TRequest, TEvent>;
```

Purpose: create a POST JSON transport by default while allowing custom headers, bodies, endpoints, and event mapping.

## createChatTransport

```ts
function createChatTransport<TRequest, TEvent>(
  options: CreateFetchTransportOptions<TRequest, TEvent>,
): EventTransport<TRequest, TEvent>;
```

Purpose: named chat transport helper built on the fetch transport.

## useChat

```ts
type UseChatOptions<TRequest, TEvent, TMessage extends ChatMessage = ChatMessage> = {
  transport?: EventTransport<TRequest, TEvent>;
  endpoint?: string | URL;
  format?: "jsonl" | "sse";
  initialMessages?: TMessage[];
  createRequest?: (input: string, messages: TMessage[]) => TRequest;
  eventToDelta?: (event: TEvent) => string | undefined;
  eventToFinal?: (event: TEvent) => string | undefined;
  humanInput?: HumanInputOptions<TEvent>;
  onEvent?: (event: TEvent) => void;
  onError?: (error: unknown) => void;
};

type UseChatResult<TEvent, TMessage extends ChatMessage = ChatMessage> = {
  messages: TMessage[];
  events: TEvent[];
  input: string;
  setInput(input: string): void;
  send(input?: string): Promise<void>;
  stop(): void;
  reset(messages?: TMessage[]): void;
  status: UseChatStatus;
  error: unknown;
  text: string;
  humanInput: HumanInputState;
  decidingApprovals: Set<string>;
  answeringQuestions: Set<string>;
  approveTool(approvalId: string, reason?: string): Promise<void>;
  rejectTool(approvalId: string, reason?: string): Promise<void>;
  answerToolQuestion(questionId: string, answers: ToolQuestionAnswer[]): Promise<void>;
};

function useChat<TRequest, TEvent>(options?: {
  transport?: EventTransport<TRequest, TEvent>;
  endpoint?: string | URL;
  format?: "jsonl" | "sse";
  initialMessages?: ChatMessage[];
  createRequest?: (input: string, messages: ChatMessage[]) => TRequest;
  eventToDelta?: (event: TEvent) => string | undefined;
  eventToFinal?: (event: TEvent) => string | undefined;
  humanInput?: HumanInputOptions<TEvent>;
  onEvent?: (event: TEvent) => void;
  onError?: (error: unknown) => void;
}): UseChatResult<TEvent>;
```

Purpose: React chat state machine that consumes events from any `EventTransport`.

Passing `endpoint` creates a default JSONL fetch transport. Passing `transport` makes the hook independent of HTTP. `humanInput` tracks Studio-compatible tool approval and `ask_question` events, or custom mapped events, and exposes submit actions for custom UI. To use the default submit actions, pass `humanInput.endpoint`; approval decisions post to `{endpoint}/approvals/{approvalId}/decision`, and question answers post to `{endpoint}/questions/{questionId}/answer`.

## useCompletion

```ts
type UseCompletionRequest = {
  prompt: string;
  stream: true;
};

type UseCompletionStatus = "idle" | "streaming" | "error";

type UseCompletionOptions<TEvent = unknown> = {
  transport?: EventTransport<UseCompletionRequest, TEvent>;
  endpoint?: string | URL;
  format?: "jsonl" | "sse";
  initialCompletion?: string;
  eventToDelta?: (event: TEvent) => string | undefined;
  eventToFinal?: (event: TEvent) => string | undefined;
  onEvent?: (event: TEvent) => void;
  onError?: (error: unknown) => void;
};

type UseCompletionResult = {
  completion: string;
  input: string;
  setInput(input: string): void;
  complete(prompt?: string): Promise<void>;
  stop(): void;
  reset(completion?: string): void;
  status: UseCompletionStatus;
  error: unknown;
};

function useCompletion<TEvent = unknown>(
  options?: UseCompletionOptions<TEvent>,
): UseCompletionResult;
```

Purpose: React hook for single-prompt text completion streaming. Simpler alternative to `useChat` when you only need prompt-in, text-out without message history.

Default `eventToDelta` matches `{ type: "text_delta", delta: string }` events.
Default `eventToFinal` matches `{ type: "final", response: { choice: Array<{ type: "text", text: string }> } }` events (compatible with `CompletionStreamEvent` from `@anvia/core`).

## createDirectTransport

```ts
function createDirectTransport<TRequest, TEvent>(
  handler: (request: TRequest) => AsyncIterable<TEvent>,
): EventTransport<TRequest, TEvent>;
```

Purpose: in-process transport that calls a handler function directly, bypassing HTTP. Works with both `useChat` and `useCompletion`. Useful for SSR, testing, and single-process applications.

## EventStreamHttpError

```ts
class EventStreamHttpError extends Error {
  readonly response: Response;
  readonly body: string;
}
```

Purpose: thrown by `fetchEventStream(...)` when the HTTP response is not ok.

For workflow guidance, see [Client Transports](/docs/basics/react-client).
