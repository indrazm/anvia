---
title: "NEAR AI Cloud"
description: "Use NEAR AI Cloud through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1081
  label: "NEAR AI Cloud"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://cloud-api.near.ai/v1 |
| Environment | `NEARAI_API_KEY` |
| Provider docs | [https://docs.near.ai/](https://docs.near.ai/) |
| Models | 37 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NEARAI_API_KEY,
  baseUrl: "https://cloud-api.near.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-haiku-4-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | image, text |
| Attachments | 29 / 37 models |
| Tools | 33 / 37 models |
| Structured output | 28 / 37 models |
| Reasoning | 28 / 37 models |
| Temperature | 21 / 37 models |
| Open weights | 11 / 37 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic/claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15.5 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `black-forest-labs/FLUX.2-klein-4B`<br />FLUX.2 Klein 4B | flux | image, text | image | temperature, open weights | context: 128000 / output: 128000 | input: 1 / output: 1 | 2026-01-14 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-17 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `google/gemini-3-pro`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 15 / cache_read: 0 | 2025-11-18 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-05-07 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `google/gemma-4-31B-it`<br />Gemma 4 31B IT | gemma | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.4 / cache_read: 0.026 | 2026-04-02 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.8 / output: 15.5 / cache_read: 0.18 | 2025-12-11 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-oss-120b`<br />GPT-OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131000 / output: 32768 | input: 0.15 / output: 0.55 | 2025-08-05 |
| `openai/o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai/o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `openai/whisper-large-v3`<br />Whisper Large v3 | whisper | audio | text | open weights | context: 448 / output: 448 | input: 0.01 / output: 0 | 2023-11-06 |
| `Qwen/Qwen3-30B-A3B-Instruct-2507`<br />Qwen3 30B-A3B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 32768 | input: 0.15 / output: 0.55 | 2025-07-29 |
| `Qwen/Qwen3-Embedding-0.6B`<br />Qwen3 Embedding 0.6B | text-embedding | text | text | open weights | context: 40960 / output: 1024 | input: 0.01 / output: 0 | 2025-06-03 |
| `Qwen/Qwen3-Reranker-0.6B`<br />Qwen3 Reranker 0.6B | qwen | text | text | open weights | context: 40960 / output: 1024 | input: 0.01 / output: 0.01 | 2025-06-03 |
| `Qwen/Qwen3-VL-30B-A3B-Instruct`<br />Qwen3-VL 30B-A3B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 256000 / output: 32768 | input: 0.15 / output: 0.55 | 2025-09-23 |
| `Qwen/Qwen3.5-122B-A10B`<br />Qwen3.5 122B-A10B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.4 / output: 3.2 | 2026-02-23 |
| `Qwen/Qwen3.6-35B-A3B-FP8`<br />Qwen 3.6 35B A3B FP8 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.17 / output: 1.1 / cache_read: 0.056 | 2026-04-17 |
| `zai-org/GLM-5.1-FP8`<br />GLM-5.1 FP8 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.85 / output: 3.3 | 2026-03-27 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

