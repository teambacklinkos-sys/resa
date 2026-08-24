const questions = [
  // ===== GENOME ASSEMBLY & REFERENCE GENOMES (Q1–Q10) =====
  {
    id: 1,
    question: "De novo genome assembly constructs a genome sequence:",
    options: ["By aligning reads to an existing reference genome", "Without using a reference genome, by overlapping reads based on sequence similarity", "By copying a known reference genome", "Using only Sanger sequencing"],
    answer: 1,
    explanation: "De novo assembly builds contiguous sequences (contigs) from scratch by finding overlaps between reads, without relying on a reference genome. This is essential for novel organisms, population-specific sequences absent from references, and completing reference-quality genomes. Assembly algorithms use de Bruijn graphs (short reads: SPAdes, MEGAHIT) or overlap-layout-consensus (long reads: Hifiasm, Flye)."
  },
  {
    id: 2,
    question: "N50 is an assembly quality metric defined as:",
    options: ["The number of contigs in the assembly", "The length at which 50% of the total assembly is contained in contigs of that length or longer", "The percentage of the genome assembled", "The error rate of the assembly"],
    answer: 1,
    explanation: "N50 is calculated by sorting contigs from longest to shortest and determining the length at which cumulative length reaches 50% of the total assembly size. Higher N50 indicates a more contiguous assembly with fewer, longer contigs. For a high-quality human genome assembly, contig N50 should be >10 Mb. Related metrics include NG50 (normalized to expected genome size), L50 (number of contigs comprising N50), and scaffold N50."
  },
  {
    id: 3,
    question: "The GRCh38 human reference genome is maintained by:",
    options: ["Illumina", "Genome Reference Consortium (GRC)", "ENCODE", "The Human Genome Project exclusively"],
    answer: 1,
    explanation: "The Genome Reference Consortium (GRC) maintains and updates human (GRCh38/hg38) and mouse (GRCm39) reference genomes. GRC releases patches adding new sequences, fixing errors, and resolving gaps. GRCh38 (released 2013) contains ~3.1 Gb of sequence with ~350 gaps. The T2T-CHM13 assembly (2022) filled all gaps, and the human pangenome reference provides additional population diversity."
  },
  {
    id: 4,
    question: "Scaffolding in genome assembly refers to:",
    options: ["Filling all gaps in an assembly", "Ordering and orienting contigs using long-range information (Hi-C, mate pairs, optical mapping)", "Removing duplicate contigs", "Polishing base-level errors"],
    answer: 1,
    explanation: "Scaffolding uses long-range linking information to order, orient, and connect contigs separated by gaps. Hi-C data provides chromatin proximity information (contigs on the same chromosome interact more frequently), optical mapping provides long-range physical maps, and mate-pair libraries span 2-20 kb. The result is scaffolds — ordered sets of contigs with estimated gap sizes. Chromosome-level scaffolding often uses Hi-C data."
  },
  {
    id: 5,
    question: "Assembly polishing improves:",
    options: ["Contig length", "Base-level accuracy of the assembled consensus sequence", "Scaffolding order", "Read depth"],
    answer: 1,
    explanation: "Polishing corrects base-level errors in draft assemblies by aligning raw reads back to the assembly and correcting the consensus. Short-read polishing (Pilon, using Illumina reads) is effective for correcting systematic long-read errors. Long-read polishing (Medaka for Nanopore, GCpp for PacBio) uses the original long reads. PacBio HiFi assemblies typically require minimal polishing due to their high per-read accuracy."
  },
  {
    id: 6,
    question: "Phased genome assembly produces:",
    options: ["A single consensus sequence averaging both haplotypes", "Separate assemblies for maternal and paternal haplotypes (diploid assembly)", "Only the dominant haplotype", "Mitochondrial genome only"],
    answer: 1,
    explanation: "Phased assembly resolves both parental haplotypes separately, producing two complete assemblies instead of a collapsed consensus. Tools like Hifiasm (with trio data or Hi-C) and dual assembly approaches generate diploid assemblies. This is important for understanding compound heterozygosity, allele-specific regulation, structural variant haplotypes, and has been adopted by the Human Pangenome Reference Consortium for all samples."
  },
  {
    id: 7,
    question: "BUSCO (Benchmarking Universal Single-Copy Orthologs) assesses assembly quality by:",
    options: ["Measuring N50", "Checking for the presence of expected conserved genes as a proxy for completeness", "Counting the number of reads aligned", "Measuring GC content"],
    answer: 1,
    explanation: "BUSCO evaluates assembly completeness by searching for a set of genes expected to be present in single copy across a phylogenetic lineage. Results are reported as complete (single or duplicated), fragmented, or missing. A high-quality assembly should have >95% complete BUSCOs. BUSCO is also used for transcriptome assembly and annotation quality assessment."
  },
  {
    id: 8,
    question: "The ALT contigs in GRCh38 represent:",
    options: ["Assembly errors", "Alternative sequence representations for highly variable regions with population-specific haplotypes", "Unplaced contigs with no known location", "Mitochondrial genome variants"],
    answer: 1,
    explanation: "ALT contigs in GRCh38 represent alternative haplotypes for highly variable regions (e.g., HLA locus on chromosome 6, immunoglobulin loci). These regions are too divergent to be represented by a single reference sequence. ALT-aware aligners (BWA-MEM with ALT index) can map reads to these alternative representations, reducing reference bias. The pangenome reference addresses this more comprehensively using graph structures."
  },
  {
    id: 9,
    question: "Contamination detection in genome assemblies identifies:",
    options: ["PCR duplicates", "Foreign DNA sequences from other organisms present in the assembly", "Low-quality base calls", "Missing genes"],
    answer: 1,
    explanation: "Contamination (adapter sequences, human DNA in non-human assemblies, microbial DNA in eukaryotic assemblies, vector sequences) can introduce errors in genome assemblies. Tools like BlobToolKit visualize contigs by GC content, coverage, and taxonomic assignment to identify contaminant sequences. NCBI screens all submitted assemblies for contamination before accessioning. Contamination is a common quality issue, especially in environmental or low-input samples."
  },
  {
    id: 10,
    question: "Liftover tools (e.g., UCSC liftOver) are used to:",
    options: ["Convert between genome assembly versions by mapping coordinates from one reference to another", "Improve sequencing quality", "Merge multiple assemblies", "Perform variant calling"],
    answer: 0,
    explanation: "Liftover converts genomic coordinates between reference assembly versions (e.g., hg19/GRCh37 to hg38/GRCh38) using chain files that define alignment relationships between assemblies. This is essential for integrating datasets generated against different references. Some coordinates may not lift over due to assembly changes, deletions, or rearrangements. CrossMap and NCBI Remap are alternative tools."
  },

  // ===== CLINICAL GENOMICS WORKFLOWS (Q11–Q20) =====
  {
    id: 11,
    question: "The GATK Best Practices pipeline for germline variant discovery includes which ordered steps?",
    options: ["Variant calling → alignment → annotation", "Alignment (BWA-MEM) → duplicate marking → BQSR → HaplotypeCaller → VQSR/filtering", "Annotation → filtering → alignment", "Assembly → polishing → scaffolding"],
    answer: 1,
    explanation: "The GATK Best Practices germline pipeline follows: (1) alignment with BWA-MEM to reference, (2) sorting and duplicate marking (Picard/samtools), (3) Base Quality Score Recalibration (BQSR), (4) variant calling with HaplotypeCaller (producing gVCF), (5) joint genotyping across samples (GenomicsDB + GenotypeGVCFs), and (6) variant filtering (VQSR or hard filtering). This pipeline is the de facto standard for clinical and research germline variant calling."
  },
  {
    id: 12,
    question: "In clinical genomics, variant prioritization typically filters variants by:",
    options: ["Alphabetical order of gene names", "Population frequency, predicted impact, inheritance model, gene-disease association, and phenotype relevance", "Only read depth", "Date of discovery"],
    answer: 1,
    explanation: "Clinical variant prioritization involves: (1) quality filters (depth, genotype quality), (2) population frequency filters (excluding common variants via gnomAD), (3) functional impact prediction (CADD, REVEL, SpliceAI), (4) inheritance model filtering (de novo for trio, homozygous/compound het for recessive), (5) gene-disease association (OMIM, ClinGen), and (6) phenotype-driven gene ranking (Exomiser, AMELIE). This reduces ~4-5 million variants per genome to a manageable shortlist."
  },
  {
    id: 13,
    question: "Exomiser is a clinical genomics tool that:",
    options: ["Performs sequencing", "Prioritizes candidate variants by integrating patient phenotype (HPO terms), model organism data, and protein interaction networks", "Only annotates variants with population frequency", "Performs genome assembly"],
    answer: 1,
    explanation: "Exomiser uses Human Phenotype Ontology (HPO) terms describing the patient's clinical features to rank candidate variants. It integrates: phenotype similarity to known gene-disease associations, cross-species phenotype comparisons (mouse, zebrafish models), protein-protein interaction network proximity, and variant pathogenicity predictions. Exomiser significantly improves diagnostic efficiency by ranking causative variants among the top candidates in >70% of cases."
  },
  {
    id: 14,
    question: "The Human Phenotype Ontology (HPO) is important in clinical genomics because it:",
    options: ["Replaces genetic testing", "Provides standardized, computable terms for clinical features enabling phenotype-driven variant prioritization", "Only describes normal anatomy", "Is used exclusively for billing purposes"],
    answer: 1,
    explanation: "HPO provides a standardized vocabulary of ~18,000 terms describing clinical abnormalities, organized hierarchically. HPO terms enable: (1) consistent phenotype description across centers, (2) computational matching of patient phenotypes to known gene-disease associations, (3) cross-species phenotype comparison, and (4) cohort-level phenotype analysis. HPO terms are linked to genes, diseases, and model organism phenotypes, powering tools like Exomiser and PhenoDB."
  },
  {
    id: 15,
    question: "Compound heterozygosity in autosomal recessive disease requires:",
    options: ["Two identical pathogenic variants", "Two different pathogenic variants in the same gene, one inherited from each parent (in trans)", "One pathogenic variant and one benign variant", "Pathogenic variants in two different genes"],
    answer: 1,
    explanation: "Compound heterozygosity occurs when an individual carries two different pathogenic variants in the same gene, one on each allele (inherited from different parents — in trans). Both alleles are disrupted, causing autosomal recessive disease. Trio analysis is important to confirm trans configuration; if both variants are on the same allele (in cis), only one allele is affected and the individual is a carrier, not affected."
  },
  {
    id: 16,
    question: "Regions of homozygosity (ROH) detected from WGS/WES data can indicate:",
    options: ["Sequencing errors", "Consanguinity, uniparental disomy, or identity by descent", "Poor library quality", "Sample contamination"],
    answer: 1,
    explanation: "ROH are continuous stretches of homozygous genotypes. Long ROH (>5-10 Mb) suggest recent consanguinity (parents share a recent common ancestor). Multiple long ROH across the genome indicate close consanguinity. A single large ROH on one chromosome may indicate uniparental disomy. ROH analysis is clinically important for autosomal recessive disease diagnosis in consanguineous families, as the causative variant is expected to lie within an ROH."
  },
  {
    id: 17,
    question: "Mitochondrial heteroplasmy detected by NGS refers to:",
    options: ["Different mitochondrial genomes in different species", "Coexistence of wild-type and mutant mitochondrial DNA within a cell or individual", "Contamination with bacterial DNA", "Sequencing errors in mitochondrial reads"],
    answer: 1,
    explanation: "Heteroplasmy is the presence of both normal and mutant mitochondrial DNA within a cell/tissue/individual. The proportion of mutant mtDNA (heteroplasmy level) often correlates with disease severity (threshold effect, typically 60-90%). NGS can quantify heteroplasmy with high precision (~1% sensitivity at >1000x coverage). Heteroplasmy levels may vary between tissues, complicating diagnosis — blood heteroplasmy may not reflect affected tissue levels."
  },
  {
    id: 18,
    question: "Copy-neutral loss of heterozygosity (CN-LOH) detected by SNP arrays or WGS indicates:",
    options: ["A deletion", "A duplication", "Loss of one parental allele with compensatory duplication of the other (maintaining normal copy number)", "No change"],
    answer: 2,
    explanation: "CN-LOH (also called acquired uniparental disomy) occurs when one allele is lost and the remaining allele is duplicated, maintaining diploid copy number but losing heterozygosity. In cancer, CN-LOH can unmask recessive tumor suppressor mutations. In constitutional genetics, it can cause imprinting disorders or autosomal recessive disease. CN-LOH is invisible on standard karyotyping or depth-based CNV analysis but detectable by allele frequency analysis."
  },
  {
    id: 19,
    question: "Genome-first approaches in clinical genomics involve:",
    options: ["Performing genome sequencing only after extensive clinical evaluation", "Sequencing the genome early in the diagnostic workup, potentially before detailed phenotyping", "Only sequencing specific genes based on clinical suspicion", "Performing genome sequencing only as a last resort"],
    answer: 1,
    explanation: "Genome-first approaches perform WGS/WES early in the diagnostic evaluation, sometimes as a first-tier test. This has shown benefit in: critically ill neonates (rapid WGS changes management in ~25-50% of diagnosed cases), intellectual disability (replacing sequential single-gene tests), and undiagnosed diseases. Genome-first reduces diagnostic odyssey time from years to weeks and is increasingly cost-effective compared to traditional stepwise testing."
  },
  {
    id: 20,
    question: "Mosaicism detection from WGS/WES requires:",
    options: ["Standard 30x coverage", "Higher than standard coverage (>100x) and variant callers sensitive to low allele frequencies", "Only targeted Sanger sequencing", "PCR-free library preparation exclusively"],
    answer: 1,
    explanation: "Mosaic variants may be present in only a fraction of cells, producing low variant allele frequencies (5-25% or lower). Standard germline callers (optimized for 50% or 100% VAF) miss these. Detection requires: higher coverage (>100x), variant callers with low VAF sensitivity (MosaicHunter, Mutect2 in mitochondrial mode), and careful distinction from sequencing artifacts. Mosaic variants can cause phenotypic mosaicism and have implications for recurrence risk counseling."
  },

  // ===== PHARMACOGENOMICS & CLINICAL UTILITY (Q21–Q30) =====
  {
    id: 21,
    question: "Star allele nomenclature (e.g., CYP2D6*4) in pharmacogenomics represents:",
    options: ["Individual SNP positions", "Defined haplotypes comprising one or more variants that affect gene function", "Gene expression levels", "Protein structure variants"],
    answer: 1,
    explanation: "Star alleles are standardized haplotype designations for pharmacogenes. Each star allele represents a specific combination of variants (SNPs, indels, gene deletions/duplications) with defined functional impact. CYP2D6*1 is the reference (normal function), *4 is the most common non-functional allele (splice defect), and gene duplications (*1xN, *2xN) cause ultra-rapid metabolism. The Pharmacogene Variation Consortium (PharmVar) curates star allele definitions."
  },
  {
    id: 22,
    question: "CYP2D6 genotyping is particularly challenging for NGS because:",
    options: ["The gene is very small", "CYP2D6 has highly homologous pseudogenes (CYP2D7, CYP2D8P), hybrid genes, and whole-gene copy number variations", "It has no known variants", "It is located on a sex chromosome"],
    answer: 1,
    explanation: "CYP2D6 presents unique challenges: (1) highly homologous pseudogenes CYP2D7 and CYP2D8P cause mismapping of short reads, (2) whole-gene deletions (*5) and duplications (*1xN, *2xN) require copy number assessment, (3) CYP2D6/CYP2D7 hybrid genes create novel alleles, and (4) >150 star alleles exist. Specialized tools (Stargazer, Cyrius, StellarPGx) and long-read sequencing improve accuracy for CYP2D6 genotyping."
  },
  {
    id: 23,
    question: "Clinical Pharmacogenetics Implementation Consortium (CPIC) guidelines provide:",
    options: ["Drug pricing information", "Evidence-based recommendations for translating pharmacogenomic test results into prescribing decisions", "Sequencing protocols", "Insurance coverage policies"],
    answer: 1,
    explanation: "CPIC creates peer-reviewed guidelines that translate pharmacogenomic genotype/phenotype results into specific prescribing recommendations (dose adjustments, alternative drugs, monitoring). Each guideline includes gene-drug pairs with evidence levels. Examples: CYP2C19-clopidogrel, CYP2D6-codeine, DPYD-fluoropyrimidines, HLA-B*57:01-abacavir. CPIC guidelines are freely available and updated as evidence accumulates."
  },
  {
    id: 24,
    question: "Preemptive pharmacogenomic testing involves:",
    options: ["Testing only after an adverse drug reaction occurs", "Genotyping pharmacogenes before drug prescribing, storing results for future clinical decision support", "Testing drug levels in blood", "Only testing for drug allergies"],
    answer: 1,
    explanation: "Preemptive PGx panels test multiple pharmacogenes simultaneously (CYP2D6, CYP2C19, CYP2C9, VKORC1, DPYD, TPMT, etc.) before any drugs are prescribed. Results are stored in the electronic health record and trigger clinical decision support alerts when relevant medications are ordered. Programs like PREDICT (Vanderbilt), RIGHT (Mayo), and IGNITE demonstrate that preemptive PGx is clinically actionable for ~90% of patients within 5 years."
  },
  {
    id: 25,
    question: "Long-read sequencing improves pharmacogenomic testing by:",
    options: ["Reducing cost only", "Resolving complex gene structures, phasing compound heterozygous variants, and accurately determining gene copy number", "Eliminating the need for clinical interpretation", "Only detecting common variants"],
    answer: 1,
    explanation: "Long reads can span entire pharmacogene loci, enabling: (1) unambiguous phasing of variants into haplotypes (star alleles), (2) accurate copy number determination including hybrid alleles, (3) resolution of pseudogene interference (CYP2D6/CYP2D7), and (4) detection of structural variants. PacBio and Nanopore-based PGx assays (e.g., PGRNseq) significantly improve CYP2D6 and HLA genotyping accuracy over short-read approaches."
  },
  {
    id: 26,
    question: "Polygenic risk scores (PRS) for common diseases are calculated from:",
    options: ["A single causal mutation", "Weighted sum of many common variant effects identified by GWAS", "Only rare pathogenic variants", "Environmental factors exclusively"],
    answer: 1,
    explanation: "PRS sum the effects of thousands to millions of common variants (SNPs), each contributing small risk increments, weighted by their GWAS effect sizes. The resulting score estimates an individual's genetic liability for complex diseases (coronary artery disease, type 2 diabetes, breast cancer). PRS can identify individuals at comparable risk to monogenic variant carriers. Limitations include reduced accuracy across ancestries and limited clinical implementation frameworks."
  },
  {
    id: 27,
    question: "Newborn genomic sequencing (NBSeq) is being evaluated as a complement to traditional newborn screening because it can:",
    options: ["Replace metabolic screening entirely", "Screen for hundreds of genetic conditions simultaneously with a single test", "Only detect chromosomal abnormalities", "Be performed without parental consent"],
    answer: 1,
    explanation: "NBSeq can screen for hundreds of conditions using WGS or WES, far exceeding the ~30-80 conditions on current metabolite-based panels. Projects like BabySeq, GUARDIAN, and Generation Study are evaluating NBSeq. Advantages include earlier diagnosis of actionable conditions. Challenges include VUS management, incidental findings, equitable access, data storage, and psychosocial impacts. NBSeq currently complements rather than replaces metabolic NBS."
  },
  {
    id: 28,
    question: "Clinical utility of a genetic test refers to:",
    options: ["The technical accuracy of the test", "Whether the test result leads to improved patient outcomes through changes in management", "The cost of the test", "The turnaround time"],
    answer: 1,
    explanation: "Clinical utility is the highest level of evidence for a genetic test — demonstrating that test results lead to actions that improve patient outcomes (mortality, morbidity, quality of life). It goes beyond analytical validity (technical accuracy) and clinical validity (ability to identify the condition). Demonstrating clinical utility often requires long-term outcomes studies and is critical for payer coverage decisions and clinical adoption."
  },
  {
    id: 29,
    question: "Return of results (RoR) in genomic research involves:",
    options: ["Returning all raw sequencing data to participants", "Communicating clinically significant genomic findings to research participants", "Publishing results in journals only", "Returning results only to the research team"],
    answer: 1,
    explanation: "RoR is the practice of communicating individual genomic findings (particularly medically actionable pathogenic variants) to research participants. ACMG and NIH recommend offering RoR for variants in the ACMG SF gene list. RoR requires ethical framework, participant consent for receiving results, clinical-grade confirmation of research findings, and access to genetic counseling. Balancing the duty to inform against potential harm is an ongoing ethical discussion."
  },
  {
    id: 30,
    question: "Health equity in genomics is a concern because:",
    options: ["Sequencing costs are increasing", "Current reference genomes and GWAS predominantly represent European ancestry populations, reducing accuracy for underrepresented groups", "Genomic testing is not useful for diverse populations", "All populations have identical genetic variation"],
    answer: 1,
    explanation: "The majority of GWAS participants (~78%) are of European ancestry, leading to PRS and variant databases with reduced accuracy for non-European populations. Reference genomes may miss population-specific sequences. Variant classification can be less accurate for underrepresented groups due to fewer reference data. Initiatives like All of Us, H3Africa, GenomeAsia, and the Human Pangenome (diverse sampling) aim to address these disparities."
  },

  // ===== ADVANCED NGS APPLICATIONS (Q31–Q40) =====
  {
    id: 31,
    question: "Cell-free DNA (cfDNA) in maternal plasma for NIPT originates primarily from:",
    options: ["Fetal blood cells crossing the placenta", "Apoptosis of placental trophoblast cells", "Amniotic fluid leaking into maternal blood", "Maternal immune cells"],
    answer: 1,
    explanation: "Cell-free fetal DNA (cffDNA) in maternal plasma originates primarily from apoptosis of placental cytotrophoblast cells. It constitutes ~5-20% of total maternal cfDNA (fetal fraction), is detectable from ~5 weeks gestation, and is cleared within hours after delivery. NIPT uses shallow WGS or targeted approaches to detect fetal aneuploidies by analyzing relative chromosome representation. A minimum fetal fraction of ~4% is needed for reliable results."
  },
  {
    id: 32,
    question: "Confined placental mosaicism can cause false-positive NIPT results because:",
    options: ["The fetus has a different karyotype than detected", "cfDNA reflects placental (trophoblast) rather than fetal genotype, and the placenta may have aneuploid cells not present in the fetus", "NIPT sequences the entire fetal genome", "Maternal DNA interferes with analysis"],
    answer: 1,
    explanation: "Since cffDNA originates from the placenta (trophoblast), NIPT actually tests placental genotype. In confined placental mosaicism (CPM, ~1-2% of pregnancies), the placenta carries aneuploid cells not present in the fetus. This causes false-positive NIPT results, particularly for trisomies 13 and 18. This is why NIPT is a screening test requiring diagnostic confirmation (amniocentesis or CVS) before clinical action."
  },
  {
    id: 33,
    question: "Donor-derived cell-free DNA (dd-cfDNA) monitoring after organ transplantation detects:",
    options: ["Drug metabolism", "Early allograft rejection by measuring the proportion of donor DNA in recipient plasma", "Surgical complications", "Immunosuppressant levels"],
    answer: 1,
    explanation: "dd-cfDNA is released from damaged/dying donor organ cells into the recipient's circulation. Elevated dd-cfDNA levels (typically >1% for kidney, >0.25% for heart) indicate active injury, often preceding clinical or histological evidence of rejection by days to weeks. Platforms like AlloSure and Prospera use SNP-based or target-based NGS to quantify dd-cfDNA, enabling non-invasive rejection monitoring and potentially reducing surveillance biopsies."
  },
  {
    id: 34,
    question: "Methylation-based cancer early detection tests (e.g., Galleri) use:",
    options: ["Whole genome sequencing at 30x", "Targeted methylation sequencing of cfDNA to detect cancer-specific methylation patterns and predict tissue of origin", "Only protein biomarkers", "Standard blood counts"],
    answer: 1,
    explanation: "Multi-cancer early detection (MCED) tests analyze cfDNA methylation patterns from blood. Cancer cells shed cfDNA with aberrant methylation patterns distinguishable from normal. The Galleri test (GRAIL) uses targeted bisulfite sequencing of >100,000 methylation regions from cfDNA to detect >50 cancer types with tissue-of-origin prediction. Sensitivity varies by cancer stage (17% stage I, 40% stage II, 77% stage III, 90% stage IV in PATHFINDER trial)."
  },
  {
    id: 35,
    question: "Haplotype phasing from WGS data refers to:",
    options: ["Determining which chromosome each allele is on", "Assigning variants to their respective maternal or paternal chromosomes", "Counting the total number of variants", "Measuring gene expression"],
    answer: 1,
    explanation: "Phasing determines which alleles are on the same chromosome (in cis) vs. opposite chromosomes (in trans). This is critical for: (1) confirming compound heterozygosity in recessive disease, (2) determining parent of origin for imprinted loci, (3) identifying cis-regulatory variant effects, and (4) population genetics. Methods include statistical phasing (SHAPEIT, Beagle), read-based phasing (WhatsHap), trio-based phasing, and long-read physical phasing."
  },
  {
    id: 36,
    question: "Genome-wide association studies (GWAS) have limitations including:",
    options: ["Perfect identification of causal variants", "Difficulty distinguishing causal variants from linked variants, and explaining only a fraction of heritability", "Complete understanding of gene function", "No requirement for large sample sizes"],
    answer: 1,
    explanation: "GWAS limitations include: (1) associated SNPs are usually tag SNPs in linkage disequilibrium with (not necessarily) the causal variant, (2) most signals are in non-coding regions with unclear mechanisms, (3) common variants explain only a fraction of heritability ('missing heritability'), (4) population stratification can cause spurious associations, (5) findings may not generalize across ancestries, and (6) statistical association does not prove causation."
  },
  {
    id: 37,
    question: "Tandem mass tag (TMT) proteomics integrated with genomics enables:",
    options: ["Only DNA sequencing", "Correlation of genomic variants with protein abundance and post-translational modifications", "Replacing all genomic tests", "Only identifying protein structures"],
    answer: 1,
    explanation: "Proteogenomics integrates genomic/transcriptomic data with mass spectrometry-based proteomics to: (1) validate that genomic variants are expressed at the protein level, (2) identify variant-specific peptides, (3) discover novel protein-coding regions, (4) quantify protein abundance vs. mRNA levels, and (5) characterize post-translational modifications. This multi-omic approach provides a more complete picture of cellular function and disease mechanisms."
  },
  {
    id: 38,
    question: "Nanopore adaptive sampling can enrich for specific genomic regions without:",
    options: ["Using a nanopore device", "Any target capture, PCR amplification, or library modification — enrichment occurs computationally during sequencing", "Generating any sequence data", "Using a reference genome"],
    answer: 1,
    explanation: "Adaptive sampling performs enrichment computationally in real time during nanopore sequencing. The first ~400-1000 bases of each read are compared to target regions. On-target reads continue sequencing; off-target reads are ejected by voltage reversal. This achieves 5-20x enrichment without any wet-lab target capture, preserving native DNA modifications and requiring only standard library preparation. It enables targeted clinical panels from a single WGS library."
  },
  {
    id: 39,
    question: "The ACMG recommends that clinical laboratories performing NGS should participate in:",
    options: ["No external quality assessment", "External proficiency testing, internal quality control, and inter-laboratory comparison programs", "Only internal review", "Only manufacturer validation"],
    answer: 1,
    explanation: "ACMG and CAP standards require clinical NGS laboratories to: (1) participate in external proficiency testing (PT) programs (CAP, EMQN) at regular intervals, (2) maintain internal quality control with positive and negative controls each run, (3) monitor key metrics (coverage, on-target rate, Ti/Tv, known variant detection), and (4) participate in inter-laboratory comparison when formal PT is unavailable. These ensure ongoing analytical performance."
  },
  {
    id: 40,
    question: "Portable sequencing with Oxford Nanopore has been deployed for:",
    options: ["Only large research institutions", "Real-time pathogen surveillance in field settings (Ebola, Zika, SARS-CoV-2), environmental monitoring, and point-of-care diagnostics", "Only agricultural applications", "Only forensic science"],
    answer: 1,
    explanation: "Portable nanopore sequencing has been deployed in West African Ebola surveillance (2015), Brazilian Zika monitoring, Arctic environmental sampling, the International Space Station, and global SARS-CoV-2 genomic surveillance. Its portability (MinION fits in a pocket), minimal infrastructure requirements (laptop + USB power), rapid library preparation, and real-time data analysis make it uniquely suited for decentralized, point-of-need genomic applications."
  },

  // ===== DATA MANAGEMENT & COMPUTATIONAL GENOMICS (Q41–Q50) =====
  {
    id: 41,
    question: "Cloud computing platforms (AWS, Google Cloud, Azure) are increasingly used for genomic analysis because:",
    options: ["They eliminate the need for bioinformatics expertise", "They provide scalable compute and storage resources, enabling analysis of large datasets without on-premises infrastructure", "They are always free", "They guarantee data privacy without any configuration"],
    answer: 1,
    explanation: "Cloud platforms provide: (1) elastic compute scaling (spin up hundreds of instances for large cohort analysis), (2) petabyte-scale storage, (3) pre-configured bioinformatics environments (Terra, DNAnexus, Seven Bridges), (4) access to public datasets (gnomAD, 1000 Genomes, TCGA), and (5) collaborative analysis. Challenges include data transfer costs, regulatory compliance (HIPAA, GDPR), and data sovereignty requirements."
  },
  {
    id: 42,
    question: "Workflow languages (WDL, Nextflow, Snakemake) in bioinformatics are used to:",
    options: ["Write new sequencing chemistry", "Define reproducible, portable, and scalable computational pipelines for genomic analysis", "Replace version control", "Only manage data storage"],
    answer: 1,
    explanation: "Workflow languages define analysis pipelines as directed acyclic graphs (DAGs) of tasks with dependencies. They provide: (1) reproducibility (version-controlled definitions), (2) portability (run on laptop, HPC, or cloud), (3) scalability (automatic parallelization), (4) containerization support (Docker/Singularity for environment consistency), and (5) error handling and restart capabilities. WDL (Broad Institute), Nextflow (nf-core community), and Snakemake (Python-based) are the most widely used."
  },
  {
    id: 43,
    question: "Containerization (Docker, Singularity) in bioinformatics ensures:",
    options: ["Faster sequencing", "Reproducible software environments by packaging tools with all dependencies", "Larger storage capacity", "Better sequencing quality"],
    answer: 1,
    explanation: "Containers package bioinformatics tools with their exact dependencies (libraries, system packages, configurations) into portable, isolated environments. This eliminates 'works on my machine' problems where different installations produce different results. Docker is the standard for cloud environments, while Singularity (Apptainer) is preferred for HPC clusters (no root privileges required). Containers are essential for clinical-grade pipeline reproducibility."
  },
  {
    id: 44,
    question: "GPU-accelerated genomics tools (e.g., NVIDIA Clara Parabricks) primarily speed up:",
    options: ["Sample collection", "Computationally intensive steps like alignment, variant calling, and deep learning-based analysis", "DNA extraction", "Library preparation"],
    answer: 1,
    explanation: "GPU acceleration parallelizes computationally intensive genomic operations across thousands of GPU cores. Parabricks accelerates BWA-MEM (10-30x faster), GATK HaplotypeCaller, DeepVariant, and other tools. A 30x WGS can be analyzed in ~30 minutes on a single GPU server vs. ~24 hours on a CPU cluster. This is critical for rapid genomic diagnosis programs requiring <24-hour turnaround and for large-scale population genomics."
  },
  {
    id: 45,
    question: "The GA4GH (Global Alliance for Genomics and Health) develops:",
    options: ["Sequencing instruments", "International standards and frameworks for responsible sharing of genomic and health data", "New variant databases", "Clinical genetic tests"],
    answer: 1,
    explanation: "GA4GH develops technical standards and policy frameworks enabling responsible, secure genomic data sharing across institutions and countries. Key standards include: htsget (streaming sequencing data), Beacon API (querying variant existence across databases), DRS (Data Repository Service), TES (Task Execution Service), and the Framework for Responsible Sharing of Genomic and Health-Related Data. These enable federated analysis without centralizing sensitive data."
  },
  {
    id: 46,
    question: "Federated analysis in genomics allows:",
    options: ["Moving all data to a central location", "Running analyses across distributed datasets without moving raw data, preserving data governance", "Only local analysis on a single machine", "Sharing all data publicly"],
    answer: 1,
    explanation: "Federated analysis brings computation to data rather than centralizing data. Queries or algorithms are executed at each data-holding site, and only aggregated results are shared. This addresses: data sovereignty regulations (GDPR), institutional data governance policies, and the practical challenges of transferring petabyte-scale genomic datasets. Federated approaches are essential for international genomic studies and rare disease diagnosis networks."
  },
  {
    id: 47,
    question: "Machine learning in variant classification is being explored to:",
    options: ["Replace all human interpretation", "Automate initial variant triage and improve consistency using models trained on curated clinical variant databases", "Eliminate the need for sequencing", "Only predict protein structures"],
    answer: 1,
    explanation: "ML models trained on ClinVar, expert-curated datasets, and ACMG evidence criteria can automate initial variant classification, improving consistency and throughput. Tools like AutoGVP, InterVar, and VarSome Premium apply ACMG criteria algorithmically. Deep learning models predict functional impact (AlphaMissense, ESM1b). However, ML augments rather than replaces expert human review, especially for complex cases requiring clinical correlation."
  },
  {
    id: 48,
    question: "AlphaMissense predicts pathogenicity of missense variants using:",
    options: ["Only sequence conservation", "A deep learning model based on protein language models and structural features", "Population frequency alone", "Clinical phenotype matching"],
    answer: 1,
    explanation: "AlphaMissense (DeepMind, 2023) uses a protein language model derived from AlphaFold2 architecture to predict pathogenicity of all ~71 million possible human missense variants. It achieves state-of-the-art performance by learning from protein sequence evolution, structural context, and population frequency patterns. AlphaMissense classifies 89% of missense variants as likely benign or likely pathogenic, providing a valuable resource for variant interpretation."
  },
  {
    id: 49,
    question: "Data compression in genomics using CRAM format reduces file sizes compared to BAM by:",
    options: ["2-3x through reference-based compression", "No significant reduction", "Only works for small genomes", "Losing all quality information"],
    answer: 0,
    explanation: "CRAM achieves 40-60% smaller files than BAM through reference-based compression — instead of storing full read sequences, it stores only differences from the reference genome. CRAM also supports lossy quality score compression (binning or discarding qualities) for further reduction. All major bioinformatics tools (samtools, GATK, IGV) support CRAM. At population scale (100,000+ genomes), CRAM compression saves petabytes of storage and significant cost."
  },
  {
    id: 50,
    question: "Ethical considerations specific to large-scale population genomics programs include:",
    options: ["Only informed consent", "Informed consent, data privacy, incidental findings management, equitable representation, re-identification risks, and benefit sharing", "Only sequencing accuracy", "Only data storage costs"],
    answer: 1,
    explanation: "Population genomics raises complex ethical issues: (1) broad vs. specific consent for future research uses, (2) privacy risks from re-identification using genomic data, (3) management of incidental/secondary findings, (4) equitable representation of diverse populations, (5) data sovereignty for indigenous communities, (6) benefit sharing ensuring research benefits reach participants and communities, (7) responsible disclosure of population-level findings, and (8) genetic discrimination protections."
  }
]

export default questions
