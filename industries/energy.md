# Energy Industry Apprenticeship（能源行业学徒制）

## Scope

October 2026 studies how primary energy becomes useful service through resources, conversion, networks, markets, institutions, and end-use equipment. The apprenticeship tracks physical flow, money flow, control rights, and the metrics appropriate to each layer.

## Progress

### 2026-10-29 — Capacity Revenue Covers a Reliability Cost Gap; It Does Not Create Steel Overnight

- Question: why can payment only for generated MWh fail to retain the dependable capability needed in rare stress periods?
- Parent concept: `BUS.ENERGY.CAPACITY_MARKET_MISSING_MONEY` is the annualized entry or avoidable-retention cost of marginal dependable capability minus expected net energy and ancillary-service margins.
- Minimal model: a 100 MW peaker with a $120/kW-year requirement and $45/kW-year net market margin has $75/kW-year, or $7.5 million/year, of missing money; across only 20 operating hours that equals $3,750/MWh of additional scarcity margin.
- Two causes: suppressed or incomplete scarcity prices create price-formation missing money; a policy-selected reserve margin above the energy-only economic equilibrium creates reliability-target missing money.
- PJM repricing: 2024/25 cleared at $28.92/MW-day and about $2.2 billion load cost; 2025/26 at $269.92/MW-day and about $14.7 billion; 2026/27 reached the $329.17 cap.
- Delivery boundary: 2027/28 procured 145,777.1 MW UCAP including FRR, 6,517 MW below the reliability requirement, with 14.4% cleared IRM against a 20% target.
- Delay mechanism: gas turbines and generator step-up transformers approached three-to-four-year lead times while large loads could appear in 12-18 months; a current price cannot recover elapsed construction time.
- Design comparison: centralized auction, bilateral RA, long-term contract, and ORDC scarcity pricing move demand, price, construction, performance, policy, and stranded-cost risk among customers, LSEs, providers, and investors.
- Evidence boundary: auction results changed with forecasts, accreditation, zones, portfolios, offer rules, and caps; no single rule change independently explains the observed shortfall.
- Status: `BUS.ENERGY.CAPACITY_MARKET_MISSING_MONEY` and `SYSTEM.ELECTRICITY.CAPACITY_PROCUREMENT_DESIGN` at L1 candidate; Teach-back pending.
- Next: Long-term Contracts & Cost of Capital — why revenue duration and risk allocation change financeability and total customer cost.

### 2026-10-28 — Reliability Is a Customer-Funded Risk Target, Not a Promise of Zero Outages

- Question: how much system adequacy should customers collectively buy, and which metric shows what they receive?
- Parent concept: `SYSTEM.ELECTRICITY.RELIABILITY_METRICS_LOLE_EUE` separates expected duration above the shortfall boundary from probability-weighted unserved MWh below it.
- Minimal model: two portfolios can both have 3 hours LOLE while one has 3 MWh EUE and the other 3,000 MWh; the metric choice changes what remains visible.
- GB standard: the 2013 central VoLL and long-term net-CONE assumptions produced 2.78 hours LOLE; the 2014 regulations adopted 3 hours expected loss of load per capacity year.
- Boundary: three hours LOLE is not three customer-outage hours. It concerns modeled adequacy states and specified emergency actions, excluding events caused solely by transmission or distribution faults.
- First auction: 48.6 GW target, 65.7 GW prequalified, 49.3 GW procured at GBP 19.40/kW-year, implying about GBP 956 million in simple gross annual agreement value before adjustments.
- Money flow: government sets the target, the delivery framework converts it into de-rated capacity demand, providers receive capacity payments and duties, load ultimately funds the product, and energy revenues remain separate.
- Distribution boundary: average VoLL hides differences among homes, hospitals, factories and data centers; equal national LOLE does not imply equal customer risk.
- Status: `BUS.ENERGY.RELIABILITY_STANDARD_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Capacity Market and Missing Money — why energy-only revenue may not retain enough dependable capacity and how procurement design changes incentives.

### 2026-10-27 — Accreditation Prices Portfolio Risk Reduction, Not Nameplate MW

- Continuity: resumed from 2026-10-24; no completion records were invented for 2026-10-25 or 2026-10-26.
- Question: if a plant does not physically change but its accreditation falls from 90% to 50%, who loses revenue, who pays more, and what reliability protection is being purchased?
- Parent concept: `SYSTEM.ELECTRICITY.CAPACITY_ACCREDITATION_ELCC` converts nameplate MW into reliable MW by comparing a resource class's marginal EUE reduction with equally sized perfect capacity.
- Minimal model: if 100 MW perfect capacity reduces EUE by 20 MWh and the resource class reduces it by 14 MWh, the class rating is 70%; this is not a 70% capacity factor or a 30% outage probability.
- Elliott evidence: PJM expected about 155,700 MW available on 24 December 2022, but forced outages approached 47,000 MW; 92% gave no more than one hour notice, gas represented 70% of outage capacity, and peak-load forecasts were about 8% low.
- Final 2026/27 comparison: fixed solar 10%, onshore wind 38%, four-hour storage 54%, ten-hour storage 73%, gas combined cycle 77%, coal 85%, nuclear 95%, and demand resources 72%.
- Revenue boundary: accreditation sets saleable UCAP quantity; auction or contract rules set price. At a hypothetical constant $100/MW-day, 10, 54, and 95 UCAP MW imply $365,000, $1.971 million, and $3.4675 million of annual gross capacity revenue.
- Portfolio rule: marginal credit changes as prior additions move the scarcity window. A lower marginal ELCC does not mean an existing resource never contributed or has physically degraded.
- Governance boundary: weather, outage data, projected entry and exit, resource classification, transmission representation, and model versions can change economic outcomes; complexity is not proof of error, but it increases the need for transparency and sensitivity testing.
- Evidence boundary: old 2024/25, final 2026/27, and preliminary 2027/28-2035/36 ratings differ in method, portfolio, and status; they are not a clean physical-performance time series.
- Status: `BUS.ENERGY.CAPACITY_CREDITING_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Reliability Metrics and Reliability Standard Economics — what LOLE and EUE count, and how much reliability customers are buying.

### 2026-10-24 — Capacity Is a Conditional Promise, Not a Nameplate Sum

- Question: What does a capacity contract buy, and why can a rarely dispatched resource still deserve payment?
- Parent concept: `SYSTEM.ELECTRICITY.RESOURCE_ADEQUACY_CAPACITY` asks whether a portfolio can deliver load plus reserves in the actual risk periods after outages, weather correlation, duration, location, fuel, imports, and network limits.
- Minimal model: a 100 MW solar plant can contribute near 100 MW at noon and near zero after sunset; a 100 MW / 100 MWh battery can move that power for about one hour, not a four-hour stress event.
- California obligation: the August 2020 adjusted forecast was 44,740 MW and the 14.9% blended reserve requirement produced a 51,413 MW obligation, represented by 48,926 MW shown RA, 290 MW RMR, and 2,197 MW credits.
- Stress evidence: on 14 August, load with demand-response add-back was about 4.8% above forecast, forced outages about 4.8%, and contingency need about 6.3%; including 514 MW of unreplaced planned outages raised operational need to about 17.0% of forecast load.
- Timing evidence: wind and solar output fell 5,438 MW between gross and net-demand peaks on 14 August, so a peak-focused nameplate total did not fully describe evening deliverability.
- Money and control: customers fund LSE procurement from providers; CPUC or other local authorities define obligations; CAISO receives supply plans, must-offer commitments, and operational visibility without owning the plants.
- Product boundary: System RA, Local RA, and Flexible RA answer different adequacy questions. Capacity payment buys accredited availability and duties, not the MWh later produced.
- Evidence boundary: the official analysis identifies extreme weather, planning processes, and market practices as joint contributors; it does not establish one technology or rule as the sole cause.
- Status: `BUS.ENERGY.CAPACITY_ADEQUACY_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Capacity Accreditation & ELCC — how many dependable MW should each resource receive in the portfolio's risk hours?

### 2026-10-23 — Flexibility Is a Deliverable Change in MW, Not a Pile of MWh

- Question: How can one battery earn from energy arbitrage and ancillary services without selling the same MW twice?
- Parent concept: `SYSTEM.ELECTRICITY.FLEXIBILITY_RAMPING_STORAGE` defines flexibility by direction, baseline, MW, response time, ramp rate, duration, location, energy state, recovery, and failure correlation.
- Minimal model: 100 MW for 15 seconds uses only 0.417 MWh, about 0.32% of 129 MWh, while 100 MW for four hours requires 400 MWh. Fast response and sustained energy are different products.
- Hornsdale case: the original battery provided 100 MW discharge, 80 MW charge and 129 MWh, about 75 minutes at full output; 70 MW was reserved for reliability and 30 MW / 119 MWh was available for commercial energy operation.
- Operational evidence: Hornsdale followed AGC set-points as often as every four seconds and responded consistently with expectations when 689 MW of generation tripped on 18 December 2017.
- Market evidence: in Q1 2018 it charged 11 GWh, discharged 8.9 GWh, was enabled for regulation FCAS 71% and contingency FCAS 99% of the time; total FCAS costs fell 57%, with demand response, fewer constraints and changed incumbent offers also contributing.
- Revenue rule: co-optimise charge, discharge, reserve enablement, state of charge, efficiency, degradation, network limits, penalties and recovery. Standalone maximum revenues cannot simply be added.
- Status: `BUS.ENERGY.FLEXIBILITY_ASSET_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Resource Adequacy & Capacity — how a system buys confidence that enough deliverable capability will exist during future scarcity.

### 2026-10-22 — Two Settlement Prices the Plan, Then the Deviation

- Question: Who pays for one forecast-error MWh, and why can firms fail even when annual DAM and RTM average prices look close?
- Parent concept: `SYSTEM.ELECTRICITY.DAY_AHEAD_REAL_TIME_SETTLEMENT` settles the day-ahead quantity at the day-ahead price and only the actual-minus-scheduled deviation at the real-time price.
- Minimal model: a retailer buying 100 MWh at $40/MWh and consuming 110 MWh at a $500/MWh real-time price pays $4,000 day-ahead plus $5,000 for the 10 MWh deviation, for $9,000 total or $81.82/MWh effective cost.
- Generator mirror: a generator selling 100 MWh day-ahead but producing 90 MWh buys back the 10 MWh shortfall at the real-time price; at the same prices its $4,000 day-ahead revenue becomes a negative $1,000 total energy settlement.
- Risk rule: exposure is not simply a high real-time price; it combines volume deviation, day-ahead/real-time spread, locational basis, physical or counterparty performance, and collateral.
- ERCOT case: more than 52 GW was unavailable at the Uri event peak; 2021 real-time prices exceeded $1,000/MWh for 166 hours, averaged $167.88/MWh versus $40.73 excluding Uri, and short payments exceeded $3 billion.
- Evidence boundary: forecast error did not independently cause the defaults; outages, fuel, emergency-pricing duration, contracts, ancillary services, collateral, and default allocation also contributed.
- Status: `BUS.ENERGY.TWO_SETTLEMENT_MARKET_RISK` at L1 candidate; Teach-back pending.
- Next: Ramping, Flexibility & Storage — which physical assets can correct the deviation and earn from intertemporal scarcity.

### 2026-10-21 — Wholesale Electricity Has a Location

- Continuity: resumed from 2026-10-18; no completion records were invented for 2026-10-19 or 2026-10-20.
- Question: Who calculates LMP, who settles against it, and does a nodal price spread become transmission-owner profit?
- Parent concept: `SYSTEM.ELECTRICITY.CONGESTION_LOCATIONAL_VALUE` explains why a binding network constraint makes the next MWh change different generators at different nodes.
- Minimal model: with West wind at `-$10/MWh`, East gas at `$50/MWh`, 150 MW East demand, and a 100 MW line, West LMP is -$10, East LMP is $50, and one extra MW of line capacity has a $60 hourly shadow value.
- Texas case: West-to-North bound in 3,121 fifteen-minute intervals in 2009; West-zone hourly average prices were negative for more than 700 hours while wind curtailment occurred under both zonal and local definitions.
- Market design: ERCOT's nodal market began on 1 December 2010 with LMPs at more than 8,000 nodes; the market exposed physical marginal cost differences rather than creating the constraint.
- CREZ outcome: Texas selected a plan expected to accommodate 18,456 MW of renewable capacity; final upgrades completed in early 2014 added more than 3,600 miles at a reported $6.9 billion. Available wind utilization reached about 99% in 2013 and the major West-to-North constraint ceased to be significant.
- Settlement boundary: generators, load, CRR holders, transmission owners, and retail customers face different settlement or cost-recovery rules; congestion revenue is not automatically transmission-owner profit.
- Evidence boundary: the $4.93 billion planning estimate and $6.9 billion final report are not a clean overrun comparison; negative-price hours are zonal averages; CREZ was a major contributor but not the only changing condition.
- Status: `BUS.ENERGY.WHOLESALE_MARKET_LOCATIONAL_PRICING` at L1 candidate; Teach-back pending.
- Next: Day-Ahead versus Real-Time Markets and Two-Settlement System — who bears forecast and deviation risk.

### 2026-10-18 — Transmission Sells Post-Contingency Options, Not MWh

- Question: Why can a lightly used transmission line still justify customer payment?
- Parent concept: `SYSTEM.ELECTRICITY.TRANSMISSION_SECURITY_N1` evaluates the post-contingency state, not only current loading; thermal, voltage, and stability feasibility must survive credible outages.
- Northeast blackout case: the reconstructed system passed more than 800 tested contingencies before Harding-Chamberlin tripped at 15:05, but several next contingencies violated emergency limits afterward. The network lost its next-outage margin before widespread load was lost.
- Network product: transmission changes which generators and loads can remain connected across normal, outage, congestion, and extreme-weather states. It can create reliability option value with modest average utilization.
- Actor boundary: transmission owners finance and maintain assets, system operators coordinate flows, generators produce electricity, regulators approve applicable planning and rates, and load-serving entities or utilities recover costs from customers.
- Benefit rule: compare avoided reliability facilities, loss-of-load risk, production cost, losses, outage congestion, extreme-condition flexibility, and capacity or replacement deferral against the no-project portfolio.
- Cost-allocation rule: owner revenue, congestion settlement, total system benefit, and beneficiary cost responsibility are separate quantities; a benefit must be assigned to a geography, time horizon, metric, and counterfactual.
- Status: `BUS.ENERGY.TRANSMISSION_NETWORK_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Congestion & Locational Value — why the same MWh can have different prices at different nodes in the same hour.

### 2026-10-17 — Ancillary Services Buy an Executable Option to Change Power

- Question: Why should a resource be paid for standing ready even when it delivers few or no MWh?
- Parent concept: `SYSTEM.ELECTRICITY.FREQUENCY_CONTROL_RESERVES` separates FCR containment, FRR restoration, and RR replacement so a normal frequency reading is not confused with restored resilience.
- Continental Europe case: A system split removed about 5.8 GW of transfer. The north-west fell to 49.74 Hz while the south-east rose to 50.6 Hz; automatic and manual resources had to move in opposite directions.
- Demand-side resource: approximately 1.7 GW of contracted French and Italian industrial load disconnected, converting foregone consumption into fast upward balancing support.
- Cross-system support: Nordic and Great Britain HVDC links supplied up to approximately 595 MW to the north-west without requiring the supporting synchronous areas to share its exact AC frequency.
- Product rule: reserve MW must specify direction, response time, full activation, duration, energy state, location, trigger, recovery, correlation, payment, and penalty.
- Money flow: reserve providers may receive availability, activation-energy, or performance payments; users ultimately fund the reliability service, while providers bear headroom, lost production, cycling, fuel, and non-performance costs.
- Status: `BUS.ENERGY.ANCILLARY_SERVICES` at L1 candidate; Teach-back pending.
- Next: Transmission Security and N-1 — why sufficient generation and reserve do not prevent a heavily loaded corridor from cascading after one element trips.

### 2026-10-16 — Grid Dispatch Buys Feasible Response, Not Only Cheap Energy

- Question: Why can a grid operator not dispatch generators by marginal energy cost alone?
- Parent concept: `SYSTEM.ELECTRICITY.REAL_TIME_BALANCE` requires active-power injections and withdrawals to match continuously; frequency is a system-wide symptom of imbalance, not an inventory meter.
- Great Britain case: On 9 August 2019, combined generation losses reached about 2,100 MW against roughly 1,000 MW of held response. Frequency fell from 50 Hz to 48.8 Hz and automatic load shedding affected more than one million consumers.
- Physical sequence: rotational energy and frequency-sensitive load act immediately; automatic frequency response follows in seconds; reserve and redispatch replace the loss over longer intervals; LFDD is a last protective barrier.
- Actor boundary: generator owners own plants, network companies own wires, the system operator coordinates balance and dispatch, and retailers or load-serving entities face customers and recover costs.
- Dispatch rule: the feasible set is constrained by availability, startup, ramp, minimum output, duration, state of charge, location, congestion, contingency risk, response headroom, and reserve restoration before cost can be minimized.
- Ancillary-services rule: energy pays for delivered MWh, while response and reserve pay for readiness and the ability to change MW at the required speed and duration.
- Evidence boundary: the event supports the imbalance and protection mechanism but does not identify one unique least-cost counterfactual reserve portfolio without dynamic modelling and joint-failure assumptions.
- Status: `BUS.ENERGY.GRID_OPERATOR_DISPATCH` at L1 candidate; Teach-back pending.
- Next: Frequency Control & Reserves — how inertia, primary response, operating reserve, storage duration, and redispatch divide the recovery job.

### 2026-10-15 — High Utilization Does Not Guarantee Profitability

- Question: Why can a power plant generate many megawatt-hours and still fail to cover its complete cost?
- Parent concept: `SYSTEM.ENERGY.CAPACITY_FACTOR_UTILIZATION` measures actual generation divided by rated capacity times period hours; it does not by itself measure availability, reliability, profitability, or social value.
- TMI-1 case: EIA historical data record 805 MW net summer capacity and 6,633,750 MWh annual generation, about a 94% capacity factor. The plant still retired in 2019 after reported losses and three failed PJM capacity auctions.
- Market separation: Energy markets pay for generated MWh, capacity markets pay for a future availability commitment, ancillary services pay for short-timescale reliability capabilities, and contracts or policies may pay for longer-term energy and attributes.
- Revenue rule: Capacity factor scales MWh and therefore variable contribution, but complete economics also require realized price, capacity and ancillary revenue, fixed O&M, required capital, financing, and contract terms.
- Contrast: A low-capacity-factor peaker may still be valuable because its task is fast power during rare scarcity, while a high-capacity-factor nuclear plant can remain uneconomic when revenue does not cover fixed cost.
- Aftermath: A 20-year Microsoft PPA supports the proposed Crane Clean Energy Center restart and changes revenue certainty; it does not replace NRC approval, asset restoration, or future operating proof.
- Status: `BUS.ENERGY.DISPATCH_ECONOMICS` at L1 candidate; Teach-back pending.
- Continuity: Course resumes from 2026-10-12; no lessons are recorded for 2026-10-13 through 2026-10-14.
- Next: Real-Time Balance and Grid Operator Dispatch — why electricity supply and demand must match continuously and how operating constraints shape the next unit selected.

### 2026-10-12 — Efficiency Is a Capital-for-Fuel Trade-off

- Question: Why does a generator sometimes buy more equipment to save fuel, while retaining a less-efficient machine for peak service?
- Parent concept: `SYSTEM.ENERGY.CONVERSION_EFFICIENCY` defines efficiency only after input, useful output, boundary, LHV or HHV basis, gross or net output, and operating condition are fixed.
- Nishi-Nagoya case: Each 1,188.2 MW block combines three gas turbines with one steam turbine. Heat-recovery steam generators route hot exhaust into a second power cycle; Unit 7-1 reported 63.08% LHV generation efficiency in 2018.
- Asset rule: Added HRSG, steam-turbine, condenser, cooling, water, and control assets exchange higher fixed capital and coupling for lower fuel use per MWh.
- Money flow: Heat rate converts gas price into fuel cost per MWh; spark spread is electricity price minus simplified fuel cost, not complete profit.
- Operating boundary: A high-utilization plant can compound fuel savings across many MWh, while a low-capital simple-cycle turbine can remain rational for rare, fast peak service.
- Comparison rule: LHV versus HHV, gross versus net, design versus actual, and full-load versus part-load figures must match before ranking efficiencies.
- Status: `BUS.ENERGY.CONVERSION_ASSETS` at L1 candidate; Teach-back pending.
- Continuity: Course resumes from 2026-10-03; no lessons are recorded for 2026-10-04 through 2026-10-11.
- Next: Capacity Factor & Utilization — how operating hours turn rated capability and efficiency into delivered energy, cost recovery, and system value.

### 2026-10-03 — Density Becomes an Asset Stack

- Question: Why can a cheaper energy unit or more efficient device still require more capital assets to deliver the same service?
- Parent concept: `SYSTEM.ENERGY.DENSITY` separates usable energy per mass or volume from peak and continuous power per mass, volume, or area.
- Physical asset rule: A service must specify usable energy, peak and continuous power, duration, location, reliability, and the scarce physical denominator before storage, conversion, network, cooling, and backup assets can be sized.
- X-57 case: About 390 kg of batteries provided 47 kWh usable energy for a mission with roughly 145 kW peak power. The battery changed seating, wing design, propulsion count, cooling, controls, testing, and certification rather than acting as a drop-in fuel tank.
- Money flow: Cell makers, pack integrators, aircraft manufacturers, airports, utilities, and operators finance different layers; costs return through equipment prices, network charges, utilization, payload trade-offs, and customer prices.
- Power and leverage: Certified system-level Wh/kg, high-power electronics, grid connections, thermal safety, and regulatory experience can be scarcer than raw energy and therefore capture bargaining power.
- Metrics: usable system Wh/kg, continuous and peak W/kg, duration, payload-range trade-off, turnaround power, cycle life, utilization, certification cost, and replacement cost.
- Status: `BUS.ENERGY.PHYSICAL_ASSET_REQUIREMENTS` at L1 candidate; Teach-back pending.
- Next: Conversion Efficiency and Losses — how much energy survives each conversion stage, where waste heat goes, and which assets pay for the losses.

### 2026-10-02 — Energy Accounting Starts by Fixing the Denominator

- Question: When someone says an energy system is "80% clean," which table and boundary would make that statement auditable?
- Parent concept: `SYSTEM.ENERGY.ACCOUNTING_BOUNDARY` requires every share to name its numerator, denominator, conversion stage, geography, time window, and accounting convention.
- Energy Balance: A balance sheet of energy entering, being transformed within, and leaving a defined system; it prevents electricity generation, final energy, primary energy, capacity, and useful service from being treated as the same quantity.
- France case: In 2024, 95% of French electricity generation was low-carbon, while petroleum, gas, and coal still supplied about 57.1% of economy-wide final energy. Both statements can be true because their denominators describe different stages and uses.
- Industry implication: Producers, generators, network operators, retailers, equipment makers, and policymakers can each report a legitimate metric that describes only their layer. Comparing them requires an explicit bridge across conversion losses and sector boundaries.
- Audit rule: Rewrite the claim as a fraction, identify the layer and units, then locate the original Energy Balance or system report before interpreting performance or market opportunity.
- Status: no separate industry node added; this is an Energy Industry Apprenticeship method grounded in `SYSTEM.ENERGY.ACCOUNTING_BOUNDARY`. Teach-back pending.
- Next: Energy Density and Power Density — why equal amounts of reported energy can require radically different physical assets, land, storage, and delivery rates.

### 2026-10-01 — The Energy Value Chain Delivers Services, Not Resources Alone

- Question: Why does one warm room require resource producers, midstream infrastructure, generators, grid operators, network utilities, retailers, regulators, and end-use equipment?
- Parent concept: `SYSTEM.ENERGY.FOUNDATION` distinguishes primary energy, energy carriers, final energy, end-use devices, and energy services.
- Physical flow: Primary resources move through extraction or capture, processing, conversion, transmission or transport, distribution, and end-use equipment.
- Money flow: Customer payments can be divided among retail supply, wholesale energy, network charges, fuel, capacity, policy costs, and regulated cost recovery; the path differs by market structure.
- Control flow: Grid operators coordinate real-time balance, pipeline operators manage pressure and delivery, regulators set obligations, and utilities control network operations; none alone owns the entire chain.
- Texas case: Extreme cold simultaneously raised heating demand and impaired gas production, fuel delivery, generating units, and electric service, exposing cross-system dependence.
- Metrics boundary: Reserves, production, nameplate capacity, available capacity, generation, delivered energy, unserved energy, and useful service are not interchangeable.
- Status: `BUS.ENERGY.VALUE_CHAIN` at L1 candidate; Teach-back pending.
- Next: Energy Accounting Boundaries — why the apparent energy mix changes when the denominator is primary energy, electricity generation, final energy, or useful service.
