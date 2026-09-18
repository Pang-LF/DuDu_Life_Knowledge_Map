# Wald Aircraft Survivorship Analysis, 1943

- Case ID: `CASE.WALD.AIRCRAFT.SURVIVORSHIP.1943`
- Domain: META / Causal Reasoning; exposure to Operations Research and Aircraft Survivability
- Primary concept: Selection Bias, with Survivorship Bias as a subtype
- Status: Studied; Teach-back pending

## Puzzle

If returning aircraft show many hits on broad fuselage and remainder areas but fewer around engines, does armor belong where visible hits are most common?

## Minimum Unit

One projectile hit on one aircraft part. It enters the observed damage table only if the aircraft survives the hit, returns, and is inspected.

## Narrative Structure

- Before: Wartime analysts needed to allocate armor under weight, range, payload, and maneuverability constraints.
- Pressure Builds: Damage records came from returning planes, so observed hit locations were conditional on survival.
- Turning Point: Wald defined the problem as estimating destruction probabilities from survivor-selected damage rather than treating visible hit frequencies as vulnerability.
- Cascade: In the report's explicitly hypothetical example, 399 visible hits included 45 on engines and 238 on remainder areas, while estimated unspecified-ammunition vulnerability was 17.9% for engines and 3.8% for remainder areas.
- Decision: Armor guidance must combine hit probability, conditional vulnerability, armor effectiveness, and weight cost rather than rank visible holes alone.
- Outcome: The report provided estimators and vulnerability tables to guide protective armor and predict future mission losses under explicit assumptions.
- Aftermath: The memoranda were reprinted by the Center for Naval Analyses in 1980, while later popular retellings compressed the statistical method into an undocumented dramatic exchange and iconic dotted-plane image.

## Selection Mechanism

Observed data estimate the distribution of hit locations conditional on return. If hit location changes return probability, conditioning on return systematically changes the distribution. A vulnerable location can appear infrequently among survivors precisely because aircraft hit there are less likely to survive into the sample.

## Numbers That Change The Interpretation

- The numerical example was hypothetical: 1,000 aircraft dispatched, 634 attacking the objective, and 32 lost in combat.
- Returning aircraft recorded 399 hits: 32 forward fuselage, 45 engine, 84 fuel system, and 238 remainder.
- Engines were 11.3% of visible hits, while remainder areas were 59.6%.
- Estimated vulnerability to an unspecified hit was 17.9% for engine and 3.8% for remainder, a ratio of about 4.7.
- For a 20-mm cannon in the example, estimated engine vulnerability was 53.4% versus 2.9% for remainder, showing why ammunition type and location cannot be collapsed.

## Evidence Boundary

The numerical table demonstrates Wald's method under assumed hit distributions, independence, plane-part representation, and ammunition conditions. It is not an empirical constant for all aircraft. The primary report confirms work on survivor damage and armor guidance, but not the most theatrical online dialogue or the provenance of the modern dotted-plane graphic.

## Three-Ring Attribution

- Mastery Core: `META.CAUSAL.SELECTION_BIAS`
- Knowledge Expansion: Operations research, aircraft survivability, armor allocation and conditional vulnerability
- Connection Preview: Product Analytics, Finance, Careers and Biography

## Sources

- https://www.cna.org/reports/1980/0204320000.pdf
- https://doi.org/10.1080/01621459.1984.10478038
- https://www.ams.org/publicoutreach/feature-column/fc-2016-06
