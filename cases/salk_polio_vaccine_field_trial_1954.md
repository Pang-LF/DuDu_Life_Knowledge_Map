# Salk Polio Vaccine Field Trial, 1954

- Case ID: `CASE.SALK.POLIO_VACCINE_FIELD_TRIAL.1954`
- Domain: META / Causal Reasoning; exposure to Clinical Trial Design and Public Health
- Primary concept: Causal Reasoning Integration
- Status: Studied; Teach-back pending

## Puzzle

Why did placebo recipients experience more paralytic polio than uninoculated children when the placebo itself provided no protection?

## Minimum Unit

One elementary-school child passes through trial-area, school, parental-consent, random-assignment, symptom-reporting, and diagnostic-classification gates before becoming one row in an outcome table.

## Narrative Structure

- Before: Poliomyelitis caused roughly 13,000-20,000 paralytic cases annually in the United States, while antibody response alone could not establish clinical protection.
- Pressure Builds: An observed-control plan vaccinated consenting second-graders and compared them with first- and third-graders, mixing treatment with age, consent, and unblinded observation.
- Turning Point: Eighty-four areas in 11 states used randomized, blinded vaccine-versus-placebo assignment among participating children, while 127 areas retained observed controls.
- Cascade: The placebo design separated parental selection into participation from chance assignment within the participating pool, and blinding reduced differential case classification.
- Decision: Use randomized placebo recipients as the primary counterfactual for vaccinated participants; use uninoculated and observed controls as supplemental evidence and diagnostics of selection.
- Outcome: Paralytic polio occurred at 16 per 100,000 among 200,745 vaccinated children versus 55 among 201,229 placebo children, about 71% relative efficacy. The uninoculated rate was only 36, demonstrating non-equivalence of untreated groups.
- Aftermath: The result supported rapid vaccine adoption, while later manufacturing quality and population rollout remained separate causal and safety questions.

## Integrated Causal Audit

The intervention preceded the outcome, making reverse causality implausible. The missing counterfactual was each vaccinated child's paralytic-polio result without vaccine. Random assignment made placebo recipients a credible average substitute among consenters. Parental consent remained a selection gate that limited generalization, and blinding protected outcome classification. The identified effect applied to participating children, tested vaccine lots, the 1954 season, and defined paralytic outcomes.

## Numbers That Change The Interpretation

- Total evaluation population: 1,829,916 children.
- Randomized placebo areas: 200,745 fully vaccinated, 33 paralytic cases, rate 16 per 100,000.
- Randomized placebo controls: 201,229 children, 110 paralytic cases, rate 55 per 100,000.
- Uninoculated children in placebo areas: 330,201, 118 paralytic cases, rate 36 per 100,000.
- Randomized rate comparison: `1 - 16 / 55`, approximately 71% relative efficacy.
- Using uninoculated children instead would imply about 56%, showing a 15-point shift caused by control-group construction rather than sample size.
- Observed areas: vaccinated rate 17 versus observed-control rate 46 per 100,000, directionally consistent but more exposed to age, consent, and diagnostic differences.

## Evidence Boundary

The randomized comparison provides strong internal validity among participating children. It does not make participants representative of every child, prove identical performance for every manufacturing lot or viral type, or convert long-run population decline into a single-factor experiment. Socioeconomic and behavioral differences are plausible causes of the placebo-versus-nonparticipant gap but cannot be allocated precisely from aggregate tables.

## Three-Ring Attribution

- Mastery Core: `META.CAUSAL.INTEGRATION`
- Knowledge Expansion: Polio history, parental consent, randomization, placebo control, blinding, diagnostic classification, external validity
- Connection Preview: Product Experimentation, Public Policy, Artificial Intelligence

## Sources

- https://pubmed.ncbi.nlm.nih.gov/14361811/
- https://jhanley.biostat.mcgill.ca/bios601/Polio/PolioTrial-I-SummaryConclusions.pdf
- https://sph.umich.edu/polio/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC1114166/
- https://www.cdc.gov/mmwr/preview/mmwrhtml/mm5413a5.htm
