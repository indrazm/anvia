import { useState } from "react";
import type { StudioConfig, StudioEvalRunResponse } from "../../../../types";
import { responseErrorMessage } from "../../app-errors";
import { EvalsPage } from "../../app-pages";
import { errorMessage } from "../shared/format";
import type { RunState } from "../shared/types";

export function EvalsContainer(props: {
  enabled: boolean;
  evals: StudioConfig["evals"];
  onError: (message: string) => void;
  onStatus: (status: string) => void;
}) {
  const [selectedEvalId, setSelectedEvalId] = useState("");
  const [evalRunResult, setEvalRunResult] = useState<StudioEvalRunResponse | undefined>();
  const [evalRunState, setEvalRunState] = useState<RunState>("idle");

  async function runEvalSuite() {
    const evalId = selectedEvalId || props.evals[0]?.id || "";
    if (evalId.length === 0 || evalRunState === "running") {
      return;
    }

    setEvalRunState("running");
    setEvalRunResult(undefined);
    props.onError("");
    try {
      const response = await fetch(`/evals/${encodeURIComponent(evalId)}/runs`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error(await responseErrorMessage(response, "Eval run failed"));
      }
      setEvalRunResult((await response.json()) as StudioEvalRunResponse);
      props.onStatus("Connected");
    } catch (runError) {
      props.onError(errorMessage(runError));
    } finally {
      setEvalRunState("idle");
    }
  }

  return (
    <EvalsPage
      evals={props.evals}
      selectedEvalId={selectedEvalId}
      enabled={props.enabled}
      runState={evalRunState}
      result={evalRunResult}
      onSelectEval={(evalId) => {
        setSelectedEvalId(evalId);
        setEvalRunResult(undefined);
      }}
      onRun={() => void runEvalSuite()}
    />
  );
}
