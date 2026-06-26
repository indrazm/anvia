---
title: "Scaleway"
description: "Use Scaleway through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1107
  label: "Scaleway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.scaleway.ai/v1 |
| Environment | `SCALEWAY_API_KEY` |
| Provider docs | [https://www.scaleway.com/en/docs/generative-apis/](https://www.scaleway.com/en/docs/generative-apis/) |
| Models | 16 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SCALEWAY_API_KEY,
  baseUrl: "https://api.scaleway.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("bge-multilingual-gemma2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 9 / 16 models |
| Tools | 13 / 16 models |
| Structured output | 4 / 16 models |
| Reasoning | 6 / 16 models |
| Temperature | 13 / 16 models |
| Open weights | 13 / 16 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `bge-multilingual-gemma2`<br />BGE Multilingual Gemma2 | gemma | text | text | - | context: 8191 / output: 3072 | input: 0.1 / output: 0 | 2025-06-15 |
| `devstral-2-123b-instruct-2512`<br />Devstral 2 123B Instruct (2512) | devstral | text | text | tools, temperature, open weights | context: 256000 / output: 16384 | input: 0.4 / output: 2 | 2026-03-17 |
| `gemma-3-27b-it`<br />Gemma-3-27B-IT | gemma | image, text | text | tools, reasoning, temperature | context: 40000 / output: 8192 | input: 0.25 / output: 0.5 | 2026-03-17 |
| `gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0.25 / output: 0.5 | 2026-05-22 |
| `gpt-oss-120b`<br />GPT-OSS 120B | gpt-oss | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.15 / output: 0.6 | 2026-03-17 |
| `llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 100000 / output: 16384 | input: 0.9 / output: 0.9 | 2026-03-17 |
| `mistral-medium-3.5-128b`<br />Mistral Medium 3.5 128B | mistral-medium | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 1.5 / output: 7.5 | 2026-04-29 |
| `mistral-small-3.2-24b-instruct-2506`<br />Mistral Small 3.2 24B Instruct (2506) | mistral-small | image, text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.15 / output: 0.35 | 2026-03-17 |
| `pixtral-12b-2409`<br />Pixtral 12B 2409 | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.2 / output: 0.2 | 2026-03-17 |
| `qwen3-235b-a22b-instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 260000 / output: 16384 | input: 0.75 / output: 2.25 / reasoning: 8.4 | 2026-03-17 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.2 / output: 0.8 | 2026-03-17 |
| `qwen3-embedding-8b`<br />Qwen3 Embedding 8B | qwen | text | text | - | context: 32768 / output: 4096 | input: 0.1 / output: 0 | 2026-03-17 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0.6 / output: 3.6 | 2026-03-17 |
| `qwen3.6-35b-a3b`<br />Qwen3.6 35B A3B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.25 / output: 1.5 | 2026-05-22 |
| `voxtral-small-24b-2507`<br />Voxtral Small 24B 2507 | voxtral | audio, text | text | tools, temperature, open weights | context: 32000 / output: 16384 | input: 0.15 / output: 0.35 | 2026-03-17 |
| `whisper-large-v3`<br />Whisper Large v3 | whisper | audio | text | open weights | context: 0 / output: 8192 | input: 0.003 / output: 0 | 2026-03-17 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

