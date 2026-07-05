import React from 'react';

export default function StructuredData({ dict, lang }: { dict: any, lang: string }) {
  if (!dict.meta) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "BUDEYA",
    "url": `https://recruitingworkinbelarus.com/${lang}`,
    "logo": "https://recruitingworkinbelarus.com/logo.svg",
    "description": dict.meta.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minsk",
      "addressCountry": "BY"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+375-44-548-08-08",
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
