export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fa"],
};

export const localeMeta = {
  en: { label: "English", dir: "ltr" },
  fa: { label: "فارسی", dir: "rtl" },
};

export function getDirection(locale) {
  return localeMeta[locale]?.dir ?? "ltr";
}

export function isValidLocale(locale) {
  return i18n.locales.includes(locale);
}
