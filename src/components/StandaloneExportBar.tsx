import React, { useState } from 'react';
import { Smartphone, Monitor, Tablet, Code, Copy, Check, Download, ExternalLink, Eye, ShieldCheck } from 'lucide-react';

interface StandaloneExportBarProps {
  onOpenDeck: () => void;
  onOpenInquiry: () => void;
}

export const StandaloneExportBar: React.FC<StandaloneExportBarProps> = ({ onOpenDeck, onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Control Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 border border-slate-800 text-white rounded-full px-4 py-2 text-xs shadow-2xl backdrop-blur-md flex items-center gap-3">
        <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800 font-mono text-[11px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>kurbannasional.com</span>
        </div>

        <button
          onClick={onOpenDeck}
          className="px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Investor Deck</span>
        </button>

        <button
          onClick={onOpenInquiry}
          className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Peluang Bisnis</span>
        </button>
      </div>
    </>
  );
};
