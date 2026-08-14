import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqAccordionSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Mengapa Kurban Nasional dibutuhkan?',
      answer: 'Saat ini ekosistem kurban digital terfragmentasi di mana setiap lembaga zakat melakukan akuisisi secara terpisah dalam kurun waktu 1-2 bulan yang sama. Kurban Nasional hadir sebagai aggregator & marketplace nasional tersentralisasi yang melakukan pemutakhiran data, pemasaran sepanjang tahun, dan penyediaan infrastruktur tracking transparan.'
    },
    {
      question: 'Bagaimana lembaga zakat dan kemanusiaan dapat bergabung?',
      answer: 'Lembaga zakat nasional dapat mendaftar melalui proses verifikasi legalitas, standar kualitas hewan kurban, serta kesiapan pelaporan. Setelah terverifikasi, lembaga dapat mengunggah katalog program kurban ke platform dan menerima pesanan dari masyarakat.'
    },
    {
      question: 'Bagaimana platform menghasilkan revenue?',
      answer: 'Pendapatan platform berasal dari multiple revenue streams: transaction fee marketplace, featured listing program unggulan, margin dari Kurban Sultan premium, lisensi platform CSR Corporate, monetisasi analitik data, dan kemitraan integrasi teknologi.'
    },
    {
      question: 'Bagaimana model partnership bekerja?',
      answer: 'Kurban Nasional memfokuskan diri pada infrastruktur teknologi, pemasaran digital nasional, dan pendaftaran mudhohi, sementara lembaga zakat mitra berfokus pada eksekusi pemotongan, penyembelihan syariah, dan distribusi daging di lapangan.'
    },
    {
      question: 'Bagaimana investasi Rp150 Juta digunakan?',
      answer: 'Dana investasi Rp150 Juta digunakan secara rinci untuk Platform Development (Rp16 Jt), Developer Incentive 6 Bulan (Rp60 Jt), Ads & Digital Marketing 12 Bulan (Rp24 Jt), dan Socialization & Event Activation (Rp50 Jt).'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>INVESTOR FAQ</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="text-slate-600 text-sm">
            Informasi penting seputar model bisnis, kemitraan, dan alokasi investasi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
