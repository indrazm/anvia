---
title: "Bailing"
description: "Use Bailing through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1018
  label: "Bailing"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.tbox.cn/api/llm/v1/chat/completions |
| Environment | `BAILING_API_TOKEN` |
| Provider docs | [https://alipaytbox.yuque.com/sxs0ba/ling/intro](https://alipaytbox.yuque.com/sxs0ba/ling/intro) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.BAILING_API_TOKEN,
  baseUrl: "https://api.tbox.cn/api/llm/v1/chat/completions",
  completionApi: "chat",
});

const model = client.completionModel("Ling-1T");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 1 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 1 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 2 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Ling-1T` | ling | text | text | tools, temperature, open weights | context: 128000 / output: 32000 | input: 0.57 / output: 2.29 | 2025-10 |
| `Ring-1T` | ring | text | text | reasoning, temperature, open weights | context: 128000 / output: 32000 | input: 0.57 / output: 2.29 | 2025-10 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

