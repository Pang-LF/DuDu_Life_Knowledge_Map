# Uber Horovod Distributed Training, 2017–2018

## Case ID

`CASE.UBER.HOROVOD.DISTRIBUTED_TRAINING.2017_2018`

## Why This Case Matters

Horovod exposes why collective semantics, algorithm structure and message size can matter as much as link speed. It also provides a useful comparison in which RDMA improved two already well-scaling models by only 3–4% but improved the more communication-bound VGG-16 by about 30%.

## Narrative

### Before

As Uber's models and datasets grew, some TensorFlow training jobs took a week or longer. Standard distributed TensorFlow used workers and parameter servers to aggregate gradients, but required substantial configuration and code restructuring.

### Pressure Builds

On benchmarks using 128 NVIDIA Pascal GPUs, the team reported that Inception V3 and ResNet-101 failed to use nearly half of the theoretical GPU capacity because of communication overhead. One parameter server could become a network or compute bottleneck; multiple servers could create broader all-to-all traffic.

### Turning Point

Uber adopted ring-allreduce, based on Baidu's implementation and the 2009 Patarasuk–Yuan algorithm, then replaced the early implementation with NVIDIA NCCL. Each rank sent chunks to two ring neighbors through reduce-scatter and all-gather rather than sending complete gradients through a central parameter server.

### Cascade

Timelines revealed that models with many layers produced many small allreduce operations. Ring allreduce can use bandwidth efficiently for sufficiently large buffers, but repeated small messages pay startup costs. Horovod therefore fused ready tensors of the same datatype into a shared buffer, ran one allreduce and copied results back.

### Decision

The team first changed the collective and software interface, then compared 25GbE TCP with RDMA-capable networking. This sequence separated algorithmic traffic distribution and message fusion from the transport improvement.

### Outcome

The paper reported 88% scaling efficiency for Inception V3 and ResNet-101 and training about twice as fast as standard distributed TensorFlow. RDMA added only about 3–4% for those models and pushed them above 90% efficiency, while VGG-16 improved about 30% because its parameter-heavy structure put communication on the critical path. Tensor Fusion produced up to 65% improvement in a stated unoptimized TCP setting for models with many layers.

### Aftermath

Horovod made collective communication, timeline tracing and fusion part of the training software layer. Later documentation continued to expose fusion thresholds, cycle timing and hierarchical collectives, while modern communication libraries select among ring, tree and hardware-assisted algorithms according to collective, topology and message size.

## Explained Numbers

- `128 GPUs`: scale at which the paper reported that standard distributed TensorFlow could not use nearly half of ideal single-GPU-multiplied capacity; it is not a hardware failure rate.
- `88% scaling efficiency`: reported Horovod result for Inception V3 and ResNet-101 relative to ideal scaling under the paper's benchmark conditions.
- `3–4%`: additional performance reported for Inception V3 and ResNet-101 with RDMA over the tested TCP setup; it does not imply RDMA is generally unimportant.
- `30%`: VGG-16 speedup with RDMA in the reported comparison, attributed to its communication-heavy critical path.
- `up to 65%`: maximum Tensor Fusion improvement reported in the stated unoptimized TCP experiments, not a universal expected gain.
- `64 MB`: historical default fusion buffer described in the 2018 paper; current software defaults and implementations can differ.

## Evidence Boundaries

- The benchmarks describe 2017–2018 TensorFlow, Pascal GPUs and 25GbE / RDMA systems, not current large-language-model clusters.
- Scaling efficiency depends on the single-GPU baseline, model, batch, software and hardware used in the paper.
- The comparison does not independently isolate every contribution from ring ordering, NCCL, MPI, fusion, topology, TCP and RDMA.
- Company and project sources establish implementation and reported benchmark results but do not disclose complete infrastructure costs or customer economics.
- Ring is not universally optimal; small messages, topology, rank count and hardware support can favor tree, hierarchical or other algorithms.

## Sources

- https://arxiv.org/abs/1802.05799
- https://github.com/horovod/horovod/blob/master/docs/tensor-fusion.rst
- https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/collectives.html
- https://github.com/NVIDIA/nccl-tests/blob/master/doc/PERFORMANCE.md
