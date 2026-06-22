import "server-only";
import { i18n } from "@/i18n/config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fa: () => import("@/dictionaries/fa.json").then((m) => m.default),
};

export async function getDictionary(locale) {
  const load = dictionaries[locale] ?? dictionaries[i18n.defaultLocale];
  return load();
}
