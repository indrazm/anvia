---
title: "Cortecs"
description: "Use Cortecs through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1029
  label: "Cortecs"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.cortecs.ai/v1 |
| Environment | `CORTECS_API_KEY` |
| Provider docs | [https://api.cortecs.ai/v1/models](https://api.cortecs.ai/v1/models) |
| Models | 56 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CORTECS_API_KEY,
  baseUrl: "https://api.cortecs.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-4-5-sonnet");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text, video |
| Output modalities | text |
| Attachments | 15 / 56 models |
| Tools | 55 / 56 models |
| Structured output | 6 / 56 models |
| Reasoning | 41 / 56 models |
| Temperature | 52 / 56 models |
| Open weights | 42 / 56 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-4-5-sonnet`<br />Claude 4.5 Sonnet | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | input: 3.259 / output: 16.296 | 2025-09-29 |
| `claude-4-6-sonnet`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 1000000 | input: 3.59 / output: 17.92 | 2026-03-13 |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | input: 1.09 / output: 5.43 | 2025-10-15 |
| `claude-opus4-5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | input: 5.98 / output: 29.89 | 2025-11-24 |
| `claude-opus4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 1000000 | input: 5.98 / output: 29.89 | 2026-03-13 |
| `claude-opus4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5.6 / output: 27.99 / cache_read: 0.56 / cache_write: 6.99 | 2026-04-16 |
| `claude-opus4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5.64 / output: 28.198 / cache_read: 0.563 / cache_write: 7.049 | 2026-05-28 |
| `claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 64000 | input: 3.307 / output: 16.536 | 2025-05-22 |
| `codestral-2508`<br />Codestral 2508 | mistral | text | text | tools, temperature, open weights | context: 256000 / output: 256000 | input: 0.3 / output: 0.9 / cache_read: 0.03 | 2025-07-30 |
| `deepseek-r1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 164000 / output: 164000 | input: 0.585 / output: 2.307 | 2025-05-28 |
| `deepseek-v3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.551 / output: 1.654 | 2025-03-24 |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 0.266 / output: 0.444 | 2025-12-01 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 384000 | input: 0.133 / output: 0.266 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 384000 | input: 1.553 / output: 3.106 / cache_read: 0.003625 | 2026-04-24 |
| `devstral-2512`<br />Devstral 2 2512 | - | text | text | tools, temperature, open weights | context: 262000 / output: 262000 | input: 0 / output: 0 | 2025-12-09 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | image, text | text | tools, temperature | context: 1048576 / output: 65535 | input: 1.654 / output: 11.024 | 2025-06-17 |
| `glm-4.5`<br />GLM 4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.67 / output: 2.46 | 2025-07-29 |
| `glm-4.5-air`<br />GLM 4.5 Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.22 / output: 1.34 | 2025-08-01 |
| `glm-4.7`<br />GLM 4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 198000 / output: 198000 | input: 0.45 / output: 2.23 | 2025-12-22 |
| `glm-4.7-flash`<br />GLM-4.7-Flash | glm | text | text | tools, reasoning, temperature, open weights | context: 203000 / output: 203000 | input: 0.09 / output: 0.53 | 2025-08-08 |
| `glm-5`<br />GLM 5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 202752 | input: 1.08 / output: 3.44 | 2026-02-11 |
| `glm-5-turbo`<br />GLM-5-Turbo | glm | text | text | tools, schema, reasoning, temperature | context: 200000 / output: 131072 | input: 1.235 / output: 4.118 / cache_read: 0.308 / cache_write: 1.544 | 2026-03-16 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1.31 / output: 4.1 / cache_read: 0.24 | 2026-04-14 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.44 / output: 4.53 / cache_read: 0.39 | 2026-06-13 |
| `glm-5v-turbo`<br />GLM-5V-Turbo | glm | image, pdf, text, video | text | tools, reasoning, temperature | context: 200000 / output: 131072 | input: 1.235 / output: 4.118 / cache_read: 0.308 / cache_write: 1.544 | 2026-04-01 |
| `gpt-4.1`<br />GPT 4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2.354 / output: 9.417 | 2025-04-14 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / output: 128000 | input: 3 / output: 16.13 / cache_read: 0.25 | 2026-03-05 |
| `gpt-oss-120b`<br />GPT Oss 120b | gpt-oss | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0 / output: 0 | 2025-08-05 |
| `hermes-4-70b`<br />Hermes 4 70B | - | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.116 / output: 0.358 | 2025-08-26 |
| `intellect-3`<br />INTELLECT 3 | - | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.219 / output: 1.202 | 2025-11-26 |
| `kimi-k2-instruct`<br />Kimi K2 Instruct | kimi-k2 | text | text | tools, temperature, open weights | context: 131000 / output: 131000 | input: 0.551 / output: 2.646 | 2025-09-05 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | - | text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.656 / output: 2.731 | 2025-12-08 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-thinking | image, text, video | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.55 / output: 2.76 | 2026-01-27 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-thinking | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.81 / output: 3.54 / cache_read: 0.2 | 2026-04-17 |
| `kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 1.28 / output: 4.63 / cache_read: 0.32 | 2026-06-12 |
| `llama-3.1-405b-instruct`<br />Llama 3.1 405B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0 / output: 0 | 2024-07-23 |
| `llama-3.3-70b-instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 131000 / output: 131000 | input: 0.089 / output: 0.275 | 2024-12-06 |
| `llama-4-maverick`<br />Llama 4 Maverick 17B Instruct | llama | image, text | text | tools, temperature, open weights | context: 1000000 / output: 16384 | input: 0.124 / output: 0.603 / cache_read: 0.03 / cache_write: 0.151 | 2025-04-05 |
| `minimax-m2`<br />MiniMax-M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 400000 / output: 400000 | input: 0.39 / output: 1.57 | 2025-10-27 |
| `minimax-m2.1`<br />MiniMax-M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196000 / output: 196000 | input: 0.34 / output: 1.34 | 2025-12-23 |
| `minimax-m2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.32 / output: 1.18 | 2026-02-12 |
| `minimax-m2.7`<br />MiniMax-m2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 196072 | input: 0.47 / output: 1.4 | 2026-03-18 |
| `minimax-m3`<br />MiniMax-M3 | minimax | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 128000 | input: 0.355 / output: 1.775 / cache_read: 0.089 | 2026-06-01 |
| `mistral-large-2512`<br />Mistral Large 3 2512 | mistral-large | image, text | text | tools, temperature, open weights | context: 256000 / output: 256000 | input: 0.5 / output: 1.5 / cache_read: 0.05 | 2025-12-01 |
| `mixtral-8x7B-instruct-v0.1`<br />Mixtral 8x7B Instruct v0.1 | - | text | text | reasoning, temperature, open weights | context: 32000 / output: 32000 | input: 0.438 / output: 0.68 | 2023-12-11 |
| `nemotron-3-super-120b-a12b`<br />Nemotron 3 Super 120B A12B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.266 / output: 0.799 | 2026-03-11 |
| `nova-pro-v1`<br />Nova Pro 1.0 | nova-pro | image, text | text | tools, temperature | context: 300000 / output: 5000 | input: 1.016 / output: 4.061 | 2024-12-03 |
| `qwen-2.5-72b-instruct`<br />Qwen2.5 72B Instruct | qwen | text | text | tools, temperature, open weights | context: 33000 / output: 33000 | input: 0.062 / output: 0.231 | 2024-09-19 |
| `qwen3-235b-a22b-instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 131000 / output: 131000 | input: 0.062 / output: 0.408 | 2025-07-23 |
| `qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, temperature, open weights | context: 16384 / output: 16384 | input: 0.099 / output: 0.33 | 2025-04-29 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3 Coder 30B A3B Instruct | qwen | text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.053 / output: 0.222 | 2025-07-31 |
| `qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, temperature, open weights | context: 262000 / output: 262000 | input: 0.441 / output: 1.984 | 2025-07-25 |
| `qwen3-coder-next`<br />Qwen3 Coder Next 80B | qwen | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 0.158 / output: 0.84 | 2026-02-04 |
| `qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B Thinking | - | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.164 / output: 1.311 | 2025-09-11 |
| `qwen3.5-122b-a10b`<br />Qwen3.5 122B A10B | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.444 / output: 3.106 | 2026-02-24 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B | qwen | text | text | tools, reasoning, temperature, open weights | context: 250000 / output: 250000 | input: 0.6 / output: 3.6 | 2026-02-16 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

