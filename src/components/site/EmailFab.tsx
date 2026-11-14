import { useRouterState } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productEmailLink } from "@/lib/email-routing";

export function EmailFab() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <Button asChild size="icon" className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full shadow-[var(--shadow-elegant)] ring-4 ring-primary/20 transition-transform hover:scale-110 [&_svg]:size-7">
      <a href={productEmailLink(pathname)} aria-label="Email export sales" title="Email export sales">
        <Mail aria-hidden="true" />
      </a>
    </Button>
  );
}