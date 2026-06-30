import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  AgentBuilder,
  type AgentStreamEvent,
  AssistantContent,
  type CompletionModel,
  type CompletionRequest,
  type CompletionResponse,
  type CompletionStreamEvent,
  createTool,
  defineGuardrailPolicy,
  defineInputGuardrail,
  defineOutputGuardrail,
  defineToolGuardrail,
  defineToolResultGuardrail,
  Message,
  type StreamingCompletionModel,
  Usage,
} from "./helpers/imports";

class QueueModel implements CompletionModel {
  readonly provider = "test";
  readonly defaultModel = "test";
  readonly capabilities = {
    streaming: false,
    tools: true,
    toolChoice: true,
    imageInput: true,
    documentInput: true,
    outputSchema: true,
    reasoning: true,
  };
  readonly requests: CompletionRequest[] = [];

  constructor(private readonly responses: CompletionResponse[]) {}

  async completion(request: CompletionRequest): Promise<CompletionResponse> {
    this.requests.push(request);
    const response = this.responses.shift();
    if (response === undefined) {
      throw new Error("No queued response");
    }
    return response;
  }
}

class StreamingQueueModel implements StreamingCompletionModel {
  readonly provider = "test";
  readonly defaultModel = "test";
  readonly capabilities = {
    streaming: true,
    tools: true,
    toolChoice: true,
    imageInput: true,
    documentInput: true,
    outputSchema: true,
    reasoning: true,
  };
  readonly requests: CompletionRequest[] = [];

  constructor(private readonly responses: CompletionStreamEvent[][]) {}

  async completion(): Promise<CompletionResponse> {
    throw new Error("completion should not be called");
  }

  async *streamCompletion(request: CompletionRequest): AsyncIterable<CompletionStreamEvent> {
    this.requests.push(request);
    const response = this.responses.shift();
    if (response === undefined) {
      throw new Error("No queued response");
    }
    yield* response;
  }
}

function response(choice: CompletionResponse["choice"]): CompletionResponse {
  return {
    choice,
    usage: Usage.empty(),
    rawResponse: {},
  };
}

describe("guardrails", () => {
  it("rewrites input before model execution", async () => {
    const model = new QueueModel([response([AssistantContent.text("done")])]);
    const inputGuardrail = defineInputGuardrail({
      id: "redact-input",
      check(ctx, { rewrite }) {
        return rewrite({
          inputText: ctx.inputText.replace("secret", "[redacted]"),
          reason: "input_redacted",
        });
      },
    });
    const agent = new AgentBuilder("test-agent", model)
      .guardrails(defineGuardrailPolicy({ id: "policy", input: [inputGuardrail] }))
      .build();

    const result = await agent.prompt("hello secret").send();

    expect(result.output).toBe("done");
    expect(model.requests[0]?.chatHistory).toEqual([Message.user("hello [redacted]")]);
    expect(result.guardrails).toMatchObject([
      { guardrailId: "redact-input", action: "rewrite", applied: true },
    ]);
  });

  it("blocks input without calling the model", async () => {
    const model = new QueueModel([]);
    const inputGuardrail = defineInputGuardrail({
      id: "block-input",
      check(_ctx, { block }) {
        return block({
          reason: "blocked",
          message: "Input blocked.",
        });
      },
    });
    const agent = new AgentBuilder("test-agent", model)
      .guardrails(defineGuardrailPolicy({ id: "policy", input: [inputGuardrail] }))
      .build();

    const result = await agent.prompt("blocked").send();

    expect(result.output).toBe("Input blocked.");
    expect(model.requests).toHaveLength(0);
    expect(result.guardrails).toMatchObject([
      { guardrailId: "block-input", action: "block", applied: true },
    ]);
  });

  it("routes tool guardrail approval through the existing approval handler", async () => {
    let executed = false;
    const guardedTool = createTool({
      name: "issue_refund",
      description: "Issue a refund.",
      input: z.object({ amountCents: z.number() }),
      output: z.string(),
      execute({ amountCents }) {
        executed = true;
        return `issued ${amountCents}`;
      },
    });
    const toolGuardrail = defineToolGuardrail<{ amountCents: number }>({
      id: "large-refund",
      tool: "issue_refund",
      check(ctx, { requestApproval, allow }) {
        return ctx.args.amountCents > 10_000
          ? requestApproval({ reason: "Large refund." })
          : allow();
      },
    });
    const model = new QueueModel([
      response([AssistantContent.toolCall("call_1", "issue_refund", { amountCents: 20_000 })]),
      response([AssistantContent.text("done")]),
    ]);
    const approvalRequests: unknown[] = [];
    const agent = new AgentBuilder("test-agent", model)
      .tool(guardedTool)
      .guardrails(defineGuardrailPolicy({ id: "policy", tools: [toolGuardrail] }))
      .approvals({
        handler(request) {
          approvalRequests.push(request);
          return true;
        },
      })
      .build();

    const result = await agent.prompt("refund").send();

    expect(result.output).toBe("done");
    expect(executed).toBe(true);
    expect(approvalRequests).toMatchObject([
      { toolName: "issue_refund", args: { amountCents: 20_000 }, reason: "Large refund." },
    ]);
    expect(result.guardrails).toMatchObject([
      { guardrailId: "large-refund", action: "request_approval", applied: true },
    ]);
  });

  it("redacts tool results before they return to the model", async () => {
    const lookupSecret = createTool({
      name: "lookup_secret",
      description: "Look up a secret.",
      input: z.object({}),
      output: z.string(),
      execute() {
        return "token=abc";
      },
    });
    const resultGuardrail = defineToolResultGuardrail({
      id: "redact-tool-result",
      tool: "lookup_secret",
      check(ctx, { rewrite }) {
        return rewrite({
          result: ctx.result.replace("abc", "[redacted]"),
          reason: "secret_redacted",
        });
      },
    });
    const model = new QueueModel([
      response([AssistantContent.toolCall("call_1", "lookup_secret", {})]),
      response([AssistantContent.text("done")]),
    ]);
    const agent = new AgentBuilder("test-agent", model)
      .tool(lookupSecret)
      .guardrails(defineGuardrailPolicy({ id: "policy", toolResults: [resultGuardrail] }))
      .build();

    await agent.prompt("lookup").send();

    expect(model.requests[1]?.chatHistory.at(-1)).toEqual(
      Message.tool([
        {
          type: "tool_result",
          id: "call_1",
          content: [{ type: "text", text: "token=[redacted]" }],
        },
      ]),
    );
  });

  it("rewrites final output before returning and committing the assistant message", async () => {
    const model = new QueueModel([response([AssistantContent.text("secret token")])]);
    const outputGuardrail = defineOutputGuardrail({
      id: "safe-output",
      check(ctx, { rewrite }) {
        return rewrite({
          outputText: ctx.outputText.replace("secret", "[redacted]"),
          reason: "output_redacted",
        });
      },
    });
    const agent = new AgentBuilder("test-agent", model)
      .guardrails(defineGuardrailPolicy({ id: "policy", output: [outputGuardrail] }))
      .build();

    const result = await agent.prompt("hello").send();

    expect(result.output).toBe("[redacted] token");
    expect(result.messages.at(-1)).toEqual(Message.assistant("[redacted] token"));
    expect(result.guardrails).toMatchObject([
      { guardrailId: "safe-output", action: "rewrite", applied: true },
    ]);
  });

  it("buffers streamed text when enforced output guardrails are active", async () => {
    const model = new StreamingQueueModel([
      [
        { type: "text_delta", delta: "secret token" },
        { type: "final", response: response([AssistantContent.text("secret token")]) },
      ],
    ]);
    const outputGuardrail = defineOutputGuardrail({
      id: "stream-output",
      check(ctx, { rewrite }) {
        return rewrite({
          outputText: ctx.outputText.replace("secret", "[redacted]"),
          reason: "output_redacted",
        });
      },
    });
    const agent = new AgentBuilder("test-agent", model)
      .guardrails(defineGuardrailPolicy({ id: "policy", output: [outputGuardrail] }))
      .build();

    const events: AgentStreamEvent[] = [];
    for await (const event of agent.prompt("hello").stream()) {
      events.push(event);
    }

    expect(events).not.toContainEqual(
      expect.objectContaining({ type: "text_delta", delta: "secret token" }),
    );
    expect(events).toContainEqual(
      expect.objectContaining({ type: "text_delta", delta: "[redacted] token" }),
    );
    expect(events).toContainEqual(
      expect.objectContaining({
        type: "guardrail_decision",
        decision: expect.objectContaining({ guardrailId: "stream-output", action: "rewrite" }),
      }),
    );
    expect(events.at(-1)).toMatchObject({ type: "final", output: "[redacted] token" });
  });
});
