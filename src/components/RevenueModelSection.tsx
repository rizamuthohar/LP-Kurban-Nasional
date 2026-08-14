import React from 'react';
import { Wallet, DollarSign, Award, Building, BarChart3, Cpu, Star } from 'lucide-react';
import { RevenueStream } from '../types';

export const RevenueModelSection: React.FC = () => {
  const streams: RevenueStream[] = [
    {
      id: '01',
      title: 'Transaction Fee',
      description: 'Komisi/fee layanan yang disepakati dari setiap transaksi penjualan hewan kurban melalui marketplace.',
      type: 'Marketplace Model',
      potential: 'Volume-based Scale',
      icon: 'DollarSign'
    },
    {
      id: '02',
      title: 'Featured Listing',
      description: 'Slot promosi berbayar bagi lembaga amil zakat yang ingin memposisikan program unggulannya di halaman depan.',
      type: 'Monetisasi Listing',
      potential: 'Recurring Ad Space',
      icon: 'Award'
    },
    {
      id: '03',
      title: 'Premium Kurban (Sultan)',
      description: 'Margin/fee dari paket Kurban Sultan dengan layanan concierge eksklusif dan penanganan hewan super premium.',
      type: 'High-Margin Segment',
      potential: 'Higher Average Order Value',
      icon: 'Crown'
    },
    {
      id: '04',
      title: 'Corporate / CSR Platform',
      description: 'Biaya lisensi atau manajemen platform kurban terpadu untuk perusahaan/korporasi yang menyalurkan CSR.',
      type: 'B2B Enterprise',
      potential: 'Bulk Volume Transactions',
      icon: 'Building'
    },
    {
      id: '05',
      title: 'Data & Analytics Dashboard',
      description: 'Laporan wawasan pasar kurban, tren konsumsi daerah, dan analitik distribusi untuk pemangku kepentingan.',
      type: 'Data Monetization',
      potential: 'Annual Subscription',
      icon: 'BarChart3'
    },
    {
      id: '06',
      title: 'Technology Partnership',
      description: 'Integrasi API tracking, pendaftaran white-label, dan lisensi infrastruktur teknologi kurban untuk mitra.',
      type: 'SaaS / API License',
      potential: 'Long-term Integration',
      icon: 'Cpu'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Wallet className="w-3.5 h-3.5 text-emerald-700" />
            <span>BUSINESS MONETIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Multiple Revenue Streams
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Model bisnis diversifikasi yang dirancang untuk mendukung keberlanjutan dan pertumbuhan platform.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-semibold">
                    {stream.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {stream.potential}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {stream.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {stream.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between font-mono">
                <span>Revenue Stream 0{stream.id}</span>
                <span className="text-emerald-600 font-medium">Scalable Model</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
