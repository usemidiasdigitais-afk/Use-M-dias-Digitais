import React, { useEffect, useState, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Silva',
    role: 'CEO',
    company: 'Construtora Horizonte',
    content: 'Desde que a Use Mídias assumiu nosso Google Ads e reformulou o site, o número de leads qualificados triplicou. A expertise deles no nicho imobiliário fez toda a diferença.',
  },
  {
    id: 2,
    name: 'Fernanda Oliveira',
    role: 'Diretora Clínica',
    company: 'OdontoPremium',
    content: 'O trabalho de SEO Local foi incrível. Hoje aparecemos em primeiro lugar no mapa para "dentista" na nossa região. A agenda está sempre lotada!',
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    role: 'Proprietário',
    company: 'Mendes Advocacia',
    content: 'Profissionalismo ímpar. O site ficou elegante e transmite a autoridade que precisávamos. As campanhas de Meta Ads trouxeram clientes que realmente fecham contrato.',
  },
  {
    id: 4,
    name: 'Juliana Costa',
    role: 'Fundadora',
    company: 'Bella Moda',
    content: 'A loja virtual ficou perfeita! O checkout transparente aumentou nossa conversão em 40%. O suporte da equipe durante o lançamento foi essencial.',
  },
  {
    id: 5,
    name: 'Roberto Almeida',
    role: 'Gerente',
    company: 'Restaurante Sabor & Arte',
    content: 'O cardápio digital integrado ao WhatsApp facilitou muito nossa operação de delivery. As fotos profissionais que eles produziram deram outra cara para o nosso Instagram.',
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Structured Data for SEO (Schema.org)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Use Mídias Digitais",
      "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
      "description": "Agência especializada em criação de sites e tráfego pago.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": testimonials.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonials.map((t) => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": t.name,
          "jobTitle": t.role,
          "worksFor": {
            "@type": "Organization",
            "name": t.company
          }
        },
        "reviewBody": t.content
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-use-gold font-bold tracking-wider uppercase text-sm">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-use-blue mt-2">O Que Dizem Nossos Parceiros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Resultados reais de quem confiou na nossa estratégia para crescer no digital.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Viewport */}
          <div className="overflow-hidden p-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 p-8 md:p-12 rounded-2xl relative shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                    
                    <div className="bg-use-blue text-use-gold p-4 rounded-full shadow-lg mb-6">
                      <Quote className="w-8 h-8" />
                    </div>
                    
                    <div className="flex space-x-1 mb-6" aria-label="Avaliação de 5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-use-gold fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-8 italic text-lg leading-relaxed relative z-10 max-w-2xl">
                      "{t.content}"
                    </p>
                    
                    <div className="border-t border-gray-200 pt-6 w-full flex flex-col items-center">
                      <div className="w-16 h-16 bg-use-blue rounded-full flex items-center justify-center text-use-gold font-bold text-2xl mb-3 shadow-md">
                        {t.name.charAt(0)}
                      </div>
                      <p className="font-bold text-use-blue text-xl">{t.name}</p>
                      <p className="text-sm text-gray-500 font-medium">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 bg-white text-use-blue hover:text-use-gold hover:bg-use-blue p-3 rounded-full shadow-xl border border-gray-100 transition-all z-20 group"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 bg-white text-use-blue hover:text-use-gold hover:bg-use-blue p-3 rounded-full shadow-xl border border-gray-100 transition-all z-20 group"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-use-gold w-8' : 'bg-gray-300 w-2.5 hover:bg-use-blue'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;