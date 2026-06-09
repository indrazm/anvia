import type { PipelineGraphNode, PipelineRunContext } from "./types";

export async function runNode<Output>(
  context: PipelineRunContext,
  node: PipelineGraphNode,
  fn: () => Output | Promise<Output>,
): Promise<Awaited<Output>> {
  const startedAt = Date.now();
  await context.observer?.onEvent({ type: "stage_started", node });
  try {
    const output = (await fn()) as Awaited<Output>;
    await context.observer?.onEvent({
      type: "stage_completed",
      node,
      durationMs: Date.now() - startedAt,
    });
    return output;
  } catch (error) {
    await context.observer?.onEvent({
      type: "stage_failed",
      node,
      durationMs: Date.now() - startedAt,
      error,
    });
    throw error;
  }
}
