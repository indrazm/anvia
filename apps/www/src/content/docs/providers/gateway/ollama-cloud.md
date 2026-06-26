---
title: "Ollama Cloud"
description: "Use Ollama Cloud through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1088
  label: "Ollama Cloud"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://ollama.com/v1 |
| Environment | `OLLAMA_API_KEY` |
| Provider docs | [https://docs.ollama.com/cloud](https://docs.ollama.com/cloud) |
| Models | 43 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OLLAMA_API_KEY,
  baseUrl: "https://ollama.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("cogito-2.1:671b");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text, video |
| Output modalities | text |
| Attachments | 17 / 43 models |
| Tools | 40 / 43 models |
| Structured output | 2 / 43 models |
| Reasoning | 29 / 43 models |
| Temperature | 5 / 43 models |
| Open weights | 43 / 43 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `cogito-2.1:671b` | cogito | text | text | tools, reasoning, open weights | context: 163840 / output: 32000 | - | 2026-01-19 |
| `deepseek-v3.1:671b` | deepseek | text | text | tools, reasoning, open weights | context: 163840 / output: 163840 | - | 2026-01-19 |
| `deepseek-v3.2` | deepseek | text | text | tools, reasoning, open weights | context: 163840 / output: 65536 | - | 2026-01-19 |
| `deepseek-v4-flash` | deepseek-flash | text | text | tools, reasoning, open weights | context: 1048576 / output: 1048576 | - | 2026-04-24 |
| `deepseek-v4-pro` | deepseek-thinking | text | text | tools, reasoning, open weights | context: 1048576 / output: 1048576 | - | 2026-04-24 |
| `devstral-2:123b` | devstral | text | text | tools, open weights | context: 262144 / output: 262144 | - | 2026-01-19 |
| `devstral-small-2:24b` | devstral | image, text | text | tools, open weights | context: 262144 / output: 262144 | - | 2026-01-19 |
| `gemini-3-flash-preview` | gemini-flash | image, text | text | tools, reasoning, open weights | context: 1048576 / output: 65536 | - | 2026-04-08 |
| `gemma3:12b` | gemma | image, text | text | open weights | context: 131072 / output: 131072 | - | 2026-01-19 |
| `gemma3:27b` | gemma | image, text | text | open weights | context: 131072 / output: 131072 | - | 2026-01-19 |
| `gemma3:4b` | gemma | image, text | text | open weights | context: 131072 / output: 131072 | - | 2026-01-19 |
| `gemma4:31b` | gemma | image, text | text | tools, reasoning, open weights | context: 262144 / output: 262144 | - | 2026-04-08 |
| `glm-4.6` | glm | text | text | tools, reasoning, open weights | context: 202752 / output: 131072 | - | 2026-01-19 |
| `glm-4.7` | glm | text | text | tools, reasoning, open weights | context: 202752 / output: 131072 | - | 2026-01-19 |
| `glm-5` | glm | text | text | tools, reasoning, open weights | context: 202752 / output: 131072 | - | 2026-02-11 |
| `glm-5.1` | glm | text | text | tools, reasoning, open weights | context: 202752 / output: 131072 | - | 2026-04-07 |
| `glm-5.2`<br />GLM-5.2 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 976000 / output: 131072 | - | 2026-06-13 |
| `gpt-oss:120b` | gpt-oss | text | text | tools, reasoning, open weights | context: 131072 / output: 32768 | - | 2026-01-19 |
| `gpt-oss:20b` | gpt-oss | text | text | tools, reasoning, open weights | context: 131072 / output: 32768 | - | 2026-01-19 |
| `kimi-k2-thinking` | kimi-thinking | text | text | tools, reasoning, open weights | context: 262144 / output: 262144 | - | 2026-01-19 |
| `kimi-k2:1t` | kimi-k2 | text | text | tools, open weights | context: 262144 / output: 262144 | - | 2026-01-19 |
| `kimi-k2.5` | kimi-k2 | image, text | text | tools, reasoning, open weights | context: 262144 / output: 262144 | - | 2026-01-27 |
| `kimi-k2.6` | kimi-k2 | image, text | text | tools, reasoning, open weights | context: 262144 / output: 262144 | - | 2026-04-20 |
| `kimi-k2.7-code` | kimi-k2 | image, text | text | tools, schema, reasoning, open weights | context: 262144 / output: 262144 | - | 2026-06-12 |
| `minimax-m2` | minimax | text | text | tools, reasoning, open weights | context: 204800 / output: 128000 | - | 2026-01-19 |
| `minimax-m2.1` | minimax | text | text | tools, reasoning, open weights | context: 204800 / output: 131072 | - | 2026-01-19 |
| `minimax-m2.5` | minimax | text | text | tools, reasoning, open weights | context: 204800 / output: 131072 | - | 2026-02-12 |
| `minimax-m2.7` | minimax | text | text | tools, reasoning, open weights | context: 196608 / output: 196608 | - | 2026-03-18 |
| `minimax-m3` | minimax-m3 | image, text, video | text | tools, reasoning, temperature, open weights | context: 512000 / output: 131072 | - | 2026-05-31 |
| `ministral-3:14b` | ministral | image, text | text | tools, open weights | context: 262144 / output: 128000 | - | 2026-01-19 |
| `ministral-3:3b` | ministral | image, text | text | tools, open weights | context: 262144 / output: 128000 | - | 2026-01-19 |
| `ministral-3:8b` | ministral | image, text | text | tools, open weights | context: 262144 / output: 128000 | - | 2026-01-19 |
| `mistral-large-3:675b` | mistral-large | image, text | text | tools, open weights | context: 262144 / output: 262144 | - | 2026-01-19 |
| `nemotron-3-nano:30b` | nemotron | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | - | 2026-01-19 |
| `nemotron-3-super` | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 65536 | - | 2026-03-12 |
| `nemotron-3-ultra` | nemotron | text | text | tools, reasoning, temperature, open weights | context: 262144 / output: 128000 | - | 2026-06-04 |
| `qwen3-coder-next` | qwen | text | text | tools, open weights | context: 262144 / output: 65536 | - | 2026-02-08 |
| `qwen3-coder:480b` | qwen | text | text | tools, open weights | context: 262144 / output: 65536 | - | 2026-01-19 |
| `qwen3-next:80b` | qwen | text | text | tools, reasoning, open weights | context: 262144 / output: 32768 | - | 2026-01-19 |
| `qwen3-vl:235b` | qwen | image, text | text | tools, reasoning, open weights | context: 262144 / output: 32768 | - | 2026-01-19 |
| `qwen3-vl:235b-instruct` | qwen | image, text | text | tools, open weights | context: 262144 / output: 131072 | - | 2026-01-19 |
| `qwen3.5:397b` | qwen | image, text | text | tools, reasoning, open weights | context: 262144 / output: 65536 | - | 2026-02-17 |
| `rnj-1:8b` | rnj | text | text | tools, open weights | context: 32768 / output: 4096 | - | 2026-01-19 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

