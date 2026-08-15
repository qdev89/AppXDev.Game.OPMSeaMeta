import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { defaultNewbieGuide } from '../data/defaultNewbieGuide';
import { 
  GraduationCap, 
  Map, 
  Users, 
  CheckSquare, 
  Square, 
  Calculator, 
  Sparkles, 
  Award, 
  Clock, 
  HelpCircle,
  TrendingUp,
  CheckCircle2,
  Zap,
  ArrowRight
} from 'lucide-react';

export const NewbieGuide = ({ onSwitchTab }) => {
  const { language, getLocalized } = useLanguage();
  const { showToast } = useMetaData();

  // State for Daily Checklist
  const [completedItems, setCompletedItems] = useState({});

  // State for Black Ticket Gacha Pity Calculator
  const [currentBt, setCurrentBt] = useState(60);
  const [gems, setGems] = useState(15000);
  const [daysUntilBanner, setDaysUntilBanner] = useState(20);

  const toggleChecklist = (id) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Gacha Math: 1 BT = 220 Gems in Shop (limit 36/month)
  const buyableBtFromGems = Math.floor(gems / 220);
  const dailyBtEstimate = Math.floor(daysUntilBanner * 1.2); // Average 1.2 BT per day from events/dailies
  const totalProjectedBt = currentBt + Math.min(36, buyableBtFromGems) + dailyBtEstimate;
  const isPityGuaranteed = totalProjectedBt >= 180;
  const btRemaining = Math.max(0, 180 - totalProjectedBt);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-emerald-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-emerald-500 text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-glow-emerald">
              <GraduationCap className="w-3.5 h-3.5 fill-current" />
              <span>STARTER TO META BLUEPRINT</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
              {language === 'vi' ? 'Cẩm Nang Tân Thủ Toàn Diện' : 'Comprehensive Starter Guide'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Lộ Trình 14 Ngày & Quản Lý Tài Nguyên Tân Thủ' : '14-Day Starter Roadmap & Resource Economy'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Chiến lược tích 180 Vé Đen ăn Pity UR, đội hình F2P vượt ải 3 sao, danh sách việc cần làm hàng ngày và bí kíp leo Top Đấu Trường cho người mới bắt đầu.'
              : 'Master the 180 Black Ticket hard pity rule, 3-star story F2P comps, daily checklists, and gacha economy to dominate SEA server.'}
          </p>
        </div>
      </div>

      {/* SECTION 1: 14-Day Starter Progression Roadmap */}
      <div className="space-y-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <Map className="w-5 h-5 text-emerald-400" />
          <span>{language === 'vi' ? 'Lộ Trình Tăng Trưởng 14 Ngày' : '14-Day Growth Roadmap'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {defaultNewbieGuide.roadmap.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase inline-block mb-3">
                  {phase.day}
                </span>
                <h3 className="font-display font-bold text-base text-slate-100 mb-2">
                  {getLocalized(phase.title)}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {getLocalized(phase.focus)}
                </p>

                <div className="space-y-2 pt-2 border-t border-opm-border">
                  {phase.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{getLocalized(tip)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Black Ticket 180 Pity Calculator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-opm-border">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-opm-yellow">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-100">
                {language === 'vi' ? 'Máy Tính Tích Vé Đen (180 BT Pity Planner)' : '180 Black Ticket Hard Pity Calculator'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Kiểm tra xem bạn có đủ 180 Vé Đen để chắc chắn rước tướng UR / SSR+ mong muốn không.' : 'Calculate if you have enough tickets & gems to guarantee the 180 BT hard pity.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Số Vé Đen (BT) hiện có:' : 'Current Black Tickets:'}
              </label>
              <input
                type="number"
                value={currentBt}
                onChange={(e) => setCurrentBt(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-opm-yellow focus:border-opm-yellow focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Số Kim Cương (Gems) hiện có:' : 'Current Diamonds (Gems):'}
              </label>
              <input
                type="number"
                step="500"
                value={gems}
                onChange={(e) => setGems(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-cyan-400 focus:border-opm-yellow focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {language === 'vi' ? 'Số ngày còn lại đến Banner:' : 'Days until target Banner:'}
              </label>
              <input
                type="number"
                value={daysUntilBanner}
                onChange={(e) => setDaysUntilBanner(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-opm-border text-sm font-bold text-slate-200 focus:border-opm-yellow focus:outline-none"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-opm-border flex flex-col justify-between md:col-span-2">
            <div>
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider block mb-1">
                {language === 'vi' ? 'DỰ PHÓNG TỔNG VÉ ĐEN' : 'PROJECTED TOTAL BLACK TICKETS'}
              </span>
              <div className="font-mono font-black text-4xl text-opm-yellow mb-2">
                {totalProjectedBt} / 180 BT
              </div>

              {isPityGuaranteed ? (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    {language === 'vi'
                      ? 'CHÚC MỪNG! Bạn đã đủ 180 Vé Đen để chắc chắn 100% sở hữu tướng giới hạn!'
                      : 'CONGRATULATIONS! You are 100% guaranteed to obtain the limited unit!'}
                  </span>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>
                    {language === 'vi'
                      ? `Cần tích thêm ${btRemaining} Vé Đen nữa để đạt mốc an toàn 180 BT!`
                      : `You need ${btRemaining} more Black Tickets to reach the 180 BT hard pity safety threshold!`}
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              💡 {language === 'vi'
                ? 'Mỗi tháng Shop Kim Cương bán tối đa 36 Vé Đen với giá 220 KC/vé (= 7.920 KC). Luôn ưu tiên mua hết 36 vé này trước khi chi tiêu việc khác!'
                : 'The Diamond Shop allows purchasing up to 36 Black Tickets per month at 220 Gems each (7,920 Gems total). Always prioritize this monthly quota!'}
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Daily Must-Do Checklist */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-emerald-400" />
          <span>{language === 'vi' ? 'Checklist Nhiệm Vụ Hàng Ngày Của Tân Thủ' : 'Daily Starter Must-Do Checklist'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {defaultNewbieGuide.dailyChecklist.map((item) => {
            const isDone = !!completedItems[item.id];
            return (
              <button
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                  isDone
                    ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                    : 'bg-opm-bg/80 border-opm-border text-slate-300 hover:border-slate-700'
                }`}
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-slate-500 shrink-0" />
                )}
                <span className={`text-xs font-semibold ${isDone ? 'line-through opacity-80' : ''}`}>
                  {getLocalized(item.label)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
