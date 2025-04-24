import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatWidget from "./components/ChatWidget";
import "./App.css";
import "./components/ChatWidget.css";

const queryClient = new QueryClient();

export const toggleChatWidget = (enabled: boolean) => {
  window.dispatchEvent(new CustomEvent('toggleChatWidget', { detail: enabled }));
};

const App = () => {
  const [isChatWidgetEnabled, setIsChatWidgetEnabled] = useState(false);

  useState(() => {
    const handleToggle = (event: CustomEvent) => {
      setIsChatWidgetEnabled(event.detail);
    };

    window.addEventListener('toggleChatWidget', handleToggle as EventListener);
    return () => {
      window.removeEventListener('toggleChatWidget', handleToggle as EventListener);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            {isChatWidgetEnabled && <ChatWidget />}
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
