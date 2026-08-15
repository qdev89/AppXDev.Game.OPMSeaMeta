import React from 'react';
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
  ChevronRight
} from 'lucide-react';

export const TeamStrategyGuide = ({ onSwitchTab }) => {
  const { language, getLocalized } = useLanguage();
  const { characters, setSlotCharacter, showToast } = useMetaData();

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
              {language === 'vi' ? 'Cẩm Nang Build Đội Hình' : 'Meta Team Builds'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Chiến Thuật Xếp Đội Hình & Thứ Tự Tốc Độ (Speed Tuning)' : 'Tournament Lineups & Speed Tuning Order'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Phân tích các trường phái đội hình đỉnh cao của giải đấu SEA: Bomb Burst, Tinh Trùng Đen Quái Nhân, và đội hình F2P tiết kiệm tài nguyên.'
              : 'Detailed breakdown of top competitive SEA tournament archetypes, speed sequencing, core mechanics, and 1-click loading into Lineup Builder.'}
          </p>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div className="space-y-8">
        {defaultTeamGuides.map((guide) => (
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

              <button
                onClick={() => handleApplyLineup(guide)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-opm-yellow hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-glow-yellow transition-all cursor-pointer shrink-0"
              >
                <span>{language === 'vi' ? 'Nạp Vào Xếp Đội Hình' : 'Load into Builder'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
                            src={hero?.avatar || 'avatars/saitama.jpg'}
                            alt={hero?.name?.en || 'Hero'}
                            className="w-10 h-10 rounded-lg object-cover mb-1 border border-opm-border"
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
                            src={hero?.avatar || 'avatars/saitama.jpg'}
                            alt={hero?.name?.en || 'Hero'}
                            className="w-10 h-10 rounded-lg object-cover mb-1 border border-opm-border"
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
