---
title: "Vultr"
description: "Use Vultr through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1129
  label: "Vultr"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.vultrinference.com/v1 |
| Environment | `VULTR_API_KEY` |
| Provider docs | [https://api.vultrinference.com/](https://api.vultrinference.com/) |
| Models | 7 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.VULTR_API_KEY,
  baseUrl: "https://api.vultrinference.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("MiniMaxAI/MiniMax-M2.7");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 1 / 7 models |
| Tools | 6 / 7 models |
| Structured output | 2 / 7 models |
| Reasoning | 6 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 7 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `MiniMaxAI/MiniMax-M2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-03-18 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.15 / output: 0.6 | 2026-04-21 |
| `nvidia/DeepSeek-V3.2-NVFP4`<br />DeepSeek V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.55 / output: 1.65 | 2025-12-01 |
| `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3`<br />Llama 3.1 Nemotron Safety Guard | llama | text | text | temperature, open weights | context: 8192 / output: 4096 | input: 0.01 / output: 0.01 | 2025-10-28 |
| `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`<br />NVIDIA Nemotron 3 Nano Omni | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.13 / output: 0.38 | 2026-04-28 |
| `nvidia/Nemotron-Cascade-2-30B-A3B`<br />NVIDIA Nemotron Cascade 2 | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.15 / output: 0.6 | 2025-12-01 |
| `zai-org/GLM-5.1-FP8`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 131072 | input: 0.85 / output: 3.1 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

