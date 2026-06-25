---
title: Direct completion
description: Call a model directly before introducing agents.
section: basics
sidebar:
  group: Runtime
  order: 3
home:
  card: true
  order: 1
---

Use `createCompletion` first to prove your provider setup works before you introduce agent behavior.

## When to use this

Use direct completion for simple requests where your app already owns the control flow:

- Summarize text.
- Rewrite content.
- Classify one input.
- Test a provider model before adding agent behavior.

## Prerequisites

Install `@anvia/core`, install a provider package, and create a `model` as shown in the install step.

## Create a completion

```ts
import { createCompletion } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
});

const model = client.completionModel("gpt-5");

const result = await createCompletion(model, {
  instructions: "Answer clearly and concisely.",
  input: "Summarize Anvia in one sentence.",
});

console.log(result.text);
```

## What happens

`createCompletion` converts your `input` into a user message, sends it to the model, and returns:

- `text`: visible assistant text.
- `content`: normalized assistant content.
- `usage`: token usage.
- `response`: the full normalized completion response.

It does not run tools, save memory, or loop through multiple agent turns.

## Check yourself

Run the example and confirm `result.text` prints one assistant response. If credentials or provider setup are wrong, fix that before continuing.

## Next

Build an agent so the same model behavior can be reused across requests.

[Build your first agent](/docs/basics/build-your-first-agent)

Need lower-level token streaming before agents? Take the optional [Stream completion](/docs/basics/stream-completion) detour.
