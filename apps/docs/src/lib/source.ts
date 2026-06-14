import { docs } from "collections/server";
import { type LoaderPlugin, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";
import { createElement, Fragment } from "react";

const newMenuWindowMs = 30 * 24 * 60 * 60 * 1000;

function isNewMenuItem(createdAt: unknown) {
  if (typeof createdAt !== "string") return false;

  const createdTime = Date.parse(createdAt);
  if (!Number.isFinite(createdTime)) return false;

  const ageMs = Date.now() - createdTime;
  return ageMs >= 0 && ageMs < newMenuWindowMs;
}

function newMenuBadgePlugin(): LoaderPlugin {
  return {
    name: "anvia:new-menu-badges",
    transformPageTree: {
      folder(node, _folderPath, metaPath) {
        if (!metaPath) return node;

        const meta = this.storage.read(metaPath);
        const createdAt =
          meta?.format === "meta" ? (meta.data as Record<string, unknown>).createdAt : undefined;

        if (!isNewMenuItem(createdAt)) return node;

        return {
          ...node,
          name: createElement(Fragment, null, [
            node.name,
            createElement("span", { className: "docs-sidebar-new-badge", key: "new-badge" }, "New"),
          ]),
        };
      },
    },
  };
}

export const source = loader({
  baseUrl: "/docs",
  plugins: [lucideIconsPlugin(), newMenuBadgePlugin()],
  source: docs.toFumadocsSource(),
});
