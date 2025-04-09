import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const en = {
    home: 'Home',
    services: 'Services',
    useCases: 'Use Cases',
    demos: 'Demos',
    reviews: 'Reviews',
    bookCall: 'Book a Call',
    about: 'About',
    bookingTitle: 'Book a Free Consultation',
    bookingSubtitle: 'Schedule a 30-minute consultation with our AI automation experts.',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    preferredDate: 'Preferred Date',
    preferredTime: 'Preferred Time',
    message: 'Message',
    bookNow: 'Book Now',
    bookingConfirmed: 'Booking Confirmed',
    error: 'Error',
    required: 'This field is required',
    invalidEmail: 'Invalid email address',
    aboutTitle: 'About Algorito',
    aboutDesc: 'We are a team of AI automation experts dedicated to helping businesses streamline their processes and achieve their goals.',
    ourLocation: 'Our Location',
    emailUs: 'Email Us',
    contactTitle: 'Contact Us',
    contactName: 'Your Name',
    contactEmail: 'Your Email',
    contactMessage: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Message Sent',
    scheduleCall: 'Schedule a Call',
  };

  const es = {
    home: 'Inicio',
    services: 'Servicios',
    useCases: 'Casos de Uso',
    demos: 'Demos',
    reviews: 'Reseñas',
    bookCall: 'Agendar Cita',
    about: 'Acerca de',
    bookingTitle: 'Agendar una Consulta Gratuita',
    bookingSubtitle: 'Programa una consulta de 30 minutos con nuestros expertos en automatización de IA.',
    yourName: 'Tu Nombre',
    yourEmail: 'Tu Email',
    preferredDate: 'Fecha Preferida',
    preferredTime: 'Hora Preferida',
    message: 'Mensaje',
    bookNow: 'Agendar Ahora',
    bookingConfirmed: 'Cita Confirmada',
    error: 'Error',
    required: 'Este campo es requerido',
    invalidEmail: 'Dirección de correo electrónico inválida',
    aboutTitle: 'Acerca de Algorito',
    aboutDesc: 'Somos un equipo de expertos en automatización de IA dedicados a ayudar a las empresas a optimizar sus procesos y alcanzar sus objetivos.',
    ourLocation: 'Nuestra Ubicación',
    emailUs: 'Envíanos un Correo',
    contactTitle: 'Contáctanos',
    contactName: 'Tu Nombre',
    contactEmail: 'Tu Email',
    contactMessage: 'Tu Mensaje',
    sendMessage: 'Enviar Mensaje',
    messageSent: 'Mensaje Enviado',
    scheduleCall: 'Agendar una Llamada',
  };

  const translations = language === 'es' ? es : en;

  const t = (key: string) => {
    return translations[key] || en[key] || key;
  };

  const value: LanguageContextProps = {
    language,
    t,
    setLanguage: (lang: string) => {
      setLanguage(lang);
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
