import type { StudioEvalSuite, StudioEvalSuiteConfig } from "../types";
import { compact } from "./compact";

export function evalConfig(suite: StudioEvalSuite): StudioEvalSuiteConfig {
  return compact({
    id: suite.id ?? suite.name,
    name: suite.name,
    description: suite.description,
    caseCount: suite.cases.length,
    metricNames: suite.metrics.map((metric) => metric.name),
    concurrency: suite.concurrency,
    metadata: suite.metadata,
  }) as StudioEvalSuiteConfig;
}
