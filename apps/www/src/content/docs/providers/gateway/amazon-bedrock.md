---
title: "Amazon Bedrock"
description: "Review Amazon Bedrock connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1010
  label: "Amazon Bedrock"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `AWS_ACCESS_KEY_ID`, `AWS_BEARER_TOKEN_BEDROCK`, `AWS_REGION`, `AWS_SECRET_ACCESS_KEY` |
| Provider docs | [https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html) |
| Models | 98 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 53 / 98 models |
| Tools | 97 / 98 models |
| Structured output | 62 / 98 models |
| Reasoning | 68 / 98 models |
| Temperature | 82 / 98 models |
| Open weights | 30 / 98 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `amazon.nova-2-lite-v1:0`<br />Nova 2 Lite | nova | image, text, video | text | tools, reasoning, temperature | context: 128000 / output: 4096 | input: 0.33 / output: 2.75 | 2024-12-01 |
| `amazon.nova-lite-v1:0`<br />Nova Lite | nova-lite | image, text, video | text | tools, temperature | context: 300000 / output: 8192 | input: 0.06 / output: 0.24 / cache_read: 0.015 | 2024-12-03 |
| `amazon.nova-micro-v1:0`<br />Nova Micro | nova-micro | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.035 / output: 0.14 / cache_read: 0.00875 | 2024-12-03 |
| `amazon.nova-pro-v1:0`<br />Nova Pro | nova-pro | image, text, video | text | tools, temperature | context: 300000 / output: 8192 | input: 0.8 / output: 3.2 / cache_read: 0.2 | 2024-12-03 |
| `anthropic.claude-haiku-4-5-20251001-v1:0`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic.claude-opus-4-1-20250805-v1:0`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic.claude-opus-4-5-20251101-v1:0`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-08-01 |
| `anthropic.claude-opus-4-6-v1`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic.claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic.claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic.claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `au.anthropic.claude-haiku-4-5-20251001-v1:0`<br />Claude Haiku 4.5 (AU) | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `au.anthropic.claude-opus-4-6-v1`<br />AU Anthropic Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 16.5 / output: 82.5 / cache_read: 1.65 / cache_write: 20.625 | 2026-02-05 |
| `au.anthropic.claude-opus-4-8`<br />Claude Opus 4.8 (AU) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `au.anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 (AU) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `au.anthropic.claude-sonnet-4-6`<br />AU Anthropic Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 3.3 / output: 16.5 / cache_read: 0.33 / cache_write: 4.125 | 2026-02-17 |
| `deepseek.r1-v1:0`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 1.35 / output: 5.4 | 2025-05-29 |
| `deepseek.v3-v1:0`<br />DeepSeek-V3.1 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 81920 | input: 0.58 / output: 1.68 | 2025-09-18 |
| `deepseek.v3.2`<br />DeepSeek-V3.2 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 81920 | input: 0.62 / output: 1.85 | 2026-02-06 |
| `eu.anthropic.claude-fable-5`<br />Claude Fable 5 (EU) | claude-fable | image, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 11 / output: 55 / cache_read: 1.1 / cache_write: 13.75 | 2026-06-09 |
| `eu.anthropic.claude-haiku-4-5-20251001-v1:0`<br />Claude Haiku 4.5 (EU) | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `eu.anthropic.claude-opus-4-5-20251101-v1:0`<br />Claude Opus 4.5 (EU) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-08-01 |
| `eu.anthropic.claude-opus-4-6-v1`<br />Claude Opus 4.6 (EU) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5.5 / output: 27.5 / cache_read: 0.55 / cache_write: 6.875 | 2026-03-13 |
| `eu.anthropic.claude-opus-4-7`<br />Claude Opus 4.7 (EU) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5.5 / output: 27.5 / cache_read: 0.55 / cache_write: 6.875 | 2026-04-16 |
| `eu.anthropic.claude-opus-4-8`<br />Claude Opus 4.8 (EU) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5.5 / output: 27.5 / cache_read: 0.55 / cache_write: 6.875 | 2026-05-28 |
| `eu.anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 (EU) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3.3 / output: 16.5 / cache_read: 0.33 / cache_write: 4.125 | 2025-09-29 |
| `eu.anthropic.claude-sonnet-4-6`<br />Claude Sonnet 4.6 (EU) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3.3 / output: 16.5 / cache_read: 0.33 / cache_write: 4.125 | 2026-03-13 |
| `global.anthropic.claude-fable-5`<br />Claude Fable 5 (Global) | claude-fable | image, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `global.anthropic.claude-haiku-4-5-20251001-v1:0`<br />Claude Haiku 4.5 (Global) | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `global.anthropic.claude-opus-4-5-20251101-v1:0`<br />Claude Opus 4.5 (Global) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-08-01 |
| `global.anthropic.claude-opus-4-6-v1`<br />Claude Opus 4.6 (Global) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `global.anthropic.claude-opus-4-7`<br />Claude Opus 4.7 (Global) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `global.anthropic.claude-opus-4-8`<br />Claude Opus 4.8 (Global) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `global.anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 (Global) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `global.anthropic.claude-sonnet-4-6`<br />Claude Sonnet 4.6 (Global) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `google.gemma-3-12b-it`<br />Google Gemma 3 12B | gemma | image, text | text | schema, temperature | context: 131072 / output: 8192 | input: 0.049999999999999996 / output: 0.09999999999999999 | 2024-12-01 |
| `google.gemma-3-27b-it`<br />Google Gemma 3 27B Instruct | gemma | image, text | text | tools, schema, temperature, open weights | context: 202752 / output: 8192 | input: 0.12 / output: 0.2 | 2025-07-27 |
| `google.gemma-3-4b-it`<br />Gemma 3 4B IT | gemma | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 0.04 / output: 0.08 | 2024-12-01 |
| `jp.anthropic.claude-opus-4-7`<br />Claude Opus 4.7 (JP) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `jp.anthropic.claude-opus-4-8`<br />Claude Opus 4.8 (JP) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `jp.anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 (JP) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `jp.anthropic.claude-sonnet-4-6`<br />Claude Sonnet 4.6 (JP) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `meta.llama3-1-70b-instruct-v1:0`<br />Llama 3.1 70B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.72 / output: 0.72 | 2024-07-23 |
| `meta.llama3-1-8b-instruct-v1:0`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.22 / output: 0.22 | 2024-07-23 |
| `meta.llama3-3-70b-instruct-v1:0`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.72 / output: 0.72 | 2024-12-06 |
| `meta.llama4-maverick-17b-instruct-v1:0`<br />Llama 4 Maverick 17B Instruct | llama | image, text | text | tools, temperature, open weights | context: 1000000 / output: 16384 | input: 0.24 / output: 0.97 | 2025-04-05 |
| `meta.llama4-scout-17b-instruct-v1:0`<br />Llama 4 Scout 17B Instruct | llama | image, text | text | tools, temperature, open weights | context: 3500000 / output: 16384 | input: 0.17 / output: 0.66 | 2025-04-05 |
| `minimax.minimax-m2`<br />MiniMax M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204608 / output: 128000 | input: 0.3 / output: 1.2 | 2025-10-27 |
| `minimax.minimax-m2.1`<br />MiniMax M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2025-12-23 |
| `minimax.minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 98304 | input: 0.3 / output: 1.2 | 2026-03-18 |
| `mistral.devstral-2-123b`<br />Devstral 2 123B | devstral | text | text | tools, schema, temperature, open weights | context: 256000 / output: 8192 | input: 0.4 / output: 2 | 2026-02-17 |
| `mistral.magistral-small-2509`<br />Magistral Small 1.2 | magistral | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 40000 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral.ministral-3-14b-instruct`<br />Ministral 14B 3.0 | ministral | text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 0.2 / output: 0.2 | 2024-12-01 |
| `mistral.ministral-3-3b-instruct`<br />Ministral 3 3B | ministral | image, text | text | tools, schema, temperature, open weights | context: 256000 / output: 8192 | input: 0.1 / output: 0.1 | 2025-12-02 |
| `mistral.ministral-3-8b-instruct`<br />Ministral 3 8B | ministral | text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 0.15 / output: 0.15 | 2024-12-01 |
| `mistral.mistral-large-3-675b-instruct`<br />Mistral Large 3 | mistral | image, text | text | tools, schema, temperature, open weights | context: 256000 / output: 8192 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral.pixtral-large-2502-v1:0`<br />Pixtral Large (25.02) | mistral | image, text | text | tools, temperature | context: 128000 / output: 8192 | input: 2 / output: 6 | 2025-04-08 |
| `mistral.voxtral-mini-3b-2507`<br />Voxtral Mini 3B 2507 | mistral | audio, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 0.04 / output: 0.04 | 2024-12-01 |
| `mistral.voxtral-small-24b-2507`<br />Voxtral Small 24B 2507 | mistral | audio, text | text | tools, schema, temperature, open weights | context: 32000 / output: 8192 | input: 0.15 / output: 0.35 | 2025-07-01 |
| `moonshot.kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262143 / output: 16000 | input: 0.6 / output: 2.5 | 2025-12-02 |
| `moonshotai.kimi-k2.5`<br />Kimi K2.5 | kimi | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262143 / output: 16000 | input: 0.6 / output: 3 | 2026-02-06 |
| `nvidia.nemotron-nano-12b-v2`<br />NVIDIA Nemotron Nano 12B v2 VL BF16 | nemotron | image, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 0.2 / output: 0.6 | 2024-12-01 |
| `nvidia.nemotron-nano-3-30b`<br />NVIDIA Nemotron Nano 3 30B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0.06 / output: 0.24 | 2025-12-23 |
| `nvidia.nemotron-nano-9b-v2`<br />NVIDIA Nemotron Nano 9B v2 | nemotron | text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 0.06 / output: 0.23 | 2024-12-01 |
| `nvidia.nemotron-super-3-120b`<br />NVIDIA Nemotron 3 Super 120B A12B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.15 / output: 0.65 | 2026-03-11 |
| `openai.gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 272000 / output: 128000 | input: 2.75 / output: 16.5 / cache_read: 0.275 | 2026-06-01 |
| `openai.gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 272000 / output: 128000 | input: 5.5 / output: 33 / cache_read: 0.55 | 2026-06-01 |
| `openai.gpt-oss-120b`<br />gpt-oss-120b | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2025-08-05 |
| `openai.gpt-oss-120b-1:0`<br />gpt-oss-120b | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2025-08-05 |
| `openai.gpt-oss-20b`<br />gpt-oss-20b | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 0.07 / output: 0.3 | 2025-08-05 |
| `openai.gpt-oss-20b-1:0`<br />gpt-oss-20b | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 128000 / output: 16384 | input: 0.07 / output: 0.3 | 2025-08-05 |
| `openai.gpt-oss-safeguard-120b`<br />GPT OSS Safeguard 120B | gpt-oss | text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2025-10-29 |
| `openai.gpt-oss-safeguard-20b`<br />GPT OSS Safeguard 20B | gpt-oss | text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.07 / output: 0.2 | 2025-10-29 |
| `qwen.qwen3-235b-a22b-2507-v1:0`<br />Qwen3 235B A22B 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 131072 | input: 0.22 / output: 0.88 | 2025-09-18 |
| `qwen.qwen3-32b-v1:0`<br />Qwen3 32B (dense) | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 16384 / output: 16384 | input: 0.15 / output: 0.6 | 2025-09-18 |
| `qwen.qwen3-coder-30b-a3b-v1:0`<br />Qwen3 Coder 30B A3B Instruct | qwen | text | text | tools, schema, temperature | context: 262144 / output: 131072 | input: 0.15 / output: 0.6 | 2025-09-18 |
| `qwen.qwen3-coder-480b-a35b-v1:0`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 131072 / output: 65536 | input: 0.22 / output: 1.8 | 2025-09-18 |
| `qwen.qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.22 / output: 1.8 | 2026-02-06 |
| `qwen.qwen3-next-80b-a3b`<br />Qwen/Qwen3-Next-80B-A3B-Instruct | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.14 / output: 1.4 | 2025-11-25 |
| `qwen.qwen3-vl-235b-a22b`<br />Qwen/Qwen3-VL-235B-A22B-Instruct | qwen | image, text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.3 / output: 1.5 | 2025-11-25 |
| `us.anthropic.claude-fable-5`<br />Claude Fable 5 (US) | claude-fable | image, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `us.anthropic.claude-haiku-4-5-20251001-v1:0`<br />Claude Haiku 4.5 (US) | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `us.anthropic.claude-opus-4-1-20250805-v1:0`<br />Claude Opus 4.1 (US) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `us.anthropic.claude-opus-4-5-20251101-v1:0`<br />Claude Opus 4.5 (US) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-08-01 |
| `us.anthropic.claude-opus-4-6-v1`<br />Claude Opus 4.6 (US) | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `us.anthropic.claude-opus-4-7`<br />Claude Opus 4.7 (US) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `us.anthropic.claude-opus-4-8`<br />Claude Opus 4.8 (US) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `us.anthropic.claude-sonnet-4-5-20250929-v1:0`<br />Claude Sonnet 4.5 (US) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `us.anthropic.claude-sonnet-4-6`<br />Claude Sonnet 4.6 (US) | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `us.deepseek.r1-v1:0`<br />DeepSeek-R1 (US) | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 1.35 / output: 5.4 | 2025-05-29 |
| `us.meta.llama4-maverick-17b-instruct-v1:0`<br />Llama 4 Maverick 17B Instruct (US) | llama | image, text | text | tools, temperature, open weights | context: 1000000 / output: 16384 | input: 0.24 / output: 0.97 | 2025-04-05 |
| `us.meta.llama4-scout-17b-instruct-v1:0`<br />Llama 4 Scout 17B Instruct (US) | llama | image, text | text | tools, temperature, open weights | context: 3500000 / output: 16384 | input: 0.17 / output: 0.66 | 2025-04-05 |
| `writer.palmyra-x4-v1:0`<br />Palmyra X4 | palmyra | text | text | tools, reasoning, temperature | context: 122880 / output: 8192 | input: 2.5 / output: 10 | 2025-04-28 |
| `writer.palmyra-x5-v1:0`<br />Palmyra X5 | palmyra | text | text | tools, reasoning, temperature | context: 1040000 / output: 8192 | input: 0.6 / output: 6 | 2025-04-28 |
| `zai.glm-4.7`<br />GLM-4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 | 2025-12-22 |
| `zai.glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai.glm-5`<br />GLM-5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 101376 | input: 1 / output: 3.2 | 2026-03-18 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

