# CASE.ALEXNET.GPU_PARALLEL_TRAINING.2012

## Case Name

AlexNet GPU Parallel Training and ImageNet, 2012（AlexNet GPU 并行训练与 ImageNet）

## Question

How did a workload, memory boundary, two-GPU partition and optimized software turn GPU parallel hardware into feasible large-scale neural-network training, and which evidence prevents attributing the result to GPU hardware alone?

## Narrative

- **Before:** Convolutional neural networks already existed, but high-resolution images, large datasets and high-capacity models made training compute and memory practical constraints; computer vision still relied heavily on hand-designed features.
- **Pressure Builds:** The model used about 1.2 million training images across 1,000 classes, roughly 60 million parameters, 650,000 neurons, five convolutional layers and three fully connected layers.
- **Turning Point:** The authors wrote optimized GPU convolution code and split the planned network across two GTX 580 GPUs because each had only 3 GB memory.
- **Cascade:** Many filter-position operations exposed regular parallel work; the network put half its kernels on each GPU and allowed cross-GPU communication at selected layers; the CPU prepared augmented batches while GPUs trained the preceding batch.
- **Decision:** The team accepted specialized code, batch size 128, a hand-chosen two-GPU communication topology and five-to-six-day training, while combining ReLU, data augmentation, dropout and weight decay.
- **Outcome:** After roughly 90 passes through the data, the described single CNN produced 18.2% top-5 test error; an ensemble averaging seven CNNs produced the 15.3% ILSVRC-2012 submission versus 26.2% for the second-best entry.
- **Aftermath:** The result made GPU-accelerated deep learning a central research path, but it did not isolate GPU hardware from model architecture, data, regularization, software optimization or ensembling.

## Mechanism

1. Convolution applies the same filter operation at many positions and across many images, exposing data parallelism.
2. Kernels map work into threads and hardware-scheduled warps; useful throughput depends on regular control and efficient data access.
3. Multiple resident warps let schedulers issue ready work while other warps wait on dependencies or memory.
4. The 3 GB per-GPU memory boundary required a model partition; selective communication traded additional model capacity against cross-GPU transfer.
5. CPU-side augmentation overlapped data preparation with GPU training, reducing pipeline idle time.

## Quantitative Reality

- Training set: about 1.2 million images, 1,000 classes.
- Network: about 60 million parameters and 650,000 neurons.
- Architecture: five convolutional and three fully connected layers.
- Hardware: two GTX 580 GPUs, 3 GB memory each.
- Batch size: 128.
- Training: about 90 dataset passes in five to six days.
- Single described CNN top-5 error: 18.2%.
- Seven-CNN ensemble ILSVRC-2012 top-5 test error: 15.3%.
- Second-best ILSVRC-2012 entry: 26.2%; gap 10.9 percentage points, about 41.6% relative to 26.2%.
- Two-GPU versus smaller one-GPU network: 1.7 / 1.2 percentage points lower top-1 / top-5 error, with the paper noting the comparison was biased in favor of the one-GPU network and was not a same-model speed experiment.

## Evidence Boundary

- The paper establishes its architecture, hardware, training procedure and reported competition results; it does not provide a same-model optimized CPU counterfactual.
- The 15.3% result belongs to an ensemble of seven CNNs, including models pretrained on a larger ImageNet release, not the single 18.2% CNN alone.
- The two-GPU and one-GPU networks differed in capacity, so their accuracy and training-time comparison does not identify a pure second-GPU effect.
- Architecture, ReLU, dropout, data augmentation, dataset scale, optimized convolution and ensembling all contribute; the competition gap cannot be attributed to GPU hardware alone.
- Current CUDA transaction and warp documentation explains general mechanisms but should not be treated as a cycle-accurate reconstruction of GTX 580 execution.

## Knowledge Attribution

- Mastery Core: `SYSTEM.COMPUTE.ACCELERATOR_GPU_PARALLELISM`
- Industry Application: `BUS.SEMICONDUCTOR.ACCELERATOR_PLATFORM_ECONOMICS`
- Review / Transfer: `SYSTEM.COMPUTE.FOUNDATION`, `SYSTEM.SEMICONDUCTOR.HBM_TSV_MEMORY_BANDWIDTH`, `SYSTEM.SEMICONDUCTOR.ADVANCED_PACKAGING_CHIPLETS_COMPOUND_YIELD`, `META.SYSTEMS.INTERDEPENDENCE`, `META.SYSTEMS.BOTTLENECK`
- Knowledge Expansion: convolutional neural networks, ReLU, data augmentation, dropout, ensembles and multi-GPU communication
- Connection Preview: roofline model, arithmetic intensity, precision, interconnect and AI infrastructure economics

## Sources

- https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html
- https://papers.nips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf
- https://docs.nvidia.com/cuda/cuda-programming-guide/03-advanced/advanced-kernel-programming.html
- https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/writing-cuda-kernels.html
- https://docs.nvidia.com/cuda/archive/13.1.1/cuda-programming-guide/01-introduction/introduction.html
- https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm
