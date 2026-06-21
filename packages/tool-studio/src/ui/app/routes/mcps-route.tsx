import { Suspense } from "react";
import { PageLoading } from "../app-pages";
import { McpsContainer } from "../modules/inspectors/inspectors-containers";
import { useActivatedRoute } from "./route-helpers";

export function McpsRoute() {
  const studio = useActivatedRoute("mcps");
  return (
    <Suspense fallback={<PageLoading />}>
      <McpsContainer
        active
        agents={studio.agents}
        enabled={studio.mcpsEnabled}
        selectedAgentId={studio.selectedAgent?.id || studio.selectedAgentId}
        onError={studio.setError}
      />
    </Suspense>
  );
}
