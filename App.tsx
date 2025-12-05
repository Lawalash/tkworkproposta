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
import { LogoConnector } from './components/LogoConnector';
import { PricingCard } from './components/PricingCard';
import { ApprovalModal, DoubtModal } from './components/EngagementModals';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showDoubtModal, setShowDoubtModal] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password.trim() === 'twork') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#043959] via-[#466FA6] to-[#8EA3BF] text-white flex items-center justify-center px-4 py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-[#AD8DF2] rounded-full blur-3xl" aria-hidden />
          <div className="absolute -right-16 top-10 w-72 h-72 bg-[#B79BF2] rounded-full blur-3xl" aria-hidden />
          <div className="absolute left-10 bottom-10 w-64 h-64 bg-[#F2D98D] rounded-full blur-3xl" aria-hidden />
          <div className="absolute right-8 bottom-14 w-52 h-52 bg-[#D99543] rounded-full blur-3xl" aria-hidden />
        </div>

        <div className="relative w-full max-w-3xl grid md:grid-cols-2 gap-6 items-center bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-black/20">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest uppercase">
              Pré-visualização segura
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Proposta exclusiva <span className="text-[#F2D98D]">Twork</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Antes de acessar a proposta completa, confirme que você recebeu esta prévia. Criamos uma experiência de login minimalista, responsiva e alinhada às cores da A2 Data e da Twork.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Seguro</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Responsivo</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">Experiência premium</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-slate-800 rounded-2xl shadow-xl p-6 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#466FA6]">Área reservada</p>
              <h2 className="text-2xl font-bold text-slate-900">Login para ver a proposta</h2>
              <p className="text-sm text-slate-500">Utilize a senha enviada pela A2 Data para desbloquear o documento.</p>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-[#466FA6] focus:border-transparent outline-none transition"
                  placeholder="Digite a senha para acessar"
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2">
                  <CheckCircle2 className="text-red-500" size={16} />
                  {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-[#043959]/30 hover:translate-y-[-1px] transition-transform"
            >
              Entrar
              <ArrowRight size={18} />
            </button>

            <div className="text-[11px] text-slate-500 leading-relaxed">
              Dica: para esta prévia, utilize a senha <span className="font-semibold text-slate-700">twork</span>. A área foi desenhada para dispositivos móveis, com botões amplos e contraste elevado.
            </div>
          </form>
        </div>
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowApprovalModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-a2-600 to-a2-500 hover:from-a2-500 hover:to-a2-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-a2-500/30 transform transition hover:-translate-y-1 text-lg"
            >
              Aprovar Proposta <CheckCircle2 size={20} />
            </button>

            <button
              onClick={() => setShowDoubtModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-4 px-8 rounded-xl transition-colors border border-slate-700"
            >
              Tirar Dúvidas <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} A2 Data. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <ApprovalModal open={showApprovalModal} onClose={() => setShowApprovalModal(false)} />
      <DoubtModal open={showDoubtModal} onClose={() => setShowDoubtModal(false)} />
    </div>
  );
}

export default App;