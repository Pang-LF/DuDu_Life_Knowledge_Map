# Case — AMD + SK hynix Fiji / Radeon R9 Fury X HBM1, 2009–2015

## Identity

- Case ID: `CASE.AMD_SKHYNIX.FIJI_HBM1.2009_2015`
- Primary concept: HBM, TSV and Memory Bandwidth
- Industry application: HBM Supply Economics
- Status: studied
- First studied: 2026-11-10

## Puzzle

Why would AMD and SK hynix replace mature board-mounted GDDR with stacked memory, through-silicon vias and a large interposer, accepting a 4 GB capacity boundary and a much more coupled package?

## Narrative

- **Before:** GDDR5 packages around a GPU offered mature manufacturing, flexible capacity and high per-pin speed, but every bandwidth increase required more high-speed I/O, pins, PCB traces, area and power.
- **Pressure Builds:** More parallel GPU units increased simultaneous data demand. Raising per-pin speed worsened signal and power challenges, while widening a board-level bus consumed package and PCB resources.
- **Turning Point:** SK hynix began HBM work in 2009 and collaborated with AMD. In 2015, AMD launched the Radeon R9 Fury family as the first commercial GPU family powered by HBM, placing Fiji and four HBM stacks on a silicon interposer.
- **Cascade:** DRAM die had to be thinned, connected through TSVs and micro-bumps, tested as stacks and integrated through a high-density interposer. GPU, all memory stacks, package power, thermal paths and thousands of links had to qualify together; 4 GB capacity remained a visible tradeoff.
- **Decision:** AMD accepted early 2.5D-package and HBM integration risk to obtain a 4096-bit interface, compact board footprint and high aggregate bandwidth rather than relying only on faster board-level pins.
- **Outcome:** Radeon R9 Fury X shipped in June 2015 with 4 GB HBM and up to 512 GB/s. AMD compared it with the R9 290X's 512-bit GDDR5 and 320 GB/s, reporting 60% more bandwidth, 94% less PCB memory area and more than three times bandwidth per watt under its stated comparison.
- **Aftermath:** Early HBM adoption remained limited while the ecosystem matured. Later HPC and AI accelerators made HBM capacity and bandwidth central system parameters, while stack yield, thermal design, qualification and advanced-package supply became delivery constraints.

## Mechanism

1. Multiple thinned DRAM die increase vertical capacity without surrounding the GPU with more board packages.
2. TSVs and die bonds carry signals vertically through the stack; they are interconnects, not memory cells.
3. A silicon interposer places HBM beside the GPU and provides thousands of short package-level traces.
4. Aggregate bandwidth comes from I/O width times per-pin transfer rate, while effective application bandwidth depends on channels, banks, access patterns, cache and controller scheduling.
5. The architecture saves board area and can improve data-movement efficiency, but adds stack assembly, test, interposer, thermal and compound-yield obligations.

## Quantitative Reality

- Fury X HBM capacity: 4 GB.
- Total memory interface: 4096 bit.
- Peak memory bandwidth: up to 512 GB/s.
- AMD comparison: R9 290X at 320 GB/s versus HBM at 512 GB/s, a 60% increase.
- AMD company claims: 94% less PCB surface area for memory and more than three times bandwidth per watt versus its stated GDDR5 comparison.
- Modern scale reference: NVIDIA lists H100 SXM at 80 GB / 3.35 TB/s and H200 at 141 GB / 4.8 TB/s; these are later products and not controlled performance comparisons with Fury X.

## Evidence Boundary

- AMD sources establish launch timing, capacity, interface width, peak bandwidth and the company's stated GDDR5 comparison; they do not disclose product-level HBM-stack yield, interposer yield, package yield, unit cost or confidential supply terms.
- AMD's PCB-area and bandwidth-per-watt figures are vendor claims under its comparison, not independent causal estimates of whole-board performance or efficiency.
- SK hynix retrospective sources establish development chronology and describe early market immaturity; retrospective narrative may simplify internal decisions and competitive context.
- Cross-generation HBM capacity and bandwidth show scale, not apples-to-apples price, performance, workload or energy efficiency.

## Knowledge Attribution

- Mastery Core: `SYSTEM.SEMICONDUCTOR.HBM_TSV_MEMORY_BANDWIDTH`
- Industry Application: `BUS.SEMICONDUCTOR.HBM_SUPPLY_ECONOMICS`
- Review / Transfer: `SYSTEM.SEMICONDUCTOR.ADVANCED_PACKAGING_CHIPLETS_COMPOUND_YIELD`, `BUS.SEMICONDUCTOR.ADVANCED_PACKAGING_ECONOMICS`, `SYSTEM.SEMICONDUCTOR.WAFER_SORT_BINNING_KGD`, `META.SYSTEMS.INTERDEPENDENCE`, `META.SYSTEMS.BOTTLENECK`
- Knowledge Expansion: DRAM bank organization, GPU memory controllers, arithmetic intensity and effective bandwidth
- Connection Preview: GPU parallelism, roofline model, thermal and power delivery, AI infrastructure

## Sources

- https://ir.amd.com/news-events/press-releases/detail/619/amd-ushers-in-a-new-era-of-pc-gaming-with-radeontm-r9-and-r7-300-series-graphics-line-up-including-worlds-first-graphics-family-with-revolutionary-hbm-technology
- https://www.amd.com/en/support/downloads/drivers.html/graphics/radeon-r9-r7-r5/radeon-r9-fury-series/amd-radeon-r9-fury-x.html
- https://ir.amd.com/news-events/press-releases/detail/629/amd-showcases-graphics-energy-efficient-computing-and-die-stacking-innovation-at-prestigious-hot-chips-27-conference
- https://news.skhynix.com/en/the-story-of-sk-hynixs-hbm-development/
- https://news.skhynix.com/en/one-team-spirit-sk-hynix-journey-to-hbm-leadership/
- https://news.skhynix.com/en/creating-new-values-in-dram-using-through-silicon-via-technology-for-continued-scaling-in-memory-system-performance-and-capacity/
- https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html
