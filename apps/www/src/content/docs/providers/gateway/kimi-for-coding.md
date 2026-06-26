---
title: "Kimi For Coding"
description: "Use Kimi For Coding through @anvia/anthropic."
section: providers
sidebar:
  group: LLM Gateway
  order: 1059
  label: "Kimi For Coding"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/anthropic |
| Compatibility | Anthropic-compatible endpoint |
| API URL | https://api.kimi.com/coding/v1 |
| Environment | `KIMI_API_KEY` |
| Provider docs | [https://www.kimi.com/code/docs/en/third-party-tools/other-coding-agents.html](https://www.kimi.com/code/docs/en/third-party-tools/other-coding-agents.html) |
| Models | 4 |

## Anvia Usage

This provider is listed as Anthropic-compatible. Start with `@anvia/anthropic` and a custom `baseUrl`, then smoke test the exact workflow.

```ts
import { AnthropicClient } from "@anvia/anthropic";

const client = new AnthropicClient({
  apiKey: process.env.KIMI_API_KEY,
  baseUrl: "https://api.kimi.com/coding/v1",
});

const model = client.completionModel("k2p5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 1 / 4 models |
| Tools | 4 / 4 models |
| Structured output | 4 / 4 models |
| Reasoning | 4 / 4 models |
| Temperature | 3 / 4 models |
| Open weights | 4 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `k2p5`<br />Kimi K2.5 | kimi-thinking | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01 |
| `k2p6`<br />Kimi K2.6 | kimi-thinking | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04 |
| `k2p7`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-12 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

