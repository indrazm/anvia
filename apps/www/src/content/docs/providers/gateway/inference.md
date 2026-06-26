---
title: "Inference"
description: "Use Inference through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1055
  label: "Inference"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://inference.net/v1 |
| Environment | `INFERENCE_API_KEY` |
| Provider docs | [https://inference.net/models](https://inference.net/models) |
| Models | 9 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.INFERENCE_API_KEY,
  baseUrl: "https://inference.net/v1",
  completionApi: "chat",
});

const model = client.completionModel("google/gemma-3");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 3 / 9 models |
| Tools | 8 / 9 models |
| Structured output | 0 / 9 models |
| Reasoning | 0 / 9 models |
| Temperature | 8 / 9 models |
| Open weights | 9 / 9 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemma-3`<br />Google Gemma 3 | gemma | image, text | text | tools, temperature, open weights | context: 125000 / output: 4096 | input: 0.15 / output: 0.3 | 2025-01-01 |
| `meta/llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.025 / output: 0.025 | 2025-01-01 |
| `meta/llama-3.2-11b-vision-instruct`<br />Llama 3.2 11B Vision Instruct | llama | image, text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.055 / output: 0.055 | 2025-01-01 |
| `meta/llama-3.2-1b-instruct`<br />Llama 3.2 1B Instruct | llama | text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.01 / output: 0.01 | 2025-01-01 |
| `meta/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.02 / output: 0.02 | 2025-01-01 |
| `mistral/mistral-nemo-12b-instruct`<br />Mistral Nemo 12B Instruct | mistral-nemo | text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.038 / output: 0.1 | 2025-01-01 |
| `osmosis/osmosis-structure-0.6b`<br />Osmosis Structure 0.6B | osmosis | text | text | tools, temperature, open weights | context: 4000 / output: 2048 | input: 0.1 / output: 0.5 | 2025-01-01 |
| `qwen/qwen-2.5-7b-vision-instruct`<br />Qwen 2.5 7B Vision Instruct | qwen | image, text | text | tools, temperature, open weights | context: 125000 / output: 4096 | input: 0.2 / output: 0.2 | 2025-01-01 |
| `qwen/qwen3-embedding-4b`<br />Qwen 3 Embedding 4B | qwen | text | text | open weights | context: 32000 / output: 2048 | input: 0.01 / output: 0 | 2025-01-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

