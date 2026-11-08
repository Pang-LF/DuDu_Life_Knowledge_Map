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

### 2026-11-04 — A Fab Sells Repeatable Design-to-Good-Die Conversion, Not One Printing Step

- Continuity: continued directly from the 2026-11-03 qualified-wafer lesson; no missing completion log.
- Question: how do repeated film formation, lithographic selection, etch, doping, anneal, planarization, cleaning and metrology turn a qualified wafer into processed wafers, and what does a foundry actually sell?
- Parent concept: `SYSTEM.SEMICONDUCTOR.CHIP_FABRICATION_FOUNDATION` defines fabrication as repeated temporary pattern selection followed by permanent material or electrical modification inside one integrated process window.
- Minimum unit: one patterned opening in a film selects where later etch, implantation, diffusion, contact or interconnect formation occurs.
- Deep case: Jean Hoerni's Fairchild planar process retained silicon dioxide over sensitive junctions while opening controlled windows for diffusion and contacts, improving surface stability and enabling repeated same-side processing foundational to monolithic ICs.
- Modern scale: NIST describes modern fabrication at the order of 40-100 repeated pattern cycles, 40-70 masks and up to roughly 2,000 total steps; these are order-of-magnitude descriptions, not a universal route.
- Foundry product: the customer buys a qualified design-to-good-die conversion platform—design rules, process technology, wafer starts, cycle time, process control, yield learning and delivery—not bare wafer area or lithography exposure alone.
- TSMC scale: 2025 disclosures reported more than 17 million 12-inch-equivalent wafers of annual capacity, about 15.022 million shipments, US$40.895 billion of capital expenditure and 59.9% gross margin; utilization, price, cost improvement, product mix, exchange rates and new-technology ramps all affect economics.
- Revenue boundary: TSMC's 3Q26 79% advanced-technology wafer-revenue share is not wafer-volume share, transistor share or a generic foundry margin.
- Risk allocation: Fabless customers fund design, masks, engineering lots and demand commitments; foundries fund facilities, tools, process R&D and depreciation; both remain exposed to interface, forecast, qualification and disruption risk.
- Evidence boundary: the toy repeated-opportunity yield calculation is not a fab forecast; public TSMC data do not disclose universal per-wafer pricing, contract allocation or product-level yield.
- Status: `SYSTEM.SEMICONDUCTOR.CHIP_FABRICATION_FOUNDATION` and `BUS.SEMICONDUCTOR.FAB_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Chip Design, PDK & Tape-out — how abstract circuits become manufacturable layouts and mask data through the foundry interface.

### 2026-11-05 — PDK and Tape-out Form a Versioned Design-to-Manufacturing Interface

- Continuity: continued directly from the 2026-11-04 fabrication foundation; no missing completion log.
- Question: how does abstract product intent become a foundry-accepted manufacturing database, and how do Fabless, Foundry, EDA, IP and mask partners divide ownership, payment, verification and failure risk?
- Parent concept: `SYSTEM.SEMICONDUCTOR.CHIP_DESIGN_PDK_TAPEOUT` defines a PDK as executable process models, layer definitions and verification rules, while tape-out freezes one coherent design, PDK, IP, tool and signoff baseline for manufacturing transfer.
- Object map: specification, RTL or schematic, gate-level netlist, physical layout, GDS / OASIS, accepted tape-out data, mask data, first silicon and qualified production are distinct states.
- Verification boundary: DRC checks encoded geometric rules; LVS checks extracted devices and connectivity against a reference; functional, timing, power, integrity and reliability checks answer different questions. No single clean report proves the complete product.
- Deep case: Google, SkyWater and Efabless paired the open SKY130 PDK with OpenLane, a standardized harness, submission gates and sponsored MPW manufacturing rather than assuming a downloadable file alone could create silicon.
- Program scale: SkyWater reported more than 1,700 PDK downloads in the first two weeks of the November 2020 program; each shuttle offered 40 slots. Google reported in 2023 that 360 designs had been manufactured from more than 600 submissions across 19 countries.
- Cost mechanism: MPW shares fixed mask and shuttle preparation across designs; the 1/40 or 2.5% calculation is a toy equal-slot allocation, not an actual price or mask-cost estimate.
- Production boundary: the open SKY130 repository explicitly labeled the PDK an experimental preview and not production-ready at the cited stage, even though the underlying commercial process had manufactured many designs.
- Money and responsibility: customers fund design, EDA, IP, masks / NRE, engineering lots and production; foundries fund process R&D, facilities, tools and manufacturing control. Design bugs, process nonconformance and ambiguous yield loss require artifact history, failure analysis and contract-specific boundaries.
- Power: foundry leverage comes from scarce process, accurate PDK, certified EDA / IP ecosystem, manufacturing performance and switching time; customer leverage comes from volume, engineering capability, predictable demand and credible alternatives.
- Evidence boundary: cumulative program figures are not a single-run acceptance rate or causal estimate; commercial mask rights, yield guarantees, respin remedies and liability terms are usually confidential and contract-specific.
- Status: `SYSTEM.SEMICONDUCTOR.CHIP_DESIGN_PDK_TAPEOUT` and `BUS.SEMICONDUCTOR.FOUNDRY_CUSTOMER_INTERFACE` at L1 candidate; Teach-back pending.
- Next: Lithography, Resolution & Overlay — how signed-off geometry becomes aligned resist patterns and which actors control the equipment, masks, materials and process integration.

### 2026-11-06 — Lithography Must Resolve One Layer and Align It to Every Layer Below

- Continuity: continued directly from the 2026-11-05 PDK and tape-out interface; no missing completion log.
- Question: how does signed-off geometry become an aligned resist pattern, and which equipment, mask, material, metrology, foundry and customer interfaces control the result?
- Parent concept: `SYSTEM.SEMICONDUCTOR.LITHOGRAPHY_RESOLUTION_OVERLAY` separates resolution, printed critical dimension, overlay, edge placement, process window, throughput and final yield.
- Minimum unit: one via can be sharply resolved yet electrically open when its printed hole is too small or misaligned to the underlying metal landing pad.
- Optical mechanism: Rayleigh's simplified relationship `CD = k1 × wavelength / NA` explains why shorter wavelength and larger numerical aperture help, while process, mask, resist and stochastic limits prevent the equation from being a product-CD forecast.
- Toy comparison: with equal k1, `193 / 1.35 ≈ 143 nm` for immersion DUV and `13.5 / 0.33 ≈ 41 nm` for EUV, making the EUV optical scale about 29% of the DUV value; multiple patterning and full process integration remain outside this calculation.
- Deep case: ASML's EUV path moved from work begun in 1997 to a 2010 pre-production system, a 2013 production system, 250 W source power associated with roughly 125 wafers per hour and the first EUV-enabled commercial products in 2019.
- System mechanism: tin-plasma source, vacuum, multilayer mirrors, reflective reticle, resist, synchronized stages, alignment sensors and metrology had to mature together; first light was not high-volume manufacturing.
- Coexistence: ASML reported 48 EUV and 279 DUV systems sold in 2025. Unit counts are not exposure share or wafer capacity, but they show that EUV did not eliminate DUV across all layers.
- Money and control: foundries and IDMs purchase tools, masks, materials, services and process learning; fabless customers fund design, NRE and wafer orders; ASML integrates EUV systems while ZEISS, TRUMPF and other specialized suppliers control critical interfaces.
- Power: bargaining power comes from scarce integrated capability, qualification and switching delay. The active bottleneck can move among scanners, optics, sources, masks, resists, metrology and foundry learning.
- Evidence boundary: throughput and overlay figures are company specifications or milestones under stated conditions; ASML's history does not allocate complete causal credit or disclose customer layer economics and yield.
- Status: `SYSTEM.SEMICONDUCTOR.LITHOGRAPHY_RESOLUTION_OVERLAY` and `BUS.SEMICONDUCTOR.LITHOGRAPHY_ECOSYSTEM` at L1 candidate; Teach-back pending.
- Next: Process Node, Defect & Yield Learning — what a node name does and does not describe, and how variation becomes good-die economics.

### 2026-11-07 — A Node Name Becomes Commercial Only Through Good-Die Learning

- Continuity: continued directly from the 2026-11-06 lithography lesson; no missing completion log.
- Question: what does a process-node name describe, how do local defects and parameter variation become good die, and who pays for and controls early yield learning?
- Parent concept: `SYSTEM.SEMICONDUCTOR.PROCESS_NODE_DEFECT_YIELD` defines a node as a qualified process generation across devices, interconnects, materials, design rules, libraries, PDK and manufacturing conditions rather than one literal dimension.
- Minimum unit: one local particle can be harmless in a scribe lane, repairable in redundant memory or fatal on a critical clock or power path; location, size, structure, design sensitivity and repair determine its product effect.
- Yield boundary: gross dies, wafer yield, functional die yield, parametric yield, bin mix and final known-good die use different denominators and cannot be exchanged.
- Toy model: a 300mm wafer contains roughly 640 gross 100mm² positions or 91 gross 600mm² positions under a stated geometric approximation. At 0.10 defects/cm², independent Poisson yields are about 90.5% and 54.9%; at 0.05 they are about 95.1% and 74.1%.
- Model boundary: random independent defects, edge geometry, repair, clustering, pattern sensitivity, parametric variation, test coverage and package yield make the calculation a mechanism model, not foundry product data.
- Deep case: Intel disclosed that 10nm volume production moved from the second half of 2018 into 2019, reached full production in 2019, and still yielded below mature 14nm in 2020 while increased 10nm mix raised unit cost and pressured gross margin.
- State distinction: process definition, working sample, first shipment, volume production and mature economics are separate states; a node name does not reveal product maturity, yield, cost, capacity or cycle time.
- Learning mechanism: connect inspection, metrology and electrical failures to wafer position, tool chamber, recipe, material lot, reticle and design pattern; test root-cause candidates through controlled changes; then update process control and design rules.
- Money and control: foundries fund fabs, process experiments, scrap and much of ramp; customers fund design, IP, masks / NRE, engineering wafers and orders while bearing respin and launch-window risk; equipment and material suppliers co-debug qualified interfaces.
- Evidence boundary: Intel filings identify timing, relative yield and economic direction but not product-level yield percentages, defect density, confidential process details or one complete root cause. Customer-specific prices, guarantees, data rights and remedies remain private.
- Status: `SYSTEM.SEMICONDUCTOR.PROCESS_NODE_DEFECT_YIELD` and `BUS.SEMICONDUCTOR.YIELD_LEARNING_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Wafer Sort, Binning & Known Good Die — how test converts an uncertain die population into accepted units and sellable grades before expensive packaging.

### 2026-11-08 — Test Creates a Conditional Quality Gate, Not Absolute Knowledge

- Continuity: continued directly from the 2026-11-07 node, defect and yield lesson; no missing completion log.
- Question: how do wafer probe and production test classify an uncertain die population, and who pays for test time, false rejects and escapes?
- Parent concept: `SYSTEM.SEMICONDUCTOR.WAFER_SORT_BINNING_KGD` defines wafer sort as a bounded decision process using a test program, conditions and limits; known-good die means accepted under that evidence, not universally reliable.
- Object map: wafer acceptance / parametric test, wafer sort, binning, known-good die and final test answer different questions at different physical stages.
- Decision matrix: true accept, true reject, false reject and test escape separate actual specification status from the test decision.
- Toy model: among 10,000 hypothetical die with 500 target bad units, 98% detection and 0.5% false reject leaves about 10 escapes among 9,462.5 accepted units, or roughly 1,057 DPPM. Raising detection to 99.8% while false rejects rise to 1.5% lowers the model to about 107 DPPM but sacrifices about 95 additional good die.
- Deep case: NVIDIA recorded a USD 196.0 million FY2009 Q2 charge related to previously shipped notebook MCP / GPU field failures; quarterly revenue was USD 892.7 million, making the charge about 22% of revenue as a scale comparison, not a profit ratio.
- Evidence boundary: NVIDIA said it had not determined one root cause; testing suggested a weak die-package material set, system thermal design and use patterns as contributors. Public evidence cannot prove that a specific wafer-sort pattern would have prevented the failures.
- Outcome scale: cumulative net charges reached USD 475.9 million by January 2012, showing how package, system, warranty, repair and customer value can accumulate behind one late escape.
- Money and control: fabless teams define specifications, DFT and test programs; foundries, IDMs or OSATs run probe and final test; ATE, probe-card, socket and handler vendors provide equipment and contact interfaces. Private contracts allocate test charges, retest, scrap, guarantees and remedies.
- Multi-die implication: the SEMI heterogeneous-integration roadmap notes that an escaped bad chiplet can put the package and other good chiplets at risk; KGD therefore becomes more valuable as downstream assembly value increases.
- Status: `SYSTEM.SEMICONDUCTOR.WAFER_SORT_BINNING_KGD` and `BUS.SEMICONDUCTOR.TEST_BINNING_ECONOMICS` at L1 candidate; Teach-back pending.
- Next: Advanced Packaging, Chiplets & Compound Yield — how multiple accepted components, interposers, substrates, bonding and HBM become one package and create new yield and bargaining constraints.
