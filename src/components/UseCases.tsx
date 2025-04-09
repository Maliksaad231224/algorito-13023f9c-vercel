
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

const UseCases: React.FC = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: <TrendingUp size={48} className="text-algorito-600" />,
      title: t('improvingEfficiency'),
      description: t('improvingEfficiencyDesc'),
      stats: '70%',
      statsText: t('improvingEfficiency'),
    },
    {
      icon: <DollarSign size={48} className="text-algorito-600" />,
      title: t('costReduction'),
      description: t('costReductionDesc'),
      stats: '40-60%',
      statsText: t('costReduction'),
    },
    {
      icon: <AlertCircle size={48} className="text-algorito-600" />,
      title: t('errorMinimization'),
      description: t('errorMinimizationDesc'),
      stats: '90%',
      statsText: t('errorMinimization'),
    },
  ];

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('useCasesTitle')}</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="card overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-algorito-400 to-algorito-600"></div>
              <div className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-3xl font-bold text-algorito-600">
                    {useCase.stats}
                  </div>
                  <p className="text-gray-500 text-sm">{useCase.statsText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Added graphic/infographic */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('language') === 'en' ? 'How Algorito Transforms Your Business' : 'Cómo Algorito Transforma Tu Negocio'}
          </h3>
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Before */}
              <div className="w-full md:w-5/12 bg-gray-100 rounded-lg p-6 mb-8 md:mb-0">
                <h4 className="text-xl font-semibold mb-4 text-gray-700">
                  {t('language') === 'en' ? 'Before Algorito' : 'Antes de Algorito'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Manual, time-consuming processes' : 'Procesos manuales que consumen tiempo'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Prone to human error' : 'Propenso a errores humanos'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Higher operational costs' : 'Mayores costos operativos'}
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Inconsistent customer experiences' : 'Experiencias de cliente inconsistentes'}
                  </li>
                </ul>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block w-2/12 text-center">
                <div className="w-20 h-20 mx-auto bg-algorito-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-algorito-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
              
              {/* After */}
              <div className="w-full md:w-5/12 bg-algorito-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-algorito-700">
                  {t('language') === 'en' ? 'After Algorito' : 'Después de Algorito'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Automated, efficient workflows' : 'Flujos de trabajo automatizados y eficientes'}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Minimized errors and inconsistencies' : 'Errores e inconsistencias minimizadas'}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Reduced costs and resource allocation' : 'Costos reducidos y mejor asignación de recursos'}
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">•</span>
                    {t('language') === 'en' ? 'Enhanced customer satisfaction' : 'Mayor satisfacción del cliente'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
