const questions = [
  {
    id: 1,
    question: "Which enzyme catalyzes the rate-limiting (committed) step of glycolysis and is allosterically inhibited by ATP, citrate, and H+?",
    options: ["Hexokinase", "Phosphoglucose isomerase", "Phosphofructokinase-1 (PFK-1)", "Pyruvate kinase"],
    answer: 2,
    explanation: "PFK-1 catalyzes the phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate, the first committed and irreversible step of glycolysis. It is allosterically inhibited by ATP (high energy charge), citrate (TCA cycle intermediate), and H+ (acidosis), and activated by AMP, ADP, and fructose-2,6-bisphosphate."
  },
  {
    id: 2,
    question: "Fructose-2,6-bisphosphate (F-2,6-BP) is a potent allosteric activator of PFK-1. Its cellular concentration is regulated by:",
    options: [
      "Direct phosphorylation by PFK-1 itself",
      "A bifunctional enzyme (PFK-2/FBPase-2) whose activity is regulated by glucagon via PKA",
      "Allosteric regulation by ATP and AMP directly",
      "Transcriptional regulation of PFK-1 gene expression"
    ],
    answer: 1,
    explanation: "PFK-2/FBPase-2 is a bifunctional enzyme: its kinase activity synthesizes F-2,6-BP and its phosphatase activity degrades it. Glucagon activates PKA, which phosphorylates this bifunctional enzyme, activating FBPase-2 and inhibiting PFK-2 — lowering F-2,6-BP and slowing glycolysis while promoting gluconeogenesis in the liver."
  },
  {
    id: 3,
    question: "During anaerobic glycolysis in muscle, the regeneration of NAD+ from NADH is accomplished by:",
    options: [
      "The malate-aspartate shuttle",
      "Lactate dehydrogenase converting pyruvate to lactate",
      "Reduction of acetyl-CoA to acetate",
      "The glycerol-3-phosphate shuttle"
    ],
    answer: 1,
    explanation: "Under anaerobic conditions, lactate dehydrogenase (LDH) reduces pyruvate to lactate while oxidizing NADH to NAD+. This regeneration of NAD+ is essential to allow glycolysis to continue producing ATP. Lactate is then transported to the liver (Cori cycle) for gluconeogenesis."
  },
  {
    id: 4,
    question: "The net ATP yield from the complete oxidation of one molecule of glucose via glycolysis, pyruvate dehydrogenase, TCA cycle, and oxidative phosphorylation is approximately:",
    options: ["8 ATP", "20 ATP", "30–32 ATP", "38–40 ATP"],
    answer: 2,
    explanation: "Modern estimates give approximately 30–32 ATP per glucose (using P/O ratios of 2.5 for NADH and 1.5 for FADH2): glycolysis yields 2 ATP + 2 NADH; pyruvate dehydrogenase yields 2 NADH; TCA cycle yields 2 ATP + 6 NADH + 2 FADH2 per glucose. The older value of 36–38 ATP used outdated P/O ratios."
  },
  {
    id: 5,
    question: "Which of the following glycolytic enzymes catalyzes a substrate-level phosphorylation reaction?",
    options: [
      "Phosphoglycerate mutase",
      "Enolase",
      "Pyruvate kinase",
      "Triose phosphate isomerase"
    ],
    answer: 2,
    explanation: "Pyruvate kinase transfers the phosphate group from phosphoenolpyruvate (PEP) to ADP, forming pyruvate and ATP — a substrate-level phosphorylation. Another substrate-level phosphorylation in glycolysis is catalyzed by phosphoglycerate kinase (3-phosphoglycerate from 1,3-bisphosphoglycerate)."
  },
  {
    id: 6,
    question: "The pyruvate dehydrogenase complex (PDC) is inhibited by which of the following?",
    options: [
      "High AMP/ATP ratio and low NADH/NAD+ ratio",
      "High acetyl-CoA/CoA ratio and high NADH/NAD+ ratio",
      "Low pyruvate concentration and high CoA levels",
      "High ADP levels and low pyruvate concentration"
    ],
    answer: 1,
    explanation: "The PDC is feedback-inhibited by its products: acetyl-CoA (high acetyl-CoA/CoA ratio) and NADH (high NADH/NAD+ ratio). PDC kinase (activated by these products) phosphorylates and inactivates the E1 subunit. PDC phosphatase (activated by Ca2+ and insulin) reactivates it."
  },
  {
    id: 7,
    question: "In the TCA cycle, which step directly generates GTP (or ATP) via substrate-level phosphorylation?",
    options: [
      "Isocitrate → α-ketoglutarate (isocitrate dehydrogenase)",
      "Succinyl-CoA → succinate (succinyl-CoA synthetase)",
      "Fumarate → malate (fumarase)",
      "Malate → oxaloacetate (malate dehydrogenase)"
    ],
    answer: 1,
    explanation: "Succinyl-CoA synthetase catalyzes the conversion of succinyl-CoA to succinate, coupled to the phosphorylation of GDP (or ADP) to GTP (or ATP) — the only substrate-level phosphorylation in the TCA cycle. In the heart and skeletal muscle, the enzyme uses ADP to form ATP; in the liver, it uses GDP to form GTP."
  },
  {
    id: 8,
    question: "Which TCA cycle enzyme is directly inhibited by its own product and also by succinyl-CoA?",
    options: [
      "Citrate synthase",
      "Isocitrate dehydrogenase",
      "α-Ketoglutarate dehydrogenase",
      "Malate dehydrogenase"
    ],
    answer: 0,
    explanation: "Citrate synthase is inhibited by its product citrate and by succinyl-CoA (an indicator of TCA cycle intermediates being abundant). It is also inhibited by ATP and NADH. Regulation of citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase coordinately controls TCA flux."
  },
  {
    id: 9,
    question: "The anaplerotic reaction most important for replenishing TCA cycle intermediates in mammalian tissues involves:",
    options: [
      "Pyruvate + CO2 → oxaloacetate (pyruvate carboxylase)",
      "Acetyl-CoA + oxaloacetate → citrate (citrate synthase)",
      "Glutamate → α-ketoglutarate (glutamate dehydrogenase)",
      "Malate → pyruvate (malic enzyme)"
    ],
    answer: 0,
    explanation: "Pyruvate carboxylase (activated by acetyl-CoA) catalyzes the ATP-dependent carboxylation of pyruvate to oxaloacetate, the most important anaplerotic reaction in mammals. This replenishes OAA, ensuring the TCA cycle can continue to condense with acetyl-CoA even when intermediates are consumed for biosynthesis."
  },
  {
    id: 10,
    question: "The pentose phosphate pathway (PPP) is the major cellular source of:",
    options: [
      "ATP and NADH for oxidative metabolism",
      "NADPH and ribose-5-phosphate",
      "Pyruvate for the TCA cycle",
      "Acetyl-CoA for fatty acid synthesis"
    ],
    answer: 1,
    explanation: "The pentose phosphate pathway (also called the hexose monophosphate shunt) generates NADPH (for reductive biosynthesis and antioxidant defense) and ribose-5-phosphate (for nucleotide synthesis). The oxidative phase produces 2 NADPH per glucose-6-phosphate via glucose-6-phosphate dehydrogenase and 6-phosphogluconate dehydrogenase."
  },
  {
    id: 11,
    question: "Glucose-6-phosphate dehydrogenase (G6PD) deficiency causes hemolytic anemia primarily because:",
    options: [
      "Red blood cells cannot perform glycolysis to generate ATP",
      "NADPH deficiency impairs glutathione reduction, making RBCs vulnerable to oxidative damage",
      "Ribose-5-phosphate is unavailable for nucleotide synthesis in erythrocytes",
      "Glucose-6-phosphate accumulates and inhibits hexokinase"
    ],
    answer: 1,
    explanation: "G6PD deficiency reduces NADPH production in RBCs. NADPH is required to maintain glutathione (GSH) in its reduced form via glutathione reductase. Without GSH, reactive oxygen species (ROS) oxidize hemoglobin to methemoglobin and damage the RBC membrane, causing hemolysis upon oxidative stress (e.g., primaquine, fava beans)."
  },
  {
    id: 12,
    question: "In the non-oxidative phase of the pentose phosphate pathway, transketolase transfers which unit between sugar phosphates?",
    options: [
      "Three-carbon (triose) unit",
      "Two-carbon (glycolaldehyde) unit",
      "Four-carbon (erythrose) unit",
      "One-carbon unit"
    ],
    answer: 1,
    explanation: "Transketolase (requiring thiamine pyrophosphate, TPP, as cofactor) transfers a two-carbon glycolaldehyde unit from a ketose donor to an aldose acceptor. This reversible reaction links the PPP to glycolysis and allows the non-oxidative phase to interconvert various sugar phosphates depending on cellular needs."
  },
  {
    id: 13,
    question: "Gluconeogenesis from pyruvate requires bypassing which irreversible glycolytic steps?",
    options: [
      "Hexokinase, PFK-1, and pyruvate kinase reactions",
      "Pyruvate kinase, enolase, and phosphoglycerate kinase reactions",
      "Hexokinase, enolase, and phosphoglucose isomerase reactions",
      "PFK-1, aldolase, and triose phosphate isomerase reactions"
    ],
    answer: 0,
    explanation: "The three irreversible steps of glycolysis — hexokinase (glucose → G6P), PFK-1 (F6P → F1,6BP), and pyruvate kinase (PEP → pyruvate) — are bypassed in gluconeogenesis by glucose-6-phosphatase, fructose-1,6-bisphosphatase, and pyruvate carboxylase + PEPCK, respectively."
  },
  {
    id: 14,
    question: "Phosphoenolpyruvate carboxykinase (PEPCK) in gluconeogenesis catalyzes which reaction?",
    options: [
      "Pyruvate + CO2 + ATP → Oxaloacetate + ADP + Pi",
      "Oxaloacetate + GTP → Phosphoenolpyruvate + CO2 + GDP",
      "Malate + NADP+ → Pyruvate + CO2 + NADPH",
      "Fructose-1,6-bisphosphate → Fructose-6-phosphate + Pi"
    ],
    answer: 1,
    explanation: "PEPCK catalyzes the decarboxylation and phosphorylation of oxaloacetate (OAA) to phosphoenolpyruvate (PEP), using GTP as the phosphate donor and releasing CO2. This is a key step in bypassing the pyruvate kinase reaction during gluconeogenesis. PEPCK is induced by glucagon and cortisol, and suppressed by insulin."
  },
  {
    id: 15,
    question: "Biotin is an essential cofactor for which gluconeogenic enzyme?",
    options: [
      "PEPCK (phosphoenolpyruvate carboxykinase)",
      "Pyruvate carboxylase",
      "Fructose-1,6-bisphosphatase",
      "Glucose-6-phosphatase"
    ],
    answer: 1,
    explanation: "Pyruvate carboxylase requires biotin as a covalently attached prosthetic group (at a lysine residue). Biotin acts as a CO2 carrier — it is first carboxylated at the expense of ATP and bicarbonate, then transfers the carboxyl group to pyruvate to form oxaloacetate. Biotin deficiency impairs gluconeogenesis."
  },
  {
    id: 16,
    question: "The Cori cycle (glucose-lactate cycle) between muscle and liver serves which primary metabolic function?",
    options: [
      "Transfer of fatty acids from liver to muscle for β-oxidation",
      "Recycling of lactate produced by anaerobic muscle into glucose in the liver",
      "Transfer of ketone bodies from liver to muscle during fasting",
      "Shuttling of NADH reducing equivalents from cytoplasm to mitochondria"
    ],
    answer: 1,
    explanation: "In the Cori cycle, anaerobic muscle releases lactate into the blood. The liver takes up lactate, converts it to pyruvate via LDH, and then synthesizes glucose via gluconeogenesis. This glucose is released into the blood for muscle uptake. The cycle consumes ATP in the liver but sustains muscle function under anaerobic conditions."
  },
  {
    id: 17,
    question: "Glycogen synthesis requires UDP-glucose as the activated glucosyl donor. The enzyme that synthesizes UDP-glucose is:",
    options: [
      "Glycogen synthase",
      "UDP-glucose pyrophosphorylase (UGP)",
      "Phosphoglucomutase",
      "Branching enzyme"
    ],
    answer: 1,
    explanation: "UDP-glucose pyrophosphorylase (also called UTP-glucose-1-phosphate uridylyltransferase) catalyzes: Glucose-1-phosphate + UTP → UDP-glucose + PPi. The subsequent hydrolysis of pyrophosphate (PPi → 2Pi) by pyrophosphatase drives the reaction forward. UDP-glucose is then the substrate for glycogen synthase."
  },
  {
    id: 18,
    question: "Glycogen phosphorylase cleaves glycogen by which mechanism?",
    options: [
      "Hydrolysis using water to release glucose",
      "Phosphorolysis using inorganic phosphate to release glucose-1-phosphate",
      "Oxidative cleavage releasing gluconolactone",
      "Transamination releasing glucosamine-1-phosphate"
    ],
    answer: 1,
    explanation: "Glycogen phosphorylase cleaves α-1,4-glycosidic bonds by phosphorolysis — using inorganic phosphate (Pi) rather than water — to release glucose-1-phosphate. This is metabolically advantageous because glucose-1-phosphate (converted to G6P by phosphoglucomutase) enters glycolysis without consuming an ATP molecule, unlike free glucose which must first be phosphorylated by hexokinase."
  },
  {
    id: 19,
    question: "Glycogen phosphorylase exists in two forms: phosphorylase a (active) and phosphorylase b (less active). Conversion of phosphorylase b to phosphorylase a is catalyzed by:",
    options: [
      "Protein kinase A (PKA) directly phosphorylating phosphorylase",
      "Phosphorylase kinase, which is itself activated by PKA-mediated phosphorylation",
      "Protein phosphatase 1 (PP1) removing a phosphate group",
      "Calmodulin binding to phosphorylase b"
    ],
    answer: 1,
    explanation: "Glycogen phosphorylase b → a conversion involves phosphorylation of Ser14 by phosphorylase kinase. Phosphorylase kinase is itself activated by PKA phosphorylation (in response to glucagon/epinephrine) and by Ca2+ (via calmodulin subunit). PP1 reverses this by dephosphorylating phosphorylase a → b."
  },
  {
    id: 20,
    question: "The debranching enzyme in glycogen degradation has two activities: a transferase and a glucosidase. The α-1,6-glucosidase activity releases which product?",
    options: [
      "Glucose-1-phosphate",
      "Free glucose",
      "Glucose-6-phosphate",
      "UDP-glucose"
    ],
    answer: 1,
    explanation: "The debranching enzyme (amylo-1,6-glucosidase/4-α-glucanotransferase) first transfers three glucose residues from a branch to the main chain (transferase activity), then cleaves the single remaining α-1,6 branch point residue by hydrolysis to release free glucose. This is the only step in glycogen degradation that does NOT produce glucose-1-phosphate."
  },
  {
    id: 21,
    question: "Von Gierke disease (Type I glycogen storage disease) results from a deficiency of glucose-6-phosphatase. Which of the following would NOT be expected in this condition?",
    options: [
      "Hypoglycemia after fasting",
      "Hepatomegaly due to glycogen accumulation",
      "Lactic acidosis",
      "Decreased glycogen in liver and muscle"
    ],
    answer: 3,
    explanation: "Glucose-6-phosphatase deficiency impairs both gluconeogenesis and glycogenolysis (both require G6P → glucose) in the liver. This causes hypoglycemia, hepatomegaly from glycogen and fat accumulation, and lactic acidosis (lactate cannot be used for gluconeogenesis). Glycogen actually accumulates (not decreases) in the liver due to impaired export of glucose."
  },
  {
    id: 22,
    question: "The electron transport chain (ETC) in the inner mitochondrial membrane consists of how many major complexes, and which complex directly reduces oxygen to water?",
    options: [
      "Three complexes; Complex III reduces O2",
      "Four complexes; Complex IV (cytochrome c oxidase) reduces O2",
      "Four complexes; Complex III reduces O2",
      "Five complexes; Complex V reduces O2"
    ],
    answer: 1,
    explanation: "The ETC has four protein complexes (I-IV). Complex IV (cytochrome c oxidase) is the terminal oxidase that reduces O2 to water using electrons from reduced cytochrome c. Complex IV contains heme a, heme a3, and CuA/CuB metal centers that sequentially transfer electrons to O2."
  },
  {
    id: 23,
    question: "Ubiquinone (Coenzyme Q) is unique among ETC electron carriers because:",
    options: [
      "It is a protein-bound prosthetic group that cannot diffuse",
      "It is a lipid-soluble molecule that freely diffuses in the inner mitochondrial membrane, collecting electrons from multiple sources",
      "It carries only one electron at a time as a one-electron carrier",
      "It is located exclusively in the intermembrane space"
    ],
    answer: 1,
    explanation: "Coenzyme Q (CoQ/ubiquinone) is a lipophilic quinone that freely diffuses within the hydrophobic core of the inner mitochondrial membrane. It accepts electrons from Complex I (NADH), Complex II (FADH2), and other sources (e.g., ETF from fatty acid β-oxidation), serving as a mobile electron collector that feeds electrons to Complex III."
  },
  {
    id: 24,
    question: "Rotenone inhibits the electron transport chain at Complex I. What would be the immediate metabolic consequence?",
    options: [
      "Accumulation of FADH2 and depletion of NADH",
      "Accumulation of NADH and inhibition of TCA cycle flux",
      "Increased proton gradient and increased ATP synthesis",
      "Inhibition of Complex IV only"
    ],
    answer: 1,
    explanation: "Rotenone blocks electron transfer from Complex I to CoQ, preventing NADH oxidation. NADH accumulates, feedback-inhibiting the TCA cycle (isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, malate dehydrogenase are inhibited by high NADH). The proton gradient collapses as proton pumping by Complex I stops."
  },
  {
    id: 25,
    question: "The chemiosmotic theory (Mitchell hypothesis) proposes that ATP synthesis is driven by:",
    options: [
      "A direct chemical coupling between electron transfer and phosphorylation",
      "An electrochemical proton gradient (proton motive force) across the inner mitochondrial membrane",
      "Direct substrate-level phosphorylation similar to glycolysis",
      "Conformational changes in Complex IV transmitted directly to ATP synthase"
    ],
    answer: 1,
    explanation: "Peter Mitchell's chemiosmotic theory (Nobel Prize 1978) proposes that electron transport generates a proton gradient (proton motive force, PMF = ΔΨ + ΔpH) across the inner mitochondrial membrane by pumping H+ from matrix to intermembrane space. ATP synthase (Complex V) harnesses this gradient by allowing H+ to flow back into the matrix, driving ATP synthesis by rotary catalysis."
  },
  {
    id: 26,
    question: "ATP synthase (Complex V) synthesizes ATP by which mechanistic principle?",
    options: [
      "Direct transfer of the phosphoryl group from the proton gradient to ADP",
      "Rotary catalysis in which proton flow drives rotation of the γ-subunit, causing conformational changes in β-subunits",
      "A sequential phosphorylation cascade similar to protein kinases",
      "Facilitated diffusion of ATP from the matrix using the proton gradient as energy"
    ],
    answer: 1,
    explanation: "Paul Boyer's binding-change mechanism (Nobel Prize 1997) shows that the F1 portion of ATP synthase has three β-subunits cycling through O (open), L (loose, ADP+Pi bound), and T (tight, ATP synthesized) conformations. Proton flow through F0 drives rotation of the central γ-subunit, which in turn drives these conformational changes, catalyzing ATP synthesis."
  },
  {
    id: 27,
    question: "2,4-Dinitrophenol (DNP) is a chemical uncoupler of oxidative phosphorylation. Its mechanism involves:",
    options: [
      "Inhibiting ATP synthase directly by binding to the F1 subunit",
      "Carrying protons across the inner mitochondrial membrane, dissipating the proton gradient",
      "Blocking electron transfer at Complex III",
      "Inhibiting the ATP/ADP translocase"
    ],
    answer: 1,
    explanation: "DNP is a lipophilic weak acid that can diffuse across the inner mitochondrial membrane in both protonated (DNP-H) and deprotonated (DNP-) forms. It shuttles protons from the intermembrane space to the matrix, bypassing ATP synthase and dissipating the proton motive force as heat. Electron transport continues but ATP synthesis is uncoupled."
  },
  {
    id: 28,
    question: "The P/O ratio represents the number of ATP molecules synthesized per oxygen atom reduced. For NADH oxidation in the mitochondria, the current consensus P/O ratio is approximately:",
    options: ["1.0", "1.5", "2.5", "3.0"],
    answer: 2,
    explanation: "The current consensus P/O ratio for NADH is approximately 2.5 (not the older textbook value of 3.0). Complex I pumps 4H+, Complex III pumps 4H+, and Complex IV pumps 2H+ per pair of electrons from NADH, totaling 10H+. ATP synthase requires ~4H+ per ATP; 10H+/4H+ per ATP × 1 = 2.5 ATP (one H+ is also used for Pi import)."
  },
  {
    id: 29,
    question: "Thermogenin (UCP1) in brown adipose tissue (BAT) functions as a proton leak channel. Its physiological role is to:",
    options: [
      "Increase ATP synthesis efficiency in BAT",
      "Uncouple electron transport from ATP synthesis to generate heat (thermogenesis)",
      "Export fatty acids from BAT mitochondria",
      "Import ADP into BAT mitochondria for ATP synthesis"
    ],
    answer: 1,
    explanation: "UCP1 (uncoupling protein 1) is a proton transporter in the inner mitochondrial membrane of BAT. It allows protons to re-enter the matrix without driving ATP synthesis, dissipating the proton motive force as heat. This non-shivering thermogenesis is critical for temperature regulation in newborns and hibernating animals. UCP1 is activated by fatty acids and inhibited by GDP."
  },
  {
    id: 30,
    question: "Oligomycin, an antibiotic that inhibits ATP synthase (Complex V), would have which effect on the proton gradient?",
    options: [
      "Collapse the proton gradient by allowing proton backflow",
      "Increase the proton gradient because protons can no longer flow through ATP synthase",
      "Have no effect on the proton gradient but inhibit electron transport",
      "Decrease the proton gradient by stimulating Complex I activity"
    ],
    answer: 1,
    explanation: "Oligomycin blocks the F0 proton channel of ATP synthase, preventing proton re-entry into the matrix. Since protons continue to be pumped out by Complexes I, III, and IV but cannot flow back through ATP synthase, the proton gradient increases. This backpressure eventually slows electron transport (respiratory control). Uncouplers like DNP overcome oligomycin by providing an alternative proton pathway."
  },
  {
    id: 31,
    question: "The malate-aspartate shuttle, which transfers cytoplasmic NADH equivalents into the mitochondria, yields approximately how many ATP per NADH (compared to the glycerol-3-phosphate shuttle)?",
    options: [
      "Same as glycerol-3-phosphate shuttle: 1.5 ATP per NADH",
      "More than glycerol-3-phosphate shuttle: 2.5 ATP vs 1.5 ATP per NADH",
      "Fewer than glycerol-3-phosphate shuttle: 1.5 ATP vs 2.5 ATP per NADH",
      "Exactly the same: 2.5 ATP per NADH"
    ],
    answer: 1,
    explanation: "The malate-aspartate shuttle transfers reducing equivalents as NADH into the mitochondrial matrix, yielding ~2.5 ATP per cytoplasmic NADH. The glycerol-3-phosphate shuttle transfers electrons to FAD (Complex II level), producing FADH2 and yielding only ~1.5 ATP per cytoplasmic NADH. The malate-aspartate shuttle operates in heart, liver, and kidney; glycerol-3-phosphate shuttle in muscle and brain."
  },
  {
    id: 32,
    question: "During the TCA cycle, which enzyme is the site of regulation by Ca2+ ions (important during muscle contraction)?",
    options: [
      "Citrate synthase",
      "Isocitrate dehydrogenase and α-ketoglutarate dehydrogenase",
      "Succinate dehydrogenase",
      "Malate dehydrogenase"
    ],
    answer: 1,
    explanation: "Ca2+ ions (released during muscle contraction) directly activate isocitrate dehydrogenase and α-ketoglutarate dehydrogenase by binding to them, increasing TCA cycle flux to match the increased ATP demand. Pyruvate dehydrogenase phosphatase (which activates PDC) is also activated by Ca2+, providing coordinated regulation."
  },
  {
    id: 33,
    question: "The glucagon/insulin ratio is critical for regulating gluconeogenesis. In the fasted state (high glucagon, low insulin), which of the following correctly describes the regulatory events?",
    options: [
      "Glycogen synthesis is activated and PFK-2 kinase activity is stimulated",
      "PEPCK is induced, fructose-2,6-bisphosphate is decreased, and glycogen synthesis is inhibited",
      "Glucose uptake is increased and glycolysis is stimulated by F-2,6-BP",
      "Pyruvate kinase is dephosphorylated and fully active"
    ],
    answer: 1,
    explanation: "In the fasted state, glucagon activates PKA, which: (1) phosphorylates PFK-2/FBPase-2 bifunctional enzyme, decreasing F-2,6-BP and relieving PFK-1 activation; (2) phosphorylates and inactivates pyruvate kinase (liver isoform); (3) promotes transcription of PEPCK and other gluconeogenic genes via CREB; and (4) inhibits glycogen synthase."
  },
  {
    id: 34,
    question: "Which of the following correctly describes the outcome of the oxidative phase of the pentose phosphate pathway for 3 molecules of glucose-6-phosphate?",
    options: [
      "3 CO2, 3 ribulose-5-phosphate, 3 NADPH",
      "3 CO2, 3 ribulose-5-phosphate, 6 NADPH",
      "6 CO2, 3 pyruvate, 6 NADPH",
      "3 CO2, 3 glyceraldehyde-3-phosphate, 3 NADPH"
    ],
    answer: 1,
    explanation: "For each glucose-6-phosphate entering the oxidative phase: G6P → 6-phosphogluconolactone (1 NADPH) → 6-phosphogluconate → ribulose-5-phosphate + CO2 (1 NADPH). So per G6P: 1 CO2 + 1 ribulose-5-phosphate + 2 NADPH. For 3 G6P: 3 CO2 + 3 ribulose-5-phosphate + 6 NADPH."
  },
  {
    id: 35,
    question: "The 'energy charge' of a cell, defined as [ATP + ½ADP] / [ATP + ADP + AMP], is typically maintained near:",
    options: ["0.1–0.2", "0.4–0.6", "0.8–0.95", "1.0"],
    answer: 2,
    explanation: "The energy charge of a healthy cell is typically maintained between 0.8 and 0.95 (near maximum). Enzymes of ATP-consuming biosynthetic pathways are activated at high energy charge, while ATP-generating catabolic pathways (glycolysis, TCA cycle) are inhibited at high energy charge and activated when energy charge falls."
  },
  {
    id: 36,
    question: "Glucose entry into cells via GLUT4 transporters is primarily regulated by:",
    options: [
      "The concentration gradient of glucose alone",
      "Insulin-stimulated translocation of GLUT4-containing vesicles to the plasma membrane",
      "Glucagon-mediated phosphorylation of GLUT4",
      "Allosteric activation of GLUT4 by glucose-6-phosphate"
    ],
    answer: 1,
    explanation: "GLUT4 is sequestered in intracellular vesicles in the basal state. Insulin binding to its receptor activates a signaling cascade (PI3K → PDK1 → Akt/PKB) that stimulates the translocation of GLUT4 vesicles to the plasma membrane, dramatically increasing glucose uptake in muscle and adipose tissue."
  },
  {
    id: 37,
    question: "During vigorous exercise, the ATP/ADP ratio in muscle falls, stimulating PFK-1. The reversal of PFK-1 activity that occurs at rest is primarily due to:",
    options: [
      "Covalent phosphorylation of PFK-1 by PKA",
      "Allosteric inhibition by rising ATP and citrate concentrations",
      "Transcriptional repression of PFK-1 gene by insulin",
      "Competitive inhibition by glucose-6-phosphate"
    ],
    answer: 1,
    explanation: "At rest, ATP levels recover (high ATP inhibits PFK-1 allosterically at its inhibitory nucleotide binding site) and citrate (exported from mitochondria when acetyl-CoA is abundant) also inhibits PFK-1 allosterically. The ATP/AMP ratio is the key energy-sensing mechanism for PFK-1 regulation."
  },
  {
    id: 38,
    question: "Which of the following is a product of the reaction catalyzed by succinate dehydrogenase (Complex II)?",
    options: [
      "NADH and oxaloacetate",
      "FADH2 and fumarate",
      "NADPH and malate",
      "GTP and succinate"
    ],
    answer: 1,
    explanation: "Succinate dehydrogenase (SDH/Complex II) oxidizes succinate to fumarate while reducing FAD to FADH2. SDH is the only TCA cycle enzyme embedded in the inner mitochondrial membrane and also serves as Complex II of the ETC. Mutations in SDH subunits are associated with certain paragangliomas and pheochromocytomas."
  },
  {
    id: 39,
    question: "Oxaloacetate (OAA) cannot directly cross the inner mitochondrial membrane. It is exported from the mitochondria during gluconeogenesis primarily as:",
    options: [
      "Citrate (converted to OAA by cytoplasmic ATP-citrate lyase)",
      "Glucose-6-phosphate",
      "Acetyl-CoA",
      "Succinyl-CoA"
    ],
    answer: 0,
    explanation: "OAA is converted to malate (by mitochondrial malate dehydrogenase) or to aspartate (by transamination) for transport across the inner membrane via specific carriers. In some tissues, OAA condenses with acetyl-CoA to form citrate, which is exported via the citrate carrier. Cytoplasmic ATP-citrate lyase then regenerates OAA and acetyl-CoA for fatty acid synthesis."
  },
  {
    id: 40,
    question: "Glucokinase (hexokinase IV) in hepatocytes differs from hexokinase I in peripheral tissues because:",
    options: [
      "Glucokinase has a lower Km for glucose and is inhibited by glucose-6-phosphate",
      "Glucokinase has a higher Km for glucose (~10 mM) and is not inhibited by its product G6P",
      "Glucokinase phosphorylates both glucose and fructose with equal affinity",
      "Glucokinase is a mitochondrial enzyme activated by glucagon"
    ],
    answer: 1,
    explanation: "Glucokinase (hexokinase IV) in liver and pancreatic β-cells has a high Km (~10 mM) and is not inhibited by G6P, acting as a glucose sensor. It only becomes saturated at high portal glucose concentrations (after a meal), allowing the liver to buffer glucose. In contrast, peripheral hexokinase (Km ~0.1 mM) is always nearly saturated and is product-inhibited."
  },
  {
    id: 41,
    question: "The conversion of glucose-1-phosphate to glucose-6-phosphate in glycogen degradation is catalyzed by:",
    options: [
      "Hexokinase",
      "Phosphoglucomutase",
      "Glucose-6-phosphatase",
      "Phosphoglycerate mutase"
    ],
    answer: 1,
    explanation: "Phosphoglucomutase catalyzes the reversible interconversion of glucose-1-phosphate (released by glycogen phosphorylase) and glucose-6-phosphate through a glucose-1,6-bisphosphate intermediate. G6P can then enter glycolysis (in muscle) or be dephosphorylated to free glucose by glucose-6-phosphatase (in liver) for blood glucose release."
  },
  {
    id: 42,
    question: "Glycogen synthase is regulated by phosphorylation/dephosphorylation. Which correctly describes its regulatory state?",
    options: [
      "Phosphorylated form (GSb) is active; dephosphorylated form (GSa) is inactive",
      "Dephosphorylated form (GSa) is active; phosphorylated form (GSb) is less active",
      "Both phosphorylated and dephosphorylated forms are equally active",
      "Phosphorylation activates glycogen synthase via PKA directly"
    ],
    answer: 1,
    explanation: "Glycogen synthase a (dephosphorylated, active) is the fully active form. Multiple kinases (PKA, GSK3, phosphorylase kinase, CaM kinase II) phosphorylate it to produce glycogen synthase b (phosphorylated, less active/inactive). Protein phosphatase 1 (PP1) reverses this. Insulin activates PP1 (via glycogen targeting subunit) and inhibits GSK3, promoting GSa formation."
  },
  {
    id: 43,
    question: "The standard free energy change (ΔG°') for ATP hydrolysis is approximately -30.5 kJ/mol. Under cellular conditions ([ATP]/[ADP][Pi] ratio), the actual ΔG is:",
    options: [
      "Equal to ΔG°' at -30.5 kJ/mol",
      "More negative than ΔG°', typically -50 to -65 kJ/mol",
      "Less negative than ΔG°', typically -10 to -20 kJ/mol",
      "Positive, indicating ATP synthesis is spontaneous"
    ],
    answer: 1,
    explanation: "Cellular [ATP] is maintained much higher and [ADP]/[Pi] much lower than standard conditions (1 M each). By ΔG = ΔG°' + RT ln([ADP][Pi]/[ATP]), the actual free energy of ATP hydrolysis is much more negative than ΔG°' — typically -50 to -65 kJ/mol in actively metabolizing cells, making ATP hydrolysis an even more powerful driving force."
  },
  {
    id: 44,
    question: "Fluoroacetate (a plant toxin) is toxic because fluoroacetyl-CoA condenses with oxaloacetate to form fluorocitrate, which potently inhibits:",
    options: [
      "Pyruvate dehydrogenase complex",
      "Aconitase, blocking the TCA cycle",
      "Citrate synthase, preventing citrate formation",
      "Isocitrate dehydrogenase"
    ],
    answer: 1,
    explanation: "Fluorocitrate is a potent inhibitor of aconitase, the enzyme that converts citrate to isocitrate in the TCA cycle. This 'lethal synthesis' traps intermediates as citrate (which accumulates) and completely blocks TCA cycle flux, causing ATP depletion and death. This mechanism is the basis of '1080' rodenticide."
  },
  {
    id: 45,
    question: "The pentose phosphate pathway is most active in which of the following tissues?",
    options: [
      "Skeletal muscle and brain",
      "Liver, lactating mammary gland, adrenal cortex, and red blood cells",
      "Kidney cortex and cardiac muscle",
      "Pancreatic acinar cells and stomach"
    ],
    answer: 1,
    explanation: "The PPP is most active in tissues with high demand for NADPH (for fatty acid synthesis or antioxidant protection) and ribose-5-phosphate (for nucleotide synthesis): liver (lipogenesis), lactating mammary gland (lipogenesis), adrenal cortex (steroidogenesis), and red blood cells (oxidative protection via glutathione). Skeletal muscle has relatively low PPP activity."
  },
  {
    id: 46,
    question: "Cytochrome c is released from mitochondria during apoptosis. Which complex normally accepts electrons from cytochrome c in the ETC?",
    options: [
      "Complex I (NADH dehydrogenase)",
      "Complex II (succinate dehydrogenase)",
      "Complex III (cytochrome bc1 complex)",
      "Complex IV (cytochrome c oxidase)"
    ],
    answer: 3,
    explanation: "Cytochrome c is a peripheral protein of the inner mitochondrial membrane that shuttles electrons between Complex III (which reduces it) and Complex IV (cytochrome c oxidase, which oxidizes it and passes electrons to O2). When cytochrome c is released to the cytoplasm during apoptosis, it activates the apoptosome by binding Apaf-1."
  },
  {
    id: 47,
    question: "Which reaction in the TCA cycle results in the regeneration of oxaloacetate to complete the cycle?",
    options: [
      "Fumarate → malate (fumarase)",
      "Malate → oxaloacetate (malate dehydrogenase)",
      "Succinate → fumarate (succinate dehydrogenase)",
      "Succinyl-CoA → succinate (succinyl-CoA synthetase)"
    ],
    answer: 1,
    explanation: "Malate dehydrogenase catalyzes the final step of the TCA cycle: oxidation of malate to oxaloacetate with reduction of NAD+ to NADH. Despite an unfavorable equilibrium, the reaction is driven forward by the subsequent condensation of OAA with acetyl-CoA (catalyzed by citrate synthase, ΔG°' = -31.5 kJ/mol)."
  },
  {
    id: 48,
    question: "In gluconeogenesis, which of the following amino acids can serve as a gluconeogenic precursor by entering the pathway as pyruvate after transamination?",
    options: [
      "Leucine and lysine (strictly ketogenic)",
      "Alanine (transaminated to pyruvate by ALT)",
      "Acetyl-CoA-producing amino acids",
      "Phenylalanine and tyrosine (enter as acetyl-CoA only)"
    ],
    answer: 1,
    explanation: "Alanine is transaminated to pyruvate by alanine aminotransferase (ALT/GPT), with the amino group transferred to α-ketoglutarate forming glutamate. Pyruvate can then be used for gluconeogenesis via pyruvate carboxylase. Leucine and lysine are the only strictly ketogenic amino acids (enter as acetyl-CoA/acetoacetate, cannot produce net glucose)."
  },
  {
    id: 49,
    question: "The respiratory control ratio (RCR) is a measure of mitochondrial coupling efficiency. A high RCR indicates:",
    options: [
      "Mitochondria are uncoupled and producing heat",
      "Tight coupling — oxygen consumption is controlled by ADP availability and ATP synthesis is efficient",
      "Complex IV is inhibited and electron transport is maximal",
      "The proton gradient has collapsed and ATP synthesis has ceased"
    ],
    answer: 1,
    explanation: "The respiratory control ratio = State 3 (+ ADP) oxygen consumption / State 4 (no ADP) oxygen consumption. A high RCR (typically 5–10 for well-coupled mitochondria) indicates that respiration is tightly coupled to ATP synthesis — O2 consumption accelerates when ADP is added (State 3) and slows when ADP is exhausted. A low RCR indicates uncoupling or damage."
  },
  {
    id: 50,
    question: "Which enzyme commits glucose-6-phosphate irreversibly to glycolysis rather than the pentose phosphate pathway or glycogen synthesis?",
    options: [
      "Glucose-6-phosphate dehydrogenase (G6PD) — commits G6P to the PPP",
      "Phosphofructokinase-1 (PFK-1) — commits F6P to glycolysis after isomerization",
      "Phosphoglucose isomerase — commits G6P by converting it to F6P",
      "Glycogen synthase — commits G6P to glycogen via G1P"
    ],
    answer: 1,
    explanation: "While glucose-6-phosphate is a branch point (can enter glycolysis, PPP, or glycogen synthesis), the first truly committed and irreversible step of glycolysis is the PFK-1 reaction (F6P → F1,6BP). Phosphoglucose isomerase is reversible, so G6P → F6P is not committed. PFK-1 is the major control point of glycolytic flux."
  }
];

export default questions;
