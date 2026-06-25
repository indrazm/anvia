---
title: Add retrieval
description: Connect vector stores and embedding packages when your agent needs grounded context.
section: retrieval
sidebar:
  group: Use cases
  order: 1
home:
  card: true
  order: 3
---

Retrieval lets an agent answer with project-specific context. In Anvia, retrieval is composed as a runtime capability rather than embedded in model code.

## Choose an embedding adapter

Install an embedding provider and a vector store package that matches your infrastructure.

```bash
pnpm add @anvia/openai @anvia/pgvector
```

## Attach a retriever

Register the retriever with the runtime. The agent can request relevant documents before calling the model.

```ts
runtime.useRetriever("knowledge", {
  topK: 8,
  store,
  embed,
});
```

## Keep retrieval narrow

Use small, well-labeled indexes for each product area. Narrow indexes improve search quality and make it easier to debug why a document was selected.
