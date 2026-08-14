import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { getStoredItem, setStoredItem, STORAGE_KEYS } from '../utils/storage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return getStoredItem(STORAGE_KEYS.LANGUAGE, 'vi'); // Default to Vietnamese for SEA audience or stored
  });

  useEffect(() => {
    setStoredItem(STORAGE_KEYS.LANGUAGE, language);
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'vi') {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  // Helper to fetch nested translation key: t('nav.characters')
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if key missing in target language
        let fallback = translations['en'];
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  // Helper to get localized property from multi-lang fields: getLocalized(character.name)
  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'] || Object.values(obj)[0] || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        getLocalized,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
