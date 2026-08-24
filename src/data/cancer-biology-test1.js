const questions = [
  // ===== ONCOGENES & PROTO-ONCOGENES (Q1–Q10) =====
  {
    id: 1,
    question: "Proto-oncogenes are normal cellular genes that:",
    options: ["Suppress tumor growth", "Regulate cell growth, proliferation, and survival, and can become oncogenes through activating mutations", "Repair damaged DNA", "Induce apoptosis"],
    answer: 1,
    explanation: "Proto-oncogenes encode proteins that promote normal cell growth, proliferation, differentiation, and survival (growth factors, receptors, signal transducers, transcription factors). When mutated, amplified, or rearranged, they become oncogenes with constitutive or enhanced activity, driving uncontrolled cell proliferation. Oncogene activation typically requires only one mutant allele (dominant gain-of-function)."
  },
  {
    id: 2,
    question: "RAS oncogenes (KRAS, NRAS, HRAS) are most commonly activated by:",
    options: ["Gene amplification", "Point mutations at codons 12, 13, or 61 that impair GTPase activity", "Chromosomal translocation", "Promoter hypermethylation"],
    answer: 1,
    explanation: "RAS proteins are small GTPases that cycle between active GTP-bound and inactive GDP-bound states. Point mutations at codons 12, 13, or 61 impair intrinsic GTPase activity and resistance to GAP-stimulated hydrolysis, locking RAS in the constitutively active GTP-bound state. KRAS mutations are found in ~25% of all human cancers, particularly pancreatic (>90%), colorectal (~40%), and lung adenocarcinoma (~30%)."
  },
  {
    id: 3,
    question: "MYC proto-oncogene activation in Burkitt lymphoma occurs through:",
    options: ["Point mutation", "Translocation t(8;14) placing MYC under control of the immunoglobulin heavy chain enhancer", "Gene deletion", "Epigenetic silencing"],
    answer: 1,
    explanation: "Burkitt lymphoma characteristically shows t(8;14)(q24;q32), juxtaposing the MYC gene (chromosome 8) with the immunoglobulin heavy chain locus (chromosome 14). The powerful IgH enhancer drives constitutive MYC overexpression, promoting uncontrolled proliferation. Variant translocations involve IgK t(2;8) or IgL t(8;22). MYC is a master transcription factor regulating ~15% of all genes involved in cell growth, metabolism, and apoptosis."
  },
  {
    id: 4,
    question: "HER2/neu (ERBB2) amplification is clinically significant in breast cancer because:",
    options: ["It indicates a favorable prognosis without treatment", "It drives aggressive tumor growth and is targetable by trastuzumab (Herceptin)", "It sensitizes tumors to hormone therapy", "It prevents metastasis"],
    answer: 1,
    explanation: "HER2 amplification (present in ~15-20% of breast cancers) results in receptor overexpression, constitutive downstream signaling (PI3K/AKT, MAPK), and aggressive tumor behavior with poor prognosis. Trastuzumab (Herceptin), a monoclonal antibody targeting HER2, revolutionized treatment. Additional HER2-targeted agents include pertuzumab, T-DM1 (ado-trastuzumab emtansine), and T-DXd (trastuzumab deruxtecan). HER2 testing (IHC/FISH) is standard of care."
  },
  {
    id: 5,
    question: "The BCR-ABL1 fusion oncogene in chronic myelogenous leukemia encodes a constitutively active:",
    options: ["Serine/threonine kinase", "Tyrosine kinase", "GTPase", "Phosphatase"],
    answer: 1,
    explanation: "The t(9;22) Philadelphia chromosome creates the BCR-ABL1 fusion gene encoding a constitutively active tyrosine kinase. BCR-ABL1 activates multiple downstream pathways (RAS/MAPK, PI3K/AKT, JAK/STAT) driving proliferation and survival of myeloid progenitors. Imatinib (Gleevec), a competitive inhibitor of the ABL1 ATP-binding site, was the first successful targeted therapy, transforming CML from a fatal to a manageable chronic disease."
  },
  {
    id: 6,
    question: "Mechanisms of proto-oncogene activation include all of the following EXCEPT:",
    options: ["Point mutation (e.g., RAS)", "Gene amplification (e.g., HER2, MYC)", "Chromosomal translocation (e.g., BCR-ABL1)", "Biallelic inactivation by deletion"],
    answer: 3,
    explanation: "Proto-oncogenes are activated by gain-of-function mechanisms: (1) point mutations creating constitutively active proteins (RAS), (2) gene amplification increasing protein levels (HER2, MYC, EGFR), (3) chromosomal translocation creating fusion proteins or placing genes under strong promoters (BCR-ABL1, MYC-IgH), and (4) retroviral insertion near proto-oncogenes. Biallelic inactivation is the mechanism for tumor suppressor gene loss, not oncogene activation."
  },
  {
    id: 7,
    question: "The RAF-MEK-ERK signaling cascade is activated downstream of:",
    options: ["p53", "RAS", "Rb", "BRCA1"],
    answer: 1,
    explanation: "Active RAS-GTP recruits and activates RAF (ARAF, BRAF, CRAF) serine/threonine kinases, which phosphorylate and activate MEK1/2 (dual-specificity kinases), which in turn phosphorylate and activate ERK1/2 (MAPK). ERK translocates to the nucleus and activates transcription factors (FOS, JUN, MYC) driving cell proliferation. BRAF V600E is a common oncogenic mutation in melanoma (~50%), thyroid, and colorectal cancer."
  },
  {
    id: 8,
    question: "BRAF V600E mutation is most commonly found in:",
    options: ["Pancreatic cancer", "Melanoma", "Hepatocellular carcinoma", "Prostate cancer"],
    answer: 1,
    explanation: "BRAF V600E (valine to glutamic acid at codon 600) is found in ~50% of melanomas, ~45% of papillary thyroid cancers, ~10% of colorectal cancers, and nearly all hairy cell leukemias. The mutation mimics phosphorylation, constitutively activating BRAF kinase and downstream MEK/ERK signaling. Targeted therapy with BRAF inhibitors (vemurafenib, dabrafenib) combined with MEK inhibitors (trametinib) has dramatically improved melanoma outcomes."
  },
  {
    id: 9,
    question: "The PI3K/AKT/mTOR pathway is activated in cancer by all of the following EXCEPT:",
    options: ["PIK3CA activating mutations", "PTEN loss-of-function mutations", "AKT amplification", "p53 gain-of-function mutations"],
    answer: 3,
    explanation: "The PI3K/AKT/mTOR pathway is activated by: PIK3CA activating mutations (encoding the p110α catalytic subunit, common in breast, endometrial, colorectal cancers), PTEN loss (a phosphatase that negatively regulates PI3K signaling), AKT amplification/mutation, and receptor tyrosine kinase amplification. p53 mutations affect DNA damage response and apoptosis pathways, not direct PI3K/AKT activation, though cross-talk exists."
  },
  {
    id: 10,
    question: "ALK (anaplastic lymphoma kinase) rearrangements are therapeutically targetable in:",
    options: ["Breast cancer", "Non-small cell lung cancer (NSCLC)", "Hepatocellular carcinoma", "Prostate cancer"],
    answer: 1,
    explanation: "ALK rearrangements (most commonly EML4-ALK fusion) occur in ~3-5% of NSCLC, typically in younger, never-smokers with adenocarcinoma histology. The fusion creates a constitutively active tyrosine kinase. ALK inhibitors (crizotinib, alectinib, lorlatinib) have shown dramatic response rates (>60-70%) and improved survival. ALK testing (FISH, IHC, or NGS) is now standard in advanced NSCLC workup."
  },

  // ===== TUMOR SUPPRESSOR GENES (Q11–Q20) =====
  {
    id: 11,
    question: "Tumor suppressor genes require inactivation of how many alleles for loss of function (Knudson's two-hit hypothesis)?",
    options: ["One allele", "Both alleles", "Three alleles", "No alleles — epigenetic changes only"],
    answer: 1,
    explanation: "Knudson's two-hit hypothesis (1971, based on retinoblastoma) states that both alleles of a tumor suppressor gene must be inactivated for loss of function. In hereditary cancers, the first hit is a germline mutation (inherited) and the second hit is somatic (LOH, deletion, mutation, or methylation). In sporadic cancers, both hits are somatic events in the same cell, explaining their later onset and unilateral presentation."
  },
  {
    id: 12,
    question: "The TP53 gene product p53 is called the 'guardian of the genome' because it:",
    options: ["Promotes cell proliferation", "Activates DNA repair, cell cycle arrest, senescence, and apoptosis in response to DNA damage", "Stimulates angiogenesis", "Inhibits immune surveillance"],
    answer: 1,
    explanation: "p53 is a transcription factor activated by DNA damage, oncogene activation, hypoxia, and other stresses. It induces: (1) cell cycle arrest (via p21/CDKN1A inhibiting CDK-cyclin complexes), (2) DNA repair (via GADD45), (3) apoptosis (via BAX, PUMA, NOXA), and (4) senescence. TP53 is the most frequently mutated gene in human cancer (~50% of all cancers), and its loss removes a critical barrier to malignant transformation."
  },
  {
    id: 13,
    question: "The retinoblastoma protein (pRb) regulates cell cycle progression by:",
    options: ["Activating CDK4/6", "Sequestering E2F transcription factors, preventing S-phase gene expression", "Promoting telomerase activity", "Activating MYC transcription"],
    answer: 1,
    explanation: "In its hypophosphorylated (active) state, pRb binds and sequesters E2F transcription factors, preventing transcription of genes needed for S-phase entry (cyclin E, cyclin A, DNA polymerase, thymidylate synthase). CDK4/6-cyclin D phosphorylates pRb, releasing E2F and permitting G1→S transition. Loss of pRb (RB1 mutations) allows constitutive E2F activity and uncontrolled cell cycle progression."
  },
  {
    id: 14,
    question: "APC (adenomatous polyposis coli) tumor suppressor functions by regulating:",
    options: ["MAPK signaling", "Wnt/beta-catenin signaling through promoting beta-catenin degradation", "JAK/STAT signaling", "Notch signaling"],
    answer: 1,
    explanation: "APC is a component of the destruction complex (with Axin, GSK-3β, CK1) that phosphorylates beta-catenin, targeting it for ubiquitin-mediated proteasomal degradation. When APC is mutated, beta-catenin accumulates, translocates to the nucleus, and activates TCF/LEF transcription factors driving expression of proliferative genes (MYC, cyclin D1). APC mutations are the initiating event in ~80% of colorectal cancers (adenoma-carcinoma sequence)."
  },
  {
    id: 15,
    question: "PTEN tumor suppressor acts as a phosphatase that:",
    options: ["Dephosphorylates proteins at tyrosine residues", "Dephosphorylates PIP3 to PIP2, negatively regulating PI3K/AKT signaling", "Dephosphorylates histone tails", "Activates CDK inhibitors directly"],
    answer: 1,
    explanation: "PTEN (phosphatase and tensin homolog) is a lipid phosphatase that converts PIP3 (phosphatidylinositol-3,4,5-trisphosphate) to PIP2, directly opposing PI3K activity and reducing AKT activation. Loss of PTEN leads to constitutive AKT activation, promoting cell survival, growth, and proliferation. PTEN is one of the most frequently altered tumor suppressors, lost in endometrial, prostate, glioblastoma, and breast cancers."
  },
  {
    id: 16,
    question: "VHL (von Hippel-Lindau) tumor suppressor regulates the cellular response to hypoxia by:",
    options: ["Activating HIF under normoxic conditions", "Targeting HIF-alpha for ubiquitin-mediated proteasomal degradation under normoxic conditions", "Directly inhibiting VEGF transcription", "Activating mTOR signaling"],
    answer: 1,
    explanation: "Under normoxia, HIF-alpha is hydroxylated by prolyl hydroxylases (PHDs), recognized by the VHL-containing E3 ubiquitin ligase complex, ubiquitinated, and degraded. When VHL is mutated, HIF-alpha accumulates even under normoxia, activating transcription of hypoxia-responsive genes including VEGF (angiogenesis), PDGF, EPO, and glucose transporters. This explains the highly vascularized tumors (clear cell RCC, hemangioblastomas) in VHL disease."
  },
  {
    id: 17,
    question: "The CDK inhibitor p21 (CDKN1A) is a direct transcriptional target of:",
    options: ["RAS", "MYC", "p53", "E2F"],
    answer: 2,
    explanation: "p21 (CDKN1A) is directly transcriptionally activated by p53 in response to DNA damage. p21 inhibits multiple CDK-cyclin complexes (CDK2-cyclin E, CDK2-cyclin A, CDK4/6-cyclin D), causing G1 and G2 cell cycle arrest to allow DNA repair before replication or mitosis. p21 also inhibits PCNA, blocking DNA replication. The p53-p21 axis is one of the most important tumor suppressive pathways."
  },
  {
    id: 18,
    question: "SMAD4 is a tumor suppressor in the:",
    options: ["Wnt signaling pathway", "TGF-beta signaling pathway", "Notch signaling pathway", "Hedgehog signaling pathway"],
    answer: 1,
    explanation: "SMAD4 (also called DPC4 — deleted in pancreatic cancer 4) is a central mediator of TGF-beta signaling. Upon TGF-beta receptor activation, receptor-SMADs (SMAD2/3) are phosphorylated and form a complex with SMAD4, which translocates to the nucleus to activate target genes involved in growth arrest and apoptosis. SMAD4 is inactivated in ~55% of pancreatic cancers and ~30% of colorectal cancers."
  },
  {
    id: 19,
    question: "NF1 (neurofibromin) tumor suppressor functions as:",
    options: ["A tyrosine kinase", "A RAS-GAP (GTPase-activating protein) that inactivates RAS signaling", "A DNA repair enzyme", "A cell cycle kinase"],
    answer: 1,
    explanation: "Neurofibromin is a GTPase-activating protein (GAP) that accelerates the intrinsic GTPase activity of RAS, converting active RAS-GTP to inactive RAS-GDP. Loss of NF1 results in sustained RAS activation and downstream MAPK/ERK signaling, driving tumor formation. NF1 mutations cause neurofibromatosis type 1 (cafe-au-lait spots, neurofibromas, optic gliomas) and are also found as somatic mutations in melanoma, lung cancer, and glioblastoma."
  },
  {
    id: 20,
    question: "Haploinsufficiency in tumor suppressors means:",
    options: ["Both alleles must be lost for any phenotypic effect", "Loss of one allele is sufficient to promote tumorigenesis due to reduced protein dosage", "The protein gains a new function", "Only epigenetic silencing is involved"],
    answer: 1,
    explanation: "In haploinsufficient tumor suppressors, loss of a single allele reduces protein levels below the threshold needed for normal function, increasing cancer risk without complete biallelic inactivation. Examples include PTEN (50% reduction in PTEN increases cancer risk), p27/CDKN1B, and certain TP53 mutants. This challenges Knudson's strict two-hit model, as a single hit can be functionally significant for dosage-sensitive genes."
  },

  // ===== CELL CYCLE & CHECKPOINTS (Q21–Q30) =====
  {
    id: 21,
    question: "The restriction point in the cell cycle is located in:",
    options: ["S phase", "Late G1 phase", "G2 phase", "M phase"],
    answer: 1,
    explanation: "The restriction point (R point) in late G1 is where cells become committed to entering S phase, independent of mitogenic signals. Before R, cells require continuous growth factor stimulation; after R, they proceed through the cell cycle autonomously. The R point is governed by pRb phosphorylation — once CDK4/6-cyclin D sufficiently phosphorylates pRb to release E2F, positive feedback through CDK2-cyclin E makes the decision irreversible. Cancer cells often bypass R through Rb loss or cyclin D overexpression."
  },
  {
    id: 22,
    question: "CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) are used clinically in:",
    options: ["Acute myeloid leukemia", "Hormone receptor-positive, HER2-negative breast cancer", "Small cell lung cancer", "Hepatocellular carcinoma"],
    answer: 1,
    explanation: "CDK4/6 inhibitors block phosphorylation of Rb, preventing G1→S transition and inducing cell cycle arrest. They are FDA-approved in combination with endocrine therapy for HR+/HER2- metastatic breast cancer, significantly improving progression-free survival. Efficacy requires intact Rb (tumors with RB1 loss are resistant). These drugs exemplify successful targeting of the cell cycle machinery in cancer treatment."
  },
  {
    id: 23,
    question: "The G2/M checkpoint prevents entry into mitosis when:",
    options: ["Cells are too large", "DNA replication is incomplete or DNA damage is present", "Nutrient levels are low", "Growth factors are absent"],
    answer: 1,
    explanation: "The G2/M checkpoint ensures DNA replication is complete and DNA damage is repaired before mitotic entry. ATR/CHK1 (replication stress, single-strand gaps) and ATM/CHK2 (double-strand breaks) kinases activate this checkpoint by inhibiting CDC25 phosphatases (preventing CDK1-cyclin B activation) and activating p53-dependent transcription. Cancer cells with defective G1/S checkpoints (p53 loss) become more dependent on G2/M, making it a therapeutic target."
  },
  {
    id: 24,
    question: "The spindle assembly checkpoint (SAC) monitors:",
    options: ["DNA replication fidelity", "Proper kinetochore-microtubule attachment before anaphase onset", "Cytokinesis completion", "Cell size"],
    answer: 1,
    explanation: "The SAC prevents anaphase until all chromosomes achieve proper bipolar attachment to the mitotic spindle. Unattached kinetochores generate a 'wait signal' through the mitotic checkpoint complex (MCC: MAD2, BUBR1, BUB3, CDC20) that inhibits the anaphase-promoting complex/cyclosome (APC/C). SAC defects cause chromosome missegregation and aneuploidy — a hallmark of cancer. However, complete SAC loss is lethal, so cancer cells typically have weakened but functional SAC."
  },
  {
    id: 25,
    question: "Cyclin D1 overexpression in cancer is significant because it:",
    options: ["Inhibits cell proliferation", "Drives G1→S progression by activating CDK4/6 and promoting Rb phosphorylation", "Induces apoptosis", "Activates p53"],
    answer: 1,
    explanation: "Cyclin D1 (CCND1) is a key mitogenic sensor — its expression is induced by growth factor signaling (RAS/MAPK, PI3K/AKT, Wnt). Cyclin D1 binds and activates CDK4/6, initiating Rb phosphorylation and G1→S transition. CCND1 is amplified in breast cancer (~15-20%), mantle cell lymphoma (t(11;14)), head and neck squamous cell carcinoma, and esophageal cancer. Its overexpression bypasses normal mitogenic requirements."
  },
  {
    id: 26,
    question: "The anaphase-promoting complex/cyclosome (APC/C) is an E3 ubiquitin ligase that:",
    options: ["Replicates DNA", "Targets securin and mitotic cyclins for degradation, enabling sister chromatid separation and mitotic exit", "Repairs DNA damage", "Synthesizes cyclin D1"],
    answer: 1,
    explanation: "APC/C (with co-activator CDC20 or CDH1) ubiquitinates key substrates for proteasomal degradation: securin (releasing separase to cleave cohesin, enabling sister chromatid separation) and cyclin B (inactivating CDK1 for mitotic exit). APC/C-CDH1 remains active in G1, keeping cyclin levels low. Dysregulation of APC/C contributes to chromosomal instability in cancer."
  },
  {
    id: 27,
    question: "ATM kinase is activated by:",
    options: ["Single-stranded DNA", "DNA double-strand breaks", "Stalled replication forks", "Oxidative stress only"],
    answer: 1,
    explanation: "ATM (ataxia telangiectasia mutated) is recruited to DNA double-strand breaks (DSBs) by the MRN complex (MRE11-RAD50-NBS1). DSBs trigger ATM autophosphorylation and monomerization (activating the kinase). Activated ATM phosphorylates >700 substrates including H2AX (γH2AX), CHK2, p53, BRCA1, and MDM2, orchestrating the DNA damage response (cell cycle arrest, repair, or apoptosis). ATM mutations cause ataxia-telangiectasia and cancer predisposition."
  },
  {
    id: 28,
    question: "WEE1 kinase inhibition is being explored as a cancer therapy because:",
    options: ["It activates p53", "It forces cells with DNA damage into premature mitosis, causing mitotic catastrophe, particularly in p53-deficient tumors", "It blocks angiogenesis", "It induces differentiation"],
    answer: 1,
    explanation: "WEE1 kinase phosphorylates and inhibits CDK1-cyclin B, maintaining the G2/M checkpoint. Inhibiting WEE1 (e.g., adavosertib) forces cells with unrepaired DNA damage into mitosis, causing mitotic catastrophe and cell death. This strategy exploits synthetic lethality in p53-deficient tumors that rely on the G2/M checkpoint for survival (having lost the G1/S checkpoint through p53 loss). WEE1 inhibitors are in clinical trials for ovarian, endometrial, and other cancers."
  },
  {
    id: 29,
    question: "The p16/INK4a-CDK4/6-Rb pathway is disrupted in the majority of human cancers through:",
    options: ["Only Rb mutations", "Various mechanisms including p16 methylation/deletion, CDK4/6 amplification, cyclin D1 overexpression, or Rb loss", "Only CDK4 amplification", "Only cyclin D1 mutation"],
    answer: 1,
    explanation: "This pathway is inactivated in >90% of cancers through mutually exclusive alterations: (1) p16/CDKN2A deletion or promoter methylation (removing CDK4/6 inhibition), (2) CDK4/6 amplification or activating mutations, (3) cyclin D1 (CCND1) amplification, or (4) RB1 deletion/mutation. These events all converge on the same outcome — constitutive Rb phosphorylation and E2F release, promoting uncontrolled G1→S progression."
  },
  {
    id: 30,
    question: "Aurora kinases (Aurora A and B) are therapeutic targets in cancer because they:",
    options: ["Regulate DNA methylation", "Control mitotic spindle assembly, chromosome segregation, and cytokinesis", "Activate DNA repair pathways", "Promote cell differentiation"],
    answer: 1,
    explanation: "Aurora A regulates centrosome maturation, mitotic spindle assembly, and mitotic entry. Aurora B (part of the chromosomal passenger complex) ensures correct kinetochore-microtubule attachment, activates the SAC, and regulates cytokinesis. Overexpression of Aurora kinases (common in breast, colon, pancreatic, and ovarian cancers) causes centrosome amplification, spindle defects, and aneuploidy. Aurora kinase inhibitors (alisertib) are in clinical trials."
  },

  // ===== APOPTOSIS & CELL DEATH (Q31–Q40) =====
  {
    id: 31,
    question: "The intrinsic (mitochondrial) pathway of apoptosis is triggered by:",
    options: ["Death receptor ligands (FasL, TRAIL)", "Intracellular stress signals (DNA damage, growth factor withdrawal, oncogene activation)", "Granzyme B from cytotoxic T cells", "Complement activation"],
    answer: 1,
    explanation: "The intrinsic pathway responds to intracellular stress: DNA damage, oxidative stress, ER stress, growth factor deprivation, and oncogene activation. These signals activate pro-apoptotic BCL-2 family members (BAX, BAK), which oligomerize on the outer mitochondrial membrane, forming pores that release cytochrome c. Cytochrome c binds APAF-1 to form the apoptosome, activating caspase-9 and downstream executioner caspases (caspase-3, -7)."
  },
  {
    id: 32,
    question: "BCL-2 was first identified as an oncogene in:",
    options: ["Chronic myelogenous leukemia", "Follicular lymphoma with t(14;18)", "Burkitt lymphoma", "Acute promyelocytic leukemia"],
    answer: 1,
    explanation: "BCL-2 (B-cell lymphoma 2) was discovered through the t(14;18) translocation in follicular lymphoma, which places BCL-2 under control of the IgH enhancer. Unlike classic oncogenes that promote proliferation, BCL-2 promotes tumorigenesis by preventing apoptosis — allowing cells to survive that should die. This was the first demonstration that blocking cell death (not just promoting growth) contributes to cancer. Venetoclax (BCL-2 inhibitor) targets this dependency."
  },
  {
    id: 33,
    question: "Venetoclax is a targeted therapy that works by:",
    options: ["Inhibiting tyrosine kinases", "Selectively inhibiting BCL-2, releasing pro-apoptotic proteins to trigger mitochondrial apoptosis", "Blocking PD-1", "Inhibiting angiogenesis"],
    answer: 1,
    explanation: "Venetoclax is a BH3 mimetic that selectively binds BCL-2, displacing pro-apoptotic BH3-only proteins (BIM, BID) and freeing BAX/BAK to oligomerize and permeabilize the outer mitochondrial membrane. This triggers the intrinsic apoptotic cascade. Venetoclax is FDA-approved for CLL (with rituximab or obinutuzumab) and AML (with azacitidine or decitabine), demonstrating the therapeutic potential of directly targeting anti-apoptotic proteins."
  },
  {
    id: 34,
    question: "The extrinsic apoptosis pathway is initiated by:",
    options: ["Cytochrome c release from mitochondria", "Binding of death ligands (FasL, TNF, TRAIL) to death receptors (Fas, TNFR1, DR4/5) on the cell surface", "p53 activation", "Caspase-9 activation"],
    answer: 1,
    explanation: "The extrinsic pathway begins when death ligands bind their cognate death receptors (type I transmembrane proteins with intracellular death domains). This recruits FADD (Fas-associated death domain) and procaspase-8, forming the death-inducing signaling complex (DISC). Caspase-8 is activated by proximity-induced dimerization at the DISC and directly activates executioner caspases-3/-7. In type II cells, caspase-8 also cleaves BID (tBID), amplifying the signal through the mitochondrial pathway."
  },
  {
    id: 35,
    question: "Survivin (BIRC5) is an anti-apoptotic protein that is:",
    options: ["Expressed in all normal adult tissues", "Highly expressed in most cancers but virtually absent from normal differentiated tissues, making it an attractive therapeutic target", "A pro-apoptotic BCL-2 family member", "A death receptor ligand"],
    answer: 1,
    explanation: "Survivin is the smallest member of the inhibitor of apoptosis (IAP) family. It is highly expressed during embryonic development but virtually absent in normal differentiated adult tissues, while being re-expressed in nearly all cancer types. Survivin inhibits apoptosis (by interfering with caspase activation) and promotes mitotic progression (as part of the chromosomal passenger complex). This cancer-specific expression makes it an attractive therapeutic target and biomarker."
  },
  {
    id: 36,
    question: "MDM2 is a negative regulator of p53 that:",
    options: ["Phosphorylates p53", "Ubiquitinates p53, targeting it for proteasomal degradation", "Methylates p53", "Acetylates p53"],
    answer: 1,
    explanation: "MDM2 (murine double minute 2) is an E3 ubiquitin ligase that binds p53, ubiquitinates it, and promotes its proteasomal degradation, maintaining low p53 levels in unstressed cells. MDM2 is also a transcriptional target of p53, creating a negative feedback loop. MDM2 amplification or overexpression (found in sarcomas, glioblastoma, and other cancers) functionally inactivates p53 without TP53 mutations. MDM2 inhibitors (nutlins, idasanutlin) are in clinical development."
  },
  {
    id: 37,
    question: "Ferroptosis is a form of regulated cell death characterized by:",
    options: ["Caspase activation and DNA laddering", "Iron-dependent lipid peroxidation leading to membrane damage", "Cell swelling and membrane rupture (necrosis)", "Formation of autophagosomes"],
    answer: 1,
    explanation: "Ferroptosis is a non-apoptotic, iron-dependent cell death driven by lethal accumulation of lipid peroxides. It is inhibited by GPX4 (glutathione peroxidase 4) and the cystine/glutamate antiporter (system Xc-). Cancer cells with certain oncogenic profiles (RAS-mutant, mesenchymal state) may be particularly vulnerable to ferroptosis induction. Therapeutic exploitation of ferroptosis is an active area of cancer research."
  },
  {
    id: 38,
    question: "Necroptosis differs from apoptosis in that it:",
    options: ["Is always accidental cell death", "Is a programmed form of necrotic cell death mediated by RIPK1/RIPK3/MLKL that triggers inflammation", "Requires caspase activation", "Does not involve any kinase signaling"],
    answer: 1,
    explanation: "Necroptosis is a regulated necrotic cell death pathway activated when caspase-8 is inhibited or absent. TNF signaling activates RIPK1, which phosphorylates RIPK3, which phosphorylates MLKL. Phosphorylated MLKL oligomerizes and translocates to the plasma membrane, forming pores causing cell swelling and lysis. Unlike apoptosis (immunologically silent), necroptosis releases DAMPs that trigger inflammation and immune activation, which can be pro- or anti-tumorigenic."
  },
  {
    id: 39,
    question: "The role of autophagy in cancer is:",
    options: ["Always tumor promoting", "Always tumor suppressing", "Context-dependent — tumor suppressive in early stages but can promote survival in established tumors", "Irrelevant to cancer biology"],
    answer: 2,
    explanation: "Autophagy has a dual role in cancer: (1) Tumor suppressive — autophagy removes damaged organelles and prevents accumulation of toxic aggregates, ROS, and genomic instability (Beclin-1/BECN1 is a haplo-insufficient tumor suppressor). (2) Tumor promoting — in established tumors, autophagy provides nutrients during metabolic stress, helps survive hypoxia, and promotes resistance to chemotherapy/radiation. This context-dependency complicates therapeutic targeting."
  },
  {
    id: 40,
    question: "Evasion of apoptosis by cancer cells can occur through all of the following mechanisms EXCEPT:",
    options: ["BCL-2 overexpression", "Loss of p53 function", "Upregulation of death receptor expression", "Overexpression of IAP (inhibitor of apoptosis) proteins"],
    answer: 2,
    explanation: "Cancer cells evade apoptosis by: (1) overexpressing anti-apoptotic proteins (BCL-2, BCL-XL, MCL-1), (2) losing p53 (removing a major apoptotic trigger), (3) overexpressing IAPs (survivin, XIAP), (4) downregulating death receptors or pro-apoptotic proteins (BAX, BIM), and (5) activating survival signaling (PI3K/AKT). Upregulation of death receptors would promote (not evade) apoptosis."
  },

  // ===== DNA DAMAGE RESPONSE & REPAIR IN CANCER (Q41–Q50) =====
  {
    id: 41,
    question: "BRCA1 and BRCA2 are essential for which DNA repair pathway?",
    options: ["Mismatch repair (MMR)", "Nucleotide excision repair (NER)", "Homologous recombination repair (HRR) of double-strand breaks", "Base excision repair (BER)"],
    answer: 2,
    explanation: "BRCA1 participates in DNA damage signaling and end resection at DSBs, while BRCA2 directly loads RAD51 recombinase onto single-stranded DNA to facilitate strand invasion and homologous recombination repair. Loss of BRCA1/2 impairs HRR, forcing cells to use error-prone pathways (NHEJ, microhomology-mediated end joining), leading to genomic instability, chromosomal rearrangements, and cancer predisposition (breast, ovarian, prostate, pancreatic)."
  },
  {
    id: 42,
    question: "PARP inhibitors exploit synthetic lethality in BRCA-deficient tumors by:",
    options: ["Restoring BRCA function", "Blocking base excision repair, causing replication fork collapse that requires HRR — which is absent in BRCA-mutant cells", "Inhibiting mismatch repair", "Activating p53-dependent apoptosis"],
    answer: 1,
    explanation: "PARP1 repairs single-strand breaks (SSBs) via base excision repair. PARP inhibition causes SSBs to persist, which collapse into DSBs during replication. Normal cells repair these DSBs via HRR, but BRCA-deficient cells cannot, leading to lethal genomic instability. Additionally, PARP inhibitors trap PARP1 on DNA, creating cytotoxic PARP-DNA complexes. This synthetic lethality makes PARP inhibitors (olaparib, niraparib, rucaparib, talazoparib) selectively toxic to HR-deficient tumors."
  },
  {
    id: 43,
    question: "Mismatch repair (MMR) deficiency in cancer leads to:",
    options: ["Chromosomal instability (CIN)", "Microsatellite instability (MSI) and hypermutation", "Telomere shortening", "Decreased neoantigen production"],
    answer: 1,
    explanation: "MMR (MLH1, MSH2, MSH6, PMS2) corrects base-base mismatches and insertion-deletion loops generated during DNA replication, particularly at microsatellites. MMR deficiency causes microsatellite instability (MSI-H) — expansion or contraction of repeat lengths — and a hypermutated phenotype (10-100x more mutations). MSI-H tumors generate abundant neoantigens, making them responsive to immune checkpoint inhibitors (pembrolizumab has tumor-agnostic approval for MSI-H/dMMR cancers)."
  },
  {
    id: 44,
    question: "Nucleotide excision repair (NER) removes which type of DNA lesions?",
    options: ["Single base mismatches", "Bulky helix-distorting adducts including UV-induced pyrimidine dimers and chemical adducts", "Double-strand breaks", "Uracil in DNA"],
    answer: 1,
    explanation: "NER recognizes and excises bulky DNA lesions that distort the double helix, including UV-induced cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts, chemical adducts (benzo[a]pyrene, cisplatin crosslinks), and oxidative lesions. NER excises a ~25-30 nt oligonucleotide containing the lesion. Defective NER causes xeroderma pigmentosum (XP), with >1000-fold increased skin cancer risk from UV sensitivity."
  },
  {
    id: 45,
    question: "The Fanconi anemia (FA) pathway is critical for repair of:",
    options: ["Single base mismatches", "Interstrand DNA crosslinks (ICLs)", "Telomere erosion", "Histone modifications"],
    answer: 1,
    explanation: "The FA pathway coordinates repair of interstrand crosslinks (ICLs), which covalently link both DNA strands and block replication and transcription. The FA core complex (FANCA, B, C, E, F, G, L, M) monoubiquitinates FANCD2 and FANCI, recruiting nucleases, translesion synthesis polymerases, and homologous recombination factors (BRCA2/FANCD1, RAD51C/FANCO, PALB2/FANCN). FA pathway defects cause bone marrow failure, congenital anomalies, and cancer susceptibility."
  },
  {
    id: 46,
    question: "Cisplatin resistance in cancer can develop through:",
    options: ["Increased NER activity only", "Multiple mechanisms including increased DNA repair, drug efflux, decreased drug uptake, and enhanced anti-apoptotic signaling", "Increased drug sensitivity", "Only reduced drug metabolism"],
    answer: 1,
    explanation: "Cisplatin resistance involves multiple mechanisms: (1) increased NER/FA pathway activity (enhanced repair of platinum-DNA adducts), (2) increased drug efflux (copper transporters ATP7A/B), (3) decreased drug uptake (reduced CTR1 expression), (4) increased glutathione/metallothionein (drug inactivation), (5) enhanced tolerance to DNA damage, (6) upregulated anti-apoptotic pathways (BCL-2, AKT), and (7) altered DNA damage signaling. Multi-mechanism resistance complicates re-sensitization strategies."
  },
  {
    id: 47,
    question: "The DNA damage sensor ATR is activated by:",
    options: ["Double-strand breaks directly", "Replication protein A (RPA)-coated single-stranded DNA at stalled replication forks", "Histone acetylation", "Telomere lengthening"],
    answer: 1,
    explanation: "ATR (ATM and Rad3-related) is recruited to RPA-coated ssDNA generated at stalled replication forks and during DSB processing (resection). ATRIP (ATR-interacting protein) mediates ATR recruitment. Activated ATR phosphorylates CHK1, stabilizing stalled forks and preventing premature mitotic entry. ATR inhibitors (ceralasertib, berzosertib) are in clinical trials, particularly for tumors with replication stress (ATM-deficient, MYC-amplified, or platinum-resistant)."
  },
  {
    id: 48,
    question: "γH2AX (phosphorylated histone H2AX) is a widely used biomarker for:",
    options: ["Gene expression", "DNA double-strand breaks", "DNA methylation", "Histone acetylation"],
    answer: 1,
    explanation: "H2AX is a histone variant phosphorylated at Ser139 (forming γH2AX) by ATM, ATR, and DNA-PKcs within minutes of DSB formation. γH2AX spreads megabases from the break site, forming microscopically visible foci that recruit repair factors. The number of γH2AX foci correlates with DSB number, making it a sensitive biomarker for DSBs in research (immunofluorescence) and clinical applications (monitoring radiation response, DNA-damaging chemotherapy effects)."
  },
  {
    id: 49,
    question: "Translesion synthesis (TLS) polymerases in cancer are characterized by:",
    options: ["High fidelity and proofreading ability", "Ability to replicate past DNA lesions but with low fidelity, introducing mutations", "Processivity equal to replicative polymerases", "Role exclusively in normal DNA replication"],
    answer: 1,
    explanation: "TLS polymerases (Pol η, ι, κ, ζ, REV1) have spacious active sites that accommodate bulky lesions, allowing replication past DNA damage that stalls replicative polymerases. However, they lack proofreading exonuclease activity and have low fidelity on undamaged templates. Pol η accurately bypasses UV-induced TT dimers (defective in XP variant), while other TLS polymerases are more error-prone. TLS contributes to both damage tolerance and mutagenesis in cancer."
  },
  {
    id: 50,
    question: "Deficiency in which DNA repair gene causes hereditary predisposition to both breast and ovarian cancer with sensitivity to platinum chemotherapy and PARP inhibitors?",
    options: ["MLH1", "BRCA1", "XPA", "APC"],
    answer: 1,
    explanation: "BRCA1 (and BRCA2) germline mutations confer lifetime risks of ~60-80% for breast cancer and ~40-60% (BRCA1) or ~15-30% (BRCA2) for ovarian cancer. BRCA-deficient tumors are sensitive to platinum agents (cisplatin, carboplatin) because they generate DNA crosslinks requiring HRR for resolution. PARP inhibitors exploit synthetic lethality in these HRR-deficient tumors. Combined platinum/PARP inhibitor strategies have significantly improved outcomes for BRCA-mutant cancers."
  }
]

export default questions
