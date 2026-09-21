# Wisconsin Campus Antigen Screening, 2020

- Case ID: `CASE.WISCONSIN.CAMPUS_ANTIGEN_SCREENING.2020`
- Domain: META / Probability; exposure to Diagnostic Testing and Public Health
- Primary concept: Base Rate
- Status: Studied; Teach-back pending

## Puzzle

Why were only one third of antigen-positive results among asymptomatic participants also RT-PCR positive when antigen-test specificity was 98.4%?

## Minimum Unit

One asymptomatic participant contributes paired nasal swabs tested by the Sofia antigen assay and RT-PCR, then enters one cell of a 2 × 2 table.

## Narrative Structure

- Before: Wisconsin universities needed rapid screening as students returned in fall 2020; antigen tests could return results in about 15 minutes.
- Pressure Builds: The asymptomatic reference class had only 17 RT-PCR-positive samples among 871, an observed prevalence of about 2%.
- Turning Point: Natural-frequency counting separated the 17 target samples from 854 non-target samples instead of treating 98.4% specificity as positive-result certainty.
- Cascade: The antigen assay identified seven of 17 RT-PCR positives but also flagged 14 of 854 RT-PCR negatives, so false positives outnumbered true positives two to one.
- Decision: Consider confirmatory NAAT after a positive antigen result in an asymptomatic person with low pretest probability, while considering confirmation after a negative antigen result in a symptomatic person.
- Outcome: Asymptomatic sensitivity was 41.2%, specificity 98.4%, PPV 33.3% and NPV 98.8%.
- Aftermath: Rapid serial testing retained operational value, but result interpretation had to include symptoms, exposure, prevalence, test performance and confirmatory strategy.

## Quantitative Anchors

| Asymptomatic participants | RT-PCR positive | RT-PCR negative | Total |
| --- | ---: | ---: | ---: |
| Antigen positive | 7 | 14 | 21 |
| Antigen negative | 10 | 840 | 850 |
| Total | 17 | 854 | 871 |

- Base rate: `17 / 871 = 1.95%`, reported as 2.0%.
- Sensitivity: `7 / 17 = 41.2%`.
- Specificity: `840 / 854 = 98.4%`.
- Positive predictive value: `7 / 21 = 33.3%`.
- Symptomatic comparison: 40 of 227 were RT-PCR positive; 32 true-positive and two false-positive antigen results produced 94.1% PPV, but test performance and base rate both differed.

## Evidence Boundary

RT-PCR was the study reference but is not a perfect ground truth. Participants were mostly young adults in two universities with serial testing; 57 participants contributed multiple tests. Eight false positives clustered within one hour, but investigators identified no user error. Results cannot be generalized mechanically to other assays, periods or populations.

## Sources

- https://www.cdc.gov/mmwr/volumes/69/wr/mm695152a3.htm
- https://www.cdc.gov/mmwr/volumes/69/wr/pdfs/mm695152a3-H.pdf
- https://www.fda.gov/medical-devices/coronavirus-covid-19-and-medical-devices/antibody-serology-testing-covid-19-information-patients-and-consumers

