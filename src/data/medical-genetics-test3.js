const questions = [
  // ===== INBORN ERRORS OF METABOLISM (Q1–Q10) =====
  {
    id: 1,
    question: "Galactosemia is caused by deficiency of which enzyme?",
    options: ["Galactokinase", "Galactose-1-phosphate uridylyltransferase", "UDP-galactose-4-epimerase", "Lactase"],
    answer: 1,
    explanation: "Classic galactosemia is caused by deficiency of galactose-1-phosphate uridylyltransferase (GALT), leading to accumulation of galactose-1-phosphate. It presents in neonates with feeding difficulties, jaundice, hepatomegaly, E. coli sepsis, and cataracts. Treatment requires lifelong galactose-free diet."
  },
  {
    id: 2,
    question: "Maple syrup urine disease (MSUD) results from deficiency of:",
    options: ["Phenylalanine hydroxylase", "Branched-chain alpha-ketoacid dehydrogenase complex", "Homogentisic acid oxidase", "Cystathionine beta-synthase"],
    answer: 1,
    explanation: "MSUD is caused by deficiency of the branched-chain alpha-ketoacid dehydrogenase (BCKD) complex, which is required for oxidative decarboxylation of branched-chain amino acids (leucine, isoleucine, valine). Accumulation of these amino acids and their ketoacids causes the characteristic maple syrup odor of urine, encephalopathy, and metabolic crises."
  },
  {
    id: 3,
    question: "Which lysosomal storage disorder features a cherry-red spot on fundoscopy?",
    options: ["Gaucher disease", "Fabry disease", "Tay-Sachs disease", "Hunter syndrome"],
    answer: 2,
    explanation: "Tay-Sachs disease (GM2 gangliosidosis type I) characteristically shows a cherry-red spot on the macula. This occurs because GM2 ganglioside accumulates in retinal ganglion cells surrounding the fovea, making them appear pale, while the fovea itself (which lacks ganglion cells) appears red. Niemann-Pick type A also shows cherry-red spots."
  },
  {
    id: 4,
    question: "Alkaptonuria is caused by deficiency of:",
    options: ["Phenylalanine hydroxylase", "Tyrosinase", "Homogentisic acid oxidase", "Fumarylacetoacetate hydrolase"],
    answer: 2,
    explanation: "Alkaptonuria results from deficiency of homogentisic acid oxidase in the tyrosine degradation pathway. Accumulation of homogentisic acid causes dark urine (upon standing/alkalinization), ochronosis (blue-black pigmentation of cartilage and connective tissue), and degenerative arthropathy. It was one of the first inborn errors of metabolism described by Archibald Garrod in 1902."
  },
  {
    id: 5,
    question: "Pompe disease (glycogen storage disease type II) is caused by deficiency of:",
    options: ["Glucose-6-phosphatase", "Acid alpha-glucosidase (acid maltase)", "Debranching enzyme", "Myophosphorylase"],
    answer: 1,
    explanation: "Pompe disease is a lysosomal storage disorder caused by deficiency of acid alpha-glucosidase (GAA), leading to glycogen accumulation in lysosomes, particularly in cardiac and skeletal muscle. Infantile-onset form presents with severe cardiomyopathy and hypotonia. Enzyme replacement therapy with alglucosidase alfa (Myozyme) has improved outcomes."
  },
  {
    id: 6,
    question: "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency presents with:",
    options: ["Chronic liver disease", "Hypoketotic hypoglycemia during fasting", "Progressive neurodegeneration", "Renal tubular acidosis"],
    answer: 1,
    explanation: "MCAD deficiency is the most common fatty acid oxidation disorder. It presents with hypoketotic hypoglycemia during fasting or illness because medium-chain fatty acids cannot be oxidized for energy or ketone body production. It can cause sudden infant death if undiagnosed. Newborn screening by tandem mass spectrometry detects elevated octanoylcarnitine (C8)."
  },
  {
    id: 7,
    question: "Homocystinuria (classic form) is caused by deficiency of:",
    options: ["Methionine synthase", "Cystathionine beta-synthase", "MTHFR", "Phenylalanine hydroxylase"],
    answer: 1,
    explanation: "Classic homocystinuria is caused by deficiency of cystathionine beta-synthase (CBS), which converts homocysteine to cystathionine in the transsulfuration pathway. Accumulation of homocysteine causes lens subluxation (downward), Marfanoid habitus, intellectual disability, osteoporosis, and thromboembolism. Some patients respond to pyridoxine (vitamin B6, a CBS cofactor)."
  },
  {
    id: 8,
    question: "Wilson disease involves abnormal metabolism of which element?",
    options: ["Iron", "Copper", "Zinc", "Manganese"],
    answer: 1,
    explanation: "Wilson disease is an autosomal recessive disorder caused by mutations in ATP7B, a copper-transporting ATPase. Defective copper excretion into bile leads to copper accumulation in the liver (cirrhosis), brain (basal ganglia — movement disorders, psychiatric symptoms), and cornea (Kayser-Fleischer rings). Treatment includes copper chelation (penicillamine) and zinc supplementation."
  },
  {
    id: 9,
    question: "Von Gierke disease (glycogen storage disease type I) is characterized by:",
    options: ["Cardiomyopathy", "Hepatomegaly with fasting hypoglycemia and lactic acidosis", "Myopathy with exercise intolerance", "Progressive neurodegeneration"],
    answer: 1,
    explanation: "Von Gierke disease (GSD type I) is caused by deficiency of glucose-6-phosphatase. The liver cannot release free glucose from glycogenolysis or gluconeogenesis, causing severe fasting hypoglycemia, hepatomegaly (glycogen and fat accumulation), lactic acidosis, hyperuricemia, and hyperlipidemia. Treatment requires frequent feedings and cornstarch supplementation."
  },
  {
    id: 10,
    question: "Niemann-Pick disease type A is caused by deficiency of:",
    options: ["Hexosaminidase A", "Sphingomyelinase", "Glucocerebrosidase", "Alpha-galactosidase A"],
    answer: 1,
    explanation: "Niemann-Pick disease type A results from severe deficiency of acid sphingomyelinase, leading to accumulation of sphingomyelin in macrophages (foam cells) throughout the reticuloendothelial system and neurons. It presents in infancy with hepatosplenomegaly, failure to thrive, progressive neurodegeneration, cherry-red spot, and is fatal by age 2-3 years."
  },

  // ===== CONNECTIVE TISSUE & SKELETAL GENETICS (Q11–Q20) =====
  {
    id: 11,
    question: "Osteogenesis imperfecta (OI) type I is most commonly caused by mutations in genes encoding:",
    options: ["Fibrillin-1", "Type I collagen (COL1A1/COL1A2)", "Elastin", "Type II collagen"],
    answer: 1,
    explanation: "OI type I (mildest form) is most commonly caused by autosomal dominant null mutations in COL1A1, producing half the normal amount of structurally normal type I collagen (quantitative defect). Features include bone fragility, blue sclerae, and hearing loss. Severe forms (types II-IV) often result from structural collagen defects (qualitative mutations)."
  },
  {
    id: 12,
    question: "Achondroplasia is caused by a gain-of-function mutation in:",
    options: ["COL1A1", "FGFR3 (fibroblast growth factor receptor 3)", "SHH (Sonic hedgehog)", "GDF5"],
    answer: 1,
    explanation: "Achondroplasia is the most common form of short-limbed dwarfism, caused by a recurrent gain-of-function mutation (G380R) in FGFR3. The constitutively active FGFR3 inhibits chondrocyte proliferation and endochondral ossification. Over 80% of cases arise from de novo mutations, with advanced paternal age as a risk factor."
  },
  {
    id: 13,
    question: "Ehlers-Danlos syndrome (classical type) is characterized by:",
    options: ["Bone fragility", "Joint hypermobility and skin hyperextensibility", "Short stature", "Lens subluxation"],
    answer: 1,
    explanation: "Classical Ehlers-Danlos syndrome (types I and II) is caused by mutations in COL5A1 or COL5A2 (type V collagen). Features include marked skin hyperextensibility, atrophic scarring, easy bruising, and generalized joint hypermobility. The vascular type (type IV, COL3A1) is the most dangerous, with risk of arterial and organ rupture."
  },
  {
    id: 14,
    question: "Thanatophoric dysplasia, the most common lethal skeletal dysplasia, is caused by mutations in:",
    options: ["COL2A1", "FGFR3", "SOX9", "RUNX2"],
    answer: 1,
    explanation: "Thanatophoric dysplasia is caused by severe gain-of-function mutations in FGFR3 (different mutations than achondroplasia). It is characterized by extreme shortening of limbs, narrow thorax causing respiratory insufficiency, macrocephaly with frontal bossing, and is almost invariably lethal in the neonatal period."
  },
  {
    id: 15,
    question: "Cleidocranial dysplasia, featuring absent or hypoplastic clavicles and delayed fontanelle closure, is caused by mutations in:",
    options: ["FGFR3", "RUNX2 (CBFA1)", "SOX9", "COL1A1"],
    answer: 1,
    explanation: "Cleidocranial dysplasia is an autosomal dominant condition caused by mutations in RUNX2 (also called CBFA1), a transcription factor essential for osteoblast differentiation and bone formation. Features include aplastic/hypoplastic clavicles (allowing approximation of shoulders), wide-open fontanelles/sutures, supernumerary teeth, and short stature."
  },
  {
    id: 16,
    question: "Stickler syndrome is characterized by vitreous abnormalities, retinal detachment, and early-onset osteoarthritis. It is caused by mutations in genes encoding:",
    options: ["Type I collagen", "Type II collagen (COL2A1) and related collagens", "Fibrillin-1", "Type IV collagen"],
    answer: 1,
    explanation: "Stickler syndrome (hereditary arthro-ophthalmopathy) is most commonly caused by mutations in COL2A1 (type II collagen), which is a major component of vitreous humor and cartilage. Features include vitreous anomalies, retinal detachment risk, myopia, sensorineural hearing loss, midface hypoplasia, cleft palate, and early-onset arthropathy."
  },
  {
    id: 17,
    question: "Pseudoachondroplasia differs from achondroplasia in that:",
    options: ["It is caused by FGFR3 mutations", "Patients have normal facial features and the mutation is in COMP", "It is always lethal", "It follows X-linked inheritance"],
    answer: 1,
    explanation: "Pseudoachondroplasia is caused by mutations in COMP (cartilage oligomeric matrix protein) and follows autosomal dominant inheritance. Unlike achondroplasia, facial features are normal (no frontal bossing or midface hypoplasia), intelligence is normal, and the phenotype is not apparent until age 2-3. Both conditions cause short-limbed dwarfism."
  },
  {
    id: 18,
    question: "Loeys-Dietz syndrome, which has phenotypic overlap with Marfan syndrome, is caused by mutations in:",
    options: ["FBN1", "TGFBR1 or TGFBR2", "COL3A1", "ACTA2"],
    answer: 1,
    explanation: "Loeys-Dietz syndrome is caused by mutations in TGF-beta receptor genes (TGFBR1 or TGFBR2), leading to dysregulated TGF-beta signaling. It shares features with Marfan syndrome (aortic aneurysm, skeletal abnormalities) but is distinguished by hypertelorism, bifid uvula/cleft palate, and arterial tortuosity. Aortic dissection can occur at smaller diameters than in Marfan."
  },
  {
    id: 19,
    question: "Hereditary hemochromatosis (type 1) is caused by mutations in which gene?",
    options: ["HFE", "TFR2", "SLC40A1", "HAMP"],
    answer: 0,
    explanation: "Type 1 hereditary hemochromatosis is an autosomal recessive disorder caused by mutations in the HFE gene (most commonly C282Y homozygosity). HFE normally modulates iron absorption by interacting with transferrin receptor and hepcidin regulation. Defective HFE leads to excessive intestinal iron absorption and iron deposition in liver, heart, pancreas, and joints."
  },
  {
    id: 20,
    question: "Apert syndrome (craniosynostosis with syndactyly) is caused by mutations in:",
    options: ["FGFR1", "FGFR2", "FGFR3", "TWIST1"],
    answer: 1,
    explanation: "Apert syndrome is caused by specific gain-of-function mutations in FGFR2 (Ser252Trp or Pro253Arg). It features severe craniosynostosis (coronal sutures), midface hypoplasia, and symmetric syndactyly of hands and feet (mitten hands). Nearly all cases are de novo mutations, with advanced paternal age as a risk factor."
  },

  // ===== NEUROGENETICS (Q21–Q30) =====
  {
    id: 21,
    question: "Fragile X syndrome is caused by expansion of which trinucleotide repeat?",
    options: ["CAG repeat in HTT", "CTG repeat in DMPK", "CGG repeat in FMR1", "GAA repeat in FXN"],
    answer: 2,
    explanation: "Fragile X syndrome results from expansion of CGG repeats in the 5'-UTR of the FMR1 gene on Xq27.3. Full mutation (>200 repeats) causes hypermethylation and silencing of FMR1, leading to absence of FMRP protein. It is the most common inherited cause of intellectual disability and autism. Males are more severely affected due to hemizygosity."
  },
  {
    id: 22,
    question: "Friedreich ataxia is caused by a GAA trinucleotide repeat expansion in the gene encoding:",
    options: ["Huntingtin", "Frataxin", "Ataxin-1", "Dystrophin"],
    answer: 1,
    explanation: "Friedreich ataxia is an autosomal recessive disorder caused by GAA repeat expansion in intron 1 of the FXN gene encoding frataxin. The expansion causes heterochromatin formation and reduced frataxin expression. Frataxin is a mitochondrial protein involved in iron-sulfur cluster assembly. Features include progressive ataxia, cardiomyopathy, and diabetes."
  },
  {
    id: 23,
    question: "Spinal muscular atrophy (SMA) type I (Werdnig-Hoffmann disease) is caused by:",
    options: ["Trinucleotide repeat expansion in SMN1", "Homozygous deletion or mutation of SMN1", "Mutation in dystrophin gene", "Mitochondrial DNA mutation"],
    answer: 1,
    explanation: "SMA is an autosomal recessive disorder caused by homozygous deletion (95%) or point mutation of SMN1 on chromosome 5q13. Loss of SMN1 leads to degeneration of alpha motor neurons in the anterior horn of the spinal cord. SMA type I is the most severe form, with onset before 6 months and death usually by age 2 without treatment."
  },
  {
    id: 24,
    question: "Myotonic dystrophy type 1 (DM1) is caused by CTG repeat expansion in which gene?",
    options: ["FMR1", "DMPK", "HTT", "ATXN1"],
    answer: 1,
    explanation: "DM1 is caused by CTG repeat expansion in the 3'-UTR of the DMPK gene on chromosome 19q13.3. The expanded repeat is transcribed into CUG-repeat RNA that forms nuclear foci and sequesters RNA-binding proteins (particularly MBNL1), causing widespread splicing dysregulation. DM1 shows marked anticipation, especially with maternal transmission (congenital DM1)."
  },
  {
    id: 25,
    question: "Charcot-Marie-Tooth disease type 1A (CMT1A) is most commonly caused by:",
    options: ["Point mutation in MPZ", "Duplication of PMP22 gene on chromosome 17p", "Deletion of PMP22", "Mutation in MFN2"],
    answer: 1,
    explanation: "CMT1A, the most common form of hereditary motor and sensory neuropathy, is caused by a 1.5 Mb duplication on chromosome 17p12 containing the PMP22 gene. Overexpression of PMP22 (a myelin protein) disrupts Schwann cell myelination. The reciprocal deletion of PMP22 causes hereditary neuropathy with liability to pressure palsies (HNPP)."
  },
  {
    id: 26,
    question: "Tuberous sclerosis complex (TSC) is caused by mutations in TSC1 or TSC2, which encode:",
    options: ["Receptor tyrosine kinases", "Hamartin and tuberin (mTOR pathway inhibitors)", "DNA repair enzymes", "Ion channel subunits"],
    answer: 1,
    explanation: "TSC1 encodes hamartin and TSC2 encodes tuberin. Together, the hamartin-tuberin complex inhibits mTORC1 signaling, acting as a tumor suppressor. Loss of function leads to constitutive mTOR activation, resulting in hamartomas in multiple organs (brain tubers, subependymal giant cell astrocytomas, renal angiomyolipomas, cardiac rhabdomyomas, skin lesions). mTOR inhibitors (everolimus) are therapeutic."
  },
  {
    id: 27,
    question: "Neurofibromatosis type 2 (NF2) characteristically presents with:",
    options: ["Cafe-au-lait spots and axillary freckling", "Bilateral vestibular schwannomas", "Ash-leaf spots and cortical tubers", "Progressive cerebellar ataxia"],
    answer: 1,
    explanation: "NF2 is an autosomal dominant disorder caused by mutations in the NF2 gene (merlin/schwannomin) on chromosome 22q12. The hallmark is bilateral vestibular schwannomas (acoustic neuromas). Other features include meningiomas, spinal schwannomas, and posterior subcapsular cataracts. NF2 is distinct from NF1 (chromosome 17q, cafe-au-lait spots, neurofibromas)."
  },
  {
    id: 28,
    question: "Spinocerebellar ataxias (SCAs) most commonly involve expansion of which repeat?",
    options: ["CGG", "CTG", "CAG (polyglutamine)", "GAA"],
    answer: 2,
    explanation: "Most spinocerebellar ataxias (SCA1, SCA2, SCA3/MJD, SCA6, SCA7, SCA17) are caused by CAG trinucleotide repeat expansions encoding polyglutamine tracts in their respective proteins. The expanded polyglutamine tracts cause protein misfolding and aggregation, leading to dominant gain-of-function toxicity in cerebellar Purkinje cells and other neurons."
  },
  {
    id: 29,
    question: "MELAS syndrome (Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes) is most commonly caused by:",
    options: ["Nuclear gene mutation", "m.3243A>G mutation in MT-TL1 (tRNA-Leu)", "Large mitochondrial DNA deletion", "m.8344A>G mutation"],
    answer: 1,
    explanation: "MELAS is most commonly (80%) caused by the m.3243A>G point mutation in the MT-TL1 gene encoding mitochondrial tRNA-Leucine (UUR). This impairs mitochondrial protein synthesis and oxidative phosphorylation. Clinical features include stroke-like episodes before age 40, seizures, lactic acidosis, and ragged red fibers on muscle biopsy. The m.8344A>G mutation causes MERRF syndrome."
  },
  {
    id: 30,
    question: "Wilson disease presenting with neuropsychiatric symptoms involves copper deposition primarily in the:",
    options: ["Cerebral cortex", "Cerebellum", "Basal ganglia (lenticular nucleus)", "Spinal cord"],
    answer: 2,
    explanation: "In Wilson disease, excess copper deposits preferentially in the lenticular nucleus (putamen and globus pallidus) of the basal ganglia. This causes movement disorders including dystonia, tremor (wing-beating tremor), dysarthria, and parkinsonism. Psychiatric manifestations (personality changes, depression, psychosis) may precede neurological symptoms."
  },

  // ===== IMMUNOGENETICS (Q31–Q40) =====
  {
    id: 31,
    question: "Severe combined immunodeficiency (SCID) most commonly results from mutations in:",
    options: ["BTK gene", "IL2RG gene (common gamma chain)", "AIRE gene", "FOXP3 gene"],
    answer: 1,
    explanation: "X-linked SCID, the most common form (~50%), is caused by mutations in IL2RG encoding the common gamma chain shared by receptors for IL-2, IL-4, IL-7, IL-9, IL-15, and IL-21. Loss of IL-7 signaling prevents T-cell development, and loss of IL-15 signaling impairs NK cell development. B cells are present but nonfunctional (T-B+NK- SCID)."
  },
  {
    id: 32,
    question: "X-linked agammaglobulinemia (Bruton disease) is caused by mutations in:",
    options: ["IL2RG", "BTK (Bruton tyrosine kinase)", "RAG1", "WAS"],
    answer: 1,
    explanation: "Bruton agammaglobulinemia is caused by mutations in BTK on Xq22, which is essential for pre-B cell receptor signaling and B-cell maturation. Affected males have absent or markedly reduced B cells and immunoglobulins, with normal T-cell immunity. They present with recurrent bacterial infections after 6 months of age when maternal antibodies wane."
  },
  {
    id: 33,
    question: "Chronic granulomatous disease (CGD) is characterized by defective:",
    options: ["T-cell function", "B-cell maturation", "NADPH oxidase and respiratory burst in phagocytes", "Complement activation"],
    answer: 2,
    explanation: "CGD results from mutations in genes encoding components of the NADPH oxidase complex (most commonly CYBB, X-linked). Phagocytes cannot generate superoxide and other reactive oxygen species for microbial killing. Patients have recurrent life-threatening infections with catalase-positive organisms (Staphylococcus, Aspergillus, Serratia, Burkholderia) and granuloma formation."
  },
  {
    id: 34,
    question: "DiGeorge syndrome results in immunodeficiency primarily due to:",
    options: ["B-cell deficiency", "Thymic hypoplasia leading to T-cell deficiency", "Neutrophil dysfunction", "Complement deficiency"],
    answer: 1,
    explanation: "DiGeorge syndrome (22q11.2 deletion) features thymic hypoplasia or aplasia, resulting in impaired T-cell development and function. The severity of immunodeficiency correlates with the degree of thymic hypoplasia. Complete DiGeorge (absent thymus) presents as a form of SCID. Partial DiGeorge has variable T-cell deficiency that may improve with age."
  },
  {
    id: 35,
    question: "Wiskott-Aldrich syndrome is characterized by the triad of:",
    options: ["Ataxia, telangiectasia, immunodeficiency", "Eczema, thrombocytopenia, immunodeficiency", "Albinism, bleeding, immunodeficiency", "Short stature, webbed neck, immunodeficiency"],
    answer: 1,
    explanation: "Wiskott-Aldrich syndrome (WAS) is an X-linked recessive disorder caused by mutations in the WAS gene encoding WASP (Wiskott-Aldrich syndrome protein), which regulates actin cytoskeleton in hematopoietic cells. The classic triad is eczema, thrombocytopenia with small platelets, and combined immunodeficiency. Patients are at risk for autoimmunity and lymphoma."
  },
  {
    id: 36,
    question: "HLA genes are located on which chromosome?",
    options: ["Chromosome 2", "Chromosome 6", "Chromosome 14", "Chromosome 22"],
    answer: 1,
    explanation: "The HLA (human leukocyte antigen) complex is located on the short arm of chromosome 6 (6p21.3) within the major histocompatibility complex (MHC) region. It is the most polymorphic region of the human genome. Class I genes (HLA-A, B, C) and class II genes (HLA-DR, DQ, DP) encode molecules essential for antigen presentation to T cells."
  },
  {
    id: 37,
    question: "HLA-B27 is strongly associated with:",
    options: ["Rheumatoid arthritis", "Ankylosing spondylitis", "Systemic lupus erythematosus", "Type 1 diabetes"],
    answer: 1,
    explanation: "HLA-B27 has one of the strongest known HLA-disease associations, with a relative risk >90 for ankylosing spondylitis. Approximately 90-95% of patients with ankylosing spondylitis carry HLA-B27, compared to ~8% of the general population. The mechanism likely involves abnormal peptide presentation, ER stress from HLA-B27 misfolding, or recognition by innate immune receptors."
  },
  {
    id: 38,
    question: "Adenosine deaminase (ADA) deficiency causes which type of immunodeficiency?",
    options: ["Isolated B-cell deficiency", "Isolated T-cell deficiency", "Severe combined immunodeficiency (SCID)", "Selective IgA deficiency"],
    answer: 2,
    explanation: "ADA deficiency is an autosomal recessive cause of SCID (~15% of cases). ADA is required for purine metabolism; its absence leads to accumulation of toxic deoxyadenosine and dATP, which are particularly toxic to lymphocytes. This causes T-B-NK- SCID. ADA-SCID was the first genetic disease treated with gene therapy (1990)."
  },
  {
    id: 39,
    question: "Ataxia-telangiectasia is caused by mutations in the ATM gene, which functions in:",
    options: ["Immunoglobulin class switching only", "DNA double-strand break repair and cell cycle checkpoint signaling", "Complement activation", "Phagocyte oxidative burst"],
    answer: 1,
    explanation: "ATM (ataxia-telangiectasia mutated) is a serine/threonine kinase activated by DNA double-strand breaks. It phosphorylates key substrates (p53, BRCA1, CHK2, H2AX) to activate cell cycle checkpoints and DNA repair. Loss of ATM causes progressive cerebellar ataxia, oculocutaneous telangiectasias, immunodeficiency (low IgA/IgG2), radiation sensitivity, and cancer predisposition."
  },
  {
    id: 40,
    question: "Common variable immunodeficiency (CVID) is characterized by:",
    options: ["Absent T cells", "Low immunoglobulin levels with normal B-cell numbers", "Absent neutrophils", "Complement deficiency"],
    answer: 1,
    explanation: "CVID is the most common symptomatic primary antibody deficiency, characterized by low IgG (with low IgA and/or IgM), poor vaccine responses, and recurrent sinopulmonary infections. B-cell numbers are usually normal, but there is impaired B-cell differentiation to plasma cells. Most cases are sporadic, though mutations in ICOS, TACI, BAFF-R, and others have been identified."
  },

  // ===== HEMOGLOBINOPATHIES & HEMATOLOGIC GENETICS (Q41–Q50) =====
  {
    id: 41,
    question: "Alpha-thalassemia is most commonly caused by:",
    options: ["Point mutations in alpha-globin genes", "Deletions of alpha-globin genes on chromosome 16", "Trinucleotide repeat expansion", "Chromosomal translocation"],
    answer: 1,
    explanation: "Alpha-thalassemia most commonly results from deletions of one or more of the four alpha-globin genes (two on each chromosome 16). Deletion of all four genes causes hydrops fetalis (Hb Bart's), three deletions cause HbH disease, two deletions cause alpha-thalassemia trait, and one deletion is a silent carrier state."
  },
  {
    id: 42,
    question: "Beta-thalassemia major results from:",
    options: ["Deletion of one beta-globin gene", "Homozygous or compound heterozygous mutations causing absent/severely reduced beta-globin production", "Structural abnormality in beta-globin", "Alpha-globin gene excess"],
    answer: 1,
    explanation: "Beta-thalassemia major (Cooley anemia) results from homozygous or compound heterozygous mutations (usually point mutations, not deletions) in the HBB gene that severely reduce (beta+) or abolish (beta0) beta-globin synthesis. This causes severe microcytic anemia, ineffective erythropoiesis, hepatosplenomegaly, skeletal deformities, and transfusion dependence from early childhood."
  },
  {
    id: 43,
    question: "Hemoglobin electrophoresis in sickle cell trait (HbAS) characteristically shows:",
    options: ["100% HbS", "~60% HbA and ~40% HbS", "~60% HbS and ~40% HbA", "Equal amounts of HbA and HbS"],
    answer: 1,
    explanation: "In sickle cell trait (heterozygous HbAS), hemoglobin electrophoresis shows approximately 55-60% HbA and 35-40% HbS. HbA predominates because the normal beta-globin allele produces mRNA that is translated more efficiently. Sickle cell trait carriers are generally asymptomatic under normal conditions but may have complications under extreme conditions."
  },
  {
    id: 44,
    question: "Glucose-6-phosphate dehydrogenase (G6PD) deficiency follows which inheritance pattern?",
    options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial"],
    answer: 2,
    explanation: "G6PD deficiency is the most common enzyme deficiency worldwide, following X-linked recessive inheritance (Xq28). G6PD is essential for generating NADPH via the pentose phosphate pathway, which protects red blood cells from oxidative damage. Affected males develop hemolytic anemia upon exposure to oxidative stressors (fava beans, antimalarials, sulfonamides, infections)."
  },
  {
    id: 45,
    question: "Hereditary spherocytosis is most commonly caused by mutations in:",
    options: ["Spectrin, ankyrin, or band 3 (red cell membrane proteins)", "Globin chains", "G6PD", "Pyruvate kinase"],
    answer: 0,
    explanation: "Hereditary spherocytosis results from mutations in red cell membrane skeletal proteins — most commonly ankyrin (ANK1, ~50%), band 3 (SLC4A1, ~25%), spectrin (alpha or beta), and protein 4.2. These mutations weaken the membrane-cytoskeleton interaction, causing loss of membrane surface area, spherical red cells, and splenic sequestration/hemolysis."
  },
  {
    id: 46,
    question: "Hemophilia B is caused by deficiency of which clotting factor?",
    options: ["Factor VIII", "Factor IX", "Factor XI", "Von Willebrand factor"],
    answer: 1,
    explanation: "Hemophilia B (Christmas disease) is an X-linked recessive bleeding disorder caused by deficiency of factor IX (encoded by F9 on Xq27.1). It is clinically indistinguishable from hemophilia A (factor VIII deficiency) and presents with hemarthroses, deep tissue hematomas, and prolonged bleeding after trauma or surgery. It accounts for ~15-20% of hemophilia cases."
  },
  {
    id: 47,
    question: "Fanconi anemia is characterized by:",
    options: ["Isolated anemia", "Pancytopenia, congenital anomalies, and cancer predisposition due to defective DNA repair", "Megaloblastic anemia from B12 deficiency", "Pure red cell aplasia"],
    answer: 1,
    explanation: "Fanconi anemia is a genetically heterogeneous (at least 22 complementation groups) DNA repair disorder affecting the interstrand crosslink repair pathway. Features include progressive pancytopenia (bone marrow failure), congenital anomalies (radial ray defects, short stature, skin pigmentation), and predisposition to AML and squamous cell carcinomas. Chromosomal breakage analysis with DEB/MMC confirms diagnosis."
  },
  {
    id: 48,
    question: "Hereditary hemolytic anemia due to pyruvate kinase deficiency is inherited as:",
    options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "X-linked dominant"],
    answer: 1,
    explanation: "Pyruvate kinase (PK) deficiency is the most common glycolytic enzyme defect causing hereditary nonspherocytic hemolytic anemia. It follows autosomal recessive inheritance (PKLR gene, chromosome 1q22). PK deficiency impairs ATP generation in red blood cells, leading to chronic hemolysis with characteristic echinocytes on blood smear."
  },
  {
    id: 49,
    question: "Von Willebrand disease type 1, the most common inherited bleeding disorder, is characterized by:",
    options: ["Qualitative defect in VWF", "Quantitative partial deficiency of VWF", "Complete absence of VWF", "Deficiency of factor VIII only"],
    answer: 1,
    explanation: "Von Willebrand disease (VWD) type 1 (~75-80% of VWD) is an autosomal dominant condition with partial quantitative deficiency of von Willebrand factor (VWF levels typically 20-50%). VWF mediates platelet adhesion and carries factor VIII. Patients have mucocutaneous bleeding (epistaxis, menorrhagia, easy bruising). Desmopressin (DDAVP) releases stored VWF and is effective treatment."
  },
  {
    id: 50,
    question: "HbH disease (three alpha-globin gene deletions) presents with which hemoglobin on electrophoresis?",
    options: ["Predominantly HbS", "HbH (beta-4 tetramers)", "HbF only", "Normal hemoglobin pattern"],
    answer: 1,
    explanation: "With three alpha-globin gene deletions, there is marked reduction in alpha-chain production. Excess beta-chains form beta-4 tetramers called HbH, which is unstable and precipitates in red cells forming HbH inclusions (visible with supravital staining). HbH disease presents with moderate hemolytic anemia, splenomegaly, and HbH on electrophoresis (fast-migrating band)."
  }
]

export default questions
