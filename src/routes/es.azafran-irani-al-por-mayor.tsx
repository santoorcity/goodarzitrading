import { createFileRoute } from "@tanstack/react-router";
import { SaffronLocalePage, saffronLocaleHead } from "@/components/site/SaffronLocalePage";

export const Route = createFileRoute("/es/azafran-irani-al-por-mayor")({
  head: () => saffronLocaleHead("es"),
  component: () => <SaffronLocalePage k="es" />,
});
