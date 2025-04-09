
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  // Social media links (removed Twitter, Facebook, and Github)
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  ];

  // Navigation links
  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('useCases'), href: '#use-cases' },
    { name: t('demos'), href: '#demos' },
    { name: t('reviews'), href: '#reviews' },
    { name: t('bookCall'), href: '#booking' },
    { name: t('about'), href: '#about' },
  ];

  // Legal links
  const legalLinks = [
    { name: t('termsOfService'), href: '#' },
    { name: t('privacyPolicy'), href: '#' },
  ];

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-900'} text-white pt-16 pb-8`}>
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/lovable-uploads/a82de35b-2205-43b8-a99a-917b1b558e84.png"
              alt="Algorito Logo"
              className="h-14 mb-4"
            />
            <p className="text-gray-400 mb-6">
              {t('language') === 'en'
                ? 'Revolutionizing workflows with AI automation. Let technology handle repetitive tasks while you focus on growth.'
                : 'Revolucionando flujos de trabajo con automatización IA. Deja que la tecnología maneje tareas repetitivas mientras te enfocas en el crecimiento.'}
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-algorito-600 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-algorito-500">
              {t('language') === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-algorito-500">
              {t('language') === 'en' ? 'Newsletter' : 'Boletín'}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('language') === 'en'
                ? 'Subscribe to our newsletter for the latest updates.'
                : 'Suscríbete a nuestro boletín para recibir las últimas actualizaciones.'}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('language') === 'en' ? 'Your email' : 'Tu email'}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow"
              />
              <button 
                type="submit" 
                className="bg-algorito-600 hover:bg-algorito-700 px-4 py-2 rounded-r-md text-white transition-colors duration-300"
              >
                {t('language') === 'en' ? 'Subscribe' : 'Suscribir'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Algorito. {t('language') === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
          
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
