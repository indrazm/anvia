---
title: Gateway caveats
description: Validate gateway provider metadata before enabling model traffic.
section: providers
sidebar:
  group: LLM Gateway
  order: 5
---

The gateway snapshot is discovery data. It helps you find provider endpoints and model metadata, but it does not prove that a provider/model pair is safe for your production workflow.

## Capability Drift

Providers can change model ids, endpoint behavior, context windows, pricing, tool support, structured output behavior, and streaming chunks. A model listed with tool support can still fail a specific tool workflow because provider-specific tool choice or argument streaming behaves differently.

Run capability smoke tests against the exact endpoint, account, region, model id, and provider parameters you plan to use.

## URL And Credential Shape

Some API URLs include placeholders such as `${CLOUDFLARE_ACCOUNT_ID}` or `${SNOWFLAKE_ACCOUNT}`. Resolve those in typed server config before constructing provider clients.

The docs list environment variable names from the snapshot, but Anvia does not read those variables for you. Pass credentials explicitly to provider clients.

## Pricing And Freshness

Pricing fields are copied from `models.dev` when available. Treat them as informational. For billing decisions, check the provider's current pricing page and your account-level contract.

The snapshot date appears on gateway pages. Refresh the snapshot when provider inventory matters for a release.

## Production Checks

For each enabled provider/model pair, test:

- direct completion
- streaming and final events
- tool calling and required tool choice
- structured output when schemas are required
- image, document, audio, or video inputs when used
- provider-specific reasoning or safety params
- model listing, if your admin UI depends on it

Keep a product-owned allowlist of enabled provider/model pairs. Model listing and gateway catalog data are useful inputs, not the allowlist itself.

## Error Mapping

Provider SDK errors and gateway errors can contain endpoint details, request ids, provider payloads, or billing/account information. Map those failures at your runner boundary before returning responses to users.

Logs and traces can keep provider id, model id, endpoint category, status code, and trace id. User-facing responses should not expose raw provider errors.
