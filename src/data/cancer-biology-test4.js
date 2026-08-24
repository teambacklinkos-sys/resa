const questions = [
  // ===== TARGETED THERAPY & PRECISION ONCOLOGY (Q1–Q10) =====
  {
    id: 1,
    question: "Imatinib (Gleevec) revolutionized CML treatment by targeting:",
    options: ["VEGFR", "BCR-ABL1 tyrosine kinase ATP-binding site", "EGFR", "ALK"],
    answer: 1,
    explanation: "Imatinib is a competitive inhibitor that binds the ATP-binding pocket of ABL1 kinase in the inactive (DFG-out) conformation, blocking BCR-ABL1's constitutive tyrosine kinase activity. This was the first successful example of rationally designed targeted therapy. Imatinib achieved complete cytogenetic responses in >80% of chronic-phase CML patients and transformed CML from a rapidly fatal disease to a chronic manageable condition with near-normal life expectancy."
  },
  {
    id: 2,
    question: "Resistance to imatinib in CML most commonly occurs through:",
    options: ["BCR-ABL1 gene amplification only", "Point mutations in the ABL1 kinase domain (especially T315I 'gatekeeper' mutation) that prevent drug binding", "Loss of the Philadelphia chromosome", "Apoptosis of CML cells"],
    answer: 1,
    explanation: "~30% of CML patients develop imatinib resistance, most commonly through ABL1 kinase domain point mutations (~50-90% of resistant cases). The T315I 'gatekeeper' mutation is the most clinically significant — it eliminates a hydrogen bond critical for imatinib binding and confers resistance to dasatinib and nilotinib as well. Only ponatinib (a third-generation TKI) effectively inhibits T315I. Other resistance mechanisms include BCR-ABL1 amplification and bypass pathway activation."
  },
  {
    id: 3,
    question: "EGFR-targeted therapy in non-small cell lung cancer is effective in tumors with:",
    options: ["KRAS mutations", "EGFR activating mutations (exon 19 deletions, L858R) or EGFR amplification", "ALK rearrangements", "BRAF V600E mutations"],
    answer: 1,
    explanation: "EGFR tyrosine kinase inhibitors (erlotinib, gefitinib, afatinib, osimertinib) are effective in NSCLC harboring sensitizing EGFR mutations: exon 19 deletions (~45% of EGFR mutations) and L858R point mutation in exon 21 (~40%). These mutations constitutively activate EGFR kinase and increase sensitivity to TKIs. KRAS mutations are mutually exclusive with EGFR mutations and predict resistance to EGFR TKIs. Osimertinib (3rd generation) also targets the T790M resistance mutation."
  },
  {
    id: 4,
    question: "The T790M mutation in EGFR is clinically significant because it:",
    options: ["Sensitizes tumors to first-generation EGFR inhibitors", "Confers acquired resistance to first/second-generation EGFR inhibitors by altering the ATP-binding pocket", "Indicates ALK rearrangement", "Predicts response to immune checkpoint inhibitors"],
    answer: 1,
    explanation: "EGFR T790M (threonine to methionine at position 790, the 'gatekeeper' residue) is the most common resistance mechanism to first-generation (erlotinib, gefitinib) and second-generation (afatinib) EGFR TKIs, occurring in ~50-60% of resistant cases. T790M increases ATP affinity, reducing the competitive advantage of reversible inhibitors. Osimertinib, a third-generation irreversible inhibitor that covalently binds C797, specifically targets T790M and is now first-line therapy for EGFR-mutant NSCLC."
  },
  {
    id: 5,
    question: "KRAS G12C inhibitors (sotorasib, adagrasib) work by:",
    options: ["Blocking GTP binding to KRAS", "Irreversibly binding the mutant cysteine residue (G12C) in the inactive GDP-bound state, trapping KRAS in the OFF position", "Inhibiting KRAS gene expression", "Blocking KRAS membrane localization"],
    answer: 1,
    explanation: "KRAS was considered 'undruggable' for 40 years until the G12C mutation (creating a reactive cysteine near the switch II pocket) was exploited. Sotorasib and adagrasib covalently bind Cys12 when KRAS is in the inactive GDP-bound state, locking it in the OFF conformation and preventing GTP loading and effector engagement. They are FDA-approved for KRAS G12C-mutant NSCLC. Resistance mechanisms include acquired KRAS mutations, pathway bypass (MET, EGFR), and cell state transitions."
  },
  {
    id: 6,
    question: "Trastuzumab deruxtecan (T-DXd, Enhertu) is an antibody-drug conjugate that:",
    options: ["Only blocks HER2 signaling", "Delivers a topoisomerase I inhibitor payload specifically to HER2-expressing cells, with a bystander effect on nearby cells", "Is a naked antibody without drug payload", "Targets PD-L1"],
    answer: 1,
    explanation: "T-DXd is a next-generation ADC comprising: (1) trastuzumab (anti-HER2 antibody), (2) a cleavable tetrapeptide linker, and (3) a potent topoisomerase I inhibitor (DXd) payload with a high drug-to-antibody ratio (~8:1). After binding HER2 and internalization, DXd is released intracellularly, causing DNA damage and cell death. A key feature is the 'bystander killing effect' — membrane-permeable DXd can kill neighboring HER2-negative cells. T-DXd shows activity even in HER2-low tumors."
  },
  {
    id: 7,
    question: "Tumor-agnostic drug approvals (e.g., pembrolizumab for MSI-H, larotrectinib for NTRK fusions) are based on:",
    options: ["Tumor histology only", "Specific molecular biomarkers regardless of tumor type or anatomic origin", "Patient age only", "Geographic location of the tumor"],
    answer: 1,
    explanation: "Tumor-agnostic approvals represent a paradigm shift — drugs are approved based on molecular features rather than tissue of origin. Examples: (1) pembrolizumab for MSI-H/dMMR solid tumors (any cancer type with mismatch repair deficiency), (2) larotrectinib/entrectinib for NTRK fusion-positive solid tumors (regardless of histology), and (3) dabrafenib+trametinib for BRAF V600E solid tumors. This reflects the principle that molecular drivers can be more therapeutically relevant than anatomic classification."
  },
  {
    id: 8,
    question: "Synthetic lethality as a therapeutic strategy targets:",
    options: ["Only the mutated gene directly", "A second gene/pathway whose loss is lethal only in the context of the first cancer-specific alteration", "Random combinations of drugs", "Only wild-type genes"],
    answer: 1,
    explanation: "Synthetic lethality occurs when simultaneous loss of two genes/pathways causes cell death, while loss of either alone is tolerated. Therapeutic synthetic lethality targets a gene/pathway that becomes essential specifically because of a cancer-specific alteration. The BRCA1/2-PARP inhibitor paradigm is the exemplar: PARP inhibition is tolerable in normal cells (with intact HRR) but lethal in BRCA-mutant cells (HRR-deficient). Other examples include ATR inhibitors in ATM-deficient tumors and PRMT5 inhibitors in MTAP-deleted cancers."
  },
  {
    id: 9,
    question: "Proteolysis-targeting chimeras (PROTACs) destroy cancer-driving proteins by:",
    options: ["Inhibiting protein synthesis", "Recruiting an E3 ubiquitin ligase to the target protein, inducing its ubiquitination and proteasomal degradation", "Blocking mRNA translation", "Promoting protein folding"],
    answer: 1,
    explanation: "PROTACs are bifunctional molecules with: (1) a ligand binding the target protein, (2) a linker, and (3) a ligand recruiting an E3 ubiquitin ligase (typically cereblon or VHL). The PROTAC brings the target protein into proximity with the E3 ligase, causing its polyubiquitination and proteasomal degradation. Advantages over inhibitors: (1) catalytic mechanism (one PROTAC can degrade multiple protein molecules), (2) can target 'undruggable' proteins, (3) degrades the entire protein (eliminating scaffolding functions). ARV-471 (ER degrader) is in clinical trials for breast cancer."
  },
  {
    id: 10,
    question: "Oncogene addiction describes the phenomenon where:",
    options: ["Cancer cells are addicted to normal nutrients", "Cancer cells become critically dependent on a single activated oncogene for survival, making them vulnerable to its inhibition", "All oncogenes must be simultaneously targeted", "Cancer cells never depend on a single pathway"],
    answer: 1,
    explanation: "Oncogene addiction (Weinstein, 2002) describes the paradoxical dependence of cancer cells on a single oncogene for maintenance of the malignant phenotype, despite harboring multiple genetic alterations. This dependency creates a therapeutic window — inhibiting the addicting oncogene causes dramatic tumor regression. Examples: BCR-ABL1 in CML (imatinib), EGFR in lung cancer (osimertinib), HER2 in breast cancer (trastuzumab), ALK in NSCLC (alectinib), BRAF V600E in melanoma (dabrafenib). Oncogene addiction explains why targeted therapies achieve initial dramatic responses."
  },

  // ===== CANCER GENOMICS & MOLECULAR CLASSIFICATION (Q11–Q20) =====
  {
    id: 11,
    question: "The Cancer Genome Atlas (TCGA) project systematically characterized:",
    options: ["Only one cancer type", "Genomic, transcriptomic, epigenomic, and proteomic alterations across 33 major cancer types using multi-platform molecular profiling", "Only germline variants", "Only structural variants"],
    answer: 1,
    explanation: "TCGA (2006-2018, NCI/NHGRI) characterized >11,000 primary tumors across 33 cancer types using: WES/WGS (somatic mutations, CNVs, SVs), RNA-seq (expression, fusions), methylation arrays, miRNA-seq, reverse phase protein arrays (RPPA), and clinical data. TCGA revealed novel molecular subtypes, identified driver mutations, characterized mutational processes, and created publicly available resources that transformed cancer research and clinical genomics."
  },
  {
    id: 12,
    question: "Breast cancer molecular subtypes (PAM50) include:",
    options: ["Only ER-positive and ER-negative", "Luminal A, Luminal B, HER2-enriched, basal-like, and normal-like", "Only triple-negative and HER2-positive", "Only grade 1, 2, and 3"],
    answer: 1,
    explanation: "PAM50 gene expression profiling classifies breast cancer into intrinsic subtypes: (1) Luminal A (ER+, low Ki-67, best prognosis), (2) Luminal B (ER+, higher Ki-67, worse prognosis than Luminal A), (3) HER2-enriched (HER2 amplified, aggressive but targetable), (4) Basal-like (largely overlaps with triple-negative, worst prognosis, BRCA1-associated), and (5) Normal-like. These subtypes have distinct biology, prognosis, and treatment implications beyond simple receptor status."
  },
  {
    id: 13,
    question: "Consensus molecular subtypes (CMS) of colorectal cancer include CMS1-4. CMS1 is characterized by:",
    options: ["Chromosomal instability and WNT activation", "Microsatellite instability, strong immune activation, and BRAF mutations", "Metabolic deregulation", "Mesenchymal features and TGF-β activation"],
    answer: 1,
    explanation: "CMS classification of CRC: CMS1 (MSI/immune, ~14%) — MSI-H, BRAF V600E, strong immune infiltration, responds to immunotherapy; CMS2 (canonical, ~37%) — CIN, WNT/MYC activation, left-sided, best survival on standard therapy; CMS3 (metabolic, ~13%) — mixed MSI/CIN, KRAS mutations, metabolic deregulation; CMS4 (mesenchymal, ~23%) — TGF-β activation, stromal infiltration, EMT, worst relapse-free survival. CMS guides prognosis and increasingly treatment selection."
  },
  {
    id: 14,
    question: "Glioblastoma molecular subtypes identified by TCGA include:",
    options: ["Only IDH-mutant gliomas", "Classical (EGFR amplification), proneural (PDGFRA/IDH1), mesenchymal (NF1 loss), and neural subtypes", "Only grade 1 and grade 4", "Only oligodendroglioma and astrocytoma"],
    answer: 1,
    explanation: "TCGA classified glioblastoma into molecular subtypes: (1) Classical — EGFR amplification/mutation, CDKN2A deletion, (2) Proneural — PDGFRA amplification, IDH1/TP53 mutations, younger patients, slightly better prognosis, (3) Mesenchymal — NF1 loss, inflammatory/immune signatures, worst prognosis. The WHO 2021 CNS tumor classification now requires molecular parameters (IDH status, 1p/19q codeletion, TERT promoter status, CDKN2A/B) for glioma classification."
  },
  {
    id: 15,
    question: "Liquid biopsy for cancer monitoring detects circulating tumor DNA (ctDNA) and is used for:",
    options: ["Only initial cancer diagnosis", "Treatment response monitoring, minimal residual disease detection, resistance mechanism identification, and early recurrence detection", "Only germline testing", "Only tissue typing"],
    answer: 1,
    explanation: "Clinical ctDNA applications include: (1) genotyping actionable mutations when tissue is unavailable (EGFR, KRAS, PIK3CA, ESR1), (2) monitoring treatment response (decreasing ctDNA = response), (3) detecting minimal residual disease post-surgery (ctDNA+ predicts relapse months before clinical recurrence), (4) identifying acquired resistance mechanisms (T790M, ESR1 mutations), and (5) multi-cancer early detection (MCED tests). ctDNA half-life of ~2 hours enables real-time monitoring."
  },
  {
    id: 16,
    question: "Homologous recombination deficiency (HRD) beyond BRCA1/2 can involve mutations in:",
    options: ["Only KRAS and BRAF", "PALB2, RAD51C, RAD51D, ATM, CHEK2, and BRIP1", "Only mismatch repair genes", "Only TP53"],
    answer: 1,
    explanation: "HRD extends beyond BRCA1/2 to include germline and somatic mutations in: PALB2 (BRCA2 partner/localizer), RAD51C/RAD51D (RAD51 paralogs), ATM (DSB sensor), CHEK2 (checkpoint kinase), BRIP1 (BRCA1-interacting helicase), BARD1, NBN, and RAD50. These 'BRCAness' tumors may respond to platinum chemotherapy and PARP inhibitors based on their HRD phenotype (genomic scar assessment) rather than specific gene mutations. HRD scores predict PARP inhibitor benefit beyond BRCA testing alone."
  },
  {
    id: 17,
    question: "Tumor mutational burden (TMB) as a predictive biomarker for immunotherapy works because:",
    options: ["Higher TMB indicates fewer mutations", "Higher TMB generates more neoantigens, increasing the likelihood of immune recognition and checkpoint inhibitor response", "TMB predicts response to chemotherapy", "Low TMB always indicates immunotherapy benefit"],
    answer: 1,
    explanation: "TMB quantifies somatic mutations per megabase. Higher TMB correlates with increased neoantigen production (novel peptides from mutated proteins presented on MHC-I), enhancing T-cell recognition. Pembrolizumab has FDA approval for TMB-high (≥10 mut/Mb) solid tumors. TMB is highest in melanoma, NSCLC (smokers), and MSI-H tumors. Limitations include: TMB cutoff optimization, panel size effects, tumor heterogeneity, and the fact that TMB alone doesn't capture neoantigen quality or immune contexture."
  },
  {
    id: 18,
    question: "Molecular residual disease (MRD) detection using ctDNA after curative-intent surgery can:",
    options: ["Only confirm complete resection", "Identify patients at high risk of recurrence who may benefit from adjuvant therapy, and spare low-risk patients from unnecessary treatment", "Replace imaging entirely", "Only detect bone metastases"],
    answer: 1,
    explanation: "Postoperative ctDNA detection (MRD+) indicates residual microscopic disease and predicts recurrence with high specificity across multiple cancer types (CRC, lung, breast, bladder). ctDNA-guided adjuvant therapy strategies are being tested in clinical trials: (1) MRD+ patients receive adjuvant therapy, (2) MRD- patients may safely omit adjuvant chemotherapy (reducing overtreatment). DYNAMIC (CRC) and MERMAID (NSCLC) trials are evaluating this ctDNA-guided paradigm."
  },
  {
    id: 19,
    question: "Chromosomal instability (CIN) in cancer is characterized by:",
    options: ["Stable, normal karyotype", "Ongoing gains and losses of whole chromosomes or chromosome arms, resulting in aneuploidy", "Only balanced translocations", "Only point mutations"],
    answer: 1,
    explanation: "CIN involves ongoing missegregation of chromosomes during mitosis, creating cells with abnormal chromosome numbers (aneuploidy) and structural rearrangements. CIN arises from: weakened spindle assembly checkpoint, centrosome amplification, merotelic kinetochore attachments, cohesin defects, and replication stress. CIN promotes tumor evolution (generating genetic diversity for selection) and drug resistance. ~70-80% of solid tumors exhibit CIN. High CIN can paradoxically reduce fitness if too severe (exceeding tolerance thresholds)."
  },
  {
    id: 20,
    question: "Chromothripsis is a catastrophic genomic event characterized by:",
    options: ["Gradual accumulation of mutations", "Massive simultaneous shattering and random reassembly of one or few chromosomes, potentially creating oncogene amplification and tumor suppressor loss in a single event", "Only point mutations", "Only DNA methylation changes"],
    answer: 1,
    explanation: "Chromothripsis ('chromosome shattering') involves pulverization of a chromosome (typically in a micronucleus during aberrant mitosis), followed by random reassembly by NHEJ. This generates: clustered rearrangements, oscillating copy number states (typically 2 states), and can create oncogene amplification (via extrachromosomal DNA/ecDNA) or tumor suppressor loss in a single catastrophic event — potentially accelerating tumorigenesis from a single cell division. Found in 2-5% of cancers overall, higher in specific types."
  },

  // ===== TUMOR IMMUNOTHERAPY ADVANCES (Q21–Q30) =====
  {
    id: 21,
    question: "Anti-PD-1 antibodies (nivolumab, pembrolizumab) restore anti-tumor immunity by:",
    options: ["Directly killing tumor cells", "Blocking PD-1 on T cells from engaging PD-L1 on tumor cells, preventing inhibitory signaling and reinvigorating exhausted T cells", "Activating Tregs", "Blocking CD28 co-stimulation"],
    answer: 1,
    explanation: "Anti-PD-1 antibodies bind PD-1 on T cells, preventing its engagement with PD-L1 (tumor cells, APCs) and PD-L2. This blocks the inhibitory SHP-2 signal, restoring T-cell proliferation, cytokine production (IFN-γ, TNF-α), and cytotoxicity. The response depends on: pre-existing anti-tumor T cells, neoantigen burden, PD-L1 expression, MSI status, and TME composition. Pembrolizumab is approved for >15 tumor types, making it the most widely used immune checkpoint inhibitor."
  },
  {
    id: 22,
    question: "Combination immunotherapy with anti-CTLA-4 (ipilimumab) and anti-PD-1 (nivolumab) is more effective than monotherapy because:",
    options: ["Both target the same pathway", "They target complementary immune checkpoints — CTLA-4 acts during T-cell priming and PD-1 during effector function in the tumor", "Both work only in melanoma", "They reduce toxicity compared to monotherapy"],
    answer: 1,
    explanation: "Ipilimumab and nivolumab target non-redundant immune checkpoints: (1) CTLA-4 blockade enhances T-cell priming and activation in lymph nodes (early activation phase), diversifying the anti-tumor T-cell repertoire, (2) PD-1 blockade reinvigorates exhausted T cells at the tumor site (effector phase). Combination achieves higher response rates (58% vs. 44% for nivo and 19% for ipi alone in melanoma) but with increased irAEs. The combination is approved for melanoma, RCC, NSCLC, mesothelioma, and HCC."
  },
  {
    id: 23,
    question: "Tumor-infiltrating lymphocyte (TIL) therapy involves:",
    options: ["Injecting lymphocytes from a donor", "Extracting T cells from the patient's tumor, expanding them ex vivo, and re-infusing them after lymphodepletion", "Administering recombinant T-cell receptors", "Only using genetically modified T cells"],
    answer: 1,
    explanation: "TIL therapy isolates tumor-reactive T cells from resected tumor tissue, selects and expands them to billions of cells over ~3-5 weeks using IL-2 and anti-CD3, then infuses them back into the patient after lymphodepleting chemotherapy (cyclophosphamide/fludarabine) followed by IL-2. Lifileucel (Amtagvi) was FDA-approved in 2024 for unresectable/metastatic melanoma. TILs contain polyclonal, tumor-specific T cells recognizing multiple neoantigens, potentially overcoming antigen loss resistance."
  },
  {
    id: 24,
    question: "Personalized neoantigen vaccines in cancer work by:",
    options: ["Using standard flu vaccine formulations", "Identifying patient-specific somatic mutations, predicting immunogenic neoepitopes, and vaccinating to elicit T-cell responses against tumor-specific neoantigens", "Only using shared tumor antigens", "Vaccinating against viral antigens only"],
    answer: 1,
    explanation: "Neoantigen vaccine development: (1) WES/WGS identifies somatic mutations, (2) RNA-seq confirms expression, (3) bioinformatics predicts MHC-I/II binding neoepitopes (NetMHCpan), (4) prioritized neoantigens are synthesized as peptides, RNA (mRNA-4157/V940, Moderna), or delivered via viral vectors, (5) vaccination with adjuvant stimulates neoantigen-specific T-cell responses. Phase II trials (mRNA-4157 + pembrolizumab in melanoma) showed ~44% reduction in recurrence/death. Phase III trials are ongoing."
  },
  {
    id: 25,
    question: "LAG-3 (lymphocyte activation gene-3) is an emerging immune checkpoint that:",
    options: ["Activates T cells", "Inhibits T-cell function by binding MHC-II and other ligands, and is co-expressed with PD-1 on exhausted tumor-infiltrating T cells", "Only functions in B cells", "Promotes angiogenesis"],
    answer: 1,
    explanation: "LAG-3 (CD223) is an inhibitory receptor expressed on exhausted T cells, Tregs, and NK cells. It binds MHC-II on APCs, FGL1 (fibrinogen-like protein 1), and other ligands. LAG-3 is frequently co-expressed with PD-1 on tumor-infiltrating T cells, contributing to T-cell exhaustion. Relatlimab (anti-LAG-3) combined with nivolumab (Opdualag) is FDA-approved for melanoma, demonstrating improved PFS over nivolumab alone. TIGIT, TIM-3, and VISTA are other emerging checkpoint targets."
  },
  {
    id: 26,
    question: "Oncolytic viruses (e.g., talimogene laherparepvec/T-VEC) kill cancer cells through:",
    options: ["Non-specific toxicity to all cells", "Selective replication in and lysis of tumor cells, releasing tumor antigens and danger signals that stimulate anti-tumor immunity", "Only blocking blood supply", "Only delivering chemotherapy"],
    answer: 1,
    explanation: "Oncolytic viruses selectively replicate in cancer cells (exploiting defective antiviral defenses — impaired IFN signaling, PKR pathway, p53 loss). Cell lysis releases: (1) tumor antigens, (2) DAMPs (danger-associated molecular patterns), (3) viral PAMPs, and (4) engineered cytokines (T-VEC expresses GM-CSF). This creates an in situ vaccination effect, converting immunologically 'cold' tumors to 'hot.' T-VEC (modified HSV-1) is FDA-approved for unresectable melanoma."
  },
  {
    id: 27,
    question: "Immune-related adverse events (irAEs) most commonly affect which organ systems?",
    options: ["Only the liver", "Skin (dermatitis), GI (colitis), endocrine (thyroiditis, hypophysitis), liver (hepatitis), and lungs (pneumonitis)", "Only the kidneys", "Only the nervous system"],
    answer: 1,
    explanation: "irAE frequency and pattern differ by checkpoint target: (1) Anti-CTLA-4: colitis (most common serious), dermatitis, hypophysitis; (2) Anti-PD-1/PD-L1: thyroiditis, pneumonitis, hepatitis, dermatitis; (3) Combination: higher rates of all irAEs (55-60% grade 3-4 vs. 10-20% for monotherapy). Rare but serious irAEs include myocarditis (0.1-1.5%, high mortality), neurological toxicity (myasthenia gravis, encephalitis), and type 1 diabetes. Management follows severity-based algorithms with corticosteroids and immunosuppressants."
  },
  {
    id: 28,
    question: "The concept of 'hot' versus 'cold' tumors in immunotherapy refers to:",
    options: ["Temperature of the tumor", "The degree of T-cell infiltration in the tumor microenvironment — 'hot' tumors are T-cell-inflamed and more likely to respond to checkpoint inhibitors", "Blood flow to the tumor", "Metabolic activity on PET scan"],
    answer: 1,
    explanation: "Hot tumors have high T-cell infiltration (CD8+ TILs), active IFN-γ signaling, PD-L1 expression, and high TMB — features associated with checkpoint inhibitor response. Cold tumors lack T-cell infiltration due to: poor antigenicity (low TMB), impaired antigen presentation (MHC-I/beta-2-microglobulin loss), T-cell exclusion (TGF-β, dense stroma), or immunosuppressive TME. Converting cold to hot tumors (via radiation, oncolytic viruses, STING agonists, chemotherapy) is a major therapeutic goal."
  },
  {
    id: 29,
    question: "Adoptive cell therapy with TCR-engineered T cells differs from CAR-T in that:",
    options: ["TCR-T cells only target surface antigens", "TCR-engineered T cells can recognize intracellular antigens presented on MHC, while CAR-T cells target surface antigens in an MHC-independent manner", "CAR-T cells can target intracellular proteins", "TCR-T cells do not require MHC"],
    answer: 1,
    explanation: "TCR-engineered T cells are transduced with genes encoding a specific TCR alpha/beta chain pair that recognizes a peptide-MHC complex. This allows targeting of intracellular antigens (including oncoproteins, mutant proteins, and cancer-testis antigens) presented on MHC molecules — vastly expanding the range of targetable antigens beyond surface proteins. Tebentafusp (a TCR-bispecific targeting gp100/HLA-A*02:01) is FDA-approved for uveal melanoma. MHC restriction limits applicability to specific HLA types."
  },
  {
    id: 30,
    question: "STING (stimulator of interferon genes) agonists in cancer immunotherapy work by:",
    options: ["Inhibiting interferon signaling", "Activating the cGAS-STING pathway in dendritic cells and macrophages, inducing type I interferon production and enhancing anti-tumor immunity", "Blocking T-cell activation", "Promoting Treg function"],
    answer: 1,
    explanation: "The cGAS-STING pathway detects cytosolic DNA (from tumor cell death, DNA damage, micronuclei). cGAS produces cGAMP, which activates STING on the ER membrane, triggering TBK1/IRF3 signaling and type I interferon (IFN-α/β) production. Type I IFNs enhance dendritic cell maturation, cross-presentation, and CD8+ T-cell priming. STING agonists (intratumoral injection or systemic delivery) aim to convert cold tumors to hot by inducing innate immune activation. Multiple STING agonists are in clinical trials."
  },

  // ===== HEREDITARY CANCER SYNDROMES (Q31–Q40) =====
  {
    id: 31,
    question: "Lynch syndrome should be suspected when colorectal cancer presents with:",
    options: ["Late onset (>70 years), distal location", "Early onset (<50 years), proximal (right-sided) location, MSI-H, and family history of Lynch-associated cancers", "Only rectal cancer", "Only polyposis"],
    answer: 1,
    explanation: "Lynch syndrome (hereditary nonpolyposis CRC) features: (1) early-onset CRC (mean ~45 years), (2) proximal/right-sided predominance, (3) MSI-H/dMMR, (4) tumor-infiltrating lymphocytes and Crohn's-like reaction, (5) synchronous/metachronous CRC, (6) associated cancers (endometrial ~40-60% risk, ovarian, gastric, urinary tract, small bowel, sebaceous tumors). Amsterdam II criteria and revised Bethesda guidelines guide clinical suspicion. Universal tumor MMR testing is now recommended for all newly diagnosed CRC."
  },
  {
    id: 32,
    question: "Familial adenomatous polyposis (FAP) characteristically presents with:",
    options: ["Single colorectal polyp", "Hundreds to thousands of colorectal adenomatous polyps, with near 100% CRC risk by age 40 without intervention", "Only hyperplastic polyps", "Normal colonoscopy findings"],
    answer: 1,
    explanation: "Classic FAP (APC mutation) presents with >100 colorectal adenomatous polyps (often thousands), typically starting in adolescence, with near 100% CRC risk by age 40. Extra-colonic features include: duodenal adenomas (periampullary cancer risk), desmoid tumors, osteomas, congenital hypertrophy of retinal pigment epithelium (CHRPE), and thyroid cancer. Attenuated FAP (AFAP) has fewer polyps (10-100). Prophylactic colectomy is standard of care for classic FAP."
  },
  {
    id: 33,
    question: "BRCA1 mutation carriers have the highest lifetime risk for which cancers?",
    options: ["Colorectal and gastric cancer", "Breast cancer (~60-80%) and ovarian cancer (~40-60%)", "Lung and bladder cancer", "Liver and kidney cancer"],
    answer: 1,
    explanation: "BRCA1 germline mutation carriers face: breast cancer ~60-80% lifetime risk (often triple-negative, early onset), ovarian cancer ~40-60% (predominantly high-grade serous), and modestly increased risks for pancreatic and prostate cancers. Risk-reducing options include: bilateral mastectomy (reduces breast cancer risk by ~90%), risk-reducing salpingo-oophorectomy (reduces ovarian cancer by ~80%, recommended age 35-40), enhanced surveillance (breast MRI from age 25), and chemoprevention."
  },
  {
    id: 34,
    question: "Li-Fraumeni syndrome (TP53 germline mutations) predisposes to which spectrum of cancers?",
    options: ["Only colorectal cancer", "Sarcomas, pre-menopausal breast cancer, brain tumors, adrenocortical carcinoma, and leukemia — often at young ages", "Only skin cancer", "Only hematologic malignancies"],
    answer: 1,
    explanation: "Li-Fraumeni syndrome confers a ~50% cancer risk by age 30 and ~90-100% lifetime risk. The core cancer spectrum includes: (1) soft tissue sarcomas and osteosarcomas (childhood-adolescence), (2) pre-menopausal breast cancer, (3) brain tumors (gliomas, choroid plexus carcinoma), (4) adrenocortical carcinoma (childhood, nearly pathognomonic), and (5) leukemia. Patients are advised to avoid radiation exposure (therapy and diagnostic imaging) due to increased radiation-induced cancer risk. Whole-body MRI surveillance is recommended."
  },
  {
    id: 35,
    question: "Multiple endocrine neoplasia type 2 (MEN2) is caused by germline mutations in:",
    options: ["APC", "RET proto-oncogene", "VHL", "PTEN"],
    answer: 1,
    explanation: "MEN2 is caused by gain-of-function germline mutations in the RET receptor tyrosine kinase. MEN2A (~95%): medullary thyroid carcinoma (MTC, ~100% penetrance), pheochromocytoma (~50%), and primary hyperparathyroidism (~20-30%). MEN2B (~5%): MTC (aggressive, early onset), pheochromocytoma, mucosal neuromas, marfanoid habitus — caused by RET M918T. Prophylactic thyroidectomy is recommended based on RET mutation-specific risk (highest risk mutations → thyroidectomy in infancy)."
  },
  {
    id: 36,
    question: "Hereditary diffuse gastric cancer syndrome is caused by germline mutations in:",
    options: ["APC", "CDH1 (E-cadherin)", "TP53", "SMAD4"],
    answer: 1,
    explanation: "CDH1 germline mutations cause hereditary diffuse gastric cancer (HDGC) — an autosomal dominant syndrome with ~70-80% lifetime risk of diffuse (signet ring cell) gastric cancer and ~40-50% risk of lobular breast cancer in women. E-cadherin loss disrupts cell adhesion, enabling diffuse infiltrative growth pattern. Prophylactic total gastrectomy is recommended for confirmed CDH1 pathogenic variant carriers (typically age 20-30), as endoscopic surveillance has limited sensitivity for early diffuse gastric cancer."
  },
  {
    id: 37,
    question: "Peutz-Jeghers syndrome is characterized by:",
    options: ["Only colorectal polyps", "Hamartomatous polyps throughout the GI tract, mucocutaneous melanotic macules, and increased cancer risk", "Only skin lesions", "Only ovarian tumors"],
    answer: 1,
    explanation: "Peutz-Jeghers syndrome (STK11/LKB1 germline mutations) features: (1) hamartomatous polyps predominantly in the small intestine (also stomach, colon), causing intussusception, obstruction, and bleeding, (2) characteristic melanotic macules on lips, buccal mucosa, and digits, and (3) significantly elevated cancer risk: GI cancers (39% by age 70), breast (~32-54%), pancreatic (~11-36%), ovarian sex cord-stromal tumors, and cervical adenoma malignum. Comprehensive cancer surveillance is essential."
  },
  {
    id: 38,
    question: "Cowden syndrome (PTEN hamartoma tumor syndrome) increases risk for all of the following cancers EXCEPT:",
    options: ["Breast cancer", "Thyroid cancer (follicular)", "Retinoblastoma", "Endometrial cancer"],
    answer: 2,
    explanation: "PTEN germline mutations in Cowden syndrome increase cancer risk for: breast (85% lifetime risk), thyroid (primarily follicular, 35%), endometrial (28%), renal (34%), and colorectal (9%). Non-cancerous features include macrocephaly (>97th percentile), mucocutaneous lesions (trichilemmomas, papillomatous papules), and hamartomatous GI polyps. Retinoblastoma is caused by RB1 mutations, not PTEN. Enhanced screening includes annual breast MRI from age 30, thyroid ultrasound, and endometrial monitoring."
  },
  {
    id: 39,
    question: "Constitutional mismatch repair deficiency (CMMRD) differs from Lynch syndrome in that:",
    options: ["It involves only one MMR gene mutation", "It involves biallelic (homozygous) MMR gene mutations, causing childhood cancers including brain tumors, hematologic malignancies, and CRC with ultra-hypermutation", "It only affects adults", "It has no cancer risk"],
    answer: 1,
    explanation: "CMMRD results from biallelic germline MMR gene mutations (both alleles mutated, vs. one in Lynch). It causes: (1) childhood-onset cancers (median age 7-8 years) including brain tumors (glioblastoma), hematologic malignancies (T-cell lymphoma, ALL), and early-onset CRC; (2) cafe-au-lait macules (NF1-like); (3) ultra-hypermutated tumors (>100 mut/Mb). CMMRD tumors may respond to immune checkpoint inhibitors due to extreme TMB. Parents are obligate Lynch syndrome carriers."
  },
  {
    id: 40,
    question: "Genetic testing for hereditary cancer syndromes should be offered to:",
    options: ["Only patients with known family mutations", "Individuals meeting clinical criteria (early onset, multiple primaries, family history) and increasingly as part of population-based screening for actionable genes", "Only after cancer diagnosis", "Only patients over 50"],
    answer: 1,
    explanation: "Genetic testing criteria are evolving from strict family history-based guidelines toward broader testing: (1) clinical criteria (early-onset cancer, multiple primaries, strong family history), (2) tumor-based triggers (universal MMR testing for CRC, HRD testing in ovarian cancer), (3) population-based screening (ACMG recommends offering BRCA1/2, Lynch, and other actionable gene testing to all adults regardless of history), and (4) cascade testing of at-risk relatives. Multi-gene panel testing (including 30-80+ genes) is now standard, replacing sequential single-gene testing."
  },

  // ===== CANCER PREVENTION, SCREENING & EMERGING CONCEPTS (Q41–Q50) =====
  {
    id: 41,
    question: "The HPV vaccine prevents cervical cancer by:",
    options: ["Treating existing HPV infections", "Generating neutralizing antibodies against HPV L1 capsid proteins, preventing infection by high-risk HPV types (16, 18, and others)", "Directly killing HPV-infected cells", "Enhancing cell-mediated immunity against established tumors"],
    answer: 1,
    explanation: "HPV vaccines (Gardasil 9 covers types 6, 11, 16, 18, 31, 33, 45, 52, 58) use virus-like particles (VLPs) assembled from recombinant L1 major capsid protein. These VLPs generate strong neutralizing antibody responses that prevent HPV infection. The vaccine prevents ~90% of HPV-related cancers (cervical, oropharyngeal, anal, penile, vulvar, vaginal) when given before HPV exposure (recommended ages 11-12, catch-up to 26). It is a prophylactic, not therapeutic, vaccine."
  },
  {
    id: 42,
    question: "Multi-cancer early detection (MCED) blood tests analyze:",
    options: ["Only protein biomarkers", "Cell-free DNA methylation patterns, fragmentomics, and/or protein biomarkers to screen for multiple cancer types from a single blood draw", "Only circulating tumor cells", "Only germline mutations"],
    answer: 1,
    explanation: "MCED tests (Galleri, CancerSEEK) use multi-analyte approaches: (1) cfDNA methylation (cancer-specific patterns), (2) cfDNA fragmentomics (fragment size, end motifs), (3) protein biomarkers, and (4) machine learning classifiers. Galleri can screen for 50+ cancer types with tissue-of-origin prediction. The NHS-Galleri trial (140,000 participants) is evaluating clinical utility. Challenges include: sensitivity for early-stage disease (~25-30% for stage I), false positives, appropriate follow-up for positive screens, and health economic evaluation."
  },
  {
    id: 43,
    question: "Aspirin reduces colorectal cancer risk through:",
    options: ["Direct cytotoxicity to colon epithelium", "COX-2 inhibition reducing prostaglandin E2 production, anti-inflammatory effects, and potentially enhanced immune surveillance", "Anticoagulation only", "Blood pressure lowering"],
    answer: 1,
    explanation: "Aspirin's chemopreventive mechanism involves: (1) COX-2 inhibition reducing PGE2 (which promotes proliferation, survival, angiogenesis, and immunosuppression in colorectal epithelium), (2) COX-independent effects on NF-κB and Wnt/beta-catenin signaling, (3) induction of apoptosis in colonic epithelial cells, and (4) enhanced anti-tumor immune surveillance (reduced PGE2 relieves immune suppression). USPSTF recommends low-dose aspirin for CRC prevention in select individuals. Benefit is strongest for Lynch syndrome (CAPP2 trial)."
  },
  {
    id: 44,
    question: "Extrachromosomal DNA (ecDNA) in cancer is significant because it:",
    options: ["Is always benign", "Drives oncogene amplification, lacks centromeres (enabling unequal segregation), and promotes tumor heterogeneity and drug resistance", "Is found in all normal cells", "Only occurs in viral infections"],
    answer: 1,
    explanation: "ecDNA (circular, centromere-lacking DNA elements ~1-10 Mb) is found in ~14% of cancers and drives oncogene amplification (EGFR, MYC, CDK4). Key features: (1) lacks centromeres → unequal segregation during mitosis → rapid copy number heterogeneity, (2) accessible chromatin (lack of higher-order folding) → high transcriptional output, (3) can carry enhancers driving oncogene expression, and (4) rapidly selected under drug pressure. ecDNA represents a major mechanism of adaptive resistance and intratumor heterogeneity."
  },
  {
    id: 45,
    question: "Cancer vaccines can be categorized as:",
    options: ["Only preventive", "Preventive (HPV, HBV) and therapeutic (neoantigen vaccines, dendritic cell vaccines targeting existing cancers)", "Only therapeutic", "Only using killed tumor cells"],
    answer: 1,
    explanation: "Cancer vaccines include: (1) Preventive — HPV vaccine (cervical and other cancers), HBV vaccine (hepatocellular carcinoma), (2) Therapeutic — sipuleucel-T (autologous dendritic cells loaded with PAP-GM-CSF for prostate cancer), personalized neoantigen vaccines (mRNA-4157 in melanoma, phase III), cancer-testis antigen vaccines, oncolytic virus vaccines, and DC-tumor fusions. Therapeutic vaccines aim to stimulate or boost anti-tumor immunity in patients with existing cancer."
  },
  {
    id: 46,
    question: "The concept of cancer interception aims to:",
    options: ["Only treat advanced cancer", "Intervene during the pre-malignant or early malignant phase to prevent progression to invasive cancer", "Only screen asymptomatic populations", "Only provide palliative care"],
    answer: 1,
    explanation: "Cancer interception (a term coined by Blackburn, 2011) targets the window between cancer initiation and clinical cancer. Strategies include: (1) chemoprevention (tamoxifen for breast, aspirin for CRC), (2) removing pre-cancerous lesions (adenomatous polyps, Barrett's esophagus ablation, cervical dysplasia treatment), (3) targeting molecular alterations in pre-malignant conditions (clonal hematopoiesis, ductal carcinoma in situ), and (4) immune-based interception. Cancer interception extends the cancer prevention continuum beyond primary prevention."
  },
  {
    id: 47,
    question: "Clonal hematopoiesis of indeterminate potential (CHIP) is relevant to cancer biology because it:",
    options: ["Is always benign", "Represents age-related somatic mutations in hematopoietic stem cells (DNMT3A, TET2, ASXL1) that increase risk of hematologic malignancies and cardiovascular disease", "Only occurs after chemotherapy", "Is a germline condition"],
    answer: 1,
    explanation: "CHIP involves somatic mutations (most commonly DNMT3A, TET2, ASXL1) in hematopoietic stem cells that expand clonally with age (present in >10% of individuals >65). CHIP increases risk of: (1) hematologic malignancies (AML, MDS — 0.5-1% per year), (2) cardiovascular disease (2-4x risk, via inflammatory monocyte/macrophage dysregulation), and (3) worse outcomes after cancer treatment (therapy-related myeloid neoplasms). CHIP represents a pre-malignant clonal state amenable to cancer interception strategies."
  },
  {
    id: 48,
    question: "Adaptive therapy in oncology differs from maximum tolerated dose (MTD) therapy by:",
    options: ["Always using the highest possible drug dose", "Modulating drug doses based on tumor response to maintain a population of drug-sensitive cells that compete with resistant cells, delaying resistance", "Using no drugs at all", "Only using immunotherapy"],
    answer: 1,
    explanation: "Adaptive therapy (Robert Gatenby, evolutionary game theory-inspired) aims to maintain a stable disease burden rather than seeking maximum tumor kill. By modulating doses (reducing when tumor shrinks, escalating when it grows), drug-sensitive cells are maintained as competitors against resistant cells. Without this competition, resistant clones rapidly dominate (competitive release). The AERO trial in metastatic castration-resistant prostate cancer showed adaptive abiraterone maintained disease control with ~50% less drug. This approach challenges the MTD paradigm."
  },
  {
    id: 49,
    question: "Ferroptosis inducers are being explored as cancer therapies because:",
    options: ["All cancer cells are resistant to ferroptosis", "Cancer cells in certain states (mesenchymal, therapy-resistant, persister cells) are particularly vulnerable to iron-dependent lipid peroxidation", "Ferroptosis has no effect on cancer cells", "Only normal cells undergo ferroptosis"],
    answer: 1,
    explanation: "Several cancer cell states are vulnerable to ferroptosis: (1) mesenchymal/EMT-state cells (high PUFA-phospholipids, reduced GPX4), (2) drug-tolerant persister cells surviving targeted therapy, (3) therapy-resistant cancer cells, and (4) cells with specific metabolic dependencies. Ferroptosis inducers (erastin, RSL3, IKE, and repurposed drugs like sulfasalazine, sorafenib) are being evaluated. Combining ferroptosis induction with immunotherapy may enhance anti-tumor immunity through immunogenic cell death."
  },
  {
    id: 50,
    question: "The concept of cancer as an evolutionary and ecological process implies that:",
    options: ["Cancer follows predictable linear progression", "Tumors are complex ecosystems where genetic diversity, selection pressures (therapy, immunity, resources), and microenvironmental interactions drive cancer evolution and treatment resistance", "Evolution only applies to organisms, not tumors", "All cancer cells are genetically identical"],
    answer: 1,
    explanation: "Viewing cancer through an eco-evolutionary lens recognizes: (1) tumor populations evolve through mutation, selection, drift, and migration (metastasis), (2) therapy creates selection pressures that drive resistant clone expansion, (3) the TME is an ecosystem with diverse cell populations competing for resources and interacting, (4) niche construction by tumor cells shapes the microenvironment, and (5) evolutionary principles can inform therapeutic strategies (adaptive therapy, extinction therapy, evolutionary double binds). This framework is increasingly guiding next-generation treatment approaches."
  }
]

export default questions
