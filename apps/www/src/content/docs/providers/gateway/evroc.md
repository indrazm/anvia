---
title: "evroc"
description: "Use evroc through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1037
  label: "evroc"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://models.think.evroc.com/v1 |
| Environment | `EVROC_API_KEY` |
| Provider docs | [https://docs.evroc.com/products/think/overview.html](https://docs.evroc.com/products/think/overview.html) |
| Models | 15 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.EVROC_API_KEY,
  baseUrl: "https://models.think.evroc.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("evroc/roc");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 6 / 15 models |
| Tools | 8 / 15 models |
| Structured output | 5 / 15 models |
| Reasoning | 6 / 15 models |
| Temperature | 6 / 15 models |
| Open weights | 14 / 15 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `evroc/roc`<br />roc | - | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 262144 | input: 2.875 / output: 11.516 | 2026-06-06 |
| `google/gemma-4-26B-A4B-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.144 / output: 0.575 | 2026-04-02 |
| `intfloat/multilingual-e5-large-instruct`<br />E5 Multi-Lingual Large Embeddings 0.6B | text-embedding | text | text | open weights | context: 512 / output: 512 | input: 0.114 / output: 0.114 | 2024-06-01 |
| `KBLab/kb-whisper-large`<br />KB Whisper | whisper | audio | text | open weights | context: 448 / output: 448 | input: 0.0023 / output: 0.0023 / output_audio: 2.3 | 2024-10-01 |
| `mistralai/Mistral-Medium-3.5-128B`<br />Mistral Medium 3.5 | mistral-medium | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.725 / output: 6.9 | 2026-04-29 |
| `mistralai/Voxtral-Small-24B-2507`<br />Voxtral Small 24B | voxtral | audio, text | text | open weights | context: 32000 / output: 32000 | input: 0.0023 / output: 0.0023 / output_audio: 2.3 | 2025-03-01 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.4375 / output: 5.75 | 2026-04-21 |
| `nvidia/Llama-3.3-70B-Instruct-FP8`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 1.15 / output: 1.15 | 2024-12-06 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, open weights | context: 65536 / output: 65536 | input: 0.23 / output: 0.92 | 2025-08-05 |
| `openai/whisper-large-v3`<br />Whisper 3 Large | whisper | audio | text | open weights | context: 448 / output: 4096 | input: 0.0023 / output: 0.0023 / output_audio: 2.3 | 2024-10-01 |
| `openai/whisper-large-v3-turbo`<br />Whisper Large v3 Turbo | whisper | audio | text | open weights | context: 448 / output: 448 | input: 0.0023 / output: 0.0023 / output_audio: 2.3 | 2024-10-01 |
| `Qwen/Qwen3-Embedding-8B`<br />Qwen3 Embedding 8B | text-embedding | text | text | open weights | context: 40960 / output: 4096 | input: 0.115 / output: 0.115 | 2025-07-30 |
| `Qwen/Qwen3-Reranker-4B`<br />Qwen3 Reranker 4B | qwen | text | text | open weights | context: 32000 / output: 4096 | input: 0.0575 / output: 0 | 2025-07-30 |
| `Qwen/Qwen3-VL-30B-A3B-Instruct`<br />Qwen3 VL 30B | qwen | image, text, video | text | tools, open weights | context: 100000 / output: 100000 | input: 0.23 / output: 0.92 | 2025-07-30 |
| `Qwen/Qwen3.6-35B-A3B-FP8`<br />Qwen3.6 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.345 / output: 1.38 | 2026-04-17 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

