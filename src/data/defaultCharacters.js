export const defaultCharacters = [
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
    id: "amai_mask",
    name: { en: "Amai Mask (Budget God)", vi: "Mặt Nạ Mật (Vua Sát Thương Đơn)" },
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
    id: "urplus_blacksperm",
    name: { en: "UR+ Black Sperm", vi: "Tinh Trùng Đen UR+" },
    title: { en: "Combat Arts Grandmaster / Endless Swarm", vi: "Đại Tông Sư Giác Đấu / Biển Phân Thân" },
    rarity: "UR+",
    faction: "Monster",
    class: "Grappler",
    tier: "SSS",
    avatar: "avatars/urplus_blacksperm.webp",
    stats: { atk: 22500, hp: 165000, def: 12000, spd: 132 },
    hasCore: false,
    skills: {
      normal: {
        name: { en: "Swarm Strike", vi: "Đòn Đánh Phân Thân" },
        desc: {
          en: "Deals 120% ATK (+10) damage to a single enemy.",
          vi: "Gây 120% ATK (+10) sát thương lên mục tiêu đơn."
        }
      },
      ultimate: {
        name: { en: "Swarm Divide Burst", vi: "Tuyệt Kỹ Phân Tách Trảm" },
        desc: {
          en: "Absorbs all active clones on field (+20% DMG per clone). Deals 2400% ATK Specialized Direct DMG divided across enemy row, ignores 45% Specialized Evasion & Non-Crit DMG Reduction, pierces Unyielding.",
          vi: "Hấp thụ toàn bộ phân thân trên sân (+20% ST mỗi phân thân). Gây 2400% ATK Sát Thương Trực Tiếp Chuyên Biệt chia đều cho hàng địch, bỏ qua 45% Né Chuyên Biệt và Miễn ST Không Chí Mạng, xuyên Bất Khuất."
        }
      },
      ultraUltimate: {
        name: { en: "Omnidirectional Swarm Devastation", vi: "Siêu Tuyệt Kỹ: Đại Tuyệt Diệt Phân Thân" },
        desc: {
          en: "Requires Keepsake. Grants +20% All DMG Amp to self and reduces enemy row All DMG Red by 20%. Absorbs all clones (+30% DMG per clone). Deals 3000% ATK Specialized Direct DMG, ignores 60% Specialized Evasion, pierces Unyielding. Grants [Black Sperm's Revenge] to self and highest ATK ally (deals 800% max enemy HP damage).",
          vi: "Cần Thần Binh. Tăng 20% Khuếch Đại Toàn ST cho bản thân và giảm 20% Giảm Toàn ST của hàng địch. Hấp thụ phân thân (+30% ST mỗi phân thân). Gây 3000% ATK Sát Thương Trực Tiếp Chuyên Biệt, bỏ qua 60% Né Chuyên Biệt, xuyên Bất Khuất. Bản thân và đồng đội có ATK cao nhất vĩnh viễn nhận [Báo Thù Của Tinh Trùng Đen] (gây 800% Máu tối đa của mục tiêu)."
        }
      },
      passive: {
        name: { en: "Undefeated Swarm Evolution", vi: "Nội Tại: Tiến Hóa Bất Bại" },
        desc: {
          en: "Starts combat with 80% Non-Crit DMG Reduction. In the first 9 rounds, when receiving fatal damage, enters [Undefeated] state absorbing all damage; on next turn heals to 100% HP up to 6 times.",
          vi: "Khi vào trận nhận 80% Miễn Sát Thương Không Chí Mạng. Trong 9 lượt đầu, khi sắp bị hạ, vào trạng thái [Bất Bại] hấp thụ toàn bộ sát thương; đến lượt kế tiếp hồi 100% HP tối đa 6 lần."
        }
      },
      awakening: {
        stage1: {
          en: "After any enemy acts, all active clones have 100% chance to pursue all enemies dealing 620% ATK Specialized Direct DMG. Splits 4 clones per hit taken up to 8 max.",
          vi: "Sau khi bất kỳ địch nào hành động, toàn bộ phân thân có 100% tỉ lệ truy kích toàn thể địch gây 620% ATK ST Trực Tiếp Chuyên Biệt. Sau mỗi lần trúng đòn phân tách ra 4 phân thân, tối đa 8 con."
        },
        stage2: {
          en: "Recovers +150 Energy Gauge per attack and permanently reduces all damage taken by 50%.",
          vi: "Hồi phục +150 Chiến Ý (Nộ) mỗi đòn tấn công và vĩnh viễn giảm 50% toàn bộ sát thương phải chịu."
        }
      }
    },
    recommendedGears: ["Knight", "Primal", "Suit"],
    synergies: {
      en: "Unbeatable meta carry with UR Gyoro Core and Zombieman UR+.",
      vi: "Carry tối thượng meta khi đi cùng Lõi Gyoro UR và Zombieman UR+."
    },
    counters: {
      en: "Requires extreme burst with Specialized Direct DMG or heal inversion.",
      vi: "Cần dồn sát thương Chuyên Biệt cực đại hoặc hiệu ứng đảo ngược hồi máu."
    }
  },
  {
    id: "urplus_zombieman",
    name: { en: "UR+ Zombieman", vi: "Zombieman UR+" },
    title: { en: "Immortal Vanguard / Supreme Resurrection", vi: "Tiên Phong Bất Tử / Phục Sinh Vô Tận" },
    rarity: "UR+",
    faction: "Hero",
    class: "Duelist",
    tier: "SSS",
    avatar: "avatars/urplus_zombieman.webp",
    stats: { atk: 18500, hp: 195000, def: 14500, spd: 125 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Desert Eagle Twin Burst", vi: "Song Súng Sa Mạc" },
        desc: {
          en: "Deals 140% ATK damage to a single enemy. 100% chance to inflict [Internal Injury].",
          vi: "Gây 140% Công lên mục tiêu đơn. 100% gây [Nội Thương]."
        }
      },
      ultimate: {
        name: { en: "Regenerative Gunblade Carnage", vi: "Xả Súng Bất Tử" },
        desc: {
          en: "Deals 500% ATK damage to enemy column and heals entire team by 25% of their Max HP.",
          vi: "Gây 500% Công lên hàng dọc đối phương và hồi phục 25% Máu tối đa cho toàn đội."
        }
      },
      ultraUltimate: {
        name: { en: "Immortal Arsenal Annihilation", vi: "Tuyệt Kỹ Tối Thượng: Kho Vũ Khí Vô Tận" },
        desc: {
          en: "Requires Keepsake. Deals 750% ATK damage to enemy column and grants 2-turn [Specialized Unyielding] to adjacent allies.",
          vi: "Cần Thần Binh. Gây 750% Công lên hàng dọc đối phương và ban [Bất Khuất Chuyên Biệt] 2 lượt cho đồng minh lân cận."
        }
      },
      passive: {
        name: { en: "Endless Cell Resurgence", vi: "Tế Bào Tái Sinh Bất Tận" },
        desc: {
          en: "Revives with 100% HP up to 6 times upon taking fatal damage. Each resurrection generates +1 Team Energy.",
          vi: "Hồi sinh với 100% Máu tối đa 6 lần khi chịu đòn chí tử. Mỗi lần hồi sinh tạo thêm +1 Năng Lượng cho toàn đội."
        }
      },
      awakening: {
        stage1: {
          en: "Grants entire team +35% Non-Crit DMG Free and +20% Reflect DMG.",
          vi: "Tăng cho toàn đội 35% Miễn ST Không Chí Mạng và 20% Phản Sát Thương."
        },
        stage2: {
          en: "Core Refinement Lv17: Team gains 4 round-1 energy and immunity to Energy Seal.",
          vi: "Tinh Luyện Lõi Lv17: Đội hình nhận 4 Năng lượng hiệp 1 và miễn nhiễm Khóa Nộ."
        }
      }
    },
    recommendedGears: ["Suit", "Battle", "Knight"],
    synergies: {
      en: "The undisputed defensive core anchor of the UR+ era.",
      vi: "Trụ cột Lõi phòng thủ số 1 không thể thay thế thời đại UR+."
    },
    counters: {
      en: "Specialized Direct DMG nukes that bypass Unyielding.",
      vi: "Đòn Sát Thương Chuyên Biệt xuyên thẳng qua Bất Khuất."
    }
  },
  {
    id: "ur_gyoro",
    name: { en: "UR Gyoro-Gyoro", vi: "Gyoro-Gyoro UR" },
    title: { en: "Monster Association Brain", vi: "Bộ Não Hiệp Hội Quái Nhân" },
    rarity: "UR",
    faction: "Monster",
    class: "Esper",
    tier: "SSS",
    avatar: "avatars/ur_gyoro.webp",
    stats: { atk: 20000, hp: 155000, def: 11000, spd: 130 },
    hasCore: true,
    skills: {
      normal: {
        name: { en: "Psychic Force Pulse", vi: "Sóng Xung Kích Siêu Năng" },
        desc: {
          en: "Deals 130% ATK damage and applies [Forcefield] to target.",
          vi: "Gây 130% Công và áp hiệu ứng [Trường Lực] lên mục tiêu."
        }
      },
      ultimate: {
        name: { en: "Meat Dome Crush", vi: "Khối Thịt Đè Nén" },
        desc: {
          en: "Deals 400% ATK damage to enemy row and boosts frontrow allies Max HP by 50%.",
          vi: "Gây 400% Công lên hàng ngang địch và tăng 50% Máu tối đa cho hàng trước."
        }
      },
      ultraUltimate: {
        name: { en: "Cosmic Meat Singularity", vi: "Siêu Tuyệt Kỹ: Hố Đen Thịt Thần Tốc" },
        desc: {
          en: "Deals 620% ATK damage to all enemies and applies 40% Specialized Corrode for 2 turns.",
          vi: "Gây 620% Công lên toàn bộ quân địch và gán 40% Ăn Mòn Chuyên Biệt trong 2 lượt."
        }
      },
      passive: {
        name: { en: "Tactical Supreme Command", vi: "Chỉ Huy Tác Chiến Tối Cao" },
        desc: {
          en: "Monster faction allies gain +35% All DMG Amplification and +30% Max HP.",
          vi: "Đồng minh phe Quái Nhân nhận thêm 35% Khuếch Đại Toàn ST và 30% Máu tối đa."
        }
      },
      awakening: {
        stage1: {
          en: "Provides 4 round 1 team energy and +20 Speed to all Esper allies.",
          vi: "Cấp 4 Năng lượng hiệp 1 cho đội và +20 Tốc độ cho toàn bộ hệ Dị Năng."
        },
        stage2: {
          en: "Increases entire team Tenacity Shield absorption capacity by 40%.",
          vi: "Tăng 40% sức chứa hấp thụ khiên Kiên Cường cho toàn đội."
        }
      }
    },
    recommendedGears: ["Suit", "Scholar", "Battle"],
    synergies: {
      en: "Best core for UR+ Black Sperm, UR Rover, and Monster DoT lineups.",
      vi: "Lõi mạnh nhất kích hoạt sức mạnh Tinh Trùng Đen UR+ và đội hình Quái Nhân DoT."
    },
    counters: {
      en: "High-speed turn 1 single-target Duelist burst.",
      vi: "Sốc sát thương đơn mục tiêu tốc độ cao của hệ Vũ Trang."
    }
  }
];

