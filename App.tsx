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
  CheckCircle2
} from 'lucide-react';
import { LogoConnector } from './components/LogoConnector';
import { PricingCard } from './components/PricingCard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    <div className="min-h-screen flex flex-col">
      {/* 
        ==============================
        1) TOPO – PARCERIA
        ==============================
      */}
      <header className="relative bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-a2-600 via-purple-500 to-client-500"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-a2-50 rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-client-50 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Proposta Comercial Confidencial
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Proposta de Integração Digital
          </h1>
          <p className="text-xl text-slate-500 mb-12">
            A2 Data <span className="text-slate-300 mx-2">+</span> <span className="text-client-600 font-semibold">[Nome da Cliente]</span>
          </p>

          {/* Logo Section with Connector */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 min-h-[120px]">
            <LogoConnector />
            
            {/* Logo A2 Data Placeholder */}
            <div className="flex flex-col items-center z-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-48 transition-transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-a2-100 rounded-xl flex items-center justify-center text-a2-600 mb-2">
                <Rocket size={32} />
              </div>
              <span className="font-bold text-slate-800">A2 Data</span>
              <span className="text-xs text-slate-400">Consultoria & Integração</span>
            </div>

            {/* Connection Icon for Mobile */}
            <div className="md:hidden text-slate-300">
              <RefreshCw size={24} className="animate-spin-slow" />
            </div>

            {/* Logo Client Placeholder */}
            <div className="flex flex-col items-center z-10 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-48 transition-transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-client-100 rounded-xl flex items-center justify-center text-client-600 mb-2">
                <TrendingUp size={32} />
              </div>
              <span className="font-bold text-slate-800">[Logo Cliente]</span>
              <span className="text-xs text-slate-400">E-commerce</span>
            </div>
          </div>
        </div>
      </header>

      {/* 
        ==============================
        2) RESUMO DO PROJETO
        ==============================
      */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:p-10 md:w-2/3">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="text-a2-600" />
                O que vamos fazer
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Configurar e integrar o sistema <strong className="text-slate-800">Bling</strong> com a <strong className="text-slate-800">Nuvemshop</strong> e a <strong className="text-slate-800">Shopee</strong> da cliente, centralizando estoque, pedidos e catálogo em um fluxo único. A ideia é reduzir retrabalho, evitar furos de estoque e preparar a operação para crescer com segurança.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Integração Bling ↔ Nuvemshop",
                  "Integração Bling ↔ Shopee",
                  "Estoque centralizado e automático",
                  "Treinamento prático"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-a2-50 flex items-center justify-center text-a2-600">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:w-1/3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-100">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Resultado Esperado</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-slate-600">Segurança de dados e estoque</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-sm text-slate-600">Agilidade no processamento de pedidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ==============================
        3) PLANOS / VALORES
        ==============================
      */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Investimento</h2>
            <p className="text-slate-500 mt-2">Escolha o formato que melhor se adapta ao fluxo financeiro.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* CARD 1 */}
            <PricingCard 
              title="Plano Essencial – Projeto Parcelado"
              priceHighlight="Valor bruto do projeto: R$ 1.349,07"
              installmentHighlight="10x de R$ 131,91 no cartão"
              note="Taxas do cartão ficam por nossa conta. Nós recebemos R$ 1.200,00 líquidos."
              buttonText="Ver detalhes do plano essencial"
              detailsContent={
                <>
                  <p className="font-semibold text-slate-800 mb-2">O Plano Essencial inclui:</p>
                  <ul className="space-y-2 list-disc pl-5 marker:text-slate-400">
                    <li>Estudo da operação e definição do fluxo entre Bling, Nuvemshop e Shopee.</li>
                    <li>Configuração inicial do Bling com foco em gestão de estoque e pedidos.</li>
                    <li>Integração Bling ↔ Nuvemshop.</li>
                    <li>Integração Bling ↔ Shopee.</li>
                    <li>Testes com produtos piloto e ajustes iniciais.</li>
                    <li>Treinamento prático para uso do sistema no dia a dia.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p>O valor bruto do projeto é de <strong>R$ 1.349,07</strong>, parcelado em <strong>10x de R$ 131,91</strong>.</p>
                    <p className="mt-2 text-xs text-slate-500">As taxas de cartão são assumidas por nós, de forma que o valor líquido que recebemos é de aproximadamente R$ 1.200,00.</p>
                  </div>
                </>
              }
            />

            {/* CARD 2 */}
            <PricingCard 
              title="Plano Completo – Projeto + Integração"
              priceHighlight="Valor base: R$ 1.349,07 + Taxa: R$ 472,17"
              installmentHighlight="10x de R$ 204,41 c/ tudo incluso"
              note="Valor já contempla projeto, taxa de integração e custos de parcelamento."
              buttonText="Ver detalhes do plano completo"
              isRecommended={true}
              detailsContent={
                <>
                  <p className="font-semibold text-slate-800 mb-2">O Plano Completo inclui tudo o que está no plano essencial, com a taxa de integração já embutida nas parcelas:</p>
                  <ul className="space-y-2 mb-4 bg-purple-50 p-3 rounded-md border border-purple-100">
                    <li className="flex justify-between text-xs sm:text-sm">
                      <span>Valor base do projeto:</span>
                      <span className="font-mono font-bold">R$ 1.349,07</span>
                    </li>
                    <li className="flex justify-between text-xs sm:text-sm">
                      <span>Taxa de integração (35%):</span>
                      <span className="font-mono font-bold">R$ 472,17</span>
                    </li>
                    <li className="flex justify-between text-xs sm:text-sm pt-2 border-t border-purple-200 text-purple-700 font-bold">
                      <span>Total parcelado (10x):</span>
                      <span className="font-mono">R$ 204,41 / mês</span>
                    </li>
                  </ul>
                  
                  <p className="font-semibold text-slate-800 mb-1">A taxa de integração cobre:</p>
                  <ul className="space-y-1 list-disc pl-5 marker:text-client-500">
                    <li>Trabalho de estudo técnico aprofundado do negócio.</li>
                    <li>Desenho de fluxo e arquitetura da integração.</li>
                    <li>Acompanhamento de testes e ajustes até a estabilização da operação.</li>
                  </ul>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* 
        ==============================
        4) MANUTENÇÃO E MELHORIAS
        ==============================
      */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="inline-block p-3 rounded-full bg-slate-100 text-slate-400 mb-4">
          <RefreshCw size={20} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Manutenção e melhorias</h3>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A manutenção é cobrada à parte. Novas melhorias, automações ou integrações extras são discutidas conforme a necessidade e o nível de complexidade. Podemos estruturar <span className="font-medium text-slate-800">valores pontuais por demanda específica</span>, ou <span className="font-medium text-slate-800">um plano mensal de suporte</span>, se fizer sentido para a rotina da cliente.
        </p>
      </section>

      {/* 
        ==============================
        5) CHAMADA FINAL / CTA
        ==============================
      */}
      <footer className="mt-auto bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
         {/* Footer ambient light */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-a2-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            "Nosso objetivo é deixar a operação digital da cliente mais organizada, leve e pronta para crescer."
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-a2-600 to-a2-500 hover:from-a2-500 hover:to-a2-400 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-a2-500/30 transform transition hover:-translate-y-1 text-lg">
              Aprovar Proposta <CheckCircle2 size={20} />
            </button>
            
            <button className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-4 px-8 rounded-xl transition-colors border border-slate-700">
              Tirar Dúvidas <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="mt-10 text-slate-500 text-sm">
            © {new Date().getFullYear()} A2 Data. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;