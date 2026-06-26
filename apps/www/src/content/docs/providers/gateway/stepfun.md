---
title: "StepFun"
description: "Use StepFun through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1112
  label: "StepFun"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.stepfun.com/v1 |
| Environment | `STEPFUN_API_KEY` |
| Provider docs | [https://platform.stepfun.com/docs/zh/overview/concept](https://platform.stepfun.com/docs/zh/overview/concept) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.STEPFUN_API_KEY,
  baseUrl: "https://api.stepfun.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("step-1-32k");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 1 / 5 models |
| Tools | 5 / 5 models |
| Structured output | 0 / 5 models |
| Reasoning | 5 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 3 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `step-1-32k`<br />Step 1 (32K) | - | text | text | tools, reasoning, temperature | context: 32768 / input: 32768 / output: 32768 | input: 2.05 / output: 9.59 / cache_read: 0.41 | 2026-02-13 |
| `step-2-16k`<br />Step 2 (16K) | - | text | text | tools, reasoning, temperature | context: 16384 / input: 16384 / output: 8192 | input: 5.21 / output: 16.44 / cache_read: 1.04 | 2026-02-13 |
| `step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-06-15 |
| `step-3.5-flash-2603`<br />Step 3.5 Flash 2603 | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-04-02 |
| `step-3.7-flash`<br />Step 3.7 Flash | - | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.19 / output: 1.13 / cache_read: 0.04 | 2026-05-29 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

