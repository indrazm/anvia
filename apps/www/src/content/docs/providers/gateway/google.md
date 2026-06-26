---
title: "Google"
description: "Use Google through @anvia/gemini."
section: providers
sidebar:
  group: LLM Gateway
  order: 1047
  label: "Google"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/gemini |
| Compatibility | Gemini API provider |
| API URL | Not listed in models.dev |
| Environment | `GEMINI_API_KEY`, `GOOGLE_API_KEY`, `GOOGLE_GENERATIVE_AI_API_KEY` |
| Provider docs | [https://ai.google.dev/gemini-api/docs/models](https://ai.google.dev/gemini-api/docs/models) |
| Models | 22 |

## Anvia Usage

This provider maps to the Anvia Gemini provider. Use the [Gemini provider](/docs/providers/gemini) guide for the complete setup.

```ts
import { GeminiClient } from "@anvia/gemini";

const client = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = client.completionModel("gemini-2.0-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text |
| Attachments | 19 / 22 models |
| Tools | 16 / 22 models |
| Structured output | 16 / 22 models |
| Reasoning | 17 / 22 models |
| Temperature | 21 / 22 models |
| Open weights | 2 / 22 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gemini-2.0-flash`<br />Gemini 2.0 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, temperature | context: 1048576 / output: 8192 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2024-12-11 |
| `gemini-2.0-flash-lite`<br />Gemini 2.0 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, temperature | context: 1048576 / output: 8192 | input: 0.075 / output: 0.3 | 2024-12-11 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-17 |
| `gemini-2.5-flash-image`<br />Nano Banana | gemini-flash | image, text | image, text | reasoning, temperature | context: 32768 / output: 32768 | input: 0.3 / output: 30 / cache_read: 0.075 | 2025-08-26 |
| `gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `gemini-2.5-flash-preview-tts`<br />Gemini 2.5 Flash Preview TTS | gemini-flash | text | audio | temperature | context: 8192 / output: 16384 | input: 0.5 / output: 10 | 2025-05-01 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `gemini-2.5-pro-preview-tts`<br />Gemini 2.5 Pro Preview TTS | gemini-flash | text | audio | temperature | context: 8192 / output: 16384 | input: 1 / output: 20 | 2025-05-01 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / input_audio: 1 | 2025-12-17 |
| `gemini-3-pro-image-preview`<br />Nano Banana Pro | gemini-pro | image, text | image, text | reasoning, temperature | context: 131072 / output: 32768 | input: 2 / output: 120 | 2025-11-20 |
| `gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2025-11-18 |
| `gemini-3.1-flash-image-preview`<br />Nano Banana 2 | gemini-flash | image, pdf, text | image, text | reasoning, temperature | context: 65536 / output: 65536 | input: 0.5 / output: 60 | 2026-02-26 |
| `gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-05-07 |
| `gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-03-03 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `gemini-embedding-001`<br />Gemini Embedding 001 | gemini | text | text | - | context: 2048 / output: 1 | input: 0.15 / output: 0 | 2025-05-20 |
| `gemini-flash-latest`<br />Gemini Flash Latest | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 / input_audio: 1 | 2025-09-25 |
| `gemini-flash-lite-latest`<br />Gemini Flash-Lite Latest | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-09-25 |
| `gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | - | 2026-04-02 |
| `gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | - | 2026-04-02 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

