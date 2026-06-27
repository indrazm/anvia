import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "../../..");
const packagesRoot = join(repoRoot, "packages");
const referenceRoot = join(repoRoot, "apps/www/src/content/docs/packages");

function discoverPackages() {
  return readdirSync(packagesRoot)
    .map((name) => join(packagesRoot, name))
    .filter((dir) => statSync(dir).isDirectory() && existsSync(join(dir, "package.json")))
    .map((dir) => ({ dir, pkg: JSON.parse(readFileSync(join(dir, "package.json"), "utf8")) }))
    .filter(({ pkg }) => typeof pkg.name === "string" && pkg.name.startsWith("@anvia/"))
    .sort((a, b) => a.pkg.name.localeCompare(b.pkg.name));
}

function packageSlug(packageName) {
  return packageName.replace("@anvia/", "");
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function referenceFilesForPackage(packageName) {
  const packageReferenceRoot = join(referenceRoot, packageSlug(packageName));
  const referenceIndex = join(packageReferenceRoot, "reference.md");
  const referenceDirectory = join(packageReferenceRoot, "reference");

  if (!existsSync(referenceIndex)) {
    throw new Error(`Reference docs path does not exist: ${relative(repoRoot, referenceIndex)}`);
  }

  return [
    referenceIndex,
    ...(existsSync(referenceDirectory)
      ? walk(referenceDirectory).filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      : []),
  ];
}

function readReferenceDocs(packageName) {
  const files = referenceFilesForPackage(packageName);
  const docsText = files.map((file) => readFileSync(file, "utf8")).join("\n");
  const generatedReferenceMarkers = [
    "These symbols are generated from public package entrypoints",
    "Placeholder: add practical signatures",
    "## Reference notes",
  ];

  const marker = generatedReferenceMarkers.find((marker) => docsText.includes(marker));

  if (marker) {
    throw new Error(`Generated placeholder reference text remains in ${packageName}: ${marker}`);
  }

  return docsText;
}

function getExportsMap(pkg) {
  if (pkg.exports === undefined) {
    return [[".", { import: pkg.main, types: pkg.types }]];
  }

  return Object.entries(pkg.exports);
}

function getImportTarget(target) {
  if (typeof target === "string") return target;
  if (target && typeof target === "object") return target.import ?? target.default ?? target.types;
  return undefined;
}

function sourcePathForPackageExport(packageDir, target) {
  const importTarget = getImportTarget(target);
  if (typeof importTarget !== "string") return undefined;

  return join(packageDir, importTarget.replace(/^\.\/dist\//, "src/").replace(/\.js$/, ".ts"));
}

function getPublicExports(file) {
  const program = ts.createProgram([file], {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    skipLibCheck: true,
  });
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(file);
  const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

  if (!moduleSymbol) return [];

  return checker
    .getExportsOfModule(moduleSymbol)
    .map((symbol) => symbol.getName())
    .sort((a, b) => a.localeCompare(b));
}

let totalMissingEntrypoints = 0;
let totalMissingSymbols = 0;
let totalEntrypoints = 0;
let totalSymbols = 0;
const lines = [];

for (const { dir, pkg } of discoverPackages()) {
  const docsText = readReferenceDocs(pkg.name);
  const exportEntries = getExportsMap(pkg);
  const entrypoints = [];
  const publicExports = new Set();

  for (const [subpath, target] of exportEntries) {
    const importPath = subpath === "." ? pkg.name : `${pkg.name}${subpath.slice(1)}`;
    entrypoints.push(importPath);

    const sourcePath = sourcePathForPackageExport(dir, target);
    if (sourcePath && existsSync(sourcePath)) {
      for (const name of getPublicExports(sourcePath)) {
        publicExports.add(name);
      }
    }
  }

  const missingEntrypoints = entrypoints.filter((name) => !docsText.includes(name));
  const missingSymbols = [...publicExports].sort().filter((name) => !docsText.includes(name));

  totalEntrypoints += entrypoints.length;
  totalSymbols += publicExports.size;
  totalMissingEntrypoints += missingEntrypoints.length;
  totalMissingSymbols += missingSymbols.length;

  lines.push(
    `${pkg.name}: ${entrypoints.length} entrypoints, ${publicExports.size} exports, ${missingEntrypoints.length} undocumented entrypoints, ${missingSymbols.length} undocumented exports`,
  );

  if (missingEntrypoints.length > 0) {
    lines.push(`  missing entrypoints: ${missingEntrypoints.join(", ")}`);
  }

  if (missingSymbols.length > 0) {
    lines.push(`  missing exports: ${missingSymbols.join(", ")}`);
  }
}

for (const line of lines) console.log(line);
console.log(
  `TOTAL_ENTRYPOINTS=${totalEntrypoints} TOTAL_EXPORTS=${totalSymbols} TOTAL_MISSING_ENTRYPOINTS=${totalMissingEntrypoints} TOTAL_MISSING_EXPORTS=${totalMissingSymbols}`,
);

if (totalMissingEntrypoints > 0 || totalMissingSymbols > 0) {
  console.error(
    `Reference coverage failed from ${relative(process.cwd(), fileURLToPath(import.meta.url))}. Document missing public entrypoints or exports before merging.`,
  );
  process.exit(1);
}
