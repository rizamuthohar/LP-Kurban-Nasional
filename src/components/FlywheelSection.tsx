import React from 'react';
import { RotateCw, Star, RefreshCw } from 'lucide-react';

export const FlywheelSection: React.FC = () => {
  const flywheelNodes = [
    { title: 'MORE CONTENT', desc: 'Edukasi & Storytelling' },
    { title: 'MORE AWARENESS', desc: 'Jangkauan Nasional' },
    { title: 'MORE USERS', desc: 'Akumulasi Mudhohi' },
    { title: 'MORE TRANSACTIONS', desc: 'Peningkatan GMV' },
    { title: 'MORE DATA', desc: 'Akurasi Wawasan Pasar' },
    { title: 'MORE PARTNERS', desc: 'Penambahan Lembaga & Peternak' },
    { title: 'MORE TRUST', desc: 'Reputasi & Transparansi' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>GROWTH ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            The Kurban Nasional Flywheel
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Setiap komponen ekosistem saling memperkuat pertumbuhan dan akumulasi jaringan secara mandiri.
          </p>
        </div>

        {/* Circular Flywheel Container */}
        <div className="max-w-4xl mx-auto bg-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative">
          
          {/* Rotating Ring Outer Background */}
          <div className="absolute inset-0 rounded-3xl border border-emerald-500/20 pointer-events-none" />

          {/* Center Hub */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center font-bold mx-auto mb-3 shadow-lg shadow-emerald-950 animate-kn-spin">
              <RotateCw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">SELF-REINFORCING NETWORK EFFECT</h3>
            <p className="text-xs text-slate-400 mt-1">Siklus pertumbuhan eksponensial kurban digital</p>
          </div>

          {/* Flywheel Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {flywheelNodes.map((node, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-[10px] font-mono text-emerald-400 mb-1">NODE 0{idx + 1}</div>
                <div className="text-xs font-bold text-white mb-1">{node.title}</div>
                <div className="text-[10px] text-slate-400 leading-tight">{node.desc}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
