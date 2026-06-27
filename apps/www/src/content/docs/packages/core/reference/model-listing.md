---
title: "Model Listing"
description: "Provider-neutral model list contracts."
section: packages
sidebar:
  group: "Reference"
  order: 13
  label: "Model Listing"
---
Import from `@anvia/core/model-listing` or `@anvia/core`.

## Model Listing Types

```ts
type ListedModel = {
  id: string;
  name?: string;
  description?: string;
  type?: string;
  createdAt?: number;
  ownedBy?: string;
  contextLength?: number;
};

type ModelList = {
  data: ListedModel[];
};

interface ModelListingClient {
  listModels(): Promise<ModelList>;
}
```

Purpose: normalized model-listing contracts shared by provider clients.

Return behavior: provider clients fetch live provider model data and normalize known fields. Unknown fields remain omitted.

## ModelListingError

```ts
class ModelListingError extends Error {
  readonly provider?: string;
  readonly statusCode?: number;
  readonly cause?: unknown;
}
```

Purpose: standard error wrapper for provider model-listing failures.

Return behavior: thrown by provider `listModels()` implementations when SDK or provider requests fail.
