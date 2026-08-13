import React from 'react';
import { Calendar, AlertCircle, ArrowUpRight, Shield, Zap, Sparkles } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES'];

  // Intensity levels for conventional (1 = low, 10 = high)
  const conventionalIntensity = [1, 1, 1, 1, 2, 9, 10, 1, 1, 1, 1, 1];
  
  // Intensity levels for Kurban Nasional year-round model
  const knIntensity = [3, 3, 4, 5, 7, 10, 10, 4, 3, 3, 3, 3];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>THE MARKET OPPORTUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Kurban Sudah Digital.{' '}
            <span className="text-emerald-600">Sekarang Saatnya Dibangun Menjadi Ekosistem Nasional.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Selama beberapa tahun terakhir, narasi kurban online dan kurban ke pelosok sudah semakin dikenal masyarakat. Lembaga-lembaga nasional telah membuktikan bahwa masyarakat bersedia mempercayakan kurbannya untuk disalurkan ke wilayah yang membutuhkan.
          </p>
        </div>

        {/* Core Narrative Callout Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-200/60 mb-14 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-600">
              <AlertCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Namun Ekosistemnya Masih Terfragmentasi
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Setiap lembaga memiliki kanal, kampanye, database, dan aktivitas marketing masing-masing.
                Masalah dasarnya:{' '}
                <strong className="text-slate-900 font-semibold bg-amber-100 px-1.5 py-0.5 rounded">
                  semua lembaga melakukan akuisisi pada momentum yang hampir bersamaan
                </strong>{' '}
                — biasanya kampanye baru mulai agresif 1–2 bulan menjelang Iduladha.
              </p>
            </div>
          </div>
        </div>

        {/* 12-Month Interactive Timeline Comparison Visualization */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">12-MONTH STRATEGIC COMPARISON</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Perbandingan Model Marketing Musiman vs Year-Round</h3>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-rose-500 inline-block" />
                <span className="text-slate-300">Model Konvensional</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-emerald-400 inline-block" />
                <span className="text-slate-300">Kurban Nasional</span>
              </div>
            </div>
          </div>

          {/* Month Header Grid */}
          <div className="mt-8 overflow-x-auto pb-4">
            <div className="min-w-[680px]">
              
              {/* Months Row */}
              <div className="grid grid-cols-12 gap-2 mb-6 text-center">
                {months.map((m, idx) => (
                  <div 
                    key={m} 
                    className={`text-xs font-mono py-1 rounded ${
                      idx === 5 ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40' : 'text-slate-400 bg-slate-800/60'
                    }`}
                  >
                    {m}
                    {idx === 5 && <div className="text-[9px] text-amber-400">Iduladha</div>}
                  </div>
                ))}
              </div>

              {/* Model 1: Conventional */}
              <div className="mb-8 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    MODEL LAMA (TERFRAGMENTASI)
                  </span>
                  <span className="text-xs text-slate-400">Hanya aktif 1–2 bulan sebelum Iduladha</span>
                </div>

                <div className="grid grid-cols-12 gap-2 items-end h-20">
                  {conventionalIntensity.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center h-full justify-end group">
                      <div 
                        className={`w-full rounded-t transition-all ${
                          val >= 9 ? 'bg-rose-500 shadow-lg shadow-rose-500/50' : 'bg-slate-800'
                        }`}
                        style={{ height: `${(val / 10) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-rose-300/80 mt-3 italic font-mono">
                  ⚠️ Akibatnya: CAC (Customer Acquisition Cost) melambung tinggi karena perebutan keyword & ads inventory di waktu singkat.
                </p>
              </div>

              {/* Model 2: Kurban Nasional */}
              <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    MODEL KURBAN NASIONAL (YEAR-ROUND ECOSYSTEM)
                  </span>
                  <span className="text-xs text-emerald-300">Marketing & Edukasi Aktif 12 Bulan Progresif</span>
                </div>

                <div className="grid grid-cols-12 gap-2 items-end h-24">
                  {knIntensity.map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center h-full justify-end group">
                      <div 
                        className={`w-full rounded-t transition-all ${
                          val >= 9 ? 'bg-gradient-to-t from-emerald-600 to-teal-400 shadow-lg shadow-emerald-500/40' : 'bg-emerald-600/50'
                        }`}
                        style={{ height: `${(val / 10) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-emerald-300/90 mt-3 font-mono">
                  ✅ Keunggulan: Brand awareness konsisten, database mudhohi terakumulasi, SEO organik kuat, dan konversi kurban berulang tiap tahun.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
