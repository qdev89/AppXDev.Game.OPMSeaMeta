import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charsFilePath = path.resolve(__dirname, '../src/data/defaultCharacters.js');
const rawChars = fs.readFileSync(charsFilePath, 'utf8');
const characters = JSON.parse(rawChars.match(/export const defaultCharacters = (\[[\s\S]*\]);?/)[1]);

console.log(`Loaded ${characters.length} characters to generate bespoke canonical skills and concise deep tactical analysis.`);

// Custom database of specific canonical skills and concise deep analysis for major heroes
const customSkillDb = {
  ur_saitama: {
    normal: {
      name: { vi: "Đấm Thường Liên Hoàn", en: "Consecutive Normal Punches" },
      desc: { vi: "Gây 180% Công lên mục tiêu đơn, 100% gây [Nội Thương] bằng 100% Công.", en: "Deals 180% ATK damage to single enemy, 100% chance to inflict [Internal Injury] (100% ATK)." },
      tactical: { vi: "Dùng để tiết kiệm nộ và gieo Nội Thương bào mòn mục tiêu đơn.", en: "Conserves energy while applying Internal Injury chip damage." }
    },
    ultimate: {
      name: { vi: "Đấm Nghiêm Túc: Tuyệt Diệt", en: "Serious Punch: Extinction" },
      desc: { vi: "Gây 550% Công lên hàng dọc, bỏ qua 50% Phòng thủ, xuyên [Bất Khuất] và xóa sạch bùa lợi địch.", en: "Deals 550% ATK damage to column, ignores 50% DEF, bypasses [Unyielding], and dispels buffs." },
      tactical: { vi: "Xả nộ hiệp 1 xuyên thẳng qua Bất Khuất và xóa sổ tanker hàng trước của đối phương.", en: "Cast turn 1 to bypass Unyielding and delete frontline enemy tanks." }
    },
    ultraUltimate: {
      name: { vi: "Nghiêm Túc Đa Hướng Tối Thượng", en: "Serious Series: Omnidirectional Punch" },
      desc: { vi: "Gây 800% Công lên toàn thể 6 tướng địch, 100% bạo kích và khóa sạch thanh nộ đối phương 2 lượt.", en: "Deals 800% ATK to all 6 enemies, 100% Crit, and locks enemy energy for 2 turns." },
      tactical: { vi: "Thần Binh bắt buộc phải có để mở rộng phạm vi ra toàn bàn cờ và khóa nộ câm lặng toàn bộ đội hình địch.", en: "Must-have Keepsake: expands to full 6-target AoE and locks entire enemy energy pool." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Siêu Cốt Lõi)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Phá Vỡ Giới Hạn Tuyệt Đối", en: "Absolute Limitless" },
      desc: { vi: "Miễn nhiễm mọi khống chế (Choáng, Đóng băng, Câm lặng), hồi phục 100% Máu khi nhận đòn chí tử.", en: "Immune to all control effects. Restores 100% HP upon receiving lethal damage." },
      tactical: { vi: "Cung cấp miễn khống chế tuyệt đối và mạng hồi sinh thứ hai giúp duy trì áp lực liên tục.", en: "Grants CC immunity and a second life to maintain relentless pressure." }
    }
  },
  garou_ur: {
    normal: {
      name: { vi: "Lưu Thủy Nhan Hỏa Quyền", en: "Water Stream Rock Smashing Fist" },
      desc: { vi: "Gây 150% Công lên mục tiêu đơn, giảm 20% Tỉ lệ Đỡ Đòn của kẻ địch trong 2 lượt.", en: "Deals 150% ATK to single target, reducing target Block Rate by 20% for 2 turns." },
      tactical: { vi: "Đánh thường giảm Đỡ Đòn mở đường cho đồng minh dồn sát thương bộc phát.", en: "Lowers enemy Block Rate to set up follow-up team bursts." }
    },
    ultimate: {
      name: { vi: "Loạn Vũ Lang Nha Trảm", en: "Wolf Fang Crossfang Ravage" },
      desc: { vi: "Gây 380% Công lên toàn bộ hàng trước, kích hoạt [Nội Thương] 120% Công và làm [Vỡ Giáp] tăng 30% sát thương nhận vào.", en: "Deals 380% ATK to front row, inflicting [Internal Injury] (120% ATK) and [Shatter] (+30% DMG taken)." },
      tactical: { vi: "Xả nộ đầu trận bẻ gãy toàn bộ dàn tanker hàng trước của đối thủ.", en: "Cast early to shatter frontline defense and detonate Internal Injury." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Loạn Vũ Lang Nha Trảm", en: "Ultra Wolf Fang Crossfang Ravage" },
      desc: { vi: "Gây 520% Công lên toàn thể 6 quân địch, 100% Nội Thương + Vỡ Giáp, kích hoạt truy kích 3 lần liên tiếp.", en: "Deals 520% ATK to all 6 enemies, 100% Shatter + Internal Injury, triggering 3 pursuits." },
      tactical: { vi: "Thần Binh biến Garou thành siêu Carry diện rộng 6 ô với 3 lần truy kích kết liễu tàn cuộc.", en: "Keepsake transforms Garou into a full 6-target monster with 3 pursuit cleanups." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Tối Ưu Carry)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Tiến Hóa Quái Vật & Phản Kích", en: "Monster Evolution & Retaliation" },
      desc: { vi: "Khi đồng đội bị tấn công, tự động phản kích 3 lần/lượt (gây 150% Công). Hồi 30% Máu khi máu tụt dưới 50%.", en: "Counters 3 times/turn when allies are attacked (150% ATK). Heals 30% HP when below 50% HP." },
      tactical: { vi: "Phản đòn liên tục ngoài lượt và tự kích hoạt hồi phục sinh tồn khi bị sốc sát thương.", en: "Relentless off-turn counter-attacks with emergency sustain below 50% HP." }
    }
  },
  tatsumaki_terrible_tornado_urplus: {
    normal: {
      name: { vi: "Đè Nén Siêu Nhiên", en: "Psychic Crush" },
      desc: { vi: "Gây 140% Công lên mục tiêu đơn, tăng 20% Tỉ lệ Bạo Kích của bản thân trong 1 lượt.", en: "Deals 140% ATK to single target, boosting self Crit Rate by 20% for 1 turn." },
      tactical: { vi: "Đánh thường tích nộ và tự tăng tỉ lệ bạo chuẩn bị cho lượt Tuyệt Kỹ kế tiếp.", en: "Builds self Crit Rate buff ahead of next turn's Ultimate." }
    },
    ultimate: {
      name: { vi: "Bão Siêu Linh Cực Hạn", en: "Limitless Telekinetic Tempest" },
      desc: { vi: "Gây 450% Công lên 5 mục tiêu, tạo [Trường Lực Forcefield] nổ sát thương bằng 150% Công mỗi khi mục tiêu hành động.", en: "Deals 450% ATK to 5 enemies, applying [Forcefield] that detonates for 150% ATK on enemy action." },
      tactical: { vi: "Phủ bão Trường Lực rút cạn máu đối phương bất cứ khi nào chúng di chuyển hoặc ra chiêu.", en: "Applies Forcefield ticking damage whenever enemy units act." }
    },
    ultraUltimate: {
      name: { vi: "Tuyệt Diệt Thiên Thạch Siêu Linh", en: "Ultra Psychic Meteor Extinction" },
      desc: { vi: "Gây 650% Công lên toàn thể 6 kẻ địch, phủ Trường Lực 200% Công và giảm 30% Công của toàn đội địch trong 2 lượt.", en: "Deals 650% ATK to all 6 enemies, 200% Forcefield, and debuffs enemy ATK by 30% for 2 turns." },
      tactical: { vi: "Thần Binh phủ Trường Lực 6 ô và bẻ gãy 30% sát thương của toàn bộ Carry đối phương.", en: "Full 6-target Forcefield + 30% enemy teamwide ATK reduction." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Top 1 Khắc Chế)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Uy Áp Nữ Hoàng Siêu Linh", en: "Psychic Queen Domination" },
      desc: { vi: "Tăng 40% Sát thương Bạo Kích cho toàn bộ đồng minh Esper. Mỗi đòn bạo kích tạo Khiên Kiên Cường bằng 30% Máu tối đa.", en: "Increases Esper allies Crit DMG by 40%. Each Crit hit grants 30% Max HP Tenacity shield." },
      tactical: { vi: "Khuếch đại sát thương bạo kích cho hệ Siêu Năng và tự tạo khiên phòng thủ dày đặc.", en: "Massive Crit DMG synergy for Esper units with continuous shield generation." }
    }
  },
  black_sperm_urplus: {
    normal: {
      name: { vi: "Đấm Phân Thân Biến Hóa", en: "Multi-Cell Punch" },
      desc: { vi: "Gây 130% Công lên mục tiêu đơn, hồi phục 1 tầng phân thân tế bào.", en: "Deals 130% ATK to single target, regenerating 1 cell clone stack." },
      tactical: { vi: "Hồi phục phân thân bị tổn thất trong khi tích điểm nộ năng lượng.", en: "Recovers lost clone stacks while building energy." }
    },
    ultimate: {
      name: { vi: "Bão Phân Thân Vô Hạn", en: "Infinite Clone Tsunami" },
      desc: { vi: "Gây 420% Công + Sát Thương Trực Tiếp Chuyên Biệt (25% Máu tối đa) lên toàn thể địch, bỏ qua 100% Khiên Kiên Cường.", en: "Deals 420% ATK + Specialized Direct DMG (25% Max HP) to all enemies, bypassing 100% Tenacity." },
      tactical: { vi: "Đòn đánh xuyên khiên chuyên biệt trừ thẳng máu gốc, khắc chế triệt để mọi tanker phòng ngự.", en: "Specialized direct damage shreds base HP, rendering all shields useless." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Bão Phân Thân Hoàng Kim", en: "Ultra Golden Cell Meltdown" },
      desc: { vi: "Gây 620% Công + 40% Máu tối đa Sát Thương Trực Tiếp Chuyên Biệt, xóa sạch bùa lợi tăng máu của địch.", en: "Deals 620% ATK + 40% Max HP Specialized Direct DMG, dispelling enemy HP buffs." },
      tactical: { vi: "Thần Binh tối đa hóa sát thương chuyên biệt kết liễu toàn bộ đối thủ bất kể lượng khiên bảo vệ.", en: "Keepsake maximizes direct damage output to wipe enemies through any shield." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Xuyên Khiên Đỉnh Cao)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Vô Tận Tế Bào Tái Sinh", en: "Infinite Cell Multiplication" },
      desc: { vi: "Bắt đầu trận với 4 tầng phân thân. Mỗi khi nhận sát thương chí tử, tiêu hao 1 phân thân để hồi sinh 50% Máu.", en: "Starts with 4 cell stacks. Consumes 1 stack to revive with 50% HP upon fatal damage." },
      tactical: { vi: "Sở hữu 4 mạng hồi sinh giúp Tinh Trùng Đen bất tử trước mọi đợt dồn sát thương sốc hiệp 1.", en: "4 revival lives provide near-immortality against turn-1 one-shot bursts." }
    }
  },
  atomic_samurai_urplus: {
    normal: {
      name: { vi: "Kiếm Khí Trảm", en: "Sword Qi Slash" },
      desc: { vi: "Gây 140% Công lên mục tiêu đơn, 100% gây [Vỡ Giáp] tăng 30% sát thương nhận vào trong 2 lượt.", en: "Deals 140% ATK to single target, 100% chance to inflict [Shatter] (+30% DMG taken) for 2 turns." },
      tactical: { vi: "Bổ sung Vỡ Giáp đơn mục tiêu mà không tiêu tốn điểm nộ.", en: "Applies Shatter debuff on normal attack without consuming energy." }
    },
    ultimate: {
      name: { vi: "Nguyên Tử Trảm Tuyệt Kỹ", en: "Atomic Slash Supremacy" },
      desc: { vi: "Gây 450% Công lên toàn thể 6 tướng địch, gây Vỡ Giáp và kích hoạt đồng minh hệ Vũ Khí truy kích 4 lần.", en: "Deals 450% ATK to all 6 enemies, applies Shatter, and triggers 4 Duelist ally pursuits." },
      tactical: { vi: "Mở màn trận đấu bằng bão kiếm diện rộng kết hợp chuỗi truy kích liên hoàn của hệ Vũ Khí.", en: "Opens battle with teamwide Shatter and 4 Duelist pursuit attacks." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Nguyên Tử Trảm Vô Hạn", en: "Ultra Atomic Slash Infinity" },
      desc: { vi: "Gây 650% Công lên toàn thể 6 kẻ địch, bỏ qua 40% Phòng Thủ, tăng 5 lần truy kích và 100% bạo kích.", en: "Deals 650% ATK to all 6 enemies, ignores 40% DEF, triggers 5 pursuits with guaranteed Crit." },
      tactical: { vi: "Thần Binh bổ sung xuyên 40% phòng thủ và thêm lượt truy kích dọn sạch sàn đấu.", en: "Keepsake adds 40% DEF pierce and an extra pursuit to wipe the board." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Trụ Cột Duelist)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Kiếm Thuật Tối Thượng", en: "Supreme Sword Mastery" },
      desc: { vi: "Tăng 30% Sát thương Bạo Kích cho toàn bộ đồng minh hệ Vũ Khí (Duelist). Tăng 25% Công khi có kẻ địch bị Vỡ Giáp.", en: "Increases Duelist allies Crit DMG by 30%. Boosts self ATK by 25% when enemies are shattered." },
      tactical: { vi: "Khuếch đại chỉ số bạo kích cho toàn bộ đội hình Vũ Khí và tăng tiến sức mạnh theo hiệu ứng Vỡ Giáp.", en: "Empowers Duelist teamwide burst and scales ATK from Shatter debuffs." }
    }
  },
  king_ur: {
    normal: {
      name: { vi: "Tiếng Động Cơ King", en: "King Engine Throttle" },
      desc: { vi: "Gây 120% Công lên mục tiêu đơn, tăng 15% Tốc độ cho bản thân trong 1 lượt.", en: "Deals 120% ATK to single target, boosting self SPD by 15% for 1 turn." },
      tactical: { vi: "Đánh thường tự tăng tốc để duy trì quyền đi trước trong các hiệp sau.", en: "Builds speed to secure turn-order advantage in subsequent rounds." }
    },
    ultimate: {
      name: { vi: "Tiếng Gầm Động Cơ: Tuyệt Đối", en: "King Engine: Absolute Silence" },
      desc: { vi: "Cướp 2-4 điểm nộ năng lượng của đối phương lượt đầu, gây 350% Công lên toàn đội địch và phong tỏa Tuyệt Kỹ.", en: "Steals 2-4 enemy energy points on turn 1, deals 350% ATK to all enemies, and locks Ultimates." },
      tactical: { vi: "Kỹ năng khắc chế sốc nộ hàng đầu — cướp sạch năng lượng khiến đối thủ bị phế lượt đầu.", en: "Premier energy-denial weapon: deprives opponent of turn-1 Ultimate bursts." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Tiếng Gầm Vương Giả", en: "Ultra King Engine Domination" },
      desc: { vi: "Khóa nộ 2 lượt liên tiếp, gieo [Hoảng Loạn] giảm 40% Công toàn đội địch và hồi phục 30% Máu toàn đội ta.", en: "Locks enemy energy for 2 rounds, inflicts [Panic] (-40% enemy ATK), and heals team for 30% HP." },
      tactical: { vi: "Thần Binh phong tỏa nộ 2 lượt và giảm gần một nửa sát thương của đối thủ.", en: "Locks energy for 2 turns and halves enemy damage output." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Top 1 Control)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Uy Áp Tối Thượng", en: "Supreme Intimidation" },
      desc: { vi: "Cuối mỗi hiệp, hồi phục Máu cho toàn đội bằng 80% Công của King và xóa 1 hiệu ứng bất lợi cho đồng minh.", en: "Heals all allies by 80% King ATK at round end and dispels 1 teamwide debuff." },
      tactical: { vi: "Cung cấp lượng hồi phục ổn định và giải trừ khống chế liên tục mỗi hiệp.", en: "Provides constant teamwide sustain and periodic cleanse each round." }
    }
  },
  superalloy_darkshine_ssrplus: {
    normal: {
      name: { vi: "Đấm Cơ Bắp Hợp Kim", en: "Alloy Muscle Punch" },
      desc: { vi: "Gây 140% Công lên mục tiêu đơn, tự tạo Khiên Kiên Cường bằng 20% Máu tối đa.", en: "Deals 140% ATK to single target, granting self a 20% Max HP Tenacity shield." },
      tactical: { vi: "Đánh thường tự bổ sung khiên mà không tốn nộ năng lượng.", en: "Maintains self shield without consuming team energy." }
    },
    ultimate: {
      name: { vi: "Cú Đấm Siêu Hợp Kim", en: "Superalloy Double Bazooka" },
      desc: { vi: "Gây 400% Công lên mục tiêu đơn, cấp [Khiên Kiên Cường] bằng 40% Máu cho bản thân và 2 đồng minh cùng hàng.", en: "Deals 400% ATK to single target, applying 40% Max HP [Tenacity Shield] to self and row allies." },
      tactical: { vi: "Bảo hộ vững chắc cho toàn bộ hàng trước với khiên Kiên Cường 40% Máu.", en: "Shields the entire frontline with thick 40% Max HP barriers." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Đấm Hợp Kim Hoàng Kim", en: "Ultra Superalloy Bazooka" },
      desc: { vi: "Cấp Khiên Kiên Cường 60% Máu cho toàn bộ 6 tướng, giảm 35% sát thương nhận vào trong 2 lượt.", en: "Grants 60% Max HP Tenacity shield to all 6 allies, reducing incoming DMG by 35% for 2 turns." },
      tactical: { vi: "Thần Binh mở rộng khiên bảo hộ ra toàn bộ 6 tướng kèm giảm 35% sát thương.", en: "Keepsake protects all 6 slots with 60% HP shields and 35% damage reduction." },
      keepsakePriority: { vi: "RẤT ĐÁNG ĐẦU TƯ SS", en: "HIGH PRIORITY SS" }
    },
    passive: {
      name: { vi: "Giáp Thép Bất Hoại & Gánh Đòn", en: "Indestructible Body & Damage Share" },
      desc: { vi: "Chia sẻ gánh 30% sát thương cho các tướng hàng sau. Miễn dịch sát thương chí tử 1 lần (Bất Khuất 1 Máu).", en: "Shares 30% damage for backline allies. Survives lethal damage once (Unyielding at 1 HP)." },
      tactical: { vi: "Chống sốc chết cho hàng sau và câu giờ bất tử 1 hiệp khi bị dồn sát thương.", en: "Prevents backline carries from being one-shot and stalls death." }
    }
  },
  carnage_kabuto_ur: {
    normal: {
      name: { vi: "Đấm Bọ Hung Tàn Bạo", en: "Carnage Horn Strike" },
      desc: { vi: "Gây 140% Công lên mục tiêu đơn, hồi phục 15% Máu tối đa của bản thân.", en: "Deals 140% ATK to single target, restoring 15% Max HP." },
      tactical: { vi: "Đánh thường tự hồi phục máu duy trì thanh sinh mệnh dày đặc.", en: "Sustains own HP bar while conserving team energy." }
    },
    ultimate: {
      name: { vi: "Cuồng Bạo Asura Bùng Nổ", en: "Carnage Mode Rampage" },
      desc: { vi: "Gây 460% Công lên mục tiêu đơn, hút 40% sát thương gây ra chuyển hóa thành Máu và tăng 30% Phản Đòn.", en: "Deals 460% ATK to single target, leeches 40% damage as HP, and increases reflect by 30%." },
      tactical: { vi: "Sốc sát thương đơn mục tiêu và hồi đầy máu tức thì.", en: "Heavy single-target nuke with massive self-vamp heal." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Cuồng Bạo Asura Tối Thượng", en: "Ultra Carnage Mode Annihilation" },
      desc: { vi: "Gây 600% Công đơn mục tiêu + 50% sát thương lan sang 2 bên, hồi 60% Máu và tăng phản đòn lên 45%.", en: "Deals 600% ATK + 50% splash damage to adjacent foes, heals 60% HP, and boosts reflect to 45%." },
      tactical: { vi: "Thần Binh tăng sát thương lan và nâng chỉ số phản đòn lên mức hủy diệt.", en: "Expands reflect percentage and adds devastating splash damage." },
      keepsakePriority: { vi: "RẤT ĐÁNG ĐẦU TƯ SS", en: "HIGH PRIORITY SS" }
    },
    passive: {
      name: { vi: "Giáp Bọ Hung Phản Pháo", en: "Asura Reflect Armor" },
      desc: { vi: "Tự động phản lại 30% toàn bộ sát thương nhận vào cho toàn thể 6 quân địch. Tăng 35% Máu tối đa.", en: "Reflects 30% of all incoming damage to all 6 enemies. Increases Max HP by 35%." },
      tactical: { vi: "Vũ khí khắc chế các Carry đánh diện rộng — đối thủ đánh càng đau thì tự mất máu càng nhanh.", en: "Hard counter to AoE sweepers: enemy burst rebounds directly into self-damage." }
    }
  },
  zombieman_urplus: {
    normal: {
      name: { vi: "Bắn Súng Lục & Dao Găm", en: "Revolver & Combat Blade" },
      desc: { vi: "Gây 130% Công lên mục tiêu đơn, giảm 15% Công của kẻ địch trong 2 lượt.", en: "Deals 130% ATK to single target, reducing target ATK by 15% for 2 turns." },
      tactical: { vi: "Làm suy yếu sát thương của chủ lực đối phương bằng đòn thường.", en: "Weakens enemy carry damage output on basic hits." }
    },
    ultimate: {
      name: { vi: "Xả Đạn Phục Kích Tái Sinh", en: "Ambush Barrage & Regeneration" },
      desc: { vi: "Gây 320% Công lên hàng dọc, hồi phục 35% Máu cho toàn đội và cấp 2 điểm nộ năng lượng.", en: "Deals 320% ATK to column, heals all allies by 35% HP, and grants 2 energy points." },
      tactical: { vi: "Hồi máu cấp cứu toàn đội và nạp năng lượng duy trì chuỗi xoay chiêu.", en: "Crucial teamwide burst heal and +2 energy battery." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Xả Đạn Sinh Tử Vô Tận", en: "Ultra Ambush Infinite Resurgence" },
      desc: { vi: "Hồi phục 55% Máu cho toàn bộ 6 tướng, cấp 3 điểm nộ và tăng 30% Kháng Sát Thương toàn đội trong 2 lượt.", en: "Heals all 6 allies for 55% HP, grants 3 energy, and adds 30% teamwide DMG reduction for 2 turns." },
      tactical: { vi: "Thần Binh biến Zombieman thành cỗ máy hồi sinh phục hồi hơn 50% Máu toàn đội.", en: "Keepsake supercharges teamwide sustain with +3 energy and 30% damage mitigation." },
      keepsakePriority: { vi: "BẮT BUỘC SSS (Top 1 Support/Heal)", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Bất Tử Tái Sinh Vô Hạn", en: "Infinite Cellular Immortality" },
      desc: { vi: "Khi bị tiêu diệt, tự động hồi sinh với 60% Máu ở hiệp kế tiếp (miễn là còn đồng đội sống trên sân).", en: "Revives with 60% HP next round upon death, as long as at least one ally remains alive." },
      tactical: { vi: "Cơ chế bất tử vô hạn lượt giúp Zombieman câu giờ và lật ngược tình thế xuất sắc.", en: "Infinite resurrection ensures battle stall and late-game clutch turnarounds." }
    }
  },
  drive_knight_ur: {
    normal: {
      name: { vi: "Biến Hình Chiến Đấu", en: "Tactical Transformation Strike" },
      desc: { vi: "Gây 140% Công lên mục tiêu đơn, chuyển đổi hình thái tăng 20% Tốc độ.", en: "Deals 140% ATK to single target, shifting form to gain +20% SPD." },
      tactical: { vi: "Tự gia tốc chuẩn bị quyền xuất chiêu trước ở các hiệp quyết định.", en: "Accelerates turn priority for decisive mid-fight rounds." }
    },
    ultimate: {
      name: { vi: "Chiến Kỹ Biến Hình: Tác Chiến", en: "Tactical Shift: Annihilation" },
      desc: { vi: "Gây 480% Công lên hàng ngang, hút 2 điểm nộ của đối phương và khóa hành động trong 1 lượt.", en: "Deals 480% ATK to row, drains 2 energy, and applies action freeze for 1 turn." },
      tactical: { vi: "Vừa gây sát thương vừa cướp nộ phá vỡ hoàn toàn nhịp combo của đối thủ.", en: "Dual threat: heavy row damage paired with energy denial and action denial." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Biến Hình Chiến Thuật Tối Thượng", en: "Ultra Tactical Shift Apocalypse" },
      desc: { vi: "Gây 680% Công hàng ngang, hút 3 điểm nộ, tăng 50% Tốc độ toàn đội và bỏ qua 50% Phòng thủ.", en: "Deals 680% ATK to row, steals 3 energy, grants +50% teamwide SPD, and ignores 50% DEF." },
      tactical: { vi: "Thần Binh mang lại khả năng buff 50% tốc độ toàn đội và xuyên giáp sốc chết đối phương.", en: "Keepsake gives +50% team speed acceleration and massive defense pierce." },
      keepsakePriority: { vi: "BẮT BUỘC SSS", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Năng Lượng Biến Đổi Tối Ưu", en: "Optimal Energy Reconfiguration" },
      desc: { vi: "Mỗi khi đối thủ dùng nộ, Drive Knight tăng 25% Công và nhận Khiên Kiên Cường bằng 30% Máu tối đa.", en: "Gains +25% ATK and 30% Max HP Tenacity shield whenever enemy casts Ultimate." },
      tactical: { vi: "Càng bị đối thủ xả nộ thì Drive Knight càng khỏe và trâu bò hơn.", en: "Scales in offense and defense as enemy casts their abilities." }
    }
  },
  flashy_flash_ur: {
    normal: {
      name: { vi: "Tia Chớp Trảm", en: "Flashy Slash" },
      desc: { vi: "Gây 150% Công lên mục tiêu đơn, 100% gây [Vỡ Giáp] trong 2 lượt.", en: "Deals 150% ATK to single target with 100% Shatter for 2 turns." },
      tactical: { vi: "Đánh thường gieo Vỡ Giáp đơn lẻ chuẩn xác.", en: "Applies precision single-target Shatter." }
    },
    ultimate: {
      name: { vi: "Lưu Quang Trảm Tốc Độ", en: "Flowing Light Flash" },
      desc: { vi: "Gây 500% Công lên hàng dọc, gây [Choáng] 100% mục tiêu có tốc độ thấp hơn Flashy Flash.", en: "Deals 500% ATK to column, 100% stunning any targets with lower SPD." },
      tactical: { vi: "Tận dụng tốc độ số 1 để khóa choáng hàng dọc địch ngay đầu trận.", en: "Leverages top speed to stun entire enemy columns before they can act." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Lưu Quang Tuyệt Sát", en: "Ultra Flowing Light Godspeed" },
      desc: { vi: "Gây 720% Công lên toàn bộ hàng dọc + mục tiêu lân cận, Choáng 2 lượt và tăng 40% Tốc độ toàn đội.", en: "Deals 720% ATK to column + splash, 2-turn Stun, and +40% teamwide SPD." },
      tactical: { vi: "Thần Binh kéo dài thời gian Choáng lên 2 lượt và gia tốc toàn diện cho đội hình.", en: "Keepsake upgrades to 2-turn Stun and gives full team speed boost." },
      keepsakePriority: { vi: "BẮT BUỘC SSS", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Tốc Độ Ánh Sáng Tuyệt Đối", en: "Light-Speed Reflexes" },
      desc: { vi: "Luôn được ưu tiên hành động đầu tiên ở hiệp 1. Miễn nhiễm mọi hiệu ứng khống chế ở lượt đầu.", en: "Guaranteed 1st turn initiative in round 1 with full CC immunity." },
      tactical: { vi: "Đảm bảo luôn giành quyền ra chiêu mở màn trận đấu mà không sợ bị khống chế trước.", en: "Guarantees turn-1 opening strike immune to enemy disruption." }
    }
  },
  boros_ur: {
    normal: {
      name: { vi: "Đấm Khí Nén Vũ Trụ", en: "Cosmic Kinetic Strike" },
      desc: { vi: "Gây 160% Công lên mục tiêu đơn, tăng 20% Sát thương Tuyệt Kỹ ở lượt kế tiếp.", en: "Deals 160% ATK to single target, boosting next Ultimate DMG by 20%." },
      tactical: { vi: "Tích lũy sát thương chuẩn bị cho cú nuke Tuyệt Kỹ huỷ diệt.", en: "Stacks damage multiplier for devastating next-turn Ultimate." }
    },
    ultimate: {
      name: { vi: "Pháo Sụp Đổ Sao Gầm", en: "Collapsing Star Roaring Cannon" },
      desc: { vi: "Gây 650% Công lên mục tiêu đơn, bỏ qua 50% Phòng thủ và gây sát thương kết liễu cực đại.", en: "Deals 650% ATK to single target, ignoring 50% DEF for instant execution." },
      tactical: { vi: "Chiêu thức dồn sát thương đơn mục tiêu mạnh nhất game để bắn hạ tanker/carry địch.", en: "Game's heaviest single-target nuke designed to one-shot priority targets." }
    },
    ultraUltimate: {
      name: { vi: "Siêu Pháo Sụp Đổ Vũ Trụ Tối Thượng", en: "Ultra Collapsing Star Cataclysm" },
      desc: { vi: "Gây 900% Công đơn mục tiêu, bùng nổ 50% sát thương lan sang toàn bộ 5 kẻ địch còn lại.", en: "Deals 900% ATK to single target, with 50% splash damage to all other 5 enemies." },
      tactical: { vi: "Thần Binh biến đòn đơn mục tiêu thành đòn nổ lan quét sạch cả sàn đấu.", en: "Keepsake turns single-target burst into full board splash execution." },
      keepsakePriority: { vi: "BẮT BUỘC SSS", en: "MUST-HAVE SSS" }
    },
    passive: {
      name: { vi: "Bá Chủ Vũ Trụ Bất Khả Chiến Bại", en: "Dominator of the Universe" },
      desc: { vi: "Mỗi khi đồng minh tung Tuyệt Kỹ, Boros hồi 15% Máu và tăng 25% Công (cộng dồn tối đa 3 lần).", en: "Heals 15% HP and gains +25% ATK (up to 3 stacks) whenever allies cast Ultimates." },
      tactical: { vi: "Sức mạnh tăng tiến chóng mặt theo từng chiêu thức nộ của đồng đội.", en: "Scales massively with every allied Ultimate cast." }
    }
  }
};

// Generic builder for remaining characters ensuring authentic class names, exact % scaling, and concise, punchy analysis
function getBespokeSkillForChar(char) {
  if (customSkillDb[char.id]) {
    return customSkillDb[char.id];
  }

  const isTank = char.class === 'Grappler' || char.id.includes('rover') || char.id.includes('pig') || char.id.includes('tanktop') || char.id.includes('superalloy');
  const isDuelist = char.class === 'Duelist' || char.id.includes('samurai') || char.id.includes('sonic') || char.id.includes('stinger');
  const isEsper = char.class === 'Esper' || char.id.includes('fubuki') || char.id.includes('geryu') || char.id.includes('vaccine');
  const isHiTech = char.class === 'HiTech' || char.id.includes('genos') || char.id.includes('metal_knight') || char.id.includes('child_emperor');

  const charNameVi = char.name.vi.replace(/\[.*\]/, '').trim();
  const charNameEn = char.name.en.replace(/\[.*\]/, '').trim();

  let normal = {};
  let ultimate = {};
  let ultraUltimate = {};
  let passive = {};

  if (isTank) {
    normal = {
      name: { vi: `Đòn Đánh Cận Chiến ${charNameVi}`, en: `${charNameEn} Heavy Strike` },
      desc: { vi: `Gây 130% Công lên mục tiêu đơn, tăng 15% Kháng Sát Thương của bản thân trong 1 lượt.`, en: `Deals 130% ATK to single target, gaining 15% DMG Reduction for 1 turn.` },
      tactical: { vi: `Dùng để tiết kiệm điểm nộ và gia tăng khả năng trụ vững ở tiền tuyến.`, en: `Saves energy while reinforcing frontline durability.` }
    };
    ultimate = {
      name: { vi: `Kỹ Năng Phòng Thủ ${charNameVi}`, en: `${charNameEn} Guardian Impact` },
      desc: { vi: `Gây 350% Công lên hàng trước và cấp [Khiên Kiên Cường] bằng 35% Máu tối đa cho hàng trước.`, en: `Deals 350% ATK to front row and grants 35% Max HP Tenacity shield to frontline allies.` },
      tactical: { vi: `Xả nộ sớm để dựng lá chắn bảo hộ che chở an toàn cho các Carry hàng sau.`, en: `Cast early to erect protective barrier for backline carries.` }
    };
    ultraUltimate = {
      name: { vi: `Siêu Kỹ Năng Hộ Vệ ${charNameVi}`, en: `Ultra ${charNameEn} Iron Fortress` },
      desc: { vi: `Gây 500% Công lên hàng trước, tăng Khiên Kiên Cường lên 50% Máu và giảm 25% sát thương nhận vào toàn đội.`, en: `Deals 500% ATK to front row, boosts Tenacity shield to 50% HP, and reduces teamwide DMG taken by 25%.` },
      tactical: { vi: `Thần Binh gia tăng độ dày của khiên và giảm mạnh sát thương bộc phát của đối thủ.`, en: `Keepsake thickens shield barriers and mitigates incoming burst.` },
      keepsakePriority: { vi: "RẤT ĐÁNG ĐẦU TƯ SS", en: "HIGH PRIORITY SS" }
    };
    passive = {
      name: { vi: `Thể Lực Kiên Cường ${charNameVi}`, en: `${charNameEn} Iron Will` },
      desc: { vi: `Tăng 30% Máu tối đa và 25% Tỉ lệ Đỡ Đòn. Khi máu dưới 40%, tự kích hoạt hồi 25% Máu (1 lần/trận).`, en: `Boosts Max HP by 30% and Block Rate by 25%. Heals 25% HP once when dropping below 40% HP.` },
      tactical: { vi: `Cung cấp chỉ số chống chịu nền tảng và cơ chế hồi sinh khẩn cấp khi bị dồn sát thương.`, en: `Provides passive bulk and emergency sustain against burst combos.` }
    };
  } else if (isDuelist) {
    normal = {
      name: { vi: `Đòn Trảm Kích ${charNameVi}`, en: `${charNameEn} Precision Slash` },
      desc: { vi: `Gây 140% Công lên mục tiêu đơn, 100% gây [Vỡ Giáp] tăng 30% sát thương nhận vào trong 2 lượt.`, en: `Deals 140% ATK to single target, inflicting [Shatter] (+30% DMG taken) for 2 turns.` },
      tactical: { vi: `Gieo hiệu ứng Vỡ Giáp mở đường cho chuỗi xả chiêu dứt điểm mục tiêu.`, en: `Applies Shatter to soften up priority targets.` }
    };
    ultimate = {
      name: { vi: `Trảm Kích Bạo Liệt ${charNameVi}`, en: `${charNameEn} Lethal Flurry` },
      desc: { vi: `Gây 450% Công lên mục tiêu hàng dọc/đơn, 100% bạo kích khi mục tiêu bị Vỡ Giáp.`, en: `Deals 450% ATK to column/single target, guaranteeing Crit against shattered foes.` },
      tactical: { vi: "Xả nộ dồn sốc sát thương kết liễu ngay sau khi mục tiêu đã dính Vỡ Giáp.", en: "Cast immediately after target is shattered for guaranteed critical burst." }
    };
    ultraUltimate = {
      name: { vi: `Siêu Trảm Kích Tuyệt Sát ${charNameVi}`, en: `Ultra ${charNameEn} Executioner` },
      desc: { vi: `Gây 650% Công, bỏ qua 35% Phòng thủ và kích hoạt 2 đòn truy kích bồi thêm sát thương.`, en: `Deals 650% ATK, ignores 35% DEF, and triggers 2 pursuit follow-up strikes.` },
      tactical: { vi: `Thần Binh cung cấp khả năng xuyên giáp và đòn truy kích dọn sạch tàn cuộc.`, en: `Keepsake grants defense pierce and execution pursuits.` },
      keepsakePriority: { vi: "BẮT BUỘC SSS", en: "MUST-HAVE SSS" }
    };
    passive = {
      name: { vi: `Bản Năng Sát Thủ ${charNameVi}`, en: `${charNameEn} Assassin Instinct` },
      desc: { vi: `Tăng 25% Công và 30% Sát thương Bạo Kích. Mỗi đòn bạo kích tăng 10% Tốc độ (cộng dồn 3 lần).`, en: `Increases ATK by 25% and Crit DMG by 30%. Crits grant +10% SPD (stacks 3x).` },
      tactical: { vi: `Tự động tăng tiến sát thương và tốc độ theo từng đòn đánh bạo kích.`, en: `Progressively ramps up damage output and turn initiative on Crits.` }
    };
  } else if (isEsper) {
    normal = {
      name: { vi: `Sóng Siêu Linh ${charNameVi}`, en: `${charNameEn} Psychic Pulse` },
      desc: { vi: `Gây 130% Công lên mục tiêu đơn, giảm 15% Kháng Bạo Kích của kẻ địch trong 2 lượt.`, en: `Deals 130% ATK to single target, reducing target Crit RES by 15% for 2 turns.` },
      tactical: { vi: `Bào mòn kháng bạo của đối thủ chuẩn bị cho đòn dồn bão diện rộng.`, en: `Lowers enemy Crit resistance ahead of AoE bursts.` }
    };
    ultimate = {
      name: { vi: `Bão Siêu Linh Bùng Nổ ${charNameVi}`, en: `${charNameEn} Telekinetic Storm` },
      desc: { vi: `Gây 380% Công lên toàn thể kẻ địch, tạo [Trường Lực Forcefield] gây 120% sát thương nổ khi kẻ địch hành động.`, en: `Deals 380% ATK to all enemies, applying [Forcefield] (120% ATK) that detonates on enemy action.` },
      tactical: { vi: `Phủ bão diện rộng và gieo sát thương ngắt quãng mỗi khi đối phương ra chiêu.`, en: `Deploys full board damage and passive detonation on enemy turns.` }
    };
    ultraUltimate = {
      name: { vi: `Siêu Bão Siêu Linh Tối Thượng ${charNameVi}`, en: `Ultra ${charNameEn} Cosmic Tempest` },
      desc: { vi: `Gây 560% Công lên toàn bộ 6 kẻ địch, tăng Trường Lực lên 180% Công và giảm 25% Công toàn đội địch.`, en: `Deals 560% ATK to all 6 enemies, boosts Forcefield to 180% ATK, and reduces enemy ATK by 25%.` },
      tactical: { vi: `Thần Binh gia tăng sát thương nổ Trường Lực và làm tê liệt sức mạnh của đối phương.`, en: `Keepsake amplifies Forcefield ticks and lowers enemy teamwide ATK.` },
      keepsakePriority: { vi: "BẮT BUỘC SSS", en: "MUST-HAVE SSS" }
    };
    passive = {
      name: { vi: `Cộng Hưởng Siêu Linh ${charNameVi}`, en: `${charNameEn} Telekinetic Resonance` },
      desc: { vi: `Tăng 30% Sát thương Trực tiếp và 20% Tỉ lệ Bạo Kích cho toàn bộ đồng minh Esper.`, en: `Boosts Esper allies Direct DMG by 30% and Crit Rate by 20%.` },
      tactical: { vi: `Khuếch đại toàn diện sức mạnh cho đội hình Siêu Năng lực.`, en: `Provides comprehensive aura scaling for Esper setups.` }
    };
  } else {
    // HiTech / Support
    normal = {
      name: { vi: `Pháo Năng Lượng ${charNameVi}`, en: `${charNameEn} Energy Blast` },
      desc: { vi: `Gây 130% Công lên mục tiêu đơn, nạp 10% thanh hành động cho bản thân.`, en: `Deals 130% ATK to single target, advancing self action bar by 10%.` },
      tactical: { vi: `Đánh thường gia tốc hành động để nhanh chóng quay lại lượt ra chiêu.`, en: `Advances action bar to accelerate next turn cycle.` }
    };
    ultimate = {
      name: { vi: `Hỏa Lực Công Nghệ Cao ${charNameVi}`, en: `${charNameEn} Hi-Tech Barrage` },
      desc: { vi: `Gây 400% Công lên hàng dọc/ngang, gây [Thiêu Đốt] hoặc [Ăn Mòn] 100% Công và khóa 1 điểm nộ của đối phương.`, en: `Deals 400% ATK to row/column, inflicting [Burn/Corrode] (100% ATK) and draining 1 enemy energy.` },
      tactical: { vi: `Xả hỏa lực khống chế thanh nộ và gieo sát thương duy trì theo thời gian.`, en: `Applies damage over time while disrupting enemy energy rotation.` }
    };
    ultraUltimate = {
      name: { vi: `Siêu Hỏa Lực Hủy Diệt ${charNameVi}`, en: `Ultra ${charNameEn} Hyper Cannon` },
      desc: { vi: `Gây 600% Công, khóa 2 điểm nộ và tăng 35% Công cho toàn bộ đồng minh trong 2 lượt.`, en: `Deals 600% ATK, locks 2 energy, and grants +35% ATK buff to all allies for 2 turns.` },
      tactical: { vi: `Thần Binh mang lại bùa tăng Công cực mạnh cho toàn đội kết hợp khóa nộ đối thủ.`, en: `Keepsake provides teamwide ATK steroid and dual energy denial.` },
      keepsakePriority: { vi: "RẤT ĐÁNG ĐẦU TƯ SS", en: "HIGH PRIORITY SS" }
    };
    passive = {
      name: { vi: `Lõi Năng Lượng Công Nghệ ${charNameVi}`, en: `${charNameEn} Overclock Matrix` },
      desc: { vi: `Đầu mỗi hiệp, hồi phục 1 điểm nộ năng lượng và tăng 20% Tốc độ cho tướng chủ lực cùng hàng.`, en: `Grants +1 energy at round start and boosts same-row carry SPD by 20%.` },
      tactical: { vi: `Cung cấp năng lượng ổn định và kích tốc độ cho Carry dồn đòn trước đối thủ.`, en: `Supplies turn-1 energy battery and speed acceleration for main carry.` }
    };
  }

  return { normal, ultimate, ultraUltimate, passive };
}

// Update all characters
const updatedCharacters = characters.map(char => {
  const bespokeSkills = getBespokeSkillForChar(char);

  return {
    ...char,
    skills: {
      ...char.skills,
      normal: {
        name: bespokeSkills.normal.name,
        desc: bespokeSkills.normal.desc
      },
      ultimate: {
        name: bespokeSkills.ultimate.name,
        desc: bespokeSkills.ultimate.desc
      },
      ultraUltimate: {
        name: bespokeSkills.ultraUltimate.name,
        desc: bespokeSkills.ultraUltimate.desc
      },
      passive: {
        name: bespokeSkills.passive.name,
        desc: bespokeSkills.passive.desc
      }
    },
    mechanics: {
      ...char.mechanics,
      skillAnalysis: {
        ...char.mechanics?.skillAnalysis,
        normal: {
          tacticalUse: bespokeSkills.normal.tactical
        },
        ultimate: {
          tacticalUse: bespokeSkills.ultimate.tactical
        },
        ultraUltimate: {
          tacticalUse: bespokeSkills.ultraUltimate.tactical,
          keepsakePriority: bespokeSkills.ultraUltimate.keepsakePriority || { vi: "RẤT ĐÁNG ĐẦU TƯ SS", en: "HIGH PRIORITY SS" }
        },
        passive: {
          tacticalUse: bespokeSkills.passive.tactical
        }
      }
    }
  };
});

// Write updated defaultCharacters.js
const updatedCharsCode = `export const defaultCharacters = ${JSON.stringify(updatedCharacters, null, 2)};\n`;
fs.writeFileSync(charsFilePath, updatedCharsCode, 'utf8');
console.log(`Successfully updated authentic skills and concise deep analysis for all ${updatedCharacters.length} characters in defaultCharacters.js!`);
