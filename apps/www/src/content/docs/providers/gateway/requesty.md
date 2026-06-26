---
title: "Requesty"
description: "Use Requesty through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1103
  label: "Requesty"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://router.requesty.ai/v1 |
| Environment | `REQUESTY_API_KEY` |
| Provider docs | [https://requesty.ai/solution/llm-routing/models](https://requesty.ai/solution/llm-routing/models) |
| Models | 38 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.REQUESTY_API_KEY,
  baseUrl: "https://router.requesty.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-3-7-sonnet");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text |
| Attachments | 38 / 38 models |
| Tools | 37 / 38 models |
| Structured output | 17 / 38 models |
| Reasoning | 35 / 38 models |
| Temperature | 28 / 38 models |
| Open weights | 0 / 38 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-3-7-sonnet`<br />Claude Sonnet 3.7 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-19 |
| `anthropic/claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 62000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4-1`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4-5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-05 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4-5`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-02-17 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 / cache_write: 0.55 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.31 / cache_write: 2.375 | 2025-06-17 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 1 | 2025-12-17 |
| `google/gemini-3-pro-preview`<br />Gemini 3 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 / cache_write: 4.5 | 2025-11-18 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 Mini | gpt-mini | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `openai/gpt-4o-mini`<br />GPT-4o Mini | gpt-mini | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.08 | 2024-07-18 |
| `openai/gpt-5`<br />GPT-5 | gpt | audio, image, text, video | audio, image, text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-08-07 |
| `openai/gpt-5-chat`<br />GPT-5 Chat (latest) | gpt-codex | image, text | text | schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5 Codex | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `openai/gpt-5-image`<br />GPT-5 Image | gpt | image, pdf, text | image, text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 5 / output: 10 / cache_read: 1.25 | 2025-10-14 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning | context: 128000 / output: 32000 | input: 0.25 / output: 2 / cache_read: 0.03 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | text | text | tools, reasoning | context: 16000 / output: 4000 | input: 0.05 / output: 0.4 / cache_read: 0.01 | 2025-08-07 |
| `openai/gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-chat`<br />GPT-5.1 Chat | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT-5.1-Codex | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />GPT-5.1-Codex-Max | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1-Codex-Mini | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 100000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-chat`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-codex`<br />GPT-5.2-Codex | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-01-14 |
| `openai/gpt-5.2-pro`<br />GPT-5.2 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai/gpt-5.3-codex`<br />GPT-5.3-Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-24 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, pdf, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 / cache_read: 30 | 2026-03-05 |
| `openai/o4-mini`<br />o4 Mini | o-mini | image, text | text | tools, reasoning, temperature | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.28 | 2025-04-16 |
| `xai/grok-4`<br />Grok 4 | grok | image, text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.75 / cache_write: 3 | 2025-09-09 |
| `xai/grok-4-fast`<br />Grok 4 Fast | grok | text | text | tools, reasoning, temperature | context: 2000000 / output: 64000 | input: 0.2 / output: 0.5 / cache_read: 0.05 / cache_write: 0.2 | 2025-09-19 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

