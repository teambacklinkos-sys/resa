const questions = [
  // ===== MICROSCOPY (Q1–Q10) =====
  {
    id: 1,
    question: "The resolving power of a light microscope is limited to approximately 200 nm primarily because of:",
    options: ["Lens quality", "The wavelength of visible light (diffraction limit)", "Sample thickness", "Magnification power"],
    answer: 1,
    explanation: "Ernst Abbe's diffraction limit states that the minimum resolvable distance d = lambda / (2 x NA), where lambda is the wavelength and NA is the numerical aperture. With visible light (~400-700 nm) and maximum NA (~1.4 with oil immersion), the theoretical limit is ~200 nm. Techniques like STED and PALM/STORM overcome this limit (super-resolution microscopy)."
  },
  {
    id: 2,
    question: "Phase contrast microscopy is particularly useful for:",
    options: ["Fluorescently labeled specimens", "Visualizing unstained, transparent living cells by converting phase shifts in light to amplitude (brightness) differences", "Electron-dense samples", "Fixed and stained tissue sections only"],
    answer: 1,
    explanation: "Phase contrast microscopy (invented by Frits Zernike, Nobel Prize 1953) converts small differences in refractive index within transparent specimens into visible contrast. A phase ring in the condenser and a phase plate in the objective create constructive/destructive interference, making unstained living cells visible without fixation or staining."
  },
  {
    id: 3,
    question: "Confocal microscopy achieves optical sectioning by:",
    options: ["Using an electron beam", "Using a pinhole aperture to exclude out-of-focus light, collecting fluorescence only from the focal plane", "Using phase contrast optics", "Staining samples with hematoxylin"],
    answer: 1,
    explanation: "Confocal microscopy uses a laser to excite fluorophores and a pinhole (confocal aperture) in front of the detector to reject out-of-focus fluorescence. This produces thin optical sections (~0.5-1.5 microns) without physically sectioning the sample. Serial optical sections can be reconstructed into 3D images using Z-stack imaging."
  },
  {
    id: 4,
    question: "The advantage of two-photon microscopy over confocal microscopy for imaging deep tissues is:",
    options: ["It requires UV excitation", "It uses longer wavelength (infrared) excitation that penetrates deeper with less photodamage and phototoxicity", "It has lower resolution", "It cannot image living tissues"],
    answer: 1,
    explanation: "Two-photon microscopy uses near-infrared light (~700-1000 nm), which penetrates deeper into tissue (up to ~1 mm vs. ~100 microns for confocal) with less scattering and photodamage. Two lower-energy photons arrive simultaneously to excite the fluorophore. Excitation occurs only at the focal point, providing inherent optical sectioning without a pinhole."
  },
  {
    id: 5,
    question: "Transmission electron microscopy (TEM) achieves higher resolution than light microscopy because:",
    options: ["It uses visible light at higher intensity", "It uses an electron beam with a much shorter wavelength than visible light", "It employs special lenses made of quartz", "It uses oil immersion objectives"],
    answer: 1,
    explanation: "Electrons have wavelengths thousands of times shorter than visible light (e.g., ~0.004 nm at 100 kV vs. ~500 nm for visible light). According to the Abbe equation, shorter wavelength means higher resolution. TEM achieves resolution down to ~0.1-0.2 nm, sufficient to visualize individual atoms and molecular structures."
  },
  {
    id: 6,
    question: "Scanning electron microscopy (SEM) is best suited for:",
    options: ["Viewing internal ultrastructure of cells", "Producing detailed 3D surface topography images of specimens", "Viewing live cells in culture", "DNA sequencing"],
    answer: 1,
    explanation: "SEM scans a focused electron beam across the specimen surface and detects secondary electrons emitted from the surface. This produces detailed 3D-like images of surface topography. Samples are typically coated with a thin metal layer (gold, platinum) to make them conductive. SEM resolution (~1-10 nm) is lower than TEM but provides excellent depth of field."
  },
  {
    id: 7,
    question: "FRAP (Fluorescence Recovery After Photobleaching) measures:",
    options: ["Total fluorescence intensity", "The mobility and diffusion rate of fluorescently labeled molecules by bleaching a region and monitoring fluorescence recovery", "The number of fluorescent molecules in a cell", "The wavelength of emitted fluorescence"],
    answer: 1,
    explanation: "FRAP irreversibly bleaches fluorophores in a defined region using high-intensity laser light, then monitors the recovery of fluorescence as unbleached molecules from surrounding areas diffuse into the bleached region. The rate and extent of recovery reveal molecular mobility, diffusion coefficients, and the fraction of immobile molecules."
  },
  {
    id: 8,
    question: "Super-resolution microscopy techniques (STED, PALM, STORM) overcome the diffraction limit by:",
    options: ["Using electron beams instead of light", "Using different physical or computational strategies to achieve resolution below 200 nm while still using visible light", "Increasing the magnification of conventional microscopes", "Using X-rays for imaging"],
    answer: 1,
    explanation: "Super-resolution techniques achieve resolution of 20-50 nm using visible light. STED (Stimulated Emission Depletion) uses a donut-shaped depletion beam to narrow the effective fluorescence spot. PALM/STORM use stochastic activation of individual photoactivatable fluorophores, localizing their positions with nanometer precision over many frames."
  },
  {
    id: 9,
    question: "Differential interference contrast (DIC) microscopy:",
    options: ["Requires fluorescent labeling", "Produces a pseudo-3D relief image of unstained specimens using polarized light and Wollaston prisms", "Is identical to brightfield microscopy", "Cannot image living cells"],
    answer: 1,
    explanation: "DIC (Nomarski) microscopy uses polarized light split into two beams by a Wollaston prism. The beams pass through slightly different parts of the specimen, and their recombination creates interference that produces a pseudo-3D relief image with high contrast. Unlike phase contrast, DIC does not produce halos around structures."
  },
  {
    id: 10,
    question: "Cryo-electron microscopy (cryo-EM) is particularly valuable because it:",
    options: ["Requires extensive chemical fixation and staining", "Preserves biological structures in a near-native frozen-hydrated state, enabling atomic-resolution structure determination", "Can only image large organisms", "Uses visible light for imaging"],
    answer: 1,
    explanation: "Cryo-EM rapidly freezes samples in vitreous ice, preserving them in a near-native state without chemical fixation, dehydration, or staining. Single-particle cryo-EM reconstructs 3D structures from thousands of 2D projection images, achieving near-atomic resolution (<3 Angstroms). It revolutionized structural biology (Nobel Prize 2017) for proteins and complexes that are difficult to crystallize."
  },

  // ===== SPECTROPHOTOMETRY (Q11–Q20) =====
  {
    id: 11,
    question: "Beer-Lambert law states that absorbance is:",
    options: ["Inversely proportional to concentration", "Directly proportional to the concentration of the absorbing species and the path length (A = epsilon x c x l)", "Independent of path length", "Equal to transmittance"],
    answer: 1,
    explanation: "Beer-Lambert law: A = epsilon x c x l, where A = absorbance, epsilon = molar absorptivity (L mol^-1 cm^-1), c = concentration (mol/L), and l = path length (cm). This linear relationship allows quantification of analyte concentration from absorbance measurements, provided the solution is dilute and monochromatic light is used."
  },
  {
    id: 12,
    question: "The relationship between absorbance (A) and transmittance (T) is:",
    options: ["A = T", "A = -log10(T) or equivalently A = log10(1/T)", "A = T^2", "A = 1 + T"],
    answer: 1,
    explanation: "Absorbance is the negative logarithm of transmittance: A = -log10(T), where T = I/I0 (transmitted intensity / incident intensity). At 100% transmittance, A = 0; at 10% transmittance, A = 1; at 1% transmittance, A = 2. Absorbance values between 0.1-1.0 are most reliable for quantitative measurements."
  },
  {
    id: 13,
    question: "Protein concentration measured at 280 nm relies on absorption by:",
    options: ["Peptide bonds", "Aromatic amino acids, primarily tryptophan and tyrosine (and to a lesser extent cystine disulfide bonds)", "Nucleic acids", "Carbohydrates"],
    answer: 1,
    explanation: "UV absorption at 280 nm is due to the aromatic amino acids tryptophan (strongest absorber, epsilon = 5,500 M^-1 cm^-1), tyrosine (epsilon = 1,490 M^-1 cm^-1), and cystine disulfide bonds (epsilon = 125 M^-1 cm^-1). Proteins lacking tryptophan have low A280. Nucleic acid contamination (absorbing at 260 nm) can interfere, so A260/A280 ratio is used to assess purity."
  },
  {
    id: 14,
    question: "The A260/A280 ratio for pure DNA is approximately:",
    options: ["1.0", "1.8", "2.0", "2.5"],
    answer: 1,
    explanation: "Pure DNA has an A260/A280 ratio of ~1.8; pure RNA has a ratio of ~2.0. Ratios significantly below these values suggest protein contamination (proteins absorb more at 280 nm). Ratios above ~2.0-2.1 may indicate RNA contamination in a DNA sample. The A260/A230 ratio (ideally 2.0-2.2) assesses contamination by organic compounds like phenol, guanidinium, or carbohydrates."
  },
  {
    id: 15,
    question: "The Bradford protein assay uses Coomassie Brilliant Blue G-250, which changes color from:",
    options: ["Blue to red upon protein binding", "Brown to yellow upon protein binding", "Red/brown to blue upon binding to protein, measured at 595 nm", "Colorless to green upon protein binding"],
    answer: 2,
    explanation: "In the Bradford assay, Coomassie Brilliant Blue G-250 exists in red/brown (cationic, 465 nm) form in acidic solution. When it binds to protein (primarily through arginine, lysine, and hydrophobic residues), it shifts to the blue anionic form (595 nm). The absorbance increase at 595 nm is proportional to protein concentration. The assay is rapid (<5 min) but varies with protein composition."
  },
  {
    id: 16,
    question: "The BCA (bicinchoninic acid) protein assay is based on:",
    options: ["Direct UV absorption by proteins", "Reduction of Cu2+ to Cu+ by peptide bonds in alkaline conditions, followed by BCA chelation of Cu+ to form a purple complex", "Fluorescence emission by proteins", "Enzymatic conversion of a substrate"],
    answer: 1,
    explanation: "The BCA assay involves two steps: (1) the biuret reaction where peptide bonds reduce Cu2+ to Cu+ in alkaline conditions; (2) two BCA molecules chelate each Cu+ ion, forming a purple complex absorbing at 562 nm. Unlike Bradford, BCA is compatible with most detergents and is less protein-to-protein variable, but is sensitive to reducing agents."
  },
  {
    id: 17,
    question: "A NanoDrop spectrophotometer requires very small sample volumes because it uses:",
    options: ["A very large cuvette", "A micro-volume pedestal that forms a liquid column between two optical surfaces using surface tension", "Dilution to large volumes", "Fluorescence instead of absorbance"],
    answer: 1,
    explanation: "The NanoDrop uses a sample retention system where 0.5-2 microliters of sample are pipetted onto a pedestal. A second optical surface is brought in contact to form a liquid column held by surface tension. The path length is automatically adjusted (0.05-1 mm), allowing measurement of highly concentrated samples without dilution."
  },
  {
    id: 18,
    question: "Deviations from Beer-Lambert law at high concentrations occur because:",
    options: ["The spectrophotometer is broken", "Molecular interactions, scattering, and saturation of detector response cause non-linear absorbance-concentration relationships", "The law only applies to gases", "The cuvette material absorbs light"],
    answer: 1,
    explanation: "At high concentrations, Beer-Lambert law deviations occur due to: (1) molecular interactions (aggregation, dimerization) that alter absorptivity; (2) refractive index changes affecting the light path; (3) stray light reaching the detector; (4) fluorescence re-absorption. Accurate measurements require absorbance values between 0.1-1.0 (linear range)."
  },
  {
    id: 19,
    question: "Fluorescence spectroscopy differs from absorption spectroscopy in that fluorescence:",
    options: ["Measures the decrease in light intensity", "Measures light emitted by a molecule after it absorbs excitation light, detected at 90° to the excitation beam", "Uses only infrared light", "Does not require a light source"],
    answer: 1,
    explanation: "In fluorescence spectroscopy, molecules absorb excitation light and emit light at a longer wavelength (Stokes shift). Emitted light is detected at 90° to the excitation path to minimize detection of transmitted/scattered excitation light. Fluorescence is 100-1000x more sensitive than absorbance because it measures signal against a dark background."
  },
  {
    id: 20,
    question: "The Lowry protein assay combines which two chemical reactions?",
    options: ["Bradford reaction and BCA reaction", "Biuret reaction (Cu2+ reduction by peptide bonds) and Folin-Ciocalteu reaction (reduction by aromatic amino acids)", "Ninhydrin reaction and Bradford reaction", "Silver staining and Coomassie staining"],
    answer: 1,
    explanation: "The Lowry assay has two steps: (1) the biuret reaction where peptide bonds in alkaline solution reduce Cu2+ to Cu+; (2) the Folin-Ciocalteu reagent (phosphomolybdate-phosphotungstate) is reduced by Cu+ and aromatic amino acids (Tyr, Trp, Cys), producing a blue color (measured at 750 nm). It is more sensitive than biuret alone but is time-consuming and susceptible to many interferences."
  },

  // ===== CHROMATOGRAPHY (Q21–Q30) =====
  {
    id: 21,
    question: "Size exclusion chromatography (SEC/gel filtration) separates molecules based on:",
    options: ["Charge", "Hydrophobicity", "Molecular size — larger molecules elute first because they cannot enter the pores of the gel beads", "Affinity for a specific ligand"],
    answer: 2,
    explanation: "SEC separates molecules based on hydrodynamic radius. The column contains porous beads with a defined pore size range. Large molecules are excluded from the pores and pass through the column in the void volume (eluting first). Smaller molecules enter the pores and are retarded, eluting later. SEC is used for protein molecular weight estimation, desalting, and buffer exchange."
  },
  {
    id: 22,
    question: "Ion exchange chromatography separates proteins based on:",
    options: ["Size", "Net surface charge — proteins bind to oppositely charged resin and are eluted by increasing salt concentration or changing pH", "Molecular weight only", "Hydrophobicity"],
    answer: 1,
    explanation: "Cation exchange resins (e.g., CM, SP) are negatively charged and bind positively charged proteins. Anion exchange resins (e.g., DEAE, Q) are positively charged and bind negatively charged proteins. Bound proteins are eluted by increasing ionic strength (salt gradient) or changing pH. Protein charge depends on its pI relative to the buffer pH."
  },
  {
    id: 23,
    question: "In affinity chromatography, the target protein is selectively purified by:",
    options: ["Size exclusion", "Specific interaction with an immobilized ligand (e.g., antibody, substrate analog, metal ion, or tag)", "Random adsorption to the resin", "Charge-based interactions only"],
    answer: 1,
    explanation: "Affinity chromatography exploits specific biological interactions. A ligand (antibody, enzyme substrate, Ni2+ for His-tagged proteins, glutathione for GST-tagged proteins, or streptavidin for biotinylated molecules) is immobilized on a matrix. The target protein binds specifically while contaminants pass through. Elution uses competing ligand, pH change, or imidazole gradient."
  },
  {
    id: 24,
    question: "IMAC (Immobilized Metal Affinity Chromatography) with Ni-NTA resin is commonly used to purify:",
    options: ["Glycosylated proteins", "Polyhistidine (His)-tagged recombinant proteins", "Phosphorylated proteins only", "Native untagged proteins"],
    answer: 1,
    explanation: "IMAC uses chelated metal ions (Ni2+, Co2+) to bind the imidazole side chains of histidine residues. Recombinant proteins with a polyhistidine tag (usually 6xHis) bind strongly to Ni-NTA (nitrilotriacetic acid) resin. Elution is achieved with imidazole gradient (competing for Ni2+ binding sites) or low pH. This is one of the most widely used methods for recombinant protein purification."
  },
  {
    id: 25,
    question: "High-performance liquid chromatography (HPLC) differs from traditional column chromatography in:",
    options: ["HPLC uses gravity flow", "HPLC uses high pressure to push solvent through columns packed with small, uniform particles, providing superior resolution and speed", "HPLC has lower resolution", "HPLC cannot separate proteins"],
    answer: 1,
    explanation: "HPLC uses pumps to deliver solvent at high pressure (up to ~6000 psi) through columns packed with small, uniform particles (1.7-5 microns). The small particle size provides high surface area and superior resolution. Detector options include UV/Vis, fluorescence, refractive index, and mass spectrometry. UHPLC uses even smaller particles and higher pressures."
  },
  {
    id: 26,
    question: "Reversed-phase HPLC (RP-HPLC) separates molecules based on:",
    options: ["Molecular size", "Hydrophobicity — molecules interact with a non-polar stationary phase (C18) and are eluted with increasingly organic mobile phase", "Charge", "Affinity for a specific antibody"],
    answer: 1,
    explanation: "RP-HPLC uses a non-polar stationary phase (typically C18 or C8 alkyl chains bonded to silica). Hydrophobic molecules bind more strongly and elute later. Elution uses a gradient of increasing organic solvent (acetonitrile or methanol). RP-HPLC is the most widely used mode for peptide, protein, and small molecule analysis, often coupled with mass spectrometry."
  },
  {
    id: 27,
    question: "Hydrophobic interaction chromatography (HIC) differs from reversed-phase chromatography in that HIC:",
    options: ["Uses identical conditions", "Uses milder conditions (aqueous buffers with decreasing salt concentration) that preserve protein native structure", "Requires organic solvents for binding", "Separates based on charge"],
    answer: 1,
    explanation: "HIC exploits hydrophobic interactions under mild, non-denaturing conditions. Proteins bind to a mildly hydrophobic resin (phenyl, butyl, octyl) at high salt concentration (which strengthens hydrophobic interactions). Elution uses decreasing salt gradient. Unlike RP-HPLC, HIC avoids organic solvents and denaturation, preserving biological activity."
  },
  {
    id: 28,
    question: "Gas chromatography (GC) is suitable for analyzing:",
    options: ["Large proteins", "Volatile or semi-volatile compounds that can be vaporized without decomposition", "DNA fragments", "Antibodies"],
    answer: 1,
    explanation: "GC separates volatile and semi-volatile compounds. The sample is vaporized in a heated injection port, carried through a column by an inert gas (helium, nitrogen), and separated based on interactions with the stationary phase (polarity, boiling point). GC-MS combines GC separation with mass spectrometric identification. It is widely used for metabolomics, toxicology, and environmental analysis."
  },
  {
    id: 29,
    question: "Thin-layer chromatography (TLC) is a rapid technique for:",
    options: ["Protein purification at large scale", "Qualitative or semi-quantitative separation and identification of small molecules using a thin adsorbent layer on a plate", "DNA sequencing", "Cell sorting"],
    answer: 1,
    explanation: "TLC uses a thin layer of adsorbent (silica gel, alumina) on a glass or plastic plate. The sample is spotted at the bottom, and the plate is developed in a solvent chamber. Compounds separate based on their differential affinity for the stationary phase and mobile phase. Rf values (distance migrated by compound / distance migrated by solvent front) aid identification."
  },
  {
    id: 30,
    question: "The resolution in chromatography is improved by:",
    options: ["Increasing the flow rate dramatically", "Increasing column length, decreasing particle size, and optimizing selectivity", "Using a shorter column", "Decreasing the temperature only"],
    answer: 1,
    explanation: "Resolution (Rs) depends on three factors: efficiency (N, related to column length and particle size), selectivity (alpha, related to stationary/mobile phase chemistry), and retention factor (k). Rs = (sqrt(N)/4) x ((alpha-1)/alpha) x (k/(1+k)). Smaller particles increase N; longer columns increase N but also analysis time. Optimizing selectivity has the greatest impact on resolution."
  },

  // ===== ELECTROPHORESIS (Q31–Q40) =====
  {
    id: 31,
    question: "Agarose gel electrophoresis is the standard method for separating:",
    options: ["Proteins based on charge", "DNA and RNA fragments based on size", "Lipids based on polarity", "Amino acids based on pI"],
    answer: 1,
    explanation: "Agarose gel electrophoresis separates nucleic acids by size. DNA has a uniform charge-to-mass ratio (due to the phosphodiester backbone), so migration in an electric field depends on size — smaller fragments migrate faster through the gel pores. Typical agarose concentrations are 0.5-2% for DNA fragments of 100 bp to 25 kb."
  },
  {
    id: 32,
    question: "Ethidium bromide is used in gel electrophoresis to:",
    options: ["Increase DNA migration speed", "Intercalate into DNA and fluoresce under UV light, allowing visualization of DNA bands", "Denature the DNA", "Act as a molecular weight marker"],
    answer: 1,
    explanation: "Ethidium bromide (EtBr) is a planar molecule that intercalates between DNA base pairs. When bound to DNA and exposed to UV light (302 nm), it fluoresces orange (590 nm), allowing visualization of DNA bands. EtBr is a potent mutagen and has been largely replaced by safer alternatives like SYBR Safe, GelRed, and GelGreen."
  },
  {
    id: 33,
    question: "Pulsed-field gel electrophoresis (PFGE) is used to separate:",
    options: ["Small oligonucleotides", "Very large DNA molecules (50 kb to 10 Mb) by periodically alternating the direction of the electric field", "Proteins by molecular weight", "RNA by secondary structure"],
    answer: 1,
    explanation: "Standard agarose gels cannot resolve DNA fragments larger than ~20-25 kb because large molecules migrate at the same rate (reptation). PFGE alternates the electric field direction, forcing large DNA molecules to reorient — larger molecules take longer to reorient, providing size-dependent separation. PFGE is used for bacterial strain typing, chromosomal mapping, and restriction mapping."
  },
  {
    id: 34,
    question: "In capillary electrophoresis (CE), separation occurs in:",
    options: ["A large agarose gel slab", "A narrow-bore fused silica capillary (25-75 microns internal diameter) with high voltage", "A polyacrylamide tube gel", "A paper strip"],
    answer: 1,
    explanation: "CE performs separations in narrow capillaries (25-75 micron ID) with high voltages (10-30 kV). The high surface area-to-volume ratio allows efficient heat dissipation, enabling high voltages and fast, high-resolution separations. CE is used in DNA sequencing (Sanger method), protein analysis, and clinical diagnostics. Detection is typically UV or fluorescence."
  },
  {
    id: 35,
    question: "2D gel electrophoresis separates proteins by:",
    options: ["Size in both dimensions", "Isoelectric point (pI) in the first dimension (isoelectric focusing) and molecular weight (SDS-PAGE) in the second dimension", "Charge only in both dimensions", "Hydrophobicity in both dimensions"],
    answer: 1,
    explanation: "2D-PAGE provides extremely high resolution by combining two orthogonal separation principles. The first dimension (IEF) separates proteins by pI using a pH gradient — each protein migrates to the pH where its net charge is zero. The focused strip is then applied to an SDS-PAGE gel for second dimension separation by molecular weight, resolving thousands of proteins."
  },
  {
    id: 36,
    question: "Isoelectric focusing (IEF) separates proteins based on their:",
    options: ["Molecular weight", "Isoelectric point (pI) — proteins migrate in a pH gradient until they reach the pH where their net charge is zero", "Hydrophobicity", "Enzymatic activity"],
    answer: 1,
    explanation: "IEF uses immobilized pH gradients (IPG strips) or carrier ampholyte-generated gradients. In an electric field, proteins migrate toward the electrode of opposite charge until they reach the pH equal to their pI (isoelectric point), where net charge = 0 and migration stops. IEF provides excellent resolution of proteins differing by as little as 0.01 pH units in pI."
  },
  {
    id: 37,
    question: "The stacking gel in SDS-PAGE serves to:",
    options: ["Separate proteins by molecular weight", "Concentrate and align all proteins into a tight band before they enter the resolving gel, improving resolution", "Stain the proteins", "Denature the proteins"],
    answer: 1,
    explanation: "The stacking gel (low %T, pH 6.8) uses a discontinuous buffer system. Glycine in the running buffer (trailing ion) and chloride in the gel buffer (leading ion) create a voltage gradient that concentrates proteins between the ion boundary into a very thin zone. This ensures all proteins enter the resolving gel (higher %T, pH 8.8) simultaneously for sharp band resolution."
  },
  {
    id: 38,
    question: "Silver staining of polyacrylamide gels is approximately how much more sensitive than Coomassie staining?",
    options: ["2-fold", "10-50 fold", "Equal sensitivity", "Less sensitive"],
    answer: 1,
    explanation: "Silver staining detects as little as 0.1-1 ng protein per band, compared to 50-100 ng for Coomassie Brilliant Blue. This 10-50 fold greater sensitivity comes from silver ions binding to proteins and being reduced to metallic silver, producing dark brown/black bands. However, silver staining is less quantitative, less reproducible, and incompatible with mass spectrometry without special protocols."
  },
  {
    id: 39,
    question: "Southern blotting is used to detect:",
    options: ["RNA sequences", "Specific DNA sequences by transferring DNA from an agarose gel to a membrane and hybridizing with a labeled probe", "Proteins by molecular weight", "Carbohydrates"],
    answer: 1,
    explanation: "Southern blot (invented by Edwin Southern, 1975) involves: (1) restriction enzyme digestion of DNA; (2) agarose gel electrophoresis; (3) transfer to nitrocellulose/nylon membrane; (4) hybridization with a labeled complementary probe; (5) detection. It detects specific DNA sequences, gene rearrangements, and copy number. Named after its inventor (Northern and Western blots are puns on the name)."
  },
  {
    id: 40,
    question: "Northern blotting detects:",
    options: ["DNA fragments", "Specific RNA molecules after gel electrophoresis, transfer, and probe hybridization", "Proteins", "Lipids"],
    answer: 1,
    explanation: "Northern blotting separates RNA by size on a denaturing agarose gel (formaldehyde or glyoxal), transfers it to a membrane, and hybridizes with a labeled probe to detect specific RNA species. It provides information about RNA size and abundance. Largely replaced by RT-qPCR and RNA-seq for gene expression analysis, but still used for confirming alternative splicing and RNA integrity."
  },

  // ===== NGS (Q41–Q50) =====
  {
    id: 41,
    question: "The fundamental principle of Illumina sequencing is:",
    options: ["Chain termination using ddNTPs", "Sequencing by synthesis using fluorescently labeled reversible terminators", "Nanopore-based ionic current changes", "Pyrosequencing using luciferase"],
    answer: 1,
    explanation: "Illumina sequencing uses bridge amplification to create clusters, then sequences by synthesis. In each cycle, all four fluorescently labeled reversible terminators (dNTPs with 3'-OH blocking group) are added. After incorporation and imaging, the fluorophore and blocking group are cleaved, allowing the next cycle. This produces millions of short reads (50-300 bp) in parallel."
  },
  {
    id: 42,
    question: "Library preparation in NGS typically involves:",
    options: ["Direct loading of genomic DNA onto the sequencer", "DNA fragmentation, end repair, adapter ligation, and PCR amplification of adapter-ligated fragments", "Restriction enzyme digestion only", "Bisulfite conversion of all samples"],
    answer: 1,
    explanation: "NGS library preparation converts DNA/RNA into sequencing-ready fragments: (1) fragmentation (sonication, enzymatic, or tagmentation); (2) end repair (blunting and 5'-phosphorylation); (3) A-tailing (adding dA overhang); (4) adapter ligation (platform-specific adapters with indexes); (5) size selection; (6) PCR amplification. PCR-free protocols are available to reduce bias."
  },
  {
    id: 43,
    question: "The Phred quality score Q30 corresponds to a base call accuracy of:",
    options: ["90%", "99%", "99.9%", "99.99%"],
    answer: 2,
    explanation: "Phred score Q = -10 x log10(P), where P is the probability of an incorrect base call. Q10 = 90% accuracy (1 in 10 error); Q20 = 99% (1 in 100); Q30 = 99.9% (1 in 1,000); Q40 = 99.99% (1 in 10,000). Q30 is considered the minimum acceptable quality for most NGS applications. Modern Illumina platforms typically achieve >80% bases at Q30."
  },
  {
    id: 44,
    question: "Oxford Nanopore sequencing differs from Illumina because it:",
    options: ["Requires PCR amplification of every molecule", "Sequences single native DNA/RNA molecules in real-time by measuring changes in ionic current as they pass through a protein nanopore", "Produces only short reads", "Uses fluorescent dyes for base detection"],
    answer: 1,
    explanation: "Oxford Nanopore passes single-stranded DNA or RNA through a protein pore (e.g., CsgG). Each nucleotide causes a characteristic disruption in ionic current, enabling real-time base calling. Advantages include ultra-long reads (>1 Mb possible), direct RNA sequencing, base modification detection, and portable sequencing (MinION). Trade-off is higher per-read error rate (~5-10%)."
  },
  {
    id: 45,
    question: "Whole exome sequencing (WES) targets approximately what percentage of the human genome?",
    options: ["100%", "50%", "~1-2% (the protein-coding exons)", "~10%"],
    answer: 2,
    explanation: "WES targets the ~22,000 protein-coding genes, which comprise only ~1-2% of the genome (~30-60 Mb) but harbor ~85% of known disease-causing variants. Exon capture uses biotinylated RNA/DNA probes that hybridize to exonic regions, followed by streptavidin bead pull-down. WES is more cost-effective than WGS for identifying coding variants but misses non-coding regulatory variants."
  },
  {
    id: 46,
    question: "RNA-seq provides advantages over microarrays because it:",
    options: ["Is limited to known transcripts only", "Offers unbiased genome-wide transcriptome analysis with higher dynamic range, detection of novel transcripts, splice variants, and allele-specific expression", "Requires less computational analysis", "Cannot detect low-abundance transcripts"],
    answer: 1,
    explanation: "RNA-seq sequences cDNA derived from the entire transcriptome. Unlike microarrays (limited to pre-designed probes), RNA-seq detects novel transcripts, splice variants, gene fusions, SNVs in expressed regions, and allele-specific expression. It has a wider dynamic range (>5 orders of magnitude vs. ~3 for arrays) and does not require species-specific probe design."
  },
  {
    id: 47,
    question: "Paired-end sequencing in NGS provides:",
    options: ["Only one read per fragment", "Two reads from both ends of each DNA fragment, improving alignment accuracy and enabling structural variant detection", "Lower quality scores", "Shorter read lengths"],
    answer: 1,
    explanation: "Paired-end sequencing reads both ends of each fragment, providing two linked reads with a known insert size between them. This improves: (1) alignment to repetitive regions; (2) de novo assembly by providing long-range information; (3) structural variant detection (discordant pairs indicate insertions, deletions, inversions, translocations); (4) overall mapping quality."
  },
  {
    id: 48,
    question: "PacBio SMRT (Single Molecule, Real-Time) sequencing achieves long reads by:",
    options: ["Using reversible terminators", "Observing a single DNA polymerase in a zero-mode waveguide (ZMW) incorporating fluorescently labeled nucleotides in real-time", "Using chain termination chemistry", "Sequencing only adapter-ligated fragments shorter than 100 bp"],
    answer: 1,
    explanation: "PacBio SMRT sequencing fixes a single DNA polymerase at the bottom of a zero-mode waveguide (ZMW, ~70 nm diameter well). Fluorescently labeled nucleotides diffuse in, and incorporation by the polymerase is detected in real-time by fluorescence pulses. This produces long reads (average 10-20 kb, up to >100 kb) with random error profiles correctable by circular consensus sequencing (CCS/HiFi)."
  },
  {
    id: 49,
    question: "The primary computational step that follows quality control in NGS analysis is:",
    options: ["Variant calling", "Read alignment (mapping) to a reference genome using algorithms like BWA or Bowtie2", "Gene annotation", "Phylogenetic analysis"],
    answer: 1,
    explanation: "After quality filtering (removing adapters, low-quality bases using tools like Trimmomatic or fastp), reads are aligned to a reference genome. BWA-MEM is standard for DNA; STAR or HISAT2 for RNA-seq (splice-aware aligners). Alignment produces SAM/BAM files containing read mapping positions, quality scores, and alignment metadata. Variant calling (GATK, DeepVariant) follows alignment."
  },
  {
    id: 50,
    question: "Sequencing depth (coverage) of 30x for whole genome sequencing means:",
    options: ["30 genes were sequenced", "Each base in the genome is covered by an average of 30 independent reads", "The sequencing took 30 hours", "30% of the genome was sequenced"],
    answer: 1,
    explanation: "Coverage (depth) = (Total bases sequenced) / (Genome size). At 30x coverage, each genomic position is read ~30 times on average, providing statistical confidence for variant calling. Clinical WGS typically requires 30-40x; somatic cancer sequencing requires 60-100x for detecting low-frequency variants. WES typically uses 100-200x coverage of target regions."
  }
];

export default questions;
