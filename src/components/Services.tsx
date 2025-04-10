
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Workflow, 
  Globe, 
  MessageSquare, 
  Mail, 
  Database,
  ArrowRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: t('workflowAutomation'),
      description: t('workflowAutomationDesc'),
      icon: <Workflow size={48} className="text-algorito-600" />,
      modalDescription: "Our workflow automation services use leading tools like Make.com and n8n to eliminate repetitive tasks and streamline your business processes.",
      features: [
        "Integration with 1000+ apps and services",
        "No-code automation workflows",
        "Real-time monitoring and error handling",
        "Scalable solutions for businesses of all sizes",
        "Custom triggers and actions based on your needs"
      ]
    },
    {
      id: 2,
      title: t('websiteBuilding'),
      description: t('websiteBuildingDesc'),
      icon: <Globe size={48} className="text-algorito-600" />,
      modalDescription: "Build stunning, high-performing websites powered by the latest AI technologies that adapt to your users' needs.",
      features: [
        "AI-driven design recommendations",
        "Mobile-first responsive layouts",
        "SEO-optimized structure and content",
        "Integrated analytics and performance tracking",
        "Secure hosting with 99.9% uptime guarantee"
      ]
    },
    {
      id: 3,
      title: t('chatbotIntegration'),
      description: t('chatbotIntegrationDesc'),
      icon: <MessageSquare size={48} className="text-algorito-600" />,
      modalDescription: "Enhance your customer support with intelligent, customized chatbot solutions that learn and improve over time.",
      features: [
        "Natural language processing capabilities",
        "Seamless integration with your existing website",
        "24/7 customer support automation",
        "Multi-language support",
        "Analytics dashboard to monitor conversations"
      ]
    },
    {
      id: 4,
      title: t('crmAutomation'),
      description: t('crmAutomationDesc'),
      icon: <Mail size={48} className="text-algorito-600" />,
      modalDescription: "Streamline your customer relationship management and email marketing campaigns with intelligent automation.",
      features: [
        "Automated lead scoring and qualification",
        "Personalized email sequences",
        "Customer journey mapping and automation",
        "Integration with popular CRM platforms",
        "Performance analytics and optimization suggestions"
      ]
    },
    {
      id: 5,
      title: t('dataSync'),
      description: t('dataSyncDesc'),
      icon: <Database size={48} className="text-algorito-600" />,
      modalDescription: "Keep your data synchronized across platforms and generate insightful reports for better decision-making.",
      features: [
        "Real-time data synchronization",
        "Custom report generation",
        "Data visualization dashboards",
        "Scheduled exports and imports",
        "Data integrity validation and error handling"
      ]
    }
  ];

  const openModal = (id: number) => {
    setSelectedService(id);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const getSelectedService = () => {
    return services.find(service => service.id === selectedService);
  };

  return (
    <section id="services" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('ourServices')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-700 border border-gray-600' 
                  : 'bg-white shadow-lg hover:shadow-algorito-100/50'
              }`}
            >
              <div className="p-8">
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-algorito-50'
                } group-hover:bg-algorito-100 transition-colors duration-300`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>{service.title}</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                <button 
                  onClick={() => openModal(service.id)}
                  className="inline-flex items-center text-algorito-600 font-semibold hover:text-algorito-800 transition-colors group"
                >
                  {t('learnMore')} 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {selectedService && (
          <ServiceModal
            isOpen={selectedService !== null}
            onClose={closeModal}
            title={getSelectedService()?.title || ''}
            description={getSelectedService()?.modalDescription || ''}
            features={getSelectedService()?.features || []}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
