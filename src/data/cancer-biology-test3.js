const questions = [
  // ===== HALLMARKS OF CANCER (Q1–Q10) =====
  {
    id: 1,
    question: "The original hallmarks of cancer (Hanahan and Weinberg, 2000) include all of the following EXCEPT:",
    options: ["Self-sufficiency in growth signals", "Insensitivity to anti-growth signals", "Deregulated cellular metabolism", "Limitless replicative potential"],
    answer: 2,
    explanation: "The original six hallmarks (2000) were: (1) self-sufficiency in growth signals, (2) insensitivity to anti-growth signals, (3) evading apoptosis, (4) limitless replicative potential, (5) sustained angiogenesis, and (6) tissue invasion and metastasis. Deregulated cellular metabolism was added as an emerging hallmark in the 2011 update, along with avoiding immune destruction, genome instability, and tumor-promoting inflammation."
  },
  {
    id: 2,
    question: "The 2011 updated hallmarks added which two emerging hallmarks?",
    options: ["Angiogenesis and apoptosis evasion", "Deregulating cellular energetics and avoiding immune destruction", "Invasion and metastasis", "Growth signal self-sufficiency and replicative immortality"],
    answer: 1,
    explanation: "Hanahan and Weinberg's 2011 update added two emerging hallmarks: (1) reprogramming energy metabolism (Warburg effect, metabolic rewiring), and (2) avoiding immune destruction (immune editing, checkpoint exploitation). They also described two enabling characteristics: genome instability/mutation and tumor-promoting inflammation. The 2022 update further added senescent cells, polymorphic microbiomes, nonmutational epigenetic reprogramming, and unlocking phenotypic plasticity."
  },
  {
    id: 3,
    question: "Self-sufficiency in growth signals is achieved by cancer cells through:",
    options: ["Only paracrine signaling from stromal cells", "Autocrine growth factor production, constitutive receptor activation, or downstream signaling pathway mutations", "Increased dependence on external growth factors", "Reduced receptor expression"],
    answer: 1,
    explanation: "Cancer cells achieve growth signal autonomy through: (1) autocrine signaling (producing their own growth factors, e.g., PDGF in gliomas), (2) receptor overexpression/amplification (EGFR, HER2 — increasing sensitivity to ambient growth factors), (3) constitutive receptor activation (EGFRvIII deletion mutant), (4) downstream pathway activation (RAS, RAF, PI3K mutations), and (5) disrupted negative feedback (NF1 loss releasing RAS from GAP regulation)."
  },
  {
    id: 4,
    question: "Enabling replicative immortality in cancer cells is primarily achieved through:",
    options: ["Increasing cell size", "Telomerase reactivation or activation of the ALT (alternative lengthening of telomeres) pathway", "Arresting in G0 phase", "Reducing the mutation rate"],
    answer: 1,
    explanation: "Normal somatic cells have limited replicative capacity (Hayflick limit, ~50-70 divisions) due to progressive telomere shortening. Cancer cells overcome this by: (1) telomerase reactivation (~85-90% of cancers reactivate TERT via promoter mutations, amplification, or epigenetic changes), or (2) ALT pathway (~10-15%, using recombination-based telomere maintenance, common in sarcomas and gliomas). Immortalization is essential for sustained tumor growth and is often an early event in carcinogenesis."
  },
  {
    id: 5,
    question: "Genomic instability as an enabling characteristic of cancer refers to:",
    options: ["Stable, unchanged genomes in tumor cells", "Increased rates of mutation, chromosomal rearrangement, and epigenetic alterations that accelerate hallmark acquisition", "Only point mutations", "Only germline mutations"],
    answer: 1,
    explanation: "Genomic instability accelerates the acquisition of cancer hallmarks by increasing the rate of heritable alterations. Forms include: (1) nucleotide-level instability (defective DNA repair — MMR, NER, HRR), (2) microsatellite instability (MMR deficiency), (3) chromosomal instability (CIN — abnormal chromosome numbers and structure due to mitotic checkpoint defects), and (4) epigenomic instability (aberrant DNA methylation and histone modifications). Genome instability is both a consequence and driver of cancer evolution."
  },
  {
    id: 6,
    question: "Tumor-promoting inflammation as an enabling characteristic contributes to cancer through:",
    options: ["Only anti-tumor immune responses", "Supplying growth factors, survival signals, pro-angiogenic factors, EMT inducers, and extracellular matrix-modifying enzymes to the tumor", "Exclusively inhibiting tumor growth", "Having no effect on tumor progression"],
    answer: 1,
    explanation: "Chronic inflammation promotes cancer by: (1) generating ROS/RNS causing DNA damage and mutations, (2) supplying growth factors (EGF, PDGF) and survival factors (NF-κB activation), (3) producing pro-angiogenic mediators (VEGF, IL-8), (4) secreting ECM-degrading enzymes (MMPs), (5) inducing EMT (TNF-α, IL-6/STAT3), and (6) creating an immunosuppressive environment. Examples include H. pylori→gastric cancer, HBV/HCV→HCC, IBD→colorectal cancer, and asbestos→mesothelioma."
  },
  {
    id: 7,
    question: "Phenotypic plasticity as a hallmark (2022 update) refers to:",
    options: ["Fixed differentiation state of cancer cells", "The ability of cancer cells to reversibly switch between differentiation states, including dedifferentiation and transdifferentiation", "Only genetic heterogeneity", "Only EMT"],
    answer: 1,
    explanation: "Phenotypic plasticity (2022 hallmark) describes cancer cells' ability to dynamically shift between differentiation states without genetic changes. Examples include: EMT/MET transitions, dedifferentiation to stem-like states (enhancing tumor-initiating capacity), transdifferentiation (e.g., neuroendocrine transformation in prostate cancer under androgen deprivation), and lineage switching in drug resistance. This plasticity complicates treatment as cells can adapt to therapeutic pressures."
  },
  {
    id: 8,
    question: "Non-mutational epigenetic reprogramming (2022 hallmark) in cancer involves:",
    options: ["Only DNA mutations", "Heritable changes in gene expression through DNA methylation, histone modifications, and chromatin remodeling without DNA sequence alterations", "Only genetic amplification", "Only chromosomal translocations"],
    answer: 1,
    explanation: "This hallmark recognizes that epigenetic changes (DNA methylation, histone modifications, chromatin remodeling, non-coding RNA) can independently drive hallmark capabilities without underlying genetic mutations. Examples include: promoter hypermethylation silencing tumor suppressors (CDKN2A, MLH1, BRCA1), global hypomethylation causing genomic instability, and enhancer reprogramming creating super-enhancers driving oncogene expression."
  },
  {
    id: 9,
    question: "Senescent cells in the tumor microenvironment (2022 hallmark) can paradoxically promote cancer through:",
    options: ["Undergoing apoptosis", "The senescence-associated secretory phenotype (SASP), which includes pro-inflammatory cytokines, growth factors, and MMPs", "Competing with tumor cells for nutrients", "Inducing immune-mediated tumor clearance only"],
    answer: 1,
    explanation: "Senescent cells (irreversibly growth-arrested) accumulate in aging tissues and tumors. While senescence is initially tumor-suppressive (halting proliferation), the SASP includes IL-6, IL-8, MCP-1, VEGF, MMPs, and other factors that promote: inflammation, angiogenesis, EMT, stemness, and immunosuppression in neighboring cells. Therapy-induced senescence (TIS) after chemotherapy/radiation can create a pro-tumorigenic paracrine environment. Senolytics (drugs clearing senescent cells) are being explored."
  },
  {
    id: 10,
    question: "The polymorphic microbiome (2022 hallmark) influences cancer development through:",
    options: ["Having no effect on cancer", "Modulating inflammation, metabolism, immune responses, and directly producing genotoxic metabolites", "Only affecting gut cancers", "Only providing beneficial effects"],
    answer: 1,
    explanation: "Microbiome influence on cancer includes: (1) direct genotoxicity (colibactin from E. coli causes DNA crosslinks, CagA from H. pylori activates oncogenic signaling), (2) modulating inflammation (dysbiosis→chronic inflammation→cancer), (3) metabolite production (short-chain fatty acids can be protective; secondary bile acids promote CRC), (4) immune modulation (affecting checkpoint inhibitor response — Akkermansia correlates with anti-PD-1 efficacy), and (5) drug metabolism affecting chemotherapy efficacy/toxicity."
  },

  // ===== CANCER STEM CELLS & CLONAL EVOLUTION (Q11–Q20) =====
  {
    id: 11,
    question: "The cancer stem cell (CSC) hypothesis proposes that:",
    options: ["All tumor cells have equal tumorigenic potential", "A small subpopulation of self-renewing cells drives tumor initiation, maintenance, heterogeneity, and recurrence", "CSCs are identical to normal stem cells", "CSCs are always CD133+"],
    answer: 1,
    explanation: "The CSC model proposes that tumors are hierarchically organized with a self-renewing CSC population at the apex that gives rise to differentiated, non-tumorigenic progeny constituting the tumor bulk. CSCs are relatively resistant to chemotherapy/radiation (quiescence, drug efflux, enhanced DNA repair), potentially explaining treatment resistance and relapse. CSC markers vary by tumor type (CD44+/CD24- in breast, LGR5+ in CRC, CD133+ in glioblastoma)."
  },
  {
    id: 12,
    question: "Wnt/beta-catenin signaling is important in cancer stem cells because it:",
    options: ["Promotes differentiation exclusively", "Maintains stemness and self-renewal capacity in both normal and cancer stem cells", "Only functions in embryonic development", "Induces apoptosis in CSCs"],
    answer: 1,
    explanation: "Wnt/beta-catenin signaling is a master regulator of stemness in many tissues (intestinal, mammary, hematopoietic). Active Wnt stabilizes beta-catenin, which activates TCF/LEF target genes (MYC, cyclin D1, LGR5, AXIN2) promoting self-renewal, proliferation, and stem cell maintenance. Aberrant Wnt activation (APC loss in CRC, beta-catenin mutations in liver cancer) drives CSC expansion. Wnt pathway inhibitors are in development for CSC-targeted therapy."
  },
  {
    id: 13,
    question: "The Notch signaling pathway in cancer stem cells functions to:",
    options: ["Only promote apoptosis", "Regulate cell fate decisions, self-renewal, and differentiation balance in a context-dependent manner", "Only inhibit proliferation", "Only promote angiogenesis"],
    answer: 1,
    explanation: "Notch signaling is a juxtacrine pathway where membrane-bound ligands (Jagged, Delta-like) on one cell activate Notch receptors on adjacent cells, releasing the Notch intracellular domain (NICD) that translocates to the nucleus. Notch can be oncogenic (T-ALL, breast CSC maintenance) or tumor-suppressive (skin, hepatocellular carcinoma), depending on context. Gamma-secretase inhibitors (blocking Notch cleavage) are in clinical trials for Notch-dependent cancers."
  },
  {
    id: 14,
    question: "Clonal evolution in cancer describes:",
    options: ["Uniform tumor cell populations", "Sequential acquisition of genetic and epigenetic alterations giving rise to genetically diverse subclones within a tumor", "Only horizontal gene transfer between tumor cells", "Stable tumor genomes throughout disease"],
    answer: 1,
    explanation: "Peter Nowell's clonal evolution model (1976) proposes that cancers arise from a single cell that accumulates mutations, generating genetically diverse subclones subject to Darwinian natural selection. Subclones with growth advantages expand while others are eliminated. This creates intratumor heterogeneity — a branching evolutionary tree rather than a linear progression. Clonal evolution drives drug resistance, immune evasion, and metastatic capacity."
  },
  {
    id: 15,
    question: "Intratumor heterogeneity (ITH) has which major clinical implication?",
    options: ["All tumor cells respond identically to therapy", "Single biopsies may not capture the full spectrum of actionable mutations, and resistant subclones may be present before treatment", "ITH simplifies treatment decisions", "ITH has no prognostic significance"],
    answer: 1,
    explanation: "ITH poses major clinical challenges: (1) spatial heterogeneity — different tumor regions harbor different mutations (single biopsy sampling bias), (2) pre-existing resistant subclones may expand under therapeutic selection pressure, (3) metastases may differ genetically from the primary tumor, (4) temporal heterogeneity — the tumor evolves during treatment. Multi-region sequencing, liquid biopsy (capturing ITH from circulating DNA), and combination therapies targeting multiple subclones address this challenge."
  },
  {
    id: 16,
    question: "The Hedgehog signaling pathway in cancer is aberrantly activated in:",
    options: ["Only hematologic malignancies", "Basal cell carcinoma, medulloblastoma, and rhabdomyosarcoma", "Only prostate cancer", "Only lung cancer"],
    answer: 1,
    explanation: "Hedgehog (Hh) pathway activation occurs through: (1) loss-of-function mutations in PTCH1 (Gorlin syndrome → multiple basal cell carcinomas), (2) gain-of-function mutations in SMO, or (3) ligand-dependent activation in tumor stroma. Vismodegib and sonidegib (SMO inhibitors) are FDA-approved for advanced basal cell carcinoma. Hh pathway activation also maintains CSC populations in some cancers."
  },
  {
    id: 17,
    question: "Drug resistance in cancer can arise through which mechanisms?",
    options: ["Only drug efflux pumps", "Pre-existing resistant subclones, acquired mutations in drug targets, pathway bypass, drug efflux, phenotypic plasticity, and microenvironment-mediated resistance", "Only metabolic inactivation", "Only reduced drug uptake"],
    answer: 1,
    explanation: "Drug resistance mechanisms include: (1) target alterations (EGFR T790M after erlotinib, BCR-ABL T315I after imatinib), (2) pathway bypass (MET amplification bypassing EGFR inhibition), (3) drug efflux pumps (P-glycoprotein/MDR1/ABCB1), (4) pre-existing resistant subclones (selected by therapy), (5) phenotypic plasticity (EMT, neuroendocrine transformation), (6) enhanced DNA repair, (7) anti-apoptotic changes, and (8) tumor microenvironment protection (stromal-mediated resistance)."
  },
  {
    id: 18,
    question: "Lineage plasticity as a resistance mechanism is exemplified by:",
    options: ["Increased drug efflux", "Neuroendocrine transformation of prostate adenocarcinoma under androgen deprivation therapy", "Gene amplification", "Increased drug uptake"],
    answer: 1,
    explanation: "Under selective pressure of androgen deprivation and AR-targeted therapies, ~15-20% of castration-resistant prostate cancers undergo neuroendocrine transformation (NEPC) — losing AR expression and gaining neuroendocrine markers (synaptophysin, chromogranin). This lineage switch renders AR-targeted therapies ineffective. NEPC often involves RB1 and TP53 loss, enabling plasticity. Similar lineage switches occur in EGFR-mutant NSCLC transforming to small cell lung cancer."
  },
  {
    id: 19,
    question: "Side population (SP) cells identified by Hoechst 33342 dye exclusion in tumors are enriched for:",
    options: ["Differentiated tumor cells", "Cancer stem cells with high drug efflux pump activity (ABCG2/BCRP)", "Apoptotic cells", "Senescent cells"],
    answer: 1,
    explanation: "Side population cells actively efflux Hoechst 33342 dye through ABC transporters (primarily ABCG2/BCRP). SP cells are enriched for CSC properties: self-renewal, multipotency, tumorigenicity in xenograft assays, and drug resistance. High ABCG2 expression also effluxes chemotherapy drugs (mitoxantrone, topotecan), contributing to multidrug resistance. SP analysis has been used to identify CSC-like populations in many tumor types."
  },
  {
    id: 20,
    question: "Tumor evolution under therapy follows which model?",
    options: ["Linear evolution with single resistant clone", "Branching evolution with multiple competing subclones, where drug-sensitive clones are eliminated and resistant clones expand", "No evolutionary change during treatment", "Only neutral evolution without selection"],
    answer: 1,
    explanation: "Therapy acts as a selective pressure in the tumor ecosystem. Branching evolution generates diverse subclones; treatment eliminates drug-sensitive clones (reducing competition) while resistant clones expand to dominate. This Darwinian selection can be mitigated by: (1) combination therapies targeting multiple pathways simultaneously, (2) adaptive therapy (modulating doses to maintain drug-sensitive competitors), and (3) sequential therapy strategies informed by anticipated resistance mechanisms."
  },

  // ===== TELOMERE BIOLOGY & SENESCENCE (Q21–Q30) =====
  {
    id: 21,
    question: "Telomerase is a ribonucleoprotein enzyme that:",
    options: ["Shortens telomeres", "Extends telomeres by adding TTAGGG repeats using its RNA template component (TERC) and reverse transcriptase catalytic subunit (TERT)", "Repairs double-strand breaks", "Degrades single-stranded DNA"],
    answer: 1,
    explanation: "Telomerase consists of TERT (telomerase reverse transcriptase, the catalytic protein subunit) and TERC (telomerase RNA component, providing the AAUCCC template for TTAGGG repeat synthesis). Telomerase extends the 3' G-rich overhang, which is then filled in by conventional DNA polymerase. Telomerase is active in germ cells and stem cells but silenced in most somatic cells. ~85-90% of cancers reactivate telomerase to achieve replicative immortality."
  },
  {
    id: 22,
    question: "TERT promoter mutations (C228T, C250T) reactivate telomerase in cancer by:",
    options: ["Deleting the TERT gene", "Creating de novo ETS/GABP transcription factor binding sites that drive TERT transcription", "Amplifying the TERT gene", "Altering TERT protein structure"],
    answer: 1,
    explanation: "TERT promoter mutations (C228T and C250T, occurring 124 and 146 bp upstream of the ATG start codon) create de novo ETS (E twenty-six) transcription factor binding motifs (CCGGAA→CCGGAA). The ETS factor GABP binds these neo-sites and drives TERT transcription, reactivating telomerase. These mutations are among the most common non-coding mutations in cancer, found in melanoma (~70%), glioblastoma (~80%), bladder cancer (~65%), and hepatocellular carcinoma (~45%)."
  },
  {
    id: 23,
    question: "The alternative lengthening of telomeres (ALT) pathway maintains telomeres through:",
    options: ["Telomerase activity", "Homologous recombination-based telomere extension without telomerase", "Translesion synthesis", "Non-homologous end joining"],
    answer: 1,
    explanation: "ALT uses homologous recombination between telomeric sequences (inter-telomeric recombination) to maintain telomere length. ALT is characterized by: heterogeneous telomere lengths, ALT-associated PML bodies (APBs), extrachromosomal telomeric circles (C-circles used as a diagnostic biomarker), and ATRX/DAXX loss (chromatin remodeling complex mutations found in ~90% of ALT cancers). ALT is common in sarcomas, gliomas, pancreatic neuroendocrine tumors, and some pediatric cancers."
  },
  {
    id: 24,
    question: "Replicative senescence is triggered by:",
    options: ["Telomere elongation", "Critically short telomeres that activate the DNA damage response (DDR) through ATM/ATR signaling", "Excessive growth factor stimulation", "Nutrient abundance"],
    answer: 1,
    explanation: "When telomeres shorten below a critical length (~4-5 kb), they can no longer form the protective T-loop/shelterin structure. Exposed telomere ends are recognized as double-strand breaks, activating ATM/ATR → CHK1/CHK2 → p53 → p21 and/or p16/INK4a → Rb pathways, enforcing permanent G1 arrest (senescence). Replicative senescence is a potent tumor-suppressive mechanism — bypassing it (via telomerase or ALT) is essential for cancer cell immortalization."
  },
  {
    id: 25,
    question: "Oncogene-induced senescence (OIS) occurs when:",
    options: ["Oncogenes are inactivated", "Hyperactivation of oncogenes (e.g., RAS, BRAF) triggers a senescence program as a failsafe tumor-suppressive response", "Tumor suppressor genes are activated", "Apoptosis is blocked"],
    answer: 1,
    explanation: "OIS is a tumor-suppressive mechanism where aberrant oncogene activation (RAS V12, BRAF V600E, MYC overexpression) triggers a permanent growth arrest through p53/p21 and p16/Rb pathways. OIS involves DNA replication stress, reactive oxygen species, and DDR activation. Melanocytic nevi (moles) with BRAF V600E mutations represent OIS — most remain benign indefinitely. Bypassing OIS (through p53/Rb loss) is a critical step in malignant transformation."
  },
  {
    id: 26,
    question: "The shelterin complex protects telomeres by:",
    options: ["Extending telomere length", "Binding telomeric DNA to form a protective cap that prevents recognition as damaged DNA and regulates telomerase access", "Promoting telomere recombination", "Degrading telomeric DNA"],
    answer: 1,
    explanation: "Shelterin consists of six proteins: TRF1, TRF2 (bind double-stranded TTAGGG), POT1 (binds single-stranded G-overhang), TPP1, TIN2, and RAP1. Shelterin: (1) facilitates T-loop formation (hiding the chromosome end), (2) prevents ATM/ATR activation at telomeres, (3) suppresses NHEJ (which would cause chromosome fusions), (4) blocks HR at telomeres, and (5) regulates telomerase access. Shelterin dysfunction causes telomere deprotection, chromosome fusions, and genomic instability."
  },
  {
    id: 27,
    question: "Telomere crisis occurs when:",
    options: ["Telomeres are too long", "Cells bypass senescence (p53 loss) but continue dividing with critically short telomeres, causing breakage-fusion-bridge cycles and massive genomic instability", "Telomerase is overactive", "Cells enter quiescence"],
    answer: 1,
    explanation: "If senescence checkpoints are disabled (p53/Rb loss), cells continue dividing despite short telomeres. Critically short/unprotected telomeres cause end-to-end chromosome fusions. During anaphase, fused chromosomes form bridges that break unevenly, creating dicentric chromosomes and initiating breakage-fusion-bridge (BFB) cycles. This generates massive structural rearrangements (chromothripsis, kataegis), gene amplification, and deletions. Most cells die, but rare survivors that reactivate telomerase emerge as highly rearranged cancer cells."
  },
  {
    id: 28,
    question: "Therapy-induced senescence (TIS) is a response to:",
    options: ["Only surgical resection", "DNA-damaging chemotherapy and radiation that triggers senescence in tumor cells rather than apoptosis", "Only hormonal therapy", "Only immunotherapy"],
    answer: 1,
    explanation: "Sublethal doses of DNA-damaging agents (doxorubicin, cisplatin, etoposide) and radiation can induce senescence rather than apoptosis in some tumor cells. While TIS halts proliferation (initially beneficial), senescent cells remain metabolically active and secrete SASP factors promoting inflammation, angiogenesis, and proliferation in neighboring cells. TIS may contribute to treatment resistance and late recurrence. Combining therapy with senolytics (drugs targeting senescent cells) may improve outcomes."
  },
  {
    id: 29,
    question: "The role of telomere length as a biomarker in cancer is complex because:",
    options: ["Telomere length is identical in all cancers", "Short telomeres increase cancer risk (genomic instability) but telomerase activation in established cancers maintains telomeres for immortality", "Only long telomeres are found in cancer", "Telomere length has no prognostic value"],
    answer: 1,
    explanation: "Telomere biology in cancer is paradoxical: (1) constitutionally short telomeres increase cancer risk (genomic instability from telomere dysfunction drives early carcinogenesis, as in dyskeratosis congenita), (2) once malignant transformation occurs, telomerase reactivation or ALT stabilizes telomeres for unlimited proliferation, (3) very short telomeres in established cancers may predict aggressive behavior and poor prognosis. Context-dependent interpretation is essential."
  },
  {
    id: 30,
    question: "Imetelstat is an investigational anti-cancer agent that works by:",
    options: ["Activating telomerase", "Directly inhibiting telomerase as an oligonucleotide complementary to the RNA template (TERC)", "Blocking TERT transcription", "Promoting ALT pathway activation"],
    answer: 1,
    explanation: "Imetelstat is a 13-mer lipid-conjugated oligonucleotide complementary to the template region of TERC. It binds the telomerase active site with high affinity, competitively inhibiting telomere extension. Imetelstat has shown clinical activity in myelodysplastic syndromes (MDS) and myelofibrosis, receiving FDA approval for lower-risk MDS in 2024. Its efficacy in solid tumors is under investigation, with the hypothesis that sustained telomerase inhibition will trigger telomere shortening and eventual growth arrest or crisis."
  },

  // ===== EPIGENETICS IN CANCER (Q31–Q40) =====
  {
    id: 31,
    question: "Global DNA hypomethylation in cancer contributes to tumorigenesis by:",
    options: ["Silencing oncogenes", "Promoting genomic instability through activation of transposable elements and satellite repeats, and loss of imprinting", "Activating tumor suppressor genes", "Stabilizing chromosomes"],
    answer: 1,
    explanation: "While cancer genomes show focal promoter hypermethylation (silencing tumor suppressors), they exhibit global hypomethylation (20-60% reduction). Global hypomethylation causes: (1) activation of transposable elements (LINE-1, Alu), (2) chromosomal instability from pericentromeric satellite repeat hypomethylation, (3) loss of imprinting (LOI) leading to biallelic IGF2 expression, and (4) activation of normally silenced oncogenes and cancer-testis antigens. Global hypomethylation increases with tumor progression."
  },
  {
    id: 32,
    question: "CpG island methylator phenotype (CIMP) in colorectal cancer is characterized by:",
    options: ["Global hypomethylation only", "Widespread hypermethylation of CpG island promoters, often involving MLH1 silencing and associated with BRAF V600E mutation", "Only TP53 mutations", "Only APC mutations"],
    answer: 1,
    explanation: "CIMP-high CRC (~15-20% of CRC) shows concurrent hypermethylation of multiple CpG island-containing promoters. Key features: (1) MLH1 promoter methylation causing mismatch repair deficiency and MSI-H, (2) strong association with BRAF V600E mutation, (3) proximal colon location, (4) female predominance, (5) serrated precursor pathway (sessile serrated lesions). CIMP status is a prognostic and predictive biomarker — CIMP-high/MSI-H CRC has good prognosis and responds to immunotherapy."
  },
  {
    id: 33,
    question: "EZH2 (enhancer of zeste homolog 2) is an epigenetic enzyme that:",
    options: ["Demethylates DNA", "Catalyzes H3K27 trimethylation (H3K27me3) as part of PRC2, silencing tumor suppressor genes", "Acetylates histones", "Methylates DNA at CpG sites"],
    answer: 1,
    explanation: "EZH2 is the catalytic subunit of Polycomb Repressive Complex 2 (PRC2), catalyzing H3K27me3 — a histone mark associated with transcriptional repression. EZH2 overexpression (breast, prostate cancers) or gain-of-function mutations (Y641, A677 — lymphomas) silence tumor suppressor genes and differentiation programs. Tazemetostat (EZH2 inhibitor) is FDA-approved for epithelioid sarcoma and follicular lymphoma with EZH2 mutations."
  },
  {
    id: 34,
    question: "DNMT inhibitors (azacitidine, decitabine) treat cancer by:",
    options: ["Increasing DNA methylation globally", "Incorporating into DNA and irreversibly inhibiting DNA methyltransferases, reactivating silenced tumor suppressor genes", "Acetylating histones", "Blocking histone methylation"],
    answer: 1,
    explanation: "Azacitidine and decitabine are cytidine analogs incorporated into DNA during replication. When DNMTs attempt to methylate the analog-containing DNA, they become covalently trapped, leading to proteasomal degradation. This causes passive DNA demethylation over subsequent cell divisions, potentially reactivating silenced tumor suppressors, differentiation genes, and immune-related genes (endogenous retroviruses, cancer-testis antigens). They are FDA-approved for MDS and AML."
  },
  {
    id: 35,
    question: "HDAC inhibitors (vorinostat, romidepsin, panobinostat) treat cancer by:",
    options: ["Increasing histone deacetylation", "Inhibiting histone deacetylases, increasing histone acetylation, opening chromatin, and reactivating silenced genes including cell cycle inhibitors and pro-apoptotic genes", "Only blocking DNA replication", "Inhibiting RNA polymerase"],
    answer: 1,
    explanation: "HDAC inhibitors block histone deacetylases, increasing global histone acetylation, promoting open chromatin and gene expression. They reactivate p21 (cell cycle arrest), DR5 (extrinsic apoptosis), BAX/BAK (intrinsic apoptosis), and MHC class I/II molecules (immune recognition). HDAC inhibitors are FDA-approved for cutaneous T-cell lymphoma (vorinostat, romidepsin), peripheral T-cell lymphoma, and multiple myeloma (panobinostat in combination)."
  },
  {
    id: 36,
    question: "BET (bromodomain and extraterminal) protein inhibitors target cancer by:",
    options: ["Blocking DNA methylation", "Displacing BET proteins (BRD2/3/4) from acetylated histones at super-enhancers, reducing expression of oncogenes like MYC", "Inhibiting histone deacetylation", "Promoting proteasome activity"],
    answer: 1,
    explanation: "BET proteins (BRD2, BRD3, BRD4) bind acetylated histones through their bromodomains and recruit transcriptional machinery to active enhancers/promoters. BRD4 is enriched at super-enhancers driving expression of key oncogenes (MYC, BCL2, FOSL1). BET inhibitors (JQ1, OTX015, birabresib) competitively displace BET proteins from chromatin, disproportionately affecting super-enhancer-driven genes. They show activity in hematologic malignancies and NUT carcinoma (BRD4-NUT fusion)."
  },
  {
    id: 37,
    question: "Super-enhancers differ from typical enhancers in cancer by:",
    options: ["Being smaller regulatory elements", "Spanning large genomic regions, binding exceptionally high levels of mediator/BRD4/transcription factors, and driving high-level expression of oncogenes", "Having no effect on transcription", "Only regulating housekeeping genes"],
    answer: 1,
    explanation: "Super-enhancers are large clusters of enhancers (~10-50 kb) marked by exceptionally high levels of H3K27ac, Mediator complex, BRD4, and master transcription factors. They drive high-level expression of cell-identity genes and oncogenes (MYC, BCL2, MYB). Cancer cells create de novo super-enhancers at oncogene loci through focal amplification, translocation, or transcription factor redistribution. Super-enhancer-driven genes are exquisitely sensitive to perturbation (BET inhibitors, CDK7 inhibitors)."
  },
  {
    id: 38,
    question: "SWI/SNF (BAF) chromatin remodeling complex mutations are found in approximately what percentage of human cancers?",
    options: ["<1%", "~20%", "~50%", "~90%"],
    answer: 1,
    explanation: "SWI/SNF (BAF/PBAF) complex subunit genes are mutated in ~20% of all human cancers, making them among the most frequently altered gene families. Key genes include SMARCB1 (rhabdoid tumors — biallelic loss in ~100%), SMARCA4 (lung, ovarian), ARID1A (ovarian clear cell, endometrial, gastric), and PBRM1 (clear cell RCC). SWI/SNF complexes remodel nucleosomes to regulate gene expression, and their loss creates specific therapeutic vulnerabilities (EZH2 inhibitor sensitivity, PARP inhibitor sensitivity)."
  },
  {
    id: 39,
    question: "Long non-coding RNAs (lncRNAs) contribute to cancer epigenetics by:",
    options: ["Only serving as mRNA", "Guiding chromatin-modifying complexes to specific genomic loci, scaffolding protein complexes, and acting as decoys for miRNAs", "Only being translated into small proteins", "Having no regulatory function"],
    answer: 1,
    explanation: "lncRNAs (>200 nt, non-protein-coding) regulate epigenetic state through: (1) guiding PRC2 to target loci for H3K27me3-mediated silencing (HOTAIR guides PRC2 to HOXD locus), (2) scaffolding chromatin-modifying complexes, (3) acting as enhancer RNAs (eRNAs) activating nearby genes, (4) competing endogenous RNAs (ceRNAs) sponging miRNAs, and (5) modulating mRNA stability and translation. MALAT1, NEAT1, and HOTAIR are frequently dysregulated in cancer."
  },
  {
    id: 40,
    question: "MicroRNAs (miRNAs) function in cancer as both oncogenes (oncomiRs) and tumor suppressors. Which miRNA cluster is frequently amplified in cancer?",
    options: ["let-7 family", "miR-17-92 cluster (oncomiR-1)", "miR-34 family", "miR-200 family"],
    answer: 1,
    explanation: "The miR-17-92 cluster (13q31.3) is one of the most frequently amplified miRNA loci in cancer (B-cell lymphoma, lung, breast, colon). It is transcriptionally activated by MYC and encodes six miRNAs that suppress pro-apoptotic (BIM, PTEN) and cell cycle inhibitory (p21, p57) genes. Conversely, let-7 (suppresses RAS, MYC), miR-34 (p53 target, suppresses CDK4/6, BCL2), and miR-200 (suppresses ZEB1/2 to inhibit EMT) function as tumor suppressors and are frequently lost or silenced in cancer."
  },

  // ===== CARCINOGENESIS & MULTI-STEP MODEL (Q41–Q50) =====
  {
    id: 41,
    question: "The adenoma-carcinoma sequence in colorectal cancer follows which order of genetic alterations?",
    options: ["KRAS → APC → p53 → SMAD4", "APC loss → KRAS activation → SMAD4 loss → TP53 loss", "TP53 loss → KRAS → APC → SMAD4", "SMAD4 → KRAS → TP53 → APC"],
    answer: 1,
    explanation: "Vogelstein's model of colorectal carcinogenesis follows a stepwise accumulation: (1) APC loss (initiating event → small adenoma), (2) KRAS activation (promoting clonal expansion → intermediate adenoma), (3) SMAD4/DCC loss on 18q (→ large adenoma), and (4) TP53 loss (→ carcinoma). Additional events enable metastasis. While individual tumors may not follow this exact order, the principle of sequential, rate-limiting genetic alterations driving progression is a paradigm for multi-step carcinogenesis."
  },
  {
    id: 42,
    question: "Chemical carcinogenesis involves which classical stages?",
    options: ["Only initiation", "Initiation (irreversible DNA damage/mutation) → promotion (clonal expansion by non-mutagenic stimuli) → progression (acquisition of additional mutations and malignant features)", "Only promotion", "Only progression"],
    answer: 1,
    explanation: "Classical chemical carcinogenesis model: (1) Initiation — irreversible genetic alteration (point mutation) caused by a genotoxic carcinogen (e.g., benzo[a]pyrene, aflatoxin), (2) Promotion — reversible clonal expansion of initiated cells by non-mutagenic promoters (e.g., TPA/phorbol esters, hormones) that stimulate proliferation without causing mutations, and (3) Progression — accumulation of additional mutations leading to genomic instability, invasion, and metastasis. This framework explains latency periods and threshold effects in carcinogenesis."
  },
  {
    id: 43,
    question: "Aflatoxin B1 is a potent hepatocarcinogen that causes a characteristic:",
    options: ["KRAS codon 12 mutation", "TP53 R249S hotspot mutation (AGG→AGT transversion at codon 249)", "BRAF V600E mutation", "APC truncating mutation"],
    answer: 1,
    explanation: "Aflatoxin B1 (from Aspergillus flavus, contaminating grains and nuts in tropical regions) is metabolized to an epoxide that forms DNA adducts, preferentially causing G→T transversions. The characteristic TP53 R249S mutation (codon 249, AGG→AGT) is found in ~50% of hepatocellular carcinomas from aflatoxin-endemic regions (sub-Saharan Africa, Southeast Asia), especially in conjunction with chronic hepatitis B infection (synergistic risk)."
  },
  {
    id: 44,
    question: "HPV (human papillomavirus) E6 and E7 oncoproteins promote carcinogenesis by targeting:",
    options: ["RAS and RAF", "p53 (E6-mediated degradation) and Rb (E7-mediated inactivation)", "BRCA1 and BRCA2", "APC and beta-catenin"],
    answer: 1,
    explanation: "High-risk HPV (types 16, 18) oncoproteins: (1) E6 recruits the E6AP ubiquitin ligase to p53, targeting it for proteasomal degradation (functionally inactivating p53 without TP53 mutations), and (2) E7 binds and inactivates Rb family members (pRb, p107, p130), releasing E2F and driving uncontrolled S-phase entry. Together, E6/E7 disable both major tumor suppressor pathways. Viral integration often disrupts E2 (which normally suppresses E6/E7), leading to constitutive E6/E7 expression."
  },
  {
    id: 45,
    question: "Epstein-Barr virus (EBV) is associated with which cancers?",
    options: ["Hepatocellular carcinoma", "Burkitt lymphoma, nasopharyngeal carcinoma, Hodgkin lymphoma, and post-transplant lymphoproliferative disorder", "Cervical cancer", "Bladder cancer"],
    answer: 1,
    explanation: "EBV (HHV-4) establishes lifelong latent infection in B cells and is associated with: Burkitt lymphoma (endemic form, ~100% EBV+), nasopharyngeal carcinoma (~100% EBV+), Hodgkin lymphoma (~40% EBV+), post-transplant lymphoproliferative disorder, NK/T-cell lymphoma, and gastric carcinoma (~10% EBV+). EBV latent proteins (LMP1 mimics CD40, LMP2A mimics BCR, EBNA2 activates MYC/Notch) and viral miRNAs drive B-cell proliferation and survival."
  },
  {
    id: 46,
    question: "Helicobacter pylori increases gastric cancer risk through:",
    options: ["Only direct mutagenesis", "CagA oncoprotein injection, chronic inflammation, and induction of epithelial cell proliferation and DNA damage", "Only acid suppression", "Only autoimmune mechanisms"],
    answer: 1,
    explanation: "H. pylori is classified as a Group 1 carcinogen (WHO). Mechanisms include: (1) CagA injection via type IV secretion system (activates SHP-2/RAS/ERK, disrupts E-cadherin/β-catenin complexes), (2) VacA toxin (induces apoptosis, suppresses T-cell function), (3) chronic inflammation (NF-κB activation, ROS/RNS-mediated DNA damage), (4) epithelial hyperproliferation compensating for increased apoptosis, and (5) epigenetic alterations (promoter methylation). H. pylori eradication reduces gastric cancer risk."
  },
  {
    id: 47,
    question: "UV radiation causes cancer primarily through formation of:",
    options: ["Double-strand breaks", "Cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts causing C→T and CC→TT signature mutations", "Interstrand crosslinks", "Oxidative base damage only"],
    answer: 1,
    explanation: "UVB (280-320 nm) directly causes photoproducts between adjacent pyrimidines: cyclobutane pyrimidine dimers (CPDs, ~75%) and 6-4 photoproducts (~25%). If not repaired by NER, these lesions cause characteristic C→T transitions at dipyrimidine sites (UV signature mutations). UVA (320-400 nm) causes indirect damage through ROS. The UV mutational signature (SBS7 in COSMIC) is prominent in melanoma and non-melanoma skin cancers. Xeroderma pigmentosum (NER deficiency) dramatically increases UV-induced cancer risk."
  },
  {
    id: 48,
    question: "Tobacco smoke carcinogenesis involves which major classes of carcinogens?",
    options: ["Only nicotine", "Polycyclic aromatic hydrocarbons (PAHs), N-nitrosamines (NNK, NNN), aromatic amines, and reactive oxygen species", "Only carbon monoxide", "Only tar"],
    answer: 1,
    explanation: "Tobacco smoke contains >70 known carcinogens: (1) PAHs (benzo[a]pyrene) — form bulky DNA adducts, cause G→T transversions (TP53 hotspots), (2) tobacco-specific N-nitrosamines (NNK, NNN) — cause methylation adducts (O6-methylguanine→G→A transitions), (3) aromatic amines (4-aminobiphenyl) — cause bladder cancer, and (4) ROS/reactive nitrogen species — cause oxidative DNA damage. The characteristic smoking mutational signature (SBS4 in COSMIC) involves C→A transversions."
  },
  {
    id: 49,
    question: "Field cancerization (field effect) refers to:",
    options: ["Metastatic spread of cancer", "Large areas of tissue harboring pre-neoplastic molecular alterations due to chronic carcinogen exposure, predisposing to multifocal tumor development", "Only lymph node involvement", "Cancer screening in population settings"],
    answer: 1,
    explanation: "Slaughter's field cancerization concept (1953) proposes that chronic carcinogen exposure (tobacco, alcohol, UV, H. pylori) creates large areas of genetically altered but histologically normal-appearing tissue. These 'fields' carry early mutations (TP53, CDKN2A) or epigenetic changes that predispose to multifocal cancer development. This explains: second primary tumors, local recurrence after apparently complete resection, and the concept of 'condemned mucosa' in head and neck and bladder cancers."
  },
  {
    id: 50,
    question: "The multi-hit model of carcinogenesis suggests that human cancers typically require:",
    options: ["A single mutation", "Accumulation of 3-7 rate-limiting 'driver' mutations occurring over years to decades", "More than 100 driver mutations", "Only epigenetic changes without mutations"],
    answer: 1,
    explanation: "Mathematical modeling and large-scale sequencing studies suggest that human cancers require 3-7 rate-limiting driver mutations (among ~140 known driver genes). These accumulate sequentially over decades, explaining the exponential increase in cancer incidence with age. Most mutations are passengers (neutral) — only a small fraction are drivers that confer selective growth advantages. The exact number varies by cancer type (pediatric cancers often have fewer drivers than adult cancers)."
  }
]

export default questions
