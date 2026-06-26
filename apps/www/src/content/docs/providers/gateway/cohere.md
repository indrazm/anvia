---
title: "Cohere"
description: "Review Cohere connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1028
  label: "Cohere"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `COHERE_API_KEY` |
| Provider docs | [https://docs.cohere.com/docs/models](https://docs.cohere.com/docs/models) |
| Models | 14 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 3 / 14 models |
| Tools | 9 / 14 models |
| Structured output | 2 / 14 models |
| Reasoning | 3 / 14 models |
| Temperature | 14 / 14 models |
| Open weights | 14 / 14 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `c4ai-aya-expanse-32b`<br />Aya Expanse 32B | - | text | text | temperature, open weights | context: 128000 / output: 4000 | - | 2024-10-24 |
| `c4ai-aya-expanse-8b`<br />Aya Expanse 8B | - | text | text | temperature, open weights | context: 8000 / output: 4000 | - | 2024-10-24 |
| `c4ai-aya-vision-32b`<br />Aya Vision 32B | - | image, text | text | temperature, open weights | context: 16000 / output: 4000 | - | 2025-05-14 |
| `c4ai-aya-vision-8b`<br />Aya Vision 8B | - | image, text | text | temperature, open weights | context: 16000 / output: 4000 | - | 2025-05-14 |
| `command-a-03-2025`<br />Command A | command-a | text | text | tools, temperature, open weights | context: 256000 / output: 8000 | input: 2.5 / output: 10 | 2025-03-13 |
| `command-a-plus-05-2026`<br />Command A Plus | command-a | image, text | text | tools, schema, reasoning, temperature, open weights | context: 128000 / output: 64000 | input: 2.5 / output: 10 | 2026-06-09 |
| `command-a-reasoning-08-2025`<br />Command A Reasoning | command-a | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 32000 | input: 2.5 / output: 10 | 2025-08-21 |
| `command-a-translate-08-2025`<br />Command A Translate | command-a | text | text | tools, temperature, open weights | context: 8000 / output: 8000 | input: 2.5 / output: 10 | 2025-08-28 |
| `command-a-vision-07-2025`<br />Command A Vision | command-a | image, text | text | temperature, open weights | context: 128000 / output: 8000 | input: 2.5 / output: 10 | 2025-07-31 |
| `command-r-08-2024`<br />Command R | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.15 / output: 0.6 | 2024-08-30 |
| `command-r-plus-08-2024`<br />Command R+ | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 2.5 / output: 10 | 2024-08-30 |
| `command-r7b-12-2024`<br />Command R7B | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.0375 / output: 0.15 | 2024-12-02 |
| `command-r7b-arabic-02-2025`<br />Command R7B Arabic | command-r | text | text | tools, temperature, open weights | context: 128000 / output: 4000 | input: 0.0375 / output: 0.15 | 2025-02-27 |
| `north-mini-code-1-0`<br />North Mini Code | north | text | text | tools, schema, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 | 2026-06-09 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

