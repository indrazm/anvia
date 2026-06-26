---
title: "Xiaomi Token Plan (China)"
description: "Use Xiaomi Token Plan (China) through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1134
  label: "Xiaomi Token Plan (China)"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://token-plan-cn.xiaomimimo.com/v1 |
| Environment | `XIAOMI_API_KEY` |
| Provider docs | [https://platform.xiaomimimo.com/#/docs](https://platform.xiaomimimo.com/#/docs) |
| Models | 8 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.XIAOMI_API_KEY,
  baseUrl: "https://token-plan-cn.xiaomimimo.com/v1",
  completionApi: "chat",
});

const model = client.completionModel("mimo-v2-omni");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, pdf, text, video |
| Output modalities | audio, text |
| Attachments | 2 / 8 models |
| Tools | 4 / 8 models |
| Structured output | 0 / 8 models |
| Reasoning | 4 / 8 models |
| Temperature | 4 / 8 models |
| Open weights | 6 / 8 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `mimo-v2-omni`<br />MiMo-V2-Omni | mimo | audio, image, pdf, text, video | text | tools, reasoning, temperature | context: 262144 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-03-18 |
| `mimo-v2-pro`<br />MiMo-V2-Pro | mimo | text | text | tools, reasoning, temperature | context: 1048576 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-03-18 |
| `mimo-v2-tts`<br />MiMo-V2-TTS | mimo | text | audio | open weights | context: 8192 / output: 8192 | input: 0 / output: 0 | 2026-03-18 |
| `mimo-v2.5`<br />MiMo-V2.5 | mimo | audio, image, text, video | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-04-22 |
| `mimo-v2.5-pro`<br />MiMo-V2.5-Pro | mimo | text | text | tools, reasoning, temperature, open weights | context: 1048576 / output: 131072 | input: 0 / output: 0 / cache_read: 0 | 2026-04-22 |
| `mimo-v2.5-tts`<br />MiMo-V2.5-TTS | mimo | text | audio | open weights | context: 8192 / output: 8192 | input: 0 / output: 0 | 2026-04-22 |
| `mimo-v2.5-tts-voiceclone`<br />MiMo-V2.5-TTS-VoiceClone | mimo | text | audio | open weights | context: 8192 / output: 8192 | input: 0 / output: 0 | 2026-04-22 |
| `mimo-v2.5-tts-voicedesign`<br />MiMo-V2.5-TTS-VoiceDesign | mimo | text | audio | open weights | context: 8192 / output: 8192 | input: 0 / output: 0 | 2026-04-22 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

