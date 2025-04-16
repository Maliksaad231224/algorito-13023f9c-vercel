
import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    ChatWidgetConfig: {
      webhook: {
        url: string;
        route: string;
      };
      branding: {
        logo: string;
        name: string;
        welcomeText: string;
        responseTimeText: string;
      };
      style: {
        primaryColor: string;
        secondaryColor: string;
        position: string;
        backgroundColor: string;
        fontColor: string;
      };
    };
  }
}

const ChatWidget = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {
    // Create script for chat widget configuration
    const configScript = document.createElement('script');
    configScript.textContent = `
      window.ChatWidgetConfig = {
        webhook: {
          url: 'https://primary-production-778ad.up.railway.app/webhook-test/603f6d5d-d93f-466a-badf-35120315efc8',
          route: 'general'
        },
        branding: {
          logo: 'https://algorito.net/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png',
          name: 'algorito.net',
          welcomeText: '${language === 'en' ? 'Hello, how can we help?' : '¡Hola! ¿Cómo podemos ayudarte?'}',
          responseTimeText: '${language === 'en' ? 'We typically respond right away' : 'Normalmente respondemos de inmediato'}'
        },
        style: {
          primaryColor: '#00376f',
          secondaryColor: '#07cdfa',
          position: 'right',
          backgroundColor: '${theme === 'dark' ? '#1e293b' : '#ffffff'}',
          fontColor: '${theme === 'dark' ? '#ffffff' : '#333333'}'
        }
      };
    `;
    document.head.appendChild(configScript);

    // Create script for chat widget
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
    document.head.appendChild(widgetScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      if (document.head.contains(configScript)) {
        document.head.removeChild(configScript);
      }
      if (document.head.contains(widgetScript)) {
        document.head.removeChild(widgetScript);
      }
      
      // Remove any chat widget elements that might have been created
      const chatWidgetElements = document.querySelectorAll('.chat-widget-container, .chat-widget-button');
      chatWidgetElements.forEach(element => {
        element.parentNode?.removeChild(element);
      });
    };
  }, [theme, language]);

  // This component doesn't render anything visible itself
  return null;
};

export default ChatWidget;
