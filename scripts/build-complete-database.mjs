import fs from 'fs';
import path from 'path';

// Complete Comprehensive Heroes Database
const completeCharacters = [
  // ==========================================
  // UR & UR+ HEROES (LATE / ENDGAME SSS TIER)
  // ==========================================
  {
    id: "ur_saitama",
    name: { en: "UR Saitama", vi: "Saitama UR" },
    title: { en: "One Punch God", vi: "Thần Đấm Phát Chết Luôn" },
    rarity: "UR",
    faction: "Hero",
    class: "Grappler",
    tier: "SSS",
    avatar: "avatars/ur_saitama.webp",
    stats: { atk: 19800, hp: 125000, def: 9800, spd: 128 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Consecutive Normal Punches", vi: "Đấm Thường Liên Hoàn" },
        desc: {
          en: "Deals 180% ATK damage to a single enemy. Has 100% chance to inflict [Internal Injury] and shatter shields.",
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
          en: "Immune to all control effects (Stun, Freeze, Silence). When receiving fatal damage, restores 100% HP and gains 200% ATK bonus for 1 turn (triggers once per battle).",
          vi: "Miễn nhiễm mọi hiệu ứng khống chế (Choáng, Đóng băng, Câm lặng). Khi nhận sát thương chí tử, hồi phục 100% Máu và nhận 200% tăng Công trong 1 lượt (kích hoạt 1 lần mỗi trận)."
        }
      },
      awakening: {
        stage1: {
          en: "Increases entire team Direct Damage by 35% and reduces damage taken from enemies by 25%.",
          vi: "Tăng 35% Sát thương Trực tiếp cho toàn đội và giảm 25% sát thương nhận vào từ đối thủ."
        },
        stage2: {
          en: "At start of each round, grants 3 energy points and applies [Tenacity Shield] equal to 50% Max HP to allies.",
          vi: "Đầu mỗi hiệp, hồi ngay 3 điểm nộ năng lượng và tạo [Khiên Kiên Cường] bằng 50% Máu tối đa cho toàn phe ta."
        }
      }
    },
    recommendedGears: ["Knight", "Primal", "Swordsman"],
    synergies: {
      en: "Pairs exceptionally well with Bomb Core, UR Tatsumaki, and SSR+ Silverfang for high-speed turn-1 board wipe.",
      vi: "Cực kỳ ăn ý khi đi cùng Lõi Bomb, UR Tatsumaki và SSR+ Silverfang để quét sạch bàn cờ ngay lượt 1."
    },
    counters: {
      en: "Weak to heavy unyielding stall comps with extreme damage reflection.",
      vi: "Có thể gặp khó khăn trước đội hình siêu câu giờ bất khuất kết hợp phản sát thương cực đại."
    }
  },
  {
    id: "ur_tatsumaki",
    name: { en: "UR Tatsumaki", vi: "Tatsumaki UR" },
    title: { en: "Tornado of Terror (Awakened)", vi: "Lốc Xoáy Kinh Hoàng (Thức Tỉnh)" },
    rarity: "UR",
    faction: "Hero",
    class: "Esper",
    tier: "SSS",
    avatar: "avatars/ur_tatsumaki.webp",
    stats: { atk: 20500, hp: 110000, def: 8900, spd: 132 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Psychic Crush", vi: "Đè Nén Siêu Năng" },
        desc: {
          en: "Deals 160% ATK damage to a single enemy and reduces their Speed by 25% for 2 turns.",
          vi: "Gây 160% sát thương Công lên đơn mục tiêu và giảm 25% Tốc độ của địch trong 2 lượt."
        }
      },
      ultimate: {
        name: { en: "Cataclysmic Telekinesis", vi: "Siêu Lực Tận Thế" },
        desc: {
          en: "Attacks all 6 enemies dealing 320% ATK damage. Inflicts [Forcefield] on 3 random enemies, dealing 150% ATK damage when they take action.",
          vi: "Tấn công toàn bộ 6 kẻ địch gây 320% Công. Gây [Trường Lực] lên 3 mục tiêu ngẫu nhiên, phát nổ 150% Công khi chúng hành động."
        }
      },
      ultraUltimate: {
        name: { en: "Planetary Meteor Slam", vi: "Thiên Thạch Trụy Lạc (Thần Binh)" },
        desc: {
          en: "Keepsake. Deals 480% ATK damage to all enemies. Increases Crit Rate by 50% and inflicts [Forcefield] on ALL 6 enemies.",
          vi: "Thần Binh. Gây 480% Công toàn thể địch. Tăng 50% Tỉ lệ bạo kích và áp dụng [Trường Lực] lên TOÀN BỘ 6 kẻ địch."
        }
      },
      passive: {
        name: { en: "Empress Telekinesis", vi: "Nữ Hoàng Niệm Lực" },
        desc: {
          en: "Increases Critical Damage by 80%. When any enemy acts, Tatsumaki gains 1 stack of [Psychic Pressure], increasing next ultimate by 15% (max 6 stacks).",
          vi: "Tăng 80% Sát thương bạo kích. Khi bất kỳ kẻ địch nào hành động, nhận 1 tầng [Áp Lực Niệm Lực], tăng 15% uy lực tuyệt kỹ kế tiếp (tối đa 6 tầng)."
        }
      },
      awakening: {
        stage1: {
          en: "Whenever an ally crits, Tatsumaki launches a pursuit attack dealing 150% ATK damage.",
          vi: "Mỗi khi đồng minh bạo kích, Tatsumaki bồi thêm đòn truy kích gây 150% Công."
        },
        stage2: {
          en: "Forcefield damage penetrates 40% DEF and heals the weakest ally for 50% of the damage dealt.",
          vi: "Sát thương Trường Lực xuyên 40% Giáp và hồi máu cho đồng đội yếu nhất bằng 50% lượng sát thương gây ra."
        }
      }
    },
    recommendedGears: ["Knight", "Casual", "Lightning"],
    synergies: {
      en: "Synergizes with high-crit heroes and Gyoro-Gyoro / Bomb core for instant burst.",
      vi: "Kết hợp tuyệt đỉnh cùng tướng bạo kích cao và Lõi Gyoro / Bomb để sốc sát thương diện rộng."
    },
    counters: {
      en: "Susceptible to direct speed outspeeders with single-target assassination (UR Sonic).",
      vi: "Dễ bị bắt bài bởi tướng tốc độ cao dồn sát thương đơn mục tiêu như UR Sonic."
    }
  },
  {
    id: "ur_boros",
    name: { en: "UR Boros", vi: "Boros UR" },
    title: { en: "Dominator of the Universe", vi: "Bá Chủ Vũ Trụ" },
    rarity: "UR",
    faction: "Monster",
    class: "Esper",
    tier: "SSS",
    avatar: "avatars/ur_boros.webp",
    stats: { atk: 21200, hp: 130000, def: 9200, spd: 126 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Meteoric Rush", vi: "Cú Lao Sao Băng" },
        desc: {
          en: "Deals 200% ATK damage to single target and absorbs 30% of target ATK for 1 round.",
          vi: "Gây 200% Công lên mục tiêu đơn và hấp thụ 30% Công của địch trong 1 hiệp."
        }
      },
      ultimate: {
        name: { en: "Collapsing Star Roaring Cannon", vi: "Pháo Gầm Ngôi Sao Sụp Đổ" },
        desc: {
          en: "Consumes 20% current HP. Deals 600% ATK direct single-target damage with 150% splash damage to surrounding enemies.",
          vi: "Tiêu hao 20% Máu hiện tại. Gây 600% Công sát thương đơn mục tiêu kèm 150% sát thương lan sang các mục tiêu xung quanh."
        }
      },
      ultraUltimate: {
        name: { en: "Supernova Roaring Cannon (Keepsake)", vi: "Siêu Tân Tinh Cuồng Nộ (Thần Binh)" },
        desc: {
          en: "Deals 900% ATK to main target, 300% splash. If target dies, resets cooldown and refunds 2 energy.",
          vi: "Gây 900% Công lên mục tiêu chính, 300% lan. Nếu mục tiêu gục ngã, hồi ngay lập tức 2 điểm nộ."
        }
      },
      passive: {
        name: { en: "Latent Energy Regeneration", vi: "Tái Sinh Năng Lượng Tiềm Ẩn" },
        desc: {
          en: "At start of turn, restores 35% missing HP. Gains 50% Tenacity shield whenever casting Ultimate.",
          vi: "Đầu lượt tự hồi phục 35% lượng máu đã mất. Nhận khiên Kiên Cường 50% mỗi khi tung Tuyệt kỹ."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Monster faction ATK by 25% and splash damage efficiency by 40%.",
          vi: "Tăng 25% Công cho toàn bộ phe Quái Nhân và tăng 40% hiệu suất sát thương lan."
        },
        stage2: {
          en: "Survives fatal damage with 1 HP and enters Meteor Burst state for 2 turns (+50% SPD, +60% ATK).",
          vi: "Chống chịu sát thương chí tử còn 1 Máu và kích hoạt trạng thái Bùng Nổ Sao Băng (+50% Tốc, +60% Công)."
        }
      }
    },
    recommendedGears: ["Primal", "Suit", "Swordsman"],
    synergies: {
      en: "Excels in Monster comps with Gyoro-Gyoro core and Geryuganshoop+.",
      vi: "Hoàn hảo trong đội hình Quái Nhân với Lõi Gyoro-Gyoro và Geryuganshoop+."
    },
    counters: {
      en: "Heavy heal reduction and silence lock.",
      vi: "Kém hiệu quả khi gặp hiệu ứng giảm hồi phục mạnh và câm lặng liên tục."
    }
  },
  {
    id: "ur_sonic",
    name: { en: "UR Speed-o'-Sound Sonic", vi: "Sonic UR" },
    title: { en: "Shadow Assassin", vi: "Sát Thủ Bóng Đêm" },
    rarity: "UR",
    faction: "Outlaw",
    class: "Duelist",
    tier: "SSS",
    avatar: "avatars/ur_sonic.webp",
    stats: { atk: 21800, hp: 98000, def: 8100, spd: 145 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Wind Blade Slash", vi: "Phong Trảm Kích" },
        desc: {
          en: "Deals 170% ATK damage to single target. 100% chance to inflict [Shatter] (+40% extra damage taken).",
          vi: "Gây 170% Công lên mục tiêu đơn. 100% gây trạng thái [Vỡ Giáp] (+40% sát thương nhận thêm)."
        }
      },
      ultimate: {
        name: { en: "Ten Shadows Burial", vi: "Thập Trọng Ảnh Táng" },
        desc: {
          en: "Attacks the enemy with the highest ATK 5 times for a total of 650% ATK damage. Steals 30 Speed for 2 rounds.",
          vi: "Tấn công kẻ địch có Công cao nhất 5 lần, tổng cộng 650% Công. Đánh cắp 30 điểm Tốc độ trong 2 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Absolute Shadow Decapitation", vi: "Bóng Đêm Trảm Thủ (Thần Binh)" },
        desc: {
          en: "Keepsake. Deals 950% ATK damage to target. Bypasses 70% DEF and inflicts [Fear] (disables ultimate next turn).",
          vi: "Thần Binh. Gây 950% Công lên mục tiêu. Bỏ qua 70% Giáp và áp dụng [Sợ Hãi] (cấm dùng nộ ở lượt kế)."
        }
      },
      passive: {
        name: { en: "Flash Speed Mastery", vi: "Tuyệt Kỹ Thần Tốc" },
        desc: {
          en: "Always gains 1st priority move in round 1. Whenever an ally is attacked, Sonic counters with 120% ATK damage (up to 3 times/round).",
          vi: "Luôn được ưu tiên ra đòn đầu tiên ở hiệp 1. Khi đồng đội bị tấn công, Sonic phản kích 120% Công (tối đa 3 lần/hiệp)."
        }
      },
      awakening: {
        stage1: {
          en: "Increases entire team speed by 15. Counter attacks apply [Shatter].",
          vi: "Tăng 15 Tốc độ cho toàn đội. Đòn phản kích luôn kích hoạt [Vỡ Giáp]."
        },
        stage2: {
          en: "When defeating an enemy, instantly takes another action and gains 100% Dodge for 1 turn.",
          vi: "Khi tiêu diệt mục tiêu, lập tức nhận thêm 1 lượt hành động và tăng 100% Né Tránh trong 1 lượt."
        }
      }
    },
    recommendedGears: ["Lightning", "Knight", "Prisoner"],
    synergies: {
      en: "Deadly opening pick in Live Arena to assassinate enemy carry before they move.",
      vi: "Quân bài mở màn nguy hiểm nhất Live Arena để bắt chết chủ lực đối thủ trước khi kịp ra chiêu."
    },
    counters: {
      en: "Damage reflection and unyielding tank frontline (SSR+ Silverfang / Tanktop).",
      vi: "Khắc chế bởi dàn chắn phản đòn và giáp bất khuất (SSR+ Silverfang / Áo Ba Lỗ)."
    }
  },
  {
    id: "urplus_blacksperm",
    name: { en: "UR+ Black Sperm", vi: "Tinh Trùng Đen UR+" },
    title: { en: "Calamity Clone King", vi: "Đại Tông Sư Giác Đấu / Biến Phân Thân" },
    rarity: "UR",
    faction: "Monster",
    class: "Grappler",
    tier: "SSS",
    avatar: "avatars/urplus_blacksperm.webp",
    stats: { atk: 22500, hp: 165000, def: 12000, spd: 132 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Cell Division Strike", vi: "Đòn Phân Tách Tế Bào" },
        desc: {
          en: "Deals 180% ATK damage to single target. Spawns 1 clone copy with 40% stats.",
          vi: "Gây 180% Công lên mục tiêu đơn. Tạo 1 phân thân sở hữu 40% chỉ số."
        }
      },
      ultimate: {
        name: { en: "Trillion Clone Swarm", vi: "Bão Phân Thân Hàng Triệu Bản Thể" },
        desc: {
          en: "Deals 380% ATK damage to all 6 enemies. Splits into 8 clone copies, granting [Specialized Unyielding] and multi-strike pursuit.",
          vi: "Gây 380% Công lên toàn bộ 6 kẻ địch. Tách thành 8 phân thân, nhận [Bất Khuất Chuyên Biệt] và liên tục truy kích."
        }
      },
      ultraUltimate: {
        name: { en: "Golden Sperm Fusion (Keepsake)", vi: "Hợp Thể Tinh Trùng Vàng (Thần Binh)" },
        desc: {
          en: "Deals 580% ATK to all enemies with 250% Specialized Direct DMG. Bypasses all Tenacity shields.",
          vi: "Gây 580% Công toàn thể kèm 250% Sát thương Trực tiếp Chuyên biệt. Xuyên thủng mọi loại khiên Kiên Cường."
        }
      },
      passive: {
        name: { en: "Infinite Clone Multiplication", vi: "Nhân Bản Vô Hạn" },
        desc: {
          en: "Each clone attacks when allies act. When fatal damage is taken, consumes 1 clone to restore 50% HP.",
          vi: "Mỗi phân thân tự động truy kích khi đồng đội đánh. Khi nhận sát thương chí tử, hy sinh 1 phân thân để hồi 50% Máu."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Monster faction Specialized Direct Damage by 40%.",
          vi: "Tăng 40% Sát thương Trực tiếp Chuyên biệt cho toàn bộ phe Quái Nhân."
        },
        stage2: {
          en: "Clones inherit 75% of Black Sperm's Max HP and ATK.",
          vi: "Phân thân kế thừa 75% Máu tối đa và Công của Tinh Trùng Đen."
        }
      }
    },
    recommendedGears: ["Knight", "Primal", "Suit"],
    synergies: {
      en: "Supreme endgame Monster carry when paired with Gyoro Core and UR+ Zombieman.",
      vi: "Chủ lực Quái Nhân tối thượng khi kết hợp cùng Lõi Gyoro và Zombieman UR+."
    },
    counters: {
      en: "Extreme AoE multi-hit clearers and True Damage bypass.",
      vi: "Đòn quét diện rộng đa hit và sát thương chuẩn cực đại."
    }
  },
  {
    id: "urplus_zombieman",
    name: { en: "UR+ Zombieman", vi: "Zombieman UR+" },
    title: { en: "Immortal Vanguard Awakened", vi: "Tiên Phong Bất Tử / Phục Sinh Vô Tận" },
    rarity: "UR",
    faction: "Hero",
    class: "Duelist",
    tier: "SSS",
    avatar: "avatars/urplus_zombieman.webp",
    stats: { atk: 18500, hp: 195000, def: 14500, spd: 125 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Severing Blast", vi: "Nhát Chém Bắn Phá" },
        desc: {
          en: "Deals 160% ATK damage and applies [Specialized Injury].",
          vi: "Gây 160% Công và gây [Nội Thương Chuyên Biệt]."
        }
      },
      ultimate: {
        name: { en: "Immortal Blood Tempest", vi: "Huyết Bão Bất Tử" },
        desc: {
          en: "Deals 320% ATK to enemy front row. Heals all allies for 30% of Zombieman Max HP and grants [Specialized Unyielding].",
          vi: "Gây 320% Công lên hàng trước của địch. Hồi 30% Máu tối đa của Zombieman cho toàn đội và ban [Bất Khuất Chuyên Biệt]."
        }
      },
      ultraUltimate: {
        name: { en: "Resurrection Cataclysm (Keepsake)", vi: "Tuyệt Diệt Phục Sinh (Thần Binh)" },
        desc: {
          en: "Deals 480% ATK damage. Allies gain 50% Specialized Damage Reduction and 6 revive counters.",
          vi: "Gây 480% Công. Toàn đội nhận 50% Miễn thương Chuyên biệt và cấp 6 lần hồi sinh liên hoàn."
        }
      },
      passive: {
        name: { en: "Eternal Rebirth", vi: "Tái Sinh Vĩnh Cửu" },
        desc: {
          en: "Revives indefinitely with 40% HP as long as at least 1 ally remains alive.",
          vi: "Hồi sinh vô hạn lần với 40% Máu miễn là trên sân còn ít nhất 1 đồng đội sống sót."
        }
      },
      coreSkill: {
        name: { en: "UR+ Immortal Evolution Core", vi: "Lõi Tiến Hóa Bất Tử UR+" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng"
        },
        basicEffect: {
          en: "Rounds 1-4: Gain 4 Energy per round. When allies revive, gain 2 bonus Energy.",
          vi: "Hiệp 1-4: Nhận 4 Năng lượng mỗi hiệp. Khi đồng minh hồi sinh, nhận thêm 2 Năng lượng."
        },
        advancedEffect: {
          en: "Allies gain 40% Specialized Damage Reduction and 50% healing amplification.",
          vi: "Toàn đội nhận 40% Miễn thương Chuyên biệt và tăng 50% hiệu quả hồi phục máu."
        }
      },
      awakening: {
        stage1: {
          en: "When an ally revives, dispels all debuffs and grants full rage bar.",
          vi: "Khi đồng minh hồi sinh, xóa sạch hiệu ứng xấu và làm đầy bình nộ."
        },
        stage2: {
          en: "Immune to anti-revival skills and execute effects.",
          vi: "Kháng hoàn toàn kỹ năng cấm hồi sinh và hiệu ứng hành quyết."
        }
      }
    },
    recommendedGears: ["Suit", "Battle", "Knight"],
    synergies: {
      en: "The supreme stall, sustain, and resurrection engine in SEA meta.",
      vi: "Động cơ câu giờ, hồi phục và hồi sinh mạnh nhất meta SEA."
    },
    counters: {
      en: "Extreme multi-target true damage burst.",
      vi: "Đội hình dồn sát thương chuẩn đa mục tiêu cực nhanh."
    }
  },
  {
    id: "ur_gyoro",
    name: { en: "UR Gyoro-Gyoro", vi: "Gyoro-Gyoro UR" },
    title: { en: "Supreme Monster Association Brain", vi: "Bộ Não Hiệp Hội Quái Nhân" },
    rarity: "UR",
    faction: "Monster",
    class: "Esper",
    tier: "SSS",
    avatar: "avatars/ur_gyoro.webp",
    stats: { atk: 20000, hp: 155000, def: 11000, spd: 130 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Psychic Ray Burst", vi: "Tia Năng Lượng Phóng Đại" },
        desc: {
          en: "Deals 160% ATK damage and applies [Specialized Corrode].",
          vi: "Gây 160% Công và gây [Ăn Mòn Chuyên Biệt]."
        }
      },
      ultimate: {
        name: { en: "Flesh Expansion Domain", vi: "Lãnh Địa Huyết Thịt Bành Trướng" },
        desc: {
          en: "Deals 280% ATK to all 6 enemies. Increases Monster allies Max HP by 40% and grants 30% Specialized Non-Crit DMG Reduction.",
          vi: "Gây 280% Công lên toàn bộ 6 kẻ địch. Tăng 40% Máu tối đa cho phe Quái Nhân và giảm 30% Sát thương Không bạo kích."
        }
      },
      ultraUltimate: {
        name: { en: "Abyssal Flesh Devastation (Keepsake)", vi: "Đại Nhãn Tận Diệt Huyết Thịt (Thần Binh)" },
        desc: {
          en: "Deals 420% ATK to all enemies. Monster allies deal bonus Specialized Direct DMG equal to 20% of their Max HP.",
          vi: "Gây 420% Công toàn thể. Đồng minh Quái Nhân gây thêm Sát thương Trực tiếp Chuyên biệt bằng 20% Máu tối đa."
        }
      },
      passive: {
        name: { en: "Supreme Monster Commander", vi: "Chỉ Huy Quái Nhân Tối Cao" },
        desc: {
          en: "When an ally receives fatal damage, revives them with 50% HP and 100% Rage (triggers twice per battle).",
          vi: "Khi đồng minh nhận đòn chí tử, hồi sinh với 50% Máu và đầy bình nộ (2 lần mỗi trận)."
        }
      },
      coreSkill: {
        name: { en: "UR Supreme Monster Core", vi: "Lõi Quái Nhân Tối Thượng UR" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng"
        },
        basicEffect: {
          en: "Rounds 1-4: Gain 4 Energy per round. When Tenacity triggers, gain 1 bonus Energy.",
          vi: "Hiệp 1-4: Nhận 4 Năng lượng mỗi hiệp. Khi tạo khiên Kiên Cường, nhận thêm 1 Năng lượng."
        },
        advancedEffect: {
          en: "Entire team gains +40% Max HP and +35% Specialized Direct Damage.",
          vi: "Toàn đội nhận +40% Máu tối đa và +35% Sát thương Trực tiếp Chuyên biệt."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Monster Max HP scaling bonus from 20% to 30%.",
          vi: "Tăng sát thương phụ cộng theo Máu tối đa từ 20% lên 30%."
        },
        stage2: {
          en: "Applies [Specialized Corrode] to all 6 enemies at start of battle.",
          vi: "Tự động gieo [Ăn Mòn Chuyên Biệt] lên toàn bộ 6 kẻ địch đầu trận."
        }
      }
    },
    recommendedGears: ["Suit", "Scholar", "Battle"],
    synergies: {
      en: "The #1 core engine for all Monster faction meta compositions.",
      vi: "Động cơ Lõi số 1 cho mọi đội hình Quái Nhân cấp cao."
    },
    counters: {
      en: "High-speed turn-1 Hero burst wiping frontline.",
      vi: "Đội hình Anh Hùng tốc độ cao quét sạch hàng trước ngay lượt 1."
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
  },
  {
    id: "ur_flashy_flash",
    name: { en: "UR Flashy Flash", vi: "Flash Quang Tốc UR" },
    title: { en: "Light Speed Sword Master", vi: "Kiếm Khách Tốc Độ Ánh Sáng" },
    rarity: "UR",
    faction: "Hero",
    class: "Duelist",
    tier: "SSS",
    avatar: "avatars/ur_flashy_flash.webp",
    stats: { atk: 21500, hp: 102000, def: 8400, spd: 148 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Light Speed Thrust", vi: "Đâm Tốc Độ Ánh Sáng" },
        desc: {
          en: "Deals 170% ATK damage and steals 20 Speed.",
          vi: "Gây 170% Công và cướp 20 Tốc độ của địch."
        }
      },
      ultimate: {
        name: { en: "Flashy Slash Barrage", vi: "Quang Tốc Vô Ảnh Trảm" },
        desc: {
          en: "Deals 350% ATK to all 6 enemies. Inflicts [Light Speed Disarm] reducing enemy Crit Rate by 50% and granting 3 extra pursuits.",
          vi: "Gây 350% Công lên toàn bộ 6 kẻ địch. Gây [Tước Khí Quang Tốc] giảm 50% bạo kích địch và cấp 3 lần truy kích."
        }
      },
      ultraUltimate: {
        name: { en: "Flowing Shadow Lightblade (Keepsake)", vi: "Lưu Ảnh Quang Kiếm (Thần Binh)" },
        desc: {
          en: "Deals 520% ATK to all enemies. Ignores 60% DEF and grants 100% Dodge for 2 turns.",
          vi: "Gây 520% Công toàn thể. Xuyên 60% Giáp và tăng 100% Né Tránh trong 2 hiệp."
        }
      },
      passive: {
        name: { en: "Absolute Velocity", vi: "Vận Tốc Tuyệt Đối" },
        desc: {
          en: "Increases entire team speed by 25. Whenever Flashy Flash dodges, counters for 200% ATK.",
          vi: "Tăng 25 Tốc độ cho toàn đội. Mỗi khi né đòn thành công, phản kích 200% Công."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Duelist allies Crit Damage by 50%.",
          vi: "Tăng 50% Sát thương Bạo kích cho đồng đội hệ Vũ Trang."
        },
        stage2: {
          en: "When defeating an enemy, resets ultimate cooldown immediately.",
          vi: "Khi tiêu diệt mục tiêu, hồi ngay lập tức tuyệt kỹ."
        }
      }
    },
    recommendedGears: ["Lightning", "Knight", "Prisoner"],
    synergies: {
      en: "Pairs with Sonic UR and Atomic Samurai for fastest turn-1 speed sweep.",
      vi: "Đi cùng Sonic UR và Atomic Samurai để giành quyền đi trước tuyệt đối."
    },
    counters: {
      en: "Heavy damage reflection tanks (Carnage / Silverfang).",
      vi: "Tướng phản sát thương cực đại như Bọ Hung và Silverfang."
    }
  },
  {
    id: "ur_fubuki",
    name: { en: "UR Hellish Blizzard (Fubuki)", vi: "Bão Tuyết Fubuki UR" },
    title: { en: "Blizzard Group Leader Awakened", vi: "Thủ Lĩnh Nhóm Blizzard Thức Tỉnh" },
    rarity: "UR",
    faction: "Hero",
    class: "Esper",
    tier: "SS",
    avatar: "avatars/ur_fubuki.webp",
    stats: { atk: 18800, hp: 135000, def: 9800, spd: 122 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Psychic Storm", vi: "Bão Niệm Lực" },
        desc: {
          en: "Deals 140% ATK damage and heals adjacent allies.",
          vi: "Gây 140% Công và hồi máu cho đồng minh liền kề."
        }
      },
      ultimate: {
        name: { en: "Hellish Gale Hurricane", vi: "Cuồng Phong Địa Ngục Bão Tuyết" },
        desc: {
          en: "Deals 280% ATK to all enemies. Grants entire team [Tenacity Shield] equal to 30% Fubuki Max HP and 2 Energy points.",
          vi: "Gây 280% Công toàn thể. Cấp [Khiên Kiên Cường] 30% Máu tối đa của Fubuki cho toàn đội và hồi 2 điểm Năng lượng."
        }
      },
      ultraUltimate: {
        name: { en: "Absolute Blizzard Domain (Keepsake)", vi: "Tuyệt Đối Bão Tuyết Lãnh Địa (Thần Binh)" },
        desc: {
          en: "Deals 400% ATK to all enemies. Increases allies ATK by 40% and grants immunity to control effects for 2 rounds.",
          vi: "Gây 400% Công toàn thể. Tăng 40% Công cho toàn đội và miễn nhiễm khống chế trong 2 hiệp."
        }
      },
      passive: {
        name: { en: "Blizzard Shield Barrier", vi: "Khiên Phòng Hộ Bão Tuyết" },
        desc: {
          en: "While shielded, allies receive 30% less damage and deal 25% more damage.",
          vi: "Khi đang có khiên bảo hộ, đồng đội nhận ít hơn 30% sát thương và gây thêm 25% sát thương."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Tenacity shield thickness by 35%.",
          vi: "Tăng 35% độ dày của khiên Kiên Cường."
        },
        stage2: {
          en: "When an ally shield breaks, damages all enemies for 150% ATK.",
          vi: "Khi khiên của đồng đội vỡ, gây 150% Công lên toàn bộ quân địch."
        }
      }
    },
    recommendedGears: ["Suit", "Scholar", "Casual"],
    synergies: {
      en: "Top-tier support buffer for Esper teams and Bomb / Tatsumaki comps.",
      vi: "Hỗ trợ tạo khiên và hồi năng lượng hàng đầu cho hệ Siêu Năng và Lõi Bomb."
    },
    counters: {
      en: "Shield shattering and high single-target burst.",
      vi: "Đòn phá khiên và sát thương đơn dồn nhanh."
    }
  },
  {
    id: "ur_king",
    name: { en: "UR King", vi: "Vua May Mắn King UR" },
    title: { en: "Strongest Man on Earth", vi: "Người Đàn Ông Mạnh Nhất Địa Cầu" },
    rarity: "UR",
    faction: "Hero",
    class: "Esper",
    tier: "SSS",
    avatar: "avatars/ur_king.webp",
    stats: { atk: 19500, hp: 140000, def: 10200, spd: 128 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "King Engine Rumble", vi: "Tiếng Động Cơ King Engine" },
        desc: {
          en: "Intimidates single enemy, sealing 1 energy point and healing self.",
          vi: "Uy hiếp mục tiêu đơn, khóa 1 điểm năng lượng và hồi máu bản thân."
        }
      },
      ultimate: {
        name: { en: "King Engine Overdrive", vi: "Động Cơ King Cuồng Nộ" },
        desc: {
          en: "Locks 4 enemy energy points. Deals 300% ATK Specialized Direct DMG to all 6 enemies and heals entire team.",
          vi: "Khóa 4 điểm Năng lượng của đối thủ. Gây 300% Công Sát thương Trực tiếp Chuyên biệt lên toàn bộ 6 kẻ địch và hồi máu toàn đội."
        }
      },
      ultraUltimate: {
        name: { en: "Ultimate Purgatory Shockwave (Keepsake)", vi: "Luyện Ngục Sóng Âm Tuyệt Kỹ (Thần Binh)" },
        desc: {
          en: "Seals ALL 6 enemy energy points for 2 turns. Deals 450% ATK damage and dispels all enemy buffs.",
          vi: "Khóa TOÀN BỘ 6 điểm Năng lượng của đối thủ trong 2 hiệp. Gây 450% Công và xóa toàn bộ bùa lợi đối thủ."
        }
      },
      passive: {
        name: { en: "Aura of the Strongest", vi: "Khí Phách Kẻ Mạnh Nhất" },
        desc: {
          en: "Reduces all enemies ATK by 30% and increases entire team healing received by 40%.",
          vi: "Giảm 30% Công của toàn bộ phe địch và tăng 40% hiệu ứng hồi máu nhận vào cho toàn đội."
        }
      },
      awakening: {
        stage1: {
          en: "Energy lock cannot be cleansed or resisted.",
          vi: "Hiệu ứng khóa nộ năng lượng không thể bị giải trừ hoặc kháng."
        },
        stage2: {
          en: "Survives fatal hit with Unyielding and restores full team HP by 30%.",
          vi: "Kích hoạt Bất Khuất khi nhận sát thương chí tử và hồi 30% Máu cho toàn đội."
        }
      }
    },
    recommendedGears: ["Suit", "Scholar", "Knight"],
    synergies: {
      en: "Ultimate energy denial and stall engine in high-level PvP Live Arena.",
      vi: "Bá chủ khóa năng lượng tuyệt đối trong đấu trường PvP đỉnh cao."
    },
    counters: {
      en: "Pure basic-attack hyper carries with unyielding.",
      vi: "Đội hình đánh thường siêu mạnh không phụ thuộc vào nộ."
    }
  },

  // ==========================================
  // SSR & SSR+ HEROES (MID / LATE GAME META)
  // ==========================================
  {
    id: "bomb_core",
    name: { en: "Bomb (Core Master)", vi: "Bomb (Thần Lõi)" },
    title: { en: "Whirlwind Iron Cutting Master", vi: "Bậc Thầy Gió Lốc Cắt Sắt" },
    rarity: "SSR",
    faction: "Hero",
    class: "Grappler",
    tier: "SSS",
    avatar: "avatars/bomb_core.webp",
    stats: { atk: 14800, hp: 135000, def: 10500, spd: 115 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Whirlwind Slash", vi: "Gió Lốc Cắt" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Whirlwind Iron Cutting Fist", vi: "Toàn Phong Thiết Trảm Quyền" },
        desc: {
          en: "Deals 220% ATK to enemy front row and increases team Block Rate by 30%.",
          vi: "Gây 220% Công lên hàng trước của địch và tăng 30% Tỉ lệ Đỡ Đòn cho toàn đội."
        }
      },
      ultraUltimate: {
        name: { en: "Whirlwind Dragon Slash (Keepsake)", vi: "Toàn Phong Long Trảm (Thần Binh)" },
        desc: {
          en: "Deals 320% ATK to front row. Grants 40% Block Rate and applies [Internal Injury] to targets.",
          vi: "Gây 320% Công lên hàng trước. Tăng 40% Đỡ Đòn và gây [Nội Thương] lên các mục tiêu."
        }
      },
      passive: {
        name: { en: "Martial Arts Bond", vi: "Liên Kết Võ Đạo" },
        desc: {
          en: "When Silverfang or Bomb is on the field, both gain 30% HP and 25% Damage Reduction.",
          vi: "Khi có Bang hoặc Bomb trên sân, cả hai cùng nhận 30% Máu và 25% Miễn thương."
        }
      },
      coreSkill: {
        name: { en: "Whirlwind Defense Core (Bomb Core)", vi: "Lõi Phòng Ngự Toàn Phong (Bomb Core)" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper in lineup",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng trong đội hình"
        },
        basicEffect: {
          en: "Rounds 1-3: Gain 3 Energy per round. When an ally blocks, gain 1 extra Energy (up to 2 times per round).",
          vi: "Hiệp 1-3: Nhận 3 Năng lượng mỗi hiệp. Khi đồng minh đỡ đòn thành công, hồi thêm 1 Năng lượng (tối đa 2 lần/hiệp)."
        },
        advancedEffect: {
          en: "At start of battle, grants all 6 allies [Tenacity Shield] equal to 35% of Bomb's Max HP and 25% Non-crit Damage Reduction.",
          vi: "Đầu trận cấp [Khiên Kiên Cường] bằng 35% Máu tối đa của Bomb cho toàn bộ 6 tướng phe ta và 25% Miễn sát thương không bạo kích."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Core Tenacity shield by an additional 20%.",
          vi: "Tăng thêm 20% độ dày của Khiên Kiên Cường từ Lõi Core."
        },
        stage2: {
          en: "Shielded allies gain 30% ATK bonus while shields remain active.",
          vi: "Đồng đội đang có khiên bảo hộ nhận thêm 30% Công."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Primal"],
    synergies: {
      en: "The #1 SEA defensive core. Pairs seamlessly with SSR+ Bang, UR Saitama, and UR Tatsumaki.",
      vi: "Lõi phòng ngự số 1 máy chủ SEA. Phối hợp hoàn hảo cùng Bang SSR+, Saitama UR và Tatsumaki UR."
    },
    counters: {
      en: "Heavy shield-shattering attacks.",
      vi: "Các đòn đánh phá khiên chuyên dụng."
    }
  },
  {
    id: "ssr_plus_silverfang",
    name: { en: "SSR+ Silverfang (Bang)", vi: "Bang Băng Sơn SSR+" },
    title: { en: "Water Stream Rock Smashing Master", vi: "Bậc Thầy Nước Chảy Đá Mòn" },
    rarity: "SSR+",
    faction: "Hero",
    class: "Grappler",
    tier: "SS",
    avatar: "avatars/ssr_plus_silverfang.webp",
    stats: { atk: 15200, hp: 148000, def: 11200, spd: 118 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Water Fist", vi: "Lưu Thủy Quyền" },
        desc: {
          en: "Deals 130% ATK damage and reduces target damage by 30% for 1 round.",
          vi: "Gây 130% Công và giảm 30% sát thương của mục tiêu trong 1 hiệp."
        }
      },
      ultimate: {
        name: { en: "Awakened Water Stream Combo", vi: "Lưu Thủy Liên Hoàn Quyền Thức Tỉnh" },
        desc: {
          en: "Deals 280% ATK to single row and grants all allies [Block & Toughness] reducing damage taken by 40%.",
          vi: "Gây 280% Công lên 1 hàng và cấp [Đỡ Đòn & Kiên Định] cho toàn đội giúp giảm 40% sát thương nhận vào."
        }
      },
      ultraUltimate: {
        name: { en: "Cross Fang Dragon Slayer Fist", vi: "Giao Nha Long Sát Quyền (Thần Binh)" },
        desc: {
          en: "Deals 400% ATK damage. Allies gain 50% Damage Reduction and reflect 40% of incoming damage.",
          vi: "Gây 400% Công. Toàn đội nhận 50% Miễn thương và phản 40% sát thương nhận vào."
        }
      },
      passive: {
        name: { en: "Flowing Water Defense", vi: "Nước Chảy Phòng Hộ" },
        desc: {
          en: "Grants entire frontline [Unyielding] for 1 fatal hit per battle and counters enemy attacks.",
          vi: "Cấp trạng thái [Bất Khuất] chống 1 đòn chí tử cho toàn bộ hàng trước và phản kích đòn đánh của địch."
        }
      },
      awakening: {
        stage1: {
          en: "Increases team Tenacity shield efficiency by 40%.",
          vi: "Tăng 40% hiệu lực lớp khiên Kiên Cường của toàn đội."
        },
        stage2: {
          en: "When blocking, dispels 1 debuff from all allies.",
          vi: "Mỗi khi đỡ đòn thành công, giải trừ 1 hiệu ứng xấu cho toàn phe ta."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Martial Arts"],
    synergies: {
      en: "Supreme frontline protector for Bomb / Gyoro cores and squishy carries.",
      vi: "Lá chắn hàng đầu bảo vệ đồng đội cho Lõi Bomb / Gyoro và các sát thương chủ lực mỏng manh."
    },
    counters: {
      en: "True damage and direct DEF bypass (UR Saitama).",
      vi: "Sát thương chuẩn và đòn đánh xuyên giáp trực tiếp của UR Saitama."
    }
  },
  {
    id: "ssr_plus_atomic",
    name: { en: "SSR+ Atomic Samurai", vi: "Atomic Samurai SSR+" },
    title: { en: "Sword Saint Awakened", vi: "Kiếm Thánh Thức Tỉnh" },
    rarity: "SSR+",
    faction: "Hero",
    class: "Duelist",
    tier: "SS",
    avatar: "avatars/ssr_plus_atomic.webp",
    stats: { atk: 18400, hp: 105000, def: 8400, spd: 122 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Slash", vi: "Trảm" },
        desc: {
          en: "Deals 140% ATK damage to single enemy and inflicts [Shatter].",
          vi: "Gây 140% Công lên mục tiêu đơn và tạo hiệu ứng [Vỡ Giáp]."
        }
      },
      ultimate: {
        name: { en: "Awakened Atomic Slash", vi: "Nguyên Tử Trảm Thức Tỉnh" },
        desc: {
          en: "Attacks all 6 enemies for 250% ATK damage. Follows up with 3 extra slashes on the weakest target.",
          vi: "Tấn công toàn thể 6 kẻ địch gây 250% Công. Bồi thêm 3 nhát chém chí mạng vào mục tiêu yếu máu nhất."
        }
      },
      ultraUltimate: {
        name: { en: "Infinite Atomic Slash (Keepsake)", vi: "Vô Cực Nguyên Tử Trảm (Thần Binh)" },
        desc: {
          en: "Deals 360% ATK to all enemies. Increases Duelist allies damage by 40% and grants 3 follow-up pursuits.",
          vi: "Gây 360% Công toàn thể. Tăng 40% sát thương cho đồng đội hệ Vũ Trang và cấp 3 lần truy kích liên hoàn."
        }
      },
      passive: {
        name: { en: "Sword Follow-Up", vi: "Kiếm Phái Truy Kích" },
        desc: {
          en: "Whenever a Duelist ally attacks, Atomic Samurai launches a follow-up attack dealing 160% ATK damage.",
          vi: "Mỗi khi đồng minh hệ Vũ Trang tấn công, Atomic Samurai tung đòn truy kích gây 160% Công."
        }
      },
      awakening: {
        stage1: {
          en: "Follow-up attacks bypass shields and restore 15% HP to Atomic Samurai.",
          vi: "Đòn truy kích xuyên qua mọi loại khiên và hồi 15% Máu cho Atomic Samurai."
        },
        stage2: {
          en: "When an enemy with Shatter is attacked, increases damage dealt by 50%.",
          vi: "Tấn công kẻ địch đang bị Vỡ Giáp tăng 50% sát thương gây ra."
        }
      }
    },
    recommendedGears: ["Knight", "Swordsman", "Casual"],
    synergies: {
      en: "Best in full Duelist synergy teams with Sonic, Flashy Flash, and Golden Ball.",
      vi: "Hoàn hảo trong đội hình thuần Vũ Trang đi cùng Sonic, Flashy Flash và Golden Ball."
    },
    counters: {
      en: "Heavy counter-attack and unyielding defenses.",
      vi: "Bị giảm hiệu quả trước các đội hình phản đòn và phòng ngự trâu bò."
    }
  },
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
    id: "gyoro_core",
    name: { en: "Gyoro-Gyoro (Monster Core)", vi: "Gyoro-Gyoro (Lõi Quái Nhân)" },
    title: { en: "Monster Association Strategist", vi: "Quân Sư Hiệp Hội Quái Nhân" },
    rarity: "SSR",
    faction: "Monster",
    class: "Esper",
    tier: "SS",
    avatar: "avatars/gyoro_core.webp",
    stats: { atk: 14200, hp: 142000, def: 9900, spd: 114 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Psychic Ray", vi: "Tia Siêu Năng" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Giant Eye Compression", vi: "Đại Nhãn Đè Nén" },
        desc: {
          en: "Deals 200% ATK damage to enemy row and increases all Monster allies Max HP by 25%.",
          vi: "Gây 200% Công lên 1 hàng địch và tăng 25% Máu tối đa cho toàn bộ đồng minh Quái Nhân."
        }
      },
      ultraUltimate: {
        name: { en: "Abyssal Eye Cataclysm (Keepsake)", vi: "Đại Nhãn Diệt Thế (Thần Binh)" },
        desc: {
          en: "Deals 300% ATK damage to all enemies. Increases allies Max HP by 35% and boosts DoT by 40%.",
          vi: "Gây 300% Công toàn thể. Tăng 35% Máu tối đa phe ta và tăng 40% sát thương DoT ăn mòn/thiêu đốt."
        }
      },
      passive: {
        name: { en: "Monster Resilience", vi: "Quái Thể Bền Bỉ" },
        desc: {
          en: "Whenever an ally receives fatal damage, grants them [Revival] with 30% HP (triggers once per battle).",
          vi: "Khi đồng minh nhận sát thương chí tử, ban hiệu ứng [Hồi Sinh] với 30% Máu (1 lần mỗi trận)."
        }
      },
      coreSkill: {
        name: { en: "Monster Flesh Core (Gyoro Core)", vi: "Lõi Huyết Thịt Quái Nhân (Gyoro Core)" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper in lineup",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng trong đội hình"
        },
        basicEffect: {
          en: "Rounds 1-3: Gain 3 Energy per round. When an ally triggers Tenacity/Heal, gain 1 bonus Energy.",
          vi: "Hiệp 1-3: Hồi 3 Năng lượng mỗi hiệp. Khi phe ta nhận hồi máu hoặc tạo khiên, nhận thêm 1 Năng lượng."
        },
        advancedEffect: {
          en: "Increases entire team Max HP by 30%. When an ally attacks, they deal bonus damage equal to 10% of their Max HP.",
          vi: "Tăng 30% Máu tối đa cho toàn đội. Khi đồng minh tấn công, gây thêm sát thương phụ bằng 10% Máu tối đa của bản thân."
        }
      },
      awakening: {
        stage1: {
          en: "Increases HP scaling bonus damage from 10% to 16%.",
          vi: "Tăng sát thương phụ cộng thêm theo Máu tối đa từ 10% lên 16%."
        },
        stage2: {
          en: "When an ally revives, they gain 100% Rage bar (immediate Ultimate next action).",
          vi: "Khi đồng minh hồi sinh, nhận ngay 100% thanh nộ (tung tuyệt kỹ ngay lượt kế)."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Monk"],
    synergies: {
      en: "The quintessential Monster Core engine. Pairs with Boros UR, SSR+ Mosquito Girl, and Carnage Kabuto+.",
      vi: "Đầu tàu Lõi tối thượng của phe Quái Nhân. Đi cùng Boros UR, Mosquito Girl SSR+ và Carnage Kabuto+."
    },
    counters: {
      en: "Heavy anti-heal and single-turn burst wipes.",
      vi: "Hiệu ứng giảm hồi máu sâu và đòn quét sạch trong 1 lượt."
    }
  },
  {
    id: "ssr_plus_mosquito",
    name: { en: "SSR+ Mosquito Girl", vi: "Nữ Chúa Muỗi SSR+" },
    title: { en: "Blood Queen Awakened", vi: "Nữ Hoàng Máu Thức Tỉnh" },
    rarity: "SSR+",
    faction: "Monster",
    class: "Esper",
    tier: "SS",
    avatar: "avatars/ssr_plus_mosquito.webp",
    stats: { atk: 18200, hp: 112000, def: 8600, spd: 125 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Blood Drain", vi: "Hút Máu" },
        desc: {
          en: "Deals 150% ATK damage to single enemy and heals self for 100% of damage dealt.",
          vi: "Gây 150% Công lên mục tiêu đơn và hồi phục bản thân 100% lượng sát thương gây ra."
        }
      },
      ultimate: {
        name: { en: "Blood Storm Swarm", vi: "Bão Đàn Muỗi Huyết Sát" },
        desc: {
          en: "Deals 260% ATK damage to all 6 enemies. Inflicts [Corrode] dealing 120% ATK damage per turn for 2 turns.",
          vi: "Gây 260% Công lên toàn bộ 6 kẻ địch. Gây hiệu ứng [Ăn Mòn] 120% Công mỗi lượt trong 2 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Crimson Swarm Devastation (Keepsake)", vi: "Huyết Triều Tận Diệt (Thần Binh)" },
        desc: {
          en: "Deals 380% ATK to all enemies. Corrode damage is increased to 200% ATK and heals all allies for 30% of DoT damage.",
          vi: "Gây 380% Công toàn thể. Tăng sát thương Ăn Mòn lên 200% Công và hồi máu cho toàn phe ta bằng 30% sát thương DoT."
        }
      },
      passive: {
        name: { en: "Blood Feast", vi: "Đại Tiệc Huyết Nhục" },
        desc: {
          en: "Whenever any unit (ally or enemy) takes DoT or Corrode damage, Mosquito Girl recovers 15% HP and gains 10% ATK (max 5 stacks).",
          vi: "Mỗi khi bất kỳ đơn vị nào nhận sát thương DoT hoặc Ăn Mòn, hồi 15% Máu và tăng 10% Công (tối đa 5 tầng)."
        }
      },
      awakening: {
        stage1: {
          en: "At start of battle, applies [Corrode] to 2 random enemies automatically.",
          vi: "Đầu trận tự động gieo rắc [Ăn Mòn] lên 2 kẻ địch ngẫu nhiên."
        },
        stage2: {
          en: "Corrode damage can now critically strike.",
          vi: "Sát thương Ăn Mòn có thể gây Bạo Kích."
        }
      }
    },
    recommendedGears: ["Prisoner", "Casual", "Suit"],
    synergies: {
      en: "Key enabler of DoT / Corrode meta with Deep Sea King and Gyoro core.",
      vi: "Trọng tâm của meta Ăn Mòn DoT kết hợp Vua Biển Sâu và Lõi Gyoro."
    },
    counters: {
      en: "Heavy debuff dispels and rapid shield cleanse.",
      vi: "Đội hình giải bùa xấu nhanh và khiên kháng hiệu ứng."
    }
  },
  {
    id: "zombieman_core",
    name: { en: "Zombieman (Core Master)", vi: "Zombieman (Thần Bất Tử)" },
    title: { en: "Immortal Detective", vi: "Thám Tử Bất Tử" },
    rarity: "SSR",
    faction: "Hero",
    class: "Grappler",
    tier: "S",
    avatar: "avatars/zombieman_core.webp",
    stats: { atk: 13900, hp: 145000, def: 10200, spd: 110 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Dual Pistol Fire", vi: "Song Súng Bắn Phá" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Severing Blade & Shotgun", vi: "Trảm Kích Súng Hoa Cải" },
        desc: {
          en: "Deals 240% ATK to single target and inflicts [Internal Injury] dealing 100% ATK extra damage on hit.",
          vi: "Gây 240% Công lên mục tiêu đơn và gieo [Nội Thương] nhận thêm 100% Công khi bị đánh."
        }
      },
      ultraUltimate: {
        name: { en: "Infinite Regeneration Burst (Keepsake)", vi: "Tái Sinh Vô Tận Bùng Nổ (Thần Binh)" },
        desc: {
          en: "Deals 340% ATK to single target, heals entire team for 20% of Zombieman's Max HP.",
          vi: "Gây 340% Công lên mục tiêu đơn, hồi 20% Máu tối đa của Zombieman cho toàn phe ta."
        }
      },
      passive: {
        name: { en: "Infinite Regeneration", vi: "Tái Sinh Vĩnh Hằng" },
        desc: {
          en: "Revives up to 4 times upon defeat with 25% HP.",
          vi: "Tự hồi sinh tối đa 4 lần khi bị hạ gục với 25% Máu."
        }
      },
      coreSkill: {
        name: { en: "Immortal Blood Core", vi: "Lõi Huyết Mạch Bất Tử (Zombieman Core)" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng"
        },
        basicEffect: {
          en: "Rounds 1-3: Gain 2 energy per round. Whenever an ally dies or revives, gain 2 extra energy.",
          vi: "Hiệp 1-3: Hồi 2 năng lượng mỗi hiệp. Khi đồng minh gục ngã hoặc hồi sinh, nhận thêm 2 năng lượng."
        },
        advancedEffect: {
          en: "When an ally takes fatal damage, survives with 1 HP for 1 turn and heals all allies for 15% HP.",
          vi: "Khi đồng minh nhận sát thương chí tử, duy trì 1 Máu trong 1 hiệp và hồi 15% Máu cho toàn đội."
        }
      },
      awakening: {
        stage1: {
          en: "Increases team healing received by 30%.",
          vi: "Tăng 30% hiệu ứng hồi máu nhận vào của toàn đội."
        },
        stage2: {
          en: "Revives with 50% HP and full energy bar.",
          vi: "Hồi sinh với 50% Máu và đầy bình nộ."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Martial Arts"],
    synergies: {
      en: "Classic stall and endurance core. Great with tanky frontlines and sustained DoT.",
      vi: "Lõi câu giờ kinh điển. Rất hợp với hàng trước trâu bò và sát thương duy trì DoT."
    },
    counters: {
      en: "True damage and anti-revival skills.",
      vi: "Sát thương chuẩn và kỹ năng cấm hồi sinh."
    }
  },
  {
    id: "ssr_plus_geryu",
    name: { en: "SSR+ Geryuganshoop", vi: "Geryuganshoop SSR+" },
    title: { en: "Gravity Master", vi: "Bậc Thầy Trọng Lực" },
    rarity: "SSR+",
    faction: "Monster",
    class: "Esper",
    tier: "SS",
    avatar: "avatars/ssr_plus_geryu.webp",
    stats: { atk: 18900, hp: 108000, def: 8700, spd: 130 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Psychic Pebble", vi: "Sỏi Đá Siêu Năng" },
        desc: {
          en: "Deals 140% ATK damage and reduces target Energy by 1.",
          vi: "Gây 140% Công và trừ 1 điểm Năng lượng của đối thủ."
        }
      },
      ultimate: {
        name: { en: "Telekinetic Gravity Storm", vi: "Bão Trọng Lực Niệm Lực" },
        desc: {
          en: "Deals 260% ATK to all enemies. Inflicts [Gravity Lock] disabling speed buffs for 2 turns.",
          vi: "Gây 260% Công toàn thể. Gây [Khóa Trọng Lực] vô hiệu hóa bùa tăng tốc trong 2 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Super Gravity Singularity (Keepsake)", vi: "Điểm Kỳ Dị Siêu Trọng Lực (Thần Binh)" },
        desc: {
          en: "Deals 380% ATK to all enemies. Steals 2 Energy and increases ally Esper damage by 40%.",
          vi: "Gây 380% Công toàn thể. Cướp 2 điểm Năng lượng và tăng 40% sát thương cho tướng Siêu Năng phe ta."
        }
      },
      passive: {
        name: { en: "Gravitational Dampening", vi: "Trọng Lực Suy Giảm" },
        desc: {
          en: "Reduces all enemies Speed by 20 and increases Esper allies Effect Hit by 30%.",
          vi: "Giảm 20 Tốc độ của toàn bộ phe địch và tăng 30% Tỉ lệ Trúng Hiệu Ứng cho phe Siêu Năng."
        }
      },
      awakening: {
        stage1: {
          en: "When an enemy casts an ultimate, drains 1 extra energy point.",
          vi: "Khi địch dùng tuyệt kỹ, rút thêm 1 điểm nộ năng lượng của địch."
        },
        stage2: {
          en: "Grants entire team 25% Damage Reduction against AoE attacks.",
          vi: "Cấp 25% Miễn thương trước các đòn đánh diện rộng cho toàn đội."
        }
      }
    },
    recommendedGears: ["Knight", "Lightning", "Primal"],
    synergies: {
      en: "Speed-control god for Esper burst teams and Boros UR comps.",
      vi: "Chúa tể khống chế tốc độ cho đội hình dồn sát thương Siêu Năng và Boros UR."
    },
    counters: {
      en: "Single-target high burst Duelists (UR Sonic).",
      vi: "Sát thủ Vũ Trang dồn sát thương đơn cực nhanh như UR Sonic."
    }
  },
  {
    id: "child_emperor_core",
    name: { en: "Child Emperor (Core Master)", vi: "Tiểu Bá Vương (Thần Lõi Sơ Cấp)" },
    title: { en: "Genius Boy Prodigy", vi: "Thần Đồng Công Nghệ" },
    rarity: "SSR",
    faction: "Hero",
    class: "HiTech",
    tier: "A",
    avatar: "avatars/child_emperor_core.webp",
    stats: { atk: 14100, hp: 118000, def: 8600, spd: 120 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Mechanical Arm Smash", vi: "Cánh Tay Cơ Khí Đập" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Underdog Robo Barrage", vi: "Robot Chó Con Bắn Phá" },
        desc: {
          en: "Deals 240% ATK to single row and inflicts [Shatter] on targets for 2 turns.",
          vi: "Gây 240% Công lên 1 hàng và gây [Vỡ Giáp] lên mục tiêu trong 2 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Brave Giant Cannon (Keepsake)", vi: "Đại Pháo Dũng Khí (Thần Binh)" },
        desc: {
          en: "Deals 340% ATK to single row. Grants adjacent allies [Berserk] (+30% ATK).",
          vi: "Gây 340% Công lên 1 hàng. Cấp hiệu ứng [Cuồng Bạo] (+30% Công) cho đồng minh liền kề."
        }
      },
      passive: {
        name: { en: "Tactical Genius", vi: "Thiên Tài Chiến Thuật" },
        desc: {
          en: "When Child Emperor lands a Critical hit, grants 1 energy point and inflicts [Stun] for 1 turn (triggers once per round).",
          vi: "Khi bạo kích, hồi ngay 1 điểm năng lượng và gây [Choáng] trong 1 lượt (1 lần mỗi hiệp)."
        }
      },
      coreSkill: {
        name: { en: "Genius Technology Core (CE Core)", vi: "Lõi Công Nghệ Thiên Tài (CE Core)" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng"
        },
        basicEffect: {
          en: "Rounds 1-3: Whenever an ally lands a Critical Hit, gain 1 Energy (up to 4 times per round).",
          vi: "Hiệp 1-3: Mỗi khi đồng minh Bạo Kích, nhận 1 Năng lượng (tối đa 4 lần mỗi hiệp)."
        },
        advancedEffect: {
          en: "In Round 1, increases all allies Direct and Skill Damage by 30% and grants [Berserk].",
          vi: "Ở hiệp 1, tăng 30% Sát thương Trực tiếp và Tuyệt kỹ cho toàn đội, đồng thời kích hoạt [Cuồng Bạo]."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Critical Rate of all allies by 20% in Round 1.",
          vi: "Tăng 20% Tỉ lệ Bạo Kích cho toàn đội trong Hiệp 1."
        },
        stage2: {
          en: "Stun effect can no longer be resisted.",
          vi: "Hiệu ứng Choáng không thể bị kháng cự."
        }
      }
    },
    recommendedGears: ["Knight", "Monk", "Casual"],
    synergies: {
      en: "The classic Round-1 critical speed burst engine for PvE and early PvP.",
      vi: "Động cơ dồn sát thương bạo kích hiệp 1 kinh điển cho PvE và tân thủ PvP."
    },
    counters: {
      en: "Anti-crit teams, Tenacity shield stall, and unyielding tank comps.",
      vi: "Đội hình giảm bạo kích, khiên dầy và câu giờ bất khuất."
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

  // ==========================================
  // SR & R HEROES (EARLY GAME & F2P STARTERS)
  // ==========================================
  {
    id: "sr_beast_king",
    name: { en: "Beast King (Pursuit King)", vi: "Vua Thú (Vua Truy Kích)" },
    title: { en: "House of Evolution Alpha Predator", vi: "Kẻ Săn Mồi Đầu Đàn Nhà Tiến Hóa" },
    rarity: "SR",
    faction: "Monster",
    class: "Grappler",
    tier: "S",
    avatar: "avatars/sr_beast_king.webp",
    stats: { atk: 14500, hp: 96000, def: 7400, spd: 118 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Lion Slash", vi: "Trảo Sư Tử" },
        desc: {
          en: "Deals 130% ATK damage to single enemy.",
          vi: "Gây 130% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Lion Slash: Meteor Barrage", vi: "Trảo Sư Tử: Thiên Thạch Liên Hoàn" },
        desc: {
          en: "Attacks target row dealing 240% ATK damage and applies [Injury].",
          vi: "Gây 240% Công lên 1 hàng địch và gây [Tổn Thương]."
        }
      },
      ultraUltimate: {
        name: { en: "Lion King Rampage (Keepsake)", vi: "Sư Vương Cuồng Nộ (Thần Binh)" },
        desc: {
          en: "Deals 340% ATK to row. Increases pursuit attack damage by 50%.",
          vi: "Gây 340% Công lên hàng. Tăng 50% uy lực cho các đòn đánh truy kích."
        }
      },
      passive: {
        name: { en: "Predator Pursuit", vi: "Kẻ Săn Mồi Truy Kích" },
        desc: {
          en: "Whenever an enemy with [Injury] or [Internal Injury] is attacked by an ally, Beast King immediately launches a free follow-up pursuit attack dealing 100% ATK damage (up to 5 times per round).",
          vi: "Mỗi khi kẻ địch đang bị [Tổn Thương] hoặc [Nội Thương] bị đồng đội tấn công, Vua Thú lập tức bồi thêm đòn truy kích miễn phí 100% Công (tối đa 5 lần mỗi hiệp)."
        }
      },
      awakening: {
        stage1: {
          en: "Increases pursuit attack damage from 100% to 140% ATK.",
          vi: "Tăng sát thương truy kích từ 100% lên 140% Công."
        },
        stage2: {
          en: "Pursuit attacks can critically strike and ignore 30% DEF.",
          vi: "Đòn truy kích có thể gây Bạo Kích và xuyên 30% Giáp."
        }
      }
    },
    recommendedGears: ["Prisoner", "Knight", "Swordsman"],
    synergies: {
      en: "The #1 F2P damage dealer for Club Boss, PvE Trials, and Early/Mid game paired with Golden Ball, Amai Mask, or Doctor Genus.",
      vi: "Tướng gây sát thương F2P số 1 để đánh Boss Bang Hội, Vượt Ải và đầu/giữa game đi cùng Bi Vàng, Mặt Nạ Mật hoặc Doctor Genus."
    },
    counters: {
      en: "Tenacity shields and debuff immunity.",
      vi: "Lớp khiên Kiên Cường và miễn nhiễm hiệu ứng Tổn Thương."
    }
  },
  {
    id: "sr_goldenball",
    name: { en: "Golden Ball (AoE Shatter)", vi: "Bi Vàng (Vua Vỡ Giáp)" },
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
    id: "amai_mask",
    name: { en: "Amai Mask (Single Target God)", vi: "Mặt Nạ Mật (Vua Sát Thương Đơn)" },
    title: { en: "Handsomely Masked Sweet Mask", vi: "Mặt Nạ Đẹp Trai Ngọt Ngào" },
    rarity: "SR",
    faction: "Hero",
    class: "Grappler",
    tier: "A",
    avatar: "avatars/amai_mask.webp",
    stats: { atk: 13500, hp: 95000, def: 7200, spd: 119 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Face Punch", vi: "Đấm Thẳng Mặt" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Extinction Execution", vi: "Tuyệt Diệt Hành Quyết" },
        desc: {
          en: "Attacks backrow single target 2 to 5 times randomly, dealing 120% ATK damage per hit with high crit rate.",
          vi: "Tấn công mục tiêu đơn hàng sau từ 2 đến 5 lần ngẫu nhiên, mỗi đòn gây 120% Công với tỉ lệ bạo kích cao."
        }
      },
      ultraUltimate: {
        name: { en: "Super Execution Chop (Keepsake)", vi: "Hành Quyết Tối Thượng (Thần Binh)" },
        desc: {
          en: "Guarantees 5 hits dealing 150% ATK per strike (total 750% ATK). Inflicts [Injury].",
          vi: "Chắc chắn đánh đủ 5 hit, mỗi hit 150% Công (tổng 750% Công). Gây [Tổn Thương]."
        }
      },
      passive: {
        name: { en: "Aesthetic Justice", vi: "Công Lý Hoàn Mỹ" },
        desc: {
          en: "Deals 30% bonus damage to Monster faction enemies.",
          vi: "Gây thêm 30% sát thương lên kẻ địch thuộc phe Quái Nhân."
        }
      },
      awakening: {
        stage1: {
          en: "Killing an enemy resets Amai Mask's rage bar to 100%.",
          vi: "Hạ gục đối thủ lập tức đầy 100% thanh nộ."
        },
        stage2: {
          en: "Attacks ignore 40% of target DEF.",
          vi: "Đòn đánh bỏ qua 40% Giáp của mục tiêu."
        }
      }
    },
    recommendedGears: ["Prisoner", "Knight", "Swordsman"],
    synergies: {
      en: "F2P backrow sniper god for Club Boss and Monster X-City trials.",
      vi: "Thần bắn tỉa hàng sau chuẩn F2P cho Boss Bang Hội và Thử thách Quái Nhân."
    },
    counters: {
      en: "Heavy unyielding and damage sharing tanks.",
      vi: "Bị chặn bởi tướng chia sẻ sát thương và bất khuất."
    }
  },
  {
    id: "sr_doctor_genus",
    name: { en: "Doctor Genus (Clone Core)", vi: "Tiến Sĩ Genus (Lõi Phân Thân F2P)" },
    title: { en: "House of Evolution Founder", vi: "Người Sáng Lập Nhà Tiến Hóa" },
    rarity: "SR",
    faction: "Monster",
    class: "HiTech",
    tier: "A",
    avatar: "avatars/sr_doctor_genus.webp",
    stats: { atk: 12200, hp: 105000, def: 7800, spd: 110 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Test Tube Throw", vi: "Ném Ống Nghiệm" },
        desc: {
          en: "Deals 110% ATK damage to single enemy.",
          vi: "Gây 110% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Genetic Cloning", vi: "Nhân Bản Vô Tính" },
        desc: {
          en: "Summons 1 Clone with 60% stats in frontline and heals entire team for 15% Max HP.",
          vi: "Triệu hồi 1 Phân thân sở hữu 60% chỉ số ở hàng trước và hồi 15% Máu tối đa cho toàn đội."
        }
      },
      ultraUltimate: {
        name: { en: "Evolution Overdrive (Keepsake)", vi: "Tiến Hóa Bùng Nổ (Thần Binh)" },
        desc: {
          en: "Summons 2 Clones and grants all allies [Berserk] (+30% ATK).",
          vi: "Triệu hồi 2 Phân thân và cấp hiệu ứng [Cuồng Bạo] (+30% Công) cho toàn phe ta."
        }
      },
      passive: {
        name: { en: "Genetic Surge", vi: "Kích Hoạt Gen Di Truyền" },
        desc: {
          en: "Whenever an ally is healed, increases their ATK by 20% for 1 turn (up to 3 times per round).",
          vi: "Mỗi khi đồng minh được hồi máu, tăng 20% Công cho mục tiêu trong 1 hiệp (tối đa 3 lần/hiệp)."
        }
      },
      coreSkill: {
        name: { en: "Genetic Cloning Core", vi: "Lõi Nhân Bản Gen (Genus Core)" },
        requirement: {
          en: "Requires: 1 Grappler, 1 Duelist, 1 Hi-Tech, 1 Esper",
          vi: "Yêu cầu: 1 Cách Đấu, 1 Vũ Trang, 1 Khoa Học, 1 Siêu Năng"
        },
        basicEffect: {
          en: "Rounds 1-3: Gain 2 Energy per round. When a clone or summoned unit appears, gain 2 bonus Energy.",
          vi: "Hiệp 1-3: Nhận 2 Năng lượng mỗi hiệp. Khi phân thân hoặc đơn vị triệu hồi xuất hiện, nhận thêm 2 Năng lượng."
        },
        advancedEffect: {
          en: "At start of battle, summons 1 Clone to absorb frontline damage and increases team ATK by 20%.",
          vi: "Đầu trận tự triệu hồi 1 Phân thân đỡ đòn hàng trước và tăng 20% Công cho toàn đội."
        }
      },
      awakening: {
        stage1: {
          en: "Increases passive ATK buff from 20% to 30%.",
          vi: "Tăng bùa Công từ hồi máu từ 20% lên 30%."
        },
        stage2: {
          en: "Clones explode on defeat, dealing 150% ATK damage to enemies.",
          vi: "Phân thân phát nổ khi gục ngã, gây 150% Công lên đối thủ."
        }
      }
    },
    recommendedGears: ["Suit", "Casual", "Monk"],
    synergies: {
      en: "The best early-game F2P core engine paired with Beast King and Smile Man for infinite energy and ATK buff stacking.",
      vi: "Động cơ Lõi F2P đầu game tốt nhất khi đi cùng Vua Thú và Người Mặt Cười để hồi năng lượng và cộng dồn tăng Công liên tục."
    },
    counters: {
      en: "AoE burst wiping clones immediately.",
      vi: "Sát thương diện rộng quét sạch phân thân."
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
    id: "sr_sky_king",
    name: { en: "Sky King (Damage Amp Aura)", vi: "Vua Bầu Trời (Hào Quang Tăng Sát Thương)" },
    title: { en: "Ruler of the Skies", vi: "Thống Trị Bầu Trời" },
    rarity: "SR",
    faction: "Monster",
    class: "Esper",
    tier: "A",
    avatar: "avatars/sr_sky_king.webp",
    stats: { atk: 13100, hp: 92000, def: 7100, spd: 116 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Feather Shot", vi: "Lông Vũ Bắn Phá" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Sky King Hurricane", vi: "Cuồng Phong Bầu Trời" },
        desc: {
          en: "Deals 220% ATK to single row and inflicts [Stun] on 1 random target.",
          vi: "Gây 220% Công lên 1 hàng và gây [Choáng] 1 mục tiêu ngẫu nhiên."
        }
      },
      ultraUltimate: {
        name: { en: "Celestial Feather Tempest (Keepsake)", vi: "Thiên Vũ Bão Tố (Thần Binh)" },
        desc: {
          en: "Deals 320% ATK to row. 100% chance to stun 2 enemies.",
          vi: "Gây 320% Công lên hàng. 100% làm choáng 2 kẻ địch."
        }
      },
      passive: {
        name: { en: "Sky Sovereign Domain", vi: "Uy Áp Bầu Trời (Hào Quang)" },
        desc: {
          en: "Increases entire team Extra Damage and DoT by 20% (passive aura, stays active even after Sky King dies).",
          vi: "Tăng 20% Sát thương Phụ và sát thương DoT cho toàn đội (hào quang nội tại, vẫn có hiệu lực ngay cả khi Vua Bầu Trời tử trận)."
        }
      },
      awakening: {
        stage1: {
          en: "Increases team Extra Damage aura from 20% to 30%.",
          vi: "Tăng hào quang sát thương phụ từ 20% lên 30%."
        },
        stage2: {
          en: "When an enemy is stunned, damages them for 100% ATK.",
          vi: "Khi đối thủ bị choáng, gây thêm 100% Công."
        }
      }
    },
    recommendedGears: ["Knight", "Prisoner", "Casual"],
    synergies: {
      en: "Top tier damage amplifier aura hero for Beast King, Amai Mask, and DoT teams.",
      vi: "Tướng buff hào quang sát thương cực mạnh cho Vua Thú, Mặt Nạ Mật và đội hình DoT."
    },
    counters: {
      en: "High burst single target assassinations.",
      vi: "Sát thủ dồn sát thương nhanh."
    }
  },
  {
    id: "sr_konbu_infinity",
    name: { en: "Konbu Infinity", vi: "Tảo Bẹ Vô Tận (Ăn Mòn F2P)" },
    title: { en: "Kelp Monster", vi: "Quái Vật Rong Biển" },
    rarity: "SR",
    faction: "Monster",
    class: "Esper",
    tier: "A",
    avatar: "avatars/sr_konbu_infinity.webp",
    stats: { atk: 12900, hp: 94000, def: 7300, spd: 117 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Tentacle Whip", vi: "Xúc Tu Tảo Biển Quất" },
        desc: {
          en: "Deals 120% ATK damage to single enemy.",
          vi: "Gây 120% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Kelp Tangle Tempest", vi: "Bão Tảo Biển Trói Buộc" },
        desc: {
          en: "Deals 200% ATK damage to all 6 enemies and has 100% chance to inflict [Corrode] on 2 enemies for 2 turns.",
          vi: "Gây 200% Công lên toàn bộ 6 kẻ địch và 100% gieo [Ăn Mòn] lên 2 mục tiêu trong 2 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Infinite Kelp Ocean (Keepsake)", vi: "Đại Dương Tảo Bẹ Vô Tận (Thần Binh)" },
        desc: {
          en: "Deals 300% ATK to all enemies. Inflicts [Corrode] on 4 enemies.",
          vi: "Gây 300% Công toàn thể. Gieo [Ăn Mòn] lên 4 mục tiêu."
        }
      },
      passive: {
        name: { en: "Kelp Photosynthesis", vi: "Quang Hợp Tảo Biển" },
        desc: {
          en: "Whenever an enemy takes Corrode damage, heals self for 15% Max HP.",
          vi: "Mỗi khi địch nhận sát thương Ăn Mòn, tự hồi 15% Máu tối đa."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Corrode damage by 30%.",
          vi: "Tăng 30% sát thương Ăn Mòn."
        },
        stage2: {
          en: "Corrode can spread to adjacent enemies when targets act.",
          vi: "Ăn Mòn có thể lây lan sang kẻ địch liền kề."
        }
      }
    },
    recommendedGears: ["Prisoner", "Casual", "Suit"],
    synergies: {
      en: "Crucial early-game F2P Corrode enabler with Vaccine Man and Deep Sea King core.",
      vi: "Tướng gieo Ăn Mòn F2P cốt lõi đầu game kết hợp Vaccine Man và Lõi Vua Biển Sâu."
    },
    counters: {
      en: "Debuff cleanse and high speed AoE wipes.",
      vi: "Giải bùa xấu và quét bàn cờ nhanh."
    }
  },
  {
    id: "r_mumen_rider",
    name: { en: "Mumen Rider (Berserk Buffer #1)", vi: "Hiệp Sĩ Không Bằng Lái (Vua Tăng Tốc F2P)" },
    title: { en: "Cyclist for Justice", vi: "Chiến Binh Xe Đạp Công Lý" },
    rarity: "R",
    faction: "Hero",
    class: "Grappler",
    tier: "A",
    avatar: "avatars/r_mumen_rider.webp",
    stats: { atk: 10500, hp: 85000, def: 6500, spd: 135 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Justice Punch", vi: "Cú Đấm Công Lý" },
        desc: {
          en: "Deals 100% ATK damage to single enemy.",
          vi: "Gây 100% Công lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Justice Roar", vi: "Tiếng Gầm Công Lý (Tăng Tốc & Cuồng Bạo)" },
        desc: {
          en: "Grants 1 target ally [Berserk] (+30% ATK) and increases their Speed by 20% for 1 turn (costs 0 energy with proper passive).",
          vi: "Cấp trạng thái [Cuồng Bạo] (+30% Công) và tăng 20% Tốc độ cho 1 đồng minh chỉ định trong 1 hiệp."
        }
      },
      ultraUltimate: {
        name: { en: "Supreme Justice Charge (Keepsake)", vi: "Xung Kích Công Lý Tối Thượng (Thần Binh)" },
        desc: {
          en: "Grants [Berserk] (+40% ATK) and +30% Speed to target ally and self.",
          vi: "Cấp [Cuồng Bạo] (+40% Công) và +30% Tốc độ cho đồng minh chỉ định và bản thân."
        }
      },
      passive: {
        name: { en: "Unyielding Justice", vi: "Ý Chí Công Lý Bất Khuất" },
        desc: {
          en: "Survives fatal hit with [Unyielding] for 1 round. Grants entire team 10 Speed at start of battle.",
          vi: "Chống chịu đòn chí tử với [Bất Khuất] trong 1 hiệp. Tăng 10 Tốc độ cho toàn đội đầu trận."
        }
      },
      awakening: {
        stage1: {
          en: "Increases Berserk ATK buff from 30% to 45%.",
          vi: "Tăng hiệu ứng Cuồng Bạo từ 30% lên 45% Công."
        },
        stage2: {
          en: "Ultimate skill costs 0 energy in Round 1.",
          vi: "Tuyệt kỹ tiêu hao 0 điểm Năng lượng ở Hiệp 1."
        }
      }
    },
    recommendedGears: ["Lightning", "Suit", "Casual"],
    synergies: {
      en: "The #1 budget support in Day-1 to Day-30. Boosts Amai Mask or Golden Ball speed to act first and wipe key threats.",
      vi: "Tướng hỗ trợ số 1 từ Ngày 1 đến Ngày 30. Giúp Mặt Nạ Mật hoặc Bi Vàng tăng tốc ra đòn trước để dọn dẹp đối thủ."
    },
    counters: {
      en: "Direct speed outspeeders and energy draining teams.",
      vi: "Tướng out tốc độ và hút năng lượng."
    }
  }
];

// Complete Comprehensive Meta Team Strategy Blueprint (14 Archetypes)
const completeTeamGuides = [
  // ==========================================
  // 1. ENDGAME / SSS META ARCHETYPES
  // ==========================================
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
    id: "meta_tatsumaki_speed",
    name: {
      en: "UR+ Tatsumaki & Sonic Extreme Speed Burst",
      vi: "Đội Hình Tatsumaki & Sonic Tốc Độ Quang Tốc"
    },
    tier: "SSS",
    coreHero: "Bomb Core / Flashy Flash",
    formation: {
      frontRow: ["ssr_plus_silverfang", "ur_fubuki", "ssr_superalloy"],
      backRow: ["ur_sonic", "ur_flashy_flash", "ur_tatsumaki"]
    },
    speedOrder: [
      { order: 1, hero: "ur_flashy_flash", note: "Speed aura + Light speed thrust" },
      { order: 2, hero: "ur_sonic", note: "First priority assassinate enemy carry" },
      { order: 3, hero: "ur_tatsumaki", note: "Planetary meteor slam full board clear" },
      { order: 4, hero: "ur_fubuki", note: "Tenacity shield & ally energy regen" },
      { order: 5, hero: "ssr_plus_silverfang", note: "Frontline toughness & block" },
      { order: 6, hero: "ssr_superalloy", note: "Heavy armor damage share" }
    ],
    strategy: {
      en: "Hyper-speed turn-1 initiative build. Flashy Flash and Sonic ensure your team moves first, eliminating the enemy primary carry before they take a single turn.",
      vi: "Đội hình cướp lượt đầu cực đại. Flash Quang Tốc và Sonic đảm bảo đội bạn luôn xuất chiêu trước, dứt điểm carry chủ lực đối phương trước khi chúng kịp hành động."
    },
    recommendedGears: ["Lightning", "Knight", "Prisoner"]
  },
  {
    id: "meta_stall_reflect",
    name: {
      en: "Extreme Stall & Reflect Bleed Defense",
      vi: "Đội Hình Siêu Câu Giờ & Phản Sát Thương Tu La"
    },
    tier: "SSS",
    coreHero: "UR+ Zombieman Core",
    formation: {
      frontRow: ["ssr_carnage", "urplus_rover", "ssr_plus_silverfang"],
      backRow: ["urplus_zombieman", "ur_king", "urplus_blacksperm"]
    },
    speedOrder: [
      { order: 1, hero: "ur_king", note: "Seals enemy energy bar & intimidates" },
      { order: 2, hero: "urplus_zombieman", note: "Specialized unyielding & team heal" },
      { order: 3, hero: "urplus_rover", note: "AoE Tenacity barrier & damage soak" },
      { order: 4, hero: "ssr_carnage", note: "Asura reflect 60% incoming damage" },
      { order: 5, hero: "urplus_blacksperm", note: "Clone swarm pursuit & survival" },
      { order: 6, hero: "ssr_plus_silverfang", note: "Unyielding wall & block counter" }
    ],
    strategy: {
      en: "Impenetrable defense team. Carnage Kabuto reflects 60% of all enemy damage while King locks their ultimate energy, forcing opponents to slowly destroy themselves.",
      vi: "Đội hình phòng thủ bất khả xâm phạm. Bọ Hung phản lại 60% sát thương nhận vào trong khi King khóa toàn bộ năng lượng của địch, buộc đối phương tự diệt."
    },
    recommendedGears: ["Suit", "Battle", "Casual"]
  },

  // ==========================================
  // 2. MID-GAME TRANSITION ARCHETYPES (CORE 4-10)
  // ==========================================
  {
    id: "meta_monster_corrode",
    name: {
      en: "Gyoro Corrode & Splash Monster Engine",
      vi: "Đội Hình Ăn Mòn & Sát Thương Lan Quái Nhân"
    },
    tier: "SS",
    coreHero: "Gyoro-Gyoro SSR Core",
    formation: {
      frontRow: ["ssr_carnage", "ssr_garou", "ssr_superalloy"],
      backRow: ["gyoro_core", "ssr_plus_mosquito", "ssr_plus_geryu"]
    },
    speedOrder: [
      { order: 1, hero: "ssr_plus_geryu", note: "Gravity lock & speed control" },
      { order: 2, hero: "gyoro_core", note: "Max HP buff & row compression" },
      { order: 3, hero: "ssr_plus_mosquito", note: "Blood storm AoE Corrode DoT" },
      { order: 4, hero: "ssr_garou", note: "Internal injury counter & clean-up" },
      { order: 5, hero: "ssr_carnage", note: "Reflect frontline sponge" },
      { order: 6, hero: "ssr_superalloy", note: "Bodyguard damage share" }
    ],
    strategy: {
      en: "The staple mid-game monster composition. Mosquito Girl and Geryuganshoop stack Corrode DoT, amplified by Gyoro's +30% Max HP bonus damage scaling.",
      vi: "Đội hình Quái Nhân chuẩn mực giai đoạn giữa game. Nữ Chúa Muỗi và Geryu gieo rắc Ăn Mòn, được khuếch đại bởi lượng Máu khổng lồ từ Lõi Gyoro."
    },
    recommendedGears: ["Prisoner", "Suit", "Casual"]
  },
  {
    id: "meta_zombieman_endurance",
    name: {
      en: "Zombieman Tenacity & Injury Counter",
      vi: "Đội Hình Zombieman Kiên Cường & Phản Đòn Nội Thương"
    },
    tier: "SS",
    coreHero: "Zombieman SSR Core",
    formation: {
      frontRow: ["ssr_plus_silverfang", "ssr_superalloy", "ssr_garou"],
      backRow: ["zombieman_core", "amai_mask", "sr_goldenball"]
    },
    speedOrder: [
      { order: 1, hero: "sr_goldenball", note: "AoE Shatter debuff opener" },
      { order: 2, hero: "amai_mask", note: "Single-target backrow assassination" },
      { order: 3, hero: "ssr_garou", note: "Internal injury pursuit & counter" },
      { order: 4, hero: "zombieman_core", note: "Team sustain heal & rage recovery" },
      { order: 5, hero: "ssr_plus_silverfang", note: "Tenacity shield & unyielding" },
      { order: 6, hero: "ssr_superalloy", note: "Damage share protection" }
    ],
    strategy: {
      en: "Endurance attrition comp. Silverfang and Superalloy provide immense survivability, while Garou and Amai Mask chip down high-value targets round after round.",
      vi: "Đội hình công thủ toàn diện. Bang và Darkshine bảo vệ đồng đội sống sót, trong khi Garou và Mặt Nạ Mật tỉa từng mục tiêu chủ lực của đối phương."
    },
    recommendedGears: ["Suit", "Casual", "Prisoner"]
  },
  {
    id: "meta_duelist_pursuit",
    name: {
      en: "Duelist Pursuit Storm & Multi-Strike",
      vi: "Đội Hình Bão Vũ Trang & Truy Kích Liên Hoàn"
    },
    tier: "SS",
    coreHero: "Child Emperor Core",
    formation: {
      frontRow: ["ssr_plus_silverfang", "sr_armoredgorilla", "ssr_superalloy"],
      backRow: ["ssr_plus_atomic", "sr_goldenball", "sr_beast_king"]
    },
    speedOrder: [
      { order: 1, hero: "sr_goldenball", note: "AoE Shatter & Injury application" },
      { order: 2, hero: "ssr_plus_atomic", note: "Atomic Slash AoE & Duelist pursuit trigger" },
      { order: 3, hero: "sr_beast_king", note: "5x Free follow-up pursuit claws" },
      { order: 4, hero: "ssr_plus_silverfang", note: "Frontline toughness & stun" },
      { order: 5, hero: "sr_armoredgorilla", note: "Tenacity shield & defensive soak" },
      { order: 6, hero: "ssr_superalloy", note: "Damage share bodyguard" }
    ],
    strategy: {
      en: "Devastating multi-action pursuit build. Golden Ball triggers Beast King's 5 consecutive free strikes while Atomic Samurai launches follow-up slashes on every attack.",
      vi: "Đội hình truy kích liên hoàn cực gắt. Bi Vàng mở Tổn Thương kích hoạt 5 đòn cào miễn phí của Vua Thú, trong khi Atomic Samurai liên tục chém ké."
    },
    recommendedGears: ["Knight", "Prisoner", "Swordsman"]
  },

  // ==========================================
  // 3. EARLY GAME & F2P STARTER ARCHETYPES (DAY 1 - 30)
  // ==========================================
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
  },
  {
    id: "meta_f2p_starter_burst",
    name: {
      en: "F2P Day-1 Starter Speed Burst",
      vi: "Đội Hình Tân Thủ Ngày 1 Dồn Tốc Độ Sốc Sát Thương"
    },
    tier: "A",
    coreHero: "Genos Starter Core",
    formation: {
      frontRow: ["r_mumen_rider", "sr_armoredgorilla", "sr_smileman"],
      backRow: ["sr_goldenball", "amai_mask", "sr_beast_king"]
    },
    speedOrder: [
      { order: 1, hero: "r_mumen_rider", note: "Justice Roar buffs Amai Mask (+30% ATK & Speed)" },
      { order: 2, hero: "amai_mask", note: "Executes enemy backrow carry immediately" },
      { order: 3, hero: "sr_goldenball", note: "AoE Shatter debuff on remaining units" },
      { order: 4, hero: "sr_beast_king", note: "Follow-up pursuit claws on injured targets" },
      { order: 5, hero: "sr_smileman", note: "Frontline sustain & heal on block" },
      { order: 6, hero: "sr_armoredgorilla", note: "Tenacity shield & stun" }
    ],
    strategy: {
      en: "The ultimate 100% free Day-1 squad. Mumen Rider accelerates Amai Mask to act before any enemy moves, securing an instant 5-hit elimination on the opponent's strongest backrow unit.",
      vi: "Đội hình tân thủ miễn phí 100% mạnh nhất từ Ngày 1. Mumen Rider buff Tốc & Cuồng Bạo cho Mặt Nạ Mật bắt chết chủ lực hàng sau đối thủ ngay lập tức."
    },
    recommendedGears: ["Lightning", "Prisoner", "Suit"]
  },
  {
    id: "meta_f2p_infinite_energy",
    name: {
      en: "Doctor Genus Clone & Infinite Energy Sustain",
      vi: "Đội Hình Tiến Sĩ Genus Phân Thân & Vô Tận Năng Lượng"
    },
    tier: "A",
    coreHero: "Doctor Genus Core",
    formation: {
      frontRow: ["sr_doctor_genus", "sr_smileman", "sr_armoredgorilla"],
      backRow: ["sr_beast_king", "amai_mask", "sr_goldenball"]
    },
    speedOrder: [
      { order: 1, hero: "sr_goldenball", note: "AoE Shatter & trigger core energy" },
      { order: 2, hero: "amai_mask", note: "Inflicts Injury on key target" },
      { order: 3, hero: "sr_beast_king", note: "5x Pursuit claw attacks" },
      { order: 4, hero: "sr_doctor_genus", note: "Summons clone to absorb hits & grant +2 Energy" },
      { order: 5, hero: "sr_smileman", note: "Team heal & trigger Genus +20% ATK passive" },
      { order: 6, hero: "sr_armoredgorilla", note: "Frontline tank & stun" }
    ],
    strategy: {
      en: "F2P infinite energy engine. Every summoned clone generates +2 Energy, while Smile Man's heals trigger Doctor Genus's +20% ATK teamwide steroid.",
      vi: "Động cơ vô hạn năng lượng F2P. Mỗi phân thân tạo ra +2 nộ, đồng thời các đòn hồi máu của Người Mặt Cười kích hoạt bùa tăng 20% Công toàn đội của Genus."
    },
    recommendedGears: ["Suit", "Prisoner", "Casual"]
  },
  {
    id: "meta_f2p_corrode_starter",
    name: {
      en: "Deep Sea King Corrosion Starter",
      vi: "Đội Hình Ăn Mòn DoT Khởi Đầu (Vua Biển Sâu)"
    },
    tier: "A",
    coreHero: "Deep Sea King Core",
    formation: {
      frontRow: ["sr_armoredgorilla", "sr_smileman", "ssr_superalloy"],
      backRow: ["sr_konbu_infinity", "ssr_plus_mosquito", "sr_sky_king"]
    },
    speedOrder: [
      { order: 1, hero: "sr_konbu_infinity", note: "AoE Corrode on enemy front row" },
      { order: 2, hero: "ssr_plus_mosquito", note: "Blood storm Corrode DoT stack" },
      { order: 3, hero: "sr_sky_king", note: "+20% Extra damage & DoT aura" },
      { order: 4, hero: "ssr_superalloy", note: "Bodyguard damage share" },
      { order: 5, hero: "sr_smileman", note: "Block heal & sustain" },
      { order: 6, hero: "sr_armoredgorilla", note: "Frontline shield tank" }
    ],
    strategy: {
      en: "Classic early-game DoT burn team. Konbu Infinity and Mosquito Girl inflict massive corrosion, amplified by Sky King's +20% extra damage aura.",
      vi: "Đội hình Ăn Mòn đốt máu kinh điển đầu game. Tảo Bẹ và Nữ Chúa Muỗi gieo rắc ăn mòn liên tục, được khuếch đại thêm 20% sát thương từ hào quang Vua Bầu Trời."
    },
    recommendedGears: ["Prisoner", "Casual", "Suit"]
  },

  // ==========================================
  // 4. SPECIALIZED MODE ARCHETYPES (BOSS & TRIALS)
  // ==========================================
  {
    id: "meta_club_boss_single",
    name: {
      en: "Club Boss & Single-Target Titan Killer",
      vi: "Đội Hình Săn Boss Bang Hội & Dồn Sát Thương Đơn Cực Đại"
    },
    tier: "SSS",
    coreHero: "Bomb Core / Child Emperor Core",
    formation: {
      frontRow: ["ssr_plus_silverfang", "ssr_superalloy", "ssr_garou"],
      backRow: ["amai_mask", "sr_beast_king", "ur_boros"]
    },
    speedOrder: [
      { order: 1, hero: "amai_mask", note: "Inflicts Injury & lands 5-hit strike" },
      { order: 2, hero: "sr_beast_king", note: "Launches 5x Pursuit attacks each round" },
      { order: 3, hero: "ur_boros", note: "900% ATK Collapsing Star single nuke" },
      { order: 4, hero: "ssr_garou", note: "Internal Injury & counter strike" },
      { order: 5, hero: "ssr_plus_silverfang", note: "Team Tenacity barrier & defense" },
      { order: 6, hero: "ssr_superalloy", note: "Damage share protection" }
    ],
    strategy: {
      en: "The highest single-target DPS combination in the game for Club Boss, Boros World Boss, and Monster X-City. Beast King dishes out 5 free pursuit strikes every round.",
      vi: "Đội hình dồn sát thương đơn mục tiêu cao nhất game cho Boss Bang Hội và Boss Thế Giới. Vua Thú tung 5 đòn cào miễn phí mỗi hiệp khi đi cùng Amai Mask."
    },
    recommendedGears: ["Prisoner", "Knight", "Swordsman"]
  },
  {
    id: "meta_monster_xcity",
    name: {
      en: "Monster X-City & PvE Trial Clearer",
      vi: "Đội Hình Vượt Ải Viễn Chinh & Phó Bản Thử Thách"
    },
    tier: "SS",
    coreHero: "Gyoro-Gyoro Core",
    formation: {
      frontRow: ["ssr_carnage", "urplus_rover", "ssr_superalloy"],
      backRow: ["ur_tatsumaki", "child_emperor_core", "ur_saitama"]
    },
    speedOrder: [
      { order: 1, hero: "child_emperor_core", note: "Row Shatter & Round 1 Berserk buff" },
      { order: 2, hero: "ur_saitama", note: "One-punch column clear & DEF break" },
      { order: 3, hero: "ur_tatsumaki", note: "Planetary AoE meteor field wipe" },
      { order: 4, hero: "ssr_carnage", note: "Asura reflect frontline" },
      { order: 5, hero: "urplus_rover", note: "Tenacity team shield" },
      { order: 6, hero: "ssr_superalloy", note: "Bodyguard soak tank" }
    ],
    strategy: {
      en: "Ultra-fast automated 3-star clearance team for Monster X-City, Conqueror's Challenge, and Hero X Monster trials.",
      vi: "Đội hình dọn ải 3 sao siêu tốc tự động cho Viễn Chinh Quái Nhân, Khiêu Chiến Nhà Vô Địch và Thử Thách Anh Hùng."
    },
    recommendedGears: ["Knight", "Casual", "Suit"]
  }
];

// Write to files
const charPath = path.resolve('src/data/defaultCharacters.js');
const teamPath = path.resolve('src/data/defaultTeamGuides.js');

const charCode = `export const defaultCharacters = ${JSON.stringify(completeCharacters, null, 2)};\n`;
const teamCode = `export const defaultTeamGuides = ${JSON.stringify(completeTeamGuides, null, 2)};\n`;

fs.writeFileSync(charPath, charCode);
fs.writeFileSync(teamPath, teamCode);

console.log(`✅ Successfully generated complete database:`);
console.log(`- ${completeCharacters.length} Total Heroes in defaultCharacters.js`);
console.log(`- ${completeTeamGuides.length} Meta Strategy Builds in defaultTeamGuides.js`);
