---
title: "OrcaRouter"
description: "Use OrcaRouter through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1093
  label: "OrcaRouter"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.orcarouter.ai/v1 |
| Environment | `ORCAROUTER_API_KEY` |
| Provider docs | [https://docs.orcarouter.ai](https://docs.orcarouter.ai) |
| Models | 81 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ORCAROUTER_API_KEY,
  baseUrl: "https://api.orcarouter.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-haiku-4.5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 63 / 81 models |
| Tools | 79 / 81 models |
| Structured output | 53 / 81 models |
| Reasoning | 66 / 81 models |
| Temperature | 58 / 81 models |
| Open weights | 23 / 81 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-4.5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4.1`<br />Claude Opus 4.1 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4.5`<br />Claude Opus 4.5 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic/claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4.5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `deepseek/deepseek-chat`<br />DeepSeek Chat | deepseek | text | text | tools, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-02-28 |
| `deepseek/deepseek-reasoner`<br />DeepSeek Reasoner | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.028 | 2026-02-28 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.19 / output: 0.37 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.56 / output: 1.12 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-17 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2.5 / output: 15 / cache_read: 0.125 | 2025-06-17 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / input_audio: 1 | 2025-12-17 |
| `google/gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 4 / output: 18 / cache_read: 0.2 | 2025-11-18 |
| `google/gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-03-03 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 4 / output: 18 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 4 / output: 18 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-flash-latest`<br />Gemini Flash Latest | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.075 / input_audio: 1 | 2025-09-25 |
| `google/gemini-flash-lite-latest`<br />Gemini Flash-Lite Latest | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2025-09-25 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.06 / output: 0.33 | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.38 | 2026-04-02 |
| `grok/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `kimi/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01 |
| `kimi/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `minimax/minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `minimax/minimax-m2.5-highspeed`<br />MiniMax-M2.5-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-02-13 |
| `minimax/minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5-turbo | gpt | text | text | temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 / cache_read: 0 | 2023-11-06 |
| `openai/gpt-4`<br />GPT-4 | gpt | text | text | tools, temperature | context: 8192 / output: 8192 | input: 30 / output: 60 | 2024-04-09 |
| `openai/gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai/gpt-4o-2024-05-13`<br />GPT-4o (2024-05-13) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 5 / output: 15 | 2024-05-13 |
| `openai/gpt-4o-2024-08-06`<br />GPT-4o (2024-08-06) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai/gpt-4o-2024-11-20`<br />GPT-4o (2024-11-20) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-11-20 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-chat-latest`<br />GPT-5 Chat (latest) | gpt-codex | image, text | text | schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai/gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-chat-latest`<br />GPT-5.1 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-chat-latest`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-pro`<br />GPT-5.2 Pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai/gpt-5.3-chat-latest`<br />GPT-5.3 Chat (latest) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-03 |
| `openai/gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 22.5 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 60 / output: 270 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `orcarouter/auto`<br />OrcaRouter Auto | auto | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2026-05-14 |
| `qwen/qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 65536 | input: 0.359 / output: 1.434 | 2025-09-23 |
| `qwen/qwen3.5-122b-a10b`<br />Qwen3.5 122B-A10B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.115 / output: 0.917 | 2026-02-23 |
| `qwen/qwen3.5-27b`<br />Qwen3.5 27B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.086 / output: 0.688 | 2026-02-23 |
| `qwen/qwen3.5-35b-a3b`<br />Qwen3.5 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.057 / output: 0.459 | 2026-02-23 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.172 / output: 1.032 | 2026-02-15 |
| `qwen/qwen3.5-plus`<br />Qwen3.5 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.115 / output: 0.688 / reasoning: 2.4 | 2026-02-16 |
| `qwen/qwen3.6-35b-a3b`<br />Qwen3.6 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.248 / output: 1.485 | 2026-04-17 |
| `qwen/qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `z-ai/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-07-28 |
| `z-ai/glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.2 / output: 1.1 / cache_read: 0.03 / cache_write: 0 | 2025-07-28 |
| `z-ai/glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-09-30 |
| `z-ai/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-12-22 |
| `z-ai/glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 / cache_write: 0 | 2026-02-12 |
| `z-ai/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

