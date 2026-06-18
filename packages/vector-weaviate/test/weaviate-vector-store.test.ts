import { type Embedding, type EmbeddingModel, embedDocuments } from "@anvia/core/embeddings";
import { vectorFilter } from "@anvia/core/vector-store";
import { describe, expect, it } from "vitest";
import { filterToWeaviateWhere, WeaviateVectorStore } from "../src/index";
import type { WeaviateClientLike } from "../src/types";

class MockEmbeddingModel implements EmbeddingModel {
  async embedTexts(texts: string[]): Promise<Embedding[]> {
    return texts.map((document) => ({
      document,
      vector: document.toLowerCase().includes("cat") ? [1, 0] : [0, 1],
    }));
  }
}

class MockWeaviateClient implements WeaviateClientLike {
  readonly createdCollections: Record<string, unknown>[] = [];
  readonly batchedObjects: Record<string, unknown>[] = [];
  readonly queries: unknown[] = [];
  private existingCollections = new Set<string>();

  collections = {
    create: async (config: Record<string, unknown>) => {
      this.createdCollections.push(config);
      this.existingCollections.add(config.name as string);
      return {};
    },
    get: (_name: string) => ({
      query: {
        nearVector: async (params: Record<string, unknown>) => {
          this.queries.push(params);
          return [
            {
              __anvia_document_id: "doc1",
              __anvia_document: JSON.stringify({ title: "Cat guide" }),
              kind: "animal",
              _additional: { certainty: 0.9 },
            },
            {
              __anvia_document_id: "doc1",
              __anvia_document: JSON.stringify({ title: "Cat guide" }),
              kind: "animal",
              _additional: { certainty: 0.8 },
            },
            {
              __anvia_document_id: "doc2",
              __anvia_document: "plain dog note",
              _additional: { certainty: 0.4 },
            },
          ];
        },
      },
    }),
    delete: async (_name: string) => ({}),
    exists: async (name: string) => this.existingCollections.has(name),
  };

  batch = {
    objectsBatcher: () => {
      const objs: Record<string, unknown>[] = [];
      const batcher = {
        withObject: (obj: Record<string, unknown>) => {
          objs.push(obj);
          return batcher;
        },
        do: async () => {
          this.batchedObjects.push(...objs);
          return {};
        },
      };
      return batcher;
    },
  };

  addExisting(name: string) {
    this.existingCollections.add(name);
  }
}

describe("WeaviateVectorStore", () => {
  it("creates a missing collection with vector size and default cosine distance", async () => {
    const client = new MockWeaviateClient();

    await WeaviateVectorStore.connect({
      client,
      className: "Docs",
      vectorSize: 2,
    });

    expect(client.createdCollections[0]).toEqual({
      name: "Docs",
      vectorizers: null,
      vectorIndexConfig: { distance: "cosine" },
      properties: [
        { name: "__anvia_document_id", dataType: "text" },
        { name: "__anvia_document", dataType: "text" },
      ],
    });
  });

  it("respects createIfMissing false and throws if missing", async () => {
    const client = new MockWeaviateClient();

    await expect(
      WeaviateVectorStore.connect({
        client,
        className: "Docs",
        vectorSize: 2,
        createIfMissing: false,
      }),
    ).rejects.toThrow("Collection Docs does not exist");
  });

  it("respects createIfMissing false and succeeds if exists", async () => {
    const client = new MockWeaviateClient();
    client.addExisting("Docs");

    await WeaviateVectorStore.connect({
      client,
      className: "Docs",
      vectorSize: 2,
      createIfMissing: false,
    });

    expect(client.createdCollections).toEqual([]);
  });

  it("upserts precomputed embeddings and queries with Anvia embeddings", async () => {
    const client = new MockWeaviateClient();
    const model = new MockEmbeddingModel();
    const store = await WeaviateVectorStore.connect<{ title: string }>({
      client,
      className: "Docs",
      vectorSize: 2,
    });
    const embedded = await embedDocuments(model, [{ id: "doc1", title: "Cat guide" }], {
      id: (doc: { id: string; title: string }) => doc.id,
      content: (doc: { id: string; title: string }) => doc.title,
      metadata: () => ({ kind: "animal" }),
    });

    await store.upsertDocuments(embedded);
    expect(client.batchedObjects[0]).toMatchObject({
      class: "Docs",
      vector: [1, 0],
      properties: {
        __anvia_document_id: "doc1",
        __anvia_document: JSON.stringify({ id: "doc1", title: "Cat guide" }),
        kind: "animal",
      },
    });

    const results = await store.index(model).search({
      query: "cat",
      topK: 2,
      threshold: 0.5,
      filter: vectorFilter.eq("kind", "animal"),
    });

    expect(results).toEqual([
      {
        id: "doc1",
        score: 0.9,
        document: { title: "Cat guide" },
        metadata: { kind: "animal" },
      },
    ]);
  });

  it("rejects documents with no embeddings", async () => {
    const client = new MockWeaviateClient();
    const store = await WeaviateVectorStore.connect<string>({
      client,
      className: "Docs",
      vectorSize: 2,
    });

    await expect(
      store.upsertDocuments([{ id: "doc1", document: "empty", embeddings: [] }]),
    ).rejects.toThrow("Document doc1 has no embeddings");
  });

  it("rejects reserved metadata keys", async () => {
    const client = new MockWeaviateClient();
    const store = await WeaviateVectorStore.connect<string>({
      client,
      className: "Docs",
      vectorSize: 2,
    });

    await expect(
      store.upsertDocuments([
        {
          id: "doc1",
          document: "reserved",
          metadata: { __anvia_document_id: "bad" },
          embeddings: [{ document: "reserved", vector: [1, 0] }],
        },
      ]),
    ).rejects.toThrow("Metadata key __anvia_document_id is reserved");
  });
});

describe("filterToWeaviateWhere", () => {
  it("translates eq filter", () => {
    expect(filterToWeaviateWhere(vectorFilter.eq("kind", "animal"))).toEqual({
      operator: "Equal",
      path: ["kind"],
      valueString: "animal",
      valueInt: undefined,
      valueBoolean: undefined,
      valueNumber: undefined,
    });
  });

  it("translates compound filters", () => {
    expect(
      filterToWeaviateWhere(
        vectorFilter.and(vectorFilter.gt("rank", 2), vectorFilter.lt("rank", 5)),
      ),
    ).toEqual({
      operator: "And",
      operands: [
        { operator: "GreaterThan", path: ["rank"], valueNumber: 2, valueString: undefined },
        { operator: "LessThan", path: ["rank"], valueNumber: 5, valueString: undefined },
      ],
    });
  });
});
