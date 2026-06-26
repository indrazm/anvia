---
title: "Kilo Gateway"
description: "Use Kilo Gateway through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1058
  label: "Kilo Gateway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.kilo.ai/api/gateway |
| Environment | `KILO_API_KEY` |
| Provider docs | [https://kilo.ai](https://kilo.ai) |
| Models | 345 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.KILO_API_KEY,
  baseUrl: "https://api.kilo.ai/api/gateway",
  completionApi: "chat",
});

const model = client.completionModel("~anthropic/claude-haiku-latest");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text |
| Attachments | 166 / 345 models |
| Tools | 259 / 345 models |
| Structured output | 5 / 345 models |
| Reasoning | 188 / 345 models |
| Temperature | 300 / 345 models |
| Open weights | 162 / 345 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `~anthropic/claude-haiku-latest`<br />Anthropic: Claude Haiku Latest | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2026-05-01 |
| `~anthropic/claude-opus-latest`<br />Anthropic: Claude Opus Latest | - | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-01 |
| `~anthropic/claude-sonnet-latest`<br />Anthropic: Claude Sonnet Latest | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-05-01 |
| `~google/gemini-flash-latest`<br />Google: Gemini Flash Latest | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.08333333333333334 | 2026-05-01 |
| `~google/gemini-pro-latest`<br />Google: Gemini Pro Latest | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 / cache_write: 0.375 | 2026-05-01 |
| `~moonshotai/kimi-latest`<br />MoonshotAI: Kimi Latest | - | image, text | text | tools, reasoning, temperature | context: 262142 / output: 262142 | input: 0.74 / output: 3.49 / cache_read: 0.14 | 2026-05-01 |
| `~openai/gpt-latest`<br />OpenAI: GPT Latest | - | image, pdf, text | text | tools, reasoning | context: 1050000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-01 |
| `~openai/gpt-mini-latest`<br />OpenAI: GPT Mini Latest | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-05-01 |
| `ai21/jamba-large-1.7`<br />AI21: Jamba Large 1.7 | - | text | text | tools, temperature | context: 256000 / output: 4096 | input: 2 / output: 8 | 2026-03-15 |
| `aion-labs/aion-1.0`<br />AionLabs: Aion-1.0 | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 4 / output: 8 | 2026-03-15 |
| `aion-labs/aion-1.0-mini`<br />AionLabs: Aion-1.0-Mini | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.7 / output: 1.4 | 2026-03-15 |
| `aion-labs/aion-2.0`<br />AionLabs: Aion-2.0 | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.8 / output: 1.6 | 2026-03-15 |
| `aion-labs/aion-rp-llama-3.1-8b`<br />AionLabs: Aion-RP 1.0 (8B) | - | text | text | temperature | context: 32768 / output: 32768 | input: 0.8 / output: 1.6 | 2026-03-15 |
| `alfredpros/codellama-7b-instruct-solidity`<br />AlfredPros: CodeLLaMa 7B Instruct Solidity | - | text | text | temperature, open weights | context: 4096 / output: 4096 | input: 0.8 / output: 1.2 | 2026-03-15 |
| `allenai/olmo-3-32b-think`<br />AllenAI: Olmo 3 32B Think | - | text | text | reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.15 / output: 0.5 | 2026-03-15 |
| `amazon/nova-2-lite-v1`<br />Amazon: Nova 2 Lite | - | image, pdf, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65535 | input: 0.3 / output: 2.5 | 2026-03-15 |
| `amazon/nova-lite-v1`<br />Amazon: Nova Lite 1.0 | - | image, text | text | tools, temperature | context: 300000 / output: 5120 | input: 0.06 / output: 0.24 | 2026-03-15 |
| `amazon/nova-micro-v1`<br />Amazon: Nova Micro 1.0 | - | text | text | tools, temperature | context: 128000 / output: 5120 | input: 0.035 / output: 0.14 | 2026-03-15 |
| `amazon/nova-premier-v1`<br />Amazon: Nova Premier 1.0 | - | image, text | text | tools, temperature | context: 1000000 / output: 32000 | input: 2.5 / output: 12.5 | 2026-03-15 |
| `amazon/nova-pro-v1`<br />Amazon: Nova Pro 1.0 | - | image, text | text | tools, temperature | context: 300000 / output: 5120 | input: 0.8 / output: 3.2 | 2024-12-03 |
| `anthracite-org/magnum-v4-72b`<br />Magnum v4 72B | - | text | text | temperature, open weights | context: 16384 / output: 2048 | input: 3 / output: 5 | 2026-03-15 |
| `anthropic/claude-3-haiku`<br />Anthropic: Claude 3 Haiku | - | image, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-07 |
| `anthropic/claude-3.5-haiku`<br />Anthropic: Claude 3.5 Haiku | - | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `anthropic/claude-haiku-4.5`<br />Anthropic: Claude Haiku 4.5 | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Anthropic: Claude Opus 4 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2026-03-15 |
| `anthropic/claude-opus-4.1`<br />Anthropic: Claude Opus 4.1 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2026-03-15 |
| `anthropic/claude-opus-4.5`<br />Anthropic: Claude Opus 4.5 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-15 |
| `anthropic/claude-opus-4.6`<br />Anthropic: Claude Opus 4.6 | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-02-05 |
| `anthropic/claude-opus-4.6-fast`<br />Anthropic: Claude Opus 4.6 (Fast) | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 30 / output: 150 / cache_read: 3 / cache_write: 37.5 | 2026-04-11 |
| `anthropic/claude-opus-4.7`<br />Anthropic: Claude Opus 4.7 | - | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-01 |
| `anthropic/claude-opus-4.7-fast`<br />Anthropic: Claude Opus 4.7 (Fast) | - | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 30 / output: 150 / cache_read: 3 / cache_write: 37.5 | 2026-05-16 |
| `anthropic/claude-sonnet-4`<br />Anthropic: Claude Sonnet 4 | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-15 |
| `anthropic/claude-sonnet-4.5`<br />Anthropic: Claude Sonnet 4.5 | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-15 |
| `anthropic/claude-sonnet-4.6`<br />Anthropic: Claude Sonnet 4.6 | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 | 2026-03-15 |
| `arcee-ai/coder-large`<br />Arcee AI: Coder Large | - | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.5 / output: 0.8 | 2026-03-15 |
| `arcee-ai/maestro-reasoning`<br />Arcee AI: Maestro Reasoning | - | text | text | temperature, open weights | context: 131072 / output: 32000 | input: 0.9 / output: 3.3 | 2026-03-15 |
| `arcee-ai/spotlight`<br />Arcee AI: Spotlight | - | image, text | text | temperature, open weights | context: 131072 / output: 65537 | input: 0.18 / output: 0.18 | 2026-03-15 |
| `arcee-ai/trinity-large-thinking`<br />Arcee AI: Trinity Large Thinking | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.22 / output: 0.85 | 2026-04-11 |
| `arcee-ai/trinity-mini`<br />Arcee AI: Trinity Mini | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.045 / output: 0.15 | 2026-01-28 |
| `arcee-ai/virtuoso-large`<br />Arcee AI: Virtuoso Large | - | text | text | tools, temperature, open weights | context: 131072 / output: 64000 | input: 0.75 / output: 1.2 | 2026-03-15 |
| `baidu/cobuddy:free`<br />Baidu: CoBuddy (free) | - | text | text | tools, reasoning | context: 131072 / output: 65536 | input: 0 / output: 0 | 2026-05-07 |
| `baidu/ernie-4.5-21b-a3b`<br />Baidu: ERNIE 4.5 21B A3B | - | text | text | tools, temperature, open weights | context: 120000 / output: 8000 | input: 0.07 / output: 0.28 | 2025-06-30 |
| `baidu/ernie-4.5-21b-a3b-thinking`<br />Baidu: ERNIE 4.5 21B A3B Thinking | - | text | text | reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.07 / output: 0.28 | 2025-09-19 |
| `baidu/ernie-4.5-300b-a47b`<br />Baidu: ERNIE 4.5 300B A47B  | - | text | text | temperature, open weights | context: 123000 / output: 12000 | input: 0.28 / output: 1.1 | 2026-01 |
| `baidu/ernie-4.5-vl-28b-a3b`<br />Baidu: ERNIE 4.5 VL 28B A3B | - | image, text | text | tools, reasoning, temperature, open weights | context: 30000 / output: 8000 | input: 0.14 / output: 0.56 | 2025-06-30 |
| `baidu/ernie-4.5-vl-424b-a47b`<br />Baidu: ERNIE 4.5 VL 424B A47B  | - | image, text | text | reasoning, temperature, open weights | context: 123000 / output: 16000 | input: 0.42 / output: 1.25 | 2026-01 |
| `baidu/qianfan-ocr-fast`<br />Baidu: Qianfan-OCR-Fast | - | image, text | text | reasoning, temperature | context: 65536 / output: 28672 | input: 0.68 / output: 2.81 | 2026-05-16 |
| `bytedance-seed/seed-1.6`<br />ByteDance Seed: Seed 1.6 | - | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0.25 / output: 2 | 2025-09 |
| `bytedance-seed/seed-1.6-flash`<br />ByteDance Seed: Seed 1.6 Flash | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.075 / output: 0.3 | 2026-03-15 |
| `bytedance-seed/seed-2.0-lite`<br />ByteDance Seed: Seed-2.0-Lite | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.25 / output: 2 | 2026-03-15 |
| `bytedance-seed/seed-2.0-mini`<br />ByteDance Seed: Seed-2.0-Mini | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.1 / output: 0.4 | 2026-03-15 |
| `bytedance/ui-tars-1.5-7b`<br />ByteDance: UI-TARS 7B  | - | image, text | text | temperature | context: 128000 / output: 2048 | input: 0.1 / output: 0.2 | 2026-03-15 |
| `cohere/command-a`<br />Cohere: Command A | - | text | text | temperature, open weights | context: 256000 / output: 8192 | input: 2.5 / output: 10 | 2025-03-13 |
| `cohere/command-r-08-2024`<br />Cohere: Command R (08-2024) | - | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.15 / output: 0.6 | 2024-08-30 |
| `cohere/command-r-plus-08-2024`<br />Cohere: Command R+ (08-2024) | - | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 2.5 / output: 10 | 2024-08-30 |
| `cohere/command-r7b-12-2024`<br />Cohere: Command R7B (12-2024) | - | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.0375 / output: 0.15 | 2024-12-02 |
| `deepcogito/cogito-v2.1-671b`<br />Deep Cogito: Cogito v2.1 671B | - | text | text | reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 1.25 / output: 1.25 | 2026-03-15 |
| `deepseek/deepseek-chat`<br />DeepSeek: DeepSeek V3 | - | text | text | tools, temperature, open weights | context: 163840 / output: 163840 | input: 0.32 / output: 0.89 / cache_read: 0.15 | 2026-03-15 |
| `deepseek/deepseek-chat-v3-0324`<br />DeepSeek: DeepSeek V3 0324 | - | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.2 / output: 0.77 / cache_read: 0.095 | 2026-03-15 |
| `deepseek/deepseek-chat-v3.1`<br />DeepSeek: DeepSeek V3.1 | - | text | text | tools, reasoning, temperature, open weights | context: 32768 / output: 7168 | input: 0.15 / output: 0.75 | 2025-08-21 |
| `deepseek/deepseek-r1`<br />DeepSeek: R1 | - | text | text | tools, reasoning, temperature, open weights | context: 64000 / output: 16000 | input: 0.7 / output: 2.5 | 2025-01-20 |
| `deepseek/deepseek-r1-0528`<br />DeepSeek: R1 0528 | - | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.45 / output: 2.15 / cache_read: 0.2 | 2026-03-15 |
| `deepseek/deepseek-r1-distill-llama-70b`<br />DeepSeek: R1 Distill Llama 70B | - | text | text | reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.7 / output: 0.8 / cache_read: 0.015 | 2026-03-15 |
| `deepseek/deepseek-r1-distill-qwen-32b`<br />DeepSeek: R1 Distill Qwen 32B | - | text | text | reasoning, temperature, open weights | context: 32768 / output: 32768 | input: 0.29 / output: 0.29 | 2025-11-25 |
| `deepseek/deepseek-v3.1-terminus`<br />DeepSeek: DeepSeek V3.1 Terminus | - | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.21 / output: 0.79 / cache_read: 0.13 | 2025-09-22 |
| `deepseek/deepseek-v3.2`<br />DeepSeek: DeepSeek V3.2 | - | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.26 / output: 0.38 / cache_read: 0.125 | 2026-03-15 |
| `deepseek/deepseek-v3.2-exp`<br />DeepSeek: DeepSeek V3.2 Exp | - | text | text | tools, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.27 / output: 0.41 | 2025-09-29 |
| `deepseek/deepseek-v3.2-speciale`<br />DeepSeek: DeepSeek V3.2 Speciale | - | text | text | reasoning, temperature, open weights | context: 163840 / output: 163840 | input: 0.4 / output: 1.2 / cache_read: 0.135 | 2026-03-15 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek: DeepSeek V4 Flash | - | text | text | tools, reasoning, temperature | context: 1048576 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-05-01 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek: DeepSeek V4 Pro | - | text | text | tools, reasoning, temperature | context: 1048576 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-05-01 |
| `essentialai/rnj-1-instruct`<br />EssentialAI: Rnj 1 Instruct | - | text | text | tools, temperature, open weights | context: 32768 / output: 6554 | input: 0.15 / output: 0.15 | 2026-03-15 |
| `google/gemini-2.0-flash-001`<br />Google: Gemini 2.0 Flash | - | audio, image, pdf, text, video | text | tools, temperature | context: 1048576 / output: 8192 | input: 0.1 / output: 0.4 / cache_read: 0.025 / cache_write: 0.083333 | 2026-03-15 |
| `google/gemini-2.0-flash-lite-001`<br />Google: Gemini 2.0 Flash Lite | - | audio, image, pdf, text, video | text | tools, temperature | context: 1048576 / output: 8192 | input: 0.075 / output: 0.3 | 2026-03-15 |
| `google/gemini-2.5-flash`<br />Google: Gemini 2.5 Flash | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.3 / output: 2.5 / reasoning: 2.5 / cache_read: 0.03 / cache_write: 0.083333 | 2026-03-15 |
| `google/gemini-2.5-flash-image`<br />Google: Nano Banana (Gemini 2.5 Flash Image) | - | image, text | image, text | temperature | context: 32768 / output: 32768 | input: 0.3 / output: 2.5 | 2026-03-15 |
| `google/gemini-2.5-flash-lite`<br />Google: Gemini 2.5 Flash Lite | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.1 / output: 0.4 / reasoning: 0.4 / cache_read: 0.01 / cache_write: 0.083333 | 2026-03-15 |
| `google/gemini-2.5-flash-lite-preview-09-2025`<br />Google: Gemini 2.5 Flash Lite Preview 09-2025 | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / reasoning: 0.4 / cache_read: 0.01 / cache_write: 0.083333 | 2026-03-15 |
| `google/gemini-2.5-pro`<br />Google: Gemini 2.5 Pro | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2026-03-15 |
| `google/gemini-2.5-pro-preview`<br />Google: Gemini 2.5 Pro Preview 06-05 | - | audio, image, pdf, text | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2026-03-15 |
| `google/gemini-2.5-pro-preview-05-06`<br />Google: Gemini 2.5 Pro Preview 05-06 | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65535 | input: 1.25 / output: 10 / reasoning: 10 / cache_read: 0.125 / cache_write: 0.375 | 2026-03-15 |
| `google/gemini-3-flash-preview`<br />Google: Gemini 3 Flash Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / reasoning: 3 / cache_read: 0.05 / cache_write: 0.083333 | 2026-03-15 |
| `google/gemini-3-pro-image-preview`<br />Google: Nano Banana Pro (Gemini 3 Pro Image Preview) | - | image, text | image, text | reasoning, temperature | context: 65536 / output: 32768 | input: 2 / output: 12 / reasoning: 12 | 2026-03-15 |
| `google/gemini-3.1-flash-image-preview`<br />Google: Nano Banana 2 (Gemini 3.1 Flash Image Preview) | - | image, text | image, text | reasoning, temperature | context: 65536 / output: 65536 | input: 0.5 / output: 3 | 2026-03-15 |
| `google/gemini-3.1-flash-lite`<br />Google: Gemini 3.1 Flash Lite | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / reasoning: 1.5 / cache_read: 0.025 / cache_write: 0.08333 | 2026-05-16 |
| `google/gemini-3.1-flash-lite-preview`<br />Google: Gemini 3.1 Flash Lite Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / reasoning: 1.5 | 2026-03-15 |
| `google/gemini-3.1-pro-preview`<br />Google: Gemini 3.1 Pro Preview | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / reasoning: 12 | 2026-03-15 |
| `google/gemini-3.1-pro-preview-customtools`<br />Google: Gemini 3.1 Pro Preview Custom Tools | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / reasoning: 12 | 2026-03-15 |
| `google/gemini-3.5-flash`<br />Google: Gemini 3.5 Flash | - | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.5 / output: 9 / reasoning: 9 / cache_read: 0.15 / cache_write: 0.08333 | 2026-05-27 |
| `google/gemma-2-27b-it`<br />Google: Gemma 2 27B | - | text | text | temperature, open weights | context: 8192 / output: 2048 | input: 0.65 / output: 0.65 | 2024-06-24 |
| `google/gemma-3-12b-it`<br />Google: Gemma 3 12B | - | image, text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.04 / output: 0.13 / cache_read: 0.015 | 2026-03-15 |
| `google/gemma-3-27b-it`<br />Google: Gemma 3 27B | - | image, text | text | tools, temperature, open weights | context: 128000 / output: 65536 | input: 0.03 / output: 0.11 / cache_read: 0.02 | 2026-03-15 |
| `google/gemma-3-4b-it`<br />Google: Gemma 3 4B | - | image, text | text | temperature, open weights | context: 131072 / output: 19200 | input: 0.04 / output: 0.08 | 2026-03-15 |
| `google/gemma-3n-e4b-it`<br />Google: Gemma 3n 4B | - | text | text | temperature, open weights | context: 32768 / output: 6554 | input: 0.02 / output: 0.04 | 2025-05-20 |
| `google/gemma-4-26b-a4b-it`<br />Google: Gemma 4 26B A4B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.12 / output: 0.4 | 2026-04-11 |
| `google/gemma-4-31b-it`<br />Google: Gemma 4 31B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.14 / output: 0.4 | 2026-04-11 |
| `google/lyria-3-clip-preview`<br />Google: Lyria 3 Clip Preview | - | image, text | audio, text | temperature | context: 1048576 / output: 65536 | input: 0 / output: 0 | 2026-04-11 |
| `google/lyria-3-pro-preview`<br />Google: Lyria 3 Pro Preview | - | image, text | audio, text | temperature | context: 1048576 / output: 65536 | input: 0 / output: 0 | 2026-04-11 |
| `gryphe/mythomax-l2-13b`<br />MythoMax 13B | - | text | text | temperature, open weights | context: 4096 / output: 4096 | input: 0.06 / output: 0.06 | 2024-04-25 |
| `ibm-granite/granite-4.0-h-micro`<br />IBM: Granite 4.0 Micro | - | text | text | temperature, open weights | context: 131000 / output: 32768 | input: 0.017 / output: 0.11 | 2026-03-15 |
| `ibm-granite/granite-4.1-8b`<br />IBM: Granite 4.1 8B | - | text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.05 / output: 0.1 / cache_read: 0.05 | 2026-05-01 |
| `inception/mercury-2`<br />Inception: Mercury 2 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 50000 | input: 0.25 / output: 0.75 / cache_read: 0.025 | 2026-02-24 |
| `inclusionai/ling-2.6-1t`<br />inclusionAI: Ling-2.6-1T | - | text | text | tools, temperature | context: 262144 / output: 32768 | input: 0.3 / output: 2.5 / cache_read: 0.06 | 2026-05-16 |
| `inclusionai/ling-2.6-flash`<br />inclusionAI: Ling-2.6 Flash | - | text | text | tools, temperature | context: 262144 / output: 32768 | input: 0.08 / output: 0.24 / cache_read: 0.016 | 2026-05-01 |
| `inclusionai/ring-2.6-1t`<br />inclusionAI: Ring-2.6-1T | - | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.075 / output: 0.625 / cache_read: 0.015 | 2026-05-16 |
| `inflection/inflection-3-pi`<br />Inflection: Inflection 3 Pi | - | text | text | temperature | context: 8000 / output: 1024 | input: 2.5 / output: 10 | 2026-03-15 |
| `inflection/inflection-3-productivity`<br />Inflection: Inflection 3 Productivity | - | text | text | temperature | context: 8000 / output: 1024 | input: 2.5 / output: 10 | 2026-03-15 |
| `kilo-auto/balanced`<br />Kilo Auto Balanced | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.6 / output: 3 | 2026-03-15 |
| `kilo-auto/free`<br />Kilo Auto Free | - | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0 / output: 0 | 2026-03-15 |
| `kilo-auto/frontier`<br />Kilo Auto Frontier | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 | 2026-03-15 |
| `kilo-auto/small`<br />Kilo Auto Small | - | image, text | text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 0.05 / output: 0.4 | 2026-03-15 |
| `kwaipilot/kat-coder-pro-v2`<br />Kwaipilot: KAT-Coder-Pro V2 | - | text | text | tools, temperature, open weights | context: 256000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-04-11 |
| `liquid/lfm-2-24b-a2b`<br />LiquidAI: LFM2-24B-A2B | - | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.03 / output: 0.12 | 2026-03-15 |
| `mancer/weaver`<br />Mancer: Weaver (alpha) | - | text | text | temperature | context: 8000 / output: 2000 | input: 0.75 / output: 1 | 2026-03-15 |
| `meta-llama/llama-3-70b-instruct`<br />Meta: Llama 3 70B Instruct | - | text | text | temperature, open weights | context: 8192 / output: 8000 | input: 0.51 / output: 0.74 | 2024-07-23 |
| `meta-llama/llama-3-8b-instruct`<br />Meta: Llama 3 8B Instruct | - | text | text | tools, temperature, open weights | context: 8192 / output: 16384 | input: 0.03 / output: 0.04 | 2025-04-03 |
| `meta-llama/llama-3.1-70b-instruct`<br />Meta: Llama 3.1 70B Instruct | - | text | text | tools, temperature, open weights | context: 131072 / output: 26215 | input: 0.4 / output: 0.4 | 2024-07-23 |
| `meta-llama/llama-3.1-8b-instruct`<br />Meta: Llama 3.1 8B Instruct | - | text | text | tools, temperature, open weights | context: 16384 / output: 16384 | input: 0.02 / output: 0.05 | 2025-12-23 |
| `meta-llama/llama-3.2-11b-vision-instruct`<br />Meta: Llama 3.2 11B Vision Instruct | - | image, text | text | temperature, open weights | context: 131072 / output: 16384 | input: 0.049 / output: 0.049 | 2024-09-25 |
| `meta-llama/llama-3.2-1b-instruct`<br />Meta: Llama 3.2 1B Instruct | - | text | text | temperature, open weights | context: 60000 / output: 12000 | input: 0.027 / output: 0.2 | 2026-01-27 |
| `meta-llama/llama-3.2-3b-instruct`<br />Meta: Llama 3.2 3B Instruct | - | text | text | temperature, open weights | context: 80000 / output: 16384 | input: 0.051 / output: 0.34 | 2026-03-15 |
| `meta-llama/llama-3.3-70b-instruct`<br />Meta: Llama 3.3 70B Instruct | - | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 0.1 / output: 0.32 | 2026-02-04 |
| `meta-llama/llama-4-maverick`<br />Meta: Llama 4 Maverick | - | image, text | text | tools, temperature, open weights | context: 1048576 / output: 16384 | input: 0.15 / output: 0.6 | 2025-12-24 |
| `meta-llama/llama-4-scout`<br />Meta: Llama 4 Scout | - | image, text | text | tools, temperature, open weights | context: 327680 / output: 16384 | input: 0.08 / output: 0.3 | 2025-04-05 |
| `meta-llama/llama-guard-3-8b`<br />Llama Guard 3 8B | - | text | text | temperature, open weights | context: 131072 / output: 26215 | input: 0.02 / output: 0.06 | 2026-02-04 |
| `meta-llama/llama-guard-4-12b`<br />Meta: Llama Guard 4 12B | - | image, text | text | temperature, open weights | context: 163840 / output: 32768 | input: 0.18 / output: 0.18 | 2025-04-05 |
| `microsoft/phi-4`<br />Microsoft: Phi 4 | - | text | text | temperature, open weights | context: 16384 / output: 16384 | input: 0.06 / output: 0.14 | 2024-12-11 |
| `microsoft/phi-4-mini-instruct`<br />Microsoft: Phi 4 Mini Instruct | - | text | text | schema, temperature, open weights | context: 128000 / output: 128000 | input: 0.08 / output: 0.35 / cache_read: 0.08 | 2026-05-07 |
| `microsoft/wizardlm-2-8x22b`<br />WizardLM-2 8x22B | - | text | text | temperature, open weights | context: 65535 / output: 8000 | input: 0.62 / output: 0.62 | 2024-04-24 |
| `minimax/minimax-01`<br />MiniMax: MiniMax-01 | - | image, text | text | temperature, open weights | context: 1000192 / output: 1000192 | input: 0.2 / output: 1.1 | 2025-01-15 |
| `minimax/minimax-m1`<br />MiniMax: MiniMax M1 | - | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 40000 | input: 0.4 / output: 2.2 | 2025-06-17 |
| `minimax/minimax-m2`<br />MiniMax: MiniMax M2 | - | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.255 / output: 1 / cache_read: 0.03 | 2026-03-15 |
| `minimax/minimax-m2-her`<br />MiniMax: MiniMax M2-her | - | text | text | temperature, open weights | context: 65536 / output: 2048 | input: 0.3 / output: 1.2 | 2026-03-15 |
| `minimax/minimax-m2.1`<br />MiniMax: MiniMax M2.1 | - | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 39322 | input: 0.27 / output: 0.95 / cache_read: 0.03 | 2025-12-23 |
| `minimax/minimax-m2.5`<br />MiniMax: MiniMax M2.5 | - | text | text | tools, reasoning, temperature, open weights | context: 196608 / output: 196608 | input: 0.25 / output: 1.2 / cache_read: 0.029 | 2026-03-15 |
| `minimax/minimax-m2.7`<br />MiniMax: MiniMax M2.7 | minimax-m2.7 | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `mistralai/codestral-2508`<br />Mistral: Codestral 2508 | - | text | text | tools, temperature, open weights | context: 256000 / output: 51200 | input: 0.3 / output: 0.9 | 2025-08-01 |
| `mistralai/devstral-2512`<br />Mistral: Devstral 2 2512 | - | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.4 / output: 2 / cache_read: 0.025 | 2026-03-15 |
| `mistralai/devstral-medium`<br />Mistral: Devstral Medium | - | text | text | tools, temperature, open weights | context: 131072 / output: 26215 | input: 0.4 / output: 2 | 2025-07-10 |
| `mistralai/devstral-small`<br />Mistral: Devstral Small 1.1 | - | text | text | tools, temperature, open weights | context: 131072 / output: 26215 | input: 0.1 / output: 0.3 | 2025-07-10 |
| `mistralai/ministral-14b-2512`<br />Mistral: Ministral 3 14B 2512 | - | image, text | text | tools, temperature | context: 262144 / output: 52429 | input: 0.2 / output: 0.2 | 2025-12-16 |
| `mistralai/ministral-3b-2512`<br />Mistral: Ministral 3 3B 2512 | - | image, text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.1 / output: 0.1 | 2026-03-15 |
| `mistralai/ministral-8b-2512`<br />Mistral: Ministral 3 8B 2512 | - | image, text | text | tools, temperature, open weights | context: 262144 / output: 32768 | input: 0.15 / output: 0.15 | 2026-03-15 |
| `mistralai/mistral-7b-instruct-v0.1`<br />Mistral: Mistral 7B Instruct v0.1 | - | text | text | temperature | context: 2824 / output: 565 | input: 0.11 / output: 0.19 | 2025-04-03 |
| `mistralai/mistral-large`<br />Mistral Large | - | text | text | tools, temperature, open weights | context: 128000 / output: 25600 | input: 2 / output: 6 | 2025-12-02 |
| `mistralai/mistral-large-2407`<br />Mistral Large 2407 | - | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 2 / output: 6 | 2026-03-15 |
| `mistralai/mistral-large-2411`<br />Mistral Large 2411 | - | text | text | tools, temperature, open weights | context: 131072 / output: 26215 | input: 2 / output: 6 | 2024-11-04 |
| `mistralai/mistral-large-2512`<br />Mistral: Mistral Large 3 2512 | - | image, text | text | tools, temperature, open weights | context: 262144 / output: 52429 | input: 0.5 / output: 1.5 | 2025-12-16 |
| `mistralai/mistral-medium-3`<br />Mistral: Mistral Medium 3 | - | image, text | text | tools, temperature | context: 131072 / output: 26215 | input: 0.4 / output: 2 | 2025-05-07 |
| `mistralai/mistral-medium-3-5`<br />Mistral: Mistral Medium 3.5 | - | image, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 262144 | input: 1.5 / output: 7.5 | 2026-05-07 |
| `mistralai/mistral-medium-3.1`<br />Mistral: Mistral Medium 3.1 | - | image, text | text | tools, temperature | context: 131072 / output: 26215 | input: 0.4 / output: 2 | 2025-08-12 |
| `mistralai/mistral-nemo`<br />Mistral: Mistral Nemo | - | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 0.02 / output: 0.04 | 2024-07-30 |
| `mistralai/mistral-saba`<br />Mistral: Saba | - | text | text | tools, temperature, open weights | context: 32768 / output: 32768 | input: 0.2 / output: 0.6 | 2026-03-15 |
| `mistralai/mistral-small-24b-instruct-2501`<br />Mistral: Mistral Small 3 | - | text | text | tools, temperature, open weights | context: 32768 / output: 16384 | input: 0.05 / output: 0.08 | 2026-01-10 |
| `mistralai/mistral-small-2603`<br />Mistral: Mistral Small 4 | - | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-04-11 |
| `mistralai/mistral-small-3.1-24b-instruct`<br />Mistral: Mistral Small 3.1 24B | - | image, text | text | temperature, open weights | context: 128000 / output: 131072 | input: 0.35 / output: 0.56 / cache_read: 0.015 | 2026-03-15 |
| `mistralai/mistral-small-3.2-24b-instruct`<br />Mistral: Mistral Small 3.2 24B | - | image, text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0.06 / output: 0.18 / cache_read: 0.03 | 2025-06-20 |
| `mistralai/mixtral-8x22b-instruct`<br />Mistral: Mixtral 8x22B Instruct | - | text | text | tools, temperature, open weights | context: 65536 / output: 13108 | input: 2 / output: 6 | 2024-04-17 |
| `mistralai/pixtral-large-2411`<br />Mistral: Pixtral Large 2411 | - | image, text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 2 / output: 6 | 2026-03-15 |
| `mistralai/voxtral-small-24b-2507`<br />Mistral: Voxtral Small 24B 2507 | - | audio, text | text | tools, temperature, open weights | context: 32000 / output: 6400 | input: 0.1 / output: 0.3 | 2025-07-01 |
| `moonshotai/kimi-k2`<br />MoonshotAI: Kimi K2 0711 | - | text | text | tools, temperature, open weights | context: 131000 / output: 26215 | input: 0.55 / output: 2.2 | 2026-03-15 |
| `moonshotai/kimi-k2-0905`<br />MoonshotAI: Kimi K2 0905 | - | text | text | tools, temperature, open weights | context: 131072 / output: 26215 | input: 0.4 / output: 2 / cache_read: 0.15 | 2025-09-05 |
| `moonshotai/kimi-k2-thinking`<br />MoonshotAI: Kimi K2 Thinking | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 65535 | input: 0.47 / output: 2 / cache_read: 0.2 | 2026-03-15 |
| `moonshotai/kimi-k2.5`<br />MoonshotAI: Kimi K2.5 | - | image, text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65535 | input: 0.45 / output: 2.2 | 2026-03-15 |
| `moonshotai/kimi-k2.6`<br />MoonshotAI: Kimi K2.6 | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65535 | input: 0.75 / output: 3.5 / cache_read: 0.375 | 2026-05-12 |
| `morph/morph-v3-fast`<br />Morph: Morph V3 Fast | - | text | text | temperature | context: 81920 / output: 38000 | input: 0.8 / output: 1.2 | 2024-08-15 |
| `morph/morph-v3-large`<br />Morph: Morph V3 Large | - | text | text | temperature | context: 262144 / output: 131072 | input: 0.9 / output: 1.9 | 2024-08-15 |
| `nex-agi/deepseek-v3.1-nex-n1`<br />Nex AGI: DeepSeek V3.1 Nex N1 | - | text | text | tools, temperature | context: 131072 / output: 163840 | input: 0.27 / output: 1 | 2025-11-25 |
| `nousresearch/hermes-2-pro-llama-3-8b`<br />NousResearch: Hermes 2 Pro - Llama-3 8B | - | text | text | temperature, open weights | context: 8192 / output: 8192 | input: 0.14 / output: 0.14 | 2024-06-27 |
| `nousresearch/hermes-3-llama-3.1-405b`<br />Nous: Hermes 3 405B Instruct | - | text | text | temperature, open weights | context: 131072 / output: 16384 | input: 1 / output: 1 | 2024-08-16 |
| `nousresearch/hermes-3-llama-3.1-70b`<br />Nous: Hermes 3 70B Instruct | - | text | text | temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 0.3 | 2026-03-15 |
| `nousresearch/hermes-4-405b`<br />Nous: Hermes 4 405B | - | text | text | reasoning, temperature, open weights | context: 131072 / output: 26215 | input: 1 / output: 3 | 2025-08-25 |
| `nousresearch/hermes-4-70b`<br />Nous: Hermes 4 70B | - | text | text | reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.13 / output: 0.4 / cache_read: 0.055 | 2026-03-15 |
| `nvidia/llama-3.3-nemotron-super-49b-v1.5`<br />NVIDIA: Llama 3.3 Nemotron Super 49B V1.5 | nemotron | text | text | tools, reasoning, temperature | context: 131072 / output: 26215 | input: 0.1 / output: 0.4 | 2025-03-16 |
| `nvidia/nemotron-3-nano-30b-a3b`<br />NVIDIA: Nemotron 3 Nano 30B A3B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 52429 | input: 0.05 / output: 0.2 | 2026-02-04 |
| `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`<br />NVIDIA: Nemotron 3 Nano Omni (free) | nemotron | audio, image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 65536 | input: 0 / output: 0 | 2026-05-01 |
| `nvidia/nemotron-3-super-120b-a12b`<br />NVIDIA: Nemotron 3 Super | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.1 / output: 0.5 / cache_read: 0.1 | 2026-04-11 |
| `nvidia/nemotron-3-super-120b-a12b:free`<br />NVIDIA: Nemotron 3 Super (free) | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2026-03-15 |
| `nvidia/nemotron-nano-9b-v2`<br />NVIDIA: Nemotron Nano 9B V2 | nemotron | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 26215 | input: 0.04 / output: 0.16 | 2025-08-18 |
| `openai/gpt-3.5-turbo`<br />OpenAI: GPT-3.5 Turbo | - | text | text | tools, temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 | 2023-11-06 |
| `openai/gpt-3.5-turbo-0613`<br />OpenAI: GPT-3.5 Turbo (older v0613) | - | text | text | tools, temperature | context: 4095 / output: 4096 | input: 1 / output: 2 | 2023-06-13 |
| `openai/gpt-3.5-turbo-16k`<br />OpenAI: GPT-3.5 Turbo 16k | - | text | text | tools, temperature | context: 16385 / output: 4096 | input: 3 / output: 4 | 2026-03-15 |
| `openai/gpt-3.5-turbo-instruct`<br />OpenAI: GPT-3.5 Turbo Instruct | - | text | text | temperature | context: 4095 / output: 4096 | input: 1.5 / output: 2 | 2023-09-21 |
| `openai/gpt-4`<br />OpenAI: GPT-4 | - | text | text | tools, temperature | context: 8191 / output: 4096 | input: 30 / output: 60 | 2024-04-09 |
| `openai/gpt-4-0314`<br />OpenAI: GPT-4 (older v0314) | - | text | text | tools, temperature | context: 8191 / output: 4096 | input: 30 / output: 60 | 2026-03-15 |
| `openai/gpt-4-1106-preview`<br />OpenAI: GPT-4 Turbo (older v1106) | - | text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2026-03-15 |
| `openai/gpt-4-turbo`<br />OpenAI: GPT-4 Turbo | - | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `openai/gpt-4-turbo-preview`<br />OpenAI: GPT-4 Turbo Preview | - | text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2026-03-15 |
| `openai/gpt-4.1`<br />OpenAI: GPT-4.1 | - | image, pdf, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2026-03-15 |
| `openai/gpt-4.1-mini`<br />OpenAI: GPT-4.1 Mini | - | image, pdf, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2026-03-15 |
| `openai/gpt-4.1-nano`<br />OpenAI: GPT-4.1 Nano | - | image, pdf, text | text | tools, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2026-03-15 |
| `openai/gpt-4o`<br />OpenAI: GPT-4o | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2026-03-15 |
| `openai/gpt-4o-2024-05-13`<br />OpenAI: GPT-4o (2024-05-13) | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 4096 | input: 5 / output: 15 | 2026-03-15 |
| `openai/gpt-4o-2024-08-06`<br />OpenAI: GPT-4o (2024-08-06) | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2026-03-15 |
| `openai/gpt-4o-2024-11-20`<br />OpenAI: GPT-4o (2024-11-20) | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2026-03-15 |
| `openai/gpt-4o-audio-preview`<br />OpenAI: GPT-4o Audio | - | audio, text | audio, text | tools, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2026-03-15 |
| `openai/gpt-4o-mini`<br />OpenAI: GPT-4o-mini | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2026-03-15 |
| `openai/gpt-4o-mini-2024-07-18`<br />OpenAI: GPT-4o-mini (2024-07-18) | - | image, pdf, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2026-03-15 |
| `openai/gpt-4o-mini-search-preview`<br />OpenAI: GPT-4o-mini Search Preview | - | text | text | - | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 | 2025-01 |
| `openai/gpt-4o-search-preview`<br />OpenAI: GPT-4o Search Preview | - | text | text | - | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2026-03-15 |
| `openai/gpt-5`<br />OpenAI: GPT-5 | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2026-03-15 |
| `openai/gpt-5-chat`<br />OpenAI: GPT-5 Chat | - | image, pdf, text | text | - | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2026-03-15 |
| `openai/gpt-5-codex`<br />OpenAI: GPT-5 Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `openai/gpt-5-image`<br />OpenAI: GPT-5 Image | - | image, pdf, text | image, text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 10 / output: 10 | 2026-03-15 |
| `openai/gpt-5-image-mini`<br />OpenAI: GPT-5 Image Mini | - | image, pdf, text | image, text | tools, reasoning, temperature | context: 400000 / output: 128000 | input: 2.5 / output: 2 | 2026-03-15 |
| `openai/gpt-5-mini`<br />OpenAI: GPT-5 Mini | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2026-03-15 |
| `openai/gpt-5-nano`<br />OpenAI: GPT-5 Nano | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2026-03-15 |
| `openai/gpt-5-pro`<br />OpenAI: GPT-5 Pro | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 15 / output: 120 | 2026-03-15 |
| `openai/gpt-5.1`<br />OpenAI: GPT-5.1 | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2026-03-15 |
| `openai/gpt-5.1-chat`<br />OpenAI: GPT-5.1 Chat | - | image, pdf, text | text | tools | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2026-03-15 |
| `openai/gpt-5.1-codex`<br />OpenAI: GPT-5.1-Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />OpenAI: GPT-5.1-Codex-Max | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />OpenAI: GPT-5.1-Codex-Mini | - | image, text | text | tools, reasoning | context: 400000 / output: 100000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `openai/gpt-5.2`<br />OpenAI: GPT-5.2 | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-15 |
| `openai/gpt-5.2-chat`<br />OpenAI: GPT-5.2 Chat | - | image, pdf, text | text | tools | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-15 |
| `openai/gpt-5.2-codex`<br />OpenAI: GPT-5.2-Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-01-14 |
| `openai/gpt-5.2-pro`<br />OpenAI: GPT-5.2 Pro | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 21 / output: 168 | 2026-03-15 |
| `openai/gpt-5.3-chat`<br />OpenAI: GPT-5.3 Chat | - | image, pdf, text | text | tools | context: 128000 / output: 16384 | input: 1.75 / output: 14 | 2026-03-15 |
| `openai/gpt-5.3-codex`<br />OpenAI: GPT-5.3-Codex | - | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-03-15 |
| `openai/gpt-5.4`<br />OpenAI: GPT-5.4 | - | image, pdf, text | text | tools, reasoning | context: 1050000 / output: 128000 | input: 2.5 / output: 15 | 2026-03-15 |
| `openai/gpt-5.4-image-2`<br />OpenAI: GPT-5.4 Image 2 | - | image, pdf, text | image, text | reasoning | context: 272000 / output: 128000 | input: 8 / output: 15 / cache_read: 2 | 2026-05-01 |
| `openai/gpt-5.4-mini`<br />OpenAI: GPT-5.4 Mini | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-04-11 |
| `openai/gpt-5.4-nano`<br />OpenAI: GPT-5.4 Nano | - | image, pdf, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-04-11 |
| `openai/gpt-5.4-pro`<br />OpenAI: GPT-5.4 Pro | - | image, pdf, text | text | tools, reasoning | context: 1050000 / output: 128000 | input: 30 / output: 180 | 2026-03-15 |
| `openai/gpt-5.5`<br />OpenAI: GPT-5.5 | - | image, pdf, text | text | tools, reasoning | context: 1050000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-01 |
| `openai/gpt-5.5-pro`<br />OpenAI: GPT-5.5 Pro | - | image, pdf, text | text | tools, reasoning | context: 1050000 / output: 128000 | input: 30 / output: 180 | 2026-05-01 |
| `openai/gpt-audio`<br />OpenAI: GPT Audio | - | audio, text | audio, text | temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 | 2026-03-15 |
| `openai/gpt-audio-mini`<br />OpenAI: GPT Audio Mini | - | audio, text | audio, text | temperature | context: 128000 / output: 16384 | input: 0.6 / output: 2.4 | 2026-03-15 |
| `openai/gpt-chat-latest`<br />OpenAI: GPT Chat Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-07 |
| `openai/gpt-oss-120b`<br />OpenAI: gpt-oss-120b | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 26215 | input: 0.039 / output: 0.19 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />OpenAI: gpt-oss-20b | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 26215 | input: 0.03 / output: 0.14 | 2025-08-05 |
| `openai/gpt-oss-safeguard-20b`<br />OpenAI: gpt-oss-safeguard-20b | - | text | text | tools, reasoning, temperature | context: 131072 / output: 65536 | input: 0.075 / output: 0.3 / cache_read: 0.037 | 2025-10-29 |
| `openai/o1`<br />OpenAI: o1 | - | image, pdf, text | text | tools | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2026-03-15 |
| `openai/o1-pro`<br />OpenAI: o1-pro | - | image, pdf, text | text | reasoning | context: 200000 / output: 100000 | input: 150 / output: 600 | 2026-03-15 |
| `openai/o3`<br />OpenAI: o3 | - | image, pdf, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2026-03-15 |
| `openai/o3-deep-research`<br />OpenAI: o3 Deep Research | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 100000 | input: 10 / output: 40 / cache_read: 2.5 | 2026-03-15 |
| `openai/o3-mini`<br />OpenAI: o3 Mini | - | pdf, text | text | tools | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2026-03-15 |
| `openai/o3-mini-high`<br />OpenAI: o3 Mini High | - | pdf, text | text | tools | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2026-03-15 |
| `openai/o3-pro`<br />OpenAI: o3 Pro | - | image, pdf, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 20 / output: 80 | 2026-03-15 |
| `openai/o4-mini`<br />OpenAI: o4 Mini | - | image, pdf, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2026-03-15 |
| `openai/o4-mini-deep-research`<br />OpenAI: o4 Mini Deep Research | - | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2026-03-15 |
| `openai/o4-mini-high`<br />OpenAI: o4 Mini High | - | image, pdf, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2026-03-15 |
| `openrouter/auto`<br />Auto Router | - | audio, image, pdf, text, video | image, text | tools, reasoning, temperature | context: 2000000 / output: 32768 | input: 0 / output: 0 | 2026-03-15 |
| `openrouter/bodybuilder`<br />Body Builder (beta) | - | text | text | - | context: 128000 / output: 32768 | input: 0 / output: 0 | 2026-03-15 |
| `openrouter/free`<br />Free Models Router | - | image, text | text | tools, reasoning, temperature | context: 200000 / output: 32768 | input: 0 / output: 0 | 2026-03-15 |
| `openrouter/owl-alpha`<br />Owl Alpha | - | text | text | tools, schema, reasoning, temperature | context: 1048756 / output: 262144 | input: 0 / output: 0 | 2026-04-30 |
| `openrouter/pareto-code`<br />Pareto Code Router | - | text | text | - | context: 200000 / output: 65536 | input: 0 / output: 0 | 2026-05-01 |
| `perceptron/perceptron-mk1`<br />Perceptron: Perceptron Mk1 | - | image, text, video | text | reasoning, temperature | context: 32768 / output: 8192 | input: 0.15 / output: 1.5 | 2026-05-16 |
| `perplexity/sonar`<br />Perplexity: Sonar | - | image, text | text | temperature | context: 127072 / output: 25415 | input: 1 / output: 1 | 2025-09-01 |
| `perplexity/sonar-deep-research`<br />Perplexity: Sonar Deep Research | - | text | text | reasoning, temperature | context: 128000 / output: 25600 | input: 2 / output: 8 | 2025-01-27 |
| `perplexity/sonar-pro`<br />Perplexity: Sonar Pro | - | image, text | text | temperature | context: 200000 / output: 8000 | input: 3 / output: 15 | 2025-09-01 |
| `perplexity/sonar-pro-search`<br />Perplexity: Sonar Pro Search | - | image, text | text | reasoning, temperature | context: 200000 / output: 8000 | input: 3 / output: 15 | 2026-03-15 |
| `perplexity/sonar-reasoning-pro`<br />Perplexity: Sonar Reasoning Pro | - | image, text | text | reasoning, temperature | context: 128000 / output: 25600 | input: 2 / output: 8 | 2025-09-01 |
| `poolside/laguna-m.1:free`<br />Poolside: Laguna M.1 (free) | - | text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0 / output: 0 | 2026-06-13 |
| `poolside/laguna-xs.2:free`<br />Poolside: Laguna XS.2 (free) | - | text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0 / output: 0 | 2026-06-13 |
| `prime-intellect/intellect-3`<br />Prime Intellect: INTELLECT-3 | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.2 / output: 1.1 | 2026-02-04 |
| `qwen/qwen-2.5-72b-instruct`<br />Qwen2.5 72B Instruct | - | text | text | tools, temperature, open weights | context: 32768 / output: 16384 | input: 0.12 / output: 0.39 | 2026-01-10 |
| `qwen/qwen-2.5-7b-instruct`<br />Qwen: Qwen2.5 7B Instruct | - | text | text | tools, temperature, open weights | context: 32768 / output: 6554 | input: 0.04 / output: 0.1 | 2025-04-16 |
| `qwen/qwen-2.5-coder-32b-instruct`<br />Qwen2.5 Coder 32B Instruct | - | text | text | temperature, open weights | context: 32768 / output: 8192 | input: 0.2 / output: 0.2 / cache_read: 0.015 | 2026-03-15 |
| `qwen/qwen-plus`<br />Qwen: Qwen-Plus | - | text | text | tools, temperature | context: 1000000 / output: 32768 | input: 0.4 / output: 1.2 / cache_read: 0.08 | 2025-09-11 |
| `qwen/qwen-plus-2025-07-28`<br />Qwen: Qwen Plus 0728 | - | text | text | tools, temperature, open weights | context: 1000000 / output: 32768 | input: 0.26 / output: 0.78 | 2026-03-15 |
| `qwen/qwen-plus-2025-07-28:thinking`<br />Qwen: Qwen Plus 0728 (thinking) | - | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 32768 | input: 0.26 / output: 0.78 | 2026-03-15 |
| `qwen/qwen2.5-vl-72b-instruct`<br />Qwen: Qwen2.5 VL 72B Instruct | - | image, text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.8 / output: 0.8 / cache_read: 0.075 | 2026-03-15 |
| `qwen/qwen3-14b`<br />Qwen: Qwen3 14B | - | text | text | tools, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.06 / output: 0.24 / cache_read: 0.025 | 2026-03-15 |
| `qwen/qwen3-235b-a22b`<br />Qwen: Qwen3 235B A22B | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.455 / output: 1.82 / cache_read: 0.15 | 2026-03-15 |
| `qwen/qwen3-235b-a22b-2507`<br />Qwen: Qwen3 235B A22B Instruct 2507 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 52429 | input: 0.071 / output: 0.1 | 2026-01 |
| `qwen/qwen3-235b-a22b-thinking-2507`<br />Qwen: Qwen3 235B A22B Thinking 2507 | - | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.11 / output: 0.6 | 2026-03-15 |
| `qwen/qwen3-30b-a3b`<br />Qwen: Qwen3 30B A3B | - | text | text | tools, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.08 / output: 0.28 / cache_read: 0.03 | 2026-03-15 |
| `qwen/qwen3-30b-a3b-instruct-2507`<br />Qwen: Qwen3 30B A3B Instruct 2507 | - | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.09 / output: 0.3 / cache_read: 0.04 | 2026-03-15 |
| `qwen/qwen3-30b-a3b-thinking-2507`<br />Qwen: Qwen3 30B A3B Thinking 2507 | - | text | text | tools, reasoning, temperature, open weights | context: 32768 / output: 6554 | input: 0.051 / output: 0.34 | 2025-07-29 |
| `qwen/qwen3-32b`<br />Qwen: Qwen3 32B | - | text | text | tools, reasoning, temperature, open weights | context: 40960 / output: 40960 | input: 0.08 / output: 0.24 / cache_read: 0.04 | 2026-02-04 |
| `qwen/qwen3-8b`<br />Qwen: Qwen3 8B | - | text | text | tools, reasoning, temperature, open weights | context: 40960 / output: 8192 | input: 0.05 / output: 0.4 / cache_read: 0.05 | 2026-03-15 |
| `qwen/qwen3-coder`<br />Qwen: Qwen3 Coder 480B A35B | - | text | text | tools, temperature, open weights | context: 262144 / output: 52429 | input: 0.22 / output: 1 / cache_read: 0.022 | 2025-07-23 |
| `qwen/qwen3-coder-30b-a3b-instruct`<br />Qwen: Qwen3 Coder 30B A3B Instruct | - | text | text | tools, temperature, open weights | context: 160000 / output: 32768 | input: 0.07 / output: 0.27 | 2025-07-31 |
| `qwen/qwen3-coder-flash`<br />Qwen: Qwen3 Coder Flash | - | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 0.195 / output: 0.975 / cache_read: 0.06 | 2026-03-15 |
| `qwen/qwen3-coder-next`<br />Qwen: Qwen3 Coder Next | - | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.12 / output: 0.75 / cache_read: 0.035 | 2026-03-15 |
| `qwen/qwen3-coder-plus`<br />Qwen: Qwen3 Coder Plus | - | text | text | tools, temperature, open weights | context: 1000000 / output: 65536 | input: 0.65 / output: 3.25 / cache_read: 0.2 | 2026-03-15 |
| `qwen/qwen3-max`<br />Qwen: Qwen3 Max | - | text | text | tools, temperature | context: 262144 / output: 32768 | input: 1.2 / output: 6 / cache_read: 0.24 | 2026-03-15 |
| `qwen/qwen3-max-thinking`<br />Qwen: Qwen3 Max Thinking | - | text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0.78 / output: 3.9 | 2026-03-15 |
| `qwen/qwen3-next-80b-a3b-instruct`<br />Qwen: Qwen3 Next 80B A3B Instruct | - | text | text | tools, temperature, open weights | context: 131072 / output: 52429 | input: 0.09 / output: 1.1 | 2026-03-15 |
| `qwen/qwen3-next-80b-a3b-thinking`<br />Qwen: Qwen3 Next 80B A3B Thinking | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.0975 / output: 0.78 | 2026-03-15 |
| `qwen/qwen3-vl-235b-a22b-instruct`<br />Qwen: Qwen3 VL 235B A22B Instruct | - | image, text | text | tools, temperature, open weights | context: 262144 / output: 52429 | input: 0.2 / output: 0.88 / cache_read: 0.11 | 2026-01-10 |
| `qwen/qwen3-vl-235b-a22b-thinking`<br />Qwen: Qwen3 VL 235B A22B Thinking | - | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.26 / output: 2.6 | 2026-03-15 |
| `qwen/qwen3-vl-30b-a3b-instruct`<br />Qwen: Qwen3 VL 30B A3B Instruct | - | image, text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.13 / output: 0.52 | 2025-11-25 |
| `qwen/qwen3-vl-30b-a3b-thinking`<br />Qwen: Qwen3 VL 30B A3B Thinking | - | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.13 / output: 1.56 | 2026-03-15 |
| `qwen/qwen3-vl-32b-instruct`<br />Qwen: Qwen3 VL 32B Instruct | - | image, text | text | tools, temperature | context: 131072 / output: 32768 | input: 0.104 / output: 0.416 | 2025-11-25 |
| `qwen/qwen3-vl-8b-instruct`<br />Qwen: Qwen3 VL 8B Instruct | - | image, text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.08 / output: 0.5 | 2025-11-25 |
| `qwen/qwen3-vl-8b-thinking`<br />Qwen: Qwen3 VL 8B Thinking | - | image, text | text | tools, reasoning, temperature | context: 131072 / output: 32768 | input: 0.117 / output: 1.365 | 2025-11-25 |
| `qwen/qwen3.5-122b-a10b`<br />Qwen: Qwen3.5-122B-A10B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.26 / output: 2.08 | 2026-03-15 |
| `qwen/qwen3.5-27b`<br />Qwen: Qwen3.5-27B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.195 / output: 1.56 | 2026-03-15 |
| `qwen/qwen3.5-35b-a3b`<br />Qwen: Qwen3.5-35B-A3B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.1625 / output: 1.3 | 2026-03-15 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen: Qwen3.5 397B A17B | - | image, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.39 / output: 2.34 | 2026-03-15 |
| `qwen/qwen3.5-9b`<br />Qwen: Qwen3.5-9B | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 256000 / output: 32768 | input: 0.05 / output: 0.15 | 2026-03-15 |
| `qwen/qwen3.5-flash-02-23`<br />Qwen: Qwen3.5-Flash | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 65536 | input: 0.1 / output: 0.4 | 2026-03-15 |
| `qwen/qwen3.5-plus-02-15`<br />Qwen: Qwen3.5 Plus 2026-02-15 | - | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.26 / output: 1.56 | 2026-03-15 |
| `qwen/qwen3.5-plus-20260420`<br />Qwen: Qwen3.5 Plus 2026-04-20 | - | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.4 / output: 2.4 | 2026-05-01 |
| `qwen/qwen3.6-27b`<br />Qwen: Qwen3.6 27B | - | image, text, video | text | tools, reasoning, temperature | context: 256000 / output: 65536 | input: 0.325 / output: 3.25 | 2026-05-01 |
| `qwen/qwen3.6-35b-a3b`<br />Qwen: Qwen3.6 35B A3B | - | image, text, video | text | reasoning, temperature | context: 262144 / output: 65536 | input: 0.1612 / output: 0.96525 / cache_read: 0.1612 | 2026-05-01 |
| `qwen/qwen3.6-flash`<br />Qwen: Qwen3.6 Flash | - | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.25 / output: 1.5 / cache_write: 0.3125 | 2026-05-01 |
| `qwen/qwen3.6-max-preview`<br />Qwen: Qwen3.6 Max Preview | - | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 1.04 / output: 6.24 / cache_write: 1.3 | 2026-05-01 |
| `qwen/qwen3.6-plus`<br />Qwen: Qwen3.6 Plus | - | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.325 / output: 1.95 / cache_read: 0.0325 / cache_write: 0.40625 | 2026-04-11 |
| `qwen/qwen3.7-max`<br />Qwen: Qwen3.7 Max | - | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.625 / output: 4.875 / cache_read: 0.1625 / cache_write: 2.03125 | 2026-05-27 |
| `rekaai/reka-edge`<br />Reka Edge | - | image, text, video | text | tools, temperature, open weights | context: 16384 / output: 16384 | input: 0.1 / output: 0.1 | 2026-04-11 |
| `rekaai/reka-flash-3`<br />Reka Flash 3 | - | text | text | reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.1 / output: 0.2 | 2026-04-11 |
| `relace/relace-apply-3`<br />Relace: Relace Apply 3 | - | text | text | - | context: 256000 / output: 128000 | input: 0.85 / output: 1.25 | 2026-03-15 |
| `relace/relace-search`<br />Relace: Relace Search | - | text | text | tools, temperature | context: 256000 / output: 128000 | input: 1 / output: 3 | 2026-03-15 |
| `sao10k/l3-euryale-70b`<br />Sao10k: Llama 3 Euryale 70B v2.1 | - | text | text | tools, temperature, open weights | context: 8192 / output: 8192 | input: 1.48 / output: 1.48 | 2026-03-15 |
| `sao10k/l3-lunaris-8b`<br />Sao10K: Llama 3 8B Lunaris | - | text | text | temperature, open weights | context: 8192 / output: 8192 | input: 0.04 / output: 0.05 | 2026-03-15 |
| `sao10k/l3.1-70b-hanami-x1`<br />Sao10K: Llama 3.1 70B Hanami x1 | - | text | text | temperature, open weights | context: 16000 / output: 16000 | input: 3 / output: 3 | 2026-03-15 |
| `sao10k/l3.1-euryale-70b`<br />Sao10K: Llama 3.1 Euryale 70B v2.2 | - | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 0.85 / output: 0.85 | 2026-03-15 |
| `sao10k/l3.3-euryale-70b`<br />Sao10K: Llama 3.3 Euryale 70B | - | text | text | temperature, open weights | context: 131072 / output: 16384 | input: 0.65 / output: 0.75 | 2026-03-15 |
| `stealth/claude-opus-4.6`<br />Stealth: Claude Opus 4.6 (20% off) | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 4 / output: 20 / cache_read: 0.4 / cache_write: 5 | 2026-05-27 |
| `stealth/claude-opus-4.7`<br />Stealth: Claude Opus 4.7 (20% off) | - | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 4 / output: 20 / cache_read: 0.4 / cache_write: 5 | 2026-05-27 |
| `stealth/claude-sonnet-4.6`<br />Stealth: Claude Sonnet 4.6 (20% off) | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 2.4 / output: 12 / cache_read: 0.24 / cache_write: 3 | 2026-05-27 |
| `stepfun/step-3.5-flash`<br />StepFun: Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-01-29 |
| `switchpoint/router`<br />Switchpoint Router | - | text | text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.85 / output: 3.4 | 2026-03-15 |
| `tencent/hunyuan-a13b-instruct`<br />Tencent: Hunyuan A13B Instruct | - | text | text | reasoning, temperature | context: 131072 / output: 131072 | input: 0.14 / output: 0.57 | 2025-11-25 |
| `tencent/hy3-preview`<br />Tencent: Hy3 Preview | - | text | text | tools, reasoning, temperature | context: 262144 / output: 262144 | input: 0.066 / output: 0.26 / cache_read: 0.029 | 2026-05-16 |
| `thedrummer/cydonia-24b-v4.1`<br />TheDrummer: Cydonia 24B V4.1 | - | text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.3 / output: 0.5 | 2026-03-15 |
| `thedrummer/rocinante-12b`<br />TheDrummer: Rocinante 12B | - | text | text | tools, temperature, open weights | context: 32768 / output: 32768 | input: 0.17 / output: 0.43 | 2026-03-15 |
| `thedrummer/skyfall-36b-v2`<br />TheDrummer: Skyfall 36B V2 | - | text | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.55 / output: 0.8 | 2026-03-15 |
| `thedrummer/unslopnemo-12b`<br />TheDrummer: UnslopNemo 12B | - | text | text | tools, temperature, open weights | context: 32768 / output: 32768 | input: 0.4 / output: 0.4 | 2026-03-15 |
| `undi95/remm-slerp-l2-13b`<br />ReMM SLERP 13B | - | text | text | temperature, open weights | context: 6144 / output: 4096 | input: 0.45 / output: 0.65 | 2026-03-15 |
| `upstage/solar-pro-3`<br />Upstage: Solar Pro 3 | - | text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 0.15 / output: 0.6 | 2026-03-15 |
| `writer/palmyra-x5`<br />Writer: Palmyra X5 | - | text | text | temperature | context: 1040000 / output: 8192 | input: 0.6 / output: 6 | 2025-04-28 |
| `x-ai/grok-4.20`<br />xAI: Grok 4.20 | - | image, pdf, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-04-11 |
| `x-ai/grok-4.20-multi-agent`<br />xAI: Grok 4.20 Multi-Agent | - | image, pdf, text | text | reasoning, temperature | context: 2000000 / output: 2000000 | input: 2 / output: 6 / cache_read: 0.2 | 2026-04-11 |
| `x-ai/grok-4.3`<br />xAI: Grok 4.3 | - | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 4096 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-05-01 |
| `x-ai/grok-build-0.1`<br />xAI: Grok Build 0.1 | - | image, text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-05-27 |
| `xiaomi/mimo-v2-flash`<br />Xiaomi: MiMo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.09 / output: 0.29 / cache_read: 0.045 | 2026-02-04 |
| `xiaomi/mimo-v2-omni`<br />Xiaomi: MiMo-V2-Omni | mimo | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-18 |
| `xiaomi/mimo-v2-pro`<br />Xiaomi: MiMo-V2-Pro | mimo | text | text | tools, reasoning, temperature | context: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `xiaomi/mimo-v2.5`<br />Xiaomi: MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-04-22 |
| `xiaomi/mimo-v2.5-pro`<br />Xiaomi: MiMo V2.5 Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-04-22 |
| `z-ai/glm-4-32b`<br />Z.ai: GLM 4 32B  | - | text | text | tools, temperature, open weights | context: 128000 / output: 32768 | input: 0.1 / output: 0.1 | 2026-03-15 |
| `z-ai/glm-4.5`<br />Z.ai: GLM 4.5 | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.175 | 2026-03-15 |
| `z-ai/glm-4.5-air`<br />Z.ai: GLM 4.5 Air | - | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.13 / output: 0.85 / cache_read: 0.025 | 2025-07-28 |
| `z-ai/glm-4.5v`<br />Z.ai: GLM 4.5V | - | image, text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.6 / output: 1.8 / cache_read: 0.11 | 2025-08-11 |
| `z-ai/glm-4.6`<br />Z.ai: GLM 4.6 | - | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 204800 | input: 0.39 / output: 1.9 / cache_read: 0.175 | 2026-03-15 |
| `z-ai/glm-4.6v`<br />Z.ai: GLM 4.6V | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.3 / output: 0.9 | 2026-01-10 |
| `z-ai/glm-4.7`<br />Z.ai: GLM 4.7 | - | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 65535 | input: 0.38 / output: 1.98 / cache_read: 0.2 | 2026-03-15 |
| `z-ai/glm-4.7-flash`<br />Z.ai: GLM 4.7 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 40551 | input: 0.06 / output: 0.4 / cache_read: 0.01 | 2026-01-19 |
| `z-ai/glm-5`<br />Z.ai: GLM 5 | - | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.72 / output: 2.3 | 2026-03-15 |
| `z-ai/glm-5-turbo`<br />Z.ai: GLM 5 Turbo | - | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-11 |
| `z-ai/glm-5.1`<br />Z.ai: GLM 5.1 | - | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1.26 / output: 3.96 | 2026-03-27 |
| `z-ai/glm-5v-turbo`<br />Z.ai: GLM 5V Turbo | - | image, text, video | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-11 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

