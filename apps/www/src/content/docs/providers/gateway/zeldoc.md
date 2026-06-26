---
title: "Zeldoc"
description: "Use Zeldoc through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1140
  label: "Zeldoc"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.zeldoc.ai/v1 |
| Environment | `ZELDOC_API_KEY` |
| Provider docs | [https://docs.zeldoc.ai](https://docs.zeldoc.ai) |
| Models | 1 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ZELDOC_API_KEY,
  baseUrl: "https://api.zeldoc.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("z-code");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 1 / 1 models |
| Tools | 1 / 1 models |
| Structured output | 1 / 1 models |
| Reasoning | 1 / 1 models |
| Temperature | 1 / 1 models |
| Open weights | 0 / 1 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `z-code`<br />Z-Code | - | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 262144 | input: 0 / output: 0 | 2026-04-15 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

