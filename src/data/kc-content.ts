import { contentA } from "./kc-content-a";
import { contentB } from "./kc-content-b";
import type { EntryContent } from "./kc-content-types";

export const knowledgeContent: Record<string, EntryContent> = {
  ...contentA,
  ...contentB,
};

export function contentForEntry(id: string): EntryContent | undefined {
  return knowledgeContent[id];
}