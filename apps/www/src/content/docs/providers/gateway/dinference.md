---
title: "DInference"
description: "Use DInference through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1036
  label: "DInference"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.dinference.com/v1 |
| Environment | `DINFERENCE_API_KEY` |
| Provider docs | [https://dinference.com](https://dinference.com) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DINFERENCE_API_KEY,
  baseUrl: "https://api.dinference.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("glm-4.7");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 5 models |
| Tools | 5 / 5 models |
| Structured output | 1 / 5 models |
| Reasoning | 4 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.45 / output: 1.65 | 2025-12-22 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.75 / output: 2.4 | 2026-02-12 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 1.25 / output: 3.89 | 2026-04-07 |
| `gpt-oss-120b`<br />GPT OSS 120B | - | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.0675 / output: 0.27 | 2025-08 |
| `minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 32000 | input: 0.22 / output: 0.88 | 2026-02-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

