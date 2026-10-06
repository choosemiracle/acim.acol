const axiomTheorems = {
  T1: {
    no: "T1",
    title: "实相不可损定理",
    statement: "若真实本身是一体且分离不能改变真实，那么任何时间中的事件都不能改变 Self 的终极本体状态。",
    premises: ["A1 实相不变", "A2 分离非本体"],
    proof: [
      "A1：真实若是真实，就不因时间、攻击或知觉而改变。",
      "A2：分离只是错误表述，而不是对真实的成功改造。",
      "所以：形式中的损失可以改变经验、关系与处境，却不能把完整 Self 变成一个本体上残缺的 Self。"
    ],
    corollary: "疗愈首先不是“把真实修好”，而是撤销“我已经被毁坏”的身份结论。",
    invalid: "不能推出“现实伤害不重要”。身体、法律、财务和关系层面的后果仍需处理。"
  },
  T2: {
    no: "T2",
    title: "知觉非终极定理",
    statement: "只要认识仍依赖局部观察、比较和解释，它就仍属于 perception，而不是最终 Knowledge。",
    premises: ["A3 知觉有限", "A7 纠正"],
    proof: [
      "A3：知觉随分离、程度、局部与间隔而出现，因此天然带有视角。",
      "A7：奇迹可以纠正知觉，但纠正后的知觉仍是知觉。",
      "所以：right perception 是通道而非终点；它的成熟功能，是不再阻挡 Knowledge。"
    ],
    corollary: "任何“我终于拥有终极正确观点”的姿态，都值得被再次检视。",
    invalid: "不能推出“事实、证据和判断都没意义”。在知觉世界里，清楚事实仍然必要。"
  },
  T3: {
    no: "T3",
    title: "因果回收定理",
    statement: "外在事件可以触发经验，但事件本身不能单独决定其心理／灵性意义；心智的解释与投射参与制造经验。",
    premises: ["A3 知觉有限", "A4 选择／教师", "A5 投射"],
    proof: [
      "A3：我们并不直接拥有整体真知，而是在知觉框架中解释经验。",
      "A4：心智会选择不同思想体系来赋义。",
      "A5：内在判断会被外置为世界的见证。",
      "所以：至少有一部分‘原因’必须从外界收回到心智，否则选择和宽恕都无从发生。"
    ],
    corollary: "实践的关键从“怎样让世界先改变”移到“我正在怎样使用这件事”。",
    invalid: "不能推出“所有事件都是我个人制造的”或“受害者应为伤害负责”。"
  },
  T4: {
    no: "T4",
    title: "形式不定定理",
    statement: "同一种外在形式可以服务完全不同的内在目的，因此不能仅凭行为表面判断其灵性内涵。",
    premises: ["A4 选择／教师", "A6 目的决定功能"],
    proof: [
      "A4：经验意义随所选教师与思想体系改变。",
      "A6：身体、关系、时间和世界的功能由目的决定。",
      "所以：留下、离开、给予、拒绝、说话、沉默，都不能脱离 purpose 单独被判为‘有爱’或‘没爱’。"
    ],
    corollary: "每个重大选择除了问‘做什么’，都应再问一次 What for?",
    invalid: "不能推出“形式无所谓”。有些形式确实会造成巨大现实后果。"
  },
  T5: {
    no: "T5",
    title: "宽恕—奇迹定理",
    statement: "若投射把原因固定在外界，宽恕就是撤销这一固定；奇迹则是撤销后知觉重新排列的结果。",
    premises: ["A5 投射", "A7 纠正", "A4 选择／教师"],
    proof: [
      "A5：投射把罪咎和原因外置，使攻击显得合理。",
      "A7：宽恕撤销投射，奇迹重新排列知觉。",
      "A4：一旦原因不再被锁死在外界，心智重新拥有选择教师与目的的空间。",
      "所以：宽恕不是道德宽容，而是因果结构的修正；奇迹是这种修正的经验性表达。"
    ],
    corollary: "你可以仍然拒绝一个行为，却不再需要把对方固定成‘永远有罪的人’。",
    invalid: "不能推出“必须和好”“必须继续关系”或“必须取消现实责任”。"
  },
  T6: {
    no: "T6",
    title: "关系转化定理",
    statement: "关系的根本转化首先发生在目的层：从‘用你完成我／证明我’转向‘在关系中认识、给予、接收与疗愈’。",
    premises: ["A5 投射", "A6 目的决定功能", "A7 纠正", "B5 合一—关系"],
    proof: [
      "A5：特殊关系容易承载投射、索取和罪咎。",
      "A6：关系的功能取决于它服务的目的。",
      "A7：宽恕使旧目的失去强制力。",
      "B5：关系随后不只用于纠错，也可以成为认识 Self 的场域。",
      "所以：holy relationship 与 union-and-relationship 可以被看成从纠正走向积极关系性的连续运动。"
    ],
    corollary: "成熟关系不是没有差异，而是不再要求差异承担‘你必须完成我’的任务。",
    invalid: "不能推出“所有关系都应该维持”或“真正有爱就不会冲突”。"
  },
  T7: {
    no: "T7",
    title: "身份识别定理",
    statement: "若真实 Self 未被分离真正改变，且 ACOL 的目标是确立身份，那么真实身份只能被认出、接受和活出，而不能被制造。",
    premises: ["A1 实相不变", "A2 分离非本体", "B1 爱的条件", "B2 身份先在"],
    proof: [
      "A1/A2：真实没有被分离本体性改变。",
      "B1：爱已经是现实条件，而非未来奖励。",
      "B2：课程的目标是 establish identity，而不是 fabricate identity。",
      "所以：灵性道路在根本上不是 Self-improvement，而是 Self-recognition。"
    ],
    corollary: "实践可以改变习惯、能力和人格表达，却不能把‘未来更优秀的我’当作真实 Self 的来源。",
    invalid: "不能推出“人格不用成长”或“行为无需改变”。"
  },
  T8: {
    no: "T8",
    title: "学习自我超越定理",
    statement: "若学习的目的在于疗愈知觉，那么当这一功能完成时，成熟的学习必须让位于 knowing，而不能永远维持学习者依赖。",
    premises: ["A3 知觉有限", "B3 全心", "B4 学习过渡"],
    proof: [
      "A3：知觉需要训练和纠正，但并非终极。",
      "B4：学习只在 perception 仍需疗愈时必要。",
      "B3：Knowing 不能只靠继续积累概念，而需要认识者本身更完整地参与。",
      "所以：真正成熟的教学必须具有自我终止倾向——让学生越来越不依赖‘还缺一个答案’。"
    ],
    corollary: "老师、书籍和课程若有效，最终会把权威逐渐还给成熟的分辨与 knowing。",
    invalid: "不能推出“从此不必学习事实技能”或“我的直觉永远正确”。"
  },
  T9: {
    no: "T9",
    title: "差异非分离定理",
    statement: "差异、个性与关系中的区分，并不能单独推出本体性的分离。",
    premises: ["A1 实相不变", "A2 分离非本体", "B5 合一—关系"],
    proof: [
      "A1/A2：分离不是最终真实。",
      "B5：Self 可以在 relationship 中被认识，合一与关系并存。",
      "若一切差异本身就是分离，那么 relationship 只能在差异消失后成立，与 B5 冲突。",
      "所以：difference / differentiation 可以存在，而 separation 作为身份前提被撤销。"
    ],
    corollary: "不二不要求抹平文化、角色、身体、偏好与边界。",
    invalid: "不能推出“所有差异都同样健康”或“权力差异可以被忽略”。"
  },
  T10: {
    no: "T10",
    title: "具身表达定理",
    statement: "当形式不再被当成 Self 的来源，它反而可以成为关系、沟通与真实 Self 的表达媒介。",
    premises: ["A6 目的决定功能", "B2 身份先在", "B5 合一—关系", "B6 具身创造"],
    proof: [
      "B2：Self 不由身体或人格制造。",
      "A6：形式的功能取决于目的。",
      "B5/B6：关系与形式可以承载真实 Self 的表达。",
      "所以：解除身体认同并不必然导向否定身体；它也可能释放身体新的用途。"
    ],
    corollary: "睡眠、医疗、饮食、触碰、语言、空间设计，都可以成为具身实践，而不只是‘世俗琐事’。",
    invalid: "不能推出“身体已经获得永恒本体地位”或“照顾身体就是觉醒”。"
  },
  T11: {
    no: "T11",
    title: "对话式创造定理",
    statement: "若创造发生在 union and relationship 中，那么创造更像回应性的对话，而不是孤立自我把意志强加给世界。",
    premises: ["B1 爱的条件", "B5 合一—关系", "B6 具身创造"],
    proof: [
      "B1：创造不是从根本匮乏出发去填补真实。",
      "B5：Self 在 union and relationship 中被认识。",
      "B6：creation 被描述为 dialogue，并进入形式。",
      "所以：创造包含给予、接收、回应和共同生成，而非个人控制。"
    ],
    corollary: "真正创造的问题更像‘此刻生命邀请什么表达？’而不只是‘我怎样让现实服从我？’",
    invalid: "不能推出吸引力法则式的‘思想必然制造指定外部结果’。"
  },
  T12: {
    no: "T12",
    title: "理论—实践闭环定理",
    statement: "若目的、身份、关系与形式属于同一系统，那么真正的认识最终必须在生活组织方式中留下可观察的痕迹。",
    premises: ["A6 目的决定功能", "A7 纠正", "B2 身份先在", "B3 全心", "B6 具身创造"],
    proof: [
      "A7：知觉纠正改变经验结构。",
      "B2/B3：真实身份要被完整地认识，而非只停在概念。",
      "A6/B6：形式会被目的重新赋予功能。",
      "所以：若长期只有理论语言改变，而关系、边界、时间、金钱、身体与行动毫无变化，就需要怀疑改变是否真正整合。"
    ],
    corollary: "衡量实践深度，不看会背多少术语，而看恐惧、定罪、控制和分离如何逐渐失去组织生活的权力。",
    invalid: "不能推出‘外在生活一定越来越顺利’；形式痕迹可能只是更清楚、更诚实、更少控制。"
  }
};

function renderTheorem(key) {
  const t = axiomTheorems[key];
  const panel = document.getElementById("axiomTheoremPanel");
  if (!t || !panel) return;
  panel.innerHTML = `
    <p class="eyebrow">THEOREM · ${t.no}</p>
    <h3>${t.title}</h3>
    <div class="ax-statement">${t.statement}</div>
    <div class="ax-premises">
      <span>依赖公理</span>
      <div>${t.premises.map(x => `<b>${x}</b>`).join("")}</div>
    </div>
    <div class="ax-proof">
      <span>证明思路</span>
      <ol>${t.proof.map(x => `<li>${x}</li>`).join("")}</ol>
    </div>
    <div class="ax-proof-bottom">
      <section><span>可得推论</span><p>${t.corollary}</p></section>
      <section class="invalid"><span>不能这样推出</span><p>${t.invalid}</p></section>
    </div>
  `;
}

document.querySelectorAll(".ax-theorem-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".ax-theorem-tab").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    renderTheorem(button.dataset.theorem);
  });
});

renderTheorem("T1");
