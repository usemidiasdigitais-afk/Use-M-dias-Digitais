import React from 'react';
import { Monitor, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenService: (id: string) => void;
  onNavigate: (view: 'home' | 'blog' | 'service' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenService, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  // Handler for Services: Opens the modal
  const handleServiceClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onOpenService(id);
  };

  // Handler for Internal Sections (Niches, Portfolio): Smooth Scroll
  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler for placeholders (Privacy/Terms)
  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('privacy');
  };

  return (
    <footer className="bg-use-blue text-white pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-use-gold p-1.5 rounded-lg">
                <Monitor className="w-6 h-6 text-use-blue" />
              </div>
              <span className="font-bold text-xl">USE Mídias</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agência especializada em soluções digitais de alta performance. Transformamos cliques em clientes com tecnologia e estratégia.
            </p>
            <div className="flex space-x-4">
               {/* Social Icons Placeholders */}
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-blue-800 flex items-center justify-center hover:bg-use-gold hover:text-use-blue transition-colors font-bold text-xs">IG</a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-blue-800 flex items-center justify-center hover:bg-use-gold hover:text-use-blue transition-colors font-bold text-xs">IN</a>
            </div>
          </div>

          {/* Services Column - Opens Modals */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-use-gold">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><button onClick={(e) => handleServiceClick(e, 'sites')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">Criação de Sites</button></li>
              <li><button onClick={(e) => handleServiceClick(e, 'lp')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">Landing Pages</button></li>
              <li><button onClick={(e) => handleServiceClick(e, 'ecommerce')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">E-commerce</button></li>
              <li><button onClick={(e) => handleServiceClick(e, 'ads')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">Google Ads</button></li>
              <li><button onClick={(e) => handleServiceClick(e, 'seo')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">SEO Local</button></li>
              <li><button onClick={(e) => handleServiceClick(e, 'apps')} className="hover:text-white transition-colors text-left flex items-center hover:translate-x-1 duration-200">Aplicativos</button></li>
            </ul>
          </div>

          {/* Niches Column - Scrolls to Gallery */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-use-gold">Nichos & Portfólio</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors font-bold text-white flex items-center gap-2">Ver Portfólio <ArrowUpRight className="w-3 h-3"/></a></li>
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200">Médicos e Clínicas</a></li>
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200">Advogados</a></li>
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200">Imobiliárias</a></li>
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200">Restaurantes</a></li>
              <li><a href="#niche-gallery" onClick={(e) => handleScrollToSection(e, 'niche-gallery')} className="hover:text-white transition-colors flex items-center hover:translate-x-1 duration-200">Serviços Locais</a></li>
            </ul>
          </div>

          {/* Contact Column - Direct Actions */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-use-gold">Atendimento</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Horário</span>
                Segunda a Sexta, 09:00 - 18:00
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/554199999834" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600 transition-colors mr-3">
                    <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-white" />
                  </div>
                  <span className="group-hover:text-white transition-colors">WhatsApp Comercial</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:usemidiasdigitais@gmail.com" 
                  className="flex items-center group"
                >
                  <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600 transition-colors mr-3">
                    <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="group-hover:text-white transition-colors">usemidiasdigitais@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Use Mídias Digitais. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={handlePrivacyClick} className="hover:text-white transition-colors">Política de Privacidade</button>
            <button className="hover:text-white transition-colors opacity-50 cursor-not-allowed">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;