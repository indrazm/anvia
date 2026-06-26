---
title: OpenAI provider
description: Use @anvia/openai for OpenAI model capabilities.
section: providers
sidebar:
  group: Provider guides
  order: 10
---

`@anvia/openai` adapts OpenAI APIs to Anvia's provider-neutral contracts. Use it for OpenAI completions, embeddings, image generation, audio generation, transcription, and model listing.

## Install

```bash
pnpm add @anvia/core @anvia/openai
```

Create the client in server-only code:

```ts
import { OpenAIClient } from "@anvia/openai";

export const openai = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});
```

`OpenAIClient` accepts `apiKey`, `baseUrl`, `headers`, `completionApi`, or an already-created OpenAI client instance.

Use [OpenAI-Compatible](/docs/providers/openai-compatible) when you want to target a non-OpenAI endpoint through the Anvia OpenAI adapter.

## Completion Models

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const openai = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const model = openai.completionModel("gpt-5");

export const agent = new AgentBuilder("assistant", model)
  .instructions("Answer clearly and concisely.")
  .build();
```

By default, `completionModel(...)` returns a Responses API adapter when `baseUrl` is not set. That adapter supports streaming, tools, tool choice, image input, document input, output schemas, and reasoning content at the Anvia contract level.

## Responses Vs Chat

You can force the completion adapter:

```ts
const responsesClient = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  completionApi: "responses",
});

const chatClient = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  completionApi: "chat",
});
```

The chat adapter supports streaming, tools, tool choice, image input, output schemas, and reasoning fields. It does not expose document input in its capability declaration.

## Embeddings

```ts
const embeddings = openai.embeddingModel("text-embedding-3-small", {
  dimensions: 1536,
  maxBatchSize: 512,
  user: "tenant-123",
});

const vectors = await embeddings.embedTexts([
  "Refunds are reviewed within two business days.",
]);
```

`OpenAIEmbeddingModel` preserves input order and validates that the provider response indexes match the input batch.

## Image, Audio, And Transcription

```ts
import { GPT_IMAGE_1, TTS_1, WHISPER_1, OpenAIClient } from "@anvia/openai";

const openai = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const imageModel = openai.imageGenerationModel(GPT_IMAGE_1);
const audioModel = openai.audioGenerationModel(TTS_1);
const transcriptionModel = openai.transcriptionModel(WHISPER_1);
```

Image generation returns image bytes from base64 responses. If the provider returns image URLs instead of base64 data, the adapter rejects the response because the core image contract expects bytes.

Audio generation maps the core text, voice, and speed request to OpenAI speech. Transcription maps core audio bytes and filename to OpenAI transcription.

## Model Listing

```ts
const models = await openai.listModels();
```

Use listing for inventory and admin views. Do not treat it as proof that a model supports tools, streaming, schemas, or media workflows. Read [Model listing](/docs/advanced/model-listing) for production guidance.

## Exports

The root package exports `OpenAIClient`, `OpenAIResponsesCompletionModel`, `OpenAIChatCompletionModel`, `OpenAIEmbeddingModel`, `OpenAIImageGenerationModel`, `OpenAIAudioGenerationModel`, `OpenAITranscriptionModel`, constants such as `GPT_IMAGE_1`, `GPT_IMAGE_2`, `DALL_E_3`, `TTS_1`, `TTS_1_HD`, `WHISPER_1`, and the `openai` namespace.
