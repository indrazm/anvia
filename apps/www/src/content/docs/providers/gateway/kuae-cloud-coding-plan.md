---
title: "KUAE Cloud Coding Plan"
description: "Use KUAE Cloud Coding Plan through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1060
  label: "KUAE Cloud Coding Plan"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://coding-plan-endpoint.kuaecloud.net/v1 |
| Environment | `KUAE_API_KEY` |
| Provider docs | [https://docs.mthreads.com/kuaecloud/kuaecloud-doc-online/coding_plan/](https://docs.mthreads.com/kuaecloud/kuaecloud-doc-online/coding_plan/) |
| Models | 1 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.KUAE_API_KEY,
  baseUrl: "https://coding-plan-endpoint.kuaecloud.net/v1",
  completionApi: "chat",
});

const model = client.completionModel("GLM-4.7");
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
| `GLM-4.7` | glm | text | text | tools, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2025-12-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

