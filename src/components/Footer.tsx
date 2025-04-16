import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import LanguageToggle from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  const handleSendMessage = () => {
    const chatButton = document.querySelector('.chat-widget-button');
    if (chatButton instanceof HTMLElement) {
      chatButton.click();
      
      // Force focus on the input field after a delay
      setTimeout(() => {
        const chatInput = document.querySelector('.chat-widget-input');
        if (chatInput instanceof HTMLElement) {
          chatInput.focus();
        }
      }, 500);
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left">
            <img 
              src="/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png" 
              alt="Algorito Logo" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('aboutDesc')}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Twitter">
                <img 
                  src="/lovable-uploads/49ccf7a5-024d-47f9-879d-bf893774dc62.png" 
                  alt="Twitter" 
                  className="h-6 w-6 transition-transform hover:scale-110" 
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img 
                  src="/lovable-uploads/57ded8d5-87c0-4446-845b-249acf04b6c7.png" 
                  alt="Facebook" 
                  className="h-6 w-6 transition-transform hover:scale-110" 
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img 
                  src="/lovable-uploads/c4e082dd-3b87-4e72-a439-33642d76afc2.png" 
                  alt="LinkedIn" 
                  className="h-6 w-6 transition-transform hover:scale-110" 
                />
              </a>
            </div>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{t('contactTitle')}</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white">{t('ourLocation')}</h4>
              <p className="text-slate-600 dark:text-slate-400">Nava, Asturias, Spain</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-slate-800 dark:text-white">{t('emailUs')}</h4>
              <p className="text-slate-600 dark:text-slate-400">info@algorito.net</p>
            </div>
            <Button 
              className="flex items-center space-x-2"
              variant="default"
              onClick={handleSendMessage}
            >
              <Mail className="h-4 w-4" />
              <span>{t('sendMessage')}</span>
            </Button>
          </div>
          
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{t('keyFeatures')}</h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>- {t('workflowAutomation')}</li>
              <li>- {t('websiteBuilding')}</li>
              <li>- {t('chatbotIntegration')}</li>
              <li>- {t('crmAutomation')}</li>
              <li>- {t('dataSync')}</li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-t border-slate-200 dark:border-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            &copy; {year} Algorito. {t('termsOfService')} | {t('privacyPolicy')}
          </p>
          <div className="flex items-center space-x-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
