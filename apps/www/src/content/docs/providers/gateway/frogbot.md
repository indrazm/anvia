---
title: "FrogBot"
description: "Use FrogBot through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1042
  label: "FrogBot"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://app.frogbot.ai/api/v1 |
| Environment | `FROGBOT_API_KEY` |
| Provider docs | [https://docs.frogbot.ai](https://docs.frogbot.ai) |
| Models | 26 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.FROGBOT_API_KEY,
  baseUrl: "https://app.frogbot.ai/api/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-haiku-4-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 21 / 26 models |
| Tools | 26 / 26 models |
| Structured output | 10 / 26 models |
| Reasoning | 20 / 26 models |
| Temperature | 21 / 26 models |
| Open weights | 3 / 26 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-05 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-02-17 |
| `deepseek-v4-pro`<br />DeepSeek v4 Pro | deepseek | text | text | tools, temperature | context: 128000 / output: 8192 | input: 1.74 / output: 3.48 / cache_read: 0.14 | 2026-04-24 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 | 2025-07-17 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.31 | 2025-06-05 |
| `gemini-3-1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-18 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `gpt-4o`<br />GPT-4o | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `gpt-5-3-codex`<br />GPT-5.3 Codex | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-15 |
| `gpt-5-4-mini`<br />GPT-5.4 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5-4-nano`<br />GPT-5.4 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2025-08-07 |
| `gpt-5-5`<br />GPT-5.5 | gpt | image, text | text | tools, reasoning | context: 272000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 0.6 | 1970-01-01 |
| `gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.07 / output: 0.2 | 1970-01-01 |
| `grok-4-1-fast-non-reasoning`<br />Grok 4.1 Fast (Non-Reasoning) | grok | image, text | text | tools, temperature | context: 2000000 / output: 128000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-25 |
| `grok-4-1-fast-reasoning`<br />Grok 4.1 Fast (Reasoning) | grok | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 128000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-25 |
| `grok-4-3`<br />Grok 4.3 | grok | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-30 |
| `grok-code-fast-1`<br />Grok 4.1 Fast (Reasoning) | grok | text | text | tools, reasoning, temperature | context: 256000 / output: 128000 | input: 0.2 / output: 1.5 / cache_read: 0.02 | 2025-08-28 |
| `kimi-k2-6`<br />Kimi-K2.6 | - | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.95 / output: 4 / cache_read: 0.16 | 1970-01-01 |
| `kimi-k2.5`<br />Kimi-K2.5 | - | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.6 / output: 3 / cache_read: 0.1 | 1970-01-01 |
| `minimax-m2-5`<br />MiniMax-M2.5 | minimax | text | text | tools, temperature | context: 192000 / output: 8192 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2025-02-22 |
| `minimax-m2-7`<br />MiniMax-M2.7 | minimax | text | text | tools, temperature | context: 192000 / output: 8192 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `qwen-3-6-plus`<br />Qwen 3.6 Plus | qwen | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.1 | 2026-04-03 |
| `zai-glm-5-1`<br />Z.AI GLM-5.1 | glm | text | text | tools, temperature, open weights | context: 198000 / output: 8192 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2025-02-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

