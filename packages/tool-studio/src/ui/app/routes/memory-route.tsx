import { Suspense } from "react";
import { MemoryPage, PageLoading } from "../app-pages";
import { useActivatedRoute } from "./route-helpers";

export function MemoryRoute() {
  const studio = useActivatedRoute("memory");
  return (
    <Suspense fallback={<PageLoading />}>
      <MemoryPage agents={studio.agents} enabled={studio.memoryEnabled} />
    </Suspense>
  );
}
