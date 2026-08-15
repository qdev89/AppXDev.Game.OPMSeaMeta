import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { 
  ShieldCheck, 
  Crown, 
  Flame, 
  Zap, 
  Gauge, 
  Plus, 
  X, 
  Save, 
  Trash2, 
  Share2, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  Shield,
  Swords,
  Atom
} from 'lucide-react';

export const TeamBuilder = ({ onOpenCharacterDetails }) => {
  const { language, getLocalized, t } = useLanguage();
  const { 
    characters, 
    activeLineup, 
    setSlotCharacter, 
    clearSlot, 
    clearLineup, 
    savedPresets, 
    saveLineupPreset, 
    loadLineupPreset, 
    deleteLineupPreset,
    showToast 
  } = useMetaData();

  const [pickerSlotIndex, setPickerSlotIndex] = useState(null);
  const [presetNameInput, setPresetNameInput] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // Map slots to character objects
  const lineupUnits = activeLineup.map((charId) => 
    charId ? characters.find((c) => c.id === charId) : null
  );

  // Active units list
  const activeFilledUnits = lineupUnits.filter(Boolean);

  // Core Check
  const coreUnit = activeFilledUnits.find((u) => u.hasCore);

  // Count classes in team
  const classCounts = activeFilledUnits.reduce((acc, unit) => {
    acc[unit.class] = (acc[unit.class] || 0) + 1;
    return acc;
  }, {});

  // Standard Core requirement check: 1 Grappler, 1 Duelist, 1 HiTech, 1 Esper
  const isCoreActive = Boolean(
    coreUnit &&
    classCounts['Grappler'] >= 1 &&
    classCounts['Duelist'] >= 1 &&
    classCounts['HiTech'] >= 1 &&
    classCounts['Esper'] >= 1
  );

  // Total Team Power Estimate
  const totalPower = activeFilledUnits.reduce((sum, u) => {
    const atk = u.stats?.atk || 0;
    const hp = u.stats?.hp || 0;
    const def = u.stats?.def || 0;
    return sum + (atk * 2.5 + hp * 0.4 + def * 1.5);
  }, 0);

  // Speed-tuned order (Sorted by SPD descending)
  const speedSortedUnits = [...activeFilledUnits].sort((a, b) => (b.stats?.spd || 0) - (a.stats?.spd || 0));

  const handleSavePreset = (e) => {
    e.preventDefault();
    if (!presetNameInput.trim()) return;
    saveLineupPreset(presetNameInput.trim());
    setPresetNameInput('');
  };

  const handleShareLineup = () => {
    const lineupIds = activeLineup.map((id) => id || 'empty').join(',');
    const shareUrl = `${window.location.origin}${window.location.pathname}?tab=teambuilder&lineup=${encodeURIComponent(lineupIds)}`;
    
    navigator.clipboard.writeText(shareUrl);
    showToast(
      language === 'vi' 
        ? 'Đã sao chép liên kết chia sẻ Đội Hình 6v6!' 
        : 'Copied 6v6 Lineup share URL to clipboard!', 
      'success'
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Header Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-opm-borderHighlight/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40 uppercase tracking-wide">
                6-Slot Battle Grid
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                {activeFilledUnits.length} / 6 Units
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100">
              {t('teamBuilder.title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t('teamBuilder.subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleShareLineup}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-opm-card border border-opm-border hover:border-opm-cyan/50 text-slate-200 text-xs font-bold transition-all shadow-sm"
            >
              <Share2 className="w-4 h-4 text-opm-cyan" />
              <span>{t('teamBuilder.exportShareText')}</span>
            </button>
            <button
              onClick={clearLineup}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-950/60 border border-rose-800/60 hover:bg-rose-900 text-rose-300 text-xs font-bold transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('teamBuilder.clearLineup')}</span>
            </button>
          </div>
        </div>

        {/* Combat Stats & Power Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-opm-border/60">
          <div className="p-3.5 rounded-2xl bg-opm-bg/80 border border-opm-border">
            <span className="text-[11px] font-semibold text-slate-400 block">{t('teamBuilder.teamPower')}</span>
            <span className="font-mono font-black text-xl text-opm-yellow">
              {Math.round(totalPower).toLocaleString()}
            </span>
          </div>

          {/* Core Status */}
          <div className={`p-3.5 rounded-2xl border col-span-1 sm:col-span-2 ${
            !coreUnit 
              ? 'bg-opm-bg/80 border-opm-border text-slate-400'
              : isCoreActive
              ? 'bg-cyan-950/40 border-cyan-500/60 text-cyan-300 shadow-glow-cyan'
              : 'bg-rose-950/30 border-rose-600/50 text-rose-300'
          }`}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold uppercase">{t('teamBuilder.coreStatus')}</span>
              {coreUnit && (
                <span className="text-xs font-bold text-slate-200">
                  {getLocalized(coreUnit.name)}
                </span>
              )}
            </div>
            <p className="font-bold text-sm mt-0.5 flex items-center gap-1.5">
              <Crown className="w-4 h-4 shrink-0" />
              {!coreUnit ? (
                <span>{t('teamBuilder.noCoreSelected')}</span>
              ) : isCoreActive ? (
                <span>{t('teamBuilder.coreActive')}</span>
              ) : (
                <span>{t('teamBuilder.coreInactive')}</span>
              )}
            </p>
          </div>

          {/* Required Classes Indicator */}
          <div className="p-3.5 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center justify-around text-xs">
            <span className={`font-bold ${classCounts['Grappler'] ? 'text-amber-400' : 'text-slate-600'}`}>G: {classCounts['Grappler'] || 0}</span>
            <span className={`font-bold ${classCounts['Duelist'] ? 'text-red-400' : 'text-slate-600'}`}>D: {classCounts['Duelist'] || 0}</span>
            <span className={`font-bold ${classCounts['HiTech'] ? 'text-cyan-400' : 'text-slate-600'}`}>H: {classCounts['HiTech'] || 0}</span>
            <span className={`font-bold ${classCounts['Esper'] ? 'text-purple-400' : 'text-slate-600'}`}>E: {classCounts['Esper'] || 0}</span>
          </div>
        </div>
      </div>

      {/* 3x2 Tactical Formation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Front Row (Slots 0, 1, 2) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-display font-black text-sm text-opm-yellow uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>{t('teamBuilder.frontRow')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">Tank & Counter Focus</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[0, 1, 2].map((slotIdx) => {
              const unit = lineupUnits[slotIdx];
              return (
                <div
                  key={slotIdx}
                  onClick={() => setPickerSlotIndex(slotIdx)}
                  className={`group relative h-48 sm:h-56 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between p-3 overflow-hidden ${
                    unit
                      ? 'bg-opm-card/90 border-opm-borderHighlight hover:border-opm-yellow/60 shadow-lg'
                      : 'bg-opm-card/40 border-dashed border-slate-700 hover:border-opm-yellow/40 hover:bg-opm-card/60'
                  }`}
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-black/60 text-slate-400 z-10">
                    Pos #{slotIdx + 1}
                  </span>

                  {unit ? (
                    <>
                      {/* Character Avatar & Badges */}
                      <div className="relative w-full h-24 rounded-xl overflow-hidden mt-4 border border-opm-border bg-slate-950">
                        <img
                          src={unit.avatar || "avatars/ur_saitama.webp"}
                          alt={getLocalized(unit.name)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "avatars/ur_saitama.webp";
                          }}
                        />
                        <span className={`absolute bottom-1 right-1 px-1.5 py-0.2 text-[9px] font-black rounded uppercase text-white ${
                          unit.rarity === 'UR' ? 'rarity-badge-ur' :
                          unit.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' : 'rarity-badge-ssr'
                        }`}>
                          {unit.rarity}
                        </span>
                      </div>

                      <div className="my-auto">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100 truncate group-hover:text-opm-yellow">
                          {getLocalized(unit.name)}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <span>{unit.class}</span>
                          <span>•</span>
                          <span className="text-cyan-300 font-mono font-bold">{unit.stats?.spd} SPD</span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          clearSlot(slotIdx);
                        }}
                        className="w-full py-1 text-[11px] font-bold text-rose-400 hover:text-white hover:bg-rose-950 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>{t('teamBuilder.removeUnit')}</span>
                      </button>
                    </>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2 text-slate-500 group-hover:text-opm-yellow transition-colors">
                      <div className="p-3 rounded-full bg-slate-800/80 border border-slate-700 group-hover:border-opm-yellow/50">
                        <Plus className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold">{t('teamBuilder.slotEmpty')}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Back Row (Slots 3, 4, 5) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-display font-black text-sm text-opm-cyan uppercase tracking-wider flex items-center gap-2">
              <Swords className="w-4 h-4 text-red-400" />
              <span>{t('teamBuilder.backRow')}</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">DPS & Burst Hyper Carry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[3, 4, 5].map((slotIdx) => {
              const unit = lineupUnits[slotIdx];
              return (
                <div
                  key={slotIdx}
                  onClick={() => setPickerSlotIndex(slotIdx)}
                  className={`group relative h-48 sm:h-56 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between p-3 overflow-hidden ${
                    unit
                      ? 'bg-opm-card/90 border-opm-borderHighlight hover:border-opm-cyan/60 shadow-lg'
                      : 'bg-opm-card/40 border-dashed border-slate-700 hover:border-opm-cyan/40 hover:bg-opm-card/60'
                  }`}
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-black/60 text-slate-400 z-10">
                    Pos #{slotIdx + 1}
                  </span>

                  {unit ? (
                    <>
                      {/* Character Avatar & Badges */}
                      <div className="relative w-full h-24 rounded-xl overflow-hidden mt-4 border border-opm-border bg-slate-950">
                        <img
                          src={unit.avatar || "avatars/ur_saitama.webp"}
                          alt={getLocalized(unit.name)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "avatars/ur_saitama.webp";
                          }}
                        />
                        <span className={`absolute bottom-1 right-1 px-1.5 py-0.2 text-[9px] font-black rounded uppercase text-white ${
                          unit.rarity === 'UR' ? 'rarity-badge-ur' :
                          unit.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' : 'rarity-badge-ssr'
                        }`}>
                          {unit.rarity}
                        </span>
                      </div>

                      <div className="my-auto">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-slate-100 truncate group-hover:text-opm-cyan">
                          {getLocalized(unit.name)}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400">
                          <span>{unit.class}</span>
                          <span>•</span>
                          <span className="text-cyan-300 font-mono font-bold">{unit.stats?.spd} SPD</span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          clearSlot(slotIdx);
                        }}
                        className="w-full py-1 text-[11px] font-bold text-rose-400 hover:text-white hover:bg-rose-950 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>{t('teamBuilder.removeUnit')}</span>
                      </button>
                    </>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2 text-slate-500 group-hover:text-opm-cyan transition-colors">
                      <div className="p-3 rounded-full bg-slate-800/80 border border-slate-700 group-hover:border-opm-cyan/50">
                        <Plus className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold">{t('teamBuilder.slotEmpty')}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Speed Tuning & Turn Order Sequence */}
      <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-opm-borderHighlight/80">
        <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Gauge className="w-4 h-4 text-cyan-400" />
          <span>{t('teamBuilder.speedTuning')}</span>
        </h3>

        {speedSortedUnits.length === 0 ? (
          <p className="text-xs text-slate-400">{t('common.noResults')}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {speedSortedUnits.map((unit, idx) => (
              <div
                key={unit.id}
                className="p-3.5 rounded-2xl bg-opm-bg/80 border border-opm-border flex flex-col items-center text-center relative overflow-hidden"
              >
                <span className="absolute top-1.5 left-2 px-1.5 py-0.2 text-[9px] font-black rounded bg-opm-yellow text-slate-950">
                  #{idx + 1}
                </span>
                
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-2 mt-2 border border-opm-border">
                  <img src={unit.avatar} alt={getLocalized(unit.name)} className="w-full h-full object-cover" />
                </div>
                
                <h4 className="font-bold text-xs text-slate-100 truncate w-full">
                  {getLocalized(unit.name)}
                </h4>
                
                <span className="font-mono text-xs font-black text-cyan-400 mt-1">
                  {unit.stats?.spd} SPD
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved Lineup Presets Section */}
      <div className="glass-panel p-5 sm:p-7 rounded-3xl border border-opm-borderHighlight/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Save className="w-4 h-4 text-amber-400" />
            <span>{t('teamBuilder.lineupPresets')}</span>
          </h3>

          {/* Preset Save Form */}
          <form onSubmit={handleSavePreset} className="flex items-center gap-2">
            <input
              type="text"
              required
              value={presetNameInput}
              onChange={(e) => setPresetNameInput(e.target.value)}
              placeholder={t('teamBuilder.presetNamePlaceholder')}
              className="px-3.5 py-1.5 rounded-xl bg-opm-bg border border-opm-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-opm-yellow"
            />
            <button
              type="submit"
              className="px-3.5 py-1.5 rounded-xl bg-opm-yellow text-slate-950 font-bold text-xs shadow-glow-yellow hover:bg-amber-400 transition-colors shrink-0"
            >
              {t('teamBuilder.saveCurrentPreset')}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {savedPresets.map((preset) => (
            <div
              key={preset.id}
              className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-center justify-between gap-3 group hover:border-opm-yellow/40 transition-colors"
            >
              <div className="min-w-0">
                <h4 className="font-bold text-xs sm:text-sm text-slate-100 truncate group-hover:text-opm-yellow">
                  {preset.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {preset.slots.filter(Boolean).length} / 6 Units
                </p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => loadLineupPreset(preset.id)}
                  className="px-3 py-1 rounded-lg bg-opm-cardLight border border-opm-border text-xs font-bold text-slate-200 hover:bg-opm-yellow hover:text-slate-950 transition-colors"
                >
                  Load
                </button>
                <button
                  onClick={() => deleteLineupPreset(preset.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Character Picker Modal / Drawer */}
      {pickerSlotIndex !== null && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-opm-card border border-opm-borderHighlight rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-opm-cardLight to-opm-card border-b border-opm-border flex items-center justify-between">
              <div>
                <h3 className="font-display font-black text-base sm:text-lg text-slate-100">
                  Select Unit for Position #{pickerSlotIndex + 1} ({pickerSlotIndex < 3 ? 'Front Row' : 'Back Row'})
                </h3>
              </div>
              <button
                onClick={() => setPickerSlotIndex(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Search */}
            <div className="p-4 border-b border-opm-border/60 bg-opm-bg/50">
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={t('common.search')}
                className="w-full px-3.5 py-2 rounded-xl bg-opm-card border border-opm-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-opm-yellow"
              />
            </div>

            {/* Unit Grid */}
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {characters
                .filter((c) => {
                  const query = searchFilter.toLowerCase();
                  return (
                    c.name.en.toLowerCase().includes(query) ||
                    c.name.vi.toLowerCase().includes(query) ||
                    c.class.toLowerCase().includes(query) ||
                    c.faction.toLowerCase().includes(query)
                  );
                })
                .map((char) => {
                  const isCurrent = activeLineup[pickerSlotIndex] === char.id;
                  const isAlreadyInTeam = activeLineup.includes(char.id) && !isCurrent;
                  return (
                    <div
                      key={char.id}
                      onClick={() => {
                        setSlotCharacter(pickerSlotIndex, char.id);
                        setPickerSlotIndex(null);
                      }}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isCurrent
                          ? 'bg-opm-yellow/20 border-opm-yellow text-white'
                          : isAlreadyInTeam
                          ? 'bg-slate-900/50 border-slate-800 opacity-60 hover:opacity-100'
                          : 'bg-opm-bg/80 border-opm-border hover:border-opm-yellow/50'
                      }`}
                    >
                      <div className="w-11 h-11 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-opm-border">
                        <img src={char.avatar} alt={getLocalized(char.name)} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-xs truncate">{getLocalized(char.name)}</h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                          <span>{char.rarity}</span>
                          <span>•</span>
                          <span>{char.class}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
