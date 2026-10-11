import { createFileRoute } from "@tanstack/react-router";
import { SaffronLocalePage, saffronLocaleHead } from "@/components/site/SaffronLocalePage";

export const Route = createFileRoute("/ja/iranian-saffron-wholesale")({
  head: () => saffronLocaleHead("ja"),
  component: () => <SaffronLocalePage k="ja" />,
});
