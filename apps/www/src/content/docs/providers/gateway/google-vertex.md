---
title: "Vertex"
description: "Use Vertex through @anvia/gemini."
section: providers
sidebar:
  group: LLM Gateway
  order: 1126
  label: "Vertex"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/gemini |
| Compatibility | Vertex AI provider |
| API URL | Not listed in models.dev |
| Environment | `GOOGLE_APPLICATION_CREDENTIALS`, `GOOGLE_VERTEX_LOCATION`, `GOOGLE_VERTEX_PROJECT` |
| Provider docs | [https://cloud.google.com/vertex-ai/generative-ai/docs/models](https://cloud.google.com/vertex-ai/generative-ai/docs/models) |
| Models | 35 |

## Anvia Usage

This provider maps to the Vertex AI mode in the Anvia Gemini provider. Use the [Gemini provider](/docs/providers/gemini) guide for the complete setup.

```ts
import { GeminiClient } from "@anvia/gemini";

const client = new GeminiClient({
  vertexai: true,
  project: process.env.GOOGLE_VERTEX_PROJECT,
  location: process.env.GOOGLE_VERTEX_LOCATION ?? "us-central1",
});

const model = client.completionModel("claude-3-5-haiku@20241022");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, text |
| Attachments | 23 / 35 models |
| Tools | 32 / 35 models |
| Structured output | 13 / 35 models |
| Reasoning | 29 / 35 models |
| Temperature | 30 / 35 models |
| Open weights | 10 / 35 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-3-5-haiku@20241022`<br />Claude Haiku 3.5 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `claude-haiku-4-5@20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-1@20250805`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-5@20251101`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-01 |
| `claude-opus-4-6@default`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7@default`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-8@default`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-opus-4@20250514`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `claude-sonnet-4-5@20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-6@default`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `claude-sonnet-4@20250514`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `deepseek-ai/deepseek-v3.1-maas`<br />DeepSeek V3.1 | deepseek | pdf, text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.6 / output: 1.7 | 2025-08-28 |
| `deepseek-ai/deepseek-v3.2-maas`<br />DeepSeek V3.2 | deepseek | pdf, text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.56 / output: 1.68 / cache_read: 0.056 | 2026-04-04 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 / cache_write: 0.383 | 2025-06-17 |
| `gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `gemini-2.5-flash-tts`<br />Gemini 2.5 Flash TTS | gemini-flash | text | audio | - | context: 32768 / output: 16384 | input: 0.5 / output: 10 | 2025-12-10 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `gemini-2.5-pro-tts`<br />Gemini 2.5 Pro TTS | gemini-pro | text | audio | - | context: 32768 / output: 16384 | input: 1 / output: 20 | 2025-12-10 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / input_audio: 1 | 2025-12-17 |
| `gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-05-07 |
| `gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-03-03 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `gemini-embedding-001`<br />Gemini Embedding 001 | gemini | text | text | - | context: 2048 / output: 1 | input: 0.15 / output: 0 | 2025-05-20 |
| `gemini-flash-latest`<br />Gemini Flash Latest | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 / cache_write: 0.383 | 2025-09-25 |
| `gemini-flash-lite-latest`<br />Gemini Flash-Lite Latest | gemini-flash-lite | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-09-25 |
| `meta/llama-3.3-70b-instruct-maas`<br />Llama 3.3 70B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 128000 / output: 8192 | input: 0.72 / output: 0.72 | 2025-04-29 |
| `meta/llama-4-maverick-17b-128e-instruct-maas`<br />Llama 4 Maverick 17B 128E Instruct | llama | image, text | text | tools, schema, temperature, open weights | context: 524288 / output: 8192 | input: 0.35 / output: 1.15 | 2025-04-29 |
| `moonshotai/kimi-k2-thinking-maas`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2025-11-13 |
| `openai/gpt-oss-120b-maas`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.09 / output: 0.36 | 2025-08-05 |
| `openai/gpt-oss-20b-maas`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.07 / output: 0.25 | 2025-08-05 |
| `qwen/qwen3-235b-a22b-instruct-2507-maas`<br />Qwen3 235B A22B Instruct | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.22 / output: 0.88 | 2025-08-13 |
| `zai-org/glm-4.7-maas`<br />GLM-4.7 | glm | pdf, text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.6 / output: 2.2 | 2026-01-06 |
| `zai-org/glm-5-maas`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.1 | 2026-02-11 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

