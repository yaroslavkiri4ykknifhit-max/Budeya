"use client";

import React, { useState } from 'react';
import { ChevronDown, Globe, Phone, Mail, Send, MessageCircle, MessageSquare } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function Header({ dict, currentLang }: { dict: any, currentLang: string }) {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    const isGitHubPages = window.location.hostname.includes('github.io');
    const basePath = isGitHubPages ? '/Budeya' : '';
    window.location.replace(`${basePath}/${lang}`);
  };

  return (
    <>
      {/* Top Bar for Contacts & Socials */}
      <div className="bg-gray-900 text-white text-xs py-2 w-full z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center justify-center gap-4 w-full sm:w-auto sm:justify-start">
            <a href="tel:+375445480808" className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm">
              <Phone size={14} /> +375 44 548 08 08
            </a>
            <a href="mailto:Inkostehno@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm">
              <Mail size={14} /> Inkostehno@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center">
              <img src="./logo.svg" alt="BUDEYA Logo" className="h-6 w-auto brightness-0 invert" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-tight text-gray-900">{dict.hero.brand}</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{dict.hero.agency}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-800">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">{dict.nav.advantages}</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">{dict.nav.countries}</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">{dict.nav.services}</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">{dict.nav.faq}</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-sm font-bold text-gray-800 hover:text-primary bg-gray-100 px-3 py-1.5 rounded-md"
              >
                <Globe size={16} />
                <span className="uppercase">{currentLang}</span>
                <ChevronDown size={14} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex flex-col z-50">
                  {['en', 'ru', 'hi', 'ur'].map(lang => (
                    <button 
                      key={lang} 
                      onClick={() => changeLanguage(lang)}
                      className="px-4 py-2 text-sm text-left hover:bg-primary hover:text-white font-bold uppercase transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
              {dict.nav.requestCall}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
