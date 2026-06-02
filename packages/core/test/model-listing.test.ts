import { describe, expect, it } from "vitest";
import { type ModelList, ModelListingError } from "./helpers/imports";

describe("model listing", () => {
  it("represents provider model lists", () => {
    const list: ModelList = {
      data: [
        {
          id: "model-1",
          name: "Model 1",
          description: "A listed model.",
          type: "model",
          createdAt: 1_700_000_000,
          ownedBy: "provider",
          contextLength: 128_000,
        },
      ],
    };

    expect(list.data[0]).toEqual({
      id: "model-1",
      name: "Model 1",
      description: "A listed model.",
      type: "model",
      createdAt: 1_700_000_000,
      ownedBy: "provider",
      contextLength: 128_000,
    });
  });

  it("preserves provider error context", () => {
    const cause = new Error("unauthorized");
    const error = new ModelListingError("OpenAI model listing failed", {
      provider: "OpenAI",
      statusCode: 401,
      cause,
    });

    expect(error.name).toBe("ModelListingError");
    expect(error.provider).toBe("OpenAI");
    expect(error.statusCode).toBe(401);
    expect(error.cause).toBe(cause);
  });
});
