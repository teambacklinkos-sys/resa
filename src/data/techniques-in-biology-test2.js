const questions = [
  // ===== P-VALUE (Q1–Q12) =====
  {
    id: 1,
    question: "The p-value in a hypothesis test represents:",
    options: ["The probability that the null hypothesis is true", "The probability of obtaining results as extreme as or more extreme than the observed data, assuming the null hypothesis is true", "The probability that the alternative hypothesis is true", "The probability of making a Type II error"],
    answer: 1,
    explanation: "The p-value is the probability of obtaining data as extreme as or more extreme than what was observed, given that the null hypothesis is true. It is NOT the probability that H0 is true or false. A common misconception is interpreting p = 0.03 as a 3% probability that the null hypothesis is true."
  },
  {
    id: 2,
    question: "A p-value of 0.03 means:",
    options: ["There is a 3% chance the null hypothesis is true", "If the null hypothesis were true, there is a 3% probability of obtaining results this extreme or more extreme by chance", "The treatment is 97% effective", "The result is clinically significant"],
    answer: 1,
    explanation: "A p-value of 0.03 means that if H0 were true, there is only a 3% probability of observing data as extreme as or more extreme than what was observed. Since this is below the conventional alpha of 0.05, we reject H0. However, statistical significance does not automatically imply clinical significance."
  },
  {
    id: 3,
    question: "The significance level (alpha) is:",
    options: ["Determined after data analysis", "The pre-specified threshold below which the p-value leads to rejection of the null hypothesis", "Always set at 0.01", "The same as the p-value"],
    answer: 1,
    explanation: "Alpha is the pre-specified probability of making a Type I error (rejecting a true null hypothesis). It is set before data collection, conventionally at 0.05. If the calculated p-value is less than alpha, we reject H0. The choice of alpha depends on the consequences of a false positive."
  },
  {
    id: 4,
    question: "A statistically significant result (p < 0.05) does NOT necessarily mean:",
    options: ["The null hypothesis should be rejected at the 5% significance level", "The result is unlikely under the null hypothesis", "The result is clinically meaningful or practically important", "The test was conducted properly"],
    answer: 2,
    explanation: "Statistical significance indicates only that the observed effect is unlikely to be due to chance alone at the chosen alpha level. It says nothing about the magnitude or clinical importance of the effect. A very large study can find tiny, clinically irrelevant differences to be statistically significant. Effect size and clinical context must be considered."
  },
  {
    id: 5,
    question: "A researcher conducts 20 independent tests at alpha = 0.05. The expected number of false positives is:",
    options: ["0", "1", "5", "20"],
    answer: 1,
    explanation: "With 20 independent tests at alpha = 0.05, the expected number of false positives is 20 x 0.05 = 1. This illustrates the multiple testing problem: the more tests conducted, the more likely at least one false positive. This is why corrections like Bonferroni (alpha/n = 0.05/20 = 0.0025) or false discovery rate (FDR) methods are used."
  },
  {
    id: 6,
    question: "The false discovery rate (FDR) differs from the family-wise error rate (FWER) in that FDR controls:",
    options: ["The probability of making any Type I error", "The expected proportion of false positives among all rejected hypotheses", "The probability of making a Type II error", "The total number of tests performed"],
    answer: 1,
    explanation: "FDR (e.g., Benjamini-Hochberg procedure) controls the expected proportion of false discoveries (false positives) among all rejected null hypotheses. FWER (e.g., Bonferroni) controls the probability of making even one false positive. FDR is less conservative and more powerful, making it preferred in high-dimensional settings like genomics."
  },
  {
    id: 7,
    question: "A p-value of 0.001 compared to a p-value of 0.04 indicates:",
    options: ["The first result is more clinically important", "Stronger evidence against the null hypothesis for the first result", "The first result has a larger effect size", "The first study was better designed"],
    answer: 1,
    explanation: "A smaller p-value indicates that the observed data would be more surprising under the null hypothesis, providing stronger evidence against H0. However, it does not indicate a larger effect size, greater clinical importance, or better study design. Effect size and clinical context provide that information."
  },
  {
    id: 8,
    question: "A study finds p = 0.06. The most appropriate interpretation is:",
    options: ["The null hypothesis is accepted as true", "There is insufficient evidence to reject the null hypothesis at the 0.05 level, but the result may warrant further investigation", "The treatment definitely has no effect", "The study was poorly designed"],
    answer: 1,
    explanation: "A p-value of 0.06 means there is a 6% probability of the observed (or more extreme) result under H0. This does not meet the conventional 0.05 threshold, so we fail to reject H0. However, failing to reject H0 is not the same as proving H0 is true. The result may suggest a trend worth investigating with a larger sample or different design."
  },
  {
    id: 9,
    question: "The concept of 'p-hacking' refers to:",
    options: ["Using a very strict significance level", "Manipulating data analysis (e.g., selective reporting, subgroup mining) to achieve statistical significance", "Setting alpha before the study", "Using Bayesian methods instead of frequentist methods"],
    answer: 1,
    explanation: "P-hacking involves practices like testing multiple outcomes and reporting only significant ones, performing subgroup analyses post-hoc, removing outliers selectively, or stopping data collection when significance is reached. These practices inflate the false positive rate and undermine the validity of p-values. Pre-registration of study protocols helps prevent p-hacking."
  },
  {
    id: 10,
    question: "In a one-tailed test with alpha = 0.05, the critical region is located:",
    options: ["In both tails of the distribution, each containing 2.5%", "In only one tail of the distribution, containing the full 5%", "At the center of the distribution", "Across the entire distribution equally"],
    answer: 1,
    explanation: "A one-tailed test places all of alpha (5%) in one tail of the distribution, making it easier to reach significance in that direction. This increases power for detecting effects in the specified direction but cannot detect effects in the opposite direction. One-tailed tests require strong a priori justification."
  },
  {
    id: 11,
    question: "The relationship between sample size and p-value (holding effect size constant) is:",
    options: ["p-value increases as sample size increases", "p-value decreases as sample size increases", "p-value is independent of sample size", "p-value equals sample size divided by effect size"],
    answer: 1,
    explanation: "With a larger sample size, the standard error decreases, making the test statistic larger for the same effect size, which yields a smaller p-value. This is why very large studies can detect trivially small effects as statistically significant, highlighting the importance of reporting effect sizes alongside p-values."
  },
  {
    id: 12,
    question: "Bayesian analysis differs from frequentist hypothesis testing primarily because it:",
    options: ["Does not use probability", "Incorporates prior knowledge and calculates the probability of hypotheses given the data", "Always yields the same results as frequentist methods", "Does not require any assumptions"],
    answer: 1,
    explanation: "Bayesian analysis uses Bayes' theorem to update prior beliefs (prior probability) with observed data (likelihood) to produce posterior probabilities. Unlike frequentist p-values (probability of data given H0), Bayesian methods directly estimate the probability of H0 or H1 given the data, which is often what researchers actually want to know."
  },

  // ===== CONFIDENCE INTERVALS (Q13–Q25) =====
  {
    id: 13,
    question: "A 95% confidence interval means:",
    options: ["There is a 95% probability that the true parameter lies within this specific interval", "If the experiment were repeated many times, 95% of the calculated intervals would contain the true parameter", "95% of the sample data falls within the interval", "The result is 95% accurate"],
    answer: 1,
    explanation: "A 95% CI is a frequentist concept: if you repeated the experiment many times and calculated a CI each time, 95% of those intervals would contain the true population parameter. For any single interval, the true parameter either is or is not in the interval — the 95% refers to the long-run coverage probability of the method."
  },
  {
    id: 14,
    question: "The width of a confidence interval is primarily determined by:",
    options: ["Only the confidence level", "The sample size, variability of data, and confidence level", "Only the sample mean", "The p-value"],
    answer: 1,
    explanation: "CI width depends on: (1) sample size — larger samples give narrower CIs; (2) variability (standard deviation) — more variability gives wider CIs; (3) confidence level — higher confidence (e.g., 99% vs. 95%) gives wider CIs. The formula for a CI of a mean is: x-bar +/- z * (s / sqrt(n))."
  },
  {
    id: 15,
    question: "If a 95% confidence interval for the difference in means between two treatments is (-2.5, 8.3), we can conclude:",
    options: ["The treatment effect is statistically significant at alpha = 0.05", "The treatment effect is NOT statistically significant at alpha = 0.05 because the interval includes zero", "The null hypothesis is definitively true", "The treatment has no clinical relevance"],
    answer: 1,
    explanation: "When a CI for a difference includes zero (the null value), it means zero is a plausible value for the true difference, so we cannot reject H0 at that confidence level. The interval (-2.5, 8.3) includes zero, indicating no statistically significant difference. However, it also includes potentially meaningful positive differences, suggesting the study may be underpowered."
  },
  {
    id: 16,
    question: "Increasing the confidence level from 95% to 99% will:",
    options: ["Narrow the confidence interval", "Widen the confidence interval", "Not change the confidence interval", "Always make the result significant"],
    answer: 1,
    explanation: "A higher confidence level requires a wider interval to ensure that a greater proportion of intervals capture the true parameter. The z-value increases from 1.96 (95%) to 2.576 (99%), widening the interval. The trade-off is between confidence and precision — higher confidence means less precision (wider CI)."
  },
  {
    id: 17,
    question: "A confidence interval provides more information than a p-value because:",
    options: ["It gives only the direction of the effect", "It provides both the estimated effect size and the precision of the estimate", "It eliminates the need for hypothesis testing entirely", "It is always narrower than the p-value"],
    answer: 1,
    explanation: "A CI provides the point estimate (center of the interval) and the range of plausible values (indicating precision). A p-value only tells you whether the result is statistically significant at a given threshold. The CI conveys magnitude, direction, and uncertainty of the effect, making it more informative for clinical decision-making."
  },
  {
    id: 18,
    question: "The standard error of the mean (SEM) is calculated as:",
    options: ["Standard deviation multiplied by sample size", "Standard deviation divided by the square root of the sample size", "Mean divided by the standard deviation", "Variance multiplied by the sample size"],
    answer: 1,
    explanation: "SEM = SD / sqrt(n). It quantifies the precision of the sample mean as an estimate of the population mean. As sample size increases, SEM decreases, reflecting the increased precision. SEM is used to calculate confidence intervals (CI = mean +/- z * SEM) and should not be confused with SD, which measures data variability."
  },
  {
    id: 19,
    question: "A 95% confidence interval for a relative risk of (1.2, 3.8) indicates:",
    options: ["The exposure is protective", "The exposure is a statistically significant risk factor because the interval does not include 1.0", "The result is not statistically significant", "The relative risk is exactly 2.5"],
    answer: 1,
    explanation: "For ratio measures (relative risk, odds ratio, hazard ratio), the null value is 1.0 (indicating no association). Since the 95% CI (1.2, 3.8) does not include 1.0, the association is statistically significant at alpha = 0.05. The entire interval is above 1.0, indicating a significant increase in risk."
  },
  {
    id: 20,
    question: "The margin of error in a confidence interval is:",
    options: ["The sample mean", "Half the width of the confidence interval", "The p-value", "The standard deviation"],
    answer: 1,
    explanation: "The margin of error (E) is the distance from the point estimate to either boundary of the CI: E = z * (SD / sqrt(n)). The CI is then: point estimate +/- E. It represents the maximum expected difference between the sample statistic and the true population parameter at the given confidence level."
  },
  {
    id: 21,
    question: "To halve the width of a 95% confidence interval, the sample size must be:",
    options: ["Doubled", "Tripled", "Quadrupled", "Increased by 50%"],
    answer: 2,
    explanation: "The CI width is proportional to 1/sqrt(n). To halve the width, you need 1/sqrt(n') = (1/2) * 1/sqrt(n), which gives n' = 4n. This illustrates the diminishing returns of increasing sample size — quadrupling the sample size only halves the CI width."
  },
  {
    id: 22,
    question: "A confidence interval for a proportion requires a minimum sample size to be valid because:",
    options: ["Larger samples are always better", "The normal approximation to the binomial distribution requires adequate counts in both categories", "Proportions cannot be calculated from small samples", "Confidence intervals only work with large samples"],
    answer: 1,
    explanation: "The standard (Wald) CI for a proportion uses the normal approximation to the binomial distribution, which requires np >= 5 and n(1-p) >= 5. When these conditions are not met, exact methods (Clopper-Pearson) or the Wilson score interval should be used instead."
  },
  {
    id: 23,
    question: "The difference between a confidence interval and a credible interval is:",
    options: ["They are identical concepts", "A confidence interval is frequentist and a credible interval is Bayesian, which directly states the probability that the parameter lies within the interval", "A credible interval is always narrower", "A confidence interval uses prior probabilities"],
    answer: 1,
    explanation: "A frequentist CI has a coverage probability interpretation (long-run frequency). A Bayesian credible interval directly states the probability (given the data and prior) that the parameter lies within the interval — which is the intuitive interpretation most people mistakenly apply to CIs. The two methods may give different intervals, especially with informative priors."
  },
  {
    id: 24,
    question: "Overlapping confidence intervals between two groups:",
    options: ["Definitively prove no significant difference exists", "Do not necessarily mean the difference is non-significant; a formal comparison test is needed", "Always indicate a significant difference", "Mean the study should be repeated"],
    answer: 1,
    explanation: "Overlapping CIs do not necessarily indicate a non-significant difference. Two groups can have overlapping CIs yet show a statistically significant difference when formally tested. The CI of the difference between groups is the proper way to assess significance, not visual comparison of individual CIs."
  },
  {
    id: 25,
    question: "A prediction interval differs from a confidence interval in that it:",
    options: ["Is always narrower than a confidence interval", "Estimates the range within which a future individual observation is likely to fall, not the population mean", "Does not account for sampling variability", "Is only used in Bayesian analysis"],
    answer: 1,
    explanation: "A confidence interval estimates the range for a population parameter (like the mean). A prediction interval estimates the range for a future individual observation, accounting for both the uncertainty in the estimated mean and the natural variability of individual observations. Prediction intervals are always wider than confidence intervals."
  },

  // ===== SENSITIVITY & SPECIFICITY (Q26–Q38) =====
  {
    id: 26,
    question: "Sensitivity of a diagnostic test is defined as:",
    options: ["The proportion of test-positive individuals who truly have the disease", "The proportion of individuals with the disease who test positive (true positive rate)", "The proportion of test-negative individuals who are truly disease-free", "The overall accuracy of the test"],
    answer: 1,
    explanation: "Sensitivity = TP / (TP + FN) = true positive rate. It measures how well the test detects disease among those who actually have it. A highly sensitive test has few false negatives, making it good for ruling OUT disease (SnNOut: Sensitive test, Negative result, rules Out)."
  },
  {
    id: 27,
    question: "Specificity of a diagnostic test is defined as:",
    options: ["The proportion of test-positive individuals who truly have the disease", "The proportion of individuals with the disease who test positive", "The proportion of individuals without the disease who test negative (true negative rate)", "The proportion of all positive results that are correct"],
    answer: 2,
    explanation: "Specificity = TN / (TN + FP) = true negative rate. It measures how well the test identifies those who are disease-free. A highly specific test has few false positives, making it good for ruling IN disease (SpPIn: Specific test, Positive result, rules In)."
  },
  {
    id: 28,
    question: "A screening test for a rare disease should ideally have:",
    options: ["High specificity only", "High sensitivity to minimize false negatives", "Low sensitivity and high specificity", "Equal sensitivity and specificity"],
    answer: 1,
    explanation: "Screening tests aim to identify all potential cases for further confirmatory testing. High sensitivity ensures few diseased individuals are missed (low false negative rate). Missed cases in screening can have serious consequences. A confirmatory test with high specificity is then used to rule out false positives."
  },
  {
    id: 29,
    question: "Positive predictive value (PPV) is influenced by:",
    options: ["Only the sensitivity of the test", "Only the specificity of the test", "The prevalence of the disease in the population", "Neither sensitivity nor prevalence"],
    answer: 2,
    explanation: "PPV = TP / (TP + FP). While sensitivity and specificity are intrinsic properties of the test (independent of prevalence), PPV depends heavily on disease prevalence. As prevalence decreases, PPV decreases because the proportion of false positives increases relative to true positives, even with a highly specific test."
  },
  {
    id: 30,
    question: "In a population with very low disease prevalence, even a test with 99% specificity will have:",
    options: ["Very high positive predictive value", "A low positive predictive value due to many false positives relative to true positives", "No false positives", "No false negatives"],
    answer: 1,
    explanation: "With low prevalence, the number of truly diseased individuals is small. Even with 99% specificity, 1% of the large healthy population will test falsely positive, potentially outnumbering the true positives. For example, in a population of 100,000 with 0.1% prevalence: 100 true positives but ~999 false positives, giving PPV = 100/1099 = 9.1%."
  },
  {
    id: 31,
    question: "Negative predictive value (NPV) increases when:",
    options: ["Disease prevalence increases", "Disease prevalence decreases", "Sensitivity decreases", "Specificity decreases"],
    answer: 1,
    explanation: "NPV = TN / (TN + FN). When prevalence is low, there are fewer diseased individuals, so fewer potential false negatives, leading to higher NPV. Conversely, high prevalence means more diseased individuals in the tested population, increasing the chance of false negatives and lowering NPV."
  },
  {
    id: 32,
    question: "A likelihood ratio positive (LR+) is calculated as:",
    options: ["Sensitivity / (1 - Sensitivity)", "Sensitivity / (1 - Specificity)", "(1 - Sensitivity) / Specificity", "Specificity / (1 - Sensitivity)"],
    answer: 1,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = True positive rate / False positive rate. It indicates how much more likely a positive test result is in someone with the disease compared to someone without. LR+ > 10 is considered strong evidence for the diagnosis. LR+ is independent of prevalence."
  },
  {
    id: 33,
    question: "A test with sensitivity = 90% and specificity = 90% has a positive likelihood ratio of:",
    options: ["1", "9", "0.9", "0.11"],
    answer: 1,
    explanation: "LR+ = Sensitivity / (1 - Specificity) = 0.90 / (1 - 0.90) = 0.90 / 0.10 = 9. This means a positive result is 9 times more likely in a diseased person than in a non-diseased person. An LR+ of 9 indicates good diagnostic utility."
  },
  {
    id: 34,
    question: "The accuracy of a diagnostic test is calculated as:",
    options: ["(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FP)", "TN / (TN + FN)", "Sensitivity x Specificity"],
    answer: 0,
    explanation: "Accuracy = (TP + TN) / Total = proportion of all results that are correct (both true positives and true negatives). However, accuracy can be misleading in imbalanced populations — a test that always predicts 'negative' has high accuracy when disease prevalence is low. Sensitivity, specificity, and predictive values provide more nuanced assessment."
  },
  {
    id: 35,
    question: "Pre-test probability is equivalent to:",
    options: ["Sensitivity", "Specificity", "Disease prevalence in the tested population", "Positive predictive value"],
    answer: 2,
    explanation: "Pre-test probability is the estimated probability that the patient has the disease before the test is performed. In population screening, this equals the disease prevalence. In clinical settings, it may be modified by clinical judgment, risk factors, and prior test results. Post-test probability is determined by combining pre-test probability with the likelihood ratio."
  },
  {
    id: 36,
    question: "Using Bayes' theorem, post-test odds equals:",
    options: ["Pre-test odds multiplied by the likelihood ratio", "Pre-test probability multiplied by sensitivity", "Prevalence divided by specificity", "Sensitivity divided by prevalence"],
    answer: 0,
    explanation: "Post-test odds = Pre-test odds x Likelihood ratio. This is the odds form of Bayes' theorem applied to diagnostic testing. Pre-test odds = prevalence / (1 - prevalence). After calculating post-test odds, convert back to probability: post-test probability = post-test odds / (1 + post-test odds). This is a powerful framework for updating diagnostic probability."
  },
  {
    id: 37,
    question: "Verification bias (work-up bias) in diagnostic studies occurs when:",
    options: ["All patients receive the gold standard test regardless of the screening test result", "Patients who test positive on the screening test are more likely to undergo the gold standard confirmatory test", "The gold standard test is applied randomly", "Both groups receive identical follow-up"],
    answer: 1,
    explanation: "Verification bias occurs when the decision to perform the reference standard (gold standard) is influenced by the initial test result. Patients with positive screening results are more likely to be confirmed, inflating apparent sensitivity and potentially reducing apparent specificity. This is common in clinical practice where invasive confirmatory tests are only offered to screen-positives."
  },
  {
    id: 38,
    question: "A Fagan nomogram is used to:",
    options: ["Calculate sample size for clinical trials", "Graphically determine post-test probability from pre-test probability and likelihood ratio", "Compare survival curves", "Determine the optimal cutoff for a diagnostic test"],
    answer: 1,
    explanation: "The Fagan nomogram is a graphical tool with three vertical axes: pre-test probability (left), likelihood ratio (center), and post-test probability (right). A straight line from the pre-test probability through the likelihood ratio intersects the post-test probability, providing a quick visual calculation of Bayesian diagnostic reasoning."
  },

  // ===== ROC CURVES (Q39–Q50) =====
  {
    id: 39,
    question: "An ROC (Receiver Operating Characteristic) curve plots:",
    options: ["Sensitivity vs. specificity", "True positive rate (sensitivity) vs. false positive rate (1 - specificity)", "Positive predictive value vs. negative predictive value", "Prevalence vs. accuracy"],
    answer: 1,
    explanation: "An ROC curve plots the true positive rate (sensitivity) on the y-axis against the false positive rate (1 - specificity) on the x-axis for all possible cutoff thresholds of a continuous diagnostic test. Each point on the curve represents a different threshold, showing the trade-off between sensitivity and specificity."
  },
  {
    id: 40,
    question: "The area under the ROC curve (AUC) represents:",
    options: ["The sensitivity of the test at the optimal cutoff", "The overall discriminatory ability of the test across all thresholds", "The specificity of the test", "The positive predictive value"],
    answer: 1,
    explanation: "AUC summarizes the test's discriminatory performance across all possible cutoff values. It equals the probability that the test correctly ranks a randomly chosen diseased individual higher than a randomly chosen non-diseased individual. AUC ranges from 0.5 (no discrimination, equivalent to chance) to 1.0 (perfect discrimination)."
  },
  {
    id: 41,
    question: "An AUC of 0.5 indicates that the diagnostic test:",
    options: ["Has perfect discrimination", "Performs no better than random chance", "Has 50% sensitivity", "Has 50% specificity"],
    answer: 1,
    explanation: "An AUC of 0.5 corresponds to the diagonal line on the ROC plot (from bottom-left to top-right), indicating the test cannot discriminate between diseased and non-diseased individuals — equivalent to flipping a coin. AUC values are generally interpreted as: 0.5-0.6 fail, 0.6-0.7 poor, 0.7-0.8 fair, 0.8-0.9 good, 0.9-1.0 excellent."
  },
  {
    id: 42,
    question: "The optimal cutoff point on an ROC curve is often determined by:",
    options: ["Selecting the point closest to the upper-left corner (Youden's index) which maximizes sensitivity + specificity - 1", "Always choosing the point with 100% sensitivity", "Selecting the point on the diagonal line", "Using only the specificity value"],
    answer: 0,
    explanation: "Youden's index (J = sensitivity + specificity - 1) identifies the threshold that maximizes the sum of sensitivity and specificity, corresponding to the point on the ROC curve closest to the upper-left corner (0, 1). However, the optimal cutoff may differ based on clinical context — for screening, higher sensitivity may be preferred even at the cost of specificity."
  },
  {
    id: 43,
    question: "Comparing two ROC curves from different diagnostic tests, the test with the larger AUC is:",
    options: ["Always more expensive", "Generally considered to have better overall discriminatory ability", "Always more specific at every cutoff", "More appropriate for screening purposes"],
    answer: 1,
    explanation: "A larger AUC indicates better overall discrimination. However, ROC curves can cross, meaning one test may be better at certain sensitivity/specificity trade-offs than another. The DeLong test or bootstrap methods can statistically compare two AUCs to determine if the difference is significant."
  },
  {
    id: 44,
    question: "The DeLong test is used to:",
    options: ["Compare survival curves", "Statistically compare the AUCs of two or more ROC curves", "Determine the optimal cutoff point", "Calculate the positive predictive value"],
    answer: 1,
    explanation: "The DeLong test is a non-parametric method for comparing the AUCs of two correlated or uncorrelated ROC curves. It calculates a z-statistic based on the differences in AUCs and their covariance structure, providing a p-value to test whether the diagnostic performance of two tests significantly differs."
  },
  {
    id: 45,
    question: "A partial AUC focuses on:",
    options: ["The entire ROC curve", "A specific range of false positive rates or sensitivities that is clinically relevant", "Only the diagonal reference line", "The prevalence of the disease"],
    answer: 1,
    explanation: "Partial AUC restricts analysis to a clinically relevant range of the ROC curve. For example, in screening tests, only the region with high sensitivity (e.g., sensitivity > 0.90) may be relevant. Comparing full AUCs can be misleading if the clinically important operating range is narrow."
  },
  {
    id: 46,
    question: "In an ROC curve, moving the cutoff threshold to increase sensitivity will generally:",
    options: ["Also increase specificity", "Decrease specificity (increase false positive rate)", "Have no effect on specificity", "Improve the positive predictive value"],
    answer: 1,
    explanation: "Sensitivity and specificity are inversely related through the cutoff threshold. Lowering the threshold (making the test more sensitive) captures more true positives but also more false positives, reducing specificity. This trade-off is visually represented by moving along the ROC curve toward the upper-right corner."
  },
  {
    id: 47,
    question: "The ROC curve for a perfect diagnostic test would:",
    options: ["Follow the diagonal from (0,0) to (1,1)", "Pass through the point (0, 1), giving an AUC of 1.0", "Be a horizontal line at sensitivity = 0.5", "Follow the x-axis"],
    answer: 1,
    explanation: "A perfect test has 100% sensitivity and 100% specificity at some threshold, meaning the ROC curve passes through the point (0, 1) — zero false positives and 100% true positives. The AUC is 1.0. The curve goes straight up from (0,0) to (0,1) then right to (1,1), forming a right angle in the upper-left corner."
  },
  {
    id: 48,
    question: "Precision-recall curves are preferred over ROC curves when:",
    options: ["The dataset is balanced", "The dataset is highly imbalanced with very few positive cases", "Specificity is more important than sensitivity", "The AUC is greater than 0.9"],
    answer: 1,
    explanation: "With highly imbalanced datasets (e.g., rare disease with very few positive cases), ROC curves can be overly optimistic because the large number of true negatives inflates specificity. Precision-recall curves (precision = PPV on y-axis, recall = sensitivity on x-axis) focus on performance for the minority class and provide a more informative assessment."
  },
  {
    id: 49,
    question: "The concordance statistic (C-statistic) in logistic regression is equivalent to:",
    options: ["R-squared", "The AUC of the ROC curve", "The chi-square value", "The Hosmer-Lemeshow statistic"],
    answer: 1,
    explanation: "The C-statistic in logistic regression equals the AUC of the ROC curve. It represents the probability that the model assigns a higher predicted probability to a randomly selected positive case compared to a randomly selected negative case. It is a standard measure of model discrimination in binary classification."
  },
  {
    id: 50,
    question: "Calibration of a diagnostic model, as distinct from discrimination (AUC), assesses:",
    options: ["Whether the model ranks patients correctly", "Whether predicted probabilities match observed event rates", "The sensitivity at a fixed specificity", "The number of false negatives"],
    answer: 1,
    explanation: "Calibration evaluates whether predicted probabilities agree with actual outcomes — e.g., among patients given a 30% predicted risk, approximately 30% should actually develop the disease. A model can have excellent discrimination (high AUC) but poor calibration. The Hosmer-Lemeshow test and calibration plots assess this. Both discrimination and calibration are needed for a clinically useful model."
  }
];

export default questions;
