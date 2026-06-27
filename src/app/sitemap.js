import { i18n } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export default function sitemap() {
  const lastModified = new Date();
  const pages = ["", "/trust-us", "/services", "/process", "/why-perpix", "/our-team", "/contact"];

  const languages = Object.fromEntries(
    i18n.locales.map((locale) => [locale, `${siteUrl}/${locale}`])
  );

  return i18n.locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteUrl}/${locale}${page}`,
      lastModified,
      changeFrequency: "weekly",
      priority: page === "" && locale === i18n.defaultLocale ? 1 : 0.8,
      alternates: { languages },
    }))
  );
}
