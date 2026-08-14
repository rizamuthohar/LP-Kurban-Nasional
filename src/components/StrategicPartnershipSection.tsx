import React from 'react';
import { ShieldCheck, Anchor, ArrowRight, CheckCircle2, AlertCircle, Database, Layers, Stethoscope, FileSpreadsheet } from 'lucide-react';

export const StrategicPartnershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Anchor className="w-3.5 h-3.5 text-emerald-700" />
            <span>STRATEGIC PARTNERSHIP ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Starting With the Strongest Strategic Anchors
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Strategi awal Kurban Nasional adalah menggandeng pilar institusi terkuat di Indonesia: pelopor distribusi kurban terbesar dan kementerian regulator data populasi & kesehatan hewan ternak nasional.
          </p>
        </div>

        {/* Dual Anchor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
          
          {/* 1. Dompet Dhuafa Showcase */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest font-semibold">
                  TARGET ANCHOR: PELAKSANA & DISTRIBUSI
                </span>
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1 shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Target Partnership
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
                DOMPET DHUAFA
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Pelopor kurban digital dan penyalur kurban pelosok Nusantara terbesar di Indonesia dengan rekam jejak puluhan tahun dan jaringan relawan terluas.
              </p>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="font-semibold text-emerald-300 text-xs uppercase tracking-wider font-mono mb-1">
                  Peran & Dampak Ekosistem:
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Jaringan Distribusi 3T:</strong> Akses penyaluran daging kurban hingga wilayah Tertinggal, Terdepan, dan Terluar di 34 provinsi.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Standar Syariah & Karantina:</strong> SOP pemotongan hewani higienis, halal, dan berkeadilan bagi peternak lokal.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Kredibilitas Publik Tinggi:</strong> Menjadi jangkar reputasi untuk menarik adopsi jutaan mudhohi dan lembaga lainnya.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Fokus: Jaringan Eksekusi & Distribusi</span>
              <span className="text-emerald-400 font-semibold">National Reach</span>
            </div>
          </div>

          {/* 2. Kementan Showcase */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-teal-500/30 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 uppercase tracking-widest font-semibold">
                  TARGET MITRA: DATA TERNAK & KESEHATAN
                </span>
                <span className="text-sm font-bold text-amber-300 flex items-center gap-1 shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Target Partnership
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
                KEMENTERIAN PERTANIAN (KEMENTAN)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Otoritas nasional data populasi ternak, kesehatan hewan veteriner, dan regulasi lalu lintas hewan kurban (Ditjen Peternakan dan Kesehatan Hewan / PKH).
              </p>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="font-semibold text-cyan-300 text-xs uppercase tracking-wider font-mono mb-1">
                  Sinergi Khusus Terkait Data Hewan Kurban:
                </div>
                <div className="flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Data Ketersediaan Hewan Nasional:</strong> Integrasi estimasi populasi sapi, kambing, dan domba siap kurban per wilayah/provinsi secara real-time.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Stethoscope className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Validasi SKKH Veteriner:</strong> Standardisasi pengawasan sertifikat kesehatan hewan kurban bebas PMK, LSD, dan antraks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Pencegahan Disparitas Pasokan:</strong> Analisis wilayah surplus pasokan peternak untuk disalurkan ke wilayah defisit hewan kurban.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Fokus: Data Populasi & Standar Kesehatan SKKH</span>
              <span className="text-cyan-400 font-semibold">National Data Backbone</span>
            </div>
          </div>

        </div>

        {/* Synergistic Catalyst Flow Diagram */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-6xl mx-auto border border-slate-800 mb-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              NATIONAL INTEGRATION ARCHITECTURE
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Bagaimana Mitra Strategis Menggerakkan Ekosistem
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            
            {/* Left Box: Strategic Inputs */}
            <div className="space-y-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase mb-1">DATA & HEALTH STANDARD</div>
                <div className="text-sm font-bold text-white">KEMENTAN RI</div>
                <div className="text-xs text-slate-400 mt-1">Data ketersediaan ternak nasional, SKKH & zonasi pasokan.</div>
              </div>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left">
                <div className="text-[10px] font-mono text-amber-400 font-bold uppercase mb-1">EXECUTION & DISTRIBUTION</div>
                <div className="text-sm font-bold text-white">DOMPET DHUAFA</div>
                <div className="text-xs text-slate-400 mt-1">Jaringan distribusi pelosok 3T & SOP pemotongan syariah.</div>
              </div>
            </div>

            {/* Middle Box: The Platform Hub */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950 to-slate-950 border-2 border-emerald-500/50 shadow-xl text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-2 text-emerald-300">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-emerald-300 font-bold uppercase">CENTRAL DIGITAL HUB</div>
              <div className="text-base sm:text-lg font-black text-white mt-1">PT DISTRIBUSI KURBAN NASIONAL</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Menghubungkan data ketersediaan resmi, katalog multi-lembaga, transaksi digital, live tracking, hingga transparansi sertifikat.
              </p>
            </div>

            {/* Right Box: Ecosystem Multipliers */}
            <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-800 text-left text-xs">
              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase mb-1">ECOSYSTEM BENEFICIARIES</div>
              <div className="space-y-1.5 text-slate-300">
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-emerald-400 font-bold">✓ Lembaga Zakat Lain:</span> Adopsi mudah via single open API.
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-emerald-400 font-bold">✓ Peternak Lokal:</span> Kepastian serapan hewan kurban harga adil.
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                  <span className="text-emerald-400 font-bold">✓ Mudhohi & Korporasi:</span> Tracking transparan & sertifikat resmi.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mandatory Disclaimer Note */}
        <div className="max-w-6xl mx-auto bg-slate-100 border border-slate-200 rounded-2xl p-4 text-center text-xs text-slate-600">
          * <strong>Catatan Transparansi Investor:</strong> Status Dompet Dhuafa, Kementerian Pertanian (Kementan RI), dan lembaga/instansi lainnya yang tercantum dalam landing page ini ditampilkan sebagai <strong>"Target Strategic Partnership"</strong> dalam rencana kerja roadmap platform dan belum merupakan perjanjian kerjasama resmi sampai kontrak disepakati.
        </div>

      </div>
    </section>
  );
};

