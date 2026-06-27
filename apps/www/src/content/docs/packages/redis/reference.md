---
title: "Redis"
description: "Public exports from @anvia/redis."
section: packages
sidebar:
  group: "redis"
  order: 6
  label: "Redis"
---
Import from `@anvia/redis`.

## RedisVectorStoreConnectOptions

```ts
type RedisDistance = "COSINE" | "L2" | "IP";

type RedisVectorStoreConnectOptions = {
  client?: RedisClientLike;
  indexName: string;
  keyPrefix?: string;
  vectorSize: number;
  createIfMissing?: boolean;
  distance?: RedisDistance;
};
```

Purpose: connection options for a Redis vector index backed by RediSearch.

Return behavior: consumed by `RedisVectorStore.connect(...)`.

Notable errors: missing indices reject when `createIfMissing` is `false`; index creation requires `vectorSize`. The `keyPrefix` defaults to `anvia:{indexName}:`.

Design note: `connect(...)` uses `FT.CREATE` to create a RediSearch index over HASH keys. Each document is stored as a HASH with `__anvia_document_id`, `__anvia_document`, and `__anvia_vector` (Float32Buffer) fields plus any metadata fields.

## RedisVectorStore

```ts
class RedisVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  static connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: RedisVectorStoreConnectOptions,
  ): Promise<RedisVectorStore<T, Metadata>>;
  upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void>;
  index(model: EmbeddingModel): RedisVectorIndex<T, Metadata>;
}
```

Purpose: Redis-backed document storage using RediSearch vector fields.

Return behavior: `connect(...)` resolves a store; `index(...)` binds it to an embedding model.

Notable errors: connection and upsert calls reject on Redis errors; `upsertDocuments(...)` throws when a document has no embeddings or metadata uses reserved `__anvia_*` keys.

## RedisVectorIndex

```ts
class RedisVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata> {
  search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>>;
  searchIds(request: VectorSearchRequest): Promise<Array<{ score: number; id: string }>>;
  asTool(options: VectorSearchToolOptions): Tool<{ query: string; topK?: number }, unknown>;
}
```

Purpose: query-time Redis search adapter.

Return behavior: embeds the query, executes an `FT.SEARCH` KNN query, deduplicates multi-embedding document IDs, and returns normalized results.

Notable errors: embedding or Redis query failures reject.

## filterToRedisQuery

```ts
function filterToRedisQuery(filter: VectorFilter | undefined): string;
```

Purpose: convert Anvia vector filters to RediSearch query string syntax.

Return behavior: returns `"*"` when no filter is supplied.

Notable errors: none directly.
