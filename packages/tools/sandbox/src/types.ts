import type { AnyTool } from "@anvia/core/tool";

export type SandboxFileType = "file" | "directory" | "symlink" | "other";

export type SandboxNetworkMode = boolean | "none" | "host" | string;

export interface Sandbox {
  readonly provider: string;

  createSession(options?: SandboxCreateSessionOptions): Promise<SandboxSession>;
}

export interface SandboxSession {
  readonly id: string;
  readonly provider: string;
  readonly workdir: string;

  exec(options: SandboxExecOptions): Promise<SandboxExecResult>;
  readFile(path: string): Promise<Uint8Array>;
  readTextFile(path: string): Promise<string>;
  writeFile(path: string, data: string | Uint8Array): Promise<void>;
  writeTextFile(path: string, content: string): Promise<void>;
  listFiles(path?: string): Promise<SandboxFileEntry[]>;
  destroy(): Promise<void>;
}

export interface SandboxCreateSessionOptions {
  id?: string;
  manifest?: SandboxManifest;
  metadata?: Record<string, string>;
}

export interface SandboxManifest {
  files?: Record<string, string | Uint8Array>;
  directories?: string[];
  env?: Record<string, string>;
}

export interface SandboxLimits {
  timeoutMs?: number;
  maxOutputBytes?: number;
  memoryMb?: number;
  cpus?: number;
  pidsLimit?: number;
}

export interface SandboxExecOptions {
  command: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
  timeoutMs?: number;
  input?: string | Uint8Array;
  signal?: AbortSignal;
  onStdout?: (chunk: Uint8Array) => void;
  onStderr?: (chunk: Uint8Array) => void;
}

export interface SandboxExecResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  durationMs: number;
  timedOut: boolean;
  aborted: boolean;
  stdoutTruncated: boolean;
  stderrTruncated: boolean;
}

export interface SandboxFileEntry {
  path: string;
  type: SandboxFileType;
  size?: number;
}

export interface DockerSandboxSecurityOptions {
  readonlyRootfs?: boolean;
  noNewPrivileges?: boolean;
  dropCapabilities?: string[];
}

export interface DockerSandboxOptions {
  image?: string;
  pull?: "missing" | "always" | "never";
  workdir?: string;
  network?: SandboxNetworkMode;
  user?: string;
  dockerPath?: string;
  labels?: Record<string, string>;
  limits?: SandboxLimits;
  security?: DockerSandboxSecurityOptions;
}

export interface SandboxToolsOptions {
  include?: SandboxToolName[];
  execTimeoutMs?: number;
}

export type SandboxToolName = "exec_command" | "read_file" | "write_file" | "list_files";

export type SandboxToolsFactory = (
  session: SandboxSession,
  options?: SandboxToolsOptions,
) => AnyTool[];
