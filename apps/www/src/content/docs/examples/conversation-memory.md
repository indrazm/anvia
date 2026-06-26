---
title: "Conversation memory"
description: "Use session memory for multi-turn conversation context."
section: examples
sidebar:
  group: "Getting started"
  order: 2
---

Conversation history should flow through memory-backed sessions. Do not rebuild transcripts at the prompt call site; configure a `MemoryStore`, then send each turn through `agent.session(...).prompt(...)`.

## Prerequisites

This example uses `@anvia/core`, `@anvia/openai`, and OpenAI credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, type MemoryStore, type Message } from "@anvia/core";
import type { MemoryAppendInput, MemoryContext } from "@anvia/core/memory";
import { OpenAIClient } from "@anvia/openai";

class LocalMemoryStore implements MemoryStore {
  private readonly sessions = new Map<string, Message[]>();

  async load(context: MemoryContext): Promise<Message[]> {
    return [...(this.sessions.get(context.sessionId) ?? [])];
  }

  async append(input: MemoryAppendInput): Promise<void> {
    const current = this.sessions.get(input.context.sessionId) ?? [];
    this.sessions.set(input.context.sessionId, [...current, ...input.messages]);
  }

  async clear(context: MemoryContext): Promise<void> {
    this.sessions.delete(context.sessionId);
  }
}

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const memory = new LocalMemoryStore();
const model = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("memory-agent", model)
  .instructions("Respect durable conversation context.")
  .memory(memory)
  .build();

const session = agent.session("demo-session", { userId: "cookbook-user" });

await session.prompt("Remember that my project is named Anvia.").send();
const response = await session.prompt("What is my project named?").send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:basics:02
```

## Expected behavior

The second turn should answer from stored session messages and identify the project as Anvia. Core loads prior messages through `MemoryStore.load` and appends new runtime messages through `MemoryStore.append`.

## Related docs

- [Add memory](/docs/basics/add-memory)
- [Sessions and memory](/docs/advanced/sessions-and-memory)
- [Completions, messages, and content](/docs/advanced/messages-and-content)
