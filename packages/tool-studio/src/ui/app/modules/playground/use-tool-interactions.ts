import { useState } from "react";
import { errorMessage } from "../shared/format";
import type { ToolApprovalUpdate, ToolQuestionUpdate } from "../shared/types";

export function useToolInteractions(props: {
  onError: (message: string) => void;
  onToolApprovalUpdate: (approval: ToolApprovalUpdate) => void;
  onToolQuestionUpdate: (question: ToolQuestionUpdate) => void;
}) {
  const [decidingApprovals, setDecidingApprovals] = useState<Set<string>>(() => new Set());
  const [answeringQuestions, setAnsweringQuestions] = useState<Set<string>>(() => new Set());

  async function decideToolApproval(approvalId: string, approved: boolean) {
    if (decidingApprovals.has(approvalId)) {
      return;
    }

    setDecidingApprovals((current) => new Set(current).add(approvalId));
    props.onError("");
    try {
      const response = await fetch(`/approvals/${encodeURIComponent(approvalId)}/decision`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ approved }),
      });
      if (!response.ok) {
        throw new Error(`Approval decision failed with HTTP ${response.status}`);
      }
      props.onToolApprovalUpdate(await response.json());
    } catch (decisionError) {
      props.onError(errorMessage(decisionError));
    } finally {
      setDecidingApprovals((current) => {
        const next = new Set(current);
        next.delete(approvalId);
        return next;
      });
    }
  }

  async function answerToolQuestion(
    questionId: string,
    answers: Array<{ questionId: string; answer: string; choice?: string; custom?: boolean }>,
  ) {
    if (answeringQuestions.has(questionId)) {
      return;
    }

    setAnsweringQuestions((current) => new Set(current).add(questionId));
    props.onError("");
    try {
      const response = await fetch(`/questions/${encodeURIComponent(questionId)}/answer`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!response.ok) {
        throw new Error(`Question answer failed with HTTP ${response.status}`);
      }
      props.onToolQuestionUpdate(await response.json());
    } catch (answerError) {
      props.onError(errorMessage(answerError));
    } finally {
      setAnsweringQuestions((current) => {
        const next = new Set(current);
        next.delete(questionId);
        return next;
      });
    }
  }

  return {
    answeringQuestions,
    decidingApprovals,
    answerToolQuestion,
    decideToolApproval,
  };
}
