# @anvia/server

Server-side stream helpers for Anvia applications.

```ts
import { createEventStream } from "@anvia/server";

return createEventStream(agent.prompt("Draft a reply.").stream(), {
  format: "jsonl",
});
```

## Exports

- `createEventStream(events, options)` returns a streaming `Response`.
- `createJsonlStream(events, options)` returns a JSONL `ReadableStream<Uint8Array>`.
- `createSseStream(events, options)` returns a Server-Sent Event `ReadableStream<Uint8Array>`.

JSONL is the default transport format. Use `format: "sse"` when you need `text/event-stream` compatibility.
