# Google C4 Web-corpus Curation and Audit, 2019–2022

## Case ID

`CASE.GOOGLE.C4.WEB_CORPUS.CURATION.2019_2022`

## Why This Case Matters

C4 makes training-data qualification visible. One April 2019 Common Crawl snapshot became a widely used English pretraining corpus only after researchers encoded natural-language, language, duplication and content judgments into scalable rules. Later audits showed that the same rules that improved efficiency and benchmark performance also changed representation and left contamination and documentation risks.

## Narrative

### Before

Wikipedia and curated text corpora were relatively clean but limited in scale and diversity. Common Crawl supplied web-extracted text at enormous scale, but raw pages contained navigation, boilerplate, errors, placeholder text, source code, duplicates, mixed languages and harmful content. A model lab needed an object that could be processed repeatedly, not merely an archive of pages.

### Pressure Builds

Manual review could not scale to hundreds of millions of documents. Every curation decision therefore had to become a low-cost executable rule. The T5 team needed to reduce noise and concentrate on natural English while preserving enough volume for transfer-learning experiments.

### Turning Point

The team downloaded web-extracted text from the April 2019 Common Crawl snapshot. It retained lines ending in terminal punctuation, removed pages with fewer than five sentences, retained lines with at least three words, removed pages containing blocklisted words, Javascript, `lorem ipsum` or a left curly bracket, deduplicated repeated three-sentence spans, and required an English-classification probability of at least 0.99. The resulting corpus was named the Colossal Clean Crawled Corpus, or C4.

### Cascade

The rules reduced templates, repeated spans and non-English text, but they also promoted standard English prose and removed mixed-language, code, medical, legal and identity-related content in ways that depended on the heuristic. The corpus was no longer a neutral web sample: each rule changed which sources and expressions could receive training weight.

### Decision

The T5 team chose scalable heuristics, published the dataset through TensorFlow Datasets and released code. This made the corpus usable and inspectable, but did not settle uniform rights, social representation, benchmark contamination or the independent causal contribution of each filter.

### Outcome

The T5 paper listed filtered C4 at 745 GB and its English-classified but otherwise unfiltered variant at 6.1 TB. In the same experiment, filtered C4 scored higher on all seven listed downstream metrics, including GLUE 83.28 versus 81.46, SQuAD 80.88 versus 78.78 and SuperGLUE 71.36 versus 68.04. The result supports task-specific curation value, not a universal rule that more filtering is always better.

### Aftermath

Dodge et al. rebuilt and documented C4 variants. Their compressed-JSON C4.EN.NOBLOCKLIST had 395 million documents, 198 billion SpaCy tokens and 380 GB; C4.EN had 365 million documents, 156 billion tokens and 305 GB. A 100,000-document sample of blocklist exclusions showed that only 31% of excluded documents belonged to clusters largely sexual in nature, while other clusters included science, medicine, law and politics. Proxy dialect analysis found higher removal rates for African-American-English-aligned and Hispanic-aligned documents than for White-aligned English. Separate deduplication research found a 61-word sentence repeated more than 60,000 times in C4 and reported substantially lower memorized output after stronger deduplication.

## Explained Numbers

- `745 GB / 6.1 TB`: the T5 paper's filtered and unfiltered variants in one experimental comparison. Filtered C4 is roughly one-eighth the size, but GB/TB accounting and output formats do not justify a more precise universal retention percentage.
- `83.28 versus 81.46 GLUE`, `80.88 versus 78.78 SQuAD`, `71.36 versus 68.04 SuperGLUE`: same-paper outcomes for filtered versus unfiltered C4. They do not isolate one filter or prove downstream deployment quality.
- `395M to 365M documents`: about 30 million fewer documents, or 7.6%, between Dodge's no-blocklist and final variants.
- `198B to 156B tokens`: about 42 billion fewer tokens, or 21.2%, across the same two variants; removed documents were longer on average than retained documents under this accounting.
- `31%`: share of the 100,000 sampled excluded documents assigned to 16 clusters largely sexual in nature. It is a cluster-based audit result, not a complete manual label of all excluded pages.
- `42%, 32%, 6.2%`: estimated blocklist-removal rates for African-American-English-aligned, Hispanic-aligned and White-aligned English under a proxy model trained on geolocated tweets. They are not author-identity ground truth.
- `53.6% and 1.8%`: normalized exact-match rates for QNLI sentence and question components in C4.EN. Exact overlap signals contamination risk but does not demonstrate label leakage or causal score inflation in every case.
- `806.87 GiB, 364,613,570 training examples`: current TensorFlow Datasets catalog figures for default English C4; they use a different release and accounting boundary from the T5 and Dodge numbers.

## Meaningful Comparison

Raw means captured. Clean means a particular set of technical or content rules was applied. Licensed means a usage-right boundary exists. Labeled means a target signal was attached. Qualified means the record is accepted for a named training purpose under explicit provenance, rights, representation, split, reproducibility and audit conditions. None of the earlier labels alone implies the last.

## Counterfactual

Without filtering, more duplicated and malformed text would consume compute, but public evidence does not identify the performance loss attributable to each rule. Without blocklist filtering, more harmful content would remain, but the audit shows that more legitimate medical, legal and minority-related content would also remain. A better pipeline might use context-sensitive classifiers, stratified sampling and rights-aware manifests, but it would require new error audits and task-specific evaluation.

## Evidence Boundaries

- T5 paper sizes, current TensorFlow Datasets sizes and Dodge compressed-JSON sizes use different versions, formats and accounting boundaries.
- T5 applied multiple filters together, so its downstream comparison does not identify any one rule's causal effect.
- Dodge's dialect and geolocation results use proxies and should not be treated as author identity or location truth.
- Exact benchmark matches are a contamination warning, not proof that a particular model cheated or gained a quantified score advantage.
- Common Crawl's free archive access does not establish a uniform training license for every underlying page; the case makes no legal determination.
- C4 represents English web text and cannot by itself establish results for images, audio, proprietary records or current closed-model datasets.

## Sources

- https://www.jmlr.org/papers/volume21/20-074/20-074.pdf
- https://aclanthology.org/2021.emnlp-main.98.pdf
- https://arxiv.org/abs/2107.06499
- https://www.tensorflow.org/datasets/catalog/c4
- https://commoncrawl.org/get-started
- https://commoncrawl.org/the-data/get-started
