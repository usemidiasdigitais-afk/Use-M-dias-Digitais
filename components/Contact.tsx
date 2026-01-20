import React from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-slate-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border-t-4 border-use-gold reveal">
          
          {/* Contact Info (Blue Side) */}
          <div className="md:w-5/12 bg-use-blue p-10 md:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-use-gold">
                Atendimento Especializado
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">Vamos escalar seu negócio?</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Preencha o formulário. Seja para criar um site novo ou gerenciar campanhas de alta performance, temos a solução certa.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group text-white">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-use-gold group-hover:text-use-blue transition-colors">
                    <Phone className="w-6 h-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefone / WhatsApp</h3>
                    <p className="text-gray-300">(41) 99999-834</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group text-white">
                   <div className="p-2 bg-white/5 rounded-lg group-hover:bg-use-gold group-hover:text-use-blue transition-colors">
                    <Mail className="w-6 h-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">E-mail</h3>
                    <p className="text-gray-300">usemidiasdigitais@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group text-white">
                   <div className="p-2 bg-white/5 rounded-lg group-hover:bg-use-gold group-hover:text-use-blue transition-colors">
                    <MapPin className="w-6 h-6 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Atendimento</h3>
                    <p className="text-gray-300">Online para todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-bold">Siga nossas redes:</p>
               <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-use-gold hover:text-use-blue transition-colors flex items-center justify-center cursor-pointer font-bold text-white">IG</div>
                  <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-use-gold hover:text-use-blue transition-colors flex items-center justify-center cursor-pointer font-bold text-white">LN</div>
                  <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-use-gold hover:text-use-blue transition-colors flex items-center justify-center cursor-pointer font-bold text-white">FB</div>
               </div>
            </div>
          </div>

          {/* Form (White Side) */}
          <div className="md:w-7/12 p-10 md:p-12 dark:bg-slate-800">
            <h3 className="text-2xl font-bold text-use-blue dark:text-use-gold mb-6">Solicite um Orçamento</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="name" className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Nome Completo
                    <HelpCircle className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                    <span className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-use-blue text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      Insira seu nome para que possamos identificá-lo corretamente.
                    </span>
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900" placeholder="Seu nome" />
                </div>
                <div className="relative group">
                  <label htmlFor="company" className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Empresa
                    <HelpCircle className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                    <span className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-use-blue text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      Caso represente um negócio, informe o nome da empresa.
                    </span>
                  </label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900" placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label htmlFor="email" className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    E-mail Corporativo
                    <HelpCircle className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                    <span className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-use-blue text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      Usaremos este e-mail para enviar sua proposta detalhada.
                    </span>
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900" placeholder="seu@email.com" />
                </div>
                <div className="relative group">
                  <label htmlFor="phone" className="flex items-center text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">
                    WhatsApp
                    <HelpCircle className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                    <span className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-use-blue text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      Informe o número com DDD para um contato mais ágil via WhatsApp.
                    </span>
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900" placeholder="(41) 99999-834" />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Principal Interesse:</label>
                <select id="interest" className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-white dark:bg-slate-900 dark:text-white cursor-pointer">
                  <option disabled selected>Selecione uma opção...</option>
                  <optgroup label="Marketing & Tráfego">
                    <option>Gestão de Google Ads (Links Patrocinados)</option>
                    <option>Meta Ads (Instagram/Facebook)</option>
                    <option>SEO e Otimização Google Maps</option>
                  </optgroup>
                  <optgroup label="Desenvolvimento">
                    <option>Criação de Site Institucional</option>
                    <option>E-commerce / Loja Virtual</option>
                    <option>Landing Page de Alta Conversão</option>
                    <option>Aplicativo Mobile</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Mensagem (Opcional)</label>
                <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 dark:border-slate-700 focus:ring-0 focus:border-use-gold outline-none transition-all bg-gray-50 dark:bg-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900" placeholder="Conte um pouco sobre seu objetivo ou site atual..."></textarea>
              </div>

              <button type="submit" className="w-full bg-use-gold text-use-blue font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-lg transform hover:-translate-y-1">
                <Send className="w-5 h-5 mr-2" />
                Solicitar Consultoria Grátis
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;