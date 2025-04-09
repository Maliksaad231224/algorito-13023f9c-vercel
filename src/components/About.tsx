import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/utils/emailService';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) newErrors.name = t('required');
    if (!email.trim()) newErrors.email = t('required');
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = t('invalidEmail');
    if (!message.trim()) newErrors.message = t('required');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const subject = language === 'en' 
          ? `Contact Form Message from ${name}`
          : `Mensaje del Formulario de Contacto de ${name}`;
          
        const success = await sendEmail({
          name,
          email,
          message,
          subject
        });
        
        if (success) {
          toast({
            title: t('messageSent'),
            description: language === 'en' 
              ? 'Your message has been sent to algoritoai@gmail.com. We\'ll get back to you as soon as possible.' 
              : 'Tu mensaje ha sido enviado a algoritoai@gmail.com. Nos pondremos en contacto contigo lo antes posible.',
          });
          
          setName('');
          setEmail('');
          setMessage('');
        } else {
          toast({
            title: t('error'),
            description: language === 'en' 
              ? 'There was a problem sending your message. Please try again later.' 
              : 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
            variant: 'destructive'
          });
        }
      } catch (error) {
        console.error('Error sending contact email:', error);
        toast({
          title: t('error'),
          description: language === 'en' 
            ? 'An unexpected error occurred. Please try again later.' 
            : 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.',
          variant: 'destructive'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('aboutTitle')}</h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-8`}>{t('aboutDesc')}</p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-algorito-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-algorito-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('ourLocation')}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Ibiza, Spain</p>
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
          
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('contactTitle')}</h2>
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 md:p-8`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } mb-1`}>
                    {t('contactName')} *
                  </label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                    className={`${errors.name ? 'border-red-300' : ''} ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-200' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-email" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } mb-1`}>
                    {t('contactEmail')} *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'en' ? 'Your email' : 'Tu email'}
                    className={`${errors.email ? 'border-red-300' : ''} ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-200' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="contact-message" className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  } mb-1`}>
                    {t('contactMessage')} *
                  </label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'en' ? 'Your message' : 'Tu mensaje'}
                    rows={5}
                    className={`${errors.message ? 'border-red-300' : ''} ${
                      theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-200' : ''
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full inline-flex items-center justify-center btn-primary py-3 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting 
                    ? (language === 'en' ? 'Sending...' : 'Enviando...') 
                    : t('sendMessage')}
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
