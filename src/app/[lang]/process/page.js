import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProcessHeroSection } from "@/components/process/hero-section";
import { ProcessStepsSection } from "@/components/process/steps-section";
import { ProcessValuesSection } from "@/components/process/values-section";
import { ProcessCtaSection } from "@/components/process/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.processPage.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/process`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/process`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/process`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ProcessPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const pp = t.processPage;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <ProcessHeroSection t={pp.hero} />
        <ProcessStepsSection steps={pp.steps} />
        <ProcessValuesSection t={pp.values} />
        <ProcessCtaSection t={pp.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
