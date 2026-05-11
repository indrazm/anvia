import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  StudioAgentKnowledgeConfig,
  StudioKnowledgeItem,
  StudioKnowledgeItemsPage,
  StudioKnowledgeSourceKind,
  StudioKnowledgeSourceSummary,
  StudioKnowledgeSummary,
} from "../../../../types";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { JsonValueView } from "../shared/renderers";

const itemLimit = 50;

type KnowledgeSourceRef = {
  key: string;
  agentId: string;
  agentName: string;
  source: StudioKnowledgeSourceSummary;
};

type ItemState = {
  key: string;
  loading: boolean;
  items: StudioKnowledgeItem[];
  nextCursor?: string;
  totalCount?: number;
  inspectable: boolean;
  message?: string;
  error?: string;
};

export function KnowledgePage(props: {
  enabled: boolean;
  summary: StudioKnowledgeSummary | undefined;
  loading: boolean;
  onOpenTrace: (traceId: string) => void;
  onRefresh: () => void;
}) {
  const [selectedKey, setSelectedKey] = useState("");
  const [itemState, setItemState] = useState<ItemState | undefined>();

  const agents = props.summary?.agents ?? [];
  const evidence = props.summary?.evidence ?? [];
  const sources = useMemo(() => flattenSources(agents), [agents]);
  const selectedSource = sources.find((source) => source.key === selectedKey) ?? sources[0];
  const metrics = useMemo(
    () => knowledgeMetrics(agents, evidence.length),
    [agents, evidence.length],
  );

  useEffect(() => {
    if (sources.length === 0) {
      setSelectedKey("");
      return;
    }
    if (sources.some((source) => source.key === selectedKey)) {
      return;
    }
    const next =
      sources.find(
        (source) => source.source.inspectable === true && (source.source.itemCount ?? 0) > 0,
      ) ??
      sources.find((source) => source.source.inspectable === true) ??
      sources[0];
    setSelectedKey(next?.key ?? "");
  }, [selectedKey, sources]);

  const loadItems = useCallback(
    async (source: KnowledgeSourceRef, options: { append: boolean; cursor?: string }) => {
      setItemState((current) => ({
        key: source.key,
        loading: true,
        inspectable:
          current?.key === source.key ? current.inspectable : source.source.inspectable === true,
        items: options.append && current?.key === source.key ? current.items : [],
        ...(options.append && current?.key === source.key && current.nextCursor !== undefined
          ? { nextCursor: current.nextCursor }
          : {}),
        ...(current?.key === source.key && current.totalCount !== undefined
          ? { totalCount: current.totalCount }
          : {}),
      }));

      try {
        const params = new URLSearchParams({
          agentId: source.agentId,
          sourceId: sourceId(source.source),
          limit: String(itemLimit),
        });
        if (options.cursor !== undefined) {
          params.set("cursor", options.cursor);
        }
        const response = await fetch(`/knowledge/items?${params.toString()}`);
        if (!response.ok) {
          throw new Error(`Knowledge items failed with HTTP ${response.status}`);
        }
        const page = (await response.json()) as StudioKnowledgeItemsPage;
        setItemState((current) => ({
          key: source.key,
          loading: false,
          inspectable: page.inspectable,
          items:
            options.append && current?.key === source.key
              ? [...current.items, ...page.items]
              : page.items,
          ...(page.nextCursor === undefined ? {} : { nextCursor: page.nextCursor }),
          ...(page.totalCount === undefined ? {} : { totalCount: page.totalCount }),
          ...(page.message === undefined ? {} : { message: page.message }),
        }));
      } catch (error) {
        setItemState((current) => ({
          key: source.key,
          loading: false,
          inspectable: current?.inspectable ?? false,
          items: current?.items ?? [],
          error: error instanceof Error ? error.message : String(error),
        }));
      }
    },
    [],
  );

  useEffect(() => {
    if (selectedSource === undefined) {
      setItemState(undefined);
      return;
    }
    void loadItems(selectedSource, { append: false });
  }, [loadItems, selectedSource]);

  if (!props.enabled) {
    return (
      <EmptyState
        title="Knowledge unavailable"
        text="No registered agent exposes inspectable context."
      />
    );
  }

  return (
    <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-background/45">
      <header className="flex min-h-16 items-center justify-between gap-3 border-b border-border/80 bg-card/70 px-6 shadow-sm">
        <div className="min-w-0">
          <h1 className="m-0 text-sm font-semibold text-foreground">Knowledge</h1>
          <p className="m-0 text-xs font-medium text-muted-foreground">
            Browse configured context, dynamic chunks, tools, and retrieval evidence.
          </p>
        </div>
        <Button
          className="h-8 min-h-8 gap-2"
          type="button"
          variant="secondary"
          onClick={props.onRefresh}
        >
          <RefreshCw aria-hidden="true" />
          Refresh
        </Button>
      </header>
      <div className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-4 overflow-hidden p-6">
        <MetricStrip metrics={metrics} />
        <div className="grid min-h-0 gap-4 xl:grid-cols-[320px_minmax(0,1fr)_420px]">
          <SourceList
            sources={sources}
            selectedKey={selectedSource?.key ?? ""}
            loading={props.loading}
            onSelect={setSelectedKey}
          />
          <ItemBrowser
            source={selectedSource}
            state={itemState}
            onLoadMore={() => {
              if (selectedSource === undefined) {
                return;
              }
              void loadItems(
                selectedSource,
                itemState?.nextCursor === undefined
                  ? { append: true }
                  : { append: true, cursor: itemState.nextCursor },
              );
            }}
          />
          <EvidencePanel evidence={evidence} onOpenTrace={props.onOpenTrace} />
        </div>
      </div>
    </section>
  );
}

function MetricStrip(props: { metrics: Array<[string, string]> }) {
  return (
    <div className="grid border-y border-border/80 sm:grid-cols-5">
      {props.metrics.map(([label, value]) => (
        <div
          className="border-b border-border/80 px-4 py-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
          key={label}
        >
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </div>
          <div className="mt-1 font-mono text-sm font-semibold text-foreground">{value}</div>
        </div>
      ))}
    </div>
  );
}

function SourceList(props: {
  sources: KnowledgeSourceRef[];
  selectedKey: string;
  loading: boolean;
  onSelect: (key: string) => void;
}) {
  return (
    <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden border border-border/80 bg-card/45">
      <div className="border-b border-border/80 px-4 py-3">
        <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Sources
        </div>
        <p className="m-0 mt-1 text-xs leading-5 text-muted-foreground">
          Browseable sources show chunks directly. Search-only sources still appear in evidence.
        </p>
      </div>
      <div className="min-h-0 overflow-auto p-2">
        {props.loading && props.sources.length === 0 ? <MutedRow text="Loading sources" /> : null}
        {!props.loading && props.sources.length === 0 ? (
          <MutedRow text="No knowledge sources" />
        ) : null}
        {props.sources.map((source) => (
          <button
            className={[
              "grid w-full gap-2 border border-transparent px-3 py-3 text-left transition duration-200 hover:border-primary/35 hover:bg-primary/10",
              props.selectedKey === source.key ? "border-primary/45 bg-primary/10" : "",
            ].join(" ")}
            key={source.key}
            type="button"
            onClick={() => props.onSelect(source.key)}
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-foreground">
                  {source.source.label ?? sourceLabel(source.source.kind)}
                </div>
                <div className="truncate font-mono text-[11px] font-medium text-muted-foreground">
                  {source.agentName}
                </div>
              </div>
              <Badge variant={source.source.inspectable === true ? "success" : "default"}>
                {source.source.inspectable === true ? "Browse" : "Search"}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>{sourceLabel(source.source.kind)}</Badge>
              {source.source.itemCount === undefined ? null : (
                <Badge>{source.source.itemCount} items</Badge>
              )}
              {source.source.topK === undefined ? null : <Badge>Top {source.source.topK}</Badge>}
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

function ItemBrowser(props: {
  source: KnowledgeSourceRef | undefined;
  state: ItemState | undefined;
  onLoadMore: () => void;
}) {
  const state = props.state;
  return (
    <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden border border-border/80 bg-card/35">
      <div className="border-b border-border/80 px-4 py-3">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="m-0 truncate text-sm font-semibold text-foreground">
              {props.source?.source.label ?? "Knowledge items"}
            </h2>
            <p className="m-0 mt-1 truncate font-mono text-xs text-muted-foreground">
              {props.source === undefined
                ? "No source selected"
                : `${props.source.agentId} / ${sourceId(props.source.source)}`}
            </p>
          </div>
          {state?.totalCount === undefined ? null : <Badge>{state.totalCount} total</Badge>}
        </div>
      </div>
      <div className="min-h-0 overflow-auto p-4">
        {props.source === undefined ? <MutedRow text="No knowledge source selected" /> : null}
        {state?.loading === true && state.items.length === 0 ? (
          <MutedRow text="Loading items" />
        ) : null}
        {state?.error === undefined ? null : <MutedRow text={state.error} />}
        {state?.inspectable === false ? (
          <MutedRow text={state.message ?? "This source does not expose browseable chunks."} />
        ) : null}
        {state?.inspectable !== false && state?.loading === false && state.items.length === 0 ? (
          <MutedRow text="No items in this source" />
        ) : null}
        <div className="grid gap-3">
          {state?.items.map((item) => (
            <KnowledgeItemCard item={item} key={`${item.kind}:${item.id}`} />
          ))}
        </div>
      </div>
      <div className="flex min-h-12 items-center justify-between gap-3 border-t border-border/80 px-4 py-2">
        <span className="font-mono text-[11px] text-muted-foreground">
          {state === undefined ? "0 loaded" : `${state.items.length} loaded`}
        </span>
        <Button
          className="h-8 min-h-8"
          type="button"
          variant="secondary"
          disabled={state?.loading === true || state?.nextCursor === undefined}
          onClick={props.onLoadMore}
        >
          Load more
        </Button>
      </div>
    </section>
  );
}

function KnowledgeItemCard(props: { item: StudioKnowledgeItem }) {
  return (
    <article className="grid gap-3 border border-border/80 bg-background/55 p-4">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate font-mono text-xs font-semibold text-primary">
            {props.item.toolName ?? props.item.id}
          </div>
          <div className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {itemKindLabel(props.item.kind)}
          </div>
        </div>
        {props.item.parameterKeys === undefined || props.item.parameterKeys.length === 0 ? null : (
          <Badge>{props.item.parameterKeys.length} params</Badge>
        )}
      </div>
      {props.item.description === undefined || props.item.description.length === 0 ? null : (
        <p className="m-0 text-sm leading-6 text-muted-foreground [overflow-wrap:anywhere]">
          {props.item.description}
        </p>
      )}
      {props.item.text === undefined ? null : (
        <p className="m-0 whitespace-pre-wrap text-sm leading-6 text-foreground [overflow-wrap:anywhere]">
          {props.item.text}
        </p>
      )}
      {props.item.document === undefined ? null : (
        <JsonBlock title="Document" value={props.item.document} />
      )}
      {props.item.metadata === undefined ? null : (
        <JsonBlock title="Metadata" value={props.item.metadata} />
      )}
      {props.item.parameterKeys === undefined || props.item.parameterKeys.length === 0 ? null : (
        <div className="flex flex-wrap gap-2">
          {props.item.parameterKeys.map((key) => (
            <Badge key={key}>{key}</Badge>
          ))}
        </div>
      )}
    </article>
  );
}

function EvidencePanel(props: {
  evidence: NonNullable<StudioKnowledgeSummary["evidence"]>;
  onOpenTrace: (traceId: string) => void;
}) {
  return (
    <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden border border-border/80 bg-card/35">
      <div className="border-b border-border/80 px-4 py-3">
        <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Recent evidence
        </div>
        <p className="m-0 mt-1 text-xs leading-5 text-muted-foreground">
          Runtime retrieval and dynamic tool signals captured in traces.
        </p>
      </div>
      <div className="min-h-0 overflow-auto p-3">
        {props.evidence.length === 0 ? (
          <MutedRow text="No retrieval evidence captured yet" />
        ) : null}
        <div className="grid gap-3">
          {props.evidence.map((item) => (
            <article
              className="grid gap-3 border border-border/80 bg-background/45 p-3"
              key={`${item.traceId}:${item.observationId}`}
            >
              <div className="flex min-w-0 items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-foreground">
                    {item.observationName}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                    Turn {item.turn}
                  </div>
                </div>
                <Button
                  className="h-auto min-h-0 rounded-sm border border-border bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  type="button"
                  variant="ghost"
                  onClick={() => props.onOpenTrace(item.traceId)}
                >
                  Trace
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>{item.documentCount} docs</Badge>
                <Badge>{item.toolCount} tools</Badge>
              </div>
              {item.query === undefined ? null : (
                <p className="m-0 text-sm leading-6 text-muted-foreground [overflow-wrap:anywhere]">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                    Query
                  </span>{" "}
                  {item.query}
                </p>
              )}
              {item.documents.slice(0, 2).map((document) => (
                <p
                  className="m-0 text-xs leading-5 text-muted-foreground [overflow-wrap:anywhere]"
                  key={`${document.id ?? "doc"}:${document.text ?? ""}`}
                >
                  <span className="font-mono text-foreground">{document.id ?? "document"}</span>{" "}
                  {document.text ?? ""}
                </p>
              ))}
              {item.tools.length === 0 ? null : (
                <p className="m-0 text-xs leading-5 text-muted-foreground">
                  Tools: {item.tools.join(", ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

function JsonBlock(props: { title: string; value: unknown }) {
  return (
    <div className="grid gap-2 border-t border-border/70 pt-3">
      <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {props.title}
      </div>
      <JsonValueView value={props.value} />
    </div>
  );
}

function EmptyState(props: { title: string; text: string }) {
  return (
    <section className="grid h-full place-items-center p-8">
      <div className="grid max-w-sm gap-2 text-center">
        <h1 className="m-0 text-base font-semibold text-foreground">{props.title}</h1>
        <p className="m-0 text-sm font-medium leading-6 text-muted-foreground">{props.text}</p>
      </div>
    </section>
  );
}

function MutedRow(props: { text: string }) {
  return (
    <div className="rounded-sm border border-dashed border-border px-4 py-3 text-sm font-medium text-muted-foreground">
      {props.text}
    </div>
  );
}

function flattenSources(agents: StudioAgentKnowledgeConfig[]): KnowledgeSourceRef[] {
  return agents.flatMap((agent) =>
    agent.sources.map((source, index) => ({
      key: `${agent.agentId}:${sourceId(source, index)}`,
      agentId: agent.agentId,
      agentName: agent.agentName ?? agent.agentId,
      source: withSourceId(source, index),
    })),
  );
}

function withSourceId(
  source: StudioKnowledgeSourceSummary,
  index: number,
): StudioKnowledgeSourceSummary {
  return source.sourceId === undefined
    ? { ...source, sourceId: fallbackSourceId(source, index) }
    : source;
}

function sourceId(source: StudioKnowledgeSourceSummary, index = 0): string {
  return source.sourceId ?? fallbackSourceId(source, index);
}

function fallbackSourceId(source: StudioKnowledgeSourceSummary, index: number): string {
  switch (source.kind) {
    case "static_context":
      return "static-context";
    case "dynamic_context":
      return `dynamic-context-${source.registrationIndex ?? index}`;
    case "dynamic_tools":
      return `dynamic-tools-${source.registrationIndex ?? index}`;
  }
}

function knowledgeMetrics(
  agents: StudioAgentKnowledgeConfig[],
  evidenceCount: number,
): Array<[string, string]> {
  const sources = agents.flatMap((agent) => agent.sources);
  return [
    ["Agents", String(agents.length)],
    ["Static docs", String(sumKind(sources, "static_context"))],
    [
      "Dynamic context",
      String(sources.filter((source) => source.kind === "dynamic_context").length),
    ],
    ["Dynamic tools", String(sources.filter((source) => source.kind === "dynamic_tools").length)],
    ["Evidence", String(evidenceCount)],
  ];
}

function sumKind(sources: StudioKnowledgeSourceSummary[], kind: StudioKnowledgeSourceKind): number {
  return sources
    .filter((source) => source.kind === kind)
    .reduce((total, source) => total + (source.itemCount ?? source.count), 0);
}

function sourceLabel(kind: StudioKnowledgeSourceKind): string {
  switch (kind) {
    case "static_context":
      return "Static context";
    case "dynamic_context":
      return "Dynamic context";
    case "dynamic_tools":
      return "Dynamic tools";
  }
}

function itemKindLabel(kind: StudioKnowledgeItem["kind"]): string {
  switch (kind) {
    case "static_context":
      return "Static context";
    case "dynamic_context":
      return "Dynamic context";
    case "dynamic_tool":
      return "Dynamic tool";
  }
}
