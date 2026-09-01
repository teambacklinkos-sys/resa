const questions = [
  {
    id: 1,
    question: "In bacterial conjugation, which of the following is the minimal region of the F plasmid required for transfer initiation?",
    options: ["oriT (origin of transfer)", "oriV (origin of vegetative replication)", "tra operon promoter", "IS3 element"],
    answer: 0,
    explanation: "oriT is the cis-acting sequence where nicking occurs to initiate strand transfer during conjugation. The tra operon-encoded proteins act in trans, but oriT must be present on the DNA being transferred."
  },
  {
    id: 2,
    question: "An Hfr strain transfers chromosomal genes to an F− recipient in a time-dependent manner. The last gene transferred is always the F factor sequences themselves. What does this indicate?",
    options: ["F integrates randomly into the chromosome", "The F origin of transfer is at one end of the integrated F factor, and transfer begins opposite to F sequences", "Hfr cells always lose their F factor during conjugation", "Recombination frequency increases with distance from oriT"],
    answer: 1,
    explanation: "In Hfr strains, F integrates into the chromosome and oriT is at one end. Transfer begins at oriT and proceeds linearly; since F sequences are at the trailing end, they are transferred last (and rarely, due to mating pair disruption)."
  },
  {
    id: 3,
    question: "Which type of transduction can transfer any bacterial gene, and what mechanism explains its non-selectivity?",
    options: ["Specialized transduction; phage integrates adjacent to any gene", "Generalized transduction; random packaging of host DNA fragments into phage heads during the lytic cycle", "Cotransduction; linked genes are co-packaged based on map distance", "Abortive transduction; fragments circularize independently of location"],
    answer: 1,
    explanation: "In generalized transduction (e.g., phage P1 in E. coli), the phage packaging machinery occasionally mispackages a fragment of host chromosomal DNA instead of phage DNA, enabling transfer of any gene. This is a stochastic error in the headful packaging mechanism."
  },
  {
    id: 4,
    question: "In the Griffith transformation experiment, what was the chemical nature of the 'transforming principle' later identified by Avery, MacLeod, and McCarty?",
    options: ["Protein, as demonstrated by protease sensitivity", "RNA, as it was RNase-resistant but DNase-sensitive", "DNA, as only DNase treatment abolished transforming activity", "Polysaccharide capsule, as it conferred virulence directly"],
    answer: 2,
    explanation: "Avery et al. showed that the transforming principle was DNA: treatment with DNase abolished transformation, while protease and RNase had no effect. This was the first direct evidence that DNA is the genetic material."
  },
  {
    id: 5,
    question: "A plasmid carrying the bom (basis of mobility) site but lacking tra genes can still be mobilized at high frequency when a conjugative plasmid is present in the same cell. This phenomenon is called:",
    options: ["Retrotransposition", "Plasmid mobilization (conduction)", "Transposition immunity", "Incompatibility-driven curing"],
    answer: 1,
    explanation: "Plasmid mobilization occurs when a non-conjugative plasmid carrying oriT (or bom) is mobilized in trans by the Tra proteins supplied by a co-resident conjugative plasmid. The mobilizable plasmid is nicked at its bom/oriT and transferred."
  },
  {
    id: 6,
    question: "Two plasmids are said to be incompatible if they:",
    options: ["Encode different antibiotic resistance genes", "Cannot be transferred by the same conjugative machinery", "Cannot stably coexist in the same cell due to shared replication or partition systems", "Carry identical insertion sequences"],
    answer: 2,
    explanation: "Plasmid incompatibility arises when two plasmids share the same replication origin or partition system. Because they are recognized as equivalent replicons, they are not maintained as distinct entities and one is stochastically lost at cell division."
  },
  {
    id: 7,
    question: "The lac operon is in a fully induced state. If the cell is then shifted to a medium containing both glucose and lactose, what happens to lac operon expression?",
    options: ["Expression remains high because lactose is still present", "Expression drops due to catabolite repression: cAMP levels fall, reducing CAP-cAMP activation of the promoter", "Expression increases because glucose enhances LacI degradation", "Expression is unaffected because induction is irreversible once initiated"],
    answer: 1,
    explanation: "Glucose lowers intracellular cAMP levels by inhibiting adenylyl cyclase. Without cAMP, the CAP (catabolite activator protein) cannot bind the lac promoter to activate transcription, leading to catabolite repression even in the presence of lactose."
  },
  {
    id: 8,
    question: "A mutation in the lacI gene produces a LacI protein that cannot bind allolactose but retains operator-binding ability. What phenotype results?",
    options: ["Constitutive expression of lac genes regardless of lactose", "Permanent repression of lac genes regardless of lactose (uninducible phenotype)", "Wild-type regulation because operator binding is unaffected", "Loss of repression only in F′ merodiploids"],
    answer: 1,
    explanation: "If LacI cannot bind allolactose (the inducer), it remains bound to the operator constitutively. This produces an uninducible (Is) mutation—the lac operon cannot be derepressed, resulting in permanent repression of lacZ, lacY, and lacA."
  },
  {
    id: 9,
    question: "In the trp operon, attenuation relies on which cellular process coupling mechanism?",
    options: ["The relative rates of transcription and translation, which determine ribosome position on the leader peptide mRNA", "Allosteric binding of tryptophan to the TrpR repressor", "Phosphorylation of the sigma factor by Trp-activated kinase", "RNA polymerase pausing at rho-independent terminators only when Trp-tRNA is abundant"],
    answer: 0,
    explanation: "Attenuation depends on transcription-translation coupling. When tryptophan is abundant, ribosomes translate the leader peptide rapidly through the Trp codons, favoring formation of the 3-4 terminator hairpin. When Trp is scarce, ribosomes stall at Trp codons, allowing the 2-3 antiterminator hairpin to form instead."
  },
  {
    id: 10,
    question: "A bacteriophage exhibits the following properties: it can integrate into the host chromosome, its lytic development is repressed by the CI protein, and UV irradiation induces the SOS response leading to prophage excision. This phage is best classified as:",
    options: ["A virulent phage with a pseudo-lysogenic cycle", "A temperate phage (e.g., phage lambda) with a lysogenic-lytic decision circuit", "A filamentous phage with rolling-circle replication", "A transducing phage that cannot form plaques"],
    answer: 1,
    explanation: "These are hallmark features of temperate phages like lambda: CI repressor maintains lysogeny, RecA activated by UV triggers CI autocleavage, derepressing the lytic cycle. The lysogenic-lytic decision involves CI versus Cro competition for OR operators."
  },
  {
    id: 11,
    question: "Phage lambda CI repressor binds OR1, OR2, and OR3 operators. At lysogenic concentrations of CI, which operators are occupied and what is the transcriptional consequence?",
    options: ["OR1 and OR2 are occupied (repressing PR and PL); CI bound at OR2 also stimulates PRM to maintain repressor levels", "All three operators are occupied, completely silencing all lambda transcription", "Only OR3 is occupied, leaving PR partially active for low-level Cro production", "OR1 is occupied (repressing PRM) while OR2 and OR3 remain free"],
    answer: 0,
    explanation: "CI repressor binds operators with cooperative affinity: OR1 > OR2 >> OR3. At lysogenic CI levels, OR1 and OR2 are occupied (repressing rightward PR and leftward PL transcription). CI bound at OR2 also makes direct contact with RNA polymerase at PRM, stimulating CI autoregulation. OR3 is only occupied at very high CI concentrations."
  },
  {
    id: 12,
    question: "Which property of Tn3-family transposons distinguishes their mechanism from that of Tn10?",
    options: ["Tn3 uses a cut-and-paste (non-replicative) mechanism, while Tn10 uses replicative transposition", "Tn3 uses replicative transposition via a cointegrate intermediate resolved by resolvase, while Tn10 uses a cut-and-paste mechanism", "Tn3 encodes a site-specific recombinase but no transposase, while Tn10 encodes only transposase", "Tn3 can only transpose between plasmids, while Tn10 can only transpose to the chromosome"],
    answer: 1,
    explanation: "Tn3 transposes replicatively: the transposase creates a cointegrate (fusion of donor and target replicons with copies of Tn3 at each junction), which is then resolved by the Tn3-encoded resolvase acting at the res site. Tn10 undergoes cut-and-paste (conservative) transposition where the element is excised from the donor."
  },
  {
    id: 13,
    question: "Transposition immunity in Tn3 means that:",
    options: ["A replicon already carrying Tn3 is resistant to further Tn3 insertions into the same molecule", "Tn3 cannot transpose into genes encoding resistance to its own transposase", "The host SOS system is immune to activation by Tn3 transposition intermediates", "Tn3 targets only specific att sites analogous to phage lambda integration"],
    answer: 0,
    explanation: "Transposition immunity is a cis-acting phenomenon where a replicon already containing a transposon actively inhibits further insertion of the same transposon into that same DNA molecule. For Tn3, this involves the transposase protein bound to the existing TIRs signaling to prevent re-insertion."
  },
  {
    id: 14,
    question: "In phage lambda, the lytic versus lysogenic decision is influenced by multiplicity of infection (MOI). At high MOI, lysogeny is favored because:",
    options: ["More phage DNA means more integrase (Int) is produced, favoring integration", "CII protein accumulates to higher levels since multiple phage genomes produce it; CII activates PI (for Int) and PRE (for CI) promoters", "Cro protein is diluted by multiple phage genomes, reducing lytic gene expression", "The host SOS response is triggered at high MOI, activating CI synthesis"],
    answer: 1,
    explanation: "CII is a key lytic/lysogenic switch protein. At high MOI, CII produced by multiple phage genomes accumulates above the threshold needed to activate PRE (producing CI repressor) and PI (producing integrase). CII is also stabilized by CIII, which is also produced in higher amounts at high MOI."
  },
  {
    id: 15,
    question: "A conjugation experiment uses an Hfr strain with the gene order: oriT – A – B – C – D – (F sequences). After 10 minutes of mating, gene A is transferred at 80% frequency, gene B at 60%, gene C at 20%, and gene D at 5%. What is the most likely explanation for decreasing transfer frequencies?",
    options: ["Genes farther from oriT require more time to transfer; random mating pair disruption reduces the probability of complete transfer", "Genes near oriT have higher recombination frequencies with the recipient chromosome", "The tra operon is transcribed only for the first 10 minutes of conjugation", "Recipient cells become immune to conjugation after receiving gene A"],
    answer: 0,
    explanation: "In Hfr conjugation, DNA is transferred linearly starting from oriT. Mating pairs are fragile and separate randomly over time. The longer a gene takes to be transferred (i.e., the farther it is from oriT), the lower the probability that transfer will be completed before mating pair disruption."
  },
  {
    id: 16,
    question: "IS elements (insertion sequences) are the simplest transposable elements in bacteria. They are characterized by all of the following EXCEPT:",
    options: ["Short inverted terminal repeats (ITRs) flanking the transposase gene", "Generation of short direct repeats in the target DNA upon insertion", "Encoding antibiotic resistance genes as their primary function", "Ability to cause mutations when inserting into or near genes"],
    answer: 2,
    explanation: "IS elements encode only the transposase gene (and sometimes regulatory sequences) flanked by inverted terminal repeats. They do not carry antibiotic resistance or other accessory genes—that is a feature of composite transposons (e.g., Tn10 = IS10-resistance genes-IS10). IS elements cause mutations by insertional inactivation."
  },
  {
    id: 17,
    question: "The SOS response in E. coli is regulated by LexA repressor and RecA coprotease. Which statement correctly describes the regulatory logic?",
    options: ["DNA damage activates LexA, which then cleaves RecA to induce SOS genes", "Activated RecA (RecA*) facilitates LexA autocleavage, derepressing over 40 SOS regulon genes", "LexA is a coprotease that cleaves RecA in response to UV damage", "SOS genes are induced by RecA binding to their promoters as a transcriptional activator"],
    answer: 1,
    explanation: "In the SOS response, single-stranded DNA (generated at stalled replication forks) activates RecA to form RecA* (RecA-ssDNA filament). RecA* acts as a coprotease, stimulating LexA autocleavage. LexA cleavage derepresses more than 40 SOS genes involved in DNA repair and tolerance."
  },
  {
    id: 18,
    question: "F′ plasmids (F-prime) are formed by imprecise excision of an Hfr chromosome. What is the primary utility of F′ plasmids in bacterial genetics?",
    options: ["They transfer at higher frequency than standard F plasmids due to reduced size", "They allow complementation analysis (cis/trans tests) by creating partial diploids (merodiploids) in F− recipients", "They permanently integrate into the recipient chromosome at specific att sites", "They encode enhanced tra genes that increase conjugation efficiency"],
    answer: 1,
    explanation: "F′ plasmids carry bacterial chromosomal genes plus F sequences. When transferred to F− recipients, they create partial diploids (merodiploids) where two copies of certain genes exist—one on the F′ and one on the chromosome. This is essential for complementation tests to determine whether mutations are dominant/recessive and cis/trans acting."
  },
  {
    id: 19,
    question: "Specialized transduction by phage lambda can transfer only gal or bio genes because:",
    options: ["Phage lambda has a preference for the Gal and Bio gene sequences", "Lambda integrates specifically at attB between gal and bio; imprecise excision carries adjacent chromosomal sequences", "The lambda packaging system specifically recognizes gal and bio promoters", "Generalized recombination between lambda and the chromosome only occurs at gal and bio loci"],
    answer: 1,
    explanation: "Lambda integrates at a specific site (attB) located between the gal and bio operons on the E. coli chromosome. During imprecise excision, lambda occasionally picks up adjacent chromosomal DNA (gal or bio) while leaving behind some phage DNA. Because integration is site-specific, only these flanking genes can be transduced."
  },
  {
    id: 20,
    question: "In a cotransduction experiment using phage P1, genes X and Y are cotransduced at 35%, and genes Y and Z are cotransduced at 20%, while X and Z are never cotransduced. What can be concluded?",
    options: ["Gene order is X-Z-Y, and X-Z exceed the P1 packaging limit", "Gene order is X-Y-Z, with Y between X and Z; X and Z are too far apart to be co-packaged", "Gene order is Y-X-Z with Y as the central gene", "Genes X, Y, and Z are on separate chromosomes"],
    answer: 1,
    explanation: "Cotransduction frequency is inversely related to distance. If X-Y = 35% and Y-Z = 20%, and X-Z = 0%, the order must be X-Y-Z where X and Z are outside the P1 packaging limit (~100 kb) from each other but are each within range of the central gene Y."
  },
  {
    id: 21,
    question: "Which of the following correctly describes the role of the lacA gene product (thiogalactoside transacetylase) in the lac operon?",
    options: ["It is essential for lactose catabolism as it acetylates allolactose", "It acetylates non-metabolizable gratuitous inducers like IPTG, facilitating their export and preventing toxicity", "It converts lactose to allolactose, the true inducer of the operon", "It degrades the LacI repressor by acetylation"],
    answer: 1,
    explanation: "LacA (thiogalactoside transacetylase) is not required for lactose utilization per se. It is thought to acetylate non-metabolizable thiogalactosides (gratuitous inducers), making them suitable substrates for export, thereby preventing accumulation of potentially toxic inducers inside the cell."
  },
  {
    id: 22,
    question: "A lacI− mutation in E. coli results in constitutive expression of lac genes. In a merodiploid strain with genotype lacI− lacZ+ / F′ lacI+ lacZ−, what is the lac operon phenotype?",
    options: ["Constitutive expression of lacZ from the chromosome because lacI− is dominant", "Inducible expression only; lacI+ on F′ supplies functional repressor in trans to repress lacZ on the chromosome", "No expression of lacZ from either location", "Constitutive expression from the F′ and inducible expression from the chromosome"],
    answer: 1,
    explanation: "lacI− is recessive to lacI+. The wild-type LacI repressor produced from the F′ lacI+ allele is a diffusible protein (trans-acting) that can repress the lacZ+ gene on the chromosome. This complementation experiment demonstrates that LacI acts in trans, confirming it encodes a diffusible repressor."
  },
  {
    id: 23,
    question: "Anti-termination in phage lambda requires the N protein. How does N protein prevent transcription termination?",
    options: ["N protein binds to Rho factor and inactivates it by ATPase stimulation", "N protein, along with host NusA, NusB, NusE, and NusG proteins, binds nascent RNA at nut sites and modifies RNA polymerase to read through terminators", "N protein binds to the terminator hairpin sequence and disrupts it by helicase activity", "N protein is a sigma factor that redirects RNA polymerase to anti-termination-specific promoters"],
    answer: 1,
    explanation: "Lambda N protein is an anti-termination factor that acts through nut (N utilization) sites in the nascent RNA. N protein recruits NusA, NusB, NusE (S10), and NusG to form a ribonucleoprotein complex on RNA polymerase, rendering it resistant to both Rho-dependent and intrinsic termination signals."
  },
  {
    id: 24,
    question: "Rolling circle replication of F plasmid during conjugation produces a single-stranded DNA transfer intermediate. Which enzyme initiates this process?",
    options: ["TraI relaxase, which nicks the strand at oriT and remains covalently attached to the 5′ end", "TraD, the coupling protein, which unwinds the plasmid using helicase activity", "TraA, the major pilin subunit, which cleaves ssDNA at the nick site", "DNA gyrase, which introduces a nick to relieve supercoiling at oriT"],
    answer: 0,
    explanation: "TraI (relaxase) is a bifunctional enzyme: it cleaves the specific strand at oriT in a sequence-specific manner, forming a covalent 3′-phosphotyrosine bond and remaining attached to the 5′ end of the transferred strand. TraI also has helicase activity to unwind the plasmid during transfer."
  },
  {
    id: 25,
    question: "A transposon insertion into the promoter-distal gene of an operon causes reduced expression of downstream genes in the operon but not upstream genes. This phenomenon is called:",
    options: ["Transcriptional interference", "Polar effect (polarity), caused by premature transcription termination signals within transposon sequences", "Retroregulation", "Readthrough suppression"],
    answer: 1,
    explanation: "Polar effects occur when a transposon insertion creates rho-dependent transcription termination sites, causing RNA polymerase to dissociate before completing transcription of downstream genes in the same operon. Rho recognizes C-rich, G-poor sequences on nascent RNA exposed by translation arrest—a hallmark of many insertion element sequences."
  },
  {
    id: 26,
    question: "In the E. coli lac operon, the CAP-cAMP complex binds upstream of the promoter. What is the molecular mechanism by which it activates transcription?",
    options: ["CAP-cAMP stabilizes the RNA polymerase-promoter open complex by direct protein-protein contact with the α-CTD of RNAP", "CAP-cAMP unwinds the −10/−35 region to allow RNAP binding without direct contact", "CAP-cAMP methylates the −35 promoter sequence to enhance RNAP affinity", "CAP-cAMP displaces LacI from the operator to allow RNAP progression"],
    answer: 0,
    explanation: "The CAP-cAMP complex binds to the CAP site (centered near −61) and makes direct protein-protein contact with the C-terminal domain of the RNA polymerase alpha subunit (α-CTD), stabilizing the polymerase at the weak lac promoter. This interaction increases the rate of open complex formation."
  },
  {
    id: 27,
    question: "What is the functional significance of the three lac operators (O1, O2, O3) in the lac operon, and how do they cooperate?",
    options: ["O1 is the primary operator; O2 and O3 act as decoys for non-specific LacI binding to increase local concentration", "LacI tetramers simultaneously bind O1 (primary) and either O2 or O3, looping out the intervening DNA and greatly increasing repressor affinity", "O2 and O3 are pseudo-operators that evolved to sequester excess LacI produced from the lacI gene", "All three operators must be occupied simultaneously for full repression; deletion of any one abolishes repression"],
    answer: 1,
    explanation: "LacI functions as a tetramer that can bind two operator sites simultaneously, forming a DNA loop. O1 is the primary operator; O2 (downstream of lacZ) and O3 (within lacI) are auxiliary operators. DNA looping between O1-O2 or O1-O3 increases the effective repressor-operator affinity by ~50-fold compared to O1 alone."
  },
  {
    id: 28,
    question: "A mutation in the rpoS gene (encoding σS/σ38) would most likely affect which category of gene expression in E. coli?",
    options: ["Nitrogen assimilation genes, since σS activates glnA transcription", "Stationary phase and stress response genes, since σS is the master regulator of stationary phase", "Heat shock proteins, since σS replaces σ32 during thermal stress", "Flagellar assembly genes, since σS is the flagellar sigma factor"],
    answer: 1,
    explanation: "σS (RpoS) is the stationary phase sigma factor in E. coli. It accumulates during nutrient starvation, osmotic stress, and entry into stationary phase, redirecting RNA polymerase to transcribe genes involved in stress survival, including genes for osmotolerance, oxidative stress resistance, and general stress adaptation."
  },
  {
    id: 29,
    question: "Phage Mu is unique among bacteriophages because:",
    options: ["It uses RNA as its genetic material and reverse transcriptase for integration", "It transposes to integrate into the host chromosome at essentially random sites and uses replicative transposition during the lytic cycle for DNA amplification", "It packages host DNA exclusively and never packages its own genome", "It has a permanently circular genome that replicates episomally without integration"],
    answer: 1,
    explanation: "Phage Mu is essentially a transposon that packages its genome. It integrates into the host chromosome at random sites via transposition. During the lytic cycle, Mu DNA is amplified ~100-fold through repeated rounds of replicative transposition before packaging, making it unique among phages."
  },
  {
    id: 30,
    question: "In the trp operon, a mutation that prevents the leader peptide ribosome from stalling at Trp codons (even when tryptophan is scarce) would result in:",
    options: ["Constitutive high-level expression of trp structural genes regardless of Trp availability", "Permanent attenuation and reduced trp gene expression even when Trp is limiting", "Wild-type regulation because attenuation is bypassed through TrpR repressor activity alone", "Increased mRNA stability of the trp structural genes"],
    answer: 1,
    explanation: "If the ribosome cannot stall at Trp codons (e.g., due to mutation of those codons to non-Trp codons), the ribosome always translates through the leader peptide rapidly, favoring the 3-4 terminator hairpin formation. This mimics the high-Trp condition, causing constitutive attenuation (premature termination) regardless of actual Trp levels."
  },
  {
    id: 31,
    question: "What distinguishes a 'relaxed' plasmid from a 'stringent' plasmid in terms of copy number control?",
    options: ["Relaxed plasmids have supercoiled DNA; stringent plasmids are in relaxed conformation", "Relaxed plasmids replicate multiple times per cell cycle (high copy number); stringent plasmids replicate once per cell cycle, coupled to chromosomal replication (low copy number)", "Relaxed plasmids cannot be mobilized by conjugation; stringent plasmids are self-transmissible", "Relaxed plasmids use RNA primers for replication; stringent plasmids use protein primers"],
    answer: 1,
    explanation: "Copy number control distinguishes plasmid types: stringent plasmids (e.g., F, RK2) have 1-2 copies per cell and tightly couple replication to chromosomal replication; relaxed plasmids (e.g., ColE1, pUC) replicate semi-autonomously and accumulate 20-700+ copies per cell. ColE1 copy number is controlled by the inhibitory RNA RNAII inhibitor (RNAI)."
  },
  {
    id: 32,
    question: "The ColE1 plasmid uses RNA-based copy number control. Which statement accurately describes this mechanism?",
    options: ["RNAII (preprimer) hybridizes with the origin to inhibit replication; RNAI acts as a de-repressor by blocking RNAII", "RNAI (antisense RNA) base-pairs with RNAII (preprimer), preventing RNAII processing by RNase H and thereby inhibiting replication initiation", "Rop protein activates RNAII by binding RNAI and sequestering it away from the origin", "RNAI encodes a replication initiator protein that titrates the origin"],
    answer: 1,
    explanation: "ColE1 replication is initiated by RNAII, which is processed by RNase H to form the RNA primer. RNAI is a constitutively transcribed antisense RNA complementary to RNAII. When copy number rises, RNAI:RNAII duplex formation (facilitated by Rop protein) prevents RNAII processing, inhibiting replication and reducing copy number."
  },
  {
    id: 33,
    question: "In generalized transduction, what percentage of transducing particles typically carry actual phage DNA versus host DNA?",
    options: ["Nearly all (>99%) carry phage DNA; host DNA transduction is extremely rare (<0.001%)", "Approximately 50% carry host DNA and 50% carry phage DNA", "About 1 in 10^6 to 10^8 particles are transducing particles carrying host DNA", "All particles carry a mosaic of phage and host DNA"],
    answer: 2,
    explanation: "Generalized transduction is very rare—approximately 1 in 10^6 to 10^8 phage particles mistakenly package host DNA. This low frequency reflects the stochastic error in the packaging machinery recognizing host DNA instead of phage DNA. Despite this rarity, it is detectable in genetic experiments due to large phage burst sizes."
  },
  {
    id: 34,
    question: "The dam methylase in E. coli methylates adenine in GATC sequences. How does this relate to mismatch repair?",
    options: ["Dam methylation at GATC marks the template strand; newly replicated unmethylated daughter strands are the substrate for MutHLS-directed mismatch correction", "Dam methylation blocks MutH from binding GATC, protecting the genome from inappropriate cleavage", "Dam methylation activates MutL to correct mismatches on the heavily methylated parental strand", "Dam methylation is required for SOS induction after mismatch detection"],
    answer: 0,
    explanation: "Immediately after replication, the parental strand is methylated at GATC while the newly synthesized strand is transiently unmethylated. MutH recognizes hemimethylated GATC and nicks the unmethylated strand, directing the MutLS-bound mismatch to be corrected on the new (error-containing) strand, preserving the parental sequence as the template."
  },
  {
    id: 35,
    question: "A bacterium carries a mutation in the mutT gene. What phenotype would you expect, and why?",
    options: ["Increased AT→GC transversions, because MutT normally repairs AT base pairs", "Highly elevated A:T to C:G transversions due to accumulation of 8-oxo-dGTP, which mispairs with adenine during replication", "Increased GC→AT transitions due to impaired mismatch repair at G:T mismatches", "Defective excision repair of thymine dimers caused by UV irradiation"],
    answer: 1,
    explanation: "MutT is an 8-oxo-dGTPase that hydrolyzes 8-oxo-dGTP to 8-oxo-dGMP, preventing its incorporation into DNA. Without MutT, 8-oxo-dGTP is incorporated opposite adenine (since 8-oxo-dG can adopt the syn conformation and pair with A). After the next replication round, this generates A:T→C:G transversions."
  },
  {
    id: 36,
    question: "Which of the following best explains why bacteriophage T4 rII mutants can grow on E. coli B but not on E. coli K-12 (λ)?",
    options: ["E. coli K-12 (λ) produces lambda CI repressor that inhibits T4 rII gene expression", "rII mutants cannot perform lytic replication in the presence of the lambda prophage because rII proteins normally inhibit a lambda-encoded product that blocks T4 DNA replication", "E. coli K-12 does not have the T4 receptor lipopolysaccharide needed for phage adsorption", "E. coli K-12 (λ) expresses a restriction endonuclease that degrades T4 rII mutant DNA specifically"],
    answer: 1,
    explanation: "Wild-type T4 rII proteins inactivate a lambda-encoded product (the pinholin, product of gene rex) that otherwise kills T4-infected cells. rII mutants cannot inactivate the Rex protein, so T4 rII mutants lyse poorly on E. coli K-12(λ). Benzer exploited this system for his fine-structure mapping of the rII region."
  },
  {
    id: 37,
    question: "The phenomenon of 'superinfection immunity' in lysogenic bacteria means that:",
    options: ["Lysogenic bacteria are immune to infection by all foreign phages due to restriction systems", "A lysogen is resistant to lytic infection by the same phage because CI repressor produced from the prophage immediately represses incoming phage DNA", "Lysogenic bacteria produce phage tail fibers that block binding of superinfecting phage", "The prophage excises and superinfects its own bacterium to maintain a balanced lytic-lysogenic ratio"],
    answer: 1,
    explanation: "Superinfection immunity is a consequence of lysogeny. The CI repressor produced from the integrated prophage is present in the cytoplasm and immediately represses the operators of any incoming phage DNA of the same type, preventing lytic development. This is the mechanistic basis of the immune state."
  },
  {
    id: 38,
    question: "In the arabinose (ara) operon of E. coli, AraC protein acts as both a repressor and an activator. What molecular event determines which role it plays?",
    options: ["AraC dimerizes in the presence of arabinose (activator) and monomers repress in the absence of arabinose", "In the absence of arabinose, AraC forms a dimer that loops DNA between araO2 and araI1, repressing transcription; arabinose binding causes a conformational change that releases the loop, allowing AraC to bind araI1-araI2 as an activator", "Phosphorylation of AraC by a two-component kinase switches it from repressor to activator", "CAP-cAMP binding to AraC converts it from a repressor to a transcriptional activator"],
    answer: 1,
    explanation: "AraC is a paradigm of conformational switching. Without arabinose, the N-terminal dimerization arm interacts with the C-terminal DNA-binding domain, and the AraC dimer bridges araO2 and araI1, looping DNA and repressing PBAD. Arabinose binding releases this intramolecular arm interaction, freeing both DNA-binding domains to bind adjacent araI1 and araI2 sites and activate PBAD transcription."
  },
  {
    id: 39,
    question: "Bacteriophage lambda Int protein catalyzes site-specific recombination between attP and attB sites. Which statement about this reaction is correct?",
    options: ["Int requires the Xis protein for both integration and excision equally", "Integration (attP × attB → attL + attR) requires only Int and IHF; excision (attL × attR → attP + attB) additionally requires Xis", "Int is a serine recombinase that forms a covalent intermediate via a serine-DNA bond", "The att sites share 15 bp of homology (O sequence) within which strand exchange occurs via a Holliday junction intermediate"],
    answer: 3,
    explanation: "Lambda integrative recombination uses a tyrosine recombinase mechanism. The O sequence (15 bp) is shared between attP and attB. Int makes staggered cuts 7 bp apart within O, forming a Holliday junction intermediate, then resolves it. Excision requires both Int and Xis (plus IHF), while integration requires only Int and IHF."
  },
  {
    id: 40,
    question: "What is the role of the FinO and FinP system in F plasmid conjugation frequency?",
    options: ["FinO and FinP form a toxin-antitoxin system that kills plasmid-free cells", "FinP is an antisense RNA that base-pairs with traJ mRNA; FinO stabilizes FinP, together repressing traJ translation and limiting conjugation frequency to ~1% of donor cells", "FinO is a sigma factor that activates tra operon transcription in response to recipient cell contact", "FinP is a pilus-retraction protein that limits conjugation to single transfer events"],
    answer: 1,
    explanation: "F plasmid fertility inhibition is mediated by FinP (antisense RNA to traJ 5′-UTR) and FinO (RNA chaperone that stabilizes FinP and promotes FinP:traJ-mRNA duplexing). TraJ is a transcriptional activator of the tra operon. Reduced TraJ translation limits tra gene expression and keeps conjugation frequency low (~1 per 100 donor cells per hour)."
  },
  {
    id: 41,
    question: "In bacteriophage T4, the function of the T4 DNA ligase in phage replication differs from cellular ligase because:",
    options: ["T4 ligase uses ATP as a cofactor, while E. coli ligase uses NAD+ as a cofactor", "T4 ligase is a single-strand RNA ligase while E. coli ligase joins double-stranded DNA breaks", "T4 ligase is encoded by an essential early gene while E. coli ligase is dispensable for viability", "T4 ligase has exonuclease activity that E. coli ligase lacks"],
    answer: 0,
    explanation: "T4 DNA ligase uses ATP as its adenylate cofactor, forming a ligase-AMP intermediate that seals nicks in DNA. E. coli DNA ligase uses NAD+ as its cofactor. This biochemical difference has practical importance: T4 ligase is widely used in molecular cloning because it can join blunt-end fragments (unlike E. coli ligase under standard conditions)."
  },
  {
    id: 42,
    question: "A plasmid-borne toxin-antitoxin (TA) system ensures plasmid maintenance by:",
    options: ["Integrating into the host chromosome when plasmid copy number drops below threshold", "Post-segregational killing: cells that lose the plasmid lose both toxin and antitoxin, but the stable toxin outlasts the labile antitoxin, killing plasmid-free daughters", "Stimulating plasmid replication in response to nutrient stress to maintain copy number", "Encoding a restriction enzyme that degrades competitor plasmids but not the host plasmid"],
    answer: 1,
    explanation: "TA systems (e.g., CcdAB, MazEF) encode a stable toxin and an unstable antitoxin. The antitoxin continuously neutralizes the toxin in plasmid-carrying cells. After plasmid loss, no new antitoxin is produced; the labile antitoxin is degraded while the stable toxin persists and kills the cell. This effectively eliminates plasmid-free daughters from the population."
  },
  {
    id: 43,
    question: "The recBC pathway (RecBCD) of recombination in E. coli requires Chi (χ) sites. What is the molecular role of Chi?",
    options: ["Chi sequences are ori-like sites that recruit RecBCD to begin unwinding at specific chromosomal locations", "Chi (5′-GCTGGTGG-3′) is recognized by RecBCD during DNA unwinding; Chi binding attenuates RecBCD's nuclease activity and stimulates RecA loading on the 3′-ended ssDNA strand for recombination", "Chi is a promoter sequence for the recBCD operon, activated by DNA damage", "Chi sequences are substrates for RecA-mediated strand invasion, bypassing the need for RecBCD"],
    answer: 1,
    explanation: "RecBCD is a helicase/nuclease that unwinds and degrades dsDNA from a double-strand break. When RecBCD encounters a Chi site (8-mer: 5′-GCTGGTGG-3′), the nuclease activity on the 3′-terminated strand is attenuated, generating a 3′ ssDNA tail. RecBCD then loads RecA onto this 3′ overhang, initiating homologous recombination."
  },
  {
    id: 44,
    question: "Why are composite transposons (e.g., Tn10 consisting of IS10-tetracycline resistance-IS10) considered evolutionary 'capture' elements?",
    options: ["They can capture and amplify any adjacent gene by flanking it with IS elements through independent insertion events", "Two IS elements flanking an accessory gene provide TIRs and transposase for the entire composite, allowing the sandwiched genes to be mobilized as a unit", "Composite transposons specifically capture antibiotic biosynthesis genes from environmental bacteria", "The flanking IS elements provide promoters that drive expression of the captured accessory genes"],
    answer: 1,
    explanation: "Composite transposons arise when two copies of the same IS element insert on either side of an accessory gene (e.g., antibiotic resistance). The two IS elements provide inverted terminal repeats and transposase activity that can act on the entire composite, mobilizing it as a single unit. This is how resistance genes spread to new genetic contexts."
  },
  {
    id: 45,
    question: "In phage lambda's lytic cycle, Q protein performs anti-termination at a late gene promoter PR′. How does Q-mediated anti-termination differ mechanistically from N-mediated anti-termination?",
    options: ["Q protein binds a DNA element (QBE) near PR′ and is loaded onto paused RNA polymerase before RNA synthesis begins, while N protein acts on nut sites in nascent RNA post-transcriptionally", "Q protein requires the full NusABEG complex while N protein acts without any Nus factors", "Q protein acts by sequestering Rho factor while N protein prevents intrinsic termination only", "Q and N proteins use identical mechanisms but act at different promoters"],
    answer: 0,
    explanation: "Q protein anti-termination is mechanistically distinct from N: Q binds to the QBE (Q binding element) in the DNA near PR′, then is transferred to the RNA polymerase paused shortly after transcription initiation. This Q-modified RNAP is resistant to downstream terminators. N protein, by contrast, acts through nut site RNA elements after transcription begins, recruiting Nus factors."
  },
  {
    id: 46,
    question: "Global regulatory networks in E. coli respond to nitrogen limitation through the Ntr (nitrogen regulation) two-component system. The key regulatory proteins are:",
    options: ["NtrB (sensor kinase) and NtrC (response regulator); NtrC-P activates σ54-dependent promoters by ATP hydrolysis-driven conformational change in RNAP", "NtrA (sigma factor) and NtrB (repressor); NtrB dephosphorylates NtrA in response to nitrogen excess", "GlnD (sensor) and GlnE (effector); GlnE uridylylates PII to signal nitrogen status", "CheA and CheY, which redirect flagellar rotation in response to nitrogen gradients"],
    answer: 0,
    explanation: "Ntr system: NtrB (NRII) is the sensor histidine kinase; NtrC (NRI) is the response regulator. Under nitrogen limitation, NtrB phosphorylates NtrC. NtrC-phosphate binds enhancer-like sites and uses ATPase activity to contact and remodel the closed promoter complex at σ54 (σN) promoters, activating genes for nitrogen assimilation (e.g., glnA, nifA)."
  },
  {
    id: 47,
    question: "A bacterium carries a deletion of the rho gene. What phenotype would you predict?",
    options: ["Loss of transcription of all operons since Rho is a general transcriptional activator", "Read-through transcription of many genes leading to aberrant long transcripts, global gene expression changes, and likely cell lethality due to transcription-replication conflicts", "Inability to initiate DNA replication since Rho unwinds the origin of replication", "Constitutive expression of only Rho-dependent operons with no effect on Rho-independent terminators"],
    answer: 1,
    explanation: "Rho factor is a hexameric RNA translocase that terminates transcription at Rho-dependent terminators by translocating along nascent RNA and disrupting the transcription elongation complex. Deletion of rho is typically lethal in E. coli. Depletion causes massive read-through transcription, antisense RNA production, transcription-replication collisions, and global dysregulation of the transcriptome."
  },
  {
    id: 48,
    question: "The CII protein of phage lambda is rapidly degraded by the host protease HflB (FtsH). How does this relate to the lytic/lysogenic decision?",
    options: ["HflB degradation of CII in well-nourished cells reduces CII levels below the threshold needed to activate CI synthesis, favoring the lytic pathway", "HflB degrades CII in starved cells, triggering the SOS response that activates lysogeny", "CII degradation by HflB inactivates lambda Int, preventing prophage excision", "HflB stabilizes CII by cleaving an inhibitory pro-peptide, increasing its activity during lysogeny"],
    answer: 0,
    explanation: "In rapidly growing (healthy) E. coli, HflB/FtsH is abundant and active, degrading CII rapidly. Low CII means insufficient activation of PRE (CI synthesis promoter), favoring lytic development. In starved or stressed cells, HflB activity may be lower, allowing CII to accumulate and activate CI synthesis, promoting lysogeny. CIII also inhibits HflB, further protecting CII."
  },
  {
    id: 49,
    question: "In a transformation experiment, competent cells are mixed with chromosomal DNA from a donor that is wild-type for genes A, B, and C (all mutant in the recipient). You observe that A+B+ cotransformants are rare, but A+C+ cotransformants are even rarer. What conclusion is supported?",
    options: ["A is more efficiently transformed than B or C", "Genes A and B are physically linked (closer together) on the chromosome compared to A and C; cotransformation frequency reflects the probability that both genes are on the same DNA fragment", "Competence for gene C is lower than for genes A and B due to sequence-specific uptake", "Genes B and C are identical in sequence, explaining differential cotransformation frequencies"],
    answer: 1,
    explanation: "Cotransformation frequency is inversely proportional to the physical distance between genes on the chromosome. If A+B+ cotransformants are more frequent than A+C+ cotransformants, genes A and B are closer together (more likely to be on the same transforming DNA fragment) than A and C. This is analogous to cotransduction mapping."
  },
  {
    id: 50,
    question: "Phage lambda packaging requires a specific sequence called cos. Two cos sites flank the linear phage DNA packaged into the head. What is the role of terminase (gpNu1 and gpA) in this process?",
    options: ["Terminase unwinds the cos site and circularizes phage DNA to form the replication substrate", "Terminase recognizes cos, makes staggered cuts to generate the 12-nt 5′ cohesive ends (cos ends), and translocates DNA into the prohead using ATP hydrolysis", "Terminase is a DNA polymerase that fills in the cos site after packaging to seal the phage head", "Terminase acts as an anti-terminator to allow transcription through the packaging region"],
    answer: 1,
    explanation: "Lambda terminase is a two-subunit enzyme (gpNu1 for DNA binding/specificity; gpA for endonuclease and translocase activity). It binds the cosB region, cleaves staggered sites in cosN to generate 12-nt 5′ single-stranded cohesive ends, then translocates DNA into the empty prohead through ATP hydrolysis via a headful mechanism until the next cos site is reached."
  }
];

export default questions;
