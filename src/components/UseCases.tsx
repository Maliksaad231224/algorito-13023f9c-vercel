
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

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
    <section id="use-cases" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>{t('useCasesTitle')}</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className={`card overflow-hidden group ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : ''}`}>
              <div className="h-1 bg-gradient-to-r from-algorito-400 to-algorito-600"></div>
              <div className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : ''}`}>{useCase.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{useCase.description}</p>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className="text-3xl font-bold text-algorito-600">
                    {useCase.stats}
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{useCase.statsText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Added graphic/infographic with dark mode support */}
        <div className={`mt-16 rounded-xl shadow-lg p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-2xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : ''}`}>
            {t('transformBusiness')}
          </h3>
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Before */}
              <div className={`w-full md:w-5/12 rounded-lg p-6 mb-8 md:mb-0 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <h4 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t('beforeAlgorito')}
                </h4>
                <ul className="space-y-3">
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-2">•</span>
                    {t('manualProcesses')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-2">•</span>
                    {t('humanError')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-2">•</span>
                    {t('higherCosts')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="text-red-500 mr-2">•</span>
                    {t('inconsistentExperiences')}
                  </li>
                </ul>
              </div>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block w-2/12 text-center">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-algorito-100'
                }`}>
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
              <div className={`w-full md:w-5/12 rounded-lg p-6 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-algorito-50'
              }`}>
                <h4 className={`text-xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-algorito-700'
                }`}>
                  {t('afterAlgorito')}
                </h4>
                <ul className="space-y-3">
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-2">•</span>
                    {t('automatedWorkflows')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-2">•</span>
                    {t('minimizedErrors')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-2">•</span>
                    {t('reducedCosts')}
                  </li>
                  <li className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="text-green-500 mr-2">•</span>
                    {t('enhancedSatisfaction')}
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
