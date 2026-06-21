import { useEffect } from "react";
import type { ActivePage, KnowledgeTab } from "../modules/shared/types";
import { useStudioConsole } from "../studio-console-context";

export function useActivatedRoute(page: ActivePage) {
  const studio = useStudioConsole();
  const { activateRoute } = studio;
  useEffect(() => {
    activateRoute(page);
  }, [activateRoute, page]);
  return studio;
}

export function knowledgeTabFromRoute(tab: string | undefined): KnowledgeTab {
  switch (tab) {
    case "dynamic-context":
    case "dynamic-tools":
    case "retrieval-log":
    case "static-context":
      return tab;
    default:
      return "static-context";
  }
}
