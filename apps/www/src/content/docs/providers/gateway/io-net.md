---
title: "IO.NET"
description: "Use IO.NET through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1056
  label: "IO.NET"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.intelligence.io.solutions/api/v1 |
| Environment | `IOINTELLIGENCE_API_KEY` |
| Provider docs | [https://io.net/docs/guides/intelligence/io-intelligence](https://io.net/docs/guides/intelligence/io-intelligence) |
| Models | 17 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.IOINTELLIGENCE_API_KEY,
  baseUrl: "https://api.intelligence.io.solutions/api/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-R1-0528");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 0 / 17 models |
| Tools | 17 / 17 models |
| Structured output | 0 / 17 models |
| Reasoning | 3 / 17 models |
| Temperature | 17 / 17 models |
| Open weights | 11 / 17 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 2 / output: 8.75 / cache_read: 1 / cache_write: 4 | 2025-05-28 |
| `Intel/Qwen3-Coder-480B-A35B-Instruct-int4-mixed-ar`<br />Qwen 3 Coder 480B | qwen | text | text | tools, temperature, open weights | context: 106000 / output: 4096 | input: 0.22 / output: 0.95 / cache_read: 0.11 / cache_write: 0.44 | 2025-01-15 |
| `meta-llama/Llama-3.2-90B-Vision-Instruct`<br />Llama 3.2 90B Vision Instruct | llama | image, text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0.35 / output: 0.4 / cache_read: 0.175 / cache_write: 0.7 | 2024-09-25 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.13 / output: 0.38 / cache_read: 0.065 / cache_write: 0.26 | 2024-12-06 |
| `meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8`<br />Llama 4 Maverick 17B 128E Instruct | llama | image, text | text | tools, temperature, open weights | context: 430000 / output: 4096 | input: 0.15 / output: 0.6 / cache_read: 0.075 / cache_write: 0.3 | 2025-01-15 |
| `mistralai/Devstral-Small-2505`<br />Devstral Small 2505 | devstral | text | text | tools, temperature | context: 128000 / output: 4096 | input: 0.05 / output: 0.22 / cache_read: 0.025 / cache_write: 0.1 | 2025-05-01 |
| `mistralai/Magistral-Small-2506`<br />Magistral Small 2506 | magistral-small | text | text | tools, temperature | context: 128000 / output: 4096 | input: 0.5 / output: 1.5 / cache_read: 0.25 / cache_write: 1 | 2025-06-01 |
| `mistralai/Mistral-Large-Instruct-2411`<br />Mistral Large Instruct 2411 | mistral-large | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 2 / output: 6 / cache_read: 1 / cache_write: 4 | 2024-11-01 |
| `mistralai/Mistral-Nemo-Instruct-2407`<br />Mistral Nemo Instruct 2407 | mistral-nemo | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.02 / output: 0.04 / cache_read: 0.01 / cache_write: 0.04 | 2024-07-01 |
| `moonshotai/Kimi-K2-Instruct-0905`<br />Kimi K2 Instruct | kimi-k2 | text | text | tools, temperature | context: 32768 / output: 4096 | input: 0.39 / output: 1.9 / cache_read: 0.195 / cache_write: 0.78 | 2024-09-05 |
| `moonshotai/Kimi-K2-Thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature | context: 32768 / output: 4096 | input: 0.55 / output: 2.25 / cache_read: 0.275 / cache_write: 1.1 | 2024-11-01 |
| `openai/gpt-oss-120b`<br />GPT-OSS 120B | gpt-oss | text | text | tools, temperature, open weights | context: 131072 / output: 4096 | input: 0.04 / output: 0.4 / cache_read: 0.02 / cache_write: 0.08 | 2024-12-01 |
| `openai/gpt-oss-20b`<br />GPT-OSS 20B | gpt-oss | text | text | tools, temperature, open weights | context: 64000 / output: 4096 | input: 0.03 / output: 0.14 / cache_read: 0.015 / cache_write: 0.06 | 2024-12-01 |
| `Qwen/Qwen2.5-VL-32B-Instruct`<br />Qwen 2.5 VL 32B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 32000 / output: 4096 | input: 0.05 / output: 0.22 / cache_read: 0.025 / cache_write: 0.1 | 2024-11-01 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen 3 235B Thinking | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 4096 | input: 0.11 / output: 0.6 / cache_read: 0.055 / cache_write: 0.22 | 2025-07-01 |
| `Qwen/Qwen3-Next-80B-A3B-Instruct`<br />Qwen 3 Next 80B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 4096 | input: 0.1 / output: 0.8 / cache_read: 0.05 / cache_write: 0.2 | 2025-01-10 |
| `zai-org/GLM-4.6`<br />GLM 4.6 | glm | text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.4 / output: 1.75 / cache_read: 0.2 / cache_write: 0.8 | 2024-11-15 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

