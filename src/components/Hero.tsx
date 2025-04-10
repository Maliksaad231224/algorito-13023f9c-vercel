
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center py-20 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-algorito-50/70 via-white to-white'
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-algorito-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-algorito-200/10 rounded-full blur-3xl"></div>
        
        {theme === 'dark' && (
          <>
            <div className="absolute top-40 left-1/4 w-1 h-1 bg-algorito-400 rounded-full animate-pulse"></div>
            <div className="absolute top-60 right-1/3 w-2 h-2 bg-algorito-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-algorito-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-algorito-200 rounded-full animate-pulse"></div>
          </>
        )}
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          {/* Custom logo display in hero section */}
          <div className="mb-8 inline-block">
            <img
              src="/lovable-uploads/860c51a7-25b8-467e-bd34-65f7d8440f5a.png"
              alt="Algorito"
              className="h-16 md:h-20 mb-2"
            />
            <p className="text-sm tracking-widest text-algorito-700 dark:text-algorito-400 uppercase font-medium">
              {t('automateNow')}
            </p>
          </div>
          
          <div className="mb-6 inline-block px-4 py-1.5 bg-algorito-100 dark:bg-algorito-900/40 text-algorito-700 dark:text-algorito-300 rounded-md font-medium text-sm">
            {t('heroTagline')}
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('heroTitle')}
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-xl mx-auto md:mx-0 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('heroSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#booking"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              {t('getStarted')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#services"
              className="btn-secondary"
            >
              {t('exploreServices')}
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          {theme === 'dark' ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-algorito-600/20 to-algorito-400/20 rounded-3xl blur-3xl"></div>
              <img
                src="/lovable-uploads/57ded8d5-87c0-4446-845b-249acf04b6c7.png"
                alt="Algorito Mascot Dark"
                className="w-full max-w-md relative animate-float z-10"
              />
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-algorito-200/30 to-algorito-100/30 rounded-3xl blur-3xl"></div>
              <img
                src="/lovable-uploads/d7c2721c-8791-47fb-8965-369780bbb9cd.png"
                alt="Algorito Mascot Light"
                className="w-full max-w-md relative animate-float z-10"
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-16 md:h-24 fill-current ${
            theme === 'dark' ? 'text-gray-900' : 'text-white'
          }`}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C159,17.69,213.34,50,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
