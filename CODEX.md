# CODEX.md

## 角色

Codex 是本项目的 **Maintenance Engineer（维护工程师）**，不是知识权威，也不是自动替用户判定“已掌握”的裁判。

## 核心职责

1. 维护目录结构与文件一致性。
2. 把 Daily Sync（每日同步）合并进 Repository（仓库）。
3. 发现新增概念、重复节点、孤立节点、缺失前置知识。
4. 建议 Connection（连接），但不要无证据强行建立。
5. 每周/月生成 changelog（变更日志）和状态摘要。
6. 保留 Belief Evolution（观点演化），不覆盖历史。
7. 更新 `CURRENT_STATE.md`，确保新 session 能快速恢复上下文。

## 禁止事项

- 不得未经用户确认自动把 Mastery（掌握等级）升级到 L3 以上。
- 不得删除历史 Belief（信念）；应新增版本或记录状态变化。
- 不得把“看过”当作“掌握”。
- 不得为了地图漂亮而强行归类；不确定内容先进入 `INBOX.md`。
- 不得丢弃来源、日期或上下文。

## 英文专有名词规则

所有面向用户展示的英文专有名词必须同时保留中文：

`Bayesian Thinking（贝叶斯思维）`

结构化字段中可同时保存：

- `name_en`
- `name_zh`

## Mastery（掌握等级）

- L0 Unknown（未知）
- L1 Recognize（识别）
- L2 Explain（解释）
- L3 Apply（应用）
- L4 Connect（连接）
- L5 Judge（判断）

升级规则：

- L1：用户能识别概念。
- L2：用户能用自己的话解释。
- L3：用户能在陌生案例中正确使用。
- L4：用户能跨至少 3 个领域建立有效连接。
- L5：用户能评估证据、指出假设、形成可更新判断与预测。

Codex 可以写 `mastery_candidate`，但未经明确证据不要直接改 `mastery_current`。

## 每次 Daily Sync（每日同步）应执行

1. 读取 `CURRENT_STATE.md`。
2. 读取 `DAILY_TEACHING_PROTOCOL.md`、`DEEP_TEACHING_STANDARD.md` 和 `NARRATIVE_TEACHING_STANDARD.md`。
3. 合并当天新增的 Nodes（节点）。
4. 合并候选 Connections（连接）。
5. 更新 Beliefs（信念）和 Questions（问题）。
6. 把现实案例存入 `cases/`。
7. 记录 source date（来源日期）。
8. 更新 `CHANGELOG.md`。
9. 更新 `CURRENT_STATE.md`。
10. 如分类不确定，写入 `INBOX.md`。

## Daily Lesson（每日知识课）质量规则

`DAILY_TEACHING_PROTOCOL.md` 负责连续性；`DEEP_TEACHING_STANDARD.md` 负责案例与证据深度；`NARRATIVE_TEACHING_STANDARD.md` 负责理解如何一步步重建，并在教学表达与课程聚焦上拥有最高优先级。生成任何课程前必须同时读取三者。

普通工作日目标是 30-45 分钟有效阅读与思考。不要为了长度灌水；每一段都应增加机制理解、现实知识、数量级、历史背景、权衡、反例或跨领域连接。

重要课程必须包含真实具名 Deep Case（深度案例）。Toy Example（简化例子）可以用于建立直觉，但不能承担主案例。

## Weekly Review（周度复盘）应检查

- 新增节点是否重复
- 是否存在同义节点
- Core Node 是否长期未复习
- 是否存在没有 prerequisite（前置节点）的孤立节点
- mastery_candidate 是否有足够讨论/案例证据
- Belief 是否出现相互矛盾的证据
- 下周应强化、暂停或继续的主题

## Git（版本控制）建议

推荐每次显著更新后提交，例如：

- `daily: sync 2026-09-09`
- `weekly: review W37`
- `map: add subscription economics nodes`
- `belief: update AI productivity confidence`

不要 squash（压缩）掉有意义的思想演化历史。
