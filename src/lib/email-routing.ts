/** Only the existing Dates detail route has a separate export-sales recipient. */
export function productEmailLink(pathname: string): string {
  if (pathname.replace(/\/+$/, "") === "/export-products/iranian-dates") {
    return "mailto:hejazi@goodarzitrading.ir?cc=matin%40goodarzitrading.ir";
  }
  return "mailto:info@goodarzitrading.ir";
}