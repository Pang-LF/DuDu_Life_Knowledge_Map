# CHATGPT_SYNC.md

## 目标

让 ChatGPT 与 Codex 围绕同一个 Repository（仓库）协同，而不是互相依赖聊天记忆。

## Source of Truth（唯一事实源）

Repository（仓库）是最终事实源。

ChatGPT：学习、解释、讨论、挑战观点、生成 Daily Knowledge Lesson（每日知识课）。

Codex：整理、合并、维护结构、更新状态、记录版本。

## ChatGPT 启动新 session 时最少应读取

1. `CURRENT_STATE.md`
2. 最近 7 天 `daily/` 日志（如存在）
3. 当前月 `monthly/` 或本月计划
4. 如涉及具体主题，再读取对应 `nodes/` / `industries/` / `beliefs/`
5. `DAILY_TEACHING_PROTOCOL.md`
6. `DEEP_TEACHING_STANDARD.md`
7. `NARRATIVE_TEACHING_STANDARD.md`
8. `KNOWLEDGE_MAP_ORIENTATION_PROTOCOL.md`

## Daily Teaching Rule（每日教学规则）

每日内容必须遵守 `DAILY_TEACHING_PROTOCOL.md`：

- 一天一个主问题
- 从直觉到概念再到机制
- Industry Apprenticeship（行业学徒制）必须连续推进
- World Signals（世界信号）只作为可选应用，最多一条
- Serendipity（偶遇）只在周末
- 结尾只问 1-2 个 Teach-back（反向讲解）诊断问题
- Gmail 输出必须是 HTML 排版后的邮件，不要直接发送 Markdown 原文

每日内容还必须遵守 `DEEP_TEACHING_STANDARD.md`：

- 重要课程需要真实具名 Deep Case（深度案例）
- 案例必须包含背景、触发、参与者、激励、时间线、机制、数字、结果、反事实和迁移
- Industry Apprenticeship（行业学徒制）必须讲真实行业机制，追踪 money（钱）和 power（权力）
- 普通工作日目标是 30-45 分钟有效阅读与思考

教学表达最高优先遵守 `NARRATIVE_TEACHING_STANDARD.md`：

- 每天明确一句 Today's One Idea（今天只学一个核心思想）
- 先情境和困惑，后术语；先跟随一个最小单位，后拉远到系统
- 案例必须像故事一样展开，不得压缩成时间线或箭头摘要
- 需要时提供对比，并解释每个数字为什么改变理解
- 行业课从玩家、资产、钱流和内容流开始，经典术语首次出现时完整教学
- 结尾必须回到开场谜题，用当天唯一核心概念重新回答

每课还必须遵守 `KNOWLEDGE_MAP_ORIENTATION_PROTOCOL.md`：进入新 Domain 或 Module 时先完整解释“在哪里、是什么、为什么学、接下来怎样走”；同一模块内只做简短 Daily Orientation；结尾回到地图说明今天点亮的节点和下一步连接。

## ChatGPT 每日结束时建议输出 Daily Sync Packet（每日同步包）

```yaml
date: YYYY-MM-DD
nodes_updated:
  - id: META.SYSTEMS.FEEDBACK
    mastery_candidate: L2
    evidence: "用户能用自己的语言解释正反馈与负反馈"
new_connections:
  - from: META.SYSTEMS.FEEDBACK
    to: BUS.SUBSCRIPTION.CHURN
    reason: "留存机制可形成反馈回路"
belief_updates:
  - id: BELIEF.EXAMPLE
    confidence_before: 0.60
    confidence_after: 0.70
    reason: "..."
new_questions:
  - "..."
cases:
  - title: "..."
    related_nodes: []
next_focus:
  - "..."
```

## Weekly Knowledge State（每周知识状态）

周度摘要必须包含：

- 本周 Nodes（节点）
- Mastery（掌握）候选
- 新 Connections（连接）
- Belief Updates（信念更新）
- Open Questions（未解决问题）
- 避免重复教授内容
- 需要强化内容
- 下周建议

## Conflict Resolution（冲突解决）

如果聊天内容和 Repository 不一致：

1. 不自动覆盖。
2. 标记冲突。
3. 以更晚、证据更充分且用户明确确认的版本为准。
4. 保留旧版本的演化记录。

## 最小同步原则

无需每次把整个仓库交给 ChatGPT。

优先维护：

- `CURRENT_STATE.md`
- `RECENT_CHANGES.md`（后续可生成）
- 活跃 Beliefs（信念）
- 当前月/当前行业进度
