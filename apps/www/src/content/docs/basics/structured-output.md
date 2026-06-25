---
title: Structured output
description: Return schema-validated data from direct model calls.
section: basics
sidebar:
  group: Runtime
  order: 5
---

Use `createParsedCompletion` when your app needs data, not prose.

## When to use this

Structured output is useful for extraction and classification:

- Pull fields from a support ticket.
- Classify a message by priority.
- Convert free text into an object your app can store.

## Prerequisites

Install Zod in addition to the core and provider packages:

```bash
pnpm add zod
```

## Define a schema

```ts
import { createParsedCompletion } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const ticketSchema = z.object({
  customer: z.string(),
  priority: z.enum(["low", "medium", "high"]),
  summary: z.string(),
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const model = client.completionModel("gpt-5");

const ticket = await createParsedCompletion(model, {
  schema: ticketSchema,
  input: "Acme Co. reports checkout failures. Priority is high.",
});

console.log(ticket.data);
```

## What happens

`createParsedCompletion` sends the schema to the provider as an output schema, reads the model text as JSON, and parses it with Zod.

Use `ticket.data` for validated application data. If the response is not valid JSON or does not match the schema, the call throws.

## Check yourself

Run the example and confirm `ticket.data` is a typed object with `customer`, `priority`, and `summary`.

## Next

Return to the main path and wrap model behavior in an agent.

[Build your first agent](/docs/basics/build-your-first-agent)
