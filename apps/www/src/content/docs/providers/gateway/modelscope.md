---
title: "ModelScope"
description: "Use ModelScope through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1076
  label: "ModelScope"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api-inference.modelscope.cn/v1 |
| Environment | `MODELSCOPE_API_KEY` |
| Provider docs | [https://modelscope.cn/docs/model-service/API-Inference/intro](https://modelscope.cn/docs/model-service/API-Inference/intro) |
| Models | 7 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MODELSCOPE_API_KEY,
  baseUrl: "https://api-inference.modelscope.cn/v1",
  completionApi: "chat",
});

const model = client.completionModel("Qwen/Qwen3-235B-A22B-Instruct-2507");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 7 models |
| Tools | 7 / 7 models |
| Structured output | 0 / 7 models |
| Reasoning | 4 / 7 models |
| Temperature | 7 / 7 models |
| Open weights | 7 / 7 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 131072 | input: 0 / output: 0 | 2025-07-21 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen3-235B-A22B-Thinking-2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0 / output: 0 | 2025-07-25 |
| `Qwen/Qwen3-30B-A3B-Instruct-2507`<br />Qwen3 30B A3B Instruct 2507 | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 16384 | input: 0 / output: 0 | 2025-07-30 |
| `Qwen/Qwen3-30B-A3B-Thinking-2507`<br />Qwen3 30B A3B Thinking 2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 | 2025-07-30 |
| `Qwen/Qwen3-Coder-30B-A3B-Instruct`<br />Qwen3 Coder 30B A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0 / output: 0 | 2025-07-31 |
| `ZhipuAI/GLM-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0 / output: 0 | 2025-07-28 |
| `ZhipuAI/GLM-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 98304 | input: 0 / output: 0 | 2025-09-30 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

