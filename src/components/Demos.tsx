
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Play } from 'lucide-react';

const Demos: React.FC = () => {
  const { t } = useLanguage();

  // Demo videos data (placeholders)
  const demoVideos = [
    {
      id: 1,
      title: t('language') === 'en' ? 'Workflow Automation Demo' : 'Demostración de Automatización de Flujo de Trabajo',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      duration: '2:35',
    },
    {
      id: 2,
      title: t('language') === 'en' ? 'AI Website Builder Demo' : 'Demostración de Constructor de Sitios Web con IA',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      duration: '3:12',
    },
    {
      id: 3,
      title: t('language') === 'en' ? 'Chatbot Integration Demo' : 'Demostración de Integración de Chatbot',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      duration: '1:47',
    },
  ];

  return (
    <section id="demos" className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">{t('demosTitle')}</h2>
        <div className="section-title text-white after:bg-white"></div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoVideos.map((demo) => (
            <div key={demo.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={demo.thumbnail}
                alt={demo.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-algorito-600 hover:bg-algorito-700 text-white p-4 rounded-full transition-colors duration-300">
                  <Play className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-lg font-semibold mb-1">{demo.title}</h3>
                <span className="text-sm text-gray-300">{demo.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">
            {t('watchDemo')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demos;
