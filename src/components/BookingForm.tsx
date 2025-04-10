
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { CalendarIcon, Clock, Calendar } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <section id="booking" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-algorito-50/50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>{t('bookingTitle')}</h2>
        <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-12`}>
          {t('bookingSubtitle')}
        </p>
        
        <div className={`${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        } rounded-2xl shadow-xl max-w-5xl mx-auto overflow-hidden`}>
          <div className="grid md:grid-cols-5">
            {/* Left side - decoration */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-algorito-600 to-algorito-800 text-white p-10">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    {language === 'en' ? 'Let\'s Chat About Your Needs' : 'Hablemos Sobre Tus Necesidades'}
                  </h3>
                  <p className="mb-6 text-algorito-100">
                    {language === 'en' 
                      ? 'Schedule a free 30-minute consultation with our automation experts.' 
                      : 'Agenda una consulta gratuita de 30 minutos con nuestros expertos en automatización.'}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-8 bg-algorito-700/20 p-4 rounded-lg">
                    <Calendar className="w-10 h-10 text-algorito-200" />
                    <div>
                      <p className="text-lg font-medium">
                        {language === 'en' ? 'Free 30-Minute Call' : 'Llamada Gratuita de 30 Minutos'}
                      </p>
                      <p className="text-sm text-algorito-200">
                        {language === 'en' ? 'Discover how we can help you' : 'Descubre cómo podemos ayudarte'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex items-start space-x-4">
                    <CalendarIcon className="w-6 h-6 text-algorito-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">
                        {language === 'en' ? 'Monday - Friday' : 'Lunes - Viernes'}
                      </h4>
                      <p className="text-sm text-algorito-100">9:00 - 18:00 CET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-algorito-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">
                        {language === 'en' ? '30-Minute Session' : 'Sesión de 30 Minutos'}
                      </h4>
                      <p className="text-sm text-algorito-100">
                        {language === 'en' ? 'No obligation, completely free' : 'Sin obligación, completamente gratis'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Calendly */}
            <div className="p-0 md:p-0 md:col-span-3">
              <div className="booking-calendar h-[650px] w-full">
                <InlineWidget 
                  url="https://calendly.com/hansvpraag/30min"
                  styles={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
