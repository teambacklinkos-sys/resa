const questions = [
  // ===== DEVELOPMENTAL GENETICS & TERATOLOGY (Q1–Q10) =====
  {
    id: 1,
    question: "The HOX genes are critical for:",
    options: ["DNA repair", "Anterior-posterior body axis patterning during embryonic development", "Mitochondrial function", "Immune cell differentiation"],
    answer: 1,
    explanation: "HOX genes encode homeodomain transcription factors that specify positional identity along the anterior-posterior axis during embryonic development. They are organized in four clusters (HOXA-D) with spatial and temporal collinearity — genes at the 3' end are expressed earlier and more anteriorly, while 5' genes are expressed later and more posteriorly."
  },
  {
    id: 2,
    question: "Sonic hedgehog (SHH) signaling is essential for all of the following EXCEPT:",
    options: ["Ventral neural tube patterning", "Limb bud digit patterning", "Left-right body asymmetry", "X-chromosome inactivation"],
    answer: 3,
    explanation: "SHH is a morphogen critical for ventral neural tube patterning (floor plate and motor neuron specification), limb digit patterning (zone of polarizing activity), and left-right asymmetry (nodal signaling). X-chromosome inactivation is regulated by XIST RNA, not SHH. Loss of SHH causes holoprosencephaly."
  },
  {
    id: 3,
    question: "Holoprosencephaly, failure of the forebrain to divide into hemispheres, is most commonly associated with mutations in:",
    options: ["PAX6", "SHH", "SOX9", "RUNX2"],
    answer: 1,
    explanation: "Holoprosencephaly (HPE) is the most common structural forebrain anomaly. SHH mutations account for the largest proportion of identified genetic causes (~17% of familial HPE). Other genes include ZIC2, SIX3, and TGIF. Environmental causes include maternal diabetes and fetal alcohol exposure. HPE shows highly variable expressivity, from alobar HPE to mild midline defects."
  },
  {
    id: 4,
    question: "The critical period for thalidomide teratogenicity (limb malformations) is:",
    options: ["Days 1-14 post-conception", "Days 21-36 post-conception (limb organogenesis)", "Second trimester", "Third trimester"],
    answer: 1,
    explanation: "Thalidomide causes limb reduction defects (phocomelia, amelia) when exposure occurs during days 21-36 post-conception, coinciding with limb bud development and organogenesis. Thalidomide inhibits angiogenesis and modulates cereblon-mediated protein degradation. This tragedy led to modern drug safety regulations and teratogenicity testing requirements."
  },
  {
    id: 5,
    question: "PAX6 mutations cause:",
    options: ["Holoprosencephaly", "Aniridia (absence of iris)", "Achondroplasia", "Retinoblastoma"],
    answer: 1,
    explanation: "PAX6 is a master control gene for eye development, conserved from Drosophila to humans. Heterozygous loss-of-function mutations cause aniridia (congenital absence of the iris) following autosomal dominant inheritance. Homozygous PAX6 loss is lethal. Aniridia is also associated with Wilms tumor in the WAGR contiguous gene deletion syndrome (11p13)."
  },
  {
    id: 6,
    question: "Fetal alcohol spectrum disorder (FASD) most severely affects which organ system?",
    options: ["Kidneys", "Central nervous system", "Lungs", "Gastrointestinal tract"],
    answer: 1,
    explanation: "Alcohol is the most common preventable teratogen. FASD primarily affects the central nervous system, causing intellectual disability, behavioral problems, and structural brain abnormalities. Facial features include smooth philtrum, thin vermilion border, and short palpebral fissures. There is no known safe level of alcohol consumption during pregnancy."
  },
  {
    id: 7,
    question: "CHARGE syndrome is caused by mutations in which chromatin remodeling gene?",
    options: ["ARID1A", "CHD7", "SWI/SNF", "BRG1"],
    answer: 1,
    explanation: "CHARGE syndrome (Coloboma, Heart defects, Atresia choanae, Retardation of growth/development, Genital abnormalities, Ear anomalies) is caused by autosomal dominant mutations in CHD7, a chromodomain helicase DNA-binding protein involved in chromatin remodeling and gene regulation during embryonic development."
  },
  {
    id: 8,
    question: "Isotretinoin (Accutane) is teratogenic because it disrupts:",
    options: ["Folate metabolism", "Retinoic acid signaling gradients", "Thyroid hormone function", "Insulin signaling"],
    answer: 1,
    explanation: "Isotretinoin is a synthetic retinoid (vitamin A derivative) that disrupts retinoic acid signaling, which is critical for embryonic patterning and organogenesis. Exposure during the first trimester causes craniofacial, cardiac, thymic, and CNS malformations. It is absolutely contraindicated in pregnancy, and pregnancy prevention programs are mandatory for prescribing."
  },
  {
    id: 9,
    question: "Beckwith-Wiedemann syndrome is associated with increased risk of which childhood tumor?",
    options: ["Retinoblastoma", "Wilms tumor (nephroblastoma)", "Neuroblastoma", "Medulloblastoma"],
    answer: 1,
    explanation: "Children with BWS have approximately 7.5% risk of embryonal tumors, most commonly Wilms tumor (nephroblastoma) and hepatoblastoma. Tumor surveillance protocols include abdominal ultrasound every 3 months until age 7-8 and serum AFP monitoring for hepatoblastoma. The risk correlates with the specific molecular subtype (highest with paternal UPD11 and IC1 gain of methylation)."
  },
  {
    id: 10,
    question: "Cornelia de Lange syndrome is caused by mutations in genes encoding components of the:",
    options: ["Proteasome complex", "Cohesin complex", "Spliceosome", "Nuclear pore complex"],
    answer: 1,
    explanation: "Cornelia de Lange syndrome (CdLS) is caused by mutations in cohesin complex genes (NIPBL most commonly, also SMC1A, SMC3, RAD21, HDAC8). While cohesin is known for sister chromatid cohesion, its role in transcriptional regulation explains the developmental features: distinctive facial features, upper limb anomalies, growth restriction, and intellectual disability."
  },

  // ===== PHARMACOGENOMICS (Q11–Q20) =====
  {
    id: 11,
    question: "CYP2D6 poor metabolizers are at increased risk of adverse effects from which drug?",
    options: ["Warfarin", "Codeine", "Clopidogrel", "Methotrexate"],
    answer: 1,
    explanation: "CYP2D6 converts codeine to its active metabolite morphine. However, poor metabolizers (PMs) have minimal CYP2D6 activity and derive little analgesic benefit from codeine. Conversely, ultra-rapid metabolizers (UMs) produce excessive morphine, risking respiratory depression — particularly dangerous in children, leading to FDA warnings. The question of adverse effects in PMs relates to lack of efficacy and potential accumulation of the parent drug."
  },
  {
    id: 12,
    question: "Warfarin dose requirements are significantly influenced by polymorphisms in which genes?",
    options: ["CYP2D6 and NAT2", "CYP2C9 and VKORC1", "CYP3A4 and MDR1", "UGT1A1 and DPYD"],
    answer: 1,
    explanation: "CYP2C9 metabolizes S-warfarin (the more potent enantiomer), and VKORC1 encodes vitamin K epoxide reductase (warfarin's target). Variants in CYP2C9 (*2, *3) reduce warfarin metabolism, while VKORC1 promoter variants affect expression levels. Together with clinical factors, these polymorphisms explain ~50% of warfarin dose variability and guide pharmacogenomic dosing algorithms."
  },
  {
    id: 13,
    question: "CYP2C19 poor metabolizer status is clinically important for which antiplatelet drug?",
    options: ["Aspirin", "Clopidogrel", "Ticagrelor", "Prasugrel"],
    answer: 1,
    explanation: "Clopidogrel is a prodrug that requires CYP2C19 (primarily) for conversion to its active thiol metabolite. Poor metabolizers have reduced active metabolite formation, resulting in inadequate platelet inhibition and increased cardiovascular event risk. FDA labeling includes a boxed warning about CYP2C19 poor metabolizers. Ticagrelor and prasugrel do not require CYP2C19 activation."
  },
  {
    id: 14,
    question: "Thiopurine methyltransferase (TPMT) genotyping is recommended before prescribing:",
    options: ["Metformin", "Azathioprine/6-mercaptopurine", "Tamoxifen", "Carbamazepine"],
    answer: 1,
    explanation: "TPMT catalyzes S-methylation of thiopurines (azathioprine, 6-mercaptopurine, thioguanine). Patients with reduced TPMT activity (heterozygous or homozygous for low-activity alleles) accumulate cytotoxic thioguanine nucleotides, causing severe myelosuppression. ~10% of the population are heterozygous (intermediate metabolizers) and ~0.3% are homozygous deficient (requiring major dose reduction)."
  },
  {
    id: 15,
    question: "HLA-B*15:02 testing is recommended before prescribing carbamazepine in Southeast Asian populations to prevent:",
    options: ["Hepatotoxicity", "Stevens-Johnson syndrome/toxic epidermal necrolysis (SJS/TEN)", "Aplastic anemia", "QT prolongation"],
    answer: 1,
    explanation: "HLA-B*15:02 is strongly associated with carbamazepine-induced SJS/TEN, a potentially fatal severe cutaneous adverse reaction. The association is particularly strong in Southeast Asian populations where the allele frequency is ~8%. FDA labeling recommends HLA-B*15:02 testing before initiating carbamazepine in patients with Southeast Asian ancestry."
  },
  {
    id: 16,
    question: "UGT1A1*28 (Gilbert syndrome allele) is associated with increased toxicity from:",
    options: ["Cyclophosphamide", "Irinotecan", "Doxorubicin", "Cisplatin"],
    answer: 1,
    explanation: "UGT1A1*28 is a promoter polymorphism (7 TA repeats instead of 6) causing reduced UGT1A1 expression. UGT1A1 glucuronidates SN-38, the active metabolite of irinotecan. Patients homozygous for UGT1A1*28 have impaired SN-38 clearance, leading to severe diarrhea and neutropenia. FDA labeling recommends dose reduction for these patients."
  },
  {
    id: 17,
    question: "DPYD deficiency increases the risk of severe toxicity from:",
    options: ["Methotrexate", "5-fluorouracil (5-FU) and capecitabine", "Vincristine", "Bleomycin"],
    answer: 1,
    explanation: "Dihydropyrimidine dehydrogenase (DPD, encoded by DPYD) is the rate-limiting enzyme in 5-FU catabolism. DPD-deficient patients cannot metabolize 5-FU adequately, leading to prolonged drug exposure and severe/fatal toxicity (myelosuppression, mucositis, neurotoxicity). Pre-treatment DPYD genotyping or phenotyping is increasingly recommended."
  },
  {
    id: 18,
    question: "The NAT2 acetylator phenotype affects the metabolism and toxicity of:",
    options: ["Warfarin", "Isoniazid", "Clopidogrel", "Codeine"],
    answer: 1,
    explanation: "NAT2 (N-acetyltransferase 2) polymorphisms determine acetylator status (slow, intermediate, rapid) for drugs like isoniazid, hydralazine, procainamide, and sulfonamides. Slow acetylators of isoniazid have increased risk of peripheral neuropathy and hepatotoxicity due to higher drug levels. Approximately 50-60% of Caucasians and African Americans are slow acetylators."
  },
  {
    id: 19,
    question: "Malignant hyperthermia susceptibility is most commonly caused by mutations in:",
    options: ["CACNA1S", "RYR1 (ryanodine receptor 1)", "SCN5A", "KCNQ1"],
    answer: 1,
    explanation: "Malignant hyperthermia (MH) is an autosomal dominant pharmacogenetic disorder triggered by volatile anesthetics (halothane, sevoflurane) and succinylcholine. Over 70% of cases are linked to RYR1 mutations causing uncontrolled calcium release from the sarcoplasmic reticulum, resulting in sustained muscle contraction, hyperthermia, rhabdomyolysis, and metabolic crisis. Dantrolene is the specific treatment."
  },
  {
    id: 20,
    question: "Pseudocholinesterase (butyrylcholinesterase) deficiency causes prolonged paralysis after administration of:",
    options: ["Vecuronium", "Succinylcholine", "Pancuronium", "Rocuronium"],
    answer: 1,
    explanation: "Succinylcholine is normally rapidly hydrolyzed by plasma cholinesterase (pseudocholinesterase/butyrylcholinesterase, encoded by BCHE). Individuals with atypical variants have reduced or absent enzyme activity, leading to prolonged neuromuscular blockade (hours instead of minutes) requiring extended mechanical ventilation. The dibucaine number test identifies variant genotypes."
  },

  // ===== GENOMICS & BIOINFORMATICS (Q21–Q30) =====
  {
    id: 21,
    question: "Whole exome sequencing (WES) targets approximately what percentage of the human genome?",
    options: ["~1-2% (protein-coding exons)", "~10%", "~50%", "100%"],
    answer: 0,
    explanation: "WES targets the protein-coding exons, which comprise only ~1-2% of the human genome (~30 Mb) but contain approximately 85% of known disease-causing mutations. WES is more cost-effective than whole genome sequencing (WGS) for identifying coding variants, though it misses intronic, regulatory, and structural variants detectable by WGS."
  },
  {
    id: 22,
    question: "A variant of uncertain significance (VUS) in genetic testing means:",
    options: ["The variant is definitely pathogenic", "The variant is definitely benign", "There is insufficient evidence to classify the variant as pathogenic or benign", "The test has failed"],
    answer: 2,
    explanation: "According to ACMG/AMP guidelines, VUS indicates insufficient evidence to classify a variant as pathogenic or benign. VUS should not be used for clinical decision-making. Reclassification may occur as more evidence accumulates (family segregation, functional studies, population data). Periodic re-analysis of VUS is recommended."
  },
  {
    id: 23,
    question: "The ACMG/AMP variant classification system uses how many categories?",
    options: ["3 (pathogenic, uncertain, benign)", "5 (pathogenic, likely pathogenic, VUS, likely benign, benign)", "2 (pathogenic, benign)", "7 categories"],
    answer: 1,
    explanation: "The ACMG/AMP (2015) guidelines classify sequence variants into five categories: pathogenic, likely pathogenic, variant of uncertain significance (VUS), likely benign, and benign. Classification is based on multiple criteria including population frequency, computational predictions, functional data, segregation, and de novo status. 'Likely' indicates >90% certainty."
  },
  {
    id: 24,
    question: "Copy number variants (CNVs) can be detected by all of the following EXCEPT:",
    options: ["Chromosomal microarray (CMA)", "Whole genome sequencing (WGS)", "Sanger sequencing of individual exons", "Multiplex ligation-dependent probe amplification (MLPA)"],
    answer: 2,
    explanation: "Sanger sequencing reads the nucleotide sequence of a specific region but cannot reliably detect copy number changes (deletions/duplications) because it sequences one allele at a time and is not quantitative. CMA, WGS, and MLPA are all designed to detect dosage/copy number changes across genomic regions."
  },
  {
    id: 25,
    question: "Long-read sequencing technologies (PacBio, Oxford Nanopore) are particularly advantageous for:",
    options: ["Lower cost per base than short-read sequencing", "Detecting structural variants and resolving repetitive regions", "Higher per-base accuracy than Illumina", "Sequencing only coding regions"],
    answer: 1,
    explanation: "Long-read sequencing generates reads of 10-100+ kb, enabling detection of structural variants, phasing of haplotypes, resolving tandem repeats, and spanning complex genomic regions that are difficult for short-read platforms (~150-300 bp reads). This is particularly valuable for trinucleotide repeat disorders, complex rearrangements, and de novo genome assembly."
  },
  {
    id: 26,
    question: "GWAS (genome-wide association studies) identify genetic variants associated with complex traits by:",
    options: ["Sequencing entire genomes of affected individuals", "Genotyping common SNPs across the genome in large case-control cohorts", "Performing linkage analysis in families", "Using CRISPR to knock out candidate genes"],
    answer: 1,
    explanation: "GWAS genotype hundreds of thousands to millions of common SNPs (typically with MAF >1%) using microarrays in large populations of cases and controls. Statistical association between SNPs and phenotype identifies risk loci. GWAS have identified thousands of loci for complex diseases but typically explain only a small fraction of heritability (the 'missing heritability' problem)."
  },
  {
    id: 27,
    question: "Polygenic risk scores (PRS) are used to:",
    options: ["Diagnose Mendelian disorders", "Estimate an individual's genetic susceptibility to complex diseases based on many common variants", "Identify de novo mutations", "Perform prenatal diagnosis"],
    answer: 1,
    explanation: "PRS aggregate the effects of many common genetic variants (often thousands to millions of SNPs from GWAS) into a single score estimating an individual's genetic predisposition to a complex trait or disease. PRS are being explored for risk stratification in cardiovascular disease, breast cancer, and type 2 diabetes, though their clinical utility and equity across ancestries remain debated."
  },
  {
    id: 28,
    question: "RNA sequencing (RNA-seq) is used in clinical genetics to:",
    options: ["Detect germline DNA mutations only", "Identify aberrant splicing, expression outliers, and allele-specific expression to aid variant interpretation", "Replace DNA-based genetic testing entirely", "Sequence mitochondrial DNA exclusively"],
    answer: 1,
    explanation: "RNA-seq in clinical genetics can identify pathogenic variants missed by DNA sequencing alone, including aberrant splicing events, mono-allelic expression (suggesting a null allele), expression outliers, and novel fusion transcripts. Studies have shown RNA-seq increases diagnostic yield by 10-35% in patients with suspected Mendelian disorders undiagnosed by WES/WGS."
  },
  {
    id: 29,
    question: "Optical genome mapping (OGM) is a newer technology that detects:",
    options: ["Only single nucleotide variants", "Structural variants, including balanced rearrangements, with high resolution", "RNA expression levels", "Epigenetic modifications only"],
    answer: 1,
    explanation: "Optical genome mapping labels ultra-long DNA molecules (>150 kb) at specific sequence motifs, creating a barcode-like pattern. By comparing these patterns to a reference, OGM can detect structural variants (translocations, inversions, insertions, deletions, duplications) including balanced rearrangements that are missed by CMA. It is emerging as a complement to or replacement for conventional cytogenetics."
  },
  {
    id: 30,
    question: "The gnomAD database is used in variant interpretation to assess:",
    options: ["Functional impact of variants in model organisms", "Population allele frequencies across diverse ancestries", "Gene expression levels in different tissues", "Protein-protein interactions"],
    answer: 1,
    explanation: "gnomAD (Genome Aggregation Database) provides allele frequency data from >140,000 exomes and >76,000 genomes across diverse populations. Variants observed at high frequency in gnomAD are unlikely to be pathogenic for rare Mendelian disorders (BA1 criterion: allele frequency >5% is considered benign). It is an essential resource for clinical variant interpretation."
  },

  // ===== GENETIC ETHICS, LAW & SPECIAL TOPICS (Q31–Q40) =====
  {
    id: 31,
    question: "The principle of autonomy in genetics means:",
    options: ["The physician decides the best course of action", "The patient has the right to make informed decisions about genetic testing and its consequences", "Genetic information should be kept from the patient", "Family members have the right to access patient's genetic results"],
    answer: 1,
    explanation: "Autonomy is a fundamental ethical principle in genetics requiring that individuals make their own informed, voluntary decisions about genetic testing, including the right to know or not to know their results. This is particularly important for predictive testing for untreatable conditions (e.g., Huntington disease) where individuals may choose not to be tested."
  },
  {
    id: 32,
    question: "The duty to warn at-risk relatives about heritable conditions creates a conflict between:",
    options: ["Beneficence and autonomy", "Patient confidentiality and duty to prevent harm to relatives", "Justice and nonmaleficence", "Informed consent and competence"],
    answer: 1,
    explanation: "When a patient refuses to disclose genetic results to at-risk relatives who could benefit from testing/surveillance, healthcare providers face a conflict between patient confidentiality (privacy rights) and the duty to warn/prevent harm to identifiable third parties. Professional guidelines generally favor patient confidentiality but recognize exceptional circumstances where disclosure may be justified."
  },
  {
    id: 33,
    question: "Incidental (secondary) findings in genomic sequencing refer to:",
    options: ["Failed sequencing reactions", "Pathogenic variants in genes unrelated to the primary indication for testing", "Variants of uncertain significance", "Technical artifacts in sequencing data"],
    answer: 1,
    explanation: "Incidental/secondary findings are pathogenic or likely pathogenic variants discovered in genes unrelated to the primary reason for sequencing. ACMG recommends reporting secondary findings in a curated list of ~78 genes (ACMG SF v3.2) associated with medically actionable conditions (hereditary cancer, cardiac conditions, etc.), with patient opt-out option."
  },
  {
    id: 34,
    question: "Mosaicism is particularly important in genetic counseling because:",
    options: ["It always causes more severe disease", "Recurrence risk may be higher than expected if a parent has germline mosaicism", "It only occurs in males", "It cannot be detected by any genetic test"],
    answer: 1,
    explanation: "Germline (gonadal) mosaicism means a pathogenic variant is present in a proportion of a parent's germ cells but not in somatic cells (so the parent appears unaffected). This means apparently de novo mutations may recur in subsequent pregnancies, with empiric recurrence risks of 1-7% depending on the disorder. This is important for conditions like Duchenne muscular dystrophy and osteogenesis imperfecta."
  },
  {
    id: 35,
    question: "Reduced penetrance in autosomal dominant disorders means:",
    options: ["All carriers show symptoms", "Some individuals with the pathogenic variant do not manifest clinical features", "The condition requires two mutant alleles", "The condition is X-linked"],
    answer: 1,
    explanation: "Reduced (incomplete) penetrance means that not all individuals carrying a pathogenic variant in a dominant disorder develop clinical manifestations. Penetrance is expressed as a percentage — e.g., BRCA1 has ~60-80% penetrance for breast cancer. Factors affecting penetrance include modifier genes, epigenetics, and environmental influences. This complicates genetic counseling and risk assessment."
  },
  {
    id: 36,
    question: "Genetic discrimination protections under GINA do NOT extend to:",
    options: ["Health insurance", "Employment", "Life insurance and long-term care insurance", "Group health plans"],
    answer: 2,
    explanation: "GINA (2008) specifically prohibits genetic discrimination in health insurance and employment. However, it does NOT cover life insurance, disability insurance, or long-term care insurance. This gap means individuals with known pathogenic variants may face discrimination in these areas, which can influence decisions about whether to undergo predictive genetic testing."
  },
  {
    id: 37,
    question: "Direct-to-consumer (DTC) genetic testing raises concerns about:",
    options: ["Only the cost of testing", "Accuracy of health-related claims, consumer misinterpretation, and lack of genetic counseling", "Government surveillance", "Patent infringement"],
    answer: 1,
    explanation: "DTC genetic testing concerns include: variable analytical validity and clinical validity, consumer misinterpretation of results (especially risk probabilities), limited SNP panels that miss most pathogenic variants, psychological impact without genetic counseling support, privacy/data sharing issues, and potential for unnecessary medical follow-up or false reassurance."
  },
  {
    id: 38,
    question: "Uniparental disomy should be suspected when:",
    options: ["A child has a de novo mutation", "A child with an autosomal recessive condition has only one carrier parent", "Both parents are carriers", "A child has a chromosomal translocation"],
    answer: 1,
    explanation: "If a child is affected with an autosomal recessive condition but only one parent is a carrier, UPD of the chromosome carrying the mutant allele from the carrier parent should be considered. The child inherited both copies of that chromosome from the carrier parent (isodisomy), becoming homozygous for the recessive mutation without the other parent contributing a mutant allele."
  },
  {
    id: 39,
    question: "Epigenetic therapy with DNA methyltransferase inhibitors (azacitidine, decitabine) is used to treat:",
    options: ["Sickle cell disease", "Myelodysplastic syndromes (MDS)", "Huntington disease", "Cystic fibrosis"],
    answer: 1,
    explanation: "Azacitidine and decitabine are nucleoside analogs that inhibit DNA methyltransferases, leading to global DNA hypomethylation and re-expression of silenced tumor suppressor genes. They are FDA-approved for treatment of MDS and are also used in AML. They represent one of the first clinically successful epigenetic therapies in cancer."
  },
  {
    id: 40,
    question: "Trinucleotide repeat primed PCR (TP-PCR) is specifically designed to detect:",
    options: ["Point mutations", "Large deletions", "Expanded trinucleotide repeats", "Chromosomal translocations"],
    answer: 2,
    explanation: "TP-PCR uses a repeat-specific primer in combination with flanking primers to generate a characteristic ladder pattern on capillary electrophoresis when expanded repeats are present. It is particularly useful for screening for trinucleotide repeat expansions (Fragile X, Huntington disease, myotonic dystrophy) and can detect expanded alleles that may be missed by standard PCR due to preferential amplification of the normal allele."
  },

  // ===== COMPLEX & MULTIFACTORIAL GENETICS (Q41–Q50) =====
  {
    id: 41,
    question: "Heritability (h²) of a trait represents:",
    options: ["The probability of inheriting the trait", "The proportion of phenotypic variation attributable to genetic variation in a population", "The number of genes involved", "The recurrence risk for first-degree relatives"],
    answer: 1,
    explanation: "Heritability (h², narrow-sense) is the proportion of total phenotypic variance in a population that is due to additive genetic variance. It ranges from 0 to 1. High heritability (e.g., height ~0.8) means genetic factors explain most of the phenotypic variation, but it does NOT mean the trait is not influenced by environment — heritability is a population statistic, not an individual measure."
  },
  {
    id: 42,
    question: "The liability threshold model explains the inheritance of:",
    options: ["Autosomal dominant disorders", "X-linked recessive disorders", "Multifactorial disorders with discontinuous phenotypes", "Mitochondrial disorders"],
    answer: 2,
    explanation: "The liability threshold model proposes that liability to multifactorial disorders (e.g., cleft palate, pyloric stenosis, neural tube defects) is continuously distributed in the population but disease manifests only when liability exceeds a threshold. Both genetic and environmental factors contribute to liability. The model explains why these disorders cluster in families but do not follow Mendelian ratios."
  },
  {
    id: 43,
    question: "Twin studies estimate heritability by comparing concordance rates in:",
    options: ["Identical twins raised apart versus together", "Monozygotic (identical) versus dizygotic (fraternal) twins", "Twins versus non-twin siblings", "Adopted twins versus biological twins"],
    answer: 1,
    explanation: "Monozygotic (MZ) twins share 100% of their DNA, while dizygotic (DZ) twins share ~50%. Higher concordance in MZ versus DZ twins suggests genetic contribution. Heritability can be estimated as 2(MZ concordance - DZ concordance). MZ twins raised apart provide the strongest evidence, controlling for shared environment."
  },
  {
    id: 44,
    question: "Gene-environment interaction means:",
    options: ["Genes and environment independently affect the phenotype", "The effect of a genotype on phenotype depends on the environmental exposure", "Only the environment determines the phenotype", "Only genes determine the phenotype"],
    answer: 1,
    explanation: "Gene-environment interaction (GxE) occurs when the phenotypic effect of a genotype differs depending on environmental exposure. For example, PKU (phenylalanine hydroxylase deficiency) only causes intellectual disability with phenylalanine-containing diet. Similarly, fair-skinned individuals (MC1R variants) have higher melanoma risk with UV exposure than dark-skinned individuals."
  },
  {
    id: 45,
    question: "Epistasis in genetics refers to:",
    options: ["One gene masking or modifying the effect of another gene", "A single gene affecting multiple phenotypes", "Environmental modification of gene expression", "Codominant expression of alleles"],
    answer: 0,
    explanation: "Epistasis occurs when the phenotypic effect of one gene is modified by one or more other genes (modifier genes). For example, the phenotype of the BBS1 gene in Bardet-Biedl syndrome can be modified by variants in other BBS genes. Epistasis is distinct from pleiotropy (one gene affecting multiple traits) and is important in the genetic architecture of complex diseases."
  },
  {
    id: 46,
    question: "The 'missing heritability' problem in complex diseases refers to:",
    options: ["Inability to identify any genetic variants", "GWAS-identified common variants explaining only a small fraction of estimated heritability", "Missing DNA in patient samples", "Failure of Mendelian inheritance patterns"],
    answer: 1,
    explanation: "Despite identifying thousands of disease-associated loci, GWAS-identified common variants typically explain only 10-30% of the estimated heritability for most complex traits. The remaining heritability may be attributed to rare variants, structural variants, gene-gene interactions, gene-environment interactions, epigenetic factors, and limitations in heritability estimation methods."
  },
  {
    id: 47,
    question: "Modifier genes influence the phenotype of a primary disease gene by:",
    options: ["Causing a completely different disease", "Altering the severity, age of onset, or specific features of the primary condition", "Replacing the mutant gene", "Causing chromosomal instability"],
    answer: 1,
    explanation: "Modifier genes do not cause disease independently but alter the clinical expression of another disease gene. For example, in cystic fibrosis, variants in TGFB1, MBL2, and other modifier genes influence lung disease severity. In sickle cell disease, variants affecting fetal hemoglobin levels (BCL11A, HBS1L-MYB) modify disease severity. Modifier genes explain some of the phenotypic variability in Mendelian disorders."
  },
  {
    id: 48,
    question: "Genome-wide significance threshold in GWAS is typically set at:",
    options: ["p < 0.05", "p < 0.001", "p < 5 × 10⁻⁸", "p < 1 × 10⁻³"],
    answer: 2,
    explanation: "The genome-wide significance threshold of p < 5 × 10⁻⁸ accounts for multiple testing correction across approximately 1 million independent common variants in the human genome (Bonferroni correction: 0.05/1,000,000). This stringent threshold minimizes false-positive associations but requires large sample sizes to detect variants with small effect sizes."
  },
  {
    id: 49,
    question: "Mendelian randomization uses genetic variants as 'instruments' to:",
    options: ["Diagnose Mendelian disorders", "Infer causal relationships between exposures and outcomes using observational data", "Perform gene therapy", "Identify de novo mutations"],
    answer: 1,
    explanation: "Mendelian randomization (MR) uses genetic variants associated with a modifiable exposure (e.g., LDL cholesterol levels) as instrumental variables to estimate the causal effect of that exposure on a health outcome (e.g., coronary artery disease). Because alleles are randomly allocated at conception, MR can mimic randomized controlled trials using observational genetic data, reducing confounding bias."
  },
  {
    id: 50,
    question: "Oligogenic inheritance refers to a condition caused by:",
    options: ["A single gene mutation", "Mutations in a small number of genes (2-5) acting together", "Hundreds of genes with small effects", "Environmental factors only"],
    answer: 1,
    explanation: "Oligogenic inheritance involves pathogenic variants in a small number of genes (typically 2-5) whose combined effects are necessary and sufficient to cause disease. Bardet-Biedl syndrome is a classic example, where mutations in two or three BBS genes may be required for full phenotypic expression (triallelic inheritance model). Oligogenic inheritance bridges the gap between Mendelian and complex polygenic disorders."
  }
]

export default questions
