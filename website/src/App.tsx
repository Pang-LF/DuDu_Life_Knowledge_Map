import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, GitBranch, Mail, Network, Search, TimerReset } from 'lucide-react'
import './App.css'
import { domains, monthlyTrack, nodes, todayBrief } from './knowledgeData'

function App() {
  const [selectedDomain, setSelectedDomain] = useState('META')
  const [selectedNode, setSelectedNode] = useState(nodes[0].id)

  const domain = useMemo(
    () => domains.find((item) => item.id === selectedDomain) ?? domains[0],
    [selectedDomain],
  )

  const node = useMemo(
    () => nodes.find((item) => item.id === selectedNode) ?? nodes[0],
    [selectedNode],
  )

  const visibleNodes = nodes.filter((item) => item.domain === selectedDomain || selectedDomain === 'META')

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Personal Knowledge Operating System（个人知识操作系统）</p>
          <h1>嘟嘟人生知识图谱</h1>
        </div>
        <div className="status-pill">
          <Mail size={16} />
          Gmail Ready
        </div>
      </header>

      <section className="dashboard-grid">
        <section className="panel map-panel" aria-label="Knowledge graph overview">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Graph Overview（图谱总览）</p>
              <h2>八大领域 + META</h2>
            </div>
            <Network size={22} />
          </div>

          <div className="domain-orbit">
            {domains.map((item) => (
              <button
                className={`domain-node ${item.id === selectedDomain ? 'selected' : ''} ${item.active ? 'active' : ''}`}
                key={item.id}
                onClick={() => setSelectedDomain(item.id)}
                type="button"
              >
                <span>{item.nameEn}</span>
                <small>{item.nameZh}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="panel today-panel">
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
        </section>

        <section className="panel domain-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Selected Domain（当前领域）</p>
              <h2>{domain.nameEn}（{domain.nameZh}）</h2>
            </div>
            <span className="progress">{domain.progress}%</span>
          </div>
          <div className="module-list">
            {domain.modules.map((module) => (
              <button type="button" key={module}>{module}</button>
            ))}
          </div>
        </section>

        <section className="panel node-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Node Detail（节点详情）</p>
              <h2>{node.label}</h2>
            </div>
            <span className="mastery">{node.mastery}</span>
          </div>
          <p>{node.summary}</p>
          <div className="node-list">
            {visibleNodes.map((item) => (
              <button
                className={item.id === selectedNode ? 'selected' : ''}
                key={item.id}
                onClick={() => setSelectedNode(item.id)}
                type="button"
              >
                <span>{item.label}</span>
                <small>{item.id}</small>
              </button>
            ))}
          </div>
        </section>
      </section>

      <section className="lower-grid">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">September Track（9月主线）</p>
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
              <p className="eyebrow">Connections（连接）</p>
              <h2>{node.id}</h2>
            </div>
            <ArrowUpRight size={22} />
          </div>
          <div className="connection-list">
            {node.connections.map((connection) => (
              <span key={connection}>{connection}</span>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
