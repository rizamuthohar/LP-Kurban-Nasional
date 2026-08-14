import React from 'react';
import { TrendingUp, Search, Users, Shield, Target, Award, Star, MessageSquare } from 'lucide-react';

export const YearRoundMarketingSection: React.FC = () => {
  const marketingBenefits = [
    { icon: Search, title: 'Edukasi & SEO Organik', desc: 'Membangun keyword ranking kurban nasional tanpa biaya iklan berlebihan.' },
    { icon: MessageSquare, title: 'Storytelling & Konten', desc: 'Cerita dampak peternak & penerima manfaat disampaikan sepanjang tahun.' },
    { icon: Users, title: 'Community Building', desc: 'Membina hubungan erat dengan majelis, komunitas, dan korporat.' },
    { icon: Target, title: 'Warm Audience Retargeting', desc: 'Mengurangi CAC karena audience sudah mengenal platform jauh hari.' },
    { icon: Award, title: 'Database Acquisition', desc: 'Pengumpulan data calon mudhohi berulang melalui program tabungan kurban.' },
    { icon: Shield, title: 'Brand Credibility', desc: 'Membangun kepercayaan publik yang kokoh dan berkelanjutan.' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>ACQUISITION STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Marketing Tidak Lagi Dimulai{' '}
            <span className="text-emerald-400">2 Bulan Sebelum Iduladha</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Pendekatan pemasaran berkelanjutan yang menurunkan Customer Acquisition Cost (CAC) dan meningkatkan Lifetime Value (LTV).
          </p>
        </div>

        {/* Visual Bar Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Model Konvensional */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rose-400 uppercase font-bold">MODEL KONVENSIONAL</span>
              <span className="text-xs text-slate-400">Low Activity vs Peak Competition</span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>10 Bulan Pertama (Jun - Feb)</span>
                  <span className="text-rose-400">Aktivitas Rendah (10%)</span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-rose-500/30 w-[10%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>2 Bulan Menjelang Iduladha (Mar - Mei)</span>
                  <span className="text-rose-400 font-bold">Perang Ads & Biaya Melonjak (100%)</span>
                </div>
                <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-rose-500 w-[100%]" />
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-6 leading-relaxed">
              ⚠️ Akibat: Audience baru pertama kali terpapar iklan saat Iduladha dan belum memiliki brand trust, menyebabkan conversion rate relatif rendah.
            </p>
          </div>

          {/* Model Kurban Nasional */}
          <div className="bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">MODEL KURBAN NASIONAL</span>
              <span className="text-xs text-emerald-300">Continuous Engagement</span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs text-emerald-200">
                <span>SEP - DES (Edukasi & SEO Organik)</span>
                <span>████ (25%)</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-200">
                <span>JAN - FEB (Onboarding Catalog & Prep)</span>
                <span>██████ (40%)</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-200">
                <span>MAR - APR (Conversion Acceleration)</span>
                <span>████████████ (90%)</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-200 font-bold">
                <span>MEI / IDULADHA (Execution & Live Track)</span>
                <span className="text-emerald-400">████████████████ (100%)</span>
              </div>
              <div className="flex justify-between text-xs text-emerald-300/80">
                <span>JUN - AGS (Retensi & Tabungan)</span>
                <span>██████ (35%)</span>
              </div>
            </div>

            <p className="text-xs text-emerald-200 mt-6 leading-relaxed font-medium">
              ✅ Keunggulan: Saat memasuki Iduladha, audience sudah teredukasi dan berada pada tahap keputusan akhir (ready to purchase).
            </p>
          </div>

        </div>

        {/* 6 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
