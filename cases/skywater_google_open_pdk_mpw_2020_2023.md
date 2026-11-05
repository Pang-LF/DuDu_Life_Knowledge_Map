# Google, SkyWater and Efabless Open PDK / MPW Program, 2020-2023

- Case ID: `CASE.SKYWATER.GOOGLE.OPEN_PDK_MPW.2020_2023`
- Domain: SYSTEM / Compute Systems and BUSINESS / Semiconductor Industry
- Primary concept: Chip Design, PDK and Tape-out
- Industry application: Fabless-Foundry Design and Responsibility Interface
- Status: Studied; Teach-back pending

## Puzzle

Why was publishing open chip logic insufficient to produce reproducible silicon, and why did an open PDK still require tools, submission gates, a standardized harness, shared masks and a real foundry?

## Minimum Unit And System Outcome

The minimum unit is one design artifact moving from RTL through a foundry-specific physical implementation and verification baseline into a controlled GDS or OASIS submission. The system outcome is a repeatable path through which many independent designers can share one manufacturing shuttle and receive testable silicon.

## Narrative Structure

- Before: Open instruction sets and RTL projects could share design intent, while commercial PDKs, certified EDA flows, IP and fabrication interfaces remained restricted and costly.
- Pressure Builds: A downloadable rule set alone could not create manufacturable data; designers also needed process-characterized libraries, RTL-to-GDS tools, a standard chip frame, version control, integrity and license checks, physical verification and a foundry willing to accept the output.
- Turning Point: In 2020 Google and SkyWater released the foundry-supported open SKY130 PDK, while Google, SkyWater and Efabless paired it with OpenLane and sponsored open-source multi-project wafer shuttles.
- Cascade: Designers used a common process interface and harness; Efabless checked license, data integrity and DRC, aggregated accepted projects into 40 shuttle slots, and passed a coherent database to SkyWater for manufacturing and later bring-up.
- Decision: Participants exchanged design secrecy and unrestricted process choice for open licensing, standardized submission and sponsored access to a mature 130 nm process. The PDK repository preserved an experimental-preview boundary rather than claiming production readiness.
- Outcome: By November 2023 Google reported eight SKY130 shuttles plus an initial GF180MCU run, 360 manufactured designs from more than 600 submissions across 19 countries, and hundreds of community bugs and pull requests that improved the interface.
- Aftermath: SKY130 and GF180MCU open PDK governance moved toward the Linux Foundation's CHIPS Alliance; universities and NIST adopted the interface for education and research, while commercial advanced-node design remained bounded by different cost, IP, verification and confidentiality conditions.

## Integrated Mechanism

A PDK turns process capability into models, layers and executable verification rules. An RTL-to-GDS flow applies those rules while converting functional intent into a physical database. Submission and signoff gates preserve a coherent version baseline. MPW aggregation shares fixed mask and shuttle preparation across multiple designs, while the foundry retains control of the actual process and manufacturing acceptance.

## Numbers That Change The Interpretation

- SkyWater reported more than 1,700 PDK downloads within two weeks of the November 2020 program announcement; downloads measure access interest, not manufacturable designs or working silicon.
- Each sponsored shuttle was structured around 40 design slots. In a toy equal-slot model, one unit of shared fixed mask and preparation cost becomes 1/40, or 2.5%, per design; actual areas, sponsorship, packaging, testing and prices differ.
- Google reported in 2023 that 360 designs had been manufactured from more than 600 submissions across 19 countries. The simple 60% ratio is cumulative and is not a single-run acceptance rate or causal estimate.

## Comparison And Evidence Boundary

The underlying commercial SKY130 process had fabricated many designs, but the released open PDK was explicitly labeled experimental preview and not intended for production use at the cited stage. The case proves that a specific mature-node interface and sponsored shuttle can reduce experimental access barriers; it does not prove that open PDKs eliminate advanced-node mask, IP, EDA, verification or manufacturing costs, nor that DRC-clean data guarantee first-pass functional silicon.

## Three-Ring Attribution

- Mastery Core: `SYSTEM.SEMICONDUCTOR.CHIP_DESIGN_PDK_TAPEOUT`
- Industry Application: `BUS.SEMICONDUCTOR.FOUNDRY_CUSTOMER_INTERFACE`
- Knowledge Expansion: Google / SkyWater / Efabless open silicon program, 2020-2023
- Connection Preview: Lithography / Overlay, DFM / Yield, IP Economics, Export Control

## Sources

- https://opensource.googleblog.com/2023/11/open-source-pdks-joining-linux-foundation-chips-alliance.html
- https://www.skywatertechnology.com/google-partners-with-skywater-and-efabless-to-enable-open-source-manufacturing-of-custom-asics/
- https://github.com/google/skywater-pdk
- https://openlane2.readthedocs.io/en/latest/getting_started/newcomers/index.html
- https://www.tsmc.com/english/dedicatedFoundry/oip
