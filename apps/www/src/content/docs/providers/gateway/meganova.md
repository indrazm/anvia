---
title: "Meganova"
description: "Use Meganova through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1067
  label: "Meganova"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.meganova.ai/v1 |
| Environment | `MEGANOVA_API_KEY` |
| Provider docs | [https://docs.meganova.ai](https://docs.meganova.ai) |
| Models | 19 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.MEGANOVA_API_KEY,
  baseUrl: "https://api.meganova.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-R1-0528");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 2 / 19 models |
| Tools | 18 / 19 models |
| Structured output | 7 / 19 models |
| Reasoning | 10 / 19 models |
| Temperature | 19 / 19 models |
| Open weights | 18 / 19 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | reasoning, temperature, open weights | context: 163840 / output: 64000 | input: 0.5 / output: 2.15 | 2025-05-28 |
| `deepseek-ai/DeepSeek-V3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, temperature, open weights | context: 163840 / output: 163840 | input: 0.25 / output: 0.88 | 2025-03-24 |
| `deepseek-ai/DeepSeek-V3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, schema, temperature, open weights | context: 164000 / output: 164000 | input: 0.27 / output: 1 | 2025-08-25 |
| `deepseek-ai/DeepSeek-V3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, schema, temperature, open weights | context: 164000 / output: 164000 | input: 0.26 / output: 0.38 | 2025-12-03 |
| `deepseek-ai/DeepSeek-V3.2-Exp`<br />DeepSeek V3.2 Exp | deepseek | text | text | tools, schema, temperature, open weights | context: 164000 / output: 164000 | input: 0.27 / output: 0.4 | 2025-10-10 |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 0.1 / output: 0.3 | 2024-12-06 |
| `MiniMaxAI/MiniMax-M2.1`<br />MiniMax M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 131072 | input: 0.28 / output: 1.2 | 2025-12-23 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-02-12 |
| `mistralai/Mistral-Nemo-Instruct-2407`<br />Mistral Nemo Instruct 2407 | mistral | text | text | tools, schema, temperature, open weights | context: 131072 / output: 65536 | input: 0.02 / output: 0.04 | 2024-07-18 |
| `mistralai/Mistral-Small-3.2-24B-Instruct-2506`<br />Mistral Small 3.2 24B Instruct | mistral-small | image, text | text | tools, schema, temperature, open weights | context: 32768 / output: 8192 | input: 0 / output: 0 | 2025-06-20 |
| `moonshotai/Kimi-K2-Thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.6 | 2025-11-06 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.45 / output: 2.8 | 2026-01-27 |
| `Qwen/Qwen2.5-VL-32B-Instruct`<br />Qwen2.5 VL 32B Instruct | qwen | image, text | text | tools, schema, temperature, open weights | context: 16384 / output: 16384 | input: 0.2 / output: 0.6 | 2025-03-24 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 262000 / output: 262000 | input: 0.09 / output: 0.6 | 2025-07-23 |
| `Qwen/Qwen3.5-Plus`<br />Qwen3.5 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.4 / output: 2.4 / reasoning: 2.4 | 2026-02 |
| `XiaomiMiMo/MiMo-V2-Flash`<br />MiMo V2 Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32000 | input: 0.1 / output: 0.3 | 2025-12-17 |
| `zai-org/GLM-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.45 / output: 1.9 | 2025-09-30 |
| `zai-org/GLM-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.2 / output: 0.8 | 2025-12-22 |
| `zai-org/GLM-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.8 / output: 2.56 | 2026-02-11 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

