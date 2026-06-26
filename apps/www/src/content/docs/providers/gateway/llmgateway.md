---
title: "LLM Gateway"
description: "Use LLM Gateway through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1063
  label: "LLM Gateway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.llmgateway.io/v1 |
| Environment | `LLMGATEWAY_API_KEY` |
| Provider docs | [https://llmgateway.io/docs](https://llmgateway.io/docs) |
| Models | 183 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.LLMGATEWAY_API_KEY,
  baseUrl: "https://api.llmgateway.io/v1",
  completionApi: "chat",
});

const model = client.completionModel("auto");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, text |
| Attachments | 106 / 183 models |
| Tools | 161 / 183 models |
| Structured output | 97 / 183 models |
| Reasoning | 118 / 183 models |
| Temperature | 156 / 183 models |
| Open weights | 80 / 183 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `auto`<br />Auto Route | auto | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2024-01-01 |
| `claude-3-7-sonnet`<br />Claude 3.7 Sonnet | claude | text | text | tools, reasoning, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-24 |
| `claude-3-7-sonnet-20250219`<br />Claude Sonnet 3.7 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-19 |
| `claude-3-opus`<br />Claude 3 Opus | claude | image, text | text | tools, temperature | context: 200000 / output: 4096 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2024-03-04 |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-1-20250805`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-5-20251101`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-01 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `codestral-2508`<br />Codestral | mistral | text | text | schema, temperature, open weights | context: 256000 / output: 16384 | input: 0.3 / output: 0.9 | 2025-07-30 |
| `custom`<br />Custom Model | auto | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2024-01-01 |
| `deepseek-v3.1`<br />DeepSeek V3.1 | deepseek | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.56 / output: 1.68 / cache_read: 0.112 | 2025-08-21 |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | image, text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 16384 | input: 0.26 / output: 0.38 / cache_read: 0.13 | 2025-09-29 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1050000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1050000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `devstral-2512`<br />Devstral 2 | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-09 |
| `devstral-small-2507`<br />Devstral Small | devstral | text | text | tools, temperature, open weights | context: 131072 / output: 128000 | input: 0.1 / output: 0.3 | 2025-07-10 |
| `fugu-ultra`<br />Fugu Ultra | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 1000000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-06-22 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 | 2025-06-17 |
| `gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 | 2025-06-17 |
| `gemini-2.5-flash-lite-preview-09-2025`<br />Gemini 2.5 Flash Lite Preview (09-2025) | gemini | image, text | text | tools, schema, temperature | context: 1048576 / output: 1048576 | input: 0.1 / output: 0.4 / cache_read: 0.01 | 2025-09-25 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / cache_write: 0.08333 | 2026-05-07 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / cache_write: 0.08333 | 2026-05-19 |
| `gemini-pro-latest`<br />Gemini Pro Latest | gemini | image, text | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-27 |
| `gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.07 / output: 0.34 | 2026-04-02 |
| `gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.38 | 2026-04-02 |
| `glm-4-32b-0414-128k`<br />GLM-4 32B (0414-128k) | glm | text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.1 / output: 0.1 | 2025-04-14 |
| `glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131000 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-07-28 |
| `glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131000 / output: 98304 | input: 0.13 / output: 0.85 / cache_read: 0.025 / cache_write: 0 | 2025-07-28 |
| `glm-4.5-airx`<br />GLM-4.5 AirX | glm | text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 1.1 / output: 4.5 / cache_read: 0.22 | 2025-07-28 |
| `glm-4.5-flash`<br />GLM-4.5-Flash | glm-flash | text | text | tools, reasoning, temperature | context: 128000 / output: 98304 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-07-28 |
| `glm-4.5-x`<br />GLM-4.5 X | glm | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 2.2 / output: 8.9 / cache_read: 0.45 | 2025-07-28 |
| `glm-4.5v`<br />GLM-4.5V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.6 / output: 1.8 / cache_read: 0.11 | 2025-08-11 |
| `glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.431 / output: 2.007 / cache_read: 0.11 / cache_write: 0 | 2025-09-30 |
| `glm-4.6v`<br />GLM-4.6V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 0.9 / cache_read: 0.05 | 2025-12-08 |
| `glm-4.6v-flash`<br />GLM-4.6V Flash | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 16000 | input: 0 / output: 0 | 2025-12-08 |
| `glm-4.6v-flashx`<br />GLM-4.6V FlashX | glm | image, text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16000 | input: 0.04 / output: 0.4 / cache_read: 0.004 | 2025-12-08 |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.38 / output: 1.98 / cache_read: 0.19 / cache_write: 0 | 2025-12-22 |
| `glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.06 / output: 0.4 / cache_read: 0.01 / cache_write: 0 | 2026-01-19 |
| `glm-4.7-flash-free`<br />GLM-4.7 Flash (Free) | glm | text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | input: 0 / output: 0 | 2025-12-22 |
| `glm-4.7-flashx`<br />GLM-4.7-FlashX | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.07 / output: 0.4 / cache_read: 0.01 / cache_write: 0 | 2026-01-19 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 203000 / output: 131072 | input: 0.72 / output: 2.3 / cache_read: 0.144 / cache_write: 0 | 2026-02-12 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.931 / output: 2.93 / cache_read: 0.173 / cache_write: 0 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.26 / output: 3.96 / cache_read: 0.234 / cache_write: 0 | 2026-06-13 |
| `gpt-3.5-turbo`<br />GPT-3.5-turbo | gpt | text | text | temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 / cache_read: 0 | 2023-11-06 |
| `gpt-4`<br />GPT-4 | gpt | text | text | tools, temperature | context: 8192 / output: 8192 | input: 30 / output: 60 | 2024-04-09 |
| `gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1000000 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1000000 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, schema, temperature | context: 1000000 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `gpt-4o-mini-search-preview`<br />GPT-4o Mini Search Preview | gpt | image, text | text | temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2024-10-01 |
| `gpt-4o-search-preview`<br />GPT-4o Search Preview | gpt | image, text | text | temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2024-10-01 |
| `gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `gpt-5-chat-latest`<br />GPT-5 Chat (latest) | gpt-codex | image, text | text | schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-chat-latest`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-pro`<br />GPT-5.2 Pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `gpt-5.3-chat-latest`<br />GPT-5.3 Chat (latest) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-03 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 131072 / output: 32766 | input: 0.05 / output: 0.25 | 2025-08-05 |
| `gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 131072 / output: 32766 | input: 0.04 / output: 0.15 | 2025-08-05 |
| `grok-4`<br />Grok 4 | grok | image, text | text | tools, temperature | context: 256000 / output: 256000 | input: 3 / output: 15 / cache_read: 0.75 | 2025-07-09 |
| `grok-4-1-fast-non-reasoning`<br />Grok 4.1 Fast Non-Reasoning | grok | image, text | text | tools, temperature | context: 2000000 / output: 2000000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-19 |
| `grok-4-1-fast-reasoning`<br />Grok 4.1 Fast Reasoning | grok | image, text | text | tools, schema, reasoning, temperature | context: 2000000 / output: 30000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-19 |
| `grok-4-20-beta-0309-non-reasoning`<br />Grok 4.20 (Non-Reasoning) | grok | image, pdf, text | text | tools, schema, temperature | context: 2000000 / output: 30000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-03-09 |
| `grok-4-20-beta-0309-reasoning`<br />Grok 4.20 (Reasoning) | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 2000000 / output: 30000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-03-09 |
| `grok-4-20-non-reasoning`<br />Grok 4.20 (Non-Reasoning) | grok | image, pdf, text | text | tools, schema, temperature | context: 2000000 / output: 30000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-03-09 |
| `grok-4-20-reasoning`<br />Grok 4.20 (Reasoning) | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 2000000 / output: 30000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-03-09 |
| `grok-4-3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.3125 | 2026-04-17 |
| `grok-build-0-1`<br />Grok Build 0.1 | grok-build | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-04-16 |
| `kimi-k2`<br />Kimi K2 | kimi-k2 | text | text | tools, schema, temperature, open weights | context: 256000 / output: 16384 | input: 0.574 / output: 2.294 / cache_read: 0.5 | 2025-07-11 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.574 / output: 2.294 / cache_read: 0.15 | 2025-11-06 |
| `kimi-k2-thinking-turbo`<br />Kimi K2 Thinking Turbo | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.15 / output: 8 / cache_read: 0.15 | 2025-11-06 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.405 / output: 1.98 / cache_read: 0.225 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 2.8 / cache_read: 0.1 | 2026-04-21 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `kimi-k2.7-code-highspeed`<br />Kimi K2.7 Code Highspeed | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 1.9 / output: 8 / cache_read: 0.38 | 2026-06-12 |
| `llama-3-70b-instruct`<br />Llama 3 70B Instruct | llama | text | text | schema, temperature, open weights | context: 8192 / output: 8000 | input: 0.51 / output: 0.74 | 2024-04-18 |
| `llama-3-8b-instruct`<br />Llama 3 8B Instruct | llama | text | text | schema, temperature, open weights | context: 8192 / output: 8192 | input: 0.04 / output: 0.04 | 2025-04-03 |
| `llama-3.1-70b-instruct`<br />Llama 3.1 70B Instruct | llama | text | text | temperature, open weights | context: 128000 / output: 2048 | input: 0.72 / output: 0.72 | 2024-07-23 |
| `llama-3.1-nemotron-ultra-253b`<br />Llama 3.1 Nemotron Ultra 253B | nemotron | text | text | schema, temperature, open weights | context: 128000 / output: 8192 | input: 0.6 / output: 1.8 | 2025-04-07 |
| `llama-3.2-11b-instruct`<br />Llama 3.2 11B Instruct | llama | text | text | schema, temperature, open weights | context: 128000 / output: 8192 | input: 0.07 / output: 0.33 | 2024-09-25 |
| `llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | schema, temperature, open weights | context: 32768 / output: 32000 | input: 0.03 / output: 0.05 | 2024-09-18 |
| `llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 131072 / output: 4096 | input: 0.13 / output: 0.4 | 2024-12-06 |
| `llama-4-maverick-17b-instruct`<br />Llama 4 Maverick 17B Instruct | llama | image, text | text | temperature, open weights | context: 1048576 / output: 2048 | input: 0.27 / output: 0.85 | 2025-04-05 |
| `llama-4-scout-17b-instruct`<br />Llama 4 Scout 17B Instruct | llama | image, text | text | temperature, open weights | context: 131072 / output: 2048 | input: 0.18 / output: 0.59 | 2025-04-05 |
| `mimo-v2-omni`<br />MiMo-V2-Omni | mimo | audio, image, pdf, text, video | text | tools, temperature | context: 256000 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-18 |
| `mimo-v2-pro`<br />MiMo-V2-Pro | mimo | text | text | tools, reasoning, temperature | context: 1000000 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `mimo-v2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-22 |
| `mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.435 / output: 0.87 / cache_read: 0.0036 | 2026-04-22 |
| `minimax-m2`<br />MiniMax-M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 128000 | input: 0.2 / output: 1 / cache_read: 0.03 | 2025-10-27 |
| `minimax-m2.1`<br />MiniMax-M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.27 / output: 1.1 | 2025-12-23 |
| `minimax-m2.1-lightning`<br />MiniMax M2.1 Lightning | minimax | text | text | reasoning, temperature, open weights | context: 196608 / output: 131072 | input: 0.12 / output: 0.48 | 2025-12-23 |
| `minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 228700 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `minimax-m2.5-highspeed`<br />MiniMax-M2.5-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-13 |
| `minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax-m2.7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax-m3`<br />MiniMax-M3 | minimax | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 128000 | input: 0.6 / output: 2.4 / cache_read: 0.12 | 2026-06-01 |
| `minimax-text-01`<br />MiniMax Text 01 | minimax | text | text | reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.2 / output: 1.1 | 2025-01-15 |
| `ministral-14b-2512`<br />Ministral 14B | mistral | image, text | text | schema, temperature, open weights | context: 262144 / output: 8192 | input: 0.2 / output: 0.2 | 2025-12-02 |
| `ministral-3b-2512`<br />Ministral 3B | mistral | image, text | text | schema, temperature, open weights | context: 131072 / output: 8192 | input: 0.1 / output: 0.1 | 2025-12-02 |
| `ministral-8b-2512`<br />Ministral 8B | mistral | image, text | text | schema, temperature, open weights | context: 262144 / output: 8192 | input: 0.15 / output: 0.15 | 2025-12-02 |
| `mistral-large-2512`<br />Mistral Large 3 | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral-large-latest`<br />Mistral Large (latest) | mistral-large | image, text | text | tools, temperature, open weights | context: 128000 / output: 262144 | input: 4 / output: 12 | 2025-12-02 |
| `mistral-small-2506`<br />Mistral Small 3.2 | mistral-small | image, text | text | tools, temperature, open weights | context: 128000 / output: 16384 | input: 0.1 / output: 0.3 | 2025-06-20 |
| `nemotron-3-ultra-550b`<br />Nemotron 3 Ultra 550B A55B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 128000 | input: 0.5 / output: 2.5 / cache_read: 0.15 | 2026-06-04 |
| `o1` | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `o3` | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `o3-mini` | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `o4-mini` | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `pixtral-large-latest`<br />Pixtral Large (latest) | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 4 / output: 12 | 2024-11-04 |
| `qwen-coder-plus`<br />Qwen Coder Plus | qwen | text | text | tools, schema, temperature | context: 131072 / output: 8192 | input: 0.502 / output: 1.004 | 2024-09-18 |
| `qwen-flash`<br />Qwen Flash | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.05 / output: 0.4 / cache_read: 0.01 / cache_write: 0.0625 | 2025-07-28 |
| `qwen-max`<br />Qwen Max | qwen | text | text | tools, temperature | context: 32768 / output: 8192 | input: 1.6 / output: 6.4 | 2025-01-25 |
| `qwen-max-latest`<br />Qwen Max Latest | qwen | image, text | text | tools, schema, temperature | context: 32768 / output: 8192 | input: 1.6 / output: 6.4 | 2025-01-25 |
| `qwen-omni-turbo`<br />Qwen-Omni Turbo | qwen | audio, image, text, video | audio, text | tools, temperature | context: 32768 / output: 2048 | input: 0.2 / output: 0.8 | 2025-03-26 |
| `qwen-plus`<br />Qwen Plus | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 32768 | input: 0.4 / output: 1.2 / reasoning: 4 / cache_read: 0.08 / cache_write: 0.5 | 2025-09-11 |
| `qwen-plus-latest`<br />Qwen Plus Latest | qwen | image, text | text | tools, schema, temperature | context: 1000000 / output: 8192 | input: 0.4 / output: 1.2 / cache_read: 0.08 / cache_write: 0.5 | 2025-01-25 |
| `qwen-turbo`<br />Qwen Turbo | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 16384 | input: 0.05 / output: 0.2 / reasoning: 0.5 | 2025-04-28 |
| `qwen-vl-max`<br />Qwen-VL Max | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.8 / output: 3.2 | 2025-08-13 |
| `qwen-vl-plus`<br />Qwen-VL Plus | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.21 / output: 0.64 | 2025-08-15 |
| `qwen2-5-vl-32b-instruct`<br />Qwen2.5 VL 32B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 8192 | input: 1.4 / output: 4.2 | 2025-03-15 |
| `qwen2-5-vl-72b-instruct`<br />Qwen2.5-VL 72B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 32768 / output: 8192 | input: 0.13 / output: 0.4 | 2024-09 |
| `qwen3-235b-a22b-fp8`<br />Qwen3 235B A22B FP8 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 8192 | input: 0.2 / output: 0.8 | 2025-04-28 |
| `qwen3-235b-a22b-instruct-2507`<br />Qwen3 235B A22B Instruct (2507) | qwen | text | text | tools, schema, temperature, open weights | context: 262000 / output: 8192 | input: 0.09 / output: 0.58 | 2025-07-08 |
| `qwen3-235b-a22b-thinking-2507`<br />Qwen3 235B A22B Thinking (2507) | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 8192 | input: 0.2 / output: 0.6 | 2025-07-08 |
| `qwen3-30b-a3b-instruct-2507`<br />Qwen3 30B A3B Instruct (2507) | qwen | text | text | tools, schema, temperature, open weights | context: 262000 / output: 8192 | input: 0.1 / output: 0.3 | 2025-07-08 |
| `qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 32768 / output: 16384 | input: 0.1 / output: 0.3 / reasoning: 8.4 | 2025-04 |
| `qwen3-4b-fp8`<br />Qwen3 4B FP8 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.03 / output: 0.03 | 2025-04-28 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 262000 / output: 65536 | input: 0.07 / output: 0.27 | 2025-04 |
| `qwen3-coder-480b-a35b-instruct`<br />Qwen3-Coder 480B-A35B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 1.3 | 2025-04 |
| `qwen3-coder-flash`<br />Qwen3 Coder Flash | qwen | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 0.3 / output: 1.5 / cache_read: 0.06 / cache_write: 0.375 | 2025-07-28 |
| `qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, schema, reasoning, temperature | context: 262144 / output: 65536 | input: 0.108 / output: 0.675 / cache_read: 0.06 | 2025-10-15 |
| `qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 6 / output: 60 / cache_read: 1.2 / cache_write: 7.5 | 2025-07-23 |
| `qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 65536 | input: 0.845 / output: 3.38 / cache_read: 0.6 / cache_write: 3.75 | 2025-09-23 |
| `qwen3-max-2026-01-23`<br />Qwen3 Max (2026-01-23) | qwen | image, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 32800 | input: 1.2 / output: 6 / cache_read: 0.24 / cache_write: 1.5 | 2026-01-23 |
| `qwen3-next-80b-a3b-instruct`<br />Qwen3-Next 80B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.5 | 2025-09 |
| `qwen3-next-80b-a3b-thinking`<br />Qwen3-Next 80B-A3B (Thinking) | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.2 | 2025-09 |
| `qwen3-vl-235b-a22b-instruct`<br />Qwen3 VL 235B A22B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 8192 | input: 0.3 / output: 1.5 | 2025-09-15 |
| `qwen3-vl-235b-a22b-thinking`<br />Qwen3 VL 235B A22B Thinking | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.5 / output: 2 | 2025-09-15 |
| `qwen3-vl-30b-a3b-instruct`<br />Qwen3 VL 30B A3B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 8192 | input: 0.2 / output: 0.7 | 2025-10-02 |
| `qwen3-vl-30b-a3b-thinking`<br />Qwen3 VL 30B A3B Thinking | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.2 / output: 1 | 2025-10-02 |
| `qwen3-vl-8b-instruct`<br />Qwen3 VL 8B Instruct | qwen | image, text | text | temperature, open weights | context: 131072 / output: 8192 | input: 0.08 / output: 0.5 | 2025-08-19 |
| `qwen3-vl-flash`<br />Qwen3 VL Flash | qwen | image, text | text | tools, schema, temperature | context: 262144 / output: 32000 | input: 0.05 / output: 0.4 / cache_read: 0.01 | 2025-10-09 |
| `qwen3-vl-plus`<br />Qwen3-VL Plus | qwen | image, text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0.2 / output: 1.6 / reasoning: 4.8 / cache_read: 0.04 / cache_write: 0.25 | 2025-09-23 |
| `qwen3.5-9b`<br />Qwen3.5 9B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.1 / output: 0.15 | 2026-02-23 |
| `qwen3.6-35b-a3b`<br />Qwen3.6 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.248 / output: 1.485 | 2026-04-17 |
| `qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 1.3 / output: 7.8 / cache_read: 0.13 / cache_write: 1.625 | 2026-04-20 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.25 / output: 3.75 / cache_read: 0.125 / cache_write: 3.125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.4 / output: 1.6 / cache_read: 0.08 / cache_write: 0.5 | 2026-06-02 |
| `qwen35-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3.6 | 2026-02-15 |
| `qwq-plus`<br />QwQ Plus | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 0.8 / output: 2.4 | 2025-03-05 |
| `seed-1-6-250615`<br />Seed 1.6 (250615) | seed | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.25 / output: 2 / cache_read: 0.05 | 2025-06-25 |
| `seed-1-6-250915`<br />Seed 1.6 (250915) | seed | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.25 / output: 2 / cache_read: 0.05 | 2025-09-15 |
| `seed-1-6-flash-250715`<br />Seed 1.6 Flash (250715) | seed | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.07 / output: 0.3 / cache_read: 0.015 | 2025-07-26 |
| `seed-1-8-251228`<br />Seed 1.8 (251228) | seed | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.25 / output: 2 / cache_read: 0.05 | 2025-12-18 |
| `sonar`<br />Sonar | sonar | text | text | temperature | context: 130000 / output: 4096 | input: 1 / output: 1 | 2025-09-01 |
| `sonar-pro`<br />Sonar Pro | sonar-pro | image, text | text | temperature | context: 200000 / output: 8192 | input: 3 / output: 15 | 2025-09-01 |
| `sonar-reasoning-pro`<br />Sonar Reasoning Pro | sonar-reasoning | image, text | text | reasoning, temperature | context: 128000 / output: 4096 | input: 2 / output: 8 | 2025-09-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

