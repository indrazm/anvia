import { type EmbeddingModel, embedText, type VectorMetadata } from "@anvia/core/embeddings";
import type { Tool } from "@anvia/core/tool";
import {
  createVectorSearchTool,
  type VectorSearchIndex,
  type VectorSearchRequest,
  type VectorSearchResult,
  type VectorSearchToolOptions,
} from "@anvia/core/vector-store";
import { filterToWeaviateWhere } from "./filters.js";
import { parseQueryResults } from "./helpers.js";
import { documentIdPropertyKey, documentPropertyKey, type WeaviateClientLike } from "./types.js";

export class WeaviateVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata>
{
  constructor(
    private readonly model: EmbeddingModel,
    private readonly client: WeaviateClientLike,
    private readonly className: string,
  ) {}

  async search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>> {
    const queryEmbedding = await embedText(this.model, request.query);
    const collection = this.client.collections.get(this.className);

    const filters = filterToWeaviateWhere(request.filter);
    const response = await collection.query.nearVector({
      vector: queryEmbedding.vector,
      limit: request.topK,
      filters: filters as import("./types.js").NearVectorParams["filters"],
      returnMetadata: ["certainty", "distance"],
      returnProperties: [documentIdPropertyKey, documentPropertyKey],
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
