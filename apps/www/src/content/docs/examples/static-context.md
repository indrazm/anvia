---
title: "Static context"
description: "Attach stable context to a request before introducing retrieval."
section: examples
sidebar:
  group: "Getting started"
  order: 3
---

Static context is useful for compact facts that should travel with every request to an agent: policy snippets, product rules, team terminology, or a short operating guide.

## Prerequisites

Use the same OpenAI setup as the first text-call example:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const model = client.completionModel("gpt-5.5");

const launchPolicy = [
  "DeltaKit Launch Policy",
  "Every production launch must have one launch captain.",
  "The captain owns rollback, customer notice, and go/no-go decisions.",
  "For checkout launches, the default launch captain is Mira.",
].join("\n");

const escalationNotes = [
  "Support Escalation Notes",
  "Checkout incidents with payment failure reports are high priority.",
  "The product engineer should include recent gateway error rates.",
].join("\n");

const agent = new AgentBuilder("launch-agent", model)
  .instructions("Answer from supplied context when it is relevant.")
  .context(launchPolicy, "launch_policy")
  .context(escalationNotes, "support_escalation_notes")
  .build();

const response = await agent
  .prompt("Who owns the checkout launch checklist, and what should engineering include?")
  .send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:basics:03
```

## Expected behavior

The response should name Mira as the default checkout launch captain and mention gateway error rates. Use retrieval instead of static context when the source material is large, frequently changing, or permission-scoped.

## Related docs

- [Add context](/docs/basics/add-context)
- [Instructions and context](/docs/advanced/instructions-and-context)
- [Dynamic context](/docs/advanced/dynamic-context)
