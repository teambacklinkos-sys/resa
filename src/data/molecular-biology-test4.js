const questions = [
  // ===== CRISPR & GENOME EDITING (Q1–Q10) =====
  {
    id: 1,
    question: "In the CRISPR-Cas9 system, the PAM (Protospacer Adjacent Motif) sequence for Streptococcus pyogenes Cas9 is:",
    options: ["5'-NAG-3'", "5'-NGG-3'", "5'-NCC-3'", "5'-NNGRRT-3'"],
    answer: 1,
    explanation: "SpCas9 recognizes the PAM sequence 5'-NGG-3' on the non-target strand, immediately downstream of the protospacer. This PAM requirement prevents Cas9 from cleaving the CRISPR array in the bacterial genome (which lacks the PAM). Different Cas proteins recognize different PAMs — e.g., SaCas9 uses NNGRRT."
  },
  {
    id: 2,
    question: "Base editing using cytidine base editors (CBEs) achieves which conversion without double-strand breaks?",
    options: ["A-to-G", "C-to-T", "G-to-C", "T-to-A"],
    answer: 1,
    explanation: "CBEs fuse a catalytically impaired Cas9 (nickase) with a cytidine deaminase (e.g., APOBEC1) and a uracil glycosylase inhibitor (UGI). The deaminase converts cytosine to uracil on the non-edited strand; after DNA repair/replication, this results in a C·G to T·A conversion. Adenine base editors (ABEs) achieve A-to-G conversions."
  },
  {
    id: 3,
    question: "Prime editing differs from base editing in that it:",
    options: ["Uses homology-directed repair with a donor template", "Employs a prime editing guide RNA (pegRNA) encoding the desired edit and a reverse transcriptase fused to Cas9 nickase", "Requires double-strand breaks and NHEJ for all edits", "Can only make transitions, not transversions"],
    answer: 1,
    explanation: "Prime editing uses a Cas9 H840A nickase fused to an engineered M-MLV reverse transcriptase. The pegRNA contains both a spacer (for target recognition) and a 3' extension encoding the RT template with the desired edit plus a primer binding site. This enables all 12 point mutations, small insertions, and small deletions without DSBs or donor DNA."
  },
  {
    id: 4,
    question: "CRISPR interference (CRISPRi) for gene silencing uses:",
    options: ["Wild-type Cas9 to cut the promoter region", "Catalytically dead Cas9 (dCas9) targeted to the promoter or coding region to sterically block transcription", "Cas13 to degrade mRNA in the cytoplasm", "Cas12a with a truncated crRNA"],
    answer: 1,
    explanation: "CRISPRi uses nuclease-dead Cas9 (dCas9, with both D10A and H840A mutations) guided to a gene's promoter or early coding region. The dCas9-sgRNA complex physically blocks RNA polymerase binding or elongation. For enhanced repression, dCas9 can be fused to transcriptional repressor domains like KRAB."
  },
  {
    id: 5,
    question: "Cas12a (Cpf1) differs from Cas9 in that Cas12a:",
    options: ["Requires a tracrRNA for guide RNA maturation", "Generates staggered cuts with 5' overhangs and uses a T-rich PAM", "Produces blunt-ended cuts and uses an NGG PAM", "Is exclusively used for RNA targeting"],
    answer: 1,
    explanation: "Cas12a (Cpf1) has several distinct features: it recognizes a T-rich PAM (5'-TTTV-3') upstream of the protospacer, uses a single crRNA without tracrRNA, generates staggered cuts with 4-5 nt 5' overhangs (distal from the PAM), and can process its own crRNA array for multiplexed editing."
  },
  {
    id: 6,
    question: "Off-target effects of CRISPR-Cas9 can be detected genome-wide using:",
    options: ["Sanger sequencing of the target locus only", "GUIDE-seq, CIRCLE-seq, or DISCOVER-seq", "Standard karyotyping", "Microarray expression analysis alone"],
    answer: 1,
    explanation: "GUIDE-seq integrates short dsDNA tags at DSB sites genome-wide and identifies off-targets by sequencing. CIRCLE-seq performs in vitro Cas9 cleavage of circularized genomic DNA. DISCOVER-seq detects off-targets by ChIP-seq of the DNA repair factor MRE11 recruited to Cas9 cleavage sites. These methods provide unbiased genome-wide off-target profiling."
  },
  {
    id: 7,
    question: "Anti-CRISPR (Acr) proteins function by:",
    options: ["Enhancing Cas9 activity and specificity", "Inhibiting CRISPR-Cas systems through mechanisms such as blocking PAM recognition, preventing DNA binding, or inhibiting nuclease activity", "Promoting homology-directed repair over NHEJ", "Activating the SOS response in bacteria"],
    answer: 1,
    explanation: "Anti-CRISPR proteins are phage-encoded inhibitors of CRISPR-Cas systems. Different Acrs work by diverse mechanisms: AcrIIA4 mimics DNA to block SpCas9's PAM-interacting domain, AcrIIA2 occupies the PAM-binding cleft, AcrIIC1 blocks the HNH nuclease domain, and others prevent crRNA loading or complex assembly."
  },
  {
    id: 8,
    question: "Homology-directed repair (HDR) after CRISPR-Cas9 cleavage is favored over NHEJ when:",
    options: ["Cells are in G1 phase of the cell cycle", "Cells are in S/G2 phase and a donor template with homology arms is provided", "No donor template is present", "The cut is made with dCas9"],
    answer: 1,
    explanation: "HDR requires the presence of a homologous template (donor DNA with homology arms flanking the desired edit) and is primarily active in S and G2 phases when sister chromatids are available and HDR factors (RAD51, BRCA1/2) are expressed. NHEJ is active throughout the cell cycle and dominates in post-mitotic cells."
  },
  {
    id: 9,
    question: "Cas13 differs from Cas9 and Cas12 in that Cas13:",
    options: ["Targets double-stranded DNA exclusively", "Targets single-stranded RNA and exhibits collateral RNase activity", "Cannot be programmed with guide RNAs", "Requires a PAM sequence on the RNA target"],
    answer: 1,
    explanation: "Cas13 (formerly C2c2) is an RNA-guided RNA endonuclease with two HEPN domains. Upon target RNA recognition, it cleaves the target and also exhibits collateral (trans) cleavage of nearby ssRNAs. This collateral activity is exploited in diagnostics (SHERLOCK). Cas13 targets RNA using a PFS (protospacer flanking sequence) rather than a PAM."
  },
  {
    id: 10,
    question: "SHERLOCK and DETECTR are CRISPR-based diagnostic platforms that utilize:",
    options: ["Cas9 to cut DNA and detect fragments by gel electrophoresis", "Cas13 (SHERLOCK) and Cas12a (DETECTR) collateral cleavage activity on reporter molecules after target recognition", "dCas9 fused to fluorescent proteins for live-cell imaging", "Cas14 for protein detection"],
    answer: 1,
    explanation: "SHERLOCK (Specific High-sensitivity Enzymatic Reporter UnLOCKing) uses Cas13's collateral RNA cleavage: after recognizing target RNA (amplified by RPA+T7 transcription), activated Cas13 cleaves fluorescent RNA reporters. DETECTR uses Cas12a's collateral ssDNA cleavage similarly. Both achieve attomolar sensitivity for nucleic acid detection."
  },

  // ===== SIGNAL TRANSDUCTION & CELL SIGNALING (Q11–Q20) =====
  {
    id: 11,
    question: "Receptor tyrosine kinases (RTKs) are activated by:",
    options: ["Constitutive phosphorylation in the absence of ligand", "Ligand-induced dimerization followed by trans-autophosphorylation of tyrosine residues in the activation loop", "G-protein-mediated second messenger cascades", "Direct binding to transcription factors in the nucleus"],
    answer: 1,
    explanation: "RTKs (e.g., EGFR, PDGFR, FGFR) are activated when ligand binding induces receptor dimerization. The juxtaposed kinase domains then trans-phosphorylate specific tyrosine residues on each other's cytoplasmic tails. These phosphotyrosines serve as docking sites for SH2/PTB domain-containing signaling proteins (Grb2, PLCgamma, PI3K, etc.)."
  },
  {
    id: 12,
    question: "The Ras-MAPK signaling cascade proceeds in the order:",
    options: ["Ras → Raf → MEK → ERK", "Ras → ERK → MEK → Raf", "MEK → Ras → Raf → ERK", "ERK → Raf → Ras → MEK"],
    answer: 0,
    explanation: "The canonical Ras-MAPK cascade: RTK activation recruits Grb2-SOS, SOS acts as a GEF for Ras (GDP→GTP), active Ras recruits and activates Raf (MAPKKK), Raf phosphorylates and activates MEK1/2 (MAPKK), MEK phosphorylates and activates ERK1/2 (MAPK). ERK then phosphorylates cytoplasmic and nuclear targets including transcription factors."
  },
  {
    id: 13,
    question: "The JAK-STAT pathway is directly activated by:",
    options: ["Steroid hormones that diffuse through the membrane", "Cytokine receptors that lack intrinsic kinase activity but associate with Janus kinases", "G-protein-coupled receptors exclusively", "Ion channel receptors"],
    answer: 1,
    explanation: "Cytokine receptors (e.g., for IL-6, IFN-gamma, EPO) lack intrinsic kinase domains but are constitutively associated with JAKs (JAK1, JAK2, JAK3, TYK2). Ligand binding induces receptor dimerization, JAK trans-phosphorylation, receptor phosphorylation, STAT recruitment and phosphorylation, STAT dimerization, nuclear translocation, and target gene activation."
  },
  {
    id: 14,
    question: "The Wnt/beta-catenin (canonical Wnt) pathway is activated when:",
    options: ["Beta-catenin is phosphorylated by GSK-3beta and degraded via the proteasome", "Wnt ligand binds Frizzled receptor and LRP5/6, inhibiting the destruction complex and stabilizing beta-catenin", "Notch intracellular domain is released by gamma-secretase", "Hedgehog binds Patched receptor"],
    answer: 1,
    explanation: "Without Wnt, the destruction complex (APC, Axin, GSK-3beta, CK1) phosphorylates beta-catenin, targeting it for ubiquitination by beta-TrCP and proteasomal degradation. Wnt binding to Frizzled/LRP5/6 recruits Dishevelled, which disrupts the destruction complex. Stabilized beta-catenin accumulates, enters the nucleus, and activates TCF/LEF target genes."
  },
  {
    id: 15,
    question: "In the Notch signaling pathway, signal transduction requires:",
    options: ["Phosphorylation cascades involving multiple kinases", "Sequential proteolytic cleavages by ADAM metalloprotease (S2) and gamma-secretase (S3) releasing the Notch intracellular domain (NICD)", "Second messengers like cAMP and IP3", "Receptor internalization and lysosomal degradation only"],
    answer: 1,
    explanation: "Notch signaling involves: (1) S1 cleavage by furin during maturation, (2) ligand (Delta/Jagged) binding on adjacent cell triggers S2 cleavage by ADAM10/TACE metalloprotease in the extracellular domain, (3) S3 cleavage by gamma-secretase complex releases NICD, (4) NICD translocates to the nucleus, binds CSL/RBP-Jkappa, recruits MAML and co-activators."
  },
  {
    id: 16,
    question: "PI3K/Akt/mTOR signaling is negatively regulated by the tumor suppressor:",
    options: ["Rb", "p53 directly", "PTEN, which dephosphorylates PIP3 to PIP2", "BRCA1"],
    answer: 2,
    explanation: "PTEN (Phosphatase and Tensin Homolog) is a lipid phosphatase that dephosphorylates PIP3 (phosphatidylinositol-3,4,5-trisphosphate) back to PIP2, directly opposing PI3K activity. Loss of PTEN leads to constitutive Akt activation, promoting cell survival, growth, and proliferation. PTEN is one of the most frequently mutated tumor suppressors in human cancers."
  },
  {
    id: 17,
    question: "Hedgehog (Hh) signaling in vertebrates involves which receptor pair?",
    options: ["Frizzled and LRP5/6", "Patched (PTCH1) and Smoothened (SMO)", "Notch and Delta", "EGFR and HER2"],
    answer: 1,
    explanation: "In the absence of Hh ligand, Patched (PTCH1) inhibits Smoothened (SMO). When Sonic/Indian/Desert Hedgehog binds PTCH1, PTCH1 inhibition of SMO is relieved. Active SMO signals through the primary cilium, inhibiting the processing of Gli transcription factors into repressors, allowing full-length Gli activators to drive target gene expression."
  },
  {
    id: 18,
    question: "Second messenger cAMP is produced by adenylyl cyclase in response to:",
    options: ["Direct activation by receptor tyrosine kinases", "Stimulatory G-protein (Gs-alpha) activation following GPCR ligand binding", "Calcium influx through voltage-gated channels", "mTOR kinase signaling"],
    answer: 1,
    explanation: "GPCRs coupled to Gs activate adenylyl cyclase via the Gs-alpha subunit (which binds GTP after receptor activation). Adenylyl cyclase converts ATP to cAMP, which activates protein kinase A (PKA). PKA phosphorylates CREB and other targets. cAMP is degraded by phosphodiesterases (PDEs). Gi-coupled receptors inhibit adenylyl cyclase."
  },
  {
    id: 19,
    question: "NF-kappaB signaling is activated when:",
    options: ["NF-kappaB is constitutively active in the nucleus", "IKK complex phosphorylates IkappaB-alpha, leading to its ubiquitination and degradation, freeing NF-kappaB to translocate to the nucleus", "NF-kappaB is directly phosphorylated by JAK kinases", "Beta-catenin displaces IkappaB from NF-kappaB"],
    answer: 1,
    explanation: "In the canonical pathway: TNF-alpha/IL-1 signaling activates the IKK complex (IKK-alpha, IKK-beta, NEMO). IKK phosphorylates IkappaB-alpha on Ser32/36, targeting it for K48-linked polyubiquitination by SCF-betaTrCP and 26S proteasomal degradation. Freed NF-kappaB (p65/p50) dimers enter the nucleus to activate pro-inflammatory and anti-apoptotic genes."
  },
  {
    id: 20,
    question: "Scaffold proteins in signaling pathways function by:",
    options: ["Directly phosphorylating downstream kinases", "Organizing multiple signaling components into complexes to enhance specificity and efficiency of signal transduction", "Serving as transcription factors in the nucleus", "Degrading activated receptors"],
    answer: 1,
    explanation: "Scaffold proteins (e.g., KSR for MAPK pathway, AKAP for PKA, Axin for Wnt) physically tether multiple components of a signaling cascade. This co-localization increases local concentration of pathway components, enhances signal transmission speed, prevents cross-talk between parallel pathways, and can determine tissue-specific signaling outcomes."
  },

  // ===== PROTEIN STRUCTURE, FOLDING & MODIFICATIONS (Q21–Q30) =====
  {
    id: 21,
    question: "Chaperonins such as GroEL/GroES assist protein folding by:",
    options: ["Directly catalyzing peptide bond formation", "Providing an enclosed chamber where unfolded proteins can fold in isolation, preventing aggregation", "Cleaving misfolded proteins into smaller fragments", "Adding ubiquitin chains to misfolded proteins"],
    answer: 1,
    explanation: "GroEL is a barrel-shaped complex of 14 subunits forming two back-to-back rings. Unfolded proteins bind to the hydrophobic apical domains of one ring. GroES caps the ring in an ATP-dependent manner, creating an enclosed Anfinsen cage. Inside this cavity, the substrate folds in isolation without risk of aggregation. ATP hydrolysis drives the cycle."
  },
  {
    id: 22,
    question: "The unfolded protein response (UPR) is triggered when:",
    options: ["Proteins fold correctly in the cytoplasm", "Misfolded proteins accumulate in the endoplasmic reticulum, activating sensors IRE1, PERK, and ATF6", "Ribosomes stall during translation elongation", "Proteasomes become hyperactive"],
    answer: 1,
    explanation: "ER stress from accumulation of misfolded proteins activates three UPR sensors: IRE1 (splices XBP1 mRNA, activates RIDD), PERK (phosphorylates eIF2-alpha to reduce global translation while selectively translating ATF4), and ATF6 (translocates to Golgi, cleaved by S1P/S2P proteases to release active ATF6 transcription factor). Together they restore ER homeostasis or trigger apoptosis."
  },
  {
    id: 23,
    question: "SUMOylation of proteins involves:",
    options: ["Attachment of ubiquitin chains for proteasomal degradation", "Covalent conjugation of Small Ubiquitin-like Modifier (SUMO) proteins to lysine residues, typically regulating nuclear processes", "Phosphorylation of serine/threonine residues", "Attachment of fatty acid chains for membrane anchoring"],
    answer: 1,
    explanation: "SUMOylation uses an E1 (SAE1/SAE2), E2 (Ubc9), and E3 ligase cascade to conjugate SUMO1/2/3 to target lysines (often in psiKxE motifs). Unlike ubiquitin, SUMO typically does not target proteins for degradation. Instead, it regulates nuclear transport, transcription, DNA repair, chromatin organization, and PML nuclear body formation."
  },
  {
    id: 24,
    question: "N-linked glycosylation of proteins occurs at:",
    options: ["Serine or threonine residues in the cytoplasm", "Asparagine residues in the consensus sequence Asn-X-Ser/Thr (X is not Pro) in the ER lumen", "Lysine residues in the nucleus", "Cysteine residues in the Golgi apparatus"],
    answer: 1,
    explanation: "N-linked glycosylation begins co-translationally in the ER. Oligosaccharyltransferase (OST) transfers a preassembled Glc3Man9GlcNAc2 oligosaccharide from dolichol-PP to the amide nitrogen of Asn in the sequon Asn-X-Ser/Thr. Proline at X position prevents glycosylation. The glycan is then trimmed and modified in the ER and Golgi."
  },
  {
    id: 25,
    question: "Prion diseases (transmissible spongiform encephalopathies) are caused by:",
    options: ["A conventional RNA virus", "A misfolded form (PrPSc) of the normal cellular prion protein (PrPC) that templates conversion of PrPC to PrPSc", "Bacterial toxins that damage neurons", "Autoantibodies against myelin"],
    answer: 1,
    explanation: "PrPC is a normal GPI-anchored cell surface glycoprotein rich in alpha-helices. In prion diseases, PrPC misfolds into the beta-sheet-rich PrPSc conformation. PrPSc acts as a template, inducing conformational conversion of PrPC to PrPSc in an autocatalytic process. PrPSc aggregates are resistant to proteases and form amyloid fibrils, causing neurodegeneration."
  },
  {
    id: 26,
    question: "The proteasome degrades proteins that are tagged with:",
    options: ["Mannose-6-phosphate", "K48-linked polyubiquitin chains (minimum 4 ubiquitins)", "Biotin", "SUMO-1 exclusively"],
    answer: 1,
    explanation: "The 26S proteasome consists of a 20S catalytic core (with trypsin-like, chymotrypsin-like, and caspase-like activities) and 19S regulatory caps. Proteins destined for degradation are tagged with K48-linked polyubiquitin chains by E1-E2-E3 enzyme cascades. The 19S cap recognizes polyubiquitin, unfolds the substrate, removes ubiquitin (by DUBs), and threads the protein into the 20S core."
  },
  {
    id: 27,
    question: "Intrinsically disordered proteins (IDPs) are characterized by:",
    options: ["Having a rigid, well-defined tertiary structure under all conditions", "Lacking stable secondary/tertiary structure under physiological conditions but often folding upon binding to partners", "Being exclusively found in prokaryotes", "Always being targeted for immediate degradation"],
    answer: 1,
    explanation: "IDPs/intrinsically disordered regions (IDRs) lack stable 3D structure in isolation, existing as dynamic conformational ensembles. They are enriched in charged and polar residues, depleted in hydrophobic residues. Many undergo coupled folding and binding. IDPs are prevalent in signaling, transcription, and phase separation (liquid-liquid phase separation forming membraneless organelles)."
  },
  {
    id: 28,
    question: "Liquid-liquid phase separation (LLPS) in cells is driven by:",
    options: ["Covalent cross-linking of proteins", "Multivalent weak interactions among intrinsically disordered regions and/or modular domains, forming membraneless condensates", "ATP-dependent active transport exclusively", "Hydrophobic collapse into insoluble aggregates"],
    answer: 1,
    explanation: "LLPS produces membraneless organelles (stress granules, P-bodies, nucleolus, nuclear speckles) through multivalent interactions: pi-pi, cation-pi, charge-charge, and hydrophobic contacts among IDRs and modular domains (SH3-PRM, etc.). Post-translational modifications, RNA, and concentration modulate phase behavior. Aberrant phase transitions are linked to neurodegeneration."
  },
  {
    id: 29,
    question: "Autophagy-mediated protein degradation differs from proteasomal degradation in that autophagy:",
    options: ["Degrades only soluble, ubiquitinated single proteins", "Sequesters bulk cytoplasmic material including organelles in autophagosomes that fuse with lysosomes for degradation", "Occurs exclusively in the nucleus", "Does not require any ubiquitin-like proteins"],
    answer: 1,
    explanation: "Macroautophagy involves: (1) initiation by ULK1 complex, (2) nucleation by Beclin-1/VPS34 PI3K complex, (3) elongation using two ubiquitin-like conjugation systems (ATG12-ATG5-ATG16L1 and LC3/ATG8 lipidation), (4) formation of double-membrane autophagosomes engulfing cargo, (5) fusion with lysosomes forming autolysosomes. Selective autophagy receptors (p62, NBR1) link ubiquitinated cargo to LC3."
  },
  {
    id: 30,
    question: "Palmitoylation of proteins:",
    options: ["Is an irreversible modification like myristoylation", "Is a reversible lipid modification involving attachment of palmitate to cysteine residues via a thioester bond, regulating membrane association", "Involves attachment of a GPI anchor", "Targets proteins for nuclear import"],
    answer: 1,
    explanation: "S-palmitoylation is the only reversible lipid modification. DHHC family palmitoyl acyltransferases attach palmitate (C16:0) to cysteine residues via a thioester bond. Acyl protein thioesterases (APT1/2) remove it. This dynamic cycling regulates protein membrane association, trafficking, and signaling. Examples include Ras, Src family kinases, and GPCRs."
  },

  // ===== MOLECULAR TECHNIQUES & BIOTECHNOLOGY (Q31–Q40) =====
  {
    id: 31,
    question: "Chromatin immunoprecipitation followed by sequencing (ChIP-seq) is used to:",
    options: ["Sequence the entire genome de novo", "Identify genome-wide binding sites of transcription factors or histone modifications", "Measure mRNA expression levels", "Detect DNA methylation patterns"],
    answer: 1,
    explanation: "ChIP-seq: (1) crosslink proteins to DNA (formaldehyde), (2) sonicate chromatin to 200-500 bp fragments, (3) immunoprecipitate with antibody against the protein/modification of interest, (4) reverse crosslinks, purify DNA, (5) prepare sequencing library and sequence. Peak calling algorithms identify enriched regions. Controls include input DNA and IgG ChIP."
  },
  {
    id: 32,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) identifies:",
    options: ["Protein-protein interactions genome-wide", "Open chromatin regions by using Tn5 transposase to insert sequencing adapters into accessible DNA", "DNA methylation at CpG islands", "RNA secondary structures in vivo"],
    answer: 1,
    explanation: "ATAC-seq uses hyperactive Tn5 transposase loaded with sequencing adapters. Tn5 preferentially inserts adapters into nucleosome-free, accessible chromatin regions ('tagmentation'). After purification and PCR amplification, sequencing reveals open chromatin. Advantages over DNase-seq/FAIRE-seq include requiring very few cells (500-50,000) and a simple, rapid protocol."
  },
  {
    id: 33,
    question: "Hi-C is a chromosome conformation capture technique used to:",
    options: ["Identify single nucleotide polymorphisms", "Map genome-wide chromatin interactions and three-dimensional genome organization", "Measure gene expression at single-cell level", "Detect copy number variations"],
    answer: 1,
    explanation: "Hi-C captures all pairwise chromatin interactions genome-wide: (1) crosslink, (2) digest with restriction enzyme, (3) fill in with biotinylated nucleotides and ligate proximally, (4) purify biotin-labeled ligation junctions, (5) sequence paired-end. Contact frequency maps reveal compartments (A/B), TADs, chromatin loops, and can assist genome assembly."
  },
  {
    id: 34,
    question: "Single-cell RNA sequencing (scRNA-seq) provides information about:",
    options: ["Average gene expression across millions of cells", "Transcriptome profiles of individual cells, revealing cellular heterogeneity within tissues", "DNA mutations in single cells", "Protein levels in individual cells"],
    answer: 1,
    explanation: "scRNA-seq captures mRNA from individual cells (via droplet-based methods like 10x Genomics or plate-based like Smart-seq2), reverse transcribes, amplifies, and sequences. Analysis reveals distinct cell types/states through clustering, trajectory inference shows differentiation paths, and differential expression identifies marker genes. Key for understanding tissue heterogeneity."
  },
  {
    id: 35,
    question: "Ribosome profiling (Ribo-seq) measures:",
    options: ["Ribosome biogenesis rates", "Genome-wide translation by deep sequencing of ribosome-protected mRNA fragments", "Ribosomal RNA modifications", "Ribosome-associated protein interactions"],
    answer: 1,
    explanation: "Ribo-seq involves: (1) flash-freeze cells to arrest ribosomes, (2) RNase digestion of unprotected mRNA, (3) isolate monosome-protected footprints (~28-30 nt), (4) prepare library and sequence. This provides a snapshot of translation: ribosome density on mRNAs, identification of translated ORFs (including uORFs and non-canonical), translation efficiency, and ribosome pausing sites."
  },
  {
    id: 36,
    question: "Nanopore sequencing (Oxford Nanopore) works by:",
    options: ["Sequencing by synthesis using fluorescent nucleotides", "Measuring changes in ionic current as single-stranded DNA/RNA passes through a protein nanopore", "Using pH changes during nucleotide incorporation", "Detecting fluorescence from zero-mode waveguides"],
    answer: 1,
    explanation: "Oxford Nanopore uses a protein pore (e.g., CsgG-based R9/R10) embedded in a synthetic membrane. An applied voltage drives ionic current through the pore. As a DNA/RNA strand is ratcheted through by a motor protein, each ~5-mer in the pore produces a characteristic current disruption. Real-time base calling converts current signals to sequence. Reads can exceed 1 Mb."
  },
  {
    id: 37,
    question: "Spatial transcriptomics techniques such as Visium and MERFISH enable:",
    options: ["Sequencing of circulating tumor DNA in blood", "Mapping gene expression to specific locations within intact tissue sections", "Whole-genome bisulfite sequencing", "Measuring telomere length in single cells"],
    answer: 1,
    explanation: "Spatial transcriptomics preserves spatial context of gene expression. Visium (10x Genomics) uses barcoded oligonucleotide arrays on glass slides to capture mRNA from tissue sections. MERFISH uses combinatorial FISH with error-robust barcoding to image hundreds to thousands of RNA species in situ. These reveal how gene expression varies across tissue architecture."
  },
  {
    id: 38,
    question: "CUT&RUN (Cleavage Under Targets and Release Using Nuclease) improves upon ChIP-seq by:",
    options: ["Requiring more starting material and longer protocols", "Using protein A-MNase fusion targeted by antibodies to cleave DNA near the binding site in situ, requiring fewer cells and producing lower background", "Eliminating the need for antibodies", "Using formaldehyde crosslinking and sonication"],
    answer: 1,
    explanation: "CUT&RUN: (1) bind cells to ConA beads, (2) incubate with primary antibody, (3) add pA-MNase which binds the antibody, (4) activate MNase with Ca2+ — it cleaves DNA flanking the target, (5) released fragments diffuse out and are collected. Advantages: works with as few as 100 cells, very low background (no crosslinking or sonication), uses less sequencing."
  },
  {
    id: 39,
    question: "Proximity ligation assay (PLA) detects:",
    options: ["DNA-DNA interactions genome-wide", "Protein-protein interactions or modifications in situ using antibody-conjugated oligonucleotides that ligate when in close proximity", "mRNA splicing variants", "Chromosome translocations"],
    answer: 1,
    explanation: "In PLA, two primary antibodies (against two proteins of interest) are detected by secondary antibodies conjugated to short DNA oligonucleotides (PLA probes). When the two proteins are within ~40 nm, the oligos can be ligated by a connector oligonucleotide. Rolling circle amplification then generates a fluorescent signal dot at the interaction site. Enables in situ detection of endogenous protein interactions."
  },
  {
    id: 40,
    question: "Cryo-electron microscopy (cryo-EM) determines protein structures by:",
    options: ["Crystallizing proteins and diffracting X-rays", "Flash-freezing proteins in vitreous ice and imaging with an electron beam, then computationally reconstructing 3D structures from thousands of particle images", "Using nuclear magnetic resonance in solution", "Staining proteins with heavy metals and imaging at room temperature"],
    answer: 1,
    explanation: "Single-particle cryo-EM: proteins are applied to grids and plunge-frozen in liquid ethane to form vitreous ice. Thousands of 2D projection images of randomly oriented particles are collected by TEM. Computational methods classify particles, determine orientations, and reconstruct 3D density maps. Near-atomic resolution (<2 A) is now achievable. The 'resolution revolution' was recognized by the 2017 Nobel Prize."
  },

  // ===== RNA BIOLOGY & REGULATORY RNAs (Q41–Q50) =====
  {
    id: 41,
    question: "m6A (N6-methyladenosine) RNA modification is:",
    options: ["A rare modification found only in rRNA", "The most abundant internal modification in eukaryotic mRNA, installed by METTL3/METTL14 writers and read by YTHDF/YTHDC readers", "A modification that permanently stabilizes all mRNAs", "Found exclusively at the 5' cap of mRNA"],
    answer: 1,
    explanation: "m6A is deposited by the METTL3-METTL14-WTAP writer complex at DRACH motifs (D=A/G/U, R=A/G, H=A/C/U), removed by FTO and ALKBH5 erasers, and recognized by YTH domain readers. YTHDF2 promotes mRNA decay, YTHDF1 enhances translation, YTHDC1 regulates splicing and export. m6A regulates stem cell differentiation, circadian rhythms, and is dysregulated in cancers."
  },
  {
    id: 42,
    question: "Circular RNAs (circRNAs) are generated by:",
    options: ["Standard mRNA processing with 5' capping and polyadenylation", "Back-splicing, where a downstream splice donor joins to an upstream splice acceptor forming a covalently closed circular molecule", "Reverse transcriptase activity in the nucleus", "Endonucleolytic cleavage of linear transcripts"],
    answer: 1,
    explanation: "CircRNAs form through back-splicing: the 5' splice site of a downstream exon joins to the 3' splice site of an upstream exon, creating a 3'-5' phosphodiester bond. This is promoted by flanking inverted complementary sequences (especially Alu elements) and RNA-binding proteins (QKI, MBL). CircRNAs lack 5' caps and poly-A tails, making them resistant to exonucleases. Some function as miRNA sponges (e.g., CDR1as/ciRS-7)."
  },
  {
    id: 43,
    question: "R-loops are three-stranded nucleic acid structures consisting of:",
    options: ["Three DNA strands forming a triple helix", "An RNA:DNA hybrid and a displaced single-stranded DNA, formed during transcription", "Two RNA molecules paired with each other", "A DNA strand looped around histone proteins"],
    answer: 1,
    explanation: "R-loops form when nascent RNA re-anneals with the template DNA strand behind RNA polymerase, displacing the non-template strand as ssDNA. They form naturally at CpG island promoters, G-rich pause sites, and immunoglobulin switch regions (for class switch recombination). Persistent/unscheduled R-loops cause genome instability — they are resolved by RNase H1/H2, helicases (SETX, DDX), and topoisomerases."
  },
  {
    id: 44,
    question: "The piRNA (PIWI-interacting RNA) pathway functions primarily in:",
    options: ["Somatic cell mRNA regulation", "Transposon silencing in the germline through the ping-pong amplification cycle", "Ribosomal RNA processing", "tRNA aminoacylation"],
    answer: 1,
    explanation: "piRNAs (24-31 nt) associate with PIWI-clade Argonaute proteins (MIWI, MILI, MIWI2 in mice) to silence transposons in germ cells. The ping-pong cycle: sense piRNAs (from transposon mRNAs) guide MILI to cleave antisense transcripts, generating antisense piRNAs that guide MIWI2 to cleave sense transcripts. MIWI2 also directs DNA methylation of transposon loci for transcriptional silencing."
  },
  {
    id: 45,
    question: "Alternative polyadenylation (APA) of mRNA results in:",
    options: ["Changes in the coding sequence of the protein", "Different 3' UTR lengths from the same gene, affecting mRNA stability, localization, and translation", "Removal of all introns from pre-mRNA", "Addition of a 5' cap structure"],
    answer: 1,
    explanation: "APA selects different polyadenylation signals (AAUAAA variants) within the same pre-mRNA. Proximal PAS usage generates shorter 3' UTRs (common in proliferating cells, cancer), while distal PAS usage generates longer 3' UTRs (common in differentiated cells). Longer 3' UTRs contain more miRNA binding sites and RBP binding motifs, generally resulting in lower expression."
  },
  {
    id: 46,
    question: "RNA editing by ADAR (Adenosine Deaminase Acting on RNA) enzymes converts:",
    options: ["Cytidine to uridine in mRNA", "Adenosine to inosine in double-stranded RNA regions, where inosine is read as guanosine by the translation machinery", "Guanosine to adenosine", "Uridine to cytidine"],
    answer: 1,
    explanation: "ADAR1 and ADAR2 deaminate adenosine to inosine (A-to-I editing) in dsRNA substrates. Inosine base-pairs with cytidine and is decoded as guanosine. Editing can recode proteins (e.g., GluA2 Q/R site — essential for Ca2+ impermeability), alter splicing, change miRNA targeting, and mark self-dsRNA to prevent innate immune activation by MDA5. ADAR1 mutations cause Aicardi-Goutieres syndrome."
  },
  {
    id: 47,
    question: "Riboswitches are regulatory RNA elements that:",
    options: ["Require protein cofactors for all functions", "Are structured RNA domains in mRNA (typically 5' UTR) that directly bind small molecule ligands and undergo conformational changes to regulate gene expression", "Are found exclusively in eukaryotes", "Function only at the post-translational level"],
    answer: 1,
    explanation: "Riboswitches consist of an aptamer domain (binds specific metabolite: TPP, SAM, FMN, glycine, etc.) and an expression platform (controls gene expression). Ligand binding induces conformational changes that affect transcription termination, translation initiation, or splicing. They are widespread in bacteria and some eukaryotes (TPP riboswitch). They regulate metabolic genes without protein factors."
  },
  {
    id: 48,
    question: "Nonsense-mediated mRNA decay (NMD) is triggered when:",
    options: ["A premature termination codon (PTC) is located >50-55 nt upstream of an exon-exon junction, with the exon junction complex (EJC) serving as a mark", "The poly-A tail is too long", "The 5' cap is removed during normal translation", "The mRNA lacks any stop codons"],
    answer: 0,
    explanation: "During the pioneer round of translation, ribosomes normally displace EJCs deposited 20-24 nt upstream of exon-exon junctions during splicing. If a PTC is >50-55 nt upstream of an EJC, the ribosome terminates before removing that EJC. The remaining EJC recruits UPF1, which interacts with UPF2/UPF3b on the EJC, triggering UPF1 phosphorylation by SMG1 and subsequent mRNA degradation."
  },
  {
    id: 49,
    question: "tRNA modifications such as pseudouridine and dihydrouridine contribute to:",
    options: ["Increasing the molecular weight of tRNA without functional significance", "Structural stability, proper folding, codon recognition fidelity, and translational efficiency of tRNAs", "Converting tRNAs into mRNAs", "Preventing tRNA from being aminoacylated"],
    answer: 1,
    explanation: "tRNAs are the most heavily modified RNA species (~17% of residues). Pseudouridine (Psi) enhances base stacking and structural rigidity. Dihydrouridine (D) increases backbone flexibility. Anticodon modifications (inosine at wobble position, t6A, ms2i6A) are critical for accurate codon-anticodon pairing. Modifications at position 34 (wobble) and 37 (3' of anticodon) directly influence translational fidelity."
  },
  {
    id: 50,
    question: "Translational regulation by upstream open reading frames (uORFs) typically:",
    options: ["Enhances translation of the main downstream ORF under all conditions", "Inhibits translation of the main ORF by causing ribosomes to dissociate or reinitiate, but can allow selective translation under stress (e.g., ATF4 via eIF2-alpha phosphorylation)", "Has no effect on downstream translation", "Functions only in prokaryotic mRNAs"],
    answer: 1,
    explanation: "uORFs are short ORFs in the 5' UTR that are translated before the main CDS. After translating a uORF, most ribosomes dissociate, reducing main ORF translation. Under stress, eIF2-alpha phosphorylation reduces ternary complex levels; scanning 40S subunits bypass inhibitory uORFs and reinitiate at the main AUG. Classic example: GCN4 (yeast)/ATF4 (mammals) has multiple uORFs enabling stress-responsive translational upregulation."
  }
];

export default questions;