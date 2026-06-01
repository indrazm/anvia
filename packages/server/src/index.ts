export type EventStreamFormat = "jsonl" | "sse";

export type EventStreamErrorEvent = {
  type: "error";
  error: unknown;
};

export type CreateEventStreamOptions<TEvent> = {
  format?: EventStreamFormat;
  headers?: HeadersInit;
  status?: number;
  statusText?: string;
  jsonl?: JsonlStreamOptions<TEvent>;
  sse?: SseStreamOptions<TEvent>;
};

export type JsonlStreamOptions<TEvent> = {
  serialize?: (event: TEvent | EventStreamErrorEvent) => string;
};

export type SseStreamOptions<TEvent> = {
  eventName?: string | ((event: TEvent | EventStreamErrorEvent) => string | undefined);
  serialize?: (event: TEvent | EventStreamErrorEvent) => string;
  retry?: number;
};

export function createEventStream<TEvent>(
  events: AsyncIterable<TEvent>,
  options: CreateEventStreamOptions<TEvent> = {},
): Response {
  const format = options.format ?? "jsonl";
  const headers = new Headers(options.headers);

  if (!headers.has("cache-control")) {
    headers.set("cache-control", "no-cache, no-transform");
  }
  if (!headers.has("connection")) {
    headers.set("connection", "keep-alive");
  }
  if (!headers.has("x-accel-buffering")) {
    headers.set("x-accel-buffering", "no");
  }

  const body =
    format === "sse"
      ? createSseStream(events, options.sse)
      : createJsonlStream(events, options.jsonl);

  if (!headers.has("content-type")) {
    headers.set(
      "content-type",
      format === "sse" ? "text/event-stream; charset=utf-8" : "application/x-ndjson; charset=utf-8",
    );
  }

  const responseInit: ResponseInit = { headers };
  if (options.status !== undefined) {
    responseInit.status = options.status;
  }
  if (options.statusText !== undefined) {
    responseInit.statusText = options.statusText;
  }

  return new Response(body, responseInit);
}

export function createJsonlStream<TEvent>(
  events: AsyncIterable<TEvent>,
  options: JsonlStreamOptions<TEvent> = {},
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const iterator = events[Symbol.asyncIterator]();
  const serialize = options.serialize ?? serializeJson;

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        const next = await iterator.next();
        if (next.done === true) {
          controller.close();
          return;
        }

        controller.enqueue(encoder.encode(`${serialize(next.value)}\n`));
      } catch (error) {
        controller.enqueue(encoder.encode(`${serialize(errorEvent(error))}\n`));
        controller.close();
      }
    },
    async cancel() {
      await iterator.return?.();
    },
  });
}

export function createSseStream<TEvent>(
  events: AsyncIterable<TEvent>,
  options: SseStreamOptions<TEvent> = {},
): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const iterator = events[Symbol.asyncIterator]();
  const serialize = options.serialize ?? serializeJson;

  return new ReadableStream<Uint8Array>({
    start(controller) {
      if (options.retry !== undefined) {
        controller.enqueue(encoder.encode(`retry: ${options.retry}\n\n`));
      }
    },
    async pull(controller) {
      try {
        const next = await iterator.next();
        if (next.done === true) {
          controller.close();
          return;
        }

        controller.enqueue(
          encoder.encode(formatSseEvent(next.value, serialize, options.eventName)),
        );
      } catch (error) {
        const event = errorEvent(error);
        controller.enqueue(encoder.encode(formatSseEvent(event, serialize, options.eventName)));
        controller.close();
      }
    },
    async cancel() {
      await iterator.return?.();
    },
  });
}

function formatSseEvent<TEvent>(
  event: TEvent | EventStreamErrorEvent,
  serialize: (event: TEvent | EventStreamErrorEvent) => string,
  eventName: SseStreamOptions<TEvent>["eventName"],
): string {
  const name = typeof eventName === "function" ? eventName(event) : eventName;
  const lines: string[] = [];

  if (name !== undefined && name.length > 0) {
    lines.push(`event: ${name}`);
  }

  for (const line of serialize(event).split(/\r?\n/)) {
    lines.push(`data: ${line}`);
  }

  lines.push("", "");
  return lines.join("\n");
}

function serializeJson(value: unknown): string {
  return JSON.stringify(value);
}

function errorEvent(error: unknown): EventStreamErrorEvent {
  return {
    type: "error",
    error: serializeError(error),
  };
}

function serializeError(error: unknown): unknown {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return error;
}
