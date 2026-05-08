import type { StudioAgentToolsSummary, StudioConfig } from "../../../../types";
import { Badge } from "../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { cn } from "../../lib/utils";
import { JsonValueView } from "../shared/renderers";

export function ToolsPage(props: {
  agents: StudioConfig["agents"];
  selectedAgentId: string;
  summary: StudioAgentToolsSummary | undefined;
  enabled: boolean;
  loading: boolean;
  onSelectAgent: (agentId: string) => void;
}) {
  const selectedAgent =
    props.agents.find((agent) => agent.id === props.selectedAgentId) ?? props.agents[0];
  const tools = props.summary?.tools ?? [];

  return (
    <section
      className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden"
      aria-label="Tools"
    >
      <header className="grid min-h-18 border-b border-border bg-card px-5 py-4">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3">
          <div className="grid min-w-0 gap-1">
            <h1 className="m-0 text-sm font-semibold text-foreground">Tools</h1>
            <p className="m-0 text-xs font-medium text-muted-foreground">
              Tool definitions registered on Studio agents
            </p>
          </div>
          {props.agents.length > 1 ? (
            <Select value={selectedAgent?.id ?? ""} onValueChange={props.onSelectAgent}>
              <SelectTrigger className="h-8 min-h-8 w-56 rounded-sm border-border bg-background font-mono text-xs">
                <SelectValue placeholder="Agent" />
              </SelectTrigger>
              <SelectContent align="end">
                {props.agents.map((agent) => (
                  <SelectItem value={agent.id} key={agent.id}>
                    {agent.name ?? agent.id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}
        </div>
      </header>

      <div className="min-h-0 overflow-auto">
        {!props.enabled ? (
          <EmptyState
            title="Tools unavailable"
            message="No registered Studio agent exposes static or dynamic tools."
          />
        ) : props.loading ? (
          <EmptyState title="Loading tools" message="Reading registered tool metadata." />
        ) : tools.length === 0 ? (
          <EmptyState title="No tools" message="The selected agent has no registered tools." />
        ) : (
          <div className="min-w-260 border-b border-border bg-card">
            <div className="grid min-h-10 grid-cols-[minmax(220px,0.9fr)_minmax(300px,1.2fr)_150px_150px_minmax(360px,1.4fr)] items-center gap-4 border-b border-border px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span>Tool</span>
              <span>Description</span>
              <span>Source</span>
              <span>Approval</span>
              <span>Parameters</span>
            </div>
            {tools.map((tool) => (
              <div
                className="grid min-h-18 grid-cols-[minmax(220px,0.9fr)_minmax(300px,1.2fr)_150px_150px_minmax(360px,1.4fr)] items-start gap-4 border-b border-border px-5 py-3 text-muted-foreground"
                key={`${tool.source}:${tool.name}`}
              >
                <span className="grid min-w-0 gap-0.5">
                  <strong className="min-w-0 truncate text-sm font-medium text-foreground">
                    {tool.name}
                  </strong>
                  <span className="min-w-0 truncate font-mono text-xs font-medium text-muted-foreground">
                    {tool.agentId}
                  </span>
                </span>
                <p className="m-0 min-w-0 text-sm leading-6 text-muted-foreground">
                  {tool.description}
                </p>
                <span className="flex min-w-0 flex-wrap gap-1.5">
                  <Badge className={sourceBadgeClass(tool.source)}>{tool.source}</Badge>
                </span>
                <span className="grid min-w-0 gap-1.5">
                  <Badge
                    className={cn(
                      "w-fit",
                      tool.approval.required
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-muted text-muted-foreground",
                    )}
                  >
                    {tool.approval.required ? "required" : "none"}
                  </Badge>
                  {tool.approval.reason === undefined ? null : (
                    <span className="text-xs leading-5 text-muted-foreground">
                      {tool.approval.reason}
                    </span>
                  )}
                </span>
                <span className="min-w-0 overflow-hidden text-xs text-muted-foreground">
                  <JsonValueView value={tool.parameters} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState(props: { title: string; message: string }) {
  return (
    <div className="grid min-h-80 place-items-center px-6 text-center">
      <div className="grid max-w-md gap-2">
        <h2 className="m-0 text-sm font-semibold text-foreground">{props.title}</h2>
        <p className="m-0 text-sm leading-6 text-muted-foreground">{props.message}</p>
      </div>
    </div>
  );
}

function sourceBadgeClass(source: "static" | "dynamic"): string {
  return source === "dynamic"
    ? "border-primary/30 bg-primary/10 text-primary"
    : "border-border bg-muted text-muted-foreground";
}
