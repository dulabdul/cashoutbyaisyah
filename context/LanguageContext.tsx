'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types';
import { content } from '@/data/content';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: typeof content.my;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('my');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'my' ? 'en' : 'my'));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
