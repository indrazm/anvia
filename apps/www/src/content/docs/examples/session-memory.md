---
title: "Session memory"
description: "Preserve useful conversation state across turns."
section: examples
sidebar:
  group: "Getting started"
  order: 6
---

Session memory lets an agent load previous messages for the same session and append new messages after each run. This recipe uses an in-memory store so the behavior is easy to see.

## Prerequisites

Set provider credentials:

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

const model = client.completionModel("gpt-5.5");
const memory = new LocalMemoryStore();

const agent = new AgentBuilder("memory-agent", model)
  .instructions("Use durable session context when it is available.")
  .memory(memory)
  .build();

const session = agent.session("demo-session", { userId: "cookbook-user" });

await session.prompt("Remember that my project is named Anvia.").send();
const response = await session.prompt("What is my project named?").send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:basics:06
```

## Expected behavior

The second prompt should answer from memory. Replace the local store with a database-backed store for production so sessions survive process restarts.

## Related docs

- [Add memory](/docs/basics/add-memory)
- [Sessions and memory](/docs/advanced/sessions-and-memory)
- [Runtime lifecycle](/docs/advanced/runtime-lifecycle)
