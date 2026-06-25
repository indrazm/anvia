---
title: Add tools
description: Register typed tools so agents can call product actions safely.
section: basics
sidebar:
  group: Capabilities
  order: 2
---

Tools let an agent ask your application to do work. After the agent can stream, tools are the next step toward useful product behavior.

## When to use this

Add tools when the agent needs private data or product actions:

- Look up a customer.
- Read an order.
- Create a ticket.
- Call an internal workflow.

Keep each tool narrow. A small, clear tool is easier to test and safer to expose.

## Prerequisites

Install Zod and build an agent. Tool inputs should be validated before your application action runs.

## Create a tool

```ts
import { AgentBuilder, createTool } from "@anvia/core";
import { z } from "zod";

const lookupOrder = createTool({
  name: "lookup_order",
  description: "Look up an order by id.",
  input: z.object({
    orderId: z.string(),
  }),
  output: z.object({
    orderId: z.string(),
    status: z.string(),
  }),
  execute: async ({ orderId }) => {
    return { orderId, status: "processing" };
  },
});

const agent = new AgentBuilder("support", model)
  .instructions("Use tools when order data is needed.")
  .tool(lookupOrder)
  .defaultMaxTurns(3)
  .build();
```

## What happens

The input schema is parsed before `execute` runs. If an output schema is provided, the tool result is parsed too.

Tools need enough turns. The model asks for a tool, your app returns the tool result, then the model produces the final answer.

## Check yourself

Ask a prompt that requires order data and confirm the run includes a tool call before the final answer.

## Next

Add durable session memory.

[Add memory](/docs/basics/add-memory)

Need command or file tools for a local workspace? Take the optional [Sandbox tools](/docs/basics/sandbox-tools) detour.
