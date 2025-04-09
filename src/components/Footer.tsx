
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/algoritoai/', label: 'Instagram' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:algoritoai@gmail.com', label: 'Email' },
  ];

  // Navigation links
  const navLinks = [
    { name: language === 'en' ? 'Home' : 'Inicio', href: '#home' },
    { name: language === 'en' ? 'Services' : 'Servicios', href: '#services' },
    { name: language === 'en' ? 'Use Cases' : 'Casos de Uso', href: '#use-cases' },
    { name: language === 'en' ? 'Demos' : 'Demos', href: '#demos' },
    { name: language === 'en' ? 'Reviews' : 'Reseñas', href: '#reviews' },
    { name: language === 'en' ? 'Book a Call' : 'Agendar Cita', href: '#booking' },
    { name: language === 'en' ? 'About' : 'Acerca de', href: '#about' },
  ];

  // Legal links
  const legalLinks = [
    { name: language === 'en' ? 'Terms of Service' : 'Términos de Servicio', href: '#' },
    { name: language === 'en' ? 'Privacy Policy' : 'Política de Privacidad', href: '#' },
  ];

  // Contact info
  const contactInfo = [
    { 
      icon: <MapPin className="h-5 w-5 text-algorito-500" />, 
      text: language === 'en' ? 'Netherlands' : 'Países Bajos'
    },
    { 
      icon: <Mail className="h-5 w-5 text-algorito-500" />, 
      text: 'algoritoai@gmail.com',
      href: 'mailto:algoritoai@gmail.com'
    },
  ];

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-900'} text-white pt-16 pb-8`}>
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png"
              alt="Algorito Logo"
              className="h-14 mb-4"
            />
            <p className="text-gray-400 mb-6">
              {language === 'en'
                ? 'Revolutionizing workflows with AI automation. Let technology handle repetitive tasks while you focus on growth.'
                : 'Revolucionando flujos de trabajo con automatización IA. Deja que la tecnología maneje tareas repetitivas mientras te enfocas en el crecimiento.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-algorito-600 transition-colors duration-300"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-algorito-500">
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Algorito. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
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
