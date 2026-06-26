---
title: "Inception"
description: "Use Inception through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1053
  label: "Inception"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.inceptionlabs.ai/v1/ |
| Environment | `INCEPTION_API_KEY` |
| Provider docs | [https://platform.inceptionlabs.ai/docs](https://platform.inceptionlabs.ai/docs) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.INCEPTION_API_KEY,
  baseUrl: "https://api.inceptionlabs.ai/v1/",
  completionApi: "chat",
});

const model = client.completionModel("mercury-2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 1 / 2 models |
| Structured output | 1 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 0 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `mercury-2`<br />Mercury 2 | mercury | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 50000 | input: 0.25 / output: 0.75 / cache_read: 0.025 | 2026-02-24 |
| `mercury-edit-2`<br />Mercury Edit 2 | - | text | text | reasoning, temperature | context: 128000 / output: 8192 | input: 0.25 / output: 0.75 / cache_read: 0.025 | 2026-03-30 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

