---
title: "Readable stream JSONL"
description: "Expose streamed events as newline-delimited JSON."
section: examples
sidebar:
  group: "Getting started"
  order: 5
---

Use `readableStream()` when you want to forward agent events from a server route. The stream emits encoded event chunks that clients can consume incrementally.

## Prerequisites

This example uses the same provider environment as the text-call recipe:

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

const agent = new AgentBuilder("jsonl-agent", model)
  .instructions("Answer with short bullet points.")
  .build();

const stream = agent
  .prompt("Give three short reasons to use AsyncIterable for streaming.")
  .readableStream();

const reader = stream.getReader();
const decoder = new TextDecoder();

while (true) {
  const chunk = await reader.read();
  if (chunk.done) {
    break;
  }

  process.stdout.write(decoder.decode(chunk.value));
}
```

## Run it

```sh
pnpm cookbook:basics:05
```

## Expected behavior

The script prints encoded streaming event data. In a web server, return that stream from the route instead of reading it locally.

## Related docs

- [Server streams](/docs/basics/server-streams)
- [Readable streams](/docs/advanced/readable-streams)
- [Streaming events](/docs/advanced/streaming-events)
