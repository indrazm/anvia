---
title: "Nova"
description: "Use Nova through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1085
  label: "Nova"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.nova.amazon.com/v1 |
| Environment | `NOVA_API_KEY` |
| Provider docs | [https://nova.amazon.com/dev/documentation](https://nova.amazon.com/dev/documentation) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NOVA_API_KEY,
  baseUrl: "https://api.nova.amazon.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("nova-2-lite-v1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text, video |
| Output modalities | text |
| Attachments | 2 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 0 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `nova-2-lite-v1`<br />Nova 2 Lite | nova-lite | image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / reasoning: 0 | 2025-12-01 |
| `nova-2-pro-v1`<br />Nova 2 Pro | nova-pro | image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / reasoning: 0 | 2026-01-03 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

