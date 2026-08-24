const questions = [
  // ===== MENDELIAN INHERITANCE (Q1–Q10) =====
  {
    id: 1,
    question: "In autosomal recessive inheritance, what is the probability that two carrier parents will have an affected child?",
    options: ["1/2", "1/4", "3/4", "1/8"],
    answer: 1,
    explanation: "When both parents are carriers (Aa × Aa), the Punnett square gives AA (1/4), Aa (1/2), and aa (1/4). Thus, there is a 25% (1/4) chance of having an affected (aa) child in each pregnancy."
  },
  {
    id: 2,
    question: "Which of the following is an example of an autosomal dominant disorder?",
    options: ["Cystic fibrosis", "Sickle cell anemia", "Huntington disease", "Phenylketonuria"],
    answer: 2,
    explanation: "Huntington disease is caused by a CAG trinucleotide repeat expansion in the HTT gene on chromosome 4 and follows autosomal dominant inheritance. A single copy of the mutant allele is sufficient to cause the disease."
  },
  {
    id: 3,
    question: "X-linked recessive disorders are characteristically seen in:",
    options: ["Only females", "Males and females equally", "Predominantly males", "Only homozygous females"],
    answer: 2,
    explanation: "Males have only one X chromosome (hemizygous), so a single copy of the recessive mutant allele on the X chromosome is sufficient to cause disease. Females require two copies (homozygous) to be affected, making clinical manifestation predominantly in males."
  },
  {
    id: 4,
    question: "A father affected with an autosomal dominant disorder and a normal mother will have what proportion of affected children?",
    options: ["All children affected", "1/2 affected", "1/4 affected", "None affected"],
    answer: 1,
    explanation: "If the father is heterozygous (Aa) for an autosomal dominant condition and the mother is normal (aa), the cross Aa × aa yields 1/2 Aa (affected) and 1/2 aa (unaffected). So 50% of children will be affected regardless of sex."
  },
  {
    id: 5,
    question: "Which phenomenon explains why neurofibromatosis type 1 (NF1) shows variable clinical features even within the same family?",
    options: ["Incomplete penetrance", "Variable expressivity", "Genetic heterogeneity", "Pleiotropy"],
    answer: 1,
    explanation: "Variable expressivity means that individuals carrying the same pathogenic variant show different degrees or types of clinical manifestations. NF1 is a classic example — some family members may have only cafe-au-lait spots while others develop neurofibromas, optic gliomas, or skeletal abnormalities."
  },
  {
    id: 6,
    question: "Leber hereditary optic neuropathy (LHON) follows which pattern of inheritance?",
    options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial (maternal)"],
    answer: 3,
    explanation: "LHON is caused by point mutations in mitochondrial DNA (most commonly m.11778G>A in ND4). Since mitochondria are inherited exclusively from the mother, LHON follows maternal (mitochondrial) inheritance — all children of an affected mother may inherit the mutation, but none from an affected father."
  },
  {
    id: 7,
    question: "A condition that requires the mutant allele to be inherited from a specific parent to manifest clinically is an example of:",
    options: ["Anticipation", "Genomic imprinting", "Mosaicism", "Codominance"],
    answer: 1,
    explanation: "Genomic imprinting is an epigenetic phenomenon where certain genes are expressed in a parent-of-origin-specific manner. For example, Prader-Willi syndrome results from loss of paternally expressed genes on 15q11-13, while Angelman syndrome results from loss of the maternally expressed UBE3A gene in the same region."
  },
  {
    id: 8,
    question: "In a pedigree, a trait that appears in every generation with no male-to-male transmission most likely follows which inheritance pattern?",
    options: ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "Mitochondrial"],
    answer: 2,
    explanation: "X-linked dominant inheritance shows affected individuals in every generation (like autosomal dominant), but an affected father cannot transmit the X chromosome to his sons (he gives Y instead). This absence of male-to-male transmission is the hallmark distinguishing X-linked dominant from autosomal dominant."
  },
  {
    id: 9,
    question: "Which of the following best describes codominance?",
    options: ["One allele completely masks the other", "Both alleles are expressed simultaneously in the heterozygote", "The heterozygote shows an intermediate phenotype", "One allele is expressed only when inherited from a specific parent"],
    answer: 1,
    explanation: "In codominance, both alleles in a heterozygote are fully expressed simultaneously. The classic example is the ABO blood group system where the A and B alleles are codominant — a person with genotype AB expresses both A and B antigens on red blood cells."
  },
  {
    id: 10,
    question: "Consanguinity increases the risk of which type of genetic disorder?",
    options: ["Autosomal dominant", "X-linked dominant", "Autosomal recessive", "Mitochondrial"],
    answer: 2,
    explanation: "Consanguineous parents share a higher proportion of alleles identical by descent. This increases the probability that offspring will be homozygous for rare recessive alleles, thereby raising the risk of autosomal recessive disorders."
  },

  // ===== CYTOGENETICS & CHROMOSOMAL DISORDERS (Q11–Q20) =====
  {
    id: 11,
    question: "Down syndrome is most commonly caused by:",
    options: ["Monosomy 21", "Trisomy 21 due to meiotic nondisjunction", "Deletion of chromosome 21", "Uniparental disomy of chromosome 21"],
    answer: 1,
    explanation: "Approximately 95% of Down syndrome cases result from free trisomy 21 caused by meiotic nondisjunction (usually in maternal meiosis I). The remaining cases are due to Robertsonian translocation (~4%) or mosaicism (~1%)."
  },
  {
    id: 12,
    question: "Turner syndrome has the karyotype:",
    options: ["47,XXY", "45,X", "47,XXX", "47,XYY"],
    answer: 1,
    explanation: "Turner syndrome results from complete or partial monosomy of the X chromosome (45,X). It affects approximately 1 in 2500 live-born females and presents with short stature, gonadal dysgenesis, webbed neck, and shield chest."
  },
  {
    id: 13,
    question: "Klinefelter syndrome is characterized by the karyotype:",
    options: ["45,X", "47,XXY", "47,XYY", "46,XX male"],
    answer: 1,
    explanation: "Klinefelter syndrome (47,XXY) is the most common sex chromosome aneuploidy in males (~1 in 660). Features include tall stature, small testes, gynecomastia, infertility, and mildly reduced IQ. The extra X is inactivated but genes in pseudoautosomal regions escape inactivation."
  },
  {
    id: 14,
    question: "A Robertsonian translocation most commonly involves which chromosomes?",
    options: ["Chromosomes 1 and 2", "Chromosomes 13, 14, 15, 21, and 22", "Chromosomes 9 and 22", "Sex chromosomes X and Y"],
    answer: 1,
    explanation: "Robertsonian translocations involve fusion of two acrocentric chromosomes (13, 14, 15, 21, 22) at or near their centromeres, with loss of the short arms. The most common is rob(13;14). A rob(14;21) carrier has a risk of producing offspring with translocation Down syndrome."
  },
  {
    id: 15,
    question: "Cri-du-chat syndrome is caused by:",
    options: ["Trisomy 5", "Deletion of the short arm of chromosome 5 (5p-)", "Inversion of chromosome 5", "Ring chromosome 5"],
    answer: 1,
    explanation: "Cri-du-chat syndrome results from a partial deletion of the short arm of chromosome 5 (5p15.2-15.3). The characteristic high-pitched cat-like cry in infancy is due to laryngeal abnormalities. Other features include microcephaly, intellectual disability, and facial dysmorphism."
  },
  {
    id: 16,
    question: "Which technique is used to detect microdeletions not visible on standard karyotyping?",
    options: ["G-banding", "Fluorescence in situ hybridization (FISH)", "Southern blotting", "Pulse-field gel electrophoresis"],
    answer: 1,
    explanation: "FISH uses fluorescently labeled DNA probes that hybridize to specific chromosomal regions, allowing detection of submicroscopic deletions (microdeletions), duplications, and translocations that are below the resolution (~5-10 Mb) of conventional G-banded karyotyping."
  },
  {
    id: 17,
    question: "Edward syndrome is associated with trisomy of which chromosome?",
    options: ["Chromosome 13", "Chromosome 18", "Chromosome 21", "Chromosome 22"],
    answer: 1,
    explanation: "Edward syndrome (trisomy 18) presents with severe intellectual disability, clenched fists with overlapping fingers, rocker-bottom feet, congenital heart defects, and a very poor prognosis (median survival ~5-15 days). Incidence is ~1 in 5000 live births."
  },
  {
    id: 18,
    question: "Chromosomal mosaicism occurs due to:",
    options: ["Error in meiosis I", "Error in meiosis II", "Post-zygotic mitotic nondisjunction", "Fertilization by two sperm"],
    answer: 2,
    explanation: "Mosaicism results from a mitotic nondisjunction event occurring after fertilization (post-zygotic), producing two or more cell lines with different chromosome complements in a single individual. The phenotypic severity depends on when the error occurred and which tissues are affected."
  },
  {
    id: 19,
    question: "The Philadelphia chromosome t(9;22) is associated with:",
    options: ["Burkitt lymphoma", "Chronic myelogenous leukemia (CML)", "Retinoblastoma", "Wilms tumor"],
    answer: 1,
    explanation: "The Philadelphia chromosome results from a reciprocal translocation t(9;22)(q34;q11.2), which creates the BCR-ABL1 fusion gene. This constitutively active tyrosine kinase drives uncontrolled cell proliferation in CML. Imatinib (Gleevec) specifically targets this fusion protein."
  },
  {
    id: 20,
    question: "Chromosomal microarray analysis (CMA) is superior to karyotyping for detecting:",
    options: ["Balanced translocations", "Copy number variants (CNVs)", "Polyploidy", "Inversions"],
    answer: 1,
    explanation: "CMA can detect submicroscopic copy number variants (deletions and duplications) with much higher resolution than karyotyping. However, CMA cannot detect balanced rearrangements (translocations, inversions) because there is no net gain or loss of genetic material."
  },

  // ===== MOLECULAR GENETICS & MUTATIONS (Q21–Q30) =====
  {
    id: 21,
    question: "Sickle cell disease is caused by a point mutation that substitutes which amino acid in the beta-globin chain?",
    options: ["Glutamic acid to valine at position 6", "Valine to glutamic acid at position 6", "Glutamic acid to lysine at position 6", "Histidine to tyrosine at position 63"],
    answer: 0,
    explanation: "Sickle cell disease results from a single nucleotide change (GAG→GTG) in codon 6 of the HBB gene, replacing glutamic acid (hydrophilic) with valine (hydrophobic). This causes HbS polymerization under low oxygen tension, leading to the characteristic sickle shape of red blood cells."
  },
  {
    id: 22,
    question: "Trinucleotide repeat expansion is the molecular basis of all of the following EXCEPT:",
    options: ["Fragile X syndrome", "Huntington disease", "Myotonic dystrophy", "Cystic fibrosis"],
    answer: 3,
    explanation: "Cystic fibrosis is caused by mutations (most commonly delta-F508 deletion) in the CFTR gene, not by trinucleotide repeat expansion. Fragile X (CGG), Huntington disease (CAG), and myotonic dystrophy (CTG) are all trinucleotide repeat disorders showing anticipation."
  },
  {
    id: 23,
    question: "Anticipation in genetics refers to:",
    options: ["Skipping of generations in inheritance", "Earlier onset and increased severity in successive generations", "Inheritance of traits from only one parent", "Expression of traits only in males"],
    answer: 1,
    explanation: "Anticipation is the phenomenon where a genetic disorder manifests at an earlier age and/or with greater severity in successive generations. It is characteristic of trinucleotide repeat disorders where the repeat length tends to expand during transmission, especially through specific parental lineages."
  },
  {
    id: 24,
    question: "The most common mutation in cystic fibrosis (deltaF508) results in:",
    options: ["A nonsense mutation creating a premature stop codon", "Deletion of phenylalanine at position 508 causing protein misfolding", "A splice site mutation", "A frameshift mutation"],
    answer: 1,
    explanation: "The deltaF508 mutation is a 3-bp deletion that removes phenylalanine at position 508 of the CFTR protein. This causes misfolding of the protein, which is then retained in the endoplasmic reticulum and degraded by proteasomes, preventing it from reaching the cell membrane."
  },
  {
    id: 25,
    question: "Loss of heterozygosity (LOH) is an important mechanism in:",
    options: ["Gain-of-function mutations in oncogenes", "Inactivation of tumor suppressor genes", "Trinucleotide repeat expansion", "Mitochondrial DNA mutations"],
    answer: 1,
    explanation: "According to Knudson's two-hit hypothesis, both alleles of a tumor suppressor gene must be inactivated for tumor development. LOH refers to the loss of the remaining normal allele (second hit) in an individual who already carries one mutant allele (first hit), as seen in retinoblastoma (RB1)."
  },
  {
    id: 26,
    question: "Which type of mutation causes the reading frame to shift, altering all downstream amino acids?",
    options: ["Missense mutation", "Silent mutation", "Frameshift mutation", "Splice site mutation"],
    answer: 2,
    explanation: "Frameshift mutations are caused by insertions or deletions of nucleotides that are not multiples of three. This shifts the reading frame, altering all downstream codons and usually introducing a premature stop codon, resulting in a truncated, nonfunctional protein."
  },
  {
    id: 27,
    question: "Uniparental disomy (UPD) refers to:",
    options: ["Inheritance of both homologs of a chromosome from one parent", "Inheritance of an extra chromosome from each parent", "Loss of one parental chromosome", "Mosaicism for two cell lines"],
    answer: 0,
    explanation: "In uniparental disomy, an individual inherits both copies of a particular chromosome (or chromosomal region) from one parent and none from the other. UPD can cause disease when it involves imprinted regions (e.g., maternal UPD 15 causes Prader-Willi syndrome)."
  },
  {
    id: 28,
    question: "Which of the following is a dynamic mutation?",
    options: ["Point mutation in HBB gene", "Deletion of exon in DMD gene", "CGG repeat expansion in FMR1 gene", "Inversion in factor VIII gene"],
    answer: 2,
    explanation: "Dynamic mutations are unstable expansions of tandem nucleotide repeats that can increase in size during transmission to offspring. The CGG repeat expansion in the FMR1 gene causes Fragile X syndrome — normal alleles have 5-44 repeats, premutations have 55-200, and full mutations have >200 repeats with gene silencing."
  },
  {
    id: 29,
    question: "Gain-of-function mutations are typically associated with:",
    options: ["Tumor suppressor genes", "Proto-oncogenes", "DNA repair genes", "Imprinted genes"],
    answer: 1,
    explanation: "Proto-oncogenes normally promote cell growth and division. A gain-of-function mutation converts a proto-oncogene into an oncogene, producing a protein with enhanced or constitutive activity. Examples include RAS point mutations, MYC amplification, and BCR-ABL translocation. These mutations are typically dominant at the cellular level."
  },
  {
    id: 30,
    question: "Nonsense-mediated mRNA decay (NMD) is triggered by:",
    options: ["Missense mutations", "Premature termination codons (PTCs)", "Silent mutations", "Promoter mutations"],
    answer: 1,
    explanation: "NMD is a cellular surveillance mechanism that detects and degrades mRNAs containing premature termination codons located more than 50-55 nucleotides upstream of the last exon-exon junction. This prevents translation of truncated proteins that could have dominant-negative effects."
  },

  // ===== GENETIC DISORDERS & CLINICAL GENETICS (Q31–Q40) =====
  {
    id: 31,
    question: "Which enzyme is deficient in Gaucher disease?",
    options: ["Hexosaminidase A", "Glucocerebrosidase (beta-glucosidase)", "Alpha-galactosidase A", "Sphingomyelinase"],
    answer: 1,
    explanation: "Gaucher disease is caused by deficiency of glucocerebrosidase (acid beta-glucosidase), leading to accumulation of glucocerebroside in macrophages (Gaucher cells). It is the most common lysosomal storage disorder and is treatable with enzyme replacement therapy (imiglucerase)."
  },
  {
    id: 32,
    question: "Duchenne muscular dystrophy (DMD) is caused by mutations in the gene encoding:",
    options: ["Spectrin", "Dystrophin", "Myosin", "Collagen"],
    answer: 1,
    explanation: "DMD results from mutations (usually large deletions) in the DMD gene on Xp21, which encodes dystrophin. Dystrophin is a cytoskeletal protein that anchors the muscle cell membrane to the extracellular matrix. Its absence leads to progressive muscle degeneration. Becker muscular dystrophy results from in-frame mutations producing a partially functional dystrophin."
  },
  {
    id: 33,
    question: "Prader-Willi syndrome results from loss of gene expression in the 15q11-13 region inherited from:",
    options: ["Mother", "Father", "Either parent equally", "Both parents"],
    answer: 1,
    explanation: "Prader-Willi syndrome (PWS) results from loss of paternally expressed genes in the 15q11-13 region. The maternal copies of these genes are normally silenced by genomic imprinting. PWS can result from paternal deletion (~70%), maternal UPD (~25%), or imprinting defects (~2-5%)."
  },
  {
    id: 34,
    question: "Which of the following is an X-linked recessive disorder?",
    options: ["Marfan syndrome", "Hemophilia A", "Achondroplasia", "Huntington disease"],
    answer: 1,
    explanation: "Hemophilia A is caused by mutations in the F8 gene on the X chromosome, encoding coagulation factor VIII. It follows X-linked recessive inheritance — predominantly affecting males. Carrier females are usually asymptomatic but may have mildly reduced factor VIII levels."
  },
  {
    id: 35,
    question: "Tay-Sachs disease is characterized by deficiency of:",
    options: ["Glucocerebrosidase", "Hexosaminidase A", "Sphingomyelinase", "Alpha-L-iduronidase"],
    answer: 1,
    explanation: "Tay-Sachs disease is an autosomal recessive lysosomal storage disorder caused by deficiency of hexosaminidase A, leading to accumulation of GM2 ganglioside in neurons. It presents in infancy with progressive neurodegeneration, cherry-red spot on the macula, and is fatal by age 3-5 years."
  },
  {
    id: 36,
    question: "Marfan syndrome is caused by mutations in the gene encoding:",
    options: ["Type I collagen", "Fibrillin-1", "Elastin", "Dystrophin"],
    answer: 1,
    explanation: "Marfan syndrome is an autosomal dominant connective tissue disorder caused by mutations in FBN1 (chromosome 15q21.1), which encodes fibrillin-1, a glycoprotein essential for elastic fiber formation. Clinical features include tall stature, arachnodactyly, lens subluxation, and aortic root dilation."
  },
  {
    id: 37,
    question: "Phenylketonuria (PKU) results from deficiency of which enzyme?",
    options: ["Tyrosinase", "Phenylalanine hydroxylase", "Homogentisic acid oxidase", "Cystathionine beta-synthase"],
    answer: 1,
    explanation: "PKU is an autosomal recessive disorder caused by deficiency of phenylalanine hydroxylase (PAH), which converts phenylalanine to tyrosine. Accumulation of phenylalanine leads to intellectual disability, seizures, and musty body odor if untreated. Newborn screening and dietary restriction of phenylalanine prevent complications."
  },
  {
    id: 38,
    question: "Which of the following disorders follows autosomal dominant inheritance with age-dependent penetrance?",
    options: ["Cystic fibrosis", "Sickle cell disease", "Hereditary breast cancer (BRCA1)", "Tay-Sachs disease"],
    answer: 2,
    explanation: "BRCA1-associated hereditary breast cancer follows autosomal dominant inheritance with age-dependent penetrance. The lifetime risk of breast cancer in BRCA1 mutation carriers is approximately 60-80%, increasing with age. Not all carriers develop cancer, demonstrating incomplete penetrance."
  },
  {
    id: 39,
    question: "DiGeorge syndrome (22q11.2 deletion syndrome) is characterized by all of the following EXCEPT:",
    options: ["Thymic hypoplasia", "Hypocalcemia due to parathyroid hypoplasia", "Conotruncal cardiac defects", "Polycystic kidneys"],
    answer: 3,
    explanation: "DiGeorge/22q11.2 deletion syndrome (also called velocardiofacial syndrome) features thymic hypoplasia (T-cell immunodeficiency), parathyroid hypoplasia (hypocalcemia), conotruncal heart defects (tetralogy of Fallot, truncus arteriosus), and facial dysmorphism. Polycystic kidneys are not a typical feature."
  },
  {
    id: 40,
    question: "Which lysosomal storage disorder is X-linked?",
    options: ["Gaucher disease", "Fabry disease", "Niemann-Pick disease", "Krabbe disease"],
    answer: 1,
    explanation: "Fabry disease is the only common X-linked lysosomal storage disorder, caused by deficiency of alpha-galactosidase A (GLA gene, Xq22). It leads to accumulation of globotriaosylceramide (Gb3) in vascular endothelium, causing acroparesthesias, angiokeratomas, corneal opacities, and renal/cardiac complications."
  },

  // ===== GENETIC TESTING & COUNSELING (Q41–Q50) =====
  {
    id: 41,
    question: "Polymerase chain reaction (PCR) is used to:",
    options: ["Sequence the entire genome", "Amplify specific DNA segments", "Separate proteins by size", "Detect RNA expression levels"],
    answer: 1,
    explanation: "PCR amplifies specific DNA sequences exponentially using thermostable DNA polymerase (Taq), sequence-specific primers, and thermal cycling (denaturation, annealing, extension). It is fundamental to molecular diagnostics, enabling detection of mutations, infections, and forensic identification from minute DNA samples."
  },
  {
    id: 42,
    question: "Sanger sequencing determines DNA sequence by incorporating:",
    options: ["Radioactively labeled nucleotides", "Chain-terminating dideoxynucleotides (ddNTPs)", "Fluorescent antibodies", "Restriction enzymes"],
    answer: 1,
    explanation: "Sanger sequencing uses dideoxynucleotides (ddNTPs) that lack the 3'-OH group needed for phosphodiester bond formation. When incorporated, they terminate chain elongation. By using four separate reactions (or fluorescently labeled ddNTPs), the sequence is determined from the pattern of terminated fragments."
  },
  {
    id: 43,
    question: "Next-generation sequencing (NGS) differs from Sanger sequencing primarily in its ability to:",
    options: ["Use higher fidelity polymerases", "Perform massively parallel sequencing of millions of fragments simultaneously", "Sequence only RNA", "Detect epigenetic modifications directly"],
    answer: 1,
    explanation: "NGS platforms (Illumina, Ion Torrent, etc.) perform massively parallel sequencing of millions of DNA fragments simultaneously, enabling whole-genome, whole-exome, or targeted panel sequencing at much higher throughput and lower per-base cost compared to Sanger sequencing."
  },
  {
    id: 44,
    question: "Amniocentesis for prenatal genetic diagnosis is typically performed at:",
    options: ["6-8 weeks of gestation", "10-12 weeks of gestation", "15-20 weeks of gestation", "28-32 weeks of gestation"],
    answer: 2,
    explanation: "Amniocentesis is typically performed at 15-20 weeks of gestation. Amniotic fluid containing fetal cells is aspirated under ultrasound guidance. The cells are cultured for karyotyping, or DNA is extracted for molecular testing. The procedure carries approximately 0.1-0.3% risk of miscarriage."
  },
  {
    id: 45,
    question: "Chorionic villus sampling (CVS) is performed earlier than amniocentesis, typically at:",
    options: ["5-7 weeks", "10-13 weeks", "16-18 weeks", "20-24 weeks"],
    answer: 1,
    explanation: "CVS is performed at 10-13 weeks of gestation by sampling placental chorionic villi (which have the same genetic makeup as the fetus). It provides earlier results than amniocentesis but cannot detect neural tube defects (no AFP measurement). The miscarriage risk is slightly higher than amniocentesis (~0.5-1%)."
  },
  {
    id: 46,
    question: "Non-invasive prenatal testing (NIPT) analyzes:",
    options: ["Fetal cells from maternal blood", "Cell-free fetal DNA in maternal plasma", "Amniotic fluid cells", "Chorionic villus cells"],
    answer: 1,
    explanation: "NIPT analyzes cell-free fetal DNA (cffDNA) circulating in maternal plasma, which originates primarily from placental trophoblast apoptosis. It can screen for common aneuploidies (trisomies 21, 18, 13) with high sensitivity (>99% for T21) and specificity from 10 weeks of gestation, without invasive procedures."
  },
  {
    id: 47,
    question: "Newborn screening for inborn errors of metabolism commonly uses which technique?",
    options: ["Karyotyping", "Tandem mass spectrometry (MS/MS)", "Whole genome sequencing", "FISH"],
    answer: 1,
    explanation: "Tandem mass spectrometry (MS/MS) allows simultaneous screening for dozens of inborn errors of metabolism from a dried blood spot. It can detect disorders of amino acid, organic acid, and fatty acid metabolism by measuring specific metabolite profiles. This has dramatically expanded newborn screening panels."
  },
  {
    id: 48,
    question: "Genetic counseling for a couple with a child affected by an autosomal recessive condition should include the information that the recurrence risk for each subsequent pregnancy is:",
    options: ["Negligible", "25%", "50%", "100%"],
    answer: 1,
    explanation: "When both parents are confirmed carriers of an autosomal recessive condition (as demonstrated by having an affected child), the recurrence risk is 25% (1/4) for each subsequent pregnancy, independent of the outcomes of previous pregnancies. There is also a 2/3 probability that each unaffected sibling is a carrier."
  },
  {
    id: 49,
    question: "CRISPR-Cas9 gene editing achieves targeted DNA cleavage by using:",
    options: ["Zinc finger nucleases", "A guide RNA complementary to the target sequence", "Restriction endonucleases", "Transposase enzymes"],
    answer: 1,
    explanation: "CRISPR-Cas9 uses a single guide RNA (sgRNA) of ~20 nucleotides that is complementary to the target DNA sequence. The sgRNA directs the Cas9 nuclease to the specific genomic location adjacent to a PAM sequence (NGG for SpCas9), where Cas9 creates a double-strand break that is repaired by NHEJ or HDR."
  },
  {
    id: 50,
    question: "Pharmacogenomics studies genetic variation affecting drug response. Which enzyme's polymorphisms are most important in determining the metabolism of many common drugs?",
    options: ["Alcohol dehydrogenase", "Cytochrome P450 (CYP) enzymes", "Glucose-6-phosphate dehydrogenase", "Thiopurine methyltransferase"],
    answer: 1,
    explanation: "Cytochrome P450 (CYP) enzymes, particularly CYP2D6, CYP2C19, CYP2C9, and CYP3A4, are responsible for the phase I metabolism of approximately 70-80% of clinically used drugs. Genetic polymorphisms produce poor, intermediate, extensive, and ultra-rapid metabolizer phenotypes, significantly affecting drug efficacy and toxicity."
  }
]

export default questions
