import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { MapPin, Mail, CalendarCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('aboutTitle')}</h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>{t('aboutDesc')}</p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <Card className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'} overflow-hidden`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex justify-center items-center p-6">
                <div className="relative max-w-md rounded-lg overflow-hidden">
                  <div className={`absolute -inset-0.5 rounded-lg blur opacity-30 ${theme === 'dark' ? 'bg-algorito-400' : 'bg-algorito-200'}`}></div>
                  <img 
                    src="/lovable-uploads/e00c9938-5c81-4ade-bdf6-4e8064302e9e.png"
                    alt="Hans van Praag - Founder of Algorito" 
                    className="relative z-10 rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-2">Hans van Praag</h3>
                <p className="text-lg text-algorito-600 font-medium mb-4">
                  {language === 'en' ? 'Founder of Algorito' : 'Fundador de Algorito'}
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  {language === 'en' 
                    ? 'Industrial Product Designer with experience in project development and assembly chain optimization. Specialized in process automation and prompt engineering.'
                    : 'Diseño de Producto industrial, con experiencia en desarrollo de proyectos y optimización de cadenas de motaje. Especializado en la automatización de procesos e ingeniería de prompts.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${theme === 'dark' ? 'text-white' : ''}`}>
            <div className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <div className="inline-flex items-center justify-center bg-algorito-100 p-3 rounded-full mb-6">
                <MapPin className="h-6 w-6 text-algorito-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t('ourLocation')}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Ibiza, Spain</p>
            </div>
            
            <div className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <div className="inline-flex items-center justify-center bg-algorito-100 p-3 rounded-full mb-6">
                <Mail className="h-6 w-6 text-algorito-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t('emailUs')}</h3>
              <a 
                href="mailto:algoritoai@gmail.com" 
                className="text-algorito-600 hover:underline"
              >
                algoritoai@gmail.com
              </a>
            </div>
            
            <div className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
              <div className="inline-flex items-center justify-center bg-algorito-100 p-3 rounded-full mb-6">
                <CalendarCheck className="h-6 w-6 text-algorito-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t('scheduleCall')}</h3>
              <a 
                href="#booking" 
                className="text-algorito-600 hover:underline"
              >
                {language === 'en' ? 'Book a 30-minute call' : 'Agendar una llamada de 30 minutos'}
              </a>
            </div>
          </div>
          
          <div className={`mt-12 p-10 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-lg`}>
            <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'Our Mission' : 'Nuestra Misión'}</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg`}>
              {language === 'en' 
                ? 'At Algorito, our mission is to empower businesses through intelligent automation. We believe that by leveraging AI technology, organizations can unlock new levels of efficiency, creativity, and growth.' 
                : 'En Algorito, nuestra misión es potenciar empresas a través de la automatización inteligente. Creemos que mediante el uso de tecnología de IA, las organizaciones pueden alcanzar nuevos niveles de eficiencia, creatividad y crecimiento.'}
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
              {language === 'en'
                ? 'We are committed to making AI accessible to businesses of all sizes, providing custom automation solutions that address real-world challenges and deliver measurable results.'
                : 'Estamos comprometidos a hacer que la IA sea accesible para empresas de todos los tamaños, proporcionando soluciones de automatización personalizadas que abordan desafíos del mundo real y entregan resultados medibles.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
