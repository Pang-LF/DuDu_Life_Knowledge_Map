# Artificial Intelligence Industry Apprenticeship（人工智能行业学徒制）

## Scope

This apprenticeship follows how data, training, foundation models, inference, applications, agents and workflows become useful capabilities and business systems. It tracks content, metadata, model state, compute, money, rights, control and residual risk rather than treating AI as one model or one vendor.

## Progress

### 2026-11-25 — Free Web Access Is Not Free Qualified Training Data

- Continuity: entered the Artificial Intelligence module directly from the completed 2026-11-24 AI Infrastructure Bridge; no new completion gap was present, and the historical 2026-11-20 gap remains unfilled.
- Question: when does one crawled web record become qualified training input, why is free access not zero-cost data, and who pays for curation and governance?
- Parent concept: an AI System coordinates data, training objective, algorithm, compute, evaluation, deployment, oversight and feedback; a training workload updates parameters from qualified inputs against an objective.
- Core object: `FRONTIER.AI.QUALIFIED_TRAINING_DATA_FOUNDATION` defines qualified data as versioned records accepted for a named purpose after provenance, rights, extraction, integrity, relevance, deduplication, safety, representation, split, contamination and reproducibility gates.
- Minimum unit: one clinic webpage is followed from Common Crawl capture through stable identity, rights review, text extraction, language and content filtering, duplicate handling, label-status declaration, train / validation / test separation and a versioned manifest.
- C4 evidence: the T5 paper compared 745 GB filtered C4 with a 6.1 TB English-classified unfiltered variant; filtered C4 scored higher on all seven listed downstream metrics, but the experiment did not isolate individual filters or establish universal quality.
- Audit evidence: Dodge et al. reported 395M documents / 198B tokens / 380 GB for a no-blocklist variant and 365M / 156B / 305 GB for final C4.EN. These compressed-JSON figures cannot be merged with T5 or current TFDS sizes.
- Representation boundary: a 100,000-document exclusion sample found only 31% of excluded documents in clusters largely sexual in nature; proxy dialect classification estimated uneven removal rates, but it is not author-identity ground truth and does not by itself prove downstream-model harm.
- Contamination boundary: normalized exact overlap ranged from below 2% to above 50% across benchmark components; overlap warns that evaluation independence can fail but does not prove label leakage or quantified score inflation.
- Industry roles: creators / rights holders, crawlers / archives, licensors, dataset builders, annotators, infrastructure providers, model labs and the public control different assets, payments, rights, deletion paths and residual risks.
- Vocabulary: Data Curation, Provenance, Deduplication and Data Contamination are defined by the problem each solves, who pays, who benefits, an example and common misunderstandings.
- Money and power: archives can make bytes free while labs still pay engineering, compute, review, licensing, governance, deletion and rebuild costs; durable power can come from qualified proprietary inputs, licenses, data-production relationships, curation systems and feedback loops rather than raw byte count.
- Status: `FRONTIER.AI.QUALIFIED_TRAINING_DATA_FOUNDATION` and `BUS.AI.TRAINING_DATA_SUPPLY_GOVERNANCE` at L1 candidate; prior compute and systems nodes are review / transfer only.
- Next: Training Foundation — how prediction, loss, gradient and parameter update write statistical structure from one qualified example into a model.
