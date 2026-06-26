---
title: "Merge Gateway"
description: "Review Merge Gateway connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1068
  label: "Merge Gateway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `MERGE_GATEWAY_API_KEY` |
| Provider docs | [https://docs.merge.dev/merge-gateway](https://docs.merge.dev/merge-gateway) |
| Models | 93 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 60 / 93 models |
| Tools | 92 / 93 models |
| Structured output | 50 / 93 models |
| Reasoning | 69 / 93 models |
| Temperature | 73 / 93 models |
| Open weights | 37 / 93 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `alibaba/qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 | 2026-04-02 |
| `alibaba/qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.65 / output: 4.95 | 2026-05-21 |
| `anthropic/claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4-1-20250805`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4-20250514`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4-5-20251101`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-01 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic/claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 | 2026-05-28 |
| `anthropic/claude-sonnet-4-20250514`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `cohere/command-a-03-2025`<br />Command A | command-a | text | text | tools, temperature, open weights | context: 256000 / output: 8000 | input: 2.5 / output: 10 | 2025-03-13 |
| `cohere/command-r-08-2024`<br />Command R | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.15 / output: 0.6 | 2024-08-30 |
| `cohere/command-r-plus-08-2024`<br />Command R+ | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 2.5 / output: 10 | 2024-08-30 |
| `cohere/command-r7b-12-2024`<br />Command R7B | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.0375 / output: 0.15 | 2024-12-02 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-17 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / input_audio: 1 | 2025-12-17 |
| `google/gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2025-11-18 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-05-07 |
| `google/gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / input_audio: 0.5 | 2026-03-03 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `google/gemini-flash-latest`<br />Gemini Flash Latest | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.075 / input_audio: 1 | 2025-09-25 |
| `google/gemini-flash-lite-latest`<br />Gemini Flash-Lite Latest | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-09-25 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | - | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | - | 2026-04-02 |
| `minimax/minimax-m2`<br />MiniMax-M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 128000 | input: 0.3 / output: 1.2 | 2025-10-27 |
| `minimax/minimax-m2.1`<br />MiniMax-M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2025-12-23 |
| `minimax/minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `minimax/minimax-m2.5-highspeed`<br />MiniMax-M2.5-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-02-13 |
| `minimax/minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax/minimax-m3`<br />MiniMax-M3 | minimax | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 128000 | input: 0.6 / output: 2.4 | 2026-06-01 |
| `mistral/codestral-latest`<br />Codestral (latest) | codestral | text | text | tools, temperature, open weights | context: 256000 / output: 4096 | input: 0.3 / output: 0.9 | 2025-01-04 |
| `mistral/devstral-2512`<br />Devstral 2 | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-09 |
| `mistral/devstral-medium-2507`<br />Devstral Medium | devstral | text | text | tools, temperature | context: 128000 / output: 128000 | input: 0.4 / output: 2 | 2025-07-10 |
| `mistral/devstral-medium-latest`<br />Devstral 2 (latest) | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-02 |
| `mistral/devstral-small-2507`<br />Devstral Small | devstral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.1 / output: 0.3 | 2025-07-10 |
| `mistral/magistral-medium-latest`<br />Magistral Medium (latest) | magistral-medium | text | text | tools, reasoning, temperature | context: 128000 / output: 16384 | input: 2 / output: 5 | 2025-03-20 |
| `mistral/mistral-large-2411`<br />Mistral Large 2.1 | mistral-large | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 2 / output: 6 | 2024-11-18 |
| `mistral/mistral-large-2512`<br />Mistral Large 3 | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral/mistral-large-latest`<br />Mistral Large (latest) | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral/mistral-medium-2505`<br />Mistral Medium 3 | mistral-medium | image, text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.4 / output: 2 | 2025-05-07 |
| `mistral/mistral-medium-latest`<br />Mistral Medium (latest) | mistral-medium | image, text | text | tools, temperature | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-08-12 |
| `mistral/mistral-small-latest`<br />Mistral Small (latest) | mistral-small | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.15 / output: 0.6 | 2026-03-16 |
| `mistral/pixtral-large-latest`<br />Pixtral Large (latest) | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 2 / output: 6 | 2024-11-04 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2025-11-06 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 | 2026-01 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-04-21 |
| `moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-06-12 |
| `moonshotai/kimi-k2.7-code-highspeed`<br />Kimi K2.7 Code Highspeed | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 1.9 / output: 8 | 2026-06-12 |
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
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-chat-latest`<br />GPT-5.1 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-chat-latest`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.3-chat-latest`<br />GPT-5.3 Chat (latest) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-03 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/o1`<br />o1 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `openai/o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai/o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `xai/grok-4.20-0309-reasoning`<br />Grok 4.20 (Reasoning) | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-09 |
| `xai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `zai/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-07-28 |
| `zai/glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.2 / output: 1.1 / cache_read: 0.03 / cache_write: 0 | 2025-07-28 |
| `zai/glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-09-30 |
| `zai/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 / cache_write: 0 | 2025-12-22 |
| `zai/glm-4.7-flashx`<br />GLM-4.7-FlashX | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.07 / output: 0.4 / cache_read: 0.01 / cache_write: 0 | 2026-01-19 |
| `zai/glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 / cache_write: 0 | 2026-02-12 |
| `zai/glm-5-turbo`<br />GLM-5-Turbo | glm | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 / cache_write: 0 | 2026-03-16 |
| `zai/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |
| `zai/glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

