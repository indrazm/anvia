export const documentIdColumn = "__anvia_document_id";
export const documentColumn = "__anvia_document";
export const vectorColumn = "__anvia_vector";
export const reservedColumnPrefix = "__anvia_";

export type LanceDBDistance = "cosine" | "l2" | "dot";

export type LanceDBTableLike = {
  add(rows: Record<string, unknown>[]): Promise<unknown>;
  search(vector: number[]): {
    limit(n: number): {
      filter(expr: string | undefined): Promise<unknown[]>;
      toArray(): Promise<unknown[]>;
    };
  };
  countRows(): Promise<number>;
  delete(filter: string): Promise<unknown>;
};

export type LanceDBConnectionLike = {
  openTable(name: string): Promise<LanceDBTableLike>;
  tableNames(): Promise<string[]>;
  createTable(name: string, data: Record<string, unknown>[]): Promise<LanceDBTableLike>;
};

export type LanceDBVectorStoreConnectOptions = {
  client?: LanceDBConnectionLike | undefined;
  uri?: string | undefined;
  tableName: string;
  vectorSize: number;
  createIfMissing?: boolean | undefined;
  distance?: LanceDBDistance | undefined;
};
