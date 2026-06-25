---
title: Gemini provider
description: Connect Gemini models to the Anvia runtime.
section: providers
sidebar:
  group: Model providers
  order: 2
---

The Gemini provider lets you use Google models behind the same runtime interface.

## Install

```bash
pnpm add @anvia/gemini
```

## Use the adapter

```ts
import { gemini } from "@anvia/gemini";

const runtime = createRuntime({
  model: gemini("gemini-2.5-flash"),
});
```
