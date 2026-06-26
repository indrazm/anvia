---
title: "Conditional tool"
description: "Expose a tool only when request context allows it."
section: examples
sidebar:
  group: "Tools"
  order: 4
---

Build agents from application configuration when tools are optional. This keeps unavailable capabilities out of the model request instead of asking the model not to use them.

## Prerequisites

Set provider credentials. Optionally set `ENABLE_MATH_TOOLS=false` to run the no-tool path.

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
ENABLE_MATH_TOOLS=false
```

## Code

```ts
import { AgentBuilder, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const add = createTool({
  name: "add",
  description: "Add two numbers together.",
  input: z.object({ x: z.number(), y: z.number() }),
  output: z.number(),
  execute: ({ x, y }) => x + y,
});

const enableMathTools = process.env.ENABLE_MATH_TOOLS !== "false";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const builder = new AgentBuilder("conditional-agent", client.completionModel("gpt-5.5"))
  .instructions("Use tools only when they are available.")
  .defaultMaxTurns(2);

if (enableMathTools) {
  builder.tool(add);
}

const agent = builder.build();

const prompt = enableMathTools
  ? "What is 18 + 24? Use the add tool."
  : "Are arithmetic tools available in this run?";

const response = await agent.prompt(prompt).send();

console.log("math tools enabled:", enableMathTools);
console.log(response.output);
```

## Run it

```sh
pnpm cookbook:tools:04
```

## Expected behavior

With tools enabled, the agent can call `add`. With `ENABLE_MATH_TOOLS=false`, the tool is not part of the request and the model should answer without claiming tool access.

## Related docs

- [Dynamic context](/docs/advanced/dynamic-context)
- [Tool sets and dynamic tools](/docs/advanced/dynamic-tool-catalogs)
- [Production guardrails](/docs/advanced/production-guardrails)
