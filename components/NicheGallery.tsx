import React, { useState, useRef } from 'react';
import { NicheProject } from '../types';
import { ArrowUpRight, ArrowDown, ExternalLink } from 'lucide-react';

const niches: NicheProject[] = [
  {
    id: 'saude',
    nicheName: 'Saúde & Medicina',
    description: 'Sites para clínicas, dentistas e médicos. Agendamento online e layout que transmite confiança.',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
    features: ['Agendamento Online', 'Páginas de Especialidades', 'SEO Local para Clínicas'],
    relatedServiceId: 'sites'
  },
  {
    id: 'advocacia',
    nicheName: 'Advocacia & Direito',
    description: 'Design sóbrio e autoritário para escritórios de advocacia. Foco na apresentação dos advogados e áreas de atuação.',
    imageUrl: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=1200',
    features: ['Blog Jurídico', 'Áreas de Atuação', 'Botão WhatsApp Flutuante'],
    relatedServiceId: 'sites'
  },
  {
    id: 'imobiliaria',
    nicheName: 'Imobiliária & Construção',
    description: 'Vitrine de imóveis com filtros avançados e galerias de alta resolução. Ideal para corretores e construtoras.',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    features: ['Filtro de Imóveis', 'Galeria de Fotos', 'Integração com CRM'],
    relatedServiceId: 'sites'
  },
  {
    id: 'ecommerce',
    nicheName: 'E-commerce & Varejo',
    description: 'Lojas virtuais completas com carrinho, checkout seguro e gestão de estoque. Venda 24h por dia.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
    features: ['Checkout Transparente', 'Cálculo de Frete', 'Painel Administrativo'],
    relatedServiceId: 'ecommerce'
  },
  {
    id: 'delivery',
    nicheName: 'Restaurantes & Delivery',
    description: 'Cardápios digitais interativos e sistemas de pedidos online. Aumente suas vendas sem taxas de apps.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    features: ['Cardápio QR Code', 'Pedidos WhatsApp', 'Fotos Apetitosas'],
    relatedServiceId: 'apps'
  },
  {
    id: 'servicos',
    nicheName: 'Prestadores de Serviços',
    description: 'Ideal para eletricistas, encanadores, consultores e técnicos. Foco total em captar o contato do cliente.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    features: ['Botões de Ação Rápida', 'Depoimentos', 'Formulário de Orçamento'],
    relatedServiceId: 'lp'
  },
  {
    id: 'seo-local',
    nicheName: 'SEO & Google Maps',
    description: 'Estratégias de visibilidade local para empresas que precisam dominar os resultados de busca e o mapa da região.',
    imageUrl: 'https://images.unsplash.com/photo-1572021335469-31716248d19c?auto=format&fit=crop&q=80&w=2400',
    features: ['Ranking Local', 'Google Maps', 'Autoridade Regional'],
    relatedServiceId: 'seo'
  },
];

const NicheGallery: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<NicheProject>(niches[0]);
  const allProjectsRef = useRef<HTMLDivElement>(null);

  const scrollToAllProjects = () => {
    if (allProjectsRef.current) {
      allProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openService = (serviceId: string) => {
    const event = new CustomEvent('openService', { detail: serviceId });
    window.dispatchEvent(event);
  };

  return (
    <section id="niche-gallery" className="py-16 bg-use-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          
          {/* Left Side: Controls/List */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Expertise por Nicho
              </h2>
              <p className="text-gray-300 mb-8">
                Desenvolvemos estratégias visuais e funcionais específicas para o seu mercado. Selecione seu segmento para ver o que podemos fazer.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              {niches.map((niche) => (
                <button
                  key={niche.id}
                  onClick={() => setActiveNiche(niche)}
                  className={`text-left px-6 py-4 rounded-lg transition-all duration-300 flex justify-between items-center group relative ${
                    activeNiche.id === niche.id
                      ? 'bg-use-gold text-use-blue shadow-lg font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <span>{niche.nicheName}</span>
                  {activeNiche.id === niche.id && <ArrowUpRight className="w-5 h-5" />}
                </button>
              ))}
            </div>

            {/* Scroll Button */}
            <div className="pt-4 relative group">
              <button
                onClick={scrollToAllProjects}
                className="w-full py-4 border-2 border-use-gold text-use-gold font-bold rounded-lg hover:bg-use-gold hover:text-use-blue transition-all uppercase tracking-wider flex items-center justify-center gap-2 relative z-10"
              >
                Ver Todos os Projetos
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Preview */}
          <div className="lg:w-2/3 relative">
            <div 
              className="bg-white rounded-2xl p-2 shadow-2xl transform transition-all duration-500 h-full min-h-[400px] cursor-pointer group hover:scale-[1.01]"
              onClick={() => openService(activeNiche.relatedServiceId)}
            >
               <div className="h-full rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex flex-col justify-end p-8">
                     <div className="flex justify-between items-end">
                       <div>
                         <h3 className="text-3xl font-bold text-white mb-2">{activeNiche.nicheName}</h3>
                         <p className="text-gray-200 mb-6 max-w-lg">{activeNiche.description}</p>
                         
                         <div className="flex flex-wrap gap-3">
                            {activeNiche.features.map((feature, idx) => (
                               <div key={idx} className="group/tag relative">
                                  <span className="bg-use-gold/90 text-use-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider cursor-help">
                                      {feature}
                                  </span>
                               </div>
                            ))}
                         </div>
                       </div>
                       <div className="hidden md:block">
                         <div className="bg-use-gold text-use-blue p-3 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
                           <ExternalLink className="w-6 h-6" />
                         </div>
                       </div>
                     </div>
                  </div>
                  <img 
                    src={activeNiche.imageUrl} 
                    alt={`Exemplo de site para ${activeNiche.nicheName}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-use-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Ver Detalhes do Serviço</span>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* All Projects Grid Section */}
        <div ref={allProjectsRef} className="pt-12 border-t border-blue-800 scroll-mt-24">
           <div className="text-center mb-12">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Galeria Completa</h3>
             <div className="w-20 h-1 bg-use-gold mx-auto rounded-full"></div>
             <p className="text-gray-400 mt-4">Clique no projeto para ver como podemos aplicar essa estratégia no seu negócio.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {niches.map((niche) => (
                 <div 
                   key={niche.id} 
                   className="group relative h-72 rounded-xl overflow-hidden shadow-xl border border-blue-800 hover:border-use-gold transition-all duration-300 cursor-pointer"
                   onClick={() => openService(niche.relatedServiceId)}
                 >
                    <div className="absolute inset-0 bg-gradient-to-t from-use-blue via-transparent to-transparent opacity-90 z-10"></div>
                    <img 
                      src={niche.imageUrl} 
                      alt={niche.nicheName} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                       <h4 className="text-xl font-bold text-white mb-1 group-hover:text-use-gold transition-colors">{niche.nicheName}</h4>
                       <p className="text-xs text-gray-300 line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                         {niche.description}
                       </p>
                       <div className="text-xs font-bold text-use-gold uppercase tracking-wide flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                         Contratar Serviço <ArrowUpRight className="w-3 h-3" />
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default NicheGallery;