const questions = [
  {
    id: 1,
    question: "The Drosophila gene bicoid encodes a homeodomain transcription factor that acts as a morphogen. Which of the following best describes how the Bicoid gradient is established?",
    options: [
      "bicoid mRNA is uniformly distributed but the protein is degraded posteriorly by Nanos",
      "bicoid mRNA is localized to the anterior pole and translated; the protein diffuses posteriorly while being degraded",
      "Bicoid protein is secreted and moves through gap junctions from the anterior to posterior",
      "bicoid mRNA is actively transported posteriorly by microtubule motors after initial synthesis"
    ],
    answer: 1,
    explanation: "bicoid mRNA is anchored at the anterior pole of the Drosophila egg by the cytoskeleton; after fertilization it is translated and the protein diffuses posteriorly while being degraded, creating a concentration gradient. This gradient directly activates target genes such as hunchback in a concentration-dependent manner, serving as a classical example of a morphogen."
  },
  {
    id: 2,
    question: "In Drosophila, the gap genes respond to the maternal morphogen gradients. Which pair of gap genes is correctly matched to their expression domains?",
    options: [
      "hunchback — posterior; knirps — anterior",
      "hunchback — anterior; knirps — central-posterior",
      "giant — anterior only; tailless — central",
      "Krüppel — anterior; hunchback — posterior"
    ],
    answer: 1,
    explanation: "hunchback is expressed in the anterior region (activated by high Bicoid concentration) and is repressed posteriorly by Nanos, while knirps is expressed in the central-posterior region. Gap genes subdivide the embryo into broad regions and their products in turn regulate the pair-rule genes."
  },
  {
    id: 3,
    question: "Homeotic (Hox) genes in Drosophila are organized in the Antennapedia and Bithorax complexes. What is the principle of 'posterior prevalence' (posterior dominance) in Hox gene function?",
    options: [
      "Hox genes expressed more posteriorly are transcribed at higher levels than anterior Hox genes",
      "When two Hox proteins are co-expressed in the same cell, the one encoded by the more posteriorly expressed gene suppresses the activity of the more anterior one",
      "Posterior Hox genes are activated earlier in development than anterior Hox genes",
      "Posterior Hox genes have larger homeodomain binding sites than anterior Hox genes"
    ],
    answer: 1,
    explanation: "Posterior prevalence (posterior dominance) means that when Hox proteins encoded by more posteriorly expressed genes are co-present with those of more anteriorly expressed genes, the posterior Hox protein is functionally dominant and determines segment identity. This principle explains why gain-of-function mutations in posterior Hox genes can transform anterior segments to more posterior identities."
  },
  {
    id: 4,
    question: "The Antennapedia mutation in Drosophila causes antennae to be replaced by legs. This is an example of:",
    options: [
      "Loss-of-function of Antennapedia in leg imaginal discs",
      "Gain-of-function of Antennapedia in antennal imaginal discs",
      "Loss-of-function of Distal-less in antennal discs",
      "Gain-of-function of Ultrabithorax in the prothoracic segment"
    ],
    answer: 1,
    explanation: "The dominant Antennapedia mutation causes ectopic gain-of-function expression of the Antp Hox gene in the antennal imaginal disc, reprogramming cells that would normally form antenna to adopt a leg identity. This classic homeotic transformation demonstrated the role of Hox genes in specifying segment identity."
  },
  {
    id: 5,
    question: "In vertebrates, Hox gene clusters are arranged colinearly with their expression pattern. What does 'spatial colinearity' mean in this context?",
    options: [
      "Hox genes at the 3' end of the cluster are expressed more anteriorly along the body axis than those at the 5' end",
      "Hox genes at the 5' end of the cluster are expressed more anteriorly along the body axis",
      "All Hox genes in a cluster are expressed simultaneously in all segments",
      "The order of Hox gene expression in time mirrors their order on the chromosome from 5' to 3'"
    ],
    answer: 0,
    explanation: "Spatial colinearity refers to the correlation between the physical position of a Hox gene in the cluster (3' to 5') and its anterior-to-posterior expression boundary along the body axis; 3'-located Hox genes are expressed more anteriorly. This principle is conserved across bilaterians and reflects the importance of chromatin opening during Hox cluster activation."
  },
  {
    id: 6,
    question: "The segment polarity gene wingless (wg) in Drosophila encodes a Wnt ligand. What is its primary role in segment patterning?",
    options: [
      "Establishing the anterior-posterior identity of entire segments via the morphogen gradient",
      "Maintaining the boundaries between parasegments and specifying cell fates within each parasegment",
      "Activating the expression of gap genes in broad domains",
      "Directing the formation of the dorsal-ventral axis by inhibiting Decapentaplegic"
    ],
    answer: 1,
    explanation: "Wingless (Wg) and Hedgehog (Hh) form a mutually reinforcing signaling loop at parasegment boundaries; Wg maintains engrailed expression in adjacent posterior cells while Hh maintains wg expression in anterior cells. Segment polarity genes, including wg, act last in the Drosophila segmentation cascade to specify cell identities within each segment."
  },
  {
    id: 7,
    question: "During Drosophila dorsal-ventral patterning, the Dorsal protein acts as a morphogen. In ventral cells where Toll signaling is active, Dorsal:",
    options: [
      "Remains in the cytoplasm bound to Cactus and cannot enter the nucleus",
      "Is released from Cactus and enters the nucleus to activate ventral genes like twist and snail",
      "Is phosphorylated and degraded by the proteasome",
      "Moves to the nucleus and represses Decapentaplegic expression in dorsal cells"
    ],
    answer: 1,
    explanation: "In ventral cells, activated Toll signaling leads to degradation of Cactus (the IκB homolog), freeing the NF-κB homolog Dorsal to enter the nucleus where it activates ventral fate genes (twist, snail) and represses dorsal fate genes. The gradient of nuclear Dorsal across the dorsal-ventral axis specifies at least three distinct tissue types: mesoderm, neuroectoderm, and dorsal ectoderm/amnioserosa."
  },
  {
    id: 8,
    question: "In C. elegans, the cell lineage is invariant. The founder cell P4 gives rise exclusively to:",
    options: [
      "The pharynx and intestine",
      "The germline",
      "Body wall muscle and hypodermis",
      "Neurons of the ventral nerve cord"
    ],
    answer: 1,
    explanation: "P4 is the primordial germ cell (PGC) founder in C. elegans, and it divides to produce Z2 and Z3, the two cells that establish the germline. The invariant cell lineage of C. elegans was mapped completely by Sulston and colleagues, enabling precise fate-mapping of every somatic and germline cell."
  },
  {
    id: 9,
    question: "In C. elegans vulval development, the anchor cell (AC) produces LIN-3 (EGF-like ligand). The three vulval precursor cells (VPCs) closest to the AC adopt 1°, 2°, and 3° fates. Which statement correctly describes the lateral signaling involved?",
    options: [
      "The 1° VPC signals to adjacent VPCs via LIN-3 to promote the 2° fate",
      "The 1° VPC signals to adjacent VPCs via LAG-2/DSL (Delta-Notch pathway) to specify the 2° fate",
      "All three VPCs receive equal LIN-3 signal but respond differently based on intrinsic fate determinants",
      "LIN-12 (Notch) in the 1° cell is activated by Delta from the 2° cells, reinforcing the primary fate"
    ],
    answer: 1,
    explanation: "After the AC induces the 1° fate in the closest VPC via LIN-3/EGFR/Ras signaling, the 1° VPC upregulates lateral Delta-like signals (LAG-2) that activate LIN-12 (Notch) in the flanking VPCs, specifying them to the 2° fate. This example beautifully illustrates how inductive and lateral inhibitory signals combine to generate a precise pattern of cell fates."
  },
  {
    id: 10,
    question: "The gene lin-14 in C. elegans controls developmental timing. Mutations in lin-14 that cause temporal cell fate transformations led to the discovery of:",
    options: [
      "The first microRNA (lin-4) and the concept of post-transcriptional gene regulation by small RNAs",
      "The first siRNA pathway involved in RNAi silencing",
      "The concept of neuroendocrine control of larval development",
      "The DAF-16/FOXO pathway regulating longevity"
    ],
    answer: 0,
    explanation: "The heterochronic genes lin-4 and lin-14 revealed the first microRNA regulatory mechanism; lin-4 encodes a small RNA that base-pairs with the 3'UTR of lin-14 mRNA to repress its translation at specific larval stages. This discovery by Ambros and Ruvkun opened the entire field of microRNA biology."
  },
  {
    id: 11,
    question: "In the mouse, the node functions as the Spemann organizer equivalent. It produces the signal Nodal, but also Lefty and Cerberus-like antagonists. Which statement about left-right asymmetry establishment at the node is most accurate?",
    options: [
      "Cilia at the node rotate in a clockwise direction to move Nodal rightward",
      "Monocilia at the node rotate counter-clockwise, generating a leftward flow of morphogen-containing vesicles that breaks bilateral symmetry",
      "Nodal protein is synthesized exclusively on the left side of the node without any requirement for ciliary flow",
      "Left-right asymmetry is established by the asymmetric distribution of gap junctions at the node"
    ],
    answer: 1,
    explanation: "Monocilia at the mouse node rotate counter-clockwise, generating a leftward nodal flow of small morphogen-containing vesicles (nodal vesicular parcels). This physical flow preferentially activates Nodal signaling on the left side, initiating the left-right asymmetry cascade that ultimately specifies organ situs."
  },
  {
    id: 12,
    question: "During Drosophila oogenesis, the oocyte is specified from a cyst of 16 cells connected by ring canals. The oocyte is specified at the posterior and receives gurken (TGF-α) signaling that patterns the egg. Gurken acts on follicle cells to specify posterior follicle cell fate. What happens after posterior follicle cells receive Gurken signal?",
    options: [
      "Posterior follicle cells secrete Oskar protein back into the oocyte to anchor bicoid mRNA",
      "Posterior follicle cells signal back to the oocyte to reorganize the microtubule cytoskeleton, establishing the anterior-posterior axis",
      "Posterior follicle cells activate Torso receptor in the oocyte to pattern the termini",
      "Posterior follicle cells secrete Nanos protein that diffuses to form the posterior morphogen gradient"
    ],
    answer: 1,
    explanation: "After posterior follicle cells receive Gurken/EGF-R signaling, they send an unknown signal back to the oocyte that causes reorganization of the microtubule cytoskeleton, repositioning the minus ends to the anterior and plus ends to the posterior. This cytoskeletal polarity then directs the localization of oskar mRNA to the posterior and bicoid mRNA to the anterior."
  },
  {
    id: 13,
    question: "The French Flag model of morphogen action predicts that a single morphogen at different threshold concentrations specifies multiple cell fates. Which experimental approach provided the strongest early evidence that Bicoid acts as a bona fide morphogen in this manner?",
    options: [
      "Showing that bicoid mRNA is localized to the anterior pole by in situ hybridization",
      "Demonstrating that artificially increasing the number of bicoid gene copies shifts the expression boundaries of target genes posteriorly",
      "Overexpressing Bicoid protein uniformly and observing uniform anterior fate specification",
      "Showing that heat-shock expression of bicoid at random times does not affect segmentation"
    ],
    answer: 1,
    explanation: "Driever and Nüsslein-Volhard showed that increasing the dose of bicoid gene copies shifts the Bicoid protein gradient and the boundaries of target gene expression (e.g., hunchback) posteriorly in a predictable dose-dependent manner, providing strong evidence for concentration-dependent morphogen action. This experiment validated the French Flag model for Bicoid."
  },
  {
    id: 14,
    question: "In zebrafish, the shield acts as the organizer and produces Chordin and Noggin, which are BMP antagonists. The BMP gradient specifies dorsal-ventral fates with high BMP signaling specifying ventral fate. This is analogous to which axis in Drosophila?",
    options: [
      "The anterior-posterior axis in Drosophila, with Bicoid playing the same role as BMP",
      "The dorsal-ventral axis in Drosophila but with inverted polarity — dorsal in Drosophila corresponds to ventral in vertebrates",
      "The terminal system in Drosophila, specified by the Torso pathway",
      "The left-right axis in Drosophila, specified by Nodal-related signals"
    ],
    answer: 1,
    explanation: "The dorsal-ventral axes of arthropods and vertebrates are inverted relative to each other: high BMP (Dpp in flies) signaling specifies dorsal fate in Drosophila but ventral fate in vertebrates, consistent with the inversion hypothesis of body plan evolution. Chordin/Noggin in vertebrates (antagonizing BMP ventrally) are homologs of Short gastrulation (Sog) in Drosophila (antagonizing Dpp dorsally)."
  },
  {
    id: 15,
    question: "PAX6 is a master regulator of eye development that is conserved across animal phyla. When PAX6 is ectopically expressed in Drosophila leg or wing imaginal disc cells, it induces:",
    options: [
      "Formation of vertebrate-type camera eyes in Drosophila",
      "Formation of ectopic Drosophila-type compound eyes on legs, wings, and antennae",
      "Suppression of all imaginal disc growth due to its apoptotic activity",
      "Conversion of leg cells to antennal identity via Hox gene repression"
    ],
    answer: 1,
    explanation: "Ectopic expression of PAX6 (eyeless in Drosophila) in imaginal disc cells induces the formation of ectopic compound eyes in flies, demonstrating that PAX6/eyeless is a master regulator capable of initiating the entire eye developmental program. Remarkably, even mouse Pax6 expressed in flies induces ectopic Drosophila-type compound eyes, illustrating deep functional conservation."
  },
  {
    id: 16,
    question: "The Hedgehog (Hh) signaling pathway in Drosophila involves Patched (Ptc) and Smoothened (Smo). In the absence of Hedgehog ligand, Ptc:",
    options: [
      "Directly phosphorylates and activates the Gli/Ci transcription factor",
      "Constitutively inhibits Smo by preventing its accumulation at the cell surface, leading to proteolytic processing of Ci into a transcriptional repressor",
      "Sequester Hedgehog in the extracellular space to prevent paracrine signaling",
      "Activates the Cos2/Fused kinase complex to promote Ci into its full-length activator form"
    ],
    answer: 1,
    explanation: "In the absence of Hh, Ptc inhibits Smo, allowing the Cos2/Fused/Su(fu) complex to promote phosphorylation of the Cubitus interruptus (Ci) transcription factor and its proteolytic processing into a truncated repressor form (Ci75). Hh binding to Ptc relieves Smo inhibition, disrupting the complex and allowing full-length Ci (Ci155) to enter the nucleus as a transcriptional activator."
  },
  {
    id: 17,
    question: "During mouse limb development, the zone of polarizing activity (ZPA) at the posterior limb bud controls anterior-posterior patterning. The key signal from the ZPA is Sonic Hedgehog (SHH). A bead soaked in SHH placed at the anterior limb bud produces:",
    options: [
      "Mirror-image digit duplication with additional anterior digits identical to the posterior digits",
      "Suppression of all digit formation due to excess Hh signaling",
      "Conversion of the entire limb bud to dorsal identity",
      "Induction of an ectopic apical ectodermal ridge (AER) at the anterior margin"
    ],
    answer: 0,
    explanation: "Implanting an SHH-soaked bead at the anterior limb bud mimics the ZPA signal and causes mirror-image digit duplication, producing extra posterior-type digits at the anterior margin. This experiment, along with classical ZPA transplantation studies, established SHH as the morphogen responsible for digit identity along the anterior-posterior axis."
  },
  {
    id: 18,
    question: "The apical ectodermal ridge (AER) of the developing vertebrate limb produces FGFs that maintain the progress zone. The progress zone model proposes that:",
    options: [
      "Cells in the progress zone receive positional information from the AER that directly specifies proximal vs. distal fate",
      "Cells leaving the progress zone earliest (spending the least time in it) adopt the most proximal fates, while cells remaining longest adopt distal fates",
      "The AER specifies the proximal-distal axis by graded FGF signaling, with high FGF specifying distal fate",
      "AER-derived BMPs specify proximal fate while AER-derived FGFs specify distal fate"
    ],
    answer: 1,
    explanation: "The progress zone model proposes that a population of undifferentiated mesenchymal cells beneath the AER (the progress zone) autonomously measures time spent in this zone; cells exiting earliest acquire proximal fates (e.g., humerus) while cells remaining for longer periods acquire progressively distal fates (e.g., digits). Alternative models propose that the entire proximal-distal axis is pre-patterned early, but the progress zone model remains influential."
  },
  {
    id: 19,
    question: "In Xenopus, the Spemann-Mangold organizer induces neural tissue in overlying ectoderm. The 'default model' of neural induction proposes that:",
    options: [
      "Ectodermal cells are intrinsically programmed to become neural unless instructed by BMP signals to become epidermis",
      "Neural induction requires a positive inductive signal from the organizer that overrides an intrinsic epidermal fate",
      "BMP signals from the organizer promote neural fate while BMP antagonists from the ectoderm suppress it",
      "Neural fate requires cooperative signaling by both FGF and Wnt from the organizer"
    ],
    answer: 0,
    explanation: "The default model proposes that naive ectoderm is intrinsically programmed to form neural tissue, but BMP signaling (which is active throughout the ectoderm) suppresses this fate and drives epidermal differentiation. The Spemann organizer secretes BMP antagonists (Chordin, Noggin, Follistatin) that block BMP signaling in the dorsal ectoderm, thereby allowing the default neural fate to be realized."
  },
  {
    id: 20,
    question: "Planarian flatworms exhibit extraordinary regenerative capacity. The anterior-posterior axis in regenerating planarians is re-established by which key signaling pathway?",
    options: [
      "Hedgehog signaling from anterior wounds specifies head regeneration",
      "Wnt/β-catenin signaling: high Wnt activity specifies tail fate and low activity (with Wnt inhibitor expression) specifies head fate",
      "Notch signaling from neoblasts specifies polarity by lateral inhibition",
      "BMP signaling specifies the anterior pole while BMP antagonists specify the posterior"
    ],
    answer: 1,
    explanation: "In planarians, Wnt/β-catenin signaling is graded along the anterior-posterior axis, with high Wnt activity in the posterior specifying tail fate and Wnt inhibitors (e.g., Sfrp, notum, sFRP) expressed anteriorly suppressing Wnt to allow head fate. RNAi knockdown of β-catenin in planarians causes the formation of heads at both wound sites, demonstrating the primacy of this pathway."
  },
  {
    id: 21,
    question: "In Drosophila, the segment polarity genes are activated by the pair-rule genes. Which of the following correctly describes the hierarchy of the Drosophila segmentation cascade?",
    options: [
      "Maternal genes → gap genes → segment polarity genes → pair-rule genes → homeotic genes",
      "Maternal genes → gap genes → pair-rule genes → segment polarity genes → homeotic genes",
      "Gap genes → maternal genes → pair-rule genes → homeotic genes → segment polarity genes",
      "Pair-rule genes → gap genes → maternal genes → segment polarity genes → homeotic genes"
    ],
    answer: 1,
    explanation: "The Drosophila segmentation cascade proceeds hierarchically: maternal effect genes (e.g., bicoid, nanos) establish broad gradients that activate gap genes (e.g., hunchback, Krüppel) in broad domains; gap genes activate pair-rule genes (e.g., even-skipped, fushi tarazu) in seven-stripe patterns; pair-rule genes then activate segment polarity genes (e.g., engrailed, wingless); and finally homeotic genes specify segment identity."
  },
  {
    id: 22,
    question: "Mouse embryonic stem cells (mESCs) are maintained in a pluripotent state by a core transcription factor network. Which combination of factors is considered the core pluripotency circuitry?",
    options: [
      "Sox2, Klf4, and c-Myc",
      "Oct4, Sox2, and Nanog",
      "Oct4, Klf4, and Rex1",
      "Nanog, Esrrb, and Tbx3"
    ],
    answer: 1,
    explanation: "Oct4, Sox2, and Nanog form the core pluripotency transcription factor network in mESCs; they co-occupy and activate each other's promoters and jointly regulate thousands of target genes. Oct4 and Sox2 act as a heterodimer to activate Nanog and other pluripotency genes, while Nanog reinforces the network and suppresses differentiation."
  },
  {
    id: 23,
    question: "Yamanaka's generation of induced pluripotent stem cells (iPSCs) demonstrated that somatic cell reprogramming can be achieved by overexpressing four transcription factors (Oct4, Sox2, Klf4, c-Myc). Which of the following statements about iPSC reprogramming is most accurate?",
    options: [
      "Reprogramming is instantaneous and all transduced cells uniformly become iPSCs",
      "Reprogramming is a stochastic, epigenetic process involving genome-wide chromatin remodeling, and only a small fraction of transduced cells successfully reprogram",
      "c-Myc is essential for reprogramming and cannot be replaced by any other factor",
      "iPSCs are epigenetically identical to ESCs in all respects, with no detectable differences"
    ],
    answer: 1,
    explanation: "iPSC reprogramming is a highly inefficient, stochastic process where only a small fraction (~0.01-0.1%) of transduced cells successfully become iPSCs; this involves sequential epigenetic resetting including histone modification changes and DNA demethylation at pluripotency loci. c-Myc is not strictly essential (though it improves efficiency), and iPSCs retain some epigenetic memory of the donor cell type."
  },
  {
    id: 24,
    question: "In C. elegans, the asymmetric division of the P1 blastomere is regulated by PAR proteins. The PAR-3/PAR-6/aPKC complex localizes to the anterior cortex, while PAR-1/PAR-2 localizes posteriorly. How do PAR proteins influence cell fate asymmetry?",
    options: [
      "PAR proteins directly activate transcription factors specifying somatic vs. germline fate",
      "The PAR asymmetry controls the distribution of cell fate determinants such as PIE-1 and MEX-5/6, which are segregated to specific daughter cells",
      "PAR proteins regulate spindle orientation exclusively, with no direct effect on cell fate determinant localization",
      "PAR proteins are required only for maintaining polarity in epithelial cells, not during early embryonic divisions"
    ],
    answer: 1,
    explanation: "The anterior PAR-3/PAR-6/aPKC and posterior PAR-1/PAR-2 complexes establish a cortical asymmetry that controls the cytoplasmic distribution of fate determinants. MEX-5/6 (somatic determinants) are enriched in the anterior by anterior PAR activity, while germline determinants like PIE-1 and P granules are enriched posteriorly by PAR-1/2, ensuring they segregate to the germline P2 daughter."
  },
  {
    id: 25,
    question: "The concept of 'morphogenetic field' in developmental biology refers to:",
    options: [
      "The physical force field generated by cells migrating during gastrulation",
      "A group of cells whose position and fate are specified with respect to the same set of boundaries and signaling centers, such that any portion can regenerate the whole",
      "The electric field generated by wound healing that guides cell migration",
      "The domain of expression of a single homeotic gene within a segment"
    ],
    answer: 1,
    explanation: "A morphogenetic field is a group of cells whose positional identities are specified collectively relative to shared boundaries and organizing centers, giving the field the property of regulative development (the ability of any part to regenerate the whole). Classic examples include the imaginal discs of Drosophila and the limb field of vertebrates."
  },
  {
    id: 26,
    question: "During vertebrate neural tube closure, the neural plate undergoes convergent extension. Which molecular pathway primarily drives convergent extension movements?",
    options: [
      "The canonical Wnt/β-catenin signaling pathway activating target gene transcription",
      "The planar cell polarity (PCP)/non-canonical Wnt pathway, which polarizes cellular protrusive activity along the mediolateral axis",
      "FGF receptor signaling that promotes cell intercalation in the anterior-posterior direction",
      "Notch-Delta lateral inhibition that coordinates cell shape changes across the neural plate"
    ],
    answer: 1,
    explanation: "Convergent extension during neural tube closure and gastrulation is primarily driven by the planar cell polarity (PCP)/non-canonical Wnt pathway, which asymmetrically localizes proteins (e.g., Vangl2, Celsr1, Dvl) to medial and lateral cell surfaces, polarizing lamellipodia and driving intercalation of cells along the mediolateral axis to narrow and lengthen the tissue."
  },
  {
    id: 27,
    question: "The imaginal discs of Drosophila are specified during embryogenesis and grow during larval stages. Which gene is necessary and sufficient to specify the eye imaginal disc identity?",
    options: [
      "vestigial (vg)",
      "eyeless (ey) / PAX6",
      "Distal-less (Dll)",
      "antennapedia (Antp)"
    ],
    answer: 1,
    explanation: "eyeless (ey), the Drosophila PAX6 homolog, is the master regulator of eye disc specification; loss of eyeless results in eyeless flies, and ectopic expression can induce eye tissue in other imaginal discs. vestigial specifies wing identity, Distal-less specifies appendage distal identity, and Antennapedia specifies leg identity."
  },
  {
    id: 28,
    question: "Which of the following best explains why Hox gene knockout mice often show homeotic transformations of vertebral identity rather than complete deletion of affected vertebrae?",
    options: [
      "Hox genes primarily regulate cell survival rather than positional identity",
      "Hox genes act in a combinatorial (Hox code) manner, and neighboring Hox genes provide partially redundant positional information, so loss of one shifts the Hox code posteriorly",
      "Hox genes are expressed only transiently during somitogenesis and their absence is compensated by re-expression",
      "Vertebral identity is specified by Pax genes, with Hox genes playing only a minor role"
    ],
    answer: 1,
    explanation: "Vertebral identity in mice is determined by the combinatorial Hox code (which Hox genes are expressed in a given somite). When one Hox gene is knocked out, neighboring Hox genes shift the code so that the affected vertebra tends to take on the identity of the next more anterior segment (anterior transformation), rather than being deleted entirely."
  },
  {
    id: 29,
    question: "Nanos protein in Drosophila is a translational repressor. It represses hunchback mRNA in the posterior of the embryo. If nanos is mutated (loss-of-function), what is the predicted phenotype?",
    options: [
      "Loss of all abdominal segments due to ectopic Hunchback protein throughout the embryo",
      "Duplication of anterior head structures at the posterior pole",
      "Loss of anterior segments due to reduced Bicoid protein gradient",
      "Transformation of thoracic segments to abdominal identity"
    ],
    answer: 0,
    explanation: "Nanos protein represses hunchback mRNA translation in the posterior embryo. In nanos mutants, Hunchback protein is expressed throughout the embryo including the posterior, where it represses posterior gap genes and prevents abdominal segmentation, resulting in loss of abdominal segments. This demonstrated the critical role of Nanos in establishing posterior identity through translational repression."
  },
  {
    id: 30,
    question: "The Notch signaling pathway mediates lateral inhibition in neural development. In the developing vertebrate nervous system, which mechanism ensures that only a subset of equipotent progenitors differentiate into neurons?",
    options: [
      "Neurogenic progenitors express high Delta, activating Notch in neighbors, which represses their Delta expression and keeps them as progenitors; one cell stochastically becomes the neuron",
      "All progenitors simultaneously differentiate, but only neurons that successfully migrate survive",
      "BMP signals from differentiated neurons inhibit further neurogenesis in adjacent progenitors",
      "Proneural gene expression is uniformly low, and random variation in cell division rate determines neuronal fate"
    ],
    answer: 0,
    explanation: "In lateral inhibition, stochastic differences in Delta expression among equipotent progenitors are amplified by a feedback loop: a cell with slightly more Delta activates Notch in its neighbors, which suppresses their Delta expression (via Hes/Hey repressors), which in turn reduces Notch activation in the original cell, allowing it to upregulate proneural genes further and commit to neuronal fate. This ensures sparse, salt-and-pepper neuronal differentiation."
  },
  {
    id: 31,
    question: "In Drosophila, the pair-rule gene even-skipped (eve) is expressed in 7 stripes. The stripe 2 enhancer of eve is directly regulated by which combination of factors?",
    options: [
      "Bicoid (activator), Hunchback (activator), Giant (repressor), and Krüppel (repressor)",
      "Nanos (activator), Caudal (activator), Knirps (repressor), and Tailless (repressor)",
      "Dorsal (activator), Twist (activator), Snail (repressor), and Dpp (repressor)",
      "Wingless (activator), Engrailed (activator), Hedgehog (repressor), and Patched (repressor)"
    ],
    answer: 0,
    explanation: "The eve stripe 2 enhancer is a classic example of combinatorial control: Bicoid and Hunchback are activators that drive stripe 2 expression in the anterior, while Giant (anteriorly expressed) and Krüppel (posteriorly expressed) are repressors that restrict the stripe's anterior and posterior boundaries, respectively. This enhancer was a landmark demonstration that complex gene expression patterns are encoded in cis-regulatory modules."
  },
  {
    id: 32,
    question: "During gastrulation in Xenopus, mesoderm induction occurs at the equatorial region (marginal zone). Which signaling molecule, produced by the vegetal cells (Nieuwkoop center), is the primary inducer of the Spemann organizer in the dorsal marginal zone?",
    options: [
      "BMP4",
      "Nodal/Activin-related signals (e.g., Vg1, Xnr1)",
      "Wnt8",
      "FGF8"
    ],
    answer: 1,
    explanation: "Nodal-related signals (including Xnr1-6 and Vg1, which are Activin-related TGF-β family members) produced by vegetal cells of the Nieuwkoop center are the primary mesoderm-inducing signals that induce organizer identity in the dorsal marginal zone. The combination of Nodal and stabilized β-catenin in dorsal cells specifies organizer properties."
  },
  {
    id: 33,
    question: "The phenomenon of transdetermination in Drosophila imaginal discs refers to:",
    options: [
      "The ability of imaginal disc cells to terminally differentiate into adult structures upon metamorphosis",
      "The heritable switch of one imaginal disc to the developmental program of another disc type, occurring during serial transplantation or wounding",
      "The respecification of an imaginal disc's proximal-distal axis in response to wounding",
      "The transformation of larval cells into imaginal disc cells during disc growth"
    ],
    answer: 1,
    explanation: "Transdetermination is the heritable change in the determined state of imaginal disc cells from one disc identity to another (e.g., leg disc cells giving rise to wing tissue); it occurs at low frequency during serial transplantation and is associated with epigenetic changes and activation of signaling pathways like Wingless. Transdetermination helped establish the concept of determined cell states as stable but not irreversibly fixed."
  },
  {
    id: 34,
    question: "In mice, conditional knockout of Oct4 specifically in the inner cell mass (ICM) results in:",
    options: [
      "Failure to form the trophectoderm",
      "Failure of ICM cells to maintain pluripotency; they instead adopt trophectoderm-like identity",
      "Normal embryonic development because Oct4 is not required after blastocyst formation",
      "Redirection of ICM cells to primitive endoderm fate"
    ],
    answer: 1,
    explanation: "Oct4 is essential for maintaining pluripotency and ICM identity; its conditional deletion causes ICM cells to lose pluripotency and transdifferentiate into trophectoderm-like cells, demonstrating that Oct4 actively suppresses trophectoderm fate. This showed that the default fate of ICM cells without Oct4 is trophectoderm, not pluripotency."
  },
  {
    id: 35,
    question: "The model organism C. elegans has exactly 959 somatic cells in adult hermaphrodites. This constancy is due to a fixed invariant lineage, but also to a precise number of programmed cell deaths (apoptosis). How many cells undergo programmed death during C. elegans development?",
    options: [
      "11 cells",
      "131 cells",
      "302 cells",
      "558 cells"
    ],
    answer: 1,
    explanation: "Exactly 131 cells undergo programmed cell death (apoptosis) during C. elegans development; the adult has 959 somatic cells (1090 total cells are generated minus 131). The genetic analysis of these deaths by Brenner, Sulston, and Horvitz established the core apoptotic pathway (ced-3, ced-4, ced-9), which is conserved in all animals as caspases, Apaf-1, and Bcl-2 family members, respectively."
  },
  {
    id: 36,
    question: "During mouse hematopoietic stem cell (HSC) differentiation, the transcription factor GATA-1 specifies erythroid and megakaryocyte lineages, while PU.1 specifies myeloid and lymphoid lineages. These factors directly antagonize each other. This is an example of:",
    options: [
      "Epigenetic silencing of lineage-specific genes by Polycomb complexes",
      "A binary cell fate switch controlled by mutual transcriptional repression between lineage-specifying factors",
      "Asymmetric cell division where one daughter inherits GATA-1 and the other inherits PU.1",
      "Post-translational regulation of cell fate by ubiquitin-mediated degradation of fate determinants"
    ],
    answer: 1,
    explanation: "GATA-1 and PU.1 proteins physically interact and mutually repress each other's transcriptional activity; a small stochastic imbalance in the levels of these two factors is amplified into a binary decision, committing a multipotent progenitor to either the erythro-megakaryocytic or the myeloid/lymphoid lineage. This represents a classic toggle switch mechanism in cell fate determination."
  },
  {
    id: 37,
    question: "The Polycomb group (PcG) and Trithorax group (TrxG) proteins regulate Hox gene expression during development. Which statement best describes their mechanism?",
    options: [
      "PcG proteins activate Hox genes by depositing H3K4me3 marks, while TrxG proteins repress them with H3K27me3",
      "PcG proteins maintain Hox gene repression via H3K27me3 and compaction of chromatin, while TrxG proteins maintain active expression via H3K4me3; once established, these states are heritably maintained through cell divisions",
      "PcG and TrxG proteins compete to bind the same DNA sequences and directly regulate RNA polymerase II pausing",
      "PcG proteins are only required during embryogenesis while TrxG proteins maintain Hox expression in adult tissues"
    ],
    answer: 1,
    explanation: "PcG complexes (PRC1 and PRC2) deposit H3K27me3 marks and compact chromatin at Hox loci to heritably repress them, while TrxG complexes deposit H3K4me3 and maintain active chromatin to heritably sustain Hox expression. These opposing activities are established by early positional signals and are then propagated through cell divisions independently of the original signals, providing epigenetic memory of positional identity."
  },
  {
    id: 38,
    question: "In Xenopus animal cap explants, treatment with Activin (a TGF-β family member) at different concentrations induces different mesodermal fates in a dose-dependent manner. This experiment demonstrated that:",
    options: [
      "Activin is a chemoattractant rather than a morphogen",
      "A single signaling molecule can specify multiple distinct cell fates in a concentration-dependent manner, supporting the morphogen concept for vertebrate axis patterning",
      "Animal cap cells are already committed to specific mesodermal fates prior to Activin treatment",
      "High Activin concentrations induce epidermal fate while low concentrations induce neural fate"
    ],
    answer: 1,
    explanation: "Gurdon and colleagues showed that Activin at low concentrations induces ventral mesoderm (muscle) while high concentrations induce dorsal mesoderm (notochord) in Xenopus animal cap cells, providing elegant evidence that a morphogen gradient can pattern multiple cell types in a concentration-dependent manner. This became a benchmark for the morphogen field concept in vertebrate development."
  },
  {
    id: 39,
    question: "The SRY gene on the Y chromosome initiates male sex determination in mammals. In the bipotential gonad, SRY activates SOX9, which then drives Sertoli cell differentiation. What is the consequence of SRY expression in the bipotential gonad?",
    options: [
      "SRY directly promotes Leydig cell differentiation to produce testosterone",
      "SRY activates SOX9, which promotes Sertoli cell differentiation and testis cord formation, while actively repressing the female pathway (WNT4/RSPO1/FOXL2)",
      "SRY acts as a transcriptional repressor of anti-Müllerian hormone (AMH) in granulosa cells",
      "SRY promotes FOXL2 expression, which then drives SOX9 in a sex-specific manner"
    ],
    answer: 1,
    explanation: "SRY is a transient transcription factor that activates SOX9 expression in the supporting cell lineage; SOX9 then drives Sertoli cell specification, initiates testis cord formation, and activates AMH. Crucially, the male pathway actively represses the female pathway: SOX9 and Sertoli-derived signals suppress WNT4/RSPO1/FOXL2, and conversely, in XX gonads, FOXL2 and the WNT pathway suppress SOX9."
  },
  {
    id: 40,
    question: "During Drosophila eye development, the morphogenetic furrow sweeps across the eye disc from posterior to anterior. Cells posterior to the furrow differentiate into photoreceptors via the EGFR/Ras pathway and Notch signaling. The proneural gene atonal is expressed at the furrow and specifies which photoreceptor?",
    options: [
      "R1/R6 photoreceptors",
      "R3/R4 photoreceptors",
      "R7 photoreceptor",
      "R8 photoreceptor, the founding cell of each ommatidium"
    ],
    answer: 3,
    explanation: "atonal is required for the specification of the R8 photoreceptor, which is the first photoreceptor to differentiate at the morphogenetic furrow and serves as the founder cell that recruits all other photoreceptors (R1-R7) into each ommatidium. R8 specification by Atonal is followed by its own lateral inhibition to ensure spacing of founder cells."
  },
  {
    id: 41,
    question: "The process of embryonic induction, first demonstrated by Spemann and Mangold (1924), involves the organizer (dorsal blastopore lip) inducing the overlying ectoderm to form neural tissue. Which tissue was transplanted and what was the key result?",
    options: [
      "Ventral mesoderm was transplanted to the dorsal side, inducing a secondary gut",
      "The dorsal blastopore lip (organizer) from a pigmented donor was transplanted to the ventral side of an unpigmented host, inducing a secondary neural axis including a second nervous system derived primarily from host tissue",
      "The animal cap was grafted onto the vegetal pole, inducing a secondary axis",
      "Neural plate tissue was transplanted to the belly, inducing skin transformation to neural identity"
    ],
    answer: 1,
    explanation: "Spemann and Mangold transplanted the dorsal blastopore lip (organizer) from a pigmented newt gastrula to the ventral side of an unpigmented host; the result was a conjoined twin with a secondary body axis including neural tube and notochord, with the secondary nervous system derived almost entirely from host (unpigmented) tissue. This demonstrated that the organizer induces, not contributes to, neural tissue."
  },
  {
    id: 42,
    question: "Long-range morphogen gradient formation can occur by several mechanisms. The 'transcytosis' model proposes that morphogens spread by:",
    options: [
      "Free diffusion through the extracellular space",
      "Sequential endocytosis and re-secretion by receiving cells, creating a relay of morphogen movement",
      "Active transport along cytonemes (long filopodial extensions) from the source to distant cells",
      "Association with heparan sulfate proteoglycans that buffer and limit morphogen diffusion"
    ],
    answer: 1,
    explanation: "The transcytosis model proposes that morphogens such as Wingless in Drosophila spread by being sequentially endocytosed and re-secreted by receiving cells, creating a relay mechanism that moves the morphogen across tissue distances without simple diffusion. This was supported by experiments showing that blocking endocytosis disrupts Wingless gradient formation."
  },
  {
    id: 43,
    question: "In mouse embryonic development, the trophectoderm (TE) is specified from the inner cell mass (ICM) at the blastocyst stage. The key transcription factor specifying trophectoderm identity is:",
    options: [
      "Nanog",
      "GATA6",
      "CDX2",
      "SOX17"
    ],
    answer: 2,
    explanation: "CDX2 is the master transcription factor specifying trophectoderm identity; it is activated in outer blastomeres by Hippo pathway inactivation (due to reduced cell-cell contact) and promotes TE fate while repressing Oct4 and Nanog. Nanog maintains ICM pluripotency, GATA6 specifies primitive endoderm, and SOX17 is expressed in primitive endoderm and definitive endoderm."
  },
  {
    id: 44,
    question: "In Drosophila, the terminal patterning system specifies the most anterior (acron) and posterior (telson) regions. The key ligand activating this system is Torso-like (a protease) that locally activates the Trunk/Torso RTK pathway. Loss of torso results in:",
    options: [
      "Loss of posterior abdominal segments only",
      "Loss of both the most anterior acron structures (head/anterior cap) and the most posterior telson structures, with expansion of the central body pattern",
      "Conversion of the anterior head to posterior tail identity",
      "Loss of all segmentation, producing a larva with only head and tail"
    ],
    answer: 1,
    explanation: "The Torso RTK pathway is activated only at the embryo termini (where Torso-like processes the Trunk ligand), and loss of torso results in deletion of both the acron (anterior terminal structures) and telson (posterior terminal structures) while the central segmented region expands. This demonstrated that the terminal system is genetically separable from the main anterior-posterior patterning system."
  },
  {
    id: 45,
    question: "During vertebrate somitogenesis, the segmentation clock generates periodic waves of gene expression that sweep anteriorly across the presomitic mesoderm (PSM). Which signaling pathway primarily drives this oscillation?",
    options: [
      "Hedgehog signaling oscillations regulated by Ptc feedback",
      "Notch, Wnt, and FGF pathways oscillate out of phase, with Notch oscillations being the primary clock",
      "BMP signaling pulses from the node drive periodic anterior condensation of the PSM",
      "Retinoic acid oscillations from the somites set the clock frequency"
    ],
    answer: 1,
    explanation: "The segmentation clock involves coupled oscillations of the Notch, Wnt, and FGF signaling pathways across the PSM, with Notch oscillations (involving Hes/Her genes) considered the primary oscillator in vertebrates. Gradients of FGF8 (posterior) and retinoic acid (anterior) create the determination front where oscillating gene expression is converted into stable segmental boundaries."
  },
  {
    id: 46,
    question: "The concept of 'competence' in embryonic induction means that:",
    options: [
      "The inducing tissue must express the correct inductive signal at the right level",
      "The responding tissue has the capacity to respond to an inductive signal only during a specific developmental window",
      "Both the inducing and responding tissues must be in direct cell-cell contact",
      "The signal must be above a threshold concentration to elicit any response"
    ],
    answer: 1,
    explanation: "Competence refers to the ability of a tissue to respond to a given inductive signal, and this ability is typically restricted to a specific developmental window; before or after this period, the same signal will not elicit the same response. Competence depends on the expression of appropriate signal receptors and downstream effectors in the responding tissue."
  },
  {
    id: 47,
    question: "The hedgehog pathway inhibitor vismodegib (GDC-0449), used clinically for basal cell carcinoma, acts by targeting:",
    options: [
      "The Hedgehog ligand directly, preventing its binding to Patched",
      "Smoothened (Smo), inhibiting its activation even when Patched is inhibited by Hedgehog",
      "Gli transcription factors, preventing their nuclear import",
      "Patched (Ptc), mimicking Hedgehog ligand binding to activate the pathway"
    ],
    answer: 1,
    explanation: "Vismodegib is a small molecule inhibitor that binds to and inhibits Smoothened (Smo), blocking downstream Hedgehog signaling regardless of upstream Patched status. Constitutively activating mutations in Smo (or loss-of-function mutations in Ptc) are common drivers of basal cell carcinoma, making Smo an effective therapeutic target."
  },
  {
    id: 48,
    question: "During neural crest cell (NCC) specification in vertebrates, the transcription factors SLUG/SNAIL and SOX9/SOX10 are induced at the neural plate border. NCCs subsequently undergo epithelial-to-mesenchymal transition (EMT) and migrate extensively. Which canonical Wnt ligand source primarily maintains NCC multipotency during migration?",
    options: [
      "Wnt ligands from the epidermis overlying migrating NCCs",
      "Wnt ligands from the paraxial mesoderm, primarily the dermomyotome",
      "Autocrine Wnt signaling within NCCs themselves",
      "Wnt ligands from the dorsal neural tube, the site of NCC delamination"
    ],
    answer: 3,
    explanation: "Canonical Wnt signals from the dorsal neural tube are required for NCC specification and early migration; these Wnt ligands promote expression of NCC specifier genes and help maintain multipotency. Wnt signaling continues to influence NCC fate decisions (e.g., promoting melanocyte fate vs. neuronal fate) as cells migrate."
  },
  {
    id: 49,
    question: "In Drosophila wing disc development, the Apterous (Ap) homeodomain protein specifies dorsal compartment identity and establishes the dorsal-ventral (D-V) boundary. At the D-V boundary, Wingless is expressed. Loss of apterous specifically in dorsal cells causes:",
    options: [
      "Expansion of the wing disc with extra wing margin",
      "Loss of the wing margin, loss of dorsal-ventral boundary signaling, and failure to induce Wingless at the D-V boundary",
      "Conversion of dorsal cells to ventral identity with mirror-image duplication of ventral structures",
      "Apoptosis of the entire dorsal compartment and loss of the wing disc"
    ],
    answer: 1,
    explanation: "Apterous specifies dorsal compartment identity and is required for the activation of Fringe, which modifies Notch to restrict its activation to the D-V boundary; loss of Apterous disrupts Fringe expression, Notch activation at the boundary, Wingless induction, and ultimately wing margin formation. This demonstrates how a single compartment-specific factor can orchestrate boundary signaling."
  },
  {
    id: 50,
    question: "The Wnt/β-catenin pathway is a major regulator of stem cell self-renewal in the intestinal crypt. In the absence of Wnt signaling, β-catenin is targeted for degradation by a destruction complex. Which proteins constitute the core destruction complex?",
    options: [
      "GSK-3β, Axin, APC, and CK1",
      "Dishevelled, LRP5/6, Frizzled, and GBP",
      "β-TrCP, GSK-3β, Frizzled, and Axin",
      "APC, Dishevelled, CK1, and β-TrCP"
    ],
    answer: 0,
    explanation: "The β-catenin destruction complex consists of GSK-3β, Axin, APC, and CK1; CK1 and GSK-3β sequentially phosphorylate β-catenin, which is then recognized by β-TrCP (an E3 ubiquitin ligase) and targeted for proteasomal degradation. Wnt signaling recruits Dishevelled to inhibit this complex via LRP5/6 co-receptors, allowing β-catenin to accumulate and enter the nucleus."
  }
];

export default questions;
