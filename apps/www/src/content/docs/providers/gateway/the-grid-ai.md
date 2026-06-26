---
title: "The Grid AI"
description: "Use The Grid AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1118
  label: "The Grid AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.thegrid.ai/v1 |
| Environment | `THEGRIDAI_API_KEY` |
| Provider docs | [https://thegrid.ai/docs](https://thegrid.ai/docs) |
| Models | 9 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.THEGRIDAI_API_KEY,
  baseUrl: "https://api.thegrid.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("agent-max");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 0 / 9 models |
| Tools | 9 / 9 models |
| Structured output | 9 / 9 models |
| Reasoning | 9 / 9 models |
| Temperature | 9 / 9 models |
| Open weights | 0 / 9 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `agent-max`<br />Agent Max | - | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | - | 2026-05-19 |
| `agent-prime`<br />Agent Prime | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 64000 | - | 2026-05-19 |
| `agent-standard`<br />Agent Standard | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16000 | - | 2026-05-19 |
| `code-max`<br />Code Max | - | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | - | 2026-05-19 |
| `code-prime`<br />Code Prime | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 64000 | - | 2026-05-19 |
| `code-standard`<br />Code Standard | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16000 | - | 2026-05-19 |
| `text-max`<br />Text Max | - | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | - | 2026-05-19 |
| `text-prime`<br />Text Prime | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 30000 | - | 2026-05-19 |
| `text-standard`<br />Text Standard | - | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16000 | - | 2026-05-19 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

