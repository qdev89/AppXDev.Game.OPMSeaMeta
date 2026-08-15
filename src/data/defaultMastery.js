export const defaultMastery = {
  coreRefinementLevels: [
    {
      level: "Level 1 (Basic)",
      energyRound1: "+1 Energy",
      passiveStats: "+5% ATK, +5% HP",
      requirements: "Unlock Character Core Skill",
      description: {
        en: "Basic Core activation requirement. Provides initial round 1 team energy.",
        vi: "Kích hoạt Lõi cơ bản. Cung cấp năng lượng hiệp 1 cho toàn đội."
      }
    },
    {
      level: "Level 4 (Advanced)",
      energyRound1: "+2 Energy",
      passiveStats: "+10% ATK, +10% HP, +5% DEF",
      requirements: "Refinement Stone x50, Gold x200,000",
      description: {
        en: "Unlocks secondary branch bonuses and increases initial energy gain.",
        vi: "Mở khóa nhánh phụ và tăng lượng nộ ban đầu."
      }
    },
    {
      level: "Level 10 (Mastery Peak)",
      energyRound1: "+3 Energy (Full Ultimate Ready)",
      passiveStats: "+20% ATK, +25% HP, +15% DEF, +10 SPD",
      requirements: "Refinement Core Shards x120, Awakening Badges x30",
      description: {
        en: "Major turning point. Enables immediate Turn 1 Ultra Ultimate combos and grants teamwide damage reduction.",
        vi: "Bước ngoặt quan trọng. Cho phép xả Siêu Tuyệt Kỹ ngay hiệp 1 và tăng giảm thương toàn đội."
      }
    },
    {
      level: "Level 17 (Ascended Awakening)",
      energyRound1: "+4 Energy + Unyielding Buffer",
      passiveStats: "+35% ATK, +40% HP, +25% DEF, +25 SPD",
      requirements: "Supreme Core Orbs x50, Omnipresent Red Shards x40",
      description: {
        en: "Ascends Core Skill to Specialized tier. Grants immunity to standard energy drain effects.",
        vi: "Nâng cấp Lõi lên bậc Chuyên Biệt. Miễn nhiễm với các hiệu ứng rút nộ cơ bản."
      }
    }
  ],

  specMasteryTrees: [
    {
      type: "Grappler (Giác Đấu / Cách Đấu)",
      focus: "HP Pool, Specialized Tenacity, Reflect Intensity",
      stats: [
        { name: { en: "Tenacity Shield Boost", vi: "Tăng Cường Khiên Kiên Cường" }, bonus: "+15% -> +35% Max HP Shield" },
        { name: { en: "Reflect Damage Amplification", vi: "Khuếch Đại Phản Sát Thương" }, bonus: "+20% Direct Reflect" },
        { name: { en: "Unyielding Survival Turn", vi: "Gia Hạn Bất Khuất" }, bonus: "+1 Action Count Duration" }
      ]
    },
    {
      type: "Duelist (Vũ Trang / Kiếm Khách)",
      focus: "Crit Rate, Armor Pierce, Follow-up Pursuit",
      stats: [
        { name: { en: "Shatter Vulnerability", vi: "Vỡ Giáp Sâu" }, bonus: "+30% Damage taken by Shattered targets" },
        { name: { en: "Pursuit Attack Scaling", vi: "Tăng Sát Thương Truy Kích" }, bonus: "+40% ATK on Follow-up attacks" },
        { name: { en: "Armor Break Penetration", vi: "Xuyên Phá Giáp" }, bonus: "Ignores 25% enemy specialized defense" }
      ]
    },
    {
      type: "Hi-Tech (Khoa Học / Công Nghệ)",
      focus: "Energy Acceleration, Burn DoT, Speed Tuning",
      stats: [
        { name: { en: "Turn-1 Speed Surge", vi: "Gia Tốc Tốc Độ Hiệp 1" }, bonus: "+15 Base Speed to all allies" },
        { name: { en: "Burn Detonation", vi: "Kích Nổ Sát Thương Thiêu Đốt" }, bonus: "Deals 120% ATK upon application" },
        { name: { en: "Energy Seal Resistance", vi: "Kháng Khóa Năng Lượng" }, bonus: "50% chance to resist Energy Seal" }
      ]
    },
    {
      type: "Esper (Siêu Năng / Dị Năng)",
      focus: "Forcefield Field, Corrode DoT, AoE Direct Burst",
      stats: [
        { name: { en: "Forcefield DoT Amplification", vi: "Khuếch Đại Trường Lực" }, bonus: "+25% Forcefield Damage" },
        { name: { en: "Corrosion Spread", vi: "Lây Lan Ăn Mòn" }, bonus: "Applies Corrode to adjacent units" },
        { name: { en: "Specialized Evasion", vi: "Né Tránh Chuyên Biệt" }, bonus: "+15% Instant Evasion chance" }
      ]
    }
  ]
};
