# @anvia/core

Core runtime primitives for Anvia agents, tools, structured extraction, pipelines, streaming, RAG, MCP, skills, and observability.

This package is provider-neutral. Pair it with a provider adapter such as `@anvia/openai`, `@anvia/anthropic`, or `@anvia/gemini` to create runnable models.

## Installation

```sh
pnpm add @anvia/core
```

In this monorepo, the package is available through the workspace:

```sh
pnpm --filter @anvia/core build
```

## Usage

```ts
import { z } from "zod";
import { AgentBuilder, ExtractorBuilder, PipelineBuilder, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey,
});

const model = client.completionModel("gpt-5");

const lookupOrder = createTool({
  name: "lookup_order",
  description: "Look up an order by id.",
  input: z.object({ orderId: z.string() }),
  execute: async ({ orderId }) => ({ orderId, status: "processing" }),
});

const agent = new AgentBuilder("support", model)
  .instructions("Help customers with order questions.")
  .tool(lookupOrder)
  .defaultMaxTurns(4)
  .build();

const response = await agent.prompt("What is happening with order A123?").send();

console.log(response.output);
```

## Prompts and Memory

Use a plain prompt for stateless calls:

```ts
await agent.prompt("Summarize this ticket.").send();
```

Use a message array when you already own the transcript. The last message is the active prompt and earlier messages are request history:

```ts
import { Message } from "@anvia/core";

await agent
  .prompt([
    Message.user("My project is named Anvia."),
    Message.assistant("Noted."),
    Message.user("What is my project named?"),
  ])
  .send();
```

Configure durable conversation memory on the agent, then run through a session:

```ts
import {
  AgentBuilder,
  type MemoryAppendInput,
  type MemoryContext,
  type MemoryStore,
  type Message,
} from "@anvia/core";

class AppMemoryStore implements MemoryStore {
  private readonly sessions = new Map<string, Message[]>();

  async load(context: MemoryContext): Promise<Message[]> {
    return [...(this.sessions.get(context.sessionId) ?? [])];
  }

  async append(input: MemoryAppendInput): Promise<void> {
    const current = this.sessions.get(input.context.sessionId) ?? [];
    this.sessions.set(input.context.sessionId, [...current, ...input.messages]);
  }

  async clear(context: MemoryContext): Promise<void> {
    this.sessions.delete(context.sessionId);
  }
}

const memory = new AppMemoryStore();
const agent = new AgentBuilder("support", model).memory(memory).build();

await agent.session("thread_123", { userId: "user_456" }).prompt("Remember my plan.").send();
await agent.session("thread_123", { userId: "user_456" }).prompt("What is my plan?").send();
```

Memory defaults to `savePolicy: "message"`, which saves the user prompt, each completed assistant message, and each completed tool result as soon as they are ready. You can choose `"turn"` or `"run"` at configuration time:

```ts
new AgentBuilder("support", model).memory(memory, { savePolicy: "turn" });
```

## Structured Extraction

```ts
const ticketSchema = z.object({
  customer: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  summary: z.string(),
});

const extractor = new ExtractorBuilder(model, ticketSchema).retries(1).build();

const ticket = await extractor.extract(
  "Acme Co. reports checkout failures. Priority is high.",
);
```

## Pipelines

```ts
const pipeline = new PipelineBuilder<string>()
  .step((input) => `Extract this support ticket:\n\n${input}`)
  .prompt(agent)
  .extract(extractor)
  .build();

const result = await pipeline.run("Customer cannot complete checkout.");
```

## Public Areas

- `agent`: agent runtime and `AgentBuilder`
- `tool`: typed tool creation and tool sets
- `completion`: provider-neutral completion request and response types
- `memory`: durable session memory interfaces and in-memory store
- `extractor`: schema-first structured extraction
- `pipeline`: typed sequential and parallel workflows
- `embeddings`: embedding helpers and document embedding utilities
- `vector-store`: in-memory vector search and vector search tools
- `streaming`: normalized stream helpers
- `mcp`: MCP server connection helpers
- `skills`: local skill loading
- `observability`: observer interfaces for runs, generations, and tool calls
- `evals`: evaluation helpers and reporters
- `loaders`: document loading utilities
- `audio-generation`, `image-generation`, `transcription`: provider-neutral media interfaces

## Development

```sh
pnpm --filter @anvia/core typecheck
pnpm --filter @anvia/core test
pnpm --filter @anvia/core build
```
