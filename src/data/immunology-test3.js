const questions = [
  // ===== MUCOSAL & BARRIER IMMUNITY (Q1–Q10) =====
  {
    id: 1,
    question: "The gut-associated lymphoid tissue (GALT) includes which specialized structures?",
    options: ["Only the spleen", "Peyer's patches, isolated lymphoid follicles, mesenteric lymph nodes, and the appendix", "Only tonsils", "Only bone marrow"],
    answer: 1,
    explanation: "GALT is the largest immune organ, comprising: (1) Peyer's patches (organized lymphoid follicles in ileum with M cells for antigen sampling), (2) isolated lymphoid follicles throughout small and large intestine, (3) mesenteric lymph nodes (draining intestinal lymph), (4) lamina propria lymphocytes (diffuse effector cells), (5) intraepithelial lymphocytes (IELs — CD8αα+ T cells), and (6) the appendix. GALT must balance defense against pathogens with tolerance to food antigens and commensal bacteria."
  },
  {
    id: 2,
    question: "M (microfold) cells in Peyer's patches function to:",
    options: ["Produce mucus", "Sample luminal antigens by transcytosis and deliver them to underlying immune cells for mucosal immune surveillance", "Secrete IgA", "Absorb nutrients"],
    answer: 1,
    explanation: "M cells are specialized epithelial cells overlying Peyer's patches. They have: (1) a thin glycocalyx and apical microfolds (not microvilli) facilitating antigen contact, (2) an invaginated basolateral pocket housing DCs, macrophages, and lymphocytes. M cells transcytose luminal antigens (bacteria, viruses, particles) to underlying APCs for immune induction. Some pathogens exploit M cells for invasion (Salmonella, Shigella, poliovirus, prions)."
  },
  {
    id: 3,
    question: "Oral tolerance is the immunological phenomenon where:",
    options: ["Oral vaccines always fail", "Ingested antigens induce systemic hyporesponsiveness rather than immunity, preventing food allergies and inflammatory responses to dietary proteins", "All oral antigens induce strong immune responses", "Tolerance only occurs in neonates"],
    answer: 1,
    explanation: "Oral tolerance is an active immunological process preventing inflammatory responses to harmless food proteins and commensal bacteria. Mechanisms: (1) high-dose tolerance — clonal deletion or anergy of food-reactive T cells, (2) low-dose tolerance — induction of antigen-specific Tregs producing IL-10 and TGF-β. Key players: intestinal DCs (CD103+ DCs in mesenteric lymph nodes), retinoic acid (vitamin A metabolite promoting Treg induction and IgA switching), and the microbiome. Breakdown of oral tolerance → food allergy, celiac disease, IBD."
  },
  {
    id: 4,
    question: "Antimicrobial peptides (defensins, cathelicidins) in mucosal immunity function by:",
    options: ["Activating adaptive immunity only", "Directly disrupting microbial membranes and modulating immune cell recruitment and activation", "Only serving as nutrients for commensal bacteria", "Blocking all immune responses"],
    answer: 1,
    explanation: "Antimicrobial peptides (AMPs) are effector molecules of innate mucosal defense: (1) α-defensins (HD5, HD6) — produced by Paneth cells in small intestinal crypts, (2) β-defensins (hBD1-4) — produced by epithelial cells, (3) cathelicidin (LL-37) — produced by epithelial cells and neutrophils. AMPs kill bacteria by disrupting membranes (pore formation, membrane depolarization) and also modulate immunity by chemotaxis (recruiting DCs, T cells), promoting wound healing, and neutralizing LPS."
  },
  {
    id: 5,
    question: "Intraepithelial lymphocytes (IELs) in the gut epithelium are predominantly:",
    options: ["B cells", "CD8+ T cells (including γδ T cells) that provide frontline surveillance and can rapidly respond to epithelial stress", "NK cells", "Mast cells"],
    answer: 1,
    explanation: "IELs reside between epithelial cells, positioned for immediate immune surveillance. They include: (1) conventional CD8αβ+ TCRαβ+ T cells (adaptive, antigen-experienced), (2) CD8αα+ TCRαβ+ T cells (innate-like, selected on thymic epithelium), (3) TCRγδ+ T cells (prominent in skin and gut epithelium, recognize stress-induced molecules like MICA/B, non-classical MHC). IELs maintain epithelial integrity, kill stressed/infected epithelial cells, produce IFN-γ and TNF-α, and regulate mucosal inflammation. Dysregulated IELs contribute to celiac disease."
  },
  {
    id: 6,
    question: "The skin immune system includes all of the following EXCEPT:",
    options: ["Langerhans cells (epidermal dendritic cells)", "Keratinocytes producing antimicrobial peptides and cytokines", "Dermal dendritic cells and tissue-resident memory T cells", "M cells"],
    answer: 3,
    explanation: "Skin immune components: (1) Keratinocytes — produce AMPs (β-defensins, cathelicidins), cytokines (IL-1, TNF-α, IL-33, TSLP), and express TLRs, (2) Langerhans cells (LC) — epidermal DCs sampling antigens and migrating to lymph nodes, (3) Dermal DCs — present antigens and produce IL-12/IL-23, (4) Tissue-resident memory T cells (Trm, CD8+ CD103+) — provide frontline defense against previously encountered pathogens, (5) Mast cells, γδ T cells, innate lymphoid cells. M cells are found in gut mucosal epithelium, not skin."
  },
  {
    id: 7,
    question: "Type 3 innate lymphoid cells (ILC3s) are important in mucosal immunity because they:",
    options: ["Produce IgA", "Produce IL-22 and IL-17, maintaining epithelial barrier integrity and promoting antimicrobial peptide production", "Directly kill bacteria", "Only function in systemic immunity"],
    answer: 1,
    explanation: "ILC3s (RORγt+) are the innate counterparts of Th17 cells. They: (1) produce IL-22 (induces epithelial antimicrobial peptides — RegIIIγ, defensins; promotes epithelial proliferation and mucus production), (2) produce IL-17 (neutrophil recruitment), (3) present antigens on MHC-II to CD4+ T cells (regulating commensal-specific T-cell responses). ILC3s are critical for maintaining intestinal homeostasis, controlling commensal bacteria, and defending against extracellular pathogens (Citrobacter, Klebsiella). ILC3 dysfunction contributes to IBD."
  },
  {
    id: 8,
    question: "Secretory component (SC) in secretory IgA (sIgA) protects the antibody from:",
    options: ["Complement activation", "Proteolytic degradation in harsh mucosal environments (GI, respiratory tract)", "Binding to antigens", "MHC presentation"],
    answer: 1,
    explanation: "Secretory component is the cleaved extracellular portion of the polymeric immunoglobulin receptor (pIgR). After pIgR-mediated transcytosis of dimeric IgA across epithelial cells, pIgR is cleaved, and the SC remains covalently attached to dimeric IgA. SC: (1) protects IgA from proteolytic degradation by digestive enzymes (trypsin, chymotrypsin), (2) promotes mucus association (anchoring sIgA in the mucus layer for immune exclusion), and (3) has intrinsic antimicrobial properties. sIgA is the most stable immunoglobulin in mucosal secretions."
  },
  {
    id: 9,
    question: "The microbiome shapes immune development by all of the following EXCEPT:",
    options: ["Promoting IgA production in the gut", "Inducing regulatory T cells via short-chain fatty acid production", "Educating innate immune cells (macrophages, DCs) through TLR/NLR signaling", "Directly producing adaptive immune receptors (TCR/BCR)"],
    answer: 3,
    explanation: "The microbiome profoundly shapes immune development: (1) segmented filamentous bacteria (SFB) induce Th17 cells in the gut, (2) Bacteroides fragilis polysaccharide A induces IL-10-producing Tregs, (3) microbial metabolites (butyrate, propionate) promote Treg differentiation (HDAC inhibition → FOXP3 expression), (4) colonization drives IgA production and germinal center development, (5) microbial TLR/NLR ligands educate innate immune cells. The microbiome does NOT produce adaptive immune receptors (TCR/BCR) — these are generated by V(D)J recombination in the host."
  },
  {
    id: 10,
    question: "TSLP (thymic stromal lymphopoietin) is an epithelial-derived cytokine that promotes:",
    options: ["Th1 responses", "Type 2 immune responses by activating dendritic cells to drive Th2 differentiation, contributing to allergic inflammation", "Cytotoxic T-cell responses", "Complement activation"],
    answer: 1,
    explanation: "TSLP is an 'alarmin' cytokine released by damaged or activated epithelial cells (skin, airway, gut). TSLP activates DCs, which then drive Th2 polarization (producing IL-4, IL-5, IL-13 without IL-12). TSLP also directly activates ILC2s, mast cells, and basophils. TSLP is overexpressed in atopic dermatitis and asthmatic airways. Tezepelumab (anti-TSLP antibody) is FDA-approved for severe asthma, blocking the upstream epithelial trigger of type 2 inflammation."
  },

  // ===== IMMUNE REGULATION & TOLERANCE (Q11–Q20) =====
  {
    id: 11,
    question: "Immune checkpoint molecules (PD-1, CTLA-4, LAG-3, TIM-3) physiologically function to:",
    options: ["Promote autoimmunity", "Prevent excessive immune activation, maintain self-tolerance, and protect against immunopathology", "Only function in cancer", "Activate T cells exclusively"],
    answer: 1,
    explanation: "Immune checkpoints are inhibitory receptors that maintain immune homeostasis: (1) CTLA-4 — limits T-cell priming (competes with CD28 for B7, Treg-mediated suppression). CTLA-4 KO mice → fatal lymphoproliferation. (2) PD-1 — limits effector T-cell function in peripheral tissues, prevents autoimmune damage. PD-1 KO mice → lupus-like disease, cardiomyopathy. (3) LAG-3 — limits T-cell proliferation, enhances Treg function. (4) TIM-3 — regulates Th1/Tc1 responses. These checkpoints prevent immunopathology; their exploitation by tumors enables immune evasion."
  },
  {
    id: 12,
    question: "CTLA-4 and PD-1 deficiency in humans causes:",
    options: ["Immunodeficiency", "Severe autoimmune/lymphoproliferative disease (analogous to irAEs from checkpoint inhibitors)", "No clinical effect", "Enhanced cancer immunity without complications"],
    answer: 1,
    explanation: "CTLA-4 haploinsufficiency (CHAI — CTLA-4 haploinsufficiency with autoimmune infiltration) causes: lymphocytic infiltration of organs, autoimmune cytopenias, hypogammaglobulinemia, and lymphoproliferation. PD-1 deficiency is extremely rare in humans but associated with autoimmune features. These genetic conditions validate that immune checkpoint pathways are essential for tolerance. Therapeutic checkpoint blockade in cancer intentionally disrupts these pathways, explaining why irAEs (autoimmune side effects) are mechanism-based and expected."
  },
  {
    id: 13,
    question: "Activation-induced cell death (AICD) limits immune responses by:",
    options: ["Preventing T-cell activation", "Inducing apoptosis in repeatedly stimulated T cells via Fas/FasL interactions, eliminating excess effector cells after infection clearance", "Blocking cytokine production", "Promoting B-cell class switching"],
    answer: 1,
    explanation: "AICD is a peripheral tolerance mechanism: repeated T-cell activation (chronic antigen stimulation) upregulates FasL expression. FasL on activated T cells binds Fas (CD95) on neighboring activated T cells (or the same cell — autocrine), triggering caspase-8-dependent extrinsic apoptosis. AICD eliminates expanded effector T cells after pathogen clearance, restoring homeostasis. Defective AICD (Fas/FasL mutations) → autoimmune lymphoproliferative syndrome (ALPS) — lymphadenopathy, splenomegaly, autoimmune cytopenias, and accumulation of double-negative T cells."
  },
  {
    id: 14,
    question: "Autoimmune lymphoproliferative syndrome (ALPS) is caused by defects in:",
    options: ["AIRE", "Fas (CD95) or FasL, impairing the apoptotic elimination of autoreactive lymphocytes", "FOXP3", "RAG1/RAG2"],
    answer: 1,
    explanation: "ALPS is caused by germline mutations in: FAS (TNFRSF6, most common — ALPS-FAS), FASL (ALPS-FASL), or caspase-10 (ALPS-CASP10). Defective Fas-mediated apoptosis prevents AICD, causing: (1) chronic non-malignant lymphoproliferation (lymphadenopathy, hepatosplenomegaly), (2) accumulation of unusual 'double-negative' T cells (TCRαβ+ CD4- CD8-), (3) autoimmune cytopenias (AIHA, ITP), (4) elevated serum IL-10, IL-18, and vitamin B12 (biomarkers). ALPS increases lymphoma risk (~50-fold)."
  },
  {
    id: 15,
    question: "Immune privilege in certain tissues (eye, brain, testes, uterus) is maintained by:",
    options: ["Absence of antigens", "Physical barriers, local immunosuppressive factors (TGF-β, FasL), absence of lymphatic drainage, and limited MHC expression", "Constant immune attack", "High MHC expression"],
    answer: 1,
    explanation: "Immune-privileged sites limit inflammatory responses to protect delicate tissues: (1) physical barriers (blood-brain barrier, blood-testis barrier, blood-ocular barrier), (2) immunosuppressive milieu (TGF-β, IL-10, α-MSH, CGRP in aqueous humor), (3) FasL expression by tissue cells (inducing apoptosis of infiltrating Fas+ lymphocytes), (4) limited/absent conventional lymphatic drainage, (5) low MHC-I/II expression. Breakdown of immune privilege → autoimmune conditions (sympathetic ophthalmia, MS — but note brain has functional lymphatic drainage via glymphatic system)."
  },
  {
    id: 16,
    question: "Receptor editing in B-cell tolerance refers to:",
    options: ["TCR gene rearrangement", "Secondary rearrangement of immunoglobulin light chain genes in self-reactive immature B cells to change antigen specificity", "MHC gene editing", "Somatic hypermutation in germinal centers"],
    answer: 1,
    explanation: "Receptor editing is a central B-cell tolerance mechanism in the bone marrow. When immature B cells express autoreactive BCRs that strongly bind self-antigens, instead of immediate deletion: (1) RAG1/RAG2 expression is maintained/re-induced, (2) secondary Vκ-Jκ rearrangement occurs (replacing the light chain, potentially changing specificity), (3) if still autoreactive, λ light chain rearrangement is attempted. If editing fails to eliminate self-reactivity, the B cell undergoes clonal deletion (apoptosis) or clonal anergy (functional unresponsiveness)."
  },
  {
    id: 17,
    question: "Follicular regulatory T cells (Tfr) function to:",
    options: ["Help B cells in germinal centers", "Suppress germinal center responses by controlling Tfh cell and B-cell activity, preventing autoantibody production", "Produce antibodies", "Activate NK cells"],
    answer: 1,
    explanation: "Tfr cells (CXCR5+ FOXP3+ BCL-6+) are a specialized Treg subset that enters germinal centers. They suppress: (1) excessive Tfh cell proliferation and cytokine production, (2) B-cell proliferation and antibody production, (3) autoantibody generation by self-reactive B cells that may enter GCs. The Tfh:Tfr ratio regulates GC output — imbalance (too many Tfh, too few Tfr) promotes autoimmunity. Tfr cells use similar suppressive mechanisms as conventional Tregs: CTLA-4, IL-10, and metabolic disruption."
  },
  {
    id: 18,
    question: "Allergen-specific immunotherapy (desensitization) works by:",
    options: ["Increasing IgE production", "Inducing allergen-specific Tregs, shifting from IgE to IgG4 blocking antibodies, and reducing mast cell/basophil reactivity", "Completely eliminating the allergen from the body", "Suppressing all immune responses"],
    answer: 1,
    explanation: "Allergen immunotherapy (subcutaneous or sublingual) involves gradual exposure to increasing allergen doses. Mechanisms: (1) induction of allergen-specific Tregs (IL-10, TGF-β producing), (2) immune deviation from Th2 to Th1/Treg responses, (3) IgG4 blocking antibody production (competes with IgE for allergen binding, preventing mast cell crosslinking), (4) reduced mast cell and basophil degranulation, (5) decreased eosinophil and ILC2 activity. Immunotherapy is the only disease-modifying treatment for allergic rhinitis, asthma, and venom allergy. Typically requires 3-5 years of treatment."
  },
  {
    id: 19,
    question: "The hygiene hypothesis proposes that:",
    options: ["Cleanliness prevents all diseases", "Reduced early-life microbial exposure leads to impaired immune regulation and increased susceptibility to allergic and autoimmune diseases", "Infections always prevent allergies", "Hygiene has no effect on immunity"],
    answer: 1,
    explanation: "The hygiene hypothesis (Strachan, 1989): reduced childhood infections and microbial exposure (smaller families, antibiotics, urban living, cesarean delivery) shifts the immune balance toward Th2/allergic responses, inadequately developing regulatory mechanisms. Updated 'old friends' hypothesis: evolved symbiotic organisms (helminths, mycobacteria, commensal bacteria) that educated the immune system are now absent. Evidence: (1) allergy/autoimmune disease prevalence increases with development, (2) farm children have fewer allergies (diverse microbial exposure), (3) helminth infections are inversely correlated with allergic disease."
  },
  {
    id: 20,
    question: "Immune-mediated inflammatory diseases (IMIDs) are treated with biologics targeting which pathways?",
    options: ["Only complement", "TNF-α (infliximab, adalimumab), IL-6R (tocilizumab), IL-17A (secukinumab), IL-23 (guselkumab), IL-4/13 (dupilumab), and co-stimulation (abatacept)", "Only IgE", "Only histamine"],
    answer: 1,
    explanation: "Targeted biologics for IMIDs: (1) Anti-TNF — infliximab, adalimumab, etanercept (RA, IBD, psoriasis, AS), (2) Anti-IL-6R — tocilizumab (RA, GCA, CRS), (3) Anti-IL-17A — secukinumab, ixekizumab (psoriasis, AS, PsA), (4) Anti-IL-23 p19 — guselkumab, risankizumab (psoriasis, IBD), (5) Anti-IL-4Rα — dupilumab (atopic dermatitis, asthma, CRSwNP, EoE), (6) Co-stimulation blockade — abatacept (CTLA-4-Ig, RA), (7) Anti-CD20 — rituximab (RA, ANCA vasculitis, pemphigus), (8) JAK inhibitors — tofacitinib, upadacitinib (RA, UC, AD)."
  },

  // ===== IMMUNOLOGICAL TECHNIQUES (Q21–Q30) =====
  {
    id: 21,
    question: "Flow cytometry identifies cell populations by:",
    options: ["Measuring cell size only", "Detecting fluorochrome-conjugated antibodies bound to cell surface or intracellular markers as single cells pass through a laser beam", "Sequencing DNA", "Culturing cells"],
    answer: 1,
    explanation: "Flow cytometry: (1) cells are labeled with fluorochrome-conjugated antibodies against surface/intracellular markers, (2) cells pass single-file through a laser beam in a fluid stream, (3) scattered light (forward scatter = size, side scatter = granularity/complexity) and fluorescence emission (specific markers) are detected by photomultiplier tubes, (4) data analysis identifies populations (e.g., CD4+CD8- T cells, CD19+ B cells). Modern instruments: >30 parameters simultaneously. Clinical applications: immunophenotyping lymphocyte subsets (HIV monitoring), leukemia/lymphoma diagnosis, PNH screening, SCID newborn screening (T-cell counts)."
  },
  {
    id: 22,
    question: "ELISA (enzyme-linked immunosorbent assay) is used to:",
    options: ["Separate proteins by size", "Detect and quantify specific antigens or antibodies using enzyme-conjugated antibodies and colorimetric/fluorometric readout", "Sequence DNA", "Identify bacteria by morphology"],
    answer: 1,
    explanation: "ELISA types: (1) Direct — antigen coated on plate, detected by enzyme-conjugated specific antibody. (2) Indirect — antigen on plate, detected by primary antibody + enzyme-conjugated secondary antibody (measures patient antibodies — e.g., anti-HIV ELISA). (3) Sandwich — capture antibody on plate, antigen bound, detected by second enzyme-conjugated antibody (measures antigen — e.g., cytokine ELISA). (4) Competitive — antigen or antibody competes with labeled standard. Substrate → colorimetric product measured by spectrophotometry. ELISA is the workhorse of clinical immunology (HIV screening, autoantibodies, allergen-specific IgE)."
  },
  {
    id: 23,
    question: "Western blot (immunoblot) in immunology detects:",
    options: ["DNA sequences", "Specific proteins separated by gel electrophoresis (size) and identified by antibody binding", "RNA expression", "Cell surface markers on live cells"],
    answer: 1,
    explanation: "Western blot: (1) proteins separated by SDS-PAGE (by molecular weight), (2) transferred to PVDF/nitrocellulose membrane, (3) blocked to prevent non-specific binding, (4) probed with specific primary antibody, (5) detected with enzyme-conjugated secondary antibody + substrate (chemiluminescence/colorimetric). Clinical use: HIV confirmatory testing (detecting antibodies against specific HIV proteins — p24, gp41, gp120/160; now largely replaced by 4th-generation antigen/antibody combo assays), autoantibody characterization, and research protein analysis."
  },
  {
    id: 24,
    question: "Immunofluorescence microscopy is used clinically to:",
    options: ["Sequence immunoglobulin genes", "Detect antibody or complement deposition patterns in tissue biopsies (e.g., kidney biopsies in glomerulonephritis, skin biopsies in pemphigus)", "Count blood cells", "Measure serum immunoglobulin levels"],
    answer: 1,
    explanation: "Direct immunofluorescence (DIF): fluorochrome-conjugated antibodies (anti-IgG, anti-IgA, anti-IgM, anti-C3, anti-fibrin) are applied directly to frozen tissue sections to detect in vivo immune deposits. Clinical applications: (1) kidney biopsy — linear IgG (Goodpasture), granular IgG (immune complex GN), mesangial IgA (IgA nephropathy), (2) skin biopsy — intercellular IgG (pemphigus vulgaris), linear BMZ IgG (bullous pemphigoid), granular IgA at dermal papillae (dermatitis herpetiformis). Indirect IF detects circulating autoantibodies (ANA on HEp-2 cells)."
  },
  {
    id: 25,
    question: "Multiplex bead assay (Luminex) technology allows simultaneous measurement of:",
    options: ["Only one analyte per well", "Multiple cytokines, chemokines, or antibodies (up to 100+) in a single small-volume sample", "Only cell counts", "Only DNA"],
    answer: 1,
    explanation: "Luminex uses spectrally distinct fluorescent microspheres (beads), each conjugated with a specific capture antibody. Multiple bead populations are mixed, incubated with sample, and detected with fluorescent secondary antibodies. A dual-laser flow cytometer identifies bead type (classification laser) and quantifies bound analyte (reporter laser). Advantages: multiplex (100+ analytes simultaneously), small sample volume (25-50 μL), high throughput. Applications: cytokine profiling, anti-HLA antibody panels (Luminex SAB — single antigen bead assay for transplant crossmatching), autoantibody panels."
  },
  {
    id: 26,
    question: "Mass cytometry (CyTOF) differs from conventional flow cytometry by using:",
    options: ["Fluorochrome-conjugated antibodies", "Metal isotope-tagged antibodies detected by time-of-flight mass spectrometry, enabling 40+ simultaneous parameters without spectral overlap", "Only two markers at a time", "Light scattering alone"],
    answer: 1,
    explanation: "CyTOF uses antibodies conjugated to rare earth metal isotopes (instead of fluorochromes), detected by inductively coupled plasma time-of-flight mass spectrometry. Advantages: (1) 40-50+ simultaneous parameters (vs. practical limit of ~20 in fluorescence-based flow due to spectral overlap), (2) no compensation needed (discrete mass channels, no spectral overlap), (3) deep immunophenotyping of complex populations. Limitations: slower acquisition, destructive (cells are vaporized), no cell sorting. CyTOF enables comprehensive immune profiling in research and translational immunology."
  },
  {
    id: 27,
    question: "ELISPOT (enzyme-linked immunospot assay) measures:",
    options: ["Total serum antibody levels", "The frequency of individual cells secreting specific cytokines or antibodies, detected as spots on a membrane", "DNA mutations", "Complement levels"],
    answer: 1,
    explanation: "ELISPOT: (1) capture antibody (anti-cytokine or anti-Ig) is coated on a PVDF membrane in a 96-well plate, (2) cells are incubated on the membrane, (3) secreted molecules (e.g., IFN-γ, IL-2, granzyme B, or antibodies) are captured locally around each secreting cell, (4) detected with biotinylated detection antibody + streptavidin-enzyme + precipitating substrate. Each spot represents one secreting cell. ELISPOT is extremely sensitive (detecting 1 in 100,000 cells). Clinical applications: TB diagnosis (IFN-γ release assays — QuantiFERON, T-SPOT.TB), vaccine immunogenicity studies, and transplant monitoring."
  },
  {
    id: 28,
    question: "Complement fixation test detects antibodies by measuring:",
    options: ["Direct complement activation on bacteria", "Consumption of complement by antigen-antibody complexes — residual complement is detected using sensitized sheep red blood cells (indicator system)", "Only C-reactive protein levels", "IgE-mediated complement activation"],
    answer: 1,
    explanation: "Complement fixation test (CFT): (1) patient serum (heat-inactivated to destroy endogenous complement) + known antigen + measured complement are incubated, (2) if specific antibodies are present, antigen-antibody complexes fix (consume) complement, (3) indicator system (antibody-coated sheep RBCs) is added, (4) if complement was consumed (positive test) → no RBC lysis; if complement remains (negative test) → RBC lysis. CFT was historically used for syphilis (Wassermann test), viral infections, and fungal infections. Largely replaced by ELISA but still used in some settings."
  },
  {
    id: 29,
    question: "Mixed lymphocyte reaction (MLR) tests:",
    options: ["Antibody production", "T-cell proliferative response to allogeneic MHC molecules, used to assess histocompatibility before transplantation", "Complement function", "NK cell cytotoxicity"],
    answer: 1,
    explanation: "MLR: responder lymphocytes from the potential recipient are cultured with irradiated (non-proliferating) stimulator lymphocytes from the potential donor. If HLA disparity exists, recipient T cells recognize foreign MHC on stimulator cells and proliferate (measured by ³H-thymidine incorporation or CFSE dilution). One-way MLR measures recipient anti-donor reactivity. Strong MLR indicates significant HLA mismatch. While MLR has been largely replaced by molecular HLA typing, it provides functional assessment of alloreactivity not captured by genotyping alone."
  },
  {
    id: 30,
    question: "Immunoprecipitation (IP) is used to:",
    options: ["Visualize tissue architecture", "Isolate a specific protein from cell lysates using an antibody, enabling identification of protein-protein interactions (co-IP) and post-translational modifications", "Measure serum antibody titers", "Count lymphocytes"],
    answer: 1,
    explanation: "IP: (1) cell lysate is incubated with antibody specific for the target protein, (2) antibody-antigen complexes are captured on Protein A/G beads, (3) complexes are washed (removing non-specific proteins) and eluted, (4) precipitated proteins are analyzed by Western blot, mass spectrometry, or other methods. Co-immunoprecipitation (co-IP) identifies proteins that physically interact with the target protein. Chromatin IP (ChIP) followed by sequencing (ChIP-seq) identifies genome-wide protein-DNA interactions."
  },

  // ===== CLINICAL IMMUNOLOGY — INFECTIONS & HIV (Q31–Q40) =====
  {
    id: 31,
    question: "HIV primarily targets and depletes:",
    options: ["CD8+ T cells", "CD4+ T cells via gp120/gp41-mediated fusion with cells expressing CD4 and CCR5/CXCR4 co-receptors", "B cells exclusively", "NK cells exclusively"],
    answer: 1,
    explanation: "HIV-1 entry: (1) gp120 binds CD4 on target cells (CD4+ T cells, macrophages, DCs), (2) conformational change exposes co-receptor binding site — gp120 binds CCR5 (R5-tropic, predominant early) or CXCR4 (X4-tropic, associated with disease progression), (3) gp41-mediated membrane fusion and viral entry. CD4+ T cell depletion occurs through: direct viral cytopathic effects, bystander apoptosis, pyroptosis (abortive infection in resting CD4+ T cells activating caspase-1/NLRP3), and immune-mediated killing. Progressive CD4 decline → AIDS when CD4 <200 cells/μL."
  },
  {
    id: 32,
    question: "The latent HIV reservoir that prevents cure is primarily maintained in:",
    options: ["Circulating virions", "Resting memory CD4+ T cells harboring integrated proviral DNA that is transcriptionally silent", "B cells", "Macrophages exclusively"],
    answer: 1,
    explanation: "The latent reservoir consists primarily of resting memory CD4+ T cells with stably integrated HIV proviral DNA that is transcriptionally silent. Key features: (1) no viral protein expression → invisible to immune surveillance and antiretroviral drugs, (2) extremely long half-life (~44 months) → decades to decay naturally, (3) established very early during primary infection, (4) reactivation upon T-cell stimulation produces infectious virus. Cure strategies: (1) 'Shock and kill' (latency-reversing agents + immune clearance), (2) gene editing (CRISPR excision of provirus), (3) 'Block and lock' (permanent silencing). The Berlin and London patients achieved cure via CCR5Δ32 stem cell transplantation."
  },
  {
    id: 33,
    question: "Antiretroviral therapy (ART) for HIV typically combines drugs targeting:",
    options: ["Only protease", "Multiple steps of the viral life cycle — typically two NRTIs + an integrase inhibitor (INSTI) or NNRTI or boosted protease inhibitor", "Only reverse transcriptase", "Only viral entry"],
    answer: 1,
    explanation: "Modern ART combinations (highly active antiretroviral therapy): standard first-line = 2 NRTIs (tenofovir alafenamide + emtricitabine) + INSTI (dolutegravir or bictegravir). Drug classes by viral target: (1) NRTIs (nucleoside RT inhibitors — chain terminators), (2) NNRTIs (non-nucleoside RT inhibitors — allosteric), (3) INSTIs (integrase strand transfer inhibitors — dolutegravir, bictegravir, cabotegravir), (4) PIs (protease inhibitors — darunavir), (5) Entry inhibitors (maraviroc — CCR5 antagonist, enfuvirtide — fusion inhibitor), (6) Capsid inhibitors (lenacapavir — long-acting). ART achieves viral suppression (undetectable viral load) but doesn't cure due to the latent reservoir."
  },
  {
    id: 34,
    question: "The CCR5-Δ32 mutation is significant in HIV biology because:",
    options: ["It increases susceptibility to HIV", "Homozygous CCR5-Δ32 confers near-complete resistance to R5-tropic HIV-1 infection due to absence of the CCR5 co-receptor", "It affects only X4-tropic HIV", "It has no effect on HIV"],
    answer: 1,
    explanation: "CCR5-Δ32 is a 32-bp deletion causing a non-functional truncated CCR5 protein. Homozygous individuals (~1% of Northern Europeans) lack surface CCR5 and are highly resistant to R5-tropic HIV-1 (the predominant transmitted strain). Heterozygotes have reduced CCR5 expression and slower disease progression. The 'Berlin patient' (Timothy Ray Brown) and 'London patient' (Adam Castillejo) were cured of HIV after receiving stem cell transplants from CCR5-Δ32 homozygous donors, providing proof-of-concept for CCR5-targeted therapies."
  },
  {
    id: 35,
    question: "Immune reconstitution inflammatory syndrome (IRIS) occurs when:",
    options: ["HIV viral load increases on ART", "Rapid immune recovery after ART initiation triggers exaggerated inflammatory responses against previously unrecognized opportunistic infections or their antigens", "ART drugs cause direct organ toxicity", "CD4+ T cells remain depleted"],
    answer: 1,
    explanation: "IRIS occurs in ~10-25% of patients starting ART, particularly those with low baseline CD4 counts (<50 cells/μL) and high viral loads. As ART restores immune function, reconstituted T cells mount vigorous inflammatory responses against: (1) pre-existing opportunistic infections (TB, Cryptococcus, CMV, MAC, PML — 'unmasking IRIS'), or (2) residual pathogen antigens in tissues ('paradoxical IRIS' — worsening despite successful treatment). IRIS typically occurs 2-8 weeks after ART initiation. Management: continue ART, treat underlying OI, corticosteroids for severe cases."
  },
  {
    id: 36,
    question: "Broadly neutralizing antibodies (bnAbs) against HIV target:",
    options: ["Only gp41", "Conserved epitopes on the HIV envelope trimer (gp120/gp41), including CD4 binding site, V1/V2 apex, V3 glycan, and MPER regions", "Only internal viral proteins", "Only the HIV capsid"],
    answer: 1,
    explanation: "bnAbs recognize conserved vulnerable sites on the HIV Env trimer: (1) CD4 binding site (VRC01, 3BNC117), (2) V1/V2 glycan apex (PGT121, PG9), (3) V3 glycan supersite (10-1074, PGT128), (4) gp120-gp41 interface, (5) membrane-proximal external region (MPER — 10E8, 4E10). bnAbs develop in ~10-30% of chronically infected individuals after years. They are being explored for: HIV prevention (passive immunization, long-acting bnAb infusions), treatment (complementing ART), and as templates for vaccine design. Challenges: HIV diversity, glycan shield, and eliciting bnAbs by vaccination."
  },
  {
    id: 37,
    question: "Pre-exposure prophylaxis (PrEP) for HIV prevention uses:",
    options: ["HIV vaccines", "Antiretroviral drugs (tenofovir/emtricitabine or long-acting cabotegravir) taken by HIV-negative individuals to prevent infection", "Passive antibody administration", "Immune-boosting supplements"],
    answer: 1,
    explanation: "PrEP: HIV-negative individuals at high risk take antiretroviral drugs prophylactically. (1) Oral PrEP — tenofovir disoproxil fumarate/emtricitabine (TDF/FTC, Truvada) or tenofovir alafenamide/emtricitabine (TAF/FTC, Descovy) — daily pill, ~99% effective when adherent. (2) Long-acting injectable PrEP — cabotegravir (Apretude) — intramuscular injection every 2 months, 69% more effective than daily oral TDF/FTC. (3) Lenacapavir (Sunlenca) — subcutaneous injection every 6 months, 100% efficacy in PURPOSE 1 trial (women in Africa). PrEP is a transformative HIV prevention tool."
  },
  {
    id: 38,
    question: "Opportunistic infections in AIDS (CD4 <200 cells/μL) commonly include:",
    options: ["Only common bacterial infections", "Pneumocystis jirovecii pneumonia, cerebral toxoplasmosis, cryptococcal meningitis, CMV retinitis, and disseminated MAC", "Only viral infections", "Only fungal infections"],
    answer: 1,
    explanation: "AIDS-defining OIs correlate with CD4 count: <200 — Pneumocystis jirovecii pneumonia (PCP, most common), esophageal candidiasis, Kaposi sarcoma (HHV-8). <100 — cerebral toxoplasmosis, cryptococcal meningitis, progressive multifocal leukoencephalopathy (PML, JC virus). <50 — disseminated MAC, CMV retinitis/colitis, disseminated histoplasmosis/coccidioidomycosis. Prophylaxis: TMP-SMX (PCP and toxoplasmosis, CD4<200), azithromycin (MAC, CD4<50), fluconazole (cryptococcosis in endemic areas)."
  },
  {
    id: 39,
    question: "Sepsis is an immunological emergency characterized by:",
    options: ["Only localized infection", "Dysregulated host immune response to infection causing life-threatening organ dysfunction, with initial hyperinflammation followed by immunosuppression", "Only complement activation", "Only antibody-mediated damage"],
    answer: 1,
    explanation: "Sepsis (Sepsis-3 definition: life-threatening organ dysfunction due to dysregulated host response to infection) involves: (1) Initial hyperinflammatory phase — massive PRR activation (TLR → NF-κB → TNF-α, IL-1β, IL-6 cytokine storm), complement activation, coagulation cascade (DIC), endothelial dysfunction, vasodilation → septic shock. (2) Compensatory immunosuppressive phase — lymphocyte apoptosis, monocyte deactivation (reduced HLA-DR), Treg expansion, increased PD-L1 expression → secondary infections. Mortality ~25-30%. Early antibiotics, source control, and supportive care are critical."
  },
  {
    id: 40,
    question: "Trained immunity describes the phenomenon where:",
    options: ["Adaptive immune cells develop memory", "Innate immune cells (monocytes, macrophages, NK cells) undergo epigenetic reprogramming after initial stimulation, exhibiting enhanced responses to subsequent unrelated infections", "Only B cells develop memory", "Innate immunity cannot be trained"],
    answer: 1,
    explanation: "Trained immunity (Netea, 2011): innate immune cells undergo long-term functional reprogramming after certain stimuli (BCG, β-glucan, oxidized LDL). Mechanisms: (1) epigenetic modifications (H3K4me3, H3K27Ac at promoters of pro-inflammatory genes), (2) metabolic rewiring (shift to aerobic glycolysis — Warburg effect), (3) enhanced cytokine production upon re-stimulation. Trained immunity explains: BCG's non-specific protective effects (reduced all-cause infant mortality), and innate immune memory. Duration: months to years. Implications for vaccine development and anti-cancer innate immunity."
  },

  // ===== EMERGING CONCEPTS IN IMMUNOLOGY (Q41–Q50) =====
  {
    id: 41,
    question: "The cGAS-STING pathway detects:",
    options: ["Extracellular bacterial LPS", "Cytosolic double-stranded DNA (from viruses, bacteria, damaged self-DNA, or tumor cells), activating type I interferon production", "Extracellular RNA", "Lipid antigens"],
    answer: 1,
    explanation: "cGAS (cyclic GMP-AMP synthase) is a cytosolic DNA sensor that detects dsDNA regardless of sequence (distinguishing it from TLR9 which recognizes CpG DNA). cGAS produces cGAMP (cyclic dinucleotide second messenger), which activates STING (stimulator of interferon genes) on the ER membrane. STING recruits TBK1, phosphorylates IRF3, inducing type I interferons and NF-κB-dependent inflammatory cytokines. The pathway is critical for antiviral defense, anti-tumor immunity, and autoinflammatory diseases (STING gain-of-function → SAVI syndrome)."
  },
  {
    id: 42,
    question: "Tissue-resident memory T cells (Trm) are important because they:",
    options: ["Only circulate in blood", "Permanently reside in peripheral tissues (skin, lung, gut) and provide immediate frontline defense upon pathogen re-encounter without requiring recruitment from circulation", "Are identical to central memory T cells", "Only function in lymph nodes"],
    answer: 1,
    explanation: "Trm cells (CD103+CD69+) permanently reside in barrier tissues after infection/vaccination, maintained by local survival signals. Key features: (1) non-circulating (CD69 inhibits S1P1-mediated tissue egress), (2) express CD103 (integrin αEβ7 binding E-cadherin on epithelial cells), (3) rapid effector function upon re-encounter (IFN-γ, TNF-α, granzyme B, cytokine alarming), (4) recruit circulating immune cells. Trm provide superior protection at mucosal sites compared to circulating memory cells. Understanding Trm biology informs next-generation vaccine strategies targeting mucosal/tissue immunity."
  },
  {
    id: 43,
    question: "Immune metabolism (immunometabolism) is important because:",
    options: ["Immune cells use only glucose", "Metabolic reprogramming (glycolysis, oxidative phosphorylation, fatty acid oxidation) directly controls immune cell activation, differentiation, and function", "Metabolism has no effect on immune function", "Only cancer cells undergo metabolic changes"],
    answer: 1,
    explanation: "Immunometabolism: (1) Activated T cells, M1 macrophages, and DCs switch to aerobic glycolysis (Warburg effect) for rapid energy and biosynthetic intermediates. (2) Tregs and memory T cells rely on oxidative phosphorylation and fatty acid oxidation. (3) mTOR promotes effector T-cell metabolism (glycolysis, anabolism); AMPK promotes memory/Treg metabolism (OXPHOS, catabolism). (4) Metabolites directly regulate immune function: succinate stabilizes HIF-1α (pro-inflammatory), itaconate inhibits SDH (anti-inflammatory), α-KG promotes M2 polarization. Targeting immunometabolism is an emerging therapeutic strategy."
  },
  {
    id: 44,
    question: "Pyroptosis is an inflammatory form of programmed cell death mediated by:",
    options: ["Caspases-3 and -7 only", "Inflammatory caspases (caspase-1, -4, -5, -11) cleaving gasdermin D, forming membrane pores that release IL-1β and IL-18", "Only receptor-interacting kinases", "Complement-mediated lysis"],
    answer: 1,
    explanation: "Pyroptosis: (1) Canonical pathway — inflammasome activation → caspase-1 → cleaves gasdermin D (GSDMD) and pro-IL-1β/pro-IL-18, (2) Non-canonical pathway — cytosolic LPS directly activates caspase-4/5 (human)/caspase-11 (mouse) → GSDMD cleavage. Gasdermin D N-terminal domain oligomerizes in the plasma membrane, forming ~10-20 nm pores → cell swelling, lysis, and release of inflammatory contents (IL-1β, IL-18, DAMPs). Pyroptosis is important for defense against intracellular pathogens but contributes to sepsis, autoinflammatory diseases, and atherosclerosis."
  },
  {
    id: 45,
    question: "Checkpoint inhibitor immunotherapy has achieved durable responses in which cancers?",
    options: ["Only melanoma", "Melanoma, NSCLC, RCC, urothelial carcinoma, Hodgkin lymphoma, MSI-H tumors, and many others", "No cancers", "Only hematologic malignancies"],
    answer: 1,
    explanation: "Checkpoint inhibitors (anti-PD-1, anti-PD-L1, anti-CTLA-4) have FDA approvals in 20+ cancer types: melanoma (ipilimumab 2011, nivolumab/pembrolizumab 2014), NSCLC, RCC, urothelial, head and neck SCC, Hodgkin lymphoma, hepatocellular, gastric/esophageal, Merkel cell, cervical, endometrial, and tumor-agnostic for MSI-H/dMMR and TMB-H. A hallmark is durable responses — some patients maintain remission for 10+ years (especially melanoma). Response rates vary widely (15-60%) depending on tumor type, biomarkers, and line of therapy."
  },
  {
    id: 46,
    question: "Bispecific antibodies in immunology can simultaneously bind:",
    options: ["Only one antigen", "Two different antigens (e.g., a tumor antigen and CD3 on T cells), bringing immune effectors to target cells", "Only complement proteins", "Only Fc receptors"],
    answer: 1,
    explanation: "Bispecific antibodies (BsAbs) have two different antigen-binding specificities in one molecule. Formats: (1) BiTEs (bispecific T-cell engagers) — blinatumomab (CD19×CD3 for B-ALL), (2) Full-length bispecifics — mosunetuzumab (CD20×CD3 for follicular lymphoma), glofitamab (CD20×CD3), teclistamab (BCMA×CD3 for myeloma), (3) Bispecific checkpoint modulators (PD-1×LAG-3), (4) Bispecific targeting two tumor antigens (HER2×HER3). BsAbs bypass MHC restriction, enabling polyclonal T-cell activation against tumors. They are becoming a major therapeutic class in oncology."
  },
  {
    id: 47,
    question: "Innate lymphoid cells (ILCs) mirror which adaptive immune cell types?",
    options: ["Only B cells", "ILC1 mirrors Th1, ILC2 mirrors Th2, ILC3 mirrors Th17 — producing similar cytokine profiles without antigen-specific receptors", "Only CD8+ T cells", "Only Tregs"],
    answer: 1,
    explanation: "ILCs are tissue-resident innate lymphocytes that lack rearranged antigen receptors but produce cytokines paralleling T helper subsets: (1) ILC1 (T-bet+) — IFN-γ, TNF-α (mirrors Th1, defense against intracellular pathogens), (2) ILC2 (GATA-3+) — IL-4, IL-5, IL-13 (mirrors Th2, anti-helminth, allergic inflammation), (3) ILC3 (RORγt+) — IL-22, IL-17 (mirrors Th17, mucosal defense), (4) NK cells — cytotoxicity (mirrors CD8+ CTLs). ILCs respond rapidly to epithelial alarmins (IL-33, IL-25, TSLP) and are critical for tissue homeostasis and early defense."
  },
  {
    id: 48,
    question: "Antibody-drug conjugates (ADCs) in immunotherapy deliver:",
    options: ["Cytokines to tumor cells", "Cytotoxic drug payloads specifically to antigen-expressing target cells using antibody-mediated targeting", "Checkpoint inhibitors intracellularly", "DNA vaccines to tumor cells"],
    answer: 1,
    explanation: "ADCs combine: (1) monoclonal antibody (targeting tumor-specific antigen), (2) chemical linker (cleavable or non-cleavable), (3) cytotoxic payload (microtubule inhibitors: MMAE, DM1; topoisomerase I inhibitors: DXd, SN-38; DNA-damaging agents: calicheamicin, PBD). Mechanism: antibody binds tumor antigen → internalization → lysosomal degradation releases payload → cell death. FDA-approved ADCs include: T-DM1 and T-DXd (HER2+), brentuximab vedotin (CD30), enfortumab vedotin (Nectin-4), sacituzumab govitecan (Trop-2), and mirvetuximab soravtansine (FRα)."
  },
  {
    id: 49,
    question: "Immune aging (immunosenescence) is characterized by:",
    options: ["Enhanced immune function with age", "Thymic involution, reduced naive T-cell output, accumulation of memory/senescent T cells, inflammaging, and impaired vaccine responses in the elderly", "Increased B-cell diversity", "Enhanced NK cell function"],
    answer: 1,
    explanation: "Immunosenescence: (1) thymic involution (progressive from puberty, >90% atrophied by age 70) → reduced naive T-cell output, (2) accumulation of terminally differentiated/senescent T cells (CD28-CD57+), reduced TCR diversity, (3) B-cell: reduced naive B cells, impaired SHM and CSR, (4) inflammaging — chronic low-grade inflammation (elevated IL-6, TNF-α, CRP) without infection, driven by cellular senescence (SASP), CMV reactivation, gut barrier dysfunction, (5) impaired vaccine responses (influenza vaccine ~30-40% effective in elderly vs. 70-90% in young adults). High-dose and adjuvanted vaccines improve elderly responses."
  },
  {
    id: 50,
    question: "The concept of 'immune fitness' suggests that optimal immune function depends on:",
    options: ["Only genetic factors", "Integration of genetics, microbiome composition, nutrition, exercise, sleep, stress, vaccination history, and environmental exposures", "Only vaccination status", "Only the absence of immunodeficiency"],
    answer: 1,
    explanation: "Immune fitness encompasses the complex interplay of factors determining immune competence: (1) Genetics — HLA type, innate immune gene polymorphisms, primary immunodeficiencies, (2) Microbiome — diversity and composition shape immune development and regulation, (3) Nutrition — vitamins D, C, zinc, iron; malnutrition is the most common cause of immunodeficiency globally, (4) Exercise — moderate exercise enhances immune surveillance; overtraining can be immunosuppressive, (5) Sleep — sleep deprivation impairs T-cell function and vaccine responses, (6) Stress — chronic psychological stress elevates cortisol, suppressing cellular immunity, (7) Age — immunosenescence. Understanding immune fitness informs personalized approaches to health optimization."
  }
]

export default questions
