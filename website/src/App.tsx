import { useMemo, useState } from 'react'
import { BookOpen, Compass, GitBranch, Mail, Map, Search, Sparkles, TimerReset } from 'lucide-react'
import './App.css'
import { domains, monthlyTrack, nodes, todayBrief } from './knowledgeData'

const islandLayout: Record<string, { x: number; y: number; size: 'large' | 'medium' | 'small' }> = {
  META: { x: 42, y: 30, size: 'large' },
  SELF: { x: 16, y: 18, size: 'small' },
  HUMAN: { x: 71, y: 18, size: 'small' },
  CIVILIZATION: { x: 82, y: 48, size: 'medium' },
  SYSTEM: { x: 65, y: 74, size: 'medium' },
  BUSINESS: { x: 28, y: 68, size: 'medium' },
  SCIENCE: { x: 13, y: 50, size: 'small' },
  FRONTIER: { x: 49, y: 88, size: 'small' },
  WISDOM: { x: 88, y: 78, size: 'small' },
}

const bridgePairs = [
  ['META', 'BUSINESS'],
  ['META', 'SYSTEM'],
  ['META', 'FRONTIER'],
  ['BUSINESS', 'SYSTEM'],
  ['BUSINESS', 'FRONTIER'],
]

function App() {
  const [selectedDomain, setSelectedDomain] = useState('META')
  const [selectedNode, setSelectedNode] = useState(nodes[0].id)

  const selectedNodeData = useMemo(
    () => nodes.find((item) => item.id === selectedNode) ?? nodes[0],
    [selectedNode],
  )

  const selectedDomainData = useMemo(
    () => domains.find((item) => item.id === selectedDomain) ?? domains[0],
    [selectedDomain],
  )

  const connectedIds = new Set([selectedNodeData.id, ...selectedNodeData.connections])

  const selectDomain = (domainId: string) => {
    setSelectedDomain(domainId)
    const firstDomainNode = nodes.find((node) => node.domain === domainId)
    if (firstDomainNode) {
      setSelectedNode(firstDomainNode.id)
    }
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Personal Knowledge Archipelago（个人知识群岛）</p>
          <h1>嘟嘟人生知识图谱</h1>
        </div>
        <div className="status-pill">
          <Mail size={16} />
          Daily Brief Ready
        </div>
      </header>

      <section className="hero-grid">
        <section className="archipelago-panel" aria-label="Knowledge island map">
          <div className="map-header">
            <div>
              <p className="eyebrow">Island Map（岛屿地图）</p>
              <h2>点击岛屿或节点，查看跨领域连接</h2>
            </div>
            <Map size={22} />
          </div>

          <div className="archipelago">
            <svg className="bridges" viewBox="0 0 100 100" aria-hidden="true" preserveAspectRatio="none">
              {bridgePairs.map(([from, to]) => {
                const a = islandLayout[from]
                const b = islandLayout[to]
                const isHot = selectedDomain === from || selectedDomain === to || selectedNodeData.connections.some((id) => id.includes(from) || id.includes(to))
                return (
                  <path
                    className={isHot ? 'bridge hot' : 'bridge'}
                    d={`M ${a.x} ${a.y} C ${(a.x + b.x) / 2} ${a.y - 12}, ${(a.x + b.x) / 2} ${b.y + 12}, ${b.x} ${b.y}`}
                    key={`${from}-${to}`}
                  />
                )
              })}
            </svg>

            {domains.map((domain) => {
              const position = islandLayout[domain.id]
              const domainNodes = nodes.filter((node) => node.domain === domain.id)
              return (
                <button
                  className={`island ${position.size} ${selectedDomain === domain.id ? 'selected' : ''} ${domain.active ? 'active' : ''}`}
                  key={domain.id}
                  onClick={() => selectDomain(domain.id)}
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  type="button"
                >
                  <span className="island-title">{domain.nameEn}</span>
                  <span className="island-subtitle">{domain.nameZh}</span>
                  <span className="island-progress">{domain.progress}%</span>
                  <span className="node-reef">
                    {domainNodes.length === 0 ? (
                      <span className="empty-reef">seed</span>
                    ) : (
                      domainNodes.map((node) => (
                        <span
                          className={`reef-node ${connectedIds.has(node.id) ? 'linked' : ''} ${selectedNode === node.id ? 'picked' : ''}`}
                          key={node.id}
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedDomain(domain.id)
                            setSelectedNode(node.id)
                          }}
                        >
                          {node.label}
                        </span>
                      ))
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        <aside className="daily-card">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Today（今日）</p>
              <h2>{todayBrief.title}</h2>
            </div>
            <TimerReset size={22} />
          </div>
          <p className="question">{todayBrief.question}</p>
          <div className="time-blocks">
            <div>
              <BookOpen size={18} />
              <span>{todayBrief.reading}</span>
            </div>
            <div>
              <Search size={18} />
              <span>{todayBrief.discussion}</span>
            </div>
          </div>
          <p className="next-focus">{todayBrief.next}</p>
        </aside>
      </section>

      <section className="detail-grid">
        <section className="panel node-detail">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Selected Node（当前节点）</p>
              <h2>{selectedNodeData.label}</h2>
            </div>
            <span className="mastery">{selectedNodeData.mastery}</span>
          </div>
          <p>{selectedNodeData.summary}</p>
          <div className="connection-list">
            {selectedNodeData.connections.map((connection) => (
              <span key={connection}>{connection}</span>
            ))}
          </div>
        </section>

        <section className="panel domain-detail">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Island Branches（岛屿分支）</p>
              <h2>{selectedDomainData.nameEn}（{selectedDomainData.nameZh}）</h2>
            </div>
            <Compass size={22} />
          </div>
          <div className="module-list">
            {selectedDomainData.modules.map((module) => (
              <button type="button" key={module}>{module}</button>
            ))}
          </div>
        </section>
      </section>

      <section className="detail-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">September Route（9月航线）</p>
              <h2>Build the Brain（建立认知系统）</h2>
            </div>
            <GitBranch size={22} />
          </div>
          <ol className="track-list">
            {monthlyTrack.map((item, index) => (
              <li className={index === 0 ? 'current' : ''} key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Serendipity（偶遇）</p>
              <h2>Boundary Object（边界对象）</h2>
            </div>
            <Sparkles size={22} />
          </div>
          <p className="soft-copy">
            这个图谱本身就是一个 Boundary Object（边界对象）：ChatGPT 用它生成学习内容，Codex 用它维护结构，你用它形成判断。
          </p>
        </section>
      </section>
    </main>
  )
}

export default App
