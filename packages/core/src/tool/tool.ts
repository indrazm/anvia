import type { JsonObject, JsonValue, ToolDefinition, ToolResultContent } from "../completion/types";

export type ToolApprovalRunContext = {
  agentId: string;
  runId: string;
  sessionId?: string;
  metadata?: JsonObject;
};

export type ToolApprovalContext<Args = unknown> = {
  toolName: string;
  args: Args;
  rawArgs: string;
  toolCallId?: string;
  internalCallId: string;
  run: ToolApprovalRunContext;
};

export type ToolApprovalPolicy<Args = unknown> = {
  when(ctx: ToolApprovalContext<Args>): boolean | Promise<boolean>;
  reason?: string | ((ctx: ToolApprovalContext<Args>) => string | Promise<string>);
  rejectMessage?: string | ((ctx: ToolApprovalContext<Args>) => string | Promise<string>);
};

export type ToolCallStreamEvent = {
  agentId: string;
  agentName?: string | undefined;
  event: unknown;
};

export type ToolCallContext = {
  emitStreamEvent?(event: ToolCallStreamEvent): void | Promise<void>;
};

export interface Tool<Args = unknown, Output = unknown> {
  readonly name: string;
  readonly approval?: ToolApprovalPolicy<Args>;
  definition(prompt: string): ToolDefinition | Promise<ToolDefinition>;
  call(args: Args, context?: ToolCallContext): Output | Promise<Output>;
  parseApprovalArgs?(args: unknown): Args;
}

export type AnyTool = Omit<Tool<unknown, unknown>, "approval"> & {
  readonly approval?: unknown;
};

export type NormalizedToolOutput = string | ToolResultContent[];

export const ToolOutput = {
  content(content: ToolResultContent[]): ToolResultContent[] {
    return content;
  },
};

export function serializeToolOutput(output: unknown): string {
  if (typeof output === "string") {
    return output;
  }

  const serialized = JSON.stringify(output);
  return serialized === undefined ? String(output) : serialized;
}

export function isToolResultContentArray(value: unknown): value is ToolResultContent[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((item) => {
      if (typeof item !== "object" || item === null || !("type" in item)) {
        return false;
      }
      if (item.type === "text") {
        return "text" in item && typeof item.text === "string";
      }
      if (item.type === "image") {
        return (
          "data" in item &&
          typeof item.data === "string" &&
          (!("mediaType" in item) ||
            item.mediaType === undefined ||
            typeof item.mediaType === "string")
        );
      }
      return false;
    })
  );
}

export function normalizeToolResultOutput(output: unknown): NormalizedToolOutput {
  return isToolResultContentArray(output) ? output : serializeToolOutput(output);
}

export function toolResultContentToText(content: ToolResultContent[]): string {
  return content
    .map((item) => (item.type === "text" ? item.text : `[image:${item.mediaType ?? "image/png"}]`))
    .join("\n");
}

export function parseToolArgs(args: string): JsonValue {
  if (args.trim() === "") {
    return {};
  }

  return JSON.parse(args) as JsonValue;
}
