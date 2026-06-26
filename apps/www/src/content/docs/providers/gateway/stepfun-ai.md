---
title: "StepFun AI"
description: "Use StepFun AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1113
  label: "StepFun AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.stepfun.ai/step_plan/v1 |
| Environment | `STEPFUN_API_KEY` |
| Provider docs | [https://platform.stepfun.ai/docs/en/step-plan/integrations/open-code](https://platform.stepfun.ai/docs/en/step-plan/integrations/open-code) |
| Models | 2 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.STEPFUN_API_KEY,
  baseUrl: "https://api.stepfun.ai/step_plan/v1",
  completionApi: "chat",
});

const model = client.completionModel("step-3.5-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 2 models |
| Tools | 2 / 2 models |
| Structured output | 0 / 2 models |
| Reasoning | 2 / 2 models |
| Temperature | 2 / 2 models |
| Open weights | 2 / 2 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `step-3.5-flash`<br />Step 3.5 Flash | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-06-15 |
| `step-3.5-flash-2603`<br />Step 3.5 Flash 2603 | - | text | text | tools, reasoning, temperature, open weights | context: 256000 / input: 256000 / output: 256000 | input: 0.1 / output: 0.3 / cache_read: 0.02 | 2026-04-02 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

