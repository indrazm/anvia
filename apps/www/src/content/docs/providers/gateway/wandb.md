---
title: "Weights & Biases"
description: "Use Weights & Biases through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1131
  label: "Weights & Biases"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.inference.wandb.ai/v1 |
| Environment | `WANDB_API_KEY` |
| Provider docs | [https://docs.wandb.ai/guides/integrations/inference/](https://docs.wandb.ai/guides/integrations/inference/) |
| Models | 18 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.WANDB_API_KEY,
  baseUrl: "https://api.inference.wandb.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-V3.1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 1 / 18 models |
| Tools | 18 / 18 models |
| Structured output | 18 / 18 models |
| Reasoning | 7 / 18 models |
| Temperature | 18 / 18 models |
| Open weights | 16 / 18 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-V3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, schema, temperature, open weights | context: 161000 / output: 161000 | input: 0.55 / output: 1.65 | 2026-03-12 |
| `meta-llama/Llama-3.1-70B-Instruct`<br />Llama 3.1 70B | llama | text | text | tools, schema, temperature, open weights | context: 128000 / output: 128000 | input: 0.8 / output: 0.8 | 2026-03-12 |
| `meta-llama/Llama-3.1-8B-Instruct`<br />Meta-Llama-3.1-8B-Instruct | llama | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.22 / output: 0.22 | 2026-03-12 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.71 / output: 0.71 | 2026-03-12 |
| `meta-llama/Llama-4-Scout-17B-16E-Instruct`<br />Llama 4 Scout 17B 16E Instruct | llama | image, text | text | tools, schema, reasoning, temperature, open weights | context: 64000 / output: 64000 | input: 0.17 / output: 0.66 | 2026-03-12 |
| `microsoft/Phi-4-mini-instruct`<br />Phi-4-mini-instruct | phi | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.08 / output: 0.35 | 2026-03-12 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax M2.5 | minimax | text | text | tools, schema, temperature, open weights | context: 196608 / output: 196608 | input: 0.3 / output: 1.2 | 2026-03-12 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 2.85 | 2026-03-12 |
| `nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-FP8`<br />NVIDIA Nemotron 3 Super 120B | nemotron | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 0.8 | 2026-03-12 |
| `openai/gpt-oss-120b`<br />gpt-oss-120b | gpt-oss | text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 0.15 / output: 0.6 | 2026-03-12 |
| `openai/gpt-oss-20b`<br />gpt-oss-20b | gpt-oss | text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 0.05 / output: 0.2 | 2026-03-12 |
| `OpenPipe/Qwen3-14B-Instruct`<br />OpenPipe Qwen3 14B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.05 / output: 0.22 | 2026-03-12 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.1 | 2026-03-12 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen3-235B-A22B-Thinking-2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.1 | 2026-03-12 |
| `Qwen/Qwen3-30B-A3B-Instruct-2507`<br />Qwen3 30B A3B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.3 | 2026-03-12 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct`<br />Qwen3-Coder-480B-A35B-Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 1 / output: 1.5 | 2026-03-12 |
| `zai-org/GLM-5-FP8`<br />GLM 5 | glm | text | text | tools, schema, temperature, open weights | context: 200000 / output: 200000 | input: 1 / output: 3.2 | 2026-03-12 |
| `zai-org/GLM-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 / cache_write: 0 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

