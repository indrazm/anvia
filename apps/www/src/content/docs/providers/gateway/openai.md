---
title: "OpenAI"
description: "Use OpenAI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1089
  label: "OpenAI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | First-party OpenAI endpoint |
| API URL | Not listed in models.dev |
| Environment | `OPENAI_API_KEY` |
| Provider docs | [https://platform.openai.com/docs/models](https://platform.openai.com/docs/models) |
| Models | 51 |

## Anvia Usage

This is the first-party OpenAI catalog entry. Use the [OpenAI provider](/docs/providers/openai) guide for normal Anvia setup.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const model = client.completionModel("chatgpt-image-latest");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text |
| Output modalities | image, text |
| Attachments | 45 / 51 models |
| Tools | 41 / 51 models |
| Structured output | 36 / 51 models |
| Reasoning | 31 / 51 models |
| Temperature | 13 / 51 models |
| Open weights | 0 / 51 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `chatgpt-image-latest` | gpt-image | image, text | image, text | - | context: 0 / input: 0 / output: 0 | - | 2025-12-16 |
| `gpt-3.5-turbo`<br />GPT-3.5-turbo | gpt | text | text | temperature | context: 16385 / output: 4096 | input: 0.5 / output: 1.5 / cache_read: 0 | 2023-11-06 |
| `gpt-4`<br />GPT-4 | gpt | text | text | tools, temperature | context: 8192 / output: 8192 | input: 30 / output: 60 | 2024-04-09 |
| `gpt-4-turbo`<br />GPT-4 Turbo | gpt | image, text | text | tools, temperature | context: 128000 / output: 4096 | input: 10 / output: 30 | 2024-04-09 |
| `gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-4.1-mini`<br />GPT-4.1 mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `gpt-4.1-nano`<br />GPT-4.1 nano | gpt-nano | image, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.1 / output: 0.4 / cache_read: 0.025 | 2025-04-14 |
| `gpt-4o`<br />GPT-4o | gpt | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `gpt-4o-2024-05-13`<br />GPT-4o (2024-05-13) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 4096 | input: 5 / output: 15 | 2024-05-13 |
| `gpt-4o-2024-08-06`<br />GPT-4o (2024-08-06) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-08-06 |
| `gpt-4o-2024-11-20`<br />GPT-4o (2024-11-20) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 2.5 / output: 10 / cache_read: 1.25 | 2024-11-20 |
| `gpt-4o-mini`<br />GPT-4o mini | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 0.15 / output: 0.6 / cache_read: 0.075 | 2024-07-18 |
| `gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `gpt-5-chat-latest`<br />GPT-5 Chat (latest) | gpt-codex | image, text | text | schema, reasoning, temperature | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `gpt-5-codex`<br />GPT-5-Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-09-15 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `gpt-5-pro`<br />GPT-5 Pro | gpt-pro | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 272000 | input: 15 / output: 120 | 2025-10-06 |
| `gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-chat-latest`<br />GPT-5.1 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-mini`<br />GPT-5.1 Codex mini | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-11-13 |
| `gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-chat-latest`<br />GPT-5.2 Chat | gpt-codex | image, text | text | tools, schema, reasoning | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `gpt-5.2-pro`<br />GPT-5.2 Pro | gpt-pro | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 21 / output: 168 | 2025-12-11 |
| `gpt-5.3-chat-latest`<br />GPT-5.3 Chat (latest) | gpt | image, text | text | tools, schema, temperature | context: 128000 / output: 16384 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-03-03 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `gpt-5.3-codex-spark`<br />GPT-5.3 Codex Spark | gpt-codex-spark | image, pdf, text | text | tools, schema, reasoning | context: 128000 / input: 100000 / output: 32000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-05 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.4-pro`<br />GPT-5.4 Pro | gpt-pro | image, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-03-05 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `gpt-5.5-pro`<br />GPT-5.5 Pro | gpt-pro | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 30 / output: 180 | 2026-04-23 |
| `gpt-image-1` | gpt-image | image, text | image | - | context: 0 / input: 0 / output: 0 | - | 2025-04-24 |
| `gpt-image-1-mini` | gpt-image | image, text | image, text | - | context: 0 / input: 0 / output: 0 | - | 2025-09-26 |
| `gpt-image-1.5` | gpt-image | image, text | image, text | - | context: 0 / input: 0 / output: 0 | - | 2025-11-25 |
| `gpt-image-2` | gpt-image | image, text | image | - | context: 0 / input: 0 / output: 0 | input: 5 / output: 30 / cache_read: 1.25 | 2026-04-21 |
| `o1` | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 15 / output: 60 / cache_read: 7.5 | 2024-12-05 |
| `o1-pro` | o-pro | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 150 / output: 600 | 2025-03-19 |
| `o3` | o | image, pdf, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-16 |
| `o3-deep-research` | o | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 10 / output: 40 / cache_read: 2.5 | 2024-06-26 |
| `o3-mini` | o-mini | text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.55 | 2025-01-29 |
| `o3-pro` | o-pro | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 20 / output: 80 | 2025-06-10 |
| `o4-mini` | o-mini | image, text | text | tools, schema, reasoning | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 / cache_read: 0.275 | 2025-04-16 |
| `o4-mini-deep-research` | o-mini | image, text | text | tools, reasoning | context: 200000 / output: 100000 | input: 2 / output: 8 / cache_read: 0.5 | 2024-06-26 |
| `text-embedding-3-large` | text-embedding | text | text | - | context: 8191 / output: 3072 | input: 0.13 / output: 0 | 2024-01-25 |
| `text-embedding-3-small` | text-embedding | text | text | - | context: 8191 / output: 1536 | input: 0.02 / output: 0 | 2024-01-25 |
| `text-embedding-ada-002` | text-embedding | text | text | - | context: 8192 / output: 1536 | input: 0.1 / output: 0 | 2022-12-15 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

