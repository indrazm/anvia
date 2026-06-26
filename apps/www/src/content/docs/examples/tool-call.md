---
title: "Tool call"
description: "Let an agent call one typed application tool."
section: examples
sidebar:
  group: "Tools"
  order: 1
---

Tools let the model ask your application to do narrow, validated work. This recipe exposes an `add` tool and gives the agent enough turns to call it before answering.

## Prerequisites

Install Zod and set provider credentials:

```sh
pnpm add zod
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const add = createTool({
  name: "add",
  description: "Add two numbers together.",
  input: z.object({
    x: z.number().describe("The first number."),
    y: z.number().describe("The second number."),
  }),
  output: z.number(),
  execute: ({ x, y }) => x + y,
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const model = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("math-agent", model)
  .instructions("Use tools when they are useful.")
  .tool(add)
  .defaultMaxTurns(2)
  .build();

const response = await agent.prompt("What is 12 + 30? Use the add tool.").send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:tools:01
```

## Expected behavior

The model requests the `add` tool, Anvia validates the input, your local `execute` function returns `42`, and the model produces the final answer.

## Related docs

- [Add tools](/docs/basics/add-tools)
- [Tool contracts](/docs/advanced/tool-contracts)
- [Tool results](/docs/advanced/tool-results)
