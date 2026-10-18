# Great Britain Power Disruption: Real-Time Balance, 9 August 2019

- Case ID: `CASE.GB.POWER_DISRUPTION.REAL_TIME_BALANCE.2019`
- Domain: SYSTEM / Energy Systems / Electricity
- Primary concept: Real-Time Balance
- Status: Studied; Teach-back pending

## Puzzle

How did a transmission fault cleared in about 70 milliseconds lead to frequency falling to 48.8 Hz and more than one million consumers losing power?

## Before

Great Britain's synchronous system operated near 50 Hz. National Grid ESO held about 1,000 MW of frequency response against the largest expected single loss while generator owners, network companies, and embedded generators operated assets under separate control and protection arrangements.

## Pressure Builds

At 16:52:33.490, lightning caused a fault on the Eaton Socon–Wymondley 400 kV circuit. Protection cleared it in roughly 70 milliseconds, but Hornsea One lost about 737 MW and Little Barford's steam turbine lost about 244 MW. Distributed generation protection also disconnected an estimated roughly 500 MW. Frequency response initially arrested the decline near 49.1 Hz, but Little Barford later lost two gas turbines totaling about 397 MW.

## Turning Point

The government interim report summarized the initial generation loss at about 2,100 MW against roughly 1,000 MW of response held. Frequency fell to 48.8 Hz, crossing the automatic Low Frequency Demand Disconnection threshold.

## Cascade

The final ESO report recorded about 931 MW of demand disconnected; an earlier government interim report used about 973 MW. More than one million consumers were affected. Because approximately 581 MW of embedded generation also disconnected with LFDD or related protection, the modelled net reduction in demand was only about 350 MW.

## Decision

Physical inertia and frequency-sensitive demand acted first, followed by automatic response. When these were insufficient, LFDD sacrificed part of the load to arrest a deeper decline. ESO then instructed about 1,240 MW of actions to restore frequency and rebuild response and reserve services.

## Outcome

Frequency returned to 50 Hz by about 16:57:15. Official reports use different restoration boundaries: ESO reported disconnected customers restored within about 45 minutes, while the E3C final summary stated demand was fully restored within 90 minutes. Rail, hospital, airport, water, and refinery impacts lasted longer than electrical restoration.

## Aftermath

Investigations addressed generator compliance, distributed-generation visibility and protection, LFDD, essential-service resilience, communications, and reserve, response, and inertia criteria. GSR027 created a more transparent frequency-risk and control process, explicitly balancing protection benefits against consumer cost.

## Quantitative Reality

- Nominal frequency: 50 Hz.
- Fault clearing: approximately 70 milliseconds.
- Hornsea One loss: approximately 737 MW.
- Little Barford total loss: approximately 641 MW.
- Early embedded-generation loss: approximately 500 MW.
- Total initial loss in the government interim report: approximately 2,100 MW.
- Frequency response held: approximately 1,000 MW.
- Frequency nadir and LFDD threshold: 48.8 Hz.
- Demand disconnected: approximately 931 MW final technical-report value; approximately 973 MW earlier interim value.
- Embedded generation disconnected with LFDD or related mechanisms: approximately 581 MW.
- Modelled net demand reduction from the LFDD stage: approximately 350 MW.
- Consumers affected: more than one million.
- Frequency restoration: under five minutes.

## Causal Judgment and Evidence Boundary

The official event sequence supports a causal chain from combined generation losses through a power deficit, frequency decline, automatic response, and load shedding. It does not by itself identify the unique least-cost counterfactual resource portfolio. Claims about exactly how much additional reserve, inertia, battery capacity, or different protection would have prevented all disruption require validated dynamic models, joint-failure assumptions, and cost analysis.

## Transfer

For any real-time infrastructure failure, separate accumulated quantity from delivery rate. Identify the physical buffer that acts before deliberate control, then map automatic response, replacement capacity, emergency shedding, and recovery of safety margin across successive timescales.

## Sources

- https://www.neso.energy/document/152346/download
- https://www.neso.energy/document/151081/download
- https://assets.publishing.service.gov.uk/media/5e0e1fa9e5274a0fa7b4d96a/e3c-gb-power-disruption-9-august-2019-final-report.pdf
- https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/836626/20191003_E3C_Interim_Report_into_GB_Power_Disruption.pdf
- https://www.ofgem.gov.uk/publications/investigation-9-august-2019-power-outage
- https://www.neso.energy/industry-information/codes/sqss/modifications/gsr027-review-nets-sqss-criteria-frequency-control-drive-reserve-response-and-inertia-holding-gb-electricity-system
- https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/rs/reference_document_nerc_balancing_and_frequency_control.pdf
