const questions = [
  // ===== DNA STRUCTURE & TOPOLOGY (Q1–Q10) =====
  {
    id: 1,
    question: "Z-DNA is a left-handed helical form of DNA that is favored by:",
    options: ["AT-rich sequences at low salt concentrations", "Alternating purine-pyrimidine sequences (e.g., CGCGCG) at high salt concentrations", "Single-stranded regions near promoters", "Histone-bound nucleosomal DNA"],
    answer: 1,
    explanation: "Z-DNA is a left-handed double helix with a zigzag sugar-phosphate backbone. It is favored by alternating purine-pyrimidine sequences (particularly CG repeats) under conditions of high salt concentration or negative supercoiling. Z-DNA has 12 bp per turn compared to 10.5 bp for B-DNA."
  },
  {
    id: 2,
    question: "Negative supercoiling of DNA facilitates replication and transcription because it:",
    options: ["Stabilizes the double helix and prevents strand separation", "Promotes strand separation by underwinding the helix", "Increases the melting temperature of DNA", "Prevents topoisomerase access to DNA"],
    answer: 1,
    explanation: "Negative supercoiling introduces torsional strain that underwins the helix, making it easier to separate the two strands. This facilitates processes that require strand opening such as replication (at the origin) and transcription (at the promoter). Most bacterial DNA is negatively supercoiled in vivo."
  },
  {
    id: 3,
    question: "Type I topoisomerases differ from type II topoisomerases in that type I enzymes:",
    options: ["Cut both strands of DNA and require ATP", "Cut one strand of DNA and generally do not require ATP", "Introduce negative supercoils using ATP hydrolysis", "Function only during DNA repair"],
    answer: 1,
    explanation: "Type I topoisomerases create a transient single-strand break, pass the other strand through the break, and reseal it. They change the linking number by ±1 per catalytic cycle and generally do not require ATP (except reverse gyrase). Type II enzymes cut both strands, pass a double-stranded segment through, and require ATP, changing the linking number by ±2."
  },
  {
    id: 4,
    question: "The hyperchromic effect observed when DNA is denatured refers to:",
    options: ["Decrease in UV absorbance at 260 nm", "Increase in UV absorbance at 260 nm", "Change in fluorescence emission", "Shift in circular dichroism spectrum only"],
    answer: 1,
    explanation: "When double-stranded DNA is denatured (melted), the stacking interactions between bases are disrupted, resulting in a ~40% increase in UV absorbance at 260 nm. This hyperchromic effect is used to monitor DNA melting and determine the Tm (melting temperature), which correlates with GC content."
  },
  {
    id: 5,
    question: "The melting temperature (Tm) of a DNA molecule is increased by:",
    options: ["Higher AT content and low ionic strength", "Higher GC content and high ionic strength", "Presence of urea and formamide", "Alkaline pH above 11.5"],
    answer: 1,
    explanation: "GC base pairs have three hydrogen bonds (vs. two for AT pairs) and better stacking interactions, raising Tm. High ionic strength stabilizes the duplex by neutralizing phosphate charge repulsion. Conversely, denaturants (urea, formamide), low salt, and extreme pH lower Tm by destabilizing the helix."
  },
  {
    id: 6,
    question: "Ethidium bromide intercalates into DNA and causes:",
    options: ["Unwinding of the helix, reducing the number of supercoils in closed circular DNA", "Increased negative supercoiling", "Cleavage of the phosphodiester backbone", "Methylation of cytosine residues"],
    answer: 0,
    explanation: "Ethidium bromide intercalates between base pairs, causing local unwinding of the helix (~26° per intercalated molecule). In closed circular DNA, this reduces negative supercoils and can eventually introduce positive supercoils. It also increases the contour length and decreases electrophoretic mobility. Its fluorescence enhancement upon DNA binding is used for visualization."
  },
  {
    id: 7,
    question: "Chargaff's rules state that in double-stranded DNA:",
    options: ["A + T = G + C always", "A = G and T = C", "A = T and G = C, and the ratio (A+T)/(G+C) is species-specific", "Purines and pyrimidines are present in unequal amounts"],
    answer: 2,
    explanation: "Chargaff's first rule states that in dsDNA, the amount of adenine equals thymine (A = T) and guanine equals cytosine (G = C), reflecting Watson-Crick base pairing. The ratio of (A+T)/(G+C) varies between species but is constant within a species. These observations were key evidence supporting the double helix model."
  },
  {
    id: 8,
    question: "Nucleosomes consist of DNA wrapped around a histone octamer containing:",
    options: ["Two copies each of H1, H2A, H2B, and H3", "Two copies each of H2A, H2B, H3, and H4", "One copy each of H1, H2A, H2B, H3, and H4", "Four copies of H3 and four copies of H4"],
    answer: 1,
    explanation: "The nucleosome core particle consists of ~147 bp of DNA wrapped ~1.65 turns around a histone octamer containing two copies each of histones H2A, H2B, H3, and H4. Histone H1 is a linker histone that binds the linker DNA between nucleosomes and stabilizes higher-order chromatin structure."
  },
  {
    id: 9,
    question: "In the Watson-Crick model, the two DNA strands are oriented:",
    options: ["Parallel, both running 5' to 3'", "Antiparallel, one running 5' to 3' and the other 3' to 5'", "Parallel, both running 3' to 5'", "Perpendicular to each other"],
    answer: 1,
    explanation: "The two strands of the DNA double helix run in opposite (antiparallel) directions. One strand runs 5'→3' while the complementary strand runs 3'→5'. This antiparallel arrangement is essential for proper Watson-Crick base pairing (A-T and G-C) and has important consequences for DNA replication (leading vs. lagging strand synthesis)."
  },
  {
    id: 10,
    question: "Hoogsteen base pairing is important for the formation of:",
    options: ["Standard B-form DNA duplexes", "Triple-stranded DNA (H-DNA) and G-quadruplex structures", "Okazaki fragments during replication", "Stem-loop structures in mRNA"],
    answer: 1,
    explanation: "Hoogsteen base pairing uses different hydrogen bonding faces of the purines compared to Watson-Crick pairing. It is essential for triplex DNA (H-DNA), where a third strand binds in the major groove via Hoogsteen or reverse Hoogsteen hydrogen bonds. It also stabilizes G-quartets in G-quadruplex structures found at telomeres and gene promoters."
  },

  // ===== DNA REPLICATION — ADVANCED (Q11–Q20) =====
  {
    id: 11,
    question: "In eukaryotic replication, licensing of origins occurs during which cell cycle phase?",
    options: ["S phase", "G1 phase", "G2 phase", "M phase"],
    answer: 1,
    explanation: "Replication origin licensing occurs in G1 phase when the pre-replicative complex (pre-RC) is assembled. ORC (Origin Recognition Complex) recruits Cdc6 and Cdt1, which load the MCM2-7 helicase onto DNA. Firing occurs in S phase when CDK and DDK kinases activate the licensed origins, ensuring each origin fires only once per cell cycle."
  },
  {
    id: 12,
    question: "Geminin prevents re-replication in eukaryotes by:",
    options: ["Phosphorylating MCM2-7 helicase", "Inhibiting Cdt1, preventing new pre-RC assembly during S and G2 phases", "Degrading ORC subunits", "Blocking DNA polymerase α activity"],
    answer: 1,
    explanation: "Geminin binds and inhibits Cdt1 during S, G2, and early M phases, preventing re-loading of MCM helicase onto origins that have already fired. Geminin is degraded by APC/C-Cdh1 at the end of mitosis, allowing new pre-RC assembly in the next G1 phase. This mechanism ensures that DNA is replicated exactly once per cell cycle."
  },
  {
    id: 13,
    question: "Proliferating Cell Nuclear Antigen (PCNA) functions as:",
    options: ["A helicase that unwinds DNA at the replication fork", "A sliding clamp that enhances DNA polymerase processivity in eukaryotes", "A primase that synthesizes RNA primers", "A nuclease that removes mismatched bases"],
    answer: 1,
    explanation: "PCNA is a homotrimeric ring-shaped protein that encircles DNA and acts as a sliding clamp for eukaryotic replicative polymerases (Pol δ and Pol ε). It is loaded onto DNA by RFC (Replication Factor C) in an ATP-dependent manner. PCNA also serves as a platform for recruiting other proteins involved in repair, recombination, and cell cycle regulation."
  },
  {
    id: 14,
    question: "The proofreading function of DNA polymerase III relies on its:",
    options: ["5' to 3' exonuclease activity", "3' to 5' exonuclease activity", "Endonuclease activity", "Ligase activity"],
    answer: 1,
    explanation: "DNA polymerase III (and most replicative polymerases) possess 3'→5' exonuclease activity that allows them to excise incorrectly incorporated nucleotides from the 3' end of the growing strand. This proofreading reduces the error rate from ~10⁻⁵ (polymerase alone) to ~10⁻⁷ per base pair. Combined with mismatch repair, the final error rate is ~10⁻⁹ to 10⁻¹⁰."
  },
  {
    id: 15,
    question: "During replication of the lagging strand, RNA primers are removed and replaced with DNA by:",
    options: ["DNA polymerase III in prokaryotes and Pol δ in eukaryotes", "DNA polymerase I in prokaryotes and RNase H1/FEN1 with Pol δ in eukaryotes", "Primase in both prokaryotes and eukaryotes", "Reverse transcriptase in retroviruses only"],
    answer: 1,
    explanation: "In E. coli, DNA polymerase I uses its 5'→3' exonuclease activity to remove RNA primers and its polymerase activity to fill the gaps. In eukaryotes, RNase H1 degrades most of the RNA primer, FEN1 (Flap Endonuclease 1) removes the remaining ribonucleotide, and Pol δ fills the gap. DNA ligase I seals the nick."
  },
  {
    id: 16,
    question: "Replication fork collapse can be rescued by:",
    options: ["Nucleotide excision repair only", "Homologous recombination using RecBCD and RecA in E. coli", "Direct reversal by photolyase", "Capping with 7-methylguanosine"],
    answer: 1,
    explanation: "When a replication fork encounters a nick or lesion and collapses (forming a double-strand break), homologous recombination is the primary rescue pathway. In E. coli, RecBCD processes the broken end, and RecA promotes strand invasion into the intact sister chromosome, reassembling the replication fork (replication restart)."
  },
  {
    id: 17,
    question: "The enzyme responsible for joining Okazaki fragments after primer removal and gap filling is:",
    options: ["DNA polymerase I", "Topoisomerase", "DNA ligase", "Helicase"],
    answer: 2,
    explanation: "DNA ligase catalyzes the formation of a phosphodiester bond between the 3'-OH of one Okazaki fragment and the 5'-phosphate of the adjacent fragment, sealing the nick. In E. coli, DNA ligase uses NAD⁺ as a cofactor; in eukaryotes and phage T4, it uses ATP."
  },
  {
    id: 18,
    question: "Bidirectional replication from an origin means:",
    options: ["Two replication forks move in opposite directions away from the origin", "The leading strand is synthesized in both directions", "Only one strand of DNA is replicated", "Replication proceeds from two different chromosomes simultaneously"],
    answer: 0,
    explanation: "In bidirectional replication, two replication forks are established at the origin and move in opposite directions along the chromosome. This was demonstrated by autoradiography (Cairns) and fiber autoradiography experiments. Most replicons in both prokaryotes and eukaryotes replicate bidirectionally, halving the time needed to replicate the DNA."
  },
  {
    id: 19,
    question: "Single-strand binding (SSB) proteins function during replication by:",
    options: ["Synthesizing RNA primers on the lagging strand", "Stabilizing single-stranded DNA and preventing reannealing or secondary structure formation", "Catalyzing phosphodiester bond formation", "Unwinding the parental double helix"],
    answer: 1,
    explanation: "SSB proteins (SSB in E. coli, RPA in eukaryotes) bind cooperatively to single-stranded DNA exposed at the replication fork. They prevent the ssDNA from reannealing, forming secondary structures (hairpins), or being degraded by nucleases. SSB binding also stimulates the activities of helicase and polymerase."
  },
  {
    id: 20,
    question: "Translesion synthesis (TLS) polymerases are characterized by:",
    options: ["High fidelity and strong proofreading activity", "Low fidelity, ability to bypass lesions, and lack of proofreading", "Exclusive role in mitochondrial DNA replication", "Requirement for PCNA degradation"],
    answer: 1,
    explanation: "TLS polymerases (e.g., Pol η, Pol ι, Pol κ, Rev1 in eukaryotes; Pol IV/DinB, Pol V/UmuD'₂C in E. coli) have spacious active sites that accommodate damaged bases but lack 3'→5' proofreading exonuclease activity. They are error-prone but allow replication to continue past lesions that would otherwise stall the replicative polymerase."
  },

  // ===== TRANSCRIPTION — ADVANCED (Q21–Q30) =====
  {
    id: 21,
    question: "Phosphorylation of the C-terminal domain (CTD) of RNA polymerase II at Ser5 is associated with:",
    options: ["Transcription termination", "Transcription initiation and promoter escape, and recruitment of capping enzymes", "Splicing of the last exon", "Polyadenylation signal recognition only"],
    answer: 1,
    explanation: "The CTD of Rpb1 (largest subunit of Pol II) contains heptad repeats (YSPTSPS). Phosphorylation of Ser5 by TFIIH (CDK7/Kin28) occurs during initiation and promoter escape, and recruits mRNA capping enzymes. Ser2 phosphorylation by P-TEFb (CDK9) occurs during elongation and recruits splicing and polyadenylation factors."
  },
  {
    id: 22,
    question: "The Mediator complex in eukaryotic transcription functions as:",
    options: ["A DNA helicase at the replication fork", "A bridge between gene-specific transcription factors and the general transcription machinery at the promoter", "An RNA-dependent RNA polymerase", "A histone methyltransferase that silences genes"],
    answer: 1,
    explanation: "The Mediator is a large multi-subunit complex (~25–30 subunits in yeast, ~30 in humans) that integrates regulatory signals from activators and repressors and transmits them to RNA Pol II and the general transcription factors (GTFs) at the core promoter. It is required for both basal and activated transcription of most Pol II genes."
  },
  {
    id: 23,
    question: "Rho-dependent transcription termination in prokaryotes requires Rho protein to:",
    options: ["Bind to the RNA polymerase σ factor", "Bind to rut (Rho utilization) sites on the nascent RNA and translocate toward RNA polymerase using its ATPase/helicase activity", "Cleave the DNA template strand", "Methylate the nascent RNA transcript"],
    answer: 1,
    explanation: "Rho is a hexameric RNA-dependent ATPase/helicase that binds to C-rich, G-poor unstructured regions of nascent RNA called rut (Rho utilization) sites. It translocates 5'→3' along the RNA using ATP hydrolysis until it catches up with a paused RNA polymerase, then unwinds the RNA-DNA hybrid in the transcription bubble, releasing the transcript."
  },
  {
    id: 24,
    question: "Abortive initiation in transcription refers to:",
    options: ["Premature termination after synthesizing a full-length mRNA", "Repeated synthesis and release of short RNA oligonucleotides (2–12 nt) before productive elongation begins", "Degradation of mRNA by exonucleases immediately after synthesis", "Initiation from a cryptic promoter"],
    answer: 1,
    explanation: "During abortive initiation, RNA polymerase remains bound to the promoter and synthesizes short RNA transcripts (2–12 nt) that are released. This cycle repeats multiple times before the polymerase undergoes promoter escape (clearance) — a conformational change that allows it to break contacts with the promoter and transition to processive elongation."
  },
  {
    id: 25,
    question: "CpG islands in mammalian genomes are typically found at:",
    options: ["Centromeres and telomeres exclusively", "Promoter regions of housekeeping genes", "Intergenic repetitive elements only", "The 3' UTR of tissue-specific genes"],
    answer: 1,
    explanation: "CpG islands are GC-rich regions (>200 bp, >50% GC, observed/expected CpG ratio >0.6) found at or near the promoters of ~70% of human genes, particularly housekeeping genes. They are typically unmethylated in normal cells, allowing constitutive gene expression. Aberrant methylation of CpG islands is a hallmark of cancer."
  },
  {
    id: 26,
    question: "The phenomenon of promoter-proximal pausing of RNA Pol II involves:",
    options: ["Pol II stalling 20–60 nucleotides downstream of the TSS, awaiting release by P-TEFb", "Pol II permanently dissociating from the template at the promoter", "Pol II pausing only at the polyadenylation signal", "Pol II switching from the template to the non-template strand"],
    answer: 0,
    explanation: "After initiation, Pol II often pauses 20–60 nt downstream of the transcription start site due to the actions of DSIF (DRB Sensitivity Inducing Factor) and NELF (Negative Elongation Factor). Release from pausing requires phosphorylation of Ser2 of the CTD and DSIF by P-TEFb (CDK9/Cyclin T), converting DSIF into a positive elongation factor."
  },
  {
    id: 27,
    question: "Riboswitches regulate gene expression by:",
    options: ["Encoding regulatory proteins that bind to DNA", "Undergoing conformational changes in mRNA upon binding small molecule ligands, affecting transcription or translation", "Methylating the promoter region", "Cleaving the mRNA using RNase activity"],
    answer: 1,
    explanation: "Riboswitches are structured RNA elements in the 5' UTR of certain mRNAs (mostly in bacteria) that directly bind small molecule metabolites (e.g., thiamine pyrophosphate, SAM, FMN, lysine). Ligand binding induces a conformational change that either terminates transcription (forming a terminator hairpin) or inhibits translation (sequestering the RBS)."
  },
  {
    id: 28,
    question: "Antisense RNA regulation in bacteria involves:",
    options: ["Translation of both DNA strands into protein", "Small non-coding RNAs that base-pair with target mRNAs, blocking translation or promoting degradation", "Reverse transcription of mRNA into cDNA", "Splicing of polycistronic mRNA into monocistronic units"],
    answer: 1,
    explanation: "Bacterial small regulatory RNAs (sRNAs) act as antisense regulators by base-pairing with complementary sequences in target mRNAs, often near the ribosome binding site. This can block ribosome access (inhibiting translation) or recruit RNase E for mRNA degradation. Many sRNAs require the RNA chaperone Hfq for stability and target recognition."
  },
  {
    id: 29,
    question: "The function of the TFIIH complex in eukaryotic transcription includes:",
    options: ["Recognizing the TATA box", "DNA helicase activity for promoter opening and kinase activity for CTD phosphorylation", "Poly(A) tail addition", "Splicing of introns"],
    answer: 1,
    explanation: "TFIIH is a multi-subunit GTF with two key enzymatic activities: (1) XPB and XPD subunits have ATP-dependent helicase activity that melts ~11 bp of DNA around the start site to form the open complex. (2) CDK7 (with Cyclin H) phosphorylates Ser5 of the CTD, triggering promoter escape. TFIIH also functions in nucleotide excision repair (NER)."
  },
  {
    id: 30,
    question: "Co-transcriptional splicing means that:",
    options: ["Splicing occurs in the cytoplasm after mRNA export", "Intron removal begins while the pre-mRNA is still being transcribed by RNA Pol II", "Splicing and translation occur simultaneously", "Only the first intron is removed during transcription"],
    answer: 1,
    explanation: "Most pre-mRNA splicing in eukaryotes occurs co-transcriptionally — spliceosome assembly and intron excision begin while Pol II is still transcribing downstream exons. The CTD of Pol II serves as a platform for recruiting splicing factors. Co-transcriptional splicing couples transcription with RNA processing and can influence alternative splicing decisions."
  },

  // ===== TRANSLATION — ADVANCED (Q31–Q40) =====
  {
    id: 31,
    question: "The signal recognition particle (SRP) in eukaryotes recognizes:",
    options: ["The poly(A) tail of mRNA", "The N-terminal signal peptide of nascent secretory proteins and pauses translation", "The stop codon during termination", "The 5' cap of mRNA"],
    answer: 1,
    explanation: "SRP is a ribonucleoprotein (6 proteins + 7SL RNA) that binds the hydrophobic signal peptide emerging from the ribosome. SRP binding causes a translational pause, then targets the ribosome-nascent chain complex to the ER membrane via interaction with the SRP receptor (SR). After docking, translation resumes and the polypeptide is co-translationally translocated."
  },
  {
    id: 32,
    question: "Internal ribosome entry sites (IRES) allow:",
    options: ["Splicing of introns in the cytoplasm", "Cap-independent translation initiation by recruiting ribosomes directly to internal sites on mRNA", "Reverse transcription of mRNA", "Nuclear export of ribosomal subunits"],
    answer: 1,
    explanation: "IRES elements are structured RNA sequences in the 5' UTR (or sometimes coding region) that recruit the 40S ribosomal subunit directly, bypassing the need for 5' cap-dependent scanning. IRES-mediated translation is used by certain viral mRNAs (e.g., poliovirus, HCV) and some cellular mRNAs under stress conditions when cap-dependent translation is inhibited."
  },
  {
    id: 33,
    question: "Nonsense-mediated mRNA decay (NMD) targets mRNAs that:",
    options: ["Lack a 5' cap structure", "Contain premature termination codons (PTCs) upstream of an exon-exon junction", "Have abnormally long poly(A) tails", "Are transcribed by RNA polymerase III"],
    answer: 1,
    explanation: "NMD is a quality control mechanism that degrades mRNAs with PTCs located >50–55 nt upstream of the last exon-exon junction complex (EJC). During the pioneer round of translation, if the ribosome encounters a stop codon while EJCs remain downstream, UPF1 and other NMD factors trigger mRNA decapping and degradation, preventing production of truncated proteins."
  },
  {
    id: 34,
    question: "Selenocysteine is incorporated into proteins by:",
    options: ["Post-translational modification of serine residues", "Recoding the UGA stop codon using a selenocysteine insertion sequence (SECIS) element in the mRNA", "Random insertion at any codon position", "Using a modified start codon"],
    answer: 1,
    explanation: "Selenocysteine (Sec, the 21st amino acid) is encoded by UGA, normally a stop codon. A SECIS element (stem-loop structure) in the 3' UTR of the mRNA, along with specialized factors (SelB/eEFSec, SBP2), redirect the translation machinery to incorporate Sec-tRNASec at the UGA codon instead of terminating. This occurs in selenoproteins like glutathione peroxidase."
  },
  {
    id: 35,
    question: "Ribosome recycling after translation termination in prokaryotes requires:",
    options: ["EF-Tu and a new aminoacyl-tRNA", "Ribosome recycling factor (RRF) and EF-G", "Sigma factor and core RNA polymerase", "SRP and its receptor"],
    answer: 1,
    explanation: "After release factors catalyze peptide release, the ribosome remains bound to mRNA with a deacylated tRNA in the P site. RRF (Ribosome Recycling Factor) and EF-G cooperate to dissociate the 70S ribosome into 30S and 50S subunits. IF3 then binds the 30S subunit, preventing premature reassociation and preparing it for a new round of initiation."
  },
  {
    id: 36,
    question: "Puromycin inhibits translation by:",
    options: ["Blocking the peptidyl transferase center", "Acting as an aminoacyl-tRNA analog that causes premature chain termination", "Preventing ribosomal subunit association", "Inhibiting EF-G-mediated translocation"],
    answer: 1,
    explanation: "Puromycin structurally resembles the 3' end of aminoacyl-tRNA (tyrosyl-tRNA). It enters the ribosomal A site, forms a peptide bond with the nascent polypeptide via peptidyl transferase, but because it lacks a cleavable ester bond, the puromycin-peptide conjugate dissociates prematurely from the ribosome, causing premature termination."
  },
  {
    id: 37,
    question: "Polycistronic mRNA is characteristic of:",
    options: ["Eukaryotic genes with multiple exons", "Prokaryotic operons encoding multiple proteins from a single transcript", "Viral RNA genomes only", "Mitochondrial transcripts in mammals"],
    answer: 1,
    explanation: "Prokaryotic operons produce polycistronic mRNAs that encode multiple polypeptides, each with its own Shine-Dalgarno sequence and start/stop codons. Ribosomes can initiate translation independently at each cistron. Eukaryotic mRNAs are generally monocistronic (one ORF per mRNA), with the exception of some viral and rare cellular mRNAs."
  },
  {
    id: 38,
    question: "The Kozak sequence in eukaryotic mRNAs refers to:",
    options: ["The polyadenylation signal AAUAAA", "The consensus sequence surrounding the AUG start codon (gcc(A/G)ccAUGG) that promotes efficient translation initiation", "The internal ribosome entry site", "The Shine-Dalgarno sequence equivalent"],
    answer: 1,
    explanation: "The Kozak consensus sequence (gcc(A/G)ccAUGG) surrounds the initiator AUG codon in eukaryotic mRNAs. The most critical positions are a purine (A or G) at -3 and G at +4 relative to the A of AUG. A strong Kozak context promotes efficient recognition of the start codon by the scanning 40S ribosomal subunit during cap-dependent initiation."
  },
  {
    id: 39,
    question: "Tetracycline inhibits bacterial translation by:",
    options: ["Blocking peptide bond formation at the 50S subunit", "Preventing binding of aminoacyl-tRNA to the 30S ribosomal A site", "Inhibiting translocation by blocking EF-G", "Causing misreading of the genetic code"],
    answer: 1,
    explanation: "Tetracycline binds to the 30S ribosomal subunit near the A site and blocks the binding of aminoacyl-tRNA (delivered by EF-Tu-GTP). This prevents the addition of new amino acids to the growing polypeptide chain. Tetracycline inhibits both prokaryotic and eukaryotic translation in vitro, but selective uptake by bacteria (via porins and active transport) provides clinical selectivity."
  },
  {
    id: 40,
    question: "Programmed ribosomal frameshifting is used by some viruses to:",
    options: ["Correct translation errors", "Produce fusion proteins by shifting the reading frame at a specific slippery sequence", "Increase the fidelity of translation", "Skip over introns in the mRNA"],
    answer: 1,
    explanation: "Programmed -1 ribosomal frameshifting occurs at a slippery sequence (e.g., X XXY YYZ) followed by an RNA pseudoknot or stem-loop that causes the ribosome to pause and slip back one nucleotide. This allows translation to continue in the -1 frame, producing a fusion protein (e.g., Gag-Pol in HIV, replicase in coronaviruses). The frameshifting efficiency controls the ratio of the two protein products."
  },

  // ===== GENE REGULATION — ADVANCED (Q41–Q50) =====
  {
    id: 41,
    question: "The SWI/SNF complex in eukaryotes functions as:",
    options: ["A histone methyltransferase", "An ATP-dependent chromatin remodeling complex that alters nucleosome positioning", "A DNA methyltransferase", "A splicing factor"],
    answer: 1,
    explanation: "SWI/SNF (SWItch/Sucrose Non-Fermentable) is an ATP-dependent chromatin remodeling complex that uses the energy of ATP hydrolysis to slide, eject, or restructure nucleosomes, thereby modulating access of transcription factors and RNA polymerase to DNA. It is generally associated with transcriptional activation and is frequently mutated in cancers."
  },
  {
    id: 42,
    question: "Bivalent chromatin domains in embryonic stem cells are marked by:",
    options: ["H3K4me3 (activating) and H3K27me3 (repressive) histone modifications simultaneously", "Only H3K9me3 (heterochromatin)", "H3K36me3 and H4K20me1", "DNA methylation and histone acetylation together"],
    answer: 0,
    explanation: "Bivalent domains carry both H3K4me3 (a mark of active promoters, deposited by MLL/COMPASS complexes) and H3K27me3 (a repressive mark, deposited by Polycomb Repressive Complex 2). These domains keep developmental genes in a poised state — silenced but ready for rapid activation upon differentiation signals. Resolution of bivalency is a key feature of lineage commitment."
  },
  {
    id: 43,
    question: "X-chromosome inactivation in female mammals is initiated by:",
    options: ["Methylation of all genes on both X chromosomes", "Expression of the long non-coding RNA Xist from the X-inactivation center", "Deletion of one X chromosome", "Histone acetylation of the inactive X"],
    answer: 1,
    explanation: "Xist (X-inactive specific transcript) is a ~17 kb long non-coding RNA expressed from the X-inactivation center (XIC) on the future inactive X. Xist coats the chromosome in cis, recruiting Polycomb complexes (PRC1, PRC2), SPEN/SHARP, and other silencing factors. This leads to H3K27me3, H2AK119ub1, DNA methylation, and formation of the Barr body."
  },
  {
    id: 44,
    question: "The ubiquitin-proteasome pathway regulates gene expression by:",
    options: ["Directly methylating histones", "Targeting specific transcription factors and regulatory proteins for degradation, controlling their cellular levels", "Synthesizing new mRNA transcripts", "Transporting mRNA from nucleus to cytoplasm"],
    answer: 1,
    explanation: "The ubiquitin-proteasome system (UPS) polyubiquitinates target proteins (via E1, E2, E3 enzymes), marking them for degradation by the 26S proteasome. Key regulatory proteins controlled by UPS include cyclins, IκB (NF-κB inhibitor), p53, HIF-1α, and β-catenin. Regulated protein turnover is a rapid and irreversible mechanism for controlling gene regulatory circuits."
  },
  {
    id: 45,
    question: "CRISPR-Cas9 achieves genome editing by:",
    options: ["Random insertional mutagenesis via transposons", "Guide RNA-directed Cas9 endonuclease creating a double-strand break at a specific genomic target", "Zinc finger nuclease-mediated DNA cleavage", "Homologous recombination without any nuclease activity"],
    answer: 1,
    explanation: "CRISPR-Cas9 uses a single guide RNA (sgRNA, ~20 nt spacer + scaffold) to direct the Cas9 nuclease to a complementary DNA sequence adjacent to a PAM (protospacer adjacent motif, typically NGG for SpCas9). Cas9 creates a blunt-ended DSB, which is repaired by error-prone NHEJ (causing indels/knockouts) or HDR (allowing precise edits with a donor template)."
  },
  {
    id: 46,
    question: "Imprinting control regions (ICRs) regulate genomic imprinting through:",
    options: ["Equal expression of both parental alleles", "Parent-of-origin-specific DNA methylation that silences one allele depending on whether it was inherited from the mother or father", "Random monoallelic expression unrelated to parent of origin", "Post-translational modification of the gene product"],
    answer: 1,
    explanation: "Genomic imprinting is an epigenetic phenomenon where certain genes are expressed in a parent-of-origin-specific manner. ICRs are differentially methylated regions established in the germline. For example, at the Igf2/H19 locus, the ICR is methylated on the paternal allele (allowing Igf2 expression) and unmethylated on the maternal allele (allowing H19 expression via CTCF insulator binding)."
  },
  {
    id: 47,
    question: "Quorum sensing in bacteria involves:",
    options: ["Detection of DNA damage and activation of repair genes", "Cell density-dependent gene regulation mediated by secreted signaling molecules (autoinducers)", "Temperature-dependent regulation of virulence genes", "Catabolite repression by glucose"],
    answer: 1,
    explanation: "Quorum sensing is a cell-cell communication system where bacteria produce, secrete, and detect small signaling molecules called autoinducers (e.g., acyl-homoserine lactones in Gram-negatives, autoinducing peptides in Gram-positives). When the population density reaches a threshold, autoinducer concentration triggers coordinated gene expression changes (biofilm formation, virulence, bioluminescence)."
  },
  {
    id: 48,
    question: "Two-component signal transduction systems in bacteria consist of:",
    options: ["A ligand-gated ion channel and a kinase", "A sensor histidine kinase and a response regulator", "Two DNA-binding transcription factors", "A sigma factor and an anti-sigma factor"],
    answer: 1,
    explanation: "Two-component systems are the predominant signal transduction mechanism in bacteria. The sensor histidine kinase (HK) autophosphorylates on a conserved His residue upon detecting an environmental stimulus. The phosphoryl group is then transferred to a conserved Asp on the response regulator (RR), activating it to modulate gene expression (e.g., EnvZ/OmpR, PhoQ/PhoP)."
  },
  {
    id: 49,
    question: "Long non-coding RNAs (lncRNAs) can regulate gene expression by:",
    options: ["Serving only as mRNA templates for protein synthesis", "Acting as scaffolds, guides, decoys, or enhancers to modulate chromatin state and transcription", "Functioning exclusively as primers for DNA replication", "Encoding small peptides that activate ribosomes"],
    answer: 1,
    explanation: "LncRNAs (>200 nt, no significant ORF) regulate gene expression through diverse mechanisms: as scaffolds (assembling protein complexes, e.g., HOTAIR recruits PRC2 and LSD1), guides (directing chromatin modifiers to specific loci), decoys (sequestering transcription factors or miRNAs), and enhancer RNAs (eRNAs, facilitating enhancer-promoter interactions)."
  },
  {
    id: 50,
    question: "Phase separation and the formation of biomolecular condensates in the nucleus contribute to gene regulation by:",
    options: ["Permanently silencing all enclosed genes", "Concentrating transcription factors and co-activators at super-enhancers, enhancing transcriptional output", "Degrading mRNA within the condensate", "Preventing RNA polymerase from accessing any DNA"],
    answer: 1,
    explanation: "Liquid-liquid phase separation (LLPS) of intrinsically disordered regions (IDRs) in transcription factors (e.g., BRD4, MED1) and RNA Pol II CTD creates membraneless condensates at super-enhancers. These condensates concentrate the transcriptional machinery, facilitating robust gene activation. Disruption of phase separation is emerging as a mechanism in disease and a therapeutic target."
  }
]

export default questions
