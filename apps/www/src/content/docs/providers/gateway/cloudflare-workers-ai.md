---
title: "Cloudflare Workers AI"
description: "Use Cloudflare Workers AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1027
  label: "Cloudflare Workers AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1 |
| Environment | `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_KEY` |
| Provider docs | [https://developers.cloudflare.com/workers-ai/models/](https://developers.cloudflare.com/workers-ai/models/) |
| Models | 22 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CLOUDFLARE_ACCOUNT_ID,
  baseUrl: "https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("@cf/aisingapore/gemma-sea-lion-v4-27b-it");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 5 / 22 models |
| Tools | 13 / 22 models |
| Structured output | 8 / 22 models |
| Reasoning | 11 / 22 models |
| Temperature | 22 / 22 models |
| Open weights | 22 / 22 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `@cf/aisingapore/gemma-sea-lion-v4-27b-it`<br />Gemma Sea Lion V4 27B It | gemma | text | text | temperature, open weights | context: 128000 / output: 128000 | input: 0.351 / output: 0.555 | 2025-09-23 |
| `@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`<br />Deepseek R1 Distill Qwen 32B | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 80000 / output: 80000 | input: 0.497 / output: 4.881 | 2025-05-29 |
| `@cf/google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0.1 / output: 0.3 | 2026-04-02 |
| `@cf/ibm-granite/granite-4.0-h-micro`<br />Granite 4.0 H Micro | granite | text | text | tools, temperature, open weights | context: 131000 / output: 131000 | input: 0.017 / output: 0.112 | 2025-10-07 |
| `@cf/meta/llama-3.1-8b-instruct-fp8`<br />Llama 3.1 8B Instruct fp8 | llama | text | text | temperature, open weights | context: 32000 / output: 32000 | input: 0.152 / output: 0.287 | 2024-07-25 |
| `@cf/meta/llama-3.2-11b-vision-instruct`<br />Llama 3.2 11B Vision Instruct | llama | image, text | text | temperature, open weights | context: 128000 / output: 128000 | input: 0.0485 / output: 0.676 | 2024-09-25 |
| `@cf/meta/llama-3.2-1b-instruct`<br />Llama 3.2 1B Instruct | llama | text | text | temperature, open weights | context: 60000 / output: 60000 | input: 0.027 / output: 0.201 | 2024-09-25 |
| `@cf/meta/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | temperature, open weights | context: 80000 / output: 80000 | input: 0.0509 / output: 0.335 | 2024-09-25 |
| `@cf/meta/llama-3.3-70b-instruct-fp8-fast`<br />Llama 3.3 70B Instruct fp8 Fast | llama | text | text | tools, temperature, open weights | context: 24000 / output: 24000 | input: 0.293 / output: 2.253 | 2024-12-06 |
| `@cf/meta/llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout 17B 16E Instruct | llama | image, text | text | tools, temperature, open weights | context: 131000 / output: 16384 | input: 0.27 / output: 0.85 | 2025-04-05 |
| `@cf/meta/llama-guard-3-8b`<br />Llama Guard 3 8B | llama | text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.484 / output: 0.03 | 2025-01-22 |
| `@cf/mistralai/mistral-small-3.1-24b-instruct`<br />Mistral Small 3.1 24B Instruct | mistral-small | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.351 / output: 0.555 | 2025-03-18 |
| `@cf/moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 256000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `@cf/moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `@cf/nvidia/nemotron-3-120b-a12b`<br />Nemotron 3 Super 120B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.5 / output: 1.5 | 2026-03-11 |
| `@cf/openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.35 / output: 0.75 | 2025-08-05 |
| `@cf/openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.2 / output: 0.3 | 2025-08-05 |
| `@cf/qwen/qwen2.5-coder-32b-instruct`<br />Qwen2.5 Coder 32B Instruct | qwen | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.66 / output: 1 | 2025-02-27 |
| `@cf/qwen/qwen3-30b-a3b-fp8`<br />Qwen3 30B A3b fp8 | qwen | text | text | tools, reasoning, temperature, open weights | context: 32768 / output: 32768 | input: 0.0509 / output: 0.335 | 2025-04-30 |
| `@cf/qwen/qwq-32b`<br />Qwq 32B | qwen | text | text | reasoning, temperature, open weights | context: 24000 / output: 24000 | input: 0.66 / output: 1 | 2025-03-05 |
| `@cf/zai-org/glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.0605 / output: 0.4 | 2026-01-19 |
| `@cf/zai-org/glm-5.2`<br />Glm 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

