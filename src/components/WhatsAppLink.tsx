"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/contact";
import { trackWhatsAppClick } from "@/lib/analytics";

type WhatsAppLinkProps = {
  language: string;
  placement: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({
  language,
  placement,
  className,
  title,
  ariaLabel,
  children,
}: WhatsAppLinkProps) {
  return (
    <a
      href={getWhatsAppUrl(language)}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackWhatsAppClick({ language, placement })}
    >
      {children}
    </a>
  );
}
