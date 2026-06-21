import { Suspense } from "react";
import { PageLoading } from "../app-pages";
import { ToolsContainer } from "../modules/inspectors/inspectors-containers";
import { useActivatedRoute } from "./route-helpers";

export function ToolsRoute() {
  const studio = useActivatedRoute("tools");
  return (
    <Suspense fallback={<PageLoading />}>
      <ToolsContainer
        active
        agents={studio.agents}
        enabled={studio.toolsEnabled}
        selectedAgentId={studio.selectedAgent?.id || studio.selectedAgentId}
        onError={studio.setError}
      />
    </Suspense>
  );
}
