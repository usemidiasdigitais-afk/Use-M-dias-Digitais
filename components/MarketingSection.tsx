import React from 'react';
import { MousePointer2, MapPin, Search, Megaphone, ArrowRight, BarChart3, Globe, TrendingUp } from 'lucide-react';

const MarketingSection: React.FC = () => {
  return (
    <section id="marketing" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background visual cue */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-use-blue via-use-gold to-use-blue"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-use-blue px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase border border-blue-200">
            Performance & Tráfego
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-use-blue mt-6 mb-6">
            Nós Gerenciamos o Seu Sucesso
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Não basta ter um site incrível se ninguém o encontra. Nossa equipe de especialistas domina os algoritmos do 
            <span className="font-bold text-use-blue"> Google</span> e das 
            <span className="font-bold text-use-blue"> Redes Sociais</span> para atrair clientes qualificados todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Coluna 1: Tráfego Pago (Ads) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full group hover:border-use-gold/50 transition-colors duration-300">
            <div className="bg-use-blue p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                <MousePointer2 className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Megaphone className="text-use-gold w-6 h-6" />
                  Tráfego Pago (Ads)
                </h3>
                <p className="text-blue-200 mt-2">Resultados imediatos e escala previsível.</p>
              </div>
            </div>
            
            <div className="p-8 flex-grow space-y-8">
              {/* Google Ads */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#4285F4" fillOpacity="0.2"/>
                     <path d="M16.5 11.5L12 16L7.5 11.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Google Ads (Links Patrocinados)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Colocamos sua empresa no topo das pesquisas exatamente quando o cliente busca pelo seu serviço. Otimizamos o custo por clique e focamos em conversão.
                  </p>
                </div>
              </div>

              {/* Meta Ads */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                   <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Meta Ads (Facebook & Instagram)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Campanhas visuais que geram desejo. Segmentamos por comportamento, interesses e localização para atingir seu público-alvo onde eles passam mais tempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0 mt-auto relative group/btn">
              <a 
                href="#contact" 
                title="Gerencie campanhas no Google e Meta para resultados imediatos."
                className="block w-full text-center bg-use-gold text-use-blue font-bold py-3 rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-md relative z-10"
              >
                Quero Vender Mais com Ads
              </a>
            </div>
          </div>

          {/* Coluna 2: Orgânico (SEO & Maps) */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full group hover:border-use-gold/50 transition-colors duration-300">
            <div className="bg-gray-900 p-8 text-white relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                <Globe className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Search className="text-green-400 w-6 h-6" />
                  Presença Orgânica
                </h3>
                <p className="text-gray-400 mt-2">Autoridade e confiança a médio e longo prazo.</p>
              </div>
            </div>
            
            <div className="p-8 flex-grow space-y-8">
              {/* Google Maps */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Google Meu Negócio (Maps)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Essencial para negócios locais. Otimizamos sua ficha com palavras-chave, fotos e avaliações para você dominar o mapa da sua região.
                  </p>
                </div>
              </div>

              {/* SEO Técnico */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                   <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">SEO (Otimização de Sites)</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Preparamos a estrutura do seu site (velocidade, conteúdo, tags) para que o Google entenda que você é a autoridade do seu nicho.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 pt-0 mt-auto relative group/btn">
              <a 
                href="#contact" 
                title="Otimize seu site e Google Meu Negócio para ser encontrado naturalmente."
                className="block w-full text-center border-2 border-use-blue text-use-blue font-bold py-3 rounded-lg hover:bg-slate-900 hover:text-white transform hover:scale-105 transition-all duration-300 relative z-10"
              >
                Otimizar Minha Presença
              </a>
            </div>
          </div>

        </div>

        {/* Banner Inferior */}
        <div className="bg-use-blue rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl">
           <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Não sabe por onde começar?</h3>
              <p className="text-blue-200 text-lg">Nossa equipe analisa seu negócio e define a melhor estratégia: <strong>Tráfego ou SEO.</strong></p>
           </div>
           <a href="#contact" className="flex-shrink-0 bg-white text-use-blue px-8 py-4 rounded-full font-bold hover:bg-use-gold transition-colors flex items-center group">
              Falar com Especialista
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

      </div>
    </section>
  );
};

export default MarketingSection;