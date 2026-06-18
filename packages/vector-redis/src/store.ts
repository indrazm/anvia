import type { EmbeddedDocument, EmbeddingModel, VectorMetadata } from "@anvia/core/embeddings";
import { redisHashEntries } from "./helpers.js";
import { RedisVectorIndex } from "./search-index.js";
import {
  documentField,
  documentIdField,
  type RedisClientLike,
  type RedisDistance,
  type RedisVectorStoreConnectOptions,
  SchemaFieldTypes,
  VectorAlgorithms,
  vectorField,
} from "./types.js";

export class RedisVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  private constructor(
    private readonly client: RedisClientLike,
    private readonly indexName: string,
    private readonly keyPrefix: string,
    private readonly vectorSize: number,
  ) {}

  static async connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: RedisVectorStoreConnectOptions,
  ): Promise<RedisVectorStore<T, Metadata>> {
    const client = options.client ?? (await (await import("./helpers.js")).defaultRedisClient());
    const keyPrefix = options.keyPrefix ?? `anvia:${options.indexName}:`;

    if (options.createIfMissing === false) {
      await client.ft.info(options.indexName);
      return new RedisVectorStore<T, Metadata>(
        client,
        options.indexName,
        keyPrefix,
        options.vectorSize,
      );
    }

    try {
      await client.ft.info(options.indexName);
    } catch {
      const distanceMap: Record<RedisDistance, string> = {
        COSINE: "COSINE",
        L2: "L2",
        IP: "IP",
      };
      await client.ft.create(
        options.indexName,
        {
          [documentIdField]: { type: SchemaFieldTypes.TEXT },
          [documentField]: { type: SchemaFieldTypes.TEXT },
          [vectorField]: {
            type: SchemaFieldTypes.VECTOR,
            ALGORITHM: VectorAlgorithms.HNSW,
            TYPE: "FLOAT32",
            DIM: options.vectorSize,
            DISTANCE_METRIC: distanceMap[options.distance ?? "COSINE"],
          },
        },
        { ON: "HASH", PREFIX: keyPrefix },
      );
    }

    return new RedisVectorStore<T, Metadata>(
      client,
      options.indexName,
      keyPrefix,
      options.vectorSize,
    );
  }

  async upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void> {
    const entries = documents.flatMap((document) => redisHashEntries(this.keyPrefix, document));
    for (const entry of entries) {
      await this.client.hSet(entry.key, entry.fields);
    }
  }

  index(model: EmbeddingModel): RedisVectorIndex<T, Metadata> {
    return new RedisVectorIndex(model, this.client, this.indexName);
  }
}
