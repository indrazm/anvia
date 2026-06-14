import { describe, expect, it, vi } from "vitest";
import { createSandboxTools } from "../src/tools";
import type { SandboxSession } from "../src/types";

describe("createSandboxTools", () => {
  it("creates the default sandbox tool bundle", () => {
    const tools = createSandboxTools(createSession());

    expect(tools.map((tool) => tool.name)).toEqual([
      "exec_command",
      "read_file",
      "write_file",
      "list_files",
    ]);
  });

  it("allows selecting a subset of tools", () => {
    const tools = createSandboxTools(createSession(), { include: ["read_file"] });

    expect(tools.map((tool) => tool.name)).toEqual(["read_file"]);
  });

  it("exec_command calls the sandbox session with structured args", async () => {
    const session = createSession();
    const [tool] = createSandboxTools(session, { include: ["exec_command"], execTimeoutMs: 1234 });
    if (tool === undefined) {
      throw new Error("Expected exec_command tool.");
    }

    const output = await tool.call({
      command: "node",
      args: ["index.js"],
      cwd: "src",
      input: "hello",
    });

    expect(session.exec).toHaveBeenCalledWith({
      command: "node",
      args: ["index.js"],
      cwd: "src",
      timeoutMs: 1234,
      input: "hello",
    });
    expect(output).toContain("exit_code: 0");
    expect(output).toContain("stdout:");
  });

  it("read_file, write_file, and list_files delegate to the session", async () => {
    const session = createSession();
    const tools = Object.fromEntries(
      createSandboxTools(session).map((tool) => [tool.name, tool] as const),
    );

    await tools.write_file?.call({ path: "a.txt", content: "content" });
    const read = await tools.read_file?.call({ path: "a.txt" });
    const list = await tools.list_files?.call({ path: "." });

    expect(session.writeTextFile).toHaveBeenCalledWith("a.txt", "content");
    expect(session.readTextFile).toHaveBeenCalledWith("a.txt");
    expect(session.listFiles).toHaveBeenCalledWith(".");
    expect(read).toBe("file content");
    expect(list).toContain("file 12b\ta.txt");
  });
});

function createSession(): SandboxSession {
  return {
    id: "session_1",
    provider: "test",
    workdir: "/workspace",
    exec: vi.fn(async () => ({
      stdout: "ok\n",
      stderr: "",
      exitCode: 0,
      durationMs: 10,
      timedOut: false,
      aborted: false,
      stdoutTruncated: false,
      stderrTruncated: false,
    })),
    readFile: vi.fn(async () => new TextEncoder().encode("file content")),
    readTextFile: vi.fn(async () => "file content"),
    writeFile: vi.fn(async () => undefined),
    writeTextFile: vi.fn(async () => undefined),
    listFiles: vi.fn(async () => [{ path: "a.txt", type: "file" as const, size: 12 }]),
    destroy: vi.fn(async () => undefined),
  };
}
