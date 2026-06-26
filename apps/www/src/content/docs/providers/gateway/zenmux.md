---
title: "ZenMux"
description: "Use ZenMux through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1141
  label: "ZenMux"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://zenmux.ai/api/v1 |
| Environment | `ZENMUX_API_KEY` |
| Provider docs | [https://docs.zenmux.ai](https://docs.zenmux.ai) |
| Models | 112 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ZENMUX_API_KEY,
  baseUrl: "https://zenmux.ai/api/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-3.5-haiku");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 74 / 112 models |
| Tools | 112 / 112 models |
| Structured output | 14 / 112 models |
| Reasoning | 93 / 112 models |
| Temperature | 100 / 112 models |
| Open weights | 16 / 112 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-3.5-haiku`<br />Claude 3.5 Haiku | - | image, text | text | tools, temperature | context: 200000 / output: 64000 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-11-04 |
| `anthropic/claude-3.7-sonnet`<br />Claude 3.7 Sonnet | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-24 |
| `anthropic/claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `anthropic/claude-haiku-4.5`<br />Claude Haiku 4.5 | - | image, text | text | tools, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4.1`<br />Claude Opus 4.1 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4.5`<br />Claude Opus 4.5 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4.6`<br />Claude Opus 4.6 | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-06 |
| `anthropic/claude-opus-4.7`<br />Claude Opus 4.7 | - | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4.5`<br />Claude Sonnet 4.5 | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-02-18 |
| `baidu/ernie-5.0-thinking-preview`<br />ERNIE 5.0 | - | image, text, video | text | tools, reasoning, temperature | context: 128000 / output: 64000 | input: 0.84 / output: 3.37 | 2026-01-22 |
| `deepseek/deepseek-chat`<br />DeepSeek-V3.2 (Non-thinking Mode) | - | text | text | tools, temperature | context: 128000 / output: 64000 | input: 0.28 / output: 0.42 / cache_read: 0.03 | 2025-12-01 |
| `deepseek/deepseek-v3.2`<br />DeepSeek V3.2 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 64000 | input: 0.28 / output: 0.43 | 2025-12-05 |
| `deepseek/deepseek-v3.2-exp`<br />DeepSeek-V3.2-Exp | - | text | text | tools, reasoning, temperature | context: 163000 / output: 64000 | input: 0.22 / output: 0.33 | 2025-09-29 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | - | audio, image, pdf, text | text | tools, reasoning, temperature | context: 1048000 / output: 64000 | input: 0.3 / output: 2.5 / cache_read: 0.07 / cache_write: 1 | 2025-06-17 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash Lite | - | audio, image, pdf, text | text | tools, temperature | context: 1048000 / output: 64000 | input: 0.1 / output: 0.4 / cache_read: 0.03 / cache_write: 1 | 2025-07-22 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.31 / cache_write: 4.5 | 2025-06-17 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | - | audio, image, pdf, text | text | tools, reasoning, temperature | context: 1048000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 1 | 2025-12-17 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2026-05-07 |
| `google/gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | - | audio, image, text, video | text | tools, temperature | context: 1050000 / output: 65530 | input: 0.25 / output: 1.5 | 2025-03-20 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048000 / output: 64000 | input: 2 / output: 12 / cache_read: 0.2 / cache_write: 4.5 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 | 2026-05-19 |
| `inclusionai/ling-1t`<br />Ling-1T | - | text | text | tools, temperature | context: 128000 / output: 64000 | input: 0.56 / output: 2.24 / cache_read: 0.11 | 2025-10-09 |
| `inclusionai/ring-1t`<br />Ring-1T | - | text | text | tools, reasoning, temperature | context: 128000 / output: 64000 | input: 0.56 / output: 2.24 / cache_read: 0.11 | 2025-10-12 |
| `inclusionai/ring-2.6-1t`<br />inclusionAI: Ring-2.6-1T | - | text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 65000 | input: 0.3 / output: 2.5 / cache_read: 0.06 | 2026-05-14 |
| `kuaishou/kat-coder-pro-v2`<br />KAT-Coder-Pro-V2 | - | text | text | tools, temperature | context: 256000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-30 |
| `minimax/minimax-m2`<br />MiniMax M2 | - | text | text | tools, reasoning, temperature | context: 204000 / output: 64000 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.38 | 2025-10-27 |
| `minimax/minimax-m2.1`<br />MiniMax M2.1 | - | text | text | tools, reasoning, temperature | context: 204000 / output: 64000 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.38 | 2025-12-22 |
| `minimax/minimax-m2.5`<br />MiniMax M2.5 | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-13 |
| `minimax/minimax-m2.5-lightning`<br />MiniMax M2.5 highspeed | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.6 / output: 4.8 / cache_read: 0.06 / cache_write: 0.75 | 2026-02-13 |
| `minimax/minimax-m2.7`<br />MiniMax M2.7 | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131070 | input: 0.3055 / output: 1.2219 | 2026-03-20 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax M2.7 highspeed | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131070 | input: 0.611 / output: 2.4439 | 2026-03-20 |
| `minimax/minimax-m3`<br />MiniMax-M3 | minimax | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 128000 | input: 0.6 / output: 2.4 | 2026-06-01 |
| `moonshotai/kimi-k2-0905`<br />Kimi K2 0905 | - | text | text | tools, temperature | context: 262000 / output: 64000 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-09-04 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | - | text | text | tools, reasoning, temperature | context: 262000 / output: 64000 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-11-06 |
| `moonshotai/kimi-k2-thinking-turbo`<br />Kimi K2 Thinking Turbo | - | text | text | tools, reasoning, temperature | context: 262000 / output: 64000 | input: 1.15 / output: 8 / cache_read: 0.15 | 2025-11-06 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | - | image, text, video | text | tools, reasoning | context: 262000 / output: 64000 | input: 0.58 / output: 3.02 / cache_read: 0.1 | 2026-01-27 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | - | image, text, video | text | tools, reasoning, open weights | context: 262140 / output: 262140 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-20 |
| `moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-06-12 |
| `moonshotai/kimi-k2.7-code-free`<br />Kimi K2.7 Code (Free) | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 | 2026-06-12 |
| `openai/gpt-5`<br />GPT-5 | - | image, pdf, text | text | tools, reasoning, temperature | context: 400000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.12 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5 Codex | - | image, text | text | tools, reasoning, temperature | context: 400000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.12 | 2025-09-23 |
| `openai/gpt-5.1`<br />GPT-5.1 | - | image, pdf, text | text | tools, reasoning, temperature | context: 400000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.12 | 2025-11-13 |
| `openai/gpt-5.1-chat`<br />GPT-5.1 Chat | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.12 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT-5.1-Codex | - | image, text | text | tools, reasoning, temperature | context: 400000 / output: 64000 | input: 1.25 / output: 10 / cache_read: 0.12 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1-Codex-Mini | - | image, text | text | tools, reasoning, temperature | context: 400000 / output: 64000 | input: 0.25 / output: 2 / cache_read: 0.03 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 64000 | input: 1.75 / output: 14 / cache_read: 0.17 | 2025-12-11 |
| `openai/gpt-5.2-codex`<br />GPT-5.2-Codex | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 64000 | input: 1.75 / output: 14 / cache_read: 0.17 | 2026-01-15 |
| `openai/gpt-5.2-pro`<br />GPT-5.2-Pro | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai/gpt-5.3-chat`<br />GPT-5.3 Chat | - | text | text | tools, temperature | context: 128000 / output: 16380 | input: 1.75 / output: 14 | 2026-03-20 |
| `openai/gpt-5.3-codex`<br />GPT-5.3 Codex | - | text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-03-20 |
| `openai/gpt-5.4`<br />GPT-5.4 | - | image, text | text | tools, reasoning, temperature | context: 1050000 / output: 128000 | input: 3.75 / output: 18.75 | 2026-03-20 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 Mini | - | text | text | tools, temperature | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 | 2026-03-20 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 Nano | - | text | text | tools, temperature | context: 400000 / output: 128000 | input: 0.2 / output: 1.25 | 2026-03-20 |
| `openai/gpt-5.4-pro`<br />GPT-5.4 Pro | - | image, text | text | tools, reasoning, temperature | context: 1050000 / output: 128000 | input: 45 / output: 225 | 2026-03-20 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-5.5-instant`<br />GPT-5.5 Instant | - | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 400000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-28 |
| `openai/gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `qwen/qwen3-coder-plus`<br />Qwen3-Coder-Plus | - | text | text | tools, temperature | context: 1000000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-07-23 |
| `qwen/qwen3-max`<br />Qwen3-Max-Thinking | - | text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 1.2 / output: 6 | 2026-01-23 |
| `qwen/qwen3.5-flash`<br />Qwen3.5 Flash | - | image, text | text | tools, temperature | context: 1020000 / output: 1020000 | input: 0.1 / output: 0.4 | 2026-03-20 |
| `qwen/qwen3.5-plus`<br />Qwen3.5 Plus | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.8 / output: 4.8 | 2026-03-20 |
| `qwen/qwen3.6-plus`<br />Qwen3.6-Plus | - | text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-03-30 |
| `qwen/qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.5 / cache_write: 3.125 | 2026-05-21 |
| `qwen/qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.4 / output: 1.6 / cache_read: 0.08 / cache_write: 0.5 | 2026-06-02 |
| `sapiens-ai/agnes-1.5-lite`<br />Agnes 1.5 Lite | - | image, text | text | tools, temperature | context: 256000 / output: 256000 | input: 0.12 / output: 0.6 | 2026-03-26 |
| `sapiens-ai/agnes-1.5-pro`<br />Agnes 1.5 Pro | - | text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 0.16 / output: 0.8 | 2026-03-21 |
| `stepfun/step-3`<br />Step-3 | - | image, text | text | tools, reasoning, temperature | context: 65536 / output: 64000 | input: 0.21 / output: 0.57 | 2025-07-31 |
| `stepfun/step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, temperature | context: 256000 / output: 64000 | input: 0.1 / output: 0.3 | 2026-02-02 |
| `stepfun/step-3.7-flash`<br />Step 3.7 Flash | - | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.2 / output: 1.15 | 2026-05-29 |
| `stepfun/step-3.7-flash-free`<br />Step 3.7 Flash (Free) | - | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0 / output: 0 | 2026-05-29 |
| `tencent/hy3-preview`<br />Hy3 preview | Hy | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0.172 / output: 0.572 / cache_read: 0.058 / cache_write: 0 | 2026-04-20 |
| `volcengine/doubao-seed-1.8`<br />Doubao-Seed-1.8 | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.11 / output: 0.28 / cache_read: 0.02 / cache_write: 0.0024 | 2025-12-18 |
| `volcengine/doubao-seed-2.0-code`<br />Doubao Seed 2.0 Code | - | text | text | tools, temperature | context: 256000 / output: 32000 | input: 0.9 / output: 4.48 | 2026-03-20 |
| `volcengine/doubao-seed-2.0-lite`<br />Doubao-Seed-2.0-lite | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.09 / output: 0.51 / cache_read: 0.02 / cache_write: 0.0024 | 2026-02-14 |
| `volcengine/doubao-seed-2.0-mini`<br />Doubao-Seed-2.0-mini | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.03 / output: 0.28 / cache_read: 0.01 / cache_write: 0.0024 | 2026-02-14 |
| `volcengine/doubao-seed-2.0-pro`<br />Doubao-Seed-2.0-pro | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.45 / output: 2.24 / cache_read: 0.09 / cache_write: 0.0024 | 2026-02-14 |
| `volcengine/doubao-seed-code`<br />Doubao-Seed-Code | - | image, text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.17 / output: 1.12 / cache_read: 0.03 | 2025-11-11 |
| `x-ai/grok-4`<br />Grok 4 | - | image, text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.75 | 2025-07-09 |
| `x-ai/grok-4-fast`<br />Grok 4 Fast | - | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 64000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-09-19 |
| `x-ai/grok-4.1-fast`<br />Grok 4.1 Fast | - | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 64000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-20 |
| `x-ai/grok-4.1-fast-non-reasoning`<br />Grok 4.1 Fast Non Reasoning | - | image, text | text | tools, temperature | context: 2000000 / output: 64000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-20 |
| `x-ai/grok-4.2-fast`<br />Grok 4.2 Fast | - | image, text, video | text | tools, reasoning, temperature | context: 2000000 / output: 30000 | input: 3 / output: 9 | 2026-03-20 |
| `x-ai/grok-4.2-fast-non-reasoning`<br />Grok 4.2 Fast Non Reasoning | - | image, text, video | text | tools, temperature | context: 2000000 / output: 30000 | input: 3 / output: 9 | 2026-03-20 |
| `x-ai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 / cache_write: 0 | 2026-04-17 |
| `x-ai/grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-04-16 |
| `x-ai/grok-code-fast-1`<br />Grok Code Fast 1 | - | text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.2 / output: 1.5 / cache_read: 0.02 | 2025-08-26 |
| `xiaomi/mimo-v2-flash`<br />MiMo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2026-02-04 |
| `xiaomi/mimo-v2-omni`<br />MiMo V2 Omni | mimo | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 265000 / output: 265000 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-18 |
| `xiaomi/mimo-v2-pro`<br />MiMo V2 Pro | mimo | text | text | tools, reasoning, temperature | context: 1000000 / output: 256000 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `xiaomi/mimo-v2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-04-22 |
| `xiaomi/mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-04-22 |
| `z-ai/glm-4.5`<br />GLM 4.5 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 64000 | input: 0.35 / output: 1.54 / cache_read: 0.07 | 2025-07-25 |
| `z-ai/glm-4.5-air`<br />GLM 4.5 Air | - | text | text | tools, reasoning, temperature | context: 128000 / output: 64000 | input: 0.11 / output: 0.56 / cache_read: 0.02 | 2025-07-25 |
| `z-ai/glm-4.6`<br />GLM 4.6 | - | text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.35 / output: 1.54 / cache_read: 0.07 | 2025-09-30 |
| `z-ai/glm-4.6v`<br />GLM 4.6V | - | image, text, video | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.14 / output: 0.42 / cache_read: 0.03 | 2025-12-08 |
| `z-ai/glm-4.6v-flash`<br />GLM 4.6V FlashX | - | image, text, video | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.02 / output: 0.21 / cache_read: 0.0043 | 2025-12-08 |
| `z-ai/glm-4.6v-flash-free`<br />GLM 4.6V Flash (Free) | - | image, text, video | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0 / output: 0 | 2025-12-08 |
| `z-ai/glm-4.7`<br />GLM 4.7 | - | text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.28 / output: 1.14 / cache_read: 0.06 | 2025-12-23 |
| `z-ai/glm-4.7-flash-free`<br />GLM 4.7 Flash (Free) | - | text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0 / output: 0 | 2026-01-19 |
| `z-ai/glm-4.7-flashx`<br />GLM 4.7 FlashX | - | text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0.07 / output: 0.42 / cache_read: 0.01 | 2026-01-19 |
| `z-ai/glm-5`<br />GLM 5 | - | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.58 / output: 2.6 / cache_read: 0.14 | 2026-02-12 |
| `z-ai/glm-5-turbo`<br />GLM 5 Turbo | - | text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 0.88 / output: 3.48 | 2026-03-20 |
| `z-ai/glm-5.1`<br />GLM-5.1 | - | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 0.8781 / output: 3.5126 / cache_read: 0.1903 | 2026-04-03 |
| `z-ai/glm-5.2`<br />GLM 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.5 / cache_read: 0.26 | 2026-06-13 |
| `z-ai/glm-5.2-free`<br />GLM 5.2 (Free) | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-06-13 |
| `z-ai/glm-5v-turbo`<br />GLM 5V Turbo | - | image, pdf, text, video | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 0.726 / output: 3.1946 / cache_read: 0.1743 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

