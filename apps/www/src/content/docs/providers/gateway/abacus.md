---
title: "Abacus"
description: "Use Abacus through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1001
  label: "Abacus"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://routellm.abacus.ai/v1 |
| Environment | `ABACUS_API_KEY` |
| Provider docs | [https://abacus.ai/help/api](https://abacus.ai/help/api) |
| Models | 65 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.ABACUS_API_KEY,
  baseUrl: "https://routellm.abacus.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-3-7-sonnet-20250219");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 43 / 65 models |
| Tools | 65 / 65 models |
| Structured output | 10 / 65 models |
| Reasoning | 47 / 65 models |
| Temperature | 48 / 65 models |
| Open weights | 20 / 65 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-3-7-sonnet-20250219`<br />Claude Sonnet 3.7 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 | 2025-02-19 |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 | 2025-10-15 |
| `claude-opus-4-1-20250805`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 | 2025-08-05 |
| `claude-opus-4-20250514`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 | 2025-05-14 |
| `claude-opus-4-5-20251101`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 | 2025-11-01 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 | 2026-02-05 |
| `claude-sonnet-4-20250514`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 | 2025-05-14 |
| `claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 | 2025-09-29 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 | 2026-02-17 |
| `deepseek-ai/DeepSeek-R1`<br />DeepSeek R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 3 / output: 7 | 2025-01-20 |
| `deepseek-ai/DeepSeek-V3.1-Terminus`<br />DeepSeek V3.1 Terminus | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.27 / output: 1 | 2025-06-01 |
| `deepseek-ai/DeepSeek-V3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.27 / output: 0.4 | 2025-06-15 |
| `deepseek/deepseek-v3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.55 / output: 1.66 | 2025-01-20 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 | 2025-06-05 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 | 2025-03-25 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 | 2025-12-17 |
| `gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / cache_write: 1 | 2026-03-01 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 | 2026-02-19 |
| `gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 | 2025-04-14 |
| `gpt-4.1-mini`<br />GPT-4.1 Mini | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 | 2025-04-14 |
| `gpt-4.1-nano`<br />GPT-4.1 Nano | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 | 2025-04-14 |
| `gpt-4o-2024-11-20`<br />GPT-4o (2024-11-20) | gpt | audio, image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2024-11-20 |
| `gpt-4o-mini`<br />GPT-4o Mini | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2024-07-18 |
| `gpt-5`<br />GPT-5 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-08-07 |
| `gpt-5-codex`<br />GPT-5 Codex | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 | 2025-09-15 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.25 / output: 2 | 2025-08-07 |
| `gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.05 / output: 0.4 | 2025-08-07 |
| `gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `gpt-5.1-chat-latest`<br />GPT-5.1 Chat Latest | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2025-12-11 |
| `gpt-5.2-chat-latest`<br />GPT-5.2 Chat Latest | gpt | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-01-01 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 | 2025-12-11 |
| `gpt-5.3-chat-latest`<br />GPT-5.3 Chat Latest | gpt | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-03-01 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 | 2026-02-05 |
| `gpt-5.3-codex-xhigh`<br />GPT-5.3 Codex XHigh | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 | 2026-03-05 |
| `grok-4-0709`<br />Grok 4 | grok | image, text | text | tools, reasoning, temperature | context: 256000 / output: 16384 | input: 3 / output: 15 | 2025-07-09 |
| `grok-4-1-fast-non-reasoning`<br />Grok 4.1 Fast (Non-Reasoning) | grok | image, text | text | tools, temperature | context: 2000000 / output: 16384 | input: 0.2 / output: 0.5 | 2025-11-17 |
| `grok-4-fast-non-reasoning`<br />Grok 4 Fast (Non-Reasoning) | grok | image, text | text | tools, temperature | context: 2000000 / output: 16384 | input: 0.2 / output: 0.5 | 2025-07-09 |
| `grok-code-fast-1`<br />Grok Code Fast 1 | grok | image, text | text | tools, temperature | context: 256000 / output: 16384 | input: 0.2 / output: 1.5 | 2025-09-01 |
| `kimi-k2-turbo-preview`<br />Kimi K2 Turbo Preview | kimi-k2 | text | text | tools, temperature | context: 256000 / output: 8192 | input: 0.15 / output: 8 | 2025-07-08 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.6 / output: 3 | 2026-01 |
| `llama-3.3-70b-versatile`<br />Llama 3.3 70B Versatile | llama | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.59 / output: 0.79 | 2024-12-06 |
| `meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8`<br />Llama 4 Maverick 17B 128E Instruct FP8 | llama | image, text | text | tools, temperature, open weights | context: 1000000 / output: 32768 | input: 0.14 / output: 0.59 | 2025-04-05 |
| `meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo`<br />Llama 3.1 405B Instruct Turbo | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 3.5 / output: 3.5 | 2024-07-23 |
| `meta-llama/Meta-Llama-3.1-8B-Instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0.02 / output: 0.05 | 2024-07-23 |
| `o3` | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 | 2025-04-16 |
| `o3-mini` | o-mini | text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2025-01-29 |
| `o3-pro` | o-pro | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 20 / output: 40 | 2025-06-10 |
| `o4-mini` | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2025-04-16 |
| `openai/gpt-oss-120b`<br />GPT-OSS 120B | gpt-oss | image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.08 / output: 0.44 | 2025-08-05 |
| `qwen-2.5-coder-32b`<br />Qwen 2.5 Coder 32B | qwen | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.79 / output: 0.79 | 2024-11-11 |
| `Qwen/Qwen2.5-72B-Instruct`<br />Qwen 2.5 72B Instruct | qwen | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.11 / output: 0.38 | 2024-09-19 |
| `Qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen3 235B A22B Instruct | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 8192 | input: 0.13 / output: 0.6 | 2025-07-01 |
| `Qwen/Qwen3-32B`<br />Qwen3 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.09 / output: 0.29 | 2025-04-29 |
| `Qwen/qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.29 / output: 1.2 | 2025-07-22 |
| `Qwen/QwQ-32B`<br />QwQ 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 32768 / output: 32768 | input: 0.4 / output: 0.4 | 2024-11-28 |
| `qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 16384 | input: 1.2 / output: 6 | 2025-05-28 |
| `route-llm`<br />Route LLM | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 3 / output: 15 | 2024-01-01 |
| `zai-org/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0.6 / output: 2.2 | 2025-07-28 |
| `zai-org/glm-4.6`<br />GLM-4.6 | glm | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.6 / output: 2.2 | 2025-03-01 |
| `zai-org/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0.6 / output: 2.2 | 2025-06-01 |
| `zai-org/glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1 / output: 3.2 | 2026-02-11 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

