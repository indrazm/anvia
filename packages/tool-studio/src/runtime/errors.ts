import type { JsonValue } from "@anvia/core/completion";
import { serializeUnknown } from "./json";

export function serializeError(error: unknown): JsonValue {
  return serializeUnknown(error);
}
