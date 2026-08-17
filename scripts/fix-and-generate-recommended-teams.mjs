import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charsFilePath = path.resolve(__dirname, '../src/data/defaultCharacters.js');
const teamsFilePath = path.resolve(__dirname, '../src/data/defaultTeamGuides.js');

const rawChars = fs.readFileSync(charsFilePath, 'utf8');
const characters = JSON.parse(rawChars.match(/export const defaultCharacters = (\[[\s\S]*\]);?/)[1]);

console.log(`Loaded ${characters.length} characters.`);

// Create a fast lookup map for characters
const charMap = new Map();
characters.forEach(c => charMap.set(c.id, c));

// Categorize heroes by role and game phase
const urPlusAndUrHeroes = characters.filter(c => c.rarity === 'UR+' || c.rarity === 'UR');
const ssrPlusHeroes = characters.filter(c => c.rarity === 'SSR+');
const ssrHeroes = characters.filter(c => c.rarity === 'SSR');
const srHeroes = characters.filter(c => c.rarity === 'SR');
const rHeroes = characters.filter(c => c.rarity === 'R');

// Core heroes
const coreHeroes = {
  bomb: 'bom_bengpu_ur',
  gyoro: 'gyoro_gyoro_ur',
  zombieman: 'zombieman_urplus',
  genus: 'doctor_genus_sr',
  childEmperor: 'child_emperor_ur',
  driveKnight: 'drive_knight_ur',
  king: 'king_ur'
};

// Standard key role anchors (All verified to exist in defaultCharacters)
const topTanks = ['superalloy_darkshine_ssrplus', 'overgrown_rover_urplus', 'carnage_kabuto_ur', 'pig_god_ur', 'tank_top_master_ssrplus', 'armored_gorilla_sr'];
const topCarries = ['ur_saitama', 'tatsumaki_terrible_tornado_urplus', 'black_sperm_urplus', 'atomic_samurai_urplus', 'boros_urplus', 'garou_ur', 'sonic_v2_ur', 'golden_ball_sr', 'amai_mask_urplus'];
const topSupports = ['bang_bomb_urplus', 'bang_ssrplus', 'geryuganshoop_ssrplus', 'king_ur', 'mumen_rider_r', 'smile_man_sr', 'beast_king_sr'];

// Function to generate 2-3 bespoke recommended teams for any hero
function generateHeroRecommendedTeams(hero) {
  const isEndgame = hero.rarity === 'UR+' || hero.rarity === 'UR' || hero.tier === 'SSS';
  const isMidgame = hero.rarity === 'SSR+' || hero.rarity === 'SSR';
  const isEarly = hero.rarity === 'SR' || hero.rarity === 'R';

  const teams = [];

  // TEAM 1: META ENDGAME / LIVE ARENA COMP (SSS/SS Tier)
  const isHeroFront = hero.class === 'Grappler' || hero.stats.hp > 120000;
  
  let front1, back1, team1Name, team1Strat;

  if (hero.id === 'ur_saitama') {
    front1 = ['bang_ssrplus', 'superalloy_darkshine_ssrplus', 'garou_ur'];
    back1 = ['ur_saitama', 'tatsumaki_terrible_tornado_urplus', 'atomic_samurai_urplus'];
    team1Name = { en: "Bomb Core Turn-1 Absolute Destruction", vi: "Đội Hình Bomb Core Sốc Sát Thương Lượt 1" };
    team1Strat = { en: "Bomb Core grants +40% Tenacity shields. UR Saitama strips frontline unyielding buffs so Tatsumaki can wipe the entire board.", vi: "Lõi Bomb cung cấp khiên Kiên Cường +40%. UR Saitama xuyên Bất Khuất dọn hàng trước để Tatsumaki quét sạch 6 tướng địch." };
  } else if (hero.id === 'black_sperm_urplus') {
    front1 = ['black_sperm_urplus', 'overgrown_rover_urplus', 'carnage_kabuto_ur'];
    back1 = ['gyoro_gyoro_ur', 'zombieman_urplus', 'boros_urplus'];
    team1Name = { en: "Gyoro Monster Specialized Direct DMG", vi: "Đội Hình Gyoro & Phân Thân Tinh Trùng Đen Bào Mòn" };
    team1Strat = { en: "Gyoro core boosts Monster HP. Black Sperm clones deal Specialized Direct DMG bypassing Tenacity shields.", vi: "Lõi Gyoro tăng Máu Quái Vật. Phân thân Tinh Trùng Đen gây Sát Thương Trực Tiếp Chuyên Biệt đánh thẳng vào Máu xuyên qua mọi loại khiên." };
  } else if (hero.id === 'tatsumaki_terrible_tornado_urplus') {
    front1 = ['bang_ssrplus', 'hellish_blizzard_ur', 'superalloy_darkshine_ssrplus'];
    back1 = ['sonic_v2_ur', 'flashy_flash_ur', 'tatsumaki_terrible_tornado_urplus'];
    team1Name = { en: "Forcefield Speed Blitzkrieg", vi: "Đội Hình Bão Trường Lực Tốc Độ Cao" };
    team1Strat = { en: "Sonic & Flash apply turn-1 shatter, Tatsumaki drops catastrophic Forcefields onto all 6 enemies.", vi: "Sonic và Flash cướp tốc gieo Vỡ Giáp, Tatsumaki thả bão Trường Lực quét sạch toàn bộ đội hình đối phương." };
  } else {
    // Dynamic generation based on hero class & faction
    if (isHeroFront) {
      front1 = [hero.id, 'overgrown_rover_urplus', 'superalloy_darkshine_ssrplus'];
      back1 = ['ur_saitama', 'tatsumaki_terrible_tornado_urplus', 'king_ur'];
    } else {
      front1 = ['bang_ssrplus', 'superalloy_darkshine_ssrplus', 'garou_ur'];
      back1 = [hero.id, 'tatsumaki_terrible_tornado_urplus', 'ur_saitama'];
    }
    team1Name = { 
      en: `${hero.name.en} Peak Meta Synergy Comp`, 
      vi: `Đội Hình Meta Đỉnh Cao Cùng ${hero.name.vi}` 
    };
    team1Strat = {
      en: `Optimized high-tier synergy formation protecting ${hero.name.en} with frontline damage share while accelerating energy output.`,
      vi: `Đội hình phối hợp đỉnh cao bảo bọc ${hero.name.vi} với dàn chắn hàng trước kiên cố và đẩy mạnh tốc độ hồi nộ toàn đội.`
    };
  }

  teams.push({
    id: `${hero.id}_comp_1`,
    name: team1Name,
    tier: "SSS",
    coreHero: "Bomb Core / Gyoro Core",
    formation: { frontRow: front1, backRow: back1 },
    strategy: team1Strat
  });

  // TEAM 2: MID-GAME & PVE BOSS EXPEDITION (SS/S Tier)
  let front2, back2, team2Name, team2Strat;
  if (isHeroFront) {
    front2 = [hero.id, 'carnage_kabuto_ur', 'tank_top_master_ssrplus'];
    back2 = ['zombieman_urplus', 'golden_ball_sr', 'amai_mask_urplus'];
  } else {
    front2 = ['armored_gorilla_sr', 'carnage_kabuto_ur', 'superalloy_darkshine_ssrplus'];
    back2 = [hero.id, 'golden_ball_sr', 'amai_mask_urplus'];
  }
  team2Name = {
    en: `${hero.name.en} Boss & Expedition Assault`,
    vi: `Đội Hình Viễn Chinh & Săn Boss Cùng ${hero.name.vi}`
  };
  team2Strat = {
    en: `Sustain-heavy PvE build using Zombieman core for infinite resurrection and Amai Mask for backline boss assassinations.`,
    vi: `Đội hình PvE bền bỉ tận dụng Lõi Zombieman bất tử hồi máu và Amai Mask dồn sát thương đơn mục tiêu diệt Boss.`
  };

  teams.push({
    id: `${hero.id}_comp_2`,
    name: team2Name,
    tier: "SS",
    coreHero: "Zombieman Core / Genus Core",
    formation: { frontRow: front2, backRow: back2 },
    strategy: team2Strat
  });

  // TEAM 3: F2P & BEGINNER PROGRESSION COMP (S/A Tier)
  let front3, back3, team3Name, team3Strat;
  if (isHeroFront) {
    front3 = [hero.id, 'armored_gorilla_sr', 'smile_man_sr'];
    back3 = ['doctor_genus_sr', 'golden_ball_sr', 'beast_king_sr'];
  } else {
    front3 = ['armored_gorilla_sr', 'smile_man_sr', 'mumen_rider_r'];
    back3 = [hero.id, 'golden_ball_sr', 'beast_king_sr'];
  }
  team3Name = {
    en: `${hero.name.en} F2P Friendly Starter Setup`,
    vi: `Đội Hình Khởi Đầu Thân Thiện F2P Cùng ${hero.name.vi}`
  };
  team3Strat = {
    en: `High efficiency F2P setup using Doctor Genus core for free turn-1 energy and Beast King 5x pursuit triggers upon injury.`,
    vi: `Đội hình F2P siêu tiết kiệm tận dụng Lõi Tiến Sĩ Genus hồi nộ miễn phí và Vua Thú tung 5 đòn cào truy kích khi địch bị Tổn Thương.`
  };

  teams.push({
    id: `${hero.id}_comp_3`,
    name: team3Name,
    tier: "S",
    coreHero: "Doctor Genus Core / Mumen Rider",
    formation: { frontRow: front3, backRow: back3 },
    strategy: team3Strat
  });

  return teams;
}

// 1. Inject recommendedTeams into every character in defaultCharacters.js
const updatedCharacters = characters.map(char => {
  const recTeams = generateHeroRecommendedTeams(char);
  return {
    ...char,
    recommendedTeams: recTeams
  };
});

// Write updated defaultCharacters.js
const updatedCharsCode = `export const defaultCharacters = ${JSON.stringify(updatedCharacters, null, 2)};\n`;
fs.writeFileSync(charsFilePath, updatedCharsCode, 'utf8');
console.log(`Successfully injected 3 recommended teams into all ${updatedCharacters.length} heroes in defaultCharacters.js!`);

// 2. Update defaultTeamGuides.js with 100% verified canonical character IDs
const updatedTeamGuides = [
  {
    "id": "meta_bomb_burst",
    "name": {
      "en": "Bomb Core Turn-1 Specialized Wipe",
      "vi": "Đội Hình Bomb Core Sốc Sát Thương Lượt 1"
    },
    "tier": "SSS",
    "coreHero": "Bom/Bengpu UR & Bang SSR+",
    "formation": {
      "frontRow": [
        "bang_ssrplus",
        "superalloy_darkshine_ssrplus",
        "garou_ur"
      ],
      "backRow": [
        "ur_saitama",
        "tatsumaki_terrible_tornado_urplus",
        "atomic_samurai_urplus"
      ]
    },
    "speedOrder": [
      { "order": 1, "hero": "ur_saitama", "note": "Turn-1 column nuke & buff dispel" },
      { "order": 2, "hero": "atomic_samurai_urplus", "note": "AoE Shatter debuff on enemy team" },
      { "order": 3, "hero": "tatsumaki_terrible_tornado_urplus", "note": "Full field wipe with Forcefield crash" },
      { "order": 4, "hero": "garou_ur", "note": "Internal injury clean-up & counter" },
      { "order": 5, "hero": "bang_ssrplus", "note": "Team Tenacity barrier & core energy" },
      { "order": 6, "hero": "superalloy_darkshine_ssrplus", "note": "Damage share soak tank" }
    ],
    "strategy": {
      "en": "The dominant speed meta archetype. Bomb Core provides +40% Tenacity shields and burst damage amplification. UR Saitama strips key enemy defenses before Tatsumaki executes a full board wipe.",
      "vi": "Đội hình tốc độ thống trị meta. Lõi Bomb cung cấp khiên Kiên Cường +40% và khuếch đại sát thương. UR Saitama giải phóng sát thương dọn hàng trước khi Tatsumaki quét sạch bàn cờ."
    },
    "recommendedGears": ["Knight", "Primal", "Swordsman"],
    "counters": {
      "en": "Extreme unyielding stall comps with reflect.",
      "vi": "Đội hình siêu câu giờ bất khuất kết hợp phản sát thương."
    }
  },
  {
    "id": "meta_gyoro_blacksperm",
    "name": {
      "en": "Gyoro Monster Direct DMG Corrode Stall",
      "vi": "Tinh Trùng Đen & Gyoro Phân Thân Bào Mòn"
    },
    "tier": "SSS",
    "coreHero": "Gyoro-Gyoro UR",
    "formation": {
      "frontRow": [
        "black_sperm_urplus",
        "overgrown_rover_urplus",
        "carnage_kabuto_ur"
      ],
      "backRow": [
        "gyoro_gyoro_ur",
        "zombieman_urplus",
        "boros_urplus"
      ]
    },
    "speedOrder": [
      { "order": 1, "hero": "gyoro_gyoro_ur", "note": "Turn-1 monster max HP boost & ally share" },
      { "order": 2, "hero": "black_sperm_urplus", "note": "Specialized Direct DMG clone split" },
      { "order": 3, "hero": "boros_urplus", "note": "Massive single-target nuke on enemy carry" },
      { "order": 4, "hero": "zombieman_urplus", "note": "Team heal trigger upon crit" },
      { "order": 5, "hero": "carnage_kabuto_ur", "note": "Reflects 30% all damage received" },
      { "order": 6, "hero": "overgrown_rover_urplus", "note": "Row shield and monster defense buff" }
    ],
    "strategy": {
      "en": "Specialized Direct Damage bypasses Tenacity shields entirely. Black Sperm clones multiply and chip down enemies while Gyoro increases team HP by 80%.",
      "vi": "Sát thương trực tiếp chuyên biệt xuyên thẳng qua khiên Kiên Cường. Phân thân Tinh Trùng Đen liên tục bào mòn đối thủ trong khi Gyoro tăng 80% Máu toàn đội."
    },
    "recommendedGears": ["Suit", "Primal", "Casual"],
    "counters": {
      "en": "Direct energy lock and high-speed dispel.",
      "vi": "Đội hình cướp tốc độ khóa nộ và xóa sạch buff."
    }
  },
  {
    "id": "meta_tatsumaki_speed",
    "name": {
      "en": "Tatsumaki UR+ Forcefield Blitz",
      "vi": "Bão Lốc Tatsumaki UR+ Tốc Độ Tuyệt Đối"
    },
    "tier": "SSS",
    "coreHero": "Drive Knight UR Core",
    "formation": {
      "frontRow": [
        "bang_ssrplus",
        "hellish_blizzard_ur",
        "superalloy_darkshine_ssrplus"
      ],
      "backRow": [
        "sonic_v2_ur",
        "flashy_flash_ur",
        "tatsumaki_terrible_tornado_urplus"
      ]
    },
    "speedOrder": [
      { "order": 1, "hero": "sonic_v2_ur", "note": "Turn-1 Shatter and speed boost to allies" },
      { "order": 2, "hero": "flashy_flash_ur", "note": "Stun key backline enemy and strip shields" },
      { "order": 3, "hero": "tatsumaki_terrible_tornado_urplus", "note": "Cast Ultra Ultimate and apply Forcefield" },
      { "order": 4, "hero": "hellish_blizzard_ur", "note": "Barrier protection for Tatsumaki" },
      { "order": 5, "hero": "bang_ssrplus", "note": "Frontline counter and tenacity" },
      { "order": 6, "hero": "superalloy_darkshine_ssrplus", "note": "Absorbs incoming burst" }
    ],
    "strategy": {
      "en": "Ultra-fast Esper blitz. Sonic and Flash guarantee speed priority, allowing Tatsumaki to coat all enemies with Forcefield.",
      "vi": "Lối chơi tốc độ vũ bão hệ Siêu Năng. Sonic và Flash cướp lượt đầu giúp Tatsumaki phủ Trường Lực lên toàn bộ 6 vị trí của địch."
    },
    "recommendedGears": ["Lightning", "Knight", "Monk"],
    "counters": {
      "en": "Heavy reflect and unyielding counter-attack teams.",
      "vi": "Đội hình siêu phản sát thương kết hợp bất khuất."
    }
  },
  {
    "id": "meta_f2p_starter_burst",
    "name": {
      "en": "F2P Starter Shatter & Pursuit Core",
      "vi": "Đội Hình F2P Vỡ Giáp & Truy Kích Tân Thủ"
    },
    "tier": "S",
    "coreHero": "Doctor Genus SR / Mumen Rider",
    "formation": {
      "frontRow": [
        "mumen_rider_r",
        "armored_gorilla_sr",
        "smile_man_sr"
      ],
      "backRow": [
        "golden_ball_sr",
        "amai_mask_urplus",
        "beast_king_sr"
      ]
    },
    "speedOrder": [
      { "order": 1, "hero": "mumen_rider_r", "note": "Buff Golden Ball SPD & ATK with Justice Roar" },
      { "order": 2, "hero": "golden_ball_sr", "note": "Apply AoE Shatter to entire enemy team" },
      { "order": 3, "hero": "amai_mask_urplus", "note": "Execute backline enemy carry" },
      { "order": 4, "hero": "beast_king_sr", "note": "Trigger 5x Lion Slash Pursuit on shattered targets" },
      { "order": 5, "hero": "armored_gorilla_sr", "note": "Frontline tank & counter-shield" },
      { "order": 6, "hero": "smile_man_sr", "note": "AoE team heal on row" }
    ],
    "strategy": {
      "en": "The gold standard starter comp for every new player. Mumen Rider speeds up Golden Ball to inflict AoE Shatter, triggering Beast King's 5x pursuit attacks.",
      "vi": "Đội hình vàng tiêu chuẩn cho mọi tân thủ. Mumen Rider tăng tốc cho Bi Vàng bắn Vỡ Giáp toàn sân, kích hoạt Vua Thú cào liên hoàn 5 phát."
    },
    "recommendedGears": ["Knight", "Monk", "Casual"],
    "counters": {
      "en": "High speed UR burst teams.",
      "vi": "Đội hình UR tốc độ cao sốc sát thương lượt 1."
    }
  }
];

// Write updated defaultTeamGuides.js
const updatedTeamsCode = `export const defaultTeamGuides = ${JSON.stringify(updatedTeamGuides, null, 2)};\n`;
fs.writeFileSync(teamsFilePath, updatedTeamsCode, 'utf8');
console.log(`Successfully updated defaultTeamGuides.js with canonical IDs!`);
