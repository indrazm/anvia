import { describe, expect, it } from "vitest";
import { DockerSandbox } from "../src/docker-sandbox";

const runDockerTests = process.env.ANVIA_SANDBOX_DOCKER_TESTS === "1";

describe.skipIf(!runDockerTests)("DockerSandbox integration", () => {
  it("creates an ephemeral workspace, runs commands, and cleans up", async () => {
    const sandbox = new DockerSandbox({
      image: "node:22-bookworm",
      pull: "missing",
      limits: {
        timeoutMs: 10_000,
        maxOutputBytes: 64_000,
      },
    });
    const session = await sandbox.createSession({
      id: `vitest-${Date.now()}`,
      manifest: {
        directories: ["src"],
        files: {
          "src/index.js": "console.log('hello sandbox')",
        },
      },
    });

    try {
      const result = await session.exec({
        command: "node",
        args: ["src/index.js"],
      });
      expect(result.exitCode).toBe(0);
      expect(result.stdout.trim()).toBe("hello sandbox");

      await session.writeTextFile("out/result.txt", "done");
      await expect(session.readTextFile("out/result.txt")).resolves.toBe("done");
      await expect(session.listFiles("out")).resolves.toEqual([
        { path: "out/result.txt", type: "file", size: 4 },
      ]);
    } finally {
      await session.destroy();
    }
  }, 60_000);

  it("reports command timeout", async () => {
    const sandbox = new DockerSandbox({
      image: "node:22-bookworm",
      pull: "missing",
      limits: {
        timeoutMs: 500,
      },
    });
    const session = await sandbox.createSession({ id: `timeout-${Date.now()}` });

    try {
      const result = await session.exec({
        command: "node",
        args: ["-e", "setTimeout(() => {}, 10_000)"],
      });
      expect(result.timedOut).toBe(true);
      expect(result.exitCode).not.toBe(0);
    } finally {
      await session.destroy();
    }
  }, 60_000);
});
