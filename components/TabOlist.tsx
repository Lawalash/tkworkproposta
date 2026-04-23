import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Download, MessageCircle, Check, XCircle, ShieldCheck } from 'lucide-react';

const PRIMARY_WA = '5583993725984';

const OLIST_CONTRACT = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS – MIGRAÇÃO PARA OLIST
DATA: 23/04/2026

1. DAS PARTES
CONTRATANTE: Kethelen Kaylanne Galdino Ferreira do Nascimento – CPF 714.297.854-62
CONTRATADO: Ricardo Alexandre Brasil Júnior – CPF 704.908.144-25 (Autônomo, Pessoa Física)

2. DO OBJETO
Prestação de serviços de integração Olist + Nuvemshop + Shopee, incluindo configuração,
migração de catálogo, testes e treinamento completo e documentado.

3. DO ESCOPO DOS SERVIÇOS
a) Mapeamento da nova operação e estudo da plataforma Olist;
b) Configuração inicial da conta Olist (após criação do CNPJ pela CONTRATANTE);
c) Integração Olist ↔ Nuvemshop com sincronização de produtos e estoque;
d) Integração Olist ↔ Shopee com sincronização de produtos e estoque;
e) Exportação e tratamento completo do catálogo de produtos;
f) Testes práticos com produtos piloto e validação do fluxo;
g) Ajustes pontuais decorrentes dos testes;
h) Treinamento COMPLETO e DETALHADO, com documentação passo a passo.

4. PRÉ-REQUISITO OBRIGATÓRIO
O início dos trabalhos está condicionado à criação do CNPJ pela CONTRATANTE,
obrigatório para cadastro na plataforma Olist.

5. DO VALOR E FORMA DE PAGAMENTO
Valor total: R$ 800,00
– Parcelas 1ª a 5ª: R$ 125,00/mês
– 6ª parcela (saldo final): R$ 175,00

A primeira parcela (R$ 125,00) será paga no dia 18/05, e o projeto terá sua execução iniciada após o pagamento e a criação da conta Olist com o novo CNPJ.

Formas de pagamento aceitas no 6º mês:
a) PIX/transferência: R$ 175,00 à vista (sem acréscimo)
b) Dinheiro: R$ 175,00 à vista (sem acréscimo)
c) Cartão à vista: R$ 175,00 (sem acréscimo)
d) Cartão parcelado: sujeito a juros da operadora

6. DO TREINAMENTO (DIFERENCIAL DESTE CONTRATO)
O treinamento inclui:
– Sessão(ões) ao vivo gravadas e documentadas;
– Manual passo a passo escrito do uso diário da plataforma;
– Orientações sobre tráfego orgânico: como funciona, ferramentas, boas práticas;
– Orientações sobre tráfego pago: como usar as plataformas (Meta Ads, Google Ads),
  como configurar campanhas básicas, lógica de funcionamento.
  IMPORTANTE: O CONTRATADO ensinará o processo — a execução é de responsabilidade
  da CONTRATANTE. Não está inclusa a gestão ou operação das campanhas pelo CONTRATADO.
– Suporte durante o período de adaptação.

7. DO MARKETING
Este contrato NÃO inclui execução de marketing, gestão de tráfego pago, produção de
vídeos, banners ou qualquer conteúdo digital. O CONTRATADO apenas orientará e ensinará
durante o treinamento como utilizar as ferramentas disponíveis.

8. DAS RESTRIÇÕES DURANTE EXECUÇÃO
Durante a execução, a CONTRATANTE NÃO deve (sem autorização):
a) Cadastrar produtos novos manualmente na Nuvemshop;
b) Remover produtos existentes das plataformas;
c) Alterar estoque no Olist ou Shopee sem alinhamento;
d) Realizar importações em massa durante o processo.

9. DA RESCISÃO
9.1. Rescisão com menos de 30% executado: devolução de 70% do valor pago.
9.2. Entre 30% e 70% executado: sem devolução, sem cobrança adicional.
9.3. Mais de 70% executado: pagamento integral do proporcional entregue.
9.4. Dificuldade com a plataforma Olist, preferência por outra ferramenta ou mudança
de opinião NÃO constitui vício de serviço e não gera direito à devolução.
9.5. Expectativas verbais não documentadas neste contrato não geram obrigações.

10. DA ASSINATURA DIGITAL
As partes concordam em assinar este Contrato digitalmente pela plataforma Gov.br,
conferindo validade jurídica conforme a Lei nº 14.063/2020.

11. DA CONFIDENCIALIDADE
Ambas as partes mantêm sigilo sobre dados e estratégias de negócio.

12. DA VIGÊNCIA
Este contrato entra em vigor após o aceite digital e a criação do CNPJ pela CONTRATANTE.

Ricardo Alexandre Brasil Júnior – CONTRATADO
Kethelen Kaylanne Galdino Ferreira do Nascimento – CONTRATANTE`;

function downloadPDF() {
  const win = window.open('', '_blank');
  if (!win) { alert('Permita pop-ups para baixar o PDF'); return false; }
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Contrato Olist</title>
  <style>body{font-family:Arial,sans-serif;line-height:1.7;color:#333;max-width:800px;margin:0 auto;padding:40px 20px}
  h1{text-align:center;color:#1e293b;font-size:20px;border-bottom:3px solid #AD8DF2;padding-bottom:15px;margin-bottom:30px}
  pre{white-space:pre-wrap;font-family:Arial,sans-serif;font-size:13px}
  .gov{background:#EFF6FF;border:2px solid #3B82F6;border-radius:8px;padding:16px;margin:24px 0}
  .gov h3{color:#1D4ED8;margin-top:0;font-size:14px}
  .footer{margin-top:40px;padding-top:16px;border-top:2px solid #e2e8f0;text-align:center;font-size:11px;color:#64748b}
  @media print{body{padding:20px}}</style></head>
  <body><h1>CONTRATO DE PRESTAÇÃO DE SERVIÇOS – MIGRAÇÃO OLIST</h1><pre>${OLIST_CONTRACT}</pre>
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

export default function TabOlist() {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAccept = () => {
    if (!accepted) { setError(true); setTimeout(() => setError(false), 4000); return; }
    downloadPDF();
    setTimeout(() => {
      const msg = encodeURIComponent(
        'Olá, Ricardo! 🚀 Confirmo que li e aceito o Contrato de Migração para Olist.\n\n' +
        '📋 *Resumo do meu aceite:*\n' +
        '• Valor total: R$ 800,00\n' +
        '• 5x de R$ 125,00 + R$ 175,00 no 6º mês (1º pagamento em 18/05)\n' +
        '• Sei que o projeto só inicia após a criação do CNPJ e pagamento da 1ª parcela\n' +
        '• Sei que execução de marketing NÃO está inclusa (apenas orientação no treinamento)\n' +
        '• Estou ciente das restrições durante a execução\n\n' +
        '📝 *Assinatura digital:* Concordo que irei assinar digitalmente o meu Contrato Olist pela plataforma Gov.br e enviarei o documento assinado a você pelo WhatsApp.'
      );
      window.open(`https://wa.me/${PRIMARY_WA}?text=${msg}`, '_blank');
    }, 600);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] mb-6 animate-bounce shadow-xl">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Contrato aceito! 🚀</h2>
        <p className="text-slate-600 mb-3">O PDF foi gerado automaticamente. Assine pelo Gov.br e envie de volta!</p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-left">
          <p className="text-sm font-bold text-blue-900 mb-2">📱 Próximos passos:</p>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Salve o PDF gerado</li>
            <li>2. Acesse <strong>assinador.iti.br</strong></li>
            <li>3. Assine digitalmente pelo Gov.br</li>
            <li>4. Envie o contrato assinado pelo WhatsApp</li>
            <li>5. Aguarde a criação do CNPJ e o pagamento da 1ª parcela (18/05) para o início dos trabalhos</li>
          </ol>
        </div>
        <button onClick={() => setSuccess(false)} className="px-8 py-3 bg-gradient-to-r from-[#AD8DF2] to-[#466FA6] text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">Voltar</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-[#AD8DF2] to-[#466FA6] rounded-2xl p-6 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-1">Novo Projeto · Migração de Plataforma</p>
            <h2 className="text-2xl font-black">Integração Olist + Nuvemshop + Shopee</h2>
            <p className="text-sm opacity-90 mt-1">Mesma operação, plataforma mais intuitiva · Treinamento robusto incluído</p>
          </div>
          <div className="text-right bg-white/20 rounded-xl px-6 py-4 backdrop-blur-sm">
            <p className="text-xs opacity-80 uppercase tracking-wider">Valor Total</p>
            <p className="text-3xl font-black">R$ 800,00</p>
            <p className="text-xs opacity-90 mt-1">5x R$ 125 + R$ 175 (6º mês)</p>
          </div>
        </div>
      </div>

      {/* Marketing NOT included */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={28} />
          <div>
            <h3 className="font-black text-red-900 text-lg mb-2">🚫 EXECUÇÃO DE MARKETING NÃO INCLUÍDA</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              Este contrato <strong>não inclui</strong> gestão de tráfego pago, produção de vídeos, banners ou qualquer execução de marketing digital. O CONTRATADO irá <strong>ensinar e orientar</strong> durante o treinamento como usar as ferramentas — a execução e operação são de responsabilidade da CONTRATANTE.
            </p>
          </div>
        </div>
      </div>

      {/* Scope */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] text-white text-xs font-black flex items-center justify-center">1</span>
          Escopo do Novo Projeto
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            'Mapeamento da nova operação + estudo do Olist',
            'Configuração inicial da conta Olist',
            'Integração Olist ↔ Nuvemshop',
            'Integração Olist ↔ Shopee',
            'Exportação e tratamento do catálogo completo',
            'Testes práticos com produtos piloto',
            'Ajustes pós-teste',
            'Treinamento COMPLETO + documentação passo a passo',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200">
              <Check className="text-purple-600 flex-shrink-0 mt-0.5" size={16} strokeWidth={3} />
              <span className="text-sm font-semibold text-purple-900">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-sm text-amber-800"><strong>⚠️ Pré-requisito:</strong> A execução só inicia após a criação do CNPJ (conta Olist) e o pagamento da 1ª parcela em 18/05.</p>
        </div>
      </div>

      {/* Training */}
      <div className="bg-gradient-to-br from-[#AD8DF2]/10 to-[#466FA6]/10 rounded-2xl border-2 border-[#AD8DF2]/40 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] text-white text-xs font-black flex items-center justify-center">2</span>
          ✨ Diferencial: Treinamento Robusto
        </h3>
        <p className="text-slate-500 text-sm mb-4">Pensado para operação solo — foco em simplicidade e autonomia.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { t: 'Sessão(ões) ao vivo gravadas', d: 'Você pode rever quando quiser' },
            { t: 'Manual passo a passo escrito', d: 'Guia do uso diário da plataforma' },
            { t: 'Tráfego orgânico — como funciona', d: 'Ferramentas, boas práticas e estratégias' },
            { t: 'Tráfego pago — como usar', d: 'Meta Ads, Google Ads: ensino a configurar (você executa)' },
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#AD8DF2]/30 shadow-sm">
              <ShieldCheck className="text-[#AD8DF2] flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-bold text-slate-900 text-sm">{r.t}</p>
                <p className="text-slate-500 text-xs mt-0.5">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-white/80 border border-[#AD8DF2]/30 rounded-xl">
          <p className="text-xs text-slate-600 leading-relaxed">
            💡 <strong>Sobre tráfego pago:</strong> O CONTRATADO ensinará como as plataformas funcionam, como configurar campanhas e a lógica por trás dos anúncios. A execução, gestão e custos dos anúncios são de inteira responsabilidade da CONTRATANTE.
          </p>
        </div>
      </div>

      {/* Payment */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] text-white text-xs font-black flex items-center justify-center">3</span>
          Investimento e Pagamento
        </h3>
        <div className="space-y-2 mb-4">
          {[
            { mes: '1ª parcela', val: 'R$ 125,00', obs: '18/05' },
            { mes: '2ª parcela', val: 'R$ 125,00', obs: 'Mês 2' },
            { mes: '3ª parcela', val: 'R$ 125,00', obs: 'Mês 3' },
            { mes: '4ª parcela', val: 'R$ 125,00', obs: 'Mês 4' },
            { mes: '5ª parcela', val: 'R$ 125,00', obs: 'Mês 5' },
            { mes: '6ª parcela — saldo final', val: 'R$ 175,00', obs: 'PIX, dinheiro ou cartão (à vista ou parcelado c/ juros)' },
          ].map((r, i) => (
            <div key={i} className={`flex justify-between items-center px-4 py-3 rounded-xl ${i === 5 ? 'bg-gradient-to-r from-[#AD8DF2] to-[#466FA6] text-white' : 'bg-slate-50 border border-slate-200'}`}>
              <div>
                <p className={`font-bold text-sm ${i === 5 ? 'text-white' : 'text-slate-800'}`}>{r.mes}</p>
                <p className={`text-xs ${i === 5 ? 'text-white/80' : 'text-slate-400'}`}>{r.obs}</p>
              </div>
              <span className={`font-black font-mono text-base ${i === 5 ? 'text-white' : 'text-slate-900'}`}>{r.val}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center bg-slate-900 text-white rounded-xl px-5 py-4">
          <span className="font-black text-base">TOTAL</span>
          <span className="font-black font-mono text-2xl">R$ 800,00</span>
        </div>
      </div>

      {/* Rescission */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-orange-200 p-6">
        <h3 className="font-black text-orange-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center">4</span>
          Cláusula de Rescisão
        </h3>
        <div className="space-y-3 mb-4">
          {[
            { pct: 'Menos de 30% executado', result: 'Devolução de 70% do valor pago', color: 'green' },
            { pct: 'Entre 30% e 70% executado', result: 'Sem devolução · Sem cobrança adicional', color: 'yellow' },
            { pct: 'Mais de 70% executado', result: 'Pagamento integral do proporcional entregue', color: 'red' },
          ].map((r, i) => (
            <div key={i} className={`flex justify-between items-center p-4 rounded-xl ${r.color === 'green' ? 'bg-green-50 border border-green-200' : r.color === 'yellow' ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
              <span className="text-sm font-bold text-slate-800">{r.pct}</span>
              <span className={`text-xs font-black px-3 py-1 rounded-full ${r.color === 'green' ? 'bg-green-200 text-green-900' : r.color === 'yellow' ? 'bg-amber-200 text-amber-900' : 'bg-red-200 text-red-900'}`}>{r.result}</span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
          <p className="text-sm text-orange-800 font-semibold">⚠️ Dificuldade com o Olist ou preferência por outra plataforma <strong>NÃO é vício de serviço</strong> e não gera devolução. Expectativas verbais não documentadas não geram obrigações.</p>
        </div>
      </div>

      {/* Restrictions */}
      <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
        <h3 className="font-black text-red-900 text-lg mb-3 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-red-500 text-white text-xs font-black flex items-center justify-center">5</span>
          Restrições durante a execução
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'NÃO cadastrar produtos novos na Nuvemshop',
            'NÃO remover produtos das plataformas',
            'NÃO alterar estoque no Olist ou Shopee sem aviso',
            'NÃO fazer importações em massa durante o processo',
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-red-100 rounded-xl">
              <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={16} />
              <span className="text-sm font-semibold text-red-800">{r}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contract text */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] text-white text-xs font-black flex items-center justify-center">6</span>
          Contrato Completo
        </h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 h-64 overflow-y-auto text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-mono">
          {OLIST_CONTRACT}
        </div>
        <button onClick={() => downloadPDF()} className="mt-3 w-full flex items-center justify-center gap-2 border-2 border-slate-300 bg-white text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 transition-all">
          <Download size={18} /> Baixar / Imprimir PDF
        </button>
      </div>

      {/* Gov.br */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🇧🇷</div>
          <div>
            <h3 className="font-black text-blue-900 text-lg mb-2">Assinatura Digital pelo Gov.br</h3>
            <p className="text-blue-800 text-sm leading-relaxed mb-3">Após aceitar, o PDF é gerado automaticamente. Assine em <strong>assinador.iti.br</strong> com sua conta Gov.br e envie de volta pelo WhatsApp.</p>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Salve o PDF gerado automaticamente</li>
              <li>2. Acesse <strong>assinador.iti.br</strong></li>
              <li>3. Login com conta Gov.br → carregue o PDF → assine</li>
              <li>4. Envie o contrato assinado pelo WhatsApp</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Acceptance */}
      <div className="bg-white rounded-2xl shadow-xl border-2 border-[#AD8DF2]/40 p-6">
        <h3 className="font-black text-slate-900 text-lg mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#AD8DF2] to-[#466FA6] text-white text-xs font-black flex items-center justify-center">7</span>
          Aceite do Contrato Olist
        </h3>
        <label className="flex items-start gap-4 cursor-pointer group mb-4">
          <input type="checkbox" checked={accepted} onChange={e => { setAccepted(e.target.checked); setError(false); }}
            className="mt-1 w-6 h-6 rounded border-2 border-slate-400 cursor-pointer" />
          <span className="text-sm font-bold text-slate-900 group-hover:text-[#AD8DF2] transition-colors leading-relaxed">
            Declaro que li e concordo com o Contrato de Migração para Olist (R$ 800,00). Estou ciente que: a execução só inicia após a criação da conta Olist com meu CNPJ e o pagamento da 1ª parcela (18/05); execução de marketing <strong>NÃO está inclusa</strong> (apenas orientação no treinamento); dificuldade com a plataforma não é vício de serviço; devo respeitar as restrições durante a execução. <strong>Concordo que irei assinar digitalmente o Contrato Olist e o Termo de Encerramento pelo Gov.br</strong> e enviarei os documentos assinados pelo WhatsApp.
          </span>
        </label>
        {error && (
          <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-300 rounded-xl px-4 py-3 mb-4">
            <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
            <span className="font-semibold">Marque o aceite antes de continuar.</span>
          </div>
        )}
        <button onClick={handleAccept} className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#AD8DF2] to-[#466FA6] text-white font-black text-base py-4 px-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300">
          <MessageCircle size={20} /> Aceitar, Baixar PDF e Confirmar via WhatsApp
        </button>
        <p className="text-xs text-slate-400 text-center mt-3">O PDF será gerado automaticamente. Em seguida, a confirmação será enviada via WhatsApp.</p>
      </div>
    </div>
  );
}
