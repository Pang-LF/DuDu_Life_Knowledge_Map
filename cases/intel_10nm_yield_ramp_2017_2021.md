# Intel 10nm Delay, Production Ramp and Manufacturing Economics, 2017-2021

- Case ID: `CASE.INTEL.10NM.YIELD_RAMP.2017_2021`
- Domain: SYSTEM / Compute Systems and BUSINESS / Semiconductor Industry
- Primary concept: Process Node, Defect and Yield Learning
- Industry application: Yield Learning Economics
- Status: Studied; Teach-back pending

## Puzzle

Why could Intel ship 10nm products and enter full production while the node still had lower yield and worse unit-cost effects than mature 14nm?

## Minimum Unit And System Outcome

The minimum unit is one patterned die whose functional and parametric results depend on all previous process steps. The system outcome is not a working sample or first shipment but predictable good-die count, bin mix, cycle time, volume and cost across repeated lots.

## Narrative Structure

- Before: Intel's node cadence linked denser process technology to product, fab and customer roadmaps, and 10nm pursued a more aggressive density target than 14nm.
- Pressure Builds: Denser structures and tighter integrated process windows increased the conditions that transistor, interconnect, materials, design rules, tools and metrology had to satisfy together.
- Turning Point: Intel disclosed in its 2018 Form 10-K that 10nm volume production moved from the second half of 2018 into 2019, despite progress in yield improvement.
- Cascade: Lower good-die output consumes wafer, tool and test capacity, raises unit cost, extends mature-node use and can move product and customer windows; Intel extended 14nm use while continuing the 10nm ramp.
- Decision: Intel continued delivering products on mature 14nm while allocating engineering and production resources to improve 10nm and reach client volume.
- Outcome: Intel reported that 10nm entered full production in 2019 and that production, yield and volume improved; Ice Lake systems reached OEM shelves.
- Aftermath: Intel's 2020 Form 10-K said 10nm yield remained below mature 14nm and the higher 10nm mix negatively affected unit cost and gross margin. The 2021 node-naming change further separated generation labels from literal dimensions.

## Integrated Mechanism

A process node defines a process family and design interface. Inspection, metrology and electrical test reveal defect and parameter distributions; correlations with tools, chambers, materials, masks, recipes and designs generate root-cause candidates; controlled changes test them; validated improvements update process control and design rules. The commercial result appears as more in-spec good die and better bin mix per unit wafer, time and capital.

## Numbers That Change The Interpretation

- In a transparent 300mm-wafer teaching approximation, a 100mm² die has about 640 gross positions while a 600mm² die has about 91 before scribe and other exclusions.
- With a toy independent Poisson fatal-defect density of 0.10 defects/cm², corresponding yields are about 90.5% and 54.9%; halving density to 0.05 raises them to about 95.1% and 74.1%.
- At an assumed USD 10,000 processed-wafer cost and 100 gross die, improving yield from 50% to 80% lowers the isolated wafer-cost component per good die from USD 200 to USD 125, a 37.5% decline.

These are mechanism models, not Intel product data.

## Comparison And Evidence Boundary

Risk production, first shipment, volume production and mature economics are separate states. Intel filings establish timing, production, relative yield and financial direction, but do not disclose product-level yield percentages, defect density, confidential process details or enough evidence to identify one complete root cause. Vendor node names and performance claims require product, library, maturity and measurement boundaries for comparison.

## Three-Ring Attribution

- Mastery Core: `SYSTEM.SEMICONDUCTOR.PROCESS_NODE_DEFECT_YIELD`
- Industry Application: `BUS.SEMICONDUCTOR.YIELD_LEARNING_ECONOMICS`
- Knowledge Expansion: Intel 10nm production ramp and manufacturing economics, 2017-2021
- Connection Preview: Wafer Sort / Binning, Chiplets, HBM / AI Accelerators, Technology Forecasting

## Sources

- https://www.intc.com/filings-reports/all-sec-filings/content/0000050863-19-000007/a12292018q4-10kdocument.htm
- https://www.intc.com/filings-reports/all-sec-filings/content/0000050863-20-000011/a12282019q4-10kdocument.htm
- https://www.intc.com/filings-reports/annual-reports/content/0000050863-21-000010/0000050863-21-000010.pdf
- https://download.intel.com/newsroom/2021/archive/2019-10-24-news-releases-intel-reports-third-quarter-2019-financial-results.pdf
- https://www.intel.com/content/www/us/en/support/articles/000097598.html
- https://download.intel.com/newsroom/2021/client-computing/accelerating-process-innovation.pdf
