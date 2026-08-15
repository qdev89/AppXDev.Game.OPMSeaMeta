import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { defaultDamageMechanics } from '../data/defaultDamageMechanics';
import { 
  Flame, 
  ShieldAlert, 
  Calculator, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Target, 
  ShieldCheck, 
  Crosshair, 
  Layers, 
  Info,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export const DamageMechanics = () => {
  const { language, getLocalized } = useLanguage();

  // Calculator State
  const [calcAtk, setCalcAtk] = useState(250000);
  const [calcSkillPct, setCalcSkillPct] = useState(400); // 400%
  const [calcCritDmg, setCalcCritDmg] = useState(180); // 180%
  const [calcDmgAmp, setCalcDmgAmp] = useState(30); // 30%
  const [calcEnemyDef, setCalcEnemyDef] = useState(45000);
  const [calcEnemyDmgFree, setCalcEnemyDmgFree] = useState(40); // 40%
  const [isSpecialized, setIsSpecialized] = useState(false);
  const [isCrit, setIsCrit] = useState(true);
  const [isPvP, setIsPvP] = useState(true);

  // Damage Computation
  const baseRaw = (calcAtk * (calcSkillPct / 100));
  const postDef = isSpecialized ? baseRaw : Math.max(1, baseRaw - calcEnemyDef);
  const critMultiplier = isCrit ? (1 + Math.max(0, (calcCritDmg - 100) / 100)) : 1.0;
  const ampMultiplier = 1 + (calcDmgAmp / 100);
  const reductionMultiplier = isSpecialized ? 1.0 : (1 / (1 + (calcEnemyDmgFree / 100)));
  const pvpMultiplier = isPvP ? 0.85 : 1.0; // Standard arena damage modifier

  const finalCalculatedDamage = Math.round(postDef * critMultiplier * ampMultiplier * reductionMultiplier * pvpMultiplier);
  const nonCritCalculatedDamage = Math.round(postDef * 1.0 * ampMultiplier * reductionMultiplier * pvpMultiplier);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-rose-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-rose-500 text-white uppercase tracking-wider flex items-center gap-1.5 shadow-glow-red">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>DE-COMPILED COMBAT ENGINE</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
              {language === 'vi' ? 'Công Thức & Cơ Chế Sát Thương' : 'Damage & Stat Matrix'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Cơ Chế Sát Thương & Công Thức Chiến Đấu Thực Tế' : 'In-Game Damage Mechanics & Calculation Matrix'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Giải mã toàn bộ chuỗi tính toán sát thương: Bạo Kích, Chặn Đỡ, Né Tức Thì, Sát Thương Chuyên Biệt, và thứ tự hấp thụ khiên trong ONE PUNCH MAN: The Strongest.'
              : 'Complete breakdown of combat formulas, critical multipliers, block intensity, instant evasion, specialized direct damage, and defensive buffer resolution.'}
          </p>
        </div>
      </div>

      {/* SECTION 1: Interactive Combat Damage Calculator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-opm-border">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-opm-yellow">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-100">
                {language === 'vi' ? 'Máy Tính Sát Thương Thực Chiến' : 'Live Combat Damage Simulator'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Mô phỏng đòn đánh thực tế khi va chạm chỉ số công và thủ.' : 'Simulate actual damage numbers based on attacker and defender stats.'}
              </p>
            </div>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Attacker Stats */}
          <div className="p-5 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-4">
            <h3 className="text-xs font-black uppercase text-amber-400 flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              <span>{language === 'vi' ? 'Chỉ Số Bên Tấn Công (Attacker)' : 'Attacker Attributes'}</span>
            </h3>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Lực Công Cơ Bản (ATK)' : 'Base ATK'}
              </label>
              <input
                type="number"
                step="10000"
                value={calcAtk}
                onChange={(e) => setCalcAtk(Math.max(1000, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-amber-400 focus:border-opm-yellow focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Hệ Số Tuyệt Kỹ (% Skill Multiplier)' : 'Skill Multiplier (%)'}
              </label>
              <input
                type="number"
                step="10"
                value={calcSkillPct}
                onChange={(e) => setCalcSkillPct(Math.max(50, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-slate-200 focus:border-opm-yellow focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1">
                  {language === 'vi' ? 'ST Bạo Kích (%)' : 'Crit DMG (%)'}
                </label>
                <input
                  type="number"
                  step="5"
                  value={calcCritDmg}
                  onChange={(e) => setCalcCritDmg(Math.max(100, parseInt(e.target.value) || 100))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-rose-400 focus:border-opm-yellow focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-300 mb-1">
                  {language === 'vi' ? 'Tăng ST (%)' : 'DMG Amp (%)'}
                </label>
                <input
                  type="number"
                  step="5"
                  value={calcDmgAmp}
                  onChange={(e) => setCalcDmgAmp(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-emerald-400 focus:border-opm-yellow focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Defender Stats */}
          <div className="p-5 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-4">
            <h3 className="text-xs font-black uppercase text-cyan-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'vi' ? 'Chỉ Số Bên Phòng Thủ (Defender)' : 'Defender Attributes'}</span>
            </h3>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Phòng Thủ Mục Tiêu (DEF)' : 'Target DEF'}
              </label>
              <input
                type="number"
                step="5000"
                value={calcEnemyDef}
                onChange={(e) => setCalcEnemyDef(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-cyan-400 focus:border-opm-yellow focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Giảm Sát Thương (%)' : 'DMG Free (%)'}
              </label>
              <input
                type="number"
                step="5"
                value={calcEnemyDmgFree}
                onChange={(e) => setCalcEnemyDmgFree(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-cyan-300 focus:border-opm-yellow focus:outline-none"
              />
            </div>

            {/* Toggles */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300">
                <input
                  type="checkbox"
                  checked={isSpecialized}
                  onChange={(e) => setIsSpecialized(e.target.checked)}
                  className="rounded border-slate-700 text-opm-yellow focus:ring-opm-yellow"
                />
                <span>{language === 'vi' ? 'Sát Thương Chuyên Biệt (Bỏ qua DEF/DMG Free)' : 'Specialized Direct DMG (Pierces DEF/Free)'}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300">
                <input
                  type="checkbox"
                  checked={isCrit}
                  onChange={(e) => setIsCrit(e.target.checked)}
                  className="rounded border-slate-700 text-rose-500 focus:ring-rose-500"
                />
                <span>{language === 'vi' ? 'Đòn Đánh Nổ Bạo Kích (Critical Hit)' : 'Apply Critical Hit'}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300">
                <input
                  type="checkbox"
                  checked={isPvP}
                  onChange={(e) => setIsPvP(e.target.checked)}
                  className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                />
                <span>{language === 'vi' ? 'Áp Dụng Cơ Chế Đấu Trường PvP' : 'Apply Live Arena PvP Modifier'}</span>
              </label>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-opm-cardLight to-slate-950 border border-opm-borderHighlight flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block mb-1">
                {language === 'vi' ? 'KẾT QUẢ TÍNH TOÁN CUỐI CÙNG' : 'SIMULATION OUTPUT'}
              </span>
              <div className="font-mono font-black text-3xl sm:text-4xl text-opm-yellow tracking-tight mb-2 drop-shadow-md">
                {finalCalculatedDamage.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>{language === 'vi' ? 'ST Không Bạo Kích:' : 'Non-Crit DMG:'}</span>
                  <span className="font-mono font-bold text-slate-200">{nonCritCalculatedDamage.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'vi' ? 'Khuếch Đại ST Bạo:' : 'Crit Bonus:'}</span>
                  <span className="font-mono font-bold text-rose-400">+{((finalCalculatedDamage - nonCritCalculatedDamage)).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-opm-border text-[11px] text-slate-300 leading-relaxed mt-4">
              {isSpecialized ? (
                <span className="text-emerald-400 font-semibold">
                  ⚡ {language === 'vi' ? 'Đòn Chuyên Biệt bỏ qua hoàn toàn DEF và Giảm Thương cơ bản của mục tiêu!' : 'Specialized strike fully pierced target DEF and standard DMG Free!'}
                </span>
              ) : (
                <span>
                  🛡️ {language === 'vi' ? `Mục tiêu đã hấp thụ ${(baseRaw - postDef).toLocaleString()} ST nhờ chỉ số Phòng Thủ.` : `Target DEF reduced raw hit by ${(baseRaw - postDef).toLocaleString()} damage.`}
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: 4-Phase Combat Resolution Pipeline */}
      <div className="space-y-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-opm-yellow" />
          <span>{language === 'vi' ? '4 Giai Đoạn Tính Sát Thương Chi Tiết (Pipeline)' : '4-Phase Damage Resolution Pipeline'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {defaultDamageMechanics.pipelinePhases.map((phase) => (
            <div
              key={phase.phase}
              className="p-5 rounded-2xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-opm-yellow border border-amber-500/30 flex items-center justify-center font-display font-black text-sm mb-3">
                  #{phase.phase}
                </div>
                <h3 className="font-display font-bold text-sm text-slate-100 mb-2">
                  {getLocalized(phase.name)}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {getLocalized(phase.desc)}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950 border border-opm-border font-mono text-[10px] text-amber-300 break-all">
                {phase.formula}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Stat Encyclopedia */}
      <div className="space-y-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-400" />
          <span>{language === 'vi' ? 'Từ Điển Cơ Chế Chỉ Số Chiến Đấu (Stat Encyclopedia)' : 'Combat Stat Encyclopedia & Formula Library'}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {defaultDamageMechanics.statEncyclopedia.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-3xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-black rounded-md bg-slate-800 text-amber-300 border border-amber-500/30 uppercase">
                    {stat.category}
                  </span>
                  <span className="text-[10px] font-bold text-rose-400">
                    {stat.cap}
                  </span>
                </div>

                <h3 className="font-display font-black text-base text-slate-100 mb-2">
                  {getLocalized(stat.name)}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {getLocalized(stat.explanation)}
                </p>

                <div className="p-2.5 rounded-xl bg-slate-950 border border-opm-border font-mono text-[11px] text-cyan-300 mb-4">
                  ⚙️ {stat.formula}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2">
                <Info className="w-4 h-4 text-opm-yellow shrink-0 mt-0.5" />
                <p className="leading-relaxed">{getLocalized(stat.proTip)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
