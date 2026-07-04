import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  type AnyTool,
  createTool,
  ToolCallError,
  ToolJsonError,
  ToolNotFoundError,
  ToolOutput,
  ToolSet,
} from "./helpers/imports";

const addTool = createTool({
  name: "add",
  description: "Add two numbers",
  input: z.object({
    x: z.number(),
    y: z.number(),
  }),
  output: z.number(),
  execute: (args) => args.x + args.y,
});

describe("ToolSet", () => {
  it("registers, defines, and calls tools", async () => {
    const toolSet = ToolSet.fromTools([addTool]);

    await expect(toolSet.getToolDefinitions()).resolves.toEqual([
      {
        name: "add",
        description: "Add two numbers",
        parameters: {
          type: "object",
          properties: {
            x: { type: "number" },
            y: { type: "number" },
          },
          required: ["x", "y"],
          additionalProperties: false,
        },
      },
    ]);
    await expect(toolSet.call("add", JSON.stringify({ x: 2, y: 5 }))).resolves.toBe("7");
  });

  it("stores approval metadata without adding it to tool definitions", async () => {
    const approvedTool = createTool({
      name: "approved",
      description: "Needs conditional approval",
      input: z.object({ amount: z.number() }),
      output: z.string(),
      approval: {
        when: ({ args }) => args.amount > 100,
        reason: ({ args }) => `Approve ${args.amount}`,
      },
      execute: () => "ok",
    });
    const toolSet = new ToolSet().addTool(approvedTool);

    expect(toolSet.get("approved")?.approval).toBe(approvedTool.approval);
    await expect(toolSet.getToolDefinitions()).resolves.toEqual([
      {
        name: "approved",
        description: "Needs conditional approval",
        parameters: {
          type: "object",
          properties: {
            amount: { type: "number" },
          },
          required: ["amount"],
          additionalProperties: false,
        },
      },
    ]);
    await expect(toolSet.call("approved", JSON.stringify({ amount: 250 }))).resolves.toBe("ok");
  });

  it("throws for missing tools", async () => {
    const toolSet = new ToolSet();

    await expect(toolSet.call("missing", "{}")).rejects.toBeInstanceOf(ToolNotFoundError);
  });

  it("throws for invalid JSON arguments", async () => {
    const toolSet = ToolSet.fromTools([addTool]);

    await expect(toolSet.call("add", "{")).rejects.toBeInstanceOf(ToolJsonError);
  });

  it("serializes string outputs without JSON quotes", async () => {
    const toolSet = ToolSet.fromTools([
      createTool({
        name: "echo",
        description: "Echo",
        input: z.object({}),
        execute: () => "hello",
      }),
    ]);

    await expect(toolSet.call("echo", "{}")).resolves.toBe("hello");
  });

  it("throws tool call errors for invalid Zod input", async () => {
    const toolSet = ToolSet.fromTools([addTool]);

    await expect(toolSet.call("add", JSON.stringify({ x: "2", y: 5 }))).rejects.toBeInstanceOf(
      ToolCallError,
    );
  });

  it("validates output when an output schema is provided", async () => {
    const toolSet = ToolSet.fromTools([
      createTool({
        name: "bad_output",
        description: "Return bad output",
        input: z.object({}),
        output: z.number(),
        execute: () => "not a number" as unknown as number,
      }),
    ]);

    await expect(toolSet.call("bad_output", "{}")).rejects.toBeInstanceOf(ToolCallError);
  });

  it("allows arbitrary output when output schema is omitted", async () => {
    const toolSet = ToolSet.fromTools([
      createTool({
        name: "object_output",
        description: "Return object output",
        input: z.object({}),
        execute: () => ({ ok: true }),
      }),
    ]);

    await expect(toolSet.call("object_output", "{}")).resolves.toBe('{"ok":true}');
  });

  it("passes through structured tool result content", async () => {
    const content = ToolOutput.content([
      { type: "text", text: '{"coordMap":"0,0,100,100,100,100"}' },
      { type: "image", data: "base64-png", mediaType: "image/png" },
    ]);
    const toolSet = ToolSet.fromTools([
      createTool({
        name: "screenshot",
        description: "Return screenshot",
        input: z.object({}),
        execute: () => content,
      }),
    ]);

    await expect(toolSet.call("screenshot", "{}")).resolves.toEqual(content);
  });

  it("adds tool arrays and tool sets without duplicate definitions", async () => {
    const toolSet = new ToolSet().addTools([addTool, addTool]);
    const echoTool = createTool({
      name: "echo",
      description: "Echo",
      input: z.object({ value: z.string() }),
      output: z.string(),
      execute: ({ value }) => value,
    });

    toolSet.addTools(ToolSet.fromTools([echoTool]));

    await expect(toolSet.call("echo", JSON.stringify({ value: "ok" }))).resolves.toBe("ok");
    await expect(toolSet.getToolDefinitions()).resolves.toEqual([
      expect.objectContaining({ name: "add" }),
      expect.objectContaining({ name: "echo" }),
    ]);
  });

  it("removes registered tools", async () => {
    const toolSet = new ToolSet().addTool(addTool);

    expect(toolSet.deleteTool("add")).toBe(true);
    await expect(toolSet.call("add", JSON.stringify({ x: 2, y: 5 }))).rejects.toBeInstanceOf(
      ToolNotFoundError,
    );
    await expect(toolSet.getToolDefinitions()).resolves.toEqual([]);
  });

  it("replaces duplicate tool names with the latest tool", async () => {
    const toolSet = new ToolSet().addTool(addTool).addTool(
      createTool({
        name: "add",
        description: "Replace add",
        input: z.object({ x: z.number(), y: z.number() }),
        output: z.number(),
        execute: ({ x, y }) => x * y,
      }),
    );

    await expect(toolSet.call("add", JSON.stringify({ x: 2, y: 5 }))).resolves.toBe("10");
    await expect(toolSet.getToolDefinitions()).resolves.toEqual([
      expect.objectContaining({ name: "add", description: "Replace add" }),
    ]);
  });

  it("prevents TOCTOU race between contains() and call() via callWithTool", async () => {
    const toolA = createTool({
      name: "a",
      description: "Tool A",
      input: z.object({}),
      execute: () => "a_result",
    });
    const toolSet = new ToolSet().addTool(toolA);

    // Get the tool by name, then delete it from the set
    const tool = toolSet.get("a");
    expect(tool).toBeDefined();
    toolSet.deleteTool("a");
    expect(toolSet.contains("a")).toBe(false);

    // callWithTool should still work because it uses the tool reference directly
    await expect(toolSet.callWithTool(tool as AnyTool, "{}")).resolves.toBe("a_result");
  });

  it("callWithTool throws ToolJsonError for invalid JSON args", async () => {
    const toolSet = ToolSet.fromTools([addTool]);
    const tool = toolSet.get("add");
    expect(tool).toBeDefined();

    await expect(toolSet.callWithTool(tool as AnyTool, "{")).rejects.toBeInstanceOf(ToolJsonError);
  });

  it("callWithTool throws ToolCallError for Zod validation failure", async () => {
    const toolSet = ToolSet.fromTools([addTool]);
    const tool = toolSet.get("add");
    expect(tool).toBeDefined();

    await expect(
      toolSet.callWithTool(tool as AnyTool, JSON.stringify({ x: "not_a_number", y: 5 })),
    ).rejects.toBeInstanceOf(ToolCallError);
  });
});
