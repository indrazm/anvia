import type { CollectionEntry } from "astro:content";

export type DocsEntry = CollectionEntry<"docs">;
export type DocsSection = DocsEntry["data"]["section"];

export const docsSections: Array<{ id: DocsSection; label: string }> = [
  { id: "runtime", label: "Runtime" },
  { id: "providers", label: "Providers" },
  { id: "retrieval", label: "Retrieval" },
  { id: "tools", label: "Tools" },
  { id: "tracing", label: "Tracing" },
];

export function docHref(entry: DocsEntry) {
  return `/docs/${entry.id}`;
}

export function docLabel(entry: DocsEntry) {
  return entry.data.sidebar.label ?? entry.data.title;
}

export function sectionLabel(sectionId: DocsSection) {
  return docsSections.find((section) => section.id === sectionId)?.label ?? sectionId;
}

export function isPublishedDoc(entry: DocsEntry) {
  return import.meta.env.PROD ? entry.data.draft !== true : true;
}

export function sortDocs(entries: DocsEntry[]) {
  return [...entries].sort((a, b) => {
    const sectionOrder =
      docsSections.findIndex((section) => section.id === a.data.section) -
      docsSections.findIndex((section) => section.id === b.data.section);

    if (sectionOrder !== 0) {
      return sectionOrder;
    }

    const groupOrder = a.data.sidebar.group.localeCompare(b.data.sidebar.group);

    if (groupOrder !== 0) {
      return groupOrder;
    }

    return a.data.sidebar.order - b.data.sidebar.order || a.data.title.localeCompare(b.data.title);
  });
}

export function getSectionLandingHref(entries: DocsEntry[], section: DocsSection) {
  const firstEntry = sortDocs(entries).find((entry) => entry.data.section === section);

  return firstEntry ? docHref(firstEntry) : "/docs";
}

export function getSidebarGroups(entries: DocsEntry[], activeSection?: DocsSection) {
  const visibleEntries = activeSection
    ? entries.filter((entry) => entry.data.section === activeSection)
    : entries;
  const groups = new Map<string, DocsEntry[]>();

  for (const entry of sortDocs(visibleEntries)) {
    const group = entry.data.sidebar.group;
    groups.set(group, [...(groups.get(group) ?? []), entry]);
  }

  return Array.from(groups, ([title, groupEntries]) => ({ title, entries: groupEntries }));
}
