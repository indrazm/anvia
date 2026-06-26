---
title: "Upstage"
description: "Use Upstage through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1122
  label: "Upstage"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.upstage.ai/v1/solar |
| Environment | `UPSTAGE_API_KEY` |
| Provider docs | [https://developers.upstage.ai/docs/apis/chat](https://developers.upstage.ai/docs/apis/chat) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.UPSTAGE_API_KEY,
  baseUrl: "https://api.upstage.ai/v1/solar",
  completionApi: "chat",
});

const model = client.completionModel("solar-mini");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 3 models |
| Tools | 3 / 3 models |
| Structured output | 0 / 3 models |
| Reasoning | 2 / 3 models |
| Temperature | 3 / 3 models |
| Open weights | 0 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `solar-mini` | solar-mini | text | text | tools, temperature | context: 32768 / output: 4096 | input: 0.15 / output: 0.15 | 2025-04-22 |
| `solar-pro2` | solar-pro | text | text | tools, reasoning, temperature | context: 65536 / output: 8192 | input: 0.25 / output: 0.25 | 2025-05-20 |
| `solar-pro3` | solar-pro | text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 0.25 / output: 0.25 | 2026-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

