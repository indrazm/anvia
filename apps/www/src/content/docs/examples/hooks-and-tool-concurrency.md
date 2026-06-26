---
title: "Hooks and tool concurrency"
description: "Coordinate tool execution with runtime hooks and concurrency limits."
section: examples
sidebar:
  group: "Tools"
  order: 3
---

Hooks observe completion and tool lifecycle events. Tool concurrency controls how many independent tool calls can run at the same time during a prompt.

## Prerequisites

Set OpenAI credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createHook, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const mathInput = z.object({ x: z.number(), y: z.number() });

const add = createTool({
  name: "add",
  description: "Add two numbers.",
  input: mathInput,
  output: z.number(),
  execute: ({ x, y }) => x + y,
});

const multiply = createTool({
  name: "multiply",
  description: "Multiply two numbers.",
  input: mathInput,
  output: z.number(),
  execute: ({ x, y }) => x * y,
});

const hook = createHook({
  onCompletionCall({ prompt }) {
    console.log("completion call:", prompt.role);
  },
  onToolCall({ toolName, args }) {
    console.log("tool call:", toolName, args);
  },
  onToolResult({ toolName, result }) {
    console.log("tool result:", toolName, result);
  },
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const agent = new AgentBuilder("math-agent", client.completionModel("gpt-5.5"))
  .instructions("Use tools for arithmetic and explain the result briefly.")
  .tools([add, multiply])
  .hook(hook)
  .defaultMaxTurns(2)
  .build();

const response = await agent
  .prompt("Calculate 3 + 9 and 7 * 6. Use both tools before answering.")
  .withToolConcurrency(2)
  .send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:tools:03
```

## Expected behavior

The hook logs completion and tool events. If the model emits independent tool calls, `.withToolConcurrency(2)` allows two local tool executions to run concurrently.

## Related docs

- [Hooks and run control](/docs/advanced/hooks-and-run-control)
- [Tool contracts](/docs/advanced/tool-contracts)
- [Parallel and batch work](/docs/advanced/parallel-and-batch-work)
