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

const documentIdMetadataKey = "__anvia_document_id";
const documentMetadataKey = "__anvia_document";
const reservedMetadataPrefix = "__anvia_";

export type PineconeMetric = "cosine" | "euclidean" | "dotproduct";

type PineconeClientLike = {
  listIndexes(): Promise<unknown>;
  createIndex(options: Record<string, unknown>): Promise<unknown>;
  index(indexName: string): PineconeIndexLike;
};

type PineconeIndexLike = {
  namespace(namespace: string): PineconeNamespaceLike;
};

type PineconeNamespaceLike = {
  upsert(vectors: Array<Record<string, unknown>>): Promise<unknown>;
  query(options: Record<string, unknown>): Promise<unknown>;
};

export type PineconeVectorStoreConnectOptions = {
  client?: PineconeClientLike | undefined;
  indexName: string;
  namespace?: string | undefined;
  createIfMissing?: boolean | undefined;
  metric?: PineconeMetric | undefined;
};

export class PineconeVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  private constructor(private readonly namespace: PineconeNamespaceLike) {}

  static async connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: PineconeVectorStoreConnectOptions,
  ): Promise<PineconeVectorStore<T, Metadata>> {
    const client = options.client ?? (await defaultPineconeClient());

    if (options.createIfMissing !== false) {
      await ensureIndex(client, options.indexName, options.metric ?? "cosine");
    }

    const namespace = client.index(options.indexName).namespace(options.namespace ?? "");
    return new PineconeVectorStore<T, Metadata>(namespace);
  }

  async upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void> {
    const vectors = documents.flatMap((document) => pineconeVectors(document));
    await this.namespace.upsert(vectors);
  }

  index(model: EmbeddingModel): PineconeVectorIndex<T, Metadata> {
    return new PineconeVectorIndex(model, this.namespace);
  }
}

export class PineconeVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata>
{
  constructor(
    private readonly model: EmbeddingModel,
    private readonly namespace: PineconeNamespaceLike,
  ) {}

  async search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>> {
    const queryEmbedding = await embedText(this.model, request.query);
    const response = await this.namespace.query({
      vector: queryEmbedding.vector,
      topK: request.topK,
      filter: filterToPineconeFilter(request.filter),
      includeMetadata: true,
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

export function filterToPineconeFilter(filter: VectorFilter | undefined): unknown {
  if (filter === undefined) {
    return undefined;
  }

  switch (filter.type) {
    case "eq":
      return { [filter.key]: { $eq: filter.value } };
    case "gt":
      return { [filter.key]: { $gt: filter.value } };
    case "lt":
      return { [filter.key]: { $lt: filter.value } };
    case "and":
      return { $and: filter.filters.map(filterToPineconeFilter) };
    case "or":
      return { $or: filter.filters.map(filterToPineconeFilter) };
  }
}

async function defaultPineconeClient(): Promise<PineconeClientLike> {
  const { Pinecone } = await import("@pinecone-database/pinecone");
  return new Pinecone() as unknown as PineconeClientLike;
}

async function ensureIndex(
  client: PineconeClientLike,
  indexName: string,
  metric: PineconeMetric,
): Promise<void> {
  try {
    await client.listIndexes();
  } catch {
    return;
  }

  try {
    await client.createIndex({
      name: indexName,
      dimension: undefined,
      metric,
      spec: { serverless: { cloud: "aws", region: "us-east-1" } },
      waitUntilReady: true,
    });
  } catch {
    // Index already exists
  }
}

function pineconeVectors<T, Metadata extends VectorMetadata>(
  document: EmbeddedDocument<T, Metadata>,
): Array<Record<string, unknown>> {
  if (document.embeddings.length === 0) {
    throw new Error(`Document ${document.id} has no embeddings`);
  }

  assertNoReservedMetadata(document.metadata);

  return document.embeddings.map((embedding, index) => {
    const logicalId =
      document.embeddings.length === 1 ? document.id : `${document.id}#embedding:${index}`;
    return {
      id: pointId(logicalId),
      values: embedding.vector,
      metadata: {
        [documentIdMetadataKey]: document.id,
        [documentMetadataKey]: serializeDocument(document.document),
        ...(document.metadata ?? {}),
      },
    };
  });
}

function assertNoReservedMetadata(metadata: VectorMetadata | undefined): void {
  for (const key of Object.keys(metadata ?? {})) {
    if (key.startsWith(reservedMetadataPrefix)) {
      throw new Error(`Metadata key ${key} is reserved for Anvia Pinecone payloads`);
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
    matches?: Array<{
      id: string;
      score?: number;
      metadata?: Record<string, unknown> | null;
    }>;
  };
  const matches = raw.matches ?? [];

  const byId = new Map<string, VectorSearchResult<T, Metadata>>();

  for (const match of matches) {
    const score = match.score ?? 0;
    if (threshold !== undefined && score < threshold) {
      continue;
    }

    const id = String(match.metadata?.[documentIdMetadataKey] ?? match.id);
    const result = {
      id,
      score,
      document: parseDocument(match.metadata?.[documentMetadataKey]),
      ...metadataFromPayload<Metadata>(match.metadata),
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

function metadataFromPayload<Metadata extends VectorMetadata>(
  payload: Record<string, unknown> | null | undefined,
): { metadata?: Metadata | undefined } {
  const metadata = Object.fromEntries(
    Object.entries(payload ?? {}).filter(([key]) => !key.startsWith(reservedMetadataPrefix)),
  ) as Metadata;
  return Object.keys(metadata).length === 0 ? {} : { metadata };
}
