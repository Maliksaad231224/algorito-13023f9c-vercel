
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Translations {
  [key: string]: string;
}

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const translations: Record<string, Translations> = {
    en: {
      home: 'Home',
      services: 'Services',
      useCases: 'Use Cases',
      demos: 'Demos',
      reviews: 'Reviews',
      reviewsTitle: 'Reviews',
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
      heroTitle: 'Streamline Your Business with AI Automation',
      heroSubtitle: 'Unlock efficiency and reduce costs with our custom AI automation solutions.',
      getStarted: 'Get Started',
      ourServices: 'Our Services',
      workflowAutomation: 'Workflow Automation',
      workflowAutomationDesc: 'Streamline your business processes with intelligent automation.',
      websiteBuilding: 'Website Building',
      websiteBuildingDesc: 'Create stunning, AI-powered websites that convert visitors into customers.',
      chatbotIntegration: 'Chatbot Integration',
      chatbotIntegrationDesc: 'Enhance customer support with intelligent chat solutions.',
      crmAutomation: 'CRM & Email Automation',
      crmAutomationDesc: 'Optimize customer relationships and email campaigns with AI.',
      dataSync: 'Data Synchronization',
      dataSyncDesc: 'Keep your data in sync across multiple platforms and generate reports.',
      learnMore: 'Learn More',
      useCasesTitle: 'Use Cases',
      improvingEfficiency: 'Improving Efficiency',
      improvingEfficiencyDesc: 'Our clients report significant improvements in operational efficiency.',
      costReduction: 'Cost Reduction',
      costReductionDesc: 'Reduce operational costs by automating repetitive tasks.',
      errorMinimization: 'Error Minimization',
      errorMinimizationDesc: 'Minimize human errors in your business processes.',
      transformBusiness: 'Transform Your Business',
      beforeAlgorito: 'Before Algorito',
      afterAlgorito: 'After Algorito',
      manualProcesses: 'Manual processes consuming valuable time',
      humanError: 'Frequent human errors in data entry',
      higherCosts: 'Higher operational costs',
      inconsistentExperiences: 'Inconsistent customer experiences',
      automatedWorkflows: 'Automated workflows that save time',
      minimizedErrors: 'Drastically reduced error rates',
      reducedCosts: 'Significantly lower operational costs',
      enhancedSatisfaction: 'Enhanced customer satisfaction',
      demosTitle: 'Watch Our Demos',
      watchMore: 'Watch More Demos',
      watchDemo: 'Watch Demo',
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
    },
    es: {
      home: 'Inicio',
      services: 'Servicios',
      useCases: 'Casos de Uso',
      demos: 'Demos',
      reviews: 'Reseñas',
      reviewsTitle: 'Reseñas',
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
      heroTitle: 'Optimiza tu Negocio con Automatización IA',
      heroSubtitle: 'Desbloquea eficiencia y reduce costos con nuestras soluciones personalizadas de automatización IA.',
      getStarted: 'Comenzar',
      ourServices: 'Nuestros Servicios',
      workflowAutomation: 'Automatización de Flujos',
      workflowAutomationDesc: 'Optimiza tus procesos de negocio con automatización inteligente.',
      websiteBuilding: 'Creación de Sitios Web',
      websiteBuildingDesc: 'Crea sitios web impresionantes con IA que convierten visitantes en clientes.',
      chatbotIntegration: 'Integración de Chatbots',
      chatbotIntegrationDesc: 'Mejora la atención al cliente con soluciones inteligentes de chat.',
      crmAutomation: 'Automatización CRM y Email',
      crmAutomationDesc: 'Optimiza las relaciones con clientes y campañas de email con IA.',
      dataSync: 'Sincronización de Datos',
      dataSyncDesc: 'Mantén tus datos sincronizados entre plataformas y genera informes.',
      learnMore: 'Saber Más',
      useCasesTitle: 'Casos de Uso',
      improvingEfficiency: 'Mejora de Eficiencia',
      improvingEfficiencyDesc: 'Nuestros clientes reportan mejoras significativas en su eficiencia operativa.',
      costReduction: 'Reducción de Costos',
      costReductionDesc: 'Reduce costos operativos automatizando tareas repetitivas.',
      errorMinimization: 'Minimización de Errores',
      errorMinimizationDesc: 'Minimiza los errores humanos en tus procesos de negocio.',
      transformBusiness: 'Transforma tu Negocio',
      beforeAlgorito: 'Antes de Algorito',
      afterAlgorito: 'Después de Algorito',
      manualProcesses: 'Procesos manuales que consumen tiempo valioso',
      humanError: 'Frecuentes errores humanos en la entrada de datos',
      higherCosts: 'Costos operativos más altos',
      inconsistentExperiences: 'Experiencias inconsistentes para clientes',
      automatedWorkflows: 'Flujos de trabajo automatizados que ahorran tiempo',
      minimizedErrors: 'Tasas de error drásticamente reducidas',
      reducedCosts: 'Costos operativos significativamente más bajos',
      enhancedSatisfaction: 'Mayor satisfacción del cliente',
      demosTitle: 'Mira Nuestras Demos',
      watchMore: 'Ver Más Demos',
      watchDemo: 'Ver Demo',
      termsOfService: 'Términos de Servicio',
      privacyPolicy: 'Política de Privacidad',
    }
  };

  const t = (key: string) => {
    return translations[language]?.[key] || key;
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
