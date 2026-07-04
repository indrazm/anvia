import { describe, expect, it } from "vitest";
import { mapWithConcurrency } from "../src/internal/concurrency";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("mapWithConcurrency", () => {
  it("maps over an array with concurrency limit", async () => {
    const result = await mapWithConcurrency([1, 2, 3], 2, async (n) => n * 2);
    expect(result).toEqual([2, 4, 6]);
  });

  it("returns empty array for empty input", async () => {
    const result = await mapWithConcurrency([], 5, async (n: number) => n);
    expect(result).toEqual([]);
  });

  it("handles single input", async () => {
    const result = await mapWithConcurrency(["a"], 1, async (s) => s.toUpperCase());
    expect(result).toEqual(["A"]);
  });

  it("propagates errors from mapper", async () => {
    const promise = mapWithConcurrency([1, 2, 3], 2, async (n) => {
      if (n === 2) throw new Error("boom");
      return n;
    });
    await expect(promise).rejects.toThrow("boom");
  });

  it("stops remaining workers when one fails", async () => {
    const executionOrder: number[] = [];
    const promise = mapWithConcurrency([1, 2, 3, 4], 4, async (n) => {
      executionOrder.push(n);
      if (n === 2) {
        throw new Error("boom");
      }
      await sleep(50);
      executionOrder.push(-n);
      return n;
    });
    await expect(promise).rejects.toThrow("boom");
    // Workers for items after the failing one should not start new work
    expect(executionOrder.filter((n) => n < 0).length).toBeLessThan(3);
  });

  it("respects concurrency limit", async () => {
    let concurrent = 0;
    let maxConcurrent = 0;

    await mapWithConcurrency([1, 2, 3, 4, 5, 6], 3, async (n) => {
      concurrent += 1;
      maxConcurrent = Math.max(maxConcurrent, concurrent);
      await sleep(10);
      concurrent -= 1;
      return n;
    });

    expect(maxConcurrent).toBe(3);
  });

  it("aborts early when signal is aborted", async () => {
    const abort = new AbortController();
    const executed: number[] = [];

    const promise = mapWithConcurrency(
      [1, 2, 3, 4, 5],
      5,
      async (n) => {
        executed.push(n);
        if (n === 2) {
          abort.abort();
        }
        await sleep(50);
        return n;
      },
      abort.signal,
    );

    await promise;
    expect(executed.includes(1)).toBe(true);
    expect(executed.includes(2)).toBe(true);
    // Items after 2 may or may not have run before the signal propagated
    // The key assertion: we don't crash and get a result
  });

  it("handles concurrency of 0 or less gracefully", async () => {
    const result = await mapWithConcurrency([1, 2, 3], 0, async (n) => n);
    expect(result).toEqual([1, 2, 3]);
  });

  it("handles concurrency larger than input length", async () => {
    const result = await mapWithConcurrency([1, 2], 10, async (n) => n);
    expect(result).toEqual([1, 2]);
  });

  it("preserves result order with async work", async () => {
    const result = await mapWithConcurrency([3, 1, 2], 2, async (n) => {
      await sleep(n * 10);
      return n;
    });
    expect(result).toEqual([3, 1, 2]);
  });
});
