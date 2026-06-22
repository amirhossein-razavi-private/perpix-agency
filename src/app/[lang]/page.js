import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ImpactStatement } from "@/components/home/impact-statement";
import { DifferentiatorsSection } from "@/components/home/differentiators-section";
import { ProcessSection } from "@/components/home/process-section";
import { StackSection } from "@/components/home/stack-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CtaSection } from "@/components/home/cta-section";

export default async function Home({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <HeroSection t={t.hero} />
        <StatsBar t={t.stats} />
        <ImpactStatement t={t.impact} />
        <DifferentiatorsSection t={t.differentiators} />
        <ProcessSection t={t.process} />
        <StackSection t={t.stack} />
        <FeaturedProjects t={t.projects} />
        <CtaSection t={t.cta} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
