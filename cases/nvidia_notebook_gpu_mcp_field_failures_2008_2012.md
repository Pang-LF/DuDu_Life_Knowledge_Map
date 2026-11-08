# Case — NVIDIA Notebook GPU / MCP Field Failures, 2008–2012

## Identity

- Case ID: `CASE.NVIDIA.NOTEBOOK_GPU_MCP.FIELD_FAILURES.2008_2012`
- Primary concept: Wafer Sort, Binning and Known Good Die
- Industry application: Semiconductor Test and Binning Economics
- Status: studied
- First studied: 2026-11-08

## Puzzle

How could semiconductor products pass production acceptance, ship in significant quantities inside functioning notebooks and later fail in the field at higher-than-normal rates?

## Narrative

- **Before:** NVIDIA, a fabless semiconductor company, relied on third parties to manufacture, assemble and test MCP and GPU products. Previous-generation products entered multiple notebook configurations and shipped in significant quantities, meaning they had passed the then-current supply-chain acceptance gates.
- **Pressure Builds:** Notebook thermal conditions combined repeated workload, fan behavior, constrained cooling and material interfaces. A weakness that did not create immediate functional failure could accumulate under real thermal cycles and specific system designs.
- **Turning Point:** In the quarter ended July 27, 2008, NVIDIA recorded a USD 196.0 million charge for anticipated warranty, repair, return, replacement and associated costs. Quarterly revenue was USD 892.7 million, so the charge was about 22% of revenue as a scale comparison, not a profit ratio.
- **Cascade:** A risk die that passed wafer and package testing accumulated package, board, OEM, logistics and customer value. Field failure therefore created repair, mainboard replacement, user downtime, warranty, litigation and supply-chain reimbursement questions rather than only bare-die scrap.
- **Decision:** NVIDIA worked with customers on a driver that started the system fan at power-up, recommended thermal-management changes, supported repairs and replacements, and said newly manufactured and volume-shipping products used a different material set believed to be more robust.
- **Outcome:** NVIDIA reported cumulative net charges of USD 475.9 million by January 29, 2012, including cost-of-revenue and other charges connected with remediation and settlements.
- **Aftermath:** Production-test pass must be interpreted as conditional evidence under a stated program and environment. Additional package, thermal, system and field stages can expose interactions that bare-die or short production testing does not fully observe.

## Mechanism

1. Production test samples specified electrical behavior under bounded patterns, contacts, time, voltage and temperature.
2. A die-package-system interaction may remain inside those test limits while containing a latent weakness.
3. Repeated real-world thermal and usage cycles add information unavailable during short manufacturing tests.
4. Once the die is packaged and sold in a notebook, an escape binds the value and service obligations of multiple downstream actors.
5. Field evidence then feeds back into material choice, thermal policy, test coverage, guardbands and warranty estimates.

## Quantitative Reality

- Initial FY2009 Q2 charge: USD 196.0 million.
- FY2009 Q2 revenue: USD 892.7 million.
- Scale ratio: about 22%; this compares unlike accounting quantities and is used only to show magnitude.
- FY2009 Q2 GAAP gross margin: 16.8%, versus 45.3% one year earlier. NVIDIA attributed the decline to both the charge and desktop-GPU average-selling-price pressure.
- Cumulative net charge by January 29, 2012: USD 475.9 million, about 2.43 times the initial charge.

## Evidence Boundary

- NVIDIA explicitly said it had not determined one root cause at the cited stage.
- Testing suggested a weak die-package material set, system thermal-management designs and customer use patterns as contributors.
- Public filings do not disclose the complete wafer-sort or final-test program, product-level escape rate, material-lot distribution or full failure analysis.
- The case therefore cannot prove that one specific wafer-sort pattern would have prevented the failures or allocate complete causal responsibility to one supplier.

## Knowledge Attribution

- Mastery Core: `SYSTEM.SEMICONDUCTOR.WAFER_SORT_BINNING_KGD`
- Industry Application: `BUS.SEMICONDUCTOR.TEST_BINNING_ECONOMICS`
- Review / Transfer: `SYSTEM.SEMICONDUCTOR.PROCESS_NODE_DEFECT_YIELD`, `BUS.SEMICONDUCTOR.YIELD_LEARNING_ECONOMICS`, `META.PROBABILITY.CONDITIONAL`, `META.BAYESIAN.UPDATING`
- Knowledge Expansion: package reliability, thermal management and warranty accounting
- Connection Preview: advanced packaging, chiplet compound yield, HBM test, reliability engineering

## Sources

- https://www.sec.gov/Archives/edgar/data/1045810/000104581008000018/q209form8kpressrelease.htm
- https://www.sec.gov/Archives/edgar/data/1045810/000104581008000020/q209form10q.htm
- https://www.sec.gov/Archives/edgar/data/1045810/000104581008000030/q309form10q.htm
- https://www.sec.gov/Archives/edgar/data/1045810/000104581012000013/nvda-2012x10k.htm
- https://www.semi.org/sites/semi.org/files/2024-02/MRHIEP-Final-report-for-publication.pdf
