const scenarios={
work:{title:"工作压力：项目延期、被否定、KPI 压力",fact:"先把事件还原：发生了什么？哪些是事实，哪些是你对领导、同事或自己的解释？",acim:"ACIM 镜头：我是否把结果变成了自我价值的判决？我是否已经制造了敌人、评委或必须被证明的人？如果目标从“证明我够好”改为“服务清晰与共同利益”，我会看到什么不同？",acol:"ACOL 镜头：如果我的价值无需靠这次结果建立，我怎样能更完整地参与这项工作？心、心智、身体与关系现在各自提供什么信息？",action:"落地：列出一个不攻击自己、不推责、也不回避事实的下一步：重新排期、澄清责任、请求资源、承认错误、缩小范围或直接沟通。",boundary:"提醒：灵性练习不要求你接受不合理工作条件。事实、职责、劳动边界仍然需要清楚。"},
conflict:{title:"关系冲突：我觉得你不理解我",fact:"先问：对方实际说了什么、做了什么？我又补上了哪些“你总是……”“你根本……”？",acim:"ACIM 镜头：我是不是正在用定罪保护自己？我想从对方那里获得什么特殊确认？如果不需要赢，我真正需要表达的事实与需要是什么？",acol:"ACOL 镜头：合一不要求我们意见一致。怎样既保留两个人的差异，又不把差异解释成隔绝或敌意？",action:"落地：用“当……发生时，我感到……我希望……”表达，不读心、不贴标签；同时给对方真正回应的空间。",boundary:"提醒：反复羞辱、控制、暴力或胁迫不是“神圣关系练习题”。必要时离开并寻求支持。"},
money:{title:"金钱焦虑：不够、失去、比较",fact:"写清楚数字：收入、支出、债务、现金流、期限。把客观财务情况与灾难化想象分开。",acim:"ACIM 镜头：我把安全、自由、价值或特殊地位投射到金钱上了吗？我是否相信“别人多一点，我就少一点”？",acol:"ACOL 镜头：资源如何服务关系、给予、接收和创造？不以牺牲为美德，也不以占有为安全，什么是更完整的资源关系？",action:"落地：做一个具体财务动作——预算、取消一项支出、讨论价格、提高报价、还债计划、建立应急金或寻求专业建议。",boundary:"提醒：不要用“宇宙会供应”替代预算、合同、税务和风险管理。"},
body:{title:"身体与健康：焦虑、疲惫、形象",fact:"身体现在真正出现了什么：疼痛、疲惫、睡眠不足、紧张？哪些是医学事实，哪些是对未来的想象？",acim:"ACIM 镜头：我是否把身体状态等同于全部的我？我是否在用身体证明罪咎、失败、特殊性或价值？",acol:"ACOL 镜头：不把身体当 Self 的全部，也不把它当敌人。它是否正在邀请我休息、表达、调整节律或更真实地照顾自己？",action:"落地：今天做一个身体层面的具体照顾：就医、检查、散步、睡眠、饮食、停止过量工作或减少刺激。",boundary:"提醒：任何持续或严重症状都应由合格医疗专业人员评估。"},
choice:{title:"重大选择：去留、合作、关系、方向",fact:"列出已知事实、未知变量、最迟决定时间和可逆性。",acim:"ACIM 镜头：哪个选项在承诺“只要选我，你就终于完整/特别/安全”？我是在逃离恐惧还是朝向真正目的？",acol:"ACOL 镜头：Wholeheartedness 要求我同时听见心、心智、身体、关系和现实，而不是只抓住一个声音宣布它是真理。",action:"落地：如果可逆，先做小实验；如果不可逆，明确价值排序、风险边界与承担后果的意愿。",boundary:"提醒：内在平静是信息之一，不是对未来结果的保证。"},
boundary:{title:"边界与拒绝：怕别人失望",fact:"对方具体请求了什么？你实际能承担多少？如果答应，真实成本是什么？",acim:"ACIM 镜头：我是不是用牺牲换取爱、好人形象或避免罪咎？牺牲是否真的能产生和平？",acol:"ACOL 镜头：关系中的合一不等于混同。一个真实的“是”需要一个同样真实的“不”作为边界。",action:"落地：用简洁句式表达：“这件事我不能承担；我能提供的是……”。不要附加长篇自我辩护。",boundary:"提醒：边界不是惩罚对方，而是对自己能真实参与到什么程度负责。"},
creation:{title:"创作与使命：想做，又怕没人看见",fact:"你究竟想创造什么？下一步最小可完成的作品是什么？",acim:"ACIM 镜头：我是否把作品变成证明“我特殊/有价值”的工具？如果没有掌声，这件事是否仍值得做？",acol:"ACOL 镜头：什么真实想通过你的独特形式获得表达？个人性不必被消灭，它可以不再服务分离，而服务创造。",action:"落地：设一个小而具体的完成点：写 300 字、做一个 demo、发出邀请、完成一页，而不是等待“完全确定”。",boundary:"提醒：使命感不能替代技艺、反馈、编辑与长期投入。"},
leadership:{title:"领导与带领：权力、责任、群体",fact:"现在真正需要你决定什么？哪些责任属于你，哪些属于团队？",acim:"ACIM 镜头：我是在通过控制、羞耻和恐惧获得秩序，还是在服务共同目的？我是否把异议看成对自我价值的攻击？",acol:"ACOL 镜头：关系不是管理工具。怎样让不同个体保持真实表达，同时形成共享方向与共同创造？",action:"落地：把隐性期待显性化：目标、边界、角色、决策权、反馈方式。少一点人格控制，多一点结构清晰。",boundary:"提醒：非控制不等于无领导。承担责任、做艰难决定和处理绩效，仍然可能是爱的具体形式。"}
};
function renderScenario(key){
  const s=scenarios[key]; const el=document.getElementById("scenarioPanel");
  el.innerHTML='<p class="eyebrow">现实场景</p><h3>'+s.title+'</h3>'+
  '<div class="scenario-steps"><div><b>先还原事实</b><p>'+s.fact+'</p></div>'+
  '<div><b>ACIM · 看见与松开</b><p>'+s.acim+'</p></div>'+
  '<div><b>ACOL · 接受与表达</b><p>'+s.acol+'</p></div>'+
  '<div><b>下一步行动</b><p>'+s.action+'</p></div></div>'+
  '<p class="scenario-boundary">'+s.boundary+'</p>';
}
document.querySelectorAll(".scenario-tab").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".scenario-tab").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); renderScenario(btn.dataset.scenario);
}));
renderScenario("work");
const ids=["factText","storyText","fearText","wholeText","actionText"], key="acim-acol-deep-journal-v1";
try{const saved=JSON.parse(localStorage.getItem(key)||"{}");ids.forEach(id=>{if(saved[id])document.getElementById(id).value=saved[id]})}catch(e){}
document.getElementById("saveDeepJournal").addEventListener("click",()=>{
 const data={}; ids.forEach(id=>data[id]=document.getElementById(id).value);
 data.savedAt=new Date().toISOString(); localStorage.setItem(key,JSON.stringify(data));
 document.getElementById("deepSaveState").textContent="已保存 · "+new Date().toLocaleString("zh-CN");
});