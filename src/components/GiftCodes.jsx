import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { defaultGiftCodes } from '../data/defaultGiftCodes';
import { 
  Gift, 
  Copy, 
  Check, 
  Sparkles, 
  Globe, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Award
} from 'lucide-react';

export const GiftCodes = () => {
  const { language, getLocalized } = useLanguage();
  const { showToast } = useMetaData();
  const [copiedCode, setCopiedCode] = useState(null);
  const [filterServer, setFilterServer] = useState('all'); // 'all' | 'sea' | 'cn'

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(
      language === 'vi' ? `Đã sao chép mã code: ${code}` : `Copied gift code: ${code}`,
      'success'
    );
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const allCodes = [
    ...defaultGiftCodes.sea,
    ...defaultGiftCodes.cn
  ];

  const filteredCodes = allCodes.filter((c) => {
    if (filterServer === 'all') return true;
    if (filterServer === 'sea') return c.server.includes('SEA');
    if (filterServer === 'cn') return c.server.includes('China') || c.server.includes('CN');
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Hero Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-opm-card via-slate-900 to-amber-950/40 border border-opm-borderHighlight shadow-2xl overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-opm-yellow text-slate-950 uppercase tracking-wider flex items-center gap-1.5 shadow-glow-yellow">
              <Gift className="w-3.5 h-3.5 fill-current" />
              <span>OFFICIAL IN-GAME REWARDS</span>
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase">
              {language === 'vi' ? 'Gift Code SEA & Quốc Tế' : 'SEA & Global Codes'}
            </span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100 mb-2">
            {language === 'vi' ? 'Mã Quà Tặng & Gift Code Mới Nhất' : 'Latest In-Game Gift Codes & Voucher Rewards'}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {language === 'vi'
              ? 'Tổng hợp gift code nhận Kim Cương, Vé Đen, Thể Lực và rương trang bị miễn phí cho ONE PUNCH MAN: The Strongest (SEA & CN Server).'
              : 'Claim free Diamonds, Black Tickets, Vitality, and Gear Chests with active redeem codes for ONE PUNCH MAN: The Strongest.'}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 bg-opm-card p-1.5 rounded-2xl border border-opm-border">
          <button
            onClick={() => setFilterServer('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterServer === 'all'
                ? 'bg-opm-yellow text-slate-950 shadow-glow-yellow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {language === 'vi' ? 'Tất Cả Máy Chủ' : 'All Servers'} ({allCodes.length})
          </button>
          <button
            onClick={() => setFilterServer('sea')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterServer === 'sea'
                ? 'bg-opm-yellow text-slate-950 shadow-glow-yellow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SEA / Global ({defaultGiftCodes.sea.length})
          </button>
          <button
            onClick={() => setFilterServer('cn')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterServer === 'cn'
                ? 'bg-opm-yellow text-slate-950 shadow-glow-yellow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Trung Quốc / CN ({defaultGiftCodes.cn.length})
          </button>
        </div>
      </div>

      {/* Code Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCodes.map((item, idx) => {
          const isCopied = copiedCode === item.code;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-opm-card border border-opm-borderHighlight flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-opm-yellow/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-bold border border-slate-700">
                    {item.server}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{language === 'vi' ? 'Còn Hạn' : 'Active'}</span>
                  </span>
                </div>

                {/* Code Copy Field */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-opm-border mb-4">
                  <span className="font-mono font-black text-lg text-opm-yellow tracking-wider">
                    {item.code}
                  </span>
                  <button
                    onClick={() => handleCopy(item.code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-400 text-slate-950'
                        : 'bg-slate-800 hover:bg-opm-yellow hover:text-slate-950 text-slate-200'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? (language === 'vi' ? 'Đã Copy' : 'Copied') : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-xs text-slate-300 space-y-1 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">
                    {language === 'vi' ? 'Phần thưởng:' : 'Rewards:'}
                  </span>
                  <p className="leading-relaxed font-medium text-slate-200">
                    {getLocalized(item.rewards)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-opm-border text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{language === 'vi' ? 'Hạn:' : 'Exp:'} {item.expiry}</span>
                </span>
                <span className="text-amber-400 font-semibold text-[10px]">
                  {language === 'vi' ? '1-Click Copy' : 'Ready'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Redemption Instructions */}
      <div className="p-6 sm:p-8 rounded-3xl bg-opm-card border border-opm-borderHighlight shadow-xl space-y-4">
        <h2 className="font-display font-black text-lg text-slate-100 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-opm-yellow" />
          <span>{language === 'vi' ? 'Hướng Dẫn Nhập Code Trong Game' : 'How to Redeem Gift Codes'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {defaultGiftCodes.instructions[language]?.map((step, sIdx) => (
            <div key={sIdx} className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-opm-yellow border border-amber-500/30 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                {sIdx + 1}
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
