---
title: "Qiniu"
description: "Use Qiniu through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1101
  label: "Qiniu"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.qnaigc.com/v1 |
| Environment | `QINIU_API_KEY` |
| Provider docs | [https://developer.qiniu.com/aitokenapi](https://developer.qiniu.com/aitokenapi) |
| Models | 91 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.QINIU_API_KEY,
  baseUrl: "https://api.qnaigc.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-3.5-haiku");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | image, text, video |
| Attachments | 42 / 91 models |
| Tools | 81 / 91 models |
| Structured output | 0 / 91 models |
| Reasoning | 56 / 91 models |
| Temperature | 91 / 91 models |
| Open weights | 2 / 91 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-3.5-haiku`<br />Claude 3.5 Haiku | - | image, text | text | tools, temperature | context: 200000 / output: 8192 | - | 2025-08-26 |
| `claude-3.5-sonnet`<br />Claude 3.5 Sonnet | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 8200 | - | 2025-09-09 |
| `claude-3.7-sonnet`<br />Claude 3.7 Sonnet | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | - | 2025-08-05 |
| `claude-4.0-opus`<br />Claude 4.0 Opus | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | - | 2025-08-05 |
| `claude-4.0-sonnet`<br />Claude 4.0 Sonnet | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | - | 2025-08-05 |
| `claude-4.1-opus`<br />Claude 4.1 Opus | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | - | 2025-08-06 |
| `claude-4.5-haiku`<br />Claude 4.5 Haiku | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | - | 2025-10-16 |
| `claude-4.5-opus`<br />Claude 4.5 Opus | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | - | 2025-11-25 |
| `claude-4.5-sonnet`<br />Claude 4.5 Sonnet | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | - | 2025-09-30 |
| `deepseek-r1`<br />DeepSeek-R1 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 32000 | - | 2025-08-05 |
| `deepseek-r1-0528`<br />DeepSeek-R1-0528 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 32000 | - | 2025-08-05 |
| `deepseek-v3`<br />DeepSeek-V3 | - | text | text | temperature | context: 128000 / output: 16000 | - | 2025-08-13 |
| `deepseek-v3-0324`<br />DeepSeek-V3-0324 | - | text | text | tools, temperature | context: 128000 / output: 16000 | - | 2025-08-05 |
| `deepseek-v3.1`<br />DeepSeek-V3.1 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 32000 | - | 2025-08-19 |
| `deepseek/deepseek-math-v2`<br />Deepseek/Deepseek-Math-V2 | - | text | text | reasoning, temperature | context: 160000 / output: 160000 | - | 2025-12-04 |
| `deepseek/deepseek-v3.1-terminus`<br />DeepSeek/DeepSeek-V3.1-Terminus | - | text | text | tools, temperature | context: 128000 / output: 32000 | - | 2025-09-22 |
| `deepseek/deepseek-v3.1-terminus-thinking`<br />DeepSeek/DeepSeek-V3.1-Terminus-Thinking | - | text | text | reasoning, temperature | context: 128000 / output: 32000 | - | 2025-09-22 |
| `deepseek/deepseek-v3.2-251201`<br />Deepseek/DeepSeek-V3.2 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 32000 | - | 2025-12-01 |
| `deepseek/deepseek-v3.2-exp`<br />DeepSeek/DeepSeek-V3.2-Exp | - | text | text | tools, temperature | context: 128000 / output: 32000 | - | 2025-09-29 |
| `deepseek/deepseek-v3.2-exp-thinking`<br />DeepSeek/DeepSeek-V3.2-Exp-Thinking | - | text | text | reasoning, temperature | context: 128000 / output: 32000 | - | 2025-09-29 |
| `doubao-1.5-pro-32k`<br />Doubao 1.5 Pro 32k | - | text | text | tools, temperature | context: 128000 / output: 12000 | - | 2025-08-05 |
| `doubao-1.5-thinking-pro`<br />Doubao 1.5 Thinking Pro | - | text | text | tools, reasoning, temperature | context: 128000 / output: 16000 | - | 2025-08-05 |
| `doubao-1.5-vision-pro`<br />Doubao 1.5 Vision Pro | - | image, text, video | text | temperature | context: 128000 / output: 16000 | - | 2025-08-05 |
| `doubao-seed-1.6`<br />Doubao-Seed 1.6 | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 32000 | - | 2025-08-15 |
| `doubao-seed-1.6-flash`<br />Doubao-Seed 1.6 Flash | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 32000 | - | 2025-08-15 |
| `doubao-seed-1.6-thinking`<br />Doubao-Seed 1.6 Thinking | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 32000 | - | 2025-08-15 |
| `doubao-seed-2.0-code`<br />Doubao Seed 2.0 Code | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 128000 | - | 2026-02-14 |
| `doubao-seed-2.0-lite`<br />Doubao Seed 2.0 Lite | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 32000 | - | 2026-02-14 |
| `doubao-seed-2.0-mini`<br />Doubao Seed 2.0 Mini | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 32000 | - | 2026-02-14 |
| `doubao-seed-2.0-pro`<br />Doubao Seed 2.0 Pro | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 128000 | - | 2026-02-14 |
| `gemini-2.0-flash`<br />Gemini 2.0 Flash | - | audio, image, text, video | text | tools, temperature | context: 1048576 / output: 8192 | - | 2025-08-05 |
| `gemini-2.0-flash-lite`<br />Gemini 2.0 Flash Lite | - | audio, image, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 8192 | - | 2025-08-05 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | - | audio, image, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 64000 | - | 2025-08-05 |
| `gemini-2.5-flash-image`<br />Gemini 2.5 Flash Image | - | image, text | image | temperature | context: 32768 / output: 8192 | - | 2025-10-22 |
| `gemini-2.5-flash-lite`<br />Gemini 2.5 Flash Lite | - | audio, image, text, video | text | tools, temperature | context: 1048576 / output: 64000 | - | 2025-08-05 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | - | audio, image, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | - | 2025-08-05 |
| `gemini-3.0-flash-preview`<br />Gemini 3.0 Flash Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | - | 2025-12-18 |
| `gemini-3.0-pro-image-preview`<br />Gemini 3.0 Pro Image Preview | - | image, text | image, text | temperature | context: 32768 / output: 8192 | - | 2025-11-20 |
| `gemini-3.0-pro-preview`<br />Gemini 3.0 Pro Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | - | 2025-11-19 |
| `glm-4.5`<br />GLM 4.5 | - | text | text | tools, reasoning, temperature | context: 131072 / output: 98304 | - | 2025-08-05 |
| `glm-4.5-air`<br />GLM 4.5 Air | - | text | text | tools, reasoning, temperature | context: 131000 / output: 4096 | - | 2025-08-05 |
| `gpt-oss-120b` | - | text | text | tools, reasoning, temperature | context: 128000 / output: 4096 | - | 2025-08-06 |
| `gpt-oss-20b` | - | text | text | tools, reasoning, temperature | context: 128000 / output: 4096 | - | 2025-08-06 |
| `kimi-k2`<br />Kimi K2 | - | text | text | tools, temperature | context: 128000 / output: 128000 | - | 2025-08-05 |
| `kling-v2-6`<br />Kling-V2 6 | - | image, text, video | video | temperature | context: 99999999 / output: 99999999 | - | 2026-01-13 |
| `meituan/longcat-flash-chat`<br />Meituan/Longcat-Flash-Chat | - | text | text | temperature | context: 131072 / output: 131072 | - | 2025-11-05 |
| `meituan/longcat-flash-lite`<br />Meituan/Longcat-Flash-Lite | - | text | text | tools, temperature | context: 256000 / output: 320000 | - | 2026-02-06 |
| `mimo-v2-flash`<br />Mimo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2026-02-04 |
| `MiniMax-M1`<br />MiniMax M1 | - | text | text | tools, reasoning, temperature | context: 1000000 / output: 80000 | - | 2025-08-05 |
| `minimax/minimax-m2`<br />Minimax/Minimax-M2 | - | text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | - | 2025-10-28 |
| `minimax/minimax-m2.1`<br />Minimax/Minimax-M2.1 | - | text | text | tools, reasoning, temperature | context: 204800 / output: 128000 | - | 2025-12-23 |
| `minimax/minimax-m2.5`<br />Minimax/Minimax-M2.5 | - | text | text | tools, reasoning, temperature | context: 204800 / output: 128000 | - | 2026-02-12 |
| `minimax/minimax-m2.5-highspeed`<br />Minimax/Minimax-M2.5 Highspeed | - | text | text | tools, reasoning, temperature | context: 204800 / output: 128000 | - | 2026-02-14 |
| `moonshotai/kimi-k2-0905`<br />Kimi K2 0905 | - | text | text | tools, temperature | context: 256000 / output: 100000 | - | 2025-09-08 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | - | text | text | tools, temperature | context: 256000 / output: 100000 | - | 2025-11-07 |
| `moonshotai/kimi-k2.5`<br />Moonshotai/Kimi-K2.5 | - | image, text, video | text | tools, temperature | context: 256000 / output: 256000 | - | 2026-01-28 |
| `openai/gpt-5`<br />OpenAI/GPT-5 | - | text | text | tools, temperature | context: 400000 / output: 128000 | - | 2025-09-19 |
| `openai/gpt-5.2`<br />OpenAI/GPT-5.2 | - | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | - | 2025-12-11 |
| `qwen-max-2025-01-25`<br />Qwen2.5-Max-2025-01-25 | - | text | text | tools, temperature | context: 128000 / output: 4096 | - | 2025-08-05 |
| `qwen-turbo`<br />Qwen-Turbo | - | text | text | tools, reasoning, temperature | context: 1000000 / output: 4096 | - | 2025-08-05 |
| `qwen-vl-max-2025-01-25`<br />Qwen VL-MAX-2025-01-25 | - | audio, image, text, video | text | tools, temperature | context: 128000 / output: 4096 | - | 2025-08-05 |
| `qwen2.5-vl-72b-instruct`<br />Qwen 2.5 VL 72B Instruct | - | audio, image, text, video | text | tools, temperature | context: 128000 / output: 8192 | - | 2025-08-05 |
| `qwen2.5-vl-7b-instruct`<br />Qwen 2.5 VL 7B Instruct | - | audio, image, text, video | text | tools, temperature | context: 128000 / output: 8192 | - | 2025-08-05 |
| `qwen3-235b-a22b`<br />Qwen 3 235B A22B | - | text | text | tools, temperature | context: 128000 / output: 32000 | - | 2025-08-05 |
| `qwen3-235b-a22b-instruct-2507`<br />Qwen3 235b A22B Instruct 2507 | - | text | text | tools, temperature | context: 262144 / output: 64000 | - | 2025-08-12 |
| `qwen3-235b-a22b-thinking-2507`<br />Qwen3 235B A22B Thinking 2507 | - | text | text | tools, reasoning, temperature | context: 262144 / output: 4096 | - | 2025-08-12 |
| `qwen3-30b-a3b`<br />Qwen3 30B A3B | - | text | text | tools, reasoning, temperature | context: 40000 / output: 4096 | - | 2025-08-05 |
| `qwen3-30b-a3b-instruct-2507`<br />Qwen3 30b A3b Instruct 2507 | - | text | text | tools, temperature | context: 128000 / output: 32000 | - | 2026-02-04 |
| `qwen3-30b-a3b-thinking-2507`<br />Qwen3 30b A3b Thinking 2507 | - | text | text | tools, reasoning, temperature | context: 126000 / output: 32000 | - | 2026-02-04 |
| `qwen3-32b`<br />Qwen3 32B | - | text | text | tools, reasoning, temperature | context: 40000 / output: 4096 | - | 2025-08-05 |
| `qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | - | text | text | tools, temperature | context: 262000 / output: 4096 | - | 2025-08-14 |
| `qwen3-max`<br />Qwen3 Max | - | text | text | tools, temperature | context: 262144 / output: 65536 | - | 2025-09-24 |
| `qwen3-max-preview`<br />Qwen3 Max Preview | - | text | text | tools, temperature | context: 256000 / output: 64000 | - | 2025-09-06 |
| `qwen3-next-80b-a3b-instruct`<br />Qwen3 Next 80B A3B Instruct | - | text | text | tools, temperature | context: 131072 / output: 32768 | - | 2025-09-12 |
| `qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B Thinking | - | text | text | tools, reasoning, temperature | context: 131072 / output: 32768 | - | 2025-09-12 |
| `qwen3-vl-30b-a3b-thinking`<br />Qwen3-Vl 30b A3b Thinking | - | image, text, video | text | tools, temperature | context: 128000 / output: 32000 | - | 2026-02-09 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B | - | image, text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | - | 2026-02-22 |
| `stepfun-ai/gelab-zero-4b-preview`<br />Stepfun-Ai/Gelab Zero 4b Preview | - | image, text | text | tools, temperature | context: 8192 / output: 4096 | - | 2025-12-23 |
| `stepfun/step-3.5-flash`<br />Stepfun/Step-3.5 Flash | - | image, text | text | temperature | context: 64000 / output: 4096 | - | 2026-02-02 |
| `x-ai/grok-4-fast`<br />x-AI/Grok-4-Fast | - | audio, image, text, video | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2025-09-20 |
| `x-ai/grok-4-fast-non-reasoning`<br />X-Ai/Grok-4-Fast-Non-Reasoning | - | audio, image, text, video | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2025-12-18 |
| `x-ai/grok-4-fast-reasoning`<br />X-Ai/Grok-4-Fast-Reasoning | - | audio, image, text, video | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2025-12-18 |
| `x-ai/grok-4.1-fast`<br />x-AI/Grok-4.1-Fast | - | text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2025-11-20 |
| `x-ai/grok-4.1-fast-non-reasoning`<br />X-Ai/Grok 4.1 Fast Non Reasoning | - | audio, image, text, video | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | - | 2025-12-19 |
| `x-ai/grok-4.1-fast-reasoning`<br />X-Ai/Grok 4.1 Fast Reasoning | - | audio, image, text, video | text | tools, reasoning, temperature | context: 20000000 / output: 2000000 | - | 2025-12-19 |
| `x-ai/grok-code-fast-1`<br />x-AI/Grok-Code-Fast 1 | - | text | text | tools, reasoning, temperature | context: 256000 / output: 10000 | - | 2025-09-02 |
| `xiaomi/mimo-v2-flash`<br />Xiaomi/Mimo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2026-02-04 |
| `z-ai/autoglm-phone-9b`<br />Z-Ai/Autoglm Phone 9b | - | image, text | text | tools, temperature | context: 12800 / output: 4096 | - | 2025-12-23 |
| `z-ai/glm-4.6`<br />Z-AI/GLM 4.6 | - | text | text | tools, temperature | context: 200000 / output: 200000 | - | 2025-10-11 |
| `z-ai/glm-4.7`<br />Z-Ai/GLM 4.7 | - | text | text | tools, reasoning, temperature | context: 200000 / output: 200000 | - | 2025-12-23 |
| `z-ai/glm-5`<br />Z-Ai/GLM 5 | - | text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | - | 2026-02-12 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

