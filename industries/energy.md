# Energy Industry Apprenticeship（能源行业学徒制）

## Scope

October 2026 studies how primary energy becomes useful service through resources, conversion, networks, markets, institutions, and end-use equipment. The apprenticeship tracks physical flow, money flow, control rights, and the metrics appropriate to each layer.

## Progress

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
