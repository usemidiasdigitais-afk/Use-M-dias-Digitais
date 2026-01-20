import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, BarChart, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-use-blue overflow-hidden">
      {/* Background Decor with Parallax and Zoom */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
         <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670" 
            alt="Digital Technology Background" 
            className="w-full h-full object-cover animate-hero-zoom"
            loading="lazy"
         />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-use-blue via-use-blue to-transparent z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left pt-12 md:pt-0">
          <div className="inline-flex items-center space-x-2 bg-blue-800 text-use-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-700 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>Gestão de Tráfego & SEO Especializado</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Não basta criar. <br/>
            É preciso <span className="text-transparent bg-clip-text bg-gradient-to-r from-use-gold to-yellow-200">ser visto.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Unimos o desenvolvimento de sites de alta performance with estratégias agressivas de <strong>Google Ads, Meta Ads e SEO Local</strong> para colocar sua empresa na liderança.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <a 
              href="#marketing" 
              className="px-8 py-4 bg-use-gold text-use-blue font-bold rounded-lg shadow-lg hover:bg-white transition-all transform hover:-translate-y-1 flex items-center"
            >
              Dominar meu Nicho
              <BarChart className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-gray-400 text-white font-semibold rounded-lg hover:border-use-gold hover:text-use-gold transition-colors"
            >
              Consultoria Gratuita
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              1ª Página do Google
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Campanhas de Alta Conversão
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              Destaque no Maps
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <div className="relative w-full max-w-lg group">
                <div className="absolute top-0 right-0 z-20 transform translate-x-4 -translate-y-4 animate-bounce duration-1000">
                   <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-xl flex items-center space-x-2 border border-gray-100 dark:border-slate-700">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_G_logo.svg" alt="Google" className="w-6 h-6" />
                      <div>
                         <div className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Google Ads</div>
                         <div className="text-green-600 dark:text-green-400 font-bold text-sm">+340% ROI</div>
                      </div>
                   </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-1 transform rotate-1 transition-transform duration-500 border border-gray-700 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                      alt="Analytics Dashboard" 
                      className="rounded-lg opacity-40 mix-blend-overlay w-full h-auto"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Resultados que Escalam</h3>
                        <p className="text-gray-300 mb-6">Do clique à venda, rastreamos tudo.</p>
                        <div className="grid grid-cols-2 gap-4 w-full">
                           <div className="bg-use-blue/80 p-3 rounded border border-blue-500/30">
                              <div className="text-use-gold font-bold text-xl">#1</div>
                              <div className="text-xs text-gray-300">Ranking Orgânico</div>
                           </div>
                           <div className="bg-use-blue/80 p-3 rounded border border-blue-500/30">
                              <div className="text-use-gold font-bold text-xl">3.5x</div>
                              <div className="text-xs text-gray-300">Retorno em Ads</div>
                           </div>
                        </div>
                    </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-use-gold text-use-blue p-4 rounded-lg shadow-xl font-bold border-4 border-use-blue z-20">
                    <span className="block text-xl">Parceiro</span>
                    <span className="text-xs uppercase tracking-wider">Estratégico</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;