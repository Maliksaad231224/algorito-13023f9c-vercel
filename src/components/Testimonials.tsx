
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data with English and Spanish versions
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovations Ltd',
      rating: 5,
      text: {
        en: 'Algorito transformed our customer service workflow. We\'ve reduced response times by 60% and our team can now focus on complex issues while the AI handles routine inquiries.',
        es: 'Algorito transformó nuestro flujo de trabajo de servicio al cliente. Hemos reducido los tiempos de respuesta en un 60% y nuestro equipo ahora puede centrarse en problemas complejos mientras la IA maneja las consultas rutinarias.'
      },
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      id: 2,
      name: 'David Martinez',
      company: 'Global Solutions Inc',
      rating: 5,
      text: {
        en: 'The AI-driven website they built for us has increased our conversion rates by 40%. The automation tools have streamlined our sales process and eliminated manual data entry.',
        es: 'El sitio web impulsado por IA que construyeron para nosotros ha aumentado nuestras tasas de conversión en un 40%. Las herramientas de automatización han simplificado nuestro proceso de ventas y eliminado la entrada manual de datos.'
      },
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Creative Design Studio',
      rating: 4,
      text: {
        en: 'As a small design studio, we were overwhelmed with administrative tasks. Algorito\'s automation solutions have given us back hours each day to focus on our creative work.',
        es: 'Como pequeño estudio de diseño, estábamos abrumados con tareas administrativas. Las soluciones de automatización de Algorito nos han devuelto horas cada día para centrarnos en nuestro trabajo creativo.'
      },
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>{t('reviewsTitle')}</h2>
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } p-2 rounded-full shadow-md ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-algorito-50'
            } z-10`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-algorito-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } p-2 rounded-full shadow-md ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-algorito-50'
            } z-10`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-algorito-600" />
          </button>
          
          {/* Testimonial Card */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'glass-card'
          } p-8 md:p-10`}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <img 
                  src="/lovable-uploads/d0673b16-a8cd-4885-bb22-8c4efb3559ff.png" 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="md:w-3/4 md:pl-8">
                <div className="flex mb-2">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className={`text-lg italic mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : ''
                }`}>
                  "{testimonials[currentIndex].text[language as 'en' | 'es']}"
                </blockquote>
                <div className="text-right">
                  <p className={`font-bold text-lg ${
                    theme === 'dark' ? 'text-white' : ''
                  }`}>{testimonials[currentIndex].name}</p>
                  <p className={`${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-algorito-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Client Logos (Placeholder) */}
        <div className="mt-16">
          <p className={`text-center ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } mb-6`}>
            {language === 'en' ? 'Trusted by companies worldwide' : 'Empresas que confían en nosotros'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className={`h-12 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              } w-32 rounded`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
