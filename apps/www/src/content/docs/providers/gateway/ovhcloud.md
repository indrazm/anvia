---
title: "OVHcloud AI Endpoints"
description: "Use OVHcloud AI Endpoints through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1094
  label: "OVHcloud AI Endpoints"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://oai.endpoints.kepler.ai.cloud.ovh.net/v1 |
| Environment | `OVHCLOUD_API_KEY` |
| Provider docs | [https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog//](https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog//) |
| Models | 14 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OVHCLOUD_API_KEY,
  baseUrl: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
  completionApi: "chat",
});

const model = client.completionModel("gpt-oss-120b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 5 / 14 models |
| Tools | 11 / 14 models |
| Structured output | 12 / 14 models |
| Reasoning | 6 / 14 models |
| Temperature | 12 / 14 models |
| Open weights | 14 / 14 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `gpt-oss-120b` | - | text | text | tools, schema, reasoning, open weights | context: 131072 / output: 131072 | input: 0.09 / output: 0.47 | 2025-08-28 |
| `gpt-oss-20b` | - | text | text | tools, schema, reasoning, open weights | context: 131072 / output: 131072 | input: 0.05 / output: 0.18 | 2025-08-28 |
| `meta-llama-3_3-70b-instruct`<br />Meta-Llama-3_3-70B-Instruct | - | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.74 / output: 0.74 | 2025-04-01 |
| `mistral-7b-instruct-v0.3`<br />Mistral-7B-Instruct-v0.3 | - | text | text | tools, schema, temperature, open weights | context: 65536 / output: 65536 | input: 0.11 / output: 0.11 | 2025-04-01 |
| `mistral-nemo-instruct-2407`<br />Mistral-Nemo-Instruct-2407 | - | text | text | tools, schema, temperature, open weights | context: 65536 / output: 65536 | input: 0.14 / output: 0.14 | 2024-11-20 |
| `mistral-small-3.2-24b-instruct-2506`<br />Mistral-Small-3.2-24B-Instruct-2506 | - | image, text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.1 / output: 0.31 | 2025-07-16 |
| `qwen2.5-vl-72b-instruct`<br />Qwen2.5-VL-72B-Instruct | - | image, text | text | schema, temperature, open weights | context: 32768 / output: 32768 | input: 1.01 / output: 1.01 | 2025-03-31 |
| `qwen3-32b`<br />Qwen3-32B | - | text | text | tools, schema, reasoning, temperature, open weights | context: 32768 / output: 32768 | input: 0.09 / output: 0.25 | 2025-07-16 |
| `qwen3-coder-30b-a3b-instruct`<br />Qwen3-Coder-30B-A3B-Instruct | - | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.07 / output: 0.26 | 2025-10-28 |
| `qwen3.5-397b-a17b`<br />Qwen3.5-397B-A17B | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.71 / output: 4.25 | 2026-05-18 |
| `qwen3.5-9b`<br />Qwen3.5-9B | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.12 / output: 0.18 | 2026-04-22 |
| `qwen3.6-27b`<br />Qwen3.6-27B | - | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.47 / output: 3.19 | 2026-06-01 |
| `qwen3guard-gen-0.6b`<br />Qwen3Guard-Gen-0.6B | - | text | text | temperature, open weights | context: 32768 / output: 16384 | - | 2026-01-22 |
| `qwen3guard-gen-8b`<br />Qwen3Guard-Gen-8B | - | text | text | temperature, open weights | context: 32768 / output: 16384 | - | 2026-01-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

