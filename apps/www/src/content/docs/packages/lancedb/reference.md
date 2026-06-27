---
title: "LanceDB"
description: "Public exports from @anvia/lancedb."
section: packages
sidebar:
  group: "lancedb"
  order: 6
  label: "LanceDB"
---
Import from `@anvia/lancedb`.

## LanceDBVectorStoreConnectOptions

```ts
type LanceDBDistance = "cosine" | "l2" | "dot";

type LanceDBVectorStoreConnectOptions = {
  client?: LanceDBConnectionLike;
  uri?: string;
  tableName: string;
  vectorSize: number;
  createIfMissing?: boolean;
  distance?: LanceDBDistance;
};
```

Purpose: connection options for a LanceDB table.

Return behavior: consumed by `LanceDBVectorStore.connect(...)`.

Notable errors: missing tables reject when `createIfMissing` is `false`. The `uri` defaults to `~/.anvia/lancedb`.

Design note: LanceDB is an embedded, serverless vector database. `connect(...)` opens or creates a local LanceDB database and table. Documents are stored as columnar rows with `__anvia_document_id`, `__anvia_document`, `__anvia_vector` (Float32 array), and any metadata columns.

## LanceDBVectorStore

```ts
class LanceDBVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  static connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: LanceDBVectorStoreConnectOptions,
  ): Promise<LanceDBVectorStore<T, Metadata>>;
  upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void>;
  index(model: EmbeddingModel): LanceDBVectorIndex<T, Metadata>;
}
```

Purpose: LanceDB-backed document storage.

Return behavior: `connect(...)` resolves a store; `index(...)` binds it to an embedding model.

Notable errors: connection and upsert calls reject on LanceDB errors; `upsertDocuments(...)` throws when a document has no embeddings or metadata uses reserved `__anvia_*` keys.

## LanceDBVectorIndex

```ts
class LanceDBVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata> {
  search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>>;
  searchIds(request: VectorSearchRequest): Promise<Array<{ score: number; id: string }>>;
  asTool(options: VectorSearchToolOptions): Tool<{ query: string; topK?: number }, unknown>;
}
```

Purpose: query-time LanceDB search adapter.

Return behavior: embeds the query, calls `table.search(...)` with optional SQL-like filter, deduplicates multi-embedding document IDs, and returns normalized results with score computed as `1 - distance`.

Notable errors: embedding or LanceDB query failures reject.

## filterToLanceExpr

```ts
function filterToLanceExpr(filter: VectorFilter | undefined): string | undefined;
```

Purpose: convert Anvia vector filters to LanceDB SQL-like filter expressions.

Return behavior: returns `undefined` when no filter is supplied.

Notable errors: none directly.

## LanceDBConnectionLike

```ts
type LanceDBConnectionLike = {
  openTable(name: string): Promise<LanceDBTableLike>;
  tableNames(): Promise<string[]>;
  createTable(name: string, data: Record<string, unknown>[]): Promise<LanceDBTableLike>;
};
```

Purpose: duck-typed interface for a LanceDB connection.
