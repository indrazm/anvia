import { describe, expect, it } from "vitest";
import { z } from "zod";

import {
  AgentBuilder,
  AssistantContent,
  type CompletionModelCapabilities,
  type CompletionRequest,
  type CompletionResponse,
  type CompletionStreamEvent,
  coreMessagesToUIMessages,
  createAgentUIStream,
  createCompletion,
  createCompletionStream,
  createCompletionUIStream,
  createTool,
  Message,
  type StreamingCompletionModel,
  type UIMessage,
  Usage,
  UserContent,
  uiMessagesToCoreMessages,
} from "./helpers/imports";

const capabilities: CompletionModelCapabilities = {
  streaming: true,
  tools: true,
  toolChoice: true,
  imageInput: true,
  documentInput: true,
  outputSchema: true,
  reasoning: true,
};

class StreamModel implements StreamingCompletionModel {
  readonly provider = "test";
  readonly defaultModel = "test-model";
  readonly capabilities = capabilities;
  readonly requests: CompletionRequest[] = [];

  constructor(private readonly turns: CompletionStreamEvent[][]) {}

  async completion(request: CompletionRequest): Promise<CompletionResponse> {
    this.requests.push(request);
    return {
      choice: [AssistantContent.text("ok")],
      usage: Usage.empty(),
      rawResponse: {},
    };
  }

  async *streamCompletion(request: CompletionRequest): AsyncIterable<CompletionStreamEvent> {
    this.requests.push(request);
    const turn = this.turns.shift() ?? [];
    for (const event of turn) {
      yield event;
    }
  }
}

describe("UI message adapters", () => {
  it("converts UI messages into core completion messages", () => {
    const messages: UIMessage[] = [
      {
        id: "user_1",
        role: "user",
        parts: [{ id: "part_1", type: "text", text: "Hello" }],
      },
      {
        id: "assistant_1",
        role: "assistant",
        parts: [
          { id: "part_2", type: "text", text: "Hi" },
          {
            id: "tool_call_1",
            type: "tool",
            toolName: "lookup",
            toolCallId: "call_1",
            state: "input-available",
            input: { query: "Anvia" },
          },
        ],
      },
    ];

    expect(uiMessagesToCoreMessages(messages)).toEqual([
      Message.user("Hello"),
      Message.assistant(
        [
          AssistantContent.text("Hi"),
          AssistantContent.toolCall("call_1", "lookup", { query: "Anvia" }),
        ],
        "assistant_1",
      ),
    ]);
  });

  it("preserves supported user data parts when converting back to core messages", () => {
    const coreMessages = [
      Message.user([
        UserContent.text("describe"),
        UserContent.imageUrl("https://example.test/image.png"),
      ]),
    ];

    expect(uiMessagesToCoreMessages(coreMessagesToUIMessages(coreMessages))).toEqual(coreMessages);
  });

  it("rejects unsupported user UI parts instead of dropping them", () => {
    const messages: UIMessage[] = [
      {
        id: "user_1",
        role: "user",
        parts: [{ id: "custom_1", type: "data", name: "custom", data: { value: 1 } }],
      },
    ];

    expect(() => uiMessagesToCoreMessages(messages)).toThrow(
      "User UI messages can only be converted from text parts",
    );
  });

  it("preserves completed assistant tool parts as core tool results", () => {
    const messages: UIMessage[] = [
      {
        id: "assistant_1",
        role: "assistant",
        parts: [
          {
            id: "tool_tool_1",
            type: "tool",
            toolName: "add",
            toolCallId: "tool_1",
            callId: "call_1",
            state: "output-available",
            input: { x: 2, y: 5 },
            output: "7",
          },
        ],
      },
    ];

    expect(uiMessagesToCoreMessages(messages)).toEqual([
      Message.assistant(
        [AssistantContent.toolCall("tool_1", "add", { x: 2, y: 5 }, "call_1")],
        "assistant_1",
      ),
      Message.toolResult("tool_1", "7", { callId: "call_1" }),
    ]);
  });

  it("accepts core messages in createCompletionStream options", async () => {
    const model = new StreamModel([
      [
        {
          type: "final",
          response: {
            choice: [AssistantContent.text("Hello")],
            usage: Usage.empty(),
            rawResponse: {},
          },
        },
      ],
    ]);

    await collect(
      createCompletionStream(model, {
        messages: [Message.user("Hello")],
      }),
    );

    expect(model.requests[0]?.chatHistory).toEqual([Message.user("Hello")]);
  });

  it("accepts a core message as createCompletion input", async () => {
    const model = new StreamModel([]);

    const result = await createCompletion(model, {
      input: Message.user("Hello"),
    });

    expect(result.text).toBe("ok");
    expect(model.requests[0]?.chatHistory).toEqual([Message.user("Hello")]);
  });

  it("rejects non-core message arrays", () => {
    const model = new StreamModel([]);
    const uiMessage: UIMessage = {
      id: "user_1",
      role: "user",
      parts: [{ id: "part_1", type: "text", text: "Hello" }],
    };

    expect(() =>
      createCompletionStream(model, {
        messages: [Message.user("Hi"), uiMessage] as never,
      }),
    ).toThrow("messages must contain only Message values.");
  });

  it("rejects malformed single message input", () => {
    const model = new StreamModel([]);

    expect(() =>
      createCompletionStream(model, {
        input: { role: "user", content: "Hello" } as never,
      }),
    ).toThrow("input must be a string, Message, or Message[].");
  });

  it("normalizes completion streams into UI stream events", async () => {
    const model = new StreamModel([
      [
        { type: "text_delta", delta: "Hel" },
        { type: "text_delta", delta: "lo" },
        {
          type: "final",
          response: {
            choice: [AssistantContent.text("Hello")],
            usage: Usage.empty(),
            rawResponse: {},
            messageId: "provider_msg",
          },
        },
      ],
    ]);

    const events = await collect(
      createCompletionUIStream(model, {
        messages: [
          {
            id: "user_1",
            role: "user",
            parts: [{ id: "part_1", type: "text", text: "Hello" }],
          },
        ],
      }),
    );

    expect(events[0]).toMatchObject({ type: "message_start" });
    expect(events).toContainEqual(expect.objectContaining({ type: "text_delta", delta: "Hel" }));
    expect(events).toContainEqual(
      expect.objectContaining({
        type: "message_end",
        metadata: { providerMessageId: "provider_msg" },
      }),
    );
    expect(model.requests[0]?.chatHistory).toEqual([Message.user("Hello")]);
  });

  it("backfills final completion text when no text deltas were emitted", async () => {
    const model = new StreamModel([
      [
        {
          type: "final",
          response: {
            choice: [AssistantContent.text("Hello")],
            usage: Usage.empty(),
            rawResponse: {},
          },
        },
      ],
    ]);

    const events = await collect(
      createCompletionUIStream(model, {
        messages: [
          {
            id: "user_1",
            role: "user",
            parts: [{ id: "part_1", type: "text", text: "Hello" }],
          },
        ],
      }),
    );

    expect(events).toContainEqual(expect.objectContaining({ type: "text_delta", delta: "Hello" }));
  });

  it("normalizes agent streams into the same UI stream protocol", async () => {
    const model = new StreamModel([
      [
        {
          type: "tool_call",
          toolCall: AssistantContent.toolCall("tool_1", "add", { x: 2, y: 5 }, "call_1"),
        },
      ],
      [
        { type: "text_delta", delta: "7" },
        {
          type: "final",
          response: {
            choice: [AssistantContent.text("7")],
            usage: Usage.empty(),
            rawResponse: {},
          },
        },
      ],
    ]);
    const addTool = createTool({
      name: "add",
      description: "Add numbers",
      input: z.object({
        x: z.number(),
        y: z.number(),
      }),
      async execute(args: { x: number; y: number }) {
        return String(args.x + args.y);
      },
    });
    const agent = new AgentBuilder("agent", model).tool(addTool).build();

    const events = await collect(
      createAgentUIStream(agent, {
        messages: [
          {
            id: "user_1",
            role: "user",
            parts: [{ id: "part_1", type: "text", text: "add" }],
          },
        ],
      }),
    );

    expect(events[0]).toMatchObject({ type: "message_start" });
    expect(events).toContainEqual(
      expect.objectContaining({
        type: "tool_update",
        part: expect.objectContaining({
          type: "tool",
          toolName: "add",
          state: "input-available",
        }),
      }),
    );
    expect(events).toContainEqual(
      expect.objectContaining({
        type: "tool_update",
        part: expect.objectContaining({
          type: "tool",
          toolName: "add",
          state: "output-available",
          output: "7",
        }),
      }),
    );
    expect(events).toContainEqual(expect.objectContaining({ type: "text_delta", delta: "7" }));
  });
});

async function collect<TEvent>(events: AsyncIterable<TEvent>): Promise<TEvent[]> {
  const collected: TEvent[] = [];
  for await (const event of events) {
    collected.push(event);
  }
  return collected;
}
