import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charsFilePath = path.resolve(__dirname, '../src/data/defaultCharacters.js');
const rawChars = fs.readFileSync(charsFilePath, 'utf8');
const characters = JSON.parse(rawChars.match(/export const defaultCharacters = (\[[\s\S]*\]);?/)[1]);

console.log(`Loaded ${characters.length} characters to generate deep mechanics and skill breakdowns.`);

function generateHeroMechanics(char) {
  const isURPlus = char.rarity === 'UR+';
  const isUR = char.rarity === 'UR';
  const isSSRPlus = char.rarity === 'SSR+';
  const isSSR = char.rarity === 'SSR';
  const isSR = char.rarity === 'SR';
  const isR = char.rarity === 'R';

  // 1. Core Mechanics & Identity Tags
  let coreTags = [];
  let mechanicsExplanationEn = "";
  let mechanicsExplanationVi = "";

  if (char.id.includes('saitama')) {
    coreTags = ['[Sát Thương Xuyên Bất Khuất]', '[Xóa Sạch Bùa Lợi]', '[Khóa Nộ Năng Lượng]', '[Miễn Nhiễm Mọi Khống Chế]', '[Hồi Sinh 100% Máu]'];
    mechanicsExplanationVi = "Cơ chế sát thương tối thượng độc nhất vô nhị. Khi tung Tuyệt Kỹ, Saitama bỏ qua 50% Phòng thủ và xuyên thẳng qua trạng thái [Bất Khuất] của đối thủ — khiến kẻ địch không thể câu giờ sống sót với 1 HP. Thần Binh nâng cấp đòn đánh lên phạm vi toàn thể 6 tướng và khóa hoàn toàn thanh nộ năng lượng của đối phương trong 2 lượt.";
    mechanicsExplanationEn = "Ultimate unstoppable damage mechanic. Bypasses 50% DEF and pierces directly through enemy [Unyielding] immortality. Keepsake expands damage to all 6 enemies and seals enemy ultimate energy for 2 turns.";
  } else if (char.id.includes('blacksperm')) {
    coreTags = ['[Sát Thương Trực Tiếp Chuyên Biệt]', '[Phân Thân Bào Mòn]', '[Bỏ Qua Khiên Kiên Cường]', '[Kháng Sốc Sát Thương]'];
    mechanicsExplanationVi = "Cơ chế [Sát Thương Trực Tiếp Chuyên Biệt] (Specialized Direct DMG) là khắc tinh lớn nhất của meta Khiên Kiên Cường. Sát thương của các phân thân Tinh Trùng Đen trừ thẳng trực tiếp vào thanh Máu gốc của đối thủ mà không hề bị cản lại bởi bất kỳ loại khiên hộ thân nào. Càng mất máu, phân thân tách ra càng nhiều và gây sát thương càng lớn.";
    mechanicsExplanationEn = "Specialized Direct Damage mechanic is the ultimate hard-counter to Tenacity shields. Black Sperm clones deal direct HP reduction that completely ignores all shield layers.";
  } else if (char.id.includes('zombieman')) {
    coreTags = ['[Bất Tử Vô Hạn Lần]', '[Siêu Hồi Phục Khi Bạo Kích]', '[Phục Sinh Toàn Đội]', '[Cung Cấp Năng Lượng Bị Động]'];
    mechanicsExplanationVi = "Cơ chế [Bất Tử Phục Sinh] cho phép hồi sinh với 100% Máu sau khi nhận sát thương chí tử (tối đa theo số tầng phục sinh). Nội tại liên kết toàn đội: Bất cứ khi nào đồng minh hoặc bản thân bị dính đòn Bạo Kích, toàn đội lập tức được hồi phục 20% Máu tối đa và tích lũy nộ phản công.";
    mechanicsExplanationEn = "Infinite resurrection mechanics. Restores 100% HP upon lethal damage. When any ally receives a Critical Hit, the entire team heals for 20% Max HP.";
  } else if (char.id.includes('tatsumaki')) {
    coreTags = ['[Trường Lực Forcefield]', '[Vỡ Giáp Diện Rộng]', '[Bão Bạo Kích Hàng Sau]', '[Khuếch Đại Sát Thương Siêu Năng]'];
    mechanicsExplanationVi = "Cơ chế [Trường Lực Forcefield] phủ lên toàn thể 6 vị trí của kẻ địch. Mỗi khi một tướng địch đến lượt hành động, Trường Lực sẽ phát nổ gây sát thương gián tiếp cực đại bằng 160% Công của Tatsumaki mà không tốn thêm bất kỳ điểm năng lượng nào.";
    mechanicsExplanationEn = "Forcefield deployment mechanic coats all 6 enemy units. Each time an enemy takes their turn, the Forcefield detonates dealing massive passive damage equal to 160% ATK.";
  } else if (char.id.includes('king')) {
    coreTags = ['[Khóa Nộ Lượt 1]', '[Cướp Năng Lượng Nộ]', '[Hồi Máu Theo Lượt]', '[Hoảng Loạn Đối Phương]'];
    mechanicsExplanationVi = "Cơ chế [Phong Tỏa Năng Lượng] làm cạn kiệt thanh nộ của đối phương ngay từ lượt 1. Khóa từ 2 đến 4 điểm nộ khiến đội hình đối thủ không thể tung bất kỳ Tuyệt Kỹ nào trong vòng đầu tiên, hoàn toàn vô hiệu hóa chiến thuật sốc sát thương của địch.";
    mechanicsExplanationEn = "Turn-1 Energy Denial mechanic drains 2-4 energy points from the enemy, completely preventing enemy hyper carries from casting ultimate skills on turn 1.";
  } else if (char.id.includes('bomb') || char.id.includes('bom_')) {
    coreTags = ['[Lõi Tối Thượng Thống Trị]', '[Khiên Kiên Cường +40%]', '[Khuếch Đại Sát Thương Bộc Phát]', '[Nộ Năng Khởi Đầu]'];
    mechanicsExplanationVi = "Cơ chế Lõi Thế Hệ Mới (Bomb Core) cung cấp cho toàn bộ 6 vị tướng lớp khiên Kiên Cường bằng 40% Máu tối đa ngay khi vào trận, đồng thời tăng 30% sát thương bộc phát trong 2 hiệp đầu tiên. Đây là nền tảng của mọi đội hình leo Top 1 Live Arena.";
    mechanicsExplanationEn = "Supreme Core Engine providing +40% Max HP Tenacity shields to all 6 allies at match start and amplifying burst damage by +30% for 2 rounds.";
  } else if (char.id.includes('beast_king')) {
    coreTags = ['[Truy Kích 5 Lần]', '[Kích Hoạt Khi Địch Bị Tổn Thương]', '[Dồn Đơn Mục Tiêu]', '[Đòn Đánh Kép Miễn Phí]'];
    mechanicsExplanationVi = "Cơ chế [Truy Kích Liên Hoàn] (Pursuit Attack). Mỗi khi bất kỳ tướng địch nào dính hiệu ứng [Tổn Thương] (Injured), Vua Thú sẽ ngay lập tức tự động lao vào cào cấu mục tiêu đó (tối đa 5 lần mỗi hiệp) mà không tiêu tốn lượt đánh hay năng lượng.";
    mechanicsExplanationEn = "Pursuit Attack mechanic automatically launches up to 5 free follow-up claw attacks per round whenever any enemy receives the [Injured] debuff.";
  } else if (char.id.includes('golden_ball') || char.id.includes('goldenball')) {
    coreTags = ['[Vỡ Giáp Diện Rộng]', '[Tăng +30% Sát Thương Nhận Vào]', '[Bắn Nhanh Lượt Đầu]', '[Kích Hoạt Truy Kích]'];
    mechanicsExplanationVi = "Cơ chế [Vỡ Giáp Toàn Sân] (Shatter). Tuyệt Kỹ bắn bi kim loại gieo hiệu ứng Vỡ Giáp lên toàn bộ hàng sau hoặc toàn thể quân địch, khiến đối thủ nhận thêm +30% sát thương từ mọi nguồn tấn công tiếp theo của đồng đội.";
    mechanicsExplanationEn = "Teamwide Shatter mechanic debuffs the entire enemy team, increasing all incoming damage taken by +30% for subsequent ally attacks.";
  } else if (char.class === 'Grappler') {
    coreTags = ['[Chống Chịu Hàng Trước]', '[Khiên Kiên Cường]', '[Phản Đòn Cận Chiến]', '[Hút Sát Thương]'];
    mechanicsExplanationVi = "Cơ chế phòng thủ và bảo hộ hàng trước. Tận dụng chỉ số Máu và Đỡ Đòn vượt trội để hấp thụ sát thương trực tiếp từ đối thủ, chuyển hóa phòng ngự thành khiên bảo vệ cho hàng sau.";
    mechanicsExplanationEn = "Frontline vanguard tank mechanics utilizing high HP and Block Rate to soak direct enemy burst and protect backline allies.";
  } else if (char.class === 'Duelist') {
    coreTags = ['[Sát Thương Bộc Phát]', '[Xuyên Giáp Đơn Mục Tiêu]', '[Bạo Kích Cao]', '[Kết Liễu Chủ Lực]'];
    mechanicsExplanationVi = "Cơ chế sốc sát thương tốc độ cao. Dồn toàn bộ chỉ số Công và Bạo Kích để xuyên phá hàng phòng ngự và kết liễu mục tiêu trọng yếu của đối phương trong 1 lượt đánh.";
    mechanicsExplanationEn = "High-speed single-target burst mechanics designed to punch through enemy frontline defenses and eliminate key threats.";
  } else if (char.class === 'Esper') {
    coreTags = ['[Sát Thương Diện Rộng (AoE)]', '[Hiệu Ứng Bất Lợi]', '[Trường Lực & Ăn Mòn]', '[Khống Chế Tinh Thần]'];
    mechanicsExplanationVi = "Cơ chế sát thương diện rộng và gieo hiệu ứng bất lợi toàn sân. Tác động lên nhiều mục tiêu cùng lúc, làm suy yếu chỉ số và bào mòn sinh lực của toàn bộ đội hình địch.";
    mechanicsExplanationEn = "AoE damage and crowd control mechanics impacting multiple targets with debuffs and sustained damage over time.";
  } else {
    coreTags = ['[Hỗ Trợ Chiến Thuật]', '[Khống Chế & Tăng Tốc]', '[Cung Cấp Năng Lượng]', '[Buff Chỉ Số Toàn Đội]'];
    mechanicsExplanationVi = "Cơ chế hỗ trợ công nghệ và điều tiết nhịp độ trận đấu. Tăng tốc độ hành động, hồi phục nộ năng lượng hoặc gieo các hiệu ứng khống chế làm gián đoạn chuỗi combo của địch.";
    mechanicsExplanationEn = "Tactical support and tempo regulation mechanics boosting team speed, energy regeneration, and disrupting enemy rotations.";
  }

  // 2. Deep Skill Breakdown Analysis
  const skillAnalysis = {
    normal: {
      tacticalUse: {
        vi: "Sử dụng khi cần tiết kiệm 2 điểm nộ năng lượng cho Carry chính ở hàng sau, hoặc khi mục tiêu đã dính Vỡ Giáp/Tổn Thương để bồi thêm sát thương.",
        en: "Use to conserve 2 energy points for your main carry in the backline, or to finish off low-HP shattered targets."
      },
      mechanicDetails: {
        vi: `Gây sát thương vật lý trực tiếp dựa trên chỉ số Công cơ bản. Tích lũy nộ bị động cho lượt kế tiếp.`,
        en: `Deals direct damage scaling with base ATK stat while building passive energy for subsequent turns.`
      }
    },
    ultimate: {
      tacticalUse: {
        vi: "Kỹ năng sát thương chủ lực dồn nộ. Luôn xả nộ ở lượt 1 hoặc lượt 2 ngay sau khi đồng đội đã gieo hiệu ứng Vỡ Giáp hoặc buff Công toàn đội.",
        en: "Primary burst execution skill. Cast immediately on turn 1 or 2 after allies have applied Shatter or ATK buffs."
      },
      mechanicDetails: {
        vi: `Hệ số sát thương cực đại, kích hoạt các hiệu ứng đặc quyền (Xuyên giáp, Gieo Trường Lực, Gây Nội Thương hoặc Khóa Nộ).`,
        en: `High-multiplier damage output triggering unique class mechanics (Armor Pierce, Forcefield, Internal Injury, or Energy Seal).`
      }
    },
    ultraUltimate: {
      tacticalUse: {
        vi: "Mở khóa khi trang bị Thần Binh độc quyền. Nâng cấp vượt bậc về sát thương, mở rộng phạm vi đánh và bổ sung hiệu ứng khống chế tuyệt đối.",
        en: "Unlocked via exclusive Keepsake Weapon. Drastically boosts damage multipliers, expands target range, and adds guaranteed control."
      },
      keepsakePriority: {
        vi: isURPlus || isUR ? "BẮT BUỘC PHẢI CÓ (Ưu tiên SSS)" : isSSRPlus ? "RẤT ĐÁNG ĐẦU TƯ (Ưu tiên SS)" : "TÙY CHỌN / TIẾT KIỆM (Ưu tiên S/A)",
        en: isURPlus || isUR ? "MUST-HAVE (SSS Priority)" : isSSRPlus ? "HIGH VALUE (SS Priority)" : "SITUATIONAL / OPTIONAL (S/A Priority)"
      }
    },
    passive: {
      tacticalUse: {
        vi: "Kỹ năng nội tại hoạt động tự động trong suốt trận đấu. Cung cấp khiên bảo vệ, miễn khống chế, hoặc phản đòn truy kích khi đạt điều kiện.",
        en: "Passive ability active throughout the entire match. Provides survivability shields, control immunity, or counter-attacks."
      },
      mechanicDetails: {
        vi: `Đột phá lên 5 sao giúp nâng cấp chỉ số nội tại lên mức tối đa và kích hoạt các hiệu ứng phụ trợ toàn đội.`,
        en: `5-Star breakthrough maximizes passive scaling and unlocks teamwide supportive perks.`
      }
    }
  };

  // 3. Skill Leveling Priority & Power Spike Roadmap
  const skillPriority = {
    order: {
      vi: "Tuyệt Kỹ (Ultimate) > Nội Tại (Passive) > Thức Tỉnh (Awakening) > Đòn Thường (Normal)",
      en: "Ultimate Skill > Passive Talent > Awakening Stages > Normal Attack"
    },
    powerSpikes: [
      {
        stage: { vi: "⭐ 3 Sao Cơ Bản", en: "⭐ 3-Star Baseline" },
        effect: { vi: "Mở khóa toàn bộ chỉ số cơ bản và đủ điều kiện tham gia phó bản viễn chinh.", en: "Unlocks baseline stats and qualifies for expedition trials." }
      },
      {
        stage: { vi: "⭐⭐⭐⭐⭐ 5 Sao Đột Phá", en: "⭐⭐⭐⭐⭐ 5-Star Breakthrough" },
        effect: { vi: "Nâng cấp Nội Tại Bị Động lên cấp tối đa, mở khóa khả năng sinh tồn và hỗ trợ toàn diện.", en: "Maximizes Passive talent scaling and unlocks full survivability." }
      },
      {
        stage: { vi: "🗡️ Thần Binh 3 Sao (Keepsake)", en: "🗡️ 3-Star Keepsake Weapon" },
        effect: { vi: "Kích hoạt Siêu Tuyệt Kỹ Tối Thượng — Biến đổi hoàn toàn sức mạnh và cơ chế xả sát thương.", en: "Unlocks Ultra Ultimate — fundamentally evolves combat burst and mechanics." }
      },
      {
        stage: { vi: "🔥 Thức Tỉnh Sao Đỏ Giai Đoạn 2", en: "🔥 Red Star Awakening Stage 2" },
        effect: { vi: "Tăng 35% Sát thương Trực tiếp và tạo khiên Kiên Cường 50% Máu toàn đội.", en: "Grants +35% Direct DMG boost and 50% Max HP Tenacity shields to all allies." }
      }
    ]
  };

  return {
    coreTags,
    mechanicsExplanation: {
      en: mechanicsExplanationEn || "Specialized combat mechanics tailored for competitive meta synergies.",
      vi: mechanicsExplanationVi
    },
    skillAnalysis,
    skillPriority
  };
}

// Inject deep mechanics and skill breakdowns into all characters
const updatedCharacters = characters.map(char => {
  const mech = generateHeroMechanics(char);
  return {
    ...char,
    mechanics: mech
  };
});

// Write updated defaultCharacters.js
const updatedCharsCode = `export const defaultCharacters = ${JSON.stringify(updatedCharacters, null, 2)};\n`;
fs.writeFileSync(charsFilePath, updatedCharsCode, 'utf8');
console.log(`Successfully generated deep mechanics and skill breakdowns for all ${updatedCharacters.length} heroes in defaultCharacters.js!`);
