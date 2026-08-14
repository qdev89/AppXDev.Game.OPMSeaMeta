export const defaultGears = [
  {
    id: "knight",
    name: { en: "Knight Set", vi: "Bộ Hiệp Sĩ" },
    icon: "⚔️",
    type: "AoE & Splash Dmg",
    twoPiece: {
      en: "ATK +10%",
      vi: "Tấn Công +10%"
    },
    fourPiece: {
      en: "Every enemy hit by an attack increases damage dealt to each additional enemy by 10% (up to 30%).",
      vi: "Mỗi kẻ địch trúng đòn giúp tăng 10% sát thương lên các mục tiêu kế tiếp (tối đa 30%)."
    },
    bestFor: {
      en: "AoE Sweepers (UR Tatsumaki, SSR+ Atomic Samurai, SSR+ Mosquito Girl)",
      vi: "Tướng sát thương diện rộng toàn thể (UR Tatsumaki, Atomic Samurai SSR+, Mosquito Girl SSR+)"
    },
    recommendedSubstats: {
      en: "SPD > ATK% > Crit Rate > Crit Dmg",
      vi: "Tốc độ > Tấn Công% > Bạo Kích > Sát Thương Bạo"
    }
  },
  {
    id: "suit",
    name: { en: "Suit Set", vi: "Bộ Âu Phục" },
    icon: "👔",
    type: "Reflect & Sustain",
    twoPiece: {
      en: "HP +10%",
      vi: "Máu Tối Đa +10%"
    },
    fourPiece: {
      en: "Reflects 20% of direct damage taken back to the attacker and heals 10% HP when attacked (triggers once per action).",
      vi: "Phản 20% sát thương trực tiếp nhận vào về lại kẻ tấn công và tự hồi 10% Máu khi bị đánh (1 lần mỗi hành động)."
    },
    bestFor: {
      en: "Tanks, Core Holders & Reflect Units (SSR+ Silverfang, Bomb, Gyoro-Gyoro, Carnage Kabuto)",
      vi: "Tướng đỡ đòn, Chủ Lõi Core & Phản Đòn (Bang SSR+, Bomb, Gyoro-Gyoro, Bọ Hung Kabuto)"
    },
    recommendedSubstats: {
      en: "HP% > DEF% > Block Rate > Effect RES",
      vi: "Máu% > Thủ% > Đỡ Đòn > Kháng Hiệu Ứng"
    }
  },
  {
    id: "primal",
    name: { en: "Primal Set", vi: "Bộ Nguyên Thủy" },
    icon: "🦖",
    type: "Splash & Burst",
    twoPiece: {
      en: "ATK +10%",
      vi: "Tấn Công +10%"
    },
    fourPiece: {
      en: "Direct single target damage splashes 30% of damage dealt to adjacent enemies in the same row/column.",
      vi: "Đòn đánh đơn mục tiêu sẽ lan 30% sát thương gây ra sang các kẻ địch lân cận cùng hàng."
    },
    bestFor: {
      en: "Single Target Nuke Units (UR Boros, UR Saitama, Amai Mask)",
      vi: "Tướng dồn sát thương đơn cực mạnh (Boros UR, Saitama UR, Mặt Nạ Mật)"
    },
    recommendedSubstats: {
      en: "ATK% > SPD > Crit Rate > Crit Dmg",
      vi: "Tấn Công% > Tốc độ > Bạo Kích > Sát Thương Bạo"
    }
  },
  {
    id: "prisoner",
    name: { en: "Prisoner Set", vi: "Bộ Tù Nhân" },
    icon: "⛓️",
    type: "Critical Execution",
    twoPiece: {
      en: "Crit Rate +15%",
      vi: "Tỉ Lệ Bạo Kích +15%"
    },
    fourPiece: {
      en: "Landing a Critical hit restores 1 Energy point and increases next turn ATK by 25%.",
      vi: "Mỗi khi đòn đánh Bạo Kích, hồi ngay 1 điểm Năng lượng và tăng 25% Công ở lượt kế."
    },
    bestFor: {
      en: "High Crit Strikers & Energy Fillers (UR Sonic, Child Emperor, Golden Ball)",
      vi: "Tướng bạo kích cao & Bơm nộ (UR Sonic, Tiểu Bá Vương, Golden Ball)"
    },
    recommendedSubstats: {
      en: "Crit Rate > SPD > ATK% > Crit Dmg",
      vi: "Bạo Kích > Tốc độ > Tấn Công% > Sát Thương Bạo"
    }
  },
  {
    id: "swordsman",
    name: { en: "Swordsman Set", vi: "Bộ Kiếm Khách" },
    icon: "🗡️",
    type: "Multi-Hit & Pursuit",
    twoPiece: {
      en: "ATK +10%",
      vi: "Tấn Công +10%"
    },
    fourPiece: {
      en: "Increases Pursuit / Follow-Up attack damage by 40% and restores 10% HP on kill.",
      vi: "Tăng 40% sát thương từ đòn Truy Kích / Phản Đòn và hồi 10% Máu khi hạ gục mục tiêu."
    },
    bestFor: {
      en: "Follow-up & Counter specialists (SSR+ Atomic Samurai, UR Sonic, SSR+ Metal Bat)",
      vi: "Chuyên gia truy kích và phản kích (Atomic Samurai SSR+, Sonic UR, Metal Bat SSR+)"
    },
    recommendedSubstats: {
      en: "ATK% > SPD > Crit Dmg > Effect Hit",
      vi: "Tấn Công% > Tốc độ > Sát Thương Bạo > Trúng Hiệu Ứng"
    }
  },
  {
    id: "casual",
    name: { en: "Casual Set", vi: "Bộ Thường Phục" },
    icon: "👕",
    type: "Regen & Max HP",
    twoPiece: {
      en: "HP +10%",
      vi: "Máu Tối Đa +10%"
    },
    fourPiece: {
      en: "At start of your turn, heals for 10% Max HP and grants a Tenacity shield equal to 15% Max HP.",
      vi: "Đầu lượt hành động, hồi 10% Máu tối đa và nhận thêm Khiên Kiên Cường bằng 15% Máu tối đa."
    },
    bestFor: {
      en: "Stall tanks & Healers (Zombieman, Gyoro-Gyoro, Superalloy Darkshine)",
      vi: "Tướng sinh tồn, Đỡ đòn & Hồi phục (Zombieman, Gyoro-Gyoro, Đen Bóng)"
    },
    recommendedSubstats: {
      en: "HP% > Block Rate > DEF% > SPD",
      vi: "Máu% > Đỡ Đòn > Thủ% > Tốc độ"
    }
  },
  {
    id: "lightning",
    name: { en: "Lightning Set", vi: "Bộ Tia Chớp" },
    icon: "⚡",
    type: "First Strike Speed",
    twoPiece: {
      en: "Speed +10%",
      vi: "Tốc Độ +10%"
    },
    fourPiece: {
      en: "If acting first in turn 1, increases entire team ATK by 20% and inflicts [Speed Down] on enemies.",
      vi: "Nếu hành động đầu tiên ở hiệp 1, tăng 20% Công cho toàn đội và gieo hiệu ứng [Giảm Tốc] lên phe địch."
    },
    bestFor: {
      en: "Turn-1 Speed Openers (UR Sonic, SSR+ Geryuganshoop, Speed-o'-Sound Sonic)",
      vi: "Tướng mở màn tranh tốc đầu trận (UR Sonic, Geryuganshoop SSR+, Sonic Thường)"
    },
    recommendedSubstats: {
      en: "SPD > SPD > Effect Hit > ATK%",
      vi: "Tốc độ > Tốc độ > Trúng Hiệu Ứng > Tấn Công%"
    }
  },
  {
    id: "martial_arts",
    name: { en: "Martial Arts Set", vi: "Bộ Võ Thuật" },
    icon: "🥋",
    type: "Tenacity & Block",
    twoPiece: {
      en: "DEF +10%",
      vi: "Phòng Thủ +10%"
    },
    fourPiece: {
      en: "Increases Block Rate by 30%. When blocking, negates 50% extra incoming damage.",
      vi: "Tăng 30% Tỉ lệ Đỡ Đòn. Khi đỡ đòn thành công, triệt tiêu thêm 50% sát thương nhận vào."
    },
    bestFor: {
      en: "Grapplers and Shield Protectors (Bomb, SSR+ Silverfang, Tanktop Master)",
      vi: "Tướng Cách Đấu & Chắn Sát Thương (Bomb, Bang SSR+, Tanktop Master)"
    },
    recommendedSubstats: {
      en: "Block Rate > HP% > DEF% > Effect RES",
      vi: "Đỡ Đòn > Máu% > Thủ% > Kháng Hiệu Ứng"
    }
  }
];
