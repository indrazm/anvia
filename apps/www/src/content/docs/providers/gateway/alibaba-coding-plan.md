---
title: "Alibaba Coding Plan"
description: "Use Alibaba Coding Plan through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1006
  label: "Alibaba Coding Plan"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://coding-intl.dashscope.aliyuncs.com/v1 |
| Environment | `ALIBABA_CODING_PLAN_API_KEY` |
| Provider docs | [https://www.alibabacloud.com/help/en/model-studio/coding-plan](https://www.alibabacloud.com/help/en/model-studio/coding-plan) |
| Models | 12 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ALIBABA_CODING_PLAN_API_KEY,
  baseUrl: "https://coding-intl.dashscope.aliyuncs.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("glm-4.7");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 2 / 12 models |
| Tools | 12 / 12 models |
| Structured output | 2 / 12 models |
| Reasoning | 9 / 12 models |
| Temperature | 12 / 12 models |
| Open weights | 5 / 12 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-12-22 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature | context: 202752 / output: 16384 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-11 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-27 |
| `MiniMax-M2.5` | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / input: 196601 / output: 24576 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-12 |
| `qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-03 |
| `qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, temperature, open weights | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-07-23 |
| `qwen3-max-2026-01-23`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-23 |
| `qwen3.5-plus`<br />Qwen3.5 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-16 |
| `qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.1875 / output: 1.125 / cache_write: 0.234375 | 2026-04-27 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.5 / cache_write: 3.125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-02 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

