import { Suspense } from "react";
import { AgentsPage, PageLoading } from "../app-pages";
import { useActivatedRoute } from "./route-helpers";

export function AgentsRoute() {
  const studio = useActivatedRoute("agents");
  return (
    <Suspense fallback={<PageLoading />}>
      <AgentsPage agents={studio.agents} selectedAgentId={studio.selectedAgentId} />
    </Suspense>
  );
}
