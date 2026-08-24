const questions = [
  // ===== HYPERSENSITIVITY REACTIONS (Q1–Q10) =====
  {
    id: 1,
    question: "Type I hypersensitivity (immediate/anaphylactic) is mediated by:",
    options: ["IgG antibodies and complement", "IgE antibodies crosslinking on mast cells and basophils, causing degranulation", "Cytotoxic T cells", "Immune complex deposition"],
    answer: 1,
    explanation: "Type I hypersensitivity: (1) Sensitization — allergen exposure induces Th2 response, IL-4 drives IgE class switch, IgE binds FcεRI on mast cells/basophils. (2) Re-exposure — allergen crosslinks surface-bound IgE, triggering mast cell degranulation: preformed mediators (histamine, tryptase, heparin — immediate phase, minutes), newly synthesized lipid mediators (leukotrienes, prostaglandin D2 — late phase, hours), and cytokines (TNF-α, IL-4, IL-5, IL-13). Examples: anaphylaxis, allergic rhinitis, asthma, food allergy."
  },
  {
    id: 2,
    question: "Type II hypersensitivity (cytotoxic/antibody-mediated) involves:",
    options: ["IgE-mediated mast cell degranulation", "IgG or IgM antibodies directed against cell surface or extracellular matrix antigens, causing cell destruction via complement, ADCC, or phagocytosis", "T-cell-mediated tissue damage", "Immune complex deposition in vessels"],
    answer: 1,
    explanation: "Type II hypersensitivity involves antibodies (IgG/IgM) targeting antigens on cell surfaces or extracellular matrix. Effector mechanisms: (1) complement-mediated lysis (MAC), (2) opsonization and phagocytosis (C3b, Fc receptors), (3) ADCC (NK cells via FcγRIII). Examples: ABO transfusion reactions, hemolytic disease of newborn (Rh incompatibility), autoimmune hemolytic anemia, Goodpasture syndrome (anti-GBM antibodies), myasthenia gravis (anti-AChR — but antibody blocks receptor rather than destroying cells)."
  },
  {
    id: 3,
    question: "Type III hypersensitivity is caused by:",
    options: ["Direct T-cell cytotoxicity", "Deposition of antigen-antibody immune complexes in tissues, activating complement and recruiting neutrophils", "IgE-mediated reactions", "Delayed-type hypersensitivity"],
    answer: 1,
    explanation: "Type III reactions occur when antigen-antibody (IgG) immune complexes form in excess, deposit in blood vessel walls, glomeruli, joints, and skin. Deposited complexes activate complement (C3a, C5a attract neutrophils), and neutrophils release lysosomal enzymes and ROS causing tissue damage. Examples: serum sickness, Arthus reaction, SLE (anti-dsDNA immune complexes → glomerulonephritis), post-streptococcal glomerulonephritis, and polyarteritis nodosa (HBV immune complexes)."
  },
  {
    id: 4,
    question: "Type IV hypersensitivity (delayed-type) is mediated by:",
    options: ["IgE antibodies", "Antigen-specific T cells (Th1 CD4+ cells and/or CD8+ CTLs) that recruit and activate macrophages", "Complement activation", "IgG immune complexes"],
    answer: 1,
    explanation: "Type IV is the only antibody-independent hypersensitivity, mediated by T cells. Subtypes: (1) DTH (delayed-type hypersensitivity) — Th1 cells produce IFN-γ activating macrophages, causing granulomatous inflammation (tuberculin test, contact dermatitis, granulomas in TB/sarcoidosis), peaks at 48-72 hours. (2) T-cell-mediated cytotoxicity — CD8+ CTLs directly kill target cells (contact dermatitis to poison ivy, graft rejection, type 1 diabetes destroying beta cells). Examples: tuberculin (Mantoux) test, contact dermatitis, transplant rejection."
  },
  {
    id: 5,
    question: "Anaphylaxis is a severe systemic type I reaction characterized by:",
    options: ["Localized skin rash only", "Widespread mast cell degranulation causing vasodilation, bronchospasm, increased vascular permeability, and potential cardiovascular collapse", "Only GI symptoms", "Only urticaria"],
    answer: 1,
    explanation: "Systemic anaphylaxis occurs when allergen reaches the bloodstream (insect stings, drugs, foods, latex), causing widespread mast cell/basophil degranulation. Histamine and leukotrienes cause: (1) vasodilation and hypotension (cardiovascular collapse), (2) increased vascular permeability (edema, urticaria), (3) bronchospasm (wheezing, respiratory distress), (4) laryngeal edema (airway obstruction), and (5) GI smooth muscle contraction (cramping, vomiting). Treatment: intramuscular epinephrine (first-line), IV fluids, antihistamines, and corticosteroids."
  },
  {
    id: 6,
    question: "Omalizumab is a therapeutic anti-IgE antibody used in allergic asthma that works by:",
    options: ["Blocking histamine receptors", "Binding free IgE and preventing its attachment to FcεRI on mast cells and basophils", "Inhibiting eosinophil migration", "Blocking IL-5 receptor"],
    answer: 1,
    explanation: "Omalizumab is a humanized monoclonal antibody that binds the Cε3 domain of free IgE (the same region that binds FcεRI), preventing IgE from attaching to mast cells and basophils. This reduces: (1) FcεRI expression on mast cells (receptor downregulation due to reduced IgE), (2) mast cell sensitization and degranulation upon allergen exposure, and (3) late-phase allergic inflammation. Omalizumab is FDA-approved for moderate-severe allergic asthma, chronic spontaneous urticaria, and food allergy."
  },
  {
    id: 7,
    question: "Hemolytic disease of the newborn (HDN) due to Rh incompatibility is prevented by:",
    options: ["Anti-D IgG (RhoGAM) administration to the Rh-negative mother, which clears fetal Rh+ red blood cells before maternal sensitization", "Vaccination of the fetus", "Corticosteroid therapy", "Antihistamine administration"],
    answer: 0,
    explanation: "HDN prevention: Rh-negative mothers carrying Rh-positive fetuses may become sensitized during delivery (fetal RBCs enter maternal circulation). Anti-D IgG (RhoGAM) is given at 28 weeks and within 72 hours of delivery to: (1) bind and clear fetal Rh+ RBCs via FcR-mediated phagocytosis before they stimulate maternal B cells, preventing anti-Rh IgG production. Without RhoGAM, subsequent Rh+ pregnancies risk severe HDN from maternal anti-D IgG crossing the placenta."
  },
  {
    id: 8,
    question: "The Arthus reaction is a localized type III hypersensitivity reaction characterized by:",
    options: ["IgE-mediated wheal and flare", "Localized immune complex deposition in blood vessel walls causing vasculitis, edema, and necrosis at the injection site", "Delayed T-cell response at 48-72 hours", "Mast cell degranulation without immune complexes"],
    answer: 1,
    explanation: "The Arthus reaction occurs when antigen is injected into the skin of an individual with high levels of circulating IgG antibodies. Antigen-antibody complexes form locally in small blood vessel walls, activate complement (C3a, C5a → neutrophil chemotaxis), and neutrophils release lysosomal enzymes causing vasculitis, edema, hemorrhage, and necrosis. It peaks at 4-8 hours. Clinical relevance: repeated vaccine injections (tetanus, diphtheria) at the same site can cause Arthus-like reactions."
  },
  {
    id: 9,
    question: "Allergic contact dermatitis (e.g., to poison ivy urushiol) is which type of hypersensitivity?",
    options: ["Type I (immediate)", "Type II (cytotoxic)", "Type III (immune complex)", "Type IV (delayed/cell-mediated)"],
    answer: 3,
    explanation: "Contact dermatitis is a classic type IV (delayed-type) hypersensitivity: (1) Sensitization — hapten (urushiol, nickel, chromate) penetrates skin, binds self-proteins forming neoantigens, is taken up by Langerhans cells (skin DCs), presented to T cells in draining lymph nodes. (2) Elicitation (re-exposure) — memory T cells (CD4+ Th1 and CD8+ CTLs) recognize hapten-modified self-proteins, produce IFN-γ, TNF-α, recruit macrophages causing inflammation. Peaks at 48-72 hours with erythema, vesicles, pruritus."
  },
  {
    id: 10,
    question: "Serum sickness is a systemic type III hypersensitivity that classically occurs:",
    options: ["Within minutes of antigen exposure", "7-14 days after first exposure to a large amount of foreign protein (e.g., antiserum), when antibodies form immune complexes with remaining antigen", "After repeated allergen exposure", "Only with drug allergies"],
    answer: 1,
    explanation: "Classic serum sickness occurs 7-14 days after exposure to large quantities of foreign protein (historically horse antiserum, now drugs like penicillin, cefaclor, and monoclonal antibodies). Timeline: (1) foreign antigen persists in circulation, (2) antibody production begins ~day 7, (3) antigen-antibody complexes form at antigen excess, deposit in skin/joints/kidneys/vessels, (4) complement activation and neutrophil recruitment cause fever, urticaria, arthralgia, lymphadenopathy, glomerulonephritis. Self-limited as antigen is cleared."
  },

  // ===== AUTOIMMUNITY (Q11–Q20) =====
  {
    id: 11,
    question: "Central tolerance in T cells is established by:",
    options: ["Peripheral Tregs only", "Clonal deletion of self-reactive thymocytes in the thymus, with AIRE enabling expression of tissue-restricted antigens in medullary thymic epithelial cells", "Somatic hypermutation of TCR", "B-cell editing in bone marrow"],
    answer: 1,
    explanation: "Central T-cell tolerance: (1) thymocytes with high-affinity TCR for self-peptide-MHC undergo clonal deletion (apoptosis) in the thymic medulla, (2) AIRE (autoimmune regulator) transcription factor enables mTECs to express thousands of tissue-restricted antigens (insulin, thyroglobulin, myelin proteins) — allowing self-reactive T cells to be deleted. (3) Some self-reactive T cells are diverted to become natural Tregs (nTregs) rather than deleted. AIRE deficiency → APECED/APS-1 (autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy)."
  },
  {
    id: 12,
    question: "Peripheral tolerance mechanisms include all of the following EXCEPT:",
    options: ["Anergy (functional unresponsiveness)", "Regulatory T-cell suppression", "Positive selection in the thymus", "Activation-induced cell death (AICD)"],
    answer: 2,
    explanation: "Peripheral tolerance prevents activation of self-reactive T cells that escape central tolerance: (1) Anergy — T-cell activation without co-stimulation (Signal 1 without Signal 2) → functional unresponsiveness, (2) Treg suppression — CD4+CD25+FOXP3+ Tregs actively suppress self-reactive T cells, (3) AICD — chronic stimulation induces Fas/FasL-mediated apoptosis (eliminates repeatedly stimulated T cells), (4) Ignorance — self-reactive T cells fail to encounter antigen (sequestered antigens, low concentration). Positive selection occurs in the thymus and is part of T-cell development, not peripheral tolerance."
  },
  {
    id: 13,
    question: "Molecular mimicry as a mechanism of autoimmunity refers to:",
    options: ["Self-antigens being hidden from the immune system", "Microbial antigens sharing structural similarity with self-antigens, causing cross-reactive immune responses", "Antibodies blocking receptor function", "Complement-mediated tissue damage"],
    answer: 1,
    explanation: "Molecular mimicry occurs when microbial peptides share sequence or structural similarity with self-antigens. T cells or antibodies generated against the pathogen cross-react with self-tissues. Examples: (1) Streptococcal M protein and cardiac myosin → rheumatic heart disease, (2) Campylobacter jejuni ganglioside-like LOS and peripheral nerve gangliosides → Guillain-Barré syndrome, (3) Coxsackievirus VP1 and glutamic acid decarboxylase (GAD65) → type 1 diabetes (proposed)."
  },
  {
    id: 14,
    question: "Systemic lupus erythematosus (SLE) is characterized by:",
    options: ["Only skin manifestations", "Multi-organ autoimmune disease with anti-nuclear antibodies (ANA), anti-dsDNA antibodies, and immune complex-mediated tissue damage", "Only joint involvement", "Single-organ autoimmunity"],
    answer: 1,
    explanation: "SLE is a systemic autoimmune disease with diverse manifestations: (1) butterfly malar rash, photosensitivity, (2) arthritis (non-erosive), (3) nephritis (immune complex glomerulonephritis — major cause of morbidity), (4) serositis (pleuritis, pericarditis), (5) cytopenias, (6) neuropsychiatric disease. Pathogenesis involves: defective apoptotic cell clearance → release of nuclear antigens → anti-dsDNA/anti-Smith/anti-histone antibodies → type III immune complex deposition. ANA is >95% sensitive but not specific; anti-dsDNA and anti-Smith are specific for SLE."
  },
  {
    id: 15,
    question: "Rheumatoid arthritis is primarily driven by:",
    options: ["Type I hypersensitivity", "Th1/Th17-mediated chronic synovial inflammation with TNF-α, IL-6, IL-1 as key pathogenic cytokines", "IgE-mediated reactions", "Type II antibody-mediated cytotoxicity"],
    answer: 1,
    explanation: "RA pathogenesis: (1) genetic susceptibility (HLA-DR4 shared epitope), (2) environmental triggers (smoking, citrullination), (3) anti-citrullinated protein antibodies (ACPA/anti-CCP) and rheumatoid factor (RF-IgM against Fc of IgG), (4) Th1/Th17 cells infiltrate synovium producing IFN-γ and IL-17, (5) macrophages produce TNF-α, IL-1β, IL-6, (6) synovial fibroblasts proliferate (pannus formation), (7) cartilage/bone destruction via MMPs and RANKL-mediated osteoclastogenesis. TNF inhibitors (infliximab, adalimumab) and IL-6R blockade (tocilizumab) are highly effective."
  },
  {
    id: 16,
    question: "Type 1 diabetes mellitus is caused by:",
    options: ["Insulin resistance", "T-cell-mediated autoimmune destruction of pancreatic beta cells", "Defective insulin receptor", "Type III immune complex disease"],
    answer: 1,
    explanation: "T1DM is a type IV (cell-mediated) autoimmune disease: (1) genetic susceptibility (HLA-DR3/DR4, >60 risk loci), (2) environmental triggers (viral infections — Coxsackievirus, enterovirus; gut microbiome), (3) CD8+ CTLs infiltrate islets (insulitis) and destroy beta cells, (4) CD4+ Th1 cells provide help, (5) autoantibodies (anti-GAD65, anti-insulin, anti-IA-2, anti-ZnT8) are biomarkers but not primary effectors. Progressive beta-cell destruction → insulin deficiency. Teplizumab (anti-CD3) can delay onset by ~2 years in high-risk individuals."
  },
  {
    id: 17,
    question: "Graves disease is caused by:",
    options: ["Destruction of thyroid cells by CTLs", "Stimulatory autoantibodies against the TSH receptor (thyroid-stimulating immunoglobulins) causing hyperthyroidism", "Blocking antibodies against TSH receptor", "Immune complex deposition in the thyroid"],
    answer: 1,
    explanation: "Graves disease involves TSI (thyroid-stimulating immunoglobulins) — IgG autoantibodies that bind and activate the TSH receptor on thyroid follicular cells, mimicking TSH. This causes: (1) unregulated thyroid hormone production (hyperthyroidism: weight loss, tachycardia, tremor, heat intolerance), (2) diffuse goiter, (3) exophthalmos (Graves ophthalmopathy — cross-reactive antigens in orbital fibroblasts), and (4) pretibial myxedema. Graves is a unique type II hypersensitivity where antibodies stimulate rather than destroy target cells."
  },
  {
    id: 18,
    question: "Myasthenia gravis is caused by autoantibodies against:",
    options: ["Thyroid-stimulating hormone receptor", "Acetylcholine receptors (AChR) at the neuromuscular junction, blocking neuromuscular transmission", "Voltage-gated calcium channels", "Glutamate receptors"],
    answer: 1,
    explanation: "Myasthenia gravis involves IgG autoantibodies against nicotinic acetylcholine receptors (AChR) at the neuromuscular junction (~85% of cases). Pathogenic mechanisms: (1) complement-mediated destruction of postsynaptic membrane, (2) accelerated AChR internalization (crosslinking and endocytosis), (3) blocking of ACh binding. Result: fluctuating skeletal muscle weakness worsened by repetitive use (fatigability), ptosis, diplopia, dysphagia, and respiratory failure in crisis. Thymus abnormalities (~10% thymoma, ~65% thymic hyperplasia) suggest thymus involvement in pathogenesis."
  },
  {
    id: 19,
    question: "Goodpasture syndrome involves autoantibodies directed against:",
    options: ["Nuclear antigens", "The alpha-3 chain of type IV collagen in glomerular and alveolar basement membranes", "Acetylcholine receptors", "Thyroid peroxidase"],
    answer: 1,
    explanation: "Goodpasture syndrome (anti-GBM disease) involves IgG autoantibodies against the non-collagenous domain (NC1) of the alpha-3 chain of type IV collagen, which is concentrated in glomerular and pulmonary alveolar basement membranes. Linear IgG deposition on basement membranes → complement activation → neutrophil recruitment → rapidly progressive crescentic glomerulonephritis and pulmonary hemorrhage. Diagnosis: anti-GBM antibodies (serum ELISA) and linear IgG on renal biopsy (immunofluorescence). Treatment: plasmapheresis + immunosuppression."
  },
  {
    id: 20,
    question: "IPEX syndrome (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) is caused by mutations in:",
    options: ["AIRE", "FOXP3 (the master transcription factor for regulatory T cells)", "RAG1", "BTK"],
    answer: 1,
    explanation: "IPEX is caused by loss-of-function mutations in FOXP3 (Xp11.23), essential for Treg development and function. Without functional Tregs, uncontrolled self-reactive T cells cause: (1) severe enteropathy (autoimmune enteritis, intractable diarrhea), (2) type 1 diabetes (often neonatal onset), (3) eczematous dermatitis, (4) autoimmune cytopenias, (5) thyroiditis, and (6) elevated IgE. IPEX demonstrates the critical role of Tregs in immune homeostasis. Hematopoietic stem cell transplantation is the only curative treatment."
  },

  // ===== IMMUNODEFICIENCY (Q21–Q30) =====
  {
    id: 21,
    question: "X-linked agammaglobulinemia (Bruton disease) results from mutations in BTK, causing:",
    options: ["T-cell deficiency", "Failure of B-cell maturation at the pre-B cell stage, with absent mature B cells and immunoglobulins", "Complement deficiency", "Phagocyte dysfunction"],
    answer: 1,
    explanation: "BTK (Bruton tyrosine kinase) is essential for pre-BCR signaling during B-cell development. BTK mutations block B-cell maturation at the pre-B → immature B cell transition. Result: absent or markedly reduced mature B cells (<2%), absent lymph node germinal centers, and absent/severely reduced all Ig classes. T-cell immunity is intact. Patients present after 6 months (when maternal IgG wanes) with recurrent sinopulmonary bacterial infections. Treatment: lifelong IVIG replacement."
  },
  {
    id: 22,
    question: "DiGeorge syndrome results in T-cell deficiency due to:",
    options: ["RAG1/2 mutations", "Thymic hypoplasia/aplasia from defective third and fourth pharyngeal pouch development (22q11.2 deletion)", "FOXP3 mutation", "ADA deficiency"],
    answer: 1,
    explanation: "DiGeorge syndrome (22q11.2 deletion, haploinsufficiency of TBX1) causes defective development of third and fourth pharyngeal pouches. Thymic hypoplasia/aplasia → T-cell deficiency (severity correlates with residual thymic tissue). Complete DiGeorge (absent thymus, <1-2% of cases) = SCID phenotype. Partial DiGeorge (~98%) = variable T-cell deficiency, often improving with age. Other features: parathyroid hypoplasia (hypocalcemia), conotruncal cardiac defects, facial dysmorphism. Treatment for complete DiGeorge: thymus transplantation."
  },
  {
    id: 23,
    question: "Severe combined immunodeficiency (SCID) is characterized by:",
    options: ["Only B-cell deficiency", "Profound deficiency of both T-cell and B-cell function, presenting in infancy with severe infections and failure to thrive", "Only complement deficiency", "Only phagocyte deficiency"],
    answer: 1,
    explanation: "SCID is the most severe primary immunodeficiency — combined T and B cell deficiency presenting in the first months of life with: severe infections (Pneumocystis jirovecii pneumonia, persistent CMV/EBV, chronic diarrhea, disseminated BCG), failure to thrive, absent thymic shadow on chest X-ray, and lymphopenia. Classified by lymphocyte profile: T-B+NK- (X-linked IL2RG, most common), T-B-NK+ (RAG1/2), T-B-NK- (ADA deficiency). Fatal without treatment — HSCT or gene therapy is curative. Newborn screening (TREC assay) enables early diagnosis."
  },
  {
    id: 24,
    question: "Common variable immunodeficiency (CVID) is characterized by:",
    options: ["Absent T cells", "Low IgG with low IgA and/or IgM, impaired antibody responses to vaccines, and recurrent sinopulmonary infections", "Absent complement", "Elevated IgE only"],
    answer: 1,
    explanation: "CVID is the most common symptomatic primary antibody deficiency (~1:25,000-50,000). Features: (1) low IgG (typically <5 g/L) with low IgA and/or IgM, (2) poor vaccine responses, (3) recurrent sinopulmonary bacterial infections (S. pneumoniae, H. influenzae), (4) increased risk of autoimmune cytopenias (ITP, AIHA), granulomatous disease, lymphoma, and GI disease. B cells are usually present but fail to differentiate to plasma cells. Diagnosis requires exclusion of other causes. Treatment: lifelong IgG replacement (IVIG or SCIG)."
  },
  {
    id: 25,
    question: "Chronic granulomatous disease (CGD) is caused by deficiency of:",
    options: ["Myeloperoxidase", "NADPH oxidase complex (most commonly CYBB/gp91phox), preventing respiratory burst in phagocytes", "Complement C3", "IL-12 receptor"],
    answer: 1,
    explanation: "CGD results from mutations in NADPH oxidase subunits (X-linked CYBB/gp91phox ~70%, autosomal recessive CYBA/p22phox, NCF1/p47phox, NCF2/p67phox, CYBC1). Phagocytes cannot generate superoxide and downstream ROS for microbial killing. Characteristic infections with catalase-positive organisms (Staphylococcus aureus, Aspergillus, Nocardia, Burkholderia cepacia, Serratia) — catalase neutralizes the residual H₂O₂ that these organisms might produce. Granuloma formation in lungs, liver, GI tract. Diagnosis: dihydrorhodamine (DHR) flow cytometry or nitroblue tetrazolium (NBT) test."
  },
  {
    id: 26,
    question: "Selective IgA deficiency, the most common primary immunodeficiency (~1:500), is characterized by:",
    options: ["Severe life-threatening infections", "Serum IgA <7 mg/dL with normal IgG and IgM, usually asymptomatic but with increased risk of sinopulmonary infections and autoimmunity", "Absent T cells", "Complete absence of all immunoglobulins"],
    answer: 1,
    explanation: "Selective IgA deficiency: serum IgA <7 mg/dL (or undetectable) with normal IgG, IgM, and normal T-cell function. Most patients (~85-90%) are asymptomatic. Symptomatic patients may have: (1) recurrent sinopulmonary infections, (2) GI infections (especially Giardia), (3) increased autoimmune disease (celiac disease, SLE, RA), (4) allergic disease. Important: patients with IgA deficiency can develop anti-IgA antibodies → anaphylaxis with blood products containing IgA. Use IgA-depleted blood products."
  },
  {
    id: 27,
    question: "Wiskott-Aldrich syndrome (WAS) presents with the classic triad of:",
    options: ["Ataxia, telangiectasia, immunodeficiency", "Thrombocytopenia (small platelets), eczema, and immunodeficiency", "Albinism, immunodeficiency, neurodegeneration", "Short stature, cardiac defects, immunodeficiency"],
    answer: 1,
    explanation: "WAS (X-linked, WASP gene mutations) classic triad: (1) thrombocytopenia with characteristically small platelets (low MPV — nearly pathognomonic), (2) eczema (atopic dermatitis-like), and (3) combined immunodeficiency (impaired T-cell responses, poor antibody responses to polysaccharides, low IgM, elevated IgA/IgE). WASP regulates actin cytoskeleton in hematopoietic cells — its absence impairs immune synapse formation, cell migration, and platelet function. Increased risk of autoimmunity and lymphoma. Curative treatment: HSCT or gene therapy."
  },
  {
    id: 28,
    question: "Hyper-IgM syndrome (most common X-linked form) is caused by:",
    options: ["AID deficiency", "CD40 ligand (CD40L/CD154) deficiency on T cells, preventing class switch recombination and germinal center formation", "FOXP3 mutation", "BTK deficiency"],
    answer: 1,
    explanation: "X-linked hyper-IgM (HIGM1): CD40L deficiency on activated T helper cells prevents CD40L-CD40 interaction needed for: (1) B-cell class switch recombination (CSR) → absent IgG, IgA, IgE with elevated or normal IgM, (2) germinal center formation (no SHM, no affinity maturation, no memory B cells), (3) macrophage activation (susceptibility to Pneumocystis, Cryptosporidium). Autosomal recessive forms involve AID, UNG, or CD40 deficiency. Treatment: IgG replacement, Pneumocystis prophylaxis, HSCT for severe cases."
  },
  {
    id: 29,
    question: "Complement C3 deficiency results in:",
    options: ["Increased susceptibility to viral infections", "Severe recurrent pyogenic infections (especially encapsulated bacteria) due to impaired opsonization, and immune complex disease", "Only increased susceptibility to Neisseria", "No clinical consequences"],
    answer: 1,
    explanation: "C3 is central to all three complement pathways. C3 deficiency causes: (1) severely impaired opsonization (C3b) → recurrent infections with encapsulated bacteria (S. pneumoniae, H. influenzae), (2) impaired MAC formation → susceptibility to Neisseria, (3) impaired immune complex clearance → SLE-like immune complex disease and glomerulonephritis. C3 deficiency is more severe than terminal complement (C5-C9) deficiency because it abolishes both opsonization and MAC pathways."
  },
  {
    id: 30,
    question: "Terminal complement deficiency (C5-C9) primarily increases susceptibility to:",
    options: ["Staphylococcal infections", "Recurrent Neisseria infections (meningococcal meningitis and disseminated gonococcal infection)", "Fungal infections", "Viral infections"],
    answer: 1,
    explanation: "C5-C9 (MAC) deficiency specifically impairs complement-mediated lysis. Neisseria species (N. meningitidis, N. gonorrhoeae) are uniquely dependent on MAC for killing (they resist phagocytosis and complement-mediated opsonization is less effective). Patients with terminal complement deficiency have ~5000-fold increased risk of meningococcal disease, often with recurrent episodes. Interestingly, fatality rates per episode are lower (perhaps due to reduced inflammation from absent C5a/MAC). Eculizumab (anti-C5) therapy also increases meningococcal risk, requiring vaccination."
  },

  // ===== TRANSPLANTATION IMMUNOLOGY (Q31–Q40) =====
  {
    id: 31,
    question: "Hyperacute transplant rejection occurs within minutes to hours and is caused by:",
    options: ["T-cell infiltration", "Pre-existing recipient antibodies against donor HLA or ABO antigens, causing complement-mediated vascular damage", "Natural killer cell attack", "Delayed-type hypersensitivity"],
    answer: 1,
    explanation: "Hyperacute rejection: pre-formed recipient antibodies (from prior transplants, transfusions, or pregnancies, or natural anti-ABO antibodies) bind donor endothelial antigens immediately upon reperfusion. This activates complement → endothelial damage, platelet aggregation, thrombosis → graft infarction within minutes to hours. Prevention: ABO matching, pre-transplant crossmatch (testing recipient serum against donor lymphocytes for anti-HLA antibodies). Hyperacute rejection is largely preventable and rare with modern crossmatching."
  },
  {
    id: 32,
    question: "Acute cellular rejection of a transplant is primarily mediated by:",
    options: ["Pre-formed antibodies", "Recipient T cells (CD4+ and CD8+) recognizing donor alloantigens via direct and indirect pathways", "Complement activation only", "NK cells only"],
    answer: 1,
    explanation: "Acute cellular rejection (days to months post-transplant): (1) Direct allorecognition — recipient T cells recognize intact donor MHC molecules on donor APCs (passenger leukocytes), (2) Indirect allorecognition — recipient APCs process shed donor MHC molecules and present donor peptides on self-MHC. CD8+ CTLs cause direct graft cell killing; CD4+ Th1 cells produce IFN-γ activating macrophages (DTH-like). Treated with high-dose corticosteroids, anti-thymocyte globulin, or T-cell-depleting antibodies."
  },
  {
    id: 33,
    question: "Chronic allograft rejection is characterized by:",
    options: ["Rapid graft loss within hours", "Progressive fibrosis and vascular changes (graft arteriosclerosis/vasculopathy) leading to gradual graft dysfunction over months to years", "Only T-cell-mediated damage", "Reversibility with corticosteroids"],
    answer: 1,
    explanation: "Chronic rejection is the leading cause of late graft loss. Features: (1) graft arteriosclerosis — intimal smooth muscle proliferation and fibrosis narrowing graft vessels (transplant vasculopathy), (2) interstitial fibrosis and tubular atrophy (kidney), bronchiolitis obliterans (lung), and bile duct loss (liver). Mechanisms involve: chronic antibody-mediated rejection (DSA), T-cell responses, and non-immune factors (ischemia-reperfusion injury, calcineurin inhibitor toxicity, viral infections). Chronic rejection is largely irreversible and poorly responsive to current immunosuppression."
  },
  {
    id: 34,
    question: "Calcineurin inhibitors (cyclosporine, tacrolimus) prevent transplant rejection by:",
    options: ["Depleting T cells", "Blocking calcineurin phosphatase, preventing NFAT dephosphorylation and nuclear translocation, thereby inhibiting IL-2 transcription", "Inhibiting B-cell class switching", "Blocking complement activation"],
    answer: 1,
    explanation: "Calcineurin inhibitors are the backbone of transplant immunosuppression. Mechanism: cyclosporine binds cyclophilin, tacrolimus binds FKBP12 — both drug-immunophilin complexes inhibit calcineurin (a serine/threonine phosphatase). Calcineurin normally dephosphorylates NFAT (nuclear factor of activated T cells), allowing nuclear translocation and IL-2 gene transcription. Blocking this prevents T-cell activation and proliferation. Side effects include nephrotoxicity (vasoconstriction, chronic tubulointerstitial fibrosis), hypertension, diabetes, and neurotoxicity."
  },
  {
    id: 35,
    question: "Graft-versus-host disease (GVHD) occurs when:",
    options: ["Recipient immune cells attack the graft", "Donor T cells in the graft attack recipient tissues (skin, GI tract, liver) in an immunocompromised host", "NK cells reject the graft", "Antibodies attack the graft"],
    answer: 1,
    explanation: "GVHD occurs after allogeneic HSCT (or rarely after transfusion of non-irradiated blood products). Requirements: (1) graft contains immunocompetent T cells, (2) HLA disparity between donor and recipient, (3) recipient is immunocompromised (cannot reject donor cells). Acute GVHD (<100 days): skin (maculopapular rash), GI (diarrhea, abdominal pain), liver (cholestatic hepatitis). Chronic GVHD (>100 days): scleroderma-like skin, sicca syndrome, bronchiolitis obliterans. GVHD prophylaxis includes calcineurin inhibitors + methotrexate or post-transplant cyclophosphamide."
  },
  {
    id: 36,
    question: "The graft-versus-leukemia (GVL) effect in allogeneic stem cell transplantation is:",
    options: ["An unwanted side effect to be eliminated", "Donor T cells and NK cells recognizing and eliminating residual leukemic cells in the recipient, contributing to disease cure", "Only mediated by chemotherapy conditioning", "Only related to GVHD and always harmful"],
    answer: 1,
    explanation: "GVL is a critical therapeutic benefit of allogeneic HSCT: donor T cells and NK cells recognize minor histocompatibility antigens and leukemia-associated antigens on residual tumor cells, mediating an immune anti-leukemia effect. Evidence: (1) relapse rates are lower in patients with mild GVHD, (2) donor lymphocyte infusion (DLI) can induce remission in post-transplant relapse, (3) T-cell depletion reduces GVHD but increases relapse. The challenge is maximizing GVL while minimizing GVHD."
  },
  {
    id: 37,
    question: "Mycophenolate mofetil (MMF) prevents transplant rejection by:",
    options: ["Inhibiting calcineurin", "Selectively inhibiting inosine monophosphate dehydrogenase (IMPDH), blocking de novo purine synthesis critical for lymphocyte proliferation", "Depleting B cells", "Blocking IL-6 receptor"],
    answer: 1,
    explanation: "MMF is hydrolyzed to mycophenolic acid (MPA), which reversibly inhibits IMPDH — the rate-limiting enzyme in de novo guanosine nucleotide synthesis. Lymphocytes (T and B cells) depend exclusively on the de novo pathway for proliferation (unlike other cells that can use the salvage pathway), making MPA selectively lymphocyte-antiproliferative. MMF is used in combination with calcineurin inhibitors and corticosteroids in transplant maintenance immunosuppression."
  },
  {
    id: 38,
    question: "Donor-specific antibodies (DSA) in transplantation are significant because they:",
    options: ["Are always present and benign", "Cause antibody-mediated rejection (AMR) by targeting donor HLA on graft endothelium, activating complement and causing vascular injury", "Only cause hyperacute rejection", "Improve graft survival"],
    answer: 1,
    explanation: "DSA (anti-donor HLA antibodies) can be: (1) pre-formed (prior sensitization — hyperacute or accelerated rejection), or (2) de novo (developing post-transplant — acute and chronic AMR). AMR pathogenesis: DSA binds donor HLA on graft endothelium → complement activation (C4d deposition — diagnostic marker) → endothelial injury, microvascular inflammation, and transplant glomerulopathy/vasculopathy. Treatment: plasmapheresis, IVIG, rituximab, bortezomib, complement inhibition (eculizumab). De novo DSA is the strongest predictor of chronic graft loss."
  },
  {
    id: 39,
    question: "HLA matching in transplantation is most critical for which organ?",
    options: ["Heart", "Liver", "Kidney (and especially bone marrow/HSCT)", "Lung"],
    answer: 2,
    explanation: "HLA matching significantly impacts: (1) Kidney transplant — better HLA match (especially HLA-A, B, DR) correlates with improved graft survival and reduced rejection, (2) HSCT — HLA matching is most critical (10/10 allele-level match at HLA-A, B, C, DRB1, DQB1 for unrelated donors), as mismatch increases GVHD and graft failure. For heart and lung transplants, HLA matching is considered but organ allocation prioritizes urgency and size matching. Liver transplants are relatively HLA-tolerant."
  },
  {
    id: 40,
    question: "Immune tolerance in transplantation (the 'holy grail') would allow:",
    options: ["Increased immunosuppression", "Long-term graft acceptance without ongoing immunosuppression, preventing both rejection and drug toxicity", "Faster rejection", "Only short-term graft survival"],
    answer: 1,
    explanation: "Transplant tolerance — donor-specific unresponsiveness with maintained immunity to other antigens — would eliminate lifelong immunosuppression and its complications (infections, malignancy, nephrotoxicity, metabolic side effects). Approaches under investigation: (1) mixed chimerism (donor HSCT + organ transplant), (2) Treg therapy (infusion of ex vivo expanded donor-specific Tregs), (3) co-stimulation blockade (belatacept — CTLA-4-Ig), (4) thymic transplantation, and (5) tolerogenic dendritic cells. Some operational tolerance has been achieved in kidney and liver transplantation."
  },

  // ===== VACCINES & IMMUNOLOGICAL MEMORY (Q41–Q50) =====
  {
    id: 41,
    question: "Immunological memory differs from primary immune responses in that:",
    options: ["Memory responses are slower and weaker", "Memory responses are faster, stronger (higher antibody titers), produce higher-affinity antibodies (IgG predominant), and require lower antigen doses", "Primary responses produce more IgG", "Memory cells cannot be reactivated"],
    answer: 1,
    explanation: "Primary response: 7-10 day lag, IgM predominant, lower antibody titers, lower affinity. Secondary (memory) response: 1-3 day lag, IgG predominant (class-switched), 10-100x higher antibody titers, higher affinity (affinity-matured by SHM), longer duration, and lower activation threshold. Memory B cells and long-lived plasma cells (bone marrow) maintain humoral memory; memory T cells (central and effector memory) maintain cellular memory. This is the basis of vaccination."
  },
  {
    id: 42,
    question: "Live attenuated vaccines provide strong immunity because they:",
    options: ["Contain inactivated organisms", "Replicate in the host, mimicking natural infection and stimulating robust humoral, cellular, and mucosal immunity", "Only stimulate antibody responses", "Require multiple boosters to be effective"],
    answer: 1,
    explanation: "Live attenuated vaccines (MMR, varicella, rotavirus, BCG, yellow fever, oral polio) use weakened but replicating organisms. Advantages: (1) mimic natural infection with intracellular antigen processing, (2) stimulate both humoral and cellular immunity, (3) induce mucosal immunity (oral/nasal), (4) single dose often sufficient, (5) long-lasting immunity. Disadvantages: (1) risk of reversion to virulence (oral polio → VAPP), (2) contraindicated in immunocompromised/pregnant patients, (3) require cold chain storage."
  },
  {
    id: 43,
    question: "mRNA vaccines (e.g., BNT162b2/Comirnaty, mRNA-1273/Spikevax for COVID-19) work by:",
    options: ["Injecting live virus", "Delivering mRNA encoding the antigen (spike protein) into host cells, which translate the protein, triggering immune responses", "Injecting pre-formed antibodies", "Using bacterial vectors"],
    answer: 1,
    explanation: "mRNA vaccines: (1) synthetic mRNA encoding the target antigen (SARS-CoV-2 spike protein with prefusion-stabilizing mutations) is encapsulated in lipid nanoparticles (LNPs), (2) LNPs are taken up by cells (muscle cells, DCs) at the injection site, (3) mRNA is translated by host ribosomes producing antigen protein, (4) antigen is presented on MHC-I (CD8+ T-cell responses) and MHC-II (CD4+ T-cell responses), and secreted antigen stimulates B-cell/antibody responses. Modified nucleosides (N1-methylpseudouridine) reduce innate immune sensing and increase translation."
  },
  {
    id: 44,
    question: "Adjuvants in vaccines function to:",
    options: ["Directly kill pathogens", "Enhance and shape the immune response to vaccine antigens by activating innate immunity and improving antigen presentation", "Replace the need for antigens", "Suppress allergic reactions to vaccines"],
    answer: 1,
    explanation: "Adjuvants enhance vaccine immunogenicity through: (1) depot effect (slow antigen release at injection site — aluminum salts/alum), (2) innate immune activation (TLR agonists: MPL/TLR4 in AS04, CpG/TLR9 in Heplisav-B; saponins: QS-21 in AS01B), (3) enhanced antigen uptake and presentation by DCs, (4) inflammasome activation, and (5) cytokine/chemokine induction. Adjuvants are particularly important for subunit/recombinant vaccines that are poorly immunogenic alone. Common adjuvants: aluminum salts, MF59, AS01B, AS04, CpG 1018."
  },
  {
    id: 45,
    question: "Conjugate vaccines (e.g., Hib, PCV13, MenACWY) convert T-independent antigens to T-dependent antigens by:",
    options: ["Using live bacteria", "Chemically linking polysaccharide antigens to carrier proteins, enabling T-cell help, class switching, affinity maturation, and memory", "Adding aluminum adjuvants only", "Using mRNA technology"],
    answer: 1,
    explanation: "Polysaccharide antigens alone stimulate T-independent B-cell responses: IgM only, no class switching, no affinity maturation, no memory, poor response in children <2 years. Conjugation to carrier proteins (CRM197, tetanus toxoid, diphtheria toxoid): polysaccharide-protein conjugate is internalized by B cells via BCR, protein is processed and presented on MHC-II to Th cells, providing T-cell help → class switching to IgG, affinity maturation, and immunological memory. This revolutionized prevention of Hib, pneumococcal, and meningococcal disease in infants."
  },
  {
    id: 46,
    question: "Herd immunity is achieved when:",
    options: ["Every individual is vaccinated", "A sufficient proportion of the population is immune (through vaccination or natural infection) to reduce transmission and protect unvaccinated individuals", "Only healthcare workers are vaccinated", "Natural infection provides better protection than vaccination"],
    answer: 1,
    explanation: "Herd immunity occurs when enough individuals are immune that transmission chains are interrupted, indirectly protecting susceptible individuals (immunocompromised, too young/old to vaccinate, vaccine non-responders). The threshold depends on the basic reproduction number (R₀): threshold = 1 - 1/R₀. Examples: measles (R₀ ~12-18, threshold ~92-95%), polio (R₀ ~5-7, threshold ~80-86%), COVID-19 original strain (R₀ ~2.5-3, threshold ~60-70%, higher for variants). Herd immunity is essential for disease elimination/eradication."
  },
  {
    id: 47,
    question: "Long-lived plasma cells reside primarily in the:",
    options: ["Lymph nodes", "Bone marrow, where they continuously secrete antibodies for years to decades without requiring re-stimulation", "Spleen marginal zone", "Thymus"],
    answer: 1,
    explanation: "Long-lived plasma cells (LLPCs) are the cellular basis of long-term humoral immunity. They are generated in germinal centers, migrate to the bone marrow, and occupy survival niches (provided by CXCL12, APRIL, IL-6 from stromal cells and eosinophils). LLPCs continuously secrete high-affinity, class-switched antibodies for years to decades — maintaining serum antibody levels without re-exposure to antigen. Antibodies against smallpox have been detected >75 years post-vaccination. LLPCs are resistant to most immunosuppressive therapies."
  },
  {
    id: 48,
    question: "Central memory T cells (Tcm) and effector memory T cells (Tem) differ in that:",
    options: ["They are identical populations", "Tcm cells express CCR7/CD62L (lymph node homing), proliferate rapidly upon re-stimulation; Tem cells lack CCR7, patrol peripheral tissues, and have immediate effector function", "Tem cells only reside in lymph nodes", "Tcm cells have immediate effector function"],
    answer: 1,
    explanation: "Memory T-cell subsets: (1) Tcm (CCR7+CD62L+CD45RO+) — home to secondary lymphoid organs, high proliferative potential upon re-stimulation, self-renew, provide long-term recall immunity. (2) Tem (CCR7-CD62L-CD45RO+) — patrol non-lymphoid peripheral tissues, immediate effector function (cytokines, cytotoxicity), lower proliferative potential. (3) Tissue-resident memory T cells (Trm, CD103+CD69+) — permanently reside in tissues (skin, gut, lungs), provide frontline defense without recirculation. The diversity of memory subsets ensures layered protection."
  },
  {
    id: 49,
    question: "Passive immunization differs from active immunization in that:",
    options: ["Passive immunization involves vaccination", "Passive immunization provides pre-formed antibodies for immediate but temporary protection, while active immunization stimulates the recipient's own immune response for long-term immunity", "Active immunization provides instant protection", "Passive immunization induces memory"],
    answer: 1,
    explanation: "Passive immunization: administration of pre-formed antibodies (immune globulin, monoclonal antibodies, maternal IgG transfer). Advantages: immediate protection. Disadvantages: temporary (antibody half-life ~3 weeks for IgG), no immunological memory. Examples: anti-D (RhoGAM), VZIG (varicella post-exposure), rabies immune globulin, palivizumab (RSV), monoclonal antibodies for COVID-19. Active immunization: vaccines stimulate adaptive immune response → memory B/T cells → long-lasting immunity, but requires days-weeks to develop."
  },
  {
    id: 50,
    question: "Original antigenic sin (OAS) in immunology refers to:",
    options: ["The first immune response being the strongest", "The tendency of the immune system to preferentially recall memory responses to the first encountered antigen variant, potentially reducing responses to new variants", "Enhanced responses to all variants after first exposure", "Complete protection against all related pathogens"],
    answer: 1,
    explanation: "OAS (Thomas Francis, 1960): upon encountering a variant of a previously encountered antigen, the immune system preferentially activates memory B/T cells specific for the original strain rather than generating new responses to the variant's unique epitopes. This can reduce the quality of responses to new variants. Relevant for: (1) influenza (repeated exposure to drifted strains), (2) dengue (cross-reactive but non-neutralizing antibodies enhancing secondary infection — ADE), (3) SARS-CoV-2 variant responses after vaccination/infection with original strain. 'Immune imprinting' is the preferred modern term."
  }
]

export default questions
