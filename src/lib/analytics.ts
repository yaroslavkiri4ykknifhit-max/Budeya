export type ContactClickPayload = {
  language: string;
  country?: string;
  placement?: string;
};

export function trackWhatsAppClick(payload: ContactClickPayload) {
  console.log("whatsapp_click", payload);
}

export function trackPhoneClick(payload: ContactClickPayload) {
  console.log("phone_click", payload);
}

export function trackTelegramClick(payload: ContactClickPayload) {
  console.log("telegram_click", payload);
}
