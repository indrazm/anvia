---
title: "FreeModel"
description: "Use FreeModel through @anvia/anthropic."
section: providers
sidebar:
  group: LLM Gateway
  order: 1040
  label: "FreeModel"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/anthropic |
| Compatibility | Anthropic-compatible endpoint |
| API URL | https://cc.freemodel.dev/v1 |
| Environment | `FREEMODEL_API_KEY` |
| Provider docs | [https://freemodel.dev](https://freemodel.dev) |
| Models | 10 |

## Anvia Usage

This provider is listed as Anthropic-compatible. Start with `@anvia/anthropic` and a custom `baseUrl`, then smoke test the exact workflow.

```ts
import { AnthropicClient } from "@anvia/anthropic";

const client = new AnthropicClient({
  apiKey: process.env.FREEMODEL_API_KEY,
  baseUrl: "https://cc.freemodel.dev/v1",
});

const model = client.completionModel("claude-fable-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text |
| Output modalities | text |
| Attachments | 10 / 10 models |
| Tools | 10 / 10 models |
| Structured output | 4 / 10 models |
| Reasoning | 10 / 10 models |
| Temperature | 3 / 10 models |
| Open weights | 0 / 10 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 / cache_write: 1.75 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 / cache_write: 2.5 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 / cache_write: 0.75 | 2026-03-17 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 / cache_write: 5 | 2026-04-23 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

