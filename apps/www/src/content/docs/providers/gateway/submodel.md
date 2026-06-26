---
title: "submodel"
description: "Use submodel through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1114
  label: "submodel"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://llm.submodel.ai/v1 |
| Environment | `SUBMODEL_INSTAGEN_ACCESS_KEY` |
| Provider docs | [https://submodel.gitbook.io](https://submodel.gitbook.io) |
| Models | 9 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SUBMODEL_INSTAGEN_ACCESS_KEY,
  baseUrl: "https://llm.submodel.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-R1-0528");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 9 models |
| Tools | 9 / 9 models |
| Structured output | 0 / 9 models |
| Reasoning | 5 / 9 models |
| Temperature | 9 / 9 models |
| Open weights | 5 / 9 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | tools, reasoning, temperature | context: 75000 / output: 163840 | input: 0.5 / output: 2.15 | 2025-08-23 |
| `deepseek-ai/DeepSeek-V3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, temperature | context: 75000 / output: 163840 | input: 0.2 / output: 0.8 | 2025-08-23 |
| `deepseek-ai/DeepSeek-V3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, reasoning, temperature | context: 75000 / output: 163840 | input: 0.2 / output: 0.8 | 2025-08-23 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.1 / output: 0.5 | 2025-08-23 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 131072 | input: 0.2 / output: 0.3 | 2025-08-23 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen3 235B A22B Thinking 2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.2 / output: 0.6 | 2025-08-23 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, temperature | context: 262144 / output: 262144 | input: 0.2 / output: 0.8 | 2025-08-23 |
| `zai-org/GLM-4.5-Air`<br />GLM 4.5 Air | glm-air | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0.1 / output: 0.5 | 2025-07-28 |
| `zai-org/GLM-4.5-FP8`<br />GLM 4.5 FP8 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.2 / output: 0.8 | 2025-07-28 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

