# Subscription Video / Pay-TV / Streaming（订阅视频 / 付费电视 / 流媒体）

## Apprenticeship Goal（学徒目标）

目标不是记行业名词，而是达到：

> 和在该行业工作 10 年的人交流时，能听懂主要机制，知道该问什么问题，并能提出少量让资深从业者认为“你真正理解行业”的问题。

## 8 Industry Questions（八个行业问题）

1. Money In（钱从哪里来）
2. Money Out（钱被谁拿走）
3. Power（谁真正有权力）
4. Stated Demand（客户嘴上说要什么）
5. Real Demand（客户实际上为什么买）
6. False Intuition（外行最容易误判什么）
7. Operational Reality（从业者真正头疼什么）
8. Hidden Rules（业内默认但公开很少讲什么）

## Core Modules（核心模块）

### 1. Industry Structure（行业结构）
Pay-TV（付费电视）、Satellite TV（卫星电视）、Cable TV（有线电视）、vMVPD（虚拟多频道视频节目分销商）、DTC（直接面向消费者）、Streaming（流媒体）、Aggregator（聚合平台）。

### 2. Subscription Economics（订阅经济）
CAC（获客成本）、LTV（客户终身价值）、Churn（流失）、Retention（留存）、Winback（赢回）、Cohort Economics（队列经济学）、Payback Period（回收期）。

### 3. Content Economics（内容经济学）
Programming Cost（节目成本）、Carriage Fee（频道传输费）、Retransmission Consent（转播同意）、Sports Rights（体育版权）、RSN（地区体育网络）、Content Windowing（内容窗口期）、Exclusivity（独家权）。

### 4. Revenue Architecture（收入架构）
Subscription Revenue（订阅收入）、Advertising Revenue（广告收入）、Ad-supported Tier（广告支持档位）、Bundling（捆绑）、Upsell（向上销售）、Cross-sell（交叉销售）。

### 5. Distribution & Devices（分发与设备）
Set-top Box（机顶盒）、DVR（数字视频录像机）、Streaming Device（流媒体设备）、App Distribution（应用分发）、Platform Dependency（平台依赖）。

### 6. Competition & Power（竞争与权力）
Content Owner（内容所有者）、Distributor（分销商）、Platform（平台）、Advertiser（广告主）、Consumer（消费者）、Bargaining Power（议价权）、Vertical Integration（纵向整合）、Disintermediation（去中介化）。

## Strategic Questions（战略问题）

- 为什么传统 Pay-TV（付费电视）长期失去订户？
- Streaming（流媒体）是否真的拥有更好的经济模型？
- Sports Rights（体育版权）为什么既是 moat（护城河）又可能是负担？
- Bundle（捆绑）为什么曾经强大、后来瓦解、现在又重新出现？
- Aggregator（聚合平台）会不会重新成为行业价值中心？
- 在产品越来越相似时，真正的 competitive advantage（竞争优势）来自哪里？

## Apprenticeship Log（学徒记录）

### 2026-09-08 — Pay-TV Players, Assets, Money And Content Flows

- Question: Which actors make a traditional Pay-TV service work, and who controls content, payment, attention, and the customer relationship?
- Foundation: Rights holder → programmer → distributor / MVPD → household.
- Money flow: Household subscription → distributor → contracted channel fees → programmer → content production or rights holder.
- Status: `BUS.MEDIA.PAYTV.VALUE_CHAIN` at L1 candidate; Teach-back pending.
- Deferred: ESPN bargaining power remains reserved for Industry Day 4.

### 2026-09-09 — DIRECTV's Ownership And Coordination Boundaries

- Question: What kind of company is DIRECTV, and what does it own, license, or coordinate?
- Owns or controls: Customer relationship, DIRECTV billing and packaging, service operations, discovery interface, DVR, app and device experience.
- Licenses: Time-bounded distribution access to external channels and content under commercial agreements.
- Coordinates: Satellite and internet delivery, devices, third-party apps, programmers, rights holders, and household access.
- Does not generally own: Most underlying external program rights, separate third-party app subscriptions, the household broadband last mile, or consumer attention.
- Current structure: TPG completed its acquisition of AT&T's remaining 70% stake on 2025-07-02.
- Status: `BUS.MEDIA.DISTRIBUTOR.DIRECTV` at L1 candidate; Teach-back pending.
- Next: Why the traditional Bundle became powerful.

### 2026-09-10 — Why The Traditional Pay-TV Bundle Was Powerful

- Question: Why could one broad package outperform selling every channel separately?
- Consumer mechanism: Household values differ sharply by channel but can cluster more tightly for a broad package, making total willingness to pay more predictable.
- Transaction mechanism: One package combines search, contracting, authentication, delivery, billing and customer service.
- Money flow: Household subscription fees reach the distributor; affiliate and retransmission payments continue to programmers and broadcasters; advertising adds a second revenue source around audience reach.
- Power: Broad reach and customer ownership strengthen the distributor, while scarce low-substitutability content can let programmers demand higher rates or wider carriage.
- Quantitative anchor: The FCC reported 239 channels and a $78.99 average price for DIRECTV Choice in 2017, or about $0.33 per channel as a consumer-side average.
- Boundary: Bundling can create aggregation value and also extract value when alternatives are weak. Neither consumer benefit nor harm follows from bundling alone.
- Status: `BUS.SUBSCRIPTION.BUNDLE` at L1 candidate; Teach-back pending.
- Next: Why households that did not watch ESPN still often paid for ESPN.
