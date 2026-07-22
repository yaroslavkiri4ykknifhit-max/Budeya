"use client";

import React, { useState, useEffect } from 'react';
import { Building2, User, AlertTriangle, X } from 'lucide-react';

export default function VisitorModal({ dict, lang }: { dict: any; lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'selection' | 'jobSeekerWarning'>('selection');

  useEffect(() => {
    const hasSelected = localStorage.getItem('visitorType');
    if (!hasSelected) {
      setIsOpen(true);
    }

    const handleOpenModal = () => {
      setView('selection');
      setIsOpen(true);
    };

    window.addEventListener('openVisitorModal', handleOpenModal);
    return () => window.removeEventListener('openVisitorModal', handleOpenModal);
  }, []);

  if (!isOpen) return null;

  const handleAgencySelect = () => {
    localStorage.setItem('visitorType', 'agency');
    setIsOpen(false);
  };

  const handleJobSeekerSelect = () => {
    setView('jobSeekerWarning');
  };

  const handleClose = () => {
    localStorage.setItem('visitorType', 'jobSeeker');
    setIsOpen(false);
  };

  const isRtl = lang === 'ur';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className={`bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative ${isRtl ? 'text-right' : 'text-left'}`}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {view === 'selection' ? (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{dict.visitorModal.title}</h2>
            <p className="text-gray-600 mb-8">{dict.visitorModal.desc}</p>
            
            <div className="space-y-4">
              <button 
                onClick={handleAgencySelect}
                className="w-full flex items-center gap-4 p-5 rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all text-left group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building2 size={24} className={isRtl ? 'ml-0' : ''} />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                    {dict.visitorModal.agencyBtn}
                  </span>
                </div>
              </button>

              <button 
                onClick={handleJobSeekerSelect}
                className="w-full flex items-center gap-4 p-5 rounded-xl border-2 border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all text-left group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                  <User size={24} className="text-gray-600" />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg">
                    {dict.visitorModal.jobSeekerBtn}
                  </span>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {dict.visitorModal.jobSeekerTitle}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {dict.visitorModal.jobSeekerDesc}
            </p>
            <button 
              onClick={handleClose}
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
            >
              {dict.visitorModal.understandBtn}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
