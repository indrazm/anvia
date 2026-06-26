---
title: "Cerebras"
description: "Review Cerebras connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1021
  label: "Cerebras"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `CEREBRAS_API_KEY` |
| Provider docs | [https://inference-docs.cerebras.ai/models/overview](https://inference-docs.cerebras.ai/models/overview) |
| Models | 2 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 2 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 2 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gpt-oss-120b`<br />GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 40960 | input: 0.35 / output: 0.75 | 2026-06-10 |
| `zai-glm-4.7`<br />Z.AI GLM-4.7 | - | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 40960 | input: 2.25 / output: 2.75 / cache_read: 0 / cache_write: 0 | 2026-06-10 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

