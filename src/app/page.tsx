"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const detectAndRedirect = async () => {
      let targetLang = 'en';
      try {
        // Try to get country from IP
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = data.country_code;

        if (['RU', 'BY', 'KZ', 'UA'].includes(country)) {
          targetLang = 'ru';
        } else if (country === 'IN') {
          targetLang = 'hi';
        } else if (country === 'PK') {
          targetLang = 'ur';
        } else {
           // Fallback to browser lang
           const browserLang = navigator.language.slice(0, 2).toLowerCase();
           if (['ru', 'be', 'uk', 'kk'].includes(browserLang)) targetLang = 'ru';
           if (browserLang === 'hi') targetLang = 'hi';
           if (browserLang === 'ur') targetLang = 'ur';
        }
      } catch (e) {
        // Fallback to browser lang if IP fetch fails
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (['ru', 'be', 'uk', 'kk'].includes(browserLang)) targetLang = 'ru';
        if (browserLang === 'hi') targetLang = 'hi';
        if (browserLang === 'ur') targetLang = 'ur';
      }

      window.location.href = `${window.location.pathname.startsWith('/Budeya') ? '/Budeya' : ''}/${targetLang}`;
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
