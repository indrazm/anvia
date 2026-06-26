---
title: "NovitaAI"
description: "Use NovitaAI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1086
  label: "NovitaAI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.novita.ai/openai |
| Environment | `NOVITA_API_KEY` |
| Provider docs | [https://novita.ai/docs/guides/introduction](https://novita.ai/docs/guides/introduction) |
| Models | 105 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NOVITA_API_KEY,
  baseUrl: "https://api.novita.ai/openai",
  completionApi: "chat",
});

const model = client.completionModel("baichuan/baichuan-m2-32b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | audio, text |
| Attachments | 31 / 105 models |
| Tools | 70 / 105 models |
| Structured output | 64 / 105 models |
| Reasoning | 55 / 105 models |
| Temperature | 104 / 105 models |
| Open weights | 99 / 105 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `baichuan/baichuan-m2-32b`<br />baichuan-m2-32b | baichuan | text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.07 / output: 0.07 | 2025-08-13 |
| `baidu/ernie-4.5-21B-a3b`<br />ERNIE 4.5 21B A3B | ernie | text | text | tools, temperature, open weights | context: 120000 / output: 8000 | input: 0.07 / output: 0.28 | 2025-06-30 |
| `baidu/ernie-4.5-21B-a3b-thinking`<br />ERNIE-4.5-21B-A3B-Thinking | ernie | text | text | reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.07 / output: 0.28 | 2025-09-19 |
| `baidu/ernie-4.5-300b-a47b-paddle`<br />ERNIE 4.5 300B A47B | - | text | text | schema, temperature, open weights | context: 123000 / output: 12000 | input: 0.28 / output: 1.1 | 2025-06-30 |
| `baidu/ernie-4.5-vl-28b-a3b`<br />ERNIE 4.5 VL 28B A3B | - | image, text | text | tools, reasoning, temperature, open weights | context: 30000 / output: 8000 | input: 0.14 / output: 0.56 | 2026-06-14 |
| `baidu/ernie-4.5-vl-28b-a3b-thinking`<br />ERNIE-4.5-VL-28B-A3B-Thinking | - | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.39 / output: 0.39 | 2025-11-26 |
| `baidu/ernie-4.5-vl-424b-a47b`<br />ERNIE 4.5 VL 424B A47B | - | image, text | text | reasoning, temperature, open weights | context: 123000 / output: 16000 | input: 0.42 / output: 1.25 | 2025-06-30 |
| `deepseek/deepseek-ocr`<br />DeepSeek-OCR | - | image, text | text | schema, temperature, open weights | context: 8192 / output: 8192 | input: 0.03 / output: 0.03 | 2025-10-24 |
| `deepseek/deepseek-ocr-2` | - | image, text | text | open weights | context: 8192 / output: 8192 | input: 0.03 / output: 0.03 | 2026-01-27 |
| `deepseek/deepseek-prover-v2-671b`<br />Deepseek Prover V2 671B | - | text | text | temperature, open weights | context: 160000 / output: 160000 | input: 0.7 / output: 2.5 | 2025-04-30 |
| `deepseek/deepseek-r1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.7 / output: 2.5 / cache_read: 0.35 | 2025-05-28 |
| `deepseek/deepseek-r1-0528-qwen3-8b`<br />DeepSeek R1 0528 Qwen3 8B | - | text | text | reasoning, temperature, open weights | context: 128000 / output: 32000 | input: 0.06 / output: 0.09 | 2025-05-29 |
| `deepseek/deepseek-r1-distill-llama-70b`<br />DeepSeek R1 Distill LLama 70B | deepseek-thinking | text | text | schema, reasoning, temperature, open weights | context: 8192 / output: 8192 | input: 0.8 / output: 0.8 | 2025-01-27 |
| `deepseek/deepseek-r1-distill-qwen-14b`<br />DeepSeek R1 Distill Qwen 14B | deepseek-thinking | text | text | temperature, open weights | context: 32768 / output: 16384 | input: 0.15 / output: 0.15 | 2025-01-20 |
| `deepseek/deepseek-r1-distill-qwen-32b`<br />DeepSeek R1 Distill Qwen 32B | deepseek-thinking | text | text | temperature, open weights | context: 64000 / output: 32000 | input: 0.3 / output: 0.3 | 2025-01-20 |
| `deepseek/deepseek-r1-turbo`<br />DeepSeek R1 (Turbo)	 | - | text | text | tools, reasoning, temperature, open weights | context: 64000 / output: 16000 | input: 0.7 / output: 2.5 | 2025-03-05 |
| `deepseek/deepseek-v3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, schema, temperature, open weights | context: 163840 / output: 163840 | input: 0.27 / output: 1.12 / cache_read: 0.135 | 2025-03-25 |
| `deepseek/deepseek-v3-turbo`<br />DeepSeek V3 (Turbo)	 | - | text | text | tools, temperature, open weights | context: 64000 / output: 16000 | input: 0.4 / output: 1.3 | 2025-03-05 |
| `deepseek/deepseek-v3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.27 / output: 1 / cache_read: 0.135 | 2025-08-21 |
| `deepseek/deepseek-v3.1-terminus`<br />Deepseek V3.1 Terminus | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.27 / output: 1 / cache_read: 0.135 | 2025-09-22 |
| `deepseek/deepseek-v3.2`<br />Deepseek V3.2 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.269 / output: 0.4 / cache_read: 0.1345 | 2025-12-01 |
| `deepseek/deepseek-v3.2-exp`<br />Deepseek V3.2 Exp | - | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 65536 | input: 0.27 / output: 0.41 | 2025-09-29 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 0.14 / output: 0.28 / cache_read: 0.028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 1.69 / output: 3.38 / cache_read: 0.13 | 2026-04-24 |
| `google/gemma-3-12b-it`<br />Gemma 3 12B | gemma | image, text | text | temperature, open weights | context: 131072 / output: 8192 | input: 0.05 / output: 0.1 | 2025-03-13 |
| `google/gemma-3-27b-it`<br />Gemma 3 27B | gemma | image, text | text | temperature, open weights | context: 98304 / output: 16384 | input: 0.119 / output: 0.2 | 2025-03-25 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.13 / output: 0.4 | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B | gemma | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0.14 / output: 0.4 | 2026-04-02 |
| `gryphe/mythomax-l2-13b`<br />Mythomax L2 13B | - | text | text | temperature, open weights | context: 4096 / output: 3200 | input: 0.09 / output: 0.09 | 2024-04-25 |
| `inclusionai/ling-2.6-1t`<br />Ling-2.6-1T | ling | text | text | tools, schema, temperature, open weights | context: 262144 / output: 32768 | input: 0 / output: 0 | 2026-04-23 |
| `inclusionai/ling-2.6-flash`<br />Ling-2.6-flash | ling | text | text | tools, schema, temperature, open weights | context: 262144 / output: 32768 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-04-24 |
| `inclusionai/ring-2.6-1t`<br />Ring-2.6-1T | ring | text | text | tools, schema, reasoning, temperature | context: 262144 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.06 | 2026-05-27 |
| `kwaipilot/kat-coder-pro`<br />Kat Coder Pro | - | text | text | tools, schema, temperature, open weights | context: 256000 / output: 128000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-01-05 |
| `meta-llama/llama-3-70b-instruct`<br />Llama3 70B Instruct | llama | text | text | schema, temperature, open weights | context: 8192 / output: 8000 | input: 0.51 / output: 0.74 | 2024-04-25 |
| `meta-llama/llama-3-8b-instruct`<br />Llama 3 8B Instruct | llama | text | text | temperature, open weights | context: 8192 / output: 8192 | input: 0.04 / output: 0.04 | 2024-04-25 |
| `meta-llama/llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | temperature, open weights | context: 16384 / output: 16384 | input: 0.02 / output: 0.05 | 2024-07-24 |
| `meta-llama/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | temperature, open weights | context: 32768 / output: 32000 | input: 0.03 / output: 0.05 | 2024-09-18 |
| `meta-llama/llama-3.3-70b-instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature, open weights | context: 131072 / output: 120000 | input: 0.135 / output: 0.4 | 2024-12-07 |
| `meta-llama/llama-4-maverick-17b-128e-instruct-fp8`<br />Llama 4 Maverick Instruct | - | image, text | text | temperature, open weights | context: 1048576 / output: 8192 | input: 0.27 / output: 0.85 | 2025-04-06 |
| `meta-llama/llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout Instruct | - | image, text | text | temperature, open weights | context: 131072 / output: 131072 | input: 0.18 / output: 0.59 | 2025-04-06 |
| `microsoft/wizardlm-2-8x22b`<br />Wizardlm 2 8x22B | - | text | text | temperature, open weights | context: 65535 / output: 8000 | input: 0.62 / output: 0.62 | 2024-04-24 |
| `minimax/minimax-m2`<br />MiniMax-M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2025-10-27 |
| `minimax/minimax-m2.1`<br />Minimax M2.1 | minimax | text | text | tools, schema, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2025-12-23 |
| `minimax/minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, schema, reasoning, temperature | context: 204800 / output: 131100 | input: 0.3 / output: 1.2 / cache_read: 0.03 | 2026-02-12 |
| `minimax/minimax-m2.5-highspeed`<br />MiniMax M2.5 Highspeed | minimax-m2.5 | text | text | tools, schema, reasoning, temperature | context: 204800 / output: 131100 | input: 0.6 / output: 2.4 / cache_read: 0.03 | 2026-02-12 |
| `minimax/minimax-m2.7`<br />MiniMax M2.7 | minimax-m2.7 | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-18 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax-M2.7-highspeed | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-05-27 |
| `minimaxai/minimax-m1-80k`<br />MiniMax M1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 40000 | input: 0.55 / output: 2.2 | 2025-06-17 |
| `mistralai/mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | schema, temperature, open weights | context: 60288 / output: 16000 | input: 0.04 / output: 0.17 | 2024-07-30 |
| `moonshotai/kimi-k2-0905`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2025-09-05 |
| `moonshotai/kimi-k2-instruct`<br />Kimi K2 Instruct | - | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.57 / output: 2.3 | 2025-07-11 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2025-11-07 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01-27 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `nousresearch/hermes-2-pro-llama-3-8b`<br />Hermes 2 Pro Llama 3 8B | - | text | text | schema, temperature, open weights | context: 8192 / output: 8192 | input: 0.14 / output: 0.14 | 2024-06-27 |
| `openai/gpt-oss-120b`<br />OpenAI GPT OSS 120B | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.05 / output: 0.25 | 2025-08-06 |
| `openai/gpt-oss-20b`<br />OpenAI: GPT OSS 20B | - | image, text | text | schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.04 / output: 0.15 | 2025-08-06 |
| `paddlepaddle/paddleocr-vl`<br />PaddleOCR-VL | - | image, text | text | temperature, open weights | context: 16384 / output: 16384 | input: 0.02 / output: 0.02 | 2025-10-22 |
| `qwen/qwen-2.5-72b-instruct`<br />Qwen 2.5 72B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 32000 / output: 8192 | input: 0.38 / output: 0.4 | 2024-10-15 |
| `qwen/qwen-mt-plus`<br />Qwen MT Plus | - | text | text | temperature, open weights | context: 16384 / output: 8192 | input: 0.25 / output: 0.75 | 2025-09-03 |
| `qwen/qwen2.5-7b-instruct`<br />Qwen2.5 7B Instruct | - | text | text | tools, schema, temperature, open weights | context: 32000 / output: 32000 | input: 0.07 / output: 0.07 | 2025-04-16 |
| `qwen/qwen2.5-vl-72b-instruct`<br />Qwen2.5 VL 72B Instruct | qwen | image, text, video | text | temperature, open weights | context: 32768 / output: 32768 | input: 0.8 / output: 0.8 | 2025-03-25 |
| `qwen/qwen3-235b-a22b-fp8`<br />Qwen3 235B A22B | - | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.2 / output: 0.8 | 2025-04-29 |
| `qwen/qwen3-235b-a22b-instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.09 / output: 0.58 | 2025-07-22 |
| `qwen/qwen3-235b-a22b-thinking-2507`<br />Qwen3 235B A22b Thinking 2507 | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 3 | 2025-07-25 |
| `qwen/qwen3-30b-a3b-fp8`<br />Qwen3 30B A3B | - | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.09 / output: 0.45 | 2025-04-29 |
| `qwen/qwen3-32b-fp8`<br />Qwen3 32B | - | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.1 / output: 0.45 | 2025-04-29 |
| `qwen/qwen3-4b-fp8`<br />Qwen3 4B | - | text | text | reasoning, temperature, open weights | context: 128000 / output: 20000 | input: 0.03 / output: 0.03 | 2025-04-29 |
| `qwen/qwen3-8b-fp8`<br />Qwen3 8B | - | text | text | reasoning, temperature, open weights | context: 128000 / output: 20000 | input: 0.035 / output: 0.138 | 2025-04-29 |
| `qwen/qwen3-coder-30b-a3b-instruct`<br />Qwen3 Coder 30b A3B Instruct | - | text | text | tools, schema, temperature, open weights | context: 160000 / output: 32768 | input: 0.07 / output: 0.27 | 2025-10-09 |
| `qwen/qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 1.3 | 2025-07-23 |
| `qwen/qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.2 / output: 1.5 | 2026-02-03 |
| `qwen/qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, schema, temperature | context: 262144 / output: 65536 | input: 2.11 / output: 8.45 | 2025-09-24 |
| `qwen/qwen3-next-80b-a3b-instruct`<br />Qwen3 Next 80B A3B Instruct | - | text | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.5 | 2025-09-10 |
| `qwen/qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B Thinking | - | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.5 | 2025-09-10 |
| `qwen/qwen3-omni-30b-a3b-instruct`<br />Qwen3 Omni 30B A3B Instruct | qwen | audio, image, text, video | audio, text | tools, schema, temperature, open weights | context: 65536 / output: 16384 | input: 0.25 / output: 0.97 / input_audio: 2.2 / output_audio: 1.788 | 2025-09-24 |
| `qwen/qwen3-omni-30b-a3b-thinking`<br />Qwen3 Omni 30B A3B Thinking | - | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.25 / output: 0.97 / input_audio: 2.2 / output_audio: 1.788 | 2025-09-24 |
| `qwen/qwen3-vl-235b-a22b-instruct`<br />Qwen3 VL 235B A22B Instruct | - | image, text, video | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 1.5 | 2025-09-24 |
| `qwen/qwen3-vl-235b-a22b-thinking`<br />Qwen3 VL 235B A22B Thinking | - | image, text, video | text | reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.98 / output: 3.95 | 2025-09-24 |
| `qwen/qwen3-vl-30b-a3b-instruct` | - | image, text, video | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.2 / output: 0.7 | 2025-10-11 |
| `qwen/qwen3-vl-30b-a3b-thinking` | - | image, text, video | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.2 / output: 1 | 2025-10-11 |
| `qwen/qwen3-vl-8b-instruct` | - | image, text, video | text | tools, schema, temperature, open weights | context: 131072 / output: 32768 | input: 0.08 / output: 0.5 | 2025-10-17 |
| `qwen/qwen3.5-122b-a10b`<br />Qwen3.5-122B-A10B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.4 / output: 3.2 | 2026-02-26 |
| `qwen/qwen3.5-27b`<br />Qwen3.5-27B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.3 / output: 2.4 | 2026-02-26 |
| `qwen/qwen3.5-35b-a3b`<br />Qwen3.5-35B-A3B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.25 / output: 2 | 2026-02-26 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5-397B-A17B | qwen | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 64000 | input: 0.6 / output: 3.6 | 2026-02-17 |
| `qwen/qwen3.7-max`<br />Qwen3.7-Max | qwen | text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65536 | input: 1.25 / output: 3.75 / cache_read: 0.125 / cache_write: 1.5625 | 2026-05-27 |
| `sao10K/l3-70b-euryale-v2.1`<br />L3 70B Euryale V2.1	 | - | text | text | tools, temperature, open weights | context: 8192 / output: 8192 | input: 1.48 / output: 1.48 | 2024-06-18 |
| `sao10K/l3-8b-lunaris`<br />Sao10k L3 8B Lunaris	 | - | text | text | schema, temperature, open weights | context: 8192 / output: 8192 | input: 0.05 / output: 0.05 | 2024-11-28 |
| `sao10K/L3-8B-stheno-v3.2`<br />L3 8B Stheno V3.2 | llama | text | text | tools, temperature, open weights | context: 8192 / output: 32000 | input: 0.05 / output: 0.05 | 2024-11-29 |
| `sao10K/l31-70b-euryale-v2.2`<br />L31 70B Euryale V2.2 | - | text | text | tools, temperature, open weights | context: 8192 / output: 8192 | input: 1.48 / output: 1.48 | 2024-09-19 |
| `xiaomimimo/mimo-v2-flash`<br />XiaomiMiMo/MiMo-V2-Flash | mimo | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 32000 | input: 0.1 / output: 0.3 / cache_read: 0.3 | 2025-12-19 |
| `xiaomimimo/mimo-v2-pro`<br />MiMo-V2-Pro | mimo | text | text | tools, schema, reasoning, temperature | context: 1048576 / output: 131072 | input: 2 / output: 6 / cache_read: 0.4 | 2026-05-27 |
| `xiaomimimo/mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 2 / output: 6 / cache_read: 0.4 | 2026-05-27 |
| `zai-org/autoglm-phone-9b-multilingual`<br />AutoGLM-Phone-9B-Multilingual | - | image, text | text | temperature, open weights | context: 65536 / output: 65536 | input: 0.035 / output: 0.138 | 2025-12-10 |
| `zai-org/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-07-28 |
| `zai-org/glm-4.5-air`<br />GLM 4.5 Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.13 / output: 0.85 | 2025-10-13 |
| `zai-org/glm-4.5v`<br />GLM 4.5V | glmv | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.6 / output: 1.8 / cache_read: 0.11 | 2025-08-11 |
| `zai-org/glm-4.6`<br />GLM 4.6 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.55 / output: 2.2 / cache_read: 0.11 | 2025-09-30 |
| `zai-org/glm-4.6v`<br />GLM 4.6V | glmv | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.3 / output: 0.9 / cache_read: 0.055 | 2025-12-08 |
| `zai-org/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-12-22 |
| `zai-org/glm-4.7-flash`<br />GLM-4.7-Flash | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.07 / output: 0.4 / cache_read: 0.01 | 2026-01-19 |
| `zai-org/glm-5`<br />GLM-5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202800 / output: 131072 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-12 |
| `zai-org/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-03-27 |
| `zai-org/glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-06-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

