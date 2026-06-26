---
title: "Fireworks AI"
description: "Use Fireworks AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1039
  label: "Fireworks AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.fireworks.ai/inference/v1/ |
| Environment | `FIREWORKS_API_KEY` |
| Provider docs | [https://fireworks.ai/docs/](https://fireworks.ai/docs/) |
| Models | 15 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.FIREWORKS_API_KEY,
  baseUrl: "https://api.fireworks.ai/inference/v1/",
  completionApi: "chat",
});

const model = client.completionModel("accounts/fireworks/models/deepseek-v4-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 7 / 15 models |
| Tools | 15 / 15 models |
| Structured output | 2 / 15 models |
| Reasoning | 15 / 15 models |
| Temperature | 15 / 15 models |
| Open weights | 14 / 15 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `accounts/fireworks/models/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-06-16 |
| `accounts/fireworks/models/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.48 / cache_read: 0.145 | 2026-04-24 |
| `accounts/fireworks/models/glm-5p1`<br />GLM 5.1 | glm | text | text | tools, reasoning, temperature, open weights | context: 202800 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-01 |
| `accounts/fireworks/models/glm-5p2`<br />GLM 5.2 | glm | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-16 |
| `accounts/fireworks/models/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-06-16 |
| `accounts/fireworks/models/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.07 / output: 0.3 / cache_read: 0.035 | 2025-08-05 |
| `accounts/fireworks/models/kimi-k2p6`<br />Kimi K2.6 | kimi-thinking | image, text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-17 |
| `accounts/fireworks/models/kimi-k2p7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-16 |
| `accounts/fireworks/models/minimax-m2p7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-04-12 |
| `accounts/fireworks/models/minimax-m3`<br />MiniMax-M3 | minimax | text | text | tools, reasoning, temperature, open weights | context: 512000 / output: 512000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-12 |
| `accounts/fireworks/models/qwen3p7-plus`<br />Qwen 3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.4 / output: 1.6 / cache_read: 0.08 | 2026-06-12 |
| `accounts/fireworks/routers/glm-5p1-fast`<br />GLM 5.1 Fast | glm | text | text | tools, reasoning, temperature, open weights | context: 202800 / output: 131072 | input: 2.8 / output: 8.8 / cache_read: 0.52 | 2026-04-01 |
| `accounts/fireworks/routers/kimi-k2p6-fast`<br />Kimi K2.6 Fast | kimi-thinking | image, text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 2 / output: 8 / cache_read: 0.3 | 2026-06-05 |
| `accounts/fireworks/routers/kimi-k2p6-turbo`<br />Kimi K2.6 Turbo | kimi-thinking | image, text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 2 / output: 8 / cache_read: 0.3 | 2026-04-17 |
| `accounts/fireworks/routers/kimi-k2p7-code-fast`<br />Kimi K2.7 Code Fast | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 1.9 / output: 8 / cache_read: 0.38 | 2026-06-16 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

