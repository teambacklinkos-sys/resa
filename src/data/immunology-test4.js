const questions = [
  // ===== LYMPHOID ORGANS & IMMUNE CELL DEVELOPMENT (Q1–Q10) =====
  {
    id: 1,
    question: "Primary lymphoid organs where immune cells develop and mature include:",
    options: ["Spleen and lymph nodes", "Bone marrow and thymus", "Peyer's patches and tonsils", "Liver and lungs"],
    answer: 1,
    explanation: "Primary (central) lymphoid organs: (1) Bone marrow — site of hematopoiesis, B-cell development and maturation (pro-B → pre-B → immature B → mature B), NK cell development, and myeloid cell development. (2) Thymus — site of T-cell development and maturation (thymocyte selection). Secondary (peripheral) lymphoid organs (spleen, lymph nodes, MALT/GALT) are where mature lymphocytes encounter antigens and mount adaptive immune responses."
  },
  {
    id: 2,
    question: "The thymus is essential for T-cell development and undergoes age-related:",
    options: ["Hyperplasia", "Involution — progressive replacement of thymic epithelial tissue with adipose tissue, reducing naive T-cell output", "Hypertrophy", "Regeneration"],
    answer: 1,
    explanation: "Thymic involution begins at puberty (accelerated by sex hormones, particularly testosterone) and progresses throughout life. By age 70, >90% of thymic tissue is replaced by fat. Consequences: (1) dramatically reduced naive T-cell output (TREC levels decline), (2) T-cell repertoire contraction (reduced TCR diversity), (3) increased reliance on homeostatic proliferation of existing memory T cells. This contributes to immunosenescence, increased infection susceptibility, and reduced vaccine efficacy in the elderly. IL-7, sex steroid ablation, and keratinocyte growth factor can partially restore thymic function."
  },
  {
    id: 3,
    question: "Hematopoietic stem cells (HSCs) give rise to all blood cell lineages through:",
    options: ["Direct differentiation without intermediates", "Sequential commitment through multipotent progenitors → common lymphoid progenitors (CLP) or common myeloid progenitors (CMP) → lineage-specific precursors", "Only under pathological conditions", "A single differentiation pathway"],
    answer: 1,
    explanation: "Hematopoietic hierarchy: (1) Long-term HSC (LT-HSC, self-renewing) → short-term HSC → multipotent progenitor (MPP), (2) MPP branches: CLP (common lymphoid progenitor → T cells, B cells, NK cells, ILCs) and CMP (common myeloid progenitor → GMP → neutrophils, monocytes/macrophages, eosinophils, basophils, mast cells; or MEP → megakaryocytes/platelets, erythrocytes). Key transcription factors: PU.1 (myeloid), GATA-1 (erythroid/megakaryocyte), IKAROS/E2A (lymphoid), NOTCH1 (T-cell commitment). Cytokines (SCF, IL-3, G-CSF, M-CSF, EPO, TPO) regulate lineage-specific differentiation."
  },
  {
    id: 4,
    question: "The spleen functions in immunity primarily by:",
    options: ["Producing T cells", "Filtering blood, removing opsonized pathogens and aged RBCs, and mounting immune responses to blood-borne antigens", "Producing red blood cells in adults", "Only storing platelets"],
    answer: 1,
    explanation: "Splenic immune functions: (1) Red pulp — filtration of blood (removing opsonized bacteria, aged/damaged RBCs via macrophages), (2) White pulp — periarteriolar lymphoid sheath (PALS, T-cell zone with DCs) and follicles (B-cell zone with FDCs), (3) Marginal zone — MZ B cells and macrophages rapidly responding to blood-borne pathogens, especially encapsulated bacteria. Splenectomy increases risk of overwhelming post-splenectomy infection (OPSI) from S. pneumoniae, H. influenzae, N. meningitidis — requiring vaccination and antibiotic prophylaxis."
  },
  {
    id: 5,
    question: "Lymph node architecture segregates T cells and B cells into:",
    options: ["Random distribution throughout", "T cells in the paracortex and B cells in follicles (cortex), with medullary sinuses containing plasma cells and macrophages", "T cells in follicles and B cells in the paracortex", "No specific organization"],
    answer: 1,
    explanation: "Lymph node organization: (1) Cortex — B-cell follicles (primary = resting; secondary = active with germinal centers), supported by FDCs, (2) Paracortex — T-cell zone, with DCs presenting antigens to T cells, high endothelial venules (HEVs) for lymphocyte entry, (3) Medulla — medullary cords (plasma cells) and medullary sinuses (macrophages), (4) Subcapsular sinus — macrophages capture particulate antigens from lymph. This organization facilitates DC-T cell interactions and T cell-B cell collaboration at the T-B border."
  },
  {
    id: 6,
    question: "High endothelial venules (HEVs) in lymph nodes are specialized for:",
    options: ["Filtering toxins", "Lymphocyte extravasation from blood into lymph nodes via a multi-step adhesion cascade (rolling, activation, arrest, transmigration)", "Red blood cell production", "Complement activation"],
    answer: 1,
    explanation: "HEVs are specialized postcapillary venules with tall (cuboidal) endothelial cells expressing: (1) peripheral node addressin (PNAd) — recognized by L-selectin (CD62L) on naive T/B cells for rolling, (2) chemokines (CCL21, CCL19) — activating integrins on rolling lymphocytes via CCR7, (3) ICAM-1/ICAM-2 — binding activated LFA-1 (αLβ2 integrin) for firm arrest. After arrest, lymphocytes transmigrate through the HEV wall into the lymph node. This multi-step adhesion cascade (rolling → activation → arrest → diapedesis) selectively recruits naive and central memory lymphocytes."
  },
  {
    id: 7,
    question: "Dendritic cells (DCs) are the most potent professional antigen-presenting cells because they:",
    options: ["Produce antibodies", "Efficiently capture, process, and present antigens on both MHC-I and MHC-II, express high levels of co-stimulatory molecules, and migrate to T-cell zones of lymph nodes", "Only function in innate immunity", "Cannot migrate from tissues"],
    answer: 1,
    explanation: "DCs bridge innate and adaptive immunity: (1) Immature DCs in tissues efficiently capture antigens (macropinocytosis, phagocytosis, receptor-mediated endocytosis), (2) Upon activation (TLR, inflammatory cytokines), DCs mature — upregulating MHC-II, co-stimulatory molecules (CD80/CD86/CD40), and CCR7 (for migration to lymph node T-cell zones via afferent lymphatics), (3) Mature DCs present antigens to naive T cells, providing all three signals: Signal 1 (MHC-peptide-TCR), Signal 2 (co-stimulation), Signal 3 (polarizing cytokines — IL-12 for Th1, etc.)."
  },
  {
    id: 8,
    question: "γδ (gamma-delta) T cells differ from conventional αβ T cells in that they:",
    options: ["Are identical to αβ T cells", "Recognize antigens without classical MHC restriction, respond to stress-induced ligands and phosphoantigens, and are enriched in epithelial tissues", "Only function in the thymus", "Require MHC-II presentation"],
    answer: 1,
    explanation: "γδ T cells (~1-5% of blood T cells, but enriched in skin, gut, reproductive tract): (1) recognize non-peptide antigens (phosphoantigens from microbes/stressed cells, lipid antigens on CD1d, stress ligands MICA/MICB via NKG2D) — often MHC-unrestricted, (2) bridge innate and adaptive immunity (rapid cytokine production without prior priming), (3) Vγ9Vδ2 subset (most common in blood) responds to microbial phosphoantigens and aminobisphosphonates, (4) Vδ1 subset (predominant in epithelia) recognizes stress-induced molecules — tissue surveillance role, (5) can perform cytotoxicity, produce IFN-γ, IL-17, and regulate immune responses."
  },
  {
    id: 9,
    question: "Mast cells reside in tissues and are activated by:",
    options: ["Only IgE crosslinking", "IgE-FcεRI crosslinking, complement anaphylatoxins (C3a, C5a), neuropeptides (substance P), TLR ligands, and physical stimuli", "Only TLR signaling", "Only complement"],
    answer: 1,
    explanation: "Mast cells are tissue-resident sentinels with diverse activation mechanisms: (1) IgE-FcεRI crosslinking (allergic reactions — immediate hypersensitivity), (2) complement fragments C3a, C5a (via C3aR, C5aR), (3) neuropeptides (substance P via MRGPRX2), (4) TLR ligands (bacterial/viral products), (5) physical stimuli (cold, pressure, trauma). Upon activation, mast cells degranulate (histamine, tryptase, heparin), synthesize lipid mediators (PGD2, LTC4/D4/E4), and produce cytokines/chemokines (TNF-α, IL-4, IL-13). Mast cells are involved in allergy, anaphylaxis, asthma, but also host defense and wound healing."
  },
  {
    id: 10,
    question: "Eosinophils are most important in defense against:",
    options: ["Intracellular bacteria", "Helminth parasites and in allergic inflammation, using granule proteins (MBP, ECP, EPO, EDN) to kill targets", "Viruses exclusively", "Encapsulated bacteria"],
    answer: 1,
    explanation: "Eosinophils: (1) Anti-helminth defense — IgE-coated helminths are attacked by eosinophils via FcεRII (CD23) and complement receptors. Granule contents (MBP — major basic protein, ECP — eosinophil cationic protein, EPO — eosinophil peroxidase, EDN — eosinophil-derived neurotoxin) are toxic to parasites. (2) Allergic inflammation — eosinophils contribute to tissue damage in asthma, eosinophilic esophagitis (EoE), and atopic dermatitis. (3) Recruitment by IL-5, eotaxin (CCL11) via CCR3. Anti-IL-5 antibodies (mepolizumab, reslizumab) and anti-IL-5Rα (benralizumab) treat eosinophilic asthma and hypereosinophilic syndrome."
  },

  // ===== COMPLEMENT ADVANCED (Q11–Q20) =====
  {
    id: 11,
    question: "C3 convertase of the classical pathway is:",
    options: ["C3bBb", "C4b2a (formerly C4b2b)", "Factor B and Factor D complex", "C5b-9"],
    answer: 1,
    explanation: "Classical pathway C3 convertase: C1q binds antibody-antigen complex → C1r/C1s activation → C1s cleaves C4 (→ C4a + C4b) and C2 (→ C2a + C2b). C4b and C2a associate on the pathogen surface forming C4b2a (C3 convertase). C4b2a cleaves C3 into C3a (anaphylatoxin) and C3b (opsonin). C3b joins the complex forming C4b2a3b (C5 convertase). Alternative pathway C3 convertase is C3bBb (formed by Factor B cleavage by Factor D on pathogen surfaces, stabilized by properdin)."
  },
  {
    id: 12,
    question: "Complement regulation is essential to prevent host tissue damage. Which regulators protect host cells?",
    options: ["Only Factor H", "DAF (CD55), MCP (CD46), CR1 (CD35), CD59 (protectin), Factor H, and Factor I", "Only C1 inhibitor", "No regulators exist"],
    answer: 1,
    explanation: "Host cells express complement regulatory proteins: (1) DAF/CD55 — accelerates decay of C3/C5 convertases on host surfaces, (2) MCP/CD46 — cofactor for Factor I-mediated C3b/C4b cleavage, (3) CR1/CD35 — decay-accelerating activity and Factor I cofactor, (4) CD59/protectin — blocks C9 polymerization, preventing MAC formation on host cells, (5) Factor H — fluid-phase regulator binding host surface sialic acids, cofactor for Factor I, (6) Factor I — serine protease cleaving C3b/C4b. Deficiency of CD59 and DAF → paroxysmal nocturnal hemoglobinuria (PNH — complement-mediated hemolysis)."
  },
  {
    id: 13,
    question: "Paroxysmal nocturnal hemoglobinuria (PNH) results from:",
    options: ["Excess complement production", "Somatic mutation in PIGA gene → absent GPI-anchored complement regulators (CD55, CD59) on blood cells → complement-mediated hemolysis", "Factor H deficiency", "C1 inhibitor deficiency"],
    answer: 1,
    explanation: "PNH: somatic mutation in PIG-A gene (X-linked, in HSCs) prevents GPI anchor synthesis → absence of GPI-anchored proteins (CD55/DAF, CD59/protectin) on RBCs, WBCs, and platelets. Without CD55/CD59, RBCs are vulnerable to complement-mediated lysis → intravascular hemolysis (hemoglobinuria, especially nocturnal when blood pH drops slightly). PNH also causes thrombosis (major cause of mortality) and bone marrow failure. Treatment: eculizumab/ravulizumab (anti-C5 monoclonal antibodies blocking MAC formation), and now iptacopan/danicopan (Factor B/Factor D inhibitors targeting proximal complement)."
  },
  {
    id: 14,
    question: "Hereditary angioedema (HAE) is caused by deficiency of:",
    options: ["C3", "C1 inhibitor (C1-INH/SERPING1), leading to uncontrolled bradykinin production causing episodic subcutaneous and submucosal edema", "Factor H", "MBL"],
    answer: 1,
    explanation: "HAE types I (low C1-INH levels, 85%) and II (normal levels, dysfunctional protein, 15%) are caused by SERPING1 mutations. C1-INH inhibits: (1) C1r/C1s (complement), (2) Factor XIIa and kallikrein (contact/kinin system). C1-INH deficiency → uncontrolled kallikrein → excess bradykinin → vascular permeability → angioedema of skin, GI tract, and potentially life-threatening laryngeal edema. Note: NOT histamine-mediated (antihistamines/epinephrine ineffective). Treatments: C1-INH replacement (Cinryze, Haegarda), kallikrein inhibitor (lanadelumab), bradykinin B2 receptor antagonist (icatibant)."
  },
  {
    id: 15,
    question: "Eculizumab (Soliris) is a monoclonal antibody that blocks:",
    options: ["C3", "C5, preventing C5a generation and MAC (C5b-9) formation", "Factor B", "C1q"],
    answer: 1,
    explanation: "Eculizumab binds C5 with high affinity, preventing C5 convertase-mediated cleavage of C5 into C5a (pro-inflammatory anaphylatoxin) and C5b (initiates MAC assembly). This blocks terminal complement activation while preserving proximal complement (C3b opsonization). FDA-approved for: PNH, atypical hemolytic uremic syndrome (aHUS), myasthenia gravis (AChR-antibody positive), and neuromyelitis optica spectrum disorder (NMOSD). Ravulizumab (Ultomiris) is a longer-acting anti-C5 (every 8 weeks vs. 2 weeks). Major risk: Neisseria meningitidis infection — vaccination required before treatment."
  },
  {
    id: 16,
    question: "The lectin pathway of complement is initiated by:",
    options: ["Antibodies binding antigens", "Mannose-binding lectin (MBL) or ficolins recognizing carbohydrate patterns on microbial surfaces", "Spontaneous C3 hydrolysis", "Factor B"],
    answer: 1,
    explanation: "Lectin pathway: MBL (mannose-binding lectin) and ficolins (ficolin-1/2/3) are pattern recognition molecules that bind: terminal mannose, N-acetylglucosamine, and acetylated sugars on microbial surfaces. Upon binding, MBL/ficolin-associated serine proteases (MASP-1, MASP-2) are activated. MASP-2 cleaves C4 and C2, forming C4b2a (same C3 convertase as classical pathway). MBL deficiency (common, ~5-30% of populations) is associated with increased susceptibility to infections, particularly in young children before adaptive immunity matures."
  },
  {
    id: 17,
    question: "Anaphylatoxins C3a and C5a function as:",
    options: ["Opsonins", "Pro-inflammatory mediators that cause mast cell degranulation, vascular permeability, smooth muscle contraction, and neutrophil chemotaxis", "Membrane attack complex components", "Complement regulatory proteins"],
    answer: 1,
    explanation: "C3a and C5a (small cleavage fragments of C3 and C5): (1) mast cell/basophil degranulation (histamine release — 'anaphylatoxin' activity), (2) increased vascular permeability, (3) smooth muscle contraction, (4) C5a is the most potent chemotactic factor for neutrophils (via C5aR1/CD88), (5) C5a activates neutrophils (oxidative burst, degranulation), (6) C3a and C5a upregulate adhesion molecules on endothelium. C5a is ~20x more potent than C3a. Carboxypeptidase N inactivates anaphylatoxins by removing C-terminal arginine. Excessive anaphylatoxin generation contributes to sepsis and systemic inflammatory response syndrome."
  },
  {
    id: 18,
    question: "Atypical hemolytic uremic syndrome (aHUS) is caused by:",
    options: ["E. coli O157:H7 Shiga toxin", "Genetic or acquired dysregulation of the alternative complement pathway (mutations in Factor H, Factor I, MCP, C3, Factor B) causing uncontrolled complement activation on endothelium", "Only von Willebrand factor deficiency", "Only IgA deposition"],
    answer: 1,
    explanation: "aHUS (~10% of HUS) results from uncontrolled alternative complement pathway activation on renal endothelium: mutations in complement regulators (Factor H ~30%, MCP/CD46 ~10%, Factor I ~5%) or gain-of-function mutations in complement components (C3, Factor B). Anti-Factor H autoantibodies can also cause aHUS. Unregulated C3b deposition → endothelial damage → thrombotic microangiopathy (microangiopathic hemolytic anemia, thrombocytopenia, acute kidney injury). Eculizumab/ravulizumab (anti-C5) is the standard treatment, blocking terminal complement while preserving C3b-mediated opsonization."
  },
  {
    id: 19,
    question: "Complement C4 deficiency (particularly homozygous C4A null) is strongly associated with:",
    options: ["Neisseria infections", "Systemic lupus erythematosus (SLE) due to impaired immune complex clearance", "PNH", "Hereditary angioedema"],
    answer: 1,
    explanation: "C4 deficiency (especially C4A null homozygosity) is the strongest genetic risk factor for SLE among complement deficiencies. C4 (with C2) is required for classical pathway activation, which: (1) solubilizes immune complexes (preventing their tissue deposition), (2) clears apoptotic cells (C1q binding). Without C4, immune complexes accumulate → tissue deposition → type III hypersensitivity. Complete C4 deficiency → >75% develop SLE. Complete C1q deficiency has the highest penetrance for SLE (~93%). The complement-SLE connection highlights the role of complement in waste disposal and tolerance."
  },
  {
    id: 20,
    question: "Properdin (Factor P) in the complement system functions as:",
    options: ["A complement inhibitor", "The only positive regulator of complement, stabilizing the alternative pathway C3 convertase (C3bBb)", "A C3 convertase", "A membrane attack complex component"],
    answer: 1,
    explanation: "Properdin is the sole positive regulator of complement. It stabilizes the alternative pathway C3 convertase (C3bBb) by binding to and extending its half-life ~5-10 fold on pathogen surfaces. Properdin can also serve as a pattern recognition molecule, directly binding certain microbial surfaces and recruiting C3b to initiate alternative pathway activation. Properdin deficiency (X-linked) is associated with increased susceptibility to meningococcal disease. All other complement regulatory proteins (Factor H, DAF, MCP, CD59, C1-INH) are inhibitors."
  },

  // ===== IMMUNOTHERAPY & BIOLOGICS (Q21–Q30) =====
  {
    id: 21,
    question: "Rituximab (anti-CD20) depletes B cells and is used to treat:",
    options: ["Only infections", "B-cell lymphomas, rheumatoid arthritis, ANCA-associated vasculitis, pemphigus vulgaris, and other B-cell-mediated diseases", "Only T-cell lymphomas", "Only complement deficiencies"],
    answer: 1,
    explanation: "Rituximab is a chimeric anti-CD20 monoclonal antibody that depletes CD20+ B cells through: ADCC, complement-dependent cytotoxicity (CDC), and direct apoptosis induction. CD20 is expressed from pre-B cell to mature B cell stage but NOT on pro-B cells or plasma cells (allowing B-cell recovery and maintained antibody production from long-lived plasma cells). FDA-approved for: NHL, CLL, RA, GPA/MPA (ANCA vasculitis), pemphigus vulgaris, and used off-label in SLE, autoimmune hemolytic anemia, ITP, and MS. Obinutuzumab (type II anti-CD20) has enhanced ADCC."
  },
  {
    id: 22,
    question: "TNF-α inhibitors (infliximab, adalimumab, etanercept) are effective in treating:",
    options: ["Only infections", "Rheumatoid arthritis, inflammatory bowel disease, psoriasis, ankylosing spondylitis, and other immune-mediated inflammatory diseases", "Only allergic diseases", "Only complement-mediated diseases"],
    answer: 1,
    explanation: "Anti-TNF biologics revolutionized treatment of inflammatory diseases: (1) Infliximab — chimeric anti-TNF mAb (RA, CD, UC, AS, psoriasis), (2) Adalimumab — fully human anti-TNF mAb (same indications plus uveitis, hidradenitis suppurativa), (3) Etanercept — soluble TNFR2-Fc fusion protein (RA, AS, psoriasis but NOT IBD), (4) Certolizumab pegol — PEGylated Fab' fragment (RA, CD, AS, psoriasis), (5) Golimumab — fully human mAb (RA, UC, AS). Risks: infections (TB reactivation — screen before starting, opportunistic infections), lymphoma, and demyelinating disease."
  },
  {
    id: 23,
    question: "Dupilumab targets which cytokine receptor to treat type 2 inflammatory diseases?",
    options: ["TNF receptor", "IL-4 receptor alpha (IL-4Rα), blocking both IL-4 and IL-13 signaling", "IL-17 receptor", "IL-6 receptor"],
    answer: 1,
    explanation: "Dupilumab is a fully human monoclonal antibody against IL-4Rα, the shared receptor subunit for both IL-4 (type I receptor: IL-4Rα/γc) and IL-13 (type II receptor: IL-4Rα/IL-13Rα1). Blocking IL-4Rα inhibits both cytokines, suppressing: Th2 differentiation, IgE class switching, eosinophil recruitment, mucus production, and epithelial barrier dysfunction. FDA-approved for: moderate-severe atopic dermatitis, moderate-severe asthma (eosinophilic/OCS-dependent), CRSwNP, eosinophilic esophagitis (EoE), prurigo nodularis, and COPD with type 2 inflammation."
  },
  {
    id: 24,
    question: "JAK inhibitors (tofacitinib, baricitinib, upadacitinib) treat inflammatory diseases by:",
    options: ["Blocking TNF-α only", "Inhibiting Janus kinases that transduce signals from multiple cytokine receptors, broadly suppressing inflammatory cytokine signaling", "Depleting B cells", "Blocking complement"],
    answer: 1,
    explanation: "JAK inhibitors are small molecule drugs blocking intracellular JAK kinases: (1) Tofacitinib — JAK1/JAK3 preferential (RA, UC, PsA, AS), (2) Baricitinib — JAK1/JAK2 (RA, atopic dermatitis, alopecia areata), (3) Upadacitinib — JAK1 selective (RA, AD, UC, CD, AS, PsA), (4) Ruxolitinib — JAK1/JAK2 (myelofibrosis, polycythemia vera, GVHD, topical for AD/vitiligo). JAKi block signaling from multiple cytokine receptors simultaneously (IL-6, IL-12, IL-23, IFN, IL-7, IL-15, IL-21). Advantages: oral dosing. Risks: infections (herpes zoster), VTE, cardiovascular events, malignancy — black box warnings limit use to TNF-failure patients in some indications."
  },
  {
    id: 25,
    question: "Natalizumab (anti-α4 integrin) treats multiple sclerosis by:",
    options: ["Killing autoreactive T cells", "Blocking lymphocyte trafficking across the blood-brain barrier by inhibiting α4β1 integrin (VLA-4) binding to VCAM-1 on brain endothelium", "Promoting remyelination directly", "Activating Tregs"],
    answer: 1,
    explanation: "Natalizumab is a humanized mAb against α4 integrin (α4β1/VLA-4 and α4β7). It prevents lymphocyte migration across the blood-brain barrier (α4β1-VCAM-1 interaction) and into the gut (α4β7-MAdCAM-1 interaction). By blocking CNS lymphocyte infiltration, natalizumab effectively reduces MS relapses (~68% reduction). Major risk: progressive multifocal leukoencephalopathy (PML) from JC virus reactivation in immunocompromised CNS — risk stratified by anti-JCV antibody status, prior immunosuppression, and treatment duration."
  },
  {
    id: 26,
    question: "Abatacept (CTLA-4-Ig) treats rheumatoid arthritis by:",
    options: ["Depleting T cells", "Blocking co-stimulation by binding B7 (CD80/CD86) on APCs, preventing CD28-mediated T-cell activation", "Inhibiting TNF-α", "Blocking IL-6"],
    answer: 1,
    explanation: "Abatacept is a fusion protein of CTLA-4 extracellular domain with IgG1 Fc (CTLA-4-Ig). Since CTLA-4 has ~20x higher affinity for B7 than CD28, abatacept outcompetes CD28 for B7 binding on APCs, blocking the co-stimulatory signal (Signal 2) required for T-cell activation. Without co-stimulation, T cells encountering antigen become anergic. FDA-approved for RA and juvenile idiopathic arthritis. Unlike belatacept (second-generation, higher affinity for CD86, used in kidney transplantation), abatacept is primarily used in autoimmune disease."
  },
  {
    id: 27,
    question: "Anti-IL-17A antibodies (secukinumab, ixekizumab) are highly effective in:",
    options: ["Type 1 diabetes", "Psoriasis, psoriatic arthritis, and ankylosing spondylitis by blocking IL-17A-mediated neutrophilic inflammation and keratinocyte activation", "Allergic rhinitis", "HIV infection"],
    answer: 1,
    explanation: "IL-17A drives: (1) neutrophil recruitment (via G-CSF, CXCL1/2/8 induction), (2) keratinocyte proliferation and antimicrobial peptide production, (3) pro-inflammatory cytokine amplification (IL-6, TNF-α). IL-17A is central to psoriasis pathogenesis (Th17/IL-23/IL-17 axis). Anti-IL-17A antibodies: secukinumab, ixekizumab (both anti-IL-17A); brodalumab (anti-IL-17RA, blocks IL-17A, IL-17F, IL-17A/F, IL-17C, IL-25). PASI 90 response rates: 70-80% (superior to anti-TNF in psoriasis). Caution: increased Candida infections (IL-17 critical for mucocutaneous anti-Candida defense)."
  },
  {
    id: 28,
    question: "Vedolizumab (anti-α4β7 integrin) is gut-selective and treats:",
    options: ["Multiple sclerosis", "Inflammatory bowel disease (ulcerative colitis and Crohn's disease) by selectively blocking lymphocyte trafficking to the gut", "Psoriasis", "Rheumatoid arthritis"],
    answer: 1,
    explanation: "Vedolizumab selectively blocks α4β7 integrin interaction with MAdCAM-1 (mucosal addressin cell adhesion molecule-1, expressed on gut endothelium). This prevents lymphocyte migration specifically to the GI tract, reducing intestinal inflammation without systemic immunosuppression. Unlike natalizumab (which also blocks α4β1 and CNS trafficking), vedolizumab is gut-selective with much lower PML risk. FDA-approved for moderate-severe UC and CD. Gut-selective mechanism reduces systemic infection risk compared to systemic immunosuppressants."
  },
  {
    id: 29,
    question: "Intravenous immunoglobulin (IVIG) therapy works through which immunomodulatory mechanisms?",
    options: ["Only pathogen neutralization", "Fc receptor blockade, anti-idiotype antibodies, complement modulation, cytokine regulation, and modulation of dendritic cell and T-cell function", "Only complement activation", "Only opsonization enhancement"],
    answer: 1,
    explanation: "IVIG (pooled IgG from thousands of donors) has multiple immunomodulatory mechanisms: (1) FcγR blockade/saturation on macrophages (reducing phagocytosis of antibody-coated cells — key mechanism in ITP), (2) anti-idiotypic antibodies (neutralizing pathogenic autoantibodies), (3) FcRn saturation (accelerating pathogenic IgG catabolism), (4) complement modulation (scavenging C3a/C5a), (5) Treg expansion and DC modulation, (6) cytokine modulation. FDA-approved indications: primary immunodeficiency (replacement), ITP, CIDP, Kawasaki disease, multifocal motor neuropathy. Off-label: many autoimmune/inflammatory conditions."
  },
  {
    id: 30,
    question: "Belimumab targets which cytokine important for B-cell survival?",
    options: ["TNF-α", "BLyS/BAFF (B-lymphocyte stimulator), reducing B-cell survival and autoantibody production in SLE", "IL-6", "IL-12"],
    answer: 1,
    explanation: "Belimumab is a fully human mAb against soluble BAFF (B-cell activating factor, also called BLyS). BAFF is a TNF family cytokine essential for B-cell survival, maturation, and class switching. Elevated BAFF levels in SLE correlate with disease activity and autoantibody production. By neutralizing soluble BAFF, belimumab reduces: transitional and naive B cells, plasma cells, and autoantibody levels. FDA-approved for active SLE (first new SLE drug in 50+ years) and lupus nephritis. Does not rapidly deplete existing memory B cells or long-lived plasma cells."
  },

  // ===== ADVANCED IMMUNOLOGY CONCEPTS (Q31–Q40) =====
  {
    id: 31,
    question: "T follicular helper (Tfh) cells are essential for:",
    options: ["Killing virus-infected cells", "Providing help to B cells in germinal centers, promoting class switch recombination, somatic hypermutation, and affinity maturation", "Suppressing immune responses", "Antigen presentation to CD8+ T cells"],
    answer: 1,
    explanation: "Tfh cells (BCL-6+, CXCR5+, PD-1hi, ICOShi, producing IL-21 and IL-4) migrate to B-cell follicles via CXCR5-CXCL13 chemotaxis. In germinal centers, Tfh cells: (1) provide CD40L signal for B-cell survival and CSR, (2) secrete IL-21 (promotes B-cell proliferation, plasma cell differentiation, affinity maturation) and IL-4 (CSR to IgG1, IgE), (3) select high-affinity B cells by limiting T-cell help to B cells presenting the most antigen on MHC-II. Without Tfh cells, germinal centers cannot form, and high-affinity antibody responses fail."
  },
  {
    id: 32,
    question: "The immunological synapse formed between T cells and APCs involves:",
    options: ["Random distribution of receptors", "Organized concentric rings — central supramolecular activation cluster (cSMAC: TCR, CD28, PKCθ) surrounded by peripheral SMAC (pSMAC: LFA-1/ICAM-1)", "Only TCR engagement", "Only chemokine signaling"],
    answer: 1,
    explanation: "The immunological synapse (IS) is a highly organized interface: (1) cSMAC (central) — concentrates TCR-MHC/peptide, CD28-B7, and signaling molecules (PKCθ, Lck), site of signal transduction and receptor internalization, (2) pSMAC (peripheral) — integrin ring (LFA-1-ICAM-1) providing adhesion and stability, (3) dSMAC (distal) — actin-rich zone with large molecules (CD43, CD45). IS formation: (1) initial TCR-MHC contacts in small microclusters, (2) actin-dependent centripetal transport to form the mature synapse, (3) sustained signaling for T-cell activation. IS formation is defective in Wiskott-Aldrich syndrome (WASP regulates actin)."
  },
  {
    id: 33,
    question: "Antibody effector functions are determined by the:",
    options: ["Variable region only", "Constant region (Fc) of the heavy chain, which determines isotype-specific interactions with Fc receptors, complement, and FcRn", "Light chain type only", "J chain exclusively"],
    answer: 1,
    explanation: "The Fc region determines antibody effector functions: (1) FcγR binding — IgG1/IgG3 have high affinity for FcγRs (mediating ADCC, opsonization, phagocytosis), (2) Complement activation — IgM (pentameric) and IgG1/IgG3 efficiently activate classical pathway via C1q, (3) FcεRI binding — IgE binds with extraordinarily high affinity (Ka ~10¹⁰ M⁻¹), sensitizing mast cells, (4) FcRn binding — IgG Fc binds FcRn for placental transfer and extended half-life, (5) pIgR binding — dimeric IgA Fc binds pIgR for transcytosis. Fc engineering (glycoengineering, mutations) modifies therapeutic antibody effector functions."
  },
  {
    id: 34,
    question: "Affinity maturation of antibodies occurs through:",
    options: ["V(D)J recombination in the bone marrow", "Somatic hypermutation in germinal center B cells followed by selection for highest-affinity variants by follicular dendritic cells", "Class switch recombination only", "Receptor editing in immature B cells"],
    answer: 1,
    explanation: "Affinity maturation: (1) In the GC dark zone, centroblasts undergo rapid proliferation and AID-mediated somatic hypermutation of Ig V-region genes (~10⁻³ mutations/bp/division), (2) Centrocytes migrate to the light zone and test mutated BCRs against antigen displayed on FDCs as immune complexes, (3) B cells with highest-affinity BCRs compete most effectively for limited antigen and receive survival signals from Tfh cells (CD40L, IL-21), (4) Lower-affinity B cells undergo apoptosis. Over multiple rounds, average antibody affinity increases 10-100 fold. This process takes 1-3 weeks and produces high-affinity memory B cells and long-lived plasma cells."
  },
  {
    id: 35,
    question: "Class switch recombination (CSR) is directed by specific cytokines: IL-4 promotes switching to:",
    options: ["IgA", "IgE (and IgG4 in humans)", "IgG1 and IgG3", "IgM"],
    answer: 1,
    explanation: "Cytokine-directed CSR: IL-4 → IgE (and IgG4 in humans) — Th2-mediated allergic and anti-helminth responses. IFN-γ → IgG1/IgG3 (Th1-mediated opsonization and complement activation). TGF-β → IgA (mucosal immunity) and IgG2b. IL-5 enhances IgA in combination with TGF-β. IL-21 → IgG1/IgG3 and plasma cell differentiation. APRIL/BAFF → T-independent IgA switching in gut. CSR requires: (1) CD40L-CD40 interaction (T-cell help), (2) AID (creates DSBs in switch regions), (3) cytokine-induced germline transcription through target switch regions."
  },
  {
    id: 36,
    question: "ICOS (inducible co-stimulator) is important in adaptive immunity because it:",
    options: ["Inhibits T-cell activation", "Is essential for Tfh cell differentiation, germinal center formation, and T-cell-dependent antibody responses", "Only functions in innate immunity", "Activates complement"],
    answer: 1,
    explanation: "ICOS (CD278) is a co-stimulatory receptor (CD28 family) expressed on activated T cells that binds ICOS-L (B7h/B7-H2) on APCs and B cells. ICOS is critical for: (1) Tfh cell differentiation and GC formation, (2) IL-21 and IL-4 production by Tfh cells, (3) T-dependent antibody responses (CSR, affinity maturation), (4) T-cell effector function (IL-10 production). ICOS deficiency causes combined immunodeficiency with severe reduction in memory B cells and class-switched antibodies, similar to CVID but with impaired T-cell help. ICOS agonists are explored in cancer immunotherapy."
  },
  {
    id: 37,
    question: "The complement lectin pathway can be deficient due to low MBL levels. MBL deficiency:",
    options: ["Is always clinically significant", "Is common (~5-30% of populations) and usually asymptomatic but may increase infection risk in children or immunocompromised individuals", "Causes severe SCID", "Is always associated with autoimmunity"],
    answer: 1,
    explanation: "MBL deficiency is the most common complement deficiency (~5-30% depending on population, with MBL2 gene polymorphisms). Most MBL-deficient individuals are healthy — redundancy from other complement pathways and adaptive immunity compensates. Clinically significant in: (1) young children (before adaptive immunity fully matures), (2) chemotherapy patients (additional immunosuppression), (3) co-existing immune defects. MBL deficiency may increase susceptibility to respiratory infections in children and post-transplant infections."
  },
  {
    id: 38,
    question: "The concept of immune privilege in cancer (analogous to tissue immune privilege) involves:",
    options: ["Enhanced immune recognition of tumors", "Tumor creation of an immunosuppressive microenvironment through PD-L1, IDO, TGF-β, Tregs, and MDSCs that shields from immune attack", "Normal immune surveillance only", "Complete absence of immune cells in tumors"],
    answer: 1,
    explanation: "Tumors create immune-privileged microenvironments by: (1) expressing PD-L1 and other co-inhibitory ligands, (2) recruiting Tregs and MDSCs, (3) producing immunosuppressive cytokines (TGF-β, IL-10, VEGF), (4) expressing IDO (tryptophan depletion), (5) downregulating MHC-I and antigen processing, (6) producing adenosine (CD39/CD73 pathway), (7) creating physical barriers (dense stroma). This concept has driven immunotherapy development — checkpoint inhibitors, CAR-T cells, and combination strategies aim to break tumor immune privilege."
  },
  {
    id: 39,
    question: "Systems immunology uses which approaches to understand immune responses?",
    options: ["Only single-gene studies", "Multi-omics integration (transcriptomics, proteomics, metabolomics, epigenomics), single-cell technologies, and computational modeling to study immune system complexity", "Only clinical observation", "Only animal models"],
    answer: 1,
    explanation: "Systems immunology integrates: (1) high-dimensional single-cell profiling (scRNA-seq, CyTOF, CITE-seq), (2) multi-omics (bulk/single-cell transcriptomics, proteomics, metabolomics, epigenomics, microbiome), (3) spatial biology (spatial transcriptomics, imaging mass cytometry), (4) computational modeling (network analysis, machine learning, dynamical systems), (5) clinical data integration. Applications: predicting vaccine responses (Human Immunology Project Consortium), understanding immune aging, precision immunology for autoimmune disease, and identifying immunotherapy biomarkers."
  },
  {
    id: 40,
    question: "Neuroimmunology studies the bidirectional interactions between the nervous and immune systems, including:",
    options: ["No connection between nervous and immune systems", "Hypothalamic-pituitary-adrenal (HPA) axis regulation of immunity, vagus nerve anti-inflammatory reflex, neuroimmune communication via neuropeptides, and neuroinflammation", "Only immune cells in the brain", "Only stress effects on immunity"],
    answer: 1,
    explanation: "Neuroimmune interactions: (1) HPA axis — stress → cortisol → immunosuppression (reduced NF-κB, Th1 suppression, lymphocyte apoptosis), (2) Sympathetic nervous system — norepinephrine via β2-adrenergic receptors modulates immune cell function, (3) Vagus nerve cholinergic anti-inflammatory pathway — acetylcholine from vagus nerve suppresses TNF-α production by macrophages via α7nAChR, (4) Neuropeptides (substance P, CGRP, VIP) modulate immune responses, (5) Microglia — brain-resident macrophages mediating neuroinflammation in MS, Alzheimer's, Parkinson's. Bioelectronic medicine targeting the vagus nerve is an emerging therapeutic approach."
  },

  // ===== CLINICAL IMMUNOLOGY — SPECIAL TOPICS (Q41–Q50) =====
  {
    id: 41,
    question: "Antinuclear antibodies (ANA) testing by immunofluorescence on HEp-2 cells can show patterns including:",
    options: ["Only one pattern", "Homogeneous (anti-dsDNA, anti-histone), speckled (anti-Smith, anti-RNP, anti-SSA/SSB), nucleolar (anti-RNA polymerase, anti-Scl-70), and centromere patterns", "No specific patterns", "Only positive or negative results"],
    answer: 1,
    explanation: "ANA patterns on HEp-2 cells and their associations: (1) Homogeneous — anti-dsDNA (SLE), anti-histone (drug-induced lupus), (2) Speckled — anti-Sm (SLE-specific), anti-U1RNP (MCTD), anti-SSA/Ro and anti-SSB/La (Sjögren's, neonatal lupus), (3) Nucleolar — anti-RNA polymerase III, anti-U3RNP (systemic sclerosis), (4) Centromere — anti-CENP-B (limited cutaneous systemic sclerosis/CREST), (5) Cytoplasmic — anti-Jo-1 (dermatomyositis/polymyositis), anti-mitochondrial (primary biliary cholangitis). ANA is sensitive (~95-99%) but not specific for SLE — positive in many conditions and ~5-15% of healthy individuals."
  },
  {
    id: 42,
    question: "Anti-neutrophil cytoplasmic antibodies (ANCA) are associated with:",
    options: ["Allergic rhinitis", "Systemic vasculitis — c-ANCA/PR3 with granulomatosis with polyangiitis (GPA) and p-ANCA/MPO with microscopic polyangiitis (MPA) and eosinophilic GPA", "Only rheumatoid arthritis", "Only SLE"],
    answer: 1,
    explanation: "ANCA patterns and disease associations: (1) c-ANCA (cytoplasmic pattern) — target: proteinase 3 (PR3) → strongly associated with GPA (Wegener's) — upper/lower respiratory necrotizing granulomatous inflammation + glomerulonephritis. (2) p-ANCA (perinuclear pattern) — target: myeloperoxidase (MPO) → associated with MPA (microscopic polyangiitis) and EGPA (eosinophilic GPA/Churg-Strauss). ANCA pathogenesis: activated neutrophils express PR3/MPO on surface → ANCA binding → neutrophil activation → ROS/protease release → vascular endothelial damage. Treatment: rituximab or cyclophosphamide + glucocorticoids."
  },
  {
    id: 43,
    question: "Celiac disease is an autoimmune condition triggered by:",
    options: ["Lactose", "Gluten (gliadin peptides) in genetically susceptible individuals (HLA-DQ2/DQ8), causing tissue transglutaminase-mediated immune activation and small intestinal villous atrophy", "Peanut allergens", "Bacterial infection"],
    answer: 1,
    explanation: "Celiac disease pathogenesis: (1) gliadin peptides from wheat/barley/rye resist complete digestion, (2) tissue transglutaminase (tTG) deamidates gliadin → enhanced binding to HLA-DQ2 (95%) or HLA-DQ8 (5%), (3) deamidated gliadin-specific CD4+ T cells in lamina propria produce IFN-γ → macrophage activation, (4) intraepithelial CD8+ T cells kill enterocytes (NKG2D-MICA interaction), (5) villous atrophy, crypt hyperplasia, intraepithelial lymphocytosis. Diagnosis: anti-tTG IgA (screening), anti-endomysial IgA (confirmatory), duodenal biopsy. Strict gluten-free diet is the treatment."
  },
  {
    id: 44,
    question: "IgG4-related disease (IgG4-RD) is characterized by:",
    options: ["IgE-mediated allergic inflammation", "Dense lymphoplasmacytic infiltration enriched in IgG4+ plasma cells, storiform fibrosis, obliterative phlebitis, and elevated serum IgG4", "Only affecting the pancreas", "Complement-mediated tissue destruction"],
    answer: 1,
    explanation: "IgG4-RD is a fibroinflammatory condition affecting virtually any organ: pancreas (autoimmune pancreatitis type 1), salivary/lacrimal glands (Mikulicz disease), bile ducts (IgG4-sclerosing cholangitis), retroperitoneum (retroperitoneal fibrosis), thyroid (Riedel's thyroiditis), orbits, kidneys, aorta, lungs, meninges. Pathologic hallmarks: (1) dense lymphoplasmacytic infiltrate, (2) storiform (cartwheel) fibrosis, (3) obliterative phlebitis, (4) >40% IgG4+ plasma cells. Despite elevated IgG4, the pathogenic role of IgG4 itself is debated — CD4+ cytotoxic T cells (SLAMF7+) may drive fibrosis. Treatment: glucocorticoids (highly responsive), rituximab for relapsing disease."
  },
  {
    id: 45,
    question: "Hemophagocytic lymphohistiocytosis (HLH) is a hyperinflammatory syndrome caused by:",
    options: ["Immunodeficiency", "Uncontrolled activation of macrophages and T cells with excessive cytokine production (cytokine storm), hemophagocytosis, and multi-organ damage", "Only bacterial infection", "Only allergic reactions"],
    answer: 1,
    explanation: "HLH: uncontrolled immune activation → cytokine storm (IFN-γ, TNF-α, IL-6, IL-18, IL-1β) → macrophage activation and hemophagocytosis. Types: (1) Primary/familial — genetic defects in cytotoxic granule pathway (perforin/PRF1, Munc13-4/UNC13D, syntaxin-11, MUNC18-2) preventing NK/CTL killing → inability to terminate immune responses, (2) Secondary — triggered by infections (EBV, CMV), malignancies (lymphoma), or autoimmune diseases (MAS — macrophage activation syndrome in SLE, JIA). Features: fever, cytopenias, hepatosplenomegaly, hyperferritinemia (>10,000), hypertriglyceridemia, elevated sIL-2R. Treatment: etoposide-based HLH-94 protocol, dexamethasone, cyclosporine, emapalumab (anti-IFN-γ)."
  },
  {
    id: 46,
    question: "Type 1 innate lymphoid cells (ILC1s) produce which cytokines and are involved in defense against:",
    options: ["IL-4 and IL-5 against helminths", "IFN-γ and TNF-α against intracellular pathogens (viruses, intracellular bacteria)", "IL-17 and IL-22 against extracellular bacteria", "IL-10 against allergens"],
    answer: 1,
    explanation: "ILC1s (T-bet+) are tissue-resident innate lymphocytes producing IFN-γ and TNF-α in response to IL-12 and IL-18 (from macrophages/DCs). They mirror Th1 cells functionally but lack rearranged antigen receptors. ILC1s contribute to defense against intracellular pathogens (viruses, Toxoplasma, Salmonella) and are found in liver, intestine, salivary glands, and uterus. Distinction from NK cells: ILC1s are non-cytotoxic (lack perforin/granzyme), tissue-resident, and T-bet-dependent (not Eomes-dependent like NK cells). ILC1 expansion occurs in Crohn's disease intestinal tissue."
  },
  {
    id: 47,
    question: "Complement receptor 2 (CR2/CD21) on B cells functions as:",
    options: ["A phagocytic receptor", "A co-receptor in the BCR complex — binding C3d-opsonized antigens, lowering the B-cell activation threshold by ~1000-fold", "An inhibitory receptor", "A chemokine receptor"],
    answer: 1,
    explanation: "CR2 (CD21) is part of the B-cell co-receptor complex (CR2/CD19/CD81). When antigen is coated with C3d (complement degradation product), CR2 on B cells binds C3d simultaneously as the BCR binds the antigen. This co-engagement: (1) brings CD19 (signaling molecule) into proximity with the BCR complex, (2) amplifies BCR signaling by ~1000-fold (reducing activation threshold), (3) links innate complement activation to adaptive B-cell responses. This explains why complement-opsonized antigens are much more immunogenic than non-opsonized antigens. CR2 is also the receptor for EBV entry into B cells."
  },
  {
    id: 48,
    question: "Immune complex hypersensitivity diseases can be confirmed by:",
    options: ["Skin prick testing", "Measuring serum complement levels (C3, C4 — consumed during immune complex clearance), detecting immune complexes by C1q binding assay, and tissue biopsy showing granular immunofluorescence", "Only IgE levels", "Only ANA testing"],
    answer: 1,
    explanation: "Diagnosis of immune complex disease: (1) Serum complement — low C3, C4 (consumed by classical pathway activation), low CH50 (total hemolytic complement), (2) Immune complex detection — C1q binding assay, Raji cell assay, PEG precipitation, (3) Tissue biopsy — granular (lumpy-bumpy) immunofluorescence pattern of IgG/IgM and C3 deposition (distinguishing from linear pattern in anti-GBM disease), (4) Serology — specific autoantibodies (anti-dsDNA in SLE). Serial complement monitoring correlates with disease activity in SLE nephritis."
  },
  {
    id: 49,
    question: "Immune reconstitution after hematopoietic stem cell transplantation follows which general order?",
    options: ["T cells recover first", "Innate immunity (neutrophils, NK cells) recovers first (weeks), followed by B cells (months), and finally CD4+ T cells (months to years, with naive T-cell recovery dependent on thymic function)", "All lineages recover simultaneously", "B cells recover first"],
    answer: 1,
    explanation: "Post-HSCT immune reconstitution timeline: (1) Neutrophils — engraftment ~day 14-21 (first to recover), (2) NK cells — weeks to months (thymus-independent, first lymphocyte subset), (3) CD8+ T cells — months (initial recovery from donor memory expansion, not thymic output), (4) B cells — 3-12 months (IgM first, IgG may take 1-2 years), (5) CD4+ T cells — 6-24+ months (slowest, naive CD4+ recovery requires functional thymus — severely impaired in older adults). During immunosuppressed period: high risk for CMV, EBV, fungal infections, PCP. Vaccination re-initiation recommended at 6-12 months post-HSCT."
  },
  {
    id: 50,
    question: "Precision immunology aims to:",
    options: ["Use the same treatment for all immune-mediated diseases", "Integrate individual immunological profiles (immune phenotyping, genomics, microbiome) to guide personalized prevention and treatment strategies for immune-mediated diseases", "Only study rare immunodeficiencies", "Eliminate all immune variation"],
    answer: 1,
    explanation: "Precision immunology applies personalized medicine principles to immunology: (1) immune phenotyping — deep profiling of immune cell subsets, activation states, and functional capacity (CyTOF, scRNA-seq), (2) genomics — HLA typing, cytokine gene polymorphisms, pharmacogenomics (HLA-B*57:01-abacavir), (3) microbiome profiling — predicting immunotherapy response, autoimmune disease risk, (4) biomarker-guided therapy — selecting biologics based on immune pathway predominance (Th2-high vs. Th2-low asthma, IL-17 vs. TNF predominance), (5) vaccine personalization — tailoring vaccines based on immunological age, prior exposures, and genetic background. This represents the future of immunology."
  }
]

export default questions
