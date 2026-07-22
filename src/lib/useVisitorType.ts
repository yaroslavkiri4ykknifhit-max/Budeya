"use client";

import { useState, useEffect } from 'react';

export type VisitorType = 'agency' | 'jobSeeker' | null;

export function useVisitorType() {
  const [visitorType, setVisitorTypeState] = useState<VisitorType>(null);

  useEffect(() => {
    const savedType = localStorage.getItem('visitorType') as VisitorType;
    setVisitorTypeState(savedType);

    const handleVisitorTypeChange = (event: Event) => {
      const customEvent = event as CustomEvent<VisitorType>;
      if (customEvent.detail !== undefined) {
        setVisitorTypeState(customEvent.detail);
      } else {
        const updated = localStorage.getItem('visitorType') as VisitorType;
        setVisitorTypeState(updated);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'visitorType') {
        setVisitorTypeState(e.newValue as VisitorType);
      }
    };

    window.addEventListener('visitorTypeChanged', handleVisitorTypeChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('visitorTypeChanged', handleVisitorTypeChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setVisitorType = (type: 'agency' | 'jobSeeker') => {
    localStorage.setItem('visitorType', type);
    setVisitorTypeState(type);
    window.dispatchEvent(new CustomEvent('visitorTypeChanged', { detail: type }));
  };

  return {
    visitorType,
    isJobSeeker: visitorType === 'jobSeeker',
    isAgency: visitorType === 'agency',
    setVisitorType,
  };
}
