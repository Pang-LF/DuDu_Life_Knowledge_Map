# Energy Industry Apprenticeship（能源行业学徒制）

## Scope

October 2026 studies how primary energy becomes useful service through resources, conversion, networks, markets, institutions, and end-use equipment. The apprenticeship tracks physical flow, money flow, control rights, and the metrics appropriate to each layer.

## Progress

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
