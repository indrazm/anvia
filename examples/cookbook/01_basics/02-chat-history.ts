import { AgentBuilder } from "@anvia/core/agent";
import { Message } from "@anvia/core/completion";
import { OpenAIClient } from "@anvia/openai";

const client = new OpenAIClient({
  baseUrl: process.env.OPENAI_BASEURL,
  apiKey: process.env.OPENAI_API_KEY,
});
const agentModel = client.completionModel("gpt-5.5");

const agent = new AgentBuilder("agent", agentModel)
  .instructions("You are a concise assistant that respects prior conversation context.")
  .build();

const history = [
  Message.user("My project is named Anvia."),
  Message.assistant("Noted. Your project is named Anvia."),
];

const response = await agent.prompt([...history, Message.user("What is my project named?")]).send();

console.log(response.output);
