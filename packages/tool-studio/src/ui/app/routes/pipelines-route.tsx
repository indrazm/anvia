import { Suspense } from "react";
import { PageLoading } from "../app-pages";
import { PipelinesContainer } from "../modules/pipelines/pipelines-container";
import { useActivatedRoute } from "./route-helpers";

export function PipelinesRoute() {
  const studio = useActivatedRoute("pipelines");
  return (
    <Suspense fallback={<PageLoading />}>
      <PipelinesContainer
        active
        pipelines={studio.pipelines}
        enabled={studio.pipelinesEnabled}
        theme={studio.theme}
        onError={studio.setError}
        onStatus={studio.setStatus}
      />
    </Suspense>
  );
}
