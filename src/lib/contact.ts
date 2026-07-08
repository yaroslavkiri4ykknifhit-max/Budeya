import { DEFAULT_LANGUAGE, isLanguage, type Language } from "./i18n";

export const WHATSAPP_NUMBER = "375445480808";
export const PHONE_NUMBER = "+375445480808";
export const TELEGRAM_URL = "https://t.me/alex480808";

const whatsappMessages: Record<Language, string> = {
  en: "Hello BUDEYA, I want to apply for legal employment in Belarus.",
  bn: "Hello BUDEYA, I want to apply for work in Belarus.",
  ur: "Hello BUDEYA, I want to apply for work in Belarus.",
  si: "Hello BUDEYA, I want to apply for work in Belarus.",
};

export function getWhatsAppMessage(language: string) {
  return whatsappMessages[isLanguage(language) ? language : DEFAULT_LANGUAGE];
}

export function getWhatsAppUrl(language: string) {
  const text = encodeURIComponent(getWhatsAppMessage(language));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
