---
title: "Tool call with memory"
description: "Use session memory after a tool-backed turn."
section: examples
sidebar:
  group: "Tools"
  order: 7
---

Tool calls produce assistant tool-call messages and tool-result messages. Memory-backed sessions preserve those messages so later turns can understand what happened without manually rebuilding a transcript.

## Prerequisites

Set provider credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createTool, type MemoryStore, type Message } from "@anvia/core";
import type { MemoryAppendInput, MemoryContext } from "@anvia/core/memory";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

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

const tickets = new Map([
  [
    "TICKET-1001",
    {
      id: "TICKET-1001",
      customer: "Acme Co.",
      owner: "Mira",
      priority: "high",
      status: "waiting_on_engineering",
      summary: "Webhook retries fail when payloads are larger than 512 KB.",
    },
  ],
]);

const getTicket = createTool({
  name: "get_ticket",
  description: "Read a support ticket from local application state.",
  input: z.object({ id: z.string() }),
  output: z.object({
    id: z.string(),
    customer: z.string(),
    owner: z.string(),
    priority: z.string(),
    status: z.string(),
    summary: z.string(),
  }),
  execute({ id }) {
    const ticket = tickets.get(id);
    if (ticket === undefined) {
      throw new Error(`Ticket not found: ${id}`);
    }
    return ticket;
  },
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const memory = new LocalMemoryStore();

const agent = new AgentBuilder("ticket-agent", client.completionModel("gpt-5.5"))
  .instructions("Use tools for private ticket data and durable session memory when relevant.")
  .tool(getTicket)
  .memory(memory)
  .defaultMaxTurns(2)
  .build();

const session = agent.session("ticket-demo", { userId: "cookbook-user" });

for await (const event of session
  .prompt("Use the ticket tool to summarize TICKET-1001 and remember who owns it.")
  .stream()) {
  if (event.type === "tool_call") {
    console.log("tool call:", event.toolCall.function.name, event.toolCall.function.arguments);
  }
  if (event.type === "tool_result") {
    console.log("tool result:", event.result);
  }
  if (event.type === "text_delta") {
    process.stdout.write(event.delta);
  }
}

process.stdout.write("\n");

const followUp = await session.prompt("Who owns the ticket we just discussed?").send();
console.log(followUp.output);
```

## Run it

```sh
pnpm cookbook:tools:07
```

## Expected behavior

The first turn calls `get_ticket` and stores the full runtime messages in memory. The follow-up turn can answer who owns the ticket without manually passing previous messages into `prompt(...)`.

## Related docs

- [Conversation memory](/docs/examples/conversation-memory)
- [Sessions and memory](/docs/advanced/sessions-and-memory)
- [Tool calls in history](/docs/advanced/messages-and-content#tool-calls-in-history)
