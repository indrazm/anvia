import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const packagesRoot = path.join(root, "packages");
const dryRun = process.argv.includes("--dry-run");
const repository = process.env.GITHUB_REPOSITORY ?? getRepositoryFromGitRemote();
const token = process.env.GITHUB_TOKEN;

if (repository === undefined) {
  throw new Error("GITHUB_REPOSITORY is not set and the GitHub repository could not be inferred.");
}

if (!dryRun && (token === undefined || token.length === 0)) {
  throw new Error("GITHUB_TOKEN is required to create GitHub Releases. Use --dry-run to preview.");
}

const packages = findPackageDirs(packagesRoot)
  .map((dir) => ({ dir, packageJson: readPackageJson(dir) }))
  .filter((pkg) => pkg.packageJson.private !== true)
  .filter((pkg) => typeof pkg.packageJson.name === "string")
  .filter((pkg) => typeof pkg.packageJson.version === "string")
  .sort((a, b) => a.packageJson.name.localeCompare(b.packageJson.name));

for (const pkg of packages) {
  const { name, version } = pkg.packageJson;
  const tagName = `${name}@${version}`;

  if (!tagExists(tagName)) {
    console.warn(`Skipping ${tagName}: local git tag does not exist.`);
    continue;
  }

  if (!dryRun && (await releaseExists(tagName))) {
    console.info(`Skipping ${tagName}: GitHub Release already exists.`);
    continue;
  }

  const body = releaseBody(pkg, tagName);
  if (dryRun) {
    console.info(`[dry-run] Would create GitHub Release ${tagName}`);
    continue;
  }

  await createRelease({ tagName, name: tagName, body });
  console.info(`Created GitHub Release ${tagName}`);
}

function findPackageDirs(dir) {
  const entries = readdirSync(dir).sort();
  const dirs = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    if (!statSync(entryPath).isDirectory()) continue;

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

function tagExists(tagName) {
  const result = spawnSync("git", ["rev-parse", "--quiet", "--verify", `refs/tags/${tagName}`], {
    cwd: root,
    stdio: "ignore",
  });

  return result.status === 0;
}

async function releaseExists(tagName) {
  const response = await githubFetch(
    `/repos/${repository}/releases/tags/${encodeURIComponent(tagName)}`,
    {
      method: "GET",
    },
  );

  if (response.status === 200) return true;
  if (response.status === 404) return false;

  throw new Error(
    `Failed checking GitHub Release ${tagName}: ${response.status} ${await response.text()}`,
  );
}

async function createRelease({ tagName, name, body }) {
  const response = await githubFetch(`/repos/${repository}/releases`, {
    method: "POST",
    body: JSON.stringify({
      tag_name: tagName,
      name,
      body,
      draft: false,
      prerelease: isPrereleaseVersion(tagName),
    }),
  });

  if (response.status !== 201) {
    throw new Error(
      `Failed creating GitHub Release ${tagName}: ${response.status} ${await response.text()}`,
    );
  }
}

function releaseBody(pkg, tagName) {
  const changelogPath = path.join(pkg.dir, "CHANGELOG.md");
  const relativeChangelogPath = path.relative(root, changelogPath);
  if (!existsSync(changelogPath)) {
    return `Release notes for ${tagName} were not found in \`${relativeChangelogPath}\`.`;
  }

  const entry = extractChangelogEntry(readFileSync(changelogPath, "utf8"), pkg.packageJson.version);
  if (entry === undefined) {
    return `Release notes for ${tagName} were not found in \`${relativeChangelogPath}\`.`;
  }

  return entry;
}

function extractChangelogEntry(changelog, version) {
  const lines = changelog.split(/\r?\n/);
  const headingPattern = new RegExp(`^##\\s+\\[?${escapeRegExp(version)}\\]?\\b`);
  const nextHeadingPattern = /^##\s+/;
  const start = lines.findIndex((line) => headingPattern.test(line));

  if (start === -1) return undefined;

  const end = lines.findIndex((line, index) => index > start && nextHeadingPattern.test(line));
  const body = lines
    .slice(start, end === -1 ? lines.length : end)
    .join("\n")
    .trim();

  return body.length > 0 ? body : undefined;
}

function isPrereleaseVersion(tagName) {
  const version = tagName.slice(tagName.lastIndexOf("@") + 1);
  return version.includes("-");
}

async function githubFetch(pathname, options) {
  return fetch(`https://api.github.com${pathname}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      ...options.headers,
    },
  });
}

function getRepositoryFromGitRemote() {
  const result = spawnSync("git", ["config", "--get", "remote.origin.url"], {
    cwd: root,
    encoding: "utf8",
  });

  if (result.status !== 0) return undefined;

  const remote = result.stdout.trim();
  const match = remote.match(/github\.com[:/](.+?\/.+?)(?:\.git)?$/);
  return match?.[1];
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
