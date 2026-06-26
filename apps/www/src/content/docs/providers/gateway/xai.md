---
title: "xAI"
description: "Review xAI connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1132
  label: "xAI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `XAI_API_KEY` |
| Provider docs | [https://docs.x.ai/docs/models](https://docs.x.ai/docs/models) |
| Models | 8 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text, video |
| Output modalities | image, pdf, text, video |
| Attachments | 8 / 8 models |
| Tools | 4 / 8 models |
| Structured output | 5 / 8 models |
| Reasoning | 4 / 8 models |
| Temperature | 5 / 8 models |
| Open weights | 0 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `grok-4.20-0309-non-reasoning`<br />Grok 4.20 (Non-Reasoning) | grok | image, pdf, text | text | tools, schema, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-09 |
| `grok-4.20-0309-reasoning`<br />Grok 4.20 (Reasoning) | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-09 |
| `grok-4.20-multi-agent-0309`<br />Grok 4.20 Multi-Agent | grok | image, pdf, text | text | schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-03-09 |
| `grok-4.3`<br />Grok 4.3 | grok | image, pdf, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 30000 | input: 1.25 / output: 2.5 / cache_read: 0.2 | 2026-04-17 |
| `grok-build-0.1`<br />Grok Build 0.1 | grok-build | image, pdf, text | text | tools, schema, reasoning, temperature | context: 256000 / output: 256000 | input: 1 / output: 2 / cache_read: 0.2 | 2026-04-16 |
| `grok-imagine-image`<br />Grok Imagine Image | grok | image, pdf, text | image, pdf | - | context: 8000 / output: 0 | - | 2026-01-28 |
| `grok-imagine-image-quality`<br />Grok Imagine Image Quality | grok | image, pdf, text | image, pdf | - | context: 8000 / output: 0 | - | 2026-04-03 |
| `grok-imagine-video`<br />Grok Imagine Video | grok | image, pdf, text, video | video | - | context: 1024 / output: 0 | - | 2026-01-28 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

