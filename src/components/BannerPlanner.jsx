import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { CalendarDays, Ticket, Sparkles, CheckCircle2, Clock, Calculator, Plus, Trash2 } from 'lucide-react';

export const BannerPlanner = () => {
  const { language, getLocalized, t } = useLanguage();
  const { banners, addBanner, deleteBanner } = useMetaData();

  const [myBlackTickets, setMyBlackTickets] = useState(140);
  const [dailyGains, setDailyGains] = useState(2);

  const statusBadges = {
    active: { label: t('banners.active'), color: 'bg-emerald-950 text-emerald-300 border-emerald-500/50 animate-pulse' },
    upcoming: { label: t('banners.upcoming'), color: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' },
    rerun: { label: t('banners.rerun'), color: 'bg-amber-950 text-amber-300 border-amber-500/50' },
    passed: { label: t('banners.passed'), color: 'bg-slate-900 text-slate-400 border-slate-700' },
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-opm-borderHighlight/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40 uppercase tracking-wide">
                SEA Release Schedule
              </span>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                FingerFun Official Timing
              </span>
            </div>
            <h1 className="font-display font-black text-2xl sm:text-3xl text-slate-100">
              {t('banners.title')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t('banners.subtitle')}
            </p>
          </div>
        </div>

        {/* Black Ticket Gacha Calculator */}
        <div className="mt-6 pt-6 border-t border-opm-border/60 bg-opm-bg/60 p-5 rounded-2xl border">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-opm-yellow" />
            <h3 className="font-display font-black text-sm text-slate-200 uppercase tracking-wide">
              Black Ticket (BT) Economy Planner
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Current Black Tickets (Vé Đen Hiện Có)</label>
              <input
                type="number"
                value={myBlackTickets}
                onChange={(e) => setMyBlackTickets(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-opm-card border border-opm-border font-mono font-bold text-opm-yellow text-sm"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-semibold">Daily BT Income (Vé Kiếm Mỗi Ngày)</label>
              <input
                type="number"
                value={dailyGains}
                onChange={(e) => setDailyGains(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-opm-card border border-opm-border font-mono font-bold text-cyan-300 text-sm"
              />
            </div>
            <div className="flex flex-col justify-end">
              <div className="p-2.5 rounded-xl bg-opm-cardLight border border-opm-border">
                <span className="text-[10px] text-slate-400 block">Status for 180 Pity Guarantee:</span>
                <span className={`font-bold ${myBlackTickets >= 180 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {myBlackTickets >= 180
                    ? '✅ 100% Pity Ready!'
                    : `⏳ Need ${(180 - myBlackTickets)} more (${Math.ceil((180 - myBlackTickets) / (dailyGains || 1))} days)`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Timeline List */}
      <div className="space-y-4">
        {banners.map((banner) => {
          const badge = statusBadges[banner.status] || statusBadges.upcoming;
          return (
            <div
              key={banner.id}
              className="glass-panel p-5 sm:p-6 rounded-3xl border border-opm-border hover:border-opm-yellow/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-opm-card border border-opm-border flex items-center justify-center shrink-0">
                  <Ticket className="w-6 h-6 text-opm-yellow" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2.5 py-0.5 text-[10px] font-black rounded-md border uppercase ${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {banner.startDate} ~ {banner.endDate}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 group-hover:text-opm-yellow transition-colors">
                    {getLocalized(banner.name)}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 max-w-xl">
                    {getLocalized(banner.metaImpact)}
                  </p>
                </div>
              </div>

              {/* Requirement Pills & Quick Gacha Check */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-xs font-semibold text-slate-400">{t('banners.blackTickets')}:</span>
                    <span className="font-mono font-black text-sm text-opm-yellow">{banner.blackTicketCost} BT</span>
                  </div>
                  {banner.evolutionStones > 0 && (
                    <span className="text-[11px] text-rose-400 font-semibold block">
                      +{banner.evolutionStones} {t('banners.redShards')}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    if (window.confirm(`Delete banner ${getLocalized(banner.name)}?`)) {
                      deleteBanner(banner.id);
                    }
                  }}
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-950/40 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
