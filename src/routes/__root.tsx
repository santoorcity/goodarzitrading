import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFab } from "../components/site/WhatsAppFab";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Goodarzi Trading — Global Import & Export Solutions" },
      { name: "keywords", content: "import export Iran, buy from Iran, Iranian saffron exporter, Iran pistachio supplier, Persian carpets export, buy Iranian dates, Iran bitumen supplier, international trade Iran, freight forwarding, IRICA customs, Tehran Chamber of Commerce, world traders, chamber of commerce members, goodarzi trading, بازرگانی گودرزی, واردات صادرات ایران, تجارت بین الملل, صادرات زعفران, صادرات پسته, بازرگانان جهان" },
      { name: "description", content: "Iran-based import & export company. Buy Iranian saffron, pistachio, dates, carpets, bitumen & minerals directly. Trusted worldwide by importers, distributors and chamber-of-commerce members." },
      { name: "author", content: "Goodarzi Trading" },
      { property: "og:site_name", content: "Goodarzi Trading" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a1e3f" },
      { property: "og:title", content: "Goodarzi Trading — Global Import & Export Solutions" },
      { name: "twitter:title", content: "Goodarzi Trading — Global Import & Export Solutions" },
      { property: "og:description", content: "International import, export, customs consulting and logistics from Tehran. Active member of Tehran Chamber of Commerce." },
      { name: "twitter:description", content: "International import, export, customs consulting and logistics from Tehran. Active member of Tehran Chamber of Commerce." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/68bf3bc2-5260-405a-81d9-4abdf3ace2cf/id-preview-9764f80f--79142ba9-9717-4598-83cb-5a30cea4b5fe.lovable.app-1782759829050.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/68bf3bc2-5260-405a-81d9-4abdf3ace2cf/id-preview-9764f80f--79142ba9-9717-4598-83cb-5a30cea4b5fe.lovable.app-1782759829050.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Goodarzi Trading",
          alternateName: "بازرگانی گودرزی",
          url: "https://goodarzitrading.lovable.app",
          logo: "https://goodarzitrading.lovable.app/goodarzi-trading-logo.png",
          description:
            "Iran-based international trading house. Import, export, customs consulting and logistics. Supplier of Iranian saffron, pistachio, dates, carpets, bitumen and minerals to 40+ countries.",
          foundingDate: "2005",
          founder: { "@type": "Person", name: "Mehdi Goodarzi" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "No. 23/1, Ghazal Crossroads, Tenth Street, Tehransar",
            addressLocality: "Tehran",
            addressCountry: "IR",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+98-21-44511076",
              contactType: "sales",
              areaServed: ["AE","SA","QA","OM","KW","IQ","TR","DE","FR","ES","IT","NL","RU","AM","AZ","KZ","UZ","TM","CN","IN","MY","ID","JP","KR","KE","ZA","EG","NG","MA","CA","BR","AR","MX","CL"],
              availableLanguage: ["English","Persian","Arabic"],
            },
            {
              "@type": "ContactPoint",
              telephone: "+98-919-123-8554",
              contactType: "customer service",
              contactOption: "TollFree",
              availableLanguage: ["English","Persian","Arabic"],
            },
          ],
          sameAs: [],
          memberOf: [
            { "@type": "Organization", name: "Tehran Chamber of Commerce, Industries, Mines & Agriculture (TCCIMA)" },
          ],
          knowsAbout: [
            "Iranian saffron export","Iranian pistachio export","Iranian dates export",
            "Persian handwoven carpets","Iranian bitumen","Industrial minerals",
            "IRICA customs clearance","International freight forwarding","Incoterms 2020",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}

