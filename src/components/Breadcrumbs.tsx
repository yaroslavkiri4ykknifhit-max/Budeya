import React from 'react';

export default function Breadcrumbs({ lang, dict }: { lang: string, dict: any }) {
  if (!dict.breadcrumbs) return null;

  const items = [
    { name: dict.breadcrumbs.home, url: `https://recruitingworkinbelarus.com/${lang}` },
    { name: dict.breadcrumbs.employment, url: `https://recruitingworkinbelarus.com/${lang}` }
  ];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <div className="w-full bg-light-gray/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="text-sm font-medium text-gray-500 flex items-center gap-2" aria-label="Breadcrumb">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <a href={item.url} className="hover:text-primary transition-colors">{item.name}</a>
              {index < items.length - 1 && <span className="text-gray-400">/</span>}
            </React.Fragment>
          ))}
        </nav>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </div>
    </div>
  );
}
