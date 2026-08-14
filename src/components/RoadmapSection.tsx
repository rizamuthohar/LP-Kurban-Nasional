import React from 'react';
import { Calendar, CheckCircle2, Clock, Rocket } from 'lucide-react';
import { RoadmapMonth } from '../types';

export const RoadmapSection: React.FC = () => {
  const months: RoadmapMonth[] = [
    {
      month: 'MONTH 01',
      title: 'Foundation',
      badge: 'Bulan 1',
      items: [
        'Brand Identity & Position Setup',
        'Product Architecture Design',
        'Database Schema & Security Setup',
        'Legal Entity PT & Compliance Prep'
      ]
    },
    {
      month: 'MONTH 02',
      title: 'Development',
      badge: 'Bulan 2',
      items: [
        'Marketplace Frontend & Catalog UI',
        'Mudhohi & Partner Dashboard Development',
        'Authentication System & OTP Gateway'
      ]
    },
    {
      month: 'MONTH 03',
      title: 'Integration',
      badge: 'Bulan 3',
      items: [
        'Payment Gateway Integration (QRIS, VA)',
        'WhatsApp Automated Notification Engine',
        'Kurban Tracking & Digital Certificate System'
      ]
    },
    {
      month: 'MONTH 04',
      title: 'Partner Onboarding',
      badge: 'Bulan 4',
      items: [
        'Lembaga Amil Zakat National Onboarding',
        'Community Farmer Network Verification',
        'Initial Content & Storytelling Production'
      ]
    },
    {
      month: 'MONTH 05',
      title: 'Market Activation',
      badge: 'Bulan 5',
      items: [
        'SEO & Organic Content Campaign Launch',
        'Social Media & Early Meta/Google Ads',
        'Community & CSR Socialization Events'
      ]
    },
    {
      month: 'MONTH 06',
      title: 'Pre-Kurban Acceleration',
      badge: 'Bulan 6 (Launch)',
      items: [
        'Full Pre-Kurban National Campaign Push',
        'Corporate Partnership Conversion',
        'End-to-End Stress Testing & Official Launch'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <Rocket className="w-3.5 h-3.5 text-emerald-700" />
            <span>EXECUTION TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            6 Months to Market
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Rencana kerja sistematis menuju peluncuran platform dan akselerasi ekosistem kurban nasional.
          </p>
        </div>

        {/* 6 Month Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map((m, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/50 shadow-sm transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md font-bold">
                  {m.month}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {m.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {m.title}
              </h3>

              <ul className="space-y-2.5 text-xs text-slate-600">
                {m.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
