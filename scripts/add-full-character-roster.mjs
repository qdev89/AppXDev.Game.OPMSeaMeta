import fs from 'fs';
import path from 'path';

const additionalHeroes = [
  {
    id: "ssr_garou",
    name: { en: "SSR+ Garou", vi: "Garou Quái Nhân Hiệp Sĩ" },
    title: { en: "Hero Hunter Awakened", vi: "Kẻ Săn Anh Hùng Thức Tỉnh" },
    rarity: "SSR+",
    faction: "Outlaw",
    class: "Grappler",
    tier: "SS",
    avatar: "avatars/ssr_garou.webp",
    stats: { atk: 18600, hp: 118000, def: 9100, spd: 124 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Whirlwind Water Stream Fist", vi: "Toàn Phong Lưu Thủy Quyền" },
        desc: {
          en: "Deals 140% ATK damage to a single enemy.",
          vi: "Gây 140% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Cross Fang Dragon Slayer Fist", vi: "Giao Nha Long Sát Quyền" },
        desc: {
          en: "Deals 260% ATK damage to all 6 enemies. Inflicts [Internal Injury] on all targets dealing 100% extra damage.",
          vi: "Gây 260% Công lên toàn bộ 6 kẻ địch. Gieo [Nội Thương] nhận thêm 100% sát thương khi bị đánh."
        }
      },
      ultraUltimate: {
        name: { en: "Monster Calamity God Slayer Fist (Keepsake)", vi: "Thần Sát Quyền Quái Hóa (Thần Binh)" },
        desc: {
          en: "Deals 380% ATK to all enemies. Guarantees Critical Hit and launches 3 bonus pursuit attacks.",
          vi: "Gây 380% Công toàn thể. 100% bạo kích và tung thêm 3 đòn truy kích hủy diệt."
        }
      },
      passive: {
        name: { en: "God Slayer Counter", vi: "Thần Sát Phản Kích" },
        desc: {
          en: "Whenever an ally is attacked, Garou counters with 150% ATK damage and applies [Internal Injury] (up to 3 times/round).",
          vi: "Khi đồng minh bị đánh, Garou phản kích 150% Công và gây [Nội Thương] (tối đa 3 lần/hiệp)."
        }
      },
      awakening: {
        stage1: {
          en: "Counter attacks ignore 30% of target DEF.",
          vi: "Đòn phản kích bỏ qua 30% Giáp của địch."
        },
        stage2: {
          en: "Survives fatal hit with Unyielding and gains 100% ATK for 1 round.",
          vi: "Kích hoạt Bất Khuất khi nhận đòn chí tử và tăng 100% Công trong 1 hiệp."
        }
      }
    },
    recommendedGears: ["Knight", "Casual", "Swordsman"],
    synergies: {
      en: "Essential Internal Injury enabler for Bomb Core and UR Saitama burst teams.",
      vi: "Tướng gây Nội Thương chủ lực cho đội hình Lõi Bomb và UR Saitama."
    },
    counters: {
      en: "Heavy shield stall and debuff cleanse.",
      vi: "Đội hình khiên dày và giải trừ hiệu ứng xấu liên tục."
    }
  },
  {
    id: "ssr_superalloy",
    name: { en: "Superalloy Darkshine", vi: "Hợp Kim Đen Bóng (Darkshine)" },
    title: { en: "Unbreakable Muscle Titan", vi: "Cơ Bắp Bất Hoại" },
    rarity: "SSR+",
    faction: "Hero",
    class: "Grappler",
    tier: "S",
    avatar: "avatars/ssr_superalloy.webp",
    stats: { atk: 13800, hp: 165000, def: 12500, spd: 108 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Heavy Tackle", vi: "Húc Vai Cực Mạnh" },
        desc: {
          en: "Deals 120% ATK damage and increases self DEF by 20%.",
          vi: "Gây 120% Công và tăng 20% Phòng thủ bản thân."
        }
      },
      ultimate: {
        name: { en: "Superalloy Bazooka", vi: "Bazooka Hợp Kim Siêu Cường" },
        desc: {
          en: "Deals 280% ATK to single target based on Max HP and grants adjacent allies 35% Damage Share protection.",
          vi: "Gây 280% Công theo Máu tối đa và chia sẻ 35% sát thương gánh chịu hộ đồng minh liền kề."
        }
      },
      ultraUltimate: {
        name: { en: "Superalloy Double Bazooka (Keepsake)", vi: "Song Pháo Bazooka Hợp Kim (Thần Binh)" },
        desc: {
          en: "Deals 400% ATK damage. Absorbs 50% damage taken by entire team for 2 turns.",
          vi: "Gây 400% Công. Gánh chịu 50% sát thương cho toàn đội trong 2 hiệp."
        }
      },
      passive: {
        name: { en: "Shining Muscle Armor", vi: "Cơ Thể Sáng Bóng Hộ Thể" },
        desc: {
          en: "Reduces all incoming direct damage by 40%. Grants frontline allies 20% Max HP shield at start of battle.",
          vi: "Giảm 40% sát thương trực tiếp nhận vào. Cấp khiên 20% Máu tối đa cho hàng trước đầu trận."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Damage Share reduction efficiency by 30%.",
          vi: "Tăng 30% hiệu quả giảm thương khi gánh chịu sát thương hộ đồng đội."
        },
        stage2: {
          en: "Immune to Injury and Corrode DoT effects.",
          vi: "Miễn nhiễm hoàn toàn với hiệu ứng Nội Thương và Ăn Mòn."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Monk"],
    synergies: {
      en: "The #1 bodyguard tank to protect fragile backrow carries.",
      vi: "Lá chắn hộ vệ số 1 bảo kê tướng sát thương mỏng manh hàng sau."
    },
    counters: {
      en: "True damage and DEF-ignoring attacks.",
      vi: "Sát thương chuẩn và đòn đánh xuyên giáp."
    }
  },
  {
    id: "ssr_carnage",
    name: { en: "Carnage Kabuto UR", vi: "Bọ Hung Bất Bại UR" },
    title: { en: "Carnage Mode Unleashed", vi: "Trạng Thái Cuồng Bạo" },
    rarity: "UR",
    faction: "Monster",
    class: "Grappler",
    tier: "SS",
    avatar: "avatars/ssr_carnage.webp",
    stats: { atk: 17800, hp: 172000, def: 11800, spd: 116 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Carnage Blow", vi: "Cú Đấm Cuồng Nộ" },
        desc: {
          en: "Deals 130% ATK damage and restores 10% Max HP.",
          vi: "Gây 130% Công và hồi 10% Máu tối đa."
        }
      },
      ultimate: {
        name: { en: "Carnage Rampage", vi: "Cuồng Bạo Đại Phá" },
        desc: {
          en: "Deals 300% ATK damage to single row and taunts enemies for 1 round.",
          vi: "Gây 300% Công lên 1 hàng địch và khiêu khích đối thủ trong 1 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Carnage Supernova (Keepsake)", vi: "Cuồng Nộ Hủy Diệt (Thần Binh)" },
        desc: {
          en: "Deals 450% ATK to row. Reflects 60% of all incoming damage back to all 6 enemies.",
          vi: "Gây 450% Công. Phản lại 60% tổng sát thương nhận vào lên toàn bộ 6 kẻ địch."
        }
      },
      passive: {
        name: { en: "Asura Reflect", vi: "Phản Sát Thương Tu La" },
        desc: {
          en: "Passively reflects 35% of all damage taken back to all enemies.",
          vi: "Nội tại phản lại 35% mọi sát thương nhận vào lên toàn thể quân địch."
        }
      },
      awakening: {
        stage1: {
          en: "Increases passive damage reflect from 35% to 50%.",
          vi: "Tăng tỉ lệ phản sát thương từ 35% lên 50%."
        },
        stage2: {
          en: "When taking fatal damage, revives with 50% HP and triggers Asura Berserk.",
          vi: "Khi nhận đòn chí tử, hồi sinh với 50% Máu và kích hoạt Cuồng Nộ Tu La."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Primal"],
    synergies: {
      en: "Core component in Monster reflect stall teams with Gyoro Core and Zombieman.",
      vi: "Trọng tâm của đội hình Quái Nhân phản đòn kết hợp Lõi Gyoro và Zombieman."
    },
    counters: {
      en: "Unhealable debuffs and true damage burst.",
      vi: "Hiệu ứng cấm hồi phục và sát thương chuẩn dồn nhanh."
    }
  },
  {
    id: "sr_goldenball",
    name: { en: "Golden Ball (F2P God)", vi: "Bi Vàng (Vua Vỡ Giáp F2P)" },
    title: { en: "Precision Slingshot Marksman", vi: "Thiện Xạ Súng Cao Su" },
    rarity: "SR",
    faction: "Hero",
    class: "Duelist",
    tier: "A",
    avatar: "avatars/sr_goldenball.webp",
    stats: { atk: 14200, hp: 88000, def: 6900, spd: 126 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Golden Slingshot", vi: "Bắn Bi Vàng" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Golden Memory Shower", vi: "Mưa Bi Vàng Ký Ức" },
        desc: {
          en: "Deals 200% ATK damage to all 6 enemies. 100% chance to inflict [Shatter] on 2 random enemies (+30% extra damage taken).",
          vi: "Gây 200% Công lên toàn bộ 6 kẻ địch. 100% gây [Vỡ Giáp] lên 2 mục tiêu ngẫu nhiên."
        }
      },
      ultraUltimate: {
        name: { en: "Infinite Golden Tempest (Keepsake)", vi: "Bão Bi Vàng Vô Tận (Thần Binh)" },
        desc: {
          en: "Deals 300% ATK to all enemies. Inflicts [Shatter] on ALL 6 enemies for 2 turns.",
          vi: "Gây 300% Công toàn thể. Gây [Vỡ Giáp] lên TOÀN BỘ 6 kẻ địch trong 2 hiệp."
        }
      },
      passive: {
        name: { en: "Exploitation of Weakness", vi: "Khai Thác Điểm Yếu" },
        desc: {
          en: "Increases damage dealt to enemies with Shatter by 35%.",
          vi: "Tăng 35% sát thương gây ra lên các kẻ địch đang bị trạng thái Vỡ Giáp."
        }
      },
      awakening: {
        stage1: {
          en: "Allies deal 20% bonus damage to shattered enemies.",
          vi: "Đồng minh gây thêm 20% sát thương lên kẻ địch bị Vỡ Giáp."
        },
        stage2: {
          en: "Increases speed by 25 at start of battle.",
          vi: "Tăng 25 Tốc độ ngay đầu trận đấu."
        }
      }
    },
    recommendedGears: ["Knight", "Prisoner", "Casual"],
    synergies: {
      en: "The best AoE Shatter enabler in early game and F2P Duelist teams with Atomic Samurai and Sonic.",
      vi: "Tướng gieo Vỡ Giáp diện rộng tốt nhất giai đoạn đầu game và đội hình F2P Vũ Trang."
    },
    counters: {
      en: "Tenacity shields and cleanse.",
      vi: "Lớp khiên Kiên Cường và giải bùa xấu."
    }
  },
  {
    id: "sr_smileman",
    name: { en: "Smile Man", vi: "Người Mặt Cười" },
    title: { en: "Kendama Hero", vi: "Chiến Binh Kendama" },
    rarity: "SR",
    faction: "Hero",
    class: "Grappler",
    tier: "A",
    avatar: "avatars/sr_smileman.webp",
    stats: { atk: 12800, hp: 102000, def: 8200, spd: 112 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Kendama Strike", vi: "Kendama Đập" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Smile Kendama Barrage", vi: "Kendama Bão Nụ Cười" },
        desc: {
          en: "Deals 220% ATK damage to enemy row and heals self for 20% Max HP.",
          vi: "Gây 220% Công lên 1 hàng địch và hồi phục 20% Máu tối đa."
        }
      },
      ultraUltimate: {
        name: { en: "Smile Mega Bounce (Keepsake)", vi: "Kendama Bật Nảy Siêu Cấp (Thần Binh)" },
        desc: {
          en: "Deals 320% ATK damage to row and heals entire team for 15% Max HP.",
          vi: "Gây 320% Công lên 1 hàng và hồi 15% Máu tối đa cho toàn đội."
        }
      },
      passive: {
        name: { en: "Smile Healing Rhythm", vi: "Nhịp Điệu Chữa Lành Nụ Cười" },
        desc: {
          en: "Whenever Smile Man is healed or blocks, heals adjacent allies for 12% Max HP.",
          vi: "Mỗi khi được hồi máu hoặc đỡ đòn thành công, hồi 12% Máu tối đa cho đồng minh liền kề."
        }
      },
      awakening: {
        stage1: {
          en: "Increases healing rhythm efficiency by 30%.",
          vi: "Tăng 30% hiệu quả hồi máu cho đồng minh."
        },
        stage2: {
          en: "Increases Block Rate by 25%.",
          vi: "Tăng 25% Tỉ lệ Đỡ Đòn."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Monk"],
    synergies: {
      en: "F2P sustain engine in Doctor Genus core or Zombieman comps.",
      vi: "Động cơ hồi phục F2P tuyệt vời trong đội hình Lõi Doctor Genus hoặc Zombieman."
    },
    counters: {
      en: "Anti-heal debuffs.",
      vi: "Hiệu ứng cấm hồi phục."
    }
  },
  {
    id: "sr_armoredgorilla",
    name: { en: "Armored Gorilla", vi: "Khỉ Đột Thiết Giáp" },
    title: { en: "House of Evolution Cyborg", vi: "Cyborg Nhà Tiến Hóa" },
    rarity: "SR",
    faction: "Monster",
    class: "HiTech",
    tier: "A",
    avatar: "avatars/sr_armoredgorilla.webp",
    stats: { atk: 12400, hp: 115000, def: 8800, spd: 106 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Iron Punch", vi: "Thiết Quyền" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Gorilla Armor Smash", vi: "Khỉ Đột Thiết Giáp Nện" },
        desc: {
          en: "Deals 240% ATK damage to single enemy and inflicts [Stun] for 1 turn.",
          vi: "Gây 240% Công lên mục tiêu đơn và làm [Choáng] trong 1 lượt."
        }
      },
      ultraUltimate: {
        name: { en: "Super Iron Cyber Slam (Keepsake)", vi: "Cú Nện Cơ Khí Bất Hoại (Thần Binh)" },
        desc: {
          en: "Deals 360% ATK damage and applies [Tenacity Shield] equal to 30% Max HP to self and frontline.",
          vi: "Gây 360% Công và cấp [Khiên Kiên Cường] 30% Máu cho bản thân và hàng trước."
        }
      },
      passive: {
        name: { en: "Gorilla Fortitude", vi: "Thiết Giáp Bền Bỉ" },
        desc: {
          en: "Reduces damage taken by 30% while shields are active.",
          vi: "Giảm 30% sát thương nhận vào khi đang có khiên bảo hộ."
        }
      },
      awakening: {
        stage1: {
          en: "Increases shield efficiency by 25%.",
          vi: "Tăng 25% độ dày của lớp khiên."
        },
        stage2: {
          en: "When attacked, 40% chance to counter-attack.",
          vi: "Khi bị đánh, 40% tỉ lệ phản kích."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Monk"],
    synergies: {
      en: "Great budget frontline tank for F2P starter teams.",
      vi: "Lá chắn hàng trước giá rẻ cực kỳ vững chắc cho tân thủ F2P."
    },
    counters: {
      en: "True damage and DEF pierce.",
      vi: "Sát thương chuẩn và xuyên giáp."
    }
  },
  {
    id: "urplus_rover",
    name: { en: "UR+ Overgrown Rover", vi: "Chó Rover UR+ (Quái Thú Siêu Năng)" },
    title: { en: "Monster Association Sentinel", vi: "Hộ Vệ Hiệp Hội Quái Nhân" },
    rarity: "UR",
    faction: "Monster",
    class: "Grappler",
    tier: "SSS",
    avatar: "avatars/urplus_rover.webp",
    stats: { atk: 19200, hp: 185000, def: 13500, spd: 122 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Energy Bomb", vi: "Bom Năng Lượng" },
        desc: {
          en: "Deals 150% ATK damage and reduces target ATK by 25%.",
          vi: "Gây 150% Công và giảm 25% Công của mục tiêu."
        }
      },
      ultimate: {
        name: { en: "Apocalyptic Energy Barrage", vi: "Bão Pháo Năng Lượng Tận Thế" },
        desc: {
          en: "Deals 320% ATK damage to all 6 enemies and applies [Tenacity Shield] equal to 40% Rover Max HP to entire team.",
          vi: "Gây 320% Công lên toàn thể 6 kẻ địch và cấp [Khiên Kiên Cường] 40% Máu tối đa của Rover cho toàn đội."
        }
      },
      ultraUltimate: {
        name: { en: "Supernova Beast Cannon (Keepsake)", vi: "Siêu Pháo Quái Thú (Thần Binh)" },
        desc: {
          en: "Deals 480% ATK to all enemies. Soaks 50% of all ally damage and counter-attacks for 200% ATK.",
          vi: "Gây 480% Công toàn thể. Hấp thụ 50% sát thương nhận vào của toàn đội và phản kích 200% Công."
        }
      },
      passive: {
        name: { en: "Loyal Guardian Beast", vi: "Quái Thú Trung Thành Hộ Thể" },
        desc: {
          en: "Passively reduces all AoE damage taken by allies by 35%. Heals 15% Max HP when casting skills.",
          vi: "Giảm 35% sát thương diện rộng cho toàn đội. Tự hồi 15% Máu tối đa mỗi khi dùng chiêu."
        }
      },
      awakening: {
        stage1: {
          en: "Increases team Damage Reduction from 35% to 50%.",
          vi: "Tăng miễn thương diện rộng cho toàn đội lên 50%."
        },
        stage2: {
          en: "Revives with 100% HP and 100% Rage when defeated.",
          vi: "Hồi sinh với 100% Máu và đầy bình nộ khi bị hạ gục."
        }
      }
    },
    recommendedGears: ["Suit", "Battle", "Knight"],
    synergies: {
      en: "The supreme UR+ frontline shield engine for Gyoro and Boros UR comps.",
      vi: "Động cơ tạo khiên hàng trước UR+ tối thượng đi cùng Lõi Gyoro và Boros UR."
    },
    counters: {
      en: "Direct shield shattering and bypass.",
      vi: "Các đòn phá khiên trực tiếp."
    }
  }
];

const filePath = path.resolve('src/data/defaultCharacters.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find the end of the array and insert additional heroes before ];
const lastBracketIndex = content.lastIndexOf('];');
if (lastBracketIndex !== -1) {
  const jsonStr = additionalHeroes.map(h => '  ' + JSON.stringify(h, null, 2).replace(/\n/g, '\n  ')).join(',\n');
  const updatedContent = content.slice(0, lastBracketIndex).trimEnd() + ',\n' + jsonStr + '\n];\n';
  fs.writeFileSync(filePath, updatedContent);
  console.log(`✅ Added ${additionalHeroes.length} heroes to defaultCharacters.js!`);
}
