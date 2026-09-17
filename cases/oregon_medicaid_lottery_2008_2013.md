# Oregon Medicaid Lottery, 2008-2013

- Case ID: `CASE.OREGON.MEDICAID.LOTTERY.2008_2013`
- Domain: META / Causal Reasoning; exposure to Public Health Insurance
- Primary concept: Counterfactual
- Status: Studied; Teach-back pending

## Puzzle

How can researchers estimate what would have happened to a low-income uninsured adult without Medicaid when the same person cannot be observed both with and without coverage?

## Minimum Unit

One adult on Oregon's 2008 Medicaid waiting list, with two potential outcomes at the same follow-up time: an outcome under coverage and an outcome without coverage. Only one can be observed.

## Narrative Structure

- Before: Oregon reopened a waiting list for a limited public-insurance expansion after enrollment had been closed since 2004.
- Pressure Builds: 89,824 people registered, but final enrollment also depended on completing an application and meeting eligibility rules, making enrollees and non-enrollees potentially different before coverage.
- Turning Point: Eight lottery drawings randomly assigned roughly 30,000 names an opportunity to apply, creating comparable invitation groups.
- Cascade: Lottery selection increased Medicaid coverage by 24.1 percentage points, so the random offer effect and actual coverage effect were distinct estimands.
- Decision: Preserve original random assignment for the offer effect; use lottery-induced coverage only with additional exclusion and compliance assumptions for a coverage effect.
- Outcome: Medicaid reduced financial strain and depression screening while increasing utilization; no statistically significant average change was detected in measured blood pressure, cholesterol, or glycated hemoglobin over about two years.
- Aftermath: Political summaries often collapsed multiple outcomes into a single verdict, while the experiment's strongest lesson was the construction and limits of a credible average counterfactual.

## Counterfactual Mechanism

For each unit, Y(1) and Y(0) cannot be observed simultaneously. Random assignment does not reveal an individual's missing potential outcome; it makes one group's observed outcomes a credible estimate of the other group's missing average outcome. Reclassifying people by actual enrollment weakens that protection because application completion and eligibility are selected.

## Numbers That Change The Interpretation

- 89,824 is the waiting-list population, not the number automatically enrolled.
- The in-person study included 12,229 respondents: 6,387 selected and 5,842 not selected.
- Lottery selection increased Medicaid coverage by 24.1 percentage points, showing substantial noncompliance and crossover rather than a clean 100-point treatment gap.
- Depression screening fell 9.15 percentage points, about 30% relative to the control mean near 30%.
- Catastrophic out-of-pocket expenditure fell 4.48 percentage points, more than 80% relative, with catastrophe defined as spending above 30% of income.
- No statistically significant physical-health average is not proof of exact zero; confidence intervals remained compatible with some clinically meaningful changes.

## Evidence Boundary

The lottery directly identifies the effect of an opportunity to apply among waiting-list registrants. Coverage estimates require additional assumptions and primarily concern people whose enrollment changed because of selection. Results over one to two years do not automatically generalize to every Medicaid population, state, outcome, or long-run system effect.

## Three-Ring Attribution

- Mastery Core: `META.CAUSAL.COUNTERFACTUAL`
- Knowledge Expansion: Public health insurance, ITT, enrollment, financial protection, clinical outcomes
- Connection Preview: Product Experimentation, History, Personal Decisions

## Sources

- https://www.nber.org/papers/w17190
- https://www.nejm.org/doi/full/10.1056/NEJMsa1212321
- https://www.nber.org/oregon
- https://www.povertyactionlab.org/evaluation/oregon-health-insurance-experiment-united-states
