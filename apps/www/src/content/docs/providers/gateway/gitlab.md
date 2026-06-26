---
title: "GitLab Duo"
description: "Review GitLab Duo connection details and model capabilities."
section: providers
sidebar:
  group: LLM Gateway
  order: 1045
  label: "GitLab Duo"
---

## Connection

| Field | Value |
| --- | --- |
| Anvia SDK | No dedicated package |
| Compatibility | Provider metadata |
| API URL | Not listed in models.dev |
| Environment | `GITLAB_TOKEN` |
| Provider docs | [https://docs.gitlab.com/user/duo_agent_platform/](https://docs.gitlab.com/user/duo_agent_platform/) |
| Models | 17 |

## Anvia Usage

Anvia does not currently ship a dedicated provider package for this endpoint. Use the connection details here for evaluation, then build a custom integration against `@anvia/core` completion contracts if you need to run it today.

## Capabilities

| Capability | Value |
| --- | --- |
| Input modalities | image, pdf, text |
| Output modalities | text |
| Attachments | 16 / 17 models |
| Tools | 17 / 17 models |
| Structured output | 10 / 17 models |
| Reasoning | 17 / 17 models |
| Temperature | 5 / 17 models |
| Open weights | 0 / 17 models |

## Models

| Model | Family | Input | Output | Capabilities | Limits | Cost | Updated |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `duo-chat-gpt-5-1`<br />Agentic Chat (GPT-5.1) | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-01-22 |
| `duo-chat-gpt-5-2`<br />Agentic Chat (GPT-5.2) | gpt | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-01-23 |
| `duo-chat-gpt-5-2-codex`<br />Agentic Chat (GPT-5.2 Codex) | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-01-22 |
| `duo-chat-gpt-5-3-codex`<br />Agentic Chat (GPT-5.3 Codex) | gpt-codex | image, pdf, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-02-05 |
| `duo-chat-gpt-5-4`<br />Agentic Chat (GPT-5.4) | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 0 / output: 0 | 2026-03-05 |
| `duo-chat-gpt-5-4-mini`<br />Agentic Chat (GPT-5.4 Mini) | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-03-17 |
| `duo-chat-gpt-5-4-nano`<br />Agentic Chat (GPT-5.4 Nano) | gpt-nano | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-03-17 |
| `duo-chat-gpt-5-5`<br />Agentic Chat (GPT-5.5) | gpt | image, pdf, text | text | tools, schema, reasoning | context: 1050000 / input: 922000 / output: 128000 | input: 0 / output: 0 | 2026-04-23 |
| `duo-chat-gpt-5-codex`<br />Agentic Chat (GPT-5 Codex) | gpt-codex | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-01-22 |
| `duo-chat-gpt-5-mini`<br />Agentic Chat (GPT-5 Mini) | gpt-mini | image, text | text | tools, schema, reasoning | context: 400000 / input: 272000 / output: 128000 | input: 0 / output: 0 | 2026-01-22 |
| `duo-chat-haiku-4-5`<br />Agentic Chat (Claude Haiku 4.5) | claude-haiku | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-08 |
| `duo-chat-opus-4-5`<br />Agentic Chat (Claude Opus 4.5) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-08 |
| `duo-chat-opus-4-6`<br />Agentic Chat (Claude Opus 4.6) | claude-opus | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-05 |
| `duo-chat-opus-4-7`<br />Agentic Chat (Claude Opus 4.7) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-04-16 |
| `duo-chat-opus-4-8`<br />Agentic Chat (Claude Opus 4.8) | claude-opus | image, pdf, text | text | tools, reasoning | context: 1000000 / output: 128000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-05-28 |
| `duo-chat-sonnet-4-5`<br />Agentic Chat (Claude Sonnet 4.5) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 200000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-01-08 |
| `duo-chat-sonnet-4-6`<br />Agentic Chat (Claude Sonnet 4.6) | claude-sonnet | image, pdf, text | text | tools, reasoning, temperature | context: 1000000 / output: 64000 | input: 0 / output: 0 / cache_read: 0 / cache_write: 0 | 2026-02-17 |

Read [Gateway caveats](/docs/providers/gateway-caveats) before enabling this provider in production.

