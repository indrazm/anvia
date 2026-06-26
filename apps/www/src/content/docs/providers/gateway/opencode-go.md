---
title: "OpenCode Go"
description: "Use OpenCode Go through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1090
  label: "OpenCode Go"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://opencode.ai/zen/go/v1 |
| Environment | `OPENCODE_API_KEY` |
| Provider docs | [https://opencode.ai/docs/zen](https://opencode.ai/docs/zen) |
| Models | 19 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENCODE_API_KEY,
  baseUrl: "https://opencode.ai/zen/go/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-v4-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 10 / 19 models |
| Tools | 19 / 19 models |
| Structured output | 4 / 19 models |
| Reasoning | 19 / 19 models |
| Temperature | 18 / 19 models |
| Open weights | 15 / 19 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.48 / cache_read: 0.0145 | 2026-04-24 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 32768 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-11 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 32768 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-27 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `mimo-v2-omni`<br />MiMo V2 Omni | mimo-v2-omni | audio, image, pdf, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 128000 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-18 |
| `mimo-v2-pro`<br />MiMo V2 Pro | mimo-v2-pro | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 128000 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `mimo-v2.5`<br />MiMo V2.5 | mimo-v2.5 | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 128000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-22 |
| `mimo-v2.5-pro`<br />MiMo V2.5 Pro | mimo-v2.5-pro | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 128000 | input: 1.74 / output: 3.48 / cache_read: 0.0145 | 2026-04-22 |
| `minimax-m2.5`<br />MiniMax M2.5 | minimax-m2.5 | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 65536 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2026-02-12 |
| `minimax-m2.7`<br />MiniMax M2.7 | minimax-m2.7 | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `minimax-m3`<br />MiniMax M3 (3x usage) | minimax-m3 | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 131072 | input: 0.1 / output: 0.4 / cache_read: 0.02 | 2026-05-31 |
| `qwen3.5-plus`<br />Qwen3.5 Plus | qwen3.5 | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.2 / output: 1.2 / cache_read: 0.02 / cache_write: 0.25 | 2026-02-16 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen3.6 | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen3.7-max | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.5 / cache_write: 3.125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen3.7-plus | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.4 / output: 1.6 / cache_read: 0.04 / cache_write: 0.5 | 2026-06-02 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

