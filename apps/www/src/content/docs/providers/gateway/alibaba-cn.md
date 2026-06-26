---
title: "Alibaba (China)"
description: "Use Alibaba (China) through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1005
  label: "Alibaba (China)"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://dashscope.aliyuncs.com/compatible-mode/v1 |
| Environment | `DASHSCOPE_API_KEY` |
| Provider docs | [https://www.alibabacloud.com/help/en/model-studio/models](https://www.alibabacloud.com/help/en/model-studio/models) |
| Models | 83 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
  completionApi: "chat",
});

const model = client.completionModel("deepseek-r1");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | audio, text |
| Attachments | 3 / 83 models |
| Tools | 78 / 83 models |
| Structured output | 12 / 83 models |
| Reasoning | 44 / 83 models |
| Temperature | 81 / 83 models |
| Open weights | 34 / 83 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-r1`<br />DeepSeek R1 | deepseek-thinking | text | text | tools, reasoning, temperature | context: 131072 / output: 16384 | input: 0.574 / output: 2.294 | 2025-01-01 |
| `deepseek-r1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | tools, reasoning, temperature | context: 131072 / output: 16384 | input: 0.574 / output: 2.294 | 2025-05-28 |
| `deepseek-r1-distill-llama-70b`<br />DeepSeek R1 Distill Llama 70B | deepseek-thinking | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0.287 / output: 0.861 | 2025-01-01 |
| `deepseek-r1-distill-llama-8b`<br />DeepSeek R1 Distill Llama 8B | deepseek-thinking | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0 / output: 0 | 2025-01-01 |
| `deepseek-r1-distill-qwen-1-5b`<br />DeepSeek R1 Distill Qwen 1.5B | qwen | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0 / output: 0 | 2025-01-01 |
| `deepseek-r1-distill-qwen-14b`<br />DeepSeek R1 Distill Qwen 14B | qwen | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0.144 / output: 0.431 | 2025-01-01 |
| `deepseek-r1-distill-qwen-32b`<br />DeepSeek R1 Distill Qwen 32B | qwen | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0.287 / output: 0.861 | 2025-01-01 |
| `deepseek-r1-distill-qwen-7b`<br />DeepSeek R1 Distill Qwen 7B | qwen | text | text | tools, reasoning, temperature | context: 32768 / output: 16384 | input: 0.072 / output: 0.144 | 2025-01-01 |
| `deepseek-v3`<br />DeepSeek V3 | deepseek | text | text | tools, temperature | context: 65536 / output: 8192 | input: 0.287 / output: 1.147 | 2024-12-01 |
| `deepseek-v3-1`<br />DeepSeek V3.1 | deepseek | text | text | tools, temperature | context: 131072 / output: 65536 | input: 0.574 / output: 1.721 | 2025-01-01 |
| `deepseek-v3-2-exp`<br />DeepSeek V3.2 Exp | deepseek | text | text | tools, temperature | context: 131072 / output: 65536 | input: 0.287 / output: 0.431 | 2025-01-01 |
| `deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature | context: 202752 / output: 16384 | input: 0.86 / output: 3.15 | 2026-02-11 |
| `glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 128000 | input: 0.87 / output: 3.48 / cache_read: 0.17 | 2026-04-14 |
| `kimi-k2-thinking`<br />Moonshot Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.574 / output: 2.294 | 2025-11-06 |
| `kimi-k2.5`<br />Moonshot Kimi K2.5 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 32768 | input: 0.574 / output: 2.411 | 2026-01-27 |
| `kimi-k2.6`<br />Moonshot Kimi K2.6 | kimi-k2 | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 16384 | input: 0.929 / output: 3.858 | 2026-04-21 |
| `kimi/kimi-k2.5` | kimi-k2 | image, text, video | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-27 |
| `MiniMax-M2.5` | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-02-12 |
| `MiniMax/MiniMax-M2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `moonshot-kimi-k2-instruct`<br />Moonshot Kimi K2 Instruct | kimi-k2 | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.574 / output: 2.294 | 2025-01-01 |
| `qvq-max`<br />QVQ Max | qvq | image, text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 1.147 / output: 4.588 | 2025-03-25 |
| `qwen-deep-research`<br />Qwen Deep Research | qwen | text | text | tools, temperature | context: 1000000 / output: 32768 | input: 7.742 / output: 23.367 | 2024-01 |
| `qwen-doc-turbo`<br />Qwen Doc Turbo | qwen | text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.087 / output: 0.144 | 2024-01 |
| `qwen-flash`<br />Qwen Flash | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.022 / output: 0.216 | 2025-07-28 |
| `qwen-long`<br />Qwen Long | qwen | text | text | tools, temperature | context: 10000000 / output: 8192 | input: 0.072 / output: 0.287 | 2025-01-25 |
| `qwen-math-plus`<br />Qwen Math Plus | qwen | text | text | tools, temperature | context: 4096 / output: 3072 | input: 0.574 / output: 1.721 | 2024-09-19 |
| `qwen-math-turbo`<br />Qwen Math Turbo | qwen | text | text | tools, temperature | context: 4096 / output: 3072 | input: 0.287 / output: 0.861 | 2024-09-19 |
| `qwen-max`<br />Qwen Max | qwen | text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.345 / output: 1.377 | 2025-01-25 |
| `qwen-mt-plus`<br />Qwen-MT Plus | qwen | text | text | temperature | context: 16384 / output: 8192 | input: 0.259 / output: 0.775 | 2025-01 |
| `qwen-mt-turbo`<br />Qwen-MT Turbo | qwen | text | text | temperature | context: 16384 / output: 8192 | input: 0.101 / output: 0.28 | 2025-01 |
| `qwen-omni-turbo`<br />Qwen-Omni Turbo | qwen | audio, image, text, video | audio, text | tools, temperature | context: 32768 / output: 2048 | input: 0.058 / output: 0.23 / input_audio: 3.584 / output_audio: 7.168 | 2025-03-26 |
| `qwen-omni-turbo-realtime`<br />Qwen-Omni Turbo Realtime | qwen | audio, image, text | audio, text | tools, temperature | context: 32768 / output: 2048 | input: 0.23 / output: 0.918 / input_audio: 3.584 / output_audio: 7.168 | 2025-05-08 |
| `qwen-plus`<br />Qwen Plus | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.115 / output: 0.287 / reasoning: 1.147 | 2025-09-11 |
| `qwen-plus-character`<br />Qwen Plus Character | qwen | text | text | tools, temperature | context: 32768 / output: 4096 | input: 0.115 / output: 0.287 | 2024-01 |
| `qwen-turbo`<br />Qwen Turbo | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 16384 | input: 0.044 / output: 0.087 / reasoning: 0.431 | 2025-07-15 |
| `qwen-vl-max`<br />Qwen-VL Max | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.23 / output: 0.574 | 2025-08-13 |
| `qwen-vl-ocr`<br />Qwen-VL OCR | qwen | image, text | text | temperature | context: 34096 / output: 4096 | input: 0.717 / output: 0.717 | 2025-04-13 |
| `qwen-vl-plus`<br />Qwen-VL Plus | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.115 / output: 0.287 | 2025-08-15 |
| `qwen2-5-14b-instruct`<br />Qwen2.5 14B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.144 / output: 0.431 | 2024-09 |
| `qwen2-5-32b-instruct`<br />Qwen2.5 32B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.287 / output: 0.861 | 2024-09 |
| `qwen2-5-72b-instruct`<br />Qwen2.5 72B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.574 / output: 1.721 | 2024-09 |
| `qwen2-5-7b-instruct`<br />Qwen2.5 7B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.072 / output: 0.144 | 2024-09 |
| `qwen2-5-coder-32b-instruct`<br />Qwen2.5-Coder 32B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.287 / output: 0.861 | 2024-11 |
| `qwen2-5-coder-7b-instruct`<br />Qwen2.5-Coder 7B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.144 / output: 0.287 | 2024-11 |
| `qwen2-5-math-72b-instruct`<br />Qwen2.5-Math 72B Instruct | qwen | text | text | tools, temperature, open weights | context: 4096 / output: 3072 | input: 0.574 / output: 1.721 | 2024-09 |
| `qwen2-5-math-7b-instruct`<br />Qwen2.5-Math 7B Instruct | qwen | text | text | tools, temperature, open weights | context: 4096 / output: 3072 | input: 0.144 / output: 0.287 | 2024-09 |
| `qwen2-5-omni-7b`<br />Qwen2.5-Omni 7B | qwen | audio, image, text, video | audio, text | tools, temperature, open weights | context: 32768 / output: 2048 | input: 0.087 / output: 0.345 / input_audio: 5.448 | 2024-12 |
| `qwen2-5-vl-72b-instruct`<br />Qwen2.5-VL 72B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 2.294 / output: 6.881 | 2024-09 |
| `qwen2-5-vl-7b-instruct`<br />Qwen2.5-VL 7B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.287 / output: 0.717 | 2024-09 |
| `qwen3-14b`<br />Qwen3 14B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.144 / output: 0.574 / reasoning: 1.434 | 2025-04 |
| `qwen3-235b-a22b`<br />Qwen3 235B-A22B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.287 / output: 1.147 / reasoning: 2.868 | 2025-04 |
| `qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.287 / output: 1.147 / reasoning: 2.868 | 2025-04 |
| `qwen3-8b`<br />Qwen3 8B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.072 / output: 0.287 / reasoning: 0.717 | 2025-04 |
| `qwen3-asr-flash`<br />Qwen3-ASR Flash | qwen | audio | text | - | context: 53248 / output: 4096 | input: 0.032 / output: 0.032 | 2025-09-08 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.216 / output: 0.861 | 2025-04 |
| `qwen3-coder-480b-a35b-instruct`<br />Qwen3-Coder 480B-A35B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.861 / output: 3.441 | 2025-04 |
| `qwen3-coder-flash`<br />Qwen3 Coder Flash | qwen | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 0.144 / output: 0.574 | 2025-07-28 |
| `qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, temperature, open weights | context: 1048576 / output: 65536 | input: 1 / output: 5 | 2025-07-23 |
| `qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 65536 | input: 0.861 / output: 3.441 | 2025-09-23 |
| `qwen3-next-80b-a3b-instruct`<br />Qwen3-Next 80B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.144 / output: 0.574 | 2025-09 |
| `qwen3-next-80b-a3b-thinking`<br />Qwen3-Next 80B-A3B (Thinking) | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.144 / output: 1.434 | 2025-09 |
| `qwen3-omni-flash`<br />Qwen3-Omni Flash | qwen | audio, image, text, video | audio, text | tools, reasoning, temperature | context: 65536 / output: 16384 | input: 0.058 / output: 0.23 / input_audio: 3.584 / output_audio: 7.168 | 2025-09-15 |
| `qwen3-omni-flash-realtime`<br />Qwen3-Omni Flash Realtime | qwen | audio, image, text | audio, text | tools, temperature | context: 65536 / output: 16384 | input: 0.23 / output: 0.918 / input_audio: 3.584 / output_audio: 7.168 | 2025-09-15 |
| `qwen3-vl-235b-a22b`<br />Qwen3-VL 235B-A22B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.286705 / output: 1.14682 / reasoning: 2.867051 | 2025-04 |
| `qwen3-vl-30b-a3b`<br />Qwen3-VL 30B-A3B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.108 / output: 0.431 / reasoning: 1.076 | 2025-04 |
| `qwen3-vl-plus`<br />Qwen3-VL Plus | qwen | image, text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0.143353 / output: 1.433525 / reasoning: 4.300576 | 2025-09-23 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | image, text, video | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.43 / output: 2.58 / reasoning: 2.58 | 2026-02-16 |
| `qwen3.5-flash`<br />Qwen3.5 Flash | qwen | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.172 / output: 1.72 / reasoning: 1.72 | 2026-02-23 |
| `qwen3.5-plus`<br />Qwen3.5 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.573 / output: 3.44 / reasoning: 3.44 | 2026-02-16 |
| `qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.1875 / output: 1.125 / cache_write: 0.234375 | 2026-04-27 |
| `qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen | text | text | tools, schema, reasoning, temperature | context: 245800 / output: 65536 | input: 1.32 / output: 7.9 / cache_read: 0.132 | 2026-04-21 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.5 / cache_write: 3.125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-06-02 |
| `qwq-32b`<br />QwQ 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.287 / output: 0.861 | 2024-12 |
| `qwq-plus`<br />QwQ Plus | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 0.23 / output: 0.574 | 2025-03-05 |
| `siliconflow/deepseek-r1-0528` | deepseek-thinking | text | text | tools, schema, reasoning, temperature | context: 163840 / output: 32768 | input: 0.5 / output: 2.18 | 2025-11-25 |
| `siliconflow/deepseek-v3-0324` | deepseek | text | text | tools, schema, temperature | context: 163840 / output: 163840 | input: 0.25 / output: 1 | 2025-11-25 |
| `siliconflow/deepseek-v3.1-terminus` | deepseek | text | text | tools, schema, reasoning, temperature | context: 163840 / output: 65536 | input: 0.27 / output: 1 | 2025-11-25 |
| `siliconflow/deepseek-v3.2` | deepseek | text | text | tools, schema, reasoning, temperature | context: 163840 / output: 65536 | input: 0.27 / output: 0.42 | 2025-12-03 |
| `tongyi-intent-detect-v3`<br />Tongyi Intent Detect V3 | yi | text | text | temperature | context: 8192 / output: 1024 | input: 0.058 / output: 0.144 | 2024-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

