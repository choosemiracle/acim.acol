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
      <text x="380" y="324" text-anchor="middle" class="v-caption">ACOL 的主张：个人性不必继续服务于特殊与隔绝，而可以被重新理解为关系中的表达。</text>
    `, "真实自我通过个人形式进入生活的图示"),
    "integration-bridge": () => base(`
      <circle cx="380" cy="178" r="64" class="v-node"/>
      <text x="380" y="170" text-anchor="middle" class="v-title">同一事件</text>
      <text x="380" y="192" text-anchor="middle" class="v-small">事实 · 情绪 · 决定</text>

      <g transform="translate(60 72)">
        <rect width="230" height="184" rx="26" class="v-output"/>
        <text x="115" y="32" text-anchor="middle" class="v-small">ACIM LENS</text>
        <text x="115" y="62" text-anchor="middle" class="v-title">回到心灵</text>
        ${pill(34,82,162,"投射 / 抉择者")}
        ${pill(34,130,162,"目的 / 宽恕","accent")}
      </g>

      <g transform="translate(470 72)">
        <rect width="230" height="184" rx="26" class="v-form"/>
        <text x="115" y="32" text-anchor="middle" class="v-small">ACOL LENS</text>
        <text x="115" y="62" text-anchor="middle" class="v-title">关系与表达</text>
        ${pill(34,82,162,"Wholeheartedness")}
        ${pill(34,130,162,"Relation / Form")}
      </g>

      <path d="M316 178 H290" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M444 178 H470" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M380 242 V292" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(302,296,156,"现实行动","accent")}
      <text x="380" y="350" text-anchor="middle" class="v-caption">两副镜头并置检视同一事件；先后只是实践编排，不构成形上学上的“接力升级”。</text>
    `, "ACIM 与 ACOL 双镜头实践工作流"),
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
      <text x="380" y="348" text-anchor="middle" class="v-caption">不是高低顺序：ACIM 检查心灵、投射与目的；ACOL 另从关系、全心与形式提问。</text>
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
    "ken-two-levels": () => base(`
      <rect x="82" y="48" width="596" height="116" rx="28" class="v-form"/>
      <text x="380" y="80" text-anchor="middle" class="v-small">第一层 · 实相与幻相</text>
      <text x="210" y="120" text-anchor="middle" class="v-title">上主 · 真知 · 一体</text>
      <text x="550" y="120" text-anchor="middle" class="v-title">小我 · 知见 · 分裂</text>
      <path d="M300 118 H460" class="v-link dash"/>
      <text x="380" y="148" text-anchor="middle" class="v-caption">这一层在辨别：什么是真实，什么只是梦境中的经验。</text>

      <rect x="82" y="196" width="596" height="116" rx="28" class="v-output"/>
      <text x="380" y="228" text-anchor="middle" class="v-small">第二层 · 梦境中的两种选择</text>
      <text x="210" y="268" text-anchor="middle" class="v-title">小我的诠释</text>
      <text x="550" y="268" text-anchor="middle" class="v-title">圣灵的诠释</text>
      <path d="M300 266 H460" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="380" y="296" text-anchor="middle" class="v-caption">世界没有先被“消灭”；同一经验先被重新赋予用途。</text>
    `, "肯恩所强调的两个理解层次"),

    "ken-form-content": () => base(`
      <text x="380" y="48" text-anchor="middle" class="v-title">形式回答“发生了什么” · 内涵回答“我让它服务什么”</text>
      <g transform="translate(86 88)">
        <rect width="222" height="176" rx="28" class="v-form"/>
        <text x="111" y="36" text-anchor="middle" class="v-small">外在形式</text>
        ${pill(30,58,162,"留下 / 离开")}
        ${pill(30,112,162,"照顾 / 拒绝")}
      </g>
      <path d="M320 176 H438" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="380" y="158" text-anchor="middle" class="v-small">看目的</text>
      <g transform="translate(452 88)">
        <rect width="222" height="176" rx="28" class="v-output"/>
        <text x="111" y="36" text-anchor="middle" class="v-small">内在目的</text>
        ${pill(30,58,162,"罪咎 / 控制")}
        ${pill(30,112,162,"宽恕 / 结合","accent")}
      </g>
      <text x="380" y="318" text-anchor="middle" class="v-caption">肯恩不会只凭一个行为判断“有没有爱”；同样的形式可以承载完全不同的心念。</text>
    `, "形式与内涵的辨别图"),

    "gary-three-layers": () => base(`
      <circle cx="380" cy="180" r="138" class="v-orbit"/>
      <circle cx="380" cy="180" r="98" class="v-soft-circle"/>
      <circle cx="380" cy="180" r="58" class="v-node"/>
      <text x="380" y="174" text-anchor="middle" class="v-title">ACIM 原文</text>
      <text x="380" y="195" text-anchor="middle" class="v-small">课程自身的语言</text>
      <text x="380" y="105" text-anchor="middle" class="v-title">Gary 的解释</text>
      <text x="380" y="127" text-anchor="middle" class="v-small">不二 · 梦者 · 高阶宽恕</text>
      <text x="380" y="32" text-anchor="middle" class="v-title">《告别娑婆》的叙事框架</text>
      <text x="380" y="53" text-anchor="middle" class="v-small">Arten / Pursah · 前世 · 历史叙事</text>
      <path d="M238 180 H306 M454 180 H522" class="v-link dash"/>
      <text x="380" y="338" text-anchor="middle" class="v-caption">越靠近中心，越应回到课程原文校准；越靠外层，越适合以“作者如此叙述”来阅读。</text>
    `, "ACIM 原文、Gary 解释与告别娑婆叙事的三层关系"),

    "gary-dreamer-screen": () => base(`
      <g transform="translate(78 102)">
        <circle cx="92" cy="78" r="70" class="v-node"/>
        <text x="92" y="70" text-anchor="middle" class="v-title">心灵 / 梦者</text>
        <text x="92" y="92" text-anchor="middle" class="v-small">选择老师与目的</text>
      </g>
      <path d="M250 180 H356" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="303" y="160" text-anchor="middle" class="v-small">投射</text>
      <g transform="translate(356 76)">
        <rect width="310" height="208" rx="24" class="v-form"/>
        <rect x="24" y="26" width="262" height="130" rx="12" class="v-scene"/>
        <circle cx="90" cy="79" r="18" class="v-dot"/>
        <circle cx="174" cy="79" r="18" class="v-dot"/>
        <path d="M108 79 H156" class="v-link dash"/>
        <text x="155" y="126" text-anchor="middle" class="v-small">世界 · 身体 · 关系 · 事件</text>
        <text x="155" y="184" text-anchor="middle" class="v-title">屏幕上的角色经验</text>
      </g>
      <path d="M356 282 C300 332 188 322 154 254" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="245" y="326" text-anchor="middle" class="v-small">宽恕：把因果位置带回心灵</text>
    `, "梦者、投射与世界屏幕的因果关系图"),

    "gary-forgiveness": () => base(`
      ${pill(50,142,132,"触发 / 判断")}
      <path d="M182 164 H244" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(244,142,132,"抓到小我")}
      <path d="M376 164 H438" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(438,142,132,"撤回投射")}
      <path d="M570 164 H628" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(628 119)">
        <circle cx="44" cy="45" r="44" class="v-node"/>
        <text x="44" y="41" text-anchor="middle" class="v-small">重新</text>
        <text x="44" y="58" text-anchor="middle" class="v-small">选择</text>
      </g>
      <text x="116" y="118" text-anchor="middle" class="v-small">先诚实承认反应</text>
      <text x="310" y="118" text-anchor="middle" class="v-small">不把灵性当压抑</text>
      <text x="504" y="118" text-anchor="middle" class="v-small">不再让对方做“因”</text>
      <text x="380" y="254" text-anchor="middle" class="v-title">结果不是“我赢了”，而是定罪失去用途</text>
      <text x="380" y="286" text-anchor="middle" class="v-caption">现实行动照常进行；变化的是行动不再由受害感、报复与特殊性主导。</text>
    `, "Gary 式高阶宽恕的四步内在运动"),

    "pitfall-map": () => base(`
      <circle cx="380" cy="180" r="62" class="v-node"/>
      <text x="380" y="170" text-anchor="middle" class="v-title">灵性化的小我</text>
      <text x="380" y="193" text-anchor="middle" class="v-small">继续证明 · 继续定罪 · 继续分离</text>

      ${pill(72,62,146,"概念 / 理论")}
      ${pill(307,28,146,"宽恕 / 情绪")}
      ${pill(542,62,146,"关系 / 边界")}
      ${pill(72,256,146,"现实 / 身体")}
      ${pill(307,290,146,"灵性文化")}
      ${pill(542,256,146,"算法 / AI")}

      <path d="M218 84 L330 142 M380 78 V118 M542 84 L430 142 M218 278 L330 218 M380 290 V242 M542 278 L430 218" class="v-link dash"/>
      <text x="380" y="345" text-anchor="middle" class="v-caption">表面问题不同，底层都在问：我是在松开分离，还是把分离包装得更高级？</text>
    `, "现代修习中六类常见暗礁地图"),

    "two-course-return": () => base(`
      ${pill(44,142,142,"被故事定义")}
      <path d="M186 164 H274" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(274 106)">
        <rect width="188" height="116" rx="24" class="v-output"/>
        <text x="94" y="34" text-anchor="middle" class="v-small">ACIM</text>
        <text x="94" y="64" text-anchor="middle" class="v-title">看见 · 宽恕 · 松开</text>
        <text x="94" y="88" text-anchor="middle" class="v-small">不再让形式定义我</text>
      </g>
      <path d="M462 164 H536" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(536 106)">
        <rect width="180" height="116" rx="24" class="v-form"/>
        <text x="90" y="34" text-anchor="middle" class="v-small">ACOL</text>
        <text x="90" y="64" text-anchor="middle" class="v-title">关系 · 具身 · 创造</text>
        <text x="90" y="88" text-anchor="middle" class="v-small">让真实重新进入形式</text>
      </g>
      <path d="M626 232 C565 302 238 302 132 226" class="v-link dash" marker-end="url(#arrow)"/>
      <text x="380" y="286" text-anchor="middle" class="v-title">重新进入同一个世界，但不再以同一种目的</text>
      <text x="380" y="316" text-anchor="middle" class="v-caption">不是“逃离故事”，而是停止被故事定义，再让爱透过身体、关系与行动进入故事。</text>
    `, "ACIM 与 ACOL 的双重纠偏路径"),

    "change-orders": () => base(`
      <g transform="translate(54 62)">
        <rect width="286" height="236" rx="26" class="v-form"/>
        <text x="143" y="34" text-anchor="middle" class="v-small">FIRST-ORDER · 系统内改变</text>
        <rect x="38" y="64" width="210" height="118" rx="18" class="v-scene"/>
        ${pill(56,82,82,"更多")}
        ${pill(162,82,68,"更少")}
        ${pill(92,132,110,"换策略")}
        <text x="143" y="214" text-anchor="middle" class="v-title">规则 / 目标不变</text>
      </g>

      <path d="M362 180 H414" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="388" y="160" text-anchor="middle" class="v-small">退到系统外看</text>

      <g transform="translate(430 62)">
        <rect width="276" height="236" rx="26" class="v-output"/>
        <text x="138" y="34" text-anchor="middle" class="v-small">SECOND-ORDER · 系统本身改变</text>
        <rect x="36" y="64" width="204" height="118" rx="18" class="v-soft-circle"/>
        <text x="138" y="105" text-anchor="middle" class="v-title">问题怎样被定义？</text>
        <text x="138" y="132" text-anchor="middle" class="v-title">规则 / 目的是什么？</text>
        <text x="138" y="158" text-anchor="middle" class="v-small">改变产生行为的框架</text>
        <text x="138" y="214" text-anchor="middle" class="v-title">系统重组</text>
      </g>
      <text x="380" y="338" text-anchor="middle" class="v-caption">第一序不是错误；真正的问题，是需要二序改变时却只会“更多地做同一件事”。</text>
    `, "第一序改变与第二序改变的系统层次图"),

    "change-three-levels": () => base(`
      <g transform="translate(54 58)">
        <rect width="184" height="226" rx="24" class="v-form"/>
        <text x="92" y="34" text-anchor="middle" class="v-small">第一序 · FORM</text>
        <text x="92" y="72" text-anchor="middle" class="v-title">换行为 / 对象 / 强度</text>
        ${pill(38,96,108,"沟通技巧")}
        ${pill(38,148,108,"预算 / 流程")}
        <text x="92" y="208" text-anchor="middle" class="v-small">现实调整</text>
      </g>

      <path d="M248 171 H292" class="v-link strong" marker-end="url(#arrow)"/>

      <g transform="translate(292 58)">
        <rect width="184" height="226" rx="24" class="v-output"/>
        <text x="92" y="34" text-anchor="middle" class="v-small">第二序 · PURPOSE</text>
        <text x="92" y="72" text-anchor="middle" class="v-title">换问题 / 规则 / 目的</text>
        ${pill(38,96,108,"What for?","accent")}
        ${pill(38,148,108,"换老师 / 知觉","accent")}
        <text x="92" y="208" text-anchor="middle" class="v-small">ACIM 深层校准</text>
      </g>

      <path d="M486 171 H530" class="v-link strong" marker-end="url(#arrow)"/>

      <g transform="translate(530 58)">
        <rect width="176" height="226" rx="24" class="v-form"/>
        <text x="88" y="34" text-anchor="middle" class="v-small">再进入 · EXPRESSION</text>
        <text x="88" y="72" text-anchor="middle" class="v-title">让新目的进入形式</text>
        ${pill(34,96,108,"关系 / 边界")}
        ${pill(34,148,108,"身体 / 创造")}
        <text x="88" y="208" text-anchor="middle" class="v-small">ACOL 具身表达</text>
      </g>
      <text x="380" y="330" text-anchor="middle" class="v-caption">完整路径不是从形式逃走，而是让现实行动逐渐服务于一个不同的心智目的。</text>
    `, "第一序改变、第二序改变与ACIM ACOL实践层次图"),

    "change-loop": () => base(`
      ${pill(70,54,150,"不安 / 冲突")}
      ${pill(542,54,150,"旧解决方案")}
      ${pill(542,258,150,"副作用")}
      ${pill(70,258,150,"问题更严重")}

      <path d="M220 76 C320 24 448 24 542 76" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M617 98 C710 144 710 218 617 258" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M542 280 C442 336 320 336 220 280" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M145 258 C48 214 48 142 145 98" class="v-link strong" marker-end="url(#arrow)"/>

      <circle cx="380" cy="180" r="70" class="v-node"/>
      <text x="380" y="171" text-anchor="middle" class="v-title">More of the same</text>
      <text x="380" y="194" text-anchor="middle" class="v-small">“再多做一点旧办法”</text>

      <path d="M380 110 V56" class="v-link dash"/>
      <path d="M380 250 V308" class="v-link dash" marker-end="url(#arrow)"/>
      <text x="380" y="331" text-anchor="middle" class="v-title">二序出口：重新定义问题与目的</text>
      <text x="380" y="349" text-anchor="middle" class="v-caption">不是更用力地重复旧箭头，而是改变让整个循环成立的规则。</text>
    `, "more of the same attempted solution如何维持问题的循环图"),

    "fp-overview": () => base(`
      <circle cx="380" cy="176" r="70" class="v-node"/>
      <text x="380" y="168" text-anchor="middle" class="v-title">LOVE · ONENESS</text>
      <text x="380" y="191" text-anchor="middle" class="v-small">真实从未需要被修理</text>

      <g transform="translate(54 86)">
        <rect width="224" height="182" rx="26" class="v-output"/>
        <text x="112" y="32" text-anchor="middle" class="v-small">ACIM · UNDO</text>
        ${pill(31,55,162,"分离信念")}
        ${pill(31,103,162,"宽恕 / 奇迹","accent")}
        <text x="112" y="160" text-anchor="middle" class="v-title">撤销错误知觉</text>
      </g>

      <g transform="translate(482 86)">
        <rect width="224" height="182" rx="26" class="v-form"/>
        <text x="112" y="32" text-anchor="middle" class="v-small">ACOL · EXPRESS</text>
        ${pill(31,55,162,"真实身份")}
        ${pill(31,103,162,"关系 / 具身 / 创造")}
        <text x="112" y="160" text-anchor="middle" class="v-title">让真实进入形式</text>
      </g>

      <path d="M278 176 H310" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M450 176 H482" class="v-link strong" marker-end="url(#arrow)"/>
      <text x="380" y="318" text-anchor="middle" class="v-caption">共同根基不是“成为更好的分离自我”，而是识别真实身份，并让经验停止服务于分离。</text>
    `, "ACIM 与 ACOL 第一性原理总览"),

    "fp-acim-chain": () => base(`
      ${pill(24,74,126,"真实 / 一体")}
      <path d="M150 96 H184" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(184,74,126,"相信分离")}
      <path d="M310 96 H344" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(344,74,126,"小我 / 知觉")}
      <path d="M470 96 H504" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(504,74,126,"投射 / 特殊性")}

      <path d="M567 118 C650 152 650 224 567 258" class="v-link dash" marker-end="url(#arrow)"/>
      ${pill(504,258,126,"罪咎 / 冲突")}
      <path d="M504 280 H470" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(344,258,126,"宽恕 / 奇迹","accent")}
      <path d="M344 280 H310" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(184,258,126,"正确知觉","accent")}
      <path d="M184 280 H150" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(24,258,126,"真知 / 一体","accent")}

      <path d="M407 122 V234" class="v-link dash"/>
      <text x="407" y="180" text-anchor="middle" class="v-small">奇迹不是修理实相</text>
      <text x="407" y="198" text-anchor="middle" class="v-small">而是撤回对错误前提的信任</text>
      <text x="380" y="340" text-anchor="middle" class="v-caption">下降是“分离如何被经验”，返回是“知觉如何被纠正”；起点与终点的真实并没有发生本体性变化。</text>
    `, "ACIM 从分离信念到宽恕与真知的推导链"),

    "fp-acol-chain": () => base(`
      ${pill(24,146,112,"Love")}
      <path d="M136 168 H166" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(166,146,112,"Identity")}
      <path d="M278 168 H308" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(308,146,126,"Wholeheartedness","accent")}
      <path d="M434 168 H464" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(464,146,132,"Union + Relation","accent")}
      <path d="M596 168 H626" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(626,146,110,"Creation")}

      <text x="80" y="116" text-anchor="middle" class="v-small">现实条件</text>
      <text x="222" y="116" text-anchor="middle" class="v-small">接受真实的我</text>
      <text x="371" y="116" text-anchor="middle" class="v-small">心与心智结合</text>
      <text x="530" y="116" text-anchor="middle" class="v-small">差异不等于分离</text>
      <text x="681" y="116" text-anchor="middle" class="v-small">形式中的表达</text>

      <path d="M222 194 C270 266 488 266 530 194" class="v-link dash"/>
      <text x="376" y="260" text-anchor="middle" class="v-title">Learning → Knowing → Embodied Expression</text>
      <text x="380" y="302" text-anchor="middle" class="v-caption">ACOL 的重点不是制造一个新 Self，而是停止延迟完整性，让已被认出的真实通过关系与形式得到表达。</text>
    `, "ACOL 从爱与身份到关系、知晓与创造的推导链"),

    "fp-u-path": () => base(`
      <text x="380" y="34" text-anchor="middle" class="v-title">共同纠正点之后，不是一条“ACIM → ACOL”的单线</text>
      ${pill(317,54,126,"Love / Oneness")}
      <path d="M380 78 V104" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(317,104,126,"分离知觉")}
      <path d="M380 128 V154" class="v-link strong" marker-end="url(#arrow)"/>
      ${pill(317,154,126,"宽恕 / 奇迹","accent")}

      <path d="M360 178 C310 208 252 226 208 248" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M400 178 C450 208 508 226 552 248" class="v-link strong" marker-end="url(#arrow)"/>

      <g transform="translate(82 248)">
        <rect width="252" height="82" rx="20" class="v-output"/>
        <text x="126" y="26" text-anchor="middle" class="v-small">ACIM · STRICT PATH</text>
        <text x="126" y="50" text-anchor="middle" class="v-title">正见 / 真实世界 → Knowledge</text>
        <text x="126" y="69" text-anchor="middle" class="v-small">知觉完成使命，形式不获本体地位</text>
      </g>

      <g transform="translate(426 248)">
        <rect width="252" height="82" rx="20" class="v-form"/>
        <text x="126" y="26" text-anchor="middle" class="v-small">ACOL · INDEPENDENT BRANCH</text>
        <text x="126" y="50" text-anchor="middle" class="v-title">Relationship → Embodiment</text>
        <text x="126" y="69" text-anchor="middle" class="v-small">进一步展开 personal form / creation</text>
      </g>

      <text x="380" y="354" text-anchor="middle" class="v-caption">两书可以对读，但 ACOL 对关系与形式的积极主张不是 ACIM 形上学的必然结论。</text>
    `, "ACIM 与 ACOL 第一性原理分叉路径"),

    "axiom-architecture": () => base(`
      <g transform="translate(104 34)">
        <rect width="552" height="52" rx="18" class="v-output"/>
        <text x="276" y="21" text-anchor="middle" class="v-small">LEVEL 1 · TRUTH / ILLUSION</text>
        <text x="276" y="40" text-anchor="middle" class="v-title">A1 / A2 · 真知与一体  ≠  分离世界</text>
      </g>
      <path d="M380 88 V108" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(104 108)">
        <rect width="552" height="62" rx="18" class="v-form"/>
        <text x="276" y="20" text-anchor="middle" class="v-small">LEVEL 2 · DREAM / DECISION MAKER</text>
        <text x="276" y="40" text-anchor="middle" class="v-title">A3 / A4 / A5 · 知觉 · 抉择者 · 投射</text>
        <text x="276" y="56" text-anchor="middle" class="v-small">小我 ← 重新选择 → 圣灵</text>
      </g>
      <path d="M380 172 V192" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(184 192)">
        <rect width="392" height="52" rx="18" class="v-output"/>
        <text x="196" y="21" text-anchor="middle" class="v-small">CORRECTION · A6 / A7</text>
        <text x="196" y="40" text-anchor="middle" class="v-title">用途改变 · 宽恕 · 奇迹</text>
      </g>

      <path d="M360 246 C310 262 266 278 230 294" class="v-link strong" marker-end="url(#arrow)"/>
      <path d="M400 246 C450 262 494 278 530 294" class="v-link strong" marker-end="url(#arrow)"/>

      <g transform="translate(70 294)">
        <rect width="280" height="56" rx="18" class="v-scene"/>
        <text x="140" y="22" text-anchor="middle" class="v-small">ACIM · STRICT ENDPOINT</text>
        <text x="140" y="43" text-anchor="middle" class="v-title">真实世界 → 知觉终结 → Knowledge</text>
      </g>
      <g transform="translate(410 294)">
        <rect width="280" height="56" rx="18" class="v-scene"/>
        <text x="140" y="22" text-anchor="middle" class="v-small">ACOL · REINTERPRETATION</text>
        <text x="140" y="43" text-anchor="middle" class="v-title">B1–B6 · Relationship / Form / Creation</text>
      </g>
    `, "ACIM 两个层次与 ACOL 独立分支架构"),

    "axiom-dependency": () => base(`
      <text x="380" y="32" text-anchor="middle" class="v-title">依赖关系：连续，不等于必然推导</text>

      <g transform="translate(52 58)">
        <rect width="198" height="86" rx="20" class="v-output"/>
        <text x="99" y="25" text-anchor="middle" class="v-small">ACIM CORE</text>
        <text x="99" y="50" text-anchor="middle" class="v-title">A1 – A7</text>
        <text x="99" y="69" text-anchor="middle" class="v-small">两个层次 · 抉择者 · 宽恕</text>
      </g>
      <path d="M250 101 H286" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(286 58)">
        <rect width="198" height="86" rx="20" class="v-output"/>
        <text x="99" y="25" text-anchor="middle" class="v-small">ACIM THEOREMS</text>
        <text x="99" y="50" text-anchor="middle" class="v-title">T1 – T6 + T12</text>
        <text x="99" y="69" text-anchor="middle" class="v-small">因果 · 课堂 · 形式/内涵</text>
      </g>
      <path d="M484 101 H520" class="v-link strong" marker-end="url(#arrow)"/>
      <g transform="translate(520 58)">
        <rect width="188" height="86" rx="20" class="v-scene"/>
        <text x="94" y="25" text-anchor="middle" class="v-small">ACIM ENDPOINT</text>
        <text x="94" y="50" text-anchor="middle" class="v-title">正见 → Knowledge</text>
        <text x="94" y="69" text-anchor="middle" class="v-small">形式最终完成使命</text>
      </g>

      <g transform="translate(120 220)">
        <rect width="220" height="88" rx="20" class="v-form"/>
        <text x="110" y="25" text-anchor="middle" class="v-small">ACOL · STRONG CONTINUITY</text>
        <text x="110" y="50" text-anchor="middle" class="v-title">B1 – B4 → T7 / T8</text>
        <text x="110" y="70" text-anchor="middle" class="v-small">爱 · 身份 · 全心 · 学习过渡</text>
      </g>
      <g transform="translate(420 220)">
        <rect width="220" height="88" rx="20" class="v-form"/>
        <text x="110" y="25" text-anchor="middle" class="v-small">ACOL · REINTERPRETATION</text>
        <text x="110" y="50" text-anchor="middle" class="v-title">B5 / B6 → T9 – T11</text>
        <text x="110" y="70" text-anchor="middle" class="v-small">关系 · personal form · creation</text>
      </g>

      <path d="M385 144 C324 174 268 190 230 220" class="v-link dash" marker-end="url(#arrow)"/>
      <path d="M385 144 C446 174 492 190 530 220" class="v-link dash" marker-end="url(#arrow)"/>

      <text x="380" y="348" text-anchor="middle" class="v-caption">虚线表示“可对话／有连续性”，不是形式逻辑推导；尤其 B5/B6 必须保留与肯恩式 ACIM 的形上张力。</text>
    `, "ACIM 核心与 ACOL 连续及重释分支的依赖网络"),

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