import { useEffect, useRef } from "react";
import type { StudioSessionLogEntry } from "../../../../types";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";

export function SessionLogsPanel(props: {
  logs: StudioSessionLogEntry[];
  selectedSessionId: string;
  loading: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    const node = scrollerRef.current;
    if (node === null || !stickToBottomRef.current) {
      return;
    }
    node.scrollTop = node.scrollHeight;
  });

  function updateStickiness() {
    const node = scrollerRef.current;
    if (node === null) {
      return;
    }
    stickToBottomRef.current = node.scrollHeight - node.scrollTop - node.clientHeight < 24;
  }

  return (
    <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] border-l border-border bg-background max-xl:hidden">
      <header className="grid min-h-12 gap-1 border-b border-border px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <h2 className="m-0 text-sm font-semibold leading-tight text-foreground">Session logs</h2>
          <Badge className="font-mono text-[10px] uppercase">{props.logs.length}</Badge>
        </div>
        <p className="m-0 truncate font-mono text-[11px] font-medium text-muted-foreground">
          {props.selectedSessionId.length === 0 ? "No active session" : props.selectedSessionId}
        </p>
      </header>
      <div
        className="min-h-0 overflow-auto px-3 py-3"
        ref={scrollerRef}
        onScroll={updateStickiness}
      >
        {props.selectedSessionId.length === 0 ? (
          <div className="grid h-full min-h-80 place-items-center text-center text-sm font-medium text-muted-foreground">
            Start or open a session to view runtime logs.
          </div>
        ) : null}
        {props.selectedSessionId.length > 0 && props.loading && props.logs.length === 0 ? (
          <div className="px-2 py-3 text-sm font-medium text-muted-foreground">Loading logs</div>
        ) : null}
        {props.selectedSessionId.length > 0 && !props.loading && props.logs.length === 0 ? (
          <div className="px-2 py-3 text-sm font-medium text-muted-foreground">No logs yet</div>
        ) : null}
        <div className="grid gap-2">
          {props.logs.map((log) => (
            <LogRow log={log} key={log.id} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function LogRow(props: { log: StudioSessionLogEntry }) {
  const metadata = Object.entries(props.log.metadata ?? {}).slice(0, 6);
  return (
    <article
      className={cn(
        "grid gap-2 border-l-2 bg-card px-3 py-2 text-xs shadow-sm",
        levelBorderClass(props.log.level),
      )}
    >
      <div className="flex min-w-0 items-start justify-between gap-2">
        <div className="grid min-w-0 gap-1">
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <Badge
              className={cn("font-mono text-[10px] uppercase", levelBadgeClass(props.log.level))}
            >
              {props.log.level}
            </Badge>
            <span className="min-w-0 truncate font-mono text-[11px] font-semibold text-muted-foreground">
              {props.log.category}/{props.log.event}
            </span>
          </div>
          <p className="m-0 text-sm font-medium leading-5 text-foreground">{props.log.message}</p>
        </div>
        <time className="shrink-0 font-mono text-[10px] font-medium tabular-nums text-muted-foreground">
          {formatLogTime(props.log.timestamp)}
        </time>
      </div>
      {metadata.length === 0 ? null : (
        <div className="flex min-w-0 flex-wrap gap-1">
          {metadata.map(([key, value]) => (
            <span
              className="max-w-full truncate rounded-sm border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground"
              key={key}
              title={`${key}: ${formatMetadata(value)}`}
            >
              {key}={formatMetadata(value)}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function formatLogTime(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatMetadata(value: unknown): string {
  if (value === null) {
    return "null";
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (Array.isArray(value)) {
    return `[${value.length}]`;
  }
  if (typeof value === "object" && value !== null) {
    return "{...}";
  }
  return "";
}

function levelBorderClass(level: StudioSessionLogEntry["level"]): string {
  switch (level) {
    case "error":
      return "border-destructive";
    case "warn":
      return "border-yellow-500";
    case "debug":
      return "border-muted-foreground/45";
    case "info":
      return "border-primary/70";
  }
}

function levelBadgeClass(level: StudioSessionLogEntry["level"]): string {
  switch (level) {
    case "error":
      return "border-destructive/40 bg-destructive/15 text-destructive";
    case "warn":
      return "border-yellow-500/40 bg-yellow-500/15 text-yellow-500";
    case "debug":
      return "border-border bg-muted text-muted-foreground";
    case "info":
      return "border-primary/40 bg-primary/15 text-primary";
  }
}
