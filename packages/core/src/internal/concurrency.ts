export async function mapWithConcurrency<Input, Output>(
  inputs: Input[],
  concurrency: number,
  mapper: (input: Input) => Promise<Output>,
  signal?: AbortSignal,
): Promise<Output[]> {
  const limit = Math.max(1, Math.trunc(concurrency));
  if (inputs.length === 0) {
    return [];
  }
  const results = new Array<Output>(inputs.length);
  let nextIndex = 0;
  let rejected = false;

  async function worker(): Promise<void> {
    while (nextIndex < inputs.length && !rejected && !signal?.aborted) {
      const index = nextIndex;
      nextIndex += 1;
      try {
        results[index] = await mapper(inputs[index] as Input);
      } catch (error) {
        rejected = true;
        throw error;
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, inputs.length) }, () => worker()));
  return results;
}
