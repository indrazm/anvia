---
title: "Privatemode AI"
description: "Use Privatemode AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1099
  label: "Privatemode AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | http://localhost:8080/v1 |
| Environment | `PRIVATEMODE_API_KEY`, `PRIVATEMODE_ENDPOINT` |
| Provider docs | [https://docs.privatemode.ai/api/overview](https://docs.privatemode.ai/api/overview) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.PRIVATEMODE_API_KEY,
  baseUrl: "http://localhost:8080/v1",
  completionApi: "chat",
});

const model = client.completionModel("gemma-3-27b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text |
| Output modalities | text |
| Attachments | 2 / 5 models |
| Tools | 3 / 5 models |
| Structured output | 3 / 5 models |
| Reasoning | 1 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-3-27b`<br />Gemma 3 27B | gemma | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-03-12 |
| `gpt-oss-120b` | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0 / output: 0 | 2025-08-14 |
| `qwen3-coder-30b-a3b`<br />Qwen3-Coder 30B-A3B | qwen | text | text | tools, schema, temperature, open weights | context: 128000 / output: 32768 | input: 0 / output: 0 | 2025-04 |
| `qwen3-embedding-4b`<br />Qwen3-Embedding 4B | qwen | text | text | temperature, open weights | context: 32000 / output: 2560 | input: 0 / output: 0 | 2025-06-06 |
| `whisper-large-v3`<br />Whisper large-v3 | whisper | audio | text | temperature, open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2023-09-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

