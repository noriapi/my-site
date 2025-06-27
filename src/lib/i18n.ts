import type { JSX } from "solid-js/jsx-runtime";

export type Locale = "ja" | "en";

export const isLocale = (s: string): s is Locale => s === "ja" || s === "en";

export const getLocale = (s?: string): Locale =>
  typeof s === "string" && isLocale(s) ? s : "ja";

export type Dict<T> = Record<Locale, T>;

export const translator =
  (locale?: string) =>
  <T>(dict: Dict<T>): T => {
    return dict[getLocale(locale)];
  };
