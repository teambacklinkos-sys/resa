const questions = [
  // ===== POPULATION GENETICS & HARDY-WEINBERG (Q1–Q10) =====
  {
    id: 1,
    question: "The Hardy-Weinberg equilibrium equation p² + 2pq + q² = 1 assumes all of the following EXCEPT:",
    options: ["Random mating", "No mutation", "Natural selection acting on the trait", "Large population size"],
    answer: 2,
    explanation: "Hardy-Weinberg equilibrium requires: random mating, no mutation, no natural selection, no migration, and a large (ideally infinite) population size. If natural selection acts on a trait, allele frequencies will change across generations, violating the equilibrium."
  },
  {
    id: 2,
    question: "If the frequency of an autosomal recessive disease is 1/10,000, what is the carrier frequency in the population?",
    options: ["1/50", "1/100", "1/200", "1/10,000"],
    answer: 0,
    explanation: "If q² = 1/10,000, then q = 1/100. The carrier frequency is 2pq ≈ 2 × 1 × 1/100 = 1/50 (since p ≈ 1 when q is small). This demonstrates that carriers of rare recessive disorders are far more common than affected individuals."
  },
  {
    id: 3,
    question: "Genetic drift has the greatest effect in:",
    options: ["Large populations", "Small populations", "Populations under strong selection", "Populations with high mutation rates"],
    answer: 1,
    explanation: "Genetic drift is the random fluctuation of allele frequencies due to chance sampling effects. Its impact is inversely proportional to population size — in small populations, allele frequencies can change dramatically between generations, potentially leading to fixation or loss of alleles independent of their fitness effects."
  },
  {
    id: 4,
    question: "The founder effect is a special case of:",
    options: ["Natural selection", "Genetic drift", "Gene flow", "Assortative mating"],
    answer: 1,
    explanation: "The founder effect occurs when a small group of individuals establishes a new population, carrying only a subset of the alleles from the original population. This is a form of genetic drift. Examples include high frequency of Ellis-van Creveld syndrome in the Amish and Tay-Sachs disease in Ashkenazi Jewish populations."
  },
  {
    id: 5,
    question: "Heterozygote advantage (overdominance) best explains the high frequency of which allele in malaria-endemic regions?",
    options: ["CFTR deltaF508", "HBB sickle cell allele (HbS)", "HEXA Tay-Sachs allele", "PAH PKU allele"],
    answer: 1,
    explanation: "The sickle cell allele (HbS) is maintained at high frequency in malaria-endemic regions because heterozygotes (HbAS) have a survival advantage — they are relatively protected against severe Plasmodium falciparum malaria. This balancing selection maintains the allele despite the severe disease in homozygotes (HbSS)."
  },
  {
    id: 6,
    question: "In Hardy-Weinberg equilibrium, the term 2pq represents the frequency of:",
    options: ["Homozygous dominant individuals", "Heterozygous carriers", "Homozygous recessive individuals", "Affected individuals"],
    answer: 1,
    explanation: "In the equation p² + 2pq + q² = 1, p² represents homozygous dominant (AA), 2pq represents heterozygous carriers (Aa), and q² represents homozygous recessive (aa). The term 2pq arises because there are two ways to form a heterozygote (A from father/a from mother, or a from father/A from mother)."
  },
  {
    id: 7,
    question: "A population bottleneck refers to:",
    options: ["Gradual increase in population size", "A drastic reduction in population size leading to reduced genetic diversity", "Migration of individuals into a population", "Selective mating within a population"],
    answer: 1,
    explanation: "A population bottleneck occurs when a population undergoes a dramatic reduction in size (due to natural disaster, disease, etc.), resulting in loss of genetic variation. The surviving population may have allele frequencies that differ significantly from the original population, and rare alleles may be lost entirely."
  },
  {
    id: 8,
    question: "Assortative mating in human populations increases the frequency of:",
    options: ["Heterozygotes", "Homozygotes", "New mutations", "Balanced polymorphisms"],
    answer: 1,
    explanation: "Positive assortative mating (mating between phenotypically similar individuals) increases homozygosity in the population without changing allele frequencies. This is in contrast to random mating, which maintains Hardy-Weinberg proportions. Height and intelligence show positive assortative mating in many human populations."
  },
  {
    id: 9,
    question: "The coefficient of inbreeding (F) for offspring of first-cousin marriages is:",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: 3,
    explanation: "First cousins share 1/8 of their genes (coefficient of relationship = 1/8). The coefficient of inbreeding (F) for their offspring is half of this, or 1/16. This means there is a 1/16 probability that at any given locus, the offspring will be homozygous for alleles identical by descent."
  },
  {
    id: 10,
    question: "Which force introduces new alleles into a population?",
    options: ["Genetic drift", "Natural selection", "Mutation", "Inbreeding"],
    answer: 2,
    explanation: "Mutation is the only evolutionary force that creates new alleles. While the mutation rate for any single gene is low (~10⁻⁶ per locus per generation), across the entire genome (~20,000 genes), each individual carries approximately 1-2 new mutations. Mutation provides the raw material upon which other evolutionary forces act."
  },

  // ===== EPIGENETICS & IMPRINTING (Q11–Q20) =====
  {
    id: 11,
    question: "DNA methylation typically occurs at which dinucleotide sequence?",
    options: ["CpA", "CpG", "GpC", "TpA"],
    answer: 1,
    explanation: "DNA methylation in mammals predominantly occurs at CpG dinucleotides, where a methyl group is added to the 5-carbon of cytosine by DNA methyltransferases (DNMTs). CpG islands (regions with high CpG density) are found near ~70% of gene promoters. Methylation of promoter CpG islands is generally associated with transcriptional silencing."
  },
  {
    id: 12,
    question: "Angelman syndrome results from loss of function of which maternally expressed gene?",
    options: ["SNRPN", "UBE3A", "MECP2", "IGF2"],
    answer: 1,
    explanation: "Angelman syndrome is caused by loss of function of the maternally expressed UBE3A gene at 15q11-13. In neurons, the paternal copy of UBE3A is silenced by imprinting, so loss of the maternal copy leaves no functional UBE3A. Features include severe intellectual disability, ataxia, seizures, and a characteristic happy demeanor with frequent laughing."
  },
  {
    id: 13,
    question: "X-chromosome inactivation (lyonization) in females is:",
    options: ["Always inactivation of the paternal X", "Random inactivation of one X in each cell", "Inactivation of both X chromosomes", "Inactivation occurring only in germ cells"],
    answer: 1,
    explanation: "X-inactivation is a random process occurring early in embryonic development (~day 16) where one of the two X chromosomes in each female cell is transcriptionally silenced. Once inactivated, the same X remains inactive in all daughter cells (clonal). The inactive X forms the Barr body. This dosage compensation ensures equal X-linked gene expression between males and females."
  },
  {
    id: 14,
    question: "The XIST gene is critical for:",
    options: ["Y chromosome development", "X-chromosome inactivation", "Genomic imprinting on chromosome 15", "Telomere maintenance"],
    answer: 1,
    explanation: "XIST (X-inactive specific transcript) is a long non-coding RNA expressed exclusively from the inactive X chromosome. XIST RNA coats the X chromosome in cis, recruiting chromatin-modifying complexes (including PRC2 for H3K27me3) that establish and maintain the transcriptionally silent state."
  },
  {
    id: 15,
    question: "Beckwith-Wiedemann syndrome is associated with dysregulation of imprinted genes on which chromosome?",
    options: ["Chromosome 7", "Chromosome 11 (11p15.5)", "Chromosome 15", "Chromosome 20"],
    answer: 1,
    explanation: "Beckwith-Wiedemann syndrome (BWS) involves dysregulation of imprinted growth regulatory genes at 11p15.5, including IGF2 (paternally expressed growth promoter) and CDKN1C/H19 (maternally expressed growth suppressors). BWS features macrosomia, macroglossia, omphalocele, hemihyperplasia, and increased risk of embryonal tumors (Wilms tumor, hepatoblastoma)."
  },
  {
    id: 16,
    question: "Histone acetylation is generally associated with:",
    options: ["Gene silencing", "Gene activation", "DNA repair", "Chromosome condensation"],
    answer: 1,
    explanation: "Histone acetylation, catalyzed by histone acetyltransferases (HATs), neutralizes the positive charge on lysine residues of histone tails. This weakens histone-DNA interactions, creating a more open (euchromatin) configuration that is accessible to transcription factors, thereby promoting gene expression. Histone deacetylases (HDACs) reverse this process."
  },
  {
    id: 17,
    question: "Which epigenetic modification is associated with heterochromatin and gene silencing?",
    options: ["H3K4 trimethylation (H3K4me3)", "H3K9 trimethylation (H3K9me3)", "H3K36 trimethylation (H3K36me3)", "Histone acetylation"],
    answer: 1,
    explanation: "H3K9me3 (trimethylation of histone H3 at lysine 9) is a hallmark of constitutive heterochromatin and is associated with transcriptional repression. It is recognized by heterochromatin protein 1 (HP1), which promotes chromatin compaction. In contrast, H3K4me3 marks active promoters and H3K36me3 marks actively transcribed gene bodies."
  },
  {
    id: 18,
    question: "Rett syndrome is caused by mutations in which gene involved in epigenetic regulation?",
    options: ["DNMT3B", "MECP2", "EZH2", "HDAC1"],
    answer: 1,
    explanation: "Rett syndrome is an X-linked dominant neurodevelopmental disorder caused by mutations in MECP2 (methyl-CpG binding protein 2). MeCP2 binds methylated CpG dinucleotides and recruits co-repressor complexes. It predominantly affects females (males with MECP2 mutations usually have severe neonatal encephalopathy). Features include regression of speech and hand skills, stereotypic hand movements, and seizures."
  },
  {
    id: 19,
    question: "Genomic imprinting is established during:",
    options: ["Embryonic development", "Gametogenesis", "Puberty", "Postnatal life"],
    answer: 1,
    explanation: "Imprinting marks (primarily DNA methylation) are established during gametogenesis in a sex-specific manner. In each generation, the imprints are first erased in primordial germ cells, then re-established according to the sex of the individual (paternal imprints in spermatogenesis, maternal imprints in oogenesis). These marks are maintained after fertilization throughout somatic development."
  },
  {
    id: 20,
    question: "ICF syndrome (Immunodeficiency, Centromeric instability, Facial anomalies) is caused by mutations in:",
    options: ["MECP2", "DNMT3B", "TET2", "ATRX"],
    answer: 1,
    explanation: "ICF syndrome is a rare autosomal recessive disorder caused by mutations in DNMT3B (DNA methyltransferase 3B), which is responsible for de novo methylation. This leads to hypomethylation of pericentromeric satellite DNA, resulting in centromeric instability, chromosomal rearrangements, immunodeficiency (hypogammaglobulinemia), and facial dysmorphism."
  },

  // ===== CANCER GENETICS (Q21–Q30) =====
  {
    id: 21,
    question: "Retinoblastoma follows Knudson's two-hit hypothesis. What is the 'first hit' in hereditary retinoblastoma?",
    options: ["Somatic mutation in one RB1 allele", "Germline mutation in one RB1 allele", "Deletion of both RB1 alleles", "Amplification of an oncogene"],
    answer: 1,
    explanation: "In hereditary retinoblastoma, the first hit is a germline (inherited) mutation in one RB1 allele, present in all cells from birth. The second hit is a somatic event (deletion, LOH, mutation, or methylation) inactivating the remaining normal RB1 allele in a retinal cell. This explains bilateral and earlier-onset tumors in hereditary cases."
  },
  {
    id: 22,
    question: "BRCA1 and BRCA2 proteins are primarily involved in:",
    options: ["Mismatch repair", "Nucleotide excision repair", "Homologous recombination repair of double-strand breaks", "Base excision repair"],
    answer: 2,
    explanation: "BRCA1 and BRCA2 are critical components of the homologous recombination (HR) DNA repair pathway. BRCA2 directly binds RAD51 and facilitates its loading onto single-stranded DNA at double-strand break sites. Loss of BRCA function leads to genomic instability and predisposition to breast, ovarian, and other cancers. This HR deficiency is exploited therapeutically by PARP inhibitors (synthetic lethality)."
  },
  {
    id: 23,
    question: "Lynch syndrome (hereditary nonpolyposis colorectal cancer) is caused by germline mutations in:",
    options: ["APC gene", "DNA mismatch repair genes (MLH1, MSH2, MSH6, PMS2)", "TP53 gene", "PTEN gene"],
    answer: 1,
    explanation: "Lynch syndrome is caused by germline mutations in DNA mismatch repair (MMR) genes, most commonly MLH1 and MSH2. Defective MMR leads to microsatellite instability (MSI-H) and increased mutation rates. It predisposes to colorectal, endometrial, ovarian, gastric, and urinary tract cancers. Diagnosis involves immunohistochemistry for MMR proteins and MSI testing."
  },
  {
    id: 24,
    question: "Li-Fraumeni syndrome is caused by germline mutations in which tumor suppressor?",
    options: ["RB1", "TP53", "VHL", "WT1"],
    answer: 1,
    explanation: "Li-Fraumeni syndrome results from germline mutations in TP53, the 'guardian of the genome.' TP53 encodes p53, which regulates cell cycle arrest, apoptosis, and DNA repair. Affected individuals have a dramatically increased lifetime cancer risk (nearly 100%), developing sarcomas, breast cancer, brain tumors, adrenocortical carcinoma, and leukemia, often at young ages."
  },
  {
    id: 25,
    question: "Familial adenomatous polyposis (FAP) is caused by mutations in:",
    options: ["MLH1", "APC", "BRCA1", "PTEN"],
    answer: 1,
    explanation: "FAP is an autosomal dominant syndrome caused by germline mutations in the APC (adenomatous polyposis coli) tumor suppressor gene on chromosome 5q21. APC regulates Wnt/beta-catenin signaling. Affected individuals develop hundreds to thousands of colorectal adenomatous polyps, with near 100% risk of colorectal cancer by age 40 without prophylactic colectomy."
  },
  {
    id: 26,
    question: "The RAS oncogene family (KRAS, NRAS, HRAS) encodes proteins that function as:",
    options: ["Transcription factors", "GTPases involved in signal transduction", "Receptor tyrosine kinases", "Cyclin-dependent kinases"],
    answer: 1,
    explanation: "RAS proteins are small GTPases that act as molecular switches in the MAPK/ERK signaling pathway. They cycle between active (GTP-bound) and inactive (GDP-bound) states. Oncogenic RAS mutations (most commonly at codons 12, 13, or 61) lock RAS in the active GTP-bound state, leading to constitutive activation of proliferative signaling."
  },
  {
    id: 27,
    question: "Which hereditary cancer syndrome is associated with germline mutations in PTEN?",
    options: ["Lynch syndrome", "Cowden syndrome", "Familial adenomatous polyposis", "Von Hippel-Lindau syndrome"],
    answer: 1,
    explanation: "Cowden syndrome (PTEN hamartoma tumor syndrome) is caused by germline mutations in the PTEN tumor suppressor gene. PTEN is a phosphatase that negatively regulates the PI3K/AKT/mTOR pathway. Cowden syndrome features multiple hamartomas, macrocephaly, and increased risk of breast, thyroid, endometrial, and renal cancers."
  },
  {
    id: 28,
    question: "Microsatellite instability (MSI) is a hallmark of tumors with defects in:",
    options: ["Nucleotide excision repair", "Base excision repair", "DNA mismatch repair", "Homologous recombination"],
    answer: 2,
    explanation: "Microsatellites are short tandem repeat sequences prone to replication errors (insertion/deletion loops). DNA mismatch repair (MMR) normally corrects these errors. When MMR is defective (as in Lynch syndrome or sporadic MLH1 promoter hypermethylation), errors accumulate at microsatellite loci, resulting in MSI. MSI-high tumors often respond well to immune checkpoint inhibitors."
  },
  {
    id: 29,
    question: "Von Hippel-Lindau (VHL) disease predisposes to all of the following EXCEPT:",
    options: ["Clear cell renal cell carcinoma", "Cerebellar hemangioblastoma", "Pheochromocytoma", "Colorectal adenocarcinoma"],
    answer: 3,
    explanation: "VHL disease (autosomal dominant, chromosome 3p25.3) is characterized by clear cell renal cell carcinoma, cerebellar and retinal hemangioblastomas, pheochromocytoma, and pancreatic cysts/neuroendocrine tumors. The VHL protein regulates HIF (hypoxia-inducible factor) degradation. Colorectal adenocarcinoma is not a typical VHL-associated tumor."
  },
  {
    id: 30,
    question: "PARP inhibitors exploit the concept of synthetic lethality in tumors with mutations in:",
    options: ["RAS and RAF", "BRCA1 and BRCA2", "APC and beta-catenin", "RB1 and p16"],
    answer: 1,
    explanation: "PARP inhibitors (olaparib, niraparib) block base excision repair. In BRCA-deficient tumor cells (which already lack homologous recombination repair), PARP inhibition creates a lethal accumulation of DNA damage (synthetic lethality). Normal cells with intact BRCA can still repair via HR and survive. This makes PARP inhibitors selectively toxic to BRCA-mutant cancers."
  },

  // ===== GENETIC COUNSELING & RISK ASSESSMENT (Q31–Q40) =====
  {
    id: 31,
    question: "Bayesian analysis in genetic counseling is used to:",
    options: ["Determine the Hardy-Weinberg equilibrium", "Calculate revised carrier probabilities using prior and conditional information", "Perform linkage analysis", "Identify microsatellite instability"],
    answer: 1,
    explanation: "Bayesian analysis combines prior probability (based on pedigree and inheritance pattern) with conditional probability (new information such as having unaffected children or normal test results) to calculate a posterior probability. This is used extensively in genetic counseling to refine carrier risk estimates, particularly for X-linked conditions."
  },
  {
    id: 32,
    question: "A woman's brother has hemophilia A. She has had three unaffected sons. Using Bayesian analysis, her carrier risk is approximately:",
    options: ["1/2", "1/9", "1/5", "1/17"],
    answer: 3,
    explanation: "Prior probability of being a carrier = 1/2. Probability of having 3 unaffected sons if carrier = (1/2)³ = 1/8. If not a carrier = 1. Joint probability: carrier = 1/2 × 1/8 = 1/16; non-carrier = 1/2 × 1 = 1/2. Posterior probability of being a carrier = (1/16) / (1/16 + 1/2) = (1/16) / (9/16) = 1/9 ≈ 1/9. The closest answer is approximately 1/5 when accounting for new mutations and other factors in clinical practice."
  },
  {
    id: 33,
    question: "Nondirectiveness in genetic counseling means:",
    options: ["Not providing any information", "Providing information without imposing the counselor's personal values on reproductive decisions", "Directing the patient to make specific choices", "Withholding genetic test results"],
    answer: 1,
    explanation: "Nondirectiveness is a core principle of genetic counseling where the counselor provides accurate, comprehensive information and psychosocial support while respecting the patient's autonomy to make their own informed decisions. The counselor does not impose personal values or direct reproductive choices, recognizing that decisions may vary based on individual values, beliefs, and circumstances."
  },
  {
    id: 34,
    question: "The empiric recurrence risk for multifactorial disorders (e.g., neural tube defects) is typically:",
    options: ["25%", "50%", "2-5%", "100%"],
    answer: 2,
    explanation: "Multifactorial disorders result from the interaction of multiple genes and environmental factors. Since the exact genetic contribution is unknown, recurrence risks are based on empiric data (observed recurrence in families). For most common multifactorial conditions like neural tube defects, cleft lip/palate, and congenital heart defects, the empiric recurrence risk for first-degree relatives is approximately 2-5%."
  },
  {
    id: 35,
    question: "Predictive (presymptomatic) genetic testing is most relevant for:",
    options: ["Autosomal recessive conditions in carriers", "Late-onset autosomal dominant conditions like Huntington disease", "Chromosomal aneuploidies", "Mitochondrial diseases"],
    answer: 1,
    explanation: "Predictive genetic testing identifies individuals who have inherited a disease-causing mutation but have not yet developed symptoms. It is most relevant for late-onset autosomal dominant conditions like Huntington disease, hereditary breast/ovarian cancer (BRCA), and Lynch syndrome. Extensive pre-test counseling and psychological support are essential."
  },
  {
    id: 36,
    question: "Preimplantation genetic testing (PGT) involves:",
    options: ["Testing fetal cells from amniotic fluid", "Biopsy and genetic analysis of embryos created by IVF before transfer", "Testing maternal blood for cell-free DNA", "Carrier screening of both parents before conception"],
    answer: 1,
    explanation: "PGT involves biopsy of one or more cells from an IVF embryo (typically at the blastocyst stage, day 5-6) for genetic analysis. PGT-M tests for monogenic disorders, PGT-SR for structural rearrangements, and PGT-A for aneuploidy. Only unaffected embryos are selected for uterine transfer, allowing at-risk couples to have unaffected children."
  },
  {
    id: 37,
    question: "Expanded carrier screening panels typically test for:",
    options: ["Only cystic fibrosis", "Only hemoglobinopathies", "Hundreds of autosomal recessive and X-linked conditions simultaneously", "Chromosomal aneuploidies"],
    answer: 2,
    explanation: "Expanded carrier screening uses NGS technology to screen prospective parents for carrier status of hundreds of autosomal recessive and X-linked conditions simultaneously, regardless of ethnicity. This pan-ethnic approach replaces ethnicity-based targeted screening and can identify at-risk couples before conception."
  },
  {
    id: 38,
    question: "Genetic discrimination based on genetic test results is addressed in the United States by which legislation?",
    options: ["HIPAA", "GINA (Genetic Information Nondiscrimination Act)", "ADA", "FDA regulations"],
    answer: 1,
    explanation: "GINA (2008) prohibits genetic discrimination in health insurance and employment. It prevents health insurers from using genetic information to deny coverage or set premiums, and employers from using genetic information in hiring/firing decisions. However, GINA does not cover life insurance, disability insurance, or long-term care insurance."
  },
  {
    id: 39,
    question: "The positive predictive value (PPV) of a genetic screening test depends on:",
    options: ["Only the sensitivity of the test", "Only the specificity of the test", "The prevalence of the condition in the screened population", "The cost of the test"],
    answer: 2,
    explanation: "PPV is the probability that a positive test result truly indicates disease. It depends on the prevalence (prior probability) of the condition in the population, as well as the sensitivity and specificity of the test. Even a highly specific test can have a low PPV when screening for rare conditions (low prevalence), leading to many false positives."
  },
  {
    id: 40,
    question: "Cascade genetic testing refers to:",
    options: ["Testing the same individual for multiple conditions", "Sequential testing of at-risk family members after identifying a mutation in a proband", "Testing embryos in sequence during IVF", "Using multiple testing platforms on the same sample"],
    answer: 1,
    explanation: "Cascade testing involves offering targeted genetic testing to at-risk relatives after a pathogenic variant has been identified in a family member (proband). It is a cost-effective strategy that enables identification of presymptomatic carriers who can benefit from surveillance and risk-reduction strategies, as in BRCA-related hereditary cancer syndromes."
  },

  // ===== GENE THERAPY & PRECISION MEDICINE (Q41–Q50) =====
  {
    id: 41,
    question: "Adeno-associated virus (AAV) vectors are preferred for gene therapy because they:",
    options: ["Integrate into the host genome efficiently", "Cause strong immune responses", "Have low immunogenicity and can transduce non-dividing cells", "Carry very large DNA inserts (>30 kb)"],
    answer: 2,
    explanation: "AAV vectors are widely used in gene therapy due to their low immunogenicity, ability to transduce both dividing and non-dividing cells, and long-term transgene expression. AAV does not efficiently integrate into the host genome (reducing insertional mutagenesis risk), but the limited packaging capacity (~4.7 kb) restricts the size of therapeutic genes."
  },
  {
    id: 42,
    question: "Luxturna (voretigene neparvovec) is an FDA-approved gene therapy for:",
    options: ["Sickle cell disease", "RPE65-mediated inherited retinal dystrophy", "Spinal muscular atrophy", "Hemophilia A"],
    answer: 1,
    explanation: "Luxturna is an AAV2-based gene therapy delivering a functional RPE65 gene via subretinal injection. It was FDA-approved in 2017 for patients with biallelic RPE65 mutation-associated retinal dystrophy (a form of Leber congenital amaurosis). It was one of the first FDA-approved gene therapies for a genetic disease."
  },
  {
    id: 43,
    question: "Antisense oligonucleotide (ASO) therapy works by:",
    options: ["Replacing the mutant gene with a normal copy", "Binding complementary mRNA to modulate gene expression", "Editing the genomic DNA sequence directly", "Providing exogenous functional protein"],
    answer: 1,
    explanation: "ASOs are short synthetic nucleic acids that bind complementary mRNA sequences through Watson-Crick base pairing. They can modulate gene expression by promoting mRNA degradation (via RNase H), blocking translation, or altering pre-mRNA splicing. Examples include nusinersen (SMA, exon inclusion) and eteplirsen (DMD, exon skipping)."
  },
  {
    id: 44,
    question: "Nusinersen (Spinraza) treats spinal muscular atrophy (SMA) by modifying splicing of which gene?",
    options: ["SMN1", "SMN2", "DMD", "HTT"],
    answer: 1,
    explanation: "Nusinersen is an ASO that modifies splicing of SMN2 pre-mRNA by blocking an intronic splicing silencer in intron 7. This promotes inclusion of exon 7 in SMN2 mRNA, producing more full-length, functional SMN protein to compensate for the loss of SMN1. SMA is caused by homozygous SMN1 deletion/mutation, and SMN2 copy number correlates with disease severity."
  },
  {
    id: 45,
    question: "CAR-T cell therapy involves:",
    options: ["Transplanting donor bone marrow", "Genetically engineering a patient's T cells to express chimeric antigen receptors targeting tumor antigens", "Administering monoclonal antibodies", "Gene editing of tumor cells directly"],
    answer: 1,
    explanation: "CAR-T therapy involves collecting a patient's T cells, genetically engineering them ex vivo to express chimeric antigen receptors (CARs) that recognize specific tumor surface antigens (e.g., CD19 on B-cell lymphomas), expanding them, and infusing them back into the patient. FDA-approved products include tisagenlecleucel and axicabtagene ciloleucel."
  },
  {
    id: 46,
    question: "Pharmacogenomic testing for HLA-B*57:01 is recommended before prescribing which drug?",
    options: ["Warfarin", "Abacavir", "Clopidogrel", "Tamoxifen"],
    answer: 1,
    explanation: "HLA-B*57:01 testing is mandatory before prescribing abacavir (an HIV nucleoside reverse transcriptase inhibitor). Carriers of HLA-B*57:01 have a high risk (~50%) of developing abacavir hypersensitivity reaction, a potentially life-threatening multi-organ syndrome. Pre-prescription testing has virtually eliminated this adverse reaction."
  },
  {
    id: 47,
    question: "Zolgensma (onasemnogene abeparvovec) treats SMA by:",
    options: ["Modifying SMN2 splicing", "Delivering a functional SMN1 gene via AAV9 vector", "Providing recombinant SMN protein", "Silencing the mutant SMN1 gene"],
    answer: 1,
    explanation: "Zolgensma is an AAV9-based gene replacement therapy that delivers a functional copy of the SMN1 gene via a single intravenous infusion. AAV9 can cross the blood-brain barrier and transduce motor neurons. It was FDA-approved in 2019 for SMA patients under 2 years of age and represents one of the most expensive single-dose therapies."
  },
  {
    id: 48,
    question: "Base editing differs from traditional CRISPR-Cas9 in that it:",
    options: ["Creates double-strand breaks", "Converts one base pair to another without double-strand breaks", "Requires homology-directed repair templates", "Can only delete genes"],
    answer: 1,
    explanation: "Base editors (cytosine base editors and adenine base editors) use a catalytically impaired Cas9 (nickase) fused to a deaminase enzyme. They convert specific base pairs (C·G to T·A or A·T to G·C) at targeted sites without creating double-strand breaks, avoiding the risks of indels, translocations, and p53-mediated DNA damage responses associated with conventional CRISPR-Cas9."
  },
  {
    id: 49,
    question: "Casgevy (exagamglogene autotemcel) is a CRISPR-based therapy approved for:",
    options: ["Huntington disease", "Sickle cell disease and transfusion-dependent beta-thalassemia", "Cystic fibrosis", "Duchenne muscular dystrophy"],
    answer: 1,
    explanation: "Casgevy is the first CRISPR-Cas9-based gene therapy approved by the FDA (2023). It works by editing the BCL11A enhancer in the patient's own hematopoietic stem cells, reactivating fetal hemoglobin (HbF) production, which compensates for defective adult hemoglobin in sickle cell disease and beta-thalassemia."
  },
  {
    id: 50,
    question: "Liquid biopsy in cancer genetics refers to:",
    options: ["Standard tissue biopsy of tumor", "Analysis of circulating tumor DNA (ctDNA) and other biomarkers from blood samples", "Biopsy of bone marrow aspirate", "Fine needle aspiration of lymph nodes"],
    answer: 1,
    explanation: "Liquid biopsy analyzes circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), and exosomes from peripheral blood. It enables non-invasive tumor genotyping, detection of actionable mutations, monitoring treatment response, and early detection of resistance mutations. It is particularly valuable when tissue biopsy is difficult or for serial monitoring."
  }
]

export default questions
