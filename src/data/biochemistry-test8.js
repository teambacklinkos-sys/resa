const questions = [
  {
    id: 1,
    question: "In the chymotrypsin catalytic mechanism, the serine protease triad (Ser195-His57-Asp102) functions as a charge relay system. What is the role of Asp102 in this triad?",
    options: [
      "Asp102 acts as the nucleophile that directly attacks the peptide bond",
      "Asp102 stabilizes the positive charge on His57 by hydrogen bonding, allowing His57 to abstract a proton from Ser195, making Ser195 a better nucleophile",
      "Asp102 provides a proton to stabilize the tetrahedral intermediate",
      "Asp102 binds the substrate in the S1 specificity pocket"
    ],
    answer: 1,
    explanation: "In the serine protease catalytic triad, Asp102 hydrogen bonds with His57, stabilizing the partial positive charge that develops on His57 as it accepts a proton from Ser195. This increases the nucleophilicity of Ser195, which then attacks the substrate carbonyl carbon. Asp102 does not directly participate in catalysis but electrostatically positions and activates the His57 general base."
  },
  {
    id: 2,
    question: "A new enzyme is characterized with Km = 0.5 mM, Vmax = 100 nmol/min, and kcat = 500 s⁻¹. A competitive inhibitor is added, and the new apparent Km becomes 2.0 mM while Vmax remains unchanged. What is the alpha (α) value, and what does it indicate about inhibitor binding?",
    options: [
      "α = 0.25; the inhibitor binds to the ES complex with 4-fold higher affinity than the free enzyme",
      "α = 4.0; the inhibitor binds to the free enzyme (E) with a Ki such that [I]/Ki = 3, indicating significant enzyme occupancy by inhibitor",
      "α = 2.0; the inhibitor increases the Km without changing Vmax, indicating mixed inhibition",
      "α = 4.0; the inhibitor is uncompetitive because it does not change Vmax"
    ],
    answer: 1,
    explanation: "In competitive inhibition, apparent Km = alpha × Km, where alpha = 1 + [I]/Ki. With Km = 0.5 mM and apparent Km = 2.0 mM, alpha = 2.0/0.5 = 4.0. Therefore [I]/Ki = 3, meaning the inhibitor concentration is 3-fold higher than its Ki. Vmax is unchanged because with sufficient substrate, all inhibitor can be displaced from the active site."
  },
  {
    id: 3,
    question: "Enzyme catalysis achieves rate enhancement through transition state stabilization. Which of the following mechanisms does NOT contribute to enzymatic transition state stabilization?",
    options: [
      "Proximity and orientation effects that increase effective concentration of reacting groups",
      "Electrostatic stabilization of developing charges in the transition state by active site residues",
      "Increasing the ground state energy of the substrate by strain or distortion",
      "Providing an alternative reaction pathway with a higher activation energy"
    ],
    answer: 3,
    explanation: "Enzymes accelerate reactions by providing an alternative pathway with a LOWER activation energy, not higher. Mechanisms of enzymatic catalysis include: proximity/orientation effects, covalent catalysis, acid-base catalysis, metal ion catalysis, electrostatic stabilization, and substrate strain/distortion (destabilizing the ground state, which is equivalent to stabilizing the transition state)."
  },
  {
    id: 4,
    question: "In a Lineweaver-Burk (double-reciprocal) plot, an uncompetitive inhibitor produces which characteristic pattern?",
    options: [
      "Lines intersecting on the y-axis (same Vmax, increased Km)",
      "Lines intersecting on the x-axis (same Km, decreased Vmax)",
      "Parallel lines with the same slope (both Km and Vmax decrease proportionally)",
      "Lines intersecting to the left of the y-axis on the x-axis (decreased Km, decreased Vmax)"
    ],
    answer: 2,
    explanation: "An uncompetitive inhibitor binds only to the ES complex (not free enzyme), reducing both apparent Vmax and apparent Km by the same factor (alpha'). On a Lineweaver-Burk plot, this produces parallel lines (same slope = Km/Vmax), shifted upward compared to the uninhibited line. This distinguishes uncompetitive inhibition from competitive (intersecting y-axis) and mixed inhibition (intersecting to the left)."
  },
  {
    id: 5,
    question: "Which kinetic parameter best reflects the catalytic efficiency of an enzyme and why?",
    options: [
      "Vmax, because it represents the maximum speed of the reaction",
      "Km, because it reflects the substrate concentration needed for half-maximal activity",
      "kcat/Km (specificity constant), because it measures catalytic efficiency under substrate-limiting conditions and allows comparison of different substrates",
      "kcat alone, because it represents the number of substrate molecules converted per enzyme per second"
    ],
    answer: 2,
    explanation: "kcat/Km is the specificity constant and is the best measure of catalytic efficiency. Under conditions where [S] << Km (the physiologically relevant condition for many enzymes), the reaction rate = (kcat/Km)[E][S], making kcat/Km a second-order rate constant for enzyme-substrate encounter. The theoretical maximum is the diffusion limit (~10^8-10^9 M⁻¹s⁻¹), achieved by 'kinetically perfect' enzymes like catalase and acetylcholinesterase."
  },
  {
    id: 6,
    question: "Covalent catalysis involves the formation of a transient covalent intermediate between the enzyme and substrate. Which enzyme-catalysis pair is an example of covalent catalysis?",
    options: [
      "Carbonic anhydrase using Zn²⁺ to activate water",
      "Chymotrypsin forming an acyl-enzyme intermediate with the substrate",
      "Lysozyme using acid-base catalysis to cleave glycosidic bonds",
      "Triose phosphate isomerase using an enediol intermediate"
    ],
    answer: 1,
    explanation: "Chymotrypsin forms a covalent acyl-enzyme intermediate: Ser195 attacks the peptide carbonyl, forming a tetrahedral intermediate that collapses to an acyl-enzyme ester. This is then hydrolyzed by water in the deacylation step. Carbonic anhydrase is a metal ion catalyst; the lysozyme reaction involves oxocarbenium stabilization; triose phosphate isomerase uses general acid-base catalysis."
  },
  {
    id: 7,
    question: "In proteomics, the technique of SILAC (Stable Isotope Labeling with Amino acids in Cell culture) is used for quantitative comparisons. What is the fundamental principle of SILAC?",
    options: [
      "Proteins are chemically labeled with isotope-tagged reagents after cell lysis and trypsin digestion",
      "Cells are grown in media containing heavy isotope-labeled amino acids (e.g., ¹³C, ¹⁵N), which are incorporated metabolically; mixed samples are analyzed by mass spectrometry, comparing heavy/light peptide ratios",
      "RNA is isotopically labeled and reverse-transcribed, with protein abundance inferred from mRNA levels",
      "Proteins are separated by 2D-PAGE and spots are quantified by Coomassie staining intensity"
    ],
    answer: 1,
    explanation: "In SILAC, one cell population is grown in 'heavy' medium (with isotopically labeled lysine/arginine, e.g., ¹³C₆-lysine) and another in 'light' medium. After mixing and processing, peptides from each condition differ in mass by a fixed number of Daltons, allowing their relative abundance to be quantified by MS. This provides accurate, multiplexed quantitative proteomics."
  },
  {
    id: 8,
    question: "Two-hybrid systems (yeast two-hybrid) are used to detect protein-protein interactions. What is the key principle of this assay?",
    options: [
      "A reporter gene is activated only when two fusion proteins (each bearing half of a transcription factor) interact, bringing the DNA-binding domain and activation domain together in the nucleus",
      "Two proteins are co-immunoprecipitated and detected by Western blot",
      "Fluorescently labeled proteins are co-expressed, and interaction is detected by co-localization in fluorescence microscopy",
      "Two proteins are mixed in vitro and binding affinity is measured by surface plasmon resonance"
    ],
    answer: 0,
    explanation: "In the yeast two-hybrid system, protein X is fused to a DNA-binding domain (DBD) and protein Y is fused to a transcriptional activation domain (AD). If X and Y interact, the DBD and AD are brought into proximity, reconstituting a functional transcription factor that drives expression of a reporter gene (e.g., HIS3, lacZ). Growth on selective media or reporter activity confirms interaction."
  },
  {
    id: 9,
    question: "In structural biology, X-ray crystallography and cryo-EM are complementary techniques. Which statement correctly describes a key advantage of cryo-EM over X-ray crystallography?",
    options: [
      "Cryo-EM always provides higher resolution structures than X-ray crystallography",
      "Cryo-EM does not require protein crystallization and can visualize flexible proteins, membrane proteins, and large macromolecular complexes in near-native states",
      "Cryo-EM can determine structures of proteins smaller than 10 kDa more readily",
      "Cryo-EM uses X-rays, providing direct phase information without the phase problem"
    ],
    answer: 1,
    explanation: "The major advantage of cryo-EM is that it eliminates the requirement for protein crystallization (which is often impossible for flexible proteins, large complexes, and membrane proteins). Proteins are vitrified in a thin film of amorphous ice, preserving near-native conformations and allowing visualization of multiple conformational states simultaneously. Recent advances have achieved sub-2 Å resolution for some proteins."
  },
  {
    id: 10,
    question: "Co-immunoprecipitation (Co-IP) followed by mass spectrometry (Co-IP/MS) is used to identify protein-protein interactions. What is the critical control experiment needed to distinguish specific from non-specific interactions?",
    options: [
      "Performing the Co-IP at a higher salt concentration to elute weakly bound proteins",
      "Including an IgG isotype control (using an antibody of the same isotype as the bait antibody but with no specificity for the bait protein) to identify non-specifically pulled-down proteins",
      "Performing Western blot rather than mass spectrometry to increase sensitivity",
      "Adding a protease inhibitor cocktail to prevent protein degradation during Co-IP"
    ],
    answer: 1,
    explanation: "The isotype control Co-IP identifies proteins that non-specifically bind to the antibody, the Protein A/G beads, or the immunoprecipitation matrix. Proteins found in both the experimental and control Co-IP are considered non-specific binders and are subtracted from the final interaction list. SAINT (Significance Analysis of INTeractome) scoring is used computationally to distinguish true interactors."
  },
  {
    id: 11,
    question: "N-linked glycosylation of proteins in the secretory pathway follows a defined sequence. Which statement about N-linked glycosylation is correct?",
    options: [
      "N-linked glycosylation occurs in the cytoplasm co-translationally at Asn-X-Ser/Thr sequons where X is proline",
      "The core oligosaccharide (Glc₃Man₉GlcNAc₂) is pre-assembled on dolichol phosphate and transferred en bloc to Asn in Asn-X-Ser/Thr sequons (X ≠ Pro) by oligosaccharyltransferase (OST)",
      "N-glycans are added to the hydroxyl groups of serine and threonine residues in the Golgi apparatus",
      "N-linked glycosylation is exclusively found on extracellular domains of plasma membrane proteins"
    ],
    answer: 1,
    explanation: "N-linked glycosylation is initiated in the ER: the core oligosaccharide (Glc₃Man₉GlcNAc₂) is assembled on the lipid carrier dolichol-PP and transferred en bloc to asparagine residues within Asn-X-Ser/Thr sequons (where X cannot be proline) by oligosaccharyltransferase. Sequential trimming and addition of sugars then occurs in the ER and Golgi."
  },
  {
    id: 12,
    question: "Calreticulin and calnexin function as molecular chaperones in the ER lumen. How do they recognize misfolded or incompletely folded glycoproteins?",
    options: [
      "They bind to exposed hydrophobic patches on misfolded proteins via their peptide-binding domains",
      "They bind to monoglucosylated N-glycans (Glc₁Man₇-₉GlcNAc₂) on glycoproteins; UGGT re-glucosylates incompletely folded proteins to retain them in the calnexin/calreticulin cycle",
      "They recognize specific amino acid sequences (KDEL-like retention signals) on misfolded proteins",
      "They bind to proteins with unpaired cysteine residues via disulfide bonds, retaining them in the ER"
    ],
    answer: 1,
    explanation: "Calnexin (membrane-bound) and calreticulin (soluble) are lectins that bind to monoglucosylated N-glycans. After initial trimming of glucose residues, UGGT (UDP-Glc:glycoprotein glucosyltransferase) re-adds a glucose to incompletely folded glycoproteins, allowing re-binding to calnexin/calreticulin. Only properly folded proteins that are no longer re-glucosylated exit this quality control cycle."
  },
  {
    id: 13,
    question: "O-linked glycosylation differs fundamentally from N-linked glycosylation. Which statement about O-GlcNAc modification is correct?",
    options: [
      "O-GlcNAc is added to serine/threonine residues in the ER lumen by O-GlcNAc transferase",
      "O-GlcNAc modification occurs in the nucleus and cytoplasm on serine/threonine residues by OGT (O-GlcNAc transferase), is reversible (removed by OGA), and serves as a nutrient/stress sensor analogous to phosphorylation",
      "O-GlcNAc modification is exclusively found on secreted and extracellular proteins",
      "O-GlcNAc is always found in complex with N-linked glycans at the same protein site"
    ],
    answer: 1,
    explanation: "O-GlcNAc is unique among glycosylation events: it occurs in the nucleus and cytoplasm (not the secretory pathway), is dynamically added by OGT and removed by OGA (analogous to phosphorylation/dephosphorylation), and is regulated by the hexosamine biosynthetic pathway (sensitive to glucose and glutamine levels). It competes with phosphorylation on many transcription factors and signaling proteins."
  },
  {
    id: 14,
    question: "Glycosphingolipids are classified into several series (ganglio, lacto, globo). Gangliosides carry sialic acid residues. Which statement about ganglioside GM1 is correct regarding its structure and biological role?",
    options: [
      "GM1 contains two sialic acid residues on the terminal galactose and functions as a receptor for acetylcholine",
      "GM1 contains one sialic acid residue on the inner galactose (Gal-β1,3-GalNAc) and is the receptor for cholera toxin B subunit; it is enriched in lipid rafts of neuronal membranes",
      "GM1 is exclusively found on red blood cell surfaces and determines ABO blood group specificity",
      "GM1 is a neutral glycosphingolipid that lacks sialic acid by definition"
    ],
    answer: 1,
    explanation: "GM1 (Monosialotetraosylganglioside) has the structure Gal-β1,3-GalNAc-β1,4(NeuAc-α2,3)Gal-β1,4-Glc-Cer. It contains one sialic acid on the inner galactose and is the high-affinity receptor for cholera toxin B subunit. GM1 is highly enriched in neuronal plasma membranes and lipid rafts, playing roles in signal transduction and nerve growth factor signaling."
  },
  {
    id: 15,
    question: "Lectins are carbohydrate-binding proteins. Which of the following best describes the molecular basis of selectin-mediated leukocyte rolling on inflamed endothelium?",
    options: [
      "E-selectin on endothelium binds to sialyl-Lewisx (sLeX) glycan structures on leukocyte surface glycoproteins (PSGL-1), mediating transient adhesion that allows rolling under blood flow shear stress",
      "E-selectin binds to the protein backbone of ICAM-1 on leukocytes via its lectin domain",
      "L-selectin on endothelium binds to galactose residues on leukocyte glycolipids",
      "Selectins form permanent adhesions that arrest leukocytes at sites of inflammation"
    ],
    answer: 0,
    explanation: "E-selectin (on activated endothelium) and P-selectin contain C-type lectin domains that bind to sialyl-Lewisx (NeuAc-α2,3-Gal-β1,4(Fuc-α1,3)GlcNAc) tetrasaccharide structures on leukocyte surface glycoproteins, particularly PSGL-1. These are Ca²⁺-dependent, low-affinity interactions that have fast on/off rates enabling leukocyte rolling, which is the first step of the leukocyte adhesion cascade leading to transmigration."
  },
  {
    id: 16,
    question: "Proteoglycans consist of a core protein with covalently attached glycosaminoglycan (GAG) chains. Which feature distinguishes GAGs from other glycan chains?",
    options: [
      "GAGs are branched polysaccharides containing both N-acetylhexosamines and uronic acids",
      "GAGs are unbranched, highly sulfated, polydisperse polysaccharides composed of repeating disaccharide units (typically uronic acid + hexosamine), which are extensively negatively charged",
      "GAGs are attached exclusively to serine residues via N-linked glycosylation in the ER",
      "GAGs do not contain sialic acid residues, which distinguishes them from glycoproteins"
    ],
    answer: 1,
    explanation: "Glycosaminoglycans are unbranched polysaccharides composed of repeating disaccharide units (e.g., glucuronate/iduronate + GlcNAc/GalNAc) that are extensively sulfated. The high sulfation and uronic acid carboxylates create extreme negative charge density, enabling GAGs to bind large amounts of water and cations, giving cartilage its compressive strength. They are O-linked to serine in most cases (not N-linked)."
  },
  {
    id: 17,
    question: "Heparan sulfate proteoglycans (HSPGs) on the cell surface function as co-receptors for numerous growth factors. What is the molecular basis of heparan sulfate interaction with FGF and FGFR?",
    options: [
      "Heparan sulfate binds directly to the FGF receptor kinase domain, activating it allosterically",
      "Heparan sulfate acts as a scaffold that facilitates FGF dimerization and promotes productive FGF-FGFR interaction, forming a ternary complex required for efficient receptor activation",
      "Heparan sulfate proteoglycans inhibit FGF signaling by sequestering FGF away from its receptor",
      "Heparan sulfate interacts only with the extracellular domain of FGF and has no role in receptor binding"
    ],
    answer: 1,
    explanation: "Heparan sulfate chains on cell surface proteoglycans (syndecans, glypicans) bind FGF with low affinity and form a ternary complex FGF:HS:FGFR (2:2:2 for FGF2). Heparan sulfate stabilizes the FGF-FGFR interaction, promotes receptor dimerization, and is required for efficient signal transduction. This is a classic example of glycosaminoglycan function as a co-receptor."
  },
  {
    id: 18,
    question: "The extracellular matrix (ECM) component fibronectin contains multiple functional domains. Which domain is responsible for integrin binding, and what is the minimal peptide sequence required?",
    options: [
      "The heparin-binding domain, recognized by the sequence FHSRN",
      "The central cell-binding domain, containing the RGD (Arg-Gly-Asp) sequence in the tenth type III repeat, which binds alpha5beta1 and other integrins",
      "The collagen-binding domain, which contains GRGDS sequences",
      "The fibrin-binding domain at the N-terminus, containing LDV sequences for integrin binding"
    ],
    answer: 1,
    explanation: "Fibronectin's cell-binding domain contains the RGD tripeptide sequence in the tenth type III repeat. This minimal sequence is sufficient for integrin binding — alpha5beta1 integrin binds the RGD motif in conjunction with a synergy site (PHSRN) in the ninth type III repeat for high-affinity binding. RGD is the most widely recognized integrin-binding motif in the ECM."
  },
  {
    id: 19,
    question: "Collagen biosynthesis involves multiple post-translational modifications. Which sequence of events correctly describes collagen processing?",
    options: [
      "Triple helix formation (in cytoplasm) → hydroxylation of Pro and Lys (in ER) → glycosylation → secretion → procollagen cleavage → fibril assembly",
      "Translation of preprocollagen → signal peptide cleavage → hydroxylation of Pro and Lys (requires vitamin C, in ER) → glycosylation of hydroxylysine → triple helix formation → secretion → N- and C-propeptide cleavage → fibril assembly → lysyl oxidase-mediated cross-linking",
      "Translation → immediate triple helix formation in the cytoplasm → glycosylation in the Golgi → secretion as mature collagen",
      "Translation → secretion → hydroxylation by extracellular prolyl hydroxylases → fibril assembly"
    ],
    answer: 1,
    explanation: "Collagen biosynthesis is complex: after translation of preprocollagen and signal peptide cleavage in the ER, prolyl and lysyl hydroxylases (requiring vitamin C/ascorbate as cofactor) hydroxylate specific Pro and Lys residues. Hydroxylysines are then glycosylated. Three procollagen chains assemble into the triple helix. Procollagen is secreted, propeptides are cleaved by specific proteases, and extracellular lysyl oxidase cross-links fibrils."
  },
  {
    id: 20,
    question: "Matrix metalloproteinases (MMPs) are zinc-dependent endopeptidases critical for ECM remodeling. Which regulatory mechanism prevents uncontrolled ECM degradation?",
    options: [
      "MMPs are constitutively secreted in active form but rapidly degraded by serum albumin",
      "MMPs are secreted as inactive zymogens (pro-MMPs), activated extracellularly; activity is regulated by TIMPs (tissue inhibitors of metalloproteinases) that form tight 1:1 non-covalent inhibitory complexes",
      "MMPs are exclusively intracellular enzymes that degrade collagen only during autophagy",
      "MMP activity is regulated exclusively at the transcriptional level by cytokines"
    ],
    answer: 1,
    explanation: "MMPs are secreted as inactive zymogens with a prodomain cysteine coordinating the catalytic zinc, preventing activity (cysteine switch mechanism). Extracellular activation occurs by protease cleavage or conformational disruption. TIMPs (TIMP-1 to -4) are endogenous inhibitors that bind the active MMP site with picomolar affinity. The balance between MMP and TIMP activity controls ECM homeostasis; imbalance contributes to cancer invasion and fibrosis."
  },
  {
    id: 21,
    question: "Integrins are alpha-beta heterodimers that mediate bidirectional signaling across the plasma membrane. What is meant by 'inside-out' integrin activation?",
    options: [
      "Extracellular ECM ligand binding causes conformational change that transmits signal into the cell",
      "Intracellular signals (e.g., talin binding to the beta-integrin cytoplasmic tail) cause conformational changes that propagate to the extracellular domain, converting integrin from low-affinity to high-affinity state for ECM ligands",
      "Integrin alpha and beta subunits exchange positions during cell migration, reversing their orientation",
      "Integrin internalization and recycling to the leading edge of migrating cells"
    ],
    answer: 1,
    explanation: "Inside-out activation describes how intracellular signals (e.g., from chemokine receptors activating talin via RIAM) cause talin to bind the beta-integrin cytoplasmic tail. Talin binding disrupts the inhibitory alpha-beta tail clasp, inducing conformational extension of the integrin ectodomain from bent/low-affinity to extended/high-affinity conformation. This allows leukocytes to rapidly increase adhesion in response to chemokines."
  },
  {
    id: 22,
    question: "Isothermal titration calorimetry (ITC) is used to characterize protein-protein and protein-ligand interactions. What thermodynamic parameters can be directly determined from a single ITC experiment?",
    options: [
      "Only the dissociation constant (Kd)",
      "The stoichiometry (n), binding enthalpy (ΔH), and dissociation constant (Kd); ΔG and ΔS can then be calculated",
      "The molecular weight of the protein-ligand complex",
      "The three-dimensional structure of the binding interface"
    ],
    answer: 1,
    explanation: "A single ITC experiment directly measures the heat released or absorbed per injection (ΔH), the binding stoichiometry (n) from the molar ratio at the equivalence point, and the Kd from the shape of the binding isotherm. From Kd, ΔG = RT ln(Kd) is calculated, and ΔS is derived from ΔG = ΔH - TΔS. ITC is the only technique that provides complete thermodynamic characterization in a single experiment."
  },
  {
    id: 23,
    question: "In proteomics, tandem mass spectrometry (MS/MS) is used for protein identification. What is the principle of sequence determination from MS/MS fragment ions?",
    options: [
      "Intact proteins are ionized and their molecular weight uniquely identifies the protein sequence",
      "Peptides are fragmented along the peptide backbone; b-ions contain the N-terminus and y-ions contain the C-terminus. The mass difference between consecutive b-ions (or y-ions) corresponds to the mass of a single amino acid residue",
      "Protein sequences are determined by comparing the peptide's m/z ratio to a library of known protein masses",
      "MS/MS measures the charge state of each amino acid and assigns sequence based on amino acid charge"
    ],
    answer: 1,
    explanation: "In tandem MS, a selected peptide precursor ion is fragmented (typically by CID, HCD, or ETD). Fragmentation along peptide bonds produces b-ions (N-terminal fragments) and y-ions (C-terminal fragments). The mass difference between consecutive ions in a series equals the residue mass of the intervening amino acid, allowing de novo sequencing or database searching (Mascot, Sequest) to identify the peptide and parent protein."
  },
  {
    id: 24,
    question: "Enzyme allostery can be described by two structural models: the MWC (concerted) model and the KNF (sequential) model. What is the key mechanistic difference between these models?",
    options: [
      "The MWC model proposes that ligand binding changes only the affinity of the bound subunit, while the KNF model proposes all subunits change simultaneously",
      "In the MWC model, all subunits simultaneously exist in either the T (tense/inactive) or R (relaxed/active) state; in the KNF model, ligand binding induces sequential conformational changes that propagate to neighboring subunits",
      "The MWC model applies only to enzymes with two subunits, while KNF applies to tetramers",
      "The KNF model predicts a Hill coefficient of 1 for all allosteric enzymes, while MWC predicts higher values"
    ],
    answer: 1,
    explanation: "In the MWC (Monod-Wyman-Changeux) concerted model, all subunits are in the same conformational state (all-T or all-R), and ligand binding shifts the equilibrium toward the R state without mixed states. In the KNF (Koshland-Nemethy-Filmer) sequential model, each subunit undergoes induced-fit conformational change upon ligand binding, and intermediate states (with only some subunits in R conformation) are allowed."
  },
  {
    id: 25,
    question: "What is the 'glycan shield' of HIV-1 gp120, and what is its functional significance in immune evasion?",
    options: [
      "Gp120 is coated with host-derived N-linked glycans that are poorly immunogenic (self-like) and sterically occlude conserved protein epitopes, protecting the virus from neutralizing antibodies",
      "Gp120 uses O-linked glycans to bind CD4 more tightly, increasing infectivity",
      "The glycan shield consists of sulfated GAG chains that neutralize antibody binding through electrostatic repulsion",
      "Glycans on gp120 directly inhibit T-cell activation by binding MHC-II molecules"
    ],
    answer: 0,
    explanation: "HIV-1 gp120 is one of the most glycosylated proteins known (approximately 50% of its molecular weight is glycan). These N-linked glycans (predominantly high-mannose type) are synthesized by the host cell and are therefore recognized as 'self' by the immune system, being poorly immunogenic. They also form a dense shield that sterically blocks antibody access to conserved protein epitopes on gp120."
  },
  {
    id: 26,
    question: "Surface Plasmon Resonance (SPR) is used to measure binding kinetics between biomolecules. Which parameters are directly measured, and how is the Kd determined?",
    options: [
      "SPR directly measures Kd by analyzing the midpoint of the binding curve",
      "SPR measures the association rate constant (kon) from the association phase and the dissociation rate constant (koff) from the dissociation phase; Kd = koff/kon",
      "SPR measures only the equilibrium binding constant and cannot provide kinetic information",
      "SPR measures the change in protein molecular weight upon binding"
    ],
    answer: 1,
    explanation: "In SPR, one binding partner (ligand) is immobilized on a sensor chip, and the other (analyte) flows over it. The association phase gives kon (from the rate of signal increase at different analyte concentrations), and the dissociation phase gives koff (from the exponential signal decay when analyte-free buffer flows). Kd = koff/kon. SPR is unique in providing both equilibrium and kinetic binding parameters."
  },
  {
    id: 27,
    question: "Which statement about the Michaelis-Menten equation is correct when applied to a two-substrate reaction following a Ping-Pong (double displacement) mechanism?",
    options: [
      "In a Ping-Pong mechanism, the two substrates bind simultaneously to the enzyme, and Lineweaver-Burk plots at varying concentrations of one substrate give intersecting lines",
      "In a Ping-Pong mechanism, the first substrate binds and is converted to product (forming a covalent enzyme intermediate), which is released before the second substrate binds; parallel lines are obtained in double-reciprocal plots",
      "Ping-Pong mechanisms are only found in metalloenzymes and show no substrate saturation kinetics",
      "Ping-Pong mechanisms require three or more substrates by definition"
    ],
    answer: 1,
    explanation: "In a Ping-Pong (double displacement) mechanism, the enzyme alternates between two forms: substrate A binds to enzyme form E, transfers a group (forming a modified enzyme E* and releasing product P), then substrate B binds to E* and accepts the group (releasing product Q and regenerating E). Lineweaver-Burk plots at varying [A] with different fixed [B] concentrations yield parallel lines, which is the diagnostic feature of Ping-Pong kinetics."
  },
  {
    id: 28,
    question: "Asparagine-linked (N-linked) glycans undergo extensive processing in the Golgi. What determines whether an N-glycan becomes a high-mannose, complex, or hybrid type?",
    options: [
      "The amino acid sequence of the glycan acceptor sequon determines the final glycan structure",
      "The accessibility of the N-glycan to Golgi processing enzymes (alpha-mannosidases, GlcNAc transferases) determines the type; less accessible glycans remain as high-mannose, while accessible ones are processed to complex or hybrid types",
      "High-mannose glycans are assembled in the ER while complex glycans are assembled de novo in the Golgi from monosaccharides",
      "Only secreted proteins receive complex glycans; transmembrane proteins retain high-mannose glycans"
    ],
    answer: 1,
    explanation: "After transfer of the Glc₃Man₉GlcNAc₂ core, trimming by glucosidases I and II and ER alpha-mannosidase occurs in the ER. In the Golgi, further trimming by Golgi mannosidases I and II, followed by the action of GlcNAc transferase I (which adds a GlcNAc), is required for complex type processing. Steric accessibility of the N-glycan within the folded protein determines whether Golgi enzymes can act on it."
  },
  {
    id: 29,
    question: "Laminin is a major component of basement membranes. What is its structural organization and how does it interact with other ECM components?",
    options: [
      "Laminin is a homotrimeric protein that forms fibrils similar to collagen and interacts primarily with fibronectin",
      "Laminin is a heterotrimeric cross-shaped glycoprotein (alpha-beta-gamma chains) that self-polymerizes into a polymer network and interacts with type IV collagen (via nidogen/entactin), perlecan, and cellular receptors (integrins, dystroglycan)",
      "Laminin is a small glycoprotein that binds only to heparan sulfate proteoglycans in basement membranes",
      "Laminin forms covalent cross-links with type I collagen fibers via lysyl oxidase"
    ],
    answer: 1,
    explanation: "Laminins are heterotrimeric (alpha-beta-gamma) glycoproteins with a characteristic cross/T shape. They polymerize into a sheet-like network via their N-terminal short arms (LN domains) and interact with type IV collagen via nidogen/entactin bridging, with agrin and perlecan (HSPGs) via their G-domain. Cell surface receptors for laminin include alpha6beta1 integrin and dystroglycan, anchoring cells to the basement membrane."
  },
  {
    id: 30,
    question: "In enzyme kinetics, the concept of 'specificity constant' (kcat/Km) approaches the diffusion limit for some enzymes. What is the implication of an enzyme having kcat/Km close to 10^9 M⁻¹s⁻¹?",
    options: [
      "The enzyme is near perfect: nearly every collision between enzyme and substrate leads to product formation, and the rate is limited by the rate of enzyme-substrate encounter (diffusion), not by the chemical step",
      "The enzyme has an extremely high Vmax and can process millions of substrates per second",
      "The enzyme is saturated at very low substrate concentrations due to its high affinity (low Km)",
      "The enzyme requires no activation energy and violates the principles of transition state theory"
    ],
    answer: 0,
    explanation: "A kcat/Km near 10^8-10^9 M⁻¹s⁻¹ (the diffusion-controlled limit) means the enzyme is 'kinetically perfect': every productive enzyme-substrate encounter leads to catalysis. At this point, the rate-limiting step is diffusion of substrate to the enzyme, not the chemical transformation. Examples include triosephosphate isomerase (kcat/Km ~10^8), carbonic anhydrase, and acetylcholinesterase."
  },
  {
    id: 31,
    question: "Fibrillin microfibrils provide structural support in the ECM and store TGF-beta as latent complexes. How does fibrillin dysfunction lead to Marfan syndrome at the molecular level?",
    options: [
      "Fibrillin mutations prevent elastic fiber assembly, directly causing aortic wall weakness through lack of elasticity",
      "Fibrillin mutations disrupt microfibril assembly, releasing large amounts of latent TGF-beta from sequestration; excess active TGF-beta signaling causes aortopathy and skeletal abnormalities",
      "Fibrillin directly activates lysyl oxidase for collagen crosslinking, and its absence prevents proper collagen fiber formation",
      "Fibrillin mutations cause ER retention of fibrillin, triggering unfolded protein response and cell death in fibroblasts"
    ],
    answer: 1,
    explanation: "The pathophysiology of Marfan syndrome (FBN1 mutations) involves not only structural ECM defects but also dysregulated TGF-beta signaling. Fibrillin microfibrils normally sequester latent TGF-beta in the ECM. With fibrillin dysfunction, excess TGF-beta is released and activated, driving excessive TGF-beta signaling in the aortic wall, leading to medial degeneration and aneurysm formation — explaining why TGF-beta antagonists (losartan) can be therapeutic."
  },
  {
    id: 32,
    question: "FRET (Förster Resonance Energy Transfer) is used to study protein conformational changes and protein-protein interactions. What is the distance range within which FRET is effective, and what does this range allow researchers to measure?",
    options: [
      "FRET is effective at 1–10 nm distances, allowing measurement of molecular distances within proteins or between interacting proteins with angstrom precision (often called a 'molecular ruler')",
      "FRET is effective at 100–1000 nm, allowing visualization of protein clusters in cells by light microscopy",
      "FRET operates over any distance as long as both fluorophores are in the same cellular compartment",
      "FRET requires direct physical contact between donor and acceptor fluorophores to transfer energy"
    ],
    answer: 0,
    explanation: "FRET efficiency depends critically on the 6th power of donor-acceptor distance (E = 1/(1 + (r/R₀)^6)), making it exquisitely sensitive between 1–10 nm (typically 2–8 nm for common FRET pairs). This range is perfectly suited for measuring intramolecular distances within proteins, tracking conformational changes, and detecting protein-protein interactions in vitro and in living cells."
  },
  {
    id: 33,
    question: "In the context of proteoglycans, what is the 'bottle-brush' structure of aggrecan, and why is it important for cartilage function?",
    options: [
      "Aggrecan's bottle-brush structure consists of keratan sulfate chains radiating from a central protein core, which acts as an enzyme inhibitor in cartilage",
      "Aggrecan has a core protein decorated with numerous chondroitin sulfate and keratan sulfate GAG chains, creating a highly hydrated, polyanionic molecule. Multiple aggrecan monomers attach to hyaluronan via link protein, forming large aggregates that resist compressive forces in cartilage",
      "The bottle-brush structure consists of collagen fibers wrapped around an aggrecan core, providing tensile strength",
      "Aggrecan's bottle-brush architecture functions primarily to sequester growth factors in cartilage, with minimal mechanical role"
    ],
    answer: 1,
    explanation: "Aggrecan is the major large proteoglycan of cartilage, with ~100 chondroitin sulfate and ~50 keratan sulfate GAG chains attached to its core protein. Multiple aggrecan monomers (up to 100) non-covalently attach to a single hyaluronan chain via link protein, forming enormous aggregates. The highly sulfated GAG chains create extreme negative charge density that attracts counter-ions and water, generating osmotic swelling pressure that resists cartilage compression."
  },
  {
    id: 34,
    question: "What is the difference between 'transition state analogs' and 'mechanism-based (suicide) inhibitors' in enzyme inhibition?",
    options: [
      "Transition state analogs covalently modify the enzyme active site, while mechanism-based inhibitors only reversibly bind the transition state",
      "Transition state analogs are stable molecules that mimic the structure of the reaction transition state and bind the enzyme with very high affinity (reversibly); mechanism-based inhibitors are substrates that are converted by the enzyme's own catalytic mechanism into a reactive species that irreversibly inactivates the enzyme",
      "Both types are irreversible inhibitors that require covalent bond formation with catalytic residues",
      "Transition state analogs have therapeutic applications only, while mechanism-based inhibitors are used only as research tools"
    ],
    answer: 1,
    explanation: "Transition state analogs (e.g., allopurinol for xanthine oxidase) mimic the geometric and electronic structure of the transition state and bind reversibly with extremely high affinity (Kd often 10⁻¹⁰-10⁻¹³ M). Mechanism-based (suicide) inhibitors (e.g., aspirin for COX, DFMO for ornithine decarboxylase) are processed by the enzyme's catalytic mechanism to generate a reactive intermediate that irreversibly modifies the enzyme, causing 'suicide' inactivation."
  },
  {
    id: 35,
    question: "In the context of protein-protein interaction networks (interactomes), what is the 'hub-and-spoke' architecture, and what are the two classes of hubs?",
    options: [
      "Hub proteins are those with exactly two binding partners, forming linear signaling chains",
      "Hubs are highly connected proteins in the network; 'party hubs' interact with multiple partners simultaneously (enriched in complexes), while 'date hubs' interact with different partners at different times or locations, serving as dynamic coordinators of cellular processes",
      "Hub proteins are exclusively nuclear transcription factors that regulate gene networks",
      "Hub and spoke architecture describes the structure of multi-enzyme complexes where a central enzyme coordinates peripheral enzymes"
    ],
    answer: 1,
    explanation: "Network analysis of protein interactomes reveals scale-free topology with a small number of highly connected 'hub' proteins. Party hubs (named for being present at the 'party'/complex) interact with multiple partners simultaneously, as revealed by co-expression with partners. Date hubs interact with different partners at different times or cellular locations, coordinating distinct processes. Hub proteins are often essential genes; their removal is lethal."
  },
  {
    id: 36,
    question: "Chondroitin sulfate and dermatan sulfate are epimers of each other. What structural difference distinguishes them?",
    options: [
      "Chondroitin sulfate contains glucuronate while dermatan sulfate contains iduronate at the C5 position (C5 epimer of glucuronate); iduronate's greater conformational flexibility enhances protein binding",
      "Chondroitin sulfate is sulfated at position 4 while dermatan sulfate is sulfated at position 6 of GalNAc",
      "Dermatan sulfate contains GlcNAc while chondroitin sulfate contains GalNAc as the hexosamine",
      "Chondroitin sulfate has a higher degree of sulfation than dermatan sulfate"
    ],
    answer: 0,
    explanation: "Chondroitin sulfate contains GlcA (D-glucuronic acid), while dermatan sulfate contains IdoA (L-iduronic acid), which is the C5 epimer of glucuronic acid. This epimerization is catalyzed by GlcA C5-epimerase. Iduronate has greater conformational flexibility (more ring conformations accessible) than glucuronate, enhancing the ability of dermatan sulfate to interact with proteins such as thrombin inhibitors (heparin cofactor II) and growth factors."
  },
  {
    id: 37,
    question: "Hydrogen-deuterium exchange mass spectrometry (HDX-MS) is used to study protein dynamics and protein-protein interactions. What is the principle of this technique?",
    options: [
      "Proteins are chemically modified with deuterium-labeled amino acids during biosynthesis to track folding in vivo",
      "Amide hydrogen atoms in the protein backbone exchange with deuterium from D₂O solvent; exchange rate reflects local dynamics and solvent accessibility — protected regions (secondary structure, buried cores, or protein-protein interfaces) exchange slowly, detected by increased mass via MS",
      "Deuterium-labeled antibodies are used to immunoprecipitate proteins, and the degree of labeling quantifies interaction strength",
      "HDX-MS measures the mass of the intact protein to determine the number of disulfide bonds"
    ],
    answer: 1,
    explanation: "In HDX-MS, proteins are incubated in D₂O, and backbone amide H atoms exchange with deuterium at rates that reflect local conformational dynamics and solvent exposure. Regions in stable secondary structure or buried in protein cores (or at protein-protein interfaces) are protected from exchange. After quenching at low pH and temperature, the protein is digested to peptides and the mass increase (Δ1 Da per exchange) is measured by MS."
  },
  {
    id: 38,
    question: "Tenascin-C is an ECM glycoprotein with context-dependent functions — it promotes cell migration in some contexts but inhibits adhesion in others. What molecular property underlies this counter-adhesive behavior?",
    options: [
      "Tenascin-C actively degrades fibronectin, removing adhesive substrate",
      "Tenascin-C binds alpha9 integrins and syndecan-4, but its fibronectin type III repeats can compete with fibronectin RGD sites for integrin binding without triggering full focal adhesion assembly, and it binds the extracellular domain of syndecan-4 to disrupt fibronectin-syndecan signaling",
      "Tenascin-C induces apoptosis of cells that contact it, appearing anti-adhesive",
      "Tenascin-C exclusively signals through growth factor receptors and has no direct interaction with integrins or proteoglycans"
    ],
    answer: 1,
    explanation: "Tenascin-C exhibits anti-adhesive or 'counter-adhesive' behavior because it can engage cell surface receptors (alpha9beta1 integrin, EGF repeats binding EGFR, fibronectin type III repeats binding alpha5beta1) without stimulating the full outside-in signaling needed for focal adhesion maturation. It also interferes with fibronectin-syndecan-4 cooperation, preventing the syndecan-4-RhoA signaling required for focal adhesion formation and stress fiber assembly."
  },
  {
    id: 39,
    question: "An enzyme shows substrate inhibition, where activity decreases at very high substrate concentrations. What is the most common mechanistic explanation for this phenomenon?",
    options: [
      "At high substrate concentrations, the substrate acts as a competitive inhibitor of the enzyme's own product",
      "A second substrate molecule binds to the enzyme-substrate (ES) complex at a non-productive site, forming an ESS complex that cannot release product, reducing overall velocity",
      "High substrate concentration denatures the enzyme through osmotic effects",
      "High substrate concentration depletes the enzyme's cofactors, limiting the reaction"
    ],
    answer: 1,
    explanation: "Substrate inhibition most commonly occurs when a second substrate molecule binds to the ES complex at the product-release site or at a distinct inhibitory site, forming a non-productive ESS (or ES₂) complex. Product cannot be released until one substrate dissociates. This is observed with many enzymes including succinate dehydrogenase and certain kinases, and results in a characteristic rate decrease above a threshold [S]."
  },
  {
    id: 40,
    question: "In glycobiology, the concept of the 'sugar code' refers to the information-carrying capacity of glycans. How does the information content of an oligosaccharide compare to a peptide of the same number of units?",
    options: [
      "Oligosaccharides and peptides of equal length carry identical information content because both use approximately 20 building blocks",
      "Oligosaccharides have dramatically higher information content due to multiple points of attachment (branching), multiple possible anomeric configurations (alpha/beta), and many possible linkage positions between monosaccharides, creating an astronomically larger sequence space",
      "Peptides have higher information content because all 20 amino acids are unique, while glycans use only 6-8 different monosaccharides",
      "Information content is identical because both depend only on the sequence of monomers, not on three-dimensional arrangement"
    ],
    answer: 1,
    explanation: "A hexasaccharide has potentially more than 10¹² possible structures, while a hexapeptide has only 20⁶ (~6×10⁷) possible sequences. This is because each monosaccharide can branch (connecting to multiple positions), exist in alpha or beta anomeric configurations, and link through multiple hydroxyl positions. This structural complexity makes glycans ideal for encoding biological recognition information in a compact molecular space."
  },
  {
    id: 41,
    question: "Crosslinking mass spectrometry (XL-MS) is used to study protein complexes. What information does this technique provide that is not available from standard proteomics?",
    options: [
      "XL-MS identifies post-translational modifications on proteins within complexes",
      "XL-MS identifies pairs of amino acid residues (typically lysines within ~25–30 Å of each other) that are in spatial proximity within a protein complex, providing distance constraints for modeling protein-protein interfaces and complex topology",
      "XL-MS measures the dissociation constants of protein-protein interactions in living cells",
      "XL-MS determines the isoelectric point of proteins within macromolecular complexes"
    ],
    answer: 1,
    explanation: "In XL-MS, chemical crosslinkers (e.g., DSS/BS3, which react with lysine amino groups ~11 Å spacer) covalently link residues in spatial proximity. After complex digestion by trypsin, crosslinked peptide pairs are identified by MS. The crosslinked pairs define residue-residue distance constraints (typically ≤30 Å Cα-Cα). These constraints are used as restraints in computational docking to model the topology and interfaces of protein complexes, complementing cryo-EM and X-ray structures."
  },
  {
    id: 42,
    question: "Heparin is a highly sulfated form of heparan sulfate used as an anticoagulant. What is the molecular mechanism of heparin's anticoagulant activity?",
    options: [
      "Heparin directly inhibits thrombin by binding to its active site",
      "Heparin binds to antithrombin III (ATIII), inducing a conformational change that accelerates ATIII's inhibition of thrombin and factor Xa by ~1000-fold; the minimal active sequence is a unique pentasaccharide",
      "Heparin chelates calcium ions required for coagulation factor activation",
      "Heparin cleaves the GAG chains of fibrinogen, preventing fibrin clot formation"
    ],
    answer: 1,
    explanation: "Heparin acts primarily by activating antithrombin III (ATIII). A specific pentasaccharide sequence within heparin binds ATIII and induces a conformational change that exposes ATIII's reactive loop, accelerating its inhibitory reaction with thrombin and factor Xa by ~1000-fold. For thrombin inhibition, heparin must also bind thrombin simultaneously (bridging mechanism), requiring ≥18 saccharide units; fondaparinux (synthetic pentasaccharide) selectively inhibits only factor Xa."
  },
  {
    id: 43,
    question: "In enzyme kinetics, what is the 'burst phase' observed in pre-steady-state kinetics, and what information does it provide?",
    options: [
      "The burst phase is the initial period of maximum velocity before substrate depletion, used to calculate Vmax",
      "The burst phase is a rapid, stoichiometric (one product per enzyme active site) release of product before the steady state is established, indicating that the chemical step is faster than product release; its amplitude equals the enzyme concentration and its rate equals the chemical step rate constant",
      "The burst phase represents rapid enzyme denaturation at the beginning of the reaction",
      "The burst phase occurs when substrate concentration greatly exceeds Km, causing all enzyme to be saturated simultaneously"
    ],
    answer: 1,
    explanation: "A burst in pre-steady-state kinetics (observed by stopped-flow or rapid-quench methods) indicates that chemistry (acylation for chymotrypsin) is faster than the subsequent catalytic step (deacylation/product release). The burst amplitude equals the active enzyme concentration [E]₀, allowing determination of the fraction of active enzyme. The burst rate gives kcat for the chemical step. Chymotrypsin with p-nitrophenyl esters is a classical example."
  },
  {
    id: 44,
    question: "Perlecan is a large heparan sulfate proteoglycan found in basement membranes. Which combination of functions does perlecan serve?",
    options: [
      "Perlecan exclusively provides structural support in basement membranes by crosslinking collagen and laminin",
      "Perlecan serves structural roles (bridging laminin and collagen IV networks), acts as a co-receptor for growth factors (FGF2, VEGF) via its HS chains, regulates angiogenesis, and its endoproteolytic fragment endorepellin has anti-angiogenic activity via alpha2beta1 integrin",
      "Perlecan is a transmembrane proteoglycan that functions as a growth factor receptor on cell surfaces",
      "Perlecan's primary function is as a sequesterase for morphogen gradients during embryonic development only"
    ],
    answer: 1,
    explanation: "Perlecan (HSPG2) is a multifunctional basement membrane proteoglycan. Its HS chains bind and present FGF2 and VEGF to their receptors (co-receptor function). Its core protein domains interact with laminin and type IV collagen, contributing to basement membrane architecture. Importantly, its C-terminal domain V (endorepellin) released by proteolysis inhibits angiogenesis by binding alpha2beta1 integrin and VEGFR2, blocking endothelial cell migration."
  },
  {
    id: 45,
    question: "Protein NMR spectroscopy can determine protein solution structures and dynamics. What is the 'chemical shift perturbation' experiment used for in the context of protein-protein interactions?",
    options: [
      "Chemical shift perturbation measures the mass change of a protein upon binding to its partner",
      "Chemical shift perturbation maps the binding interface: when a ligand or binding partner is added to a ¹⁵N-labeled protein, amide resonances of residues at or near the binding site shift in the ²D ¹H-¹⁵N HSQC spectrum, identifying the interaction surface at residue resolution",
      "Chemical shift perturbation is used to determine the pKa of ionizable residues in a protein active site",
      "Chemical shift perturbation measures the effect of mutations on protein secondary structure content"
    ],
    answer: 1,
    explanation: "In ¹⁵N HSQC-based chemical shift perturbation experiments, a ¹⁵N-labeled protein is titrated with an unlabeled binding partner. Amide NH resonances from residues at the interaction surface (experiencing changed chemical environment) shift from their free positions. Plotting the magnitude of chemical shift changes versus residue number identifies the binding epitope at near-atomic resolution, making it a powerful tool for mapping protein-protein interaction surfaces."
  },
  {
    id: 46,
    question: "Tenascin, fibronectin, and vitronectin all contain RGD sequences, yet they have distinct biological activities. What molecular explanation accounts for the different cellular responses to RGD in different ECM proteins?",
    options: [
      "The RGD sequences in different proteins differ in their amino acid flanking sequences, the three-dimensional context of the RGD loop, and the spacing between RGD and synergy sites, all of which affect integrin selectivity, affinity, and avidity, producing different downstream signaling outcomes",
      "All RGD-containing proteins activate identical integrins and signaling pathways; differences in cell behavior are due to protein concentration differences",
      "Different proteins deliver RGD to different cellular compartments — fibronectin to the cytoplasm and vitronectin to the nucleus",
      "The RGD sequences in vitronectin are methylated, which changes its integrin binding specificity"
    ],
    answer: 0,
    explanation: "RGD in different proteins is presented in distinct structural contexts: the flanking sequences, loop rigidity, and three-dimensional conformation of the RGD motif affect which integrins bind (e.g., alpha5beta1 prefers fibronectin RGD + PHSRN synergy site; alphavbeta3/beta5 prefer vitronectin RGD). Different integrins recruit different intracellular adaptors, activating distinct signaling cascades. Thus, identical tripeptide sequences in different ECM proteins can elicit fundamentally different cell behaviors."
  },
  {
    id: 47,
    question: "What is the key feature of glycosylphosphatidylinositol (GPI)-anchored proteins that distinguishes them from transmembrane proteins, and what functional consequence does this have?",
    options: [
      "GPI-anchored proteins are located on the inner leaflet of the plasma membrane and are not accessible to extracellular ligands",
      "GPI-anchored proteins are attached to the outer leaflet of the plasma membrane via a glycolipid anchor (GPI), are enriched in lipid rafts (detergent-resistant membranes), lack cytoplasmic signaling domains, and can be released by GPI-specific phospholipase C (GPI-PLC), accounting for their distinct signaling and trafficking properties",
      "GPI-anchored proteins span the membrane multiple times like other lipid-anchored proteins",
      "GPI anchors are found exclusively on intracellular organelle membranes, not at the plasma membrane"
    ],
    answer: 1,
    explanation: "GPI-anchored proteins are attached to the outer membrane leaflet via a glycolipid (GPI) anchor at their C-terminus, rather than having a transmembrane domain. They preferentially partition into cholesterol/sphingolipid-rich lipid rafts. Because they lack cytoplasmic domains, they cannot directly activate intracellular signaling; instead, they associate laterally with transmembrane signaling proteins in rafts. They can be shed from the cell surface by GPI-specific phospholipase C (PLC) or D."
  },
  {
    id: 48,
    question: "In structural biology, what is the 'resolution revolution' in cryo-EM, and what technical advances enabled it?",
    options: [
      "The resolution revolution refers to the improvement in X-ray crystallography resolution from 3 Å to 1 Å using synchrotron radiation",
      "The cryo-EM resolution revolution (2013-present) enabled routine atomic resolution structure determination of proteins without crystallization; it was enabled by direct electron detectors (allowing per-frame dose fractionation to correct beam-induced motion), improved image processing algorithms (Bayesian particle polishing, CTF refinement in RELION/cryoSPARC), and larger datasets",
      "The resolution revolution describes improved NMR techniques allowing structure determination of proteins >200 kDa",
      "Improvements in negative staining protocols for TEM enabled near-atomic resolution of membrane proteins"
    ],
    answer: 1,
    explanation: "The cryo-EM resolution revolution was driven primarily by direct electron detector cameras (replacing CCD cameras), which capture electrons directly at high speed, enabling correction of specimen motion ('movie mode') that previously blurred high-resolution information. Combined with advances in computational methods for image processing and particle classification (RELION, cryoSPARC), these improvements enabled routine sub-4 Å and increasingly sub-2 Å resolution for proteins ≥100 kDa."
  },
  {
    id: 49,
    question: "Enzyme processivity describes the ability of an enzyme to catalyze multiple rounds of a reaction on the same substrate without dissociating. Which of the following enzymes is highly processive, and why is this property important for its biological function?",
    options: [
      "Hexokinase, because it must phosphorylate many glucose molecules before releasing the product",
      "DNA polymerase, because it must synthesize thousands of nucleotides continuously without dissociating to accurately and efficiently replicate an entire chromosome",
      "Lactate dehydrogenase, because rapid lactate clearance requires continuous enzyme-substrate contact",
      "Adenylyl cyclase, because it must generate large cAMP signals without substrate dissociation"
    ],
    answer: 1,
    explanation: "DNA polymerase is highly processive — once initiated at a primer, it synthesizes thousands to millions of nucleotides before dissociating. This processivity is mediated by the sliding clamp (PCNA in eukaryotes), which encircles the DNA and tethers polymerase to the template. High processivity is essential for efficient chromosome replication: frequent dissociation would make genome duplication prohibitively slow and error-prone."
  },
  {
    id: 50,
    question: "Congenital disorders of glycosylation (CDG) are a diverse group of metabolic diseases. CDG-Ia (PMM2-CDG), the most common CDG, is caused by a deficiency of phosphomannomutase 2 (PMM2). How does this enzyme deficiency lead to glycosylation defects?",
    options: [
      "PMM2 deficiency prevents the synthesis of dolichol phosphate, blocking transfer of the core oligosaccharide to protein",
      "PMM2 converts mannose-6-phosphate to mannose-1-phosphate, which is required for GDP-mannose synthesis; without GDP-mannose, the dolichol-PP-linked oligosaccharide core cannot be fully assembled, leading to hypoglycosylation of N-glycoproteins",
      "PMM2 is required for the trimming of high-mannose glycans in the Golgi; its absence leads to accumulation of unprocessed glycans",
      "PMM2 deficiency blocks O-linked glycosylation by reducing UDP-GalNAc availability"
    ],
    answer: 1,
    explanation: "PMM2 catalyzes the interconversion of mannose-6-phosphate and mannose-1-phosphate. Mannose-1-phosphate is converted to GDP-mannose, which is the mannose donor for synthesis of the dolichol-PP-linked glycan precursor (Glc₃Man₉GlcNAc₂). Without sufficient GDP-mannose, the oligosaccharide precursor is incompletely assembled and transferred to protein, resulting in hypoglycosylation of N-linked glycoproteins and the multi-system disease characteristic of CDG-Ia."
  }
];

export default questions;
