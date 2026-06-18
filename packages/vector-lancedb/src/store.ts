import type { EmbeddedDocument, EmbeddingModel, VectorMetadata } from "@anvia/core/embeddings";
import { defaultLanceDBConnection, lanceRows } from "./helpers.js";
import { LanceDBVectorIndex } from "./search-index.js";
import type {
  LanceDBConnectionLike,
  LanceDBDistance,
  LanceDBVectorStoreConnectOptions,
} from "./types.js";

export class LanceDBVectorStore<T, Metadata extends VectorMetadata = VectorMetadata> {
  private constructor(
    private readonly connection: LanceDBConnectionLike,
    private readonly tableName: string,
    private readonly distance: LanceDBDistance,
    private readonly vectorSize: number,
  ) {}

  static async connect<T, Metadata extends VectorMetadata = VectorMetadata>(
    options: LanceDBVectorStoreConnectOptions,
  ): Promise<LanceDBVectorStore<T, Metadata>> {
    const connection = options.client ?? (await defaultLanceDBConnection(options.uri));
    const distance = options.distance ?? "cosine";

    if (options.createIfMissing === false) {
      await connection.openTable(options.tableName);
      return new LanceDBVectorStore<T, Metadata>(
        connection,
        options.tableName,
        distance,
        options.vectorSize,
      );
    }

    const tableNames = await connection.tableNames();
    if (!tableNames.includes(options.tableName)) {
      await connection.createTable(options.tableName, []);
    }

    return new LanceDBVectorStore<T, Metadata>(
      connection,
      options.tableName,
      distance,
      options.vectorSize,
    );
  }

  async upsertDocuments(documents: Array<EmbeddedDocument<T, Metadata>>): Promise<void> {
    const table = await this.connection.openTable(this.tableName);
    const rows = documents.flatMap((document) => lanceRows(document));
    await table.add(rows);
  }

  index(model: EmbeddingModel): LanceDBVectorIndex<T, Metadata> {
    return new LanceDBVectorIndex(model, this.connection, this.tableName);
  }
}
