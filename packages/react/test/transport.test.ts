import { describe, expect, it } from "vitest";

import {
  createChatTransport,
  createFetchTransport,
  fetchEventStream,
  readJsonlStream,
  readSseStream,
} from "../src";

describe("@anvia/react transports", () => {
  it("reads jsonl streams", async () => {
    const parsed = await collect<{ type: string }>(
      readJsonlStream(streamFrom('{"type":"one"}\n{"type":"two"}\n')),
    );

    expect(parsed).toEqual([{ type: "one" }, { type: "two" }]);
  });

  it("reads server-sent event streams", async () => {
    const parsed = await collect<{ type: string; text: string }>(
      readSseStream(streamFrom('event: text\ndata: {"type":"text_delta","text":"hello"}\n\n')),
    );

    expect(parsed).toEqual([{ type: "text_delta", text: "hello" }]);
  });

  it("fetches event streams as async iterables", async () => {
    const parsed = await collect<{ type: string }>(
      fetchEventStream("https://example.test/events", {
        fetch: async () =>
          new Response(streamFrom('{"type":"one"}\n'), {
            headers: { "content-type": "application/x-ndjson" },
          }),
      }),
    );

    expect(parsed).toEqual([{ type: "one" }]);
  });

  it("creates fetch transports", async () => {
    const transport = createFetchTransport<{ message: string }, { type: string }>({
      endpoint: "https://example.test/chat",
      fetch: async (_input, init) =>
        new Response(streamFrom(`${JSON.stringify({ type: "body", body: init?.body })}\n`)),
    });

    const parsed = await collect(transport.send({ message: "hi" }));

    expect(parsed).toEqual([{ type: "body", body: '{"message":"hi"}' }]);
  });

  it("creates chat transports as fetch transports", async () => {
    const transport = createChatTransport<{ message: string }, { type: string }>({
      endpoint: "https://example.test/chat",
      fetch: async () => new Response(streamFrom('{"type":"final","output":"done"}\n')),
    });

    await expect(collect(transport.send({ message: "hi" }))).resolves.toEqual([
      { type: "final", output: "done" },
    ]);
  });
});

async function collect<T>(events: AsyncIterable<T>): Promise<T[]> {
  const items: T[] = [];
  for await (const event of events) {
    items.push(event);
  }
  return items;
}

function streamFrom(text: string): ReadableStream<Uint8Array> {
  return new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(text));
      controller.close();
    },
  });
}
