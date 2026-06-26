---
title: "Moonshot AI"
description: "Use Moonshot AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1077
  label: "Moonshot AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.moonshot.ai/v1 |
| Environment | `MOONSHOT_API_KEY` |
| Provider docs | [https://platform.moonshot.ai/docs/api/chat](https://platform.moonshot.ai/docs/api/chat) |
| Models | 9 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MOONSHOT_API_KEY,
  baseUrl: "https://api.moonshot.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("kimi-k2-0711-preview");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 3 / 9 models |
| Tools | 9 / 9 models |
| Structured output | 4 / 9 models |
| Reasoning | 6 / 9 models |
| Temperature | 6 / 9 models |
| Open weights | 9 / 9 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `kimi-k2-0711-preview`<br />Kimi K2 0711 | kimi-k2 | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-07-14 |
| `kimi-k2-0905-preview`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-09-05 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-11-06 |
| `kimi-k2-thinking-turbo`<br />Kimi K2 Thinking Turbo | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.15 / output: 8 / cache_read: 0.15 | 2025-11-06 |
| `kimi-k2-turbo-preview`<br />Kimi K2 Turbo | kimi-k2 | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 2.4 / output: 10 / cache_read: 0.6 | 2025-09-05 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `kimi-k2.7-code-highspeed`<br />Kimi K2.7 Code HighSpeed | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 1.9 / output: 8 / cache_read: 0.38 | 2026-06-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

