const questions = [
  {
    id: 1,
    question: "In de novo purine synthesis, the purine ring is assembled on which scaffold molecule?",
    options: [
      "Inosine monophosphate (IMP)",
      "Ribose-5-phosphate, starting with PRPP",
      "Hypoxanthine nucleoside",
      "Adenine directly on a free ribose"
    ],
    answer: 1,
    explanation: "De novo purine synthesis begins with phosphoribosyl pyrophosphate (PRPP), which is derived from ribose-5-phosphate by PRPP synthetase. The purine ring is built stepwise directly on this ribose-5-phosphate scaffold, with PRPP amidotransferase catalyzing the committed first step (conversion of PRPP to 5-phosphoribosylamine)."
  },
  {
    id: 2,
    question: "The committed step of de novo pyrimidine synthesis is catalyzed by a multifunctional enzyme in mammals. What is this enzyme and why is its regulation different from prokaryotes?",
    options: [
      "Dihydroorotase; in mammals it is a separate enzyme not subject to feedback inhibition",
      "CAD protein (carbamoyl phosphate synthetase II/aspartate transcarbamoylase/dihydroorotase); it is feedback inhibited by UTP and activated by PRPP",
      "Aspartate transcarbamoylase (ATCase); in mammals it is allosterically inhibited by CTP unlike the prokaryotic enzyme",
      "Carbamoyl phosphate synthetase II alone; inhibited by uridine nucleotides"
    ],
    answer: 1,
    explanation: "In mammals, the first three steps of pyrimidine synthesis are catalyzed by CAD, a trifunctional protein containing CPS II, ATCase, and dihydroorotase activities. Unlike the prokaryotic ATCase (allosterically regulated by CTP and ATP), mammalian CAD is regulated by UTP feedback inhibition of CPS II and PRPP activation. CTP synthase is the final regulated step."
  },
  {
    id: 3,
    question: "Orotic aciduria (UMP synthase deficiency) is treated with uridine supplementation. What is the biochemical rationale?",
    options: [
      "Uridine provides CTP directly, bypassing the defect",
      "Uridine is converted to UMP, which provides product feedback inhibition of CPS II (in CAD), reducing toxic orotic acid accumulation",
      "Uridine activates the salvage pathway to produce all needed pyrimidines",
      "Uridine directly inhibits PRPP synthetase, reducing substrate availability"
    ],
    answer: 1,
    explanation: "UMP synthase (bifunctional orotate phosphoribosyltransferase + OMP decarboxylase) converts orotic acid to UMP. In its deficiency, orotic acid accumulates. Exogenous uridine is phosphorylated to UMP by salvage enzymes, providing the end product that feedback-inhibits CPS II in the CAD complex, reducing flux through the pathway and decreasing orotic acid production."
  },
  {
    id: 4,
    question: "In the purine salvage pathway, hypoxanthine-guanine phosphoribosyltransferase (HGPRT) is deficient in Lesch-Nyhan syndrome. What is the consequence on de novo purine synthesis?",
    options: [
      "De novo synthesis is inhibited because salvage products (IMP, GMP) can no longer feedback-inhibit PRPP amidotransferase",
      "De novo synthesis is decreased because PRPP accumulates and is diverted to pyrimidine synthesis",
      "De novo synthesis is markedly increased because PRPP and PRPP amidotransferase are no longer feedback-inhibited by salvage-derived nucleotides",
      "De novo synthesis is unaffected because the salvage and de novo pathways are entirely independent"
    ],
    answer: 2,
    explanation: "HGPRT deficiency abolishes the salvage of hypoxanthine and guanine. Consequently, IMP and GMP (which normally feedback-inhibit PRPP amidotransferase) are not produced by the salvage pathway. PRPP also accumulates (not consumed by HGPRT). Both effects dramatically increase de novo purine synthesis, leading to uric acid overproduction and gout."
  },
  {
    id: 5,
    question: "Allopurinol is used to treat gout. Beyond inhibiting xanthine oxidase, allopurinol has a second mechanism that further reduces purine synthesis. What is it?",
    options: [
      "Allopurinol activates HGPRT to increase purine salvage",
      "Alloxanthine (oxypurinol), the oxidized product of allopurinol, competitively inhibits PRPP amidotransferase",
      "Allopurinol is converted to allopurinol ribonucleotide by HGPRT, which depletes PRPP and inhibits PRPP amidotransferase",
      "Allopurinol directly inhibits xanthine dehydrogenase, reducing NAD+ consumption"
    ],
    answer: 2,
    explanation: "Allopurinol is a substrate for HGPRT, which converts it to allopurinol ribonucleotide (using PRPP). This consumption of PRPP depletes the substrate for de novo purine synthesis and PRPP amidotransferase. Additionally, allopurinol ribonucleotide directly inhibits PRPP amidotransferase, providing a second mechanism to reduce purine synthesis beyond xanthine oxidase inhibition."
  },
  {
    id: 6,
    question: "Adenosine deaminase (ADA) deficiency causes severe combined immunodeficiency (SCID). Which toxic metabolite accumulates and what is its mechanism of lymphotoxicity?",
    options: [
      "Xanthosine accumulates and inhibits ribonucleotide reductase",
      "Deoxyadenosine accumulates; it is phosphorylated to dATP which inhibits ribonucleotide reductase and triggers apoptosis, particularly in lymphocytes",
      "Inosine accumulates and disrupts purine nucleotide pools by acting as a competitive inhibitor of AMP kinase",
      "Adenosine accumulates and inhibits S-adenosylhomocysteine hydrolase, causing hypermethylation"
    ],
    answer: 1,
    explanation: "ADA deficiency leads to accumulation of deoxyadenosine (particularly in lymphocytes which have high deoxynucleoside kinase activity). Deoxyadenosine is phosphorylated to dATP, which accumulates to very high levels in lymphocytes and inhibits ribonucleotide reductase (RNR), preventing DNA synthesis. This, combined with induction of apoptosis, selectively depletes both T and B lymphocytes."
  },
  {
    id: 7,
    question: "In pyrimidine degradation, what are the final products of thymine catabolism in humans?",
    options: [
      "Uric acid, CO2, and NH3",
      "Beta-aminoisobutyrate, CO2, and NH3",
      "Orotic acid and urea",
      "Dihydrothymine, beta-ureidoisobutyrate, and beta-aminoisobutyrate"
    ],
    answer: 1,
    explanation: "Thymine is degraded by dihydropyrimidine dehydrogenase (DPD) to dihydrothymine, then to beta-ureidoisobutyrate, and finally to beta-aminoisobutyrate + CO2 + NH3. Beta-aminoisobutyrate is excreted in urine and is a marker of increased DNA turnover. This pathway contrasts with purines, which are degraded to uric acid."
  },
  {
    id: 8,
    question: "5-fluorouracil (5-FU) is an anticancer drug that acts as a suicide inhibitor. What is its mechanism of action at the enzyme level?",
    options: [
      "5-FU is converted to 5-FUTP, which is incorporated into RNA and disrupts splicing",
      "5-FU is converted to 5-FdUMP, which covalently inhibits thymidylate synthase (TS) by forming a ternary complex with TS and 5,10-methyleneTHF",
      "5-FU inhibits dihydropyrimidine dehydrogenase, preventing pyrimidine degradation",
      "5-FU is incorporated into DNA as FdUTP, causing strand breaks"
    ],
    answer: 1,
    explanation: "5-FU is converted to 5-fluorodeoxyuridine monophosphate (5-FdUMP) which forms a covalent ternary complex with thymidylate synthase (TS) and the cofactor 5,10-methyleneTHF. This suicide inhibition irreversibly inactivates TS, blocking conversion of dUMP to dTMP and causing 'thymineless death' in rapidly dividing cells. Leucovorin (folinic acid) is given to increase 5,10-methyleneTHF and enhance TS inhibition."
  },
  {
    id: 9,
    question: "Which enzyme is inhibited by methotrexate (MTX), and how does this connect purine synthesis to folate metabolism?",
    options: [
      "Thymidylate synthase; blocks dTMP synthesis, depleting folate",
      "Dihydrofolate reductase (DHFR); inhibits regeneration of THF needed for 10-formylTHF and 5,10-methyleneTHF in purine and dTMP synthesis",
      "PRPP amidotransferase; directly blocks the committed step of purine synthesis",
      "Methylene-THF reductase (MTHFR); traps folate in the oxidized form"
    ],
    answer: 1,
    explanation: "Methotrexate is a tight-binding competitive inhibitor of dihydrofolate reductase (DHFR), blocking regeneration of tetrahydrofolate (THF) from dihydrofolate (DHF). THF is required for 10-formylTHF (used at steps 4 and 10 of purine synthesis) and 5,10-methyleneTHF (used by thymidylate synthase). MTX thus simultaneously blocks purine de novo synthesis and dTMP synthesis."
  },
  {
    id: 10,
    question: "Gout is associated with hyperuricemia. Which enzyme defect causes overproduction gout due to loss of feedback inhibition on PRPP synthetase?",
    options: [
      "HGPRT mutation causing Lesch-Nyhan syndrome",
      "Superactive PRPP synthetase variants that are resistant to feedback inhibition by purine nucleotides",
      "Xanthine oxidase overexpression",
      "Adenosine deaminase overactivity"
    ],
    answer: 1,
    explanation: "Superactive PRPP synthetase variants (gain-of-function mutations in PRPS1) are resistant to allosteric feedback inhibition by ADP, GDP, and other nucleotides. This results in excessive PRPP production, driving increased de novo purine synthesis and ultimately hyperuricemia and gout. It is X-linked and distinct from the underexcretion form of gout."
  },
  {
    id: 11,
    question: "Thiamine (vitamin B1) as TPP (thiamine pyrophosphate) is a cofactor for several enzyme complexes. Which of the following reactions does NOT require TPP?",
    options: [
      "Pyruvate dehydrogenase complex (PDC)",
      "Alpha-ketoglutarate dehydrogenase complex",
      "Propionyl-CoA carboxylase",
      "Transketolase in the pentose phosphate pathway"
    ],
    answer: 2,
    explanation: "Propionyl-CoA carboxylase requires biotin as its cofactor (not TPP). TPP is required by pyruvate dehydrogenase complex (PDC), alpha-ketoglutarate dehydrogenase, branched-chain alpha-keto acid dehydrogenase (BCKDH), and transketolase in the pentose phosphate pathway. This makes thiamine deficiency affect multiple dehydrogenase complexes simultaneously."
  },
  {
    id: 12,
    question: "Riboflavin (vitamin B2) is the precursor of FMN and FAD. Which of the following best describes the role of FAD in the electron transport chain (ETC)?",
    options: [
      "FAD accepts electrons as a 2-electron carrier only and passes them to CoQ",
      "FAD in complex II accepts electrons from succinate and passes them to CoQ; FAD also accepts electrons in complex I as part of NADH dehydrogenase",
      "FAD directly reduces cytochrome c in complex III",
      "FAD carries electrons from NADH to oxygen directly without passing through CoQ"
    ],
    answer: 1,
    explanation: "FAD serves as an electron carrier at multiple points in the ETC. In complex II (succinate dehydrogenase), FAD accepts electrons from succinate to form FADH2, which then reduces CoQ. In complex I, FMN (another riboflavin derivative) accepts electrons from NADH and transfers them to a series of iron-sulfur clusters ultimately reducing CoQ."
  },
  {
    id: 13,
    question: "Niacin (vitamin B3) is synthesized from tryptophan. What is the stoichiometry and what vitamin B6 requirement exists for this conversion?",
    options: [
      "60 mg tryptophan → 1 mg niacin; requires PLP as cofactor for kynurenine aminotransferase",
      "60 mg tryptophan → 1 mg niacin; requires PLP as cofactor for kynureninase",
      "30 mg tryptophan → 1 mg niacin; no B6 requirement",
      "20 mg tryptophan → 1 mg niacin; requires FAD for kynurenine monooxygenase"
    ],
    answer: 1,
    explanation: "Approximately 60 mg of dietary tryptophan is required to produce 1 mg of niacin (niacin equivalent). The kynurenine pathway requires PLP (vitamin B6) as a cofactor for kynureninase, which converts 3-hydroxykynurenine to 3-hydroxyanthranilic acid. B6 deficiency can therefore impair tryptophan-to-niacin conversion and produce secondary niacin deficiency."
  },
  {
    id: 14,
    question: "Pellagra is caused by niacin deficiency and presents with the '4 Ds.' In carcinoid syndrome, why do patients develop pellagra-like symptoms despite adequate dietary intake?",
    options: [
      "Carcinoid tumor cells overexpress IDO (indoleamine 2,3-dioxygenase), diverting tryptophan to kynurenine",
      "Carcinoid tumors overproduce serotonin by diverting tryptophan away from the niacin synthetic pathway",
      "Carcinoid tumors secrete a niacinase that degrades dietary niacin",
      "Hartnup disease co-occurs with carcinoid syndrome causing tryptophan malabsorption"
    ],
    answer: 1,
    explanation: "Carcinoid tumors (enterochromaffin cell tumors) massively overproduce serotonin (5-HT) from tryptophan via hydroxylation and decarboxylation. This diverts tryptophan away from the kynurenine/niacin synthetic pathway, depleting niacin production and causing pellagra-like symptoms despite adequate tryptophan and niacin intake."
  },
  {
    id: 15,
    question: "Pantothenic acid (vitamin B5) is a component of Coenzyme A. Which functional group of CoA is the chemically reactive entity that forms thioesters with acyl groups?",
    options: [
      "Phosphate group of the 3'-phospho-ADP moiety",
      "Beta-mercaptoethylamine thiol (-SH) group at the end of the pantetheine arm",
      "Amide bond between pantothenic acid and beta-alanine",
      "Hydroxyl group of pantothenate"
    ],
    answer: 1,
    explanation: "The thiol (-SH) group of the beta-mercaptoethylamine portion of CoA is the reactive site that forms high-energy thioester bonds with acyl groups (e.g., acetyl-CoA, malonyl-CoA, acyl-CoA fatty acid derivatives). The thioester bond has a high free energy of hydrolysis, driving many biosynthetic and catabolic reactions."
  },
  {
    id: 16,
    question: "Pyridoxal phosphate (PLP, vitamin B6) participates in transamination via a Schiff base mechanism. What is the intermediate at the amino acid-PLP Schiff base called?",
    options: [
      "Quinonoid intermediate",
      "Pyridoxamine phosphate-substrate Schiff base",
      "External aldimine",
      "Geminal diamine"
    ],
    answer: 2,
    explanation: "When an amino acid substrate displaces the enzyme's lysine residue from PLP, a Schiff base (aldimine) forms between the alpha-amino group of the substrate and the aldehyde carbon of PLP. This amino acid-PLP Schiff base is called the 'external aldimine' (in contrast to the 'internal aldimine' formed between PLP and the enzyme lysine). It is the first key intermediate in all PLP-dependent reactions."
  },
  {
    id: 17,
    question: "Biotin functions as a CO2 carrier in carboxylation reactions. In which chemical form is CO2 activated and transferred by biotin?",
    options: [
      "As bicarbonate (HCO3-) attached directly to the N1 of biotin",
      "As carbamate attached to the N1' of biotin ureido ring",
      "As carboxybiotin (N1'-carboxybiotin), where CO2 is covalently attached as a carboxylate to the N1' nitrogen of the ureido ring",
      "As an acyl-biotin thioester via the sulfur of biotin"
    ],
    answer: 2,
    explanation: "Biotin carboxylases (ACC, pyruvate carboxylase, propionyl-CoA carboxylase, MCC) first activate CO2 using ATP to form carboxybiotin, where the carboxylate group is covalently attached to N1' nitrogen of biotin's ureido ring. This activated CO2 is then transferred to the substrate in the carboxyl transfer half-reaction."
  },
  {
    id: 18,
    question: "Vitamin B12 (cobalamin) participates in two enzymatic reactions in mammals. Which two reactions require B12, and what type of chemistry is involved?",
    options: [
      "Methionine synthase (methyl transfer) and methylmalonyl-CoA mutase (adenosylcobalamin-dependent radical rearrangement)",
      "Thymidylate synthase (methyl transfer) and leucine mutase (rearrangement)",
      "Homocysteine methyltransferase (methyl transfer) and propionyl-CoA carboxylase (carboxylation)",
      "Methionine synthase (radical reaction) and ribonucleotide reductase (radical reaction)"
    ],
    answer: 0,
    explanation: "In mammals, B12 participates in two reactions: (1) methionine synthase uses methylcobalamin as a methyl carrier to remethylate homocysteine to methionine, and (2) methylmalonyl-CoA mutase uses adenosylcobalamin (AdoCbl) to catalyze a radical-based 1,2-rearrangement converting L-methylmalonyl-CoA to succinyl-CoA."
  },
  {
    id: 19,
    question: "Folate (vitamin B9) carries one-carbon units in different oxidation states. Which folate form carries the most oxidized one-carbon unit and in which biosynthetic reaction is it used?",
    options: [
      "5-methylTHF carries the methyl group (most reduced); used in methionine synthesis",
      "10-formylTHF carries the formyl group (most oxidized); used in purine synthesis at steps 4 and 10",
      "5,10-methyleneTHF carries the methylene group (intermediate); used in dTMP synthesis",
      "5-formiminoTHF carries the formimino group; used in histidine catabolism"
    ],
    answer: 1,
    explanation: "10-formylTHF carries the formyl (-CHO) group, which is the most oxidized one-carbon unit on folate. It is used by GART (glycinamide ribonucleotide transformylase) at step 4 and AICAR transformylase at step 10 of de novo purine synthesis. The order of oxidation states: formyl (most oxidized) > methenyl > methylene > methyl (most reduced)."
  },
  {
    id: 20,
    question: "Vitamin C (ascorbic acid) is required for collagen hydroxylation. What is the precise biochemical role of ascorbate in the prolyl hydroxylase reaction?",
    options: [
      "Ascorbate is a direct cofactor that covalently binds prolyl hydroxylase",
      "Ascorbate reduces the Fe3+ in prolyl hydroxylase back to Fe2+ when the enzyme undergoes uncoupled oxidation, maintaining enzyme activity",
      "Ascorbate provides the hydroxyl group that is incorporated into hydroxyproline",
      "Ascorbate acts as a competitive inhibitor of proline oxidase to regulate proline hydroxylation"
    ],
    answer: 1,
    explanation: "Prolyl 4-hydroxylase requires Fe2+ and uses alpha-ketoglutarate as a co-substrate (producing succinate and CO2) while incorporating one oxygen atom into proline. Occasionally, the iron is oxidized to Fe3+ in an uncoupled reaction. Ascorbate (vitamin C) reduces Fe3+ back to Fe2+, regenerating the active enzyme. Ascorbate deficiency (scurvy) impairs collagen hydroxylation and crosslinking."
  },
  {
    id: 21,
    question: "Vitamin A (retinol) functions in vision. What is the specific chromophore and what molecular event triggers the visual transduction cascade?",
    options: [
      "All-trans-retinal bound to opsin; photoisomerization to 11-cis-retinal activates rhodopsin",
      "11-cis-retinal bound to opsin (rhodopsin); photoisomerization to all-trans-retinal causes conformational change (metarhodopsin II) that activates transducin",
      "All-trans-retinoic acid bound to rhodopsin; transcriptional activation of phototransduction genes",
      "Retinyl ester stored in photoreceptors; hydrolysis to retinol activates guanylyl cyclase"
    ],
    answer: 1,
    explanation: "In rod cells, 11-cis-retinal is covalently bound to opsin via a Schiff base to form rhodopsin. Photon absorption causes photoisomerization of 11-cis-retinal to all-trans-retinal, producing the activated form metarhodopsin II. This triggers activation of the G-protein transducin (Gt), which activates phosphodiesterase to hydrolyze cGMP, causing hyperpolarization."
  },
  {
    id: 22,
    question: "Vitamin D undergoes two hydroxylation steps to become biologically active. What is the regulatory significance of the 1-alpha-hydroxylation step?",
    options: [
      "25-hydroxyvitamin D → 1,25-dihydroxyvitamin D3 (calcitriol) occurs in the kidney; it is stimulated by PTH, low calcium, and low phosphate, and inhibited by high FGF-23",
      "25-hydroxyvitamin D → 1,25-dihydroxyvitamin D3 occurs in the liver; it is constitutively active",
      "1-alpha-hydroxylation occurs in the intestine and is stimulated by dietary calcium",
      "1-alpha-hydroxylation is inhibited by PTH and stimulated by calcitonin"
    ],
    answer: 0,
    explanation: "The second hydroxylation (25-OH vitamin D → 1,25-(OH)2 vitamin D3, calcitriol) occurs in the proximal tubules of the kidney by 1-alpha-hydroxylase (CYP27B1). This is the tightly regulated step: PTH stimulates it (in response to low calcium), and FGF-23 (released by osteocytes in response to high phosphate) inhibits it. Calcitriol itself feedback-inhibits the enzyme and stimulates 24-hydroxylase."
  },
  {
    id: 23,
    question: "Vitamin E (tocopherol) functions as a lipid-soluble antioxidant. What is the specific radical species it quenches and how is it regenerated?",
    options: [
      "Vitamin E quenches superoxide radicals; regenerated by superoxide dismutase",
      "Vitamin E (tocopheryl radical) quenches lipid peroxy radicals (LOO•) by donating a hydrogen atom; the tocopheryl radical is regenerated by vitamin C (ascorbate)",
      "Vitamin E quenches hydroxyl radicals; regenerated by glutathione",
      "Vitamin E acts as a pro-oxidant at low concentrations and is regenerated by NADPH"
    ],
    answer: 1,
    explanation: "Vitamin E (alpha-tocopherol) is a chain-breaking antioxidant that quenches lipid peroxy radicals (LOO•) by donating a hydrogen atom, forming a relatively stable tocopheryl radical and stopping lipid peroxidation chain reactions. The tocopheryl radical is regenerated (reduced) by vitamin C (ascorbic acid) at the aqueous-lipid interface, and ascorbyl radical is then regenerated by glutathione or NADPH."
  },
  {
    id: 24,
    question: "Vitamin K functions in the gamma-carboxylation of glutamate residues. Which proteins require gamma-carboxylation and what is the functional consequence?",
    options: [
      "Fibrinogen and thrombin; carboxylation allows proteolytic activation",
      "Coagulation factors II, VII, IX, X and proteins C, S, Z; gamma-carboxylation allows calcium binding and membrane attachment",
      "Albumin and transferrin; gamma-carboxylation allows metal chelation",
      "Prothrombin only; carboxylation creates the active site serine"
    ],
    answer: 1,
    explanation: "Vitamin K-dependent gamma-carboxylase converts glutamate (Glu) to gamma-carboxyglutamate (Gla) residues in coagulation factors II (prothrombin), VII, IX, X, and anticoagulant proteins C, S, and Z. The extra carboxylate groups of Gla bind calcium ions, which are required for phospholipid membrane binding and proper localization of coagulation complexes."
  },
  {
    id: 25,
    question: "Iron absorption in the intestine involves multiple steps. Which protein is specifically responsible for transporting Fe2+ across the apical membrane of enterocytes?",
    options: [
      "Ferroportin (FPN/SLC40A1)",
      "Transferrin receptor 1 (TfR1)",
      "Divalent metal transporter 1 (DMT1/SLC11A2)",
      "Hephaestin"
    ],
    answer: 2,
    explanation: "DMT1 (divalent metal transporter 1, SLC11A2) transports Fe2+ across the apical (luminal) membrane of duodenal enterocytes into the cytoplasm. Non-heme iron (Fe3+) must first be reduced to Fe2+ by duodenal cytochrome b (Dcytb) on the brush border. Ferroportin exports Fe2+ from enterocytes into the bloodstream on the basolateral side."
  },
  {
    id: 26,
    question: "Hepcidin is the master regulator of iron homeostasis. What is hepcidin's mechanism of action and when is its production increased?",
    options: [
      "Hepcidin activates ferroportin to increase iron export from enterocytes; produced in response to anemia",
      "Hepcidin binds ferroportin and induces its internalization and degradation, reducing iron absorption and release; produced in response to iron overload and inflammation",
      "Hepcidin inhibits DMT1 directly; produced in response to hypoxia",
      "Hepcidin increases transferrin synthesis in the liver; produced in response to high transferrin saturation"
    ],
    answer: 1,
    explanation: "Hepcidin (a peptide hormone produced by the liver) binds to ferroportin on enterocytes, macrophages, and hepatocytes, causing ferroportin internalization and degradation. This reduces iron absorption (from gut) and iron release from macrophages (recycling from hemoglobin). Hepcidin is increased by iron loading, inflammation (via IL-6/STAT3 pathway), and HJV/BMP signaling, and decreased by anemia, hypoxia, and increased erythropoiesis."
  },
  {
    id: 27,
    question: "In zinc biology, what is the structural role of zinc in the zinc finger motif and why is it biologically suitable for this role?",
    options: [
      "Zinc forms covalent bonds with histidine and cysteine residues, providing structural rigidity to the DNA-binding loop",
      "Zinc2+ coordinates to cysteine and/or histidine residues by electrostatic interactions, stabilizing the fold without redox activity due to its filled d-shell (d10 configuration)",
      "Zinc catalyzes disulfide bond formation between cysteine pairs in the zinc finger",
      "Zinc is exchangeable and acts as a regulatory switch by reversible binding to methionine residues"
    ],
    answer: 1,
    explanation: "Zinc2+ coordinates tetrahedral bonds with two cysteine and two histidine residues (or Cys4 or His2Cys2 configurations) through coordination chemistry, stabilizing the zinc finger loop structure for DNA binding. Zinc is ideally suited for structural roles because it has a filled d10 electron shell (redox inert, no harmful radical chemistry) and prefers tetrahedral coordination compatible with protein geometries."
  },
  {
    id: 28,
    question: "Copper is a cofactor for cytochrome c oxidase (complex IV). What is the specific role of the CuA and CuB centers?",
    options: [
      "CuA accepts electrons from cytochrome c; CuB together with heme a3 forms the binuclear center where O2 is reduced",
      "CuA reduces O2 directly; CuB transfers protons across the membrane",
      "CuA and CuB both transfer electrons to heme a, which then reduces O2",
      "CuA accepts electrons from heme a; CuB reduces cytochrome c"
    ],
    answer: 0,
    explanation: "In complex IV, the binuclear CuA center (located in subunit II) is the first electron acceptor from reduced cytochrome c. Electrons pass from CuA to heme a, then to the heme a3-CuB binuclear center (located in subunit I), where molecular oxygen is reduced to water. This is the site of O2 binding and the four-electron reduction of O2."
  },
  {
    id: 29,
    question: "Selenium is incorporated into proteins as selenocysteine. What is unique about the biosynthesis of selenocysteine compared to the other 20 standard amino acids?",
    options: [
      "Selenocysteine is post-translationally added to proteins by a specific ligase after cysteine modification",
      "Selenocysteine is co-translationally incorporated by a specialized SECIS element in the mRNA 3'UTR and a dedicated tRNA (tRNA[Sec]) that recodes the UGA stop codon",
      "Selenocysteine is incorporated by editing of serine after it is attached to its cognate tRNA",
      "Selenocysteine has its own standard codon and aminoacyl-tRNA synthetase"
    ],
    answer: 1,
    explanation: "Selenocysteine is the 21st amino acid but is co-translationally incorporated. Its tRNA (tRNA[Sec]) is first charged with serine, which is then enzymatically converted to selenocysteine on the tRNA. The UGA codon (normally a stop codon) encodes selenocysteine when a specific SECIS (Sec insertion sequence) element is present in the 3'UTR of the mRNA, recognized by the specialized elongation factor SelB/EFSec."
  },
  {
    id: 30,
    question: "Manganese is a cofactor for arginase in the urea cycle. What other critical antioxidant enzyme requires manganese?",
    options: [
      "Cytoplasmic superoxide dismutase (Cu/Zn-SOD)",
      "Mitochondrial superoxide dismutase (Mn-SOD, SOD2)",
      "Catalase",
      "Glutathione peroxidase"
    ],
    answer: 1,
    explanation: "Mitochondrial superoxide dismutase (Mn-SOD, encoded by SOD2) contains manganese at its active site and catalyzes the dismutation of superoxide (O2•-) to H2O2 and O2 in the mitochondrial matrix. This is the primary defense against mitochondrially generated superoxide. Cytoplasmic SOD1 uses copper and zinc. Mn-SOD is also a tumor suppressor."
  },
  {
    id: 31,
    question: "Which purine salvage enzyme converts adenine + PRPP to AMP, and what genetic defect is associated with its dysfunction?",
    options: [
      "Adenosine kinase; adenosine kinase deficiency causes epilepsy",
      "Adenine phosphoribosyltransferase (APRT); APRT deficiency causes 2,8-dihydroxyadenine urolithiasis",
      "Adenosine deaminase (ADA); ADA deficiency causes SCID",
      "5'-nucleotidase; its deficiency causes purine accumulation"
    ],
    answer: 1,
    explanation: "Adenine phosphoribosyltransferase (APRT) salvages adenine by condensing it with PRPP to form AMP. APRT deficiency leads to accumulation of adenine, which is oxidized by xanthine oxidase to 2,8-dihydroxyadenine — an extremely insoluble compound that precipitates in the urinary tract, causing 2,8-dihydroxyadenine urolithiasis (kidney stones) and nephropathy."
  },
  {
    id: 32,
    question: "The pentose phosphate pathway generates PRPP from ribose-5-phosphate via PRPP synthetase. PRPP is a shared substrate for which metabolic pathways?",
    options: [
      "Only purine and pyrimidine de novo synthesis",
      "Purine de novo synthesis, pyrimidine de novo synthesis, NAD/NADP synthesis, histidine synthesis, and tryptophan synthesis",
      "Purine de novo and salvage pathways only",
      "Purine synthesis, coenzyme A synthesis, and folate synthesis"
    ],
    answer: 1,
    explanation: "PRPP (phosphoribosyl pyrophosphate) is a high-energy ribose donor used in: (1) de novo purine synthesis, (2) de novo pyrimidine synthesis (via CPSII/ATCase → UMP pathway), (3) purine and pyrimidine salvage pathways (via HGPRT, APRT, OPRT), (4) NAD+/NADP+ synthesis from nicotinate, (5) histidine biosynthesis (in bacteria/plants), and (6) tryptophan synthesis (in bacteria/plants)."
  },
  {
    id: 33,
    question: "Dihydropyrimidine dehydrogenase (DPD) deficiency causes sensitivity to 5-FU chemotherapy. What is the mechanistic explanation?",
    options: [
      "DPD-deficient patients cannot convert 5-FU to 5-FdUMP, so the drug is inactive",
      "DPD normally degrades 5-FU; DPD deficiency causes 5-FU to accumulate to toxic levels because it cannot be catabolized",
      "DPD deficiency impairs thymidylate synthase, potentiating 5-FU's effect",
      "DPD normally converts 5-FU to an inactive metabolite that protects cells; its absence allows 5-FU to be more readily phosphorylated to active metabolites"
    ],
    answer: 1,
    explanation: "DPD catalyzes the first and rate-limiting step in pyrimidine degradation and is also the primary enzyme responsible for catabolizing 5-FU (converting it to dihydrofluorouracil). In DPD-deficient patients, 5-FU cannot be degraded and accumulates to much higher systemic concentrations than intended, causing severe and potentially fatal 5-FU toxicity (mucositis, neutropenia, neurotoxicity)."
  },
  {
    id: 34,
    question: "Mycophenolate mofetil (MMF) is an immunosuppressant used in transplantation. What is its biochemical target and why does it selectively affect lymphocytes?",
    options: [
      "MMF inhibits adenosine deaminase, causing lymphocyte apoptosis",
      "MMF (converted to mycophenolic acid) inhibits inosine monophosphate dehydrogenase (IMPDH), blocking de novo guanine nucleotide synthesis; lymphocytes rely almost exclusively on de novo synthesis",
      "MMF inhibits thymidylate synthase, blocking T-cell DNA replication",
      "MMF inhibits PRPP synthetase, globally reducing purine synthesis"
    ],
    answer: 1,
    explanation: "Mycophenolic acid (the active form of MMF) is a non-competitive inhibitor of IMPDH (IMP dehydrogenase), which catalyzes the rate-limiting step in de novo GMP synthesis (IMP → XMP). Lymphocytes are uniquely sensitive because they rely predominantly on de novo purine synthesis for their rapid proliferation, having minimal salvage pathway activity compared to other cell types."
  },
  {
    id: 35,
    question: "In the uridine nucleotide synthesis pathway, the enzyme UMP synthase is bifunctional. Hereditary orotic aciduria is caused by deficiency of this enzyme. What are the two activities and their order?",
    options: [
      "Orotate phosphoribosyltransferase (OPRT) then OMP decarboxylase (OMPDC); deficiency of either or both causes orotic aciduria",
      "Dihydroorotase then orotate phosphoribosyltransferase; OPRT deficiency alone causes orotic aciduria",
      "OMP decarboxylase then OPRT; deficiency causes accumulation of UMP",
      "Aspartate transcarbamoylase then dihydroorotase; CAD deficiency causes orotic aciduria"
    ],
    answer: 0,
    explanation: "Mammalian UMP synthase is bifunctional: the N-terminal domain has orotate phosphoribosyltransferase (OPRT) activity (converting orotate + PRPP → OMP) and the C-terminal domain has OMP decarboxylase (OMPDC) activity (converting OMP → UMP). Hereditary orotic aciduria results from deficiency of one or both activities, causing orotic acid to accumulate. It is the only known defect in pyrimidine de novo synthesis that presents clinically."
  },
  {
    id: 36,
    question: "Calcium homeostasis involves PTH, vitamin D (calcitriol), and calcitonin. Which statement correctly describes the action of PTH on renal calcium handling?",
    options: [
      "PTH increases calcium reabsorption in the proximal tubule only",
      "PTH increases calcium reabsorption in the thick ascending loop and distal convoluted tubule via TRPV5/6 channels, and stimulates 1-alpha-hydroxylase for calcitriol production",
      "PTH increases calcium excretion in the distal nephron to reduce hypercalcemia",
      "PTH stimulates calcium reabsorption via Na-Ca exchanger in the proximal tubule, independent of vitamin D"
    ],
    answer: 1,
    explanation: "PTH acts on the kidney to: (1) increase calcium reabsorption in the thick ascending limb and distal convoluted tubule (via TRPV5 channels), (2) decrease phosphate reabsorption in the proximal tubule (by removing NaPi cotransporters), and (3) stimulate 1-alpha-hydroxylase to produce calcitriol, which further increases intestinal calcium absorption. The net effect is to raise serum calcium."
  },
  {
    id: 37,
    question: "GTP is required for de novo purine synthesis. In purine biosynthesis, GTP specifically acts as an energy source (not as a precursor) in which reaction?",
    options: [
      "PRPP amidotransferase reaction (step 1)",
      "SAICAR synthetase (step 8)",
      "Adenylosuccinate synthetase (IMP → AMP branch), which condenses IMP + aspartate using GTP",
      "AICAR transformylase (step 10)"
    ],
    answer: 2,
    explanation: "In the IMP → AMP branch of purine synthesis, adenylosuccinate synthetase condenses IMP with aspartate to form adenylosuccinate, a reaction driven by GTP hydrolysis to GDP + Pi. Conversely, the IMP → GMP branch requires ATP (for XMP aminase). This creates reciprocal regulation: AMP synthesis requires GTP energy, and GMP synthesis requires ATP energy, balancing the purine nucleotide pool."
  },
  {
    id: 38,
    question: "Lipoic acid is a cofactor for several multienzyme complexes. What is its unique chemical role that distinguishes it from other coenzymes?",
    options: [
      "Lipoic acid is a redox coenzyme that transfers electrons as a disulfide/dithiol couple AND an acyl carrier via its thioester",
      "Lipoic acid is a prosthetic group that provides the reactive thiol for acyl group transfer, like CoA",
      "Lipoic acid acts as an antioxidant by scavenging superoxide in the mitochondrial matrix",
      "Lipoic acid is a mobile carrier like CoQ that shuttles electrons between complexes"
    ],
    answer: 0,
    explanation: "Lipoic acid (lipoamide when attached to enzyme lysine) is unique in having dual functions: (1) as a redox cofactor — the disulfide ring opens to accept 2 electrons (becoming dithiol/dihydrolipoamide), then donates them to NAD+ via dihydrolipoamide dehydrogenase; and (2) as an acyl carrier — the thiol group forms a thioester with acyl groups (e.g., in PDC, alpha-KGDH) before transferring them to CoA."
  },
  {
    id: 39,
    question: "Iodine is essential for thyroid hormone synthesis. In which step of thyroid hormone biosynthesis does iodide organification occur?",
    options: [
      "Iodide is transported into the follicle lumen by pendrin and then organified by thyroid peroxidase (TPO) onto tyrosine residues of thyroglobulin",
      "Iodide is oxidized to I2 by thyroid peroxidase and then spontaneously reacts with tyrosines",
      "Organification occurs inside follicular cells before thyroglobulin is secreted into the lumen",
      "Pendrin transports iodide across the apical membrane; then TPO catalyzes organification using H2O2 as electron acceptor"
    ],
    answer: 3,
    explanation: "Iodide (I-) is actively taken up at the basolateral membrane of thyrocytes by the Na/I symporter (NIS). Pendrin (SLC26A4) transports iodide across the apical membrane into the follicle lumen. Thyroid peroxidase (TPO) then catalyzes organification: oxidizing iodide (using H2O2 produced by DUOX enzymes) and iodinating tyrosine residues of thyroglobulin to form MIT and DIT, which are then coupled to form T3 and T4."
  },
  {
    id: 40,
    question: "Phosphate metabolism is regulated by FGF-23 and Klotho. In what condition does FGF-23 decrease inappropriately, causing hyperphosphatemia?",
    options: [
      "Hyperparathyroidism",
      "Chronic kidney disease (CKD) with loss of renal Klotho expression",
      "Tumor-induced osteomalacia (TIO) with FGF-23-secreting tumors",
      "X-linked hypophosphatemia (XLH) due to PHEX mutations"
    ],
    answer: 1,
    explanation: "In chronic kidney disease (CKD), the kidney loses expression of Klotho, the co-receptor required for FGF-23 signaling in the kidney. Although FGF-23 levels are actually elevated in CKD (as a compensatory response to phosphate retention), the loss of Klotho makes the kidney resistant to FGF-23's phosphaturic effect, resulting in hyperphosphatemia. High FGF-23 also suppresses 1-alpha-hydroxylase."
  },
  {
    id: 41,
    question: "Xanthine oxidase/dehydrogenase exists in two interconvertible forms. What is the molecular basis of the conversion from dehydrogenase (XDH) to oxidase (XO) form, and why is this clinically relevant?",
    options: [
      "Oxidation of critical cysteine residues or proteolytic cleavage converts XDH to XO; XO uses O2 as electron acceptor producing O2•- and H2O2, contributing to ischemia-reperfusion injury",
      "Phosphorylation by PKA converts XDH to XO; XO then produces more uric acid per reaction",
      "XDH is converted to XO by binding to molybdenum cofactor; XO uses only NAD+ as acceptor",
      "XDH-to-XO conversion occurs in the nucleus and is driven by oxidative DNA damage"
    ],
    answer: 0,
    explanation: "XDH is converted to XO by oxidation of cysteine residues (reversible) or irreversible proteolytic cleavage. XDH uses NAD+ as the electron acceptor, while XO uses O2, producing superoxide (O2•-) and H2O2. During ischemia, XDH accumulates; upon reperfusion with O2, XO generates reactive oxygen species (ROS), contributing to ischemia-reperfusion injury in the heart, intestine, and kidney."
  },
  {
    id: 42,
    question: "CoQ (ubiquinone/coenzyme Q) is a mobile electron carrier in the ETC. What unique chemical properties allow it to shuttle electrons?",
    options: [
      "CoQ is a large protein that can accept up to 4 electrons simultaneously",
      "CoQ is a lipid-soluble small molecule that can accept 1 (semiquinone) or 2 (ubiquinol) electrons, shuttling between NADH-linked and FADH2-linked inputs to complex III",
      "CoQ is permanently reduced (ubiquinol) and functions only as an antioxidant",
      "CoQ accepts electrons from complex III and donates them to cytochrome c"
    ],
    answer: 1,
    explanation: "CoQ (ubiquinone) is a lipid-soluble benzoquinone with a long isoprenoid tail that allows lateral diffusion in the inner mitochondrial membrane. It can exist in three redox states: ubiquinone (fully oxidized, Q), ubisemiquinone (one electron, Q•-), and ubiquinol (fully reduced, QH2). This ability to accept one or two electrons allows it to collect electrons from both complex I (NADH) and complex II (FADH2) and transfer them to complex III."
  },
  {
    id: 43,
    question: "Magnesium is required for all reactions involving ATP. What is the chemical basis for the Mg2+-ATP requirement in kinase and synthetase reactions?",
    options: [
      "Mg2+ chelates ADP after phosphotransfer to allow product release",
      "Mg2+ bridges the beta- and gamma-phosphates of ATP, reducing the negative charge repulsion and making the gamma-phosphate more electrophilic for nucleophilic attack",
      "Mg2+ activates the substrate nucleophile by deprotonating a hydroxyl group",
      "Mg2+ stabilizes the transition state by coordinating to the leaving oxygen of ADP"
    ],
    answer: 1,
    explanation: "Mg2+ coordinates to the beta- and gamma-phosphate oxygens of ATP (forming the MgATP complex), reducing the electrostatic repulsion between the negatively charged phosphates and making the gamma-phosphorus more electrophilic. This facilitates nucleophilic attack by the substrate (hydroxyl, amino, or carboxylate groups) on the gamma-phosphate, enabling phosphotransfer. Virtually all ATP-dependent enzymes require Mg2+ for this reason."
  },
  {
    id: 44,
    question: "Hartnup disease involves a defect in the neutral amino acid transporter (SLC6A19). How does this cause pellagra-like symptoms despite adequate dietary protein?",
    options: [
      "Tryptophan is malabsorbed from the intestine and is lost in urine, reducing tryptophan available for niacin synthesis",
      "Phenylalanine malabsorption causes hyperphenylalaninemia that inhibits tryptophan hydroxylase",
      "The defective transporter fails to reabsorb alanine in the kidney, causing chronic alanine deficiency",
      "Defective glycine absorption impairs purine synthesis and secondarily affects NAD+ production"
    ],
    answer: 0,
    explanation: "The SLC6A19 transporter absorbs neutral amino acids (including tryptophan) from the intestinal lumen and proximal renal tubule. In Hartnup disease, tryptophan is not absorbed from the gut (and is lost in urine from the kidney), severely limiting tryptophan availability for niacin synthesis via the kynurenine pathway. Since tryptophan is the precursor of ~15% of dietary niacin equivalents, its malabsorption causes niacin deficiency and pellagra-like symptoms."
  },
  {
    id: 45,
    question: "In de novo pyrimidine synthesis, the ring closure to form the first pyrimidine is catalyzed by dihydroorotase. What is the substrate and product of this reaction?",
    options: [
      "Carbamoyl aspartate (N-carbamoylaspartate) → dihydroorotate (ring closure with loss of H2O)",
      "Carbamoyl phosphate + aspartate → carbamoyl aspartate → dihydroorotate in a single step",
      "Orotic acid → dihydroorotate by reduction using NADPH",
      "Dihydroorotate → orotate by oxidation; dihydroorotase catalyzes the reverse"
    ],
    answer: 0,
    explanation: "Dihydroorotase catalyzes the intramolecular cyclization of N-carbamoylaspartate (carbamoyl aspartate) to dihydroorotate with the loss of water. This forms the six-membered pyrimidine ring for the first time. In mammals, this activity resides on the CAD trifunctional protein along with CPS II and ATCase activities."
  },
  {
    id: 46,
    question: "Ribonucleotide reductase (RNR) is the enzyme that produces all four deoxyribonucleoside diphosphates (dNDPs). What is its allosteric regulation mechanism?",
    options: [
      "RNR has a single allosteric site that responds to the total dNTP pool; high dATP inhibits all activity",
      "RNR has two allosteric sites: the activity site (regulated by dATP/ATP for overall activity) and specificity sites (regulated by specific dNTPs to control substrate selection) — dATP globally inhibits; ATP activates",
      "RNR is regulated only by substrate availability and has no allosteric regulation",
      "RNR is inhibited by GDP and CDP but activated by ADP and UDP"
    ],
    answer: 1,
    explanation: "Ribonucleotide reductase (class I, in mammals) has two regulatory sites: (1) the activity site on the R1 subunit binds dATP (inhibits all activity) or ATP (activates all activity), providing global on/off regulation; (2) the specificity sites bind dNTPs to direct which NDP substrate is preferentially reduced, ensuring balanced production of all four dNTPs for DNA synthesis."
  },
  {
    id: 47,
    question: "Copper absorption in the intestine involves ceruloplasmin and ATP7A/B transporters. Which disease results from ATP7A deficiency, and what is the biochemical consequence?",
    options: [
      "Wilson disease; copper accumulates in liver and brain due to defective biliary copper excretion",
      "Menkes disease; intestinal copper cannot be exported to the circulation, causing systemic copper deficiency despite adequate dietary intake",
      "Aceruloplasminemia; ceruloplasmin is absent causing iron accumulation",
      "Hephaestin deficiency; iron absorption is impaired in the intestine"
    ],
    answer: 1,
    explanation: "ATP7A (MNK protein) is a copper-transporting P-type ATPase located in the trans-Golgi network of intestinal enterocytes. ATP7A deficiency (Menkes disease, X-linked) prevents copper export from enterocytes into the bloodstream, causing systemic copper deficiency. Affected enzymes include lysyl oxidase (connective tissue defects), dopamine beta-hydroxylase (neurological dysfunction), and cytochrome c oxidase (mitochondrial dysfunction)."
  },
  {
    id: 48,
    question: "Fluoride inhibits the glycolytic enzyme enolase, but also affects a specific step in purine/pyrimidine metabolism. What is the correct effect of fluoride on purine nucleotide metabolism?",
    options: [
      "Fluoride activates PRPP synthetase by replacing the pyrophosphate product",
      "Fluoride inhibits phosphoglucomutase, blocking ribose-5-phosphate synthesis for PRPP",
      "Fluoride inhibits enolase, reducing ATP production; since PRPP synthetase requires ATP, PRPP production decreases, reducing purine synthesis",
      "Fluoride directly inhibits HGPRT by acting as a competitive inhibitor at the PRPP binding site"
    ],
    answer: 2,
    explanation: "Fluoride is a classic inhibitor of enolase (forming a fluorophosphate complex), blocking glycolysis at the phosphoenolpyruvate step. The resulting reduction in ATP production limits PRPP synthetase activity (which requires ATP) and also limits phosphoribosyl pyrophosphate synthesis. This indirectly reduces de novo purine synthesis. This is one reason why fluoride is an effective antimicrobial agent in dental contexts."
  },
  {
    id: 49,
    question: "Cobalamin (B12) deficiency can present with subacute combined degeneration of the spinal cord. What metabolic defect underlies the neurological manifestation (distinct from the hematological manifestation)?",
    options: [
      "Impaired methionine synthase leads to reduced myelin SAM and impaired methylation of myelin proteins",
      "Accumulation of methylmalonyl-CoA and methylmalonate due to impaired methylmalonyl-CoA mutase leads to abnormal odd-chain fatty acids in myelin and neurotoxicity",
      "Folate trap causes impaired thymidylate synthesis, leading to neuronal DNA damage",
      "Elevated homocysteine causes oxidative damage to neurons by acting as an NMDA receptor agonist"
    ],
    answer: 1,
    explanation: "The neurological manifestation of B12 deficiency (subacute combined degeneration) is primarily attributed to impaired methylmalonyl-CoA mutase activity. Methylmalonyl-CoA and methylmalonate accumulate and are incorporated into fatty acid synthesis, producing unusual odd-chain and branched fatty acids in the myelin sheath. This disrupts myelin structure and function, causing the characteristic posterior and lateral column degeneration."
  },
  {
    id: 50,
    question: "Dihydrofolate reductase (DHFR) is required to regenerate THF after thymidylate synthase activity. What is the net redox balance of the combined thymidylate synthase/DHFR reaction cycle?",
    options: [
      "Net consumption of one NADPH per dTMP synthesized from dUMP",
      "Net consumption of two NADPH per dTMP synthesized",
      "No net redox change; the methylene group from serine provides all needed electrons",
      "Net production of one NAD+ per dTMP synthesized"
    ],
    answer: 0,
    explanation: "Thymidylate synthase transfers the methylene group from 5,10-methyleneTHF to dUMP, simultaneously oxidizing THF to DHF (dihydrofolate). DHFR then reduces DHF back to THF using one NADPH. The net result of the combined cycle is: dUMP + serine + NADPH → dTMP + glycine + NADP+. Thus, one NADPH is consumed per dTMP molecule synthesized."
  }
];

export default questions;
