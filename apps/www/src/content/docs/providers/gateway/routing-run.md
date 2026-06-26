---
title: "routing.run"
description: "Use routing.run through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1104
  label: "routing.run"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://ai.routing.sh/v1 |
| Environment | `ROUTING_RUN_API_KEY` |
| Provider docs | [https://docs.routing.run/api-reference/models](https://docs.routing.run/api-reference/models) |
| Models | 26 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ROUTING_RUN_API_KEY,
  baseUrl: "https://ai.routing.sh/v1",
  completionApi: "chat",
});

const model = client.completionModel("route/deepseek-v3.2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 10 / 26 models |
| Tools | 26 / 26 models |
| Structured output | 13 / 26 models |
| Reasoning | 17 / 26 models |
| Temperature | 25 / 26 models |
| Open weights | 25 / 26 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `route/deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 0.4928 / output: 0.7392 | 2025-12-01 |
| `route/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.4928 / output: 0.7392 / cache_read: 0.0028 | 2026-04-24 |
| `route/deepseek-v4-flash-6bit`<br />DeepSeek V4 Flash 6bit | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.4928 / output: 0.7392 / cache_read: 0.0028 | 2026-04-24 |
| `route/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.4928 / output: 0.7392 / cache_read: 0.003625 | 2026-04-24 |
| `route/deepseek-v4-pro-6bit`<br />DeepSeek V4 Pro 6bit | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.4928 / output: 0.7392 / cache_read: 0.003625 | 2026-04-24 |
| `route/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text, video | text | tools, schema, temperature, open weights | context: 131072 / output: 65536 | input: 0.1 / output: 0.3 | 2026-04-02 |
| `route/glm-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65536 | input: 1 / output: 3 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |
| `route/glm-5.1-6bit`<br />GLM 5.1 6bit | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65536 | input: 1 / output: 3 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |
| `route/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, open weights | context: 131072 / output: 32768 | input: 0.462 / output: 2.42 / cache_read: 0.1 | 2026-01 |
| `route/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.462 / output: 2.42 / cache_read: 0.16 | 2026-04-21 |
| `route/kimi-k2.6-6bit`<br />Kimi K2.6 6bit | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.462 / output: 2.42 / cache_read: 0.16 | 2026-04-21 |
| `route/mimo-v2.5`<br />MiMo V2.5 | mimo | image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 262144 | input: 0.45 / output: 1.35 / cache_read: 0.2 | 2026-04-22 |
| `route/mimo-v2.5-pro`<br />MiMo V2.5 Pro | mimo | image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 262144 | input: 0.45 / output: 1.35 / cache_read: 0.2 | 2026-04-22 |
| `route/mimo-v2.5-pro-6bit`<br />MiMo V2.5 Pro 6bit | mimo | image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 262144 | input: 0.45 / output: 1.35 / cache_read: 0.2 | 2026-04-22 |
| `route/minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, temperature, open weights | context: 100000 / output: 131072 | input: 0.193 / output: 1.238 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `route/minimax-m2.5-highspeed`<br />MiniMax M2.5 Highspeed | minimax | text | text | tools, temperature, open weights | context: 100000 / output: 131072 | input: 0.193 / output: 1.238 / cache_read: 0.06 / cache_write: 0.375 | 2026-02-13 |
| `route/minimax-m2.7`<br />MiniMax M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 100000 / output: 131072 | input: 0.33 / output: 1.32 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `route/minimax-m2.7-highspeed`<br />MiniMax M2.7 Highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 100000 / output: 131072 | input: 0.33 / output: 1.32 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `route/mistral-large-3`<br />Mistral Large 3 | mistral-large | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `route/mistral-medium-2505`<br />Mistral Medium 2505 | mistral-medium | image, text, video | text | tools, temperature | context: 128000 / output: 32768 | input: 0.4 / output: 2 | 2025-05-07 |
| `route/mistral-small-2503`<br />Mistral Small 2503 | mistral-small | image, text, video | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.15 / output: 0.6 | 2026-03-16 |
| `route/qwen3.6-27b`<br />Qwen3.6 27B | qwen | text | text | tools, schema, temperature, open weights | context: 202000 / output: 32768 | input: 1.1 / output: 3.3 | 2026-04-22 |
| `route/qwen3.6-27b-202k`<br />Qwen3.6 27B 202K | qwen | text | text | tools, schema, temperature, open weights | context: 202000 / output: 32768 | input: 1.1 / output: 3.3 | 2026-04-22 |
| `route/step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / input: 256000 / output: 65536 | input: 0.096 / output: 0.288 / cache_read: 0.019 | 2026-02-13 |
| `route/step-3.5-flash-2603`<br />Step 3.5 Flash 2603 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / input: 256000 / output: 65536 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-04-02 |
| `route/stepfun-3.5-flash`<br />StepFun 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / input: 256000 / output: 65536 | input: 0.096 / output: 0.288 / cache_read: 0.019 | 2026-02-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

