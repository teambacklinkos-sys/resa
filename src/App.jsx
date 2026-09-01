import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import molecularBiologyTest1 from './data/molecular-biology-test1'
import molecularBiologyTest2 from './data/molecular-biology-test2'
import molecularBiologyTest3 from './data/molecular-biology-test3'
import molecularBiologyTest4 from './data/molecular-biology-test4'
import medicalGeneticsTest1 from './data/medical-genetics-test1'
import medicalGeneticsTest2 from './data/medical-genetics-test2'
import medicalGeneticsTest3 from './data/medical-genetics-test3'
import medicalGeneticsTest4 from './data/medical-genetics-test4'
import genomicsNgsTest1 from './data/genomics-ngs-test1'
import genomicsNgsTest2 from './data/genomics-ngs-test2'
import genomicsNgsTest3 from './data/genomics-ngs-test3'
import genomicsNgsTest4 from './data/genomics-ngs-test4'
import cancerBiologyTest1 from './data/cancer-biology-test1'
import cancerBiologyTest2 from './data/cancer-biology-test2'
import cancerBiologyTest3 from './data/cancer-biology-test3'
import cancerBiologyTest4 from './data/cancer-biology-test4'
import immunologyTest1 from './data/immunology-test1'
import immunologyTest2 from './data/immunology-test2'
import immunologyTest3 from './data/immunology-test3'
import immunologyTest4 from './data/immunology-test4'
import techniquesInBiologyTest1 from './data/techniques-in-biology-test1'
import techniquesInBiologyTest2 from './data/techniques-in-biology-test2'
import techniquesInBiologyTest3 from './data/techniques-in-biology-test3'
import techniquesInBiologyTest4 from './data/techniques-in-biology-test4'
import biochemistryTest1 from './data/biochemistry-test1'
import biochemistryTest2 from './data/biochemistry-test2'
import biochemistryTest3 from './data/biochemistry-test3'
import biochemistryTest4 from './data/biochemistry-test4'
import biochemistryTest5 from './data/biochemistry-test5'
import biochemistryTest6 from './data/biochemistry-test6'
import biochemistryTest7 from './data/biochemistry-test7'
import biochemistryTest8 from './data/biochemistry-test8'
import geneticsTest1 from './data/genetics-test1'
import geneticsTest2 from './data/genetics-test2'
import geneticsTest3 from './data/genetics-test3'
import geneticsTest4 from './data/genetics-test4'
import geneticsTest5 from './data/genetics-test5'
import geneticsTest6 from './data/genetics-test6'
import geneticsTest7 from './data/genetics-test7'
import geneticsTest8 from './data/genetics-test8'
import './App.css'

const tests = [
  { id: 1, title: "Molecular Biology - Test 1 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest1, description: "DNA replication, transcription, translation, gene regulation, operons, mutations, DNA repair"},
  { id: 2, title: "Molecular Biology - Test 2 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest2, description: "DNA structure & topology, advanced replication, transcription regulation, translation mechanisms, epigenetics, chromatin remodeling"},
  { id: 3, title: "Molecular Biology - Test 3 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest3, description: "Genome organization, recombination & transposition, RNA biology & non-coding RNAs, molecular techniques, disease mechanisms"},
  { id: 20, title: "Molecular Biology - Test 4 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest4, description: "CRISPR & genome editing, signal transduction pathways, protein folding & modifications, advanced molecular techniques, RNA biology & epitranscriptomics"},
  { id: 4, title: "Medical Genetics - Test 1 - 50 MCQs", questions: 50, category: "Medical Genetics", data: medicalGeneticsTest1, description: "Mendelian inheritance, cytogenetics & chromosomal disorders, molecular genetics & mutations, genetic disorders, genetic testing & counseling"},
  { id: 5, title: "Medical Genetics - Test 2 - 50 MCQs", questions: 50, category: "Medical Genetics", data: medicalGeneticsTest2, description: "Population genetics & Hardy-Weinberg, epigenetics & imprinting, cancer genetics, genetic counseling & risk assessment, gene therapy & precision medicine"},
  { id: 6, title: "Medical Genetics - Test 3 - 50 MCQs", questions: 50, category: "Medical Genetics", data: medicalGeneticsTest3, description: "Inborn errors of metabolism, connective tissue & skeletal genetics, neurogenetics, immunogenetics, hemoglobinopathies & hematologic genetics"},
  { id: 7, title: "Medical Genetics - Test 4 - 50 MCQs", questions: 50, category: "Medical Genetics", data: medicalGeneticsTest4, description: "Developmental genetics & teratology, pharmacogenomics, genomics & bioinformatics, genetic ethics & law, complex & multifactorial genetics"},
  { id: 8, title: "Genomics / NGS - Test 1 - 50 MCQs", questions: 50, category: "Genomics / NGS", data: genomicsNgsTest1, description: "Genome organization & structure, Illumina sequencing fundamentals, long-read sequencing technologies, WGS/WES/panels, sequencing data quality & metrics"},
  { id: 9, title: "Genomics / NGS - Test 2 - 50 MCQs", questions: 50, category: "Genomics / NGS", data: genomicsNgsTest2, description: "Bioinformatics alignment & variant calling, variant annotation & interpretation, structural variant detection, somatic/cancer genomics, clinical NGS implementation"},
  { id: 10, title: "Genomics / NGS - Test 3 - 50 MCQs", questions: 50, category: "Genomics / NGS", data: genomicsNgsTest3, description: "Single-cell genomics, epigenomics & methylation sequencing, metagenomics & microbial genomics, transcriptomics & functional genomics, emerging technologies"},
  { id: 11, title: "Genomics / NGS - Test 4 - 50 MCQs", questions: 50, category: "Genomics / NGS", data: genomicsNgsTest4, description: "Genome assembly & references, clinical genomics workflows, pharmacogenomics & clinical utility, advanced NGS applications, data management & computational genomics"},
  { id: 12, title: "Cancer Biology - Test 1 - 50 MCQs", questions: 50, category: "Cancer Biology", data: cancerBiologyTest1, description: "Oncogenes & proto-oncogenes, tumor suppressor genes, cell cycle & checkpoints, apoptosis & cell death, DNA damage response & repair in cancer"},
  { id: 13, title: "Cancer Biology - Test 2 - 50 MCQs", questions: 50, category: "Cancer Biology", data: cancerBiologyTest2, description: "Tumor microenvironment, angiogenesis, invasion & metastasis, cancer immunology, cancer metabolism"},
  { id: 14, title: "Cancer Biology - Test 3 - 50 MCQs", questions: 50, category: "Cancer Biology", data: cancerBiologyTest3, description: "Hallmarks of cancer, cancer stem cells & clonal evolution, telomere biology & senescence, epigenetics in cancer, carcinogenesis & multi-step model"},
  { id: 15, title: "Cancer Biology - Test 4 - 50 MCQs", questions: 50, category: "Cancer Biology", data: cancerBiologyTest4, description: "Targeted therapy & precision oncology, cancer genomics & molecular classification, tumor immunotherapy advances, hereditary cancer syndromes, cancer prevention & emerging concepts"},
  { id: 16, title: "Immunology - Test 1 - 50 MCQs", questions: 50, category: "Immunology", data: immunologyTest1, description: "Innate immunity (TLRs, complement, NK cells), T-cell development & subsets (Th1/Th2/Th17/Treg), B cells & antibodies, MHC & antigen presentation, cytokines & signaling"},
  { id: 17, title: "Immunology - Test 2 - 50 MCQs", questions: 50, category: "Immunology", data: immunologyTest2, description: "Hypersensitivity reactions (types I-IV), autoimmunity, immunodeficiency disorders, transplantation immunology, vaccines & immunological memory"},
  { id: 18, title: "Immunology - Test 3 - 50 MCQs", questions: 50, category: "Immunology", data: immunologyTest3, description: "Mucosal & barrier immunity, immune regulation & tolerance, immunological techniques, clinical immunology & HIV, emerging concepts (trained immunity, cGAS-STING, Trm cells)"},
  { id: 19, title: "Immunology - Test 4 - 50 MCQs", questions: 50, category: "Immunology", data: immunologyTest4, description: "Lymphoid organs & immune cell development, complement system advanced, immunotherapy & biologics, advanced immunology concepts, clinical immunology special topics"},
  { id: 21, title: "Techniques in Biology - Test 1 - 50 MCQs", questions: 50, category: "Techniques in Biology", data: techniquesInBiologyTest1, description: "Study designs, experimental controls, randomization, sampling methods, hypothesis testing"},
  { id: 22, title: "Techniques in Biology - Test 2 - 50 MCQs", questions: 50, category: "Techniques in Biology", data: techniquesInBiologyTest2, description: "p-value & statistical significance, confidence intervals, sensitivity/specificity, ROC curves & diagnostic test evaluation"},
  { id: 23, title: "Techniques in Biology - Test 3 - 50 MCQs", questions: 50, category: "Techniques in Biology", data: techniquesInBiologyTest3, description: "ELISA, Western blot, PCR/qPCR, flow cytometry, immunohistochemistry"},
  { id: 24, title: "Techniques in Biology - Test 4 - 50 MCQs", questions: 50, category: "Techniques in Biology", data: techniquesInBiologyTest4, description: "Microscopy, spectrophotometry, chromatography, electrophoresis, next-generation sequencing (NGS)"},
  { id: 25, title: "Biochemistry - Test 1 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest1, description: "Enzyme kinetics & mechanisms, Michaelis-Menten & Lineweaver-Burk, allosteric regulation, enzyme inhibition, protein structure & folding, post-translational modifications"},
  { id: 26, title: "Biochemistry - Test 2 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest2, description: "Glycolysis, gluconeogenesis, TCA cycle, pentose phosphate pathway, glycogen metabolism, electron transport chain, oxidative phosphorylation"},
  { id: 31, title: "Biochemistry - Test 3 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest3, description: "Fatty acid synthesis & beta-oxidation, ketogenesis, cholesterol metabolism, amino acid catabolism, urea cycle, one-carbon metabolism"},
  { id: 32, title: "Biochemistry - Test 4 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest4, description: "Purine & pyrimidine metabolism, salvage pathways, vitamins & coenzymes, cofactor mechanisms, mineral metabolism"},
  { id: 33, title: "Biochemistry - Test 5 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest5, description: "Membrane biochemistry & transport, signal transduction, G-protein coupled receptors, receptor tyrosine kinases, second messengers, hormone signaling"},
  { id: 34, title: "Biochemistry - Test 6 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest6, description: "Inborn errors of metabolism, diabetes biochemistry, organ function tests, spectrophotometry, chromatography, electrophoresis, enzyme assays"},
  { id: 39, title: "Biochemistry - Test 7 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest7, description: "Metabolic integration, fed vs fasting states, tissue-specific metabolism, hormonal regulation, metabolic adaptations in exercise & starvation"},
  { id: 40, title: "Biochemistry - Test 8 - 50 MCQs", questions: 50, category: "Biochemistry", data: biochemistryTest8, description: "Advanced enzymology & catalytic mechanisms, proteomics & protein interactions, glycobiology, glycoproteins & glycolipids, extracellular matrix biochemistry"},
  { id: 27, title: "Genetics - Test 1 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest1, description: "Mendelian genetics, dominance patterns, epistasis, pleiotropy, penetrance & expressivity, sex-linked inheritance, maternal inheritance"},
  { id: 28, title: "Genetics - Test 2 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest2, description: "Linkage analysis & genetic mapping, three-point cross, LOD scores, chromosome structure, chromosomal aberrations, polyploidy & aneuploidy"},
  { id: 29, title: "Genetics - Test 3 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest3, description: "Hardy-Weinberg equilibrium, genetic drift, gene flow, natural selection, mutation-selection balance, molecular evolution, phylogenetics"},
  { id: 30, title: "Genetics - Test 4 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest4, description: "Polygenic inheritance, heritability, QTL mapping, variance components, twin studies, multifactorial inheritance, GWAS"},
  { id: 37, title: "Genetics - Test 5 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest5, description: "Bacterial conjugation, transformation & transduction, plasmids, transposons, bacteriophage genetics, prokaryotic gene regulation"},
  { id: 38, title: "Genetics - Test 6 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest6, description: "Eukaryotic gene regulation, transcription factors, chromatin remodeling, epigenetics, DNA methylation, histone modifications, genomic imprinting, non-coding RNAs"},
  { id: 35, title: "Genetics - Test 7 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest7, description: "Homeotic & Hox genes, pattern formation, morphogen gradients, model organisms, cell fate determination, stem cell genetics"},
  { id: 36, title: "Genetics - Test 8 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest8, description: "Autosomal & X-linked disorders, mitochondrial inheritance, trinucleotide repeats, pedigree analysis, genetic counseling, prenatal diagnosis"},
]

const categories = [...new Set(tests.map(t => t.category))]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list')
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  function selectTest(test) {
    setSelectedTest(test)
    setScreen('detail')
  }

  function startTest() {
    setScreen('test')
  }

  function finishTest(answers, elapsed) {
    setTestAnswers(answers)
    setTimeTaken(elapsed)
    setScreen('result')
  }

  function backToList() {
    setSelectedTest(null)
    setTestAnswers(null)
    setScreen('list')
  }

  function backToDetail() {
    setTestAnswers(null)
    setScreen('detail')
  }

  if (screen === 'result' && selectedTest) {
    return (
      <ResultScreen
        questions={selectedTest.data}
        answers={testAnswers}
        testTitle={selectedTest.title}
        timeTaken={timeTaken}
        onBack={backToList}
      />
    )
  }

  if (screen === 'test' && selectedTest) {
    return (
      <TestScreen
        questions={selectedTest.data}
        testTitle={selectedTest.title}
        onFinish={finishTest}
        onQuit={backToDetail}
      />
    )
  }

  if (screen === 'detail' && selectedTest) {
    return (
      <TestDetail
        test={selectedTest}
        onBack={backToList}
        onStart={startTest}
      />
    )
  }

  const filteredTests = tests.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">RESA</div>
        <h1>RESA MCQ Tests</h1>
        <p className="subtitle">Scientist-I Biotechnology (Medical Biotechnology) — Practice Tests</p>
      </header>

      <div className="home-body">
        <aside className="sidebar">
          <div className="sidebar-title">Subjects</div>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`sidebar-tab ${activeCategory === cat ? 'sidebar-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="main-content-title">{activeCategory}</h2>
          <p className="main-content-subtitle">{filteredTests.length} tests available</p>
          <section className="test-list">
            {filteredTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => selectTest(test)}
              >
                <div className="test-card-left">
                  <h2 className="test-card-title">{test.title}</h2>
                  <p className="test-card-desc">{test.description}</p>
                  <p className="test-card-meta">{test.questions} Questions &middot; +1 / -1/3 Marking</p>
                </div>
                <span className="test-card-arrow">&rarr;</span>
              </button>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        <a href="/notes.html" className="notes-link">Preparation Notes &amp; Strategy</a>
        <span>RESA MCQ Tests</span>
      </footer>
    </div>
  )
}

export default App
