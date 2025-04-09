
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm hover:bg-algorito-100 transition-colors"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
