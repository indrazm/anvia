---
title: "Server React transport"
description: "Connect a server-side agent route to a React client."
section: examples
sidebar:
  group: "Getting started"
  order: 7
---

This recipe shows the transport shape between an Anvia server stream and a React client. The cookbook uses a local `fetch` stub so the stream can run without starting an HTTP server.

## Prerequisites

Install the server and React helpers:

```sh
pnpm add @anvia/core @anvia/server @anvia/react
```

## Code

```ts
import type { AgentStreamEvent } from "@anvia/core/agent";
import { fetchEventStream } from "@anvia/react";
import { createEventStream } from "@anvia/server";

async function* runEvents(): AsyncIterable<AgentStreamEvent> {
  yield {
    type: "turn_start",
    turn: 1,
    prompt: { role: "user", content: [{ type: "text", text: "Hello" }] },
    history: [],
  };
  yield { type: "text_delta", turn: 1, delta: "Hello" };
  yield { type: "text_delta", turn: 1, delta: " from Anvia" };
  yield {
    type: "final",
    runId: "run_123",
    output: "Hello from Anvia",
    usage: {
      inputTokens: 0,
      outputTokens: 0,
      totalTokens: 0,
      cachedInputTokens: 0,
      cacheCreationInputTokens: 0,
    },
    messages: [],
  };
}

const response = createEventStream(runEvents(), { format: "jsonl" });

let accumulated = "";
for await (const event of fetchEventStream<AgentStreamEvent>("/api/chat", {
  fetch: async () => response,
})) {
  if (event.type === "text_delta") {
    accumulated += event.delta;
  }
  if (event.type === "final") {
    console.log(event.output);
  }
}

console.log(`Accumulated: ${accumulated}`);
```

## Run it

```sh
pnpm cookbook:basics:07
```

## Expected behavior

The client receives the JSONL event stream and accumulates `Hello from Anvia`. In a real app, `runEvents()` would wrap `agent.prompt(...).stream()` inside your server route.

## Related docs

- [Server streams](/docs/basics/server-streams)
- [React client](/docs/basics/react-client)
- [Readable streams](/docs/advanced/readable-streams)
