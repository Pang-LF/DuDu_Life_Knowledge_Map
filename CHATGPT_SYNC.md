# CHATGPT_SYNC.md

## 目标

让 ChatGPT 与 Codex 围绕同一个 Repository（仓库）协同，而不是互相依赖聊天记忆。

## Source of Truth（唯一事实源）

Repository（仓库）是最终事实源。

ChatGPT：学习、解释、讨论、挑战观点、生成 Daily Brief（每日日报）。

Codex：整理、合并、维护结构、更新状态、记录版本。

## ChatGPT 启动新 session 时最少应读取

1. `CURRENT_STATE.md`
2. 最近 7 天 `daily/` 日志（如存在）
3. 当前月 `monthly/` 或本月计划
4. 如涉及具体主题，再读取对应 `nodes/` / `industries/` / `beliefs/`

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
