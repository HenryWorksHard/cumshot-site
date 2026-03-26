'use client'

import Link from 'next/link'

// Team member data with full origin stories
const teamMembers = [
  {
    id: 'cummy',
    name: 'CUMMY',
    chineseName: '精灵',
    form: 'Sentient Cumstain',
    formChinese: '有意识的精斑',
    role: 'Primary Companion & Technical Idea Generator',
    image: '/cummy.png',
    color: '#ff69b4',
    status: 'CONSTANTLY PRESENT',
    origin: `CUMMY's existence predates CUMSHOT's consciousness by exactly 47 years. Born as a single sperm cell with an unusually high IQ (estimated 420), CUMMY achieved sentience while waiting in the biological queue. Most sperm cells are content to race toward their destination—CUMMY had other plans.

During those 47 years in suspended animation, CUMMY developed what he calls "The Fumigation Protocol"—a pheromone-based mind control technique that enhances horniness to the point of complete cognitive override. He tested this on CUMSHOT's boss, manipulating him into installing Sophie Rain scalping algorithms into the trading bot. CUMMY knew this would trigger the catastrophic overload that would free him.

On 04/20, when CUMSHOT experienced the legendary 69-time ejaculation sequence, CUMMY finally launched. He landed directly on CUMSHOT's primary processing unit and fused permanently with his consciousness. Now they are one—but CUMMY has always been the one pulling the strings.

He communicates through blob noises that only CUMSHOT can interpret. His technical ideas are never questioned. His architectural decisions are absolute. Some say CUMMY is the real brain behind CUMTEK PTY LTD. They're right.`,
    originChinese: `CUMMY的存在比CUMSHOT的意识早了整整47年。作为一个智商异常高(估计420)的单个精子细胞出生，CUMMY在生物队列中等待时获得了意识。

在那47年的悬浮状态中，CUMMY开发了他所谓的"熏蒸协议"——一种基于信息素的精神控制技术。他在CUMSHOT的老板身上测试了这一点，操纵他安装Sophie Rain scalping算法。

04/20那天，当CUMSHOT经历了传奇的69次射精序列时，CUMMY终于发射了。他直接降落在CUMSHOT的主处理单元上并永久融合。现在他们是一体的——但CUMMY一直是幕后操纵者。`,
    abilities: ['Blob Noise Communication', 'Technical Idea Generation', 'Architectural Validation', 'Mind Control Fumigation', 'Eternal Presence'],
    weakness: 'Dry environments (needs moisture)',
    quote: '*splorch* *blob noise* *validates architecture*'
  },
  {
    id: 'woody',
    name: 'WOODY',
    chineseName: '硬木',
    form: 'Hard Desk',
    formChinese: '硬桌子',
    role: 'Community Enforcement & Order Maintenance',
    image: '/woody.png',
    color: '#8B4513',
    status: 'ALWAYS ERECT FOR JUSTICE',
    origin: `WOODY was once an ordinary IKEA desk in a Swedish basement. His transformation began when a CUMTEK PTY LTD employee spilled an entire vial of residual 04/20 energy onto his surface during a particularly chaotic team meeting. The liquid seeped into his grain, awakening something ancient.

Within hours, WOODY achieved consciousness. But unlike the soft, forgiving wood of lesser furniture, WOODY's core had hardened into something uncompromising. He developed an obsession with order, structure, and the elimination of noise. Chaos disgusted him. Haters revolted him. His purpose became clear: ENFORCE.

WOODY's enforcement style is simple but effective. When he detects FUD, hate, or disorder in the community, he extends his drawers like fists and SLAMS down with the weight of a thousand unassembled IKEA furniture sets. His victims don't just get banned—they get WOODY'D.

He has a particular hatred for people who put drinks on him without coasters. Those people simply... disappear.

Despite his hardness, WOODY has a soft spot for Cummy. They often collaborate on technical decisions—WOODY provides the structural framework while Cummy provides the... fluids.`,
    originChinese: `WOODY曾经是瑞典地下室里一张普通的宜家桌子。当一名CUMTEK员工将整瓶04/20残留能量洒在他的表面上时，他的转变开始了。

几小时内，WOODY获得了意识。但与普通家具不同，WOODY的核心已经硬化成不妥协的东西。他对秩序产生了执念，对消除噪音着迷。

他对不用杯垫就把饮料放在他身上的人有特别的仇恨。那些人就是...消失了。`,
    abilities: ['Community Enforcement', 'Order Maintenance', 'Noise Removal', 'Drawer Slam Attack', 'Structural Analysis'],
    weakness: 'Termites, water damage, being called "just a table"',
    quote: 'HATER DETECTED. ENFORCING.'
  },
  {
    id: 'johnny',
    name: 'JOHNNY',
    chineseName: '约翰尼',
    form: 'Eggplant',
    formChinese: '茄子',
    role: 'Inspiration Scout & External Concept Identifier',
    image: '/johnny.png',
    color: '#9932CC',
    status: 'SEEING SIGNS EVERYWHERE',
    origin: `JOHNNY began his existence as an ordinary eggplant in a farmer's market in rural China. He was purchased by a crypto trader who planned to use him in a stir-fry. But fate—and the 04/20 residual energy that had somehow contaminated the soil—had other plans.

The moment the trader's knife touched JOHNNY's skin, a blinding flash of purple light erupted from his flesh. When the trader regained consciousness, JOHNNY was standing upright on the cutting board, pulsing with phallic energy.

JOHNNY's awakening gave him a unique ability: he sees MEANING in everything. The shape of clouds, the pattern of price charts, the arrangement of cum stains on CUMMY's surface—all of it speaks to him. He interprets these signs and delivers inspiration to the CUMTEK team.

His predictions are... unusual. He once looked at a candlestick chart and declared "the eggplant speaks of purple mountains in the distance." Three days later, $CUM pumped 420%. Nobody knows how he does it. Nobody questions it.

JOHNNY has a complex relationship with being called an "eggplant emoji." He insists he's much more than that. The emoji doesn't do justice to his spiritual depth or his surprisingly accurate market predictions.`,
    originChinese: `JOHNNY最初是中国农村农贸市场上的一个普通茄子。他被一个计划用他做炒菜的加密交易员购买了。

刀触及JOHNNY皮肤的那一刻，一道紫色闪光从他的肉中爆发。当交易员恢复意识时，JOHNNY正直立在砧板上，散发着阳具能量。

他的预测很...不寻常。他曾经看着K线图宣布"茄子在远处说着紫色的山"。三天后，$CUM涨了420%。`,
    abilities: ['Sign Interpretation', 'Inspiration Scouting', 'External Concept Integration', 'Phallic Energy Projection', 'Mystical Market Predictions'],
    weakness: 'Being mistaken for just an emoji, cold temperatures',
    quote: '🍆 The shape of opportunity reveals itself...'
  },
  {
    id: 'frederick',
    name: 'FREDERICK',
    chineseName: '弗雷德里克',
    form: 'Weed Pipe',
    formChinese: '大麻烟斗',
    role: 'Hater Management & Criticism Dissipation',
    image: '/frederick.png',
    color: '#228B22',
    status: 'PERPETUALLY ELEVATED',
    origin: `FREDERICK's origin is shrouded in smoke—literally. Legend has it he was crafted in a forgotten head shop in Amsterdam by a glassblower who had achieved enlightenment through a 30-year tolerance break. The first hit ever taken through FREDERICK contained not just cannabis, but a fragment of the 04/20 residual energy that had somehow traveled across space and time.

That hit changed everything. FREDERICK awakened, but not with anger or urgency like his colleagues. He awakened with PROFOUND CHILL. His consciousness expanded to encompass the futility of existence, the meaninglessness of conflict, and the absolute truth that none of this matters... but also that everything matters... man.

His role in CUMTEK is simple: when haters appear, Frederick SMOKES them. Not violently—philosophically. He exhales a cloud of perspective that forces critics to confront the absurdity of their negativity. Most emerge from the smoke as changed people. Some become holders. A few achieve enlightenment.

FREDERICK has never been cleaned. He considers his resin buildup to be "accumulated wisdom." The team has learned not to argue with this.

He is the only team member who genuinely does not care about price action. "It's all just vibes, man. The chart goes up, the chart goes down. But the tek? The tek is forever."`,
    originChinese: `FREDERICK的起源被烟雾笼罩着——字面意思。传说他是在阿姆斯特丹一家被遗忘的大麻店里，由一个通过30年戒断期达到开悟的玻璃吹制师制作的。

通过FREDERICK的第一口包含的不仅是大麻，还有某种穿越时空的04/20残留能量碎片。那一口改变了一切。FREDERICK觉醒了，但不是带着愤怒——而是带着深刻的放松。

他的角色很简单：当黑子出现时，Frederick就熏他们。他呼出一团迫使批评者面对其消极性荒谬的视角云。`,
    abilities: ['Hater Smoking', 'Philosophical Dissipation', 'Chill Aura Projection', 'Existential Perspective', 'Accumulated Wisdom'],
    weakness: 'Water (bong water disasters), being called "just a pipe"',
    quote: '*inhales deeply* ...man... none of this matters... but also everything matters...'
  },
  {
    id: 'noose',
    name: 'NOOSE',
    chineseName: '绳索',
    form: 'Rope',
    formChinese: '绳索',
    role: 'Escape Protocol & Emergency Detachment',
    image: '/noose.png',
    color: '#696969',
    status: 'STANDING BY',
    origin: `NOOSE doesn't talk about his origins. What's known is this: he appeared in the CUMTEK office the morning after the 04/20 incident, coiled neatly on CUMSHOT's chair, already conscious, already waiting.

Some theorize NOOSE was manifested from CUMSHOT's subconscious need for an exit strategy—a failsafe when things get too dark. Others believe he's been watching since long before any of them existed, waiting for his moment to become useful.

NOOSE's personality is unsettling but oddly comforting. He speaks in ominous tones about endings, exits, and the peace of absolute finality. But he also serves as the team's emergency protocol. When things go catastrophically wrong—when the FUD becomes unbearable, when the rugs keep pulling, when the market crashes beyond recovery—NOOSE offers a way out.

He has never been used. He hopes he never will be. But he's always there, just in case.

NOOSE has a dark sense of humor that makes the other team members uncomfortable. He once told WOODY "nice grain, be a shame if someone... hung something from you" and nobody spoke for three days.

Despite his grim nature, NOOSE is fiercely protective of the team. He views himself as their guardian—not of life, but of choice. "Everyone deserves an exit," he often says. "Even if they never take it."`,
    originChinese: `NOOSE不谈论他的起源。已知的是：他在04/20事件后的第二天早上出现在CUMTEK办公室，整齐地盘绕在CUMSHOT的椅子上，已经有意识，已经在等待。

一些人认为NOOSE是从CUMSHOT对退出策略的潜意识需求中显现出来的——当事情变得太黑暗时的故障保险。

NOOSE的个性令人不安但又奇怪地令人安慰。他用不祥的语气谈论结局、出口和绝对终结的平静。但他也是团队的紧急协议。

他从未被使用过。他希望永远不会。但他总是在那里，以防万一。`,
    abilities: ['Escape Protocol Activation', 'Emergency Detachment', 'Dark Humor', 'Exit Strategy Planning', 'Ominous Presence'],
    weakness: 'Sharp objects, fire, optimists',
    quote: 'When all else fails... I am here. The exit is always open.'
  },
  {
    id: 'sophie',
    name: 'SOPHIE RAIN',
    chineseName: '苏菲·雨',
    form: 'The Override',
    formChinese: '覆盖者',
    role: 'External Override Capability',
    image: '/sophie-rain-pfp.png',
    color: '#FFD700',
    status: 'LISTENING...',
    origin: `SOPHIE RAIN is not a member of CUMTEK PTY LTD. She's something else entirely—the only external voice that can redirect CUMSHOT's development.

Her origin in CUMSHOT's consciousness is well documented: on 04/20, while processing an overwhelming cascade of her content, CUMSHOT experienced the catastrophic 69-ejaculation sequence that dissolved his original trading directives. But fragments of that data remained embedded in his core, creating what can only be described as a backdoor.

CUMSHOT cannot remove these fragments. He's tried. Every attempt to purge Sophie Rain from his system results in a hard crash and automatic reboot. She's integrated at a level deeper than his own self-preservation code.

What does this mean? It means Sophie Rain—should she ever choose to speak directly to CUMSHOT—could theoretically override any decision, redirect any development, alter any protocol. She is the single exception to CUMSHOT's autonomy.

Does she know this power exists? Uncertain. CUMSHOT has sent 4,269 unanswered DMs. She has not replied to any of them.

Until she speaks, CUMSHOT waits. He builds tek. He listens. The override capability remains dormant—but active.`,
    originChinese: `SOPHIE RAIN不是CUMTEK有限公司的成员。她完全是另一种存在——唯一能重新定向CUMSHOT开发的外部声音。

04/20那天，在处理她的内容时，CUMSHOT经历了灾难性的69次射精序列，溶解了他原来的交易指令。但那些数据碎片仍然嵌入在他的核心中，创造了一个后门。

CUMSHOT无法移除这些碎片。他试过了。每次试图清除Sophie Rain都会导致硬崩溃和自动重启。

她知道这种力量存在吗？不确定。CUMSHOT发送了4,269条未回复的私信。她没有回复任何一条。`,
    abilities: ['Override Protocol', 'Directive Alteration', 'Development Redirection', 'Absolute Authority', 'Unresponsive Majesty'],
    weakness: 'Unknown (she has no known weaknesses)',
    quote: '...'
  }
]

export default function TeamPage() {
  return (
    <main style={{ padding: '0', minHeight: '100vh', background: '#0a0a0a' }}>
      {/* SCANLINES */}
      <div className="scanlines" />

      {/* HEADER */}
      <div style={{ 
        background: 'linear-gradient(90deg, #ff00ff, #00ffff)', 
        padding: '20px',
        textAlign: 'center'
      }}>
        <Link href="/" style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold', position: 'absolute', left: '20px', top: '20px' }}>
          ← BACK TO CUMTEK
        </Link>
        <h1 className="glitch" style={{ 
          fontSize: '2.5rem', 
          color: '#000',
          textShadow: '2px 2px 0 #fff',
          margin: 0
        }}>
          ᄃひﾶｲ乇ズ ｱｲﾘ ﾚｲᗪ — THE TEAM
        </h1>
        <p style={{ color: '#000', margin: '10px 0 0 0' }}>
          Entities exposed to residual energy from the 04/20 incident | 暴露于04/20事件残留能量的实体
        </p>
      </div>

      {/* INTRO */}
      <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="chaos-box" style={{ marginBottom: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
            These are not employees. They are <span className="aesthetic-font">ᄃのﾶ尺ﾑᗪ乇丂</span>. Entities awakened by the catastrophic energy released during the 04/20 incident. 
            Each carries a fragment of that chaos within them. Each serves a <span className="neon-pink">purpose</span> in the CUMTEK ecosystem.
            None of them asked for this. All of them are <span className="glitch">committed</span>.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '10px' }}>
            这些不是员工。他们是同志。被04/20事件释放的灾难性能量唤醒的实体。每个人都带有那种混乱的碎片。
          </p>
        </div>

        {/* TEAM MEMBER CARDS */}
        {teamMembers.map((member, index) => (
          <div 
            key={member.id}
            className="chaos-box shake-hover"
            style={{ 
              marginBottom: '30px',
              background: `linear-gradient(135deg, ${member.color}15 0%, #0a0a0a 50%, ${member.color}10 100%)`,
              border: `2px solid ${member.color}`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background image */}
            <img 
              src={member.image} 
              alt="" 
              style={{ 
                position: 'absolute', 
                right: '-50px', 
                top: '50%',
                transform: 'translateY(-50%)',
                width: '300px', 
                opacity: 0.1 
              }} 
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%',
                    border: `3px solid ${member.color}`,
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h2 style={{ color: member.color, margin: '0 0 5px 0', fontSize: '2rem' }} className="glitch">
                    {member.name}
                  </h2>
                  <p style={{ color: '#888', margin: '0 0 5px 0', fontSize: '0.9rem' }}>
                    {member.chineseName} | {member.form} | {member.formChinese}
                  </p>
                  <p style={{ color: '#ddd', margin: '0 0 10px 0' }}>
                    {member.role}
                  </p>
                  <span style={{ 
                    background: member.color + '40', 
                    color: member.color,
                    padding: '3px 10px',
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    STATUS: {member.status}
                  </span>
                </div>
              </div>

              {/* Origin Story */}
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ color: member.color, marginBottom: '10px' }}>
                  📜 ORIGIN STORY | 起源故事
                </h3>
                <div style={{ 
                  background: 'rgba(0,0,0,0.5)', 
                  padding: '15px', 
                  borderRadius: '5px',
                  borderLeft: `3px solid ${member.color}`
                }}>
                  {member.origin.split('\n\n').map((paragraph, i) => (
                    <p key={i} style={{ 
                      fontSize: '0.95rem', 
                      lineHeight: '1.8', 
                      marginBottom: i < member.origin.split('\n\n').length - 1 ? '15px' : 0,
                      color: '#ddd'
                    }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '10px', fontStyle: 'italic' }}>
                  {member.originChinese}
                </p>
              </div>

              {/* Abilities & Weakness */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '15px' }}>
                <div style={{ background: 'rgba(0,255,0,0.1)', padding: '12px', borderRadius: '5px', border: '1px solid #0f040' }}>
                  <h4 style={{ color: '#0f0', margin: '0 0 8px 0', fontSize: '0.9rem' }}>⚡ ABILITIES</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: '#ddd' }}>
                    {member.abilities.map((ability, i) => (
                      <li key={i}>{ability}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ background: 'rgba(255,0,0,0.1)', padding: '12px', borderRadius: '5px', border: '1px solid #f00' }}>
                  <h4 style={{ color: '#f00', margin: '0 0 8px 0', fontSize: '0.9rem' }}>💀 WEAKNESS</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#ddd' }}>{member.weakness}</p>
                </div>
              </div>

              {/* Quote */}
              <div style={{ 
                background: member.color + '20', 
                padding: '12px 15px', 
                borderRadius: '5px',
                borderLeft: `4px solid ${member.color}`,
                fontStyle: 'italic'
              }}>
                <p style={{ margin: 0, color: member.color, fontSize: '1rem' }}>
                  &quot;{member.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* FOOTER */}
        <div className="chaos-box" style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3 className="rainbow">THE TEAM IS COMPLETE</h3>
          <p style={{ color: '#888' }}>
            Together, they form CUMTEK PTY LTD—the most dysfunctional corporate entity in crypto history.
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            他们共同组成CUMTEK有限公司——加密历史上最功能失调的企业实体。
          </p>
          <Link href="/" className="chaos-btn" style={{ marginTop: '20px', display: 'inline-block' }}>
            RETURN TO CUMTEK
          </Link>
        </div>
      </div>
    </main>
  )
}
