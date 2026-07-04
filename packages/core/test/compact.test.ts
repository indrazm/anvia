import { describe, expect, it } from "vitest";
import { compact, isRecord } from "../src/internal/compact";

describe("compact", () => {
  it("removes undefined values", () => {
    const result = compact({ a: 1, b: undefined, c: "hello" });
    expect(result).toEqual({ a: 1, c: "hello" });
  });

  it("preserves null values", () => {
    const result = compact({ a: 1, b: null, c: "hello" });
    expect(result).toEqual({ a: 1, b: null, c: "hello" });
  });

  it("preserves falsy values other than undefined", () => {
    const result = compact({ a: 0, b: false, c: "", d: NaN });
    expect(result).toEqual({ a: 0, b: false, c: "", d: NaN });
  });

  it("returns empty object when all values are undefined", () => {
    const result = compact({ a: undefined, b: undefined });
    expect(result).toEqual({});
  });

  it("returns empty object for empty input", () => {
    const result = compact({});
    expect(result).toEqual({});
  });

  it("preserves nested objects", () => {
    const nested = { x: 1, y: "hello" };
    const result = compact({ a: nested, b: undefined });
    expect(result).toEqual({ a: nested });
  });

  it("preserves arrays", () => {
    const result = compact({ a: [1, 2, 3], b: undefined });
    expect(result).toEqual({ a: [1, 2, 3] });
  });

  it("does not mutate the input", () => {
    const input = { a: 1, b: undefined, c: "hello" };
    compact(input);
    expect(input).toEqual({ a: 1, b: undefined, c: "hello" });
  });
});

describe("isRecord", () => {
  it("returns true for plain objects", () => {
    expect(isRecord({})).toBe(true);
    expect(isRecord({ a: 1 })).toBe(true);
  });

  it("returns false for null", () => {
    expect(isRecord(null)).toBe(false);
  });

  it("returns false for arrays", () => {
    expect(isRecord([])).toBe(false);
    expect(isRecord([1, 2, 3])).toBe(false);
  });

  it("returns false for primitives", () => {
    expect(isRecord("hello")).toBe(false);
    expect(isRecord(42)).toBe(false);
    expect(isRecord(true)).toBe(false);
    expect(isRecord(undefined)).toBe(false);
  });
});
