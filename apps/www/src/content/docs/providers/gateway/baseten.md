---
title: "Baseten"
description: "Use Baseten through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1019
  label: "Baseten"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://inference.baseten.co/v1 |
| Environment | `BASETEN_API_KEY` |
| Provider docs | [https://docs.baseten.co/inference/model-apis/overview](https://docs.baseten.co/inference/model-apis/overview) |
| Models | 13 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.BASETEN_API_KEY,
  baseUrl: "https://inference.baseten.co/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-V3.1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 3 / 13 models |
| Tools | 13 / 13 models |
| Structured output | 11 / 13 models |
| Reasoning | 13 / 13 models |
| Temperature | 13 / 13 models |
| Open weights | 13 / 13 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-V3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 164000 / output: 131000 | input: 0.5 / output: 1.5 | 2025-08-25 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />Deepseek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.74 / output: 3.48 / cache_read: 0.145 | 2026-04-24 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204000 / output: 204000 | input: 0.3 / output: 1.2 | 2026-02-12 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.6 / output: 3 / cache_read: 0.12 | 2026-02-12 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `moonshotai/Kimi-K2.7-Code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-06-12 |
| `nvidia/Nemotron-120B-A12B`<br />Nemotron Super | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 202800 / output: 202800 | input: 0.3 / output: 0.75 / cache_read: 0.06 | 2026-03-11 |
| `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B`<br />Nemotron Ultra | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 202800 / output: 202800 | input: 0.6 / output: 2.4 / cache_read: 0.12 | 2026-06-04 |
| `openai/gpt-oss-120b`<br />OpenAI GPT 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128072 / output: 128072 | input: 0.1 / output: 0.5 | 2025-08-05 |
| `zai-org/GLM-4.7`<br />GLM 4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 200000 | input: 0.6 / output: 2.2 / cache_read: 0.12 | 2025-12-22 |
| `zai-org/GLM-5`<br />GLM 5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202800 / output: 202800 | input: 0.95 / output: 3.15 / cache_read: 0.2 | 2026-02-12 |
| `zai-org/GLM-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202800 / output: 202800 | input: 1.3 / output: 4.3 / cache_read: 0.26 | 2026-04-07 |
| `zai-org/GLM-5.2`<br />GLM 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202720 / output: 202720 | input: 1.4 / output: 4.4 / cache_read: 0.3 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

