import { Suspense } from "react";
import { PageLoading, SessionsPage } from "../app-pages";
import { useActivatedRoute } from "./route-helpers";

export function SessionsRoute() {
  const studio = useActivatedRoute("sessions");

  return (
    <Suspense fallback={<PageLoading />}>
      <SessionsPage
        agents={studio.agents}
        sessions={studio.sessions.allSessions}
        sessionsEnabled={studio.sessionsEnabled}
        sessionLoadState={studio.sessions.sessionLoadState}
        selectedSessionId={studio.sessions.selectedSessionId}
        onOpenSession={(sessionId) => void studio.sessions.loadSession(sessionId)}
        onViewSessionTracing={(sessionId) => void studio.traces.showSessionTraces(sessionId)}
        onDeleteSession={studio.setDeleteCandidate}
      />
    </Suspense>
  );
}
