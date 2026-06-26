---
title: "CloudFerro Sherlock"
description: "Use CloudFerro Sherlock through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1025
  label: "CloudFerro Sherlock"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api-sherlock.cloudferro.com/openai/v1/ |
| Environment | `CLOUDFERRO_SHERLOCK_API_KEY` |
| Provider docs | [https://docs.sherlock.cloudferro.com/](https://docs.sherlock.cloudferro.com/) |
| Models | 5 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.CLOUDFERRO_SHERLOCK_API_KEY,
  baseUrl: "https://api-sherlock.cloudferro.com/openai/v1/",
  completionApi: "chat",
});

const model = client.completionModel("meta-llama/Llama-3.3-70B-Instruct");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | text |
| Output modalities | text |
| Attachments | 0 / 5 models |
| Tools | 5 / 5 models |
| Structured output | 4 / 5 models |
| Reasoning | 2 / 5 models |
| Temperature | 5 / 5 models |
| Open weights | 5 / 5 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `meta-llama/Llama-3.3-70B-Instruct`<br />Llama 3.3 70B Instruct | llama | text | text | tools, temperature, open weights | context: 70000 / output: 70000 | input: 2.92 / output: 2.92 | 2024-12-06 |
| `MiniMaxAI/MiniMax-M2.5`<br />MiniMax-M2.5 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 196000 / input: 180000 / output: 16000 | input: 0.3 / output: 1.2 | 2026-03-05 |
| `openai/gpt-oss-120b`<br />OpenAI GPT OSS 120B | gpt-oss | text | text | tools, schema, reasoning, temperature, open weights | context: 131000 / output: 131000 | input: 2.92 / output: 2.92 | 2025-08-28 |
| `speakleash/Bielik-11B-v2.6-Instruct`<br />Bielik 11B v2.6 Instruct | - | text | text | tools, schema, temperature, open weights | context: 32000 / output: 32000 | input: 0.67 / output: 0.67 | 2025-03-13 |
| `speakleash/Bielik-11B-v3.0-Instruct`<br />Bielik 11B v3.0 Instruct | - | text | text | tools, schema, temperature, open weights | context: 32000 / output: 32000 | input: 0.67 / output: 0.67 | 2025-03-13 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

