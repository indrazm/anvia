---
title: "LLMTR"
description: "Use LLMTR through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1064
  label: "LLMTR"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://llmtr.com/v1 |
| Environment | `LLMTR_API_KEY` |
| Provider docs | [https://llmtr.com/docs](https://llmtr.com/docs) |
| Models | 6 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LLMTR_API_KEY,
  baseUrl: "https://llmtr.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("gemma-4");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 2 / 6 models |
| Tools | 1 / 6 models |
| Structured output | 1 / 6 models |
| Reasoning | 1 / 6 models |
| Temperature | 6 / 6 models |
| Open weights | 4 / 6 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemma-4`<br />Gemma 4 | - | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 5 / output: 10 | 2026-04-22 |
| `magibu-11b-v8`<br />Magibu 11B v8 | - | text | text | temperature | context: 8192 / output: 4096 | input: 0 / output: 0 | 2026-06-05 |
| `medgemma-4b`<br />MedGemma 4B | - | image, text | text | temperature, open weights | context: 8192 / output: 4096 | input: 3 / output: 5 | 2026-04-26 |
| `qwen3-6-35b`<br />Qwen3.6 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 16384 / output: 65536 | input: 5 / output: 10 | 2026-04-17 |
| `sincap`<br />Sincap | - | text | text | temperature | context: 128000 / output: 8192 | input: 0 / output: 0 | 2026-05-05 |
| `trendyol-7b`<br />Trendyol 7B | qwen | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2026-06-06 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

