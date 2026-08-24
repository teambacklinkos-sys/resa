const questions = [
  // ===== GENOME ORGANIZATION & CHROMATIN (Q1–Q10) =====
  {
    id: 1,
    question: "Satellite DNA refers to:",
    options: ["Coding sequences that produce essential proteins", "Highly repetitive, tandemly arranged sequences that form a distinct band in CsCl density gradient centrifugation", "Single-copy genes dispersed throughout the genome", "Mitochondrial DNA only"],
    answer: 1,
    explanation: "Satellite DNA consists of short tandem repeats (e.g., 5–200 bp units repeated thousands to millions of times) that have a different buoyant density than bulk genomic DNA, forming satellite bands in CsCl gradients. They are concentrated at centromeres and pericentromeric heterochromatin and are generally non-coding."
  },
  {
    id: 2,
    question: "LINEs (Long Interspersed Nuclear Elements) differ from SINEs in that LINEs:",
    options: ["Are derived from tRNA genes and are ~300 bp long", "Encode their own reverse transcriptase and are autonomously retrotransposable", "Are found only in prokaryotic genomes", "Require external DNA transposase for mobilization"],
    answer: 1,
    explanation: "LINEs (e.g., LINE-1/L1 in humans, ~6 kb) encode ORF1 (RNA-binding protein) and ORF2 (reverse transcriptase and endonuclease), making them autonomous retrotransposons. SINEs (e.g., Alu, ~300 bp) are non-autonomous — they are derived from RNA Pol III transcripts (7SL RNA or tRNA) and depend on LINE-encoded machinery for retrotransposition."
  },
  {
    id: 3,
    question: "The 30 nm chromatin fiber is formed by:",
    options: ["Unwinding of nucleosomes into free DNA", "Coiling of the nucleosome 'beads-on-a-string' into a solenoid or zigzag structure stabilized by histone H1", "Direct binding of RNA polymerase to nucleosomes", "Methylation of all histone tails"],
    answer: 1,
    explanation: "The 10 nm 'beads-on-a-string' nucleosomal array is compacted into the ~30 nm fiber through interactions between nucleosomes. Histone H1 binds the linker DNA and promotes this compaction. Two models have been proposed: the solenoid (one-start helix) and the zigzag (two-start helix). The 30 nm fiber is further organized into loops and higher-order structures."
  },
  {
    id: 4,
    question: "Topologically associating domains (TADs) in eukaryotic genomes are:",
    options: ["Regions of DNA that are always transcriptionally silent", "Self-interacting chromatin domains within which DNA sequences contact each other more frequently than with sequences outside the domain", "Specialized replication origins", "Clusters of tRNA genes"],
    answer: 1,
    explanation: "TADs are megabase-scale genomic regions identified by Hi-C (chromosome conformation capture) that show high intra-domain chromatin interactions. TAD boundaries are enriched for CTCF, cohesin, housekeeping genes, and active chromatin marks. They organize the genome into regulatory neighborhoods, constraining enhancer-promoter interactions within domains."
  },
  {
    id: 5,
    question: "CTCF (CCCTC-binding factor) functions in genome organization by:",
    options: ["Catalyzing DNA methylation at CpG islands", "Acting as an insulator protein that blocks enhancer-promoter interactions and defines TAD boundaries together with cohesin", "Unwinding DNA at replication origins", "Degrading aberrant mRNA transcripts"],
    answer: 1,
    explanation: "CTCF is a zinc finger protein that binds DNA at specific motifs and functions as an insulator, blocking enhancer-promoter communication when positioned between them. Together with cohesin, CTCF establishes chromatin loops and TAD boundaries via loop extrusion. Convergent CTCF sites define loop anchors, and disruption of CTCF sites can cause developmental disorders and cancer."
  },
  {
    id: 6,
    question: "Constitutive heterochromatin is characterized by:",
    options: ["Active transcription and high gene density", "Permanent condensation, late replication, and enrichment for H3K9me3 and HP1", "Reversible condensation that varies between cell types", "Association with nuclear pores for rapid mRNA export"],
    answer: 1,
    explanation: "Constitutive heterochromatin remains condensed throughout the cell cycle and in all cell types. It is enriched at centromeres, telomeres, and pericentromeric regions, marked by H3K9me3 (deposited by SUV39H), bound by HP1 (Heterochromatin Protein 1), late-replicating, and transcriptionally silent. It plays structural roles in chromosome segregation."
  },
  {
    id: 7,
    question: "The C-value paradox refers to the observation that:",
    options: ["Genome size strictly correlates with organism complexity", "There is no direct relationship between an organism's genome size and its biological complexity", "All eukaryotes have the same genome size", "Prokaryotes always have larger genomes than eukaryotes"],
    answer: 1,
    explanation: "The C-value paradox (or C-value enigma) is the lack of correlation between genome size (C-value) and organismal complexity. For example, some amphibians and plants have genomes >10× larger than the human genome. The variation is largely due to differences in repetitive DNA content, polyploidy, and transposable element accumulation rather than gene number."
  },
  {
    id: 8,
    question: "Histone variants such as H3.3 are associated with:",
    options: ["Constitutive heterochromatin at centromeres exclusively", "Actively transcribed regions and are deposited in a replication-independent manner", "Silenced genes during mitosis only", "mRNA stabilization in the cytoplasm"],
    answer: 1,
    explanation: "H3.3 is a replacement histone variant deposited outside of S phase (replication-independent) by chaperones HIRA (at active genes) and DAXX/ATRX (at telomeres, pericentric heterochromatin). It differs from canonical H3.1/H3.2 by only 4–5 amino acids. H3.3 is enriched at active promoters, enhancers, and gene bodies, and is associated with active chromatin marks."
  },
  {
    id: 9,
    question: "Pseudogenes are:",
    options: ["Functional genes with high expression levels", "Non-functional copies of genes that have accumulated mutations preventing normal expression", "Genes encoding regulatory RNAs only", "Essential genes duplicated for backup"],
    answer: 1,
    explanation: "Pseudogenes are genomic sequences that resemble functional genes but are non-functional due to mutations (frameshifts, premature stop codons, or regulatory defects). Processed pseudogenes arise from retrotransposition of mRNA (lack introns, have poly-A tract). Unprocessed pseudogenes arise from gene duplication followed by degenerative mutations. Some pseudogenes produce regulatory RNAs."
  },
  {
    id: 10,
    question: "Lamina-associated domains (LADs) in the nucleus are:",
    options: ["Chromatin regions associated with the nuclear lamina, generally transcriptionally repressed", "Sites of active transcription near nuclear pores", "Mitochondrial DNA attachment points", "Replication initiation zones in S phase"],
    answer: 0,
    explanation: "LADs are megabase-scale chromatin domains that contact the nuclear lamina (lamin A/C, lamin B). They are generally gene-poor, enriched for H3K9me2/me3, transcriptionally repressed, and late-replicating. Repositioning of genes from LADs to the nuclear interior can activate their expression, linking nuclear organization to gene regulation."
  },

  // ===== RECOMBINATION & TRANSPOSITION (Q11–Q20) =====
  {
    id: 11,
    question: "Holliday junction resolution during homologous recombination can produce:",
    options: ["Only non-crossover (gene conversion) products", "Either crossover or non-crossover products depending on the orientation of resolution cuts", "Only deletions in the recombining DNA", "Circular DNA intermediates exclusively"],
    answer: 1,
    explanation: "A Holliday junction is a four-stranded DNA intermediate formed during homologous recombination. Resolution by endonucleases (e.g., RuvC in E. coli, GEN1 in eukaryotes) can cut the junction in two orientations: one produces crossover (flanking marker exchange) and the other produces non-crossover (gene conversion without marker exchange) products."
  },
  {
    id: 12,
    question: "Non-homologous end joining (NHEJ) repair of double-strand breaks:",
    options: ["Requires a homologous template and occurs only in S/G2 phase", "Directly ligates broken DNA ends with minimal processing, is error-prone, and functions throughout the cell cycle", "Is exclusively used in prokaryotes", "Requires RecA/Rad51-mediated strand invasion"],
    answer: 1,
    explanation: "NHEJ ligates DSB ends directly without a homologous template. Ku70/Ku80 heterodimer binds broken ends, recruits DNA-PKcs (in mammals), and the XRCC4-Ligase IV complex seals the break. End processing by Artemis nuclease or polymerases μ/λ may cause small insertions or deletions, making NHEJ error-prone. It operates throughout the cell cycle, unlike HR."
  },
  {
    id: 13,
    question: "Class I (cut-and-paste) DNA transposons move by:",
    options: ["Reverse transcription of an RNA intermediate", "Excision from the donor site and insertion at a new genomic location by transposase", "Rolling circle replication", "Homologous recombination with the target site"],
    answer: 1,
    explanation: "Cut-and-paste (Class II) DNA transposons are flanked by terminal inverted repeats (TIRs) recognized by transposase. The transposase excises the element by cutting at both ends and inserts it into a new target site, creating target site duplications (TSDs). Note: Class I elements are retrotransposons that use an RNA intermediate (copy-and-paste)."
  },
  {
    id: 14,
    question: "Gene conversion during meiotic recombination results in:",
    options: ["Equal segregation of alleles (2:2) at all loci", "Non-reciprocal transfer of genetic information, producing a 3:1 ratio of alleles in the tetrad", "Deletion of one allele from the genome", "Duplication of the entire chromosome"],
    answer: 1,
    explanation: "Gene conversion is a non-reciprocal recombination event where one allele is 'converted' to match the other, producing aberrant segregation ratios (e.g., 3:1 or 1:3 instead of the expected 2:2 in a tetrad). It results from mismatch repair of heteroduplex DNA formed during strand invasion and branch migration in homologous recombination."
  },
  {
    id: 15,
    question: "Site-specific recombination differs from homologous recombination in that it:",
    options: ["Requires extensive sequence homology between recombining molecules", "Occurs at defined short DNA sequences recognized by specialized recombinases", "Requires RecA protein", "Always produces crossover products"],
    answer: 1,
    explanation: "Site-specific recombination occurs between specific, short DNA sequences (e.g., att sites in λ phage integration, loxP sites for Cre recombinase, FRT sites for Flp recombinase). Specialized recombinases catalyze strand cleavage, exchange, and religation without requiring extensive homology, RecA, or high-energy cofactors."
  },
  {
    id: 16,
    question: "Retrotransposons move within the genome by:",
    options: ["Direct excision and reinsertion of the DNA element", "Transcription into RNA, reverse transcription into cDNA, and integration at a new site (copy-and-paste)", "Homologous recombination between sister chromatids", "Rolling circle replication of the transposon"],
    answer: 1,
    explanation: "Retrotransposons (Class I transposable elements) are transcribed into RNA, which is reverse-transcribed into cDNA by element-encoded reverse transcriptase (for LTR retrotransposons and LINEs) or by LINE-encoded machinery (for SINEs). The cDNA is integrated into a new genomic site, increasing copy number (copy-and-paste mechanism)."
  },
  {
    id: 17,
    question: "V(D)J recombination in the immune system generates antibody diversity by:",
    options: ["Point mutations in the constant region genes", "Rearranging Variable, Diversity, and Joining gene segments using RAG1/RAG2 recombinases", "Alternative splicing of a single immunoglobulin gene", "Horizontal gene transfer from pathogens"],
    answer: 1,
    explanation: "V(D)J recombination is a site-specific recombination process mediated by RAG1 and RAG2 recombinases that recognize recombination signal sequences (RSSs) flanking V, D, and J gene segments. Random combinatorial joining of these segments, along with junctional diversity (P and N nucleotide additions by TdT), generates the vast diversity of antigen receptors (~10¹¹ possible antibodies)."
  },
  {
    id: 18,
    question: "Somatic hypermutation (SHM) in B cells introduces mutations primarily in:",
    options: ["All genes throughout the genome at equal rates", "The variable regions of immunoglobulin genes, mediated by activation-induced cytidine deaminase (AID)", "The constant region genes only", "Germline DNA in oocytes and spermatocytes"],
    answer: 1,
    explanation: "SHM is triggered by AID (Activation-Induced Cytidine Deaminase), which deaminates cytosine to uracil in the variable regions of rearranged immunoglobulin genes. Error-prone repair of these lesions (by base excision repair, mismatch repair, and translesion synthesis) introduces point mutations at a rate ~10⁶-fold above background, enabling affinity maturation through selection."
  },
  {
    id: 19,
    question: "Cre-lox technology is used in genetics to:",
    options: ["Amplify DNA sequences by PCR", "Perform conditional gene knockouts by flanking target genes with loxP sites and expressing Cre recombinase tissue-specifically", "Sequence entire genomes", "Label proteins with fluorescent tags"],
    answer: 1,
    explanation: "The Cre-lox system uses Cre recombinase (from bacteriophage P1) to catalyze recombination between 34 bp loxP sites. When a gene is flanked by loxP sites ('floxed'), tissue-specific or temporally controlled Cre expression excises the intervening DNA, creating conditional knockouts. This avoids embryonic lethality associated with constitutive gene deletion."
  },
  {
    id: 20,
    question: "Horizontal gene transfer (HGT) in bacteria can occur through all of the following EXCEPT:",
    options: ["Transformation (uptake of free DNA)", "Transduction (phage-mediated transfer)", "Conjugation (direct cell-to-cell transfer via pili)", "Meiotic recombination and independent assortment"],
    answer: 3,
    explanation: "HGT in bacteria occurs via three main mechanisms: transformation (natural competence to uptake environmental DNA), transduction (generalized or specialized, mediated by bacteriophages), and conjugation (transfer of plasmid or chromosomal DNA through a pilus/T4SS). Meiosis does not occur in bacteria — it is a eukaryotic process involving homologous chromosome segregation."
  },

  // ===== RNA BIOLOGY & NON-CODING RNAs (Q21–Q30) =====
  {
    id: 21,
    question: "Self-splicing Group I introns differ from Group II introns in that Group I introns:",
    options: ["Use an internal adenosine as the nucleophile for the first transesterification", "Use an external guanosine cofactor (free G or GTP) as the nucleophile for the first transesterification", "Require the spliceosome for removal", "Are found exclusively in mammals"],
    answer: 1,
    explanation: "Group I introns use an exogenous guanosine (free G, GTP, or GDP) as a nucleophile to attack the 5' splice site in the first transesterification step. Group II introns use a bulged adenosine within the intron itself (similar to spliceosomal splicing). Group II introns are considered evolutionary precursors of spliceosomal introns and snRNAs."
  },
  {
    id: 22,
    question: "RNA editing by ADAR enzymes involves:",
    options: ["Insertion of uridine residues into mitochondrial mRNA", "Deamination of adenosine to inosine (A-to-I editing) in double-stranded RNA regions", "Methylation of the 5' cap", "Removal of introns from pre-mRNA"],
    answer: 1,
    explanation: "ADAR (Adenosine Deaminase Acting on RNA) enzymes catalyze hydrolytic deamination of adenosine to inosine in dsRNA. Inosine is read as guanosine by the translational machinery, so A-to-I editing can alter codons, splice sites, and miRNA target recognition. It is prevalent in the brain and dysregulated in neurological disorders and cancers."
  },
  {
    id: 23,
    question: "MicroRNAs (miRNAs) are processed from precursor hairpins by:",
    options: ["DNA polymerase and ligase", "Drosha (in the nucleus) and Dicer (in the cytoplasm)", "Spliceosome components U1 and U2 snRNPs", "Reverse transcriptase and integrase"],
    answer: 1,
    explanation: "Pri-miRNA is cleaved in the nucleus by the Microprocessor complex (Drosha RNase III + DGCR8/Pasha) to yield ~70 nt pre-miRNA hairpins. After nuclear export by Exportin-5/RanGTP, Dicer (another RNase III enzyme) cleaves the pre-miRNA to produce ~22 nt miRNA duplexes. One strand (guide) is loaded into RISC/Argonaute for target silencing."
  },
  {
    id: 24,
    question: "Piwi-interacting RNAs (piRNAs) function primarily in:",
    options: ["Housekeeping gene regulation in all somatic cells", "Transposon silencing in the germline by guiding PIWI-clade Argonaute proteins", "Ribosome biogenesis in the nucleolus", "Splicing of pre-mRNA introns"],
    answer: 1,
    explanation: "piRNAs are ~24–32 nt small RNAs that associate with PIWI-clade Argonaute proteins (e.g., MIWI, MILI, MIWI2 in mice). They silence transposable elements in the germline through the ping-pong amplification cycle, directing transcriptional silencing (via H3K9me3 and DNA methylation) and post-transcriptional cleavage of transposon transcripts. piRNA pathway defects cause male infertility."
  },
  {
    id: 25,
    question: "Ribozymes are RNA molecules that:",
    options: ["Function only as structural scaffolds", "Possess catalytic activity, capable of cleaving or ligating RNA substrates", "Are exclusively found in viruses", "Require DNA cofactors for activity"],
    answer: 1,
    explanation: "Ribozymes are catalytic RNA molecules that accelerate chemical reactions (primarily transesterification and hydrolysis of phosphodiester bonds). Examples include self-splicing introns (Group I and II), RNase P (tRNA processing), hammerhead and hepatitis delta virus ribozymes, and the ribosome itself (peptidyl transferase). Their existence supports the RNA World hypothesis."
  },
  {
    id: 26,
    question: "Circular RNAs (circRNAs) are formed by:",
    options: ["Normal 5' capping and 3' polyadenylation", "Back-splicing where a downstream splice donor joins to an upstream splice acceptor", "Reverse transcription of mRNA", "Cleavage by Drosha and Dicer"],
    answer: 1,
    explanation: "CircRNAs are generated by back-splicing, a non-canonical splicing event where a downstream 5' splice site (donor) joins to an upstream 3' splice site (acceptor), forming a covalently closed circular RNA. CircRNAs are resistant to exonucleases, can function as miRNA sponges (e.g., CDR1as/ciRS-7), protein scaffolds, or templates for translation."
  },
  {
    id: 27,
    question: "The RNA World hypothesis proposes that:",
    options: ["DNA was the first genetic material and preceded RNA", "RNA preceded both DNA and proteins, serving as both genetic material and catalyst in early life", "Proteins evolved before nucleic acids", "Lipids were the first self-replicating molecules"],
    answer: 1,
    explanation: "The RNA World hypothesis posits that early life was based on RNA molecules that stored genetic information (like DNA) and catalyzed chemical reactions (like protein enzymes). Evidence includes: ribozymes, ribosomal RNA catalysis, RNA viruses, ribonucleotide cofactors (ATP, NAD⁺, CoA), and laboratory-evolved self-replicating ribozymes."
  },
  {
    id: 28,
    question: "Small nucleolar RNAs (snoRNAs) function in:",
    options: ["Splicing of pre-mRNA introns", "Guiding chemical modifications (2'-O-methylation and pseudouridylation) of ribosomal RNA", "Transposon silencing in the germline", "Transcription termination"],
    answer: 1,
    explanation: "SnoRNAs are small non-coding RNAs that guide site-specific modifications of rRNA (and some snRNAs). Box C/D snoRNAs guide 2'-O-methylation (via fibrillarin methyltransferase), and box H/ACA snoRNAs guide pseudouridylation (via dyskerin/Cbf5 pseudouridine synthase). They function as snoRNPs in the nucleolus during ribosome biogenesis."
  },
  {
    id: 29,
    question: "N6-methyladenosine (m6A) is the most abundant internal modification in eukaryotic mRNA and is:",
    options: ["Irreversible and present only in rRNA", "Reversible, installed by METTL3/METTL14 (writers) and removed by FTO/ALKBH5 (erasers), affecting mRNA stability, splicing, and translation", "A DNA modification that silences transposons", "Added exclusively during translation"],
    answer: 1,
    explanation: "m6A is deposited co-transcriptionally by the METTL3/METTL14 methyltransferase complex (writer) at the DRACH motif. It is removed by FTO and ALKBH5 demethylases (erasers) and recognized by YTH-domain proteins (readers, e.g., YTHDF1/2/3). m6A regulates mRNA fate: stability, splicing, nuclear export, and translation efficiency. It is critical in development, stem cell biology, and cancer."
  },
  {
    id: 30,
    question: "Trans-splicing, as seen in trypanosomes, involves:",
    options: ["Joining of exons from the same pre-mRNA transcript", "Joining of exons from two separate RNA transcripts, typically adding a spliced leader (SL) sequence", "Removal of introns by self-splicing ribozymes only", "Reverse splicing of introns back into mRNA"],
    answer: 1,
    explanation: "Trans-splicing joins exons from two independent pre-mRNA molecules. In trypanosomes (and C. elegans), a short spliced leader (SL) RNA is trans-spliced to the 5' end of most mRNAs, providing the 5' cap and common leader sequence. The mechanism is similar to cis-splicing (spliceosome-mediated, two transesterification reactions) but involves two separate RNA substrates."
  },

  // ===== MOLECULAR TECHNIQUES & APPLICATIONS (Q31–Q40) =====
  {
    id: 31,
    question: "Southern blotting is used to detect:",
    options: ["Specific RNA sequences", "Specific DNA sequences using a labeled probe after gel electrophoresis and membrane transfer", "Specific proteins", "Enzyme activity in cell lysates"],
    answer: 1,
    explanation: "Southern blotting (developed by Edwin Southern, 1975) involves: (1) restriction digestion of genomic DNA, (2) agarose gel electrophoresis, (3) transfer to a nylon or nitrocellulose membrane, and (4) hybridization with a labeled (radioactive or non-radioactive) probe complementary to the target sequence. Northern blotting detects RNA; Western blotting detects proteins."
  },
  {
    id: 32,
    question: "Real-time quantitative PCR (qPCR) differs from conventional PCR in that qPCR:",
    options: ["Uses a different DNA polymerase", "Monitors amplification in real time using fluorescent reporters, enabling quantification of starting template", "Does not require primers", "Can only amplify RNA templates"],
    answer: 1,
    explanation: "qPCR uses fluorescent dyes (SYBR Green, which binds dsDNA) or sequence-specific probes (TaqMan, molecular beacons) to monitor amplification at each cycle. The cycle threshold (Ct/Cq) — the cycle at which fluorescence exceeds background — is inversely proportional to the log of starting template amount, enabling absolute or relative quantification."
  },
  {
    id: 33,
    question: "In Sanger sequencing, chain termination is achieved by incorporating:",
    options: ["Ribonucleotides that block further extension", "Dideoxynucleotides (ddNTPs) that lack a 3'-OH group", "Modified bases that cause strand breakage", "Locked nucleic acids (LNAs)"],
    answer: 1,
    explanation: "Sanger sequencing uses 2',3'-dideoxynucleotides (ddNTPs) as chain terminators. ddNTPs lack the 3'-OH required for phosphodiester bond formation with the next nucleotide, so incorporation terminates the growing strand. Using four differently labeled ddNTPs (ddATP, ddGTP, ddCTP, ddTTP) generates fragments of all possible lengths, separated by capillary electrophoresis."
  },
  {
    id: 34,
    question: "Chromatin immunoprecipitation (ChIP) is used to:",
    options: ["Sequence entire genomes de novo", "Identify DNA sequences associated with specific proteins (e.g., transcription factors, modified histones) in vivo", "Measure mRNA expression levels", "Purify ribosomes from cell extracts"],
    answer: 1,
    explanation: "ChIP involves: (1) crosslinking proteins to DNA in vivo (formaldehyde), (2) chromatin shearing (sonication or MNase), (3) immunoprecipitation with antibody against the protein of interest, (4) reversal of crosslinks and DNA purification. ChIP-seq (combined with next-gen sequencing) maps genome-wide binding sites of transcription factors and histone modifications."
  },
  {
    id: 35,
    question: "FISH (Fluorescence In Situ Hybridization) is used to:",
    options: ["Amplify DNA sequences in vitro", "Visualize the location of specific DNA or RNA sequences on chromosomes or in cells using fluorescent probes", "Measure protein-protein interactions", "Determine the 3D structure of proteins"],
    answer: 1,
    explanation: "FISH uses fluorescently labeled DNA or RNA probes that hybridize to complementary sequences on fixed chromosomes or in cells/tissues. Applications include detecting chromosomal abnormalities (translocations, deletions, aneuploidies), mapping genes to chromosomes, and visualizing gene expression patterns. Multi-color FISH (mFISH/SKY) can paint all chromosomes in different colors."
  },
  {
    id: 36,
    question: "Next-generation sequencing (NGS) technologies achieve high throughput by:",
    options: ["Using a single long read from one DNA molecule", "Massively parallel sequencing of millions of DNA fragments simultaneously", "Employing Sanger chemistry with larger capillary arrays", "Reading the DNA sequence directly without any amplification or library preparation"],
    answer: 1,
    explanation: "NGS platforms (Illumina, Ion Torrent, etc.) sequence millions to billions of short DNA fragments in parallel. The workflow typically involves library preparation (fragmentation, adapter ligation), clonal amplification (bridge PCR or emulsion PCR), and sequencing-by-synthesis or sequencing-by-ligation. This massive parallelization dramatically reduces cost and time compared to Sanger sequencing."
  },
  {
    id: 37,
    question: "Reporter genes such as GFP, lacZ, and luciferase are used in molecular biology to:",
    options: ["Replace essential genes in knockout organisms", "Monitor gene expression, promoter activity, and protein localization", "Serve as selectable markers for antibiotic resistance", "Catalyze site-specific recombination"],
    answer: 1,
    explanation: "Reporter genes are fused to regulatory elements (promoters, enhancers) or coding sequences of interest to monitor transcriptional activity, gene expression patterns, and protein localization. GFP (green fluorescent protein) allows real-time visualization in living cells. LacZ (β-galactosidase) produces a blue product with X-gal. Luciferase produces bioluminescence quantifiable by luminometry."
  },
  {
    id: 38,
    question: "Yeast two-hybrid (Y2H) assay detects:",
    options: ["DNA-RNA interactions", "Protein-protein interactions by reconstituting a functional transcription factor", "Enzyme kinetics of purified proteins", "Chromatin accessibility"],
    answer: 1,
    explanation: "Y2H uses the modular nature of transcription factors (e.g., GAL4). The bait protein is fused to the DNA-binding domain (BD) and the prey protein to the activation domain (AD). If bait and prey interact, the BD and AD are brought together, reconstituting a functional TF that activates a reporter gene (HIS3, lacZ). Y2H enables genome-wide interactome mapping."
  },
  {
    id: 39,
    question: "CRISPR interference (CRISPRi) differs from CRISPR-Cas9 knockout in that CRISPRi:",
    options: ["Creates permanent double-strand breaks in DNA", "Uses a catalytically dead Cas9 (dCas9) to block transcription without cutting DNA, enabling reversible gene repression", "Requires homology-directed repair templates", "Works only in prokaryotic systems"],
    answer: 1,
    explanation: "CRISPRi uses nuclease-dead Cas9 (dCas9, with mutations D10A and H840A) guided to the promoter or coding region by sgRNA. dCas9 binding physically blocks RNA polymerase or transcription factor access, repressing transcription without cleaving DNA. The repression is reversible upon removal of dCas9/sgRNA expression. Fusion of dCas9 to KRAB domain enhances repression."
  },
  {
    id: 40,
    question: "Electrophoretic Mobility Shift Assay (EMSA) is used to study:",
    options: ["Protein folding kinetics", "DNA-protein or RNA-protein interactions by observing retarded mobility of bound complexes in gel electrophoresis", "DNA sequencing", "Chromosome banding patterns"],
    answer: 1,
    explanation: "EMSA (gel shift or band shift assay) detects nucleic acid-protein interactions. A labeled DNA/RNA probe is incubated with protein extract, and the mixture is resolved on a native polyacrylamide gel. Protein-bound probe migrates slower (shifted band) than free probe. Supershift assays (adding a specific antibody) confirm the identity of the binding protein."
  },

  // ===== MOLECULAR BIOLOGY OF DISEASE & APPLIED TOPICS (Q41–Q50) =====
  {
    id: 41,
    question: "Oncogenes are:",
    options: ["Normal genes that suppress tumor growth", "Mutated or overexpressed proto-oncogenes that promote uncontrolled cell proliferation", "Genes encoding DNA repair enzymes", "Viral structural proteins only"],
    answer: 1,
    explanation: "Oncogenes are gain-of-function mutants of proto-oncogenes (normal genes involved in cell growth, division, and survival). Activation can occur through point mutations (e.g., RAS), gene amplification (e.g., HER2/ERBB2), chromosomal translocation (e.g., BCR-ABL in CML), or viral insertion. Only one mutant allele is typically sufficient (dominant) to contribute to cancer."
  },
  {
    id: 42,
    question: "Tumor suppressor genes follow Knudson's two-hit hypothesis, which states that:",
    options: ["A single mutation in one allele is sufficient for tumor formation", "Both alleles of a tumor suppressor must be inactivated (two hits) for loss of function and tumor development", "Tumor suppressors are only mutated in hereditary cancers", "Two different oncogenes must be activated simultaneously"],
    answer: 1,
    explanation: "Knudson (1971) proposed that retinoblastoma requires inactivation of both RB1 alleles. In hereditary cases, one hit is inherited (germline mutation) and the second is somatic (loss of heterozygosity, LOH). In sporadic cases, both hits are somatic events. This model applies to most tumor suppressor genes (TP53, BRCA1, APC) and explains the recessive nature of tumor suppressor loss."
  },
  {
    id: 43,
    question: "Trinucleotide repeat expansion diseases such as Huntington's disease involve:",
    options: ["Deletion of entire exons from the gene", "Expansion of unstable trinucleotide repeats (e.g., CAG) beyond a threshold length, causing protein misfolding or toxic RNA", "Insertion of transposable elements into coding regions", "Chromosomal nondisjunction during meiosis"],
    answer: 1,
    explanation: "Trinucleotide repeat disorders result from expansion of microsatellite repeats beyond a pathogenic threshold. In Huntington's (>36 CAG repeats in HTT gene), the polyglutamine tract causes protein aggregation. In Fragile X (>200 CGG repeats in FMR1), hypermethylation silences the gene. Anticipation (earlier onset in successive generations) occurs due to further expansion during meiosis."
  },
  {
    id: 44,
    question: "Reverse transcriptase is encoded by:",
    options: ["All DNA viruses", "Retroviruses (e.g., HIV) and is also found in telomerase and retrotransposons", "Only bacteriophages", "Eukaryotic RNA polymerase II"],
    answer: 1,
    explanation: "Reverse transcriptase (RT) is an RNA-dependent DNA polymerase. It is encoded by retroviruses (e.g., HIV-1 RT) for converting viral RNA into dsDNA for integration. RT activity is also found in telomerase (TERT subunit), retrotransposons (LINE-1 ORF2, LTR retrotransposons), and hepatitis B virus (hepadnaviruses). RT inhibitors (AZT, tenofovir) are key antiretroviral drugs."
  },
  {
    id: 45,
    question: "Epigenetic inheritance refers to:",
    options: ["Changes in DNA sequence that are passed to offspring", "Heritable changes in gene expression that do not involve alterations in the DNA sequence", "Mendelian inheritance of dominant traits", "Horizontal gene transfer between species"],
    answer: 1,
    explanation: "Epigenetic inheritance involves the transmission of gene expression states (active or silent) across cell divisions (mitotic) or generations (transgenerational) without changes to the DNA sequence. Mechanisms include DNA methylation, histone modifications, and non-coding RNAs. Examples: genomic imprinting, X-inactivation, paramutation in plants, and potentially some transgenerational effects in mammals."
  },
  {
    id: 46,
    question: "Micro-RNA (miR-21) is frequently upregulated in cancers and functions as an:",
    options: ["Tumor suppressor by activating apoptosis", "OncomiR by targeting tumor suppressor mRNAs such as PTEN and PDCD4 for silencing", "Structural component of the ribosome", "Primer for DNA replication"],
    answer: 1,
    explanation: "miR-21 is one of the most commonly overexpressed miRNAs in human cancers (oncomiR). It promotes tumor growth, invasion, and metastasis by silencing multiple tumor suppressor targets: PTEN (PI3K/AKT pathway inhibitor), PDCD4 (programmed cell death 4), TPM1 (tropomyosin 1), and TIMP3 (metalloproteinase inhibitor). miR-21 is a potential biomarker and therapeutic target."
  },
  {
    id: 47,
    question: "Prions cause disease by:",
    options: ["Integrating their genome into the host DNA", "Inducing misfolding of normal cellular prion protein (PrPᶜ) into the pathogenic conformation (PrPˢᶜ) without any nucleic acid", "Encoding a toxic RNA that silences essential genes", "Activating oncogenes through insertional mutagenesis"],
    answer: 1,
    explanation: "Prions are infectious protein particles (PrPˢᶜ) that propagate by templating conformational conversion of normal PrPᶜ (α-helix-rich) into the misfolded PrPˢᶜ form (β-sheet-rich). PrPˢᶜ aggregates are resistant to proteases, detergents, and standard sterilization. Prion diseases (Creutzfeldt-Jakob, BSE, scrapie) are transmissible spongiform encephalopathies with no nucleic acid genome."
  },
  {
    id: 48,
    question: "Base editing technology differs from standard CRISPR-Cas9 by:",
    options: ["Creating double-strand breaks that require HDR templates", "Directly converting one base to another (e.g., C→T or A→G) without double-strand breaks using a modified Cas9 fused to a deaminase", "Using zinc finger nucleases instead of Cas9", "Requiring viral delivery exclusively"],
    answer: 1,
    explanation: "Base editors use nickase Cas9 (nCas9, D10A) or dCas9 fused to a deaminase enzyme. Cytosine base editors (CBEs, e.g., BE4) fuse APOBEC deaminase to convert C•G to T•A. Adenine base editors (ABEs) fuse evolved TadA deaminase to convert A•T to G•C. Base editing avoids DSBs, reducing indels and p53 activation, enabling precise correction of ~60% of known pathogenic point mutations."
  },
  {
    id: 49,
    question: "Liquid biopsy for cancer detection relies on analyzing:",
    options: ["Solid tumor tissue obtained by surgical excision", "Circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), or exosomes in blood", "Urine protein levels only", "Bone marrow aspirate exclusively"],
    answer: 1,
    explanation: "Liquid biopsy is a minimally invasive approach that analyzes tumor-derived material in blood: ctDNA (cell-free DNA fragments carrying tumor-specific mutations), CTCs (intact tumor cells shed into circulation), and exosomes/extracellular vesicles (containing tumor RNA, DNA, and proteins). Applications include early detection, treatment monitoring, resistance mutation identification, and minimal residual disease assessment."
  },
  {
    id: 50,
    question: "Antisense oligonucleotides (ASOs) used as therapeutics work by:",
    options: ["Integrating into the genome and correcting mutations permanently", "Binding to complementary mRNA sequences to block translation or promote RNase H-mediated degradation", "Activating the immune system against tumor cells", "Serving as templates for reverse transcription"],
    answer: 1,
    explanation: "ASOs are synthetic single-stranded oligonucleotides (15–25 nt) that hybridize to target mRNA via Watson-Crick base pairing. Mechanisms include: (1) RNase H recruitment to degrade the RNA in the DNA-RNA hybrid, (2) steric blocking of translation or splicing. Chemical modifications (phosphorothioate backbone, 2'-O-methyl, LNA) improve stability and uptake. FDA-approved examples: nusinersen (SMA), eteplirsen (DMD)."
  }
]

export default questions
