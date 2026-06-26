---
title: "Z.AI"
description: "Use Z.AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1138
  label: "Z.AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.z.ai/api/paas/v4 |
| Environment | `ZHIPU_API_KEY` |
| Provider docs | [https://docs.z.ai/guides/overview/pricing](https://docs.z.ai/guides/overview/pricing) |
| Models | 14 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ZHIPU_API_KEY,
  baseUrl: "https://api.z.ai/api/paas/v4",
  completionApi: "chat",
});

const model = client.completionModel("glm-4.5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text, video |
| Output modalities | text |
| Attachments | 3 / 14 models |
| Tools | 14 / 14 models |
| Structured output | 3 / 14 models |
| Reasoning | 14 / 14 models |
| Temperature | 14 / 14 models |
| Open weights | 12 / 14 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-07-28 |
| `glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.2 / output: 1.1 / cache_read: 0.03 / cache_write: 0 | 2025-07-28 |
| `glm-4.5-flash`<br />GLM-4.5-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-07-28 |
| `glm-4.5v`<br />GLM-4.5V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 64000 / output: 16384 | input: 0.6 / output: 1.8 | 2025-08-11 |
| `glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-09-30 |
| `glm-4.6v`<br />GLM-4.6V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.3 / output: 0.9 | 2025-12-08 |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-12-22 |
| `glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-19 |
| `glm-4.7-flashx`<br />GLM-4.7-FlashX | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.07 / output: 0.4 / cache_read: 0.01 / cache_write: 0 | 2026-01-19 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 / cache_write: 0 | 2026-02-12 |
| `glm-5-turbo`<br />GLM-5-Turbo | glm | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 / cache_write: 0 | 2026-03-16 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-06-13 |
| `glm-5v-turbo`<br />GLM-5V-Turbo | glm | image, pdf, text, video | text | tools, reasoning, temperature | context: 200000 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 / cache_write: 0 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

