---
title: OpenAI provider
description: Connect OpenAI models to the Anvia runtime.
section: providers
sidebar:
  group: Model providers
  order: 1
---

The OpenAI provider adapts OpenAI model APIs to Anvia runtime requests.

## Install

```bash
pnpm add @anvia/openai
```

## Use the adapter

```ts
import { openai } from "@anvia/openai";

const runtime = createRuntime({
  model: openai("gpt-4.1-mini"),
});
```
