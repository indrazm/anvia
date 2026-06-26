---
title: Sumopod
description: Use Sumopod's OpenAI-compatible multi-model gateway through @anvia/openai.
section: providers
sidebar:
  group: LLM Gateway
  order: 1114.5
  label: Sumopod
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | `@anvia/openai` |
| Compatibility | OpenAI-compatible endpoint |
| API URL | `https://ai.sumopod.com/v1` |
| Environment | `SUMOPOD_API_KEY` |
| Provider docs | [https://sumopod.com](https://sumopod.com) |

## Anvia Usage

Sumopod exposes an OpenAI-compatible chat completions endpoint. Configure `OpenAIClient` with the Sumopod `baseUrl`, then pass Sumopod model ids to `completionModel(...)`.

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  baseUrl: "https://ai.sumopod.com/v1",
  apiKey: process.env.SUMOPOD_API_KEY,
});

const model = client.completionModel("gpt-4o-mini");

const agent = new AgentBuilder("support", model)
  .instructions("Answer support questions clearly.")
  .build();

const response = await agent.prompt("Say hello in a creative way").send();

console.log(response.output);
```

`baseUrl` makes Anvia use the OpenAI-compatible chat completion adapter. The model id is the Sumopod id, not an Anvia-specific alias.

## Model Listing

Sumopod's models API returns the model ids and metadata you can use when choosing a model. Because the client was created with `baseUrl`, `listModels()` calls Sumopod's `/models` endpoint.

```ts
const models = await client.listModels();

console.table(
  models.data.map((model) => ({
    id: model.id,
    name: model.name,
    contextLength: model.contextLength,
  })),
);
```

Use the `id` field directly with `completionModel(...)`.

## Sample Models

Sumopod aggregates models from Anthropic, OpenAI, Google, DeepSeek, Alibaba, Z.AI, Moonshot, BytePlus, MiniMax, and Mimo. Sample ids and pricing per 1M tokens:

| Model | Provider | Context | Input | Output |
| --- | --- | ---: | --- | --- |
| `claude-haiku-4-5` | Anthropic | 200,000 | $1.00 | $5.00 |
| `claude-opus-4-7` | Anthropic | 1,000,000 | $5.00 | $25.00 |
| `claude-sonnet-4-6` | Anthropic | 1,000,000 | $3.00 | $15.00 |
| `deepseek-v4-flash` | DeepSeek | 1,000,000 | $0.14 | $0.28 |
| `deepseek-v4-pro` | DeepSeek | 1,000,000 | $0.43 | $0.87 |
| `gemini/gemini-2.5-flash` | Gemini | 1,048,576 | $0.30 | $2.50 |
| `gemini/gemini-3.1-pro-preview` | Gemini | 1,048,576 | $2.00 | $12.00 |
| `glm-5.1` | Z.AI | 200,000 | $1.40 | $4.40 |
| `gpt-4.1` | OpenAI | 1,047,576 | $2.00 | $8.00 |
| `gpt-5` | OpenAI | 272,000 | $1.25 | $10.00 |
| `gpt-5.4` | OpenAI | 1,050,000 | $2.50 | $15.00 |
| `kimi-k2.7` | Moonshot | 262,100 | $0.95 | $4.00 |
| `MiniMax-M2.7-highspeed` | Sumopod | 204,800 | $0.03 | $0.12 |
| `qwen3.7-max` | Alibaba | 1,000,000 | $1.25 | $3.75 |
| `text-embedding-3-small` | OpenAI | 8,191 | $0.02 | - |

Prices were captured on June 15, 2026. Discounts, regional pricing, and available models change frequently, so confirm current rates on [sumopod.com](https://sumopod.com) before quoting or budgeting.

Embedding models such as `text-embedding-3-small`, `text-embedding-3-large`, and `gemini/gemini-embedding-001` can be retrieved through `embeddingModel(...)` when the gateway exposes them.

## Notes

- Sumopod API keys are passed as bearer tokens in the `Authorization` header.
- Model capabilities still depend on the upstream model. Test the specific model id for tool calling, structured output, streaming, and multimodal support before enabling those features.
- Some models on Sumopod are sold at a discount off the upstream list price. The discount is applied by Sumopod, not by Anvia.

For current API details, see the [Sumopod documentation](https://sumopod.com).
