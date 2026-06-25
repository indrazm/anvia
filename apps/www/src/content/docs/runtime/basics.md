---
title: Basics
description: Learn the core runtime concepts used across Anvia applications.
section: runtime
sidebar:
  group: Product
  order: 1
---

Anvia separates provider adapters, runtime behavior, retrieval, tools, tracing, and UI transports.

## Runtime

The runtime coordinates a request from input to final output. It is the stable surface your application talks to.

## Providers

Provider packages translate Anvia runtime requests into model-specific API calls.

## Transports

Transports move runtime output into the product surface, such as server-sent events or framework-specific UI helpers.
