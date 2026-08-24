const questions = [
  // ===== INNATE IMMUNITY (Q1–Q10) =====
  {
    id: 1,
    question: "Pattern recognition receptors (PRRs) of the innate immune system recognize:",
    options: ["Specific antigens unique to each pathogen", "Conserved pathogen-associated molecular patterns (PAMPs) shared by broad classes of microorganisms", "Only viral nucleic acids", "Self-MHC molecules"],
    answer: 1,
    explanation: "PRRs are germline-encoded receptors that recognize conserved microbial structures (PAMPs) not found in host cells: bacterial LPS, peptidoglycan, flagellin, viral dsRNA/ssRNA, unmethylated CpG DNA, and fungal beta-glucan. PRRs also detect damage-associated molecular patterns (DAMPs) released from injured host cells. Major PRR families include Toll-like receptors (TLRs), NOD-like receptors (NLRs), RIG-I-like receptors (RLRs), and C-type lectin receptors (CLRs)."
  },
  {
    id: 2,
    question: "Toll-like receptor 4 (TLR4) primarily recognizes:",
    options: ["Viral double-stranded RNA", "Bacterial lipopolysaccharide (LPS)", "Unmethylated CpG DNA", "Flagellin"],
    answer: 1,
    explanation: "TLR4, located on the cell surface, is the primary receptor for gram-negative bacterial LPS. LPS is first bound by LPS-binding protein (LBP), transferred to CD14, and then presented to the TLR4/MD-2 complex. TLR4 signals through both MyD88-dependent (NF-κB activation, pro-inflammatory cytokines) and TRIF-dependent (type I interferon, IRF3) pathways. Excessive TLR4 activation by LPS causes septic shock."
  },
  {
    id: 3,
    question: "The complement system can be activated through which three pathways?",
    options: ["Only the classical pathway", "Classical, alternative, and lectin pathways", "Classical, intrinsic, and extrinsic pathways", "Only the alternative pathway"],
    answer: 1,
    explanation: "Complement activation pathways: (1) Classical — initiated by C1q binding antibody-antigen complexes (IgG/IgM), (2) Lectin (MBL) — initiated by mannose-binding lectin or ficolins binding microbial carbohydrates, (3) Alternative — spontaneous C3 hydrolysis (tick-over) amplified on pathogen surfaces lacking complement regulators. All three converge on C3 convertase formation, generating C3b (opsonization), C3a/C5a (anaphylatoxins, inflammation), and the membrane attack complex (C5b-9, lysis)."
  },
  {
    id: 4,
    question: "The membrane attack complex (MAC) of complement is formed by:",
    options: ["C1, C2, C3", "C5b, C6, C7, C8, and multiple C9 molecules forming a pore in the target membrane", "C3a and C5a only", "Factor B and Factor D"],
    answer: 1,
    explanation: "After C5 convertase cleaves C5 into C5a (anaphylatoxin) and C5b, the MAC assembles sequentially: C5b binds C6, C7 (inserts into membrane), C8 (initiates pore formation), and 10-16 C9 molecules polymerize to form a transmembrane pore (~10 nm diameter). The MAC disrupts membrane integrity, causing osmotic lysis. MAC is most effective against gram-negative bacteria and enveloped viruses. Nucleated cells are relatively resistant due to membrane repair mechanisms."
  },
  {
    id: 5,
    question: "Natural killer (NK) cells kill target cells that:",
    options: ["Express high levels of MHC class I", "Have downregulated MHC class I expression (missing-self hypothesis)", "Express MHC class II", "Present bacterial antigens"],
    answer: 1,
    explanation: "NK cells use a balance of activating and inhibitory receptors. Inhibitory receptors (KIRs, CD94/NKG2A) recognize self-MHC class I molecules — when MHC-I is present, inhibitory signals dominate, preventing killing. When virus-infected or tumor cells downregulate MHC-I (to evade CD8+ T cells), the inhibitory signal is lost ('missing self'), and activating receptor signals (NKG2D recognizing stress ligands MICA/MICB/ULBP) dominate, triggering NK cell-mediated killing via perforin/granzyme."
  },
  {
    id: 6,
    question: "Macrophage activation into M1 (classically activated) phenotype is induced by:",
    options: ["IL-4 and IL-13", "IFN-γ and LPS", "IL-10 and TGF-β", "IL-4 and IL-10"],
    answer: 1,
    explanation: "M1 macrophages are activated by IFN-γ (from Th1 cells and NK cells) and microbial products (LPS via TLR4). M1 macrophages produce: pro-inflammatory cytokines (TNF-α, IL-1β, IL-6, IL-12, IL-23), reactive oxygen species (ROS via NADPH oxidase), reactive nitrogen species (NO via iNOS), and present antigens effectively. M1 macrophages are microbicidal and anti-tumoral. M2 macrophages (induced by IL-4/IL-13) are anti-inflammatory, promote tissue repair, and can be pro-tumoral."
  },
  {
    id: 7,
    question: "Neutrophil extracellular traps (NETs) are:",
    options: ["Intracellular granules", "Web-like structures of decondensed chromatin with antimicrobial proteins extruded by neutrophils to trap and kill pathogens", "Antibodies secreted by neutrophils", "Complement fragments"],
    answer: 1,
    explanation: "NETs are extracellular structures composed of decondensed chromatin fibers decorated with antimicrobial proteins (neutrophil elastase, myeloperoxidase, histones, defensins). NETosis can be: (1) suicidal (cell death with NET release) or (2) vital (NET release from living neutrophils). NETs trap and kill bacteria and fungi. Excessive NETosis contributes to thrombosis, autoimmunity (SLE — anti-dsDNA antibodies), and cancer metastasis promotion."
  },
  {
    id: 8,
    question: "The NLRP3 inflammasome activates which pro-inflammatory cytokines?",
    options: ["TNF-α and IFN-γ", "IL-1β and IL-18 via caspase-1 activation", "IL-4 and IL-5", "IL-10 and TGF-β"],
    answer: 1,
    explanation: "NLRP3 (a NOD-like receptor) senses diverse danger signals (ATP, uric acid crystals, silica, cholesterol crystals, mitochondrial ROS, potassium efflux). Activation assembles the inflammasome complex (NLRP3 + ASC adaptor + pro-caspase-1). Caspase-1 autocatalytically activates and cleaves pro-IL-1β and pro-IL-18 into their mature active forms. Caspase-1 also cleaves gasdermin D, forming plasma membrane pores that mediate pyroptosis (inflammatory cell death) and IL-1β/IL-18 release."
  },
  {
    id: 9,
    question: "Type I interferons (IFN-α/β) are produced primarily in response to:",
    options: ["Bacterial LPS exclusively", "Viral infection, inducing an antiviral state in neighboring cells", "Parasitic infection", "Allergic reactions"],
    answer: 1,
    explanation: "Type I IFNs (IFN-α, ~13 subtypes; IFN-β, 1 subtype) are produced when viral nucleic acids are detected by: TLR3 (dsRNA), TLR7/8 (ssRNA), TLR9 (CpG DNA), RIG-I/MDA5 (cytosolic RNA), and cGAS-STING (cytosolic DNA). Plasmacytoid dendritic cells (pDCs) are the major producers of IFN-α. Type I IFNs induce: antiviral state (ISGs: PKR, OAS, Mx proteins), MHC-I upregulation, NK cell activation, and adaptive immune priming."
  },
  {
    id: 10,
    question: "Opsonization enhances phagocytosis by:",
    options: ["Directly killing pathogens", "Coating pathogens with opsonins (IgG, C3b, mannose-binding lectin) that are recognized by phagocyte receptors", "Inhibiting complement activation", "Reducing pathogen virulence"],
    answer: 1,
    explanation: "Opsonization marks pathogens for enhanced phagocytic uptake. Major opsonins and their phagocyte receptors: (1) IgG → Fcγ receptors (FcγRI/CD64, FcγRII/CD32, FcγRIII/CD16), (2) C3b/iC3b → complement receptors (CR1/CD35, CR3/CD11b-CD18), (3) mannose-binding lectin (MBL) → collectin receptors. Opsonization can increase phagocytosis efficiency by >1000-fold. Encapsulated bacteria (S. pneumoniae, H. influenzae, N. meningitidis) resist phagocytosis unless opsonized by specific antibodies."
  },

  // ===== ADAPTIVE IMMUNITY — T CELLS (Q11–Q20) =====
  {
    id: 11,
    question: "T-cell receptor (TCR) diversity is generated by:",
    options: ["Somatic hypermutation", "V(D)J recombination of germline gene segments mediated by RAG1/RAG2 recombinases", "Class switch recombination", "RNA editing"],
    answer: 1,
    explanation: "TCR diversity is generated during T-cell development in the thymus through V(D)J recombination: RAG1/RAG2 recombinases cut at recombination signal sequences (RSSs) flanking V, D, J gene segments, which are joined by NHEJ. Additional diversity comes from: (1) junctional diversity (P-nucleotides from hairpin opening, N-nucleotides added by TdT), (2) combinatorial diversity (different V-D-J combinations), and (3) αβ chain pairing. This generates ~10¹⁵-10¹⁸ possible TCR specificities. Unlike B cells, T cells do NOT undergo somatic hypermutation."
  },
  {
    id: 12,
    question: "Positive selection of T cells in the thymus ensures that:",
    options: ["T cells recognize foreign antigens only", "Developing T cells can recognize self-MHC molecules (MHC restriction)", "All self-reactive T cells are eliminated", "T cells can respond to superantigens"],
    answer: 1,
    explanation: "Positive selection occurs in the thymic cortex, mediated by cortical thymic epithelial cells (cTECs) expressing self-MHC with self-peptides. Double-positive (CD4+CD8+) thymocytes with TCRs that bind self-MHC with appropriate affinity receive survival signals; those that fail (no MHC recognition) die by neglect (~90% of thymocytes). Positive selection also determines CD4/CD8 lineage commitment: MHC-II interaction → CD4+ T cell; MHC-I interaction → CD8+ T cell."
  },
  {
    id: 13,
    question: "Negative selection of T cells eliminates:",
    options: ["T cells that cannot recognize MHC", "T cells with high-affinity TCRs for self-peptide-MHC complexes (self-reactive T cells)", "All CD8+ T cells", "T cells with low-affinity TCRs"],
    answer: 1,
    explanation: "Negative selection (central tolerance) occurs primarily in the thymic medulla, mediated by medullary thymic epithelial cells (mTECs) and dendritic cells. mTECs express tissue-restricted self-antigens (TRAs) under control of AIRE (autoimmune regulator). Thymocytes with high-affinity TCRs for self-peptide-MHC are eliminated by apoptosis (clonal deletion) or diverted to become regulatory T cells (Tregs). AIRE mutations cause autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy (APECED/APS-1)."
  },
  {
    id: 14,
    question: "CD4+ T helper cells recognize antigens presented on:",
    options: ["MHC class I molecules", "MHC class II molecules on antigen-presenting cells", "No MHC molecules (MHC-independent)", "Fc receptors"],
    answer: 1,
    explanation: "CD4+ T cells recognize peptide antigens (typically 13-25 amino acids from exogenous proteins) presented on MHC class II molecules. MHC-II is expressed primarily on professional antigen-presenting cells (dendritic cells, macrophages, B cells). The CD4 co-receptor binds the β2 domain of MHC-II, stabilizing the TCR-MHC-II interaction. T-cell activation requires two signals: Signal 1 (TCR-MHC-II/peptide) and Signal 2 (co-stimulation: CD28-B7). Without Signal 2, anergy results."
  },
  {
    id: 15,
    question: "Th1 cells are characterized by production of which signature cytokine?",
    options: ["IL-4", "IFN-γ", "IL-17", "IL-5"],
    answer: 1,
    explanation: "Th1 differentiation is driven by IL-12 (from DCs/macrophages) and IFN-γ, activating STAT4 and the master transcription factor T-bet. Th1 cells produce: IFN-γ (activates macrophages, promotes MHC expression, class switch to IgG1/IgG3), TNF-α, and IL-2. Th1 responses are critical for defense against intracellular pathogens (Mycobacterium, Leishmania, viruses) and delayed-type hypersensitivity. Excessive Th1 responses contribute to organ-specific autoimmune diseases."
  },
  {
    id: 16,
    question: "Th2 cells promote which type of immune response?",
    options: ["Cell-mediated immunity against intracellular pathogens", "Humoral immunity against helminths and allergic responses via IL-4, IL-5, IL-13", "Antifungal immunity", "Antiviral interferon responses"],
    answer: 1,
    explanation: "Th2 differentiation is driven by IL-4, activating STAT6 and master transcription factor GATA-3. Th2 cytokines: IL-4 (B-cell class switch to IgE, M2 macrophage polarization), IL-5 (eosinophil differentiation and activation), IL-13 (mucus production, smooth muscle contraction, goblet cell hyperplasia). Th2 responses are essential for anti-helminth immunity (IgE-mediated eosinophil and mast cell activation) but drive allergic diseases (asthma, atopic dermatitis, allergic rhinitis) when dysregulated."
  },
  {
    id: 17,
    question: "Th17 cells are important for defense against:",
    options: ["Intracellular viruses", "Extracellular bacteria and fungi, particularly at mucosal barriers", "Helminths", "Intracellular parasites"],
    answer: 1,
    explanation: "Th17 differentiation is driven by TGF-β + IL-6 (IL-21 for maintenance, IL-23 for stabilization), activating STAT3 and master transcription factor RORγt. Th17 cells produce: IL-17A/F (neutrophil recruitment via G-CSF, CXCL1/2 induction; antimicrobial peptide production), IL-22 (epithelial barrier integrity, antimicrobial peptides), and GM-CSF. Th17 responses are critical for mucosal defense against Candida and extracellular bacteria. Dysregulated Th17 responses contribute to autoimmune diseases (psoriasis, RA, MS, IBD)."
  },
  {
    id: 18,
    question: "Regulatory T cells (Tregs) expressing FOXP3 maintain immune tolerance through:",
    options: ["Promoting Th1 responses", "Suppressing effector T-cell responses via CTLA-4, IL-10, TGF-β, IL-35, and IL-2 consumption", "Activating complement", "Producing IFN-γ"],
    answer: 1,
    explanation: "Natural Tregs (nTregs) develop in the thymus (CD4+CD25+FOXP3+), while induced Tregs (iTregs) differentiate in the periphery. Treg suppressive mechanisms: (1) CTLA-4 — outcompetes CD28, removes B7 via transendocytosis, (2) inhibitory cytokines (IL-10, TGF-β, IL-35), (3) IL-2 consumption (high CD25/IL-2Rα expression), (4) granzyme/perforin-mediated killing of effector cells, (5) CD39/CD73 — generates immunosuppressive adenosine. FOXP3 mutations cause IPEX syndrome (immune dysregulation, polyendocrinopathy, enteropathy, X-linked)."
  },
  {
    id: 19,
    question: "CD8+ cytotoxic T lymphocytes (CTLs) kill target cells primarily through:",
    options: ["Antibody-dependent cellular cytotoxicity", "Perforin/granzyme pathway and Fas/FasL pathway", "Complement activation", "Phagocytosis"],
    answer: 1,
    explanation: "CTLs kill target cells via two main mechanisms: (1) Perforin/granzyme — perforin polymerizes to form pores in the target cell membrane; granzymes (serine proteases, especially granzyme B) enter through perforin pores and activate caspases (caspase-3, -7, -8, -10) and BID cleavage, triggering apoptosis. (2) Fas/FasL — FasL on CTLs binds Fas (CD95) on target cells, activating the extrinsic apoptotic pathway via FADD/caspase-8. The perforin/granzyme pathway is the dominant killing mechanism."
  },
  {
    id: 20,
    question: "T-cell exhaustion is characterized by:",
    options: ["Enhanced effector function", "Progressive loss of effector function, sustained expression of multiple inhibitory receptors (PD-1, LAG-3, TIM-3, TIGIT), and altered transcriptional program (TOX)", "Increased proliferative capacity", "Differentiation into memory cells"],
    answer: 1,
    explanation: "T-cell exhaustion occurs during chronic antigen stimulation (chronic viral infections, cancer). Exhausted T cells progressively lose cytokine production (IL-2 first, then TNF-α, then IFN-γ), cytotoxicity, and proliferative capacity. They express multiple co-inhibitory receptors (PD-1, LAG-3, TIM-3, TIGIT, CTLA-4) and the transcription factor TOX. Exhausted T cells are distinct from memory T cells and anergic T cells. Immune checkpoint blockade partially reverses exhaustion, restoring anti-tumor/antiviral function."
  },

  // ===== ADAPTIVE IMMUNITY — B CELLS & ANTIBODIES (Q21–Q30) =====
  {
    id: 21,
    question: "Immunoglobulin class switch recombination (CSR) allows B cells to:",
    options: ["Change antigen specificity", "Switch the antibody heavy chain constant region (e.g., IgM to IgG, IgA, or IgE) while maintaining antigen specificity", "Increase antibody affinity", "Rearrange light chain genes"],
    answer: 1,
    explanation: "CSR is a DNA recombination event that replaces the Cμ (IgM) constant region with downstream constant regions (Cγ, Cα, or Cε), changing the antibody isotype and effector function without altering the antigen-binding variable region. CSR requires: (1) activation-induced cytidine deaminase (AID), (2) germline transcription through switch regions, and (3) T-cell help (CD40L-CD40 interaction + cytokines). Cytokines direct switching: IL-4 → IgE/IgG4; IFN-γ → IgG1/IgG3; TGF-β → IgA."
  },
  {
    id: 22,
    question: "Somatic hypermutation (SHM) in B cells occurs in:",
    options: ["The bone marrow during B-cell development", "Germinal centers of secondary lymphoid organs during immune responses", "The thymus", "Circulating blood"],
    answer: 1,
    explanation: "SHM introduces point mutations (~10⁻³ per base pair per division) in the immunoglobulin variable region genes during germinal center reactions. AID (activation-induced cytidine deaminase) deaminates cytosine to uracil in the Ig V region, and error-prone repair introduces mutations. B cells with mutations that increase antigen affinity are positively selected by follicular dendritic cells (FDCs) displaying antigen and receive survival signals from T follicular helper (Tfh) cells. This process is called affinity maturation."
  },
  {
    id: 23,
    question: "IgA is the predominant immunoglobulin at mucosal surfaces because:",
    options: ["It activates complement most efficiently", "It is secreted as dimeric sIgA via polymeric immunoglobulin receptor (pIgR) and resists proteolytic degradation in the gut lumen", "It has the highest serum concentration", "It is the most effective opsonin"],
    answer: 1,
    explanation: "IgA is the most abundantly produced immunoglobulin (~3-5 g/day). Dimeric IgA (two monomers joined by J chain) is produced by mucosal plasma cells, binds the polymeric immunoglobulin receptor (pIgR) on the basolateral surface of epithelial cells, is transcytosed, and released as secretory IgA (sIgA) with secretory component (cleaved pIgR). sIgA provides: immune exclusion (preventing pathogen adherence), neutralization, and intracellular neutralization during transcytosis. Secretory component protects sIgA from proteolysis."
  },
  {
    id: 24,
    question: "IgE plays a central role in:",
    options: ["Complement activation", "Type I hypersensitivity reactions (allergies) and anti-helminth immunity", "Opsonization of bacteria", "Neonatal passive immunity"],
    answer: 1,
    explanation: "IgE has the lowest serum concentration but highest biologic potency. IgE binds FcεRI (high-affinity receptor) on mast cells and basophils. Upon allergen crosslinking of surface-bound IgE, mast cells degranulate, releasing histamine, leukotrienes, prostaglandins, and cytokines — causing immediate hypersensitivity (allergic rhinitis, asthma, anaphylaxis). In anti-helminth immunity, IgE-coated helminths are attacked by eosinophils via FcεRII (CD23). IL-4 and IL-13 from Th2 cells drive IgE class switching."
  },
  {
    id: 25,
    question: "IgG is the most abundant serum immunoglobulin and provides:",
    options: ["Mucosal immunity exclusively", "Opsonization, complement activation (classical pathway), ADCC, neonatal immunity (placental transfer via FcRn), and neutralization", "Only anti-parasitic immunity", "Only mast cell degranulation"],
    answer: 1,
    explanation: "IgG (~75% of serum Ig) has diverse effector functions: (1) opsonization via FcγR on phagocytes, (2) complement activation (IgG1, IgG3 most effective via C1q binding), (3) ADCC via FcγRIII (CD16) on NK cells, (4) neonatal passive immunity (IgG crosses placenta via FcRn), (5) neutralization of toxins and viruses. IgG has four subclasses (IgG1 > IgG2 > IgG3 > IgG4 by serum concentration), each with distinct effector capabilities. IgG has the longest half-life (~21 days) due to FcRn-mediated recycling."
  },
  {
    id: 26,
    question: "Germinal center reactions involve interactions between:",
    options: ["Only B cells", "B cells, T follicular helper (Tfh) cells, and follicular dendritic cells (FDCs) in secondary lymphoid organs", "Only T cells and macrophages", "Only NK cells and B cells"],
    answer: 1,
    explanation: "Germinal centers (GCs) form in B-cell follicles during T-dependent responses. GC architecture: (1) Dark zone — centroblasts undergo rapid proliferation and SHM, (2) Light zone — centrocytes test mutated BCRs against antigen on FDC surfaces (antigen selection). Tfh cells (BCL-6+, CXCR5+, PD-1+, ICOS+) provide CD40L and IL-21 to selected B cells, promoting survival and CSR. B cells with highest affinity are selected; those with low affinity or self-reactivity undergo apoptosis. GC output includes memory B cells and long-lived plasma cells."
  },
  {
    id: 27,
    question: "Antibody-dependent cellular cytotoxicity (ADCC) is mediated by:",
    options: ["Complement", "NK cells recognizing IgG-coated target cells via FcγRIII (CD16)", "B cells directly", "Mast cells via IgE"],
    answer: 1,
    explanation: "In ADCC, IgG antibodies bind antigens on target cell surfaces, and the Fc regions are recognized by FcγRIII (CD16) on NK cells. This triggers NK cell activation and release of perforin/granzymes, killing the antibody-coated target cell. ADCC is an important mechanism of action for therapeutic monoclonal antibodies: rituximab (anti-CD20 for lymphoma), trastuzumab (anti-HER2), and cetuximab (anti-EGFR). Macrophages and eosinophils can also mediate ADCC."
  },
  {
    id: 28,
    question: "B-1 cells differ from conventional B-2 cells in that they:",
    options: ["Only produce IgG", "Are a self-renewing population producing natural antibodies (IgM) that provide early defense against common pathogens without prior antigen exposure", "Require T-cell help for all responses", "Are found only in the thymus"],
    answer: 1,
    explanation: "B-1 cells (CD5+ B-1a, CD5- B-1b) are a distinct B-cell lineage found primarily in peritoneal and pleural cavities. They: (1) self-renew (not replenished from bone marrow), (2) spontaneously secrete natural IgM antibodies with broad specificity (recognizing common microbial antigens, oxidized lipids, apoptotic cell markers), (3) respond rapidly to T-independent antigens, and (4) provide innate-like early defense. Natural IgM also participates in complement activation and clearance of apoptotic cells (housekeeping function)."
  },
  {
    id: 29,
    question: "Marginal zone B cells are important for responses against:",
    options: ["Protein antigens requiring T-cell help", "Blood-borne encapsulated bacteria and polysaccharide antigens (T-independent responses)", "Intracellular viruses", "Parasites exclusively"],
    answer: 1,
    explanation: "Marginal zone (MZ) B cells are located at the border between red and white pulp in the spleen, positioned to rapidly capture blood-borne antigens. They respond quickly (within hours) to: (1) polysaccharide antigens (T-independent type 2), (2) blood-borne pathogens (especially encapsulated bacteria — S. pneumoniae, H. influenzae, N. meningitidis), generating rapid IgM responses without germinal center formation. Splenectomy or functional asplenia increases susceptibility to encapsulated bacteria due to loss of MZ B cells."
  },
  {
    id: 30,
    question: "The neonatal Fc receptor (FcRn) is important because it:",
    options: ["Only degrades IgG", "Transfers maternal IgG across the placenta and extends IgG half-life in adults by preventing lysosomal degradation", "Transports IgA across epithelia", "Activates complement"],
    answer: 1,
    explanation: "FcRn has dual functions: (1) In pregnancy, FcRn on syncytiotrophoblast cells transports maternal IgG across the placenta to the fetus, providing passive immunity during the first months of life. (2) In adults, FcRn in endothelial and epithelial cells rescues IgG (and albumin) from lysosomal degradation — IgG internalized by pinocytosis binds FcRn at acidic pH in endosomes and is recycled to the cell surface. This gives IgG its long half-life (~21 days). FcRn engineering is used to modify therapeutic antibody pharmacokinetics."
  },

  // ===== MHC & ANTIGEN PRESENTATION (Q31–Q40) =====
  {
    id: 31,
    question: "MHC class I molecules present peptides derived from:",
    options: ["Extracellular proteins taken up by endocytosis", "Intracellular (endogenous) proteins degraded by the proteasome", "Lipid antigens", "Polysaccharide antigens"],
    answer: 1,
    explanation: "MHC-I presentation pathway: (1) intracellular proteins (self-proteins, viral proteins, tumor antigens) are degraded by the proteasome (immunoproteasome during inflammation), (2) peptides (8-10 amino acids) are transported into the ER by TAP (transporter associated with antigen processing), (3) peptides are loaded onto MHC-I heavy chain/β2-microglobulin complexes in the ER (facilitated by tapasin, calreticulin, ERp57), (4) peptide-MHC-I complexes traffic to the cell surface for recognition by CD8+ T cells."
  },
  {
    id: 32,
    question: "MHC class II molecules present peptides derived from:",
    options: ["Intracellular proteins from the cytosol", "Exogenous proteins internalized and processed in endosomal/lysosomal compartments", "Only viral proteins", "Only self-proteins"],
    answer: 1,
    explanation: "MHC-II presentation pathway: (1) exogenous antigens are internalized by endocytosis, phagocytosis, or macropinocytosis, (2) proteins are degraded by acid proteases (cathepsins) in endosomes/lysosomes, (3) MHC-II αβ heterodimers are synthesized with invariant chain (Ii/CD74) blocking the peptide-binding groove, (4) Ii is progressively degraded leaving CLIP fragment, (5) HLA-DM catalyzes CLIP removal and peptide loading (13-25 amino acid peptides), (6) peptide-MHC-II complexes are expressed on the surface for recognition by CD4+ T cells."
  },
  {
    id: 33,
    question: "Cross-presentation is the process by which:",
    options: ["MHC-II presents endogenous peptides", "Dendritic cells present exogenous antigens on MHC class I to activate CD8+ T cells", "B cells present antigens to macrophages", "NK cells present antigens to T cells"],
    answer: 1,
    explanation: "Cross-presentation is a specialized function primarily of conventional dendritic cells (cDC1, XCR1+/BATF3-dependent) that loads exogenous antigens (from dead cells, immune complexes, or phagocytosed material) onto MHC class I molecules. This is critical for: (1) initiating CD8+ T-cell responses against viruses that don't directly infect DCs, (2) anti-tumor immunity (tumor antigens from dead tumor cells), and (3) cross-priming of CTL responses. Without cross-presentation, many viral and tumor antigens could not elicit CD8+ T-cell responses."
  },
  {
    id: 34,
    question: "HLA polymorphism is the highest in the human genome and is important because:",
    options: ["It reduces immune diversity", "It ensures that different individuals present different peptide repertoires, enabling population-level resistance to diverse pathogens", "It has no functional significance", "It only affects transplant rejection"],
    answer: 1,
    explanation: "HLA genes are the most polymorphic in the human genome (>30,000 alleles across all loci). Polymorphism is concentrated in the peptide-binding groove, determining which peptides each MHC allele can present. This diversity ensures that: (1) at the population level, most pathogens will be recognized by some individuals' HLA, (2) heterozygous individuals present more diverse peptides (heterozygote advantage), and (3) no pathogen can evade all HLA types simultaneously. HLA polymorphism also underlies transplant rejection and HLA-disease associations."
  },
  {
    id: 35,
    question: "HLA-B27 is strongly associated with:",
    options: ["Type 1 diabetes", "Ankylosing spondylitis (>90% of patients are HLA-B27+)", "Rheumatoid arthritis", "Systemic lupus erythematosus"],
    answer: 1,
    explanation: "HLA-B27 has one of the strongest HLA-disease associations (relative risk >90 for ankylosing spondylitis). ~90-95% of AS patients carry HLA-B27, vs. ~8% of the general population. Proposed mechanisms: (1) arthritogenic peptide hypothesis (HLA-B27 presents specific self-peptides to autoreactive CD8+ T cells), (2) HLA-B27 misfolding in the ER causing unfolded protein response and IL-23 production, (3) HLA-B27 free heavy chains forming homodimers recognized by innate immune receptors. HLA-B27 is also associated with reactive arthritis, psoriatic arthritis, and anterior uveitis."
  },
  {
    id: 36,
    question: "Beta-2 microglobulin (β2m) is a component of:",
    options: ["MHC class II molecules", "MHC class I molecules, required for proper folding and surface expression", "T-cell receptors", "Immunoglobulins"],
    answer: 1,
    explanation: "β2m is a non-polymorphic, non-membrane-spanning protein that associates non-covalently with the MHC-I heavy chain (α1, α2, α3 domains). β2m is essential for proper MHC-I folding, peptide loading, and surface expression. Loss of β2m (mutations in B2M gene) in tumor cells eliminates all MHC-I surface expression, preventing CD8+ T-cell recognition — a common immune evasion mechanism in cancer. Elevated serum β2m is a prognostic marker in multiple myeloma and lymphoma."
  },
  {
    id: 37,
    question: "Invariant chain (Ii/CD74) in MHC class II processing functions to:",
    options: ["Load peptides onto MHC-I", "Block the MHC-II peptide-binding groove during synthesis, prevent premature binding of endogenous peptides, and direct MHC-II to endosomal compartments", "Activate complement", "Transport MHC-II to the cell surface directly"],
    answer: 1,
    explanation: "Invariant chain (Ii) has multiple functions: (1) blocks the MHC-II peptide groove with its CLIP segment, preventing binding of ER-resident peptides (which would otherwise occupy MHC-II intended for exogenous peptides), (2) targets MHC-II from the ER to endosomal/lysosomal compartments (via dileucine and tyrosine sorting motifs), (3) promotes trimerization and proper folding of MHC-II. In endosomes, Ii is degraded by cathepsin S, leaving CLIP, which is exchanged for antigenic peptide by HLA-DM."
  },
  {
    id: 38,
    question: "Superantigens (e.g., staphylococcal enterotoxins, TSST-1) activate T cells by:",
    options: ["Binding within the peptide-binding groove of MHC", "Crosslinking MHC-II on APCs with TCR Vβ domains outside the peptide-binding groove, activating up to 20% of all T cells", "Only activating specific antigen-reactive T cells", "Inhibiting T-cell activation"],
    answer: 1,
    explanation: "Superantigens simultaneously bind MHC-II (outside the groove) on APCs and specific TCR Vβ chains on T cells, activating all T cells bearing those Vβ families — up to 5-20% of the T-cell repertoire (vs. 0.0001% in conventional antigen responses). This massive polyclonal T-cell activation causes: cytokine storm (TNF-α, IL-1β, IL-2, IFN-γ), toxic shock syndrome (TSST-1), staphylococcal food poisoning (enterotoxins), and potentially T-cell deletion/anergy (immune suppression after the acute phase)."
  },
  {
    id: 39,
    question: "CD1 molecules present which type of antigen?",
    options: ["Peptide antigens like MHC-I", "Lipid and glycolipid antigens to NKT cells and other T cells", "Nucleic acid antigens", "Carbohydrate antigens to B cells"],
    answer: 1,
    explanation: "CD1 molecules (CD1a-e) are MHC-I-like glycoproteins with a hydrophobic groove that binds lipid and glycolipid antigens (mycobacterial mycolic acids, lipoarabinomannan, sphingolipids, sulfatide). CD1d presents alpha-galactosylceramide (α-GalCer) to invariant NKT (iNKT) cells bearing a semi-invariant TCR (Vα24-Jα18/Vβ11 in humans). NKT cell activation produces rapid, large amounts of IFN-γ and IL-4, bridging innate and adaptive immunity."
  },
  {
    id: 40,
    question: "TAP (transporter associated with antigen processing) deficiency leads to:",
    options: ["Enhanced MHC-I presentation", "Bare lymphocyte syndrome type I — markedly reduced MHC-I surface expression and impaired CD8+ T-cell responses", "Enhanced MHC-II presentation", "Increased IgE production"],
    answer: 1,
    explanation: "TAP (TAP1/TAP2 heterodimer) is an ATP-binding cassette transporter that translocates proteasome-generated peptides from the cytosol into the ER for MHC-I loading. TAP deficiency prevents peptide loading onto MHC-I, causing: (1) markedly reduced MHC-I surface expression (empty MHC-I is unstable), (2) impaired CD8+ T-cell development (reduced positive selection), (3) susceptibility to viral infections, and (4) paradoxically, bronchiectasis and granulomatous skin lesions (not classic SCID). TAP deficiency is also a tumor immune evasion mechanism."
  },

  // ===== CYTOKINES & SIGNALING (Q41–Q50) =====
  {
    id: 41,
    question: "IL-12 is primarily produced by dendritic cells and macrophages and drives:",
    options: ["Th2 differentiation", "Th1 differentiation and IFN-γ production by T cells and NK cells", "Th17 differentiation", "B-cell class switching to IgE"],
    answer: 1,
    explanation: "IL-12 (heterodimer of p35 and p40 subunits) is the master Th1-polarizing cytokine. Produced by activated DCs and macrophages in response to intracellular pathogens, IL-12: (1) drives Th1 differentiation (via STAT4 and T-bet), (2) stimulates IFN-γ production by T cells and NK cells (positive feedback loop), (3) enhances NK cell and CTL cytotoxicity, and (4) promotes cell-mediated immunity. IL-12 deficiency increases susceptibility to intracellular pathogens (mycobacteria, Salmonella). IL-12/IFN-γ axis defects cause Mendelian susceptibility to mycobacterial disease (MSMD)."
  },
  {
    id: 42,
    question: "TNF-α is a pleiotropic cytokine that can cause all of the following EXCEPT:",
    options: ["Fever (acting as an endogenous pyrogen)", "Activation of vascular endothelium and increased permeability", "Septic shock at high systemic concentrations", "Direct promotion of Th2 differentiation"],
    answer: 3,
    explanation: "TNF-α effects: local — (1) activates vascular endothelium (E-selectin, ICAM-1, VCAM-1 for leukocyte adhesion), (2) increases vascular permeability, (3) activates neutrophils, macrophages, and fibroblasts. Systemic — (4) fever (hypothalamus, endogenous pyrogen), (5) acute phase protein synthesis (liver), (6) at very high levels: septic shock (vasodilation, increased permeability, DIC, multi-organ failure). TNF-α does not directly drive Th2 differentiation — that is IL-4's role."
  },
  {
    id: 43,
    question: "IL-10 is an important immunosuppressive cytokine that:",
    options: ["Activates macrophages and promotes inflammation", "Inhibits macrophage activation, suppresses pro-inflammatory cytokine production, and limits tissue damage during immune responses", "Promotes Th17 differentiation", "Enhances NK cell cytotoxicity"],
    answer: 1,
    explanation: "IL-10 is produced by Tregs, Th2 cells, macrophages, DCs, and B cells. IL-10 suppresses: (1) macrophage activation (reduced TNF-α, IL-1β, IL-6, IL-12 production), (2) DC maturation and antigen presentation (reduced MHC-II, B7), (3) Th1 and Th17 responses, and (4) excessive inflammation (preventing immunopathology). IL-10 signals through STAT3. IL-10 deficiency in mice causes spontaneous colitis, highlighting its role in mucosal immune homeostasis. IL-10 is exploited by some tumors and chronic infections for immune evasion."
  },
  {
    id: 44,
    question: "The JAK-STAT signaling pathway is activated by:",
    options: ["Antigen binding to TCR", "Cytokine receptor engagement, with JAK kinases phosphorylating STAT transcription factors", "Complement receptor binding", "Toll-like receptor signaling exclusively"],
    answer: 1,
    explanation: "Most cytokine receptors (type I and type II) signal through the JAK-STAT pathway: (1) cytokine binding induces receptor dimerization, (2) associated JAK kinases (JAK1, JAK2, JAK3, TYK2) are activated and phosphorylate receptor tyrosines, (3) STAT proteins dock at phosphotyrosines, are phosphorylated by JAKs, (4) phospho-STATs dimerize and translocate to the nucleus to activate target gene transcription. Different cytokines activate different JAK-STAT combinations (e.g., IFN-γ: JAK1/JAK2→STAT1; IL-6: JAK1/JAK2/TYK2→STAT3). JAK inhibitors (tofacitinib, ruxolitinib) are used in autoimmune diseases and myeloproliferative neoplasms."
  },
  {
    id: 45,
    question: "IL-6 is a key pro-inflammatory cytokine that:",
    options: ["Only suppresses immune responses", "Drives acute phase response, Th17 differentiation, and is central to cytokine storm in inflammatory conditions", "Only promotes B-cell class switching to IgA", "Inhibits fever"],
    answer: 1,
    explanation: "IL-6 has diverse functions: (1) acute phase response (stimulates hepatic CRP, fibrinogen, hepcidin production), (2) drives Th17 differentiation (with TGF-β), (3) promotes B-cell differentiation to plasma cells, (4) fever (endogenous pyrogen), (5) hematopoiesis stimulation. IL-6 signals through classical (membrane IL-6R) and trans-signaling (soluble IL-6R). Dysregulated IL-6 drives: cytokine release syndrome (CRS), Castleman disease, and chronic inflammation. Tocilizumab (anti-IL-6R) treats RA, CRS, and COVID-19-associated cytokine storm."
  },
  {
    id: 46,
    question: "Chemokines are cytokines that primarily function to:",
    options: ["Kill pathogens directly", "Direct migration (chemotaxis) of immune cells along concentration gradients to sites of infection or inflammation", "Neutralize toxins", "Present antigens"],
    answer: 1,
    explanation: "Chemokines are small (8-10 kDa) chemotactic cytokines classified into four families based on cysteine motif: CC (CCL), CXC (CXCL), C (XCL), and CX3C (CX3CL). Chemokines guide: (1) neutrophil recruitment (CXCL8/IL-8 via CXCR1/2), (2) monocyte recruitment (CCL2/MCP-1 via CCR2), (3) lymphocyte trafficking (CCL19/21 to lymph nodes via CCR7, CXCL13 to follicles via CXCR5), (4) DC migration to lymph nodes (CCR7), and (5) Th1 recruitment to inflammation sites (CXCL9/10/11 via CXCR3). Chemokines signal through G-protein coupled receptors."
  },
  {
    id: 47,
    question: "IL-2 was originally called T-cell growth factor because it:",
    options: ["Inhibits T-cell proliferation", "Promotes proliferation and survival of activated T cells, is essential for Treg homeostasis, and supports NK cell activity", "Only affects B cells", "Suppresses immune responses exclusively"],
    answer: 1,
    explanation: "IL-2 is produced primarily by activated CD4+ T cells. Functions: (1) T-cell proliferation (autocrine/paracrine growth factor for activated T cells), (2) CD8+ T-cell differentiation into effector CTLs, (3) Treg survival and homeostasis (Tregs constitutively express high-affinity IL-2Rα/CD25 but cannot produce IL-2 themselves), (4) NK cell proliferation and activation, (5) AICD (activation-induced cell death) at high concentrations. The dual role — promoting effector responses AND Treg homeostasis — complicates therapeutic use. Low-dose IL-2 preferentially expands Tregs (used in autoimmune conditions)."
  },
  {
    id: 48,
    question: "TGF-β has which dual role in immunity?",
    options: ["Only pro-inflammatory", "Immunosuppressive (inhibiting effector T cells) but also promoting Th17 and Treg differentiation depending on cytokine context", "Only promoting B-cell responses", "No role in immunity"],
    answer: 1,
    explanation: "TGF-β is a pleiotropic cytokine with context-dependent immune effects: (1) Immunosuppressive — inhibits macrophage activation, T-cell proliferation, and effector function; maintains mucosal tolerance, (2) Treg induction — TGF-β + IL-2 induces FOXP3 and peripheral Treg differentiation, (3) Th17 promotion — TGF-β + IL-6 drives Th17 differentiation (via RORγt), (4) IgA class switching — promotes mucosal IgA production. TGF-β also regulates tissue repair and fibrosis. TGF-β signaling through SMAD2/3/4 is frequently dysregulated in cancer."
  },
  {
    id: 49,
    question: "Interferons are classified into three types. Type II interferon is:",
    options: ["IFN-α", "IFN-γ (the only type II interferon)", "IFN-β", "IFN-λ"],
    answer: 1,
    explanation: "Interferon classification: Type I — IFN-α (13 subtypes), IFN-β, IFN-ε, IFN-κ, IFN-ω (antiviral, signal through IFNAR1/2); Type II — IFN-γ (the sole member, signal through IFNGR1/2) — produced by Th1 cells, CTLs, NK cells; activates macrophages, promotes Th1, upregulates MHC-I/II; Type III — IFN-λ1-4 (IL-28A/B, IL-29) (antiviral at mucosal surfaces, signal through IFNLR1/IL-10R2). IFN-γ is critical for defense against intracellular pathogens; deficiency causes MSMD."
  },
  {
    id: 50,
    question: "NF-κB is a transcription factor central to immune responses that is activated by:",
    options: ["Only cortisol", "TLR signaling, TNF receptor signaling, TCR/BCR signaling, and IL-1 receptor signaling", "Only metabolic stress", "Only UV radiation"],
    answer: 1,
    explanation: "NF-κB (nuclear factor kappa-light-chain-enhancer of activated B cells) is a master regulator of inflammation and immunity. In resting cells, NF-κB is sequestered in the cytoplasm by IκB inhibitors. Upon stimulation (TLRs, TNFR, IL-1R, TCR, BCR), the IKK complex phosphorylates IκB, targeting it for ubiquitin-proteasome degradation. Free NF-κB translocates to the nucleus, activating genes for: pro-inflammatory cytokines (TNF-α, IL-1β, IL-6), chemokines, adhesion molecules, anti-apoptotic proteins, and MHC. Constitutive NF-κB activation occurs in many cancers and inflammatory diseases."
  }
]

export default questions
