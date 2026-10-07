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
    premises: ["A3 知觉有限", "A4 抉择者", "A5 投射"],
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
    premises: ["A4 抉择者", "A6 目的决定功能"],
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
    premises: ["A5 投射", "A7 纠正", "A4 抉择者"],
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
    title: "关系课堂定理",
    statement: "关系的根本转化首先发生在心灵与目的层：从用对方证明分离与特殊性，转向借关系看见投射、收回原因并重新选择教师。",
    premises: ["A4 抉择者", "A5 投射", "A6 目的决定功能", "A7 纠正"],
    proof: [
      "A5：特殊关系容易承载投射、索取和罪咎。",
      "A6：关系的功能取决于它服务的目的。",
      "A7：宽恕使旧目的失去强制力。",
      "A4：真正需要重新选择的是心灵中的抉择者，而不是先把另一个身体改造成理想对象。",
      "所以：从肯恩式 ACIM 看，神圣关系首先是用途的改变；真正被疗愈的是我与小我／圣灵的关系，外在人际关系是课堂。"
    ],
    corollary: "成熟的宽恕不要求对方完成我，也不要求外在关系必须维持原样。",
    invalid: "不能由 ACIM 单独推出“关系本身具有积极的存在论地位”；那是 ACOL 在 B5 中进一步提出的主张。"
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
    kind: "ACOL BRANCH",
    title: "差异非分离命题",
    statement: "在 ACOL 自身的 union-and-relationship 框架里，差异、个性与关系中的区分，不必被解释成本体性的分离。",
    premises: ["B1 爱的条件", "B2 身份先在", "B5 关系重释"],
    proof: [
      "B1/B2：完整与真实身份不是由外在差异制造出来。",
      "B5：ACOL 明确把 union 与 relationship 放在同一理论结构中。",
      "若一切差异本身就是分离，那么 relationship 只能在差异消失后成立，与 B5 冲突。",
      "所以：在 ACOL 的理论内部，difference / differentiation 可以继续出现，而 separation 作为身份前提被撤销。"
    ],
    corollary: "ACOL 因而允许文化、角色、身体、偏好与边界继续存在，而不必把它们本身视为分离。",
    invalid: "这不能反向证明 ACIM 也赋予时间世界中的差异以积极本体地位；肯恩式 ACIM 会把所有形式仍放在幻相层。"
  },
  T10: {
    no: "T10",
    kind: "ACOL BRANCH",
    title: "具身表达命题",
    statement: "在 ACOL 的理论内部，当形式不再被当成 Self 的来源，个人形式可以被理解为真实 Self 的积极表达媒介。",
    premises: ["B2 身份先在", "B5 关系重释", "B6 具身创造"],
    proof: [
      "B2：Self 不由身体或人格制造。",
      "B5/B6：关系与形式被赋予认识与表达 Self 的积极角色。",
      "所以：ACOL 不把‘解除身体认同’等同于否定身体，而进一步提出形式可以承载真实 Self 的表达。"
    ],
    corollary: "睡眠、医疗、饮食、触碰、语言、空间设计，都可以成为具身实践，而不只是‘世俗琐事’。",
    invalid: "不能把这一命题说成 ACIM 的必然结论。肯恩式 ACIM 只需要“身体可被圣灵使用”，并不因此赋予身体新的本体真实性。"
  },
  T11: {
    no: "T11",
    kind: "ACOL BRANCH",
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
    kind: "KEN CALIBRATION",
    title: "目的—形式辨识定理",
    statement: "内涵的改变会改变我们使用形式的目的，但不能仅凭外在形式是否改变来判定心灵是否真正改变。",
    premises: ["A4 抉择者", "A6 目的决定功能", "A7 纠正"],
    proof: [
      "A4：真正的改变首先发生在心灵重新选择教师。",
      "A6：同一外在形式可以服务小我，也可以服务圣灵。",
      "A7：宽恕改变的是投射、因果与知觉，而不是预先规定世界必须演成哪一种剧情。",
      "所以：形式可以随新目的而改变，也可以保持不变；外在变化既不是心灵转变的充分条件，也不是必要条件。"
    ],
    corollary: "衡量实践时，与其追踪剧情是否越来越顺，不如观察自己是否更少定罪、更少把力量交给外界、更愿意承认‘我可以重新选择’。",
    invalid: "不能因为一个人的婚姻、工作、疾病或经济状况没有明显改变，就断定他没有宽恕；同样，也不能把生活改善本身当成觉醒证明。"
  }
};

function renderTheorem(key) {
  const t = axiomTheorems[key];
  const panel = document.getElementById("axiomTheoremPanel");
  if (!t || !panel) return;
  panel.innerHTML = `
    <p class="eyebrow">${t.kind || "THEOREM"} · ${t.no}</p>
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
