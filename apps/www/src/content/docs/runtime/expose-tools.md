---
title: Expose tools
description: Register typed tools so agents can call product actions safely.
section: runtime
sidebar:
  group: Use cases
  order: 3
---

Tools let agents perform work beyond text generation. A tool should describe one safe product action with a typed input and a predictable result.

## Keep tools narrow

Prefer small tools such as `lookupCustomer`, `createTicket`, or `refundOrder` over generic tools that can do many unrelated actions.

## Validate inputs

Tool schemas are the contract between model output and application code. Reject invalid input before any side effect runs.

```ts
runtime.tool("lookupCustomer", {
  schema,
  execute: async ({ customerId }) => customers.find(customerId),
});
```
