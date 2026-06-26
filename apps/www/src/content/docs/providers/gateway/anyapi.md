---
title: "AnyAPI"
description: "Use AnyAPI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1013
  label: "AnyAPI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.anyapi.ai/v1 |
| Environment | `ANYAPI_API_KEY` |
| Provider docs | [https://docs.anyapi.ai](https://docs.anyapi.ai) |
| Models | 30 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ANYAPI_API_KEY,
  baseUrl: "https://api.anyapi.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-haiku-4-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 25 / 30 models |
| Tools | 28 / 30 models |
| Structured output | 18 / 30 models |
| Reasoning | 23 / 30 models |
| Temperature | 21 / 30 models |
| Open weights | 7 / 30 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | - | 2025-10-15 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | - | 2026-03-13 |
| `anthropic/claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | - | 2026-04-16 |
| `anthropic/claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | - | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | - | 2026-03-13 |
| `cohere/command-r-plus-08-2024`<br />Command R+ | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | - | 2024-08-30 |
| `deepseek/deepseek-chat`<br />DeepSeek Chat | deepseek | text | text | tools, temperature, open weights | context: 1000000 / output: 384000 | - | 2026-02-28 |
| `deepseek/deepseek-r1`<br />DeepSeek Reasoner | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 384000 | - | 2026-02-28 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | - | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | - | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-06-17 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-06-17 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-12-17 |
| `google/gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-11-18 |
| `mistralai/devstral-2512`<br />Devstral 2 | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | - | 2025-12-09 |
| `mistralai/mistral-large-2512`<br />Mistral Large 3 | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | - | 2025-12-02 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | - | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | - | 2025-04-14 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-08-07 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-08-07 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-12-11 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | - | 2026-03-05 |
| `openai/o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | - | 2025-04-16 |
| `openai/o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | - | 2025-01-29 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | - | 2025-04-16 |
| `perplexity/sonar-pro`<br />Sonar Pro | sonar-pro | image, text | text | temperature | context: 200000 / output: 8192 | - | 2025-09-01 |
| `perplexity/sonar-reasoning-pro`<br />Sonar Reasoning Pro | sonar-reasoning | image, text | text | reasoning, temperature | context: 128000 / output: 4096 | - | 2025-09-01 |
| `xai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | - | 2026-04-17 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

