import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';

export default function Hero({ dict, language }: { dict: any, language: string }) {
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
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
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
