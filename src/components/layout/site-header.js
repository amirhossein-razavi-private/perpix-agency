"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

function ServicesMenu({ menu }) {
  return (
    <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all absolute top-full start-0 mt-4 w-[580px] bg-white dark:bg-gray-950 rounded-2xl shadow-2xl shadow-gray-200/60 dark:shadow-black/60 border border-gray-100 dark:border-white/10 p-6 z-50">
      <div className="grid grid-cols-2 gap-3">
        {menu.items.map((item) => (
          <a
            key={item.title}
            href="#"
            className="flex items-start gap-3.5 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group/item"
          >
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-primary-500/25">
              <Icon name={item.icon} className="text-white text-xs" />
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 dark:text-white mb-1 group-hover/item:text-primary-500 transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 led-blink" />
          <span className="text-xs text-gray-400">{menu.consultation}</span>
        </div>
        <a
          href="#"
          className="text-xs font-bold text-primary-500 flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          {menu.viewAll}
          <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
        </a>
      </div>
    </div>
  );
}

function CaseStudiesMenu({ menu }) {
  return (
    <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all absolute top-full start-0 mt-4 w-[500px] bg-white dark:bg-gray-950 rounded-2xl shadow-2xl shadow-gray-200/60 dark:shadow-black/60 border border-gray-100 dark:border-white/10 p-6 z-50">
      <div className="space-y-2">
        {menu.items.map((item) => (
          <a
            key={item.title}
            href="#"
            className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all group/item"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 flex items-center justify-center flex-shrink-0">
              <Icon name={item.icon} className="text-primary-500 text-sm" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-gray-900 dark:text-white group-hover/item:text-primary-500 transition-colors">
                {item.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{item.meta}</p>
            </div>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg num-ltr">
              {item.metric}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-white/10">
        <a
          href="#"
          className="text-xs font-bold text-primary-500 flex items-center gap-1.5 hover:gap-2.5 transition-all"
        >
          {menu.viewAll}
          <Icon name="arrow-right" className="text-xs rtl:rotate-180" />
        </a>
      </div>
    </div>
  );
}

export function SiteHeader({ locale, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const home = `/${locale}`;

  const simpleLinks = [
    { label: t.process, href: "#process" },
    { label: t.about, href: "#" },
    { label: t.contact, href: "#" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-[#06060e]/90 backdrop-blur-xl border-b border-gray-100/80 dark:border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-14">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              href={home}
              className="nav-link active px-4 py-2 text-sm font-bold text-gray-900 dark:text-white pb-1"
            >
              {t.home}
            </Link>

            <div className="group relative">
              <button className="nav-link px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 pb-1">
                {t.services}
                <Icon name="chevron-down" className="text-[10px] opacity-50 mt-0.5" />
              </button>
              <ServicesMenu menu={t.servicesMenu} />
            </div>

            <div className="group relative">
              <button className="nav-link px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5 pb-1">
                {t.caseStudies}
                <Icon name="chevron-down" className="text-[10px] opacity-50 mt-0.5" />
              </button>
              <CaseStudiesMenu menu={t.caseStudiesMenu} />
            </div>

            {simpleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white pb-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#06060e] px-6 py-5 space-y-1">
          <Link
            href={home}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 text-sm font-bold text-primary-500 rounded-xl bg-primary-50 dark:bg-primary-500/10"
          >
            {t.home}
          </Link>
          {[
            { label: t.services, href: "#" },
            { label: t.caseStudies, href: "#" },
            { label: t.process, href: "#process" },
            { label: t.about, href: "#" },
            { label: t.contact, href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {link.label}
            </a>
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
