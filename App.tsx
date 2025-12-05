import React, { useState } from 'react';
import {
  Rocket,
  RefreshCw,
  Layers,
  TrendingUp, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Lock
} from 'lucide-react';
import ContactModal from './components/ContactModal';

// LogoConnector Component
const LogoConnector = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 -z-10 opacity-90 hidden md:block">
      <svg width="100%" height="100%" viewBox="0 0 256 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M10 64 C 70 64, 70 32, 128 64 C 186 96, 186 64, 246 64" 
          stroke="url(#gradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
          className="animate-pulse"
        />
        <circle cx="128" cy="64" r="8" fill="url(#gradient)" className="animate-ping" opacity="0.5" />
        <circle cx="128" cy="64" r="4" fill="#AD8DF2" />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="256" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#466FA6" />
            <stop offset="0.5" stopColor="#AD8DF2" />
            <stop offset="1" stopColor="#F2D98D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// PricingCard Component
const PricingCard = ({ title, priceHighlight, installmentHighlight, note, buttonText, detailsContent, isRecommended = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`
        relative flex flex-col p-8 rounded-3xl transition-all duration-500 border backdrop-blur-sm
        ${isRecommended 
          ? 'bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 border-purple-200 shadow-2xl shadow-purple-200/50 ring-2 ring-purple-300/30 transform md:scale-105' 
          : 'bg-white/80 border-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.02]'
        }
      `}
    >
      {isRecommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#466FA6] via-[#AD8DF2] to-[#B79BF2] text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-full shadow-lg animate-pulse">
          <Sparkles className="inline-block mr-1 -mt-1" size={14} />
          Proposta Completa
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
      </div>

      <div className="flex-grow space-y-5">
        <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
          isRecommended 
            ? 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200' 
            : 'bg-slate-50 border-slate-200'
        }`}>
          <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">Investimento</p>
          <p className="text-slate-700 font-medium mb-2">{priceHighlight}</p>
          <p className={`text-3xl font-black ${isRecommended ? 'bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] bg-clip-text text-transparent' : 'text-slate-900'}`}>
            {installmentHighlight}
          </p>
        </div>
        
        <div className="flex items-start gap-2 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
          <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-slate-600 leading-relaxed">{note}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105
            ${isOpen 
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
              : isRecommended 
                ? 'bg-gradient-to-r from-[#466FA6] via-[#AD8DF2] to-[#B79BF2] text-white shadow-xl shadow-purple-300/50 hover:shadow-2xl' 
                : 'bg-gradient-to-r from-[#043959] to-[#466FA6] text-white shadow-xl shadow-blue-300/50 hover:shadow-2xl'
            }
          `}
        >
          {buttonText}
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div 
          className={`
            overflow-hidden transition-all duration-700 ease-in-out
            ${isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="text-sm text-slate-700 space-y-3 bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-slate-200 shadow-inner">
            {detailsContent}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalType, setModalType] = useState<null | 'approval' | 'doubt'>(null);

  const handleSubmit = () => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      if (password.trim() === 'twork') {
        setIsAuthenticated(true);
      } else {
        setError('Senha incorreta. Tente novamente.');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const closeModal = () => setModalType(null);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#043959] via-[#466FA6] to-[#8EA3BF] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#AD8DF2] rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute -right-20 top-20 w-96 h-96 bg-[#B79BF2] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute left-20 bottom-20 w-72 h-72 bg-[#F2D98D] rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute right-10 bottom-20 w-64 h-64 bg-[#D99543] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Panel - Info */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase shadow-xl">
              <Lock className="animate-pulse" size={14} />
              Área Protegida
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black leading-tight">
              Proposta Exclusiva
              <span className="block mt-2 bg-gradient-to-r from-[#F2D98D] via-[#AD8DF2] to-white bg-clip-text text-transparent">
                Twork
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
              Acesse nossa proposta comercial personalizada. Esta prévia foi desenvolvida com design premium, responsivo e alinhado às identidades visuais da <strong className="text-[#F2D98D]">A2 Data</strong> e da <strong className="text-[#AD8DF2]">Twork</strong>.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: <ShieldCheck size={14} />, text: 'Seguro' },
                { icon: <Zap size={14} />, text: 'Responsivo' },
                { icon: <Sparkles size={14} />, text: 'Premium' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium">
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Login */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20 transform hover:scale-105 transition-transform duration-500">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Acesso Restrito
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Bem-vindo</h2>
                <p className="text-slate-600">Digite a senha fornecida pela A2 Data para acessar o conteúdo completo.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Senha de Acesso</label>
                  <div className="relative">
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="
                      w-full rounded-2xl border-2 border-slate-200 px-5 py-4 
                      text-base font-medium 
                      text-slate-900                           // <<< adiciona isso
                      placeholder:text-slate-400              // (opcional, cor do placeholder)
                      focus:ring-4 focus:ring-[#466FA6]/20 
                      focus:border-[#466FA6] outline-none 
                      transition-all bg-white
                    "
                    placeholder="••••••••"
                    disabled={isLoading}
                  />

                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-200 rounded-2xl px-4 py-3 animate-shake">
                    <CheckCircle2 className="text-red-500 flex-shrink-0" size={18} />
                    <span className="font-medium">{error}</span>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] text-white font-bold text-lg py-5 px-6 rounded-2xl shadow-2xl shadow-[#466FA6]/40 hover:shadow-3xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      Autenticando...
                    </>
                  ) : (
                    <>
                      Acessar Proposta
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          .animate-float { animation: float ease-in-out infinite; }
          .animate-shake { animation: shake 0.3s ease-in-out; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="relative bg-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#043959] via-[#AD8DF2] to-[#F2D98D]"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#466FA6]/10 to-[#AD8DF2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#F2D98D]/10 to-[#D99543]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></span>
            Proposta Comercial Confidencial
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Proposta de Integração
            <span className="block mt-2 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] bg-clip-text text-transparent">
              Digital
            </span>
          </h1>
          
          <p className="text-2xl text-slate-600 mb-16 font-medium">
            A2 Data <span className="text-slate-300 mx-3">×</span> <span className="text-[#466FA6] font-bold">Twork</span>
          </p>

          {/* Logos */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 min-h-[140px]">
            <LogoConnector />
            
            <div className="flex flex-col items-center z-10 bg-white p-6 rounded-3xl shadow-xl border-2 border-slate-100 w-56 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-[#466FA6] to-[#043959] rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                <Rocket size={36} />
              </div>
              <span className="font-black text-slate-900 text-lg">A2 Data</span>
              <span className="text-xs text-slate-500 font-medium">Consultoria & Integração</span>
            </div>

            <div className="md:hidden">
              <RefreshCw size={28} className="text-[#AD8DF2] animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            <div className="flex flex-col items-center z-10 bg-white p-6 rounded-3xl shadow-xl border-2 border-slate-100 w-56 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-gradient-to-br from-[#AD8DF2] to-[#B79BF2] rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg">
                <TrendingUp size={36} />
              </div>
              <span className="font-black text-slate-900 text-lg">Twork</span>
              <span className="text-xs text-slate-500 font-medium">E-commerce</span>
            </div>
          </div>
        </div>
      </header>

      {/* Project Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="md:flex">
            <div className="p-10 md:p-12 md:w-2/3 bg-gradient-to-br from-white to-blue-50/30">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] rounded-2xl">
                  <Layers className="text-white" size={28} />
                </div>
                O que vamos fazer
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8 text-lg">
                Configurar e integrar o sistema <strong className="text-[#466FA6]">Bling</strong> com a <strong className="text-[#466FA6]">Nuvemshop</strong> e a <strong className="text-[#466FA6]">Shopee</strong> da cliente, centralizando estoque, pedidos e catálogo em um fluxo único. A ideia é reduzir retrabalho, evitar furos de estoque e preparar a operação para crescer com segurança.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Integração Bling ↔ Nuvemshop",
                  "Integração Bling ↔ Shopee",
                  "Estoque centralizado e automático",
                  "Treinamento prático"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-base font-semibold text-slate-800 bg-white p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] flex items-center justify-center text-white shadow-lg">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:w-1/3 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-[#AD8DF2]">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Resultado Esperado</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <ShieldCheck className="text-green-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white font-medium">Segurança de dados e estoque</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm">
                  <Zap className="text-yellow-400 mt-1 flex-shrink-0" size={24} />
                  <p className="text-white font-medium">Agilidade no processamento de pedidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Investimento</h2>
            <p className="text-xl text-slate-600">Projeto completo com implementação e suporte</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PricingCard 
              title="Projeto de Integração Digital Completo"
              priceHighlight="Valor do projeto: R$ 1.349,07 + Taxa de implementação: R$ 472,17"
              installmentHighlight="10x de R$ 204,41"
              note="Valor total contempla todo o projeto de integração, implementação técnica e acompanhamento até estabilização. O valor no parcelamento já inclui a taxa de juros."
              buttonText="Ver detalhes completos do projeto"
              isRecommended={true}
              detailsContent={
                <>
                  <p className="font-bold text-slate-900 mb-4 text-base">O projeto inclui:</p>
                  
                  <div className="space-y-2 mb-6">
                    {[
                      "Estudo completo da operação e mapeamento de processos",
                      "Definição do fluxo ideal entre Bling, Nuvemshop e Shopee",
                      "Configuração completa do Bling para gestão de estoque e pedidos",
                      "Integração Bling ↔ Nuvemshop com sincronização automática",
                      "Integração Bling ↔ Shopee com sincronização automática",
                      "Configuração de regras de negócio e automações",
                      "Testes completos com produtos piloto",
                      "Ajustes e otimizações durante a fase de testes",
                      "Treinamento prático da equipe para uso do sistema",
                      "Acompanhamento pós-implementação até estabilização"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-5 rounded-2xl border-2 border-purple-200 mb-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Projeto base:</span>
                        <span className="font-mono font-bold text-lg">R$ 1.349,07</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Taxa de implementação:</span>
                        <span className="font-mono font-bold text-lg">R$ 472,17</span>
                      </div>
                      <div className="h-px bg-purple-300 my-2"></div>
                      <div className="flex justify-between items-center text-purple-900 font-black text-base">
                        <span>Investimento total:</span>
                        <span className="font-mono text-xl">R$ 1.821,24</span>
                      </div>
                      <div className="flex justify-between items-center text-purple-900 font-black text-lg bg-white/50 p-3 rounded-lg mt-3">
                        <span>Parcelado em 10x de:</span>
                        <span className="font-mono text-2xl">R$ 204,75</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="font-bold text-slate-900 mb-2 text-sm">A taxa de implementação cobre:</p>
                    <ul className="space-y-1.5 text-sm">
                      {[
                        "Estudo técnico aprofundado do seu negócio",
                        "Arquitetura e desenho completo da integração",
                        "Implementação técnica especializada",
                        "Testes extensivos e ajustes necessários",
                        "Acompanhamento até completa estabilização do sistema"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="text-purple-500 flex-shrink-0 mt-0.5" size={14} />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
          <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 mb-6">
            <RefreshCw size={32} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-4">Manutenção e Melhorias</h3>
          <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed text-lg">
            A manutenção é cobrada à parte. Novas melhorias, automações ou integrações extras são discutidas conforme a necessidade e o nível de complexidade. Podemos estruturar <span className="font-bold text-[#466FA6]">valores pontuais por demanda específica</span>, ou <span className="font-bold text-[#466FA6]">um plano mensal de suporte</span>, se fizer sentido para a rotina da cliente.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#466FA6]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#AD8DF2]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <CheckCircle2 size={40} className="text-[#F2D98D]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            "Nosso objetivo é deixar a operação digital da cliente
            <span className="block mt-2 bg-gradient-to-r from-[#F2D98D] via-[#AD8DF2] to-white bg-clip-text text-transparent">
              mais organizada, leve e pronta para crescer."
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            <button
              onClick={() => setModalType('approval')}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#466FA6] via-[#AD8DF2] to-[#B79BF2] hover:scale-105 text-white font-black py-5 px-12 rounded-2xl shadow-2xl shadow-purple-500/30 transform transition-all duration-300 text-lg"
            >
              Aprovar Proposta <CheckCircle2 size={22} />
            </button>

            <button
              onClick={() => setModalType('doubt')}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-5 px-10 rounded-2xl transition-all border-2 border-white/20 hover:scale-105 duration-300"
            >
              Tirar Dúvidas <ArrowRight size={22} />
            </button>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} A2 Data. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={!!modalType} type={modalType || 'approval'} onClose={closeModal} />
    </div>
  );
}

export default App;