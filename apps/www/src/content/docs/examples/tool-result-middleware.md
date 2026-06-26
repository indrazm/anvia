---
title: "Tool result middleware"
description: "Transform or redact tool outputs before the model sees them."
section: examples
sidebar:
  group: "Tools"
  order: 10
---

Tool middleware is useful when a tool returns data that should not be passed directly back into the model: very large payloads, sensitive fields, or data better represented as a file reference.

## Prerequisites

Set provider credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { AgentBuilder, createTool } from "@anvia/core";
import { createToolMiddleware } from "@anvia/core/tool";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const longReport = createTool({
  name: "long_report",
  description: "Return a long internal report for a topic.",
  input: z.object({ topic: z.string() }),
  output: z.string(),
  execute: ({ topic }) =>
    [
      `Report topic: ${topic}`,
      "Revenue increased in enterprise accounts.",
      "Support volume is concentrated around onboarding.",
      "Recommended action: prioritize setup automation.",
    ]
      .join("\n")
      .repeat(20),
});

const outputGate = createToolMiddleware({
  async onResult({ toolName, result, internalCallId }) {
    if (result.length <= 1_000) {
      return undefined;
    }

    const path = join(tmpdir(), `${toolName}-${internalCallId}.txt`);
    await writeFile(path, result, "utf8");

    return JSON.stringify({
      type: "file_reference",
      reason: "tool_output_too_large",
      chars: result.length,
      path,
    });
  },
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const agent = new AgentBuilder("report-agent", client.completionModel("gpt-5.5"))
  .instructions("Use tools when useful. Summarize tool results briefly.")
  .tool(longReport)
  .toolMiddleware(outputGate)
  .defaultMaxTurns(2)
  .build();

const response = await agent
  .prompt("Create a short update from the long report about onboarding.")
  .send();

console.log(response.output);
```

## Run it

```sh
pnpm cookbook:tools:10
```

## Expected behavior

The tool creates a long report, the middleware writes it to a temporary file, and the model receives a compact file-reference JSON value instead of the full report text.

## Related docs

- [Tool middleware](/docs/advanced/tool-middleware)
- [Tool results](/docs/advanced/tool-results)
- [Production guardrails](/docs/advanced/production-guardrails)
