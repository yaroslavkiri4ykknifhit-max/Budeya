"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Mail } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { PHONE_NUMBER, TELEGRAM_URL } from '@/lib/contact';
import { trackPhoneClick, trackTelegramClick, trackEmailClick } from '@/lib/analytics';
import { useVisitorType } from '@/lib/useVisitorType';

export default function Hero({ dict, language }: { dict: any, language: string }) {
  const { isJobSeeker } = useVisitorType();

  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-24">
      <div className="absolute top-0 right-0 w-1/2 h-[800px] bg-primary/5 rounded-bl-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        <div className="flex-1 pt-12 lg:pt-24 z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-700 font-bold text-sm mb-6 border border-red-100">
            <CheckCircle2 size={16} />
            <span>{dict.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            {dict.hero.title}
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed font-medium">
            {dict.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            <WhatsAppLink
              language={language}
              placement="hero_b2b"
              title="WhatsApp"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary-dark hover:-translate-y-0.5"
            >
              <MessageCircle size={21} />
              <span>{dict.hero.button}</span>
              <ArrowRight size={20} />
            </WhatsAppLink>
            
            <a 
              href="#stages" 
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-bold text-gray-900 border-2 border-gray-200 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <span>{dict.hero.button2}</span>
            </a>
          </div>

          {/* Social and Contact Icons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {isJobSeeker ? (
              <>
                <span title="Only for recruitment agencies" className="w-12 h-12 rounded-full bg-gray-100 opacity-40 cursor-not-allowed pointer-events-none text-gray-900 flex items-center justify-center shadow-sm select-none">
                  <Phone size={22} />
                </span>
                <span title="Only for recruitment agencies" className="w-12 h-12 rounded-full bg-gray-100 opacity-40 cursor-not-allowed pointer-events-none text-gray-900 flex items-center justify-center shadow-sm select-none">
                  <Mail size={22} />
                </span>
                <span title="Only for recruitment agencies" className="w-12 h-12 rounded-full bg-[#0088cc]/30 opacity-40 cursor-not-allowed pointer-events-none text-white flex items-center justify-center shadow-sm select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </span>
                <span title="Only for recruitment agencies" className="w-12 h-12 rounded-full bg-[#07C160]/30 opacity-40 cursor-not-allowed pointer-events-none text-white flex items-center justify-center shadow-sm select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8.618 1.936C3.868 1.936 0 5.161 0 9.135c0 2.19 1.157 4.148 2.973 5.426-.143.682-.486 1.914-.486 1.914s1.714-.467 2.457-.936c1.129.28 2.37.452 3.674.452.322 0 .638-.02.946-.048-.255-.6-.4-1.258-.4-1.94 0-2.956 2.766-5.353 6.177-5.353h.291c-.512-3.731-4.04-6.714-8.014-6.714zM6.071 5.926c.451 0 .817.366.817.817 0 .452-.366.818-.818.818-.452 0-.818-.366-.818-.818 0-.451.366-.817.818-.817zm5.093 0c.452 0 .817.366.817.817 0 .452-.366.818-.818.818-.451 0-.818-.366-.818-.818 0-.451.367-.817.818-.817zm5.176 4.793c-3.111 0-5.632 2.198-5.632 4.908s2.521 4.908 5.632 4.908c1.07 0 2.08-.28 2.973-.772.632.404 2.222.84 2.222.84s-.325-1.121-.447-1.748c1.439-1.026 2.36-2.585 2.36-4.32 0-2.71-2.521-4.908-5.632-4.908zm-1.892 2.71c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66zm3.784 0c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66z"/></svg>
                </span>
                <span title="Only for recruitment agencies" className="w-12 h-12 rounded-full bg-gray-400/30 opacity-40 cursor-not-allowed pointer-events-none text-white flex items-center justify-center shadow-sm select-none">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </span>
              </>
            ) : (
              <>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={() => trackPhoneClick({ language, placement: 'hero_contact' })}
                  title="Phone"
                  className="w-12 h-12 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all shadow-sm"
                >
                  <Phone size={22} />
                </a>
                <a
                  href="mailto:Inkostehno@gmail.com"
                  title="Email"
                  onClick={() => trackEmailClick({ language, placement: 'hero_contact' })}
                  className="w-12 h-12 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all shadow-sm"
                >
                  <Mail size={22} />
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTelegramClick({ language, placement: 'hero_contact' })}
                  title="Telegram"
                  className="w-12 h-12 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:bg-[#007ab8] hover:scale-110 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a
                  href="weixin://dl/chat?alex480808"
                  title="WeChat ID: alex480808"
                  className="w-12 h-12 rounded-full bg-[#07C160] text-white flex items-center justify-center hover:bg-[#06ae56] hover:scale-110 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M8.618 1.936C3.868 1.936 0 5.161 0 9.135c0 2.19 1.157 4.148 2.973 5.426-.143.682-.486 1.914-.486 1.914s1.714-.467 2.457-.936c1.129.28 2.37.452 3.674.452.322 0 .638-.02.946-.048-.255-.6-.4-1.258-.4-1.94 0-2.956 2.766-5.353 6.177-5.353h.291c-.512-3.731-4.04-6.714-8.014-6.714zM6.071 5.926c.451 0 .817.366.817.817 0 .452-.366.818-.818.818-.452 0-.818-.366-.818-.818 0-.451.366-.817.818-.817zm5.093 0c.452 0 .817.366.817.817 0 .452-.366.818-.818.818-.451 0-.818-.366-.818-.818 0-.451.367-.817.818-.817zm5.176 4.793c-3.111 0-5.632 2.198-5.632 4.908s2.521 4.908 5.632 4.908c1.07 0 2.08-.28 2.973-.772.632.404 2.222.84 2.222.84s-.325-1.121-.447-1.748c1.439-1.026 2.36-2.585 2.36-4.32 0-2.71-2.521-4.908-5.632-4.908zm-1.892 2.71c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66zm3.784 0c.365 0 .66.294.66.66a.661.661 0 0 1-.66.66.66.66 0 0 1-.66-.66c0-.366.295-.66.66-.66z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/budeya.work/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 font-medium mb-10 max-w-xl">
            {dict.hero.b2bWarning}
          </p>

          {dict.trust?.items && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {dict.trust.items.map((item: string) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-sm font-bold text-gray-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 relative z-10 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-[3rem] transform rotate-3 scale-105 -z-10 blur-sm"></div>
            <img 
              src="/images/hero.jpg" 
              alt="BUDEYA employment support in Belarus"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
