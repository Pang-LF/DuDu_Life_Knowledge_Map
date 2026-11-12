# Google TPU v1 Roofline and Production Inference, 2013–2017

## Case ID

`CASE.GOOGLE.TPU_V1.ROOFLINE_INFERENCE.2013_2017`

## Why This Case Matters

The first Google TPU offers a production-workload comparison on one fixed accelerator: low-intensity MLP and LSTM applications remained weight-memory-bound, CNN0 approached the compute roof, and CNN1 stayed far below that roof despite lying on the compute side. It therefore separates active resource ceiling from exact realized performance.

## Narrative

### Before

Google served neural-network inference on CPUs and GPUs. In 2013 it projected that three minutes of voice search per user per day could double data-center compute demand.

### Pressure Builds

Production inference had to combine throughput with response-time limits. Larger batches reused weights better, but collecting requests increased delay; MLP0 carried a 7 ms 99th-percentile response-time requirement.

### Turning Point

Google designed, verified and deployed TPU v1 in about 15 months. The chip used a 256 × 256 8-bit matrix unit with 65,536 MACs, about 92 TOPS peak, roughly 28 MiB of on-chip memory, 8 GiB of external weight memory and 34 GB/s weight bandwidth.

### Cascade

The paper reported a Roofline ridge point of 1,350 operations per weight byte. Production MLP and LSTM intensities of about 64–200 fell on the memory slope and achieved about 2.8–12.3 TOPS. CNN0 at intensity 2,888 achieved about 86 TOPS near the 92-TOPS roof. CNN1 at intensity 1,750 achieved only 14.1 TOPS because shallow feature depth, non-matrix cycles, weight stalls and dependencies left much of the array unused.

### Decision

Google prioritized predictable inference response and a deterministic design rather than maximizing offline batch throughput or preserving broad general-purpose features.

### Outcome

The paper reported 15–30 times average speed and 30–80 times TOPS per watt relative to the contemporary CPU and GPU baselines under its tested workloads. These are system comparisons under the paper's hardware, workload, latency and measurement choices, not timeless accelerator rankings.

### Aftermath

Hardware modeling found that four times weight bandwidth improved average performance by roughly three times, while four times clock brought almost no benefit to MLP and LSTM but about two times to CNNs. A hypothetical GDDR5 design shifted the ridge from about 1,350 to 250 operations per byte and improved the weighted chip-only estimate by about 3.9 times, or about 3.2 times after host interaction.

## Explained Numbers

- `92 TOPS`: peak 8-bit inference arithmetic capability, not guaranteed application throughput.
- `34 GB/s`: weight-memory bandwidth used in the paper's Roofline boundary, not all possible on-chip or host traffic.
- `1,350 operations/weight byte`: reported ridge point; the operation-count convention must remain consistent.
- `86 TOPS`: CNN0's achieved throughput, showing the compute roof could be approached.
- `14.1 TOPS`: CNN1's achieved throughput despite a compute-side intensity, demonstrating utilization distance below the roof.
- `2.8–12.3 TOPS`: range across lower-intensity MLP and LSTM workloads limited first by weight supply.
- `95%`: six applications' approximate share of Google TPU workload at the time, not global AI workload share.

## Evidence Boundaries

- The evidence describes 2015-era production inference and a paper published in 2017, not current training clusters.
- Operations per weight byte excludes some activation, cache, host and network boundaries that another Roofline could choose.
- Google did not publish actual chip prices because of negotiated pricing and used performance per watt as a TCO proxy.
- Workload selection, latency targets and deployment batches affect the weighted conclusions.
- Counterfactual hardware results are model estimates, not shipped-system measurements.

## Sources

- https://www.cs.cmu.edu/afs/cs/academic/class/15740-f18/www/papers/isca17-jouppi-tpu.pdf
- https://research.google/pubs/in-datacenter-performance-analysis-of-a-tensor-processing-unit/
- https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/Archive/EECS-2008-134.pdf
