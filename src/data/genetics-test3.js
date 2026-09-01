const questions = [
  {
    id: 1,
    question: "A population has allele frequencies p = 0.6 (A) and q = 0.4 (a). After one generation of random mating with no other evolutionary forces, the expected frequency of heterozygotes (Aa) is:",
    options: ["0.24", "0.48", "0.36", "0.16"],
    answer: 1,
    explanation: "Under Hardy-Weinberg equilibrium, the frequency of heterozygotes = 2pq = 2 × 0.6 × 0.4 = 0.48. This is the maximum heterozygosity possible for these allele frequencies."
  },
  {
    id: 2,
    question: "Which of the following is NOT an assumption of the Hardy-Weinberg principle?",
    options: ["Random mating", "No genetic drift", "Large population size", "Equal fitness of all genotypes"],
    answer: 1,
    explanation: "Hardy-Weinberg assumptions include random mating, infinite (large) population size, no mutation, no migration, and no selection (equal fitness). 'No genetic drift' is a consequence of large population size, not a separate assumption — drift is the assumption being prevented by assuming infinite population."
  },
  {
    id: 3,
    question: "In a population, the frequency of a recessive disease allele (a) is 0.01. Assuming Hardy-Weinberg equilibrium, the ratio of carriers (Aa) to affected individuals (aa) is approximately:",
    options: ["100:1", "200:1", "50:1", "20:1"],
    answer: 1,
    explanation: "Carriers (Aa) = 2pq ≈ 2 × 0.99 × 0.01 ≈ 0.0198; affected (aa) = q² = 0.0001. Ratio = 0.0198/0.0001 ≈ 198 ≈ 200:1. This is why recessive diseases are maintained largely in heterozygous carriers."
  },
  {
    id: 4,
    question: "A population shows the following genotype frequencies: AA = 0.50, Aa = 0.20, aa = 0.30. What can be concluded?",
    options: ["Population is at Hardy-Weinberg equilibrium", "There is excess of homozygotes, suggesting inbreeding or assortative mating", "There is excess of heterozygotes, suggesting overdominance", "The allele frequencies cannot be calculated from this data"],
    answer: 1,
    explanation: "Allele frequency p(A) = 0.50 + 0.10 = 0.60, q(a) = 0.30 + 0.10 = 0.40. Expected heterozygosity under HWE = 2pq = 0.48, but observed = 0.20, which is much lower. This deficit of heterozygotes and excess of homozygotes is characteristic of inbreeding or positive assortative mating."
  },
  {
    id: 5,
    question: "The inbreeding coefficient F represents:",
    options: ["The proportion of loci that are homozygous in an individual", "The probability that two alleles in an individual are identical by descent", "The degree of relatedness between two individuals", "The reduction in fitness due to inbreeding"],
    answer: 1,
    explanation: "F (Wright's inbreeding coefficient) is the probability that an individual receives two alleles that are identical by descent (IBD) from a common ancestor. It measures the increase in homozygosity due to inbreeding."
  },
  {
    id: 6,
    question: "Genetic drift has the greatest impact in populations that are:",
    options: ["Large and isolated", "Small and isolated", "Large and interconnected by gene flow", "Small with high migration rates"],
    answer: 1,
    explanation: "Genetic drift is the random change in allele frequencies due to sampling error, and its effect is inversely proportional to population size (variance of allele frequency change = pq/2N). Small, isolated populations experience the most drift."
  },
  {
    id: 7,
    question: "The effective population size (Ne) is always:",
    options: ["Equal to the census population size (N)", "Greater than the census population size (N)", "Less than or equal to the census population size (N)", "Independent of the census population size"],
    answer: 2,
    explanation: "Ne is almost always less than or equal to N (the actual count) because of factors like unequal sex ratios, variance in reproductive success, and fluctuating population sizes. These factors reduce the genetically effective number of breeders."
  },
  {
    id: 8,
    question: "A population passes through a severe bottleneck, reducing from 10,000 to 10 individuals before recovering. The primary genetic consequence is:",
    options: ["Increased mutation rate", "Loss of allelic diversity and increased genetic drift effects", "Increased recombination frequency", "Balanced polymorphism maintenance"],
    answer: 1,
    explanation: "A bottleneck drastically reduces Ne, causing random loss of alleles (especially rare ones) and a severe reduction in genetic diversity. The population may recover in number but the lost allelic diversity is not regained without mutation or gene flow."
  },
  {
    id: 9,
    question: "The founder effect differs from a simple population bottleneck in that:",
    options: ["The founder effect involves more individuals", "The founding population is a non-random, small subset that colonizes a new habitat", "The founder effect does not cause loss of genetic diversity", "The founder effect increases heterozygosity"],
    answer: 1,
    explanation: "The founder effect occurs when a small number of individuals from a larger population establish a new colony. Unlike a bottleneck in place, the founders are a non-random sample that may carry rare alleles at high frequency or lack common alleles, creating a distinctly different genetic composition."
  },
  {
    id: 10,
    question: "Gene flow between two populations will:",
    options: ["Increase genetic differentiation between them", "Decrease genetic differentiation and homogenize allele frequencies", "Have no effect on allele frequencies", "Always increase the fitness of both populations"],
    answer: 1,
    explanation: "Gene flow (migration) introduces alleles from one population to another, making allele frequencies more similar between populations and reducing FST (genetic differentiation). Even low levels of gene flow can counteract genetic drift."
  },
  {
    id: 11,
    question: "Wright's FST measures:",
    options: ["The average heterozygosity within subpopulations", "The proportion of total genetic variation that is due to differences among subpopulations", "The inbreeding coefficient within subpopulations", "The effective migration rate between subpopulations"],
    answer: 1,
    explanation: "FST = (HT - HS)/HT, where HT is total heterozygosity and HS is average subpopulation heterozygosity. It quantifies the fraction of genetic variation explained by among-population differences, ranging from 0 (no differentiation) to 1 (complete differentiation)."
  },
  {
    id: 12,
    question: "Under directional selection favoring allele A over a, starting from p = 0.5, what is the expected long-term outcome if selection is constant?",
    options: ["A stable polymorphism at p = 0.5", "Fixation of allele A (p → 1)", "Fixation of allele a (p → 0)", "Random fluctuation of allele frequencies"],
    answer: 1,
    explanation: "Directional selection consistently favors one allele over the other, driving the favored allele toward fixation (frequency = 1) over time. The rate depends on the selection coefficient and initial frequency."
  },
  {
    id: 13,
    question: "Balancing selection maintains polymorphism through which of the following mechanisms?",
    options: ["Directional selection favoring one allele", "Heterozygote advantage (overdominance), frequency-dependent selection, or spatially varying selection", "Genetic drift in small populations", "Mutation pressure alone"],
    answer: 1,
    explanation: "Balancing selection maintains multiple alleles through mechanisms like heterozygote advantage (e.g., sickle cell), negative frequency-dependent selection (rare allele advantage), or varying selection across environments/time, all of which prevent fixation of any single allele."
  },
  {
    id: 14,
    question: "The sickle-cell allele (HbS) is maintained at high frequency in malaria-endemic regions because of:",
    options: ["Negative selection against HbSS homozygotes only", "Heterozygote advantage: HbAS individuals have higher fitness than both homozygotes in malarial environments", "Genetic drift in small African populations", "High mutation rate from HbA to HbS"],
    answer: 1,
    explanation: "HbAS heterozygotes have superior fitness in malaria-endemic areas compared to both HbAA (susceptible to malaria) and HbSS (sickle cell disease). This heterozygote advantage (overdominance) is a classic example of balancing selection maintaining a polymorphism."
  },
  {
    id: 15,
    question: "Purifying (negative) selection acts to:",
    options: ["Increase the frequency of beneficial mutations", "Remove deleterious alleles from the population", "Maintain multiple alleles at intermediate frequencies", "Increase genetic diversity"],
    answer: 1,
    explanation: "Purifying selection eliminates or reduces the frequency of deleterious alleles by reducing the fitness of individuals carrying them. It is the most prevalent form of natural selection, as most new mutations are deleterious."
  },
  {
    id: 16,
    question: "At mutation-selection balance for a recessive lethal allele (s = 1), the equilibrium frequency of the deleterious allele (q̂) is:",
    options: ["q̂ = μ/s", "q̂ = √(μ/s) = √μ", "q̂ = μ²/s", "q̂ = s/μ"],
    answer: 1,
    explanation: "For a recessive lethal allele maintained by mutation-selection balance, the equilibrium frequency is q̂ = √(μ/s). When s = 1 (lethal), q̂ = √μ. This is higher than for dominant deleterious alleles because recessives are 'hidden' in heterozygotes from selection."
  },
  {
    id: 17,
    question: "The mutation-selection balance for a dominant deleterious allele (selection coefficient s, dominance h = 1) predicts equilibrium frequency:",
    options: ["q̂ = √(μ/s)", "q̂ = μ/hs ≈ μ/s", "q̂ = μ²", "q̂ = s/μ"],
    answer: 1,
    explanation: "For a dominant or codominant deleterious allele, the equilibrium frequency is q̂ = μ/hs. When h = 1 (fully dominant), q̂ = μ/s. Dominant alleles are efficiently removed by selection because they are expressed even in heterozygotes."
  },
  {
    id: 18,
    question: "Which type of natural selection is most likely to reduce genetic variation at a locus?",
    options: ["Balancing selection", "Frequency-dependent selection", "Directional selection", "Disruptive selection"],
    answer: 2,
    explanation: "Directional selection consistently favors one allele, driving it toward fixation and eliminating alternative alleles, thus reducing genetic variation. Balancing and frequency-dependent selection maintain polymorphism, and disruptive selection can maintain variation at the extremes."
  },
  {
    id: 19,
    question: "Disruptive (diversifying) selection favors:",
    options: ["Intermediate phenotypes over extreme phenotypes", "Both extreme phenotypes over intermediate phenotypes", "Only the highest-fitness phenotype", "No particular phenotype — it is random"],
    answer: 1,
    explanation: "Disruptive selection favors individuals at both extremes of the phenotypic distribution over those with intermediate phenotypes, potentially leading to bimodal distributions and, under some conditions, contributing to speciation."
  },
  {
    id: 20,
    question: "The neutral theory of molecular evolution (Kimura, 1968) proposes that:",
    options: ["All mutations are beneficial and fixed by positive selection", "The majority of evolutionary changes at the molecular level are due to random fixation of neutral or nearly neutral mutations", "Mutation rates are the primary determinant of phenotypic evolution", "Natural selection drives all molecular polymorphisms"],
    answer: 1,
    explanation: "Kimura's neutral theory posits that most DNA sequence variation within and between species is selectively neutral or nearly neutral, fixed by genetic drift rather than positive selection. This provides the theoretical basis for molecular clocks."
  },
  {
    id: 21,
    question: "The rate of fixation of neutral mutations in a population is equal to:",
    options: ["N × μ (population size times mutation rate)", "The mutation rate μ, independent of population size", "μ/N", "2Nμ"],
    answer: 1,
    explanation: "For neutral mutations, the rate of fixation = probability of fixation × number of new mutations per generation = (1/2N) × (2Nμ) = μ. This elegant result shows that the substitution rate for neutral mutations equals the mutation rate, independent of population size."
  },
  {
    id: 22,
    question: "The molecular clock hypothesis assumes that:",
    options: ["All genes evolve at the same rate", "Nucleotide substitutions accumulate at a roughly constant rate over time for a given gene/protein", "Only synonymous substitutions are useful for dating divergences", "Positive selection drives molecular evolution at a constant rate"],
    answer: 1,
    explanation: "The molecular clock hypothesis proposes that DNA or protein sequences evolve at an approximately constant rate over time, allowing the timing of evolutionary divergence to be estimated from sequence divergence. Different genes/proteins have different rates but each is approximately constant."
  },
  {
    id: 23,
    question: "Synonymous (silent) substitutions occur at a higher rate than nonsynonymous substitutions in most protein-coding genes because:",
    options: ["Synonymous mutations have higher mutation rates", "Synonymous mutations do not change amino acids and are largely neutral, while most nonsynonymous changes are deleterious and removed by purifying selection", "Synonymous mutations are more likely to be fixed by genetic drift", "Nonsynonymous mutations only occur in coding regions"],
    answer: 1,
    explanation: "Most amino acid changes are deleterious and removed by purifying selection, while synonymous (silent) codon changes typically have no effect on protein function and are largely neutral. Therefore, the ratio of synonymous to nonsynonymous substitution rates (dS/dN >> 1) in most genes reflects prevalent purifying selection."
  },
  {
    id: 24,
    question: "A dN/dS ratio (ω) significantly greater than 1 in a comparison between two genes indicates:",
    options: ["Strong purifying selection", "Neutral evolution", "Positive (adaptive) selection driving amino acid change", "High synonymous mutation rate"],
    answer: 2,
    explanation: "The ratio dN/dS (ω) compares the rate of nonsynonymous (amino acid changing) to synonymous substitutions. ω > 1 indicates that amino acid changes are being fixed faster than expected under neutrality, a signature of positive (adaptive) selection."
  },
  {
    id: 25,
    question: "In phylogenetics, a maximum parsimony approach selects the tree that:",
    options: ["Maximizes the likelihood of observing the data", "Requires the fewest evolutionary changes (mutations) to explain the observed sequence data", "Uses the molecular clock to date divergence times", "Groups taxa by overall morphological similarity"],
    answer: 1,
    explanation: "Maximum parsimony phylogenetics selects the tree topology that requires the minimum number of evolutionary changes (substitutions, indels) to explain the observed character states. It embodies the principle of Occam's razor applied to evolutionary reconstruction."
  },
  {
    id: 26,
    question: "Bootstrap values in a phylogenetic tree represent:",
    options: ["The probability that the tree is correct", "The statistical support for each node, based on resampling of the data", "The divergence time at each node", "The branch lengths in nucleotide substitutions per site"],
    answer: 1,
    explanation: "Bootstrap analysis resamples the alignment columns with replacement many times (typically 1000) and builds a tree from each replicate. The bootstrap value at a node is the percentage of replicates that recover that same clade, indicating confidence in that grouping."
  },
  {
    id: 27,
    question: "Which sequence type evolves fastest and is most useful for distinguishing closely related species?",
    options: ["18S rRNA gene", "Mitochondrial D-loop / control region", "Cytochrome c protein", "Histone H4 gene"],
    answer: 1,
    explanation: "The mitochondrial control region (D-loop) is a non-coding regulatory region with few functional constraints and high mutation rate, making it the fastest-evolving sequence in mitochondrial DNA and ideal for intraspecific or closely related species comparisons."
  },
  {
    id: 28,
    question: "Coalescent theory describes:",
    options: ["The process of speciation through reproductive isolation", "The genealogical process by which lineages trace back to a common ancestor, used to infer population history", "The rate of molecular evolution in protein-coding genes", "The recombination frequency between linked loci"],
    answer: 1,
    explanation: "Coalescent theory (Kingman, 1982) models how gene copies in a population trace back in time to a most recent common ancestor (MRCA). It forms the basis for inferring population size history, divergence times, and migration from genetic data."
  },
  {
    id: 29,
    question: "Tajima's D statistic is used to test:",
    options: ["Linkage disequilibrium between two loci", "Deviation from the neutral model of evolution by comparing different summary statistics of sequence variation", "The ratio of synonymous to nonsynonymous substitutions", "Hardy-Weinberg equilibrium in a sample"],
    answer: 1,
    explanation: "Tajima's D compares the number of segregating sites (S) to the average number of pairwise differences (π). Significantly negative D suggests purifying selection or population expansion (excess of rare variants); significantly positive D suggests balancing selection or population contraction."
  },
  {
    id: 30,
    question: "An island model of migration assumes:",
    options: ["Migration occurs only between adjacent subpopulations", "All subpopulations exchange migrants equally with every other subpopulation at rate m", "Migration occurs in one direction from mainland to islands", "No migration between subpopulations"],
    answer: 1,
    explanation: "Wright's island model assumes a set of subpopulations (demes) of equal size that all exchange migrants at equal rates with each other. At equilibrium, FST ≈ 1/(1 + 4Nem), relating genetic differentiation to the product of effective size and migration rate."
  },
  {
    id: 31,
    question: "In the stepping-stone model of population structure, migration occurs:",
    options: ["Randomly among all subpopulations equally", "Only between adjacent subpopulations in a linear or two-dimensional array", "Only from large to small populations", "In proportion to geographic distance following isolation by distance"],
    answer: 1,
    explanation: "In the stepping-stone model, gene flow occurs primarily between geographically neighboring subpopulations. This creates a pattern where genetic differentiation increases with geographic distance, known as isolation by distance."
  },
  {
    id: 32,
    question: "Linkage disequilibrium (LD) refers to:",
    options: ["The physical linkage of genes on the same chromosome", "Non-random association of alleles at two or more loci in a population", "The reduction in recombination frequency between linked genes", "Disequilibrium in Hardy-Weinberg genotype frequencies"],
    answer: 1,
    explanation: "Linkage disequilibrium (LD) is the non-random association of alleles at two or more loci in a population sample. It can arise from physical linkage, population history (founder effects), selection, or other forces, and decays over generations through recombination."
  },
  {
    id: 33,
    question: "Which population genetics statistic directly measures the deviation from Hardy-Weinberg expected heterozygosity within subpopulations?",
    options: ["FST", "FIS", "FIT", "Nm"],
    answer: 1,
    explanation: "FIS (inbreeding coefficient of individuals relative to subpopulations) measures the deviation of observed heterozygosity from HWE expectations within subpopulations. Positive FIS indicates heterozygote deficit (inbreeding); negative FIS indicates heterozygote excess."
  },
  {
    id: 34,
    question: "The nearly neutral theory of molecular evolution (Ohta) extends Kimura's neutral theory by proposing that:",
    options: ["All mutations are strictly neutral", "Many mutations have very small selection coefficients, and their fate depends on the balance between selection and genetic drift", "Positive selection drives most molecular evolution", "Mutation rate, not selection, determines evolutionary rates"],
    answer: 1,
    explanation: "Ohta's nearly neutral theory proposes that many mutations have slightly deleterious or slightly beneficial effects (|Ns| ≈ 1). Their evolutionary fate depends on Ne: in small populations drift dominates and slightly deleterious mutations can fix; in large populations selection is more effective."
  },
  {
    id: 35,
    question: "Selective sweep refers to:",
    options: ["The removal of beneficial alleles from a population by genetic drift", "The rapid fixation of an advantageous mutation and concurrent reduction of variation in surrounding genomic regions", "The increase in frequency of a neutral allele linked to a selected site", "Random fixation of alleles in small populations"],
    answer: 1,
    explanation: "A selective sweep occurs when positive selection rapidly drives a beneficial allele to fixation. Neutral variants tightly linked to the selected site are dragged along (hitchhiking), reducing diversity in the surrounding chromosomal region — a genomic signature used to detect recent positive selection."
  },
  {
    id: 36,
    question: "Background selection refers to:",
    options: ["Positive selection increasing the frequency of a linked neutral allele", "The reduction of neutral genetic diversity at sites linked to those under strong purifying selection", "Selection acting equally on all sites in the genome", "The effect of migration on local adaptation"],
    answer: 1,
    explanation: "Background selection describes the removal of linked neutral variants as a consequence of purifying selection against recurring deleterious mutations. It reduces Ne and genetic diversity at linked neutral sites, particularly in regions of low recombination."
  },
  {
    id: 37,
    question: "A phylogenetic tree inferred by the neighbor-joining method is based on:",
    options: ["Maximum likelihood estimation of substitution model parameters", "Minimizing the total branch length using a distance matrix", "Parsimony criterion requiring fewest changes", "Bayesian posterior probabilities"],
    answer: 1,
    explanation: "Neighbor-joining is a distance-based tree-building method that sequentially joins the pair of taxa (neighbors) that minimizes the total branch length of the tree. It is computationally fast and widely used for large datasets, though it is not a model-based approach."
  },
  {
    id: 38,
    question: "The concept of genetic hitchhiking predicts that neutral alleles linked to a positively selected allele will:",
    options: ["Decrease in frequency due to interference", "Increase in frequency and potentially reach fixation along with the selected allele", "Recombine away from the selected site immediately", "Remain at their original frequency"],
    answer: 1,
    explanation: "Genetic hitchhiking (Hill-Robertson effect) occurs when a neutral allele is in linkage disequilibrium with a positively selected allele. As the selected allele sweeps to fixation, the linked neutral allele rides along, increasing in frequency regardless of its own fitness effect."
  },
  {
    id: 39,
    question: "Which statistic is used to detect natural selection by comparing polymorphism within species to divergence between species?",
    options: ["Tajima's D", "McDonald-Kreitman (MK) test", "Fst outlier test", "dN/dS ratio"],
    answer: 1,
    explanation: "The McDonald-Kreitman test compares the ratio of synonymous to nonsynonymous changes within species (polymorphism) to that between species (divergence). Departure from equality (specifically, excess nonsynonymous divergence) is evidence for positive selection."
  },
  {
    id: 40,
    question: "In population genetics, the term 'fixation' of an allele means:",
    options: ["The allele is removed from the population (frequency = 0)", "The allele reaches a frequency of 1.0 (100%) in the population", "The allele frequency stabilizes at an intermediate value", "The allele is preserved by balancing selection"],
    answer: 1,
    explanation: "Fixation occurs when an allele reaches a frequency of 1 (100%) in the population, meaning all individuals are homozygous for that allele and no other allele exists at that locus. The complementary process is loss (frequency = 0)."
  },
  {
    id: 41,
    question: "For a newly arisen neutral mutation in a diploid population of size N, the probability of its eventual fixation is:",
    options: ["1/N", "1/2N", "1/(4N)", "Depends on the mutation rate"],
    answer: 1,
    explanation: "Each new mutation begins as a single copy among 2N alleles in a diploid population. Under neutrality (no selection), its probability of fixation equals its initial frequency = 1/2N. This is a cornerstone result of population genetics and the neutral theory."
  },
  {
    id: 42,
    question: "Genetic drift and natural selection interact such that:",
    options: ["Selection always dominates regardless of population size", "Drift dominates when Ns << 1 (where s is the selection coefficient); selection dominates when Ns >> 1", "Drift and selection are always equally important", "Only drift matters in large populations"],
    answer: 1,
    explanation: "The relative importance of selection vs. drift is determined by the product Ns (or 2Ns for diploids). When |2Nes| >> 1, selection is efficient; when |2Nes| << 1, drift overwhelms selection and even slightly deleterious mutations can be fixed randomly."
  },
  {
    id: 43,
    question: "The Out-of-Africa model of modern human dispersal is supported by which genetic evidence?",
    options: ["Lower genetic diversity in African populations compared to non-African populations", "Greater genetic diversity within Africa and a founder effect pattern as populations dispersed out of Africa", "Equal genetic diversity in all human populations worldwide", "Higher rates of positive selection in non-African populations"],
    answer: 1,
    explanation: "African populations harbor greater genetic diversity (more alleles, higher heterozygosity) than non-African populations, and genetic diversity decreases with geographic distance from Africa. This pattern is consistent with serial founder effects as modern humans dispersed from an African origin."
  },
  {
    id: 44,
    question: "Which of the following would NOT cause a deviation from Hardy-Weinberg equilibrium?",
    options: ["Inbreeding", "Random mating in a large population with no selection, mutation, or migration", "Strong directional selection", "Small population size causing genetic drift"],
    answer: 1,
    explanation: "Hardy-Weinberg equilibrium is maintained only when all assumptions are met: random mating, large population, no selection, no mutation, no migration. Random mating in a large population with no other evolutionary forces is the exact condition that maintains HWE."
  },
  {
    id: 45,
    question: "Molecular phylogenies based on slowly evolving genes (like 18S rRNA) are most appropriate for:",
    options: ["Distinguishing populations within a species", "Reconstructing deep evolutionary relationships among distantly related organisms", "Inferring recent speciation events", "Studying intraspecific genetic variation"],
    answer: 1,
    explanation: "Slowly evolving genes like 18S rRNA accumulate few changes over time, making them saturated (uninformative) for recent divergences but ideal for resolving ancient deep-level relationships among distantly related taxa. Faster-evolving markers are used for recent events."
  },
  {
    id: 46,
    question: "In the island-mainland model, local adaptation can be maintained despite gene flow when:",
    options: ["Gene flow is very high", "Selection is strong enough relative to migration rate (s >> m)", "Population size is very small", "Mutation rate is high"],
    answer: 1,
    explanation: "Local adaptation requires that selection favoring local alleles is stronger than the homogenizing force of gene flow. When the selection coefficient s greatly exceeds the migration rate m (s >> m), locally adapted alleles can be maintained even with ongoing gene flow."
  },
  {
    id: 47,
    question: "The time to coalescence (TMRCA) for a sample of gene copies from a population of effective size Ne is approximately:",
    options: ["Ne generations", "2Ne generations", "4Ne generations", "Ne/2 generations"],
    answer: 1,
    explanation: "For a diploid population, the expected time to the most recent common ancestor (TMRCA) for a pair of alleles is 2Ne generations. For a sample, the total coalescence time is approximately 4Ne generations for large samples, but pairwise coalescence time is 2Ne."
  },
  {
    id: 48,
    question: "What is the significance of the Ewens sampling formula in population genetics?",
    options: ["It predicts genotype frequencies under selection", "It gives the probability distribution of allele frequencies in a neutral sample, forming the basis for testing neutrality", "It calculates FST from migration rates", "It models the fixation of beneficial alleles"],
    answer: 1,
    explanation: "The Ewens sampling formula provides the probability distribution of distinct allele counts in a random sample under the infinite alleles neutral model. It is fundamental for calculating the expected distribution of allele frequencies under neutrality and forms the basis for neutrality tests."
  },
  {
    id: 49,
    question: "Isolation by distance (IBD) describes the pattern where:",
    options: ["Genetic differentiation is constant regardless of geographic distance", "Genetic similarity decreases (FST increases) with increasing geographic distance between populations", "Geographically distant populations are more genetically similar", "Only populations separated by barriers show genetic differentiation"],
    answer: 1,
    explanation: "Isolation by distance, formalized by Sewall Wright, describes the pattern where gene flow decreases with geographic distance. As a result, nearby populations share more alleles (lower FST) while distant populations become progressively more differentiated, creating a continuous spatial genetic gradient."
  },
  {
    id: 50,
    question: "The McDonald-Kreitman test finds a significant excess of nonsynonymous fixed differences between species compared to polymorphisms within species. This is interpreted as evidence for:",
    options: ["Strong purifying selection removing nonsynonymous variants", "Positive (adaptive) selection driving nonsynonymous substitutions to fixation between species", "Relaxed selective constraint in coding sequences", "Elevated mutation rate at nonsynonymous sites"],
    answer: 1,
    explanation: "Under neutrality, the ratio of nonsynonymous to synonymous changes should be the same for polymorphisms and fixed differences. Excess nonsynonymous fixed differences (relative to polymorphisms) indicates that positive selection has driven amino acid changes to fixation between species faster than expected under neutrality."
  }
];

export default questions;
