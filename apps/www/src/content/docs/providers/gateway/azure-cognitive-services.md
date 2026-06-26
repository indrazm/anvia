---
title: "Azure Cognitive Services"
description: "Review Azure Cognitive Services connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1017
  label: "Azure Cognitive Services"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `AZURE_COGNITIVE_SERVICES_API_KEY`, `AZURE_COGNITIVE_SERVICES_RESOURCE_NAME` |
| Provider docs | [https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) |
| Models | 95 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text |
| Output modalities | audio, image, text |
| Attachments | 40 / 95 models |
| Tools | 67 / 95 models |
| Structured output | 18 / 95 models |
| Reasoning | 44 / 95 models |
| Temperature | 63 / 95 models |
| Open weights | 41 / 95 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-11-18 |
| `claude-opus-4-1`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-11-18 |
| `claude-opus-4-5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-08-01 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-05 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-11-18 |
| `codestral-2501`<br />Codestral 25.01 | codestral | text | text | tools, temperature | context: 256000 / output: 256000 | input: 0.3 / output: 0.9 | 2025-01-01 |
| `codex-mini`<br />Codex Mini | gpt-codex-mini | text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.5 / output: 6 / cache_read: 0.375 | 2025-05-16 |
| `cohere-command-a`<br />Command A | command-a | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 8000 | input: 2.5 / output: 10 | 2025-03-13 |
| `cohere-command-r-08-2024`<br />Command R | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.15 / output: 0.6 | 2024-08-30 |
| `cohere-command-r-plus-08-2024`<br />Command R+ | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 2.5 / output: 10 | 2024-08-30 |
| `cohere-embed-v-4-0`<br />Embed v4 | cohere-embed | image, text | text | open weights | context: 128000 / output: 1536 | input: 0.12 / output: 0 | 2025-04-15 |
| `cohere-embed-v3-english`<br />Embed v3 English | cohere-embed | text | text | open weights | context: 512 / output: 1024 | input: 0.1 / output: 0 | 2023-11-07 |
| `cohere-embed-v3-multilingual`<br />Embed v3 Multilingual | cohere-embed | text | text | open weights | context: 512 / output: 1024 | input: 0.1 / output: 0 | 2023-11-07 |
| `deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 1.35 / output: 5.4 | 2025-01-20 |
| `deepseek-r1-0528`<br />DeepSeek-R1-0528 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 1.35 / output: 5.4 | 2025-05-28 |
| `deepseek-v3-0324`<br />DeepSeek-V3-0324 | deepseek | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 1.14 / output: 4.56 | 2025-03-24 |
| `deepseek-v3.1`<br />DeepSeek-V3.1 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.56 / output: 1.68 | 2025-08-21 |
| `deepseek-v3.2`<br />DeepSeek-V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.58 / output: 1.68 | 2025-12-01 |
| `deepseek-v3.2-speciale`<br />DeepSeek-V3.2-Speciale | deepseek | text | text | reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.58 / output: 1.68 | 2025-12-01 |
| `gpt-3.5-turbo-0125`<br />GPT-3.5 Turbo 0125 | gpt | text | text | temperature | context: 16384 / output: 16384 | input: 0.5 / output: 1.5 | 2024-01-25 |
| `gpt-3.5-turbo-0301`<br />GPT-3.5 Turbo 0301 | gpt | text | text | temperature | context: 4096 / output: 4096 | input: 1.5 / output: 2 | 2023-03-01 |
| `gpt-3.5-turbo-0613`<br />GPT-3.5 Turbo 0613 | gpt | text | text | temperature | context: 16384 / output: 16384 | input: 3 / output: 4 | 2023-06-13 |
| `gpt-3.5-turbo-1106`<br />GPT-3.5 Turbo 1106 | gpt | text | text | temperature | context: 16384 / output: 16384 | input: 1 / output: 2 | 2023-11-06 |
| `gpt-3.5-turbo-instruct`<br />GPT-3.5 Turbo Instruct | gpt | text | text | temperature | context: 4096 / output: 4096 | input: 1.5 / output: 2 | 2023-09-21 |
| `gpt-4`<br />GPT-4 | gpt | text | text | tools, temperature | context: 8192 / output: 8192 | input: 60 / output: 120 | 2023-03-14 |
| `gpt-4-32k`<br />GPT-4 32K | gpt | text | text | tools, temperature | context: 32768 / output: 32768 | input: 60 / output: 120 | 2023-03-14 |
| `gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `gpt-4-turbo-vision`<br />GPT-4 Turbo Vision | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `gpt-4o`<br />GPT-4o | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `gpt-5`<br />GPT-5 | gpt | image, text | text | tools, reasoning | context: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-08-07 |
| `gpt-5-chat`<br />GPT-5 Chat | gpt-codex | image, text | text | reasoning | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-08-07 |
| `gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-09-15 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning | context: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.03 | 2025-08-07 |
| `gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, reasoning | context: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.01 | 2025-08-07 |
| `gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `gpt-5.1`<br />GPT-5.1 | gpt | audio, image, text | audio, image, text | tools, schema, reasoning | context: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-14 |
| `gpt-5.1-chat`<br />GPT-5.1 Chat | gpt-codex | audio, image, text | audio, image, text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-14 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | audio, image, text | audio, image, text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-14 |
| `gpt-5.1-codex-mini`<br />GPT-5.1 Codex Mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-14 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.125 | 2025-12-11 |
| `gpt-5.2-chat`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-01-14 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-24 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 Mini | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 Nano | gpt-nano | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-24 |
| `grok-4-fast-reasoning`<br />Grok 4 Fast (Reasoning) | grok | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 30000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-09-19 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-12-02 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-04-21 |
| `llama-3.2-11b-vision-instruct`<br />Llama-3.2-11B-Vision-Instruct | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.37 / output: 0.37 | 2024-09-25 |
| `llama-3.2-90b-vision-instruct`<br />Llama-3.2-90B-Vision-Instruct | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 2.04 / output: 2.04 | 2024-09-25 |
| `llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.71 / output: 0.71 | 2024-12-06 |
| `llama-4-maverick-17b-128e-instruct-fp8`<br />Llama 4 Maverick 17B 128E Instruct FP8 | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.25 / output: 1 | 2025-04-05 |
| `llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout 17B 16E Instruct | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.2 / output: 0.78 | 2025-04-05 |
| `meta-llama-3-70b-instruct`<br />Meta-Llama-3-70B-Instruct | llama | text | text | temperature, open weights | context: 8192 / output: 2048 | input: 2.68 / output: 3.54 | 2024-04-18 |
| `meta-llama-3-8b-instruct`<br />Meta-Llama-3-8B-Instruct | llama | text | text | temperature, open weights | context: 8192 / output: 2048 | input: 0.3 / output: 0.61 | 2024-04-18 |
| `meta-llama-3.1-405b-instruct`<br />Meta-Llama-3.1-405B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 5.33 / output: 16 | 2024-07-23 |
| `meta-llama-3.1-70b-instruct`<br />Meta-Llama-3.1-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 2.68 / output: 3.54 | 2024-07-23 |
| `meta-llama-3.1-8b-instruct`<br />Meta-Llama-3.1-8B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.3 / output: 0.61 | 2024-07-23 |
| `ministral-3b`<br />Ministral 3B | ministral | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.04 / output: 0.04 | 2024-10-22 |
| `mistral-large-2411`<br />Mistral Large 24.11 | mistral-large | text | text | tools, temperature | context: 128000 / output: 32768 | input: 2 / output: 6 | 2024-11-01 |
| `mistral-medium-2505`<br />Mistral Medium 3 | mistral-medium | image, text | text | tools, temperature | context: 128000 / output: 128000 | input: 0.4 / output: 2 | 2025-05-07 |
| `mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-07-18 |
| `mistral-small-2503`<br />Mistral Small 3.1 | mistral-small | image, text | text | tools, temperature | context: 128000 / output: 32768 | input: 0.1 / output: 0.3 | 2025-03-01 |
| `model-router`<br />Model Router | model-router | image, text | text | tools | context: 128000 / output: 16384 | input: 0.14 / output: 0 | 2025-11-18 |
| `o1` | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `o1-mini` | o-mini | text | text | tools, reasoning | context: 128000 / output: 65536 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2024-09-12 |
| `o3` | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `o3-mini` | o-mini | text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `o4-mini` | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `phi-3-medium-128k-instruct`<br />Phi-3-medium-instruct (128k) | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.17 / output: 0.68 | 2024-04-23 |
| `phi-3-medium-4k-instruct`<br />Phi-3-medium-instruct (4k) | phi | text | text | temperature, open weights | context: 4096 / output: 1024 | input: 0.17 / output: 0.68 | 2024-04-23 |
| `phi-3-mini-128k-instruct`<br />Phi-3-mini-instruct (128k) | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.13 / output: 0.52 | 2024-04-23 |
| `phi-3-mini-4k-instruct`<br />Phi-3-mini-instruct (4k) | phi | text | text | temperature, open weights | context: 4096 / output: 1024 | input: 0.13 / output: 0.52 | 2024-04-23 |
| `phi-3-small-128k-instruct`<br />Phi-3-small-instruct (128k) | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.15 / output: 0.6 | 2024-04-23 |
| `phi-3-small-8k-instruct`<br />Phi-3-small-instruct (8k) | phi | text | text | temperature, open weights | context: 8192 / output: 2048 | input: 0.15 / output: 0.6 | 2024-04-23 |
| `phi-3.5-mini-instruct`<br />Phi-3.5-mini-instruct | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.13 / output: 0.52 | 2024-08-20 |
| `phi-3.5-moe-instruct`<br />Phi-3.5-MoE-instruct | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.16 / output: 0.64 | 2024-08-20 |
| `phi-4`<br />Phi-4 | phi | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.125 / output: 0.5 | 2024-12-11 |
| `phi-4-mini`<br />Phi-4-mini | phi | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.075 / output: 0.3 | 2024-12-11 |
| `phi-4-mini-reasoning`<br />Phi-4-mini-reasoning | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0.075 / output: 0.3 | 2024-12-11 |
| `phi-4-multimodal`<br />Phi-4-multimodal | phi | audio, image, text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0.08 / output: 0.32 / input_audio: 4 | 2024-12-11 |
| `phi-4-reasoning`<br />Phi-4-reasoning | phi | text | text | reasoning, temperature, open weights | context: 32000 / output: 4096 | input: 0.125 / output: 0.5 | 2024-12-11 |
| `phi-4-reasoning-plus`<br />Phi-4-reasoning-plus | phi | text | text | reasoning, temperature, open weights | context: 32000 / output: 4096 | input: 0.125 / output: 0.5 | 2024-12-11 |
| `text-embedding-3-large` | text-embedding | text | text | - | context: 8191 / output: 3072 | input: 0.13 / output: 0 | 2024-01-25 |
| `text-embedding-3-small` | text-embedding | text | text | - | context: 8191 / output: 1536 | input: 0.02 / output: 0 | 2024-01-25 |
| `text-embedding-ada-002` | text-embedding | text | text | - | context: 8192 / output: 1536 | input: 0.1 / output: 0 | 2022-12-15 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

