---
title: "Poe"
description: "Use Poe through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1097
  label: "Poe"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.poe.com/v1 |
| Environment | `POE_API_KEY` |
| Provider docs | [https://creator.poe.com/docs/external-applications/openai-compatible-api](https://creator.poe.com/docs/external-applications/openai-compatible-api) |
| Models | 137 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.POE_API_KEY,
  baseUrl: "https://api.poe.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-haiku-3");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text, video |
| Attachments | 137 / 137 models |
| Tools | 134 / 137 models |
| Structured output | 2 / 137 models |
| Reasoning | 71 / 137 models |
| Temperature | 5 / 137 models |
| Open weights | 4 / 137 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-3`<br />Claude-Haiku-3 | claude-haiku | image, pdf, text | text | tools | context: 189096 / output: 8192 | input: 0.21 / output: 1.1 / cache_read: 0.021 / cache_write: 0.26 | 2024-03-09 |
| `anthropic/claude-haiku-3.5`<br />Claude-Haiku-3.5 | claude-haiku | image, pdf, text | text | tools | context: 189096 / output: 8192 | input: 0.68 / output: 3.4 / cache_read: 0.068 / cache_write: 0.85 | 2024-10-01 |
| `anthropic/claude-haiku-4.5`<br />Claude-Haiku-4.5 | claude-haiku | image, pdf, text | text | tools, reasoning | context: 192000 / output: 64000 | input: 0.85 / output: 4.3 / cache_read: 0.085 / cache_write: 1.1 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude-Opus-4 | claude-opus | image, pdf, text | text | tools, reasoning | context: 192512 / output: 28672 | input: 13 / output: 64 / cache_read: 1.3 / cache_write: 16 | 2025-05-21 |
| `anthropic/claude-opus-4.1`<br />Claude-Opus-4.1 | claude-opus | image, pdf, text | text | tools, reasoning | context: 196608 / output: 32000 | input: 13 / output: 64 / cache_read: 1.3 / cache_write: 16 | 2025-08-05 |
| `anthropic/claude-opus-4.5`<br />Claude-Opus-4.5 | claude-opus | image, pdf, text | text | tools, reasoning | context: 196608 / output: 64000 | input: 4.3 / output: 21 / cache_read: 0.43 / cache_write: 5.3 | 2025-11-21 |
| `anthropic/claude-opus-4.6`<br />Claude-Opus-4.6 | - | image, pdf, text | text | tools, reasoning | context: 983040 / output: 128000 | input: 4.3 / output: 21 / cache_read: 0.43 / cache_write: 5.3 | 2026-02-04 |
| `anthropic/claude-opus-4.7`<br />Claude-Opus-4.7 | - | image, pdf, text | text | tools, reasoning | context: 1048576 / output: 128000 | input: 4.3 / output: 21 / cache_read: 0.43 / cache_write: 5.4 | 2026-04-15 |
| `anthropic/claude-opus-4.8`<br />Claude-Opus-4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1048576 / output: 128000 | input: 4.2929 / output: 21.4646 | 2026-05-28 |
| `anthropic/claude-sonnet-3.5`<br />Claude-Sonnet-3.5 | claude-sonnet | image, pdf, text | text | tools | context: 189096 / output: 8192 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2024-06-05 |
| `anthropic/claude-sonnet-3.5-june`<br />Claude-Sonnet-3.5-June | claude-sonnet | image, pdf, text | text | tools | context: 189096 / output: 8192 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2024-11-18 |
| `anthropic/claude-sonnet-3.7`<br />Claude-Sonnet-3.7 | claude-sonnet | image, pdf, text | text | tools, reasoning | context: 196608 / output: 128000 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2025-02-19 |
| `anthropic/claude-sonnet-4`<br />Claude-Sonnet-4 | claude-sonnet | image, pdf, text | text | tools, reasoning | context: 983040 / output: 64000 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2025-05-21 |
| `anthropic/claude-sonnet-4.5`<br />Claude-Sonnet-4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning | context: 983040 / output: 32768 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2025-09-26 |
| `anthropic/claude-sonnet-4.6`<br />Claude-Sonnet-4.6 | - | image, pdf, text | text | tools, reasoning | context: 983040 / output: 128000 | input: 2.6 / output: 13 / cache_read: 0.26 / cache_write: 3.2 | 2026-02-05 |
| `cerebras/gpt-oss-120b-cs`<br />GPT-OSS-120B-CS | - | text | text | tools, reasoning | context: 128000 / output: 0 | input: 0.35 / output: 0.75 | 2025-08-06 |
| `cerebras/llama-3.1-8b-cs`<br />Llama-3.1-8B-CS | - | text | text | tools | context: 128000 / output: 0 | input: 0.1 / output: 0.1 | 2025-05-13 |
| `cerebras/llama-3.3-70b-cs`<br />llama-3.3-70b-cs | - | text | text | - | context: 0 / output: 0 | - | 2025-05-13 |
| `cerebras/qwen3-235b-2507-cs`<br />qwen3-235b-2507-cs | - | text | text | tools, reasoning | context: 0 / output: 0 | - | 2025-08-06 |
| `cerebras/qwen3-32b-cs`<br />qwen3-32b-cs | - | text | text | tools, reasoning | context: 0 / output: 0 | - | 2025-05-15 |
| `elevenlabs/elevenlabs-music`<br />ElevenLabs-Music | elevenlabs | text | audio | tools | context: 2000 / output: 0 | - | 2025-08-29 |
| `elevenlabs/elevenlabs-v2.5-turbo`<br />ElevenLabs-v2.5-Turbo | elevenlabs | text | audio | tools | context: 128000 / output: 0 | - | 2024-10-28 |
| `elevenlabs/elevenlabs-v3`<br />ElevenLabs-v3 | elevenlabs | text | audio | tools | context: 128000 / output: 0 | - | 2025-06-05 |
| `empiriolabs/deepseek-v4-flash-el`<br />DeepSeek-V4-Flash-EL | - | text | text | tools, reasoning, open weights | context: 1000000 / input: 1000000 / output: 384000 | input: 0.14 / output: 0.28 | 2026-05-02 |
| `empiriolabs/deepseek-v4-pro-el`<br />DeepSeek-V4-Pro-EL | - | text | text | tools, reasoning, open weights | context: 1000000 / input: 1000000 / output: 384000 | input: 1.67 / output: 3.33 | 2026-05-02 |
| `fireworks-ai/kimi-k2.5-fw`<br />Kimi-K2.5-FW | - | image, text | text | tools | context: 262144 / input: 245760 / output: 16384 | input: 0 / output: 0 | 2026-01-27 |
| `google/gemini-2.0-flash`<br />Gemini-2.0-Flash | gemini-flash | audio, image, text, video | text | tools | context: 990000 / output: 8192 | input: 0.1 / output: 0.42 | 2024-12-11 |
| `google/gemini-2.0-flash-lite`<br />Gemini-2.0-Flash-Lite | gemini-flash-lite | audio, image, text, video | text | tools | context: 990000 / output: 8192 | input: 0.052 / output: 0.21 | 2025-02-05 |
| `google/gemini-2.5-flash`<br />Gemini-2.5-Flash | gemini-flash | audio, image, text, video | text | tools, reasoning | context: 1065535 / output: 65535 | input: 0.21 / output: 1.8 / cache_read: 0.021 | 2025-04-26 |
| `google/gemini-2.5-flash-lite`<br />Gemini-2.5-Flash-Lite | gemini-flash-lite | audio, image, text, video | text | tools, reasoning | context: 1024000 / output: 64000 | input: 0.07 / output: 0.28 | 2025-06-19 |
| `google/gemini-2.5-pro`<br />Gemini-2.5-Pro | gemini-pro | audio, image, text, video | text | tools, reasoning | context: 1065535 / output: 65535 | input: 0.87 / output: 7 / cache_read: 0.087 | 2025-02-05 |
| `google/gemini-3-flash`<br />Gemini-3-Flash | - | audio, image, text, video | text | tools, reasoning | context: 1048576 / output: 65536 | input: 0.4 / output: 2.4 / cache_read: 0.04 | 2025-10-07 |
| `google/gemini-3-pro`<br />Gemini-3-Pro | gemini-pro | audio, image, text, video | text | tools, reasoning | context: 1048576 / output: 65536 | input: 1.6 / output: 9.6 / cache_read: 0.16 | 2025-10-22 |
| `google/gemini-3.1-flash-lite`<br />Gemini-3.1-Flash-Lite | - | audio, image, text, video | text | tools, reasoning | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 | 2026-02-18 |
| `google/gemini-3.1-pro`<br />Gemini-3.1-Pro | - | audio, image, text, video | text | tools, reasoning | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini-3.5-Flash | gemini-flash | audio, image, text | text | tools, schema, reasoning | context: 1048576 / output: 65536 | input: 1.5152 / output: 9.0909 / cache_read: 0.1515 | 2026-05-19 |
| `google/gemini-deep-research`<br />gemini-deep-research | - | image, text, video | text | tools, reasoning | context: 1048576 / output: 0 | input: 1.6 / output: 9.6 | 2025-12-11 |
| `google/gemma-4-31b`<br />Gemma-4-31B | - | image, text | text | tools | context: 262144 / output: 8192 | input: 0 / output: 0 | 2026-04-02 |
| `google/imagen-3`<br />Imagen-3 | imagen | text | image | tools | context: 480 / output: 0 | - | 2024-10-15 |
| `google/imagen-3-fast`<br />Imagen-3-Fast | imagen | text | image | tools | context: 480 / output: 0 | - | 2024-10-17 |
| `google/imagen-4`<br />Imagen-4 | imagen | text | image | tools | context: 480 / output: 0 | - | 2025-05-22 |
| `google/imagen-4-fast`<br />Imagen-4-Fast | imagen | text | image | tools | context: 480 / output: 0 | - | 2025-06-25 |
| `google/imagen-4-ultra`<br />Imagen-4-Ultra | imagen | text | image | tools | context: 480 / output: 0 | - | 2025-05-24 |
| `google/lyria`<br />Lyria | lyria | text | audio | tools | context: 0 / output: 0 | - | 2025-06-04 |
| `google/nano-banana`<br />Nano-Banana | nano-banana | image, text | image, text | tools | context: 65536 / output: 0 | input: 0.21 / output: 1.8 / cache_read: 0.021 | 2025-08-21 |
| `google/nano-banana-pro`<br />Nano-Banana-Pro | nano-banana | image, text | image | tools | context: 65536 / output: 0 | input: 2 / output: 12 / cache_read: 0.2 | 2025-11-19 |
| `google/veo-2`<br />Veo-2 | veo | text | video | tools | context: 480 / output: 0 | - | 2024-12-02 |
| `google/veo-3`<br />Veo-3 | veo | text | video | tools | context: 480 / output: 0 | - | 2025-05-21 |
| `google/veo-3-fast`<br />Veo-3-Fast | veo | text | video | tools | context: 480 / output: 0 | - | 2025-10-13 |
| `google/veo-3.1`<br />Veo-3.1 | veo | text | video | tools | context: 480 / output: 0 | - | 2025-10-15 |
| `google/veo-3.1-fast`<br />Veo-3.1-Fast | veo | image, text | video | tools | context: 480 / output: 0 | - | 2025-10-15 |
| `ideogramai/ideogram`<br />Ideogram | ideogram | image, text | image | tools | context: 150 / output: 0 | - | 2024-04-03 |
| `ideogramai/ideogram-v2`<br />Ideogram-v2 | ideogram | image, text | image | tools | context: 150 / output: 0 | - | 2024-08-21 |
| `ideogramai/ideogram-v2a`<br />Ideogram-v2a | ideogram | text | image | tools | context: 150 / output: 0 | - | 2025-02-27 |
| `ideogramai/ideogram-v2a-turbo`<br />Ideogram-v2a-Turbo | ideogram | text | image | tools | context: 150 / output: 0 | - | 2025-02-27 |
| `lumalabs/ray2`<br />Ray2 | ray | image, text | video | tools | context: 5000 / output: 0 | - | 2025-02-20 |
| `novita/deepseek-v3.2`<br />DeepSeek-V3.2 | - | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 0 | input: 0.27 / output: 0.4 / cache_read: 0.13 | 2025-12-01 |
| `novita/glm-4.6`<br />GLM-4.6 | glm | text | text | tools | context: 0 / output: 0 | - | 2025-09-30 |
| `novita/glm-4.6v`<br />glm-4.6v | - | image, text | text | tools, reasoning | context: 131000 / output: 32768 | - | 2025-12-09 |
| `novita/glm-4.7`<br />glm-4.7 | - | text | text | tools, reasoning, temperature | context: 205000 / output: 131072 | - | 2025-12-22 |
| `novita/glm-4.7-flash`<br />glm-4.7-flash | - | text | text | tools, reasoning | context: 200000 / output: 65500 | - | 2026-01-19 |
| `novita/glm-4.7-n`<br />glm-4.7-n | - | text | text | tools, reasoning | context: 205000 / output: 131072 | - | 2025-12-22 |
| `novita/glm-5`<br />GLM-5 | - | text | text | tools, reasoning, temperature | context: 205000 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-15 |
| `novita/kimi-k2-thinking`<br />kimi-k2-thinking | kimi-thinking | text | text | tools, reasoning | context: 256000 / output: 0 | - | 2025-11-07 |
| `novita/kimi-k2.5`<br />Kimi-K2.5 | - | image, text, video | text | tools, reasoning, temperature | context: 128000 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-27 |
| `novita/kimi-k2.6`<br />Kimi-K2.6 | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / input: 262144 / output: 262144 | input: 0.96 / output: 4.04 / cache_read: 0.16 | 2026-05-02 |
| `novita/minimax-m2.1`<br />minimax-m2.1 | - | text | text | tools, reasoning | context: 205000 / output: 131072 | - | 2025-12-26 |
| `openai/chatgpt-4o-latest`<br />ChatGPT-4o-Latest | gpt | image, text | text | tools | context: 128000 / output: 8192 | input: 4.5 / output: 14 | 2024-08-14 |
| `openai/dall-e-3`<br />DALL-E-3 | dall-e | text | image | tools | context: 800 / output: 0 | - | 2023-11-06 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5-Turbo | gpt | image, text | text | tools | context: 16384 / output: 2048 | input: 0.45 / output: 1.4 | 2023-09-13 |
| `openai/gpt-3.5-turbo-instruct`<br />GPT-3.5-Turbo-Instruct | gpt | image, text | text | tools | context: 3500 / output: 1024 | input: 1.4 / output: 1.8 | 2023-09-20 |
| `openai/gpt-3.5-turbo-raw`<br />GPT-3.5-Turbo-Raw | gpt | image, text | text | tools | context: 4524 / output: 2048 | input: 0.45 / output: 1.4 | 2023-09-27 |
| `openai/gpt-4-classic`<br />GPT-4-Classic | gpt | image, text | text | tools | context: 8192 / output: 4096 | input: 27 / output: 54 | 2024-03-25 |
| `openai/gpt-4-classic-0314`<br />GPT-4-Classic-0314 | gpt | image, text | text | tools | context: 8192 / output: 4096 | input: 27 / output: 54 | 2024-08-26 |
| `openai/gpt-4-turbo`<br />GPT-4-Turbo | gpt | image, text | text | tools | context: 128000 / output: 4096 | input: 9 / output: 27 | 2023-09-13 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools | context: 1047576 / output: 32768 | input: 1.8 / output: 7.2 / cache_read: 0.45 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1-mini | gpt-mini | image, text | text | tools | context: 1047576 / output: 32768 | input: 0.36 / output: 1.4 / cache_read: 0.09 | 2025-04-15 |
| `openai/gpt-4.1-nano`<br />GPT-4.1-nano | gpt-nano | image, text | text | tools | context: 1047576 / output: 32768 | input: 0.09 / output: 0.36 / cache_read: 0.022 | 2025-04-15 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, text | text | tools | context: 128000 / output: 8192 | - | 2024-05-13 |
| `openai/gpt-4o-aug`<br />GPT-4o-Aug | gpt | image, text | text | tools | context: 128000 / output: 8192 | input: 2.2 / output: 9 / cache_read: 1.1 | 2024-11-21 |
| `openai/gpt-4o-mini`<br />GPT-4o-mini | gpt-mini | image, text | text | tools | context: 124096 / output: 4096 | input: 0.14 / output: 0.54 / cache_read: 0.068 | 2024-07-18 |
| `openai/gpt-4o-mini-search`<br />GPT-4o-mini-Search | gpt-mini | text | text | tools | context: 128000 / output: 8192 | input: 0.14 / output: 0.54 | 2025-03-11 |
| `openai/gpt-4o-search`<br />GPT-4o-Search | gpt | text | text | tools | context: 128000 / output: 8192 | input: 2.2 / output: 9 | 2025-03-11 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-08-05 |
| `openai/gpt-5-chat`<br />GPT-5-Chat | gpt-codex | image, text | text | tools | context: 128000 / output: 16384 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.1 / output: 9 | 2025-09-23 |
| `openai/gpt-5-mini`<br />GPT-5-mini | gpt-mini | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.22 / output: 1.8 / cache_read: 0.022 | 2025-06-25 |
| `openai/gpt-5-nano`<br />GPT-5-nano | gpt-nano | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.045 / output: 0.36 / cache_read: 0.0045 | 2025-08-05 |
| `openai/gpt-5-pro`<br />GPT-5-Pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 14 / output: 110 | 2025-10-06 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-11-12 |
| `openai/gpt-5.1-codex`<br />GPT-5.1-Codex | gpt-codex | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-11-12 |
| `openai/gpt-5.1-codex-max`<br />GPT-5.1-Codex-Max | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-12-08 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1-Codex-Mini | gpt-codex | text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.22 / output: 1.8 / cache_read: 0.022 | 2025-11-12 |
| `openai/gpt-5.1-instant`<br />GPT-5.1-Instant | gpt | image, text | text | tools, reasoning | context: 128000 / output: 16384 | input: 1.1 / output: 9 / cache_read: 0.11 | 2025-11-12 |
| `openai/gpt-5.2`<br />GPT-5.2 | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.6 / output: 13 / cache_read: 0.16 | 2025-12-08 |
| `openai/gpt-5.2-codex`<br />GPT-5.2-Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.6 / output: 13 / cache_read: 0.16 | 2026-01-14 |
| `openai/gpt-5.2-instant`<br />GPT-5.2-Instant | - | image, text | text | tools | context: 128000 / output: 16384 | input: 1.6 / output: 13 / cache_read: 0.16 | 2025-12-11 |
| `openai/gpt-5.2-pro`<br />GPT-5.2-Pro | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 19 / output: 150 | 2025-12-11 |
| `openai/gpt-5.3-codex`<br />GPT-5.3-Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.6 / output: 13 / cache_read: 0.16 | 2026-02-10 |
| `openai/gpt-5.3-codex-spark`<br />GPT-5.3-Codex-Spark | - | text | text | tools, reasoning | context: 128000 / output: 16384 | input: 0 / output: 0 | 2026-03-04 |
| `openai/gpt-5.3-instant`<br />GPT-5.3-Instant | - | image, text | text | tools | context: 128000 / input: 111616 / output: 16384 | input: 1.6 / output: 13 / cache_read: 0.16 | 2026-03-03 |
| `openai/gpt-5.4`<br />GPT-5.4 | - | image, pdf, text | image | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.2 / output: 14 / cache_read: 0.22 | 2026-02-26 |
| `openai/gpt-5.4-mini`<br />GPT-5.4-Mini | - | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.68 / output: 4 / cache_read: 0.068 | 2026-03-12 |
| `openai/gpt-5.4-nano`<br />GPT-5.4-Nano | - | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.18 / output: 1.1 / cache_read: 0.018 | 2026-03-11 |
| `openai/gpt-5.4-pro`<br />GPT-5.4-Pro | - | image, text | image | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 27 / output: 160 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, text | image, text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 4.5455 / output: 27.2727 / cache_read: 0.4545 | 2026-04-08 |
| `openai/gpt-5.5-pro`<br />GPT-5.5-Pro | gpt-pro | image, text | image, text | tools, reasoning | context: 400000 / output: 128000 | input: 27.2727 / output: 163.6364 | 2026-04-08 |
| `openai/gpt-image-1`<br />GPT-Image-1 | gpt | image, text | image | tools | context: 128000 / output: 0 | - | 2025-03-31 |
| `openai/gpt-image-1-mini`<br />GPT-Image-1-Mini | gpt | image, text | image | tools | context: 0 / output: 0 | - | 2025-08-26 |
| `openai/gpt-image-1.5`<br />gpt-image-1.5 | - | image, text | image | - | context: 128000 / output: 0 | - | 2025-12-16 |
| `openai/gpt-image-2`<br />GPT-Image-2 | - | image, text | image | - | context: 0 / output: 0 | input: 5.0505 / output: 32.3232 / cache_read: 1.2626 | 2026-04-21 |
| `openai/o1`<br />o1 | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 14 / output: 54 | 2024-12-18 |
| `openai/o1-pro`<br />o1-pro | o-pro | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 140 / output: 540 | 2025-03-19 |
| `openai/o3`<br />o3 | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.8 / output: 7.2 / cache_read: 0.45 | 2025-04-16 |
| `openai/o3-deep-research`<br />o3-deep-research | o | text | text | tools, reasoning | context: 200000 / output: 100000 | input: 9 / output: 36 / cache_read: 2.2 | 2025-06-27 |
| `openai/o3-mini`<br />o3-mini | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 0.99 / output: 4 | 2025-01-31 |
| `openai/o3-mini-high`<br />o3-mini-high | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 0.99 / output: 4 | 2025-01-31 |
| `openai/o3-pro`<br />o3-pro | o-pro | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 18 / output: 72 | 2025-06-10 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 0.99 / output: 4 / cache_read: 0.25 | 2025-04-16 |
| `openai/o4-mini-deep-research`<br />o4-mini-deep-research | o-mini | text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.8 / output: 7.2 / cache_read: 0.45 | 2025-06-27 |
| `openai/sora-2`<br />Sora-2 | sora | image, text | video | tools | context: 0 / output: 0 | - | 2025-10-06 |
| `openai/sora-2-pro`<br />Sora-2-Pro | sora | image, text | video | tools | context: 0 / output: 0 | - | 2025-10-06 |
| `poetools/claude-code`<br />claude-code | - | text | text | tools, reasoning | context: 0 / output: 0 | - | 2025-11-27 |
| `runwayml/runway`<br />Runway | runway | image, text | video | tools | context: 256 / output: 0 | - | 2024-10-11 |
| `runwayml/runway-gen-4-turbo`<br />Runway-Gen-4-Turbo | runway | image, text | video | tools | context: 256 / output: 0 | - | 2025-05-09 |
| `stabilityai/stablediffusionxl`<br />StableDiffusionXL | stable-diffusion | image, text | image | tools | context: 200 / output: 0 | - | 2023-07-09 |
| `topazlabs-co/topazlabs`<br />TopazLabs | topazlabs | text | image | tools | context: 204 / output: 0 | - | 2024-12-03 |
| `trytako/tako`<br />Tako | tako | text | text | tools | context: 2048 / output: 0 | - | 2024-08-15 |
| `xai/grok-3`<br />Grok 3 | grok | text | text | tools | context: 131072 / output: 8192 | input: 3 / output: 15 / cache_read: 0.75 | 2025-04-11 |
| `xai/grok-3-mini`<br />Grok 3 Mini | grok | text | text | tools, reasoning | context: 131072 / output: 8192 | input: 0.3 / output: 0.5 / cache_read: 0.075 | 2025-04-11 |
| `xai/grok-4`<br />Grok-4 | grok | image, text | text | tools, reasoning | context: 256000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.75 | 2025-07-10 |
| `xai/grok-4-fast-non-reasoning`<br />Grok-4-Fast-Non-Reasoning | grok | image, text | text | tools | context: 2000000 / output: 128000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-09-16 |
| `xai/grok-4-fast-reasoning`<br />Grok-4-Fast-Reasoning | grok | image, text | text | tools, reasoning | context: 2000000 / output: 128000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-09-16 |
| `xai/grok-4.1-fast-non-reasoning`<br />Grok-4.1-Fast-Non-Reasoning | grok | image, text | text | tools | context: 2000000 / output: 30000 | - | 2025-11-19 |
| `xai/grok-4.1-fast-reasoning`<br />Grok-4.1-Fast-Reasoning | grok | image, text | text | tools, reasoning | context: 2000000 / output: 30000 | - | 2025-11-19 |
| `xai/grok-4.20-multi-agent`<br />Grok-4.20-Multi-Agent | - | image, text | text | tools | context: 128000 / output: 0 | input: 2 / output: 6 / cache_read: 0.2 | 2026-03-13 |
| `xai/grok-code-fast-1`<br />Grok Code Fast 1 | grok | text | text | tools, reasoning | context: 256000 / output: 128000 | input: 0.2 / output: 1.5 / cache_read: 0.02 | 2025-08-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

