
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data with English and Spanish versions
  const testimonials = [
    {
      id: 1,
      name: 'Martí González',
      company: 'MG7 Luxury Agency',
      rating: 5,
      text: {
        en: 'Algorito transformed our daily tasks at MG7 Luxury Agency. By refining our CRM and automating provider collaboration, we cut manual work by 65%, letting us concentrate on premium campaigns that wow our exclusive clientele.',
        es: 'Algorito transformó nuestras tareas diarias en MG7 Luxury Agency. Al perfeccionar nuestro CRM y automatizar la colaboración con los proveedores, redujimos el trabajo manual en un 65 %, lo que nos permitió concentrarnos en campañas premium que cautivan a nuestra exclusiva clientela.'
      },
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQExIRsXQPywtg/profile-displayphoto-shrink_100_100/B4EZWkAsoCHMAc-/0/1742213401612?e=1749686400&v=beta&t=suKR1tsRTE4fLP0ROEshjq_Gry2R5l26MaDiQE5Pq-A',
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
    <section id="reviews" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-white to-slate-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : ''}`}>
          {t('reviewsTitle')}
        </h2>
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } p-3 rounded-full shadow-lg hover:shadow-xl ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-algorito-50'
            } z-10 transition-all`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-algorito-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } p-3 rounded-full shadow-lg hover:shadow-xl ${
              theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-algorito-50'
            } z-10 transition-all`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-algorito-600" />
          </button>
          
          {/* Testimonial Card */}
          <div className={`${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white shadow-xl'
          } p-10 md:p-12 rounded-xl`}>
            <div className="absolute -top-6 left-10">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-algorito-100'
              }`}>
                <Quote className="w-6 h-6 text-algorito-600" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-8 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className={`absolute -inset-0.5 rounded-full blur-sm ${
                    theme === 'dark' ? 'bg-algorito-600/30' : 'bg-algorito-200/50'
                  }`}></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 relative z-10"
                  />
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-8">
                <div className="flex mb-3">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className={`text-lg italic mb-6 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
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
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'w-8 bg-algorito-600' 
                    : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
