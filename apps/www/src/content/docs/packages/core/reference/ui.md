---
title: "UI"
description: "UI message stream protocol and adapters."
section: packages
sidebar:
  group: "Reference"
  order: 22
  label: "UI"
---
Import from `@anvia/core` or `@anvia/core/ui`.

## Types

```ts
type UIMessageRole = "system" | "user" | "assistant" | "tool";

type UIError = {
  name?: string;
  message: string;
};

type UIMessage = {
  id: string;
  role: UIMessageRole;
  parts: UIMessagePart[];
  metadata?: JsonValue;
};

type UIMessagePart =
  | { id: string; type: "text"; text: string }
  | { id: string; type: "reasoning"; text: string; reasoningId?: string }
  | {
      id: string;
      type: "tool";
      toolName: string;
      toolCallId: string;
      callId?: string;
      state: "input-streaming" | "input-available" | "output-available" | "error";
      input?: JsonValue;
      output?: JsonValue;
      error?: UIError;
    }
  | { id: string; type: "data"; name: string; data: JsonValue }
  | { id: string; type: "error"; error: UIError };

type UIStreamRequest = {
  messages: UIMessage[];
  stream: true;
  metadata?: JsonValue;
};

type UIStreamEvent =
  | { type: "message_start"; message: UIMessage }
  | { type: "text_delta"; messageId: string; partId: string; delta: string }
  | { type: "reasoning_delta"; messageId: string; partId: string; delta: string }
  | { type: "tool_update"; messageId: string; partId: string; part: UIMessagePart }
  | { type: "message_end"; messageId: string; usage?: Usage; metadata?: JsonValue }
  | { type: "error"; error: UIError };

type CreateCompletionUIStreamOptions = Omit<
  CreateCompletionStreamOptions,
  "input" | "messages"
> & {
  messages: UIMessage[];
};

type AgentLike = {
  prompt(prompt: string | Message | Message[]): {
    stream(): AsyncIterable<AgentStreamEvent>;
  };
};

type CreateAgentUIStreamOptions = {
  messages: UIMessage[];
};
```

Purpose: shared UI protocol for single-turn completions and multi-turn agent runs. The request always carries `messages`, and the response always emits `UIStreamEvent` records that build assistant `UIMessage` state on the client.

## uiMessagesToCoreMessages

```ts
function uiMessagesToCoreMessages(messages: UIMessage[]): Message[];
```

Purpose: convert client-facing UI messages into core completion messages before calling completion or agent APIs.

Return behavior: text, reasoning, tool call, and tool output parts are mapped into the closest core message representation.

## coreMessagesToUIMessages

```ts
function coreMessagesToUIMessages(messages: Message[]): UIMessage[];
```

Purpose: convert existing core message history into the UI message shape used by React hooks and UI stream requests.

Return behavior: generated IDs are assigned where the core message format does not already provide one.

## createCompletionUIStream

```ts
function createCompletionUIStream<Model extends StreamingCompletionModel>(
  model: Model,
  options: CreateCompletionUIStreamOptions,
): AsyncIterable<UIStreamEvent>;
```

Purpose: run `createCompletionStream(...)` from UI messages and adapt the completion stream into UI stream events.

Return behavior: yields an assistant `message_start`, text or reasoning deltas, tool updates, `message_end`, and error events.

## createAgentUIStream

```ts
function createAgentUIStream(
  agent: AgentLike,
  options: CreateAgentUIStreamOptions,
): AsyncIterable<UIStreamEvent>;
```

Purpose: run an agent from UI messages and adapt the agent stream into the same UI stream protocol used by completions.

Return behavior: yields assistant message events that can be consumed by `useChat` or `useCompletion` from `@anvia/react`.

## completionStreamToUIStream

```ts
function completionStreamToUIStream(
  events: AsyncIterable<CompletionStreamEvent>,
  options?: { messageId?: string },
): AsyncIterable<UIStreamEvent>;
```

Purpose: adapt an existing `CompletionStreamEvent` iterable into the standard UI stream protocol.

Return behavior: preserves streamed deltas and emits any missing final text delta when the final response contains more text than was streamed.

## agentStreamToUIStream

```ts
function agentStreamToUIStream(
  events: AsyncIterable<AgentStreamEvent>,
  options?: { messageId?: string },
): AsyncIterable<UIStreamEvent>;
```

Purpose: adapt an existing agent stream iterable into the standard UI stream protocol.

Return behavior: maps agent text, reasoning, tool call, tool result, final, and error events to `UIStreamEvent` records.
