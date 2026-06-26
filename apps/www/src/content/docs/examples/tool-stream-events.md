---
title: "Tool stream events"
description: "Observe tool calls while an agent response is streaming."
section: examples
sidebar:
  group: "Tools"
  order: 2
---

When an agent streams, tool activity appears in the same event stream as text. That lets a CLI or UI show pending tool calls, returned results, and final text without waiting for the full run.

## Prerequisites

Set provider credentials and install Zod:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const getWeather = createTool({
  name: "get_weather",
  description: "Get a simple local weather forecast.",
  input: z.object({
    city: z.string().describe("The city to check."),
  }),
  output: z.object({
    city: z.string(),
    forecast: z.string(),
  }),
  execute: ({ city }) => ({ city, forecast: "Warm with light wind." }),
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const agent = new AgentBuilder("weather-agent", client.completionModel("gpt-5.5"))
  .instructions("Use the weather tool when the user asks for weather.")
  .tool(getWeather)
  .defaultMaxTurns(2)
  .build();

for await (const event of agent.prompt("What is the weather in Jakarta?").stream()) {
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
pnpm cookbook:tools:02
```

## Expected behavior

You should see the tool call, the local tool result, and streamed final text. Use these events to power loading indicators, activity timelines, or audit logs.

## Related docs

- [Stream an agent response](/docs/basics/stream-an-agent-response)
- [Streaming events](/docs/advanced/streaming-events)
- [Tool results](/docs/advanced/tool-results)
