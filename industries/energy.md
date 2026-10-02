# Energy Industry Apprenticeship（能源行业学徒制）

## Scope

October 2026 studies how primary energy becomes useful service through resources, conversion, networks, markets, institutions, and end-use equipment. The apprenticeship tracks physical flow, money flow, control rights, and the metrics appropriate to each layer.

## Progress

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
