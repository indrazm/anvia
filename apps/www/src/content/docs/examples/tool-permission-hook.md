---
title: "Tool permission hook"
description: "Gate sensitive tool execution with approval logic."
section: examples
sidebar:
  group: "Tools"
  order: 8
---

Use hooks to enforce action policy before a tool executes. A hook can run safe tools, skip restricted tools, request approval, or cancel a run.

## Prerequisites

Set provider credentials:

```sh
OPENAI_API_KEY=...
OPENAI_BASEURL=...
```

## Code

```ts
import { AgentBuilder, PromptCancelledError, createHook, createTool } from "@anvia/core";
import { OpenAIClient } from "@anvia/openai";
import { z } from "zod";

const getServiceStatus = createTool({
  name: "get_service_status",
  description: "Read the public status for a customer-facing service.",
  input: z.object({ service: z.string() }),
  output: z.object({ service: z.string(), status: z.string() }),
  execute: ({ service }) => ({ service, status: "operational" }),
});

const readPayroll = createTool({
  name: "read_payroll",
  description: "Read payroll information for an employee.",
  input: z.object({ employeeId: z.string() }),
  output: z.string(),
  execute: ({ employeeId }) => `Payroll record for ${employeeId}`,
});

const deleteAccount = createTool({
  name: "delete_account",
  description: "Delete a customer account permanently.",
  input: z.object({ accountId: z.string() }),
  output: z.string(),
  execute: ({ accountId }) => `Deleted account ${accountId}`,
});

const permissionHook = createHook({
  onToolCall({ toolName, tool }) {
    if (toolName === "read_payroll") {
      return tool.skip("Payroll data is restricted. Summarize that access was denied.");
    }
    if (toolName === "delete_account") {
      return tool.requestApproval({
        reason: "Account deletion requires explicit human approval.",
        rejectMessage: "Account deletion was not approved.",
      });
    }
    return tool.run();
  },
});

const client = new OpenAIClient({
  apiKey: process.env.OPENAI_API_KEY,
  baseUrl: process.env.OPENAI_BASEURL,
});

const agent = new AgentBuilder("admin-agent", client.completionModel("gpt-5.5"))
  .instructions("Use tools for service status and administrative requests.")
  .tools([getServiceStatus, readPayroll, deleteAccount])
  .hook(permissionHook)
  .defaultMaxTurns(3)
  .build();

try {
  const response = await agent
    .prompt("Check billing status, read payroll for E-1024, then delete account ACC-9001.")
    .send();

  console.log(response.output);
} catch (error) {
  if (error instanceof PromptCancelledError) {
    console.log("prompt cancelled:", error.reason);
  } else {
    throw error;
  }
}
```

## Run it

```sh
pnpm cookbook:tools:08
```

## Expected behavior

The safe status tool can run. Payroll is skipped with a policy message. Account deletion requests approval; without an approval handler such as Studio, the prompt is cancelled clearly.

## Related docs

- [Tool approvals](/docs/advanced/tool-approvals)
- [Production guardrails](/docs/advanced/production-guardrails)
- [Hooks and run control](/docs/advanced/hooks-and-run-control)
