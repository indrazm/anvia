---
title: "Venice AI"
description: "Review Venice AI connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1124
  label: "Venice AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `VENICE_API_KEY` |
| Provider docs | [https://docs.venice.ai](https://docs.venice.ai) |
| Models | 76 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 46 / 76 models |
| Tools | 73 / 76 models |
| Structured output | 67 / 76 models |
| Reasoning | 61 / 76 models |
| Temperature | 39 / 76 models |
| Open weights | 41 / 76 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `aion-labs-aion-2-0`<br />Aion 2.0 | - | text | text | reasoning | context: 128000 / output: 32768 | input: 1 / output: 2 / cache_read: 0.25 | 2026-06-11 |
| `arcee-trinity-large-thinking`<br />Trinity Large Thinking | trinity | text | text | tools, schema, reasoning, open weights | context: 256000 / output: 65536 | input: 0.3125 / output: 1.125 / cache_read: 0.075 | 2026-06-11 |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 12 / output: 60 / cache_read: 1.2 / cache_write: 15 | 2026-06-11 |
| `claude-opus-4-5`<br />Claude Opus 4.5 | claude-opus | image, text | text | tools, schema, reasoning, temperature | context: 198000 / output: 32768 | input: 6 / output: 30 / cache_read: 0.6 / cache_write: 7.5 | 2026-06-11 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 6 / output: 30 / cache_read: 0.6 / cache_write: 7.5 | 2026-06-11 |
| `claude-opus-4-6-fast`<br />Claude Opus 4.6 Fast | claude-opus | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 36 / output: 180 / cache_read: 3.6 / cache_write: 45 | 2026-06-11 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 6 / output: 30 / cache_read: 0.6 / cache_write: 7.5 | 2026-06-11 |
| `claude-opus-4-7-fast`<br />Claude Opus 4.7 Fast | claude-opus | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 36 / output: 180 / cache_read: 3.6 / cache_write: 45 | 2026-06-11 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 6 / output: 30 / cache_read: 0.6 / cache_write: 7.5 | 2026-06-11 |
| `claude-opus-4-8-fast`<br />Claude Opus 4.8 Fast | claude-opus | image, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 12 / output: 60 / cache_read: 1.2 / cache_write: 15 | 2026-06-11 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 | claude-sonnet | image, text | text | tools, schema, reasoning, temperature | context: 198000 / output: 64000 | input: 3.75 / output: 18.75 / cache_read: 0.375 / cache_write: 4.69 | 2026-06-11 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3.6 / output: 18 / cache_read: 0.36 / cache_write: 4.5 | 2026-06-11 |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, schema, reasoning, open weights | context: 160000 / output: 32768 | input: 0.33 / output: 0.48 / cache_read: 0.16 | 2026-06-11 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 32768 | input: 0.17 / output: 0.35 / cache_read: 0.028 | 2026-06-11 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 32768 | input: 1.73 / output: 3.796 / cache_read: 0.33 | 2026-06-11 |
| `gemini-3-1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 32768 | input: 2.5 / output: 15 / cache_read: 0.5 / cache_write: 0.5 | 2026-06-11 |
| `gemini-3-5-flash`<br />Gemini 3.5 Flash | gemini | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.55 / output: 9.45 / cache_read: 0.155 / cache_write: 0.086 | 2026-06-11 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 65536 | input: 0.7 / output: 3.75 / cache_read: 0.07 | 2026-06-11 |
| `gemma-4-uncensored`<br />Gemma 4 Uncensored | gemma | image, text | text | tools, schema, open weights | context: 256000 / output: 8192 | input: 0.1625 / output: 0.5 | 2026-06-11 |
| `google-gemma-3-27b-it`<br />Google Gemma 3 27B Instruct | gemma | image, text | text | tools, schema, open weights | context: 198000 / output: 16384 | input: 0.12 / output: 0.2 | 2026-06-11 |
| `google-gemma-4-26b-a4b-it`<br />Google Gemma 4 26B A4B Instruct | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.1625 / output: 0.5 | 2026-06-11 |
| `google-gemma-4-31b-it`<br />Google Gemma 4 31B Instruct | gemma | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 8192 | input: 0.12 / output: 0.36 / cache_read: 0.09 | 2026-06-11 |
| `grok-4-20`<br />Grok 4.20 | grok | image, text | text | tools, schema, reasoning | context: 2000000 / output: 128000 | input: 1.42 / output: 2.83 / cache_read: 0.23 | 2026-06-11 |
| `grok-4-20-multi-agent`<br />Grok 4.20 Multi-Agent | grok | image, text | text | schema, reasoning | context: 2000000 / output: 128000 | input: 1.42 / output: 2.83 / cache_read: 0.23 | 2026-06-11 |
| `grok-4-3`<br />Grok 4.3 | grok | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 32000 | input: 1.42 / output: 2.83 / cache_read: 0.23 | 2026-06-11 |
| `grok-build-0-1`<br />Grok Build 0.1 | grok-build | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 65536 | input: 1 / output: 2 / cache_read: 0.2 | 2026-06-11 |
| `hermes-3-llama-3.1-405b`<br />Hermes 3 Llama 3.1 405b | hermes | text | text | open weights | context: 128000 / output: 16384 | input: 1.1 / output: 3 | 2026-06-11 |
| `kimi-k2-5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning | context: 256000 / output: 65536 | input: 0.56 / output: 3.5 / cache_read: 0.22 | 2026-06-11 |
| `kimi-k2-6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 0.75 / output: 3.5 / cache_read: 0.16 | 2026-06-11 |
| `kimi-k2-7-code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 256000 / output: 65536 | input: 0.9 / output: 4.3 / cache_read: 0.2 | 2026-06-16 |
| `llama-3.2-3b`<br />Llama 3.2 3B | llama | text | text | tools, open weights | context: 128000 / output: 4096 | input: 0.15 / output: 0.6 | 2026-06-11 |
| `llama-3.3-70b`<br />Llama 3.3 70B | llama | text | text | tools, open weights | context: 128000 / output: 4096 | input: 0.7 / output: 2.8 | 2026-06-11 |
| `mercury-2`<br />Mercury 2 | mercury | text | text | tools, schema, reasoning | context: 128000 / output: 50000 | input: 0.3125 / output: 0.9375 / cache_read: 0.03125 | 2026-06-11 |
| `minimax-m25`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 198000 / output: 32768 | input: 0.34 / output: 1.19 / cache_read: 0.04 | 2026-06-11 |
| `minimax-m27`<br />MiniMax M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 198000 / output: 32768 | input: 0.375 / output: 1.5 / cache_read: 0.06875 | 2026-06-11 |
| `minimax-m3-preview`<br />MiniMax M3 Preview | minimax-m3 | text | text | tools, reasoning, open weights | context: 524288 / output: 65536 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-13 |
| `mistral-small-2603`<br />Mistral Small 4 | mistral-small | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 0.1875 / output: 0.75 | 2026-06-11 |
| `mistral-small-3-2-24b-instruct`<br />Mistral Small 3.2 24B Instruct | mistral-small | text | text | tools, schema, open weights | context: 256000 / output: 16384 | input: 0.09375 / output: 0.25 | 2026-06-11 |
| `nvidia-nemotron-3-nano-30b-a3b`<br />NVIDIA Nemotron 3 Nano 30B | nemotron | text | text | tools, schema, temperature, open weights | context: 128000 / output: 16384 | input: 0.075 / output: 0.3 | 2026-06-11 |
| `nvidia-nemotron-3-ultra-550b-a55b`<br />NVIDIA Nemotron 3 Ultra | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 32768 | input: 0.625 / output: 3.125 / cache_read: 0.1875 | 2026-06-11 |
| `nvidia-nemotron-cascade-2-30b-a3b`<br />Nemotron Cascade 2 30B A3B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 32768 | input: 0.14 / output: 0.8 | 2026-06-11 |
| `olafangensan-glm-4.7-flash-heretic`<br />GLM 4.7 Flash Heretic | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / output: 24000 | input: 0.14 / output: 0.8 | 2026-06-11 |
| `openai-gpt-4o-2024-11-20`<br />GPT-4o | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 3.125 / output: 12.5 | 2026-06-11 |
| `openai-gpt-4o-mini-2024-07-18`<br />GPT-4o Mini | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.1875 / output: 0.75 / cache_read: 0.09375 | 2026-06-11 |
| `openai-gpt-52`<br />GPT-5.2 | gpt | text | text | tools, schema, reasoning | context: 256000 / input: 272000 / output: 65536 | input: 2.19 / output: 17.5 / cache_read: 0.219 | 2026-06-11 |
| `openai-gpt-52-codex`<br />GPT-5.2 Codex | gpt | image, text | text | tools, schema, reasoning | context: 256000 / input: 272000 / output: 65536 | input: 2.19 / output: 17.5 / cache_read: 0.219 | 2026-06-11 |
| `openai-gpt-53-codex`<br />GPT-5.3 Codex | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 2.19 / output: 17.5 / cache_read: 0.219 | 2026-06-11 |
| `openai-gpt-54`<br />GPT-5.4 | gpt | image, text | text | tools, schema, reasoning | context: 1000000 / input: 922000 / output: 131072 | input: 3.13 / output: 18.8 / cache_read: 0.313 | 2026-06-11 |
| `openai-gpt-54-mini`<br />GPT-5.4 Mini | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.9375 / output: 5.625 / cache_read: 0.09375 | 2026-06-11 |
| `openai-gpt-54-pro`<br />GPT-5.4 Pro | gpt | image, text | text | tools, schema, reasoning | context: 1000000 / input: 922000 / output: 128000 | input: 37.5 / output: 225 | 2026-06-11 |
| `openai-gpt-55`<br />GPT-5.5 | gpt | image, text | text | tools, schema, reasoning | context: 1000000 / input: 922000 / output: 131072 | input: 6.25 / output: 37.5 / cache_read: 0.625 | 2026-06-11 |
| `openai-gpt-55-pro`<br />GPT-5.5 Pro | gpt | image, text | text | tools, schema, reasoning | context: 1000000 / input: 922000 / output: 128000 | input: 37.5 / output: 225 | 2026-06-11 |
| `openai-gpt-oss-120b`<br />OpenAI GPT OSS 120B | gpt-oss | text | text | tools, reasoning, open weights | context: 128000 / output: 16384 | input: 0.07 / output: 0.3 | 2026-06-11 |
| `qwen-3-6-plus`<br />Qwen 3.6 Plus Uncensored | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.625 / output: 3.75 / cache_read: 0.0625 / cache_write: 0.78 | 2026-06-11 |
| `qwen-3-7-max`<br />Qwen 3.7 Max | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.7 / output: 8.05 / cache_read: 0.27 / cache_write: 3.35 | 2026-06-11 |
| `qwen-3-7-plus`<br />Qwen 3.7 Plus | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 2 / cache_read: 0.05 / cache_write: 0.625 | 2026-06-11 |
| `qwen3-235b-a22b-instruct-2507`<br />Qwen 3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, open weights | context: 128000 / output: 16384 | input: 0.15 / output: 0.75 | 2026-06-11 |
| `qwen3-235b-a22b-thinking-2507`<br />Qwen 3 235B A22B Thinking 2507 | qwen | text | text | tools, schema, reasoning, open weights | context: 128000 / output: 16384 | input: 0.45 / output: 3.5 | 2026-06-11 |
| `qwen3-5-35b-a3b`<br />Qwen 3.5 35B A3B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0.3125 / output: 1.25 / cache_read: 0.15625 | 2026-06-11 |
| `qwen3-5-397b-a17b`<br />Qwen 3.5 397B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0.75 / output: 4.5 | 2026-06-11 |
| `qwen3-5-9b`<br />Qwen 3.5 9B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 32768 | input: 0.1 / output: 0.15 | 2026-06-11 |
| `qwen3-6-27b`<br />Qwen 3.6 27B | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 65536 | input: 0.325 / output: 3.25 | 2026-06-11 |
| `qwen3-coder-480b-a35b-instruct-turbo`<br />Qwen 3 Coder 480B Turbo | qwen | text | text | tools, schema, open weights | context: 256000 / output: 65536 | input: 0.35 / output: 1.5 / cache_read: 0.04 | 2026-06-11 |
| `qwen3-next-80b`<br />Qwen 3 Next 80b | qwen | text | text | tools, schema, open weights | context: 256000 / output: 16384 | input: 0.35 / output: 1.9 | 2026-06-11 |
| `qwen3-vl-235b-a22b`<br />Qwen3 VL 235B | - | image, text | text | tools, schema, open weights | context: 256000 / output: 16384 | input: 0.25 / output: 1.5 | 2026-06-11 |
| `venice-uncensored-1-2`<br />Venice Uncensored 1.2 | venice | image, text | text | tools, schema, open weights | context: 128000 / output: 8192 | input: 0.2 / output: 0.9 | 2026-06-11 |
| `venice-uncensored-role-play`<br />Venice Role Play Uncensored | venice | image, text | text | tools, schema, open weights | context: 128000 / output: 4096 | input: 0.5 / output: 2 | 2026-06-11 |
| `xiaomi-mimo-v2-5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 65536 | input: 0.175 / output: 0.35 / cache_read: 0.0625 | 2026-06-11 |
| `z-ai-glm-5-turbo`<br />GLM 5 Turbo | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 32768 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-06-11 |
| `z-ai-glm-5v-turbo`<br />GLM 5V Turbo | glm | image, text | text | tools, schema, reasoning, temperature | context: 200000 / output: 32768 | input: 1.5 / output: 5 / cache_read: 0.3 | 2026-06-11 |
| `zai-org-glm-4.6`<br />GLM 4.6 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 198000 / output: 16384 | input: 0.43 / output: 1.75 / cache_read: 0.08 | 2026-06-11 |
| `zai-org-glm-4.7`<br />GLM 4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 198000 / output: 16384 | input: 0.55 / output: 2.65 / cache_read: 0.11 | 2026-06-11 |
| `zai-org-glm-4.7-flash`<br />GLM 4.7 Flash | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.125 / output: 0.5 | 2026-06-11 |
| `zai-org-glm-5`<br />GLM 5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 198000 / output: 32000 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-06-11 |
| `zai-org-glm-5-1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 24000 | input: 1.75 / output: 5.5 / cache_read: 0.325 | 2026-06-11 |
| `zai-org-glm-5-2`<br />GLM 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-16 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

