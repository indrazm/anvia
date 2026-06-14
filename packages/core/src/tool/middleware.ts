import type {
  CompletionRequest,
  CompletionResponse,
  JsonValue,
  ToolResultContent,
} from "../completion";

type MaybePromise<T> = T | Promise<T>;

export type CompletionRequestMiddlewareArgs = {
  turn: number;
  request: CompletionRequest;
  originalRequest: CompletionRequest;
};

export type CompletionRequestMiddlewareResult =
  | {
      request: CompletionRequest;
    }
  | undefined;

export type CompletionResponseMiddlewareArgs<RawResponse = unknown> = {
  turn: number;
  request: CompletionRequest;
  response: CompletionResponse<RawResponse>;
  originalResponse: CompletionResponse<RawResponse>;
};

export type CompletionResponseMiddlewareResult<RawResponse = unknown> =
  | {
      response: CompletionResponse<RawResponse>;
    }
  | undefined;

export type ToolInputMiddlewareArgs = {
  toolName: string;
  args: string;
  originalArgs: string;
  turn: number;
  toolCallId?: string | undefined;
  internalCallId: string;
};

export type ToolInputMiddlewareResult =
  | {
      args: JsonValue | string;
    }
  | undefined;

export type ToolResultMiddlewareArgs = {
  toolName: string;
  args: string;
  result: string;
  originalResult: string;
  structuredResult?: ToolResultContent[] | undefined;
  originalStructuredResult?: ToolResultContent[] | undefined;
  turn: number;
  toolCallId?: string | undefined;
  internalCallId: string;
};

export type ToolOutputMiddlewareArgs = ToolResultMiddlewareArgs;

export type ToolOutputMiddlewareResult =
  | string
  | {
      result?: string | undefined;
      structuredResult?: ToolResultContent[] | undefined;
    }
  | undefined;

export interface AgentMiddleware<RawResponse = unknown> {
  onCompletionRequest?(
    args: CompletionRequestMiddlewareArgs,
  ): MaybePromise<CompletionRequestMiddlewareResult>;
  onCompletionResponse?(
    args: CompletionResponseMiddlewareArgs<RawResponse>,
  ): MaybePromise<CompletionResponseMiddlewareResult<RawResponse>>;
  onToolInput?(args: ToolInputMiddlewareArgs): MaybePromise<ToolInputMiddlewareResult>;
  onToolOutput?(args: ToolOutputMiddlewareArgs): MaybePromise<ToolOutputMiddlewareResult>;
  /**
   * @deprecated Use `onToolOutput` instead.
   */
  onResult?(args: ToolResultMiddlewareArgs): string | undefined | Promise<string | undefined>;
}

/**
 * @deprecated Use `AgentMiddleware` instead.
 */
export type ToolMiddleware<RawResponse = unknown> = AgentMiddleware<RawResponse>;

export function createMiddleware<RawResponse = unknown>(
  middleware: AgentMiddleware<RawResponse>,
): AgentMiddleware<RawResponse> {
  return middleware;
}

/**
 * @deprecated Use `createMiddleware` instead.
 */
export function createToolMiddleware<RawResponse = unknown>(
  middleware: ToolMiddleware<RawResponse>,
): ToolMiddleware<RawResponse> {
  return middleware;
}
