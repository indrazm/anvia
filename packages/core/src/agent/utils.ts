import type {
  CompletionModel,
  JsonValue,
  Message as MessageType,
  StreamingCompletionModel,
} from "../completion/index";

export function isStreamingCompletionModel(
  model: CompletionModel,
): model is StreamingCompletionModel {
  return "streamCompletion" in model && typeof model.streamCompletion === "function";
}

export function extractRagText(message: MessageType): string | undefined {
  if (message.role === "user") {
    return message.content.flatMap((item) => (item.type === "text" ? [item.text] : [])).join("\n");
  }

  if (message.role === "tool") {
    return message.content
      .flatMap((item) => item.content.flatMap((part) => (part.type === "text" ? [part.text] : [])))
      .join("\n");
  }

  return undefined;
}

export function parseJsonValue(text: string): JsonValue {
  if (text.trim().length === 0) {
    return {};
  }
  try {
    return JSON.parse(text) as JsonValue;
  } catch {
    return text;
  }
}
