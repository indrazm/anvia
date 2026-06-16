import { createHash } from "node:crypto";
import {
  type EmbeddedDocument,
  type EmbeddingModel,
  embedText,
  type VectorMetadata,
} from "@anvia/core/embeddings";
import type { Tool } from "@anvia/core/tool";
import {
  createVectorSearchTool,
  type VectorFilter,
  type VectorSearchIndex,
  type VectorSearchRequest,
  type VectorSearchResult,
  type VectorSearchToolOptions,
} from "@anvia/core/vector-store";

const documentIdFieldName = "__anvia_document_id";
const documentFieldName = "__anvia_document";
const reservedFieldPrefix = "__anvia_";

export type MilvusMetric = "COSINE" | "L2" | "IP";

type MilvusClientLike = {
  hasCollection(options: { collection_name: string }): Promise<{ value: boolean }>;
  createCollection(options: Record<string, unknown>): Promise<unknown>;
  createIndex(options: Record<string, unknown>): Promise<unknown>;
  loadCollection(options: { collection_name: string }): Promise<unknown>;
  insert(options: Record<string, unknown>): Promise<unknown>;
  search(options: Record<string, unknown>): Promise<unknown>;
};

export type MilvusVectorStoreConnectOptions = {
  client?: MilvusClientLike | undefined;
  collectionName: string;
  vectorSize: number;
  createIfMissing?: boolean | undefined;
  metric?: MilvusMetric | undefined;
};

export class MilvusVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  private constructor(
    private readonly client: MilvusClientLike,
    private readonly collectionName: string,
  ) {}

  static async connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: MilvusVectorStoreConnectOptions,
  ): Promise<MilvusVectorStore<T, Metadata>> {
    const client = options.client ?? (await defaultMilvusClient());

    if (options.createIfMissing !== false) {
      await ensureCollection(
        client,
        options.collectionName,
        options.vectorSize,
        options.metric ?? "COSINE",
      );
    }

    await client.loadCollection({ collection_name: options.collectionName });
    return new MilvusVectorStore<T, Metadata>(client, options.collectionName);
  }

  async upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void> {
    const rows = documents.flatMap((document) => milvusRows(document));
    await this.client.insert({
      collection_name: this.collectionName,
      data: rows,
    });
  }

  index(model: EmbeddingModel): MilvusVectorIndex<T, Metadata> {
    return new MilvusVectorIndex(model, this.client, this.collectionName);
  }
}

export class MilvusVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata>
{
  constructor(
    private readonly model: EmbeddingModel,
    private readonly client: MilvusClientLike,
    private readonly collectionName: string,
  ) {}

  async search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>> {
    const queryEmbedding = await embedText(this.model, request.query);
    const filterExpr = filterToMilvusExpr(request.filter);
    const response = await this.client.search({
      collection_name: this.collectionName,
      vector: [queryEmbedding.vector],
      limit: request.topK,
      ...(filterExpr !== undefined ? { filter: filterExpr } : {}),
      output_fields: [documentIdFieldName, documentFieldName, "*"],
    });
    return parseQueryResults<T, Metadata>(response, request.threshold);
  }

  async searchIds(request: VectorSearchRequest): Promise<Array<{ score: number; id: string }>> {
    return (await this.search(request)).map(({ score, id }) => ({ score, id }));
  }

  asTool(options: VectorSearchToolOptions): Tool<{ query: string; topK?: number }, unknown> {
    return createVectorSearchTool(this, options);
  }
}

export function filterToMilvusExpr(filter: VectorFilter | undefined): string | undefined {
  if (filter === undefined) {
    return undefined;
  }

  switch (filter.type) {
    case "eq": {
      const val = milvusLiteral(filter.value);
      return `${filter.key} == ${val}`;
    }
    case "gt": {
      const val = milvusLiteral(filter.value);
      return `${filter.key} > ${val}`;
    }
    case "lt": {
      const val = milvusLiteral(filter.value);
      return `${filter.key} < ${val}`;
    }
    case "and": {
      const parts = filter.filters
        .map(filterToMilvusExpr)
        .filter((part): part is string => part !== undefined);
      return parts.length > 0 ? parts.map((p) => `(${p})`).join(" && ") : undefined;
    }
    case "or": {
      const parts = filter.filters
        .map(filterToMilvusExpr)
        .filter((part): part is string => part !== undefined);
      return parts.length > 0 ? parts.map((p) => `(${p})`).join(" || ") : undefined;
    }
  }
}

function milvusLiteral(value: string | number | boolean | null): string {
  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return String(value);
}

async function defaultMilvusClient(): Promise<MilvusClientLike> {
  const { MilvusClient } = await import("@zilliz/milvus2-sdk-node");
  return new MilvusClient({ address: "localhost:19530" }) as unknown as MilvusClientLike;
}

async function ensureCollection(
  client: MilvusClientLike,
  collectionName: string,
  vectorSize: number,
  metric: MilvusMetric,
): Promise<void> {
  const { value: exists } = await client.hasCollection({ collection_name: collectionName });
  if (exists) {
    return;
  }

  await client.createCollection({
    collection_name: collectionName,
    fields: [
      { name: "id", data_type: "VarChar", max_length: 64, is_primary_key: true },
      { name: documentIdFieldName, data_type: "VarChar", max_length: 4096 },
      { name: documentFieldName, data_type: "VarChar", max_length: 65535 },
      { name: "vector", data_type: "FloatVector", dim: vectorSize },
    ],
    metric_type: metric,
  });

  await client.createIndex({
    collection_name: collectionName,
    field_name: "vector",
    index_type: "HNSW",
    metric_type: metric,
    params: { M: 16, efConstruction: 256 },
  });
}

function milvusRows<T, Metadata extends VectorMetadata>(
  document: EmbeddedDocument<T, Metadata>,
): Array<Record<string, unknown>> {
  if (document.embeddings.length === 0) {
    throw new Error(`Document ${document.id} has no embeddings`);
  }

  assertNoReservedFields(document.metadata);

  return document.embeddings.map((embedding, index) => {
    const logicalId =
      document.embeddings.length === 1 ? document.id : `${document.id}#embedding:${index}`;
    return {
      id: pointId(logicalId),
      [documentIdFieldName]: document.id,
      [documentFieldName]: serializeDocument(document.document),
      vector: embedding.vector,
      ...(document.metadata ?? {}),
    };
  });
}

function assertNoReservedFields(metadata: VectorMetadata | undefined): void {
  for (const key of Object.keys(metadata ?? {})) {
    if (key.startsWith(reservedFieldPrefix)) {
      throw new Error(`Metadata key ${key} is reserved for Anvia Milvus fields`);
    }
  }
}

function pointId(id: string): string {
  return createHash("sha256").update(id).digest("hex").slice(0, 32);
}

function serializeDocument(document: unknown): string {
  return typeof document === "string" ? document : JSON.stringify(document);
}

function parseQueryResults<T, Metadata extends VectorMetadata>(
  response: unknown,
  threshold: number | undefined,
): Array<VectorSearchResult<T, Metadata>> {
  const raw = response as {
    results?: Array<
      Array<{
        id: string;
        score?: number;
        [documentIdFieldName]?: string;
        [documentFieldName]?: string;
        [key: string]: unknown;
      }>
    >;
  };
  const matches = raw.results?.[0] ?? [];

  const byId = new Map<string, VectorSearchResult<T, Metadata>>();

  for (const match of matches) {
    const score = match.score ?? 0;
    if (threshold !== undefined && score < threshold) {
      continue;
    }

    const id = String(match[documentIdFieldName] ?? match.id);
    const result = {
      id,
      score,
      document: parseDocument(match[documentFieldName]),
      ...metadataFromRow<Metadata>(match),
    } as VectorSearchResult<T, Metadata>;

    const current = byId.get(id);
    if (current === undefined || result.score > current.score) {
      byId.set(id, result);
    }
  }

  return [...byId.values()];
}

function parseDocument<T>(document: unknown): T {
  if (document === null || document === undefined) {
    return "" as T;
  }
  if (typeof document !== "string") {
    return document as T;
  }
  try {
    return JSON.parse(document) as T;
  } catch {
    return document as T;
  }
}

function metadataFromRow<Metadata extends VectorMetadata>(
  row: Record<string, unknown>,
): { metadata?: Metadata | undefined } {
  const skipKeys = new Set(["id", "score", documentIdFieldName, documentFieldName, "vector"]);
  const metadata = Object.fromEntries(
    Object.entries(row).filter(
      ([key]) => !skipKeys.has(key) && !key.startsWith(reservedFieldPrefix),
    ),
  ) as Metadata;
  return Object.keys(metadata).length === 0 ? {} : { metadata };
}
