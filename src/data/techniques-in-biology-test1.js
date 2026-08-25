const questions = [
  // ===== STUDY DESIGNS (Q1–Q10) =====
  {
    id: 1,
    question: "A researcher follows a cohort of 5,000 smokers and 5,000 non-smokers for 20 years to compare lung cancer incidence. This is an example of:",
    options: ["Case-control study", "Prospective cohort study", "Cross-sectional study", "Randomized controlled trial"],
    answer: 1,
    explanation: "A prospective cohort study follows defined groups (exposed vs. unexposed) forward in time to observe outcomes. This design allows direct calculation of incidence rates and relative risk but is time-consuming and expensive for rare diseases."
  },
  {
    id: 2,
    question: "In a case-control study, the measure of association typically calculated is:",
    options: ["Relative risk", "Odds ratio", "Hazard ratio", "Incidence rate ratio"],
    answer: 1,
    explanation: "Case-control studies start with cases (disease) and controls (no disease) and look back at exposures. Since the incidence of disease cannot be directly measured (sampling is based on disease status), the odds ratio is used as the measure of association. It approximates relative risk when the disease is rare (rare disease assumption)."
  },
  {
    id: 3,
    question: "A study measures the prevalence of diabetes and hypertension simultaneously in a population at one point in time. This design is called:",
    options: ["Ecological study", "Cross-sectional study", "Retrospective cohort study", "Case series"],
    answer: 1,
    explanation: "A cross-sectional study measures exposure and outcome simultaneously at one time point. It provides prevalence data and can identify associations but cannot establish temporality or causation. It is sometimes called a prevalence study."
  },
  {
    id: 4,
    question: "Which study design provides the highest level of evidence for establishing causation?",
    options: ["Meta-analysis of observational studies", "Randomized controlled trial", "Prospective cohort study", "Case-control study"],
    answer: 1,
    explanation: "Randomized controlled trials (RCTs) are considered the gold standard for establishing causation because randomization minimizes confounding, selection bias, and other systematic errors. However, meta-analyses of RCTs are at the top of the evidence hierarchy."
  },
  {
    id: 5,
    question: "An ecological study differs from other observational studies because:",
    options: ["It uses individual-level data", "The unit of analysis is a population or group rather than an individual", "It can establish causation directly", "It always involves randomization"],
    answer: 1,
    explanation: "Ecological studies analyze data at the population or group level (e.g., comparing disease rates between countries). The ecological fallacy occurs when inferences about individuals are drawn from group-level data, as associations at the group level may not hold at the individual level."
  },
  {
    id: 6,
    question: "A nested case-control study is conducted:",
    options: ["In the general population without any prior cohort", "Within an already established cohort", "Only in hospital-based settings", "Using ecological-level data"],
    answer: 1,
    explanation: "A nested case-control study selects cases and controls from within a pre-existing cohort. This design is more efficient than a full cohort analysis, reduces recall bias (since exposure data is often collected before disease onset), and allows proper estimation of relative risk."
  },
  {
    id: 7,
    question: "Which of the following is a key disadvantage of retrospective cohort studies compared to prospective cohort studies?",
    options: ["They cannot calculate incidence rates", "They are subject to greater information bias due to reliance on existing records", "They require longer follow-up periods", "They cannot measure relative risk"],
    answer: 1,
    explanation: "Retrospective cohort studies use historical data, which may be incomplete, inaccurate, or inconsistently recorded, leading to information bias. However, they can still calculate incidence rates and relative risk because the cohort structure is maintained."
  },
  {
    id: 8,
    question: "In a crossover study design, each participant:",
    options: ["Receives only the experimental treatment", "Serves as their own control by receiving both treatment and control at different times", "Is observed only once", "Is randomized to a single group permanently"],
    answer: 1,
    explanation: "In a crossover design, each participant receives both the treatment and control (in random order) separated by a washout period. This eliminates between-subject variability and requires fewer participants, but is susceptible to carryover effects and is unsuitable for conditions that change irreversibly."
  },
  {
    id: 9,
    question: "A study compares outcomes in patients who chose surgery versus medication for a condition, without randomization. This is an example of:",
    options: ["Randomized controlled trial", "Quasi-experimental study", "Double-blind trial", "Ecological study"],
    answer: 1,
    explanation: "Quasi-experimental studies lack randomization but compare outcomes between groups. They are used when randomization is unethical or impractical. The major limitation is confounding by indication — patients who choose surgery may differ systematically from those who choose medication."
  },
  {
    id: 10,
    question: "Which bias is most inherent to case-control studies?",
    options: ["Lead-time bias", "Recall bias", "Attrition bias", "Berkson's bias only in cohort studies"],
    answer: 1,
    explanation: "Recall bias is a major concern in case-control studies because cases (who have the disease) tend to remember or report past exposures differently than controls. Cases may search their memory more thoroughly for exposures, leading to differential misclassification."
  },

  // ===== EXPERIMENTAL CONTROLS (Q11–Q20) =====
  {
    id: 11,
    question: "In an experiment testing a new drug, the negative control group receives:",
    options: ["A known effective drug", "A placebo or no treatment", "The highest dose of the experimental drug", "A different experimental drug"],
    answer: 1,
    explanation: "A negative control receives a placebo or no treatment to establish the baseline response. This allows researchers to determine whether the experimental treatment has an effect beyond what would occur naturally or due to the placebo effect."
  },
  {
    id: 12,
    question: "A positive control in an experiment serves to:",
    options: ["Establish baseline measurements only", "Confirm that the experimental system is capable of producing the expected result", "Eliminate all confounding variables", "Replace the need for replication"],
    answer: 1,
    explanation: "A positive control uses a known effective treatment or condition to verify the assay or experimental system is working correctly. If the positive control fails, it indicates a problem with the experimental setup rather than with the test compound."
  },
  {
    id: 13,
    question: "In a Western blot experiment, loading a known protein of expected molecular weight serves as:",
    options: ["Negative control", "Positive control", "Internal standard", "Vehicle control"],
    answer: 1,
    explanation: "Loading a known protein of expected molecular weight serves as a positive control, confirming that the antibody detection system, transfer, and blotting procedures are working properly. Without this, a negative result could be due to technical failure rather than true absence of the target protein."
  },
  {
    id: 14,
    question: "A vehicle control is used when:",
    options: ["Testing if the vehicle used to deliver the drug has any effect on the outcome", "Comparing two different drugs", "No solvent is used in the experiment", "The experiment has only one treatment group"],
    answer: 0,
    explanation: "A vehicle control receives only the solvent or carrier (e.g., DMSO, saline) used to dissolve the drug, without the active compound. This determines whether any observed effects are due to the drug itself or the vehicle, which may have its own biological effects."
  },
  {
    id: 15,
    question: "In a PCR experiment, a no-template control (NTC) is included to detect:",
    options: ["Primer efficiency", "Contamination of reagents with target DNA", "Annealing temperature optimization", "Polymerase processivity"],
    answer: 1,
    explanation: "A no-template control contains all PCR reagents except template DNA. Any amplification in the NTC indicates contamination of reagents with target DNA or carryover from previous reactions. This is a critical negative control for ensuring result validity."
  },
  {
    id: 16,
    question: "Sham surgery in animal experiments is an example of:",
    options: ["Positive control", "Negative/procedural control", "Internal control", "Historical control"],
    answer: 1,
    explanation: "Sham surgery involves performing all surgical procedures (anesthesia, incision, suturing) without the actual intervention. This procedural control accounts for the effects of the surgical process itself, including stress response, wound healing, and anesthesia effects."
  },
  {
    id: 17,
    question: "A housekeeping gene (e.g., GAPDH) in qPCR serves as:",
    options: ["Positive control for amplification", "Internal reference control for normalization", "No-template control", "Standard curve control"],
    answer: 1,
    explanation: "Housekeeping genes like GAPDH, beta-actin, or 18S rRNA are used as internal reference controls in qPCR. They are assumed to be expressed at constant levels across conditions, allowing normalization of target gene expression to account for variations in RNA input, reverse transcription efficiency, and PCR efficiency."
  },
  {
    id: 18,
    question: "Using historical controls rather than concurrent controls in a clinical trial can lead to:",
    options: ["Increased statistical power", "Temporal confounding due to changes in standard of care over time", "Elimination of selection bias", "Better randomization"],
    answer: 1,
    explanation: "Historical controls use data from previously treated patients rather than a concurrent comparison group. This introduces temporal confounding because changes in diagnostic criteria, treatment standards, patient demographics, and disease definitions over time may account for observed differences rather than the experimental treatment."
  },
  {
    id: 19,
    question: "An isotype control in flow cytometry is used to:",
    options: ["Calibrate the laser alignment", "Determine the level of non-specific antibody binding", "Set the forward scatter threshold", "Measure cell viability"],
    answer: 1,
    explanation: "An isotype control is an antibody of the same class (isotype) and fluorochrome as the primary antibody but has no specificity for the target antigen. It measures background fluorescence due to non-specific Fc receptor binding or other non-specific interactions, helping to set appropriate gating thresholds."
  },
  {
    id: 20,
    question: "In a dose-response experiment, including multiple concentrations of the treatment is important because:",
    options: ["It replaces the need for statistical analysis", "It establishes whether the effect is concentration-dependent, supporting a causal relationship", "It eliminates the need for controls", "It reduces the sample size required"],
    answer: 1,
    explanation: "A dose-response relationship is one of Bradford Hill's criteria for causation. Demonstrating that increasing concentrations of the treatment produce proportionally greater (or lesser) effects strengthens the evidence that the treatment is causing the observed outcome rather than a confounding variable."
  },

  // ===== RANDOMIZATION (Q21–Q30) =====
  {
    id: 21,
    question: "The primary purpose of randomization in a clinical trial is to:",
    options: ["Increase the sample size", "Minimize selection bias and balance known and unknown confounders between groups", "Ensure blinding of participants", "Reduce the cost of the study"],
    answer: 1,
    explanation: "Randomization assigns participants to treatment groups by chance, minimizing selection bias and balancing both known and unknown confounders. This is the key advantage over observational studies — it makes treatment groups comparable at baseline, allowing causal inference."
  },
  {
    id: 22,
    question: "In block randomization, what is the primary advantage?",
    options: ["It ensures equal sample sizes across treatment groups at regular intervals", "It eliminates the need for a control group", "It allows unblinded allocation", "It reduces the number of participants needed"],
    answer: 0,
    explanation: "Block randomization ensures approximately equal numbers of participants in each treatment group after every block. For example, with a block size of 4 and two groups, each block contains 2 assignments to each group in random order. This prevents large imbalances that can occur with simple randomization, especially in smaller trials."
  },
  {
    id: 23,
    question: "Stratified randomization is used when:",
    options: ["The sample size is very large", "There are important prognostic factors that need to be balanced across treatment groups", "Blinding is not possible", "Only two treatment groups exist"],
    answer: 1,
    explanation: "Stratified randomization first divides participants into strata based on important prognostic factors (e.g., age, disease stage, sex) and then randomizes within each stratum. This ensures balance of these factors across treatment groups, which is particularly important in smaller trials."
  },
  {
    id: 24,
    question: "Simple randomization is most appropriate when:",
    options: ["The sample size is small", "The sample size is large enough that chance imbalances are unlikely", "Multiple prognostic factors need balancing", "The trial is unblinded"],
    answer: 1,
    explanation: "Simple randomization (e.g., coin flip, random number generator) works well with large sample sizes because the law of large numbers ensures approximate balance. With small samples, it can produce significant imbalances between groups, making block or stratified randomization preferable."
  },
  {
    id: 25,
    question: "Cluster randomization involves randomizing:",
    options: ["Individual participants to treatment groups", "Groups or clusters (e.g., hospitals, schools) rather than individuals", "Participants based on their baseline characteristics", "Only participants who consent to all treatments"],
    answer: 1,
    explanation: "In cluster randomization, entire groups (clusters) such as hospitals, clinics, or communities are randomized rather than individual participants. This is used when individual randomization is impractical (e.g., educational interventions) or to avoid contamination between groups. Analysis must account for intracluster correlation."
  },
  {
    id: 26,
    question: "Adaptive randomization adjusts allocation probabilities based on:",
    options: ["The investigator's preference", "Accumulating data on baseline characteristics or outcomes during the trial", "The participant's wishes", "External funding decisions"],
    answer: 1,
    explanation: "Adaptive randomization modifies the probability of assignment to each group based on the current balance of covariates (covariate-adaptive) or observed outcomes (response-adaptive). This can improve balance or increase the proportion of patients receiving the more effective treatment, but adds complexity to analysis."
  },
  {
    id: 27,
    question: "Which of the following is a consequence of inadequate randomization?",
    options: ["Increased type II error only", "Selection bias leading to confounded results", "Improved generalizability", "Reduced need for informed consent"],
    answer: 1,
    explanation: "Inadequate or broken randomization allows systematic differences between groups that can confound results. If the allocation method is predictable (e.g., alternating assignment), investigators may consciously or unconsciously assign participants in a biased manner, invalidating the trial's ability to demonstrate causation."
  },
  {
    id: 28,
    question: "Allocation concealment differs from blinding in that:",
    options: ["They are the same concept", "Allocation concealment prevents foreknowledge of treatment assignment before enrollment, while blinding prevents knowledge after enrollment", "Allocation concealment is only relevant in observational studies", "Blinding always implies allocation concealment"],
    answer: 1,
    explanation: "Allocation concealment ensures that the person enrolling participants does not know the upcoming treatment assignment, preventing selection bias at enrollment. Blinding (masking) prevents participants and/or investigators from knowing the assigned treatment after enrollment, preventing information and performance bias. Both are critical but address different biases."
  },
  {
    id: 29,
    question: "Minimization as a randomization technique:",
    options: ["Is a form of simple randomization", "Assigns participants to treatment groups to minimize overall imbalance in prognostic factors", "Requires large sample sizes to be effective", "Cannot handle multiple prognostic factors simultaneously"],
    answer: 1,
    explanation: "Minimization is a dynamic allocation method that assigns each new participant to the treatment group that would minimize the total imbalance across specified prognostic factors. It is particularly useful in small trials with multiple important covariates, though it is not strictly random and may introduce some predictability."
  },
  {
    id: 30,
    question: "In a randomized controlled trial, the intention-to-treat (ITT) analysis:",
    options: ["Excludes participants who did not comply with treatment", "Analyzes all participants in the group to which they were randomized, regardless of compliance", "Only includes participants who completed the study", "Adjusts group assignments based on actual treatment received"],
    answer: 1,
    explanation: "Intention-to-treat analysis includes all randomized participants in their originally assigned groups, regardless of whether they completed treatment, switched groups, or were lost to follow-up. This preserves the benefits of randomization, avoids bias from differential dropout, and reflects real-world effectiveness rather than just efficacy."
  },

  // ===== SAMPLING (Q31–Q40) =====
  {
    id: 31,
    question: "In simple random sampling, every member of the population has:",
    options: ["A different probability of being selected", "An equal and known probability of being selected", "No chance of being selected twice", "A probability of selection proportional to their importance"],
    answer: 1,
    explanation: "Simple random sampling gives every individual in the population an equal probability of selection. This can be achieved using random number tables or computer-generated random numbers. It is the foundation of probability sampling and allows unbiased estimation of population parameters."
  },
  {
    id: 32,
    question: "Stratified sampling is preferred over simple random sampling when:",
    options: ["The population is homogeneous", "The population has distinct subgroups and you want to ensure representation of each", "The sample size is very large", "Convenience is the primary concern"],
    answer: 1,
    explanation: "Stratified sampling divides the population into homogeneous subgroups (strata) based on a characteristic (e.g., age, sex, region) and then randomly samples from each stratum. This ensures representation of all subgroups and can improve precision of estimates, especially when strata differ significantly in the outcome of interest."
  },
  {
    id: 33,
    question: "Systematic sampling involves:",
    options: ["Selecting every kth individual from a list after a random start", "Selecting individuals based on convenience", "Selecting entire clusters randomly", "Using a quota to fill predetermined categories"],
    answer: 0,
    explanation: "Systematic sampling selects every kth individual from an ordered list, starting from a randomly chosen point within the first k individuals. If k = 10, you might randomly start at person 3, then select 13, 23, 33, etc. It is simpler than simple random sampling but can be biased if the list has a periodic pattern."
  },
  {
    id: 34,
    question: "Cluster sampling is most useful when:",
    options: ["A complete list of all individuals in the population is available", "The population is geographically dispersed and a complete list is impractical", "The population is very small", "Individual-level precision is the primary goal"],
    answer: 1,
    explanation: "Cluster sampling randomly selects entire groups (clusters) such as villages, schools, or health centers, and then studies all or a random sample of individuals within selected clusters. It is cost-effective for geographically dispersed populations but has lower statistical efficiency (higher design effect) compared to simple random sampling."
  },
  {
    id: 35,
    question: "Convenience sampling is a type of:",
    options: ["Probability sampling", "Non-probability sampling", "Stratified sampling", "Multi-stage sampling"],
    answer: 1,
    explanation: "Convenience sampling selects participants based on availability and ease of access rather than random selection. It is a non-probability method, meaning the probability of selection is unknown. While quick and inexpensive, it is prone to selection bias and results may not be generalizable to the broader population."
  },
  {
    id: 36,
    question: "The sampling error decreases when:",
    options: ["The sample size decreases", "The sample size increases", "Non-probability sampling is used", "The population becomes more heterogeneous with the same sample size"],
    answer: 1,
    explanation: "Sampling error is the difference between a sample statistic and the true population parameter. It decreases as sample size increases because larger samples better represent the population. Specifically, the standard error is inversely proportional to the square root of the sample size (SE = sigma/sqrt(n))."
  },
  {
    id: 37,
    question: "In multistage sampling, the process involves:",
    options: ["Selecting individuals in a single step", "Selecting sampling units in successive stages (e.g., states, then districts, then households)", "Using only non-probability methods", "Stratifying without any random selection"],
    answer: 1,
    explanation: "Multistage sampling selects samples in successive stages. For example, first randomly select states, then randomly select districts within those states, then households within districts. This is practical for large-scale surveys like national health surveys where a complete population list is unavailable."
  },
  {
    id: 38,
    question: "Snowball sampling is most appropriate for:",
    options: ["Large, easily accessible populations", "Hard-to-reach or hidden populations", "Populations with complete sampling frames", "Studies requiring strict probability sampling"],
    answer: 1,
    explanation: "Snowball sampling recruits participants through referrals from existing participants. It is particularly useful for studying hard-to-reach or stigmatized populations (e.g., injection drug users, undocumented immigrants) where no sampling frame exists. However, it introduces referral bias and limits generalizability."
  },
  {
    id: 39,
    question: "The design effect (DEFF) in cluster sampling refers to:",
    options: ["The ratio of variance under cluster sampling to variance under simple random sampling of the same size", "The number of clusters selected", "The total sample size divided by the number of clusters", "The response rate in the study"],
    answer: 0,
    explanation: "The design effect (DEFF) quantifies the loss of efficiency when using cluster sampling compared to simple random sampling. DEFF > 1 (typical for cluster sampling) indicates that clusters are internally more homogeneous than the population, requiring a larger sample size to achieve the same precision. DEFF = 1 + (m-1) * ICC, where m is the average cluster size and ICC is the intracluster correlation coefficient."
  },
  {
    id: 40,
    question: "Quota sampling differs from stratified random sampling in that:",
    options: ["Both use probability-based selection within strata", "Quota sampling uses non-random selection within categories while stratified sampling uses random selection within strata", "Quota sampling is more statistically rigorous", "There is no practical difference between them"],
    answer: 1,
    explanation: "In quota sampling, the researcher fills predetermined quotas for each subgroup but selects individuals non-randomly (e.g., by convenience). In stratified random sampling, individuals within each stratum are selected randomly. Quota sampling is cheaper and faster but subject to selection bias, while stratified sampling allows valid statistical inference."
  },

  // ===== HYPOTHESIS TESTING (Q41–Q50) =====
  {
    id: 41,
    question: "The null hypothesis (H0) in a clinical trial typically states that:",
    options: ["The treatment is effective", "There is no difference between the treatment and control groups", "The sample is not representative", "The study has adequate power"],
    answer: 1,
    explanation: "The null hypothesis states that there is no difference between groups or no effect of the treatment. Statistical testing attempts to reject this null hypothesis. If the evidence is strong enough (p-value below alpha), we reject H0 in favor of the alternative hypothesis (H1) that a real difference exists."
  },
  {
    id: 42,
    question: "A Type I error occurs when:",
    options: ["The null hypothesis is incorrectly rejected (false positive)", "The null hypothesis is incorrectly accepted (false negative)", "The sample size is too small", "The study lacks external validity"],
    answer: 0,
    explanation: "A Type I error (alpha error, false positive) occurs when we reject a true null hypothesis — concluding there is an effect when there actually is none. The probability of a Type I error is set by the significance level (alpha), conventionally 0.05, meaning we accept a 5% chance of this error."
  },
  {
    id: 43,
    question: "A Type II error occurs when:",
    options: ["The null hypothesis is incorrectly rejected", "The null hypothesis is not rejected when it is actually false (false negative)", "The confidence interval is too wide", "The p-value is less than 0.05"],
    answer: 1,
    explanation: "A Type II error (beta error, false negative) occurs when we fail to reject a false null hypothesis — missing a real effect. The probability of a Type II error is denoted beta. Statistical power (1 - beta) is the probability of correctly detecting a true effect, typically set at 0.80 or 0.90."
  },
  {
    id: 44,
    question: "Statistical power of a study is increased by:",
    options: ["Decreasing the sample size", "Increasing the significance level (alpha)", "Decreasing the effect size", "Using a one-sided test instead of a two-sided test"],
    answer: 3,
    explanation: "A one-sided test concentrates all of alpha in one tail, increasing power to detect effects in that direction. Power is also increased by increasing sample size, increasing alpha, increasing effect size, and decreasing variability. However, one-sided tests should only be used when there is strong a priori justification for the direction of the effect."
  },
  {
    id: 45,
    question: "The alternative hypothesis (H1) in a two-tailed test states that:",
    options: ["The treatment effect is only in the positive direction", "There is a difference between groups, in either direction", "The null hypothesis is true", "The sample is biased"],
    answer: 1,
    explanation: "A two-tailed alternative hypothesis states that the parameter differs from the null value in either direction (could be greater or less). This is the default in most research because we typically want to detect effects in either direction. A two-tailed test at alpha = 0.05 rejects H0 if the test statistic falls in either the top or bottom 2.5% of the distribution."
  },
  {
    id: 46,
    question: "A non-inferiority trial tests whether:",
    options: ["A new treatment is superior to standard care", "A new treatment is not worse than the standard by more than a pre-specified margin", "Two treatments are exactly equal", "The new treatment has fewer side effects"],
    answer: 1,
    explanation: "A non-inferiority trial aims to show that a new treatment is not worse than the comparator by more than a pre-specified non-inferiority margin (delta). This design is used when the new treatment has other advantages (cost, convenience, safety) and strict superiority is not required. The margin must be clinically justified."
  },
  {
    id: 47,
    question: "Multiple testing correction (e.g., Bonferroni correction) is necessary because:",
    options: ["It increases statistical power", "Performing multiple tests inflates the overall Type I error rate (family-wise error rate)", "It eliminates Type II errors", "It reduces the sample size needed"],
    answer: 1,
    explanation: "When multiple comparisons are made, the probability of at least one false positive increases. With 20 independent tests at alpha = 0.05, the probability of at least one Type I error is 1 - (0.95)^20 = 0.64. Bonferroni correction divides alpha by the number of tests (e.g., 0.05/20 = 0.0025), controlling the family-wise error rate but reducing power."
  },
  {
    id: 48,
    question: "A paired t-test is appropriate when:",
    options: ["Comparing means of two independent groups", "Comparing means of two related measurements (e.g., before and after treatment in the same subjects)", "Comparing proportions between groups", "The data is non-normally distributed"],
    answer: 1,
    explanation: "A paired t-test compares two related measurements from the same subjects (e.g., pre- and post-treatment) or matched pairs. By analyzing the differences within pairs, it controls for individual variability and has greater power than an independent t-test. It assumes the differences are normally distributed."
  },
  {
    id: 49,
    question: "The chi-square test is used to:",
    options: ["Compare means of two groups", "Test the association between two categorical variables", "Calculate correlation coefficients", "Determine the median of a distribution"],
    answer: 1,
    explanation: "The chi-square test of independence assesses whether there is a significant association between two categorical variables by comparing observed frequencies with expected frequencies under the null hypothesis of independence. It requires adequate expected cell counts (generally >=5). Fisher's exact test is used when expected counts are small."
  },
  {
    id: 50,
    question: "The Mann-Whitney U test is a non-parametric alternative to:",
    options: ["Paired t-test", "Independent samples t-test", "One-way ANOVA", "Chi-square test"],
    answer: 1,
    explanation: "The Mann-Whitney U test (also called Wilcoxon rank-sum test) compares two independent groups when the assumptions of the independent t-test (normality, equal variances) are violated. It ranks all observations and compares the sum of ranks between groups. The non-parametric equivalent of the paired t-test is the Wilcoxon signed-rank test."
  }
];

export default questions;
