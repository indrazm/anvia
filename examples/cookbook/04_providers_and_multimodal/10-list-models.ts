import type { ModelListingClient } from "@anvia/core/model-listing";
import { OpenAIClient } from "@anvia/openai";

const client = createModelListingClient();
const models = await client.listModels();

console.table(
  models.data.slice(0, 20).map((model) => ({
    id: model.id,
    name: model.name ?? "",
    contextLength: model.contextLength ?? "",
    owner: model.ownedBy ?? "",
  })),
);

function createModelListingClient(): ModelListingClient {
  if (process.env.OPENROUTER_API_KEY !== undefined) {
    return new OpenAIClient({
      baseUrl: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });
  }

  if (process.env.OPENAI_API_KEY !== undefined) {
    return new OpenAIClient({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  return new OpenAIClient({
    client: {
      models: {
        list: async () => ({
          data: [
            {
              id: "demo-text-model",
              object: "model",
              owned_by: "demo-provider",
              context_length: 128_000,
            },
            {
              id: "demo-embedding-model",
              object: "model",
              owned_by: "demo-provider",
            },
          ],
        }),
      },
    } as never,
  });
}
