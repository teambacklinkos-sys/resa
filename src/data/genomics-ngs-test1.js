const questions = [
  // ===== GENOME ORGANIZATION & STRUCTURE (Q1–Q10) =====
  {
    id: 1,
    question: "The human genome contains approximately how many protein-coding genes?",
    options: ["~5,000", "~20,000", "~100,000", "~500,000"],
    answer: 1,
    explanation: "The human genome contains approximately 20,000-21,000 protein-coding genes, far fewer than originally predicted. This was a surprising finding from the Human Genome Project, as simpler organisms like C. elegans have ~19,000 genes. Genome complexity arises from alternative splicing, non-coding RNAs, and regulatory elements rather than gene number."
  },
  {
    id: 2,
    question: "What percentage of the human genome consists of protein-coding sequences?",
    options: ["~1.5%", "~10%", "~25%", "~50%"],
    answer: 0,
    explanation: "Only approximately 1.5% of the human genome encodes proteins (exons). The remaining ~98.5% includes introns (~25%), intergenic sequences, repetitive elements (~45%), regulatory regions, and non-coding RNAs. The ENCODE project demonstrated that ~80% of the genome has some biochemical function, though the functional significance of much of this activity is debated."
  },
  {
    id: 3,
    question: "The most abundant repetitive elements in the human genome are:",
    options: ["SINEs (Alu elements)", "LINEs (LINE-1/L1 elements)", "DNA transposons", "Satellite DNA"],
    answer: 1,
    explanation: "LINE-1 (L1) elements are the most abundant repetitive elements by total genomic coverage (~17% of the human genome, ~500,000 copies). Alu elements (SINEs) are the most abundant by copy number (~1.1 million copies, ~11% of the genome). Together, transposable elements constitute approximately 45% of the human genome."
  },
  {
    id: 4,
    question: "CpG islands are typically found at:",
    options: ["Centromeres", "Telomeres", "Gene promoter regions", "Introns exclusively"],
    answer: 2,
    explanation: "CpG islands are regions of >200 bp with >50% GC content and observed/expected CpG ratio >0.6. Approximately 70% of human gene promoters are associated with CpG islands. In normal somatic cells, most CpG islands at promoters are unmethylated and associated with active or poised transcription. Aberrant CpG island hypermethylation at tumor suppressor promoters is a hallmark of cancer."
  },
  {
    id: 5,
    question: "Pseudogenes differ from functional genes in that they:",
    options: ["Have no sequence similarity to known genes", "Are derived from functional genes but have accumulated mutations preventing function", "Are always located on sex chromosomes", "Encode functional non-coding RNAs exclusively"],
    answer: 1,
    explanation: "Pseudogenes are genomic sequences derived from functional genes through duplication (duplicated pseudogenes) or retrotransposition (processed pseudogenes, lacking introns). They have accumulated disabling mutations (premature stops, frameshifts, splice site disruptions) that prevent production of functional protein. The human genome contains ~13,000 pseudogenes. Some pseudogenes regulate their parent genes via competing endogenous RNA mechanisms."
  },
  {
    id: 6,
    question: "Topologically associating domains (TADs) are:",
    options: ["Protein domains in transcription factors", "Self-interacting chromatin regions that constrain enhancer-promoter interactions", "Domains in restriction enzymes", "Ribosomal subunit regions"],
    answer: 1,
    explanation: "TADs are megabase-scale chromatin domains within which genomic regions interact more frequently with each other than with regions outside the domain. TAD boundaries are enriched for CTCF binding sites and cohesin, and they constrain enhancer-promoter communication. Disruption of TAD boundaries can cause enhancer hijacking, leading to developmental disorders and cancer."
  },
  {
    id: 7,
    question: "The ENCODE project aimed to:",
    options: ["Sequence the human genome for the first time", "Identify all functional elements in the human genome", "Develop new sequencing technologies", "Create a database of human mutations"],
    answer: 1,
    explanation: "The Encyclopedia of DNA Elements (ENCODE) project systematically mapped functional elements across the human genome, including coding/non-coding transcripts, chromatin accessibility, histone modifications, transcription factor binding sites, and 3D chromatin architecture. ENCODE demonstrated that approximately 80% of the genome has biochemical activity, though the biological significance remains debated."
  },
  {
    id: 8,
    question: "Segmental duplications (low-copy repeats) in the human genome are associated with:",
    options: ["Centromere function", "Recurrent genomic disorders via non-allelic homologous recombination (NAHR)", "Telomere maintenance", "X-chromosome inactivation"],
    answer: 1,
    explanation: "Segmental duplications are blocks of DNA (>1 kb, >90% sequence identity) present at two or more locations in the genome. They serve as substrates for non-allelic homologous recombination (NAHR) during meiosis, generating recurrent microdeletions and microduplications (genomic disorders). Examples include 22q11.2 deletion (DiGeorge), 7q11.23 deletion (Williams), and CMT1A/HNPP."
  },
  {
    id: 9,
    question: "The mitochondrial genome differs from the nuclear genome in that it:",
    options: ["Is linear and much larger", "Is circular, maternally inherited, and lacks introns", "Contains mostly non-coding sequences", "Undergoes meiotic recombination"],
    answer: 1,
    explanation: "The human mitochondrial genome is a 16,569 bp circular double-stranded DNA molecule encoding 13 proteins (oxidative phosphorylation subunits), 22 tRNAs, and 2 rRNAs. It is maternally inherited, lacks introns, has a modified genetic code, uses polycistronic transcription, and has a higher mutation rate than nuclear DNA due to limited repair mechanisms and proximity to reactive oxygen species."
  },
  {
    id: 10,
    question: "Copy number variations (CNVs) in the human genome:",
    options: ["Are always pathogenic", "Are rare events affecting <0.1% of the population", "Are common structural variants that can be benign or pathogenic", "Only involve mitochondrial DNA"],
    answer: 2,
    explanation: "CNVs are deletions or duplications >50 bp to several Mb in size. They are a major source of structural genomic variation — any two individuals differ by ~1,000 CNVs covering ~4 Mb. Most CNVs are benign (polymorphic), but some cause disease through gene dosage alteration, gene disruption, or position effects. CNVs account for more nucleotide differences between individuals than SNPs."
  },

  // ===== NGS FUNDAMENTALS & ILLUMINA SEQUENCING (Q11–Q20) =====
  {
    id: 11,
    question: "Illumina sequencing technology is based on:",
    options: ["Pyrosequencing", "Sequencing by synthesis with reversible terminators", "Nanopore detection of nucleotides", "Single-molecule real-time sequencing"],
    answer: 1,
    explanation: "Illumina sequencing uses sequencing by synthesis (SBS) with fluorescently labeled reversible terminators. After each incorporation cycle, the fluorescent signal is imaged (identifying the base), then the terminator and fluorophore are cleaved to allow the next cycle. This generates millions to billions of short reads (75-300 bp) simultaneously on a flow cell."
  },
  {
    id: 12,
    question: "In Illumina sequencing, bridge amplification serves to:",
    options: ["Amplify the entire genome", "Generate clonal clusters of identical DNA fragments on the flow cell surface", "Convert RNA to cDNA", "Remove adapter sequences"],
    answer: 1,
    explanation: "Bridge amplification creates clonal clusters by bending DNA fragments to hybridize with adjacent surface-bound oligonucleotides, forming bridge structures that are extended by polymerase. Each cluster contains ~1,000 identical copies of the original fragment, providing sufficient signal for fluorescent detection during sequencing. This cluster generation occurs on the patterned flow cell surface."
  },
  {
    id: 13,
    question: "Paired-end sequencing in NGS refers to:",
    options: ["Sequencing both strands of DNA simultaneously", "Sequencing from both ends of each DNA fragment", "Using two different sequencing platforms", "Sequencing two samples in the same run"],
    answer: 1,
    explanation: "Paired-end sequencing reads both ends of each DNA fragment (read 1 from one end, read 2 from the other), generating two reads separated by a known insert size. This improves alignment accuracy, enables detection of structural variants (deletions, inversions, translocations), and helps span repetitive regions. It is preferred over single-end reads for most applications."
  },
  {
    id: 14,
    question: "Library preparation for NGS typically involves all of the following steps EXCEPT:",
    options: ["DNA fragmentation", "End repair and A-tailing", "Adapter ligation", "In vivo cloning in bacterial cells"],
    answer: 3,
    explanation: "NGS library preparation involves: (1) DNA fragmentation (enzymatic or mechanical/sonication), (2) end repair to create blunt ends, (3) A-tailing (adding dA to 3' ends), (4) adapter ligation (platform-specific adapters for clustering and sequencing priming), and (5) PCR amplification (optional, can introduce bias). In vivo cloning in bacteria is used in Sanger sequencing but not NGS."
  },
  {
    id: 15,
    question: "Phred quality score of Q30 indicates a base call accuracy of:",
    options: ["90%", "99%", "99.9%", "99.99%"],
    answer: 2,
    explanation: "Phred quality scores express base call error probability logarithmically: Q = -10 × log₁₀(P), where P is the error probability. Q10 = 90% accuracy (1 in 10 error), Q20 = 99% (1 in 100), Q30 = 99.9% (1 in 1,000), Q40 = 99.99% (1 in 10,000). Q30 is the standard quality threshold for most NGS applications. A run with >80% bases at Q30 or above is considered high quality."
  },
  {
    id: 16,
    question: "Index (barcode) sequences in NGS are used for:",
    options: ["Quality control of sequencing", "Multiplexing — allowing multiple samples to be sequenced in a single run", "Improving read length", "Correcting sequencing errors"],
    answer: 1,
    explanation: "Index/barcode sequences (typically 6-10 bp) are unique short sequences added to each sample's adapters during library preparation. After pooling and sequencing multiple samples together (multiplexing), reads are computationally sorted (demultiplexed) by their index sequences back to individual samples. Dual indexing (i5 + i7) reduces index hopping/misassignment."
  },
  {
    id: 17,
    question: "The primary limitation of Illumina short-read sequencing is:",
    options: ["Low throughput", "High per-base error rate", "Difficulty resolving repetitive regions and detecting structural variants", "Inability to sequence DNA"],
    answer: 2,
    explanation: "Illumina's short read lengths (75-300 bp) make it difficult to span repetitive elements (Alu ~300 bp, LINE-1 ~6 kb), resolve complex structural variants, phase haplotypes, and assemble de novo genomes. Long-read technologies (PacBio HiFi, Oxford Nanopore) address these limitations with reads of 10-100+ kb, though at lower throughput and higher per-base cost."
  },
  {
    id: 18,
    question: "Unique molecular identifiers (UMIs) are used in NGS to:",
    options: ["Increase sequencing depth", "Distinguish true variants from PCR duplicates and sequencing errors", "Improve read length", "Enable paired-end sequencing"],
    answer: 1,
    explanation: "UMIs are short random sequences (8-16 bp) attached to each original DNA molecule before amplification. After sequencing, reads sharing the same UMI originated from the same original molecule. This allows identification and removal of PCR duplicates, correction of PCR amplification bias, and accurate counting of original molecules — critical for applications like liquid biopsy ctDNA detection and single-cell sequencing."
  },
  {
    id: 19,
    question: "Flow cell patterning in modern Illumina platforms (e.g., NovaSeq) improves sequencing by:",
    options: ["Increasing read length", "Arranging nanowells in a defined pattern to maximize cluster density and data output", "Eliminating the need for library preparation", "Allowing single-molecule sequencing"],
    answer: 1,
    explanation: "Patterned flow cells contain billions of nanowells arranged in a regular grid pattern, each designed to capture a single library fragment for cluster generation. This eliminates the random cluster distribution of unpatterned flow cells, maximizes usable cluster density (reducing wasted space), and enables more consistent data quality and higher total output per run."
  },
  {
    id: 20,
    question: "GC bias in NGS refers to:",
    options: ["Preferential sequencing of G and C bases", "Uneven coverage of genomic regions based on their GC content", "Errors in base calling at G and C positions", "Contamination with GC-rich organisms"],
    answer: 1,
    explanation: "GC bias causes systematic under- or over-representation of genomic regions based on their GC content. Extreme GC-rich or AT-rich regions may have reduced coverage. GC bias arises during PCR amplification (Taq polymerase preference), cluster generation, and library preparation. PCR-free library preparation and computational correction can mitigate GC bias."
  },

  // ===== LONG-READ SEQUENCING TECHNOLOGIES (Q21–Q30) =====
  {
    id: 21,
    question: "PacBio HiFi (circular consensus sequencing) achieves high accuracy by:",
    options: ["Using shorter reads", "Sequencing a circularized DNA molecule multiple times and generating a consensus", "Using fluorescent reversible terminators", "Performing bridge amplification"],
    answer: 1,
    explanation: "PacBio HiFi creates SMRTbell libraries where DNA inserts are circularized with adapters. The polymerase traverses the circular template multiple times, generating multiple subreads from the same molecule. The consensus of these subreads achieves >99.9% accuracy (Q30+) with read lengths of 10-25 kb, combining long-read advantages with short-read-level accuracy."
  },
  {
    id: 22,
    question: "Oxford Nanopore sequencing detects nucleotides by measuring:",
    options: ["Fluorescence emission", "Changes in ionic current as DNA passes through a protein nanopore", "Mass-to-charge ratio", "Pyrophosphate release"],
    answer: 1,
    explanation: "Oxford Nanopore technology threads single-stranded DNA through a protein nanopore embedded in an electrically resistant membrane. Each nucleotide (or k-mer of ~5-6 bases) passing through the pore creates a characteristic disruption in the ionic current. Base calling algorithms translate these current signals into nucleotide sequences. This enables real-time, direct sequencing without amplification or labeling."
  },
  {
    id: 23,
    question: "A key advantage of Oxford Nanopore technology over other platforms is:",
    options: ["Highest per-base accuracy", "Ability to directly detect DNA/RNA modifications (e.g., methylation) without bisulfite conversion", "Lowest cost per base", "Shortest library preparation time always"],
    answer: 1,
    explanation: "Nanopore sequencing directly detects base modifications (5mC, 6mA, BrdU, etc.) because modified bases produce distinct current signatures compared to canonical bases. This eliminates the need for bisulfite conversion (which degrades DNA) or immunoprecipitation. Combined with ultra-long reads (>1 Mb possible), nanopore uniquely enables simultaneous haplotype-resolved sequence and methylation analysis."
  },
  {
    id: 24,
    question: "The MinION sequencer from Oxford Nanopore is notable because it:",
    options: ["Is the largest sequencing instrument available", "Is a portable, USB-powered device enabling point-of-care sequencing", "Uses Illumina chemistry", "Only sequences RNA"],
    answer: 1,
    explanation: "The MinION is a pocket-sized (~100g) sequencing device connected via USB to a laptop. It has been used for real-time pathogen surveillance in Ebola/Zika outbreaks, Antarctic field research, the International Space Station, and clinical settings. While throughput is lower than benchtop sequencers, its portability and real-time data streaming enable rapid, decentralized genomics."
  },
  {
    id: 25,
    question: "PacBio SMRT sequencing uses which detection method?",
    options: ["Electrical current measurement", "Detection of fluorescent nucleotides incorporated in zero-mode waveguides (ZMWs)", "Pyrophosphate detection", "Mass spectrometry"],
    answer: 1,
    explanation: "PacBio SMRT sequencing immobilizes a single DNA polymerase in a zero-mode waveguide (ZMW) — a nanophotonic structure that limits fluorescence detection to the immediate vicinity of the polymerase. Fluorescently labeled nucleotides produce a characteristic pulse upon incorporation, enabling real-time observation of DNA synthesis at single-molecule resolution."
  },
  {
    id: 26,
    question: "Ultra-long nanopore reads (>100 kb) are particularly valuable for:",
    options: ["Reducing sequencing costs", "Resolving complex structural variants, centromeres, and telomere-to-telomere genome assembly", "Improving SNP calling accuracy", "Reducing computational requirements"],
    answer: 1,
    explanation: "Ultra-long reads can span entire repetitive elements, segmental duplications, centromeric satellite arrays, and complex structural variants that are unresolvable with short reads. The T2T Consortium used ultra-long nanopore and PacBio HiFi reads to complete the first telomere-to-telomere human genome assembly (T2T-CHM13), adding ~200 Mb of previously unresolved sequence."
  },
  {
    id: 27,
    question: "Adaptive sampling (Read Until) on Oxford Nanopore platforms allows:",
    options: ["Longer read generation", "Real-time selective sequencing by rejecting unwanted reads mid-sequencing", "Higher base quality", "Faster library preparation"],
    answer: 1,
    explanation: "Adaptive sampling analyzes the first ~400-1000 bases of each read in real time and compares them to a target reference. If the read maps to a region of interest, sequencing continues; if not, the read is rejected (voltage reversal ejects the strand) and the pore is freed for the next molecule. This enables targeted enrichment without capture or amplification, dynamically during sequencing."
  },
  {
    id: 28,
    question: "Duplex sequencing on Oxford Nanopore achieves higher accuracy by:",
    options: ["Sequencing only one strand", "Sequencing both complementary strands of the same DNA molecule and building a consensus", "Using chemical modification of bases", "Increasing pore size"],
    answer: 1,
    explanation: "In duplex nanopore sequencing, both the template and complement strands of the same double-stranded DNA molecule pass through the pore consecutively. By combining base calls from both strands, random errors are corrected, achieving accuracy >99% (Q20+). Combined with newer base-calling algorithms, duplex reads approach Q30 accuracy."
  },
  {
    id: 29,
    question: "Linked-read sequencing (10x Genomics Chromium) partitions DNA into:",
    options: ["Individual chromosomes", "Gel bead-in-emulsion (GEM) droplets with barcoded short reads from the same long molecule", "Single cells only", "Individual genes"],
    answer: 1,
    explanation: "10x Genomics Chromium technology partitions high molecular weight DNA into ~1 million GEM droplets. Within each droplet, a single long DNA molecule is barcoded and fragmented, generating short reads that share a common barcode. Computationally linking these reads reconstructs long-range information (haplotype phasing, SV detection) from short-read data. Note: 10x Genomics discontinued this product in 2020."
  },
  {
    id: 30,
    question: "Hi-C sequencing is used to study:",
    options: ["RNA expression levels", "Three-dimensional chromatin organization and spatial genome architecture", "DNA methylation patterns", "Single nucleotide polymorphisms"],
    answer: 1,
    explanation: "Hi-C captures spatial proximity of genomic regions by crosslinking interacting chromatin segments, digesting with restriction enzymes, ligating proximal fragments, and sequencing the chimeric junctions. This generates a genome-wide contact map revealing TADs, compartments (A/B), and chromatin loops. Hi-C has also been adapted for scaffolding genome assemblies using chromatin proximity information."
  },

  // ===== NGS APPLICATIONS: WGS, WES & PANELS (Q31–Q40) =====
  {
    id: 31,
    question: "Whole genome sequencing (WGS) at 30x coverage means:",
    options: ["30% of the genome is sequenced", "Each base is sequenced an average of 30 times", "30 million reads are generated", "The genome is sequenced in 30 hours"],
    answer: 1,
    explanation: "Coverage (depth) refers to the average number of times each base in the genome is independently sequenced. 30x WGS means each position is covered by approximately 30 independent reads on average. For a 3 Gb human genome at 30x, this requires ~90 Gb of sequence data (~900 million 100 bp paired-end reads). Higher coverage improves variant detection sensitivity and genotype accuracy."
  },
  {
    id: 32,
    question: "Whole exome sequencing (WES) captures approximately:",
    options: ["The entire genome", "~30 Mb of protein-coding exons (~1-2% of the genome)", "~500 Mb of regulatory regions", "Only mitochondrial DNA"],
    answer: 1,
    explanation: "WES uses hybridization capture probes (baits) to selectively enrich protein-coding exons (~30 Mb, ~1-2% of the genome) plus flanking splice sites. At 100x mean coverage, WES requires ~6-8 Gb of data, making it ~30-50x cheaper than WGS at equivalent coding region coverage. WES identifies ~85% of known disease-causing variants but misses non-coding, structural, and deep intronic variants."
  },
  {
    id: 33,
    question: "Hybridization capture for exome enrichment works by:",
    options: ["PCR amplification of all exons individually", "Biotinylated RNA or DNA probes that hybridize to target regions, captured with streptavidin beads", "Restriction enzyme digestion of non-coding regions", "CRISPR-based cutting of non-target regions"],
    answer: 1,
    explanation: "Hybridization capture uses biotinylated oligonucleotide probes (baits) complementary to target sequences (exons). After hybridization, target-probe complexes are pulled down with streptavidin-coated magnetic beads, and non-target DNA is washed away. Major capture kits include Agilent SureSelect, IDT xGen, Twist Bioscience, and Roche SeqCap. Probe design and uniformity critically affect capture efficiency and coverage uniformity."
  },
  {
    id: 34,
    question: "Targeted gene panels (e.g., 50-500 gene panels) are preferred over WES/WGS when:",
    options: ["The clinical phenotype is completely unknown", "Rapid turnaround, deeper coverage, and reduced incidental findings are priorities", "Structural variants are the primary concern", "Discovery of novel genes is the goal"],
    answer: 1,
    explanation: "Targeted panels offer advantages: (1) deeper coverage (500-1000x vs. 30-100x) improving sensitivity for mosaic and somatic variants, (2) faster turnaround time, (3) lower cost, (4) reduced incidental findings, and (5) easier interpretation. They are ideal when the clinical differential is narrow (e.g., hereditary cancer panel, cardiomyopathy panel, epilepsy panel). WES/WGS is preferred for diagnostically challenging cases."
  },
  {
    id: 35,
    question: "The diagnostic yield of WES for suspected Mendelian disorders is approximately:",
    options: ["5-10%", "25-40%", "70-80%", "95-100%"],
    answer: 1,
    explanation: "WES achieves a diagnostic yield of approximately 25-40% for suspected Mendelian disorders, varying by phenotype, trio vs. proband-only analysis, and reanalysis. Trio WES (proband + both parents) is more efficient due to de novo variant filtering. The undiagnosed cases may harbor variants in non-coding regions (missed by WES), novel genes, or complex inheritance patterns requiring WGS or functional studies."
  },
  {
    id: 36,
    question: "Trio analysis in clinical WES/WGS involves sequencing:",
    options: ["Three different tissues from the same patient", "The proband and both biological parents", "Three unrelated controls", "Three different gene panels"],
    answer: 1,
    explanation: "Trio analysis sequences the affected proband and both unaffected biological parents simultaneously. This enables: (1) identification of de novo variants (present in proband, absent in parents), (2) phasing of compound heterozygous variants to confirm biallelic inheritance, and (3) filtering of benign familial variants. Trio analysis increases diagnostic yield by ~10-15% compared to proband-only WES."
  },
  {
    id: 37,
    question: "RNA sequencing (RNA-seq) complements WES/WGS by detecting:",
    options: ["Germline DNA variants only", "Aberrant splicing, mono-allelic expression, and expression outliers", "Chromosomal aneuploidies only", "Epigenetic modifications only"],
    answer: 1,
    explanation: "RNA-seq adds diagnostic value beyond DNA sequencing by identifying: (1) aberrant splicing caused by cryptic splice variants, (2) mono-allelic expression suggesting one null allele, (3) expression outliers indicating regulatory or structural variants affecting gene expression, and (4) gene fusion events. RNA-seq increases the diagnostic yield by 10-35% in undiagnosed Mendelian disease cohorts."
  },
  {
    id: 38,
    question: "Amplicon-based target enrichment differs from hybridization capture in that it:",
    options: ["Uses randomly primed synthesis", "Uses multiplex PCR with target-specific primer pairs to amplify regions of interest", "Requires biotinylated probes", "Produces longer fragments"],
    answer: 1,
    explanation: "Amplicon-based enrichment uses highly multiplexed PCR with target-specific primer pairs to amplify regions of interest. It requires less input DNA, has simpler workflows, and faster turnaround than hybridization capture. However, it is limited by primer design constraints, allele dropout (if variants occur at primer binding sites), and less uniform coverage. Examples include Ion AmpliSeq and Illumina TruSeq Custom Amplicon."
  },
  {
    id: 39,
    question: "Shallow whole genome sequencing (sWGS) at 0.1-1x coverage is used clinically for:",
    options: ["SNP and indel calling", "Non-invasive prenatal testing (NIPT) and tumor copy number profiling", "De novo genome assembly", "Single nucleotide variant detection"],
    answer: 1,
    explanation: "At 0.1-1x coverage, sWGS cannot reliably call individual variants but can detect genome-wide copy number changes by counting reads per genomic bin. This enables NIPT (detecting fetal trisomies from cfDNA in maternal plasma) and tumor copy number profiling from circulating tumor DNA. The low sequencing requirement makes sWGS cost-effective for these screening applications."
  },
  {
    id: 40,
    question: "Clinical-grade WGS is increasingly preferred over WES because:",
    options: ["It is always cheaper", "It detects non-coding variants, structural variants, mitochondrial variants, and provides more uniform coverage", "It requires less computational analysis", "It has a 100% diagnostic yield"],
    answer: 1,
    explanation: "WGS advantages over WES include: (1) detection of non-coding regulatory variants, (2) uniform coverage without capture bias, (3) superior structural variant detection (balanced rearrangements, CNVs), (4) mitochondrial genome coverage, (5) short tandem repeat analysis, and (6) no capture step reducing batch effects. As WGS costs decline, many clinical labs are transitioning from WES to WGS as the primary test."
  },

  // ===== SEQUENCING DATA QUALITY & METRICS (Q41–Q50) =====
  {
    id: 41,
    question: "FASTQ format stores which types of data?",
    options: ["Aligned reads and their genomic positions", "Raw sequence reads and per-base quality scores", "Variant calls and annotations", "Gene expression counts"],
    answer: 1,
    explanation: "FASTQ is the standard format for raw NGS data, containing four lines per read: (1) header with read identifier, (2) nucleotide sequence, (3) separator line (+), and (4) ASCII-encoded quality scores (Phred+33 encoding). Each quality character corresponds to a base call confidence score. FASTQ files are typically compressed (.fastq.gz) and can be extremely large (50-200 GB per WGS sample)."
  },
  {
    id: 42,
    question: "FastQC is a bioinformatics tool used for:",
    options: ["Variant calling", "Quality assessment of raw sequencing data", "Genome assembly", "Phylogenetic analysis"],
    answer: 1,
    explanation: "FastQC provides a comprehensive quality assessment of raw FASTQ files, including per-base quality scores, per-sequence quality distribution, GC content, sequence length distribution, duplication levels, adapter content, and overrepresented sequences. It flags potential issues (adapter contamination, quality drops at read ends, biased base composition) that may require trimming or filtering before alignment."
  },
  {
    id: 43,
    question: "Adapter trimming in NGS data processing removes:",
    options: ["Low-quality bases only", "Adapter sequences that were ligated during library preparation and appear in reads", "Duplicate reads", "Unmapped reads"],
    answer: 1,
    explanation: "When sequenced fragments are shorter than the read length, the sequencer reads through the insert into the adapter sequence on the opposite end. These adapter sequences must be trimmed before alignment to prevent misalignment. Tools like Trimmomatic, Cutadapt, and fastp perform adapter trimming along with quality filtering. Adapter contamination is more common in libraries with short insert sizes."
  },
  {
    id: 44,
    question: "PCR duplicate reads in NGS data arise from:",
    options: ["Sequencing errors", "Multiple sequencing of PCR copies of the same original DNA fragment", "Adapter contamination", "Low quality bases"],
    answer: 1,
    explanation: "During library preparation, PCR amplification creates multiple copies of each original molecule. If multiple copies of the same original fragment are sequenced, these are PCR duplicates. They do not provide independent information and can bias variant allele frequencies. Duplicates are identified (same alignment position and orientation) and marked/removed using tools like Picard MarkDuplicates or samtools markdup."
  },
  {
    id: 45,
    question: "On-target rate in exome or panel sequencing refers to:",
    options: ["The error rate of sequencing", "The percentage of reads mapping to the intended target regions", "The percentage of variants confirmed by Sanger", "The duplication rate"],
    answer: 1,
    explanation: "On-target rate (enrichment efficiency) measures the percentage of mapped, non-duplicate reads that fall within the targeted regions. For well-performing exome captures, on-target rates are typically 60-80%. Low on-target rates waste sequencing capacity on non-target regions and may indicate problems with capture probe hybridization, DNA quality, or library preparation."
  },
  {
    id: 46,
    question: "Coverage uniformity in NGS is important because:",
    options: ["It reduces sequencing cost", "Uneven coverage creates regions with insufficient depth for confident variant calling", "It improves read length", "It eliminates the need for quality control"],
    answer: 1,
    explanation: "Non-uniform coverage means some regions have excessive depth (wasted capacity) while others fall below the minimum threshold for reliable variant detection. Factors affecting uniformity include GC bias, capture probe efficiency, repetitive sequences, and PCR amplification bias. Metrics like fold-80 base penalty (F80) quantify non-uniformity. PCR-free WGS typically achieves the most uniform coverage."
  },
  {
    id: 47,
    question: "The transition-to-transversion ratio (Ti/Tv) is used as a quality metric for variant calls because:",
    options: ["Transitions are always pathogenic", "The expected Ti/Tv is ~2.0-2.1 for WGS and ~2.8-3.3 for WES; deviations suggest artifacts", "Transversions are more common than transitions", "Only transitions are clinically relevant"],
    answer: 1,
    explanation: "Transitions (purine↔purine or pyrimidine↔pyrimidine) are ~2x more common than transversions (purine↔pyrimidine) in the human genome. WGS Ti/Tv is ~2.0-2.1, while WES is higher (~2.8-3.3) because coding regions are under different mutational pressures. A significantly lower ratio suggests excess false-positive variant calls (sequencing errors tend to produce equal Ti and Tv), serving as a quality indicator."
  },
  {
    id: 48,
    question: "Mean insert size in paired-end sequencing refers to:",
    options: ["The length of each read", "The average length of DNA fragments between the adapters in the library", "The distance between two genes", "The flow cell lane width"],
    answer: 1,
    explanation: "Insert size is the length of the original DNA fragment between the adapter sequences. For typical Illumina WGS libraries, insert sizes of 300-500 bp are used. Insert size affects paired-end analysis — the two reads from a pair should map at the expected distance apart. Deviations from expected insert size can indicate structural variants (deletions produce shorter-than-expected, insertions produce longer-than-expected insert sizes)."
  },
  {
    id: 49,
    question: "Index hopping (barcode switching) in multiplexed NGS refers to:",
    options: ["Incorrect base calling at index positions", "Misassignment of reads to the wrong sample due to index sequence exchange during amplification", "Swapping of reads between paired ends", "Index degradation during storage"],
    answer: 1,
    explanation: "Index hopping occurs when free index adapter molecules recombine with library fragments from other samples during ExAmp chemistry (on patterned flow cells). This leads to reads being assigned to the wrong sample (0.1-2% rate). Mitigation strategies include using dual unique indexes (not combinatorial), minimizing free adapters, and computational filtering of unexpected index combinations."
  },
  {
    id: 50,
    question: "The minimum coverage depth recommended for reliable heterozygous germline SNV detection in clinical WGS is approximately:",
    options: ["5x", "10x", "20-30x", "100x"],
    answer: 2,
    explanation: "At 20-30x mean coverage, ~95-99% of the genome is covered at ≥10x depth, providing sufficient reads to confidently distinguish heterozygous variants (expected ~50% variant allele frequency) from sequencing errors. Clinical WGS guidelines typically recommend ≥30x for germline analysis. Somatic variant detection requires higher coverage (100-500x) due to lower variant allele frequencies in tumors."
  }
]

export default questions
