const questions = [
  // ===== DNA REPLICATION (Q1–Q10) =====
  {
    id: 1,
    question: "DNA replication is described as semi-conservative because:",
    options: ["Both strands of the parent DNA are conserved", "Each daughter molecule contains one parental and one newly synthesized strand", "Only one strand is replicated", "The entire molecule is synthesized de novo"],
    answer: 1,
    explanation: "Semi-conservative replication means each daughter DNA molecule consists of one original (parental) strand and one newly synthesized strand. This was experimentally demonstrated by Meselson and Stahl (1958) using 15N-labeled E. coli DNA."
  },
  {
    id: 2,
    question: "Which enzyme is responsible for unwinding the double helix at the replication fork?",
    options: ["DNA polymerase III", "Topoisomerase", "Helicase", "Primase"],
    answer: 2,
    explanation: "Helicase (e.g., DnaB in E. coli) uses ATP hydrolysis to break hydrogen bonds between complementary base pairs and unwind the double helix at the replication fork. Topoisomerase relieves torsional strain ahead of the fork but does not unwind the helix directly."
  },
  {
    id: 3,
    question: "Okazaki fragments are synthesized on the:",
    options: ["Leading strand in the 5' to 3' direction", "Lagging strand in the 5' to 3' direction", "Leading strand in the 3' to 5' direction", "Lagging strand in the 3' to 5' direction"],
    answer: 1,
    explanation: "Okazaki fragments are short DNA segments (1000–2000 nt in prokaryotes, 100–200 nt in eukaryotes) synthesized on the lagging strand in the 5'→3' direction, opposite to the direction of fork movement. They are later joined by DNA ligase."
  },
  {
    id: 4,
    question: "The enzyme that synthesizes RNA primers during DNA replication is:",
    options: ["RNA polymerase", "Primase", "DNA polymerase I", "Reverse transcriptase"],
    answer: 1,
    explanation: "Primase (DnaG in E. coli) is a specialized RNA polymerase that synthesizes short RNA primers (~10 nt) complementary to the template strand. These primers provide the free 3'-OH group required by DNA polymerase to begin synthesis."
  },
  {
    id: 5,
    question: "Which DNA polymerase in E. coli is primarily responsible for removing RNA primers and filling the gaps?",
    options: ["DNA polymerase I", "DNA polymerase II", "DNA polymerase III", "DNA polymerase IV"],
    answer: 0,
    explanation: "DNA polymerase I possesses 5'→3' exonuclease activity that removes RNA primers and fills the resulting gaps with DNA. Its 3'→5' exonuclease activity also provides proofreading capability."
  },
  {
    id: 6,
    question: "The sliding clamp protein that increases the processivity of DNA polymerase III in E. coli is:",
    options: ["SSB protein", "DnaA protein", "Beta (β) clamp", "DnaB helicase"],
    answer: 2,
    explanation: "The β clamp (encoded by dnaN) is a ring-shaped homodimer that encircles DNA and tethers DNA polymerase III to the template, increasing its processivity to >500,000 nucleotides without dissociation. PCNA serves the analogous function in eukaryotes."
  },
  {
    id: 7,
    question: "Telomerase is a:",
    options: ["DNA-dependent DNA polymerase", "RNA-dependent DNA polymerase (reverse transcriptase)", "DNA-dependent RNA polymerase", "RNA-dependent RNA polymerase"],
    answer: 1,
    explanation: "Telomerase is a ribonucleoprotein with reverse transcriptase activity (TERT subunit). It uses its intrinsic RNA component (TERC) as a template to add repetitive DNA sequences (TTAGGG in humans) to the 3' ends of chromosomes, solving the end-replication problem."
  },
  {
    id: 8,
    question: "The origin of replication in E. coli (oriC) is recognized and bound by:",
    options: ["DnaB protein", "DnaA protein", "DnaG protein", "SSB protein"],
    answer: 1,
    explanation: "DnaA protein recognizes and binds to the 9-mer (DnaA box) repeats within oriC. ATP-bound DnaA promotes local unwinding of the AT-rich 13-mer repeats, creating the initial open complex for replication initiation."
  },
  {
    id: 9,
    question: "The role of topoisomerase II (DNA gyrase) during replication is to:",
    options: ["Synthesize RNA primers", "Join Okazaki fragments", "Relieve positive supercoiling ahead of the replication fork", "Proofread newly synthesized DNA"],
    answer: 2,
    explanation: "DNA gyrase (a type II topoisomerase unique to prokaryotes) introduces negative supercoils by cutting both DNA strands, passing a segment through the break, and resealing. This relieves the positive supercoiling (overwinding) generated ahead of the replication fork."
  },
  {
    id: 10,
    question: "In eukaryotes, the main replicative polymerase for the leading strand is:",
    options: ["Pol α", "Pol δ", "Pol ε", "Pol β"],
    answer: 2,
    explanation: "DNA polymerase ε (epsilon) is the primary leading strand polymerase in eukaryotes. Pol α–primase initiates synthesis with an RNA-DNA primer, Pol δ extends the lagging strand, and Pol β is involved in base excision repair."
  },

  // ===== TRANSCRIPTION (Q11–Q20) =====
  {
    id: 11,
    question: "The sigma (σ) factor in prokaryotic transcription is required for:",
    options: ["Elongation of the RNA chain", "Termination of transcription", "Promoter recognition and binding", "Proofreading of the transcript"],
    answer: 2,
    explanation: "The σ factor associates with the core RNA polymerase (α2ββ'ω) to form the holoenzyme, which can specifically recognize and bind promoter sequences (-10 and -35 elements). After transcription initiation, σ dissociates and the core enzyme continues elongation."
  },
  {
    id: 12,
    question: "The Pribnow box is a conserved sequence found at which position relative to the transcription start site in prokaryotes?",
    options: ["-35 region", "-10 region", "+1 position", "-75 region"],
    answer: 1,
    explanation: "The Pribnow box (consensus TATAAT) is located approximately 10 base pairs upstream of the transcription start site (-10 region). It is AT-rich, facilitating strand separation for transcription initiation. The -35 region (consensus TTGACA) is another important promoter element."
  },
  {
    id: 13,
    question: "Rho-independent termination of transcription in prokaryotes requires:",
    options: ["Rho protein and ATP hydrolysis", "A GC-rich palindromic sequence followed by a poly-U stretch in the RNA", "Sigma factor rebinding", "Release factor RF1"],
    answer: 1,
    explanation: "Rho-independent (intrinsic) termination involves a GC-rich palindrome in the RNA that forms a stable stem-loop (hairpin) structure, followed by a run of U residues. The hairpin stalls RNA polymerase, and the weak rU:dA base pairs allow the transcript to dissociate from the template."
  },
  {
    id: 14,
    question: "In eukaryotes, mRNA is transcribed by:",
    options: ["RNA polymerase I", "RNA polymerase II", "RNA polymerase III", "RNA polymerase IV"],
    answer: 1,
    explanation: "RNA polymerase II transcribes protein-coding genes (mRNA), as well as most snRNAs and microRNAs. RNA Pol I transcribes rRNA (28S, 18S, 5.8S), and RNA Pol III transcribes tRNA, 5S rRNA, and other small RNAs."
  },
  {
    id: 15,
    question: "The TATA box in eukaryotic promoters is recognized by:",
    options: ["TFIIA", "TFIIB", "TBP (TATA-binding protein)", "TFIIF"],
    answer: 2,
    explanation: "TBP (TATA-binding protein), a subunit of TFIID, recognizes and binds the TATA box (consensus TATAAA) located ~25–30 bp upstream of the start site. TBP binding induces a sharp bend in the DNA, nucleating the assembly of the pre-initiation complex."
  },
  {
    id: 16,
    question: "The 5' cap added to eukaryotic mRNA is:",
    options: ["7-methyladenosine linked via a 5'–5' triphosphate bond", "7-methylguanosine linked via a 5'–5' triphosphate bond", "Poly-A tail of ~200 adenines", "A methyl group on the first nucleotide only"],
    answer: 1,
    explanation: "The 5' cap is a 7-methylguanosine (m7G) attached to the first nucleotide of the mRNA via an unusual 5'–5' triphosphate linkage. It protects mRNA from exonuclease degradation, aids in ribosome recognition, and facilitates nuclear export."
  },
  {
    id: 17,
    question: "Polyadenylation of eukaryotic mRNA occurs:",
    options: ["At the 5' end before capping", "At the 3' end after cleavage at the AAUAAA signal", "During splicing in the nucleus", "In the cytoplasm after translation"],
    answer: 1,
    explanation: "Polyadenylation involves recognition of the AAUAAA polyadenylation signal by CPSF (Cleavage and Polyadenylation Specificity Factor), cleavage of the pre-mRNA ~10–30 nt downstream, and addition of ~200 adenine residues by poly(A) polymerase (PAP). The poly(A) tail enhances mRNA stability and translation."
  },
  {
    id: 18,
    question: "Splicing of pre-mRNA introns is catalyzed by:",
    options: ["DNA ligase", "Ribosomes", "Spliceosomes containing snRNPs", "Restriction endonucleases"],
    answer: 2,
    explanation: "Spliceosomes are large ribonucleoprotein complexes composed of five snRNPs (U1, U2, U4, U5, U6) and numerous associated proteins. They recognize splice sites (5' GU, 3' AG, and branch point A), catalyze two transesterification reactions, and join exons while removing introns as lariat structures."
  },
  {
    id: 19,
    question: "Which of the following is NOT a post-transcriptional modification of eukaryotic mRNA?",
    options: ["5' capping", "3' polyadenylation", "Intron splicing", "Methylation of CpG islands in the promoter"],
    answer: 3,
    explanation: "CpG island methylation is an epigenetic modification of DNA (not mRNA) that typically represses transcription. The three major post-transcriptional modifications of eukaryotic mRNA are: 5' capping, 3' polyadenylation, and intron splicing."
  },
  {
    id: 20,
    question: "Alternative splicing allows:",
    options: ["One gene to produce multiple mRNA variants and protein isoforms", "Translation without a start codon", "Replication of RNA viruses", "Transcription without a promoter"],
    answer: 0,
    explanation: "Alternative splicing is a regulated process by which different combinations of exons are joined together from the same pre-mRNA, generating multiple mRNA isoforms. This greatly increases proteome diversity — an estimated >95% of human multi-exon genes undergo alternative splicing."
  },

  // ===== TRANSLATION (Q21–Q30) =====
  {
    id: 21,
    question: "The Shine-Dalgarno sequence in prokaryotic mRNA is important for:",
    options: ["Termination of translation", "Splicing of introns", "Ribosome binding and translation initiation", "Polyadenylation"],
    answer: 2,
    explanation: "The Shine-Dalgarno (SD) sequence (consensus AGGAGG) is located 5–10 nucleotides upstream of the AUG start codon in prokaryotic mRNA. It base-pairs with the complementary anti-SD sequence near the 3' end of 16S rRNA, positioning the ribosome correctly for translation initiation."
  },
  {
    id: 22,
    question: "The amino acid that initiates translation in prokaryotes is:",
    options: ["Methionine", "N-formylmethionine", "Valine", "Alanine"],
    answer: 1,
    explanation: "In prokaryotes, translation is initiated with N-formylmethionine (fMet), which is carried by a special initiator tRNA (fMet-tRNAfMet). The formyl group is later removed. In eukaryotes, unmodified methionine (Met-tRNAi) serves as the initiator."
  },
  {
    id: 23,
    question: "Peptide bond formation during translation is catalyzed by:",
    options: ["Aminoacyl-tRNA synthetase", "Peptidyl transferase (23S rRNA)", "EF-Tu", "Release factor RF1"],
    answer: 1,
    explanation: "Peptidyl transferase activity resides in the 23S rRNA of the large ribosomal subunit (50S in prokaryotes, 60S in eukaryotes). This makes the ribosome a ribozyme — the RNA, not protein, catalyzes peptide bond formation between the aminoacyl-tRNA in the A site and the peptidyl-tRNA in the P site."
  },
  {
    id: 24,
    question: "The wobble hypothesis explains why:",
    options: ["Some amino acids have only one codon", "The third position of a codon can form non-standard base pairs with the anticodon", "Stop codons are recognized by tRNA", "mRNA is read in the 3' to 5' direction"],
    answer: 1,
    explanation: "Crick's wobble hypothesis (1966) states that the first position of the anticodon (which pairs with the third position of the codon) can form non-standard base pairs (e.g., G-U, I-U, I-C, I-A). This allows a single tRNA to recognize multiple synonymous codons, explaining why fewer than 61 tRNAs are needed."
  },
  {
    id: 25,
    question: "Which of the following antibiotics inhibits translation by binding to the 30S ribosomal subunit and causing misreading of mRNA?",
    options: ["Chloramphenicol", "Erythromycin", "Streptomycin", "Rifampicin"],
    answer: 2,
    explanation: "Streptomycin binds to the 16S rRNA of the 30S subunit, distorting the A site and causing misreading of codons (incorporation of wrong amino acids). Chloramphenicol and erythromycin target the 50S subunit. Rifampicin inhibits bacterial RNA polymerase, not translation."
  },
  {
    id: 26,
    question: "During translation elongation in prokaryotes, EF-Tu delivers:",
    options: ["The initiator tRNA to the P site", "Aminoacyl-tRNA to the A site in a GTP-dependent manner", "The mRNA to the ribosome", "Release factors to the A site"],
    answer: 1,
    explanation: "EF-Tu (Elongation Factor Tu) forms a ternary complex with GTP and aminoacyl-tRNA and delivers the charged tRNA to the A site of the ribosome. GTP hydrolysis provides energy for proofreading (kinetic proofreading), ensuring correct codon-anticodon pairing. The eukaryotic homolog is eEF-1A."
  },
  {
    id: 27,
    question: "The stop codons in the universal genetic code are:",
    options: ["UAA, UAG, UGA", "AUG, UAA, UAG", "UAA, UGA, AGU", "UAG, UGA, GUA"],
    answer: 0,
    explanation: "The three stop (nonsense) codons are UAA (ochre), UAG (amber), and UGA (opal). They are not recognized by any tRNA but are recognized by release factors (RF1 recognizes UAA/UAG; RF2 recognizes UAA/UGA in prokaryotes). In eukaryotes, a single eRF1 recognizes all three."
  },
  {
    id: 28,
    question: "Polyribosomes (polysomes) are:",
    options: ["Ribosomes that have completed translation", "Multiple ribosomes translating the same mRNA simultaneously", "Aggregates of free ribosomal subunits", "Ribosomes bound to the nuclear envelope"],
    answer: 1,
    explanation: "Polyribosomes (polysomes) are clusters of ribosomes simultaneously translating the same mRNA molecule. Each ribosome independently synthesizes a polypeptide, increasing the efficiency of protein production. They can be free in the cytoplasm or bound to the endoplasmic reticulum."
  },
  {
    id: 29,
    question: "Aminoacyl-tRNA synthetases ensure fidelity of translation by:",
    options: ["Proofreading at the ribosomal A site", "Correctly charging each tRNA with its cognate amino acid", "Recognizing stop codons", "Catalyzing peptide bond formation"],
    answer: 1,
    explanation: "Aminoacyl-tRNA synthetases (aaRS) catalyze the attachment of the correct amino acid to its cognate tRNA in a two-step reaction using ATP. Many aaRS have an editing (proofreading) site that hydrolyzes misacylated tRNAs, ensuring an error rate of ~1 in 10,000 for amino acid selection."
  },
  {
    id: 30,
    question: "Translocation of the ribosome along the mRNA during elongation requires:",
    options: ["EF-Tu and GTP", "EF-G and GTP", "IF-3 and ATP", "RF-1 and GDP"],
    answer: 1,
    explanation: "EF-G (Elongation Factor G) catalyzes translocation in a GTP-dependent manner, moving the ribosome one codon (3 nucleotides) along the mRNA in the 5'→3' direction. This shifts the peptidyl-tRNA from the A site to the P site and the deacylated tRNA from the P site to the E site. The eukaryotic homolog is eEF-2."
  },

  // ===== GENE REGULATION & OPERONS (Q31–Q40) =====
  {
    id: 31,
    question: "The lac operon in E. coli is an example of:",
    options: ["Constitutive expression", "Negative inducible regulation", "Negative repressible regulation", "Positive repressible regulation"],
    answer: 1,
    explanation: "The lac operon is negatively regulated by the Lac repressor (LacI), which binds the operator and blocks transcription in the absence of lactose. It is inducible because the presence of allolactose (the inducer) causes the repressor to dissociate, allowing transcription. It also has positive regulation via CAP-cAMP."
  },
  {
    id: 32,
    question: "In the lac operon, the inducer molecule is:",
    options: ["Lactose", "Allolactose", "IPTG", "Glucose"],
    answer: 1,
    explanation: "Allolactose, a metabolic by-product of lactose (formed by β-galactosidase), is the natural inducer of the lac operon. It binds to the Lac repressor, causing a conformational change that reduces its affinity for the operator. IPTG is a synthetic non-hydrolyzable inducer used in the laboratory."
  },
  {
    id: 33,
    question: "Catabolite repression of the lac operon involves:",
    options: ["Binding of glucose to the operator", "Low cAMP levels preventing CAP-cAMP activation when glucose is present", "Increased production of Lac repressor", "Degradation of lactose by glucose"],
    answer: 1,
    explanation: "When glucose is abundant, adenylyl cyclase activity is low, resulting in low cAMP levels. Without cAMP, CAP (Catabolite Activator Protein) cannot bind the CAP site upstream of the lac promoter, so RNA polymerase cannot efficiently initiate transcription — even if lactose is present. This ensures glucose is used preferentially."
  },
  {
    id: 34,
    question: "The trp operon in E. coli is regulated by:",
    options: ["Induction by tryptophan", "Repression by tryptophan and attenuation", "Activation by CAP-cAMP complex", "Positive regulation by tryptophan"],
    answer: 1,
    explanation: "The trp operon is regulated at two levels: (1) Repression — tryptophan acts as a corepressor, binding to the aporepressor (TrpR) to form an active repressor that blocks transcription. (2) Attenuation — a leader sequence with a trp-rich peptide allows premature termination when tryptophan is abundant (charged tRNATrp is available)."
  },
  {
    id: 35,
    question: "Attenuation in the trp operon depends on:",
    options: ["Simultaneous transcription and translation in prokaryotes", "Splicing of the leader sequence", "DNA methylation of the operator", "Binding of allolactose to the repressor"],
    answer: 0,
    explanation: "Attenuation works because transcription and translation are coupled in prokaryotes. The ribosome's position on the leader peptide (which contains two Trp codons) determines whether the mRNA forms a terminator or antiterminator stem-loop. When Trp is abundant, the ribosome translates quickly, favoring the terminator hairpin."
  },
  {
    id: 36,
    question: "Enhancers in eukaryotic gene regulation:",
    options: ["Must be located immediately upstream of the promoter", "Can function at distances of thousands of base pairs from the promoter and in either orientation", "Are found only in prokaryotes", "Directly catalyze transcription"],
    answer: 1,
    explanation: "Enhancers are cis-regulatory DNA elements that can be located thousands of base pairs upstream, downstream, or within introns of the gene they regulate. They function in an orientation-independent manner. Transcription factors bind enhancers and interact with the promoter-bound complex through DNA looping, mediated by the Mediator complex and cohesin."
  },
  {
    id: 37,
    question: "Epigenetic silencing of genes by DNA methylation typically involves methylation of:",
    options: ["Adenine at GATC sites", "Cytosine at CpG dinucleotides", "Guanine at GpC sites", "Thymine at TpA sites"],
    answer: 1,
    explanation: "In mammals, DNA methylation occurs predominantly at the C5 position of cytosine in CpG dinucleotides, catalyzed by DNA methyltransferases (DNMT1, DNMT3A, DNMT3B). Methylation of CpG islands in promoter regions typically leads to transcriptional silencing by recruiting methyl-CpG binding proteins and histone deacetylases."
  },
  {
    id: 38,
    question: "Histone acetylation is associated with:",
    options: ["Gene silencing and heterochromatin formation", "Transcriptional activation and euchromatin", "DNA replication inhibition", "mRNA degradation"],
    answer: 1,
    explanation: "Histone acetylation (by histone acetyltransferases, HATs) neutralizes the positive charge on lysine residues of histone tails, weakening histone-DNA interactions and opening chromatin structure (euchromatin). This facilitates transcription factor access and gene activation. Histone deacetylases (HDACs) remove acetyl groups, promoting silencing."
  },
  {
    id: 39,
    question: "RNA interference (RNAi) silences gene expression by:",
    options: ["Methylating the gene promoter directly", "Guiding the RISC complex to degrade complementary mRNA or inhibit its translation", "Blocking RNA polymerase binding", "Removing introns from pre-mRNA"],
    answer: 1,
    explanation: "In RNAi, double-stranded RNA is processed by Dicer into small interfering RNAs (siRNAs, ~21 nt). One strand (guide strand) is loaded into the RISC complex (containing Argonaute protein), which then targets complementary mRNA for cleavage (perfect match) or translational repression (partial match, as with miRNAs)."
  },
  {
    id: 40,
    question: "A constitutive mutant of the lac operon that produces β-galactosidase even in the absence of lactose most likely has a mutation in:",
    options: ["The structural gene lacZ", "The lacI gene (repressor) or the operator sequence", "The lacY gene (permease)", "The CAP binding site"],
    answer: 1,
    explanation: "Constitutive expression of the lac operon occurs when the repressor cannot bind the operator. This can result from: (1) lacI⁻ mutations producing a non-functional repressor, or (2) operator constitutive (Oc) mutations that prevent repressor binding. In both cases, transcription occurs regardless of inducer presence."
  },

  // ===== MUTATIONS & DNA REPAIR (Q41–Q50) =====
  {
    id: 41,
    question: "A transition mutation involves:",
    options: ["Replacement of a purine with a pyrimidine", "Replacement of a purine with another purine or a pyrimidine with another pyrimidine", "Insertion of one or more nucleotides", "Deletion of a large chromosomal segment"],
    answer: 1,
    explanation: "Transitions are point mutations where a purine is replaced by another purine (A↔G) or a pyrimidine by another pyrimidine (C↔T). Transversions involve purine-to-pyrimidine or pyrimidine-to-purine substitutions. Transitions are more common than transversions due to the structural similarity between bases of the same class."
  },
  {
    id: 42,
    question: "A frameshift mutation is caused by:",
    options: ["Substitution of one base for another", "Insertion or deletion of nucleotides not in multiples of three", "Silent mutations in the third codon position", "Chromosomal translocation"],
    answer: 1,
    explanation: "Frameshift mutations result from insertions or deletions (indels) of nucleotides where the number is not a multiple of three. This shifts the reading frame of all downstream codons, usually producing a completely altered and non-functional protein, and often introducing a premature stop codon."
  },
  {
    id: 43,
    question: "Deamination of cytosine produces:",
    options: ["Thymine", "Uracil", "Adenine", "Guanine"],
    answer: 1,
    explanation: "Spontaneous deamination of cytosine converts it to uracil, which pairs with adenine instead of guanine. If not repaired, this leads to a C:G → T:A transition mutation after replication. Uracil-DNA glycosylase (UDG) recognizes and removes uracil from DNA as part of the base excision repair (BER) pathway."
  },
  {
    id: 44,
    question: "Thymine dimers caused by UV radiation are primarily repaired by:",
    options: ["Mismatch repair", "Base excision repair", "Nucleotide excision repair (NER)", "Homologous recombination"],
    answer: 2,
    explanation: "Nucleotide excision repair (NER) is the primary mechanism for repairing bulky, helix-distorting lesions such as cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts caused by UV light. In E. coli, the UvrABC excinuclease removes a 12–13 nt segment containing the damage; in humans, a ~24–32 nt segment is excised."
  },
  {
    id: 45,
    question: "Mismatch repair (MMR) in E. coli distinguishes the newly synthesized strand from the template strand by:",
    options: ["The presence of RNA primers", "Methylation status — the parental strand is methylated at GATC sequences", "The direction of replication", "Histone modifications"],
    answer: 1,
    explanation: "In E. coli, Dam methylase methylates adenine in GATC sequences. Immediately after replication, only the parental strand is methylated (hemimethylated state). MutH endonuclease nicks the unmethylated (newly synthesized) strand, directing MutL and MutS-mediated repair to the correct strand."
  },
  {
    id: 46,
    question: "Xeroderma pigmentosum (XP) is caused by defects in:",
    options: ["Mismatch repair", "Nucleotide excision repair", "Base excision repair", "Homologous recombination"],
    answer: 1,
    explanation: "Xeroderma pigmentosum is an autosomal recessive disorder caused by mutations in any of several XP genes (XPA through XPG) involved in the nucleotide excision repair pathway. Patients are extremely sensitive to UV radiation and have a >1000-fold increased risk of skin cancer due to inability to repair UV-induced DNA damage."
  },
  {
    id: 47,
    question: "The SOS response in E. coli is induced by:",
    options: ["Excess nutrients", "Single-stranded DNA generated by extensive DNA damage", "High temperature only", "Presence of antibiotics"],
    answer: 1,
    explanation: "The SOS response is triggered when RecA protein binds to single-stranded DNA (formed at stalled replication forks or by damage processing). RecA-ssDNA filament stimulates self-cleavage of the LexA repressor, derepressing >40 SOS genes including error-prone DNA polymerases (Pol IV, Pol V), recombination enzymes, and cell division inhibitors."
  },
  {
    id: 48,
    question: "A nonsense mutation:",
    options: ["Changes one amino acid to another", "Creates a premature stop codon", "Has no effect on the protein", "Inserts an additional amino acid"],
    answer: 1,
    explanation: "A nonsense mutation is a point mutation that converts a sense codon (encoding an amino acid) to a stop codon (UAA, UAG, or UGA), resulting in premature termination of translation and a truncated, usually non-functional protein. Nonsense-mediated mRNA decay (NMD) often degrades the aberrant mRNA."
  },
  {
    id: 49,
    question: "Base excision repair (BER) is initiated by:",
    options: ["Endonuclease that cuts both DNA strands", "DNA glycosylase that removes the damaged base", "Helicase that unwinds the DNA", "Ligase that seals single-strand breaks"],
    answer: 1,
    explanation: "BER begins with a specific DNA glycosylase recognizing and cleaving the N-glycosidic bond between the damaged base and the deoxyribose sugar, creating an AP (apurinic/apyrimidinic) site. AP endonuclease then nicks the backbone, followed by gap filling by DNA polymerase β (in mammals) and sealing by DNA ligase III/XRCC1."
  },
  {
    id: 50,
    question: "Homologous recombination repair of double-strand breaks requires:",
    options: ["A homologous DNA template (sister chromatid) and RecA/Rad51", "Only DNA ligase", "Non-homologous end joining (NHEJ) factors Ku70/Ku80", "Translesion synthesis polymerases"],
    answer: 0,
    explanation: "Homologous recombination (HR) repair uses an undamaged homologous sequence (usually the sister chromatid in S/G2 phase) as a template for accurate repair. The process involves end resection (MRN complex, CtIP), strand invasion by Rad51 (RecA homolog in eukaryotes), and DNA synthesis using the intact strand as template. HR is error-free, unlike NHEJ."
  }
]

export default questions
