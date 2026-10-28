# Great Britain Reliability Standard and First Capacity Market Auction (2013-2018)

## Case ID

`CASE.GB.RELIABILITY_STANDARD.CAPACITY_MARKET.2013_2018`

## Question

How did Great Britain turn an uncertain shortage distribution into a reliability target and then into customer-funded capacity procurement?

## Before

Great Britain's electricity market paid generators mainly for energy and balancing actions. As older coal and nuclear stations approached closure and renewable output grew, the government worried that rare scarcity hours might not provide stable enough revenue for sufficient dependable capacity to remain or enter.

## Pressure Builds

The policy problem was not simply to maximize installed MW. Too little dependable capacity could expose customers to rare but costly shortages; too much would charge customers every year for capability that might almost never be used. A reliability standard therefore needed a common risk metric and an explicit economic trade-off.

## Turning Point

The Department of Energy and Climate Change's 2013 methodology framed the optimum as the point where the annualized net Cost of New Entry for another dependable kW equals the expected customer blackout cost that kW avoids. Blackout cost was modeled as Expected Energy Unserved multiplied by Value of Lost Load. Under the central assumptions, the equilibrium standard was 2.78 hours LOLE per year; policy rounded and adopted 3 hours.

## Cascade

LOLE counted the probability-weighted duration of modeled supply shortfalls but not their magnitude. The same 3 expected hours could represent three shallow shortfalls or three system-wide deficits. This made LOLE operationally convenient for a target while leaving EUE, event shape, location, and customer consequences implicit.

The Electricity Capacity Regulations 2014 set the reliability standard at 3 hours of expected loss of load per capacity year. The regulation also defined loss of load to include specified emergency actions, while excluding events caused solely by transmission or distribution faults. The boundary therefore described system adequacy, not every possible customer interruption.

## Decision

Government translated the standard into a de-rated capacity target and created the Capacity Market. Capacity providers bid for agreements that paid them to remain available in a future delivery year; customers ultimately funded the payments through load-serving arrangements, while providers retained separate energy-market revenues and accepted availability obligations.

## Outcome

The first T-4 auction began in December 2014 for delivery in 2018/19. The target was 48.6 GW. Ofgem reported that 65.7 GW prequalified, 49.3 GW was procured, and the auction cleared at GBP 19.40/kW-year. Multiplying procured de-rated capacity by the clearing price gives about GBP 956 million of simple gross annual agreement value before adjustments, not the total cost of electricity or a direct household bill figure. More than 2.6 GW of new generation won agreements.

## Aftermath

The 3-hour LOLE standard remained in the 2026 point-in-time legislation and in the government's 2025 security-of-supply report. Later government-commissioned work emphasized LOLE's blind spot: it records expected shortfall duration but not shortfall size or the distribution of events. A changing portfolio can therefore preserve the same LOLE while changing EUE and tail severity.

## Key Numbers

- Central 2013 economic result: 2.78 hours LOLE per year.
- Adopted legal standard: 3 hours expected loss of load per capacity year.
- First T-4 target: 48.6 GW of de-rated capacity.
- Capacity prequalified: 65.7 GW, about 17 GW above target.
- Capacity procured: 49.3 GW.
- Clearing price: GBP 19.40/kW-year.
- Simple gross annual agreement value: about GBP 956 million.
- New generating capacity winning agreements: more than 2.6 GW.

## Evidence Boundary

- Three hours LOLE does not mean customers will be disconnected for three hours in a given year. It is a probability-weighted long-run expectation for modeled adequacy states and specified emergency actions.
- LOLE does not measure shortage depth. EUE does, but EUE alone does not reveal event duration, frequency, location, or customer distribution.
- The 2.78-hour central result depended on the selected VoLL, net CONE, model, and price-year assumptions; 3 hours is a policy standard, not a physical constant.
- GBP 956 million is a multiplication of procured de-rated kW and clearing price. It excludes adjustments and is neither total system cost nor a household-level charge.
- The auction outcome does not by itself prove the Capacity Market caused a particular reliability outcome; plant decisions, interconnection, demand, weather, market rules, and operator actions also matter.

## Sources

- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/267613/Annex_C_-_reliability_standard_methodology.pdf
- https://www.legislation.gov.uk/uksi/2014/2043/regulation/6/2026-07-17
- https://www.gov.uk/government/news/first-capacity-market-auction-begins-today
- https://www.ofgem.gov.uk/sites/default/files/docs/2015/06/annual_report_on_the_operation_of_the_cm_final_0.pdf
- https://assets.publishing.service.gov.uk/media/65e3a3323f694514a3035fbe/5-exploring-reliability-standard-metrics-in-net-zero-transition.pdf
- https://www.gov.uk/government/publications/statutory-security-of-supply-report-2025/statutory-security-of-supply-report-2025

## Connections

- `SYSTEM.ELECTRICITY.RELIABILITY_METRICS_LOLE_EUE`
- `SYSTEM.ELECTRICITY.RESOURCE_ADEQUACY_CAPACITY`
- `SYSTEM.ELECTRICITY.CAPACITY_ACCREDITATION_ELCC`
- `BUS.ENERGY.RELIABILITY_STANDARD_ECONOMICS`
- `BUS.ENERGY.CAPACITY_ADEQUACY_ECONOMICS`
- `BUS.ENERGY.CAPACITY_CREDITING_ECONOMICS`
- `META.PROBABILITY.EXPECTED_VALUE`
- `META.SYSTEMS.NONLINEARITY`
