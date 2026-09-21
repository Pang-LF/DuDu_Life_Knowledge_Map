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

### 2026-09-13 — How DTC Reallocates The Customer Relationship

- Question: When Disney moves programming from a cable bundle into Disney+, who controls the customer, data, bill, and operating responsibility?
- Definition: DTC moves the content company closer to the household through its own branded subscription product, but does not remove every intermediary.
- Relationship test: Trace acquisition, identity, billing, product usage, service, cancellation, and winback separately rather than saying one firm simply “owns the customer.”
- Direct path: A DisneyPlus.com subscriber gives Disney more control over price, account, payment, usage data, service, renewal, and cancellation.
- Partner path: App-store billing and wholesale entitlements split acquisition, payment, identity, data, and revenue with Apple, Verizon, Roku, Amazon, or another platform by contract.
- Money flow: Direct subscription revenue moves toward Disney, while technology, distribution, marketing, payment, service, content, and churn costs also move inside Disney's operating boundary.
- Quantitative anchor: Disney+ reached 73.7 million paid subscribers by fiscal year-end 2020; the former DTC segment lost $4.015 billion in fiscal 2022; Entertainment DTC reported $24.614 billion revenue and $1.327 billion operating income in fiscal 2025.
- Reporting boundary: Fiscal 2022 and 2025 segment definitions are not fully comparable, and paid-subscriber counts include some wholesale entitlements.
- Sequencing note: DTC customer ownership was pulled forward from the transformation sequence because it was the explicit next focus after Cord Cutting; Cable, Satellite, vMVPD, and Streaming architecture moves to the next industry lesson.
- Status: `BUS.MEDIA.DTC.CUSTOMER_RELATIONSHIP` at L1 candidate; Teach-back pending.
- Next: How Cable, Satellite, vMVPD, and Streaming differ in transmission, packaging, and customer relationship.

### 2026-09-14 — Cable, Satellite, vMVPD And Streaming Are Different Layers

- Question: If all four can appear on a television screen, why are they not the same commercial role?
- Parent distinction: Streaming is internet delivery technology; MVPD and vMVPD describe multichannel aggregation; SVOD describes a recurring on-demand product; DTC describes a closer commercial relationship with the consumer.
- Cable: Can combine a local HFC broadband last mile, a multichannel video package, billing, installation, service, and product data.
- Satellite: Aggregates multichannel video over a wide-area DBS path but usually does not own the household broadband last mile used by apps.
- vMVPD: Aggregates subscription packages of live linear channels over the customer's ISP, preserving programming costs and distributor responsibilities without a dedicated access network.
- SVOD: Sells recurring access to an on-demand service while depending on ISPs, CDNs, devices, app stores, clouds, and billing partners.
- Money flow: Households may pay an ISP plus a video distributor or DTC service; multichannel distributors pay programmers, while DTC services fund or license content and bear product, technology, marketing, service, and churn costs.
- Quantitative anchor: Comcast ended 2025 with about 31.3 million domestic broadband customers and 11.3 million domestic video customers, showing that cable's access relationship extends beyond the traditional video bundle.
- Boundary: An app interface and internet transport do not reveal who owns content, the package, billing, the customer relationship, or the last mile.
- Status: `BUS.MEDIA.DISTRIBUTION.MODELS` at L1 candidate; Teach-back pending.
- Next: Broadband and the technological foundations of streaming.

### 2026-09-15 — Broadband And The Technological Foundations Of Streaming

- Question: Why can two households on the same advertised 300 Mbps broadband tier have very different 4K start time, quality, and rebuffering?
- Parent concept: Broadband is the household's high-capacity internet access relationship; its advertised Mbps tier describes one link, not guaranteed end-to-end application throughput.
- Minimum unit: One hypothetical four-second video segment moves through an encoded bitrate variant, manifest, CDN, interconnection, ISP access network, home network, device, and adaptive bitrate player.
- Segment arithmetic: Four seconds at 15 Mbps contains about 60 megabits or 7.5 megabytes; stable 30 Mbps delivery takes roughly two seconds and adds buffer, while 10 Mbps takes roughly six seconds and depletes buffer.
- CDN mechanism: Distributed copies reduce repeated origin and long-haul delivery; they do not upgrade the household's last mile or merge the ISP and video-service bills.
- Open Connect evidence: Netflix reported in 2021 that it had invested more than $1 billion in over 14,000 appliances across 142 countries; qualifying ISPs can receive embedded appliances without hardware charge while providing space, power, and connectivity.
- ABR mechanism: The player selects among pre-encoded variants using recent throughput and buffer state, trading temporary quality reduction for lower rebuffer risk.
- Operational metrics: Diagnose video start time, delivered bitrate or resolution, rebuffer ratio, and playback failure by ISP, region, device, time, and delivery path rather than relying on plan speed alone.
- Boundary: Real segment sizes and encodes vary; the 4-second arithmetic is illustrative, and a router-side speed test does not localize CDN, interconnection, Wi-Fi, device, or player constraints.
- Status: `BUS.MEDIA.STREAMING.TECH_FOUNDATIONS` at L1 candidate; Teach-back pending.
- Next: How broadband, DTC, platforms, devices, content scarcity, and aggregation shifted industry bargaining power.

### 2026-09-16 — How DTC And Broadband Shifted, But Did Not Eliminate, Bilateral Power

- Question: If Disney can distribute directly to consumers and Charter can retain households through broadband, why could neither party bypass the other without material cost in 2023?
- Parent concept: Bargaining power comes from relative no-deal costs, outside options, switching speed, time sensitivity, and control of assets the counterparty cannot readily replace; it is not company size alone.
- Household unit: One Spectrum family seeking ESPN during the blackout can wait, switch distributors, cancel video, buy another service, or retain Spectrum broadband; aggregated household choices turn content scarcity and customer access into leverage.
- Disney leverage: Scarce live sports can trigger immediate dissatisfaction and video churn; linear distribution also supplies affiliate revenue and advertising reach that DTC did not instantly replace.
- Charter leverage: Its video scale, billing, packaging, service, and large broadband relationship can redirect customers toward other packages and DTC services, but missing ESPN can still damage the video relationship.
- Quantitative anchors: Charter expected to pay Disney more than $2.2 billion in 2023; the temporary loss produced a $61 million programming-cost benefit, which was avoided cost rather than net gain; Q4 video customers fell 248,000 versus 145,000 a year earlier, partly due to the dispute.
- 2023 settlement: Restored 19 Disney networks including the ESPN suite, removed eight lower-priority networks, included wholesale Disney+ and ESPN+ entitlements, expanded package flexibility, and opened DTC retail access to Charter's broadband-only base.
- 2025 aftermath: Hulu with Ads entered the package and the eight networks returned under a larger agreement, showing that asset value depends on the full set of exchanged terms rather than a permanent winner.
- Boundary: Public documents do not reveal confidential rates, wholesale app economics, or exact churn attribution; list-price bundle value is not wholesale cost or household willingness to pay.
- Status: `BUS.MEDIA.INDUSTRY_POWER_SHIFT` at L1 candidate; Teach-back pending.
- Next: Subscription Economics Foundation — revenue, churn, retention, cohorts, and the correct unit of analysis.

### 2026-09-17 — Subscription Economics Starts With A Continuing Relationship

- Question: Does a subscription business sell one month's revenue or a customer relationship that can continue or end?
- Parent concept: A subscription exchanges recurring payment for continuing access or service; its minimum analytic unit is one active customer-period, such as a household-month.
- Stock and flow: Ending subscribers equal beginning subscribers plus starts or rejoins minus cancellations under consistent definitions; gross additions alone do not measure growth.
- Revenue: Period subscription revenue is generated by active customer-months, realized prices, and plan mix, not ending subscribers multiplied by the newest list price.
- Netflix 2011 anchor: Q3 began with 24.594 million unique U.S. subscribers, added 4.714 million, recorded 5.519 million cancellations, and ended at 23.789 million.
- Timing anchor: U.S. revenue still rose 44% year over year to $799 million because many cancellations were back-loaded and active customer-months had already generated revenue.
- Price anchor: Keeping both streaming and one-DVD service moved from $9.99 to $15.98, a $5.99 or roughly 60% increase, while each standalone service cost $7.99.
- Cohort role: Group relationships by start date, plan, channel, or offer to separate tenure and acquisition mix from a true retention change.
- Boundary: Aggregate filings cannot isolate the causal contribution of price, communication, and Qwikster; churn definitions vary, and LTV is deferred.
- Status: `BUS.SUBSCRIPTION.ECONOMICS.FOUNDATION` at L1 candidate; Teach-back pending.
- Next: Churn and Retention by Cohort — how relationship exit rates reshape the future payer base.

### 2026-09-18 — Churn Must Be Defined And Read By Cohort

- Question: What does Netflix's reported 6.3% churn measure, and why can it not identify which customer relationships deteriorated?
- Parent concept: A subscription is a continuing customer-period relationship; churn measures defined exits, while retention follows the same acquisition cohort over relationship age.
- Netflix definition: Quarterly cancellations divided by beginning subscribers plus gross additions, then divided by three months.
- Q3 2011 arithmetic: 5.519 million / (24.594 million + 4.714 million) / 3 = 6.28%, reported as 6.3%.
- Comparison: Q3 churn rose from 4.2% in Q2 and 3.8% a year earlier; the 2.5-point year-over-year increase was about 65.8% relative.
- Compounding intuition: A hypothetical cohort facing a stable 6.3% monthly exit hazard would retain about 45.8% after 12 months, versus 62.8% at 3.8%; Netflix's aggregate metric is not itself that forecast.
- Cohort method: Group customers by acquisition month, plan, price, channel, and intervention, then track retention by months since start and exit hazard among those active at each month.
- Exit taxonomy: Separate voluntary cancellation, involuntary payment failure, pause, downgrade, plan migration, and reactivation or winback.
- Selection connection: Aggregate churn can improve after high-risk customers have already exited, so survivors may look healthier without recovery of the original cohort.
- Boundary: Public filings do not reveal household-level cohorts and cannot isolate price, Qwikster, communication, plan migration, or changing acquisition mix.
- Status: `BUS.SUBSCRIPTION.CHURN_RETENTION` at L1 candidate; Teach-back pending.
- Next: CAC and Payback Period — how many retained customer-months are needed to recover acquisition spending.

### 2026-09-19 — Acquisition Cost Is Recovered By Retained Margin, Not Revenue

- Question: Why does DIRECTV's $883 SAC divided by $106.94 ARPU not imply an 8.3-month payback?
- Parent concept: A subscription acquisition buys a sequence of uncertain future customer-months; the upfront cost is recovered only by contribution margin from relationships that remain active.
- Cost definition: DIRECTV SAC included expensed acquisition costs plus cash paid for new-subscriber leased equipment, divided by gross additions; equipment, installation, commissions, advertising, marketing and acquisition call-center costs were inside the stated boundary.
- 2014 arithmetic: $2.853 billion expensed cost + $0.507 billion acquisition equipment cash = $3.360 billion, divided by 3.804 million gross additions = $883 SAC.
- Stock-flow boundary: 3.804 million gross additions and 3.705 million disconnections produced only about 99,000 net additions; replacement acquisition can preserve the payer base without creating equivalent net growth.
- Revenue error: $883 / $106.94 ARPU = 8.3 months but treats revenue as recoverable cash and ignores programming, service, operations, retention and other continuing costs.
- Contribution proxy: Applying the disclosed 34.1% Pre-SAC Margin ratio to ARPU yields about $36.47 per active subscriber-month and a 24.2-month pre-churn proxy.
- Retention extension: Under a clearly hypothetical constant 1.52% monthly hazard and constant contribution, retained cumulative contribution reaches $883 after roughly 30 months; this is not an official DIRECTV cohort result.
- Practitioner method: Compare channel and offer cohorts using monthly active retention, realized revenue, variable cost, contribution margin, cumulative contribution and the first month cumulative contribution exceeds CAC or SAC.
- Boundary: Pre-SAC Margin is a non-GAAP segment average over new and mature subscribers, not an incremental new-customer margin; disclosed aggregates cannot reveal true cohort payback.
- Status: `BUS.SUBSCRIPTION.CAC_PAYBACK` at L1 candidate; Teach-back pending.
- Next: LTV and unit economics — how lifetime retention, margin and time value extend beyond payback.
