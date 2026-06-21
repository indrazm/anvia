import { Suspense } from "react";
import { PageLoading, StatusPage } from "../app-pages";
import { useActivatedRoute } from "./route-helpers";

export function StatusRoute() {
  const studio = useActivatedRoute("status");
  return (
    <Suspense fallback={<PageLoading />}>
      <StatusPage enabled={studio.statusEnabled} />
    </Suspense>
  );
}
