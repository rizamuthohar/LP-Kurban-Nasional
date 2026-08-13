import React from 'react';
import { Scale, Check, X, ShieldCheck } from 'lucide-react';

export const CompetitiveAdvantageSection: React.FC = () => {
  const comparisonData = [
    { factor: 'Marketplace Multi-Lembaga', individual: 'Terbatas (Kanal Mandiri)', kn: '✓ Katalog Nasional Terintegrasi' },
    { factor: 'Data Ketersediaan Nasional', individual: 'Terisolasi per Lembaga', kn: '✓ Tersentralisasi Real-Time' },
    { factor: 'Year-Round Marketing', individual: 'Musiman (1–2 Bulan)', kn: '✓ 12 Bulan Kontinu' },
    { factor: 'Multi-Partner Ecosystem', individual: 'Satu Lembaga Tunggal', kn: '✓ Ekosistem Terbuka Banyak Lembaga' },
    { factor: 'Standardized Qurban Tracking', individual: 'Bervariasi', kn: '✓ Standar Terintegrasi Single App' },
    { factor: 'Digital Qurban Certificate', individual: 'Bervariasi', kn: '✓ Otomatis & Terverifikasi Digital' },
    { factor: 'Kategori Kurban Premium (Sultan)', individual: 'Terbatas', kn: '✓ Dedicated Concierge & Features' },
    { factor: 'National Investor Dashboard', individual: 'Tidak Umum', kn: '✓ Dashboard Analitik Tersedia' },
    { factor: 'Centralized Infrastructure Tech', individual: 'Siloed Tech Stack', kn: '✓ Single Platform Architecture' },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Scale className="w-3.5 h-3.5 text-emerald-600" />
            <span>VALUE PROPOSITION MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Why Kurban Nasional?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Perbandingan pendekatan pasar terfragmentasi vs ekosistem digital tersentralisasi.
          </p>
        </div>

        {/* Matrix Table Wrapper */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-900 text-white text-xs uppercase font-mono tracking-wider">
                  <th className="py-4 px-6 font-semibold w-1/3">Faktor Evaluasi</th>
                  <th className="py-4 px-6 font-semibold w-1/3 text-slate-400">Lembaga Individual (Fragmented)</th>
                  <th className="py-4 px-6 font-semibold w-1/3 text-emerald-400 bg-slate-950">
                    Kurban Nasional (Centralized)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.factor}</td>
                    <td className="py-4 px-6 text-slate-500 font-medium">{row.individual}</td>
                    <td className="py-4 px-6 font-bold text-emerald-700 bg-emerald-50/40 border-l border-emerald-100 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.kn}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
