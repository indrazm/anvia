---
title: "Together AI"
description: "Review Together AI connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1119
  label: "Together AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `TOGETHER_API_KEY` |
| Provider docs | [https://docs.together.ai/docs/serverless-models](https://docs.together.ai/docs/serverless-models) |
| Models | 31 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 4 / 31 models |
| Tools | 25 / 31 models |
| Structured output | 13 / 31 models |
| Reasoning | 20 / 31 models |
| Temperature | 31 / 31 models |
| Open weights | 28 / 31 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepcogito/cogito-v2-1-671b`<br />Cogito v2.1 671B | cogito | text | text | reasoning, temperature | context: 163840 / output: 163840 | input: 1.25 / output: 1.25 | 2025-11-13 |
| `deepseek-ai/DeepSeek-R1`<br />DeepSeek-R1 | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 163839 / output: 163839 | input: 3 / output: 7 | 2025-03-24 |
| `deepseek-ai/DeepSeek-V3`<br />DeepSeek-V3 | deepseek | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 1.25 / output: 1.25 | 2025-05-29 |
| `deepseek-ai/DeepSeek-V3-1`<br />DeepSeek V3.1 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.6 / output: 1.7 | 2025-08-21 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />DeepSeek V4 Pro | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 512000 / output: 384000 | input: 1.74 / output: 3.48 / cache_read: 0.2 | 2026-04-24 |
| `essentialai/Rnj-1-Instruct`<br />Rnj-1 Instruct | rnj | text | text | tools, temperature, open weights | context: 32768 / output: 32768 | input: 0.15 / output: 0.15 | 2025-12-05 |
| `google/gemma-3n-E4B-it`<br />Gemma 3N E4B Instruct | gemma | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.06 / output: 0.12 | 2025-05-20 |
| `google/gemma-4-31B-it`<br />Gemma 4 31B Instruct | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.39 / output: 0.97 | 2026-04-07 |
| `LiquidAI/LFM2-24B-A2B`<br />LFM2-24B-A2B | liquid | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.03 / output: 0.12 | 2026-02-25 |
| `meta-llama/Llama-3.3-70B-Instruct-Turbo`<br />Llama 3.3 70B | llama | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0.88 / output: 0.88 | 2024-12-06 |
| `meta-llama/Meta-Llama-3-8B-Instruct-Lite`<br />Meta Llama 3 8B Instruct Lite | llama | text | text | temperature, open weights | context: 8192 / output: 8192 | input: 0.14 / output: 0.14 | 2024-04-18 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-02-12 |
| `MiniMaxAI/MiniMax-M2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `MiniMaxAI/MiniMax-M3`<br />MiniMax-M3 | minimax | image, text | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 250000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-12 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 2.8 | 2026-01-27 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131000 | input: 1.2 / output: 4.5 / cache_read: 0.2 | 2026-04-21 |
| `moonshotai/Kimi-K2.7-Code`<br />Kimi K2.7 Code | kimi-k2 | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-14 |
| `nvidia/nemotron-3-ultra-550b-a55b`<br />Nemotron 3 Ultra 550B A55B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 512300 / output: 512300 | input: 0.6 / output: 3.6 / cache_read: 0.2 | 2026-06-04 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.15 / output: 0.6 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.05 / output: 0.2 | 2025-08-05 |
| `pearl-ai/gemma-4-31b-it`<br />Pearl AI Gemma 4 31B Instruct | gemma | text | text | reasoning, temperature | context: 32000 / output: 32000 | input: 0.28 / output: 0.86 | 2026-04-07 |
| `Qwen/Qwen2.5-7B-Instruct-Turbo`<br />Qwen 2.5 7B Instruct Turbo | qwen | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.3 / output: 0.3 | 2024-09-19 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507-tput`<br />Qwen3 235B A22B Instruct 2507 FP8 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 0.6 | 2025-07-25 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 2 / output: 2 | 2025-07-23 |
| `Qwen/Qwen3-Coder-Next-FP8`<br />Qwen3 Coder Next FP8 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.2 | 2026-02-03 |
| `Qwen/Qwen3.5-397B-A17B`<br />Qwen3.5 397B A17B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 130000 | input: 0.6 / output: 3.6 | 2026-06-15 |
| `Qwen/Qwen3.5-9B`<br />Qwen3.5 9B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.17 / output: 0.25 | 2026-03-03 |
| `Qwen/Qwen3.6-Plus`<br />Qwen3.6 Plus | qwen | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 500000 | input: 0.5 / output: 3 | 2026-04-30 |
| `Qwen/Qwen3.7-Max`<br />Qwen3.7 Max | qwen | text | text | tools, temperature | context: 1000000 / output: 500000 | input: 1.25 / output: 3.75 | 2026-06-15 |
| `zai-org/GLM-5`<br />GLM-5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1 / output: 3.2 | 2026-02-11 |
| `zai-org/GLM-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1.4 / output: 4.4 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

