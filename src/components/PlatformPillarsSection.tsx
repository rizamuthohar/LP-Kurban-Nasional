import React from 'react';
import { Database, ShoppingBag, CreditCard, Navigation, FileCheck2, Cpu } from 'lucide-react';
import { PillarItem } from '../types';

export const PlatformPillarsSection: React.FC = () => {
  const pillars: PillarItem[] = [
    {
      id: '01',
      number: '01',
      title: 'National Data',
      description: 'Data ketersediaan hewan kurban nasional, pemetaan kebutuhan wilayah penerima manfaat, dan histori implementasi kurban.',
      icon: 'Database',
      badge: 'Aggregated Analytics'
    },
    {
      id: '02',
      number: '02',
      title: 'National Marketplace',
      description: 'Katalog terpadu hewan kurban dari lembaga zakat nasional yang telah lolos verifikasi standar kualitas dan legalitas.',
      icon: 'ShoppingBag',
      badge: 'Multi-Partner Catalog'
    },
    {
      id: '03',
      number: '03',
      title: 'Digital Transaction',
      description: 'Checkout instan dengan dukungan berbagai payment gateway (QRIS, VA Bank, E-Wallet, Credit Card) dan otomasi invoice.',
      icon: 'CreditCard',
      badge: 'Seamless Payment'
    },
    {
      id: '04',
      number: '04',
      title: 'Qurban Tracking',
      description: 'Fitur pemantauan berkala status kurban mudhohi dari persiapan, lokasi pemotongan, hingga konfirmasi penyaluran.',
      icon: 'Navigation',
      badge: 'Real-time Tracking'
    },
    {
      id: '05',
      number: '05',
      title: 'Transparency & Reporting',
      description: 'Dokumentasi foto/video pemotongan, penerbitan Digital Qurban Certificate, dan laporan akuntabilitas distribusi.',
      icon: 'FileCheck2',
      badge: 'Verified Proof'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>CORE INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Bukan Sekadar Marketplace.{' '}
            <span className="text-emerald-600">Ini Infrastruktur Digital Kurban Nasional.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            5 pilar utama teknologi yang menopang efisiensi dan transparansi ekosistem.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const isWide = idx === 4; // Wide 5th card on large screens
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-emerald-500/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${
                  isWide ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center font-bold text-lg">
                    {pillar.number}
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
