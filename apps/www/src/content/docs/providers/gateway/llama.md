---
title: "Llama"
description: "Use Llama through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1062
  label: "Llama"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.llama.com/compat/v1/ |
| Environment | `LLAMA_API_KEY` |
| Provider docs | [https://llama.developer.meta.com/docs/models](https://llama.developer.meta.com/docs/models) |
| Models | 7 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LLAMA_API_KEY,
  baseUrl: "https://api.llama.com/compat/v1/",
  completionApi: "chat",
});

const model = client.completionModel("cerebras-llama-4-maverick-17b-128e-instruct");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 7 / 7 models |
| Tools | 7 / 7 models |
| Structured output | 0 / 7 models |
| Reasoning | 0 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 7 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `cerebras-llama-4-maverick-17b-128e-instruct`<br />Cerebras-Llama-4-Maverick-17B-128E-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `cerebras-llama-4-scout-17b-16e-instruct`<br />Cerebras-Llama-4-Scout-17B-16E-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `groq-llama-4-maverick-17b-128e-instruct`<br />Groq-Llama-4-Maverick-17B-128E-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-06 |
| `llama-3.3-8b-instruct`<br />Llama-3.3-8B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-06 |
| `llama-4-maverick-17b-128e-instruct-fp8`<br />Llama-4-Maverick-17B-128E-Instruct-FP8 | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `llama-4-scout-17b-16e-instruct-fp8`<br />Llama-4-Scout-17B-16E-Instruct-FP8 | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

