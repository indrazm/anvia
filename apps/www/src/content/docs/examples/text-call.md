---
title: "Text call"
description: "Call a model once and print a text response."
section: examples
sidebar:
  group: "Getting started"
  order: 1
---

This recipe is the smallest useful Anvia run: create a provider client, create a completion model, wrap it in an agent, send one prompt, and print the response.

## Prerequisites

Install the core runtime and one provider package. This example uses OpenAI:

```sh
pnpm add @anvia/core @anvia/openai
```

Set provider credentials before running it:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

`OPENAI_BASEURL` is optional for OpenAI itself, but useful when testing an OpenAI-compatible endpoint.

## Code

```ts
import { AgentBuilder } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const model = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("intro-agent", model)
  .instructions("Answer in two concise sentences.")
  .build();

const response = await agent.prompt("Explain what an agent framework does.").send();

console.log(response.output);
```

## Run it

From the repository root, run the matching cookbook script:

```sh
pnpm cookbook:basics:01
```

Or from `examples/cookbook`:

```sh
pnpm basics:01
```

## Expected behavior

The script prints one assistant response. If the provider credentials are missing or invalid, fix the environment before moving to streaming or tools.

## Related docs

- [Install packages](/docs/basics/install-packages)
- [Build your first agent](/docs/basics/build-your-first-agent)
- [OpenAI provider](/docs/providers/openai)
