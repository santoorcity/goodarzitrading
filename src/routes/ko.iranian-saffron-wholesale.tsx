import { createFileRoute } from "@tanstack/react-router";
import { SaffronLocalePage, saffronLocaleHead } from "@/components/site/SaffronLocalePage";

export const Route = createFileRoute("/ko/iranian-saffron-wholesale")({
  head: () => saffronLocaleHead("ko"),
  component: () => <SaffronLocalePage k="ko" />,
});
