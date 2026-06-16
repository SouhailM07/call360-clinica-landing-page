import "server-only";

const dictionaries = {
  en: () => import("../../messages/en.json").then((module) => module.default),
  fr: () => import("../../messages/fr.json").then((module) => module.default),
  ar: () => import("../../messages/ar.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales = ["en", "fr", "ar"] as const;

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as any);

export const getDictionary = async (locale: Locale) => {
  if (!hasLocale(locale)) return dictionaries.en();
  return dictionaries[locale]();
};
