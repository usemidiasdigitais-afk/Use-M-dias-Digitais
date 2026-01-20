// Improve AI news fetching with recommended model and safer text handling
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Newspaper, 
  ArrowRight, 
  ExternalLink, 
  RefreshCw, 
  Calendar, 
  User, 
  TrendingUp, 
  Plus, 
  Minus, 
  Globe,
  ArrowLeft,
  Share2,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Interfaces
interface NewsArticle {
  id: number;
  category: string;
  title: string;       // H2
  subtitle: string;    // H3
  content: string;     // Paragraph
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  date: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface BlogPageProps {
  onBack: () => void;
}

const staticNews: NewsArticle[] = [
  {
    id: 1,
    category: "Google SEO",
    title: "Core Update do Google: O que muda para sites locais?",
    subtitle: "A prioridade agora é a experiência do usuário e conteúdo útil.",
    content: "O Google lançou uma nova atualização focada em reduzir conteúdo de baixa qualidade. Para empresas locais, isso significa que ter um perfil no Google Meu Negócio bem preenchido e avaliações reais conta mais do que nunca.",
    imageUrl: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000&auto=format&q=80",
    sourceUrl: "https://developers.google.com/search/blog",
    sourceName: "Google Search Central",
    date: "15 Mai, 2025"
  },
  {
    id: 2,
    category: "Inteligência Artificial",
    title: "IA no Marketing: Como automatizar sem perder a humanização",
    subtitle: "Ferramentas generativas estão mudando a criação de campanhas.",
    content: "O uso de IA para criar textos e imagens explodiu, mas o consumidor busca autenticidade. A tendência é usar a IA para análise de dados e personalização, mantendo a estratégia feita por humanos.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000&auto=format&q=80",
    sourceUrl: "https://searchengineland.com/",
    sourceName: "Search Engine Land",
    date: "12 Mai, 2025"
  },
  {
    id: 3,
    category: "Tráfego Pago",
    title: "O futuro do Google Ads sem Cookies de terceiros",
    subtitle: "Como rastrear conversões na nova era da privacidade.",
    content: "Com as mudanças nas políticas de privacidade, depender apenas de cookies não é mais viável. Estratégias de First-Party Data tornaram-se obrigatórias para manter o ROI positivo.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000&auto=format&q=80",
    sourceUrl: "https://ads.google.com/home/",
    sourceName: "Google Ads Blog",
    date: "10 Mai, 2025"
  }
];

const faqData: FaqItem[] = [
  {
    question: "Quanto tempo demora para o SEO colocar meu site na primeira página?",
    answer: "O SEO é uma estratégia de médio a longo prazo. Geralmente, resultados significativos começam a aparecer entre 3 a 6 meses, dependendo da concorrência do seu nicho e da autoridade atual do seu domínio."
  },
  {
    question: "Qual a diferença entre Google Ads e Meta Ads?",
    answer: "O Google Ads foca na intenção de busca (o usuário já está procurando o serviço). O Meta Ads (Instagram/Facebook) foca na geração de demanda e desejo, aparecendo para o usuário baseado em seus interesses e comportamento."
  },
  {
    question: "Vale a pena investir em tráfego pago se meu site ainda é novo?",
    answer: "Com certeza! O tráfego pago é a forma mais rápida de gerar leads e vendas imediatas enquanto seu site constrói autoridade orgânica. É o motor de crescimento ideal para quem não pode esperar meses pelo SEO."
  },
  {
    question: "O que é Google Meu Negócio e por que é importante?",
    answer: "É a ficha gratuita da sua empresa que aparece no Google Maps e nas buscas locais. Estar bem posicionado aqui garante que clientes na sua região encontrem seu endereço, telefone e avaliações positivas rapidamente."
  },
  {
    question: "Vocês fazem apenas o site ou também gerenciam as redes sociais?",
    answer: "Nosso foco é performance e conversão. Criamos sites e landing pages de alta velocidade e gerenciamos anúncios (Google/Meta) para trazer retorno financeiro direto. Não focamos apenas em 'likes', mas em vendas reais."
  },
  {
    question: "Landing Page ou Site Institucional: qual escolher?",
    answer: "Se você quer vender um produto ou serviço específico em uma campanha de anúncios, a Landing Page é melhor por ser focada em conversão. Se você quer apresentar toda a estrutura e autoridade da sua empresa, o Site Institucional é a escolha certa."
  }
];

const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  const [articles, setArticles] = useState<NewsArticle[]>(staticNews);
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchLiveNews = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Atue como um editor chefe de um portal de tecnologia. Liste 3 notícias recentes sobre Marketing Digital.
        Retorne este formato JSON:
        [
          {
            "category": "Google",
            "title": "H2 Title",
            "subtitle": "H3 Subtitle",
            "content": "Short summary",
            "keyword": "unsplash query",
            "date": "Date string"
          }
        ]`,
      });

      const rawText = response.text || "";
      const jsonStr = rawText.replace(/```json|```/g, '').trim();
      const parsedData = JSON.parse(jsonStr);

      const mappedArticles: NewsArticle[] = parsedData.map((item: any, index: number) => ({
        id: index + Date.now(),
        category: item.category,
        title: item.title,
        subtitle: item.subtitle,
        content: item.content,
        imageUrl: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&sig=${index}`, 
        sourceUrl: "https://news.google.com",
        sourceName: "Tech Source",
        date: item.date || "Hoje"
      }));

      setArticles(mappedArticles);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Helper para renderizar links externos com segurança
  const renderContentWithLinks = (text: string) => {
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-sans pt-20 animate-fade-in transition-colors duration-300">
      
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-30 px-4 py-4 shadow-sm">
        <div className="max-w-7xl auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center text-use-blue dark:text-use-gold font-bold hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para o Site
          </button>
          <div className="flex items-center space-x-2">
            <Newspaper className="w-5 h-5 text-use-gold" />
            <span className="font-bold text-use-blue dark:text-white text-lg">Use News</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-16 reveal active">
          <h1 className="text-4xl md:text-6xl font-extrabold text-use-blue dark:text-white mb-6 tracking-tight">
            Blog de Marketing Digital & <br /> <span className="text-use-gold">Tecnologia</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Notícias atualizadas, estratégias de SEO e as últimas tendências do Google e Meta Ads para alavancar seu negócio.
          </p>
          
          <button 
             onClick={fetchLiveNews}
             disabled={loading}
             className={`mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all ${
                 loading ? 'bg-gray-200 text-gray-500' : 'bg-use-blue dark:bg-use-gold text-white dark:text-use-blue hover:scale-105'
             }`}
          >
             <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
             {loading ? "Buscando Novidades..." : "Atualizar Notícias Agora"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-slate-700 h-full group reveal active"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                   <span className="bg-use-gold text-use-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                     {article.category}
                   </span>
                </div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs opacity-90 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {article.date}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-use-blue dark:group-hover:text-use-gold transition-colors">
                  {article.title}
                </h2>
                <h3 className="text-sm font-semibold text-use-blue dark:text-use-gold mb-4 uppercase tracking-wide opacity-80 border-l-4 border-use-gold pl-3">
                  {article.subtitle}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {renderContentWithLinks(article.content)}
                </div>
                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
                   <a 
                     href={article.sourceUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-sm font-bold text-use-blue dark:text-use-gold hover:opacity-80 transition-opacity flex items-center"
                   >
                     Ler Completa <ExternalLink className="w-3 h-3 ml-2" />
                   </a>
                   <Share2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-use-gold" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expanded FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24 reveal active">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-use-gold/10 text-use-gold px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-use-blue dark:text-white">
              Tire suas dúvidas sobre <span className="text-use-gold">Marketing Digital</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-use-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-gray-50 dark:border-slate-700/50">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;