---
title: "Helicone"
description: "Use Helicone through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1049
  label: "Helicone"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://ai-gateway.helicone.ai/v1 |
| Environment | `HELICONE_API_KEY` |
| Provider docs | [https://helicone.ai/models](https://helicone.ai/models) |
| Models | 90 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.HELICONE_API_KEY,
  baseUrl: "https://ai-gateway.helicone.ai/v1",
  completionApi: "chat",
});

const model = client.completionModel("chatgpt-4o-latest");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | image, text |
| Attachments | 0 / 90 models |
| Tools | 72 / 90 models |
| Structured output | 0 / 90 models |
| Reasoning | 24 / 90 models |
| Temperature | 74 / 90 models |
| Open weights | 1 / 90 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `chatgpt-4o-latest`<br />OpenAI ChatGPT-4o | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 5 / output: 20 / cache_read: 2.5 | 2024-08-14 |
| `claude-3-haiku-20240307`<br />Anthropic: Claude 3 Haiku | claude-haiku | image, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-07 |
| `claude-3.5-haiku`<br />Anthropic: Claude 3.5 Haiku | claude-haiku | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.7999999999999999 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `claude-3.5-sonnet-v2`<br />Anthropic: Claude 3.5 Sonnet v2 | claude-sonnet | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.30000000000000004 / cache_write: 3.75 | 2024-10-22 |
| `claude-3.7-sonnet`<br />Anthropic: Claude 3.7 Sonnet | claude-sonnet | image, text | text | tools, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.30000000000000004 / cache_write: 3.75 | 2025-02-19 |
| `claude-4.5-haiku`<br />Anthropic: Claude 4.5 Haiku | claude-haiku | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 1 / output: 5 / cache_read: 0.09999999999999999 / cache_write: 1.25 | 2025-10-01 |
| `claude-4.5-opus`<br />Anthropic: Claude Opus 4.5 | claude-opus | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `claude-4.5-sonnet`<br />Anthropic: Claude Sonnet 4.5 | claude-sonnet | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.30000000000000004 / cache_write: 3.75 | 2025-09-29 |
| `claude-haiku-4-5-20251001`<br />Anthropic: Claude 4.5 Haiku (20251001) | claude-haiku | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 1 / output: 5 / cache_read: 0.09999999999999999 / cache_write: 1.25 | 2025-10-01 |
| `claude-opus-4`<br />Anthropic: Claude Opus 4 | claude-opus | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-14 |
| `claude-opus-4-1`<br />Anthropic: Claude Opus 4.1 | claude-opus | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-1-20250805`<br />Anthropic: Claude Opus 4.1 (20250805) | claude-opus | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-sonnet-4`<br />Anthropic: Claude Sonnet 4 | claude-sonnet | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.30000000000000004 / cache_write: 3.75 | 2025-05-14 |
| `claude-sonnet-4-5-20250929`<br />Anthropic: Claude Sonnet 4.5 (20250929) | claude-sonnet | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.30000000000000004 / cache_write: 3.75 | 2025-09-29 |
| `deepseek-r1-distill-llama-70b`<br />DeepSeek R1 Distill Llama 70B | deepseek-thinking | text | text | tools, reasoning, temperature | context: 128000 / output: 4096 | input: 0.03 / output: 0.13 | 2025-01-20 |
| `deepseek-reasoner`<br />DeepSeek Reasoner | deepseek-thinking | text | text | temperature | context: 128000 / output: 64000 | input: 0.56 / output: 1.68 / cache_read: 0.07 | 2025-01-20 |
| `deepseek-tng-r1t2-chimera`<br />DeepSeek TNG R1T2 Chimera | deepseek-thinking | text | text | tools, temperature | context: 130000 / output: 163840 | input: 0.3 / output: 1.2 | 2025-07-02 |
| `deepseek-v3`<br />DeepSeek V3 | deepseek | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.56 / output: 1.68 / cache_read: 0.07 | 2024-12-26 |
| `deepseek-v3.1-terminus`<br />DeepSeek V3.1 Terminus | deepseek | text | text | tools, reasoning, temperature | context: 128000 / output: 16384 | input: 0.27 / output: 1 / cache_read: 0.21600000000000003 | 2025-09-22 |
| `deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, temperature | context: 163840 / output: 65536 | input: 0.27 / output: 0.41 | 2025-09-22 |
| `ernie-4.5-21b-a3b-thinking`<br />Baidu Ernie 4.5 21B A3B Thinking | ernie | text | text | reasoning, temperature | context: 128000 / output: 8000 | input: 0.07 / output: 0.28 | 2025-03-16 |
| `gemini-2.5-flash`<br />Google Gemini 2.5 Flash | gemini-flash | image, text | text | tools, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.3 / output: 2.5 / cache_read: 0.075 / cache_write: 0.3 | 2025-06-17 |
| `gemini-2.5-flash-lite`<br />Google Gemini 2.5 Flash Lite | gemini-flash-lite | image, text | text | tools, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.09999999999999999 / output: 0.39999999999999997 / cache_read: 0.024999999999999998 / cache_write: 0.09999999999999999 | 2025-07-22 |
| `gemini-2.5-pro`<br />Google Gemini 2.5 Pro | gemini-pro | image, text | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.3125 / cache_write: 1.25 | 2025-06-17 |
| `gemini-3-pro-preview`<br />Google Gemini 3 Pro Preview | gemini-pro | audio, image, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.19999999999999998 | 2025-11-18 |
| `gemma-3-12b-it`<br />Google Gemma 3 12B | gemma | image, text | text | temperature | context: 131072 / output: 8192 | input: 0.049999999999999996 / output: 0.09999999999999999 | 2024-12-01 |
| `gemma2-9b-it`<br />Google Gemma 2 | gemma | text | text | temperature | context: 8192 / output: 8192 | input: 0.01 / output: 0.03 | 2024-06-25 |
| `glm-4.6`<br />Zai GLM-4.6 | glm | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.44999999999999996 / output: 1.5 | 2024-07-18 |
| `gpt-4.1`<br />OpenAI GPT-4.1 | gpt | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-4.1-mini`<br />OpenAI GPT-4.1 Mini | gpt-mini | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.39999999999999997 / output: 1.5999999999999999 / cache_read: 0.09999999999999999 | 2025-04-14 |
| `gpt-4.1-mini-2025-04-14`<br />OpenAI GPT-4.1 Mini | gpt-mini | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.39999999999999997 / output: 1.5999999999999999 / cache_read: 0.09999999999999999 | 2025-04-14 |
| `gpt-4.1-nano`<br />OpenAI GPT-4.1 Nano | gpt-nano | image, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.09999999999999999 / output: 0.39999999999999997 / cache_read: 0.024999999999999998 | 2025-04-14 |
| `gpt-4o`<br />OpenAI GPT-4o | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-05-13 |
| `gpt-4o-mini`<br />OpenAI GPT-4o-mini | gpt-mini | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `gpt-5`<br />OpenAI GPT-5 | gpt | image, text | text | tools | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2025-01-01 |
| `gpt-5-chat-latest`<br />OpenAI GPT-5 Chat Latest | gpt-codex | image, text | text | tools | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2024-09-30 |
| `gpt-5-codex`<br />OpenAI: GPT-5 Codex | gpt-codex | text | text | tools | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2025-01-01 |
| `gpt-5-mini`<br />OpenAI GPT-5 Mini | gpt-mini | image, text | text | tools | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.024999999999999998 | 2025-01-01 |
| `gpt-5-nano`<br />OpenAI GPT-5 Nano | gpt-nano | image, text | text | tools | context: 400000 / output: 128000 | input: 0.049999999999999996 / output: 0.39999999999999997 / cache_read: 0.005 | 2025-01-01 |
| `gpt-5-pro`<br />OpenAI: GPT-5 Pro | gpt-pro | text | text | - | context: 128000 / output: 32768 | input: 15 / output: 120 | 2025-01-01 |
| `gpt-5.1`<br />OpenAI GPT-5.1 | gpt | image, text | image, text | tools | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2025-01-01 |
| `gpt-5.1-chat-latest`<br />OpenAI GPT-5.1 Chat | gpt-codex | image, text | image, text | tools | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2025-01-01 |
| `gpt-5.1-codex`<br />OpenAI: GPT-5.1 Codex | gpt-codex | image, text | image, text | tools | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.12500000000000003 | 2025-01-01 |
| `gpt-5.1-codex-mini`<br />OpenAI: GPT-5.1 Codex Mini | gpt-codex | image, text | image, text | tools | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.024999999999999998 | 2025-01-01 |
| `gpt-oss-120b`<br />OpenAI GPT-OSS 120b | gpt-oss | text | text | tools, reasoning, temperature | context: 131072 / output: 131072 | input: 0.04 / output: 0.16 | 2024-06-01 |
| `gpt-oss-20b`<br />OpenAI GPT-OSS 20b | gpt-oss | text | text | tools, reasoning, temperature | context: 131072 / output: 131072 | input: 0.049999999999999996 / output: 0.19999999999999998 | 2024-06-01 |
| `grok-3`<br />xAI Grok 3 | grok | text | text | tools, temperature | context: 131072 / output: 131072 | input: 3 / output: 15 / cache_read: 0.75 | 2024-06-01 |
| `grok-3-mini`<br />xAI Grok 3 Mini | grok | text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.3 / output: 0.5 / cache_read: 0.075 | 2024-06-01 |
| `grok-4`<br />xAI Grok 4 | grok | text | text | tools, temperature | context: 256000 / output: 256000 | input: 3 / output: 15 / cache_read: 0.75 | 2024-07-09 |
| `grok-4-1-fast-non-reasoning`<br />xAI Grok 4.1 Fast Non-Reasoning | grok | image, text | image, text | tools, temperature | context: 2000000 / output: 30000 | input: 0.19999999999999998 / output: 0.5 / cache_read: 0.049999999999999996 | 2025-11-17 |
| `grok-4-1-fast-reasoning`<br />xAI Grok 4.1 Fast Reasoning | grok | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 0.19999999999999998 / output: 0.5 / cache_read: 0.049999999999999996 | 2025-11-17 |
| `grok-4-fast-non-reasoning`<br />xAI Grok 4 Fast Non-Reasoning | grok | audio, image, text | text | tools, temperature | context: 2000000 / output: 2000000 | input: 0.19999999999999998 / output: 0.5 / cache_read: 0.049999999999999996 | 2025-09-19 |
| `grok-4-fast-reasoning`<br />xAI: Grok 4 Fast Reasoning | grok | image, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 0.19999999999999998 / output: 0.5 / cache_read: 0.049999999999999996 | 2025-09-01 |
| `grok-code-fast-1`<br />xAI Grok Code Fast 1 | grok | text | text | tools, temperature | context: 256000 / output: 10000 | input: 0.19999999999999998 / output: 1.5 / cache_read: 0.02 | 2024-08-25 |
| `hermes-2-pro-llama-3-8b`<br />Hermes 2 Pro Llama 3 8B | llama | text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.14 / output: 0.14 | 2024-05-27 |
| `kimi-k2-0711`<br />Kimi K2 (07/11) | kimi-k2 | text | text | tools, temperature | context: 131072 / output: 16384 | input: 0.5700000000000001 / output: 2.3 | 2025-01-01 |
| `kimi-k2-0905`<br />Kimi K2 (09/05) | kimi-k2 | text | text | tools, temperature | context: 262144 / output: 16384 | input: 0.5 / output: 2 / cache_read: 0.39999999999999997 | 2025-09-05 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, temperature | context: 256000 / output: 262144 | input: 0.48 / output: 2 | 2025-11-06 |
| `llama-3.1-8b-instant`<br />Meta Llama 3.1 8B Instant | llama | text | text | tools, temperature | context: 131072 / output: 32678 | input: 0.049999999999999996 / output: 0.08 | 2024-07-01 |
| `llama-3.1-8b-instruct`<br />Meta Llama 3.1 8B Instruct | llama | text | text | tools, temperature | context: 16384 / output: 16384 | input: 0.02 / output: 0.049999999999999996 | 2024-07-23 |
| `llama-3.1-8b-instruct-turbo`<br />Meta Llama 3.1 8B Instruct Turbo | llama | text | text | tools, temperature | context: 128000 / output: 128000 | input: 0.02 / output: 0.03 | 2024-07-23 |
| `llama-3.3-70b-instruct`<br />Meta Llama 3.3 70B Instruct | llama | text | text | tools, temperature | context: 128000 / output: 16400 | input: 0.13 / output: 0.39 | 2024-12-06 |
| `llama-3.3-70b-versatile`<br />Meta Llama 3.3 70B Versatile | llama | text | text | tools, temperature | context: 131072 / output: 32678 | input: 0.59 / output: 0.7899999999999999 | 2024-12-06 |
| `llama-4-maverick`<br />Meta Llama 4 Maverick 17B 128E | llama | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.15 / output: 0.6 | 2025-01-01 |
| `llama-4-scout`<br />Meta Llama 4 Scout 17B 16E | llama | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.08 / output: 0.3 | 2025-01-01 |
| `llama-guard-4`<br />Meta Llama Guard 4 12B | llama | image, text | text | temperature | context: 131072 / output: 1024 | input: 0.21 / output: 0.21 | 2025-01-01 |
| `llama-prompt-guard-2-22m`<br />Meta Llama Prompt Guard 2 22M | llama | text | text | temperature | context: 512 / output: 2 | input: 0.01 / output: 0.01 | 2024-10-01 |
| `llama-prompt-guard-2-86m`<br />Meta Llama Prompt Guard 2 86M | llama | text | text | temperature | context: 512 / output: 2 | input: 0.01 / output: 0.01 | 2024-10-01 |
| `mistral-large-2411`<br />Mistral-Large | mistral-large | text | text | tools, temperature | context: 128000 / output: 32768 | input: 2 / output: 6 | 2024-07-24 |
| `mistral-nemo`<br />Mistral Nemo | mistral-nemo | image, text | text | temperature | context: 128000 / output: 16400 | input: 20 / output: 40 | 2024-07-18 |
| `mistral-small`<br />Mistral Small 3.2 | mistral-small | image, text | text | tools, temperature, open weights | context: 128000 / output: 16384 | input: 0.075 / output: 0.2 | 2025-06-20 |
| `o1`<br />OpenAI: o1 | o | text | text | - | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2025-01-01 |
| `o1-mini`<br />OpenAI: o1-mini | o-mini | text | text | - | context: 128000 / output: 65536 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-01 |
| `o3`<br />OpenAI o3 | o | image, text | text | tools | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2024-06-01 |
| `o3-mini`<br />OpenAI o3 Mini | o-mini | text | text | tools | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2023-10-01 |
| `o3-pro`<br />OpenAI o3 Pro | o-pro | image, text | text | tools | context: 200000 / output: 100000 | input: 20 / output: 80 | 2024-06-01 |
| `o4-mini`<br />OpenAI o4 Mini | o-mini | image, text | text | tools | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2024-06-01 |
| `qwen2.5-coder-7b-fast`<br />Qwen2.5 Coder 7B fast | qwen | text | text | temperature | context: 32000 / output: 8192 | input: 0.03 / output: 0.09 | 2024-09-15 |
| `qwen3-235b-a22b-thinking`<br />Qwen3 235B A22B Thinking | qwen | image, text, video | text | reasoning, temperature | context: 262144 / output: 81920 | input: 0.3 / output: 2.9000000000000004 | 2025-07-25 |
| `qwen3-30b-a3b`<br />Qwen3 30B A3B | qwen | image, text | text | tools, temperature | context: 41000 / output: 41000 | input: 0.08 / output: 0.29 | 2025-06-01 |
| `qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 40960 | input: 0.29 / output: 0.59 | 2025-04-28 |
| `qwen3-coder`<br />Qwen3 Coder 480B A35B Instruct Turbo | qwen | audio, image, text, video | text | tools, temperature | context: 262144 / output: 16384 | input: 0.22 / output: 0.95 | 2025-07-23 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3 Coder 30B A3B Instruct | qwen | text | text | tools, temperature | context: 262144 / output: 262144 | input: 0.09999999999999999 / output: 0.3 | 2025-07-31 |
| `qwen3-next-80b-a3b-instruct`<br />Qwen3 Next 80B A3B Instruct | qwen | image, text, video | text | tools, temperature | context: 262000 / output: 16384 | input: 0.14 / output: 1.4 | 2025-01-01 |
| `qwen3-vl-235b-a22b-instruct`<br />Qwen3 VL 235B A22B Instruct | qwen | image, text, video | text | tools, temperature | context: 256000 / output: 16384 | input: 0.3 / output: 1.5 | 2025-09-23 |
| `sonar`<br />Perplexity Sonar | sonar | text | text | temperature | context: 127000 / output: 4096 | input: 1 / output: 1 | 2025-01-27 |
| `sonar-deep-research`<br />Perplexity Sonar Deep Research | sonar-deep-research | text | text | reasoning, temperature | context: 127000 / output: 4096 | input: 2 / output: 8 | 2025-01-27 |
| `sonar-pro`<br />Perplexity Sonar Pro | sonar-pro | text | text | temperature | context: 200000 / output: 4096 | input: 3 / output: 15 | 2025-01-27 |
| `sonar-reasoning`<br />Perplexity Sonar Reasoning | sonar-reasoning | text | text | reasoning, temperature | context: 127000 / output: 4096 | input: 1 / output: 5 | 2025-01-27 |
| `sonar-reasoning-pro`<br />Perplexity Sonar Reasoning Pro | sonar-reasoning | text | text | reasoning, temperature | context: 127000 / output: 4096 | input: 2 / output: 8 | 2025-01-27 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

