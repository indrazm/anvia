---
title: "GitHub Copilot"
description: "Use GitHub Copilot through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1043
  label: "GitHub Copilot"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.githubcopilot.com |
| Environment | `GITHUB_TOKEN` |
| Provider docs | [https://docs.github.com/en/copilot](https://docs.github.com/en/copilot) |
| Models | 22 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.GITHUB_TOKEN,
  baseUrl: "https://api.githubcopilot.com",
  completionApi: "chat",
});

const model = client.completionModel("claude-fable-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 22 / 22 models |
| Tools | 22 / 22 models |
| Structured output | 13 / 22 models |
| Reasoning | 21 / 22 models |
| Temperature | 11 / 22 models |
| Open weights | 0 / 22 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `claude-haiku-4.5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 136000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4.5`<br />Claude Opus 4.5 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 168000 / output: 32000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 168000 / output: 32000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 200000 / input: 168000 / output: 32000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 200000 / input: 168000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4`<br />Claude Sonnet 4 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 216000 / input: 128000 / output: 16000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `claude-sonnet-4.5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 168000 / output: 32000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 168000 / output: 32000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 128000 / input: 128000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 128000 / input: 128000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.05 / input_audio: 1 | 2025-12-17 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 200000 / input: 136000 / output: 64000 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 200000 / input: 128000 / output: 64000 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / input: 128000 / output: 16384 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 264000 / input: 128000 / output: 64000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

