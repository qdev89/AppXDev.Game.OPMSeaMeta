export const defaultNewbieGuide = {
  roadmap: [
    {
      day: "Day 1 - 3",
      title: { en: "Starter Push & Level 30 Unlock", vi: "Vượt Ải Khởi Đầu & Mở Khóa Cấp 30" },
      focus: {
        en: "Focus on Main Story Exploration to reach Lv.30 ASAP. Unlock Daily Quests, Stamina refills, and Arena.",
        vi: "Tập trung vượt Ải Chính tuyến nhanh nhất để đạt Lv 30. Mở khóa Nhiệm Vụ Hàng Ngày, mua Thể Lực và Đấu Trường."
      },
      tips: [
        { en: "Buy stamina refills at least 3 times daily (cost: 50, 50, 100 Gems).", vi: "Mua thể lực ít nhất 3 lần mỗi ngày (giá: 50, 50, 100 KC)." },
        { en: "Save all Black Tickets (Vé Đen) — NEVER spend Black Tickets on standard banners!", vi: "Tuyệt đối không dùng Vé Đen vào banner thường, chỉ tích chờ banner UR/SSR+ giới hạn!" },
        { en: "Claim all beginner pre-registration and active Gift Codes.", vi: "Nhập toàn bộ Gift Code đang hoạt động để nhận Kim Cương & Vé." }
      ]
    },
    {
      day: "Day 4 - 7",
      title: { en: "First Core Awakening & Gear Farming", vi: "Kích Hoạt Lõi Đầu Tiên & Cày Trang Bị" },
      focus: {
        en: "Unlock Conqueror's Challenge to farm purple gear sets. Activate your first Core skill (CE / Genos / Genus).",
        vi: "Mở Khiêu Chiến Đỉnh Cao để cày set trang bị tím. Kích hoạt Lõi đội hình (Tiểu Bá Vương, Genos hoặc Doctor Genus)."
      },
      tips: [
        { en: "Equip 4-piece Suit / Casual sets on frontline tanks for survivability.", vi: "Lắp 4 món set Âu Phục / Thường Phục cho tank hàng trước để sống dai." },
        { en: "Join an active top-tier Club for daily boss rewards and Club Vault shards.", vi: "Gia nhập Bang Hội Top để nhận rương mảnh vạn năng và đánh Boss bang." },
        { en: "Push Saitama Memory talents daily for global account stat multipliers.", vi: "Luyện Ký Ức & Thiên Phú Saitama hàng ngày để tăng chỉ số toàn đội vĩnh viễn." }
      ]
    },
    {
      day: "Day 8 - 14",
      title: { en: "180 Black Ticket Pity & Meta Transition", vi: "Tích 180 Vé Đen & Chuyển Giao Đội Hình Meta" },
      focus: {
        en: "Reach 180 Black Tickets (BT) to guarantee hard pity on upcoming UR / SSR+ banner.",
        vi: "Đạt mốc 180 Vé Đen (BT) để chắc chắn ăn bảo hiểm (Pity) tướng UR / SSR+ tiếp theo."
      },
      tips: [
        { en: "Rule of Gold: Only pull a limited banner if you have 180 BT ready to guarantee the unit.", vi: "Quy tắc vàng: Chỉ quay khi đủ 180 Vé Đen, tránh quay lẻ tẻ bị hụt pity mất trắng." },
        { en: "Begin saving Red Star ascension stones and Omnipresent Shards for your main carry.", vi: "Tích trữ mảnh vạn năng đỏ và đá tiến cấp sao đỏ cho carry chủ lực." }
      ]
    }
  ],

  // Comprehensive Encyclopedia of Master Tips & Tricks (Early, Mid, and Endgame)
  masterTips: [
    // --- EARLY GAME & NEWBIE (DAY 1 - 30) ---
    {
      id: "tip_180_bt_rule",
      category: "early",
      badge: "QUY TẮC VÀNG",
      icon: "ShieldAlert",
      title: {
        en: "The 180 Black Ticket Iron Rule",
        vi: "Quy Tắc Vàng: 180 Vé Đen Ăn Pity Tướng Giới Hạn"
      },
      summary: {
        en: "Never pull a limited Black Ticket banner with fewer than 180 tickets. Pity does NOT carry over between different banners in SEA!",
        vi: "Tuyệt đối không bao giờ quay banner giới hạn khi chưa tích đủ 180 Vé Đen. Điểm tích lũy bảo hiểm KHÔNG bảo lưu giữa các banner khác nhau!"
      },
      detail: {
        en: "In SEA, limited character banners require 180 pulls for guaranteed recruitment. If you spend 120 tickets and run out, all 120 tickets are permanently wasted when the banner expires. Save diligently, buy 36 BT monthly in the Gem Shop for 7,920 Gems, and only pull when 180 BT is in your inventory.",
        vi: "Tại máy chủ SEA, banner tướng giới hạn yêu cầu 180 lượt quay để chắc chắn chiêu mộ (Hard Pity). Nếu bạn quay 120-150 vé rồi hết banner, toàn bộ số vé đó coi như mất trắng. Hãy mua đủ 36 Vé Đen mỗi tháng trong Cửa Hàng Kim Cương (tốn 7.920 KC) và chỉ nhấn quay khi túi đồ đã sẵn sàng 180 vé."
      }
    },
    {
      id: "tip_stamina_economy",
      category: "early",
      badge: "QUẢN LÝ TÀI NGUYÊN",
      icon: "Zap",
      title: {
        en: "Stamina & Gem Economy: Don't Fall Behind in Account Lv",
        vi: "Quản Lý Thể Lực & Kim Cương: Không Bao Giờ Thọt Cấp"
      },
      summary: {
        en: "Account level unlocks game features and character level caps. Buy 3 stamina refills every single day.",
        vi: "Cấp độ tài khoản quyết định giới hạn cấp tướng và mở khóa tính năng. Luôn mua ít nhất 3 bình thể lực mỗi ngày."
      },
      detail: {
        en: "Daily stamina purchase costs: 50 -> 50 -> 100 Gems. Spending 200 Gems daily for 360 stamina is the highest ROI investment for account progression. Never spend Gems on standard gold ticket summons — save them for monthly Black Tickets and Vitality/Stamina refills.",
        vi: "Giá mua thể lực hàng ngày: 50 -> 50 -> 100 KC (tổng 200 KC/ngày nhận 360 thể lực). Đây là khoản đầu tư sinh lời cao nhất cho tài khoản. Tuyệt đối không dùng Kim Cương để quay x10 banner thường — để dành mua 36 Vé Đen hàng tháng và thể lực cày phó bản."
      }
    },
    {
      id: "tip_f2p_core_four",
      category: "early",
      badge: "BỘ TỨ F2P",
      icon: "Users",
      title: {
        en: "The F2P Core Four Carries (Golden Ball, Amai, Beast King, Mumen)",
        vi: "Bộ Tứ Tướng Quốc Dân F2P Gánh Kèo Đầu Game"
      },
      summary: {
        en: "Prioritize Golden Ball, Amai Mask, Beast King, and Mumen Rider to clear 95% of PvE content without spending.",
        vi: "Ưu tiên đầu tư Bi Vàng, Mặt Nạ Mật, Vua Thú và Mumen Rider để dọn sạch 95% ải phó bản mà không tốn 1 xu nạp."
      },
      detail: {
        en: "Golden Ball applies AoE Shatter (+30% DMG). Amai Mask snipes backrow single-targets for 5 massive hits. Beast King dishes out 5 free pursuit claw strikes every round when targets are injured. Mumen Rider gives +30% ATK & Speed for 0 energy. This team outperforms random uncoordinated SSRs.",
        vi: "Bi Vàng gieo Vỡ Giáp diện rộng (+30% sát thương nhận thêm). Mặt Nạ Mật đấm 5 hit dứt điểm carry hàng sau. Vua Thú tung 5 đòn cào miễn phí mỗi hiệp khi địch bị Tổn Thương. Mumen Rider buff +30% Công & Tốc không tốn nộ. Bộ tứ này mạnh hơn nhiều so với đội hình SSR chắp vá không có phối hợp."
      }
    },
    {
      id: "tip_saitama_talents",
      category: "early",
      badge: "TĂNG LỰC CHIẾN",
      icon: "Sparkles",
      title: {
        en: "Saitama Memories & Investigation Talents",
        vi: "Ký Ức & Thiên Phú Saitama: Tăng Chỉ Số Vĩnh Viễn Toàn Đội"
      },
      summary: {
        en: "Daily Saitama chores and memory puzzle pieces give permanent % stats to your entire character roster.",
        vi: "Làm nhiệm vụ Saitama và ghép mảnh Ký Ức mỗi ngày để tăng vĩnh viễn % chỉ số cho TOÀN BỘ tướng trong tài khoản."
      },
      detail: {
        en: "Always complete Saitama's daily push-ups, squats, and running routines. Invest investigation points into the Saitama Talent Tree (ATK%, HP%, and Damage Reduction). These multipliers apply globally to all current and future heroes in your lineup.",
        vi: "Hoàn thành đủ các bài tập hít đất, chạy bộ hàng ngày của Saitama. Dùng điểm điều tra nâng tối đa các nhánh Thiên Phú Saitama (Công %, Máu %, Miễn thương %). Các chỉ số này cộng dồn vĩnh viễn cho tất cả các tướng hiện tại và tương lai của bạn."
      }
    },

    // --- MID-GAME PROGRESSION (LV 60 - 90) ---
    {
      id: "tip_core_leveling",
      category: "midgame",
      badge: "CÔNG NGHỆ LÕI",
      icon: "Zap",
      title: {
        en: "Core Skill Leveling Priority (Bomb, Gyoro, Zombieman)",
        vi: "Ưu Tiên Nâng Cấp Cấp Độ Lõi (Lõi Bomb, Gyoro, Zombieman)"
      },
      summary: {
        en: "Upgrade your main Core Hero to Level 4, 7, and 10 to unlock massive teamwide Advanced Effects.",
        vi: "Nâng cấp Lõi của tướng Core chủ lực lên mốc Cấp 4, 7 và 10 để mở khóa Hiệu Ứng Nâng Cao cực mạnh."
      },
      detail: {
        en: "Core Level 4 unlocks the Advanced Core Effect (e.g. Bomb's +35% Tenacity Shield and 25% Non-Crit DMG Reduction). Core Level 10 provides maximum energy generation and stat amplification. Focus all laboratory trial research tokens on your primary core before upgrading secondary cores.",
        vi: "Mốc Lõi Cấp 4 mở khóa Hiệu ứng Nâng cao (ví dụ: Lõi Bomb cấp khiên Kiên Cường 35% Máu và giảm 25% sát thương không bạo kích). Mốc Lõi Cấp 10 tối đa hoá khả năng hồi nộ và chỉ số toàn đội. Dồn toàn bộ tài nguyên phòng thí nghiệm vào 1 lõi duy nhất trước khi phân tán."
      }
    },
    {
      id: "tip_speed_tuning",
      category: "midgame",
      badge: "CHIẾN THUẬT TỐC ĐỘ",
      icon: "TrendingUp",
      title: {
        en: "Speed Tuning Sequencing: Turn Order Dictates 80% of Battles",
        vi: "Thứ Tự Tốc Độ (Speed Tuning): Quyết Định 80% Thắng Bại"
      },
      summary: {
        en: "The correct sequence: #1 Buffer/Debuffer -> #2 Shatter/Corrode -> #3 AoE Sweeper -> #4 Finisher -> #5 Tank/Core.",
        vi: "Thứ tự ra đòn chuẩn: #1 Tăng tốc/Khống chế -> #2 Vỡ giáp/Ăn mòn -> #3 Sát thương diện rộng -> #4 Dứt điểm đơn -> #5 Tanker/Lõi."
      },
      detail: {
        en: "Never let your main damage dealer move first without buffs. Ensure your fastest units apply Shatter or ATK steroids before your primary carry unleashes their ultimate. Use Lightning and Prisoner gear sets with flat SPD and SPD% substats to fine-tune individual turn speeds.",
        vi: "Không bao giờ để carry chính ra đòn đầu tiên khi chưa có bùa lợi. Hãy đảm bảo tướng đi trước kích hoạt Vỡ Giáp, giảm thủ hoặc tăng Công trước khi carry dồn nộ. Dùng set Tia Chớp, Tù Nhân có dòng phụ Tốc Độ để căn chỉnh chính xác từng điểm tốc giữa các tướng."
      }
    },
    {
      id: "tip_gear_substats",
      category: "midgame",
      badge: "TRANG BỊ ĐỈNH CAO",
      icon: "ShieldAlert",
      title: {
        en: "Orange & Red Gear Optimization: Substats Over Set Bonus",
        vi: "Tối Ưu Trang Bị Cam & Đỏ: Dòng Phụ Quan Trọng Hơn Dòng Chính"
      },
      summary: {
        en: "A gear piece with ATK% and SPD substats is far superior to a random set piece with flat DEF.",
        vi: "Món trang bị có dòng phụ Công % và Tốc Độ giá trị hơn nhiều so với trang bị kích đủ set nhưng toàn dòng Thủ phẳng."
      },
      detail: {
        en: "Look for triple synergy substats: ATK% + Crit Rate% + SPD for DPS heroes, and HP% + Block% + DMG Reflect% for tanks. Only invest refinement and star ascension materials into Orange (and later Red) gears with optimal substat rolls.",
        vi: "Tìm kiếm các món đồ có 3 dòng phụ chuẩn: Công % + Tỉ lệ Bạo % + Tốc Độ cho tướng gây dame; Máu % + Đỡ Đòn % + Miễn Thương % cho tướng tank. Chỉ dùng đá tinh luyện và nâng sao cho trang bị Cam/Đỏ có dòng phụ đẹp để tránh lãng phí tài nguyên."
      }
    },
    {
      id: "tip_keepsake_priority",
      category: "midgame",
      badge: "THẦN BINH KEEPSAKE",
      icon: "Award",
      title: {
        en: "Keepsake Weapon vs Hero Awakening Priority",
        vi: "Ưu Tiên Thần Binh (Keepsake) vs Thức Tỉnh Sao Đỏ"
      },
      summary: {
        en: "Primary Carries require Keepsakes to unlock Ultra-Ultimates; Support & Tanks prioritize Red Star Awakening.",
        vi: "Carry sát thương chủ lực bắt buộc cần Thần Binh để mở Siêu Tuyệt Kỹ; Tướng Hỗ trợ & Tanker ưu tiên Thức Tỉnh Sao Đỏ."
      },
      detail: {
        en: "Ultra-Ultimates dramatically upgrade skill multipliers (e.g. Tatsumaki UR Meteor Slam applies Forcefield to all 6 enemies instead of 3). Save Shuriken Tickets (Vé Phi Tiêu) exclusively for your primary carry's Keepsake banner. Do not buy Keepsakes for pure tanks unless they provide teamwide barriers.",
        vi: "Siêu Tuyệt Kỹ nâng cấp vượt bậc uy lực kỹ năng (ví dụ: Tatsumaki UR Thần Binh gieo Trường Lực lên TOÀN BỘ 6 kẻ địch thay vì 3). Tích Vé Phi Tiêu chỉ để quay Thần Binh cho carry chủ lực. Không mua Thần Binh cho tướng tank thuần túy trừ khi cung cấp khiên bảo hộ toàn đội."
      }
    },

    // --- ENDGAME & COMPETITIVE (LV 100+ & TOURNAMENT) ---
    {
      id: "tip_specialized_dmg",
      category: "endgame",
      badge: "META CUỐI GAME",
      icon: "Crown",
      title: {
        en: "Specialized Direct DMG & Forcefield: Bypassing Tenacity Shields",
        vi: "Sát Thương Trực Tiếp Chuyên Biệt & Trường Lực: Xuyên Phá Khiên"
      },
      summary: {
        en: "Endgame teams have 500k+ Tenacity shields. Specialized Direct DMG and Forcefield bypass traditional DEF and shields.",
        vi: "Đội hình cuối game sở hữu lớp khiên Kiên Cường 500k+ Máu. Sát thương Trực tiếp Chuyên biệt và Trường Lực là chìa khóa xuyên giáp."
      },
      detail: {
        en: "Traditional ATK crits get heavily soaked by Bomb Core and Rover shields. UR+ Black Sperm's Specialized Direct DMG, Tatsumaki UR's Forcefield, and King UR's Purgatory shockwaves deal true HP damage that cannot be blocked or absorbed by standard Tenacity shields. Build your endgame comps around these damage channels.",
        vi: "Sát thương bạo kích thông thường bị hấp thụ gần hết bởi khiên Lõi Bomb và Chó Rover. Sát thương Trực tiếp Chuyên biệt của Tinh Trùng Đen UR+, Trường Lực của Tatsumaki UR và sóng âm của King UR đánh thẳng vào Máu mà không bị cản bởi khiên Kiên Cường. Hãy xây dựng đội hình xoay quanh các cơ chế sát thương này."
      }
    },
    {
      id: "tip_energy_denial",
      category: "endgame",
      badge: "KHỐNG CHẾ NỘ",
      icon: "Zap",
      title: {
        en: "Energy Denial & Rage Lock Dominance (King UR & Geryu)",
        vi: "Chiến Thuật Khóa Năng Lượng: Đối Thủ Không Thể Ra Chiêu"
      },
      summary: {
        en: "Sealing 4 to 6 enemy energy points prevents their entire team from casting ultimates in rounds 1 & 2.",
        vi: "Khóa từ 4 đến 6 điểm Năng lượng khiến toàn bộ đội hình đối phương hoàn toàn bất lực không thể tung Tuyệt Kỹ trong hiệp 1 & 2."
      },
      detail: {
        en: "King UR and Geryuganshoop SSR+ combined with Energy Steal gears lock down the opponent's core energy engine. In high-level Live Arena, whoever controls the energy bar controls the match. Build at least 1 energy denial specialist with high speed to disrupt enemy burst sequences.",
        vi: "King UR và Geryuganshoop SSR+ kết hợp trang bị cướp nộ khóa chặt nguồn năng lượng của đối thủ. Ở Đấu Trường Đỉnh Cao Live Arena, ai kiểm soát thanh nộ người đó thắng trận. Luôn chuẩn bị ít nhất 1 tướng khóa năng lượng có tốc độ cao để bẻ gãy nhịp dồn sát thương của đối phương."
      }
    },
    {
      id: "tip_live_arena_draft",
      category: "endgame",
      badge: "ĐẤU TRƯỜNG ĐỈNH CAO",
      icon: "Award",
      title: {
        en: "Live Arena 8-Hero Draft Pool: Dual Core Versatility",
        vi: "Bể Tướng Live Arena 8 Vị Trí: Linh Hoạt Song Lõi Anh Hùng & Quái Nhân"
      },
      summary: {
        en: "Never rely on a single core. Prepare 1 Hero Core (Bomb / Zombieman) and 1 Monster Core (Gyoro) to counter bans.",
        vi: "Không bao giờ phụ thuộc vào 1 lõi duy nhất. Chuẩn bị 1 Lõi Anh Hùng (Bomb/Zombieman) và 1 Lõi Quái Nhân (Gyoro) để khắc chế lượt Cấm/Chọn."
      },
      detail: {
        en: "In tournament drafts, opponents will immediately ban your primary core. Cultivate a flexible 8-hero roster: 2 Cores, 2 Speed Carries (Sonic/Flash), 2 Sustain Bodyguards (Silverfang/Darkshine/Rover), and 2 Control/Debuff units. This ensures a 100% win-condition regardless of enemy bans.",
        vi: "Trong các trận đấu cấm chọn giải đấu, đối thủ sẽ luôn cấm lõi mạnh nhất của bạn. Hãy xây dựng bể 8 tướng hoàn chỉnh: 2 Lõi, 2 Sát thủ tốc độ (Sonic/Flash), 2 Tanker bảo vệ (Bang/Darkshine/Rover) và 2 Khống chế/Gỡ bùa. Đảm bảo bạn luôn có đội hình hoàn chỉnh dù bị cấm bất kỳ tướng nào."
      }
    },
    {
      id: "tip_resource_banking",
      category: "endgame",
      badge: "ĐÓN ĐẦU META",
      icon: "Crown",
      title: {
        en: "Meta Shift Resource Banking: Always Hold a 180 BT Reserve",
        vi: "Bảo Tồn Tài Nguyên: Luôn Giữ Quỹ Dự Phòng 180 Vé Đen"
      },
      summary: {
        en: "Maintain an emergency fund of 180 BT + 72 Shuriken Tickets to instantly acquire new meta-defining UR+ releases.",
        vi: "Luôn duy trì quỹ khẩn cấp 180 Vé Đen + 72 Vé Thần Binh để ngay lập tức rước tướng UR+ thay đổi meta mới ra mắt."
      },
      detail: {
        en: "The biggest mistake veteran players make is pulling every intermediate banner out of impatience. Only pull for Game-Changer Tier SSS units (e.g. Bomb Core, UR+ Black Sperm, UR+ Zombieman). Keep your 180 BT reserve untouched so you never miss a pivotal meta shift.",
        vi: "Sai lầm lớn nhất của người chơi lâu năm là ngứa tay quay các banner tầm trung. Chỉ dồn vé cho các tướng Cột Mốc Meta SSS (như Lõi Bomb, Tinh Trùng Đen UR+, Zombieman UR+). Giữ nguyên mốc an toàn 180 Vé Đen dự phòng để không bao giờ bị bỏ lại phía sau khi meta đổi ngôi."
      }
    }
  ],

  starterTeams: [
    {
      name: { en: "F2P Beginner Core Lineup", vi: "Đội Hình Khởi Đầu Chuẩn F2P" },
      core: "Genos Core / Doctor Genus Core",
      frontRow: ["Superalloy Darkshine / Armored Gorilla", "Smile Man", "Carnage Kabuto / Tanktop Master"],
      backRow: ["Golden Ball", "Amai Mask", "Genos"],
      desc: {
        en: "Zero cost starter lineup utilizing story heroes with high single-target burst and AoE shatter.",
        vi: "Đội hình quốc dân không tốn kém, tận dụng tướng cốt truyện kết hợp Vỡ Giáp của Bi Vàng và dồn dame của Amai."
      }
    },
    {
      name: { en: "Budget DoT Burn & Corrode Team", vi: "Đội Hình Ăn Mòn & Thiêu Đốt Tiết Kiệm" },
      core: "Fukegao / Konbu Infinity Core",
      frontRow: ["Subterranean King", "Deep Sea King", "Carnage Kabuto"],
      backRow: ["Vaccine Man", "Konbu Infinity", "Messenger of Seafolk"],
      desc: {
        en: "Capitalizes on Vaccine Man passive: when DoT triggers, deals extra passive AoE damage to all enemies.",
        vi: "Tận dụng nội tại Vaccine Man: mỗi khi quái bị nổ Ăn mòn hoặc Thiêu đốt sẽ kích hoạt thêm sát thương phụ trợ toàn thể."
      }
    }
  ],

  dailyChecklist: [
    { id: "stamina", label: { en: "Buy 3x Stamina canisters with Gems (50, 50, 100 Gems)", vi: "Mua 3 bình Thể Lực bằng Kim Cương (50, 50, 100 KC)" } },
    { id: "club_boss", label: { en: "Attack Club Boss 3 times for Shards & Guild Coins", vi: "Đánh Boss Bang Hội 3 lượt nhận Mảnh & Xu Bang" } },
    { id: "arena", label: { en: "Complete 5 Daily Arena battles for Rank Gems", vi: "Đấu Đấu Trường 5 trận nhận Kim Cương xếp hạng" } },
    { id: "saitama", label: { en: "Do Saitama Daily Quests & Push Talent Tree", vi: "Làm Nhiệm Vụ Saitama & nâng Cây Thiên Phú" } },
    { id: "conqueror", label: { en: "Sweep Conqueror's Challenge for Orange/Purple Gear", vi: "Quét Khiêu Chiến Đỉnh Cao săn Trang Bị Cam/Tím" } },
    { id: "bt_purchase", label: { en: "Buy 36 Black Tickets monthly from Shop (7,920 Gems)", vi: "Mua đủ 36 Vé Đen mỗi tháng trong Shop (7.920 KC)" } },
    { id: "keepsake_shuriken", label: { en: "Claim daily Supply Shuriken Tickets from Events", vi: "Nhận Vé Phi Tiêu Thần Binh hàng ngày từ sự kiện" } },
    { id: "laboratory", label: { en: "Claim Laboratory Core Research Tokens", vi: "Nhận Xu Thí Nghiệm nâng cấp Cấp Độ Lõi Core" } }
  ]
};
