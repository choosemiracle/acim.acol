const firstPrincipleScenarios = {
  relationship: {
    title: "亲密关系：为什么一句“他不回我”会变成“我不值得被爱”？",
    surface: "表层问题：对方回应变慢、态度冷淡、没有给出你期待的确认。",
    premise: "隐藏前提：我的完整与安全依赖另一个人的反应；如果他改变，我才会平安。",
    acim: "ACIM 镜头：先不急着改变对方，观察自己是否正在让这段关系证明“我匮乏、我被拒绝、他掌握我的平安”。宽恕不是否认对方行为，而是撤回这种终极因果权。",
    acol: "ACOL 镜头：如果完整不是由对方补给，我怎样既完整地出现，又真实地进入关系？关系不再是完成我的工具，而成为给予、接收、差异与合一同时存在的场域。",
    action: "现实动作：把事实、感受与一个具体请求说清楚；停止读心与追问；必要时设边界。新的内涵必须进入新的关系行为。"
  },
  work: {
    title: "工作与价值：为什么一个项目失败会变成“我不够好”？",
    surface: "表层问题：方案被否定、绩效下降、项目延期、别人比你更受认可。",
    premise: "隐藏前提：外在结果有权决定我的价值；只要足够优秀，我就不会被否定。",
    acim: "ACIM 镜头：辨认工作是否被拿来证明特殊性、价值和安全。问题不是停止认真，而是不再把结果当作身份判决。",
    acol: "ACOL 镜头：如果不必靠成就制造完整，工作可以怎样成为真实能力、关系、给予与创造的表达？",
    action: "现实动作：区分“需要改进的技能/流程”与“对自我价值的判决”；做具体复盘、请求反馈，同时停止无限打磨来证明自己。"
  },
  money: {
    title: "金钱与安全：为什么数字永远差一点才够？",
    surface: "表层问题：收入不稳定、支出增加、看到别人拥有更多资源。",
    premise: "隐藏前提：某个数字可以给我永久安全、自由或价值；只要还没达到，我就仍然不足。",
    acim: "ACIM 镜头：区分真实财务限制与匮乏知觉。钱可以处理现实问题，却无法承担“证明我是谁”的救赎功能。",
    acol: "ACOL 镜头：资源怎样进入关系、给予、接收、责任与创造？金钱从身份保证书重新成为形式中的工具。",
    action: "现实动作：做真实预算、风险线和现金流；然后观察每个数字被你附加了什么身份故事。"
  },
  body: {
    title: "身体与身份：为什么一个症状会变成“我的世界要塌了”？",
    surface: "表层问题：疼痛、衰老、疲惫、体检异常或外貌变化。",
    premise: "隐藏前提：身体状态就是我是谁；如果身体不可控，我就失去安全与完整。",
    acim: "ACIM 镜头：解除“我就是身体”的终极认同，同时不否认身体作为当前经验与沟通工具的现实用途。",
    acol: "ACOL 镜头：当身体不再承担全部身份，它反而可以更诚实地被倾听、照顾并成为真实 Self 的表达媒介。",
    action: "现实动作：需要医疗时就诊，调整睡眠和节律；同时停止把症状解释为人格失败、罪咎或存在价值的判决。"
  },
  spiritual: {
    title: "灵性学习：为什么越学越觉得自己还没到？",
    surface: "表层问题：仍会生气、嫉妒、恐惧，于是不断换老师、课程、方法和解释。",
    premise: "隐藏前提：现在的我还不完整；只要再学到某个答案，我才会成为正确的自己。",
    acim: "ACIM 镜头：看见“小我学灵性”仍可能在维护特殊身份和自我判断。课程的目标不是制造一个更高级的我，而是撤销阻碍爱的知觉。",
    acol: "ACOL 镜头：学习完成其功能后，能否少一点搜集，多一点 knowing、acceptance、relationship 与 embodied expression？",
    action: "现实动作：暂停新增体系一周；选一句已经懂的话，在一个真实关系和一个真实决定中实践。"
  }
};

function renderFirstPrincipleScenario(key) {
  const data = firstPrincipleScenarios[key];
  const panel = document.getElementById("fpScenarioPanel");
  if (!data || !panel) return;

  panel.innerHTML = `
    <p class="eyebrow">FIRST-PRINCIPLES TRACE</p>
    <h3>${data.title}</h3>
    <div class="fp-scenario-grid">
      <section><span>01 · 表层经验</span><p>${data.surface}</p></section>
      <section><span>02 · 隐藏前提</span><p>${data.premise}</p></section>
      <section class="acim"><span>03 · ACIM · 撤销错误用途</span><p>${data.acim}</p></section>
      <section class="acol"><span>04 · ACOL · 从完整进入形式</span><p>${data.acol}</p></section>
      <section class="wide"><span>05 · 现实中的下一步</span><p>${data.action}</p></section>
    </div>
  `;
}

document.querySelectorAll(".fp-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".fp-tab").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    renderFirstPrincipleScenario(button.dataset.fpScenario);
  });
});

renderFirstPrincipleScenario("relationship");
