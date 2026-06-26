---
title: "Neuralwatt"
description: "Use Neuralwatt through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1084
  label: "Neuralwatt"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.neuralwatt.com/v1 |
| Environment | `NEURALWATT_API_KEY` |
| Provider docs | [https://portal.neuralwatt.com/docs](https://portal.neuralwatt.com/docs) |
| Models | 14 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.NEURALWATT_API_KEY,
  baseUrl: "https://api.neuralwatt.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("glm-5-fast");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 7 / 14 models |
| Tools | 14 / 14 models |
| Structured output | 1 / 14 models |
| Reasoning | 8 / 14 models |
| Temperature | 13 / 14 models |
| Open weights | 14 / 14 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `glm-5-fast`<br />GLM 5 Fast | glm | text | text | tools, temperature, open weights | context: 202736 / output: 202736 | input: 1.1 / output: 3.6 | 2026-04-07 |
| `glm-5.1-fast`<br />GLM 5.1 Fast | glm | text | text | tools, temperature, open weights | context: 202736 / output: 202736 | input: 1.1 / output: 3.6 | 2026-04-07 |
| `glm-5.2`<br />GLM 5.2 | glm | text | text | tools, reasoning, temperature, open weights | context: 1048560 / output: 1048560 | input: 1.45 / output: 4.5 | 2026-06-17 |
| `glm-5.2-short`<br />GLM 5.2 short | glm | text | text | tools, reasoning, temperature, open weights | context: 200000 / output: 200000 | input: 1.45 / output: 4.5 | 2026-06-17 |
| `kimi-k2.5-fast`<br />Kimi K2.5 Fast | kimi-k2 | image, text | text | tools, temperature, open weights | context: 262128 / output: 262128 | input: 0.52 / output: 2.59 | 2026-01-27 |
| `kimi-k2.6-fast`<br />Kimi K2.6 Fast | kimi-k2 | image, text | text | tools, temperature, open weights | context: 262128 / output: 262128 | input: 0.69 / output: 3.22 | 2026-04-21 |
| `moonshotai/Kimi-K2.5`<br />Kimi K2.5 | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262128 / output: 262128 | input: 0.52 / output: 2.59 | 2026-01-27 |
| `moonshotai/Kimi-K2.6`<br />Kimi K2.6 | kimi-k2 | image, text | text | tools, reasoning, temperature, open weights | context: 262128 / output: 262128 | input: 0.69 / output: 3.22 | 2026-04-21 |
| `moonshotai/Kimi-K2.7-Code`<br />Kimi K2.7 Code | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | input: 0.95 / output: 4 | 2026-06-12 |
| `Qwen/Qwen3.5-397B-A17B-FP8`<br />Qwen3.5 397B A17B FP8 | qwen | text | text | tools, reasoning, temperature, open weights | context: 262128 / output: 262128 | input: 0.69 / output: 4.14 | 2026-02-01 |
| `Qwen/Qwen3.6-35B-A3B`<br />Qwen3.6 35B A3B | qwen3.6 | image, text | text | tools, reasoning, temperature, open weights | context: 131056 / output: 131056 | input: 0.29 / output: 1.15 | 2026-04-01 |
| `qwen3.5-397b-fast`<br />Qwen3.5 397B Fast | qwen | text | text | tools, temperature, open weights | context: 262128 / output: 262128 | input: 0.69 / output: 4.14 | 2026-02-01 |
| `qwen3.6-35b-fast`<br />Qwen3.6 35B Fast | qwen3.6 | image, text | text | tools, temperature, open weights | context: 131056 / output: 131056 | input: 0.29 / output: 1.15 | 2026-04-01 |
| `zai-org/GLM-5.1-FP8`<br />GLM 5.1 FP8 | glm | text | text | tools, reasoning, temperature, open weights | context: 202736 / output: 202736 | input: 1.1 / output: 3.6 | 2026-04-07 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

