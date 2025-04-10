
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-algorito-600 dark:hover:text-algorito-400 transition-colors"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
