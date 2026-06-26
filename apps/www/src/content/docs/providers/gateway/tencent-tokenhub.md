---
title: "Tencent TokenHub"
description: "Use Tencent TokenHub through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1117
  label: "Tencent TokenHub"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://tokenhub.tencentmaas.com/v1 |
| Environment | `TENCENT_TOKENHUB_API_KEY` |
| Provider docs | [https://cloud.tencent.com/document/product/1823/130050](https://cloud.tencent.com/document/product/1823/130050) |
| Models | 1 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.TENCENT_TOKENHUB_API_KEY,
  baseUrl: "https://tokenhub.tencentmaas.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("hy3-preview");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 1 models |
| Tools | 1 / 1 models |
| Structured output | 0 / 1 models |
| Reasoning | 1 / 1 models |
| Temperature | 1 / 1 models |
| Open weights | 1 / 1 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `hy3-preview`<br />Hy3 preview | Hy | text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-20 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

