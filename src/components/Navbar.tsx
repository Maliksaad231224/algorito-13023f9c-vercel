
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

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (theme === 'dark' ? 'bg-gray-900 shadow-md py-2' : 'bg-white shadow-md py-2') 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/lovable-uploads/7f16a909-e762-4a82-9736-3824035d5443.png"
            alt="Algorito Logo"
            className="h-12 md:h-14"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
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
          
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium hover:text-algorito-600 transition-colors ${
                item.name === t('bookCall')
                  ? 'bg-algorito-600 text-white hover:bg-algorito-700 hover:text-white ml-2'
                  : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.name}
            </a>
          ))}
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
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                item.name === t('bookCall')
                  ? 'bg-algorito-600 text-white'
                  : theme === 'dark' 
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'text-gray-700 hover:bg-algorito-50 hover:text-algorito-600'
              }`}
              onClick={closeMenu}
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
