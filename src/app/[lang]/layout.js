import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "../globals.css";
import { i18n, getDirection, isValidLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://perpix.agency";

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);

  const languages = Object.fromEntries(
    i18n.locales.map((l) => [l, `/${l}`])
  );

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.metadata.title,
      template: `%s | Perpix Agency`,
    },
    description: dict.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: `${siteUrl}/${locale}`,
      siteName: "Perpix Agency",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : i18n.defaultLocale;
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
