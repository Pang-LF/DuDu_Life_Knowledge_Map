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
    mastery: 'L2 candidate',
    summary: 'A system is elements, relationships, flows, and purpose producing behavior over time.',
    connections: ['BUS.MEDIA.AGGREGATOR', 'BUS.SUBSCRIPTION.BUNDLE', 'SYSTEM.ECON.INFLATION', 'FRONTIER.AI.INFRASTRUCTURE'],
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
  title: 'Day 0 — System（系统）',
  question: '为什么“把一个东西拆成零件”不一定能理解它真正如何运转？',
  reading: '30-40 min：阅读 System（系统）框架，写出 5 句话自我解释。',
  discussion: '20-30 min：用追问检查理解，重点区分 stated purpose（口头目的）和 revealed purpose（实际目的）。',
  next: '2026-09-09：继续 System（系统），用陌生案例确认 L2；然后进入 Feedback Loop（反馈回路）。',
}

export const monthlyTrack = [
  'Systems Thinking（系统思维）',
  'Causal Reasoning（因果推理）',
  'Probability（概率）',
  'Bayesian Thinking（贝叶斯思维）',
  'Source Evaluation（信息源评估）',
  'Forecasting（预测）',
]

