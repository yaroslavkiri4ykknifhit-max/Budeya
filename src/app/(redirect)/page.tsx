"use client";

import { useEffect } from 'react';

export default function RootRedirect() {
  useEffect(() => {
    const detectAndRedirect = async () => {
      let targetLang = 'en';
      try {
        // Try to get country from IP
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = data.country_code;

        if (country === 'BD') {
          targetLang = 'bn';
        } else if (country === 'PK') {
          targetLang = 'ur';
        } else if (country === 'LK') {
          targetLang = 'si';
        } else {
           targetLang = 'en';
        }
      } catch (e) {
        targetLang = 'en';
      }

      window.location.replace(`/${targetLang}`);
    };

    detectAndRedirect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light-gray">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-500 font-medium">Detecting region...</p>
    </div>
  );
}
