import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any, lang?: string }) {
  const privacyLink = lang ? `/${lang}/privacy` : '/privacy';
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-xl">
                <img src="/logo.svg" alt="BUDEYA Logo" className="h-6 w-auto brightness-0 invert" />
              </div>
              <div>
                <h2 className="font-bold text-xl leading-tight text-gray-900">{dict.hero.brand}</h2>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{dict.hero.agency}</p>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              {dict.footer.org}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">{dict.nav.services}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">{dict.services.b2b.title}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">{dict.services.b2c.title}</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary transition-colors">{dict.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">{dict.footer.contacts}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-500">
                  <strong className="text-gray-700 block">{dict.footer.addressTitle}</strong>
                  {dict.footer.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-500">
                  <strong className="text-gray-700 block">{dict.footer.hoursTitle}</strong>
                  {dict.footer.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {dict.footer.org}
          </p>
          <div className="flex gap-4">
            <a href={privacyLink} className="text-gray-500 hover:text-primary transition-colors text-sm">{dict.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
