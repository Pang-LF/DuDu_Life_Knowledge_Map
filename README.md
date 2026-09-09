# 嘟嘟人生知识图谱

## 项目目的

这是一个长期运行的 **Personal Knowledge Operating System（个人知识操作系统）**。目标不是积累笔记，而是在 5 年尺度上逐步建立一个可解释、可连接、可验证、可更新的 **Connected World Model（互联世界模型）**。

核心原则：

1. **Map before Notes（先地图，后笔记）**：先明确知识应落在哪个节点，再决定是否记录。
2. **Mechanism over Facts（机制优先于事实）**：知道“为什么”和“如何运转”比记住孤立结论更重要。
3. **Connections create value（连接创造价值）**：真正的认知升级来自跨领域连接。
4. **Evidence over confidence（证据优先于自信）**：观点必须允许被新证据更新。
5. **Mastery must be demonstrated（掌握必须被证明）**：看过不等于会；未经案例应用或复盘测试，不自动升级掌握等级。
6. **Repository is the source of truth（仓库是唯一事实源）**：ChatGPT、Codex 都围绕本仓库工作；聊天记录不是最终事实源。

## 2031 North Star（北极星目标）

面对陌生但重要的问题，能够：

- 解释核心概念；
- 识别因果机制；
- 判断数量级；
- 比较不同系统；
- 将知识应用到陌生案例；
- 跨领域建立连接；
- 质疑假设与证据；
- 用概率表达可更新的预测。

最终不是“知道所有答案”，而是拥有 **building answers（建立答案）** 的能力。

## 核心知识架构

八大 Domain（领域）：

1. SELF（自我）
2. HUMAN（人）
3. CIVILIZATION（文明）
4. SYSTEM（现代社会系统）
5. BUSINESS（商业）
6. SCIENCE（科学）
7. FRONTIER（科技前沿）
8. WISDOM（智慧）

悬浮于所有领域之上的 META（元能力）：

- Critical Thinking（批判性思维）
- Systems Thinking（系统思维）
- Causal Reasoning（因果推理）
- Probabilistic Thinking（概率思维）
- Bayesian Thinking（贝叶斯思维）
- First-principles Thinking（第一性原理思维）
- Second-order Thinking（二阶思维）
- Counterfactual Thinking（反事实思维）
- Forecasting（预测）
- Scenario Planning（情景规划）
- Information Literacy（信息素养）
- Source Evaluation（信息源评估）

## 运行节奏

### Daily Knowledge Brief（每日知识简报）
每天 9:00（America/Detroit）推送，采用 5-track（五轨）结构：

1. Core Quest（核心任务）
2. World Signals（世界信号）
3. Industry Window（行业窗口）
4. Serendipity Node（偶遇节点）
5. Judgment & Belief（判断与信念）

### Weekly Knowledge State（每周知识状态）
每周日晚上进行整合：

- 本周学习节点
- 掌握等级候选
- 新连接
- Belief Updates（信念更新）
- Open Questions（未解决问题）
- 下周强化与避免重复的内容

### Monthly Review（月度复盘）
每月重点检查：

- 哪些节点从 Recognize（识别）进入 Explain（解释）或 Apply（应用）
- 哪些跨领域连接形成
- 哪些旧观点被新证据修正
- 哪些问题仍然没有解决

## 掌握等级

- L0 Unknown（未知）
- L1 Recognize（识别）
- L2 Explain（解释）
- L3 Apply（应用）
- L4 Connect（连接）
- L5 Judge（判断）

Core Node（核心节点）长期目标一般为 L3–L4；个人 Deep Domain（深领域）可追求 L5。

## 六类知识对象

1. Node（知识节点）——我知道什么
2. Connection（连接）——它和什么有关
3. Question（问题）——我还不知道什么
4. Belief（信念）——我现在相信什么
5. Evidence（证据）——为什么相信
6. Case（案例）——现实世界如何体现

## 目录说明

- `knowledge_map.yaml`：知识地图骨架
- `roadmap_2031.md`：五年目标与掌握标准
- `roadmap_2027.md`：2027 第一年度路线
- `boot_sequence_2026Q4.md`：2026 年 Q4 过渡计划
- `september_2026.md`：2026 年 9 月详细计划
- `CURRENT_STATE.md`：当前学习状态，供 ChatGPT/Codex 快速交接
- `CODEX.md`：Codex 维护规则
- `CHATGPT_SYNC.md`：ChatGPT ↔ Repository 同步协议
- `OPERATING_MODEL.md`：每日 1 小时运行模型、连续性规则、推送与网站路线
- `DAILY_TEACHING_PROTOCOL.md`：每日知识课教学协议，规定一条主线、连续课程和 HTML 邮件排版
- `DEEP_TEACHING_STANDARD.md`：深度教学标准，规定真实案例、行业机制、数字、权衡和质量测试
- `NARRATIVE_TEACHING_STANDARD.md`：最高优先级叙事教学标准，规定单一主旨、从最小单位展开案例、先背景后术语，并重建理解过程
- `scripts/render_lesson_email.mjs`：把每日 Markdown 课程渲染为易读 HTML 邮件，并自动排除仓库专用同步包
- `schemas/`：Node / Belief / Daily Log 等结构规范
- `daily/`：每日学习记录
- `weekly/`：每周状态
- `monthly/`：月度复盘
- `nodes/`：独立节点文件（后续逐步生成）
- `industries/`：Industry Apprenticeship（行业学徒制）
- `beliefs/`：Belief Ledger（信念账本）
- `questions/`：Question Bank（问题库）
- `cases/`：Case Library（案例库）
- `website/`：个人知识图谱网站源码

## Website（个人网站）

- GitHub Repository（仓库）：https://github.com/Pang-LF/DuDu_Life_Knowledge_Map
- GitHub Pages（网站）：https://pang-lf.github.io/DuDu_Life_Knowledge_Map/

网站第一版是 Personal Knowledge Graph Workbench（个人知识图谱工作台）：

- 首页展示连续的 Island Atlas（岛屿地图集）：八大 Domain（领域）和 META（元能力）是空间中的岛屿轮廓
- 岛上以地标形式显示 Node（节点），未展开内容以 seed（种子）形式保留
- 点击节点后，在右侧 Inspector（详情面板）查看 Mastery（掌握等级）、摘要、所属岛屿和跨岛连接
- 显示当天 Daily Brief（每日知识简报）和 9 月主线进度

## 最重要的一句话

**ChatGPT 负责学习与讨论，Codex 负责结构化维护，Repository（仓库）负责长期记忆。**
