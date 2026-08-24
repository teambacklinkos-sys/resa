# RESA Scientist-I Biotechnology (Medical Biotechnology)

## Project Overview
- MCQ test app for RESA exam preparation
- Same structure as icmr-mcq repo at `/Users/vikaskalwani/Repo/icmr-mcq`
- Stack: Vite + React (JSX), vanilla CSS
- Data files: `src/data/<topic>-test<n>.js` — each exports array of 50 question objects
- Components: TestDetail.jsx, TestScreen.jsx, ResultScreen.jsx
- App.jsx: test registry + simple state-based routing (list → detail → test → result)

### MCQ Data Format
```js
{ id: Number, question: String, options: [4 strings], answer: Number (0-indexed), explanation: String }
```
- 50 MCQs per test, 4 options each, with explanations
- +1 for correct, -1/3 for wrong, 0 for unanswered

---

## Exam Structure
- **Stage I**: CBT (Computer Based Test) — 200 questions (100 subject + 100 general)
  - Practice assumption: 180 minutes (not officially confirmed by AIIMS notification)
- **Stage III**: DWT (Descriptive Written Test) — 50 marks, 2 hours, offline, English
  - Tests: practical application, professional judgement, analytical/problem-solving, realistic scenarios

---

## Preparation Priority Order (for THIS post specifically)
The notification emphasizes omics + molecular biology + target-gene analysis. Order of importance:
1. Molecular Biology
2. Medical Genetics
3. Genomics/NGS
4. Cancer Biology
5. Immunology
6. Molecular Diagnostics
7. Cell Biology
8. Biochemistry

**Do NOT prepare like a generic CSIR-NET Biotechnology paper.**

---

## Stage I: Subject-Specific (100 Questions)

### Very High Priority
| Area | What to cover |
|------|--------------|
| Molecular Biology | DNA replication, transcription, translation, gene regulation, operons, mutations, DNA repair |
| Recombinant DNA Technology | Restriction enzymes, vectors, cloning, PCR, RT-PCR, qPCR, sequencing, blotting |
| Cell Biology | Cell cycle, apoptosis, signaling, organelles, membrane transport |
| Genetics & Genomics | Mendelian genetics, linkage, chromosomal abnormalities, SNPs, GWAS, genome organization |
| Immunology | Innate/adaptive immunity, antibodies, MHC, T/B cells, cytokines, complement, vaccines |

### High Priority
| Area | What to cover |
|------|--------------|
| Biochemistry | Enzymes, kinetics, metabolism, proteins, carbohydrates, lipids, nucleic acids |
| Microbiology/Virology | Bacteria, viruses, culture, microbial genetics, pathogenic mechanisms |
| Omics | Genomics, transcriptomics, proteomics, metabolomics, RNA-seq, NGS |
| Cell Culture | Primary culture, cell lines, aseptic technique, cryopreservation, contamination |

### Moderate Priority
| Area | What to cover |
|------|--------------|
| Cancer Biology | Oncogenes, tumour suppressors, hallmarks, cancer genetics, targeted therapy |
| Stem Cells | ESC, adult stem cells, iPSC, differentiation |
| Biostatistics | Mean/median/SD, probability, distributions, p-value, CI, t-test, ANOVA, chi-square |
| Research Methodology | Experimental design, controls, bias, sensitivity/specificity, ethics |

---

## Stage I: General Section (100 Questions) — HALF of Stage I, don't neglect!

### Research Methodology + Research Tools (~40–45 questions)
- Study designs, experimental controls, randomization, sampling
- Hypothesis testing, p-value, confidence intervals
- Sensitivity/specificity, ROC curves
- ELISA, Western blot, PCR/qPCR, flow cytometry
- Immunohistochemistry, microscopy, spectrophotometry
- Chromatography, electrophoresis, NGS

### Aptitude (~20–25 questions)
- Percentages, ratio/proportion, probability, average
- Data interpretation, basic statistics, logical reasoning

### English (~15–20 questions)
- Vocabulary, grammar, sentence correction
- Comprehension, synonyms/antonyms

### Awareness (~10–15 questions)
- Focus on science/biomedical awareness, major scientific discoveries
- Biotechnology, health research, current developments
- NOT generic current affairs memorization

---

## Stage III - DWT: Critical to Prepare
Many candidates underestimate this. Expect questions like:
- "Design an experiment to determine whether gene X is overexpressed in a tumour sample."
- "Compare conventional PCR, RT-PCR and qPCR and explain their applications."
- Case/data-based questions involving:
  - PCR results, Western blot, ELISA, flow cytometry
  - Sequencing data, gene expression, experimental design
- **Must write scientifically and logically, not just recall facts.**

---

## Recommended Preparation Time Allocation
| Priority | Topics | % Time |
|----------|--------|--------|
| 1 | Molecular Biology + Genetics + Genomics/NGS | 40% |
| 2 | Cell Biology + Immunology | 20% |
| 3 | Biochemistry + Microbiology | 15% |
| 4 | Research methodology + Research tools | 15% |
| 5 | Aptitude | 5% |
| 6 | English + Awareness | 5% |

*This is personal preparation strategy, NOT official AIIMS weightage.*

---

## Notes
- One external RESA mock-test source configures Stage I as 200 questions/180 minutes, but AIIMS notification itself does not state CBT duration in the scheme section
- Treat 180 minutes as a useful practice assumption, not officially confirmed
