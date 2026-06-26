---
title: "Atomic Chat"
description: "Use Atomic Chat through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1014
  label: "Atomic Chat"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | http://127.0.0.1:1337/v1 |
| Environment | `ATOMIC_CHAT_API_KEY` |
| Provider docs | [https://atomic.chat](https://atomic.chat) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ATOMIC_CHAT_API_KEY,
  baseUrl: "http://127.0.0.1:1337/v1",
  completionApi: "chat",
});

const model = client.completionModel("gemma-4-E4B-it-IQ4_XS");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 2 / 5 models |
| Tools | 3 / 5 models |
| Structured output | 0 / 5 models |
| Reasoning | 0 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-4-E4B-it-IQ4_XS`<br />Gemma 4 E4B Instruct (IQ4_XS) | gemma | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2026-04-02 |
| `gemma-4-E4B-it-MLX-4bit`<br />Gemma 4 E4B Instruct (MLX 4-bit) | gemma | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2026-04-02 |
| `Meta-Llama-3_1-8B-Instruct-GGUF`<br />Meta Llama 3.1 8B Instruct (GGUF) | llama | text | text | tools, temperature, open weights | context: 131072 / output: 4096 | input: 0 / output: 0 | 2024-07-23 |
| `Qwen3_5-9B-MLX-4bit`<br />Qwen 3.5 9B (MLX 4-bit) | qwen | image, text | text | tools, temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2026-04-04 |
| `Qwen3_5-9B-Q4_K_M`<br />Qwen 3.5 9B (Q4_K_M) | qwen | image, text | text | tools, temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2026-04-04 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

