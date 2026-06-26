---
title: "Mixlayer"
description: "Use Mixlayer through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1074
  label: "Mixlayer"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://models.mixlayer.ai/v1 |
| Environment | `MIXLAYER_API_KEY` |
| Provider docs | [https://docs.mixlayer.com](https://docs.mixlayer.com) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MIXLAYER_API_KEY,
  baseUrl: "https://models.mixlayer.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("qwen/qwen3.5-122b-a10b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 5 models |
| Tools | 5 / 5 models |
| Structured output | 0 / 5 models |
| Reasoning | 5 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `qwen/qwen3.5-122b-a10b`<br />Qwen3.5 122B A10B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 3.2 | 2026-03-18 |
| `qwen/qwen3.5-27b`<br />Qwen3.5 27B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.3 / output: 2.4 | 2026-03-18 |
| `qwen/qwen3.5-35b-a3b`<br />Qwen3.5 35B A3B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.25 / output: 1.3 | 2026-03-18 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3.6 | 2026-03-18 |
| `qwen/qwen3.5-9b`<br />Qwen3.5 9B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.4 | 2026-03-18 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

