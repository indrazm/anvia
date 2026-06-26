---
title: "Lilac"
description: "Use Lilac through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1061
  label: "Lilac"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.getlilac.com/v1 |
| Environment | `LILAC_API_KEY` |
| Provider docs | [https://docs.getlilac.com/inference/models](https://docs.getlilac.com/inference/models) |
| Models | 4 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LILAC_API_KEY,
  baseUrl: "https://api.getlilac.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("google/gemma-4-31b-it");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 3 / 4 models |
| Tools | 4 / 4 models |
| Structured output | 4 / 4 models |
| Reasoning | 4 / 4 models |
| Temperature | 4 / 4 models |
| Open weights | 4 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262100 / output: 262100 | input: 0.11 / output: 0.35 | 2026-04-02 |
| `minimaxai/minimax-m3`<br />MiniMax M3 | minimax-m3 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 1048576 | input: 0.28 / output: 1.1 / cache_read: 0.05 | 2026-06-01 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.7 / output: 3.5 / cache_read: 0.2 | 2026-04-21 |
| `zai-org/glm-5.2`<br />GLM 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 524288 | input: 0.9 / output: 3 / cache_read: 0.27 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

