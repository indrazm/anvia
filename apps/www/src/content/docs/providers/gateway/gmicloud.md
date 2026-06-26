---
title: "GMI Cloud"
description: "Use GMI Cloud through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1046
  label: "GMI Cloud"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.gmi-serving.com/v1 |
| Environment | `GMICLOUD_API_KEY` |
| Provider docs | [https://docs.gmicloud.ai/inference-engine/api-reference/llm-api-reference](https://docs.gmicloud.ai/inference-engine/api-reference/llm-api-reference) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.GMICLOUD_API_KEY,
  baseUrl: "https://api.gmi-serving.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("anthropic/claude-opus-4.6");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 4 / 8 models |
| Tools | 8 / 8 models |
| Structured output | 4 / 8 models |
| Reasoning | 8 / 8 models |
| Temperature | 7 / 8 models |
| Open weights | 5 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `anthropic/claude-opus-4.6`<br />Claude Opus 4.6 | claude-opus | text | text | tools, reasoning, temperature | context: 409600 / output: 128000 | input: 5 / output: 25 / cache_read: 0.5 | 2026-03-13 |
| `anthropic/claude-opus-4.7`<br />Claude Opus 4.7 | claude-opus | text | text | tools, reasoning | context: 409600 / output: 128000 | input: 4.5 / output: 22.5 / cache_read: 0.45 | 2026-04-16 |
| `anthropic/claude-sonnet-4.6`<br />Claude Sonnet 4.6 | claude-sonnet | text | text | tools, reasoning, temperature | context: 409600 / output: 64000 | input: 3 / output: 15 / cache_read: 0.3 | 2026-03-13 |
| `deepseek-ai/DeepSeek-V4-Flash`<br />DeepSeek V4 Flash | deepseek-flash | text | text | tools, schema, reasoning, temperature, open weights | context: 1048575 / output: 384000 | input: 0.112 / output: 0.224 / cache_read: 0.022 | 2026-04-24 |
| `deepseek-ai/DeepSeek-V4-Pro`<br />DeepSeek V4 Pro | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 1048576 / output: 384000 | input: 1.392 / output: 2.784 / cache_read: 0.116 | 2026-04-24 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | text | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.855 / output: 3.6 / cache_read: 0.144 | 2026-04-21 |
| `zai-org/GLM-5-FP8`<br />GLM-5 | glm | text | text | tools, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.6 / output: 1.92 / cache_read: 0.12 | 2026-02-12 |
| `zai-org/GLM-5.1-FP8`<br />GLM-5.1 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 202752 / output: 131072 | input: 0.98 / output: 3.08 / cache_read: 0.182 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

