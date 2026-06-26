---
title: "GitHub Models"
description: "Use GitHub Models through @anvia/openai."
section: providers
sidebar:
  group: LLM Gateway
  order: 1044
  label: "GitHub Models"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/openai |
| Compatibility | OpenAI-compatible endpoint |
| API URL | https://models.github.ai/inference |
| Environment | `GITHUB_TOKEN` |
| Provider docs | [https://docs.github.com/en/github-models](https://docs.github.com/en/github-models) |
| Models | 55 |

## Anvia Usage

This provider is listed as OpenAI-compatible. Start with `@anvia/openai` and the chat-completions adapter, then smoke test the exact workflow.

```ts
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.GITHUB_TOKEN,
  baseUrl: "https://models.github.ai/inference",
  completionApi: "chat",
});

const model = client.completionModel("ai21-labs/ai21-jamba-1.5-large");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | audio, image, text |
| Output modalities | text |
| Attachments | 5 / 55 models |
| Tools | 49 / 55 models |
| Structured output | 0 / 55 models |
| Reasoning | 47 / 55 models |
| Temperature | 49 / 55 models |
| Open weights | 30 / 55 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ai21-labs/ai21-jamba-1.5-large`<br />AI21 Jamba 1.5 Large | jamba | text | text | tools, reasoning, temperature | context: 256000 / output: 4096 | input: 0 / output: 0 | 2024-08-29 |
| `ai21-labs/ai21-jamba-1.5-mini`<br />AI21 Jamba 1.5 Mini | jamba | text | text | tools, reasoning, temperature | context: 256000 / output: 4096 | input: 0 / output: 0 | 2024-08-29 |
| `cohere/cohere-command-a`<br />Cohere Command A | command-a | text | text | tools, reasoning, temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-11-01 |
| `cohere/cohere-command-r`<br />Cohere Command R | command-r | text | text | tools, reasoning, temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-01 |
| `cohere/cohere-command-r-08-2024`<br />Cohere Command R 08-2024 | command-r | text | text | tools, temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-01 |
| `cohere/cohere-command-r-plus`<br />Cohere Command R+ | command-r | text | text | tools, temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-01 |
| `cohere/cohere-command-r-plus-08-2024`<br />Cohere Command R+ 08-2024 | command-r | text | text | tools, temperature | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-01 |
| `core42/jais-30b-chat`<br />JAIS 30b Chat | jais | text | text | tools, reasoning, temperature, open weights | context: 8192 / output: 2048 | input: 0 / output: 0 | 2023-08-30 |
| `deepseek/deepseek-r1`<br />DeepSeek-R1 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 8192 | input: 0 / output: 0 | 2025-01-20 |
| `deepseek/deepseek-r1-0528`<br />DeepSeek-R1-0528 | deepseek-thinking | text | text | tools, reasoning, temperature, open weights | context: 65536 / output: 8192 | input: 0 / output: 0 | 2025-05-28 |
| `deepseek/deepseek-v3-0324`<br />DeepSeek-V3-0324 | deepseek | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-03-24 |
| `meta/llama-3.2-11b-vision-instruct`<br />Llama-3.2-11B-Vision-Instruct | llama | audio, image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-09-25 |
| `meta/llama-3.2-90b-vision-instruct`<br />Llama-3.2-90B-Vision-Instruct | llama | audio, image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-09-25 |
| `meta/llama-3.3-70b-instruct`<br />Llama-3.3-70B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-12-06 |
| `meta/llama-4-maverick-17b-128e-instruct-fp8`<br />Llama 4 Maverick 17B 128E Instruct FP8 | llama | image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-01-31 |
| `meta/llama-4-scout-17b-16e-instruct`<br />Llama 4 Scout 17B 16E Instruct | llama | image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2025-01-31 |
| `meta/meta-llama-3-70b-instruct`<br />Meta-Llama-3-70B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 8192 / output: 2048 | input: 0 / output: 0 | 2024-04-18 |
| `meta/meta-llama-3-8b-instruct`<br />Meta-Llama-3-8B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 8192 / output: 2048 | input: 0 / output: 0 | 2024-04-18 |
| `meta/meta-llama-3.1-405b-instruct`<br />Meta-Llama-3.1-405B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-07-23 |
| `meta/meta-llama-3.1-70b-instruct`<br />Meta-Llama-3.1-70B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-07-23 |
| `meta/meta-llama-3.1-8b-instruct`<br />Meta-Llama-3.1-8B-Instruct | llama | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-07-23 |
| `microsoft/mai-ds-r1`<br />MAI-DS-R1 | mai | text | text | tools, reasoning, temperature | context: 65536 / output: 8192 | input: 0 / output: 0 | 2025-01-20 |
| `microsoft/phi-3-medium-128k-instruct`<br />Phi-3-medium instruct (128k) | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3-medium-4k-instruct`<br />Phi-3-medium instruct (4k) | phi | text | text | tools, reasoning, temperature, open weights | context: 4096 / output: 1024 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3-mini-128k-instruct`<br />Phi-3-mini instruct (128k) | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3-mini-4k-instruct`<br />Phi-3-mini instruct (4k) | phi | text | text | tools, reasoning, temperature, open weights | context: 4096 / output: 1024 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3-small-128k-instruct`<br />Phi-3-small instruct (128k) | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3-small-8k-instruct`<br />Phi-3-small instruct (8k) | phi | text | text | tools, reasoning, temperature, open weights | context: 8192 / output: 2048 | input: 0 / output: 0 | 2024-04-23 |
| `microsoft/phi-3.5-mini-instruct`<br />Phi-3.5-mini instruct (128k) | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-20 |
| `microsoft/phi-3.5-moe-instruct`<br />Phi-3.5-MoE instruct (128k) | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-20 |
| `microsoft/phi-3.5-vision-instruct`<br />Phi-3.5-vision instruct (128k) | phi | image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-08-20 |
| `microsoft/phi-4`<br />Phi-4 | phi | text | text | tools, reasoning, temperature, open weights | context: 16000 / output: 4096 | input: 0 / output: 0 | 2024-12-11 |
| `microsoft/phi-4-mini-instruct`<br />Phi-4-mini-instruct | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-11 |
| `microsoft/phi-4-mini-reasoning`<br />Phi-4-mini-reasoning | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-11 |
| `microsoft/phi-4-multimodal-instruct`<br />Phi-4-multimodal-instruct | phi | audio, image, text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-11 |
| `microsoft/phi-4-reasoning`<br />Phi-4-Reasoning | phi | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 4096 | input: 0 / output: 0 | 2024-12-11 |
| `mistral-ai/codestral-2501`<br />Codestral 25.01 | codestral | text | text | tools, reasoning, temperature | context: 32000 / output: 8192 | input: 0 / output: 0 | 2025-01-01 |
| `mistral-ai/ministral-3b`<br />Ministral 3B | ministral | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-10-22 |
| `mistral-ai/mistral-large-2411`<br />Mistral Large 24.11 | mistral-large | text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-11-01 |
| `mistral-ai/mistral-medium-2505`<br />Mistral Medium 3 (25.05) | mistral-medium | image, text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 0 / output: 0 | 2025-05-01 |
| `mistral-ai/mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-07-18 |
| `mistral-ai/mistral-small-2503`<br />Mistral Small 3.1 | mistral-small | image, text | text | tools, reasoning, temperature | context: 128000 / output: 32768 | input: 0 / output: 0 | 2025-03-01 |
| `openai/gpt-4.1`<br />GPT-4.1 | gpt | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-04-14 |
| `openai/gpt-4.1-mini`<br />GPT-4.1-mini | gpt-mini | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-04-14 |
| `openai/gpt-4.1-nano`<br />GPT-4.1-nano | gpt-nano | image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2025-04-14 |
| `openai/gpt-4o`<br />GPT-4o | gpt | audio, image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2024-05-13 |
| `openai/gpt-4o-mini`<br />GPT-4o mini | gpt-mini | audio, image, text | text | tools, temperature | context: 128000 / output: 16384 | input: 0 / output: 0 | 2024-07-18 |
| `openai/o1`<br />OpenAI o1 | o | image, text | text | reasoning | context: 200000 / output: 100000 | input: 0 / output: 0 | 2024-12-17 |
| `openai/o1-mini`<br />OpenAI o1-mini | o-mini | text | text | reasoning | context: 128000 / output: 65536 | input: 0 / output: 0 | 2024-12-17 |
| `openai/o1-preview`<br />OpenAI o1-preview | o | text | text | reasoning | context: 128000 / output: 32768 | input: 0 / output: 0 | 2024-09-12 |
| `openai/o3`<br />OpenAI o3 | o | image, text | text | reasoning | context: 200000 / output: 100000 | input: 0 / output: 0 | 2025-01-31 |
| `openai/o3-mini`<br />OpenAI o3-mini | o-mini | text | text | reasoning | context: 200000 / output: 100000 | input: 0 / output: 0 | 2025-01-31 |
| `openai/o4-mini`<br />OpenAI o4-mini | o-mini | image, text | text | reasoning | context: 200000 / output: 100000 | input: 0 / output: 0 | 2025-01-31 |
| `xai/grok-3`<br />Grok 3 | grok | text | text | tools, reasoning, temperature | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-12-09 |
| `xai/grok-3-mini`<br />Grok 3 Mini | grok | text | text | tools, reasoning, temperature | context: 128000 / output: 8192 | input: 0 / output: 0 | 2024-12-09 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

