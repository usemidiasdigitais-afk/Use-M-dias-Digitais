import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Zap, Target, Play, Award, ShieldCheck, Clock, TrendingUp, Video } from 'lucide-react';
import { servicesList } from './Services';

interface ServiceDetailPageProps {
  serviceId: string | null;
  onBack: () => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onBack }) => {
  const service = servicesList.find(s => s.id === serviceId);
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (service) {
      // Atualização Dinâmica do Título para SEO
      const prevTitle = document.title;
      document.title = `${service.title} | Use Mídias Digitais`;
      
      // Atualização Dinâmica da Meta Description para SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      const prevDescription = metaDescription?.getAttribute('content');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', service.description);
      }
      
      // Cleanup: Reverter metadados ao sair da página de detalhes
      return () => {
        document.title = prevTitle;
        if (metaDescription && prevDescription) {
          metaDescription.setAttribute('content', prevDescription);
        }
      };
    }
  }, [service]);

  // Função para identificar links externos e aplicar rel="noopener noreferrer"
  const renderTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={i} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-use-blue dark:text-use-gold underline hover:opacity-80 font-bold"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Ícones específicos para os benefícios da barra lateral
  const getBenefitIcon = (index: number) => {
    const icons = [Award, ShieldCheck, Clock, TrendingUp];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5 text-use-gold mr-3 flex-shrink-0" />;
  };

  if (!service || !service.details) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Serviço não encontrado</h2>
          <button onClick={onBack} className="text-use-blue font-bold flex items-center justify-center mx-auto">
            <ArrowLeft className="mr-2 w-5 h-5" /> Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 animate-fade-in transition-colors duration-300 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-use-blue dark:text-use-gold font-bold hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para Início
        </button>

        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 group">
          <div className="absolute inset-0 bg-gradient-to-t from-use-blue/90 via-use-blue/20 to-transparent z-10"></div>
          <img 
            src={service.details.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover animate-hero-zoom"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
            <span className="bg-use-gold text-use-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block shadow-lg">
              Solução Especializada
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 drop-shadow-sm">
              {service.description}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area with Tabbed Interface */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
              
              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-100 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 px-6 py-5 font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'overview' 
                      ? 'bg-white dark:bg-slate-800 text-use-blue dark:text-use-gold border-b-4 border-use-gold' 
                      : 'text-gray-500 hover:text-use-blue dark:hover:text-gray-300 border-b-4 border-transparent'
                  }`}
                >
                  <Target className="w-5 h-5" />
                  Visão Geral
                </button>
                <button 
                  onClick={() => setActiveTab('features')}
                  className={`flex-1 px-6 py-5 font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'features' 
                      ? 'bg-white dark:bg-slate-800 text-use-blue dark:text-use-gold border-b-4 border-use-gold' 
                      : 'text-gray-500 hover:text-use-blue dark:hover:text-gray-300 border-b-4 border-transparent'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Recursos
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-8 md:p-10 transition-all duration-300">
                {activeTab === 'overview' ? (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-use-blue dark:text-use-gold mb-6 flex items-center">
                      <Zap className="w-8 h-8 mr-3 text-use-gold" />
                      Como ajudamos seu negócio
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                      {renderTextWithLinks(service.details.longDescription)}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-use-blue dark:text-use-gold mb-8 flex items-center">
                      <CheckCircle2 className="w-8 h-8 mr-3 text-use-gold" />
                      Principais Recursos da Solução
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.details.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center p-6 bg-gray-50 dark:bg-slate-700/50 rounded-xl border border-gray-100 dark:border-slate-700 hover:border-use-gold transition-colors group">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-slate-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-use-gold transition-colors">
                            <Zap className="w-5 h-5 text-use-blue dark:text-white" />
                          </div>
                          <span className="font-bold text-lg text-use-blue dark:text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Player Section (Incremental Add) */}
            <div className="bg-use-blue rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Video className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Play className="w-6 h-6 text-use-gold" />
                Demonstração de Impacto
              </h3>
              <div className="aspect-video w-full bg-slate-800 rounded-xl overflow-hidden shadow-2xl relative border border-white/10">
                 {/* Placeholder Video Player */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer">
                    <div className="bg-use-gold p-6 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.5)] transform transition-transform group-hover:scale-110">
                      <Play className="w-10 h-10 text-use-blue fill-current" />
                    </div>
                 </div>
                 <img 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                   alt="Video Placeholder"
                   className="w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-widest text-use-gold">
                   Exemplo de Resultado: {service.title}
                 </div>
              </div>
              <p className="mt-6 text-sm text-blue-200">
                Veja como nossa metodologia aplicada ao serviço de <strong>{service.title}</strong> transforma a presença digital dos nossos parceiros em máquinas de vendas.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 sticky top-32">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-use-gold" />
                Vantagens de Escolher a USE
              </h3>
              
              <div className="space-y-8 mb-10">
                {service.details.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    {getBenefitIcon(idx)}
                    <div className="border-l-2 border-use-gold/30 pl-4">
                      <h4 className="font-extrabold text-use-blue dark:text-use-gold mb-1 text-lg leading-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-gray-100 dark:border-slate-700">
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-use-gold text-use-blue font-bold py-5 rounded-xl hover:bg-yellow-500 transition-all shadow-lg hover:scale-[1.02] text-lg"
                >
                  {service.details.ctaText}
                </a>
                <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-widest font-bold">
                  Orçamento sem compromisso
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info for SEO */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 text-center">
          <p className="text-gray-500 text-sm">© 2025 Use Mídias Digitais - Especialistas em {service.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;