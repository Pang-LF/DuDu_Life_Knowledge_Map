# Dropbox Magic Pocket Cloud-storage Migration, 2012–2018

## Case ID

`CASE.DROPBOX.MAGIC_POCKET.CLOUD_STORAGE_MIGRATION.2012_2018`

## Why This Case Matters

Dropbox used public cloud storage to grow before moving most user file content to its own Magic Pocket infrastructure. The case shows that cloud and owned infrastructure can be rational at different stages, and that a lower full cost does not eliminate infrastructure expense: it changes third-party service payments into depreciation, facilities, support, supply-chain and operating responsibilities.

## Narrative

### Before

Dropbox used a hybrid architecture. Metadata and web servers ran in data centers it managed, while user file content was stored on Amazon. The arrangement let an early company obtain durable, scalable storage without first building the hardware, software and operating organization required to run it.

### Pressure Builds

Dropbox reported growth from roughly 40 PB of user data in 2012 to more than 500 PB in 2016. At that scale, small per-byte cost differences became material, while the company had already developed data-center, database, network and operating capabilities that reduced the incremental organizational cost of building specialized storage.

### Turning Point

Magic Pocket became a major initiative in summer 2013. Dropbox prototyped against its own workload, began a two-region dark launch in August 2014 and started storing and serving new user files exclusively in-house on February 27, 2015 after retaining extra backup protection.

### Cascade

The company installed hardware in three regional locations and built high-performance networking. Dropbox reported moving 500 PB—more than four exabits of data—into the new system in under six months, with peak transfer above 0.5 Tbit/s. Migration required duplicate storage, validation, capacity, networking, rollback and operational tooling rather than a simple billing change.

### Decision

Dropbox moved the vast majority of user file data into Magic Pocket while retaining a hybrid relationship with AWS for selected geographies and other internal workloads. It changed the sourcing boundary for a stable, massive, specialized workload rather than rejecting public cloud as a category.

### Outcome

Dropbox reached its target of serving 90% of data from internal infrastructure on October 7, 2015 and reported more than 90% in 2016. Its SEC filing said 2016 Infrastructure Optimization reduced third-party datacenter expense by $92.5 million while increasing internal depreciation, facilities and support expense by $53.0 million, for a $39.5 million net infrastructure-cost reduction.

### Aftermath

Dropbox continued to optimize Magic Pocket, cold storage, verification, its edge network and hardware supply chain. The company also continued using S3 for some products and tools, demonstrating a workload-specific hybrid strategy. Internal ownership increased control and workload-specific efficiency while adding procurement, capacity, hardware, software, durability and operations exposure.

## Explained Numbers

- `about 40 PB to more than 500 PB`: company-reported user-data growth from 2012 to 2016, more than twelvefold; it is scale context, not a standalone break-even threshold.
- `more than 90%`: share of user data Dropbox said was stored and served on custom infrastructure; it does not mean every Dropbox workload left AWS.
- `500 PB / more than 4 exabits / under six months`: migration scale. At a constant 0.5 Tbit/s peak, the serialization-only floor is about 92.6 days; actual migration included changing throughput, live traffic, validation and duplication.
- `$92.5 million lower third-party expense, $53.0 million higher internal expense, $39.5 million net reduction`: shows expense transformation and net benefit together; using only the gross reduction overstates savings.
- `gross margin 33%, 54%, 67% in 2015, 2016 and 2017`: company financial results that management linked to Infrastructure Optimization and concurrent revenue growth; they do not identify Magic Pocket's isolated causal contribution.

## Counterfactual

If Dropbox had remained smaller, highly uncertain, geographically diffuse or unable to develop storage operations, public cloud could have remained cheaper at the complete-service boundary. If it had built Magic Pocket before product-market fit, unused assets and diverted engineering could have outweighed unit savings. Conversely, if migration, reliability or capacity operations had failed, the apparent infrastructure saving could have been dominated by service interruption or data loss.

## Evidence Boundaries

- Dropbox engineering posts are company-authored primary sources, not independent audits.
- SEC filings support accounting figures and management attribution but not a clean causal estimate of Magic Pocket alone.
- Public sources do not disclose AWS private pricing, complete hardware BOM, staffing allocation, customer discounts or per-PB total cost.
- The case does not produce a universal scale threshold for leaving public cloud.

## Sources

- https://dropbox.tech/infrastructure/magic-pocket-infrastructure
- https://dropbox.tech/infrastructure/inside-the-magic-pocket
- https://dropbox.tech/infrastructure/netflash-tracking-dropbox-network-traffic-in-real-time-with-elasticsearch
- https://dropbox.tech/infrastructure/pocket-watch
- https://dropbox.tech/infrastructure/abstracting-cloud-storage-backends-with-object-store
- https://www.sec.gov/Archives/edgar/data/1467623/000119312518078140/d451946ds1a.htm
- https://www.sec.gov/Archives/edgar/data/1467623/000146762319000005/a12311810-k.htm
