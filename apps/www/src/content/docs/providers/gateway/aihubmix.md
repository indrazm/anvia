---
title: "AIHubMix"
description: "Review AIHubMix connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1003
  label: "AIHubMix"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `AIHUBMIX_API_KEY` |
| Provider docs | [https://docs.aihubmix.com](https://docs.aihubmix.com) |
| Models | 53 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 34 / 53 models |
| Tools | 53 / 53 models |
| Structured output | 47 / 53 models |
| Reasoning | 53 / 53 models |
| Temperature | 40 / 53 models |
| Open weights | 21 / 53 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `alicloud-deepseek-v4-flash`<br />DeepSeek V4 Flash (Alibaba Cloud) | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `alicloud-deepseek-v4-pro`<br />DeepSeek V4 Pro (Alibaba Cloud) | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 1.69 / output: 3.38 / cache_read: 0.13 | 2026-04-24 |
| `alicloud-glm-5.1`<br />GLM-5.1 (Alibaba Cloud) | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.84 / output: 3.38 / cache_read: 0.169 / cache_write: 1.05625 | 2026-03-27 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-6-think`<br />Claude Opus 4.6 Thinking | claude-opus | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-7-think`<br />Claude Opus 4.7 Thinking | claude-opus | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `claude-sonnet-4-6-think`<br />Claude Sonnet 4.6 Thinking | claude-sonnet | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `coding-glm-5.1`<br />Coding GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.06 / output: 0.22 / cache_read: 0.013 | 2026-04-11 |
| `coding-glm-5.1-free`<br />Coding GLM 5.1 (free) | glm-free | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0 / output: 0 | 2026-04-11 |
| `coding-minimax-m2.7`<br />Coding MiniMax M2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 128100 | input: 0.2 / output: 0.2 | 2026-03-18 |
| `coding-minimax-m2.7-free`<br />Coding MiniMax M2.7 (Free) | minimax-free | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 128100 | input: 0 / output: 0 | 2026-03-18 |
| `coding-minimax-m2.7-highspeed`<br />Coding MiniMax M2.7 Highspeed | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 128100 | input: 0.2 / output: 0.2 | 2026-03-18 |
| `coding-xiaomi-mimo-v2.5`<br />Coding Xiaomi MiMo-V2.5 | mimo-v2.5 | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.08 / output: 0.4 / cache_read: 0.016 | 2026-05-13 |
| `coding-xiaomi-mimo-v2.5-pro`<br />Coding Xiaomi MiMo-V2.5-Pro | mimo-v2.5-pro | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.2 / output: 0.6 / cache_read: 0.04 | 2026-05-13 |
| `deep-deepseek-v4-flash`<br />DeepSeek V4 Flash (DeepSeek) | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.154 / output: 0.308 / cache_read: 0.0308 | 2026-04-24 |
| `deep-deepseek-v4-pro`<br />DeepSeek V4 Pro (DeepSeek) | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.478 / output: 0.956 / cache_read: 0.004302 | 2026-04-24 |
| `doubao-seed-2-0-code-preview`<br />Doubao Seed 2.0 Code Preview | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.48 / output: 2.41 / cache_read: 0.09644 | 2026-02-14 |
| `doubao-seed-2-0-lite-260428`<br />Doubao Seed 2.0 Lite 260428 | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.08 / output: 0.51 / cache_read: 0.01692 / input_audio: 1.269 | 2026-04-28 |
| `doubao-seed-2-0-mini-260428`<br />Doubao Seed 2.0 Mini 260428 | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.03 / output: 0.28 / cache_read: 0.00564 / input_audio: 0.423 | 2026-04-28 |
| `doubao-seed-2-0-pro`<br />Doubao Seed 2.0 Pro | seed | image, text, video | text | tools, schema, reasoning, temperature | context: 256000 / output: 128000 | input: 0.48 / output: 2.41 / cache_read: 0.09644 | 2026-02-14 |
| `gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-05 |
| `gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-05 |
| `gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / cache_write: 1 | 2026-05-07 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gemini-3.1-pro-preview-customtools`<br />Gemini 3.1 Pro Preview Custom Tools | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 128000 | input: 1.1268 / output: 3.9438 / cache_read: 0.2817 | 2026-06-13 |
| `glm-5v-turbo`<br />GLM 5 Vision Turbo | glmv | image, text, video | text | tools, schema, reasoning, temperature | context: 200000 / output: 128000 | input: 0.7042 / output: 3.09848 / cache_read: 0.169008 | 2026-05-09 |
| `gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.13 | 2025-11-13 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `grok-4.3`<br />Grok 4.3 | grok | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-05-01 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `minimax-m2.7`<br />MiniMax M2.7 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 128000 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 991000 / output: 64000 | input: 0.17 / output: 1.01 / cache_read: 0.0169 / cache_write: 0.21125 | 2026-04-02 |
| `qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen3.6 | text | text | tools, schema, reasoning, temperature | context: 240000 / output: 64000 | input: 1.27 / output: 7.61 / cache_read: 0.1268 / cache_write: 1.585 | 2026-05-09 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 991000 / output: 64000 | input: 0.28 / output: 1.69 / cache_read: 0.0282 / cache_write: 0.3525 | 2026-05-09 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, schema, reasoning, temperature | context: 991000 / output: 64000 | input: 1.69 / output: 5.07 / cache_read: 0.169 / cache_write: 2.1125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | text | text | tools, schema, reasoning, temperature | context: 991000 / output: 64000 | input: 0.282 / output: 1.128 / cache_read: 0.0564 / cache_write: 0.3525 | 2026-06-02 |
| `xiaomi-mimo-v2.5`<br />Xiaomi MiMo-V2.5 | mimo-v2.5 | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.44 / output: 2.2 / cache_read: 0.088 | 2026-05-13 |
| `xiaomi-mimo-v2.5-free`<br />Xiaomi MiMo-V2.5 (free) | mimo-v2.5 | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-05-13 |
| `xiaomi-mimo-v2.5-pro`<br />Xiaomi MiMo-V2.5-Pro | mimo-v2.5-pro | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1.1 / output: 3.3 / cache_read: 0.22 | 2026-05-13 |
| `xiaomi-mimo-v2.5-pro-free`<br />Xiaomi MiMo-V2.5-Pro (free) | mimo-v2.5-pro | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-05-13 |
| `zai-glm-5.1`<br />GLM-5.1 (Z.ai) | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.845 / output: 3.38 / cache_read: 0.183112 | 2026-03-27 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

