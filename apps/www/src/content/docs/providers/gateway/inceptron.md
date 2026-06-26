---
title: "Inceptron"
description: "Use Inceptron through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1054
  label: "Inceptron"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.inceptron.io/v1 |
| Environment | `INCEPTRON_API_KEY` |
| Provider docs | [https://docs.inceptron.io](https://docs.inceptron.io) |
| Models | 4 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.INCEPTRON_API_KEY,
  baseUrl: "https://api.inceptron.io/v1",
  completionApi: "chat",
});

const model = client.completionModel("MiniMaxAI/MiniMax-M2.5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 2 / 4 models |
| Tools | 4 / 4 models |
| Structured output | 4 / 4 models |
| Reasoning | 3 / 4 models |
| Temperature | 4 / 4 models |
| Open weights | 4 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax M2.5 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.24 / output: 0.9 / cache_read: 0.03 / cache_write: 0 | 2026-02-12 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.78 / output: 3.5 / cache_read: 0.2 / cache_write: 0 | 2026-04-21 |
| `nvidia/llama-3.3-70b-instruct-fp8`<br />Llama 3.3 70B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.12 / output: 0.38 / cache_read: 0 / cache_write: 0 | 2024-12-06 |
| `zai-org/GLM-5.1-FP8`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

