export type Embedding = {
  document: string;
  vector: number[];
};

export interface EmbeddingModel {
  readonly dimensions?: number | undefined;
  readonly maxBatchSize?: number | undefined;
  embedTexts(texts: string[]): Promise<Embedding[]>;
}

export type EmbeddedDocument<T, Metadata extends VectorMetadata = VectorMetadata> = {
  id: string;
  document: T;
  metadata?: Metadata | undefined;
  embeddings: Embedding[];
};

export type VectorMetadataValue = string | number | boolean | null;
export type VectorMetadata = Record<string, VectorMetadataValue>;

export type EmbedDocumentsOptions<T, Metadata extends VectorMetadata = VectorMetadata> = {
  id?: ((document: T, index: number) => string) | undefined;
  content(document: T, index: number): string | string[];
  metadata?: ((document: T, index: number) => Metadata | undefined) | undefined;
  concurrency?: number | undefined;
};
