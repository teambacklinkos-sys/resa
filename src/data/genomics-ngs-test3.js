const questions = [
  // ===== SINGLE-CELL GENOMICS (Q1–Q10) =====
  {
    id: 1,
    question: "Single-cell RNA sequencing (scRNA-seq) differs from bulk RNA-seq in that it:",
    options: ["Averages gene expression across all cells", "Profiles gene expression in individual cells, revealing cellular heterogeneity", "Only sequences ribosomal RNA", "Requires much less computational analysis"],
    answer: 1,
    explanation: "scRNA-seq captures the transcriptome of individual cells, revealing cell-to-cell variability, rare cell populations, and cell state transitions that are masked in bulk RNA-seq (which averages expression across thousands-millions of cells). This has revolutionized our understanding of tissue composition, developmental trajectories, immune responses, and tumor heterogeneity."
  },
  {
    id: 2,
    question: "The 10x Genomics Chromium platform for scRNA-seq uses:",
    options: ["FACS sorting into individual wells", "Microfluidic droplet-based encapsulation of single cells with barcoded gel beads", "Manual cell picking", "Laser capture microdissection"],
    answer: 1,
    explanation: "10x Chromium encapsulates single cells with barcoded gel beads in nanoliter droplets (GEMs). Within each droplet, cell lysis releases mRNA which is captured by poly-dT primers on the gel bead, each containing a cell barcode and UMI. After reverse transcription and amplification, library preparation generates 3'-end short-read libraries. The platform can process 500-10,000+ cells per run."
  },
  {
    id: 3,
    question: "UMAP and t-SNE in single-cell analysis are used for:",
    options: ["Quality control of raw reads", "Dimensionality reduction and visualization of high-dimensional single-cell data in 2D", "Variant calling", "Genome assembly"],
    answer: 1,
    explanation: "UMAP (Uniform Manifold Approximation and Projection) and t-SNE (t-distributed Stochastic Neighbor Embedding) are nonlinear dimensionality reduction algorithms that project high-dimensional gene expression data into 2D/3D for visualization. Similar cells cluster together, revealing cell populations and trajectories. UMAP generally preserves global structure better than t-SNE and is computationally faster for large datasets."
  },
  {
    id: 4,
    question: "Doublets in scRNA-seq data refer to:",
    options: ["Cells sequenced twice", "Droplets containing two or more cells, producing mixed expression profiles", "Duplicate UMIs", "Split reads"],
    answer: 1,
    explanation: "Doublets (or multiplets) occur when two or more cells are captured in the same droplet/well. The resulting expression profile is a mixture of both cells, which can create artifactual intermediate cell states or false novel populations. Doublet rates increase with cell loading density (~5% at standard loading). Computational tools (Scrublet, DoubletFinder) identify and remove predicted doublets from downstream analysis."
  },
  {
    id: 5,
    question: "Spatial transcriptomics differs from single-cell RNA-seq by:",
    options: ["Having higher throughput", "Preserving the spatial location of gene expression within tissue sections", "Requiring fewer computational resources", "Only detecting protein expression"],
    answer: 1,
    explanation: "Spatial transcriptomics methods (10x Visium, MERFISH, Slide-seq, Stereo-seq) measure gene expression while maintaining spatial coordinates within tissue sections. This enables mapping of cell types to anatomical locations, identifying spatially variable genes, and characterizing cell-cell interactions in their native tissue context. This contextual information is lost in dissociative scRNA-seq approaches."
  },
  {
    id: 6,
    question: "Cell trajectory analysis (pseudotime) in scRNA-seq is used to:",
    options: ["Measure actual time elapsed during an experiment", "Order cells along a developmental continuum to infer differentiation pathways", "Identify batch effects", "Call somatic mutations"],
    answer: 1,
    explanation: "Pseudotime analysis (Monocle, Slingshot, RNA velocity) computationally orders cells along a trajectory based on gradual changes in gene expression, inferring developmental or differentiation paths from a single snapshot experiment. RNA velocity additionally uses the ratio of unspliced to spliced mRNA to predict future cell states. These approaches have revealed branching differentiation hierarchies in hematopoiesis, neurogenesis, and embryogenesis."
  },
  {
    id: 7,
    question: "Single-cell ATAC-seq (scATAC-seq) measures:",
    options: ["Gene expression", "Chromatin accessibility at single-cell resolution", "DNA methylation", "Protein abundance"],
    answer: 1,
    explanation: "scATAC-seq profiles open chromatin regions in individual cells using the Tn5 transposase to tag accessible DNA. By mapping transposition events genome-wide, it identifies cell-type-specific regulatory elements (promoters, enhancers), transcription factor binding sites, and chromatin states. Combined with scRNA-seq (multiome), it links regulatory element activity to gene expression at single-cell resolution."
  },
  {
    id: 8,
    question: "CITE-seq (Cellular Indexing of Transcriptomes and Epitopes by sequencing) simultaneously measures:",
    options: ["DNA and RNA", "Surface protein abundance and mRNA expression in single cells", "Chromatin accessibility and methylation", "Genomic variants and RNA expression"],
    answer: 1,
    explanation: "CITE-seq uses oligonucleotide-conjugated antibodies against surface proteins. When cells are encapsulated in droplets, both mRNA and antibody-derived tags (ADTs) are captured by the same barcoded bead. After sequencing, each cell has both a transcriptome profile and quantitative surface protein measurements, analogous to combining flow cytometry with RNA-seq at single-cell level."
  },
  {
    id: 9,
    question: "The Human Cell Atlas project aims to:",
    options: ["Sequence every human's genome", "Create comprehensive reference maps of all human cell types using single-cell technologies", "Develop new sequencing platforms", "Replace clinical genetic testing"],
    answer: 1,
    explanation: "The Human Cell Atlas (HCA) is an international collaborative effort to create comprehensive reference maps of all human cells — defining cell types, states, and spatial organization across all tissues and organs using single-cell and spatial genomics. This reference will serve as a foundation for understanding human development, physiology, and disease mechanisms, analogous to how the Human Genome Project provided a reference genome."
  },
  {
    id: 10,
    question: "Batch effects in scRNA-seq arise from:",
    options: ["Biological differences between cell types", "Technical variation between samples processed at different times, by different operators, or with different reagent lots", "True rare cell populations", "Germline mutations"],
    answer: 1,
    explanation: "Batch effects are systematic technical variations that confound biological signals. Sources include different sample processing times, operators, reagent lots, sequencing lanes, and 10x Chromium chips. If not corrected, batch effects can be mistaken for biological differences. Integration methods (Harmony, Seurat CCA/RPCA, scVI, BBKNN) computationally align datasets across batches while preserving biological variation."
  },

  // ===== EPIGENOMICS & METHYLATION SEQUENCING (Q11–Q20) =====
  {
    id: 11,
    question: "Whole genome bisulfite sequencing (WGBS) detects DNA methylation by:",
    options: ["Using methylation-specific antibodies", "Converting unmethylated cytosines to uracil with sodium bisulfite while methylated cytosines remain unchanged", "Digesting methylated DNA with restriction enzymes", "Direct nanopore sequencing"],
    answer: 1,
    explanation: "Bisulfite treatment deaminates unmethylated cytosines to uracil (read as thymine after PCR), while methylated cytosines (5mC) are protected and remain as cytosine. Comparing bisulfite-converted sequences to the reference reveals methylation status at single-CpG resolution. WGBS is the gold standard for genome-wide methylation profiling but requires deep sequencing (~30x, ~90 Gb) and causes DNA degradation."
  },
  {
    id: 12,
    question: "Reduced representation bisulfite sequencing (RRBS) differs from WGBS in that it:",
    options: ["Sequences the entire genome at high coverage", "Enriches for CpG-rich regions using restriction enzyme digestion, reducing sequencing requirements", "Does not use bisulfite conversion", "Only detects hydroxymethylcytosine"],
    answer: 1,
    explanation: "RRBS uses MspI restriction enzyme (cuts at CCGG sites) to enrich for CpG-dense regions, particularly CpG islands and promoters. This reduces the sequencing requirement to ~2-5 Gb (vs. ~90 Gb for WGBS) while covering ~1-3 million CpGs (~10-15% of all CpGs). RRBS is cost-effective for focused methylation analysis but misses CpGs in non-CpG-island regions, intergenic areas, and enhancers."
  },
  {
    id: 13,
    question: "Methylation arrays (e.g., Illumina EPIC array) measure methylation by:",
    options: ["Bisulfite sequencing of the whole genome", "Hybridization of bisulfite-converted DNA to probes targeting specific CpG sites", "Mass spectrometry", "Chromatin immunoprecipitation"],
    answer: 1,
    explanation: "The Illumina EPIC array (EPICv2: ~935K CpGs) uses two types of probes (Infinium I and II) that differentiate methylated and unmethylated alleles at specific CpG sites after bisulfite conversion. Beta values (0-1) represent the proportion of methylation. Arrays are cost-effective, high-throughput, and well-validated for clinical applications (tumor classifiers, imprinting disorders) but cover only ~3% of all CpGs."
  },
  {
    id: 14,
    question: "The Heidelberg brain tumor methylation classifier uses:",
    options: ["Whole genome sequencing", "Genome-wide DNA methylation profiling to classify CNS tumors into molecular subtypes", "Only immunohistochemistry", "RNA expression profiling exclusively"],
    answer: 1,
    explanation: "The Heidelberg classifier uses Illumina methylation array data and a machine learning algorithm (random forest) to classify CNS tumors into >100 methylation-based subtypes. DNA methylation patterns are highly cell-type-specific and stable, making them excellent biomarkers. The classifier has reclassified ~12% of tumors compared to histopathological diagnosis, changing clinical management. It is now widely used in neuropathology."
  },
  {
    id: 15,
    question: "ChIP-seq (Chromatin Immunoprecipitation followed by sequencing) is used to:",
    options: ["Sequence the whole genome", "Identify genome-wide binding sites of specific proteins (transcription factors, histone modifications)", "Detect DNA methylation", "Measure gene expression"],
    answer: 1,
    explanation: "ChIP-seq crosslinks proteins to DNA, fragments chromatin, immunoprecipitates protein-DNA complexes with a specific antibody (e.g., anti-H3K4me3 for active promoters, anti-CTCF for insulator binding), and sequences the enriched DNA. Mapped reads reveal peaks indicating binding sites. ChIP-seq has mapped millions of regulatory elements and is foundational for understanding transcriptional regulation and epigenomic landscapes."
  },
  {
    id: 16,
    question: "CUT&Tag (Cleavage Under Targets and Tagmentation) is an alternative to ChIP-seq that offers:",
    options: ["Longer read lengths", "Lower input requirements, lower background, and faster workflow using protein A-Tn5 fusion", "Higher cost per sample", "Only works with RNA"],
    answer: 1,
    explanation: "CUT&Tag uses a protein A-Tn5 transposase fusion that is guided to target proteins by primary and secondary antibodies. Tn5 tagments (cuts and tags) DNA near the target, directly generating sequencing-ready fragments. Advantages over ChIP-seq include: much lower cell input (100-1,000 cells vs. millions), lower background, no sonication, faster protocol, and compatibility with single-cell approaches."
  },
  {
    id: 17,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) identifies:",
    options: ["DNA methylation patterns", "Open chromatin regions where DNA is accessible to regulatory factors", "mRNA expression levels", "Protein-protein interactions"],
    answer: 1,
    explanation: "ATAC-seq uses hyperactive Tn5 transposase to preferentially insert sequencing adapters into accessible (open) chromatin regions. After sequencing, peaks indicate regions of open chromatin (nucleosome-free regions at promoters, enhancers, and other regulatory elements). ATAC-seq requires only 500-50,000 cells, has a simple protocol (~3 hours), and has largely replaced DNase-seq and FAIRE-seq for chromatin accessibility profiling."
  },
  {
    id: 18,
    question: "Bisulfite sequencing cannot distinguish between 5-methylcytosine (5mC) and:",
    options: ["Unmethylated cytosine", "5-hydroxymethylcytosine (5hmC)", "Thymine", "Adenine"],
    answer: 1,
    explanation: "Both 5mC and 5hmC resist bisulfite deamination and are read as cytosine. Since 5hmC is an important intermediate in active DNA demethylation (generated by TET enzymes) with potential distinct regulatory functions, this is a significant limitation. Oxidative bisulfite sequencing (oxBS-seq) and TET-assisted bisulfite sequencing (TAB-seq) can distinguish 5mC from 5hmC. Nanopore sequencing can also directly detect both modifications."
  },
  {
    id: 19,
    question: "DNA methylation episignatures are used clinically to diagnose:",
    options: ["Infectious diseases", "Neurodevelopmental disorders caused by chromatin remodeling gene mutations (e.g., Kabuki, Sotos syndromes)", "Drug metabolism phenotypes", "Chromosomal aneuploidies"],
    answer: 1,
    explanation: "Episignatures are genome-wide DNA methylation patterns specific to particular genetic disorders, especially those involving chromatin remodeling and epigenetic regulation genes. Clinical episignature testing using methylation arrays can: (1) confirm VUS pathogenicity, (2) diagnose patients with atypical presentations, and (3) identify the molecular subtype when genetic testing is inconclusive. Over 60 episignatures have been characterized for conditions including Kabuki, Sotos, Floating-Harbor, and Coffin-Siris syndromes."
  },
  {
    id: 20,
    question: "Long-read sequencing can detect DNA methylation directly because:",
    options: ["It uses bisulfite conversion internally", "Modified bases produce distinct signals (kinetics in PacBio, current disruptions in Nanopore) without chemical conversion", "It sequences at higher depth", "It uses methylation-specific antibodies"],
    answer: 1,
    explanation: "PacBio detects base modifications through altered polymerase kinetics (inter-pulse duration) during real-time sequencing. Oxford Nanopore detects modifications through characteristic changes in ionic current as modified bases pass through the pore. Both approaches provide native, direct detection of methylation (5mC, 6mA, and others) without bisulfite conversion, preserving long-range haplotype and methylation information simultaneously."
  },

  // ===== METAGENOMICS & MICROBIAL GENOMICS (Q21–Q30) =====
  {
    id: 21,
    question: "16S rRNA gene sequencing for microbiome analysis targets:",
    options: ["The entire bacterial genome", "Hypervariable regions of the 16S ribosomal RNA gene to identify bacterial taxa", "Human mitochondrial DNA", "Viral RNA"],
    answer: 1,
    explanation: "The 16S rRNA gene (~1,500 bp) contains conserved regions (for universal primer binding) interspersed with nine hypervariable regions (V1-V9) that differ between bacterial species. Amplicon sequencing of one or more variable regions (commonly V3-V4) enables taxonomic classification and community profiling. 16S sequencing is cost-effective but provides limited functional information and species-level resolution."
  },
  {
    id: 22,
    question: "Shotgun metagenomic sequencing differs from 16S rRNA sequencing in that it:",
    options: ["Only sequences one gene", "Sequences all DNA in a sample, enabling species-level identification, strain typing, and functional analysis", "Is limited to bacteria only", "Cannot detect antibiotic resistance genes"],
    answer: 1,
    explanation: "Shotgun metagenomics randomly sequences all DNA in a sample without targeted amplification. Advantages over 16S include: species and strain-level identification, detection of all microorganisms (bacteria, viruses, fungi, parasites), functional gene content (metabolic pathways, virulence factors, antibiotic resistance genes), and no amplification bias. Challenges include higher cost, host DNA contamination, and greater computational requirements."
  },
  {
    id: 23,
    question: "Metagenomic next-generation sequencing (mNGS) for clinical infectious disease diagnosis can detect:",
    options: ["Only bacteria", "Virtually any pathogen (bacteria, viruses, fungi, parasites) without prior suspicion", "Only culturable organisms", "Only organisms with known genomes"],
    answer: 1,
    explanation: "Clinical mNGS is an unbiased, hypothesis-free approach that sequences all nucleic acids in a clinical sample (CSF, blood, respiratory). It can identify unexpected, rare, or novel pathogens missed by conventional testing. Notable successes include diagnosing neuroleptospirosis, Balamuthia meningoencephalitis, and novel viruses. Challenges include low pathogen abundance, human DNA contamination, and interpretation of commensal organisms."
  },
  {
    id: 24,
    question: "Antimicrobial resistance (AMR) genes can be detected by NGS through:",
    options: ["Only phenotypic susceptibility testing", "Identification of known resistance gene sequences and mutations in sequencing data", "Flow cytometry", "Protein crystallography"],
    answer: 1,
    explanation: "NGS-based AMR detection identifies resistance determinants including: acquired resistance genes (e.g., mecA for MRSA, blaCTX-M for ESBL, vanA for VRE), chromosomal mutations (e.g., gyrA for fluoroquinolone resistance, rpoB for rifampicin resistance in TB), and mobile genetic elements carrying resistance genes. Databases like CARD, ResFinder, and AMRFinderPlus catalog known resistance mechanisms for automated detection."
  },
  {
    id: 25,
    question: "Whole genome sequencing (WGS) for outbreak investigation provides:",
    options: ["Only species identification", "Single nucleotide-level resolution for determining transmission chains and outbreak relatedness", "Only antibiotic susceptibility information", "Serotyping information exclusively"],
    answer: 1,
    explanation: "WGS provides the highest resolution for molecular epidemiology. By comparing SNP differences between isolates, WGS can: determine if cases are part of the same outbreak (closely related genomes), reconstruct transmission chains, identify outbreak sources, and track pathogen evolution in real time. WGS has been transformative for TB, Salmonella, Listeria, and SARS-CoV-2 surveillance and outbreak investigation."
  },
  {
    id: 26,
    question: "Host DNA depletion in metagenomic sequencing is important because:",
    options: ["Host DNA improves pathogen detection", "Human DNA typically constitutes >99% of reads in clinical samples, reducing pathogen sensitivity", "Host DNA causes sequencing errors", "It is required by all sequencing platforms"],
    answer: 1,
    explanation: "In clinical samples (blood, CSF, tissue), human DNA vastly outnumbers pathogen DNA — often >99% of reads are human. Without host depletion, massive sequencing depth is needed to detect rare pathogen sequences. Depletion methods include differential lysis (saponin for blood cells), DNase treatment after pathogen enrichment, methylation-based depletion (NEBNext Microbiome Enrichment), and CRISPR-based removal of human sequences."
  },
  {
    id: 27,
    question: "Nanopore sequencing for real-time pathogen identification is advantageous because:",
    options: ["It requires the most complex library preparation", "Results can be obtained in minutes to hours as data streams in real time, without waiting for a complete run", "It has the lowest error rate", "It only works for viral pathogens"],
    answer: 1,
    explanation: "Nanopore sequencing enables real-time data analysis — pathogen identification can occur within minutes of sequencing start using tools like WIMP (What's In My Pot) or EPI2ME. Library preparation can be as fast as 10 minutes (rapid barcoding kit). This has been applied in Ebola/Zika surveillance in remote settings, SARS-CoV-2 sequencing, and point-of-care clinical diagnostics."
  },
  {
    id: 28,
    question: "SARS-CoV-2 genomic surveillance during the COVID-19 pandemic primarily relied on:",
    options: ["Whole genome sequencing using tiled amplicon approaches (e.g., ARTIC protocol)", "16S rRNA sequencing", "Whole exome sequencing", "Sanger sequencing of the full genome"],
    answer: 0,
    explanation: "The ARTIC protocol uses ~400 bp tiled amplicons covering the ~30 kb SARS-CoV-2 genome for sequencing on Illumina or Oxford Nanopore platforms. This approach enabled massive-scale global genomic surveillance, tracking variant emergence (Alpha, Delta, Omicron), monitoring mutations in the spike protein, and guiding public health responses. Over 16 million SARS-CoV-2 genomes have been shared via GISAID."
  },
  {
    id: 29,
    question: "Functional metagenomics involves:",
    options: ["Only taxonomic classification", "Cloning metagenomic DNA into expression vectors and screening for specific activities (e.g., novel enzymes, antibiotic resistance)", "Only 16S sequencing", "Culturing all organisms in a sample"],
    answer: 1,
    explanation: "Functional metagenomics clones environmental DNA fragments into expression libraries (typically E. coli), then screens for specific phenotypes (enzymatic activity, antibiotic resistance, biosynthetic capability). This approach can discover novel genes and functions from unculturable organisms without relying on sequence homology to known genes. It has identified novel antibiotics, enzymes for industrial applications, and resistance mechanisms."
  },
  {
    id: 30,
    question: "The gut microbiome in human health is best characterized by which diversity metrics?",
    options: ["Only total bacterial count", "Alpha diversity (within-sample richness/evenness) and beta diversity (between-sample compositional differences)", "Only the presence of pathogenic species", "Only Firmicutes-to-Bacteroidetes ratio"],
    answer: 1,
    explanation: "Alpha diversity measures within-sample diversity using metrics like Shannon index (richness and evenness), Simpson index (dominance), and observed ASVs/OTUs (richness). Beta diversity measures between-sample compositional differences using distance metrics (Bray-Curtis, UniFrac) visualized by PCoA/NMDS. Together, these metrics characterize microbiome community structure and enable comparison across conditions, treatments, or populations."
  },

  // ===== TRANSCRIPTOMICS & FUNCTIONAL GENOMICS (Q31–Q40) =====
  {
    id: 31,
    question: "In RNA-seq, poly(A) selection enriches for:",
    options: ["Ribosomal RNA", "Polyadenylated mRNA and long non-coding RNAs", "Small RNAs (miRNA, siRNA)", "DNA contamination"],
    answer: 1,
    explanation: "Poly(A) selection uses oligo-dT beads to capture polyadenylated transcripts, enriching for mRNA and some lncRNAs while depleting rRNA (~80-85% of total RNA). This is the standard approach for gene expression profiling. The alternative — ribosomal RNA depletion — is preferred when non-polyadenylated transcripts, degraded/FFPE RNA, or prokaryotic RNA are of interest."
  },
  {
    id: 32,
    question: "Differential gene expression analysis in RNA-seq typically uses:",
    options: ["Simple fold-change thresholds only", "Statistical models accounting for count data distribution and biological variability (e.g., DESeq2, edgeR)", "Visual inspection of read counts", "Only FPKM comparisons"],
    answer: 1,
    explanation: "DESeq2 and edgeR use negative binomial generalized linear models to account for the discrete (count) nature of RNA-seq data and biological variability (overdispersion). They perform normalization (accounting for library size and composition), variance stabilization, and statistical testing with multiple testing correction (Benjamini-Hochberg). These approaches are more robust than simple fold-change or t-tests for identifying significantly differentially expressed genes."
  },
  {
    id: 33,
    question: "FPKM and TPM in RNA-seq are measures of:",
    options: ["Sequencing quality", "Normalized gene expression levels accounting for gene length and sequencing depth", "Variant allele frequency", "Methylation levels"],
    answer: 1,
    explanation: "FPKM (Fragments Per Kilobase of transcript per Million mapped fragments) and TPM (Transcripts Per Million) normalize expression for gene length and sequencing depth. TPM is preferred because it is consistent across samples (TPM values sum to 1 million in each sample, enabling direct comparison). Neither accounts for batch effects or biological variability — raw counts with statistical normalization (DESeq2) are preferred for differential expression."
  },
  {
    id: 34,
    question: "Alternative splicing events detected by RNA-seq include all of the following EXCEPT:",
    options: ["Exon skipping (cassette exon)", "Intron retention", "Alternative 5' and 3' splice sites", "DNA methylation changes"],
    answer: 3,
    explanation: "RNA-seq can detect all major alternative splicing events: exon skipping (most common in mammals), intron retention, alternative 5'/3' splice sites, mutually exclusive exons, and alternative first/last exons. Junction reads spanning splice sites provide direct evidence. Tools like rMATS, SUPPA2, and Leafcutter quantify differential splicing. DNA methylation changes are epigenomic modifications detected by bisulfite sequencing, not RNA-seq."
  },
  {
    id: 35,
    question: "Long-read RNA-seq (Iso-Seq, direct RNA nanopore) provides advantages for:",
    options: ["Lower cost per sample", "Full-length transcript isoform characterization without assembly", "Higher per-base accuracy than short reads", "Simpler computational analysis"],
    answer: 1,
    explanation: "Long-read RNA-seq generates full-length transcript reads, enabling direct identification of complete isoform structures (all exons, splice junctions, 5'/3' ends) without computational assembly. This resolves complex alternative splicing, identifies novel isoforms, and detects gene fusions with precise breakpoints. PacBio Iso-Seq (HiFi accuracy) and Oxford Nanopore direct RNA sequencing (also detects RNA modifications) are complementary approaches."
  },
  {
    id: 36,
    question: "Gene set enrichment analysis (GSEA) is used in transcriptomics to:",
    options: ["Call individual variants", "Determine whether predefined sets of genes show statistically significant enrichment in specific biological conditions", "Normalize sequencing depth", "Perform sequence alignment"],
    answer: 1,
    explanation: "GSEA determines whether members of a gene set (defined by pathway, GO term, or other biological grouping) are overrepresented at the top or bottom of a ranked gene list (ranked by expression change). Unlike single-gene analysis, GSEA can detect coordinate but modest changes in entire pathways that may be biologically significant. This provides biological context and mechanistic insight from expression data."
  },
  {
    id: 37,
    question: "CRISPR screens combined with NGS readout are used to:",
    options: ["Sequence CRISPR guide RNAs", "Perform genome-wide functional genetic screens by tracking guide RNA abundance after selection", "Edit the sequencing platform", "Replace RNA-seq entirely"],
    answer: 1,
    explanation: "CRISPR knockout (CRISPRko) and activation (CRISPRa) screens use genome-wide guide RNA libraries to perturb genes. After applying selection (drug, growth, FACS sorting), NGS quantifies guide RNA representation. Enriched/depleted guides identify genes essential for the phenotype. Perturb-seq combines CRISPR perturbation with scRNA-seq to measure transcriptomic effects of individual gene knockouts at single-cell resolution."
  },
  {
    id: 38,
    question: "Small RNA-seq specifically targets:",
    options: ["mRNA", "Short non-coding RNAs including miRNAs, siRNAs, piRNAs, and tRNA fragments", "Ribosomal RNA", "Long non-coding RNAs"],
    answer: 1,
    explanation: "Small RNA-seq uses size selection (~18-40 nt) and specialized library preparation (adapter ligation to 3'-OH and 5'-phosphate ends characteristic of Dicer/RNase III products) to capture small non-coding RNAs. miRNAs (~22 nt) are the most studied, acting as post-transcriptional regulators. piRNAs protect germline genome integrity, and tRNA-derived fragments are emerging regulatory molecules. Small RNA-seq is used for biomarker discovery and functional studies."
  },
  {
    id: 39,
    question: "Ribosome profiling (Ribo-seq) measures:",
    options: ["Total mRNA expression", "Active translation by sequencing ribosome-protected mRNA fragments", "Ribosomal RNA mutations", "tRNA abundance"],
    answer: 1,
    explanation: "Ribo-seq captures ribosome-protected mRNA fragments (~28-30 nt) generated by RNase digestion, providing a genome-wide snapshot of actively translated mRNAs. It reveals which mRNAs are being translated, translation efficiency (Ribo-seq/RNA-seq ratio), translated open reading frames (including upstream ORFs and small ORFs), and ribosome stalling sites. This distinguishes transcriptional from translational regulation."
  },
  {
    id: 40,
    question: "Allele-specific expression (ASE) analysis from RNA-seq detects:",
    options: ["DNA mutations", "Unequal expression of maternal vs. paternal alleles of a gene, suggesting regulatory or imprinting effects", "Protein abundance", "Chromatin accessibility"],
    answer: 1,
    explanation: "ASE analysis uses heterozygous SNPs in RNA-seq data to quantify relative expression of each allele. Significant deviation from the expected 50:50 ratio suggests: genomic imprinting, cis-regulatory variants affecting expression, nonsense-mediated decay of one allele, or epigenetic silencing. ASE is a powerful tool for identifying pathogenic regulatory variants and for understanding allele-specific gene regulation."
  },

  // ===== EMERGING TECHNOLOGIES & FUTURE DIRECTIONS (Q41–Q50) =====
  {
    id: 41,
    question: "The Telomere-to-Telomere (T2T) Consortium completed the first gapless human genome assembly using:",
    options: ["Sanger sequencing alone", "Combination of PacBio HiFi long reads and Oxford Nanopore ultra-long reads", "Illumina short reads exclusively", "Microarray genotyping"],
    answer: 1,
    explanation: "The T2T-CHM13 assembly (2022) used PacBio HiFi reads (~20 kb, high accuracy) for primary assembly and Oxford Nanopore ultra-long reads (>100 kb) to span remaining gaps in centromeric satellite arrays and segmental duplications. This added ~200 Mb of previously unresolved sequence, including all centromeres, rDNA arrays, and subtelomeric regions. T2T-CHM13 replaced GRCh38 as the most complete human reference."
  },
  {
    id: 42,
    question: "Pangenome references differ from single linear references by:",
    options: ["Using fewer samples", "Representing genetic variation across a population using graph-based structures", "Only including coding sequences", "Eliminating the need for variant calling"],
    answer: 1,
    explanation: "The Human Pangenome Reference Consortium built a pangenome from 47 diverse individuals using graph-based data structures. Unlike a single linear reference (which represents one haplotype), the pangenome represents structural variants, insertions, and population-specific sequences as alternate paths in the graph. This reduces reference bias in read mapping, improves variant calling accuracy (especially for SVs and diverse populations), and captures sequences absent from GRCh38."
  },
  {
    id: 43,
    question: "Prime editing, an advanced CRISPR tool, achieves precise edits by:",
    options: ["Creating double-strand breaks and relying on HDR", "Using a reverse transcriptase fused to Cas9 nickase with a prime editing guide RNA (pegRNA) to write new sequences directly", "Using base deaminases", "Inserting entire genes via viral vectors"],
    answer: 1,
    explanation: "Prime editing uses a Cas9 H840A nickase fused to a reverse transcriptase, guided by a pegRNA that contains both the target-binding spacer and a template for the desired edit. The nickase cuts one strand, the reverse transcriptase copies the edit template into the nicked site, and cellular repair incorporates the edit. Prime editing enables all 12 point mutations, small insertions, and small deletions without double-strand breaks or donor DNA templates."
  },
  {
    id: 44,
    question: "Epigenome editing using dCas9 fused to effector domains can:",
    options: ["Permanently change DNA sequence", "Alter gene expression by modifying chromatin marks (methylation, acetylation) at targeted loci without changing DNA sequence", "Only detect epigenetic marks", "Replace gene therapy entirely"],
    answer: 1,
    explanation: "Catalytically dead Cas9 (dCas9) fused to epigenetic effectors enables targeted epigenome editing: dCas9-DNMT3A adds methylation (silencing), dCas9-TET1 removes methylation (activation), dCas9-p300 adds H3K27ac (activation), and dCas9-KRAB adds H3K9me3 (silencing). This allows reversible, tunable gene regulation without permanent DNA changes, with therapeutic potential for imprinting disorders, cancer, and neurological conditions."
  },
  {
    id: 45,
    question: "Multiomics integration in genomics combines:",
    options: ["Only two data types", "Multiple data layers (genomics, transcriptomics, epigenomics, proteomics, metabolomics) for comprehensive biological understanding", "Only sequencing data from different platforms", "Clinical and administrative data only"],
    answer: 1,
    explanation: "Multiomics integration analyzes multiple molecular layers simultaneously to provide a systems-level understanding of biology and disease. Methods include Multiomics Factor Analysis (MOFA), similarity network fusion, and deep learning approaches. Clinical multiomics (combining WGS + RNA-seq + methylation + proteomics) increases diagnostic yield for rare diseases and enables more precise cancer treatment selection."
  },
  {
    id: 46,
    question: "In situ sequencing methods enable:",
    options: ["Faster library preparation", "Sequencing RNA or DNA directly within intact tissue sections, preserving spatial context at subcellular resolution", "Lower cost than standard sequencing", "Only whole genome sequencing"],
    answer: 1,
    explanation: "In situ sequencing methods (FISSEQ, STARmap, HybISS) perform sequencing reactions directly within fixed tissue sections or cells, reading out gene identity at subcellular spatial resolution. Combined with imaging, this enables mapping thousands of genes to specific cellular compartments (nucleus, cytoplasm, dendrites). This provides spatial resolution beyond current spatial transcriptomics methods like 10x Visually (55 μm spot size)."
  },
  {
    id: 47,
    question: "Programmable RNA-targeting with Cas13 can be used for:",
    options: ["DNA editing exclusively", "Targeted RNA knockdown, RNA editing, and nucleic acid diagnostics (SHERLOCK)", "Protein degradation", "Chromosome engineering"],
    answer: 1,
    explanation: "Cas13 is an RNA-guided RNA nuclease that cleaves single-stranded RNA. Applications include: (1) targeted RNA knockdown (alternative to RNAi), (2) RNA editing when fused to ADAR deaminases (A-to-I editing), and (3) nucleic acid diagnostics (SHERLOCK — Specific High-sensitivity Enzymatic Reporter unLOCKing) exploiting Cas13's collateral cleavage activity for attomolar-level detection of viral RNA (SARS-CoV-2, Zika, Dengue)."
  },
  {
    id: 48,
    question: "Cell-free DNA (cfDNA) fragmentomics analyzes:",
    options: ["Only the sequence of cfDNA", "Fragmentation patterns (fragment size, end motifs, nucleosome positioning) of cell-free DNA for tissue-of-origin and disease detection", "Only DNA methylation", "Protein levels in blood"],
    answer: 1,
    explanation: "cfDNA fragmentomics exploits the non-random fragmentation of cell-free DNA, which reflects nucleosome positioning and chromatin organization of the cell of origin. Fragment size profiles, preferred end coordinates, and end motifs differ between tissues. Fragmentomics can identify tissue of origin for cancer detection (especially early-stage), monitor organ transplant rejection, and complement mutation-based liquid biopsy approaches."
  },
  {
    id: 49,
    question: "Genome-wide CRISPR activation (CRISPRa) screens differ from knockout screens in that they:",
    options: ["Delete target genes", "Upregulate endogenous gene expression using dCas9 fused to transcriptional activators", "Use homologous recombination", "Only work in bacteria"],
    answer: 1,
    explanation: "CRISPRa uses catalytically dead Cas9 (dCas9) fused to transcriptional activators (VP64, p65, Rta in the VPR system, or synergistic activation mediator/SAM) targeted to gene promoters by guide RNAs. This upregulates endogenous gene expression without altering DNA sequence. CRISPRa screens identify gain-of-function phenotypes complementary to knockout screens, revealing genes whose overexpression drives drug resistance, differentiation, or other phenotypes."
  },
  {
    id: 50,
    question: "The concept of 'precision medicine' in genomics aims to:",
    options: ["Apply the same treatment to all patients", "Tailor prevention, diagnosis, and treatment strategies based on individual genetic, environmental, and lifestyle factors", "Only use the most expensive therapies", "Eliminate the need for clinical trials"],
    answer: 1,
    explanation: "Precision medicine uses genomic and molecular profiling to match patients with the most effective treatments and prevention strategies. Examples include: pharmacogenomic-guided prescribing, targeted cancer therapies matched to tumor mutations, risk stratification using polygenic scores, and gene therapy for monogenic disorders. The All of Us Research Program aims to gather health data from 1 million+ diverse participants to advance precision medicine."
  }
]

export default questions
