import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { useMetaData } from './context/MetaDataContext';
import { Navbar } from './components/Navbar';
import { CharacterCard } from './components/CharacterCard';
import { CharacterModal } from './components/CharacterModal';
import { TeamBuilder } from './components/TeamBuilder';
import { TeamStrategyGuide } from './components/TeamStrategyGuide';
import { NewbieGuide } from './components/NewbieGuide';
import { DamageMechanics } from './components/DamageMechanics';
import { MasteryRefinement } from './components/MasteryRefinement';
import { GiftCodes } from './components/GiftCodes';
import { TierList } from './components/TierList';
import { GearPlanner } from './components/GearPlanner';
import { BannerPlanner } from './components/BannerPlanner';
import { MetaDataManager } from './components/MetaDataManager';
import { Toast } from './components/Toast';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Crown, 
  Sparkles, 
  ArrowUpDown,
  Swords,
  ShieldCheck,
  Flame,
  Github,
  Heart,
  Share2
} from 'lucide-react';

export function App() {
  const { language, getLocalized, t } = useLanguage();
  const { characters, activeLineup, setSlotCharacter, showToast } = useMetaData();

  // Active Main Tab: 'characters' | 'newbie' | 'teambuilder' | 'teamguides' | 'damage' | 'mastery' | 'tierlist' | 'gears' | 'banners' | 'codes' | 'metadata'
  const [activeTab, setActiveTab] = useState('characters');

  // Filter States for Character Catalog
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedFaction, setSelectedFaction] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedTier, setSelectedTier] = useState('All');
  const [onlyCores, setOnlyCores] = useState(false);
  const [sortBy, setSortBy] = useState('tier'); // 'tier' | 'rarity' | 'spd' | 'atk' | 'hp' | 'name'

  // Modal State
  const [viewingCharacter, setViewingCharacter] = useState(null);

  // Parse URL search parameters on initial load
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      const heroParam = urlParams.get('hero');
      const lineupParam = urlParams.get('lineup');

      if (tabParam) {
        setActiveTab(tabParam);
      }

      if (heroParam && characters.length > 0) {
        const found = characters.find((c) => c.id === heroParam || c.id.toLowerCase() === heroParam.toLowerCase());
        if (found) {
          setViewingCharacter(found);
        }
      }

      if (lineupParam) {
        const slots = decodeURIComponent(lineupParam).split(',');
        slots.slice(0, 6).forEach((charId, idx) => {
          if (charId && charId !== 'empty') {
            setSlotCharacter(idx, charId);
          }
        });
      }
    } catch (e) {
      console.warn('Failed to parse URL query params:', e);
    }
  }, [characters]);

  // Sync browser URL with active state
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (viewingCharacter) {
        url.searchParams.set('hero', viewingCharacter.id);
        url.searchParams.delete('tab');
      } else {
        url.searchParams.delete('hero');
        if (activeTab !== 'characters') {
          url.searchParams.set('tab', activeTab);
        } else {
          url.searchParams.delete('tab');
        }
      }
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // Ignored in non-browser environments
    }
  }, [activeTab, viewingCharacter]);

  // Rarity priority for sorting
  const rarityWeight = { 'UR+': 6, UR: 5, 'SSR+': 4, SSR: 3, SR: 2, R: 1 };
  const tierWeight = { SSS: 5, SS: 4, S: 3, A: 2, B: 1 };

  // Filtered & Sorted Characters
  const filteredCharacters = useMemo(() => {
    return characters
      .filter((char) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const nameEn = char.name?.en?.toLowerCase() || '';
          const nameVi = char.name?.vi?.toLowerCase() || '';
          const titleEn = char.title?.en?.toLowerCase() || '';
          const titleVi = char.title?.vi?.toLowerCase() || '';
          const normalDesc = char.skills?.normal?.desc?.en?.toLowerCase() || '';
          const ultDesc = char.skills?.ultimate?.desc?.en?.toLowerCase() || '';
          const passDesc = char.skills?.passive?.desc?.en?.toLowerCase() || '';
          
          const matchesText = 
            nameEn.includes(q) ||
            nameVi.includes(q) ||
            titleEn.includes(q) ||
            titleVi.includes(q) ||
            normalDesc.includes(q) ||
            ultDesc.includes(q) ||
            passDesc.includes(q);

          if (!matchesText) return false;
        }

        // Rarity Filter
        if (selectedRarity !== 'All' && char.rarity !== selectedRarity) return false;

        // Faction Filter
        if (selectedFaction !== 'All' && char.faction !== selectedFaction) return false;

        // Class Filter
        if (selectedClass !== 'All' && char.class !== selectedClass) return false;

        // Tier Filter
        if (selectedTier !== 'All' && char.tier !== selectedTier) return false;

        // Core filter
        if (onlyCores && !char.hasCore) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'tier') {
          return (tierWeight[b.tier] || 0) - (tierWeight[a.tier] || 0);
        }
        if (sortBy === 'rarity') {
          return (rarityWeight[b.rarity] || 0) - (rarityWeight[a.rarity] || 0);
        }
        if (sortBy === 'spd') {
          return (b.stats?.spd || 0) - (a.stats?.spd || 0);
        }
        if (sortBy === 'atk') {
          return (b.stats?.atk || 0) - (a.stats?.atk || 0);
        }
        if (sortBy === 'hp') {
          return (b.stats?.hp || 0) - (a.stats?.hp || 0);
        }
        if (sortBy === 'name') {
          return getLocalized(a.name).localeCompare(getLocalized(b.name));
        }
        return 0;
      });
  }, [
    characters,
    searchQuery,
    selectedRarity,
    selectedFaction,
    selectedClass,
    selectedTier,
    onlyCores,
    sortBy,
    language,
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRarity('All');
    setSelectedFaction('All');
    setSelectedClass('All');
    setSelectedTier('All');
    setOnlyCores(false);
    setSortBy('tier');
  };

  const handleQuickAddToLineup = (charId) => {
    const emptyIndex = activeLineup.findIndex((slot) => slot === null);
    if (emptyIndex !== -1) {
      setSlotCharacter(emptyIndex, charId);
    } else {
      // Replace slot 0 if team is full
      setSlotCharacter(0, charId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-opm-yellow selection:text-black">
      
      {/* Top Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCreateModal={handleOpenCreateModal}
      />

      {/* Main App Container */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 w-full">
        
        {/* TAB 1: Characters Catalog */}
        {activeTab === 'characters' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Hero Welcome & Overview Bar */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-opm-borderHighlight/80">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-opm-yellow text-slate-950 uppercase tracking-wide">
                      {t('serverTag')}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-black rounded-md bg-gradient-to-r from-amber-500/30 to-rose-500/30 text-amber-300 border border-amber-500/40 uppercase tracking-wide flex items-center gap-1 shadow-glow-yellow">
                      👑 Created by LSB-Clan • Server 794
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-opm-card text-slate-300 border border-opm-border">
                      {filteredCharacters.length} / {characters.length} Heroes
                    </span>
                  </div>
                  <h1 className="font-display font-black text-2xl sm:text-4xl text-slate-100 tracking-tight">
                    {t('appTitle')}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                    {t('appSubtitle')} — Explore UR awakening stats, keepsakes, core skills, and meta synergies in English & Vietnamese.
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveTab('teambuilder')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-opm-yellow hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-glow-yellow transition-all"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>{t('nav.teamBuilder')}</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('tierlist')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-slate-200 font-bold text-xs sm:text-sm transition-all"
                  >
                    <Flame className="w-4 h-4 text-opm-yellow" />
                    <span>{t('nav.tierList')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter & Search Dashboard Toolbar */}
            <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-opm-borderHighlight/80 space-y-4">
              
              {/* Search input & Sort selector */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('common.search')}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                  <ArrowUpDown className="w-4 h-4 text-opm-yellow hidden sm:block" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto px-3.5 py-2.5 rounded-2xl bg-opm-bg border border-opm-border text-xs sm:text-sm text-white font-semibold focus:outline-none focus:border-opm-yellow cursor-pointer"
                  >
                    <option value="tier">Sort: Meta Tier (SSS → B)</option>
                    <option value="rarity">Sort: Rarity (UR → R)</option>
                    <option value="spd">Sort: Speed (SPD)</option>
                    <option value="atk">Sort: Attack (ATK)</option>
                    <option value="hp">Sort: Health (HP)</option>
                    <option value="name">Sort: Name (A-Z)</option>
                  </select>

                  <button
                    onClick={handleResetFilters}
                    className="p-2.5 rounded-2xl bg-opm-bg border border-opm-border hover:border-slate-500 text-slate-400 hover:text-white transition-colors"
                    title={t('common.reset')}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Filtering Badges & Selectors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
                
                {/* Rarity */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">{t('common.rarity')}</label>
                  <select
                    value={selectedRarity}
                    onChange={(e) => setSelectedRarity(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  >
                    <option value="All">{t('common.all')} ({characters.length})</option>
                    <option value="UR+">UR+ (Supreme UR)</option>
                    <option value="UR">UR (Ultra Rare)</option>
                    <option value="SSR+">SSR+ (Awakened)</option>
                    <option value="SSR">SSR</option>
                    <option value="SR">SR</option>
                    <option value="R">R</option>
                  </select>
                </div>

                {/* Class */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">{t('common.role')}</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  >
                    <option value="All">{t('common.all')}</option>
                    <option value="Grappler">{t('classes.Grappler')}</option>
                    <option value="Duelist">{t('classes.Duelist')}</option>
                    <option value="HiTech">{t('classes.HiTech')}</option>
                    <option value="Esper">{t('classes.Esper')}</option>
                  </select>
                </div>

                {/* Faction */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">{t('common.faction')}</label>
                  <select
                    value={selectedFaction}
                    onChange={(e) => setSelectedFaction(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  >
                    <option value="All">{t('common.all')}</option>
                    <option value="Hero">{t('factions.Hero')}</option>
                    <option value="Monster">{t('factions.Monster')}</option>
                    <option value="Outlaw">{t('factions.Outlaw')}</option>
                    <option value="Martial">{t('factions.Martial')}</option>
                  </select>
                </div>

                {/* Meta Tier */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">{t('common.tier')}</label>
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  >
                    <option value="All">{t('common.all')}</option>
                    <option value="SSS">SSS</option>
                    <option value="SS">SS</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </div>

                {/* Core Only Toggle */}
                <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-end">
                  <button
                    onClick={() => setOnlyCores(!onlyCores)}
                    className={`w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      onlyCores
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500/60 shadow-glow-cyan'
                        : 'bg-opm-bg text-slate-400 border-opm-border hover:text-white'
                    }`}
                  >
                    <Crown className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Core Units Only</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Character Cards Responsive Grid */}
            {filteredCharacters.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-3xl border border-opm-border">
                <p className="text-sm text-slate-400 mb-3">{t('common.noResults')}</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl bg-opm-yellow text-slate-950 text-xs font-bold shadow-glow-yellow"
                >
                  {t('common.reset')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredCharacters.map((char) => (
                  <CharacterCard
                    key={char.id}
                    character={char}
                    isInTeam={activeLineup.includes(char.id)}
                    onViewDetails={(c) => setViewingCharacter(c)}
                    onEdit={(c) => handleOpenEditModal(c)}
                    onAddToTeam={handleQuickAddToLineup}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB: Newbie & Beginner 14-Day Roadmap */}
        {activeTab === 'newbie' && (
          <NewbieGuide onSwitchTab={(tab) => setActiveTab(tab)} />
        )}

        {/* TAB: Team Lineup Builder */}
        {activeTab === 'teambuilder' && (
          <TeamBuilder onOpenCharacterDetails={(c) => setViewingCharacter(c)} />
        )}

        {/* TAB: Meta Team Strategy Guide */}
        {activeTab === 'teamguides' && (
          <TeamStrategyGuide onSwitchTab={(tab) => setActiveTab(tab)} />
        )}

        {/* TAB: Damage Mechanics Engine */}
        {activeTab === 'damage' && <DamageMechanics />}

        {/* TAB: Mastery & Core Refinement */}
        {activeTab === 'mastery' && <MasteryRefinement />}

        {/* TAB: Tier List Matrix */}
        {activeTab === 'tierlist' && (
          <TierList onSelectCharacter={(c) => setViewingCharacter(c)} />
        )}

        {/* TAB: Gear & Sets Planner */}
        {activeTab === 'gears' && <GearPlanner />}

        {/* TAB: SEA Banner Roadmap */}
        {activeTab === 'banners' && <BannerPlanner />}

        {/* TAB: Active Gift Codes */}
        {activeTab === 'codes' && <GiftCodes />}

        {/* TAB: Metadata & Database Center */}
        {activeTab === 'metadata' && <MetaDataManager />}

      </main>

      {/* Character Deep Dive Detail Modal */}
      {viewingCharacter && (
        <CharacterModal
          character={viewingCharacter}
          isInTeam={activeLineup.includes(viewingCharacter.id)}
          onClose={() => setViewingCharacter(null)}
          onAddToTeam={handleQuickAddToLineup}
          onLoadTeam={() => {
            setViewingCharacter(null);
            setActiveTab('teambuilder');
          }}
        />
      )}

      {/* Toast Notification */}
      <Toast />

      {/* Footer */}
      <footer className="mt-12 border-t border-opm-border/60 bg-opm-bg/95 backdrop-blur-md py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-slate-200">OPM SEA META MANAGER</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                Created by LSB-Clan • Server 794
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>Bilingual EN / VI</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">LSB-Clan S794 Community</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">GitHub Pages Ready</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
