import { trackContactConversion } from './googleAds';

export type ContactClickPayload = {
  language: string;
  country?: string;
  placement?: string;
};

export function trackWhatsAppClick(payload: ContactClickPayload) {
  console.log("whatsapp_click", payload);
  trackContactConversion();
}

export function trackPhoneClick(payload: ContactClickPayload) {
  console.log("phone_click", payload);
  trackContactConversion();
}

export function trackTelegramClick(payload: ContactClickPayload) {
  console.log("telegram_click", payload);
  trackContactConversion();
}

export function trackEmailClick(payload: ContactClickPayload) {
  console.log("email_click", payload);
  trackContactConversion();
}
