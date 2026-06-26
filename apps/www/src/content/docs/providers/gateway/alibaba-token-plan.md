---
title: "Alibaba Token Plan"
description: "Use Alibaba Token Plan through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1008
  label: "Alibaba Token Plan"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://token-plan.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1 |
| Environment | `ALIBABA_TOKEN_PLAN_API_KEY` |
| Provider docs | [https://www.alibabacloud.com/help/en/model-studio/token-plan-overview](https://www.alibabacloud.com/help/en/model-studio/token-plan-overview) |
| Models | 18 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ALIBABA_TOKEN_PLAN_API_KEY,
  baseUrl: "https://token-plan.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-v3.2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | image, text |
| Attachments | 4 / 18 models |
| Tools | 14 / 18 models |
| Structured output | 6 / 18 models |
| Reasoning | 14 / 18 models |
| Temperature | 17 / 18 models |
| Open weights | 9 / 18 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0 / output: 0 | 2025-12-05 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0 / output: 0 / cache_read: 0 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0 / output: 0 / cache_read: 0 | 2026-04-24 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature | context: 202752 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-12 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 128000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-13 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-21 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-12 |
| `MiniMax-M2.5` | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / input: 196601 / output: 24576 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-12 |
| `qwen-image-2.0`<br />Qwen Image 2.0 | qwen | text | image | temperature | context: 8192 / output: 0 | input: 0 / output: 0 | 2026-03-03 |
| `qwen-image-2.0-pro`<br />Qwen Image 2.0 Pro | qwen | text | image | temperature | context: 8192 / output: 0 | input: 0 / output: 0 | 2026-03-03 |
| `qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-27 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-02 |
| `wan2.7-image`<br />Wan2.7 Image | - | text | image | temperature | context: 8192 / output: 0 | input: 0 / output: 0 | 2026-05-29 |
| `wan2.7-image-pro`<br />Wan2.7 Image Pro | - | text | image | temperature | context: 8192 / output: 0 | input: 0 / output: 0 | 2026-05-29 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

