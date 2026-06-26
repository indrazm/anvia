---
title: Examples
description: Copyable examples that combine Anvia packages into working flows.
section: examples
sidebar:
  group: Getting started
  order: 0
---

Examples are task-focused recipes for building complete Anvia flows. They sit after Basics, Advanced, and Providers: use those guides to understand the concepts, then use Examples when you want a concrete application pattern to adapt.

The Getting started and Tools groups now contain runnable recipes adapted from the cookbook examples. The remaining groups reserve the full route structure for later recipe passes.

## Getting started
- [Text call](/docs/examples/text-call): Call a model once and print a text response.
- [Conversation memory](/docs/examples/conversation-memory): Use session memory for multi-turn conversation context.
- [Static context](/docs/examples/static-context): Attach stable context to a request before introducing retrieval.
- [Stream text](/docs/examples/stream-text): Stream incremental text from a model response.
- [Readable stream JSONL](/docs/examples/readable-stream-jsonl): Expose streamed events as newline-delimited JSON.
- [Session memory](/docs/examples/session-memory): Preserve useful conversation state across turns.
- [Server React transport](/docs/examples/server-react-transport): Connect a server-side agent route to a React client.

## Tools
- [Tool call](/docs/examples/tool-call): Let an agent call one typed application tool.
- [Tool stream events](/docs/examples/tool-stream-events): Observe tool calls while an agent response is streaming.
- [Hooks and tool concurrency](/docs/examples/hooks-and-tool-concurrency): Coordinate tool execution with runtime hooks and concurrency limits.
- [Conditional tool](/docs/examples/conditional-tool): Expose a tool only when request context allows it.
- [Think tool](/docs/examples/think-tool): Add a deliberate reasoning checkpoint as a tool pattern.
- [Tool closure context](/docs/examples/tool-closure-context): Give a tool access to request-local application context.
- [Tool call with memory](/docs/examples/tool-call-with-memory): Use session memory after a tool-backed turn.
- [Tool permission hook](/docs/examples/tool-permission-hook): Gate sensitive tool execution with approval logic.
- [Dynamic tools](/docs/examples/dynamic-tools): Build a request-specific tool catalog.
- [Tool result middleware](/docs/examples/tool-result-middleware): Transform or redact tool outputs before the model sees them.
- [Docker sandbox](/docs/examples/docker-sandbox): Run command or file tools in an isolated sandbox.

## Structured output

Planned recipes:

- [Structured extraction](/docs/examples/structured-extraction): Extract typed data from free-form text.
- [Output schema](/docs/examples/output-schema): Constrain a model response to an application schema.
- [Extraction with history](/docs/examples/extraction-with-history): Use conversation history while returning structured data.

## Providers and media

Planned recipes:

- [Gemini text call](/docs/examples/gemini-text-call): Run a text call with the Gemini provider package.
- [Mistral text call](/docs/examples/mistral-text-call): Run a text call with the Mistral provider package.
- [Model capabilities](/docs/examples/model-capabilities): Check model capabilities before using advanced features.
- [Rich reasoning content](/docs/examples/rich-reasoning-content): Handle richer reasoning and content parts from model responses.
- [Image attachment](/docs/examples/image-attachment): Send image input to a multimodal model.
- [PDF attachment](/docs/examples/pdf-attachment): Send document input to a model that supports files.
- [OpenAI image generation](/docs/examples/openai-image-generation): Generate images with the OpenAI provider package.
- [OpenAI audio and transcription](/docs/examples/openai-audio-and-transcription): Use OpenAI audio generation and transcription flows.
- [Gemini image and transcription](/docs/examples/gemini-image-and-transcription): Use Gemini media generation and transcription flows.
- [List models](/docs/examples/list-models): List provider models and inspect available model metadata.
- [Anthropic text call](/docs/examples/anthropic-text-call): Run a text call with the Anthropic provider package.
- [Provider switching](/docs/examples/provider-switching): Swap providers while keeping core application flow stable.

## Pipelines

Planned recipes:

- [Step transform](/docs/examples/step-transform): Build a pipeline step that transforms input into output.
- [Async step](/docs/examples/async-step): Run asynchronous work inside a pipeline step.
- [Compose pipelines](/docs/examples/compose-pipelines): Connect multiple pipeline steps into a reusable workflow.
- [Named parallel](/docs/examples/named-parallel): Run named branches in parallel and merge their outputs.
- [Batch run](/docs/examples/batch-run): Run the same workflow across many inputs.
- [Agent pipeline](/docs/examples/agent-pipeline): Use an agent as one step inside a larger pipeline.
- [Extractor pipeline](/docs/examples/extractor-pipeline): Use structured extraction as a pipeline stage.
- [Research pipeline](/docs/examples/research-pipeline): Coordinate search, synthesis, and final reporting steps.
- [Financial market analysis](/docs/examples/financial-market-analysis): Model a domain-specific analysis workflow as a pipeline.
- [Zod schema input](/docs/examples/zod-schema-input): Validate pipeline input with a Zod schema.

## Retrieval

Planned recipes:

- [Embed and search](/docs/examples/embed-and-search): Embed records and search for relevant matches.
- [Filters and LSH](/docs/examples/filters-and-lsh): Combine retrieval filters with locality-sensitive hashing.
- [OpenRouter RAG](/docs/examples/openrouter-rag): Run a RAG-style flow through an OpenAI-compatible gateway.
- [Document loaders](/docs/examples/document-loaders): Load source documents before embedding or retrieval.
- [RAG search tool](/docs/examples/rag-search-tool): Expose retrieval as an agent tool.
- [ChromaDB vector store](/docs/examples/chromadb-vector-store): Use ChromaDB as the retrieval store.
- [Qdrant vector store](/docs/examples/qdrant-vector-store): Use Qdrant as the retrieval store.
- [pgvector store](/docs/examples/pgvector-store): Use Postgres and pgvector as the retrieval store.
- [Local MiniLM RAG](/docs/examples/local-minilm-rag): Run retrieval with a local MiniLM embedding path.
- [FastEmbed RAG](/docs/examples/fastembed-rag): Run retrieval with FastEmbed embeddings.
- [Mistral embeddings RAG](/docs/examples/mistral-embeddings-rag): Use Mistral embeddings in a retrieval workflow.
- [Milvus vector store](/docs/examples/milvus-vector-store): Use Milvus as the retrieval store.
- [Pinecone vector store](/docs/examples/pinecone-vector-store): Use Pinecone as the retrieval store.

## Multi-agent

Planned recipes:

- [Agent as tool](/docs/examples/agent-as-tool): Expose a specialist agent as a callable tool.
- [Parallel specialists](/docs/examples/parallel-specialists): Run multiple specialist agents in parallel.
- [Streaming agent tools](/docs/examples/streaming-agent-tools): Stream events from nested agent tool calls.
- [Agent event store](/docs/examples/agent-event-store): Persist agent events for replay and inspection.

## Evaluations

Planned recipes:

- [Basic metrics](/docs/examples/basic-metrics): Score outputs with simple deterministic metrics.
- [Semantic similarity](/docs/examples/semantic-similarity): Compare outputs using semantic similarity.
- [Custom metrics](/docs/examples/custom-metrics): Define domain-specific evaluation metrics.
- [Agent eval target](/docs/examples/agent-eval-target): Evaluate a complete agent run as the target.
- [LLM judge and score](/docs/examples/llm-judge-and-score): Use a judge model to score qualitative output.

## Studio

Planned recipes:

- [Single agent](/docs/examples/single-agent): Register one local agent for Studio inspection.
- [Multi-agent Studio](/docs/examples/multi-agent): Register multiple agents in Studio.
- [Studio tool approval](/docs/examples/studio-tool-approval): Inspect and approve tool calls through Studio.
- [Ask question](/docs/examples/ask-question): Let an agent request human input during a run.
- [Knowledge inspector](/docs/examples/knowledge-inspector): Inspect knowledge and retrieval context in Studio.
- [Subagents](/docs/examples/subagents): Inspect nested or specialist agents in Studio.
- [Pipeline inspector](/docs/examples/pipeline-inspector): Inspect pipeline runs in Studio.
- [Multiple pipelines](/docs/examples/multiple-pipelines): Register multiple pipelines for local inspection.
- [Inspection surfaces](/docs/examples/inspection-surfaces): Compare the available Studio inspection views.
- [Persistent store](/docs/examples/persistent-store): Back Studio inspection with durable storage.
- [Eval runner](/docs/examples/eval-runner): Run evaluation workflows through Studio.
- [UI options](/docs/examples/ui-options): Tune Studio UI options for local development.
- [Multi-provider models](/docs/examples/multi-provider-models): Inspect agents that use multiple providers.

## Integrations

Planned recipes:

- [MCP tools](/docs/examples/mcp-tools): Connect MCP tools to an agent workflow.
- [Local skills](/docs/examples/local-skills): Load local skill instructions into an agent flow.
- [Langfuse tracing](/docs/examples/langfuse-tracing): Send Anvia run telemetry to Langfuse.
- [Langfuse eval reporting](/docs/examples/langfuse-eval-reporting): Report evaluation results through Langfuse.
- [OTel tracing](/docs/examples/otel-tracing): Send tracing data through OpenTelemetry.
- [Agent logging](/docs/examples/agent-logging): Record agent runtime activity in application logs.
- [Console logging](/docs/examples/console-logging): Use console logging for local agent debugging.
- [Observability overview](/docs/examples/observability): Connect logs, traces, and evals into one debugging workflow.

## Recipe standard

Each finished recipe includes runnable code, required packages or services, environment variables, expected behavior, failure notes where relevant, and links back to the deeper docs pages that explain the underlying behavior.
