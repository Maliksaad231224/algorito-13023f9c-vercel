
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Play, ExternalLink } from 'lucide-react';

const Demos: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  // Demo videos data (placeholders)
  const demoVideos = [
    {
      id: 1,
      title: language === 'en' ? 'Workflow Automation Demo' : 'Demostración de Automatización de Flujo de Trabajo',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      duration: '2:35',
    },
    {
      id: 2,
      title: language === 'en' ? 'AI Website Builder Demo' : 'Demostración de Constructor de Sitios Web con IA',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      duration: '3:12',
    },
    {
      id: 3,
      title: language === 'en' ? 'Chatbot Integration Demo' : 'Demostración de Integración de Chatbot',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      duration: '1:47',
    },
  ];

  return (
    <section id="demos" className={`${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-900 text-white'} py-24`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{t('demosTitle')}</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoVideos.map((demo) => (
            <div key={demo.id} className={`group relative overflow-hidden rounded-xl shadow-lg ${theme === 'light' ? 'bg-gray-100' : ''}`}>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
              
              {/* Thumbnail image */}
              <img
                src={demo.thumbnail}
                alt={demo.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button className="bg-algorito-600 hover:bg-algorito-700 text-white p-4 rounded-full transition-colors duration-300 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8" />
                </button>
              </div>
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-algorito-300 transition-colors">{demo.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Play className="h-3 w-3 mr-1" /> {demo.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#booking" className="btn-primary inline-flex items-center gap-2 group">
            {t('watchDemo')}
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demos;
