import {
  AgentBuilder,
  type AgentEventAppendInput,
  type AgentEventRecord,
  type AgentEventStore,
} from "@anvia/core/agent";
import { OpenAIClient } from "@anvia/openai";

class InMemoryAgentEventStore implements AgentEventStore {
  readonly records: AgentEventRecord[] = [];

  async append(input: AgentEventAppendInput): Promise<void> {
    this.records.push({ ...input, createdAt: new Date() });
  }

  async load(runId: string): Promise<AgentEventRecord[]> {
    return this.records.filter((record) => record.runId === runId);
  }

  async clear(runId: string): Promise<void> {
    const remaining = this.records.filter((record) => record.runId !== runId);
    this.records.length = 0;
    this.records.push(...remaining);
  }
}

const client = new OpenAIClient({
  baseUrl: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const model = client.completionModel("deepseek/deepseek-v4-pro");

const supportAgent = new AgentBuilder("support", model)
  .name("Support Specialist")
  .description("Summarize customer impact and support next steps.")
  .instructions("Return compact support triage bullets using only the provided facts.")
  .build();

const eventStore = new InMemoryAgentEventStore();

const coordinator = new AgentBuilder("coordinator", model)
  .name("Incident Coordinator")
  .instructions("Delegate support triage, then produce a short final brief.")
  .tool(supportAgent.asTool({ name: "ask_support_agent", stream: true }))
  .eventStore(eventStore, { include: "all" })
  .defaultMaxTurns(3)
  .build();

const prompt = [
  "Acme Co. reports webhook retries fail for payloads larger than 512 KB.",
  "They have missed several order updates in the last hour.",
  "Prepare a short support incident brief.",
].join(" ");

let runId: string | undefined;
for await (const event of coordinator.prompt(prompt).stream()) {
  if (event.type === "text_delta") {
    process.stdout.write(event.delta);
  }
  if (event.type === "final") {
    runId = event.runId;
  }
}

if (runId !== undefined) {
  const savedEvents = await eventStore.load(runId);
  const nestedEvents = savedEvents.filter(
    (record) => eventType(record.event) === "agent_tool_event",
  );

  console.log("\n\nstored runtime events:", savedEvents.length);
  console.log("stored child-agent events:", nestedEvents.length);
}

function eventType(event: unknown): string | undefined {
  return typeof event === "object" && event !== null && "type" in event
    ? String(event.type)
    : undefined;
}
