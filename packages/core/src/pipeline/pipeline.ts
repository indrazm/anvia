import type { JsonObject } from "../completion";
import { mapWithConcurrency } from "../internal/concurrency";
import { cloneGraph, initialGraph } from "./graph";
import type {
  PipelineBatchOptions,
  PipelineExecutor,
  PipelineGraph,
  PipelineOp,
  PipelineRunOptions,
} from "./types";

/** Runnable pipeline returned by `PipelineBuilder.build()`. */
export class Pipeline<Input, Output> implements PipelineOp<Input, Awaited<Output>> {
  readonly id: string;
  readonly name: string | undefined;
  readonly description: string | undefined;
  readonly metadata: JsonObject | undefined;

  constructor(
    private readonly executor: PipelineExecutor<Input, Output>,
    private readonly pipelineGraph: PipelineGraph = initialGraph({}),
  ) {
    this.id = pipelineGraph.id;
    this.name = pipelineGraph.name;
    this.description = pipelineGraph.description;
    this.metadata = pipelineGraph.metadata;
  }

  /** Run one input through the built pipeline and return the final stage output. */
  async run(input: Input, options: PipelineRunOptions = {}): Promise<Awaited<Output>> {
    return (await this.executor(input, { observer: options.observer })) as Awaited<Output>;
  }

  /** Run many inputs through the same pipeline with bounded concurrency. */
  async batch<I extends Iterable<Input>>(
    inputs: I,
    options: PipelineBatchOptions,
  ): Promise<Array<Awaited<Output>>> {
    return mapWithConcurrency([...inputs], options.concurrency, (input) => this.run(input));
  }

  graph(): PipelineGraph {
    return cloneGraph(this.pipelineGraph);
  }
}
