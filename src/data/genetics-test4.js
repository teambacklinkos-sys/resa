const questions = [
  {
    id: 1,
    question: "Polygenic inheritance is characterized by:",
    options: ["One gene controlling one trait with complete dominance", "Multiple genes each contributing additively (or non-additively) to a continuously varying trait", "Genes on the same chromosome that are always inherited together", "A single gene with multiple alleles producing discrete phenotypic classes"],
    answer: 1,
    explanation: "Polygenic (quantitative) traits are influenced by many loci, each contributing a small effect to the phenotype. The combined action of many loci, plus environmental influence, produces the continuous (normal) distributions characteristic of traits like height, weight, and blood pressure."
  },
  {
    id: 2,
    question: "The phenotypic variance (VP) of a quantitative trait is partitioned as:",
    options: ["VP = VG + VE + VGE (genetic, environmental, and gene-environment interaction variances)", "VP = VA + VD only", "VP = VE alone for most complex traits", "VP = VA × VE"],
    answer: 0,
    explanation: "Total phenotypic variance = genetic variance (VG) + environmental variance (VE) + gene-environment interaction variance (VGE). VG is further partitioned into additive (VA), dominance (VD), and epistatic (VI) components."
  },
  {
    id: 3,
    question: "Broad-sense heritability (H²) is defined as:",
    options: ["VA / VP (additive genetic variance / phenotypic variance)", "VG / VP (total genetic variance / phenotypic variance)", "VA / VG", "VD / VP"],
    answer: 1,
    explanation: "Broad-sense heritability H² = VG/VP, the proportion of phenotypic variance attributable to all genetic effects (additive, dominance, and epistatic). It indicates how much of the population variation is genetic in origin but does not predict response to selection."
  },
  {
    id: 4,
    question: "Narrow-sense heritability (h²) is particularly important for predicting response to selection because it represents:",
    options: ["The proportion of phenotypic variance due to all genetic effects", "The proportion of phenotypic variance due to additive genetic effects (VA/VP)", "The heritability estimated from twin studies", "The genetic correlation between relatives"],
    answer: 1,
    explanation: "Narrow-sense heritability h² = VA/VP. Only additive genetic variance (VA) is directly transmissible from parents to offspring, so h² predicts how effectively selection changes the mean phenotype in the next generation via the breeder's equation: R = h²S."
  },
  {
    id: 5,
    question: "The breeder's equation R = h²S relates:",
    options: ["Heritability to population size", "The response to selection (R) to narrow-sense heritability and the selection differential (S)", "Broad-sense heritability to phenotypic variance", "The mutation rate to the selection coefficient"],
    answer: 1,
    explanation: "The breeder's equation R = h²S states that the response to selection (change in mean phenotype between generations) equals narrow-sense heritability (h²) times the selection differential (S = mean of selected parents minus population mean). This is fundamental to plant and animal breeding."
  },
  {
    id: 6,
    question: "Which component of genetic variance is NOT transmitted from parents to offspring and therefore does not contribute to resemblance between parents and offspring?",
    options: ["Additive variance (VA)", "Dominance variance (VD)", "Both additive and dominance variance", "Environmental variance (VE)"],
    answer: 1,
    explanation: "Dominance variance (VD) arises from interactions between alleles at the same locus and depends on specific allelic combinations (genotypes) that are broken up by Mendelian segregation each generation. VD is not transmitted faithfully from parents to offspring, so it does not predict the parent-offspring resemblance."
  },
  {
    id: 7,
    question: "In a twin study, if MZ (monozygotic) twin concordance for a trait is 70% and DZ (dizygotic) twin concordance is 40%, the broad-sense heritability estimated by Falconer's formula (H² ≈ 2(rMZ - rDZ)) is approximately:",
    options: ["30%", "40%", "60%", "70%"],
    answer: 2,
    explanation: "Using Falconer's formula: H² ≈ 2(rMZ - rDZ) = 2(0.70 - 0.40) = 2 × 0.30 = 0.60 = 60%. This assumes MZ twins share 100% of genetic variance and DZ twins share 50%, so twice the MZ-DZ difference estimates the total genetic contribution."
  },
  {
    id: 8,
    question: "A key assumption of classical twin studies that has been criticized is the:",
    options: ["Assumption that MZ twins are genetically identical", "Equal environments assumption (EEA): that MZ and DZ twin pairs experience equally similar environments", "Assumption that DZ twins share 50% of their genes on average", "Assumption that trait variance is normally distributed"],
    answer: 1,
    explanation: "The equal environments assumption (EEA) assumes that environmental similarity is the same for MZ and DZ twin pairs. Critics argue that MZ twins are treated more similarly (share rooms more, have more similar social experiences), which would inflate heritability estimates from twin studies."
  },
  {
    id: 9,
    question: "Quantitative trait loci (QTL) mapping identifies genomic regions containing genes that affect a quantitative trait by:",
    options: ["Sequencing all coding regions in the genome", "Finding statistical associations between marker genotypes and phenotypic values in a mapping population", "Measuring gene expression levels in different tissues", "Comparing protein sequences between high and low phenotype individuals"],
    answer: 1,
    explanation: "QTL mapping uses polymorphic genetic markers (e.g., SNPs, microsatellites) spread across the genome in a mapping population (F2, RIL, etc.) to find chromosomal regions where marker genotype is significantly associated with phenotypic variation, indicating a nearby QTL."
  },
  {
    id: 10,
    question: "Interval mapping for QTL detection, compared to single-marker ANOVA, has the advantage of:",
    options: ["Requiring fewer individuals in the mapping population", "Providing better estimates of QTL position and effect size while reducing bias from missing marker data", "Eliminating the need for molecular markers", "Detecting epistatic interactions between QTLs automatically"],
    answer: 1,
    explanation: "Interval mapping (Lander and Botstein, 1989) uses flanking marker pairs to estimate QTL position and effect along each chromosome interval via maximum likelihood or regression. It provides more precise QTL localization and unbiased effect estimates compared to single-marker analysis."
  },
  {
    id: 11,
    question: "Composite interval mapping (CIM) improves on simple interval mapping by:",
    options: ["Using all markers simultaneously to increase power", "Including additional markers as cofactors to control for background QTL effects, increasing power and precision", "Using Bayesian methods to estimate QTL number", "Mapping QTLs on all chromosomes simultaneously"],
    answer: 1,
    explanation: "Composite interval mapping (Zeng, 1994) adds flanking and unlinked markers as statistical cofactors in the model. This controls for the effects of other QTLs elsewhere in the genome, reducing residual variance and increasing statistical power and QTL localization accuracy."
  },
  {
    id: 12,
    question: "LOD score in QTL mapping represents:",
    options: ["Level of dominance at the QTL", "The log10 ratio of the likelihood of a QTL at a given position to the likelihood of no QTL — a measure of statistical evidence", "The logarithm of the allele frequency at the marker", "Loss of DNA at a chromosomal location"],
    answer: 1,
    explanation: "LOD (Logarithm of Odds) score = log10(L_QTL / L_no-QTL). A LOD ≥ 3 (traditionally) indicates significant evidence for a QTL (roughly equivalent to p < 0.001 after accounting for multiple testing across the genome), meaning the data are 1000× more likely under the QTL model."
  },
  {
    id: 13,
    question: "The LOD threshold for declaring QTL significance is higher than a simple p = 0.05 threshold because:",
    options: ["QTL effects are usually very large", "Multiple statistical tests are performed across many genomic positions, requiring correction for multiple testing (genome-wide significance)", "LOD scores cannot be directly compared to p-values", "Mapping populations are always small"],
    answer: 1,
    explanation: "QTL mapping involves testing hundreds or thousands of chromosomal positions simultaneously. Without correction, the genome-wide false positive rate would be unacceptably high. Permutation testing is used to determine empirical thresholds that maintain appropriate genome-wide error rates."
  },
  {
    id: 14,
    question: "Epistasis in the context of quantitative genetics refers to:",
    options: ["One gene masking the expression of another (dominance between alleles)", "Statistical interaction between alleles at different loci (non-additive gene-gene interaction) that contributes to variance (VI)", "The additive effects of multiple genes on a trait", "Gene-environment interaction affecting phenotype"],
    answer: 1,
    explanation: "In quantitative genetics, epistasis (VI or interaction variance) refers to non-additive statistical interactions between loci — the effect of an allele at one locus depends on the genotype at another locus. This differs from the classical genetics usage, where epistasis means masking. VI contributes to VG but not to narrow-sense heritability."
  },
  {
    id: 15,
    question: "A trait with H² = 0.80 and h² = 0.30 has high broad-sense but low narrow-sense heritability. This pattern suggests:",
    options: ["Mostly additive genetic effects with little environmental influence", "Large non-additive genetic variance (dominance/epistasis) relative to additive variance", "Low total genetic variance", "Strong gene-environment interactions"],
    answer: 1,
    explanation: "If H² (VG/VP) is high but h² (VA/VP) is much lower, then VG is large but most of it is non-additive (dominance VD and/or epistatic VI). This means the trait is highly heritable in a broad sense, but response to artificial selection would be slower than H² suggests because dominance/epistatic effects are not reliably transmitted."
  },
  {
    id: 16,
    question: "The 'missing heritability' problem in GWAS refers to:",
    options: ["GWAS failing to detect any significant associations for complex traits", "The gap between trait heritability estimated from twin/family studies and the heritability explained by discovered GWAS SNPs", "The inability to sequence rare variants", "Heritability decreasing in modern populations"],
    answer: 1,
    explanation: "For most complex traits, the SNPs reaching genome-wide significance in GWAS collectively explain only a fraction of the twin-estimated heritability. This 'missing heritability' may reside in rare variants, common variants with sub-threshold effects, gene-gene/gene-environment interactions, and epigenetic effects."
  },
  {
    id: 17,
    question: "In GWAS, the genome-wide significance threshold is typically set at p < 5 × 10⁻⁸. This stringent threshold corrects for:",
    options: ["Population stratification", "Testing approximately 1 million independent SNPs across the genome (Bonferroni correction: 0.05/10⁶)", "Linkage disequilibrium between SNPs", "The small sample sizes in GWAS"],
    answer: 1,
    explanation: "The GWAS significance threshold of p < 5 × 10⁻⁸ corresponds approximately to Bonferroni correction for ~1 million independent tests (0.05/10⁶ ≈ 5×10⁻⁸), accounting for the multiple testing burden across the genome when using common SNP arrays."
  },
  {
    id: 18,
    question: "Population stratification in GWAS is a confounding factor where:",
    options: ["The case/control ratio is imbalanced", "Allele frequency differences between ancestral subgroups create spurious genotype-phenotype associations", "SNP arrays miss rare variants", "Linkage disequilibrium inflates association signals"],
    answer: 1,
    explanation: "Population stratification occurs when cases and controls differ in ancestry. If a trait differs in prevalence between ethnic groups, any allele that also differs in frequency between groups will appear associated with the trait — a false positive. Principal component analysis (PCA) is commonly used to correct for stratification."
  },
  {
    id: 19,
    question: "Principal component analysis (PCA) in GWAS is used to:",
    options: ["Identify causal variants from associated SNPs", "Detect and correct for population stratification by capturing axes of genetic ancestry", "Calculate linkage disequilibrium between SNPs", "Impute missing genotypes from reference panels"],
    answer: 1,
    explanation: "PCA of genome-wide genotype data captures major axes of genetic variation corresponding to ancestry. Including the top principal components as covariates in GWAS regression models controls for population stratification and reduces confounding from ancestral differences."
  },
  {
    id: 20,
    question: "Genotype imputation in GWAS involves:",
    options: ["Inferring missing phenotype data from genotype information", "Predicting genotypes at untyped SNPs using linkage disequilibrium patterns from a reference haplotype panel", "Correcting genotyping errors in sequencing data", "Converting genotype data to haplotype data"],
    answer: 1,
    explanation: "Genotype imputation uses statistical methods and haplotype reference panels (e.g., 1000 Genomes, TOPMed) to predict genotypes at SNPs not directly assayed on a chip. This increases the density of variants tested, improves fine-mapping, and enables meta-analysis across studies using different arrays."
  },
  {
    id: 21,
    question: "Linkage disequilibrium (LD) blocks in the human genome are important for GWAS because:",
    options: ["They eliminate the need for imputation", "Variants in high LD tag each other, so a typed SNP can represent many untested neighboring variants in the same LD block", "They increase the number of independent tests required", "They only occur in coding regions"],
    answer: 1,
    explanation: "In LD blocks, alleles at nearby loci are in non-random association. A SNP in LD with a causal variant will be statistically associated with the trait even if it is not itself functional. This 'tagging' reduces the number of SNPs needed to survey common variation but also complicates identification of the true causal variant."
  },
  {
    id: 22,
    question: "A multifactorial threshold model (Falconer's liability model) explains binary traits (e.g., disease: affected/unaffected) by assuming:",
    options: ["A single major gene with complete penetrance", "An underlying continuously distributed liability that, when it exceeds a threshold, results in the affected phenotype", "Independent contributions of each locus with no interactions", "A dominant allele at a single locus"],
    answer: 1,
    explanation: "Falconer's liability-threshold model proposes that complex binary traits (like many common diseases) result from an underlying normally distributed liability determined by many genes and environmental factors. Individuals whose liability exceeds a threshold manifest the disease, explaining the familial aggregation without a simple Mendelian pattern."
  },
  {
    id: 23,
    question: "The recurrence risk ratio (λs) for siblings is used to assess the genetic contribution to a complex disease and is defined as:",
    options: ["The prevalence of disease in the general population", "Risk to a sibling of an affected individual divided by the population prevalence", "The probability that both members of an MZ twin pair are affected", "The heritability on the liability scale"],
    answer: 1,
    explanation: "λs (sibling recurrence risk ratio) = K_sibling / K_general population. A λs of 1 indicates no familial aggregation; high values (e.g., λs = 10 for schizophrenia) indicate strong genetic contribution. Combined with heritability estimates, it helps characterize the genetic architecture of complex diseases."
  },
  {
    id: 24,
    question: "Pleiotropy in complex trait genetics refers to:",
    options: ["Multiple genes affecting a single trait", "A single gene (or locus) influencing multiple distinct phenotypic traits", "Non-additive interactions between multiple genes", "Environmental factors mimicking genetic effects"],
    answer: 1,
    explanation: "Pleiotropy occurs when a single gene or genetic variant affects multiple phenotypic traits. In GWAS, many loci show pleiotropic effects (e.g., variants affecting both type 2 diabetes and BMI), revealing shared genetic architecture between seemingly different traits."
  },
  {
    id: 25,
    question: "Gene-environment interaction (GxE) in quantitative genetics means:",
    options: ["Genes and environment have independent, additive effects on phenotype", "The effect of a genotype on phenotype differs depending on the environment (and vice versa)", "Environmental factors mask genetic effects entirely", "Gene expression varies across environments but phenotype does not"],
    answer: 1,
    explanation: "GxE interaction occurs when different genotypes respond differently to environmental variation. It contributes to phenotypic variance (as VGE) and means that the genetic effect estimated in one environment may not apply in another, complicating replication of GWAS findings across populations and environments."
  },
  {
    id: 26,
    question: "Reaction norms in quantitative genetics represent:",
    options: ["The normal distribution of phenotypes in a population", "The pattern of phenotypic change a specific genotype displays across a range of environments", "The range of phenotypic values in a mapping population", "The distribution of allele frequencies across loci"],
    answer: 1,
    explanation: "A reaction norm is the phenotypic values produced by a specific genotype across a range of environmental conditions. When reaction norms of different genotypes cross or have different slopes, it indicates GxE interaction (genotype ranks change across environments), which has implications for breeding and evolutionary biology."
  },
  {
    id: 27,
    question: "In a GWAS meta-analysis, results from multiple studies are combined to:",
    options: ["Reduce the number of SNPs tested", "Increase statistical power by increasing total sample size and identify associations that are individually underpowered", "Eliminate population stratification entirely", "Replace single-study analyses"],
    answer: 1,
    explanation: "Meta-analysis of GWAS combines summary statistics (effect sizes and standard errors or p-values) from multiple studies, effectively pooling sample sizes into the tens or hundreds of thousands. This dramatically increases power to detect variants of small effect that individual studies would miss."
  },
  {
    id: 28,
    question: "The concept of additive genetic variance (VA) is important because:",
    options: ["It represents dominance effects between alleles", "It is the component of genetic variance that determines parent-offspring resemblance and response to selection", "It captures gene-environment covariance", "It is always equal to the total phenotypic variance"],
    answer: 1,
    explanation: "VA arises from the average (breeding) values of alleles — the additive effects passed from parents to offspring. Since VA is the heritable component transmitted across generations, it determines both parent-offspring regression in families and response to artificial or natural selection."
  },
  {
    id: 29,
    question: "Genomic selection (GS) in plant/animal breeding differs from traditional marker-assisted selection (MAS) in that:",
    options: ["GS uses only a few large-effect markers", "GS uses genome-wide markers simultaneously to estimate breeding values, capturing variance from many small-effect loci", "MAS uses all SNPs genome-wide", "GS does not require phenotypic data"],
    answer: 1,
    explanation: "Genomic selection uses all marker information simultaneously (via methods like RR-BLUP or GBLUP) to estimate genomic estimated breeding values (GEBVs) for individuals. This captures the collective variance of many small-effect QTLs that individually would fall below MAS significance thresholds."
  },
  {
    id: 30,
    question: "Heritability of a trait can change between populations or across time because:",
    options: ["DNA sequences change rapidly between generations", "Heritability (VA/VP) depends on the genetic and environmental variance in the specific population studied, which can differ", "Mutations change allele frequencies very rapidly", "Selection always eliminates VA over time"],
    answer: 1,
    explanation: "Heritability is a population-specific parameter, not a fixed property of a trait. It depends on the variances in the specific population — if VA or VE differ between populations or change over time (e.g., with environmental homogenization), h² will change accordingly."
  },
  {
    id: 31,
    question: "In a recombinant inbred line (RIL) mapping population, what is the advantage over an F2 population for QTL mapping?",
    options: ["F2 is more powerful for detecting dominance effects", "RILs are homozygous and can be replicated across environments and years, reducing environmental variance and enabling detection of QTL × environment interactions", "RILs show greater segregation distortion", "F2 populations have higher marker density"],
    answer: 1,
    explanation: "RILs are produced by repeated selfing from F2 plants until near-homozygosity. Since each RIL is a fixed, replicable genotype, it can be grown in multiple environments and years, dramatically reducing environmental variance (VE) and increasing heritability and QTL detection power, especially for QTL×E interactions."
  },
  {
    id: 32,
    question: "Phenotypic plasticity refers to:",
    options: ["The ability of a population to evolve in response to selection", "The ability of a single genotype to produce different phenotypes in response to different environmental conditions", "Variation in phenotype due to different genotypes", "The range of phenotypes in a population"],
    answer: 1,
    explanation: "Phenotypic plasticity is the capacity of a single genotype to express different phenotypes in different environments. It is reflected in reaction norms and is itself a heritable trait subject to selection. High plasticity allows organisms to cope with environmental variation without genetic change."
  },
  {
    id: 33,
    question: "The animal model in quantitative genetics (BLUP) is used to:",
    options: ["Study animal behavior in natural populations", "Partition phenotypic variance and estimate breeding values using pedigree information and phenotypic records", "Map QTLs in farm animal species", "Study gene expression patterns in different tissues"],
    answer: 1,
    explanation: "The 'animal model' uses Best Linear Unbiased Prediction (BLUP) with pedigree relationship matrices to simultaneously estimate fixed effects (e.g., herd, year) and random breeding values for individuals. It is the gold standard for estimating h² and breeding values in livestock."
  },
  {
    id: 34,
    question: "The genetic correlation between two traits (rG) measures:",
    options: ["The phenotypic correlation between traits within individuals", "The extent to which the same genes (additive effects) influence both traits — whether due to pleiotropy or linkage disequilibrium", "The correlation between environmental effects on two traits", "The proportion of phenotypic correlation explained by genetic factors"],
    answer: 1,
    explanation: "Genetic correlation (rG) measures the degree to which two traits share additive genetic variance, arising from pleiotropy (same genes affect both traits) or LD between different loci. rG = COVA(1,2)/√(VA1 × VA2) and has implications for correlated responses to selection."
  },
  {
    id: 35,
    question: "Fine-mapping of GWAS loci involves:",
    options: ["Broadening the genomic region of interest", "Using statistical methods and functional annotations to identify the most likely causal variant(s) within an associated region", "Confirming associations in additional GWAS studies", "Eliminating LD between markers"],
    answer: 1,
    explanation: "Fine-mapping uses dense genotyping or sequencing of the associated region, statistical methods (conditional analysis, Bayesian credible sets), and functional genomic annotations (e.g., eQTLs, chromatin accessibility) to narrow the list of candidate causal variants within a GWAS signal from hundreds of correlated SNPs to a credible set."
  },
  {
    id: 36,
    question: "eQTL (expression QTL) mapping identifies:",
    options: ["QTLs affecting enzyme activity levels", "Genomic loci where genetic variants influence gene expression levels (mRNA abundance)", "QTLs detected using expression microarrays only", "Environmental effects on gene expression"],
    answer: 1,
    explanation: "eQTL mapping treats gene expression levels as quantitative traits and identifies SNPs associated with variation in transcript abundance. cis-eQTLs affect nearby genes; trans-eQTLs affect distant genes. eQTLs help link GWAS associations to potential functional mechanisms."
  },
  {
    id: 37,
    question: "The concept of 'omnigenic' model proposed by Boyle, Li and Pritchard (2017) suggests that for complex traits:",
    options: ["A small number of core genes explain most trait heritability", "Most of the genome participates in trait variation because regulatory networks are highly interconnected, and effects of peripheral genes propagate to core genes", "GWAS has nearly identified all genetic variants affecting complex traits", "Non-additive effects dominate the architecture of complex traits"],
    answer: 1,
    explanation: "The omnigenic model proposes that because cellular regulatory networks are highly interconnected, virtually any gene expressed in disease-relevant cells can affect core disease pathways. This explains why GWAS signals are distributed across the genome, many in non-obvious pathways, and why heritability is so broadly distributed."
  },
  {
    id: 38,
    question: "Variance components analysis in a half-sib design estimates additive genetic variance (VA) from:",
    options: ["Variance among offspring within families", "Variance among sire family means, because half-sibs share only their father and thus 1/4 of additive genetic variance", "Variance between dams mated to the same sire", "Variance within full-sib families"],
    answer: 1,
    explanation: "In a half-sib design, each sire is mated to several dams, and many offspring are measured per dam. Half-sibs share 1/4 of VA (from common father). The among-sire variance component = VA/4, so VA = 4 × (among-sire variance). This design efficiently separates VA from maternal and dominance effects."
  },
  {
    id: 39,
    question: "The concept of 'phantom heritability' refers to:",
    options: ["Heritability that disappears when environmental factors are controlled", "Spuriously inflated heritability estimates caused by gene-environment correlation being attributed to genetic variance", "Heritability observed only in twin studies but not in family studies", "Low heritability in traits with high measurement error"],
    answer: 1,
    explanation: "Phantom heritability occurs when gene-environment correlation (rGE) is present but is statistically absorbed into the genetic variance estimate. If parents' genotypes influence both their offspring's genotype and their shared family environment, classical methods overestimate VA by confounding genetic and environmental effects."
  },
  {
    id: 40,
    question: "Mendelian randomization uses genetic variants as instrumental variables to:",
    options: ["Map Mendelian disorders to chromosomal locations", "Infer causal relationships between modifiable exposures and outcomes, using genetic variants as unconfounded proxies for the exposure", "Estimate heritability of complex traits", "Identify dominant vs. recessive inheritance patterns"],
    answer: 1,
    explanation: "Mendelian randomization exploits the random assortment of alleles at conception to mimic a randomized experiment. Genetic variants (instruments) associated with an exposure but not otherwise related to the outcome are used to estimate the causal effect of the exposure, avoiding confounding that plagues observational studies."
  },
  {
    id: 41,
    question: "SNP-based heritability (h²SNP) estimated by GCTA/GREML differs from twin-based heritability because:",
    options: ["GCTA uses all individuals in the population", "h²SNP captures only variance tagged by common SNPs on arrays, missing contributions from rare variants, structural variants, and poorly tagged common variants", "GCTA does not account for environmental variance", "Twin studies underestimate heritability"],
    answer: 1,
    explanation: "GREML-based h²SNP uses genome-wide SNP relatedness (GRM) to estimate the genetic variance captured by common array SNPs. It systematically underestimates twin heritability because it misses rare variants, copy number variants, and common variants not well-tagged by typical arrays — contributing to the missing heritability gap."
  },
  {
    id: 42,
    question: "Polygenic risk scores (PRS) are calculated as:",
    options: ["The count of risk alleles divided by heritability", "The weighted sum of risk alleles across multiple loci, where weights are effect sizes from a GWAS", "The product of individual SNP odds ratios", "The variance in phenotype explained by significant GWAS hits"],
    answer: 1,
    explanation: "A polygenic risk score aggregates genetic risk across thousands to millions of variants: PRS = Σ(βi × Gi), where βi is the effect size estimate from a reference GWAS and Gi is the allele count (0,1,2) at variant i. PRS captures aggregate genetic predisposition for complex traits and diseases."
  },
  {
    id: 43,
    question: "The effective number of independent SNPs in the human genome used for Bonferroni correction in GWAS is approximately 1 million because:",
    options: ["The human genome has exactly 1 million coding variants", "Linkage disequilibrium between neighboring SNPs reduces the number of truly independent tests from the total ~10 million common SNPs to ~1 million", "GWAS arrays genotype exactly 1 million SNPs", "Each chromosome contributes about 45,000 independent tests"],
    answer: 1,
    explanation: "Although millions of common SNPs exist, they are correlated through LD, reducing the number of effectively independent tests. LD-based pruning or analyses of the LD structure of the human genome yield approximately 1 million independent tests, justifying the p < 5×10⁻⁸ genome-wide significance threshold."
  },
  {
    id: 44,
    question: "Genomic imprinting affects quantitative trait analysis because:",
    options: ["Imprinted genes are not expressed and contribute no variance", "The parent-of-origin of an allele determines whether it is expressed, violating the assumption that allele dosage alone determines genetic effect", "Only maternal chromosomes are imprinted, doubling maternal effects", "Imprinting increases additive genetic variance uniformly"],
    answer: 1,
    explanation: "Imprinted genes are expressed from only one parental chromosome due to epigenetic silencing of the other. This means a variant's effect depends on whether it was maternally or paternally inherited, creating parent-of-origin effects that standard additive models miss and can lead to asymmetric sib-sib vs. parent-offspring resemblances."
  },
  {
    id: 45,
    question: "In the context of QTL mapping, a QTL × environment (QTL×E) interaction means:",
    options: ["A QTL effect is constant across all environments", "The effect size or direction of a QTL allele differs significantly across environments, indicating environmentally sensitive genetic control", "Environmental effects are larger than genetic effects at that locus", "The QTL is only detectable in controlled laboratory conditions"],
    answer: 1,
    explanation: "QTL×E interaction occurs when the phenotypic effect of a QTL allele is not constant but varies in magnitude or direction across environments. Detecting QTL×E requires testing the environment in the model, is important for selecting stable genotypes in plant breeding, and provides insight into genotype-specific environmental sensitivity."
  },
  {
    id: 46,
    question: "Phenome-wide association study (PheWAS) differs from standard GWAS in that:",
    options: ["PheWAS tests many genetic variants against a single phenotype", "PheWAS tests a single (or small set of) genetic variant(s) against a broad range of phenotypic outcomes across the phenome", "PheWAS uses only exome sequencing data", "PheWAS does not require correction for multiple testing"],
    answer: 1,
    explanation: "PheWAS systematically scans the associations between a genetic variant (often a previously identified GWAS hit) and hundreds of phenotypes in a clinical or biobank database. It can reveal pleiotropic effects, unexpected phenotypic associations, and potential adverse effects of interventions targeting that variant."
  },
  {
    id: 47,
    question: "The concept of 'genetic architecture' of a complex trait refers to:",
    options: ["The physical structure of the chromosomes carrying the trait's genes", "The number, frequency, effect size distribution, and interactions of genetic variants underlying the trait", "The heritability of the trait alone", "The epigenetic marks associated with the trait"],
    answer: 1,
    explanation: "Genetic architecture encompasses all aspects of the genetic basis of a trait: the number of contributing loci, allele frequencies, effect size distribution (few large vs. many small), dominance and epistatic relationships, and chromosomal locations. Understanding genetic architecture informs strategies for GWAS, QTL mapping, and genomic selection."
  },
  {
    id: 48,
    question: "In twin studies, the ACE model decomposes phenotypic variance into:",
    options: ["Additive genetics, Codominance effects, Epistasis", "Additive genetic effects (A), shared/common environmental effects (C), and non-shared/unique environmental effects (E)", "Age effects, Cohort effects, Environment effects", "Additive genetics, Chromosomal effects, Error"],
    answer: 1,
    explanation: "The ACE model partitions phenotypic variance into A (additive genetic variance), C (shared/common environment — experiences shared by both twins regardless of zygosity), and E (unique/non-shared environment, including measurement error). This framework is the standard for biometric twin analysis."
  },
  {
    id: 49,
    question: "Genetic correlation between traits estimated from GWAS summary statistics (e.g., using LD score regression) provides information about:",
    options: ["The phenotypic correlation between the two traits", "The degree to which common genetic variants affecting one trait also affect the other, indicating shared genetic etiology", "The causal relationship between the two traits", "The environmental factors common to both traits"],
    answer: 1,
    explanation: "Cross-trait LD score regression estimates genetic correlation from GWAS summary statistics by leveraging the relationship between test statistics and LD scores. A high genetic correlation (rg) indicates extensive overlap in the common variant architecture of two traits, suggesting shared biological pathways or pleiotropic effects."
  },
  {
    id: 50,
    question: "Why does response to selection (R) eventually plateau despite continued selection pressure, even when h² > 0?",
    options: ["Mutation stops generating new variation", "Selection reduces VA over time as favored alleles approach fixation, and inbreeding depression may also reduce fitness", "Environmental variance increases to compensate", "Natural selection reverses artificial selection effects"],
    answer: 1,
    explanation: "As selection drives favorable alleles toward fixation, additive genetic variance (VA) decreases because fixed loci no longer contribute to VA. This reduces h² = VA/VP, slowing and eventually halting the response to selection. Inbreeding depression from increased homozygosity in small selected populations can further limit progress."
  }
];

export default questions;
