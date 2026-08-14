import React from 'react';
import { Shield, Star, Building2, Users, Layers, Cpu, Globe2 } from 'lucide-react';

export const BigVisionSection: React.FC = () => {
  const elements = [
    'Mudhohi',
    'Lembaga Nasional',
    'Peternak Local',
    'Corporate CSR',
    'Data Analytics',
    'Integrated Technology'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950 text-white relative overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Globe2 className="w-4 h-4 text-emerald-400" />
          <span>NATIONAL VISION MANIFESTO</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display leading-tight">
          We Are Not Building Another Kurban Campaign.
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-400 mb-8 max-w-4xl mx-auto leading-snug">
          We Are Building the Digital Infrastructure for Indonesia’s Kurban Ecosystem.
        </p>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-light">
          Kurban Nasional bukan sekadar platform transaksi musiman. Kami membangun fondasi teknologi berkelanjutan yang mengintegrasikan seluruh elemen industri kurban Indonesia.
        </p>

        {/* Integrated Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
          {elements.map((el, idx) => (
            <React.Fragment key={idx}>
              <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm font-semibold shadow-lg">
                {el}
              </div>
              {idx < elements.length - 1 && (
                <span className="text-emerald-400 font-bold">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
