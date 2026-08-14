import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { Trophy, Swords, Shield, Atom, Zap, Crown, Flame, Filter } from 'lucide-react';

export const TierList = ({ onSelectCharacter }) => {
  const { language, getLocalized, t } = useLanguage();
  const { characters } = useMetaData();

  const [selectedMode, setSelectedMode] = useState('pvp'); // 'pvp' | 'apex' | 'pve'
  const [filterClass, setFilterClass] = useState('All');
  const [filterFaction, setFilterFaction] = useState('All');

  const tierRows = [
    {
      tier: 'SSS',
      label: t('tiers.SSS'),
      badgeColor: 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-glow-red',
      borderColor: 'border-red-500/40',
      bgGlow: 'bg-red-950/15',
    },
    {
      tier: 'SS',
      label: t('tiers.SS'),
      badgeColor: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-glow-yellow',
      borderColor: 'border-amber-500/40',
      bgGlow: 'bg-amber-950/15',
    },
    {
      tier: 'S',
      label: t('tiers.S'),
      badgeColor: 'bg-amber-400 text-black',
      borderColor: 'border-yellow-500/30',
      bgGlow: 'bg-yellow-950/10',
    },
    {
      tier: 'A',
      label: t('tiers.A'),
      badgeColor: 'bg-purple-600 text-white',
      borderColor: 'border-purple-500/30',
      bgGlow: 'bg-purple-950/10',
    },
    {
      tier: 'B',
      label: t('tiers.B'),
      badgeColor: 'bg-blue-600 text-white',
      borderColor: 'border-blue-500/20',
      bgGlow: 'bg-blue-950/10',
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-opm-borderHighlight/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40 uppercase tracking-wide">
                SEA Meta Tier Matrix
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                FingerFun SEA Calibration
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100">
              {t('tierList.title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t('tierList.subtitle')}
            </p>
          </div>

          {/* Mode Selector Switch */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-opm-bg border border-opm-border self-start md:self-auto">
            <button
              onClick={() => setSelectedMode('pvp')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMode === 'pvp'
                  ? 'bg-opm-cardLight text-opm-yellow shadow-sm border border-opm-yellow/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('tierList.modePvP')}
            </button>
            <button
              onClick={() => setSelectedMode('apex')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMode === 'apex'
                  ? 'bg-opm-cardLight text-opm-yellow shadow-sm border border-opm-yellow/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('tierList.modeApex')}
            </button>
            <button
              onClick={() => setSelectedMode('pve')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedMode === 'pve'
                  ? 'bg-opm-cardLight text-opm-yellow shadow-sm border border-opm-yellow/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t('tierList.modePvE')}
            </button>
          </div>
        </div>

        {/* Quick Filtering Pills */}
        <div className="flex items-center gap-2 mt-6 pt-5 border-t border-opm-border/60 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('common.filter')}:</span>
          </div>

          {/* Class Filter */}
          {['All', 'Grappler', 'Duelist', 'HiTech', 'Esper'].map((cls) => (
            <button
              key={cls}
              onClick={() => setFilterClass(cls)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                filterClass === cls
                  ? 'bg-opm-yellow text-slate-950 font-black'
                  : 'bg-opm-bg border border-opm-border text-slate-300 hover:border-slate-600'
              }`}
            >
              {cls === 'All' ? t('common.all') : t(`classes.${cls}`) || cls}
            </button>
          ))}
        </div>
      </div>

      {/* Tier Rows Grid */}
      <div className="space-y-4">
        {tierRows.map((row) => {
          const tierCharacters = characters.filter((c) => {
            const matchesTier = c.tier === row.tier;
            const matchesClass = filterClass === 'All' || c.class === filterClass;
            const matchesFaction = filterFaction === 'All' || c.faction === filterFaction;
            return matchesTier && matchesClass && matchesFaction;
          });

          return (
            <div
              key={row.tier}
              className={`rounded-3xl border ${row.borderColor} ${row.bgGlow} p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-stretch`}
            >
              {/* Tier Left Header Badge */}
              <div className="w-full md:w-36 flex md:flex-col items-center justify-between md:justify-center p-4 rounded-2xl bg-opm-bg/80 border border-opm-border shrink-0 gap-1 text-center">
                <span className={`px-4 py-1.5 rounded-xl font-display font-black text-xl sm:text-2xl tracking-wider ${row.badgeColor}`}>
                  {row.tier}
                </span>
                <span className="text-[10px] text-slate-400 font-medium max-w-[110px] hidden md:block mt-1">
                  {row.label.split(' - ')[1] || row.label}
                </span>
                <span className="text-xs font-bold text-slate-400 md:hidden">
                  {tierCharacters.length} Units
                </span>
              </div>

              {/* Characters in Tier */}
              <div className="flex-1 flex flex-wrap gap-3 items-center min-h-[90px]">
                {tierCharacters.length === 0 ? (
                  <p className="text-xs text-slate-500 italic p-3">{t('common.noResults')}</p>
                ) : (
                  tierCharacters.map((char) => (
                    <div
                      key={char.id}
                      onClick={() => onSelectCharacter(char)}
                      className="group relative w-20 sm:w-24 rounded-2xl bg-opm-card border border-opm-border hover:border-opm-yellow hover:-translate-y-1 transition-all cursor-pointer overflow-hidden p-2 flex flex-col items-center text-center shadow-md"
                    >
                      {/* Avatar */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden mb-1.5 border border-opm-border bg-slate-950">
                        <img
                          src={char.avatar || "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&auto=format&fit=crop&q=80"}
                          alt={getLocalized(char.name)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                        <span className={`absolute bottom-0 right-0 px-1 text-[8px] font-black rounded uppercase text-white ${
                          char.rarity === 'UR' ? 'rarity-badge-ur' :
                          char.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' : 'rarity-badge-ssr text-black'
                        }`}>
                          {char.rarity}
                        </span>
                      </div>

                      <span className="font-bold text-[11px] text-slate-200 truncate w-full group-hover:text-opm-yellow">
                        {getLocalized(char.name)}
                      </span>

                      {char.hasCore && (
                        <span className="absolute top-1 left-1 p-0.5 rounded bg-cyan-950/90 text-cyan-400 border border-cyan-500/40">
                          <Crown className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
