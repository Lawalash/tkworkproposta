import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Send, X } from 'lucide-react';

const whatsappNumber = '5583993725984';

const whatsappLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

interface ModalProps {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalShell = ({ open, title, subtitle, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-fade-in">
        <div className="absolute -top-16 -left-10 w-40 h-40 bg-gradient-to-br from-a2-500/30 to-client-400/30 rounded-full blur-3xl" aria-hidden />
        <div className="absolute -bottom-12 -right-8 w-44 h-44 bg-gradient-to-tr from-a2-700/20 to-client-500/20 rounded-full blur-3xl" aria-hidden />

        <div className="relative p-6 sm:p-8 space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-a2-600 uppercase">Twork x A2 Data</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{title}</h3>
              <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

interface ApprovalModalProps {
  open: boolean;
  onClose: () => void;
}

export const ApprovalModal = ({ open, onClose }: ApprovalModalProps) => {
  const handleSend = () => {
    const message = 'Olá! Acabei de aprovar a proposta Twork. Podemos avançar juntos?';
    window.open(whatsappLink(message), '_blank');
    onClose();
  };

  return (
    <ModalShell
      open={open}
      onClose={onClose}
      title="Proposta aprovada!"
      subtitle="Obrigado pela confiança. Vamos confirmar pelo WhatsApp para seguirmos."
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-a2-50 to-client-50 border border-slate-100 p-5 sm:p-6">
        <div className="absolute inset-0 opacity-60 bg-grid-slate-100" aria-hidden />
        <div className="relative flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-a2-500 to-client-400 text-white shadow-lg shadow-a2-500/30 animate-bounce">
            <CheckCircle2 size={36} strokeWidth={2.5} />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-slate-900">Vamos avisar a equipe agora mesmo</h4>
            <p className="text-sm text-slate-600 mt-1">
              Abriremos seu WhatsApp com uma mensagem pronta. Fique à vontade para ajustar o texto antes de enviar.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={handleSend}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-a2-600 to-client-500 hover:from-a2-500 hover:to-client-400 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-a2-500/25 transition"
        >
          Confirmar pelo WhatsApp
          <Sparkles size={18} />
        </button>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
        >
          Fechar
        </button>
      </div>
    </ModalShell>
  );
};

interface DoubtModalProps {
  open: boolean;
  onClose: () => void;
}

export const DoubtModal = ({ open, onClose }: DoubtModalProps) => {
  const [question, setQuestion] = useState('');

  const handleClose = () => {
    setQuestion('');
    onClose();
  };

  const handleSend = () => {
    const trimmed = question.trim();
    const fallback = 'Olá! Tenho uma dúvida sobre a proposta Twork.';
    const message = trimmed ? `Olá! Tenho uma dúvida sobre a proposta Twork: ${trimmed}` : fallback;
    window.open(whatsappLink(message), '_blank');
    handleClose();
  };

  return (
    <ModalShell
      open={open}
      onClose={handleClose}
      title="Ficou alguma dúvida?"
      subtitle="Envie sua pergunta que responderemos rapidamente pelo WhatsApp."
    >
      <div className="space-y-3">
        <label className="text-sm font-semibold text-slate-700" htmlFor="doubt-input">
          Escreva sua dúvida
        </label>
        <textarea
          id="doubt-input"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="w-full min-h-[120px] rounded-xl border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-a2-500 focus:border-transparent outline-none transition"
          placeholder="Ex.: Qual é o prazo estimado para concluir a integração?"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={handleSend}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-slate-900/15 transition"
        >
          Enviar pelo WhatsApp
          <Send size={18} />
        </button>
        <button
          onClick={handleClose}
          className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold"
        >
          Cancelar
        </button>
      </div>
    </ModalShell>
  );
};

export default { ApprovalModal, DoubtModal };
