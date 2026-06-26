---
title: "Hugging Face"
description: "Use Hugging Face through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1051
  label: "Hugging Face"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://router.huggingface.co/v1 |
| Environment | `HF_TOKEN` |
| Provider docs | [https://huggingface.co/docs/inference-providers](https://huggingface.co/docs/inference-providers) |
| Models | 49 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.HF_TOKEN,
  baseUrl: "https://router.huggingface.co/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-R1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 15 / 49 models |
| Tools | 47 / 49 models |
| Structured output | 20 / 49 models |
| Reasoning | 39 / 49 models |
| Temperature | 46 / 49 models |
| Open weights | 49 / 49 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 64000 / output: 32768 | input: 0.7 / output: 2.5 | 2025-05-29 |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek-R1-0528 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 3 / output: 5 | 2025-05-28 |
| `deepseek-ai/DeepSeek-V3.2`<br />DeepSeek-V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.28 / output: 0.4 | 2025-12-01 |
| `deepseek-ai/DeepSeek-V4-Flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 384000 | input: 0.14 / output: 0.28 | 2026-04-24 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemma-4-26B-A4B-it`<br />Gemma 4 26B A4B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.13 / output: 0.4 | 2026-04-02 |
| `google/gemma-4-31B-it`<br />Gemma 4 31B IT | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.14 / output: 0.4 | 2026-04-02 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 4096 | input: 0.59 / output: 0.79 | 2024-12-06 |
| `MiniMaxAI/MiniMax-M2`<br />MiniMax-M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 128000 | input: 0.3 / output: 1.2 | 2025-10-27 |
| `MiniMaxAI/MiniMax-M2.1`<br />MiniMax-M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2025-12-23 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2026-02-12 |
| `MiniMaxAI/MiniMax-M2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `MiniMaxAI/MiniMax-M3`<br />MiniMax-M3 | minimax | image, text | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 128000 | input: 0.3 / output: 1.2 | 2026-06-01 |
| `moonshotai/Kimi-K2-Instruct`<br />Kimi-K2-Instruct | kimi-k2 | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 1 / output: 3 | 2025-07-14 |
| `moonshotai/Kimi-K2-Instruct-0905`<br />Kimi-K2-Instruct-0905 | kimi-k2 | text | text | tools, temperature, open weights | context: 262144 / output: 16384 | input: 1 / output: 3 | 2025-09-04 |
| `moonshotai/Kimi-K2-Thinking`<br />Kimi-K2-Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-11-06 |
| `moonshotai/Kimi-K2.5`<br />Kimi-K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-01 |
| `moonshotai/Kimi-K2.6`<br />Kimi-K2.6 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-20 |
| `moonshotai/Kimi-K2.7-Code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-06-12 |
| `Qwen/Qwen3-235B-A22B`<br />Qwen3 235B-A22B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 16384 | input: 0.2 / output: 0.8 | 2025-04 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen3-235B-A22B-Thinking-2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.3 / output: 3 | 2025-07-25 |
| `Qwen/Qwen3-32B`<br />Qwen3 32B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.29 / output: 0.59 | 2025-04 |
| `Qwen/Qwen3-Coder-30B-A3B-Instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.07 / output: 0.26 | 2025-04 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct`<br />Qwen3-Coder-480B-A35B-Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 66536 | input: 2 / output: 2 | 2025-07-23 |
| `Qwen/Qwen3-Coder-Next`<br />Qwen3-Coder-Next | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.2 / output: 1.5 | 2026-02-03 |
| `Qwen/Qwen3-Embedding-4B`<br />Qwen 3 Embedding 4B | qwen | text | text | open weights | context: 32000 / output: 2048 | input: 0.01 / output: 0 | 2025-01-01 |
| `Qwen/Qwen3-Embedding-8B`<br />Qwen 3 Embedding 8B | qwen | text | text | open weights | context: 32000 / output: 4096 | input: 0.01 / output: 0 | 2025-01-01 |
| `Qwen/Qwen3-Next-80B-A3B-Instruct`<br />Qwen3-Next-80B-A3B-Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 66536 | input: 0.25 / output: 1 | 2025-09-11 |
| `Qwen/Qwen3-Next-80B-A3B-Thinking`<br />Qwen3-Next-80B-A3B-Thinking | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 131072 | input: 0.3 / output: 2 | 2025-09-11 |
| `Qwen/Qwen3.5-122B-A10B`<br />Qwen3.5 122B-A10B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.4 / output: 3.2 | 2026-02-23 |
| `Qwen/Qwen3.5-27B`<br />Qwen3.5 27B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 2.4 | 2026-02-23 |
| `Qwen/Qwen3.5-35B-A3B`<br />Qwen3.5 35B-A3B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.25 / output: 2 | 2026-02-23 |
| `Qwen/Qwen3.5-397B-A17B`<br />Qwen3.5-397B-A17B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.6 / output: 3.6 | 2026-02-01 |
| `Qwen/Qwen3.5-9B`<br />Qwen3.5 9B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.17 / output: 0.25 | 2026-02-23 |
| `Qwen/Qwen3.6-27B`<br />Qwen3.6 27B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.47 / output: 3.19 | 2026-04-22 |
| `Qwen/Qwen3.6-35B-A3B`<br />Qwen3.6 35B-A3B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.15 / output: 0.95 | 2026-04-17 |
| `stepfun-ai/Step-3.5-Flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 256000 | input: 0.1 / output: 0.3 | 2026-02-13 |
| `stepfun-ai/Step-3.7-Flash`<br />Step 3.7 Flash | - | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 256000 | input: 0.2 / output: 1.15 | 2026-05-29 |
| `XiaomiMiMo/MiMo-V2-Flash`<br />MiMo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 4096 | input: 0.1 / output: 0.3 | 2025-12-16 |
| `XiaomiMiMo/MiMo-V2.5-Pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1 / output: 3 | 2026-04-22 |
| `zai-org/GLM-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 | 2025-07-28 |
| `zai-org/GLM-4.5-Air`<br />GLM-4.5-Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.13 / output: 0.85 | 2025-07-28 |
| `zai-org/GLM-4.5V`<br />GLM-4.5V | glm | image, text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.6 / output: 1.8 | 2025-08-11 |
| `zai-org/GLM-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.55 / output: 2.2 | 2025-09-30 |
| `zai-org/GLM-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-12-22 |
| `zai-org/GLM-4.7-Flash`<br />GLM-4.7-Flash | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0 / output: 0 | 2025-08-08 |
| `zai-org/GLM-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-11 |
| `zai-org/GLM-5.1`<br />GLM-5.1 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-04-03 |
| `zai-org/GLM-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 1.4 / output: 4.4 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

