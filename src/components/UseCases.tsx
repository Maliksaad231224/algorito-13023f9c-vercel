
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { TrendingUp, DollarSign, AlertCircle, ChevronRight } from 'lucide-react';

const UseCases: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

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
    <section id="use-cases" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>{t('useCasesTitle')}</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:translate-y-[-8px] ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="h-2 bg-gradient-to-r from-algorito-400 to-algorito-600"></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-algorito-50'
                } group-hover:bg-algorito-100 transition-colors duration-300`}>
                  {useCase.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>{useCase.title}</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{useCase.description}</p>
                <div className={`pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className="text-4xl font-bold text-algorito-600 mb-1">
                    {useCase.stats}
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{useCase.statsText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved graphic/infographic with dark mode support */}
        <div className={`mt-16 rounded-xl shadow-xl p-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-2xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : ''}`}>
            {t('transformBusiness')}
          </h3>
          
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Before */}
              <div className={`w-full md:w-5/12 rounded-xl p-8 mb-12 md:mb-0 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <h4 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {t('beforeAlgorito')}
                </h4>
                <ul className="space-y-4">
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>{t('manualProcesses')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>{t('humanError')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>{t('higherCosts')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>{t('inconsistentExperiences')}</span>
                  </li>
                </ul>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className={`w-20 h-20 flex items-center justify-center rounded-full ${
                  theme === 'dark' ? 'bg-gray-700 shadow-lg' : 'bg-algorito-100'
                }`}>
                  <ChevronRight size={32} className="text-algorito-600" />
                </div>
              </div>
              
              {/* After */}
              <div className={`w-full md:w-5/12 rounded-xl p-8 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-algorito-50'
              }`}>
                <h4 className={`text-xl font-semibold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-algorito-700'
                }`}>
                  {t('afterAlgorito')}
                </h4>
                <ul className="space-y-4">
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>{t('automatedWorkflows')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>{t('minimizedErrors')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>{t('reducedCosts')}</span>
                  </li>
                  <li className={`flex items-start ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-3 mt-1">•</span>
                    <span>{t('enhancedSatisfaction')}</span>
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
