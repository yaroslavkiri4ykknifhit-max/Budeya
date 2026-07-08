"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, Phone, Mail, MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER } from '@/lib/contact';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function Header({ dict, currentLang }: { dict: any, currentLang: string }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: dict.nav.advantages, href: `/${currentLang}#advantages` },
    { label: dict.nav.countries, href: `/${currentLang}#countries` },
    { label: dict.nav.services, href: `/${currentLang}#services` },
    { label: dict.nav.faq, href: `/${currentLang}#faq` },
    { label: dict.nav.contact, href: `/${currentLang}#contact` },
  ];

  const changeLanguage = (lang: string) => {
    window.location.replace(`/${lang}`);
  };

  return (
    <>
      {/* Top Bar for Contacts & Socials */}
      <div className="bg-gray-900 text-white text-xs py-2 w-full z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center justify-center gap-4 w-full sm:w-auto sm:justify-start">
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => trackPhoneClick({ language: currentLang, placement: 'header_topbar' })}
              className="hover:text-primary transition-colors flex items-center gap-1 font-medium text-sm"
            >
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
              <img src="/logo.svg" alt="BUDEYA Logo" className="h-6 w-auto brightness-0 invert" />
            </div>
            <div>
              <div className="font-bold text-xl leading-tight text-gray-900">{dict.hero.brand}</div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{dict.hero.agency}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-800">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors flex items-center gap-1">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-primary bg-gray-100 px-3 py-1.5 rounded-md"
              >
                <span className="text-base leading-none">
                  {currentLang === 'bn' ? '🇧🇩' : currentLang === 'ur' ? '🇵🇰' : currentLang === 'si' ? '🇱🇰' : '🇳🇬'}
                </span>
                <span className="uppercase">{currentLang}</span>
                <ChevronDown size={14} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-28 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden flex flex-col z-50">
                  {[
                    { code: 'en', flag: '🇳🇬', label: 'EN' },
                    { code: 'bn', flag: '🇧🇩', label: 'BN' },
                    { code: 'ur', flag: '🇵🇰', label: 'UR' },
                    { code: 'si', flag: '🇱🇰', label: 'SI' }
                  ].map(lang => (
                    <button 
                      key={lang.code} 
                      onClick={() => changeLanguage(lang.code)}
                      className="px-4 py-2.5 text-sm text-left hover:bg-primary hover:text-white font-bold transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg leading-none">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href={getWhatsAppUrl(currentLang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick({ language: currentLang, placement: 'header_cta' })}
              className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 items-center gap-2"
            >
              <MessageCircle size={16} />
              {dict.nav.requestCall}
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 font-bold text-gray-900">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-3 rounded-lg hover:bg-gray-50 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl(currentLang)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMenuOpen(false);
                  trackWhatsAppClick({ language: currentLang, placement: 'header_mobile_cta' });
                }}
                className="mt-3 bg-primary text-white px-5 py-3.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                {dict.nav.requestCall}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
