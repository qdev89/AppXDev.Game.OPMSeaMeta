import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { defaultMastery } from '../data/defaultMastery';
import { 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Flame, 
  Crosshair, 
  Cpu, 
  Eye, 
  TrendingUp, 
  Award,
  Layers,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const MasteryRefinement = () => {
  const { language, getLocalized } = useLanguage();
  const [selectedLevelIdx, setSelectedLevelIdx] = useState(2); // Level 10 default

  const currentLevel = defaultMastery.coreRefinementLevels[selectedLevelIdx];

  const getTypeIcon = (type) => {
    if (type.includes('Grappler')) return Flame;
    if (type.includes('Duelist')) return Crosshair;
    if (type.includes('Hi-Tech')) return Cpu;
    return Eye;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-indigo-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-indigo-500 text-white uppercase tracking-wider flex items-center gap-1.5 shadow-glow-indigo">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>CORE REFINEMENT & MASTERY</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
              {language === 'vi' ? 'Tinh Thông & Tinh Luyện' : 'Spec & Core Trees'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Hệ Thống Tinh Thông & Tinh Luyện Lõi Trung Tâm' : 'Core Skill Refinement & Spec Mastery Progression'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Tối ưu hóa năng lượng ra chiêu hiệp 1, kích hoạt nhánh thiên phú Tinh Thông theo 4 trường phái (Giác Đấu, Vũ Trang, Khoa Học, Siêu Năng).'
              : 'Maximize round 1 team energy acceleration, unlock specialized core tiers, and calibrate class-specific Mastery bonuses.'}
          </p>
        </div>
      </div>

      {/* SECTION 1: Core Refinement Progression Simulator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-opm-border">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-100">
                {language === 'vi' ? 'Các Mốc Tinh Luyện Lõi (Core Levels)' : 'Core Refinement Milestones'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Chọn cấp độ để xem sức mạnh bứt phá của Lõi đội hình.' : 'Select a refinement level to preview energy gains and passive stat boosts.'}
              </p>
            </div>
          </div>
        </div>

        {/* Level Tabs Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {defaultMastery.coreRefinementLevels.map((lvl, idx) => {
            const isSelected = selectedLevelIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedLevelIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-glow-indigo'
                    : 'bg-opm-bg/80 border-opm-border text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="text-[10px] font-black uppercase text-amber-400 block mb-1">
                  Tier #{idx + 1}
                </span>
                <span className="font-display font-bold text-sm block">
                  {lvl.level}
                </span>
                <span className="text-xs text-indigo-300 font-semibold mt-1 block">
                  {lvl.energyRound1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Level Deep Breakdown Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/30 border border-indigo-500/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-black uppercase inline-block">
              {currentLevel.level}
            </span>
            <h3 className="font-display font-black text-xl text-slate-100">
              {currentLevel.energyRound1}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {getLocalized(currentLevel.description)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-opm-border space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">
              {language === 'vi' ? 'Chỉ Số Toàn Đội Kích Hoạt:' : 'Activated Global Buffs:'}
            </span>
            <span className="font-mono font-black text-sm text-emerald-400 block">
              {currentLevel.passiveStats}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-opm-border space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">
              {language === 'vi' ? 'Điều Kiện / Nguyên Liệu:' : 'Requirements:'}
            </span>
            <span className="font-mono font-bold text-xs text-amber-300 block">
              {currentLevel.requirements}
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: 4 Class Mastery Trees */}
      <div className="space-y-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>{language === 'vi' ? '4 Nhánh Tinh Thông Theo Hệ (Class Mastery Trees)' : '4 Class Mastery Specializations'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {defaultMastery.specMasteryTrees.map((tree, idx) => {
            const Icon = getTypeIcon(tree.type);
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-base text-slate-100">
                        {tree.type}
                      </h3>
                      <span className="text-[11px] text-amber-400 font-medium">
                        Focus: {tree.focus}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {tree.stats.map((stat, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-opm-bg/80 border border-opm-border flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span className="font-bold text-slate-200">{getLocalized(stat.name)}</span>
                        </div>
                        <span className="font-mono font-bold text-emerald-400 shrink-0">
                          {stat.bonus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
