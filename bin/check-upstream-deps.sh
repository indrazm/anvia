#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

ANVIA_ROOT="$ROOT_DIR" node --input-type=module - "$@" <<'NODE'
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.env.ANVIA_ROOT;
const args = process.argv.slice(2);

const options = {
  dependencyFields: ["dependencies", "peerDependencies", "optionalDependencies"],
  failOnUpdate: false,
  json: false,
  packageFilters: [],
};

function usage() {
  console.log(`Usage: bin/check-upstream-deps.sh [options]

Reports npm updates for external runtime dependencies declared by packages/* wrappers.

Options:
  --all, --dev         Include devDependencies too.
  --filter <text>      Only include rows whose wrapper, path, or dependency contains text.
  --fail-on-update     Exit with status 1 when any update is found.
  --json               Print machine-readable JSON.
  -h, --help           Show this help.
`);
}

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];

  if (arg === "--all" || arg === "--dev") {
    if (!options.dependencyFields.includes("devDependencies")) {
      options.dependencyFields.push("devDependencies");
    }
    continue;
  }

  if (arg === "--filter") {
    const value = args[index + 1];
    if (!value) {
      throw new Error("--filter requires a value.");
    }
    options.packageFilters.push(value.toLowerCase());
    index += 1;
    continue;
  }

  if (arg === "--fail-on-update") {
    options.failOnUpdate = true;
    continue;
  }

  if (arg === "--json") {
    options.json = true;
    continue;
  }

  if (arg === "-h" || arg === "--help") {
    usage();
    process.exit(0);
  }

  throw new Error(`Unknown option: ${arg}`);
}

async function findPackageJsonFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (["node_modules", "dist", "coverage", ".turbo"].includes(entry.name)) {
        continue;
      }

      files.push(...(await findPackageJsonFiles(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name === "package.json") {
      files.push(fullPath);
    }
  }

  return files;
}

function isExternalDependency(name, range) {
  return !name.startsWith("@anvia/") && !range.startsWith("workspace:");
}

function normalizeDeclaredVersion(range) {
  const match = range.match(/\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?/);
  return match?.[0] ?? null;
}

function parseSemver(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/);
  if (!match) {
    return null;
  }

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    prerelease: match[4] ?? "",
  };
}

function compareSemver(a, b) {
  const parsedA = parseSemver(a);
  const parsedB = parseSemver(b);

  if (!parsedA || !parsedB) {
    return a.localeCompare(b);
  }

  for (const key of ["major", "minor", "patch"]) {
    if (parsedA[key] !== parsedB[key]) {
      return parsedA[key] - parsedB[key];
    }
  }

  if (parsedA.prerelease === parsedB.prerelease) {
    return 0;
  }

  if (!parsedA.prerelease) {
    return 1;
  }

  if (!parsedB.prerelease) {
    return -1;
  }

  return parsedA.prerelease.localeCompare(parsedB.prerelease);
}

function updateKind(current, latest) {
  const parsedCurrent = parseSemver(current);
  const parsedLatest = parseSemver(latest);

  if (!parsedCurrent || !parsedLatest || compareSemver(current, latest) >= 0) {
    return "current";
  }

  if (parsedLatest.major > parsedCurrent.major) {
    return "major";
  }

  if (parsedLatest.minor > parsedCurrent.minor) {
    return "minor";
  }

  return "patch";
}

async function fetchLatestPackageInfo(packageName) {
  const packageUrlName = packageName
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  const registryUrl = `https://registry.npmjs.org/${packageUrlName}`;
  const response = await fetch(registryUrl, {
    headers: { accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`npm registry returned ${response.status} for ${packageName}`);
  }

  const metadata = await response.json();
  const latest = metadata?.["dist-tags"]?.latest;

  if (!latest) {
    throw new Error(`No latest dist-tag found for ${packageName}`);
  }

  return {
    latest,
    latestPublishedAt: metadata?.time?.[latest] ?? null,
  };
}

function uniqueDependencies(records) {
  return [...new Set(records.map((record) => record.dependency))].sort();
}

function pad(value, width) {
  return value.padEnd(width, " ");
}

function formatRelativeTime(dateString, now) {
  if (!dateString) {
    return "-";
  }

  const date = new Date(dateString);
  const timestamp = date.getTime();

  if (Number.isNaN(timestamp)) {
    return "-";
  }

  const diffMs = now.getTime() - timestamp;
  const tense = diffMs < 0 ? "from now" : "ago";
  let remainingSeconds = Math.floor(Math.abs(diffMs) / 1000);

  if (remainingSeconds < 60) {
    return "just now";
  }

  const units = [
    ["y", 365 * 24 * 60 * 60],
    ["mo", 30 * 24 * 60 * 60],
    ["d", 24 * 60 * 60],
    ["h", 60 * 60],
    ["m", 60],
  ];
  const parts = [];

  for (const [label, seconds] of units) {
    const value = Math.floor(remainingSeconds / seconds);

    if (value === 0) {
      continue;
    }

    parts.push(`${value}${label}`);
    remainingSeconds -= value * seconds;

    if (parts.length === 2) {
      break;
    }
  }

  return `${parts.join(" ")} ${tense}`;
}

function formatTable(records) {
  const columns = [
    ["Wrapper", (record) => record.wrapper],
    ["Dependency", (record) => record.dependency],
    ["Field", (record) => record.field],
    ["Declared", (record) => record.declared],
    ["Latest", (record) => record.latest ?? "-"],
    ["Published", (record) => record.latestPublishedAge ?? "-"],
    ["Status", (record) => record.status],
  ];

  const widths = columns.map(([header, reader]) =>
    Math.max(header.length, ...records.map((record) => reader(record).length)),
  );

  const lines = [
    columns.map(([header], index) => pad(header, widths[index])).join("  "),
    widths.map((width) => "-".repeat(width)).join("  "),
  ];

  for (const record of records) {
    lines.push(
      columns
        .map(([, reader], index) => pad(reader(record), widths[index]))
        .join("  "),
    );
  }

  return lines.join("\n");
}

const packageJsonFiles = (await findPackageJsonFiles(path.join(rootDir, "packages")))
  .sort((a, b) => a.localeCompare(b));
const records = [];

for (const packageJsonFile of packageJsonFiles) {
  const manifest = JSON.parse(await readFile(packageJsonFile, "utf8"));
  const packagePath = path.relative(rootDir, path.dirname(packageJsonFile));
  const wrapper = manifest.name ?? packagePath;

  for (const field of options.dependencyFields) {
    const dependencies = manifest[field] ?? {};

    for (const [dependency, declared] of Object.entries(dependencies).sort(([a], [b]) =>
      a.localeCompare(b),
    )) {
      const filterTarget = `${wrapper} ${packagePath} ${dependency}`.toLowerCase();

      if (
        options.packageFilters.length > 0 &&
        !options.packageFilters.some((filter) => filterTarget.includes(filter))
      ) {
        continue;
      }

      if (!isExternalDependency(dependency, declared)) {
        continue;
      }

      records.push({
        wrapper,
        packagePath,
        dependency,
        field,
        declared,
        declaredVersion: normalizeDeclaredVersion(declared),
      });
    }
  }
}

const latestInfoByDependency = new Map();
const errors = [];
const now = new Date();

await Promise.all(
  uniqueDependencies(records).map(async (dependency) => {
    try {
      latestInfoByDependency.set(dependency, await fetchLatestPackageInfo(dependency));
    } catch (error) {
      errors.push({ dependency, message: error.message });
    }
  }),
);

for (const record of records) {
  const latestInfo = latestInfoByDependency.get(record.dependency);
  record.latest = latestInfo?.latest ?? null;
  record.latestPublishedAt = latestInfo?.latestPublishedAt ?? null;
  record.latestPublishedAge = formatRelativeTime(record.latestPublishedAt, now);
  record.status = "unknown";

  if (record.latest && record.declaredVersion) {
    const kind = updateKind(record.declaredVersion, record.latest);
    record.status = kind === "current" ? "current" : `${kind} update`;
  }
}

records.sort((a, b) => {
  const statusOrder = {
    "major update": 0,
    "minor update": 1,
    "patch update": 2,
    unknown: 3,
    current: 4,
  };

  return (
    statusOrder[a.status] - statusOrder[b.status] ||
    a.wrapper.localeCompare(b.wrapper) ||
    a.dependency.localeCompare(b.dependency)
  );
});

if (options.json) {
  console.log(JSON.stringify({ records, errors }, null, 2));
} else {
  console.log(formatTable(records));

  const updateCount = records.filter((record) => record.status.endsWith("update")).length;
  const currentCount = records.filter((record) => record.status === "current").length;
  const unknownCount = records.filter((record) => record.status === "unknown").length;

  console.log("");
  console.log(
    `Summary: ${updateCount} update(s), ${currentCount} current, ${unknownCount} unknown.`,
  );

  if (errors.length > 0) {
    console.log("");
    console.log("Registry lookup errors:");
    for (const error of errors) {
      console.log(`- ${error.dependency}: ${error.message}`);
    }
  }
}

if (
  options.failOnUpdate &&
  records.some((record) => record.status.endsWith("update"))
) {
  process.exit(1);
}
NODE
