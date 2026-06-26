---
title: "Morph"
description: "Use Morph through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1079
  label: "Morph"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.morphllm.com/v1 |
| Environment | `MORPH_API_KEY` |
| Provider docs | [https://docs.morphllm.com/api-reference/introduction](https://docs.morphllm.com/api-reference/introduction) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MORPH_API_KEY,
  baseUrl: "https://api.morphllm.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("auto");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 3 models |
| Tools | 0 / 3 models |
| Structured output | 0 / 3 models |
| Reasoning | 0 / 3 models |
| Temperature | 0 / 3 models |
| Open weights | 0 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `auto`<br />Auto | auto | text | text | - | context: 32000 / output: 32000 | input: 0.85 / output: 1.55 | 2024-06-01 |
| `morph-v3-fast`<br />Morph v3 Fast | morph | text | text | - | context: 16000 / output: 16000 | input: 0.8 / output: 1.2 | 2024-08-15 |
| `morph-v3-large`<br />Morph v3 Large | morph | text | text | - | context: 32000 / output: 32000 | input: 0.9 / output: 1.9 | 2024-08-15 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

