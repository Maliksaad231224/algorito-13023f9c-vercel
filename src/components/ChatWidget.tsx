
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = { text: message, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    
    setMessage('');
    
    setIsLoading(true);

    try {
      const response = await fetch('https://primary-production-778ad.up.railway.app/webhook/603f6d5d-d93f-466a-badf-35120315efc8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{
          message: message,
          sessionId: Date.now().toString(),
          route: 'general',
          metadata: {
            userId: ''
          }
        }]),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const responseData = await response.json();
      
      setMessages(prev => [...prev, { 
        text: responseData.output || "Sorry, I couldn't process your request.", 
        isUser: false 
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
      
      setMessages(prev => [...prev, { 
        text: "Sorry, there was an error processing your message. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <button 
        className="chat-widget-button"
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <img 
          src="/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png" 
          alt="Algorito Logo" 
          className="chat-button-logo" 
        />
      </button>

      {isOpen && (
        <div className="chat-widget-container">
          <div className="chat-widget-header">
            <div className="chat-widget-header-info">
              <img 
                src="/lovable-uploads/bdec6477-9f00-4878-a0a5-f69bada51441.png" 
                alt="Algorito Logo" 
                className="chat-header-logo" 
              />
              <div>
                <h3 className="chat-widget-title">Algorito Bot</h3>
                <p className="chat-widget-subtitle">We typically respond right away</p>
              </div>
            </div>
            <button 
              className="chat-widget-close-button"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chat-widget-messages">
            {messages.length === 0 && (
              <div className="chat-widget-welcome">
                <p>Hello, how can we help?</p>
              </div>
            )}

            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`chat-widget-message ${msg.isUser ? 'chat-widget-user-message' : 'chat-widget-bot-message'}`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-widget-input-container">
            <Textarea
              ref={inputRef}
              className="chat-widget-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isLoading}
            />
            <button
              className="chat-widget-send-button"
              onClick={sendMessage}
              disabled={isLoading || !message.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
