---
title: Jatevo
description: Use Jatevo's OpenAI-compatible multi-model gateway through @anvia/openai.
section: providers
sidebar:
  group: LLM Gateway
  order: 1057.5
  label: Jatevo
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | `@anvia/openai` |
| Compatibility | OpenAI-compatible endpoint |
| API URL | `https://2.lb.jatevo.ai/v1` |
| Environment | `JATEVO_API_KEY` |
| Provider docs | [https://jatevo.ai/docs](https://jatevo.ai/docs) |

## Anvia Usage

Jatevo exposes an OpenAI-compatible chat completions surface. Configure `OpenAIClient` with the Jatevo `baseUrl`, then pass Jatevo model ids to `completionModel(...)`.

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  baseUrl: "https://2.lb.jatevo.ai/v1",
  apiKey: process.env.JATEVO_API_KEY,
});

const model = client.completionModel("auto");

const agent = new AgentBuilder("support", model)
  .instructions("Answer support questions clearly.")
  .build();

const response = await agent.prompt("Hello!").send();

console.log(response.output);
```

`baseUrl` makes Anvia use the OpenAI-compatible chat completion adapter. The model id is the Jatevo id, not an Anvia-specific alias. Pass `"auto"` to let Jatevo route the request across its available models.

## Model Listing

Jatevo exposes a `/v1/models` endpoint that returns the model ids available to your key. Because the client was created with `baseUrl`, `listModels()` calls Jatevo's `/models` endpoint.

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

Jatevo aggregates models from DeepSeek, Z.AI, NVIDIA, Moonshot, Alibaba, and Cerebras. Sample ids and pricing per 1M tokens:

| Model | Provider | Input | Output |
| --- | --- | --- | --- |
| `auto` | Jatevo Router | - | - |
| `deepseek-v4-pro` | DeepSeek | $1.74 | $3.48 |
| `glm-5.1` | Z.AI | $1.40 | $4.40 |
| `nvidia/nemotron-3-ultra-550b-a55b-nvfp4` | NVIDIA | $0.60 | $3.60 |
| `kimi-k2.7-code` | Moonshot | $0.75 | $3.50 |
| `qwen-3.7-max` | Alibaba Cloud | $1.25 | $3.75 |
| `cerebras-fast-chat` | Cerebras | Low | Low |

Prices were captured on June 15, 2026. Discounts, regional pricing, and available models change frequently, so confirm current rates on [jatevo.ai](https://jatevo.ai/pricing) before quoting or budgeting.

## Notes

- Jatevo API keys use the `sk-clb-...` prefix and are passed as bearer tokens in the `Authorization` header.
- Jatevo enforces a daily request quota that resets at 00:00 UTC.
- The gateway host is currently `2.lb.jatevo.ai`. If it moves to `jatevo.ai`, only the `baseUrl` host needs to change.
- A Codex CLI compatibility endpoint is exposed at `/backend-api/codex` for tools that expect that path.
- Errors follow the standard OpenAI shape. Common status codes include `401`, `403`, `429`, `502`, and `504`.
- Model capabilities still depend on the upstream model. Test the specific model id for tool calling, structured output, streaming, and multimodal support before enabling those features.

For current API details, see the [Jatevo documentation](https://jatevo.ai/docs) and [Jatevo model catalog](https://jatevo.ai/models).
