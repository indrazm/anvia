---
title: Send a prompt
description: Run an agent request and handle the final response.
section: basics
sidebar:
  group: Runtime
  order: 7
---

Use `agent.prompt(...).send()` when you want the final result from an agent run.

## When to use this

Use `send()` for request/response flows where your app only needs the completed answer, usage, and run metadata.

## Prerequisites

Build an agent first. The examples on this page assume an `agent` variable from the previous step.

## Send a request

```ts
const response = await agent.prompt("Summarize this support ticket.").send();

console.log(response.output);
```

## What you get back

`send()` returns a prompt response:

- `output`: final visible assistant text.
- `usage`: accumulated token usage.
- `messages`: messages created during the run.
- `trace`: trace metadata when tracing is enabled.

## Configure one request

Prompt requests can override runtime behavior before execution:

```ts
const response = await agent
  .prompt("Summarize this ticket in one sentence.")
  .maxTurns(2)
  .send();
```

Use request-level configuration when one call needs tighter limits than the agent default.

## Check yourself

Run the request and confirm `response.output` contains the final assistant answer.

## Next

Stream the same kind of run when a UI or CLI should update while the agent is working.

[Stream an agent response](/docs/basics/stream-an-agent-response)
