import { trackContactConversion } from './googleAds';

export type ContactClickPayload = {
  language: string;
  country?: string;
  placement?: string;
};

export function trackWhatsAppClick(payload: ContactClickPayload) {
  console.log("b2b_whatsapp_click", payload);
  trackContactConversion();
}

export function trackPhoneClick(payload: ContactClickPayload) {
  console.log("b2b_phone_click", payload);
  trackContactConversion();
}

export function trackTelegramClick(payload: ContactClickPayload) {
  console.log("b2b_telegram_click", payload);
  trackContactConversion();
}

export function trackEmailClick(payload: ContactClickPayload) {
  console.log("b2b_email_click", payload);
  trackContactConversion();
}
