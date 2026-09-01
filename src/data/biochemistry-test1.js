const questions = [
  {
    id: 1,
    question: "In Michaelis-Menten kinetics, the Km is defined as the substrate concentration at which the reaction velocity is equal to:",
    options: ["Vmax", "Vmax/2", "2 × Vmax", "Vmax/4"],
    answer: 1,
    explanation: "Km (Michaelis constant) is the substrate concentration at which the reaction velocity equals half the maximum velocity (Vmax/2). It is a measure of the affinity of an enzyme for its substrate — a lower Km indicates higher affinity."
  },
  {
    id: 2,
    question: "On a Lineweaver-Burk (double-reciprocal) plot, the x-intercept represents:",
    options: ["Km", "1/Vmax", "-1/Km", "Vmax/Km"],
    answer: 2,
    explanation: "In the Lineweaver-Burk plot (1/v vs. 1/[S]), the x-intercept equals -1/Km. The y-intercept equals 1/Vmax, and the slope equals Km/Vmax."
  },
  {
    id: 3,
    question: "A competitive inhibitor of an enzyme would cause which of the following changes on a Lineweaver-Burk plot?",
    options: [
      "Same x-intercept, higher y-intercept",
      "Same y-intercept, different x-intercept",
      "Same x-intercept, same y-intercept",
      "Both x- and y-intercepts unchanged"
    ],
    answer: 1,
    explanation: "A competitive inhibitor increases the apparent Km (shifts the x-intercept closer to zero, i.e., less negative) without affecting Vmax. On the Lineweaver-Burk plot, this means the y-intercept (1/Vmax) remains the same while the x-intercept (-1/Km) changes."
  },
  {
    id: 4,
    question: "Which type of enzyme inhibition results in a decrease in both apparent Vmax and apparent Km, with the ratio Vmax/Km remaining constant?",
    options: ["Competitive inhibition", "Uncompetitive inhibition", "Non-competitive inhibition", "Irreversible inhibition"],
    answer: 1,
    explanation: "Uncompetitive inhibitors bind only to the enzyme-substrate complex (ES), decreasing both Vmax and Km by the same factor (alpha prime). Since both decrease proportionally, the ratio Vmax/Km (catalytic efficiency) remains unchanged, and lines on a Lineweaver-Burk plot are parallel."
  },
  {
    id: 5,
    question: "The Hill coefficient (n) for hemoglobin is approximately 2.8. This value indicates:",
    options: [
      "Hemoglobin has 2.8 oxygen-binding sites",
      "Positive cooperativity in oxygen binding",
      "Negative cooperativity in oxygen binding",
      "Hemoglobin follows simple Michaelis-Menten kinetics"
    ],
    answer: 1,
    explanation: "A Hill coefficient greater than 1 indicates positive cooperativity — binding of one ligand increases the affinity of the remaining sites. For hemoglobin, n ≈ 2.8 (theoretical maximum is 4 for four subunits), reflecting strong positive cooperativity in O2 binding."
  },
  {
    id: 6,
    question: "In allosteric enzyme regulation, K-type regulation refers to:",
    options: [
      "Change in Vmax without affecting Km",
      "Change in Km without affecting Vmax",
      "Change in both Km and Vmax",
      "Irreversible modification of the active site"
    ],
    answer: 1,
    explanation: "K-type allosteric regulation alters the apparent Km (substrate affinity) without changing Vmax, effectively shifting the S0.5 (substrate concentration at half-maximal velocity). V-type regulation, in contrast, alters Vmax without changing Km."
  },
  {
    id: 7,
    question: "ATCase (aspartate transcarbamoylase) is a classic example of an allosteric enzyme. CTP acts as a feedback inhibitor by binding to the:",
    options: ["Catalytic subunit at the active site", "Regulatory subunit at the allosteric site", "Hinge region between subunits", "Substrate binding site competitively"],
    answer: 1,
    explanation: "ATCase consists of catalytic and regulatory subunits. CTP (the end product of pyrimidine synthesis) binds to the regulatory subunits at the allosteric site, not the active site, causing a T-state (tense, less active) conformation. ATP binding to the same site activates the enzyme."
  },
  {
    id: 8,
    question: "The turnover number (kcat) of an enzyme is 500 s⁻¹ and Km is 0.1 mM. The catalytic efficiency (kcat/Km) is:",
    options: ["5 × 10³ M⁻¹s⁻¹", "5 × 10⁶ M⁻¹s⁻¹", "5 × 10⁹ M⁻¹s⁻¹", "5 × 10⁻³ M⁻¹s⁻¹"],
    answer: 1,
    explanation: "Catalytic efficiency = kcat/Km = 500 s⁻¹ / (0.1 × 10⁻³ M) = 500 / 10⁻⁴ = 5 × 10⁶ M⁻¹s⁻¹. The diffusion limit for catalytic efficiency is approximately 10⁸–10⁹ M⁻¹s⁻¹, so this enzyme is not diffusion-limited."
  },
  {
    id: 9,
    question: "Which of the following amino acid residues commonly acts as a general base in enzyme catalysis?",
    options: ["Glycine (pKa ~2.3)", "Histidine (pKa ~6.0)", "Valine (pKa ~9.7)", "Phenylalanine (pKa ~1.8)"],
    answer: 1,
    explanation: "Histidine, with a side chain pKa near 6.0, is uniquely suited to act as either a general acid or general base at physiological pH. Its imidazole ring can exist in both protonated and deprotonated forms near pH 7, making it the most versatile catalytic residue."
  },
  {
    id: 10,
    question: "In serine proteases such as chymotrypsin, the catalytic triad consists of:",
    options: [
      "Ser, His, Cys",
      "Ser, His, Asp",
      "Cys, His, Asp",
      "Ser, Lys, Asp"
    ],
    answer: 1,
    explanation: "The catalytic triad of serine proteases (chymotrypsin, trypsin, elastase) consists of Serine-195, Histidine-57, and Aspartate-102. Asp stabilizes His, which activates Ser to act as a nucleophile to attack the peptide bond."
  },
  {
    id: 11,
    question: "Zymogen activation of chymotrypsinogen to chymotrypsin involves:",
    options: [
      "Phosphorylation of a serine residue",
      "Proteolytic cleavage of specific peptide bonds",
      "Allosteric binding of calcium ions",
      "Disulfide bond reduction"
    ],
    answer: 1,
    explanation: "Chymotrypsinogen is activated by trypsin, which cleaves the Arg15-Ile16 peptide bond, creating a new N-terminus that forms a salt bridge with Asp194, causing conformational rearrangement to form the active enzyme. This is a classic example of zymogen (proenzyme) activation by limited proteolysis."
  },
  {
    id: 12,
    question: "An enzyme has a Vmax of 100 μmol/min and a Km of 2 mM. At a substrate concentration of 2 mM, the reaction velocity will be:",
    options: ["100 μmol/min", "50 μmol/min", "25 μmol/min", "75 μmol/min"],
    answer: 1,
    explanation: "Using the Michaelis-Menten equation: v = Vmax × [S] / (Km + [S]) = 100 × 2 / (2 + 2) = 200/4 = 50 μmol/min. When [S] = Km, the velocity is exactly Vmax/2, by definition of Km."
  },
  {
    id: 13,
    question: "Which of the following best describes the primary structure of a protein?",
    options: [
      "The spatial arrangement of atoms in secondary structure elements",
      "The linear sequence of amino acids linked by peptide bonds",
      "The three-dimensional arrangement of multiple polypeptide chains",
      "The regular repeating patterns of hydrogen bonds in helices and sheets"
    ],
    answer: 1,
    explanation: "Primary structure refers to the linear sequence of amino acids connected by covalent peptide bonds. This sequence, encoded by the gene, determines all higher levels of protein structure and ultimately the function of the protein."
  },
  {
    id: 14,
    question: "The phi (φ) and psi (ψ) angles in a polypeptide chain describe rotations around which bonds?",
    options: [
      "N–Cα and Cα–C(O) bonds respectively",
      "C(O)–N (peptide bond) only",
      "Cα–Cβ side chain bonds",
      "C(O)–O and N–H bonds"
    ],
    answer: 0,
    explanation: "The Ramachandran angles φ (phi) describes rotation around the N–Cα bond, and ψ (psi) describes rotation around the Cα–C(carbonyl) bond. The peptide bond (C–N) itself has partial double-bond character and is essentially planar, restricting rotation."
  },
  {
    id: 15,
    question: "In an α-helix, hydrogen bonds form between:",
    options: [
      "Residue i and residue i+1",
      "Residue i and residue i+4",
      "Residue i and residue i+2",
      "Adjacent strands running antiparallel"
    ],
    answer: 1,
    explanation: "In an α-helix, the backbone N–H of residue i+4 hydrogen bonds with the C=O of residue i. This pattern results in 3.6 amino acid residues per turn of the helix, with a rise of 1.5 Å per residue (pitch of 5.4 Å per turn)."
  },
  {
    id: 16,
    question: "Which amino acid is most disruptive to an α-helix and is often called a 'helix breaker'?",
    options: ["Alanine", "Leucine", "Proline", "Valine"],
    answer: 2,
    explanation: "Proline disrupts α-helices because its side chain is covalently bonded to the backbone nitrogen, eliminating the N–H group needed for hydrogen bonding and introducing a rigid kink. It is commonly found at helix-breaking turns and loops."
  },
  {
    id: 17,
    question: "In antiparallel β-sheets, the hydrogen bonds between strands are:",
    options: [
      "Perpendicular to the strand direction, same spacing as parallel sheets",
      "Directly across from each other, roughly perpendicular to the strand direction",
      "Offset at an angle, more evenly spaced than parallel sheets",
      "Absent; antiparallel sheets are stabilized by hydrophobic interactions"
    ],
    answer: 1,
    explanation: "In antiparallel β-sheets, H-bonds between N–H and C=O groups of adjacent strands are roughly perpendicular to the strand direction and nearly linear (more favorable geometry). This makes antiparallel β-sheets more stable than parallel β-sheets, which have less linear, offset H-bonds."
  },
  {
    id: 18,
    question: "The Anfinsen experiment with ribonuclease A demonstrated that:",
    options: [
      "Protein folding requires chaperone proteins",
      "The amino acid sequence contains all information necessary for folding",
      "Disulfide bonds must form before the protein can fold",
      "Denaturation is always irreversible"
    ],
    answer: 1,
    explanation: "Anfinsen showed that denatured, reduced ribonuclease A could spontaneously refold into its fully active native conformation upon removal of denaturant and reoxidation. This demonstrated that the primary sequence encodes all the information for tertiary structure — the 'thermodynamic hypothesis' of protein folding."
  },
  {
    id: 19,
    question: "The major driving force for protein folding in aqueous solution is:",
    options: [
      "Formation of hydrogen bonds within the polypeptide",
      "The hydrophobic effect — burial of nonpolar residues",
      "Formation of disulfide bridges",
      "Electrostatic interactions between charged residues"
    ],
    answer: 1,
    explanation: "The hydrophobic effect is the primary thermodynamic driving force for protein folding. Burial of hydrophobic residues in the protein core releases ordered water molecules surrounding them, increasing entropy of the solvent. Hydrogen bonds, disulfide bonds, and electrostatic interactions stabilize the folded structure but are not the primary driving force."
  },
  {
    id: 20,
    question: "Molecular chaperones such as Hsp70 assist protein folding by:",
    options: [
      "Providing steric information to guide folding into the correct conformation",
      "Preventing premature aggregation by binding exposed hydrophobic regions",
      "Covalently modifying proteins to stabilize their structure",
      "Directly catalyzing the formation of peptide bonds"
    ],
    answer: 1,
    explanation: "Hsp70 (and other chaperones) bind to hydrophobic regions of newly synthesized or partially folded polypeptides, preventing their aggregation. They do not directly catalyze folding but provide a protected environment and time for the protein to achieve its correct conformation in an ATP-dependent manner."
  },
  {
    id: 21,
    question: "The GroEL/GroES chaperonin system differs from Hsp70 in that it:",
    options: [
      "Does not require ATP",
      "Encapsulates the substrate protein in a chamber for folding",
      "Only functions in the cytoplasm of prokaryotes",
      "Prevents disulfide bond formation"
    ],
    answer: 1,
    explanation: "GroEL (Hsp60 family) forms a barrel-shaped complex with a central cavity. GroES acts as a lid. The substrate protein is encapsulated in the GroEL cavity, creating an isolated environment that prevents aggregation and allows folding. ATP hydrolysis drives conformational changes that release the folded protein."
  },
  {
    id: 22,
    question: "Which of the following post-translational modifications is responsible for targeting a protein to the endoplasmic reticulum lumen for glycosylation?",
    options: [
      "Phosphorylation of serine residues",
      "N-terminal signal sequence cleavage after ER insertion",
      "Ubiquitination of lysine residues",
      "Myristoylation of glycine residues"
    ],
    answer: 1,
    explanation: "Proteins destined for the ER, secretory pathway, or plasma membrane contain an N-terminal signal sequence that directs the ribosome to the ER membrane. After translocation into the ER lumen, the signal peptide is cleaved by signal peptidase, and the protein undergoes N-linked glycosylation."
  },
  {
    id: 23,
    question: "N-linked glycosylation of proteins occurs on which amino acid residue and at which consensus sequence?",
    options: [
      "Serine, at Ser-X-Thr sequences",
      "Asparagine, at Asn-X-Ser/Thr sequences (where X is not Pro)",
      "Threonine, at Thr-X-Asn sequences",
      "Lysine, at any accessible lysine residue"
    ],
    answer: 1,
    explanation: "N-linked glycosylation occurs on asparagine residues within the sequon Asn-X-Ser/Thr, where X can be any amino acid except proline. This modification occurs in the ER and is important for protein folding, stability, and cell-surface recognition."
  },
  {
    id: 24,
    question: "Phosphorylation of proteins by kinases typically occurs on which amino acids in eukaryotes?",
    options: [
      "Aspartate, glutamate, and histidine",
      "Serine, threonine, and tyrosine",
      "Lysine, arginine, and histidine",
      "Cysteine, methionine, and tryptophan"
    ],
    answer: 1,
    explanation: "In eukaryotes, the most common phosphorylation sites are hydroxyl-containing amino acids: serine (most common), threonine, and tyrosine. These are phosphorylated by Ser/Thr kinases and Tyr kinases, respectively. Phosphorylation reversibly regulates protein activity, localization, and interactions."
  },
  {
    id: 25,
    question: "Ubiquitination of proteins primarily targets them for:",
    options: [
      "Secretion via the classical secretory pathway",
      "Degradation by the 26S proteasome",
      "Nuclear import through nuclear pore complexes",
      "Membrane anchoring via lipid modification"
    ],
    answer: 1,
    explanation: "Polyubiquitination (attachment of a chain of ubiquitin molecules linked through Lys48 of ubiquitin) marks proteins for degradation by the 26S proteasome. Monoubiquitination and Lys63-linked chains serve other functions such as endocytosis, DNA repair, and signaling."
  },
  {
    id: 26,
    question: "In the context of protein quaternary structure, hemoglobin is best described as a:",
    options: [
      "Monomer with a single polypeptide chain",
      "Homodimer with two identical subunits",
      "Heterotetramer with two α and two β subunits",
      "Heterodimer with one α and one β subunit"
    ],
    answer: 2,
    explanation: "Adult hemoglobin (HbA) is a heterotetramer consisting of two α-globin and two β-globin subunits (α2β2). Quaternary structure allows cooperative oxygen binding (positive cooperativity) via the T-state (deoxy) to R-state (oxy) conformational transition."
  },
  {
    id: 27,
    question: "Which amino acid is solely responsible for forming disulfide bonds in protein tertiary/quaternary structure?",
    options: ["Methionine", "Serine", "Cysteine", "Threonine"],
    answer: 2,
    explanation: "Disulfide bonds form between the thiol (-SH) groups of two cysteine residues through oxidation. These covalent S–S bonds stabilize protein structure and are particularly important for extracellular proteins and secreted proteins exposed to oxidizing environments."
  },
  {
    id: 28,
    question: "The Bohr effect in hemoglobin refers to:",
    options: [
      "Increased O2 affinity at high CO2 and low pH",
      "Decreased O2 affinity at high CO2 and low pH",
      "Cooperative binding of O2 to hemoglobin",
      "Preferential binding of CO over O2"
    ],
    answer: 1,
    explanation: "The Bohr effect describes the decrease in oxygen affinity of hemoglobin at lower pH (higher H+ and CO2) — conditions found in metabolically active tissues. This facilitates O2 release in tissues. CO2 binds to the N-terminal amino groups of globin chains (forming carbaminohemoglobin), further stabilizing the T-state."
  },
  {
    id: 29,
    question: "2,3-Bisphosphoglycerate (2,3-BPG) affects hemoglobin oxygen affinity by:",
    options: [
      "Binding to the α subunits and increasing O2 affinity",
      "Binding to the central cavity of deoxyhemoglobin and stabilizing the T-state",
      "Competing with O2 at the iron-containing heme group",
      "Covalently modifying histidine residues to reduce cooperativity"
    ],
    answer: 1,
    explanation: "2,3-BPG binds in the central cavity of deoxyhemoglobin (T-state), forming electrostatic interactions with positively charged residues on β-subunits. This stabilizes the T-state and decreases O2 affinity, facilitating O2 delivery to tissues. Fetal hemoglobin (HbF) has γ-subunits with lower affinity for 2,3-BPG, allowing preferential O2 uptake from maternal blood."
  },
  {
    id: 30,
    question: "Myoglobin, unlike hemoglobin, displays which of the following kinetic properties?",
    options: [
      "Sigmoidal oxygen-binding curve due to cooperativity",
      "Hyperbolic oxygen-binding curve with no cooperativity",
      "Allosteric regulation by 2,3-BPG",
      "Bohr effect sensitivity to pH changes"
    ],
    answer: 1,
    explanation: "Myoglobin is a monomeric protein with a single heme group and shows simple hyperbolic O2 binding kinetics (follows Michaelis-Menten-like behavior, Hill coefficient = 1). It has higher O2 affinity than hemoglobin at physiological O2 tensions, enabling it to accept O2 from hemoglobin and store it in muscle tissue."
  },
  {
    id: 31,
    question: "Which type of non-covalent interaction is most important for stabilizing the hydrophobic core of a globular protein?",
    options: [
      "Hydrogen bonds between backbone amide groups",
      "Van der Waals interactions and the hydrophobic effect",
      "Ionic bonds between oppositely charged residues",
      "Disulfide bonds between cysteine residues"
    ],
    answer: 1,
    explanation: "The hydrophobic core of globular proteins is stabilized primarily by the hydrophobic effect (entropy-driven burial of nonpolar side chains) and van der Waals packing interactions between tightly packed hydrophobic residues. These are the dominant forces maintaining tertiary structure."
  },
  {
    id: 32,
    question: "Protein denaturation by urea or guanidinium chloride acts primarily by:",
    options: [
      "Breaking covalent peptide bonds",
      "Disrupting hydrogen bonds and hydrophobic interactions",
      "Oxidizing cysteine residues to form disulfide bonds",
      "Chelating metal cofactors from metalloenzymes"
    ],
    answer: 1,
    explanation: "Urea and guanidinium chloride are chaotropic agents that disrupt the hydrophobic effect and compete for hydrogen bonds, causing protein unfolding. They do not break covalent bonds. At high concentrations (6–8 M urea), they fully denature most proteins to a random coil state."
  },
  {
    id: 33,
    question: "The concept of 'protein folding funnel' in the energy landscape theory predicts that:",
    options: [
      "Proteins fold through a single specific pathway of sequential intermediates",
      "Folding occurs through an ensemble of pathways converging toward the native state",
      "All proteins fold through obligate molten globule intermediates",
      "Chaperones provide the energy to guide folding against the thermodynamic gradient"
    ],
    answer: 1,
    explanation: "The energy landscape (folding funnel) model proposes that proteins fold through many parallel pathways, each representing different conformational routes. The funnel shape indicates that the native state has the lowest free energy. This contrasts with the Levinthal paradox, which shows random searching of conformational space is not feasible."
  },
  {
    id: 34,
    question: "Prion diseases are caused by a conformational change in the prion protein (PrP) from:",
    options: [
      "α-helix-rich PrPc to β-sheet-rich PrPsc",
      "β-sheet-rich PrPc to α-helix-rich PrPsc",
      "Unfolded PrPc to α-helical PrPsc",
      "Glycosylated PrPc to unglycosylated PrPsc"
    ],
    answer: 0,
    explanation: "The normal cellular prion protein (PrPc) is predominantly α-helical, while the disease-causing scrapie isoform (PrPsc) is rich in β-sheets. PrPsc acts as a template to convert normal PrPc to PrPsc in a self-propagating manner, causing protein aggregation and neurodegeneration."
  },
  {
    id: 35,
    question: "Which of the following statements about enzyme active sites is most accurate?",
    options: [
      "Active sites are rigid clefts complementary to the substrate's shape",
      "Active sites are flexible and undergo induced-fit conformational changes upon substrate binding",
      "Active sites contain only hydrophobic residues to exclude water",
      "Active sites bind substrate through covalent interactions exclusively"
    ],
    answer: 1,
    explanation: "The induced-fit model (Koshland, 1958) proposes that substrate binding induces conformational changes in the enzyme, improving complementarity. This is more accurate than the original lock-and-key model. Active sites typically exclude water to lower the dielectric constant and contain diverse residues (charged, polar, nonpolar) necessary for catalysis."
  },
  {
    id: 36,
    question: "Feedback inhibition of a biosynthetic pathway most commonly involves inhibition of:",
    options: [
      "The last enzyme in the pathway by the initial substrate",
      "The first committed step by the end product",
      "All enzymes in the pathway simultaneously by the end product",
      "The rate-limiting enzyme by an intermediate of the pathway"
    ],
    answer: 1,
    explanation: "Feedback (end-product) inhibition classically involves the end product of a biosynthetic pathway inhibiting the first committed (and usually allosteric) enzyme of that pathway. This elegantly conserves resources by shutting down production when the product is abundant."
  },
  {
    id: 37,
    question: "Which of the following correctly describes the MWC (Monod-Wyman-Changeux) concerted model of allosteric regulation?",
    options: [
      "All subunits transition between T and R states independently",
      "All subunits change conformation simultaneously (concertedly) between T and R states",
      "Subunits transition sequentially from T to R state upon ligand binding",
      "Only one subunit changes conformation, triggering dissociation of the complex"
    ],
    answer: 1,
    explanation: "The MWC concerted model postulates that all subunits of an allosteric protein exist in either all-T (tense, low affinity) or all-R (relaxed, high affinity) state simultaneously — mixed states are not allowed. Ligand binding shifts the equilibrium toward the R state. The sequential model (KNF) allows mixed states."
  },
  {
    id: 38,
    question: "An enzyme that requires a metal ion (such as Zn2+ or Mg2+) for catalytic activity, where the metal is tightly bound, is said to be a:",
    options: ["Apoenzyme", "Holoenzyme with a coenzyme", "Metalloenzyme", "Allosteric enzyme"],
    answer: 2,
    explanation: "Metalloenzymes contain tightly (often permanently) bound metal ions as prosthetic groups that are essential for catalysis. Examples include carbonic anhydrase (Zn2+), carboxypeptidase (Zn2+), and nitrogenase (Fe-Mo). Apoenzyme lacks its cofactor; holoenzyme has its cofactor bound."
  },
  {
    id: 39,
    question: "Covalent catalysis in enzymes involves:",
    options: [
      "Stabilization of the transition state without forming a covalent bond",
      "Transient formation of a covalent intermediate between enzyme and substrate",
      "Metal ion coordination to lower the energy of the substrate",
      "General acid/base donation of protons to the substrate"
    ],
    answer: 1,
    explanation: "Covalent catalysis involves the formation of a transient covalent intermediate between a nucleophilic residue on the enzyme and the substrate, lowering the activation energy. Examples include the acyl-enzyme intermediate in serine proteases, and the Schiff base intermediate in transaminases."
  },
  {
    id: 40,
    question: "The transition state analog inhibitors are effective enzyme inhibitors because they:",
    options: [
      "Resemble the substrate and compete for the active site",
      "Mimic the transition state and bind the active site with much higher affinity than substrate",
      "Covalently modify the catalytic residues permanently",
      "Bind to the allosteric site and change the enzyme's conformation"
    ],
    answer: 1,
    explanation: "Transition state analogs are stable molecules that mimic the geometry and charge of the reaction transition state. Since enzymes are specifically evolved to bind the transition state very tightly (stabilizing it), transition state analogs bind with extremely high affinity (often 10^6-fold higher than substrate), making them potent competitive inhibitors."
  },
  {
    id: 41,
    question: "Which of the following is an example of irreversible enzyme inhibition?",
    options: [
      "Malonate inhibition of succinate dehydrogenase",
      "Diisopropylphosphofluoridate (DIPF) inhibition of acetylcholinesterase",
      "ATP inhibition of phosphofructokinase",
      "Oxaloacetate inhibition of citrate synthase"
    ],
    answer: 1,
    explanation: "DIPF (and nerve agents like sarin) covalently phosphorylate the active-site serine of acetylcholinesterase, forming a stable phosphoserine that cannot be regenerated. Malonate is a reversible competitive inhibitor of succinate dehydrogenase (resembles succinate). ATP and oxaloacetate are reversible allosteric or product inhibitors."
  },
  {
    id: 42,
    question: "The collagen triple helix structure requires glycine at every third position because:",
    options: [
      "Glycine provides hydrophobic interactions to stabilize the helix",
      "Only glycine's H side chain is small enough to fit in the interior of the triple helix",
      "Glycine's carboxyl group forms hydrogen bonds with hydroxyproline",
      "Glycine facilitates the formation of disulfide bonds between chains"
    ],
    answer: 1,
    explanation: "In the collagen triple helix (Gly-X-Y repeating sequence), glycine must occupy every third position because the interior of the triple helix is extremely sterically restricted. Only glycine, with a single hydrogen as its side chain (R group), can fit. The triple helix is stabilized by interchain hydrogen bonds and hydroxyproline-mediated water bridges."
  },
  {
    id: 43,
    question: "Protein SUMOylation differs from ubiquitination in that it primarily:",
    options: [
      "Targets proteins to the proteasome for degradation",
      "Regulates protein localization, transcription, and DNA repair without targeting for degradation",
      "Occurs on the same lysine residues with identical E1-E2-E3 cascade",
      "Requires the same SUMO E1 activating enzyme as ubiquitin"
    ],
    answer: 1,
    explanation: "SUMOylation (attachment of Small Ubiquitin-like Modifier) primarily regulates protein-protein interactions, nuclear-cytoplasmic transport, transcriptional regulation, and DNA damage response. Unlike ubiquitination, it does not generally target proteins for proteasomal degradation, though it uses a similar enzymatic cascade (E1-E2-E3)."
  },
  {
    id: 44,
    question: "The concept of 'intrinsically disordered proteins' (IDPs) challenges which classical model of protein structure-function?",
    options: [
      "The fluid mosaic model of membranes",
      "The structure-function paradigm that requires a defined 3D structure for function",
      "The central dogma of molecular biology",
      "The induced-fit model of enzyme-substrate interaction"
    ],
    answer: 1,
    explanation: "IDPs lack a stable tertiary structure under physiological conditions yet are fully functional. This challenges the classical paradigm that a well-defined 3D structure is prerequisite for function. IDPs are common in signaling, transcription, and regulation, and often undergo coupled folding and binding upon interacting with partners."
  },
  {
    id: 45,
    question: "In the context of enzyme kinetics, a substrate concentration of 9 × Km would result in a reaction velocity that is what fraction of Vmax?",
    options: ["0.5 Vmax", "0.75 Vmax", "0.9 Vmax", "0.99 Vmax"],
    answer: 2,
    explanation: "Using v = Vmax × [S]/(Km + [S]) with [S] = 9Km: v = Vmax × 9Km/(Km + 9Km) = Vmax × 9/10 = 0.9 Vmax. To reach 0.99 Vmax, [S] must equal 99 × Km. This demonstrates why it is practically difficult to measure Vmax directly — very high substrate concentrations are needed."
  },
  {
    id: 46,
    question: "Acetylation of histones at lysine residues is generally associated with:",
    options: [
      "Chromatin compaction and gene silencing",
      "Chromatin relaxation and transcriptional activation",
      "Formation of heterochromatin",
      "DNA methylation at CpG sites"
    ],
    answer: 1,
    explanation: "Histone acetylation at lysine residues neutralizes the positive charge of histones, reducing their affinity for negatively charged DNA. This relaxes chromatin structure (euchromatin), making genes more accessible for transcription. Histone deacetylases (HDACs) reverse this modification, promoting gene silencing."
  },
  {
    id: 47,
    question: "Which of the following correctly describes a GPI (glycosylphosphatidylinositol) anchor?",
    options: [
      "A transmembrane domain that anchors proteins to the inner leaflet",
      "A lipid modification that anchors proteins to the outer leaflet of the plasma membrane",
      "A phosphorylation modification that regulates protein membrane association",
      "A signal sequence that targets proteins to mitochondria"
    ],
    answer: 1,
    explanation: "GPI anchors are glycolipid modifications attached to the C-terminus of certain proteins, anchoring them to the outer leaflet of the plasma membrane. GPI-anchored proteins are found in lipid rafts and include decay-accelerating factor (DAF/CD55) and prion protein (PrPc)."
  },
  {
    id: 48,
    question: "The Km value for an enzyme is best described as:",
    options: [
      "Always equal to the dissociation constant (Kd) of the enzyme-substrate complex",
      "The substrate concentration at half-maximal velocity, which reflects affinity only when k2 << k-1",
      "A constant that is independent of temperature and pH",
      "Directly proportional to the catalytic rate constant kcat"
    ],
    answer: 1,
    explanation: "Km = (k-1 + k2)/k1. It equals Kd (k-1/k1) only when k2 (catalysis) is much smaller than k-1 (substrate dissociation), i.e., when the ES complex breaks down to product much more slowly than it dissociates. In general, Km is an approximation of substrate affinity, not a true dissociation constant."
  },
  {
    id: 49,
    question: "Protein amyloid fibrils associated with neurodegenerative diseases (e.g., Alzheimer's, Parkinson's) are characterized by:",
    options: [
      "α-helical structure stabilized by side-chain interactions",
      "Cross-β structure with β-strands perpendicular to the fibril axis",
      "Disordered random coil regions prone to aggregation",
      "Native-like tertiary structure with exposed hydrophobic patches"
    ],
    answer: 1,
    explanation: "Amyloid fibrils have a characteristic cross-β structure: β-strands run perpendicular to the fibril axis and hydrogen-bond parallel to the axis, forming a spine of stacked β-sheets. X-ray fiber diffraction shows characteristic reflections at 4.7 Å (inter-strand spacing) and ~10 Å (inter-sheet spacing). This structure is extremely stable and resistant to proteolysis."
  },
  {
    id: 50,
    question: "Which of the following inhibition patterns on a Lineweaver-Burk plot is characteristic of mixed (non-competitive) inhibition where α ≠ α'?",
    options: [
      "Parallel lines with the same slope",
      "Lines intersecting on the x-axis (same x-intercept)",
      "Lines intersecting to the left of the y-axis but not on the x-axis",
      "Lines intersecting on the y-axis (same y-intercept)"
    ],
    answer: 2,
    explanation: "In mixed inhibition, the inhibitor binds both free enzyme and ES complex with different affinities (α ≠ α'). On a Lineweaver-Burk plot, lines intersect to the left of the y-axis but not on the x-axis (unlike pure non-competitive inhibition, where they intersect exactly on the x-axis). Both Vmax and Km are altered."
  }
];

export default questions;
