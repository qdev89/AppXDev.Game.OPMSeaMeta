import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Shield, 
  Swords, 
  Zap, 
  Atom, 
  Crown, 
  Sparkles, 
  Flame, 
  Plus, 
  Check, 
  Edit3,
  BookOpen,
  Award,
  Layers,
  Crosshair,
  AlertTriangle
} from 'lucide-react';

export const CharacterModal = ({ 
  character, 
  onClose, 
  onEdit, 
  isInTeam = false, 
  onAddToTeam 
}) => {
  const { language, getLocalized, t } = useLanguage();

  if (!character) return null;

  const classIcons = {
    Grappler: <Shield className="w-4 h-4 text-amber-400" />,
    Duelist: <Swords className="w-4 h-4 text-red-400" />,
    HiTech: <Zap className="w-4 h-4 text-cyan-400" />,
    Esper: <Atom className="w-4 h-4 text-purple-400" />,
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-opm-card border border-opm-borderHighlight rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Banner */}
        <div className="relative p-5 sm:p-8 bg-gradient-to-r from-opm-card via-slate-900 to-opm-cardLight border-b border-opm-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-opm-yellow/50 shadow-glow-yellow bg-slate-950 flex-shrink-0">
              <img 
                src={character.avatar || "avatars/ur_saitama.webp"} 
                alt={getLocalized(character.name)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "avatars/ur_saitama.webp";
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`px-2.5 py-0.5 text-xs font-black rounded-md tracking-wider uppercase text-white ${
                  character.rarity === 'UR' ? 'rarity-badge-ur' :
                  character.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' :
                  character.rarity === 'SSR' ? 'rarity-badge-ssr text-black' :
                  character.rarity === 'SR' ? 'rarity-badge-sr' : 'rarity-badge-r'
                }`}>
                  {character.rarity}
                </span>

                <span className="px-2.5 py-0.5 text-xs font-black rounded-full bg-opm-yellow text-black uppercase">
                  {t('common.tier')}: {character.tier}
                </span>

                {character.hasCore && (
                  <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                    <Crown className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CORE MASTER</span>
                  </span>
                )}
              </div>

              <h2 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                {getLocalized(character.name)}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {getLocalized(character.title) || `${character.faction} • ${character.class}`}
              </p>
            </div>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => onEdit(character)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-xs font-bold text-slate-200 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-opm-yellow" />
              <span>{t('common.edit')}</span>
            </button>

            <button
              onClick={() => onAddToTeam && onAddToTeam(character.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isInTeam
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50'
                  : 'bg-opm-yellow hover:bg-amber-400 text-slate-950'
              }`}
            >
              {isInTeam ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{isInTeam ? t('common.inTeam') : t('common.addToTeam')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          
          {/* Base Stats Matrix */}
          <div>
            <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-opm-yellow" />
              <span>{t('common.stats')}</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-2xl bg-opm-bg/80 border border-opm-border">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">ATK</span>
                <p className="font-mono font-black text-xl text-amber-400 mt-0.5">
                  {character.stats?.atk?.toLocaleString() || '--'}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-opm-bg/80 border border-opm-border">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">HP</span>
                <p className="font-mono font-black text-xl text-emerald-400 mt-0.5">
                  {character.stats?.hp?.toLocaleString() || '--'}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-opm-bg/80 border border-opm-border">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">DEF</span>
                <p className="font-mono font-black text-xl text-sky-400 mt-0.5">
                  {character.stats?.def?.toLocaleString() || '--'}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-opm-bg/80 border border-opm-border">
                <span className="text-[11px] font-semibold text-slate-400 uppercase">SPD (Tốc Độ)</span>
                <p className="font-mono font-black text-xl text-cyan-300 mt-0.5">
                  {character.stats?.spd || '--'}
                </p>
              </div>
            </div>
          </div>

          {/* Combat Skills Breakdown */}
          <div>
            <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Swords className="w-4 h-4 text-opm-red" />
              <span>{t('common.skills')}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Normal Attack */}
              {character.skills?.normal && (
                <div className="p-4 rounded-2xl bg-opm-bg/60 border border-opm-border">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-800 text-slate-300">
                      {t('skills.normal')}
                    </span>
                    <span className="font-bold text-xs text-amber-300">
                      {getLocalized(character.skills.normal.name)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalized(character.skills.normal.desc)}
                  </p>
                </div>
              )}

              {/* Ultimate Skill */}
              {character.skills?.ultimate && (
                <div className="p-4 rounded-2xl bg-opm-bg/60 border border-amber-500/30 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-950 text-amber-300 border border-amber-500/40">
                      {t('skills.ultimate')}
                    </span>
                    <span className="font-bold text-xs text-amber-300">
                      {getLocalized(character.skills.ultimate.name)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalized(character.skills.ultimate.desc)}
                  </p>
                </div>
              )}

              {/* Keepsake / Ultra Ultimate */}
              {character.skills?.ultraUltimate && (
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/30 to-opm-bg border border-rose-500/40">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-rose-900 text-rose-200 border border-rose-400/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-rose-300" />
                      {t('skills.ultraUltimate')}
                    </span>
                    <span className="font-bold text-xs text-rose-300">
                      {getLocalized(character.skills.ultraUltimate.name)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {getLocalized(character.skills.ultraUltimate.desc)}
                  </p>
                </div>
              )}

              {/* Passive Talent */}
              {character.skills?.passive && (
                <div className="p-4 rounded-2xl bg-opm-bg/60 border border-purple-500/30">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-purple-950 text-purple-300 border border-purple-500/40">
                      {t('skills.passive')}
                    </span>
                    <span className="font-bold text-xs text-purple-300">
                      {getLocalized(character.skills.passive.name)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalized(character.skills.passive.desc)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Core Skill (If applicable) */}
          {character.hasCore && character.skills?.coreSkill && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-opm-bg to-cyan-950/20 border border-cyan-500/40 shadow-glow-cyan">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-cyan-400 animate-bounce-short" />
                <h4 className="font-display font-black text-sm text-cyan-300 uppercase tracking-wide">
                  {getLocalized(character.skills.coreSkill.name)}
                </h4>
              </div>
              
              <p className="text-xs font-semibold text-cyan-400/90 mb-3 bg-cyan-950/60 p-2 rounded-lg border border-cyan-800/40">
                {getLocalized(character.skills.coreSkill.requirement)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-cyan-900/50">
                  <span className="font-bold text-cyan-300 block mb-1">{t('skills.coreBasic')}</span>
                  <p className="text-slate-300 leading-relaxed">{getLocalized(character.skills.coreSkill.basicEffect)}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-cyan-900/50">
                  <span className="font-bold text-cyan-300 block mb-1">{t('skills.coreAdvanced')}</span>
                  <p className="text-slate-300 leading-relaxed">{getLocalized(character.skills.coreSkill.advancedEffect)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Awakening Perks */}
          {character.skills?.awakening && (
            <div>
              <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>{t('common.awakening')}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-opm-bg/60 border border-amber-500/20">
                  <span className="text-[11px] font-bold text-amber-400 block mb-1">{t('skills.awakening1')}</span>
                  <p className="text-xs text-slate-300">{getLocalized(character.skills.awakening.stage1)}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-opm-bg/60 border border-amber-500/20">
                  <span className="text-[11px] font-bold text-amber-400 block mb-1">{t('skills.awakening2')}</span>
                  <p className="text-xs text-slate-300">{getLocalized(character.skills.awakening.stage2)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Meta Strategy & Synergies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Recommended Gears */}
            <div className="p-4 rounded-2xl bg-opm-bg/60 border border-opm-border">
              <h4 className="font-bold text-xs text-opm-yellow uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{t('common.recommendedGear')}</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {character.recommendedGears?.map((gear, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-opm-card border border-opm-borderHighlight font-bold text-xs text-slate-200">
                    {gear}
                  </span>
                ))}
              </div>
            </div>

            {/* Synergies */}
            <div className="p-4 rounded-2xl bg-opm-bg/60 border border-opm-border">
              <h4 className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Crosshair className="w-4 h-4" />
                <span>{t('common.synergy')}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {getLocalized(character.synergies)}
              </p>
            </div>
          </div>

          {/* Counters */}
          {character.counters && (
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-800/40">
              <h4 className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{t('common.counters')}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {getLocalized(character.counters)}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
