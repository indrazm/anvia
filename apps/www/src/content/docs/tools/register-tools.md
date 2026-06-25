---
title: Register tools
description: Add typed tool definitions to the runtime.
section: tools
sidebar:
  group: Tools
  order: 1
---

Register tools on the runtime before handling user requests. Each tool should have a clear name, input schema, and execution function.

## Tool naming

Use action-oriented names. Good tool names make model behavior easier to inspect in traces.

## Execution

Tool execution should be idempotent when possible and must validate permission before mutating product data.
