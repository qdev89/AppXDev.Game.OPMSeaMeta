import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { defaultTeamGuides } from '../data/defaultTeamGuides';
import { 
  BookOpen, 
  Swords, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Award,
  Crown,
  ChevronRight,
  Search,
  Filter,
  Layers,
  Crosshair,
  Sprout,
  Share2
} from 'lucide-react';

export const TeamStrategyGuide = ({ onSwitchTab }) => {
  const { language, getLocalized } = useLanguage();
  const { characters, setSlotCharacter, showToast } = useMetaData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: { en: 'All Builds (13)', vi: 'Tất Cả (13)' }, icon: Layers },
    { id: 'endgame', label: { en: '🔥 SSS Endgame Meta', vi: '🔥 SSS Endgame Meta' }, icon: Crown },
    { id: 'midgame', label: { en: '⚔️ Mid-Game Transition', vi: '⚔️ Mid-Game Chuyển Giao' }, icon: Swords },
    { id: 'early', label: { en: '🌱 Early / F2P Starter', vi: '🌱 Tân Thủ / F2P Đầu Game' }, icon: Sprout },
    { id: 'boss', label: { en: '👑 Club Boss & PvE', vi: '👑 Săn Boss & Vượt Ải' }, icon: Crosshair },
  ];

  const getHeroObj = (heroId) => {
    return characters.find((c) => c.id === heroId);
  };

  const handleApplyLineup = (guide) => {
    const formationSlots = [
      guide.formation.frontRow[0],
      guide.formation.frontRow[1],
      guide.formation.frontRow[2],
      guide.formation.backRow[0],
      guide.formation.backRow[1],
      guide.formation.backRow[2]
    ];

    formationSlots.forEach((charId, idx) => {
      if (charId) {
        setSlotCharacter(idx, charId);
      }
    });

    showToast(
      language === 'vi'
        ? `Đã nạp đội hình [${getLocalized(guide.name)}] vào Trình Xếp Đội Hình 6v6!`
        : `Loaded [${getLocalized(guide.name)}] into Lineup Builder!`,
      'success'
    );

    if (onSwitchTab) {
      onSwitchTab('teambuilder');
    }
  };

  const filteredGuides = defaultTeamGuides.filter((guide) => {
    // Category filter
    if (selectedCategory === 'endgame' && guide.tier !== 'SSS' && !guide.id.includes('burst')) return false;
    if (selectedCategory === 'midgame' && guide.tier !== 'SS') return false;
    if (selectedCategory === 'early' && guide.tier !== 'A') return false;
    if (selectedCategory === 'boss' && !guide.id.includes('boss') && !guide.id.includes('xcity')) return false;

    // Search query
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const nameMatch = getLocalized(guide.name).toLowerCase().includes(q);
    const coreMatch = guide.coreHero.toLowerCase().includes(q);
    const heroMatch = [...guide.formation.frontRow, ...guide.formation.backRow].some(hId => {
      const hero = getHeroObj(hId);
      return hero && getLocalized(hero.name).toLowerCase().includes(q);
    });
    return nameMatch || coreMatch || heroMatch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-amber-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-opm-yellow text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-glow-yellow">
              <Swords className="w-3.5 h-3.5 fill-current" />
              <span>META META STRATEGY BLUEPRINT</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
              {language === 'vi' ? 'Cẩm Nang Toàn Bộ Đội Hình' : 'All Meta Lineups'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Chiến Thuật Xếp Đội Hình & Thứ Tự Tốc Độ (Speed Tuning)' : 'Tournament Lineups & Speed Tuning Order'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Tuyển tập 13+ đội hình chuẩn chỉ qua từng giai đoạn: Tân thủ F2P Ngày 1-30, Đội hình Chuyển giao Giữa game, SSS Meta Đỉnh cao và Săn Boss Bang Hội / Vượt Ải.'
              : 'Complete repository of 13+ battle-tested lineups covering Early Game F2P starters, Mid-Game transitions, SSS Endgame tournament builds, and Club Boss/Trial clearers.'}
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-opm-card border border-opm-border">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-opm-yellow text-slate-950 shadow-glow-yellow'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-opm-border'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{getLocalized(cat.label)}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'vi' ? 'Tìm đội hình, tướng, lõi...' : 'Search build, hero, core...'}
            className="w-full pl-9.5 pr-4 py-2 text-xs rounded-2xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-slate-100 placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="space-y-8">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-2xl space-y-6"
          >
            {/* Header of Strategy Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-opm-border">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-0.5 text-xs font-black rounded-full bg-rose-500 text-white uppercase shadow-glow-red">
                    {guide.tier} TIER
                  </span>
                  <span className="text-xs font-bold text-amber-400">
                    Core: {guide.coreHero}
                  </span>
                </div>
                <h2 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                  {getLocalized(guide.name)}
                </h2>
              </div>

              <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                <button
                  onClick={() => {
                    const shareUrl = `${window.location.origin}${window.location.pathname}?tab=teamguides&team=${guide.id}`;
                    navigator.clipboard.writeText(shareUrl);
                    showToast(language === 'vi' ? `Đã sao chép link đội hình [${getLocalized(guide.name)}]!` : `Copied link for [${getLocalized(guide.name)}]!`, 'success');
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-slate-200 hover:text-opm-yellow text-xs font-bold transition-all cursor-pointer"
                  title={language === 'vi' ? 'Chia sẻ link đội hình này' : 'Share team link'}
                >
                  <Share2 className="w-4 h-4 text-opm-yellow" />
                  <span>{language === 'vi' ? 'Chia Sẻ' : 'Share'}</span>
                </button>

                <button
                  onClick={() => handleApplyLineup(guide)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-opm-yellow hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-glow-yellow transition-all cursor-pointer shrink-0"
                >
                  <span>{language === 'vi' ? 'Nạp Vào Xếp Đội Hình' : 'Load into Builder'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Formation Visual Grid (6 Slots) */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                {language === 'vi' ? 'BỐ TRÍ TRẬN HÌNH (6 VỊ TRÍ):' : 'FORMATION GRID (6 SLOTS):'}
              </span>

              <div className="grid grid-cols-2 gap-4">
                
                {/* Front Row */}
                <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase block">
                    {language === 'vi' ? 'Hàng Trước (Front Row):' : 'Front Row:'}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {guide.formation.frontRow.map((id, idx) => {
                      const hero = getHeroObj(id);
                      return (
                        <div key={idx} className="p-2 rounded-xl bg-slate-900 border border-opm-border flex flex-col items-center text-center">
                          <img
                            src={hero?.avatar || 'avatars/ur_saitama.webp'}
                            alt={hero?.name?.en || 'Hero'}
                            className="w-10 h-10 rounded-lg object-cover mb-1 border border-opm-border"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "avatars/ur_saitama.webp";
                            }}
                          />
                          <span className="text-[10px] font-bold text-slate-200 truncate w-full">
                            {hero ? getLocalized(hero.name) : id}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Back Row */}
                <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase block">
                    {language === 'vi' ? 'Hàng Sau (Back Row):' : 'Back Row:'}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {guide.formation.backRow.map((id, idx) => {
                      const hero = getHeroObj(id);
                      return (
                        <div key={idx} className="p-2 rounded-xl bg-slate-900 border border-opm-border flex flex-col items-center text-center">
                          <img
                            src={hero?.avatar || 'avatars/ur_saitama.webp'}
                            alt={hero?.name?.en || 'Hero'}
                            className="w-10 h-10 rounded-lg object-cover mb-1 border border-opm-border"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "avatars/ur_saitama.webp";
                            }}
                          />
                          <span className="text-[10px] font-bold text-slate-200 truncate w-full">
                            {hero ? getLocalized(hero.name) : id}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Speed Tuning Sequence */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                {language === 'vi' ? 'THỨ TỰ HÀNH ĐỘNG (SPEED ORDER):' : 'SPEED TUNING SEQUENCE:'}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {guide.speedOrder.map((step) => {
                  const hero = getHeroObj(step.hero);
                  return (
                    <div
                      key={step.order}
                      className="p-3 rounded-2xl bg-opm-bg/60 border border-opm-border flex items-center gap-3"
                    >
                      <span className="w-7 h-7 rounded-xl bg-amber-500/20 text-opm-yellow border border-amber-500/30 flex items-center justify-center font-display font-black text-xs shrink-0">
                        #{step.order}
                      </span>
                      <div className="truncate">
                        <span className="font-bold text-xs text-slate-200 block truncate">
                          {hero ? getLocalized(hero.name) : step.hero}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate block">
                          {step.note}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Strategy & Recommended Gears */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-opm-border space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">
                {language === 'vi' ? 'Chiến Thuật Vận Hành:' : 'Operational Strategy:'}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {getLocalized(guide.strategy)}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
