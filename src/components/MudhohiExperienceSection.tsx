import React, { useState } from 'react';
import { Eye, CheckCircle2, ShieldCheck, Download, Award, MapPin, Building2, ExternalLink, Calendar } from 'lucide-react';

export const MudhohiExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tracking' | 'certificate'>('tracking');

  const trackingSteps = [
    { title: 'Pembayaran Diterima & Diverifikasi', date: '10 Juni 2026 • 14:20 WIB', status: 'completed' },
    { title: 'Hewan Dipersiapkan & Karantina Kesehatan', date: '12 Juni 2026 • 09:15 WIB', status: 'completed' },
    { title: 'Execution / Pemotongan Syariah', date: '14 Juni 2026 • 08:30 WIB', status: 'completed' },
    { title: 'Distribusi Daging ke Penerima Manfaat', date: '14 Juni 2026 • 11:45 WIB', status: 'completed' },
    { title: 'Dokumentasi Foto/Video & Laporan Uploaded', date: '14 Juni 2026 • 15:00 WIB', status: 'completed' },
    { title: 'Sertifikat Digital Terbit', date: '14 Juni 2026 • 16:10 WIB', status: 'completed' },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>TRANSPARENCY & TRACKING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Kurban yang Bisa Dipantau.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Pengalaman mudhohi modern dengan transparansi real-time, dokumentasi langsung, dan sertifikat digital.
          </p>
        </div>

        {/* Dashboard Mockup Wrapper */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Bar / Tab Switcher */}
          <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">MUDHOHI DASHBOARD MOCKUP</span>
            </div>

            <div className="flex rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('tracking')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'tracking' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tracking Status
              </button>
              <button
                onClick={() => setActiveTab('certificate')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeTab === 'certificate' ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Sertifikat Digital
              </button>
            </div>
          </div>

          {/* Main Mockup Body */}
          <div className="p-6 sm:p-8">
            
            {/* Common Header Info */}
            <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-emerald-400 uppercase">ORDER ID: #KN-2026-88421</div>
                <div className="text-lg font-bold text-white">Sapi Limosin Super (380 kg)</div>
                <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  Mitra Pelaksana: <span className="text-slate-200 font-medium">Dompet Dhuafa</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Lokasi: <span className="text-slate-200 font-medium">Bogor, Jabar</span>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold shrink-0 text-center">
                ✓ EKSEKUSI SELESAI
              </div>
            </div>

            {/* TAB 1: TRACKING */}
            {activeTab === 'tracking' && (
              <div>
                <h4 className="text-sm font-bold text-slate-200 mb-4 font-mono uppercase tracking-wider">
                  TIMELINE PEMANTAUAN KURBAN
                </h4>

                <div className="space-y-4 relative pl-6 border-l-2 border-emerald-500/40 ml-2">
                  {trackingSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Check icon node */}
                      <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-md shadow-emerald-950">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>

                      <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                        <div className="text-sm font-bold text-white">{step.title}</div>
                        <div className="text-xs text-emerald-400 font-mono mt-0.5">{step.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: CERTIFICATE PREVIEW */}
            {activeTab === 'certificate' && (
              <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 rounded-2xl border-2 border-amber-500/30 text-center relative overflow-hidden">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>

                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  OFFICIAL DIGITAL CERTIFICATE
                </span>

                <h3 className="text-2xl font-black font-display text-white mb-2">
                  SERTIFIKAT KURBAN NASIONAL
                </h3>

                <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                  Diberikan atas pelaksanaan ibadah kurban tahun 1447 H / 2026 M yang telah ditunai dan disalurkan melalui PT Distribusi Kurban Nasional & Dompet Dhuafa.
                </p>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 max-w-sm mx-auto text-xs text-slate-300 space-y-1 mb-6 text-left">
                  <div><strong>Nama Mudhohi:</strong> Bpk. H. Ahmad Susanto</div>
                  <div><strong>Nomor Sertifikat:</strong> CERT/KN-DD/2026/09912</div>
                  <div><strong>Lokasi Penyaluran:</strong> Desa Sukamaju, Kab. Bogor</div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer">
                    <Download className="w-4 h-4" />
                    Unduh Sertifikat PDF
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
