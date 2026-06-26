---
title: "Moark"
description: "Use Moark through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1075
  label: "Moark"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://moark.com/v1 |
| Environment | `MOARK_API_KEY` |
| Provider docs | [https://moark.com/docs/openapi/v1#tag/%E6%96%87%E6%9C%AC%E7%94%9F%E6%88%90](https://moark.com/docs/openapi/v1#tag/%E6%96%87%E6%9C%AC%E7%94%9F%E6%88%90) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MOARK_API_KEY,
  baseUrl: "https://moark.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("GLM-4.7");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 2 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `GLM-4.7` | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 3.5 / output: 14 | 2025-12-22 |
| `MiniMax-M2.1` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 2.1 / output: 8.4 | 2025-12-23 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

