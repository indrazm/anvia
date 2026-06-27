---
title: Agent App Flow
description: A complete request flow for an Anvia agent inside product code.
section: examples
sidebar:
  group: Foundation Patterns
  order: 1
---

An agent app flow is the application-owned shell around one Anvia run. It starts at a route, action, queue job, or worker; resolves product state; composes the agent with scoped tools and context; runs the model/tool loop; persists what happened; and returns a product response.

## Scenario

A signed-in customer asks, "Where is order A-100 and can I change the address?" The app must authenticate the user, open the conversation session, expose only tools scoped to that user and tenant, retrieve support policy, run the agent, persist the run record, and return only the answer the UI needs.

## Flow

| Step | Owner | Example responsibility |
| --- | --- | --- |
| Transport | app | Parse HTTP, server action, queue, or UI input. |
| Runner | app | Validate input, resolve auth, create request scope, choose the memory-backed session. |
| Agent runtime | Anvia + app | Run instructions, model, tools, context, memory, observers, and approvals. |
| Tools | app | Enforce permissions and call product services. |
| Persistence | Anvia + app | Memory saves conversation messages; app stores events, audit records, run records, and product state. |
| Response | app | Return a UI or API shape, not raw provider internals. |

## Route

```ts
export async function POST(request: Request) {
  const body = await request.json();

  const result = await runSupportTurn({
    conversationId: body.conversationId,
    message: body.message,
    auth,
    memoryStore,
    model,
    policyIndex,
    services: { orders, tickets },
    runRecords,
    traces,
  });

  return Response.json(result);
}
```

The route stays thin. It parses transport input, passes app services to the runner, and returns the product response shape.

## Runner

```ts
export async function runSupportTurn(input: SupportTurnInput) {
  if (input.message.trim().length === 0) {
    return { ok: false as const, error: "message_required" };
  }

  const user = await input.auth.requireUser();

  const agent = createSupportAgent({
    model: input.model,
    user,
    memoryStore: input.memoryStore,
    policyIndex: input.policyIndex,
    services: input.services,
  });

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
      },
    })
    .send();

  await input.runRecords.record({
    conversationId: input.conversationId,
    userId: user.id,
    traceId: response.trace?.traceId,
    output: response.output,
    usage: response.usage,
  });

  if (response.trace?.traceId !== undefined) {
    await input.traces.link({
      conversationId: input.conversationId,
      traceId: response.trace.traceId,
    });
  }

  return {
    ok: true as const,
    answer: response.output,
    traceId: response.trace?.traceId,
  };
}
```

The runner does not load history and does not build a `Message[]` transcript. Conversation history belongs to the configured memory store, and the current turn enters the runtime as a string prompt through the session.

## Agent Factory

```ts
import { AgentBuilder } from "@anvia/core";
import { vectorFilter } from "@anvia/core/vector-store";

const SUPPORT_INSTRUCTIONS = [
  "Answer with the user's current account state and retrieved policy evidence.",
  "Use tools for customer-specific data.",
  "Do not claim an action was completed unless a tool result says it was completed.",
].join("\n");

function createSupportAgent(scope: SupportAgentScope) {
  const publicCheckoutPolicy = vectorFilter.and(
    vectorFilter.and(
      vectorFilter.eq("tenantId", scope.user.tenantId),
      vectorFilter.eq("productArea", "checkout"),
    ),
    vectorFilter.eq("visibility", "public"),
  );

  return new AgentBuilder("support", scope.model)
    .instructions(SUPPORT_INSTRUCTIONS)
    .memory(scope.memoryStore, { savePolicy: "turn" })
    .dynamicContext(scope.policyIndex, {
      topK: 4,
      threshold: 0.72,
      filter: publicCheckoutPolicy,
      format: (result) => ({
        id: result.id,
        text: [
          `Title: ${result.metadata?.title ?? "Untitled"}`,
          `Updated: ${result.metadata?.updatedAt ?? "unknown"}`,
          String(result.document),
        ].join("\n"),
      }),
    })
    .tools(createSupportTools(scope))
    .defaultMaxTurns(4)
    .build();
}
```

The exact framework can change. The important boundary is stable: transport calls the runner, the runner creates request scope, tools enforce product rules, and the application persists the useful result.

## Swap Points

| Part | What can change |
| --- | --- |
| transport | HTTP route, server action, queue worker, CLI command, scheduled job |
| model | OpenAI, Anthropic, Gemini, Mistral, or compatible provider |
| retrieval | dynamic context, explicit retrieval tool, or both |
| storage | application database, memory store, event store, trace backend |
| response | streamed UI events, JSON API output, queued job result |

## Production Checks

- The model never receives a user id, tenant id, or permission scope from model-controlled arguments.
- Tools are created from authenticated request scope.
- Conversation persistence is separate from audit and event logs.
- Trace metadata is enough to debug the run later.
- Expected denials return safe product messages instead of leaking service errors.

## Next Patterns

- [Agent Runtime Composition](/docs/examples/agent-runtime-composition)
- [Permissioned Tools](/docs/examples/permissioned-tools)
- [Runtime State and Persistence](/docs/examples/runtime-state-persistence)
