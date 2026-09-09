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
    progress: 8,
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
    progress: 4,
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
    connections: ['META.SYSTEMS.INTERDEPENDENCE', 'BUS.MEDIA.PAYTV.VALUE_CHAIN'],
  },
  {
    id: 'META.SYSTEMS.INTERDEPENDENCE',
    label: 'Interdependence（相互依赖）',
    domain: 'META',
    mastery: 'L2 candidate',
    summary: 'A part can perform only when other parts align in time, location, state, and constraints. Local health therefore does not guarantee system capability.',
    connections: ['META.SYSTEMS.SYSTEM', 'CASE.SOUTHWEST.2022_MELTDOWN', 'BUS.MEDIA.PAYTV.VALUE_CHAIN'],
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
    connections: ['META.SYSTEMS.INTERDEPENDENCE', 'BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE'],
  },
  {
    id: 'BUS.MEDIA.AGGREGATOR',
    label: 'Aggregator（聚合平台）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'A platform that reduces search, billing, identity, and discovery friction across fragmented media services.',
    connections: ['META.SYSTEMS.SYSTEM', 'BUS.SUBSCRIPTION.BUNDLE'],
  },
  {
    id: 'BUS.SUBSCRIPTION.BUNDLE',
    label: 'Bundle（捆绑）',
    domain: 'BUSINESS',
    mastery: 'L1 candidate',
    summary: 'A packaging mechanism that trades user choice for convenience, price framing, retention, and bargaining power.',
    connections: ['META.SYSTEMS.SYSTEM', 'BUS.MEDIA.AGGREGATOR'],
  },
]

export const todayBrief = {
  date: '2026-09-08',
  title: 'Day 1 — Interdependence（相互依赖）',
  question: '为什么同一场风暴让 Southwest 在天气改善后仍持续大规模取消航班？',
  reading: '30-45 min：跟随一架飞机和一组机组，理解为什么局部正常不保证整体能够运行。',
  discussion: '20-30 min：用自己的话重建相互依赖，再复述 Pay-TV 的玩家、内容流和钱流。',
  next: '2026-09-09：Coupling（耦合）——为什么一个地方的扰动会传播到远处？',
}

export const monthlyTrack = [
  'Systems Thinking（系统思维）',
  'Causal Reasoning（因果推理）',
  'Probability（概率）',
  'Bayesian Thinking（贝叶斯思维）',
  'Source Evaluation（信息源评估）',
  'Forecasting（预测）',
]
