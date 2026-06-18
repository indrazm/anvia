import { type EmbeddingModel, embedText, type VectorMetadata } from "@anvia/core/embeddings";
import type { Tool } from "@anvia/core/tool";
import {
  createVectorSearchTool,
  type VectorSearchIndex,
  type VectorSearchRequest,
  type VectorSearchResult,
  type VectorSearchToolOptions,
} from "@anvia/core/vector-store";
import { filterToLanceExpr } from "./filters.js";
import { parseQueryResults } from "./helpers.js";
import type { LanceDBConnectionLike } from "./types.js";

export class LanceDBVectorIndex<T, Metadata extends VectorMetadata = VectorMetadata>
  implements VectorSearchIndex<T, Metadata>
{
  constructor(
    private readonly model: EmbeddingModel,
    private readonly connection: LanceDBConnectionLike,
    private readonly tableName: string,
  ) {}

  async search(request: VectorSearchRequest): Promise<Array<VectorSearchResult<T, Metadata>>> {
    const queryEmbedding = await embedText(this.model, request.query);
    const table = await this.connection.openTable(this.tableName);
    const filterExpr = filterToLanceExpr(request.filter);

    const query = table.search(queryEmbedding.vector).limit(request.topK);

    let response: unknown[];
    if (filterExpr !== undefined) {
      response = (await query.filter(filterExpr)) as unknown[];
    } else {
      response = (await query.toArray()) as unknown[];
    }

    return parseQueryResults<T, Metadata>(response, request.threshold);
  }

  async searchIds(request: VectorSearchRequest): Promise<Array<{ score: number; id: string }>> {
    return (await this.search(request)).map(({ score, id }) => ({ score, id }));
  }

  asTool(options: VectorSearchToolOptions): Tool<{ query: string; topK?: number }, unknown> {
    return createVectorSearchTool(this, options);
  }
}
