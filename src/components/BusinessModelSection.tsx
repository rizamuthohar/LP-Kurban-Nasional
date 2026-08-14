import React, { useState } from 'react';
import { Funnel, Calendar, ArrowRight, CheckCircle2, ChevronRight, Clock, Repeat } from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  const funnelSteps = [
    { title: 'AWARENESS', desc: 'Edukasi & SEO sepanjang tahun' },
    { title: 'EDUCATION', desc: 'Literasi kurban pelosok & transparansi' },
    { title: 'CONSIDERATION', desc: 'Pembandingan program & pilihan lembaga' },
    { title: 'PURCHASE', desc: 'Checkout cepat & pilihan payment gateway' },
    { title: 'MONITORING', desc: 'Tracking status hewan & lokasi pemotongan' },
    { title: 'REPORTING', desc: 'Sertifikat digital & video pelaksanaan' },
    { title: 'RETENTION', desc: 'Database terkumpul untuk kurban tahun berikutnya' }
  ];

  const timelinePhases = [
    {
      period: 'September – Desember',
      phase: 'Education & Awareness',
      subtitle: 'Membangun Literasi & SEO Organik',
      badge: 'Fase 1',
      activities: [
        'Aktivitas konten edukasi kurban digital dan transparansi penyaluran',
        'Optimasi SEO keyword kurban nasional & pendaftaran early bird',
        'Perekrutan basis komunitas dan calon mudhohi berulang'
      ]
    },
    {
      period: 'Januari – Februari',
      phase: 'Campaign Preparation',
      subtitle: 'Onboarding Lembaga & Finalisasi Katalog',
      badge: 'Fase 2',
      activities: [
        'Onboarding katalog hewan kurban dari lembaga zakat terverifikasi',
        'Integrasi API tracking & kepastian pasokan dari peternak mitra',
        'Peluncuran kampanye awal Kurban Sultan untuk segmen premium'
      ]
    },
    {
      period: 'Maret – April',
      phase: 'Conversion & Sales',
      subtitle: 'Puncak Penjualan & Perolehan Mudhohi',
      badge: 'Fase 3',
      activities: [
        'Akselerasi iklan digital (Meta & Google Ads) berdasar audience terhangat',
        'Penutupan transaksi B2B Corporate CSR dan pemesanan retail',
        'Layanan konsultasi personal untuk Kurban Sultan VIP'
      ]
    },
    {
      period: 'Mei (Iduladha & Hari Tasyrik)',
      phase: 'Execution & Distribution',
      subtitle: 'Pelaksanaan & Live Monitoring Digital',
      badge: 'Puncak Execution',
      activities: [
        'Pembaruan status pemotongan secara real-time via WhatsApp/App',
        'Sistem verifikasi lokasi pemotongan dan alokasi daging kurban',
        'Dokumentasi foto & video beresolusi tinggi untuk tiap mudhohi'
      ]
    },
    {
      period: 'Juni (Setelah Iduladha)',
      phase: 'Reporting & Retention',
      subtitle: 'Laporan Transparansi & Sertifikat Digital',
      badge: 'Fase 4',
      activities: [
        'Penerbitan Digital Kurban Certificate yang dapat diunduh & dibagikan',
        'Pengiriman laporan dampak penyaluran kepada mudhohi & corporate',
        'Pengumpulan ulasan & feedback kepuasan mudhohi'
      ]
    },
    {
      period: 'Setelahnya (Juli – April)',
      phase: 'Building Next Year Customer Base',
      subtitle: 'Program Retensi & Tabungan Kurban',
      badge: 'Continuous Engagement',
      activities: [
        'Pengaktifan fitur Tabungan/Pemesanan Dini untuk Kurban tahun depan',
        'Nurturing database mudhohi dengan laporan perkembangan peternak',
        'Menjaga retensi user agar repeat order tanpa biaya akuisisi ulang'
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Repeat className="w-3.5 h-3.5 text-emerald-400" />
            <span>BUSINESS MODEL & CYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Dari Kampanye Musiman Menjadi{' '}
            <span className="text-emerald-400">Digital Business Tahunan</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Sistem operasional berulang yang mengubah cara transaksi kurban dari transaksi sporadis menjadi ekosistem digital berkelanjutan.
          </p>
        </div>

        {/* Visual Funnel */}
        <div className="mb-16 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest text-center mb-8">
            FULL-LIFECYCLE CUSTOMER FUNNEL
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {funnelSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-[10px] font-mono text-emerald-400 mb-1">0{idx + 1}</div>
                <div className="text-xs font-bold text-white mb-2">{step.title}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Timeline Tabs */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">YEAR-ROUND OPERATIONAL TIMELINE</span>
              <h3 className="text-xl font-bold text-white mt-1">Aktivitas Platform Sepanjang Tahun</h3>
            </div>
            <span className="text-xs text-slate-400">Pilih fase untuk melihat rincian aktivitas:</span>
          </div>

          {/* Timeline Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {timelinePhases.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimeline(idx)}
                className={`px-3 py-3 rounded-xl text-left transition-all cursor-pointer border ${
                  activeTimeline === idx
                    ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-950'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850 hover:text-white'
                }`}
              >
                <div className="text-[10px] opacity-80 font-mono uppercase">{phase.period}</div>
                <div className="text-xs font-bold truncate mt-0.5">{phase.phase}</div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Card */}
          <div className="bg-slate-900 rounded-xl p-6 border border-emerald-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {timelinePhases[activeTimeline].badge} • {timelinePhases[activeTimeline].period}
                </span>
                <h4 className="text-xl font-bold text-white mt-2">
                  {timelinePhases[activeTimeline].phase}
                </h4>
                <p className="text-sm text-slate-400">
                  {timelinePhases[activeTimeline].subtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {timelinePhases[activeTimeline].activities.map((act, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{act}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
