# Operating Model（运行模型）

Last updated: 2026-09-09

## Goal（目标）

把“每天 1 小时学习”转化为一个可持续增长的 Personal Knowledge Graph（个人知识图谱）。

每天不是为了多看内容，而是为了让 Repository（仓库）新增少量高质量、可复习、可连接、可更新的结构化知识。

## Daily Time Budget（每日学习预算）

Daily Lesson（每日课程）服务于用户自己的消化与讨论，而不是替用户完成学习。普通课程允许 45–60 分钟的认真阅读与思考，之后另留 20–30 分钟讨论；忙碌日可以先完成 Mastery Core 与一个 Teach-back，再在讨论中补足。

| Segment（环节） | Time（时间） | Purpose（目的） |
|---|---:|---|
| Mastery Core + Deep Case（掌握核心与深度案例） | 25-35 min | 从情境、直觉和最小单位重建当天唯一核心概念 |
| Knowledge Expansion（知识拓展） | 5-10 min | 随主案例自然理解一个真实领域，不增加平级核心主题 |
| Industry Apprenticeship（行业学徒制） | 10-15 min | 连续推进当天唯一行业问题 |
| Connection Preview（连接预览） | 3-5 min | 预览 2–4 个未来连接，不正式点亮节点 |
| Follow-up Discussion（追问与讨论） | 20-30 min | 和 ChatGPT 追问、测试理解、形成判断 |

Daily Brief（每日简报）应控制长度，优先提供：

- 一个清晰 Today's Question（今日问题）
- 1-2 个 Core Nodes（核心节点）
- 通常可在 45-60 分钟内读完和思考的解释
- 一个连续、深入、从直觉到机制的主线课程
- 一个顺序推进的 Industry Apprenticeship（行业学徒制）小章节
- 一个随主案例自然产生的 Knowledge Expansion（知识拓展）
- 2-4 个简短 Connection Preview（连接预览），不计为正式学习节点
- 最多 1 个强相关 Current Application（现实应用）
- 1-2 个 Teach-back（反向讲解）诊断问题

## Daily Brief Structure（每日简报结构）

Daily Brief（每日简报）不再采用五轨并列结构。五轨只作为素材来源和长期覆盖目标，不作为每天邮件的章节顺序。

旧五轨：

1. Core Quest（核心任务）
2. World Signals（世界信号）
3. Industry Window（行业窗口）
4. Serendipity Node（偶遇节点）
5. Judgment & Belief（判断与信念）

新原则：

- Core Quest（核心任务）是唯一主线。
- Mastery Core 是当天唯一正式掌握目标；普通概念原则上只占一天。
- Knowledge Expansion 只增加理解主案例所需的现实知识。
- Connection Preview 只显示未来路径，不虚假点亮节点或升级 mastery。
- Industry Window（行业窗口）作为连续课程，占当天 20-30%。
- World Signals（世界信号）是可选应用，最多 1 条。
- Serendipity Node（偶遇节点）改为周末一次。
- Judgment & Belief（判断与信念）融入 Teach-back（反向讲解）和 Map Update（地图更新）。

默认课程结构见 `DAILY_TEACHING_PROTOCOL.md`。

2026 年 9 月主线：

Systems Thinking（系统思维）→ Causal Reasoning（因果推理）→ Probability（概率）→ Bayesian Thinking（贝叶斯思维）→ Source Evaluation（信息源评估）→ Forecasting（预测）

2026 年 9 月 Industry Window（行业窗口）：

Subscription Video / Pay-TV / Streaming（订阅视频 / 付费电视 / 流媒体）

## Continuity Rule（连续性规则）

每天生成新内容前必须读取：

- `CURRENT_STATE.md`
- `README.md`
- `CHATGPT_SYNC.md`
- `DAILY_TEACHING_PROTOCOL.md`
- `DEEP_TEACHING_STANDARD.md`
- `NARRATIVE_TEACHING_STANDARD.md`
- `KNOWLEDGE_MAP_ORIENTATION_PROTOCOL.md`
- 当前月份计划，如 `september_2026.md`
- 最近 7 天 `daily/` 日志
- 当前主题相关的 `nodes/`、`industries/`、`beliefs/`、`questions/`

每日选择新节点时，优先级如下：

1. 昨天明确的 `next_focus`
2. 当前周计划中的下一个 Core Node（核心节点）
3. 已学习但未解释清楚的节点
4. 可连接到当前 Industry Window（行业窗口）的节点
5. 新出现的重要 World Signal（世界信号）

## Daily Storage Rule（每日存储规则）

每天至少更新：

- 当天 `daily/YYYY/MM/YYYY-MM-DD.md`
- `CURRENT_STATE.md`
- `CHANGELOG.md`

视情况更新：

- `nodes/`：沉淀知识节点
- `beliefs/`：记录信念变化
- `questions/`：保存开放问题
- `cases/`：保存现实案例
- `INBOX.md`：暂存分类不确定的内容

## Mastery Evidence（掌握证据）

不要把“看过”视为掌握。

- L1 Recognize（识别）：能认出概念和基本定义
- L2 Explain（解释）：能用自己的话解释
- L3 Apply（应用）：能用于陌生案例
- L4 Connect（连接）：能跨至少 3 个领域建立有效连接
- L5 Judge（判断）：能评估证据、假设、概率和反证条件

Codex 可以记录 `mastery_candidate`，但未经用户确认不要把 `mastery_current` 升到 L3 以上。

## Delivery Channels（推送渠道）

首选：

- Gmail：如果 Gmail 工具可用，每天发送到用户自己的邮箱（to: me）。Gmail test passed（测试通过）：2026-09-08。

备用：

- ChatGPT / Codex thread：如果邮件不可用，则在当前任务中推送 Daily Knowledge Brief（每日知识简报）。

无论使用哪个渠道，Repository（仓库）仍然是唯一事实源。

## Email Formatting Rule（邮件排版规则）

Gmail 邮件必须发送 HTML 格式，不能直接粘贴 Markdown 原文。

邮件应使用：

- 一个清晰大标题
- 小标题分区
- 加粗关键概念
- 短段落
- 因果链条用独立框展示
- Teach-back（反向讲解）问题用醒目问题框
- Map Update（地图更新）放在末尾，简洁呈现

## Depth Budget（深度预算）

普通工作日课程允许 45-60 分钟有效阅读与思考。

每天通常包含：

- Mastery Core + Deep Case（掌握核心与深度案例）：25-35 分钟
- Knowledge Expansion（知识拓展）：5-10 分钟，优先织入主案例
- Industry Apprenticeship（行业学徒制）：10-15 分钟
- Connection Preview（连接预览）：3-5 分钟
- Teach-back（反向讲解）：在 20-30 分钟 Follow-up Discussion 中完成

Depth Budget（深度预算）由教学任务决定，而不是字数决定。每增加一段文字，都必须增加机制理解、现实知识、数量级、历史背景、权衡、反例或跨领域连接。

Depth（深度）不能通过延长占用天数获得。普通 Core Concept 原则上在一堂课内完成第一轮 L2–L3 骨架，之后在经济、能源、AI、商业等新领域中通过迁移继续加深。

## Website Vision（个人网站愿景）

目标是把 Repository（仓库）逐步变成一个可浏览的个人知识图谱网站。

建议信息架构：

- 第一层：八大 Domain（领域） + META（元能力）
- 第二层：Module（模块），例如 Systems Thinking（系统思维）、Economics（经济学）
- 第三层：Node（知识节点）
- 第四层：Connection（连接）、Case（案例）、Belief（信念）、Question（问题）

建议交互：

- 首页展示几个互相连接的大板块
- 点击 Domain（领域）进入模块层
- 点击 Module（模块）进入节点列表
- 点击 Node（节点）查看 what / why / mechanism / examples / cases / connections
- 节点颜色或标记显示 Mastery（掌握等级）
- 每日更新可以自动反映在 Recent Changes（最近变化）或 Timeline（时间线）

## GitHub Strategy（GitHub 策略）

短期：

- Repository（仓库）先作为本地 source of truth（唯一事实源）
- 每次显著更新后提交 git commit
- Remote（远程仓库）：`https://github.com/Pang-LF/DuDu_Life_Knowledge_Map`

中期：

- 推到 GitHub，形成版本历史
- 使用静态网站生成器或轻量前端读取 Markdown / YAML
- GitHub Pages URL：`https://pang-lf.github.io/DuDu_Life_Knowledge_Map/`

长期：

- 个人网站展示知识图谱
- GitHub 保留原始结构、历史、节点演化和自动化记录
