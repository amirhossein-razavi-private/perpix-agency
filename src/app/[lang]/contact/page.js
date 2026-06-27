import { i18n, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactHeroSection } from "@/components/contact/hero-section";
import { InquirySection } from "@/components/contact/inquiry-section";
import { ContactCtaSection } from "@/components/contact/cta-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  const meta = dict.contactPage.metadata;

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}/contact`])
  );

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}/contact`,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ContactPage({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const t = await getDictionary(locale);
  const cp = t.contactPage;

  const navDict = { ...t.nav, language: t.common.language, theme: t.common.theme };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#06060e] text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <SiteHeader locale={locale} t={navDict} />

      <main className="flex-1">
        <ContactHeroSection t={cp.hero} />
        <InquirySection form={cp.form} sidebar={cp.sidebar} contact={t.footer.contact} />
        <ContactCtaSection t={cp.cta} locale={locale} />
      </main>

      <SiteFooter t={t.footer} />
    </div>
  );
}
