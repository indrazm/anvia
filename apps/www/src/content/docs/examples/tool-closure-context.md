---
title: "Tool closure context"
description: "Give a tool access to request-local application context."
section: examples
sidebar:
  group: "Tools"
  order: 6
---

Tool handlers are local application code. They can close over services, repositories, tenant context, or request-specific state without putting those internals in the prompt.

## Prerequisites

Set OpenAI credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const tickets = new Map([
  [
    "TICKET-1001",
    {
      id: "TICKET-1001",
      customer: "Acme Co.",
      priority: "high",
      status: "waiting_on_engineering",
      summary: "Webhook retries fail when payloads are larger than 512 KB.",
    },
  ],
]);

const getTicket = createTool({
  name: "get_ticket",
  description: "Read a support ticket from local application state.",
  input: z.object({
    id: z.string().describe("The support ticket id."),
  }),
  output: z.object({
    id: z.string(),
    customer: z.string(),
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

const agent = new AgentBuilder("support-agent", client.completionModel("gpt-5.5"))
  .instructions("Use local tools when users ask about private support tickets.")
  .tool(getTicket)
  .defaultMaxTurns(2)
  .build();

for await (const event of agent.prompt("Summarize TICKET-1001 for a product engineer.").stream()) {
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
```

## Run it

```sh
pnpm cookbook:tools:06
```

## Expected behavior

The model only sees the tool contract. The ticket map stays inside your application process, and the tool returns only the validated ticket fields.

## Related docs

- [Tool contracts](/docs/advanced/tool-contracts)
- [Production guardrails](/docs/advanced/production-guardrails)
- [Dynamic context](/docs/advanced/dynamic-context)
