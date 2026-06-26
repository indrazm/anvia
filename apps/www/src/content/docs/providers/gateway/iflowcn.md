---
title: "iFlow"
description: "Use iFlow through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1052
  label: "iFlow"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://apis.iflow.cn/v1 |
| Environment | `IFLOW_API_KEY` |
| Provider docs | [https://platform.iflow.cn/en/docs](https://platform.iflow.cn/en/docs) |
| Models | 14 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.IFLOW_API_KEY,
  baseUrl: "https://apis.iflow.cn/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-r1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 1 / 14 models |
| Tools | 14 / 14 models |
| Structured output | 0 / 14 models |
| Reasoning | 4 / 14 models |
| Temperature | 14 / 14 models |
| Open weights | 8 / 14 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32000 | input: 0 / output: 0 | 2025-01-20 |
| `deepseek-v3`<br />DeepSeek-V3 | deepseek | text | text | tools, temperature, open weights | context: 128000 / output: 32000 | input: 0 / output: 0 | 2024-12-26 |
| `deepseek-v3.2`<br />DeepSeek-V3.2-Exp | deepseek | text | text | tools, temperature, open weights | context: 128000 / output: 64000 | input: 0 / output: 0 | 2025-01-01 |
| `glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 0 / output: 0 | 2025-11-13 |
| `kimi-k2`<br />Kimi-K2 | kimi-k2 | text | text | tools, temperature | context: 128000 / output: 64000 | input: 0 / output: 0 | 2024-12-01 |
| `kimi-k2-0905`<br />Kimi-K2-0905 | kimi-k2 | text | text | tools, temperature | context: 256000 / output: 64000 | input: 0 / output: 0 | 2025-09-05 |
| `qwen3-235b`<br />Qwen3-235B-A22B | qwen | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32000 | input: 0 / output: 0 | 2024-12-01 |
| `qwen3-235b-a22b-instruct`<br />Qwen3-235B-A22B-Instruct | qwen | text | text | tools, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2025-07-01 |
| `qwen3-235b-a22b-thinking-2507`<br />Qwen3-235B-A22B-Thinking | qwen | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2025-07-01 |
| `qwen3-32b`<br />Qwen3-32B | qwen | text | text | tools, temperature, open weights | context: 128000 / output: 32000 | input: 0 / output: 0 | 2024-12-01 |
| `qwen3-coder-plus`<br />Qwen3-Coder-Plus | qwen | text | text | tools, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2025-07-01 |
| `qwen3-max`<br />Qwen3-Max | qwen | text | text | tools, temperature | context: 256000 / output: 32000 | input: 0 / output: 0 | 2025-01-01 |
| `qwen3-max-preview`<br />Qwen3-Max-Preview | qwen | text | text | tools, temperature | context: 256000 / output: 32000 | input: 0 / output: 0 | 2025-01-01 |
| `qwen3-vl-plus`<br />Qwen3-VL-Plus | qwen | image, text | text | tools, temperature | context: 256000 / output: 32000 | input: 0 / output: 0 | 2025-01-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

