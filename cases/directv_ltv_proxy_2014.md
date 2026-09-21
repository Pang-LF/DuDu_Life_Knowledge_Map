# DIRECTV LTV Proxy, 2014

- Case ID: `CASE.DIRECTV.LTV_PROXY.2014`
- Domain: BUSINESS / Subscription Economics
- Primary concept: Lifetime Value and Unit Economics
- Status: Studied as an evidence-bounded proxy; Teach-back pending

## Question

Why can DIRECTV's public ARPU and churn disclosures illustrate LTV mechanics but not reveal a true acquisition-cohort LTV?

## Official Inputs

- DIRECTV U.S. ARPU: $106.94 per month.
- Average monthly churn: 1.52%.
- SAC: $883 per gross addition.
- Pre-SAC Margin ratio: 34.1%.

## Instructional Proxy

- Monthly contribution proxy: `$106.94 × 34.1% = $36.47` per active subscriber-month.
- Under hypothetical constant 1.52% monthly churn, no reactivation and constant margin, expected active months are `1 / 0.0152 = 65.8`.
- Undiscounted gross LTV proxy: `$36.47 / 0.0152 ≈ $2,399`.
- Undiscounted gross LTV / SAC: about `2.72×`; value after SAC: about `$1,516`.
- With a hypothetical 10% effective annual discount rate and end-of-month contribution, discounted gross LTV proxy is about `$1,574`; discounted gross LTV / SAC is about `1.78×`; value after SAC is about `$691`.

## Evidence Boundary

These are not DIRECTV-disclosed LTV values. Pre-SAC Margin is a non-GAAP segment average over new and mature customers, not incremental cohort contribution. Reported churn is an aggregate average, not a constant cohort hazard. The model excludes tenure effects, plan and channel mix, contracts, reactivation, changing costs and taxes, and uses an assumed discount rate.

## Decision Lesson

Build LTV from acquisition-cohort retention and attributable monthly contribution, discount future cash flows, and compare with a consistently scoped CAC or SAC. Use payback and LTV together: the former measures recovery time and financing exposure; the latter includes the value tail after recovery.

## Sources

- https://www.sec.gov/Archives/edgar/data/1465112/000104746915001196/a2223104z10-k.htm
- https://www.sec.gov/Archives/edgar/data/1465112/000115752315000626/a51043087ex99_1.htm

