const questions = [
  // ===== BIOINFORMATICS: ALIGNMENT & VARIANT CALLING (Q1–Q10) =====
  {
    id: 1,
    question: "BWA-MEM is a widely used bioinformatics tool for:",
    options: ["Variant calling", "Aligning short reads to a reference genome", "De novo genome assembly", "RNA-seq differential expression analysis"],
    answer: 1,
    explanation: "BWA-MEM (Burrows-Wheeler Aligner - Maximal Exact Match) is the most widely used short-read aligner for WGS and WES data. It uses the FM-index (based on Burrows-Wheeler transform) for efficient seed finding, followed by Smith-Waterman-like extension for local alignment. BWA-MEM handles reads from 70 bp to 1 Mbp, supports split-read alignment for structural variant detection, and outputs SAM/BAM format."
  },
  {
    id: 2,
    question: "The SAM/BAM file format stores:",
    options: ["Raw unaligned reads", "Aligned sequencing reads with mapping coordinates, quality, and metadata", "Variant calls", "Gene expression levels"],
    answer: 1,
    explanation: "SAM (Sequence Alignment/Map) is a tab-delimited text format storing aligned reads with information including: read name, alignment flag, chromosome and position, mapping quality (MAPQ), CIGAR string (alignment operations), mate information, and optional tags. BAM is the compressed binary equivalent. CRAM is an even more compressed format using reference-based compression."
  },
  {
    id: 3,
    question: "The CIGAR string in a SAM record describes:",
    options: ["Base quality scores", "The alignment of a read to the reference, including matches, insertions, and deletions", "Read barcode information", "Paired-end insert size"],
    answer: 1,
    explanation: "CIGAR (Compact Idiosyncratic Gapped Alignment Report) uses letter codes to describe alignment operations: M (match/mismatch), I (insertion to reference), D (deletion from reference), N (skipped region/intron), S (soft clip), H (hard clip). For example, '50M2I30M' means 50 matched bases, 2-base insertion, then 30 matched bases. CIGAR strings are essential for reconstructing the alignment from SAM records."
  },
  {
    id: 4,
    question: "GATK (Genome Analysis Toolkit) HaplotypeCaller performs variant calling by:",
    options: ["Simple pileup counting", "Local de novo assembly of haplotypes in active regions followed by pair-HMM likelihood evaluation", "Comparing raw reads without alignment", "Using machine learning only"],
    answer: 1,
    explanation: "HaplotypeCaller identifies active regions with evidence of variation, performs local de novo assembly to construct candidate haplotypes, realigns reads to these haplotypes using a pair hidden Markov model (pair-HMM), and calculates genotype likelihoods. This approach is more accurate than simple pileup-based callers, especially for indels and complex variants. It outputs gVCF files for joint genotyping across cohorts."
  },
  {
    id: 5,
    question: "Variant Quality Score Recalibration (VQSR) in GATK uses:",
    options: ["Hard filtering thresholds", "A machine learning model trained on known true variant sites to separate true variants from artifacts", "Manual curation of each variant", "Sanger sequencing validation"],
    answer: 1,
    explanation: "VQSR builds a Gaussian mixture model using variant annotations (QD, FS, SOR, MQ, MQRankSum, ReadPosRankSum) trained on known true positive sites (HapMap, 1000 Genomes, dbSNP). The model assigns a VQSLOD score to each variant, enabling probabilistic filtering. VQSR is more accurate than hard filtering but requires sufficient variant numbers (typically WGS or large WES cohorts). For small datasets, hard filtering is used instead."
  },
  {
    id: 6,
    question: "The VCF (Variant Call Format) file contains:",
    options: ["Raw sequencing reads", "Aligned read coordinates", "Variant positions, reference/alternate alleles, quality scores, and genotype information", "Gene expression values"],
    answer: 2,
    explanation: "VCF is the standard format for variant calls, containing: header lines (metadata, INFO/FORMAT field definitions), and data lines with: chromosome, position, ID, reference allele, alternate allele(s), quality score (QUAL), filter status, INFO field (variant annotations), FORMAT field definitions, and per-sample genotype data (GT, AD, DP, GQ, PL). gVCF extends VCF to include reference-confident positions."
  },
  {
    id: 7,
    question: "Mapping quality (MAPQ) score of 0 indicates:",
    options: ["Perfect alignment", "The read maps equally well to multiple locations in the genome", "The read failed quality control", "The read contains no mismatches"],
    answer: 1,
    explanation: "MAPQ represents the confidence that a read is aligned to the correct position, expressed as -10 × log₁₀(probability of incorrect mapping). MAPQ 0 means the read maps equally well to multiple locations (50% or higher probability of wrong placement). MAPQ 60 indicates a unique, high-confidence mapping. Reads in repetitive regions typically have low MAPQ and are often filtered from variant calling."
  },
  {
    id: 8,
    question: "Base Quality Score Recalibration (BQSR) in GATK adjusts quality scores by:",
    options: ["Increasing all quality scores uniformly", "Modeling systematic errors based on sequence context, machine cycle, and read group", "Removing low-quality reads entirely", "Recalibrating only the first base of each read"],
    answer: 1,
    explanation: "BQSR corrects systematic biases in base quality scores that arise from sequencing chemistry effects. It builds an empirical error model considering covariates like read group, quality score, machine cycle (position in read), and dinucleotide context. Known variant sites (dbSNP) are masked to distinguish true variants from errors. Recalibrated quality scores more accurately reflect true error probabilities."
  },
  {
    id: 9,
    question: "DeepVariant, developed by Google, differs from traditional variant callers in that it:",
    options: ["Uses only Sanger validation", "Encodes pileup images and uses a deep convolutional neural network for variant calling", "Requires no reference genome", "Only calls structural variants"],
    answer: 1,
    explanation: "DeepVariant converts aligned reads at each position into a pileup image (encoding read bases, quality scores, strand, and other features as pixel channels), then uses a trained convolutional neural network (Inception v3 architecture) to classify each position as homozygous reference, heterozygous variant, or homozygous variant. It achieves accuracy comparable to or exceeding GATK HaplotypeCaller, especially for indels."
  },
  {
    id: 10,
    question: "Joint calling in a cohort (e.g., GATK GenotypeGVCFs) improves variant detection by:",
    options: ["Reducing sequencing cost", "Leveraging information across samples to improve genotyping accuracy, especially at low-coverage sites", "Eliminating the need for alignment", "Sequencing each sample at higher depth"],
    answer: 1,
    explanation: "Joint calling combines per-sample gVCF files and genotypes all samples simultaneously. This leverages population-level information: a variant confidently called in some samples increases sensitivity to detect it in others with lower evidence. It also enables accurate estimation of allele frequencies and identification of batch effects. Joint calling is standard for large cohort studies and family trio analysis."
  },

  // ===== VARIANT ANNOTATION & INTERPRETATION (Q11–Q20) =====
  {
    id: 11,
    question: "ACMG/AMP variant classification uses which categories?",
    options: ["Deleterious, tolerated, unknown", "Pathogenic, likely pathogenic, VUS, likely benign, benign", "High impact, moderate impact, low impact", "Class 1-10"],
    answer: 1,
    explanation: "The ACMG/AMP (2015) framework classifies sequence variants into five tiers: pathogenic, likely pathogenic, variant of uncertain significance (VUS), likely benign, and benign. Classification integrates multiple evidence types: population frequency (gnomAD), computational predictions (REVEL, CADD), functional data, segregation, de novo status, and clinical databases (ClinVar). 'Likely' implies >90% certainty."
  },
  {
    id: 12,
    question: "ClinVar is a database that archives:",
    options: ["Raw sequencing data", "Relationships between genomic variants and clinical phenotypes with supporting evidence", "Protein structures", "Gene expression profiles"],
    answer: 1,
    explanation: "ClinVar is an NCBI database aggregating submissions from clinical laboratories, research groups, and expert panels regarding the clinical significance of genomic variants. Each variant has submissions with interpretations (pathogenic to benign), condition associations, evidence summaries, and review status (from single submitter to expert panel). ClinVar is essential for clinical variant interpretation but may contain conflicting classifications."
  },
  {
    id: 13,
    question: "The CADD (Combined Annotation Dependent Depletion) score predicts:",
    options: ["Population allele frequency", "The deleteriousness of a variant by integrating multiple annotations", "Gene expression levels", "Protein-protein interactions"],
    answer: 1,
    explanation: "CADD integrates >60 genomic annotations (conservation, regulatory, protein-level effects, etc.) into a single score using a machine learning model trained to distinguish simulated de novo mutations from fixed variants. CADD scores are Phred-scaled: CADD 10 = top 10% most deleterious, CADD 20 = top 1%, CADD 30 = top 0.1%. CADD can score coding and non-coding variants, SNVs, and indels."
  },
  {
    id: 14,
    question: "gnomAD is used in variant interpretation primarily to assess:",
    options: ["Functional impact through protein modeling", "Allele frequency across diverse populations to filter common benign variants", "Gene-disease associations", "Epigenetic modifications"],
    answer: 1,
    explanation: "gnomAD (Genome Aggregation Database) provides allele frequencies from >800,000 individuals across diverse ancestries. In clinical variant interpretation, population frequency is a critical filter — variants common in gnomAD (e.g., >0.01%) are unlikely to cause rare Mendelian disease. gnomAD also provides constraint metrics (pLI, LOEUF) indicating genes' tolerance to loss-of-function variants."
  },
  {
    id: 15,
    question: "The pLI score from gnomAD measures:",
    options: ["Protein-ligand interactions", "The probability that a gene is intolerant to loss-of-function variants", "Pathogenicity of individual variants", "Linkage disequilibrium between variants"],
    answer: 1,
    explanation: "pLI (probability of being loss-of-function intolerant) ranges from 0 to 1. Genes with pLI ≥ 0.9 are considered highly intolerant to heterozygous loss-of-function (LoF) variants, suggesting haploinsufficiency. These genes have significantly fewer observed LoF variants than expected. High-pLI genes are enriched for dominant disease genes. The newer LOEUF (LoF observed/expected upper bound fraction) metric is preferred for continuous constraint assessment."
  },
  {
    id: 16,
    question: "SpliceAI is a deep learning tool that predicts:",
    options: ["Protein stability changes", "The impact of variants on pre-mRNA splicing (cryptic splice site creation/disruption)", "Drug-gene interactions", "Copy number changes"],
    answer: 1,
    explanation: "SpliceAI uses a deep residual neural network trained on human splice site annotations to predict the effect of any variant (coding or non-coding) on splicing. It outputs delta scores (0-1) for splice gain and loss at each position. SpliceAI can identify cryptic splice variants deep in introns that are missed by canonical splice site analysis, significantly improving diagnostic yield for unresolved cases."
  },
  {
    id: 17,
    question: "HGVS nomenclature 'c.1A>G' describes:",
    options: ["A genomic variant", "A coding DNA variant where adenine at position 1 is changed to guanine", "A protein variant", "An RNA variant"],
    answer: 1,
    explanation: "HGVS (Human Genome Variation Society) nomenclature standardizes variant descriptions. The prefix indicates the reference sequence type: 'c.' = coding DNA, 'g.' = genomic, 'p.' = protein, 'r.' = RNA, 'm.' = mitochondrial. 'c.1A>G' means at position 1 of the coding sequence, adenine (A) is substituted with guanine (G). Correct HGVS nomenclature is essential for unambiguous variant communication in clinical reports."
  },
  {
    id: 18,
    question: "OMIM (Online Mendelian Inheritance in Man) is a database that catalogs:",
    options: ["Protein structures", "Human genes, genetic disorders, and genotype-phenotype relationships", "Drug interactions", "Microbial genomes"],
    answer: 1,
    explanation: "OMIM is a comprehensive, curated database of human genes and genetic conditions, maintained by Johns Hopkins University. Each entry includes gene function, associated phenotypes, inheritance patterns, molecular basis, and clinical features with references. OMIM numbers are used universally in clinical genetics. MIM entries are categorized as genes (*), phenotypes (#), gene/phenotype (+), or others."
  },
  {
    id: 19,
    question: "Functional studies to validate variant pathogenicity may include all of the following EXCEPT:",
    options: ["In vitro enzyme activity assays", "CRISPR-engineered cell or animal models", "Population frequency analysis", "Minigene splicing assays"],
    answer: 2,
    explanation: "Functional studies directly assess variant impact on protein/gene function and include: enzyme assays (measuring activity of mutant vs. wild-type protein), minigene assays (testing splicing effects), cellular models (patient-derived or CRISPR-engineered), and animal models. Population frequency analysis is an epidemiological assessment, not a functional study, though it provides important evidence for variant classification."
  },
  {
    id: 20,
    question: "Variant reanalysis (periodic re-interpretation of genomic data) is recommended because:",
    options: ["Sequencing technology changes the raw data", "New gene-disease associations, functional evidence, and population data can reclassify VUS", "It generates additional revenue", "Original sequencing was incorrect"],
    answer: 1,
    explanation: "Approximately 10-15% of VUS are reclassified upon reanalysis (mostly to likely benign/benign, but some to likely pathogenic/pathogenic). New gene-disease associations are published regularly, gnomAD and ClinVar grow continuously, and new functional evidence accumulates. ACMG recommends periodic reanalysis, which increases overall diagnostic yield by 5-15% in previously undiagnosed cases."
  },

  // ===== STRUCTURAL VARIANT DETECTION (Q21–Q30) =====
  {
    id: 21,
    question: "Structural variants (SVs) are defined as genomic alterations larger than:",
    options: ["1 bp", "10 bp", "50 bp", "1 kb"],
    answer: 2,
    explanation: "Structural variants are conventionally defined as genomic rearrangements ≥50 bp, including deletions, duplications, insertions, inversions, and translocations. They are distinguished from indels (<50 bp) and SNVs (1 bp). SVs contribute significantly to human genetic diversity and disease — a typical genome contains ~20,000-30,000 SVs affecting more base pairs than SNVs combined."
  },
  {
    id: 22,
    question: "Split-read analysis in SV detection identifies variants by:",
    options: ["Counting read depth", "Reads that partially align to two different locations, indicating a breakpoint within the read", "Comparing paired-end insert sizes", "De novo assembly only"],
    answer: 1,
    explanation: "Split-read analysis identifies reads where one portion aligns to one genomic location and the remaining portion aligns to a different location, with the split point representing the SV breakpoint. This provides single-nucleotide resolution of breakpoints. Soft-clipped alignments in BAM files (CIGAR 'S' operations) are primary sources of split-read evidence. Tools like DELLY, Manta, and LUMPY use split-read signals."
  },
  {
    id: 23,
    question: "Discordant read pairs in SV detection are defined as:",
    options: ["Pairs with low base quality", "Paired-end reads with unexpected insert size or orientation relative to the reference", "Reads that fail to align", "Duplicate read pairs"],
    answer: 1,
    explanation: "Discordant read pairs deviate from expected insert size (too large = deletion, too small = insertion/duplication) or have unexpected orientation (both reads same direction = inversion, reads on different chromosomes = translocation). Concordant pairs align with expected insert size and orientation (→ ← for Illumina). SV callers cluster discordant pairs to identify candidate structural variants."
  },
  {
    id: 24,
    question: "Read depth (coverage) analysis for CNV detection works on the principle that:",
    options: ["Deleted regions have zero quality scores", "Copy number is proportional to read depth — deletions show reduced depth, duplications show increased depth", "All reads in CNV regions are unmapped", "CNVs change base quality scores"],
    answer: 1,
    explanation: "Read depth-based CNV detection normalizes read counts across genomic bins and identifies regions with significantly higher (duplication) or lower (deletion) depth than expected. This approach is particularly effective for large CNVs and is the basis of clinical tools like ExomeDepth, CNVkit, and GATK gCNV. GC correction, mappability masking, and principal component analysis improve accuracy."
  },
  {
    id: 25,
    question: "Manta is a bioinformatics tool specifically designed for:",
    options: ["SNV calling", "Structural variant and indel detection from short-read data", "RNA-seq analysis", "Genome assembly"],
    answer: 1,
    explanation: "Manta (Illumina) is an SV caller that uses discordant read pairs, split reads, and local assembly evidence to detect deletions, duplications, insertions, inversions, and translocations. It is optimized for both germline and somatic SV analysis and is noted for high sensitivity and computational efficiency. Manta is commonly used in clinical genomics pipelines alongside SNV/indel callers."
  },
  {
    id: 26,
    question: "Long-read sequencing improves SV detection compared to short reads primarily because:",
    options: ["It has lower error rates", "Single reads can span entire SVs and their breakpoints, eliminating inference from read pairs", "It is cheaper", "It requires simpler bioinformatics"],
    answer: 1,
    explanation: "Long reads (10-100+ kb) can span entire structural variants including both breakpoints, providing direct evidence rather than inferring SVs from discordant short-read pairs. This is especially important for SVs in repetitive regions, complex rearrangements, and insertions of novel sequence. Long-read callers (Sniffles, SVIM, cuteSV) typically detect 2-3x more SVs than short-read callers, with better breakpoint accuracy."
  },
  {
    id: 27,
    question: "Optical genome mapping (OGM) by Bionano detects structural variants by:",
    options: ["Sequencing DNA", "Labeling ultra-long DNA molecules at specific motifs and comparing patterns to a reference", "PCR amplification of breakpoints", "Karyotyping"],
    answer: 1,
    explanation: "Bionano OGM labels DNA molecules (>150 kb) at specific 6-bp motifs using a nicking enzyme or direct labeling. Labeled molecules are linearized in nanochannel arrays and imaged. The fluorescent label pattern is compared to a reference to identify SVs (deletions, duplications, inversions, translocations, and insertions). OGM can detect balanced rearrangements missed by CMA and is emerging as a complement to cytogenetics."
  },
  {
    id: 28,
    question: "Chromothripsis detected by WGS is characterized by:",
    options: ["Single point mutations", "Massive chromosomal rearrangements clustered on one or few chromosomes with oscillating copy number states", "Gradual accumulation of balanced translocations", "Uniform genome-wide copy number gain"],
    answer: 1,
    explanation: "Chromothripsis ('chromosome shattering') involves catastrophic breakage of one or few chromosomes followed by random reassembly. WGS reveals clustered breakpoints with oscillating copy number states (typically 2 states) and random orientation of rearranged fragments. It occurs in ~2-3% of cancers (higher in specific types like osteosarcoma) and can also cause severe congenital anomalies when occurring in germ cells."
  },
  {
    id: 29,
    question: "Short tandem repeat (STR) expansion disorders can be genotyped from WGS data using tools like:",
    options: ["GATK HaplotypeCaller only", "ExpansionHunter and STRipy", "BWA-MEM alone", "FastQC"],
    answer: 1,
    explanation: "ExpansionHunter (Illumina) uses paired-end WGS reads to estimate the size of STR expansions, including those much larger than the read length. It classifies supporting reads into spanning (contain entire repeat), flanking (anchor in flanking sequence, extend into repeat), and in-repeat reads. STRipy provides a web interface for clinical STR analysis. These tools enable diagnosis of repeat expansion disorders (Fragile X, Huntington, SCAs) from WGS data."
  },
  {
    id: 30,
    question: "The advantage of using multiple SV callers and an ensemble approach is:",
    options: ["Faster runtime", "Higher sensitivity and reduced false positives by requiring concordance between methods", "Lower computational cost", "Simplified data management"],
    answer: 1,
    explanation: "Individual SV callers have different strengths and biases — some excel at deletions but miss insertions, others are better for large vs. small SVs. Ensemble approaches (e.g., SURVIVOR, Parliament2) merge calls from multiple tools and require concordance (e.g., ≥2 callers agreeing) to improve precision while maintaining sensitivity. This is the recommended practice for comprehensive SV analysis in research and clinical genomics."
  },

  // ===== SOMATIC/CANCER GENOMICS (Q31–Q40) =====
  {
    id: 31,
    question: "Somatic variant calling differs from germline variant calling because somatic variants:",
    options: ["Are always homozygous", "May be present at low variant allele frequencies due to tumor heterogeneity and admixed normal cells", "Are always in coding regions", "Do not require a reference genome"],
    answer: 1,
    explanation: "Somatic mutations may be present in only a subclone of tumor cells (intratumor heterogeneity) and are diluted by admixed normal cells (tumor purity). Variant allele frequencies (VAF) can range from <1% to 50%+, compared to germline variants at ~50% (het) or ~100% (hom). This requires specialized callers (Mutect2, Strelka2), higher coverage (100-500x), and paired tumor-normal analysis to distinguish somatic from germline variants."
  },
  {
    id: 32,
    question: "Tumor mutational burden (TMB) is defined as:",
    options: ["The total number of chromosomal translocations", "The number of somatic mutations per megabase of coding sequence", "The number of germline variants", "The number of gene fusions"],
    answer: 1,
    explanation: "TMB quantifies the total number of somatic coding mutations per megabase (mut/Mb) sequenced. High TMB (≥10 mut/Mb by FDA-approved companion diagnostic) correlates with increased neoantigen production and response to immune checkpoint inhibitors (pembrolizumab). TMB is highest in melanoma, NSCLC (smokers), and MSI-H tumors. TMB can be estimated from WES or large targeted panels (≥1 Mb)."
  },
  {
    id: 33,
    question: "Microsatellite instability (MSI) can be assessed by NGS through:",
    options: ["Karyotyping", "Analyzing the length distribution of microsatellite loci from sequencing data", "Measuring DNA methylation globally", "Counting total read number"],
    answer: 1,
    explanation: "NGS-based MSI assessment evaluates the length variability of microsatellite loci from sequencing data. Tools like MSIsensor, mSINGS, and MSIseq analyze the distribution of repeat lengths at predefined microsatellite markers. NGS-based MSI correlates well with traditional PCR-based MSI testing and immunohistochemistry for MMR proteins. MSI-H tumors are eligible for pembrolizumab (tumor-agnostic FDA approval)."
  },
  {
    id: 34,
    question: "Circulating tumor DNA (ctDNA) analysis (liquid biopsy) requires specialized NGS approaches because:",
    options: ["ctDNA is very abundant in blood", "ctDNA fragments are rare (often <1% of total cfDNA), requiring ultra-deep sequencing and error suppression", "ctDNA is not fragmented", "Standard library preparation works without modification"],
    answer: 1,
    explanation: "ctDNA typically comprises 0.01-10% of total cell-free DNA in plasma. Detecting somatic variants at such low allele frequencies requires ultra-deep sequencing (10,000-100,000x unique coverage), error suppression with UMIs (unique molecular identifiers), and specialized variant callers with very low detection thresholds. Commercial platforms (Guardant360, FoundationOne Liquid CDx) use these approaches for clinical ctDNA profiling."
  },
  {
    id: 35,
    question: "Mutational signatures in cancer genomes represent:",
    options: ["Random sequencing errors", "Characteristic patterns of somatic mutations reflecting specific mutagenic processes", "Germline polymorphisms", "Epigenetic modifications"],
    answer: 1,
    explanation: "Mutational signatures are specific patterns of base substitutions (in trinucleotide context) resulting from distinct mutagenic processes. The COSMIC database catalogs >100 signatures: SBS1 (age-related deamination), SBS4 (tobacco smoking), SBS7 (UV radiation), SBS6/SBS15 (mismatch repair deficiency), SBS3 (homologous recombination deficiency/BRCA). Signature analysis from WGS/WES can identify actionable DNA repair defects."
  },
  {
    id: 36,
    question: "Tumor purity and ploidy estimation from WGS/WES data is important because:",
    options: ["It only affects sequencing cost", "Incorrect purity/ploidy estimates lead to inaccurate variant calling, allele-specific copy number, and clonality assessment", "It has no clinical significance", "It only applies to germline analysis"],
    answer: 1,
    explanation: "Tumor purity (fraction of tumor cells in the sample) and ploidy (genome-wide DNA content) directly affect variant allele frequencies and copy number analysis. Tools like ASCAT, PureCN, and Sequenza jointly estimate purity and ploidy from allele frequency and depth data. Low-purity samples (<20-30%) have reduced sensitivity for somatic variant detection and may need computational or laboratory enrichment."
  },
  {
    id: 37,
    question: "Gene fusion detection from RNA-seq in cancer uses:",
    options: ["Standard alignment to a single gene", "Identification of chimeric reads spanning fusion breakpoints and discordant read pairs mapping to different genes", "Only protein-level analysis", "Methylation analysis"],
    answer: 1,
    explanation: "RNA-seq fusion detection tools (STAR-Fusion, Arriba, FusionCatcher) identify chimeric/split reads where one segment aligns to one gene and another to a different gene, as well as discordant read pairs mapping to different genes. RNA-seq is preferred over DNA-based methods because it directly detects expressed fusions and reveals the fusion transcript structure. Clinically actionable fusions include BCR-ABL1, EML4-ALK, ROS1 fusions, and NTRK fusions."
  },
  {
    id: 38,
    question: "Companion diagnostic (CDx) NGS tests in oncology are designed to:",
    options: ["Screen for all possible germline conditions", "Identify specific actionable mutations that predict response to targeted therapies", "Replace all other laboratory tests", "Perform whole genome sequencing"],
    answer: 1,
    explanation: "CDx tests are FDA-approved assays linked to specific therapeutic indications. NGS-based CDx panels (e.g., FoundationOne CDx, MSK-IMPACT) identify actionable somatic variants (EGFR, BRAF, ALK, NTRK, etc.), TMB, and MSI status to guide targeted therapy selection. They are validated for specific tumor types and drug-biomarker pairs, meeting analytical and clinical validity standards required by FDA."
  },
  {
    id: 39,
    question: "Minimal residual disease (MRD) detection using NGS in hematologic malignancies achieves sensitivity of:",
    options: ["1 in 100 (10⁻²)", "1 in 10,000 to 1 in 1,000,000 (10⁻⁴ to 10⁻⁶)", "1 in 10 (10⁻¹)", "Only detects bulk disease"],
    answer: 1,
    explanation: "NGS-based MRD assays (e.g., clonoSEQ for lymphoid malignancies) track tumor-specific immunoglobulin or T-cell receptor rearrangements with sensitivity of 10⁻⁴ to 10⁻⁶. This surpasses flow cytometry (~10⁻⁴) and approaches the sensitivity of allele-specific PCR. MRD status is a strong prognostic indicator and increasingly guides treatment decisions in ALL, CLL, and multiple myeloma."
  },
  {
    id: 40,
    question: "Homologous recombination deficiency (HRD) scoring from genomic data includes measures of:",
    options: ["Only BRCA1/BRCA2 mutation status", "Loss of heterozygosity (LOH), telomeric allelic imbalance (TAI), and large-scale state transitions (LST)", "Only microsatellite instability", "Only tumor mutational burden"],
    answer: 1,
    explanation: "HRD scoring (e.g., Myriad myChoice CDx) quantifies genomic scarring from defective homologous recombination by combining three measures: LOH (allelic imbalance >15 Mb), TAI (allelic imbalance extending to telomere), and LST (≥10 Mb breakpoints between regions of different copy number). A high HRD score predicts response to PARP inhibitors regardless of BRCA mutation status."
  },

  // ===== CLINICAL NGS IMPLEMENTATION (Q41–Q50) =====
  {
    id: 41,
    question: "Analytical validity of a clinical NGS test refers to:",
    options: ["Whether the test result is clinically useful", "The test's ability to accurately detect the variants it claims to detect (sensitivity, specificity, reproducibility)", "The cost-effectiveness of the test", "Patient satisfaction with the test"],
    answer: 1,
    explanation: "Analytical validity measures the technical performance of the assay: analytical sensitivity (ability to detect true variants), analytical specificity (ability to avoid false positives), accuracy, precision (reproducibility), and limits of detection (minimum VAF). Analytical validation typically involves comparison with orthogonal methods (Sanger, ddPCR), reference materials (Genome in a Bottle), and inter-laboratory proficiency testing."
  },
  {
    id: 42,
    question: "The Genome in a Bottle (GIAB) consortium provides:",
    options: ["Free genome sequencing services", "Well-characterized reference samples and benchmark variant call sets for validation", "Clinical genetic counseling", "Sequencing reagents at reduced cost"],
    answer: 1,
    explanation: "GIAB (NIST) provides extensively characterized reference samples (HG001-HG007, representing diverse ancestries) with benchmark variant calls and high-confidence regions. These are used to validate NGS pipelines by comparing variant calls against the truth set, calculating sensitivity, precision, and F1 scores. GIAB benchmarks cover SNVs, indels, and increasingly SVs and challenging genomic regions."
  },
  {
    id: 43,
    question: "Reportable range in clinical NGS defines:",
    options: ["The price range of the test", "The specific genomic regions, variant types, and variant sizes that the test is validated to detect", "The turnaround time", "The number of patients tested per day"],
    answer: 1,
    explanation: "The reportable range specifies exactly what the test can reliably detect and report: which genes/regions, which variant types (SNVs, indels, CNVs, fusions), minimum variant allele frequency, and size ranges. Regions with insufficient coverage or validation are excluded from the reportable range. This ensures clinicians understand the test's capabilities and limitations. Variants outside the reportable range should not be reported."
  },
  {
    id: 44,
    question: "Sanger sequencing is still used in clinical genomics primarily for:",
    options: ["Primary screening of the entire genome", "Orthogonal confirmation of critical NGS findings and gap-filling in poorly covered regions", "Replacing NGS entirely", "Detecting structural variants"],
    answer: 1,
    explanation: "Despite NGS dominance, Sanger sequencing remains the gold standard for confirmatory testing of clinically significant variants identified by NGS, especially when clinical decisions depend on the result. It is also used to fill coverage gaps in critical genes, verify de novo variants, and test additional family members for a known familial variant. Sanger's per-base accuracy (~99.99%) and well-established validation history support its continued role."
  },
  {
    id: 45,
    question: "Turnaround time (TAT) for clinical WES/WGS in urgent settings (e.g., critically ill neonates) can be as short as:",
    options: ["24-48 hours", "1 week", "1 month", "3 months"],
    answer: 0,
    explanation: "Rapid genome sequencing protocols (rWGS) for critically ill neonates can achieve results in 24-48 hours (or even <24 hours in some programs). This involves rapid DNA extraction, accelerated library preparation, fast sequencing runs (e.g., Illumina NovaSeq X in 48-hour mode), automated variant calling and interpretation, and urgent clinical reporting. Rapid genomic diagnosis has been shown to change management in ~25-50% of diagnosed neonates."
  },
  {
    id: 46,
    question: "Proficiency testing (PT) for clinical NGS laboratories involves:",
    options: ["Testing only one sample per year", "Regular external assessment where unknown samples are tested and results compared against expected outcomes", "Self-reported quality metrics only", "No external oversight"],
    answer: 1,
    explanation: "PT programs (e.g., CAP, EMQN) send clinical NGS laboratories blinded samples at regular intervals. Laboratories analyze samples using their standard protocols and submit results. Performance is compared against expected results and peer laboratories. PT identifies systematic errors, validates analytical performance, and is required for laboratory accreditation (CAP, CLIA). Unsatisfactory PT requires root cause analysis and corrective action."
  },
  {
    id: 47,
    question: "The distinction between a laboratory-developed test (LDT) and an FDA-approved IVD in clinical NGS is:",
    options: ["LDTs are always more accurate", "FDA-approved IVDs undergo premarket review while LDTs are validated within the laboratory under CLIA", "There is no difference", "LDTs cannot be used clinically"],
    answer: 1,
    explanation: "FDA-approved IVDs undergo rigorous premarket review demonstrating analytical and clinical validity for specific intended uses. LDTs are developed, validated, and performed within a single CLIA-certified laboratory without FDA premarket review, though they must meet CLIA quality standards. Most clinical NGS tests are currently LDTs, though FDA oversight of LDTs is evolving. Both must demonstrate analytical validity, but the regulatory pathways differ significantly."
  },
  {
    id: 48,
    question: "Data storage requirements for clinical NGS are significant because:",
    options: ["FASTQ files are very small", "Raw and processed data must be retained per regulatory requirements, and a single WGS generates ~100-200 GB", "NGS data can be fully summarized in a few kilobytes", "Data retention is not required"],
    answer: 1,
    explanation: "Clinical laboratories must retain NGS data per CAP/CLIA requirements (typically ≥2 years for raw data, ≥10 years for results). A single 30x WGS generates ~100-200 GB (FASTQ), ~50-100 GB (BAM), and ~100 MB (VCF). Large clinical programs generate petabytes annually. Strategies include cloud storage, CRAM compression (~40-60% smaller than BAM), and tiered storage architectures."
  },
  {
    id: 49,
    question: "Incidental findings in clinical genomic sequencing are addressed by ACMG by recommending:",
    options: ["Never reporting any incidental findings", "Reporting pathogenic/likely pathogenic variants in a curated list of ~78 medically actionable genes (ACMG SF v3.2)", "Reporting all variants found", "Leaving the decision entirely to the sequencing platform"],
    answer: 1,
    explanation: "ACMG Secondary Findings (SF) v3.2 recommends that clinical laboratories report pathogenic and likely pathogenic variants in ~78 genes associated with highly penetrant, medically actionable conditions (hereditary cancers, cardiac conditions, familial hypercholesterolemia, malignant hyperthermia). Patients may opt out of receiving secondary findings. This applies to clinical exome and genome sequencing."
  },
  {
    id: 50,
    question: "Reanalysis of negative WES/WGS cases is recommended at intervals of:",
    options: ["Never", "Every 1-3 years, as new gene-disease associations and databases are updated", "Every 10 years", "Only if the patient's phenotype changes"],
    answer: 1,
    explanation: "Periodic reanalysis (every 1-3 years) of previously negative WES/WGS data is recommended because: (1) ~250 new gene-disease associations are published annually, (2) VUS may be reclassified with new evidence, (3) variant databases (ClinVar, gnomAD) expand continuously, and (4) bioinformatics tools improve. Studies show reanalysis achieves additional diagnoses in 10-15% of previously undiagnosed cases."
  }
]

export default questions
