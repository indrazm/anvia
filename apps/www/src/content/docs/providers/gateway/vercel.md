---
title: "Vercel AI Gateway"
description: "Review Vercel AI Gateway connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1125
  label: "Vercel AI Gateway"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Gateway provider metadata |
| API URL | Not listed in models.dev |
| Environment | `AI_GATEWAY_API_KEY` |
| Provider docs | [https://github.com/vercel/ai/tree/5eb85cc45a259553501f535b8ac79a77d0e79223/packages/gateway](https://github.com/vercel/ai/tree/5eb85cc45a259553501f535b8ac79a77d0e79223/packages/gateway) |
| Models | 294 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text, video |
| Attachments | 110 / 294 models |
| Tools | 175 / 294 models |
| Structured output | 48 / 294 models |
| Reasoning | 139 / 294 models |
| Temperature | 283 / 294 models |
| Open weights | 37 / 294 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `alibaba/qwen-3-14b`<br />Qwen3-14B | qwen | text | text | tools, reasoning, temperature | context: 40960 / output: 16384 | input: 0.12 / output: 0.24 | 2025-04 |
| `alibaba/qwen-3-235b`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, reasoning, temperature | context: 262144 / output: 16384 | input: 0.22 / output: 0.88 | 2025-04 |
| `alibaba/qwen-3-30b`<br />Qwen3-30B-A3B | qwen | text | text | tools, reasoning, temperature | context: 40960 / output: 16384 | input: 0.12 / output: 0.5 | 2025-04 |
| `alibaba/qwen-3-32b`<br />Qwen 3.32B | qwen | text | text | tools, reasoning, temperature | context: 128000 / output: 8192 | input: 0.16 / output: 0.64 | 2025-04 |
| `alibaba/qwen-3.6-max-preview`<br />Qwen 3.6 Max Preview | qwen | text | text | tools, reasoning, temperature, open weights | context: 240000 / output: 64000 | input: 1.3 / output: 7.8 / cache_read: 0.26 / cache_write: 1.625 | 2026-04-24 |
| `alibaba/qwen3-235b-a22b-thinking`<br />Qwen3 235B A22B Thinking 2507 | qwen | image, pdf, text | text | tools, reasoning, temperature | context: 131072 / output: 32768 | input: 0.4 / output: 4 | 2025-04 |
| `alibaba/qwen3-coder`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, reasoning, temperature | context: 262144 / output: 65536 | input: 1.5 / output: 7.5 / cache_read: 0.3 | 2025-04 |
| `alibaba/qwen3-coder-30b-a3b`<br />Qwen 3 Coder 30B A3B Instruct | qwen | text | text | tools, reasoning, temperature | context: 262144 / output: 8192 | input: 0.15 / output: 0.6 | 2025-04 |
| `alibaba/qwen3-coder-next`<br />Qwen3 Coder Next | qwen | text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 0.5 / output: 1.2 | 2026-02-19 |
| `alibaba/qwen3-coder-plus`<br />Qwen3 Coder Plus | qwen | text | text | tools, temperature, open weights | context: 1000000 / output: 65536 | input: 1 / output: 5 / cache_read: 0.2 | 2025-07-23 |
| `alibaba/qwen3-embedding-0.6b`<br />Qwen3 Embedding 0.6B | qwen | text | text | temperature | context: 32768 / output: 32768 | - | 2025-11-14 |
| `alibaba/qwen3-embedding-4b`<br />Qwen3 Embedding 4B | qwen | text | text | temperature | context: 32768 / output: 32768 | - | 2025-06-05 |
| `alibaba/qwen3-embedding-8b`<br />Qwen3 Embedding 8B | qwen | text | text | temperature | context: 32768 / output: 32768 | - | 2025-06-05 |
| `alibaba/qwen3-max`<br />Qwen3 Max | qwen | text | text | tools, temperature | context: 262144 / output: 32768 | input: 1.2 / output: 6 / cache_read: 0.24 | 2025-09-23 |
| `alibaba/qwen3-max-preview`<br />Qwen3 Max Preview | qwen | text | text | tools, temperature | context: 262144 / output: 32768 | input: 1.2 / output: 6 / cache_read: 0.24 | 2025-09-23 |
| `alibaba/qwen3-max-thinking`<br />Qwen 3 Max Thinking | qwen | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 65536 | input: 1.2 / output: 6 / cache_read: 0.24 | 2025-01 |
| `alibaba/qwen3-next-80b-a3b-instruct`<br />Qwen3 Next 80B A3B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.2 | 2025-09 |
| `alibaba/qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B Thinking | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.15 / output: 1.2 | 2025-09 |
| `alibaba/qwen3-vl-235b-a22b-instruct`<br />Qwen3 VL 235B A22B Instruct | qwen | image, text | text | temperature | context: 131072 / output: 129024 | input: 0.4 / output: 1.6 | 2026-05-01 |
| `alibaba/qwen3-vl-instruct`<br />Qwen3 VL Instruct | qwen | image, text | text | tools, temperature, open weights | context: 131072 / output: 129024 | input: 0.4 / output: 1.6 | 2025-09-24 |
| `alibaba/qwen3-vl-thinking`<br />Qwen3 VL Thinking | qwen | image, pdf, text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.4 / output: 4 | 2025-09-24 |
| `alibaba/qwen3.5-flash`<br />Qwen 3.5 Flash | qwen | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.1 / output: 0.4 / cache_read: 0.001 / cache_write: 0.125 | 2026-02-24 |
| `alibaba/qwen3.5-plus`<br />Qwen 3.5 Plus | qwen | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.4 / output: 2.4 / cache_read: 0.04 / cache_write: 0.5 | 2026-02-16 |
| `alibaba/qwen3.6-27b`<br />Qwen 3.6 27B | qwen3.6 | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 0.6 / output: 3.6 | 2026-04-22 |
| `alibaba/qwen3.6-plus`<br />Qwen 3.6 Plus | qwen | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.5 / output: 3 / cache_read: 0.1 / cache_write: 0.625 | 2026-04-02 |
| `alibaba/qwen3.7-max`<br />Qwen 3.7 Max | qwen | text | text | tools, reasoning, temperature | context: 991000 / output: 64000 | input: 1.25 / output: 3.75 / cache_read: 0.25 / cache_write: 1.5625 | 2026-05-21 |
| `alibaba/qwen3.7-plus`<br />Qwen 3.7 Plus | qwen3.7-plus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0.4 / output: 1.6 / cache_read: 0.08 / cache_write: 0.5 | 2026-06-02 |
| `alibaba/wan-v2.5-t2v-preview`<br />Wan v2.5 Text-to-Video Preview | o | text | video | temperature | context: 0 / output: 0 | - | 2025-09-24 |
| `alibaba/wan-v2.6-i2v`<br />Wan v2.6 Image-to-Video | o | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `alibaba/wan-v2.6-i2v-flash`<br />Wan v2.6 Image-to-Video Flash | o | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `alibaba/wan-v2.6-r2v`<br />Wan v2.6 Reference-to-Video | o | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `alibaba/wan-v2.6-r2v-flash`<br />Wan v2.6 Reference-to-Video Flash | o | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `alibaba/wan-v2.6-t2v`<br />Wan v2.6 Text-to-Video | o | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `amazon/nova-2-lite`<br />Nova 2 Lite | nova | image, pdf, text | text | reasoning, temperature | context: 1000000 / output: 1000000 | input: 0.3 / output: 2.5 / cache_read: 0.075 | 2024-12-01 |
| `amazon/nova-lite`<br />Nova Lite | nova-lite | image, text, video | text | tools, temperature | context: 300000 / output: 8192 | input: 0.06 / output: 0.24 / cache_read: 0.015 | 2024-12-03 |
| `amazon/nova-micro`<br />Nova Micro | nova-micro | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.035 / output: 0.14 / cache_read: 0.00875 | 2024-12-03 |
| `amazon/nova-pro`<br />Nova Pro | nova-pro | image, text, video | text | tools, temperature | context: 300000 / output: 8192 | input: 0.8 / output: 3.2 / cache_read: 0.2 | 2024-12-03 |
| `amazon/titan-embed-text-v2`<br />Titan Text Embeddings V2 | titan-embed | text | text | temperature | context: 8192 / output: 1536 | - | 2024-04 |
| `anthropic/claude-3-haiku`<br />Claude Haiku 3 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-13 |
| `anthropic/claude-3.5-haiku`<br />Claude Haiku 3.5 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `anthropic/claude-haiku-4.5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic/claude-opus-4`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic/claude-opus-4.1`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic/claude-opus-4.5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic/claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic/claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic/claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `anthropic/claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic/claude-sonnet-4.5`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `arcee-ai/trinity-large-preview`<br />Trinity Large Preview | trinity | text | text | tools, temperature | context: 131000 / output: 131000 | input: 0.25 / output: 1 | 2025-01 |
| `arcee-ai/trinity-large-thinking`<br />Trinity Large Thinking | trinity | text | text | tools, reasoning, temperature, open weights | context: 262100 / output: 80000 | input: 0.25 / output: 0.8999999999999999 | 2026-04-03 |
| `arcee-ai/trinity-mini`<br />Trinity Mini | trinity | text | text | temperature | context: 131072 / output: 131072 | input: 0.045 / output: 0.15 | 2025-12 |
| `bfl/flux-2-flex`<br />FLUX.2 [flex] | flux | text | image | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `bfl/flux-2-klein-4b`<br />FLUX.2 [klein] 4B | flux | text | image | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `bfl/flux-2-klein-9b`<br />FLUX.2 [klein] 9B | flux | text | image | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `bfl/flux-2-max`<br />FLUX.2 [max] | flux | text | image | temperature | context: 67300 / output: 67300 | - | 2026-06-08 |
| `bfl/flux-2-pro`<br />FLUX.2 [pro] | flux | text | image | temperature | context: 67300 / output: 67300 | - | 2026-06-08 |
| `bfl/flux-kontext-max`<br />FLUX.1 Kontext Max | flux | text | image | temperature | context: 512 / output: 0 | - | 2025-06 |
| `bfl/flux-kontext-pro`<br />FLUX.1 Kontext Pro | flux | text | image | temperature | context: 512 / output: 0 | - | 2025-06 |
| `bfl/flux-pro-1.0-fill`<br />FLUX.1 Fill [pro] | flux | text | image | temperature | context: 512 / output: 0 | - | 2024-10 |
| `bfl/flux-pro-1.1`<br />FLUX1.1 [pro] | flux | text | image | temperature | context: 512 / output: 0 | - | 2024-10 |
| `bfl/flux-pro-1.1-ultra`<br />FLUX1.1 [pro] Ultra | flux | text | image | temperature | context: 512 / output: 0 | - | 2024-11 |
| `bytedance/seed-1.6`<br />Seed 1.6 | seed | image, text | text | tools, reasoning, temperature | context: 256000 / output: 32000 | input: 0.25 / output: 2 / cache_read: 0.05 | 2025-09 |
| `bytedance/seed-1.8`<br />Seed 1.8 | seed | image, text | text | tools, reasoning, temperature | context: 256000 / output: 64000 | input: 0.25 / output: 2 / cache_read: 0.05 | 2025-10 |
| `bytedance/seedance-2.0`<br />Seedance 2.0 | seed | image, text | video | temperature | context: 0 / output: 0 | - | 2026-04-14 |
| `bytedance/seedance-2.0-fast`<br />Seedance 2.0 Fast | seed | image, text | video | temperature | context: 0 / output: 0 | - | 2026-04-14 |
| `bytedance/seedance-v1.0-pro`<br />Seedance v1.0 Pro | seed | text | video | temperature | context: 0 / output: 0 | - | 2025-06-11 |
| `bytedance/seedance-v1.0-pro-fast`<br />Seedance v1.0 Pro Fast | seed | text | video | temperature | context: 0 / output: 0 | - | 2025-10-31 |
| `bytedance/seedance-v1.5-pro`<br />Seedance v1.5 Pro | seed | text | video | temperature | context: 0 / output: 0 | - | 2025-12-16 |
| `bytedance/seedream-4.0`<br />Seedream 4.0 | seed | text | image | temperature | context: 0 / output: 0 | - | 2025-08-28 |
| `bytedance/seedream-4.5`<br />Seedream 4.5 | seed | text | image | temperature | context: 0 / output: 0 | - | 2025-11-28 |
| `bytedance/seedream-5.0-lite`<br />Seedream 5.0 Lite | seed | text | image | temperature | context: 0 / output: 0 | - | 2026-01-28 |
| `cohere/command-a`<br />Command A | command | text | text | tools, temperature | context: 256000 / output: 8000 | input: 2.5 / output: 10 | 2025-03-13 |
| `cohere/embed-v4.0`<br />Embed v4.0 | cohere-embed | text | text | temperature | context: 128000 / output: 1536 | - | 2025-04-15 |
| `cohere/rerank-v3.5`<br />Cohere Rerank 3.5 | o | text | text | temperature | context: 4096 / output: 4096 | - | 2024-12-02 |
| `cohere/rerank-v4-fast`<br />Cohere Rerank 4 Fast | o | text | text | temperature | context: 32000 / output: 32000 | - | 2025-12-11 |
| `cohere/rerank-v4-pro`<br />Cohere Rerank 4 Pro | o | text | text | temperature | context: 32000 / output: 32000 | - | 2025-12-11 |
| `deepseek/deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 1.35 / output: 5.4 | 2025-05-29 |
| `deepseek/deepseek-v3`<br />DeepSeek V3 0324 | deepseek | text | text | tools, temperature | context: 163840 / output: 163840 | input: 0.27 / output: 1.12 / cache_read: 0.135 | 2024-12-26 |
| `deepseek/deepseek-v3.1`<br />DeepSeek-V3.1 | deepseek | text | text | tools, reasoning, temperature | context: 163840 / output: 8192 | input: 0.56 / output: 1.68 / cache_read: 0.28 | 2025-08-21 |
| `deepseek/deepseek-v3.1-terminus`<br />DeepSeek V3.1 Terminus | deepseek | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.27 / output: 1 / cache_read: 0.135 | 2025-09-22 |
| `deepseek/deepseek-v3.2`<br />DeepSeek V3.2 | deepseek | text | text | reasoning, temperature | context: 128000 / output: 8000 | input: 0.28 / output: 0.42 / cache_read: 0.028 | 2025-12-01 |
| `deepseek/deepseek-v3.2-thinking`<br />DeepSeek V3.2 Thinking | deepseek-thinking | text | text | tools, reasoning, temperature | context: 128000 / output: 8000 | input: 0.62 / output: 1.85 | 2025-12-01 |
| `deepseek/deepseek-v4-flash`<br />DeepSeek V4 Flash | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-24 |
| `deepseek/deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.0036 | 2026-04-24 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-17 |
| `google/gemini-2.5-flash-image`<br />Nano Banana (Gemini 2.5 Flash Image) | gemini-flash | text | image, text | temperature | context: 32768 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 | 2025-08-26 |
| `google/gemini-2.5-flash-lite`<br />Gemini 2.5 Flash Lite | gemini-flash-lite | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 | 2025-06-17 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-17 |
| `google/gemini-3-flash`<br />Gemini 3 Flash | gemini-flash | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 65000 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `google/gemini-3-pro-image`<br />Nano Banana Pro (Gemini 3 Pro Image) | gemini-pro | text | image, text | temperature | context: 65536 / output: 32768 | input: 2 / output: 12 / cache_read: 0.2 | 2025-09 |
| `google/gemini-3-pro-preview`<br />Gemini 3 Pro Preview | gemini-pro | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 2 / output: 12 / cache_read: 0.2 | 2025-11-18 |
| `google/gemini-3.1-flash-image`<br />Gemini 3.1 Flash Image (Nano Banana 2) | gemini | image, text | image, text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.5 / output: 3 / cache_read: 0.05 | 2026-05-28 |
| `google/gemini-3.1-flash-image-preview`<br />Gemini 3.1 Flash Image Preview (Nano Banana 2) | gemini | image, text | image, text | reasoning, temperature | context: 131072 / output: 32768 | input: 0.5 / output: 3 / cache_read: 0.05 | 2026-02-26 |
| `google/gemini-3.1-flash-lite`<br />Gemini 3.1 Flash Lite | gemini | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65000 | input: 0.25 / output: 1.5 / cache_read: 0.03 | 2026-05-07 |
| `google/gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 65000 | input: 0.25 / output: 1.5 / cache_read: 0.03 | 2026-03-03 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `google/gemini-3.5-flash`<br />Gemini 3.5 Flash | gemini | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 64000 | input: 1.5 / output: 9 / cache_read: 0.15 | 2026-05-19 |
| `google/gemini-embedding-001`<br />Gemini Embedding 001 | gemini-embedding | text | text | temperature | context: 8192 / output: 1536 | - | 2025-05-20 |
| `google/gemini-embedding-2`<br />Gemini Embedding 2 | gemini-embedding | text | text | temperature | context: 0 / output: 0 | - | 2026-03-23 |
| `google/gemma-4-26b-a4b-it`<br />Gemma 4 26B A4B IT | gemma | image, pdf, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 131072 | input: 0.15 / output: 0.6 / cache_read: 0.015 | 2026-04-02 |
| `google/gemma-4-31b-it`<br />Gemma 4 31B IT | gemma | image, pdf, text | text | tools, schema, temperature | context: 262144 / output: 131072 | input: 0.14 / output: 0.4 | 2026-04-02 |
| `google/imagen-4.0-fast-generate-001`<br />Imagen 4 Fast | imagen | text | image | temperature | context: 480 / output: 0 | - | 2025-06 |
| `google/imagen-4.0-generate-001`<br />Imagen 4 | imagen | text | image | temperature | context: 480 / output: 0 | - | 2025-05-22 |
| `google/imagen-4.0-ultra-generate-001`<br />Imagen 4 Ultra | imagen | text | image | - | context: 480 / output: 0 | - | 2025-05-24 |
| `google/text-embedding-005`<br />Text Embedding 005 | text-embedding | text | text | temperature | context: 8192 / output: 1536 | - | 2024-08 |
| `google/text-multilingual-embedding-002`<br />Text Multilingual Embedding 002 | text-embedding | text | text | temperature | context: 8192 / output: 1536 | - | 2024-03 |
| `google/veo-3.0-fast-generate-001`<br />Veo 3.0 Fast Generate | veo | text | video | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `google/veo-3.0-generate-001`<br />Veo 3.0 | veo | text | video | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `google/veo-3.1-fast-generate-001`<br />Veo 3.1 Fast Generate | veo | text | video | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `google/veo-3.1-generate-001`<br />Veo 3.1 | veo | text | video | temperature | context: 0 / output: 0 | - | 2026-06-08 |
| `inception/mercury-2`<br />Mercury 2 | mercury | text | text | tools, reasoning, temperature | context: 128000 / output: 128000 | input: 0.25 / output: 0.75 / cache_read: 0.024999999999999998 | 2026-03-06 |
| `inception/mercury-coder-small`<br />Mercury Coder Small Beta | mercury | text | text | tools, temperature | context: 32000 / output: 16384 | input: 0.25 / output: 1 | 2025-02-26 |
| `interfaze/interfaze-beta`<br />Interfaze Beta | - | image, pdf, text | text | reasoning, temperature | context: 1000000 / output: 32000 | input: 1.5 / output: 3.5 | 2026-04-29 |
| `klingai/kling-v2.5-turbo-i2v`<br />Kling v2.5 Turbo Image-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2025-09-23 |
| `klingai/kling-v2.5-turbo-t2v`<br />Kling v2.5 Turbo Text-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2025-09-23 |
| `klingai/kling-v2.6-i2v`<br />Kling v2.6 Image-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2025-12-21 |
| `klingai/kling-v2.6-motion-control`<br />Kling v2.6 Motion Control | ling | text | video | temperature | context: 0 / output: 0 | - | 2025-12-21 |
| `klingai/kling-v2.6-t2v`<br />Kling v2.6 Text-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2025-12-21 |
| `klingai/kling-v3.0-i2v`<br />Kling v3.0 Image-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2026-02-05 |
| `klingai/kling-v3.0-motion-control`<br />Kling v3.0 Motion Control | ling | text | video | temperature | context: 0 / output: 0 | - | 2026-03-04 |
| `klingai/kling-v3.0-t2v`<br />Kling v3.0 Text-to-Video | ling | text | video | temperature | context: 0 / output: 0 | - | 2026-02-05 |
| `kwaipilot/kat-coder-pro-v1`<br />KAT-Coder-Pro V1 | kat-coder | text | text | reasoning, temperature | context: 256000 / output: 32000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2025-10-24 |
| `kwaipilot/kat-coder-pro-v2`<br />Kat Coder Pro V2 | kat-coder | text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-03-30 |
| `meituan/longcat-flash-chat`<br />LongCat Flash Chat | longcat | text | text | tools, temperature | context: 128000 / output: 100000 | - | 2025-08-30 |
| `meituan/longcat-flash-thinking-2601`<br />LongCat Flash Thinking 2601 | longcat | text | text | reasoning, temperature | context: 32768 / output: 32768 | - | 2026-03-13 |
| `meta/llama-3.1-70b`<br />Llama 3.1 70B Instruct | llama | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.72 / output: 0.72 | 2024-07-23 |
| `meta/llama-3.1-8b`<br />Llama 3.1 8B Instruct | llama | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.22 / output: 0.22 | 2024-07-23 |
| `meta/llama-3.2-11b`<br />Llama 3.2 11B Vision Instruct | llama | image, text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.16 / output: 0.16 | 2024-09-25 |
| `meta/llama-3.2-1b`<br />Llama 3.2 1B Instruct | llama | text | text | temperature | context: 128000 / output: 8192 | input: 0.1 / output: 0.1 | 2024-09-18 |
| `meta/llama-3.2-3b`<br />Llama 3.2 3B Instruct | llama | text | text | temperature | context: 128000 / output: 8192 | input: 0.15 / output: 0.15 | 2024-09-18 |
| `meta/llama-3.2-90b`<br />Llama 3.2 90B Vision Instruct | llama | image, text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.72 / output: 0.72 | 2024-09-25 |
| `meta/llama-3.3-70b`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-06 |
| `meta/llama-4-maverick`<br />Llama-4-Maverick-17B-128E-Instruct-FP8 | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `meta/llama-4-scout`<br />Llama-4-Scout-17B-16E-Instruct-FP8 | llama | image, text | text | tools, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2025-04-05 |
| `minimax/minimax-m2`<br />MiniMax M2 | minimax | text | text | tools, reasoning, temperature, open weights | context: 205000 / output: 205000 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2025-10-27 |
| `minimax/minimax-m2.1`<br />MiniMax M2.1 | minimax | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2025-12-23 |
| `minimax/minimax-m2.1-lightning`<br />MiniMax M2.1 Lightning | minimax | text | text | tools, reasoning, temperature | context: 204800 / output: 131072 | input: 0.3 / output: 2.4 / cache_read: 0.03 / cache_write: 0.375 | 2025-10-27 |
| `minimax/minimax-m2.5`<br />MiniMax M2.5 | minimax | text | text | tools, reasoning, temperature | context: 204800 / output: 131000 | input: 0.3 / output: 1.2 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-12 |
| `minimax/minimax-m2.5-highspeed`<br />MiniMax M2.5 High Speed | minimax | text | text | tools, reasoning, temperature | context: 204800 / output: 131000 | input: 0.6 / output: 2.4 / cache_read: 0.03 / cache_write: 0.375 | 2026-02-13 |
| `minimax/minimax-m2.7`<br />Minimax M2.7 | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131000 | input: 0.3 / output: 1.2 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax/minimax-m2.7-highspeed`<br />MiniMax M2.7 High Speed | minimax | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131100 | input: 0.6 / output: 2.4 / cache_read: 0.06 / cache_write: 0.375 | 2026-03-18 |
| `minimax/minimax-m3`<br />MiniMax M3 | minimax-m3 | image, pdf, text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 1000000 | input: 0.3 / output: 1.2 / cache_read: 0.06 | 2026-06-01 |
| `mistral/codestral`<br />Codestral (latest) | codestral | text | text | tools, temperature, open weights | context: 256000 / output: 4096 | input: 0.3 / output: 0.9 | 2025-01-04 |
| `mistral/codestral-embed`<br />Codestral Embed | codestral-embed | text | text | temperature | context: 8192 / output: 1536 | - | 2025-05-28 |
| `mistral/devstral-2`<br />Devstral 2 | devstral | text | text | tools, temperature | context: 256000 / output: 256000 | input: 0.4 / output: 2 | 2025-12-09 |
| `mistral/devstral-small`<br />Devstral Small 1.1 | devstral | text | text | tools, temperature | context: 128000 / output: 64000 | input: 0.1 / output: 0.3 | 2025-05-07 |
| `mistral/devstral-small-2`<br />Devstral Small 2 | devstral | image, text | text | tools, temperature | context: 256000 / output: 256000 | input: 0.1 / output: 0.3 | 2025-05-07 |
| `mistral/magistral-medium`<br />Magistral Medium (latest) | magistral-medium | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 2 / output: 5 | 2025-03-20 |
| `mistral/magistral-small`<br />Magistral Small | magistral-small | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.5 / output: 1.5 | 2025-03-17 |
| `mistral/ministral-14b`<br />Ministral 14B | ministral | image, pdf, text | text | temperature | context: 256000 / output: 256000 | input: 0.2 / output: 0.2 | 2025-12-01 |
| `mistral/ministral-3b`<br />Ministral 3B (latest) | ministral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.04 / output: 0.04 | 2024-10-04 |
| `mistral/ministral-8b`<br />Ministral 8B (latest) | ministral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.1 / output: 0.1 | 2024-10-04 |
| `mistral/mistral-embed`<br />Mistral Embed | mistral-embed | text | text | temperature | context: 8192 / output: 1536 | - | 2023-12-11 |
| `mistral/mistral-large-3`<br />Mistral Large 3 | mistral-large | image, text | text | temperature | context: 256000 / output: 256000 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral/mistral-medium`<br />Mistral Medium 3.1 | mistral-medium | image, text | text | tools, temperature | context: 128000 / output: 64000 | input: 0.4 / output: 2 | 2025-05-07 |
| `mistral/mistral-medium-3.5`<br />Mistral Medium Latest | mistral-medium | image, text | text | tools, reasoning, temperature | context: 256000 / output: 256000 | input: 1.5 / output: 7.5 | 2026-05-21 |
| `mistral/mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | tools, temperature | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-07-01 |
| `mistral/mistral-small`<br />Mistral Small (latest) | mistral-small | image, text | text | tools, temperature, open weights | context: 32000 / output: 4000 | input: 0.1 / output: 0.3 | 2026-03-16 |
| `mistral/pixtral-12b`<br />Pixtral 12B | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-09-01 |
| `mistral/pixtral-large`<br />Pixtral Large (latest) | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 2 / output: 6 | 2024-11-04 |
| `moonshotai/kimi-k2`<br />Kimi K2 Instruct | kimi-k2 | text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.57 / output: 2.3 | 2025-09-05 |
| `moonshotai/kimi-k2-thinking`<br />Kimi K2 Thinking | kimi-thinking | text | text | tools, reasoning, temperature | context: 262114 / output: 262114 | input: 0.6 / output: 2.5 / cache_read: 0.15 | 2025-11-06 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262114 / output: 262114 | input: 0.6 / output: 3 / cache_read: 0.1 | 2026-01 |
| `moonshotai/kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262000 / output: 262000 | input: 0.95 / output: 4 / cache_read: 0.16 | 2026-04-21 |
| `moonshotai/kimi-k2.7-code`<br />Kimi K2.7 Code | kimi-k2 | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 32768 | input: 0.95 / output: 4 / cache_read: 0.19 | 2026-06-12 |
| `moonshotai/kimi-k2.7-code-highspeed`<br />Kimi K2.7 Code High Speed | kimi-k2 | image, pdf, text | text | tools, schema, reasoning, temperature | context: 262144 / output: 32768 | input: 1.9 / output: 8 / cache_read: 0.38 | 2026-06-12 |
| `morph/morph-v3-fast`<br />Morph v3 Fast | morph | text | text | - | context: 16000 / output: 16000 | input: 0.8 / output: 1.2 | 2024-08-15 |
| `morph/morph-v3-large`<br />Morph v3 Large | morph | text | text | - | context: 32000 / output: 32000 | input: 0.9 / output: 1.9 | 2024-08-15 |
| `nvidia/nemotron-3-nano-30b-a3b`<br />Nemotron 3 Nano 30B A3B | nemotron | text | text | reasoning, temperature | context: 262144 / output: 262144 | input: 0.05 / output: 0.24 | 2025-12-15 |
| `nvidia/nemotron-3-super-120b-a12b`<br />NVIDIA Nemotron 3 Super 120B A12B | nemotron | text | text | reasoning, temperature | context: 256000 / output: 32000 | input: 0.15 / output: 0.65 | 2026-03-11 |
| `nvidia/nemotron-3-ultra-550b-a55b`<br />Nemotron 3 Ultra | nemotron | text | text | tools, reasoning, temperature | context: 1000000 / output: 65000 | input: 0.6 / output: 2.4 / cache_read: 0.12 | 2026-06-04 |
| `nvidia/nemotron-nano-12b-v2-vl`<br />Nvidia Nemotron Nano 12B V2 VL | nemotron | image, text | text | tools, reasoning, temperature | context: 131072 / output: 131072 | input: 0.2 / output: 0.6 | 2025-10-28 |
| `nvidia/nemotron-nano-9b-v2`<br />Nvidia Nemotron Nano 9B V2 | nemotron | text | text | tools, reasoning, temperature | context: 131072 / output: 131072 | input: 0.06 / output: 0.23 | 2025-08-18 |
| `openai/gpt-3.5-turbo`<br />GPT-3.5 Turbo | gpt | text | text | temperature | context: 16385 / input: 12289 / output: 4096 | input: 0.5 / output: 1.5 | 2023-11-06 |
| `openai/gpt-3.5-turbo-instruct`<br />GPT-3.5 Turbo Instruct | gpt | text | text | temperature | context: 8192 / input: 4096 / output: 4096 | input: 1.5 / output: 2 | 2023-03-01 |
| `openai/gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `openai/gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `openai/gpt-4o-mini-search-preview`<br />GPT 4o Mini Search Preview | gpt-mini | text | text | temperature | context: 128000 / input: 111616 / output: 16384 | input: 0.15 / output: 0.6 | 2025-01 |
| `openai/gpt-4o-mini-transcribe`<br />GPT-4o mini Transcribe | o-mini | audio | text | temperature | context: 0 / output: 0 | input: 1.25 / output: 5 | 2024-03-13 |
| `openai/gpt-4o-transcribe`<br />GPT-4o Transcribe | gpt | audio | text | temperature | context: 0 / output: 0 | input: 2.5 / output: 10 | 2024-03-13 |
| `openai/gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-chat`<br />GPT-5 Chat | gpt | image, pdf, text | image, text | tools, reasoning, temperature | context: 128000 / input: 111616 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai/gpt-5-pro`<br />GPT-5 pro | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 128000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `openai/gpt-5.1-codex`<br />GPT-5.1-Codex | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-max`<br />GPT 5.1 Codex Max | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `openai/gpt-5.1-instant`<br />GPT-5.1 Instant | gpt | image, pdf, text | text | tools, reasoning, temperature | context: 128000 / input: 111616 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5.1-thinking`<br />GPT 5.1 Thinking | gpt | image, pdf, text | image, text | tools, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-chat`<br />GPT-5.2 Chat | gpt | image, pdf, text | text | tools, reasoning, temperature | context: 128000 / input: 111616 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-08-07 |
| `openai/gpt-5.2-codex`<br />GPT-5.2-Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.2-pro`<br />GPT 5.2  | gpt | image, pdf, text | text | tools, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai/gpt-5.3-chat`<br />GPT-5.3 Chat | gpt | image, pdf, text | text | tools, reasoning, temperature | context: 128000 / input: 111616 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-06 |
| `openai/gpt-5.3-codex`<br />GPT 5.3 Codex | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `openai/gpt-5.4`<br />GPT 5.4 | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.4-mini`<br />GPT 5.4 Mini | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai/gpt-5.4-nano`<br />GPT 5.4 Nano | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai/gpt-5.4-pro`<br />GPT 5.4 Pro | gpt | image, pdf, text | text | tools, reasoning, temperature | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT 5.5 | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / input: 872000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `openai/gpt-5.5-pro`<br />GPT 5.5 Pro | gpt | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / input: 872000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `openai/gpt-image-1`<br />GPT Image 1 | gpt-image | text | image | temperature | context: 0 / output: 0 | input: 5 / output: 40 / cache_read: 1.25 | 2025-04-24 |
| `openai/gpt-image-1-mini`<br />GPT Image 1 Mini | gpt-image | text | image | temperature | context: 0 / output: 0 | input: 2 / output: 8 / cache_read: 0.2 | 2025-10-06 |
| `openai/gpt-image-1.5`<br />GPT Image 1.5 | gpt-image | text | image | temperature | context: 0 / output: 0 | input: 5 / output: 32 / cache_read: 1.25 | 2025-11-25 |
| `openai/gpt-image-2`<br />GPT Image 2 | gpt-image | text | image | temperature | context: 0 / output: 0 | input: 5 / output: 30 / cache_read: 1.25 | 2026-04-21 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / input: 72 / output: 131000 | input: 0.35 / output: 0.75 / cache_read: 0.25 | 2025-08-05 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, reasoning, temperature, open weights | context: 131072 / input: 122880 / output: 8192 | input: 0.05 / output: 0.2 | 2025-08-05 |
| `openai/gpt-oss-safeguard-20b`<br />gpt-oss-safeguard-20b | gpt-oss | text | text | tools, reasoning, temperature | context: 131072 / input: 65536 / output: 65536 | input: 0.075 / output: 0.3 / cache_read: 0.037 | 2024-12-01 |
| `openai/gpt-realtime-1.5`<br />GPT-Realtime-1.5 | gpt | audio, text | audio, text | temperature | context: 0 / output: 0 | input: 4 / output: 16 / cache_read: 0.4 | 2026-02-23 |
| `openai/gpt-realtime-2`<br />gpt-realtime-2 | gpt | audio, text | audio, text | temperature | context: 0 / output: 0 | input: 4 / output: 24 / cache_read: 0.4 | 2026-05-07 |
| `openai/gpt-realtime-mini`<br />GPT-Realtime mini | gpt | audio, text | audio, text | temperature | context: 0 / output: 0 | input: 0.6 / output: 2.4 / cache_read: 0.06 | 2025-10-10 |
| `openai/o1`<br />o1 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `openai/o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai/o3-deep-research`<br />o3-deep-research | o | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / input: 100000 / output: 100000 | input: 10 / output: 40 / cache_read: 2.5 | 2024-06-26 |
| `openai/o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `openai/o3-pro`<br />o3 Pro | o-pro | image, pdf, text | text | tools, schema, reasoning, temperature | context: 200000 / input: 100000 / output: 100000 | input: 20 / output: 80 | 2025-06-10 |
| `openai/o4-mini`<br />o4-mini | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `openai/text-embedding-3-large`<br />text-embedding-3-large | text-embedding | text | text | temperature | context: 8192 / input: 6656 / output: 1536 | - | 2024-01-25 |
| `openai/text-embedding-3-small`<br />text-embedding-3-small | text-embedding | text | text | temperature | context: 8192 / input: 6656 / output: 1536 | - | 2024-01-25 |
| `openai/text-embedding-ada-002`<br />text-embedding-ada-002 | text-embedding | text | text | temperature | context: 8192 / input: 6656 / output: 1536 | - | 2022-12-15 |
| `openai/tts-1`<br />TTS-1 | o | text | audio | temperature | context: 0 / output: 0 | - | 2023-11-06 |
| `openai/tts-1-hd`<br />TTS-1 HD | o | text | audio | temperature | context: 0 / output: 0 | - | 2023-11-06 |
| `openai/whisper-1`<br />Whisper | whisper | audio | text | temperature | context: 0 / output: 0 | - | 2022-09-21 |
| `perplexity/sonar`<br />Sonar | sonar | image, text | text | tools, temperature | context: 127000 / output: 8000 | - | 2025-02-19 |
| `perplexity/sonar-pro`<br />Sonar Pro | sonar-pro | image, text | text | tools, temperature | context: 200000 / output: 8000 | - | 2025-02-19 |
| `perplexity/sonar-reasoning-pro`<br />Sonar Reasoning Pro | sonar-reasoning | text | text | reasoning, temperature | context: 127000 / output: 8000 | - | 2025-02-19 |
| `prodia/flux-fast-schnell`<br />Flux Schnell | flux | text | image | temperature | context: 512 / output: 0 | - | 2026-06-08 |
| `recraft/recraft-v2`<br />Recraft V2 | recraft | text | image | temperature | context: 512 / output: 0 | - | 2024-03 |
| `recraft/recraft-v3`<br />Recraft V3 | recraft | text | image | temperature | context: 512 / output: 0 | - | 2024-10 |
| `recraft/recraft-v4`<br />Recraft V4 | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-02-17 |
| `recraft/recraft-v4-pro`<br />Recraft V4 Pro | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-02-17 |
| `recraft/recraft-v4.1`<br />Recraft V4.1 | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-05-14 |
| `recraft/recraft-v4.1-pro`<br />Recraft V4.1 Pro | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-05-14 |
| `recraft/recraft-v4.1-utility`<br />Recraft V4.1 Utility | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-05-14 |
| `recraft/recraft-v4.1-utility-pro`<br />Recraft V4.1 Utility Pro | recraft | text | image | temperature | context: 0 / output: 0 | - | 2026-05-14 |
| `sakana/fugu-ultra`<br />Fugu Ultra | aura | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 1000000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-06-21 |
| `stepfun/step-3.5-flash`<br />StepFun 3.5 Flash | step | text | text | tools, reasoning, temperature | context: 262114 / output: 262114 | input: 0.09 / output: 0.3 / cache_read: 0.02 | 2026-02-13 |
| `stepfun/step-3.7-flash`<br />Step 3.7 Flash | step | image, text | text | tools, reasoning, temperature | context: 256000 / input: 256000 / output: 256000 | input: 0.2 / output: 1.15 / cache_read: 0.04 | 2026-05-29 |
| `voyage/rerank-2.5`<br />Voyage Rerank 2.5 | voyage | text | text | temperature | context: 32000 / output: 32000 | - | 2025-08-11 |
| `voyage/rerank-2.5-lite`<br />Voyage Rerank 2.5 Lite | voyage | text | text | temperature | context: 32000 / output: 32000 | - | 2025-08-11 |
| `voyage/voyage-3-large`<br />voyage-3-large | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2024-09 |
| `voyage/voyage-3.5`<br />voyage-3.5 | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2025-05-20 |
| `voyage/voyage-3.5-lite`<br />voyage-3.5-lite | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2025-05-20 |
| `voyage/voyage-4`<br />voyage-4 | voyage | text | text | temperature | context: 32000 / output: 0 | - | 2026-03-06 |
| `voyage/voyage-4-large`<br />voyage-4-large | voyage | text | text | temperature | context: 32000 / output: 0 | - | 2026-03-06 |
| `voyage/voyage-4-lite`<br />voyage-4-lite | voyage | text | text | temperature | context: 32000 / output: 0 | - | 2026-03-06 |
| `voyage/voyage-code-2`<br />voyage-code-2 | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2024-01 |
| `voyage/voyage-code-3`<br />voyage-code-3 | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2024-09 |
| `voyage/voyage-finance-2`<br />voyage-finance-2 | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2024-03 |
| `voyage/voyage-law-2`<br />voyage-law-2 | voyage | text | text | temperature | context: 8192 / output: 1536 | - | 2024-03 |
| `xai/grok-4.1-fast-non-reasoning`<br />Grok 4.1 Fast Non-Reasoning | grok | image, pdf, text | text | tools, temperature | context: 1000000 / output: 1000000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-07-09 |
| `xai/grok-4.1-fast-reasoning`<br />Grok 4.1 Fast Reasoning | grok | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 1000000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-07-09 |
| `xai/grok-4.20-multi-agent`<br />Grok 4.20 Multi-Agent | grok | image, pdf, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-23 |
| `xai/grok-4.20-multi-agent-beta`<br />Grok 4.20 Multi Agent Beta | grok | image, pdf, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-13 |
| `xai/grok-4.20-non-reasoning`<br />Grok 4.20 Non-Reasoning | grok | image, pdf, text | text | tools, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-23 |
| `xai/grok-4.20-non-reasoning-beta`<br />Grok 4.20 Beta Non-Reasoning | grok | image, pdf, text | text | tools, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.4 | 2026-03-13 |
| `xai/grok-4.20-reasoning`<br />Grok 4.20 Reasoning | grok | image, pdf, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-23 |
| `xai/grok-4.20-reasoning-beta`<br />Grok 4.20 Beta Reasoning | grok | image, pdf, text | text | tools, reasoning, temperature | context: 2000000 / output: 2000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-13 |
| `xai/grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 1000000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `xai/grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-04-16 |
| `xai/grok-imagine-image`<br />Grok Imagine Image | grok | text | image, text | temperature | context: 0 / output: 0 | - | 2026-02-19 |
| `xai/grok-imagine-video`<br />Grok Imagine | grok | text | video | temperature | context: 0 / output: 0 | - | 2026-01-28 |
| `xai/grok-imagine-video-1.5`<br />Grok Imagine Video 1.5 | grok | text | video | temperature | context: 0 / output: 0 | - | 2026-06-22 |
| `xai/grok-imagine-video-1.5-preview`<br />Grok Imagine Video 1.5 Preview | grok | text | video | temperature | context: 0 / output: 0 | - | 2026-05-30 |
| `xai/grok-stt`<br />Grok STT | grok | audio | text | temperature | context: 0 / output: 0 | - | 2026-03-16 |
| `xai/grok-tts`<br />Grok TTS | grok | text | audio | temperature | context: 0 / output: 0 | - | 2026-03-16 |
| `xai/grok-voice-think-fast-1.0`<br />Grok Voice Think Fast 1.0 | grok | audio, text | audio, text | temperature | context: 0 / output: 0 | - | 2026-04-23 |
| `xiaomi/mimo-v2-flash`<br />MiMo V2 Flash | mimo | text | text | tools, reasoning, temperature | context: 262144 / output: 32000 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2026-02-04 |
| `xiaomi/mimo-v2-pro`<br />MiMo V2 Pro | mimo | text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `xiaomi/mimo-v2.5`<br />MiMo M2.5 | mimo-v2.5 | image, pdf, text | text | tools, reasoning, temperature | context: 1050000 / output: 131100 | input: 0.14 / output: 0.28 / cache_read: 0.0028 | 2026-04-22 |
| `xiaomi/mimo-v2.5-pro`<br />MiMo V2.5 Pro | mimo-v2.5-pro | pdf, text | text | tools, reasoning, temperature | context: 1050000 / output: 131000 | input: 0.435 / output: 0.87 / cache_read: 0.0036 | 2026-04-22 |
| `zai/glm-4.5`<br />GLM 4.5 | glm | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 96000 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-07-28 |
| `zai/glm-4.5-air`<br />GLM 4.5 Air | glm-air | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 96000 | input: 0.2 / output: 1.1 / cache_read: 0.03 | 2025-07-28 |
| `zai/glm-4.5v`<br />GLM 4.5V | glm | image, text | text | tools, reasoning, temperature, open weights | context: 66000 / output: 16000 | input: 0.6 / output: 1.8 / cache_read: 0.11 | 2025-08-11 |
| `zai/glm-4.6`<br />GLM 4.6 | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 96000 | input: 0.6 / output: 2.2 / cache_read: 0.11 | 2025-09-30 |
| `zai/glm-4.6v`<br />GLM-4.6V | glm | image, pdf, text | text | tools, reasoning, temperature | context: 128000 / output: 24000 | input: 0.3 / output: 0.9 / cache_read: 0.05 | 2025-12-08 |
| `zai/glm-4.6v-flash`<br />GLM-4.6V-Flash | glm | image, pdf, text | text | tools, reasoning, temperature | context: 128000 / output: 24000 | - | 2025-09-30 |
| `zai/glm-4.7`<br />GLM 4.7 | glm | text | text | tools, reasoning, temperature | context: 131000 / output: 40000 | input: 2.25 / output: 2.75 / cache_read: 2.25 | 2025-12-22 |
| `zai/glm-4.7-flash`<br />GLM 4.7 Flash | glm | text | text | tools, reasoning, temperature | context: 200000 / output: 131000 | input: 0.07 / output: 0.4 | 2026-01-19 |
| `zai/glm-4.7-flashx`<br />GLM 4.7 FlashX | glm-flash | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.06 / output: 0.4 / cache_read: 0.01 | 2026-01-19 |
| `zai/glm-5`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202800 / output: 131100 | input: 1 / output: 3.2 / cache_read: 0.2 | 2026-02-12 |
| `zai/glm-5-turbo`<br />GLM 5 Turbo | glm | text | text | tools, schema, reasoning, temperature | context: 202800 / output: 131100 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-03-16 |
| `zai/glm-5.1`<br />GLM 5.1 | glm | text | text | tools, schema, reasoning, temperature | context: 202800 / output: 64000 | input: 1.4 / output: 4.4 / cache_read: 0.26 | 2026-04-07 |
| `zai/glm-5.2`<br />GLM 5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 128000 | input: 1.5 / output: 4.5 / cache_read: 0.3 | 2026-06-13 |
| `zai/glm-5.2-fast`<br />GLM 5.2 Fast | glm | text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 3 / output: 10.25 / cache_read: 0.5 | 2026-06-16 |
| `zai/glm-5v-turbo`<br />GLM 5V Turbo | glm | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 1.2 / output: 4 / cache_read: 0.24 | 2026-04-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

