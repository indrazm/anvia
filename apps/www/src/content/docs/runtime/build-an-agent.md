---
title: Build an agent
description: Create an Anvia runtime, attach a model provider, and run your first tool-aware loop.
section: runtime
sidebar:
  group: Use cases
  order: 1
home:
  card: true
  order: 1
---

An Anvia agent starts with a runtime. The runtime owns the model adapter, tool registry, session state, and streaming output contract used by your application.

## Install core packages

Start with the core runtime and the provider adapter you want to use.

```bash
pnpm add @anvia/core @anvia/openai
```

Use provider-specific packages only when your agent needs them. This keeps each application small and makes provider changes explicit.

## Create a runtime

Create the runtime near your app boundary. Register model providers, tools, and tracing once, then reuse that runtime for requests.

```ts
import { createRuntime } from "@anvia/core";
import { openai } from "@anvia/openai";

export const runtime = createRuntime({
  model: openai("gpt-4.1-mini"),
});
```

## Run a request

Pass user input into the runtime and stream the result to your UI or server response.

```ts
const response = await runtime.run({
  input: "Summarize this support ticket.",
});
```

The same runtime can later accept retrieval, tools, tracing, and app transports without changing the rest of your product code.
