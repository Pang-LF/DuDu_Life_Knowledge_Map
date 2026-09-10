import { useMemo, useState } from 'react'
import { BookOpen, Compass, GitBranch, Mail, Search, TimerReset } from 'lucide-react'
import './App.css'
import { domains, monthlyTrack, nodes, todayBrief, type GraphNode } from './knowledgeData'

type DomainPoint = {
  id: string
  x: number
  y: number
  rx: number
  ry: number
  rotate: number
  code: string
  colorA: string
  colorB: string
}

type NodePoint = {
  id: string
  x: number
  y: number
  virtual?: boolean
}

const domainPoints: DomainPoint[] = [
  { id: 'META', x: 578, y: 318, rx: 168, ry: 116, rotate: -7, code: 'DM-00', colorA: '#ffd166', colorB: '#ef476f' },
  { id: 'SELF', x: 300, y: 190, rx: 118, ry: 84, rotate: 12, code: 'DM-01', colorA: '#ff8fab', colorB: '#b5179e' },
  { id: 'HUMAN', x: 858, y: 170, rx: 132, ry: 88, rotate: -11, code: 'DM-02', colorA: '#fb7185', colorB: '#7f1d1d' },
  { id: 'CIVILIZATION', x: 972, y: 392, rx: 152, ry: 102, rotate: 9, code: 'DM-03', colorA: '#f59e0b', colorB: '#b45309' },
  { id: 'SYSTEM', x: 820, y: 588, rx: 150, ry: 100, rotate: -8, code: 'DM-04', colorA: '#22c55e', colorB: '#0f766e' },
  { id: 'BUSINESS', x: 380, y: 584, rx: 158, ry: 106, rotate: 8, code: 'DM-05', colorA: '#34d399', colorB: '#047857' },
  { id: 'SCIENCE', x: 154, y: 392, rx: 128, ry: 92, rotate: -14, code: 'DM-06', colorA: '#38bdf8', colorB: '#2563eb' },
  { id: 'FRONTIER', x: 584, y: 698, rx: 132, ry: 86, rotate: 5, code: 'DM-07', colorA: '#22d3ee', colorB: '#7c3aed' },
  { id: 'WISDOM', x: 1080, y: 638, rx: 116, ry: 78, rotate: 15, code: 'DM-08', colorA: '#c084fc', colorB: '#4338ca' },
]

const nodePoints: NodePoint[] = [
  { id: 'META.SYSTEMS.SYSTEM', x: 558, y: 306 },
  { id: 'META.SYSTEMS.FEEDBACK_LOOP', x: 620, y: 366 },
  { id: 'BUS.MEDIA.AGGREGATOR', x: 354, y: 566 },
  { id: 'BUS.SUBSCRIPTION.BUNDLE', x: 430, y: 622 },
  { id: 'SYSTEM.ECON.INFLATION', x: 800, y: 565, virtual: true },
  { id: 'FRONTIER.AI.INFRASTRUCTURE', x: 610, y: 700, virtual: true },
]

const virtualNodes: GraphNode[] = [
  {
    id: 'SYSTEM.ECON.INFLATION',
    label: 'Inflation（通胀）',
    domain: 'SYSTEM',
    mastery: 'L0 seed',
    summary: 'A future macroeconomics node connected through oil prices, expectations, interest rates, and asset prices.',
    connections: ['META.SYSTEMS.SYSTEM'],
  },
  {
    id: 'FRONTIER.AI.INFRASTRUCTURE',
    label: 'AI Infrastructure（人工智能基础设施）',
    domain: 'FRONTIER',
    mastery: 'L0 seed',
    summary: 'A future AI systems node connected through compute, electricity, chips, data centers, and capital expenditure.',
    connections: ['META.SYSTEMS.SYSTEM'],
  },
]

const atlasNodes = [...nodes, ...virtualNodes]

const polygonRadii = [1, 0.82, 1.08, 0.9, 1.03, 0.76, 1.12, 0.86, 0.98, 0.8, 1.06]

const makeIslandPolygon = (point: DomainPoint, scale = 1) =>
  polygonRadii
    .map((radius, index) => {
      const angle = (Math.PI * 2 * index) / polygonRadii.length - Math.PI / 2
      const x = point.x + Math.cos(angle) * point.rx * radius * scale
      const y = point.y + Math.sin(angle) * point.ry * radius * scale
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState(nodes[0].id)
  const [selectedDomainId, setSelectedDomainId] = useState('META')

  const selectedNode = useMemo(
    () => atlasNodes.find((node) => node.id === selectedNodeId) ?? atlasNodes[0],
    [selectedNodeId],
  )

  const selectedDomain = useMemo(
    () => domains.find((domain) => domain.id === selectedDomainId) ?? domains[0],
    [selectedDomainId],
  )

  const relatedIds = new Set([selectedNode.id, ...selectedNode.connections])
  const selectedNodePoint = nodePoints.find((point) => point.id === selectedNode.id)

  const selectDomain = (domainId: string) => {
    setSelectedDomainId(domainId)
    const firstNode = atlasNodes.find((node) => node.domain === domainId)
    if (firstNode) {
      setSelectedNodeId(firstNode.id)
    }
  }

  return (
    <main className="atlas-shell">
      <aside className="left-dock">
        <div className="brand-block">
          <p className="eyebrow">Tactical Knowledge Atlas（认知航海图）</p>
          <h1>嘟嘟人生知识图谱</h1>
        </div>

        <div className="dock-section">
          <div className="dock-title">
            <TimerReset size={17} />
            <span>今日学习</span>
          </div>
          <p className="today-title">{todayBrief.title}</p>
          <p className="today-question">{todayBrief.question}</p>
          <div className="study-steps">
            <span><BookOpen size={15} />30-40m 阅读思考</span>
            <span><Search size={15} />20-30m 追问讨论</span>
          </div>
        </div>

        <div className="dock-section">
          <div className="dock-title">
            <GitBranch size={17} />
            <span>9 月主线</span>
          </div>
          <ol className="route-list">
            {monthlyTrack.map((item, index) => (
              <li className={index === 0 ? 'current' : ''} key={item}>
                <span>{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="mail-chip">
          <Mail size={15} />
          Gmail delivery active
        </div>
      </aside>

      <section className="map-stage">
        <div className="map-toolbar">
          <div>
            <p className="eyebrow">Spatial Atlas（空间图谱）</p>
            <h2>领域是岛，节点是地标，连接是航线</h2>
          </div>
          <div className="legend">
            <span><i className="dot core" />已学习</span>
            <span><i className="dot seed" />待生长</span>
            <span><i className="line" />当前连接</span>
          </div>
        </div>

        <svg className="atlas-map" viewBox="0 0 1200 760" role="img" aria-label="Personal knowledge atlas">
          <defs>
            <filter id="soft-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="island-glow" x="-35%" y="-35%" width="170%" height="170%">
              <feGaussianBlur stdDeviation="9" result="blur" />
              <feColorMatrix
                in="blur"
                result="coloredBlur"
                type="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.72 0"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {domainPoints.map((point) => (
              <linearGradient gradientUnits="userSpaceOnUse" id={`grad-${point.id}`} key={point.id} x1={point.x - point.rx} x2={point.x + point.rx} y1={point.y - point.ry} y2={point.y + point.ry}>
                <stop offset="0%" stopColor={point.colorA} />
                <stop offset="100%" stopColor={point.colorB} />
              </linearGradient>
            ))}
          </defs>

          <g className="grid-lines">
            {Array.from({ length: 13 }).map((_, index) => (
              <path d={`M ${index * 100} 0 L ${index * 100 - 90} 760`} key={`v-${index}`} />
            ))}
            {Array.from({ length: 9 }).map((_, index) => (
              <path d={`M 0 ${index * 95} L 1200 ${index * 95 - 48}`} key={`h-${index}`} />
            ))}
          </g>

          <g className="domain-links">
            {domainPoints.filter((domain) => domain.id !== 'META').map((domain) => {
              const meta = domainPoints[0]
              const hot = selectedDomainId === domain.id || selectedDomainId === 'META'
              return (
                <path
                  className={hot ? 'magnetic-line active' : 'magnetic-line'}
                  d={`M ${meta.x} ${meta.y} C ${(meta.x + domain.x) / 2} ${meta.y + 24}, ${(meta.x + domain.x) / 2} ${domain.y - 24}, ${domain.x} ${domain.y}`}
                  key={domain.id}
                />
              )
            })}
          </g>

          <g className="contours">
            {domainPoints.map((point) => {
              const domain = domains.find((item) => item.id === point.id)
              const selected = selectedDomainId === point.id
              return (
                <g
                  className={selected ? 'island-contour selected' : 'island-contour'}
                  key={point.id}
                  onClick={() => selectDomain(point.id)}
                  transform={`rotate(${point.rotate} ${point.x} ${point.y})`}
                >
                  <polygon className="island-aura" points={makeIslandPolygon(point, 1.12)} />
                  <polygon className="island-shape" fill={`url(#grad-${point.id})`} points={makeIslandPolygon(point)} />
                  <polygon className="island-shelf shelf-1" points={makeIslandPolygon(point, 0.78)} />
                  <polygon className="island-shelf shelf-2" points={makeIslandPolygon(point, 0.52)} />
                  <text className="domain-code" x={point.x - point.rx * 0.52} y={point.y - 8}>{point.code}</text>
                  <text className="domain-name" x={point.x - point.rx * 0.52} y={point.y + 18}>
                    {domain?.nameEn}
                  </text>
                  <text className="domain-zh" x={point.x - point.rx * 0.52} y={point.y + 40}>
                    {domain?.nameZh}
                  </text>
                </g>
              )
            })}
          </g>

          <g className="node-links">
            {selectedNodePoint && selectedNode.connections.map((targetId) => {
              const target = nodePoints.find((point) => point.id === targetId)
              if (!target) return null
              return (
                <path
                  className="selected-link"
                  d={`M ${selectedNodePoint.x} ${selectedNodePoint.y} C ${(selectedNodePoint.x + target.x) / 2} ${selectedNodePoint.y - 90}, ${(selectedNodePoint.x + target.x) / 2} ${target.y + 90}, ${target.x} ${target.y}`}
                  key={`${selectedNode.id}-${targetId}`}
                />
              )
            })}
          </g>

          <g className="knowledge-nodes">
            {nodePoints.map((point) => {
              const node = atlasNodes.find((item) => item.id === point.id)
              if (!node) return null
              const selected = selectedNodeId === node.id
              const related = relatedIds.has(node.id)
              return (
                <g
                  className={`knowledge-node ${point.virtual ? 'seed' : 'core'} ${selected ? 'selected' : ''} ${related ? 'related' : ''}`}
                  key={node.id}
                  onClick={() => {
                    setSelectedNodeId(node.id)
                    setSelectedDomainId(node.domain)
                  }}
                  tabIndex={0}
                >
                  <circle className="node-halo" cx={point.x} cy={point.y} r={selected ? 28 : 20} />
                  <circle className="node-dot" cx={point.x} cy={point.y} r={point.virtual ? 7 : 10} />
                  <text className="node-label" x={point.x + 16} y={point.y - 12}>{node.label}</text>
                  <text className="node-id" x={point.x + 16} y={point.y + 8}>{node.id}</text>
                </g>
              )
            })}
          </g>
        </svg>
      </section>

      <aside className="inspector">
        <div className="inspector-head">
          <p className="eyebrow">Inspector（节点详情）</p>
          <h2>{selectedNode.label}</h2>
          <span>{selectedNode.id}</span>
        </div>

        <div className="mastery-meter">
          <span>{selectedNode.mastery}</span>
          <div><i /></div>
        </div>

        <section className="inspector-section">
          <h3>Core Definition（核心解释）</h3>
          <p>{selectedNode.summary}</p>
        </section>

        <section className="inspector-section">
          <h3>Island（所属岛屿）</h3>
          <button type="button" onClick={() => selectDomain(selectedNode.domain)}>
            <Compass size={16} />
            {selectedDomain.nameEn}（{selectedDomain.nameZh}）
          </button>
        </section>

        <section className="inspector-section">
          <h3>Connections（连接）</h3>
          <div className="connection-stack">
            {selectedNode.connections.map((id) => (
              <button
                key={id}
                onClick={() => {
                  if (atlasNodes.some((node) => node.id === id)) {
                    setSelectedNodeId(id)
                    setSelectedDomainId(atlasNodes.find((node) => node.id === id)?.domain ?? selectedDomainId)
                  }
                }}
                type="button"
              >
                {id}
              </button>
            ))}
          </div>
        </section>

        <section className="inspector-section">
          <h3>Branches（岛屿分支）</h3>
          <div className="module-list">
            {selectedDomain.modules.map((module) => (
              <span key={module}>{module}</span>
            ))}
          </div>
        </section>
      </aside>
    </main>
  )
}

export default App
