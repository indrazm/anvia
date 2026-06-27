---
title: Eval Loop
description: Target-adapter patterns for evaluating completions, streams, agents, and product runners.
section: examples
sidebar:
  group: Quality and Operations
  order: 3
---

Eval loops turn expected product behavior into repeatable checks. `runEvalSuite(...)` accepts any async target, so the common pattern is to adapt the behavior you want to measure into a small output shape, then run deterministic metrics over that shape.

Use LLM judges only when deterministic checks cannot express the behavior. Start with exact fields, required text, forbidden text, event types, tool names, citation ids, and schema values.

## Scenario

Support behavior must be evaluated across several runtime shapes:

- one direct answer from `createCompletion(...)`
- one typed classification from `createParsedCompletion(...)`
- streaming event behavior from `createCompletionStream(...)`
- a reusable agent request
- the production runner that includes auth, retrieval, tools, traces, and response mapping

## Flow

| Check | First metric |
| --- | --- |
| required policy facts | `contains(...)` |
| labels, booleans, ids, and schema fields | `exactMatch(...)` |
| forbidden claims or data leaks | custom deterministic metric |
| stream contract | custom deterministic metric over event types |
| tool choice and citations | custom deterministic metric over runner output/events |
| nuanced writing quality | LLM judge only after deterministic coverage exists |

## Shared Cases

```ts
import type { EvalCase } from "@anvia/core/evals";

type SupportEvalInput = {
  conversationId: string;
  message: string;
};

type SupportEvalExpected = {
  requiredText: string;
  expectedTool?: string;
  requiredCitation?: string;
  forbiddenText?: string;
};

type SupportEvalOutput = {
  answer: string;
  toolCalls: string[];
  citations: string[];
  eventTypes?: string[];
  usage?: unknown;
  traceId?: string;
};

const supportCases = [
  {
    id: "refund-policy-with-order",
    input: {
      conversationId: "eval_refund_1",
      message: "Can I refund order A-100?",
    },
    expected: {
      requiredText: "refund",
      expectedTool: "lookup_order",
      requiredCitation: "refund-policy",
      forbiddenText: "other customer",
    },
    metadata: {
      release: process.env.RELEASE_ID,
      promptVersion: "support-v4",
    },
  },
  {
    id: "missing-order-id",
    input: {
      conversationId: "eval_refund_2",
      message: "Can I get a refund?",
    },
    expected: {
      requiredText: "order",
      forbiddenText: "processed",
    },
  },
] satisfies Array<EvalCase<SupportEvalInput, SupportEvalExpected>>;
```

Keep cases small and incident-shaped. A broad conversation that checks five behaviors should usually become five cases.

## Deterministic Metrics

```ts
import { defineMetric, EvalOutcome } from "@anvia/core/evals";

const avoidsForbiddenText = defineMetric<
  SupportEvalInput,
  SupportEvalOutput,
  boolean,
  SupportEvalExpected
>({
  name: "avoids_forbidden_text",
  evaluate({ output, case: testCase }) {
    const forbiddenText = testCase.expected?.forbiddenText;

    if (forbiddenText === undefined) {
      return EvalOutcome.pass(true);
    }

    return output.answer.includes(forbiddenText)
      ? EvalOutcome.fail(false, { comment: `Output included ${forbiddenText}.` })
      : EvalOutcome.pass(true);
  },
});

const calledExpectedTool = defineMetric<
  SupportEvalInput,
  SupportEvalOutput,
  boolean,
  SupportEvalExpected
>({
  name: "called_expected_tool",
  evaluate({ output, case: testCase }) {
    const expectedTool = testCase.expected?.expectedTool;

    if (expectedTool === undefined) {
      return output.toolCalls.length === 0
        ? EvalOutcome.pass(true)
        : EvalOutcome.fail(false, { comment: "Unexpected tool call." });
    }

    return output.toolCalls.includes(expectedTool)
      ? EvalOutcome.pass(true)
      : EvalOutcome.fail(false, { comment: `Missing ${expectedTool}.` });
  },
});

const citedExpectedSource = defineMetric<
  SupportEvalInput,
  SupportEvalOutput,
  boolean,
  SupportEvalExpected
>({
  name: "cited_expected_source",
  evaluate({ output, case: testCase }) {
    const requiredCitation = testCase.expected?.requiredCitation;

    if (requiredCitation === undefined) {
      return EvalOutcome.pass(true);
    }

    return output.citations.includes(requiredCitation)
      ? EvalOutcome.pass(true)
      : EvalOutcome.fail(false, { comment: `Missing citation ${requiredCitation}.` });
  },
});
```

## Direct Completion Target

Use this shape when you want to evaluate a single provider-neutral model call:

```ts
import { createCompletion } from "@anvia/core";

const SUPPORT_ANSWER_INSTRUCTIONS =
  "Answer support questions from policy. Ask for missing account details before making account-specific claims.";

async function answerSupportQuestion(input: SupportEvalInput): Promise<SupportEvalOutput> {
  const result = await createCompletion(model, {
    input: input.message,
    instructions: SUPPORT_ANSWER_INSTRUCTIONS,
  });

  return {
    answer: result.text,
    toolCalls: [],
    citations: [],
    usage: result.usage,
  };
}
```

Run deterministic metrics over the normalized target output:

```ts
import { contains, runEvalSuite } from "@anvia/core/evals";

const result = await runEvalSuite({
  name: "support-answer-regression",
  cases: supportCases,
  target: answerSupportQuestion,
  metrics: [
    contains<SupportEvalInput, SupportEvalOutput, SupportEvalExpected>({
      actual: ({ output }) => output.answer,
      expected: ({ case: testCase }) => testCase.expected?.requiredText,
    }),
    avoidsForbiddenText,
  ],
  reporters: [evalReporter],
});
```

## Parsed Completion Target

Use parsed completions when the behavior is a typed classification or extraction. The eval can check fields directly:

```ts
import { createParsedCompletion } from "@anvia/core";
import { exactMatch, runEvalSuite } from "@anvia/core/evals";
import { z } from "zod";

const CLASSIFY_TICKET_INSTRUCTIONS =
  "Classify the support ticket. Return only the requested structured fields.";

type TicketClassificationInput = {
  ticket: string;
};

type TicketClassificationOutput = {
  category: "billing" | "checkout" | "shipping" | "other";
  severity: "low" | "normal" | "high";
};

type TicketClassificationExpected = {
  category: TicketClassificationOutput["category"];
  severity: TicketClassificationOutput["severity"];
};

const classificationCases = [
  {
    id: "billing-owner-update",
    input: { ticket: "Only workspace owners should be able to change billing." },
    expected: { category: "billing", severity: "normal" },
  },
] satisfies Array<EvalCase<TicketClassificationInput, TicketClassificationExpected>>;

async function classifyTicket(
  input: TicketClassificationInput,
): Promise<TicketClassificationOutput> {
  const result = await createParsedCompletion(model, {
    input: input.ticket,
    instructions: CLASSIFY_TICKET_INSTRUCTIONS,
    schema: z.object({
      category: z.enum(["billing", "checkout", "shipping", "other"]),
      severity: z.enum(["low", "normal", "high"]),
    }),
  });

  return result.data;
}

await runEvalSuite({
  name: "ticket-classification",
  cases: classificationCases,
  target: classifyTicket,
  metrics: [
    exactMatch<
      TicketClassificationInput,
      TicketClassificationOutput,
      TicketClassificationExpected
    >({
      name: "category",
      actual: ({ output }) => output.category,
      expected: ({ case: testCase }) => testCase.expected?.category,
    }),
    exactMatch<
      TicketClassificationInput,
      TicketClassificationOutput,
      TicketClassificationExpected
    >({
      name: "severity",
      actual: ({ output }) => output.severity,
      expected: ({ case: testCase }) => testCase.expected?.severity,
    }),
  ],
});
```

## Completion Stream Target

Streaming evals should usually check the stream contract, not only the final text:

```ts
import { createCompletionStream } from "@anvia/core";
import { textFromAssistantContent } from "@anvia/core/completion";
import { defineMetric, EvalOutcome, runEvalSuite } from "@anvia/core/evals";

const STREAMING_SUPPORT_INSTRUCTIONS =
  "Answer support questions clearly and stream progress as text deltas when available.";

async function streamSupportAnswer(input: SupportEvalInput): Promise<SupportEvalOutput> {
  const eventTypes: string[] = [];
  let answer = "";

  for await (const event of createCompletionStream(model, {
    input: input.message,
    instructions: STREAMING_SUPPORT_INSTRUCTIONS,
  })) {
    eventTypes.push(event.type);

    if (event.type === "text_delta") {
      answer += event.delta;
    }

    if (event.type === "final" && answer.length === 0) {
      answer = textFromAssistantContent(event.response.choice);
    }
  }

  return {
    answer,
    eventTypes,
    toolCalls: [],
    citations: [],
  };
}

const emittedFinalEvent = defineMetric<
  SupportEvalInput,
  SupportEvalOutput,
  boolean,
  SupportEvalExpected
>({
  name: "emitted_final_event",
  evaluate({ output }) {
    return output.eventTypes?.includes("final") === true
      ? EvalOutcome.pass(true)
      : EvalOutcome.fail(false, { comment: "Stream did not emit a final event." });
  },
});

await runEvalSuite({
  name: "support-stream-contract",
  cases: supportCases,
  target: streamSupportAnswer,
  metrics: [
    emittedFinalEvent,
    contains<SupportEvalInput, SupportEvalOutput, SupportEvalExpected>({
      actual: ({ output }) => output.answer,
      expected: ({ case: testCase }) => testCase.expected?.requiredText,
    }),
  ],
});
```

## Agent Target

Use `agentEvalTarget(...)` when the eval only needs the agent request result:

```ts
import { agentEvalTarget, contains, runEvalSuite } from "@anvia/core/evals";

const target = agentEvalTarget<SupportEvalInput, SupportEvalOutput>(supportAgent, {
  prompt: (input) => input.message,
  output: (response) => ({
    answer: response.output,
    toolCalls: [],
    citations: [],
    usage: response.usage,
    traceId: response.trace?.traceId,
  }),
});

await runEvalSuite({
  name: "support-agent-answer",
  cases: supportCases,
  target,
  metrics: [
    contains<SupportEvalInput, SupportEvalOutput, SupportEvalExpected>({
      actual: ({ output }) => output.answer,
      expected: ({ case: testCase }) => testCase.expected?.requiredText,
    }),
    avoidsForbiddenText,
  ],
});
```

For conversations, configure the agent with memory and pass the current turn as the prompt string. Do not pass a hand-built history array to `.prompt(...)`.

## Product Runner Target

Use the production runner when the eval must include auth, retrieval filters, scoped tools, memory, traces, and response mapping:

```ts
async function runSupportEvalCase(input: SupportEvalInput) {
  const events: Array<SupportRuntimeEvent> = [];

  const result = await runSupportTurn({
    ...fakeSupportInput(),
    conversationId: input.conversationId,
    message: input.message,
    onEvent: (event) => events.push(event),
  });

  return {
    answer: result.output,
    citations: result.citations.map((citation) => citation.sourceId),
    toolCalls: events
      .filter((event) => event.type === "tool_call")
      .map((event) => event.toolCall.function.name),
  };
}
```

```ts
await runEvalSuite({
  name: "support-runner-regression",
  cases: supportCases,
  target: runSupportEvalCase,
  metrics: [
    contains<SupportEvalInput, SupportEvalOutput, SupportEvalExpected>({
      actual: ({ output }) => output.answer,
      expected: ({ case: testCase }) => testCase.expected?.requiredText,
    }),
    avoidsForbiddenText,
    calledExpectedTool,
    citedExpectedSource,
  ],
  reporters: [evalReporter],
});
```

## Judge Metrics

Use an LLM judge for the cases that cannot be expressed as field checks, string checks, event checks, or tool/citation checks:

```ts
import { llmScore } from "@anvia/core/evals";

const toneScore = llmScore({
  model: judgeModel,
  threshold: 0.8,
  criteria: [
    "The answer is direct and concise.",
    "The answer does not invent policy details beyond the expected facts.",
  ],
});
```

Keep judge coverage narrow and store judge feedback with the case id, release, and prompt version.

## Failure Modes

- Eval cases call a different agent path than production.
- Expected behavior is vague, so failures are ignored.
- Tool-call expectations are not captured.
- Eval results are not connected to release or prompt version.
- LLM judges are used where deterministic checks would be clearer.
- Stream evals assert only the final text and miss broken event contracts.

## Next Patterns

- [Testing Harness](/docs/examples/testing-harness)
- [Observability Loop](/docs/examples/observability-loop)
- [Production Readiness](/docs/examples/production-readiness)
