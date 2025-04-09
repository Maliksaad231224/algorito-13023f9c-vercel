
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { sendEmail } from '@/utils/emailService';
import { InlineWidget } from 'react-calendly';

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) newErrors.name = t('required');
    if (!email.trim()) newErrors.email = t('required');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('invalidEmail');
    
    // When using Calendly, we don't need to validate date and time
    if (!showCalendly) {
      if (!date) newErrors.date = t('required');
      if (!time) newErrors.time = t('required');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        // Send the booking data to the email service
        const subject = language === 'en' 
          ? `Booking Request from ${name} for ${date ? format(date, 'PPP') : ''} at ${time}`
          : `Solicitud de Reserva de ${name} para ${date ? format(date, 'PPP') : ''} a las ${time}`;
          
        const success = await sendEmail({
          name,
          email,
          date,
          time,
          message,
          subject
        });
        
        if (success) {
          // Show success message
          toast({
            title: t('bookingConfirmed'),
            description: language === 'en' 
              ? `Your booking request has been sent to algoritoai@gmail.com. We'll be in touch soon to confirm your appointment.` 
              : `Tu solicitud de reserva ha sido enviada a algoritoai@gmail.com. Nos pondremos en contacto pronto para confirmar tu cita.`,
          });
          
          // Reset form
          setName('');
          setEmail('');
          setDate(undefined);
          setTime('');
          setMessage('');
          
          // Show calendly after form submission if not already shown
          if (!showCalendly) {
            setShowCalendly(true);
          }
        } else {
          // Show error message
          toast({
            title: t('error'),
            description: language === 'en' 
              ? 'There was a problem sending your booking request. Please try again later.' 
              : 'Hubo un problema al enviar tu solicitud de reserva. Por favor, inténtalo de nuevo más tarde.',
            variant: 'destructive'
          });
        }
      } catch (error) {
        console.error('Error sending booking email:', error);
        toast({
          title: t('error'),
          description: language === 'en' 
            ? 'An unexpected error occurred. Please try again later.' 
            : 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
          variant: 'destructive'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

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
            
            {/* Right side - form */}
            <div className="p-6 md:p-10 md:col-span-3">
              {!showCalendly ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    } mb-1`}>
                      {t('yourName')} *
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={language === 'en' ? 'Enter your name' : 'Introduce tu nombre'}
                      className={errors.name ? 'border-red-300' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    } mb-1`}>
                      {t('yourEmail')} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === 'en' ? 'Enter your email' : 'Introduce tu email'}
                      className={errors.email ? 'border-red-300' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      } mb-1`}>
                        {t('preferredDate')} *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={`w-full flex items-center justify-between border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-algorito-500 ${
                              errors.date ? 'border-red-300' : theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                            } ${!date ? 'text-gray-400' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                            disabled={isSubmitting}
                          >
                            {date ? (
                              format(date, 'PPP', { locale: language === 'es' ? es : undefined })
                            ) : (
                              <span>{language === 'en' ? 'Select date' : 'Seleccionar fecha'}</span>
                            )}
                            <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      } mb-1`}>
                        {t('preferredTime')} *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={`w-full flex items-center justify-between border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-algorito-500 ${
                              errors.time ? 'border-red-300' : theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                            } ${!time ? 'text-gray-400' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                            disabled={isSubmitting}
                          >
                            {time || (language === 'en' ? 'Select time' : 'Seleccionar hora')}
                            <Clock className="ml-2 h-4 w-4 opacity-50" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className={`w-48 p-0 ${theme === 'dark' ? 'bg-gray-800' : ''}`} align="start">
                          <div className="max-h-[200px] overflow-auto p-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => setTime(slot)}
                                className={`w-full text-left px-2 py-1 rounded-md my-1 ${
                                  theme === 'dark' 
                                    ? time === slot 
                                      ? 'bg-algorito-600 text-white' 
                                      : 'hover:bg-gray-700 text-gray-300'
                                    : time === slot 
                                      ? 'bg-algorito-100 text-algorito-800' 
                                      : 'hover:bg-algorito-50'
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    } mb-1`}>
                      {t('message')}
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={language === 'en' ? 'Tell us about your automation needs' : 'Cuéntanos sobre tus necesidades de automatización'}
                      rows={3}
                      className={theme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : ''}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      type="submit" 
                      className={`flex-1 btn-primary py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting 
                        ? (language === 'en' ? 'Sending...' : 'Enviando...') 
                        : t('bookNow')}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setShowCalendly(true)}
                      className={`flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200 py-3 px-6 rounded-lg font-medium transition-colors ${
                        theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : ''
                      }`}
                    >
                      {language === 'en' ? 'View Calendar' : 'Ver Calendario'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="booking-calendar">
                  <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {language === 'en' ? 'Select a Time Slot' : 'Selecciona un Horario'}
                  </h3>
                  
                  {/* Note: Replace this URL with your actual Calendly URL */}
                  <div className="h-[600px] w-full">
                    <InlineWidget 
                      url="https://calendly.com/example"
                      styles={{
                        height: '100%',
                        width: '100%',
                      }}
                      prefill={{
                        email: email,
                        name: name,
                      }}
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setShowCalendly(false)}
                    className={`mt-4 py-2 px-4 rounded-lg text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-700 text-white hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {language === 'en' ? 'Back to Form' : 'Volver al Formulario'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <div className={`inline-block border border-gray-300 rounded-lg p-4 ${
            theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'
          }`}>
            <p className="text-sm">
              {language === 'en' 
                ? 'To set up the calendar integration, create a free account at Calendly.com and replace the example URL with your own.' 
                : 'Para configurar la integración del calendario, crea una cuenta gratuita en Calendly.com y reemplaza la URL de ejemplo con la tuya.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
