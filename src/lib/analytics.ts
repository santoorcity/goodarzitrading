declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
  | string
  | undefined;

let initialized = false;

export function initGoogleAnalytics() {
  if (initialized || typeof window === "undefined" || !measurementId) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });
}

export function trackPageView(path: string) {
  if (!measurementId || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path, page_location: window.location.href });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!measurementId || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
}
