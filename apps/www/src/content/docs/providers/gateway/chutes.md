---
title: "Chutes"
description: "Use Chutes through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1022
  label: "Chutes"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://llm.chutes.ai/v1 |
| Environment | `CHUTES_API_KEY` |
| Provider docs | [https://llm.chutes.ai/v1/models](https://llm.chutes.ai/v1/models) |
| Models | 39 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CHUTES_API_KEY,
  baseUrl: "https://llm.chutes.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-ai/DeepSeek-R1-0528-TEE");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 11 / 39 models |
| Tools | 30 / 39 models |
| Structured output | 35 / 39 models |
| Reasoning | 22 / 39 models |
| Temperature | 39 / 39 models |
| Open weights | 39 / 39 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-ai/DeepSeek-R1-0528-TEE`<br />DeepSeek R1 0528 TEE | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.45 / output: 2.15 / cache_read: 0.225 | 2025-05-29 |
| `deepseek-ai/DeepSeek-R1-Distill-Llama-70B`<br />DeepSeek R1 Distill Llama 70B | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.0272 / output: 0.1087 / cache_read: 0.0136 | 2026-04-25 |
| `deepseek-ai/DeepSeek-V3-0324-TEE`<br />DeepSeek V3 0324 TEE | deepseek | text | text | tools, schema, temperature, open weights | context: 163840 / output: 65536 | input: 0.25 / output: 1 / cache_read: 0.125 | 2026-04-25 |
| `deepseek-ai/DeepSeek-V3.1-TEE`<br />DeepSeek V3.1 TEE | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.27 / output: 1 / cache_read: 0.135 | 2026-04-25 |
| `deepseek-ai/DeepSeek-V3.2-TEE`<br />DeepSeek V3.2 TEE | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.28 / output: 0.42 / cache_read: 0.14 | 2026-04-25 |
| `google/gemma-4-31B-turbo-TEE`<br />gemma 4 31B turbo TEE | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.13 / output: 0.38 / cache_read: 0.065 | 2026-04-02 |
| `MiniMaxAI/MiniMax-M2.5-TEE`<br />MiniMax M2.5 TEE | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196608 / output: 65536 | input: 0.15 / output: 1.2 / cache_read: 0.075 | 2026-02-12 |
| `moonshotai/Kimi-K2.5-TEE`<br />Kimi K2.5 TEE | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65535 | input: 0.44 / output: 2 / cache_read: 0.22 | 2026-01 |
| `moonshotai/Kimi-K2.6-TEE`<br />Kimi K2.6 TEE | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65535 | input: 0.95 / output: 4 / cache_read: 0.475 | 2026-04-21 |
| `NousResearch/DeepHermes-3-Mistral-24B-Preview`<br />DeepHermes 3 Mistral 24B Preview | nousresearch | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.0245 / output: 0.0978 / cache_read: 0.01225 | 2026-04-25 |
| `NousResearch/Hermes-4-14B`<br />Hermes 4 14B | nousresearch | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.0136 / output: 0.0543 / cache_read: 0.0068 | 2026-04-25 |
| `openai/gpt-oss-120b-TEE`<br />gpt oss 120b TEE | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.09 / output: 0.36 / cache_read: 0.045 | 2026-04-25 |
| `Qwen/Qwen2.5-72B-Instruct`<br />Qwen2.5 72B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.2989 / output: 1.1957 / cache_read: 0.14945 | 2026-04-25 |
| `Qwen/Qwen2.5-Coder-32B-Instruct`<br />Qwen2.5 Coder 32B Instruct | qwen | text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 0.0272 / output: 0.1087 / cache_read: 0.0136 | 2026-04-25 |
| `Qwen/Qwen2.5-VL-32B-Instruct`<br />Qwen2.5 VL 32B Instruct | qwen | image, text | text | schema, temperature, open weights | context: 16384 / output: 16384 | input: 0.0543 / output: 0.2174 / cache_read: 0.02715 | 2026-04-25 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507-TEE`<br />Qwen3 235B A22B Instruct 2507 TEE | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.1 / output: 0.6 / cache_read: 0.05 | 2025-04 |
| `Qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen3 235B A22B Thinking 2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.11 / output: 0.6 / cache_read: 0.055 | 2026-04-25 |
| `Qwen/Qwen3-30B-A3B`<br />Qwen3 30B A3B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.06 / output: 0.22 / cache_read: 0.03 | 2026-04-25 |
| `Qwen/Qwen3-32B-TEE`<br />Qwen3 32B TEE | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.08 / output: 0.24 / cache_read: 0.04 | 2025-04 |
| `Qwen/Qwen3-Coder-Next-TEE`<br />Qwen3 Coder Next TEE | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.12 / output: 0.75 / cache_read: 0.06 | 2026-04-25 |
| `Qwen/Qwen3-Next-80B-A3B-Instruct`<br />Qwen3 Next 80B A3B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.8 / cache_read: 0.05 | 2026-04-25 |
| `Qwen/Qwen3.5-397B-A17B-TEE`<br />Qwen3.5 397B A17B TEE | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.39 / output: 2.34 / cache_read: 0.195 | 2026-02-15 |
| `Qwen/Qwen3.6-27B-TEE`<br />Qwen3.6 27B TEE | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.195 / output: 1.56 / cache_read: 0.0975 | 2026-04-22 |
| `Qwen/Qwen3Guard-Gen-0.6B`<br />Qwen3Guard Gen 0.6B | qwen | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 0.01 / output: 0.0109 / cache_read: 0.005 | 2026-04-25 |
| `rednote-hilab/dots.ocr`<br />dots.ocr | rednote | image, text | text | schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.01 / output: 0.0109 / cache_read: 0.005 | 2026-04-25 |
| `tngtech/DeepSeek-TNG-R1T2-Chimera-TEE`<br />DeepSeek TNG R1T2 Chimera TEE | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 0.3 / output: 1.1 / cache_read: 0.15 | 2026-04-25 |
| `unsloth/gemma-3-12b-it`<br />gemma 3 12b it | unsloth | image, text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.03 / output: 0.1 / cache_read: 0.015 | 2026-04-25 |
| `unsloth/gemma-3-27b-it`<br />gemma 3 27b it | unsloth | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 65536 | input: 0.0272 / output: 0.1087 / cache_read: 0.0136 | 2026-04-25 |
| `unsloth/gemma-3-4b-it`<br />gemma 3 4b it | unsloth | image, text | text | schema, temperature, open weights | context: 96000 / output: 96000 | input: 0.01 / output: 0.0272 / cache_read: 0.005 | 2026-04-25 |
| `unsloth/Llama-3.2-1B-Instruct`<br />Llama 3.2 1B Instruct | unsloth | text | text | temperature, open weights | context: 16384 / output: 8192 | input: 0.01 / output: 0.0109 / cache_read: 0.005 | 2026-04-25 |
| `unsloth/Llama-3.2-3B-Instruct`<br />Llama 3.2 3B Instruct | unsloth | text | text | temperature, open weights | context: 16384 / output: 16384 | input: 0.01 / output: 0.0136 / cache_read: 0.005 | 2026-04-25 |
| `unsloth/Mistral-Nemo-Instruct-2407`<br />Mistral Nemo Instruct 2407 | unsloth | text | text | schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.02 / output: 0.04 / cache_read: 0.01 | 2026-04-25 |
| `XiaomiMiMo/MiMo-V2-Flash-TEE`<br />MiMo V2 Flash TEE | mimo | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.09 / output: 0.29 / cache_read: 0.045 | 2026-02-04 |
| `zai-org/GLM-4.6V`<br />GLM 4.6V | glm | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.3 / output: 0.9 / cache_read: 0.15 | 2026-04-25 |
| `zai-org/GLM-4.7-FP8`<br />GLM 4.7 FP8 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 0.2989 / output: 1.1957 / cache_read: 0.14945 | 2026-04-25 |
| `zai-org/GLM-4.7-TEE`<br />GLM 4.7 TEE | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 0.39 / output: 1.75 / cache_read: 0.195 | 2025-12-22 |
| `zai-org/GLM-5-TEE`<br />GLM 5 TEE | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 0.95 / output: 2.55 / cache_read: 0.475 | 2026-02-12 |
| `zai-org/GLM-5-Turbo`<br />GLM 5 Turbo | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 0.4891 / output: 1.9565 / cache_read: 0.24455 | 2026-04-25 |
| `zai-org/GLM-5.1-TEE`<br />GLM 5.1 TEE | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 1.05 / output: 3.5 / cache_read: 0.525 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

