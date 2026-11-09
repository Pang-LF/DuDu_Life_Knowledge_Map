# Case — AMD EPYC Rome Chiplet Architecture, 2018–2019

## Identity

- Case ID: `CASE.AMD.EPYC_ROME.CHIPLET_ARCHITECTURE.2018_2019`
- Primary concept: Advanced Packaging, Chiplets and Compound Yield
- Industry application: Advanced Packaging and Chiplet Economics
- Status: studied
- First studied: 2026-11-09

## Puzzle

Why would a high-performance server processor deliberately separate CPU cores from memory and I/O, accepting new package links and NUMA complexity instead of integrating everything on one leading-edge die?

## Narrative

- **Before:** Monolithic integration historically benefited from process scaling and short on-die communication. AMD's first-generation EPYC 7001 reached up to 32 Zen cores through a multi-die package, but the next 7nm generation still had to decide which functions deserved advanced process technology.
- **Pressure Builds:** CPU cores and cache benefited strongly from advanced density and efficiency, while large I/O and physical interfaces did not scale with the same value. A larger leading-edge monolithic die would expose more expensive silicon to whole-die defect loss.
- **Turning Point:** AMD disclosed Rome in 2018 as a modular design using 7nm Zen 2 compute chiplets and a mature 14nm I/O portion connected through enhanced Infinity Fabric.
- **Cascade:** The product now required enough matching CCDs, one usable central I/O die, package placement and links, power delivery, thermal paths, cache coherence and final test. Core-to-memory distance and NUMA behavior also became system concerns.
- **Decision:** A central I/O die standardized memory and PCIe while reusable CCDs concentrated advanced-node area on cores and cache. Different CCD counts could create different products, but the I/O die and package became shared dependencies.
- **Outcome:** AMD launched the second-generation EPYC 7002 family in August 2019 with up to 64 Zen 2 cores. AMD technical guidance describes one I/O die and up to eight CCDs, each containing up to eight cores.
- **Aftermath:** AMD extended chiplet design across later EPYC and Ryzen families. Packaging, die-to-die interfaces, test and product architecture became co-designed rather than downstream afterthoughts.

## Mechanism

1. Functional partitioning creates smaller reusable compute die and a separate I/O die.
2. Smaller die can be tested and harvested independently, preventing one local failure from discarding all other logic area.
3. Different functions can use processes suited to their scaling and cost characteristics.
4. Known-good components must still be matched, placed, connected, powered, cooled and tested as one package.
5. Component, assembly and interface yields combine into final good-package output; a shortfall in any one input can become the bottleneck.

## Quantitative Reality

- EPYC 7001: up to 32 Zen cores according to AMD's FY2019 Form 10-K.
- EPYC 7002 Rome: up to 64 Zen 2 cores; launched in August 2019.
- Package architecture: one I/O die and up to eight CCDs.
- CCD structure: up to two four-core CCXs, or up to eight cores per CCD.
- The doubled maximum core count establishes shipped product scale, not a causal estimate of yield, cost or performance from chiplets alone.

## Evidence Boundary

- AMD described the 2018 architecture as 7nm compute plus mature 14nm I/O and more cost-effective than traditional monolithic manufacture.
- Public sources do not disclose Rome's product-level CCD yield, I/O-die yield, package yield, die cost, package cost, bin-matching loss or a functionally identical monolithic counterfactual.
- Performance and TCO claims include architecture, process, core count, memory, I/O, software and workload effects; they cannot isolate chiplet yield as the sole cause.
- The transparent equal-area and compound-yield calculations in the lesson are teaching models, not AMD production data.

## Knowledge Attribution

- Mastery Core: `SYSTEM.SEMICONDUCTOR.ADVANCED_PACKAGING_CHIPLETS_COMPOUND_YIELD`
- Industry Application: `BUS.SEMICONDUCTOR.ADVANCED_PACKAGING_ECONOMICS`
- Review / Transfer: `SYSTEM.SEMICONDUCTOR.WAFER_SORT_BINNING_KGD`, `SYSTEM.SEMICONDUCTOR.PROCESS_NODE_DEFECT_YIELD`, `META.SYSTEMS.INTERDEPENDENCE`, `META.SYSTEMS.BOTTLENECK`
- Knowledge Expansion: NUMA, cache coherence, Infinity Fabric and server product segmentation
- Connection Preview: HBM, thermal and power delivery, UCIe, package supply bottlenecks

## Sources

- https://ir.amd.com/news-events/press-releases/detail/860/amd-takes-high-performance-datacenter-computing-to-the-next-horizon
- https://ir.amd.com/news-events/press-releases/detail/904/2nd-gen-amd-epyc-processors-set-new-standard-for-the-modern-datacenter-with-record-breaking-performance-and-significant-tco-savings
- https://www.amd.com/content/dam/amd/en/documents/epyc-technical-docs/tuning-guides/amd-epyc-7002-tg-hpc-56827.pdf
- https://ir.amd.com/financial-information/sec-filings/content/0000002488-20-000008/0000002488-20-000008.pdf
- https://ieeexplore.ieee.org/document/9499852
- https://old.hotchips.org/hc31/HC31_1.1_AMD_ZEN2.pdf
