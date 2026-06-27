---
title: "Weaviate"
description: "Public exports from @anvia/weaviate."
section: packages
sidebar:
  group: "weaviate"
  order: 6
  label: "Weaviate"
---
Import from `@anvia/weaviate`.

## WeaviateVectorStoreConnectOptions

```ts
type WeaviateDistance = "cosine" | "dot" | "l2" | "manhattan" | "hamming";

type WeaviateVectorStoreConnectOptions = {
  client?: WeaviateClientLike;
  className: string;
  vectorSize: number;
  createIfMissing?: boolean;
  distance?: WeaviateDistance;
};
```

Purpose: connection options for a Weaviate collection.

Return behavior: consumed by `WeaviateVectorStore.connect(...)`.

Notable errors: missing collections reject when `createIfMissing` is `false`; collection creation requires `vectorSize`.

Design note: `connect(...)` performs async collection lookup or creation before returning a store. This keeps constructors synchronous and side-effect free while making connection and configuration failures happen before ingestion or search. Uses the Weaviate v3 client API with `collections.create(...)` and `collections.exists(...)`.

## WeaviateVectorStore

```ts
class WeaviateVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  static connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: WeaviateVectorStoreConnectOptions,
  ): Promise<WeaviateVectorStore<T, Metadata>>;
  upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void>;
  index(model: EmbeddingModel): WeaviateVectorIndex<T, Metadata>;
}
```

Purpose: Weaviate-backed document storage.

Return behavior: `connect(...)` resolves a store; `index(...)` binds it to an embedding model.

Notable errors: connection and upsert calls reject on Weaviate errors; `upsertDocuments(...)` throws when a document has no embeddings or metadata uses reserved `__anvia_*` keys.

## WeaviateVectorIndex

```ts
class WeaviateVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata> {
  search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>>;
  searchIds(request: VectorSearchRequest): Promise<Array<{ score: number; id: string }>>;
  asTool(options: VectorSearchToolOptions): Tool<{ query: string; topK?: number }, unknown>;
}
```

Purpose: query-time Weaviate search adapter.

Return behavior: embeds the query, calls Weaviate via `nearVector`, deduplicates multi-embedding document IDs, and returns normalized results.

Notable errors: embedding or Weaviate query failures reject.

## filterToWeaviateWhere

```ts
function filterToWeaviateWhere(filter: VectorFilter | undefined): unknown;
```

Purpose: convert Anvia vector filters to Weaviate `where` filter objects.

Return behavior: returns `undefined` when no filter is supplied.

Notable errors: none directly.

## WeaviateClientLike

```ts
type WeaviateClientLike = {
  collections: WeaviateCollectionsLike;
  batch: WeaviateBatchLike;
};
```

Purpose: duck-typed interface for a Weaviate v3 client.

## WeaviateCollectionLike

```ts
type WeaviateCollectionLike = {
  query: {
    nearVector(params: NearVectorParams): Promise<Array<Record<string, unknown>>>;
  };
};
```

Purpose: duck-typed interface for a Weaviate collection, exposing vector query capabilities.

## WeaviateBatcherLike

```ts
type WeaviateBatcherLike = {
  withObject(obj: Record<string, unknown>): WeaviateBatcherLike;
  do(): Promise<unknown>;
};
```

Purpose: duck-typed interface for a Weaviate batch inserter.
