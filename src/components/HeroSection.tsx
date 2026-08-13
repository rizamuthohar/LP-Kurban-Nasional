import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Building2, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Sparkles,
  Activity,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  onOpenInvestorDeck: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInvestorDeck,
  onScrollToSection,
}) => {
  // Live notification ticker simulator
  const [activeToast, setActiveToast] = useState(0);
  const notifications = [
    { name: "Bpk. H. Ahmad S.", city: "Jakarta Selatan", animal: "1 Sapi Limosin Premium", org: "Dompet Dhuafa", time: "Baru saja" },
    { name: "Ibu Rahmawati", city: "Surabaya", animal: "2 Kambing Super", org: "Rumah Zakat", time: "2 menit lalu" },
    { name: "PT Surya Utama", city: "Bandung", animal: "5 Sapi Korporat", org: "LAZISMU", time: "5 menit lalu" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveToast((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-kn-pulse-glow" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-emerald-950/50">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>NATIONAL QURBAN MARKETPLACE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-200/80 font-normal">BUSINESS OPPORTUNITY</span>
          </div>
        </div>

        {/* Main Title & Narrative */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Membangun Infrastruktur Digital untuk{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Ekosistem Kurban Nasional
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            Kurban Nasional hadir sebagai marketplace dan platform digital yang menghubungkan masyarakat dengan lembaga zakat dan kemanusiaan terpercaya—dengan pemasaran sepanjang tahun, teknologi terintegrasi, dan transparansi pelaksanaan kurban.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onScrollToSection('investment-opportunity')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-base shadow-xl shadow-emerald-950/80 hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Lihat Peluang Bisnis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenInvestorDeck}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-emerald-500/50 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer hover:text-white"
            >
              <Download className="w-5 h-5 text-emerald-400" />
              <span>Download Investor Deck</span>
            </button>
          </div>
        </div>

        {/* Visual Hero Container with Dashboard Mockup & Floating Cards */}
        <div className="relative mt-8 md:mt-14 max-w-6xl mx-auto">
          
          {/* Central Mockup Canvas */}
          <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-emerald-950/80 backdrop-blur-xl overflow-hidden">
            
            {/* Header bar of mockup */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-slate-400 font-mono pl-2 border-l border-slate-800">
                  kurbannasional.com/dashboard/investor-overview
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>LIVE PLATFORM METRICS</span>
              </div>
            </div>

            {/* Inner Dashboard Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              
              {/* Left Column: Interactive Map & Ecosystem Reach */}
              <div className="md:col-span-7 bg-slate-950/60 rounded-xl p-4 sm:p-5 border border-slate-800/80 relative flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs text-emerald-400 font-semibold tracking-wider uppercase">Jangkauan Nasional</span>
                    <h3 className="text-sm font-semibold text-slate-200">Sebaran Distribusi 514 Kabupaten/Kota</h3>
                  </div>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Realtime Sync</span>
                </div>

                {/* Indonesia Vector Map Visual Simulation */}
                <div className="relative my-4 h-44 sm:h-52 w-full flex items-center justify-center overflow-hidden bg-slate-900/80 rounded-lg border border-slate-800/50">
                  {/* Stylized Indonesia Dots / Glowing Nodes */}
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Glowing Node Pins */}
                  <div className="absolute top-1/3 left-1/4 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 relative border border-white" />
                    <div className="absolute top-4 -left-6 bg-slate-900/90 text-[10px] text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      Sumatra (Dompet Dhuafa)
                    </div>
                  </div>

                  <div className="absolute top-2/5 left-2/5 group cursor-pointer">
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-400 animate-ping absolute" />
                    <div className="w-3.5 h-3.5 rounded-full bg-teal-400 relative border border-white" />
                    <div className="absolute top-5 -left-10 bg-slate-900/90 text-[10px] text-teal-300 px-2 py-0.5 rounded border border-teal-500/30 whitespace-nowrap">
                      Jawa & CSR Corporate
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-3/5 group cursor-pointer">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative border border-white" />
                  </div>

                  <div className="absolute top-1/3 right-1/4 group cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 relative border border-white" />
                  </div>

                  <div className="text-center relative z-10 px-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/30 backdrop-blur-md">
                      <span className="text-xs font-mono text-emerald-300 font-semibold">
                        🇮🇩 Single National Integration Layer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    37 Lembaga Amil Zakat Verified
                  </span>
                  <span className="text-emerald-400 font-medium">99.8% Execution Accuracy</span>
                </div>
              </div>

              {/* Right Column: Live Transactions & Key Metrics */}
              <div className="md:col-span-5 flex flex-col justify-between gap-3">
                
                {/* Live Toast Order Simulation */}
                <div className="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-3.5 rounded-xl border border-emerald-500/30 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-emerald-400 mb-1 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ORDER NOTIFICATION
                    </span>
                    <span>{notifications[activeToast].time}</span>
                  </div>
                  <p className="text-sm text-slate-100 font-medium">
                    {notifications[activeToast].name} ({notifications[activeToast].city})
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Membeli <span className="text-emerald-300 font-semibold">{notifications[activeToast].animal}</span> via <span className="text-white font-medium">{notifications[activeToast].org}</span>
                  </p>
                </div>

                {/* Price Card & Tracking Sample */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Kurban Sultan Sample</div>
                    <div className="text-sm font-bold text-slate-100">Sapi Limosin Super (380kg)</div>
                    <div className="text-xs text-emerald-400 font-mono mt-0.5">Rp 19.500.000 / Ekor</div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium whitespace-nowrap">
                    Ready Tracked
                  </div>
                </div>

                {/* Verified Badge Bar */}
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Verified Partner Ecosystem</div>
                    <div className="text-[11px] text-slate-400">Dompet Dhuafa, Rumah Zakat, LAZISMU, LAZISNU</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* EDITABLE DATA — EDITABLE DUMMY METRICS CARDS */}
          {/* Floating Key Metrics Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            
            {/* Card 1 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <Users className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">DUMMY DEMO</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                12.480
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1">Mudhohi Terdaftar</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Proyeksi User Base Early</div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <TrendingUp className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-400">DUMMY DEMO</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                Rp 18,7 M
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1">Potensi GMV Annual</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Gross Market Value Est.</div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <Building2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400">TARGET</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                37
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1">Lembaga Terverifikasi</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Mitra Pelaksana Utama</div>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <MapPin className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400">COVERAGE</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                514
              </div>
              <div className="text-xs font-medium text-slate-300 mt-1">Kabupaten/Kota</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Jangkauan Seluruh Indonesia</div>
            </div>

          </div>

          <div className="text-center mt-3">
            <span className="text-[11px] text-slate-400 italic">
              * Angka statistik di atas merupakan visualisasi contoh/proyeksi model bisnis dan bukan klaim historis publik.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
