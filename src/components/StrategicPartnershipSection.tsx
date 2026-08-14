import React from 'react';
import { ShieldCheck, Anchor, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const StrategicPartnershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Anchor className="w-3.5 h-3.5 text-emerald-700" />
            <span>ANCHOR PARTNERSHIP STRATEGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Starting With the Strongest Players
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Strategi awal Kurban Nasional adalah menggandeng lembaga nasional yang telah memiliki reputasi, jaringan, pengalaman, dan basis mudhohi yang kuat.
          </p>
        </div>

        {/* Dompet Dhuafa Anchor Showcase */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest font-semibold inline-block mb-3">
                TARGET STRATEGIC ANCHOR PARTNER
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                DOMPET DHUAFA
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                Salah satu pelopor kurban digital dan penyalur kurban pelosok terbesar di Indonesia dengan rekam jejak puluhan tahun.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl text-center shrink-0">
              <span className="text-xs text-slate-400 block font-mono">STATUS KEMITRAAN</span>
              <span className="text-sm font-bold text-amber-300 flex items-center gap-1.5 justify-center mt-1">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Target Partnership
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h4 className="text-lg font-bold text-slate-100 mb-3">
                Peran Anchor Partner dalam Ekosistem
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Kehadiran lembaga besar sebagai mitra pelaksana utama akan menjadi anchor untuk membangun kredibilitas awal platform, memastikan standar kualitas hewan kurban, serta membuka pintu bagi partisipasi lembaga-lembaga nasional lainnya.
              </p>
              <ul className="space-y-2 text-xs text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Jaringan distribusi hingga daerah 3T (Tertinggal, Terdepan, Terluar)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Sistem pemotongan & karantina hewan sesuai standar syariah
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Kredibilitas publik tinggi sebagai daya tarik utama mudhohi
                </li>
              </ul>
            </div>

            {/* Strategic Flow Diagram */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider text-center mb-2">
                STRATEGIC CATALYST FLOW
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center text-xs font-bold text-white">
                DOMPET DHUAFA (Target Anchor)
              </div>
              <div className="text-center text-emerald-400 font-bold text-xs">↓</div>

              <div className="bg-emerald-950 p-3 rounded-xl border border-emerald-500/30 text-center text-xs font-semibold text-emerald-200">
                ANCHOR PARTNER & CREDIBILITY
              </div>
              <div className="text-center text-emerald-400 font-bold text-xs">↓</div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center text-xs font-bold text-slate-200">
                OTHER NATIONAL INSTITUTIONS ONBOARDING
              </div>
              <div className="text-center text-emerald-400 font-bold text-xs">↓</div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-3 rounded-xl text-center text-xs font-black text-white shadow-lg">
                NATIONAL KURBAN ECOSYSTEM
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Note */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-center text-xs text-slate-400 italic">
            * Catatan Transparansi Investor: Status Dompet Dhuafa dan lembaga zakat nasional lainnya yang tercantum dalam landing page ini ditampilkan sebagai <strong>"Target Strategic Partnership"</strong> dalam rencana kerja dan belum merupakan perjanjian kerjasama resmi sampai kontrak disepakati.
          </div>

        </div>

      </div>
    </section>
  );
};
