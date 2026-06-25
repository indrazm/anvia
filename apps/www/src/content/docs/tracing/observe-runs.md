---
title: Observe runs
description: Forward traces to Langfuse or OpenTelemetry without changing runtime code.
section: tracing
sidebar:
  group: Use cases
  order: 1
home:
  card: true
  order: 4
---

Production agents need traceability. Anvia emits runtime events that can be forwarded to observability backends without coupling your agent logic to one vendor.

## Enable tracing

Register a tracing adapter when the runtime is created.

```ts
import { langfuseTracing } from "@anvia/langfuse";

const runtime = createRuntime({
  tracing: langfuseTracing(),
});
```

## Inspect agent behavior

Trace data should answer the operational questions that come up in production:

- Which model handled the request?
- Which tools were called?
- Which retrieval chunks were added?
- Where did latency increase?

Use traces as a product debugging surface, not only as backend telemetry.
