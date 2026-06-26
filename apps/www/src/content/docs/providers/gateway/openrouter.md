---
title: "OpenRouter"
description: "Review OpenRouter connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1092
  label: "OpenRouter"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | https://openrouter.ai/api/v1 |
| Environment | `OPENROUTER_API_KEY` |
| Provider docs | [https://openrouter.ai/models](https://openrouter.ai/models) |
| Models | 338 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text |
| Attachments | 177 / 338 models |
| Tools | 254 / 338 models |
| Structured output | 259 / 338 models |
| Reasoning | 195 / 338 models |
| Temperature | 290 / 338 models |
| Open weights | 166 / 338 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `~anthropic/claude-fable-latest`<br />Claude Fable Latest | claude-fable | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `~anthropic/claude-haiku-latest`<br />Anthropic Claude Haiku Latest | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2026-04-27 |
| `~anthropic/claude-opus-latest`<br />Claude Opus Latest | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-21 |
| `~anthropic/claude-sonnet-latest`<br />Anthropic Claude Sonnet Latest | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-04-27 |
| `~google/gemini-flash-latest`<br />Google Gemini Flash Latest | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / reasoning: 9 / cache_read: 0.15 / cache_write: 0.083333 | 2026-04-27 |
| `~google/gemini-pro-latest`<br />Google Gemini Pro Latest | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / reasoning: 12 / cache_read: 0.2 / cache_write: 0.375 | 2026-04-27 |
| `~moonshotai/kimi-latest`<br />MoonshotAI Kimi Latest | kimi | image, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 262144 | input: 0.66 / output: 3.41 / cache_read: 0.144 | 2026-04-27 |
| `~openai/gpt-latest`<br />OpenAI GPT Latest | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-27 |
| `~openai/gpt-mini-latest`<br />OpenAI GPT Mini Latest | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-04-27 |
| `ai21/jamba-large-1.7`<br />Jamba Large 1.7 | jamba | text | text | tools, temperature, open weights | context: 256000 / output: 4096 | input: 2 / output: 8 | 2025-08-08 |
| `aion-labs/aion-1.0`<br />Aion-1.0 | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 4 / output: 8 | 2025-02-04 |
| `aion-labs/aion-1.0-mini`<br />Aion-1.0-Mini | - | text | text | reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.7 / output: 1.4 | 2025-02-04 |
| `aion-labs/aion-2.0`<br />Aion-2.0 | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.8 / output: 1.6 / cache_read: 0.2 | 2026-02-23 |
| `aion-labs/aion-rp-llama-3.1-8b`<br />Aion-RP 1.0 (8B) | llama | text | text | temperature | context: 32768 / output: 32768 | input: 0.8 / output: 1.6 | 2025-02-04 |
| `allenai/olmo-3-32b-think`<br />Olmo 3 32B Think | allenai | text | text | schema, reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.15 / output: 0.5 | 2025-11-21 |
| `amazon/nova-2-lite-v1`<br />Nova 2 Lite | nova | image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65535 | input: 0.3 / output: 2.5 | 2025-12-02 |
| `amazon/nova-lite-v1`<br />Nova Lite 1.0 | nova-lite | image, text | text | tools, temperature | context: 300000 / output: 5120 | input: 0.06 / output: 0.24 | 2024-12-05 |
| `amazon/nova-micro-v1`<br />Nova Micro 1.0 | nova-micro | text | text | tools, temperature | context: 128000 / output: 5120 | input: 0.035 / output: 0.14 | 2024-12-05 |
| `amazon/nova-premier-v1`<br />Nova Premier 1.0 | nova | image, text | text | tools, temperature | context: 1000000 / output: 32000 | input: 2.5 / output: 12.5 / cache_read: 0.625 | 2025-10-31 |
| `amazon/nova-pro-v1`<br />Nova Pro 1.0 | nova-pro | image, text | text | tools, temperature | context: 300000 / output: 5120 | input: 0.8 / output: 3.2 | 2024-12-05 |
| `anthracite-org/magnum-v4-72b`<br />Magnum v4 72B | - | text | text | schema, temperature, open weights | context: 16384 / output: 2048 | input: 3 / output: 5 | 2024-10-22 |
| `anthropic/claude-3-haiku`<br />Claude 3 Haiku | claude | image, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-13 |
| `anthropic/claude-haiku-4.5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4.1`<br />Claude Opus 4.1 (latest) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4.5`<br />Claude Opus 4.5 (latest) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic/claude-opus-4.6-fast`<br />Claude Opus 4.6 (Fast) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 30 / output: 150 / cache_read: 3 / cache_write: 37.5 | 2026-04-07 |
| `anthropic/claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-opus-4.7-fast`<br />Claude Opus 4.7 (Fast) | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 30 / output: 150 / cache_read: 3 / cache_write: 37.5 | 2026-05-12 |
| `anthropic/claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `anthropic/claude-opus-4.8-fast`<br />Claude Opus 4.8 (Fast) | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-05-27 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4.5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `arcee-ai/coder-large`<br />Coder Large | - | text | text | temperature | context: 32768 / output: 32768 | input: 0.5 / output: 0.8 | 2025-05-05 |
| `arcee-ai/trinity-large-thinking`<br />Trinity Large Thinking | trinity | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 80000 | input: 0.25 / output: 0.8 / cache_read: 0.06 | 2026-04-01 |
| `arcee-ai/trinity-mini`<br />Trinity Mini | trinity-mini | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.045 / output: 0.15 | 2025-12-01 |
| `arcee-ai/virtuoso-large`<br />Virtuoso Large | - | text | text | tools, temperature | context: 131072 / output: 64000 | input: 0.75 / output: 1.2 | 2025-05-05 |
| `baidu/ernie-4.5-vl-424b-a47b`<br />ERNIE 4.5 VL 424B A47B  | ernie | image, text | text | reasoning, temperature, open weights | context: 123000 / output: 16000 | input: 0.42 / output: 1.25 | 2025-06-30 |
| `bytedance-seed/seed-1.6`<br />Seed 1.6 | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 32768 | input: 0.25 / output: 2 | 2025-12-23 |
| `bytedance-seed/seed-1.6-flash`<br />Seed 1.6 Flash | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 32768 | input: 0.075 / output: 0.3 | 2025-12-23 |
| `bytedance-seed/seed-2.0-lite`<br />Seed-2.0-Lite | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 131072 | input: 0.25 / output: 2 | 2026-03-10 |
| `bytedance-seed/seed-2.0-mini`<br />Seed-2.0-Mini | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 262144 / output: 131072 | input: 0.1 / output: 0.4 | 2026-02-26 |
| `bytedance/ui-tars-1.5-7b`<br />UI-TARS 7B  | - | image, text | text | schema, temperature, open weights | context: 128000 / output: 2048 | input: 0.1 / output: 0.2 / cache_read: 0.1 | 2025-07-22 |
| `cognitivecomputations/dolphin-mistral-24b-venice-edition:free`<br />Uncensored (free) | mistral | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0 / output: 0 | 2025-07-09 |
| `cohere/command-a`<br />Command A | command-a | text | text | schema, temperature, open weights | context: 256000 / output: 8192 | input: 2.5 / output: 10 | 2025-03-13 |
| `cohere/command-r-08-2024`<br />Command R | command-r | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4000 | input: 0.15 / output: 0.6 | 2024-08-30 |
| `cohere/command-r-plus-08-2024`<br />Command R+ | command-r | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4000 | input: 2.5 / output: 10 | 2024-08-30 |
| `cohere/command-r7b-12-2024`<br />Command R7B | command-r | text | text | schema, temperature, open weights | context: 128000 / output: 4000 | input: 0.0375 / output: 0.15 | 2024-12-02 |
| `cohere/north-mini-code:free`<br />North Mini Code (free) | north | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2026-06-17 |
| `deepcogito/cogito-v2.1-671b`<br />Cogito v2.1 671B | cogito | text | text | schema, reasoning, temperature | context: 128000 / output: 128000 | input: 1.25 / output: 1.25 | 2025-11-13 |
| `deepseek/deepseek-chat`<br />DeepSeek Chat | deepseek | text | text | tools, schema, temperature, open weights | context: 128000 / output: 16000 | input: 0.2002 / output: 0.8001 | 2026-02-28 |
| `deepseek/deepseek-chat-v3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, schema, temperature, open weights | context: 163840 / output: 16384 | input: 0.2 / output: 0.77 / cache_read: 0.135 | 2025-03-24 |
| `deepseek/deepseek-chat-v3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.21 / output: 0.79 / cache_read: 0.13 | 2025-08-21 |
| `deepseek/deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 64000 / output: 16000 | input: 0.7 / output: 2.5 | 2025-05-29 |
| `deepseek/deepseek-r1-0528`<br />R1 0528 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.5 / output: 2.15 / cache_read: 0.35 | 2025-05-28 |
| `deepseek/deepseek-r1-distill-llama-70b`<br />R1 Distill Llama 70B | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 8192 / output: 8192 | input: 0.8 / output: 0.8 | 2025-01-23 |
| `deepseek/deepseek-v3.1-terminus`<br />DeepSeek V3.1 Terminus | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.27 / output: 0.95 / cache_read: 0.13 | 2025-09-22 |
| `deepseek/deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 64000 | input: 0.2288 / output: 0.3432 | 2025-12-01 |
| `deepseek/deepseek-v3.2-exp`<br />DeepSeek V3.2 Exp | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.27 / output: 0.41 | 2025-09-29 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 65536 | input: 0.09 / output: 0.18 / cache_read: 0.02 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.3 / output: 2.5 / reasoning: 2.5 / cache_read: 0.03 / cache_write: 0.083333 | 2025-06-17 |
| `google/gemini-2.5-flash-image`<br />Nano Banana | gemini-flash | image, text | image, text | schema, temperature | context: 32768 / output: 32768 | input: 0.3 / output: 2.5 / cache_read: 0.03 / cache_write: 0.083333 | 2025-08-26 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash-Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.1 / output: 0.4 / reasoning: 0.4 / cache_read: 0.01 / cache_write: 0.083333 | 2025-06-17 |
| `google/gemini-2.5-flash-lite-preview-09-2025`<br />Gemini 2.5 Flash Lite Preview 09-2025 | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.1 / output: 0.4 / reasoning: 0.4 / cache_read: 0.01 / cache_write: 0.083333 | 2025-09-25 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2025-06-17 |
| `google/gemini-2.5-pro-preview`<br />Gemini 2.5 Pro Preview 06-05 | gemini | audio, image, pdf, text | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2025-06-05 |
| `google/gemini-2.5-pro-preview-05-06`<br />Gemini 2.5 Pro Preview 05-06 | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2025-05-07 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.5 / output: 3 / reasoning: 3 / cache_read: 0.05 / cache_write: 0.083333 | 2025-12-17 |
| `google/gemini-3-pro-image`<br />Nano Banana Pro (Gemini 3 Pro Image) | gemini | image, text | image, text | tools, schema, reasoning, temperature | context: 65536 / output: 32768 | input: 2 / output: 12 / reasoning: 12 / cache_read: 0.2 / cache_write: 0.375 | 2026-06-18 |
| `google/gemini-3-pro-image-preview`<br />Nano Banana Pro | gemini-pro | image, text | image, text | schema, reasoning, temperature | context: 65536 / output: 32768 | input: 2 / output: 12 / reasoning: 12 / cache_read: 0.2 / cache_write: 0.375 | 2025-11-20 |
| `google/gemini-3.1-flash-image`<br />Nano Banana 2 (Gemini 3.1 Flash Image) | gemini | image, text | image, text | schema, reasoning, temperature | context: 131072 / output: 32768 | input: 0.5 / output: 3 | 2026-06-18 |
| `google/gemini-3.1-flash-image-preview`<br />Nano Banana 2 | gemini-flash | image, text | image, text | schema, reasoning, temperature | context: 131072 / output: 32768 | input: 0.5 / output: 3 | 2026-02-26 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / reasoning: 1.5 / cache_read: 0.025 / cache_write: 0.083333 | 2026-05-07 |
| `google/gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / reasoning: 1.5 / cache_read: 0.025 / cache_write: 0.083333 | 2026-03-03 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / reasoning: 12 / cache_read: 0.2 / cache_write: 0.375 | 2026-02-19 |
| `google/gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / reasoning: 12 / cache_read: 0.2 / cache_write: 0.375 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / reasoning: 9 / cache_read: 0.15 / cache_write: 0.083333 | 2026-05-19 |
| `google/gemma-2-27b-it`<br />Gemma 2 27B | gemma | text | text | schema, temperature, open weights | context: 8192 / output: 2048 | input: 0.65 / output: 0.65 | 2024-07-13 |
| `google/gemma-3-12b-it`<br />Gemma 3 12B | gemma | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.05 / output: 0.15 | 2025-03-13 |
| `google/gemma-3-27b-it`<br />Gemma 3 27B | gemma | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.08 / output: 0.16 | 2025-03-12 |
| `google/gemma-3-4b-it`<br />Gemma 3 4B | gemma | image, text | text | schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.05 / output: 0.1 | 2025-03-13 |
| `google/gemma-3n-e4b-it`<br />Gemma 3n 4B | gemma | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.06 / output: 0.12 | 2025-05-20 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.06 / output: 0.33 | 2026-04-02 |
| `google/gemma-4-26b-a4b-it:free`<br />Gemma 4 26B A4B  (free) | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0 / output: 0 | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.12 / output: 0.35 / cache_read: 0.09 | 2026-04-02 |
| `google/gemma-4-31b-it:free`<br />Gemma 4 31B (free) | gemma | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 8192 | input: 0 / output: 0 | 2026-04-02 |
| `google/lyria-3-clip-preview`<br />Lyria 3 Clip Preview | lyria | image, text | audio, text | temperature | context: 1048576 / output: 65536 | input: 0 / output: 0 | 2026-03-30 |
| `google/lyria-3-pro-preview`<br />Lyria 3 Pro Preview | lyria | image, text | audio, text | temperature | context: 1048576 / output: 65536 | input: 0 / output: 0 | 2026-03-30 |
| `gryphe/mythomax-l2-13b`<br />MythoMax 13B | - | text | text | schema, temperature, open weights | context: 4096 / output: 4096 | input: 0.06 / output: 0.06 | 2023-07-02 |
| `ibm-granite/granite-4.0-h-micro`<br />Granite 4.0 Micro | granite | text | text | temperature, open weights | context: 131000 / output: 131000 | input: 0.017 / output: 0.112 | 2025-10-20 |
| `ibm-granite/granite-4.1-8b`<br />Granite 4.1 8B | granite | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.05 / output: 0.1 / cache_read: 0.05 | 2026-04-30 |
| `inception/mercury-2`<br />Mercury 2 | mercury | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 50000 | input: 0.25 / output: 0.75 / cache_read: 0.025 | 2026-03-04 |
| `inclusionai/ling-2.6-1t`<br />Ling-2.6-1T | ling | text | text | tools, schema, temperature | context: 262144 / output: 32768 | input: 0.075 / output: 0.625 / cache_read: 0.015 | 2026-04-23 |
| `inclusionai/ling-2.6-flash`<br />Ling-2.6-flash | ling | text | text | tools, schema, temperature | context: 262144 / output: 32768 | input: 0.01 / output: 0.03 / cache_read: 0.002 | 2026-04-21 |
| `inclusionai/ring-2.6-1t`<br />Ring-2.6-1T | ring | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.075 / output: 0.625 / cache_read: 0.015 | 2026-05-08 |
| `inflection/inflection-3-pi`<br />Inflection 3 Pi | - | text | text | temperature | context: 8000 / output: 1024 | input: 2.5 / output: 10 | 2024-10-11 |
| `inflection/inflection-3-productivity`<br />Inflection 3 Productivity | - | text | text | temperature | context: 8000 / output: 1024 | input: 2.5 / output: 10 | 2024-10-11 |
| `kwaipilot/kat-coder-pro-v2`<br />KAT-Coder-Pro V2 | kat-coder | text | text | tools, schema, temperature | context: 256000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-27 |
| `liquid/lfm-2-24b-a2b`<br />LFM2-24B-A2B | liquid | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.03 / output: 0.12 | 2026-02-25 |
| `liquid/lfm-2.5-1.2b-instruct:free`<br />LFM2.5-1.2B-Instruct (free) | liquid | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0 / output: 0 | 2026-01-20 |
| `liquid/lfm-2.5-1.2b-thinking:free`<br />LFM2.5-1.2B-Thinking (free) | liquid | text | text | tools, schema, reasoning, temperature, open weights | context: 32768 / output: 32768 | input: 0 / output: 0 | 2026-01-20 |
| `mancer/weaver`<br />Weaver (alpha) | alpha | text | text | schema, temperature | context: 8000 / output: 2000 | input: 0.75 / output: 1 | 2023-08-02 |
| `meta-llama/llama-3-8b-instruct`<br />Llama 3 8B Instruct | llama | text | text | schema, temperature, open weights | context: 8192 / output: 8192 | input: 0.14 / output: 0.14 | 2024-04-18 |
| `meta-llama/llama-3.1-70b-instruct`<br />Llama 3.1 70B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.4 / output: 0.4 | 2024-07-23 |
| `meta-llama/llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.02 / output: 0.03 | 2024-07-23 |
| `meta-llama/llama-3.2-11b-vision-instruct`<br />Llama 3.2 11B Vision Instruct | llama | image, text | text | temperature, open weights | context: 131072 / output: 16384 | input: 0.345 / output: 0.345 | 2024-09-25 |
| `meta-llama/llama-3.2-1b-instruct`<br />Llama 3.2 1B Instruct | llama | text | text | temperature, open weights | context: 60000 / output: 60000 | input: 0.027 / output: 0.201 | 2024-09-25 |
| `meta-llama/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | temperature, open weights | context: 80000 / output: 80000 | input: 0.0509 / output: 0.335 | 2024-09-25 |
| `meta-llama/llama-3.2-3b-instruct:free`<br />Llama 3.2 3B Instruct (free) | llama | text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2024-09-25 |
| `meta-llama/llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.1 / output: 0.32 | 2024-12-06 |
| `meta-llama/llama-3.3-70b-instruct:free`<br />Llama 3.3 70B Instruct (free) | llama | text | text | tools, temperature, open weights | context: 65536 / output: 131072 | input: 0 / output: 0 | 2024-12-06 |
| `meta-llama/llama-4-maverick`<br />Llama 4 Maverick | llama | image, text | text | tools, schema, temperature, open weights | context: 1048576 / output: 16384 | input: 0.15 / output: 0.6 | 2025-04-05 |
| `meta-llama/llama-4-scout`<br />Llama 4 Scout | llama | image, text | text | tools, schema, temperature, open weights | context: 327680 / output: 16384 | input: 0.1 / output: 0.3 | 2025-04-05 |
| `meta-llama/llama-guard-4-12b`<br />Llama Guard 4 12B | llama | image, text | text | temperature, open weights | context: 163840 / output: 16384 | input: 0.18 / output: 0.18 | 2025-04-30 |
| `microsoft/phi-4`<br />Phi 4 | phi | text | text | schema, temperature, open weights | context: 16384 / output: 16384 | input: 0.07 / output: 0.14 | 2025-01-10 |
| `microsoft/phi-4-mini-instruct`<br />Phi 4 Mini Instruct | phi | text | text | schema, temperature, open weights | context: 128000 / output: 128000 | input: 0.08 / output: 0.35 / cache_read: 0.08 | 2025-10-17 |
| `microsoft/wizardlm-2-8x22b`<br />WizardLM-2 8x22B | - | text | text | temperature, open weights | context: 65535 / output: 8000 | input: 0.62 / output: 0.62 | 2024-04-16 |
| `minimax/minimax-01`<br />MiniMax-01 | minimax | image, text | text | temperature, open weights | context: 1000192 / output: 1000192 | input: 0.2 / output: 1.1 | 2025-01-15 |
| `minimax/minimax-m1`<br />MiniMax M1 | minimax | text | text | tools, reasoning, temperature | context: 1000000 / output: 40000 | input: 0.4 / output: 2.2 | 2025-06-17 |
| `minimax/minimax-m2`<br />MiniMax-M2 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.255 / output: 1 / cache_read: 0.03 | 2025-10-27 |
| `minimax/minimax-m2-her`<br />MiniMax M2-her | minimax | text | text | temperature | context: 65536 / output: 2048 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2026-01-23 |
| `minimax/minimax-m2.1`<br />MiniMax-M2.1 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.29 / output: 0.95 / cache_read: 0.03 | 2025-12-23 |
| `minimax/minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.12 / output: 0.48 | 2026-02-12 |
| `minimax/minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.18 / output: 0.72 | 2026-03-18 |
| `minimax/minimax-m3`<br />MiniMax-M3 | minimax | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 512000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-01 |
| `mistralai/codestral-2508`<br />Codestral 2508 | codestral | pdf, text | text | tools, schema, temperature | context: 256000 / output: 256000 | input: 0.3 / output: 0.9 / cache_read: 0.03 | 2025-08-01 |
| `mistralai/devstral-2512`<br />Devstral 2 | devstral | pdf, text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 / cache_read: 0.04 | 2025-12-09 |
| `mistralai/ministral-14b-2512`<br />Ministral 3 14B 2512 | ministral | image, text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 0.2 / cache_read: 0.02 | 2025-12-02 |
| `mistralai/ministral-3b-2512`<br />Ministral 3 3B 2512 | ministral | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.1 / output: 0.1 / cache_read: 0.01 | 2025-12-02 |
| `mistralai/ministral-8b-2512`<br />Ministral 3 8B 2512 | ministral | image, text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.15 / output: 0.15 / cache_read: 0.015 | 2025-12-02 |
| `mistralai/mistral-large`<br />Mistral Large | mistral-large | pdf, text | text | tools, schema, temperature | context: 128000 / output: 128000 | input: 2 / output: 6 / cache_read: 0.2 | 2024-02-26 |
| `mistralai/mistral-large-2407`<br />Mistral Large 2407 | mistral-large | pdf, text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 2 / output: 6 / cache_read: 0.2 | 2024-11-19 |
| `mistralai/mistral-large-2512`<br />Mistral Large 3 | mistral-large | image, pdf, text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 / cache_read: 0.05 | 2025-12-02 |
| `mistralai/mistral-medium-3`<br />Mistral Medium 3 | mistral-medium | image, pdf, text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.04 | 2025-05-07 |
| `mistralai/mistral-medium-3-5`<br />Mistral Medium 3.5 | mistral-medium | image, pdf, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 262144 | input: 1.5 / output: 7.5 | 2026-04-30 |
| `mistralai/mistral-medium-3.1`<br />Mistral Medium 3.1 | mistral-medium | image, pdf, text | text | tools, schema, temperature | context: 131072 / output: 262144 | input: 0.4 / output: 2 / cache_read: 0.04 | 2025-08-13 |
| `mistralai/mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.02 / output: 0.03 | 2024-07-01 |
| `mistralai/mistral-saba`<br />Saba | mistral | pdf, text | text | tools, schema, temperature | context: 32768 / output: 32768 | input: 0.2 / output: 0.6 / cache_read: 0.02 | 2025-02-17 |
| `mistralai/mistral-small-24b-instruct-2501`<br />Mistral Small 3 | mistral-small | text | text | schema, temperature, open weights | context: 32768 / output: 16384 | input: 0.05 / output: 0.08 | 2025-01-30 |
| `mistralai/mistral-small-2603`<br />Mistral Small 4 | mistral-small | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-03-16 |
| `mistralai/mistral-small-3.1-24b-instruct`<br />Mistral Small 3.1 24B | mistral-small | image, text | text | temperature, open weights | context: 128000 / output: 128000 | input: 0.351 / output: 0.555 | 2025-03-17 |
| `mistralai/mistral-small-3.2-24b-instruct`<br />Mistral Small 3.2 24B | mistral-small | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 16384 | input: 0.075 / output: 0.2 | 2025-06-20 |
| `mistralai/mixtral-8x22b-instruct`<br />Mixtral 8x22B Instruct | mistral | pdf, text | text | tools, schema, temperature, open weights | context: 65536 / output: 65536 | input: 2 / output: 6 / cache_read: 0.2 | 2024-04-17 |
| `mistralai/voxtral-small-24b-2507`<br />Voxtral Small 24B 2507 | mistral | audio, pdf, text | text | tools, schema, temperature, open weights | context: 32000 / output: 32000 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2025-10-30 |
| `moonshotai/kimi-k2`<br />Kimi K2 0711 | kimi-k2 | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.57 / output: 2.3 | 2025-07-11 |
| `moonshotai/kimi-k2-0905`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2025-09-04 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 / cache_read: 0.6 | 2025-11-06 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.375 / output: 2.025 | 2026-01 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.66 / output: 3.41 / cache_read: 0.144 | 2026-04-21 |
| `moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.74 / output: 3.5 / cache_read: 0.15 | 2026-06-12 |
| `morph/morph-v3-fast`<br />Morph V3 Fast | morph | text | text | temperature | context: 81920 / output: 38000 | input: 0.8 / output: 1.2 | 2025-07-07 |
| `morph/morph-v3-large`<br />Morph V3 Large | morph | text | text | schema, temperature | context: 262144 / output: 131072 | input: 0.9 / output: 1.9 | 2025-07-07 |
| `nex-agi/nex-n2-pro`<br />Nex-N2-Pro | agi | image, text | text | reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.25 / output: 1 / cache_read: 0.025 | 2026-06-08 |
| `nousresearch/hermes-3-llama-3.1-405b`<br />Hermes 3 405B Instruct | nousresearch | text | text | schema, temperature, open weights | context: 131072 / output: 16384 | input: 1 / output: 1 | 2024-08-16 |
| `nousresearch/hermes-3-llama-3.1-405b:free`<br />Hermes 3 405B Instruct (free) | hermes | text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2024-08-16 |
| `nousresearch/hermes-3-llama-3.1-70b`<br />Hermes 3 70B Instruct | nousresearch | text | text | schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.7 / output: 0.7 | 2024-08-18 |
| `nousresearch/hermes-4-405b`<br />Hermes 4 405B | hermes | text | text | reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 1 / output: 3 | 2025-08-26 |
| `nousresearch/hermes-4-70b`<br />Hermes 4 70B | hermes | text | text | reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.13 / output: 0.4 | 2025-08-26 |
| `nvidia/llama-3.3-nemotron-super-49b-v1.5`<br />Llama 3.3 Nemotron Super 49B v1.5 | nemotron | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.4 / output: 0.4 | 2025-07-25 |
| `nvidia/nemotron-3-nano-30b-a3b`<br />Nemotron 3 Nano 30B A3B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 228000 | input: 0.05 / output: 0.2 | 2025-12-15 |
| `nvidia/nemotron-3-nano-30b-a3b:free`<br />Nemotron 3 Nano 30B A3B (free) | nemotron | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0 / output: 0 | 2025-12-15 |
| `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`<br />Nemotron 3 Nano Omni (free) | nemotron | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 0 / output: 0 | 2026-04-28 |
| `nvidia/nemotron-3-super-120b-a12b`<br />Nemotron 3 Super 120B A12B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.085 / output: 0.4 | 2026-03-11 |
| `nvidia/nemotron-3-super-120b-a12b:free`<br />Nemotron 3 Super (free) | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2026-03-11 |
| `nvidia/nemotron-3-ultra-550b-a55b`<br />Nemotron 3 Ultra 550B A55B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.5 / output: 2.2 / cache_read: 0.1 | 2026-06-04 |
| `nvidia/nemotron-3-ultra-550b-a55b:free`<br />Nemotron 3 Ultra (free) | nemotron | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 65536 | input: 0 / output: 0 | 2026-06-04 |
| `nvidia/nemotron-3.5-content-safety:free`<br />Nemotron 3.5 Content Safety (free) | nemotron | image, text | text | reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2026-06-04 |
| `nvidia/nemotron-nano-12b-v2-vl:free`<br />Nemotron Nano 12B 2 VL (free) | nemotron | image, text, video | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0 / output: 0 | 2025-10-28 |
| `nvidia/nemotron-nano-9b-v2:free`<br />Nemotron Nano 9B V2 (free) | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0 / output: 0 | 2025-08-18 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5-turbo | gpt | text | text | tools, schema, temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 | 2023-11-06 |
| `openai/gpt-3.5-turbo-0613`<br />GPT-3.5 Turbo (older v0613) | gpt | text | text | tools, schema, temperature | context: 4095 / output: 4096 | input: 1 / output: 2 | 2024-01-25 |
| `openai/gpt-3.5-turbo-16k`<br />GPT-3.5 Turbo 16k | gpt | text | text | tools, schema, temperature | context: 16385 / output: 4096 | input: 3 / output: 4 | 2023-08-28 |
| `openai/gpt-3.5-turbo-instruct`<br />GPT-3.5 Turbo Instruct | gpt | text | text | schema, temperature | context: 4095 / output: 4096 | input: 1.5 / output: 2 | 2023-09-28 |
| `openai/gpt-4`<br />GPT-4 | gpt | text | text | tools, schema, temperature | context: 8191 / output: 4096 | input: 30 / output: 60 | 2024-04-09 |
| `openai/gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `openai/gpt-4-turbo-preview`<br />GPT-4 Turbo Preview | gpt | text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-01-25 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2024-08-06 |
| `openai/gpt-4o-2024-05-13`<br />GPT-4o (2024-05-13) | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 5 / output: 15 | 2024-05-13 |
| `openai/gpt-4o-2024-08-06`<br />GPT-4o (2024-08-06) | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai/gpt-4o-2024-11-20`<br />GPT-4o (2024-11-20) | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-11-20 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `openai/gpt-4o-mini-2024-07-18`<br />GPT-4o-mini (2024-07-18) | o-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `openai/gpt-4o-mini-search-preview`<br />GPT-4o-mini Search Preview | o-mini | text | text | schema | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2025-03-12 |
| `openai/gpt-4o-search-preview`<br />GPT-4o Search Preview | gpt | text | text | schema | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2025-03-12 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-chat`<br />GPT-5 Chat | gpt-codex | image, pdf, text | text | schema | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `openai/gpt-5-image`<br />GPT-5 Image | gpt | image, pdf, text | image, text | schema, reasoning, temperature | context: 400000 / output: 128000 | input: 10 / output: 10 / cache_read: 1.25 | 2025-10-14 |
| `openai/gpt-5-image-mini`<br />GPT-5 Image Mini | gpt | image, pdf, text | image, text | schema, reasoning, temperature | context: 400000 / output: 128000 | input: 2.5 / output: 2 / cache_read: 0.25 | 2025-10-16 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.01 | 2025-08-07 |
| `openai/gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 15 / output: 120 | 2025-10-06 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-11-13 |
| `openai/gpt-5.1-chat`<br />GPT-5.1 Chat | gpt-codex | image, pdf, text | text | tools, schema | context: 128000 / output: 32000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 100000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-chat`<br />GPT-5.2 Chat | gpt-codex | image, pdf, text | text | tools, schema | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-10 |
| `openai/gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-pro`<br />GPT-5.2 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai/gpt-5.3-chat`<br />GPT-5.3 Chat | gpt | image, pdf, text | text | tools, schema | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-03 |
| `openai/gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-image-2`<br />GPT-5.4 Image 2 | gpt | image, pdf, text | image, text | schema, reasoning | context: 272000 / output: 128000 | input: 8 / output: 15 / cache_read: 2 | 2026-04-21 |
| `openai/gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `openai/gpt-audio`<br />GPT Audio | gpt | audio, text | audio, text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2026-01-19 |
| `openai/gpt-audio-mini`<br />GPT Audio Mini | o-mini | audio, text | audio, text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.6 / output: 2.4 | 2026-01-19 |
| `openai/gpt-chat-latest`<br />GPT Chat Latest | gpt | image, pdf, text | text | tools, schema | context: 400000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-05 |
| `openai/gpt-oss-120b`<br />gpt-oss-120b | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.03 / output: 0.15 | 2025-08-05 |
| `openai/gpt-oss-120b:free`<br />gpt-oss-120b (free) | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />gpt-oss-20b | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.029 / output: 0.14 | 2025-08-05 |
| `openai/gpt-oss-20b:free`<br />gpt-oss-20b (free) | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0 / output: 0 | 2025-08-05 |
| `openai/gpt-oss-safeguard-20b`<br />gpt-oss-safeguard-20b | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.075 / output: 0.3 / cache_read: 0.0375 | 2025-10-29 |
| `openai/o1`<br />o1 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `openai/o1-pro`<br />o1-pro | o-pro | image, pdf, text | text | schema, reasoning | context: 200000 / output: 100000 | input: 150 / output: 600 | 2025-03-19 |
| `openai/o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai/o3-deep-research`<br />o3-deep-research | o | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 100000 | input: 10 / output: 40 / cache_read: 2.5 | 2024-06-26 |
| `openai/o3-mini`<br />o3-mini | o-mini | pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `openai/o3-mini-high`<br />o3 Mini High | o | pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-02-12 |
| `openai/o3-pro`<br />o3-pro | o-pro | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 20 / output: 80 | 2025-06-10 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `openai/o4-mini-deep-research`<br />o4-mini-deep-research | o-mini | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2024-06-26 |
| `openai/o4-mini-high`<br />o4 Mini High | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `openrouter/auto`<br />Auto Router | auto | audio, image, pdf, text, video | image, text | tools, schema, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2023-11-08 |
| `openrouter/bodybuilder`<br />Body Builder (beta) | - | text | text | - | context: 128000 / output: 128000 | - | 2025-12-05 |
| `openrouter/free`<br />Free Models Router | - | image, text | text | tools, schema, reasoning, temperature | context: 200000 / input: 200000 / output: 8000 | input: 0 / output: 0 | 2026-02-01 |
| `openrouter/fusion`<br />Fusion | - | text | text | - | context: 1000000 / output: 128000 | - | 2026-06-13 |
| `openrouter/owl-alpha`<br />Owl Alpha | alpha | text | text | tools, schema, temperature | context: 1048756 / output: 262144 | input: 0 / output: 0 | 2026-04-28 |
| `openrouter/pareto-code`<br />Pareto Code Router | - | text | text | - | context: 2000000 / output: 200000 | - | 2026-04-21 |
| `perceptron/perceptron-mk1`<br />Perceptron Mk1 | - | image, text, video | text | schema, reasoning, temperature | context: 32768 / output: 8192 | input: 0.15 / output: 1.5 | 2026-05-12 |
| `perplexity/sonar`<br />Sonar | sonar | image, text | text | temperature | context: 127072 / output: 127072 | input: 1 / output: 1 | 2025-01-27 |
| `perplexity/sonar-deep-research`<br />Sonar Deep Research | sonar-deep-research | text | text | reasoning, temperature | context: 128000 / output: 128000 | input: 2 / output: 8 / reasoning: 3 | 2025-03-07 |
| `perplexity/sonar-pro`<br />Sonar Pro | sonar-pro | image, text | text | temperature | context: 200000 / output: 8000 | input: 3 / output: 15 | 2025-03-07 |
| `perplexity/sonar-pro-search`<br />Sonar Pro Search | sonar-pro | image, text | text | schema, reasoning, temperature | context: 200000 / output: 8000 | input: 3 / output: 15 | 2025-10-30 |
| `perplexity/sonar-reasoning-pro`<br />Sonar Reasoning Pro | sonar-reasoning | image, text | text | reasoning, temperature | context: 128000 / output: 128000 | input: 2 / output: 8 | 2025-03-07 |
| `poolside/laguna-m.1`<br />Laguna M.1 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.2 / output: 0.4 / cache_read: 0.1 | 2026-04-28 |
| `poolside/laguna-m.1:free`<br />Laguna M.1 (free) | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 | 2026-04-28 |
| `poolside/laguna-xs.2`<br />Laguna XS.2 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.1 / output: 0.2 / cache_read: 0.05 | 2026-04-28 |
| `poolside/laguna-xs.2:free`<br />Laguna XS.2 (free) | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 | 2026-04-28 |
| `qwen/qwen-2.5-72b-instruct`<br />Qwen2.5 72B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 32768 / output: 16384 | input: 0.36 / output: 0.4 | 2024-09-19 |
| `qwen/qwen-2.5-7b-instruct`<br />Qwen2.5 7B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.04 / output: 0.1 | 2024-10-16 |
| `qwen/qwen-2.5-coder-32b-instruct`<br />Qwen2.5 Coder 32B Instruct | qwen | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.66 / output: 1 | 2024-11-11 |
| `qwen/qwen-plus`<br />Qwen Plus | qwen | text | text | tools, schema, temperature | context: 1000000 / output: 32768 | input: 0.26 / output: 0.78 / cache_read: 0.052 / cache_write: 0.325 | 2025-09-11 |
| `qwen/qwen-plus-2025-07-28`<br />Qwen Plus 0728 | qwen | text | text | tools, schema, temperature | context: 1000000 / output: 32768 | input: 0.26 / output: 0.78 | 2025-09-08 |
| `qwen/qwen-plus-2025-07-28:thinking`<br />Qwen Plus 0728 (thinking) | qwen | text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.26 / output: 0.78 / cache_write: 0.325 | 2025-09-08 |
| `qwen/qwen2.5-vl-72b-instruct`<br />Qwen2.5 VL 72B Instruct | qwen | image, text | text | schema, temperature, open weights | context: 128000 / output: 128000 | input: 0.8 / output: 1 / cache_read: 0.4 | 2025-02-01 |
| `qwen/qwen3-14b`<br />Qwen3 14B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.1 / output: 0.24 | 2025-04-28 |
| `qwen/qwen3-235b-a22b`<br />Qwen3 235B-A22B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.455 / output: 1.82 | 2025-04 |
| `qwen/qwen3-235b-a22b-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 16384 | input: 0.09 / output: 0.1 | 2025-07-21 |
| `qwen/qwen3-235b-a22b-thinking-2507`<br />Qwen3 235B A22B Thinking 2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.1 / cache_read: 0.1 | 2025-07-25 |
| `qwen/qwen3-30b-a3b`<br />Qwen3 30B A3B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 16384 | input: 0.12 / output: 0.5 | 2025-04-28 |
| `qwen/qwen3-30b-a3b-instruct-2507`<br />Qwen3 30B A3B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 128000 / output: 32000 | input: 0.04815 / output: 0.19305 | 2025-07-29 |
| `qwen/qwen3-30b-a3b-thinking-2507`<br />Qwen3 30B A3B Thinking 2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.08 / output: 0.4 / cache_read: 0.08 | 2025-08-28 |
| `qwen/qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 16384 | input: 0.08 / output: 0.28 | 2025-04 |
| `qwen/qwen3-8b`<br />Qwen3 8B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 8192 | input: 0.05 / output: 0.4 / cache_read: 0.05 | 2025-04-28 |
| `qwen/qwen3-coder`<br />Qwen3 Coder 480B A35B | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.22 / output: 1.8 | 2025-07-23 |
| `qwen/qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 160000 / output: 32768 | input: 0.07 / output: 0.27 | 2025-04 |
| `qwen/qwen3-coder-flash`<br />Qwen3 Coder Flash | qwen | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 0.195 / output: 0.975 / cache_read: 0.039 / cache_write: 0.24375 | 2025-07-28 |
| `qwen/qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.11 / output: 0.8 / cache_read: 0.07 | 2026-02-04 |
| `qwen/qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, schema, temperature | context: 1000000 / output: 65536 | input: 0.65 / output: 3.25 / cache_read: 0.13 / cache_write: 0.8125 | 2025-07-23 |
| `qwen/qwen3-coder:free`<br />Qwen3 Coder 480B A35B (free) | qwen | text | text | tools, temperature, open weights | context: 262000 / output: 262000 | input: 0 / output: 0 | 2025-07-23 |
| `qwen/qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, schema, temperature | context: 262144 / output: 32768 | input: 0.78 / output: 3.9 / cache_read: 0.156 / cache_write: 0.975 | 2025-09-23 |
| `qwen/qwen3-max-thinking`<br />Qwen3 Max Thinking | qwen | text | text | tools, schema, reasoning, temperature | context: 262144 / output: 32768 | input: 0.78 / output: 3.9 | 2026-02-09 |
| `qwen/qwen3-next-80b-a3b-instruct`<br />Qwen3-Next 80B-A3B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 16384 | input: 0.09 / output: 1.1 | 2025-09 |
| `qwen/qwen3-next-80b-a3b-instruct:free`<br />Qwen3 Next 80B A3B Instruct (free) | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2025-09 |
| `qwen/qwen3-next-80b-a3b-thinking`<br />Qwen3-Next 80B-A3B (Thinking) | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.0975 / output: 0.78 | 2025-09 |
| `qwen/qwen3-vl-235b-a22b-instruct`<br />Qwen3 VL 235B A22B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 262144 / output: 16384 | input: 0.2 / output: 0.88 / cache_read: 0.11 | 2025-09-23 |
| `qwen/qwen3-vl-235b-a22b-thinking`<br />Qwen3 VL 235B A22B Thinking | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.26 / output: 2.6 | 2025-09-23 |
| `qwen/qwen3-vl-30b-a3b-instruct`<br />Qwen3 VL 30B A3B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.13 / output: 0.52 | 2025-10-06 |
| `qwen/qwen3-vl-30b-a3b-thinking`<br />Qwen3 VL 30B A3B Thinking | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.13 / output: 1.56 | 2025-10-06 |
| `qwen/qwen3-vl-32b-instruct`<br />Qwen3 VL 32B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.104 / output: 0.416 | 2025-10-23 |
| `qwen/qwen3-vl-8b-instruct`<br />Qwen3 VL 8B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.08 / output: 0.5 | 2025-10-14 |
| `qwen/qwen3-vl-8b-thinking`<br />Qwen3 VL 8B Thinking | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.117 / output: 1.365 | 2025-10-14 |
| `qwen/qwen3.5-122b-a10b`<br />Qwen3.5 122B-A10B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.26 / output: 2.08 | 2026-02-23 |
| `qwen/qwen3.5-27b`<br />Qwen3.5 27B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.195 / output: 1.56 | 2026-02-23 |
| `qwen/qwen3.5-35b-a3b`<br />Qwen3.5 35B-A3B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 81920 | input: 0.14 / output: 1 / cache_read: 0.05 | 2026-02-23 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 64000 | input: 0.385 / output: 2.45 | 2026-02-15 |
| `qwen/qwen3.5-9b`<br />Qwen3.5 9B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.15 | 2026-02-23 |
| `qwen/qwen3.5-flash-02-23`<br />Qwen3.5-Flash | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.065 / output: 0.26 | 2026-02-25 |
| `qwen/qwen3.5-plus-02-15`<br />Qwen3.5 Plus 2026-02-15 | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.26 / output: 1.56 | 2026-02-16 |
| `qwen/qwen3.5-plus-20260420`<br />Qwen3.5 Plus 2026-04-20 | qwen3.5 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.3 / output: 1.8 / cache_write: 0.375 | 2026-04-27 |
| `qwen/qwen3.6-27b`<br />Qwen3.6 27B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262140 / output: 262140 | input: 0.2885 / output: 3.17 | 2026-04-22 |
| `qwen/qwen3.6-35b-a3b`<br />Qwen3.6 35B-A3B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.14 / output: 1 | 2026-04-17 |
| `qwen/qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.1875 / output: 1.125 / cache_write: 0.234375 | 2026-04-27 |
| `qwen/qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen | text | text | tools, schema, reasoning, temperature | context: 262144 / output: 65536 | input: 1.04 / output: 6.24 / cache_write: 1.3 | 2026-04-20 |
| `qwen/qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.325 / output: 1.95 / cache_write: 0.40625 | 2026-04-02 |
| `qwen/qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.25 / output: 3.75 / cache_read: 0.25 / cache_write: 1.5625 | 2026-05-21 |
| `qwen/qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.32 / output: 1.28 / cache_read: 0.064 / cache_write: 0.4 | 2026-06-02 |
| `rekaai/reka-edge`<br />Reka Edge | reka | image, text, video | text | tools, schema, temperature, open weights | context: 16384 / output: 16384 | input: 0.1 / output: 0.1 | 2026-03-20 |
| `rekaai/reka-flash-3`<br />Reka Flash 3 | reka | text | text | schema, reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.1 / output: 0.2 | 2025-03-12 |
| `relace/relace-apply-3`<br />Relace Apply 3 | - | text | text | - | context: 256000 / output: 128000 | input: 0.85 / output: 1.25 | 2025-09-26 |
| `relace/relace-search`<br />Relace Search | - | text | text | tools, temperature | context: 256000 / output: 128000 | input: 1 / output: 3 | 2025-12-08 |
| `sakana/fugu-ultra`<br />Fugu Ultra | - | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-06-24 |
| `sao10k/l3-lunaris-8b`<br />Llama 3 8B Lunaris | llama | text | text | schema, temperature, open weights | context: 8192 / output: 16384 | input: 0.04 / output: 0.05 | 2024-08-13 |
| `sao10k/l3.1-70b-hanami-x1`<br />Llama 3.1 70B Hanami x1 | llama | text | text | schema, temperature, open weights | context: 16000 / output: 16000 | input: 3 / output: 3 | 2025-01-08 |
| `sao10k/l3.1-euryale-70b`<br />Llama 3.1 Euryale 70B v2.2 | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.85 / output: 0.85 | 2024-08-28 |
| `sao10k/l3.3-euryale-70b`<br />Llama 3.3 Euryale 70B | llama | text | text | schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.65 / output: 0.75 | 2024-12-18 |
| `stepfun/step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.09 / output: 0.3 / cache_read: 0.02 | 2026-02-13 |
| `stepfun/step-3.7-flash`<br />Step 3.7 Flash | - | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.2 / output: 1.15 / cache_read: 0.04 | 2026-05-29 |
| `switchpoint/router`<br />Switchpoint Router | - | text | text | reasoning, temperature | context: 131072 / output: 131072 | input: 0.85 / output: 3.4 | 2025-07-11 |
| `tencent/hunyuan-a13b-instruct`<br />Hunyuan A13B Instruct | hunyuan | text | text | schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.14 / output: 0.57 | 2025-07-08 |
| `tencent/hy3-preview`<br />Hy3 preview | Hy | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.063 / output: 0.21 / cache_read: 0.021 | 2026-04-20 |
| `thedrummer/cydonia-24b-v4.1`<br />Cydonia 24B V4.1 | - | text | text | schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.3 / output: 0.5 / cache_read: 0.15 | 2025-09-27 |
| `thedrummer/rocinante-12b`<br />Rocinante 12B | - | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.25 / output: 0.5 | 2024-09-30 |
| `thedrummer/skyfall-36b-v2`<br />Skyfall 36B V2 | - | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.55 / output: 0.8 / cache_read: 0.25 | 2025-03-10 |
| `thedrummer/unslopnemo-12b`<br />UnslopNemo 12B | - | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.4 / output: 0.4 | 2024-11-08 |
| `undi95/remm-slerp-l2-13b`<br />ReMM SLERP 13B | - | text | text | schema, temperature, open weights | context: 6144 / output: 4096 | input: 0.45 / output: 0.65 | 2023-07-22 |
| `upstage/solar-pro-3`<br />Solar Pro 3 | solar-pro | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 128000 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-01-27 |
| `writer/palmyra-x5`<br />Palmyra X5 | palmyra | text | text | temperature | context: 1040000 / output: 8192 | input: 0.6 / output: 6 | 2026-01-21 |
| `x-ai/grok-4.20`<br />Grok 4.20 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-31 |
| `x-ai/grok-4.20-multi-agent`<br />Grok 4.20 Multi-Agent | grok | image, pdf, text | text | schema, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-31 |
| `x-ai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `x-ai/grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-04-16 |
| `xiaomi/mimo-v2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 32000 / output: 131072 | input: 0.105 / output: 0.28 | 2026-04-22 |
| `xiaomi/mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.435 / output: 0.87 / cache_read: 0.0036 | 2026-04-22 |
| `z-ai/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-07-28 |
| `z-ai/glm-4.5-air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.13 / output: 0.85 / cache_read: 0.025 | 2025-07-28 |
| `z-ai/glm-4.5v`<br />GLM-4.5V | glm | image, text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.6 / output: 1.8 / cache_read: 0.11 | 2025-08-11 |
| `z-ai/glm-4.6`<br />GLM-4.6 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.43 / output: 1.74 / cache_read: 0.08 | 2025-09-30 |
| `z-ai/glm-4.6v`<br />GLM-4.6V | glm | image, text, video | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 0.9 / cache_read: 0.055 | 2025-12-08 |
| `z-ai/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.4 / output: 1.75 / cache_read: 0.08 | 2025-12-22 |
| `z-ai/glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 0.06 / output: 0.4 / cache_read: 0.01 | 2026-01-19 |
| `z-ai/glm-5`<br />GLM-5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 128000 | input: 0.6 / output: 1.92 / cache_read: 0.12 | 2026-02-12 |
| `z-ai/glm-5-turbo`<br />GLM-5-Turbo | glm | text | text | tools, reasoning, temperature | context: 262144 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-03-16 |
| `z-ai/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 128000 | input: 0.98 / output: 3.08 / cache_read: 0.182 | 2026-04-07 |
| `z-ai/glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 32768 | input: 0.95 / output: 3 / cache_read: 0.18 | 2026-06-13 |
| `z-ai/glm-5v-turbo`<br />GLM-5V-Turbo | glm | image, text, video | text | tools, reasoning, temperature | context: 202752 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

