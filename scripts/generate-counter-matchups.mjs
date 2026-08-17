import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charsFilePath = path.resolve(__dirname, '../src/data/defaultCharacters.js');
const rawChars = fs.readFileSync(charsFilePath, 'utf8');
const characters = JSON.parse(rawChars.match(/export const defaultCharacters = (\[[\s\S]*\]);?/)[1]);

console.log(`Loaded ${characters.length} characters to generate Counter Teams and Counter Heroes.`);

function buildCounterMatchups(char) {
  const isTank = char.class === 'Grappler' || char.id.includes('darkshine') || char.id.includes('superalloy') || char.id.includes('rover') || char.id.includes('pig_god') || char.id.includes('tank_top');
  const isCarry = char.class === 'Duelist' || char.id.includes('saitama') || char.id.includes('tatsumaki') || char.id.includes('atomic') || char.id.includes('garou') || char.id.includes('boros') || char.id.includes('sonic');
  const isEsper = char.class === 'Esper';
  const isControlOrSupport = char.class === 'HiTech' || char.id.includes('king') || char.id.includes('genus') || char.id.includes('child_emperor');

  let counteredByHeroes = [];
  let countersHeroes = [];
  let counteredByTeams = [];
  let countersTeams = [];
  let survivalProTip = { vi: '', en: '' };

  if (char.id.includes('saitama')) {
    counteredByHeroes = [
      {
        heroId: "carnage_kabuto_ur",
        reason: {
          vi: "Phản 30% sát thương cực đại khiến đòn đấm sốc dame bị phản ngược lại lượng máu lớn.",
          en: "Reflects 30% of incoming damage, returning massive burst back to Saitama."
        }
      },
      {
        heroId: "king_ur",
        reason: {
          vi: "Cướp sạch nộ năng lượng lượt 1 khiến Saitama phải đánh thường thay vì tung Đấm Nghiêm Túc.",
          en: "Steals turn-1 ultimate energy, forcing Saitama to use normal attacks instead of Serious Punch."
        }
      }
    ];
    countersHeroes = [
      {
        heroId: "superalloy_darkshine_ssrplus",
        reason: {
          vi: "Bỏ qua 50% phòng thủ và xóa sạch mọi tầng Bất Khuất câu giờ của Darkshine.",
          en: "Ignores 50% DEF and strips all Unyielding immortality layers instantly."
        }
      },
      {
        heroId: "overgrown_rover_urplus",
        reason: {
          vi: "Phá tan lớp khiên bảo hộ hàng trước và tiêu diệt mục tiêu chỉ trong 1 đòn duy nhất.",
          en: "Shatters frontline defense shields and executes the target in a single hit."
        }
      }
    ];
    counteredByTeams = [
      {
        teamName: { vi: "Đội Hình Siêu Phản Đòn Tu La & Bất Tử", en: "Carnage Kabuto Reflect & Immortality Stall" },
        core: "Carnage Kabuto UR & Zombieman UR+",
        reason: {
          vi: "Lối chơi câu giờ phản dame biến sức mạnh tấn công khổng lồ thành con dao hai lưỡi tự sát thương bản thân.",
          en: "Reflect stall mechanics convert extreme burst power into lethal self-damage."
        }
      }
    ];
    countersTeams = [
      {
        teamName: { vi: "Đội Hình Bất Khuất & Khiên Kiên Cường Cũ", en: "Classic Tenacity Shield & Unyielding Comps" },
        core: "Darkshine SSR+ & Tank Top Master",
        reason: {
          vi: "Đấm Nghiêm Túc xuyên thẳng qua cơ chế Bất Khuất và vô hiệu hóa mọi loại giáp hộ thân.",
          en: "Serious Punch bypasses Unyielding entirely and dismantles heavy defense barriers."
        }
      }
    ];
    survivalProTip = {
      vi: "Lắp set Hiệp Sĩ (Knight) kết hợp Tăng Lữ (Monk) để đẩy tốc độ đi trước King đối phương, và kẹp thêm Zombieman để hồi máu khi bị phản dame.",
      en: "Equip Knight + Monk set to outspeed enemy King, and pair with Zombieman for post-reflect sustain."
    };
  } else if (char.id.includes('blacksperm')) {
    counteredByHeroes = [
      {
        heroId: "king_ur",
        reason: {
          vi: "Cướp nộ khiến không thể tung Tuyệt Kỹ nhân bản phân thân lượt 1.",
          en: "Drains turn-1 energy preventing clone multiplication burst."
        }
      },
      {
        heroId: "ur_saitama",
        reason: {
          vi: "Xóa sạch bùa lợi tăng máu của Gyoro và sốc chết phân thân trước khi kịp bào mòn.",
          en: "Dispels Gyoro HP buffs and nukes clones before they can execute direct chipping."
        }
      }
    ];
    countersHeroes = [
      {
        heroId: "superalloy_darkshine_ssrplus",
        reason: {
          vi: "Sát thương trực tiếp chuyên biệt xuyên thẳng qua khiên Kiên Cường của Darkshine.",
          en: "Specialized Direct Damage bypasses Darkshine's massive Tenacity shields completely."
        }
      },
      {
        heroId: "bang_ssrplus",
        reason: {
          vi: "Bào mòn thanh máu gốc khiến cơ chế đỡ đòn của Bang mất tác dụng.",
          en: "Chips straight into base HP, rendering Bang's block mechanics useless."
        }
      }
    ];
    counteredByTeams = [
      {
        teamName: { vi: "Đội Hình Tốc Độ Sốc Sát Thương Lượt 1 (Bomb Burst)", en: "Bomb Core Turn-1 Blitzkrieg" },
        core: "Bomb Core & UR Saitama",
        reason: {
          vi: "Đối thủ cướp tốc độ đi trước quét sạch đội hình quái vật trước khi Tinh Trùng Đen kịp phân thân.",
          en: "Fast burst comps wipe monster allies before Black Sperm can establish full clone presence."
        }
      }
    ];
    countersTeams = [
      {
        teamName: { vi: "Đội Hình Siêu Chống Chịu & Khiên Hộ Thân", en: "Super Tenacity Shield & Damage Soak Comps" },
        core: "Bomb Core & Darkshine",
        reason: {
          vi: "Cơ chế Specialized Direct DMG trừ thẳng máu gốc bỏ qua 100% lớp khiên dày đặc của đối phương.",
          en: "Specialized Direct DMG ignores 100% of the enemy's thick tenacity barriers."
        }
      }
    ];
    survivalProTip = {
      vi: "Luôn đi cùng Gyoro-Gyoro UR để nhận +80% Máu tối đa, giúp phân thân sống sót qua đợt càn quét lượt 1 của đối thủ.",
      en: "Always pair with Gyoro-Gyoro UR for +80% Max HP so clones survive turn-1 enemy nukes."
    };
  } else if (isTank) {
    counteredByHeroes = [
      {
        heroId: "black_sperm_urplus",
        reason: {
          vi: "Sát thương trực tiếp chuyên biệt đánh thẳng vào máu xuyên qua toàn bộ khiên phòng thủ.",
          en: "Specialized Direct Damage bypasses all defensive shields and damages base HP."
        }
      },
      {
        heroId: "ur_saitama",
        reason: {
          vi: "Xuyên Bất Khuất và bỏ qua 50% Phòng Thủ khiến tanker bị dồn sốc chết ngay.",
          en: "Bypasses Unyielding and ignores 50% DEF, executing tanks rapidly."
        }
      }
    ];
    countersHeroes = [
      {
        heroId: "atomic_samurai_urplus",
        reason: {
          vi: "Chỉ số Đỡ Đòn và Máu khổng lồ giúp chặn đứng các đòn chém diện rộng.",
          en: "High HP and Block Rate absorb atomic slash physical bursts effectively."
        }
      },
      {
        heroId: "golden_ball_sr",
        reason: {
          vi: "Hút toàn bộ đạn bắn của đối phương che chở an toàn cho 3 tướng hàng sau.",
          en: "Soaks incoming bullet barrages to safeguard backline carries."
        }
      }
    ];
    counteredByTeams = [
      {
        teamName: { vi: "Đội Hình Sát Thương Trực Tiếp Chuyên Biệt (Specialized Direct DMG)", en: "Specialized Direct DMG Burn Comps" },
        core: "Gyoro Core & Black Sperm UR+",
        reason: {
          vi: "Đội hình đánh xuyên khiên khiến chỉ số phòng ngự và khiên kiên cường bị vô hiệu hóa.",
          en: "Direct damage setups render heavy armor and tenacity barriers completely ineffective."
        }
      }
    ];
    countersTeams = [
      {
        teamName: { vi: "Đội Hình Sát Thương Vật Lý Thông Thường", en: "Standard Physical AoE Comps" },
        core: "Atomic Samurai & Golden Ball",
        reason: {
          vi: "Khả năng giảm sát thương và phản đòn khiến đối thủ không thể xuyên qua tiền tuyến.",
          en: "Damage reduction and block counters halt conventional physical assaults."
        }
      }
    ];
    survivalProTip = {
      vi: "Trang bị 4 món set Âu Phục (Suit) để vừa tăng Máu vừa phản lại 20% sát thương cho kẻ tấn công.",
      en: "Equip 4-piece Suit gear to maximize HP scaling and reflect 20% incoming damage."
    };
  } else if (isEsper) {
    counteredByHeroes = [
      {
        heroId: "carnage_kabuto_ur",
        reason: {
          vi: "Đòn đánh diện rộng 6 ô bị dội ngược 30% sát thương từ Tu La Bọ Hung.",
          en: "Full 6-target AoE gets heavily punished by Carnage Kabuto's 30% reflect."
        }
      },
      {
        heroId: "king_ur",
        reason: {
          vi: "Cướp nộ khiến không thể phủ bão Trường Lực lên toàn đội hình địch.",
          en: "Energy lock prevents casting full-field Forcefields on turn 1."
        }
      }
    ];
    countersHeroes = [
      {
        heroId: "amai_mask_urplus",
        reason: {
          vi: "Trường Lực nổ liên tục khi địch hành động khiến sát thủ hàng sau bị tiêu diệt trước khi kịp ám sát.",
          en: "Forcefield detonates on enemy action, deleting squishy assassins before they strike."
        }
      },
      {
        heroId: "golden_ball_sr",
        reason: {
          vi: "Sát thương bão quét sạch các đơn vị máu giấy của địch trong vòng 1-2 lượt.",
          en: "Massive AoE cleanses frail backline rangers in 1-2 rounds."
        }
      }
    ];
    counteredByTeams = [
      {
        teamName: { vi: "Đội Hình Phản Sát Thương & Khóa Nộ (Reflect Energy Denial)", en: "Reflect & Energy Denial Meta" },
        core: "King UR & Carnage Kabuto UR",
        reason: {
          vi: "Vừa bị cướp nộ không thể ra chiêu vừa bị phản dame tự sát thương khi xả kỹ năng diện rộng.",
          en: "Stripped of energy while suffering severe self-damage from reflect units."
        }
      }
    ];
    countersTeams = [
      {
        teamName: { vi: "Đội Hình Máu Giấy Thiếu Tanker Bảo Kê", en: "Fragile Hyper-Carry Comps Without Sustain" },
        core: "Standard F2P / Glass Cannon",
        reason: {
          vi: "Bão sát thương diện rộng và Trường Lực tiêu diệt toàn bộ 6 vị trí của địch đồng loạt.",
          en: "Overwhelming AoE and Forcefields annihilate unprotected enemy ranks simultaneously."
        }
      }
    ];
    survivalProTip = {
      vi: "Trang bị set Hiệp Sĩ (Knight) hoặc Tia Chớp (Lightning) và kẹp thêm Tanker có khiên chia sẻ sát thương để tránh chết do phản dame.",
      en: "Use Knight or Lightning gear and deploy damage-share tanks to survive reflect backlash."
    };
  } else {
    // Standard Duelist / HiTech / Support
    counteredByHeroes = [
      {
        heroId: "flashy_flash_ur",
        reason: {
          vi: "Tốc độ vượt trội cướp lượt đầu và gây choáng làm gián đoạn chuỗi combo.",
          en: "Superior speed seizes turn 1 and stuns, disrupting skill rotation."
        }
      },
      {
        heroId: "ur_saitama",
        reason: {
          vi: "Sốc sát thương đơn mục tiêu cực mạnh xóa sổ ngay trong hiệp đầu.",
          en: "Overwhelming single-target burst eliminates the hero on round 1."
        }
      }
    ];
    countersHeroes = [
      {
        heroId: "armored_gorilla_sr",
        reason: {
          vi: "Bắn Vỡ Giáp hoặc dồn dame bỏ qua lá chắn bảo vệ của khỉ đột.",
          en: "Applies Shatter and breaks through guard shields quickly."
        }
      },
      {
        heroId: "mumen_rider_r",
        reason: {
          vi: "Khống chế hoặc kết liễu hỗ trợ của địch trước khi kịp buff tốc độ.",
          en: "Controls or snipes enemy support before they can execute speed buffs."
        }
      }
    ];
    counteredByTeams = [
      {
        teamName: { vi: "Đội Hình Tốc Độ Cao Sốc Sát Thương Lượt 1", en: "Turn-1 High-Speed Burst Meta" },
        core: "Drive Knight UR & Sonic V2 UR",
        reason: {
          vi: "Đối thủ đi trước dồn hỏa lực kết liễu trước khi kịp kích hoạt hiệu ứng phụ trợ.",
          en: "Faster opponents wipe priority targets before supportive perks take effect."
        }
      }
    ];
    countersTeams = [
      {
        teamName: { vi: "Đội Hình Tốc Độ Chậm Thiếu Khống Chế", en: "Slow Sustain Comps Without Disruption" },
        core: "Standard Tanker Comps",
        reason: {
          vi: "Dễ dàng giành quyền đi trước để gieo hiệu ứng bất lợi và điều tiết nhịp độ trận đấu.",
          en: "Easily captures turn order to dictate the battle pace with debuffs."
        }
      }
    ];
    survivalProTip = {
      vi: "Ưu tiên đúc dòng phụ Tốc Độ (SPD) trên cả 4 món trang bị để đảm bảo xuất chiêu trước đối phương.",
      en: "Prioritize Speed (SPD) substats on all 4 gear pieces to secure turn-order advantage."
    };
  }

  return {
    counteredByHeroes,
    countersHeroes,
    counteredByTeams,
    countersTeams,
    survivalProTip
  };
}

// Inject counterMatchups into all characters
const updatedCharacters = characters.map(char => {
  const counterData = buildCounterMatchups(char);
  return {
    ...char,
    counterMatchups: counterData
  };
});

// Write updated defaultCharacters.js
const updatedCharsCode = `export const defaultCharacters = ${JSON.stringify(updatedCharacters, null, 2)};\n`;
fs.writeFileSync(charsFilePath, updatedCharsCode, 'utf8');
console.log(`Successfully generated Counter Teams and Counter Heroes for all ${updatedCharacters.length} heroes in defaultCharacters.js!`);
