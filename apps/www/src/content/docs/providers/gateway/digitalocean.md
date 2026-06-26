---
title: "DigitalOcean"
description: "Use DigitalOcean through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1035
  label: "DigitalOcean"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://inference.do-ai.run/v1 |
| Environment | `DIGITALOCEAN_ACCESS_TOKEN` |
| Provider docs | [https://docs.digitalocean.com/products/gradient-ai-platform/details/models/](https://docs.digitalocean.com/products/gradient-ai-platform/details/models/) |
| Models | 80 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.DIGITALOCEAN_ACCESS_TOKEN,
  baseUrl: "https://inference.do-ai.run/v1",
  completionApi: "chat",
});

const model = client.completionModel("alibaba-qwen3-32b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, image, text, video |
| Attachments | 41 / 80 models |
| Tools | 63 / 80 models |
| Structured output | 29 / 80 models |
| Reasoning | 44 / 80 models |
| Temperature | 44 / 80 models |
| Open weights | 39 / 80 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `alibaba-qwen3-32b`<br />Qwen3-32B | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131000 / output: 40960 | input: 0.25 / output: 0.55 | 2026-04-16 |
| `all-mini-lm-l6-v2`<br />All-MiniLM-L6-v2 | text-embedding | text | text | open weights | context: 256 / output: 384 | input: 0.009 / output: 0 | 2026-04-16 |
| `anthropic-claude-3-opus`<br />Claude 3 Opus | claude-opus | image, text | text | tools, temperature | context: 200000 / output: 4096 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2024-02-29 |
| `anthropic-claude-3.5-haiku`<br />Claude 3.5 Haiku | claude-haiku | text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-11-05 |
| `anthropic-claude-3.5-sonnet`<br />Claude 3.5 Sonnet | claude-sonnet | image, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-10-22 |
| `anthropic-claude-3.7-sonnet`<br />Claude 3.7 Sonnet | claude-sonnet | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-24 |
| `anthropic-claude-4.1-opus`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `anthropic-claude-4.5-haiku`<br />Claude Haiku 4.5 | claude-haiku | image, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic-claude-4.5-sonnet`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic-claude-4.6-sonnet`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `anthropic-claude-fable-5`<br />Anthropic Claude Fable 5 | claude-fable | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | - | 2026-06-12 |
| `anthropic-claude-haiku-4.5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic-claude-opus-4`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic-claude-opus-4.5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic-claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic-claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `anthropic-claude-opus-4.8`<br />Claude Opus 4.8 | claude-opus | image, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-29 |
| `anthropic-claude-sonnet-4`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `arcee-trinity-large-thinking`<br />Trinity Large Thinking | trinity | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 128000 | input: 0.25 / output: 0.9 / cache_read: 0.06 | 2026-04-16 |
| `bge-m3`<br />BGE M3 | bge | text | text | open weights | context: 8192 / output: 1024 | input: 0.02 / output: 0 | 2026-04-30 |
| `bge-reranker-v2-m3`<br />BGE Reranker v2 M3 | bge | text | text | open weights | context: 8192 / output: 1 | input: 0.01 / output: 0 | 2026-04-30 |
| `deepseek-3.2`<br />DeepSeek V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 64000 | input: 0.5 / output: 1.6 | 2026-04-30 |
| `deepseek-4-flash`<br />Deepseek V4 Flash | deepseek | text | text | tools, temperature | context: 262144 / output: 8192 | - | 2026-05-29 |
| `deepseek-r1-distill-llama-70b`<br />DeepSeek R1 Distill Llama 70B | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 32768 | input: 0.99 / output: 0.99 | 2025-01-30 |
| `deepseek-v3`<br />DeepSeek V3 | deepseek | text | text | tools, temperature, open weights | context: 163840 / output: 131072 | - | 2025-03-24 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 393216 | input: 1.74 / output: 3.48 | 2026-04-24 |
| `e5-large-v2`<br />E5 Large v2 | text-embedding | text | text | open weights | context: 512 / output: 1024 | input: 0.02 / output: 0 | 2026-04-30 |
| `fal-ai/elevenlabs/tts/multilingual-v2`<br />ElevenLabs Multilingual TTS v2 | elevenlabs | text | audio | - | context: 0 / output: 0 | - | 2026-04-16 |
| `fal-ai/fast-sdxl`<br />Fast SDXL | stable-diffusion | text | image | open weights | context: 0 / output: 0 | - | 2026-04-16 |
| `fal-ai/flux/schnell`<br />FLUX.1 [schnell] | flux | text | image | open weights | context: 0 / output: 0 | - | 2026-04-16 |
| `fal-ai/stable-audio-25/text-to-audio`<br />Stable Audio 2.5 (Text-to-Audio) | - | text | audio | - | context: 0 / output: 0 | - | 2026-04-16 |
| `gemma-4-31B-it`<br />Gemma 4 31B | gemma | image, text | text | tools, schema, temperature, open weights | context: 256000 / output: 8192 | input: 0.18 / output: 0.5 | 2026-04-30 |
| `glm-5`<br />GLM 5 | glm | text | text | tools, reasoning, open weights | context: 202752 / output: 128000 | input: 1 / output: 3.2 | 2026-04-16 |
| `gte-large-en-v1.5`<br />GTE Large (v1.5) | text-embedding | text | text | open weights | context: 8192 / output: 1024 | input: 0.09 / output: 0 | 2026-04-16 |
| `kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | text | text | tools, schema, reasoning, open weights | context: 262144 / output: 32768 | input: 0.5 / output: 2.7 | 2026-04-16 |
| `kimi-k2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-04-21 |
| `llama-4-maverick`<br />Llama 4 Maverick 17B 128E Instruct | llama | image, text | text | tools, schema, temperature, open weights | context: 1000000 / output: 16384 | input: 0.25 / output: 0.87 | 2026-04-30 |
| `llama3-8b-instruct`<br />Llama 3.1 Instruct (8B) | llama | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0.198 / output: 0.198 | 2024-07-23 |
| `llama3.3-70b-instruct`<br />Llama 3.3 Instruct 70B | llama | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.65 / output: 0.65 | 2024-12-06 |
| `minimax-m2.5`<br />MiniMax M2.5 | minimax-m2.5 | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 128000 | input: 0.3 / output: 1.2 | 2026-04-16 |
| `ministral-3-8b-instruct-2512`<br />Ministral 3 8B | ministral | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | - | 2025-12-15 |
| `mistral-3-14B`<br />Ministral 3 14B Instruct | ministral | text | text | tools, schema, temperature, open weights | context: 262144 / output: 128000 | input: 0.2 / output: 0.2 | 2026-04-30 |
| `mistral-7b-instruct-v0.3`<br />Mistral 7B Instruct v0.3 | mistral | text | text | tools, temperature, open weights | context: 32768 / output: 32768 | - | 2024-05-22 |
| `mistral-nemo-instruct-2407`<br />Mistral Nemo Instruct | mistral | text | text | tools, temperature, open weights | context: 128000 / output: 16384 | input: 0.3 / output: 0.3 | 2024-07-18 |
| `multi-qa-mpnet-base-dot-v1`<br />Multi-QA-mpnet-base-dot-v1 | text-embedding | text | text | open weights | context: 512 / output: 768 | input: 0.009 / output: 0 | 2026-04-16 |
| `nemotron-3-nano-30b`<br />Nemotron 3 Nano 30B A3B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 262144 | - | 2025-04-14 |
| `nemotron-3-nano-omni`<br />Nemotron Nano 3 Omni | nemotron | audio, image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.5 / output: 0.9 | 2026-04-30 |
| `nemotron-3-ultra-550b`<br />Nemotron 3 Ultra | nemotron | text | text | tools, temperature | context: 131072 / output: 8192 | - | 2026-06-12 |
| `nemotron-nano-12b-v2-vl`<br />Nemotron Nano 12B v2 VL | nemotron | image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 0.2 / output: 0.6 | 2026-04-30 |
| `nvidia-nemotron-3-super-120b`<br />Nemotron-3-Super-120B | nemotron | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 32768 | input: 0.3 / output: 0.65 | 2026-04-16 |
| `openai-gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `openai-gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `openai-gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `openai-gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `openai-gpt-5-mini`<br />GPT-5 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai-gpt-5-nano`<br />GPT-5 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `openai-gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai-gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai-gpt-5.2-pro`<br />GPT-5.2 pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `openai-gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `openai-gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai-gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `openai-gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `openai-gpt-5.4-pro`<br />GPT-5.4 pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `openai-gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-30 |
| `openai-gpt-image-1`<br />GPT Image 1 | gpt-image | image, text | image | - | context: 0 / output: 0 | input: 5 / output: 40 / cache_read: 1.25 | 2025-04-24 |
| `openai-gpt-image-1.5`<br />GPT Image 1.5 | gpt-image | image, text | image | - | context: 0 / output: 0 | input: 5 / output: 10 / cache_read: 1 | 2025-11-25 |
| `openai-gpt-image-2`<br />GPT Image 2 | gpt-image | image, text | image | - | context: 0 / output: 0 | - | 2025-04-24 |
| `openai-gpt-oss-120b`<br />gpt-oss-120b | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.1 / output: 0.7 | 2026-04-16 |
| `openai-gpt-oss-20b`<br />gpt-oss-20b | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.05 / output: 0.45 | 2026-04-16 |
| `openai-o1`<br />o1 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `openai-o3`<br />o3 | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `openai-o3-mini`<br />o3-mini | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `qwen-2.5-14b-instruct`<br />Qwen 2.5 14B Instruct | qwen | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | - | 2024-09-19 |
| `qwen3-coder-flash`<br />Qwen3 Coder Flash | qwen | text | text | tools, temperature, open weights | context: 262144 / output: 65536 | input: 0.45 / output: 1.7 | 2026-04-30 |
| `qwen3-embedding-0.6b`<br />Qwen3 Embedding 0.6B | text-embedding | text | text | open weights | context: 8000 / output: 1024 | input: 0.04 / output: 0 | 2026-04-16 |
| `qwen3-tts-voicedesign`<br />Qwen3 TTS VoiceDesign | qwen | text | audio | open weights | context: 32768 / output: 1 | - | 2026-04-30 |
| `qwen3.5-397b-a17b`<br />Qwen 3.5 397B A17B | qwen3.5 | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 81920 | input: 0.55 / output: 3.5 | 2026-04-30 |
| `stable-diffusion-3.5-large`<br />Stable Diffusion 3.5 Large | stable-diffusion | text | image | open weights | context: 256 / output: 1 | input: 0.08 / output: 0 | 2026-04-30 |
| `wan2-2-t2v-a14b`<br />Wan2.2-T2V-A14B | - | text | video | open weights | context: 100 / output: 1 | input: 0.6 / output: 0 | 2026-04-30 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

