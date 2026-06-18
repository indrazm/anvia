import type { EmbeddedDocument, EmbeddingModel, VectorMetadata } from "@anvia/core/embeddings";
import { defaultWeaviateClient, weaviateObjects } from "./helpers.js";
import { WeaviateVectorIndex } from "./search-index.js";
import type { WeaviateClientLike, WeaviateVectorStoreConnectOptions } from "./types.js";

export class WeaviateVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  private constructor(
    private readonly client: WeaviateClientLike,
    private readonly className: string,
  ) {}

  static async connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: WeaviateVectorStoreConnectOptions,
  ): Promise<WeaviateVectorStore<T, Metadata>> {
    const client = options.client ?? (await defaultWeaviateClient());

    if (options.createIfMissing === false) {
      const exists = await client.collections.exists(options.className);
      if (!exists) {
        throw new Error(`Collection ${options.className} does not exist`);
      }
      return new WeaviateVectorStore<T, Metadata>(client, options.className);
    }

    const exists = await client.collections.exists(options.className);
    if (!exists) {
      await client.collections.create({
        name: options.className,
        vectorizers: null,
        vectorIndexConfig: {
          distance: options.distance ?? "cosine",
        },
        properties: [
          { name: "__anvia_document_id", dataType: "text" },
          { name: "__anvia_document", dataType: "text" },
        ],
      });
    }

    return new WeaviateVectorStore<T, Metadata>(client, options.className);
  }

  async upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void> {
    const objects = documents.flatMap((document) => weaviateObjects(this.className, document));
    const batcher = this.client.batch.objectsBatcher();
    for (const obj of objects) {
      batcher.withObject(obj);
    }
    await batcher.do();
  }

  index(model: EmbeddingModel): WeaviateVectorIndex<T, Metadata> {
    return new WeaviateVectorIndex(model, this.client, this.className);
  }
}
