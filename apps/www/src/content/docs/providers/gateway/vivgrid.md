---
title: "Vivgrid"
description: "Review Vivgrid connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1128
  label: "Vivgrid"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | OpenAI-compatible metadata |
| API URL | https://api.vivgrid.com/v1 |
| Environment | `VIVGRID_API_KEY` |
| Provider docs | [https://docs.vivgrid.com/models](https://docs.vivgrid.com/models) |
| Models | 13 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 7 / 13 models |
| Tools | 13 / 13 models |
| Structured output | 10 / 13 models |
| Reasoning | 13 / 13 models |
| Temperature | 4 / 13 models |
| Open weights | 2 / 13 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `deepseek-v3.2`<br />DeepSeek-V3.2 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.28 / output: 0.42 | 2025-12-01 |
| `deepseek-v4-pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1000000 / output: 384000 | input: 0.435 / output: 0.87 / cache_read: 0.003625 | 2026-04-24 |
| `gemini-3.1-flash-lite-preview`<br />Gemini 3.1 Flash Lite Preview | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.25 / output: 1.5 / cache_read: 0.025 / cache_write: 1 | 2026-03-03 |
| `gemini-3.1-pro-preview`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 2 / output: 12 / cache_read: 0.2 | 2026-02-19 |
| `gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, reasoning | context: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.03 | 2025-08-07 |
| `gpt-5.1-codex`<br />GPT-5.1 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.1-codex-max`<br />GPT-5.1 Codex Max | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-11-13 |
| `gpt-5.2-codex`<br />GPT-5.2 Codex | gpt-codex | image, text | text | tools, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-01-14 |
| `gpt-5.3-codex`<br />GPT-5.3 Codex | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / output: 128000 | input: 1.75 / output: 14 / cache_read: 0.175 | 2026-02-24 |
| `gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.4-mini`<br />GPT-5.4 Mini | gpt-mini | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.75 / output: 4.5 / cache_read: 0.075 | 2026-03-17 |
| `gpt-5.4-nano`<br />GPT-5.4 Nano | gpt-nano | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.2 / output: 1.25 / cache_read: 0.02 | 2026-03-17 |
| `gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

