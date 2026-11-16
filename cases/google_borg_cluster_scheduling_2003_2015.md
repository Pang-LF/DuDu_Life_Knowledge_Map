# Google Borg Cluster Scheduling, 2003–2015

## Case ID

`CASE.GOOGLE.BORG.CLUSTER_SCHEDULING.2003_2015`

## Why This Case Matters

Borg makes the conversion from heterogeneous machines into placeable services visible. It shows that pooling, fine-grained requests, priority, quota, task packing and reclaiming unused headroom can reduce physical requirements, while fragmentation, constraints and interference remain real.

## Narrative

### Before

The simplest operating model assigned services and batch jobs to separate machine pools. User-facing services needed spare resources for traffic spikes and partial failures; batch jobs arrived and departed over seconds to days. Each isolated pool therefore carried idle tail capacity that another pool could not borrow.

### Pressure Builds

By the period summarized in Google's 2015 paper, Borg ran hundreds of thousands of jobs from thousands of applications across clusters containing up to tens of thousands of machines. Static ownership could not efficiently combine heterogeneous resource shapes, time patterns and service priorities at that scale.

### Turning Point

Borg treated a cell as a shared scheduling domain. Users submitted jobs made of tasks with resource limits and constraints. Admission control checked quota, priority represented relative importance, and the scheduler filtered feasible machines and scored placements. Teams received declarative resource rights instead of permanent ownership of named machines.

### Cascade

High-priority production services retained limits and headroom while lower-priority work could use temporarily unconsumed resources. Google reported that 98% of machines in shared Borg cells, and 83% of all machines managed by Borg, ran both production and non-production tasks. Simulating separate production and non-production cells required 20–30% more machines in the median sampled cell.

Borg also accepted fine-grained CPU, memory and disk requests. Rounding production CPU and memory limits up to fixed power-of-two buckets increased required resources by 30–50% in the median simulated case. Pool size, request shape and product granularity therefore changed fragmentation even before workload execution.

### Decision

Borg separated quota, priority, resource limit, reservation and usage. Production quota was bounded by actual cell resources, subject to fragmentation and constraints; lower-priority quota could be oversold, so admitted work might remain pending. Production tasks did not preempt one another, limiting preemption cascades, while lower-priority tasks could be reclaimed.

### Outcome

Shared cells and resource reclamation increased effective utilization without pretending that every task had the same service requirement. The paper also found possible CPU interference and used simulation rather than unsafe experiments on live cells, so machine-count savings and performance cost must be evaluated together.

### Aftermath

Borg's declarative jobs, labels, constraints and control loops influenced later orchestration systems. Public IaaS virtual machines add guest operating systems, standardized instance products, external billing, tenancy and explicit customer capacity promises, so Borg's percentages are mechanism evidence rather than universal cloud economics.

## Explained Numbers

- `up to tens of thousands of machines per cluster`: scale statement from the Google paper, not a uniform cell size or a current fleet disclosure.
- `98% / 83%`: fraction of machines running both production and non-production tasks in shared Borg cells / across all Borg-managed machines, not CPU utilization percentages.
- `20–30% more machines`: median simulated overhead of separating production and non-production workloads, not a guaranteed saving for every provider.
- `30–50% more resources`: median simulated effect of rounding fine-grained production CPU and memory requests to the specified power-of-two buckets, not a public-cloud instance waste rate.
- `15 representative cells`: sample used for several production-checkpoint simulations after excluding special, test and small cells; the paper says sampled cells had at least 5,000 machines.

## Evidence Boundaries

- The quantitative analysis used Google production checkpoints and high-fidelity simulation around 2014; it did not randomize live production policies.
- Borg managed internal containerized tasks, not the complete security, billing and contract surface of public IaaS virtual machines.
- Shared-cell machine savings do not prove zero performance interference; the paper reported mixed CPI comparisons and treated warehouse-scale comparison cautiously.
- The paper does not disclose customer prices, cloud margins, modern accelerator placement, current Google fleet policy or contract-level risk allocation.

## Sources

- https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/
- https://john.e-wilkes.com/papers/2015-EuroSys-Borg.pdf
