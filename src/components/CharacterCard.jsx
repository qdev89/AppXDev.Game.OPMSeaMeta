import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { 
  Zap, 
  Shield, 
  Swords, 
  Atom, 
  Crown, 
  Sparkles, 
  Plus, 
  Check, 
  Eye, 
  Share2,
  Gauge
} from 'lucide-react';

export const CharacterCard = ({ 
  character, 
  onViewDetails, 
  onEdit, 
  isInTeam = false,
  onAddToTeam 
}) => {
  const { language, getLocalized, t } = useLanguage();
  const { deleteCharacter, cloneCharacter } = useMetaData();

  const classIcons = {
    Grappler: <Shield className="w-3.5 h-3.5 text-amber-400" />,
    Duelist: <Swords className="w-3.5 h-3.5 text-red-400" />,
    HiTech: <Zap className="w-3.5 h-3.5 text-cyan-400" />,
    Esper: <Atom className="w-3.5 h-3.5 text-purple-400" />,
  };

  const factionColors = {
    Hero: 'text-sky-400 bg-sky-950/60 border-sky-800/60',
    Monster: 'text-rose-400 bg-rose-950/60 border-rose-800/60',
    Outlaw: 'text-amber-400 bg-amber-950/60 border-amber-800/60',
    Martial: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60',
  };

  const rarityBorders = {
    UR: 'border-rose-500/70 shadow-glow-ur bg-gradient-to-b from-rose-950/20 to-opm-card',
    'SSR+': 'border-amber-500/70 shadow-glow-yellow bg-gradient-to-b from-amber-950/20 to-opm-card',
    SSR: 'border-yellow-500/50 bg-gradient-to-b from-yellow-950/15 to-opm-card',
    SR: 'border-purple-500/40 bg-gradient-to-b from-purple-950/15 to-opm-card',
    R: 'border-blue-500/30 bg-opm-card',
  };

  const tierColors = {
    SSS: 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-glow-red',
    SS: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-glow-yellow',
    S: 'bg-amber-400 text-slate-950',
    A: 'bg-purple-500 text-white',
    B: 'bg-blue-600 text-white',
  };

  return (
    <div className={`group relative rounded-2xl border ${rarityBorders[character.rarity] || 'border-opm-border bg-opm-card'} backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between`}>
      
      {/* Top Banner / Rarity & Tier Bar */}
      <div className="p-3.5 pb-2">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          
          {/* Rarity & Core Tag */}
          <div className="flex items-center gap-1.5">
            <span className={`px-2 py-0.5 text-[11px] font-black rounded-md tracking-wider uppercase text-white ${
              character.rarity === 'UR' ? 'rarity-badge-ur' :
              character.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' :
              character.rarity === 'SSR' ? 'rarity-badge-ssr text-black' :
              character.rarity === 'SR' ? 'rarity-badge-sr' : 'rarity-badge-r'
            }`}>
              {character.rarity}
            </span>

            {character.hasCore && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 animate-pulse">
                <Crown className="w-3 h-3 text-cyan-400" />
                <span>CORE</span>
              </span>
            )}
          </div>

          {/* Tier Badge */}
          <span className={`px-2.5 py-0.5 text-[11px] font-black rounded-full uppercase tracking-wide ${tierColors[character.tier] || 'bg-slate-700'}`}>
            {character.tier}
          </span>
        </div>

        {/* Character Main Header Info */}
        <div className="flex items-start gap-3">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-800/80 border border-opm-border flex-shrink-0 group-hover:border-opm-yellow/50 transition-colors">
            {character.avatar ? (
              <img 
                src={character.avatar} 
                alt={getLocalized(character.name)} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "avatars/ur_saitama.webp";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-display font-black text-lg text-opm-yellow">
                {getLocalized(character.name).charAt(0)}
              </div>
            )}
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm py-0.5 text-center text-[9px] font-bold text-slate-300">
              {character.class}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-display font-bold text-base text-slate-100 truncate group-hover:text-opm-yellow transition-colors">
              {getLocalized(character.name)}
            </h3>
            <p className="text-xs text-slate-400 truncate mb-1.5">
              {getLocalized(character.title) || character.faction}
            </p>

            {/* Faction & Role Badges */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`px-1.5 py-0.5 text-[10px] font-semibold rounded border flex items-center gap-1 ${factionColors[character.faction] || 'text-slate-300 bg-slate-900 border-slate-700'}`}>
                {t(`factions.${character.faction}`) || character.faction}
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded border border-slate-700/80 bg-slate-900/60 text-slate-300 flex items-center gap-1">
                {classIcons[character.class]}
                {t(`classes.${character.class}`) || character.class}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Attribute Pills */}
        <div className="grid grid-cols-4 gap-1.5 mt-3 py-2 px-2.5 rounded-xl bg-opm-bg/70 border border-opm-border/60 text-[11px]">
          <div className="flex flex-col">
            <span className="text-[9px] font-semibold text-slate-400 uppercase">ATK</span>
            <span className="font-mono font-bold text-amber-400">{character.stats?.atk?.toLocaleString() || '--'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-semibold text-slate-400 uppercase">HP</span>
            <span className="font-mono font-bold text-emerald-400">{character.stats?.hp?.toLocaleString() || '--'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-semibold text-slate-400 uppercase">DEF</span>
            <span className="font-mono font-bold text-sky-400">{character.stats?.def?.toLocaleString() || '--'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-semibold text-slate-400 uppercase flex items-center gap-0.5">
              <Gauge className="w-2.5 h-2.5 text-cyan-400" />
              SPD
            </span>
            <span className="font-mono font-bold text-cyan-300">{character.stats?.spd || '--'}</span>
          </div>
        </div>

        {/* Recommended Gear Tags */}
        {character.recommendedGears?.length > 0 && (
          <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-400 overflow-hidden">
            <span className="font-semibold text-slate-500 shrink-0">Gear:</span>
            <div className="flex gap-1 truncate">
              {character.recommendedGears.map((g, idx) => (
                <span key={idx} className="px-1.5 py-0.2 rounded bg-opm-border/60 text-slate-300 text-[9px] font-medium">
                  {g}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-3 pt-2 bg-opm-bg/40 border-t border-opm-border/50 flex items-center justify-between gap-1.5">
        
        {/* Main Action: Add to Lineup */}
        <button
          onClick={() => onAddToTeam && onAddToTeam(character.id)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all ${
            isInTeam
              ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 hover:bg-emerald-900'
              : 'bg-opm-cardLight hover:bg-opm-yellow hover:text-slate-950 text-slate-200 border border-opm-borderHighlight'
          }`}
        >
          {isInTeam ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('common.inTeam')}</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>{t('common.addToTeam')}</span>
            </>
          )}
        </button>

        {/* Detail Button */}
        <button
          onClick={() => onViewDetails(character)}
          className="p-1.5 rounded-lg bg-opm-cardLight border border-opm-border hover:border-opm-cyan/50 text-slate-300 hover:text-opm-cyan transition-colors"
          title={t('common.details')}
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Share Hero Link Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const shareUrl = `${window.location.origin}${window.location.pathname}?hero=${character.id}`;
            navigator.clipboard.writeText(shareUrl);
            showToast(language === 'vi' ? `Đã sao chép link chia sẻ ${getLocalized(character.name)}!` : `Copied share link for ${getLocalized(character.name)}!`, 'success');
          }}
          className="p-1.5 rounded-lg bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-slate-300 hover:text-opm-yellow transition-colors"
          title={language === 'vi' ? 'Chia sẻ link tướng' : 'Share hero link'}
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
