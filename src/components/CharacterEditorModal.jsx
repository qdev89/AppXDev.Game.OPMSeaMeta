import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMetaData } from '../context/MetaDataContext';
import { X, Save, Sparkles, Image, Shield, Swords, Zap, Atom } from 'lucide-react';

export const CharacterEditorModal = ({ 
  character = null, 
  isOpen, 
  onClose 
}) => {
  const { language, t } = useLanguage();
  const { addCharacter, updateCharacter } = useMetaData();

  const isEditing = Boolean(character?.id);

  const [formData, setFormData] = useState({
    id: '',
    nameEn: '',
    nameVi: '',
    titleEn: '',
    titleVi: '',
    avatar: '',
    rarity: 'SSR+',
    faction: 'Hero',
    class: 'Grappler',
    tier: 'SS',
    hasCore: false,
    atk: 15000,
    hp: 120000,
    def: 9000,
    spd: 120,
    // Skills
    normalNameEn: '',
    normalNameVi: '',
    normalDescEn: '',
    normalDescVi: '',
    ultNameEn: '',
    ultNameVi: '',
    ultDescEn: '',
    ultDescVi: '',
    ultraUltNameEn: '',
    ultraUltNameVi: '',
    ultraUltDescEn: '',
    ultraUltDescVi: '',
    passiveNameEn: '',
    passiveNameVi: '',
    passiveDescEn: '',
    passiveDescVi: '',
    // Core Skill (if applicable)
    coreNameEn: '',
    coreNameVi: '',
    coreReqEn: 'Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper',
    coreReqVi: 'Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng',
    coreBasicEn: '',
    coreBasicVi: '',
    coreAdvEn: '',
    coreAdvVi: '',
    // Awakening
    awk1En: '',
    awk1Vi: '',
    awk2En: '',
    awk2Vi: '',
    // Extra
    recommendedGears: 'Knight, Suit',
    synergiesEn: '',
    synergiesVi: '',
    countersEn: '',
    countersVi: '',
  });

  useEffect(() => {
    if (character) {
      setFormData({
        id: character.id || '',
        nameEn: character.name?.en || '',
        nameVi: character.name?.vi || '',
        titleEn: character.title?.en || '',
        titleVi: character.title?.vi || '',
        avatar: character.avatar || '',
        rarity: character.rarity || 'SSR+',
        faction: character.faction || 'Hero',
        class: character.class || 'Grappler',
        tier: character.tier || 'SS',
        hasCore: Boolean(character.hasCore),
        atk: character.stats?.atk || 15000,
        hp: character.stats?.hp || 120000,
        def: character.stats?.def || 9000,
        spd: character.stats?.spd || 120,
        normalNameEn: character.skills?.normal?.name?.en || '',
        normalNameVi: character.skills?.normal?.name?.vi || '',
        normalDescEn: character.skills?.normal?.desc?.en || '',
        normalDescVi: character.skills?.normal?.desc?.vi || '',
        ultNameEn: character.skills?.ultimate?.name?.en || '',
        ultNameVi: character.skills?.ultimate?.name?.vi || '',
        ultDescEn: character.skills?.ultimate?.desc?.en || '',
        ultDescVi: character.skills?.ultimate?.desc?.vi || '',
        ultraUltNameEn: character.skills?.ultraUltimate?.name?.en || '',
        ultraUltNameVi: character.skills?.ultraUltimate?.name?.vi || '',
        ultraUltDescEn: character.skills?.ultraUltimate?.desc?.en || '',
        ultraUltDescVi: character.skills?.ultraUltimate?.desc?.vi || '',
        passiveNameEn: character.skills?.passive?.name?.en || '',
        passiveNameVi: character.skills?.passive?.name?.vi || '',
        passiveDescEn: character.skills?.passive?.desc?.en || '',
        passiveDescVi: character.skills?.passive?.desc?.vi || '',
        coreNameEn: character.skills?.coreSkill?.name?.en || '',
        coreNameVi: character.skills?.coreSkill?.name?.vi || '',
        coreReqEn: character.skills?.coreSkill?.requirement?.en || 'Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper',
        coreReqVi: character.skills?.coreSkill?.requirement?.vi || 'Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng',
        coreBasicEn: character.skills?.coreSkill?.basicEffect?.en || '',
        coreBasicVi: character.skills?.coreSkill?.basicEffect?.vi || '',
        coreAdvEn: character.skills?.coreSkill?.advancedEffect?.en || '',
        coreAdvVi: character.skills?.coreSkill?.advancedEffect?.vi || '',
        awk1En: character.skills?.awakening?.stage1?.en || '',
        awk1Vi: character.skills?.awakening?.stage1?.vi || '',
        awk2En: character.skills?.awakening?.stage2?.en || '',
        awk2Vi: character.skills?.awakening?.stage2?.vi || '',
        recommendedGears: character.recommendedGears?.join(', ') || 'Knight, Suit',
        synergiesEn: character.synergies?.en || (typeof character.synergies === 'string' ? character.synergies : ''),
        synergiesVi: character.synergies?.vi || '',
        countersEn: character.counters?.en || (typeof character.counters === 'string' ? character.counters : ''),
        countersVi: character.counters?.vi || '',
      });
    } else {
      // Default blank template for new hero
      setFormData({
        id: `custom_${Date.now()}`,
        nameEn: 'New Meta Unit',
        nameVi: 'Tướng Meta Mới',
        titleEn: 'Hero / Villain Title',
        titleVi: 'Danh Hiệu Tướng',
        avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&auto=format&fit=crop&q=80',
        rarity: 'UR',
        faction: 'Hero',
        class: 'Grappler',
        tier: 'SSS',
        hasCore: false,
        atk: 20000,
        hp: 130000,
        def: 9500,
        spd: 130,
        normalNameEn: 'Normal Strike',
        normalNameVi: 'Đòn Đánh Cơ Bản',
        normalDescEn: 'Deals 150% ATK damage to single enemy.',
        normalDescVi: 'Gây 150% Công lên mục tiêu đơn.',
        ultNameEn: 'Maximum Ultimate',
        ultNameVi: 'Tuyệt Kỹ Tối Thượng',
        ultDescEn: 'Deals 450% ATK to all enemies.',
        ultDescVi: 'Gây 450% Công lên toàn bộ quân địch.',
        ultraUltNameEn: 'Super Ultra Ultimate',
        ultraUltNameVi: 'Siêu Tuyệt Kỹ Thần Binh',
        ultraUltDescEn: 'Keepsake. Deals 700% ATK damage.',
        ultraUltDescVi: 'Thần binh. Gây 700% Công.',
        passiveNameEn: 'Awakened Will',
        passiveNameVi: 'Ý Chí Thức Tỉnh',
        passiveDescEn: 'Increases ATK and ignores control effects.',
        passiveDescVi: 'Tăng Công và miễn nhiễm khống chế.',
        coreNameEn: '',
        coreNameVi: '',
        coreReqEn: 'Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper',
        coreReqVi: 'Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng',
        coreBasicEn: '',
        coreBasicVi: '',
        coreAdvEn: '',
        coreAdvVi: '',
        awk1En: 'Increases team damage by 20%.',
        awk1Vi: 'Tăng 20% sát thương cho toàn đội.',
        awk2En: 'Grants unyielding shield to all allies.',
        awk2Vi: 'Cấp khiên bất khuất cho toàn đội.',
        recommendedGears: 'Knight, Primal, Swordsman',
        synergiesEn: 'Synergizes with Bomb Core and UR Tatsumaki.',
        synergiesVi: 'Ăn ý cùng Lõi Bomb và Tatsumaki UR.',
        countersEn: 'Weak against direct true damage.',
        countersVi: 'Yếu trước sát thương chuẩn.',
      });
    }
  }, [character, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const gearArray = formData.recommendedGears
      .split(',')
      .map((g) => g.trim())
      .filter(Boolean);

    const characterPayload = {
      id: formData.id || `char_${Date.now()}`,
      name: { en: formData.nameEn, vi: formData.nameVi || formData.nameEn },
      title: { en: formData.titleEn, vi: formData.titleVi || formData.titleEn },
      avatar: formData.avatar,
      rarity: formData.rarity,
      faction: formData.faction,
      class: formData.class,
      tier: formData.tier,
      hasCore: formData.hasCore,
      stats: {
        atk: Number(formData.atk) || 0,
        hp: Number(formData.hp) || 0,
        def: Number(formData.def) || 0,
        spd: Number(formData.spd) || 0,
      },
      skills: {
        normal: {
          name: { en: formData.normalNameEn, vi: formData.normalNameVi || formData.normalNameEn },
          desc: { en: formData.normalDescEn, vi: formData.normalDescVi || formData.normalDescEn },
        },
        ultimate: {
          name: { en: formData.ultNameEn, vi: formData.ultNameVi || formData.ultNameEn },
          desc: { en: formData.ultDescEn, vi: formData.ultDescVi || formData.ultDescEn },
        },
        ultraUltimate: {
          name: { en: formData.ultraUltNameEn, vi: formData.ultraUltNameVi || formData.ultraUltNameEn },
          desc: { en: formData.ultraUltDescEn, vi: formData.ultraUltDescVi || formData.ultraUltDescEn },
        },
        passive: {
          name: { en: formData.passiveNameEn, vi: formData.passiveNameVi || formData.passiveNameEn },
          desc: { en: formData.passiveDescEn, vi: formData.passiveDescVi || formData.passiveDescEn },
        },
        ...(formData.hasCore
          ? {
              coreSkill: {
                name: { en: formData.coreNameEn || 'Core Skill', vi: formData.coreNameVi || 'Kỹ Năng Lõi' },
                requirement: { en: formData.coreReqEn, vi: formData.coreReqVi },
                basicEffect: { en: formData.coreBasicEn, vi: formData.coreBasicVi },
                advancedEffect: { en: formData.coreAdvEn, vi: formData.coreAdvVi },
              },
            }
          : {}),
        awakening: {
          stage1: { en: formData.awk1En, vi: formData.awk1Vi || formData.awk1En },
          stage2: { en: formData.awk2En, vi: formData.awk2Vi || formData.awk2En },
        },
      },
      recommendedGears: gearArray,
      synergies: { en: formData.synergiesEn, vi: formData.synergiesVi || formData.synergiesEn },
      counters: { en: formData.countersEn, vi: formData.countersVi || formData.countersEn },
    };

    if (isEditing) {
      updateCharacter(character.id, characterPayload);
    } else {
      addCharacter(characterPayload);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-opm-card border border-opm-borderHighlight rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-opm-cardLight to-opm-card border-b border-opm-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-opm-yellow/20 text-opm-yellow border border-opm-yellow/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="font-display font-black text-lg sm:text-xl text-slate-100">
              {isEditing ? t('editor.editTitle') : t('editor.createTitle')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Identity & Basic Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-opm-yellow border-b border-opm-border pb-1">
              1. Basic Identity (Bilingual EN / VI)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.nameEn')}</label>
                <input
                  type="text"
                  required
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                  placeholder="e.g. UR Saitama"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.nameVi')}</label>
                <input
                  type="text"
                  required
                  value={formData.nameVi}
                  onChange={(e) => setFormData({ ...formData, nameVi: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                  placeholder="VD: Saitama UR"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.titleEn')}</label>
                <input
                  type="text"
                  value={formData.titleEn}
                  onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                  placeholder="e.g. One Punch God"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.titleVi')}</label>
                <input
                  type="text"
                  value={formData.titleVi}
                  onChange={(e) => setFormData({ ...formData, titleVi: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                  placeholder="VD: Thần Đấm Phát Chết Luôn"
                />
              </div>
            </div>

            {/* Avatar URL */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <Image className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t('editor.avatarUrl')}</span>
              </label>
              <input
                type="url"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Classification & Tier */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-opm-cyan border-b border-opm-border pb-1">
              2. Classification & Rarity
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.rarity')}</label>
                <select
                  value={formData.rarity}
                  onChange={(e) => setFormData({ ...formData, rarity: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white"
                >
                  <option value="UR">UR (Ultra Rare)</option>
                  <option value="SSR+">SSR+ (Awakened)</option>
                  <option value="SSR">SSR</option>
                  <option value="SR">SR</option>
                  <option value="R">R</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.faction')}</label>
                <select
                  value={formData.faction}
                  onChange={(e) => setFormData({ ...formData, faction: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white"
                >
                  <option value="Hero">Hero (Anh Hùng)</option>
                  <option value="Monster">Monster (Quái Nhân)</option>
                  <option value="Outlaw">Outlaw (Tội Phạm)</option>
                  <option value="Martial">Martial (Võ Sĩ)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.class')}</label>
                <select
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white"
                >
                  <option value="Grappler">Grappler (Cách Đấu)</option>
                  <option value="Duelist">Duelist (Vũ Trang)</option>
                  <option value="HiTech">Hi-Tech (Khoa Học)</option>
                  <option value="Esper">Esper (Siêu Năng)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.tier')}</label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white"
                >
                  <option value="SSS">SSS (Trùm Meta)</option>
                  <option value="SS">SS (Thống Trị)</option>
                  <option value="S">S (Cực Mạnh)</option>
                  <option value="A">A (Khá Tốt)</option>
                  <option value="B">B (Tình Huống)</option>
                </select>
              </div>
            </div>

            {/* Core Skill Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="hasCore"
                checked={formData.hasCore}
                onChange={(e) => setFormData({ ...formData, hasCore: e.target.checked })}
                className="w-4 h-4 rounded text-opm-yellow focus:ring-0 cursor-pointer bg-opm-bg border-opm-border"
              />
              <label htmlFor="hasCore" className="text-xs font-bold text-slate-200 cursor-pointer flex items-center gap-1.5">
                <span>{t('editor.hasCore')}</span>
              </label>
            </div>
          </div>

          {/* Base Stats */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-opm-border pb-1">
              3. Base Stats Attributes
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.baseAtk')}</label>
                <input
                  type="number"
                  value={formData.atk}
                  onChange={(e) => setFormData({ ...formData, atk: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.baseHp')}</label>
                <input
                  type="number"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.baseDef')}</label>
                <input
                  type="number"
                  value={formData.def}
                  onChange={(e) => setFormData({ ...formData, def: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.baseSpd')}</label>
                <input
                  type="number"
                  value={formData.spd}
                  onChange={(e) => setFormData({ ...formData, spd: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow text-sm text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Combat Skills (EN & VI) */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 border-b border-opm-border pb-1">
              4. Combat Skills Descriptions (EN & VI)
            </h3>

            {/* Normal Attack */}
            <div className="p-3.5 rounded-2xl bg-opm-bg/70 border border-opm-border space-y-3">
              <span className="text-xs font-bold text-amber-400 block">{t('skills.normal')}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.normalNameEn}
                  onChange={(e) => setFormData({ ...formData, normalNameEn: e.target.value })}
                  placeholder="Skill Name (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.normalNameVi}
                  onChange={(e) => setFormData({ ...formData, normalNameVi: e.target.value })}
                  placeholder="Tên kỹ năng (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <textarea
                  rows={2}
                  value={formData.normalDescEn}
                  onChange={(e) => setFormData({ ...formData, normalDescEn: e.target.value })}
                  placeholder="Description (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <textarea
                  rows={2}
                  value={formData.normalDescVi}
                  onChange={(e) => setFormData({ ...formData, normalDescVi: e.target.value })}
                  placeholder="Mô tả kỹ năng (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
            </div>

            {/* Ultimate Skill */}
            <div className="p-3.5 rounded-2xl bg-opm-bg/70 border border-amber-500/30 space-y-3">
              <span className="text-xs font-bold text-amber-400 block">{t('skills.ultimate')}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.ultNameEn}
                  onChange={(e) => setFormData({ ...formData, ultNameEn: e.target.value })}
                  placeholder="Ultimate Name (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.ultNameVi}
                  onChange={(e) => setFormData({ ...formData, ultNameVi: e.target.value })}
                  placeholder="Tên Tuyệt Kỹ (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <textarea
                  rows={2}
                  value={formData.ultDescEn}
                  onChange={(e) => setFormData({ ...formData, ultDescEn: e.target.value })}
                  placeholder="Ultimate Description (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <textarea
                  rows={2}
                  value={formData.ultDescVi}
                  onChange={(e) => setFormData({ ...formData, ultDescVi: e.target.value })}
                  placeholder="Mô tả Tuyệt Kỹ (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
            </div>

            {/* Keepsake Ultra Ultimate */}
            <div className="p-3.5 rounded-2xl bg-opm-bg/70 border border-rose-500/30 space-y-3">
              <span className="text-xs font-bold text-rose-400 block">{t('skills.ultraUltimate')}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.ultraUltNameEn}
                  onChange={(e) => setFormData({ ...formData, ultraUltNameEn: e.target.value })}
                  placeholder="Ultra Ult Name (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.ultraUltNameVi}
                  onChange={(e) => setFormData({ ...formData, ultraUltNameVi: e.target.value })}
                  placeholder="Tên Siêu Tuyệt Kỹ (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <textarea
                  rows={2}
                  value={formData.ultraUltDescEn}
                  onChange={(e) => setFormData({ ...formData, ultraUltDescEn: e.target.value })}
                  placeholder="Ultra Ult Description (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <textarea
                  rows={2}
                  value={formData.ultraUltDescVi}
                  onChange={(e) => setFormData({ ...formData, ultraUltDescVi: e.target.value })}
                  placeholder="Mô tả Siêu Tuyệt Kỹ (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
            </div>

            {/* Passive */}
            <div className="p-3.5 rounded-2xl bg-opm-bg/70 border border-purple-500/30 space-y-3">
              <span className="text-xs font-bold text-purple-400 block">{t('skills.passive')}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={formData.passiveNameEn}
                  onChange={(e) => setFormData({ ...formData, passiveNameEn: e.target.value })}
                  placeholder="Passive Name (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <input
                  type="text"
                  value={formData.passiveNameVi}
                  onChange={(e) => setFormData({ ...formData, passiveNameVi: e.target.value })}
                  placeholder="Tên Nội Tại (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <textarea
                  rows={2}
                  value={formData.passiveDescEn}
                  onChange={(e) => setFormData({ ...formData, passiveDescEn: e.target.value })}
                  placeholder="Passive Description (EN)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
                <textarea
                  rows={2}
                  value={formData.passiveDescVi}
                  onChange={(e) => setFormData({ ...formData, passiveDescVi: e.target.value })}
                  placeholder="Mô tả Nội Tại (VI)"
                  className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                />
              </div>
            </div>

            {/* Core Skill Fields if Enabled */}
            {formData.hasCore && (
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/50 space-y-3">
                <span className="text-xs font-bold text-cyan-300 block">{t('common.core')}</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.coreNameEn}
                    onChange={(e) => setFormData({ ...formData, coreNameEn: e.target.value })}
                    placeholder="Core Name (EN)"
                    className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                  />
                  <input
                    type="text"
                    value={formData.coreNameVi}
                    onChange={(e) => setFormData({ ...formData, coreNameVi: e.target.value })}
                    placeholder="Tên Lõi Core (VI)"
                    className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <textarea
                    rows={2}
                    value={formData.coreBasicEn}
                    onChange={(e) => setFormData({ ...formData, coreBasicEn: e.target.value })}
                    placeholder="Core Basic Effect (EN)"
                    className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                  />
                  <textarea
                    rows={2}
                    value={formData.coreBasicVi}
                    onChange={(e) => setFormData({ ...formData, coreBasicVi: e.target.value })}
                    placeholder="Hiệu ứng Lõi Sơ Cấp (VI)"
                    className="w-full px-3 py-1.5 rounded-lg bg-opm-card border border-opm-border text-xs text-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Recommended Gears & Strategy */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-opm-border pb-1">
              5. Recommended Gears & Strategic Notes
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.gearRecommendations')}</label>
              <input
                type="text"
                value={formData.recommendedGears}
                onChange={(e) => setFormData({ ...formData, recommendedGears: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border focus:border-opm-yellow focus:outline-none text-sm text-white"
                placeholder="Knight, Suit, Primal, Swordsman"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.synergyNotesEn')}</label>
                <textarea
                  rows={2}
                  value={formData.synergiesEn}
                  onChange={(e) => setFormData({ ...formData, synergiesEn: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  placeholder="Pairs well with Bomb Core..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t('editor.synergyNotesVi')}</label>
                <textarea
                  rows={2}
                  value={formData.synergiesVi}
                  onChange={(e) => setFormData({ ...formData, synergiesVi: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-opm-bg border border-opm-border text-xs text-white"
                  placeholder="Phối hợp tốt với Lõi Bomb..."
                />
              </div>
            </div>
          </div>

          {/* Footer Submit Button */}
          <div className="pt-4 border-t border-opm-border flex items-center justify-end gap-3 sticky bottom-0 bg-opm-card/95 py-3 backdrop-blur-md">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
            >
              {t('common.cancel')}
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-opm-yellow to-amber-500 hover:from-amber-400 hover:to-opm-yellow text-slate-950 text-xs sm:text-sm font-black shadow-glow-yellow transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{t('editor.saveBtn')}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
