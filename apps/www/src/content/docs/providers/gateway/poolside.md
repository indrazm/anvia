---
title: "Poolside"
description: "Use Poolside through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1098
  label: "Poolside"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://inference.poolside.ai/v1 |
| Environment | `POOLSIDE_API_KEY` |
| Provider docs | [https://platform.poolside.ai](https://platform.poolside.ai) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.POOLSIDE_API_KEY,
  baseUrl: "https://inference.poolside.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("poolside/laguna-m.1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 1 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `poolside/laguna-m.1`<br />Laguna M.1 | - | text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-13 |
| `poolside/laguna-xs.2`<br />Laguna XS.2 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

