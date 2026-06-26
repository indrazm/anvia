---
title: "Wafer"
description: "Use Wafer through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1130
  label: "Wafer"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://pass.wafer.ai/v1 |
| Environment | `WAFER_API_KEY` |
| Provider docs | [https://docs.wafer.ai/wafer-pass](https://docs.wafer.ai/wafer-pass) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.WAFER_API_KEY,
  baseUrl: "https://pass.wafer.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-v4-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 3 / 8 models |
| Tools | 8 / 8 models |
| Structured output | 8 / 8 models |
| Reasoning | 8 / 8 models |
| Temperature | 8 / 8 models |
| Open weights | 7 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.01 / cache_write: 0 | 2026-05-30 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.48 / cache_read: 0.02 / cache_write: 0 | 2026-05-30 |
| `GLM-5.1` | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.1 / cache_write: 0 | 2026-06-01 |
| `GLM-5.2` | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1.2 / output: 4.1 / cache_read: 0.2 / cache_write: 0 | 2026-06-22 |
| `Kimi-K2.6` | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.68 / output: 3.15 / cache_read: 0.07 / cache_write: 0 | 2026-06-01 |
| `Qwen3.5-397B-A17B` | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.43 / output: 2.6 / cache_read: 0.04 / cache_write: 0 | 2026-06-01 |
| `Qwen3.6-35B-A3B` | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / input: 229376 / output: 65536 | input: 0.15 / output: 1 / cache_read: 0.02 / cache_write: 0 | 2026-05-30 |
| `qwen3.7-max`<br />Qwen3.7-Max | qwen3.7-max | text | text | tools, schema, reasoning, temperature | context: 256000 / output: 65536 | input: 5 / output: 15 / cache_read: 0.5 / cache_write: 0 | 2026-05-30 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

