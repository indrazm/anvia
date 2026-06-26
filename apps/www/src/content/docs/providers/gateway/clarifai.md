---
title: "Clarifai"
description: "Use Clarifai through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1023
  label: "Clarifai"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.clarifai.com/v2/ext/openai/v1 |
| Environment | `CLARIFAI_PAT` |
| Provider docs | [https://docs.clarifai.com/compute/inference/](https://docs.clarifai.com/compute/inference/) |
| Models | 12 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CLARIFAI_PAT,
  baseUrl: "https://api.clarifai.com/v2/ext/openai/v1",
  completionApi: "chat",
});

const model = client.completionModel("arcee_ai/AFM/models/trinity-mini");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 5 / 12 models |
| Tools | 10 / 12 models |
| Structured output | 3 / 12 models |
| Reasoning | 8 / 12 models |
| Temperature | 12 / 12 models |
| Open weights | 11 / 12 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `arcee_ai/AFM/models/trinity-mini`<br />Trinity Mini | trinity-mini | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.045 / output: 0.15 | 2026-02-25 |
| `clarifai/main/models/mm-poly-8b`<br />MM Poly 8B | mm-poly | image, text, video | text | temperature | context: 32768 / output: 4096 | input: 0.658 / output: 1.11 | 2026-02-25 |
| `deepseek-ai/deepseek-ocr/models/DeepSeek-OCR`<br />DeepSeek OCR | deepseek | image, text | text | temperature, open weights | context: 8192 / output: 8192 | input: 0.2 / output: 0.7 | 2026-02-25 |
| `minimaxai/chat-completion/models/MiniMax-M2_5-high-throughput`<br />MiniMax-M2.5 High Throughput | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-02-25 |
| `mistralai/completion/models/Ministral-3-14B-Reasoning-2512`<br />Ministral 3 14B Reasoning 2512 | ministral | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 2.5 / output: 1.7 | 2025-12-12 |
| `mistralai/completion/models/Ministral-3-3B-Reasoning-2512`<br />Ministral 3 3B Reasoning 2512 | ministral | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.039 / output: 0.54825 | 2026-02-25 |
| `moonshotai/chat-completion/models/Kimi-K2_6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-04-21 |
| `openai/chat-completion/models/gpt-oss-120b-high-throughput`<br />GPT OSS 120B High Throughput | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.09 / output: 0.36 | 2026-02-25 |
| `openai/chat-completion/models/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.045 / output: 0.18 | 2025-12-12 |
| `qwen/qwenCoder/models/Qwen3-Coder-30B-A3B-Instruct`<br />Qwen3 Coder 30B A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.11458 / output: 0.74812 | 2026-02-12 |
| `qwen/qwenLM/models/Qwen3-30B-A3B-Instruct-2507`<br />Qwen3 30B A3B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.3 / output: 0.5 | 2026-02-25 |
| `qwen/qwenLM/models/Qwen3-30B-A3B-Thinking-2507`<br />Qwen3 30B A3B Thinking 2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.36 / output: 1.3 | 2026-02-25 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

