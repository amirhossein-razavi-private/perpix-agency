import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ServicesHeroSection } from "@/components/services/hero-section";
import { CoreServicesSection } from "@/components/services/core-services-section";
import { FlagshipSection } from "@/components/services/flagship-section";
import { IndustriesSection } from "@/components/services/industries-section";
import { StandardsSection } from "@/components/services/standards-section";
import { TechStackSection } from "@/components/services/tech-stack-section";
import { ServicesCtaSection } from "@/components/services/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.servicesPage.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/services`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/services`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/services`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const sp = t.servicesPage;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <ServicesHeroSection t={sp.hero} />
        <CoreServicesSection t={{ ...sp.core, filters: sp.filters }} />
        <FlagshipSection t={sp.flagship} />
        <IndustriesSection t={sp.industries} />
        <StandardsSection t={sp.standards} />
        <TechStackSection t={sp.techStack} />
        <ServicesCtaSection t={sp.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
