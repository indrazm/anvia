---
title: "Perplexity"
description: "Review Perplexity connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1095
  label: "Perplexity"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `PERPLEXITY_API_KEY` |
| Provider docs | [https://docs.perplexity.ai](https://docs.perplexity.ai) |
| Models | 4 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 2 / 4 models |
| Tools | 0 / 4 models |
| Structured output | 0 / 4 models |
| Reasoning | 2 / 4 models |
| Temperature | 3 / 4 models |
| Open weights | 0 / 4 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `sonar`<br />Sonar | sonar | text | text | temperature | context: 128000 / output: 4096 | input: 1 / output: 1 | 2025-09-01 |
| `sonar-deep-research`<br />Perplexity Sonar Deep Research | - | text | text | reasoning | context: 128000 / output: 32768 | input: 2 / output: 8 / reasoning: 3 | 2025-09-01 |
| `sonar-pro`<br />Sonar Pro | sonar-pro | image, text | text | temperature | context: 200000 / output: 8192 | input: 3 / output: 15 | 2025-09-01 |
| `sonar-reasoning-pro`<br />Sonar Reasoning Pro | sonar-reasoning | image, text | text | reasoning, temperature | context: 128000 / output: 4096 | input: 2 / output: 8 | 2025-09-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

