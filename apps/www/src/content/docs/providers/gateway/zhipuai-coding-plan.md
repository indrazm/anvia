---
title: "Zhipu AI Coding Plan"
description: "Use Zhipu AI Coding Plan through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1143
  label: "Zhipu AI Coding Plan"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://open.bigmodel.cn/api/coding/paas/v4 |
| Environment | `ZHIPU_API_KEY` |
| Provider docs | [https://docs.bigmodel.cn/cn/coding-plan/overview](https://docs.bigmodel.cn/cn/coding-plan/overview) |
| Models | 7 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ZHIPU_API_KEY,
  baseUrl: "https://open.bigmodel.cn/api/coding/paas/v4",
  completionApi: "chat",
});

const model = client.completionModel("glm-4.5-air");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text, video |
| Output modalities | text |
| Attachments | 2 / 7 models |
| Tools | 7 / 7 models |
| Structured output | 3 / 7 models |
| Reasoning | 7 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 4 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-07-28 |
| `glm-4.6v`<br />GLM-4.6V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.3 / output: 0.9 | 2025-12-08 |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-12-22 |
| `glm-5-turbo`<br />GLM-5-Turbo | glm | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-16 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-03-27 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-13 |
| `glm-5v-turbo`<br />GLM-5V-Turbo | glm | image, pdf, text, video | text | tools, reasoning, temperature | context: 200000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

