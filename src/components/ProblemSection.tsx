import React, { useState } from 'react';
import { Layers, DollarSign, Clock, Cpu, ArrowUpRight, AlertTriangle } from 'lucide-react';
import { ProblemItem } from '../types';

export const ProblemSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>('01');

  const problems: ProblemItem[] = [
    {
      id: '01',
      number: '01',
      title: 'Marketing Terfragmentasi',
      description: 'Setiap lembaga membangun awareness dan akuisisinya sendiri secara terpisah tanpa adanya konsolidasi data dan saluran nasional.',
      impact: 'Masyarakat menerima pesan yang tumpang tindih dari puluhan akun lembaga secara bersamaan.'
    },
    {
      id: '02',
      number: '02',
      title: 'Persaingan Ads Meningkat',
      description: 'Semua lembaga melakukan campaign digital pada periode 30 hari yang sama sehingga CPM & CPA Google/Meta Ads melonjak drastis.',
      impact: 'Biaya akuisisi per mudhohi (CAC) memakan porsi porsi anggaran marketing yang sangat tinggi.'
    },
    {
      id: '03',
      number: '03',
      title: 'Momentum Terlalu Pendek',
      description: 'Komunikasi kurban biasanya sangat kuat hanya 1–2 bulan menjelang Iduladha, lalu tidak ada lagi aktivitas retensi sisa 10 bulan berikutnya.',
      impact: 'Basis data donor/mudhohi menjadi dingin dan terputus dari engagement jangka panjang.'
    },
    {
      id: '04',
      number: '04',
      title: 'Teknologi Tidak Seragam',
      description: 'Tidak semua lembaga memiliki infrastruktur digital dengan standar UX, sistem monitoring real-time, dan otomasi sertifikat yang sama.',
      impact: 'Pengalaman mudhohi bervariasi dan sebagian merasa kurang mendapat transparansi pemotongan.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>INDUSTRY INEFFICIENCIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Ketika Semua Orang Berjualan di Waktu yang Sama
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Empat tantangan utama yang dihadapi ekosistem kurban online konvensional saat ini.
          </p>
        </div>

        {/* 4 Interactive Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const isSelected = activeCard === prob.id;

            return (
              <div
                key={prob.id}
                onClick={() => setActiveCard(prob.id)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer relative overflow-hidden border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-800 shadow-xl shadow-slate-900/20 -translate-y-1'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-2xl font-black font-display tracking-tight ${
                    isSelected ? 'text-emerald-400' : 'text-slate-400'
                  }`}>
                    {prob.number}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-200 text-slate-600'
                  }`}>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-45' : ''}`} />
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-3 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {prob.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  {prob.description}
                </p>

                {/* Impact Highlight */}
                <div className={`mt-auto pt-4 border-t text-xs font-medium leading-relaxed ${
                  isSelected ? 'border-slate-800 text-amber-300' : 'border-slate-200 text-slate-500'
                }`}>
                  <span className="font-semibold uppercase tracking-wider block text-[10px] mb-1 opacity-80">Dampak Industri:</span>
                  {prob.impact}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
