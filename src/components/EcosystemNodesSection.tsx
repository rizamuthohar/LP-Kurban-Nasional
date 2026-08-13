import React, { useState } from 'react';
import { Network, ShieldCheck, Building, Heart, Users, Landmark, Wallet, Sparkles } from 'lucide-react';
import { EcosystemNode } from '../types';

export const EcosystemNodesSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('dd');

  const nodes: EcosystemNode[] = [
    {
      id: 'dd',
      name: 'Dompet Dhuafa',
      category: 'institution',
      description: 'Lembaga amil zakat nasional terkemuka dengan jaringan distribusi pelosok Nusantara terluas.',
      metrics: 'Strategic Anchor Target',
      isAnchor: true
    },
    {
      id: 'rz',
      name: 'Rumah Zakat',
      category: 'institution',
      description: 'Mitra pelaksana kurban dengan program Superqurban olahan daging kornet/rendang.',
      metrics: 'Partner Pelaksana'
    },
    {
      id: 'lazismu',
      name: 'LAZISMU',
      category: 'institution',
      description: 'Lembaga zakat berskala nasional berbasis jaringan Muhammadiyah di 34 provinsi.',
      metrics: 'Jaringan Nasional'
    },
    {
      id: 'lazisnu',
      name: 'LAZISNU',
      category: 'institution',
      description: 'Lembaga amil zakat berbasis massa Nahdlatul Ulama dengan jangkauan akar rumput.',
      metrics: 'Jaringan Organisasi'
    },
    {
      id: 'hi',
      name: 'Human Initiative',
      category: 'institution',
      description: 'Lembaga kemanusiaan global yang fokus pada distribusi wilayah 3T dan bencana.',
      metrics: 'Mitra Kemanusiaan'
    },
    {
      id: 'asar',
      name: 'ASAR Humanity',
      category: 'institution',
      description: 'Lembaga aksi cepat kemanusiaan dan penyaluran hewan kurban daerah terisolir.',
      metrics: 'Mitra Penyaluran'
    },
    {
      id: 'farmers',
      name: 'Peternak Terverifikasi',
      category: 'partner',
      description: 'Komunitas peternak lokal terkurasi dengan standar kesehatan hewan & bobot terjamin.',
      metrics: 'Supply Side Partner'
    },
    {
      id: 'payments',
      name: 'Payment Gateway',
      category: 'partner',
      description: 'Dukungan QRIS, Virtual Account, E-Wallet, dan Kartu Kredit dengan otomasi pendaftaran.',
      metrics: 'Financial Infrastructure'
    },
    {
      id: 'corporate',
      name: 'Corporate & CSR',
      category: 'user',
      description: 'Perusahaan yang mengalokasikan dana CSR atau program kurban karyawan secara tersentralisasi.',
      metrics: 'B2B Qurban Channel'
    },
    {
      id: 'mudhohi',
      name: 'Masyarakat / Mudhohi',
      category: 'user',
      description: 'Masyarakat individu dan keluarga yang membeli hewan kurban secara transparan dan terpercaya.',
      metrics: 'Demand Side User'
    }
  ];

  const activeNodeData = nodes.find(n => n.id === selectedNode) || nodes[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5 text-emerald-400" />
            <span>NATIONAL INTEGRATION MAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Satu Platform. Banyak Lembaga.{' '}
            <span className="text-emerald-400">Satu Ekosistem.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Kurban Nasional menjadi titik temu yang mengkonsolidasikan seluruh pemangku kepentingan.
          </p>
        </div>

        {/* Node Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Diagram Visual */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 relative shadow-2xl">
            
            {/* Central Node */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 rounded-2xl border-2 border-emerald-400 shadow-xl text-center max-w-xs w-full animate-kn-float">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200 block mb-1">
                  CENTRAL HUB
                </span>
                <h3 className="text-xl font-black font-display tracking-tight">KURBAN NASIONAL</h3>
                <span className="text-xs text-emerald-100 font-medium">Digital Infrastructure Platform</span>
              </div>
            </div>

            {/* Surrounding Nodes Grid */}
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 text-center">
              HUBUNGAN MITRA EKOSISTEM (Klik Node untuk Detail)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {nodes.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500 text-white border-emerald-300 shadow-lg shadow-emerald-950 scale-105 z-10'
                        : node.isAnchor
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/40 hover:bg-amber-500/20'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] opacity-75 uppercase font-mono">
                        {node.category}
                      </span>
                      {node.isAnchor && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      )}
                    </div>
                    <div className="text-xs font-bold truncate">{node.name}</div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right / Selected Node Information Card */}
          <div className="lg:col-span-5 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-emerald-500/30 flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {activeNodeData.category.toUpperCase()}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {activeNodeData.metrics}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {activeNodeData.name}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {activeNodeData.description}
              </p>

              {activeNodeData.isAnchor && (
                <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xl text-amber-200 text-xs mb-4">
                  <strong>Anchor Partnership Strategy:</strong> Menggandeng lembaga jangkar nasional terbesar untuk membangun trust awal dan efek jaringan bagi mitra lainnya.
                </div>
              )}
            </div>

            <div className="border-t border-slate-800 pt-4 text-xs text-slate-400 flex items-center justify-between">
              <span>Satu Integrasi API</span>
              <span className="text-emerald-400 font-semibold">Tersinkronisasi 24/7</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
