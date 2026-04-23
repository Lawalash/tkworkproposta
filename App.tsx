import React, { useState } from 'react';
import { Lock, RefreshCw, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import TabBling from './components/TabBling';
import TabOlist from './components/TabOlist';

type Tab = 'bling' | 'olist';

function LoginScreen({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (password.trim() === 'twok') {
        onAuth();
      } else {
        setError('Senha incorreta. Tente novamente.');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#043959] via-[#466FA6] to-[#8EA3BF] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#AD8DF2] rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -right-20 top-20 w-96 h-96 bg-[#B79BF2] rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute left-20 bottom-20 w-72 h-72 bg-[#F2D98D] rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold tracking-widest uppercase">
            <Lock className="animate-pulse" size={14} /> Área Protegida
          </div>
          <h1 className="text-4xl lg:text-5xl font-black leading-tight">
            Proposta Exclusiva
            <span className="block mt-2 bg-gradient-to-r from-[#F2D98D] via-[#AD8DF2] to-white bg-clip-text text-transparent">Twork</span>
          </h1>
          <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
            Proposta comercial personalizada com encerramento do projeto Bling e novo contrato Olist.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[{ icon: <ShieldCheck size={14} />, text: 'Seguro' }, { icon: <Zap size={14} />, text: 'Responsivo' }, { icon: <Sparkles size={14} />, text: 'Premium' }].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium">{b.icon}{b.text}</div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] text-white text-xs font-bold uppercase tracking-wider mb-4">Acesso Restrito</div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Bem-vindo</h2>
              <p className="text-slate-600">Digite a senha fornecida para acessar a proposta.</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Senha de Acesso</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && submit()}
                    className="w-full rounded-2xl border-2 border-slate-200 px-5 py-4 text-base font-medium text-slate-900 focus:ring-4 focus:ring-[#466FA6]/20 focus:border-[#466FA6] outline-none transition-all bg-white"
                    placeholder="••••••••"
                    disabled={loading}
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
              {error && (
                <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-200 rounded-2xl px-4 py-3">
                  <CheckCircle2 className="text-red-500 flex-shrink-0" size={18} /><span className="font-medium">{error}</span>
                </div>
              )}
              <button onClick={submit} disabled={loading} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] text-white font-bold text-lg py-5 px-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50">
                {loading ? <><RefreshCw className="animate-spin" size={20} />Autenticando...</> : <>Acessar Proposta <ArrowRight size={20} /></>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>('bling');

  if (!authed) return <LoginScreen onAuth={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#043959] via-[#AD8DF2] to-[#F2D98D]" />

      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />Proposta Comercial Confidencial
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-1">A2 Data <span className="text-slate-300">×</span> <span className="text-[#466FA6]">Twok</span></h1>
          <p className="text-slate-500 text-sm">Encerramento Bling + Novo Projeto Olist</p>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 flex gap-1 py-2">
          <button
            onClick={() => setTab('bling')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${tab === 'bling' ? 'bg-gradient-to-r from-[#043959] to-[#466FA6] text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            📦 Encerramento Bling
          </button>
          <button
            onClick={() => setTab('olist')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 ${tab === 'olist' ? 'bg-gradient-to-r from-[#AD8DF2] to-[#466FA6] text-white shadow-lg' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            🚀 Novo Projeto Olist
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1">
        {tab === 'bling' ? <TabBling /> : <TabOlist />}
      </main>

      <footer className="bg-slate-900 text-slate-400 text-center py-6 text-xs">
        © {new Date().getFullYear()} A2 Data · Ricardo Alexandre Brasil Júnior · Proposta Confidencial
      </footer>
    </div>
  );
}