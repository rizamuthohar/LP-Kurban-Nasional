import React from 'react';
import { Plus, ArrowDown, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AmplifierSection: React.FC = () => {
  const narrativeElements = [
    { label: 'Kurban Online', badge: 'Sudah Diterima' },
    { label: 'Kurban Pelosok', badge: 'Sudah Dikenal' },
    { label: 'Lembaga Nasional', badge: 'Sudah Dipercaya' },
    { label: 'Peternak Lokal', badge: 'Tersedia' },
    { label: 'Digital Payment', badge: 'Terintegrasi' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>ECOSYSTEM AMPLIFIER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Kami Tidak Mengubah Narasi Kurban.{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Kami Mengamplifikasinya.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Kurban online sudah dikenal. Kurban pelosok sudah terbukti. Lembaga nasional sudah dipercaya. Yang belum tersedia adalah <strong className="text-white">platform nasional yang menggabungkan semuanya dalam satu ekosistem terpadu.</strong>
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="text-center text-xs font-mono text-emerald-400 uppercase tracking-widest mb-6">
            PENGGABUNGAN ELEMEN EKOSISTEM EXISTING
          </div>

          {/* Top Layer: Existing Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {narrativeElements.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-3 text-center transition-all hover:-translate-y-1"
              >
                <div className="text-xs sm:text-sm font-semibold text-slate-100">{item.label}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1 bg-emerald-500/10 px-2 py-0.5 rounded inline-block">
                  {item.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Plus Sign / Convergence Icon */}
          <div className="flex justify-center my-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950 animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>

          {/* Center Convergence Node */}
          <div className="bg-gradient-to-r from-emerald-900/90 via-teal-900/90 to-emerald-900/90 border-2 border-emerald-500/50 rounded-2xl p-6 sm:p-8 text-center my-6 shadow-xl shadow-emerald-950/80 relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest block mb-1">
              THE INTEGRATION HUB
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight mb-2">
              KURBAN NASIONAL
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto font-light">
              Marketplace digital, agregator inventory hewan, payment router, dan sistem tracking terpusat.
            </p>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center my-4">
            <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Final Output Node */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>NATIONAL QURBAN ECOSYSTEM</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              Infrastruktur digital berulang yang memberikan manfaat terukur bagi Mudhohi, Lembaga Zakat, Peternak, dan Penerima Manfaat.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
