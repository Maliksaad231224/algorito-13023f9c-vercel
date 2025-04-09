
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
        theme === 'dark' ? 'bg-gray-900' : ''
      }`}
    >
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-800/50 to-gray-900' 
          : 'bg-gradient-to-b from-algorito-50/50 to-white'
      } z-0`}></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('heroTitle')}
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-xl mx-auto md:mx-0 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t('heroSubtitle')}
          </p>
          <a
            href="#booking"
            className="btn-primary inline-block text-lg px-8 py-3"
          >
            {t('getStarted')}
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/lovable-uploads/af9707fa-fd5e-4590-984f-fcfc473caab4.png"
            alt="Algorito Mascot"
            className="w-full max-w-md animate-fade-in"
          />
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
