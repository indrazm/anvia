---
title: "DeepSeek"
description: "Use DeepSeek through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1034
  label: "DeepSeek"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.deepseek.com |
| Environment | `DEEPSEEK_API_KEY` |
| Provider docs | [https://api-docs.deepseek.com/quick_start/pricing](https://api-docs.deepseek.com/quick_start/pricing) |
| Models | 4 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseUrl: "https://api.deepseek.com",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-chat");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 2 / 4 models |
| Tools | 4 / 4 models |
| Structured output | 2 / 4 models |
| Reasoning | 3 / 4 models |
| Temperature | 4 / 4 models |
| Open weights | 4 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-chat`<br />DeepSeek Chat | deepseek | text | text | tools, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-02-28 |
| `deepseek-reasoner`<br />DeepSeek Reasoner | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-02-28 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

