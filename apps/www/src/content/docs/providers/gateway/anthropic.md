---
title: "Anthropic"
description: "Use Anthropic through @anvia/anthropic."
section: providers
sidebar:
  group: LLM Gateway
  order: 1012
  label: "Anthropic"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/anthropic |
| Compatibility | First-party Anthropic endpoint |
| API URL | Not listed in models.dev |
| Environment | `ANTHROPIC_API_KEY` |
| Provider docs | [https://docs.anthropic.com/en/docs/about-claude/models](https://docs.anthropic.com/en/docs/about-claude/models) |
| Models | 25 |

## Anvia Usage

This provider maps to the Anvia Anthropic adapter without a separate API URL. Use the first-party Anvia Anthropic provider guide when this is Anthropic itself.

```ts
import { AnthropicClient } from "@anvia/anthropic";

const client = new AnthropicClient({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const model = client.completionModel("claude-3-5-haiku-20241022");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text |
| Output modalities | text |
| Attachments | 25 / 25 models |
| Tools | 25 / 25 models |
| Structured output | 0 / 25 models |
| Reasoning | 18 / 25 models |
| Temperature | 22 / 25 models |
| Open weights | 0 / 25 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-3-5-haiku-20241022`<br />Claude Haiku 3.5 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `claude-3-5-haiku-latest`<br />Claude Haiku 3.5 (latest) | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 0.8 / output: 4 / cache_read: 0.08 / cache_write: 1 | 2024-10-22 |
| `claude-3-5-sonnet-20240620`<br />Claude Sonnet 3.5 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-06-20 |
| `claude-3-5-sonnet-20241022`<br />Claude Sonnet 3.5 v2 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-10-22 |
| `claude-3-7-sonnet-20250219`<br />Claude Sonnet 3.7 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-19 |
| `claude-3-haiku-20240307`<br />Claude Haiku 3 | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-13 |
| `claude-3-opus-20240229`<br />Claude Opus 3 | claude-opus | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2024-02-29 |
| `claude-3-sonnet-20240229`<br />Claude Sonnet 3 | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 0.3 | 2024-03-04 |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 10 / output: 50 / cache_read: 1 / cache_write: 12.5 | 2026-06-09 |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-haiku-4-5-20251001`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `claude-opus-4-0`<br />Claude Opus 4 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `claude-opus-4-1`<br />Claude Opus 4.1 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-1-20250805`<br />Claude Opus 4.1 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-08-05 |
| `claude-opus-4-20250514`<br />Claude Opus 4 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `claude-opus-4-5`<br />Claude Opus 4.5 (latest) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `claude-opus-4-5-20251101`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-01 |
| `claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-05-28 |
| `claude-sonnet-4-0`<br />Claude Sonnet 4 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `claude-sonnet-4-20250514`<br />Claude Sonnet 4 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-5-20250929`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

