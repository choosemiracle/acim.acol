(() => {
  let svgSeq = 0;
  const base = (body, label) => {
    const id = ++svgSeq;
    const scopedBody = body
      .replaceAll("url(#arrow)", `url(#arrow${id})`)
      .replaceAll("url(#softGlow)", `url(#softGlow${id})`);
    return `
    <svg class="concept-svg" viewBox="0 0 760 360" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="softGlow${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f3ead4"/>
          <stop offset="1" stop-color="#dfe9e2"/>
        </linearGradient>
        <marker id="arrow${id}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" class="v-arrow"/>
        </marker>
      </defs>
      ${scopedBody}
    </svg>`;
  };

  const pill = (x,y,w,text,kind="") => `
    <g transform="translate(${x} ${y})">
      <rect width="${w}" height="44" rx="22" class="v-pill ${kind}"/>
      <text x="${w/2}" y="28" text-anchor="middle" class="v-text">${text}</text>
    </g>`;

  const node = (x,y,r,title,sub="") => `
    <g transform="translate(${x} ${y})">
      <circle r="${r}" class="v-node"/>
      <circle r="${r-8}" class="v-node-inner"/>
      <text y="-2" text-anchor="middle" class="v-title">${title}</text>
      ${sub ? `<text y="20" text-anchor="middle" class="v-small">${sub}</text>` : ""}
    </g>`;

  const diagrams = {
    "perception-loop": () => base(`
      <circle cx="380" cy="180" r="132" class="v-orbit"/>
      ${node(380,180,64,"知觉","Perception")}
      ${pill(76,54,132,"事实发生")}
      ${pill(550,54,132,"自动解释")}
      ${pill(550,262,132,"情绪 / 防卫")}
      ${pill(76,262,132,"寻找证据")}
      <path d="M208 76 C300 22 458 22 550 76" class="v-link" marker-end="url(#arrow)"/>
      <path d="M616 98 C704 146 704 214 616 262" class="v-link" marker-end="url(#arrow)"/>
      <path d="M550 284 C458 338 300 338 208 284" class="v-link" marker-end="url(#arrow)"/>
      <path d="M142 262 C54 214 54 146 142 98" class="v-link" marker-end="url(#arrow)"/>
      <path d="M310 180 H235" class="v-link dash" marker-end="url(#arrow)"/>
      <text x="236" y="162" class="v-small">宽恕：暂停自动归因</text>
      <text x="380" y="340" text-anchor="middle" class="v-caption">ACIM 训练的关键，不是“想积极一点”，而是看见解释如何制造经验。</text>
    `, "知觉、解释、情绪与防卫如何形成循环"),
    "relationship-shift": () => base(`
      <circle cx="175" cy="180" r="92" class="v-soft-circle"/>
      <circle cx="300" cy="180" r="92" class="v-soft-circle"/>
      <text x="237" y="112" text-anchor="middle" class="v-small">特殊关系</text>
      <text x="170" y="176" text-anchor="middle" class="v-title">我需要你</text>
      <text x="170" y="198" text-anchor="middle" class="v-small">证明我完整</text>
      <text x="305" y="176" text-anchor="middle" class="v-title">你需要我</text>
      <text x="305" y="198" text-anchor="middle" class="v-small">满足你的需要</text>
      <path d="M406 180 H492" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="449" y="160" text-anchor="middle" class="v-small">目的改变</text>
      <circle cx="585" cy="155" r="82" class="v-node"/>
      <circle cx="585" cy="205" r="82" class="v-node"/>
      <text x="585" y="178" text-anchor="middle" class="v-title">共同疗愈</text>
      <text x="585" y="199" text-anchor="middle" class="v-small">差异仍在 · 定罪松开</text>
      <text x="585" y="290" text-anchor="middle" class="v-caption">神圣关系不是换一个“完美对象”，而是同一段关系换了用途。</text>
    `, "特殊关系转向神圣关系的关系图"),
    "wholehearted": () => base(`
      <circle cx="285" cy="165" r="104" class="v-soft-circle"/>
      <circle cx="475" cy="165" r="104" class="v-soft-circle"/>
      <text x="250" y="160" text-anchor="middle" class="v-title">心</text>
      <text x="250" y="183" text-anchor="middle" class="v-small">感受 · 关系 · 价值</text>
      <text x="510" y="160" text-anchor="middle" class="v-title">心智</text>
      <text x="510" y="183" text-anchor="middle" class="v-small">理解 · 判断 · 分辨</text>
      <ellipse cx="380" cy="165" rx="72" ry="98" class="v-intersection"/>
      <text x="380" y="152" text-anchor="middle" class="v-title">全心</text>
      <text x="380" y="176" text-anchor="middle" class="v-small">Wholeheartedness</text>
      <text x="380" y="199" text-anchor="middle" class="v-small">不再互相否认</text>
      ${pill(98,286,120,"身体")}
      ${pill(235,286,120,"关系")}
      ${pill(372,286,120,"事实")}
      ${pill(509,286,120,"行动")}
      <path d="M380 250 V280" class="v-link"/>
      <text x="380" y="342" text-anchor="middle" class="v-caption">全心不是“听感觉胜过理性”，而是让多种信息进入同一个完整的认识过程。</text>
    `, "Wholeheartedness 心与心智结合图"),
    "self-form": () => base(`
      <circle cx="150" cy="180" r="86" class="v-node"/>
      <text x="150" y="170" text-anchor="middle" class="v-title">True Self</text>
      <text x="150" y="194" text-anchor="middle" class="v-small">不以分离为前提</text>
      <path d="M238 180 H314" class="v-link strong" marker-end="url(#arrow)"/>
      <rect x="314" y="118" width="170" height="124" rx="24" class="v-form"/>
      <text x="399" y="165" text-anchor="middle" class="v-title">个人形式</text>
      <text x="399" y="190" text-anchor="middle" class="v-small">性格 · 身体 · 技能 · 角色</text>
      <path d="M484 180 H560" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(560 88)">
        <rect width="138" height="184" rx="24" class="v-output"/>
        <circle cx="69" cy="48" r="21" class="v-dot"/>
        <path d="M37 98 Q69 68 101 98 V142 H37Z" class="v-person"/>
        <text x="69" y="164" text-anchor="middle" class="v-small">工作 · 关系 · 创造</text>
      </g>
      <text x="380" y="324" text-anchor="middle" class="v-caption">ACOL 的推进：不是消灭个人，而是不再让个人性只服务于特殊与隔绝。</text>
    `, "真实自我通过个人形式进入生活的图示"),
    "integration-bridge": () => base(`
      <path d="M70 90 C180 30 270 40 354 145" class="v-stream left"/>
      <path d="M690 90 C580 30 490 40 406 145" class="v-stream right"/>
      <text x="120" y="58" class="v-title">ACIM</text>
      <text x="640" y="58" text-anchor="end" class="v-title">ACOL</text>
      ${pill(70,112,112,"觉察")}
      ${pill(190,86,112,"松开")}
      ${pill(578,112,112,"表达")}
      ${pill(458,86,112,"关系")}
      ${node(380,180,72,"接受","Receive")}
      <path d="M380 252 V294" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(302,298,156,"现实行动","accent")}
      <text x="380" y="344" text-anchor="middle" class="v-caption">融合不是把两本书混成一套，而是让两种镜头在同一件生活事件里接力。</text>
    `, "ACIM 与 ACOL 五步融合桥梁图"),
    "two-lenses": () => base(`
      <g transform="translate(90 82)">
        <circle cx="118" cy="90" r="88" class="v-lens"/>
        <circle cx="118" cy="90" r="58" class="v-lens-inner"/>
        <line x1="180" y1="153" x2="238" y2="212" class="v-link strong"/>
        <text x="118" y="82" text-anchor="middle" class="v-title">ACIM</text>
        <text x="118" y="105" text-anchor="middle" class="v-small">我正在怎样解释？</text>
      </g>
      <g transform="translate(432 82)">
        <circle cx="118" cy="90" r="88" class="v-lens"/>
        <circle cx="118" cy="90" r="58" class="v-lens-inner"/>
        <line x1="56" y1="153" x2="-2" y2="212" class="v-link strong"/>
        <text x="118" y="82" text-anchor="middle" class="v-title">ACOL</text>
        <text x="118" y="105" text-anchor="middle" class="v-small">真实如何进入形式？</text>
      </g>
      <circle cx="380" cy="286" r="44" class="v-node"/>
      <text x="380" y="281" text-anchor="middle" class="v-title">生活</text>
      <text x="380" y="300" text-anchor="middle" class="v-small">同一件事</text>
      <text x="380" y="348" text-anchor="middle" class="v-caption">不是二选一：强烈定罪时先用 ACIM，看清之后再用 ACOL 进入关系与表达。</text>
    `, "ACIM 与 ACOL 两个镜头观察同一生活事件"),
    "reset-wave": () => base(`
      <path d="M60 208 C130 82 190 314 260 180 S390 80 455 180 S585 300 700 142" class="v-wave"/>
      <circle cx="95" cy="158" r="28" class="v-dot"/><text x="95" y="164" text-anchor="middle" class="v-small">停</text>
      <circle cx="235" cy="196" r="28" class="v-dot"/><text x="235" y="202" text-anchor="middle" class="v-small">分开</text>
      <circle cx="380" cy="126" r="28" class="v-dot"/><text x="380" y="132" text-anchor="middle" class="v-small">承认</text>
      <circle cx="520" cy="211" r="28" class="v-dot"/><text x="520" y="217" text-anchor="middle" class="v-small">松开</text>
      <circle cx="670" cy="150" r="34" class="v-node"/><text x="670" y="156" text-anchor="middle" class="v-small">选择</text>
      <text x="380" y="52" text-anchor="middle" class="v-title">触发 ≠ 必须立刻反应</text>
      <text x="380" y="326" text-anchor="middle" class="v-caption">90 秒的作用只是切断“触发 → 自动故事 → 自动行为”的直线，让选择重新出现。</text>
    `, "90 秒回归切断自动反应的流程图"),
    "method-bridge": () => base(`
      <rect x="72" y="58" width="230" height="244" rx="28" class="v-form"/>
      <text x="187" y="97" text-anchor="middle" class="v-title">课程</text>
      <text x="187" y="124" text-anchor="middle" class="v-small">校准目的与知觉</text>
      ${pill(102,154,170,"宽恕 / 不定罪")}
      ${pill(102,210,170,"全心 / 关系")}
      ${pill(102,266,170,"共同目的")}
      <path d="M302 180 H458" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="380" y="160" text-anchor="middle" class="v-small">转译</text>
      <rect x="458" y="58" width="230" height="244" rx="28" class="v-output"/>
      <text x="573" y="97" text-anchor="middle" class="v-title">现实方法</text>
      <text x="573" y="124" text-anchor="middle" class="v-small">把方向做成行为</text>
      ${pill(488,154,170,"沟通 / 边界")}
      ${pill(488,210,170,"决策 / 复盘")}
      ${pill(488,266,170,"预算 / 身体照顾")}
      <text x="380" y="338" text-anchor="middle" class="v-caption">课程不是技巧库；技巧也不是灵性。桥梁的价值在于让内在方向能被现实检验。</text>
    `, "课程原则与现实方法之间的桥梁图"),
    "concept-atlas": () => base(`
      <circle cx="380" cy="180" r="128" class="v-orbit"/>
      <circle cx="380" cy="180" r="86" class="v-orbit inner"/>
      ${node(380,180,48,"我如何活？","生活")}
      ${pill(322,22,116,"实相层")}
      ${pill(548,90,132,"心智 / 认识")}
      ${pill(548,238,116,"关系层")}
      ${pill(92,238,132,"具身 / 形式")}
      ${pill(96,90,116,"实践层")}
      <path d="M380 66 V132 M514 112 L427 151 M514 260 L429 211 M246 260 L331 211 M246 112 L331 151" class="v-link"/>
      <text x="380" y="342" text-anchor="middle" class="v-caption">先辨别“我在讨论哪一层”，很多看似矛盾的命题才有可能被真正理解。</text>
    `, "五层理论地图图解"),
    "case-scenes": () => base(`
      <g transform="translate(52 64)">
        <rect width="132" height="105" rx="18" class="v-scene"/><rect x="22" y="28" width="88" height="8" rx="4" class="v-bar"/><rect x="22" y="48" width="58" height="8" rx="4" class="v-bar soft"/><text x="66" y="91" text-anchor="middle" class="v-small">方案被否定</text>
      </g>
      <g transform="translate(218 64)">
        <rect width="132" height="105" rx="18" class="v-scene"/><circle cx="42" cy="42" r="15" class="v-dot"/><circle cx="90" cy="42" r="15" class="v-dot"/><path d="M57 42 H75" class="v-link dash"/><text x="66" y="91" text-anchor="middle" class="v-small">伴侣冷淡</text>
      </g>
      <g transform="translate(384 64)">
        <rect width="132" height="105" rx="18" class="v-scene"/><path d="M28 60 L52 40 L72 52 L104 24" class="v-link strong"/><text x="66" y="91" text-anchor="middle" class="v-small">收入下降</text>
      </g>
      <g transform="translate(550 64)">
        <rect width="132" height="105" rx="18" class="v-scene"/><path d="M66 24 C38 36 42 70 66 78 C90 70 94 36 66 24Z" class="v-person"/><text x="66" y="91" text-anchor="middle" class="v-small">身体异常</text>
      </g>
      <g transform="translate(52 195)">
        <rect width="132" height="105" rx="18" class="v-scene"/><path d="M27 52 H105" class="v-link"/><circle cx="40" cy="52" r="14" class="v-dot"/><circle cx="92" cy="52" r="14" class="v-dot"/><text x="66" y="91" text-anchor="middle" class="v-small">合作失信</text>
      </g>
      <g transform="translate(218 195)">
        <rect width="132" height="105" rx="18" class="v-scene"/><path d="M35 68 Q66 26 97 68" class="v-link strong"/><circle cx="35" cy="68" r="12" class="v-dot"/><circle cx="97" cy="68" r="12" class="v-dot"/><text x="66" y="91" text-anchor="middle" class="v-small">家人不听劝</text>
      </g>
      <g transform="translate(384 195)">
        <rect width="132" height="105" rx="18" class="v-scene"/><path d="M66 26 V68 M66 44 L38 24 M66 44 L96 24" class="v-link strong"/><text x="66" y="91" text-anchor="middle" class="v-small">去留两难</text>
      </g>
      <g transform="translate(550 195)">
        <rect width="132" height="105" rx="18" class="v-scene"/><circle cx="66" cy="36" r="17" class="v-dot"/><circle cx="34" cy="68" r="11" class="v-dot"/><circle cx="98" cy="68" r="11" class="v-dot"/><text x="66" y="91" text-anchor="middle" class="v-small">带领受挑战</text>
      </g>
    `, "八类生活场景的小型插图地图")
  };

  document.querySelectorAll("[data-visual]").forEach(el => {
    const draw = diagrams[el.dataset.visual];
    if (!draw) return;
    const canvas = document.createElement("div");
    canvas.className = "visual-canvas";
    canvas.innerHTML = draw();
    el.prepend(canvas);
  });
})();