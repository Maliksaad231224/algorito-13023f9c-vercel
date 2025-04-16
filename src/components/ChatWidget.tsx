
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to update config when theme or language changes
  const updateConfig = () => {
    if (typeof window !== 'undefined') {
      // Update the window configuration
      window.ChatWidgetConfig = {
        webhook: {
          url: 'https://primary-production-778ad.up.railway.app/webhook-test/603f6d5d-d93f-466a-badf-35120315efc8',
          route: 'general'
        },
        branding: {
          logo: 'https://algorito.net/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png',
          name: 'algorito.net',
          welcomeText: language === 'en' ? 'Hello, how can we help?' : '¡Hola! ¿Cómo podemos ayudarte?',
          responseTimeText: language === 'en' ? 'We typically respond right away' : 'Normalmente respondemos de inmediato'
        },
        style: {
          primaryColor: '#00376f',
          secondaryColor: '#07cdfa',
          position: 'right',
          backgroundColor: theme === 'dark' ? '#1e293b' : '#ffffff',
          fontColor: theme === 'dark' ? '#ffffff' : '#333333'
        }
      };

      // Dispatch a custom event that our script will listen for
      const configChangedEvent = new CustomEvent('chatWidgetConfigChanged');
      window.dispatchEvent(configChangedEvent);
    }
  };

  // Initial load of the chat widget
  useEffect(() => {
    // Prevent multiple loading
    if (isLoaded) {
      updateConfig();
      return;
    }

    // Create config script
    const configScript = document.createElement('script');
    configScript.id = 'chat-widget-config';
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

      // Add listener for config changes
      window.addEventListener('chatWidgetConfigChanged', function() {
        // This will refresh the widget with new config
        const chatButton = document.querySelector('.chat-widget-button');
        const chatContainer = document.querySelector('.chat-widget-container');
        
        // Update UI text elements
        if (chatContainer) {
          const welcomeTextEl = chatContainer.querySelector('.chat-widget-welcome-text');
          const responseTimeEl = chatContainer.querySelector('.chat-widget-response-time');
          
          if (welcomeTextEl) {
            welcomeTextEl.textContent = window.ChatWidgetConfig.branding.welcomeText;
          }
          
          if (responseTimeEl) {
            responseTimeEl.textContent = window.ChatWidgetConfig.branding.responseTimeText;
          }

          // Update container styles
          chatContainer.style.backgroundColor = window.ChatWidgetConfig.style.backgroundColor;
          chatContainer.style.color = window.ChatWidgetConfig.style.fontColor;
          
          // Update all message elements
          const messageElements = chatContainer.querySelectorAll('.chat-widget-message');
          messageElements.forEach(msg => {
            if (msg.classList.contains('chat-widget-user-message')) {
              msg.style.backgroundColor = window.ChatWidgetConfig.style.primaryColor;
            } else {
              msg.style.backgroundColor = theme === 'dark' ? '#2d3748' : '#f1f5f9';
              msg.style.color = window.ChatWidgetConfig.style.fontColor;
            }
          });
        }
        
        // Update button styles if needed
        if (chatButton) {
          chatButton.style.backgroundColor = window.ChatWidgetConfig.style.primaryColor;
        }
      });
    `;
    document.head.appendChild(configScript);

    // Create widget script
    const widgetScript = document.createElement('script');
    widgetScript.id = 'chat-widget-script';
    widgetScript.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
    widgetScript.onload = () => {
      setIsLoaded(true);
      console.log('Chat widget script loaded successfully');
      
      // Ensure the button works by adding an additional click handler
      setTimeout(() => {
        const chatButton = document.querySelector('.chat-widget-button');
        const sendMessageBtn = document.querySelector('.chat-widget-send-message-btn');
        
        if (chatButton) {
          chatButton.addEventListener('click', function() {
            const chatContainer = document.querySelector('.chat-widget-container');
            if (chatContainer) {
              chatContainer.classList.toggle('chat-widget-hidden');
            }
          });
        }
        
        if (sendMessageBtn) {
          sendMessageBtn.addEventListener('click', function() {
            console.log('Send message button clicked');
          });
        }
      }, 1000);
    };
    widgetScript.onerror = () => {
      console.error('Failed to load chat widget script');
      toast({
        title: "Error",
        description: "Failed to load chat widget. Please refresh the page.",
        variant: "destructive",
      });
    };
    document.head.appendChild(widgetScript);

    // Cleanup function
    return () => {
      const configScript = document.getElementById('chat-widget-config');
      const widgetScript = document.getElementById('chat-widget-script');
      
      if (configScript) {
        document.head.removeChild(configScript);
      }
      
      if (widgetScript) {
        document.head.removeChild(widgetScript);
      }
      
      // Remove custom event listener
      window.removeEventListener('chatWidgetConfigChanged', () => {});
      
      // Remove any chat widget elements
      const chatWidgetElements = document.querySelectorAll('.chat-widget-container, .chat-widget-button');
      chatWidgetElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      
      setIsLoaded(false);
    };
  }, []);

  // Update config when theme or language changes
  useEffect(() => {
    if (isLoaded) {
      updateConfig();
    }
  }, [theme, language, isLoaded]);

  return null;
};

export default ChatWidget;
