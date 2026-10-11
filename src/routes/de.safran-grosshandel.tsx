import { createFileRoute } from "@tanstack/react-router";
import { SaffronLocalePage, saffronLocaleHead } from "@/components/site/SaffronLocalePage";

export const Route = createFileRoute("/de/safran-grosshandel")({
  head: () => saffronLocaleHead("de"),
  component: () => <SaffronLocalePage k="de" />,
});
