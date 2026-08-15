export const defaultDamageMechanics = {
  pipelinePhases: [
    {
      phase: 1,
      name: {
        en: "Phase 1: RNG Outcomes (Critical, Block, Instant Evasion)",
        vi: "Phase 1: Kết Quả May Rủi (Bạo Kích, Chặn Đỡ, Né Tức Thì)"
      },
      desc: {
        en: "Binary 0 or 1 triggers. If Instant Evasion succeeds, damage drops to exactly 1 point. If Crit succeeds, activates Crit DMG multiplier. If Block succeeds, activates Block Intensity reduction.",
        vi: "Các kết quả CÓ hoặc KHÔNG. Nếu Né Tức Thì thành công, đòn đánh bị ép về đúng 1 điểm sát thương. Nếu nổ Bạo Kích, kích hoạt hệ số ST Bạo. Nếu Chặn Đỡ thành công, kích hoạt Cường Độ Chặn Đỡ."
      },
      formula: "P(Crit) = CritRate / (1 + EnemyCritRes); P(Block) = BlockRate / (1 + EnemyCrushRate); P(Evade) = min(0.80, Evasion / (1 + EnemyAccuracy))"
    },
    {
      phase: 2,
      name: {
        en: "Phase 2: Base Damage & Multiplier Chain",
        vi: "Phase 2: Nhân Chuỗi Hệ Số & Khuếch Đại Sát Thương"
      },
      desc: {
        en: "Base Damage (ATK * Skill% - DEF) multiplied by Total DMG Amplification, Total DMG Reduction (Inverse), Arena Rivalhurt, and Mastery Buffs.",
        vi: "Sát thương gốc (Công * % Kỹ Năng - Thủ) nhân với Tổng Khuếch Đại ST, Nghịch đảo Tổng Giảm ST, Hệ số Đấu Trường / Phe (Rivalhurt), và Tinh Thông."
      },
      formula: "FinalDirectDMG = ⌈ BaseDMG * (1 + sum(DMG_Amps)) * (1 / (1 + sum(DMG_Reductions))) * RivalHurt * MasteryMult ⌉"
    },
    {
      phase: 3,
      name: {
        en: "Phase 3: Defensive Buffer & Shield Layer Consumption",
        vi: "Phase 3: Thứ Tự Hấp Thụ Khiên & Lớp Máu Bảo Hộ"
      },
      desc: {
        en: "Damage is absorbed in strict sequence: Tenacity Shield -> Specialized Shield -> Armor HP -> Bonus HP Pool -> True HP.",
        vi: "Sát thương đi qua các lớp bảo vệ theo thứ tự nghiêm ngặt: Khiên Kiên Cường (Tenacity) -> Hộ Thể Chuyên Biệt (Specialized Shield) -> Giáp (Armor HP) -> Bể Máu Phụ -> Máu Thật (True HP)."
      },
      formula: "DamageSequence: Tenacity > SpecializedGuard > Armor > ExtraHP > TrueHP"
    },
    {
      phase: 4,
      name: {
        en: "Phase 4: Specialized Extra DMG, DoT & Pursuit Triggers",
        vi: "Phase 4: Sát Thương Trực Tiếp Chuyên Biệt, DoT & Truy Kích"
      },
      desc: {
        en: "Specialized Direct DMG ignores standard damage reduction, bypasses Non-Crit DMG Reduction, and pierces through standard Unyielding to strike targets directly.",
        vi: "Sát Thương Trực Tiếp Chuyên Biệt bỏ qua toàn bộ giảm thương thường, bỏ qua Miễn Thương Non-Crit và xuyên thẳng qua Bất Khuất thông thường."
      },
      formula: "SpecializedDMG = BaseATK * SpecializedMultiplier * (1 + AllDMGAmp) [Ignores Standard DMG Free]"
    }
  ],

  statEncyclopedia: [
    {
      id: "crit_system",
      name: { en: "CRIT & Crit DMG & Crit Res", vi: "Tỉ Lệ Bạo Kích & Sát Thương Bạo & Kháng Bạo" },
      category: "Offense / RNG",
      formula: "P(Crit) = CritRate / (1 + CritResRate)",
      cap: "Crit DMG Amp capped at +300%",
      explanation: {
        en: "Crit Rate is divided by (1 + Enemy Crit Res). A critical strike activates Crit DMG bonus, which adds to your overall Damage Amplification pool. In multi-hit combos, each individual strike rolls its own independent Crit chance.",
        vi: "Tỉ lệ bạo kích được chia cho (1 + Kháng bạo của địch). Khi nổ bạo, hệ số Sát Thương Bạo Kích được cộng dồn vào tổng khuếch đại sát thương. Với combo nhiều hit, từng đòn con được quay xác suất nổ bạo riêng biệt."
      },
      proTip: {
        en: "Stacking high Crit DMG without sufficient Crit Rate (>70%) is inefficient. Always pair Crit DMG gear (Knight / Primal) with Crit Rate substats.",
        vi: "Chồng Sát Thương Bạo Kích cao nhưng Tỉ Lệ Bạo thấp (<70%) là lãng phí. Luôn ưu tiên nâng Tỉ Lệ Bạo trước khi dồn ST Bạo."
      }
    },
    {
      id: "block_system",
      name: { en: "Block Rate & Block Intensity & Crush Rate", vi: "Tỉ Lệ Chặn Đỡ & Cường Độ Chặn & Xuyên Đỡ" },
      category: "Defense / RNG",
      formula: "P(Block) = BlockRate / (1 + CrushRate); ReducedDMG = BlockIntensity",
      cap: "Block Intensity stacks into DMG Free pool",
      explanation: {
        en: "Block is a two-step mechanism: Step 1 determines IF the attack is blocked (Block Rate / (1 + Crush Rate)). Step 2 applies Block Intensity to reduce incoming damage. High Block Rate with low Block Intensity only reduces minimal damage.",
        vi: "Chặn Đỡ gồm 2 bước tách biệt: Bước 1 xác định CÓ chặn được đòn hay không. Bước 2 áp dụng Cường Độ Chặn Đỡ để xén giảm sát thương. Tỉ lệ chặn cao nhưng cường độ chặn thấp sẽ chỉ giảm được lượng sát thương rất nhỏ."
      },
      proTip: {
        en: "Suit and Battle gear sets provide powerful Block synergy on tanks like Darkshine, Bang SSR+, and Bomb.",
        vi: "Set Âu Phục và Chiến Đấu kích hoạt khả năng phản đòn và tăng mạnh Cường Độ Chặn Đỡ cho các tank hàng trước như Bang SSR+, Darkshine, Bomb."
      }
    },
    {
      id: "hit_resist_system",
      name: { en: "Effect Hit & Effect Resist", vi: "Hiệu Ứng Tấn Công (Hit) & Kháng Hiệu Ứng (Resist)" },
      category: "Control / Debuff",
      formula: "P(Debuff) = BaseSkillRate * (1 + EffectHit) / (1 + EffectResist)",
      cap: "Cannot be reduced to absolute 0 by Resist alone",
      explanation: {
        en: "Effect Hit increases the landing probability of debuffs (Stun, Burn, Corrode, Shatter, Injury). Effect Resist divides the landing rate. Because it is division rather than subtraction, high Hit can still break through high Resist.",
        vi: "Effect Hit tăng tỉ lệ dính các hiệu ứng phụ (Choáng, Bỏng, Ăn Mòn, Vỡ Giáp, Tổn Thương). Kháng Hiệu Ứng chia tỉ lệ dính xuống chứ không trừ thẳng, vì vậy chỉ số Hit đủ cao vẫn luôn có cơ hội xuyên qua Kháng."
      },
      proTip: {
        en: "For debuff initiators like Golden Ball (Shatter) or Boros (Corrode), aim for at least 100%+ Effect Hit to overcome tournament Resist walls.",
        vi: "Với các tướng mở hiệu ứng như Bi Vàng hay Quái Nhân DoT, cần tối thiểu 100%+ Effect Hit để xuyên thủng dàn kháng hiệu ứng giải đấu."
      }
    },
    {
      id: "specialized_dmg",
      name: { en: "Specialized Direct DMG & Specialized Unyielding", vi: "Sát Thương Trực Tiếp Chuyên Biệt & Bất Khuất Chuyên Biệt" },
      category: "UR / UR+ Meta Endgame",
      formula: "SpecializedDMG = ATK * SkillMultiplier (Bypasses Standard DMG Free, Unyielding)",
      cap: "Only mitigated by Specialized DMG Reduction",
      explanation: {
        en: "The hallmark of the UR / UR+ generation. Specialized Direct DMG ignores all standard DMG Free, ignores Non-Crit DMG Reduction, and punches through traditional 1-HP Unyielding states. It can only be countered by Specialized DMG Reduction and Specialized Evasion.",
        vi: "Đỉnh cao sức mạnh của thế hệ UR và UR+. Sát Thương Trực Tiếp Chuyên Biệt bỏ qua toàn bộ Giảm ST cơ bản, bỏ qua Miễn Thương Non-Crit và xuyên thủng Bất Khuất 1 HP thông thường. Chỉ có Giảm ST Chuyên Biệt và Né Chuyên Biệt mới giảm được."
      },
      proTip: {
        en: "UR Saitama, UR Tatsumaki, and UR+ Black Sperm specialize in this mechanic, making them un-stallable against legacy defense teams.",
        vi: "UR Saitama, UR Tatsumaki và UR+ Tinh Trùng Đen sở hữu sát thương này, biến mọi đội hình thủ dai truyền thống thành vô nghĩa."
      }
    },
    {
      id: "instant_evasion",
      name: { en: "Instant-DMG Evasion & Accuracy", vi: "Né Tránh Sát Thương Tức Thì & Chính Xác" },
      category: "Supreme Defense",
      formula: "P(InstantMiss) = min(0.80, InstantEvasion / (1 + Accuracy))",
      cap: "Strict hard cap at 80% maximum",
      explanation: {
        en: "When Instant Evasion triggers, the entire attack deals exactly 1 damage. Capped at 80% maximum probability. It completely neutralizes high single-target nukes.",
        vi: "Khi Né Tức Thì kích hoạt thành công, toàn bộ đòn đánh bị ép thẳng xuống đúng 1 điểm sát thương (gần như vô hiệu hoàn toàn). Bị giới hạn cứng ở mức tối đa 80%."
      },
      proTip: {
        en: "Flashy Flash SSR+ and Sonic UR utilize Instant Evasion to survive turn-1 burst and counter-attack with immense speed.",
        vi: "Flashy Flash SSR+ và Sonic UR tận dụng tối đa cơ chế Né Tức Thì để sống sót qua lượt 1 và phản kích chớp nhoáng."
      }
    }
  ]
};
