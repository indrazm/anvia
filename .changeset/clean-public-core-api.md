---
"@anvia/core": minor
"@anvia/fastembed": minor
"@anvia/transformers": minor
"@anvia/logger": minor
"@anvia/langfuse": minor
"@anvia/otel": minor
"@anvia/anthropic": minor
"@anvia/gemini": minor
"@anvia/mistral": minor
"@anvia/openai": minor
"@anvia/react": minor
"@anvia/server": minor
"@anvia/studio": minor
"@anvia/chroma": minor
"@anvia/pgvector": minor
"@anvia/qdrant": minor
---

Clean up the `@anvia/core` public import surface by keeping common app-authoring APIs on the root export, moving advanced APIs to focused subpaths, and exposing runtime agent internals through `@anvia/core/internal/agent` for Anvia integration packages.
