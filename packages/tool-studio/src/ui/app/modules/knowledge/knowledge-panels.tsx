import type { StudioKnowledgeItem, StudioKnowledgeSummary } from "../../../../types";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { JsonValueView } from "../shared/renderers";
import {
  type ItemState,
  itemKindLabel,
  type KnowledgeSourceRef,
  sourceId,
} from "./knowledge-model";

export function ItemBrowser(props: {
  source: KnowledgeSourceRef | undefined;
  state: ItemState | undefined;
  onLoadMore: () => void;
}) {
  const state = props.state;
  return (
    <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-xl border border-border/80 bg-card/55">
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
      <div className="min-h-0 overflow-auto">
        <div className="p-4">
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
      </div>
      <div className="flex min-h-12 items-center justify-between gap-3 bg-muted/10 px-4 py-2">
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
    <article className="grid gap-3 rounded-xl border border-border/80 bg-background/55 p-4">
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

export function RetrievalLogPanel(props: {
  evidence: NonNullable<StudioKnowledgeSummary["evidence"]>;
  onOpenTrace: (traceId: string) => void;
}) {
  return (
    <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-xl border border-border/80 bg-card/55">
      <div className="border-b border-border/80 px-4 py-3">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="m-0 truncate text-sm font-semibold text-foreground">Retrieval log</h2>
            <p className="m-0 mt-1 truncate font-mono text-xs text-muted-foreground">
              traces / retrieval-evidence
            </p>
          </div>
          <Badge>{props.evidence.length} entries</Badge>
        </div>
      </div>
      <div className="min-h-0 overflow-auto p-4">
        {props.evidence.length === 0 ? (
          <MutedRow text="No retrieval evidence captured yet" />
        ) : null}
        <div className="grid gap-3">
          {props.evidence.map((item) => (
            <article
              className="grid gap-3 rounded-xl border border-border/80 bg-background/45 p-3"
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
                  className="h-auto min-h-0 rounded-lg border border-border bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground"
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
    </section>
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

export function EmptyState(props: { title: string; text: string }) {
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
    <div className="rounded-lg border border-dashed border-border px-4 py-3 text-sm font-medium text-muted-foreground">
      {props.text}
    </div>
  );
}
