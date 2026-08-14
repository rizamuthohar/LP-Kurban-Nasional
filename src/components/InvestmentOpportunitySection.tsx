import React, { useState } from 'react';
import { DollarSign, CheckCircle2, PieChart, ArrowRight, ShieldCheck, Star, Calculator } from 'lucide-react';
import { InvestmentAllocation } from '../types';

interface InvestmentOpportunityProps {
  onOpenInquiry: () => void;
}

export const InvestmentOpportunitySection: React.FC<InvestmentOpportunityProps> = ({ onOpenInquiry }) => {
  const allocations: InvestmentAllocation[] = [
    {
      id: 'dev',
      category: 'Platform Development & Infrastructure',
      amountFormatted: 'Rp 16.000.000',
      amountValue: 16000000,
      percentage: 10.67,
      details: 'Pengembangan website, PWA/aplikasi, server Cloud Run, database Firestore, domain, SSL & security infrastructure.',
      color: 'bg-emerald-500'
    },
    {
      id: 'incentive',
      category: 'Developer Incentive',
      amountFormatted: 'Rp 60.000.000',
      amountValue: 60000000,
      percentage: 40,
      details: 'Insentif tim teknis & pengembang sistem selama fase awal 6 bulan pengembangan platform.',
      color: 'bg-teal-500'
    },
    {
      id: 'ads',
      category: 'Ads & Digital Marketing',
      amountFormatted: 'Rp 24.000.000',
      amountValue: 24000000,
      percentage: 16,
      details: 'Alokasi kampanye iklan digital Rp 2.000.000/bulan (Rp 1jt Meta Ads + Rp 1jt Google Ads) selama 12 bulan.',
      monthlyBreakdown: 'Rp 2 Juta / Bulan x 12 Bulan',
      color: 'bg-cyan-500'
    },
    {
      id: 'event',
      category: 'Socialization & Event Activation',
      amountFormatted: 'Rp 50.000.000',
      amountValue: 50000000,
      percentage: 33.33,
      details: 'Kegiatan sosialisasi, partnership activation dengan lembaga zakat, event edukasi, dan persiapan kampanye nasional.',
      color: 'bg-amber-500'
    }
  ];

  const totalAmount = allocations.reduce((sum, item) => sum + item.amountValue, 0);

  return (
    <section id="investment-opportunity" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-4 h-4 text-emerald-400" />
            <span>INVESTMENT PROPOSAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Investment Opportunity
          </h2>

          <p className="text-emerald-300 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Rp150 Juta untuk Membangun Fondasi Kurban Nasional Selama 6 Bulan
          </p>
        </div>

        {/* Hero Figure Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-950 to-emerald-950 rounded-3xl p-8 sm:p-12 border border-emerald-500/40 shadow-2xl max-w-4xl mx-auto text-center mb-12">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
            INITIAL DEVELOPMENT & MARKET ACTIVATION SEED
          </span>

          <div className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight mb-2">
            Rp 150.000.000
          </div>

          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Alokasi dana awal secara terukur untuk membiayai infrastruktur teknologi, insentif tim, pemasaran digital 12 bulan, dan aktivasi kemitraan nasional.
          </p>

          {/* Allocation Progress Bar */}
          <div className="w-full bg-slate-900 h-4 rounded-full overflow-hidden flex border border-slate-800 mb-6">
            <div className="bg-emerald-500 h-full w-[10.67%]" title="Platform Dev (10.67%)" />
            <div className="bg-teal-500 h-full w-[40%]" title="Developer Incentive (40%)" />
            <div className="bg-cyan-500 h-full w-[16%]" title="Ads & Marketing (16%)" />
            <div className="bg-amber-500 h-full w-[33.33%]" title="Socialization & Event (33.33%)" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500" /> Platform Dev (Rp16 Jt)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-teal-500" /> Dev Incentive (Rp60 Jt)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-cyan-500" /> Ads 12-Bulan (Rp24 Jt)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-500" /> Event & Socialization (Rp50 Jt)
            </span>
          </div>
        </div>

        {/* Detailed Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {allocations.map((alloc) => (
            <div 
              key={alloc.id}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  {alloc.category}
                </span>
                <span className="text-sm font-bold text-white font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                  {alloc.amountFormatted}
                </span>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {alloc.details}
              </p>

              {alloc.monthlyBreakdown && (
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-xs text-cyan-300 font-mono mb-2">
                  💡 Skema: {alloc.monthlyBreakdown}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Total Verification Callout */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <div className="text-xs font-mono text-emerald-400 mb-1">
            VERIFIKASI KALKULASI ALOKASI INVESTASI
          </div>
          <div className="text-sm font-bold text-white mb-2">
            Rp 16.000.000 + Rp 60.000.000 + Rp 24.000.000 + Rp 50.000.000 = <span className="text-emerald-400 font-extrabold text-base">Rp 150.000.000</span>
          </div>
          <p className="text-xs text-slate-400 italic">
            * Angka di atas merupakan estimasi awal dan dapat disesuaikan berdasarkan prioritas pengembangan, kesepakatan investor, dan strategi fundraising.
          </p>

          <div className="mt-6">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-950 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Diskusikan Struktur Investasi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
