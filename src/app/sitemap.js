import { i18n } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export default function sitemap() {
  const lastModified = new Date();

  const languages = Object.fromEntries(
    i18n.locales.map((locale) => [locale, `${siteUrl}/${locale}`])
  );

  return i18n.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "weekly",
    priority: locale === i18n.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
