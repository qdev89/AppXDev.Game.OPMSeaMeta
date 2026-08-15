import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultCharsPath = path.resolve(__dirname, '../src/data/defaultCharacters.js');
const rawContent = fs.readFileSync(defaultCharsPath, 'utf8');

// Parse defaultCharacters array from export statement
const jsonStrMatch = rawContent.match(/export const defaultCharacters = (\[[\s\S]*\]);?/);
if (!jsonStrMatch) {
  console.error('Could not find defaultCharacters array');
  process.exit(1);
}

const characters = JSON.parse(jsonStrMatch[1]);

console.log(`Loaded ${characters.length} characters.`);

// Helper to determine gameplay guide based on character kit, rarity, class, faction, and skills
function buildGameplayGuide(char) {
  const isDPS = char.class === 'Duelist' || (char.class === 'Esper' && char.rarity.includes('UR')) || char.tier === 'SSS' || char.id.includes('saitama') || char.id.includes('sonic') || char.id.includes('tatsumaki') || char.id.includes('atomic') || char.id.includes('garou') || char.id.includes('goldenball') || char.id.includes('amai');
  const isTank = char.class === 'Grappler' || char.id.includes('darkshine') || char.id.includes('superalloy') || char.id.includes('silverfang') || char.id.includes('kabuto') || char.id.includes('pig_god') || char.id.includes('rover') || char.id.includes('tanktop');
  const isSupportOrControl = char.class === 'HiTech' || char.id.includes('king') || char.id.includes('geryu') || char.id.includes('genus') || char.id.includes('fukegao') || char.id.includes('mumen') || char.id.includes('smileman') || char.id.includes('child_emperor');

  let roleEn = "Primary Burst DPS";
  let roleVi = "Sát Thương Chủ Lực (Carry)";
  let posEn = "Back Row (Slot 4 - 6)";
  let posVi = "Hàng Sau (Vị trí 4 - 6) — Tránh nhận sát thương trực tiếp";
  let speedOrderEn = "Speed #2 or #3 (After buffer/debuffer)";
  let speedOrderVi = "Tốc độ #2 hoặc #3 (Sau tướng buff/gieo vỡ giáp)";
  let statPriorityEn = ["ATK%", "Speed", "Crit Rate%", "Crit DMG%"];
  let statPriorityVi = ["Công %", "Tốc Độ", "Tỉ Lệ Bạo %", "Sát Thương Bạo %"];
  let comboTipsEn = "Open with Ultimate to apply massive AoE burst or single-target execute. Ensure teammates apply Shatter or Tenacity strips beforehand.";
  let comboTipsVi = "Mở đầu trận bằng Tuyệt Kỹ để dồn sát thương sốc nổ. Đảm bảo đồng đội đã đi trước để gieo hiệu ứng Vỡ Giáp hoặc buff Công.";
  let proTipsEn = "Equip 4-piece Knight or Primal set. Maximize ATK and SPD substats to outspeed enemy backline.";
  let proTipsVi = "Trang bị 4 món set Hiệp Sĩ (Knight) hoặc Dã Thú (Primal). Tối đa hóa dòng phụ Công % và Tốc Độ để quét sạch hàng sau đối thủ.";

  if (char.hasCore) {
    roleEn = "Core Tactical Engine & Support";
    roleVi = "Lõi Đội Hình & Chỉ Huy Chiến Thuật";
    posEn = "Front Row (Slot 2/3) or Protected Back Row";
    posVi = "Hàng Trước (Vị trí 2/3) hoặc Hàng Sau bảo hộ";
    speedOrderEn = "Speed #1 or #5 (Depending on Energy need)";
    speedOrderVi = "Tốc độ #1 (Nếu cần buff mở đầu) hoặc #5 (Lấy nộ bị động)";
    statPriorityEn = ["HP%", "Speed", "Block Rate%", "Effect RES%"];
    statPriorityVi = ["Máu %", "Tốc Độ", "Đỡ Đòn %", "Kháng Hiệu Ứng %"];
    comboTipsEn = "Align 1 Grappler, 1 Duelist, 1 HiTech, and 1 Esper in team to activate Advanced Core Effects. Trigger core energy recharge every round.";
    comboTipsVi = "Luôn xếp đủ 1 Cách Đấu, 1 Vũ Trang, 1 Công Nghệ, 1 Siêu Năng để kích hoạt Lõi Nâng Cao. Tận dụng tối đa lượng nộ hồi mỗi hiệp.";
    proTipsEn = "Upgrade Core Level in Laboratory to Level 4/7/10 for massive +40% HP Tenacity and energy generation.";
    proTipsVi = "Nâng cấp Cấp Độ Lõi trong Viện Nghiên Cứu lên mốc Cấp 4/7/10 để mở khóa khiên Kiên Cường 40% Máu và nộ vô tận.";
  } else if (isTank) {
    roleEn = "Main Vanguard Tank & Damage Soak";
    roleVi = "Đỡ Đòn Tiên Phong & Chống Chịu Hàng Trước";
    posEn = "Front Row (Slot 1, 2, or 3)";
    posVi = "Hàng Trước (Vị trí 1, 2 hoặc 3) — Hút hỏa lực đối phương";
    speedOrderEn = "Speed #4 - #6 (Late turn sustain)";
    speedOrderVi = "Tốc độ #4 - #6 (Hành động cuối để hồi phục/duy trì khiên)";
    statPriorityEn = ["HP%", "Block Rate%", "DEF%", "DMG Reflect%"];
    statPriorityVi = ["Máu %", "Đỡ Đòn %", "Phòng Thủ %", "Phản Sát Thương %"];
    comboTipsEn = "Position directly opposite enemy main carry to absorb burst damage. Utilize passive shields and counter-attack triggers.";
    comboTipsVi = "Đứng đối diện trực diện với carry mạnh nhất của địch để che chắn sát thương. Tận dụng nội tại tạo khiên và phản đòn khi bị tấn công.";
    proTipsEn = "Equip 4-piece Suit or Casual set. Stack HP% to convert survival into team damage mitigation.";
    proTipsVi = "Trang bị 4 món set Âu Phục (Suit) hoặc Thường Phục (Casual). Dồn tối đa chỉ số Máu % để chuyển hóa thành khiên đỡ cho toàn đội.";
  } else if (isSupportOrControl) {
    roleEn = "Tactical Buffer & Energy Controller";
    roleVi = "Hỗ Trợ Tăng Tốc, Khống Chế & Khóa Năng Lượng";
    posEn = "Back Row (Slot 4) or Front Flank (Slot 1)";
    posVi = "Hàng Sau (Vị trí 4) hoặc Hàng Trước cánh (Vị trí 1)";
    speedOrderEn = "Speed #1 (Fastest unit to dictate tempo)";
    speedOrderVi = "Tốc độ #1 (Đi đầu tiên toàn trận để nắm quyền chủ động)";
    statPriorityEn = ["Speed", "Effect HIT%", "HP%", "Effect RES%"];
    statPriorityVi = ["Tốc Độ (SPD)", "Chính Xác Hiệu Ứng %", "Máu %", "Kháng Hiệu Ứng %"];
    comboTipsEn = "Cast skill turn-1 to seal enemy energy or grant teamwide +30% ATK & SPD boost before enemy damage dealers act.";
    comboTipsVi = "Xuất chiêu ngay lượt 1 để khóa nộ đối phương hoặc buff +30% Công & Tốc cho toàn đội trước khi đối thủ kịp hành động.";
    proTipsEn = "Equip 4-piece Lightning or Monk set. Every single SPD substat is vital for turn-1 initiative.";
    proTipsVi = "Trang bị 4 món set Tia Chớp (Lightning) hoặc Tăng Lữ (Monk). Từng điểm Tốc Độ là yếu tố sống còn để cướp lượt đầu.";
  }

  // Bespoke custom adjustments for iconic heroes
  if (char.id.includes('saitama')) {
    roleVi = "Siêu Carry Tuyệt Đối — Dọn Sạch Bàn Cờ";
    comboTipsVi = "Dùng Tuyệt Kỹ Đấm Nghiêm Túc xóa sạch bùa lợi và xuyên Bất Khuất. Đi lượt 1-2 để dọn hàng trước đối phương lập tức.";
  } else if (char.id.includes('blacksperm')) {
    roleVi = "Siêu Bào Mòn & Phân Thân Bất Tử (Specialized Direct DMG)";
    comboTipsVi = "Gây Sát Thương Trực Tiếp Chuyên Biệt đánh thẳng vào Máu xuyên qua mọi loại khiên Kiên Cường. Càng mất máu phân thân càng gây dame khủng.";
  } else if (char.id.includes('zombieman')) {
    roleVi = "Bất Tử Phục Sinh & Siêu Hồi Phục Toàn Đội";
    comboTipsVi = "Tận dụng Bất Tử để hồi sinh không giới hạn. Khi đồng đội bị bạo kích sẽ lập tức hồi máu và kích hoạt nộ phản công.";
  } else if (char.id.includes('tatsumaki')) {
    roleVi = "Bão Sát Thương Diện Rộng & Gieo Trường Lực (Forcefield)";
    comboTipsVi = "Gieo Trường Lực lên toàn thể 6 tướng địch. Mỗi khi địch hành động sẽ tự động nổ sát thương cực đại.";
  } else if (char.id.includes('king')) {
    roleVi = "Khóa Sạch Thanh Nộ & Cướp Năng Lượng Lượt 1";
    comboTipsVi = "Cướp 2-4 điểm nộ lượt đầu khiến đối thủ hoàn toàn bất lực không thể tung Tuyệt Kỹ.";
  } else if (char.id.includes('beast_king')) {
    roleVi = "Truy Kích 5 Lần Liên Hoàn Khi Địch Bị Tổn Thương";
    comboTipsVi = "Kết hợp cùng Bi Vàng hoặc Amai Mask. Bất cứ khi nào địch bị dính Tổn Thương, Vua Thú lập tức tung 5 đòn cào truy kích miễn phí.";
  } else if (char.id.includes('goldenball')) {
    roleVi = "Vỡ Giáp Diện Rộng (+30% Sát Thương Nhận Vào)";
    comboTipsVi = "Xếp Tốc Độ #1 hoặc #2 để bắn Vỡ Giáp toàn bộ đội hình địch trước khi carry dồn đòn kết liễu.";
  }

  return {
    role: { en: roleEn, vi: roleVi },
    positioning: { en: posEn, vi: posVi },
    speedOrder: { en: speedOrderEn, vi: speedOrderVi },
    statPriority: { en: statPriorityEn, vi: statPriorityVi },
    comboTips: { en: comboTipsEn, vi: comboTipsVi },
    proTips: { en: proTipsEn, vi: proTipsVi }
  };
}

// Inject gameplayGuide into all characters
const updatedCharacters = characters.map((char) => {
  const guide = buildGameplayGuide(char);
  return {
    ...char,
    gameplayGuide: guide
  };
});

const outputCode = `export const defaultCharacters = ${JSON.stringify(updatedCharacters, null, 2)};\n`;

fs.writeFileSync(defaultCharsPath, outputCode, 'utf8');
console.log(`Successfully generated gameplay guides for all ${updatedCharacters.length} heroes in defaultCharacters.js!`);
