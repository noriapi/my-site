export const LOCALES = ["ja", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const isLocale = (s: string): s is Locale =>
  LOCALES.includes(s as Locale);

export const getLocale = (s?: string): Locale =>
  typeof s === "string" && isLocale(s) ? s : "ja";

export type Dict<T> = Record<Locale, T>;

export const translator =
  (locale?: string) =>
  <T>(dict: Dict<T>): T => {
    return dict[getLocale(locale)];
  };
