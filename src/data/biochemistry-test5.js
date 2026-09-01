const questions = [
  {
    id: 1,
    question: "The fluid mosaic model of membrane structure proposes that membrane proteins are:",
    options: [
      "Covalently bonded to phospholipids in a rigid bilayer",
      "Embedded in or associated with a fluid phospholipid bilayer and free to move laterally",
      "Located exclusively on the extracellular face of the membrane",
      "Uniformly distributed and immobile at physiological temperature"
    ],
    answer: 1,
    explanation: "The fluid mosaic model (Singer & Nicolson, 1972) describes the membrane as a fluid phospholipid bilayer in which proteins are embedded (integral) or associated (peripheral) and can move laterally unless constrained. The lipid bilayer is fluid at physiological temperature, allowing lateral diffusion of both lipids and proteins."
  },
  {
    id: 2,
    question: "Which property of membrane lipids is primarily responsible for maintaining membrane fluidity at low temperatures?",
    options: [
      "High proportion of saturated fatty acids",
      "High proportion of unsaturated (cis) fatty acids",
      "Presence of sphingomyelin",
      "Long-chain fatty acid tails"
    ],
    answer: 1,
    explanation: "Cis-unsaturated fatty acids introduce kinks in the acyl chains, preventing tight packing of phospholipids and thereby maintaining membrane fluidity at lower temperatures. Saturated fatty acids allow tighter packing, increasing rigidity. Cholesterol has a more complex modulatory role."
  },
  {
    id: 3,
    question: "Cholesterol modulates membrane fluidity by:",
    options: [
      "Increasing fluidity at all temperatures uniformly",
      "Decreasing fluidity at low temperatures and increasing rigidity at high temperatures",
      "Buffering membrane fluidity — reducing fluidity at high temperature and preventing rigidity at low temperature",
      "Acting as a second messenger to regulate membrane protein activity"
    ],
    answer: 2,
    explanation: "Cholesterol acts as a fluidity buffer. Its rigid sterol ring interferes with fatty acid chain movement at high temperatures (reducing fluidity), while at low temperatures it prevents tight lipid packing that would otherwise lead to gel-phase transition, thus maintaining fluidity."
  },
  {
    id: 4,
    question: "Glycophorin A in the erythrocyte membrane is an example of:",
    options: [
      "A peripheral membrane protein",
      "A lipid-anchored protein via GPI linkage",
      "A type I single-pass transmembrane protein",
      "A monotopic membrane protein"
    ],
    answer: 2,
    explanation: "Glycophorin A is a type I single-pass transmembrane glycoprotein with its N-terminus on the extracellular side and C-terminus on the cytoplasmic side. It carries the MN blood group antigens and is one of the best-characterized transmembrane proteins."
  },
  {
    id: 5,
    question: "The movement of glucose into erythrocytes via GLUT1 is an example of:",
    options: [
      "Primary active transport",
      "Secondary active transport (symport)",
      "Facilitated diffusion",
      "Simple diffusion"
    ],
    answer: 2,
    explanation: "GLUT1 mediates facilitated diffusion of glucose down its concentration gradient without energy expenditure. It is a uniporter that undergoes conformational changes to transport glucose, but does not couple transport to ion gradients or ATP hydrolysis."
  },
  {
    id: 6,
    question: "The Na⁺/K⁺-ATPase pump maintains the resting membrane potential by:",
    options: [
      "Pumping 2 Na⁺ out and 3 K⁺ in per ATP hydrolyzed, creating a net positive charge inside",
      "Pumping 3 Na⁺ out and 2 K⁺ in per ATP hydrolyzed, making the inside more negative",
      "Pumping equal amounts of Na⁺ and K⁺ in opposite directions",
      "Using the Na⁺ gradient to drive K⁺ into the cell passively"
    ],
    answer: 1,
    explanation: "Na⁺/K⁺-ATPase is an electrogenic pump that moves 3 Na⁺ ions out and 2 K⁺ ions into the cell per ATP hydrolyzed. The net export of one positive charge per cycle contributes to the negative resting membrane potential and maintains the electrochemical gradients essential for excitability."
  },
  {
    id: 7,
    question: "Secondary active transport of glucose in intestinal epithelial cells uses:",
    options: [
      "The ATP gradient to drive glucose uptake directly",
      "The Na⁺ electrochemical gradient (created by Na⁺/K⁺-ATPase) to co-transport glucose via SGLT1",
      "The H⁺ gradient to drive glucose in via a proton-coupled transporter",
      "The K⁺ gradient to antiport with glucose via a K⁺/glucose exchanger"
    ],
    answer: 1,
    explanation: "SGLT1 (sodium-glucose co-transporter 1) is a symporter that uses the inward Na⁺ electrochemical gradient, maintained by basolateral Na⁺/K⁺-ATPase, to drive glucose uptake against its concentration gradient. This is secondary active transport because ATP is used indirectly to maintain the Na⁺ gradient."
  },
  {
    id: 8,
    question: "Ion channels differ from carrier proteins in that ion channels:",
    options: [
      "Require ATP hydrolysis for ion movement",
      "Form a continuous aqueous pore through which ions diffuse without a conformational change for each ion",
      "Transport ions against their electrochemical gradients",
      "Can only transport one ion at a time with high selectivity"
    ],
    answer: 1,
    explanation: "Ion channels form water-filled pores that allow ions to diffuse through without the carrier undergoing a conformational change for each ion transported. This results in much higher throughput rates (10⁶–10⁸ ions/sec) compared to carriers (~10²–10⁴ molecules/sec), and the process is passive, driven by electrochemical gradients."
  },
  {
    id: 9,
    question: "The selectivity filter of voltage-gated K⁺ channels achieves K⁺ selectivity over Na⁺ by:",
    options: [
      "Size exclusion — the pore is too small for Na⁺ to enter",
      "Providing carbonyl oxygen ligands that coordinate K⁺ at the correct geometry, substituting for its hydration shell, while Na⁺ is too small to coordinate optimally",
      "Electrostatic repulsion of Na⁺ at the pore entrance",
      "Preferential binding of K⁺ to charged residues in the transmembrane domain"
    ],
    answer: 1,
    explanation: "The selectivity filter of K⁺ channels uses backbone carbonyl oxygens arranged to precisely mimic the hydration shell of K⁺, allowing energetically favorable dehydration and passage. Na⁺, being smaller, cannot position optimally within the filter, making passage energetically unfavorable — thus achieving >1000:1 selectivity for K⁺ over Na⁺."
  },
  {
    id: 10,
    question: "Aquaporins facilitate water transport across membranes by:",
    options: [
      "Active transport using ATP hydrolysis",
      "Co-transport with Na⁺ ions",
      "Forming hydrophilic channels that exclude ions and protons while allowing water passage",
      "Simple diffusion through the lipid bilayer"
    ],
    answer: 2,
    explanation: "Aquaporins form hour-glass shaped tetrameric channels with a central pore that conducts water molecules in single file. Key features include NPA (asparagine-proline-alanine) motifs and an electrostatic barrier that excludes protons, preventing dissipation of the proton gradient while allowing rapid water flux."
  },
  {
    id: 11,
    question: "In G-protein coupled receptor (GPCR) signaling, the α-subunit of the heterotrimeric G-protein becomes active when:",
    options: [
      "It binds GTP and dissociates from the βγ subunits",
      "It binds GDP and associates with the βγ subunits",
      "It is phosphorylated by a receptor kinase",
      "It binds to adenylyl cyclase directly without GTP exchange"
    ],
    answer: 0,
    explanation: "Upon receptor activation, the Gα subunit exchanges GDP for GTP (facilitated by the receptor acting as a GEF), causing a conformational change that releases Gα-GTP from the βγ dimer. Both Gα-GTP and freed Gβγ can then interact with downstream effectors. The signal terminates when intrinsic GTPase activity of Gα hydrolyzes GTP to GDP."
  },
  {
    id: 12,
    question: "Adenylyl cyclase is activated by Gαs and inhibited by Gαi. The Gαi subunit inhibits adenylyl cyclase by:",
    options: [
      "Activating phosphodiesterase to degrade cAMP",
      "Directly binding to and inhibiting adenylyl cyclase in its GTP-bound form",
      "Sequestering Gαs in an inactive complex",
      "Phosphorylating and inactivating adenylyl cyclase"
    ],
    answer: 1,
    explanation: "Gαi-GTP directly binds to adenylyl cyclase and inhibits its catalytic activity, reducing cAMP production. This is distinct from phosphodiesterase-mediated cAMP degradation. Pertussis toxin ADP-ribosylates Gαi and prevents its activation, a tool used to dissect Gαi-mediated pathways."
  },
  {
    id: 13,
    question: "cAMP activates Protein Kinase A (PKA) by:",
    options: [
      "Binding to the catalytic subunits and stabilizing an active conformation",
      "Binding to the regulatory subunits, causing their dissociation from the catalytic subunits",
      "Allosterically inhibiting the regulatory subunits without dissociation",
      "Phosphorylating the catalytic subunits to activate them"
    ],
    answer: 1,
    explanation: "PKA holoenzyme consists of two regulatory (R) and two catalytic (C) subunits. Each R subunit has two cAMP-binding domains. Binding of 4 cAMP molecules (2 per R subunit) causes conformational changes that release active C subunits, which then phosphorylate serine/threonine residues on target proteins."
  },
  {
    id: 14,
    question: "Phospholipase C-β (PLC-β) is activated by Gαq-coupled receptors. Its primary substrates and products are:",
    options: [
      "Phosphatidylcholine → diacylglycerol (DAG) + choline phosphate",
      "Phosphatidylinositol 4,5-bisphosphate (PIP₂) → inositol 1,4,5-trisphosphate (IP₃) + diacylglycerol (DAG)",
      "Phosphatidylserine → ceramide + serine",
      "Phosphatidylinositol → inositol monophosphate + diacylglycerol"
    ],
    answer: 1,
    explanation: "PLC-β cleaves the phosphodiester bond of PIP₂ to generate two second messengers: IP₃ (water-soluble, diffuses to ER to trigger Ca²⁺ release via IP₃ receptors) and DAG (membrane-bound, activates Protein Kinase C). This dual second messenger system amplifies signals via both Ca²⁺ and PKC pathways."
  },
  {
    id: 15,
    question: "The role of IP₃ (inositol 1,4,5-trisphosphate) in signal transduction is to:",
    options: [
      "Activate Protein Kinase C directly",
      "Open IP₃-gated Ca²⁺ channels on the endoplasmic reticulum membrane",
      "Inhibit cAMP phosphodiesterase, prolonging PKA activity",
      "Activate adenylyl cyclase to increase cAMP production"
    ],
    answer: 1,
    explanation: "IP₃ diffuses from the plasma membrane to the ER, where it binds to IP₃ receptors (ligand-gated Ca²⁺ channels) on the ER membrane, triggering Ca²⁺ release into the cytosol. The resulting Ca²⁺ rise activates various effectors including calmodulin, PKC (in concert with DAG), and CaM kinases."
  },
  {
    id: 16,
    question: "Receptor Tyrosine Kinases (RTKs) are activated by growth factors through:",
    options: [
      "Proteolytic cleavage of the extracellular domain upon ligand binding",
      "Ligand-induced dimerization (or oligomerization) leading to transphosphorylation of the cytoplasmic kinase domains",
      "Activation of associated trimeric G-proteins that subsequently activate a cytoplasmic tyrosine kinase",
      "Ligand-induced internalization and nuclear translocation of the receptor"
    ],
    answer: 1,
    explanation: "Most RTKs exist as monomers and dimerize upon ligand binding (some like EGFR undergo conformational changes promoting dimerization). Dimerization brings the cytoplasmic kinase domains together, enabling transphosphorylation of tyrosine residues in the activation loop and other sites, creating docking sites for SH2 domain-containing signaling proteins."
  },
  {
    id: 17,
    question: "The Ras GTPase in RTK signaling is activated by the adaptor complex:",
    options: [
      "Grb2-SOS, where SOS acts as a GEF to exchange GDP for GTP on Ras",
      "Grb2-GAP, where GAP activates Ras by inhibiting its GTPase activity",
      "Shc-PI3K, where PI3K directly activates Ras",
      "PLC-γ–PKC cascade that phosphorylates and activates Ras"
    ],
    answer: 0,
    explanation: "Activated RTKs recruit the adaptor protein Grb2 (via its SH2 domain) and the guanine nucleotide exchange factor SOS (via Grb2's SH3 domains). SOS catalyzes GDP→GTP exchange on Ras, activating it. Ras-GTP then activates the MAP kinase cascade (Raf→MEK→ERK). RasGAP terminates the signal by stimulating GTP hydrolysis."
  },
  {
    id: 18,
    question: "Insulin signaling through the insulin receptor (IR) leads to glucose uptake in muscle/adipose tissue primarily by:",
    options: [
      "Increasing transcription of the GLUT4 gene",
      "Activating PKA, which phosphorylates and activates GLUT4",
      "Triggering translocation of GLUT4-containing vesicles from intracellular stores to the plasma membrane via PI3K/Akt pathway",
      "Opening voltage-gated Ca²⁺ channels that trigger GLUT4 exocytosis"
    ],
    answer: 2,
    explanation: "Insulin receptor autophosphorylation leads to IRS-1 phosphorylation, which recruits PI3K. PI3K generates PIP₃, activating PDK1, which phosphorylates and activates Akt (PKB). Akt phosphorylates AS160 (a RabGAP), releasing its inhibition of Rab proteins, thereby triggering GLUT4 vesicle translocation to the plasma membrane for rapid glucose uptake."
  },
  {
    id: 19,
    question: "Phosphoinositide 3-kinase (PI3K) generates PIP₃ (phosphatidylinositol 3,4,5-trisphosphate). The lipid phosphatase PTEN opposes PI3K by:",
    options: [
      "Inhibiting PI3K kinase activity directly",
      "Dephosphorylating PIP₃ at the 3-position to regenerate PIP₂",
      "Activating phosphodiesterase to degrade cAMP",
      "Dephosphorylating Akt to inactivate it"
    ],
    answer: 1,
    explanation: "PTEN (Phosphatase and Tensin homolog) is a dual-specificity phosphatase that primarily acts as a lipid phosphatase, converting PIP₃ back to PIP₂ by removing the 3-phosphate. This directly antagonizes PI3K activity and suppresses downstream Akt signaling. PTEN is a major tumor suppressor frequently mutated in human cancers."
  },
  {
    id: 20,
    question: "Which second messenger directly activates Protein Kinase C (PKC)?",
    options: [
      "cAMP alone",
      "IP₃ alone",
      "Diacylglycerol (DAG) in conjunction with Ca²⁺ and phosphatidylserine",
      "cGMP alone"
    ],
    answer: 2,
    explanation: "Classical PKC isoforms require DAG (membrane-bound), Ca²⁺, and phosphatidylserine for activation. DAG is generated by PLC from PIP₂ and recruits PKC to the membrane. Phorbol esters (tumor promoters like TPA/PMA) are DAG analogs that constitutively activate PKC by mimicking DAG."
  },
  {
    id: 21,
    question: "Nitric oxide (NO) acts as a signaling molecule by:",
    options: [
      "Binding to cell surface receptors to activate G-proteins",
      "Directly activating soluble guanylyl cyclase to increase cGMP levels",
      "Inhibiting adenylyl cyclase to decrease cAMP levels",
      "Activating PLC to generate IP₃ and DAG"
    ],
    answer: 1,
    explanation: "NO, synthesized by nitric oxide synthase (NOS) from arginine, is lipid-soluble and diffuses across membranes. It binds to the heme group of soluble guanylyl cyclase, activating it to convert GTP to cGMP. cGMP activates PKG (Protein Kinase G), leading to smooth muscle relaxation and vasodilation."
  },
  {
    id: 22,
    question: "The JAK-STAT signaling pathway is activated by cytokine receptors that lack intrinsic kinase activity. Signaling proceeds by:",
    options: [
      "Receptor dimerization → activation of associated JAK kinases → JAK-mediated phosphorylation of STAT proteins → STAT dimerization and nuclear translocation",
      "Receptor activation of Ras → ERK cascade → phosphorylation of STAT proteins",
      "cAMP-mediated activation of PKA → PKA phosphorylates JAK kinases",
      "Receptor endocytosis → lysosomal activation of JAK kinases → retrograde signaling"
    ],
    answer: 0,
    explanation: "Cytokine binding causes receptor dimerization, bringing associated JAK kinases into proximity. JAKs transphosphorylate each other (activation), then phosphorylate tyrosine residues on the receptor. STAT proteins are recruited via their SH2 domains, phosphorylated by JAKs, dimerize, and translocate to the nucleus to activate gene transcription."
  },
  {
    id: 23,
    question: "Signal transduction via β-adrenergic receptors leading to cardiac muscle contraction involves the following sequence:",
    options: [
      "Epinephrine → Gαi → decreased cAMP → PKA activation → phospholamban phosphorylation → decreased Ca²⁺",
      "Epinephrine → Gαs → increased cAMP → PKA activation → phosphorylation of L-type Ca²⁺ channels & phospholamban → increased Ca²⁺ and contractility",
      "Epinephrine → Gαq → PLC activation → IP₃ → Ca²⁺ release → PKC activation → contraction",
      "Epinephrine → direct activation of L-type Ca²⁺ channels without second messenger involvement"
    ],
    answer: 1,
    explanation: "β₁-adrenergic receptors in cardiac muscle couple to Gαs. Increased cAMP activates PKA, which phosphorylates L-type Ca²⁺ channels (increasing Ca²⁺ influx), ryanodine receptors (increasing Ca²⁺ release), and phospholamban (relieving inhibition of SERCA, increasing Ca²⁺ reuptake for faster relaxation). Net effect: increased heart rate and contractility (positive chronotropy and inotropy)."
  },
  {
    id: 24,
    question: "Receptor desensitization of GPCRs involves:",
    options: [
      "Downregulation of G-protein levels by transcriptional repression",
      "GRK (G-protein coupled receptor kinase)-mediated phosphorylation of the activated receptor, followed by β-arrestin binding that sterically hinders G-protein coupling",
      "Receptor proteolysis by membrane-associated proteases upon prolonged activation",
      "Competitive inhibition of the receptor by endogenous antagonists released during prolonged signaling"
    ],
    answer: 1,
    explanation: "Upon sustained activation, GRKs phosphorylate serine/threonine residues on the intracellular loops/C-tail of the activated GPCR. This recruits β-arrestin, which sterically uncouples the receptor from G-proteins, terminating signaling (desensitization). β-arrestin also targets the receptor for clathrin-mediated endocytosis (internalization/downregulation)."
  },
  {
    id: 25,
    question: "The Wnt signaling pathway maintains β-catenin stability in the 'Wnt-ON' state by:",
    options: [
      "Activating the destruction complex (APC/Axin/GSK-3β/CK1) to phosphorylate β-catenin",
      "Inhibiting the destruction complex via Dishevelled, preventing GSK-3β-mediated phosphorylation and degradation of β-catenin",
      "Activating β-TrCP ubiquitin ligase to stabilize β-catenin",
      "Promoting nuclear export of β-catenin via Frizzled receptor activation"
    ],
    answer: 1,
    explanation: "In the absence of Wnt, the destruction complex (APC, Axin, GSK-3β, CK1) phosphorylates β-catenin, marking it for ubiquitination and proteasomal degradation. Wnt binding to Frizzled/LRP5/6 receptors activates Dishevelled, which inhibits the destruction complex. Unphosphorylated β-catenin accumulates, translocates to the nucleus, and activates Wnt target gene transcription with TCF/LEF."
  },
  {
    id: 26,
    question: "Which lipid raft component is critical for organizing signaling complexes at the plasma membrane?",
    options: [
      "Phosphatidylglycerol and cardiolipin",
      "Cholesterol and sphingomyelin, which form ordered liquid phase (Lo) microdomains enriched in GPI-anchored proteins and acylated signaling proteins",
      "Phosphatidylinositol and phosphatidylserine in equal proportions",
      "Lysophospholipids generated by phospholipase A2 activity"
    ],
    answer: 1,
    explanation: "Lipid rafts are cholesterol- and sphingomyelin-enriched membrane microdomains that form a liquid-ordered (Lo) phase distinct from the surrounding disordered (Ld) phase. They preferentially concentrate GPI-anchored proteins, palmitoylated/myristoylated proteins, and Src family kinases, serving as platforms for assembling signaling complexes and receptor clustering."
  },
  {
    id: 27,
    question: "The multipass transmembrane topology of the Na⁺/K⁺-ATPase α-subunit is best described as:",
    options: [
      "A single α-helix spanning the membrane once",
      "Ten transmembrane helices with cytoplasmic N and C termini, with the phosphorylation domain and ATP-binding domain on the cytoplasmic side",
      "A β-barrel structure spanning the membrane, similar to bacterial porins",
      "Eight transmembrane helices with the nucleotide binding domain on the extracellular face"
    ],
    answer: 1,
    explanation: "The Na⁺/K⁺-ATPase α-subunit (catalytic subunit) has 10 transmembrane helices (M1–M10). Its large cytoplasmic domains include the phosphorylation domain (aspartate 369 phosphorylated during the reaction cycle), the nucleotide-binding domain, and the actuator domain. The transmembrane helices M4, M5, M6, M8 contribute to ion coordination sites."
  },
  {
    id: 28,
    question: "Cross-talk between the cAMP and PKC pathways occurs when PKC phosphorylates and activates certain adenylyl cyclase isoforms. Which adenylyl cyclase isoform is specifically INHIBITED by Ca²⁺/calmodulin?",
    options: [
      "AC1 and AC8 (stimulated by Ca²⁺/CaM)",
      "AC5 and AC6 (inhibited by Ca²⁺)",
      "AC2 and AC4 (stimulated by Gβγ)",
      "AC7 (inhibited by PKC phosphorylation)"
    ],
    answer: 1,
    explanation: "Adenylyl cyclase isoforms show tissue-specific expression and differential regulation. AC5 and AC6 are expressed predominantly in the heart and are inhibited by elevated Ca²⁺ concentrations. In contrast, AC1 and AC8 (brain) are stimulated by Ca²⁺/CaM. This isoform-specific regulation allows integration of different signaling inputs."
  },
  {
    id: 29,
    question: "Phosphodiesterases (PDEs) are key regulators of second messenger signaling because they:",
    options: [
      "Synthesize cAMP and cGMP from ATP and GTP respectively",
      "Degrade cAMP to 5'-AMP and cGMP to 5'-GMP, thereby terminating PKA and PKG signaling",
      "Phosphorylate and activate downstream kinases in the cAMP pathway",
      "Convert IP₃ to inositol by sequential dephosphorylation"
    ],
    answer: 1,
    explanation: "PDEs are a superfamily of enzymes (PDE1–PDE11) that hydrolyze the 3'-5' phosphodiester bond of cyclic nucleotides to generate inactive linear 5'-nucleotides. Sildenafil inhibits PDE5 (cGMP-specific in vascular smooth muscle), prolonging cGMP/PKG signaling and vasodilation. Caffeine inhibits PDEs, explaining its stimulatory effects via elevated cAMP."
  },
  {
    id: 30,
    question: "The EGF receptor (EGFR/ErbB1) after activation is internalized via clathrin-mediated endocytosis. The fate of the internalized receptor is determined by:",
    options: [
      "pH of the lysosome exclusively",
      "Ubiquitination of the receptor (mediated by Cbl E3 ligase) which directs it to lysosomal degradation rather than recycling",
      "Phosphorylation by Src kinase, which directs the receptor to the nucleus",
      "Dephosphorylation by receptor phosphatases, which is required for recycling"
    ],
    answer: 1,
    explanation: "Activated EGFR is ubiquitinated by the E3 ubiquitin ligase c-Cbl (recruited to the receptor via Grb2). Ubiquitinated receptors are recognized by the ESCRT machinery and sorted into multivesicular bodies (MVBs) for lysosomal degradation, resulting in receptor downregulation. Non-ubiquitinated receptors can be recycled back to the plasma membrane."
  },
  {
    id: 31,
    question: "Gap junctions allow direct intercellular communication by:",
    options: [
      "Fusing the lipid bilayers of adjacent cells to allow free diffusion of all cytoplasmic contents",
      "Forming connexin hexamer channels (connexons) that align between adjacent cells, allowing passage of ions and small molecules (<1 kDa) directly between cytoplasms",
      "Using transport vesicles to shuttle signaling molecules between cells",
      "Creating aqueous channels selective only for Ca²⁺ ions between adjacent cells"
    ],
    answer: 1,
    explanation: "Gap junctions are composed of connexin proteins; 6 connexins form a connexon (hemichannel), and two connexons from adjacent cells align to form a complete channel. These channels allow passage of ions, cAMP, IP₃, Ca²⁺, and metabolites (<1 kDa) directly between cells, enabling electrical coupling and metabolic cooperation. They are regulated by pH and Ca²⁺."
  },
  {
    id: 32,
    question: "The P-glycoprotein (MDR1/ABCB1) represents which type of membrane transport mechanism?",
    options: [
      "Facilitated diffusion uniporter",
      "Secondary active transporter (antiporter)",
      "Primary active transporter — ATP-binding cassette (ABC) transporter that uses ATP hydrolysis to efflux drugs from cells",
      "Voltage-gated ion channel"
    ],
    answer: 2,
    explanation: "P-glycoprotein is an ABC transporter that uses ATP hydrolysis to actively pump hydrophobic drugs and toxins out of cells. It is a major mediator of multidrug resistance (MDR) in cancer cells. The protein has two nucleotide-binding domains (NBDs) that hydrolyze ATP and two transmembrane domains that form the drug translocation pathway."
  },
  {
    id: 33,
    question: "Calmodulin (CaM) mediates Ca²⁺ signaling by:",
    options: [
      "Acting as a Ca²⁺ channel in the plasma membrane",
      "Binding four Ca²⁺ ions via EF-hand motifs, undergoing conformational change to expose hydrophobic regions that interact with and activate target proteins",
      "Directly phosphorylating target proteins upon Ca²⁺ binding",
      "Sequestering Ca²⁺ to reduce its cytoplasmic concentration and terminate signaling"
    ],
    answer: 1,
    explanation: "Calmodulin contains four EF-hand Ca²⁺-binding motifs (two per globular domain). Binding of Ca²⁺ causes conformational exposure of hydrophobic binding surfaces (methionine-rich regions) that interact with basic amphipathic helices in target proteins. CaM-Ca²⁺ activates CaM kinases (CaMKII), myosin light chain kinase, neuronal NOS, and phosphodiesterase 1."
  },
  {
    id: 34,
    question: "The TGF-β signaling pathway signals through:",
    options: [
      "GPCRs coupled to Gαs, activating adenylyl cyclase and cAMP production",
      "Receptor serine/threonine kinases (type I and type II) that phosphorylate SMAD proteins, which then form complexes and translocate to the nucleus",
      "Receptor tyrosine kinases that activate the Ras/MAPK cascade",
      "Non-receptor tyrosine kinases of the JAK family that phosphorylate STAT proteins"
    ],
    answer: 1,
    explanation: "TGF-β binds TβRII (constitutively active serine/threonine kinase), which recruits and transphosphorylates TβRI. Activated TβRI phosphorylates R-SMADs (SMAD2/3), which complex with Co-SMAD (SMAD4) and translocate to the nucleus to regulate transcription. I-SMADs (SMAD6/7) provide negative feedback. TGF-β pathway is tumor suppressive in normal cells but pro-metastatic in advanced cancers."
  },
  {
    id: 35,
    question: "Which component of GPCR signaling is directly inhibited by cholera toxin?",
    options: [
      "Gαi by ADP-ribosylation, preventing GDP/GTP exchange",
      "Gαs by ADP-ribosylation of Arg201, preventing GTP hydrolysis and constitutively activating adenylyl cyclase",
      "Phosphodiesterase, preventing cAMP degradation",
      "β-arrestin, preventing GPCR desensitization"
    ],
    answer: 1,
    explanation: "Cholera toxin (CT) ADP-ribosylates Arg201 of Gαs, which is required for GTP hydrolysis. This prevents the intrinsic GTPase activity, locking Gαs in the GTP-bound (active) state. The result is constitutive adenylyl cyclase activation, massive cAMP production in intestinal epithelial cells, PKA-mediated CFTR activation, and chloride/water secretion causing the characteristic 'rice-water' diarrhea."
  },
  {
    id: 36,
    question: "Asymmetry of the plasma membrane lipid bilayer is maintained by:",
    options: [
      "Spontaneous flip-flop of phospholipids driven by thermodynamic equilibrium",
      "Flippases (P4-ATPases) that actively transport aminophospholipids (PS, PE) to the inner leaflet, while scramblases randomize distribution upon activation (e.g., platelet activation)",
      "Integral membrane proteins that physically prevent phospholipid movement between leaflets",
      "Covalent cross-linking of phospholipids in the inner leaflet to the cytoskeleton"
    ],
    answer: 1,
    explanation: "Membrane asymmetry is actively maintained: flippases (aminophospholipid translocases, P4-ATPases) use ATP to move PS and PE from the outer to inner leaflet; floppases (ABCCs) move lipids outward; scramblases (activated by Ca²⁺ during apoptosis and platelet activation) randomize distribution. Exposure of PS on the outer leaflet serves as an 'eat-me' signal in apoptosis and promotes blood coagulation."
  },
  {
    id: 37,
    question: "The second messenger cGMP signals through:",
    options: [
      "Direct activation of voltage-gated Ca²⁺ channels only",
      "Protein Kinase G (PKG), cyclic nucleotide-gated (CNG) channels, and PDE2/3 (which are stimulated by cGMP to degrade cAMP), mediating smooth muscle relaxation and photoreception",
      "Protein Kinase A exclusively, sharing the same effector as cAMP",
      "Direct activation of phospholipase C to generate IP₃ and DAG"
    ],
    answer: 1,
    explanation: "cGMP has multiple effectors: PKG (mediates NO/cGMP-induced smooth muscle relaxation by phosphorylating myosin phosphatase and MLCK), cyclic nucleotide-gated channels (CNG, in rod photoreceptors and olfactory neurons), and phosphodiesterases (PDE2/3 stimulated by cGMP affect cAMP levels). In retinal rods, cGMP keeps CNG channels open in the dark; light activates phosphodiesterase, lowering cGMP and closing channels."
  },
  {
    id: 38,
    question: "Receptor tyrosine kinase signaling through the MAPK/ERK pathway follows the sequence:",
    options: [
      "RTK → PLC-γ → IP₃/DAG → PKC → MEK → ERK",
      "RTK → Grb2/SOS → Ras-GTP → Raf (MAPKKK) → MEK (MAPKK) → ERK (MAPK) → nuclear transcription factors",
      "RTK → PI3K → PIP₃ → PDK1 → Akt → mTORC1 → ERK",
      "RTK → JAK → STAT → ERK → transcription"
    ],
    answer: 1,
    explanation: "The canonical MAPK/ERK cascade: RTK activation → Grb2 recruitment → SOS activation → Ras-GTP → Raf-1 kinase activation → MEK (dual-specificity kinase) phosphorylates ERK1/2 on Thr and Tyr → active ERK phosphorylates cytoplasmic substrates and translocates to nucleus to phosphorylate transcription factors (Elk-1, c-Fos, c-Jun), driving proliferation and differentiation."
  },
  {
    id: 39,
    question: "The concept of 'spare receptors' in pharmacology means that:",
    options: [
      "A cell has more receptors than it needs for survival, providing redundancy",
      "Maximal biological response can be achieved when only a fraction of total receptors are occupied by agonist, because the signal amplification in the transduction cascade is sufficient",
      "Spare receptors are non-functional receptors held in reserve for conditions of high demand",
      "The cell synthesizes extra receptors to compensate for receptor desensitization"
    ],
    answer: 1,
    explanation: "Spare receptors (receptor reserve) describe the phenomenon where maximal tissue response is achieved at submaximal receptor occupancy, because the downstream signaling cascade amplifies the signal. The EC₅₀ for the agonist effect is lower than the Kd for receptor binding. This concept explains why partial agonists may produce submaximal responses despite full receptor occupancy."
  },
  {
    id: 40,
    question: "GPI-anchored proteins are attached to the outer leaflet of the plasma membrane through:",
    options: [
      "A single transmembrane helix with a palmitoylated cytoplasmic domain",
      "A glycosylphosphatidylinositol (GPI) anchor linked via ethanolamine-phosphate to the protein's C-terminus, inserted into the outer leaflet",
      "A myristoyl group attached to the N-terminal glycine residue",
      "A prenyl (farnesyl or geranylgeranyl) group attached to a C-terminal CAAX motif"
    ],
    answer: 1,
    explanation: "GPI anchors are synthesized in the ER and added to proteins post-translationally. The GPI anchor consists of phosphatidylinositol embedded in the outer membrane leaflet, connected via a glycan core (glucosamine, three mannoses) and ethanolamine-phosphate to the protein's C-terminus. GPI-anchored proteins (CD55, CD59, prion protein, Thy-1) concentrate in lipid rafts and can be cleaved by phospholipase C."
  },
  {
    id: 41,
    question: "In the photoreceptor signaling cascade (phototransduction), the G-protein transducin (Gt) activates:",
    options: [
      "Adenylyl cyclase to increase cAMP, opening CNG channels",
      "Phospholipase C to generate IP₃ and DAG, causing hyperpolarization",
      "Phosphodiesterase 6 (PDE6) to hydrolyze cGMP, closing CNG channels and hyperpolarizing the cell",
      "Guanylyl cyclase to increase cGMP, opening CNG channels"
    ],
    answer: 2,
    explanation: "Light activates rhodopsin → rhodopsin activates transducin (Gαt-GTP) → Gαt activates PDE6 → PDE6 hydrolyzes cGMP → [cGMP] drops → CNG channels close → K⁺ channels continue efflux → membrane hyperpolarizes → decreased glutamate release from rod → signal to bipolar cells. Recovery involves rhodopsin kinase phosphorylation, arrestin binding, and guanylyl cyclase restoring cGMP."
  },
  {
    id: 42,
    question: "The Notch signaling pathway is unique because the 'second messenger' is:",
    options: [
      "cAMP generated after Notch receptor activation of adenylyl cyclase",
      "The Notch intracellular domain (NICD) itself, released by γ-secretase cleavage upon Delta/Jagged ligand binding",
      "IP₃ generated by Notch receptor-associated PLC activity",
      "β-catenin translocated to the nucleus after Notch activates Dishevelled"
    ],
    answer: 1,
    explanation: "Notch signaling requires juxtacrine cell-cell contact. Delta/Jagged on adjacent cell binds Notch → ectodomain shedding (ADAM protease) → γ-secretase (presenilin) cleaves the transmembrane domain → releases NICD (Notch Intracellular Domain) → NICD translocates to nucleus → forms complex with CSL/RBPJ → converts CSL from repressor to activator → transcribes Hes/Hey genes. Abnormal γ-secretase or Notch mutations cause disease."
  },
  {
    id: 43,
    question: "The concept of receptor tyrosine kinase 'scaffolding' by IRS-1 (Insulin Receptor Substrate-1) involves:",
    options: [
      "IRS-1 acting as an enzymatic amplifier of the insulin signal by phosphorylating multiple downstream substrates",
      "IRS-1 being phosphorylated on multiple tyrosines by the insulin receptor, creating docking sites for SH2 domain-containing proteins (PI3K, Grb2, SHP2) to assemble a signaling complex",
      "IRS-1 directing receptor internalization by clathrin-coated pit formation",
      "IRS-1 acting as a competitive inhibitor of the insulin receptor kinase at high insulin concentrations"
    ],
    answer: 1,
    explanation: "IRS-1 is a docking/scaffolding protein that lacks enzymatic activity but contains a PTB domain (binds the phosphorylated NPEY motif in the insulin receptor) and multiple tyrosine phosphorylation sites (YMXM, YXXM motifs). When phosphorylated by IR, these sites recruit multiple SH2-containing proteins simultaneously, amplifying and diversifying the signal into multiple pathways (PI3K→Akt, Grb2→Ras/MAPK)."
  },
  {
    id: 44,
    question: "Heterologous desensitization of GPCRs differs from homologous desensitization in that:",
    options: [
      "Heterologous desensitization requires β-arrestin, while homologous does not",
      "Heterologous desensitization is caused by second messenger-activated kinases (e.g., PKA, PKC) that phosphorylate and desensitize receptors regardless of whether they are activated, while homologous desensitization specifically targets occupied/activated receptors via GRKs",
      "Heterologous desensitization is irreversible, while homologous is reversible",
      "Homologous desensitization affects the entire receptor population, while heterologous affects only occupied receptors"
    ],
    answer: 1,
    explanation: "Homologous desensitization is receptor-specific: GRKs phosphorylate only agonist-occupied (active) receptors, causing β-arrestin recruitment and uncoupling. Heterologous desensitization is non-specific: second-messenger kinases (PKA, PKC) activated by one GPCR can phosphorylate and desensitize many GPCR subtypes (whether occupied or not), providing cross-pathway inhibition. This explains why stimulating one pathway can reduce responsiveness of an unrelated receptor."
  },
  {
    id: 45,
    question: "The Na⁺/Ca²⁺ exchanger (NCX) in cardiac muscle cells operates as a:",
    options: [
      "Primary active transporter using ATP hydrolysis to export Ca²⁺",
      "Electrogenic antiporter that exchanges 3 Na⁺ for 1 Ca²⁺, using the Na⁺ gradient to export Ca²⁺ during relaxation",
      "Symporter that co-transports Na⁺ and Ca²⁺ in the same direction",
      "Passive uniporter that allows Ca²⁺ to diffuse down its gradient"
    ],
    answer: 1,
    explanation: "NCX1 is the primary Ca²⁺ extrusion mechanism in cardiac muscle (SERCA being the main Ca²⁺ removal into SR). It electrogenically exchanges 3 Na⁺ for 1 Ca²⁺ (net inward current), using the Na⁺ electrochemical gradient (maintained by Na⁺/K⁺-ATPase) as the driving force. During cardiac action potential early depolarization, NCX can briefly run in reverse (Ca²⁺ influx) due to reversed Na⁺ gradient, contributing to Ca²⁺-induced Ca²⁺ release."
  },
  {
    id: 46,
    question: "Membrane potential (Vm) is determined primarily by the Goldman equation, which considers:",
    options: [
      "Only the Na⁺ and K⁺ concentration gradients",
      "The relative permeabilities and concentration gradients of all permeable ions (Na⁺, K⁺, Cl⁻), with high K⁺ permeability at rest making Vm close to the K⁺ equilibrium potential",
      "Only the activity of the Na⁺/K⁺-ATPase pump",
      "Only the charge difference created by fixed anionic proteins inside the cell"
    ],
    answer: 1,
    explanation: "The Goldman-Hodgkin-Katz equation calculates Vm as a weighted average of individual ion equilibrium potentials, with weights proportional to relative permeabilities. At rest, membranes are most permeable to K⁺ (via leak channels), so Vm ≈ EK (around -90 mV in neurons). During action potential peak, Na⁺ permeability exceeds K⁺, pulling Vm toward ENa (+60 mV)."
  },
  {
    id: 47,
    question: "Scaffolding proteins in signal transduction pathways (e.g., KSR in the MAPK cascade) function by:",
    options: [
      "Providing enzymatic amplification of signals by acting as kinases",
      "Physically assembling multiple components of a signaling cascade in proximity, increasing efficiency, specificity, and signal fidelity while preventing unwanted cross-talk",
      "Anchoring receptors to the extracellular matrix to enhance ligand binding",
      "Acting as second messengers that shuttle between the receptor and effectors"
    ],
    answer: 1,
    explanation: "Scaffold proteins (KSR, IQGAP, A-kinase anchoring proteins/AKAPs) tether multiple kinases or signaling components together. KSR (Kinase Suppressor of Ras) brings Raf, MEK, and ERK into a complex, ensuring efficient sequential phosphorylation and preventing ERK from phosphorylating off-target substrates. AKAPs anchor PKA near its substrates, creating spatial specificity in cAMP signaling."
  },
  {
    id: 48,
    question: "The phosphatidylserine (PS) externalization that occurs during apoptosis serves as:",
    options: [
      "A 'stay-me' signal that prevents macrophage recognition",
      "An 'eat-me' signal recognized by phosphatidylserine receptors on phagocytes, facilitating immunologically silent engulfment of apoptotic cells",
      "A trigger for complement activation and inflammatory response",
      "A signal for necrosis and cell lysis"
    ],
    answer: 1,
    explanation: "In normal cells, PS is confined to the inner leaflet by flippase activity. During apoptosis, scramblase activation (by caspase-3-mediated cleavage) randomizes leaflet distribution, exposing PS on the outer leaflet. PS is recognized by phagocyte receptors (TIM4, BAI1, Stabilin-2) and bridging molecules (Annexin V, Gas6), triggering efferocytosis. Importantly, this engulfment is immunologically silent (anti-inflammatory), unlike necrotic cell death."
  },
  {
    id: 49,
    question: "In the mTORC1 signaling pathway, amino acids regulate mTORC1 activity by:",
    options: [
      "Directly binding and activating the mTOR kinase domain",
      "Activating the Rag GTPases (RagA/B-RagC/D heterodimers) that recruit mTORC1 to lysosomes where Rheb-GTP (activated by amino acids through lysosomal sensing) activates mTORC1",
      "Inhibiting TSC1/TSC2, releasing Rheb from inhibition without lysosomal recruitment",
      "Activating PI3K to generate PIP₃, which recruits mTORC1 to the plasma membrane"
    ],
    answer: 1,
    explanation: "Amino acid sensing occurs primarily at the lysosome. Amino acids activate the Ragulator complex → activates Rag GTPases (RagA/B in GTP state, RagC/D in GDP state) → active Rag heterodimers recruit mTORC1 to the lysosomal surface → lysosome-associated Rheb-GTP (whose abundance reflects insulin/growth factor signals via TSC) activates mTORC1. This dual requirement (amino acids via Rags + growth factors via Rheb) ensures mTORC1 integrates multiple anabolic signals."
  },
  {
    id: 50,
    question: "Which statement correctly describes the concept of 'signal amplification' in the GPCR-cAMP-PKA cascade?",
    options: [
      "Signal amplification occurs because each receptor activates only one G-protein molecule, but the cAMP produced activates millions of PKA molecules",
      "One hormone-receptor complex can activate multiple G-protein molecules; each activated adenylyl cyclase generates many cAMP molecules; each PKA molecule phosphorylates many substrates — creating a ~10⁶-fold amplification from receptor to response",
      "Signal amplification is achieved by increasing receptor expression at the cell surface",
      "Amplification occurs only at the effector enzyme level, not at the receptor-G-protein step"
    ],
    answer: 1,
    explanation: "Signal amplification in GPCR cascades is multiplicative at each step: one ligand-receptor complex activates ~10–100 G-proteins; each adenylyl cyclase molecule generates ~1000 cAMP molecules per second; 4 cAMP activate one PKA complex releasing 2 catalytic subunits, each phosphorylating ~1000 substrates per minute. Overall, a single hormone molecule can produce ~10⁶ phosphorylated product molecules per minute, explaining hormonal action at picomolar-nanomolar concentrations."
  }
];

export default questions;
