import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade | Use Mídias Digitais";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-16 animate-fade-in transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-use-blue dark:text-use-gold font-bold hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar ao Início
        </button>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
          <div className="bg-use-blue p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Shield className="w-32 h-32" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Política de Privacidade</h1>
            <p className="text-blue-100 max-w-2xl mx-auto relative z-10">
              Sua privacidade é nossa prioridade. Conheça como protegemos e tratamos seus dados na Use Mídias Digitais.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* Seção 1 */}
            <section className="reveal active">
              <div className="flex items-center gap-3 mb-4 text-use-blue dark:text-use-gold">
                <Lock className="w-6 h-6" />
                <h2 className="text-2xl font-bold">1. Coleta de Informações</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente ao preencher formulários de contato, solicitar orçamentos ou interagir com nosso chat. Isso pode incluir:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Nome e Sobrenome', 'E-mail Corporativo', 'Telefone/WhatsApp', 'Nome da Empresa'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção 2 */}
            <section className="reveal active">
              <div className="flex items-center gap-3 mb-4 text-use-blue dark:text-use-gold">
                <Eye className="w-6 h-6" />
                <h2 className="text-2xl font-bold">2. Uso dos Dados</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Utilizamos seus dados exclusivamente para:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg border-l-4 border-use-gold text-sm dark:text-gray-300">
                  <strong>Atendimento Personalizado:</strong> Responder suas dúvidas e enviar propostas comerciais de acordo com seu interesse.
                </li>
                <li className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg border-l-4 border-use-gold text-sm dark:text-gray-300">
                  <strong>Marketing Estratégico:</strong> Enviar novidades e tendências do mercado digital (você pode cancelar a qualquer momento).
                </li>
              </ul>
            </section>

            {/* Seção 3 */}
            <section className="reveal active">
              <div className="flex items-center gap-3 mb-4 text-use-blue dark:text-use-gold">
                <FileText className="w-6 h-6" />
                <h2 className="text-2xl font-bold">3. Cookies e Rastreamento</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Utilizamos cookies para entender como os visitantes interagem com nosso site e para melhorar a performance de nossas campanhas de tráfego pago (Google Ads e Meta Ads). Esses dados são anonimizados e usados para análises estatísticas.
              </p>
            </section>

            {/* Seção 4 */}
            <section className="reveal active">
              <div className="flex items-center gap-3 mb-4 text-use-blue dark:text-use-gold">
                <Shield className="w-6 h-6" />
                <h2 className="text-2xl font-bold">4. Segurança</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra perda, roubo ou uso indevido. O acesso aos seus dados é restrito a colaboradores autorizados da Use Mídias Digitais.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-100 dark:border-slate-700 text-center">
              <p className="text-sm text-gray-500 mb-2">Última atualização: 20 de Maio de 2024</p>
              <p className="text-xs text-gray-400">Dúvidas? Entre em contato via usemidiasdigitais@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;