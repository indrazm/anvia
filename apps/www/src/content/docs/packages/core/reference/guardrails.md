---
title: "Guardrails"
description: "Experimental policy APIs for input and output guardrails."
section: packages
sidebar:
  group: "Reference"
  order: 8
  label: "Guardrails"
---
Import from `@anvia/core` or `@anvia/core/guardrails`.

Guardrails are an experimental policy layer for the text boundaries around an agent run.
They are not prompt instructions. They run in product code and can allow, block, or
rewrite user input and final assistant output.

Guardrails do not replace product authorization, idempotency, audit records, service-level
validation, or tool approvals. Tools and services still own product permissions and
business state. Use guardrails to control text that enters the model and text that leaves
the model.

## defineGuardrailPolicy

```ts
type GuardrailMode = "enforce" | "observe";

type GuardrailPolicyOptions = {
  id: string;
  mode?: GuardrailMode;
  input?: InputGuardrail[];
  output?: OutputGuardrail[];
};

function defineGuardrailPolicy(options: GuardrailPolicyOptions): GuardrailPolicy;
```

Purpose: group input and output guardrails into a policy that can be attached to an agent
or prompt request.

Return behavior: missing `mode` defaults to `"enforce"`. Agent-level policies run before
request-level policies. In `"observe"` mode, decisions are recorded but do not block or
rewrite.

## Guardrail Factories

```ts
function defineInputGuardrail(options: {
  id: string;
  check(ctx: InputGuardrailContext, actions: InputGuardrailActions): InputGuardrailResult | Promise<InputGuardrailResult>;
}): InputGuardrail;

function defineOutputGuardrail(options: {
  id: string;
  check(ctx: OutputGuardrailContext, actions: OutputGuardrailActions): OutputGuardrailResult | Promise<OutputGuardrailResult>;
}): OutputGuardrail;
```

Purpose: create typed checks for the supported runtime boundaries.

Return behavior: `check(ctx, actions)` receives pure context data plus injected actions:
`allow()`, `block(...)`, and `rewrite(...)`.

## Boundary Order

```txt
input -> model and tools -> output
```

- input guardrails run before memory and model work
- output guardrails run before final response return, final stream event, and final assistant memory commit

When enforced output guardrails are active during streaming, text and reasoning deltas are
buffered so unsafe raw output is not emitted before the final output is checked.

Tool execution is not guarded by this API. Use tool approvals, hooks, middleware, and
service-level validation for tool behavior.

## Example

```ts
import {
  AgentBuilder,
  defineGuardrailPolicy,
  defineInputGuardrail,
  defineOutputGuardrail,
} from "@anvia/core";

const redactInput = defineInputGuardrail({
  id: "redact-card-numbers",
  check(ctx, { allow, rewrite }) {
    const inputText = ctx.inputText.replace(/\b\d{16}\b/g, "[redacted]");
    return inputText === ctx.inputText
      ? allow()
      : rewrite({ inputText, reason: "card_number_redacted" });
  },
});

const redactOutput = defineOutputGuardrail({
  id: "redact-output-secrets",
  check(ctx, { allow, rewrite }) {
    const outputText = ctx.outputText.replace(/sk-[a-z0-9]+/gi, "[redacted]");
    return outputText === ctx.outputText
      ? allow()
      : rewrite({ outputText, reason: "secret_redacted" });
  },
});

const policy = defineGuardrailPolicy({
  id: "support-production",
  input: [redactInput],
  output: [redactOutput],
});

const agent = new AgentBuilder("support", model)
  .tools(supportTools)
  .guardrails(policy)
  .build();
```

## Built-In Text Helpers

```ts
guardrails.blockText({
  id: "block-internal-ids",
  boundary: "input",
  patterns: [/internal_[a-z0-9]+/i],
  reason: "internal_id_detected",
  message: "Remove internal identifiers before sending.",
});

guardrails.redactText({
  id: "redact-output-secret",
  boundary: "output",
  patterns: [/token=[^\s]+/gi],
  replacement: "token=[redacted]",
  reason: "secret_redacted",
});
```

Purpose: deterministic pattern-based blocking and redaction for input and output
boundaries.

## Decisions

```ts
type GuardrailDecisionRecord = {
  policyId: string;
  guardrailId: string;
  boundary: "input" | "output";
  mode: "enforce" | "observe";
  action: "allow" | "block" | "rewrite" | "error";
  applied: boolean;
  reason?: string;
  message?: string;
  metadata?: JsonObject;
  latencyMs: number;
};
```

Return behavior: prompt responses and final stream events include
`guardrails?: GuardrailDecisionRecord[]`. Streams also emit `guardrail_decision` events.
Observers receive `guardrail.decision` events.

## Advanced Exported Types

These symbols are exported for integration packages, tests, and advanced composition. App
code should usually use `defineGuardrailPolicy(...)`, the boundary factories, and injected
`actions`.

```ts
type GuardrailBoundary = "input" | "output";
type GuardrailRunContext = { agentId: string; runId: string; sessionId?: string; metadata?: JsonObject };
type GuardrailPolicy = unknown;
type GuardrailPolicyInput = GuardrailPolicy | GuardrailPolicy[];
type GuardrailPolicyOptions = unknown;

type GuardrailActionName = "allow" | "block" | "rewrite" | "error";
type GuardrailActionBase = { reason?: string; metadata?: JsonObject };
type GuardrailAllow = GuardrailActionBase & { action: "allow" };
type GuardrailBlock = GuardrailActionBase & { action: "block"; reason: string; message?: string };
type GuardrailCommonActions = { allow(...): GuardrailAllow; block(...): GuardrailBlock };

type InputGuardrail = unknown;
type InputGuardrailContext = unknown;
type InputGuardrailActions = GuardrailCommonActions & { rewrite(...): InputGuardrailRewrite };
type InputGuardrailResult = GuardrailAllow | GuardrailBlock | InputGuardrailRewrite;
type InputGuardrailRewrite = GuardrailActionBase & { action: "rewrite"; prompt?: Message; inputText?: string };
type InputGuardrailRunResult = unknown;

type OutputGuardrail = unknown;
type OutputGuardrailContext = unknown;
type OutputGuardrailActions = GuardrailCommonActions & { rewrite(...): OutputGuardrailRewrite };
type OutputGuardrailResult = GuardrailAllow | GuardrailBlock | OutputGuardrailRewrite;
type OutputGuardrailRewrite = GuardrailActionBase & { action: "rewrite"; outputText: string };
type OutputGuardrailRunResult = unknown;
```

```ts
function allow(...): GuardrailAllow;
function block(...): GuardrailBlock;
function normalizeGuardrailPolicies(...): GuardrailPolicy[];
function appendGuardrailPolicies(...): GuardrailPolicy[];
function hasEnforcedOutputGuardrails(...): boolean;
function runInputGuardrails(...): Promise<InputGuardrailRunResult>;
function runOutputGuardrails(...): Promise<OutputGuardrailRunResult>;
```
