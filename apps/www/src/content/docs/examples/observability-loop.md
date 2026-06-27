---
title: Observability Loop
description: A pattern for connecting traces, runtime events, logs, evidence, and product records.
section: examples
sidebar:
  group: Quality and Operations
  order: 2
---

Observability should connect one product request across traces, runtime events, logs, retrieved evidence, tool calls, and final answers. Each store has a different job.

Keep observability separate from eval mechanics. Observability answers "what happened in this run?" Evals answer "does this behavior still pass repeatable checks?"

## Scenario

A support answer is wrong. The team needs to see the user, tenant, selected documents, tool calls, final answer, trace id, run events, prompt version, and release.

## Flow

| Signal | Store |
| --- | --- |
| trace metadata | observer backend |
| stream events | event store |
| selected evidence | evidence log |
| permission decisions | app log/audit log |
| final answer | conversation or job record |

## Example

```ts
const response = await agent
  .session(input.conversationId, {
    userId: user.id,
    metadata: { tenantId: user.tenantId },
  })
  .prompt(input.message)
  .withTrace({
    name: "support-chat",
    userId: user.id,
    metadata: {
      tenantId: user.tenantId,
      conversationId: input.conversationId,
      channel: input.channel,
      release: input.release,
      promptVersion: input.promptVersion,
    },
  })
  .send();

await input.runRecords.record({
  conversationId: input.conversationId,
  traceId: response.trace?.traceId,
  output: response.output,
  usage: response.usage,
  release: input.release,
  promptVersion: input.promptVersion,
});
```

Log app-owned decisions separately:

```ts
logger.info({
  event: "support_tool_allowed",
  userId: user.id,
  tenantId: user.tenantId,
  tool: "lookup_order",
  orderId: input.orderId,
  traceId: response.trace?.traceId,
});
```

Record selected evidence when retrieval is part of the answer:

```ts
await evidenceLog.record({
  conversationId: input.conversationId,
  traceId: response.trace?.traceId,
  sourceIds: selectedEvidence.map((item) => item.id),
  scores: selectedEvidence.map((item) => item.score),
});
```

When evals replay a production case, report them through the eval system and keep the same product ids:

```ts
const evalReporter = {
  async report(args) {
    await evalResults.insert({
      suite: args.suiteName,
      caseId: args.case.id,
      metric: args.metric.name,
      status: args.outcome.outcome,
      conversationId: args.case.metadata?.conversationId,
      release: args.case.metadata?.release,
    });
  },
};
```

This keeps observability storage focused on runtime telemetry while eval storage tracks pass, fail, invalid, score, and feedback history.

## Failure Modes

- Trace metadata omits tenant, conversation id, or release.
- Tool permission decisions are not logged.
- Eval failures cannot be linked back to prompts or traces.
- Runtime events are stored without product ids.
- Full documents or private tool results are stored in trace metadata.

## Next Patterns

- [Streaming Events](/docs/examples/streaming-events)
- [Eval Loop](/docs/examples/eval-loop)
- [Production Readiness](/docs/examples/production-readiness)
