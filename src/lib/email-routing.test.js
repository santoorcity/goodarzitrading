import { describe, expect, test } from "bun:test";
import { productEmailLink } from "./email-routing";

describe("floating product email routing", () => {
  for (const slug of ["iranian-saffron", "iranian-mamra-almonds", "iranian-pistachio"]) {
    test(`${slug} goes to info`, () => {
      expect(productEmailLink(`/export-products/${slug}`)).toBe("mailto:info@goodarzitrading.ir");
    });
  }
  test("Dates goes to Hejazi with Matin in CC", () => {
    const link = new URL(productEmailLink("/export-products/iranian-dates"));
    expect(link.pathname).toBe("hejazi@goodarzitrading.ir");
    expect(link.searchParams.get("cc")).toBe("matin@goodarzitrading.ir");
  });
  test("Dates trailing slash keeps the same recipients", () => {
    expect(productEmailLink("/export-products/iranian-dates/")).toBe(productEmailLink("/export-products/iranian-dates"));
  });
  test("other pages go only to info", () => {
    for (const path of ["/", "/export-products", "/contact", "/export-products/iranian-barberry", "/inquiry"]) {
      expect(productEmailLink(path)).toBe("mailto:info@goodarzitrading.ir");
    }
  });
});