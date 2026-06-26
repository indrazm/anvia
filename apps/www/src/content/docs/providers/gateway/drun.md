---
title: "D.Run (China)"
description: "Use D.Run (China) through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1031
  label: "D.Run (China)"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://chat.d.run/v1 |
| Environment | `DRUN_API_KEY` |
| Provider docs | [https://www.d.run](https://www.d.run) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DRUN_API_KEY,
  baseUrl: "https://chat.d.run/v1",
  completionApi: "chat",
});

const model = client.completionModel("public/deepseek-r1");
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
| Open weights | 2 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `public/deepseek-r1`<br />DeepSeek R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32000 | input: 0.55 / output: 2.2 | 2025-01-20 |
| `public/deepseek-v3`<br />DeepSeek V3 | deepseek | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.28 / output: 1.1 | 2024-12-26 |
| `public/minimax-m25`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.29 / output: 1.16 | 2025-03-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

