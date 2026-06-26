---
title: "Synthetic"
description: "Use Synthetic through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1115
  label: "Synthetic"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.synthetic.new/openai/v1 |
| Environment | `SYNTHETIC_API_KEY` |
| Provider docs | [https://synthetic.new/pricing](https://synthetic.new/pricing) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SYNTHETIC_API_KEY,
  baseUrl: "https://api.synthetic.new/openai/v1",
  completionApi: "chat",
});

const model = client.completionModel("hf:MiniMaxAI/MiniMax-M3");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 2 / 8 models |
| Tools | 8 / 8 models |
| Structured output | 5 / 8 models |
| Reasoning | 8 / 8 models |
| Temperature | 8 / 8 models |
| Open weights | 8 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `hf:MiniMaxAI/MiniMax-M3`<br />MiniMax-M3 | minimax | image, text | text | tools, schema, reasoning, temperature, open weights | context: 524288 / output: 65536 | input: 0.6 / output: 1.2 / cache_read: 0.6 | 2026-06-12 |
| `hf:moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.95 / output: 4 / cache_read: 0.95 | 2026-04-21 |
| `hf:nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-NVFP4`<br />Nemotron 3 Super 120B A12B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 1 / cache_read: 0.3 | 2026-03-11 |
| `hf:openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.1 / output: 0.1 | 2025-08-05 |
| `hf:Qwen/Qwen3.5-397B-A17B`<br />Qwen3.5-97B-A17B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3 / cache_read: 0.6 | 2026-02-11 |
| `hf:zai-org/GLM-4.7`<br />GLM 4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 64000 | input: 0.55 / output: 2.19 | 2025-12-22 |
| `hf:zai-org/GLM-4.7-Flash`<br />GLM-4.7-Flash | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 65536 | input: 0.06 / output: 0.4 / cache_read: 0.06 | 2026-01-18 |
| `hf:zai-org/GLM-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 65536 | input: 1 / output: 3 / cache_read: 1 | 2026-04-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

