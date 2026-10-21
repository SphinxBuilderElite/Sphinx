# Part B: Systematic Reviews and Meta-Analyses, an Operational Manual (Oct 2026)

**For:** Dr Ahmed Atwa, T&O LED, Blackpool. Goal: a steady pipeline of PubMed + Web of Science indexed SR/MAs over 2.5+ years (ST3 portfolio) that keeps going as a lifelong habit.
**Status of facts:** checked Oct 2026. APCs and indexing change, so **re-verify on the journal page and in the Clarivate Master Journal List before every submission**.
**Sources:** see `B_sources.json` (same folder). Inline refs are shown as [S#] where useful.

---

## 0. The one-page version

| Stage | Gate you must pass before moving on | Typical weeks (part-time team) |
|---|---|---|
| 1. Question + overlap check | No up-to-date SR answers it (or yours is clearly better/different); PICO frozen | 1–2 |
| 2. Protocol + registration | PRISMA-P protocol written; PROSPERO/OSF record submitted **before screening** | 1–2 (+ PROSPERO processing) |
| 3. Search | Peer-reviewed (PRESS) strategy, ≥3–4 databases + registries, exports deduplicated | 1–3 |
| 4. Screening | Dual independent title/abstract + full text; kappa reported; PRISMA flow numbers reconcile | 2–5 |
| 5. Extraction | Piloted form; double extraction (or extraction + 100% verification); author queries sent | 2–4 |
| 6. Risk of bias | Tool matches design; two assessors; robvis figure | 1–2 |
| 7. Analysis | Pre-specified model; sensitivity analyses; code archived | 1–3 |
| 8. GRADE / SoF | Certainty for every critical outcome | 0.5–1 |
| 9. Write + submit | PRISMA 2020 checklist, abstract checklist, data/code shared | 2–4 |
| 10. Peer review + revision | Response to reviewers | 4–16 (journal-dependent) |

**Realistic end-to-end:** 4–6 months for a focused SR+MA with a working team of 3–4. The published median for a full SR is about 67 weeks from registration to publication (Borah 2017), so being faster than that comes from scoping tightly, not from cutting corners.

---

## 1. Choosing a review question that will get published

### 1.1 Where good orthopaedic SR questions come from
- **Clinical uncertainty you meet every week**, for example: weight-bearing after ankle ORIF, tourniquet use in TKA, TXA in hip fracture, cast vs splint in buckle fractures, cemented vs uncemented hemiarthroplasty, VTE prophylaxis duration (links to your own service evaluation), distal radius (links to your BOAST/NG38 audit).
- **New RCTs published since the last SR.** This is the best signal. If 2 or more sizeable RCTs have appeared since the last good MA, an update is justified.
- **Guideline gaps:** NICE (NG38 fractures, NG124 hip fracture, NG157 joint replacement), BOAST, AAOS CPGs. Look for "research recommendations" sections, which are ready-made gap statements.
- **"Evidence maps" and scoping reviews** that list gaps explicitly.
- **Conflicting meta-analyses** on the same topic (e.g., 3 MAs with different conclusions). An overview/umbrella review, or a rigorous update that explains the discordance, publishes well.
- **Under-synthesised outcomes:** PROMs (OKS/OHS/PRWE/DASH), return to work or sport, complications in specific populations (elderly, diabetics), cost.

### 1.2 Overlap / redundancy check (do this BEFORE anything else)
- [ ] **PubMed**: `("topic terms") AND (systematic review[pt] OR meta-analysis[pt] OR "systematic review"[tiab])`. Sort by date.
- [ ] **Cochrane Library** (CDSR + protocols): https://www.cochranelibrary.com
- [ ] **PROSPERO** (registered, in-progress reviews): https://www.crd.york.ac.uk/prospero/. The 2025 rebuild flags duplicate/similar topics at submission [S3].
- [ ] **Epistemonikos** (largest SR database; shows the primary studies shared across SRs): https://www.epistemonikos.org
- [ ] **OSF Registries** (scoping reviews and others not on PROSPERO): https://osf.io/registries
- [ ] **INPLASY / Research Registry** (paid registries). Check them because others register there.
- [ ] **Google Scholar** first 2–3 pages, and **medRxiv** preprints.
- [ ] **ClinicalTrials.gov / ISRCTN / WHO ICTRP** to see whether big RCTs are about to report. If a large trial (e.g., a UK NIHR HTA trial) reports in 6 months, your MA will be outdated on arrival. Consider waiting, or designing it as a living SR.

**Decision rule: when is an SR redundant?**
- **Redundant:** a high-quality SR (AMSTAR 2 moderate/high) exists, published in the last 2–3 years, and no new primary studies would change the result. Do not do it.
- **Justified update:** new studies have appeared since, or the previous SR had serious flaws (no RoB assessment, pooled RCTs with NRS uncritically, wrong effect measure, double-counted cohorts, no GRADE). State this explicitly in the introduction ("Since the last MA (Ref, 2022), four RCTs (n = 1,200) have been published…").
- **Different angle:** different population (e.g., >80 years), outcome (PROMs vs revision), comparison (NMA of all options), or design (IPD, DTA).
- **Editors now explicitly reject "zombie" / redundant MAs** [S20, S21]. Write a "Rationale" paragraph that names prior SRs and explains your added value. PRISMA item 3 asks for this.

### 1.3 Frame the question
- PICO(S) for interventions: Population, Intervention, Comparator, Outcomes (name the **primary** outcome and its time point), Study designs.
- PECO for exposures/prognosis, PIRD (Population, Index test, Reference standard, Diagnosis) for DTA, PCC (Population, Concept, Context) for scoping reviews.
- **Feasibility test:** run a rough PubMed search. Fewer than 3 eligible studies means no meta-analysis (consider a scoping review or a narrative SR). More than about 80 eligible studies means narrow the scope or split into 2 papers (legitimately, by distinct questions, never salami-slicing one dataset).

### 1.4 Review types and their publishability in orthopaedics

| Type | When to use | Reporting guideline | Publishability in ortho journals (2026) | Effort |
|---|---|---|---|---|
| **SR + pairwise MA of RCTs** | ≥3 comparable RCTs | PRISMA 2020 | High. Best currency. | Medium |
| **SR + MA of comparative NRS** | No/few RCTs (common in trauma) | PRISMA 2020 (+ MOOSE historically) | Medium. Needs ROBINS-I and adjusted estimates; editors are increasingly sceptical. | Medium |
| **SR without MA (narrative / SWiM)** | Heterogeneous studies | PRISMA 2020 + SWiM | Medium-low unless the topic is novel | Low-medium |
| **Network meta-analysis (NMA)** | ≥3 competing treatments (e.g., all fixation options for distal radius; all VTE agents) | PRISMA-NMA | High impact, high scrutiny. Needs a statistician. | High |
| **Scoping review** | Map a field, define gaps, concepts | JBI methodology + PRISMA-ScR | Medium. EFORT Open Reviews, BJO, J Clin Med take them. Cannot go on PROSPERO; use OSF. | Medium |
| **Umbrella review / overview of reviews** | Many SRs, discordant conclusions | PRIOR (2022) | Medium-high. Uses AMSTAR 2 + overlap (CCA). | Medium |
| **Rapid review** | Time-critical policy question | Cochrane Rapid Reviews guidance | Low in ortho journals | Low-medium |
| **Living SR** | Fast-moving field, many ongoing trials | PRISMA 2020 (+ LSR guidance) | Niche. Needs long-term commitment. | High (ongoing) |
| **MA of proportions (single-arm)** | Complication/union/revision rates of a technique | PRISMA 2020 | Medium. Common in ortho but often weak; use GLMM. | Low-medium |
| **DTA meta-analysis** | Imaging/clinical tests (e.g., MRI for scaphoid, clinical tests for ACL) | PRISMA-DTA; QUADAS-2 | Medium-high. Needs bivariate/HSROC models. | High |
| **IPD meta-analysis** | Trialists willing to share data | PRISMA-IPD | Very high, but takes years and a collaboration | Very high |

**Recommended mix for your 2.5-year plan:** 60% pairwise SR+MA (RCT-based where possible), 15% scoping reviews (fast, good for co-authoring trainees and students), 15% umbrella/NMA (with a statistician), 10% MA of proportions/DTA where clinically meaningful.

### Stage gate 1
- [ ] Overlap check documented (save a screenshot/notes with date, kept in the project folder)
- [ ] Rationale paragraph drafted naming prior SRs
- [ ] PICO frozen; primary outcome and time point named
- [ ] Senior author (consultant) has agreed; target journal shortlist (2–3) chosen

---

## 2. Protocol and registration

### 2.1 Protocol (PRISMA-P 2015, 17 items)
Write a 4–8 page protocol. Template sections:
- [ ] Title (identify as SR/MA), registration, authors + contributions, amendments policy, funding
- [ ] Rationale + objectives (PICO)
- [ ] Eligibility (designs, populations, interventions, comparators, outcomes, time points, setting, language, date limits, with a justification for each limit)
- [ ] Information sources (databases with platforms, registries, grey literature, reference lists, contact with authors)
- [ ] Draft MEDLINE search strategy (full, as an appendix)
- [ ] Study records: data management (Rayyan/Covidence), selection process (dual, independent), data collection process (piloted form, double extraction)
- [ ] Data items, outcomes and prioritisation
- [ ] RoB tool(s) and how they feed the synthesis
- [ ] Synthesis: effect measures, model (REML + Hartung–Knapp), heterogeneity, subgroups (pre-specified with direction of effect hypothesised), sensitivity analyses, missing data handling, conversion methods
- [ ] Meta-bias (funnel/Egger if ≥10 studies), confidence (GRADE)

Publishing the protocol itself in *BMJ Open* or *Systematic Reviews* is optional. It adds a citable output, but it is slow and has an APC. Usually not worth it for routine SRs; worth it for NMAs/IPD.

### 2.2 Registration
**PROSPERO** (CRD, University of York) [S3, S4]
- Free. Covers SRs with a health-related outcome. **Does NOT accept scoping reviews, literature reviews or mapping reviews.** Overviews/umbrella reviews are accepted.
- **Register before screening/data extraction starts.** PROSPERO will not register reviews where data extraction is complete. Ideally submit before formal screening and state the stage honestly.
- **2025 rebuild:** a new interface with automatic processing and a duplicate/similar-topic check at submission. Records publish after all listed authors approve [S3, S4]. The old multi-month backlog has largely gone, but budget 1–4 weeks and **do not wait for the CRD number to start the search** (you can start once submitted).
- What it checks: scope (health outcome, systematic methods), completeness of fields, and duplication with existing records. It does **not** peer-review your methods.
- Update the record when you finish (status, publication link) and record every amendment with a date. Reviewers compare protocol and paper.

**OSF Registries** (https://osf.io/registries)
- Free, immediate DOI, use for **scoping reviews** and anything PROSPERO rejects. Use the "Generalized Systematic Review Registration" template, or upload your protocol as a preregistration. Can be embargoed.

**Avoid relying on paid registries (INPLASY etc.)** as your only registration. Some editors view them as a signature of SR mills.

### 2.3 Team (minimum viable team per review)

| Role | Who | Tasks | Authorship |
|---|---|---|---|
| **Lead/guarantor (you)** | Ahmed | Question, protocol, coordinate, write, analysis | First |
| **Reviewer 2** | FY/CT/SHO/student | Independent screening, extraction, RoB | 2nd |
| **Reviewer 3 (arbiter)** | Registrar/fellow | Resolves conflicts, checks extraction | Middle |
| **Information specialist** | NHS/university librarian | Search strategy, PRESS, exports | Middle or acknowledgement (ask; many now expect authorship) |
| **Statistician** | University/R&D methodologist, or a trained colleague | Model choice, code review, NMA/DTA | Middle |
| **Senior author** | Consultant (e.g., your supervisors) | Clinical framing, final approval | Last |

Agree authorship in writing at kick-off (ICMJE criteria; CRediT roles).

### Stage gate 2
- [ ] Protocol v1.0 dated, saved as PDF
- [ ] PROSPERO/OSF submitted; ID in the project log
- [ ] Authorship and roles agreed by email

---

## 3. Search

### 3.1 Get an information specialist
- **NHS Knowledge and Library Services**: your Trust library (Blackpool Teaching Hospitals has one) will run or peer-review searches free of charge, and you get **NHS OpenAthens** access to Ovid MEDLINE/Embase, EBSCO CINAHL, etc. (The old HDAS interface has been retired; use the native Ovid/EBSCO platforms.)
- **University of Warwick library** (as a PGDip student) may give Web of Science and Scopus. Check that your access covers them.
- Librarian involvement is associated with better search quality and fewer reviewer complaints. Credit them.

### 3.2 Databases (minimum for ortho intervention SRs)
- [ ] **MEDLINE** (via Ovid, or PubMed)
- [ ] **Embase** (via Ovid or Embase.com). Required: many European/Asian ortho trials are only in Embase.
- [ ] **Cochrane CENTRAL** (essential for RCT reviews)
- [ ] **Web of Science Core Collection** and/or **Scopus** (citation databases; also useful for forward citation chasing)
- [ ] **CINAHL** (rehab, nursing, physio outcomes)
- [ ] **Trial registries:** ClinicalTrials.gov, WHO ICTRP (also ISRCTN), to find unpublished/ongoing trials and to detect outcome-reporting bias
- [ ] **Grey literature:** conference abstracts (Embase covers many; EFORT/BOA/AAOS proceedings via BJJ Orthopaedic Proceedings), OpenGrey successors, dissertations (ProQuest), guideline sites (NICE)
- [ ] **Citation chasing:** backward (reference lists) and forward (citing articles), via the free CitationChaser tool: https://estech.shinyapps.io/citationchaser/
- Optional: PEDro (physio RCTs), Google Scholar (first 200–300 results via Publish or Perish), LILACS, CNKI (if justified).

### 3.3 Building the strategy
1. Split PICO into **concepts** (usually P + I (+ C) + design filter; **do not search on outcomes** unless unavoidable).
2. For each concept, gather **controlled vocabulary** (MeSH in MEDLINE; **Emtree** in Embase, different!) plus **free-text synonyms** (spelling variants, abbreviations, truncation `fractur*`, adjacency `(distal adj3 radius)` in Ovid, `NEAR/3` in WoS/Scopus).
3. Combine synonyms with **OR** within a concept, and concepts with **AND**.
4. Use **validated filters** rather than home-made ones:
   - RCTs: **Cochrane Highly Sensitive Search Strategy** (sensitivity-maximising version, MEDLINE/PubMed/Ovid) and the Cochrane Embase RCT filter, both in Cochrane Handbook ch. 4 technical supplement.
   - Observational studies, SRs, diagnostic studies: **SIGN filters** (https://www.sign.ac.uk/what-we-do/methodology/search-filters/) and the **ISSG Search Filter Resource** (https://sites.google.com/a/york.ac.uk/issg-search-filters-resource/).
   - Exclude animal-only studies with the standard `NOT (animals NOT humans)` construct.
5. **Test sensitivity**: list 5–10 "known" eligible studies. The strategy must retrieve all of them.
6. **Peer-review** with the **PRESS 2015 checklist** (translation, Boolean/proximity operators, subject headings, text words, spelling/syntax, limits and filters).
7. **Translate** across databases with the **Polyglot Search Translator** (SR-Accelerator, Bond University: https://sr-accelerator.com/#/polyglot), then hand-check subject headings in each database. MeSH-to-Emtree mapping is not automatic.
8. Example skeleton (Ovid MEDLINE):
```text
1  exp Radius Fractures/
2  ((distal adj3 radius) or (distal adj3 radial) or colles or smith* or barton*).tw,kf.
3  1 or 2
4  exp Casts, Surgical/ or Splints/
5  (cast* or plaster or splint* or "volar locking plate*" or VLP or "K-wire*" or kirschner).tw,kf.
6  4 or 5
7  3 and 6
8  [Cochrane HSSS RCT filter, sensitivity-maximising, Ovid lines]
9  7 and 8
10 exp animals/ not humans/
11 9 not 10
```
9. **Limits:** avoid language limits (if you must, justify them; use DeepL/Google Translate for screening). Date limits only if justified (e.g., the technique was introduced in 2005).

### 3.4 Running and exporting
- [ ] Run all searches within the same 1–2 days; **record the exact date of each search, the platform and the coverage dates** (e.g., "Ovid MEDLINE ALL 1946 to October 18, 2026").
- [ ] Export RIS/XML with abstracts. Keep the raw exports untouched in `/01_search/raw/`.
- [ ] **Deduplicate**: EndNote (Bramer method, a sequence of field-match steps), **Zotero** (merge duplicates), **Rayyan** (built-in, then manual check), **Covidence** (auto), **SR-Accelerator Deduplicator**, or **Deduklick** (automated, validated). Log how many duplicates were removed (needed for the PRISMA flow).
- [ ] **Re-run the search** if more than 6–12 months pass before submission. Reviewers will ask, and the PRISMA date must be recent (ideally less than 6 months at submission).

### 3.5 Reporting (PRISMA-S, 16 items)
Report every database + platform, registries, grey sources, citation searching, contact with authors, **full strategies for every database (supplement)**, limits/filters (cite the filter), prior work reused, updates, dates, peer review (PRESS), and the deduplication method/software.

### Stage gate 3
- [ ] All known studies retrieved
- [ ] PRESS review done (by librarian or second searcher)
- [ ] Raw exports + dedup log + search dates saved
- [ ] Full strategies copied into the supplement draft

---

## 4. Screening

### 4.1 Tools

| Tool | Cost | Strengths | Use when |
|---|---|---|---|
| **Rayyan** (https://www.rayyan.ai) | Free tier; paid for advanced features | Blind mode, conflict resolution, labels, mobile app | Default for most of your reviews |
| **Covidence** (https://www.covidence.org) | Subscription (check whether your university/Trust has it; Cochrane authors get it free) | End-to-end: screening, extraction, RoB 2, PRISMA flow auto-generated | When available, the most efficient option |
| **ASReview** (https://asreview.nl) | Free, open-source | Active learning prioritises likely relevant records; useful at >3,000 records | Large searches; report the stopping rule |
| **EPPI-Reviewer** (UCL) | Subscription | Complex reviews, machine learning classifiers, coding | Scoping/mixed-methods |
| **DistillerSR** | Commercial | Industry-grade audit trail | Rarely needed |

### 4.2 Process
- [ ] **Pilot**: both reviewers screen the same 50–100 records, compare, refine the criteria. Repeat until agreement is at least 90%.
- [ ] **Title/abstract**: two reviewers independently, blinded to each other. Include if in doubt.
- [ ] **Full text**: two reviewers independently; record **one primary reason** for each exclusion (hierarchy: wrong design > wrong population > wrong intervention > wrong comparator > wrong outcome > duplicate dataset).
- [ ] **Conflicts**: discussion, then a third reviewer arbitrates.
- [ ] **Agreement**: report Cohen's kappa (κ) at each stage (0.61–0.80 substantial, >0.80 almost perfect). In R: `irr::kappa2(data.frame(r1, r2))`.
- [ ] **Overlapping cohorts / multiple reports**: link multiple publications of the same study, and pick the most complete or recent report per outcome. This is a major source of double counting in ortho (registry and single-centre cohorts reported repeatedly).
- [ ] **AI/automation**: allowed, but per the 2025 Cochrane/Campbell/JBI/CEE position statement you stay accountable. Report tool, version, dates, purpose, validation and human verification [S22]. **Never let an LLM be the sole second reviewer.**

### 4.3 PRISMA 2020 flow diagram
- Use the **PRISMA2020 Shiny app / R package** (Haddaway et al. 2022): https://estech.shinyapps.io/prisma_flowdiagram/, or the templates at https://www.prisma-statement.org/prisma-2020-flow-diagram (choose "new review" vs "updated review"; databases only vs databases + other sources).
- Numbers must reconcile: identified − duplicates = screened; screened − excluded = sought for retrieval; and so on. **Mismatch is one of the most common reviewer catches.**

### Stage gate 4
- [ ] Kappa computed; conflicts log saved
- [ ] Excluded-at-full-text table with reasons (supplement)
- [ ] Linked reports per study documented

---

## 5. Data extraction

### 5.1 Form
- Build in Excel/Google Sheets, Covidence, or **SRDR+** (free, AHRQ: https://srdrplus.ahrq.gov).
- Fields: study ID (first author year), design, country, setting, funding/COI, recruitment dates, n randomised/analysed per arm, age, sex, fracture classification (AO/OTA), intervention details (implant, technique, rehab), comparator, follow-up, **each outcome with time point, measure, n, mean/SD or events/total, adjusted estimates (HR/OR + 95% CI + covariates)**, notes, and a "query to author" field.
- [ ] **Pilot on 2–3 studies** by both extractors; revise.
- [ ] **Double extraction** (independent) for outcome data; at least 100% verification by a second person for everything else.
- [ ] Pre-specify **time-point windows** (e.g., "12 months = 9–15 months") and an **outcome hierarchy** (which scale if a study reports several, e.g., PRWE > DASH > QuickDASH).

### 5.2 Getting the numbers you need
- **Graphs only:** use **WebPlotDigitizer** (https://automeris.io) on the figure. Record that the data were digitised.
- **SE or CI to SD:** SD = SE × √n; SE from a 95% CI = (upper − lower) / 3.92 (for large n; use the t-distribution for small n). See Cochrane Handbook ch. 6.
- **Change-from-baseline vs final values:** do not mix them with SMD. With MD you may mix (Handbook ch. 10), but be consistent.
- **Medians/IQR/range to mean/SD:**
  - **Mean:** Luo et al. 2018 (optimally weighted; replaces Hozo 2005)
  - **SD:** Wan et al. 2014 (or Shi et al. 2020 improvement)
  - **Skewness check:** Shi et al. 2023 test; if data are clearly skewed, consider the QE/BC methods (McGrath et al. 2020, R package `estmeansd`), or a sensitivity analysis excluding converted studies
  - Calculator: https://www.math.hkbu.edu.hk/~tongt/papers/median2mean.html (Hong Kong Baptist University, Tong group)
  - In R: `meta::metacont()` converts automatically when you pass `median.e`, `q1.e`, `q3.e`, etc. with `method.mean = "Luo"` and `method.sd = "Shi"`
- **Contact authors:** send 2 emails, 2 weeks apart, from an NHS/university address with a precise table of what you need. Log the date sent, the reply, and the data received. Report the response rate.
- **Unit of analysis:** patients vs knees/hips (bilateral cases), cluster trials, crossover, multi-arm trials (split the shared control group or combine arms; never double-count the control).

### Stage gate 5
- [ ] Extraction discrepancies resolved and logged
- [ ] All conversions flagged in a column
- [ ] Author-contact log complete

---

## 6. Risk of bias (RoB)

| Design | Tool | Notes |
|---|---|---|
| RCT (parallel) | **RoB 2** (2019), assessed per outcome/result; domains: randomisation, deviations, missing data, measurement, selective reporting | Excel tool at https://www.riskofbias.info; use cluster/crossover variants when needed |
| Non-randomised studies of interventions | **ROBINS-I V2** (released 2025): algorithm-suggested judgements, new handling of immortal time bias, online tool [S12] | Specify confounders a priori in the protocol |
| Non-randomised studies of exposures | **ROBINS-E** (2023/24) | Prognostic/aetiological reviews |
| Cohort/case-control (simpler) | **Newcastle–Ottawa Scale** | Still widely used in ortho but criticised; prefer ROBINS-I for comparative intervention questions |
| Non-randomised surgical studies | **MINORS** (Slim 2003): 8 items for non-comparative studies (max 16), 12 for comparative (max 24) | Very common in ortho journals; acceptable for case series MAs |
| Diagnostic accuracy | **QUADAS-2** (QUADAS-3 in development) | Risk of bias + applicability |
| Case series, prevalence, qualitative | **JBI critical appraisal tools** (https://jbi.global/critical-appraisal-tools) | Prevalence MAs, case series |
| Systematic reviews (umbrella) | **AMSTAR 2** (16 items, 7 critical domains); also **ROBIS** | Rate overall confidence high/moderate/low/critically low |
| Prognostic factor studies | **QUIPS**; prediction models: **PROBAST** (PROBAST+AI 2025) | |

- [ ] Two independent assessors; calibrate on 2 studies first.
- [ ] **Use RoB in the synthesis**: sensitivity analysis excluding high-risk studies, plus GRADE downgrading. A RoB table that never affects anything is a classic reviewer complaint.
- [ ] Figures: **robvis** (R package or web app: https://mcguinlu.shinyapps.io/robvis/) gives traffic-light and summary bar plots.

```r
# install.packages("robvis")
library(robvis)
rob <- read.csv("rob2_results.csv")   # columns: Study, D1..D5, Overall, Weight
rob_traffic_light(rob, tool = "ROB2", psize = 10)
rob_summary(rob, tool = "ROB2", weighted = FALSE)
# ROBINS-I: tool = "ROBINS-I"; QUADAS-2: tool = "QUADAS-2"
```

---

## 7. Analysis

### 7.1 Effect measures
| Outcome | Measure | Notes |
|---|---|---|
| Binary (union, infection, revision) | **RR** (default, intuitive), **OR** (required for case-control and logistic outputs), **RD** (absolute; useful for SoF but heterogeneous across baseline risks) | Report absolute effects per 1,000 in the SoF table |
| Continuous, same scale | **MD** | e.g., PRWE points, length of stay in days |
| Continuous, different scales | **SMD** (Hedges' g) | Re-express on a familiar scale; interpret against the MCID |
| Time-to-event | **HR** (log HR + SE) | Extract from Cox models or reconstruct (Tierney 2007) |
| Single-arm rates | Proportion (logit, GLMM) | See 7.6 |
| Ratio of means | **ROM** | Useful for skewed outcomes such as LOS |

### 7.2 Model choice (current recommendations)
- **Random effects** is the default for clinical heterogeneity in ortho (different implants, surgeons, populations). Use common (fixed) effect only when studies are genuinely functionally identical, or as a sensitivity analysis.
- **τ² estimator: REML** (or Paule–Mandel). **Not DerSimonian–Laird.** RevMan now defaults to REML [S13].
- **CI for the pooled effect: Hartung–Knapp–Sidik–Jonkman (HKSJ)** when there are more than 2 studies and τ² > 0 (Cochrane recommendation) [S13]. With 2 studies, or τ² = 0, use the Wald interval, or consider not pooling. Be aware that HK can be extremely wide with very few studies; that is the honest uncertainty.
- **Binary data, few events:** Mantel–Haenszel (common effect) as a sensitivity analysis; **Peto OR** only for rare events (<1%) with balanced arms and small effects.
- **Zero cells:** avoid the default 0.5 continuity correction where possible. Options: MH without correction (`MH.exact = TRUE`), treatment-arm continuity correction, or **GLMM / beta-binomial**. Double-zero studies: report them; include them via GLMM or exclude them with a sensitivity analysis.

### 7.3 Heterogeneity
- Report **τ² (and τ)**, **I² with 95% CI**, Cochran's Q p-value, and the **95% prediction interval** (shows where a new study's true effect would lie). I² is a proportion, not an absolute measure: I² = 80% with tiny τ can be clinically trivial.
- Investigate rather than just report: subgroups and meta-regression pre-specified in the protocol (direction of effect hypothesised). **Meta-regression needs about 10 studies per covariate.**
- Credibility of subgroup effects: use **ICEMAN** (Schandelmaier 2020).

### 7.4 Sensitivity analyses (pre-specify)
- [ ] Leave-one-out (influence)
- [ ] Excluding high RoB studies
- [ ] Excluding studies with converted medians/imputed SDs
- [ ] Common effect vs random effects; DL vs REML; with vs without HK
- [ ] Excluding NRS (if any were mixed in, which you should avoid: pool RCTs and NRS separately)
- [ ] Influence diagnostics (Baujat plot, `metafor::influence()`)

### 7.5 Small-study effects / publication bias
- **Funnel plot + Egger test (continuous/OR) or Harbord/Peters (binary)** only when there are **≥10 studies** (Cochrane). Below that, say it was not assessed, and why.
- **Trim-and-fill** only as a sensitivity analysis (it assumes asymmetry = publication bias, which is often wrong).
- Compare with registries: outcome-reporting bias (registered outcomes not reported).
- Consider contour-enhanced funnels.

### 7.6 Meta-analysis of proportions (current recommendation)
- **Do not use the Freeman–Tukey double arcsine** as the default. Back-transformation can give seriously misleading results (Schwarzer et al. 2019; Röver & Friede 2022) [S14, S15].
- Use a **GLMM (random-intercept logistic regression; logit link)**, which handles 0% and 100% studies without continuity corrections. With `meta::metaprop(method = "GLMM", sm = "PLOGIT")`.
- Interpret single-arm pooled rates cautiously: case-mix and follow-up drive heterogeneity, so I² is usually >90%. Rely on prediction intervals and subgroup analyses by follow-up and design.

### 7.7 Network meta-analysis (basics)
- Assumptions: **transitivity** (effect modifiers balanced across comparisons; check with a table) and **consistency** (direct vs indirect agreement: node-splitting, design-by-treatment interaction).
- Frequentist: R **netmeta**. Bayesian: **gemtc**/**multinma** (or **BUGSnet**). Rank with **P-scores/SUCRA**, but never over-interpret rankings.
- Certainty: **CINeMA** (https://cinema.ispm.unibe.ch) or GRADE-NMA.
- Report with PRISMA-NMA; include a network graph, league table, and forest vs reference.

### 7.8 Trial sequential analysis (TSA)
- Controls the risk of random error from repeated updating; estimates the **required information size**. Copenhagen Trial Unit TSA software (Java, free: https://ctu.dk/tsa/) or the R package `RTSA`.
- Useful as a "firmness of evidence" adjunct for RCT MAs with few trials. Not mandatory; some editors in anaesthesia/critical care like it, and it is less common in ortho.

### 7.9 Software

| Software | Cost | Use |
|---|---|---|
| **R: `meta`, `metafor`, `netmeta`, `dmetar`** | Free | Default. Reproducible. Guide: Harrer et al., *Doing Meta-Analysis with R* (free online: https://bookdown.org/MathiasHarrer/Doing_Meta_Analysis_in_R/) |
| **RevMan Web** (Cochrane) | Free for Cochrane reviews and academic non-Cochrane use | Cochrane-style forest plots; REML + HKSJ now available |
| **Stata** (`meta` suite; `metan`; `network`) | Paid | If your statistician uses Stata |
| **Comprehensive Meta-Analysis (CMA)** | Paid | GUI; avoid for reproducibility |
| **JASP / jamovi (MAJOR module)** | Free | GUI front-ends to metafor; good for learning and teaching |
| **OpenMeta[Analyst]** | Free, unmaintained | Legacy; avoid |
| **MetaInsight / MetaDTA (Leicester)** | Free web apps | NMA / DTA exploration |

### 7.10 R code skeletons

```r
## 0. Setup ---------------------------------------------------------------
# install.packages(c("meta","metafor","netmeta","dmetar","estmeansd","robvis","irr"))
library(meta); library(metafor)
settings.meta(digits = 2)

## 1. Binary outcome (e.g., infection), RR, REML + Hartung-Knapp --------------
d <- read.csv("binary.csv")  # study, year, ev.e, n.e, ev.c, n.c, rob, design
m_bin <- metabin(event.e = ev.e, n.e = n.e, event.c = ev.c, n.c = n.c,
                 studlab = paste(study, year), data = d,
                 sm = "RR", method = "MH",            # MH for common-effect part
                 common = FALSE, random = TRUE,
                 method.tau = "REML",
                 method.random.ci = "HK",            # HKSJ CI (meta >= 7.0)
                 prediction = TRUE,
                 incr = 0.5, method.incr = "only0",  # or use GLMM below
                 title = "Deep infection")
summary(m_bin)
forest(m_bin, sortvar = TE, leftcols = c("studlab","event.e","n.e","event.c","n.c"),
       label.e = "Plate", label.c = "K-wire", prediction = TRUE)

# Rare events: GLMM alternative (no continuity correction needed)
m_glmm <- metabin(ev.e, n.e, ev.c, n.c, studlab = study, data = d,
                  sm = "OR", method = "GLMM", model.glmm = "UM.RS")

## 2. Continuous outcome (e.g., PRWE at 12 months), MD -------------------
c <- read.csv("cont.csv")  # n.e, mean.e, sd.e, n.c, mean.c, sd.c (+ medians if any)
m_cont <- metacont(n.e, mean.e, sd.e, n.c, mean.c, sd.c,
                   studlab = study, data = c, sm = "MD",       # "SMD" if scales differ
                   method.tau = "REML", method.random.ci = "HK",
                   common = FALSE, prediction = TRUE,
                   # automatic median/IQR conversion when mean/SD missing:
                   median.e = median.e, q1.e = q1.e, q3.e = q3.e,
                   median.c = median.c, q1.c = q1.c, q3.c = q3.c,
                   method.mean = "Luo", method.sd = "Shi")
summary(m_cont); forest(m_cont)

## 3. Subgroup + meta-regression -------------------------------------------
m_sub <- update(m_cont, subgroup = design, tau.common = FALSE)   # e.g., RCT vs NRS
m_reg <- metareg(m_cont, ~ mean_age)                            # needs ~10 studies
bubble(m_reg)

## 4. Sensitivity ----------------------------------------------------------
metainf(m_cont, pooled = "random")                   # leave-one-out
update(m_cont, subset = rob != "High")               # exclude high RoB
update(m_cont, method.tau = "DL", method.random.ci = "classic")  # DL comparison
# Influence diagnostics via metafor
res <- rma(yi = m_cont$TE, sei = m_cont$seTE, method = "REML", test = "knha")
inf <- influence(res); plot(inf); baujat(res)

## 5. Small-study effects (only if k >= 10) ----------------------------------
funnel(m_cont, contour.levels = c(0.9, 0.95, 0.99), col.contour = c("grey75","grey60","grey45"))
metabias(m_cont, method.bias = "Egger")              # binary: "Harbord" or "Peters"
trimfill(m_cont)                                     # sensitivity only

## 6. Proportions (e.g., nonunion rate after technique X): GLMM logit ------
p <- read.csv("prop.csv")   # study, events, n
m_prop <- metaprop(event = events, n = n, studlab = study, data = p,
                   sm = "PLOGIT", method = "GLMM",
                   method.tau = "ML",               # GLMM uses ML
                   prediction = TRUE)
summary(m_prop); forest(m_prop, xlim = c(0, 0.3), pscale = 100)  # show as %

## 7. Time-to-event: generic inverse variance on log HR -----------------------
h <- read.csv("hr.csv")    # study, hr, lci, uci
h$logHR <- log(h$hr); h$seLogHR <- (log(h$uci) - log(h$lci)) / 3.92
m_hr <- metagen(TE = logHR, seTE = seLogHR, studlab = study, data = h, sm = "HR",
                method.tau = "REML", method.random.ci = "HK", common = FALSE)

## 8. Network meta-analysis (frequentist) --------------------------------------
library(netmeta)
nd <- read.csv("arms.csv")   # study, treat, event, n (arm-level)
pw <- pairwise(treat = treat, event = event, n = n, studlab = study, data = nd, sm = "OR")
nm <- netmeta(pw, common = FALSE, random = TRUE, reference.group = "Cast",
              method.tau = "REML")
netgraph(nm, number.of.studies = TRUE)
forest(nm); netleague(nm); netrank(nm, small.values = "desirable")  # P-scores
netsplit(nm)               # direct vs indirect (consistency)
decomp.design(nm)          # design-by-treatment inconsistency

## 9. Kappa for screening agreement ------------------------------------------
library(irr); s <- read.csv("screen.csv")  # r1, r2 (include/exclude)
kappa2(s[, c("r1","r2")])
```
- Archive code + data on **OSF or GitHub/Zenodo** and cite the DOI in the paper (PRISMA item 27; more and more journals expect this).

### Stage gate 7
- [ ] Analysis matches the protocol; deviations listed with reasons
- [ ] Statistician has reviewed the code/output
- [ ] All figures exported at ≥300 dpi (TIFF/PDF)

---

## 8. Certainty of evidence (GRADE)

- Start **high** for RCTs and **low** for observational studies (or high if you used ROBINS-I, then downgrade through the RoB domain).
- **Downgrade** for: risk of bias, inconsistency, indirectness, imprecision (CI crosses the MCID/decision threshold; the optimal information size is not met), and publication bias.
- **Upgrade** (observational only): large effect, dose-response, residual confounding would reduce the effect.
- Use **GRADEpro GDT** (https://www.gradepro.org, free for academics) to build the **Summary of Findings (SoF) table**: outcomes, anticipated absolute effects (per 1,000), relative effect, n participants (studies), certainty, plain-language comments.
- Imprecision: use the minimal important difference (e.g., PRWE MCID ~11–14 points; OKS ~5) with the **"minimally contextualised" approach** (GRADE guidance 2021–22).
- Write conclusions in **GRADE-language** ("probably reduces" = moderate; "may reduce" = low; "very uncertain" = very low). This avoids spin.
- NMA: **CINeMA**. DTA: GRADE for test accuracy. Prognostic: GRADE for prognosis.

---

## 9. Writing and submission

### 9.1 PRISMA 2020 (27 items, many with sub-items) [S1, S2]
1 Title · 2 Abstract (PRISMA 2020 for Abstracts, 12 items) · 3 Rationale · 4 Objectives · 5 Eligibility · 6 Information sources · 7 Search strategy · 8 Selection process · 9 Data collection process · 10 Data items · 11 RoB assessment · 12 Effect measures · 13 Synthesis methods (13a–f) · 14 Reporting bias assessment · 15 Certainty assessment · 16 Study selection (flow + excluded studies) · 17 Study characteristics · 18 RoB in studies · 19 Results of individual studies · 20 Results of syntheses (20a–d) · 21 Reporting biases · 22 Certainty of evidence · 23 Discussion (23a–d incl. limitations of evidence and of the review process) · 24 Registration and protocol (24a–c incl. amendments) · 25 Support · 26 Competing interests · 27 Availability of data, code and other materials.

- [ ] Fill in the checklist with **page/line numbers** (download from https://www.prisma-statement.org/prisma-2020-checklist); upload it with the submission.
- [ ] Also: PRISMA-S for the search, plus PRISMA-ScR / PRISMA-NMA / PRISMA-DTA / PRIOR as relevant.

### 9.2 Manuscript template (target ~3,500–4,500 words)
- **Title:** "[Intervention] versus [comparator] for [condition]: a systematic review and meta-analysis of randomised controlled trials"
- **Abstract:** structured; include the registration ID, search date, number of studies/participants, main effect with 95% CI, I²/prediction interval, and GRADE certainty.
- **Introduction (3 paragraphs):** clinical problem, burden → what prior SRs found and why that is not enough → aim.
- **Methods:** mirror the protocol; cite methods (Handbook 6.5, RoB 2, GRADE).
- **Results:** flow → characteristics table → RoB → syntheses (primary outcome first) → sensitivity → reporting bias → GRADE.
- **Discussion:** principal findings (in GRADE language), comparison with prior SRs (explain discordance), strengths/limitations (of the evidence and of the review), implications for practice and research (specific trial needed: PICO + sample size).
- **Figures:** PRISMA flow; forest plot(s) for the primary outcome(s); RoB traffic light; optional funnel; SoF table. Everything else goes in the supplement.

### 9.3 Common reasons SRs are rejected (and fixes)
1. **Redundant / no added value** → overlap check, explicit rationale, update justification.
2. **No (or retrospective) registration, or undisclosed deviations** → register before screening; list amendments.
3. **Inadequate search** (PubMed only, no Embase/CENTRAL, no registries, no strategy shown) → section 3.
4. **Pooling apples and oranges**: RCTs with NRS, different interventions, different time points → separate analyses; transitivity thinking.
5. **Double counting** patients (overlapping cohorts, multi-arm trials, bilateral joints) → linking reports; unit-of-analysis plan.
6. **Statistical errors**: DL with few studies, fixed effect with high I², SMD for same-scale outcomes, wrong SD (SE mistaken for SD; very common), Egger with <10 studies, Freeman–Tukey proportions.
7. **RoB done but not used**, or the wrong tool (NOS for RCTs, Jadad score).
8. **No certainty assessment (GRADE)** and overconfident conclusions/spin.
9. **PRISMA flow numbers don't add up**; checklist missing or wrong page numbers.
10. **Too few studies for the claims** (e.g., MA of 2 small RCTs with a strong recommendation).
11. **Signs of an "SR mill"**: many authors with no clear contribution, generic text, a topic outside the authors' field, a paid registry only, rapid-fire submissions on near-identical topics, no data availability [S20, S21, S23].

### 9.4 Target journals (orthopaedics / trauma) that publish SR/MAs

**Indexing: verify each in PubMed (NLM Catalog: "currently indexed for MEDLINE") and Clarivate Master Journal List (SCIE vs ESCI) before submitting.** APCs below are indicative (Oct 2026); confirm on the journal site.

| Journal | Publisher / model | SR/MA appetite | Indexing (verify) | APC (indicative) |
|---|---|---|---|---|
| **Bone & Joint Journal (BJJ)** | BJS / hybrid | Selective; high bar, RCT-based MAs | MEDLINE, SCIE | None for subscription route |
| **Bone & Joint Open (BJO)** | BJS / full OA | Good fit for UK authors; SRs welcome | PubMed/PMC, ESCI/SCIE (check) | **£926 (CC BY-NC-ND) / £976 (CC BY)** + VAT; **10% off for BOA members**, 10% for reviewers [S16] |
| **EFORT Open Reviews** | Bioscientifica / OA, reviews only | Reviews and SRs are its purpose | PubMed/PMC, SCIE | APC applies (check; institutional deals exist) |
| **Bone & Joint Research** | BJS / OA | Basic science + clinical MAs | MEDLINE, SCIE | APC (check) |
| **Archives of Orthopaedic and Trauma Surgery** | Springer / hybrid | Publishes many SR/MAs | MEDLINE, SCIE | Free (subscription route); OA optional |
| **Injury** | Elsevier / hybrid | Trauma SRs and MAs welcome | MEDLINE, SCIE | Free (subscription route) |
| **European Journal of Orthopaedic Surgery & Traumatology** | Springer / hybrid | Many SRs | MEDLINE, SCIE/ESCI (check) | Free (subscription route) |
| **Journal of Orthopaedic Surgery and Research (JOSR)** | BMC/Springer Nature / OA | High-volume SR/MA venue | MEDLINE, SCIE | ~£2,000+ (check); note its very high SR volume |
| **BMC Musculoskeletal Disorders** | BMC / OA | SRs, protocols | MEDLINE, SCIE | ~£2,000+ (check) |
| **Journal of Orthopaedics and Traumatology** | Springer / OA (SIOT) | SR/MAs | MEDLINE, SCIE | APC (check) |
| **Acta Orthopaedica** | Nordic Orthopaedic Federation / OA | Rigorous; registries + MAs | MEDLINE, SCIE | Low/modest APC (check) |
| **JBJS Reviews** | Wolters Kluwer | SRs and narrative reviews | MEDLINE, SCIE (check) | Free (subscription route) |
| **Musculoskeletal Surgery** | Springer / hybrid | Accepts SRs; lower bar | MEDLINE (check WoS status: ESCI?) | Free (subscription route) |
| **Journal of Clinical Medicine** | MDPI / OA | Accepts many SRs; fast | PubMed/PMC, SCIE | ~CHF 2,600 (check); be selective with MDPI special issues |
| **Subspecialty**: J Arthroplasty, KSSTA, Am J Sports Med, Arthroscopy, J Shoulder Elbow Surg, J Hand Surg Eur, Foot Ankle Int, Eur Spine J, Hip Int, J Orthop Trauma | various | Subspecialty SRs | MEDLINE, SCIE | mostly hybrid (free route) |

**Avoid:** journals not in MEDLINE/PMC *and* not in WoS; predatory journals (check Think.Check.Submit); **Cureus** (removed from Web of Science in Oct 2025, so no impact factor and its WoS-indexed value for ST3 is gone) [S18].

**Strategy:** for each SR, pick a ladder of three journals (aspirational, realistic, safe), all MEDLINE + SCIE. Format for #1, and keep a reformatted version ready for #2 so that a rejection costs you days, not weeks. For ST3 points the scoring cares about PubMed-indexed publications and your authorship position. Check the current year's T&O ST3 self-assessment scoring for exactly what counts.

### Stage gate 9
- [ ] PRISMA 2020 + abstract checklist with page numbers
- [ ] All supplements: full search strategies, excluded studies with reasons, extraction tables, RoB per domain, sensitivity analyses, GRADE profiles, code/data DOI
- [ ] All co-authors approved the final version (email record); ICMJE forms
- [ ] AI-use statement (if any) per RAISE / journal policy [S22]

---

## 10. Pipeline: running 3–5 SRs in parallel

### 10.1 Realistic timeline per review (weeks, part-time clinicians, ~6–8 h/week each)

| Week | Stage | You | Reviewer 2 | Librarian | Statistician | Senior |
|---|---|---|---|---|---|---|
| 1–2 | Question, overlap, protocol | Lead | Comment | Draft search | Model advice | Approve |
| 2–3 | Registration + search | Submit | — | Run, PRESS, export | — | — |
| 3–7 | Screening (T/A + full text) | Screen | Screen | — | — | Arbiter (or Reviewer 3) |
| 7–10 | Extraction + RoB | Extract | Double-extract | — | — | — |
| 10–12 | Analysis + GRADE | Run R | Check | — | Review | Clinical sense-check |
| 12–15 | Writing | Draft | Methods/results tables | Search methods text | Stats methods text | Edit Discussion |
| 15–16 | Submit | | | | | |
| 16–32 | Peer review + revision | | | | | |

### 10.2 Staggered pipeline (example for 4 SRs)
- Start a new review **every 6–8 weeks**, so that at any moment one is in protocol, one in screening, one in extraction/analysis, and one in writing or review.
- Year 1: aim for 3 submitted, 1–2 accepted. Year 2: 4–5 submitted. Year 3: 4–5 submitted + 1 NMA/umbrella. Over 2.5 years that is realistically **8–12 published SR/MAs** with a stable team, plus scoping reviews and letters.
- Rotate first authorship among the team (you as senior/corresponding author on some) once the machine works. This keeps the team motivated and multiplies output without multiplying your hours.

### 10.3 Team operating system
- [ ] **Shared folder per review** with a fixed structure: `00_admin` (protocol, registration, authorship) · `01_search` (raw, dedup, strategies) · `02_screening` · `03_extraction` · `04_rob` · `05_analysis` (R project, data, figures) · `06_manuscript` · `07_submission`.
- [ ] **Single tracker** (Notion/Excel) with columns: review, stage, next action, owner, due date, blocking issue, target journal.
- [ ] **Fortnightly 30-minute stand-up** across all reviews.
- [ ] **Templates reused across every review**: protocol, extraction form, R script, PRISMA checklist, cover letter, response-to-reviewers table.
- [ ] **Recruit and train reviewers**: FY doctors, medical students (Lancaster/UCLan), physiotherapists. Run a 1-hour onboarding (Cochrane Interactive Learning modules are free for NHS users in England via the national Cochrane Library licence; check access).
- [ ] **Senior engagement**: one consultant per review, with a clear and small ask (clinical framing, final approval).

### 10.4 Quality pitfalls and red flags (what editors and reviewers cite)
- **"SR mills" / mass production:** Ioannidis (2016) showed SR/MA production vastly outstrips need, with many redundant, misleading or conflicted reviews [S20]. Editors now screen for redundancy and for paper-mill signatures [S21, S23].
- **Red flags to avoid in your own work:** no protocol; a registration date after data extraction; outcomes switched from the protocol; a PubMed-only search; no full strategy; no dual screening; "quality scores" summed into a single number; pooling RCT + NRS; ignoring heterogeneity; publication bias tests with <10 studies; no GRADE; recommendations that go beyond the evidence; boilerplate text across multiple papers by the same team; topic-hopping outside your specialty.
- **Integrity:** check every included study for retraction (Retraction Watch database, integrated into Zotero/EndNote) and for signs of fabricated trials (the INSPECT-SR tool, 2024/25, for trustworthiness of RCTs). Excluding untrustworthy trials is increasingly expected.
- **AI:** fine as an assistant (deduplication, prioritised screening, drafting R code, language editing), never as a replacement for dual human judgement. Disclose substantive use [S22].

### Master checklist (print this)
- [ ] Overlap check documented
- [ ] Protocol (PRISMA-P) + PROSPERO/OSF registration before screening
- [ ] ≥4 sources (MEDLINE, Embase, CENTRAL, WoS/Scopus) + registries + citation chasing; PRESS-reviewed
- [ ] Dedup logged; search dates recorded
- [ ] Dual independent screening + kappa; reasons for full-text exclusions
- [ ] Piloted form; double extraction; conversion methods cited; author contact logged
- [ ] Design-appropriate RoB tool, dual; robvis figure; RoB used in the analysis
- [ ] REML + HKSJ random effects; τ², I², prediction interval; pre-specified subgroups/sensitivity
- [ ] Egger/funnel only if k ≥ 10; GLMM for proportions; zero-cell plan
- [ ] GRADE SoF table; conclusions in GRADE language
- [ ] PRISMA 2020 + abstract checklist; PRISMA-S; data/code DOI; AI statement
- [ ] Journal is MEDLINE + SCIE (verified on submission day); APC budgeted or waiver checked

---

## Key references (full URLs in B_sources.json)
- Page MJ et al. PRISMA 2020 statement. *BMJ* 2021;372:n71.
- Higgins JPT et al. (eds). *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5 (2024).
- Shamseer L et al. PRISMA-P 2015. *BMJ* 2015;349:g7647.
- Rethlefsen ML et al. PRISMA-S. *Syst Rev* 2021;10:39.
- McGowan J et al. PRESS 2015 guideline. *J Clin Epidemiol* 2016;75:40–46.
- Tricco AC et al. PRISMA-ScR. *Ann Intern Med* 2018;169:467–473.
- Sterne JAC et al. RoB 2. *BMJ* 2019;366:l4898. ROBINS-I V2 (2025).
- Shea BJ et al. AMSTAR 2. *BMJ* 2017;358:j4008.
- Slim K et al. MINORS. *ANZ J Surg* 2003;73:712–716.
- Wan X et al. *BMC Med Res Methodol* 2014;14:135. Luo D et al. *Stat Methods Med Res* 2018;27:1785–1805. Shi J et al. *Res Synth Methods* 2020;11:641–654.
- Schwarzer G et al. Seriously misleading results using inverse of Freeman–Tukey double arcsine. *Res Synth Methods* 2019;10:476–483.
- IntHout J et al. HKSJ method. *BMC Med Res Methodol* 2014;14:25.
- Harrer M et al. *Doing Meta-Analysis with R*. CRC Press 2021 (free online).
- Ioannidis JPA. Mass production of redundant, misleading, and conflicted SRs and MAs. *Milbank Q* 2016;94:485–514.
- Borah R et al. Analysis of the time and workers needed to conduct systematic reviews. *BMJ Open* 2017;7:e012545.
- Cochrane, Campbell Collaboration, JBI and CEE. Position statement on AI use in evidence synthesis (2025), PMC12594113.
