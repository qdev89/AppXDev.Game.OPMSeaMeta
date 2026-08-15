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
  ArrowRight,
  ShieldAlert,
  Crown,
  Search,
  Filter,
  Layers,
  Flame,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Sprout,
  Swords
} from 'lucide-react';

export const NewbieGuide = ({ onSwitchTab }) => {
  const { language, getLocalized } = useLanguage();
  const { showToast } = useMetaData();

  // State for Tips & Tricks Category & Search
  const [selectedTipCat, setSelectedTipCat] = useState('all');
  const [searchTipQuery, setSearchTipQuery] = useState('');
  const [expandedTips, setExpandedTips] = useState({ tip_180_bt_rule: true });

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

  const toggleExpandTip = (tipId) => {
    setExpandedTips((prev) => ({
      ...prev,
      [tipId]: !prev[tipId]
    }));
  };

  // Gacha Math: 1 BT = 220 Gems in Shop (limit 36/month)
  const buyableBtFromGems = Math.floor(gems / 220);
  const dailyBtEstimate = Math.floor(daysUntilBanner * 1.2); // Average 1.2 BT per day from events/dailies
  const totalProjectedBt = currentBt + Math.min(36, buyableBtFromGems) + dailyBtEstimate;
  const isPityGuaranteed = totalProjectedBt >= 180;
  const btRemaining = Math.max(0, 180 - totalProjectedBt);

  // Tip categories
  const tipCategories = [
    { id: 'all', label: { en: 'All Tips (12)', vi: 'Tất Cả Tips (12)' }, icon: Layers },
    { id: 'early', label: { en: '🌱 Newbie (Day 1-30)', vi: '🌱 Tân Thủ (Ngày 1-30)' }, icon: Sprout },
    { id: 'midgame', label: { en: '⚔️ Mid-Game (Lv 60-90)', vi: '⚔️ Giữa Game (Lv 60-90)' }, icon: Swords },
    { id: 'endgame', label: { en: '👑 Endgame & Live Arena', vi: '👑 Cuối Game & Live Arena' }, icon: Crown },
  ];

  const filteredMasterTips = (defaultNewbieGuide.masterTips || []).filter((tip) => {
    if (selectedTipCat !== 'all' && tip.category !== selectedTipCat) return false;
    if (!searchTipQuery.trim()) return true;
    const q = searchTipQuery.toLowerCase();
    const titleMatch = getLocalized(tip.title).toLowerCase().includes(q);
    const summaryMatch = getLocalized(tip.summary).toLowerCase().includes(q);
    const detailMatch = getLocalized(tip.detail).toLowerCase().includes(q);
    return titleMatch || summaryMatch || detailMatch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-emerald-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-emerald-500 text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-glow-emerald">
              <GraduationCap className="w-3.5 h-3.5 fill-current" />
              <span>STARTER TO ENDGAME ENCYCLOPEDIA</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
              👑 LSB-Clan S794 Guide
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Bách Khoa Toàn Thư Tips & Tricks: Từ Tân Thủ Đến Cuối Game' : 'Master Tips & Tricks: Starter to Endgame Progression'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Toàn bộ bí kíp sinh tồn và phát triển tài khoản: Quy tắc 180 Vé Đen, cách quản lý Thể lực, tối ưu hoá Tốc độ, chọn dòng trang bị Cam/Đỏ, nâng Lõi Core và chiến thuật Ban/Pick Đấu Trường Live Arena.'
              : 'Complete competitive survival encyclopedia: 180 Black Ticket rule, Stamina & Gem economy, Speed Tuning, Orange/Red gear substats, Core priority, and Live Arena draft strategies.'}
          </p>
        </div>
      </div>

      {/* SECTION 1: MASTER TIPS & TRICKS DIRECTORY */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-opm-card border border-opm-border">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            {tipCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedTipCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTipCat(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-glow-emerald'
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
              value={searchTipQuery}
              onChange={(e) => setSearchTipQuery(e.target.value)}
              placeholder={language === 'vi' ? 'Tìm bí kíp, vé đen, lõi, tốc độ...' : 'Search tips, tickets, core, speed...'}
              className="w-full pl-9.5 pr-4 py-2 text-xs rounded-2xl bg-opm-bg border border-opm-border focus:border-emerald-400 focus:outline-none text-slate-100 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Master Tips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMasterTips.map((tip) => {
            const isExpanded = !!expandedTips[tip.id];
            return (
              <div
                key={tip.id}
                className="p-6 rounded-3xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between shadow-xl relative overflow-hidden space-y-4 hover:border-emerald-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-lg uppercase tracking-wider ${
                      tip.category === 'endgame'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : tip.category === 'midgame'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {tip.badge}
                    </span>

                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {tip.category === 'endgame' ? 'Level 100+ Endgame' : tip.category === 'midgame' ? 'Level 60-90 Mid-Game' : 'Day 1-30 Starter'}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 mb-2 leading-snug">
                    {getLocalized(tip.title)}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-2xl border border-opm-border/60">
                    {getLocalized(tip.summary)}
                  </p>

                  {isExpanded && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-slate-200 leading-relaxed animate-fadeIn space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>{language === 'vi' ? 'Chi Tiết Chuyên Sâu:' : 'In-Depth Strategy:'}</span>
                      </div>
                      <p>{getLocalized(tip.detail)}</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => toggleExpandTip(tip.id)}
                  className="flex items-center justify-between w-full pt-3 border-t border-opm-border/80 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? (language === 'vi' ? 'Thu gọn phân tích' : 'Hide Analysis') : (language === 'vi' ? 'Xem phân tích chi tiết & số liệu' : 'Show Deep Strategy & Math')}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: 14-Day Starter Progression Roadmap */}
      <div className="space-y-4 pt-4">
        <h2 className="font-display font-black text-xl text-slate-100 flex items-center gap-2">
          <Map className="w-5 h-5 text-emerald-400" />
          <span>{language === 'vi' ? 'Lộ Trình Tăng Trưởng 14 Ngày Đầu Game' : '14-Day Starter Growth Roadmap'}</span>
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

      {/* SECTION 3: Black Ticket 180 Pity Calculator */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-opm-border">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-opm-yellow">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-100">
                {language === 'vi' ? 'Máy Tính Bảo Hiểm Vé Đen (180 BT Pity Calculator)' : '180 Black Ticket Gacha Pity Calculator'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Kiểm tra xem bạn có đủ tài nguyên để chắc chắn sở hữu tướng UR/SSR+ giới hạn không.' : 'Calculate your exact Black Ticket runway to guarantee your desired banner hero.'}
              </p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
            isPityGuaranteed
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
          }`}>
            {isPityGuaranteed
              ? (language === 'vi' ? 'Đủ 100% Pity' : '100% Pity Ready')
              : (language === 'vi' ? `Thiếu ${btRemaining} Vé` : `Need ${btRemaining} More`)}
          </span>
        </div>

        {/* Input Sliders & Number Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {language === 'vi' ? 'Số Vé Đen Hiện Có (BT):' : 'Current Black Tickets (BT):'}
            </label>
            <input
              type="number"
              min="0"
              max="300"
              value={currentBt}
              onChange={(e) => setCurrentBt(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-opm-yellow font-black text-lg focus:outline-none focus:border-opm-yellow"
            />
          </div>

          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {language === 'vi' ? 'Số Kim Cương (Gems) Hiện Có:' : 'Current Gems Balance:'}
            </label>
            <input
              type="number"
              min="0"
              step="500"
              value={gems}
              onChange={(e) => setGems(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-cyan-400 font-black text-lg focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
            <label className="text-xs font-bold text-slate-300 block">
              {language === 'vi' ? 'Số Ngày Tới Banner Hết Hạn:' : 'Days Remaining in Banner:'}
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={daysUntilBanner}
              onChange={(e) => setDaysUntilBanner(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-opm-border text-emerald-400 font-black text-lg focus:outline-none focus:border-emerald-400"
            />
          </div>

        </div>

        {/* Calculation Result Breakdown */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-opm-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs text-slate-400 block">
              {language === 'vi' ? 'Dự Tính Tổng Vé Đen Thu Thập Được:' : 'Total Projected Black Tickets:'}
            </span>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-display font-black text-2xl text-slate-100">{totalProjectedBt}</span>
              <span className="text-slate-400 text-sm">/ 180 BT</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 text-center sm:text-right max-w-sm">
            {isPityGuaranteed ? (
              <span className="text-emerald-400 font-bold">
                {language === 'vi' ? '✅ Bạn đã chắc chắn 100% sở hữu tướng UR/SSR+ giới hạn!' : '✅ You have enough resources to guarantee the limited unit!'}
              </span>
            ) : (
              <span className="text-rose-400 font-bold">
                {language === 'vi' ? `⚠️ Bạn còn thiếu khoảng ${btRemaining} vé. Cần tích thêm Kim Cương hoặc đợi đợt reroll kế tiếp!` : `⚠️ You need ${btRemaining} more BT. Save gems or wait for the rerun!`}
              </span>
            )}
          </div>
        </div>

      </div>

      {/* SECTION 4: Daily Checklist */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-opm-border">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl text-slate-100">
                {language === 'vi' ? 'Danh Sách Việc Cần Làm Hàng Ngày (Daily Checklist)' : 'Daily Routine Checklist'}
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'vi' ? 'Đánh dấu các hoạt động đã hoàn thành trong ngày để tối đa hoá Kim Cương & Vé.' : 'Tick completed daily tasks to optimize your account economy.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setCompletedItems({})}
            className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            {language === 'vi' ? 'Đặt Lại' : 'Reset All'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {defaultNewbieGuide.dailyChecklist.map((item) => {
            const isDone = !!completedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                  isDone
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                    : 'bg-opm-bg/60 border-opm-border text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all ${
                  isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 bg-slate-900'
                }`}>
                  {isDone && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                </div>

                <span className={`text-xs font-bold ${isDone ? 'line-through opacity-70' : ''}`}>
                  {getLocalized(item.label)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
