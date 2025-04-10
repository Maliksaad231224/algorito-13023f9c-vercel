
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: t('home'), href: '#home' },
    { name: t('services'), href: '#services' },
    { name: t('useCases'), href: '#use-cases' },
    { name: t('demos'), href: '#demos' },
    { name: t('reviews'), href: '#reviews' },
    { name: t('bookCall'), href: '#booking' },
    { name: t('about'), href: '#about' },
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Improved smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Estimated navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (theme === 'dark' 
              ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-2' 
              : 'bg-white/95 backdrop-blur-sm shadow-lg py-2') 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="flex items-center"
        >
          <img
            src="/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png"
            alt="Algorito Logo"
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-algorito-600 transition-colors ${
                item.name === t('bookCall')
                  ? 'bg-algorito-600 text-white hover:bg-algorito-700 hover:text-white ml-2'
                  : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center ml-4 border-l border-gray-200 dark:border-gray-700 pl-4">
            <LanguageToggle />
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-algorito-600 dark:hover:text-algorito-400 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          
          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-algorito-600 dark:hover:text-algorito-400 focus:outline-none transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 ml-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-algorito-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        } ${theme === 'dark' ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} shadow-lg`}
      >
        <div className="px-4 py-3 space-y-1 max-h-[80vh] overflow-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                item.name === t('bookCall')
                  ? 'bg-algorito-600 text-white'
                  : theme === 'dark' 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-700 hover:bg-algorito-50 hover:text-algorito-600'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
