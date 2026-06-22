"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, localeMeta } from "@/i18n/config";

export function LanguageSwitcher({ currentLocale, label = "Language" }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale) {
    if (locale === currentLocale) return;
    const segments = pathname.split("/");
    if (i18n.locales.includes(segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <div className="relative group">
      <button
        type="button"
        aria-label={label}
        className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 hover:border-primary-400 hover:text-primary-500 transition-all uppercase"
      >
        {currentLocale}
      </button>
      <ul className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all absolute top-full end-0 mt-3 w-36 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-white/10 shadow-2xl shadow-gray-200/60 dark:shadow-black/60 p-2 z-50">
        {i18n.locales.map((locale) => (
          <li key={locale}>
            <button
              type="button"
              lang={locale}
              onClick={() => switchTo(locale)}
              className={`w-full text-start px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                locale === currentLocale
                  ? "bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              {localeMeta[locale]?.label ?? locale}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
