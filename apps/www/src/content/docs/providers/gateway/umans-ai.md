---
title: "Umans AI"
description: "Use Umans AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1120
  label: "Umans AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.code.umans.ai/v1 |
| Environment | `UMANS_AI_API_KEY` |
| Provider docs | [https://app.umans.ai/offers/code/docs/orgs](https://app.umans.ai/offers/code/docs/orgs) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.UMANS_AI_API_KEY,
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
| Attachments | 3 / 5 models |
| Tools | 5 / 5 models |
| Structured output | 5 / 5 models |
| Reasoning | 5 / 5 models |
| Temperature | 2 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `umans-coder`<br />Umans Coder | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `umans-flash`<br />Umans Flash | qwen | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.15 / output: 1 / cache_read: 0.05 | 2026-04-17 |
| `umans-glm-5.1`<br />GLM 5.1 | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.29 | 2026-04-07 |
| `umans-glm-5.2`<br />GLM 5.2 | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 405504 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |
| `umans-kimi-k2.7`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

