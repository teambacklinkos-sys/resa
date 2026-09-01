const questions = [
  {
    id: 1,
    question: "During the well-fed state, which enzyme is most responsible for directing glucose carbons toward fatty acid synthesis in the liver?",
    options: [
      "Glucose-6-phosphatase",
      "ATP-citrate lyase",
      "Phosphoenolpyruvate carboxykinase",
      "Fructose-1,6-bisphosphatase"
    ],
    answer: 1,
    explanation: "ATP-citrate lyase cleaves cytosolic citrate (exported from mitochondria) into acetyl-CoA and oxaloacetate, providing the acetyl-CoA building blocks for de novo fatty acid synthesis. This enzyme is upregulated in the fed state by insulin signaling."
  },
  {
    id: 2,
    question: "A patient with untreated Type 1 diabetes presents with blood glucose of 450 mg/dL and blood pH of 7.1. Which metabolic state best describes this patient's liver?",
    options: [
      "Active glycolysis and lipogenesis",
      "Active gluconeogenesis and ketogenesis",
      "Active glycogen synthesis and glycolysis",
      "Active pentose phosphate pathway and NADPH production"
    ],
    answer: 1,
    explanation: "In the absence of insulin and elevated glucagon, the liver activates gluconeogenesis (converting amino acids and glycerol to glucose) and ketogenesis (converting fatty acid-derived acetyl-CoA to ketone bodies). The elevated ketone bodies cause the metabolic acidosis (diabetic ketoacidosis)."
  },
  {
    id: 3,
    question: "During prolonged fasting (>48 hours), which fuel source accounts for the majority of energy used by the brain?",
    options: [
      "Glucose derived from muscle glycogen",
      "Free fatty acids transported across the blood-brain barrier",
      "Ketone bodies (beta-hydroxybutyrate and acetoacetate)",
      "Alanine converted to pyruvate by brain neurons"
    ],
    answer: 2,
    explanation: "After 48–72 hours of fasting, the brain adapts to use ketone bodies (primarily beta-hydroxybutyrate) as its major fuel, which can supply up to 60–70% of brain energy needs. This adaptation is critical for sparing muscle protein from gluconeogenesis."
  },
  {
    id: 4,
    question: "The glucose-alanine cycle between muscle and liver serves which primary metabolic function?",
    options: [
      "Transfer of reducing equivalents from muscle to liver",
      "Non-toxic transport of amino groups from muscle to liver for urea synthesis",
      "Supply of gluconeogenic precursors to muscle during exercise",
      "Regeneration of NADH in muscle during anaerobic glycolysis"
    ],
    answer: 1,
    explanation: "In the glucose-alanine cycle, transamination of pyruvate with glutamate produces alanine in muscle, which is exported to the liver. The liver deaminates alanine, uses the amino group for urea synthesis, and converts the pyruvate to glucose via gluconeogenesis, which is then returned to muscle."
  },
  {
    id: 5,
    question: "Malonyl-CoA plays a key regulatory role in fatty acid metabolism. Which statement about its function is correct?",
    options: [
      "It activates carnitine palmitoyltransferase I (CPT-I), promoting beta-oxidation",
      "It inhibits CPT-I, preventing fatty acid entry into mitochondria during lipogenesis",
      "It is the product of fatty acid synthase and signals completion of lipogenesis",
      "It activates AMP-activated protein kinase (AMPK) in the fasting state"
    ],
    answer: 1,
    explanation: "Malonyl-CoA, the product of acetyl-CoA carboxylase and the first committed intermediate in fatty acid synthesis, potently inhibits CPT-I. This prevents futile cycling by ensuring that when fatty acids are being synthesized (fed state), they are not simultaneously degraded in mitochondria."
  },
  {
    id: 6,
    question: "During intense exercise, skeletal muscle relies on the Cori cycle. What is the net metabolic consequence of this cycle for the whole organism?",
    options: [
      "Net synthesis of glucose from CO2 at no energetic cost",
      "Transfer of metabolic burden (ATP cost of gluconeogenesis) from muscle to liver",
      "Net production of ATP in both muscle and liver simultaneously",
      "Conversion of lactate to glycogen within the muscle cell"
    ],
    answer: 1,
    explanation: "In the Cori cycle, muscle exports lactate (produced by anaerobic glycolysis) to the liver, which uses it for gluconeogenesis at a cost of 6 ATP equivalents. The glucose is returned to muscle, which gains only 2 ATP via glycolysis. The liver thus bears the energetic cost, allowing muscle to sustain activity temporarily."
  },
  {
    id: 7,
    question: "Glucagon activates glycogen phosphorylase in the liver via a cAMP-dependent signaling cascade. Which step in this cascade involves proteolytic activation?",
    options: [
      "Adenylyl cyclase activation by the Gs alpha subunit",
      "Phosphorylase kinase activation by cAMP-dependent protein kinase (PKA)",
      "Conversion of phosphorylase b to phosphorylase a by phosphorylase kinase",
      "Activation of phosphodiesterase to terminate the signal"
    ],
    answer: 2,
    explanation: "Phosphorylase kinase phosphorylates (not proteolytically cleaves) phosphorylase b at Ser14, converting it to the active phosphorylase a form. All steps in this cascade are regulatory phosphorylations, not proteolytic events — this is a common exam distinction."
  },
  {
    id: 8,
    question: "Which of the following correctly describes the metabolic role of adipose tissue in the fasting state?",
    options: [
      "Uptake of glucose via GLUT4 for triglyceride synthesis",
      "Net release of free fatty acids and glycerol via hormone-sensitive lipase activation",
      "Secretion of leptin to stimulate hepatic gluconeogenesis directly",
      "Uptake of ketone bodies from the blood for local energy production"
    ],
    answer: 1,
    explanation: "In the fasting state, glucagon and epinephrine activate hormone-sensitive lipase (HSL) in adipose tissue, leading to hydrolysis of stored triglycerides. Free fatty acids are released to the blood for use by other tissues, while glycerol travels to the liver as a gluconeogenic substrate."
  },
  {
    id: 9,
    question: "AMP-activated protein kinase (AMPK) is considered a master regulator of cellular energy. When activated, AMPK does which of the following?",
    options: [
      "Phosphorylates and activates acetyl-CoA carboxylase (ACC), stimulating fatty acid synthesis",
      "Phosphorylates and inactivates ACC, while activating fatty acid oxidation pathways",
      "Phosphorylates glycogen synthase to promote glycogen storage",
      "Activates mTORC1 to stimulate protein synthesis during energy stress"
    ],
    answer: 1,
    explanation: "AMPK is activated when cellular AMP/ATP ratio is high (low energy state). It phosphorylates and inactivates ACC (reducing malonyl-CoA, which relieves CPT-I inhibition to promote beta-oxidation) and simultaneously phosphorylates and inactivates mTORC1 and glycogen synthase to suppress anabolic processes."
  },
  {
    id: 10,
    question: "The brain is unusual among organs in its metabolic substrate preference. Which metabolic feature is unique to neurons under normal physiological conditions?",
    options: [
      "Inability to oxidize fatty acids due to absence of mitochondria",
      "High dependence on glucose and inability to use fatty acids as fuel due to limited beta-oxidation capacity and tight blood-brain barrier",
      "Active gluconeogenesis from astrocyte-derived lactate",
      "Use of urea cycle intermediates for energy production"
    ],
    answer: 1,
    explanation: "Neurons have limited capacity for fatty acid beta-oxidation and cannot utilize long-chain fatty acids efficiently because they do not cross the blood-brain barrier. Under normal conditions, neurons are obligate glucose consumers; only during prolonged starvation do they substantially switch to ketone body utilization."
  },
  {
    id: 11,
    question: "In early fasting (overnight fast, 12–18 hours), what is the primary source of blood glucose?",
    options: [
      "Gluconeogenesis from amino acids in the liver",
      "Glycogenolysis in the liver",
      "Gluconeogenesis from glycerol released from adipose tissue",
      "Glycogenolysis in skeletal muscle"
    ],
    answer: 1,
    explanation: "During the first 12–18 hours of fasting, hepatic glycogenolysis is the dominant source of blood glucose. As glycogen stores deplete (by approximately 24 hours), gluconeogenesis from amino acids, lactate, and glycerol becomes progressively more important."
  },
  {
    id: 12,
    question: "Which enzyme catalyzes the rate-limiting step of gluconeogenesis that bypasses the irreversible pyruvate kinase reaction?",
    options: [
      "Pyruvate carboxylase and PEPCK acting in sequence",
      "Phosphoglycerate kinase",
      "Enolase",
      "Fructose-1,6-bisphosphatase alone"
    ],
    answer: 0,
    explanation: "The bypass of pyruvate kinase in gluconeogenesis requires two steps: pyruvate carboxylase converts pyruvate to oxaloacetate (in mitochondria), and PEPCK (phosphoenolpyruvate carboxykinase) converts oxaloacetate to PEP. Together, these two enzymes accomplish what pyruvate kinase does in reverse (thermodynamically unfavorable as a single step)."
  },
  {
    id: 13,
    question: "During exercise, muscle glycogen is degraded but, unlike liver glycogenolysis, muscle glycogenolysis does NOT raise blood glucose. Why?",
    options: [
      "Muscle glucose-6-phosphate is rapidly converted to lactate before it can be exported",
      "Muscle lacks glucose-6-phosphatase, so glucose-6-phosphate cannot be dephosphorylated for export",
      "Muscle phosphorylase produces glucose-1-phosphate, which is not a substrate for glucose transporters",
      "GLUT4 in muscle only allows glucose uptake, not export"
    ],
    answer: 1,
    explanation: "Skeletal muscle lacks glucose-6-phosphatase, the enzyme that removes the phosphate group to produce free glucose for export into the blood. Consequently, muscle-derived glucose-6-phosphate is retained and enters glycolysis for local energy production."
  },
  {
    id: 14,
    question: "Insulin promotes fatty acid synthesis through a post-translational mechanism involving which protein phosphatase?",
    options: [
      "Protein phosphatase 2A (PP2A) dephosphorylating and activating acetyl-CoA carboxylase",
      "Protein phosphatase 1 (PP1) dephosphorylating and activating glycogen phosphorylase",
      "Protein phosphatase 2B (calcineurin) activating CREB",
      "Protein tyrosine phosphatase 1B (PTP1B) activating the insulin receptor"
    ],
    answer: 0,
    explanation: "Insulin signaling leads to activation of PP2A (among other phosphatases), which dephosphorylates and activates acetyl-CoA carboxylase (ACC). Active ACC produces malonyl-CoA, the precursor for fatty acid synthesis and an inhibitor of CPT-I, thereby simultaneously promoting lipogenesis and inhibiting lipolysis."
  },
  {
    id: 15,
    question: "In diabetic ketoacidosis, the overproduction of ketone bodies leads to acidosis. What is the biochemical basis of ketone body-induced acidosis?",
    options: [
      "Acetoacetate and beta-hydroxybutyrate are strong acids that dissociate at physiological pH, consuming bicarbonate buffer",
      "Ketone bodies inhibit carbonic anhydrase, preventing CO2 excretion",
      "Acetone reacts with bicarbonate to form carbonic acid",
      "Ketone bodies directly inhibit the renal hydrogen ion excretion pumps"
    ],
    answer: 0,
    explanation: "Acetoacetate (pKa ~3.6) and beta-hydroxybutyrate (pKa ~4.7) are both organic acids that are fully dissociated at physiological pH (7.4), releasing protons that consume bicarbonate buffer. Overproduction overwhelms the buffering capacity, lowering blood pH."
  },
  {
    id: 16,
    question: "What is the primary regulatory mechanism by which glucagon suppresses glycolysis in the liver?",
    options: [
      "Direct inhibition of hexokinase IV (glucokinase) by glucagon-receptor interaction",
      "PKA-mediated phosphorylation and inactivation of phosphofructokinase-2 (PFK-2), reducing fructose-2,6-bisphosphate levels",
      "Upregulation of glucose-6-phosphatase gene expression within minutes",
      "Allosteric inhibition of pyruvate kinase by glucagon"
    ],
    answer: 1,
    explanation: "Glucagon activates PKA, which phosphorylates the bifunctional enzyme PFK-2/FBPase-2. Phosphorylation activates the FBPase-2 domain and inhibits the PFK-2 domain, reducing fructose-2,6-bisphosphate levels. Since fructose-2,6-bisphosphate is the most potent allosteric activator of PFK-1, its reduction powerfully inhibits glycolysis."
  },
  {
    id: 17,
    question: "Which metabolic adaptation distinguishes the heart muscle from skeletal muscle in terms of fuel utilization?",
    options: [
      "The heart preferentially uses glucose under all conditions, while skeletal muscle uses fatty acids",
      "The heart is an obligate aerobic organ that can oxidize glucose, fatty acids, lactate, and ketone bodies, with fatty acids being preferred under normal conditions",
      "The heart exclusively uses ketone bodies, while skeletal muscle uses fatty acids",
      "The heart stores large amounts of glycogen as its primary energy reserve"
    ],
    answer: 1,
    explanation: "The heart is highly metabolically flexible and preferentially oxidizes fatty acids (60–70% of energy) under normal aerobic conditions, but can readily switch to glucose, lactate, and ketone bodies. It is essentially an obligate aerobe with negligible glycolytic capacity for sustained energy production."
  },
  {
    id: 18,
    question: "During starvation, protein catabolism in muscle provides gluconeogenic precursors. Which amino acid is quantitatively the most important gluconeogenic precursor exported from muscle?",
    options: [
      "Glutamine",
      "Alanine",
      "Glycine",
      "Leucine"
    ],
    answer: 1,
    explanation: "Alanine is the quantitatively most important gluconeogenic amino acid exported from muscle, produced by transamination of pyruvate with glutamate. It accounts for approximately 30% of the amino acid nitrogen released by muscle during fasting. Glutamine is also important but is preferentially utilized by the gut and kidneys."
  },
  {
    id: 19,
    question: "The pentose phosphate pathway is active in the fed state. Which tissue has the highest activity of this pathway, and why?",
    options: [
      "Skeletal muscle, because it needs NADPH for energy production during exercise",
      "Liver and adipose tissue, because they require NADPH for reductive biosynthesis (fatty acid and cholesterol synthesis)",
      "Brain, because it requires ribose-5-phosphate for neurotransmitter synthesis",
      "Kidney, because it requires NADPH for gluconeogenesis"
    ],
    answer: 1,
    explanation: "The pentose phosphate pathway is most active in tissues with high biosynthetic demand: liver (fatty acid and cholesterol synthesis) and adipose tissue (fatty acid synthesis). NADPH produced is essential as the reductant for these anabolic pathways, as well as for maintaining glutathione in reduced form for antioxidant defense."
  },
  {
    id: 20,
    question: "Which statement accurately describes the metabolic role of the liver in lipid metabolism during the fed state?",
    options: [
      "The liver oxidizes dietary fat and exports the energy as ATP to peripheral tissues",
      "The liver packages excess dietary carbohydrates and lipids into VLDL for export to peripheral tissues",
      "The liver hydrolyzes chylomicrons and stores the resultant fatty acids as triglycerides",
      "The liver converts excess amino acids directly to HDL particles"
    ],
    answer: 1,
    explanation: "In the fed state, the liver converts excess glucose to fatty acids (de novo lipogenesis), packages them with cholesterol and apolipoprotein B-100 into VLDL particles, and secretes them into the circulation. VLDL delivers triglycerides to adipose tissue and muscle."
  },
  {
    id: 21,
    question: "During sprint exercise (anaerobic), skeletal muscle pH drops significantly. This is primarily due to:",
    options: [
      "Lactic acid dissociation producing lactate anion and a proton, which lowers intracellular pH",
      "Increased CO2 production from the TCA cycle",
      "Hydrolysis of ATP producing ADP and inorganic phosphate, which acts as a buffer consumer",
      "Both A and C contribute nearly equally to the pH drop"
    ],
    answer: 3,
    explanation: "The pH drop during intense exercise results from two major sources: (1) H+ production from lactic acid dissociation (lactate + H+), and (2) H+ release from ATP hydrolysis (ATP + H2O → ADP + Pi + H+). Research shows that ATP hydrolysis contributes substantially to muscle acidification, comparable to lactate production."
  },
  {
    id: 22,
    question: "Insulin signaling activates PI3K → Akt pathway. Which of the following is a direct phosphorylation target of Akt relevant to glucose metabolism?",
    options: [
      "Phosphorylation and activation of glycogen synthase kinase-3 (GSK-3)",
      "Phosphorylation and inactivation of GSK-3, leading to dephosphorylation and activation of glycogen synthase",
      "Direct phosphorylation and activation of glucose transporter GLUT4",
      "Phosphorylation and degradation of IRS-1"
    ],
    answer: 1,
    explanation: "Akt phosphorylates and inactivates GSK-3 (glycogen synthase kinase-3). GSK-3 is constitutively active and normally phosphorylates/inactivates glycogen synthase. When Akt inactivates GSK-3, glycogen synthase remains unphosphorylated and active, promoting glycogen synthesis in the fed state."
  },
  {
    id: 23,
    question: "In prolonged starvation, the kidney becomes an important gluconeogenic organ. What is the primary substrate used by the kidney for gluconeogenesis during this state?",
    options: [
      "Glycerol from adipose tissue lipolysis",
      "Lactate from red blood cells",
      "Glutamine from muscle protein catabolism",
      "Alanine from the glucose-alanine cycle"
    ],
    answer: 2,
    explanation: "During prolonged starvation, the kidney utilizes glutamine (released from muscle) as its primary gluconeogenic substrate. The kidney deaminates glutamine, producing ammonium ion (NH4+), which is excreted in urine to buffer the acid load from ketone bodies, while the carbon skeleton enters gluconeogenesis."
  },
  {
    id: 24,
    question: "Adiponectin, secreted by adipose tissue, has insulin-sensitizing effects. Its primary mechanism of action involves:",
    options: [
      "Direct binding to the insulin receptor, mimicking insulin action",
      "Activation of AMPK in liver and muscle, increasing fatty acid oxidation and decreasing gluconeogenesis",
      "Inhibition of hormone-sensitive lipase in adipose tissue, reducing free fatty acid release",
      "Upregulation of GLUT4 expression through transcriptional activation"
    ],
    answer: 1,
    explanation: "Adiponectin activates AMPK in liver and skeletal muscle. In the liver, activated AMPK phosphorylates and inhibits ACC (reducing malonyl-CoA), promotes fatty acid oxidation, and suppresses gluconeogenic gene expression (including PEPCK and G6Pase), thereby reducing hepatic glucose output and improving insulin sensitivity."
  },
  {
    id: 25,
    question: "Which of the following best explains why red blood cells are entirely dependent on anaerobic glycolysis for energy?",
    options: [
      "Red blood cells lack the enzymes of the TCA cycle",
      "Red blood cells lack mitochondria, so cannot perform oxidative phosphorylation",
      "Red blood cells cannot take up fatty acids from the blood",
      "Both A and B are correct"
    ],
    answer: 1,
    explanation: "Mature red blood cells lack mitochondria (lost during erythrocyte maturation), making them entirely dependent on cytoplasmic anaerobic glycolysis for ATP production. They also lack nuclei and most organelles, limiting them to a small set of metabolic pathways including glycolysis and the pentose phosphate pathway."
  },
  {
    id: 26,
    question: "The metabolic syndrome is characterized by insulin resistance, dyslipidemia, central obesity, and hypertension. Which metabolic defect at the cellular level is most directly responsible for hyperglycemia in Type 2 diabetes?",
    options: [
      "Reduced pancreatic beta-cell secretion of insulin as the primary defect",
      "Impaired insulin receptor signaling (post-receptor defect) in liver, muscle, and adipose tissue leading to reduced glucose uptake and increased hepatic glucose output",
      "Accelerated renal glucose reabsorption via SGLT2",
      "Upregulation of intestinal glucose absorption via SGLT1"
    ],
    answer: 1,
    explanation: "The primary cellular defect in Type 2 diabetes is peripheral insulin resistance—impaired signaling downstream of the insulin receptor (particularly PI3K-Akt pathway) in skeletal muscle (reduced glucose uptake), liver (failure to suppress gluconeogenesis), and adipose tissue (uncontrolled lipolysis). Beta-cell failure is secondary and progressive."
  },
  {
    id: 27,
    question: "During aerobic endurance exercise, the crossover concept describes the shift from fat to carbohydrate oxidation as exercise intensity increases. At the biochemical level, this crossover is explained by:",
    options: [
      "Increased malonyl-CoA at high intensity inhibiting CPT-I and promoting glucose oxidation",
      "Allosteric activation of PFK-1 by AMP and ADP at high intensity, increasing glycolytic flux",
      "Depletion of fatty acid stores at high exercise intensities",
      "Both A and B together explain the crossover"
    ],
    answer: 3,
    explanation: "At high exercise intensities, both mechanisms contribute to increased carbohydrate oxidation: elevated malonyl-CoA (from accelerated acetyl-CoA carboxylase activity) inhibits CPT-I and fatty acid entry into mitochondria, while accumulation of AMP, ADP, and Pi allosterically activates PFK-1, dramatically accelerating glycolytic flux."
  },
  {
    id: 28,
    question: "Cortisol secreted during stress or prolonged fasting promotes gluconeogenesis primarily through which mechanism?",
    options: [
      "Allosteric activation of PEPCK enzyme in the cytoplasm",
      "Transcriptional upregulation of gluconeogenic enzymes (PEPCK, G6Pase) and promotion of muscle proteolysis to provide amino acid substrates",
      "Activation of glucagon receptors on hepatocytes",
      "Direct inhibition of insulin signaling by binding to the insulin receptor"
    ],
    answer: 1,
    explanation: "Cortisol (a glucocorticoid) acts via nuclear glucocorticoid receptors to transcriptionally upregulate gluconeogenic enzyme genes, including PEPCK and glucose-6-phosphatase, in the liver. It also promotes proteolysis in muscle and lipolysis in adipose tissue, providing amino acid and glycerol substrates for gluconeogenesis."
  },
  {
    id: 29,
    question: "Which of the following is the correct metabolic fate of excess dietary fructose in the liver, contributing to non-alcoholic fatty liver disease (NAFLD)?",
    options: [
      "Fructose is phosphorylated by hexokinase to fructose-6-phosphate, entering glycolysis normally",
      "Fructose is phosphorylated by fructokinase to fructose-1-phosphate, bypassing PFK-1 regulation, leading to unregulated glycolytic flux and excess acetyl-CoA channeled into de novo lipogenesis",
      "Fructose is converted to glucose by the liver and released into the blood",
      "Fructose is exclusively stored as liver glycogen via UDP-fructose intermediates"
    ],
    answer: 1,
    explanation: "Fructose in the liver is metabolized by fructokinase to fructose-1-phosphate (not F-6-P), which is split by aldolase B into DHAP and glyceraldehyde. Critically, this pathway bypasses the regulated PFK-1 step, allowing unrestricted carbon flux through to acetyl-CoA and subsequent de novo lipogenesis, contributing to hepatic steatosis."
  },
  {
    id: 30,
    question: "In Type 1 diabetes, the lipoprotein lipase (LPL) activity in adipose tissue is severely reduced. What is the physiological consequence of this reduction?",
    options: [
      "Accumulation of chylomicrons and VLDL in blood, causing hypertriglyceridemia",
      "Increased uptake of LDL by peripheral tissues",
      "Enhanced HDL-mediated reverse cholesterol transport",
      "Reduced secretion of VLDL by the liver"
    ],
    answer: 0,
    explanation: "LPL activity in adipose tissue and muscle requires insulin for expression and activation. In Type 1 diabetes, absent insulin leads to severely reduced LPL activity, impairing hydrolysis of triglycerides from chylomicrons and VLDL. This results in marked hypertriglyceridemia, a common complication of uncontrolled diabetes."
  },
  {
    id: 31,
    question: "Which of the following correctly explains why glucokinase (hexokinase IV) in the liver is suited for its physiological role as a glucose sensor?",
    options: [
      "It has a very low Km for glucose (~0.1 mM) and is inhibited by its product glucose-6-phosphate",
      "It has a high Km for glucose (~10 mM), is not inhibited by glucose-6-phosphate, and shows sigmoidal kinetics — allowing it to respond proportionally to post-prandial glucose rises",
      "It is constitutively expressed at high levels regardless of glucose or insulin status",
      "It is allosterically activated by glucagon to ensure continuous glucose phosphorylation"
    ],
    answer: 1,
    explanation: "Glucokinase has a high Km (~10 mM) meaning it is only significantly active when portal vein glucose is high (post-meal). Its sigmoidal kinetics (Hill coefficient ~1.7) and lack of product inhibition allow it to act as a glucose sensor — proportionally increasing its activity with rising glucose to trap excess glucose in the liver."
  },
  {
    id: 32,
    question: "During very prolonged starvation (weeks), urinary nitrogen excretion decreases significantly. What is the metabolic explanation for this adaptation?",
    options: [
      "The kidneys become unable to excrete nitrogen due to renal failure",
      "The brain increasingly uses ketone bodies instead of glucose, reducing the demand for gluconeogenesis from amino acids and thus sparing muscle protein",
      "Intestinal absorption of amino acids from the gut increases to compensate for reduced intake",
      "Adipose tissue begins to synthesize amino acids from fatty acid intermediates"
    ],
    answer: 1,
    explanation: "As starvation progresses, rising ketone body concentrations allow the brain to meet up to 70% of its energy needs from ketones rather than glucose. This dramatically reduces the requirement for gluconeogenesis from amino acids, allowing muscle proteolysis to slow. This protein-sparing adaptation is critical for survival."
  },
  {
    id: 33,
    question: "Epinephrine has differential effects on glycogen metabolism in liver versus muscle. Which statement correctly describes this difference?",
    options: [
      "Epinephrine activates glycogen breakdown in both liver and muscle, but only liver glycogenolysis raises blood glucose because liver lacks glucose-6-phosphatase while muscle has it",
      "Epinephrine activates glycogen breakdown in both liver and muscle via cAMP, but only liver glucose-6-phosphate can be exported as free glucose due to liver's glucose-6-phosphatase",
      "Epinephrine acts only on liver glycogen, not muscle glycogen",
      "Epinephrine activates glycogen synthesis in muscle while activating glycogenolysis in the liver"
    ],
    answer: 1,
    explanation: "Epinephrine activates glycogen phosphorylase in both liver and muscle via cAMP-PKA signaling. However, the resultant glucose-6-phosphate can only be converted to free glucose (for blood glucose export) in the liver, which expresses glucose-6-phosphatase. Muscle retains glucose-6-phosphate for local glycolysis."
  },
  {
    id: 34,
    question: "What is the 'Randle cycle' (glucose-fatty acid cycle) and what is its physiological significance?",
    options: [
      "The cycling of glucose between liver glycogen and blood glucose, regulated by the ratio of glucagon to insulin",
      "The mutual inhibitory relationship between fatty acid oxidation and glucose oxidation in muscle and heart — high fatty acid oxidation raises acetyl-CoA and NADH, which inhibit PDH and promote glucose sparing",
      "The cycle of free fatty acids between adipose tissue and liver, generating ketone bodies",
      "The recycling of glucose carbons through the pentose phosphate pathway back to glycolysis"
    ],
    answer: 1,
    explanation: "The Randle cycle describes the substrate competition between fatty acids and glucose for oxidation in heart and skeletal muscle. When fatty acid oxidation is high, acetyl-CoA inhibits PDH (pyruvate dehydrogenase), citrate inhibits PFK-1, and glucose-6-phosphate inhibits hexokinase, collectively reducing glucose utilization. This mechanism underlies insulin resistance in Type 2 diabetes."
  },
  {
    id: 35,
    question: "In McArdle disease (myophosphorylase deficiency), patients cannot perform sustained vigorous exercise. What is the biochemical basis of their exercise intolerance?",
    options: [
      "Inability to mobilize muscle glycogen prevents rapid ATP production during high-intensity exercise, leading to premature fatigue and muscle cramping",
      "Absence of liver phosphorylase prevents blood glucose from rising during exercise",
      "Defective glucose transport into muscle cells causes energy deficit",
      "Impaired fatty acid oxidation in muscle due to secondary carnitine deficiency"
    ],
    answer: 0,
    explanation: "Myophosphorylase (muscle glycogen phosphorylase) is essential for mobilizing muscle glycogen during high-intensity exercise. In McArdle disease, its absence means muscle cannot rapidly generate glucose-6-phosphate from glycogen for glycolysis, causing exercise-induced muscle cramps, weakness, and a characteristic failure of venous lactate to rise after ischemic exercise."
  },
  {
    id: 36,
    question: "FOXO transcription factors are downstream regulators of insulin signaling in the liver. In the fasting state, FoxO1 promotes gluconeogenesis by:",
    options: [
      "Being phosphorylated by Akt, which retains FoxO1 in the nucleus to activate gluconeogenic genes",
      "Being unphosphorylated (Akt inactive), allowing FoxO1 to translocate to the nucleus and activate PEPCK and G6Pase gene transcription",
      "Being degraded in the cytoplasm by insulin-activated proteases",
      "Directly activating AMPK to induce gluconeogenesis"
    ],
    answer: 1,
    explanation: "In the fasting state, low insulin means low Akt activity. Unphosphorylated FoxO1 translocates to the nucleus where it activates transcription of gluconeogenic genes (PEPCK, G6Pase, PGC-1alpha). In the fed state, Akt phosphorylates FoxO1, promoting its nuclear export and cytoplasmic sequestration by 14-3-3 proteins."
  },
  {
    id: 37,
    question: "Which enzyme is uniquely responsible for the liver's ability to extract glucose from the portal blood even when peripheral tissues are insulin-resistant?",
    options: [
      "Hexokinase I, because it has a very high affinity for glucose",
      "Glucokinase (hexokinase IV), because its activity is induced by insulin and it responds to high portal glucose concentrations",
      "Phosphoglucomutase, because it irreversibly converts glucose-6-phosphate to glucose-1-phosphate",
      "UDP-glucose pyrophosphorylase, which traps glucose in glycogen"
    ],
    answer: 1,
    explanation: "Glucokinase (hexokinase IV) expression in hepatocytes is transcriptionally induced by insulin and the glucokinase regulatory protein (GKRP) sequesters it in the nucleus in the fasting state, releasing it post-meal. Its high Km and non-saturable kinetics allow it to respond to elevated portal glucose concentrations, trapping glucose as glucose-6-phosphate."
  },
  {
    id: 38,
    question: "During exercise-induced EPOC (excess post-exercise oxygen consumption), which metabolic processes account for the elevated oxygen consumption after exercise ceases?",
    options: [
      "Continued glycolysis and lactate production for glycogen resynthesis",
      "Oxidative resynthesis of phosphocreatine, clearance of lactate, restoration of body temperature, and elevated hormonal and mitochondrial activity",
      "Exclusively the conversion of lactate to glucose in the liver via the Cori cycle",
      "Synthesis of new mitochondria in muscle cells"
    ],
    answer: 1,
    explanation: "EPOC reflects multiple energy-requiring processes: re-phosphorylation of creatine (via oxidative phosphorylation), lactate clearance (oxidation or gluconeogenesis), restoration of elevated body temperature, catecholamine-driven futile cycling, and restoration of tissue oxygen stores (myoglobin and hemoglobin). These processes collectively maintain elevated VO2 after exercise."
  },
  {
    id: 39,
    question: "Leptin, produced by adipose tissue, has a primary role in energy homeostasis. Through which central mechanism does leptin reduce food intake and increase energy expenditure?",
    options: [
      "Direct stimulation of pancreatic beta cells to secrete insulin",
      "Activation of POMC/CART neurons and inhibition of NPY/AgRP neurons in the arcuate nucleus of the hypothalamus",
      "Binding to dopamine receptors in the reward center to reduce food-seeking behavior",
      "Direct activation of thermogenesis in brown adipose tissue without central involvement"
    ],
    answer: 1,
    explanation: "Leptin crosses the blood-brain barrier and acts on the arcuate nucleus of the hypothalamus. It activates anorexigenic POMC (pro-opiomelanocortin) and CART neurons (which release alpha-MSH to suppress appetite) while inhibiting orexigenic NPY/AgRP neurons (which normally stimulate food intake and inhibit thermogenesis)."
  },
  {
    id: 40,
    question: "Uncoupling protein 1 (UCP1) in brown adipose tissue generates heat rather than ATP. What is the molecular mechanism of UCP1-mediated thermogenesis?",
    options: [
      "UCP1 is an ATPase that hydrolyzes ATP to generate heat directly",
      "UCP1 is a proton channel/transporter in the inner mitochondrial membrane that dissipates the proton gradient as heat, bypassing ATP synthase",
      "UCP1 uncouples substrate oxidation from electron transfer in the electron transport chain",
      "UCP1 activates futile lipid cycling between lipolysis and lipogenesis in brown adipocytes"
    ],
    answer: 1,
    explanation: "UCP1 (thermogenin) is a proton transporter in the inner mitochondrial membrane of brown adipocytes. It allows protons to leak back from the intermembrane space into the matrix without passing through ATP synthase, dissipating the electrochemical gradient as heat. It is activated by free fatty acids and inhibited by purine nucleotides."
  },
  {
    id: 41,
    question: "In hepatic lipid metabolism, what determines whether fatty acids are directed toward beta-oxidation vs. re-esterification to triglycerides?",
    options: [
      "The ratio of NAD+/NADH in the mitochondrial matrix exclusively",
      "The concentration of malonyl-CoA, which regulates CPT-I activity, combined with the availability of glycerol-3-phosphate for esterification",
      "The activity of hormone-sensitive lipase within hepatocytes",
      "The concentration of carnitine, which is rate-limiting for all fatty acid oxidation"
    ],
    answer: 1,
    explanation: "The key determinant is malonyl-CoA, which inhibits CPT-I to prevent fatty acid entry into mitochondria for oxidation. When malonyl-CoA is high (fed state, active lipogenesis), fatty acids are directed to esterification. When malonyl-CoA is low (fasting, low insulin), CPT-I is active and fatty acids undergo beta-oxidation."
  },
  {
    id: 42,
    question: "What is the metabolic significance of the malate-aspartate shuttle in hepatic energy metabolism?",
    options: [
      "It transfers acetyl-CoA from mitochondria to cytoplasm for fatty acid synthesis",
      "It transfers reducing equivalents (NADH) from the cytoplasm into the mitochondrial matrix for oxidative phosphorylation, maximizing ATP yield from glycolysis",
      "It exchanges oxaloacetate between cytoplasm and mitochondria to regulate gluconeogenesis",
      "It transports malate out of mitochondria to provide substrate for the cytoplasmic malic enzyme"
    ],
    answer: 1,
    explanation: "The malate-aspartate shuttle is the primary mechanism in liver and heart for transferring cytoplasmic NADH (produced by glycolysis) into the mitochondria as the equivalent reducing power. Since the inner mitochondrial membrane is impermeable to NADH, this shuttle allows cytoplasmic NADH to be oxidized by the mitochondrial electron transport chain, yielding approximately 2.5 ATP per NADH."
  },
  {
    id: 43,
    question: "Phosphoenolpyruvate carboxykinase (PEPCK) is a key gluconeogenic enzyme. Its expression is regulated at the transcriptional level by multiple hormones. Which combination correctly describes its regulation?",
    options: [
      "Induced by insulin, repressed by glucagon and cortisol",
      "Induced by glucagon (via cAMP/CREB) and cortisol (via GR), repressed by insulin (via Akt/FoxO1 pathway)",
      "Constitutively expressed, regulated only at the post-translational level",
      "Induced by insulin and cortisol simultaneously, repressed by glucagon"
    ],
    answer: 1,
    explanation: "PEPCK gene transcription is induced by glucagon (via cAMP → PKA → CREB phosphorylation → CRE element) and cortisol (via glucocorticoid receptor binding to GRE in the PEPCK promoter), and by FoxO1 in the fasting state. Insulin represses PEPCK transcription via Akt-mediated phosphorylation of FoxO1 (promoting its nuclear exclusion)."
  },
  {
    id: 44,
    question: "Glycogen synthesis in muscle is regulated by insulin. After a carbohydrate meal, which sequence of events leads to glycogen synthase activation?",
    options: [
      "Insulin → PI3K → Akt → phosphorylation and activation of GSK-3 → phosphorylation of glycogen synthase",
      "Insulin → PI3K → Akt → phosphorylation and inactivation of GSK-3 → dephosphorylation of glycogen synthase by PP1 → activation of glycogen synthase",
      "Insulin → cAMP → PKA → phosphorylation and activation of glycogen synthase directly",
      "Insulin → direct binding to glycogen synthase → conformational activation"
    ],
    answer: 1,
    explanation: "Insulin activates PI3K → PDK1 → Akt. Akt phosphorylates and inactivates GSK-3 (which would otherwise keep glycogen synthase phosphorylated/inactive). Protein phosphatase-1 (PP1), recruited to the glycogen particle, then dephosphorylates glycogen synthase, activating it. Elevated glucose-6-phosphate (allosteric activator) also directly activates glycogen synthase."
  },
  {
    id: 45,
    question: "In the context of metabolic regulation, what is meant by 'substrate cycling' or 'futile cycling,' and what is its physiological benefit?",
    options: [
      "The cycling of substrates between anabolic and catabolic pathways that consumes ATP but generates heat and provides sensitive, rapid metabolic regulation",
      "The use of the same substrate by multiple competing enzymes, reducing metabolic efficiency",
      "The recycling of ADP back to ATP by the electron transport chain",
      "The use of both glycolysis and gluconeogenesis simultaneously in the same cell at maximum rates"
    ],
    answer: 0,
    explanation: "Substrate (futile) cycling occurs when opposing metabolic reactions operate simultaneously, consuming ATP and generating heat. For example, the PFK-1/FBPase-1 cycle. Although energetically costly, this cycling allows fine-tuned and rapid regulation of net flux in either direction by small changes in allosteric effectors, providing sensitivity that would not be possible with a single regulated enzyme."
  },
  {
    id: 46,
    question: "Which metabolic adaptation in the liver distinguishes the response to acute alcohol ingestion from normal fasting metabolism?",
    options: [
      "Alcohol oxidation produces excess NADH, raising the NADH/NAD+ ratio, which inhibits gluconeogenesis (causing hypoglycemia) and promotes fatty acid esterification (causing fatty liver)",
      "Alcohol activates glucagon secretion, promoting gluconeogenesis and glycogenolysis",
      "Alcohol directly inhibits the urea cycle enzymes, causing hyperammonemia",
      "Alcohol oxidation produces acetyl-CoA, which inhibits the TCA cycle and promotes ketogenesis exclusively"
    ],
    answer: 0,
    explanation: "Ethanol is oxidized to acetaldehyde (alcohol dehydrogenase) and then to acetate (aldehyde dehydrogenase), both reactions producing NADH. The greatly elevated NADH/NAD+ ratio inhibits gluconeogenic steps (lactate → pyruvate; malate → OAA), causing hypoglycemia, and shifts fatty acid metabolism toward esterification, promoting alcoholic fatty liver (steatosis)."
  },
  {
    id: 47,
    question: "During the absorptive (fed) state, the portal glucose concentration is highest. Which tissue primarily removes this portal glucose before it reaches the systemic circulation?",
    options: [
      "Intestinal epithelium, via active glucose reabsorption",
      "The liver, using glucokinase to phosphorylate and trap glucose as glucose-6-phosphate",
      "The spleen, via facilitated diffusion through GLUT1",
      "Pancreatic beta cells, which take up and store glucose for insulin secretion"
    ],
    answer: 1,
    explanation: "The liver is the major first-pass organ for dietary glucose. Post-meal portal glucose concentrations may reach 15–20 mM, activating hepatic glucokinase. The liver removes approximately 20–30% of portal glucose by phosphorylating it to glucose-6-phosphate (trapped in the cell), which is then used for glycogen synthesis, glycolysis, or the pentose phosphate pathway."
  },
  {
    id: 48,
    question: "Pyruvate dehydrogenase (PDH) is a key regulatory enzyme at the intersection of glycolysis and the TCA cycle. During the fasting state in liver, PDH is primarily in the inactive (phosphorylated) form. What activates PDH kinase to achieve this?",
    options: [
      "High ADP/ATP ratio and low acetyl-CoA in fasting liver",
      "High acetyl-CoA/CoA ratio and high NADH/NAD+ ratio from elevated beta-oxidation in fasting liver",
      "Glucagon directly phosphorylating PDH kinase via PKA",
      "Low pyruvate concentration inhibiting PDH phosphatase"
    ],
    answer: 1,
    explanation: "PDH kinase phosphorylates and inactivates the PDH complex. It is allosterically activated by its products: high acetyl-CoA/CoA ratio and high NADH/NAD+ ratio. In the fasting liver, elevated beta-oxidation produces abundant acetyl-CoA and NADH, activating PDH kinase. This prevents pyruvate from being oxidized and preserves it for gluconeogenesis."
  },
  {
    id: 49,
    question: "Carnitine palmitoyltransferase deficiency (CPT-II deficiency) most severely affects which tissues, and what are the characteristic metabolic findings?",
    options: [
      "Brain and liver; elevated blood glucose and hypoinsulinemia",
      "Skeletal muscle and heart; exercise-induced myoglobinuria, low plasma ketones during fasting, and elevated long-chain acylcarnitines",
      "Adipose tissue and kidney; impaired lipolysis and hypoglycemia at rest",
      "Liver and intestine; severe hypertriglyceridemia and impaired chylomicron assembly"
    ],
    answer: 1,
    explanation: "CPT-II deficiency impairs transfer of long-chain fatty acids from acylcarnitine back to acyl-CoA inside the mitochondrial matrix. This prevents beta-oxidation in skeletal muscle and heart. Characteristic findings include exercise-induced rhabdomyolysis and myoglobinuria, hypoketonemia during fasting (despite elevated free fatty acids), and accumulation of long-chain acylcarnitines in plasma."
  },
  {
    id: 50,
    question: "The concept of 'metabolic flexibility' refers to the ability of tissues to switch between fuel substrates. In Type 2 diabetes, metabolic inflexibility is observed. Which of the following best describes this metabolic inflexibility?",
    options: [
      "Complete inability to oxidize glucose even when blood glucose is extremely high",
      "Impaired ability to suppress fat oxidation and increase glucose oxidation in response to insulin (in the fed state), and impaired ability to increase fat oxidation during fasting",
      "Inability of adipose tissue to store any triglycerides due to insulin resistance",
      "Constitutive activation of gluconeogenesis regardless of nutritional state, with no regulation by insulin or glucagon"
    ],
    answer: 1,
    explanation: "In healthy individuals, insulin promotes a switch from fat to carbohydrate oxidation in the fed state, while fasting promotes the reverse. In Type 2 diabetes, insulin resistance impairs this switching: skeletal muscle fails to adequately increase glucose oxidation postprandially (Randle cycle effects from elevated fatty acids persist), and fat oxidation is not appropriately suppressed, contributing to ectopic lipid accumulation and worsening insulin resistance."
  }
];

export default questions;
