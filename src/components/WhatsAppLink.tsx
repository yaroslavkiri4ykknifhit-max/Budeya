"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/contact";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useVisitorType } from "@/lib/useVisitorType";

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
  const { isJobSeeker } = useVisitorType();

  if (isJobSeeker) {
    return (
      <span
        title={title || "Only for recruitment agencies"}
        aria-label={ariaLabel}
        className={`${className || ''} opacity-40 cursor-not-allowed pointer-events-none select-none`}
      >
        {children}
      </span>
    );
  }

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
