import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TeamHeroSection } from "@/components/our-team/hero-section";
import { TeamGridSection } from "@/components/our-team/team-grid-section";
import { DifferenceSection } from "@/components/our-team/difference-section";
import { StandardsSection } from "@/components/our-team/standards-section";
import { TeamCtaSection } from "@/components/our-team/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.ourTeamPage.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/our-team`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/our-team`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/our-team`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function OurTeamPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const ot = t.ourTeamPage;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <TeamHeroSection t={ot.hero} />
        <TeamGridSection t={ot.team} />
        <DifferenceSection t={ot.difference} />
        <StandardsSection t={ot.standards} />
        <TeamCtaSection t={ot.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
