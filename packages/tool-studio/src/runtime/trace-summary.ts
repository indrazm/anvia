import type { StudioTrace, StudioTraceSummary } from "../types";
import { compact } from "./compact";

export function traceSummary(trace: StudioTrace): StudioTraceSummary {
  return compact({
    id: trace.id,
    sessionId: trace.sessionId,
    name: trace.name,
    status: trace.status,
    startedAt: trace.startedAt,
    endedAt: trace.endedAt,
    durationMs: trace.durationMs,
    output: trace.output,
    error: trace.error,
    usage: trace.usage,
    metadata: trace.metadata,
    observationCount: trace.observations.length,
  }) as StudioTraceSummary;
}
