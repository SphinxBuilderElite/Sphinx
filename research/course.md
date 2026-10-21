# 〽️ Research Course
Source: https://app.notion.com/p/3017264699f680999f26f7ed26f6cada (The gallery). Created 2026-02-08. Inline gallery DB **List** (collection://30172646-99f6-80d9-917c-000b6b4c1604; schema Name/Created/Tags) with 4 session pages → `research-course__db_list.json`. Calendar shows "Research course" 2026-02-08, 2026-03-08, 2026-03-15.
Content type: his own lecture notes (bullets + ~70 slide screenshots, not downloaded). Condensed faithfully below; screenshots referenced only.

## Session 1 (2026-02-08) — files: Session_1_summary__notes.pdf, session_1_MCQflachcards.docx
- Find research ideas from discussion/limitations sections; don't reinvent the wheel; validate ideas.
- FINER framework: Feasible, Interesting, Novel, Ethical (Helsinki/IRB), Relevant.
- AI = research assistant, not author; use it to find gaps, MeSH terms, methodology. "**dont get AI in discussion and Reference = dont let it write**" (red heading).
- Medical literature types; indexing (PubMed/Scopus); biomedical (PubMed, Cochrane, CINAHL) vs multidisciplinary (Scopus, Google Scholar, WoS) vs specialised databases.
- MeSH (NLM controlled vocabulary, hierarchical, updated annually); Boolean AND/OR/NOT; worked example (Optical coherence tomography OR OCT) AND (MS OR Multiple sclerosis); PubMed Advanced → details shows MeSH.
- PICO (interventional), PECO (observational), PIRT (diagnostic: Population, Index test, Reference standard, Target).
- Hypotheses: H0 no difference; H1 non-directional vs directional — default two-sided.
- Summary: search → what is known; PICO → what will be studied; hypothesis → how tested.

## Session 2 (2026-03-01 / 03-08)
- Basic vs clinical research; translational T1–T4; primary vs secondary research.
- AI for screening (Rayyan), summaries (Perplexity, Consensus, Scopus AI, Gemini); journal quartiles Q1–Q4.
- Interventional (RCT, NRCT), observational (analytical: cohort forward, case-control backward, cross-sectional snapshot; descriptive: case report/series), diagnostic accuracy. Example: "what mr bambos is doing right now with the guidewires" = interventional.
- Evidence pyramid: SR/MA > RCT > cohort > case-control > case series/reports > expert opinion.
- Prevalence / prevalence ratio (cross-sectional), odds ratio (case-control, 2×2), risk ratio & incidence (cohort), hazard ratio.
- RCTs: randomisation (simple, block, stratified, permuted block within strata, minimisation), sample size in protocol; individual vs cluster vs stepped-wedge; placebo / active comparator / sham; phases 1–4; efficacy vs effectiveness; blinding (open, single, double, triple, assessor); superiority / non-inferiority / equivalence; parallel / crossover / factorial / sequential; explanatory vs pragmatic; invalid allocation (preference, day of attendance); quasi-experimental only when can't randomise. Protocol registration (clinicaltrials).

## Session 3 (2026-03-01/02)
- Recap; PubMed vs Scopus (Scopus doesn't use MeSH); use ChatGPT to extract PICO from abstracts, find gaps, build Boolean strategies for PubMed/Scopus/WoS; apply study-design and language filters; report PRISMA numbers (records per database, duplicates).
- Biostatistics: data, participant, variable, parameter; qualitative (nominal, binary, ordinal) vs quantitative (continuous, discrete); transforming continuous → categorical.
- Descriptives in Jamovi: mean/SD (normal) vs median/IQR (non-normal); range, quartiles; histogram; Shapiro-Wilk p>0.05 = normal, test each group separately; skew.
- Inferential: p-value <0.05; 95% CI must not cross null (MD null 0, RR null 1); statistical vs clinical significance; effect size; marginal p=0.05 dilemma.

## Session 4 (2026-03-08) — files: SAP.docx, orthopedic_dataset.xlsx
- Recap of sessions 1–3.
- Statistical Analysis Plan first. Educational dataset: "Comparative Clinical Outcomes of Early Surgical Intervention Versus Conservative Management in Patients With Orthopedic Degenerative Joint Disease" — observational comparative cohort, 150 patients, Group 1 Early Surgery vs Group 2 Conservative; subgroups Type A–D; follow-up baseline/1/3/12 months; time-to-event up to 365 days.
- Variable table (25 variables): group, subgroup, age, sex, bmi, comorbidity_count, diabetes, hypertension, smoker, baseline_pain_VAS, baseline_KSS, baseline_WOMAC, CRP (skewed), operation_time, blood_loss, complication (primary outcome), infection, readmission, mortality, LOS, followup_pain, followup_KSS, rad_score, functional_score, time_to_event, event.
- Excel data cleaning: Ctrl+A → Ctrl+T table, filters, one variable per column / one patient per row, dedupe IDs, unify spellings (Male/M), code binaries 1/0 with =IF, paste-values, conditional formatting to flag blanks; group-based (and subgroup-based) median imputation; report as MICE (5 imputed datasets, MAR).
- Jamovi: import, set variable types, choose tests via algorithm.
