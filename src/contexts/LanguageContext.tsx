
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key: string]: {
    en: string;
    es: string;
  };
};

// All text that needs translation
const translations: Translations = {
  // Navigation
  home: { en: 'Home', es: 'Inicio' },
  services: { en: 'Services', es: 'Servicios' },
  useCases: { en: 'Use Cases', es: 'Casos de Uso' },
  demos: { en: 'Demos', es: 'Demos' },
  reviews: { en: 'Reviews', es: 'Reseñas' },
  bookCall: { en: 'Book a Call', es: 'Agendar Llamada' },
  about: { en: 'About/Contact', es: 'Nosotros/Contacto' },
  
  // Hero Section
  heroTitle: { 
    en: 'Revolutionize Your Workflow with AI Automation', 
    es: 'Revoluciona tu Flujo de Trabajo con Automatización IA' 
  },
  heroSubtitle: { 
    en: 'Let Algorito handle repetitive tasks while you focus on what truly matters.', 
    es: 'Deja que Algorito se encargue de las tareas repetitivas mientras te concentras en lo que realmente importa.' 
  },
  getStarted: { en: 'Get Started', es: 'Comenzar' },
  
  // Services Section
  ourServices: { en: 'Our Services', es: 'Nuestros Servicios' },
  workflowAutomation: { en: 'Workflow Automation', es: 'Automatización de Flujos de Trabajo' },
  workflowAutomationDesc: { 
    en: 'Utilizing tools like Make.com and n8n to streamline your business processes.', 
    es: 'Utilizando herramientas como Make.com y n8n para optimizar tus procesos de negocio.' 
  },
  websiteBuilding: { en: 'AI-driven Website Building', es: 'Desarrollo Web con IA' },
  websiteBuildingDesc: { 
    en: 'Create stunning, functional websites powered by the latest AI technologies.', 
    es: 'Crea sitios web impresionantes y funcionales con las últimas tecnologías de IA.' 
  },
  chatbotIntegration: { en: 'Custom Chatbot Integration', es: 'Integración de Chatbots Personalizados' },
  chatbotIntegrationDesc: { 
    en: 'Enhance customer support with intelligent, customized chatbot solutions.', 
    es: 'Mejora la atención al cliente con soluciones inteligentes de chatbot personalizadas.' 
  },
  crmAutomation: { en: 'CRM & Email Automation', es: 'Automatización de CRM y Email' },
  crmAutomationDesc: { 
    en: 'Streamline your customer relationship management and email marketing campaigns.', 
    es: 'Optimiza la gestión de relaciones con clientes y campañas de email marketing.' 
  },
  dataSync: { en: 'Data Sync & Reporting', es: 'Sincronización de Datos e Informes' },
  dataSyncDesc: { 
    en: 'Keep your data synchronized across platforms and generate insightful reports.', 
    es: 'Mantén tus datos sincronizados entre plataformas y genera informes perspicaces.' 
  },
  learnMore: { en: 'Learn More', es: 'Más Información' },
  
  // Use Cases Section
  useCasesTitle: { en: 'Use Cases', es: 'Casos de Uso' },
  improvingEfficiency: { en: 'Improving Efficiency', es: 'Mejorando la Eficiencia' },
  improvingEfficiencyDesc: { 
    en: 'Our automation solutions have helped businesses reduce manual tasks by up to 70%.', 
    es: 'Nuestras soluciones de automatización han ayudado a las empresas a reducir las tareas manuales hasta en un 70%.' 
  },
  costReduction: { en: 'Cost Reduction', es: 'Reducción de Costos' },
  costReductionDesc: { 
    en: 'Clients typically see a 40-60% reduction in operational costs after implementing our solutions.', 
    es: 'Los clientes suelen ver una reducción del 40-60% en los costos operativos después de implementar nuestras soluciones.' 
  },
  errorMinimization: { en: 'Error Minimization', es: 'Minimización de Errores' },
  errorMinimizationDesc: { 
    en: 'Automated processes have helped reduce human error by over 90% for our clients.', 
    es: 'Los procesos automatizados han ayudado a reducir el error humano en más del 90% para nuestros clientes.' 
  },
  
  // New translations for the comparison infographic
  transformBusiness: { 
    en: 'How Algorito Transforms Your Business', 
    es: 'Cómo Algorito Transforma Tu Negocio' 
  },
  beforeAlgorito: {
    en: 'Before Algorito',
    es: 'Antes de Algorito'
  },
  afterAlgorito: {
    en: 'After Algorito',
    es: 'Después de Algorito'
  },
  manualProcesses: {
    en: 'Manual, time-consuming processes',
    es: 'Procesos manuales que consumen tiempo'
  },
  humanError: {
    en: 'Prone to human error',
    es: 'Propenso a errores humanos'
  },
  higherCosts: {
    en: 'Higher operational costs',
    es: 'Mayores costos operativos'
  },
  inconsistentExperiences: {
    en: 'Inconsistent customer experiences',
    es: 'Experiencias de cliente inconsistentes'
  },
  automatedWorkflows: {
    en: 'Automated, efficient workflows',
    es: 'Flujos de trabajo automatizados y eficientes'
  },
  minimizedErrors: {
    en: 'Minimized errors and inconsistencies',
    es: 'Errores e inconsistencias minimizadas'
  },
  reducedCosts: {
    en: 'Reduced costs and resource allocation',
    es: 'Costos reducidos y mejor asignación de recursos'
  },
  enhancedSatisfaction: {
    en: 'Enhanced customer satisfaction',
    es: 'Mayor satisfacción del cliente'
  },
  
  // Demos Section
  demosTitle: { en: 'Demos', es: 'Demostraciones' },
  watchDemo: { en: 'Watch Demo', es: 'Ver Demostración' },
  
  // Reviews Section
  reviewsTitle: { en: 'What Our Clients Say', es: 'Lo Que Dicen Nuestros Clientes' },
  
  // Reviews content will be defined in the component
  
  // Booking Section
  bookingTitle: { en: 'Book a Free Consultancy Call', es: 'Agenda una Llamada de Consultoría Gratuita' },
  bookingSubtitle: { 
    en: 'No Cost, No Obligation—Let\'s Discuss Your Automation Needs', 
    es: 'Sin Costo, Sin Obligación—Hablemos de tus Necesidades de Automatización' 
  },
  yourName: { en: 'Your Name', es: 'Tu Nombre' },
  yourEmail: { en: 'Your Email', es: 'Tu Email' },
  preferredDate: { en: 'Preferred Date', es: 'Fecha Preferida' },
  preferredTime: { en: 'Preferred Time', es: 'Hora Preferida' },
  message: { en: 'Message (Optional)', es: 'Mensaje (Opcional)' },
  bookNow: { en: 'Book Now', es: 'Agendar Ahora' },
  
  // About Section
  aboutTitle: { en: 'About Algorito', es: 'Sobre Algorito' },
  aboutDesc: { 
    en: 'Algorito is an AI automation services company dedicated to helping businesses streamline their operations through cutting-edge technology solutions. Based in Ibiza, Spain, we serve clients worldwide with custom automation solutions tailored to their specific needs.', 
    es: 'Algorito es una empresa de servicios de automatización con IA dedicada a ayudar a las empresas a optimizar sus operaciones mediante soluciones tecnológicas de vanguardia. Con sede en Ibiza, España, servimos a clientes de todo el mundo con soluciones de automatización personalizadas según sus necesidades específicas.' 
  },
  contactTitle: { en: 'Contact Us', es: 'Contáctanos' },
  contactName: { en: 'Name', es: 'Nombre' },
  contactEmail: { en: 'Email', es: 'Email' },
  contactMessage: { en: 'Message', es: 'Mensaje' },
  sendMessage: { en: 'Send Message', es: 'Enviar Mensaje' },
  ourLocation: { en: 'Our Location', es: 'Nuestra Ubicación' },
  emailUs: { en: 'Email Us', es: 'Envíanos un Email' },
  
  // Footer
  copyright: { 
    en: '© 2025 Algorito. All rights reserved.', 
    es: '© 2025 Algorito. Todos los derechos reservados.' 
  },
  termsOfService: { en: 'Terms of Service', es: 'Términos de Servicio' },
  privacyPolicy: { en: 'Privacy Policy', es: 'Política de Privacidad' },
  
  // Form validation messages
  required: { en: 'This field is required', es: 'Este campo es obligatorio' },
  invalidEmail: { 
    en: 'Please enter a valid email address', 
    es: 'Por favor, introduce una dirección de email válida' 
  },
  messageSent: { 
    en: 'Your message has been sent successfully!', 
    es: '¡Tu mensaje ha sido enviado con éxito!' 
  },
  bookingConfirmed: { 
    en: 'Your booking has been confirmed!', 
    es: '¡Tu reserva ha sido confirmada!' 
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
