import fs from 'fs';
import path from 'path';

const rawHeroes = JSON.parse(fs.readFileSync('scripts/wiki-unique-heroes.json', 'utf8'));

// Classification helpers
function getRarityFromArt(art) {
  if (art.includes('ur_plus')) return 'UR+';
  if (art.includes('ur__')) return 'UR';
  if (art.includes('ssr_plus')) return 'SSR+';
  if (art.includes('ssr__')) return 'SSR';
  if (art.includes('sr__')) return 'SR';
  if (art.includes('r__')) return 'R';
  return 'SSR';
}

function getTierFromRarity(rarity) {
  if (rarity === 'UR+' || rarity === 'UR') return 'SSS';
  if (rarity === 'SSR+') return 'SS';
  if (rarity === 'SSR') return 'S';
  if (rarity === 'SR') return 'A';
  return 'B';
}

function getStatsFromRarity(rarity) {
  if (rarity === 'UR+' || rarity === 'UR') {
    return { atk: 20000 + Math.floor(Math.random() * 2500), hp: 130000 + Math.floor(Math.random() * 50000), def: 10000 + Math.floor(Math.random() * 3500), spd: 125 + Math.floor(Math.random() * 25) };
  }
  if (rarity === 'SSR+') {
    return { atk: 16000 + Math.floor(Math.random() * 2500), hp: 110000 + Math.floor(Math.random() * 35000), def: 8500 + Math.floor(Math.random() * 2500), spd: 115 + Math.floor(Math.random() * 15) };
  }
  if (rarity === 'SSR') {
    return { atk: 13500 + Math.floor(Math.random() * 2000), hp: 95000 + Math.floor(Math.random() * 25000), def: 7500 + Math.floor(Math.random() * 2000), spd: 110 + Math.floor(Math.random() * 12) };
  }
  if (rarity === 'SR') {
    return { atk: 11500 + Math.floor(Math.random() * 2000), hp: 80000 + Math.floor(Math.random() * 20000), def: 6500 + Math.floor(Math.random() * 1500), spd: 105 + Math.floor(Math.random() * 15) };
  }
  return { atk: 9000 + Math.floor(Math.random() * 1500), hp: 65000 + Math.floor(Math.random() * 15000), def: 5500 + Math.floor(Math.random() * 1000), spd: 100 + Math.floor(Math.random() * 20) };
}

// Map Vietnamese character names
const nameTranslationMap = {
  'Saitama': 'Saitama',
  'Tatsumaki': 'Lốc Xoáy Kinh Hoàng Tatsumaki',
  'Tatsumaki/Terrible Tornado': 'Lốc Xoáy Kinh Hoàng Tatsumaki',
  'Terrible Tornado': 'Lốc Xoáy Kinh Hoàng Tatsumaki',
  'Boros': 'Bá Chủ Vũ Trụ Boros',
  'Speed-o\'-Sound Sonic': 'Siêu Thanh Sonic',
  'Sonic V2': 'Sonic V2 Siêu Thanh',
  'Sonic': 'Siêu Thanh Sonic',
  'Black Sperm': 'Tinh Trùng Đen (Black Sperm)',
  'Golden Sperm': 'Tinh Trùng Vàng',
  'Zombieman': 'Thám Tử Bất Tử Zombieman',
  'Overgrown Rover': 'Chó Quái Thú Rover',
  'Bang & Bomb': 'Song Tông Sư Bang & Bomb',
  'Silverfang': 'Băng Sơn Silverfang Bang',
  'Bomb': 'Đại Sư Bomb',
  'G5': 'Robot Ma Thần G5',
  'Atomic Samurai': 'Kiếm Thánh Atomic Samurai',
  'Nyan': 'Miêu Vương Nyan',
  'Amai Mask': 'Mặt Nạ Mật Amai Mask',
  'Sweet Mask': 'Mặt Nạ Mật Amai Mask',
  'Genos': 'Cyborg Hủy Diệt Genos',
  'Gyoro-Gyoro': 'Quân Sư Gyoro-Gyoro',
  'Metal Bat': 'Chày Sắt Metal Bat',
  'Metal Bat V2': 'Chày Sắt Metal Bat V2',
  'Garou': 'Kẻ Săn Anh Hùng Garou',
  'Pig God': 'Thần Ăn Pig God',
  'Carnage Kabuto': 'Bọ Hung Carnage Kabuto',
  'Subterranean King': 'Vua Lòng Đất',
  'Drive Knight': 'Hiệp Sĩ Cơ Giới Drive Knight',
  'Hellish Blizzard': 'Bão Tuyết Fubuki',
  'Fubuki': 'Bão Tuyết Fubuki',
  'Deep Sea King': 'Vua Biển Sâu',
  'Flashy Flash': 'Flash Quang Tốc',
  'Gouketsu': 'Hào Kiệt Gouketsu',
  'King': 'Vua May Mắn King',
  'Suiryu': 'Thủy Long Suiryu',
  'Melzargard': 'Thượng Tướng Melzargard',
  'Superalloy Darkshine': 'Hợp Kim Đen Bóng Darkshine',
  'Metal Knight': 'Hiệp Sĩ Kim Loại Bofoi',
  'Puri-Puri Prisoner': 'Tù Nhân Sexy Puri-Puri',
  'Watchdog Man': 'Chó Canh Cổng Watchdog Man',
  'Tanktop Master': 'Áo Ba Lỗ Master',
  'Phoenix Man': 'Phượng Hoàng Lửa Phoenix Man',
  'Mosquito Girl': 'Nữ Chúa Muỗi Mosquito Girl',
  'Geryuganshoop': 'Bậc Thầy Trọng Lực Geryuganshoop',
  'Child Emperor': 'Tiểu Bá Vương Child Emperor',
  'Vaccine Man': 'Chiến Binh Môi Trường Vaccine Man',
  'Beast King': 'Vua Thú Beast King',
  'Golden Ball': 'Bi Vàng Golden Ball',
  'Doctor Genus': 'Tiến Sĩ Genus',
  'Smile Man': 'Người Mặt Cười Smile Man',
  'Armored Gorilla': 'Khỉ Đột Thiết Giáp',
  'Sky King': 'Vua Bầu Trời Sky King',
  'Konbu Infinity': 'Tảo Bẹ Vô Tận',
  'Mumen Rider': 'Hiệp Sĩ Không Bằng Lái',
  'G4': 'Ma Thần Cơ Khí G4',
  'Gale Wind': 'Thiên Phong Gale Wind',
  'Hellfire Flame': 'Liệt Hỏa Hellfire Flame',
  'Stinger': 'Gia Táo Đình Stinger',
  'Spring Mustachio': 'Râu Lò Xo Spring Mustachio',
  'Fukegao': 'Bác Sĩ Khổng Lồ Fukegao',
  'Iairon': 'Cư Hợp Thiết Iairon',
  'Blue Fire': 'Ngọn Lửa Xanh Blue Fire',
  'Death Gatling': 'Súng Sáu Nòng Death Gatling',
  'Snek': 'Rắn Cắn Snek',
  'Lightning Max': 'Tia Chớp Lightning Max',
  'Heavy Kong': 'Kim Cương Hạng Nặng Heavy Kong'
};

function getCleanHeroName(rawName) {
  return rawName.replace(/&amp;/g, '&').trim();
}

function getHeroFaction(name, art) {
  const n = name.toLowerCase();
  if (n.includes('sperm') || n.includes('rover') || n.includes('boros') || n.includes('gyoro') || n.includes('kabuto') || n.includes('subterranean') || n.includes('deep sea') || n.includes('gouketsu') || n.includes('melzargard') || n.includes('mosquito') || n.includes('geryugan') || n.includes('vaccine') || n.includes('beast') || n.includes('genus') || n.includes('gorilla') || n.includes('sky king') || n.includes('konbu') || n.includes('fukegao') || n.includes('phoenix') || n.includes('g4') || n.includes('g5') || n.includes('gale') || n.includes('hellfire') || n.includes('nyan')) {
    return 'Monster';
  }
  if (n.includes('sonic') || n.includes('garou') || n.includes('hammerhead')) {
    return 'Outlaw';
  }
  if (n.includes('suiryu') || n.includes('bakuzan') || n.includes('choze')) {
    return 'Martial';
  }
  return 'Hero';
}

function getHeroClass(name) {
  const n = name.toLowerCase();
  if (n.includes('tatsumaki') || n.includes('blizzard') || n.includes('fubuki') || n.includes('boros') || n.includes('gyoro') || n.includes('geryugan') || n.includes('mosquito') || n.includes('vaccine') || n.includes('sky king') || n.includes('konbu') || n.includes('king') || n.includes('phoenix') || n.includes('choze')) {
    return 'Esper';
  }
  if (n.includes('sonic') || n.includes('atomic') || n.includes('flash') || n.includes('golden') || n.includes('stinger') || n.includes('mustachio') || n.includes('iairon') || n.includes('gatling') || n.includes('subterranean') || n.includes('gale') || n.includes('hellfire') || n.includes('nyan') || n.includes('metal bat')) {
    return 'Duelist';
  }
  if (n.includes('genos') || n.includes('child emperor') || n.includes('drive knight') || n.includes('metal knight') || n.includes('g4') || n.includes('g5') || n.includes('genus') || n.includes('gorilla') || n.includes('blue fire') || n.includes('lightning max') || n.includes('fukegao')) {
    return 'HiTech';
  }
  return 'Grappler';
}

function isCoreUnit(name) {
  const n = name.toLowerCase();
  return n.includes('bomb') || n.includes('zombieman') || n.includes('gyoro') || n.includes('child emperor') || n.includes('genus') || n.includes('genos') || n.includes('deep sea') || n.includes('drive knight');
}

// Generate complete 117 hero dataset
const allDatabaseHeroes = rawHeroes.map((h, idx) => {
  const cleanName = getCleanHeroName(h.name);
  const rarity = getRarityFromArt(h.art);
  const tier = getTierFromRarity(rarity);
  const faction = getHeroFaction(cleanName, h.art);
  const heroClass = getHeroClass(cleanName);
  const stats = getStatsFromRarity(rarity);
  const hasCore = isCoreUnit(cleanName);
  const viName = nameTranslationMap[cleanName] || cleanName;

  // Make unique ID
  const idPrefix = rarity.toLowerCase().replace('+', 'plus_') + '_';
  const cleanSlug = cleanName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  const id = `${cleanSlug}_${rarity.toLowerCase().replace('+', 'plus')}`;

  return {
    id: id,
    name: {
      en: `${cleanName} ${rarity}`,
      vi: `${viName} [${rarity}]`
    },
    title: {
      en: `${cleanName} (${rarity} Combatant)`,
      vi: `${viName} (Chiến Tướng ${rarity})`
    },
    rarity: rarity,
    faction: faction,
    class: heroClass,
    tier: tier,
    avatar: `avatars/${h.art}`,
    stats: stats,
    hasCore: hasCore,
    skills: {
      normal: {
        name: { en: `${cleanName} Strike`, vi: `Đòn Đánh ${cleanName}` },
        desc: {
          en: `Deals 120%-180% ATK damage to single enemy based on ${rarity} scaling.`,
          vi: `Gây 120%-180% sát thương Công lên mục tiêu đơn theo phẩm chất ${rarity}.`
        }
      },
      ultimate: {
        name: { en: `${cleanName} Burst Ultimate`, vi: `Tuyệt Kỹ Bùng Nổ ${cleanName}` },
        desc: {
          en: `Deals massive damage to enemy line/all with ${rarity} signature effects (Shatter, Corrode, Tenacity, or Burst).`,
          vi: `Gây sát thương diện rộng kèm hiệu ứng đặc trưng phẩm chất ${rarity} (Vỡ Giáp, Ăn Mòn, Kiên Cường hoặc Bộc Phá).`
        }
      },
      ultraUltimate: {
        name: { en: `${cleanName} Keepsake Awakened`, vi: `Thần Binh Thức Tỉnh ${cleanName}` },
        desc: {
          en: `Requires Keepsake. Greatly amplifies ultimate multiplier and applies secondary specialized debuffs.`,
          vi: `Yêu cầu Thần Binh. Khuếch đại mạnh mẽ hệ số sát thương và bổ sung hiệu ứng chuyên biệt.`
        }
      },
      passive: {
        name: { en: `${cleanName} Battle Mastery`, vi: `Nội Tại Chiến Đấu ${cleanName}` },
        desc: {
          en: `Grants stat enhancements, damage reductions, or pursuit counters when triggered.`,
          vi: `Cung cấp bùa tăng chỉ số, miễn thương hoặc đòn phản kích truy kích khi đạt điều kiện.`
        }
      },
      awakening: {
        stage1: {
          en: `Increases ${heroClass} and ${faction} synergy damage by 25%-40%.`,
          vi: `Tăng 25%-40% hiệu quả sát thương cho hệ ${heroClass} và phe ${faction}.`
        },
        stage2: {
          en: `Enhances survivability with Unyielding, Revive, or Action Bar boost.`,
          vi: `Tăng khả năng sinh tồn với Bất Khuất, Hồi Sinh hoặc Tăng Tốc Độ hành động.`
        }
      }
    },
    recommendedGears: [
      heroClass === 'Grappler' ? 'Suit' : heroClass === 'Duelist' ? 'Knight' : heroClass === 'Esper' ? 'Casual' : 'Primal',
      'Prisoner',
      'Swordsman'
    ],
    synergies: {
      en: `Excels when paired with ${heroClass} buffers and ${faction} faction cores.`,
      vi: `Phát huy tối đa sức mạnh khi kết hợp cùng tướng hỗ trợ hệ ${heroClass} và Lõi phe ${faction}.`
    },
    counters: {
      en: `Countered by high speed initiative and direct damage dispels.`,
      vi: `Khắc chế bởi các đội hình out tốc độ và giải trừ hiệu ứng trực tiếp.`
    }
  };
});

// Also include Saitama UR custom portrait at top
const saitamaUR = {
  id: "ur_saitama",
  name: { en: "UR Saitama", vi: "Saitama UR" },
  title: { en: "One Punch God", vi: "Thần Đấm Phát Chết Luôn" },
  rarity: "UR",
  faction: "Hero",
  class: "Grappler",
  tier: "SSS",
  avatar: "avatars/ur_saitama.webp",
  stats: { atk: 22800, hp: 145000, def: 11800, spd: 135 },
  hasCore: false,
  skills: {
    normal: {
      name: { en: "Consecutive Normal Punches", vi: "Đấm Thường Liên Hoàn" },
      desc: {
        en: "Deals 180% ATK damage to a single enemy. 100% chance to inflict [Internal Injury] and shatter shields.",
        vi: "Gây 180% sát thương Công lên mục tiêu đơn. 100% gây [Nội Thương] và phá vỡ lớp giáp hộ thân."
      }
    },
    ultimate: {
      name: { en: "Serious Punch: Extinction", vi: "Đấm Nghiêm Túc: Tuyệt Diệt" },
      desc: {
        en: "Deals 550% ATK damage to all enemies in the column. Ignores 50% DEF, bypasses unyielding, and dispels all positive buffs.",
        vi: "Gây 550% Công lên toàn bộ kẻ địch theo hàng dọc. Bỏ qua 50% Phòng thủ, xuyên [Bất Khuất] và xóa sạch mọi bùa lợi có lợi."
      }
    },
    ultraUltimate: {
      name: { en: "Serious Series: Omnidirectional Punch", vi: "Tuyệt Kỹ Tối Thượng: Nghiêm Túc Đa Hướng" },
      desc: {
        en: "Requires Keepsake. Deals 800% ATK damage to all enemies. Guarantees Critical Hit and locks enemy ultimate energy for 2 turns.",
        vi: "Cần Thần Binh. Gây 800% Công lên toàn thể quân địch. 100% bạo kích và khóa hoàn toàn thanh nộ năng lượng của đối thủ trong 2 lượt."
      }
    },
    passive: {
      name: { en: "Absolute Limitless", vi: "Phá Vỡ Giới Hạn Tuyệt Đối" },
      desc: {
        en: "Immune to all control effects (Stun, Freeze, Silence). Restores 100% HP upon fatal damage.",
        vi: "Miễn nhiễm mọi hiệu ứng khống chế (Choáng, Đóng băng, Câm lặng). Hồi phục 100% Máu khi nhận đòn chí tử."
      }
    },
    awakening: {
      stage1: {
        en: "Increases entire team Direct Damage by 35% and reduces damage taken by 25%.",
        vi: "Tăng 35% Sát thương Trực tiếp cho toàn đội và giảm 25% sát thương nhận vào."
      },
      stage2: {
        en: "At start of each round, grants 3 energy points and applies [Tenacity Shield] equal to 50% Max HP.",
        vi: "Đầu mỗi hiệp hồi ngay 3 điểm nộ và tạo [Khiên Kiên Cường] 50% Máu tối đa."
      }
    }
  },
  recommendedGears: ["Knight", "Primal", "Swordsman"],
  synergies: {
    en: "Pairs exceptionally well with Bomb Core, UR Tatsumaki, and SSR+ Silverfang.",
    vi: "Ăn ý tuyệt đỉnh khi đi cùng Lõi Bomb, UR Tatsumaki và SSR+ Silverfang."
  },
  counters: {
    en: "Extreme unyielding stall comps with reflect.",
    vi: "Đội hình siêu câu giờ bất khuất kết hợp phản sát thương."
  }
};

const finalHeroes = [saitamaUR, ...allDatabaseHeroes];

// Write to src/data/defaultCharacters.js
const charPath = path.resolve('src/data/defaultCharacters.js');
const charContent = `export const defaultCharacters = ${JSON.stringify(finalHeroes, null, 2)};\n`;
fs.writeFileSync(charPath, charContent);

console.log(`✅ COMPLETE ROSTER GENERATED:`);
console.log(`- ${finalHeroes.length} Total Official Characters in defaultCharacters.js!`);
