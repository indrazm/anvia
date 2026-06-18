import { type EmbeddingModel, embedText, type VectorMetadata } from "@anvia/core/embeddings";
import type { Tool } from "@anvia/core/tool";
import {
  createVectorSearchTool,
  type VectorSearchIndex,
  type VectorSearchRequest,
  type VectorSearchResult,
  type VectorSearchToolOptions,
} from "@anvia/core/vector-store";
import { filterToRedisQuery } from "./filters.js";
import { parseQueryResults } from "./helpers.js";
import { type RedisClientLike, vectorField } from "./types.js";

export class RedisVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata>
{
  constructor(
    private readonly model: EmbeddingModel,
    private readonly client: RedisClientLike,
    private readonly indexName: string,
  ) {}

  async search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>> {
    const queryEmbedding = await embedText(this.model, request.query);
    const filterQuery = filterToRedisQuery(request.filter);
    const knnQuery = `${filterQuery}=>[KNN ${request.topK} @${vectorField} $vec AS score]`;

    const response = await this.client.ft.search(this.indexName, knnQuery, {
      PARAMS: {
        vec: Buffer.from(new Float32Array(queryEmbedding.vector).buffer),
      },
      RETURN: ["__anvia_document_id", "__anvia_document", "score"],
      DIALECT: 2,
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
