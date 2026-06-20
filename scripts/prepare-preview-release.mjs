import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const packagesRoot = path.join(root, "packages");
const dryRun = process.argv.includes("--dry-run");
const buildId = process.env.PREVIEW_BUILD_ID ?? createBuildId();
const dependencyFields = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies",
];

const packages = findPackageDirs(packagesRoot)
  .map((dir) => ({ dir, packageJson: readPackageJson(dir) }))
  .filter((pkg) => pkg.packageJson.private !== true)
  .filter((pkg) => typeof pkg.packageJson.name === "string")
  .filter((pkg) => typeof pkg.packageJson.version === "string")
  .sort((a, b) => a.packageJson.name.localeCompare(b.packageJson.name));

const previewVersions = new Map(
  packages.map((pkg) => [
    pkg.packageJson.name,
    `${nextPatchVersion(pkg.packageJson.version)}-preview.${buildId}`,
  ]),
);

for (const pkg of packages) {
  const nextVersion = previewVersions.get(pkg.packageJson.name);
  const updated = structuredClone(pkg.packageJson);
  updated.version = nextVersion;

  for (const field of dependencyFields) {
    rewriteInternalDependencies(updated[field], previewVersions);
  }

  const relativePath = path.relative(root, path.join(pkg.dir, "package.json"));
  console.info(`${pkg.packageJson.name}: ${pkg.packageJson.version} -> ${nextVersion}`);

  if (!dryRun) {
    writeFileSync(path.join(pkg.dir, "package.json"), `${JSON.stringify(updated, null, 2)}\n`);
  } else {
    for (const field of dependencyFields) {
      for (const [name, version] of rewrittenDependencies(
        pkg.packageJson[field],
        previewVersions,
      )) {
        console.info(`  ${relativePath} ${field}.${name} -> ${version}`);
      }
    }
  }
}

if (dryRun) {
  console.info("Dry run complete. No package files were changed.");
}

function findPackageDirs(dir) {
  const entries = readdirSync(dir).sort();
  const dirs = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    if (!statSync(entryPath).isDirectory()) {
      continue;
    }

    if (existsSync(path.join(entryPath, "package.json"))) {
      dirs.push(entryPath);
      continue;
    }

    dirs.push(...findPackageDirs(entryPath));
  }

  return dirs;
}

function readPackageJson(dir) {
  return JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
}

function rewriteInternalDependencies(dependencies, versions) {
  if (dependencies === undefined) {
    return;
  }

  for (const name of Object.keys(dependencies)) {
    const version = versions.get(name);
    if (version !== undefined) {
      dependencies[name] = version;
    }
  }
}

function* rewrittenDependencies(dependencies, versions) {
  if (dependencies === undefined) {
    return;
  }

  for (const name of Object.keys(dependencies)) {
    const version = versions.get(name);
    if (version !== undefined) {
      yield [name, version];
    }
  }
}

function nextPatchVersion(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-.+)?$/);
  if (match === null) {
    throw new Error(`Unsupported semver version: ${version}`);
  }

  const [, major, minor, patch] = match;
  return `${major}.${minor}.${Number(patch) + 1}`;
}

function createBuildId() {
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "");
  const shortSha = getShortSha();
  return shortSha === undefined ? timestamp : `${timestamp}.${shortSha}`;
}

function getShortSha() {
  const envSha = process.env.GITHUB_SHA;
  if (envSha !== undefined && envSha.length >= 7) {
    return envSha.slice(0, 7);
  }

  const result = spawnSync("git", ["rev-parse", "--short=7", "HEAD"], {
    cwd: root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    return undefined;
  }

  return result.stdout.trim();
}
