const changeScenarios = {
  relationship: {
    title: "亲密关系：越追问，越得不到安全",
    start: "对方回复变慢、语气变淡，或没有按你期待的方式确认爱。",
    first: "更多追问、更多解释、要求保证、测试对方，或者反过来冷处理。",
    loop: "对方感到压力而退缩 → 你把退缩解释为“不爱我” → 更焦虑 → 更追问。解决方案开始维持问题。",
    hidden: "“只要对方足够确定地爱我，我才能安全、完整。”",
    shift: "从“怎样让他给我保证”改成“我为什么把自己的完整性交给他的反应？这段关系真正要服务什么？”",
    acim: "检查特殊关系的目的：我是在索取完成感、证明受害，还是愿意把关系交给另一种目的？",
    acol: "在不取消差异的前提下进入 relationship：我怎样既不控制你，也不消失自己？",
    action: "先停止一轮追问；把事实、感受和一个具体请求说清楚，再允许对方有自己的回应空间。"
  },
  work: {
    title: "工作与完美：越想不犯错，越容易耗竭",
    start: "面对重要项目、评价或公开输出，担心出错、被否定或失去位置。",
    first: "反复检查、无限准备、延长工时、自己包办、推迟发布。",
    loop: "过度控制 → 疲惫与效率下降 → 更容易出错或拖延 → 证明“我必须更控制”。",
    hidden: "“只要我足够完美，就不会被否定；结果决定我有没有价值。”",
    shift: "从“怎样彻底避免错误”改成“为什么错误会被我解释成身份判决？工作的目的究竟是什么？”",
    acim: "先问 What for：是证明自己，还是服务清晰、共同利益与真实贡献？",
    acol: "让 wholeheartedness 进入工作：心、心智、身体、关系与现实资源是否都被听见？",
    action: "设一个明确完成标准；把一项本来想继续打磨的工作交付，并主动请求具体反馈。"
  },
  money: {
    title: "金钱与安全：数字越被拿来证明安全，焦虑越难结束",
    start: "收入波动、支出增加，或看到别人拥有更多资源。",
    first: "更频繁查账户、过度节省、冲动增收、回避消费，或不断寻找“绝对安全”的数字。",
    loop: "数字检查带来短暂控制感 → 注意力越来越集中在匮乏 → 焦虑提高 → 更频繁检查与控制。",
    hidden: "“只要钱达到某个水平，我就会永久安全；钱也证明我的价值。”",
    shift: "从“多少钱才够”改成“我让金钱承担了哪些它无法完成的心理功能？”",
    acim: "区分现实资源限制与匮乏知觉；不再让钱成为特殊性、比较与救赎的证据。",
    acol: "资源如何进入给予、接收、责任与创造，而不是只服务占有和身份？",
    action: "做一次真实数字表：现金、固定支出、可变支出、风险线；然后只处理一个最具体的财务动作。"
  },
  body: {
    title: "身体与焦虑：越检查，越觉得身体危险",
    start: "出现一个症状、疲惫、疼痛，或对衰老与健康产生担忧。",
    first: "不断搜索、反复自检、频繁求证、灾难化想象，或完全回避检查。",
    loop: "更多注意身体 → 感觉更显著 → 被解释成危险 → 更紧张 → 身体感觉更多。",
    hidden: "“只要身体没有任何异常，我才安全；身体状态就是我是谁。”",
    shift: "从“怎样立刻消灭所有不适”改成“什么需要现实照顾，什么是我赋予身体的身份意义？”",
    acim: "把身体从最终身份的位置移开，同时不否认它作为学习与沟通工具的现实用途。",
    acol: "让身体成为参与者：休息、节律、边界与照顾也属于 wholeheartedness。",
    action: "持续或严重症状先寻求医疗评估；日常层面减少重复检查，做一个稳定的睡眠、运动或休息动作。"
  },
  spiritual: {
    title: "灵性学习：越觉得自己不够，越不停寻找下一套答案",
    start: "发现自己仍会生气、害怕、嫉妒，觉得“修了这么久怎么还这样”。",
    first: "再买课程、再找老师、再读一本、再换方法、再建立一套更复杂的笔记系统。",
    loop: "新知识带来短暂希望 → 很快又看到自己没有“到达” → 证明自己还不够 → 再找新知识。",
    hidden: "“现在的我还不够完整；只要再学到某个答案，我才会成为正确的自己。”",
    shift: "从“我还缺什么知识”改成“不断学习是否正在保护‘我还没准备好真正实践’这个身份？”",
    acim: "看见特殊性与自我判断：课程不是用来制造一个更高级、更正确的我。",
    acol: "当学习完成它的功能，就让 knowing、关系与形式开始承担更多重量。",
    action: "暂停新增体系七天；只留一句已经懂的内容，把它带进一个真实关系和一个真实选择。"
  },
  leadership: {
    title: "领导与控制：越微管，团队越被动",
    start: "团队执行不稳定、意见分歧，或你担心事情失控。",
    first: "增加审批、更多检查、自己重做、减少授权、用更强语气推动。",
    loop: "团队自主性下降 → 更依赖你 → 你看到“他们果然不行” → 进一步控制。",
    hidden: "“只有我持续控制，秩序才存在；别人犯错会证明我失职。”",
    shift: "从“怎样让他们更听话”改成“我们的共同目的、责任、决策权和反馈规则是否清楚？”",
    acim: "检查你是在服务共同利益，还是在把异议和错误当成对自我价值的攻击。",
    acol: "关系不是管理技巧；让不同的人在共同目的下保持真实表达与责任。",
    action: "把一个隐性期待写成明确规则：谁负责、何时决定、什么必须升级、什么可以自行处理。"
  }
};

const domainGuides = {
  relationship: {
    name: "关系",
    second: "如果不再要求对方负责你的完整与安全，这个问题会怎样被重新定义？",
    acim: "What for? 你是在要求这段关系证明“我值得被爱／我是受害者／我必须赢”，还是愿意把它用于宽恕、诚实和共同利益？",
    acol: "如果合一不取消差异，你怎样能完整地出现，同时允许对方也完整地出现？",
    action: "现实动作可以是：一次不读心的对话、一个清楚边界、一次停止追问后的等待，或在必要时离开伤害性情境。"
  },
  work: {
    name: "工作",
    second: "如果结果不再决定你的价值，真正需要解决的工作问题是什么？",
    acim: "What for? 你想让工作证明自己够好、比别人强、不会被抛弃，还是让它服务清晰、贡献与共同利益？",
    acol: "新的目的怎样进入身体节律、合作关系、资源配置与真实表达，而不只留在“我想开了”？",
    action: "现实动作可以是：重新定义完成标准、请求资源、承认错误、减少过度控制、发布一个可迭代版本。"
  },
  money: {
    name: "金钱",
    second: "如果金钱不再承担“证明我安全／有价值”的任务，现实财务问题本身还剩下什么？",
    acim: "区分真实资源约束与匮乏知觉：你是否把数字变成特殊性、比较或救赎的证据？",
    acol: "资源怎样服务给予、接收、责任、关系和创造，而不是只服务囤积或自我证明？",
    action: "现实动作可以是：做预算、建立风险线、讨论价格、调整支出、寻求财务专业意见。"
  },
  body: {
    name: "身体",
    second: "如果身体状态不再定义“我是谁”，什么仍然需要被认真照顾？什么只是身份恐惧？",
    acim: "把身体从最终因果与身份中心移开，但不要用形上学否认现实症状或必要治疗。",
    acol: "身体作为形式与关系的一部分，正在给出什么节律、边界、休息与表达信息？",
    action: "现实动作可以是：医学评估、睡眠、运动、休息、减少重复检查或调整生活节律。"
  },
  spiritual: {
    name: "灵性学习",
    second: "如果你不需要靠“再学一点”才能成为完整的人，下一步真正的实践会是什么？",
    acim: "检查学习是否被特殊性接管：你是在减少定罪，还是在制造一个“更懂课程的我”？",
    acol: "何时可以少一点搜集，多一点 knowing、关系、身体与创造？",
    action: "现实动作可以是：暂停新增课程、重复一个已知练习、把一句话带进关系、接受反馈。"
  },
  leadership: {
    name: "领导",
    second: "如果秩序不必完全依靠你的控制，真正需要改变的是人，还是角色、规则、反馈与共同目的？",
    acim: "你是在用权力防御恐惧，还是服务共同利益？异议是否被你误读为人格攻击？",
    acol: "怎样让真实个体在关系中承担责任，而不是靠控制维持表面一致？",
    action: "现实动作可以是：澄清决策权、职责、升级机制、反馈方式，减少无必要审批。"
  }
};

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[ch]);
}

function renderChangeScenario(key) {
  const s = changeScenarios[key];
  const el = document.getElementById("changeCasePanel");
  if (!s || !el) return;
  el.innerHTML = `
    <p class="eyebrow">案例拆解</p>
    <h3>${s.title}</h3>
    <div class="change-case-grid">
      <div><span>触发</span><p>${s.start}</p></div>
      <div><span>第一序尝试</span><p>${s.first}</p></div>
      <div><span>More of the same</span><p>${s.loop}</p></div>
      <div><span>隐藏规则</span><p>${s.hidden}</p></div>
      <div class="wide"><span>第二序转向</span><p>${s.shift}</p></div>
      <div><span>ACIM 镜头</span><p>${s.acim}</p></div>
      <div><span>ACOL 镜头</span><p>${s.acol}</p></div>
      <div class="wide action"><span>让形式跟上</span><p>${s.action}</p></div>
    </div>
  `;
}

document.querySelectorAll(".change-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".change-tab").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    renderChangeScenario(btn.dataset.changeScenario);
  });
});
renderChangeScenario("relationship");

const storageKey = "acim-acol-change-lab-v1";
const ids = ["changeDomain", "changeProblem", "changeAttempt", "changeRule"];

function getFormData() {
  const data = {};
  ids.forEach(id => {
    const el = document.getElementById(id);
    data[id] = el ? el.value.trim() : "";
  });
  return data;
}

function buildChangeMap() {
  const data = getFormData();
  const guide = domainGuides[data.changeDomain] || domainGuides.relationship;
  const problem = data.changeProblem || "（尚未填写具体问题）";
  const attempt = data.changeAttempt || "（尚未列出反复尝试的解决方式）";
  const rule = data.changeRule || "（先不要猜答案；观察“如果我不这样做，最害怕发生什么？”）";
  const out = document.getElementById("changeMapOutput");
  if (!out) return;

  out.innerHTML = `
    <p class="eyebrow">你的改变地图 · ${escapeHtml(guide.name)}</p>
    <h3>先不要急着解决，再退一步看“解决方式”本身</h3>
    <div class="change-map-items">
      <section><span>1 / 当前问题定义</span><p>${escapeHtml(problem)}</p></section>
      <section><span>2 / 已经反复使用的解决方案</span><p>${escapeHtml(attempt)}</p></section>
      <section><span>3 / 可能正在保护的旧规则</span><p>${escapeHtml(rule)}</p></section>
      <section class="accent"><span>4 / 二序问题</span><p>${escapeHtml(guide.second)}</p></section>
      <section><span>5 / ACIM · What for?</span><p>${escapeHtml(guide.acim)}</p></section>
      <section><span>6 / ACOL · 让新目的进入形式</span><p>${escapeHtml(guide.acol)}</p></section>
      <section class="wide"><span>7 / 一个现实实验</span><p>${escapeHtml(guide.action)}</p></section>
    </div>
    <div class="change-output-note">
      <b>最后再问一次：</b>
      <p>如果我的下一步行动仍然只是“更多地做同一件事”，它可能还是第一序改变；如果我对目的、规则或身份前提的理解已经改变，那么现实行动也应该逐渐出现不同的组织方式。</p>
    </div>
    <button class="button ghost small" id="copyChangeMap">复制练习单</button>
  `;

  const copy = document.getElementById("copyChangeMap");
  if (copy) copy.addEventListener("click", () => copyChangeMap(data, guide));
}

function copyChangeMap(data, guide) {
  const text = [
    "【改变的层次 · 二序练习单】",
    "领域：" + guide.name,
    "",
    "1. 当前问题定义：",
    data.changeProblem || "（未填写）",
    "",
    "2. 已经反复使用的解决方案：",
    data.changeAttempt || "（未填写）",
    "",
    "3. 可能正在保护的旧规则：",
    data.changeRule || "（未填写）",
    "",
    "4. 二序问题：",
    guide.second,
    "",
    "5. ACIM · What for?",
    guide.acim,
    "",
    "6. ACOL · 让新目的进入形式",
    guide.acol,
    "",
    "7. 一个现实实验：",
    guide.action
  ].join("\n");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById("copyChangeMap");
      if (btn) {
        const old = btn.textContent;
        btn.textContent = "已复制";
        setTimeout(() => { btn.textContent = old; }, 1400);
      }
    }).catch(() => {});
  }
}

const buildBtn = document.getElementById("buildChangeMap");
if (buildBtn) buildBtn.addEventListener("click", buildChangeMap);

const saveBtn = document.getElementById("saveChangeMap");
if (saveBtn) saveBtn.addEventListener("click", () => {
  const data = getFormData();
  data.savedAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(data));
  const state = document.getElementById("changeSaveState");
  if (state) state.textContent = "已保存 · " + new Date().toLocaleString("zh-CN");
});

const clearBtn = document.getElementById("clearChangeMap");
if (clearBtn) clearBtn.addEventListener("click", () => {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "changeDomain") el.value = "relationship";
    else el.value = "";
  });
  localStorage.removeItem(storageKey);
  const state = document.getElementById("changeSaveState");
  if (state) state.textContent = "已清空；内容只保存在当前浏览器。";
  const out = document.getElementById("changeMapOutput");
  if (out) out.innerHTML = '<p class="eyebrow">你的改变地图</p><h3>先填写左侧三个核心问题</h3><p>练习单不会替你下结论，而会把“问题定义—尝试过的解决方案—隐藏规则—二序问题—ACIM/ACOL 校准—下一步实验”排在同一张地图上。</p>';
});

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
  let hasSaved = false;
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && saved[id]) {
      el.value = saved[id];
      hasSaved = true;
    }
  });
  if (hasSaved) {
    const state = document.getElementById("changeSaveState");
    if (state) state.textContent = "已载入上次保存的练习。";
    buildChangeMap();
  }
} catch (e) {}
