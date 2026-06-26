---
title: "Regolo AI"
description: "Use Regolo AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1102
  label: "Regolo AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.regolo.ai/v1 |
| Environment | `REGOLO_API_KEY` |
| Provider docs | [https://docs.regolo.ai/](https://docs.regolo.ai/) |
| Models | 13 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.REGOLO_API_KEY,
  baseUrl: "https://api.regolo.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("gpt-oss-120b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | image, text |
| Attachments | 3 / 13 models |
| Tools | 10 / 13 models |
| Structured output | 0 / 13 models |
| Reasoning | 8 / 13 models |
| Temperature | 11 / 13 models |
| Open weights | 6 / 13 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gpt-oss-120b`<br />GPT-OSS-120B | gpt-oss | text | text | tools, reasoning, temperature | context: 128000 / output: 16384 | input: 1 / output: 4.2 | 2025-08-05 |
| `gpt-oss-20b`<br />GPT-OSS-20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.4 / output: 1.8 | 2026-03-01 |
| `llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature | context: 120000 / output: 120000 | input: 0.05 / output: 0.25 | 2025-04-07 |
| `llama-3.3-70b-instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.6 / output: 2.7 | 2025-04-28 |
| `minimax-m2.5`<br />MiniMax 2.5 | minimax | text | text | tools, reasoning, temperature | context: 190000 / output: 64000 | input: 0.8 / output: 3.5 | 2026-03-10 |
| `mistral-small-4-119b`<br />Mistral Small 4 119B | mistral-small | image, text | text | tools, reasoning, temperature | context: 256000 / output: 16384 | input: 0.75 / output: 3 | 2026-03-15 |
| `mistral-small3.2`<br />Mistral Small 3.2 | mistral-small | text | text | tools, reasoning, temperature | context: 120000 / output: 120000 | input: 0.5 / output: 2.2 | 2025-01-31 |
| `qwen-image`<br />Qwen-Image | qwen | text | image | temperature | context: 8192 / output: 4096 | input: 0.5 / output: 2 | 2026-03-01 |
| `qwen3-coder-next`<br />Qwen3-Coder-Next | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.3 / output: 1.2 | 2026-03-01 |
| `qwen3-embedding-8b`<br />Qwen3-Embedding-8B | qwen | text | text | open weights | context: 32768 / output: 8192 | input: 0.1 / output: 0.1 | 2026-02-01 |
| `qwen3-reranker-4b`<br />Qwen3-Reranker-4B | qwen | text | text | open weights | context: 32768 / output: 8192 | input: 0.12 / output: 0.12 | 2026-02-01 |
| `qwen3.5-122b`<br />Qwen3.5-122B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.9 / output: 3.6 | 2026-02-01 |
| `qwen3.5-9b`<br />Qwen3.5-9B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 8192 | input: 0.15 / output: 0.6 | 2026-02-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

