# OLCF Summit Node Architecture, Deployment and Acceptance, 2012–2019

## Case ID

`CASE.OLCF.SUMMIT.NODE_ARCHITECTURE_DEPLOYMENT.2012_2019`

## Why This Case Matters

Summit makes a complete server-node hierarchy visible: CPU memory, GPU HBM, NVLink, InfiniBand, NVMe, parallel storage, power, cooling and software all had to work as one accepted system. Its deployment also provides a counterexample in which physical NVLink hardware existed while a cgroups configuration prevented direct device-to-device use.

## Narrative

### Before

Titan used 18,688 CPU–GPU nodes to reach roughly 27 PFLOP/s peak. Its large node count increased the number of network partitions, communication relationships and failure surfaces that applications and operators had to manage.

### Pressure Builds

Leadership scientific workloads required more arithmetic, larger memory, higher local reuse, faster inter-node exchange, checkpoint storage and stable long-duration operation. Adding accelerators without raising and validating their data paths would merely move the bottleneck.

### Turning Point

Summit concentrated capability into 4,608 IBM AC922 nodes. Each contained two 22-core POWER9 CPUs, six NVIDIA V100 GPUs, 512 GB DDR4, 96 GB total HBM2 and 1.6 TB NVMe, connected internally by NVLink and externally by dual-rail EDR InfiniBand.

### Cascade

One V100 exposed 900 GB/s local HBM2 bandwidth, while key NVLink paths were about 50 GB/s and node network injection about 23 GB/s. The system therefore created a hierarchy in which data placement, topology, peer access and communication frequency determined how much of the local arithmetic roof a distributed workload could use.

### Decision

DOE and ORNL accepted a complete system rather than isolated components. Testing covered hardware, functionality, performance and stability. The full-system stability period lasted 336 hours and included thresholds for job success, completed-job correctness and resource availability.

### Outcome

Official material compared Titan's roughly 27 PFLOP/s and 18,688 nodes with Summit's roughly 200 PFLOP/s and 4,608 nodes. Summit's system power was listed at about 9.8 MW versus Titan's 8.2 MW. These are peak system comparisons, not guarantees of sevenfold application speed or proof that one link caused the difference.

### Aftermath

From October 25 to November 8, 2018, the full-system stability test executed more than 29,000 tests and reported 97.77% successful completion. NVLink functional testing found that cgroups configuration could block direct device-to-device communication and force host routing; corrected peer-to-peer tests reached about 46 GB/s in each direction and exposed slow GPU/HBM units, misconfigured P2P and stray processes.

## Explained Numbers

- `4,608 nodes`: complete Summit system scale, not a count of independent identical application results.
- `2 POWER9 + 6 V100 per node`: processing topology whose data paths must be mapped; it does not imply uniform all-to-all bandwidth.
- `512 GB DDR4 + 96 GB HBM2 + 1.6 TB NVMe`: different capacity, persistence and locality tiers, not one interchangeable memory pool.
- `900 GB/s`: one V100's local HBM2 bandwidth specification.
- `50 GB/s`: representative dual-link NVLink path in the published node material, not a universal endpoint-to-endpoint rate.
- `23 GB/s`: published node network injection bandwidth for the dual-rail fabric, not end-to-end application throughput.
- `336 hours`: full-system stability test duration, demonstrating that sustained correct service was an acceptance object.
- `97.77%`: share of more than 29,000 stability tests reported as successfully completed, not permanent production availability.

## Evidence Boundaries

- Summit is a 2018 leadership scientific-computing system; its topology and economics cannot be copied directly to current cloud or AI servers.
- Vendor and operator specifications describe peaks or stated conditions; application-effective performance requires workload measurements.
- The 1 GB transfer calculations in the lesson are ideal serialization lower bounds and exclude startup latency, protocol, contention, synchronization and software overhead.
- Public sources do not disclose complete component prices, integrator margins, warranty allocation or supplier liability terms.
- The cgroups issue proves software can disable a fast path, not that cgroups are generally the main cause of poor multi-GPU scaling.

## Sources

- https://docs.olcf.ornl.gov/systems/summit_user_guide.html
- https://www.osti.gov/servlets/purl/1561654
- https://www.olcf.ornl.gov/wp-content/uploads/2019/05/Summit_System_Overview_20190520.pdf
