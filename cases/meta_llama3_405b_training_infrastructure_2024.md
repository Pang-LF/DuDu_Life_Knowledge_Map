# Meta Llama 3.1 405B Training Infrastructure, 2024

## Case ID

`CASE.META.LLAMA3_405B.TRAINING_INFRASTRUCTURE.2024`

## Why This Case Matters

Llama 3.1 405B makes the semiconductor-to-cloud chain observable through one workload. Its training required model and optimizer state to fit across HBM, computation to remain synchronized across as many as 16,384 H100 GPUs, checkpoints to survive failures, and power, cooling, networking, storage and repair systems to preserve useful progress. It is therefore a stronger integration test than any single component benchmark.

## Narrative

### Before

Small jobs can often restart on another machine and hide local hardware faults. A frontier-scale synchronous training job is different: thousands of workers jointly produce one model update, so one slow or failed worker can reduce the progress of the entire group.

### Pressure Builds

Meta reported that Llama 3.1 405B used 405 billion parameters, 15.6 trillion training tokens and about `3.8 × 10^25` FLOPs. Weights alone would occupy about 810 GB in BF16, more than ten times one H100's 80 GB HBM, before gradients, optimizer state and activations. The workload therefore required four-dimensional parallelism and collective communication rather than simply assigning the model to one faster device.

### Turning Point

Meta trained on up to 16,384 H100 GPUs. Its Grand Teton server had eight GPUs and two CPUs, implying 2,048 eight-GPU servers at the largest disclosed configuration. The clusters used 400 Gbps RoCE endpoints and combined local high-bandwidth links, pod-level full bisection and an oversubscribed aggregation layer.

### Cascade

One validated step depended on every participating worker receiving data, executing the correct kernels, exchanging partial state, avoiding straggling, and preserving a checkpoint. During a 54-day snapshot Meta recorded 466 job interruptions: 47 planned and 419 unexpected. Hardware was the dominant confirmed or suspected category. A failed GPU, HBM error, network switch, cable, host maintenance event, software bug, thermal sensor or silent corruption could force recovery across the whole job.

### Decision

Meta co-designed model parallelism, topology-aware collectives, storage, checkpointing, diagnostics, scheduling, spare capacity, firmware and physical thermal operation. It used 240 PB of storage with 2 TB/s sustainable and 7 TB/s peak throughput, and developed automation so only three interruptions in the snapshot required significant manual intervention.

### Outcome

Meta reported BF16 model-FLOP utilization of 43% at 8,192 GPUs and 8K context, 41% at 16,384 GPUs and 8K context, and 38% at 16,384 GPUs and 128K context. It also reported more than 90% effective training time. These are different measures: MFU compares executed model arithmetic with accelerator peak, while effective training time measures elapsed time spent training rather than recovering or waiting. They should not be multiplied into an exact public goodput estimate without aligned definitions.

### Aftermath

The case shows that the binding constraint can move. Model-fit pressure points toward HBM and sharding; steady-state steps expose compute and collectives; long context raises memory and communication pressure; failures make checkpointing, diagnosis and spares part of throughput; warmer operating periods changed throughput by 1–2%; expansion can move the constraint upstream into qualified HBM, packaging, fabrication or power. Public case evidence does not identify which upstream manufacturing layer bound Meta's purchases.

## Explained Numbers

- `405B × 2 bytes ≈ 810 GB`: a transparent weights-only BF16 calculation. It excludes gradients, optimizer state and activations and therefore understates training memory demand.
- `16,384 / 8 = 2,048 servers`: nominal server count at eight GPUs per Grand Teton server; this does not say every server was always active or useful.
- `16,384 × 80 GB = 1.31 PB HBM`: aggregate installed HBM at the disclosed maximum configuration. It is not one flat shared memory pool because topology and parallelism govern access.
- `16,384 × 700 W ≈ 11.47 MW`: GPU-only nameplate TDP. It excludes CPUs, NICs, storage, power conversion and cooling and is not measured average demand.
- `419 / 54 ≈ 7.76`: unexpected job interruptions per day across the observed job, roughly one every 3.1 hours. It is not a component MTBF because many components and event classes share the denominator.
- `30.84 million H100 GPU-hours`: model-card resource usage attributed to the 405B model. It is not the wall-clock duration, purchase price or total training bill.

## Meaningful Comparison

Installed capacity answers how many devices exist. Runnable capacity removes devices that cannot join the job. Active capacity removes scheduled idle time. Useful compute removes arithmetic and communication that do not advance the intended model step. Preserved progress removes work lost to invalid results or recovery. Only the final boundary matches the training objective.

## Counterfactual

If network collectives were the binding constraint, adding GPUs without topology or communication relief could reduce scaling efficiency. If model state did not fit, a faster network alone would not make the job runnable. If faults dominated elapsed time, more spare capacity and faster checkpoint recovery could outperform more nominal FLOPs. Identifying the current constraint requires marginal-intervention evidence, not the component's purchase price.

## Evidence Boundaries

- The 54 days describe a reliability snapshot, not the complete Llama 3.1 training duration.
- The model card's 30.84 million H100 GPU-hours and the paper's 54-day snapshot use different boundaries and cannot be combined to infer wall time.
- The paper's interruption table prints 148 faulty-GPU events as 30.1%, while `148 / 419 ≈ 35.3%`; counts are retained, and that printed percentage is not repeated as corrected fact.
- Meta's engineering reports support its architecture and operating claims but do not reveal confidential prices, supplier allocations or a clean counterfactual for each optimization.
- Public evidence does not establish whether wafer, fabrication, advanced packaging, HBM or another upstream layer was the procurement bottleneck.

## Sources

- https://arxiv.org/html/2407.21783
- https://raw.githubusercontent.com/meta-llama/llama-models/main/models/llama3_1/MODEL_CARD.md
- https://engineering.fb.com/2024/03/12/data-center-engineering/building-metas-genai-infrastructure/
- https://engineering.fb.com/2024/06/12/data-infrastructure/training-large-language-models-at-scale-meta/
- https://engineering.fb.com/wp-content/uploads/2024/08/sigcomm24-final246.pdf
