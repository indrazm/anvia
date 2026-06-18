import type { VectorFilter } from "@anvia/core/vector-store";

export function filterToLanceExpr(filter: VectorFilter | undefined): string | undefined {
  if (filter === undefined) {
    return undefined;
  }

  return translateFilter(filter);
}

function translateFilter(filter: VectorFilter): string {
  switch (filter.type) {
    case "eq":
      if (typeof filter.value === "string") {
        return `${filter.key} = '${escapeSql(filter.value)}'`;
      }
      if (typeof filter.value === "boolean") {
        return `${filter.key} = ${filter.value ? "TRUE" : "FALSE"}`;
      }
      if (filter.value === null) {
        return `${filter.key} IS NULL`;
      }
      return `${filter.key} = ${filter.value}`;
    case "gt":
      return `${filter.key} > ${filter.value}`;
    case "lt":
      return `${filter.key} < ${filter.value}`;
    case "and":
      return filter.filters.map((f) => `(${translateFilter(f)})`).join(" AND ");
    case "or":
      return filter.filters.map((f) => `(${translateFilter(f)})`).join(" OR ");
  }
}

function escapeSql(value: string): string {
  return value.replace(/'/g, "''");
}
