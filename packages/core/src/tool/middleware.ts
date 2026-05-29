import type { ToolResultContent } from "../completion";

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

export interface ToolMiddleware {
  onResult?(args: ToolResultMiddlewareArgs): string | undefined | Promise<string | undefined>;
}

export function createToolMiddleware(middleware: ToolMiddleware): ToolMiddleware {
  return middleware;
}
