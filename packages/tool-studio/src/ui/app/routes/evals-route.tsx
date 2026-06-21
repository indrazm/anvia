import { Suspense } from "react";
import { PageLoading } from "../app-pages";
import { EvalsContainer } from "../modules/evals/evals-container";
import { useActivatedRoute } from "./route-helpers";

export function EvalsRoute() {
  const studio = useActivatedRoute("evals");
  return (
    <Suspense fallback={<PageLoading />}>
      <EvalsContainer
        evals={studio.evals}
        enabled={studio.evalsEnabled}
        onError={studio.setError}
        onStatus={studio.setStatus}
      />
    </Suspense>
  );
}
