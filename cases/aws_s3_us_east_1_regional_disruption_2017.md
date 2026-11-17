# Amazon S3 US-EAST-1 Regional Service Disruption, 2017

## Case ID

`CASE.AWS.S3.US_EAST_1.REGIONAL_DISRUPTION.2017`

## Why This Case Matters

The event separates data redundancy from service availability. S3 object copies across devices and Availability Zones did not eliminate a shared regional dependency on index and placement subsystems, and the operational and status-console paths exposed additional common-mode failures.

## Narrative

### Before

S3 stored object data redundantly while regional index metadata located objects and a placement subsystem allocated capacity for new objects. Removing and replacing limited capacity was a normal operating practice, and the service was designed to tolerate significant component removal with little customer impact.

### Pressure Builds

S3 had grown rapidly, and its largest Regions had not required complete restarts of the index or placement subsystems for years. The service could absorb expected local failures, but the full recovery path at current scale had become slower and less frequently exercised.

### Turning Point

At 9:37 AM PST on February 28, 2017, an authorized team member debugging a slow billing subsystem entered one command input incorrectly. The established tool removed far more server capacity than intended, affecting both the index and placement subsystems and forcing full restarts.

### Cascade

The index subsystem held object metadata and location information needed by GET, LIST, PUT and DELETE. The placement subsystem allocated storage for PUT and depended on index operation. S3 APIs became unavailable, affecting the S3 console and regional AWS services that depended on S3, including some EC2 launches, EBS volume operations that needed S3 snapshots, and Lambda. The Service Health Dashboard administration console also depended on S3 and could not update individual service status until 11:37 AM.

### Decision

Recovery could not skip metadata integrity checks. Index had to regain sufficient capacity before read/list/delete APIs and placement could recover. The team restored subsystems in dependency order instead of risking incorrect metadata or new storage allocation.

### Outcome

GET, LIST and DELETE began returning at 12:26 PM, 169 minutes after the trigger. Index was fully recovered by 1:18 PM. Placement completed recovery at 1:54 PM, 257 minutes after the trigger, allowing PUT to return to normal. Some downstream services required more time to clear accumulated backlogs.

### Aftermath

AWS slowed the rate at which its tool could remove capacity, added minimum-capacity safeguards, audited other operational tools, accelerated cell-based partitioning to reduce blast radius and improve recovery testing, and moved the Service Health Dashboard administration console across multiple Regions.

## Explained Numbers

- `9:37 AM to 12:26 PM = 169 minutes`: time until index capacity was sufficient to begin serving GET, LIST and DELETE, not full S3 recovery.
- `9:37 AM to 1:54 PM = 257 minutes`: time until placement completed recovery and S3 operated normally, not a claim that every AWS service or every API had identical impact for the full interval.
- `120 minutes`: period during which individual service status could not be updated through the normal dashboard console because it depended on S3.
- `at least three Availability Zones`: current S3 Standard storage placement documented by AWS; it supports data durability but does not describe every 2017 metadata or control dependency.
- `5.9× a 99.9% monthly budget`: transparent comparison of 257 minutes with a 43.8-minute 730-hour monthly budget, not formal SLA adjudication.

## Counterfactual

If the operational tool had enforced a minimum surviving subsystem capacity or removed capacity slowly, the incorrect input would likely not have forced full restarts. If index were partitioned into smaller independently recoverable cells, the same operational mistake could have affected a smaller request set and exercised a faster recovery unit. Additional object replicas within the same shared index boundary would not by themselves have addressed this trigger.

## Evidence Boundaries

- The post-event summary is AWS-authored and directly supports the public trigger, subsystem dependencies, times and stated remediations, but it is not an independent audit.
- It does not disclose complete S3 architecture, all customer request impact, object-loss analysis, internal failure probabilities or financial damages.
- Current S3 multi-AZ storage documentation and current SLA terms may differ from 2017 design and contract details.
- The case does not show that Availability Zones are ineffective; it shows that redundancy protects only the failure mechanisms its boundaries actually separate.

## Sources

- https://aws.amazon.com/message/41926/
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/DataDurability.html
- https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html
- https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/static-stability.html
