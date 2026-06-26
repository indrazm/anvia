---
title: "Mistral"
description: "Use Mistral through @anvia/mistral."
section: providers
sidebar:
  group: LLM Gateway
  order: 1073
  label: "Mistral"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | @anvia/mistral |
| Compatibility | First-party Mistral endpoint |
| API URL | Not listed in models.dev |
| Environment | `MISTRAL_API_KEY` |
| Provider docs | [https://docs.mistral.ai/getting-started/models/](https://docs.mistral.ai/getting-started/models/) |
| Models | 30 |

## Anvia Usage

This provider maps to the Anvia Mistral provider. Use the [Mistral provider](/docs/providers/mistral) guide for the complete setup.

```ts
import { MistralClient } from "@anvia/mistral";

const client = new MistralClient({
  apiKey: process.env.MISTRAL_API_KEY,
});

const model = client.completionModel("codestral-latest");
```

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, text |
| Output modalities | text |
| Attachments | 10 / 30 models |
| Tools | 29 / 30 models |
| Structured output | 1 / 30 models |
| Reasoning | 5 / 30 models |
| Temperature | 29 / 30 models |
| Open weights | 26 / 30 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `codestral-latest`<br />Codestral (latest) | codestral | text | text | tools, temperature, open weights | context: 256000 / output: 4096 | input: 0.3 / output: 0.9 | 2025-01-04 |
| `devstral-2512`<br />Devstral 2 | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-09 |
| `devstral-latest`<br />Devstral 2 | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-09 |
| `devstral-medium-2507`<br />Devstral Medium | devstral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.4 / output: 2 | 2025-07-10 |
| `devstral-medium-latest`<br />Devstral 2 (latest) | devstral | text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-12-02 |
| `devstral-small-2505`<br />Devstral Small 2505 | devstral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.1 / output: 0.3 | 2025-05-07 |
| `devstral-small-2507`<br />Devstral Small | devstral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.1 / output: 0.3 | 2025-07-10 |
| `labs-devstral-small-2512`<br />Devstral Small 2 | devstral | image, text | text | tools, temperature, open weights | context: 256000 / output: 256000 | input: 0 / output: 0 | 2025-12-09 |
| `magistral-medium-latest`<br />Magistral Medium (latest) | magistral-medium | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 16384 | input: 2 / output: 5 | 2025-03-20 |
| `magistral-small`<br />Magistral Small | magistral-small | text | text | tools, reasoning, temperature, open weights | context: 128000 / output: 128000 | input: 0.5 / output: 1.5 | 2025-03-17 |
| `ministral-3b-latest`<br />Ministral 3B (latest) | ministral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.04 / output: 0.04 | 2024-10-04 |
| `ministral-8b-latest`<br />Ministral 8B (latest) | ministral | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.1 / output: 0.1 | 2024-10-04 |
| `mistral-embed`<br />Mistral Embed | mistral-embed | text | text | - | context: 8000 / output: 3072 | input: 0.1 / output: 0 | 2023-12-11 |
| `mistral-large-2411`<br />Mistral Large 2.1 | mistral-large | text | text | tools, temperature, open weights | context: 131072 / output: 16384 | input: 2 / output: 6 | 2024-11-18 |
| `mistral-large-2512`<br />Mistral Large 3 | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral-large-latest`<br />Mistral Large (latest) | mistral-large | image, text | text | tools, temperature, open weights | context: 262144 / output: 262144 | input: 0.5 / output: 1.5 | 2025-12-02 |
| `mistral-medium-2505`<br />Mistral Medium 3 | mistral-medium | image, text | text | tools, temperature | context: 131072 / output: 131072 | input: 0.4 / output: 2 | 2025-05-07 |
| `mistral-medium-2508`<br />Mistral Medium 3.1 | mistral-medium | image, text | text | tools, temperature | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-08-12 |
| `mistral-medium-2604`<br />Mistral Medium 3.5 | mistral-medium | image, text | text | tools, schema, reasoning, temperature, open weights | context: 262144 / output: 262144 | input: 1.5 / output: 7.5 | 2026-04-29 |
| `mistral-medium-latest`<br />Mistral Medium (latest) | mistral-medium | image, text | text | tools, temperature | context: 262144 / output: 262144 | input: 0.4 / output: 2 | 2025-08-12 |
| `mistral-nemo`<br />Mistral Nemo | mistral-nemo | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-07-01 |
| `mistral-small-2506`<br />Mistral Small 3.2 | mistral-small | image, text | text | tools, temperature, open weights | context: 128000 / output: 16384 | input: 0.1 / output: 0.3 | 2025-06-20 |
| `mistral-small-2603`<br />Mistral Small 4 | mistral-small | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.15 / output: 0.6 | 2026-03-16 |
| `mistral-small-latest`<br />Mistral Small (latest) | mistral-small | image, text | text | tools, reasoning, temperature, open weights | context: 256000 / output: 256000 | input: 0.15 / output: 0.6 | 2026-03-16 |
| `open-mistral-7b`<br />Mistral 7B | mistral | text | text | tools, temperature, open weights | context: 8000 / output: 8000 | input: 0.25 / output: 0.25 | 2023-09-27 |
| `open-mistral-nemo`<br />Open Mistral Nemo | mistral-nemo | text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-07-01 |
| `open-mixtral-8x22b`<br />Mixtral 8x22B | mixtral | text | text | tools, temperature, open weights | context: 64000 / output: 64000 | input: 2 / output: 6 | 2024-04-17 |
| `open-mixtral-8x7b`<br />Mixtral 8x7B | mixtral | text | text | tools, temperature, open weights | context: 32000 / output: 32000 | input: 0.7 / output: 0.7 | 2023-12-11 |
| `pixtral-12b`<br />Pixtral 12B | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 0.15 / output: 0.15 | 2024-09-01 |
| `pixtral-large-latest`<br />Pixtral Large (latest) | pixtral | image, text | text | tools, temperature, open weights | context: 128000 / output: 128000 | input: 2 / output: 6 | 2024-11-04 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

