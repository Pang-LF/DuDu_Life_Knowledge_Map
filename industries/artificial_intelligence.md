# Artificial Intelligence Industry Apprenticeship（人工智能行业学徒制）

## Scope

This apprenticeship follows how data, training, foundation models, inference, applications, agents and workflows become useful capabilities and business systems. It tracks content, metadata, model state, compute, money, rights, control and residual risk rather than treating AI as one model or one vendor.

## Progress

### 2026-11-26 — GPU-hours Are Not Validated Model Progress

- Continuity: continued directly from the completed 2026-11-25 Qualified Training Data lesson; no new completion gap was present, and the historical 2026-11-20 gap remains unfilled.
- Question: why can a training buyer pay for GPU-hours without purchasing validated model progress, and who bears the cost of completed runs whose checkpoints fail evaluation?
- Parent concept: Training fixes a model structure, qualified data, objective and update rule, then repeatedly changes parameters to improve performance within a named evaluation boundary.
- Core object: `FRONTIER.AI.TRAINING_FOUNDATION_PARAMETER_UPDATE` separates Prediction, Loss, Gradient, Backpropagation, Optimizer and held-out Evaluation instead of hiding them inside the phrase learned from error.
- Minimum unit: a scalar example starts with `x = 2`, `y = 1`, `w = 0`; prediction 0 and loss 0.5 produce gradient -2, and learning rate 0.1 moves the weight to 0.2 and loss to 0.18. Learning rate 1 instead overshoots to loss 4.5.
- Bell Labs evidence: the 1989 ZIP-code network used 2,578 independent parameters across 98,442 connections, trained on 9,840 examples and tested on 2,707; after 30 passes it reported 1.1% training error and 3.4% test error.
- Service boundary: rejecting 5.7% of the complete test set produced 1% error on the remainder, but thresholds were selected using test performance, so coverage and evaluation independence must remain explicit.
- Data boundary: the authors attributed about half of substitution errors to faulty segmentation and another quarter to wrong desired categories, showing that optimization can faithfully fit upstream defects.
- Vocabulary: Training Run, Checkpoint, Hyperparameter and Validated Model Progress are defined by the problem each solves, who controls it and what it does not prove.
- Money flow: model labs buy data, labor and infrastructure and usually bear research failure; providers can correctly bill resources without guaranteeing scientific progress; product and evaluation teams pay to qualify checkpoints before deployment.
- Transparent model: ten experiments using eight GPUs for 12 hours consume 960 GPU-hours; if two checkpoints pass evaluation, each accepted candidate absorbs 480 GPU-hours before data, labor, storage and recovery. These are hypothetical units, not a company bill.
- Status: `FRONTIER.AI.TRAINING_FOUNDATION_PARAMETER_UPDATE` and `BUS.AI.MODEL_TRAINING_ECONOMICS` at L1 candidate; Qualified Training Data, AI Infrastructure and prior compute nodes are review / transfer only.
- Next: Foundation Model Foundation — how a trained shared parameter state becomes reusable across tasks through pretraining, transfer and adaptation.

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
