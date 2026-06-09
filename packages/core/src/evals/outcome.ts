import type { EvalMetadata } from "./types";

export type EvalOutcome<Score = unknown> =
  | {
      outcome: "pass";
      score?: Score | undefined;
      comment?: string | undefined;
      metadata?: EvalMetadata | undefined;
    }
  | {
      outcome: "fail";
      score?: Score | undefined;
      comment?: string | undefined;
      metadata?: EvalMetadata | undefined;
    }
  | {
      outcome: "invalid";
      reason: string;
      score?: Score | undefined;
      comment?: string | undefined;
      metadata?: EvalMetadata | undefined;
    };

export const EvalOutcome = {
  pass<Score>(
    score?: Score,
    options: { comment?: string | undefined; metadata?: EvalMetadata | undefined } = {},
  ): EvalOutcome<Score> {
    return {
      outcome: "pass",
      ...(score === undefined ? {} : { score }),
      ...(options.comment === undefined ? {} : { comment: options.comment }),
      ...(options.metadata === undefined ? {} : { metadata: options.metadata }),
    };
  },

  fail<Score>(
    score?: Score,
    options: { comment?: string | undefined; metadata?: EvalMetadata | undefined } = {},
  ): EvalOutcome<Score> {
    return {
      outcome: "fail",
      ...(score === undefined ? {} : { score }),
      ...(options.comment === undefined ? {} : { comment: options.comment }),
      ...(options.metadata === undefined ? {} : { metadata: options.metadata }),
    };
  },

  invalid<Score = never>(
    reason: string,
    options: {
      score?: Score | undefined;
      comment?: string | undefined;
      metadata?: EvalMetadata | undefined;
    } = {},
  ): EvalOutcome<Score> {
    return {
      outcome: "invalid",
      reason,
      ...(options.score === undefined ? {} : { score: options.score }),
      ...(options.comment === undefined ? {} : { comment: options.comment }),
      ...(options.metadata === undefined ? {} : { metadata: options.metadata }),
    };
  },
};
