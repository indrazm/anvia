---
title: "STACKIT"
description: "Use STACKIT through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1111
  label: "STACKIT"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.openai-compat.model-serving.eu01.onstackit.cloud/v1 |
| Environment | `STACKIT_API_KEY` |
| Provider docs | [https://docs.stackit.cloud/products/data-and-ai/ai-model-serving/basics/available-shared-models](https://docs.stackit.cloud/products/data-and-ai/ai-model-serving/basics/available-shared-models) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.STACKIT_API_KEY,
  baseUrl: "https://api.openai-compat.model-serving.eu01.onstackit.cloud/v1",
  completionApi: "chat",
});

const model = client.completionModel("cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 3 / 8 models |
| Tools | 5 / 8 models |
| Structured output | 1 / 8 models |
| Reasoning | 1 / 8 models |
| Temperature | 6 / 8 models |
| Open weights | 8 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `cortecs/Llama-3.3-70B-Instruct-FP8-Dynamic`<br />Llama 3.3 70B | llama | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.49 / output: 0.71 | 2024-12-05 |
| `google/gemma-3-27b-it`<br />Gemma 3 27B | gemma | image, text | text | temperature, open weights | context: 37000 / output: 8192 | input: 0.49 / output: 0.71 | 2025-05-17 |
| `intfloat/e5-mistral-7b-instruct`<br />E5 Mistral 7B | mistral | text | text | open weights | context: 4096 / output: 4096 | input: 0.02 / output: 0.02 | 2023-12-11 |
| `neuralmagic/Meta-Llama-3.1-8B-Instruct-FP8`<br />Llama 3.1 8B | llama | text | text | tools, schema, temperature, open weights | context: 128000 / output: 8192 | input: 0.16 / output: 0.27 | 2024-07-23 |
| `neuralmagic/Mistral-Nemo-Instruct-2407-FP8`<br />Mistral Nemo | mistral | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.49 / output: 0.71 | 2024-07-01 |
| `openai/gpt-oss-120b`<br />GPT-OSS 120B | gpt | text | text | tools, reasoning, temperature, open weights | context: 131000 / output: 8192 | input: 0.49 / output: 0.71 | 2025-08-05 |
| `Qwen/Qwen3-VL-235B-A22B-Instruct-FP8`<br />Qwen3-VL 235B | qwen | image, text | text | tools, temperature, open weights | context: 218000 / output: 8192 | input: 1.64 / output: 1.91 | 2024-11-01 |
| `Qwen/Qwen3-VL-Embedding-8B`<br />Qwen3-VL Embedding 8B | qwen | image, text | text | open weights | context: 32000 / output: 4096 | input: 0.09 / output: 0.09 | 2026-02-05 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

