import React from 'react';
import { Crown, Sparkles, Video, ShieldAlert, HeartHandshake, Check, ArrowRight } from 'lucide-react';

interface KurbanSultanProps {
  onOpenInquiry: () => void;
}

export const KurbanSultanSection: React.FC<KurbanSultanProps> = ({ onOpenInquiry }) => {
  const sultanFeatures = [
    'Hewan Super Premium (>400 kg / Limosin, Wagyu Cross, Simental)',
    'Perawatan ekstra & nutrisi pakan organik terstandar',
    'Foto & Video HD dokumentasi eksklusif',
    'Detail bobot akurat & riwayat medis berkala',
    'Fasilitas Live Video Call saat hari H pemotongan',
    'Kunjungan VIP kandang peternakan eksklusif',
    'Bebas biaya pengiriman area Jabodetabek',
    'Personal Assistance & Concierge 24/7'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-amber-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Ambient Gold Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Luxury Banner Container */}
        <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>PREMIUM CATEGORY DIFFERENTIATOR</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display mb-3">
              KURBAN <span className="kn-gradient-text-gold">SULTAN</span>
            </h2>

            <p className="text-xl font-medium text-amber-200/90 mb-4">
              Kurban dengan Hewan Terbaik. Pengalaman Terbaik.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Kurban Nasional tidak hanya menyediakan pilihan kurban reguler. Kami menghadirkan kategori premium untuk mudhohi yang ingin memilih hewan kurban unggulan dengan layanan eksklusif.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {sultanFeatures.map((feat, idx) => (
              <div key={idx} className="bg-slate-900/90 p-4 rounded-xl border border-amber-500/20 flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-200 font-medium leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-xl shadow-amber-950/80 hover:shadow-amber-500/20 inline-flex items-center gap-2 cursor-pointer"
            >
              <Crown className="w-5 h-5" />
              <span>Explore Kurban Sultan</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
