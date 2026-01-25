
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations, Language, TranslationKeys } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  setLanguageFromUrl: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('fr');
  const location = useLocation();
  const { i18n } = useTranslation();

  // Initialiser la langue depuis l'URL au montage
  useEffect(() => {
    const pathLang = location.pathname.split('/')[1];
    if (pathLang && ['fr', 'en', 'it'].includes(pathLang)) {
      const lang = pathLang as Language;
      setLanguageState(lang);
      i18n.changeLanguage(lang);
    }
  }, [location.pathname, i18n]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
  };

  const setLanguageFromUrl = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
  };

  const value = {
    language,
    setLanguage,
    setLanguageFromUrl,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
