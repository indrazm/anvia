---
title: "Deep Infra"
description: "Review Deep Infra connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1033
  label: "Deep Infra"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `DEEPINFRA_API_KEY` |
| Provider docs | [https://deepinfra.com/models](https://deepinfra.com/models) |
| Models | 25 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 8 / 25 models |
| Tools | 24 / 25 models |
| Structured output | 7 / 25 models |
| Reasoning | 21 / 25 models |
| Temperature | 22 / 25 models |
| Open weights | 23 / 25 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek-R1-0528 | - | text | text | tools, reasoning, temperature | context: 163840 / output: 64000 | input: 0.5 / output: 2.15 / cache_read: 0.35 | 2025-05-28 |
| `deepseek-ai/DeepSeek-V3.2`<br />DeepSeek-V3.2 | - | text | text | tools, reasoning, temperature | context: 163840 / output: 64000 | input: 0.26 / output: 0.38 / cache_read: 0.13 | 2025-12-02 |
| `deepseek-ai/DeepSeek-V4-Flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 16384 | input: 0.1 / output: 0.2 / cache_read: 0.02 | 2026-04-24 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 16384 | input: 1.3 / output: 2.6 / cache_read: 0.1 | 2026-04-24 |
| `google/gemma-4-26B-A4B-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.07 / output: 0.34 | 2026-04-02 |
| `google/gemma-4-31B-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.38 | 2026-04-02 |
| `meta-llama/Llama-3.3-70B-Instruct-Turbo`<br />Llama 3.3 70B Turbo | llama | text | text | tools, open weights | context: 131072 / output: 16384 | input: 0.1 / output: 0.32 | 2024-12-06 |
| `meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8`<br />Llama 4 Maverick 17B FP8 | llama | image, text | text | open weights | context: 1048576 / output: 16384 | input: 0.15 / output: 0.6 | 2025-04-05 |
| `meta-llama/Llama-4-Scout-17B-16E-Instruct`<br />Llama 4 Scout 17B | llama | image, text | text | tools, open weights | context: 327680 / output: 16384 | input: 0.1 / output: 0.3 | 2025-04-05 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 131072 | input: 0.15 / output: 1.15 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.45 / output: 2.25 / cache_read: 0.07 | 2026-01-27 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.75 / output: 3.5 / cache_read: 0.15 | 2026-04-21 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.039 / output: 0.19 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.03 / output: 0.14 | 2025-08-05 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct-Turbo`<br />Qwen3 Coder 480B A35B Instruct Turbo | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 66536 | input: 0.3 / output: 1 | 2025-07-23 |
| `Qwen/Qwen3.5-35B-A3B`<br />Qwen 3.5 35B A3B | qwen | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 81920 | input: 0.14 / output: 1 / cache_read: 0.05 | 2026-04-20 |
| `Qwen/Qwen3.5-397B-A17B`<br />Qwen 3.5 397B A17B | qwen | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 81920 | input: 0.45 / output: 3 / cache_read: 0.22 | 2026-04-20 |
| `Qwen/Qwen3.6-35B-A3B`<br />Qwen3.6 35B A3B | qwen | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 81920 | input: 0.15 / output: 0.95 | 2026-04-01 |
| `XiaomiMiMo/MiMo-V2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-04-22 |
| `XiaomiMiMo/MiMo-V2.5-Pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 16384 | input: 1 / output: 3 / cache_read: 0.2 | 2026-04-22 |
| `zai-org/GLM-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.43 / output: 1.74 / cache_read: 0.08 | 2025-09-30 |
| `zai-org/GLM-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 0.4 / output: 1.75 / cache_read: 0.08 | 2025-12-22 |
| `zai-org/GLM-4.7-Flash`<br />GLM-4.7-Flash | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 0.06 / output: 0.4 | 2026-01-19 |
| `zai-org/GLM-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 0.6 / output: 2.08 / cache_read: 0.12 | 2026-02-12 |
| `zai-org/GLM-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 16384 | input: 1.05 / output: 3.5 / cache_read: 0.205 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

