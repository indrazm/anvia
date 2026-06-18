import type { VectorFilter } from "@anvia/core/vector-store";

export function filterToRedisQuery(filter: VectorFilter | undefined): string {
  if (filter === undefined) {
    return "*";
  }

  return `(${translateFilter(filter)})`;
}

function translateFilter(filter: VectorFilter): string {
  switch (filter.type) {
    case "eq":
      if (typeof filter.value === "string") {
        return `@${filter.key}:"${escapeRedisValue(filter.value)}"`;
      }
      if (typeof filter.value === "boolean") {
        return `@${filter.key}:{${filter.value ? "1" : "0"}}`;
      }
      return `@${filter.key}:[${filter.value} ${filter.value}]`;
    case "gt":
      return `@${filter.key}:[(${filter.value} +inf]`;
    case "lt":
      return `@${filter.key}:[-inf (${filter.value}]`;
    case "and":
      return filter.filters.map((f) => `(${translateFilter(f)})`).join(" ");
    case "or":
      return filter.filters.map((f) => `(${translateFilter(f)})`).join(" | ");
  }
}

function escapeRedisValue(value: string): string {
  return value.replace(/(["\\])/g, "\\$1");
}
