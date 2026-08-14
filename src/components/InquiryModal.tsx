import React, { useState } from 'react';
import { X, Send, CheckCircle2, Download, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  mode: 'inquiry' | 'deck';
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, mode, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const CONTACT_PHONE = '082125382809';
  const WA_NUMBER = '6282125382809';

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const intentTitle = mode === 'deck' 
      ? 'Request Official Investor Deck' 
      : 'Peluang Bisnis & Kemitraan Kurban Nasional';

    const waText = [
      `*Halo PT Distribusi Kurban Nasional,*`,
      `Saya ingin mengajukan *${intentTitle}*.`,
      ``,
      `*Data Pengirim:*`,
      `• *Nama:* ${formData.fullName}`,
      `• *Institusi/Perusahaan:* ${formData.company.trim() || '-'}`,
      `• *Email:* ${formData.email}`,
      `• *Nomor WhatsApp:* ${formData.phone}`,
      formData.message.trim() ? `• *Catatan/Pesan:* ${formData.message.trim()}` : `• *Catatan/Pesan:* -`,
      ``,
      `_Terkirim dari kurbannasional.com_`
    ].join('\n');

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;
    setLastWaUrl(waUrl);
    setSubmitted(true);

    // Try to open WhatsApp in a new tab
    window.open(waUrl, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={resetForm}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                {mode === 'deck' ? 'DOWNLOAD INVESTOR DECK' : 'INVESTMENT OPPORTUNITY DISCUSS'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {mode === 'deck' ? 'Request Official Investor Deck' : 'Diskusikan Peluang Bisnis'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                PT Distribusi Kurban Nasional — Hotline WA: <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="text-emerald-400 font-mono hover:underline font-bold">{CONTACT_PHONE}</a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Nama Lengkap *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Bpk / Ibu..."
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Perusahaan / Institusi</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="PT / Lembaga / Individual..."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nomor WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="081234567..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Catatan / Topik Diskusi</label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Berminat mendiskusikan skema investasi Rp 150 Juta atau strategic partnership..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-3 text-[11px] text-emerald-300 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Submit akan otomatis mengarahkan ke WhatsApp Tim Kurban Nasional ({CONTACT_PHONE}).</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950"
              >
                <Send className="w-4 h-4" />
                <span>{mode === 'deck' ? 'Kirim via WhatsApp & Request Deck' : 'Kirim via WhatsApp & Diskusikan'}</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-800/80 text-center">
              <span className="text-xs text-slate-400">Atau hubungi langsung: </span>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo PT Distribusi Kurban Nasional, saya ingin berdiskusi mengenai peluang bisnis & kurban.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>WhatsApp: {CONTACT_PHONE}</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Pesan WhatsApp Disiapkan!</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Data Anda telah dipersiapkan dan diarahkan ke WhatsApp resmi Kurban Nasional (<span className="text-emerald-400 font-mono font-bold">{CONTACT_PHONE}</span>). Jika jendela chat belum terbuka secara otomatis, silakan klik tombol di bawah.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={lastWaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang ({CONTACT_PHONE})</span>
              </a>

              {mode === 'deck' && (
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-emerald-300">
                  📄 Permintaan Investor Deck PDF telah dicatat untuk dikirimkan melalui WhatsApp.
                </div>
              )}
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs cursor-pointer"
            >
              Tutup
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
