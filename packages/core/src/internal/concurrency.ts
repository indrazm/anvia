export async function mapWithConcurrency<Input, Output>(
  inputs: Input[],
  concurrency: number,
  mapper: (input: Input) => Promise<Output>,
): Promise<Output[]> {
  const limit = Math.max(1, Math.trunc(concurrency));
  const results = new Array<Output>(inputs.length);
  let nextIndex = 0;

  async function worker(): Promise<void> {
    while (nextIndex < inputs.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(inputs[index] as Input);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, inputs.length) }, () => worker()));
  return results;
}
