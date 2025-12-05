import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { PricingCardProps } from '../types';

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  priceHighlight,
  installmentHighlight,
  note,
  buttonText,
  detailsContent,
  isRecommended = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`
        relative flex flex-col p-6 rounded-2xl transition-all duration-300 border
        ${isRecommended 
          ? 'bg-white border-a2-200 shadow-xl shadow-a2-100/50 ring-1 ring-a2-500/20 transform md:-translate-y-2' 
          : 'bg-white border-slate-200 shadow-lg hover:shadow-xl'
        }
      `}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-a2-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
          Mais Recomendado
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      </div>

      <div className="flex-grow space-y-4">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
          <p className="text-sm text-slate-500 mb-1 font-medium">Investimento</p>
          <p className="text-slate-800 font-semibold">{priceHighlight}</p>
          <p className={`text-xl font-bold mt-1 ${isRecommended ? 'text-a2-600' : 'text-slate-700'}`}>
            {installmentHighlight}
          </p>
        </div>
        
        <p className="text-xs text-slate-500 italic leading-relaxed">
          {note}
        </p>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-100">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors duration-200
            ${isOpen 
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
              : isRecommended 
                ? 'bg-a2-600 text-white hover:bg-a2-700 shadow-md hover:shadow-lg' 
                : 'bg-slate-800 text-white hover:bg-slate-900 shadow-md hover:shadow-lg'
            }
          `}
        >
          {buttonText}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Collapsible Content */}
        <div 
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="text-sm text-slate-600 space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-100/50">
            {detailsContent}
          </div>
        </div>
      </div>
    </div>
  );
};
