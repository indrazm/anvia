---
title: "Nvidia"
description: "Use Nvidia through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1087
  label: "Nvidia"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://integrate.api.nvidia.com/v1 |
| Environment | `NVIDIA_API_KEY` |
| Provider docs | [https://docs.api.nvidia.com/nim/](https://docs.api.nvidia.com/nim/) |
| Models | 83 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NVIDIA_API_KEY,
  baseUrl: "https://integrate.api.nvidia.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("abacusai/dracarys-llama-3_1-70b-instruct");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | audio, image, text, video |
| Attachments | 31 / 83 models |
| Tools | 44 / 83 models |
| Structured output | 24 / 83 models |
| Reasoning | 19 / 83 models |
| Temperature | 60 / 83 models |
| Open weights | 73 / 83 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `abacusai/dracarys-llama-3_1-70b-instruct`<br />dracarys-llama-3.1-70b-instruct | - | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-05-22 |
| `baai/bge-m3`<br />BGE M3 | bge | text | text | open weights | context: 8192 / output: 1024 | input: 0 / output: 0 | 2026-04-30 |
| `black-forest-labs/flux_1-kontext-dev`<br />FLUX.1-Kontext-dev | - | image, text | image | open weights | context: 40960 / output: 40960 | input: 0 / output: 0 | 2025-08-12 |
| `black-forest-labs/flux_1-schnell`<br />FLUX.1-schnell | - | text | image | open weights | context: 77 / input: 77 / output: 0 | input: 0 / output: 0 | 2026-02-04 |
| `black-forest-labs/flux_2-klein-4b`<br />FLUX.2 Klein 4B | flux | image, text | image | temperature, open weights | context: 40960 / output: 40960 | input: 0 / output: 0 | 2026-01-31 |
| `black-forest-labs/flux.1-dev`<br />FLUX.1-dev | flux | text | image | temperature | context: 4096 / output: 0 | input: 0 / output: 0 | 2025-09-05 |
| `bytedance/seed-oss-36b-instruct`<br />ByteDance-Seed/Seed-OSS-36B-Instruct | seed | text | text | tools, schema, temperature | context: 262000 / output: 262000 | input: 0 / output: 0 | 2025-11-25 |
| `deepseek-ai/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek-ai/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `google/gemma-2-2b-it`<br />Gemma 2 2b It | - | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-07-16 |
| `google/gemma-3n-e2b-it`<br />Gemma 3n E2b It | - | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-06-12 |
| `google/gemma-3n-e4b-it`<br />Gemma 3n E4b It | - | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-06-03 |
| `google/gemma-4-31b-it`<br />Gemma-4-31B-IT | gemma | image, text, video | text | tools, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0 / output: 0 | 2026-04-02 |
| `google/google-paligemma`<br />paligemma | - | image, text | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-08-26 |
| `meta/esm2-650m`<br />esm2-650m | - | text | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-03-10 |
| `meta/esmfold`<br />esmfold | - | text | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-06-12 |
| `meta/llama-3.1-70b-instruct`<br />Llama 3.1 70b Instruct | - | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-07-16 |
| `meta/llama-3.1-8b-instruct`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature, open weights | context: 16000 / output: 4096 | input: 0 / output: 0 | 2025-01-01 |
| `meta/llama-3.2-11b-vision-instruct`<br />Llama 3.2 11b Vision Instruct | - | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-09-18 |
| `meta/llama-3.2-1b-instruct`<br />Llama 3.2 1b Instruct | - | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-09-18 |
| `meta/llama-3.2-3b-instruct`<br />Llama 3.2 3B Instruct | llama | text | text | schema, temperature, open weights | context: 32768 / output: 32000 | input: 0 / output: 0 | 2024-09-18 |
| `meta/llama-3.2-90b-vision-instruct`<br />Llama-3.2-90B-Vision-Instruct | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-09-25 |
| `meta/llama-3.3-70b-instruct`<br />Llama 3.3 70b Instruct | - | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-11-26 |
| `meta/llama-4-maverick-17b-128e-instruct`<br />Llama 4 Maverick 17b 128e Instruct | - | image, text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-01 |
| `meta/llama-guard-4-12b`<br />Llama Guard 4 12B | llama | image, text | text | temperature, open weights | context: 128000 / output: 16384 | input: 0 / output: 0 | 2026-04-30 |
| `microsoft/phi-4-mini-instruct`<br />Phi-4-Mini | phi | text | text | tools, temperature, open weights | context: 131072 / output: 8192 | input: 0 / output: 0 | 2025-09-05 |
| `microsoft/phi-4-multimodal-instruct`<br />Phi 4 Multimodal | - | text | text | - | context: 128000 / input: 128000 / output: 16384 | input: 0 / output: 0 | 2025-07-26 |
| `minimaxai/minimax-m2.7`<br />MiniMax-M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 | 2026-04-11 |
| `mistralai/magistral-small-2506`<br />Magistral Small 2506 | - | text | text | - | context: 32768 / input: 32768 / output: 32768 | input: 0 / output: 0 | 2025-09-25 |
| `mistralai/mistral-7b-instruct-v03`<br />Mistral-7B-Instruct-v0.3 | - | text | text | tools, schema, temperature, open weights | context: 65536 / output: 65536 | input: 0 / output: 0 | 2025-04-01 |
| `mistralai/mistral-large-3-675b-instruct-2512`<br />Mistral Large 3 675B Instruct 2512 | mistral-large | image, text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2025-12-02 |
| `mistralai/mistral-medium-3-instruct`<br />Mistral Medium 3 | mistral-medium | image, text | text | - | context: 131072 / input: 131072 / output: 32768 | input: 0 / output: 0 | 2025-09-25 |
| `mistralai/mistral-nemotron`<br />mistral-nemotron | nemotron | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-06-12 |
| `mistralai/mistral-small-4-119b-2603`<br />mistral-small-4-119b-2603 | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2026-03-16 |
| `mistralai/mixtral-8x22b-instruct`<br />Mistral: Mixtral 8x22B Instruct | - | text | text | tools, temperature, open weights | context: 65536 / output: 13108 | input: 0 / output: 0 | 2024-04-17 |
| `mistralai/mixtral-8x7b-instruct`<br />Mistral: Mixtral 8x7B Instruct | - | text | text | tools, temperature, open weights | context: 32768 / output: 16384 | input: 0 / output: 0 | 2026-03-15 |
| `moonshotai/kimi-k2-instruct-0905`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2025-09-05 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0 / output: 0 | 2026-04-21 |
| `nvidia/active-speaker-detection`<br />Active Speaker Detection | - | video | text | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2026-04-16 |
| `nvidia/bevformer`<br />bevformer | - | video | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-07-20 |
| `nvidia/cosmos-predict1-5b`<br />cosmos-predict1-5b | - | image, text, video | video | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2025-03-18 |
| `nvidia/cosmos-transfer1-7b`<br />cosmos-transfer1-7b | - | image, text, video | video | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2025-06-30 |
| `nvidia/cosmos-transfer2_5-2b`<br />cosmos-transfer2.5-2b | - | image, text, video | video | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2026-02-26 |
| `nvidia/gliner-pii`<br />gliner-pii | - | text | text | temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2026-03-03 |
| `nvidia/llama-3_1-nemotron-safety-guard-8b-v3`<br />llama-3.1-nemotron-safety-guard-8b-v3 | nemotron | text | text | open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-10-28 |
| `nvidia/llama-3_2-nemoretriever-300m-embed-v1`<br />llama-3_2-nemoretriever-300m-embed-v1 | - | text | text | open weights | context: 32768 / output: 2048 | input: 0 / output: 0 | 2025-07-24 |
| `nvidia/llama-nemotron-embed-vl-1b-v2`<br />llama-nemotron-embed-vl-1b-v2 | nemotron | image, text | text | open weights | context: 32768 / output: 2048 | input: 0 / output: 0 | 2026-02-10 |
| `nvidia/llama-nemotron-rerank-vl-1b-v2`<br />llama-nemotron-rerank-vl-1b-v2 | nemotron | image, text | text | open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2026-03-31 |
| `nvidia/magpie-tts-zeroshot`<br />magpie-tts-zeroshot | - | audio, text | audio | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2025-06-12 |
| `nvidia/nemotron-3-content-safety`<br />nemotron-3-content-safety | nemotron | text | text | open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2026-04-16 |
| `nvidia/nemotron-3-nano-30b-a3b`<br />nemotron-3-nano-30b-a3b | nemotron | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2024-12 |
| `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`<br />Nemotron 3 Nano Omni | nemotron | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 0 / output: 0 | 2026-04-28 |
| `nvidia/nemotron-3-super-120b-a12b`<br />Nemotron 3 Super | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.2 / output: 0.8 | 2026-03-11 |
| `nvidia/nemotron-3-ultra-550b-a55b`<br />Nemotron 3 Ultra 550B A55B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 65536 | input: 0.5 / output: 2.5 / cache_read: 0.15 | 2026-06-04 |
| `nvidia/nemotron-content-safety-reasoning-4b`<br />nemotron-content-safety-reasoning-4b | nemotron | text | text | reasoning, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2026-01-22 |
| `nvidia/nemotron-mini-4b-instruct`<br />nemotron-mini-4b-instruct | nemotron | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-08-26 |
| `nvidia/nemotron-voicechat`<br />nemotron-voicechat | nemotron | audio, text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2026-03-16 |
| `nvidia/nv-embed-v1`<br />nv-embed-v1 | - | text | text | open weights | context: 32768 / output: 2048 | input: 0 / output: 0 | 2025-07-22 |
| `nvidia/nv-embedcode-7b-v1`<br />nv-embedcode-7b-v1 | - | text | text | open weights | context: 32768 / output: 2048 | input: 0 / output: 0 | 2025-05-29 |
| `nvidia/nvidia-nemotron-nano-9b-v2`<br />nvidia-nemotron-nano-9b-v2 | nemotron | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2025-08-18 |
| `nvidia/rerank-qa-mistral-4b`<br />rerank-qa-mistral-4b | - | text | text | open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-01-17 |
| `nvidia/riva-translate-4b-instruct-v1_1`<br />riva-translate-4b-instruct-v1_1 | - | text | text | open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-12-12 |
| `nvidia/sparsedrive`<br />sparsedrive | - | video | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-07-20 |
| `nvidia/streampetr`<br />streampetr | - | video | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-11-13 |
| `nvidia/studiovoice`<br />studiovoice | - | text | text | temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-06-13 |
| `nvidia/synthetic-video-detector`<br />synthetic-video-detector | - | video | text | temperature, open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2026-04-16 |
| `nvidia/usdcode`<br />usdcode | - | text | text | temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2026-01-01 |
| `nvidia/usdvalidate`<br />usdvalidate | - | text | text | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2025-01-08 |
| `openai/gpt-oss-120b`<br />GPT-OSS-120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-08-14 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0 / output: 0 | 2025-08-05 |
| `openai/whisper-large-v3`<br />Whisper Large v3 | whisper | audio | text | open weights | context: 0 / output: 4096 | input: 0 / output: 0 | 2025-09-05 |
| `qwen/qwen-image`<br />Qwen Image | qwen | image, text | image | temperature | context: 0 / output: 0 | input: 0 / output: 0 | 2025-08-07 |
| `qwen/qwen-image-edit`<br />Qwen Image Edit | qwen | image, text | image | temperature | context: 0 / output: 0 | input: 0 / output: 0 | 2025-08-19 |
| `qwen/qwen2.5-coder-32b-instruct`<br />Qwen2.5 Coder 32b Instruct | - | text | text | tools, schema, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-11-06 |
| `qwen/qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, temperature | context: 262144 / output: 66536 | input: 0 / output: 0 | 2025-07-23 |
| `qwen/qwen3-next-80b-a3b-instruct`<br />Qwen3-Next-80B-A3B-Instruct | qwen | text | text | tools, temperature | context: 262144 / output: 16384 | input: 0 / output: 0 | 2025-09-05 |
| `qwen/qwen3.5-122b-a10b`<br />Qwen3.5 122B-A10B | qwen | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0 / output: 0 | 2026-02-23 |
| `qwen/qwen3.5-397b-a17b`<br />Qwen3.5-397B-A17B | qwen | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 8192 | input: 0 / output: 0 | 2026-02-16 |
| `sarvamai/sarvam-m`<br />sarvam-m | - | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-07-25 |
| `stepfun-ai/step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0 / output: 0 | 2026-02-02 |
| `stepfun-ai/step-3.7-flash`<br />Step 3.7 Flash | - | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 16384 | input: 0 / output: 0 | 2026-05-28 |
| `upstage/solar-10_7b-instruct`<br />solar-10.7b-instruct | - | text | text | tools, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-04-10 |
| `z-ai/glm-5.1`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0 / output: 0 | 2026-03-27 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

