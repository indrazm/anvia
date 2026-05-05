import { AgentBuilder, AssistantContent, Message, UserContent } from "@anvia/core";
import { describe, expect, it } from "vitest";
import { OpenAIChatCompletionModel, OpenAIClient } from "../src/index";
import {
  fromOpenAIChatCompletionResponse,
  toOpenAIChatCompletionParams,
} from "../src/openai/chat-completion";

describe("OpenAI chat-completions client path", () => {
  it("exposes OpenAI chat-completions capability metadata", () => {
    const model = new OpenAIChatCompletionModel({} as never, "custom-chat-model");

    expect(model.provider).toBe("openai-chat");
    expect(model.defaultModel).toBe("custom-chat-model");
    expect(model.capabilities).toEqual({
      streaming: true,
      tools: true,
      toolChoice: true,
      imageInput: true,
      documentInput: false,
      outputSchema: true,
      reasoning: true,
    });
  });

  it("creates OpenAI chat-completions models", async () => {
    const calls: unknown[] = [];
    const client = {
      chat: {
        completions: {
          create: async (params: unknown) => {
            calls.push(params);
            return {
              choices: [{ message: { role: "assistant", content: "ok" } }],
              usage: {},
            };
          },
        },
      },
    };

    const openai = new OpenAIClient({
      client: client as never,
      completionApi: "chat",
    });
    const model = openai.completionModel("custom-chat-model");

    expect(model).toBeInstanceOf(OpenAIChatCompletionModel);
    await model.completion({
      chatHistory: [Message.user("hello")],
      documents: [],
      tools: [],
    });
    expect(calls).toEqual([
      {
        model: "custom-chat-model",
        messages: [{ role: "user", content: "hello" }],
      },
    ]);
  });

  it("uses chat completions by default for custom base URLs", () => {
    const openai = new OpenAIClient({
      apiKey: "test",
      baseUrl: "https://provider.example.com/v1",
    });

    expect(openai.completionModel("custom-chat-model")).toBeInstanceOf(OpenAIChatCompletionModel);
  });

  it("enables reasoning_content history automatically for Moonshot base URLs", async () => {
    const calls: unknown[] = [];
    const client = {
      chat: {
        completions: {
          create: async (params: unknown) => {
            calls.push(params);
            return { choices: [{ message: { role: "assistant", content: "ok" } }], usage: {} };
          },
        },
      },
    };
    const openai = new OpenAIClient({
      client: client as never,
      baseUrl: "https://api.moonshot.ai/v1",
    });

    await openai.completionModel("kimi-k2.6").completion({
      chatHistory: [
        Message.assistant([
          AssistantContent.reasoning("Need current data."),
          AssistantContent.toolCall("call_1", "lookup_price", { ticker: "MSFT" }),
        ]),
      ],
      documents: [],
      tools: [],
    });

    expect(calls[0]).toMatchObject({
      messages: [{ role: "assistant", reasoning_content: "Need current data." }],
    });
  });

  it("rejects unsupported document file input before provider calls", async () => {
    const calls: unknown[] = [];
    const model = new OpenAIChatCompletionModel(
      {
        chat: {
          completions: {
            create: async (params: unknown) => {
              calls.push(params);
              return {};
            },
          },
        },
      } as never,
      "custom-chat-model",
    );

    await expect(
      model.completion({
        chatHistory: [
          Message.user([UserContent.documentUrl("https://example.com/a.pdf", "application/pdf")]),
        ],
        documents: [],
        tools: [],
      }),
    ).rejects.toThrow("openai-chat:custom-chat-model does not support document file input.");
    expect(calls).toHaveLength(0);
  });

  it("preserves non-streaming reasoning_content with tool calls", () => {
    const response = fromOpenAIChatCompletionResponse({
      id: "chatcmpl_1",
      choices: [
        {
          message: {
            role: "assistant",
            reasoning_content: "Need current data.",
            content: "Checking.",
            tool_calls: [
              {
                id: "call_1",
                type: "function",
                function: {
                  name: "lookup_price",
                  arguments: '{"ticker":"MSFT"}',
                },
              },
            ],
          },
        },
      ],
      usage: {},
    });

    expect(response.choice).toEqual([
      AssistantContent.reasoning("Need current data."),
      AssistantContent.text("Checking."),
      AssistantContent.toolCall("call_1", "lookup_price", { ticker: "MSFT" }),
    ]);
  });

  it("does not serialize assistant reasoning_content for generic chat completions", () => {
    const params = toOpenAIChatCompletionParams("custom-chat-model", {
      chatHistory: [
        Message.assistant([
          AssistantContent.reasoning("Need current data."),
          AssistantContent.toolCall("call_1", "lookup_price", { ticker: "MSFT" }),
        ]),
      ],
      documents: [],
      tools: [],
    });

    expect(params.messages).toEqual([
      {
        role: "assistant",
        tool_calls: [
          {
            id: "call_1",
            type: "function",
            function: {
              name: "lookup_price",
              arguments: '{"ticker":"MSFT"}',
            },
          },
        ],
      },
    ]);
  });

  it("serializes assistant reasoning_content alongside text and tool calls when enabled", () => {
    const params = toOpenAIChatCompletionParams(
      "kimi-k2.6",
      {
        chatHistory: [
          Message.assistant([
            AssistantContent.reasoning("Need current data."),
            AssistantContent.text("Checking."),
            AssistantContent.toolCall("call_1", "lookup_price", { ticker: "MSFT" }),
          ]),
        ],
        documents: [],
        tools: [],
      },
      {
        preserveReasoningContent: true,
      },
    );

    expect(params.messages).toEqual([
      {
        role: "assistant",
        content: "Checking.",
        reasoning_content: "Need current data.",
        tool_calls: [
          {
            id: "call_1",
            type: "function",
            function: {
              name: "lookup_price",
              arguments: '{"ticker":"MSFT"}',
            },
          },
        ],
      },
    ]);
  });

  it("serializes accumulated streaming reasoning into assistant tool-call history", async () => {
    const calls: unknown[] = [];
    const client = {
      chat: {
        completions: {
          create: async (params: unknown) => {
            calls.push(params);
            if (calls.length === 1) {
              return stream([
                {
                  id: "chatcmpl_1",
                  choices: [{ delta: { reasoning_content: "Need current data." } }],
                },
                {
                  id: "chatcmpl_1",
                  choices: [
                    {
                      delta: {
                        tool_calls: [
                          {
                            index: 0,
                            id: "call_1",
                            type: "function",
                            function: {
                              name: "lookup_price",
                              arguments: '{"ticker":"MSFT"}',
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              ]);
            }

            return stream([{ id: "chatcmpl_2", choices: [{ delta: { content: "MSFT: 123" } }] }]);
          },
        },
      },
    };
    const model = new OpenAIChatCompletionModel(client as never, "kimi-k2.6", {
      preserveReasoningContent: true,
    });
    const tool = {
      name: "lookup_price",
      definition: () => ({
        name: "lookup_price",
        description: "Look up a price.",
        parameters: { type: "object" },
      }),
      call: () => "MSFT: 123",
    };
    const agent = new AgentBuilder("test-agent", model).tool(tool).build();

    const events = [];
    for await (const event of agent.prompt("price?").stream()) {
      events.push(event);
    }

    expect(events.at(-1)).toMatchObject({ type: "final", output: "MSFT: 123" });
    expect(calls).toHaveLength(2);
    expect(calls[1]).toMatchObject({
      messages: [
        { role: "user", content: "price?" },
        {
          role: "assistant",
          reasoning_content: "Need current data.",
          tool_calls: [
            {
              id: "call_1",
              type: "function",
              function: {
                name: "lookup_price",
                arguments: '{"ticker":"MSFT"}',
              },
            },
          ],
        },
        { role: "tool", tool_call_id: "call_1", content: "MSFT: 123" },
      ],
    });
  });
});

function stream(chunks: unknown[]): AsyncIterable<unknown> {
  return {
    async *[Symbol.asyncIterator]() {
      yield* chunks;
    },
  };
}
