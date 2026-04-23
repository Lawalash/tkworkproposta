import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Download, MessageCircle, Check, XCircle } from 'lucide-react';

const PRIMARY_WA = '5583993725984';

const CANCEL_CONTRACT = `TERMO DE ENCERRAMENTO E ACORDO FINANCEIRO
Contrato de Integração Digital – Bling + Nuvemshop + Shopee

DATA DO ACORDO: 22/04/2026

1. DAS PARTES
CONTRATANTE: Kethelen Kaylanne Galdino Ferreira do Nascimento – CPF 714.297.854-62
CONTRATADO: Ricardo Alexandre Brasil Júnior – CPF 704.908.144-25

2. DO CONTRATO ORIGINAL
Contrato assinado em 09/04/2026. Valor total original: R$ 2.044,10 (10x de R$ 204,41).
Objeto: Integração Bling ↔ Nuvemshop ↔ Shopee.

3. DO TRABALHO EXECUTADO
O CONTRATADO executou as seguintes entregas:
a) Mapeamento da operação atual ✅ CONCLUÍDO
b) Configuração inicial do Bling ✅ CONCLUÍDO
c) Integração Bling ↔ Nuvemshop ✅ CONCLUÍDO (1.496 produtos importados)
d) Integração Bling ↔ Shopee ✅ CONCLUÍDO (275 produtos ativos)
e) Testes práticos com produtos piloto ✅ CONCLUÍDO
f) Ajustes pós-teste ✅ CONCLUÍDO
g) Treinamento inicial ⚠️ PARCIALMENTE CONCLUÍDO (~50%)
   → Sessão de 1h21m gravada. Treinamento interrompido pela própria CONTRATANTE.

Resultado técnico: 1.489 produtos ativos no Bling. 275 produtos pais ativos na Shopee.
Percentual entregue: aproximadamente 85-90% do escopo contratual.

4. DO MOTIVO DO ENCERRAMENTO
A CONTRATANTE manifestou dificuldade com a interface do Bling e interesse em migrar para
plataforma alternativa (Olist), decisão de sua exclusividade. O encerramento se dá por acordo
mútuo, sem reconhecimento de vício de serviço por parte do CONTRATADO.

5. DO ACORDO FINANCEIRO
Valor calculado proporcionalmente (6 itens completos + 50% treinamento): R$ 1.898,06
Valor acordado por boa-fé e vínculo: R$ 1.008,82

Já pago pela CONTRATANTE: R$ 408,82 (2 parcelas de R$ 204,41)
SALDO RESTANTE A PAGAR: R$ 600,00

Formas de pagamento do saldo (à escolha da CONTRATANTE):
a) PIX ou transferência bancária: R$ 600,00 à vista (sem acréscimo)
b) Dinheiro: R$ 600,00 à vista (sem acréscimo)
c) Cartão de crédito à vista: R$ 600,00 (sem acréscimo)
d) Cartão de crédito parcelado: sujeito a juros da operadora do cartão

Data prevista de pagamento: 16 ou 17 de maio de 2026

6. DA RENÚNCIA AO MARKETING
O serviço de brinde (1 vídeo + 3 banners de marketing) oferecido verbalmente pelo CONTRATADO
NÃO foi entregue por ausência de colaboração da CONTRATANTE (não forneceu tema, confirmação
de presença ou direcionamentos). Com o encerramento, esse brinde é formalmente cancelado.
A CONTRATANTE declara estar ciente de que NÃO receberá os serviços de marketing.

7. DOS EFEITOS DO ACORDO
Ao assinar este termo, ambas as partes declaram:
- O contrato original está encerrado definitivamente.
- Não há pendências técnicas ou financeiras além do saldo de R$ 600,00.
- A CONTRATANTE não possui mais direito a suporte, ajustes ou treinamento no Bling.
- Nenhuma das partes poderá reclamar valores adicionais referentes ao contrato original.

8. DA ASSINATURA DIGITAL
As partes concordam em assinar este Termo digitalmente pela plataforma Gov.br,
conferindo ao documento validade jurídica conforme a Lei nº 14.063/2020.

9. DA QUITAÇÃO
Após o pagamento do saldo de R$ 600,00, o contrato estará 100% quitado e encerrado.
Total final pago: R$ 1.008,82 (de R$ 2.044,10 originais).

Ricardo Alexandre Brasil Júnior – CONTRATADO
Kethelen Kaylanne Galdino Ferreira do Nascimento – CONTRATANTE`;

function downloadPDF() {
  const win = window.open('', '_blank');
  if (!win) { alert('Permita pop-ups para baixar o PDF'); return false; }
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Termo de Encerramento – Bling</title>
  <style>body{font-family:Arial,sans-serif;line-height:1.7;color:#333;max-width:800px;margin:0 auto;padding:40px 20px}
  h1{text-align:center;color:#1e293b;font-size:20px;border-bottom:3px solid #466FA6;padding-bottom:15px;margin-bottom:30px}
  pre{white-space:pre-wrap;font-family:Arial,sans-serif;font-size:13px}
  .gov{background:#EFF6FF;border:2px solid #3B82F6;border-radius:8px;padding:16px;margin:24px 0}
  .gov h3{color:#1D4ED8;margin-top:0;font-size:14px}
  .footer{margin-top:40px;padding-top:16px;border-top:2px solid #e2e8f0;text-align:center;font-size:11px;color:#64748b}
  @media print{body{padding:20px}}</style></head>
  <body><h1>TERMO DE ENCERRAMENTO – INTEGRAÇÃO BLING</h1><pre>${CANCEL_CONTRACT}</pre>
  <div class="gov"><h3>📱 ASSINATURA DIGITAL – GOV.BR</h3>
  <p>Este documento deve ser assinado digitalmente pela plataforma <strong>Gov.br</strong>:<br>
  1. Acesse <strong>assinador.iti.br</strong> no celular ou computador<br>
  2. Faça login com sua conta Gov.br<br>
  3. Envie este PDF e assine digitalmente<br>
  4. Encaminhe o documento assinado ao CONTRATADO pelo WhatsApp</p></div>
  <div class="footer">Gerado em ${new Date().toLocaleDateString('pt-BR')} · A2 Data – Ricardo Alexandre Brasil Júnior</div>
  </body></html>`);
  win.document.close();
  setTimeout(() => { win.focus(); win.print(); }, 250);
  return true;
}

export default function TabBling() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAccept = () => {
    if (!accepted) { setError(true); setTimeout(() => setError(false), 4000); return; }
    // Auto-download PDF
    downloadPDF();
    // Send WhatsApp after short delay
    setTimeout(() => {
      const msg = encodeURIComponent(
        'Olá, Ricardo! ✅ Confirmo que li e aceito o Termo de Encerramento do contrato Bling.\n\n' +
        '📋 *Resumo do meu aceite:*\n' +
        '• Valor acordado: R$ 1.008,82\n' +
        '• Já paguei: R$ 408,82\n' +
        '• Saldo restante: R$ 600,00 (a pagar em 16-17/05/2026 na forma de minha escolha)\n' +
        '• Estou ciente que o brinde de marketing NÃO será entregue\n\n' +
        '📝 *Assinatura digital:* Concordo que irei assinar digitalmente o meu Termo de Encerramento pela plataforma Gov.br e enviarei o documento assinado a você pelo WhatsApp.'
      );
      window.open(`https://wa.me/${PRIMARY_WA}?text=${msg}`, '_blank');
    }, 600);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-6 animate-bounce shadow-xl">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Termo aceito! 🎉</h2>
        <p className="text-slate-600 mb-3">O PDF foi gerado automaticamente para você baixar e assinar pelo Gov.br.</p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-left">
          <p className="text-sm font-bold text-blue-900 mb-2">📱 Próximos passos:</p>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Salve o PDF que foi gerado</li>
            <li>2. Acesse <strong>assinador.iti.br</strong></li>
            <li>3. Assine digitalmente pelo Gov.br</li>
            <li>4. Envie o documento assinado pelo WhatsApp</li>
          </ol>
        </div>
        <button onClick={() => setSuccess(false)} className="px-8 py-3 bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">Voltar</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

      {/* Status banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Contrato Bling – Encerrado por Acordo</p>
            <h2 className="text-2xl font-black">Encerramento do Projeto Bling</h2>
            <p className="text-sm opacity-90 mt-1">Integração Bling ↔ Nuvemshop ↔ Shopee · Assinado em 09/04/2026</p>
          </div>
          <div className="text-right bg-white/20 rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-xs opacity-80 uppercase tracking-wider">Valor Original</p>
            <p className="text-2xl font-black line-through opacity-60">R$ 2.044,10</p>
            <p className="text-xs opacity-80 mt-1 uppercase tracking-wider">Valor Acordado</p>
            <p className="text-3xl font-black">R$ 1.008,82</p>
          </div>
        </div>
      </div>

      {/* Delivery status */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] text-white text-xs font-black flex items-center justify-center">1</span>
          O que foi entregue
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { item: 'Mapeamento da operação atual', done: true },
            { item: 'Configuração inicial do Bling', done: true },
            { item: 'Integração Bling ↔ Nuvemshop (1.496 produtos)', done: true },
            { item: 'Integração Bling ↔ Shopee (275 ativos)', done: true },
            { item: 'Testes práticos com produtos piloto', done: true },
            { item: 'Ajustes pós-teste', done: true },
            { item: 'Treinamento inicial (~50% – interrompido pela cliente)', done: false },
          ].map((r, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${r.done ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
              {r.done
                ? <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                : <AlertCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={18} />}
              <span className={`text-sm font-semibold ${r.done ? 'text-green-900' : 'text-amber-900'}`}>{r.item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <p className="text-sm text-blue-800"><strong>Resultado técnico:</strong> 1.489 produtos ativos no Bling · 275 produtos pais ativos na Shopee · ~85–90% do escopo entregue</p>
        </div>
      </div>

      {/* Financial breakdown */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] text-white text-xs font-black flex items-center justify-center">2</span>
          Financeiro do Acordo
        </h3>
        <div className="space-y-3 mb-6">
          {[
            { label: 'Valor original do contrato', val: 'R$ 2.044,10', sub: '10x de R$ 204,41', highlight: false },
            { label: 'Valor proporcional calculado (85–90% entregue)', val: 'R$ 1.898,06', sub: 'Base de cálculo justa', highlight: false },
            { label: 'Valor acordado (boa-fé + vínculo)', val: 'R$ 1.008,82', sub: 'Desconto adicional concedido', highlight: true },
          ].map((r, i) => (
            <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${r.highlight ? 'bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] text-white' : 'bg-slate-50 border border-slate-200'}`}>
              <div>
                <p className={`font-bold text-sm ${r.highlight ? 'text-white' : 'text-slate-800'}`}>{r.label}</p>
                <p className={`text-xs ${r.highlight ? 'text-white/80' : 'text-slate-500'}`}>{r.sub}</p>
              </div>
              <span className={`font-black font-mono text-lg ${r.highlight ? 'text-white' : 'text-slate-900'}`}>{r.val}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
            <p className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1">Já pago</p>
            <p className="text-xl font-black text-green-800">R$ 408,82</p>
            <p className="text-xs text-green-600">2 parcelas de R$ 204,41</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">Saldo restante</p>
            <p className="text-xl font-black text-orange-800">R$ 600,00</p>
            <p className="text-xs text-orange-600">À escolha da cliente</p>
          </div>
          <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 text-center">
            <p className="text-xs text-slate-600 font-bold uppercase tracking-wider mb-1">Previsão</p>
            <p className="text-xl font-black text-slate-800">16–17/05</p>
            <p className="text-xs text-slate-500">Maio/2026</p>
          </div>
        </div>

        {/* Payment options */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-5">
          <p className="text-xs font-black uppercase tracking-wider text-blue-800 mb-3">💳 Formas de pagamento do saldo (R$ 600,00) — à sua escolha</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: 'PIX ou Transferência', detail: 'R$ 600,00 à vista · Sem acréscimo', icon: '⚡' },
              { label: 'Dinheiro', detail: 'R$ 600,00 à vista · Sem acréscimo', icon: '💵' },
              { label: 'Cartão à vista', detail: 'R$ 600,00 · Sem acréscimo', icon: '💳' },
              { label: 'Cartão parcelado', detail: 'Sujeito a juros da operadora', icon: '🔄' },
            ].map((opt, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-blue-200">
                <span className="text-lg">{opt.icon}</span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{opt.label}</p>
                  <p className="text-xs text-slate-500">{opt.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marketing not included */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={28} />
          <div>
            <h3 className="font-black text-red-900 text-lg mb-2">⚠️ MARKETING NÃO INCLUÍDO NESTE ENCERRAMENTO</h3>
            <p className="text-red-800 text-sm leading-relaxed mb-3">
              O brinde de <strong>1 vídeo + 3 banners</strong> de marketing (serviço contratado pelo CONTRATADO junto à IL Vision Mídias) <strong>NÃO será entregue</strong> com o encerramento deste contrato.
            </p>
            <p className="text-red-700 text-sm leading-relaxed">
              Motivo: A produtora remarcou 2x por falta de colaboração da cliente (sem fornecimento de tema, confirmação de presença ou direcionamentos). O serviço foi cancelado por inviabilidade operacional.
            </p>
            <div className="mt-3 p-3 bg-red-100 rounded-xl">
              <p className="text-xs text-red-800 font-bold">Ao aceitar este termo, a cliente confirma que está CIENTE e de ACORDO que não receberá os serviços de marketing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contract text */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] text-white text-xs font-black flex items-center justify-center">3</span>
          Termo de Encerramento Completo
        </h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 h-64 overflow-y-auto text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-mono">
          {CANCEL_CONTRACT}
        </div>
        <button onClick={() => downloadPDF()} className="mt-3 w-full flex items-center justify-center gap-2 border-2 border-slate-300 bg-white text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 transition-all">
          <Download size={18} /> Baixar / Imprimir PDF
        </button>
      </div>

      {/* Gov.br info */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🇧🇷</div>
          <div>
            <h3 className="font-black text-blue-900 text-lg mb-2">Assinatura Digital pelo Gov.br</h3>
            <p className="text-blue-800 text-sm leading-relaxed mb-3">
              Após aceitar, o PDF será gerado automaticamente. Você deverá assinar digitalmente pelo <strong>assinador.iti.br</strong> usando sua conta Gov.br, conferindo validade jurídica ao documento.
            </p>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Salve o PDF que será gerado automaticamente</li>
              <li>2. Acesse <strong>assinador.iti.br</strong> no celular ou computador</li>
              <li>3. Faça login com sua conta Gov.br</li>
              <li>4. Carregue o PDF e assine digitalmente</li>
              <li>5. Envie o documento assinado ao CONTRATADO via WhatsApp</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Acceptance */}
      <div className="bg-white rounded-2xl shadow-xl border-2 border-[#466FA6]/30 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#466FA6] to-[#AD8DF2] text-white text-xs font-black flex items-center justify-center">4</span>
          Aceite do Termo de Encerramento
        </h3>
        <label className="flex items-start gap-4 cursor-pointer group mb-4">
          <input type="checkbox" checked={accepted} onChange={e => { setAccepted(e.target.checked); setError(false); }}
            className="mt-1 w-6 h-6 rounded border-2 border-slate-400 text-[#466FA6] cursor-pointer" />
          <span className="text-sm font-bold text-slate-900 group-hover:text-[#466FA6] transition-colors leading-relaxed">
            Declaro que li e concordo com o Termo de Encerramento do contrato Bling. Estou ciente que o saldo de <strong>R$ 600,00</strong> será pago até 16–17/05/2026 na forma de pagamento de minha escolha (PIX, dinheiro, cartão à vista ou parcelado). Confirmo que o brinde de marketing <strong>NÃO será entregue</strong>. Concordo que irei <strong>assinar digitalmente o Termo pelo Gov.br</strong> e enviarei o documento assinado pelo WhatsApp.
          </span>
        </label>
        {error && (
          <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-300 rounded-xl px-4 py-3 mb-4">
            <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
            <span className="font-semibold">Marque o aceite antes de continuar.</span>
          </div>
        )}
        <button onClick={handleAccept} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] text-white font-black text-base py-4 px-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
          <MessageCircle size={20} /> Aceitar, Baixar PDF e Confirmar via WhatsApp
        </button>
        <p className="text-xs text-slate-400 text-center mt-3">O PDF será gerado automaticamente. Em seguida, a confirmação será enviada via WhatsApp.</p>
      </div>
    </div>
  );
}
