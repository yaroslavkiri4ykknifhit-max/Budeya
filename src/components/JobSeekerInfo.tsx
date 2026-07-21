"use client";

import React, { useState } from 'react';
import { Info, X, ShieldCheck } from 'lucide-react';

export default function JobSeekerInfo({ dict, lang }: { dict: any; lang: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isRtl = lang === 'ur';

  return (
    <section id="job-seekers" className="w-full bg-amber-50 py-16 border-y border-amber-100 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Info className="text-amber-600" size={32} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {dict.jobSeekerInfo.title}
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          {dict.jobSeekerInfo.desc}
        </p>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
        >
          {dict.jobSeekerInfo.button}
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div 
            className={`bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative ${isRtl ? 'text-right' : 'text-left'}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} text-gray-400 hover:text-gray-900 transition-colors`}
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{dict.jobSeekerInfo.modalTitle}</h3>
              <p className="text-gray-600 mb-6">{dict.jobSeekerInfo.modalDesc}</p>
              
              <ul className="space-y-4 mb-8">
                {dict.jobSeekerInfo.tips.map((tip: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <ShieldCheck className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-100 text-gray-900 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors"
              >
                {dict.jobSeekerInfo.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
