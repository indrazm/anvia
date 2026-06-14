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
