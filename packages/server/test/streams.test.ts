import { describe, expect, it } from "vitest";

import { createEventStream, createJsonlStream, createSseStream } from "../src";

describe("@anvia/server streams", () => {
  it("serializes async iterables as jsonl", async () => {
    const text = await readText(createJsonlStream(events([{ type: "one" }, { type: "two" }])));

    expect(text).toBe('{"type":"one"}\n{"type":"two"}\n');
  });

  it("serializes async iterables as server-sent events", async () => {
    const text = await readText(
      createSseStream(events([{ type: "one", value: "hello\nworld" }]), {
        eventName: (event) => event.type,
      }),
    );

    expect(text).toBe('event: one\ndata: {"type":"one","value":"hello\\nworld"}\n\n');
  });

  it("creates event stream responses with default jsonl headers", async () => {
    const response = createEventStream(events([{ type: "one" }]));

    expect(response.headers.get("content-type")).toBe("application/x-ndjson; charset=utf-8");
    expect(response.headers.get("cache-control")).toBe("no-cache, no-transform");
    expect(await response.text()).toBe('{"type":"one"}\n');
  });

  it("creates event stream responses with sse headers", async () => {
    const response = createEventStream(events([{ type: "one" }]), { format: "sse" });

    expect(response.headers.get("content-type")).toBe("text/event-stream; charset=utf-8");
    expect(await response.text()).toBe('data: {"type":"one"}\n\n');
  });

  it("emits an error event when iteration fails", async () => {
    const text = await readText(
      createJsonlStream(
        (async function* () {
          yield { type: "one" };
          throw new Error("stream failed");
        })(),
      ),
    );

    expect(text).toContain('{"type":"one"}\n');
    expect(text).toContain('"type":"error"');
    expect(text).toContain('"message":"stream failed"');
  });
});

async function* events<T>(items: T[]): AsyncIterable<T> {
  for (const item of items) {
    yield item;
  }
}

async function readText(stream: ReadableStream<Uint8Array>): Promise<string> {
  return new Response(stream).text();
}
