import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Filter, Database } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { hsCodes } from "@/data/hs-codes";

export const Route = createFileRoute("/hs-code")({
  head: () => ({
    meta: [
      { title: "HS Code Search — Goodarzi Trading" },
      { name: "description", content: "Search Harmonised System (HS) codes by code, product name or keyword. Find category and customs notes for Iranian and international trade." },
      { property: "og:title", content: "HS Code Search — Goodarzi Trading" },
      { property: "og:description", content: "Free HS code lookup tool for importers and exporters." },
      { property: "og:url", content: "/hs-code" },
    ],
    links: [{ rel: "canonical", href: "/hs-code" }],
  }),
  component: HSCodePage,
});

function HSCodePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(hsCodes.map((h) => h.category))).sort()],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hsCodes.filter((h) => {
      const matchesQ =
        !q ||
        h.code.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q) ||
        h.category.toLowerCase().includes(q);
      const matchesC = category === "All" || h.category === category;
      return matchesQ && matchesC;
    });
  }, [query, category]);

  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    return hsCodes
      .filter((h) => h.description.toLowerCase().includes(q) || h.code.includes(q))
      .slice(0, 5);
  }, [query]);

  return (
    <>
      <PageHero
        eyebrow="Trade Tools"
        title="HS Code Search System"
        description="Look up Harmonised System codes by number, product name or keyword. Designed for scale — ready for future API integration."
      />

      <section className="py-16">
        <div className="container-x">
          <div className="rounded-sm border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by HS code, product or keyword..."
                  className="h-14 w-full rounded-sm border border-input bg-background pl-12 pr-4 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
                  list="hs-suggestions"
                />
                <datalist id="hs-suggestions">
                  {suggestions.map((s) => (
                    <option key={s.code} value={s.description}>{s.code}</option>
                  ))}
                </datalist>
              </div>
              <div className="relative">
                <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-14 min-w-[220px] rounded-sm border border-input bg-background pl-11 pr-4 text-sm outline-none ring-[color:var(--gold)] focus:ring-2"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Database className="h-3 w-3" /> {hsCodes.length} reference entries
              </span>
              <span>{results.length} result{results.length !== 1 && "s"}</span>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[color:var(--navy-deep)] text-white">
                  <tr>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-[11px]">HS Code</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-[11px]">Description</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-[11px]">Category</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-[11px]">Customs Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {results.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                        No matches. Try a different keyword or code.
                      </td>
                    </tr>
                  ) : (
                    results.map((h) => (
                      <tr key={h.code} className="border-t border-border transition-colors hover:bg-secondary/40">
                        <td className="px-6 py-4 font-mono text-[color:var(--navy-deep)]">{h.code}</td>
                        <td className="px-6 py-4 text-[color:var(--navy)]">{h.description}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex rounded-sm bg-secondary px-2.5 py-1 text-xs text-[color:var(--navy)]">
                            {h.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-muted-foreground">{h.notes ?? "—"}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Data shown for reference only. For official tariff classification, contact our customs consulting team.
          </p>
        </div>
      </section>
    </>
  );
}
