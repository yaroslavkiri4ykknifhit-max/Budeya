export const LANGUAGES = ["en", "bn", "ur", "si"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

export function isLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function getStaticLanguageParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}
