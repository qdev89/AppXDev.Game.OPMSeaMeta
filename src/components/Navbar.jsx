import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { 
  Users, 
  ShieldCheck, 
  Trophy, 
  Sword, 
  CalendarDays, 
  Database, 
  Globe, 
  Download, 
  Upload, 
  Menu, 
  X,
  Flame,
  Sparkles,
  BookOpen,
  GraduationCap,
  Gift,
  Zap,
  Layers
} from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab, onOpenCreateModal }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { exportAllData, importAllData, showToast } = useMetaData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'characters', label: t('nav.characters'), icon: Users },
    { id: 'newbie', label: t('nav.newbie'), icon: GraduationCap, badge: 'HOT' },
    { id: 'teambuilder', label: t('nav.teamBuilder'), icon: ShieldCheck, badge: '6v6' },
    { id: 'teamguides', label: t('nav.teamGuides'), icon: BookOpen, badge: 'META' },
    { id: 'damage', label: t('nav.damage'), icon: Flame, badge: 'ENGINE' },
    { id: 'mastery', label: t('nav.mastery'), icon: Zap },
    { id: 'tierlist', label: t('nav.tierList'), icon: Trophy },
    { id: 'gears', label: t('nav.gears'), icon: Sword },
    { id: 'banners', label: t('nav.banners'), icon: CalendarDays },
    { id: 'codes', label: t('nav.codes'), icon: Gift, badge: 'GIFT' },
    { id: 'metadata', label: t('nav.metadata'), icon: Database },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result);
        importAllData(json);
      } catch (err) {
        showToast('Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-opm-bg/90 border-b border-opm-border/60 transition-all">
      <div className="max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer select-none shrink-0" onClick={() => setActiveTab('characters')}>
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-opm-red via-opm-yellow to-opm-purple flex items-center justify-center shadow-glow-yellow p-0.5">
              <div className="w-full h-full bg-opm-card rounded-[10px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-opm-yellow animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-sm sm:text-base tracking-tight bg-gradient-to-r from-opm-yellow via-amber-200 to-opm-red bg-clip-text text-transparent">
                  OPM SEA META
                </span>
                <span className="hidden xl:inline-block px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-opm-red/20 text-opm-red border border-opm-red/30 uppercase tracking-wider">
                  SEA
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links (Compact & Smooth) */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-opm-yellow bg-opm-cardLight shadow-inner border border-opm-yellow/30'
                      : 'text-slate-300 hover:text-white hover:bg-opm-card/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-opm-yellow' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1 py-0.2 text-[8px] font-black rounded bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-opm-yellow rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools (Language Switcher, Export/Import, Add Hero) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-opm-card border border-opm-border hover:border-opm-yellow/50 transition-all text-xs font-bold text-slate-200 group shadow-sm"
              title="Toggle English / Tiếng Việt"
            >
              <Globe className="w-4 h-4 text-opm-yellow group-hover:rotate-45 transition-transform" />
              <span className="tracking-wider uppercase">
                {language === 'vi' ? '🇻🇳 VI' : '🇺🇸 EN'}
              </span>
            </button>

            {/* Quick Export Button */}
            <button
              onClick={exportAllData}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-opm-card border border-opm-border hover:border-opm-cyan/50 text-slate-300 hover:text-opm-cyan transition-all text-xs font-semibold"
              title={t('common.exportJson')}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">JSON</span>
            </button>

            {/* Quick Import File Input */}
            <label className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-opm-card border border-opm-border hover:border-opm-cyan/50 text-slate-300 hover:text-opm-cyan transition-all text-xs font-semibold cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {/* Create Custom Character Button */}
            <button
              onClick={onOpenCreateModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-opm-yellow to-amber-500 hover:from-amber-400 hover:to-opm-yellow text-slate-950 font-bold text-xs sm:text-sm shadow-glow-yellow transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">{t('common.create')}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-opm-card border border-opm-border text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-opm-border/60 flex flex-col gap-1 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-opm-yellow bg-opm-cardLight border border-opm-yellow/30'
                      : 'text-slate-300 hover:bg-opm-card'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-opm-yellow' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-opm-yellow/20 text-opm-yellow">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
