---
title: "Docker sandbox"
description: "Run command or file tools in an isolated sandbox."
section: examples
sidebar:
  group: "Tools"
  order: 11
---

Use sandbox tools when an agent or workflow needs command execution or file operations without touching the host workspace directly.

## Prerequisites

Install the sandbox package and make sure Docker is running:

```sh
pnpm add @anvia/sandbox
docker --version
```

This recipe does not require a model provider because it calls the sandbox tool set directly.

## Code

```ts
import { ToolSet } from "@anvia/core/tool";
import { createSandboxTools, DockerSandbox } from "@anvia/sandbox";

const sandbox = new DockerSandbox({
  image: "node:22-bookworm",
  pull: "missing",
  limits: {
    timeoutMs: 30_000,
    maxOutputBytes: 64_000,
  },
});

const session = await sandbox.createSession({
  manifest: {
    files: {
      "index.js": [
        "const input = Number(process.argv[2]);",
        "console.log(JSON.stringify({ input, doubled: input * 2 }));",
      ].join("\n"),
    },
  },
});

try {
  const tools = ToolSet.fromTools(createSandboxTools(session));

  console.log(
    await tools.call(
      "exec_command",
      JSON.stringify({
        command: "node",
        args: ["index.js", "21"],
      }),
    ),
  );

  await tools.call(
    "write_file",
    JSON.stringify({
      path: "notes/result.txt",
      content: "The sandbox wrote this file.",
    }),
  );

  console.log(await tools.call("read_file", JSON.stringify({ path: "notes/result.txt" })));
  console.log(await tools.call("list_files", JSON.stringify({ path: "notes" })));
} finally {
  await session.destroy();
}
```

## Run it

```sh
pnpm cookbook:tools:11
```

## Expected behavior

The sandbox runs `node index.js 21`, writes a file inside the isolated session, reads it back, lists the directory, and then destroys the session.

## Related docs

- [Sandbox tools](/docs/basics/sandbox-tools)
- [Tool contracts](/docs/advanced/tool-contracts)
- [Production guardrails](/docs/advanced/production-guardrails)
