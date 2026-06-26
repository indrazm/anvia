---
title: "Ambient"
description: "Use Ambient through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1011
  label: "Ambient"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.ambient.xyz/v1 |
| Environment | `AMBIENT_API_KEY` |
| Provider docs | [https://ambient.xyz](https://ambient.xyz) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.AMBIENT_API_KEY,
  baseUrl: "https://api.ambient.xyz/v1",
  completionApi: "chat",
});

const model = client.completionModel("moonshotai/kimi-k2.6");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 2 / 3 models |
| Tools | 3 / 3 models |
| Structured output | 3 / 3 models |
| Reasoning | 3 / 3 models |
| Temperature | 3 / 3 models |
| Open weights | 3 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.2 / cache_write: 0 | 2026-04-21 |
| `moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.75 / output: 3.5 / cache_read: 0.16 / cache_write: 0 | 2026-06-12 |
| `zai-org/GLM-5.1-FP8`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0 / cache_write: 0 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

