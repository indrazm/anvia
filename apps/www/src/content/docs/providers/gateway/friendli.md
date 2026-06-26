---
title: "Friendli"
description: "Use Friendli through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1041
  label: "Friendli"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.friendli.ai/serverless/v1 |
| Environment | `FRIENDLI_TOKEN` |
| Provider docs | [https://friendli.ai/docs/guides/serverless_endpoints/introduction](https://friendli.ai/docs/guides/serverless_endpoints/introduction) |
| Models | 7 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.FRIENDLI_TOKEN,
  baseUrl: "https://api.friendli.ai/serverless/v1",
  completionApi: "chat",
});

const model = client.completionModel("meta-llama/Llama-3.1-8B-Instruct");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 7 models |
| Tools | 7 / 7 models |
| Structured output | 7 / 7 models |
| Reasoning | 4 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 7 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `meta-llama/Llama-3.1-8B-Instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 8000 | input: 0.1 / output: 0.1 | 2025-12-23 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.6 / output: 0.6 | 2025-12-23 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-02-12 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 0.8 | 2026-01-29 |
| `zai-org/GLM-5`<br />GLM-5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 1 / output: 3.2 / cache_read: 0.5 | 2026-02-12 |
| `zai-org/GLM-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-07 |
| `zai-org/GLM-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

