---
"@anvia/core": patch
---

Remove experimental tool and tool-result guardrails. Guardrail policies now cover input and final output boundaries only; use tool approvals, hooks, middleware, and service-level validation for tool execution behavior.
