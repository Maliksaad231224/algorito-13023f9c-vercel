
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
      onClick={toggleLanguage}
      variant="ghost"
      className="px-3 py-2 rounded-md text-sm font-medium hover:text-algorito-600 dark:hover:text-algorito-400 transition-colors"
      aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
    >
      <div className="w-6 h-6 overflow-hidden rounded-full">
        {language === 'en' ? (
          <img 
            src="/lovable-uploads/a7a05ee5-45e0-4805-9079-3f72140f5b55.png" 
            alt="Switch to Spanish" 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            src="/lovable-uploads/0c43c1eb-26af-4f2d-9ed9-4dcdcf5c28c1.png" 
            alt="Switch to English" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </Button>
  );
};

export default LanguageToggle;
