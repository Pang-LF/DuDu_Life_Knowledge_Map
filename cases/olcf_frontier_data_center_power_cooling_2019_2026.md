# OLCF Frontier Data Center Power, Cooling and Rack Capacity, 2019–2026

## Case ID

`CASE.OLCF.FRONTIER.DATA_CENTER_POWER_COOLING.2019_2026`

## Why This Case Matters

Frontier makes the physical conversion from installed computers to sustainable compute capacity visible. Oak Ridge could not place a denser machine into Titan's former room by counting campus megawatts or empty floor tiles; electrical delivery, warm-water cooling, local piping, structural support, controls and the cabinets had to be commissioned as one system.

## Narrative

### Before

Titan had occupied a roughly 20,000-square-foot computer room and consumed about 10 MW at peak according to OLCF's 2020 project account. After Titan was retired, the room existed, but its former pipes, electrical infrastructure and floor were not automatically suitable for Frontier.

### Pressure Builds

The project expected Frontier to reach about 30 MW peak and to create fast heat-load swings of 10 MW or more within minutes. More power meant more heat at higher local density, while heavier cabinets imposed a structural constraint that aggregate site capacity could not solve.

### Turning Point

OLCF stripped and rebuilt the room, added a 2.5-mile power line, constructed a new 28 MW electrical room around the computer room, upgraded the raised floor and created a separate mechanical plant. The cooling design used warm water so heat could be rejected without refrigerating the compute loop to legacy chilled-water temperatures.

### Cascade

Frontier's 74 cabinets placed direct-liquid-cooled high-power processors, GPUs and network components behind cabinet power and cooling boundaries. HPE's Cray EX architecture uses cold plates, secondary technology loops and CDUs to transfer heat into the facility loop. OLCF's project described about 40 MW of planned cooling capacity, 130,000 gallons of system water, four 350-horsepower pumps capable of moving more than 5,000 gallons per minute each, and 500 feet of 24-inch pipe. Each number belongs to a different layer and cannot be added into one generic capacity figure.

### Decision

Operators designed for both density and dynamic response. The cooling controls had to anticipate large near-term load swings, while electrical and cooling reserve preserved operation during equipment limits or maintenance. This reserve is intentional reliability capacity; capacity that cannot reach a usable rack because another path is missing is stranded capacity.

### Outcome

OLCF reported in 2024 that Frontier delivered peak PUE around 1.03 and used approximately 90°F cooling water, compared with 42°F for Titan. The warmer loop reduced refrigeration needs and the facility moved from fan- and chiller-heavy cooling toward fan-free direct liquid cooling. Separately, the current TOP500 entry reports Frontier's benchmark system at 1.353 exaflops and 24.607 MW at measurement level 2; this is not the complete facility meter and must not be multiplied by PUE without matching time, load and measurement boundaries.

### Aftermath

Frontier's idle load still matters: OLCF reported 7–8 MW idle power in 2024. Efficient support infrastructure cannot turn idle electricity into scientific output. The next operational problem therefore moves from physical capacity into workload placement, utilization and scheduling—while preserving power, cooling and reliability limits.

## Explained Numbers

- `74 cabinets`: physical system scale reported by OLCF, not 74 identical independent power or cooling zones.
- `28 MW electrical room`: project electrical-infrastructure rating described during construction, not proof that every rack can simultaneously consume 28 MW of IT power.
- `~40 MW planned cooling capacity`: heat-removal design quantity, not system electrical draw or useful computing output.
- `10 MW or larger load swings within minutes`: control challenge showing why static annual energy totals cannot describe thermal response.
- `90°F cooling water`: Frontier operating/design temperature reported by OLCF; warmer water reduces refrigeration burden but requires compatible equipment and sufficient flow.
- `PUE ~1.03 at peak`: facility-to-IT power ratio under OLCF's stated peak condition, not application efficiency, carbon intensity, water use or annual universal value.
- `24.607 MW`: current TOP500 benchmark-system power at measurement level 2, not total data-center power and not a contractually available rack capacity.
- `7–8 MW idle`: OLCF-reported Frontier idle load, showing that installed and powered capacity can consume energy without producing proportional useful work.

## Evidence Boundaries

- OLCF's 2020 figures were project design statements or expectations; later measured operation and current TOP500 entries use different dates and boundaries.
- TOP500 benchmark power describes the submitted computing system and measurement level, not the entire building, cooling plant or annual electricity use.
- HPE QuickSpecs describe platform capabilities and maximum configurations, not Frontier's exact per-cabinet operating point.
- PUE measures infrastructure overhead relative to IT energy or power under a stated boundary; it does not measure useful scientific output, local rack density, reliability, carbon or water.
- Public sources do not disclose complete project cost allocation, equipment margins, internal electricity prices, maintenance contracts, failure reserves or customer-specific capacity economics.

## Sources

- https://www.olcf.ornl.gov/2020/12/14/building-an-exascale-class-data-center/
- https://www.olcf.ornl.gov/2020/09/23/powering-frontier/
- https://www.olcf.ornl.gov/2024/09/10/olcf-pioneers-approaches-to-energy-efficient-supercomputing/
- https://www.olcf.ornl.gov/frontier/
- https://www.hpe.com/int/en/collaterals/collateral.a00094635enw.html
- https://www.energy.gov/sites/default/files/2024-07/best-practice-guide-data-center-design.pdf
- https://www.top500.org/system/180047/
