import type { VectorFilter } from "@anvia/core/vector-store";

export function filterToWeaviateWhere(filter: VectorFilter | undefined): unknown {
  if (filter === undefined) {
    return undefined;
  }

  switch (filter.type) {
    case "eq":
      return {
        operator: "Equal",
        path: [filter.key],
        valueString: typeof filter.value === "string" ? filter.value : undefined,
        valueInt: typeof filter.value === "number" ? filter.value : undefined,
        valueBoolean: typeof filter.value === "boolean" ? filter.value : undefined,
        valueNumber: typeof filter.value === "number" ? filter.value : undefined,
      };
    case "gt":
      return {
        operator: "GreaterThan",
        path: [filter.key],
        valueNumber: typeof filter.value === "number" ? filter.value : undefined,
        valueString: typeof filter.value === "string" ? filter.value : undefined,
      };
    case "lt":
      return {
        operator: "LessThan",
        path: [filter.key],
        valueNumber: typeof filter.value === "number" ? filter.value : undefined,
        valueString: typeof filter.value === "string" ? filter.value : undefined,
      };
    case "and":
      return {
        operator: "And",
        operands: filter.filters.map(filterToWeaviateWhere),
      };
    case "or":
      return {
        operator: "Or",
        operands: filter.filters.map(filterToWeaviateWhere),
      };
  }
}
