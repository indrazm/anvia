---
title: "SAP AI Core"
description: "Review SAP AI Core connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1105
  label: "SAP AI Core"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `AICORE_SERVICE_KEY` |
| Provider docs | [https://help.sap.com/docs/sap-ai-core](https://help.sap.com/docs/sap-ai-core) |
| Models | 26 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 24 / 26 models |
| Tools | 23 / 26 models |
| Structured output | 10 / 26 models |
| Reasoning | 18 / 26 models |
| Temperature | 19 / 26 models |
| Open weights | 0 / 26 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic--claude-3-haiku` | claude-haiku | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 0.25 / output: 1.25 / cache_read: 0.03 / cache_write: 0.3 | 2024-03-13 |
| `anthropic--claude-3-opus` | claude-opus | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2024-02-29 |
| `anthropic--claude-3-sonnet` | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 4096 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-03-04 |
| `anthropic--claude-3.5-sonnet` | claude-sonnet | image, pdf, text | text | tools, temperature | context: 200000 / output: 8192 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2024-10-22 |
| `anthropic--claude-3.7-sonnet` | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-02-24 |
| `anthropic--claude-4-opus` | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 32000 | input: 15 / output: 75 / cache_read: 1.5 / cache_write: 18.75 | 2025-05-22 |
| `anthropic--claude-4-sonnet` | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-05-22 |
| `anthropic--claude-4.5-haiku` | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 1 / output: 5 / cache_read: 0.1 / cache_write: 1.25 | 2025-10-15 |
| `anthropic--claude-4.5-opus` | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2025-11-24 |
| `anthropic--claude-4.5-sonnet` | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2025-09-29 |
| `anthropic--claude-4.6-opus` | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-03-13 |
| `anthropic--claude-4.6-sonnet` | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 / cache_write: 3.75 | 2026-03-13 |
| `anthropic--claude-4.7-opus` | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 / cache_write: 6.25 | 2026-04-16 |
| `gemini-2.5-flash` | gemini-flash | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.3 / output: 2.5 / cache_read: 0.03 / input_audio: 1 | 2025-06-05 |
| `gemini-2.5-flash-lite` | gemini-flash-lite | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.1 / output: 0.4 / cache_read: 0.01 / input_audio: 0.3 | 2025-06-17 |
| `gemini-2.5-pro` | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-06-05 |
| `gpt-4.1` | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 2 / output: 8 / cache_read: 0.5 | 2025-04-14 |
| `gpt-4.1-mini` | gpt-mini | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | input: 0.4 / output: 1.6 / cache_read: 0.1 | 2025-04-14 |
| `gpt-5` | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 1.25 / output: 10 / cache_read: 0.125 | 2025-08-07 |
| `gpt-5-mini` | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.25 / output: 2 / cache_read: 0.025 | 2025-08-07 |
| `gpt-5-nano` | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0.05 / output: 0.4 / cache_read: 0.005 | 2025-08-07 |
| `gpt-5.4` | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 2.5 / output: 15 / cache_read: 0.25 | 2026-03-05 |
| `gpt-5.5` | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 5 / output: 30 / cache_read: 0.5 | 2026-04-23 |
| `sonar` | sonar | text | text | temperature | context: 128000 / output: 4096 | input: 1 / output: 1 | 2025-09-01 |
| `sonar-deep-research` | sonar-deep-research | text | text | reasoning | context: 128000 / output: 32768 | input: 2 / output: 8 / reasoning: 3 | 2025-09-01 |
| `sonar-pro` | sonar-pro | image, text | text | temperature | context: 200000 / output: 8192 | input: 3 / output: 15 | 2025-09-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

