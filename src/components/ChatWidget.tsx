
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ChatWidget = () => {
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const configRef = useRef<HTMLScriptElement | null>(null);

  // Function to initialize the widget
  const initializeWidget = () => {
    // Clean up any existing scripts
    cleanupScripts();

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
    `;
    document.head.appendChild(configScript);
    configRef.current = configScript;

    // Create widget script
    const widgetScript = document.createElement('script');
    widgetScript.id = 'chat-widget-script';
    widgetScript.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
    widgetScript.onload = () => {
      console.log('Chat widget script loaded successfully');
      setIsLoaded(true);
      
      // Add CSS to ensure chat input is usable
      const chatWidgetStyle = document.createElement('style');
      chatWidgetStyle.id = 'chat-widget-custom-style';
      chatWidgetStyle.textContent = `
        .chat-widget-container {
          z-index: 9999 !important;
        }
        .chat-widget-input-container {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        .chat-widget-input {
          width: 100% !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
        .chat-widget-send-button {
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }
      `;
      document.head.appendChild(chatWidgetStyle);
      
      // Ensure message buttons trigger the chat widget correctly
      setTimeout(() => {
        const messageButtons = document.querySelectorAll('.send-message-btn');
        messageButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            const chatWidgetBtn = document.querySelector('.chat-widget-button');
            if (chatWidgetBtn instanceof HTMLElement) {
              chatWidgetBtn.click();
              
              // Force the input to be enabled after a short delay
              setTimeout(() => {
                const chatInput = document.querySelector('.chat-widget-input');
                if (chatInput instanceof HTMLElement) {
                  chatInput.style.pointerEvents = 'auto';
                  chatInput.style.visibility = 'visible';
                  chatInput.style.opacity = '1';
                  chatInput.focus();
                }
              }, 500);
            }
          });
        });
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
    scriptRef.current = widgetScript;
  };

  // Function to clean up scripts
  const cleanupScripts = () => {
    // Remove any existing widget elements
    const chatWidgetElements = document.querySelectorAll('.chat-widget-container, .chat-widget-button');
    chatWidgetElements.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });

    // Remove any existing scripts and styles
    if (configRef.current && configRef.current.parentNode) {
      configRef.current.parentNode.removeChild(configRef.current);
    }
    if (scriptRef.current && scriptRef.current.parentNode) {
      scriptRef.current.parentNode.removeChild(scriptRef.current);
    }

    // Also check for any other scripts with these IDs
    const oldConfig = document.getElementById('chat-widget-config');
    const oldScript = document.getElementById('chat-widget-script');
    const oldStyle = document.getElementById('chat-widget-custom-style');
    
    if (oldConfig && oldConfig.parentNode) {
      oldConfig.parentNode.removeChild(oldConfig);
    }
    
    if (oldScript && oldScript.parentNode) {
      oldScript.parentNode.removeChild(oldScript);
    }
    
    if (oldStyle && oldStyle.parentNode) {
      oldStyle.parentNode.removeChild(oldStyle);
    }
  };

  // Initial load
  useEffect(() => {
    initializeWidget();
    
    return () => {
      cleanupScripts();
    };
  }, []);

  // Monitor widget functionality
  useEffect(() => {
    if (isLoaded) {
      const checkInterval = setInterval(() => {
        const chatInput = document.querySelector('.chat-widget-input');
        const chatSendButton = document.querySelector('.chat-widget-send-button');
        
        if (chatInput instanceof HTMLElement && chatSendButton instanceof HTMLElement) {
          chatInput.style.pointerEvents = 'auto';
          chatInput.style.visibility = 'visible';
          chatInput.style.opacity = '1';
          chatSendButton.style.pointerEvents = 'auto';
          chatSendButton.style.visibility = 'visible';
          chatSendButton.style.opacity = '1';
        }
      }, 2000); // Check every 2 seconds
      
      return () => clearInterval(checkInterval);
    }
  }, [isLoaded]);

  return null;
};

export default ChatWidget;
