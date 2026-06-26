---
title: "LucidQuery"
description: "Use LucidQuery through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1066
  label: "LucidQuery"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.lucidquery.com/v1 |
| Environment | `LUCIDQUERY_API_KEY` |
| Provider docs | [https://lucidquery.com/docs](https://lucidquery.com/docs) |
| Models | 4 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LUCIDQUERY_API_KEY,
  baseUrl: "https://api.lucidquery.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("lucidnova-rf1-100b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 4 / 4 models |
| Tools | 4 / 4 models |
| Structured output | 0 / 4 models |
| Reasoning | 4 / 4 models |
| Temperature | 2 / 4 models |
| Open weights | 0 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `lucidnova-rf1-100b`<br />LucidNova RF1 100B | nova | text | text | tools, reasoning | context: 120000 / output: 8000 | input: 2 / output: 5 | 2025-09-10 |
| `lucidquery-agi-01-frontier`<br />AGI-01 Frontier | agi | image, text | text | tools, reasoning, temperature | context: 300000 / output: 120000 | input: 4.5 / output: 22 | 2026-06-16 |
| `lucidquery-agi-01-swift`<br />AGI-01 Swift | agi | image, text | text | tools, reasoning, temperature | context: 300000 / output: 120000 | input: 2.5 / output: 15 | 2026-06-16 |
| `lucidquery-nexus-coder`<br />LucidQuery Nexus Coder | lucid | text | text | tools, reasoning | context: 250000 / output: 60000 | input: 2 / output: 5 | 2025-09-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

