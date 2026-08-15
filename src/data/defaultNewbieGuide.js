export const defaultNewbieGuide = {
  roadmap: [
    {
      day: "Day 1 - 3",
      title: { en: "Starter Push & Level 30 Unlock", vi: "Vượt Ải Khởi Đầu & Mở Khóa Cấp 30" },
      focus: {
        en: "Focus on Main Story Exploration to reach Lv.30 ASAP. Unlock Daily Quests and Stamina refills.",
        vi: "Tập trung vượt Ải Chính tuyến nhanh nhất để đạt Lv 30. Mở khóa Nhiệm Vụ Hàng Ngày và mua Thể Lực."
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
        en: "Unlock Conqueror's Challenge to farm purple gear sets. Activate your first Core skill.",
        vi: "Mở Khiêu Chiến Đỉnh Cao để cày set trang bị tím. Kích hoạt Lõi đội hình (Genos, Doctor Genus hoặc Amai)."
      },
      tips: [
        { en: "Equip 4-piece Suit / Casual sets on frontline tanks for survivability.", vi: "Lắp 4 món set Âu Phục / Thường Phục cho tank hàng trước để sống dai." },
        { en: "Join an active top-tier Club for daily boss rewards and Club Vault shards.", vi: "Gia nhập Bang Hội Top để nhận rương mảnh vạn năng và đánh Boss bang." },
        { en: "Push Saitama Memory talents daily for global account stat multipliers.", vi: "Luyện Ký Ức & Thiên Phú Saitama hàng ngày để tăng chỉ số toàn đội." }
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
        { en: "Rule of Gold: Only pull a limited banner if you have 180 BT ready to guarantee the unit.", vi: "Quy tắc vàng: Chỉ quay khi đủ 180 Vé Đen, tránh quay lẻ tẻ bị hụt pity." },
        { en: "Begin saving Red Star ascension stones and Omnipresent Shards for your main carry.", vi: "Tích trữ mảnh vạn năng đỏ và đá tiến cấp sao đỏ cho carry chủ lực." }
      ]
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
    { id: "stamina", label: { en: "Buy 3x Stamina canisters with Gems", vi: "Mua 3 bình Thể Lực bằng Kim Cương" } },
    { id: "club_boss", label: { en: "Attack Club Boss 3 times", vi: "Đánh Boss Bang Hội 3 lượt" } },
    { id: "arena", label: { en: "Complete 5 Daily Arena battles", vi: "Đấu Đấu Trường 5 trận hàng ngày" } },
    { id: "saitama", label: { en: "Do Saitama Daily Quests & Push Talents", vi: "Làm Nhiệm Vụ Saitama & nâng Thiên Phú" } },
    { id: "conqueror", label: { en: "Sweep Conqueror's Challenge for Gear", vi: "Quét Khiêu Chiến Đỉnh Cao săn Trang Bị" } },
    { id: "bt_purchase", label: { en: "Buy 36 Black Tickets monthly from Shop", vi: "Mua đủ 36 Vé Đen mỗi tháng trong Shop Kim Cương" } }
  ]
};
