import React from 'react';
import { ArrowRight, Download, Globe, Mail, Phone, Building2, Sparkles, MessageSquare } from 'lucide-react';

interface FinalCtaProps {
  onOpenInquiry: () => void;
  onOpenInvestorDeck: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenInquiry, onOpenInvestorDeck }) => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-14 border border-emerald-500/40 shadow-2xl text-center max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>JOIN US AS STRATEGIC PARTNER / INVESTOR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 font-display">
            The Next National Qurban Infrastructure Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Kami membuka kesempatan strategic partnership dan investment untuk membangun platform Kurban Nasional dan mempersiapkannya menjadi infrastruktur digital kurban Indonesia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base shadow-xl shadow-emerald-950 hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuss the Opportunity</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenInvestorDeck}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-emerald-500/50 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              <span>Request Investor Deck</span>
            </button>
          </div>

          {/* Company Contact Details */}
          <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>PT Distribusi Kurban Nasional</span>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-mono">
              <Globe className="w-4 h-4" />
              <span>kurbannasional.com</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
