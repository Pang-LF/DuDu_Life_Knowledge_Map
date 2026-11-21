# GitLab.com Database Outage and Recovery, 2017

## Case ID

`CASE.GITLAB.DATABASE.OUTAGE.RECOVERY.2017`

## Why This Case Matters

The incident separates the existence of replicas, backups and snapshots from a recoverable business service. Multiple protection mechanisms existed, but only an unplanned six-hour-old staging snapshot could be found, read and restored, while slow storage, missing ownership, failed alerts and incomplete runbooks lengthened recovery.

## Narrative

### Before

GitLab.com used one PostgreSQL primary and one hot standby, with daily `pg_dump` backups intended for S3, daily LVM snapshots copied into staging, and Azure disk snapshots for some other servers. The standby primarily served failover, while the LVM copies primarily served staging rather than an exercised disaster-recovery workflow.

### Pressure Builds

On January 31, spam and a background account-deletion job increased database load. The standby lagged until required WAL segments had already disappeared from the primary. Without WAL archiving, engineers needed to clear and rebuild the standby manually with `pg_basebackup`; the procedure was fragile and incompletely documented.

### Turning Point

At about 23:30 UTC, an engineer intending to remove the standby data directory executed the deletion on the primary. The process was stopped after one or two seconds, but roughly 300 GB had been removed and about 4.5 GB remained.

### Cascade

The standby was already being rebuilt. The S3 bucket expected to contain `pg_dump` backups was empty because PostgreSQL 9.2 tooling had failed against PostgreSQL 9.6, while rejected email alerts hid the failures. Azure snapshots were not enabled for the database servers. The viable LVM copy was a staging snapshot manually created roughly six hours earlier.

### Decision

The team restored from the six-hour-old staging database rather than an almost 24-hour-old alternative. It copied the database back to production, built a separate database to recover webhooks, advanced sequences to avoid reusing identifiers and gradually re-enabled the service.

### Outcome

GitLab reported that copying from staging took around 18 hours, with storage throttled near 60 Mbit/s as the main bottleneck. GitLab.com was down for about 18 hours and lost database modifications from about 17:20 to 23:30 UTC. The company estimated at least 5,000 projects, 5,000 comments and roughly 700 user accounts were affected; Git repositories and wikis were unavailable but were stored separately and did not share the database data loss.

### Aftermath

GitLab initiated backup monitoring, continuous archiving and point-in-time recovery work, hourly LVM snapshots, database disk snapshots, automated restore tests, improved replication runbooks and explicit data-durability ownership. The remediation targeted recoverability and visibility, not only prevention of one mistaken command.

## Explained Numbers

- `about 6 hours`: age of the usable manual LVM snapshot and practical rollback window, not a planned or guaranteed RPO.
- `about 18 hours`: reported service outage and approximate copy/recovery scale; copying, webhook restoration, sequence repair, validation and reopening have overlapping but non-identical boundaries.
- `roughly 300 GB removed; about 4.5 GB left`: GitLab's public estimate of primary-directory damage, not an independent forensic measurement.
- `around 60 Mbit/s`: reported storage throughput bottleneck. A transparent decimal model gives `300 GB × 8 / 60 Mbit/s ≈ 11.1 hours` before storage, protocol, I/O and validation overhead; it does not independently reproduce the actual transfer.
- `at least 5,000 projects, 5,000 comments and roughly 700 users`: GitLab's coarse impact estimate, not a complete inventory of every changed database object.

## Counterfactual

If the logical backups had been successfully produced and restore-tested, or if continuous WAL archiving and point-in-time recovery had been available, the rollback window and restore path could have been shorter. If the standby had remained independent and ready, failover might have avoided rebuilding from staging. Merely adding another untested backup mechanism under the same ownership and alerting gaps would not necessarily have changed the result.

## Evidence Boundaries

- GitLab's postmortem is a detailed company-authored primary source, not an independent audit.
- The public record does not expose every internal control, contract cost, customer loss or forensic artifact.
- The 2017 PostgreSQL, Azure, S3 and self-managed operating arrangement does not describe current product defaults.
- The event is a negative recovery case rather than proof that any particular multi-region design will meet its objectives.

## Sources

- https://about.gitlab.com/blog/postmortem-of-database-outage-of-january-31/
- https://about.gitlab.com/blog/gitlab-dot-com-database-incident/
