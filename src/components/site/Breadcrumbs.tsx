import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

/** Visible breadcrumb trail. Pair it with BreadcrumbList JSON-LD in the route head(). */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-secondary/40">
      <ol className="container-x flex flex-wrap items-center gap-1.5 py-3 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to as never} className="hover:text-[color:var(--navy)]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-[color:var(--navy-deep)]">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** BreadcrumbList structured data for the same trail. */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
