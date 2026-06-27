import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhyHeroSection } from "@/components/why-perpix/hero-section";
import { WhyStatsBar } from "@/components/why-perpix/stats-bar";
import { AdvantagesSection } from "@/components/why-perpix/advantages-section";
import { ComparisonSection } from "@/components/why-perpix/comparison-section";
import { CommitmentsSection } from "@/components/why-perpix/commitments-section";
import { ThinkingSection } from "@/components/why-perpix/thinking-section";
import { WhyCtaSection } from "@/components/why-perpix/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.whyPerpixPage.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/why-perpix`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/why-perpix`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/why-perpix`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function WhyPerpixPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const wp = t.whyPerpixPage;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <WhyHeroSection t={wp.hero} />
        <WhyStatsBar stats={wp.stats} />
        <AdvantagesSection t={wp.advantages} />
        <ComparisonSection t={wp.comparison} />
        <CommitmentsSection t={wp.commitments} />
        <ThinkingSection t={wp.thinking} />
        <WhyCtaSection t={wp.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
