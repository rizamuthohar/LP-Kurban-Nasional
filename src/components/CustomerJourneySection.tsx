import React, { useState } from 'react';
import { Route, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { JourneyStep } from '../types';

export const CustomerJourneySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: JourneyStep[] = [
    {
      step: 1,
      title: 'CONTENT',
      subtitle: 'Paparan Konten & Edukasi',
      description: 'Masyarakat terpapar konten edukasi syariah, liputan peternak lokal, atau kisah penyaluran kurban pelosok.',
      feature: 'SEO Articles, Social Video, & Infographics',
      icon: 'FileText'
    },
    {
      step: 2,
      title: 'DISCOVER',
      subtitle: 'Menemukan Platform',
      description: 'Mengenal Kurban Nasional sebagai marketplace terpadu multi-lembaga resmi.',
      feature: 'Landing Page & Recommendation Engine',
      icon: 'Compass'
    },
    {
      step: 3,
      title: 'VISIT',
      subtitle: 'Kunjungan Website/App',
      description: 'Navigasi katalog hewan kurban berdasarkan wilayah penyaluran, bobot, dan lembaga pelaksana.',
      feature: 'UX Filter & Multi-Lembaga Catalog',
      icon: 'Globe'
    },
    {
      step: 4,
      title: 'REGISTER',
      subtitle: 'Registrasi & Niat Kurban',
      description: 'Pembuatan akun cepat menggunakan WhatsApp OTP atau Google Single Sign-On.',
      feature: 'Seamless OTP Auth & Saved Mudhohi Profile',
      icon: 'UserCheck'
    },
    {
      step: 5,
      title: 'COMPARE',
      subtitle: 'Perbandingan Transparan',
      description: 'Membandingkan harga hewan, lokasi penyaluran, dan fasilitas dokumentasi antar lembaga.',
      feature: 'Side-by-Side Transparency Matrix',
      icon: 'Sliders'
    },
    {
      step: 6,
      title: 'PURCHASE',
      subtitle: 'Pembayaran Aman',
      description: 'Checkout instan dengan penyerahan nama mudhohi (akad kurban) dan instruksi pembayaran.',
      feature: 'Multi-Payment Gateway & Automatic Invoice',
      icon: 'CreditCard'
    },
    {
      step: 7,
      title: 'TRACK',
      subtitle: 'Pelacakan Real-time',
      description: 'Menerima notifikasi berkala mengenai status persiapan hewan dan jadwal pemotongan.',
      feature: 'WhatsApp Notification & App Dashboard',
      icon: 'Navigation'
    },
    {
      step: 8,
      title: 'REPORT',
      subtitle: 'Laporan & Sertifikat',
      description: 'Menerima foto/video dokumentasi pemotongan dan Digital Qurban Certificate resmi.',
      feature: 'Downloadable PDF Certificate & Video Link',
      icon: 'FileCheck'
    },
    {
      step: 9,
      title: 'RETURN',
      subtitle: 'Loyalitas Berulang',
      description: 'Mendapat pengingat kurban tahun berikutnya dan penawaran program Kurban Sultan / Tabungan.',
      feature: 'Annual Recurring Retention Engine',
      icon: 'Repeat'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Route className="w-3.5 h-3.5 text-emerald-600" />
            <span>MUDHOHI END-TO-END EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            From Awareness to Qurban
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            9 langkah perjalanan mudhohi yang dirancang untuk membangun kepercayaan total dan kenyamanan bertransaksi.
          </p>
        </div>

        {/* Steps Bar Selector */}
        <div className="overflow-x-auto pb-4 mb-8">
          <div className="flex items-center gap-2 min-w-[760px]">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md font-bold'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-[10px] font-mono text-emerald-600 mb-0.5">STEP 0{st.step}</div>
                  <div className="text-xs truncate">{st.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono text-emerald-600 font-bold uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                TAHAP 0{steps[activeStep].step} OF 09
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {steps[activeStep].title} — {steps[activeStep].subtitle}
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono">
              Key Technology: {steps[activeStep].feature}
            </div>
          </div>

          <div className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
            {steps[activeStep].description}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Gunakan tombol di atas untuk melihat langkah lainnya</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              Next Step <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
