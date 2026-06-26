---
title: "Snowflake Cortex"
description: "Use Snowflake Cortex through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1110
  label: "Snowflake Cortex"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://${SNOWFLAKE_ACCOUNT}.snowflakecomputing.com/api/v2/cortex/v1 |
| Environment | `SNOWFLAKE_ACCOUNT`, `SNOWFLAKE_CORTEX_PAT` |
| Provider docs | [https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-rest-api](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-rest-api) |
| Models | 18 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.SNOWFLAKE_ACCOUNT,
  baseUrl: "https://${SNOWFLAKE_ACCOUNT}.snowflakecomputing.com/api/v2/cortex/v1",
  completionApi: "chat",
});

const model = client.completionModel("claude-fable-5");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | text |
| Attachments | 17 / 18 models |
| Tools | 18 / 18 models |
| Structured output | 9 / 18 models |
| Reasoning | 15 / 18 models |
| Temperature | 8 / 18 models |
| Open weights | 3 / 18 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5`<br />Claude Fable 5 | claude-fable | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | - | 2026-06-09 |
| `claude-haiku-4-5`<br />Claude Haiku 4.5 (latest) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 16384 | - | 2025-10-15 |
| `claude-opus-4-7`<br />Claude Opus 4.7 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | - | 2026-04-16 |
| `claude-opus-4-8`<br />Claude Opus 4.8 | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | - | 2026-05-28 |
| `claude-sonnet-4-5`<br />Claude Sonnet 4.5 (latest) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 16384 | - | 2025-09-29 |
| `claude-sonnet-4-6`<br />Claude Sonnet 4.6 | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 16384 | - | 2026-03-13 |
| `deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | - | 2025-05-29 |
| `gemini-3.1-pro`<br />Gemini 3.1 Pro Preview | gemini-pro | audio, image, pdf, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | - | 2026-02-19 |
| `mistral-large2`<br />Mistral Large (latest) | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | - | 2025-12-02 |
| `openai-gpt-4.1`<br />GPT-4.1 | gpt | image, pdf, text | text | tools, schema, temperature | context: 1047576 / output: 32768 | - | 2025-04-14 |
| `openai-gpt-5`<br />GPT-5 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-08-07 |
| `openai-gpt-5-mini`<br />GPT-5 Mini | gpt-mini | image, text | text | tools, schema, reasoning | context: 272000 / input: 272000 / output: 8192 | - | 2025-08-07 |
| `openai-gpt-5-nano`<br />GPT-5 Nano | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-08-07 |
| `openai-gpt-5.1`<br />GPT-5.1 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-11-13 |
| `openai-gpt-5.2`<br />GPT-5.2 | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | - | 2025-12-11 |
| `openai-gpt-5.4`<br />GPT-5.4 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | - | 2026-03-05 |
| `openai-gpt-5.5`<br />GPT-5.5 | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | - | 2026-04-23 |
| `snowflake-llama3.3-70b`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, temperature, open weights | context: 128000 / output: 4096 | - | 2024-12-06 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

