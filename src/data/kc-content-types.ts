export type BiText = { en: string; fa: string };
export type BiList = { en: string[]; fa: string[] };

/** Substantive editorial content for a knowledge-center registry entry. */
export type EntryContent = {
  purpose: BiText;
  key: BiList;
  iran: BiText;
  status: BiText;
};
