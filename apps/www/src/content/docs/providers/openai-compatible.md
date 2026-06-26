---
title: OpenAI-Compatible
description: Use @anvia/openai with OpenAI-compatible chat-completions endpoints.
section: providers
sidebar:
  group: Compatible APIs
  order: 10
---

Some providers expose an OpenAI-compatible API surface. `@anvia/openai` can target those endpoints through `OpenAIClient` when the endpoint follows the OpenAI-compatible request and response shape.

Treat compatibility as a starting point, not a production guarantee. A provider can match the OpenAI request shape while differing in tools, tool choice, output schemas, reasoning fields, streaming chunks, usage data, or media support.

## Configure The Endpoint

Use `baseUrl` with `OpenAIClient`:

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.COMPATIBLE_API_KEY,
  baseUrl: "https://provider.example.com/v1",
});

const model = client.completionModel("provider/model-name");
```

When `baseUrl` is provided, `OpenAIClient` defaults to the chat-completions adapter because many compatible providers implement Chat Completions but not OpenAI Responses.

## Choose The Adapter

You can force the completion API when needed:

```ts
const chatClient = new OpenAIClient({
  apiKey: process.env.COMPATIBLE_API_KEY,
  baseUrl: "https://provider.example.com/v1",
  completionApi: "chat",
});

const responsesClient = new OpenAIClient({
  apiKey: process.env.COMPATIBLE_API_KEY,
  baseUrl: "https://provider.example.com/v1",
  completionApi: "responses",
});
```

Use `"responses"` only after confirming the endpoint supports the Responses API. Use `"chat"` for most OpenAI-compatible chat-completions providers.

## Provider Parameters

Use completion `params` for provider-specific fields:

```ts
import { createCompletion } from "@anvia/core";

const result = await createCompletion(model, {
  input: "Summarize this release note.",
  params: {
    thinking: { type: "enabled", keep: "all" },
  },
});
```

Keep important params in typed app config. If a parameter controls reasoning, safety, latency, cost, or output format, it is product behavior.

## Reasoning And Tool Calls

Some compatible chat providers return reasoning in provider-specific fields while using normal tool calls. The OpenAI chat adapter preserves known reasoning fields such as `reasoning` and `reasoning_content` in assistant history.

This matters for multi-turn tool workflows. Some providers reject the next request if an assistant tool-call message is replayed without the reasoning metadata that accompanied it.

## Smoke Tests

Run a small check for each compatible endpoint and model id:

- direct completion
- streamed completion
- required tool call, if tools are enabled
- output schema request, if structured output is enabled
- image input, if the workflow sends images

Assert normalized Anvia outputs, not only raw provider success. A streaming test should verify text deltas and a final event. A tool test should verify the tool handler receives complete arguments.

## Failure Mapping

Map provider SDK errors at your runner boundary. Logs and traces can include provider name, endpoint, model id, status code, and trace id, but user-facing responses should not expose raw SDK errors or request payloads.

Read [OpenAI provider](/docs/providers/openai), [Capability matrix](/docs/providers/capability-matrix), [Gateway caveats](/docs/providers/gateway-caveats), and [Testing strategy](/docs/advanced/testing-strategy) before adding compatible endpoints to production traffic.
