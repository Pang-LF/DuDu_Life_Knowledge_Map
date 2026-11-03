# Semiconductor + Compute Industry Apprenticeship（半导体与计算行业学徒制）

## Scope

November 2026 studies how materials, equipment and design become fabricated wafers, packaged chips, systems, data centers and usable compute services. The apprenticeship follows physical flow, design information, money, control rights, qualification gates and the bottleneck at each layer.

## Progress

### 2026-11-02 — Compute Is an End-to-End Service, Not an Isolated Chip

- Continuity: entered the verified November module directly after the 2026-11-01 Energy Economics closure; no completion gap was present.
- Question: when a user buys cloud compute or a functioning vehicle, what distinct layers must align before a chip becomes usable service?
- Parent concept: `SYSTEM.COMPUTE.FOUNDATION` defines compute as input-to-output transformation delivered by aligned hardware, software, networking, energy, cooling and operations.
- Production map: GAO groups semiconductor production into design, wafer/chip manufacturing and assembly/testing/packaging; materials and equipment enable those stages, while system integration, data centers and cloud operation turn chips into service.
- Minimum unit: one qualified automotive MCU moves from functional design to compatible fabrication, die, package and test, ECU integration, vehicle validation and final user function.
- Shortage evidence: Commerce RFI respondents reported inventory for difficult products falling from a 40-day median in 2019 to under five days in 2021, demand up to 17% above 2019 and most fabs at or above 90% utilization.
- Ford scale: the company's April 2021 outlook estimated about 1.1 million units of lost production and about USD 2.5 billion adverse adjusted EBIT effect; these were contemporaneous forecasts, not audited causal totals.
- Industry roles: Fabless, Foundry, IDM, OSAT, System Integrator, Data Center Operator and Hyperscaler each deliver a different object and control different assets, contracts and customer relationships.
- Evidence boundary: public data support product-specific capacity and qualification constraints but do not identify duplicate ordering's causal share or prove that any particular new fab would have prevented the shortage.
- Status: `SYSTEM.COMPUTE.FOUNDATION` and `BUS.SEMICONDUCTOR.COMPUTE_VALUE_CHAIN` at L1 candidate; Teach-back pending.
- Next: Silicon, Crystal & Wafer — why ordinary silicon is not yet a manufacturing-ready wafer.

### 2026-11-03 — A Wafer Is a Qualified Manufacturing Interface, Not Sliced Commodity Silicon

- Continuity: continued directly from the 2026-11-02 compute-chain foundation; no missing completion log.
- Question: what does a wafer supplier actually sell, why can abundant silicon coexist with scarce qualified 300mm capacity, and who pays for expansion before demand arrives?
- Object map: silica, silicon metal, electronic-grade polysilicon, single-crystal ingot, polished wafer, specialized wafer and customer-qualified wafer are distinct deliverables.
- Mechanism: chemical purification controls unintended impurities; CZ crystal growth extends one lattice and controls dopants; slicing, lapping, etching, polishing, cleaning and inspection create the geometric and surface interface used by a Fab.
- Diameter economics: a 300mm circle has 2.25 times the area of a 200mm circle before edge exclusions, but requires a distinct equipment platform and does not automatically replace mature 200mm production.
- Defect logic: a simple Poisson model shows why the same fatal-defect density has a larger yield effect on larger die; the model is illustrative and total defects cannot be assigned solely to the substrate supplier.
- Deep case: Commerce estimated in 2024 that five suppliers held over 80% of the global 300mm market and about 90% of silicon wafers came from East Asia; the GlobalWafers final award provided up to USD 406 million for about USD 4 billion of expected Texas and Missouri capital expenditure.
- State distinction: GlobalWafers reported its Sherman facility opened in May 2025; opening, sample shipment, customer qualification, production ramp and full utilization remain different events.
- Contract evidence: Micron announced proposed USD 500 million strategic financing and a ten-year supply agreement in July 2026, subject to definitive agreements, approvals and closing conditions.
- Money and power: the Fab pays per qualified substrate and yield predictability, while the supplier pays for feedstock, crucibles, energy, water, consumables, equipment, metrology, process losses and qualification. Power comes from process stability, qualified records, capacity and switching time rather than raw silicon ownership alone.
- Trade-off: long-term agreements improve demand visibility and supply assurance but can lock customers into price, volume or technology commitments if forecasts change.
- Evidence boundary: 2024 concentration figures are dated estimates; the 1.2 million wafers/month number was a staged full-build plan, not opening output; public sources do not disclose current qualification, yield, utilization or contract economics.
- Status: `SYSTEM.SEMICONDUCTOR.SILICON_CRYSTAL_WAFER` and `BUS.SEMICONDUCTOR.WAFER_SUPPLY_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Chip Fabrication Foundation — how repeated oxidation, deposition, lithography, etch and doping transform a qualified wafer into many working devices.
