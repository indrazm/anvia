---
title: Anthropic-Compatible
description: Use @anvia/anthropic with Anthropic-compatible completion endpoints.
section: providers
sidebar:
  group: Compatible APIs
  order: 20
---

Some providers expose an Anthropic-compatible API surface. `@anvia/anthropic` can target those endpoints through `AnthropicClient` when the endpoint works with the Anthropic SDK.

Treat compatibility as a starting point, not a production guarantee. Tool calls, stream events, document blocks, image blocks, thinking metadata, usage data, and error shapes can differ across compatible providers.

## Configure The Endpoint

Use `baseUrl` with `AnthropicClient`:

```ts
import { AnthropicClient } from "@anvia/anthropic";

const client = new AnthropicClient({
  apiKey: process.env.ANTHROPIC_COMPATIBLE_API_KEY,
  baseUrl: "https://provider.example.com",
});

const model = client.completionModel("provider/model-name");
```

Keep this setup in server-only code. Browser code should call your product API or stream endpoint, not the provider-compatible endpoint directly.

## Provider Parameters

Use completion `params` for provider-specific fields:

```ts
import { createCompletion } from "@anvia/core";

const result = await createCompletion(model, {
  input: "Write a concise incident summary.",
  params: {
    thinking: { type: "enabled" },
  },
});
```

Keep important params in typed app config. If a parameter controls reasoning, safety, latency, cost, or output format, it is product behavior.

## Tools And Streaming

Anthropic-compatible tool workflows should be tested with the exact provider. The adapter maps Anvia tools to Anthropic tools and maps provider `tool_use` blocks back to Anvia assistant tool calls.

If the workflow relies on streaming tool arguments, include a smoke test that runs a required tool call and verifies the tool handler receives the complete input.

## Images And Documents

The Anthropic adapter declares image input and document input support at the Anvia contract level. Compatible endpoints can still differ in supported media types, file sizes, block shapes, or account access.

Test the exact image and document inputs your product sends before enabling the endpoint for users.

## Thinking Metadata

When a provider returns thinking or reasoning blocks, treat that content as operational metadata. It can help debugging and evals, but it may not be safe to show to users or persist without retention policy.

## Smoke Tests

Run a small check for each compatible endpoint and model id:

- direct completion
- streamed completion
- required tool call, if tools are enabled
- image input, if the workflow sends images
- document input, if the workflow sends documents
- thinking metadata, if your workflow depends on it

Assert normalized Anvia outputs, not only raw provider success. A streaming test should verify text deltas and a final event. A tool test should verify the tool handler receives complete arguments.

## Failure Mapping

Map provider SDK errors at your runner boundary. Logs and traces can include provider name, endpoint, model id, status code, and trace id, but user-facing responses should not expose raw SDK errors or request payloads.

Read [Anthropic provider](/docs/providers/anthropic), [Capability matrix](/docs/providers/capability-matrix), [Gateway caveats](/docs/providers/gateway-caveats), and [Testing strategy](/docs/advanced/testing-strategy) before adding compatible endpoints to production traffic.
