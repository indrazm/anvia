---
title: "Groq"
description: "Review Groq connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1048
  label: "Groq"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `GROQ_API_KEY` |
| Provider docs | [https://console.groq.com/docs/models](https://console.groq.com/docs/models) |
| Models | 15 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text |
| Output modalities | audio, text |
| Attachments | 1 / 15 models |
| Tools | 7 / 15 models |
| Structured output | 4 / 15 models |
| Reasoning | 4 / 15 models |
| Temperature | 11 / 15 models |
| Open weights | 11 / 15 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `canopylabs/orpheus-arabic-saudi`<br />Canopy Labs Orpheus Arabic Saudi | canopylabs | text | audio | - | context: 4000 / output: 50000 | - | 2025-12-16 |
| `canopylabs/orpheus-v1-english`<br />Canopy Labs Orpheus V1 English | canopylabs | text | audio | - | context: 4000 / output: 50000 | - | 2025-12-19 |
| `groq/compound`<br />Compound | groq | text | text | temperature | context: 131072 / output: 8192 | - | 2025-09-04 |
| `groq/compound-mini`<br />Compound Mini | groq | text | text | temperature | context: 131072 / output: 8192 | - | 2025-09-04 |
| `llama-3.1-8b-instant`<br />Llama 3.1 8B | llama | text | text | tools, temperature, open weights | context: 131072 / output: 131072 | input: 0.05 / output: 0.08 | 2024-07-23 |
| `llama-3.3-70b-versatile`<br />Llama 3.3 70B | llama | text | text | tools, temperature, open weights | context: 131072 / output: 32768 | input: 0.59 / output: 0.79 | 2024-12-06 |
| `meta-llama/llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout 17B 16E | llama | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 8192 | input: 0.11 / output: 0.34 | 2025-04-05 |
| `meta-llama/llama-prompt-guard-2-22m`<br />Llama Prompt Guard 2 22M | llama | text | text | open weights | context: 512 / output: 512 | input: 0.03 / output: 0.03 | 2025-05-29 |
| `meta-llama/llama-prompt-guard-2-86m`<br />Prompt Guard 2 86M | llama | text | text | open weights | context: 512 / output: 512 | input: 0.04 / output: 0.04 | 2025-05-29 |
| `openai/gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2025-10-21 |
| `openai/gpt-oss-20b`<br />GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.075 / output: 0.3 / cache_read: 0.0375 | 2025-09-25 |
| `openai/gpt-oss-safeguard-20b`<br />Safety GPT OSS 20B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 65536 | input: 0.075 / output: 0.3 / cache_read: 0.037 | 2025-10-29 |
| `qwen/qwen3-32b`<br />Qwen3-32B | qwen | text | text | tools, reasoning, temperature, open weights | context: 131072 / output: 40960 | input: 0.29 / output: 0.59 | 2025-06-12 |
| `whisper-large-v3`<br />Whisper | whisper | audio | text | temperature, open weights | context: 0 / output: 0 | - | 2025-09-05 |
| `whisper-large-v3-turbo`<br />Whisper Large V3 Turbo | whisper | audio | text | temperature, open weights | context: 0 / output: 0 | - | 2024-10-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

