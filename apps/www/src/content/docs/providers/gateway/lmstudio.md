---
title: "LMStudio"
description: "Use LMStudio through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1065
  label: "LMStudio"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | http://127.0.0.1:1234/v1 |
| Environment | `LMSTUDIO_API_KEY` |
| Provider docs | [https://lmstudio.ai/models](https://lmstudio.ai/models) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LMSTUDIO_API_KEY,
  baseUrl: "http://127.0.0.1:1234/v1",
  completionApi: "chat",
});

const model = client.completionModel("openai/gpt-oss-20b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 3 models |
| Tools | 3 / 3 models |
| Structured output | 0 / 3 models |
| Reasoning | 1 / 3 models |
| Temperature | 3 / 3 models |
| Open weights | 3 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0 / output: 0 | 2025-08-05 |
| `qwen/qwen3-30b-a3b-2507`<br />Qwen3 30B A3B 2507 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 16384 | input: 0 / output: 0 | 2025-07-30 |
| `qwen/qwen3-coder-30b`<br />Qwen3 Coder 30B | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0 / output: 0 | 2025-07-23 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

