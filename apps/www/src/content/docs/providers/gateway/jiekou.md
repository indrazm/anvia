---
title: "Jiekou.AI"
description: "Use Jiekou.AI through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1057
  label: "Jiekou.AI"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://api.jiekou.ai/openai |
| Environment | `JIEKOU_API_KEY` |
| Provider docs | [https://docs.jiekou.ai/docs/support/quickstart?utm_source=github_models.dev](https://docs.jiekou.ai/docs/support/quickstart?utm_source=github_models.dev) |
| Models | 61 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.JIEKOU_API_KEY,
  baseUrl: "https://api.jiekou.ai/openai",
  completionApi: "chat",
});

const model = client.completionModel("baidu/ernie-4.5-300b-a47b-paddle");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text, video |
| Output modalities | text |
| Attachments | 40 / 61 models |
| Tools | 58 / 61 models |
| Structured output | 56 / 61 models |
| Reasoning | 32 / 61 models |
| Temperature | 61 / 61 models |
| Open weights | 24 / 61 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `baidu/ernie-4.5-300b-a47b-paddle`<br />ERNIE 4.5 300B A47B | ernie | text | text | tools, schema, temperature, open weights | context: 123000 / output: 12000 | input: 0.28 / output: 1.1 | 2026-01 |
| `baidu/ernie-4.5-vl-424b-a47b`<br />ERNIE 4.5 VL 424B A47B | ernie | image, text | text | tools, reasoning, temperature, open weights | context: 123000 / output: 16000 | input: 0.42 / output: 1.25 | 2026-01 |
| `claude-haiku-4-5-20251001` | claude-haiku | image, text | text | tools, schema, temperature | context: 20000 / output: 64000 | input: 0.9 / output: 4.5 | 2026-01 |
| `claude-opus-4-1-20250805` | claude-opus | image, text | text | tools, schema, temperature | context: 200000 / output: 32000 | input: 13.5 / output: 67.5 | 2026-01 |
| `claude-opus-4-20250514` | claude-opus | image, text | text | tools, schema, temperature | context: 200000 / output: 32000 | input: 13.5 / output: 67.5 | 2026-01 |
| `claude-opus-4-5-20251101` | claude-opus | image, text | text | tools, schema, temperature | context: 200000 / output: 65536 | input: 4.5 / output: 22.5 | 2026-01 |
| `claude-opus-4-6` | claude-opus | image, text | text | tools, schema, reasoning, temperature | context: 1000000 / output: 128000 | input: 5 / output: 25 | 2026-02 |
| `claude-sonnet-4-20250514` | claude-sonnet | image, text | text | tools, schema, temperature | context: 200000 / output: 64000 | input: 2.7 / output: 13.5 | 2026-01 |
| `claude-sonnet-4-5-20250929` | claude-sonnet | image, text | text | tools, schema, temperature | context: 200000 / output: 64000 | input: 2.7 / output: 13.5 | 2026-01 |
| `deepseek/deepseek-r1-0528`<br />DeepSeek R1 0528 | deepseek-thinking | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.7 / output: 2.5 | 2026-01 |
| `deepseek/deepseek-v3-0324`<br />DeepSeek V3 0324 | deepseek | text | text | tools, schema, temperature, open weights | context: 163840 / output: 163840 | input: 0.28 / output: 1.14 | 2026-01 |
| `deepseek/deepseek-v3.1`<br />DeepSeek V3.1 | deepseek | text | text | tools, schema, reasoning, temperature, open weights | context: 163840 / output: 32768 | input: 0.27 / output: 1 | 2026-01 |
| `gemini-2.5-flash` | gemini-flash | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.27 / output: 2.25 | 2026-01 |
| `gemini-2.5-flash-lite` | gemini-flash-lite | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.09 / output: 0.36 | 2026-01 |
| `gemini-2.5-flash-lite-preview-06-17` | gemini-flash-lite | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 0.09 / output: 0.36 | 2026-01 |
| `gemini-2.5-flash-lite-preview-09-2025` | gemini-flash-lite | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65536 | input: 0.09 / output: 0.36 | 2026-01 |
| `gemini-2.5-flash-preview-05-20` | gemini-flash | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 200000 | input: 0.135 / output: 3.15 | 2026-01 |
| `gemini-2.5-pro` | gemini-pro | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 65535 | input: 1.125 / output: 9 | 2026-01 |
| `gemini-2.5-pro-preview-06-05` | gemini-pro | audio, image, text, video | text | tools, schema, reasoning, temperature | context: 1048576 / output: 200000 | input: 1.125 / output: 9 | 2026-01 |
| `gemini-3-flash-preview` | gemini-flash | audio, image, text, video | text | tools, schema, temperature | context: 1048576 / output: 65536 | input: 0.5 / output: 3 | 2026-01 |
| `gemini-3-pro-preview` | gemini-pro | audio, image, text, video | text | tools, schema, temperature | context: 1048576 / output: 65536 | input: 1.8 / output: 10.8 | 2026-01 |
| `gpt-5-chat-latest` | gpt | image, text | text | tools, schema, temperature | context: 400000 / output: 128000 | input: 1.125 / output: 9 | 2026-01 |
| `gpt-5-codex` | gpt-codex | image, text | text | tools, schema, temperature | context: 400000 / output: 128000 | input: 1.125 / output: 9 | 2026-01 |
| `gpt-5-mini` | gpt-mini | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 0.225 / output: 1.8 | 2026-01 |
| `gpt-5-nano` | gpt-nano | image, text | text | tools, schema, temperature | context: 400000 / output: 128000 | input: 0.045 / output: 0.36 | 2026-01 |
| `gpt-5-pro` | gpt-pro | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 272000 | input: 13.5 / output: 108 | 2026-01 |
| `gpt-5.1` | gpt | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.125 / output: 9 | 2026-02 |
| `gpt-5.1-codex` | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.125 / output: 9 | 2026-01 |
| `gpt-5.1-codex-max` | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.125 / output: 9 | 2026-01 |
| `gpt-5.1-codex-mini` | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 0.225 / output: 1.8 | 2026-01 |
| `gpt-5.2` | gpt | image, text | text | tools, schema, temperature | context: 400000 / output: 128000 | input: 1.575 / output: 12.6 | 2026-01 |
| `gpt-5.2-codex` | gpt-codex | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 1.75 / output: 14 | 2026-01 |
| `gpt-5.2-pro` | gpt-pro | image, text | text | tools, schema, reasoning, temperature | context: 400000 / output: 128000 | input: 18.9 / output: 151.2 | 2026-01 |
| `grok-4-0709` | grok | image, text | text | tools, schema, temperature | context: 256000 / output: 8192 | input: 2.7 / output: 13.5 | 2026-01 |
| `grok-4-1-fast-non-reasoning` | grok | image, text | text | tools, schema, temperature | context: 2000000 / output: 2000000 | input: 0.18 / output: 0.45 | 2026-01 |
| `grok-4-1-fast-reasoning` | grok | image, text | text | tools, schema, temperature | context: 2000000 / output: 2000000 | input: 0.18 / output: 0.45 | 2026-01 |
| `grok-4-fast-non-reasoning` | grok | image, text | text | tools, schema, temperature | context: 2000000 / output: 2000000 | input: 0.18 / output: 0.45 | 2026-01 |
| `grok-4-fast-reasoning` | grok | image, text | text | tools, schema, temperature | context: 2000000 / output: 2000000 | input: 0.18 / output: 0.45 | 2026-01 |
| `grok-code-fast-1` | grok | image, text | text | tools, schema, temperature | context: 256000 / output: 256000 | input: 0.18 / output: 1.35 | 2026-01 |
| `minimax/minimax-m2.1`<br />Minimax M2.1 | minimax | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.3 / output: 1.2 | 2026-01 |
| `minimaxai/minimax-m1-80k`<br />MiniMax M1 | minimax | text | text | tools, reasoning, temperature, open weights | context: 1000000 / output: 40000 | input: 0.55 / output: 2.2 | 2026-01 |
| `moonshotai/kimi-k2-0905`<br />Kimi K2 0905 | kimi-k2 | text | text | tools, schema, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 2.5 | 2026-01 |
| `moonshotai/kimi-k2-instruct`<br />Kimi K2 Instruct | kimi-k2 | text | text | tools, schema, temperature, open weights | context: 131072 / output: 131072 | input: 0.57 / output: 2.3 | 2026-01 |
| `moonshotai/kimi-k2.5`<br />Kimi K2.5 | kimi-k2 | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 0.6 / output: 3 | 2026-01 |
| `o3` | - | image, text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 10 / output: 40 | 2026-01 |
| `o3-mini` | o | image, text | text | tools, schema, temperature | context: 131072 / output: 131072 | input: 1.1 / output: 4.4 | 2026-01 |
| `o4-mini` | o | image, text | text | tools, schema, temperature | context: 200000 / output: 100000 | input: 1.1 / output: 4.4 | 2026-01 |
| `qwen/qwen3-235b-a22b-fp8`<br />Qwen3 235B A22B | qwen | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.2 / output: 0.8 | 2026-01 |
| `qwen/qwen3-235b-a22b-instruct-2507`<br />Qwen3 235B A22B Instruct 2507 | qwen | text | text | tools, schema, temperature, open weights | context: 131072 / output: 16384 | input: 0.15 / output: 0.8 | 2026-01 |
| `qwen/qwen3-235b-a22b-thinking-2507`<br />Qwen3 235B A22b Thinking 2507 | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 131072 | input: 0.3 / output: 3 | 2026-01 |
| `qwen/qwen3-30b-a3b-fp8`<br />Qwen3 30B A3B | qwen | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.09 / output: 0.45 | 2026-01 |
| `qwen/qwen3-32b-fp8`<br />Qwen3 32B | qwen | text | text | reasoning, temperature, open weights | context: 40960 / output: 20000 | input: 0.1 / output: 0.45 | 2026-01 |
| `qwen/qwen3-coder-480b-a35b-instruct`<br />Qwen3 Coder 480B A35B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.29 / output: 1.2 | 2026-01 |
| `qwen/qwen3-coder-next` | qwen | text | text | tools, schema, temperature, open weights | context: 262144 / output: 65536 | input: 0.2 / output: 1.5 | 2026-02 |
| `qwen/qwen3-next-80b-a3b-instruct`<br />Qwen3 Next 80B A3B Instruct | qwen | text | text | tools, schema, temperature, open weights | context: 65536 / output: 65536 | input: 0.15 / output: 1.5 | 2026-01 |
| `qwen/qwen3-next-80b-a3b-thinking`<br />Qwen3 Next 80B A3B Thinking | qwen | text | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 65536 | input: 0.15 / output: 1.5 | 2026-01 |
| `xiaomimimo/mimo-v2-flash`<br />XiaomiMiMo/MiMo-V2-Flash | mimo | text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 131072 | input: 0 / output: 0 | 2026-01 |
| `zai-org/glm-4.5`<br />GLM-4.5 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 131072 / output: 98304 | input: 0.6 / output: 2.2 | 2026-01 |
| `zai-org/glm-4.5v`<br />GLM 4.5V | glmv | image, text, video | text | tools, schema, reasoning, temperature, open weights | context: 65536 / output: 16384 | input: 0.6 / output: 1.8 | 2026-01 |
| `zai-org/glm-4.7`<br />GLM-4.7 | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 204800 / output: 131072 | input: 0.6 / output: 2.2 | 2026-01 |
| `zai-org/glm-4.7-flash`<br />GLM-4.7-Flash | glm | text | text | tools, schema, reasoning, temperature, open weights | context: 200000 / output: 128000 | input: 0.07 / output: 0.4 | 2026-01 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

