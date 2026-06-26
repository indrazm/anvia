---
title: "Perplexity Agent"
description: "Review Perplexity Agent connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1096
  label: "Perplexity Agent"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | OpenAI-compatible metadata |
| API URL | https://api.perplexity.ai/v1 |
| Environment | `PERPLEXITY_API_KEY` |
| Provider docs | [https://docs.perplexity.ai/docs/agent-api/models](https://docs.perplexity.ai/docs/agent-api/models) |
| Models | 18 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 16 / 18 models |
| Tools | 18 / 18 models |
| Structured output | 0 / 18 models |
| Reasoning | 16 / 18 models |
| Temperature | 12 / 18 models |
| Open weights | 1 / 18 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-haiku-4-5`<br />Claude Haiku 4.5 | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 | 2025-10-15 |
| `anthropic/claude-opus-4-5`<br />Claude Opus 4.5 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 | 2025-11-24 |
| `anthropic/claude-opus-4-6`<br />Claude Opus 4.6 | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 | 2026-02-05 |
| `anthropic/claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 | 2026-04-16 |
| `anthropic/claude-sonnet-4-5`<br />Claude Sonnet 4.5 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 | 2025-09-29 |
| `anthropic/claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 | 2026-02-17 |
| `google/gemini-2.5-flash`<br />Gemini 2.5 Flash | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 | 2025-06-05 |
| `google/gemini-2.5-pro`<br />Gemini 2.5 Pro | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-05 |
| `google/gemini-3-flash-preview`<br />Gemini 3 Flash Preview | gemini-flash | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 / cache_read: 0.05 | 2025-12-17 |
| `google/gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `nvidia/nemotron-3-super-120b-a12b`<br />Nemotron 3 Super 120B | nemotron | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 32000 | input: 0.25 / output: 2.5 | 2026-03-11 |
| `openai/gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `openai/gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `openai/gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2025-12-11 |
| `openai/gpt-5.4`<br />GPT-5.4 | gpt | image, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `openai/gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `perplexity/sonar`<br />Sonar | sonar | text | text | tools, temperature | context: 128000 / output: 8192 | input: 0.25 / output: 2.5 / cache_read: 0.0625 | 2025-09-01 |
| `xai/grok-4-1-fast-non-reasoning`<br />Grok 4.1 Fast (Non-Reasoning) | grok | image, text | text | tools, temperature | context: 2000000 / output: 30000 | input: 0.2 / output: 0.5 / cache_read: 0.05 | 2025-11-19 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

