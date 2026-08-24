const questions = [
  // ===== TUMOR MICROENVIRONMENT (Q1–Q10) =====
  {
    id: 1,
    question: "The tumor microenvironment (TME) consists of:",
    options: ["Only tumor cells", "Tumor cells, immune cells, fibroblasts, blood vessels, extracellular matrix, and signaling molecules", "Only blood vessels", "Only extracellular matrix"],
    answer: 1,
    explanation: "The TME is a complex ecosystem comprising tumor cells, immune cells (T cells, macrophages, NK cells, MDSCs, dendritic cells), cancer-associated fibroblasts (CAFs), endothelial cells (blood/lymphatic vessels), pericytes, adipocytes, extracellular matrix (ECM), and secreted factors (cytokines, chemokines, growth factors, exosomes). The TME actively shapes tumor progression, metastasis, immune evasion, and therapy response."
  },
  {
    id: 2,
    question: "Cancer-associated fibroblasts (CAFs) promote tumor progression by:",
    options: ["Inducing tumor cell apoptosis", "Remodeling ECM, secreting growth factors (HGF, SDF-1), and promoting angiogenesis and immune suppression", "Activating cytotoxic T cells", "Inhibiting angiogenesis"],
    answer: 1,
    explanation: "CAFs are activated fibroblasts that secrete growth factors (HGF, FGF, TGF-β), cytokines (IL-6, CXCL12/SDF-1), and ECM-remodeling enzymes (MMPs, LOX). They create a pro-tumorigenic niche by promoting proliferation, invasion, angiogenesis, and immunosuppression. CAFs also increase tissue stiffness through collagen deposition, creating physical barriers to drug delivery and immune cell infiltration."
  },
  {
    id: 3,
    question: "Tumor-associated macrophages (TAMs) in most solid tumors are predominantly:",
    options: ["M1-polarized (pro-inflammatory, anti-tumor)", "M2-polarized (anti-inflammatory, pro-tumor)", "Equally M1 and M2", "Neither M1 nor M2"],
    answer: 1,
    explanation: "TAMs are recruited by tumor-derived CCL2, CSF-1, and VEGF and are predominantly polarized to an M2-like phenotype by IL-4, IL-10, IL-13, and TGF-β in the TME. M2-TAMs promote tumor progression by suppressing anti-tumor immunity, promoting angiogenesis (VEGF secretion), facilitating invasion (MMP secretion), and supporting metastasis. High TAM density correlates with poor prognosis in most cancers. Reprogramming TAMs toward M1 phenotype is a therapeutic strategy."
  },
  {
    id: 4,
    question: "Myeloid-derived suppressor cells (MDSCs) in the TME function primarily to:",
    options: ["Kill tumor cells directly", "Suppress anti-tumor T-cell responses through arginase, iNOS, ROS, and immunosuppressive cytokines", "Present antigens to T cells", "Produce antibodies"],
    answer: 1,
    explanation: "MDSCs are immature myeloid cells expanded in cancer that potently suppress anti-tumor immunity. They deplete arginine (arginase-1) and tryptophan (IDO) needed for T-cell function, produce reactive oxygen/nitrogen species (ROS, NO) causing T-cell apoptosis, secrete immunosuppressive cytokines (IL-10, TGF-β), induce regulatory T cells (Tregs), and downregulate L-selectin on T cells to prevent lymph node homing. MDSC depletion enhances immunotherapy efficacy."
  },
  {
    id: 5,
    question: "Hypoxia in the tumor microenvironment promotes all of the following EXCEPT:",
    options: ["HIF-1α stabilization and VEGF expression", "Epithelial-mesenchymal transition (EMT)", "Enhanced anti-tumor immune response", "Resistance to radiation therapy"],
    answer: 2,
    explanation: "Tumor hypoxia (common due to rapid growth outpacing blood supply) stabilizes HIF-1α, activating genes for angiogenesis (VEGF), glycolysis, invasion (MMPs), and EMT. Hypoxia promotes immunosuppression by recruiting MDSCs/Tregs, upregulating PD-L1, and impairing T-cell/NK cell function. Hypoxic cells are ~3x more resistant to radiation (oxygen fixation effect). Hypoxia does NOT enhance anti-tumor immunity — it suppresses it."
  },
  {
    id: 6,
    question: "The Warburg effect describes the metabolic preference of cancer cells for:",
    options: ["Oxidative phosphorylation even in the presence of oxygen", "Aerobic glycolysis — using glycolysis even when oxygen is available", "Beta-oxidation of fatty acids", "Glutamine-independent metabolism"],
    answer: 1,
    explanation: "Otto Warburg (1924) observed that cancer cells preferentially use glycolysis followed by lactate fermentation even in the presence of sufficient oxygen (aerobic glycolysis), rather than mitochondrial oxidative phosphorylation. Though less ATP-efficient per glucose molecule, this provides biosynthetic intermediates for rapid growth, generates NAD+ for continued glycolysis, and produces lactate that acidifies the TME (promoting invasion and immune suppression). FDG-PET imaging exploits increased glucose uptake."
  },
  {
    id: 7,
    question: "Regulatory T cells (Tregs) in the TME promote tumor immune evasion by:",
    options: ["Directly killing tumor cells", "Suppressing effector T-cell responses through CTLA-4, IL-10, TGF-β, and IL-2 consumption", "Activating NK cells", "Producing anti-tumor antibodies"],
    answer: 1,
    explanation: "Tregs (CD4+CD25+FOXP3+) suppress anti-tumor immunity through multiple mechanisms: (1) CTLA-4 outcompetes CD28 for B7 ligands and removes B7 from APCs (transendocytosis), (2) secretion of immunosuppressive cytokines (IL-10, TGF-β, IL-35), (3) consumption of IL-2 (depriving effector T cells), (4) granzyme/perforin-mediated killing of effector cells, and (5) metabolic disruption via CD39/CD73 (adenosine production). Treg depletion enhances anti-tumor immunity."
  },
  {
    id: 8,
    question: "Exosomes released by tumor cells contribute to metastasis by:",
    options: ["Inducing tumor cell apoptosis", "Preparing distant pre-metastatic niches, transferring oncogenic cargo, and modulating immune responses", "Activating cytotoxic T cells at distant sites", "Delivering chemotherapy drugs to metastases"],
    answer: 1,
    explanation: "Tumor-derived exosomes (30-150 nm extracellular vesicles) carry proteins, lipids, mRNAs, miRNAs, and DNA that reprogram recipient cells. They prepare pre-metastatic niches by: (1) educating bone marrow-derived cells (BMDCs), (2) increasing vascular permeability, (3) remodeling ECM at distant sites, (4) suppressing anti-tumor immunity, and (5) transferring drug resistance factors. Exosome integrins (αvβ5 targets liver, α6β4 targets lung) determine organotropic metastasis."
  },
  {
    id: 9,
    question: "The extracellular matrix (ECM) in the TME influences cancer progression by:",
    options: ["Having no effect on tumor cells", "Providing structural support, growth factor reservoirs, mechanotransduction signals, and physical barriers or tracks for invasion", "Only serving as a passive scaffold", "Exclusively inhibiting tumor growth"],
    answer: 1,
    explanation: "The ECM is a dynamic component of the TME: (1) it provides structural scaffolding and physical resistance to growth, (2) sequesters growth factors (FGF, TGF-β, VEGF) released by MMP-mediated degradation, (3) transmits mechanical signals through integrin-mediated mechanotransduction (stiffness promotes invasion), (4) creates tracks for invasion (aligned collagen fibers), and (5) can form barriers to immune cell infiltration and drug penetration (desmoplastic stroma)."
  },
  {
    id: 10,
    question: "Lactate produced by tumor cells through the Warburg effect impacts the TME by:",
    options: ["Enhancing T-cell function", "Creating an acidic environment that suppresses immune cells, promotes invasion, and enhances angiogenesis", "Inhibiting tumor growth", "Having no effect on pH"],
    answer: 1,
    explanation: "Lactate exported via MCT4 (monocarboxylate transporter 4) acidifies the TME (pH 6.5-6.9 vs. normal 7.2-7.4). Acidic pH: (1) inhibits T-cell and NK cell cytotoxic function, (2) promotes M2 macrophage polarization, (3) activates extracellular matrix-degrading enzymes (cathepsins, MMPs), (4) promotes VEGF expression and angiogenesis, and (5) confers resistance to weak-base chemotherapy drugs. MCT inhibitors and pH-buffering strategies are therapeutic approaches."
  },

  // ===== ANGIOGENESIS (Q11–Q20) =====
  {
    id: 11,
    question: "The angiogenic switch in tumor development refers to:",
    options: ["Tumor cells becoming endothelial cells", "The shift in balance favoring pro-angiogenic factors over anti-angiogenic factors, enabling new blood vessel formation", "Blood vessel destruction", "Lymph node metastasis"],
    answer: 1,
    explanation: "Tumors cannot grow beyond ~1-2 mm³ without a blood supply. The angiogenic switch occurs when pro-angiogenic factors (VEGF, FGF, PDGF, angiopoietin-2) exceed anti-angiogenic factors (thrombospondin-1, endostatin, angiostatin). This switch is driven by hypoxia (HIF-1α→VEGF), oncogene activation (RAS, MYC), and tumor suppressor loss (p53 normally induces thrombospondin-1). The switch enables exponential tumor growth, invasion, and metastatic dissemination."
  },
  {
    id: 12,
    question: "VEGF (vascular endothelial growth factor) promotes angiogenesis primarily by:",
    options: ["Inhibiting endothelial cell proliferation", "Binding VEGFR2 on endothelial cells, stimulating proliferation, migration, survival, and vascular permeability", "Constricting blood vessels", "Promoting platelet aggregation only"],
    answer: 1,
    explanation: "VEGF-A is the master regulator of tumor angiogenesis. It binds VEGFR2 (KDR/Flk-1) on endothelial cells, activating downstream signaling (PLCγ/PKC, PI3K/AKT, MAPK) that promotes: endothelial cell proliferation, migration, survival, and tube formation. VEGF also increases vascular permeability (originally called vascular permeability factor/VPF), facilitating extravasation of plasma proteins that form a provisional ECM for angiogenesis."
  },
  {
    id: 13,
    question: "Bevacizumab (Avastin) is an anti-angiogenic therapy that works by:",
    options: ["Inhibiting VEGF receptor tyrosine kinase activity", "Neutralizing circulating VEGF-A with a monoclonal antibody, preventing VEGFR activation", "Blocking angiopoietin-2", "Directly killing endothelial cells"],
    answer: 1,
    explanation: "Bevacizumab is a humanized monoclonal antibody that binds and neutralizes VEGF-A, preventing it from activating VEGFR1 and VEGFR2. This inhibits tumor angiogenesis, normalizes remaining tumor vasculature (improving drug delivery), and reduces vascular permeability. Bevacizumab is FDA-approved for colorectal, lung, renal, ovarian, cervical cancers, and glioblastoma, typically combined with chemotherapy."
  },
  {
    id: 14,
    question: "Multi-kinase inhibitors targeting VEGFR (sorafenib, sunitinib, pazopanib) act by:",
    options: ["Binding extracellular VEGF", "Blocking the intracellular tyrosine kinase domain of VEGF receptors and other kinases", "Promoting vascular maturation", "Stimulating anti-angiogenic factor production"],
    answer: 1,
    explanation: "Multi-kinase inhibitors competitively bind the ATP-binding pocket of VEGFR1/2/3 and other receptor tyrosine kinases (PDGFRα/β, c-KIT, FLT3, RET, RAF). By blocking multiple kinases, they inhibit tumor angiogenesis, tumor cell proliferation (when tumor cells express target kinases), and stromal support. Sorafenib is used in hepatocellular and renal carcinoma; sunitinib in renal cell carcinoma and GIST."
  },
  {
    id: 15,
    question: "Vascular normalization as a concept in anti-angiogenic therapy proposes that:",
    options: ["All tumor vessels should be destroyed", "Judicious anti-angiogenic therapy can transiently normalize chaotic tumor vasculature, improving drug delivery and oxygenation", "Tumor vessels are identical to normal vessels", "Anti-angiogenic therapy only works by starving tumors"],
    answer: 1,
    explanation: "Rakesh Jain's vascular normalization hypothesis proposes that anti-angiogenic therapy can transiently 'normalize' the abnormal tumor vasculature (leaky, tortuous, poorly perfused), creating a window of improved blood flow, drug delivery, and oxygenation. This explains synergy between anti-angiogenics and chemotherapy/radiation. The normalization window is dose- and time-dependent — excessive anti-angiogenic therapy can cause vessel pruning and increased hypoxia."
  },
  {
    id: 16,
    question: "HIF-1α (hypoxia-inducible factor 1-alpha) activates transcription of which target genes?",
    options: ["Only cell cycle genes", "VEGF, GLUT1, hexokinase, EPO, LOX, and other genes promoting angiogenesis, glycolysis, and invasion", "Only DNA repair genes", "Only apoptotic genes"],
    answer: 1,
    explanation: "HIF-1α is stabilized under hypoxia (when PHD-mediated hydroxylation and VHL-mediated degradation are inhibited) and heterodimerizes with HIF-1β to activate >100 target genes. Key targets include: VEGF (angiogenesis), GLUT1/GLUT3 (glucose uptake), glycolytic enzymes (hexokinase, PFK), LDHA (lactate production), EPO (erythropoiesis), LOX (collagen crosslinking, pre-metastatic niche), and TWIST/SNAIL (EMT)."
  },
  {
    id: 17,
    question: "Vasculogenic mimicry in aggressive tumors refers to:",
    options: ["Normal angiogenesis", "Formation of vascular-like channels by tumor cells themselves, independent of endothelial cells", "Lymphangiogenesis", "Vasculitis caused by tumors"],
    answer: 1,
    explanation: "Vasculogenic mimicry (VM) describes the ability of aggressive tumor cells (particularly melanoma, glioblastoma, ovarian, breast cancers) to form functional vascular-like channels lined by tumor cells rather than endothelial cells. VM channels connect to the host vasculature and can provide blood supply independent of classical angiogenesis. VM is associated with poor prognosis and may contribute to anti-angiogenic therapy resistance."
  },
  {
    id: 18,
    question: "Resistance to anti-angiogenic therapy can develop through:",
    options: ["Only increased VEGF production", "Upregulation of alternative pro-angiogenic pathways (FGF, PDGF, angiopoietin), vessel co-option, and recruitment of pro-angiogenic bone marrow cells", "Decreased tumor growth rate only", "Only improved drug metabolism"],
    answer: 1,
    explanation: "Anti-VEGF resistance mechanisms include: (1) upregulation of alternative angiogenic factors (FGF2, PlGF, PDGF, angiopoietins), (2) vessel co-option (tumors grow along existing blood vessels without neoangiogenesis), (3) vascular mimicry, (4) recruitment of bone marrow-derived pro-angiogenic cells, (5) increased invasiveness (promoting metastasis to escape the anti-angiogenic environment), and (6) selection of hypoxia-tolerant tumor clones."
  },
  {
    id: 19,
    question: "Lymphangiogenesis in cancer is primarily driven by:",
    options: ["VEGF-A", "VEGF-C and VEGF-D acting through VEGFR-3", "FGF", "PDGF"],
    answer: 1,
    explanation: "VEGF-C and VEGF-D are the primary lymphangiogenic growth factors, signaling through VEGFR-3 (expressed on lymphatic endothelial cells). Tumor-induced lymphangiogenesis creates new lymphatic vessels that facilitate lymphatic invasion and lymph node metastasis. High VEGF-C/D expression and intratumoral lymphatic vessel density correlate with lymph node metastasis in many solid tumors."
  },
  {
    id: 20,
    question: "The tip cell–stalk cell model of angiogenic sprouting involves:",
    options: ["All endothelial cells behaving identically", "Delta-Notch signaling determining tip cells (migratory, filopodia-bearing) versus stalk cells (proliferative, lumen-forming)", "Only VEGF signaling without Notch", "Random endothelial cell migration"],
    answer: 1,
    explanation: "In sprouting angiogenesis, VEGF-responsive endothelial cells at the vessel front become tip cells — extending filopodia to guide vessel growth. Tip cells express high Delta-like ligand 4 (DLL4), which activates Notch signaling in neighboring cells, suppressing the tip cell phenotype and specifying them as stalk cells (which proliferate and form the vessel lumen). This lateral inhibition mechanism ensures orderly branching. DLL4/Notch pathway inhibition causes excessive non-functional vessel sprouting."
  },

  // ===== INVASION & METASTASIS (Q21–Q30) =====
  {
    id: 21,
    question: "The metastatic cascade includes the following sequential steps:",
    options: ["Angiogenesis only", "Local invasion → intravasation → survival in circulation → extravasation → colonization at distant sites", "Only lymph node involvement", "Random cell dispersal without specific steps"],
    answer: 1,
    explanation: "Metastasis is a multi-step process: (1) local invasion through basement membrane and ECM, (2) intravasation into blood/lymphatic vessels, (3) survival in circulation (resisting anoikis, shear stress, immune attack), (4) arrest at distant capillary beds, (5) extravasation through endothelium, and (6) colonization (establishment of micrometastases and growth into macrometastases). Each step is rate-limiting, making metastasis inherently inefficient (<0.01% of circulating tumor cells form metastases)."
  },
  {
    id: 22,
    question: "Epithelial-mesenchymal transition (EMT) in cancer promotes:",
    options: ["Stronger cell-cell adhesion", "Loss of epithelial polarity and adhesion, acquisition of migratory and invasive mesenchymal properties", "Increased E-cadherin expression", "Reduced invasive capacity"],
    answer: 1,
    explanation: "EMT is a developmental program reactivated in cancer where epithelial cells lose E-cadherin (cell adhesion), apical-basal polarity, and cell-cell junctions while gaining N-cadherin, vimentin, fibronectin, and matrix metalloproteinase expression. EMT transcription factors (SNAIL, SLUG, TWIST, ZEB1/2) drive this transition. EMT promotes invasion, intravasation, and resistance to apoptosis and chemotherapy. At metastatic sites, the reverse process (MET) enables colonization."
  },
  {
    id: 23,
    question: "E-cadherin is considered a tumor suppressor because:",
    options: ["It promotes cell migration", "Its loss disrupts adherens junctions, enabling cell dissociation, invasion, and metastasis", "It activates oncogenic signaling", "It induces angiogenesis"],
    answer: 1,
    explanation: "E-cadherin (CDH1) is a calcium-dependent cell adhesion molecule that forms adherens junctions between epithelial cells. It maintains tissue architecture and suppresses invasion. E-cadherin loss (through CDH1 mutation, promoter methylation, or transcriptional repression by SNAIL/ZEB) is a hallmark of EMT and is associated with invasive lobular breast carcinoma, diffuse gastric cancer (hereditary with CDH1 germline mutations), and increased metastatic potential."
  },
  {
    id: 24,
    question: "Matrix metalloproteinases (MMPs) contribute to cancer progression by:",
    options: ["Strengthening the basement membrane", "Degrading ECM components, releasing sequestered growth factors, and creating paths for invasion", "Inhibiting tumor cell migration", "Promoting cell-cell adhesion"],
    answer: 1,
    explanation: "MMPs are zinc-dependent endopeptidases that degrade ECM components (collagen, laminin, fibronectin). In cancer: (1) MMP-2 and MMP-9 degrade type IV collagen (basement membrane), enabling invasion, (2) MMPs release ECM-bound growth factors (VEGF, TGF-β, FGF), (3) MMPs cleave cell surface molecules affecting adhesion and signaling, and (4) MMP-mediated ECM remodeling creates invasion tracks. Despite promising preclinical data, MMP inhibitors failed in clinical trials due to complexity and off-target effects."
  },
  {
    id: 25,
    question: "Seed and soil hypothesis of metastasis proposes that:",
    options: ["Metastasis is entirely random", "Specific tumor cells (seeds) preferentially metastasize to organs with compatible microenvironments (soil)", "All organs are equally susceptible to metastasis", "Only lymph node metastasis is organ-specific"],
    answer: 1,
    explanation: "Stephen Paget's 'seed and soil' hypothesis (1889) proposes that metastatic cells (seeds) colonize specific organs (soil) based on compatibility between tumor cell properties and organ microenvironment features. This explains organ tropism: breast cancer metastasizes to bone, liver, lung, brain; prostate cancer to bone; colorectal cancer to liver. Modern understanding includes pre-metastatic niche formation, organ-specific chemokines/adhesion molecules, and exosome-mediated education of distant sites."
  },
  {
    id: 26,
    question: "Circulating tumor cells (CTCs) in the bloodstream face which primary challenge?",
    options: ["Excessive nutrition", "Anoikis (detachment-induced apoptosis), shear stress, and immune-mediated killing", "Increased proliferation", "Enhanced adhesion to endothelium"],
    answer: 1,
    explanation: "CTCs face multiple survival challenges: (1) anoikis — apoptosis triggered by loss of ECM attachment (circumvented by clustering with platelets, expressing integrins, or activating FAK/PI3K/AKT), (2) hemodynamic shear stress (counteracted by platelet cloaking), (3) immune attack by NK cells and macrophages (evaded by PD-L1 expression and platelet coating that masks tumor antigens), and (4) oxidative stress. The vast majority of CTCs die in circulation (<0.01% survive to form metastases)."
  },
  {
    id: 27,
    question: "The pre-metastatic niche is established at distant organs through:",
    options: ["Random vascular damage", "Tumor-derived factors (exosomes, cytokines) that recruit bone marrow-derived cells and remodel the distant ECM before tumor cell arrival", "Surgical trauma only", "Normal wound healing"],
    answer: 1,
    explanation: "Tumors prepare distant organs for metastatic colonization by: (1) secreting exosomes with organ-specific integrins that fuse with resident cells and alter gene expression, (2) releasing factors (VEGF, PlGF, LOX) that recruit bone marrow-derived cells (BMDCs) to form cellular clusters, (3) inducing S100A8/A9 expression that creates a pro-inflammatory environment, and (4) remodeling ECM (fibronectin deposition, LOX-mediated collagen crosslinking). These changes precede and facilitate CTC colonization."
  },
  {
    id: 28,
    question: "Tumor dormancy at metastatic sites refers to:",
    options: ["Immediate rapid growth of metastases", "A state where disseminated tumor cells remain quiescent for months to years before reactivation and overt metastasis", "Complete clearance of metastatic cells", "Only lymph node dormancy"],
    answer: 1,
    explanation: "Metastatic dormancy is a clinically important phenomenon where disseminated tumor cells (DTCs) survive at distant sites in a quiescent state (G0 arrest) for prolonged periods. Dormancy mechanisms include: intrinsic cell cycle arrest (p38/ERK ratio), anti-angiogenic signaling (thrombospondin-1), immune surveillance, and supportive perivascular niches. Dormancy explains late recurrences (years-decades after primary treatment) in breast cancer, melanoma, and prostate cancer."
  },
  {
    id: 29,
    question: "Organ tropism in bone metastasis of breast cancer involves:",
    options: ["Random cell distribution", "RANKL/RANK signaling, CXCR4/CXCL12 chemokine axis, and PTHrP-mediated osteolysis creating a vicious cycle", "Only physical trapping in bone marrow sinusoids", "Only IGF signaling"],
    answer: 1,
    explanation: "Bone metastasis involves a 'vicious cycle': (1) tumor cells expressing CXCR4 home to bone marrow (which produces CXCL12/SDF-1), (2) tumor-derived PTHrP stimulates osteoblasts to produce RANKL, (3) RANKL activates osteoclasts via RANK, increasing bone resorption, (4) bone resorption releases stored growth factors (TGF-β, IGF-1, calcium) that further stimulate tumor growth and PTHrP production. Denosumab (anti-RANKL) and bisphosphonates (zoledronic acid) target this cycle."
  },
  {
    id: 30,
    question: "Collective cell migration in cancer invasion refers to:",
    options: ["Individual cell migration only", "Groups of tumor cells invading together while maintaining cell-cell junctions", "Only mesenchymal-type single-cell invasion", "Immune cell co-migration with tumor cells"],
    answer: 1,
    explanation: "Collective cell migration involves coordinated movement of cell groups maintaining cell-cell adhesion (through E-cadherin, desmosomal junctions). Leader cells at the front exhibit mesenchymal features (MMP expression, cytoskeletal protrusions) while follower cells maintain epithelial characteristics. This mode is observed in many solid tumors (squamous cell carcinoma, colorectal, breast cancer) and is often more efficient than single-cell migration, maintaining paracrine survival signaling and protecting interior cells from immune attack."
  },

  // ===== CANCER IMMUNOLOGY (Q31–Q40) =====
  {
    id: 31,
    question: "The cancer immunity cycle includes which sequential steps?",
    options: ["Only antibody production", "Tumor antigen release → antigen presentation → T-cell priming → T-cell trafficking → tumor infiltration → tumor cell recognition → tumor cell killing", "Only innate immune activation", "Only complement activation"],
    answer: 1,
    explanation: "Chen and Mellman's cancer immunity cycle (2013) describes: (1) tumor cell death releasing antigens, (2) antigen uptake by dendritic cells, (3) antigen presentation and T-cell priming in lymph nodes, (4) effector T-cell trafficking to tumor, (5) tumor infiltration through vasculature and stroma, (6) T-cell recognition of tumor cells (MHC-I/TCR interaction), and (7) killing of tumor cells, releasing more antigens (completing the cycle). Each step can be targeted therapeutically."
  },
  {
    id: 32,
    question: "Immune checkpoint PD-1/PD-L1 interaction results in:",
    options: ["T-cell activation and proliferation", "Inhibition of T-cell effector function, promoting tumor immune evasion", "B-cell maturation", "NK cell activation"],
    answer: 1,
    explanation: "PD-1 (programmed death-1) on activated T cells binds PD-L1 (B7-H1) on tumor cells and antigen-presenting cells. This interaction recruits SHP-2 phosphatase, which dephosphorylates TCR signaling molecules, suppressing T-cell proliferation, cytokine production, and cytotoxicity. Tumor cells upregulate PD-L1 (constitutively via oncogenic signaling or adaptively in response to IFN-γ) to evade immune destruction. Anti-PD-1/PD-L1 antibodies block this inhibitory interaction, reactivating anti-tumor T cells."
  },
  {
    id: 33,
    question: "CTLA-4 functions as an immune checkpoint by:",
    options: ["Activating T cells at the tumor site", "Competing with CD28 for B7 ligands on APCs and delivering inhibitory signals, primarily during T-cell priming", "Promoting antibody production", "Enhancing NK cell cytotoxicity"],
    answer: 1,
    explanation: "CTLA-4 (CD152) is upregulated on activated T cells and outcompetes the co-stimulatory receptor CD28 for B7-1 (CD80) and B7-2 (CD86) on antigen-presenting cells, as CTLA-4 has ~20-fold higher affinity for B7. CTLA-4 delivers inhibitory signals and also removes B7 from APCs via transendocytosis. CTLA-4 blockade primarily enhances T-cell priming in lymph nodes. Ipilimumab (anti-CTLA-4) was the first checkpoint inhibitor approved (melanoma, 2011)."
  },
  {
    id: 34,
    question: "Neoantigens in cancer arise from:",
    options: ["Normal self-proteins", "Somatic mutations that create novel peptides not present in the normal proteome and not subject to central tolerance", "Viral antigens exclusively", "Embryonic antigens only"],
    answer: 1,
    explanation: "Neoantigens are novel peptides generated by somatic mutations (nonsynonymous SNVs, indels, fusions) in tumor-specific DNA. Because these peptides were never present during thymic education, the immune system has not developed tolerance to them. Neoantigens presented on MHC-I molecules can be recognized by CD8+ T cells. High neoantigen burden (correlating with TMB) predicts response to immune checkpoint inhibitors. Personalized neoantigen vaccines are in clinical development."
  },
  {
    id: 35,
    question: "Immunoediting describes the three phases of tumor-immune interaction as:",
    options: ["Initiation, promotion, progression", "Elimination, equilibrium, escape", "Innate, adaptive, memory", "Recognition, activation, effacement"],
    answer: 1,
    explanation: "Schreiber's cancer immunoediting model (2002) describes: (1) Elimination — immune system successfully destroys nascent tumor cells (immunosurveillance); (2) Equilibrium — immune system controls but does not eliminate the tumor (may last years); and (3) Escape — tumor evolves immune evasion mechanisms (antigen loss, MHC downregulation, PD-L1 upregulation, immunosuppressive TME) and grows progressively. This framework explains how the immune system both protects against and shapes cancer."
  },
  {
    id: 36,
    question: "CAR-T cell therapy involves engineering T cells to express:",
    options: ["Normal T-cell receptors", "Chimeric antigen receptors with an extracellular antigen-binding domain (scFv), transmembrane domain, and intracellular signaling domains (CD3ζ, co-stimulatory domains)", "Only CD28 co-stimulatory molecules", "B-cell receptors"],
    answer: 1,
    explanation: "CARs are synthetic receptors combining: (1) an extracellular single-chain variable fragment (scFv) that recognizes a tumor surface antigen (e.g., CD19 on B-cell malignancies), (2) a hinge/transmembrane domain, and (3) intracellular signaling domains (CD3ζ for TCR signal 1, plus co-stimulatory domains — CD28 and/or 4-1BB for persistence and function). CARs recognize antigens independent of MHC, overcoming MHC downregulation. FDA-approved for B-ALL, DLBCL, mantle cell lymphoma, follicular lymphoma, and multiple myeloma (BCMA-targeted)."
  },
  {
    id: 37,
    question: "Tumor immune evasion mechanisms include all of the following EXCEPT:",
    options: ["MHC class I downregulation", "PD-L1 upregulation", "Increased neoantigen presentation", "Secretion of immunosuppressive cytokines (TGF-β, IL-10)"],
    answer: 2,
    explanation: "Tumor immune evasion strategies include: (1) MHC-I downregulation (hiding from CD8+ T cells), (2) PD-L1 expression (inhibiting T-cell function), (3) immunosuppressive cytokines (TGF-β, IL-10, VEGF), (4) Treg/MDSC recruitment, (5) IDO-mediated tryptophan depletion, (6) antigen loss through immunoediting, and (7) impaired antigen processing. Increased neoantigen presentation would enhance (not evade) anti-tumor immunity."
  },
  {
    id: 38,
    question: "Cytokine release syndrome (CRS) in CAR-T cell therapy is caused by:",
    options: ["Allergic reaction to the viral vector", "Massive release of inflammatory cytokines (IL-6, IFN-γ, TNF-α) from activated CAR-T cells and bystander immune cells", "Tumor lysis syndrome only", "Graft-versus-host disease"],
    answer: 1,
    explanation: "CRS results from rapid, supraphysiological activation of CAR-T cells upon encountering target antigen, triggering massive cytokine release (IL-6, IFN-γ, TNF-α, IL-1, IL-10) from CAR-T cells and activated macrophages. Symptoms range from fever and myalgias (grade 1-2) to hypotension, capillary leak, organ dysfunction, and hemodynamic instability (grade 3-4). Tocilizumab (anti-IL-6 receptor) is the standard treatment for severe CRS."
  },
  {
    id: 39,
    question: "Bispecific T-cell engagers (BiTEs) like blinatumomab work by:",
    options: ["Activating NK cells", "Simultaneously binding a tumor antigen (CD19) and CD3 on T cells, forming a cytolytic synapse", "Blocking PD-1", "Delivering chemotherapy to tumor cells"],
    answer: 1,
    explanation: "BiTEs are bispecific antibody constructs with two linked scFvs — one targeting a tumor antigen (CD19 for blinatumomab) and one targeting CD3ε on T cells. This physically bridges T cells to tumor cells, forming an immunological synapse that activates T-cell cytotoxicity independent of TCR specificity or MHC. Blinatumomab is FDA-approved for B-ALL. Newer formats include longer half-life bispecifics targeting CD20, BCMA, GPRC5D, and FcRH5."
  },
  {
    id: 40,
    question: "Immune-related adverse events (irAEs) from checkpoint inhibitors are caused by:",
    options: ["Direct drug toxicity", "Unleashing autoimmune-like T-cell responses against normal tissues due to loss of immune checkpoint regulation", "Allergic hypersensitivity", "Drug-drug interactions"],
    answer: 1,
    explanation: "Checkpoint inhibitors remove physiological brakes on T-cell activation, which can cause autoimmune-like inflammation in normal tissues. Common irAEs include: dermatitis, colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis, myocarditis, and nephritis. irAEs reflect the same mechanism of action responsible for anti-tumor efficacy. Management involves corticosteroids and immunosuppression for severe cases. irAE occurrence may correlate with anti-tumor response."
  },

  // ===== CANCER METABOLISM (Q41–Q50) =====
  {
    id: 41,
    question: "Glutamine is important for cancer cell metabolism because it:",
    options: ["Is only used for protein synthesis", "Provides carbon and nitrogen for biosynthesis, fuels the TCA cycle (anaplerosis), and maintains redox balance", "Is not utilized by most cancer cells", "Only contributes to fatty acid synthesis"],
    answer: 1,
    explanation: "Many cancer cells are 'glutamine addicted' — glutamine serves as: (1) an anaplerotic substrate (glutaminolysis: glutamine→glutamate→α-ketoglutarate→TCA cycle), (2) a nitrogen donor for nucleotide and amino acid biosynthesis, (3) a precursor for glutathione (antioxidant defense), (4) an activator of mTORC1, and (5) a carbon source for fatty acid synthesis via reductive carboxylation. MYC-driven cancers are particularly glutamine-dependent."
  },
  {
    id: 42,
    question: "Oncometabolites such as 2-hydroxyglutarate (2-HG) are produced by:",
    options: ["Normal metabolic enzymes", "Mutant IDH1/IDH2 enzymes that gain a neomorphic activity converting α-ketoglutarate to 2-HG", "KRAS mutations", "p53 mutations"],
    answer: 1,
    explanation: "IDH1 (cytoplasmic) and IDH2 (mitochondrial) mutations (R132H most common) create a neomorphic enzyme activity that converts α-ketoglutarate to the oncometabolite 2-hydroxyglutarate (2-HG). 2-HG competitively inhibits α-KG-dependent dioxygenases including TET2 (DNA demethylation), JmjC histone demethylases, and PHDs (HIF regulation), causing DNA/histone hypermethylation and a CpG island methylator phenotype (G-CIMP). IDH mutations are found in gliomas, AML, cholangiocarcinoma. IDH inhibitors (ivosidenib, enasidenib) are FDA-approved."
  },
  {
    id: 43,
    question: "FDG-PET (fluorodeoxyglucose positron emission tomography) in oncology exploits which metabolic feature of cancer?",
    options: ["Decreased oxygen consumption", "Increased glucose uptake due to upregulated glucose transporters and aerobic glycolysis (Warburg effect)", "Increased fatty acid oxidation", "Decreased amino acid uptake"],
    answer: 1,
    explanation: "FDG is a glucose analog taken up by cells via glucose transporters (GLUT1, upregulated in many cancers) and phosphorylated by hexokinase but cannot be further metabolized, trapping it intracellularly. Cancer cells with high glycolytic rates (Warburg effect) accumulate more FDG, producing a PET signal. FDG-PET is used for staging, restaging, treatment response assessment, and detection of recurrence. Some tumors (prostate, low-grade lymphoma, well-differentiated neuroendocrine) may be FDG-negative."
  },
  {
    id: 44,
    question: "The pentose phosphate pathway (PPP) is important in cancer cells because it:",
    options: ["Only generates ATP", "Produces NADPH for reductive biosynthesis and antioxidant defense, and ribose-5-phosphate for nucleotide synthesis", "Degrades glucose completely to CO2", "Is downregulated in rapidly proliferating cells"],
    answer: 1,
    explanation: "The PPP branches from glycolysis at glucose-6-phosphate. The oxidative branch generates NADPH (used for fatty acid/nucleotide synthesis and glutathione reduction for ROS defense). The non-oxidative branch produces ribose-5-phosphate for nucleotide biosynthesis. Cancer cells often upregulate PPP enzymes (G6PD, transketolase) to support the high biosynthetic and antioxidant demands of rapid proliferation."
  },
  {
    id: 45,
    question: "Fatty acid synthesis is upregulated in many cancers through overexpression of:",
    options: ["Carnitine palmitoyltransferase I", "Fatty acid synthase (FASN)", "Hormone-sensitive lipase", "Beta-oxidation enzymes"],
    answer: 1,
    explanation: "FASN catalyzes de novo synthesis of palmitate from acetyl-CoA and malonyl-CoA using NADPH. Cancer cells upregulate FASN (via SREBP1, driven by PI3K/AKT/mTOR signaling) for membrane phospholipid synthesis, lipid signaling, and energy storage. FASN is overexpressed in breast, prostate, ovarian, and endometrial cancers and correlates with poor prognosis. FASN inhibitors (TVB-2640/denifanstat) are in clinical trials."
  },
  {
    id: 46,
    question: "Serine/glycine biosynthesis is important in cancer because it:",
    options: ["Only provides structural amino acids", "Feeds one-carbon metabolism for nucleotide synthesis, methylation reactions, and redox homeostasis", "Is not required for rapidly dividing cells", "Only occurs in the liver"],
    answer: 1,
    explanation: "Serine is synthesized from the glycolytic intermediate 3-phosphoglycerate (via PHGDA, PSAT1, PSPH) and converted to glycine by SHMT1/2, donating a one-carbon unit to tetrahydrofolate. One-carbon metabolism supports: purine/thymidylate synthesis (nucleotides), SAM-dependent methylation reactions, and NADPH/glutathione production. PHGDH amplification is found in breast cancer and melanoma. Serine/glycine restriction and PHGDH inhibitors are therapeutic strategies."
  },
  {
    id: 47,
    question: "mTORC1 signaling promotes cancer cell growth by:",
    options: ["Inducing autophagy", "Activating protein synthesis (via S6K1 and 4E-BP1), lipid synthesis, and nucleotide biosynthesis while inhibiting autophagy", "Inducing cell cycle arrest", "Promoting apoptosis"],
    answer: 1,
    explanation: "mTORC1 (mechanistic target of rapamycin complex 1) is a central growth regulator activated by nutrients (amino acids), growth factors (PI3K/AKT), and energy status (AMPK). It promotes: (1) protein synthesis by phosphorylating S6K1 (ribosome biogenesis) and 4E-BP1 (cap-dependent translation), (2) lipid synthesis (SREBP activation), (3) nucleotide synthesis, and (4) inhibition of autophagy. mTOR is constitutively activated in many cancers through PTEN loss, PIK3CA mutation, or TSC loss."
  },
  {
    id: 48,
    question: "AMPK (AMP-activated protein kinase) acts as a metabolic tumor suppressor by:",
    options: ["Promoting anabolic metabolism", "Sensing energy stress and inhibiting mTORC1, cell growth, and biosynthetic pathways while promoting catabolic processes", "Activating lipid synthesis", "Promoting protein synthesis"],
    answer: 1,
    explanation: "AMPK is activated by energy stress (high AMP/ATP ratio, glucose deprivation) and functions as a metabolic checkpoint. It inhibits mTORC1 (via TSC2 phosphorylation and Raptor phosphorylation), suppresses lipid synthesis (ACC phosphorylation), activates autophagy, and induces p53-dependent cell cycle arrest. AMPK acts as a metabolic tumor suppressor — its loss (via LKB1/STK11 mutations in lung and cervical cancer) removes metabolic growth constraints."
  },
  {
    id: 49,
    question: "Tumor cells can rewire their metabolism to survive under nutrient-poor conditions through:",
    options: ["Only increasing glucose uptake", "Metabolic flexibility including autophagy, macropinocytosis, scavenging of extracellular proteins, and metabolic symbiosis with stromal cells", "Completely shutting down all metabolism", "Only using exogenous growth factors"],
    answer: 1,
    explanation: "Cancer cells exhibit remarkable metabolic plasticity: (1) autophagy recycles intracellular components, (2) macropinocytosis engulfs extracellular proteins for amino acid supply (especially in RAS-mutant cancers), (3) entosis (cannibalism of neighboring cells), (4) metabolic symbiosis (lactate produced by hypoxic tumor cells is used as fuel by oxygenated cells), and (5) lipid scavenging from the microenvironment. This flexibility enables survival during nutrient deprivation and therapy-induced stress."
  },
  {
    id: 50,
    question: "The tryptophan-kynurenine-IDO/TDO pathway in cancer metabolism contributes to:",
    options: ["Enhanced T-cell function", "Immune suppression by depleting tryptophan and generating immunosuppressive kynurenine metabolites", "Increased antigen presentation", "Enhanced NK cell cytotoxicity"],
    answer: 1,
    explanation: "IDO1 (indoleamine 2,3-dioxygenase) and TDO (tryptophan 2,3-dioxygenase) catabolize tryptophan to kynurenine. This suppresses anti-tumor immunity by: (1) depleting tryptophan (essential for T-cell proliferation, activating GCN2 kinase → T-cell anergy), (2) generating kynurenine metabolites that activate AhR (aryl hydrocarbon receptor) promoting Treg differentiation and suppressing effector T cells. IDO inhibitors were developed but epacadostat failed in a phase III melanoma trial (ECHO-301), highlighting pathway complexity."
  }
]

export default questions
