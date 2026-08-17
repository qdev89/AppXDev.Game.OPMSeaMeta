import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { defaultTeamGuides } from '../data/defaultTeamGuides';
import { 
  X, 
  Shield, 
  Swords, 
  Zap, 
  Atom, 
  Crown, 
  Sparkles, 
  Flame, 
  Plus, 
  Check, 
  BookOpen, 
  Award, 
  Layers, 
  Crosshair, 
  AlertTriangle,
  Share2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Target,
  Gauge,
  Compass,
  Lightbulb,
  CheckCircle2,
  HelpCircle,
  Activity,
  BookmarkCheck,
  CheckSquare,
  ShieldAlert,
  Star
} from 'lucide-react';

export const CharacterModal = ({ 
  character, 
  onClose, 
  isInTeam = false, 
  onAddToTeam,
  onLoadTeam
}) => {
  const { language, getLocalized, t } = useLanguage();
  const { characters, setSlotCharacter, showToast } = useMetaData();

  if (!character) return null;

  const classIcons = {
    Grappler: <Shield className="w-4 h-4 text-amber-400" />,
    Duelist: <Swords className="w-4 h-4 text-red-400" />,
    HiTech: <Zap className="w-4 h-4 text-cyan-400" />,
    Esper: <Atom className="w-4 h-4 text-purple-400" />,
  };

  const handleShareHero = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?hero=${character.id}`;
    navigator.clipboard.writeText(shareUrl);
    showToast(
      language === 'vi' 
        ? `Đã sao chép link chia sẻ [${getLocalized(character.name)}]!` 
        : `Copied share link for [${getLocalized(character.name)}]!`, 
      'success'
    );
  };

  const getHeroObj = (heroId) => {
    if (!heroId) return null;
    let found = characters.find((c) => c.id === heroId);
    if (!found) {
      found = characters.find((c) => c.id.includes(heroId) || heroId.includes(c.id));
    }
    return found;
  };

  // 1. Check if character has its own bespoke recommendedTeams list (3 curated teams)
  // 2. Fallback to defaultTeamGuides if matched
  let recommendedTeamsToDisplay = character.recommendedTeams || [];
  
  if (!recommendedTeamsToDisplay || recommendedTeamsToDisplay.length === 0) {
    const matchingGuides = defaultTeamGuides.filter((guide) => {
      const allHeroes = [...guide.formation.frontRow, ...guide.formation.backRow];
      return allHeroes.includes(character.id);
    });
    if (matchingGuides.length > 0) {
      recommendedTeamsToDisplay = matchingGuides;
    }
  }

  const handleApplyLineupDirect = (team) => {
    const slots = [
      team.formation.frontRow[0],
      team.formation.frontRow[1],
      team.formation.frontRow[2],
      team.formation.backRow[0],
      team.formation.backRow[1],
      team.formation.backRow[2],
    ];

    slots.forEach((charId, idx) => {
      if (charId) {
        setSlotCharacter(idx, charId);
      }
    });

    showToast(
      language === 'vi'
        ? `Đã nạp đội hình [${getLocalized(team.name)}] vào Xếp Đội Hình!`
        : `Loaded [${getLocalized(team.name)}] into Lineup Builder!`,
      'success'
    );

    if (onLoadTeam) {
      onLoadTeam();
    }
  };

  const gameplay = character.gameplayGuide || {
    role: { en: "Versatile Combatant", vi: "Tướng Chiến Đấu Toàn Năng" },
    positioning: { en: "Flexible Grid Position", vi: "Vị trí linh hoạt theo đội hình" },
    speedOrder: { en: "Speed #2 - #4", vi: "Tốc độ #2 - #4" },
    statPriority: { en: ["ATK%", "HP%", "SPD", "Crit Rate%"], vi: ["Công %", "Máu %", "Tốc Độ", "Tỉ Lệ Bạo %"] },
    comboTips: { en: "Coordinate with Core skills and apply debuffs before executing burst damage.", vi: "Kết hợp kích hoạt kỹ năng Lõi và dồn sát thương khi địch bị suy yếu." },
    proTips: { en: "Equip matching gear sets to maximize synergy effects.", vi: "Lắp đủ 4 món trang bị kích hoạt dòng ẩn để phát huy uy lực." }
  };

  const mechanics = character.mechanics || {
    coreTags: ['[Sát Thương Vật Lý]', '[Tích Nộ Cơ Bản]'],
    mechanicsExplanation: {
      vi: 'Cơ chế chiến đấu tiêu chuẩn dựa trên tương quan công thủ và kích hoạt nộ năng lượng.',
      en: 'Standard combat mechanics based on ATK/DEF scaling and energy generation.'
    },
    skillAnalysis: {
      normal: {
        tacticalUse: { vi: 'Sử dụng để tích nộ và nhường điểm nộ cho Carry.', en: 'Use to conserve energy and generate turns.' }
      },
      ultimate: {
        tacticalUse: { vi: 'Xả nộ dồn sát thương chính của nhân vật.', en: 'Primary burst skill execution.' }
      },
      ultraUltimate: {
        tacticalUse: { vi: 'Nâng cấp chỉ số và phạm vi kỹ năng.', en: 'Enhanced scaling and range.' },
        keepsakePriority: { vi: 'TÙY CHỌN / TIẾT KIỆM', en: 'OPTIONAL' }
      },
      passive: {
        tacticalUse: { vi: 'Duy trì hiệu ứng bị động suốt trận đấu.', en: 'Permanent passive combat perks.' }
      }
    },
    skillPriority: {
      order: {
        vi: 'Tuyệt Kỹ > Nội Tại > Thức Tỉnh > Đòn Thường',
        en: 'Ultimate > Passive > Awakening > Normal Attack'
      },
      powerSpikes: [
        {
          stage: { vi: '⭐ 3 Sao Cơ Bản', en: '⭐ 3-Star Baseline' },
          effect: { vi: 'Mở khóa toàn bộ chỉ số cơ bản.', en: 'Unlocks base stat pool.' }
        },
        {
          stage: { vi: '⭐⭐⭐⭐⭐ 5 Sao Đột Phá', en: '⭐⭐⭐⭐⭐ 5-Star Breakthrough' },
          effect: { vi: 'Tối đa hóa hiệu ứng Nội Tại Bị Động.', en: 'Maximizes Passive scaling.' }
        }
      ]
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-opm-card border border-opm-borderHighlight rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Banner */}
        <div className="relative p-5 sm:p-8 bg-gradient-to-r from-opm-card via-slate-900 to-opm-cardLight border-b border-opm-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-opm-yellow/50 shadow-glow-yellow bg-slate-950 flex-shrink-0">
              <img 
                src={character.avatar || "avatars/ur_saitama.webp"} 
                alt={getLocalized(character.name)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "avatars/ur_saitama.webp";
                }}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className={`px-2.5 py-0.5 text-xs font-black rounded-md tracking-wider uppercase text-white ${
                  character.rarity === 'UR+' ? 'rarity-badge-ur shadow-glow-ur bg-gradient-to-r from-purple-600 to-pink-600' :
                  character.rarity === 'UR' ? 'rarity-badge-ur' :
                  character.rarity === 'SSR+' ? 'rarity-badge-ssr-plus' :
                  character.rarity === 'SSR' ? 'rarity-badge-ssr text-black' :
                  character.rarity === 'SR' ? 'rarity-badge-sr' : 'rarity-badge-r'
                }`}>
                  {character.rarity}
                </span>

                <span className="px-2.5 py-0.5 text-xs font-black rounded-full bg-opm-yellow text-black uppercase">
                  {t('common.tier')}: {character.tier}
                </span>

                {character.hasCore && (
                  <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                    <Crown className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CORE MASTER</span>
                  </span>
                )}

                <span className="px-2.5 py-0.5 text-xs font-bold rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {character.faction} • {character.class}
                </span>
              </div>

              <h2 className="font-display font-black text-xl sm:text-2xl text-slate-100">
                {getLocalized(character.name)}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {getLocalized(character.title) || `${character.faction} • ${character.class}`}
              </p>
            </div>
          </div>

          {/* Close & Action Buttons (Share & Add To Team - Edit/Delete Removed) */}
          <div className="flex items-center gap-2 self-end sm:self-auto flex-wrap">
            
            {/* Share Link Button */}
            <button
              onClick={handleShareHero}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-opm-cardLight border border-opm-border hover:border-opm-yellow/50 text-xs font-bold text-slate-200 hover:text-opm-yellow transition-all cursor-pointer"
              title={language === 'vi' ? 'Sao chép link chia sẻ tướng này' : 'Copy share URL for this hero'}
            >
              <Share2 className="w-3.5 h-3.5 text-opm-yellow" />
              <span>{language === 'vi' ? 'Chia Sẻ' : 'Share'}</span>
            </button>

            {/* Quick Add To Team Button */}
            <button
              onClick={() => onAddToTeam && onAddToTeam(character.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isInTeam
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50'
                  : 'bg-opm-yellow hover:bg-amber-400 text-slate-950 shadow-glow-yellow'
              }`}
            >
              {isInTeam ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{isInTeam ? t('common.inTeam') : t('common.addToTeam')}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-7">
          
          {/* SECTION 1: DETAILED GAMEPLAY & PLAYSTYLE GUIDE (CHI TIẾT CÁCH CHƠI) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-opm-card to-cyan-950/20 border border-cyan-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-opm-border/80 pb-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 uppercase tracking-wide">
                    {language === 'vi' ? '1. Hướng Dẫn Cách Chơi & Vận Hành Trận Đấu' : '1. Comprehensive Gameplay & Tactical Playstyle'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'vi' ? 'Vai trò chiến thuật, vị trí đứng, thứ tự tốc độ và chuỗi combo kỹ năng.' : 'Tactical role, grid positioning, turn speed sequencing, and skill combos.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Grid 4 Gameplay Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Pillar 1: Role & Positioning */}
              <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>{language === 'vi' ? 'Vai Trò & Vị Trí Đứng:' : 'Role & Positioning:'}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">{language === 'vi' ? '• Vai trò:' : '• Role:'}</span>
                    <span className="font-bold text-amber-300">{getLocalized(gameplay.role)}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">{language === 'vi' ? '• Vị trí:' : '• Grid:'}</span>
                    <span className="text-slate-300">{getLocalized(gameplay.positioning)}</span>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Speed Order & Turn Sequencing */}
              <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-cyan-400 uppercase">
                  <Gauge className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'vi' ? 'Thứ Tự Tốc Độ (Speed Tuning):' : 'Speed Priority Sequencing:'}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">{language === 'vi' ? '• Thứ tự:' : '• Speed Order:'}</span>
                    <span className="font-bold text-cyan-300">{getLocalized(gameplay.speedOrder)}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">{language === 'vi' ? '• Tốc cơ bản:' : '• Base SPD:'}</span>
                    <span className="text-slate-300">{character.stats?.spd} SPD</span>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Substat Priority */}
              <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'vi' ? 'Ưu Tiên Dòng Phụ Trang Bị:' : 'Gear Substat Priority:'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(getLocalized(gameplay.statPriority) || []).map((stat, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] font-black">
                      #{sIdx + 1} {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pillar 4: Pro Strategy Tips */}
              <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-purple-400 uppercase">
                  <Lightbulb className="w-4 h-4 text-purple-400" />
                  <span>{language === 'vi' ? 'Mẹo Trang Bị Đỉnh Cao:' : 'Gear & Synergies Pro Tip:'}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {getLocalized(gameplay.proTips)}
                </p>
              </div>

            </div>

            {/* Combo & Rotation Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-cyan-500/30 text-xs text-slate-200 leading-relaxed space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-300 font-black text-xs uppercase">
                <Zap className="w-4 h-4 text-opm-yellow" />
                <span>{language === 'vi' ? 'Chuỗi Combo Kỹ Năng & Vận Hành Trận Đấu:' : 'Skill Rotation & Combat Execution:'}</span>
              </div>
              <p className="text-slate-300">
                {getLocalized(gameplay.comboTips)}
              </p>
            </div>
          </div>

          {/* SECTION 2: EXCLUSIVE COMBAT MECHANICS (GIẢI THÍCH CƠ CHẾ CHIẾN ĐẤU CỐT LÕI) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-opm-card to-purple-950/30 border border-purple-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-opm-border/80 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 uppercase tracking-wide">
                    {language === 'vi' ? '2. Cơ Chế Chiến Đấu Độc Quyền (Combat Mechanics)' : '2. Exclusive Combat Mechanics & Identity'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'vi' ? 'Bản chất cơ chế tương tác trong trận, khả năng xuyên giáp/khiên và đối kháng meta.' : 'Fundamental damage interaction, shield piercing mechanisms, and meta matchup dynamics.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Mechanics Badges */}
            <div className="flex flex-wrap gap-2">
              {(mechanics.coreTags || []).map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-3 py-1 rounded-xl bg-purple-950/70 text-purple-300 border border-purple-500/50 text-xs font-black tracking-wide uppercase shadow-sm"
                >
                  ⚡ {tag}
                </span>
              ))}
            </div>

            {/* In-depth Mechanics Explanation Card */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 text-xs text-slate-200 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold uppercase text-[11px]">
                <BookmarkCheck className="w-4 h-4 text-purple-400" />
                <span>{language === 'vi' ? 'Phân Tích Cơ Chế Hoạt Động Trong Game:' : 'In-Game Mechanics Breakdown:'}</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {getLocalized(mechanics.mechanicsExplanation)}
              </p>
            </div>
          </div>

          {/* SECTION 3: IN-DEPTH SKILLS BREAKDOWN & TACTICAL ANALYSIS (PHÂN TÍCH KỸ NĂNG & MẸO THỰC CHIẾN) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Swords className="w-5 h-5 text-opm-red" />
              <div>
                <h3 className="font-display font-black text-sm sm:text-base text-slate-200 uppercase tracking-wider">
                  {language === 'vi' ? '3. Chi Tiết Kỹ Năng & Phân Tích Thực Chiến' : '3. Deep Skill Breakdown & Combat Notes'}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {language === 'vi' ? 'Hệ số sát thương, hiệu ứng phụ và hướng dẫn sử dụng từng kỹ năng.' : 'Damage multipliers, side-effects, and combat usage instructions.'}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Normal Attack */}
              {character.skills?.normal && (
                <div className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-2.5">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-slate-800 text-slate-300 uppercase">
                      {t('skills.normal')}
                    </span>
                    <span className="font-bold text-xs text-amber-300">
                      {getLocalized(character.skills.normal.name)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalized(character.skills.normal.desc)}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                    <span className="font-bold text-amber-400 flex items-center gap-1">
                      💡 {language === 'vi' ? 'Mẹo Thực Chiến:' : 'Combat Note:'}
                    </span>
                    <p className="text-slate-400">
                      {getLocalized(mechanics.skillAnalysis?.normal?.tacticalUse) || (language === 'vi' ? 'Dùng khi cần tiết kiệm nộ cho chủ lực.' : 'Conserves energy for main carry.')}
                    </p>
                  </div>
                </div>
              )}

              {/* Ultimate Skill */}
              {character.skills?.ultimate && (
                <div className="p-4 rounded-2xl bg-opm-bg/80 border border-amber-500/40 shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between gap-2 border-b border-amber-500/20 pb-2">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-amber-950 text-amber-300 border border-amber-500/40 uppercase">
                      {t('skills.ultimate')}
                    </span>
                    <span className="font-bold text-xs text-amber-300">
                      {getLocalized(character.skills.ultimate.name)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {getLocalized(character.skills.ultimate.desc)}
                  </p>

                  <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-slate-300 space-y-1">
                    <span className="font-bold text-amber-300 flex items-center gap-1">
                      ⚔️ {language === 'vi' ? 'Thời Điểm Xả Nộ:' : 'Burst Execution:'}
                    </span>
                    <p className="text-slate-300">
                      {getLocalized(mechanics.skillAnalysis?.ultimate?.tacticalUse) || (language === 'vi' ? 'Kích hoạt dồn sát thương sốc nổ sau khi địch bị Vỡ Giáp.' : 'Cast burst after enemy is shattered.')}
                    </p>
                  </div>
                </div>
              )}

              {/* Keepsake / Ultra Ultimate */}
              {character.skills?.ultraUltimate && (
                <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/40 via-opm-bg to-rose-950/20 border border-rose-500/50 shadow-md space-y-2.5">
                  <div className="flex items-center justify-between gap-2 border-b border-rose-500/30 pb-2">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-rose-900 text-rose-200 border border-rose-400/40 flex items-center gap-1 uppercase">
                      <Sparkles className="w-3 h-3 text-rose-300" />
                      {t('skills.ultraUltimate')}
                    </span>
                    <span className="font-bold text-xs text-rose-300">
                      {getLocalized(character.skills.ultraUltimate.name)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {getLocalized(character.skills.ultraUltimate.desc)}
                  </p>

                  <div className="p-2.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-[11px] text-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-rose-300 flex items-center gap-1">
                        💎 {language === 'vi' ? 'Đánh Giá Thần Binh:' : 'Keepsake Value:'}
                      </span>
                      <span className="font-black text-[10px] text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-rose-500/30">
                        {getLocalized(mechanics.skillAnalysis?.ultraUltimate?.keepsakePriority)}
                      </span>
                    </div>
                    <p className="text-slate-300">
                      {getLocalized(mechanics.skillAnalysis?.ultraUltimate?.tacticalUse)}
                    </p>
                  </div>
                </div>
              )}

              {/* Passive Talent */}
              {character.skills?.passive && (
                <div className="p-4 rounded-2xl bg-opm-bg/80 border border-purple-500/40 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 border-b border-purple-500/20 pb-2">
                    <span className="px-2 py-0.5 text-[10px] font-black rounded bg-purple-950 text-purple-300 border border-purple-500/40 uppercase">
                      {t('skills.passive')}
                    </span>
                    <span className="font-bold text-xs text-purple-300">
                      {getLocalized(character.skills.passive.name)}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {getLocalized(character.skills.passive.desc)}
                  </p>

                  <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-[11px] text-slate-300 space-y-1">
                    <span className="font-bold text-purple-300 flex items-center gap-1">
                      🛡️ {language === 'vi' ? 'Cơ Chế Kích Hoạt:' : 'Trigger Mechanic:'}
                    </span>
                    <p className="text-slate-400">
                      {getLocalized(mechanics.skillAnalysis?.passive?.tacticalUse)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SECTION 4: SKILL LEVELING PRIORITY & POWER SPIKE ROADMAP (THỨ TỰ NÂNG CẤP & MỐC ĐỘT PHÁ) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-opm-card to-emerald-950/20 border border-emerald-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-opm-border/80 pb-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 uppercase tracking-wide">
                    {language === 'vi' ? '4. Thứ Tự Nâng Cấp & Mốc Đột Phá Sức Mạnh' : '4. Skill Leveling Priority & Power Spikes'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'vi' ? 'Lộ trình dồn tài nguyên và các mốc sao mở khóa ngưỡng sức mạnh quan trọng.' : 'Resource allocation sequence and crucial milestone power spikes.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Priority Sequence Banner */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-200">
              <span className="font-black text-amber-400 shrink-0">⭐ {language === 'vi' ? 'Thứ Tự Ưu Tiên:' : 'Skill Priority:'}</span>
              <span className="font-bold">{getLocalized(mechanics.skillPriority?.order)}</span>
            </div>

            {/* Power Spikes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(mechanics.skillPriority?.powerSpikes || []).map((spike, spIdx) => (
                <div key={spIdx} className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 space-y-1">
                  <span className="font-black text-xs text-emerald-300 block">
                    {getLocalized(spike.stage)}
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {getLocalized(spike.effect)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: RECOMMENDED META TEAMS (ĐỘI HÌNH ĐỀ XUẤT) */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-opm-card to-amber-950/20 border border-amber-500/40 shadow-xl space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-opm-border/80 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-opm-yellow" />
                <div>
                  <h3 className="font-display font-black text-base sm:text-lg text-slate-100 uppercase tracking-wide">
                    {language === 'vi' ? '5. Đội Hình Đề Xuất (Recommended Meta Comps)' : '5. Recommended Meta Lineups'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {language === 'vi' ? 'Đội hình chiến thuật 6v6 chuẩn meta tối ưu hóa cho vị tướng này.' : 'Optimal 6v6 synergy formations tailored for this hero.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {recommendedTeamsToDisplay.map((team, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-opm-bg/80 border border-opm-border space-y-3 hover:border-amber-500/50 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-red-600/20 text-red-300 border border-red-500/30 text-[11px] font-black uppercase">
                        {team.tier} Tier
                      </span>
                      <h4 className="font-display font-bold text-sm text-slate-100">
                        {getLocalized(team.name)}
                      </h4>
                    </div>

                    <button
                      onClick={() => handleApplyLineupDirect(team)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-opm-yellow hover:bg-amber-400 text-slate-950 text-xs font-black shadow-glow-yellow transition-all self-start sm:self-auto cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{language === 'vi' ? 'Nạp Đội Hình Này' : 'Load Team'}</span>
                    </button>
                  </div>

                  {/* 6-Hero Lineup Grid (Front & Back) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    
                    {/* Front Row */}
                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-opm-border/60 shadow-inner">
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                        🛡️ {language === 'vi' ? 'Hàng Trước (Tiền Trận 1 - 3):' : 'Frontline (Slots 1 - 3):'}
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {team.formation.frontRow.map((heroId, fIdx) => {
                          const h = getHeroObj(heroId);
                          const isCurrentHero = heroId === character.id;
                          return (
                            <div 
                              key={fIdx} 
                              className={`flex flex-col items-center p-1.5 rounded-xl border text-center transition-all ${
                                isCurrentHero 
                                  ? 'bg-amber-500/25 border-amber-400 shadow-glow-yellow ring-2 ring-amber-400/50' 
                                  : 'bg-opm-card/90 border-opm-border hover:border-slate-600'
                              }`}
                            >
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden mb-1 border border-slate-700/80 bg-slate-950 flex-shrink-0">
                                <img 
                                  src={h?.avatar || "avatars/ur_saitama.webp"} 
                                  alt={h ? getLocalized(h.name) : heroId}
                                  className="w-full h-full object-cover"
                                  onError={(e) => { e.target.src = "avatars/ur_saitama.webp"; }}
                                />
                                {h?.rarity && (
                                  <span className={`absolute bottom-0 right-0 px-1 text-[8px] font-black leading-tight rounded-tl text-white ${
                                    h.rarity === 'UR+' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                                    h.rarity === 'UR' ? 'bg-purple-600' :
                                    h.rarity === 'SSR+' ? 'bg-amber-500 text-black' :
                                    h.rarity === 'SSR' ? 'bg-amber-400 text-black' :
                                    h.rarity === 'SR' ? 'bg-purple-500' : 'bg-blue-500'
                                  }`}>
                                    {h.rarity}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] font-bold text-slate-100 line-clamp-1">
                                {h ? getLocalized(h.name) : heroId}
                              </span>
                              <span className="text-[9px] text-slate-400">
                                #{fIdx + 1} • {h?.class || 'Hero'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Back Row */}
                    <div className="p-3 rounded-2xl bg-slate-950/70 border border-opm-border/60 shadow-inner">
                      <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                        🎯 {language === 'vi' ? 'Hàng Sau (Hậu Trận 4 - 6):' : 'Backline (Slots 4 - 6):'}
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {team.formation.backRow.map((heroId, bIdx) => {
                          const h = getHeroObj(heroId);
                          const isCurrentHero = heroId === character.id;
                          return (
                            <div 
                              key={bIdx} 
                              className={`flex flex-col items-center p-1.5 rounded-xl border text-center transition-all ${
                                isCurrentHero 
                                  ? 'bg-amber-500/25 border-amber-400 shadow-glow-yellow ring-2 ring-amber-400/50' 
                                  : 'bg-opm-card/90 border-opm-border hover:border-slate-600'
                              }`}
                            >
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden mb-1 border border-slate-700/80 bg-slate-950 flex-shrink-0">
                                <img 
                                  src={h?.avatar || "avatars/ur_saitama.webp"} 
                                  alt={h ? getLocalized(h.name) : heroId}
                                  className="w-full h-full object-cover"
                                  onError={(e) => { e.target.src = "avatars/ur_saitama.webp"; }}
                                />
                                {h?.rarity && (
                                  <span className={`absolute bottom-0 right-0 px-1 text-[8px] font-black leading-tight rounded-tl text-white ${
                                    h.rarity === 'UR+' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                                    h.rarity === 'UR' ? 'bg-purple-600' :
                                    h.rarity === 'SSR+' ? 'bg-amber-500 text-black' :
                                    h.rarity === 'SSR' ? 'bg-amber-400 text-black' :
                                    h.rarity === 'SR' ? 'bg-purple-500' : 'bg-blue-500'
                                  }`}>
                                    {h.rarity}
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] font-bold text-slate-100 line-clamp-1">
                                {h ? getLocalized(h.name) : heroId}
                              </span>
                              <span className="text-[9px] text-slate-400">
                                #{bIdx + 4} • {h?.class || 'Hero'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* Strategy Note */}
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-opm-border/40">
                    💡 <span className="font-semibold text-amber-300">{language === 'vi' ? 'Chiến thuật:' : 'Strategy:'}</span> {getLocalized(team.strategy)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skill (If applicable) */}
          {character.hasCore && character.skills?.coreSkill && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-opm-bg to-cyan-950/20 border border-cyan-500/40 shadow-glow-cyan">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-cyan-400 animate-bounce-short" />
                <h4 className="font-display font-black text-sm text-cyan-300 uppercase tracking-wide">
                  {getLocalized(character.skills.coreSkill.name)}
                </h4>
              </div>
              
              <p className="text-xs font-semibold text-cyan-400/90 mb-3 bg-cyan-950/60 p-2 rounded-lg border border-cyan-800/40">
                {getLocalized(character.skills.coreSkill.requirement)}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-cyan-900/50">
                  <span className="font-bold text-cyan-300 block mb-1">{t('skills.coreBasic')}</span>
                  <p className="text-slate-300 leading-relaxed">{getLocalized(character.skills.coreSkill.basicEffect)}</p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-cyan-900/50">
                  <span className="font-bold text-cyan-300 block mb-1">{t('skills.coreAdvanced')}</span>
                  <p className="text-slate-300 leading-relaxed">{getLocalized(character.skills.coreSkill.advancedEffect)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Awakening Perks */}
          {character.skills?.awakening && (
            <div>
              <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <span>{t('common.awakening')}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-opm-bg/60 border border-amber-500/20">
                  <span className="text-[11px] font-bold text-amber-400 block mb-1">{t('skills.awakening1')}</span>
                  <p className="text-xs text-slate-300">{getLocalized(character.skills.awakening.stage1)}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-opm-bg/60 border border-amber-500/20">
                  <span className="text-[11px] font-bold text-amber-400 block mb-1">{t('skills.awakening2')}</span>
                  <p className="text-xs text-slate-300">{getLocalized(character.skills.awakening.stage2)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Meta Strategy & Synergies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Recommended Gears */}
            <div className="p-4 rounded-2xl bg-opm-bg/60 border border-opm-border">
              <h4 className="font-bold text-xs text-opm-yellow uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>{t('common.recommendedGear')}</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {character.recommendedGears?.map((gear, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-xl bg-opm-card border border-opm-borderHighlight font-bold text-xs text-slate-200">
                    {gear}
                  </span>
                ))}
              </div>
            </div>

            {/* Synergies */}
            <div className="p-4 rounded-2xl bg-opm-bg/60 border border-opm-border">
              <h4 className="font-bold text-xs text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Crosshair className="w-4 h-4" />
                <span>{t('common.synergy')}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {getLocalized(character.synergies)}
              </p>
            </div>
          </div>

          {/* Counters */}
          {character.counters && (
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-800/40">
              <h4 className="font-bold text-xs text-rose-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{t('common.counters')}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {getLocalized(character.counters)}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
