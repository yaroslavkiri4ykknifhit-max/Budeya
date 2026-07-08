"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ dict }: { dict: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-24 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{dict.faq.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">{dict.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {dict.faq.list.map((faq: any, idx: number) => (
            <div 
              key={idx} 
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'shadow-md ring-1 ring-primary/20' : 'hover:border-gray-200'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-white text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
