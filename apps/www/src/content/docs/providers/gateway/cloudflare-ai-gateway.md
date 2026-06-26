---
title: "Cloudflare AI Gateway"
description: "Review Cloudflare AI Gateway connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1026
  label: "Cloudflare AI Gateway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_GATEWAY_ID` |
| Provider docs | [https://developers.cloudflare.com/ai-gateway/](https://developers.cloudflare.com/ai-gateway/) |
| Models | 77 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text |
| Output modalities | text |
| Attachments | 34 / 77 models |
| Tools | 37 / 77 models |
| Structured output | 14 / 77 models |
| Reasoning | 27 / 77 models |
| Temperature | 62 / 77 models |
| Open weights | 4 / 77 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-3-5-haiku`<br />Claude Haiku 3.5 (latest) | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `anthropic/claude-3-haiku`<br />Claude Haiku 3 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-13 |
| `anthropic/claude-3-opus`<br />Claude Opus 3 | claude-opus | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2024-02-29 |
| `anthropic/claude-3-sonnet`<br />Claude Sonnet 3 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 0.3 | 2024-03-04 |
| `anthropic/claude-3.5-haiku`<br />Claude Haiku 3.5 (latest) | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `anthropic/claude-3.5-sonnet`<br />Claude Sonnet 3.5 v2 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-10-22 |
| `anthropic/claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `anthropic/claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4-1`<br />Claude Opus 4.1 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4-5`<br />Claude Opus 4.5 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-05 |
| `anthropic/claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-02-17 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5-turbo | gpt | text | text | temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 / cache_read: 1.25 | 2023-11-06 |
| `openai/gpt-4`<br />GPT-4 | gpt | text | text | tools, temperature | context: 8192 / output: 8192 | input: 30 / output: 60 | 2024-04-09 |
| `openai/gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.08 | 2024-07-18 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/o1`<br />o1 | o | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `openai/o3`<br />o3 | o | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai/o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `openai/o3-pro`<br />o3-pro | o-pro | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 20 / output: 80 | 2025-06-10 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.28 | 2025-04-16 |
| `workers-ai/@cf/ai4bharat/indictrans2-en-indic-1B`<br />IndicTrans2 EN-Indic 1B | indictrans | text | text | temperature | context: 128000 / output: 16384 | input: 0.34 / output: 0.34 | 2025-09-25 |
| `workers-ai/@cf/aisingapore/gemma-sea-lion-v4-27b-it`<br />Gemma SEA-LION v4 27B IT | gemma | text | text | temperature | context: 128000 / output: 16384 | input: 0.35 / output: 0.56 | 2025-09-25 |
| `workers-ai/@cf/baai/bge-base-en-v1.5`<br />BGE Base EN v1.5 | bge | text | text | temperature | context: 128000 / output: 16384 | input: 0.067 / output: 0 | 2025-04-03 |
| `workers-ai/@cf/baai/bge-large-en-v1.5`<br />BGE Large EN v1.5 | bge | text | text | temperature | context: 128000 / output: 16384 | input: 0.2 / output: 0 | 2025-04-03 |
| `workers-ai/@cf/baai/bge-m3`<br />BGE M3 | bge | text | text | temperature | context: 128000 / output: 16384 | input: 0.012 / output: 0 | 2025-04-03 |
| `workers-ai/@cf/baai/bge-reranker-base`<br />BGE Reranker Base | bge | text | text | temperature | context: 128000 / output: 16384 | input: 0.0031 / output: 0 | 2025-04-09 |
| `workers-ai/@cf/baai/bge-small-en-v1.5`<br />BGE Small EN v1.5 | bge | text | text | temperature | context: 128000 / output: 16384 | input: 0.02 / output: 0 | 2025-04-03 |
| `workers-ai/@cf/deepgram/aura-2-en`<br />Deepgram Aura 2 (EN) | aura | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/deepgram/aura-2-es`<br />Deepgram Aura 2 (ES) | aura | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/deepgram/nova-3`<br />Deepgram Nova 3 | nova | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`<br />DeepSeek R1 Distill Qwen 32B | deepseek-thinking | text | text | temperature | context: 128000 / output: 16384 | input: 0.5 / output: 4.88 | 2025-04-03 |
| `workers-ai/@cf/facebook/bart-large-cnn`<br />BART Large CNN | bart | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-04-09 |
| `workers-ai/@cf/google/gemma-3-12b-it`<br />Gemma 3 12B IT | gemma | text | text | temperature | context: 128000 / output: 16384 | input: 0.35 / output: 0.56 | 2025-04-11 |
| `workers-ai/@cf/huggingface/distilbert-sst-2-int8`<br />DistilBERT SST-2 INT8 | distilbert | text | text | temperature | context: 128000 / output: 16384 | input: 0.026 / output: 0 | 2025-04-03 |
| `workers-ai/@cf/ibm-granite/granite-4.0-h-micro`<br />IBM Granite 4.0 H Micro | granite | text | text | temperature | context: 128000 / output: 16384 | input: 0.017 / output: 0.11 | 2025-10-15 |
| `workers-ai/@cf/meta/llama-2-7b-chat-fp16`<br />Llama 2 7B Chat FP16 | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.56 / output: 6.67 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3-8b-instruct`<br />Llama 3 8B Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.28 / output: 0.83 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3-8b-instruct-awq`<br />Llama 3 8B Instruct AWQ | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.12 / output: 0.27 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.28 / output: 0.8299999999999998 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.1-8b-instruct-awq`<br />Llama 3.1 8B Instruct AWQ | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.12 / output: 0.27 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.1-8b-instruct-fp8`<br />Llama 3.1 8B Instruct FP8 | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.29 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.2-11b-vision-instruct`<br />Llama 3.2 11B Vision Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.049 / output: 0.68 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.2-1b-instruct`<br />Llama 3.2 1B Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.027 / output: 0.2 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.051 / output: 0.34 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-3.3-70b-instruct-fp8-fast`<br />Llama 3.3 70B Instruct FP8 Fast | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.29 / output: 2.25 | 2025-04-03 |
| `workers-ai/@cf/meta/llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout 17B 16E Instruct | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.27 / output: 0.85 | 2025-04-16 |
| `workers-ai/@cf/meta/llama-guard-3-8b`<br />Llama Guard 3 8B | llama | text | text | temperature | context: 128000 / output: 16384 | input: 0.48 / output: 0.03 | 2025-04-03 |
| `workers-ai/@cf/meta/m2m100-1.2b`<br />M2M100 1.2B | m2m | text | text | temperature | context: 128000 / output: 16384 | input: 0.34 / output: 0.34 | 2025-04-03 |
| `workers-ai/@cf/mistral/mistral-7b-instruct-v0.1`<br />Mistral 7B Instruct v0.1 | mistral | text | text | temperature | context: 128000 / output: 16384 | input: 0.11 / output: 0.19 | 2025-04-03 |
| `workers-ai/@cf/mistralai/mistral-small-3.1-24b-instruct`<br />Mistral Small 3.1 24B Instruct | mistral-small | text | text | temperature | context: 128000 / output: 16384 | input: 0.35 / output: 0.56 | 2025-04-11 |
| `workers-ai/@cf/moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-27 |
| `workers-ai/@cf/moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-20 |
| `workers-ai/@cf/myshell-ai/melotts`<br />MyShell MeloTTS | melotts | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/nvidia/nemotron-3-120b-a12b`<br />Nemotron 3 Super 120B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.5 / output: 1.5 | 2026-03-11 |
| `workers-ai/@cf/openai/gpt-oss-120b`<br />GPT OSS 120B | - | text | text | temperature | context: 128000 / output: 16384 | input: 0.35 / output: 0.75 | 2025-08-05 |
| `workers-ai/@cf/openai/gpt-oss-20b`<br />GPT OSS 20B | - | text | text | temperature | context: 128000 / output: 16384 | input: 0.2 / output: 0.3 | 2025-08-05 |
| `workers-ai/@cf/pfnet/plamo-embedding-1b`<br />PLaMo Embedding 1B | plamo | text | text | temperature | context: 128000 / output: 16384 | input: 0.019 / output: 0 | 2025-09-25 |
| `workers-ai/@cf/pipecat-ai/smart-turn-v2`<br />Pipecat Smart Turn v2 | smart-turn | text | text | temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/qwen/qwen2.5-coder-32b-instruct`<br />Qwen 2.5 Coder 32B Instruct | qwen | text | text | temperature | context: 128000 / output: 16384 | input: 0.66 / output: 1 | 2025-04-11 |
| `workers-ai/@cf/qwen/qwen3-30b-a3b-fp8`<br />Qwen3 30B A3B FP8 | qwen | text | text | temperature | context: 128000 / output: 16384 | input: 0.051 / output: 0.34 | 2025-11-14 |
| `workers-ai/@cf/qwen/qwen3-embedding-0.6b`<br />Qwen3 Embedding 0.6B | qwen | text | text | temperature | context: 128000 / output: 16384 | input: 0.012 / output: 0 | 2025-11-14 |
| `workers-ai/@cf/qwen/qwq-32b`<br />QwQ 32B | qwen | text | text | temperature | context: 128000 / output: 16384 | input: 0.66 / output: 1 | 2025-04-11 |
| `workers-ai/@cf/zai-org/glm-4.7-flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.06 / output: 0.4 | 2026-01-19 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

