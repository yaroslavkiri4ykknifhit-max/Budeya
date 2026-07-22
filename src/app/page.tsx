"use client";

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    const userLang = (navigator.language || '').toLowerCase();
    let targetLang = 'en';

    if (userLang.startsWith('bn')) {
      targetLang = 'bn';
    } else if (userLang.startsWith('ur')) {
      targetLang = 'ur';
    } else if (userLang.startsWith('si')) {
      targetLang = 'si';
    } else {
      targetLang = 'en';
    }

    window.location.replace(`/${targetLang}`);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0;url=/en" />
        <title>BUDEYA | Legal Employment in Belarus</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var lang = (navigator.language || '').toLowerCase();
                var target = 'en';
                if (lang.indexOf('bn') === 0) target = 'bn';
                else if (lang.indexOf('ur') === 0) target = 'ur';
                else if (lang.indexOf('si') === 0) target = 'si';
                window.location.replace('/' + target);
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white min-h-screen flex items-center justify-center font-sans">
        <div className="text-center p-8">
          <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-bold">Redirecting to BUDEYA...</p>
        </div>
      </body>
    </html>
  );
}
