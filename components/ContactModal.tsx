import React, { useState } from 'react';
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';

const PRIMARY_WHATSAPP = '5583993725984';
const PARTNER_WHATSAPP = '5583989060130';

const CONTRACT_TEXT = `CONTRATO DE PRESTAÇÃO DE SERVIÇOS – INTEGRAÇÃO DIGITAL

1. DAS PARTES

CONTRATANTE:
Kethelen Kaylanne Galdino Ferreira do Nascimento, CPF 714.297.854-62, doravante denominada CONTRATANTE.

CONTRATADO:
Ricardo Alexandre Brasil Júnior, brasileiro, maior, autônomo (pessoa física, sem CNPJ), CPF 704.908.144-25, doravante denominado CONTRATADO.

2. DO OBJETO

2.1. O presente instrumento tem por objeto a prestação de serviços de integração digital entre as plataformas Bling, Nuvemshop e Shopee da CONTRATANTE, incluindo configuração, testes e treinamento inicial de uso.

2.2. O objetivo do projeto é centralizar estoque, pedidos e catálogo em um único fluxo, reduzindo retrabalho, evitando furos de estoque e preparando a operação da CONTRATANTE para crescimento estruturado.

3. DO ESCOPO DOS SERVIÇOS

3.1. O CONTRATADO se compromete a executar as seguintes atividades, reestruturando o projeto do zero:
a) Mapeamento da operação atual da CONTRATANTE, com entendimento de processos de cadastro, vendas e controle de estoque;
b) Configuração inicial do Bling para gestão de produtos, estoque e pedidos;
c) Integração Bling ↔ Nuvemshop, com sincronização de produtos e estoque;
d) Integração Bling ↔ Shopee, com sincronização de produtos e estoque;
e) Realização de testes práticos com produtos piloto e simulação de vendas para validação do fluxo;
f) Ajustes pontuais decorrentes dos testes;
g) Treinamento inicial com a CONTRATANTE focado no uso básico do fluxo implementado.

3.2. Qualquer atividade fora desse escopo (como novas integrações ou reestruturações significativas) será considerada serviço adicional.

4. DAS ENTREGAS, PRAZOS E TREINAMENTO

4.1. A data de entrega do projeto (go-live) será ajustada em comum acordo entre as partes.

4.2. Entende-se por entrega do projeto (go-live) o momento em que o fluxo Bling ↔ Nuvemshop ↔ Shopee estiver configurado e funcional.

5. DO VALOR E FORMA DE PAGAMENTO

5.1. O valor de referência do projeto é composto por:
– Valor do projeto: R$ 1.349,07;
– Taxa de implementação (35%): R$ 472,17.

5.2. Para efeitos práticos de fluxo de caixa e parcelamento, o valor total a ser pago ao CONTRATADO será de R$ 2.044,10. Este valor já contempla o projeto, a taxa de implementação (que foi totalmente diluída nas parcelas) e os encargos de parcelamento.

5.3. A forma de pagamento acordada é a seguinte:
a) O valor total será dividido em parcelas mensais de R$ 204,41;
b) A PRIMEIRA PARCELA (R$ 204,41) deverá ser paga de forma ANTECIPADA, servindo como sinal para o início imediato dos trabalhos e refação do projeto;
c) O dia de vencimento das demais parcelas será definido com base na data de entrega final (go-live);
d) Até o 4º (quarto) mês, os pagamentos serão feitos diretamente ao CONTRATADO (por PIX ou transferência bancária);
e) No 5º (quinto) mês, será cobrado, via cartão de crédito, o saldo remanescente do valor total do projeto, sendo facultado à CONTRATANTE parcelar esse saldo diretamente com a operadora do cartão.

5.4. O não pagamento de qualquer parcela poderá implicar na suspensão do suporte e atividades.

6. DA MANUTENÇÃO E AJUSTES FUTUROS

6.1. A presente proposta não inclui manutenção contínua após a estabilização inicial (go-live).
6.2. Cadastros de novas coleções e atualizações semanais de atributos exigidos pela Shopee deverão ser feitos pela CONTRATANTE, ou poderão ser negociados como um serviço de manutenção mensal à parte.

7. DAS RESPONSABILIDADES DA CONTRATANTE E PONTO DE ATENÇÃO

7.1. A CONTRATANTE se compromete a:
a) Disponibilizar acessos, logins e senhas necessários;
b) Fornecer informações atualizadas sobre produtos;
c) Cumprir os prazos de pagamento (incluindo o sinal antecipado).

7.2. ⚠️ PONTO DE ATENÇÃO CRÍTICO – RESTRIÇÕES DURANTE O PROJETO:
Durante todo o período de execução (até o go-live oficial), a CONTRATANTE está expressamente orientada a NÃO realizar nenhuma das seguintes ações sem autorização prévia e por escrito do CONTRATADO:

a) NÃO cadastrar produtos novos manualmente na Nuvemshop;
b) NÃO remover ou excluir produtos existentes na Nuvemshop;
c) NÃO adicionar ou retirar produtos diretamente no Bling ou na Shopee sem alinhamento prévio;
d) NÃO realizar importações em massa de catálogo durante o processo de refação.

O descumprimento dessas restrições poderá causar quebra na sincronização, duplicidade de dados e impacto direto no prazo de entrega do projeto. Em caso de necessidade urgente, a CONTRATANTE deverá comunicar o CONTRATADO antes de qualquer ação.

8. DAS RESPONSABILIDADES DO CONTRATADO
8.1. O CONTRATADO se compromete a executar os serviços com zelo, reestruturando a base de dados do zero para garantir o funcionamento da operação.

9. DA CONFIDENCIALIDADE
9.1. Ambas as partes se obrigam a manter sigilo sobre dados e estratégias de negócio.

10. DA VIGÊNCIA E RESCISÃO
10.1. Este contrato entra em vigor na data do pagamento da primeira parcela antecipada (sinal de R$ 204,41), dando início imediato aos trabalhos de integração.`;

const ContactModal = ({ isOpen, type, onClose }) => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);

    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Por favor, permita pop-ups para baixar o PDF');
        setIsGeneratingPDF(false);
        return;
      }

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contrato – Integração Digital</title>
            <style>
              @media print { body { margin: 0; padding: 20px; } }
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 40px 20px;
                background: white;
              }
              h1 {
                text-align: center;
                color: #1e293b;
                font-size: 22px;
                margin-bottom: 30px;
                border-bottom: 3px solid #466FA6;
                padding-bottom: 15px;
              }
              h2 { color: #466FA6; font-size: 15px; margin-top: 22px; margin-bottom: 8px; }
              p { margin-bottom: 10px; text-align: justify; }
              .party {
                background: #f1f5f9;
                padding: 14px;
                border-left: 4px solid #466FA6;
                margin-bottom: 12px;
              }
              .warning {
                background: #FEF2F2;
                border: 2px solid #DC2626;
                border-radius: 8px;
                padding: 16px;
                margin: 16px 0;
              }
              .warning h3 { color: #DC2626; margin-top: 0; font-size: 14px; }
              .warning p, .warning li { color: #7F1D1D; font-size: 13px; }
              .footer {
                margin-top: 40px;
                padding-top: 16px;
                border-top: 2px solid #e2e8f0;
                text-align: center;
                font-size: 11px;
                color: #64748b;
              }
            </style>
          </head>
          <body>
            <h1>CONTRATO DE PRESTAÇÃO DE SERVIÇOS<br>INTEGRAÇÃO DIGITAL</h1>

            <h2>1. DAS PARTES</h2>
            <div class="party">
              <strong>CONTRATANTE:</strong><br>
              Kethelen Kaylanne Galdino Ferreira do Nascimento<br>
              CPF: 714.297.854-62
            </div>
            <div class="party">
              <strong>CONTRATADO:</strong><br>
              Ricardo Alexandre Brasil Júnior<br>
              CPF: 704.908.144-25<br>
              Autônomo (Pessoa Física)
            </div>

            <h2>2. DO OBJETO</h2>
            <p>2.1. Prestação de serviços de integração digital entre Bling, Nuvemshop e Shopee, incluindo configuração, testes e treinamento inicial.</p>
            <p>2.2. Objetivo: centralizar estoque, pedidos e catálogo em um único fluxo operacional.</p>

            <h2>3. DO ESCOPO DOS SERVIÇOS</h2>
            <p>a) Mapeamento da operação atual;</p>
            <p>b) Configuração inicial do Bling;</p>
            <p>c) Integração Bling ↔ Nuvemshop;</p>
            <p>d) Integração Bling ↔ Shopee;</p>
            <p>e) Testes práticos com produtos piloto;</p>
            <p>f) Ajustes pós-teste;</p>
            <p>g) Treinamento inicial de uso do fluxo implementado.</p>
            <p>3.2. Atividades fora desse escopo serão consideradas serviço adicional.</p>

            <h2>4. PRAZO E ENTREGA (GO-LIVE)</h2>
            <p>4.1. A data de entrega (go-live) será ajustada em comum acordo.</p>
            <p>4.2. Go-live = fluxo Bling ↔ Nuvemshop ↔ Shopee configurado e funcional.</p>

            <h2>5. DO VALOR E FORMA DE PAGAMENTO</h2>
            <p>Valor do projeto: R$ 1.349,07 | Taxa de implementação (35%): R$ 472,17</p>
            <p><strong>Valor total: R$ 2.044,10 | Parcelas: 10x de R$ 204,41</strong></p>
            <p>a) 1ª parcela (R$ 204,41) antecipada como sinal para início imediato;</p>
            <p>b) Vencimentos definidos a partir do go-live;</p>
            <p>c) Parcelas 1–4: PIX ou transferência bancária;</p>
            <p>d) 5º mês: saldo via cartão de crédito (parcelável com a operadora).</p>

            <h2>6. MANUTENÇÃO PÓS-ENTREGA</h2>
            <p>6.1. Manutenção contínua não inclusa. Serviços extras a negociar separadamente.</p>

            <div class="warning">
              <h3>⚠️ PONTO DE ATENÇÃO CRÍTICO – RESTRIÇÕES DURANTE O PROJETO</h3>
              <p>Durante todo o período de execução (até o go-live), a CONTRATANTE está expressamente proibida de realizar, sem autorização prévia e por escrito do CONTRATADO:</p>
              <ul>
                <li>❌ Cadastrar produtos novos manualmente na Nuvemshop;</li>
                <li>❌ Remover ou excluir produtos existentes na Nuvemshop;</li>
                <li>❌ Adicionar ou retirar produtos no Bling ou na Shopee sem alinhamento prévio;</li>
                <li>❌ Realizar importações em massa de catálogo durante a refação.</li>
              </ul>
              <p><strong>O descumprimento causará quebra na sincronização, duplicidade de dados e impacto no prazo de entrega.</strong></p>
            </div>

            <h2>7. RESPONSABILIDADES DA CONTRATANTE</h2>
            <p>Disponibilizar acessos, fornecer informações corretas sobre produtos e cumprir prazos de pagamento.</p>

            <h2>8. RESPONSABILIDADES DO CONTRATADO</h2>
            <p>Executar os serviços com zelo, reestruturando a base de dados do zero.</p>

            <h2>9. CONFIDENCIALIDADE</h2>
            <p>Ambas as partes mantêm sigilo sobre dados e estratégias de negócio.</p>

            <h2>10. VIGÊNCIA</h2>
            <p>Este contrato entra em vigor na data do pagamento da primeira parcela antecipada (sinal de R$ 204,41).</p>

            <div class="footer">
              <p>Documento gerado digitalmente em ${new Date().toLocaleDateString('pt-BR')}</p>
              <p>A2 Data | Integração Digital – Ricardo Alexandre Brasil Júnior</p>
            </div>
          </body>
        </html>
      `);

      printWindow.document.close();
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        setIsGeneratingPDF(false);
      }, 250);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Por favor, tente novamente.');
      setIsGeneratingPDF(false);
    }
  };

  const handleSendApproval = () => {
    if (!hasAccepted) {
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
      return;
    }

    const message = encodeURIComponent(
      'Olá, confirmo que li e aceito a proposta de Integração Digital (Bling ↔ Nuvemshop ↔ Shopee), no valor de R$ 2.044,10, com parcelas mensais de R$ 204,41. Estou ciente do pagamento da 1ª parcela antecipada de R$ 204,41 para início imediato, e das restrições de não adicionar/remover produtos durante o projeto, conforme contrato.'
    );

    window.open(`https://wa.me/${PRIMARY_WHATSAPP}?text=${message}`, '_blank');
    setTimeout(() => {
      window.open(`https://wa.me/${PARTNER_WHATSAPP}?text=${message}`, '_blank');
    }, 500);

    setShowSuccess(true);
  };

  const handleDoubtContact = () => {
    const message = encodeURIComponent(
      'Olá! Tenho algumas dúvidas sobre a proposta de Integração Digital. Poderia me ajudar?'
    );
    window.open(`https://wa.me/${PRIMARY_WHATSAPP}?text=${message}`, '_blank');
  };

  if (type === 'doubt') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md sm:max-w-lg w-full p-6 sm:p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
            <X size={22} />
          </button>
          <div className="text-center mb-8 mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageCircle size={14} />
              Tire suas dúvidas
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Estamos aqui para ajudar</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Entre em contato pelo WhatsApp e responderemos todas as suas perguntas sobre a proposta.
            </p>
          </div>
          <button
            onClick={handleDoubtContact}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] text-white font-bold text-base sm:text-lg py-4 sm:py-5 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Falar pelo WhatsApp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={!showSuccess ? onClose : undefined} />

      <div className="relative bg-white w-full h-full md:h-auto md:max-h-[95vh] md:rounded-3xl md:shadow-2xl md:max-w-7xl md:my-4 overflow-hidden flex flex-col">
        <div className="h-1.5 md:h-2 w-full bg-gradient-to-r from-[#043959] via-[#466FA6] to-[#AD8DF2] flex-shrink-0" />

        <button onClick={onClose} className="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 text-slate-600 hover:text-slate-900 hover:bg-white transition-all shadow-lg">
          <X size={20} />
        </button>

        {!showSuccess ? (
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
                  <FileText size={16} />
                  Aprovação de Proposta – Integração Digital
                </div>
              </div>

              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* COLUNA ESQUERDA */}
                <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 leading-tight">
                      Confirme sua proposta com segurança
                    </h2>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Esta proposta formaliza o projeto de integração entre{' '}
                      <span className="font-semibold text-[#466FA6]">Bling</span>,{' '}
                      <span className="font-semibold text-[#466FA6]">Nuvemshop</span> e{' '}
                      <span className="font-semibold text-[#466FA6]">Shopee</span>, incluindo configuração, testes e treinamento inicial.
                    </p>
                  </div>

                  {/* Investimento */}
                  <div className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">💰 Investimento acordado</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-600">Valor total</span>
                        <span className="text-3xl font-black text-slate-900">R$ 2.044,10</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <span className="text-sm font-medium text-slate-600">Parcelas mensais</span>
                        <span className="text-xl font-bold text-[#466FA6]">10x de R$ 204,41</span>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-3">
                        <p className="text-xs text-amber-800 leading-relaxed">
                          🔑 <strong>Sinal de início:</strong> R$ 204,41 antecipados para início imediato do projeto.
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                        <p className="text-xs text-blue-800 leading-relaxed">
                          💡 <strong>Importante:</strong> Os demais vencimentos são definidos a partir da data de entrega (go-live).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Como funciona */}
                  <div className="rounded-2xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-3">📋 Como funciona</p>
                    <ol className="space-y-3 text-sm text-slate-700">
                      {[
                        'Leia o contrato e confirme o aceite digital',
                        'Envio automático da aprovação via WhatsApp',
                        'Pagamento do sinal (R$ 204,41) e início imediato',
                        'Alinhamento de cronograma e entrega (go-live)',
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#466FA6] text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Aviso crítico */}
                  <div className="rounded-2xl border-2 border-red-300 bg-red-50 p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">⚠️ Atenção crítica</p>
                    <p className="text-sm text-red-800 font-semibold mb-2">Durante o projeto, NÃO realize:</p>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>❌ Cadastrar produtos novos na Nuvemshop</li>
                      <li>❌ Remover produtos existentes da Nuvemshop</li>
                      <li>❌ Alterar estoque no Bling ou Shopee sem aviso</li>
                      <li>❌ Importações em massa de catálogo</li>
                    </ul>
                    <p className="text-xs text-red-600 mt-3 leading-relaxed">
                      Qualquer alteração manual durante a refação pode causar quebra na sincronização e atraso na entrega.
                    </p>
                  </div>

                  {/* Aceite */}
                  <div className="rounded-2xl border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-blue-50 p-5 shadow-lg">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasAccepted}
                        onChange={(e) => { setHasAccepted(e.target.checked); setShowError(false); }}
                        className="mt-1 w-6 h-6 rounded-md border-2 border-slate-400 text-[#466FA6] focus:ring-2 focus:ring-[#466FA6]/30 cursor-pointer transition-all"
                      />
                      <span className="flex-1 text-sm font-bold text-slate-900 group-hover:text-[#466FA6] transition-colors leading-relaxed">
                        Declaro que li e estou de acordo com todos os termos deste contrato, incluindo as restrições durante o projeto e as condições de pagamento descritas
                      </span>
                    </label>
                    <p className="text-xs text-slate-600 mt-3 ml-10 leading-relaxed">
                      Ao marcar esta opção e clicar em "Enviar aprovação", você confirma digitalmente via WhatsApp.
                    </p>
                  </div>

                  {showError && (
                    <div className="flex items-center gap-3 text-sm text-red-700 bg-red-50 border-2 border-red-300 rounded-2xl px-4 py-4 animate-shake shadow-sm">
                      <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                      <span className="font-semibold">Por favor, confirme que leu e aceita os termos antes de prosseguir.</span>
                    </div>
                  )}

                  <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleDownloadPDF}
                      disabled={isGeneratingPDF}
                      className="flex-1 inline-flex items-center justify-center gap-3 border-2 border-slate-300 bg-white text-slate-700 font-bold text-base py-4 px-6 rounded-xl hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                    >
                      <Download size={20} />
                      {isGeneratingPDF ? 'Gerando...' : 'Baixar PDF'}
                    </button>
                    <button
                      onClick={handleSendApproval}
                      className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#466FA6] via-[#AD8DF2] to-[#B79BF2] text-white font-black text-base py-4 px-6 rounded-xl shadow-xl shadow-purple-300/40 hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-200"
                    >
                      <CheckCircle2 size={20} />
                      Enviar aprovação
                    </button>
                  </div>
                </div>

                {/* COLUNA DIREITA – Contrato */}
                <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 lg:p-5 flex flex-col shadow-lg order-1 lg:order-2 lg:sticky lg:top-0">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">📄 Contrato completo</p>
                    <p className="text-sm text-slate-600">Leia todos os termos antes de aceitar</p>
                  </div>
                  <div className="flex-1 rounded-xl bg-white border-2 border-slate-200 shadow-inner overflow-hidden">
                    <div className="h-[400px] lg:h-[700px] overflow-y-auto p-4 lg:p-5 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                      {CONTRACT_TEXT}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-3 mt-4">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      💡 <strong>Dica:</strong> Baixe o PDF para assinar digitalmente e arquivar com segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
            <div className="text-center max-w-md">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-6 animate-bounce shadow-xl">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Aprovação enviada! 🎉</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                Sua aprovação foi encaminhada com sucesso pelo WhatsApp. Em breve retornaremos com o alinhamento da data de entrega e próximos passos.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#466FA6] to-[#AD8DF2] text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg text-base"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
        .scrollbar-thin::-webkit-scrollbar { width: 8px; }
        .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 4px; }
        .scrollbar-track-slate-100::-webkit-scrollbar-track { background-color: #f1f5f9; }
      `}</style>
    </div>
  );
};

export default ContactModal;