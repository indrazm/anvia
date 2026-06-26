---
title: "Xiaomi"
description: "Use Xiaomi through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1133
  label: "Xiaomi"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.xiaomimimo.com/v1 |
| Environment | `XIAOMI_API_KEY` |
| Provider docs | [https://platform.xiaomimimo.com/#/docs](https://platform.xiaomimimo.com/#/docs) |
| Models | 6 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.XIAOMI_API_KEY,
  baseUrl: "https://api.xiaomimimo.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("mimo-v2-flash");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 2 / 6 models |
| Tools | 6 / 6 models |
| Structured output | 0 / 6 models |
| Reasoning | 6 / 6 models |
| Temperature | 6 / 6 models |
| Open weights | 4 / 6 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2-flash`<br />MiMo-V2-Flash | mimo | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | input: 0.1 / output: 0.3 / cache_read: 0.01 | 2026-02-04 |
| `mimo-v2-omni`<br />MiMo-V2-Omni | mimo | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 262144 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-03-18 |
| `mimo-v2-pro`<br />MiMo-V2-Pro | mimo | text | text | tools, reasoning, temperature | context: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-03-18 |
| `mimo-v2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0.4 / output: 2 / cache_read: 0.08 | 2026-04-22 |
| `mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1 / output: 3 / cache_read: 0.2 | 2026-04-22 |
| `mimo-v2.5-pro-ultraspeed`<br />MiMo-V2.5-Pro-UltraSpeed | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 1.305 / output: 2.61 / cache_read: 0.0108 | 2026-06-09 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

