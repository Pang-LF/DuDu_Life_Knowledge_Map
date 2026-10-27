# PJM Capacity Accreditation, Winter Storm Elliott, and All-Resource ELCC (2020-2026)

## Case ID

`CASE.PJM.ELCC_ACCREDITATION.2020_2026`

## Question

Why can the same 100 MW resource receive very different accredited capacity when the asset itself appears unchanged?

## Before

PJM historically combined peak-load and reserve-margin planning with resource-specific capacity rules. Thermal-resource UCAP leaned heavily on average forced-outage performance, while wind, solar, and storage moved toward ELCC after the stakeholder process endorsed the method in September 2020.

This approach was practical when a summer peak and broadly dispatchable resources approximated the dominant risk, but it could dilute scarcity-hour common failures inside many normal hours.

## Pressure Builds

The resource mix and risk shape changed. Variable resources shared weather patterns, storage had duration and charging limits, and thermal units could share fuel and cold-weather failures. Average annual availability did not necessarily describe availability during a small number of system-defining hours.

## Turning Point

Winter Storm Elliott struck PJM from 23-25 December 2022. PJM expected about 155,700 MW of generation to be available on 24 December, but forced outages approached 47,000 MW. Ninety-two percent of outages supplied no more than one hour of notice, gas generators accounted for 70% of outage capacity on 24 December, and peak-load forecasts for 23-24 December were about 8% below actual peaks.

## Cascade

Demand reached roughly 135,000 MW on the evening of 23 December while outages were about 34,500 MW. By the next morning outages approached 46,000 MW. Including start failures, derates, and the need to replenish pumped storage, PJM estimated that about 57,000 MW was missing relative to need.

PJM avoided rotating outages through emergency procedures, demand response, imports, and conservation, but the event revealed how correlated scarcity-hour performance could differ from average performance.

## Decision

PJM proposed all-hours, annual risk modeling and marginal ELCC accreditation for all resources. The model compares the EUE reduction from a resource-class increment with the reduction from an equally sized perfectly reliable resource. FERC accepted the principal reforms in January 2024.

The reform separates two controls: accreditation limits how much UCAP can be sold before the event, while Capacity Performance penalties settle failures after a committed resource does not perform.

## Outcome

PJM's final 2026/27 3IA class ratings included fixed solar at 10%, tracking solar at 13%, onshore wind at 38%, four-hour storage at 54%, ten-hour storage at 73%, gas combined cycle at 77%, gas combustion turbines at 63%, coal at 85%, nuclear at 95%, and demand resources at 72%.

The ratings are conditional portfolio-risk outputs. They are not technology-wide social-value scores, annual energy forecasts, or immutable plant properties.

## Aftermath

PJM's preliminary 2027/28-2035/36 ratings show several marginal class values declining as the projected portfolio changes, including four-hour storage from 52% to 23% and onshore wind from 41% to 19%. PJM explicitly labels these values preliminary, indicative, and non-binding.

The method also creates governance questions. Weather samples, outage modeling, resource classification, projected entry and exit, transmission representation, and model transparency can materially alter saleable UCAP and capacity revenue.

## Key Numbers

- Expected generation available on 24 December 2022: about 155,700 MW.
- Forced outages during Elliott: almost 47,000 MW.
- Outages with no more than one hour notice: 92%.
- Gas share of outage capacity on 24 December: 70%.
- Peak-load forecast error on 23-24 December: about 8% below actual.
- Estimated missing capability after start failures, derates, and pumped-storage replenishment: about 57,000 MW.
- PJM method illustration: 14 MWh EUE reduction from a class resource divided by 20 MWh from perfect capacity equals a 70% class rating.

## Evidence Boundary

- The old 2024/25 table, final 2026/27 table, and preliminary later-year tables are not a clean physical-performance time series; methodology, modeled portfolio, and status differ.
- Preliminary 2027/28-2035/36 values are not auction outcomes.
- Elliott supports the importance of scarcity-hour correlated performance but does not prove any single rating or model assumption is uniquely correct.
- A class rating is not necessarily a unit's final UCAP because unit-specific performance adjustments may apply.
- Avoided load shedding during Elliott does not prove the prior accreditation framework was accurate; emergency interventions helped preserve service.

## Sources

- https://www.pjm.com/-/media/DotCom/planning/res-adeq/elcc/2026-27-3ia-elcc-class-ratings.pdf
- https://www.pjm.com/-/media/DotCom/planning/res-adeq/elcc/preliminary-elcc-class-ratings.pdf
- https://www.pjm.com/-/media/DotCom/planning/res-adeq/elcc/elcc-class-ratings-for-2024-2025.pdf
- https://www.pjm.com/-/media/DotCom/committees-groups/cifp-ra/2023/20230614/20230614-item-02---pjm-cifp-stage-3-proposal.pdf
- https://www.pjm.com/-/media/DotCom/library/reports-notices/special-reports/2023/20230717-winter-storm-elliott-event-analysis-and-recommendation-report.pdf
- https://pjm.com/directory/etariff/FercOrders/7145/20240130-er24-99-000.pdf
- https://www.ferc.gov/news-events/news/commissioner-christies-concurrence-pjms-capacity-market-reform-filing-docket-no

## Connections

- `SYSTEM.ELECTRICITY.CAPACITY_ACCREDITATION_ELCC`
- `SYSTEM.ELECTRICITY.RESOURCE_ADEQUACY_CAPACITY`
- `SYSTEM.ELECTRICITY.FLEXIBILITY_RAMPING_STORAGE`
- `SYSTEM.ENERGY.CAPACITY_FACTOR_UTILIZATION`
- `BUS.ENERGY.CAPACITY_CREDITING_ECONOMICS`
- `BUS.ENERGY.CAPACITY_ADEQUACY_ECONOMICS`
- `META.PROBABILITY.CONDITIONAL`
- `META.PROBABILITY.EXPECTED_VALUE`
- `META.SYSTEMS.INTERDEPENDENCE`
- `META.SYSTEMS.NONLINEARITY`
