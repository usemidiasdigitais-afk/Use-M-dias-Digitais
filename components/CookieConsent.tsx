import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('use-midias-cookies-accepted');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('use-midias-cookies-accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('use-midias-cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-slide-up">
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4 md:gap-6">
          <div className="bg-use-gold/10 p-3 rounded-full flex-shrink-0">
            <Shield className="w-8 h-8 text-use-gold" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-use-blue dark:text-white mb-2">Sua Privacidade é Importante</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Nós utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdos de marketing. Ao clicar em "Aceitar Tudo", você concorda com o uso de todos os cookies conforme nossa Política de Privacidade.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-use-blue dark:hover:text-white transition-colors"
          >
            Recusar
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-3 bg-use-blue dark:bg-use-gold text-white dark:text-use-blue font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
          >
            Aceitar Tudo
          </button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;