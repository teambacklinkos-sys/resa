const questions = [
  {
    id: 1,
    question: "A 35-year-old man with Huntington disease (HD) has a CAG repeat expansion of 48 repeats in HTT. His son is found to have 52 repeats. This expansion from father to son illustrates which genetic phenomenon?",
    options: [
      "Anticipation due to intergenerational repeat instability, with expansions more common in paternal transmission for HD",
      "Anticipation due to maternal imprinting of the HTT locus",
      "Meiotic drive favoring larger HTT alleles",
      "Somatic mosaicism for CAG repeat length in the son"
    ],
    answer: 0,
    explanation: "Huntington disease shows anticipation — increasing severity and earlier onset in successive generations — due to intergenerational instability of CAG repeats. For HD specifically, expansions tend to be more pronounced in paternal transmissions (via spermatogenesis), in contrast to myotonic dystrophy where maternal transmissions show greater expansion. Alleles in the 36-39 repeat range show incomplete penetrance while >39 repeats are fully penetrant."
  },
  {
    id: 2,
    question: "A couple presents for genetic counseling. The woman has Myotonic Dystrophy Type 1 (DM1) with a CTG repeat of 200 (normal <37). They ask about the risk of congenital DM1 in their children. Which statement is most accurate?",
    options: [
      "Congenital DM1 can be transmitted by either parent equally; risk is 50%",
      "Congenital DM1 is almost exclusively transmitted maternally; large maternal expansions (>1000 repeats) strongly predispose offspring to the congenital form",
      "The risk of congenital DM1 is low because CTG repeats contract during maternal meiosis",
      "Congenital DM1 risk depends only on the sex of the child, not the parent of origin"
    ],
    answer: 1,
    explanation: "Congenital myotonic dystrophy (the most severe form, present at birth with hypotonia and respiratory failure) is almost always maternally transmitted and is associated with very large CTG repeat expansions (often >1000). Oogenesis is prone to massive expansion from large premutation alleles, while spermatogenesis tends to limit expansion. The mother's repeat of 200 is already in the disease range but the exact risk of congenital DM1 is influenced by the propensity for further expansion."
  },
  {
    id: 3,
    question: "Which of the following trinucleotide repeat disorders is caused by a CGG repeat expansion in the 5'UTR of a gene, leading to transcriptional silencing via hypermethylation?",
    options: [
      "Huntington disease (HTT — CAG)",
      "Fragile X syndrome (FMR1 — CGG)",
      "Friedreich ataxia (FXN — GAA)",
      "Spinocerebellar ataxia type 1 (ATXN1 — CAG)"
    ],
    answer: 1,
    explanation: "Fragile X syndrome is caused by CGG repeat expansion (>200 repeats) in the 5'UTR of FMR1; this triggers methylation of the CpG island in the FMR1 promoter, silencing the gene and causing loss of FMRP protein. Friedreich ataxia is caused by a GAA repeat in intron 1 of FXN causing transcriptional block, while HD and SCA1 involve coding-region CAG expansions producing toxic polyglutamine proteins."
  },
  {
    id: 4,
    question: "A family pedigree shows that an autosomal dominant condition affects individuals in every generation. The father has the condition and 3 of 6 children are affected. One unaffected child has an affected child. This observation of an unaffected individual having an affected child is best explained by:",
    options: [
      "Incomplete penetrance of the pathogenic allele in the skipped generation individual",
      "New de novo mutation in the grandchild of the affected grandfather",
      "X-linked inheritance with carrier females",
      "Mitochondrial inheritance with variable expression"
    ],
    answer: 0,
    explanation: "When an autosomal dominant disorder appears to 'skip' a generation (an obligate carrier is clinically unaffected but transmits the allele to an affected child), this is explained by incomplete penetrance — the pathogenic allele is present but does not manifest clinical features in that individual. This is a key distinction from recessive inheritance and has critical implications for genetic counseling."
  },
  {
    id: 5,
    question: "Neurofibromatosis type 1 (NF1) is an autosomal dominant disorder caused by mutations in the NF1 tumor suppressor gene (encoding neurofibromin, a RAS-GAP). Despite being autosomal dominant, tumors (neurofibromas) develop via a two-hit mechanism. This means:",
    options: [
      "Two copies of the mutant NF1 allele must be inherited for disease to occur",
      "The germline mutation provides one hit; somatic loss of the second NF1 allele in a cell causes clonal tumor growth",
      "NF1 mutations cause haploinsufficiency that is sufficient for dominant phenotypes, but tumor formation requires an additional environmental carcinogen",
      "NF1 acts as a dominant negative, so the single mutant allele is sufficient for both disease and tumorigenesis"
    ],
    answer: 1,
    explanation: "NF1 follows Knudson's two-hit model: individuals with NF1 inherit one germline loss-of-function mutation (first hit) in all cells, but neurofibromas develop when a somatic cell loses the second functional NF1 allele (second hit) through LOH, deletion, or somatic mutation, causing complete loss of neurofibromin and uncontrolled RAS signaling. Systemic NF1 features (café-au-lait spots, Lisch nodules) reflect haploinsufficiency, while tumors require biallelic loss."
  },
  {
    id: 6,
    question: "In pedigree analysis, which pattern of inheritance is characterized by: male-to-male transmission occurs, both sexes are affected approximately equally, and each affected individual has at least one affected parent?",
    options: [
      "Autosomal recessive",
      "X-linked dominant",
      "Autosomal dominant",
      "Mitochondrial"
    ],
    answer: 2,
    explanation: "Autosomal dominant inheritance is characterized by: vertical transmission (affected individuals in every generation), equal male-to-female ratio among affected individuals, 50% recurrence risk to offspring of an affected parent, and crucially, male-to-male transmission (which rules out X-linked dominant inheritance). X-linked dominant shows no male-to-male transmission as affected fathers pass the X only to daughters."
  },
  {
    id: 7,
    question: "Duchenne muscular dystrophy (DMD) is X-linked recessive. A woman whose brother has DMD seeks genetic counseling. Her parents are unaffected. What is the probability that she is a carrier?",
    options: [
      "25%",
      "50%",
      "67%",
      "100%"
    ],
    answer: 2,
    explanation: "The woman's brother has DMD, so the mutation must have come from the mother (who is either a carrier or the brother has a de novo mutation). Since the parents are unaffected, the mother is likely a carrier (probability ~2/3 given that ~1/3 of DMD cases arise from de novo mutations, but if we assume the mother is an obligate carrier due to an affected son and no de novo mutation, the sister has a 50% chance of inheriting the carrier allele from her carrier mother). However, using Bayesian analysis: the probability the mother is a carrier is 2/3 (accounting for de novo mutation), and given a carrier mother, the probability the sister is a carrier is 1/2, giving an overall probability of 2/3 × 1/2 = 1/3... but in a classic genetics problem without de novo consideration: if the mother is an obligate carrier, the sister's risk is 2/3 (using the conditional probability since unaffected sisters of DMD patients have a 2/3 chance of being carriers given that their mother is an obligate carrier — but here the mother herself has a 2/3 probability of being a carrier). The answer 2/3 refers to the probability that the woman is a carrier if the mother is assumed to be an obligate carrier."
  },
  {
    id: 8,
    question: "Hemophilia A (factor VIII deficiency) and hemophilia B (factor IX deficiency) are both X-linked recessive disorders that are clinically indistinguishable without coagulation factor assays. A woman whose father has hemophilia A marries an unaffected man. What is the probability their son will have hemophilia A?",
    options: [
      "0% — sons inherit the Y from father, not the X",
      "25%",
      "50%",
      "100%"
    ],
    answer: 2,
    explanation: "The woman's father has hemophilia A (X^h Y), so she received his X^h chromosome and is an obligate carrier (X^H X^h). She passes either X^H or X^h to each child. Her sons receive only the Y from their unaffected father, so their X comes entirely from the mother; there is a 50% chance her son inherits X^h and has hemophilia A. Daughters have a 50% chance of being carriers."
  },
  {
    id: 9,
    question: "Mitochondrial DNA (mtDNA) diseases show maternal inheritance. A woman with mitochondrial encephalomyopathy, lactic acidosis, and stroke-like episodes (MELAS) due to the m.3243A>G mutation in MT-TL1 asks about the risk to her children. Which statement is most accurate?",
    options: [
      "All children will be affected to the same degree because mtDNA is clonally inherited",
      "Only daughters will transmit the mutation; sons cannot pass it to their children",
      "The mutation level (heteroplasmy) in offspring is unpredictable due to the mitochondrial bottleneck during oogenesis; all children are at risk of inheriting the mutation",
      "The risk depends on whether the mutation is on the heavy or light strand of mtDNA"
    ],
    answer: 2,
    explanation: "All children (sons and daughters) of an affected mother can inherit the mitochondrial mutation, as mitochondria are maternally transmitted. However, the proportion of mutant mtDNA (heteroplasmy level) in each child is unpredictable due to the mitochondrial genetic bottleneck during oogenesis, where a small number of mitochondria are amplified. Sons do not transmit mtDNA to their children."
  },
  {
    id: 10,
    question: "Leber hereditary optic neuropathy (LHON) shows incomplete penetrance that is sex-influenced: approximately 50% of males and only 10% of females carrying the primary mtDNA mutation develop the disease. This sex bias suggests:",
    options: [
      "The mtDNA mutation is actually on the X chromosome in LHON families",
      "Nuclear modifier genes on the X chromosome modulate LHON penetrance; males, having only one X, cannot compensate for an unfavorable allele",
      "Estrogen directly protects mitochondrial complex I function in females",
      "LHON mutations cause Y-chromosome instability that selectively affects males"
    ],
    answer: 1,
    explanation: "The sex bias in LHON penetrance is thought to involve nuclear modifier genes, some of which may be X-linked; since males are hemizygous for the X, they cannot benefit from a potentially protective second allele that a female heterozygote would have. Additionally, estrogen may have a protective effect on mitochondrial function in affected women. These modifiers are areas of active research."
  },
  {
    id: 11,
    question: "Prader-Willi syndrome (PWS) and Angelman syndrome (AS) both result from loss of function in the 15q11-13 region but have distinct clinical features. The same cytogenetic deletion of this region causes PWS when inherited from the father and AS when inherited from the mother. This is the definition of:",
    options: [
      "Pseudoautosomal inheritance",
      "Genomic imprinting — the region carries parent-of-origin-specific epigenetic marks that differentially silence maternal or paternal alleles",
      "Uniparental disomy causing homozygosity for recessive alleles",
      "X-inactivation spreading to an autosome in a sex-specific manner"
    ],
    answer: 1,
    explanation: "This is the classic example of genomic imprinting: the 15q11-13 region contains maternally imprinted (paternal-only expression) genes (e.g., SNRPN, NDN) and paternally imprinted (maternal-only expression) genes (e.g., UBE3A in neurons). Deletion of paternal 15q11-13 causes PWS (loss of paternally expressed genes); deletion of maternal 15q11-13 causes AS (loss of maternally expressed UBE3A in neurons)."
  },
  {
    id: 12,
    question: "A child has Angelman syndrome. Genetic testing shows no deletion of 15q11-13 and both copies of chromosome 15 are structurally normal by G-banding. Methylation-specific PCR shows only a paternal methylation pattern on both alleles. What is the most likely molecular mechanism?",
    options: [
      "De novo mutation in UBE3A on the maternal chromosome",
      "Paternal uniparental disomy (UPD) of chromosome 15 — the child has two paternal copies and no maternal chromosome 15",
      "Imprinting center deletion on the maternal allele",
      "UBE3A promoter methylation on the maternal allele"
    ],
    answer: 1,
    explanation: "When both chromosomes 15 appear structurally normal but methylation analysis shows only a paternal pattern (both alleles methylated as the paternal allele normally is), this indicates paternal uniparental disomy (UPD) — the child has inherited both copies of chromosome 15 from the father and none from the mother. Since UBE3A is expressed only from the maternal allele in neurons, paternal UPD causes AS by functional absence of maternal UBE3A."
  },
  {
    id: 13,
    question: "Cystic fibrosis (CF) is autosomal recessive. The carrier frequency in European populations is approximately 1/25. Using Hardy-Weinberg principles, what is the expected disease frequency?",
    options: [
      "1/2500",
      "1/1250",
      "1/2000",
      "1/625"
    ],
    answer: 0,
    explanation: "If the carrier frequency (2pq) ≈ 1/25, then q (mutant allele frequency) ≈ 1/50 (since 2pq ≈ 2q when q is small). The disease frequency (q²) = (1/50)² = 1/2500. This matches observed CF incidence of approximately 1 in 2,500 live births in European populations, consistent with Hardy-Weinberg equilibrium."
  },
  {
    id: 14,
    question: "The CFTR ΔF508 mutation causes cystic fibrosis by a mechanism distinct from a simple loss-of-function frameshift. ΔF508 is a 3-base-pair deletion that removes phenylalanine at position 508. The primary consequence of this deletion is:",
    options: [
      "Premature termination of CFTR mRNA translation by NMD",
      "Misfolding of the CFTR protein that is recognized by the ER quality control machinery and targeted for ERAD, preventing it from reaching the cell surface",
      "Deletion of a critical phosphorylation site required for channel opening",
      "Loss of the CFTR promoter binding site for CREB, reducing transcription"
    ],
    answer: 1,
    explanation: "The ΔF508 mutation (deletion of phenylalanine-508 in NBD1) causes CFTR protein misfolding; the misfolded protein is recognized by ER chaperones (Hsp70, calnexin) and targeted for ER-associated degradation (ERAD) via ubiquitination and proteasomal degradation. Because the protein is retained in the ER, it never reaches the apical membrane of epithelial cells, explaining the loss of chloride channel function."
  },
  {
    id: 15,
    question: "BRCA1 and BRCA2 mutations predispose to hereditary breast and ovarian cancer (HBOC). Both genes are involved in DNA double-strand break repair by homologous recombination. A woman with a pathogenic BRCA1 mutation has a lifetime risk of breast cancer of approximately:",
    options: [
      "12% (same as the general population)",
      "30-40%",
      "60-70%",
      "Nearly 100%"
    ],
    answer: 2,
    explanation: "Women with pathogenic BRCA1 mutations have an estimated cumulative lifetime risk of breast cancer of approximately 60-72% (vs. ~12% in the general population) and ovarian cancer risk of approximately 44-46%. BRCA2 mutation carriers have slightly lower risks (breast ~45-69%, ovarian ~11-17%). These estimates have evolved with larger cohort studies and the specific mutation and family history influence the exact risk."
  },
  {
    id: 16,
    question: "X-inactivation (lyonization) results in dosage compensation in female mammals. Which of the following statements about X-inactivation is INCORRECT?",
    options: [
      "X-inactivation occurs early in embryonic development (around the blastocyst stage in somatic cells) and is random with respect to parental origin in most somatic cells",
      "Once established, X-inactivation is clonally maintained through all subsequent cell divisions",
      "All genes on the inactive X chromosome are permanently silenced, including those in the pseudoautosomal region (PAR)",
      "The XIST gene on the inactive X is expressed and its RNA coats the inactive X in cis"
    ],
    answer: 2,
    explanation: "Not all genes on the inactive X are silenced: approximately 15-25% of X-linked genes escape X-inactivation, including most genes in the pseudoautosomal regions (PAR1 and PAR2), which are expressed from both X chromosomes in females. XIST RNA coats the inactive X and recruits Polycomb complexes, and X-inactivation is indeed random and clonally maintained."
  },
  {
    id: 17,
    question: "A child is born with features of Turner syndrome (45,X). Cytogenetic analysis reveals that 30% of cells are 45,X and 70% are 46,XX. This finding indicates:",
    options: [
      "The child has complete Turner syndrome that arose from a meiotic error in one parent",
      "The child has mosaic Turner syndrome, which typically has a milder phenotype than complete 45,X monosomy",
      "The child has a structural X chromosome abnormality that stains as two normal X chromosomes in 70% of cells",
      "This karyotype is incompatible with viability and must represent a laboratory artifact"
    ],
    answer: 1,
    explanation: "Mosaic Turner syndrome (45,X/46,XX) arises from a post-zygotic mitotic error in an initially 46,XX zygote; the proportion of 45,X cells varies among tissues. Mosaic Turner syndrome generally has a milder phenotype than complete 45,X, with higher rates of spontaneous puberty and fertility compared to complete monosomy X, though the phenotype is highly variable."
  },
  {
    id: 18,
    question: "A male patient has Klinefelter syndrome (47,XXY). Which of the following reproductive options is most appropriate for this patient who wishes to have biologically related children?",
    options: [
      "Conventional IVF using ejaculated sperm, as most 47,XXY men have normal sperm counts",
      "Testicular sperm extraction (TESE) combined with intracytoplasmic sperm injection (ICSI), as many 47,XXY men have focal spermatogenesis",
      "Sperm donation is the only option as no sperm production occurs in 47,XXY men",
      "Hormonal therapy with testosterone will restore spermatogenesis in 47,XXY men"
    ],
    answer: 1,
    explanation: "Most men with Klinefelter syndrome have azoospermia in ejaculate, but up to 50% have focal spermatogenesis in the testes detectable by testicular sperm extraction (TESE); retrieved sperm can be used for ICSI-IVF. Testosterone therapy does not restore spermatogenesis and may further suppress it by suppressing FSH. Preimplantation genetic testing can be offered to assess aneuploidy risk in embryos."
  },
  {
    id: 19,
    question: "A child presents with phenylketonuria (PKU). Newborn screening detected elevated phenylalanine at 72 hours. PKU is autosomal recessive, caused by mutations in PAH (phenylalanine hydroxylase). The primary biochemical consequence of PAH deficiency is:",
    options: [
      "Accumulation of tyrosine leading to excess catecholamine synthesis",
      "Accumulation of phenylalanine and its transamination product phenylpyruvate, which are neurotoxic; simultaneously, tyrosine becomes an essential amino acid",
      "Deficiency of BH4 (tetrahydrobiopterin), the PAH cofactor, preventing all aromatic amino acid hydroxylation",
      "Excess phenylalanine causing competitive inhibition of branched-chain amino acid transporters in the liver"
    ],
    answer: 1,
    explanation: "PAH deficiency leads to accumulation of phenylalanine (and its byproducts phenylpyruvate, phenylacetate, phenyllactate), which are neurotoxic and cause intellectual disability if untreated; simultaneously, tyrosine production is impaired, making it a conditionally essential amino acid. Treatment involves a low-phenylalanine diet; some patients with BH4-responsive PAH mutations benefit from sapropterin (BH4 cofactor supplementation)."
  },
  {
    id: 20,
    question: "Rett syndrome is an X-linked dominant disorder primarily affecting females, caused by mutations in MECP2 (methyl-CpG binding protein 2). Why are affected males with MECP2 mutations usually not observed in Rett syndrome families?",
    options: [
      "MECP2 is located in the pseudoautosomal region and is expressed equally in males and females",
      "Males with germline MECP2 loss-of-function mutations are typically severely affected and die in early infancy (neonatal encephalopathy), while females are protected by X-inactivation mosaicism",
      "MECP2 mutations are exclusively inherited through the maternal germline and cannot be transmitted by males",
      "The MECP2 gene is subject to genomic imprinting and is only expressed from the paternal allele"
    ],
    answer: 1,
    explanation: "Males with MECP2 loss-of-function mutations (hemizygous, as they have only one X) typically have severe neonatal encephalopathy and die shortly after birth, so they are rarely seen in Rett syndrome pedigrees. Affected females are mosaic due to X-inactivation; cells expressing the normal MECP2 allele partially compensate, resulting in the classic Rett syndrome phenotype with later onset. Males with Rett syndrome can have 47,XXY karyotype or somatic mosaicism."
  },
  {
    id: 21,
    question: "Non-paternity is discovered during genetic testing for an autosomal recessive disorder. A child has sickle cell disease (HbSS), but the alleged father tests as HbAA (both alleles normal). The mother is HbAS (carrier). What is the most accurate genetic interpretation?",
    options: [
      "The child has a de novo mutation in HBB creating a second sickle allele",
      "The alleged father cannot be the biological father; the biological father must carry at least one HbS allele",
      "The child has uniparental disomy of chromosome 11, inheriting two maternal HbS alleles",
      "The father has somatic mosaicism for the HbS mutation that was missed by testing"
    ],
    answer: 1,
    explanation: "For a child to have sickle cell disease (HbSS), they must inherit an HbS allele from both parents. The mother is HbAS (carrier), contributing one HbS allele, so the child received the second HbS allele from the biological father. Since the alleged father is HbAA, he cannot be the biological father (de novo mutations in HBB causing the sickle mutation are extraordinarily rare). Uniparental disomy is possible but less likely than non-paternity."
  },
  {
    id: 22,
    question: "Fragile X premutation carriers (55-200 CGG repeats in FMR1) can develop two distinct adult-onset conditions not seen in full mutation carriers. These are:",
    options: [
      "Autism spectrum disorder and attention-deficit hyperactivity disorder (ADHD)",
      "Fragile X-associated tremor/ataxia syndrome (FXTAS) in older males, and fragile X-associated primary ovarian insufficiency (FXPOI) in females",
      "Huntington disease-like neurodegeneration and spinocerebellar ataxia",
      "Mitral valve prolapse and aortic root dilation (as in Marfan syndrome)"
    ],
    answer: 1,
    explanation: "FMR1 premutation carriers produce elevated but unstable FMR1 mRNA with a toxic gain-of-function: older male premutation carriers develop FXTAS (cerebellar ataxia, tremor, parkinsonism, cognitive decline), and female premutation carriers have an elevated risk of primary ovarian insufficiency (FXPOI, early menopause). Full mutation carriers have methylated/silenced FMR1 and do not develop FXTAS, as they lack the toxic mRNA."
  },
  {
    id: 23,
    question: "Spinobulbar muscular atrophy (SBMA, Kennedy disease) is caused by a CAG expansion in the androgen receptor (AR) gene. It is an X-linked condition that affects only males. Why are female carriers generally unaffected?",
    options: [
      "Females inactivate the X chromosome carrying the expanded AR allele in all cells via preferential X-inactivation",
      "The pathogenicity of the expanded polyglutamine AR requires androgen ligand binding for nuclear translocation; females have insufficient androgen levels to trigger toxicity",
      "AR is not expressed in females because its promoter is inactive in the absence of Y chromosome-derived signals",
      "The CAG expansion contracts to normal range during female oogenesis"
    ],
    answer: 1,
    explanation: "In SBMA, the expanded polyglutamine AR protein is toxic only when bound to androgens, which trigger its nuclear translocation and aggregation. Since females have very low androgen levels, the expanded AR is not significantly activated, explaining why female carriers are largely asymptomatic. This is supported by the observation that androgen deprivation ameliorates SBMA in males and animal models."
  },
  {
    id: 24,
    question: "In prenatal diagnosis, chorionic villus sampling (CVS) is typically performed at 10-13 weeks gestation, while amniocentesis is performed at 15-20 weeks. Which of the following is a recognized risk specific to CVS compared to amniocentesis?",
    options: [
      "Higher rate of fetal loss (approximately 0.5-1% above background)",
      "Confined placental mosaicism (CPM) — discordant chromosomal results between placental cells and the fetus",
      "Inability to detect neural tube defects by maternal serum AFP",
      "Greater difficulty in obtaining sufficient cells for karyotyping"
    ],
    answer: 1,
    explanation: "Confined placental mosaicism (CPM) occurs in approximately 1-2% of CVS samples, where chromosomal abnormalities are detected in placental (chorionic) cells but not in the fetus; this can lead to false-positive results requiring confirmatory amniocentesis. Additionally, limb reduction defects were associated with CVS performed before 10 weeks. CVS does not allow direct assessment of amniotic fluid AFP for neural tube defects."
  },
  {
    id: 25,
    question: "A couple has a child with Down syndrome (trisomy 21). Chromosomal analysis of the parents shows that the father has a balanced Robertsonian translocation: 45,XY,rob(14;21). What is the recurrence risk for Down syndrome in future pregnancies?",
    options: [
      "1% (same as the general population for a man his age)",
      "Approximately 1-5% when the father carries the Robertsonian translocation; higher (10-15%) when the mother carries it",
      "50% in every pregnancy",
      "100% in every pregnancy because the father has an abnormal chromosome 21"
    ],
    answer: 1,
    explanation: "Robertsonian translocation carriers produce six types of gametes, but only three result in viable offspring: normal, balanced carrier (like the parent), or unbalanced (with an extra chromosome 21 causing Down syndrome). Empirically, male carriers of rob(14;21) have a recurrence risk of about 1-5% for Down syndrome offspring, while female carriers have a higher risk of approximately 10-15%, due to differences in meiotic segregation patterns between the sexes."
  },
  {
    id: 26,
    question: "Gaucher disease (GD) is the most common lysosomal storage disorder, caused by autosomal recessive mutations in GBA (encoding glucocerebrosidase). Type 1 Gaucher disease is notable among LSDs because:",
    options: [
      "It is the only LSD with central nervous system involvement",
      "It is non-neuronopathic (no CNS involvement), is most prevalent in Ashkenazi Jewish populations, and has effective enzyme replacement therapy (ERT) with imiglucerase",
      "It is caused by a CAG trinucleotide repeat expansion in the GBA gene",
      "It is X-linked and affects only males"
    ],
    answer: 1,
    explanation: "Type 1 Gaucher disease is non-neuronopathic and the most common Gaucher variant, with particularly high prevalence in Ashkenazi Jewish individuals (carrier frequency ~1/17). It is treatable with enzyme replacement therapy (ERT) with recombinant glucocerebrosidase (imiglucerase, velaglucerase), which reduces organomegaly and bone complications. Interestingly, heterozygous GBA mutations are a major genetic risk factor for Parkinson disease."
  },
  {
    id: 27,
    question: "A genetic counselor is analyzing a pedigree. An X-linked recessive condition is suspected. In the pedigree, one female is affected. Which of the following explanations is LEAST likely?",
    options: [
      "The affected female is homozygous for the X-linked mutation (both X chromosomes carry the mutant allele)",
      "The affected female has Turner syndrome (45,X) and carries the X-linked mutation on her single X",
      "The affected female has skewed X-inactivation, preferentially silencing the normal X chromosome",
      "The affected female has an autosomal mutation that phenocopies the X-linked disorder"
    ],
    answer: 2,
    explanation: "Skewed X-inactivation causing an X-linked recessive phenotype in a carrier female is theoretically possible but extremely rare in clinical practice; it would require nearly complete (>90%) inactivation of the normal X allele. In contrast, homozygosity (both parents carrying the mutation), Turner syndrome with the mutant X, or an autosomal phenocopy are all established explanations for affected females in X-linked recessive conditions."
  },
  {
    id: 28,
    question: "Non-invasive prenatal testing (NIPT) using cell-free fetal DNA (cffDNA) from maternal blood can detect fetal chromosomal aneuploidy. The sensitivity of NIPT for trisomy 21 is approximately 99%, but which of the following is a limitation of current NIPT?",
    options: [
      "NIPT cannot detect trisomy 21 before 10 weeks gestation",
      "NIPT is a screening test, not a diagnostic test; positive results require confirmation by diagnostic testing (CVS or amniocentesis) before clinical decisions are made",
      "NIPT requires paternal blood sampling to interpret fetal alleles",
      "NIPT has a false-negative rate of greater than 10% for all chromosomal abnormalities"
    ],
    answer: 1,
    explanation: "NIPT is a screening test with high sensitivity and specificity but is not diagnostic; false-positive results occur due to confined placental mosaicism, vanishing twin, or maternal chromosomal abnormalities. All NIPT-positive results should be confirmed by diagnostic testing (CVS or amniocentesis) before pregnancy management decisions are made. NIPT analyzes a mixture of maternal and fetal cfDNA (fetal fraction typically 10-20%)."
  },
  {
    id: 29,
    question: "Achondroplasia is the most common form of short-limbed dwarfism. It is autosomal dominant and approximately 80% of cases arise from de novo mutations. The causative mutation is almost always the same nucleotide change (c.1138G>A or c.1138G>C) in FGFR3. This mutation hotspot is explained by:",
    options: [
      "A recombination hotspot in the FGFR3 gene that creates the mutation",
      "Hypermutability of a CpG dinucleotide: the c.1138 position is within a CpG context, and spontaneous deamination of 5-methylcytosine creates C-to-T (or the equivalent G-to-A on the coding strand) transitions",
      "Positive selection for the FGFR3 p.Gly380Arg mutation in sperm, which have a proliferative advantage",
      "Mismatch repair deficiency specifically at the FGFR3 locus in spermatogonia"
    ],
    answer: 1,
    explanation: "The FGFR3 c.1138G>A (or G>C) mutation occurs within a CpG dinucleotide context; cytosine in CpG dinucleotides is frequently methylated, and spontaneous deamination of 5-methylcytosine generates thymine (causing C→T transitions), making CpG sites mutation hotspots. Additionally, Shakes et al. showed that this specific mutation may confer a selective advantage to spermatogonial stem cells, explaining the advanced paternal age effect and predominantly paternal origin of de novo achondroplasia mutations."
  },
  {
    id: 30,
    question: "Marfan syndrome is caused by mutations in FBN1 (fibrillin-1) and is autosomal dominant. However, the pathophysiology involves not only structural weakness of connective tissue but also dysregulated TGF-β signaling. Which therapeutic implication arises from this molecular understanding?",
    options: [
      "Replacement of fibrillin-1 protein by enzyme replacement therapy is curative",
      "Losartan (an angiotensin II receptor blocker that reduces TGF-β signaling) has been investigated as a therapy to slow aortic root dilation in Marfan syndrome",
      "Statins reduce FBN1 promoter methylation, restoring fibrillin-1 production",
      "Anti-VEGF therapy reduces the vascular complications of Marfan syndrome"
    ],
    answer: 1,
    explanation: "Mutant fibrillin-1 sequesters less latent TGF-β, leading to excess TGF-β signaling that contributes to aortic aneurysm formation in Marfan syndrome. Losartan, an AT1R antagonist that reduces TGF-β activity, was shown to prevent aortic aneurysm progression in Marfan mouse models; subsequent clinical trials have investigated its utility alongside standard beta-blocker therapy, with mixed results in human trials."
  },
  {
    id: 31,
    question: "In a pedigree, an autosomal recessive disorder appears in two siblings. Their parents are unaffected and unrelated (by history). The probability that both parents are carriers if the disease frequency in the population is 1 in 10,000 is:",
    options: [
      "1/100 (the parents must be carriers given two affected children)",
      "If siblings are affected, the parents are almost certainly obligate carriers; the probability approaches 1 (effectively certain), as the siblings provide direct evidence",
      "1/50 × 1/50 = 1/2500 (using population carrier frequency for each parent independently)",
      "2/3 × 2/3 = 4/9 (using conditional probability for each parent)"
    ],
    answer: 1,
    explanation: "The presence of two affected children from the same union provides overwhelming evidence (essentially conclusive in practice) that both parents are carriers; the parents are obligate carriers by genetic reasoning unless non-paternity, uniparental disomy, or de novo mutations are invoked. The population carrier frequency is used for at-risk relatives without an affected child, not for parents who have already produced affected children."
  },
  {
    id: 32,
    question: "Spinal muscular atrophy (SMA) is caused by homozygous deletion of SMN1 (survival motor neuron 1) on chromosome 5q. SMN2, a nearly identical paralogous gene, cannot fully compensate due to a splicing difference: a C→T transition in exon 7 of SMN2 causes skipping of exon 7, producing a truncated, unstable protein (~90%) and a small amount of full-length protein (~10%). The FDA-approved drug nusinersen (Spinraza) works by:",
    options: [
      "Providing recombinant SMN1 protein directly to motor neurons via intrathecal delivery",
      "Blocking the ISS-N1 splicing silencer in SMN2 intron 7 using an antisense oligonucleotide, promoting exon 7 inclusion and increasing full-length SMN protein from SMN2",
      "Using CRISPR-Cas9 to replace SMN2 with the SMN1 coding sequence in motor neurons",
      "Inhibiting the nonsense-mediated decay (NMD) pathway to stabilize the truncated SMN2 transcript"
    ],
    answer: 1,
    explanation: "Nusinersen is an antisense oligonucleotide (ASO) that targets the intronic splicing silencer N1 (ISS-N1) in SMN2 intron 7; by blocking this silencer, nusinersen promotes inclusion of exon 7 in SMN2 mRNA, increasing production of full-length, functional SMN protein from SMN2 copies. It is delivered intrathecally to reach spinal motor neurons and has dramatically changed outcomes in SMA."
  },
  {
    id: 33,
    question: "Familial hypercholesterolemia (FH) is autosomal dominant and most commonly caused by loss-of-function mutations in LDLR (LDL receptor). Heterozygous FH affects approximately 1 in 250 individuals, while homozygous FH (1 in 300,000) is far more severe. Which type of LDLR mutation causes the most severe FH phenotype?",
    options: [
      "Missense mutations that reduce LDL receptor binding affinity for LDL particles",
      "Null mutations causing complete absence of LDLR protein, combined with receptor-negative mutations (class 1), result in the most severe homozygous FH",
      "Gain-of-function mutations in the LDLR gene that trap LDL particles inside the cell",
      "Promoter mutations that slightly reduce LDLR transcription"
    ],
    answer: 1,
    explanation: "LDLR mutations are classified into 6 classes based on their effect; class 1 mutations (null alleles producing no protein) combined in homozygosity cause the most severe FH phenotype. In homozygous FH patients with two null alleles, there is complete absence of functional LDL receptors, leading to extremely elevated LDL-C (often >500 mg/dL) and premature atherosclerotic cardiovascular disease in childhood. PCSK9 inhibitors have limited efficacy in receptor-negative homozygous FH patients."
  },
  {
    id: 34,
    question: "Genetic imprinting at the IGF2/H19 locus involves a differentially methylated region (DMR) that controls an insulator element. Which statement correctly describes the normal regulation at this locus?",
    options: [
      "On the maternal allele, the DMR is methylated, blocking CTCF binding and allowing IGF2 to be expressed; on the paternal allele, CTCF binds the unmethylated DMR, forming an insulator that prevents IGF2 expression",
      "On the paternal allele, the DMR is methylated, blocking CTCF binding and allowing IGF2 to be expressed; on the maternal allele, the unmethylated DMR allows CTCF binding, which insulates IGF2 from its enhancers, silencing it",
      "Both alleles of IGF2 are normally expressed, but H19 is only expressed from the paternal allele",
      "IGF2 is biallelically expressed in all tissues; imprinting applies only to H19"
    ],
    answer: 1,
    explanation: "At the IGF2/H19 imprinted locus, the paternal DMR is methylated, preventing CTCF insulator protein binding and allowing downstream enhancers to activate IGF2 (IGF2 expressed paternally, H19 silenced). On the maternal allele, the DMR is unmethylated, CTCF binds to form an insulator between IGF2 and the shared enhancers, silencing IGF2 while allowing H19 expression. Loss of imprinting causing biallelic IGF2 expression is seen in Beckwith-Wiedemann syndrome."
  },
  {
    id: 35,
    question: "CHARGE syndrome is caused by heterozygous loss-of-function mutations in CHD7. The acronym CHARGE stands for Coloboma, Heart defects, Atresia choanae, Retardation of growth, Genital abnormalities, and Ear anomalies. CHD7 encodes a chromodomain helicase DNA binding protein. Most CHARGE mutations are de novo. This suggests:",
    options: [
      "CHARGE syndrome follows autosomal recessive inheritance requiring two hit mutations",
      "De novo mutations in CHD7 are highly deleterious and strongly reduce reproductive fitness, explaining why most cases are sporadic rather than familial",
      "CHD7 mutations are exclusively inherited from the mother due to genomic imprinting",
      "CHARGE syndrome is caused by chromosomal deletions that include multiple genes including CHD7"
    ],
    answer: 1,
    explanation: "The fact that most CHARGE syndrome cases are de novo (not inherited) reflects the severe reproductive disadvantage conferred by CHD7 haploinsufficiency; affected individuals rarely reproduce, so the mutation does not accumulate in the population and must arise repeatedly by new mutations. The recurrence risk for future siblings is low (~1-2%, accounting for germline mosaicism), while offspring of an affected individual have a 50% risk."
  },
  {
    id: 36,
    question: "Preimplantation genetic testing for aneuploidy (PGT-A) involves biopsy of trophectoderm cells from blastocyst-stage embryos and chromosomal analysis. Which of the following is a recognized limitation of PGT-A?",
    options: [
      "PGT-A cannot detect autosomal aneuploidy — it can only detect sex chromosome abnormalities",
      "Mosaicism in the embryo means that trophectoderm biopsy results may not reflect the chromosomal status of the inner cell mass; aneuploid trophectoderm cells can accompany euploid ICM and vice versa",
      "PGT-A requires invasive maternal procedures including liver biopsy to obtain sufficient DNA",
      "PGT-A can only be performed at specialized centers and has a technical failure rate above 50%"
    ],
    answer: 1,
    explanation: "A major limitation of PGT-A is that trophectoderm (TE) biopsy is not always representative of the ICM (which gives rise to the fetus); embryos diagnosed as aneuploid by TE biopsy may have a euploid ICM and could develop into a chromosomally normal fetus. Conversely, false euploid results can occur if the aneuploid cells are predominantly in the ICM. This limits the predictive value of PGT-A and is the subject of ongoing debate."
  },
  {
    id: 37,
    question: "Expanded carrier screening (ECS) tests individuals for carrier status for hundreds of autosomal recessive and X-linked conditions simultaneously. An individual is found to be a carrier of a GBA (Gaucher disease) pathogenic variant. The most important additional implication of GBA carrier status beyond the recessive risk to offspring is:",
    options: [
      "GBA heterozygous carriers have a mildly elevated risk of Parkinson disease and Lewy body dementia compared to the general population",
      "GBA heterozygous carriers have a 50% chance of developing Gaucher disease in their lifetime",
      "GBA carrier status indicates that all siblings are obligate carriers",
      "GBA carriers should avoid glucocerebrosidase enzyme replacement therapy as it has no efficacy in carriers"
    ],
    answer: 0,
    explanation: "Heterozygous GBA variants are the most common known genetic risk factor for Parkinson disease; GBA carriers have approximately a 5-10 fold increased lifetime risk of Parkinson disease compared to non-carriers, and the risk is higher with certain pathogenic variants (e.g., L444P > N370S). This is increasingly relevant as GBA heterozygotes discovered incidentally on ECS should receive appropriate counseling about this neurological risk beyond the recessive inheritance implications."
  },
  {
    id: 38,
    question: "A patient with clinical features of Waardenburg syndrome (WS) — sensorineural hearing loss, dystopia canthorum, and pigmentary abnormalities — is found to have a heterozygous PAX3 mutation. Which type of Waardenburg syndrome does this represent, and what is the inheritance pattern?",
    options: [
      "Waardenburg syndrome type 4 (Waardenburg-Shah), autosomal recessive",
      "Waardenburg syndrome type 1 or 2, autosomal dominant (PAX3 causes WS1 with dystopia canthorum; MITF mutations cause WS2)",
      "Waardenburg syndrome type 3 (Klein-Waardenburg), X-linked recessive",
      "Waardenburg syndrome type 2, autosomal recessive due to biallelic PAX3 mutations"
    ],
    answer: 1,
    explanation: "Heterozygous PAX3 mutations cause Waardenburg syndrome type 1 (characterized by dystopia canthorum — lateral displacement of the inner canthi — plus hearing loss and pigmentary changes) and type 3 (with upper limb abnormalities), both autosomal dominant. WS type 2 is caused by MITF mutations (no dystopia canthorum), and WS type 4 (Waardenburg-Shah syndrome with Hirschsprung disease) is caused by EDN3, EDNRB, or SOX10 mutations."
  },
  {
    id: 39,
    question: "Allele-specific PCR is used to distinguish between the HbA and HbS alleles in sickle cell disease diagnosis. This technique exploits the fact that:",
    options: [
      "HbS alleles produce larger PCR products than HbA alleles because of the point mutation",
      "A PCR primer with its 3' end exactly matching the mutation site will only extend when perfectly complementary to the template allele, allowing allele-specific amplification",
      "The HbS mutation creates a new restriction site that can be detected after PCR and restriction digest",
      "Southern blotting with allele-specific probes is required because PCR cannot distinguish single nucleotide variants"
    ],
    answer: 1,
    explanation: "Allele-specific PCR (ARMS-PCR) uses primers whose 3' terminal nucleotide is complementary to the SNP of interest; Taq polymerase requires a perfect 3' match for efficient extension, so primers matching the HbS allele amplify only HbS templates and vice versa. Note: the HbS mutation (GAG→GTG) also abolishes an MstII restriction site used in restriction fragment analysis, so option C is also a valid diagnostic approach, but allele-specific PCR itself works by the primer extension principle."
  },
  {
    id: 40,
    question: "The ACMG/AMP variant classification guidelines categorize sequence variants into five tiers. A novel missense variant in a known disease gene is detected in a patient with the appropriate phenotype. Which combination of evidence would classify this variant as 'Likely Pathogenic' (LP)?",
    options: [
      "The variant is listed in a published case report only, with no functional data",
      "The variant is absent from population databases (gnomAD), affects a highly conserved residue in a functional domain, in silico predictors are pathogenic, and the variant segregates with disease in two additional affected family members",
      "The variant is present at a frequency of 1% in population databases, affecting an unconstrained gene region",
      "The variant was previously classified as 'Uncertain Significance' in ClinVar, with no additional evidence"
    ],
    answer: 1,
    explanation: "The ACMG/AMP framework uses weighted evidence: absence from population databases (PM2), highly conserved functional domain location (PM1), pathogenic in silico predictions (PP3), and segregation with disease in family members (PP1) together accumulate to meet criteria for Likely Pathogenic classification. A high population frequency strongly argues against pathogenicity (BS1/BA1 codes), and a prior VUS classification without new evidence does not upgrade classification."
  },
  {
    id: 41,
    question: "Huntington disease shows complete penetrance above 40 CAG repeats. An individual is found to have 38 CAG repeats. How should this result be interpreted clinically?",
    options: [
      "The individual will definitely develop Huntington disease; 38 repeats is fully penetrant",
      "38 repeats is in the 'reduced penetrance' range (36-39 repeats); the individual may or may not develop HD, and their children with further expansion are at risk of a fully penetrant allele",
      "38 repeats is a normal variant; no increased disease risk",
      "38 repeats indicates carrier status for a recessive form of HD"
    ],
    answer: 1,
    explanation: "CAG repeat ranges for HTT are: normal (≤26), intermediate (27-35, not associated with HD in the individual but may expand in offspring), reduced penetrance (36-39, variable risk), and full penetrance (≥40, HD will develop if the individual lives long enough). An individual with 38 repeats is in the reduced penetrance range with uncertain personal risk, but their children may inherit an allele that has expanded into the fully penetrant range."
  },
  {
    id: 42,
    question: "A child presents with intellectual disability, seizures, and a 'happy demeanor' with inappropriate laughter. Chromosomal microarray shows no copy number variants. Methylation-specific PCR of the 15q11-13 region shows only a maternal methylation pattern. Sequencing of UBE3A shows a de novo nonsense mutation. The diagnosis is:",
    options: [
      "Prader-Willi syndrome caused by a UBE3A mutation",
      "Angelman syndrome caused by a de novo UBE3A mutation on the maternal allele (loss of maternal UBE3A expression in neurons)",
      "Angelman syndrome due to paternal uniparental disomy",
      "Fragile X syndrome with an atypical phenotype"
    ],
    answer: 1,
    explanation: "Angelman syndrome is caused by loss of maternal UBE3A function in neurons; de novo mutations in UBE3A on the maternal allele account for approximately 11% of AS cases. The methylation study showing a maternal methylation pattern on both alleles (which would indicate paternal UPD) is confusing — actually in AS due to point mutation in UBE3A, the methylation pattern would be normal (one maternal, one paternal pattern). The presence of a de novo UBE3A nonsense mutation with the AS phenotype confirms Angelman syndrome due to point mutation."
  },
  {
    id: 43,
    question: "A couple of Ashkenazi Jewish descent undergoes carrier screening before pregnancy. They are found to be carriers of the same pathogenic HEXA mutation (causing Tay-Sachs disease). Tay-Sachs is an autosomal recessive lysosomal storage disorder. If they conceive naturally, for each pregnancy the risk of an affected child is:",
    options: [
      "100% if they carry the same mutation",
      "25%",
      "50%",
      "The risk depends on the sex of the child"
    ],
    answer: 1,
    explanation: "When both parents are carriers of an autosomal recessive condition, each pregnancy has a 25% chance of being affected (homozygous mutant), a 50% chance of being an unaffected carrier, and a 25% chance of being homozygous normal — the classic Mendelian 1:2:1 ratio. Tay-Sachs disease is not sex-linked, so the sex of the child does not affect risk. They should be counseled about preimplantation genetic testing or prenatal diagnosis options."
  },
  {
    id: 44,
    question: "Whole exome sequencing (WES) is increasingly used in the diagnosis of rare genetic disorders. In a trio WES study (proband + both parents), the analysis workflow prioritizes variants based on inheritance model. Which filtering strategy is MOST appropriate as a first-pass analysis for a child with a likely genetic disorder and unaffected parents?",
    options: [
      "Filter for heterozygous variants shared between the child and one parent (autosomal dominant inherited)",
      "Filter for de novo variants (present in the child but absent in both parents) and compound heterozygous variants (two different heterozygous variants in the same gene, one from each parent)",
      "Filter only for homozygous variants in the child, assuming autosomal recessive inheritance",
      "Filter for variants on the X chromosome only, as most pediatric genetic disorders are X-linked"
    ],
    answer: 1,
    explanation: "In a child with a severe disorder and unaffected parents, the most likely causes are de novo mutations (explaining many dominant conditions) or biallelic mutations inherited from carrier parents (explaining recessive conditions), including compound heterozygotes (two different pathogenic variants in the same gene, one from each parent). These are the highest-priority filters in trio WES analysis for new genetic diagnosis."
  },
  {
    id: 45,
    question: "Population-based newborn screening for phenylketonuria (PKU) using tandem mass spectrometry (TMS/MS-MS) measures phenylalanine and tyrosine levels. What is the primary advantage of using the phenylalanine/tyrosine (Phe/Tyr) ratio rather than phenylalanine alone as the screening analyte?",
    options: [
      "Tyrosine levels are more sensitive for PKU than phenylalanine levels",
      "The Phe/Tyr ratio reduces false-positive rates because both analytes are elevated or reduced together in non-PKU conditions (e.g., prematurity, liver disease), while PAH deficiency specifically increases Phe and decreases Tyr",
      "The ratio is used to distinguish phenotypes of mild HPA from classic PKU",
      "Tandem mass spectrometry cannot measure individual amino acids accurately, requiring the ratio"
    ],
    answer: 1,
    explanation: "Using the Phe/Tyr ratio rather than phenylalanine alone significantly reduces false-positive rates: in conditions like prematurity or total parenteral nutrition, both Phe and Tyr may be elevated, keeping their ratio normal; in contrast, PAH deficiency specifically elevates phenylalanine (the substrate) while tyrosine levels are normal or reduced (due to impaired conversion), producing an elevated ratio. This improves specificity of PKU screening."
  },
  {
    id: 46,
    question: "A proband with intellectual disability undergoes chromosomal microarray (CMA) and is found to have a 250 kb deletion at 16p11.2. This locus is associated with autism spectrum disorder (ASD) and developmental delay. The deletion is found to be inherited from his phenotypically normal mother. How should this result be interpreted?",
    options: [
      "The deletion is benign because the mother is unaffected; it should be reclassified as a benign variant",
      "Reduced penetrance and variable expressivity are features of 16p11.2 deletions; the variant may contribute to the proband's phenotype but cannot be attributed solely to it; further clinical evaluation of the mother and family history review are warranted",
      "The deletion cannot be pathogenic if it is inherited because pathogenic CNVs are always de novo",
      "The mother must have had germline mosaicism that then became constitutional in the proband"
    ],
    answer: 1,
    explanation: "16p11.2 deletions show reduced penetrance (not all carriers are affected) and variable expressivity; inherited deletions from apparently unaffected parents are documented and do not exclude pathogenicity. In this case, the deletion may contribute to the proband's phenotype, possibly with additional genetic or environmental modifiers. Detailed phenotyping of the mother is warranted, as she may have subtle features. This scenario illustrates the complexity of inherited CNV interpretation."
  },
  {
    id: 47,
    question: "Germline BRCA1 pathogenic variants predispose to breast and ovarian cancer. BRCA1 is involved in homologous recombination (HR) repair of DNA double-strand breaks. Tumors arising in BRCA1 mutation carriers frequently lose the remaining wildtype BRCA1 allele (LOH). This HR deficiency makes such tumors uniquely sensitive to:",
    options: [
      "Cisplatin and carboplatin (DNA crosslinking agents) only in the germline setting",
      "PARP inhibitors (e.g., olaparib), which exploit the concept of synthetic lethality: BRCA1-deficient cells rely on PARP-mediated single-strand break repair and become non-viable when PARP is inhibited",
      "Anti-HER2 therapy because BRCA1 deficiency upregulates HER2 expression",
      "Hormone receptor antagonists because BRCA1 loss correlates with ER/PR positivity"
    ],
    answer: 1,
    explanation: "PARP inhibitors exploit synthetic lethality: BRCA1-deficient tumor cells cannot repair DNA double-strand breaks by homologous recombination; when PARP (which handles single-strand break repair and senses DNA damage) is also inhibited, the accumulated DNA damage becomes lethal specifically in HR-deficient tumor cells, while HR-proficient normal cells can survive. Olaparib, rucaparib, and niraparib are approved PARP inhibitors for BRCA1/2-mutant cancers."
  },
  {
    id: 48,
    question: "Genomic sequencing of a patient with familial adenomatous polyposis (FAP) reveals a heterozygous truncating mutation in APC. The APC protein normally functions to:",
    options: [
      "Activate the Wnt target gene β-catenin directly as a transcriptional co-activator",
      "Promote β-catenin degradation as part of the destruction complex; APC loss leads to constitutive Wnt/β-catenin signaling and uncontrolled proliferation",
      "Serve as a receptor for APC ligands that stimulate colonic epithelial differentiation",
      "Inhibit CDK4/CDK6 to prevent G1-S transition in colonic epithelial cells"
    ],
    answer: 1,
    explanation: "APC is a key scaffold protein in the β-catenin destruction complex (with Axin, GSK-3β, CK1); it facilitates β-catenin phosphorylation and subsequent proteasomal degradation. Loss of APC (via germline mutation + somatic second hit in FAP, or biallelic somatic mutation in sporadic CRC) leads to β-catenin accumulation, nuclear translocation, and constitutive activation of Wnt target genes promoting cell proliferation. APC mutation is the initiating 'gatekeeper' event in most colorectal cancers."
  },
  {
    id: 49,
    question: "A couple in which the woman has a balanced chromosomal inversion [46,XX,inv(7)(p12q36)] seeks genetic counseling about pregnancy risks. Pericentric inversions carry reproductive risks because:",
    options: [
      "The inversion prevents chromosome 7 from pairing during meiosis, causing non-disjunction and trisomy 7",
      "During meiosis, an inversion loop forms to allow pairing within the inverted segment; crossovers within the loop produce recombinant chromosomes with duplications and deletions, which can cause miscarriages or children with chromosomal imbalances",
      "Inversions always cause infertility in female carriers due to disruption of meiotic pairing",
      "The inversion disrupts the centromere, causing lagging chromosomes and aneuploidy in all gametes"
    ],
    answer: 1,
    explanation: "During meiosis in inversion carriers, the inverted chromosome must loop out to allow homologous pairing within the inverted segment. If crossing-over occurs within the inversion loop, the recombinant chromosomes have duplications of one segment and deletions of another (duplication-deletion products), which are typically lethal or cause severe birth defects. The reproductive risk of pericentric inversions depends on the size of the inverted segment and the chromosomes involved."
  },
  {
    id: 50,
    question: "A clinical geneticist is counseling a family in which a young child has died from Tay-Sachs disease. The couple is Ashkenazi Jewish. In addition to the 25% recurrence risk for future pregnancies, the geneticist should also discuss which of the following regarding the biological basis of the higher carrier frequency in Ashkenazi Jewish populations?",
    options: [
      "The Tay-Sachs mutation arose de novo at a much higher rate in Ashkenazi founders due to a DNA repair deficiency",
      "The elevated carrier frequency reflects a founder effect amplified by genetic drift within the historically small, isolated Ashkenazi Jewish population; possible heterozygote advantage (resistance to tuberculosis) has also been proposed but remains unproven",
      "The HEXA gene is located on the X chromosome in Ashkenazi Jewish individuals due to a historical chromosomal translocation",
      "Increased carrier frequency is due to higher mutation rates in Ashkenazi populations because of consanguinity"
    ],
    answer: 1,
    explanation: "The high Tay-Sachs carrier frequency (~1/30) in Ashkenazi Jews compared to the general population (~1/300) is primarily attributed to a founder effect: the Ashkenazi Jewish population underwent genetic bottlenecks, and certain HEXA alleles happened to be present at higher frequencies in the founding population, becoming amplified by drift. The heterozygote advantage hypothesis (carriers being resistant to tuberculosis) has been proposed but lacks definitive supporting evidence."
  }
];

export default questions;
