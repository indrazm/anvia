---
title: "Stream text"
description: "Stream incremental text from a model response."
section: examples
sidebar:
  group: "Getting started"
  order: 4
---

Streaming lets your app render text as the model produces it. Anvia normalizes provider output into runtime events so application code can react to text, tool, and final events consistently.

## Prerequisites

Set the OpenAI environment variables:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const model = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("streaming-agent", model)
  .instructions("Write compact, visible responses.")
  .build();

for await (const event of agent.prompt("Write a short haiku about TypeScript agents.").stream()) {
  if (event.type === "text_delta") {
    process.stdout.write(event.delta);
  }

  if (event.type === "final") {
    process.stdout.write("\n");
    console.log(event.usage);
  }
}
```

## Run it

```sh
pnpm cookbook:basics:04
```

## Expected behavior

The answer appears incrementally, then the final event prints usage metadata. If you only need the completed answer, use `.send()` instead of `.stream()`.

## Related docs

- [Stream an agent response](/docs/basics/stream-an-agent-response)
- [Streaming events](/docs/advanced/streaming-events)
- [Readable streams](/docs/advanced/readable-streams)
