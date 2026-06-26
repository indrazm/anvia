---
title: "Claudinio"
description: "Use Claudinio through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1024
  label: "Claudinio"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.claudin.io/v1 |
| Environment | `CLAUDINIO_API_KEY` |
| Provider docs | [https://claudin.io](https://claudin.io) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CLAUDINIO_API_KEY,
  baseUrl: "https://api.claudin.io/v1",
  completionApi: "chat",
});

const model = client.completionModel("claudinio");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 2 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 0 / 2 models |
| Open weights | 0 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claudinio`<br />Claudinio | - | audio, image, text, video | text | tools, reasoning | context: 256000 / output: 64000 | input: 0.5 / output: 2 / cache_read: 0.15 | 2026-06-02 |
| `claudius`<br />Claudius | - | audio, image, text, video | text | tools, reasoning | context: 256000 / output: 64000 | input: 3 / output: 8 / cache_read: 0.9 | 2026-05-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

