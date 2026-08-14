import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { Sword, Layers, Sparkles, Plus, Trash2, Edit3, X, Check } from 'lucide-react';

export const GearPlanner = () => {
  const { language, getLocalized, t } = useLanguage();
  const { gears, addGear, updateGear, deleteGear } = useMetaData();

  const [editingGear, setEditingGear] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    nameEn: '',
    nameVi: '',
    icon: '⚔️',
    type: 'Combat Set',
    twoPieceEn: '',
    twoPieceVi: '',
    fourPieceEn: '',
    fourPieceVi: '',
    bestForEn: '',
    bestForVi: '',
    substatsEn: 'SPD > ATK% > Crit',
    substatsVi: 'Tốc độ > Tấn công% > Bạo kích',
  });

  const handleOpenAdd = () => {
    setEditingGear(null);
    setFormData({
      id: `gear_${Date.now()}`,
      nameEn: 'New Gear Set',
      nameVi: 'Bộ Trang Bị Mới',
      icon: '🛡️',
      type: 'Special Combat',
      twoPieceEn: 'ATK +10%',
      twoPieceVi: 'Tấn công +10%',
      fourPieceEn: 'Increases combat performance by 25%.',
      fourPieceVi: 'Tăng 25% hiệu quả chiến đấu.',
      bestForEn: 'All attackers',
      bestForVi: 'Tất cả tướng tấn công',
      substatsEn: 'SPD > ATK% > Crit',
      substatsVi: 'Tốc độ > Công% > Bạo kích',
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (gear) => {
    setEditingGear(gear);
    setFormData({
      id: gear.id,
      nameEn: gear.name.en,
      nameVi: gear.name.vi,
      icon: gear.icon || '⚔️',
      type: gear.type || 'Combat Set',
      twoPieceEn: gear.twoPiece.en,
      twoPieceVi: gear.twoPiece.vi,
      fourPieceEn: gear.fourPiece.en,
      fourPieceVi: gear.fourPiece.vi,
      bestForEn: gear.bestFor.en,
      bestForVi: gear.bestFor.vi,
      substatsEn: gear.recommendedSubstats?.en || '',
      substatsVi: gear.recommendedSubstats?.vi || '',
    });
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: formData.id,
      name: { en: formData.nameEn, vi: formData.nameVi },
      icon: formData.icon,
      type: formData.type,
      twoPiece: { en: formData.twoPieceEn, vi: formData.twoPieceVi },
      fourPiece: { en: formData.fourPieceEn, vi: formData.fourPieceVi },
      bestFor: { en: formData.bestForEn, vi: formData.bestForVi },
      recommendedSubstats: { en: formData.substatsEn, vi: formData.substatsVi },
    };

    if (editingGear) {
      updateGear(editingGear.id, payload);
    } else {
      addGear(payload);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-opm-borderHighlight/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40 uppercase tracking-wide">
                Gear & Rune Matrix
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                {gears.length} Sets Available
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100">
              {t('gears.title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t('gears.subtitle')}
            </p>
          </div>

          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-opm-yellow hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-glow-yellow transition-all self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Add Gear Set</span>
          </button>
        </div>
      </div>

      {/* Gear Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gears.map((gear) => (
          <div
            key={gear.id}
            className="glass-panel rounded-3xl border border-opm-border hover:border-opm-yellow/50 transition-all p-5 sm:p-6 flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 rounded-2xl bg-opm-bg/80 border border-opm-border">
                    {gear.icon || '⚔️'}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-opm-yellow transition-colors">
                      {getLocalized(gear.name)}
                    </h3>
                    <span className="text-xs text-opm-cyan font-medium">
                      {gear.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleOpenEdit(gear)}
                    className="p-1.5 rounded-lg bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-slate-300 hover:text-opm-yellow"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete ${getLocalized(gear.name)}?`)) {
                        deleteGear(gear.id);
                      }
                    }}
                    className="p-1.5 rounded-lg bg-opm-cardLight border border-opm-border hover:border-rose-500/50 text-slate-400 hover:text-rose-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Set Bonuses */}
              <div className="space-y-3">
                {/* 2-Piece */}
                <div className="p-3 rounded-2xl bg-opm-bg/70 border border-opm-border">
                  <span className="text-[11px] font-bold text-amber-400 block mb-0.5">
                    {t('gears.twoPiece')}
                  </span>
                  <p className="text-xs text-slate-200">
                    {getLocalized(gear.twoPiece)}
                  </p>
                </div>

                {/* 4-Piece */}
                <div className="p-3 rounded-2xl bg-opm-bg/70 border border-opm-yellow/30">
                  <span className="text-[11px] font-bold text-opm-yellow block mb-0.5">
                    {t('gears.fourPiece')}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {getLocalized(gear.fourPiece)}
                  </p>
                </div>

                {/* Best For */}
                <div className="pt-2 text-xs">
                  <span className="font-semibold text-slate-400 block mb-1">
                    {t('gears.bestFor')}:
                  </span>
                  <p className="text-slate-300 font-medium bg-opm-cardLight/50 p-2.5 rounded-xl border border-opm-border/60">
                    {getLocalized(gear.bestFor)}
                  </p>
                </div>
              </div>
            </div>

            {/* Recommended Sub-stats */}
            {gear.recommendedSubstats && (
              <div className="mt-4 pt-3 border-t border-opm-border/60 text-[11px] flex items-center justify-between text-slate-400">
                <span className="font-semibold text-slate-500">Sub-stats:</span>
                <span className="font-mono text-cyan-300 font-bold">
                  {getLocalized(gear.recommendedSubstats)}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Edit/Create Gear Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="relative w-full max-w-xl bg-opm-card border border-opm-borderHighlight rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 bg-gradient-to-r from-opm-cardLight to-opm-card border-b border-opm-border flex items-center justify-between">
              <h3 className="font-display font-black text-base sm:text-lg text-slate-100">
                {editingGear ? 'Edit Gear Set' : 'Add New Gear Set'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Name (EN)</label>
                  <input
                    type="text"
                    required
                    value={formData.nameEn}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Name (VI)</label>
                  <input
                    type="text"
                    required
                    value={formData.nameVi}
                    onChange={(e) => setFormData({ ...formData, nameVi: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Icon Emoji</label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Category / Type</label>
                  <input
                    type="text"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
              </div>

              {/* 2-Piece */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">2-Piece Bonus (EN)</label>
                  <input
                    type="text"
                    value={formData.twoPieceEn}
                    onChange={(e) => setFormData({ ...formData, twoPieceEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">2-Piece Bonus (VI)</label>
                  <input
                    type="text"
                    value={formData.twoPieceVi}
                    onChange={(e) => setFormData({ ...formData, twoPieceVi: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
              </div>

              {/* 4-Piece */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">4-Piece Bonus (EN)</label>
                  <textarea
                    rows={2}
                    value={formData.fourPieceEn}
                    onChange={(e) => setFormData({ ...formData, fourPieceEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">4-Piece Bonus (VI)</label>
                  <textarea
                    rows={2}
                    value={formData.fourPieceVi}
                    onChange={(e) => setFormData({ ...formData, fourPieceVi: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
              </div>

              {/* Best For */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Recommended For (EN)</label>
                  <input
                    type="text"
                    value={formData.bestForEn}
                    onChange={(e) => setFormData({ ...formData, bestForEn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Recommended For (VI)</label>
                  <input
                    type="text"
                    value={formData.bestForVi}
                    onChange={(e) => setFormData({ ...formData, bestForVi: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border text-white"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-opm-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-opm-yellow text-slate-950 font-black shadow-glow-yellow"
                >
                  Save Gear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
