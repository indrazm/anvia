---
title: "NanoGPT"
description: "Use NanoGPT through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1080
  label: "NanoGPT"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://nano-gpt.com/api/v1 |
| Environment | `NANO_GPT_API_KEY` |
| Provider docs | [https://docs.nano-gpt.com](https://docs.nano-gpt.com) |
| Models | 617 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NANO_GPT_API_KEY,
  baseUrl: "https://nano-gpt.com/api/v1",
  completionApi: "chat",
});

const model = client.completionModel("abacusai/Dracarys-72B-Instruct");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 263 / 617 models |
| Tools | 190 / 617 models |
| Structured output | 185 / 617 models |
| Reasoning | 260 / 617 models |
| Temperature | 8 / 617 models |
| Open weights | 9 / 617 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `abacusai/Dracarys-72B-Instruct`<br />Llama 3.1 70B Dracarys 2 | llama | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2025-08-02 |
| `aion-labs/aion-1.0`<br />Aion 1.0 | llama | text | text | - | context: 65536 / input: 65536 / output: 8192 | input: 3.995 / output: 7.99 | 2025-02-01 |
| `aion-labs/aion-1.0-mini`<br />Aion 1.0 mini (DeepSeek) | deepseek | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.7989999999999999 / output: 1.394 | 2025-02-20 |
| `aion-labs/aion-2.0`<br />AionLabs: Aion-2.0 | - | text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 0.8 / output: 1.6 | 2026-02-23 |
| `aion-labs/aion-2.5`<br />AionLabs: Aion-2.5 | - | text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 1 / output: 3 / cache_read: 0.35 | 2026-03-20 |
| `aion-labs/aion-rp-llama-3.1-8b`<br />Llama 3.1 8b (uncensored) | llama | text | text | - | context: 32768 / input: 32768 / output: 16384 | input: 0.2006 / output: 0.2006 | 2024-07-23 |
| `Alibaba-NLP/Tongyi-DeepResearch-30B-A3B`<br />Tongyi DeepResearch 30B A3B | yi | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.08 / output: 0.24000000000000002 | 2025-08-26 |
| `alibaba/qwen3.6-27b`<br />Qwen3.6 27B | - | image, text, video | text | - | context: 260096 / input: 260096 / output: 65536 | input: 0.203 / output: 2.24 | 2026-04-23 |
| `alibaba/qwen3.6-27b:thinking`<br />Qwen3.6 27B Thinking | - | image, text, video | text | reasoning | context: 260096 / input: 260096 / output: 65536 | input: 0.203 / output: 2.24 | 2026-04-23 |
| `alibaba/qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | - | context: 991800 / output: 65536 | input: 0.19 / output: 1.16 | 2026-04-17 |
| `allenai/olmo-3-32b-think`<br />Olmo 3 32B Think | allenai | text | text | reasoning | context: 128000 / input: 128000 / output: 8192 | input: 0.3 / output: 0.44999999999999996 | 2025-11-01 |
| `amazon/nova-2-lite-v1`<br />Amazon Nova 2 Lite | nova | text | text | - | context: 1000000 / input: 1000000 / output: 65535 | input: 0.5099999999999999 / output: 4.25 | 2024-12-03 |
| `amazon/nova-lite-v1`<br />Amazon Nova Lite 1.0 | nova-lite | text | text | - | context: 300000 / input: 300000 / output: 5120 | input: 0.0595 / output: 0.238 | 2024-12-03 |
| `amazon/nova-micro-v1`<br />Amazon Nova Micro 1.0 | nova-micro | text | text | - | context: 128000 / input: 128000 / output: 5120 | input: 0.0357 / output: 0.1394 | 2024-12-03 |
| `amazon/nova-pro-v1`<br />Amazon Nova Pro 1.0 | nova-pro | text | text | - | context: 300000 / input: 300000 / output: 32000 | input: 0.7989999999999999 / output: 3.1959999999999997 | 2024-12-03 |
| `anthracite-org/magnum-v2-72b`<br />Magnum V2 72B | llama | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 2.006 / output: 2.992 | 2024-07-01 |
| `anthracite-org/magnum-v4-72b`<br />Magnum v4 72B | llama | pdf, text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 2.006 / output: 2.992 | 2025-01-01 |
| `anthropic/claude-haiku-latest`<br />Claude Haiku Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 | 2026-03-29 |
| `anthropic/claude-opus-4.6`<br />Claude 4.6 Opus | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-02-05 |
| `anthropic/claude-opus-4.6:thinking`<br />Claude 4.6 Opus Thinking | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-02-05 |
| `anthropic/claude-opus-4.6:thinking:low`<br />Claude 4.6 Opus Thinking Low | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-02-05 |
| `anthropic/claude-opus-4.6:thinking:max`<br />Claude 4.6 Opus Thinking Max | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-02-05 |
| `anthropic/claude-opus-4.6:thinking:medium`<br />Claude 4.6 Opus Thinking Medium | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-02-05 |
| `anthropic/claude-opus-4.7`<br />Claude 4.7 Opus | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 / cache_read: 0.4998 | 2026-04-16 |
| `anthropic/claude-opus-4.7:thinking`<br />Claude 4.7 Opus Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 / cache_read: 0.4998 | 2026-04-16 |
| `anthropic/claude-opus-4.8`<br />Claude Opus 4.8 | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 / cache_read: 0.4998 | 2026-05-28 |
| `anthropic/claude-opus-4.8:thinking`<br />Claude Opus 4.8 Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 / cache_read: 0.4998 | 2026-05-28 |
| `anthropic/claude-opus-latest`<br />Claude Opus Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 / cache_read: 0.4998 | 2026-03-29 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, schema | context: 1000000 / input: 1000000 / output: 128000 | input: 2.992 / output: 14.993999999999998 | 2026-02-17 |
| `anthropic/claude-sonnet-4.6:thinking`<br />Claude Sonnet 4.6 Thinking | claude-sonnet | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 2.992 / output: 14.993999999999998 | 2026-02-17 |
| `anthropic/claude-sonnet-latest`<br />Claude Sonnet Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 2.992 / output: 14.994 / cache_read: 0.2992 | 2026-03-01 |
| `arcee-ai/trinity-large-thinking`<br />Trinity Large Thinking | - | text | text | tools, reasoning | context: 262144 / input: 262144 / output: 80000 | input: 0.25 / output: 0.9 | 2026-04-01 |
| `arcee-ai/trinity-mini`<br />Trinity Mini | trinity-mini | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.045000000000000005 / output: 0.15 | 2025-12-01 |
| `asi1-mini`<br />ASI1 Mini | - | pdf, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 1 / output: 1 | 2025-03-25 |
| `auto-model`<br />Auto model | - | text | text | - | context: 1000000 / input: 1000000 / output: 1000000 | input: 0 / output: 0 | 2024-06-01 |
| `auto-model-basic`<br />Auto model (Basic) | - | text | text | - | context: 1000000 / input: 1000000 / output: 1000000 | input: 9.996 / output: 19.992 | 2024-06-01 |
| `auto-model-premium`<br />Auto model (Premium) | - | text | text | - | context: 1000000 / input: 1000000 / output: 1000000 | input: 9.996 / output: 19.992 | 2024-06-01 |
| `auto-model-standard`<br />Auto model (Standard) | - | text | text | - | context: 1000000 / input: 1000000 / output: 1000000 | input: 9.996 / output: 19.992 | 2024-06-01 |
| `azure-gpt-4-turbo`<br />Azure gpt-4-turbo | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 9.996 / output: 30.005 | 2024-01-01 |
| `azure-gpt-4o`<br />Azure gpt-4o | - | image, text | text | tools, schema | context: 128000 / input: 128000 / output: 16384 | input: 2.499 / output: 9.996 | 2024-05-13 |
| `azure-gpt-4o-mini`<br />Azure gpt-4o-mini | - | image, text | text | tools, schema | context: 128000 / input: 128000 / output: 16384 | input: 0.1496 / output: 0.595 | 2024-07-18 |
| `azure-o1`<br />Azure o1 | - | text | text | - | context: 200000 / input: 200000 / output: 100000 | input: 14.994 / output: 59.993 | 2024-12-17 |
| `azure-o3-mini`<br />Azure o3-mini | - | text | text | - | context: 200000 / input: 200000 / output: 65536 | input: 1.088 / output: 4.3996 | 2025-01-31 |
| `Baichuan-M2`<br />Baichuan M2 32B Medical | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 15.73 / output: 15.73 | 2025-08-19 |
| `Baichuan4-Air`<br />Baichuan 4 Air | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.157 / output: 0.157 | 2025-08-19 |
| `Baichuan4-Turbo`<br />Baichuan 4 Turbo | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 2.42 / output: 2.42 | 2025-08-19 |
| `baidu/ernie-4.5-vl-28b-a3b`<br />ERNIE 4.5 VL 28B | ernie | image, text | text | - | context: 32768 / input: 32768 / output: 16384 | input: 0.13999999999999999 / output: 0.5599999999999999 | 2025-06-30 |
| `baseten/Kimi-K2-Instruct-FP4`<br />Kimi K2 0711 Instruct FP4 | kimi-k2 | text | text | - | context: 128000 / input: 128000 / output: 131072 | input: 0.1 / output: 2 | 2025-07-11 |
| `brave`<br />Brave (Answers) | - | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 5 / output: 5 | 2024-01-01 |
| `brave-pro`<br />Brave (Pro) | - | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 5 / output: 5 | 2024-01-01 |
| `brave-research`<br />Brave (Research) | - | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 5 / output: 5 | 2024-01-01 |
| `bytedance-seed/seed-2.0-lite`<br />ByteDance Seed 2.0 Lite | - | text | text | schema | context: 262144 / input: 262144 / output: 131072 | input: 0.25 / output: 2 | 2026-03-10 |
| `chutesai/Mistral-Small-3.2-24B-Instruct-2506`<br />Mistral Small 3.2 24b Instruct | chutesai | text | text | - | context: 128000 / input: 128000 / output: 131072 | input: 0.2 / output: 0.4 | 2025-04-15 |
| `claude-3-5-haiku-20241022`<br />Claude 3.5 Haiku | - | image, pdf, text | text | tools, schema | context: 200000 / input: 200000 / output: 8192 | input: 0.8 / output: 4 | 2024-10-22 |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | - | image, pdf, text | text | tools, schema | context: 200000 / input: 200000 / output: 64000 | input: 1 / output: 5 | 2025-10-15 |
| `claude-haiku-4-5-20251001-thinking`<br />Claude Haiku 4.5 Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 | 2025-10-15 |
| `claude-opus-4-1-20250805`<br />Claude 4.1 Opus | - | image, pdf, text | text | tools, schema | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-08-05 |
| `claude-opus-4-1-thinking`<br />Claude 4.1 Opus Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-1-thinking:1024`<br />Claude 4.1 Opus Thinking (1K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-1-thinking:32000`<br />Claude 4.1 Opus Thinking (32K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-1-thinking:32768`<br />Claude 4.1 Opus Thinking (32K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-1-thinking:8192`<br />Claude 4.1 Opus Thinking (8K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-20250514`<br />Claude 4 Opus | - | image, pdf, text | text | tools, schema | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-14 |
| `claude-opus-4-5-20251101`<br />Claude 4.5 Opus | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 4.998 / output: 25.007 | 2025-11-01 |
| `claude-opus-4-5-20251101:thinking`<br />Claude 4.5 Opus Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 4.998 / output: 25.007 | 2025-11-01 |
| `claude-opus-4-thinking`<br />Claude 4 Opus Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-07-15 |
| `claude-opus-4-thinking:1024`<br />Claude 4 Opus Thinking (1K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-thinking:32000`<br />Claude 4 Opus Thinking (32K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-thinking:32768`<br />Claude 4 Opus Thinking (32K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-opus-4-thinking:8192`<br />Claude 4 Opus Thinking (8K) | - | image, pdf, text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 32000 | input: 14.994 / output: 75.004 | 2025-05-22 |
| `claude-sonnet-4-20250514`<br />Claude 4 Sonnet | - | image, pdf, text | text | tools, schema | context: 200000 / input: 200000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-09-29 |
| `claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | - | image, pdf, text | text | tools, schema | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-09-29 |
| `claude-sonnet-4-5-20250929-thinking`<br />Claude Sonnet 4.5 Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-09-29 |
| `claude-sonnet-4-thinking`<br />Claude 4 Sonnet Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-02-24 |
| `claude-sonnet-4-thinking:1024`<br />Claude 4 Sonnet Thinking (1K) | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-05-22 |
| `claude-sonnet-4-thinking:32768`<br />Claude 4 Sonnet Thinking (32K) | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-05-22 |
| `claude-sonnet-4-thinking:64000`<br />Claude 4 Sonnet Thinking (64K) | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-05-22 |
| `claude-sonnet-4-thinking:8192`<br />Claude 4 Sonnet Thinking (8K) | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 64000 | input: 2.992 / output: 14.994 | 2025-05-22 |
| `claw-high`<br />Claw High | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-05-11 |
| `claw-low`<br />Claw Low | - | image, pdf, text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2026-05-11 |
| `claw-medium`<br />Claw Medium | - | text | text | tools, schema, reasoning | context: 204800 / input: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-05-11 |
| `cognitivecomputations/dolphin-2.9.2-qwen2-72b`<br />Dolphin 72b | qwen | text | text | - | context: 8192 / input: 8192 / output: 4096 | input: 0.306 / output: 0.306 | 2025-02-27 |
| `cohere/command-r`<br />Cohere: Command R | command-r | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 0.476 / output: 1.428 | 2024-03-11 |
| `cohere/command-r-plus-08-2024`<br />Cohere: Command R+ | command-r | text | text | tools | context: 128000 / input: 128000 / output: 4096 | input: 2.856 / output: 14.246 | 2024-08-30 |
| `command-a-plus-05-2026`<br />Cohere Command A+ (05/2026) | - | image, text | text | schema, reasoning | context: 128000 / input: 128000 / output: 64000 | input: 2.5 / output: 10 | 2026-05-22 |
| `command-a-reasoning-08-2025`<br />Cohere Command A (08/2025) | - | text | text | - | context: 256000 / input: 256000 / output: 8192 | input: 2.5 / output: 10 | 2025-08-22 |
| `deepclaude`<br />DeepClaude | - | pdf, text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 3 / output: 15 | 2025-02-01 |
| `deepcogito/cogito-v1-preview-qwen-32B`<br />Cogito v1 Preview Qwen 32B | qwen | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 1.7999999999999998 / output: 1.7999999999999998 | 2025-05-10 |
| `deepseek-ai/DeepSeek-R1-0528`<br />DeepSeek R1 0528 | deepseek | text | text | reasoning | context: 128000 / input: 128000 / output: 163840 | input: 0.4 / output: 1.7 | 2025-05-28 |
| `deepseek-ai/DeepSeek-V3.1`<br />DeepSeek V3.1 | deepseek | pdf, text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.2 / output: 0.7 | 2025-07-26 |
| `deepseek-ai/DeepSeek-V3.1-Terminus`<br />DeepSeek V3.1 Terminus | deepseek | text | text | tools, schema | context: 128000 / input: 128000 / output: 65536 | input: 0.25 / output: 0.7 | 2025-08-02 |
| `deepseek-ai/DeepSeek-V3.1-Terminus:thinking`<br />DeepSeek V3.1 Terminus (Thinking) | deepseek-thinking | text | text | tools, schema | context: 128000 / input: 128000 / output: 65536 | input: 0.25 / output: 0.7 | 2025-09-22 |
| `deepseek-ai/DeepSeek-V3.1:thinking`<br />DeepSeek V3.1 Thinking | deepseek-thinking | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.2 / output: 0.7 | 2025-08-21 |
| `deepseek-ai/deepseek-v3.2-exp`<br />DeepSeek V3.2 Exp | deepseek | text | text | - | context: 163840 / input: 163840 / output: 65536 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-09-29 |
| `deepseek-ai/deepseek-v3.2-exp-thinking`<br />DeepSeek V3.2 Exp Thinking | deepseek-thinking | text | text | reasoning | context: 163840 / input: 163840 / output: 65536 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-09-29 |
| `deepseek-chat`<br />DeepSeek V3/Deepseek Chat | - | pdf, text | text | tools, schema | context: 128000 / input: 128000 / output: 8192 | input: 0.25 / output: 0.7 | 2025-02-27 |
| `deepseek-chat-cheaper`<br />DeepSeek V3/Chat Cheaper | - | pdf, text | text | tools, schema | context: 128000 / input: 128000 / output: 8192 | input: 0.25 / output: 0.7 | 2025-04-15 |
| `deepseek-math-v2`<br />DeepSeek Math V2 | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.6 / output: 2.2 | 2025-12-03 |
| `deepseek-r1`<br />DeepSeek R1 | - | text | text | reasoning | context: 128000 / input: 128000 / output: 8192 | input: 0.4 / output: 1.7 | 2025-01-20 |
| `deepseek-r1-sambanova`<br />DeepSeek R1 Fast | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 4.998 / output: 6.987 | 2025-02-20 |
| `deepseek-reasoner`<br />DeepSeek Reasoner | - | text | text | - | context: 64000 / input: 64000 / output: 65536 | input: 0.4 / output: 1.7 | 2025-01-20 |
| `deepseek-reasoner-cheaper`<br />Deepseek R1 Cheaper | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.4 / output: 1.7 | 2025-01-20 |
| `deepseek-v3-0324`<br />DeepSeek Chat 0324 | - | text | text | tools, schema | context: 128000 / input: 128000 / output: 8192 | input: 0.25 / output: 0.7 | 2025-03-24 |
| `deepseek/deepseek-latest`<br />DeepSeek Latest | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 1.1 / output: 2.2 / cache_read: 0.11 | 2026-05-03 |
| `deepseek/deepseek-prover-v2-671b`<br />DeepSeek Prover v2 671B | deepseek | text | text | - | context: 160000 / input: 160000 / output: 16384 | input: 1 / output: 2.5 | 2025-04-30 |
| `deepseek/deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | pdf, text | text | tools, schema | context: 163000 / input: 163000 / output: 65536 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-12-01 |
| `deepseek/deepseek-v3.2-speciale`<br />DeepSeek V3.2 Speciale | deepseek | pdf, text | text | reasoning | context: 163000 / input: 163000 / output: 65536 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-12-02 |
| `deepseek/deepseek-v3.2:thinking`<br />DeepSeek V3.2 Thinking | deepseek | pdf, text | text | tools, schema, reasoning | context: 163000 / input: 163000 / output: 65536 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-12-01 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `deepseek/deepseek-v4-flash:thinking`<br />DeepSeek V4 Flash (Thinking) | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 1.1 / output: 2.2 / cache_read: 0.11 | 2026-04-24 |
| `deepseek/deepseek-v4-pro-cheaper`<br />DeepSeek V4 Pro Cheaper | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-25 |
| `deepseek/deepseek-v4-pro-cheaper:thinking`<br />DeepSeek V4 Pro Cheaper (Thinking) | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-25 |
| `deepseek/deepseek-v4-pro:thinking`<br />DeepSeek V4 Pro (Thinking) | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 384000 | input: 1.1 / output: 2.2 / cache_read: 0.11 | 2026-04-24 |
| `dmind/dmind-1`<br />DMind-1 | gpt | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.3 / output: 0.6 | 2025-06-01 |
| `dmind/dmind-1-mini`<br />DMind-1-Mini | gpt | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.2 / output: 0.4 | 2025-06-01 |
| `Doctor-Shotgun/MS3.2-24B-Magnum-Diamond`<br />MS3.2 24B Magnum Diamond | mistral | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2025-11-24 |
| `doubao-1-5-thinking-pro-250415`<br />Doubao 1.5 Thinking Pro | - | pdf, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.6 / output: 2.4 | 2025-04-17 |
| `doubao-1-5-thinking-pro-vision-250415`<br />Doubao 1.5 Thinking Pro Vision | - | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.6 / output: 2.4 | 2025-04-15 |
| `doubao-1-5-thinking-vision-pro-250428`<br />Doubao 1.5 Thinking Vision Pro | - | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.55 / output: 1.43 | 2025-05-15 |
| `doubao-1.5-pro-256k`<br />Doubao 1.5 Pro 256k | - | text | text | - | context: 256000 / input: 256000 / output: 16384 | input: 0.799 / output: 1.445 | 2025-03-12 |
| `doubao-1.5-pro-32k`<br />Doubao 1.5 Pro 32k | - | text | text | - | context: 32000 / input: 32000 / output: 8192 | input: 0.1343 / output: 0.3349 | 2025-01-22 |
| `doubao-1.5-vision-pro-32k`<br />Doubao 1.5 Vision Pro 32k | - | image, text | text | - | context: 32000 / input: 32000 / output: 8192 | input: 0.459 / output: 1.377 | 2025-01-22 |
| `doubao-seed-1-6-250615`<br />Doubao Seed 1.6 | - | text | text | - | context: 256000 / input: 256000 / output: 16384 | input: 0.204 / output: 0.51 | 2025-06-15 |
| `doubao-seed-1-6-flash-250615`<br />Doubao Seed 1.6 Flash | - | text | text | - | context: 256000 / input: 256000 / output: 16384 | input: 0.0374 / output: 0.374 | 2025-06-15 |
| `doubao-seed-1-6-thinking-250615`<br />Doubao Seed 1.6 Thinking | - | text | text | - | context: 256000 / input: 256000 / output: 16384 | input: 0.204 / output: 2.04 | 2025-06-15 |
| `doubao-seed-1-8-251215`<br />Doubao Seed 1.8 | - | text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.612 / output: 6.12 | 2025-12-15 |
| `doubao-seed-2-0-code-preview-260215`<br />Doubao Seed 2.0 Code Preview | - | text | text | - | context: 256000 / input: 256000 / output: 128000 | input: 0.782 / output: 3.893 | 2026-02-14 |
| `doubao-seed-2-0-lite-260215`<br />Doubao Seed 2.0 Lite | - | text | text | - | context: 256000 / input: 256000 / output: 32000 | input: 0.1462 / output: 0.8738 | 2026-02-14 |
| `doubao-seed-2-0-mini-260215`<br />Doubao Seed 2.0 Mini | - | text | text | - | context: 256000 / input: 256000 / output: 32000 | input: 0.0493 / output: 0.4845 | 2026-02-14 |
| `doubao-seed-2-0-pro-260215`<br />Doubao Seed 2.0 Pro | - | text | text | - | context: 256000 / input: 256000 / output: 128000 | input: 0.782 / output: 3.876 | 2026-02-14 |
| `Envoid/Llama-3.05-Nemotron-Tenyxchat-Storybreaker-70B`<br />Nemotron Tenyxchat Storybreaker 70b | nemotron | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-01 |
| `Envoid/Llama-3.05-NT-Storybreaker-Ministral-70B`<br />Llama 3.05 Storybreaker Ministral 70b | llama | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-01 |
| `ernie-4.5-8k-preview`<br />Ernie 4.5 8k Preview | - | text | text | - | context: 8000 / input: 8000 / output: 16384 | input: 0.66 / output: 2.6 | 2025-03-25 |
| `ernie-4.5-turbo-128k`<br />Ernie 4.5 Turbo 128k | - | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.132 / output: 0.55 | 2025-05-08 |
| `ernie-4.5-turbo-vl-32k`<br />Ernie 4.5 Turbo VL 32k | - | image, text | text | - | context: 32000 / input: 32000 / output: 16384 | input: 0.495 / output: 1.43 | 2025-05-08 |
| `ernie-5.0-thinking-preview`<br />Ernie 5.0 Thinking Preview | - | image, text | text | reasoning | context: 128000 / input: 128000 / output: 16384 | input: 1.1 / output: 2 | 2025-11-18 |
| `ernie-5.1`<br />ERNIE 5.1 | - | image, text, video | text | - | context: 119000 / input: 119000 / output: 64000 | input: 0.75 / output: 3 / cache_read: 0.75 | 2026-05-10 |
| `ernie-5.1:thinking`<br />ERNIE 5.1 Thinking | - | image, text, video | text | reasoning | context: 119000 / input: 119000 / output: 64000 | input: 0.75 / output: 3 / cache_read: 0.75 | 2026-05-10 |
| `ernie-x1-32k`<br />Ernie X1 32k | - | image, text | text | - | context: 32000 / input: 32000 / output: 16384 | input: 0.33 / output: 1.32 | 2025-05-08 |
| `ernie-x1-32k-preview`<br />Ernie X1 32k | - | text | text | - | context: 32000 / input: 32000 / output: 16384 | input: 0.33 / output: 1.32 | 2025-04-03 |
| `ernie-x1-turbo-32k`<br />Ernie X1 Turbo 32k | - | image, pdf, text | text | - | context: 32000 / input: 32000 / output: 16384 | input: 0.165 / output: 0.66 | 2025-05-08 |
| `ernie-x1.1-preview`<br />ERNIE X1.1 | - | pdf, text | text | - | context: 64000 / input: 64000 / output: 8192 | input: 0.15 / output: 0.6 | 2025-09-10 |
| `essentialai/rnj-1-instruct`<br />RNJ-1 Instruct 8B | rnj | text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.15 / output: 0.15 | 2025-12-13 |
| `EVA-UNIT-01/EVA-LLaMA-3.33-70B-v0.0`<br />EVA Llama 3.33 70B | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 2.006 / output: 2.006 | 2025-07-26 |
| `EVA-UNIT-01/EVA-LLaMA-3.33-70B-v0.1`<br />EVA-LLaMA-3.33-70B-v0.1 | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 2.006 / output: 2.006 | 2025-09-25 |
| `EVA-UNIT-01/EVA-Qwen2.5-32B-v0.2`<br />EVA-Qwen2.5-32B-v0.2 | qwen | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.7989999999999999 / output: 0.7989999999999999 | 2025-07-26 |
| `EVA-UNIT-01/EVA-Qwen2.5-72B-v0.2`<br />EVA-Qwen2.5-72B-v0.2 | qwen | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.7989999999999999 / output: 0.7989999999999999 | 2025-09-25 |
| `exa-answer`<br />Exa (Answer) | - | text | text | - | context: 4096 / input: 4096 / output: 4096 | input: 2.5 / output: 2.5 | 2025-06-04 |
| `exa-research`<br />Exa (Research) | - | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 2.5 / output: 2.5 | 2025-06-04 |
| `exa-research-pro`<br />Exa (Research Pro) | - | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 2.5 / output: 2.5 | 2025-06-04 |
| `failspy/Meta-Llama-3-70B-Instruct-abliterated-v3.5`<br />Llama 3 70B abliterated | llama | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 0.7 / output: 0.7 | 2025-07-26 |
| `fastgpt`<br />Web Answer | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 7.5 / output: 7.5 | 2024-01-01 |
| `featherless-ai/Qwerky-72B`<br />Qwerky 72B | qwerky | text | text | - | context: 32000 / input: 32000 / output: 8192 | input: 0.5 / output: 0.5 | 2025-03-20 |
| `GalrionSoftworks/MN-LooseCannon-12B-v1`<br />MN-LooseCannon-12B-v1 | mistral-nemo | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-01 |
| `gemini-2.0-flash-001`<br />Gemini 2.0 Flash | - | image, text | text | tools, schema | context: 1000000 / input: 1000000 / output: 8192 | input: 0.1003 / output: 0.408 | 2024-12-11 |
| `gemini-2.0-flash-exp-image-generation`<br />Gemini Text + Image | - | text | text | - | context: 32767 / input: 32767 / output: 8192 | input: 0.2 / output: 0.8 | 2025-02-19 |
| `gemini-2.0-flash-thinking-exp-01-21`<br />Gemini 2.0 Flash Thinking 0121 | - | image, text | text | reasoning | context: 1000000 / input: 1000000 / output: 8192 | input: 0.306 / output: 1.003 | 2025-01-21 |
| `gemini-2.0-flash-thinking-exp-1219`<br />Gemini 2.0 Flash Thinking 1219 | - | text | text | - | context: 32767 / input: 32767 / output: 8192 | input: 0.1003 / output: 0.408 | 2024-12-19 |
| `gemini-2.0-pro-exp-02-05`<br />Gemini 2.0 Pro 0205 | - | image, text | text | - | context: 2097152 / input: 2097152 / output: 8192 | input: 1.989 / output: 7.956 | 2025-02-05 |
| `gemini-2.0-pro-reasoner`<br />Gemini 2.0 Pro Reasoner | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 1.292 / output: 4.998 | 2025-02-05 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.3 / output: 2.5 | 2025-06-05 |
| `gemini-2.5-flash-lite`<br />Gemini 2.5 Flash Lite | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.1 / output: 0.4 | 2025-06-17 |
| `gemini-2.5-flash-lite-preview-06-17`<br />Gemini 2.5 Flash Lite Preview | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.15 / output: 0.6 | 2025-06-17 |
| `gemini-2.5-flash-lite-preview-09-2025`<br />Gemini 2.5 Flash Lite Preview (09/2025) | - | image, pdf, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.1 / output: 0.4 | 2025-09-25 |
| `gemini-2.5-flash-lite-preview-09-2025-thinking`<br />Gemini 2.5 Flash Lite Preview (09/2025) – Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.1 / output: 0.4 | 2025-09-25 |
| `gemini-2.5-flash-nothinking`<br />Gemini 2.5 Flash (No Thinking) | - | image, pdf, text | text | - | context: 1048756 / input: 1048756 / output: 65536 | input: 0.3 / output: 2.5 | 2025-06-05 |
| `gemini-2.5-flash-preview-04-17`<br />Gemini 2.5 Flash Preview | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.15 / output: 0.6 | 2025-04-17 |
| `gemini-2.5-flash-preview-04-17:thinking`<br />Gemini 2.5 Flash Preview Thinking | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.15 / output: 3.5 | 2025-04-17 |
| `gemini-2.5-flash-preview-05-20`<br />Gemini 2.5 Flash 0520 | - | image, text | text | - | context: 1048000 / input: 1048000 / output: 65536 | input: 0.15 / output: 0.6 | 2025-05-20 |
| `gemini-2.5-flash-preview-05-20:thinking`<br />Gemini 2.5 Flash 0520 Thinking | - | image, text | text | reasoning | context: 1048000 / input: 1048000 / output: 65536 | input: 0.15 / output: 3.5 | 2025-05-20 |
| `gemini-2.5-flash-preview-09-2025`<br />Gemini 2.5 Flash Preview (09/2025) | - | image, pdf, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.3 / output: 2.5 | 2025-09-25 |
| `gemini-2.5-flash-preview-09-2025-thinking`<br />Gemini 2.5 Flash Preview (09/2025) – Thinking | - | image, pdf, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.3 / output: 2.5 | 2025-09-25 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2.5 / output: 10 | 2025-06-05 |
| `gemini-2.5-pro-exp-03-25`<br />Gemini 2.5 Pro Experimental 0325 | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2.5 / output: 10 | 2025-03-25 |
| `gemini-2.5-pro-preview-03-25`<br />Gemini 2.5 Pro Preview 0325 | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2.5 / output: 10 | 2025-03-25 |
| `gemini-2.5-pro-preview-05-06`<br />Gemini 2.5 Pro Preview 0506 | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2.5 / output: 10 | 2025-05-06 |
| `gemini-2.5-pro-preview-06-05`<br />Gemini 2.5 Pro Preview 0605 | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2.5 / output: 10 | 2025-06-05 |
| `gemini-3-pro-image-preview`<br />Gemini 3 Pro Image | - | image, text | text | - | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 | 2025-11-18 |
| `gemini-exp-1206`<br />Gemini 2.0 Pro 1206 | - | image, text | text | - | context: 2097152 / input: 2097152 / output: 8192 | input: 1.258 / output: 4.998 | 2024-12-06 |
| `Gemma-4-31B-Claude-4.6-Opus-Reasoning-Distilled`<br />Gemma 4 31B Claude 4.6 Opus Reasoning Distilled | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 / cache_read: 0.0306 | 2026-05-01 |
| `Gemma-4-31B-Cognitive-Unshackled`<br />Gemma 4 31B Cognitive Unshackled | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `Gemma-4-31B-DarkIdol`<br />Gemma 4 31B DarkIdol | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `gemma-4-31B-Fabled`<br />Gemma 4 31B Fabled | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `gemma-4-31B-Garnet`<br />Gemma 4 31B Garnet | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `Gemma-4-31B-GarnetV2`<br />Gemma 4 31B Garnet V2 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `Gemma-4-31B-Gemopus`<br />Gemma 4 31B Gemopus | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `Gemma-4-31B-it`<br />Gemma 4 31B IT | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-09 |
| `gemma-4-31B-K1-v5`<br />Gemma 4 31B K1 v5 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `gemma-4-31B-Larkspur-v0.5`<br />Gemma 4 31B Larkspur v0.5 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `gemma-4-31B-MeroMero`<br />Gemma 4 31B MeroMero | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `Gemma-4-31B-Musica-v1`<br />Gemma 4 31B Musica v1 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `Gemma-4-31B-Queen`<br />Gemma 4 31B Queen | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-01 |
| `glm-4`<br />GLM-4 | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 14.994 / output: 14.994 | 2024-01-16 |
| `glm-4-air`<br />GLM-4 Air | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 0.2006 / output: 0.2006 | 2024-06-05 |
| `glm-4-air-0111`<br />GLM 4 Air 0111 | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 0.1394 / output: 0.1394 | 2025-01-11 |
| `glm-4-airx`<br />GLM-4 AirX | - | text | text | - | context: 8000 / input: 8000 / output: 4096 | input: 2.006 / output: 2.006 | 2024-06-05 |
| `glm-4-flash`<br />GLM-4 Flash | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 0.1003 / output: 0.1003 | 2024-08-01 |
| `glm-4-long`<br />GLM-4 Long | - | text | text | - | context: 1000000 / input: 1000000 / output: 4096 | input: 0.2006 / output: 0.2006 | 2024-08-01 |
| `glm-4-plus`<br />GLM-4 Plus | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 7.497 / output: 7.497 | 2024-08-01 |
| `glm-4-plus-0111`<br />GLM 4 Plus 0111 | - | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 9.996 / output: 9.996 | 2025-02-19 |
| `glm-4.1v-thinking-flash`<br />GLM 4.1V Thinking Flash | - | image, text | text | - | context: 64000 / input: 64000 / output: 8192 | input: 0.3 / output: 0.3 | 2025-07-09 |
| `glm-4.1v-thinking-flashx`<br />GLM 4.1V Thinking FlashX | - | image, text | text | - | context: 64000 / input: 64000 / output: 8192 | input: 0.3 / output: 0.3 | 2025-07-09 |
| `GLM-4.6-Derestricted-v5`<br />GLM 4.6 Derestricted v5 | - | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.4 / output: 1.5 | 2025-12-23 |
| `glm-z1-air`<br />GLM Z1 Air | - | text | text | tools, schema | context: 32000 / input: 32000 / output: 16384 | input: 0.07 / output: 0.07 | 2025-04-15 |
| `glm-z1-airx`<br />GLM Z1 AirX | - | text | text | tools, schema | context: 32000 / input: 32000 / output: 16384 | input: 0.7 / output: 0.7 | 2025-04-15 |
| `glm-zero-preview`<br />GLM Zero Preview | - | text | text | - | context: 8000 / input: 8000 / output: 4096 | input: 1.802 / output: 1.802 | 2024-12-01 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash (Preview) | gemini-flash | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.5 / output: 3 | 2025-12-17 |
| `google/gemini-3-flash-preview-thinking`<br />Gemini 3 Flash Thinking | gemini-flash | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 0.5 / output: 3 | 2025-12-17 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | - | image, pdf, text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2026-03-03 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro (Preview) | - | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro (Preview Custom Tools) | - | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-27 |
| `google/gemini-3.1-pro-preview-high`<br />Gemini 3.1 Pro (Preview High) | - | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-21 |
| `google/gemini-3.1-pro-preview-low`<br />Gemini 3.1 Pro (Preview Low) | - | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-21 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | - | audio, image, text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 | 2026-05-19 |
| `google/gemini-3.5-flash-thinking`<br />Gemini 3.5 Flash Thinking | - | image, text | text | reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 | 2026-05-19 |
| `google/gemini-flash-1.5`<br />Gemini 1.5 Flash | gemini-flash | text | text | - | context: 2000000 / input: 2000000 / output: 8192 | input: 0.0748 / output: 0.306 | 2024-05-14 |
| `google/gemini-flash-latest`<br />Gemini Flash Latest | - | image, text | text | reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 1.5 / output: 9 / cache_read: 0.15 | 2026-03-29 |
| `google/gemini-flash-lite-latest`<br />Gemini Flash Lite Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2026-03-29 |
| `google/gemini-pro-latest`<br />Gemini Pro Latest | - | image, text | text | tools, schema, reasoning | context: 1048756 / input: 1048756 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-03-29 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B | - | image, text | text | schema, reasoning | context: 262144 / input: 262144 / output: 131072 | input: 0.13 / output: 0.4 | 2026-04-02 |
| `google/gemma-4-26b-a4b-it:thinking`<br />Gemma 4 26B A4B Thinking | - | image, text | text | schema, reasoning | context: 262144 / input: 262144 / output: 131072 | input: 0.13 / output: 0.4 | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B | - | image, text | text | schema, reasoning | context: 262144 / input: 262144 / output: 131072 | input: 0.1 / output: 0.35 | 2026-04-02 |
| `google/gemma-4-31b-it:thinking`<br />Gemma 4 31B Thinking | - | image, text | text | schema, reasoning | context: 262144 / input: 262144 / output: 131072 | input: 0.1 / output: 0.35 | 2026-04-02 |
| `Gryphe/MythoMax-L2-13b`<br />MythoMax 13B | llama | text | text | - | context: 4000 / input: 4000 / output: 4096 | input: 0.1003 / output: 0.1003 | 2025-08-08 |
| `hermes-high`<br />Hermes High | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 4.998 / output: 25.007 | 2026-05-11 |
| `hermes-low`<br />Hermes Low | - | image, pdf, text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 | 2026-05-11 |
| `hermes-medium`<br />Hermes Medium | - | text | text | tools, schema, reasoning | context: 204800 / input: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-05-11 |
| `holo3-35b-a3b`<br />Holo3-35B-A3B | - | image, text | text | tools, schema, reasoning | context: 65536 / input: 65536 / output: 65536 | input: 0.25 / output: 1.8 | 2024-01-01 |
| `holo3-35b-a3b:thinking`<br />Holo3-35B-A3B Thinking | - | image, text | text | tools, schema, reasoning | context: 65536 / input: 65536 / output: 65536 | input: 0.25 / output: 1.8 | 2024-01-01 |
| `huihui-ai/DeepSeek-R1-Distill-Llama-70B-abliterated`<br />DeepSeek R1 Llama 70B Abliterated | deepseek | text | text | reasoning | context: 16384 / input: 16384 / output: 8192 | input: 0.7 / output: 0.7 | 2025-01-20 |
| `huihui-ai/DeepSeek-R1-Distill-Qwen-32B-abliterated`<br />DeepSeek R1 Qwen Abliterated | qwen | text | text | reasoning | context: 16384 / input: 16384 / output: 8192 | input: 1.4 / output: 1.4 | 2025-01-20 |
| `huihui-ai/Llama-3.3-70B-Instruct-abliterated`<br />Llama 3.3 70B Instruct abliterated | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.7 / output: 0.7 | 2025-08-08 |
| `huihui-ai/Qwen2.5-32B-Instruct-abliterated`<br />Qwen 2.5 32B Abliterated | qwen | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.7 / output: 0.7 | 2025-01-06 |
| `hunyuan-turbos-20250226`<br />Hunyuan Turbo S | - | text | text | - | context: 24000 / input: 24000 / output: 8192 | input: 0.187 / output: 0.374 | 2025-02-27 |
| `ibm-granite/granite-4.1-8b`<br />Granite 4.1 8B | - | text | text | tools, schema | context: 131072 / input: 131072 / output: 131072 | input: 0.05 / output: 0.1 / cache_read: 0.05 | 2026-04-29 |
| `inclusionai/ling-2.6-1t`<br />Ling 2.6 1T | - | text | text | tools, schema | context: 262144 / input: 262144 / output: 32768 | input: 0.3 / output: 2.5 / cache_read: 0.06 | 2026-04-23 |
| `inclusionai/ling-2.6-flash`<br />Ling 2.6 Flash | - | text | text | tools, schema | context: 262144 / input: 262144 / output: 32768 | input: 0.08 / output: 0.24 | 2026-04-21 |
| `inclusionai/ring-2.6-1t`<br />Ring 2.6 1T | - | text | text | tools, schema, reasoning | context: 262144 / input: 262144 / output: 65536 | input: 1 / output: 3 | 2026-05-08 |
| `Infermatic/MN-12B-Inferor-v0.0`<br />Mistral Nemo Inferor 12B | mistral-nemo | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.25499999999999995 / output: 0.49299999999999994 | 2024-07-01 |
| `inflatebot/MN-12B-Mag-Mell-R1`<br />Mag Mell R1 | mistral-nemo | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-01 |
| `inflection/inflection-3-pi`<br />Inflection 3 Pi | gpt | text | text | - | context: 8000 / input: 8000 / output: 4096 | input: 2.499 / output: 9.996 | 2024-10-11 |
| `inflection/inflection-3-productivity`<br />Inflection 3 Productivity | gpt | text | text | - | context: 8000 / input: 8000 / output: 4096 | input: 2.499 / output: 9.996 | 2024-10-11 |
| `jamba-large`<br />Jamba Large | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 1.989 / output: 7.99 | 2025-07-09 |
| `jamba-large-1.6`<br />Jamba Large 1.6 | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 1.989 / output: 7.99 | 2025-03-12 |
| `jamba-large-1.7`<br />Jamba Large 1.7 | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 1.989 / output: 7.99 | 2025-07-09 |
| `jamba-mini`<br />Jamba Mini | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 0.1989 / output: 0.408 | 2025-07-09 |
| `jamba-mini-1.6`<br />Jamba Mini 1.6 | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 0.1989 / output: 0.408 | 2025-03-01 |
| `jamba-mini-1.7`<br />Jamba Mini 1.7 | - | text | text | - | context: 256000 / input: 256000 / output: 4096 | input: 0.1989 / output: 0.408 | 2025-07-09 |
| `KAT-Coder-Air-V1`<br />KAT Coder Air V1 | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.1 / output: 0.2 | 2025-10-28 |
| `KAT-Coder-Exp-72B-1010`<br />KAT Coder Exp 72B 1010 | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.1 / output: 0.2 | 2025-10-28 |
| `kimi-k2-instruct-fast`<br />Kimi K2 0711 Fast | - | pdf, text | text | - | context: 131072 / input: 131072 / output: 16384 | input: 0.1 / output: 2 | 2025-07-15 |
| `kimi-thinking-preview`<br />Kimi Thinking Preview | - | pdf, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 31.46 / output: 31.46 | 2025-05-07 |
| `kwaipilot/kat-coder-pro-v2`<br />KAT Coder Pro V2 | - | text | text | - | context: 256000 / input: 256000 / output: 80000 | input: 0.3 / output: 1.2 | 2026-03-28 |
| `LatitudeGames/Wayfarer-Large-70B-Llama-3.3`<br />Llama 3.3 70B Wayfarer | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.700000007 / output: 0.700000007 | 2025-02-20 |
| `learnlm-1.5-pro-experimental`<br />Gemini LearnLM Experimental | - | text | text | - | context: 32767 / input: 32767 / output: 8192 | input: 3.502 / output: 10.506 | 2024-05-14 |
| `liquid/lfm-2-24b-a2b`<br />LFM2 24B A2B | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.03 / output: 0.12 | 2025-12-20 |
| `LLM360/K2-Think`<br />K2-Think | kimi-thinking | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.17 / output: 0.68 | 2025-07-26 |
| `Magistral-Small-2506`<br />Magistral Small 2506 | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.4 / output: 1.4 | 2025-09-25 |
| `MarinaraSpaghetti/NemoMix-Unleashed-12B`<br />NemoMix 12B Unleashed | mistral-nemo | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-01 |
| `meganova-ai/manta-flash-1.0`<br />Manta Flash 1.0 | nova | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.02 / output: 0.16 | 2025-12-20 |
| `meganova-ai/manta-mini-1.0`<br />Manta Mini 1.0 | nova | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 0.02 / output: 0.16 | 2025-12-20 |
| `meganova-ai/manta-pro-1.0`<br />Manta Pro 1.0 | nova | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.060000000000000005 / output: 0.5 | 2025-12-20 |
| `mercury-2`<br />Mercury 2 | - | text | text | tools, schema, reasoning | context: 128000 / input: 128000 / output: 50000 | input: 0.25 / output: 0.75 / cache_read: 0.025 | 2024-01-01 |
| `Meta-Llama-3-1-8B-Instruct-FP8`<br />Llama 3.1 8B (decentralized) | - | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.02 / output: 0.03 | 2024-07-23 |
| `meta-llama/llama-3.1-8b-instruct`<br />Llama 3.1 8b Instruct | llama | text | text | - | context: 131072 / input: 131072 / output: 16384 | input: 0.0544 / output: 0.0544 | 2024-07-23 |
| `meta-llama/llama-3.2-3b-instruct`<br />Llama 3.2 3b Instruct | llama | pdf, text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.0306 / output: 0.0493 | 2024-09-25 |
| `meta-llama/llama-3.3-70b-instruct`<br />Llama 3.3 70b Instruct | llama | text | text | tools, schema | context: 131072 / input: 131072 / output: 16384 | input: 0.05 / output: 0.23 | 2025-02-27 |
| `meta-llama/llama-4-maverick`<br />Llama 4 Maverick | llama | image, text | text | tools, schema | context: 1048576 / input: 1048576 / output: 65536 | input: 0.18000000000000002 / output: 0.8 | 2025-09-05 |
| `meta-llama/llama-4-scout`<br />Llama 4 Scout | llama | image, text | text | tools, schema | context: 328000 / input: 328000 / output: 65536 | input: 0.085 / output: 0.46 | 2025-09-05 |
| `microsoft/wizardlm-2-8x22b`<br />WizardLM-2 8x22B | gpt | pdf, text | text | - | context: 65536 / input: 65536 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2025-04-15 |
| `MiniMax-M1`<br />MiniMax M1 | - | text | text | - | context: 1000000 / input: 1000000 / output: 131072 | input: 0.1394 / output: 1.3328 | 2025-06-16 |
| `MiniMax-M2`<br />MiniMax M2 | - | text | text | reasoning | context: 200000 / input: 200000 / output: 131072 | input: 0.17 / output: 1.53 | 2025-10-25 |
| `minimax/minimax-01`<br />MiniMax 01 | minimax | pdf, text | text | - | context: 1000192 / input: 1000192 / output: 16384 | input: 0.1394 / output: 1.1219999999999999 | 2025-01-15 |
| `minimax/minimax-latest`<br />MiniMax Latest | - | image, text | text | tools, schema, reasoning | context: 512000 / input: 512000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-05-03 |
| `minimax/minimax-m2-her`<br />MiniMax M2-her | minimax | text | text | - | context: 65532 / input: 65532 / output: 2048 | input: 0.30200000000000005 / output: 1.2069999999999999 | 2026-01-24 |
| `minimax/minimax-m2.1`<br />MiniMax M2.1 | minimax | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 131072 | input: 0.33 / output: 1.32 | 2025-12-19 |
| `minimax/minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, schema, reasoning | context: 204800 / input: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-02-12 |
| `minimax/minimax-m2.7`<br />MiniMax M2.7 | minimax | text | text | tools, schema, reasoning | context: 204800 / input: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-03-18 |
| `minimax/minimax-m2.7-turbo`<br />MiniMax M2.7 Turbo | - | text | text | tools, schema, reasoning | context: 204800 / input: 204800 / output: 131072 | input: 0.6 / output: 2.4 | 2026-03-18 |
| `minimax/minimax-m3`<br />MiniMax M3 | - | image, text | text | tools, schema | context: 512000 / input: 512000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-01 |
| `minimax/minimax-m3:thinking`<br />MiniMax M3 Thinking | - | image, text | text | tools, schema, reasoning | context: 512000 / input: 512000 / output: 80000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-01 |
| `MiniMaxAI/MiniMax-M1-80k`<br />MiniMax M1 80K | minimax | text | text | - | context: 1000000 / input: 1000000 / output: 131072 | input: 0.6052 / output: 2.4225000000000003 | 2025-06-16 |
| `mirothinker-1-7-deepresearch`<br />MiroThinker 1.7 Deep Research | - | text | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 4 / output: 25 | 2026-05-11 |
| `mirothinker-1-7-deepresearch-mini`<br />MiroThinker 1.7 Deep Research Mini | - | text | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 1.25 / output: 10 | 2026-05-11 |
| `mistral-code-agent-latest`<br />Mistral Code Agent Latest | - | text | text | tools, schema | context: 262144 / input: 262144 / output: 32768 | input: 0.4 / output: 2 | 2026-06-02 |
| `mistral-code-latest`<br />Mistral Code Latest | - | text | text | tools, schema | context: 256000 / input: 256000 / output: 32768 | input: 0.3 / output: 0.9 | 2026-06-02 |
| `mistral-small-31-24b-instruct`<br />Mistral Small 31 24b Instruct | - | image, text | text | - | context: 128000 / input: 128000 / output: 131072 | input: 0.1 / output: 0.3 | 2025-04-15 |
| `mistral/mistral-medium-3.5`<br />Mistral Medium 3.5 | - | image, text | text | tools, schema, reasoning | context: 256000 / input: 256000 / output: 32768 | input: 1.5 / output: 7.5 | 2026-04-29 |
| `mistral/mistral-medium-3.5:thinking`<br />Mistral Medium 3.5 Thinking | - | image, text | text | tools, schema, reasoning | context: 256000 / input: 256000 / output: 32768 | input: 1.5 / output: 7.5 | 2026-04-30 |
| `mistralai/codestral-2508`<br />Codestral 2508 | codestral | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 0.3 / output: 0.8999999999999999 | 2025-08-01 |
| `mistralai/devstral-2-123b-instruct-2512`<br />Devstral 2 123B | devstral | text | text | - | context: 262144 / input: 262144 / output: 65536 | input: 0.4 / output: 1.4 | 2025-12-09 |
| `mistralai/Devstral-Small-2505`<br />Mistral Devstral Small 2505 | devstral | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.060000000000000005 / output: 0.060000000000000005 | 2025-08-02 |
| `mistralai/ministral-14b-2512`<br />Ministral 14B | ministral | text | text | - | context: 262144 / input: 262144 / output: 32768 | input: 0.2 / output: 0.2 | 2025-12-04 |
| `mistralai/ministral-14b-instruct-2512`<br />Ministral 3 14B | ministral | image, text | text | - | context: 262144 / input: 262144 / output: 32768 | input: 0.1 / output: 0.4 | 2025-12-02 |
| `mistralai/ministral-3b-2512`<br />Ministral 3B | ministral | text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 0.1 / output: 0.1 | 2025-12-04 |
| `mistralai/ministral-8b-2512`<br />Ministral 8B | ministral | text | text | - | context: 262144 / input: 262144 / output: 32768 | input: 0.15 / output: 0.15 | 2025-12-04 |
| `mistralai/mistral-large`<br />Mistral Large 2411 | mistral-large | text | text | - | context: 128000 / input: 128000 / output: 256000 | input: 2.006 / output: 6.001 | 2024-02-26 |
| `mistralai/mistral-large-3-675b-instruct-2512`<br />Mistral Large 3 675B | mistral-large | image, text | text | - | context: 262144 / input: 262144 / output: 256000 | input: 1 / output: 3 | 2025-12-02 |
| `mistralai/mistral-medium-3`<br />Mistral Medium 3 | mistral-medium | image, text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 0.4 / output: 2 | 2025-09-25 |
| `mistralai/mistral-medium-3.1`<br />Mistral Medium 3.1 | mistral-medium | text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 0.4 / output: 2 | 2025-09-05 |
| `mistralai/Mistral-Nemo-Instruct-2407`<br />Mistral Nemo | mistral-nemo | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.1003 / output: 0.1207 | 2024-07-18 |
| `mistralai/mistral-saba`<br />Mistral Saba | mistral | text | text | - | context: 32000 / input: 32000 / output: 32768 | input: 0.1989 / output: 0.595 | 2025-02-17 |
| `mistralai/mistral-small-4-119b-2603`<br />Mistral Small 4 119B | - | image, text | text | tools, schema, reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.4 / output: 1.4 | 2026-03-16 |
| `mistralai/mistral-small-4-119b-2603:thinking`<br />Mistral Small 4 119B Thinking | - | image, text | text | tools, schema, reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.4 / output: 1.4 | 2026-03-17 |
| `mistralai/mixtral-8x22b-instruct-v0.1`<br />Mixtral 8x22B | mixtral | text | text | - | context: 65536 / input: 65536 / output: 32768 | input: 0.8999999999999999 / output: 0.8999999999999999 | 2025-12-11 |
| `mistralai/mixtral-8x7b-instruct-v0.1`<br />Mixtral 8x7B | mixtral | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.27 / output: 0.27 | 2025-12-11 |
| `mlabonne/NeuralDaredevil-8B-abliterated`<br />Neural Daredevil 8B abliterated | llama | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 0.44 / output: 0.44 | 2024-12-01 |
| `moonshotai/kimi-k2-instruct`<br />Kimi K2 Instruct | kimi-k2 | text | text | tools, schema | context: 256000 / input: 256000 / output: 8192 | input: 0.1 / output: 2 | 2025-07-01 |
| `moonshotai/kimi-k2-instruct-0711`<br />Kimi K2 0711 | kimi-k2 | text | text | tools, schema | context: 128000 / input: 128000 / output: 8192 | input: 0.1 / output: 2 | 2025-07-11 |
| `moonshotai/Kimi-K2-Instruct-0905`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, schema | context: 256000 / input: 256000 / output: 262144 | input: 0.4 / output: 2 | 2025-09-25 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema | context: 256000 / input: 256000 / output: 262144 | input: 0.3 / output: 1.2 | 2025-11-06 |
| `moonshotai/kimi-k2-thinking-original`<br />Kimi K2 Thinking Original | kimi-thinking | text | text | reasoning | context: 256000 / input: 256000 / output: 16384 | input: 0.6 / output: 2.5 | 2025-11-06 |
| `moonshotai/kimi-k2-thinking-turbo-original`<br />Kimi K2 Thinking Turbo Original | kimi-thinking | text | text | reasoning | context: 256000 / input: 256000 / output: 16384 | input: 1.15 / output: 8 | 2025-11-06 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools | context: 256000 / input: 256000 / output: 65536 | input: 0.3 / output: 1.9 | 2026-01-26 |
| `moonshotai/kimi-k2.5:thinking`<br />Kimi K2.5 Thinking | kimi-thinking | image, text | text | tools, reasoning | context: 256000 / input: 256000 / output: 65536 | input: 0.3 / output: 1.9 | 2026-01-26 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, open weights | context: 256000 / output: 65536 | input: 0.53 / output: 2.73 | 2026-04-21 |
| `moonshotai/kimi-k2.6:thinking`<br />Kimi K2.6 Thinking | kimi-thinking | image, text | text | tools, reasoning, open weights | context: 256000 / output: 65536 | input: 0.53 / output: 2.73 | 2026-04-21 |
| `moonshotai/kimi-latest`<br />Kimi Latest | - | image, text | text | tools, reasoning | context: 256000 / input: 256000 / output: 65536 | input: 0.5 / output: 2.6 / cache_read: 0.125 | 2026-05-03 |
| `nanogpt/coding-router`<br />Coding Router | - | text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 1.1 / output: 2.2 / cache_read: 0.11 | 2026-05-12 |
| `nanogpt/coding-router:high`<br />Coding Router High | - | text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 1.1 / output: 2.2 / cache_read: 0.11 | 2026-05-12 |
| `nanogpt/coding-router:low`<br />Coding Router Low | - | text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-05-12 |
| `nanogpt/coding-router:max`<br />Coding Router Max | - | text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-12 |
| `nanogpt/coding-router:medium`<br />Coding Router Medium | - | text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-05-12 |
| `NeverSleep/Lumimaid-v0.2-70B`<br />Lumimaid v0.2 | llama | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 1 / output: 1.5 | 2024-07-01 |
| `nex-agi/deepseek-v3.1-nex-n1`<br />DeepSeek V3.1 Nex N1 | deepseek | text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.27999999999999997 / output: 0.42000000000000004 | 2025-12-10 |
| `nothingiisreal/L3.1-70B-Celeste-V0.1-BF16`<br />Llama 3.1 70B Celeste v0.1 | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-23 |
| `NousResearch/DeepHermes-3-Mistral-24B-Preview`<br />DeepHermes-3 Mistral 24B (Preview) | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.3 / output: 0.3 | 2025-05-10 |
| `NousResearch/hermes-3-llama-3.1-70b`<br />Hermes 3 70B | - | text | text | - | context: 65536 / input: 65536 / output: 8192 | input: 0.408 / output: 0.408 | 2026-01-07 |
| `NousResearch/hermes-4-405b`<br />Hermes 4 Large | - | text | text | schema | context: 128000 / input: 128000 / output: 8192 | input: 0.3 / output: 1.2 | 2025-08-26 |
| `NousResearch/hermes-4-405b:thinking`<br />Hermes 4 Large (Thinking) | - | text | text | schema | context: 128000 / input: 128000 / output: 8192 | input: 0.3 / output: 1.2 | 2024-01-01 |
| `NousResearch/hermes-4-70b`<br />Hermes 4 Medium | - | text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.2006 / output: 0.3995 | 2025-07-03 |
| `NousResearch/Hermes-4-70B:thinking`<br />Hermes 4 (Thinking) | - | text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.2006 / output: 0.3995 | 2025-09-17 |
| `nvidia/Llama-3_3-Nemotron-Super-49B-v1_5`<br />Nvidia Nemotron Super 49B v1.5 | nemotron | text | text | temperature | context: 128000 / input: 128000 / output: 16384 | input: 0.05 / output: 0.25 | 2025-08-08 |
| `nvidia/Llama-3.1-Nemotron-70B-Instruct-HF`<br />Nvidia Nemotron 70b | nemotron | text | text | temperature | context: 16384 / input: 16384 / output: 8192 | input: 0.357 / output: 0.408 | 2025-04-15 |
| `nvidia/Llama-3.3-Nemotron-Super-49B-v1`<br />Nvidia Nemotron Super 49B | nemotron | text | text | temperature | context: 128000 / input: 128000 / output: 16384 | input: 0.15 / output: 0.15 | 2025-08-08 |
| `nvidia/nemotron-3-nano-30b-a3b`<br />Nvidia Nemotron 3 Nano 30B | nemotron | text | text | temperature | context: 256000 / input: 256000 / output: 262144 | input: 0.17 / output: 0.68 | 2025-12-15 |
| `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`<br />Nvidia Nemotron 3 Nano Omni | nemotron | image, text | text | tools, reasoning, temperature | context: 256000 / input: 256000 / output: 65536 | input: 0.105 / output: 0.42 | 2026-04-28 |
| `nvidia/nemotron-3-super-120b-a12b`<br />Nvidia Nemotron 3 Super 120B | nemotron | text | text | tools, reasoning, temperature | context: 262144 / input: 262144 / output: 16384 | input: 0.05 / output: 0.25 | 2026-03-01 |
| `nvidia/nemotron-3-super-120b-a12b:thinking`<br />Nvidia Nemotron 3 Super 120B Thinking | nemotron | text | text | tools, reasoning, temperature | context: 262144 / input: 262144 / output: 16384 | input: 0.05 / output: 0.25 | 2026-03-01 |
| `nvidia/nvidia-nemotron-nano-9b-v2`<br />Nvidia Nemotron Nano 9B v2 | nemotron | text | text | temperature | context: 128000 / input: 128000 / output: 16384 | input: 0.17 / output: 0.68 | 2025-08-18 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5 Turbo | gpt | text | text | - | context: 16385 / input: 16385 / output: 4096 | input: 0.5 / output: 1.5 | 2024-01-01 |
| `openai/gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 10 / output: 30 | 2024-01-01 |
| `openai/gpt-4-turbo-preview`<br />GPT-4 Turbo Preview | gpt | text | text | - | context: 128000 / input: 128000 / output: 4096 | input: 9.996 / output: 30.004999999999995 | 2024-01-01 |
| `openai/gpt-4.1`<br />GPT 4.1 | gpt | image, pdf, text | text | tools, schema | context: 1047576 / input: 1047576 / output: 32768 | input: 2 / output: 8 | 2025-09-10 |
| `openai/gpt-4.1-mini`<br />GPT 4.1 Mini | gpt-mini | image, text | text | - | context: 1047576 / input: 1047576 / output: 32768 | input: 0.4 / output: 1.6 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT 4.1 Nano | gpt-nano | image, pdf, text | text | - | context: 1047576 / input: 1047576 / output: 32768 | input: 0.1 / output: 0.4 | 2025-04-14 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 2.499 / output: 9.996 | 2024-05-13 |
| `openai/gpt-4o-2024-08-06`<br />GPT-4o (2024-08-06) | gpt | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 2.499 / output: 9.996 | 2024-08-06 |
| `openai/gpt-4o-2024-11-20`<br />GPT-4o (2024-11-20) | gpt | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 2.5 / output: 10 | 2024-11-20 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.1496 / output: 0.595 | 2024-07-18 |
| `openai/gpt-4o-mini-search-preview`<br />GPT-4o mini Search Preview | gpt-mini | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.088 / output: 0.35 | 2024-07-18 |
| `openai/gpt-4o-search-preview`<br />GPT-4o Search Preview | gpt | image, text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 1.47 / output: 5.88 | 2024-05-13 |
| `openai/gpt-5`<br />GPT 5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5 Codex | gpt-codex | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 9.996 / output: 19.992 | 2025-09-15 |
| `openai/gpt-5-mini`<br />GPT 5 Mini | gpt-mini | image, text | text | reasoning | context: 400000 / input: 400000 / output: 128000 | input: 0.25 / output: 2 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT 5 Nano | gpt-nano | image, text | text | reasoning | context: 400000 / input: 400000 / output: 128000 | input: 0.05 / output: 0.4 | 2025-08-07 |
| `openai/gpt-5-pro`<br />GPT 5 Pro | gpt-pro | image, text | text | reasoning | context: 400000 / input: 400000 / output: 128000 | input: 15 / output: 120 | 2025-08-07 |
| `openai/gpt-5.1`<br />GPT 5.1 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `openai/gpt-5.1-2025-11-13`<br />GPT-5.1 (2025-11-13) | gpt | text | text | - | context: 1000000 / input: 1000000 / output: 32768 | input: 1.25 / output: 10 | 2025-11-13 |
| `openai/gpt-5.1-codex`<br />GPT 5.1 Codex | gpt-codex | image, text | text | reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.25 / output: 10 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />GPT 5.1 Codex Max | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 2.5 / output: 20 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT 5.1 Codex Mini | gpt-codex-mini | image, text | text | reasoning | context: 400000 / input: 400000 / output: 128000 | input: 0.25 / output: 2 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT 5.2 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-01-01 |
| `openai/gpt-5.2-codex`<br />GPT 5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-01-14 |
| `openai/gpt-5.2-pro`<br />GPT 5.2 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 21 / output: 168 | 2026-01-01 |
| `openai/gpt-5.3-codex`<br />GPT 5.3 Codex | - | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-24 |
| `openai/gpt-5.4`<br />GPT 5.4 | - | image, pdf, text | text | tools, schema, reasoning | context: 922000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-mini`<br />GPT 5.4 Mini | - | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT 5.4 Nano | - | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 400000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.4-pro`<br />GPT 5.4 Pro | - | image, pdf, text | text | tools, schema, reasoning | context: 922000 / input: 922000 / output: 128000 | input: 30 / output: 180 / cache_read: 3 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT 5.5 | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-chat-latest`<br />GPT Chat Latest | - | image, pdf, text | text | tools, schema | context: 400000 / input: 400000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-05-03 |
| `openai/gpt-latest`<br />GPT Latest | - | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-03-29 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning | context: 128000 / input: 128000 / output: 16384 | input: 0.05 / output: 0.25 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | reasoning | context: 128000 / input: 128000 / output: 16384 | input: 0.04 / output: 0.15 | 2025-08-05 |
| `openai/gpt-oss-safeguard-20b`<br />GPT OSS Safeguard 20B | gpt-oss | text | text | reasoning | context: 128000 / input: 128000 / output: 16384 | input: 0.075 / output: 0.3 | 2025-10-29 |
| `openai/o1`<br />OpenAI o1 | o | text | text | reasoning | context: 200000 / input: 200000 / output: 100000 | input: 14.993999999999998 / output: 59.993 | 2024-12-17 |
| `openai/o1-preview`<br />OpenAI o1-preview | o | text | text | reasoning | context: 128000 / input: 128000 / output: 32768 | input: 14.993999999999998 / output: 59.993 | 2024-09-12 |
| `openai/o1-pro`<br />OpenAI o1 Pro | o-pro | image, pdf, text | text | - | context: 200000 / input: 200000 / output: 100000 | input: 150 / output: 600 | 2025-01-25 |
| `openai/o3`<br />OpenAI o3 | o | text | text | - | context: 200000 / input: 200000 / output: 100000 | input: 2 / output: 8 | 2025-04-16 |
| `openai/o3-deep-research`<br />OpenAI o3 Deep Research | o | text | text | reasoning | context: 200000 / input: 200000 / output: 100000 | input: 9.996 / output: 19.992 | 2025-04-16 |
| `openai/o3-mini`<br />OpenAI o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2025-01-31 |
| `openai/o3-mini-high`<br />OpenAI o3-mini (High) | o-mini | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 0.64 / output: 2.588 | 2025-01-31 |
| `openai/o3-mini-low`<br />OpenAI o3-mini (Low) | o-mini | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 9.996 / output: 19.992 | 2025-01-31 |
| `openai/o3-pro-2025-06-10`<br />OpenAI o3-pro (2025-06-10) | o-pro | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 9.996 / output: 19.992 | 2025-06-10 |
| `openai/o4-mini`<br />OpenAI o4-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2025-04-16 |
| `openai/o4-mini-deep-research`<br />OpenAI o4-mini Deep Research | o-mini | text | text | reasoning | context: 200000 / input: 200000 / output: 100000 | input: 9.996 / output: 19.992 | 2025-04-16 |
| `openai/o4-mini-high`<br />OpenAI o4-mini high | o-mini | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2025-04-16 |
| `owl`<br />OWL | - | text | text | tools, schema | context: 1048756 / input: 1048756 / output: 262144 | input: 0.1 / output: 0.3 | 2026-05-01 |
| `pamanseau/OpenReasoning-Nemotron-32B`<br />OpenReasoning Nemotron 32B | nemotron | text | text | reasoning | context: 32768 / input: 32768 / output: 65536 | input: 0.1 / output: 0.4 | 2025-08-21 |
| `perceptron/perceptron-mk1`<br />Perceptron Mk1 | - | image, text, video | text | schema, reasoning | context: 32768 / input: 32768 / output: 8192 | input: 0.15 / output: 1.5 | 2026-05-12 |
| `phi-4-mini-instruct`<br />Phi 4 Mini | - | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.17 / output: 0.68 | 2025-07-26 |
| `phi-4-multimodal-instruct`<br />Phi 4 Multimodal | - | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.07 / output: 0.11 | 2025-07-26 |
| `poolside/laguna-m.1`<br />Laguna M.1 | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.1 / output: 0.3 | 2026-04-29 |
| `poolside/laguna-xs.2`<br />Laguna XS.2 | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.1 / output: 0.3 | 2026-04-29 |
| `qvq-max`<br />Qwen: QvQ Max | - | image, text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 1.4 / output: 5.3 | 2025-03-28 |
| `qwen-3.6-plus`<br />Qwen 3.6 Plus | qwen3.6 | image, text, video | text | - | context: 991800 / output: 65536 | input: 0.45 / output: 2.7 | 2026-04-02 |
| `qwen-long`<br />Qwen Long 10M | - | pdf, text | text | - | context: 10000000 / input: 10000000 / output: 8192 | input: 0.1003 / output: 0.408 | 2025-01-25 |
| `qwen-max`<br />Qwen 2.5 Max | - | text | text | - | context: 32000 / input: 32000 / output: 8192 | input: 1.5997 / output: 6.392 | 2024-04-03 |
| `qwen-plus`<br />Qwen Plus | - | text | text | reasoning | context: 995904 / input: 995904 / output: 32768 | input: 0.3995 / output: 1.2002 | 2024-01-25 |
| `qwen-turbo`<br />Qwen Turbo | - | text | text | - | context: 1000000 / input: 1000000 / output: 8192 | input: 0.04998 / output: 0.2006 | 2024-11-01 |
| `qwen/qwen-2.5-72b-instruct`<br />Qwen2.5 72B | - | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.357 / output: 0.408 | 2025-07-03 |
| `qwen/Qwen2.5-Coder-32B-Instruct`<br />Qwen 2.5 Coder 32b | - | text | text | - | context: 32000 / input: 32000 / output: 8192 | input: 0.2006 / output: 0.2006 | 2025-07-03 |
| `qwen/qwen3-14b`<br />Qwen 3 14b | - | text | text | - | context: 41000 / input: 41000 / output: 32768 | input: 0.08 / output: 0.24 | 2024-01-01 |
| `qwen/qwen3-235b-a22b`<br />Qwen 3 235b A22B | - | pdf, text | text | tools, schema | context: 41000 / input: 41000 / output: 32768 | input: 0.3 / output: 0.5 | 2025-04-29 |
| `qwen/Qwen3-235B-A22B-Instruct-2507`<br />Qwen 3 235b A22B 2507 | - | text | text | tools, schema | context: 256000 / input: 256000 / output: 262144 | input: 0.13 / output: 0.5 | 2025-07-25 |
| `qwen/Qwen3-235B-A22B-Instruct-2507-TEE`<br />Qwen 3 235b A22B 2507 (TEE) | - | text | text | tools, schema | context: 256000 / input: 256000 / output: 262144 | input: 0.13 / output: 0.5 | 2025-07-25 |
| `qwen/Qwen3-235B-A22B-Thinking-2507`<br />Qwen 3 235b A22B 2507 Thinking | - | text | text | - | context: 256000 / input: 256000 / output: 262144 | input: 0.3 / output: 0.5 | 2025-09-11 |
| `qwen/qwen3-30b-a3b`<br />Qwen3 30B A3B | - | text | text | - | context: 41000 / input: 41000 / output: 32768 | input: 0.1 / output: 0.3 | 2025-02-27 |
| `qwen/qwen3-32b`<br />Qwen 3 32b | - | pdf, text | text | - | context: 41000 / input: 41000 / output: 32768 | input: 0.1 / output: 0.3 | 2024-01-01 |
| `qwen/Qwen3-8B`<br />Qwen 3 8B | - | text | text | - | context: 41000 / input: 41000 / output: 32768 | input: 0.47 / output: 0.47 | 2024-01-01 |
| `qwen/qwen3-coder`<br />Qwen 3 Coder 480B | - | text | text | tools, schema | context: 262000 / input: 262000 / output: 65536 | input: 0.13 / output: 0.5 | 2026-03-17 |
| `qwen/qwen3-coder-flash`<br />Qwen3 Coder Flash | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.3 / output: 1.5 | 2025-09-17 |
| `qwen/qwen3-coder-next`<br />Qwen3 Coder Next | - | text | text | tools, schema | context: 262144 / input: 262144 / output: 65536 | input: 0.15 / output: 1.5 | 2025-12-08 |
| `qwen/qwen3-coder-plus`<br />Qwen3 Coder Plus | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 1 / output: 5 | 2025-09-17 |
| `qwen/qwen3-max`<br />Qwen3 Max | - | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 1.08018 / output: 5.4009 | 2025-09-05 |
| `qwen/Qwen3-Next-80B-A3B-Instruct`<br />Qwen3 Next 80B A3B (Instruct) | - | text | text | tools, schema | context: 256000 / input: 256000 / output: 262144 | input: 0.15 / output: 0.65 | 2025-09-11 |
| `qwen/qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B (Thinking) | - | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 0.15 / output: 0.65 | 2024-01-01 |
| `qwen/Qwen3-VL-235B-A22B-Instruct`<br />Qwen3 VL 235B A22B Instruct | - | image, text | text | - | context: 128000 / input: 128000 / output: 262144 | input: 0.3 / output: 1.2 | 2024-01-01 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B | qwen | image, text, video | text | open weights | context: 258048 / input: 258048 / output: 65536 | input: 0.6 / output: 3.6 | 2026-02-16 |
| `qwen/qwen3.5-397b-a17b-thinking`<br />Qwen3.5 397B A17B Thinking | - | image, text, video | text | reasoning | context: 258048 / input: 258048 / output: 65536 | input: 0.6 / output: 3.6 | 2026-02-16 |
| `qwen/qwen3.5-9b`<br />Qwen3.5 9B | - | image, text | text | reasoning | context: 256000 / input: 256000 / output: 65536 | input: 0.05 / output: 0.15 | 2026-03-10 |
| `qwen/qwen3.5-plus`<br />Qwen3.5 Plus | - | image, text, video | text | - | context: 983616 / input: 983616 / output: 65536 | input: 0.4 / output: 2.4 / cache_read: 0.04 | 2026-02-16 |
| `qwen/qwen3.5-plus-thinking`<br />Qwen3.5 Plus Thinking | - | image, text, video | text | reasoning | context: 983616 / input: 983616 / output: 65536 | input: 0.4 / output: 2.4 / cache_read: 0.04 | 2026-02-16 |
| `qwen/Qwen3.6-35B-A3B`<br />Qwen3.6 35B A3B | - | image, text, video | text | - | context: 262144 / input: 262144 / output: 16384 | input: 0.112 / output: 0.8 | 2026-04-17 |
| `qwen/Qwen3.6-35B-A3B:thinking`<br />Qwen3.6 35B A3B Thinking | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.112 / output: 0.8 | 2026-04-19 |
| `qwen/qwq-32b-preview`<br />Qwen QwQ 32B Preview | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.2 / output: 0.2 | 2025-02-27 |
| `Qwen2.5-32B-EVA-v0.2`<br />Qwen 2.5 32b EVA | - | text | text | - | context: 24576 / input: 24576 / output: 8192 | input: 0.493 / output: 0.493 | 2024-09-01 |
| `qwen25-vl-72b-instruct`<br />Qwen25 VL 72b | - | image, text | text | - | context: 32000 / input: 32000 / output: 32768 | input: 0.69989 / output: 0.69989 | 2025-05-10 |
| `qwen3-30b-a3b-instruct-2507`<br />Qwen3 30B A3B Instruct 2507 | - | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 0.2 / output: 0.5 | 2025-02-20 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3 Coder 30B A3B Instruct | - | text | text | tools, schema | context: 128000 / input: 128000 / output: 65536 | input: 0.1 / output: 0.4 | 2025-08-05 |
| `qwen3-max-2026-01-23`<br />Qwen3 Max 2026-01-23 | - | text | text | - | context: 256000 / input: 256000 / output: 32768 | input: 1.2002 / output: 6.001 | 2026-01-26 |
| `qwen3-vl-235b-a22b-instruct-original`<br />Qwen3 VL 235B A22B Instruct Original | - | image, text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.5 / output: 1.2 | 2025-09-25 |
| `qwen3-vl-235b-a22b-thinking`<br />Qwen3 VL 235B A22B Thinking | - | image, text | text | reasoning | context: 32768 / input: 32768 / output: 32768 | input: 0.5 / output: 6 | 2025-08-26 |
| `qwen3.5-122b-a10b`<br />Qwen3.5 122B A10B | - | image, text, video | text | - | context: 260096 / input: 260096 / output: 65536 | input: 0.36 / output: 2.88 | 2026-02-24 |
| `qwen3.5-122b-a10b:thinking`<br />Qwen3.5 122B A10B Thinking | - | image, text, video | text | reasoning | context: 260096 / input: 260096 / output: 65536 | input: 0.36 / output: 2.88 | 2026-02-24 |
| `qwen3.5-27b`<br />Qwen3.5 27B | - | image, text, video | text | - | context: 260096 / input: 260096 / output: 65536 | input: 0.27 / output: 2.16 | 2026-02-24 |
| `Qwen3.5-27B-Anko`<br />Qwen3.5 27B Anko | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-BlueStar-Derestricted`<br />Qwen3.5 27B BlueStar Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-BlueStar-Derestricted-Lite`<br />Qwen3.5 27B BlueStar Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-BlueStar-v2-Derestricted`<br />Qwen3.5 27B BlueStar v2 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-BlueStar-v2-Derestricted-Lite`<br />Qwen3.5 27B BlueStar v2 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-BlueStar-v3-Derestricted`<br />Qwen3.5 27B BlueStar v3 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-BlueStar-v3-Derestricted-Lite`<br />Qwen3.5 27B BlueStar v3 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Derestricted`<br />Qwen3.5 27B Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-03-17 |
| `Qwen3.5-27B-earica-Derestricted`<br />Qwen3.5 27B earica Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-earica-Derestricted-Lite`<br />Qwen3.5 27B earica Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Infracelestial`<br />Qwen3.5 27B Infracelestial | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Marvin-DPO-V2-Derestricted`<br />Qwen3.5 27B Marvin DPO V2 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Marvin-DPO-V2-Derestricted-Lite`<br />Qwen3.5 27B Marvin DPO V2 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Marvin-V2-Derestricted`<br />Qwen3.5 27B Marvin V2 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Marvin-V2-Derestricted-Lite`<br />Qwen3.5 27B Marvin V2 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Musica-v1`<br />Qwen3.5 27B Musica v1 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-03-27 |
| `Qwen3.5-27B-NaNovel-Derestricted`<br />Qwen3.5 27B NaNovel Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-NaNovel-Derestricted-Lite`<br />Qwen3.5 27B NaNovel Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Omega-Evolution-v2.0-Derestricted`<br />Qwen3.5 27B Omega Evolution v2.0 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-Omega-Evolution-v2.0-Derestricted-Lite`<br />Qwen3.5 27B Omega Evolution v2.0 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-Omega-Evolution-v2.2-Derestricted`<br />Qwen3.5 27B Omega Evolution v2.2 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `Qwen3.5-27B-Omega-Evolution-v2.2-Derestricted-Lite`<br />Qwen3.5 27B Omega Evolution v2.2 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-05-02 |
| `Qwen3.5-27B-Queen-Derestricted`<br />Qwen3.5 27B Queen Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Queen-Derestricted-Lite`<br />Qwen3.5 27B Queen Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-RpRMax-v1`<br />Qwen3.5 27B RpRMax v1 | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-30 |
| `Qwen3.5-27B-Vivid-Durian`<br />Qwen3.5 27B Vivid Durian | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-03-18 |
| `Qwen3.5-27B-Writer-Derestricted`<br />Qwen3.5 27B Writer Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-Writer-Derestricted-Lite`<br />Qwen3.5 27B Writer Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-Writer-V2-Derestricted`<br />Qwen3.5 27B Writer V2 Derestricted | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `Qwen3.5-27B-Writer-V2-Derestricted-Lite`<br />Qwen3.5 27B Writer V2 Derestricted Lite | - | image, text, video | text | reasoning | context: 262144 / input: 262144 / output: 16384 | input: 0.306 / output: 0.306 | 2026-04-06 |
| `qwen3.5-27b:thinking`<br />Qwen3.5 27B Thinking | - | image, text, video | text | reasoning | context: 260096 / input: 260096 / output: 65536 | input: 0.27 / output: 2.16 | 2026-02-24 |
| `qwen3.5-35b-a3b`<br />Qwen3.5 35B A3B | - | image, text, video | text | - | context: 260096 / input: 260096 / output: 65536 | input: 0.225 / output: 1.8 | 2026-02-24 |
| `qwen3.5-35b-a3b:thinking`<br />Qwen3.5 35B A3B Thinking | - | image, text, video | text | reasoning | context: 260096 / input: 260096 / output: 65536 | input: 0.225 / output: 1.8 | 2026-02-24 |
| `qwen3.5-flash`<br />Qwen3.5 Flash | - | image, text, video | text | - | context: 991808 / input: 991808 / output: 65536 | input: 0.09 / output: 0.36 | 2026-02-24 |
| `qwen3.5-flash:thinking`<br />Qwen3.5 Flash Thinking | - | image, text, video | text | reasoning | context: 991808 / input: 991808 / output: 65536 | input: 0.09 / output: 0.36 | 2026-02-24 |
| `qwen3.5-omni-flash`<br />Qwen3.5 Omni Flash | - | audio, image, text, video | text | - | context: 49152 / input: 49152 / output: 16384 | input: 0 / output: 0 | 2026-03-30 |
| `qwen3.5-omni-plus`<br />Qwen3.5 Omni Plus | - | audio, image, text, video | text | - | context: 983616 / input: 983616 / output: 65536 | input: 0 / output: 0 | 2026-03-30 |
| `qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen3.6 | text | text | - | context: 245800 / output: 65536 | input: 1.3 / output: 7.8 | 2026-04-21 |
| `qwen3.7-max`<br />Qwen3.7 Max | - | text | text | - | context: 1000000 / input: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.25 | 2026-05-21 |
| `qwen3.7-max:thinking`<br />Qwen3.7 Max Thinking | - | text | text | reasoning | context: 1000000 / input: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.25 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | - | image, text, video | text | - | context: 991808 / input: 991808 / output: 65536 | input: 0.4 / output: 1.6 / cache_read: 0.04 | 2026-06-01 |
| `qwen3.7-plus:thinking`<br />Qwen3.7 Plus Thinking | - | image, text, video | text | reasoning | context: 983616 / input: 983616 / output: 65536 | input: 0.4 / output: 1.6 / cache_read: 0.04 | 2026-06-01 |
| `qwq-32b`<br />Qwen: QwQ 32B | - | text | text | - | context: 128000 / input: 128000 / output: 32768 | input: 0.25599999 / output: 0.30499999 | 2025-04-15 |
| `ReadyArt/MS3.2-The-Omega-Directive-24B-Unslop-v2.0`<br />Omega Directive 24B Unslop v2.0 | llama | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.5 / output: 0.5 | 2025-12-08 |
| `Salesforce/Llama-xLAM-2-70b-fc-r`<br />Llama-xLAM-2 70B fc-r | llama | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 2.5 / output: 2.5 | 2025-04-13 |
| `Sao10K/L3-8B-Stheno-v3.2`<br />Sao10K Stheno 8b | llama | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.2006 / output: 0.2006 | 2024-11-29 |
| `Sao10K/L3.1-70B-Euryale-v2.2`<br />Llama 3.1 70B Euryale | llama | text | text | - | context: 20480 / input: 20480 / output: 16384 | input: 0.306 / output: 0.357 | 2024-07-23 |
| `Sao10K/L3.1-70B-Hanami-x1`<br />Llama 3.1 70B Hanami | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-23 |
| `Sao10K/L3.3-70B-Euryale-v2.3`<br />Llama 3.3 70B Euryale | llama | text | text | - | context: 20480 / input: 20480 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `sarvam-105b`<br />Sarvam 105B | - | text | text | tools, reasoning | context: 131072 / input: 131072 / output: 4096 | input: 0.045 / output: 0.177 / cache_read: 0.028 | 2026-05-12 |
| `sarvam-30b`<br />Sarvam 30B | - | text | text | tools, reasoning | context: 65536 / input: 65536 / output: 4096 | input: 0.028 / output: 0.111 / cache_read: 0.017 | 2026-05-12 |
| `shisa-ai/shisa-v2-llama3.3-70b`<br />Shisa V2 Llama 3.3 70B | llama | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.5 / output: 0.5 | 2025-07-26 |
| `shisa-ai/shisa-v2.1-llama3.3-70b`<br />Shisa V2.1 Llama 3.3 70B | llama | text | text | - | context: 32768 / input: 32768 / output: 4096 | input: 0.5 / output: 0.5 | 2024-12-06 |
| `sonar`<br />Perplexity Simple | - | text | text | - | context: 127000 / input: 127000 / output: 128000 | input: 1.003 / output: 1.003 | 2025-02-19 |
| `sonar-deep-research`<br />Perplexity Deep Research | - | text | text | - | context: 60000 / input: 60000 / output: 128000 | input: 3.4 / output: 13.6 | 2025-02-25 |
| `sonar-pro`<br />Perplexity Pro | - | text | text | - | context: 200000 / input: 200000 / output: 128000 | input: 2.992 / output: 14.994 | 2025-02-19 |
| `sonar-reasoning-pro`<br />Perplexity Reasoning Pro | - | text | text | reasoning | context: 127000 / input: 127000 / output: 128000 | input: 2.006 / output: 7.9985 | 2025-02-19 |
| `soob3123/amoral-gemma3-27B-v2`<br />Amoral Gemma3 27B v2 | gemma | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.3 / output: 0.3 | 2025-05-23 |
| `soob3123/GrayLine-Qwen3-8B`<br />Grayline Qwen3 8B | qwen | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.3 / output: 0.3 | 2025-09-25 |
| `soob3123/Veiled-Calla-12B`<br />Veiled Calla 12B | llama | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.3 / output: 0.3 | 2025-04-13 |
| `Steelskull/L3.3-Cu-Mai-R1-70b`<br />Llama 3.3 70B Cu Mai | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `Steelskull/L3.3-Electra-R1-70b`<br />Steelskull Electra R1 70b | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.69989 / output: 0.69989 | 2024-12-06 |
| `Steelskull/L3.3-MS-Evalebis-70b`<br />MS Evalebis 70b | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `Steelskull/L3.3-MS-Evayale-70B`<br />Evayale 70b  | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `Steelskull/L3.3-MS-Nevoria-70b`<br />Steelskull Nevoria 70b | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `Steelskull/L3.3-Nevoria-R1-70b`<br />Steelskull Nevoria R1 70b | llama | text | text | - | context: 16384 / input: 16384 / output: 16384 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-12-06 |
| `step-2-16k-exp`<br />Step-2 16k Exp | - | text | text | - | context: 16000 / input: 16000 / output: 8192 | input: 7.004 / output: 19.992 | 2024-07-05 |
| `step-2-mini`<br />Step-2 Mini | - | text | text | - | context: 8000 / input: 8000 / output: 4096 | input: 0.2006 / output: 0.408 | 2024-07-05 |
| `step-3`<br />Step-3 | - | image, text | text | - | context: 65536 / input: 65536 / output: 8192 | input: 0.2499 / output: 0.6494 | 2025-07-31 |
| `step-r1-v-mini`<br />Step R1 V Mini | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 2.5 / output: 11 | 2025-04-08 |
| `stepfun-ai/step-3.5-flash`<br />Step 3.5 Flash | step | text | text | reasoning | context: 256000 / input: 256000 / output: 256000 | input: 0.2 / output: 0.5 | 2026-02-02 |
| `stepfun-ai/step-3.5-flash-2603`<br />Step 3.5 Flash 2603 | - | text | text | reasoning | context: 256000 / input: 256000 / output: 256000 | input: 0.1 / output: 0.3 | 2026-04-14 |
| `stepfun/step-3.7-flash:thinking`<br />Step 3.7 Flash Thinking | - | image, text, video | text | tools, schema, reasoning | context: 256000 / input: 256000 / output: 256000 | input: 0.2 / output: 1.15 / cache_read: 0.04 | 2026-05-29 |
| `TEE/deepseek-v3.1`<br />DeepSeek V3.1 TEE | deepseek | text | text | - | context: 164000 / input: 164000 / output: 8192 | input: 1 / output: 2.5 | 2025-08-21 |
| `TEE/deepseek-v3.2`<br />DeepSeek V3.2 TEE | deepseek | text | text | - | context: 164000 / input: 164000 / output: 65536 | input: 0.5 / output: 1 | 2025-12-01 |
| `TEE/deepseek-v4-pro`<br />DeepSeek V4 Pro TEE | - | text | text | tools, schema, reasoning | context: 800000 / input: 800000 / output: 65536 | input: 1.5 / output: 5.25 / cache_read: 0.15 | 2026-04-25 |
| `TEE/deepseek-v4-pro:thinking`<br />DeepSeek V4 Pro Thinking TEE | - | text | text | tools, schema, reasoning | context: 800000 / input: 800000 / output: 65536 | input: 1.5 / output: 5.25 / cache_read: 0.15 | 2026-04-29 |
| `TEE/gemma-3-27b-it`<br />Gemma 3 27B TEE | gemma | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.2 / output: 0.8 | 2025-03-10 |
| `TEE/gemma-4-26b-a4b-uncensored`<br />Gemma 4 26B A4B Uncensored TEE | - | image, text | text | tools, schema | context: 65536 / input: 65536 / output: 65536 | input: 0.15 / output: 0.7 | 2026-05-23 |
| `TEE/gemma-4-31b-it`<br />Gemma 4 31B IT TEE | - | text | text | tools, reasoning | context: 262144 / input: 262144 / output: 262144 | input: 0.15 / output: 0.46 | 2026-05-26 |
| `TEE/gemma4-31b`<br />Gemma 4 31B | - | text | text | schema | context: 262144 / input: 262144 / output: 131072 | input: 0.45 / output: 1 | 2026-04-04 |
| `TEE/gemma4-31b:thinking`<br />Gemma 4 31B Thinking TEE | - | text | text | schema, reasoning | context: 262144 / input: 262144 / output: 131072 | input: 0.45 / output: 1 | 2026-05-02 |
| `TEE/glm-4.7`<br />GLM 4.7 TEE | glm | text | text | - | context: 131000 / input: 131000 / output: 65535 | input: 0.85 / output: 3.3 | 2026-01-29 |
| `TEE/glm-4.7-flash`<br />GLM 4.7 Flash TEE | glm-flash | text | text | - | context: 203000 / input: 203000 / output: 65535 | input: 0.15 / output: 0.5 | 2026-01-19 |
| `TEE/glm-5`<br />GLM 5 TEE | glm | text | text | - | context: 203000 / input: 203000 / output: 65535 | input: 1.2 / output: 3.5 | 2026-02-11 |
| `TEE/glm-5.1`<br />GLM 5.1 TEE | - | text | text | - | context: 202752 / input: 202752 / output: 65535 | input: 1.5 / output: 5.25 / cache_read: 0.3 | 2026-04-20 |
| `TEE/glm-5.1-thinking`<br />GLM 5.1 Thinking TEE | - | text | text | tools, schema, reasoning | context: 202752 / input: 202752 / output: 65535 | input: 1.5 / output: 5.25 / cache_read: 0.3 | 2026-04-20 |
| `TEE/gpt-oss-120b`<br />GPT-OSS 120B TEE | gpt-oss | text | text | - | context: 131072 / input: 131072 / output: 16384 | input: 2 / output: 2 | 2025-08-05 |
| `TEE/gpt-oss-20b`<br />GPT-OSS 20B TEE | gpt-oss | text | text | - | context: 131072 / input: 131072 / output: 8192 | input: 0.2 / output: 0.8 | 2025-08-05 |
| `TEE/kimi-k2.5`<br />Kimi K2.5 TEE | kimi-k2 | text | text | - | context: 128000 / input: 128000 / output: 65535 | input: 0.3 / output: 1.9 | 2026-01-29 |
| `TEE/kimi-k2.5-thinking`<br />Kimi K2.5 Thinking TEE | kimi-thinking | text | text | reasoning | context: 128000 / input: 128000 / output: 65535 | input: 0.3 / output: 1.9 | 2026-01-29 |
| `TEE/kimi-k2.6`<br />Kimi K2.6 TEE | - | image, text | text | tools | context: 262144 / input: 262144 / output: 65536 | input: 1.5 / output: 5.25 / cache_read: 0.375 | 2026-04-21 |
| `TEE/llama3-3-70b`<br />Llama 3.3 70B | llama | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 2 / output: 2 | 2025-07-03 |
| `TEE/minimax-m2.5`<br />MiniMax M2.5 TEE | - | text | text | tools, schema, reasoning | context: 196608 / input: 196608 / output: 131072 | input: 0.2 / output: 1.38 | 2026-04-20 |
| `TEE/qwen2.5-vl-72b-instruct`<br />Qwen2.5 VL 72B TEE | qwen | image, text | text | - | context: 65536 / input: 65536 / output: 8192 | input: 0.7 / output: 0.7 | 2025-02-01 |
| `TEE/qwen3-30b-a3b-instruct-2507`<br />Qwen3 30B A3B Instruct 2507 TEE | qwen | text | text | - | context: 262000 / input: 262000 / output: 32768 | input: 0.15 / output: 0.44999999999999996 | 2025-07-29 |
| `TEE/qwen3.5-122b-a10b`<br />Qwen3.5 122B A10B TEE | - | text | text | tools, reasoning | context: 262144 / input: 262144 / output: 262144 | input: 0.46 / output: 3.68 | 2026-05-26 |
| `TEE/qwen3.5-27b`<br />Qwen3.5 27B TEE | - | image, text, video | text | - | context: 262144 / input: 262144 / output: 65536 | input: 0.3 / output: 2.4 | 2026-03-13 |
| `TEE/qwen3.5-397b-a17b`<br />Qwen3.5 397B A17B TEE | qwen | text | text | - | context: 258048 / input: 258048 / output: 65536 | input: 0.6 / output: 3.6 | 2026-02-28 |
| `TEE/qwen3.6-35b-a3b-uncensored`<br />Qwen3.6 35B A3B Uncensored TEE | - | image, text | text | tools, schema, reasoning | context: 131072 / input: 131072 / output: 131072 | input: 0.3 / output: 1.5 | 2026-05-23 |
| `tencent/Hunyuan-MT-7B`<br />Hunyuan MT 7B | hunyuan | text | text | - | context: 8192 / input: 8192 / output: 8192 | input: 10 / output: 20 | 2025-09-18 |
| `tencent/hy3-preview`<br />Tencent: Hy3 preview | - | text | text | - | context: 262144 / input: 262144 / output: 262144 | input: 0.066 / output: 0.26 / cache_read: 0.029 | 2026-04-23 |
| `TheDrummer/Anubis-70B-v1`<br />Anubis 70B v1 | - | text | text | - | context: 65536 / input: 65536 / output: 16384 | input: 0.31 / output: 0.31 | 2024-01-01 |
| `TheDrummer/Anubis-70B-v1.1`<br />Anubis 70B v1.1 | - | text | text | - | context: 131072 / input: 131072 / output: 16384 | input: 0.31 / output: 0.31 | 2024-01-01 |
| `TheDrummer/Cydonia-24B-v2`<br />The Drummer Cydonia 24B v2 | - | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.1003 / output: 0.1207 | 2025-02-17 |
| `TheDrummer/Cydonia-24B-v4`<br />The Drummer Cydonia 24B v4 | - | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.2006 / output: 0.2414 | 2025-07-22 |
| `TheDrummer/Cydonia-24B-v4.1`<br />The Drummer Cydonia 24B v4.1 | - | text | text | - | context: 16384 / input: 16384 / output: 32768 | input: 0.1003 / output: 0.1207 | 2025-08-19 |
| `TheDrummer/Cydonia-24B-v4.3`<br />The Drummer Cydonia 24B v4.3 | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.1003 / output: 0.1207 | 2025-12-25 |
| `TheDrummer/Magidonia-24B-v4.3`<br />The Drummer Magidonia 24B v4.3 | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0.1003 / output: 0.1207 | 2025-12-25 |
| `TheDrummer/Rocinante-12B-v1.1`<br />Rocinante 12b | - | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.408 / output: 0.595 | 2024-01-01 |
| `TheDrummer/Skyfall-31B-v4.2`<br />TheDrummer Skyfall 31B v4.2 | - | pdf, text | text | - | context: 131072 / input: 131072 / output: 16384 | input: 0.55 / output: 0.8 | 2026-03-26 |
| `TheDrummer/skyfall-36b-v2`<br />TheDrummer Skyfall 36B V2 | - | pdf, text | text | - | context: 64000 / input: 64000 / output: 32768 | input: 0.493 / output: 0.493 | 2025-03-10 |
| `TheDrummer/UnslopNemo-12B-v4.1`<br />UnslopNemo 12b v4 | - | pdf, text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.493 / output: 0.493 | 2024-01-01 |
| `THUDM/GLM-4-32B-0414`<br />GLM 4 32B 0414 | glm | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.2 / output: 0.2 | 2025-04-14 |
| `THUDM/GLM-4-9B-0414`<br />GLM 4 9B 0414 | glm | text | text | - | context: 32000 / input: 32000 / output: 8000 | input: 0.2 / output: 0.2 | 2025-04-14 |
| `THUDM/GLM-Z1-32B-0414`<br />GLM Z1 32B 0414 | glm-z | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.2 / output: 0.2 | 2025-04-15 |
| `THUDM/GLM-Z1-9B-0414`<br />GLM Z1 9B 0414 | glm-z | text | text | - | context: 32000 / input: 32000 / output: 8000 | input: 0.2 / output: 0.2 | 2025-04-14 |
| `Tongyi-Zhiwen/QwenLong-L1-32B`<br />QwenLong L1 32B | qwen | text | text | - | context: 128000 / input: 128000 / output: 40960 | input: 0.13999999999999999 / output: 0.6 | 2025-01-25 |
| `Unbabel/M-Prometheus-14B`<br />M-Prometheus 14B | - | text | text | - | context: 32768 / input: 32768 / output: 8192 | input: 0.2 / output: 0.2 | 2026-05-29 |
| `undi95/remm-slerp-l2-13b`<br />ReMM SLERP 13B | llama | pdf, text | text | - | context: 6144 / input: 6144 / output: 4096 | input: 0.7989999999999999 / output: 1.2069999999999999 | 2025-01-01 |
| `universal-summarizer`<br />Universal Summarizer | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 30 / output: 30 | 2024-01-01 |
| `unsloth/gemma-3-12b-it`<br />Gemma 3 12B IT | unsloth | pdf, text | text | - | context: 128000 / input: 128000 / output: 131072 | input: 0.272 / output: 0.272 | 2025-03-10 |
| `unsloth/gemma-3-27b-it`<br />Gemma 3 27B IT | unsloth | pdf, text | text | - | context: 128000 / input: 128000 / output: 96000 | input: 0.2992 / output: 0.2992 | 2025-03-10 |
| `unsloth/gemma-3-4b-it`<br />Gemma 3 4B IT | unsloth | pdf, text | text | - | context: 128000 / input: 128000 / output: 8192 | input: 0.2006 / output: 0.2006 | 2025-03-10 |
| `upstage/solar-pro-3`<br />Solar Pro 3 | - | text | text | - | context: 128000 / input: 128000 / output: 128000 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-03-03 |
| `v0-1.0-md`<br />v0 1.0 MD | - | text | text | - | context: 200000 / input: 200000 / output: 64000 | input: 3 / output: 15 | 2025-07-04 |
| `v0-1.5-lg`<br />v0 1.5 LG | - | text | text | - | context: 1000000 / input: 1000000 / output: 64000 | input: 15 / output: 75 | 2025-07-04 |
| `v0-1.5-md`<br />v0 1.5 MD | - | text | text | - | context: 200000 / input: 200000 / output: 64000 | input: 3 / output: 15 | 2025-07-04 |
| `venice-uncensored`<br />Venice Uncensored | - | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0.4 / output: 0.4 | 2025-02-24 |
| `venice-uncensored:web`<br />Venice Uncensored Web | - | text | text | - | context: 80000 / input: 80000 / output: 16384 | input: 0.4 / output: 0.4 | 2024-05-01 |
| `VongolaChouko/Starcannon-Unleashed-12B-v1.0`<br />Mistral Nemo Starcannon 12b v1 | mistral-nemo | text | text | - | context: 16384 / input: 16384 / output: 8192 | input: 0.49299999999999994 / output: 0.49299999999999994 | 2024-07-01 |
| `x-ai/grok-4.20`<br />Grok 4.20 | - | image, text | text | tools, schema, reasoning | context: 2000000 / input: 2000000 / output: 131072 | input: 2 / output: 6 | 2026-03-31 |
| `x-ai/grok-4.20-multi-agent`<br />Grok 4.20 Multi-Agent | - | image, text | text | tools, schema, reasoning | context: 2000000 / input: 2000000 / output: 131072 | input: 2 / output: 6 | 2026-03-31 |
| `x-ai/grok-4.3`<br />Grok 4.3 | - | image, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-30 |
| `x-ai/grok-build-0.1`<br />Grok Build 0.1 | - | image, text | text | tools, schema, reasoning | context: 256000 / input: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-05-20 |
| `x-ai/grok-latest`<br />Grok Latest | - | image, text | text | tools, schema, reasoning | context: 1000000 / input: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-05-03 |
| `xiaomi/mimo-v2-flash`<br />MiMo V2 Flash | mimo | text | text | reasoning | context: 256000 / input: 256000 / output: 32768 | input: 0.102 / output: 0.306 | 2025-12-17 |
| `xiaomi/mimo-v2-flash-original`<br />MiMo V2 Flash Original | mimo | text | text | reasoning | context: 256000 / input: 256000 / output: 32768 | input: 0.102 / output: 0.306 | 2025-12-17 |
| `xiaomi/mimo-v2-flash-thinking`<br />MiMo V2 Flash (Thinking) | mimo | text | text | reasoning | context: 256000 / input: 256000 / output: 32768 | input: 0.102 / output: 0.306 | 2025-12-17 |
| `xiaomi/mimo-v2-flash-thinking-original`<br />MiMo V2 Flash (Thinking) Original | mimo | text | text | reasoning | context: 256000 / input: 256000 / output: 32768 | input: 0.102 / output: 0.306 | 2025-12-17 |
| `xiaomi/mimo-v2-omni`<br />MiMo V2 Omni | - | audio, image, text, video | text | tools, reasoning | context: 262144 / input: 262144 / output: 65536 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-19 |
| `xiaomi/mimo-v2-pro`<br />MiMo V2 Pro | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-19 |
| `xiaomi/mimo-v2.5`<br />MiMo V2.5 | - | image, text, video | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 131072 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-22 |
| `xiaomi/mimo-v2.5-pro`<br />MiMo V2.5 Pro | - | text | text | tools, schema, reasoning | context: 1048576 / input: 1048576 / output: 131072 | input: 0.435 / output: 0.87 / cache_read: 0.0036 | 2026-04-22 |
| `yi-large`<br />Yi Large | - | text | text | - | context: 32000 / input: 32000 / output: 4096 | input: 3.196 / output: 3.196 | 2024-05-13 |
| `yi-lightning`<br />Yi Lightning | - | text | text | - | context: 12000 / input: 12000 / output: 4096 | input: 0.2006 / output: 0.2006 | 2024-10-16 |
| `yi-medium-200k`<br />Yi Medium 200k | - | text | text | - | context: 200000 / input: 200000 / output: 4096 | input: 2.499 / output: 2.499 | 2024-03-01 |
| `z-ai/glm-4.5v`<br />GLM 4.5V | glmv | image, text | text | reasoning | context: 64000 / input: 64000 / output: 96000 | input: 0.6 / output: 1.7999999999999998 | 2025-11-22 |
| `z-ai/glm-4.5v:thinking`<br />GLM 4.5V Thinking | glmv | image, text | text | reasoning | context: 64000 / input: 64000 / output: 96000 | input: 0.6 / output: 1.7999999999999998 | 2025-11-22 |
| `z-ai/glm-4.6`<br />GLM 4.6 | glm | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 65535 | input: 0.4 / output: 1.5 | 2025-09-30 |
| `z-ai/glm-4.6:thinking`<br />GLM 4.6 Thinking | glm | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 65535 | input: 0.4 / output: 1.5 | 2025-09-29 |
| `z-ai/glm-5-turbo`<br />GLM 5 Turbo | - | text | text | tools, schema | context: 202800 / input: 202800 / output: 131072 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-03-15 |
| `z-ai/glm-5v-turbo`<br />GLM 5V Turbo | - | image, text | text | tools, schema | context: 202800 / input: 202800 / output: 131100 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-01 |
| `z-ai/glm-5v-turbo:thinking`<br />GLM 5V Turbo Thinking | - | image, text | text | tools, schema, reasoning | context: 202800 / input: 202800 / output: 131100 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-02 |
| `zai-org/glm-4.5`<br />GLM 4.5 | - | text | text | - | context: 128000 / input: 128000 / output: 65536 | input: 0.3 / output: 1.3 | 2025-04-15 |
| `zai-org/GLM-4.5-Air`<br />GLM 4.5 Air | - | text | text | tools, schema | context: 128000 / input: 128000 / output: 98304 | input: 0.12 / output: 0.8 | 2025-04-15 |
| `zai-org/GLM-4.5-Air:thinking`<br />GLM 4.5 Air (Thinking) | - | text | text | tools, schema, reasoning | context: 128000 / input: 128000 / output: 98304 | input: 0.12 / output: 0.8 | 2024-01-01 |
| `zai-org/GLM-4.5:thinking`<br />GLM 4.5 (Thinking) | - | text | text | reasoning | context: 128000 / input: 128000 / output: 65536 | input: 0.3 / output: 1.3 | 2024-01-01 |
| `zai-org/glm-4.6-original`<br />GLM 4.6 Original | - | text | text | reasoning | context: 256000 / input: 256000 / output: 65535 | input: 0.35 / output: 1.4 | 2025-12-11 |
| `zai-org/GLM-4.6-turbo`<br />GLM 4.6 Turbo | - | text | text | - | context: 200000 / input: 200000 / output: 204800 | input: 1 / output: 3 | 2025-10-02 |
| `zai-org/GLM-4.6-turbo:thinking`<br />GLM 4.6 Turbo (Thinking) | - | text | text | reasoning | context: 200000 / input: 200000 / output: 204800 | input: 1 / output: 3 | 2025-10-02 |
| `zai-org/glm-4.6v`<br />GLM 4.6V | - | image, text | text | - | context: 128000 / input: 128000 / output: 24000 | input: 0.3 / output: 0.9 | 2025-12-11 |
| `zai-org/glm-4.6v-flash-original`<br />GLM 4.6V Flash | - | image, text, video | text | - | context: 128000 / input: 128000 / output: 24000 | input: 0.1 / output: 0.4 | 2025-12-08 |
| `zai-org/glm-4.6v-original`<br />GLM 4.6V Original | - | image, text | text | - | context: 128000 / input: 128000 / output: 24000 | input: 0.6 / output: 0.9 | 2025-12-08 |
| `zai-org/glm-4.7`<br />GLM 4.7 | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 128000 | input: 0.15 / output: 0.8 | 2026-01-29 |
| `zai-org/glm-4.7-flash`<br />GLM 4.7 Flash | glm-flash | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 128000 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai-org/glm-4.7-flash-original`<br />GLM 4.7 Flash Original | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 128000 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai-org/glm-4.7-flash-original:thinking`<br />GLM 4.7 Flash Original Thinking | - | text | text | reasoning | context: 200000 / input: 200000 / output: 128000 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai-org/glm-4.7-flash:thinking`<br />GLM 4.7 Flash Thinking | - | text | text | reasoning | context: 200000 / input: 200000 / output: 128000 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai-org/glm-4.7-original`<br />GLM 4.7 Original | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 65535 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-12-22 |
| `zai-org/glm-4.7-original:thinking`<br />GLM 4.7 Original Thinking | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 65535 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-12-22 |
| `zai-org/glm-4.7:thinking`<br />GLM 4.7 Thinking | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 65535 | input: 0.2 / output: 0.8 | 2025-12-22 |
| `zai-org/glm-5`<br />GLM 5 | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 128000 | input: 0.3 / output: 2.55 | 2026-02-11 |
| `zai-org/glm-5-original`<br />GLM 5 Original | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 128000 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-11 |
| `zai-org/glm-5-original:thinking`<br />GLM 5 Original Thinking | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 128000 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-11 |
| `zai-org/glm-5:thinking`<br />GLM 5 Thinking | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 128000 | input: 0.3 / output: 2.55 | 2026-02-11 |
| `zai-org/glm-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 131072 | input: 0.3 / output: 2.55 | 2026-03-27 |
| `zai-org/glm-5.1:thinking`<br />GLM 5.1 Thinking | glm | text | text | tools, schema, reasoning, open weights | context: 200000 / input: 200000 / output: 131072 | input: 0.3 / output: 2.55 | 2026-03-27 |
| `zai-org/glm-latest`<br />GLM Latest | - | text | text | tools, schema, reasoning | context: 200000 / input: 200000 / output: 131072 | input: 0.75 / output: 2.6 / cache_read: 0.15 | 2026-05-03 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

