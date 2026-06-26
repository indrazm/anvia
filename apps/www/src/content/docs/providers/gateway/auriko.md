---
title: "Auriko"
description: "Use Auriko through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1015
  label: "Auriko"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.auriko.ai/v1 |
| Environment | `AURIKO_API_KEY` |
| Provider docs | [https://docs.auriko.ai](https://docs.auriko.ai) |
| Models | 15 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.AURIKO_API_KEY,
  baseUrl: "https://api.auriko.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-opus-4-6");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 8 / 15 models |
| Tools | 15 / 15 models |
| Structured output | 9 / 15 models |
| Reasoning | 15 / 15 models |
| Temperature | 13 / 15 models |
| Open weights | 7 / 15 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 | 2025-06-17 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-07 |
| `grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 2.8 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `minimax-m2-7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_write: 0.375 | 2026-03-18 |
| `minimax-m2-7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_write: 0.375 | 2026-03-18 |
| `qwen-3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.1 | 2026-04-02 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

