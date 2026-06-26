---
title: "Xpersona"
description: "Use Xpersona through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1137
  label: "Xpersona"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://www.xpersona.co/v1 |
| Environment | `XPERSONA_API_KEY` |
| Provider docs | [https://www.xpersona.co/docs](https://www.xpersona.co/docs) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.XPERSONA_API_KEY,
  baseUrl: "https://www.xpersona.co/v1",
  completionApi: "chat",
});

const model = client.completionModel("xpersona-frieren-coder");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 2 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 0 / 2 models |
| Open weights | 0 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `xpersona-frieren-coder`<br />Xpersona Frieren 1 | - | image, text | text | tools, schema, reasoning | context: 1000000 / output: 384000 | input: 1.5 / output: 6 / reasoning: 6 / cache_read: 0.15 | 2026-05-25 |
| `xpersona-gpt-5.5`<br />GPT-5.5 | gpt | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 3 / output: 18 / reasoning: 18 / cache_read: 0.3 | 2026-05-29 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

