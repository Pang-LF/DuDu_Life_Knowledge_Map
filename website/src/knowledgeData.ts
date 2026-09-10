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
    progress: 16,
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
    progress: 10,
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
    connections: ['META.SYSTEMS.INTERDEPENDENCE', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE'],
  },
  {
    id: 'BUS.MEDIA.DISTRIBUTOR.DIRECTV',
    label: 'DIRECTV（分发与聚合）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'DIRECTV controls customer, billing, package, service, and product relationships while licensing most external content and coordinating third-party networks and apps.',
    connections: ['BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE', 'META.SYSTEMS.COUPLING'],
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
    connections: ['META.SYSTEMS.SYSTEM', 'META.SYSTEMS.FEEDBACK_LOOP', 'BUS.MEDIA.PAYTV.VALUE_CHAIN', 'BUS.MEDIA.DISTRIBUTOR.DIRECTV', 'BUS.MEDIA.AGGREGATOR'],
  },
]

export const todayBrief = {
  date: '2026-09-10',
  title: 'Day 3 — Feedback Loop（反馈回路）',
  question: '一家银行想通过卖证券和筹资本增强安全，为什么反而在两天内倒下？',
  reading: '45-60 min：跟随一笔未保险工资存款，看担忧、提款和流动性怎样形成返回起点的回路。',
  discussion: '20-30 min：重建完整反馈路径，并解释传统 Pay-TV Bundle 的聚合价值与权力边界。',
  next: '2026-09-11：Nonlinearity（非线性）——为什么小差异有时形成不成比例的结果？',
}

export const monthlyTrack = [
  'Systems Thinking（系统思维）',
  'Causal Reasoning（因果推理）',
  'Probability（概率）',
  'Bayesian Thinking（贝叶斯思维）',
  'Source Evaluation（信息源评估）',
  'Forecasting（预测）',
]
