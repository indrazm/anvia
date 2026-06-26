---
title: "Umans AI Coding Plan"
description: "Use Umans AI Coding Plan through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1121
  label: "Umans AI Coding Plan"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.code.umans.ai/v1 |
| Environment | `UMANS_AI_CODING_PLAN_API_KEY` |
| Provider docs | [https://app.umans.ai/offers/code/docs](https://app.umans.ai/offers/code/docs) |
| Models | 6 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.UMANS_AI_CODING_PLAN_API_KEY,
  baseUrl: "https://api.code.umans.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("umans-coder");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 4 / 6 models |
| Tools | 6 / 6 models |
| Structured output | 6 / 6 models |
| Reasoning | 6 / 6 models |
| Temperature | 2 / 6 models |
| Open weights | 6 / 6 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `umans-coder`<br />Umans Coder | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-12 |
| `umans-flash`<br />Umans Flash | qwen | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-17 |
| `umans-glm-5.1`<br />GLM 5.1 | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-07 |
| `umans-glm-5.2`<br />GLM 5.2 | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 405504 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-13 |
| `umans-kimi-k2.7`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-12 |
| `umans-qwen3.6-35b-a3b`<br />Qwen3.6 35B A3B | qwen | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-17 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

