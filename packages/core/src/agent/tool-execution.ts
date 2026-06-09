import type {
  JsonObject,
  ToolCall,
  ToolDefinition,
  ToolResult,
  ToolResultContent,
} from "../completion";
import { ToolContent } from "../completion";
import { mapWithConcurrency } from "../internal/concurrency";
import type { ActiveAgentRunObservers, ActiveToolObservers } from "../observability/group";
import type { AnyTool, NormalizedToolOutput, ToolCallStreamEvent } from "../tool";
import { toolResultContentToText } from "../tool";
import type { ToolMiddleware, ToolResultMiddlewareArgs } from "../tool/middleware";
import type { Agent } from "./agent";
import type { PromptHook, ToolHookArgs } from "./hooks";
import { runControl, toolCallControl } from "./hooks";
import type { AgentChildStreamEvent } from "./request";

const MCP_TOOL_METADATA_KEY = Symbol.for("anvia.mcp.tool.metadata");

export type ToolResultEventPayload = {
  type: "tool_result";
  toolName: string;
  toolCallId?: string;
  internalCallId: string;
  args: string;
  result: string;
  structuredResult?: ToolResultContent[] | undefined;
};

export type AgentToolEventPayload = {
  type: "agent_tool_event";
  toolName: string;
  toolCallId?: string;
  internalCallId: string;
  agentId: string;
  agentName?: string;
  event: AgentChildStreamEvent;
};

export type ToolExecutionEventPayload = ToolResultEventPayload | AgentToolEventPayload;

export type ToolExecutionObservation = {
  turn: number;
  runObservers: ActiveAgentRunObservers;
  toolDefinitions?: ToolDefinition[];
};

export class ToolCallExecutor {
  constructor(
    private readonly agent: Agent,
    private readonly activeHook: PromptHook | undefined,
    private readonly concurrency: number,
    private readonly requestToolMiddlewares: ToolMiddleware[],
    private readonly cancel: (reason: string) => Error,
  ) {}

  async execute(
    toolCalls: ToolCall[],
    onResult?: (result: ToolResultEventPayload) => void,
    onStreamEvent?: (event: AgentToolEventPayload) => void,
    observation?: ToolExecutionObservation,
  ): Promise<ToolResult[]> {
    return mapWithConcurrency(toolCalls, this.concurrency, async (toolCall) => {
      const args = JSON.stringify(toolCall.function.arguments ?? {});
      const internalCallId = globalThis.crypto.randomUUID();
      const hookArgs: ToolHookArgs = {
        toolName: toolCall.function.name,
        internalCallId,
        args,
      };
      if (toolCall.callId !== undefined) {
        hookArgs.toolCallId = toolCall.callId;
      }
      const tool = this.agent.getTool(toolCall.function.name);
      const toolDefinition = observation?.toolDefinitions?.find(
        (definition) => definition.name === toolCall.function.name,
      );
      const toolMetadata = toolTraceMetadata(tool);

      const toolObservers = await observation?.runObservers.startTool({
        turn: observation.turn,
        toolCall,
        toolName: toolCall.function.name,
        internalCallId,
        args,
        toolCallId: toolCall.callId,
        ...(toolDefinition === undefined ? {} : { toolDefinition }),
        ...(toolMetadata === undefined ? {} : { toolMetadata }),
      });

      const callAction = await this.activeHook?.onToolCall?.({
        ...hookArgs,
        tool: toolCallControl,
      });
      if (callAction?.type === "terminate") {
        await recordToolError(
          toolObservers,
          observation?.turn,
          toolCall,
          internalCallId,
          args,
          callAction.reason,
        );
        throw this.cancel(callAction.reason);
      }
      if (callAction?.type === "approval_request") {
        const reason = `Tool approval was requested for ${toolCall.function.name}, but no approval handler is installed.`;
        await recordToolError(
          toolObservers,
          observation?.turn,
          toolCall,
          internalCallId,
          args,
          reason,
        );
        throw this.cancel(reason);
      }

      let output: NormalizedToolOutput;
      let skipped = false;
      if (callAction?.type === "skip") {
        output = callAction.reason;
        skipped = true;
      } else {
        try {
          output = await this.agent.callTool(toolCall.function.name, args, {
            emitStreamEvent: async (event) => {
              await toolObservers?.streamEvent({
                turn: observation?.turn ?? 0,
                toolCall,
                toolName: toolCall.function.name,
                internalCallId,
                args,
                ...(toolCall.callId === undefined ? {} : { toolCallId: toolCall.callId }),
                event,
              });
              const payload = agentToolEventPayload(toolCall, internalCallId, event);
              if (payload !== undefined) {
                onStreamEvent?.(payload);
              }
            },
          });
        } catch (error) {
          output = error instanceof Error ? error.toString() : String(error);
        }
      }

      let result = toolOutputToText(output);
      let structuredResult = toolOutputToStructuredResult(output);
      if (this.agent.shouldApplyToolMiddleware(toolCall.function.name)) {
        const middlewareReplacement = await this.runToolResultMiddlewares({
          ...hookArgs,
          result,
          originalResult: result,
          structuredResult,
          originalStructuredResult: structuredResult,
          turn: observation?.turn ?? 0,
        });
        if (middlewareReplacement !== undefined) {
          output = middlewareReplacement;
          result = middlewareReplacement;
          structuredResult = undefined;
        }
      }

      const resultAction = await this.activeHook?.onToolResult?.({
        ...hookArgs,
        result,
        structuredResult,
        run: runControl,
      });
      await toolObservers?.end({
        turn: observation?.turn ?? 0,
        toolCall,
        toolName: toolCall.function.name,
        internalCallId,
        args,
        result,
        structuredResult,
        skipped,
        toolCallId: toolCall.callId,
      });
      if (resultAction?.type === "terminate") {
        throw this.cancel(resultAction.reason);
      }

      const resultPayload: ToolResultEventPayload = {
        type: "tool_result",
        toolName: toolCall.function.name,
        internalCallId,
        args,
        result,
        structuredResult,
      };
      if (toolCall.callId !== undefined) {
        resultPayload.toolCallId = toolCall.callId;
      }
      onResult?.(resultPayload);
      return ToolContent.toolResult(toolCall.id, output, toolCall.callId);
    });
  }

  private async runToolResultMiddlewares(
    args: ToolResultMiddlewareArgs,
  ): Promise<string | undefined> {
    let result = args.result;
    let replaced = false;
    for (const middleware of [...this.agent.toolMiddlewares, ...this.requestToolMiddlewares]) {
      const replacement = await middleware.onResult?.({
        ...args,
        result,
      });
      if (replacement !== undefined) {
        result = replacement;
        replaced = true;
      }
    }
    return replaced ? result : undefined;
  }
}

function toolTraceMetadata(tool: AnyTool | undefined): JsonObject | undefined {
  if (tool === undefined) {
    return undefined;
  }
  const metadata = (tool as { [MCP_TOOL_METADATA_KEY]?: unknown })[MCP_TOOL_METADATA_KEY];
  const mcpMetadata =
    typeof metadata === "object" && metadata !== null
      ? (metadata as { serverName?: unknown })
      : undefined;
  return {
    approvalRequired: tool.approval !== undefined,
    ...(typeof mcpMetadata?.serverName === "string" && mcpMetadata.serverName.length > 0
      ? { mcpServerName: mcpMetadata.serverName }
      : {}),
  };
}

async function recordToolError(
  toolObservers: ActiveToolObservers | undefined,
  turn: number | undefined,
  toolCall: ToolCall,
  internalCallId: string,
  args: string,
  error: unknown,
): Promise<void> {
  await toolObservers?.error({
    turn: turn ?? 0,
    toolCall,
    toolName: toolCall.function.name,
    internalCallId,
    args,
    error,
    toolCallId: toolCall.callId,
  });
}

function toolOutputToText(output: NormalizedToolOutput): string {
  return typeof output === "string" ? output : toolResultContentToText(output);
}

function toolOutputToStructuredResult(
  output: NormalizedToolOutput,
): ToolResultContent[] | undefined {
  return typeof output === "string" ? undefined : output;
}

function agentToolEventPayload(
  toolCall: ToolCall,
  internalCallId: string,
  event: ToolCallStreamEvent,
): AgentToolEventPayload | undefined {
  if (typeof event.agentId !== "string" || event.agentId.length === 0) {
    return undefined;
  }
  return {
    type: "agent_tool_event",
    toolName: toolCall.function.name,
    ...(toolCall.callId === undefined ? {} : { toolCallId: toolCall.callId }),
    internalCallId,
    agentId: event.agentId,
    ...(event.agentName === undefined ? {} : { agentName: event.agentName }),
    event: event.event as AgentChildStreamEvent,
  };
}
