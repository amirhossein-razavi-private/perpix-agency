import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TrustHeroSection } from "@/components/trust-us/hero-section";
import { SeniorTeamSection } from "@/components/trust-us/senior-team-section";
import { PartnersSection } from "@/components/trust-us/partners-section";
import { TestimonialsSection } from "@/components/trust-us/testimonials-section";
import { DeliverySection } from "@/components/trust-us/delivery-section";
import { ValuesSection } from "@/components/trust-us/values-section";
import { MetricsSection } from "@/components/trust-us/metrics-section";
import { TrustCtaSection } from "@/components/trust-us/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.trustUs.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/trust-us`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/trust-us`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/trust-us`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function TrustUsPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const tu = t.trustUs;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <TrustHeroSection t={tu.hero} />
        <SeniorTeamSection t={tu.seniorTeam} />
        <PartnersSection t={tu.partners} />
        <TestimonialsSection t={tu.testimonials} />
        <DeliverySection t={tu.delivery} />
        <ValuesSection t={tu.values} />
        <MetricsSection t={tu.metrics} />
        <TrustCtaSection t={tu.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
