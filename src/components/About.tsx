
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) newErrors.name = t('required');
    if (!email.trim()) newErrors.email = t('required');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('invalidEmail');
    if (!message.trim()) newErrors.message = t('required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Here you would typically send the data to your server
      console.log({ name, email, message });
      
      // Show success message
      toast({
        title: t('messageSent'),
        description: language === 'en' 
          ? 'We\'ll get back to you as soon as possible.' 
          : 'Nos pondremos en contacto contigo lo antes posible.',
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* About Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('aboutTitle')}</h2>
            <p className="text-gray-600 mb-8">{t('aboutDesc')}</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-algorito-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-algorito-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('ourLocation')}</h3>
                  <p className="text-gray-600">Ibiza, Spain</p>
                  <div className="mt-2 h-48 w-full bg-gray-200 rounded-lg overflow-hidden">
                    {/* This would be a map component, using a placeholder for now */}
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      {language === 'en' ? 'Map Placeholder' : 'Ubicación del Mapa'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-algorito-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-algorito-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('emailUs')}</h3>
                  <a 
                    href="mailto:algoritoai@gmail.com" 
                    className="text-algorito-600 hover:underline"
                  >
                    algoritoai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('contactTitle')}</h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactName')} *
                  </label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                    className={errors.name ? 'border-red-300' : ''}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactEmail')} *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'Your email' : 'Tu email'}
                    className={errors.email ? 'border-red-300' : ''}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactMessage')} *
                  </label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'en' ? 'Your message' : 'Tu mensaje'}
                    rows={5}
                    className={errors.message ? 'border-red-300' : ''}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center btn-primary py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {t('sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
