import { AgentBuilder } from "@anvia/core/agent";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  baseUrl: process.env.OPENAI_BASEURL,
  apiKey: process.env.OPENAI_API_KEY,
});

// Provider clients create models; AgentBuilder composes model-independent behavior.
const agentModel = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("agent", agentModel)
  .instructions("You are a concise assistant. Answer in two sentences or less.")
  .build();

const response = await agent.prompt("Explain what an agent framework does.").send();

console.log(response.output);
