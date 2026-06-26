---
title: "OpenCode Zen"
description: "Use OpenCode Zen through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1091
  label: "OpenCode Zen"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://opencode.ai/zen/v1 |
| Environment | `OPENCODE_API_KEY` |
| Provider docs | [https://opencode.ai/docs/zen](https://opencode.ai/docs/zen) |
| Models | 71 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENCODE_API_KEY,
  baseUrl: "https://opencode.ai/zen/v1",
  completionApi: "chat",
});

const model = client.completionModel("big-pickle");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 42 / 71 models |
| Tools | 71 / 71 models |
| Structured output | 26 / 71 models |
| Reasoning | 66 / 71 models |
| Temperature | 51 / 71 models |
| Open weights | 33 / 71 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `big-pickle`<br />Big Pickle | big-pickle | text | text | tools, schema, reasoning, temperature | context: 200000 / input: 160000 / output: 32000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-10-17 |
| `claude-3-5-haiku`<br />Claude Haiku 3.5 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-1`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-02-17 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `deepseek-v4-flash-free`<br />DeepSeek V4 Flash Free | deepseek-flash-free | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0 / output: 0 / cache_read: 0 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.74 / output: 3.84 / cache_read: 0.145 | 2026-04-24 |
| `gemini-3-flash`<br />Gemini 3 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `gemini-3-pro`<br />Gemini 3 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2025-11-18 |
| `gemini-3.1-pro`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 / input_audio: 1.5 | 2026-05-19 |
| `glm-4.6`<br />GLM-4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.1 | 2025-09-30 |
| `glm-4.7`<br />GLM-4.7 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.1 | 2025-12-22 |
| `glm-4.7-free`<br />GLM-4.7 Free | glm-free | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2025-12-22 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-11 |
| `glm-5-free`<br />GLM-5 Free | glm-free | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-02-11 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |
| `gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.07 / output: 8.5 / cache_read: 0.107 | 2025-08-07 |
| `gpt-5-codex`<br />GPT-5 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.07 / output: 8.5 / cache_read: 0.107 | 2025-09-15 |
| `gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.07 / output: 8.5 / cache_read: 0.107 | 2025-11-13 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.07 / output: 8.5 / cache_read: 0.107 | 2025-11-13 |
| `gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-mini`<br />GPT-5.1 Codex Mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-01-14 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-24 |
| `gpt-5.3-codex-spark`<br />GPT-5.3 Codex Spark | gpt-codex-spark | text | text | tools, schema, reasoning | context: 128000 / input: 128000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-12 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 Mini | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 Nano | gpt-nano | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, pdf, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 / cache_read: 30 | 2026-03-05 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 / cache_read: 30 | 2026-04-24 |
| `grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-05-20 |
| `grok-code`<br />Grok Code Fast 1 | grok | text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-08-20 |
| `hy3-preview-free`<br />Hy3 preview Free | hy3-free | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 | 2026-04-20 |
| `kimi-k2`<br />Kimi K2 | kimi-k2 | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2.5 / cache_read: 0.4 | 2025-09-05 |
| `kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2.5 / cache_read: 0.4 | 2025-09-05 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3 / cache_read: 0.08 | 2026-01-27 |
| `kimi-k2.5-free`<br />Kimi K2.5 Free | kimi-free | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 / cache_read: 0 | 2026-01-27 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `ling-2.6-flash-free`<br />Ling 2.6 Flash Free | ling-flash-free | text | text | tools, temperature, open weights | context: 262100 / output: 32800 | input: 0 / output: 0 | 2026-04-21 |
| `mimo-v2-flash-free`<br />MiMo V2 Flash Free | mimo-flash-free | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0 / output: 0 / cache_read: 0 | 2025-12-16 |
| `mimo-v2-omni-free`<br />MiMo V2 Omni Free | mimo-omni-free | audio, image, pdf, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 64000 | input: 0 / output: 0 / cache_read: 0 | 2026-03-18 |
| `mimo-v2-pro-free`<br />MiMo V2 Pro Free | mimo-pro-free | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 64000 | input: 0 / output: 0 / cache_read: 0 | 2026-03-18 |
| `mimo-v2.5-free`<br />MiMo V2.5 Free | mimo-v2.5-free | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 200000 / output: 32000 | input: 0 / output: 0 / cache_read: 0 | 2026-04-24 |
| `minimax-m2.1`<br />MiniMax M2.1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.1 | 2025-12-23 |
| `minimax-m2.1-free`<br />MiniMax M2.1 Free | minimax-free | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2025-12-23 |
| `minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-02-12 |
| `minimax-m2.5-free`<br />MiniMax M2.5 Free | minimax-free | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-02-12 |
| `minimax-m2.7`<br />MiniMax M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `minimax-m3-free`<br />MiniMax M3 Free | minimax-m3-free | image, text, video | text | tools, reasoning, temperature, open weights | context: 200000 / output: 32000 | input: 0 / output: 0 / cache_read: 0 | 2026-05-31 |
| `nemotron-3-super-free`<br />Nemotron 3 Super Free | nemotron-free | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 128000 | input: 0 / output: 0 / cache_read: 0 | 2026-03-11 |
| `nemotron-3-ultra-free`<br />Nemotron 3 Ultra Free | nemotron-free | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 128000 | input: 0 / output: 0 / cache_read: 0 | 2026-06-04 |
| `north-mini-code-free`<br />North Mini Code Free | north-free | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2026-06-09 |
| `qwen3-coder`<br />Qwen3 Coder | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.45 / output: 1.8 | 2025-07-23 |
| `qwen3.5-plus`<br />Qwen3.5 Plus | qwen3.5 | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.2 / output: 1.2 / cache_read: 0.02 / cache_write: 0.25 | 2026-02-16 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen3.6 | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `qwen3.6-plus-free`<br />Qwen3.6 Plus Free | qwen-free | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0 / output: 0 / cache_read: 0 | 2026-04-02 |
| `ring-2.6-1t-free`<br />Ring 2.6 1T Free | ring-1t-free | text | text | tools, reasoning, temperature, open weights | context: 262000 / output: 66000 | input: 0 / output: 0 | 2026-05-08 |
| `trinity-large-preview-free`<br />Trinity Large Preview | trinity | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2026-01-28 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

