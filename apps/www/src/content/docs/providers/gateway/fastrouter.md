---
title: "FastRouter"
description: "Use FastRouter through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1038
  label: "FastRouter"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://go.fastrouter.ai/api/v1 |
| Environment | `FASTROUTER_API_KEY` |
| Provider docs | [https://fastrouter.ai/models](https://fastrouter.ai/models) |
| Models | 47 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.FASTROUTER_API_KEY,
  baseUrl: "https://go.fastrouter.ai/api/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-opus-4.1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text, video |
| Attachments | 32 / 47 models |
| Tools | 34 / 47 models |
| Structured output | 13 / 47 models |
| Reasoning | 33 / 47 models |
| Temperature | 32 / 47 models |
| Open weights | 15 / 47 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-opus-4.1`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 | 2026-05-28 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 | 2026-03-13 |
| `bytedance/seedance-2`<br />Seedance 2 | seed | image, text | video | - | context: 4096 / output: 0 | - | 2026-04-01 |
| `deepseek-ai/deepseek-r1-distill-llama-70b`<br />DeepSeek R1 Distill Llama 70B | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.03 / output: 0.14 | 2025-01-23 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.48 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | image, pdf, text | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.0375 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | image, pdf, text | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.31 | 2025-06-17 |
| `google/gemini-3-pro-image-preview`<br />Nano Banana Pro | gemini-pro | image, text | image, text | reasoning, temperature | context: 65536 / output: 32768 | input: 2 / output: 12 | 2025-11-20 |
| `google/gemini-3.1-flash-image-preview`<br />Nano Banana 2 | gemini-flash | image, pdf, text | image, text | reasoning, temperature | context: 65536 / output: 65536 | input: 0.5 / output: 3 | 2026-02-26 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 | 2026-05-19 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.38 | 2026-04-02 |
| `google/imagen-4.0-fast`<br />Imagen 4 Fast | imagen | text | image | - | context: 480 / output: 0 | - | 2025-05-20 |
| `google/imagen-4.0-ultra`<br />Imagen 4 Ultra | imagen | text | image | - | context: 480 / output: 0 | - | 2025-05-20 |
| `google/veo3.1`<br />Veo 3.1 | veo | image, text | video | - | context: 400000 / output: 0 | - | 2026-05-01 |
| `google/veo3.1-fast`<br />Veo 3.1 Fast | veo | image, text | video | - | context: 400000 / output: 0 | - | 2026-05-01 |
| `google/veo3.1-lite`<br />Veo 3.1 Lite | veo | image, text | video | - | context: 400000 / output: 0 | - | 2026-05-01 |
| `leonardo-ai/lucid-origin`<br />Lucid Origin | lucid | image, text | image | - | context: 4096 / output: 0 | - | 2025-06-01 |
| `leonardo-ai/lucid-realism`<br />Lucid Realism | lucid | image, text | image | - | context: 4096 / output: 0 | - | 2025-06-01 |
| `minimax/minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-03-18 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 | 2026-03-18 |
| `moonshotai/kimi-k2`<br />Kimi K2 | kimi-k2 | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.55 / output: 2.2 | 2025-07-11 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.75 / output: 3.5 | 2026-04-21 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai/gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 | 2026-02-05 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 | 2026-03-17 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 | 2026-04-23 |
| `openai/gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `openai/gpt-image-2`<br />GPT Image 2 | gpt-image | image, text | image | temperature | context: 128000 / output: 0 | - | 2026-04-21 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 0.6 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.05 / output: 0.2 | 2025-08-05 |
| `openai/gpt-realtime-1.5`<br />GPT Realtime 1.5 | gpt | audio, image, text | audio, text | tools, temperature | context: 32000 / output: 4096 | input: 4 / output: 16 | 2025-06-01 |
| `qwen/qwen3-coder`<br />Qwen3 Coder | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 66536 | input: 0.3 / output: 1.2 | 2025-07-23 |
| `sarvam/sarvam-105b`<br />Sarvam 105B | sarvam | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.04 / output: 0.16 | 2025-09-01 |
| `sarvam/sarvam-30b`<br />Sarvam 30B | sarvam | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.02 / output: 0.1 | 2026-02-18 |
| `wanx/wan-v2-6`<br />Wan 2.6 | - | image, text | video | open weights | context: 400000 / output: 0 | - | 2025-12-01 |
| `x-ai/grok-4`<br />Grok 4 | grok | text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.75 / cache_write: 15 | 2025-07-09 |
| `x-ai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 | 2026-04-17 |
| `x-ai/grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 | 2026-04-16 |
| `z-ai/glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.95 / output: 3.15 | 2026-02-11 |
| `z-ai/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.05 / output: 3.5 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

