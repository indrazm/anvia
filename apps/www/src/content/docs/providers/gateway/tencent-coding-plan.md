---
title: "Tencent Coding Plan (China)"
description: "Use Tencent Coding Plan (China) through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1116
  label: "Tencent Coding Plan (China)"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.lkeap.cloud.tencent.com/coding/v3 |
| Environment | `TENCENT_CODING_PLAN_API_KEY` |
| Provider docs | [https://cloud.tencent.com/document/product/1772/128947](https://cloud.tencent.com/document/product/1772/128947) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.TENCENT_CODING_PLAN_API_KEY,
  baseUrl: "https://api.lkeap.cloud.tencent.com/coding/v3",
  completionApi: "chat",
});

const model = client.completionModel("glm-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 1 / 8 models |
| Tools | 8 / 8 models |
| Structured output | 0 / 8 models |
| Reasoning | 5 / 8 models |
| Temperature | 8 / 8 models |
| Open weights | 2 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature | context: 202752 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-11 |
| `hunyuan-2.0-instruct`<br />Tencent HY 2.0 Instruct | hunyuan | text | text | tools, temperature | context: 131072 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-08 |
| `hunyuan-2.0-thinking`<br />Tencent HY 2.0 Think | hunyuan | text | text | tools, reasoning, temperature | context: 131072 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-08 |
| `hunyuan-t1`<br />Hunyuan-T1 | hunyuan | text | text | tools, reasoning, temperature | context: 131072 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-08 |
| `hunyuan-turbos`<br />Hunyuan-TurboS | hunyuan | text | text | tools, temperature | context: 131072 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-08 |
| `kimi-k2.5`<br />Kimi-K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-27 |
| `minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-12 |
| `tc-code-latest`<br />Auto | auto | text | text | tools, temperature | context: 131072 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-08 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

