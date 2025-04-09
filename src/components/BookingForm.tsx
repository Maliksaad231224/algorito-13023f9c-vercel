
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { CalendarIcon, Clock } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <section id="booking" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-algorito-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>{t('bookingTitle')}</h2>
        <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-10`}>
          {t('bookingSubtitle')}
        </p>
        
        <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-xl max-w-5xl mx-auto overflow-hidden`}>
          <div className="grid md:grid-cols-5">
            {/* Left side - decoration */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-algorito-600 to-algorito-800 text-white p-10">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'Let\'s Chat About Your Needs' : 'Hablemos Sobre Tus Necesidades'}
                  </h3>
                  <p className="mb-6">
                    {language === 'en' 
                      ? 'Schedule a free 30-minute consultation with our automation experts.' 
                      : 'Agenda una consulta gratuita de 30 minutos con nuestros expertos en automatización.'}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarIcon className="w-6 h-6 text-algorito-200 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">
                        {language === 'en' ? 'Monday - Friday' : 'Lunes - Viernes'}
                      </h4>
                      <p className="text-sm text-algorito-100">9:00 - 18:00 CET</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-algorito-200 flex-shrink-0" />
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
              <div className="booking-calendar h-[600px] w-full">
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
