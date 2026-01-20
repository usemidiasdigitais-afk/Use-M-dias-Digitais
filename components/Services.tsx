import React from 'react';
import { Layout, Smartphone, Search, BarChart3, Globe, Code, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';

// Updated Service List with optimized images and fixed SEO image
export const servicesList: Service[] = [
  {
    id: 'sites',
    title: 'Criação de Sites',
    description: 'Desenvolvimento de sites institucionais, blogs e portais modernos, responsivos e otimizados para SEO.',
    icon: Layout,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Seu site é a sede da sua empresa na internet. Na USE Mídias, não criamos apenas páginas bonitas; desenvolvemos ferramentas de vendas. Utilizamos tecnologias modernas (React, Next.js, Tailwind) para garantir velocidade ultrarrápida, segurança total e adaptação perfeita a qualquer dispositivo móvel.',
      features: ['Design Responsivo (Mobile First)', 'Otimização de Velocidade (Core Web Vitals)', 'Painel Administrativo Intuitivo', 'Integração com WhatsApp e CRM'],
      benefits: [
        { title: 'Credibilidade Imediata', desc: 'Um site profissional transmite autoridade e confiança para o seu cliente.' },
        { title: 'Vendas 24/7', desc: 'Sua empresa aberta o tempo todo, captando leads enquanto você dorme.' }
      ],
      ctaText: 'Quero um Site Profissional'
    }
  },
  {
    id: 'lp',
    title: 'Landing Pages',
    description: 'Páginas de alta conversão focadas em vendas e captura de leads. Design persuasivo e rápido.',
    icon: Globe,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Landing Pages são páginas desenhadas com um único objetivo: converter visitantes em clientes. Utilizamos técnicas de Copywriting persuasivo, gatilhos mentais e design estratégico para guiar o usuário até o botão de compra. Ideal para lançamentos, captura de leads e campanhas de Google Ads.',
      features: ['Copywriting Persuasivo', 'Testes A/B', 'Carregamento Instantâneo', 'Pixel de Rastreamento Configurado'],
      benefits: [
        { title: 'Alta Taxa de Conversão', desc: 'Focada em uma única ação, elimina distrações e aumenta vendas.' },
        { title: 'ROI Maximizado', desc: 'O par perfeito para suas campanhas de tráfego pago.' }
      ],
      ctaText: 'Criar Landing Page de Alta Conversão'
    }
  },
  {
    id: 'apps',
    title: 'Aplicativos',
    description: 'Desenvolvimento de Apps iOS e Android personalizados para o seu modelo de negócio e necessidades.',
    icon: Smartphone,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Transforme sua ideia em um aplicativo escalável. Desenvolvemos soluções nativas e híbridas para Android e iOS. Seja um app de delivery, gestão, rede social ou utilitário, nossa equipe cuida de todo o ciclo: design, desenvolvimento, publicação nas lojas e manutenção.',
      features: ['UX/UI Design Focado no Usuário', 'Desenvolvimento Android & iOS', 'Integração com APIs e Pagamentos', 'Painel de Controle Web'],
      benefits: [
        { title: 'Fidelização de Clientes', desc: 'Esteja no bolso do seu cliente, enviando notificações e ofertas.' },
        { title: 'Inovação de Mercado', desc: 'Destaque-se da concorrência com tecnologia própria.' }
      ],
      ctaText: 'Tirar meu App do Papel'
    }
  },
  {
    id: 'seo',
    title: 'SEO & Google Maps',
    description: 'Otimização orgânica para colocar sua empresa na primeira página e destaque no Google Meu Negócio.',
    icon: Search,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1572021335469-31716248d19c?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Apareça quando seu cliente procurar pelo seu serviço. O SEO (Search Engine Optimization) é a arte de posicionar seu site no topo do Google sem pagar por clique. Além disso, otimizamos seu perfil no Google Meu Negócio para dominar as buscas locais e o Google Maps.',
      features: ['Auditoria de SEO Técnico', 'Pesquisa de Palavras-Chave', 'Criação de Conteúdo Otimizado', 'Gestão de Google Meu Negócio'],
      benefits: [
        { title: 'Tráfego Qualificado Gratuito', desc: 'Atraia clientes que já estão procurando o que você vende.' },
        { title: 'Autoridade de Marca', desc: 'Estar no topo do Google gera confiança imediata.' }
      ],
      ctaText: 'Quero Estar na 1ª Página'
    }
  },
  {
    id: 'ads',
    title: 'Tráfego Pago',
    description: 'Gestão estratégica de campanhas no Google Ads e Meta Ads (Facebook/Instagram) para resultados imediatos.',
    icon: BarChart3,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Chega de gastar dinheiro sem retorno. Nossa gestão de tráfego pago é baseada em dados. Criamos campanhas segmentadas no Google Ads (para quem busca) e Facebook/Instagram Ads (para gerar desejo). Monitoramos conversões, custo por lead e ROI diariamente.',
      features: ['Google Ads (Rede de Pesquisa e Display)', 'Instagram & Facebook Ads', 'Remarketing Inteligente', 'Relatórios de Performance'],
      benefits: [
        { title: 'Resultados Imediatos', desc: 'Suas campanhas no ar e gerando leads em até 48 horas.' },
        { title: 'Escala Previsível', desc: 'Saiba exatamente quanto investir para bater suas metas.' }
      ],
      ctaText: 'Vender Mais com Anúncios'
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Lojas virtuais completas com carrinho, checkout seguro e gestão de estoque. Venda 24h por dia.',
    icon: Code,
    details: {
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=75&w=1600',
      longDescription: 'Sua loja aberta 24 horas por dia para o mundo todo. Criamos e-commerces robustos, integrados com os principais meios de pagamento e logística do Brasil. Foco total em usabilidade para reduzir o abandono de carrinho e aumentar o ticket médio.',
      features: ['Integração com Correios/Transportadoras', 'Pagamentos via Pix/Cartão/Boleto', 'Gestão de Estoque e Pedidos', 'Recuperação de Carrinho'],
      benefits: [
        { title: 'Autonomia Total', desc: 'Gerencie produtos e pedidos facilmente pelo painel.' },
        { title: 'Sem Limites Geográficos', desc: 'Venda para todo o Brasil sem abrir filiais físicas.' }
      ],
      ctaText: 'Montar Minha Loja Virtual'
    }
  },
];

interface ServicesProps {
  activeServiceId?: string | null;
  onClose?: () => void;
}

const Services: React.FC<ServicesProps> = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-slate-900/50 relative transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-use-blue dark:text-white mb-4">Nossas Soluções Digitais</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Da concepção da ideia à execução da campanha de vendas. Somos uma agência full-service pronta para digitalizar seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 dark:border-slate-700 group flex flex-col reveal overflow-hidden"
            >
              {/* Service Preview Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.details?.heroImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-use-gold rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 text-use-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-2">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      const event = new CustomEvent('openService', { detail: service.id });
                      window.dispatchEvent(event);
                    }}
                    className="w-full inline-flex items-center justify-center px-4 py-2 border-2 border-use-blue dark:border-use-gold text-use-blue dark:text-use-gold font-bold rounded-lg hover:bg-use-blue dark:hover:bg-use-gold hover:text-white dark:hover:text-use-blue transition-all duration-300 group-hover:shadow-md cursor-pointer"
                  >
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bastidores / Agency Life Showcase */}
        <div className="mt-16 reveal">
            <div className="bg-use-blue dark:bg-slate-950 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-2 bg-use-gold/20 text-use-gold px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider w-fit mb-6">
                    <Zap className="w-4 h-4" />
                    <span>Bastidores</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                    A Força da <span className="text-use-gold">Nossa Estratégia</span>
                  </h3>
                  
                  <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                    Não é mágica, é processo. Nossa equipe integra design, desenvolvimento e tráfego pago para criar ecossistemas de vendas à prova de falhas. Veja como transformamos estratégia em resultados.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-white">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-medium">Equipe Multidisciplinar Certificada</span>
                    </div>
                    <div className="flex items-center text-white">
                       <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="font-medium">Tecnologia de Ponta (Next.js & AI)</span>
                    </div>
                  </div>
                </div>

                {/* Images Grid */}
                <div className="relative bg-gray-900 min-h-[400px] lg:min-h-full p-4 grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden row-span-2 shadow-lg group">
                     <div className="absolute inset-0 bg-use-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=70&w=600" 
                       alt="Equipe trabalhando em estratégia" 
                       className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                       loading="lazy"
                     />
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                     <div className="absolute inset-0 bg-use-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1531498860503-005a9873fb60?auto=format&fit=crop&q=70&w=600" 
                       alt="Planejamento estratégico" 
                       className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                       loading="lazy"
                     />
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                     <div className="absolute inset-0 bg-use-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=70&w=600" 
                       alt="Análise de Dados e Resultados" 
                       className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                       loading="lazy"
                     />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;