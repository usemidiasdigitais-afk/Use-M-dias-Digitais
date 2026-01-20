import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronRight, Newspaper } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LogoDisplay from './LogoDisplay';

interface HeaderProps {
  onOpenService: (id: string) => void;
  onNavigate: (view: 'home' | 'blog' | 'service' | 'privacy') => void;
  currentView: 'home' | 'blog' | 'service' | 'privacy';
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenService, onNavigate, currentView, theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section Observer for active links and dynamic CTA
  useEffect(() => {
    if (currentView !== 'home') return;

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = ['hero', 'services', 'niche-gallery', 'marketing', 'testimonials', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentView]);

  const serviceLinks = [
    { id: 'sites', label: 'Criação de Sites' },
    { id: 'lp', label: 'Landing Pages' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'ads', label: 'Tráfego Pago (Ads)' },
    { id: 'seo', label: 'SEO & Maps' },
    { id: 'apps', label: 'Aplicativos' },
  ];

  const handleServiceClick = (id: string) => {
    onOpenService(id);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleNavClick = (anchor: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
        const element = document.querySelector(anchor);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const getCtaText = () => {
    if (currentView === 'blog') return 'Voltar ao Site';
    if (currentView === 'privacy') return 'Ir para Início';
    switch (activeSection) {
      case 'services': return 'Saiba mais sobre Serviços';
      case 'niche-gallery': return 'Ver Portfólio Completo';
      case 'marketing': return 'Turbinar meu Tráfego';
      case 'testimonials': return 'Seja nosso Parceiro';
      default: return 'Orçamento';
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentView !== 'home' ? 'bg-use-blue dark:bg-slate-950 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => onNavigate('home')} className="cursor-pointer transition-transform hover:scale-105">
          <LogoDisplay />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => handleNavClick('#hero')} 
            className={`font-medium transition-colors text-sm uppercase tracking-wide border-b-2 ${
              activeSection === 'hero' && currentView === 'home' ? 'text-use-gold border-use-gold' : 'text-gray-200 border-transparent hover:text-use-gold'
            }`}
          >
            Início
          </button>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className={`group-hover:text-use-gold font-medium transition-colors text-sm uppercase tracking-wide flex items-center border-b-2 ${
              activeSection === 'services' && currentView === 'home' ? 'text-use-gold border-use-gold' : 'text-gray-200 border-transparent'
            }`}>
              Serviços
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border-t-4 border-use-gold overflow-hidden py-2">
                {serviceLinks.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="block w-full text-left px-4 py-3 text-use-blue dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-use-gold transition-colors text-sm font-semibold border-b border-gray-100 dark:border-slate-700 last:border-0"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleNavClick('#niche-gallery')} 
            className={`font-medium transition-colors text-sm uppercase tracking-wide border-b-2 ${
              activeSection === 'niche-gallery' && currentView === 'home' ? 'text-use-gold border-use-gold' : 'text-gray-200 border-transparent hover:text-use-gold'
            }`}
          >
            Portfólio
          </button>
          
          <button 
            onClick={() => onNavigate('blog')} 
            className={`font-medium transition-colors text-sm uppercase tracking-wide flex items-center gap-1 border-b-2 ${
              currentView === 'blog' ? 'text-use-gold border-use-gold' : 'text-gray-200 border-transparent hover:text-use-gold'
            }`}
          >
            Blog
          </button>
          
          <button 
            onClick={() => handleNavClick('#contact')} 
            className={`font-medium transition-colors text-sm uppercase tracking-wide border-b-2 ${
              activeSection === 'contact' && currentView === 'home' ? 'text-use-gold border-use-gold' : 'text-gray-200 border-transparent hover:text-use-gold'
            }`}
          >
            Contato
          </button>
          
          <div className="flex items-center space-x-4 border-l border-white/10 pl-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button 
              onClick={() => handleNavClick('#contact')}
              className="bg-use-gold text-use-blue px-6 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-md flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline whitespace-nowrap">{getCtaText()}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button 
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-use-blue dark:bg-slate-950 border-t border-blue-800 dark:border-slate-800 absolute w-full h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            <button onClick={() => handleNavClick('#hero')} className="text-left text-white hover:text-use-gold text-lg font-medium py-2 border-b border-blue-800">Início</button>
            
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between items-center text-white hover:text-use-gold text-lg font-medium py-2 border-b border-blue-800"
              >
                Serviços
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                {serviceLinks.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="flex items-center w-full text-left text-blue-200 hover:text-white py-2 text-base"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-use-gold" />
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleNavClick('#niche-gallery')} className="text-left text-white hover:text-use-gold text-lg font-medium py-2 border-b border-blue-800">Portfólio</button>
            
            <button 
              onClick={() => {
                onNavigate('blog');
                setIsMobileMenuOpen(false);
              }} 
              className="text-left text-white hover:text-use-gold text-lg font-medium py-2 border-b border-blue-800 flex items-center gap-2"
            >
              Blog Use News
              <Newspaper className="w-4 h-4" />
            </button>
            
            <button onClick={() => handleNavClick('#contact')} className="text-left text-white hover:text-use-gold text-lg font-medium py-2 border-b border-blue-800">Contato</button>
            
            <button 
              onClick={() => handleNavClick('#contact')}
              className="bg-use-gold text-use-blue px-8 py-3 rounded-full font-bold w-full text-center mt-6 shadow-lg"
            >
              {getCtaText()}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;