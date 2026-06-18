export const documentIdPropertyKey = "__anvia_document_id";
export const documentPropertyKey = "__anvia_document";
export const reservedPropertyPrefix = "__anvia_";

export type WeaviateDistance = "cosine" | "dot" | "l2" | "manhattan" | "hamming";

export type WeaviateCollectionLike = {
  query: {
    nearVector(params: NearVectorParams): Promise<Array<Record<string, unknown>>>;
  };
};

export type WeaviateCollectionsLike = {
  create(config: Record<string, unknown>): Promise<unknown>;
  get(name: string): WeaviateCollectionLike;
  delete(name: string): Promise<unknown>;
  exists(name: string): Promise<boolean>;
};

export type WeaviateBatcherLike = {
  withObject(obj: Record<string, unknown>): WeaviateBatcherLike;
  do(): Promise<unknown>;
};

export type WeaviateBatchLike = {
  objectsBatcher(): WeaviateBatcherLike;
};

export type NearVectorParams = {
  vector: number[];
  limit?: number | undefined;
  filters?: unknown | undefined;
  returnMetadata?: string[] | undefined;
  returnProperties?: string[] | undefined;
};

export type WeaviateClientLike = {
  collections: WeaviateCollectionsLike;
  batch: WeaviateBatchLike;
};

export type WeaviateVectorStoreConnectOptions = {
  client?: WeaviateClientLike | undefined;
  className: string;
  vectorSize: number;
  createIfMissing?: boolean | undefined;
  distance?: WeaviateDistance | undefined;
};
