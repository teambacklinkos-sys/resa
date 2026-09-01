const questions = [
  {
    id: 1,
    question: "A transcription factor contains a bHLH domain and a PAS domain. The PAS domain heterodimerizes with ARNT only after ligand binding. This describes which type of transcription factor?",
    options: ["A constitutively active homeodomain protein", "A ligand-activated transcription factor (e.g., AhR), where ligand binding enables nuclear translocation and heterodimerization with ARNT to activate target gene transcription", "A pioneer factor that remodels closed chromatin independent of ligand", "A co-repressor that recruits HDAC complexes in the absence of ligand"],
    answer: 1,
    explanation: "The aryl hydrocarbon receptor (AhR) is a bHLH-PAS transcription factor. In its inactive state, AhR is cytoplasmic and bound to Hsp90. Ligand binding (e.g., dioxin, TCDD) triggers nuclear translocation, where AhR heterodimerizes with ARNT (also a bHLH-PAS protein) to activate xenobiotic-response element (XRE)-containing genes."
  },
  {
    id: 2,
    question: "Enhancers can activate promoters located tens of kilobases away. Which experimental evidence best demonstrates that this activation is not due to linear DNA tracking from the enhancer to the promoter?",
    options: ["Chromosome conformation capture (3C/Hi-C) showing enhancer-promoter loops in active but not inactive gene loci", "ChIP-seq showing transcription factor binding at the enhancer element", "DNase I hypersensitivity mapping the enhancer as an accessible chromatin region", "Reporter gene assays showing enhancer activity in both orientations"],
    answer: 0,
    explanation: "3C-based technologies (e.g., Hi-C, 4C) physically capture chromatin loops and demonstrate direct spatial proximity between enhancers and their target promoters regardless of genomic distance. This looping model, rather than linear scanning, is supported by the finding that enhancer-promoter contacts correlate with gene activity and are disrupted by loop anchor (CTCF/cohesin) mutations."
  },
  {
    id: 3,
    question: "Which histone modification combination is most associated with actively transcribed gene bodies (as opposed to promoters)?",
    options: ["H3K4me3 and H3K27ac", "H3K36me3 and H3K79me2", "H3K27me3 and H3K9me3", "H4K20me1 and H3K4me1"],
    answer: 1,
    explanation: "H3K36me3 (placed by SETD2/Set2) and H3K79me2 (placed by DOT1L) are hallmarks of transcribed gene bodies. H3K36me3 accumulates in actively transcribed regions and recruits histone deacetylases to suppress cryptic transcription initiation within gene bodies. H3K4me3 marks active promoters, not gene bodies."
  },
  {
    id: 4,
    question: "The Polycomb Repressive Complex 2 (PRC2) trimethylates H3K27. How does PRC1 use this mark to achieve stable gene silencing?",
    options: ["PRC1 is recruited to H3K27me3 via its chromodomain (CBX subunit), where its Ring1A/1B subunits ubiquitylate H2AK119 to compact chromatin and prevent RNA polymerase II elongation", "PRC1 directly demethylates H3K27me3 and deposits H3K27me2 to create a repressive gradient", "PRC1 phosphorylates H3S28 adjacent to H3K27me3 to block PRC2 access and lock in repression", "PRC1 acetylates H3K27 at genes already marked by H3K27me3, creating a bivalent repressive mark"],
    answer: 0,
    explanation: "PRC1 canonical complexes contain CBX proteins with chromodomains that directly bind H3K27me3 deposited by PRC2. Once recruited, the RING1A/1B E3 ubiquitin ligase subunit of PRC1 monoubiquitylates H2AK119 (H2AK119ub1). This mark promotes chromatin compaction, inhibits RNA polymerase II progression, and establishes stable Polycomb-mediated silencing."
  },
  {
    id: 5,
    question: "A researcher identifies a CpG island (CGI) at a gene promoter that is methylated in cancer cells but unmethylated in normal cells. What is the most likely functional consequence of CGI methylation at this promoter?",
    options: ["Increased transcription due to enhanced RNA polymerase II recruitment", "Transcriptional silencing via MBD protein recruitment of HDAC complexes and exclusion of transcription factor binding", "Alternative splicing of the gene's primary transcript", "Increased enhancer activity at distal regulatory elements"],
    answer: 1,
    explanation: "Methylated CpG islands recruit methyl-CpG binding domain (MBD) proteins (e.g., MeCP2, MBD1-4), which in turn recruit histone deacetylase (HDAC) complexes, compacting chromatin and silencing transcription. Additionally, DNA methylation directly prevents binding of many transcription factors that require unmethylated CpGs in their recognition sequences."
  },
  {
    id: 6,
    question: "DNMT3A and DNMT3B are de novo DNA methyltransferases, while DNMT1 is the maintenance methyltransferase. What enzymatic property of DNMT1 makes it suited for epigenetic inheritance?",
    options: ["DNMT1 has higher affinity for fully unmethylated CpG dyads than hemimethylated CpGs", "DNMT1 has strong preference for hemimethylated CpG dinucleotides (methylated on one strand only), allowing it to copy parental methylation patterns to the nascent strand after replication", "DNMT1 functions as a demethylase by oxidizing 5-methylcytosine to 5-hydroxymethylcytosine", "DNMT1 requires DNMT3L as an obligate cofactor for its maintenance methylation activity"],
    answer: 1,
    explanation: "After DNA replication, CpG sites are hemimethylated (parental strand methylated, new strand unmethylated). DNMT1 has ~30-fold higher affinity for hemimethylated versus unmethylated substrates, allowing it to specifically methylate the newly synthesized strand, faithfully propagating the parental methylation pattern to daughter cells."
  },
  {
    id: 7,
    question: "TET enzymes (TET1, TET2, TET3) are α-ketoglutarate and Fe(II)-dependent dioxygenases. Which sequence of reactions do they catalyze in active DNA demethylation?",
    options: ["5mC → C directly via a deaminase mechanism, followed by base excision repair", "5mC → 5hmC → 5fC → 5caC; 5fC and 5caC are excised by TDG, followed by base excision repair to restore unmodified C", "5mC → 5hmC only; further demethylation requires APOBEC deaminases", "5mC → 5hmC → 5mC in a futile cycle that prevents stable demethylation"],
    answer: 1,
    explanation: "TET enzymes iteratively oxidize 5-methylcytosine (5mC) first to 5-hydroxymethylcytosine (5hmC), then to 5-formylcytosine (5fC), then to 5-carboxylcytosine (5caC). Thymine DNA glycosylase (TDG) excises 5fC and 5caC, and base excision repair (BER) restores unmodified cytosine, completing the active demethylation cycle."
  },
  {
    id: 8,
    question: "In X chromosome inactivation (XCI), XIST RNA coats the inactive X chromosome. What is the current understanding of how XIST RNA initiates silencing?",
    options: ["XIST RNA encodes a short peptide that directly binds and inactivates RNA polymerase II on the X chromosome", "XIST RNA is a lncRNA that spreads in cis along the Xi, recruiting PRC1, PRC2, HDAC, and other silencing complexes (including SPEN/SHARP) through protein-binding modules in its sequence, initiating compaction into a Barr body", "XIST RNA base-pairs with X-linked gene promoters to block transcription factor binding", "XIST RNA recruits DNMT3B to methylate all X-linked CpG islands within hours of initiation"],
    answer: 1,
    explanation: "XIST (X-inactive specific transcript) is a ~17 kb lncRNA that spreads in cis across the future inactive X (Xi). It contains multiple structural modules (A-repeat, B-repeat, etc.) that recruit silencing factors: SPEN/SHARP (via repeat A) deacetylates histones; PRC2 deposits H3K27me3; PRC1 adds H2AK119ub1; and macroH2A incorporation all contribute to stable compaction into the Barr body."
  },
  {
    id: 9,
    question: "Why does X chromosome inactivation in placental mammals inactivate the paternal X preferentially in extraembryonic tissues but randomly in embryonic tissues?",
    options: ["The paternal X carries more retrotransposons that are silenced first in placental tissue", "Imprinted XCI in extraembryonic tissues inactivates the paternal X due to Xist imprinting (maternal Xist is repressed by Tsix); in the embryo proper, this imprint is erased and inactivation occurs randomly", "The paternal X lacks XIST sequences, so it must be inactivated by an alternative mechanism in the placenta", "Random inactivation occurs first, and the embryonic cells selectively kill cells with paternal X inactivation"],
    answer: 1,
    explanation: "In mouse extraembryonic tissues (and in marsupials generally), imprinted XCI silences the paternal X because the maternal Xist allele is repressed by Tsix (antisense to Xist) that is expressed only from the maternal chromosome. In the epiblast (embryo proper), the imprint is erased in the ICM, and both X chromosomes reactivate before random XCI is re-established."
  },
  {
    id: 10,
    question: "Genomic imprinting results in parent-of-origin-specific gene expression. The H19/IGF2 imprinting cluster is regulated by an imprinting control region (ICR). Which mechanism controls differential expression of H19 (maternally expressed) and IGF2 (paternally expressed)?",
    options: ["IGF2 is expressed from both alleles; H19 is specifically silenced on the paternal chromosome by promoter methylation", "On the maternal chromosome, unmethylated ICR binds CTCF, which insulates IGF2 from enhancers; on the paternal chromosome, ICR methylation prevents CTCF binding, allowing IGF2 enhancers to activate IGF2, while H19 is silenced by methylation spreading from the ICR", "H19 encodes a miRNA that silences IGF2 on the maternal chromosome only", "Both H19 and IGF2 are expressed from the paternal chromosome; maternal allele silencing is mediated by PRC2 recruitment"],
    answer: 1,
    explanation: "At the H19/IGF2 locus: the paternal ICR is methylated, preventing CTCF binding—shared downstream enhancers activate IGF2, while H19 is silenced by DNA methylation spreading from the ICR. On the maternal chromosome, the unmethylated ICR binds CTCF, which acts as an insulator to block IGF2 enhancer access, so only H19 is expressed."
  },
  {
    id: 11,
    question: "The SWI/SNF chromatin remodeling complex uses ATP hydrolysis to remodel nucleosomes. Which statement best describes its mechanism?",
    options: ["SWI/SNF acetylates histone H3 tails to reduce nucleosome-DNA affinity", "SWI/SNF uses ATP-driven translocation of the histone octamer along DNA (sliding) or histone octamer ejection/replacement to alter nucleosome positioning and increase DNA accessibility", "SWI/SNF methylates H3K4 at target promoters to recruit additional chromatin remodelers", "SWI/SNF unwinds DNA supercoils like a topoisomerase, thereby reducing nucleosome stability"],
    answer: 1,
    explanation: "SWI/SNF (BAF complex in mammals) is a member of the helicase-related SNF2 ATPase family. Its catalytic subunit (BRG1 or BRM) uses ATP hydrolysis to generate torsional strain, which can slide nucleosomes along DNA or eject histone octamers from DNA. This remodeling increases chromatin accessibility for transcription factors and the transcription machinery."
  },
  {
    id: 12,
    question: "MicroRNAs (miRNAs) repress gene expression post-transcriptionally. Which statement accurately describes the mechanism of miRNA-mediated silencing when there is near-perfect complementarity versus partial complementarity to the target mRNA?",
    options: ["Perfect complementarity leads to translational inhibition only; partial complementarity triggers mRNA cleavage", "Partial complementarity (as typical in animals) leads to translational repression and mRNA deadenylation/decapping via RISC/AGO2 and CCR4-NOT complex; perfect complementarity (typical in plants) leads to AGO2-catalyzed endonucleolytic cleavage ('slicing') of the target mRNA", "Both perfect and partial complementarity lead exclusively to mRNA cleavage in animal cells", "miRNAs with partial complementarity activate target mRNA translation by stabilizing the poly(A) tail"],
    answer: 1,
    explanation: "In animals, miRNAs typically have partial (seed) complementarity with their targets, leading to translational repression and mRNA decay via AGO2/RISC recruitment of the CCR4-NOT deadenylase complex, followed by decapping and 5′→3′ degradation. Perfect complementarity (common in plants, and for some animal miRNAs) allows AGO2 Slicer endonuclease activity to directly cleave the target mRNA between positions 10 and 11 of the guide strand."
  },
  {
    id: 13,
    question: "Long non-coding RNA HOTAIR, transcribed from the HOXC locus, represses genes at the HOXD locus. What is the mechanism of HOTAIR action?",
    options: ["HOTAIR base-pairs with HOXD mRNAs to block their translation", "HOTAIR acts as a scaffold lncRNA that simultaneously binds PRC2 (via its 5′ domain) and LSD1/CoREST (via its 3′ domain) in trans, guiding these complexes to HOXD chromatin to deposit H3K27me3 and demethylate H3K4me2, respectively", "HOTAIR competes with HOXD mRNA for the same nuclear export machinery", "HOTAIR encodes a small open reading frame whose peptide product represses HOXD transcription"],
    answer: 1,
    explanation: "HOTAIR is a trans-acting lncRNA scaffold: its 5′ domain binds PRC2 (specifically EZH2), while its 3′ domain binds the LSD1/CoREST/REST demethylase complex. By simultaneously recruiting both complexes to HOXD loci, HOTAIR coordinates H3K27 trimethylation (repressive) and H3K4me2 demethylation (removing activation mark), silencing HOXD genes."
  },
  {
    id: 14,
    question: "A gene is marked with both H3K4me3 (active) and H3K27me3 (repressive) histone modifications at its promoter. This 'bivalent' state is most characteristic of:",
    options: ["Constitutively active housekeeping genes in differentiated cells", "Lineage-specific developmental genes in pluripotent stem cells that are poised for activation or silencing upon differentiation", "Permanently silenced heterochromatic regions in all cell types", "Imprinted genes that are monoallelically expressed in all tissues"],
    answer: 1,
    explanation: "Bivalent chromatin domains, identified by Bernstein et al. in ESCs, carry both H3K4me3 (placed by MLL/COMPASS complexes) and H3K27me3 (placed by PRC2) at the promoters of key developmental transcription factors. This poises genes for rapid activation (loss of H3K27me3) or stable silencing (loss of H3K4me3) upon receipt of differentiation signals."
  },
  {
    id: 15,
    question: "CTCF is described as an 'insulator' protein. Which of the following is the most accurate description of its function in genome organization?",
    options: ["CTCF acetylates enhancers to prevent their long-range looping to target promoters", "CTCF, together with cohesin, creates topologically associating domain (TAD) boundaries by loop extrusion stalling, preventing enhancer-promoter contacts across domain boundaries and organizing chromatin into self-interacting domains", "CTCF methylates DNA at insulator boundaries to create permanent barriers between active and inactive chromatin", "CTCF recruits PRC2 to all CTCF binding sites to create repressive barriers across the genome"],
    answer: 1,
    explanation: "CTCF bound at convergent orientation sites acts as a barrier that stalls the cohesin loop extrusion machinery, forming TAD boundaries. Within TADs, enhancer-promoter contacts are facilitated; across TAD boundaries, such contacts are insulated. This topology ensures regulatory specificity—enhancers typically only activate promoters within the same TAD."
  },
  {
    id: 16,
    question: "RNA Pol II C-terminal domain (CTD) is subject to differential phosphorylation during the transcription cycle. Which pattern of CTD phosphorylation is associated with the transition from promoter-proximal pausing to productive elongation?",
    options: ["Ser5-P at the promoter (by TFIIH kinase CDK7) for capping enzyme recruitment; Ser2-P in the gene body (by P-TEFb/CDK9) for elongation and co-transcriptional processing", "Ser2-P at the promoter for initiation; Ser5-P in the gene body for termination", "Tyr1-P throughout the transcription cycle without Ser phosphorylation", "Ser7-P exclusively at promoters of snRNA genes"],
    answer: 0,
    explanation: "CTD phosphorylation is a code: CDK7 (TFIIH subunit) phosphorylates Ser5 at promoters, recruiting the RNA capping enzyme. RNA Pol II then pauses ~25-50 nt downstream (promoter-proximal pausing, enforced by NELF/DSIF). P-TEFb (CDK9) phosphorylates Ser2 and releases NELF, converting paused RNAP to a productive elongating complex. Ser2-P also recruits RNA processing factors."
  },
  {
    id: 17,
    question: "Pioneer transcription factors (e.g., FOXA1, OCT4) differ from typical transcription factors because they:",
    options: ["Can only function in cells where their target genes are already active", "Can bind their cognate sequences within nucleosomal/compacted chromatin and recruit chromatin remodelers to open chromatin, enabling subsequent binding of other transcription factors that cannot access closed chromatin", "Directly methylate DNA at target gene promoters to activate transcription", "Function exclusively as co-activators without direct DNA binding ability"],
    answer: 1,
    explanation: "Pioneer factors have the unique ability to engage their DNA binding motifs even when the target site is within a nucleosome or closed chromatin. This is thought to result from their structural features that allow partial nucleosomal invasion. Pioneer factor binding recruits remodelers (e.g., SWI/SNF) and modifying enzymes, creating an accessible chromatin environment that allows subsequent binding of non-pioneer transcription factors."
  },
  {
    id: 18,
    question: "PIWI-interacting RNAs (piRNAs) are a class of small non-coding RNAs that protect the germline genome. What is the primary mechanism of piRNA biogenesis (ping-pong amplification)?",
    options: ["piRNAs are processed from long dsRNA precursors by Dicer, similar to siRNA biogenesis", "A primary piRNA (sense, derived from transposon transcripts) is loaded into PIWI; PIWI cleaves the antisense transcript to generate a secondary piRNA loaded into AUB/AGO3; these cleave sense transcripts to amplify the primary piRNA pool—the ping-pong cycle", "piRNAs are transcribed from CRISPR-like arrays in the germline and processed by Cas-like proteins", "piRNAs are derived from hairpin precursors by Drosha/DGCR8 processing in the nucleus"],
    answer: 1,
    explanation: "The ping-pong cycle: primary piRNAs (sense to transposon) loaded in PIWI guide cleavage of antisense transposon transcripts between positions 10-11; the resulting 5′ fragment is loaded into AUB or AGO3 as a secondary piRNA (antisense). These guide cleavage of sense transposon RNA to regenerate primary piRNAs, amplifying the piRNA pool and degrading transposon transcripts. A hallmark is the 10-nt 5′ overlap between sense and antisense piRNAs."
  },
  {
    id: 19,
    question: "Genomic imprinting evolved primarily in viviparous mammals. The 'parental conflict' (kinship) hypothesis proposes that imprinting evolved because:",
    options: ["Fathers benefit from silencing growth-promoting genes to reduce maternal mortality, while mothers benefit from silencing growth-inhibiting genes to maximize offspring fitness", "Paternally expressed genes (often growth-promoting, e.g., IGF2) evolve to maximize resource extraction from the mother (who is not related to the father's future offspring), while maternally expressed genes (often growth-limiting, e.g., H19/IGF2R) restrain fetal growth to preserve maternal fitness across multiple offspring", "Imprinting evolved to prevent parthenogenesis by requiring both parental genomes for normal development", "Imprinting evolved as a defense mechanism against retroviral insertions that target specific chromosomal regions"],
    answer: 1,
    explanation: "The Haig hypothesis (parental conflict/kinship theory): paternal alleles favor maximal resource allocation to current offspring (since the father is unrelated to the mother's future offspring by other males), selecting for paternally expressed growth-promoting genes (IGF2). Maternal alleles favor restraint to preserve maternal fitness for future offspring, selecting for maternally expressed growth-limiting genes (H19, IGF2R). This creates an evolutionary conflict resolved by genomic imprinting."
  },
  {
    id: 20,
    question: "siRNA-directed RNA interference (RNAi) results in RISC-mediated mRNA cleavage. Which structural feature of AGO2 is responsible for the endonuclease activity?",
    options: ["The PAZ domain, which anchors the 3′ end of the guide strand and positions the target for cleavage", "The PIWI domain, which adopts an RNase H-like fold and contains the catalytic DDH (Asp-Asp-His) motif responsible for target mRNA cleavage", "The MID domain, which binds the 5′ phosphate of the guide strand and directly cleaves target RNA", "The N-terminal domain, which unwinds the siRNA duplex and provides the catalytic cleft for mRNA cleavage"],
    answer: 1,
    explanation: "AGO2's PIWI domain adopts an RNase H-like fold with a conserved DEDH (or DDH) catalytic tetrad. Positioned by the PAZ domain (anchoring the 3′ end) and MID domain (anchoring the 5′ phosphate) of the guide strand, the PIWI domain cleaves the phosphodiester bond of the target mRNA between positions 10 and 11 of the guide strand in a Mg2+-dependent mechanism."
  },
  {
    id: 21,
    question: "Enhancer RNA (eRNA) is transcribed from active enhancers. Which evidence suggests eRNAs have a functional role rather than being mere transcriptional noise?",
    options: ["eRNAs are identical in sequence to the mRNAs produced from their target genes", "Acute depletion of specific eRNAs (without affecting the DNA or nearby enhancer-bound transcription factors) reduces target gene expression; eRNAs facilitate enhancer-promoter looping by interacting with the cohesin complex and Mediator", "eRNAs are translated into short peptides that directly activate RNA polymerase II", "eRNA transcription exhausts the local dNTP pool, reducing unwanted transcription from nearby cryptic promoters"],
    answer: 1,
    explanation: "Multiple lines of evidence support eRNA function: (1) eRNA knockdown (using antisense oligonucleotides or dCas9-KRAB targeting) reduces target gene expression without altering the enhancer chromatin state or TF binding; (2) eRNAs physically interact with cohesin (CBP) and Mediator to facilitate or stabilize enhancer-promoter looping; (3) eRNA production kinetics precede mRNA induction during signal-responsive activation."
  },
  {
    id: 22,
    question: "Angelman syndrome and Prader-Willi syndrome both result from deletions of chromosome 15q11-q13 but show opposite clinical phenotypes depending on which parental chromosome carries the deletion. This is because:",
    options: ["The deletions on maternal and paternal chromosomes 15 affect different gene sets due to genomic imprinting: maternal deletion causes Angelman (loss of UBE3A, maternally expressed), while paternal deletion causes Prader-Willi (loss of paternally expressed genes like SNRPN, NDN)", "The paternal chromosome 15 carries a dominant suppressor that causes Prader-Willi, while the maternal chromosome carries an enhancer that causes Angelman", "Both conditions affect the same gene (UBE3A) but maternal and paternal alleles encode different protein isoforms with opposite functions", "Deletions affect the same gene on both parental chromosomes but methylation differences alter the age of disease onset"],
    answer: 0,
    explanation: "In the 15q11-q13 region: UBE3A (E6-AP ubiquitin ligase) is expressed only from the maternal allele in neurons (paternal UBE3A is silenced by a nuclear-localized antisense RNA). Loss of maternal 15q11-q13 → Angelman syndrome (absent UBE3A). Paternal genes including SNRPN, MKRN3, NDN (growth/appetite-regulating) are paternally expressed; loss of paternal 15q11-q13 → Prader-Willi syndrome."
  },
  {
    id: 23,
    question: "The CBP/p300 co-activator is a histone acetyltransferase (HAT) and transcriptional co-activator. How does its HAT activity contribute to transcriptional activation beyond simply 'opening chromatin'?",
    options: ["CBP/p300 acetylates H3K27, converting Polycomb-silenced chromatin to active chromatin at a single step", "Beyond chromatin opening, H3K27ac placed by CBP/p300 inhibits PRC2-mediated H3K27me3 deposition on active enhancers/promoters, marks enhancers for super-enhancer classification, and acetylated histones serve as docking sites for bromodomain-containing activators (e.g., BRD4)", "CBP/p300 acetylates and inactivates HDAC complexes at target promoters, preventing deacetylation", "CBP/p300 exclusively acetylates non-histone proteins such as p53, having no role in histone modification at active promoters"],
    answer: 1,
    explanation: "CBP/p300-catalyzed H3K27ac is a hallmark of active enhancers and promoters. H3K27ac prevents PRC2 from methylating the same residue, thus antagonizing Polycomb repression. Additionally, H3K27ac and other acetyl marks recruit bromodomain proteins (e.g., BRD4), which tether P-TEFb to release promoter-proximal paused RNAP, linking enhancer acetylation directly to productive elongation."
  },
  {
    id: 24,
    question: "In a cell undergoing S-phase, how is histone modification information inherited through replication?",
    options: ["Parental histones are randomly degraded; entirely new histones deposited on daughter strands are modified by reading the DNA sequence context", "Parental histone octamers split into H2A-H2B dimers and H3-H4 tetramers, which are distributed semi-conservatively to daughter duplexes; parental modified histones serve as templates for methyltransferases to modify newly deposited unmodified histones on the same strand, re-establishing the pattern", "All histone modifications are encoded in the DNA sequence at CpG sites and re-established entirely through DNA methylation reading", "Histone modifications are re-established entirely post-replication by signal transduction cascades rather than direct template reading"],
    answer: 1,
    explanation: "During replication, parental histone octamers (particularly H3-H4 tetramers) are distributed to both daughter duplexes. Newly deposited histones (initially H3K9me0, H3K27me0) are modified by reading parental histone states: e.g., PRC2 uses existing H3K27me3 on parental histones to allosterically stimulate methylation of adjacent new H3K27 (via the EED aromatic cage). CAF-1 deposits new histones near replication forks, and histone chaperones ensure parental histone redistribution."
  },
  {
    id: 25,
    question: "Circular RNAs (circRNAs) are produced by back-splicing. What is the proposed functional significance of the abundant cytoplasmic circRNA CDR1as (ciRS-7)?",
    options: ["CDR1as encodes a circular protein via a cap-independent translation mechanism", "CDR1as acts as a miRNA sponge: it contains >70 binding sites for miR-7 and sequesters miR-7, reducing miR-7 availability to repress its target mRNAs (e.g., EGFR, IRS-1/2)", "CDR1as is exported to the nucleus where it acts as a scaffold for PRC2 recruitment at miR-7 target gene promoters", "CDR1as inhibits Dicer from processing miR-7 precursors, reducing mature miR-7 biogenesis"],
    answer: 1,
    explanation: "CDR1as (cerebellar degeneration-related protein 1 antisense, also called ciRS-7) harbors over 70 conserved miR-7 seed match sites and is abundantly expressed in neurons. It acts as a competing endogenous RNA (ceRNA) or miRNA sponge, sequestering miR-7 molecules and relieving repression of miR-7 targets involved in neural signaling. CDR1as itself is resistant to miRNA-mediated decay due to its circular structure."
  },
  {
    id: 26,
    question: "Super-enhancers differ from typical enhancers by all of the following characteristics EXCEPT:",
    options: ["Unusually high occupancy of Mediator, BRD4, and master transcription factors", "Large size (spanning ~12.5 kb on average versus ~500 bp for typical enhancers)", "Sensitivity to low doses of BRD4 inhibitors (e.g., JQ1) causing disproportionate loss of target gene expression", "Equal distribution across the genome in all cell types and invariant between differentiated and stem cells"],
    answer: 3,
    explanation: "Super-enhancers are cell type-specific: they are defined by massive co-occupancy of Mediator, BRD4, H3K27ac, and lineage-defining transcription factors at specific loci in each cell type. They are not uniformly distributed or invariant. Super-enhancers drive high-level expression of cell identity genes and are particularly sensitive to perturbation of transcription coactivators."
  },
  {
    id: 27,
    question: "Heterochromatin protein 1 (HP1) maintains constitutive heterochromatin at pericentromeric regions. Which cascade of events establishes H3K9me3-HP1 heterochromatin?",
    options: ["HP1 directly methylates H3K9 and then self-oligomerizes to spread along chromatin", "SUV39H1/H2 (H3K9 methyltransferases) trimethylate H3K9; HP1's chromodomain binds H3K9me3; HP1 also binds SUV39H, bringing the methyltransferase to adjacent nucleosomes to propagate H3K9me3 and HP1 spreading in a self-reinforcing loop", "DNMT3A methylates DNA at pericentromeric satellites, which recruits HP1 independently of H3K9me3", "The RNAi pathway degrades pericentromeric transcripts, and the resulting siRNAs recruit RITS complex, which directly binds HP1 without H3K9 methylation"],
    answer: 1,
    explanation: "Constitutive heterochromatin establishment: SUV39H1/H2 (H3K9me3 writers) trimethylate H3K9 on pericentromeric nucleosomes. HP1's chromodomain directly and specifically recognizes H3K9me3. HP1 also interacts with SUV39H enzymes via its chromoshadow domain, recruiting them to adjacent unmodified nucleosomes. This positive feedback loop spreads H3K9me3 and HP1 across large heterochromatic domains. (In fission yeast, the RNAi/RITS pathway also contributes, but in mammals, SUV39H-HP1 is primary.)"
  },
  {
    id: 28,
    question: "RNA editing by ADAR (adenosine deaminase acting on RNA) converts adenosine to inosine in double-stranded RNA regions. Which consequence of A-to-I editing has the most profound effect on protein function?",
    options: ["A-to-I editing in 3′ UTRs exclusively reduces mRNA stability without affecting protein sequence", "A-to-I editing in coding sequences recodes amino acids (since inosine is read as guanosine by the ribosome), exemplified by GluR-B (AMPA receptor subunit) where Q/R site editing changes glutamine to arginine, eliminating Ca2+ permeability", "A-to-I editing always creates premature stop codons leading to NMD", "A-to-I editing in coding sequences creates splice donor sites that are invariably used, generating novel exons"],
    answer: 1,
    explanation: "Inosine is decoded as guanosine by the ribosome. In the AMPA receptor GluR-B subunit, A-to-I editing at the Q/R site converts a CAG (Gln) codon to a CIG codon read as CGG (Arg). This single amino acid change eliminates Ca2+ permeability of the AMPA receptor—functionally critical for synaptic plasticity. This is one of the most important examples of recoding RNA editing."
  },
  {
    id: 29,
    question: "The NuRD (Nucleosome Remodeling and Deacetylase) complex contains both ATPase (CHD3/4) and HDAC (HDAC1/2) enzymatic activities. What is the functional significance of combining these activities?",
    options: ["NuRD uses HDAC activity to acetylate histones and ATPase activity to slide nucleosomes for transcriptional activation", "Combining nucleosome remodeling with histone deacetylation allows NuRD to reposition nucleosomes over promoters while simultaneously removing acetyl marks, creating a compacted, deacetylated, transcriptionally repressive chromatin state more efficiently than either activity alone", "NuRD's dual activities serve opposing functions: HDAC represses while CHD4 activates, creating a balanced regulatory state", "The HDAC activity of NuRD deacetylates non-histone proteins, while CHD4 remodels chromatin independently at different genomic targets"],
    answer: 1,
    explanation: "NuRD's power as a repressor lies in its dual enzymatic architecture: CHD3/4 ATPase repositions nucleosomes to occlude transcription factor binding sites, while HDAC1/2 removes histone acetylation marks (H3K27ac, H3K9ac, H4K16ac) that would otherwise recruit bromodomain activators. This synergy creates a stable repressive state that neither activity alone could efficiently maintain."
  },
  {
    id: 30,
    question: "In Drosophila dosage compensation (distinct from mammalian XCI), the male X chromosome is hyperactivated ~2-fold. What is the mechanism?",
    options: ["The single male X undergoes de novo acetylation of all H3K27 residues, doubling transcription rates of all X-linked genes", "The MSL (male-specific lethal) complex, including the lncRNAs roX1 and roX2, coats the male X chromosome and deposits H4K16ac via MOF (Males absent On the First) HAT, which decondenses chromatin and doubles transcriptional output", "The male X chromosome is endoreduplicated to create two copies, matching the female XX dosage", "In Drosophila males, the autosomes are repressed 2-fold to match the lower X dosage"],
    answer: 1,
    explanation: "Drosophila dosage compensation uses a different strategy than mammals. The MSL complex (MSL1, MSL2, MSL3, MOF, MLE) plus the X-specific lncRNAs roX1 and roX2 coat the male X. MOF (KAT8) acetylates H4K16—a mark that directly decondenses chromatin by disrupting the 30-nm fiber—leading to approximately 2-fold increased transcription across the male X to match the female XX output."
  },
  {
    id: 31,
    question: "Which of the following statements about the relationship between alternative splicing and chromatin is most accurate?",
    options: ["Chromatin structure has no influence on alternative splicing since splicing occurs co-transcriptionally in the nucleus while chromatin is in the cytoplasm", "Nucleosome positioning and histone modifications influence RNA Pol II elongation rate, which in turn affects splice site recognition: slow RNAP over exons (due to nucleosome pausing or H3K9me3) allows weak splice sites more time to be recognized, while fast RNAP favors exon skipping", "H3K4me3 at exons directly recruits SR proteins to promote inclusion of all exons uniformly", "DNA methylation at exon-intron boundaries converts cytosines to uracils, creating new splice donor sites"],
    answer: 1,
    explanation: "The 'kinetic coupling' model: RNA Pol II elongation rate influences co-transcriptional splicing. Nucleosome positioning over exons (creating a 'speed bump') slows RNAP, providing a kinetic window for weak splice site recognition. H3K9me3-enriched exons or H3K36me3 patterns can alter elongation rate. H3K36me3 in gene bodies recruits PSIP1 (LEDGF), which recruits SR splicing factors. Chromatin thus directly regulates alternative splicing decisions."
  },
  {
    id: 32,
    question: "Paramutation is an epigenetic phenomenon where one allele (the paramutagenic allele) heritably alters the expression of a homologous allele (the paramutable allele). The altered state is then transmitted through meiosis. What molecular mechanism best explains paramutation?",
    options: ["Paramutation involves permanent sequence mutation of the paramutable allele by the paramutagenic allele's encoded endonuclease", "RNA-directed DNA methylation (RdDM): the paramutagenic allele produces sRNAs (e.g., siRNAs) that guide RNA Pol IV/V-dependent methylation of corresponding sequences on the paramutable allele; this methylation and sRNA production become self-reinforcing and heritable through gametes", "The paramutagenic allele encodes a dominant-negative transcription factor that permanently represses the paramutable allele in trans", "Paramutation is mediated by direct protein-protein interaction between products of both alleles, creating a prion-like heritable altered protein conformation"],
    answer: 1,
    explanation: "Paramutation (best studied in maize b1 and r1 loci) is mediated by the RNA-directed DNA methylation (RdDM) pathway. The paramutagenic allele produces small RNAs (24-nt siRNAs generated by Pol IV). These siRNAs guide an Argonaute-containing RITS-like complex and Pol V to homologous sequences on the paramutable allele, directing DRM2-catalyzed de novo DNA methylation. This methylated, silenced state then itself produces siRNAs, creating a self-reinforcing epigenetic state inherited through gametes."
  },
  {
    id: 33,
    question: "The KDM5 (JARID1) family of histone demethylases removes methyl groups from H3K4me3/me2. What is the catalytic mechanism of these Jumonji C domain-containing demethylases?",
    options: ["KDM5 enzymes are FAD-dependent amine oxidases that oxidize methyl groups using a flavin cofactor", "KDM5 enzymes use an Fe(II) and α-ketoglutarate-dependent dioxygenase mechanism: hydroxylation of the methyl group yields an unstable carbinolamine that spontaneously releases formaldehyde, reducing the methylation state by one", "KDM5 enzymes are zinc-dependent metalloenzymes that coordinate the methyl group for direct hydrolysis", "KDM5 enzymes transfer the methyl group from histone to S-adenosylhomocysteine (SAH) via a methyl transfer reversal mechanism"],
    answer: 1,
    explanation: "All Jumonji C (JmjC) domain histone demethylases use the same α-ketoglutarate/Fe(II)-dependent dioxygenase mechanism: molecular oxygen is incorporated into the N-methyl group, producing N-hydroxymethyl histone (unstable carbinolamine) + succinate + CO2. The carbinolamine spontaneously decomposes to release formaldehyde and the demethylated histone. This mechanism can remove mono-, di-, and trimethyl marks (unlike LSD1/KDM1, which is FAD-dependent and can only remove mono/dimethyl marks)."
  },
  {
    id: 34,
    question: "A patient has Rett syndrome caused by a mutation in the MECP2 gene. MeCP2 normally recognizes methylated DNA. Which downstream mechanism best explains how MECP2 loss causes neuronal dysfunction?",
    options: ["Without MeCP2, DNMT1 cannot maintain CpG methylation, causing global hypomethylation and activation of silenced neuronal genes", "MeCP2 normally bridges methylated neuronal gene promoters (via its MBD) to the NCoR/SMRT corepressor complex (via its TRD), silencing target genes like BDNF; loss of MeCP2 dysregulates hundreds of genes critical for synaptogenesis and neuronal homeostasis, including derepression of LINE-1 retrotransposons", "MeCP2 is required for mRNA splicing; its loss leads to aberrant exon skipping in neuronal transcripts", "MeCP2 is the sole maintenance methyltransferase in neurons; its loss leads to progressive global demethylation over the lifespan"],
    answer: 1,
    explanation: "MeCP2 contains a methyl-CpG binding domain (MBD) that binds methylated CpGs and a transcription repression domain (TRD) that recruits the NCoR1/HDAC3 co-repressor complex. Loss of MeCP2 dysregulates thousands of target genes. Key targets include BDNF (brain-derived neurotrophic factor) and LINE-1 retrotransposons (which are derepressed and can cause genomic instability). The resulting transcriptional dysregulation underlies Rett syndrome's progressive neurological deterioration."
  },
  {
    id: 35,
    question: "Transcriptional condensates (phase-separated compartments enriched in Mediator, RNA Pol II, and transcription factors) have been proposed to explain super-enhancer function. Which property of transcription factors drives their participation in phase separation?",
    options: ["The DNA-binding domains (DBDs) of transcription factors self-interact to form ordered crystalline arrays", "Intrinsically disordered regions (IDRs) in transcriptional activation domains (e.g., in OCT4, FUS, TAZ) undergo weak multivalent interactions (π-π, cation-π) that drive liquid-liquid phase separation, concentrating transcriptional machinery at super-enhancers", "The leucine zipper dimerization domains of bZIP transcription factors polymerize to form condensates", "High local concentrations of TATA-binding protein (TBP) nucleate ordered condensates at all active gene promoters"],
    answer: 1,
    explanation: "Many transcription factors contain intrinsically disordered regions (IDRs) in their activation domains with low-complexity sequences rich in aromatic (Tyr, Phe) and charged residues. These IDRs can undergo liquid-liquid phase separation through weak multivalent interactions (π-cation, π-π stacking, electrostatic). The Mediator complex and CTD of RNA Pol II also contain IDRs. Phase separation at super-enhancers concentrates the transcription machinery, enabling high transcriptional output from key cell-identity genes."
  },
  {
    id: 36,
    question: "The imprinting control region (ICR) at the Igf2r/Air locus in mice is paternally methylated and controls the paternal repression of Slc22a2 and Slc22a3 in cis. Paternal Air lncRNA is expressed from the paternal chromosome. How does Air silence the paternal Slc22a3 gene ~400 kb away?",
    options: ["Air encodes a protein that diffuses 400 kb along the chromosome to repress Slc22a3 promoter", "Air lncRNA produced from the paternal chromosome accumulates at the Slc22a3 promoter in cis (in 3D nuclear space), where it recruits the G9a H3K9me2 methyltransferase to silence Slc22a3 by chromatin-based repression", "Air RNA base-pairs with Slc22a3 mRNA in the cytoplasm to trigger NMD", "Air RNA sequesters CTCF from the ICR boundary, allowing enhancers of Igf2r to contact and silence Slc22a3 promoter"],
    answer: 1,
    explanation: "Air (Antisense Igf2r RNA) is a paternally expressed nuclear lncRNA. Despite being transcribed from a locus ~400 kb from Slc22a3, fluorescence studies show Air RNA physically accumulates at the Slc22a3 promoter on the paternal chromosome (via chromatin folding in 3D). At the Slc22a3 promoter, Air recruits the G9a histone methyltransferase, depositing H3K9me2 to silence the gene. This is a paradigm for cis-acting lncRNA-mediated chromatin silencing over large genomic distances."
  },
  {
    id: 37,
    question: "A drug inhibits EZH2 (a PRC2 catalytic subunit) in a cancer cell line. Which combination of chromatin state changes and gene expression effects would you predict?",
    options: ["Global increase in H3K27me3 across the genome, leading to widespread gene silencing and reduced proliferation", "Reduction of H3K27me3 at Polycomb target genes (tumor suppressors, differentiation genes), leading to their derepression; however, bivalent genes may also lose H3K27me3 without activating if H3K4me3 is also absent at those loci", "Increase in H3K27ac globally due to unchecked CBP/p300 activity, destabilizing all enhancer-promoter loops", "No change in gene expression since H3K27me3 is rapidly replaced by H3K27ac from existing CBP/p300 at all loci"],
    answer: 1,
    explanation: "EZH2 inhibition (e.g., tazemetostat) reduces H3K27me3 genome-wide. At Polycomb-repressed tumor suppressors (e.g., CDKN2A) and differentiation genes, loss of H3K27me3 can allow their derepression (if PRC1 is also displaced and TF machinery is available). However, at bivalent promoters marked by both H3K4me3 and H3K27me3, loss of H3K27me3 alone may not activate genes if other repressive mechanisms persist. The net effect is cell-type and context-dependent."
  },
  {
    id: 38,
    question: "Which of the following best distinguishes H3K9me2/3-marked facultative heterochromatin from H3K27me3-marked Polycomb repressive chromatin?",
    options: ["H3K9me2/3 is always associated with repetitive DNA; H3K27me3 is always associated with protein-coding genes", "H3K9me2/3 heterochromatin is maintained by HP1 proteins and is generally stable across cell types (constitutive heterochromatin) or tissue-specific lamina-associated domains; H3K27me3 Polycomb chromatin is more dynamic, can be reversed during development, and preferentially marks lineage-specific regulatory genes that are off in a given cell type", "H3K9me2/3 marks are placed by PRC2 while H3K27me3 marks are placed by SUV39H enzymes", "H3K27me3 is exclusively found at imprinted gene loci and constitutes the primary imprinting mark"],
    answer: 1,
    explanation: "H3K9me2/3 (placed by SUV39H1/2, G9a, SETDB1) is read by HP1 proteins and associated with both constitutive heterochromatin (pericentromeric repeats, transposons) and lamina-associated domains (LADs) in a relatively stable manner. H3K27me3 (placed by PRC2/EZH2) marks lineage-specific developmental gene promoters and is more plastic—it is removed during differentiation when Polycomb target genes are activated. The two systems are largely non-overlapping mechanistically and genomically."
  },
  {
    id: 39,
    question: "RNA Pol III transcribes SINE retrotransposons (e.g., Alu elements in humans, B1/B2 in mice). How do B2 RNAs (mouse SINE transcripts) regulate RNA Pol II-dependent gene expression during heat shock?",
    options: ["B2 RNAs are processed into siRNAs that silence heat-shock protein mRNAs to prevent cytotoxicity", "B2 SINE RNAs are induced by heat shock and bind directly to RNA Pol II, reducing its affinity for promoter DNA at stress-repressed genes, acting as a general repressor that can be displaced by HSF1-mediated activation of HSP gene promoters", "B2 RNAs recruit DNMT3B to methylate and permanently silence housekeeping gene promoters during stress", "B2 RNAs are exported to the cytoplasm where they act as miRNA sponges, sequestering miRNAs that target HSP mRNAs"],
    answer: 1,
    explanation: "Mouse B2 SINE RNAs (transcribed by RNA Pol III) accumulate during heat shock and directly bind RNA Pol II, preventing it from productively engaging with DNA at repressed gene promoters. B2 RNA competes with promoter DNA for the same cleft in RNA Pol II, acting as a non-coding RNA repressor. At HSP70 and other stress-induced genes, HSF1 (heat shock factor 1) can displace B2 RNA from RNA Pol II, enabling their induction."
  },
  {
    id: 40,
    question: "5-hydroxymethylcytosine (5hmC) is enriched in neurons and ESCs. Which of the following statements best describes its functional distinction from 5mC?",
    options: ["5hmC has identical regulatory effects to 5mC since both prevent transcription factor binding equally", "5hmC can be an intermediate in active demethylation, serves as a stable epigenetic mark in neurons (recognized by specific 5hmC-binding proteins distinct from 5mC readers), and unlike 5mC, does not recruit MBD proteins efficiently, correlating with gene body expression rather than silencing", "5hmC is exclusively found at enhancers and is required for CBP/p300 recruitment to establish H3K27ac", "5hmC marks only mitochondrial DNA and is absent from nuclear chromatin in somatic cells"],
    answer: 1,
    explanation: "5hmC is a distinct epigenetic mark with properties different from 5mC: (1) it is abundant and stable in neurons, where it is added by TET1/2/3; (2) it is not read efficiently by canonical MBD proteins that recognize 5mC, reducing its repressive activity; (3) specific 5hmC readers (e.g., MeCP2, which also binds 5hmC in a different mode) exist; (4) gene body 5hmC correlates with active transcription, unlike gene body 5mC which has a more complex relationship with expression."
  },
  {
    id: 41,
    question: "The Mediator complex is a general transcriptional coactivator. How does Mediator transmit signals from enhancer-bound transcription factors to RNA Pol II at the promoter?",
    options: ["Mediator unwinds the DNA between enhancer and promoter, allowing direct physical contact of enhancer-bound TFs with RNA Pol II", "Mediator acts as a bridge: its tail module contacts activation domains of enhancer-bound transcription factors, while its head and middle modules interact with the RNA Pol II CTD and general transcription factors at the promoter, forming a loop that transmits activating signals to the preinitiation complex", "Mediator phosphorylates the enhancer-bound transcription factors, causing them to dissociate from the enhancer and translocate to the promoter as co-activators", "Mediator methylates H3K4 at the target promoter to recruit TFIID and initiate transcription"],
    answer: 1,
    explanation: "Mediator (~30 subunits, ~1.4 MDa) is the master signal integrator at active genes. Its tail module (MED1, MED15, etc.) contacts activation domains (ADs) of DNA-bound transcription factors. Its head module contacts TBP and TFIIH at the promoter. Its middle module contacts RNA Pol II. Mediator is also a component of enhancer-promoter loop anchors (with cohesin), transmitting activation signals across chromatin loops to stimulate PIC assembly and RNAP release from pausing."
  },
  {
    id: 42,
    question: "Transgenerational epigenetic inheritance refers to epigenetic marks being passed to offspring beyond the F2 generation (i.e., not explained by direct embryonic exposure). Which molecular mechanism is best supported for mammalian transgenerational epigenetic inheritance?",
    options: ["DNA methylation patterns acquired from environmental exposures are 100% faithfully preserved through germline reprogramming, providing a direct molecular memory", "Germline-transmitted small RNAs (e.g., sperm-borne miRNAs, tRNAs, or piRNAs), RNA modifications (e.g., m6A), and residual histone retention at specific genomic loci in sperm can transmit epigenetic information, as these are not completely erased during germline reprogramming and can influence zygotic gene expression", "Prion-like protein conformations in oocyte cytoplasm are exclusively responsible for all documented cases of transgenerational epigenetic inheritance in mammals", "Transgenerational epigenetic inheritance in mammals is mediated exclusively by mitochondrial DNA methylation transmitted through the maternal line"],
    answer: 1,
    explanation: "Mammalian genomes undergo extensive epigenetic reprogramming in primordial germ cells (PGCs) and after fertilization, erasing most DNA methylation. However, some epigenetic information escapes erasure: (1) sperm carry diverse small RNAs (miRNAs, tRNA fragments, piRNAs) and RNA modifications (m6A) that can affect zygotic gene expression; (2) ~10% of sperm histones are retained at specific gene loci; (3) some imprinted DMRs resist reprogramming. Multiple documented examples (e.g., Drosophila, mice, C. elegans) show sRNA-mediated transgenerational inheritance."
  },
  {
    id: 43,
    question: "The GAS5 lncRNA functions as a 'decoy' for glucocorticoid receptor (GR). What is the molecular mechanism?",
    options: ["GAS5 RNA is translated into a peptide that directly competes with glucocorticoid for GR's ligand binding pocket", "GAS5 lncRNA contains a glucocorticoid response element (GRE)-like stem-loop structure that sequesters the GR DNA-binding domain, preventing GR from binding GRE sequences in target gene promoters and suppressing glucocorticoid-responsive transcription", "GAS5 recruits HDAC3 to acetylate GR, preventing its nuclear translocation", "GAS5 acts as a ceRNA to sequester miRNAs that target GR mRNA, paradoxically increasing GR protein levels"],
    answer: 1,
    explanation: "GAS5 (growth arrest-specific transcript 5) is a lncRNA whose secondary structure includes a stem-loop resembling the GRE DNA sequence. This 'riborepressor' decoy binds the GR DNA-binding domain with specificity, competing with genomic GRE sites for GR binding. During cell growth arrest (when GAS5 is induced), this sequesters GR and suppresses GR-mediated transcription of pro-survival genes, promoting apoptosis."
  },
  {
    id: 44,
    question: "In C. elegans, the piRNA pathway (21U-RNAs) surveils the germline for foreign sequences. What is the proposed 'self vs. non-self' mechanism used by piRNAs?",
    options: ["piRNAs in C. elegans distinguish self from non-self by comparing sequences to a 'self-genome' database stored as rDNA arrays", "21U-RNAs trigger RNAi silencing of any target unless the target also produces antisense 22G-RNAs from a 'licensed' CSR-1 pathway (epigenetic licensing). Endogenous germline genes are 'licensed' by the CSR-1 Argonaute pathway, which protects them from 21U-piRNA silencing; foreign sequences lacking this license are silenced", "C. elegans distinguishes self from non-self solely through the relative G-U wobble base pairs in piRNA:target duplexes", "Foreign sequences are identified by the absence of N6-methyladenosine (m6A) modification, which piRNA-pathway proteins use as a self-recognition signal"],
    answer: 1,
    explanation: "The 'genome in conflict' model in C. elegans: 21U-RNAs (piRNAs) trigger small RNA amplification on matched sequences, producing 22G-RNAs loaded into WAGO Argonaute (silencing pathway). CSR-1 Argonaute is loaded with 22G-RNAs produced from germline-expressed 'self' genes and protects these loci from piRNA silencing (epigenetic licensing/immunity). Foreign sequences (transposons, transgenes) lack CSR-1 licensing and are thus susceptible to WAGO-mediated silencing. This two-Argonaute competitive balance provides self/non-self distinction."
  },
  {
    id: 45,
    question: "RNA m6A (N6-methyladenosine) modification is the most abundant internal mRNA modification in eukaryotes. It is deposited by the METTL3/METTL14/WTAP writer complex and can be reversed by FTO/ALKBH5 erasers. How does m6A regulate gene expression?",
    options: ["m6A exclusively stabilizes mRNAs by protecting them from 5′ decapping; its erasure by FTO leads to mRNA decay", "m6A regulates mRNA fate through context-dependent reader proteins: YTHDF2 promotes mRNA degradation (via recruitment of CCR4-NOT), YTHDF1 promotes translation, YTHDC2 facilitates nuclear export, and IGF2BP proteins stabilize m6A-modified mRNAs; the outcome depends on which readers are expressed and the cellular context", "m6A is an irreversible modification that permanently marks mRNAs for translation only once, preventing secondary rounds of translation", "m6A exclusively affects alternative splicing by blocking U2AF65 binding to branch points near the modified adenosines"],
    answer: 1,
    explanation: "m6A is a dynamic, reversible modification read by YTH-domain proteins (YTHDF1-3, YTHDC1-2) and IGF2BP proteins with different functional outcomes: YTHDF2 recruits the CCR4-NOT deadenylase to promote mRNA decay; YTHDF1 promotes translation by recruiting eIF3; YTHDC1 regulates alternative polyadenylation and splicing in the nucleus; YTHDC2 promotes mRNA nuclear export; IGF2BPs stabilize m6A-containing mRNAs. Context-dependent reader competition determines the net effect on each transcript."
  },
  {
    id: 46,
    question: "Enhancer hijacking is a mechanism of oncogene activation in cancer. Which scenario best exemplifies this mechanism?",
    options: ["A point mutation in the coding sequence of a proto-oncogene converts it to an active oncogene", "A chromosomal rearrangement places a strong cell-type-specific super-enhancer (e.g., a T-cell enhancer) adjacent to a proto-oncogene (e.g., MYC) that is normally not expressed in that cell type, causing aberrant high-level oncogene expression without mutation of the gene itself", "A nonsense mutation in a tumor suppressor creates a new promoter that drives oncogene expression", "Amplification of a DNA methyltransferase causes hypermethylation and silencing of tumor suppressor genes"],
    answer: 1,
    explanation: "Enhancer hijacking occurs when chromosomal structural variants (inversions, translocations, deletions that alter TAD boundaries) bring strong tissue-specific enhancers into proximity with proto-oncogenes outside their normal regulatory domain. Classic examples include CTCF site deletion in DIPG (diffuse intrinsic pontine glioma) rearranging PDGFRA regulatory landscape, and IGH enhancer translocated to MYC in Burkitt lymphoma. No coding mutation of the oncogene is required."
  },
  {
    id: 47,
    question: "The Trithorax group (TrxG) proteins are antagonists of Polycomb group (PcG) silencing. How do TrxG complexes maintain active chromatin states?",
    options: ["TrxG proteins demethylate H3K27me3 directly via a JmjC domain demethylase activity identical to KDM6A/UTX", "TrxG complexes (e.g., COMPASS/MLL complexes) deposit H3K4me3 at gene promoters and maintain active gene expression; some TrxG members are also SWI/SNF-family remodelers (e.g., BRG1/Brahma) that maintain open chromatin; H3K4me3 and H3K27me3 cannot coexist on the same H3 tail, so TrxG-marked nucleosomes resist PRC2 methylation", "TrxG proteins phosphorylate EZH2 to prevent PRC2 assembly at target gene promoters", "TrxG proteins are RNA-binding proteins that stabilize target gene mRNAs against NMD, indirectly preventing transcriptional silencing"],
    answer: 1,
    explanation: "TrxG complexes use multiple mechanisms to counter Polycomb silencing: MLL/COMPASS complexes trimethylate H3K4, a mark incompatible with H3K27me3 on the same tail (the two marks cannot coexist on the same H3 tail due to steric and biochemical constraints). Some TrxG members are SWI/SNF remodelers (Brahma/BRG1) that maintain nucleosome accessibility. Additionally, KDM6A (UTX), a TrxG member, directly demethylates H3K27me3 to H3K27me0, providing an active counterbalance to PRC2."
  },
  {
    id: 48,
    question: "Liquid-liquid phase separation has been proposed to explain transcriptional condensate formation at super-enhancers. Which criterion best distinguishes a true phase-separated condensate from simple protein aggregation or a stable macromolecular complex?",
    options: ["Condensates contain a fixed stoichiometry of components, like stable complexes", "Condensates exhibit liquid-like properties: rapid internal rearrangement (measured by FRAP), spherical shape from surface tension, droplet fusion/splitting behavior, and concentration-dependent threshold formation; unlike aggregates, condensates dissolve when concentration falls below the saturation concentration (Csat) and are reversible by 1,6-hexanediol treatment", "Condensates can only form in the nucleus and never in the cytoplasm", "Condensates are solid-state assemblies with no internal molecular movement, identified by electron microscopy as dense granules"],
    answer: 1,
    explanation: "True liquid-liquid phase-separated condensates are characterized by: (1) spherical shape (surface tension minimization); (2) rapid fluorescence recovery after photobleaching (FRAP), reflecting dynamic molecular exchange; (3) droplet coalescence and wetting behavior; (4) concentration-dependent formation above a saturation threshold (Csat); (5) dissolution by aliphatic alcohol 1,6-hexanediol (disrupting hydrophobic interactions). These properties distinguish condensates from solid-like aggregates (slow FRAP, irreversible) and stable macromolecular complexes (fixed stoichiometry)."
  },
  {
    id: 49,
    question: "A mutation that converts lysine 36 of histone H3 to methionine (H3K36M) is found in chondroblastoma tumors. What is the dominant-negative mechanism of H3K36M?",
    options: ["H3K36M cannot be acetylated, globally reducing H3K36ac and increasing gene expression", "H3K36M acts as a competitive inhibitor of NSD1/2 and SETD2 H3K36 methyltransferases: the mutant H3K36M histone is incorporated into nucleosomes and sequesters these enzymes in an inhibited state, causing global loss of H3K36me2/3 across the genome, mimicking loss-of-function of these methyltransferases", "H3K36M is ubiquitylated instead of methylated, misdirecting DNA damage repair to transcribed gene bodies", "H3K36M prevents nucleosome assembly by blocking H3-H4 tetramer formation with CAF-1"],
    answer: 1,
    explanation: "Lysine-to-methionine mutations (K-to-M) in histones act as dominant-negative inhibitors of the corresponding methyltransferases. H3K36M (found in ~95% of chondroblastomas) is incorporated into nucleosomes and binds the active site of NSD1/2 and SETD2 with high affinity (the methionine side chain mimics a substrate transition state), trapping and inactivating these enzymes. This causes global loss of H3K36me2 and H3K36me3, dysregulating gene expression in a manner similar to NSD1/SETD2 loss-of-function mutations."
  },
  {
    id: 50,
    question: "The concept of 'epigenetic reprogramming' during mammalian development involves two major waves of genome-wide demethylation and remethylation. In which developmental contexts do these waves occur, and what is the biological significance of each?",
    options: ["Wave 1: gastrulation (removes tissue-specific methylation before germ layer specification); Wave 2: organogenesis (establishes tissue-specific methylation)", "Wave 1: pre-implantation embryo (shortly after fertilization—erases gamete-specific methylation to reset totipotency, except imprinted DMRs and some retrotransposons); Wave 2: primordial germ cells (PGCs) migrating to gonads (erases almost all methylation including imprints to reset the germline epigenome, followed by sex-specific remethylation during gametogenesis)", "Wave 1: implantation (establishes X-inactivation methylation patterns); Wave 2: PGC specification (erases X-inactivation methylation for germline X reactivation)", "Wave 1: spermatogenesis only (erases oocyte-derived methylation); Wave 2: oocyte maturation only (erases sperm-derived methylation)"],
    answer: 1,
    explanation: "Two waves of epigenetic reprogramming: (1) Post-fertilization in the early embryo: the paternal genome is rapidly demethylated (active, TET3-mediated), while the maternal genome is passively demethylated over subsequent cleavage divisions; most imprinted DMRs are protected. Remethylation occurs around implantation, establishing somatic methylation patterns. (2) In migrating PGCs (E8.5-E13.5 in mice): almost complete demethylation including imprinted DMRs and most retrotransposons, erasing all parental epigenetic information. Sex-specific remethylation then occurs—prospermatogonia complete methylation before birth; oocytes complete methylation after birth during folliculogenesis."
  }
];

export default questions;
