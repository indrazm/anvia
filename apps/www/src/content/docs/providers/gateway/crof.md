---
title: "CrofAI"
description: "Use CrofAI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1030
  label: "CrofAI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://crof.ai/v1 |
| Environment | `CROF_API_KEY` |
| Provider docs | [https://crof.ai/docs](https://crof.ai/docs) |
| Models | 23 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CROF_API_KEY,
  baseUrl: "https://crof.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-v3.2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 6 / 23 models |
| Tools | 19 / 23 models |
| Structured output | 13 / 23 models |
| Reasoning | 17 / 23 models |
| Temperature | 20 / 23 models |
| Open weights | 18 / 23 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, temperature | context: 163840 / output: 163840 | input: 0.18 / output: 0.35 / cache_read: 0.04 | 2025-07-22 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.12 / output: 0.21 / cache_read: 0.003 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.35 / output: 0.8 / cache_read: 0.003 | 2026-04-24 |
| `deepseek-v4-pro-lightning`<br />DeepSeek V4 Pro Lightning | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.8 / output: 1.6 / cache_read: 0.02 | 2026-04-24 |
| `gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-04-02 |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 0.25 / output: 1.1 / cache_read: 0.05 / cache_write: 0 | 2025-12-22 |
| `glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.04 / output: 0.3 / cache_read: 0.008 / cache_write: 0 | 2026-01-19 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 0.48 / output: 1.9 / cache_read: 0.1 / cache_write: 0 | 2026-02-12 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 0.45 / output: 2.15 / cache_read: 0.08 / cache_write: 0 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.5 / output: 2.2 / cache_read: 0.08 | 2026-06-13 |
| `greg-1-mini`<br />Greg 1 Mini | - | text | text | temperature | context: 229376 / output: 229376 | input: 0.07 / output: 0.15 / cache_read: 0.01 | 2026-01-27 |
| `greg-2-super`<br />Greg 2 Super | - | text | text | temperature | context: 229376 / output: 229376 | input: 1.5 / output: 5 / cache_read: 0.25 | 2026-06-14 |
| `greg-2-ultra`<br />Greg 2 Ultra | - | text | text | temperature | context: 229376 / output: 229376 | input: 3 / output: 10 / cache_read: 0.5 | 2026-06-14 |
| `greg-rp`<br />Greg (Roleplay) | - | text | text | temperature | context: 229376 / output: 229376 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-01-27 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.35 / output: 1.7 / cache_read: 0.07 | 2026-01 |
| `kimi-k2.5-lightning`<br />Kimi K2.5 (Lightning) | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 131072 / output: 32768 | input: 1 / output: 3 / cache_read: 0.2 | 2026-02-06 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.99 / cache_read: 0.05 | 2026-04-21 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.55 / output: 2.25 / cache_read: 0.05 | 2026-06-12 |
| `mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.4 / output: 0.8 / cache_read: 0.003 | 2026-04-22 |
| `minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, temperature, open weights | context: 204800 / output: 131072 | input: 0.11 / output: 0.95 / cache_read: 0.02 / cache_write: 0.375 | 2026-02-12 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.35 / output: 1.75 / cache_read: 0.07 | 2026-02-15 |
| `qwen3.5-9b`<br />Qwen3.5 9B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.04 / output: 0.15 / cache_read: 0.008 | 2026-03-13 |
| `qwen3.6-27b`<br />Qwen3.6 27B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 1.5 / cache_read: 0.04 | 2026-04-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

