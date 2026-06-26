---
title: "Think tool"
description: "Add a deliberate reasoning checkpoint as a tool pattern."
section: examples
sidebar:
  group: "Tools"
  order: 5
---

The think tool gives a model an explicit checkpoint before it answers multi-step questions. Use it for planning and verification, not for exposing private chain-of-thought to users.

## Prerequisites

Set provider credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createThinkTool, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const add = createTool({
  name: "add",
  description: "Add two numbers together.",
  input: z.object({ x: z.number(), y: z.number() }),
  output: z.number(),
  execute: ({ x, y }) => x + y,
});

const think = createThinkTool();

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const agent = new AgentBuilder("thinking-agent", client.completionModel("gpt-5.5"))
  .instructions("Use the think tool before answering multi-step questions.")
  .tools([think, add])
  .defaultMaxTurns(3)
  .build();

for await (const event of agent
  .prompt("Think through the steps, then calculate 17 + 25 and answer briefly.")
  .stream()) {
  if (event.type === "tool_call") {
    console.log("tool call:", event.toolCall.function.name, event.toolCall.function.arguments);
  }
  if (event.type === "tool_result") {
    console.log("tool result:", event.toolName, event.result);
  }
  if (event.type === "text_delta") {
    process.stdout.write(event.delta);
  }
}

process.stdout.write("\n");
```

## Run it

```sh
pnpm cookbook:tools:05
```

## Expected behavior

The stream should show a think-tool call, the arithmetic tool call, and a short final answer. Some models may choose fewer steps depending on their tool behavior.

## Related docs

- [Think tool](/docs/advanced/think-tool)
- [Tool contracts](/docs/advanced/tool-contracts)
- [Streaming events](/docs/advanced/streaming-events)
