import React, { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, MessageCircle, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '5583993725984';

type ModalType = 'approval' | 'doubt';

interface ContactModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, type, onClose }) => {
  const [customMessage, setCustomMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      const initialMessage =
        type === 'approval'
          ? 'Olá! Quero aprovar a proposta. Podemos prosseguir? 😊'
          : 'Olá! Tenho algumas dúvidas sobre a proposta:';
      setCustomMessage(initialMessage);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, type]);

  const message = useMemo(() => customMessage.trim(), [customMessage]);

  if (!isOpen) return null;

  const handleSend = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-w-lg w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-[fadeIn_0.4s_ease]">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-[#466FA6] via-[#AD8DF2] to-[#F2D98D] rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-16 -left-10 w-32 h-32 bg-gradient-to-br from-[#AD8DF2] to-[#B79BF2] rounded-full blur-3xl opacity-40 animate-spin" style={{ animationDuration: '14s' }} />

        <div className="relative p-8 space-y-6">
          <div className="flex items-center gap-3">
            {type === 'approval' ? (
              <CheckCircle2 className="text-[#466FA6]" size={32} />
            ) : (
              <MessageCircle className="text-[#AD8DF2]" size={32} />
            )}
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                {type === 'approval' ? 'Proposta Aprovada' : 'Tirar Dúvidas'}
              </p>
              <h3 className="text-2xl font-black text-slate-900">
                {type === 'approval' ? 'Obrigado pela confiança!' : 'Envie sua dúvida'}
              </h3>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            {type === 'approval'
              ? 'Preparamos uma mensagem automática para você prosseguir no WhatsApp. Caso queira, pode personalizar o texto antes de enviar.'
              : 'Compartilhe suas dúvidas e vamos respondê-las diretamente pelo WhatsApp. Assim conseguimos ajudar com rapidez.'}
          </p>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700 block">Mensagem</label>
            <textarea
              value={message}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full min-h-[140px] p-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#AD8DF2]/60 text-slate-800"
            />
            <p className="text-xs text-slate-500">O envio será feito para o WhatsApp {WHATSAPP_NUMBER}.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Fechar
            </button>
            <button
              onClick={handleSend}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#466FA6] via-[#AD8DF2] to-[#B79BF2] text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
            >
              Enviar pelo WhatsApp
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
