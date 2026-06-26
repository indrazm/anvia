---
title: "Sarvam AI"
description: "Use Sarvam AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1106
  label: "Sarvam AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.sarvam.ai/v1 |
| Environment | `SARVAM_API_KEY` |
| Provider docs | [https://docs.sarvam.ai/api-reference-docs/getting-started/models](https://docs.sarvam.ai/api-reference-docs/getting-started/models) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SARVAM_API_KEY,
  baseUrl: "https://api.sarvam.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("sarvam-105b");
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
| Open weights | 2 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sarvam-105b`<br />Sarvam-105B | sarvam | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | - | 2026-03-06 |
| `sarvam-30b`<br />Sarvam-30B | sarvam | text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 65536 | - | 2026-03-06 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

