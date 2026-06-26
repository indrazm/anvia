---
title: "MiniMax (minimaxi.com)"
description: "Use MiniMax (minimaxi.com) through @anvia/anthropic."
section: providers
sidebar:
  group: LLM Gateway
  order: 1070
  label: "MiniMax (minimaxi.com)"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/anthropic |
| Compatibility | Anthropic-compatible endpoint |
| API URL | https://api.minimaxi.com/anthropic/v1 |
| Environment | `MINIMAX_API_KEY` |
| Provider docs | [https://platform.minimaxi.com/docs/guides/quickstart](https://platform.minimaxi.com/docs/guides/quickstart) |
| Models | 7 |

## Anvia Usage

This provider is listed as Anthropic-compatible. Start with `@anvia/anthropic` and a custom `baseUrl`, then smoke test the exact workflow.

```ts
import { AnthropicClient } from "@anvia/anthropic";

const client = new AnthropicClient({
  apiKey: process.env.MINIMAX_API_KEY,
  baseUrl: "https://api.minimaxi.com/anthropic/v1",
});

const model = client.completionModel("MiniMax-M2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 1 / 7 models |
| Tools | 7 / 7 models |
| Structured output | 0 / 7 models |
| Reasoning | 7 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 7 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `MiniMax-M2` | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 128000 | input: 0.3 / output: 1.2 | 2025-10-27 |
| `MiniMax-M2.1` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2025-12-23 |
| `MiniMax-M2.5` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `MiniMax-M2.5-highspeed` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-02-13 |
| `MiniMax-M2.7` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `MiniMax-M2.7-highspeed` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `MiniMax-M3` | minimax | image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 128000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-25 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

