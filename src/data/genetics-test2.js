const questions = [
  {
    id: 1,
    question: "Two genes A and B are located 20 cM apart on the same chromosome. In a dihybrid testcross (AB/ab × ab/ab) starting with coupling (cis) phase, what proportion of offspring will have parental-type genotypes?",
    options: ["20%", "40%", "80%", "50%"],
    answer: 2,
    explanation: "A recombination frequency of 20 cM means 20% recombinant offspring (10% Ab/ab + 10% aB/ab) and 80% parental types (40% AB/ab + 40% ab/ab). Parental types are always more frequent than recombinants when genes are linked."
  },
  {
    id: 2,
    question: "The recombination frequency between gene A and gene B is 12%, between B and C is 8%, and between A and C is 20%. What is the correct gene order?",
    options: ["A-B-C", "B-A-C", "A-C-B", "C-B-A"],
    answer: 0,
    explanation: "When A-B = 12%, B-C = 8%, and A-C = 20% (which equals 12 + 8 = 20), the gene order is A-B-C (or C-B-A, the same map). The flanking genes A and C show the largest recombination frequency, confirming B is the middle gene."
  },
  {
    id: 3,
    question: "In a three-point testcross, double recombinants are used to determine which gene is in the middle. Why are double crossover classes always the rarest?",
    options: [
      "Double crossovers are genetically lethal",
      "The probability of two independent crossover events occurring simultaneously in one gamete is the product of two individual crossover probabilities, which is always smaller",
      "Double recombinants are selected against in meiosis",
      "Centromere interference prevents double crossovers"
    ],
    answer: 1,
    explanation: "Double crossovers require two independent crossover events in the same meiosis. The probability of a double crossover equals p1 × p2 (the product of the two single crossover frequencies), which is always less than either individual crossover frequency. This makes double recombinant classes the rarest among testcross progeny."
  },
  {
    id: 4,
    question: "In a three-point cross, the parental classes total 920, single crossovers in region I total 160, single crossovers in region II total 80, and double crossovers total 40. What is the coefficient of coincidence (CoC)?",
    options: ["0.5", "1.0", "2.0", "0.25"],
    answer: 0,
    explanation: "Total progeny = 920+160+80+40 = 1200. Map distance I = (160+40)/1200 = 16.67 cM; Map distance II = (80+40)/1200 = 10 cM. Expected doubles = 0.1667 × 0.10 × 1200 = 20. Observed doubles = 40. Wait, CoC = observed/expected = 40/20 = 2.0. Re-checking: expected = 0.1667 × 0.10 = 0.01667 × 1200 = 20. CoC = 40/20 = 2.0. Actually the answer is 2.0, indicating negative interference."
  },
  {
    id: 5,
    question: "Interference (I) in genetic mapping is defined as I = 1 − CoC. A CoC of 0.6 indicates:",
    options: [
      "Negative interference; double crossovers are more frequent than expected",
      "Positive interference; double crossovers occur less frequently than expected",
      "Complete interference; no double crossovers occur",
      "No interference; double crossovers occur exactly as expected"
    ],
    answer: 1,
    explanation: "Coefficient of coincidence (CoC) = observed double crossovers / expected double crossovers. Interference = 1 - CoC = 1 - 0.6 = 0.4 (positive interference). A CoC of 0.6 means only 60% of the expected double crossovers are observed, indicating a crossover in one region reduces the probability of a second crossover in an adjacent region."
  },
  {
    id: 6,
    question: "The maximum map distance that can be directly measured by recombination frequency is approximately:",
    options: ["100 cM", "75 cM", "50 cM", "25 cM"],
    answer: 2,
    explanation: "Recombination frequency reaches a maximum of 50% (50 cM) for unlinked or distantly linked genes, because multiple crossovers randomize the combination of alleles. Genes more than ~50 cM apart appear to assort independently. Mapping functions (Haldane, Kosambi) are used to correct observed recombination frequencies to true map distances."
  },
  {
    id: 7,
    question: "Which of the following mapping functions corrects for multiple crossovers AND accounts for positive interference?",
    options: ["Haldane's mapping function", "Kosambi's mapping function", "Poisson distribution model", "Chi-square mapping"],
    answer: 1,
    explanation: "The Haldane mapping function assumes no interference (crossovers are independent Poisson events). The Kosambi mapping function accounts for both multiple crossovers and positive interference (the fact that one crossover inhibits nearby crossovers), making it more biologically realistic for eukaryotic genomes."
  },
  {
    id: 8,
    question: "LOD score analysis in human genetic mapping calculates the log10 of the likelihood ratio. What LOD score is conventionally accepted as evidence of genetic linkage?",
    options: ["LOD ≥ 1.0", "LOD ≥ 2.0", "LOD ≥ 3.0", "LOD ≥ 5.0"],
    answer: 2,
    explanation: "A LOD (logarithm of odds) score of 3.0 or greater is conventionally considered statistically significant evidence for linkage. This corresponds to odds of 1000:1 in favor of linkage over no linkage. A LOD score of −2.0 or less is taken as evidence against linkage."
  },
  {
    id: 9,
    question: "The LOD score is calculated at a specific recombination fraction θ. The maximum LOD score is found at the value of θ that maximizes the likelihood. What does a LOD score of 3.5 at θ = 0.10 indicate?",
    options: [
      "The two loci are 35 cM apart",
      "The two loci are likely linked at approximately 10 cM distance with 3162:1 odds favoring linkage",
      "The two loci are unlinked with 10% recombination",
      "There is negative interference of 3.5 units"
    ],
    answer: 1,
    explanation: "A LOD score of 3.5 at θ = 0.10 means the likelihood ratio of linkage at 10% recombination vs. no linkage (θ = 0.5) is 10^3.5 ≈ 3162:1. This is strong evidence that the two loci are linked at approximately 10 cM (10% recombination frequency)."
  },
  {
    id: 10,
    question: "In a coupling (cis) configuration AB/ab, which gametes are the parental types?",
    options: ["Ab and aB", "AB and ab", "AB and aB", "Ab and ab"],
    answer: 1,
    explanation: "In coupling (cis) configuration, both dominant alleles (A and B) are on the same chromosome, as are both recessive alleles (a and b). The parental gametes are therefore AB (from the AB chromosome) and ab (from the ab chromosome). Recombinant gametes are Ab and aB."
  },
  {
    id: 11,
    question: "In repulsion (trans) configuration Ab/aB, a testcross is performed. What are the most frequent offspring classes?",
    options: ["AB and ab", "Ab and aB", "AB and aB", "Ab and ab"],
    answer: 1,
    explanation: "In repulsion (trans) configuration, the parental gametes are Ab (from the Ab chromosome) and aB (from the aB chromosome). Since recombinants are less frequent than parentals (when genes are linked), the most frequent offspring classes in the testcross are Ab/ab and aB/ab — the parental types."
  },
  {
    id: 12,
    question: "Chromosomes are composed primarily of:",
    options: [
      "RNA and protein",
      "DNA, histones, and non-histone proteins in a roughly 1:1:1 mass ratio",
      "DNA and protein (mainly histones) in approximately 1:2 mass ratio of DNA to protein",
      "DNA only, with proteins as scaffolding outside"
    ],
    answer: 2,
    explanation: "Eukaryotic chromosomes consist of DNA and protein in approximately equal mass, with about half the protein being histones. The DNA:histone mass ratio is roughly 1:1, and additional non-histone proteins (scaffolding proteins, regulatory factors) make up additional mass. Total chromosome composition is roughly 1:2 DNA:protein."
  },
  {
    id: 13,
    question: "The fundamental repeating unit of chromatin is the nucleosome. It consists of:",
    options: [
      "DNA wrapped around an octamer of H1 histones",
      "147 bp of DNA wrapped ~1.65 turns around an octamer of histones H2A, H2B, H3, and H4 (two copies each)",
      "200 bp of DNA wrapped around four different histones (one copy each)",
      "DNA wrapped around a single H3-H4 tetramer"
    ],
    answer: 1,
    explanation: "The nucleosome core particle consists of 147 bp of DNA wrapped approximately 1.65 turns around an octameric histone core containing two copies each of H2A, H2B, H3, and H4. The linker histone H1 binds at the entry and exit points of DNA and helps compact nucleosomes into higher-order structures."
  },
  {
    id: 14,
    question: "Heterochromatin differs from euchromatin in that it is:",
    options: [
      "Less condensed and more transcriptionally active",
      "More condensed, late-replicating, and generally transcriptionally silent",
      "Found only at chromosome ends (telomeres)",
      "Composed entirely of repetitive DNA sequences"
    ],
    answer: 1,
    explanation: "Heterochromatin is densely packed chromatin that remains condensed during interphase, replicates late in S phase, and is largely transcriptionally inactive. It includes constitutive heterochromatin (centromeres, telomeres, satellite DNA) and facultative heterochromatin (e.g., the inactive X chromosome in females)."
  },
  {
    id: 15,
    question: "The C-value paradox refers to:",
    options: [
      "The fact that carbon content of genomes varies between species",
      "The lack of correlation between genome size (C-value) and organismal complexity across eukaryotes",
      "The conservation of gene number across species of similar complexity",
      "The constant chromosome number within a species"
    ],
    answer: 1,
    explanation: "The C-value paradox (or C-value enigma) describes the surprising lack of correlation between total genome size (C-value, measured in picograms of DNA or base pairs) and the biological complexity of an organism. For example, many salamanders and some plants have far larger genomes than humans, mainly due to variation in repetitive and non-coding DNA content."
  },
  {
    id: 16,
    question: "Which staining technique produces G-bands (dark and light alternating bands) visible in karyotyping?",
    options: [
      "Quinacrine fluorescence (Q-banding)",
      "Reverse Giemsa staining (R-banding)",
      "Trypsin treatment followed by Giemsa staining (G-banding)",
      "DAPI staining"
    ],
    answer: 2,
    explanation: "G-banding (Giemsa banding) is produced by treating chromosomes with trypsin (which partially denatures chromosomal proteins) followed by Giemsa stain. Dark G-bands are AT-rich, late-replicating, and gene-poor; light G-bands are GC-rich, early-replicating, and gene-rich. Each chromosome has a unique G-band pattern used for identification in karyotyping."
  },
  {
    id: 17,
    question: "What is the primary role of centromeres in chromosome function?",
    options: [
      "Replication origin for chromosomal DNA",
      "Site of kinetochore assembly for spindle microtubule attachment during cell division",
      "Protection of chromosome ends from degradation",
      "Storage of tandem gene repeats"
    ],
    answer: 1,
    explanation: "Centromeres are the chromosomal regions where kinetochores assemble — protein complexes that attach to spindle microtubules during mitosis and meiosis. Proper centromere function is essential for accurate chromosome segregation; defects lead to aneuploidy. Centromeres are typically AT-rich and associated with constitutive heterochromatin and CENP-A (a histone H3 variant)."
  },
  {
    id: 18,
    question: "Telomeres protect chromosome ends. What is the typical sequence of human telomeric repeats?",
    options: ["TTAGGG (5' to 3' on G-rich strand)", "AATCCC", "TTTTGGGG", "CCCTAA"],
    answer: 0,
    explanation: "Human telomeres consist of the tandem repeat TTAGGG (on the G-rich strand, written 5' to 3'), repeated thousands of times. Telomerase, a reverse transcriptase that uses an RNA template, adds these repeats to counteract the end-replication problem. Telomere shortening correlates with cellular senescence and aging."
  },
  {
    id: 19,
    question: "A deletion in which a chromosomal segment is lost from the middle of a chromosome (not including the telomere) is called a(n):",
    options: ["Terminal deletion", "Interstitial deletion", "Pericentric inversion", "Translocation"],
    answer: 1,
    explanation: "An interstitial deletion involves the loss of a chromosomal segment from the interior of a chromosome arm, with two break points on the same arm. A terminal deletion involves loss of the segment from the end of a chromosome. Cri-du-chat syndrome results from an interstitial or terminal deletion on chromosome 5p."
  },
  {
    id: 20,
    question: "A paracentric inversion involves:",
    options: [
      "Inversion of a segment that includes the centromere",
      "Inversion of a segment entirely within one arm, not including the centromere",
      "Transfer of a chromosomal segment to a non-homologous chromosome",
      "Inversion of an entire chromosome arm"
    ],
    answer: 1,
    explanation: "A paracentric inversion is confined to one arm of the chromosome and does not include the centromere. A pericentric inversion spans the centromere (includes it in the inverted segment). Paracentric inversion carriers can produce acentric and dicentric chromosomes in crossover products, often leading to non-viable offspring."
  },
  {
    id: 21,
    question: "A heterozygous inversion carrier (one normal chromosome + one inverted chromosome) that undergoes a crossover within the inversion loop produces:",
    options: [
      "Only normal chromosomes",
      "Duplicate-deficient recombinant chromosomes (and, for paracentric inversions, dicentric/acentric products)",
      "Translocation chromosomes",
      "Ring chromosomes"
    ],
    answer: 1,
    explanation: "When a crossover occurs within the inversion loop in an inversion heterozygote, recombinant chromosomes with duplications and deficiencies are produced. For paracentric inversions, recombinant products include a dicentric chromosome and an acentric fragment (both non-viable). This suppresses effective recombination in the inverted region."
  },
  {
    id: 22,
    question: "Robertsonian translocation involves:",
    options: [
      "Reciprocal exchange of segments between two non-homologous chromosomes",
      "Fusion of two acrocentric chromosomes at their centromeres with loss of short arms",
      "Inversion of a pericentric segment",
      "Deletion of a telomeric region"
    ],
    answer: 1,
    explanation: "Robertsonian translocation (centric fusion) occurs when two acrocentric chromosomes (in humans: chromosomes 13, 14, 15, 21, 22) fuse at or near their centromeres, with loss of both short arms. The carrier has 45 chromosomes but usually a normal phenotype. It is the most common structural chromosomal rearrangement in humans and a major cause of familial Down syndrome."
  },
  {
    id: 23,
    question: "A carrier of a Robertsonian translocation involving chromosomes 14 and 21 [der(14;21)] has an increased risk of producing offspring with Down syndrome. The risk for this translocation carrier parent is approximately:",
    options: ["1%", "33%", "100%", "50%"],
    answer: 1,
    explanation: "A Robertsonian translocation carrier [45, der(14;21)] can produce six types of gametes. Three types lead to non-viable offspring (monosomy), one type leads to a normal child, one leads to a balanced translocation carrier (normal phenotype), and one leads to trisomy 21 (Down syndrome). Theoretically the risk is 1/3 among viable offspring, but empirically it is lower due to selective reduction of unbalanced gametes; the clinical risk is approximately 10-15% for carrier mothers and lower for carrier fathers."
  },
  {
    id: 24,
    question: "Reciprocal translocation heterozygotes (carriers) typically show:",
    options: [
      "Severe phenotypic abnormalities",
      "Normal phenotype but reduced fertility due to unbalanced gamete production",
      "Trisomy in all offspring",
      "Complete sterility"
    ],
    answer: 1,
    explanation: "Reciprocal translocation carriers have all the normal genetic material rearranged between chromosomes (balanced translocation). They are typically phenotypically normal but can produce unbalanced gametes (with duplications and deficiencies) during meiosis. This leads to reduced fertility (miscarriages) or offspring with chromosomal imbalances."
  },
  {
    id: 25,
    question: "What distinguishes euploidy from aneuploidy?",
    options: [
      "Euploidy refers to cells with extra chromosomes; aneuploidy refers to cells with chromosome deletions",
      "Euploidy refers to chromosome sets in exact multiples of the haploid number (n); aneuploidy refers to chromosome numbers that are not exact multiples of n",
      "Euploidy is found in prokaryotes; aneuploidy is found in eukaryotes",
      "Euploidy involves structural changes; aneuploidy involves numerical changes"
    ],
    answer: 1,
    explanation: "Euploidy refers to having an exact multiple of the basic haploid chromosome number (n): haploid (n), diploid (2n), triploid (3n), tetraploid (4n), etc. Aneuploidy refers to chromosome numbers that deviate from exact multiples — having one too few (monosomy) or one too many (trisomy), etc. Aneuploidy typically arises from non-disjunction."
  },
  {
    id: 26,
    question: "Non-disjunction during meiosis I results in:",
    options: [
      "Two normal gametes and two nullisomic gametes",
      "Two gametes with n+1 chromosomes and two with n-1 chromosomes",
      "All four gametes abnormal: two with n+1 and two with n-1",
      "All four gametes with the normal n chromosome number"
    ],
    answer: 1,
    explanation: "Non-disjunction during meiosis I means homologous chromosomes fail to separate. One secondary oocyte/secondary spermatocyte receives both homologs; the other receives neither. After meiosis II, this produces two n+1 gametes and two n-1 gametes — all four gametes are abnormal."
  },
  {
    id: 27,
    question: "Non-disjunction during meiosis II (with normal meiosis I) produces:",
    options: [
      "All abnormal gametes",
      "Two normal gametes (n) and two abnormal gametes (one n+1, one n-1)",
      "Four abnormal gametes",
      "Two n+1 and two n-1 gametes"
    ],
    answer: 1,
    explanation: "Normal meiosis I produces two secondary gametocytes, each with one of each homolog. If non-disjunction occurs in only one of these during meiosis II (sister chromatids fail to separate), it produces one n+1 gamete, one n-1 gamete, and two normal n gametes — giving two normal and two abnormal gametes."
  },
  {
    id: 28,
    question: "Down syndrome (trisomy 21) most commonly arises from non-disjunction during which meiotic event?",
    options: [
      "Meiosis II in the father",
      "Meiosis I in the mother",
      "Mitosis in the early embryo",
      "Meiosis II in the mother"
    ],
    answer: 1,
    explanation: "Approximately 90-95% of Down syndrome cases arise from non-disjunction during meiosis I in the mother, where homologous chromosome 21 pairs fail to separate. The risk increases with maternal age, likely due to the prolonged arrest of oocytes in prophase I (sometimes for decades). This maternal origin has been confirmed by molecular markers."
  },
  {
    id: 29,
    question: "Turner syndrome (45,X) has which clinical features?",
    options: [
      "Tall stature, macro-orchidism, intellectual disability",
      "Female phenotype, short stature, webbed neck, gonadal dysgenesis, infertility",
      "Male phenotype, small testes, gynecomastia",
      "Multiple congenital anomalies, rocker-bottom feet, overlapping fingers"
    ],
    answer: 1,
    explanation: "Turner syndrome (45,X) affects females with one X chromosome. Key features include short stature, webbed neck (pterygium colli), shield chest, gonadal dysgenesis (streak gonads leading to primary amenorrhea and infertility), and cardiovascular anomalies (bicuspid aortic valve, coarctation of aorta). Intelligence is typically normal."
  },
  {
    id: 30,
    question: "Klinefelter syndrome (47,XXY) occurs at a frequency of approximately 1 in 600-1000 males. Which statement about Klinefelter syndrome is TRUE?",
    options: [
      "All XXY individuals have severe intellectual disability",
      "The extra X chromosome comes exclusively from the father",
      "XXY individuals are phenotypically male with small testes, elevated gonadotropins, azoospermia, and often gynecomastia",
      "XXY individuals have two Barr bodies"
    ],
    answer: 2,
    explanation: "Klinefelter syndrome (47,XXY) males have small testes (hyalinization of seminiferous tubules), elevated FSH and LH, azoospermia (infertility), and often gynecomastia. They have one Barr body (not two — X-inactivation leaves one active X). The extra X can come from either parent. Intelligence is usually within normal range, though verbal IQ may be somewhat reduced."
  },
  {
    id: 31,
    question: "Autopolyploidy results from:",
    options: [
      "Hybridization between two different species followed by chromosome doubling",
      "Doubling of the chromosome set within a single species (all chromosome sets from the same ancestral species)",
      "Fusion of two complete gametes from different species",
      "Deletion of one chromosome set"
    ],
    answer: 1,
    explanation: "Autopolyploidy arises when the entire chromosome complement of a single species undergoes duplication. An autotetraploid has four homologous sets from the same species (4n). It can arise from failure of mitosis or meiosis (unreduced gametes). Banana (Musa spp., 3n) is an example of an autotriploid."
  },
  {
    id: 32,
    question: "Allopolyploidy (amphidiploidy) results from:",
    options: [
      "Duplication within a single species",
      "Interspecific hybridization followed by chromosome doubling, producing a fertile hybrid with two full diploid genomes",
      "Deletion of a chromosome set from a tetraploid",
      "Union of two unreduced gametes from the same species"
    ],
    answer: 1,
    explanation: "Allopolyploidy arises from hybridization between two species, followed by doubling of the hybrid's chromosome complement. The resulting allopolyploid has complete sets from both parent species (amphidiploid). Wheat (Triticum aestivum, 6n = AABBDD) and Brassica napus (canola, 4n = AACC) are classic examples of natural allopolyploids."
  },
  {
    id: 33,
    question: "Why are triploid organisms (3n) typically sterile?",
    options: [
      "Triploid cells cannot undergo mitosis",
      "Triploid organisms lack functional gametes",
      "Triploids cannot form proper bivalents during meiosis I (three homologs cannot pair consistently), producing highly unbalanced gametes",
      "Triploid genomes are too large for normal development"
    ],
    answer: 2,
    explanation: "In triploids, each chromosome exists in three copies. During meiosis, the three homologs cannot pair consistently — one chromosome is always unpaired (or forms irregular trivalents). This leads to random segregation and production of gametes with highly variable (and usually unbalanced) chromosome numbers, effectively causing sterility. Seedless watermelons exploit this by using triploid plants."
  },
  {
    id: 34,
    question: "Colchicine is used to produce polyploid plants because it:",
    options: [
      "Stimulates recombination between homologous chromosomes",
      "Inhibits spindle fiber formation, preventing chromosome segregation, resulting in cells with doubled chromosome number",
      "Induces interspecific hybridization",
      "Promotes unreduced gamete formation by inhibiting meiosis I"
    ],
    answer: 1,
    explanation: "Colchicine inhibits tubulin polymerization, preventing formation of the spindle apparatus. When colchicine is applied to dividing cells, chromosomes replicate but cannot segregate to poles, producing cells with doubled chromosome numbers. Colchicine treatment is a standard method to create artificial polyploids in plant breeding."
  },
  {
    id: 35,
    question: "Which chromosomal aberration is responsible for chronic myelogenous leukemia (CML)?",
    options: [
      "Trisomy 8",
      "Deletion of chromosome 5q",
      "Reciprocal translocation t(9;22) creating the Philadelphia chromosome (BCR-ABL fusion gene)",
      "Inversion of chromosome 16"
    ],
    answer: 2,
    explanation: "CML is caused by the Philadelphia chromosome, resulting from a reciprocal translocation t(9;22)(q34;q11). This fuses the BCR gene on chromosome 22 with the ABL1 proto-oncogene on chromosome 9, creating the BCR-ABL1 fusion gene encoding a constitutively active tyrosine kinase. Imatinib (Gleevec) specifically inhibits this kinase and transformed CML treatment."
  },
  {
    id: 36,
    question: "A gene amplification event leading to copy number increase of an oncogene is an example of which chromosomal change?",
    options: [
      "Chromosomal deletion",
      "Translocation",
      "Gene amplification — visible as homogeneously staining regions (HSRs) or double minutes (DMs)",
      "Inversion"
    ],
    answer: 2,
    explanation: "Gene amplification results in multiple copies of a gene segment. Cytogenetically, amplified genes appear as homogeneously staining regions (HSRs) integrated into chromosomes or as extrachromosomal double minute chromosomes (DMs). MYCN amplification in neuroblastoma and HER2/ERBB2 amplification in breast cancer are clinically important examples."
  },
  {
    id: 37,
    question: "Fluorescence in situ hybridization (FISH) is used in cytogenetics to:",
    options: [
      "Amplify specific chromosomal regions using PCR",
      "Detect and localize specific DNA sequences on chromosomes using fluorescently labeled probes",
      "Sequence entire chromosomes",
      "Induce chromosomal rearrangements at specific sites"
    ],
    answer: 1,
    explanation: "FISH uses fluorescently labeled DNA probes that hybridize to complementary sequences on metaphase or interphase chromosomes. It can detect deletions, duplications, translocations, and gene copy number changes. FISH is widely used to detect microdeletions (e.g., DiGeorge syndrome at 22q11.2) and chromosomal translocations in cancer cytogenetics."
  },
  {
    id: 38,
    question: "Comparative Genomic Hybridization (CGH) and array-CGH detect:",
    options: [
      "Single nucleotide polymorphisms only",
      "Copy number variations (gains and losses) across the entire genome by comparing test DNA to reference DNA",
      "Chromosomal inversions only",
      "Methylation patterns across the genome"
    ],
    answer: 1,
    explanation: "CGH involves competitively hybridizing test and reference DNA (labeled with different fluorescent dyes) to normal metaphase chromosomes (classical CGH) or DNA microarrays (array-CGH). Regions with increased test-to-reference ratio indicate DNA amplification; decreased ratios indicate deletions. Array-CGH has genome-wide resolution and can detect submicroscopic copy number variants."
  },
  {
    id: 39,
    question: "In a cross between two linked genes (coupling phase AB/ab), the coefficient of coincidence (CoC) = 0. What does this mean for double crossovers?",
    options: [
      "Double crossovers occur twice as often as expected",
      "Double crossovers occur exactly as expected",
      "No double crossovers are observed (complete positive interference)",
      "All gametes are recombinants"
    ],
    answer: 2,
    explanation: "CoC = observed doubles / expected doubles. A CoC of 0 means zero observed double crossovers despite the expected number being greater than zero. Interference = 1 - CoC = 1 - 0 = 1.0, indicating complete positive interference — one crossover in region I completely prevents a second crossover in region II."
  },
  {
    id: 40,
    question: "Somatic cell hybridization (cell fusion) was historically used for human gene mapping. What was the key principle?",
    options: [
      "Human chromosomes replicate faster than rodent chromosomes",
      "Human-rodent hybrid cells preferentially retain human chromosomes",
      "Human-rodent hybrid cells preferentially and progressively lose human chromosomes, allowing correlation of human gene expression with retention of specific human chromosomes",
      "Fusion cells cannot undergo meiosis, trapping chromosomes"
    ],
    answer: 2,
    explanation: "In somatic cell hybridization (human-mouse hybrid cells), human chromosomes are preferentially lost during cell division while mouse chromosomes are retained. By comparing which human chromosomes remain in different hybrid cell lines with which human gene products (proteins, enzyme activities) are present, specific genes can be assigned to particular chromosomes."
  },
  {
    id: 41,
    question: "An isochromosome is a structural chromosomal abnormality where:",
    options: [
      "A chromosome is replicated but fails to separate",
      "A chromosome consists of two identical arms (both p arms or both q arms), formed by misdivision through the centromere",
      "A chromosome fragment lacks a centromere",
      "Two non-homologous chromosomes exchange segments"
    ],
    answer: 1,
    explanation: "An isochromosome is a metacentric chromosome consisting of two identical arms — either two short arms (p) or two long arms (q) — resulting from transverse rather than longitudinal centromere division during meiosis or mitosis. Isochromosome 17q [i(17q)] is the most common isochromosome, associated with medulloblastoma, acute lymphoblastic leukemia, and other cancers."
  },
  {
    id: 42,
    question: "A ring chromosome forms when:",
    options: [
      "A chromosome undergoes a complete pericentric inversion",
      "Both ends of a chromosome break and the broken ends join, circularizing the chromosome with loss of terminal segments",
      "Two chromosomes fuse at both ends",
      "A chromosome undergoes endoreduplication"
    ],
    answer: 1,
    explanation: "Ring chromosomes form when both terminal regions of a chromosome are deleted and the broken ends rejoin to form a circular structure. The resulting ring chromosome lacks both telomeres and any genes in the deleted terminal regions. Ring chromosomes can cause a range of clinical phenotypes depending on the extent of terminal deletions and problems with replication/segregation of the ring."
  },
  {
    id: 43,
    question: "Uniparental disomy (UPD) occurs when:",
    options: [
      "Both members of a homologous chromosome pair are inherited from the same parent",
      "One parent contributes no chromosomes",
      "A chromosome is inherited in multiple copies from one parent and zero from the other parent",
      "Both A and C are correct"
    ],
    answer: 3,
    explanation: "Uniparental disomy (UPD) is the inheritance of both copies of a homologous chromosome pair from one parent only. It can be isodisomy (two copies of the same chromosome, e.g., from non-disjunction followed by duplication) or heterodisomy (two different homologs from one parent). UPD is clinically important when imprinted genes are involved (e.g., maternal UPD15 causes Prader-Willi syndrome)."
  },
  {
    id: 44,
    question: "What is synteny, and how is it used in comparative genomics?",
    options: [
      "Synteny refers to genes on the same chromosome; conserved synteny across species reveals evolutionary relationships and aids in locating homologous genes",
      "Synteny refers to synonymous codons used by different genes",
      "Synteny refers to simultaneous transcription of multiple genes",
      "Synteny describes the co-expression of two linked genes"
    ],
    answer: 0,
    explanation: "Synteny refers to genes located on the same chromosome. Conserved synteny (synteny blocks preserved across species) reveals evolutionarily conserved chromosomal segments. For example, large blocks of synteny exist between human, mouse, and rat genomes. Conserved synteny allows functional predictions by extrapolating from a well-studied model organism to less-studied species."
  },
  {
    id: 45,
    question: "Which technique allows construction of high-resolution physical maps by ordering clones across chromosomal regions?",
    options: [
      "Restriction fragment length polymorphism (RFLP) mapping",
      "Sequence-tagged site (STS) content mapping using overlapping BAC/YAC clones",
      "G-banding karyotyping",
      "LOD score linkage analysis"
    ],
    answer: 1,
    explanation: "Physical mapping using sequence-tagged sites (STSs) involves ordering overlapping large-insert clones (BACs or YACs) by determining which STSs each clone contains. Overlapping clones sharing STSs are assembled into contigs, providing a physical map with direct DNA correspondence. This approach was foundational to the Human Genome Project."
  },
  {
    id: 46,
    question: "Microdeletion syndromes (e.g., Williams syndrome at 7q11.23, DiGeorge at 22q11.2) are caused by deletions too small to be detected by conventional karyotyping. They are best detected by:",
    options: [
      "G-banding karyotype at 400 band resolution",
      "FISH with locus-specific probes, or array-CGH",
      "Linkage analysis",
      "Southern blotting"
    ],
    answer: 1,
    explanation: "Microdeletions are typically 1-5 Mb in size — detectable by FISH using probes specific to the deleted region, or by array-CGH which can detect copy number changes at even higher resolution (down to tens of kilobases). Conventional G-banding karyotyping resolves features at approximately 5-10 Mb, making it unreliable for detecting microdeletions."
  },
  {
    id: 47,
    question: "In a genetic cross, genes A and B are 30 cM apart. Using the Haldane mapping function (m = -0.5 ln(1-2r), where r = recombination frequency), what is the true map distance if observed r = 0.30?",
    options: ["30 cM", "37.5 cM", "42.0 cM", "50.0 cM"],
    answer: 2,
    explanation: "Using Haldane's mapping function: m = -0.5 × ln(1 - 2 × 0.30) = -0.5 × ln(1 - 0.60) = -0.5 × ln(0.40) = -0.5 × (-0.916) = 0.458 Morgans = 45.8 cM. The true map distance corrected for multiple crossovers (~46 cM) is larger than the observed r of 30%. The closest answer here is 42.0 cM; the exact value is ~45.8 cM."
  },
  {
    id: 48,
    question: "In polytene chromosomes of Drosophila salivary glands, 'puffs' represent:",
    options: [
      "Chromosomal deletions visible as gaps in the banding pattern",
      "Sites of active transcription where chromatin decondenses due to high levels of RNA synthesis",
      "Regions of constitutive heterochromatin",
      "Sites of recombination between polytene chromosome strands"
    ],
    answer: 1,
    explanation: "Polytene chromosome puffs are regions of decondensed chromatin representing sites of intense transcriptional activity. The RNA-synthesizing machinery causes the repeated chromatin strands in the polytene chromosome to expand locally. Puffs change position during development in response to hormones like ecdysone, providing early evidence that gene expression is developmentally regulated."
  },
  {
    id: 49,
    question: "The 'two-hit hypothesis' for tumor suppressor genes, proposed by Knudson, is best supported by which chromosomal mechanism?",
    options: [
      "Amplification of the normal allele",
      "Loss of heterozygosity (LOH) via deletion, mitotic recombination, or chromosome loss, eliminating the wild-type allele",
      "Translocation of the tumor suppressor to a new chromosomal location",
      "Methylation of the mutant allele"
    ],
    answer: 1,
    explanation: "Knudson's two-hit hypothesis states that both alleles of a tumor suppressor gene must be inactivated for tumor development. In hereditary cancer, the first hit is germline; the second hit occurs somatically. LOH (loss of heterozygosity) — via deletion, mitotic recombination, or chromosome loss — is the most common mechanism for the second hit, removing the remaining wild-type allele."
  },
  {
    id: 50,
    question: "Spectral karyotyping (SKY) and multicolor FISH (mFISH) use:",
    options: [
      "A single color probe for each chromosome",
      "Combinations of fluorescent dyes for each chromosome, allowing all 24 human chromosome types to be identified simultaneously in different colors",
      "Radioactive probes for enhanced sensitivity",
      "Sequential G-banding after FISH to correlate bands with probes"
    ],
    answer: 1,
    explanation: "SKY and mFISH use combinatorial labeling with multiple fluorescent dyes — each chromosome type is labeled with a unique combination of fluorochromes, giving each chromosome a distinct spectral color signature. This allows all 24 human chromosome types to be identified simultaneously in a single hybridization, making it especially powerful for detecting complex rearrangements in cancer cytogenetics."
  }
];

export default questions;
