export type Domain = {
  id: string
  nameEn: string
  nameZh: string
  modules: string[]
  progress: number
  active?: boolean
}

export type GraphNode = {
  id: string
  label: string
  domain: string
  mastery: string
  summary: string
  connections: string[]
}

export const domains: Domain[] = [
  {
    id: 'META',
    nameEn: 'META',
    nameZh: '元能力',
    progress: 28,
    active: true,
    modules: [
      'Systems Thinking（系统思维）',
      'Causal Reasoning（因果推理）',
      'Probability（概率）',
      'Bayesian Thinking（贝叶斯思维）',
      'Source Evaluation（信息源评估）',
      'Forecasting（预测）',
    ],
  },
  {
    id: 'SELF',
    nameEn: 'SELF',
    nameZh: '自我',
    progress: 0,
    modules: ['Cognition（认知）', 'Learning（学习）', 'Decision Making（决策）', 'Life Systems（人生系统）'],
  },
  {
    id: 'HUMAN',
    nameEn: 'HUMAN',
    nameZh: '人',
    progress: 0,
    modules: ['Psychology（心理学）', 'Behavioral Economics（行为经济学）', 'Social Dynamics（社会动力学）'],
  },
  {
    id: 'CIVILIZATION',
    nameEn: 'CIVILIZATION',
    nameZh: '文明',
    progress: 0,
    modules: ['Human Civilization（人类文明）', 'China（中国）', 'United States（美国）', 'World Order（世界秩序）'],
  },
  {
    id: 'SYSTEM',
    nameEn: 'SYSTEM',
    nameZh: '现代社会系统',
    progress: 0,
    modules: ['Economics（经济学）', 'Finance（金融）', 'Politics（政治）', 'Geopolitics（地缘政治）'],
  },
  {
    id: 'BUSINESS',
    nameEn: 'BUSINESS',
    nameZh: '商业',
    progress: 18,
    active: true,
    modules: ['Business Fundamentals（商业基础）', 'Industry Atlas（产业图谱）'],
  },
  {
    id: 'SCIENCE',
    nameEn: 'SCIENCE',
    nameZh: '科学',
    progress: 0,
    modules: ['Mathematics & Statistics（数学与统计）', 'Physics（物理）', 'Biology（生物学）'],
  },
  {
    id: 'FRONTIER',
    nameEn: 'FRONTIER',
    nameZh: '科技前沿',
    progress: 0,
    modules: ['Artificial Intelligence（人工智能）', 'AI Infrastructure（人工智能基础设施）', 'Robotics（机器人）'],
  },
  {
    id: 'WISDOM',
    nameEn: 'WISDOM',
    nameZh: '智慧',
    progress: 0,
    modules: ['Philosophy（哲学）', 'Intellectual Traditions（思想传统）', 'Art & Humanity（艺术与人文）'],
  },
]

export const nodes: GraphNode[] = [
  {
    id: 'META.SYSTEMS.SYSTEM',
    label: 'System（系统）',
    domain: 'META',
    mastery: 'L1 candidate',
    summary: 'The parent frame for understanding how relationships among parts produce behavior that cannot be inferred from a parts list.',
    connections: ['META.SYSTEMS.INTERDEPENDENCE', 'META.SYSTEMS.COUPLING', 'BUS.MEDIA.PAYTV.VALUE_CHAIN'],
  },
  {
    id: 'META.SYSTEMS.INTERDEPENDENCE',
    label: 'Interdependence（相互依赖）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'A part can perform only when other parts align in time, location, state, and constraints. Local health therefore does not guarantee system capability.',
    connections: ['META.SYSTEMS.SYSTEM', 'META.SYSTEMS.COUPLING', 'CASE.SOUTHWEST.2022_MELTDOWN', 'BUS.MEDIA.PAYTV.VALUE_CHAIN'],
  },
  {
    id: 'META.SYSTEMS.COUPLING',
    label: 'Coupling（耦合）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'A local state change alters the conditions faced by connected parts. Connections can share capacity in normal times and transmit disturbance when margins or controls fail.',
    connections: ['META.SYSTEMS.SYSTEM', 'META.SYSTEMS.INTERDEPENDENCE', 'META.SYSTEMS.FEEDBACK_LOOP', 'CASE.NORTHEAST_BLACKOUT.2003', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV'],
  },
  {
    id: 'META.SYSTEMS.FEEDBACK_LOOP',
    label: 'Feedback Loop（反馈回路）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'A system result returns through a causal path to alter its starting condition, either reinforcing the original direction or balancing a deviation.',
    connections: ['META.SYSTEMS.COUPLING', 'META.SYSTEMS.NONLINEARITY', 'CASE.SVB.2023_BANK_RUN', 'BUS.SUBSCRIPTION.BUNDLE'],
  },
  {
    id: 'META.SYSTEMS.NONLINEARITY',
    label: 'Nonlinearity（非线性）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'Equal input changes need not produce equal output changes. Near a functional boundary, a small additional step can switch a system from operating to failure.',
    connections: ['META.SYSTEMS.FEEDBACK_LOOP', 'META.SYSTEMS.BOTTLENECK', 'CASE.CHALLENGER.1986', 'BUS.MEDIA.ESPN.BUNDLE_POWER'],
  },
  {
    id: 'META.SYSTEMS.BOTTLENECK',
    label: 'Bottleneck（瓶颈）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'The current constraint whose marginal effective capacity most limits whole-system throughput. Improving a non-bottleneck creates queues; relieving it moves the constraint.',
    connections: ['META.SYSTEMS.NONLINEARITY', 'CASE.TESLA.MODEL3_RAMP.2017_2018', 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT'],
  },
  {
    id: 'CASE.TESLA.MODEL3_RAMP.2017_2018',
    label: 'Model 3 Ramp（Model 3 产能爬坡）',
    domain: 'META',
    mastery: 'Case studied',
    summary: 'Battery module assembly limited complete-vehicle flow despite faster local subsystems; after production improved, the constraint moved toward assembly and delivery logistics.',
    connections: ['META.SYSTEMS.BOTTLENECK'],
  },
  {
    id: 'CASE.CHALLENGER.1986',
    label: 'Challenger STS-51L（挑战者号事故）',
    domain: 'META',
    mastery: 'Case studied',
    summary: 'Cold slowed O-ring recovery while the booster field joint opened during ignition, turning a dynamic sealing margin into a failed pressure boundary.',
    connections: ['META.SYSTEMS.NONLINEARITY'],
  },
  {
    id: 'CASE.SVB.2023_BANK_RUN',
    label: 'SVB 2023 Bank Run（硅谷银行挤兑）',
    domain: 'META',
    mastery: 'Case studied',
    summary: 'Concern drove uninsured deposit withdrawals; withdrawals reduced liquidity and exposed distress; visible distress returned as stronger concern.',
    connections: ['META.SYSTEMS.FEEDBACK_LOOP'],
  },
  {
    id: 'CASE.NORTHEAST_BLACKOUT.2003',
    label: '2003 Northeast Blackout（北美东北部大停电）',
    domain: 'META',
    mastery: 'Case studied',
    summary: 'Line outages redistributed power onto remaining paths while operators lost situational awareness, allowing a local Ohio disturbance to become a regional cascade.',
    connections: ['META.SYSTEMS.COUPLING'],
  },
  {
    id: 'CASE.SOUTHWEST.2022_MELTDOWN',
    label: 'Southwest 2022（西南航空运营崩溃）',
    domain: 'META',
    mastery: 'Case studied',
    summary: 'A healthy aircraft and a legal crew can still be unusable when they are in different cities; the 2022 disruption exposed system capability living in their coordination.',
    connections: ['META.SYSTEMS.INTERDEPENDENCE'],
  },
  {
    id: 'BUS.MEDIA.PAYTV.VALUE_CHAIN',
    label: 'Pay-TV Value Chain（付费电视价值链）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'Consumers, distributors, programmers, rights holders, advertisers, and platforms exchange content, access, money, attention, and customer relationships.',
    connections: ['META.SYSTEMS.INTERDEPENDENCE', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE', 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT'],
  },
  {
    id: 'BUS.MEDIA.DISTRIBUTOR.DIRECTV',
    label: 'DIRECTV（分发与聚合）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'DIRECTV controls customer, billing, package, service, and product relationships while licensing most external content and coordinating third-party networks and apps.',
    connections: ['BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE', 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT', 'META.SYSTEMS.COUPLING'],
  },
  {
    id: 'BUS.MEDIA.AGGREGATOR',
    label: 'Aggregator（聚合平台）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'A platform that reduces search, billing, identity, and discovery friction across fragmented media services.',
    connections: ['META.SYSTEMS.SYSTEM', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.SUBSCRIPTION.BUNDLE'],
  },
  {
    id: 'BUS.SUBSCRIPTION.BUNDLE',
    label: 'Bundle（捆绑）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'A broad package can smooth heterogeneous household valuations and combine search, contracting, delivery, billing, service, and content funding into one recurring product.',
    connections: ['META.SYSTEMS.SYSTEM', 'META.SYSTEMS.FEEDBACK_LOOP', 'BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.MEDIA.AGGREGATOR', 'BUS.MEDIA.ESPN.BUNDLE_POWER', 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT'],
  },
  {
    id: 'BUS.MEDIA.ESPN.BUNDLE_POWER',
    label: 'ESPN Bundle Power（ESPN 套餐议价权）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'Receiving-subscriber fees and scarce live sports let ESPN seek broad carriage, so non-viewing households indirectly entered the bundle cost base.',
    connections: ['BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.SUBSCRIPTION.BUNDLE', 'META.SYSTEMS.NONLINEARITY', 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT'],
  },
  {
    id: 'BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT',
    label: 'Cord Cutting（剪线退订）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'Canceling traditional multichannel Pay-TV removes a recurring payer from the affiliate-fee, advertising-reach, and shared-cost system while video consumption moves elsewhere.',
    connections: ['BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.SUBSCRIPTION.BUNDLE', 'BUS.MEDIA.ESPN.BUNDLE_POWER', 'META.SYSTEMS.FEEDBACK_LOOP', 'META.SYSTEMS.BOTTLENECK'],
  },
]

export const todayBrief = {
  date: '2026-09-12',
  title: 'Day 5 — Bottleneck（瓶颈）',
  question: '为什么高速冲压、喷漆和电机生产都不能阻止 Model 3 在 2017 年第三季度只造出 260 辆？',
  reading: '45-60 min：跟随一辆缺少完整电池包的 Model 3，识别控制整体吞吐量的移动约束。',
  discussion: '20-30 min：用边际产能寻找瓶颈，并追踪一个家庭退出传统 Pay-TV 后的钱流与权力变化。',
  next: '2026-09-13：Delay（延迟）——为什么行动与结果之间的时间差会制造错误判断？',
}

export const monthlyTrack = [
  'Systems Thinking（系统思维）',
  'Causal Reasoning（因果推理）',
  'Probability（概率）',
  'Bayesian Thinking（贝叶斯思维）',
  'Source Evaluation（信息源评估）',
  'Forecasting（预测）',
]
