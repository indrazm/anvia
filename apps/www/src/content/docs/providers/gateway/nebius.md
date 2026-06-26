---
title: "Nebius Token Factory"
description: "Use Nebius Token Factory through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1082
  label: "Nebius Token Factory"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.tokenfactory.nebius.com/v1 |
| Environment | `NEBIUS_API_KEY` |
| Provider docs | [https://docs.tokenfactory.nebius.com/](https://docs.tokenfactory.nebius.com/) |
| Models | 29 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NEBIUS_API_KEY,
  baseUrl: "https://api.tokenfactory.nebius.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-V3.2");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 4 / 29 models |
| Tools | 28 / 29 models |
| Structured output | 27 / 29 models |
| Reasoning | 19 / 29 models |
| Temperature | 28 / 29 models |
| Open weights | 27 / 29 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-V3.2`<br />DeepSeek-V3.2 | - | text | text | tools, schema, reasoning, temperature, open weights | context: 163000 / input: 160000 / output: 16384 | input: 0.3 / output: 0.45 / reasoning: 0.45 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-04 |
| `deepseek-ai/DeepSeek-V3.2-fast`<br />DeepSeek-V3.2-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.4 / output: 2 / cache_read: 0.04 / cache_write: 0.5 | 2026-05-07 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.75 / output: 3.5 / cache_read: 0.15 | 2026-04-24 |
| `google/gemma-3-27b-it`<br />Gemma-3-27b-it | - | image, text | text | tools, schema, temperature, open weights | context: 110000 / input: 100000 / output: 8192 | input: 0.1 / output: 0.3 / cache_read: 0.01 / cache_write: 0.125 | 2026-02-04 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama-3.3-70B-Instruct | - | text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.13 / output: 0.4 / cache_read: 0.013 / cache_write: 0.16 | 2026-02-04 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | - | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / input: 190000 / output: 8192 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-05-07 |
| `MiniMaxAI/MiniMax-M2.5-fast`<br />MiniMax-M2.5-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-05-07 |
| `moonshotai/Kimi-K2.5`<br />Kimi-K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 8192 | input: 0.5 / output: 2.5 / reasoning: 2.5 / cache_read: 0.05 / cache_write: 0.625 | 2026-02-04 |
| `moonshotai/Kimi-K2.5-fast`<br />Kimi-K2.5-fast | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 8192 | input: 0.5 / output: 2.5 / cache_read: 0.05 / cache_write: 0.625 | 2026-02-04 |
| `NousResearch/Hermes-4-405B`<br />Hermes-4-405B | - | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 1 / output: 3 / reasoning: 3 / cache_read: 0.1 / cache_write: 1.25 | 2026-02-04 |
| `NousResearch/Hermes-4-70B`<br />Hermes-4-70B | - | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.13 / output: 0.4 / reasoning: 0.4 / cache_read: 0.013 / cache_write: 0.16 | 2026-02-04 |
| `nvidia/Llama-3_1-Nemotron-Ultra-253B-v1`<br />Llama-3.1-Nemotron-Ultra-253B-v1 | nemotron | text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 4096 | input: 0.6 / output: 1.8 / cache_read: 0.06 / cache_write: 0.75 | 2026-02-04 |
| `nvidia/Nemotron-3-Nano-Omni`<br />Nemotron-3-Nano-Omni | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 65536 / input: 60000 / output: 8192 | input: 0.06 / output: 0.24 / cache_read: 0.006 / cache_write: 0.075 | 2026-05-07 |
| `nvidia/nemotron-3-super-120b-a12b`<br />Nemotron-3-Super-120B-A12B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 32768 | input: 0.3 / output: 0.9 | 2026-03-12 |
| `nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B`<br />Nemotron-3-Nano-30B-A3B | nemotron | text | text | tools, schema, temperature, open weights | context: 32000 / input: 30000 / output: 4096 | input: 0.06 / output: 0.24 / cache_read: 0.006 / cache_write: 0.075 | 2026-02-04 |
| `openai/gpt-oss-120b`<br />gpt-oss-120b | - | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / input: 124000 / output: 8192 | input: 0.15 / output: 0.6 / reasoning: 0.6 / cache_read: 0.015 / cache_write: 0.18 | 2026-02-04 |
| `openai/gpt-oss-120b-fast`<br />gpt-oss-120b-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.1 / output: 0.5 / cache_read: 0.01 / cache_write: 0.125 | 2026-05-07 |
| `PrimeIntellect/INTELLECT-3`<br />INTELLECT-3 | - | text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.2 / output: 1.1 / cache_read: 0.02 / cache_write: 0.25 | 2026-02-04 |
| `Qwen/Qwen2.5-VL-72B-Instruct`<br />Qwen2.5-VL-72B-Instruct | - | image, text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.25 / output: 0.75 / cache_read: 0.025 / cache_write: 0.31 | 2026-02-04 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, temperature | context: 262144 / output: 8192 | input: 0.2 / output: 0.6 | 2025-10-04 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507-fast`<br />Qwen3-235B-A22B-Thinking-2507-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.5 / output: 2 / cache_read: 0.05 / cache_write: 0.625 | 2026-05-07 |
| `Qwen/Qwen3-30B-A3B-Instruct-2507`<br />Qwen3-30B-A3B-Instruct-2507 | - | text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.1 / output: 0.3 / cache_read: 0.01 / cache_write: 0.125 | 2026-02-04 |
| `Qwen/Qwen3-32B`<br />Qwen3-32B | - | text | text | tools, schema, temperature, open weights | context: 128000 / input: 120000 / output: 8192 | input: 0.1 / output: 0.3 / cache_read: 0.01 / cache_write: 0.125 | 2026-02-04 |
| `Qwen/Qwen3-Embedding-8B`<br />Qwen3-Embedding-8B | text-embedding | text | text | open weights | context: 32768 / input: 32768 / output: 0 | input: 0.01 / output: 0 | 2026-02-04 |
| `Qwen/Qwen3-Next-80B-A3B-Thinking`<br />Qwen3-Next-80B-A3B-Thinking | - | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / input: 120000 / output: 16384 | input: 0.15 / output: 1.2 / reasoning: 1.2 / cache_read: 0.015 / cache_write: 0.18 | 2026-02-04 |
| `Qwen/Qwen3-Next-80B-A3B-Thinking-fast`<br />Qwen3-Next-80B-A3B-Thinking-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.15 / output: 1.2 / cache_read: 0.015 / cache_write: 0.1875 | 2026-05-07 |
| `Qwen/Qwen3.5-397B-A17B`<br />Qwen3.5-397B-A17B | - | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / input: 250000 / output: 8192 | input: 0.6 / output: 3.6 / cache_read: 0.06 / cache_write: 0.75 | 2026-05-07 |
| `Qwen/Qwen3.5-397B-A17B-fast`<br />Qwen3.5-397B-A17B-fast | - | text | text | tools, schema, reasoning, temperature, open weights | context: 8000 / input: 7000 / output: 8192 | input: 0.6 / output: 3.6 / cache_read: 0.06 / cache_write: 0.75 | 2026-05-07 |
| `zai-org/GLM-5`<br />GLM-5 | - | text | text | tools, schema, reasoning, temperature | context: 200000 / input: 200000 / output: 16384 | input: 1 / output: 3.2 / cache_read: 0.1 / cache_write: 1 | 2026-03-10 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

