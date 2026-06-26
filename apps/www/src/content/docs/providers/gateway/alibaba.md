---
title: "Alibaba"
description: "Use Alibaba through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1004
  label: "Alibaba"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://dashscope-intl.aliyuncs.com/compatible-mode/v1 |
| Environment | `DASHSCOPE_API_KEY` |
| Provider docs | [https://www.alibabacloud.com/help/en/model-studio/models](https://www.alibabacloud.com/help/en/model-studio/models) |
| Models | 51 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DASHSCOPE_API_KEY,
  baseUrl: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
  completionApi: "chat",
});

const model = client.completionModel("qvq-max");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | audio, text |
| Attachments | 7 / 51 models |
| Tools | 46 / 51 models |
| Structured output | 7 / 51 models |
| Reasoning | 26 / 51 models |
| Temperature | 50 / 51 models |
| Open weights | 24 / 51 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `qvq-max`<br />QVQ Max | qvq | image, text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 1.2 / output: 4.8 | 2025-03-25 |
| `qwen-flash`<br />Qwen Flash | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.05 / output: 0.4 | 2025-07-28 |
| `qwen-max`<br />Qwen Max | qwen | text | text | tools, temperature | context: 32768 / output: 8192 | input: 1.6 / output: 6.4 | 2025-01-25 |
| `qwen-mt-plus`<br />Qwen-MT Plus | qwen | text | text | temperature | context: 16384 / output: 8192 | input: 2.46 / output: 7.37 | 2025-01 |
| `qwen-mt-turbo`<br />Qwen-MT Turbo | qwen | text | text | temperature | context: 16384 / output: 8192 | input: 0.16 / output: 0.49 | 2025-01 |
| `qwen-omni-turbo`<br />Qwen-Omni Turbo | qwen | audio, image, text, video | audio, text | tools, temperature | context: 32768 / output: 2048 | input: 0.07 / output: 0.27 / input_audio: 4.44 / output_audio: 8.89 | 2025-03-26 |
| `qwen-omni-turbo-realtime`<br />Qwen-Omni Turbo Realtime | qwen | audio, image, text | audio, text | tools, temperature | context: 32768 / output: 2048 | input: 0.27 / output: 1.07 / input_audio: 4.44 / output_audio: 8.89 | 2025-05-08 |
| `qwen-plus`<br />Qwen Plus | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 32768 | input: 0.4 / output: 1.2 / reasoning: 4 | 2025-09-11 |
| `qwen-plus-character-ja`<br />Qwen Plus Character (Japanese) | qwen | text | text | tools, temperature | context: 8192 / output: 512 | input: 0.5 / output: 1.4 | 2024-01 |
| `qwen-turbo`<br />Qwen Turbo | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 16384 | input: 0.05 / output: 0.2 / reasoning: 0.5 | 2025-04-28 |
| `qwen-vl-max`<br />Qwen-VL Max | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.8 / output: 3.2 | 2025-08-13 |
| `qwen-vl-ocr`<br />Qwen-VL OCR | qwen | image, text | text | temperature | context: 34096 / output: 4096 | input: 0.72 / output: 0.72 | 2025-04-13 |
| `qwen-vl-plus`<br />Qwen-VL Plus | qwen | image, text | text | tools, temperature | context: 131072 / output: 8192 | input: 0.21 / output: 0.63 | 2025-08-15 |
| `qwen2-5-14b-instruct`<br />Qwen2.5 14B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.35 / output: 1.4 | 2024-09 |
| `qwen2-5-32b-instruct`<br />Qwen2.5 32B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.7 / output: 2.8 | 2024-09 |
| `qwen2-5-72b-instruct`<br />Qwen2.5 72B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 1.4 / output: 5.6 | 2024-09 |
| `qwen2-5-7b-instruct`<br />Qwen2.5 7B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.175 / output: 0.7 | 2024-09 |
| `qwen2-5-omni-7b`<br />Qwen2.5-Omni 7B | qwen | audio, image, text, video | audio, text | tools, temperature, open weights | context: 32768 / output: 2048 | input: 0.1 / output: 0.4 / input_audio: 6.76 | 2024-12 |
| `qwen2-5-vl-72b-instruct`<br />Qwen2.5-VL 72B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 2.8 / output: 8.4 | 2024-09 |
| `qwen2-5-vl-7b-instruct`<br />Qwen2.5-VL 7B Instruct | qwen | image, text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0.35 / output: 1.05 | 2024-09 |
| `qwen3-14b`<br />Qwen3 14B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.35 / output: 1.4 / reasoning: 4.2 | 2025-04 |
| `qwen3-235b-a22b`<br />Qwen3 235B-A22B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.7 / output: 2.8 / reasoning: 8.4 | 2025-04 |
| `qwen3-32b`<br />Qwen3 32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 16384 | input: 0.7 / output: 2.8 / reasoning: 8.4 | 2025-04 |
| `qwen3-8b`<br />Qwen3 8B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 8192 | input: 0.18 / output: 0.7 / reasoning: 2.1 | 2025-04 |
| `qwen3-asr-flash`<br />Qwen3-ASR Flash | qwen | audio | text | - | context: 53248 / output: 4096 | input: 0.035 / output: 0.035 | 2025-09-08 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder 30B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.45 / output: 2.25 | 2025-04 |
| `qwen3-coder-480b-a35b-instruct`<br />Qwen3-Coder 480B-A35B Instruct | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 1.5 / output: 7.5 | 2025-04 |
| `qwen3-coder-flash`<br />Qwen3 Coder Flash | qwen | text | text | tools, temperature | context: 1000000 / output: 65536 | input: 0.3 / output: 1.5 | 2025-07-28 |
| `qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, temperature, open weights | context: 1048576 / output: 65536 | input: 1 / output: 5 | 2025-07-23 |
| `qwen3-livetranslate-flash-realtime`<br />Qwen3-LiveTranslate Flash Realtime | qwen | audio, image, text, video | audio, text | temperature | context: 53248 / output: 4096 | input: 10 / output: 10 / input_audio: 10 / output_audio: 38 | 2025-09-22 |
| `qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 65536 | input: 1.2 / output: 6 | 2025-09-23 |
| `qwen3-next-80b-a3b-instruct`<br />Qwen3-Next 80B-A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.5 / output: 2 | 2025-09 |
| `qwen3-next-80b-a3b-thinking`<br />Qwen3-Next 80B-A3B (Thinking) | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.5 / output: 6 | 2025-09 |
| `qwen3-omni-flash`<br />Qwen3-Omni Flash | qwen | audio, image, text, video | audio, text | tools, reasoning, temperature | context: 65536 / output: 16384 | input: 0.43 / output: 1.66 / input_audio: 3.81 / output_audio: 15.11 | 2025-09-15 |
| `qwen3-omni-flash-realtime`<br />Qwen3-Omni Flash Realtime | qwen | audio, image, text, video | audio, text | tools, temperature | context: 65536 / output: 16384 | input: 0.52 / output: 1.99 / input_audio: 4.57 / output_audio: 18.13 | 2025-09-15 |
| `qwen3-vl-235b-a22b`<br />Qwen3-VL 235B-A22B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.7 / output: 2.8 / reasoning: 8.4 | 2025-04 |
| `qwen3-vl-30b-a3b`<br />Qwen3-VL 30B-A3B | qwen | image, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.2 / output: 0.8 / reasoning: 2.4 | 2025-04 |
| `qwen3-vl-plus`<br />Qwen3-VL Plus | qwen | image, text | text | tools, reasoning, temperature | context: 262144 / output: 32768 | input: 0.2 / output: 1.6 / reasoning: 4.8 | 2025-09-23 |
| `qwen3.5-122b-a10b`<br />Qwen3.5 122B-A10B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.4 / output: 3.2 | 2026-02-23 |
| `qwen3.5-27b`<br />Qwen3.5 27B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 2.4 | 2026-02-23 |
| `qwen3.5-35b-a3b`<br />Qwen3.5 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.25 / output: 2 | 2026-02-23 |
| `qwen3.5-397b-a17b`<br />Qwen3.5 397B-A17B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3.6 | 2026-02-15 |
| `qwen3.5-plus`<br />Qwen3.5 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.4 / output: 2.4 / reasoning: 2.4 | 2026-02-16 |
| `qwen3.6-27b`<br />Qwen3.6 27B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.6 / output: 3.6 | 2026-04-22 |
| `qwen3.6-35b-a3b`<br />Qwen3.6 35B-A3B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.248 / output: 1.485 | 2026-04-17 |
| `qwen3.6-flash`<br />Qwen3.6 Flash | qwen3.6 | image, text, video | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.1875 / output: 1.125 / cache_write: 0.234375 | 2026-04-27 |
| `qwen3.6-max-preview`<br />Qwen3.6 Max Preview | qwen | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 1.3 / output: 7.8 / cache_read: 0.13 / cache_write: 1.625 | 2026-04-20 |
| `qwen3.6-plus`<br />Qwen3.6 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-04-02 |
| `qwen3.7-max`<br />Qwen3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 2.5 / output: 7.5 / cache_read: 0.5 / cache_write: 3.125 | 2026-05-21 |
| `qwen3.7-plus`<br />Qwen3.7 Plus | qwen | image, text, video | text | tools, reasoning, temperature | context: 1000000 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 / cache_write: 0.625 | 2026-06-04 |
| `qwq-plus`<br />QwQ Plus | qwen | text | text | tools, reasoning, temperature | context: 131072 / output: 8192 | input: 0.8 / output: 2.4 | 2025-03-05 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

