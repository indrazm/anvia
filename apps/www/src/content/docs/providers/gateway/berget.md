---
title: "Berget.AI"
description: "Use Berget.AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1020
  label: "Berget.AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.berget.ai/v1 |
| Environment | `BERGET_API_KEY` |
| Provider docs | [https://api.berget.ai](https://api.berget.ai) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.BERGET_API_KEY,
  baseUrl: "https://api.berget.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("google/gemma-4-31B-it");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 3 / 8 models |
| Tools | 8 / 8 models |
| Structured output | 8 / 8 models |
| Reasoning | 8 / 8 models |
| Temperature | 8 / 8 models |
| Open weights | 8 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemma-4-31B-it`<br />Gemma 4 31B Instruct | gemma | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.275 / output: 0.55 | 2026-04-02 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.99 / output: 0.99 | 2025-04-27 |
| `mistralai/Mistral-Medium-3.5-128B`<br />Mistral Medium 3.5 128B | mistral-medium | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 1.65 / output: 5.5 | 2026-04-29 |
| `mistralai/Mistral-Small-3.2-24B-Instruct-2506`<br />Mistral Small 3.2 24B Instruct 2506 | mistral-small | text | text | tools, schema, reasoning, temperature, open weights | context: 32000 / output: 8192 | input: 0.33 / output: 0.33 | 2025-10-01 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.83 / output: 3.85 / cache_read: 0.16 | 2026-05-07 |
| `openai/gpt-oss-120b`<br />GPT-OSS-120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.22 / output: 0.83 | 2025-08-05 |
| `zai-org/GLM-4.7`<br />GLM 4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.77 / output: 2.75 | 2026-01-19 |
| `zai-org/GLM-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 32768 | input: 1.54 / output: 4.84 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

