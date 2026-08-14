import React from 'react';
import { Download, MessageSquare, Phone } from 'lucide-react';

interface StandaloneExportBarProps {
  onOpenDeck: () => void;
  onOpenInquiry: () => void;
}

export const StandaloneExportBar: React.FC<StandaloneExportBarProps> = ({ onOpenDeck, onOpenInquiry }) => {
  return (
    <>
      {/* Floating Control Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 border border-slate-800 text-white rounded-full px-4 py-2 text-xs shadow-2xl backdrop-blur-md flex items-center gap-2 sm:gap-3 max-w-[95vw] overflow-x-auto">
        <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800 font-mono text-[11px] text-emerald-400 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>kurbannasional.com</span>
        </div>

        <button
          onClick={onOpenDeck}
          className="px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Investor Deck</span>
        </button>

        <button
          onClick={onOpenInquiry}
          className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Peluang Bisnis</span>
        </button>

        <a
          href="https://wa.me/6282125382809?text=Halo%20PT%20Distribusi%20Kurban%20Nasional,%20saya%20tertarik%20dengan%20kemitraan%20dan%20investasi"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors font-mono text-[11px] whitespace-nowrap"
        >
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>WA: 082125382809</span>
        </a>
      </div>
    </>
  );
};
