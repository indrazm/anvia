import { describe, expect, it } from "vitest";
import * as publicAgent from "../src/agent";
import * as publicCore from "../src/index";
import * as internalAgent from "../src/internal/agent";

describe("public exports", () => {
  it("exposes AgentBuilder from the public entrypoints", () => {
    expect("AgentBuilder" in publicCore).toBe(true);
    expect("AgentBuilder" in publicAgent).toBe(true);
  });

  it("keeps runtime Agent out of public entrypoints", () => {
    expect("Agent" in publicCore).toBe(false);
    expect("Agent" in publicAgent).toBe(false);
  });

  it("exposes runtime Agent through the internal agent entrypoint", () => {
    expect("Agent" in internalAgent).toBe(true);
  });
});
