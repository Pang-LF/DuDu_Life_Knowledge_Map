import fs from 'node:fs'

const inputPath = process.argv[2]

if (!inputPath) {
  console.error('Usage: node scripts/render_lesson_email.mjs <lesson.md>')
  process.exit(1)
}

const raw = fs.readFileSync(inputPath, 'utf8')
const lesson = raw.split(/^## Daily Sync Packet（每日同步包）/m)[0].trim()

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

const inline = (value) => {
  let html = escapeHtml(value)
  html = html.replace(/`([^`]+)`/g, '<code style="background:#edf2f7;color:#124e66;padding:2px 5px;border-radius:4px;font-size:.92em">$1</code>')
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" style="color:#087f8c;text-decoration:underline">$1</a>')
  return html
}

const lines = lesson.split('\n')
const output = []
let paragraph = []
let listType = null
let code = []
let inCode = false
let skippedDocumentTitle = false

const flushParagraph = () => {
  if (!paragraph.length) return
  output.push(`<p style="margin:0 0 16px">${inline(paragraph.join(' '))}</p>`)
  paragraph = []
}

const closeList = () => {
  if (!listType) return
  output.push(`</${listType}>`)
  listType = null
}

const tableCells = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())

const isTableSeparator = (line) =>
  /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line)

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i]

  if (line.startsWith('```')) {
    flushParagraph()
    closeList()
    if (inCode) {
      output.push(`<pre style="white-space:pre-wrap;background:#102331;color:#ecf8f8;padding:17px 19px;border-radius:8px;line-height:1.75;overflow:auto;margin:4px 0 20px">${escapeHtml(code.join('\n'))}</pre>`)
      code = []
    }
    inCode = !inCode
    continue
  }

  if (inCode) {
    code.push(line)
    continue
  }

  if (!line.trim()) {
    flushParagraph()
    closeList()
    continue
  }

  if (line.trim().startsWith('|') && isTableSeparator(lines[i + 1] ?? '')) {
    flushParagraph()
    closeList()
    const headers = tableCells(line)
    const rows = []
    i += 2
    while (i < lines.length && lines[i].trim().startsWith('|')) {
      rows.push(tableCells(lines[i]))
      i += 1
    }
    i -= 1
    output.push('<div style="overflow-x:auto;margin:8px 0 22px"><table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.55">')
    output.push(`<thead><tr>${headers.map((cell) => `<th style="text-align:left;background:#e8f3f6;color:#123f55;border:1px solid #cbdde4;padding:10px 11px;vertical-align:top">${inline(cell)}</th>`).join('')}</tr></thead>`)
    output.push('<tbody>')
    for (const row of rows) {
      output.push(`<tr>${row.map((cell) => `<td style="border:1px solid #d7e3e8;padding:10px 11px;vertical-align:top">${inline(cell)}</td>`).join('')}</tr>`)
    }
    output.push('</tbody></table></div>')
    continue
  }

  const heading = line.match(/^(#{1,3})\s+(.+)$/)
  if (heading) {
    flushParagraph()
    closeList()
    const level = heading[1].length
    if (level === 1 && !skippedDocumentTitle) {
      skippedDocumentTitle = true
      continue
    }
    if (level === 1) output.push(`<h1 style="font-size:28px;line-height:1.28;color:#0b2a3d;margin:30px 0 14px;border-top:1px solid #dbe6ec;padding-top:25px">${inline(heading[2])}</h1>`)
    if (level === 2) output.push(`<h2 style="font-size:22px;line-height:1.35;color:#123f55;margin:28px 0 12px">${inline(heading[2])}</h2>`)
    if (level === 3) output.push(`<h3 style="font-size:18px;line-height:1.4;color:#176276;margin:22px 0 9px">${inline(heading[2])}</h3>`)
    continue
  }

  if (line === '---') {
    flushParagraph()
    closeList()
    output.push('<hr style="border:0;border-top:1px solid #dbe6ec;margin:30px 0">')
    continue
  }

  if (line.startsWith('> ')) {
    flushParagraph()
    closeList()
    output.push(`<blockquote style="margin:8px 0 22px;padding:16px 19px;background:#e8f8f8;border-left:5px solid #16a6b6;color:#124e59;font-size:18px;font-weight:700">${inline(line.slice(2))}</blockquote>`)
    continue
  }

  const unordered = line.match(/^-\s+(.+)$/)
  const ordered = line.match(/^\d+\.\s+(.+)$/)
  if (unordered || ordered) {
    flushParagraph()
    const nextType = unordered ? 'ul' : 'ol'
    if (listType !== nextType) {
      closeList()
      listType = nextType
      output.push(`<${listType} style="margin:4px 0 18px;padding-left:24px">`)
    }
    output.push(`<li style="margin:0 0 8px">${inline((unordered || ordered)[1])}</li>`)
    continue
  }

  paragraph.push(line.trim())
}

flushParagraph()
closeList()

const body = output.join('\n')
const firstHeading = lesson.match(/^#\s+(.+)$/m)?.[1] ?? 'Daily Knowledge Lesson'

process.stdout.write(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"></head><body style="margin:0;background:#edf3f6;color:#243746;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei',Arial,sans-serif;line-height:1.78"><main style="max-width:760px;margin:0 auto;padding:22px 14px 40px"><header style="background:#082c3c;color:#fff;padding:30px 28px;border-radius:12px;border-top:6px solid #22b8c7"><div style="font-size:12px;font-weight:800;color:#84dce4;letter-spacing:.08em">GUIDED KNOWLEDGE LESSON</div><div style="font-size:29px;line-height:1.3;font-weight:800;margin-top:8px">${inline(firstHeading)}</div><div style="font-size:15px;color:#d2e8ee;margin-top:10px">从一个具体情境开始，一步一步重建理解</div></header><article style="background:#fff;border:1px solid #d9e4ea;border-radius:12px;padding:8px 28px 30px;margin-top:14px">${body}</article><footer style="padding:18px 8px 0;color:#6b7d88;font-size:13px">嘟嘟人生知识图谱 · Repository 保存完整来源与学习状态</footer></main></body></html>`)
