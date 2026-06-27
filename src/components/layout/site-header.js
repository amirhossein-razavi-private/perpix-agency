"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

function NavItem({ href, label, active, onClick, mobile = false }) {
  const className = mobile
    ? `block px-4 py-2.5 text-sm rounded-xl transition-colors ${
        active
          ? "font-bold text-primary-500 bg-primary-50 dark:bg-primary-500/10"
          : "font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
      }`
    : `nav-link px-2.5 xl:px-3 py-2 text-sm whitespace-nowrap pb-1 transition-colors ${
        active
          ? "active font-bold text-gray-900 dark:text-white"
          : "font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  );
}

function useNavLinks(locale, t) {
  const home = `/${locale}`;
  return [
    { key: "home", label: t.home, href: home },
    { key: "caseStudies", label: t.caseStudies, href: `${home}#projects` },
    { key: "trustUs", label: t.trustUs, href: `${home}/trust-us` },
    { key: "services", label: t.services, href: `${home}/services` },
    { key: "process", label: t.process, href: `${home}/process` },
    { key: "whyPerpix", label: t.whyPerpix, href: `${home}/why-perpix` },
    { key: "ourTeam", label: t.ourTeam, href: `${home}/our-team` },
    { key: "education", label: t.education, href: "#" },
    { key: "contact", label: t.contact, href: `${home}/contact` },
  ];
}

function isNavActive(key, pathname, locale) {
  const home = `/${locale}`;
  switch (key) {
    case "home":
      return pathname === home;
    case "trustUs":
      return pathname === `${home}/trust-us`;
    case "services":
      return pathname === `${home}/services`;
    case "process":
      return pathname === `${home}/process`;
    case "whyPerpix":
      return pathname === `${home}/why-perpix`;
    case "ourTeam":
      return pathname === `${home}/our-team`;
    case "contact":
      return pathname === `${home}/contact`;
    default:
      return false;
  }
}

export function SiteHeader({ locale, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const home = `/${locale}`;
  const navLinks = useNavLinks(locale, t);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#06060e]/90 backdrop-blur-xl border-b border-gray-100/80 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-16 lg:h-[72px] gap-4">
          <Link href={home} className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center gradient-bg shadow-lg shadow-primary-500/30 relative overflow-hidden">
              <span className="text-white font-black text-sm tracking-tight relative z-10">
                P
              </span>
              <div className="scan-line" style={{ animationDuration: "2.5s", opacity: 0.4 }} />
            </div>
            <span className="font-black text-xl tracking-tight text-gray-900 dark:text-white">
              Per<span className="gradient-text">{t.brandSuffix}</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 min-w-0">
            {navLinks.map((link) => (
              <NavItem
                key={link.key}
                href={link.href}
                label={link.label}
                active={isNavActive(link.key, pathname, locale)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher currentLocale={locale} label={t.language} />
            <ThemeToggle label={t.theme} />
            <a
              href="#"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white glow-btn gradient-bg"
            >
              {t.cta}
              <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
            </a>
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "close" : "bars"} />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#06060e] px-6 py-5 space-y-1 max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <NavItem
              key={link.key}
              href={link.href}
              label={link.label}
              active={isNavActive(link.key, pathname, locale)}
              onClick={() => setMobileOpen(false)}
              mobile
            />
          ))}
          <div className="pt-3">
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold text-white gradient-bg"
            >
              {t.cta}
              <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
