---
title: "abliteration.ai"
description: "Use abliteration.ai through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1002
  label: "abliteration.ai"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.abliteration.ai/v1 |
| Environment | `ABLIT_KEY` |
| Provider docs | [https://docs.abliteration.ai/models](https://docs.abliteration.ai/models) |
| Models | 1 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ABLIT_KEY,
  baseUrl: "https://api.abliteration.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("abliterated-model");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 1 / 1 models |
| Tools | 1 / 1 models |
| Structured output | 0 / 1 models |
| Reasoning | 0 / 1 models |
| Temperature | 1 / 1 models |
| Open weights | 1 / 1 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `abliterated-model`<br />Abliterated Model | - | image, text | text | tools, temperature, open weights | context: 150000 / input: 150000 / output: 8192 | input: 3 / output: 3 | 2026-01-06 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

