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

### 2026-09-11 — Why Non-viewing Households Still Paid For ESPN

- Question: Why did a household that never watched ESPN still indirectly fund it through a traditional Pay-TV package?
- Payment mechanism: The household paid one bundle price to the distributor; the distributor commonly paid ESPN an affiliate fee based on households receiving the channel, not minutes viewed.
- Bargaining mechanism: Scarce live sports made ESPN's absence a potential churn trigger for sports-focused households, giving ESPN leverage to seek broad carriage.
- Contract mechanism: Large programmers can require popular networks to reach a large percentage of subscribers and can link carriage across a portfolio, limiting distributor package flexibility.
- Money flow: Household bundle payment → distributor → ESPN affiliate fee → sports rights and production; advertiser spending supplies a second ESPN revenue stream.
- Quantitative anchor: Disney reported $10.837 billion in domestic ESPN affiliate and subscription fees in fiscal 2025, about 2.5 times $4.273 billion in domestic advertising revenue.
- Bargaining test: The 2023 Charter–Disney settlement retained the ESPN network suite, dropped eight other Disney networks, added streaming entitlements, and increased package flexibility.
- Boundary: Confidential ESPN rates and penetration percentages are not public; the programming fee is not automatically a dollar-for-dollar household bill item.
- Status: `BUS.MEDIA.ESPN.BUNDLE_POWER` at L1 candidate; Teach-back pending.
- Next: Why Cord Cutting destabilizes the broader Pay-TV system.

### 2026-09-12 — Why Cord Cutting Destabilizes The Pay-TV System

- Question: Why does one household's cancellation affect programmers, rights holders, remaining subscribers, and product strategy instead of only one distributor?
- Parent concept: A subscription business maintains a recurring payer base; churn removes a relationship that would otherwise continue generating monthly revenue.
- Definition: Cord cutting is cancellation of a traditional multichannel Pay-TV subscription, not the end of video consumption and not merely switching to another traditional distributor.
- Money flow: The distributor loses video revenue and avoids some per-subscriber costs; programmers lose affiliate-fee and linear-reach bases; multi-year rights and production commitments can adjust more slowly.
- System mechanism: A shrinking payer base, rising per-subscriber rates, package changes, and household exits can reinforce one another, although company strategy can weaken or redirect the loop.
- Quantitative anchor: Traditional U.S. MVPD subscriptions fell from 101.6 million at the 2012 peak to 54.1 million at the end of 2023; 2023 alone lost 7.8 million, about 12.6%.
- Company test: Disney reported a positive 7% ESPN contractual-rate effect almost offset by a negative 7% subscriber effect in fiscal 2025.
- Strategic response: Distributors shift toward broadband, mobile, slimmer packages, and app aggregation; programmers use DTC to seek the customer relationship while assuming acquisition, technology, billing, service, and churn costs.
- Boundary: FCC traditional MVPD, vMVPD, and individual DTC subscriptions use different definitions and cannot be added mechanically.
- Status: `BUS.MEDIA.CORD_CUTTING.SYSTEM_EFFECT` at L1 candidate; Teach-back pending.
- Next: How DTC changes ownership of the customer, data, billing, and operating costs.
