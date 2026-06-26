---
title: "SiliconFlow"
description: "Use SiliconFlow through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1108
  label: "SiliconFlow"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.siliconflow.com/v1 |
| Environment | `SILICONFLOW_API_KEY` |
| Provider docs | [https://cloud.siliconflow.com/models](https://cloud.siliconflow.com/models) |
| Models | 70 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SILICONFLOW_API_KEY,
  baseUrl: "https://api.siliconflow.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("baidu/ERNIE-4.5-300B-A47B");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text |
| Output modalities | text |
| Attachments | 18 / 70 models |
| Tools | 70 / 70 models |
| Structured output | 66 / 70 models |
| Reasoning | 31 / 70 models |
| Temperature | 70 / 70 models |
| Open weights | 7 / 70 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `baidu/ERNIE-4.5-300B-A47B` | ernie | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.28 / output: 1.1 | 2025-11-25 |
| `ByteDance-Seed/Seed-OSS-36B-Instruct` | seed | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.21 / output: 0.57 | 2025-11-25 |
| `deepseek-ai/DeepSeek-R1` | deepseek-thinking | text | text | tools, schema, reasoning, temperature | context: 164000 / output: 164000 | input: 0.5 / output: 2.18 | 2025-11-25 |
| `deepseek-ai/DeepSeek-R1-Distill-Qwen-14B` | qwen | text | text | tools, schema, reasoning, temperature | context: 131000 / output: 131000 | input: 0.1 / output: 0.1 | 2025-11-25 |
| `deepseek-ai/DeepSeek-R1-Distill-Qwen-32B` | qwen | text | text | tools, schema, reasoning, temperature | context: 131000 / output: 131000 | input: 0.18 / output: 0.18 | 2025-11-25 |
| `deepseek-ai/DeepSeek-V3` | deepseek | text | text | tools, schema, temperature | context: 164000 / output: 164000 | input: 0.25 / output: 1 | 2025-11-25 |
| `deepseek-ai/DeepSeek-V3.1` | deepseek | text | text | tools, schema, reasoning, temperature | context: 164000 / output: 164000 | input: 0.27 / output: 1 | 2025-11-25 |
| `deepseek-ai/DeepSeek-V3.1-Terminus` | deepseek | text | text | tools, schema, reasoning, temperature | context: 164000 / output: 164000 | input: 0.27 / output: 1 | 2025-11-25 |
| `deepseek-ai/DeepSeek-V3.2` | deepseek | text | text | tools, schema, reasoning, temperature | context: 164000 / output: 164000 | input: 0.27 / output: 0.42 | 2025-12-03 |
| `deepseek-ai/DeepSeek-V3.2-Exp` | deepseek | text | text | tools, schema, reasoning, temperature | context: 164000 / output: 164000 | input: 0.27 / output: 0.41 | 2025-11-25 |
| `deepseek-ai/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `deepseek-ai/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.48 / cache_read: 0.145 | 2026-04-24 |
| `deepseek-ai/deepseek-vl2` | deepseek | image, text | text | tools, schema, temperature | context: 4000 / output: 4000 | input: 0.15 / output: 0.15 | 2025-11-25 |
| `google/gemma-4-26B-A4B-it`<br />Gemma 4 26B A4B IT | gemma | text | text | tools, schema, temperature | context: 262144 / output: 262144 | input: 0.12 / output: 0.4 | 2026-04-02 |
| `google/gemma-4-31B-it`<br />Gemma 4 31B IT | gemma | text | text | tools, schema, temperature | context: 262144 / output: 262144 | input: 0.13 / output: 0.4 | 2026-04-02 |
| `inclusionAI/Ling-flash-2.0` | ling | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.14 / output: 0.57 | 2025-11-25 |
| `MiniMaxAI/MiniMax-M2.5` | minimax | text | text | tools, temperature | context: 197000 / output: 131000 | input: 0.3 / output: 1.2 | 2026-06-15 |
| `moonshotai/Kimi-K2-Instruct` | kimi-k2 | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.58 / output: 2.29 | 2025-11-25 |
| `moonshotai/Kimi-K2-Instruct-0905` | kimi-k2 | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.4 / output: 2 | 2025-11-25 |
| `moonshotai/Kimi-K2-Thinking` | kimi-thinking | text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.55 / output: 2.5 | 2025-11-25 |
| `moonshotai/Kimi-K2.5` | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.45 / output: 2.25 | 2026-01-27 |
| `moonshotai/Kimi-K2.6` | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.77 / output: 4 / cache_read: 0.2 | 2026-06-15 |
| `openai/gpt-oss-120b` | gpt-oss | text | text | tools, schema, reasoning, temperature | context: 131000 / output: 8000 | input: 0.05 / output: 0.45 | 2025-11-25 |
| `openai/gpt-oss-20b` | gpt-oss | text | text | tools, schema, temperature | context: 131000 / output: 8000 | input: 0.04 / output: 0.18 | 2025-11-25 |
| `Qwen/Qwen2.5-14B-Instruct` | qwen | text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.1 / output: 0.1 | 2025-11-25 |
| `Qwen/Qwen2.5-32B-Instruct` | qwen | text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.18 / output: 0.18 | 2025-11-25 |
| `Qwen/Qwen2.5-72B-Instruct` | qwen | text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.59 / output: 0.59 | 2025-11-25 |
| `Qwen/Qwen2.5-72B-Instruct-128K` | qwen | text | text | tools, schema, temperature | context: 131000 / output: 4000 | input: 0.59 / output: 0.59 | 2025-11-25 |
| `Qwen/Qwen2.5-7B-Instruct` | qwen | text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.05 / output: 0.05 | 2025-11-25 |
| `Qwen/Qwen2.5-Coder-32B-Instruct` | qwen | text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.18 / output: 0.18 | 2025-11-25 |
| `Qwen/Qwen2.5-VL-32B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.27 / output: 0.27 | 2025-11-25 |
| `Qwen/Qwen2.5-VL-72B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 131000 / output: 4000 | input: 0.59 / output: 0.59 | 2025-11-25 |
| `Qwen/Qwen2.5-VL-7B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 33000 / output: 4000 | input: 0.05 / output: 0.05 | 2025-11-25 |
| `Qwen/Qwen3-14B` | qwen | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.07 / output: 0.28 | 2025-11-25 |
| `Qwen/Qwen3-235B-A22B` | qwen | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.35 / output: 1.42 | 2025-11-25 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507` | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.09 / output: 0.6 | 2025-11-25 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507` | qwen | text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.13 / output: 0.6 | 2025-11-25 |
| `Qwen/Qwen3-30B-A3B-Instruct-2507` | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.09 / output: 0.3 | 2025-11-25 |
| `Qwen/Qwen3-30B-A3B-Thinking-2507` | qwen | text | text | tools, schema, reasoning, temperature | context: 262000 / output: 131000 | input: 0.09 / output: 0.3 | 2025-11-25 |
| `Qwen/Qwen3-32B` | qwen | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.14 / output: 0.57 | 2025-11-25 |
| `Qwen/Qwen3-8B` | qwen | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.06 / output: 0.06 | 2025-11-25 |
| `Qwen/Qwen3-Coder-30B-A3B-Instruct` | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.07 / output: 0.28 | 2025-11-25 |
| `Qwen/Qwen3-Coder-480B-A35B-Instruct` | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.25 / output: 1 | 2025-11-25 |
| `Qwen/Qwen3-Next-80B-A3B-Instruct` | qwen | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.14 / output: 1.4 | 2025-11-25 |
| `Qwen/Qwen3-Next-80B-A3B-Thinking` | qwen | text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.14 / output: 0.57 | 2025-11-25 |
| `Qwen/Qwen3-Omni-30B-A3B-Captioner` | qwen | audio | text | tools, schema, temperature | context: 66000 / output: 66000 | input: 0.1 / output: 0.4 | 2025-11-25 |
| `Qwen/Qwen3-Omni-30B-A3B-Instruct` | qwen | audio, image, text | text | tools, schema, temperature | context: 66000 / output: 66000 | input: 0.1 / output: 0.4 | 2025-11-25 |
| `Qwen/Qwen3-Omni-30B-A3B-Thinking` | qwen | audio, image, text | text | tools, schema, reasoning, temperature | context: 66000 / output: 66000 | input: 0.1 / output: 0.4 | 2025-11-25 |
| `Qwen/Qwen3-VL-235B-A22B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.3 / output: 1.5 | 2025-11-25 |
| `Qwen/Qwen3-VL-235B-A22B-Thinking` | qwen | image, text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.45 / output: 3.5 | 2025-11-25 |
| `Qwen/Qwen3-VL-30B-A3B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.29 / output: 1 | 2025-11-25 |
| `Qwen/Qwen3-VL-30B-A3B-Thinking` | qwen | image, text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.29 / output: 1 | 2025-11-25 |
| `Qwen/Qwen3-VL-32B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.2 / output: 0.6 | 2025-11-25 |
| `Qwen/Qwen3-VL-32B-Thinking` | qwen | image, text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.2 / output: 1.5 | 2025-11-25 |
| `Qwen/Qwen3-VL-8B-Instruct` | qwen | image, text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0.18 / output: 0.68 | 2025-11-25 |
| `Qwen/Qwen3-VL-8B-Thinking` | qwen | image, text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.18 / output: 2 | 2025-11-25 |
| `Qwen/QwQ-32B` | qwen | text | text | tools, schema, reasoning, temperature | context: 131000 / output: 131000 | input: 0.15 / output: 0.58 | 2025-11-25 |
| `stepfun-ai/Step-3.5-Flash` | step | text | text | tools, schema, reasoning, temperature | context: 262000 / output: 262000 | input: 0.1 / output: 0.3 | 2026-02-11 |
| `tencent/Hunyuan-A13B-Instruct` | hunyuan | text | text | tools, schema, reasoning, temperature | context: 131000 / output: 131000 | input: 0.14 / output: 0.57 | 2025-11-25 |
| `tencent/Hy3-preview`<br />Hy3 preview | Hy | text | text | tools, reasoning, temperature | context: 262144 / output: 262144 | input: 0.066 / output: 0.26 / cache_read: 0.029 | 2026-04-20 |
| `zai-org/GLM-4.5` | glm | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.4 / output: 2 | 2025-11-25 |
| `zai-org/GLM-4.5-Air` | glm-air | text | text | tools, schema, temperature | context: 131000 / output: 131000 | input: 0.14 / output: 0.86 | 2025-11-25 |
| `zai-org/GLM-4.5V` | glm | image, text | text | tools, schema, temperature | context: 66000 / output: 66000 | input: 0.14 / output: 0.86 | 2025-11-25 |
| `zai-org/GLM-4.6` | glm | text | text | tools, schema, temperature | context: 205000 / output: 205000 | input: 0.5 / output: 1.9 | 2025-11-25 |
| `zai-org/GLM-4.6V` | glm | image, text | text | tools, reasoning, temperature | context: 131000 / output: 131000 | input: 0.3 / output: 0.9 | 2025-12-07 |
| `zai-org/GLM-4.7` | glm | text | text | tools, schema, reasoning, temperature | context: 205000 / output: 205000 | input: 0.6 / output: 2.2 | 2025-12-22 |
| `zai-org/GLM-5` | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 205000 / output: 205000 | input: 0.95 / output: 2.55 | 2026-06-15 |
| `zai-org/GLM-5.1` | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 205000 / output: 205000 | input: 1.4 / output: 4.4 / cache_write: 0 | 2026-04-08 |
| `zai-org/GLM-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 205000 / output: 205000 | input: 1.4 / output: 4.4 / cache_write: 0 | 2026-06-13 |
| `zai-org/GLM-5V-Turbo` | glm | image, text | text | tools, reasoning, temperature | context: 200000 / output: 131072 | input: 1.2 / output: 4 / cache_write: 0 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

