---
title: "QiHang"
description: "Use QiHang through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1100
  label: "QiHang"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.qhaigc.net/v1 |
| Environment | `QIHANG_API_KEY` |
| Provider docs | [https://www.qhaigc.net/docs](https://www.qhaigc.net/docs) |
| Models | 9 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.QIHANG_API_KEY,
  baseUrl: "https://api.qhaigc.net/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-haiku-4-5-20251001");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 9 / 9 models |
| Tools | 9 / 9 models |
| Structured output | 4 / 9 models |
| Reasoning | 9 / 9 models |
| Temperature | 8 / 9 models |
| Open weights | 0 / 9 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.14 / output: 0.71 | 2025-10-01 |
| `claude-opus-4-5-20251101`<br />Claude Opus 4.5 | claude-opus | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 0.71 / output: 3.57 | 2025-11-01 |
| `claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.43 / output: 2.14 | 2025-09-29 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.09 / output: 0.71 | 2025-12-17 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.07 / output: 0.43 | 2025-12-17 |
| `gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65000 | input: 0.57 / output: 3.43 | 2025-11-19 |
| `gpt-5-mini`<br />GPT-5-Mini | gpt-mini | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.04 / output: 0.29 | 2025-09-15 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.14 / output: 1.14 | 2025-12-11 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

