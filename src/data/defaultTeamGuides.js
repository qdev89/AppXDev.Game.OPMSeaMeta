export const defaultTeamGuides = [
  {
    id: "meta_bomb_burst",
    name: {
      en: "Bomb Core Turn-1 Specialized Wipe",
      vi: "Đội Hình Bomb Core Sốc Sát Thương Lượt 1"
    },
    tier: "SSS",
    coreHero: "SSR+ Silverfang / Bomb Core",
    formation: {
      frontRow: ["ssr_plus_silverfang", "ssr_superalloy", "ssr_garou"],
      backRow: ["ur_saitama", "ur_tatsumaki", "ssr_plus_atomic"]
    },
    speedOrder: [
      { order: 1, hero: "ur_saitama", note: "Turn-1 column nuke & buff dispel" },
      { order: 2, hero: "ssr_plus_atomic", note: "AoE Shatter debuff on enemy team" },
      { order: 3, hero: "ur_tatsumaki", note: "Full field wipe with Forcefield crash" },
      { order: 4, hero: "ssr_garou", note: "Internal injury clean-up & counter" },
      { order: 5, hero: "ssr_plus_silverfang", note: "Team Tenacity barrier & core energy" },
      { order: 6, hero: "ssr_superalloy", note: "Damage share soak tank" }
    ],
    strategy: {
      en: "The dominant speed meta archetype. Bomb Core provides +40% Tenacity shields and burst damage amplification. UR Saitama strips key enemy defenses before Tatsumaki executes a full board wipe.",
      vi: "Đội hình tốc độ thống trị meta. Lõi Bomb cung cấp khiên Kiên Cường +40% và khuếch đại sát thương. UR Saitama giải phóng sát thương dọn hàng trước khi Tatsumaki quét sạch bàn cờ."
    },
    recommendedGears: ["Knight", "Primal", "Suit"]
  },
  {
    id: "meta_gyoro_blacksperm",
    name: {
      en: "UR+ Black Sperm & Gyoro Swarm Dominance",
      vi: "Đội Hình Tinh Trùng Đen UR+ & Gyoro Phân Thân"
    },
    tier: "SSS",
    coreHero: "UR Gyoro-Gyoro",
    formation: {
      frontRow: ["urplus_blacksperm", "urplus_rover", "ssr_carnage"],
      backRow: ["ur_gyoro", "urplus_zombieman", "ur_boros"]
    },
    speedOrder: [
      { order: 1, hero: "ur_gyoro", note: "Row Max HP buff & Corrode" },
      { order: 2, hero: "urplus_blacksperm", note: "Clone burst & Specialized Direct DMG" },
      { order: 3, hero: "urplus_zombieman", note: "Team heal & Specialized Unyielding" },
      { order: 4, hero: "ur_boros", note: "Targeted single-burst finisher" },
      { order: 5, hero: "urplus_rover", note: "Team damage absorption" },
      { order: 6, hero: "ssr_carnage", note: "Reflect damage frontline" }
    ],
    strategy: {
      en: "The supreme endgame monster archetype. Black Sperm splits into 8 copies, launching infinite Pursuit strikes while backed by Gyoro's +35% Monster DMG Amp and Zombieman's resurrection shield.",
      vi: "Đội hình Quái Nhân tối thượng. Tinh Trùng Đen phân tách 8 phân thân liên tục truy kích kẻ địch, được bảo kê bởi lượng Máu khổng lồ của Gyoro và khiên hồi sinh bất tử của Zombieman UR+."
    },
    recommendedGears: ["Suit", "Battle", "Knight"]
  },
  {
    id: "meta_f2p_shatter",
    name: {
      en: "F2P Shatter & Single Target Execution",
      vi: "Đội Hình F2P Vỡ Giáp & Dứt Điểm Đơn Mục Tiêu"
    },
    tier: "A",
    coreHero: "Doctor Genus Core / Genos Core",
    formation: {
      frontRow: ["ssr_superalloy", "sr_smileman", "sr_armoredgorilla"],
      backRow: ["sr_goldenball", "amai_mask", "ssr_plus_atomic"]
    },
    speedOrder: [
      { order: 1, hero: "sr_goldenball", note: "Applies 100% AoE Shatter" },
      { order: 2, hero: "ssr_plus_atomic", note: "Exploits Shatter for bonus AoE damage" },
      { order: 3, hero: "amai_mask", note: "Snipes backrow enemy carry" },
      { order: 4, hero: "ssr_superalloy", note: "Protects backrow squishy DPS" },
      { order: 5, hero: "sr_smileman", note: "Team sustain heal on block" },
      { order: 6, hero: "sr_armoredgorilla", note: "Secondary tank and stunner" }
    ],
    strategy: {
      en: "The most cost-effective F2P archetype. Golden Ball lands Shatter, enabling Amai Mask and Atomic Samurai to eliminate high-value targets without requiring UR investment.",
      vi: "Đội hình thân thiện nhất cho dân cày F2P. Bi Vàng mở hiệu ứng Vỡ Giáp, giúp Amai Mask và Atomic Samurai dứt điểm nhanh carry chủ lực của đối thủ."
    },
    recommendedGears: ["Prisoner", "Knight", "Casual"]
  }
];
