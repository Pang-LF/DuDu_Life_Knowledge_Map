# Air France Flight 447 Bayesian Search, 2009-2011

- Case ID: `CASE.AF447.SEARCH.2009_2011`
- Domain: META / Probability; exposure to Deep-Sea Search
- Primary concept: Bayesian Updating
- Status: Studied; Teach-back pending

## Puzzle

Why should a failed search lower the probability of wreckage in one seabed cell without automatically reducing it to zero, and why should the same failure matter differently across cells?

## Minimum Unit

One seabed cell has a prior probability, a conditional probability of detection if wreckage is present, and a search result. A no-detection result leaves the cell's weight multiplied by one minus its detection probability before all cells are normalized.

## Narrative Structure

- Before: AF447 disappeared over the Atlantic on June 1, 2009, leaving uncertain flight dynamics, reverse-drift evidence and a vast rugged search region.
- Pressure Builds: Surface debris was found, but successive underwater searches did not locate the main wreckage; every failure mixed “not here” with “here but missed.”
- Turning Point: Analysts modeled prior location probabilities and search-specific probabilities of detection rather than treating searched polygons as eliminated.
- Cascade: High-POD negative searches reduced cells more than low-POD searches; pinger-survival and dependence assumptions changed how strongly acoustic failures counted.
- Decision: BEA reanalyzed earlier data and used a posterior probability map to prioritize the fourth underwater search.
- Outcome: A WHOI-led REMUS 6000 team found wreckage at about 3,900 metres depth roughly one week after the fourth phase began; recorders were recovered in May 2011.
- Aftermath: The search demonstrated an auditable update process while preserving uncertainty about prior weights, drift, sensor performance and operational execution.

## Quantitative Anchors

- 216 passengers plus 12 crew, 228 people total.
- Search prior combined 70% flight-dynamics and 30% reverse-drift distributions.
- Early TPL / ROV cumulative detection probability estimated at 0.41.
- Pinger-survival assumptions produced materially different acoustic detection probabilities; the report's lifetime-adjusted in-range value was about 0.77.
- Wreckage was found at about 3,900 metres depth, around 6.5 nautical miles north of the last known position.
- The overall sea search took five phases, about two years and more than EUR 30 million.

## Evidence Boundary

The prior weights, drift model, beacon survival, sensor POD and interpretation of previous coverage were model inputs rather than directly observed truths. Finding wreckage in a prioritized region supports the map's operational usefulness but does not validate every probability assumption or separate the map from the contribution of AUV technology and execution.

## Sources

- https://bea.aero/en/investigation-reports/notified-events/detail/accident-to-the-airbus-a330-203-registered-f-gzcp-and-operated-by-air-france-occured-on-06-01-2009-in-the-atlantic-ocean
- https://bea.aero/uploads/tx_elyextendttnews/metron.search.analysis.pdf
- https://bea.aero/fileadmin/uploads/tx_elyextendttnews/sea.search.ops.af447.05.11.2012.en_03.pdf
- https://www.whoi.edu/press-room/news-release/whoi-led-team-locates-air-france-wreckage/
- https://arxiv.org/abs/1405.4720
