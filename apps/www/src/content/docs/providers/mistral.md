---
title: Mistral provider
description: Use @anvia/mistral for Mistral completions, embeddings, OCR, and model listing.
section: providers
sidebar:
  group: Provider guides
  order: 40
---

`@anvia/mistral` adapts the Mistral SDK to Anvia completion, embedding, OCR, and model-listing contracts. Use it for Mistral chat workflows, retrieval embeddings, document OCR, and operational model inventory.

## Install

```bash
pnpm add @anvia/core @anvia/mistral
```

Create the client in server-only code:

```ts
import { MistralClient } from "@anvia/mistral";

export const mistral = new MistralClient({
  apiKey: process.env.MISTRAL_API_KEY,
});
```

`MistralClient` accepts `apiKey`, `serverURL`, or an already-created Mistral SDK `client`.

## Completion Models

```ts
import { AgentBuilder } from "@anvia/core";
import { MistralClient } from "@anvia/mistral";

const mistral = new MistralClient({
  apiKey: process.env.MISTRAL_API_KEY,
});

const model = mistral.completionModel("mistral-large-latest");

export const agent = new AgentBuilder("support", model)
  .instructions("Answer support questions clearly.")
  .build();
```

`MistralCompletionModel` supports streaming, tools, tool choice, and output schemas at the Anvia contract level. It does not declare chat image input, chat document input, or reasoning support.

## Server URL

Use `serverURL` when the Mistral SDK should target a configured server URL:

```ts
const mistral = new MistralClient({
  apiKey: process.env.MISTRAL_API_KEY,
  serverURL: "https://mistral.example.com",
});
```

Alternate server URLs should be smoke tested with tools, schemas, and streaming before production use.

## Embeddings

```ts
const embeddings = mistral.embeddingModel("mistral-embed", {
  dimensions: 1024,
  maxBatchSize: 512,
});

const vectors = await embeddings.embedTexts([
  "Refunds take five business days.",
]);
```

`MistralEmbeddingModel` validates provider response indexes and preserves input order.

## OCR

```ts
const ocr = mistral.ocrModel();

const result = await ocr.ocr({
  source: {
    type: "document_url",
    url: "https://example.com/invoice.pdf",
    documentName: "invoice.pdf",
  },
  includeImageBase64: false,
});

console.log(result.markdown);
```

OCR sources can be document URLs, image URLs, existing file ids, or bytes. Byte sources are uploaded through the Mistral files API before OCR processing.

The OCR response includes combined `text` and `markdown`, normalized page entries, optional document annotations, optional uploaded file metadata, usage information when returned, and the raw provider response.

## Model Listing

```ts
const models = await mistral.listModels();
```

Use listing for inventory. Keep a separate app allowlist for production-enabled model ids.

## Unsupported Features

The current adapter does not implement chat image input, chat document file input, transcription, audio generation, or image generation. Use [Capability matrix](/docs/providers/capability-matrix) before choosing Mistral for media workflows.

## Exports

The root package exports `MistralClient`, `MistralCompletionModel`, `MistralEmbeddingModel`, `MistralOcrModel`, OCR request and response types, `MISTRAL_OCR_LATEST`, Mistral message conversion helpers, and the `mistral` namespace.
