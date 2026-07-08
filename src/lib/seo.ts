import type { Metadata } from "next";
import { LANGUAGES } from "./i18n";

export const SITE_URL = "https://recruitingworkinbelarus.com";

export const openGraphImage = {
  url: "/images/hero.jpg",
  width: 1600,
  height: 893,
  alt: "BUDEYA legal employment in Belarus",
};

export function getLanguageAlternates(path = "") {
  return {
    ...Object.fromEntries(LANGUAGES.map((lang) => [lang, `/${lang}${path}`])),
    "x-default": `/en${path}`,
  };
}

export function getLocalizedAlternates(lang: string, path = "") {
  return {
    canonical: `/${lang}${path}`,
    languages: getLanguageAlternates(path),
  };
}

export function getOpenGraphMetadata({
  title,
  description,
  lang,
  path = "",
}: {
  title: string;
  description: string;
  lang: string;
  path?: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url: `/${lang}${path}`,
    siteName: "BUDEYA",
    images: [openGraphImage],
    type: "website",
  };
}
