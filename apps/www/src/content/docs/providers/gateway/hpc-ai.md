---
title: "HPC-AI"
description: "Use HPC-AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1050
  label: "HPC-AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.hpc-ai.com/inference/v1 |
| Environment | `HPC_AI_API_KEY` |
| Provider docs | [https://www.hpc-ai.com/doc/docs/quickstart/](https://www.hpc-ai.com/doc/docs/quickstart/) |
| Models | 3 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.HPC_AI_API_KEY,
  baseUrl: "https://api.hpc-ai.com/inference/v1",
  completionApi: "chat",
});

const model = client.completionModel("minimax/minimax-m2.5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 0 / 3 models |
| Tools | 3 / 3 models |
| Structured output | 2 / 3 models |
| Reasoning | 3 / 3 models |
| Temperature | 2 / 3 models |
| Open weights | 3 / 3 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `minimax/minimax-m2.5`<br />MiniMax M2.5 | minimax-m2.5 | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2026-06-01 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.3 / output: 1.5 / cache_read: 0.05 | 2026-06-01 |
| `zai-org/glm-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202000 / output: 202000 | input: 0.615 / output: 2.46 / cache_read: 0.133 | 2026-06-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

